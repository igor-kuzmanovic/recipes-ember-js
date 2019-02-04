import Service from '@ember/service';
import ENV from 'recipes-ember/config/environment'

export default Service.extend({

    uploadImage(file) {
        return file.upload(ENV.APP.HOST + '/images').then(data => {
            return data.body.url;
        }).catch(() => {
            return 'http://localhost:8000/images/default.jpeg';
        });
    }

});
