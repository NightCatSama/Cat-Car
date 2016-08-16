requirejs.config({
    baseUrl: 'dist/javascripts'
});

import 'layout/menu-content';

var table = document.getElementById('table');
table.querySelector('tbody').addEventListener('click', function(e) {
    var tr = e.target.parentElement;
    var input = tr.querySelector('input');
    tr.classList.toggle('active');

    input.checked = !input.checked;
}, false);