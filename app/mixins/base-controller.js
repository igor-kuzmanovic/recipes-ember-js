import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({

    modelType: 'undefined',

    modelTypeCapitalized: computed('text', function() {
        let modelType = this.get('modelType');

        return modelType.charAt(0).toUpperCase() + modelType.substring(1);
    }),

    modal: computed('modalType', function() {
        return {
            type: this.get('modalType'),
            modelType: this.get('modelTypeCapitalized'),
            title: this._getModalTitle(),
            bodyComponent: this._getModalBodyComponent(),
            submitAction: this._getModalSubmitAction(),
            cancelAction: 'closeModal',
            onCloseAction: 'closeModal',
            onClosedAction: 'onModalClosed'
        };
    }),

    _getModalTitle(modalType, modelType) {
        modelType = this.get('modelTypeCapitalized');

        switch (this.get('modalType')) {
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
    },

    _getModalBodyComponent() {
        let modelType = this.get('modelType');

        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return `${modelType}-form`;
            case 'Delete':
                return `${modelType}-delete`;
            case 'Details':
            default:
                return `${modelType}-details`;
        }
    },

    _getModalSubmitAction() {
        switch (this.get('modalType')) {
            case 'Create':
            case 'Update':
                return `save`;
            case 'Delete':
                return `delete`;
            case 'Details':
            default:
                return 'closeModal';
        }
    },

    actions: {
        openModal(modalType, selected) {
            this.set('modalType', modalType);

            if (modalType === 'Create') {
                selected = this.store.createRecord(this.get('modelType'));
            }

            this.set(`selected`, selected);
            this.set(`modal.isOpen`, true);
        },

        closeModal() {
            this.set(`modal.isOpen`, false);
        },

        onModalClosed() {
            this.get('selected').rollbackAttributes();
            this.set('selected', null);
        },

        save() {
            this.get('selected').save();

            this.send('closeModal');
        },

        delete() {
            this.get('selected').destroyRecord();

            this.send('closeModal');
        }
    }

});
