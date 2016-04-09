import Ember from 'ember';

export function showUser(userprofile) {
  console.log(userprofile);
  var theThing = userprofile;
  return "haaaaay " + theThing;
}

export default Ember.Helper.helper(showUser);
