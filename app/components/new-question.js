import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
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
        question: this.get('question'),
        author: this.get('q-author'),
        notes: this.get('q-notes'),
        posted: months[newMonth] + " " + newDay + " " + newYear + " at " + newHours + ":" + newMinutes,
      };
      console.log(params);
      this.set('addNewQuestion', false);
      this.set('question', "");
      this.set('q-author', "");
      this.set('q-notes', "");
      this.sendAction('save2', params);
    }
  }
});
