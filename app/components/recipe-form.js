import Component from '@ember/component';
import ENV from 'recipes-ember/config/environment'

export default Component.extend({

    actions: {
        onFileAdd(file) {
            let self = this;

            file.upload(ENV.APP.HOST + '/images').then(function(data) {
                self.set('recipe.imageUrl', data.body.url);
            }).catch(function() {
                self.set('recipe.imageUrl', 'http://localhost:8000/images/default.jpeg');
            });
        },

        submitForm() {
            event.preventDefault();
            this.onSubmit();
        },

    }

});
