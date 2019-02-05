import Service from '@ember/service';
import ENV from 'recipes-ember/config/environment'

export default Service.extend({

    uploadImage(file) {
        return file.upload(ENV.APP.HOST + '/images').then(data => {
            return data.body.url;
        }).catch(() => {
            return ENV.APP.HOST + '/images' + 'default.jpeg';
        });
    }

});
