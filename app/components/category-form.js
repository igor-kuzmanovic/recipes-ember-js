import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm() {
            let category = this.get('category');
            category.save();

            event.preventDefault();
        }
    }
});
