import Component from '@ember/component';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({

    dateDisplay: computed('date.{start,end}', function() {
        let date = this.get('date');

        if (date) {
            let displayValue = '';

            if (date.start) {
                displayValue += moment(date.start).format('Do MMM YYYY');
            }

            if (date.end) {
                displayValue += ` - ${moment(date.end).format('Do MMM YYYY')}`;
            }

            return displayValue;
        }

        return "Please select a date range";
    }),

    actions: {
        onDateChange(date) {
            this.set('date', date);

            this.send('onFilterChange');
        },

        onCategoryChange(category) {
            this.set('category', category);

            this.send('onFilterChange');
        },

        onTagChange(tag) {
            this.set('tag', tag);

            this.send('onFilterChange');
        },

        onFilterChange() {
            let filter = {};

            let date = this.get('date');
            if (date) {
                if (date.start) {
                    filter.dateFrom = moment(date.start).format('YYYY-MM-DD');
                }

                if (date.end) {
                    filter.dateTo = moment(date.end).format('YYYY-MM-DD');
                }
            }

            let categories = this.get('category');
            if (categories && categories.length > 0) {
                filter.category = '';

                categories.forEach(function(category, key, array) {
                    filter.category  += category.id;

                    if (!Object.is(array.length - 1, key)) {
                        filter.category  += ',';
                    }
                });
            }

            let tags = this.get('tag');
            if (tags && tags.length > 0) {
                filter.tag = '';

                tags.forEach(function(tag, key, array) {
                    filter.tag += tag.id;

                    if (!Object.is(array.length - 1, key)) {
                        filter.tag += ',';
                    }
                });
            }

            this.get('onFilterResults')(filter);
        },

        onClear() {
            this.set('date', null);
            this.set('category', null);
            this.set('tag', null);

            this.get('onFilterResults')();
        }
    }

});
