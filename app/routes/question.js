import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      console.log(newAnswer);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
