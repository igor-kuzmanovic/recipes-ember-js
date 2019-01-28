import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('recipe', { include: 'category,ingredients,tags' });
    }
});
