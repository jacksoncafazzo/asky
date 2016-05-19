import Ember from 'ember';

export default Ember.Component.extend({
  service: Ember.inject.service('display-service'),
  actions: {
    update(question, params) {
    this.sendAction('update', question, params);
    },
    delete(question) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.sendAction('destroyQuestion', question);
      }
    },
    vote(answer, params) {
      this.sendAction('vote', answer, params);
    },
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    
  }
});
