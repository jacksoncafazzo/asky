import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  user: DS.attr(),
  joined: DS.attr()
});
