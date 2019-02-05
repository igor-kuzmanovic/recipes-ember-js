import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'category',
    modalHelper: inject('modal-helper'),

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
            let category = this.get('selectedCategory');
            if (category) {
                category.save();
            }

            this.send('closeModal');
        },

        deleteCategory() {
            let category = this.get('selectedCategory');
            if (category) {
                category.destroyRecord();
            }

            this.send('closeModal');
        }
    }
});
