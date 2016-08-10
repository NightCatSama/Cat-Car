
'use strict';

var elem = null;
class DropdownMenu {
	constructor(btn) {
		this.btn = btn;
		let type = btn.getAttribute('data-triggle') || 'click';
		let target = btn.getAttribute('data-target');
		this.target = target ? document.getElementById(target) : btn.nextElementSibling ;
		this.initEvent(type);
	}
	initEvent(type) {
		if(type === 'click'){
			this.btn.addEventListener('click', () => this.slideToggle(), false);
		}
		else {
			this.btn.addEventListener('mouseover', () => this.slideToggle(), false);
			this.btn.addEventListener('mouseout', () => this.slideToggle(), false);
		}
	}
	slideToggle() {
		if(this.target.classList.contains('show')){
			this.target.classList.remove('show');
			elem = null;
		}
		else {
			this.target.classList.add('show');
			elem && elem.classList.remove('show');
			elem = this.target;
		}
	}
	slideHide() {
		if(this.target.classList.contains('show')) {
			this.target.classList.remove('show');
			elem = null;
		}
	}
	slideShow() {
		if(!this.target.classList.contains('show')) {
			this.target.classList.add('show');
			elem && elem.classList.remove('show');
			elem = this.target;
		}
	}
}
let btns = document.querySelectorAll('[data-component="dropdown"]');

export default Array.from(btns, (btn) => new DropdownMenu(btn));
