import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'ingredient-form';
            case 'Delete':
                return 'ingredient-delete';
            case 'Details':
            default:
                return 'ingredient-details';
        }
    }),

    modalSubmitAction: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'saveIngredient';
            case 'Delete':
                return 'deleteIngredient';
            case 'Details':
            default:
                return 'closeModal';
        }
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

        onModalClosed() {
            this.get('selectedIngredient').rollbackAttributes();
            this.set('selectedIngredient', null);
            this.set('modalType', null);
        },

        saveIngredient() {
            let ingredient = this.get('selectedIngredient');
            if (ingredient) {
                ingredient.save();
            }

            this.send('closeModal');
        },

        deleteIngredient() {
            let ingredient = this.get('selectedIngredient');
            if (ingredient) {
                ingredient.destroyRecord();
            }

            this.send('closeModal');
        }
    }
});
