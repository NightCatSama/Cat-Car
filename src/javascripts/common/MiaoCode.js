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
Miao.isPhone = () => !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);

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

export default Miao;