import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'ingredient',
    modalHelper: inject('modal-helper'),

    modalBodyComponent: computed('modalType', function() {
        return this.get('modalHelper').getModalBodyComponent(this.get('modalType'), this.get('modelType'));
    }),

    modalSubmitAction: computed('modalType', function() {
        return this.get('modalHelper').getModalSubmitAction(this.get('modalType'), this.get('modelType'));
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
