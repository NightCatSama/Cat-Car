requirejs.config({
	baseUrl: '../dist/javascripts'
});

requirejs(['./plugins/carousel', './common/MiaoCode'], function(Carousel, Miao){
	Miao = Miao.default;
	Carousel = Carousel.default;
	function loadCarousel() {
		var demo = Carousel('#demo', {
			width: '100%',
			height: '100vh',
			slideTime: 1.2,
			direction: 'vertical',
			mousewheel: 3,
			prevBtn: '.p-btn',
			nextBtn: '.n-btn',
			pagination: 'my-class',
			preSlideFn: function(obj) {
				if(this.index === 3 && document.body.scrollTop > 0){
					return false;
				}
				return true;
			}
		});
		window.demo = demo;
		document.body.classList.remove('hide');
	}
	Miao.DOMready(loadCarousel);
});
