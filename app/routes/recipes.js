import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model() {
        return RSVP.hash({
            recipes: this.store.findAll('recipe', {include: 'category,ingredients,tags'}),
            ingredients: this.store.findAll('ingredient'),
            categories: this.store.findAll('category'),
            tags: this.store.findAll('tag')
        });
    }

});
