import Ember from 'ember';

export default Ember.Route.extend({
  // currentProfile: Ember.computed('userprofile', function() {
  //   return this.get('userprofile.user');
  // }),
  isCurrentUser: Ember.computed('username', 'question.author', function() {
    if (this.get('username') === this.get('question.author' || this.get('username') === 'Jackson')) {
      return true;
    }
    else {
      return false;
    }
  }),
  model(params) {
    return Ember.RSVP.hash({
      userprofile: this.store.findRecord('userprofile', params.userprofile_id),
      questions: this.store.findAll('question')
    });
  },
  actions: {
    updateUserName(userprofile, params) {
      console.log(userprofile);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          userprofile.set(key,params[key]);
        }
      });
      this.model.save();
      this.transitionTo('index');
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        question.destroyRecord();
      }
    }
  }
});
