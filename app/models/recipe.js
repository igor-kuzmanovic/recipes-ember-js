import DS from 'ember-data';

export default DS.Model.extend({

    title: DS.attr('string'),
    description: DS.attr('string'),
    date: DS.attr('date'),
    image: DS.attr('string'),
    ingredients: DS.hasMany('ingredient'),
    category: DS.belongsTo('category'),
    tags: DS.hasMany('tag')

});
