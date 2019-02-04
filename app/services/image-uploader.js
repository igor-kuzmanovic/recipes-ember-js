import Service from '@ember/service';
import ENV from 'recipes-ember/config/environment'

export default Service.extend({

    uploadImage(file) {
        return file.upload(ENV.APP.HOST + '/images');
    }

});
