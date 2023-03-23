import { toggleHiddenElement, changeToFunkyColor } from '../resources/modules/module.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

/* Modal */

const modalContainer = document.getElementById('modal-container');
const closeButtonModal = document.getElementById('close-btn-modal');
const image = document.getElementById('modal-img');
const modalImage = document.getElementById('modal-img-01');

image.onclick = function () {
  modalContainer.style.display = "block";
  modalImage.src = this.src;
};

closeButtonModal.onclick = function() {
  modalContainer.style.display = 'none';
}