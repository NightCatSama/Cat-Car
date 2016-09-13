'use strict';

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

const Quad_easeIn = (t, b, c, d) => {
	return c * ((t = t / d - 1) * t * t + 1) + b;
}

//  滚动到具体位置
const scrollTo = (end, time = 1000) => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let b = scrollTop;
	let c = end - b;
	let d = time;
	let start = null;

	function step(timeStamp) {
		if (start === null) start = timeStamp;
		let progress = timeStamp - start;
		if (progress < time) {
			if (document.documentElement.scrollTop) {
				document.documentElement.scrollTop = Quad_easeIn(progress, b, c, d);
			}
			else {
				document.body.scrollTop = Quad_easeIn(progress, b, c, d);
			}
			window.requestAnimationFrame(step);
		}
	}
	window.requestAnimationFrame(step);
}

//  滚动到顶部
const scrollToTop = (time) => {
	time = typeof time === 'number' ? time : 1000;
	scrollTo(0, time);
}

//  滚动到某元素
const scrollToElem = (elem, time) => {
	let top = elem.getBoundingClientRect().top  + ( window.pageYOffset || document.documentElement.scrollTop )  - ( document.documentElement.clientTop  || 0 );
	scrollTo(top, time);
}

class BackTop {
	constructor(btn) {
		this.btn = btn;
		this.initEvent(btn.getAttribute('data-target'));
	}
	initEvent(target) {
		this.fn = target ? () => scrollToElem(document.getElementById(target)) : scrollToTop;
		this.btn.addEventListener('click', this.fn, false);
	}
	destory() {
		this.btn.removeListener('click', this.fn, false);
	}
}

const refresh = () => {
	let btns = document.querySelectorAll('[data-component="backTop"]');
	return Array.from(btns, (btn) => new BackTop(btn));
};

let README = `
scrollToTop:     滚动到顶部, param ([time: 1000]),
scrollToElem:    滚动到某元素 param (elem, [time: 1000]),
scrollTo:        滚动到某位置 param (number, [time: 1000])
`
export {
	scrollToTop,
	scrollToElem,
	scrollTo
}
export default refresh();