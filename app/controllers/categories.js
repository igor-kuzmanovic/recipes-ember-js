import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedCategory: null,
    modalType: '',
    isModalOpen: false,

    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'category-form';
        } else if (this.get('modalType') === 'Details') {
            return 'category-details';
        } else if (this.get('modalType') === 'Update') {
            return 'category-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'category-delete-confirmation';
        }
        return '';
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
        closedModal() {
            this.set('selectedCategory', null);
        }
    }
});
