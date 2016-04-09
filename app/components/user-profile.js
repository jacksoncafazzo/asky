import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateName: false,
  actions: {
    updateUserName() {
      var params = {
        userName: this.get('userName'),
        user: this.get('session.currentUser')
      };
      this.sendAction('updateUserName', params);
    },
    showUpdateName() {
      this.set('showUpdateName', true);
    }
  }
});
