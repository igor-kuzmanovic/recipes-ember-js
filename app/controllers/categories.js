import Controller from '@ember/controller';
import BaseController from '../mixins/base-controller';

export default Controller.extend(BaseController, {

    init() {
        this._super(...arguments);
        this.set('modelType', 'category');
    }

});
