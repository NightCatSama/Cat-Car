define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n=function(e,n,o,t){return o*((e=e/t-1)*e*e+1)+n},o=function(e){function o(e){null===r&&(r=e);var i=e-r;i<t&&(document.documentElement.scrollTop?document.documentElement.scrollTop=n(i,m,u,l):document.body.scrollTop=n(i,m,u,l),window.requestAnimationFrame(o))}var t=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],i=window.pageYOffset||document.documentElement.scrollTop,m=i,u=e-m,l=t,r=null;window.requestAnimationFrame(o)},t=function(e){e="number"==typeof e?e:1e3,o(0,e)},i=function(e,n){var t=e.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0);o(t,n)};e.scrollToTop=t,e.scrollToElem=i,e.scrollTo=o});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvc21vb3RoLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUXVhZF9lYXNlSW4iLCJ0IiwiYiIsImMiLCJkIiwic2Nyb2xsVG8iLCJlbmQiLCJzdGVwIiwidGltZVN0YW1wIiwic3RhcnQiLCJwcm9ncmVzcyIsInRpbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG9FbGVtIiwiZWxlbSIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsV0FBWSxTQUFVQyxHQUE5QixZQUdDQyxRQUFPQyxlQUFlRixFQUFTLGNBQzlCRyxPQUFPLElBRlRDLE9BQU9DLHNCQUF3QkQsT0FBT0MsdUJBQXlCRCxPQUFPRSwwQkFBNEJGLE9BQU9HLDZCQUErQkgsT0FBT0ksdUJBRS9JLElBQU1DLEdBQWMsU0FBQ0MsRUFBR0MsRUFBR0MsRUFBR0MsR0FBVixNQUFnQkQsS0FBTUYsRUFBSUEsRUFBSUcsRUFBSSxHQUFLSCxFQUFJQSxFQUFJLEdBQUtDLEdBR2xFRyxFQUFXLFNBQUNDLEdBT2pCLFFBQVNDLEdBQUtDLEdBQ0MsT0FBVkMsSUFBZ0JBLEVBQVFELEVBQzVCLElBQUlFLEdBQVdGLEVBQVlDLENBQ3ZCQyxHQUFXQyxJQUNWQyxTQUFTQyxnQkFBZ0JDLFVBQzVCRixTQUFTQyxnQkFBZ0JDLFVBQVlkLEVBQVlVLEVBQVVSLEVBQUdDLEVBQUdDLEdBR2pFUSxTQUFTRyxLQUFLRCxVQUFZZCxFQUFZVSxFQUFVUixFQUFHQyxFQUFHQyxHQUV2RFQsT0FBT0Msc0JBQXNCVyxJQWpCTyxHQUFoQkksR0FBZ0JLLFVBQUFDLFFBQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFULElBQVNBLFVBQUEsR0FDbENGLEVBQVluQixPQUFPd0IsYUFBZVAsU0FBU0MsZ0JBQWdCQyxVQUMzRFosRUFBSVksRUFDSlgsRUFBSUcsRUFBTUosRUFDVkUsRUFBSU8sRUFDSkYsRUFBUSxJQWVaZCxRQUFPQyxzQkFBc0JXLElBSXhCYSxFQUFjLFNBQUNULEdBQ3BCQSxFQUF1QixnQkFBVEEsR0FBb0JBLEVBQU8sSUFDekNOLEVBQVMsRUFBR00sSUFJUFUsRUFBZSxTQUFDQyxFQUFNWCxHQUMzQixHQUFJWSxHQUFNRCxFQUFLRSx3QkFBd0JELEtBQVM1QixPQUFPd0IsYUFBZVAsU0FBU0MsZ0JBQWdCQyxZQUFpQkYsU0FBU0MsZ0JBQWdCWSxXQUFjLEVBQ3ZKcEIsR0FBU2tCLEVBQUtaLEdBV2RwQixHQUZBNkIsWUFBQUEsRUFHQTdCLEVBRkE4QixhQUFBQSxFQUdBOUIsRUFGQWMsU0FBQUEiLCJmaWxlIjoicGx1Z2lucy9zbW9vdGgtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHJcbmNvbnN0IFF1YWRfZWFzZUluID0gKHQsIGIsIGMsIGQpID0+IGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XHJcblxyXG4vLyAg5rua5Yqo5Yiw5YW35L2T5L2N572uXHJcbmNvbnN0IHNjcm9sbFRvID0gKGVuZCwgdGltZSA9IDEwMDApID0+IHtcclxuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0bGV0IGIgPSBzY3JvbGxUb3A7XHJcblx0bGV0IGMgPSBlbmQgLSBiO1xyXG5cdGxldCBkID0gdGltZTtcclxuXHRsZXQgc3RhcnQgPSBudWxsO1xyXG5cclxuXHRmdW5jdGlvbiBzdGVwKHRpbWVTdGFtcCkge1xyXG5cdFx0aWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWVTdGFtcDtcclxuXHRcdGxldCBwcm9ncmVzcyA9IHRpbWVTdGFtcCAtIHN0YXJ0O1xyXG5cdFx0aWYgKHByb2dyZXNzIDwgdGltZSkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBRdWFkX2Vhc2VJbihwcm9ncmVzcywgYiwgYywgZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBRdWFkX2Vhc2VJbihwcm9ncmVzcywgYiwgYywgZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxuLy8gIOa7muWKqOWIsOmhtumDqFxyXG5jb25zdCBzY3JvbGxUb1RvcCA9ICh0aW1lKSA9PiB7XHJcblx0dGltZSA9IHR5cGVvZiB0aW1lID09PSAnbnVtYmVyJyA/IHRpbWUgOiAxMDAwO1xyXG5cdHNjcm9sbFRvKDAsIHRpbWUpO1xyXG59XHJcblxyXG4vLyAg5rua5Yqo5Yiw5p+Q5YWD57SgXHJcbmNvbnN0IHNjcm9sbFRvRWxlbSA9IChlbGVtLCB0aW1lKSA9PiB7XHJcblx0bGV0IHRvcCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICArICggd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKSAgLSAoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgIHx8IDAgKTtcclxuXHRzY3JvbGxUbyh0b3AsIHRpbWUpO1xyXG59XHJcblxyXG5sZXQgUkVBRE1FID0gYFxyXG5zY3JvbGxUb1RvcDogICAgIOa7muWKqOWIsOmhtumDqCwgcGFyYW0gKFt0aW1lOiAxMDAwXSksXHJcbnNjcm9sbFRvRWxlbTogICAg5rua5Yqo5Yiw5p+Q5YWD57SgIHBhcmFtIChlbGVtLCBbdGltZTogMTAwMF0pLFxyXG5zY3JvbGxUbzogICAgICAgIOa7muWKqOWIsOafkOS9jee9riBwYXJhbSAobnVtYmVyLCBbdGltZTogMTAwMF0pXHJcbmBcclxuZXhwb3J0IHtcclxuXHRzY3JvbGxUb1RvcCxcclxuXHRzY3JvbGxUb0VsZW0sXHJcblx0c2Nyb2xsVG9cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
