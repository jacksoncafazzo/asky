import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  currentUser: Ember.computed('userName', function() {
    return this.get('userName');
  }),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      // userprofile: this.store.findRecord('userprofile', (this.get('userprofile.id')))
    });
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    updateUserName(userprofile, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          userprofile.set(key,params[key]);
        }
      });
      userprofile.save();
      this.transitionTo('user', userprofile.id);
    },
    newUser(params) {
      var newUser = this.store.createRecord('userprofile', params);
      newUser.save();
      console.log(params, newUser);
      this.transitionTo('index');
    }

  }
});
