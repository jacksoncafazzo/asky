import Ember from 'ember';

export default Ember.Component.extend({
  showSignUp: false,
  actions: {
    showSignUp() {
      this.set('showSignUp', true);
    },
    signUp() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signUp', params);
    }
  }
});
