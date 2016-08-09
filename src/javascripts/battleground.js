const dw = document.body.clientWidth;
const dh = document.body.clientHeight;

import Bullet from 'bullet';

export default class Battleground {
	constructor(players) {
		this.players = players;
		this.bullets = [];
		this.gameSign = false;
		this.bulletSpeed = 3;
		this.bulletCount = 150;
		this.quantity = 1;
		this.time = 0;
		this.initCanvas();
	}
	initCanvas() {
		this.elem = document.getElementById('battleground');
		this.canvasWidth = 0;
		this.canvasHeight = 0;
		this.elem.width = this.canvasWidth = dw;
		this.elem.height = this.canvasHeight = dh;

		this.cxt = this.elem.getContext('2d');
	}
	start(level = 1) {
		this.setDifficulty(level);
		this.gameSign = true;
		this.time = Date.now();
		const step = (timestamp) => {
			if (!this.gameSign) return false;
			this.cxt.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			this.render();
			requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}
	stop() {
		this.gameSign = false;
		Array.from(this.players, (player) => player.over());
	}
	setDifficulty(level) {
		switch(+level){
			case 1: {
				this.bulletSpeed = 2.5;
				this.quantity = 1;
				this.bulletCount = 100;
				break;
			}
			case 2: {
				this.bulletSpeed = 3;
				this.quantity = 2;
				this.bulletCount = 150;
				break;
			}
			case 3: {
				this.bulletSpeed = 3.5;
				this.quantity = 3;
				this.bulletCount = 200;
				break;
			}
			case 4: {
				this.bulletSpeed = 5;
				this.quantity = 5;
				this.bulletCount = 500;
				break;
			}
		}
	}
	render() {
		this.renderBullets();
		this.updateBullets();
		if (this.bullets.length < this.bulletCount) {
			this.addBullets(this.quantity);
		}
	}
	addBullets(count = 1) {
		for(let i =0;i<count;i++){
		let aBullet = new Bullet(this.bulletSpeed);
			this.bullets.push(aBullet);
		}
	}
	renderBullets() {
		Array.from(this.bullets, (bullet) => {
			this.cxt.fillStyle = bullet.color;
			this.cxt.beginPath();
			this.cxt.arc(bullet.x, bullet.y, bullet.r, 0, 2 * Math.PI, true);
			this.cxt.closePath();
			this.cxt.fill();
		});
	}
	updateBullets() {
		this.bullets = this.bullets.filter((bullet, index) => {
			bullet.x += bullet.vx;
			bullet.y += bullet.vy;
			bullet.d += Math.sqrt(Math.pow((bullet.vx - 0), 2) + Math.pow((bullet.vy - 0), 2));
			if (bullet.x > dw || bullet.x < 0 || bullet.y > dh || bullet.y < 0) {
				return false;
			}
			let bool = Array.from(this.players, (player, index) => isCQCollision(bullet, player, index));

			if (bool.indexOf(true) > -1) {
				let result = document.querySelector('.result-wrap');
				this.stop();
				if (this.players.length === 1) {
					result.classList.add('show-solo');
					document.querySelector('.solo-time').innerHTML = ((Date.now() - this.time) / 1000);
				} else {
					result.classList.add('show-pvp');
					document.querySelector('.name').innerHTML = (bool.indexOf(true) ? 1 : 2) + 'P';
					document.querySelector('.pvp-time').innerHTML = ((Date.now() - this.time) / 1000);
				}
				return false;
			}

			if (this.players.length > 1) {
				let P1 = this.players[0];
				let P2 = this.players[1];
				let coll = isQQCollision(P1, P2);
				if (coll) {
					if (P1.backDirection === P2.backDirection) {
						if(P1.backDirection.indexOf('l') > -1) {
							if(P1.x < P2.x) {
								P2.deg += 180;
								P2.backDirection = P2.getBackDir(P2.deg);
							}
							else {
								P1.deg += 180;
								P1.backDirection = P1.getBackDir(P1.deg);
							}
						}
						if(P1.backDirection.indexOf('r') > -1) {
							if(P1.x < P2.x) {
								P1.deg += 180;
								P1.backDirection = P1.getBackDir(P1.deg);
							}
							else {
								P2.deg += 180;
								P2.backDirection = P2.getBackDir(P2.deg);
							}
						}
						if(P1.backDirection.indexOf('t') > -1) {
							if(P1.y < P2.y) {
								P2.deg += 180;
								P2.backDirection = P2.getBackDir(P2.deg);
							}
							else {
								P1.deg += 180;
								P1.backDirection = P1.getBackDir(P1.deg);
							}
						}
						if(P1.backDirection.indexOf('b') > -1) {
							if(P1.y < P2.y) {
								P1.deg += 180;
								P1.backDirection = P1.getBackDir(P1.deg);
							}
							else {
								P2.deg += 180;
								P2.backDirection = P2.getBackDir(P2.deg);
							}
						}
					}
					P1.collision();
					P2.collision();
				}
			}

			return true;
		});
	}
	getBulletPos() {
		let pos = {
			x: 0,
			y: 0,
		}
		if (Math.round(Math.random())) {
			pos.x = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dw);
			pos.y = Math.round(Math.random()) || dh;
		} else {
			pos.y = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dh);
			pos.x = Math.round(Math.random()) || dw;
		}
		return pos;
	}
};

// 判断是否碰撞
function isCQCollision(cir, obj2) {
	let x, y;
	let coreX = cir.x;
	let coreY = cir.y;
	let barrierX;
	let barrierY;
	let deg = obj2.deg % 180;
	deg = (obj2.deg / 180 % 2) ? (-1 * deg) : deg;
	switch (deg) {
		case 0:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.width + cir.r) / 2;
				y = (obj2.height + cir.r) / 2;
				break;
			}
		case 45:
			{
				barrierX = obj2.x + obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y + obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + cir.r) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + cir.r) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case 90:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.height + cir.r) / 2;
				y = (obj2.width + cir.r) / 2;
				break;
			}
		case 135:
			{
				barrierX = obj2.x - obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y + obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + cir.r) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + cir.r) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case 180:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.width + cir.r) / 2;
				y = (obj2.height + cir.r) / 2;
				break;
			}
		case -45:
			{
				barrierX = obj2.x + obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y - obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + cir.r) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + cir.r) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case -90:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.height + cir.r) / 2;
				y = (obj2.width + cir.r) / 2;
				break;
			}
		case -135:
			{
				barrierX = obj2.x - obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y - obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + cir.r) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + cir.r) / 2 / Math.sin(Math.PI / 4);
				break;
			}
	}
	let dx = Math.abs(coreX - barrierX);
	let dy = Math.abs(coreY - barrierY);
	let d = Math.sqrt(Math.pow((coreX - barrierX), 2) + Math.pow((coreY - barrierY), 2));
	if (dx < x && dy < y) {
		return true;
	}
	return false;
}

function isQQCollision(obj1, obj2) {
	let x, y;
	let coreX;
	let coreY;
	let barrierX;
	let barrierY;
	let deg1 = obj1.deg % 360;
	switch (deg1) {
		case 0:
			{
				coreX = obj1.x + obj1.width / 2;
				coreY = obj1.y;
				break;
			}
		case 45:
		case -315:
			{
				coreX = obj1.x + obj1.width / 2 * Math.cos(Math.PI / 4);
				coreY = obj1.y + obj1.width / 2 * Math.cos(Math.PI / 4);
				break;
			}
		case 90:
		case -270:
			{
				coreX = obj1.x + obj1.width / 2;
				coreY = obj1.y;
				break;
			}
		case 135:
		case -225:
			{
				coreX = obj1.x - obj1.width / 2 * Math.cos(Math.PI / 4);
				coreY = obj1.y + obj1.width / 2 * Math.cos(Math.PI / 4);
				break;
			}
		case 180:
		case -180:
			{
				coreX = obj1.x + obj1.width / 2;
				coreY = obj1.y;
				break;
			}
		case -45:
		case 315:
			{
				coreX = obj1.x + obj1.width / 2 * Math.cos(Math.PI / 4);
				coreY = obj1.y - obj1.width / 2 * Math.cos(Math.PI / 4);
				break;
			}
		case -90:
		case 270:
			{
				coreX = obj1.x + obj1.width / 2;
				coreY = obj1.y;
				break;
			}
		case -135:
		case 225:
			{
				coreX = obj1.x - obj1.width / 2 * Math.cos(Math.PI / 4);
				coreY = obj1.y - obj1.width / 2 * Math.cos(Math.PI / 4);
				break;
			}
	}
	let deg2 = obj2.deg % 360;
	switch (deg2) {
		case 0:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.width + obj1.width) / 2;
				y = (obj2.height + obj1.height) / 2;
				break;
			}
		case 45:
		case -315:
			{
				barrierX = obj2.x + obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y + obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + obj1.width) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + obj1.height) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case 90:
		case -270:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.height + obj1.width) / 2;
				y = (obj2.width + obj1.height) / 2;
				break;
			}
		case 135:
		case -225:
			{
				barrierX = obj2.x - obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y + obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + obj1.width) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + obj1.height) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case 180:
		case -180:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.width + obj1.width) / 2;
				y = (obj2.height + obj1.height) / 2;
				break;
			}
		case -45:
		case 315:
			{
				barrierX = obj2.x + obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y - obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + obj1.width) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + obj1.height) / 2 / Math.sin(Math.PI / 4);
				break;
			}
		case -90:
		case 270:
			{
				barrierX = obj2.x + obj2.width / 2;
				barrierY = obj2.y;
				x = (obj2.height + obj1.width) / 2;
				y = (obj2.width + obj1.height) / 2;
				break;
			}
		case -135:
		case 225:
			{
				barrierX = obj2.x - obj2.width / 2 * Math.cos(Math.PI / 4);
				barrierY = obj2.y - obj2.width / 2 * Math.cos(Math.PI / 4);
				x = (obj2.width + obj1.width) / 2 / Math.cos(Math.PI / 4);
				y = (obj2.height + obj1.height) / 2 / Math.sin(Math.PI / 4);
				break;
			}
	}
	let dx = Math.abs(coreX - barrierX);
	let dy = Math.abs(coreY - barrierY);
	let d = Math.sqrt(Math.pow((coreX - barrierX), 2) + Math.pow((coreY - barrierY), 2));
	if (dx < x && dy < y) {
		return true;
	}
	return false;
}