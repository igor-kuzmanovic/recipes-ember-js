import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm() {
            let recipe = this.get('recipe');
            alert(recipe.title);
        }
    }
});
