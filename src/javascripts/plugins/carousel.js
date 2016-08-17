'use strict';

let _default = {
	count: 1,
	slideTime: 0.25,
	autoTimer: 0,
	reverse: true,
	width: undefined,
	height: undefined,
	direction: 'horizontal',
	isLoop: false,
	autoHide: 'hide',
	prevBtn: undefined,
	nextBtn: undefined,
	index: 0,
	pagination: true,
	mousewheel: false,
	preSlideFn: null,
	startSlideFn: null,
	callback: null,
}

class Carousel {
	constructor(elem, option) {
		Object.assign(this, _default, option);
		this.itemIndex = this.isLoop ? (this.count + this.index) : this.index;
		this.isScroll = false;
		this.events = [];
		this.init(elem);
	}
	init(elem) {
		this.elem = elem;
		this.prevBtn = this.prevBtn ? document.querySelector(this.prevBtn) : elem.querySelector('.carousel-prevBtn');
		this.nextBtn = this.nextBtn ? document.querySelector(this.nextBtn) : elem.querySelector('.carousel-nextBtn');
		this.wrap = elem.querySelector('.carousel-wrap');
		this.items = Array.from(this.wrap.querySelectorAll('.carousel-slide'));
		this.total = this.items.length;
		this.elem.classList.add(this.direction === 'horizontal' ? 'carousel-horizontal' : 'carousel-vertical');

		this.initSize();
		this.isLoop && this.addSlide();
		this.pagination && this.createPagination();
		this.initPos();
		this.autoHide && this.autoHideBtn();
	}
	initSize() {
		if (this.width) {
			this.elem.style.width = typeof this.width === 'number' ? (this.width + 'px') : this.width;
		}
		if (this.height) {
			this.elem.style.height = typeof this.height === 'number' ? (this.height + 'px') : this.height;
		}
		this.itemSize = (100 / this.count) + '%';
		Array.from(this.items, (elem) => elem.style['flex-basis'] = this.itemSize);
	}
	addSlide() {
		let headers = this.items.slice(this.total - this.count);
		for (let i = headers.length - 1; i >= 0; i--) {
			this.wrap.insertBefore(headers[i].cloneNode(true), this.wrap.firstChild)
		}
		Array.from(this.items.slice(0, this.count), (v) => this.wrap.appendChild(v.cloneNode(true)));
	}
	initPos() {
		this.pos = -this.itemIndex;
		this.bindEvent();
		this.setPosition();
		this.setTransitionTime(this.slideTime);
	}
	eventControl(elem, type, fn, ...arg) {
		if (type === "mousewheel" && document.mozHidden !== undefined) {
			type = "DOMMouseScroll";
		}
		fn = fn.bind(this, ...arg);
		elem.addEventListener(type, fn, false);
		this.events.push(() => elem.removeEventListener(type, fn, false));
	}
	bindEvent() {
		this.prevBtn && this.eventControl(this.prevBtn, 'click', this.slidePrev);
		this.nextBtn && this.eventControl(this.nextBtn, 'click', this.slideNext);
		this.mousewheel && this.eventControl(this.wrap, 'mousewheel', this.scrollSlide);
		this.eventControl(this.wrap, 'transitionend', this.slideEnd);
		if (this.autoTimer) {
			this.timer = setInterval(() => this.slide(this.reverse ? 1 : -1, 'auto'), this.autoTimer);
		}
	}
	destoryEvent() {
		while(this.events.length){
			(this.events.shift())();
		}
	}
	destory() {
		this.destoryEvent();
		this.elem.parentNode.removeChild(this.elem);
	}
	slide(dir, type) {
		if (!dir || this.isScroll) {
			return false;
		}
		if (this.preSlideFn && !this.preSlideFn(this)) {
			return false;
		}
		if (type === 'click') {
			clearInterval(this.timer);
			this.timer = null;
		}
		if (!this.isLoop) {
			let status = this.itemIndex - dir;
			if (status >= this.total || status < 0) {
				return false;
			}
		}
		this.index -= dir;
		this.itemIndex -= dir;
		this.pos = this.pos + dir;
		this.isScroll = true;
		this.setPosition();
		this.pagination && this.setPaginationActive();
		this.autoHide && this.autoHideBtn();
		this.startSlideFn && this.startSlideFn(this);
	}
	slidePrev() {
		this.slide(1, 'click');
	}
	slideNext() {
		this.slide(-1, 'click');
	}
	scrollSlide(e) {
		let delta, type = e.type;
		if (type == 'DOMMouseScroll' || type == 'mousewheel') {
			delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		}
		if (this.isScroll || this.isLoop || (!this.isLoop && ((this.itemIndex !== this.total - this.count && delta < 0) || (this.itemIndex !== 0 && delta > 0)))) {
			e.preventDefault();
		}
		if (+this.mousewheel === 1) return this.slide(delta, 'click');
		else {
			if (this.mousewheelTimer) {
				this.curDelta += delta;
				if (this.curDelta === delta * +(this.mousewheel)) {
					this.slide(delta, 'click');
				}
			} else {
				this.curDelta = delta;
				this.mousewheelTimer = setTimeout(() => {
					this.curDelta = 0;
					this.mousewheelTimer = null;
				}, 300);
			}
		}
	}
	slideTo(index) {
		index = (index + this.total) % this.total;
		if (index === this.index) return false;
		this.slide(this.index - index, 'click');
	}
	slideEnd() {
		if (this.autoTimer && !this.timer) {
			this.timer = setInterval(() => this.slide(this.reverse ? 1 : -1, 'auto'), this.autoTimer);
		}
		let status = this.isEnd();
		if (this.isLoop && status) {
			if (status === 1) {
				this.pos = -this.total;
				this.itemIndex = this.total;
				this.index = this.total - 1;
			} else {
				this.pos = -this.count;
				this.itemIndex = this.count;
				this.index = 0;
			}
			this.setTransitionTime(0);
			this.setPosition();
			this.elem.offsetWidth;
			this.setTransitionTime(this.slideTime);
		}
		this.isScroll = false;
		this.callback && this.callback(this);
	}
	setPosition() {
		let moveDistance = this.pos * (100 / this.count);
		let transform = this.direction === 'horizontal' ? 'translate3d(' + moveDistance + '%, 0%, 0)' : 'translate3d(0%, ' + moveDistance + '%, 0)';
		this.wrap.style.transform = transform;
		this.wrap.style.webkitTransform = transform;
	}
	setTransitionTime(time) {
		this.wrap.style.transitionDuration = time + 's';
		this.wrap.style.webkitTransitionDuration = time + 's';
	}
	autoHideBtn() {
		if (!this.isLoop && this.autoHide) {
			if (this.itemIndex === this.total - this.count) {
				this.nextBtn && this.nextBtn.classList.add('hide');
			}
			if (this.itemIndex === 0) {
				this.prevBtn && this.prevBtn.classList.add('hide');
			}
			if (this.itemIndex > 0) {
				this.prevBtn && this.prevBtn.classList.remove('hide');
			}
			if (this.itemIndex < this.total - this.count) {
				this.nextBtn && this.nextBtn.classList.remove('hide');
			}
		}
	}
	isEnd() {
		if (this.itemIndex === 0) {
			return 1;
		} else if (this.itemIndex === (this.total + this.count)) {
			return 2;
		}
		return 0;
	}
	createPagination(className) {
		this.pages = document.createElement('UL');
		this.pages.className = `carousel-pagination${typeof this.pagination === 'string' ? (' ' + this.pagination) : ''}`;
		let str = '';
		for (let i = 0; i < this.total; i++) {
			str += `<li class="carousel-pagination-bullet"></li>`;
		}
		this.pages.innerHTML = str;
		this.elem.appendChild(this.pages);

		this.eventControl(this.pages, 'click', this.clickPagination);

		this.curBullet = this.pages.children[this.index];
		this.curBullet.classList.add('carousel-pagination-bullet-active');
	}
	setPaginationActive() {
		this.curBullet.classList.remove('carousel-pagination-bullet-active');
		this.curBullet = this.pages.children[(this.index + this.total) % this.total];
		this.curBullet.classList.add('carousel-pagination-bullet-active');
	}
	clickPagination(e) {
		let target = e.target;
		if (!target.classList.contains('carousel-pagination-bullet')) return false;
		target = target.previousSibling;
		let i = 0;
		while (target) {
			target = target.previousSibling;
			i++;
		}
		this.slideTo(i);
	}
}

const entry = (selector, option) => {
	let elems = document.querySelectorAll(selector);
	console.log(selector);
	if (elems.length === 1) return createCarousel(elems[0]);
	return Array.from(elems, createCarousel);

	function createCarousel(elem) {
		if (elem.carousel) {
			return elem.carousel;
		} else {
			return elem.carousel = new Carousel(elem, option);
		}
	}
}

export default entry;