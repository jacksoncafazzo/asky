import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        question: this.get('question'),
        author: this.get('q-author'),
        notes: this.get('q-notes'),
        posted: new Date()
      };
      this.set('addNewQuestion', false);
      this.set('question', "");
      this.set('q-author', "");
      this.set('q-notes', "");
      this.sendAction('save2', params);
    }
  }
});
