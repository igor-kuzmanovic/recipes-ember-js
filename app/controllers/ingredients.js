import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modalHelper: inject(),
    modelType: 'ingredient',

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
            this.get('selectedIngredient').save();

            this.send('closeModal');
        },

        deleteIngredient() {
            this.get('selectedIngredient').destroyRecord();

            this.send('closeModal');
        }
    }
});
