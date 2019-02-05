import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'recipe',
    modalHelper: inject('modal-helper'),

    modal: computed('modalType', function() {
        return this.get('modalHelper').getModalProperties(this.get('modalType'), this.get('modelType'));
    }),

    actions: {
        openModal(modalType, recipe) {
            this.set('modalType', modalType);

            if (modalType === 'Create') {
                recipe = this.store.createRecord('recipe');
            }

            this.set('selectedRecipe', recipe);
            this.set(`modal.isOpen`, true);
        },

        closeModal() {
            this.set(`modal.isOpen`, false);
        },

        onModalClosed() {
            this.get('selectedRecipe').rollbackAttributes();
            this.set('selectedRecipe', null);
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
