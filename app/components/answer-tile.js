import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    vote(answer, params) {
      this.sendAction('vote', answer, params);
    }
  }
});
