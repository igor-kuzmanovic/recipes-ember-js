import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    modalType: '',
    objectType: '',
    isModalOpen: false,

    title: computed('modalType', 'objectType', function() {
        if (this.get('modalType') === 'Create') {
            return `Create a new ${this.get('objectType')}`;
        } else if (this.get('modalType') === 'Details') {
            return `${this.get('objectType')} Details`;
        } else if (this.get('modalType') === 'Update') {
            return `Update ${this.get('objectType')}`;
        } else if (this.get('modalType') === 'Delete') {
            return `Delete ${this.get('objectType')}`;
        }
        return '';
    }),

    hasFooter: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return false;
        } else if (this.get('modalType') === 'Details') {
            return false;
        } else if (this.get('modalType') === 'Update') {
            return false;
        } else if (this.get('modalType') === 'Delete') {
            return true;
        }
        return false;
    }),

    actions: {
        openModal() {
            this.set(`isModalOpen`, true);
        },
        closeModal() {
            this.set(`isModalOpen`, false);
        },
        closedModal() {
        },
        submitModal() {
            this.send('closeModal');
        }
    }
});
