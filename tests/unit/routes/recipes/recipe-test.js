import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recipes/recipe', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recipes/recipe');
    assert.ok(route);
  });
});
