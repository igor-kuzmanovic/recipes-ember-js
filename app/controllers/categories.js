import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modalHelper: inject(),
    modelType: 'category',

    modal: computed('modalType', function() {
        return this.get('modalHelper').getModalProperties(this.get('modalType'), this.get('modelType'));
    }),

    actions: {
        openModal(modalType, category) {
            this.set('modalType', modalType);

            if (modalType === 'Create') {
                category = this.store.createRecord('category');
            }

            this.set('selectedCategory', category);
            this.set(`modal.isOpen`, true);
        },

        closeModal() {
            this.set(`modal.isOpen`, false);
        },

        onModalClosed() {
            this.get('selectedCategory').rollbackAttributes();
            this.set('selectedCategory', null);
        },

        saveCategory() {
            this.get('selectedCategory').save();

            this.send('closeModal');
        },

        deleteCategory() {
            this.get('selectedCategory').destroyRecord();

            this.send('closeModal');
        }
    }
});
