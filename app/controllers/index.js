import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modalHelper: inject(),
    modelType: 'recipe',

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
            this.get('selectedRecipe').save();

            this.send('closeModal');
        },

        deleteRecipe() {
            this.get('selectedRecipe').destroyRecord();

            this.send('closeModal');
        },

        filterResults(filter = null) {
            let query = {
                include: 'category,ingredients,tags',
            };

            if (filter) {
                query.filter = filter;
            }

            this.get('store').query('recipe', query).then(data =>{
                this.set('model.recipes', data);
            });
        }
    }
});
