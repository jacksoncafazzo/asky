import Ember from 'ember';

export default Ember.Component.extend({
  showSignIn: false,
  actions: {
    showSignIn() {
      this.set('showSignIn', true);
    },
    signIn(password) {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signIn', password, params);
    }
  }
});
