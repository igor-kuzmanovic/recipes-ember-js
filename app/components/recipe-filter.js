import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({

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
                filter.date = moment(date).format('YYYY-MM-DD');
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
