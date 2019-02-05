import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'tag',
    modalHelper: inject('modal-helper'),

    modalBodyComponent: computed('modalType', function() {
        return this.get('modalHelper').getModalBodyComponent(this.get('modalType'), this.get('modelType'));
    }),

    modalSubmitAction: computed('modalType', function() {
        return this.get('modalHelper').getModalSubmitAction(this.get('modalType'), this.get('modelType'));

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
