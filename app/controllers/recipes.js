import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'recipe-form';
        } else if (this.get('modalType') === 'Details') {
            return 'recipe-details';
        } else if (this.get('modalType') === 'Update') {
            return 'recipe-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'recipe-delete';
        }

        return 'recipe-details';
    }),

    onSubmitAction: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'saveRecipe';
        } else if (this.get('modalType') === 'Details') {
            return 'default';
        } else if (this.get('modalType') === 'Update') {
            return 'saveRecipe';
        } else if (this.get('modalType') === 'Delete') {
            return 'deleteRecipe';
        }

        return 'default';
    }),

    actions: {
        openModal(modalType, recipe) {
            this.set('modalType', modalType);

            if (this.get('modalType') === 'Create') {
                recipe = this.store.createRecord('recipe');
            }

            this.set('selectedRecipe', recipe);
            this.set(`isModalOpen`, true);
        },

        closeModal() {
            this.set('isModalOpen', false);
        },

        closedModal() {
            this.set('selectedRecipe', null);
            this.set('modalType', null);
        },

        saveRecipe() {
            if (this.get('selectedRecipe')) {
                let recipe = this.get('selectedRecipe');
                recipe.save();

                this.send('closeModal');
            }
        },

        deleteRecipe() {
            if (this.get('selectedRecipe')) {
                let recipe = this.get('selectedRecipe');
                recipe.destroyRecord();

                this.send('closeModal');
            }
        },

        default() {
        }
    }
});
