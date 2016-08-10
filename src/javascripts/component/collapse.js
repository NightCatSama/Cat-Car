'use strict';

let groups = {};

class Group {
	constructor(btn) {
	}
	pushGroups(type) {
		if (groups[type]) {
			groups[type].push(this);
		} else {
			groups[type] = [this];
		}
	}
	closeGroups(type) {
		Array.from(groups[type], (obj) => {
			if (obj.status === true) {
				obj.slideToggle();
			}
		});
	}
}

class Collapse extends Group {
	constructor(btn) {
		super();
		this.btn = btn;
		const triggleType = btn.getAttribute('data-triggle') || 'click';
		const target = btn.getAttribute('data-target');
		this.group = btn.getAttribute('data-collapseGroup');
		this.group && this.pushGroups(this.group);
		this.wrap = btn.parentElement;
		this.status = this.wrap.classList.contains('open');
		this.target = target ? document.getElementById(target) : btn.nextElementSibling;
		this.h = this.status ? window.getComputedStyle(this.target)['height'] : this.getHeightInHide();
		this.isCollapasing = false;
		this.initEvent(triggleType);
	}
	initEvent(type) {
		if (type === 'click') {
			this.btn.addEventListener('click', () => this.slideToggle(), false);
		} else {
			this.wrap.addEventListener('mouseenter', () => this.slideToggle(), false);
			this.wrap.addEventListener('mouseleave', () => this.slideToggle(), false);
		}
		this.target.addEventListener('transitionend', () => {
			this.target.classList.remove('collapsing');
			this.isCollapasing = false;
			this.target.style.height = '';
		});
	}
	getHeightInHide() {
		this.target.classList.add('show');
		var h = window.getComputedStyle(this.target)['height'];
		this.target.classList.remove('show');
		return h;
	}
	slideToggle() {
		this.isCollapasing = true;
		if (this.status) {
			this.target.style.height = this.h;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = 0;
			this.wrap.classList.remove('open');
			this.status = false;
		} else {
			this.group && this.closeGroups(this.group);
			this.wrap.classList.add('open');
			this.target.style.height = 0;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = this.h;
			this.status = true;
		}
	}
	slideClose() {
		if (this.status) {
			this.target.style.height = this.h;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = 0;
			this.wrap.classList.remove('open');
			this.status = false;
		}
	}
	slideOpen() {
		if(!this.status) {
			this.group && this.closeGroups(this.group);
			this.wrap.classList.add('open');
			this.target.style.height = 0;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = this.h;
			this.status = true;
		}
	}
};

let btns = document.querySelectorAll('[data-component="collapse"]');

export default {
	collapses: Array.from(btns, (btn) => new Collapse(btn)),
	groups
}