import DS from 'ember-data';
import ENV from 'recipes-ember/config/environment'

export default DS.JSONAPIAdapter.extend({
    host: ENV.APP.HOST
});
