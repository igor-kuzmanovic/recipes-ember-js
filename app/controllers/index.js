import Controller from '@ember/controller';
import BaseController from '../mixins/base-controller';

export default Controller.extend(BaseController, {

    init() {
        this._super(...arguments);

        this.set('modelType', 'recipe');
    },

    actions: {
        filterResults(filter = null) {
            let query = {
                include: 'category,ingredients,tags',
            };

            if (filter) {
                query.filter = filter;
            }

            this.get('store').query('recipe', query).then(data => {
                this.set('model.recipes', data);
            });
        }
    }
});
