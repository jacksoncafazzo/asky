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
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes'),
        posted: newDate,
        // qid: this.get('question.id')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
