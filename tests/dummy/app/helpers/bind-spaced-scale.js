import Ember from 'ember';
const {keys} = Object;

export function bindSpacedScale(params) {
  let [scale, key, space] = params;
  if(scale) {
    var resultScale = function(data) {
      return scale(data, key * space);
    };

    // Add the additional properties on this scale.
    keys(scale).forEach(key => {
      resultScale[key] = scale[key];
    });

    return resultScale;
  }
}

export default Ember.Helper.helper(bindSpacedScale);
