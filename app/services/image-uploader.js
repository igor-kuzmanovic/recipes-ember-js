import Service from '@ember/service';
import ENV from 'recipes-ember/config/environment'

export default Service.extend({

    imagesUrl: ENV.APP.HOST + '/images',

    uploadImage(file) {
        return file.upload(this.get('imagesUrl')).then(data => {
            return data.body.url;
        }).catch(() => {
            return this.get('imagesUrl') + 'default.jpeg';
        });
    }

});
