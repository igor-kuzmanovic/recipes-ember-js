import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedIngredient: null,
    isModalOpen: false,
    modalType: '',

    modalBodyComponent: computed('modalType', function() {
        if (this.get('modalType') === 'Create') {
            return 'ingredient-form';
        } else if (this.get('modalType') === 'Details') {
            return 'ingredient-details';
        } else if (this.get('modalType') === 'Update') {
            return 'ingredient-form';
        } else if (this.get('modalType') === 'Delete') {
            return 'ingredient-delete-confirmation';
        }
        return '';
    }),

    actions: {
        openModal(modalType, ingredient) {
            this.set('modalType', modalType);
            this.set('selectedIngredient', ingredient);
            this.set(`isModalOpen`, true);
        },
        closedModal() {
            this.set('selectedIngredient', null);
        }
    }
});
