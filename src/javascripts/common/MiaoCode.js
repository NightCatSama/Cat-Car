var Miao = {};

/*
 * 事件代理
 */
Miao.onEvent = function(elem, type, selector, fn, useCapture) {
	var handle = null;
	var _this = elem;
	if (typeof selector === 'function') {
		handle = selector;
		useCapture = fn;
	} else {
		handle = function(e) {
			var target = e.target;
			var triggers = _this.querySelectorAll(selector);
			var elems = [];

			for (var i = 0; i < triggers.length; i++) {
				if (triggers[i].contains(target)) {
					elems.push(triggers[i]);
				}
			}

			for (var j = 0, len = elems.length; j < len; j++) {
				fn.apply(elems[j], arguments);
			}
			isOne && offEvent();
		}
	}
	_this.addEventListener(type, handle, useCapture || false);

	function offEvent() {
		_this.removeEventListener(type, handle, useCapture || false);
	}
	return offEvent;
}

/*
 * 一次性事件代理
 */
Miao.oneEvent = function(elem, type, selector, fn, useCapture) {
	var handle = null;
	var _this = elem;
	if (typeof selector === 'function') {
		handle = function(e) {
			fn.apply(_this, arguments);
			offEvent();
		}
		useCapture = fn;
	} else {
		handle = function(e) {
			var target = e.target;
			var triggers = _this.querySelectorAll(selector);
			var elems = [];

			for (var i = 0; i < triggers.length; i++) {
				if (triggers[i].contains(target)) {
					elems.push(triggers[i]);
				}
			}

			for (var j = 0, len = elems.length; j < len; j++) {
				fn.apply(elems[j], arguments);
			}
			offEvent();
		}
	}
	_this.addEventListener(type, handle, useCapture || false);

	function offEvent() {
		_this.removeEventListener(type, handle, useCapture || false);
	}
	return offEvent;
}

/*
 * 判断是否移动端
 */
Miao.isPhone = function() {
	return (function() {
		return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
	})()
}

/*
 * 序列化url.query
 * @return object;
 */
Miao.getGetData = function() {
	var arr = window.location.search.slice(1).split('&');
	var items, obj = {};
	for (var i = 0, len = arr.length; i < len; i++) {
		items = arr[i].split['='];
		obj[items[0]] = decodeURI(items[1]);
	}
	return obj;
}

export default Miao;