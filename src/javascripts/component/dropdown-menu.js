(function(){
	let btns = document.querySelectorAll('[data-component="dropdown"]');
	var elem = null;
	Array.from(btns, (btn) => {
		let type = btn.getAttribute('data-triggle') || 'click';
		if(type === 'click'){
			btn.addEventListener('click', slideToggle, false);
		}
		else {
			btn.addEventListener('mouseover', slideToggle, false);
			btn.addEventListener('mouseout', slideToggle, false);
		}
	});

	function slideToggle(){
		let target = this.getAttribute('data-target');
		target = target ? document.getElementById(target) : this.nextElementSibling ;
		if(target.classList.contains('show')){
			target.classList.remove('show');
			elem = null;
		}
		else {
			target.classList.add('show');
			elem && elem.classList.remove('show');
			elem = target;
		}
	}
})()