'use strict';

var elem = null;
class DropdownMenu {
	constructor(btn) {
		this.btn = btn;
		let type = btn.getAttribute('data-trigger') || 'click';
		let target = btn.getAttribute('data-target');
		this.target = target ? document.getElementById(target) : btn.nextElementSibling;
		this.btn.slideDropdownMenu = this.target.slideDropdownMenu = this.slide.bind(this);
		this.initEvent(type);
	}
	initEvent(type) {
		if(type === 'click'){
			this.btn.addEventListener('click', () => this.slide(), false);
		}
		else {
			this.btn.addEventListener('mouseover', () => this.slide('show'), false);
			this.btn.addEventListener('mouseout', () => this.slide('hide'), false);
		}
	}
	slide(type) {
		if(this.target.classList.contains('show')){
			if(type && type === 'show') return false;
			this.target.classList.remove('show');
			elem = null;
		}
		else {
			if(type && type === 'hide') return false;
			this.target.classList.add('show');
			elem && elem.classList.remove('show');
			elem = this.target;
		}
	}
}

const refresh = () => {
	let btns = document.querySelectorAll('[data-component="popupbox"]');
	return Array.from(btns, (btn) => new DropdownMenu(btn));
};

export {
	refresh,
}
export default refresh();
