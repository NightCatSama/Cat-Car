requirejs.config({
    baseUrl: 'dist/javascripts'
});

import Miao from './common/MiaoCode';
import 'layout/menu-content';

function jumpPage (e) {
	location = this.getAttribute('data-url');
}

var list = document.getElementById('progress-list');
var offEvent = Miao.onEvent(list, 'click', 'li', jumpPage);