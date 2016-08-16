requirejs.config({
	baseUrl: 'dist/javascripts'
});

import 'layout/menu-content';
import Miao from './common/MiaoCode';
import Carousel from './plugins/carousel';

require(['../../../domReady'], function (domReady) {
	domReady(() => {
		let example1 = Carousel('#example1', {
			direction: 'vertical',
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
		});
		let example3 = Carousel('#example3', {
			count: 1,
			slideTime: 0.35,
			autoTimer: 5000,
			reverse: false,
			width: undefined,
			height: undefined,
			direction: 'horizontal',
			isLoop: true,
			autoHide: 'hide',
			index: 2,
			pagination: 'diy-class',
		});
		let example4 = Carousel('#example4', {
			count: 1,
			slideTime: 2,
			autoTimer: 1000,
			reverse: false,
			direction: 'vertical',
			isLoop: true,
			pagination: false,
		});
		window.a = example1;
		document.body.classList.remove('hide');
	})
});