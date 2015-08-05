import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bubble-1');
  this.route('cher-jules');
  this.route('stacked-bar');
});

export default Router;
