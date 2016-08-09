requirejs.config({
    baseUrl: 'dist/javascripts'
});

import GameStart from 'index';

document.getElementById('game').style.display = 'block';

document.querySelector('.search').addEventListener('click', (e) => {
	 if(e.target.tagName === 'BUTTON'){
	 	var num = e.target.getAttribute('data-num');
	 	var level = document.getElementById('difficulty').value;
	 	window.localStorage['level'] = level;
	 	GameStart(num, level);
	 }
});

window.onload = () => {
	var select = document.getElementById('difficulty');
	if(window.localStorage['level']) {
		select.value = window.localStorage['level'];
	}
}