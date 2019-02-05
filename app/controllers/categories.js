import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

    modelType: 'category',
    modalHelper: inject('modal-helper'),

    modalBodyComponent: computed('modalType', function() {
        return this.get('modalHelper').getModalBodyComponent(this.get('modalType'), this.get('modelType'));
    }),

    modalSubmitAction: computed('modalType', function() {
        return this.get('modalHelper').getModalSubmitAction(this.get('modalType'), this.get('modelType'));

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

        onModalClosed() {
            this.get('selectedCategory').rollbackAttributes();
            this.set('selectedCategory', null);
            this.set('modalType', null);
        },

        saveCategory() {
            let category = this.get('selectedCategory');
            if (category) {
                category.save();
            }

            this.send('closeModal');
        },

        deleteCategory() {
            let category = this.get('selectedCategory');
            if (category) {
                category.destroyRecord();
            }

            this.send('closeModal');
        }
    }
});
