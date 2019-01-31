import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'category-form';
        } else if (this.get('modalType') === 'Details') {
            return 'category-details';
        } else if (this.get('modalType') === 'Update') {
            return 'category-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'category-delete';
        }

        return 'category-details';
    }),

    onSubmitAction: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'saveCategory';
        } else if (this.get('modalType') === 'Details') {
            return 'default';
        } else if (this.get('modalType') === 'Update') {
            return 'saveCategory';
        } else if (this.get('modalType') === 'Delete') {
            return 'deleteCategory';
        }

        return 'default';
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
        closedModal() {
            this.set('selectedCategory', null);
            this.set('modalType', null);
        },
        saveCategory() {
            if (this.get('selectedCategory')) {
                let category = this.get('selectedCategory');
                category.save();

                this.send('closeModal');
            }
        },
        deleteCategory() {
            if (this.get('selectedCategory')) {
                let category = this.get('selectedCategory');
                category.destroyRecord();

                this.send('closeModal');
            }
        },
        default() {
        }
    }
});
