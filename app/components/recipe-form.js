import Component from '@ember/component';

export default Component.extend({
    actions: {
        fileChange() {
            this.uploadFile();
        },
        submitForm() {
            event.preventDefault();
            this.onSubmit();
        }
    }
});
