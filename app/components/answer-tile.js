import Ember from 'ember';

export default Ember.Component.extend({
  vote(answer, params) {
    this.sendAction('vote', answer, params);
  }
});
