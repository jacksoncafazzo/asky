import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      console.log("here is your userprofile", question);
      var newDate = new Date();
      var newDay = newDate.getDay();
      var newMonth = newDate.getMonth();
      var newYear = newDate.getFullYear();
      var newHours = newDate.getHours();
      var newMinutes = newDate.getMinutes();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes'),
        posted: months[newMonth] + " " + newDay + " " + newYear + " at " + newHours + ":" + newMinutes,
        qid: this.get('question.id')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
