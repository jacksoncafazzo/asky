import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  poster: DS.arrt(),
  answers: DS.hasMany('questions', { async: true })
});
