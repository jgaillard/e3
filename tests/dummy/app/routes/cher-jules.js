import Ember from 'ember';

let feedback = [{
      'time': '2015-08-00T14:00:00-07:00',
          'goodCount': 123,
          'badCount': 9,
          'headCount': 139,
          'clientId': 'ABC'
  },
  {
      'time': '2015-08-00T14:00:00-07:00',
          'goodCount': 322,
          'badCount': 4,
          'headCount': 139,
          'clientId': 'DEF'
  }
];

export default Ember.Route.extend({
  model() {
    return feedback;
  },
});
