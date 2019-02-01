import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recipes/recipe/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recipes/recipe/edit');
    assert.ok(route);
  });
});
