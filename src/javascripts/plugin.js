requirejs.config({
	baseUrl: 'dist/javascripts'
});

import 'layout/menu-content';
import Miao from './common/MiaoCode';
import Carousel from './plugins/carousel';
import { scrollToTop, scrollToElem, scrollTo } from './plugins/smooth-scroll';

window.Miao = Miao;

const loadCarousel = () => {
	let example1 = Carousel('#example1');
	let example1_2 = Carousel('#example1-2', {
		direction: 'vertical'
	});
	let example2 = Carousel('#example2', {
		count: 3,
		slideTime: 0.25,
		autoTimer: 3000,
		reverse: false,
		height: 300,
		direction: 'horizontal',
		isLoop: true,
		index: 0,
		pagination: false,
	});
	let example3 = Carousel('#example3', {
		count: 1,
		slideTime: 0.35,
		autoTimer: 0,
		reverse: false,
		width: 400,
		height: 300,
		direction: 'horizontal',
		isLoop: false,
		autoHide: 'hide',
		index: 0,
		pagination: 'diy-class',
		mousewheel: 1,
	});
	let example3_2 = Carousel('#example3-2', {
		count: 1,
		slideTime: 0.35,
		autoTimer: 0,
		reverse: false,
		width: 400,
		height: 300,
		direction: 'vertical',
		isLoop: false,
		autoHide: 'hide',
		index: 0,
		pagination: 'diy-class',
		mousewheel: 3,
	});
	let example4 = Carousel('#example4', {
		count: 1,
		slideTime: 2,
		autoTimer: 2000,
		reverse: false,
		direction: 'vertical',
		isLoop: true,
		pagination: false,
	});
	document.body.classList.remove('hide');
}

Miao.DOMready(loadCarousel);


/*
 * 平滑滚动
 */
document.getElementById('gotoTop').addEventListener('click', scrollToTop, false);
document.getElementById('gotoLoop').addEventListener('click', () => scrollToElem(document.getElementById('Loop')), false);
document.getElementById('goto500').addEventListener('click', () => scrollTo(500), false);