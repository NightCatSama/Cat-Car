define(["exports"],function(t){"use strict";function a(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=Math.PI,i=document.body.clientWidth,o=document.body.clientHeight,n=0,s=function M(){var t=arguments.length<=0||void 0===arguments[0]?3:arguments[0];switch(a(this,M),n=n%4+1){case 1:this.x=Math.pow(-1,Math.ceil(2*Math.random()))*(Math.random()*i),this.y=0,this.vx=Math.cos(Math.random()*h)*t,this.vy=Math.sin(Math.random()*h)*t;break;case 2:this.x=Math.pow(-1,Math.ceil(2*Math.random()))*(Math.random()*i),this.y=o,this.vx=Math.cos(Math.random()*h)*t,this.vy=-Math.sin(Math.random()*h)*t;break;case 3:this.x=0,this.y=Math.pow(-1,Math.ceil(2*Math.random()))*(Math.random()*o),this.vx=Math.cos(Math.random()*h-h/2)*t,this.vy=Math.sin(Math.random()*h-h/2)*t;break;case 4:this.x=Math.pow(-1,Math.ceil(2*Math.random()))*(Math.random()*i),this.y=0,this.vx=Math.cos(Math.random()*h+h/2)*t,this.vy=Math.sin(Math.random()*h-h/2)*t}this.r=.2*Math.ceil(20*Math.random())+3,this.d=0,this.color="#FFF"};t["default"]=s});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGxldC5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJleHBvcnRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJQSSIsIk1hdGgiLCJkdyIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiZGgiLCJjbGllbnRIZWlnaHQiLCJjb3VudCIsIkJ1bGxldCIsInNwZWVkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidGhpcyIsIngiLCJwb3ciLCJjZWlsIiwicmFuZG9tIiwieSIsInZ4IiwiY29zIiwidnkiLCJzaW4iLCJyIiwiZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxXQUFZLFNBQVVDLEdBQzdCLFlBTUEsU0FBU0MsR0FBZ0JDLEVBQVVDLEdBQ2xDLEtBQU1ELFlBQW9CQyxJQUN6QixLQUFNLElBQUlDLFdBQVUscUNBTnRCQyxPQUFPQyxlQUFlTixFQUFTLGNBQzlCTyxPQUFPLEdBSlQsSUFBTUMsR0FBS0MsS0FBS0QsR0FDVkUsRUFBS0MsU0FBU0MsS0FBS0MsWUFDbkJDLEVBQUtILFNBQVNDLEtBQUtHLGFBQ3JCQyxFQUFRLEVBRVNDLEVBQ3BCLFFBQUFBLEtBQXVCLEdBQVhDLEdBQVdDLFVBQUFDLFFBQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFILEVBQUdBLFVBQUEsRUFFdEIsUUFGc0JsQixFQUFBcUIsS0FBQUwsR0FDdEJELEVBQVFBLEVBQVEsRUFBSSxHQUVuQixJQUFLLEdBQ0pNLEtBQUtDLEVBQUlkLEtBQUtlLE9BQVFmLEtBQUtnQixLQUFxQixFQUFoQmhCLEtBQUtpQixZQUFrQmpCLEtBQUtpQixTQUFXaEIsR0FDdkVZLEtBQUtLLEVBQUksRUFDVEwsS0FBS00sR0FBS25CLEtBQUtvQixJQUFLcEIsS0FBS2lCLFNBQVdsQixHQUFPVSxFQUMzQ0ksS0FBS1EsR0FBS3JCLEtBQUtzQixJQUFLdEIsS0FBS2lCLFNBQVdsQixHQUFPVSxDQUMzQyxNQUNELEtBQUssR0FDSkksS0FBS0MsRUFBSWQsS0FBS2UsT0FBUWYsS0FBS2dCLEtBQXFCLEVBQWhCaEIsS0FBS2lCLFlBQWtCakIsS0FBS2lCLFNBQVdoQixHQUN2RVksS0FBS0ssRUFBSWIsRUFDVFEsS0FBS00sR0FBS25CLEtBQUtvQixJQUFLcEIsS0FBS2lCLFNBQVdsQixHQUFPVSxFQUMzQ0ksS0FBS1EsSUFBTXJCLEtBQUtzQixJQUFLdEIsS0FBS2lCLFNBQVdsQixHQUFPVSxDQUM1QyxNQUNELEtBQUssR0FDSkksS0FBS0MsRUFBSSxFQUNURCxLQUFLSyxFQUFJbEIsS0FBS2UsT0FBUWYsS0FBS2dCLEtBQXFCLEVBQWhCaEIsS0FBS2lCLFlBQWtCakIsS0FBS2lCLFNBQVdaLEdBQ3ZFUSxLQUFLTSxHQUFLbkIsS0FBS29CLElBQUtwQixLQUFLaUIsU0FBV2xCLEVBQUtBLEVBQUssR0FBTVUsRUFDcERJLEtBQUtRLEdBQUtyQixLQUFLc0IsSUFBS3RCLEtBQUtpQixTQUFXbEIsRUFBS0EsRUFBSyxHQUFNVSxDQUNwRCxNQUNELEtBQUssR0FDSkksS0FBS0MsRUFBSWQsS0FBS2UsT0FBUWYsS0FBS2dCLEtBQXFCLEVBQWhCaEIsS0FBS2lCLFlBQWtCakIsS0FBS2lCLFNBQVdoQixHQUN2RVksS0FBS0ssRUFBSSxFQUNUTCxLQUFLTSxHQUFLbkIsS0FBS29CLElBQUtwQixLQUFLaUIsU0FBV2xCLEVBQUtBLEVBQUssR0FBTVUsRUFDcERJLEtBQUtRLEdBQUtyQixLQUFLc0IsSUFBS3RCLEtBQUtpQixTQUFXbEIsRUFBS0EsRUFBSyxHQUFNVSxFQUd0REksS0FBS1UsRUFBb0MsR0FBaEN2QixLQUFLZ0IsS0FBcUIsR0FBaEJoQixLQUFLaUIsVUFBdUIsRUFDL0NKLEtBQUtXLEVBQUksRUFDVFgsS0FBS1ksTUFBUSxPQXFCZGxDLEdBQUFBLFdBcERvQmlCIiwiZmlsZSI6ImJ1bGxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBJID0gTWF0aC5QSTtcclxuY29uc3QgZHcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5jb25zdCBkaCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG5sZXQgY291bnQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IHtcclxuXHRjb25zdHJ1Y3RvcihzcGVlZCA9IDMpIHtcclxuXHRcdGNvdW50ID0gY291bnQgJSA0ICsgMTtcclxuXHRcdHN3aXRjaCAoY291bnQpIHtcclxuXHRcdFx0Y2FzZSAxOiAvL+S4iuaWuVxyXG5cdFx0XHRcdHRoaXMueCA9IE1hdGgucG93KC0xLCBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpKSAqIChNYXRoLnJhbmRvbSgpICogZHcpO1xyXG5cdFx0XHRcdHRoaXMueSA9IDA7XHJcblx0XHRcdFx0dGhpcy52eCA9IE1hdGguY29zKChNYXRoLnJhbmRvbSgpICogUEkpKSAqIHNwZWVkO1xyXG5cdFx0XHRcdHRoaXMudnkgPSBNYXRoLnNpbigoTWF0aC5yYW5kb20oKSAqIFBJKSkgKiBzcGVlZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOiAvL+S4i+aWuVxyXG5cdFx0XHRcdHRoaXMueCA9IE1hdGgucG93KC0xLCBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpKSAqIChNYXRoLnJhbmRvbSgpICogZHcpO1xyXG5cdFx0XHRcdHRoaXMueSA9IGRoO1xyXG5cdFx0XHRcdHRoaXMudnggPSBNYXRoLmNvcygoTWF0aC5yYW5kb20oKSAqIFBJKSkgKiBzcGVlZDtcclxuXHRcdFx0XHR0aGlzLnZ5ID0gLU1hdGguc2luKChNYXRoLnJhbmRvbSgpICogUEkpKSAqIHNwZWVkO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6IC8v5bem5pa5XHJcblx0XHRcdFx0dGhpcy54ID0gMDtcclxuXHRcdFx0XHR0aGlzLnkgPSBNYXRoLnBvdygtMSwgTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSkgKiAoTWF0aC5yYW5kb20oKSAqIGRoKTtcclxuXHRcdFx0XHR0aGlzLnZ4ID0gTWF0aC5jb3MoKE1hdGgucmFuZG9tKCkgKiBQSSAtIFBJIC8gMikpICogc3BlZWQ7XHJcblx0XHRcdFx0dGhpcy52eSA9IE1hdGguc2luKChNYXRoLnJhbmRvbSgpICogUEkgLSBQSSAvIDIpKSAqIHNwZWVkO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQ6IC8v5Y+z5pa5XHJcblx0XHRcdFx0dGhpcy54ID0gTWF0aC5wb3coLTEsIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMikpICogKE1hdGgucmFuZG9tKCkgKiBkdyk7XHJcblx0XHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0XHR0aGlzLnZ4ID0gTWF0aC5jb3MoKE1hdGgucmFuZG9tKCkgKiBQSSArIFBJIC8gMikpICogc3BlZWQ7XHJcblx0XHRcdFx0dGhpcy52eSA9IE1hdGguc2luKChNYXRoLnJhbmRvbSgpICogUEkgLSBQSSAvIDIpKSAqIHNwZWVkO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyMCkgKiAwLjIgKyAzLFxyXG5cdFx0dGhpcy5kID0gMCxcclxuXHRcdHRoaXMuY29sb3IgPSAnI0ZGRic7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
