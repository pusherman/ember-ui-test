import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  url: attr('string'),
  created_at: attr('date'),
  updated_at: attr('date')
});
