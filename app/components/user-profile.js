import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateName: false,
  actions: {
    updateUserName(userprofile) {
      console.log(userprofile);
      var params = {
        userName: this.get('userName'),
      };
      this.set('showUpdateName', false);
      this.sendAction('updateUserName', userprofile, params);
    },
    showUpdateName() {
      this.set('showUpdateName', true);
    }
  }
});
