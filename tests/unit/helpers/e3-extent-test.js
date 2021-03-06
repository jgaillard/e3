import { e3Extent } from '../../../helpers/e3-extent';
import { module, test } from 'qunit';

module('Unit | Helper | e3 extent');

test('handle arrays of values', function(assert) {
  var result;
  result = e3Extent([[1,2,3,4]], {});
  assert.deepEqual(result, [1,4]);

  result = e3Extent([[4]], {});
  assert.deepEqual(result, [4,4]);

  result = e3Extent([[{val:1},{val:100},{val:20},{val:-5}]], {key :'val'});
  assert.deepEqual(result, [-5,100]);
});

test('handle options', function(assert) {
  var result;
  result = e3Extent([[1,2,3,4,5]], {padding: 0.25});
  assert.deepEqual(result, [0,6]);

  result = e3Extent([[1,2,3,4,5]], {'min-value': 0});
  assert.deepEqual(result, [0,5]);

  result = e3Extent([[1,2,3,4,5]], {'max-value': 10});
  assert.deepEqual(result, [1,10]);

  result = e3Extent([[1,2,3,4,5,6]], {'min-delta': 10});
  assert.deepEqual(result, [-1.5,8.5]);
});