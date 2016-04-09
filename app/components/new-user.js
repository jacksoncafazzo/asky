import Ember from 'ember';

export default Ember.Component.extend({
  showNewUser: true,
  actions: {
    newUser() {
      var params = {
        userName: this.get('userName'),
        user: this.get('session.currentUser'),
        joined: new Date()
      };
      this.set('showNewUser', false);
      this.sendAction('newUser', params);
    }
  }
});
