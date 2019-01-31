import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
    dateFilter: computed('date', function() {
       let filter = '';

       let date = this.get('date');
       if (date) {
           filter += 'filter[date]=';
           filter += moment().format('YYYY-MM-DD');
       }

       return filter;
    }),

    categoryFilter: computed('category', function() {
        let filter = '';

        let categories = this.get('category');
        if (categories && categories.length > 0) {
            filter += 'filter[category]=';

            for (let i = 0; i < categories.length; i++) {
                filter += categories[i].id;

                if (i < categories.length - 1) {
                    filter += ',';
                }
            }
        }

        return filter;
    }),

    tagFilter: computed('tag', function() {
        let filter = '';
        let tags = this.get('tag');

        if (tags && tags.length > 0) {
            filter += 'filter[tags]=';

            for (let i = 0; i < tags.length; i++) {
                filter += tags[i].id;

                if (i < tags.length - 1) {
                    filter += ',';
                }
            }
        }

        return filter;
    }),

    filterQuery: computed('dateFilter', 'categoryFilter', 'tagFilter', function() {
        let filter = '';

        let date = this.get('dateFilter');
        if (date) {
            if (filter.length > 0) {
                filter += '&';
            }

            filter += date;
        }

        let category = this.get('categoryFilter');
        if (category) {
            if (filter.length > 0) {
                filter += '&';
            }

            filter += category;
        }

        let tag = this.get('tagFilter');
        if (tag) {
            if (filter.length > 0) {
                filter += '&';
            }

            filter += tag;
        }

        if (filter.length > 0) {
            filter = '?' + filter;
        }

        return filter;
    })
});
