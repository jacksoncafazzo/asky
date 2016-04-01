import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    save1() {
      var newDate = new Date();
      var newDay = newDate.getDay();
      var newMonth = newDate.getMonth();
      var newYear = newDate.getFullYear();
      var newHours = newDate.getHours();
      var newMinutes = newDate.getMinutes();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        posted: months[newMonth] + " " + newDay + " " + newYear + " at " + newHours + ":" + newMinutes,
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
      this.set('answer', "");
      this.set('author', "");
    }
  }
});
