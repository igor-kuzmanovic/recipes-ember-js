import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modalHelper: inject(),
    modelType: 'tag',

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
            this.get('selectedTag').save();

            this.send('closeModal');
        },

        deleteTag() {
            this.get('selectedTag').destroyRecord();

            this.send('closeModal');
        }
    }
});
