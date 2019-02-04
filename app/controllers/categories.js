import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'category-form';
            case 'Delete':
                return 'category-delete';
            case 'Details':
            default:
                return 'category-details';
        }
    }),

    modalSubmitAction: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'saveCategory';
            case 'Delete':
                return 'deleteCategory';
            case 'Details':
            default:
                return 'closeModal';
        }
    }),

    actions: {
        openModal(modalType, category) {
            this.set('modalType', modalType);

            if (this.get('modalType') === 'Create') {
                category = this.store.createRecord('category');
            }

            this.set('selectedCategory', category);
            this.set(`isModalOpen`, true);
        },

        closeModal() {
            this.set('isModalOpen', false);
        },

        onModalClosed() {
            this.get('selectedCategory').rollbackAttributes();
            this.set('selectedCategory', null);
            this.set('modalType', null);
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
