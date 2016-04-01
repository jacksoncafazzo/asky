import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      console.log(newQuestion);
      this.transitionTo('index');
    }
  }
});
