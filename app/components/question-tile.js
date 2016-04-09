import Ember from 'ember';

export default Ember.Component.extend({
  isCurrentUser: Ember.computed('userprofile.userName', 'question.author', function() {
    if (this.get('userprofile.userName') === this.get('question.author' || this.get('userprofile.userName') === 'Jackson')) {
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
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
  }
});
