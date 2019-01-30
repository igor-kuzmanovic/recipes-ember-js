import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedTag: null,
    isModalOpen: false,
    modalType: '',

    modalBodyComponent: computed('modalType', function() {
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
            if (this.get('modalType') === 'Create') {
                tag = this.store.createRecord('tag');
            }
            this.set('selectedTag', tag);
            this.set(`isModalOpen`, true);
        },
        closedModal() {
            this.set('selectedTag', null);
        }
    }
});
