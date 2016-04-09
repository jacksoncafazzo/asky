import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  currentUser: Ember.computed('session.currentUser', function() {
    return this.get('session.currentUser');
  }),

  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      // userprofile: this.store.findRecord('userprofile', this.get('currentUser.profileImageURL'))
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
    newUser(params) {
      var newUser = this.store.createRecord('userprofile', params);
      newUser.save();
      // console.log(params, newUser);
      this.transitionTo('index');
    },
    signIn(provider, params) {
      params['provider'] = provider;
      this.get('session').open('firebase', params).then(() => {
        var newParams = {};
        newParams['user'] = this.get('currentUser');
        newParams['userName'] = params.userName;
        newParams['joined'] = new Date();
        var newUser = this.store.createRecord('userprofile', newParams);
        newUser.save();
        console.log(newUser.id);
        // controller.set('email', null);
        // controller.set('password', null);
        this.transitionTo('user', newUser.id);
      }, (error) => {
        console.log(error);
      });
    },

  }
});
