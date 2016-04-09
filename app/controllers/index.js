import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp(params) {
      let controller = this;
      this.get('firebase').createUser(params, (error, data) => {
        if (error) {
          console.log(error);
          console.log(data);
        } else {
          controller.set('email', null);
          controller.set('password', null);
        }
      });
    },
    
    signOut() {
      this.get('session').close();
    }
  }
});
