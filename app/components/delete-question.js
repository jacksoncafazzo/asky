import Ember from 'ember';

export default Ember.Component.extend({
  isCurrentUser: Ember.computed('session.currentUser.email', 'question.author', function() {
    if (this.get('session.currentUser.email') === this.get('question.author')) {
      return true;
    }
    else {
      return false;
    }
  }),
});
