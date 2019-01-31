import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
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

    actions: {
        closeSelf() {
            this.set(`isOpen`, false);
        }
    }
});
