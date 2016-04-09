import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('userName'),
        notes: this.get('q-notes'),
        posted: new Date()
      };
      console.log(params);
      this.set('addNewQuestion', false);
      this.set('title', "");
      this.set('q-notes', "");
      this.sendAction('save2', params);
    }
  }
});
