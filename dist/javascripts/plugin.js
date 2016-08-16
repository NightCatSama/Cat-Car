define(["./common/MiaoCode","./plugins/carousel","layout/menu-content"],function(e,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var t=(o(e),o(i));requirejs.config({baseUrl:"dist/javascripts"}),require(["../../../domReady"],function(e){e(function(){(0,t["default"])("#example1"),(0,t["default"])("#example2",{count:3,slideTime:.25,autoTimer:3e3,reverse:!1,height:300,direction:"horizontal",isLoop:!0,index:0}),(0,t["default"])("#example3",{count:1,slideTime:.35,autoTimer:5e3,reverse:!1,width:void 0,height:void 0,direction:"horizontal",isLoop:!0,autoHide:"hide",index:2,pagination:"diy-class"}),(0,t["default"])("#example4",{count:1,slideTime:2,autoTimer:1e3,reverse:!1,direction:"vertical",isLoop:!0,pagination:!1});document.body.classList.remove("hide")})})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJfTWlhb0NvZGUiLCJfY2Fyb3VzZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfY2Fyb3VzZWwyIiwicmVxdWlyZWpzIiwiY29uZmlnIiwiYmFzZVVybCIsInJlcXVpcmUiLCJkb21SZWFkeSIsImNvdW50Iiwic2xpZGVUaW1lIiwiYXV0b1RpbWVyIiwicmV2ZXJzZSIsImhlaWdodCIsImRpcmVjdGlvbiIsImlzTG9vcCIsImluZGV4Iiwid2lkdGgiLCJ1bmRlZmluZWQiLCJhdXRvSGlkZSIsInBhZ2luYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLG9CQUFxQixxQkFBc0IsdUJBQXdCLFNBQVVDLEVBQVdDLEdBQy9GLFlBTUEsU0FBU0MsR0FBdUJDLEdBQy9CLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQzlCRSxVQUFTRixHQU5YLEdBRUlHLElBRmFKLEVBQXVCRixHQUV2QkUsRUFBdUJELEdBTHpDTSxXQUFVQyxRQUNUQyxRQUFTLHFCQU9WQyxTQUFTLHFCQUFzQixTQUFVQyxHQUN4Q0EsRUFBUyxZQUNPLEVBQUFMLEVBQUFBLFlBQVMsY0FDVCxFQUFBQSxFQUFBQSxZQUFTLGFBQ3ZCTSxNQUFPLEVBQ1BDLFVBQVcsSUFDWEMsVUFBVyxJQUNYQyxTQUFTLEVBQ1RDLE9BQVEsSUFDUkMsVUFBVyxhQUNYQyxRQUFRLEVBQ1JDLE1BQU8sS0FFTyxFQUFBYixFQUFBQSxZQUFTLGFBQ3ZCTSxNQUFPLEVBQ1BDLFVBQVcsSUFDWEMsVUFBVyxJQUNYQyxTQUFTLEVBQ1RLLE1BQU9DLE9BQ1BMLE9BQVFLLE9BQ1JKLFVBQVcsYUFDWEMsUUFBUSxFQUNSSSxTQUFVLE9BQ1ZILE1BQU8sRUFDUEksV0FBWSxlQUVFLEVBQUFqQixFQUFBQSxZQUFTLGFBQ3ZCTSxNQUFPLEVBQ1BDLFVBQVcsRUFDWEMsVUFBVyxJQUNYQyxTQUFTLEVBQ1RFLFVBQVcsV0FDWEMsUUFBUSxFQUNSSyxZQUFZLEdBR2JDLFVBQVNDLEtBQUtDLFVBQVVDLE9BQU8iLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZWpzLmNvbmZpZyh7XHJcblx0YmFzZVVybDogJ2Rpc3QvamF2YXNjcmlwdHMnXHJcbn0pO1xyXG5cclxuaW1wb3J0ICdsYXlvdXQvbWVudS1jb250ZW50JztcclxuaW1wb3J0IE1pYW8gZnJvbSAnLi9jb21tb24vTWlhb0NvZGUnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9wbHVnaW5zL2Nhcm91c2VsJztcclxuXHJcbnJlcXVpcmUoWycuLi8uLi8uLi9kb21SZWFkeSddLCBmdW5jdGlvbiAoZG9tUmVhZHkpIHtcclxuXHRkb21SZWFkeSgoKSA9PiB7XHJcblx0XHRsZXQgZXhhbXBsZTEgPSBDYXJvdXNlbCgnI2V4YW1wbGUxJyk7XHJcblx0XHRsZXQgZXhhbXBsZTIgPSBDYXJvdXNlbCgnI2V4YW1wbGUyJywge1xyXG5cdFx0XHRjb3VudDogMyxcclxuXHRcdFx0c2xpZGVUaW1lOiAwLjI1LFxyXG5cdFx0XHRhdXRvVGltZXI6IDMwMDAsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRoZWlnaHQ6IDMwMCxcclxuXHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcblx0XHRcdGlzTG9vcDogdHJ1ZSxcclxuXHRcdFx0aW5kZXg6IDAsXHJcblx0XHR9KTtcclxuXHRcdGxldCBleGFtcGxlMyA9IENhcm91c2VsKCcjZXhhbXBsZTMnLCB7XHJcblx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRzbGlkZVRpbWU6IDAuMzUsXHJcblx0XHRcdGF1dG9UaW1lcjogNTAwMCxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiB1bmRlZmluZWQsXHJcblx0XHRcdGhlaWdodDogdW5kZWZpbmVkLFxyXG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuXHRcdFx0aXNMb29wOiB0cnVlLFxyXG5cdFx0XHRhdXRvSGlkZTogJ2hpZGUnLFxyXG5cdFx0XHRpbmRleDogMixcclxuXHRcdFx0cGFnaW5hdGlvbjogJ2RpeS1jbGFzcycsXHJcblx0XHR9KTtcclxuXHRcdGxldCBleGFtcGxlNCA9IENhcm91c2VsKCcjZXhhbXBsZTQnLCB7XHJcblx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRzbGlkZVRpbWU6IDIsXHJcblx0XHRcdGF1dG9UaW1lcjogMTAwMCxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuXHRcdFx0aXNMb29wOiB0cnVlLFxyXG5cdFx0XHRwYWdpbmF0aW9uOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdH0pXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
