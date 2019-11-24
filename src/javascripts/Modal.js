export default class Modal {
	constructor(type, res) {
		this.type = type;
		this.res = res;
	}
	createModal() {
		const body = document.querySelector('body');
		const markup = `<div class="modal__type"><div class="modal__type--${this.type}"><p>${this.res}</p>
        <button class="modal__type--close">Close</button></div></div>`;
		return body.insertAdjacentHTML('afterbegin', markup);
	}
	removeModal() {
		const body = document.querySelector('body');
		[...document.querySelectorAll('input')].map(input => (input.value = ''));
		return body.removeChild(document.querySelector('.modal__type'));
	}
}
