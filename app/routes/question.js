import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    update(question, params) {
      console.log(question);
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
    vote(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question', answer.question.id);
    }
  }
});
