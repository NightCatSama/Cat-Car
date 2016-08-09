let dw = document.body.clientWidth;
let dh = document.body.clientHeight;

export default class Arrow {
	constructor(player = 0) {
		this.deg = 0;
		this.player = player;
		this.moveList = {
			t: 0,
			b: 0,
			l: 0,
			r: 0,
			count: 0,
		};
		this.speed = 3;
		this.elem = this.initElem();
		this.width = 12;
		this.height = 24;
		this.missCtrl = false;
		this.ctrlDeg = 1260;
		this.sign = false;
		this.backDirection = 'b';
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.initPlayer();
		this.bindEvent();
		this.move();
	}
	initPlayer() {
		let styles = window.getComputedStyle(this.elem);
		switch (this.player) {
			case 0:
				{
					this.x = dw / 2;
					this.y = dh / 2;
					break;
				}
			case 1:
				{
					this.x = dw / 2 - 200;
					this.y = dh / 2;
					break;
				}
			case 2:
				{
					this.x = dw / 2 + 200;
					this.y = dh / 2;
					break;
				}
		}
		this.elem.style.transform = 'translate3D(' + (this.x) + 'px,' + this.y + 'px, 0px) rotate(' + this.deg + 'deg)';
	}
	over() {
		Array.from(['l', 'r', 't', 'b', 'count'], (dir) => this.moveList[dir] = 0);
		this.removeEvent();
	}
	initElem(num) {
		let div = document.createElement('div');
		div.className = 'arrow arrow' + this.player;
		document.getElementById('game').appendChild(div);
		return div;
	}
	bindEvent() {
		document.addEventListener('keydown', this.start, false);
		document.addEventListener('keyup', this.stop, false);
	}
	removeEvent() {
		document.removeEventListener('keydown', this.start, false);
		document.removeEventListener('keyup', this.stop, false);
	}
	start(e) {
		if (this.missCtrl) return false;
		let key = e.keyCode;
		const dir = getDirection(key, this.player);
		if (dir === false || this.moveList[dir] || this.moveList['count'] === 2) return false;
		this.moveList[dir] = this.speed;
		this.moveList['count']++;
		this.setArrowDir();
	}
	stop(e) {
		if (this.missCtrl) return false;
		let key = e.keyCode;
		const dir = getDirection(key, this.player);
		if (dir === false || !this.moveList[dir]) return false;
		this.moveList[dir] = 0;
		this.moveList['count']--;
		this.setArrowDir();
	}
	move() {
		let rw = ((dw) - (this.height / 2));
		let rh = ((dh) - (this.height / 2));
		let lw = (this.height / 2);
		let lh = (this.height / 2);

		const step = (timestamp) => {
			this.x += this.moveList['r'] - this.moveList['l'];
			this.y += this.moveList['b'] - this.moveList['t'];
			if (this.x >= rw) this.x = rw;
			if (this.y >= rh) this.y = rh;
			if (this.x <= lw) this.x = lw;
			if (this.y <= lh) this.y = lh;
			if (this.missCtrl) {
				this.deg += 45;
				this.ctrlDeg -= 45;

				if (this.ctrlDeg <= 0) {
					this.missCtrl = false;
					Array.from(['l', 'r', 't', 'b', 'count'], (dir) => this.moveList[dir] = 0);
					this.ctrlDeg = 1260;
					this.backDirection = this.getBackDir(this.deg);
				}
			}
			this.elem.style.transform = 'translate3D(' + this.x + 'px,' + this.y + 'px, 0px) rotate(' + this.deg + 'deg)';
			requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}
	setArrowDir() {
		if (this.moveList['count'] === 1) {
			this.deg = this.moveList['l'] ? -90 : this.moveList['r'] ? 90 : this.moveList['b'] ? 180 : 0;
			this.backDirection = this.moveList['l'] ? 'r' : this.moveList['r'] ? 'l' : this.moveList['b'] ? 't' : 'b';
		} else if (this.moveList['count'] === 2) {
			const dirArr = ['l', 'r', 't', 'b'];
			const d = (dirArr.filter((dir) => this.moveList[dir] > 0).join(''));
			switch (d) {
				case 'lt':
					this.backDirection = 'rb';
					this.deg = -45;
					break;
				case 'lb':
					this.backDirection = 'rt';
					this.deg = -135;
					break;
				case 'rt':
					this.backDirection = 'lb';
					this.deg = 45;
					break;
				case 'rb':
					this.backDirection = 'lt';
					this.deg = 135;
					break;
			}
		} else {

		}
	}
	getBackDir(deg) {
		let d = deg % 360;
		switch (d) {
			case 0:
				{
					d = 'b';
					break;
				}
			case 45:
			case -315:
				{
					d = 'lb';
					break;
				}
			case 90:
			case -270:
				{
					d = 'l';
					break;
				}
			case 135:
			case -225:
				{
					d = 'lt';
					break;
				}
			case 180:
			case -180:
				{
					d = 't';
					break;
				}
			case -45:
			case 315:
				{
					d = 'rb';
					break;
				}
			case -90:
			case 270:
				{
					d = 'r';
					break;
				}
			case -135:
			case 225:
				{
					d = 'rt';
					break;
				}
		}
		return d;
	}
	collision() {
		if (this.missCtrl) return false;
		this.missCtrl = true;
		let arr = this.backDirection.split('');
		Array.from(['l', 'r', 't', 'b'], (dir) => {
			this.moveList[dir] = arr.includes(dir) ? 1 : 0;
		});
	}
};

/*
 * 根据按键得到方向
 */
function getDirection(code, player) {
	switch (code) {
		case 38:
			{
				if (player && player === 1) return false;
				return 't';
				break;
			}
		case 40:
			{
				if (player && player === 1) return false;
				return 'b';
				break;
			}
		case 37:
			{
				if (player && player === 1) return false;
				return 'l';
				break;
			}
		case 39:
			{
				if (player && player === 1) return false;
				return 'r';
				break;
			}
		case 87:
			{
				if (player && player === 2) return false;
				return 't';
				break;
			}
		case 83:
			{
				if (player && player === 2) return false;
				return 'b';
				break;
			}
		case 65:
			{
				if (player && player === 2) return false;
				return 'l';
				break;
			}
		case 68:
			{
				if (player && player === 2) return false;
				return 'r';
				break;
			}
		default:
			{
				return false;
			}
	}
}