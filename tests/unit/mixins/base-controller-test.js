import EmberObject from '@ember/object';
import BaseControllerMixin from 'recipes-ember/mixins/base-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | base-controller', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let BaseControllerObject = EmberObject.extend(BaseControllerMixin);
    let subject = BaseControllerObject.create();
    assert.ok(subject);
  });
});
