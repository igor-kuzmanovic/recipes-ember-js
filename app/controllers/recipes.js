import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'recipe',
    modalHelper: inject('modal-helper'),

    modalBodyComponent: computed('modalType', function() {
        return this.get('modalHelper').getModalBodyComponent(this.get('modalType'), this.get('modelType'));
    }),

    modalSubmitAction: computed('modalType', function() {
        return this.get('modalHelper').getModalSubmitAction(this.get('modalType'), this.get('modelType'));
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
