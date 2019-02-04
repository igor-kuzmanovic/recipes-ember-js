import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'recipe-form';
            case 'Delete':
                return 'recipe-delete';
            case 'Details':
            default:
                return 'recipe-details';
        }
    }),

    modalSubmitAction: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'saveRecipe';
            case 'Delete':
                return 'deleteRecipe';
            case 'Details':
            default:
                return 'closeModal';
        }
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

        onModalClosed() {
            this.get('selectedRecipe').rollbackAttributes();
            this.set('selectedRecipe', null);
            this.set('modalType', null);
        },

        saveRecipe() {
            let recipe = this.get('selectedRecipe');
            if (recipe) {
                recipe.save();
            }

            this.send('closeModal');
        },

        deleteRecipe() {
            let recipe = this.get('selectedRecipe');
            if (recipe) {
                recipe.destroyRecord();
            }

            this.send('closeModal');
        }
    }
});
