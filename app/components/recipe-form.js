import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    imageUploader: inject('image-uploader'),

    actions: {
        onFileAdd(file) {
            this.get('imageUploader').uploadImage(file).then(data => {
                this.set('recipe.imageUrl', data.body.url);
            }).catch(() => {
                this.set('recipe.imageUrl', 'http://localhost:8000/images/default.jpeg');
            });
        },

        submitForm() {
            event.preventDefault();
            this.onSubmit();
        },

    }

});
