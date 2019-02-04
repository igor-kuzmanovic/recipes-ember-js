import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    title: computed('type', function() {
        let modelType = this.get('modelType');
        switch (this.get('type')) {
            case 'Create':
                return `Create a new ${modelType}`;
            case 'Details':
                return `${modelType} - Details`;
            case 'Update':
                return `Update ${modelType}`;
            case 'Delete':
                return `Delete confirmation`;
            default:
                return 'Title - Error';
        }
    }),

    actions: {
        onHidden() {
            this.get('onHidden')();
            this.set(`isOpen`, false);
        }
    }

});
