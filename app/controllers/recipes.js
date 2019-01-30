import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedRecipe: null,
    isModalOpen: false,
    modalType: '',

    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'recipe-form';
        } else if (this.get('modalType') === 'Details') {
            return 'recipe-details';
        } else if (this.get('modalType') === 'Update') {
            return 'recipe-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'recipe-delete-confirmation';
        }
        return '';
    }),

        actions: {
        openModal(modalType, recipe) {
            this.set('modalType', modalType);
            if (this.get('modalType') === 'Create') {
                recipe = this.store.createRecord('recipe');
            }
            this.set('selectedRecipe', recipe);
            this.set(`isModalOpen`, true);
        },
        closedModal() {
            this.set('selectedRecipe', null);
        }
    }
});
