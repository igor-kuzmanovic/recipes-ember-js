import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    selectedRecipe: null,
    isModalOpen: false,
    modalType: '',

    modalBodyType: computed('modalType', function() {
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
            this.set('selectedRecipe', recipe);
            this.set(`isModalOpen`, true);
        },
        closeModal() {
            this.set(`isModalOpen`, false);
        },
        closedModal() {
            this.set('selectedRecipe', null);
        }
    }
});
