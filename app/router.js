import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('recipes', { path: '/recipes' }, function() {
    this.route('index', { path: '/' });
    this.route('create', { path: '/create' });
    this.route('recipe', { path: '/recipe' }, function() {
      this.route('index', { path: '/:recipe_id' });
      this.route('edit', { path: '/:recipe_id/edit'});
    });
  });

  this.route('ingredients', { path: '/ingredients' }, function() {
    this.route('index', { path: '/' });
    this.route('create', { path: '/create' });
    this.route('ingredient', { path: '/tag' }, function() {
      this.route('index', { path: '/:ingredient_id' });
      this.route('edit', { path: '/:ingredient_id/edit'});
    });
  });

  this.route('categories', { path: '/categories' }, function() {
    this.route('index', { path: '/' });
    this.route('create', { path: '/create' });
    this.route('category', { path: '/category' }, function() {
      this.route('index', { path: '/:category_id' });
      this.route('edit', { path: '/:category_id/edit'});
    });
  });

  this.route('tags', { path: '/tags' }, function() {
    this.route('index', { path: '/' });
    this.route('create', { path: '/create' });
    this.route('tag', { path: '/tag' }, function() {
      this.route('index', { path: '/:tag_id' });
      this.route('edit', { path: '/:tag_id/edit'});
    });
  });
});

export default Router;
