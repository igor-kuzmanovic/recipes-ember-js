import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'tag-form';
        } else if (this.get('modalType') === 'Details') {
            return 'tag-details';
        } else if (this.get('modalType') === 'Update') {
            return 'tag-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'tag-delete';
        }

        return 'tag-details';
    }),

    onSubmitAction: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'saveTag';
        } else if (this.get('modalType') === 'Details') {
            return 'default';
        } else if (this.get('modalType') === 'Update') {
            return 'saveTag';
        } else if (this.get('modalType') === 'Delete') {
            return 'deleteTag';
        }

        return 'default';
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
        closedModal() {
            this.set('selectedTag', null);
            this.set('modalType', null);
        },
        saveTag() {
            if (this.get('selectedTag')) {
                let tag = this.get('selectedTag');
                tag.save();

                this.send('closeModal');
            }
        },
        deleteTag() {
            if (this.get('selectedTag')) {
                let tag = this.get('selectedTag');
                tag.destroyRecord();

                this.send('closeModal');
            }
        },
        default() {
        }
    }
});
