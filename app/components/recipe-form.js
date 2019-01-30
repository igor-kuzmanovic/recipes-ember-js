import Component from '@ember/component';

export default Component.extend({
    image: null,

    actions: {
        uploadFile() {
            // TODO: Upload the file
        },
        submitForm() {
            let recipe = this.get('recipe');
            recipe.set('imageUrl', 'http://localhost:8000/images/1a2330c39cdd158d9424a75c07d1ce73.jpeg');
            recipe.save();

            event.preventDefault();
        }
    }
});
