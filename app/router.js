import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('index', { path: '/' });
    this.route('recipe', { path: 'recipe/:recipe_id' });
    this.route('create');
  });
  this.route('categories');
  this.route('tags');
});

export default Router;
