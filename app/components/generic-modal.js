import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    type: '',
    modelType: '',
    isOpen: false,

    title: computed('type', 'modelType', function() {
        if (this.get('type') === 'Create') {
            return `Create a new ${this.get('modelType')}`;
        } else if (this.get('type') === 'Details') {
            return `${this.get('modelType')} Details`;
        } else if (this.get('type') === 'Update') {
            return `Update ${this.get('modelType')}`;
        } else if (this.get('type') === 'Delete') {
            return `Delete ${this.get('modelType')}`;
        }
        return '';
    }),

    hasFooter: computed('type', function() {
        if (this.get('type') === 'Create') {
            return false;
        } else if (this.get('type') === 'Details') {
            return false;
        } else if (this.get('type') === 'Update') {
            return false;
        } else if (this.get('type') === 'Delete') {
            return true;
        }
        return false;
    }),

    actions: {
        openSelf() {
            this.set(`isOpen`, true);
        },
        closeSelf() {
            this.set(`isOpen`, false);
        },
        closedSelf() {
        },
        submitSelf() {
            this.send('closeSelf');
        }
    }
});
