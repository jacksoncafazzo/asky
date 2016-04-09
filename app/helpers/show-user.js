import Ember from 'ember';

export function showUser(userprofile) {
  console.log(userprofile);
  var username = Ember.get('userprofile', 'id');
  return "haaaaay " + username;
}

export default Ember.Helper.helper(showUser);
