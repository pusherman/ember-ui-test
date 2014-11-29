import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts');
  this.resource('posts.new', {path: 'posts/new'});
  this.resource('post', {path: 'posts/:post_id'});
});

export default Router;
