import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  posted: DS.attr(),
  answers: DS.hasMany('answers', { async: true })
});
