import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    date: DS.attr(),
    imageUrl: DS.attr(),
    ingredients: DS.hasMany('ingredient'),
    category: DS.belongsTo('category'),
    tags: DS.hasMany('tag'),
});
