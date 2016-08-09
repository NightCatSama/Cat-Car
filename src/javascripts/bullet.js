const PI = Math.PI;
const dw = document.body.clientWidth;
const dh = document.body.clientHeight;
let count = 0;

export default class Bullet {
	constructor(speed = 3) {
		count = count % 4 + 1;
		switch (count) {
			case 1: //上方
				this.x = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dw);
				this.y = 0;
				this.vx = Math.cos((Math.random() * PI)) * speed;
				this.vy = Math.sin((Math.random() * PI)) * speed;
				break;
			case 2: //下方
				this.x = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dw);
				this.y = dh;
				this.vx = Math.cos((Math.random() * PI)) * speed;
				this.vy = -Math.sin((Math.random() * PI)) * speed;
				break;
			case 3: //左方
				this.x = 0;
				this.y = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dh);
				this.vx = Math.cos((Math.random() * PI - PI / 2)) * speed;
				this.vy = Math.sin((Math.random() * PI - PI / 2)) * speed;
				break;
			case 4: //右方
				this.x = Math.pow(-1, Math.ceil(Math.random() * 2)) * (Math.random() * dw);
				this.y = 0;
				this.vx = Math.cos((Math.random() * PI + PI / 2)) * speed;
				this.vy = Math.sin((Math.random() * PI - PI / 2)) * speed;
				break;
		}
		this.r = Math.ceil(Math.random() * 20) * 0.2 + 3,
		this.d = 0,
		this.color = '#FFF';
	}
}