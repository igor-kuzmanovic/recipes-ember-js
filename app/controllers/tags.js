import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'tag',
    modalHelper: inject('modal-helper'),

    modal: computed('modalType', function() {
        return this.get('modalHelper').getModalProperties(this.get('modalType'), this.get('modelType'));
    }),

    actions: {
        openModal(modalType, tag) {
            this.set('modalType', modalType);

            if (modalType === 'Create') {
                tag = this.store.createRecord('tag');
            }

            this.set('selectedTag', tag);
            this.set(`modal.isOpen`, true);
        },

        closeModal() {
            this.set(`modal.isOpen`, false);
        },

        onModalClosed() {
            this.get('selectedTag').rollbackAttributes();
            this.set('selectedTag', null);
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
