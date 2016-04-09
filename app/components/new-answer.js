import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    save1() {
      var newDate = moment();
      var params = {
        title: this.get('title'),
        author: this.get('session.currentUser.email'),
        posted: newDate,
        question: this.get('question'),
        votes: 0
      };
      console.log(params);
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
      this.set('answer', "");
      this.set('author', "");
    }
  }
});
