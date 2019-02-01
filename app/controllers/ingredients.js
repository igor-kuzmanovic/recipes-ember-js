import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'ingredient-form';
        } else if (this.get('modalType') === 'Details') {
            return 'ingredient-details';
        } else if (this.get('modalType') === 'Update') {
            return 'ingredient-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'ingredient-delete';
        }

        return 'ingredient-details';
    }),

    onSubmitAction: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'saveIngredient';
        } else if (this.get('modalType') === 'Details') {
            return 'default';
        } else if (this.get('modalType') === 'Update') {
            return 'saveIngredient';
        } else if (this.get('modalType') === 'Delete') {
            return 'deleteIngredient';
        }

        return 'default';
    }),

    actions: {
        openModal(modalType, ingredient) {
            this.set('modalType', modalType);

            if (this.get('modalType') === 'Create') {
                ingredient = this.store.createRecord('ingredient');
            }

            this.set('selectedIngredient', ingredient);
            this.set(`isModalOpen`, true);
        },

        closeModal() {
            this.set('isModalOpen', false);
        },

        closedModal() {
            this.set('selectedIngredient', null);
            this.set('modalType', null);
        },

        saveIngredient() {
            if (this.get('selectedIngredient')) {
                let ingredient = this.get('selectedIngredient');
                ingredient.save();

                this.send('closeModal');
            }
        },

        deleteIngredient() {
            if (this.get('selectedIngredient')) {
                let ingredient = this.get('selectedIngredient');
                ingredient.destroyRecord();

                this.send('closeModal');
            }
        },

        default() {
        }
    }
});
