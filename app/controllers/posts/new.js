import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      console.log('saving post');
    }
  }
});
