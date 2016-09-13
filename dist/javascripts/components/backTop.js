define(["exports"],function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var o=function(e,n,t,o){return t*((e=e/o-1)*e*e+1)+n},i=function(e){function n(e){null===l&&(l=e);var i=e-l;i<t&&(document.documentElement.scrollTop?document.documentElement.scrollTop=o(i,r,u,c):document.body.scrollTop=o(i,r,u,c),window.requestAnimationFrame(n))}var t=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],i=window.pageYOffset||document.documentElement.scrollTop,r=i,u=e-r,c=t,l=null;window.requestAnimationFrame(n)},r=function(e){e="number"==typeof e?e:1e3,i(0,e)},u=function(e,n){var t=e.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0);i(t,n)},c=function(){function e(t){n(this,e),this.btn=t,this.initEvent(t.getAttribute("data-target"))}return t(e,[{key:"initEvent",value:function(e){this.fn=e?function(){return u(document.getElementById(e))}:r,this.btn.addEventListener("click",this.fn,!1)}},{key:"destory",value:function(){this.btn.removeListener("click",this.fn,!1)}}]),e}(),l=function(){var e=document.querySelectorAll('[data-component="backTop"]');return Array.from(e,function(e){return new c(e)})};e.scrollToTop=r,e.scrollToElem=u,e.scrollTo=i,e["default"]=l()});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja1RvcC5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJleHBvcnRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUXVhZF9lYXNlSW4iLCJ0IiwiYiIsImMiLCJkIiwic2Nyb2xsVG8iLCJlbmQiLCJzdGVwIiwidGltZVN0YW1wIiwic3RhcnQiLCJwcm9ncmVzcyIsInRpbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG9FbGVtIiwiZWxlbSIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsIkJhY2tUb3AiLCJidG4iLCJ0aGlzIiwiaW5pdEV2ZW50IiwiZ2V0QXR0cmlidXRlIiwiZm4iLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsInJlZnJlc2giLCJidG5zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsV0FBWSxTQUFVQyxHQUE5QixZ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Iid1c2Ugc3RyaWN0JztcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG5jb25zdCBRdWFkX2Vhc2VJbiA9ICh0LCBiLCBjLCBkKSA9PiB7XHJcblx0cmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XHJcbn1cclxuXHJcbi8vICDmu5rliqjliLDlhbfkvZPkvY3nva5cclxuY29uc3Qgc2Nyb2xsVG8gPSAoZW5kLCB0aW1lID0gMTAwMCkgPT4ge1xyXG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRsZXQgYiA9IHNjcm9sbFRvcDtcclxuXHRsZXQgYyA9IGVuZCAtIGI7XHJcblx0bGV0IGQgPSB0aW1lO1xyXG5cdGxldCBzdGFydCA9IG51bGw7XHJcblxyXG5cdGZ1bmN0aW9uIHN0ZXAodGltZVN0YW1wKSB7XHJcblx0XHRpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGltZVN0YW1wO1xyXG5cdFx0bGV0IHByb2dyZXNzID0gdGltZVN0YW1wIC0gc3RhcnQ7XHJcblx0XHRpZiAocHJvZ3Jlc3MgPCB0aW1lKSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IFF1YWRfZWFzZUluKHByb2dyZXNzLCBiLCBjLCBkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IFF1YWRfZWFzZUluKHByb2dyZXNzLCBiLCBjLCBkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG59XHJcblxyXG4vLyAg5rua5Yqo5Yiw6aG26YOoXHJcbmNvbnN0IHNjcm9sbFRvVG9wID0gKHRpbWUpID0+IHtcclxuXHR0aW1lID0gdHlwZW9mIHRpbWUgPT09ICdudW1iZXInID8gdGltZSA6IDEwMDA7XHJcblx0c2Nyb2xsVG8oMCwgdGltZSk7XHJcbn1cclxuXHJcbi8vICDmu5rliqjliLDmn5DlhYPntKBcclxuY29uc3Qgc2Nyb2xsVG9FbGVtID0gKGVsZW0sIHRpbWUpID0+IHtcclxuXHRsZXQgdG9wID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgICsgKCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCApICAtICggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCAgfHwgMCApO1xyXG5cdHNjcm9sbFRvKHRvcCwgdGltZSk7XHJcbn1cclxuXHJcbmNsYXNzIEJhY2tUb3Age1xyXG5cdGNvbnN0cnVjdG9yKGJ0bikge1xyXG5cdFx0dGhpcy5idG4gPSBidG47XHJcblx0XHR0aGlzLmluaXRFdmVudChidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKTtcclxuXHR9XHJcblx0aW5pdEV2ZW50KHRhcmdldCkge1xyXG5cdFx0dGhpcy5mbiA9IHRhcmdldCA/ICgpID0+IHNjcm9sbFRvRWxlbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpKSA6IHNjcm9sbFRvVG9wO1xyXG5cdFx0dGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZuLCBmYWxzZSk7XHJcblx0fVxyXG5cdGRlc3RvcnkoKSB7XHJcblx0XHR0aGlzLmJ0bi5yZW1vdmVMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZuLCBmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xyXG5cdGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29tcG9uZW50PVwiYmFja1RvcFwiXScpO1xyXG5cdHJldHVybiBBcnJheS5mcm9tKGJ0bnMsIChidG4pID0+IG5ldyBCYWNrVG9wKGJ0bikpO1xyXG59O1xyXG5cclxubGV0IFJFQURNRSA9IGBcclxuc2Nyb2xsVG9Ub3A6ICAgICDmu5rliqjliLDpobbpg6gsIHBhcmFtIChbdGltZTogMTAwMF0pLFxyXG5zY3JvbGxUb0VsZW06ICAgIOa7muWKqOWIsOafkOWFg+e0oCBwYXJhbSAoZWxlbSwgW3RpbWU6IDEwMDBdKSxcclxuc2Nyb2xsVG86ICAgICAgICDmu5rliqjliLDmn5DkvY3nva4gcGFyYW0gKG51bWJlciwgW3RpbWU6IDEwMDBdKVxyXG5gXHJcbmV4cG9ydCB7XHJcblx0c2Nyb2xsVG9Ub3AsXHJcblx0c2Nyb2xsVG9FbGVtLFxyXG5cdHNjcm9sbFRvXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaCgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
