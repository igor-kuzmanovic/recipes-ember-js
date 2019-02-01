import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({

    dateFilter: computed('date', function() {
       let filter = null;

       let date = this.get('date');
       if (date) {
           filter = moment(date).format('YYYY-MM-DD');
       }

       return filter;
    }),

    categoryFilter: computed('category', function() {
        let filter = null;

        let categories = this.get('category');
        if (categories && categories.length > 0) {
            filter = '';

            categories.forEach(function(category, key, array) {
                filter += category.id;

                if (!Object.is(array.length - 1, key)) {
                    filter += ',';
                }
            });
        }

        return filter;
    }),

    tagFilter: computed('tag', function() {
        let filter = null;

        let tags = this.get('tag');
        if (tags && tags.length > 0) {
            filter = '';

            tags.forEach(function(tag, key, array) {
                filter += tag.id;

                if (!Object.is(array.length - 1, key)) {
                    filter += ',';
                }
            });
        }

        return filter;
    }),

    filter: computed('dateFilter', 'categoryFilter', 'tagFilter', function() {
        let filter = null;

        let date = this.get('dateFilter');
        if (date) {
            if (!filter) {
                filter = { filter: {} };
            }

            filter.filter.date = date;
        }

        let category = this.get('categoryFilter');
        if (category) {
            if (!filter) {
                filter = { filter: {} };
            }

            filter.filter.category = category;
        }

        let tag = this.get('tagFilter');
        if (tag) {
            if (!filter) {
                filter = { filter: {} };
            }

            filter.filter.tag = tag;
        }

        return filter;
    }),

    actions: {
        onFilterClick(filter) {
            if (filter) {
                this.onFilterResults(filter);
            }
        },

        onClearClick() {
            this.set('date', null);
            this.set('category', null);
            this.set('tag', null);

            this.onFilterResults(null);
        }
    }

});
