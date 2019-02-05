import Service from '@ember/service';

export default Service.extend({

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
        modelType = modelType.toLowerCase();
        modelType = modelType.charAt(0).toUpperCase() + modelType.substring(1);

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
    }

});
