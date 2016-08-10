requirejs.config({
    baseUrl: 'dist/javascripts'
});

import menus from 'component/dropdown-menu';
import collapses from 'component/collapse';

let btn1 = document.getElementById('closeCollapse1');
let btn2 = document.getElementById('closeCollapse2');
let btnAll = document.getElementById('closeCollapseAll');

const closeCollapse = (arr) => {
	Array.from(arr, (obj) => {
		obj.slideClose();
	})
}

btn1.addEventListener('click', () => Array.from(collapses.groups.group1, (obj) => obj.slideClose()));
btn2.addEventListener('click',() => Array.from(collapses.groups.group2, (obj) => obj.slideClose()));
btnAll.addEventListener('click', () => Array.from(collapses.collapses, (obj) => obj.slideClose()));