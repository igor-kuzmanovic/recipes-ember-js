import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    modalBodyComponent: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'tag-form';
            case 'Delete':
                return 'tag-delete';
            case 'Details':
            default:
                return 'tag-details';
        }
    }),

    modalSubmitAction: computed('modalType', function() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return 'saveTag';
            case 'Delete':
                return 'deleteTag';
            case 'Details':
            default:
                return 'closeModal';
        }
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

        closeModal() {
            this.set('isModalOpen', false);
        },

        onModalClosed() {
            this.get('selectedTag').rollbackAttributes();
            this.set('selectedTag', null);
            this.set('modalType', null);
        },

        saveTag() {
            let tag = this.get('selectedTag');
            if (tag) {
                tag.save();
            }

            this.send('closeModal');
        },

        deleteTag() {
            let tag = this.get('selectedTag');
            if (tag) {
                tag.destroyRecord();
            }

            this.send('closeModal');
        }
    }
});
