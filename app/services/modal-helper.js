import Service from '@ember/service';

export default Service.extend({

    getModalProperties(modalType, modelType) {
        return {
            type: modalType,
            modelType: this._capitalizeString(modelType),
            title: this.getModalTitle(modalType, modelType),
            bodyComponent: this.getModalBodyComponent(modalType, modelType),
            submitAction: this.getModalSubmitAction(modalType, modelType),
            cancelAction: 'closeModal',
            onCloseAction: 'closeModal',
            onClosedAction: 'onModalClosed'
        };
    },

    getModalTitle(modalType, modelType) {
        modelType = this._capitalizeString(modelType);

        switch (modalType) {
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

    getModalBodyComponent(modalType, modelType) {
        modelType = modelType.toLowerCase();

        switch (modalType) {
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

    getModalSubmitAction(modalType, modelType) {
        modelType = this._capitalizeString(modelType);

        switch (modalType) {
            case 'Create':
            case 'Update':
                return `save${modelType}`;
            case 'Delete':
                return `delete${modelType}`;
            case 'Details':
            default:
                return 'closeModal';
        }
    },

    _capitalizeString(text) {
        return text.charAt(0).toUpperCase() + text.substring(1);
    }

});
