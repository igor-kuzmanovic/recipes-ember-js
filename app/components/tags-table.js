import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    selectedTag: null,
    isModalOpen: false,
    modalType: '',

    modalBodyType: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'tag-form';
        } else if (this.get('modalType') === 'Details') {
            return 'tag-details';
        } else if (this.get('modalType') === 'Update') {
            return 'tag-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'tag-delete-confirmation';
        }
        return '';
    }),

    actions: {
        openModal(modalType, tag) {
            this.set('modalType', modalType);
            this.set('selectedTag', tag);
            this.set(`isModalOpen`, true);
        },
        closeModal() {
            this.set(`isModalOpen`, false);
        },
        closedModal() {
            this.set('selectedTag', null);
        }
    }
});
