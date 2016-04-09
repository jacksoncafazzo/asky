import Ember from 'ember';

export default Ember.Component.extend({
  isCurrentUser: Ember.computed('username', 'question.author', function() {
    if (this.get('username') === this.get('question.author' || this.get('username') === 'Jackson')) {
      return true;
    }
    else {
      return false;
    }
  }),
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
            this.sendAction('destroyQuestion', question);
      }
    },

  }
});
