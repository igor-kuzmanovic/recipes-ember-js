import Component from '@ember/component';

export default Component.extend({
    selectedCategory: null,
    isDetailsModalOpen: false,
    isUpdateModalOpen: false,
    isDeleteModalOpen: false,

    actions: {
        openModal(modal, category) {
            this.set(`is${modal}ModalOpen`, true);
            this.set('selectedCategory', category);
        },
        closeModal(modal) {
            this.set(`is${modal}ModalOpen`, false);
        },
        closedModal() {
            this.set('selectedCategory', null);
        },
        submitCategory() {
            this.set('isDetailsModalOpen', false);
        },
        updateCategory() {
            this.set('isUpdateModalOpen', false);
        },
        deleteCategory() {
            this.set('isDeleteModalOpen', false);
        }
    }
});
