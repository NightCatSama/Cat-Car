/*
 * DOMReady
 * 事件委托绑定
 * 判断是否移动端
 * 序列化GET参数
 * 滑轮滚动兼容
 */

let Miao = {};

/*
 * DocumentReady
 */
Miao._readyEventQueue = [];
Miao.DOMready = (fn) => {
	if (document.readyState === "complete") {
		fn();
	} else {
		Miao._readyEventQueue.push(fn);
		document.onreadystatechange = Miao.triggerDOMReady;
	}
}
Miao.triggerDOMReady = () => {
	Array.from(Miao._readyEventQueue, (fn) => fn());
}

/*
 * 事件代理
 */
Miao.onEvent = (elem, type, selector, fn, isOne) => {
	let handle = null;
	if (typeof selector === 'function') {
		handle = selector;
		isOne = fn;
	} else {
		handle = (e) => {
			let target = e.target;
			let triggers = elem.querySelectorAll(selector);
			let elems = [];

			Array.from(triggers, (v) => {
				if (v.contains(target)) elems.push(v);
			});
			Array.from(elems, (elem) => fn.apply(elem, arguments));
			isOne && offEvent();
		}
	}
	elem.addEventListener(type, handle, false);

	function offEvent() {
		elem.removeEventListener(type, handle, false);
	}
	return offEvent;
}

/*
 * 判断是否移动端
 */
Miao.isPhone = () => {
	let matchedREG = /iphone|android|symbianos|windows\sphone/g;
	return matchedREG.test(window.navigator.userAgent.toLocaleLowerCase());
}

/*
 * 序列化url.query
 * @return object;
 */
Miao.getGetData = function() {
	let arr = window.location.search.slice(1).split('&');
	let items, obj = {};
	Array.from(arr, (item) => {
		let pair = item.split['='];
		obj[pair[0]] = decodeURI(pair[1]);
	});
	return obj;
}

/*
 * 滑轮滚动兼容
 */
Miao.onMouseWheel = (elem, fn, upCase = false) => {
	let type = "mousewheel";
	if (document.mozHidden !== undefined) {
		type = "DOMMouseScroll";
	}
	let handle = (e) => {
		e.delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		fn(e);
	}
	elem.addEventListener(type, handle, upCase);
}

export default Miao;