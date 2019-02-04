import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({

    filter: computed('date', 'category', 'tag', function() {
        let filter = { filter: {} };

        let date = this.get('date');
        if (date) {
            if (date) {
                filter.filter.date = moment(date).format('YYYY-MM-DD');
            }
        }

        let categories = this.get('category');
        if (categories) {
            if (categories && categories.length > 0) {
                filter.filter.category = '';

                categories.forEach(function(category, key, array) {
                    filter.filter.category  += category.id;

                    if (!Object.is(array.length - 1, key)) {
                        filter.filter.category  += ',';
                    }
                });
            }
        }

        let tags = this.get('tag');
        if (tags) {
            if (tags && tags.length > 0) {
                filter.filter.tag = '';

                tags.forEach(function(tag, key, array) {
                    filter.filter.tag += tag.id;

                    if (!Object.is(array.length - 1, key)) {
                        filter.filter.tag += ',';
                    }
                });
            }
        }

        return filter;
    }),

    actions: {
        onDateChange(date) {
            this.set('date', date);

            this.get('onFilterResults')(this.get('filter'));
        },

        onCategoryChange(category) {
            this.set('category', category);

            this.get('onFilterResults')(this.get('filter'));
        },

        onTagChange(tag) {
            this.set('tag', tag);

            this.get('onFilterResults')(this.get('filter'));
        },

        onClear() {
            this.set('date', null);
            this.set('category', null);
            this.set('tag', null);

            this.get('onFilterResults')();
        }
    }

});
