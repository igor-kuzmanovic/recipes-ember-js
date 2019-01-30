import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm() {
            let category = this.get('category');
            alert(category.name);
        }
    }
});
