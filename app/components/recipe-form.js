import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({

    imageUploader: inject('image-uploader'),

    actions: {
        onFileAdd(file) {
            this.get('imageUploader').uploadImage(file).then(url => {
                this.set('recipe.imageUrl', url);
            })
        }
    }

});
