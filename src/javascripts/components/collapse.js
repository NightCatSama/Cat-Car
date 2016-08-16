'use strict';

let collapse_groups = {};
let collapses = [];

const pushGroups = (type, obj) => {
	if (collapse_groups[type]) {
		collapse_groups[type].push(obj);
	} else {
		collapse_groups[type] = [obj];
	}
}

const closeGroup = (group, type) => {
	Array.from(collapse_groups[group], (obj) => {
		obj.slideCollapse('close');
	});
}

const slideAll = (type) => {
	Array.from(collapses, (obj) => {
		obj.slideCollapse(type);
	});
}

class Collapse {
	constructor(btn) {
		if(btn.classList.contains('collapse')) {
			this.btn = null;
			this.target = btn;
		}
		else {
			this.btn = btn;
			const target = btn.getAttribute('data-target');
			this.target = target ? document.getElementById(target) : btn.nextElementSibling;
		}
		const triggerType = btn.getAttribute('data-trigger') || 'click';
		this.group = btn.getAttribute('data-collapseGroup');
		this.group && pushGroups(this.group, this);
		this.wrap = btn.parentElement;
		this.status = this.wrap.classList.contains('open');
		this.wrap.slideCollapse = this.target.slideCollapse = this.slideCollapse.bind(this);
		this.btn && (this.btn.slideCollapse = this.slideCollapse.bind(this));
		this.refreshHeight();
		this.isCollapasing = false;
		this.initEvent(triggerType);
	}
	initEvent(type) {
		if (type === 'click') {
			this.btn && this.btn.addEventListener('click', () => this.slideCollapse(), false);
		} else {
			this.wrap.addEventListener('mouseenter', () => this.slideCollapse('open'), false);
			this.wrap.addEventListener('mouseleave', () => this.slideCollapse('close'), false);
		}
		this.target.addEventListener('transitionend', () => {
			this.target.classList.remove('collapsing');
			this.isCollapasing = false;
			this.target.style.height = '';
		});
	}
	refreshHeight() {
		this.target.classList.add('show');
		this.h = window.getComputedStyle(this.target)['height'];
		this.target.classList.remove('show');
	}
	slideCollapse(type) {
		if (this.status) {
			if(type && type === 'open') return false;
			this.isCollapasing = true;
			this.target.style.height = this.h;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = 0;
			this.wrap.classList.remove('open');
			this.status = false;
		} else {
			if(type && type === 'close') return false;
			this.target.classList.contains('collapsing') || this.refreshHeight();
			this.group && closeGroup(this.group, 'close');
			this.isCollapasing = true;
			this.wrap.classList.add('open');
			this.target.style.height = 0;
			this.target.classList.add('collapsing');
			this.target.offsetHeight;
			this.target.style.height = this.h;
			this.status = true;
		}
	}
};

const refresh = () => {
	let btns = document.querySelectorAll('[data-component="collapse"]');
	collapse_groups = {};
	return collapses = Array.from(btns, (btn) => new Collapse(btn));
};

let README = `
容器wrap, 组件target, 触发btn, 均挂载了slideCollapse方法 param ([null, 'open', 'close']),
refresh: 重载所有Collapse组件,
slideAll:        修改所有状态 param ([null, 'open', 'close']),
slideGroup:      修改组状态 param (组名GroupName, [null, 'open', 'close])
`
export {
	collapse_groups as groups,
	slideAll,
	closeGroup,
	refresh,
	README,
};
export default refresh();