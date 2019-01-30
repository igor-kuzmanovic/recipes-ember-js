import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm() {
            let tag = this.get('tag');
            tag.save();

            event.preventDefault();
        }
    }
});
