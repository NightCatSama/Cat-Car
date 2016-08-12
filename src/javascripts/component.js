requirejs.config({
    baseUrl: 'dist/javascripts'
});

import menus from 'components/popupbox';
import collapses, { groups as g, closeGroup, slideAll, refreshCollapse, README } from 'components/collapse';

let btn1 = document.getElementById('closeCollapse1');
let btn2 = document.getElementById('closeCollapse2');
let btnAll = document.getElementById('closeCollapseAll');
let btn = document.getElementById('closeCollapseSingle');
let blueCat = document.getElementById('blueCat');
let menuContentBtn = document.querySelector('.menu-content-btn');
console.log(menuContentBtn);
btn1.addEventListener('click', () => closeGroup('group1'));
btn2.addEventListener('click',() => closeGroup('group2'));
btnAll.addEventListener('click', () => slideAll('close'));
btn.addEventListener('click', blueCat.slideCollapse);
menuContentBtn.addEventListener('click', () => document.querySelector('.menu-content').classList.toggle('on'))