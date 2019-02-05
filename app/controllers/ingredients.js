import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'ingredient',
    modalHelper: inject('modal-helper'),

    modal: computed('modalType', function() {
        return this.get('modalHelper').getModalProperties(this.get('modalType'), this.get('modelType'));
    }),

    actions: {
        openModal(modalType, ingredient) {
            this.set('modalType', modalType);

            if (modalType === 'Create') {
                ingredient = this.store.createRecord('ingredient');
            }

            this.set('selectedIngredient', ingredient);
            this.set(`modal.isOpen`, true);
        },

        closeModal() {
            this.set(`modal.isOpen`, false);
        },

        onModalClosed() {
            this.get('selectedIngredient').rollbackAttributes();
            this.set('selectedIngredient', null);
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
