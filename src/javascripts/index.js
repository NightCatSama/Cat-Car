import Arrow from 'arrow';
import Battleground from 'battleground';

//开始游戏
let GameStart = (num, level) => {
	let bg = null;
	if (num == 1) {
		let P1 = new Arrow();
		bg = new Battleground([P1]);
	} else {
		let P1 = new Arrow(1);
		let P2 = new Arrow(2);
		bg = new Battleground([P1, P2]);
	}
	document.querySelector('.result-wrap').classList.remove('show-search');
	bg.start(level);
}

export default GameStart;