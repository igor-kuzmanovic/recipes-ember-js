import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
    model() {
        return this.store.findAll('tag');
    }
});
