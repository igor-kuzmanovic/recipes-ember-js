import Service from '@ember/service';
import ENV from 'recipes-ember/config/environment'

export default Service.extend({

    imageUrl: ENV.APP.HOST + '/images',

    uploadImage(file) {
        return file.upload(this.get('imageUrl')).then(data => {
            return data.body.url;
        }).catch(() => {
            return this.get('imageUrl') + 'default.jpeg';
        });
    }

});
