import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm() {
            let ingredient = this.get('ingredient');
            alert(ingredient.name);
        }
    }
});
