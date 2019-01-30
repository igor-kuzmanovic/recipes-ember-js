import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    selectedCategory: null,
    isModalOpen: false,
    modalType: '',

    modalBodyType: computed('modalType', function() {
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
            this.set('selectedCategory', category);
            this.set(`isModalOpen`, true);
        },
        closeModal() {
            this.set(`isModalOpen`, false);
        },
        closedModal() {
            this.set('selectedCategory', null);
        }
    }
});
