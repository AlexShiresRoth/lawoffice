export default class Modal {
	constructor(type, res) {
		this.type = type;
		this.res = res;
	}
	createModal() {
		console.log(this.type, this.res);
		const body = document.querySelector('body');
		const markup = `<div class="modal"><div class="modal--${this.type}"><p>${this.res}</p></div></div>`;
		return body.insertAdjacentHTML('afterbegin', markup);
	}
	removeModal() {}
}
