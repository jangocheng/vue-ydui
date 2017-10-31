/*! vue-ydui v1.0.8 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarItem=t.TabBar=void 0;var a=n(127),i=r(a),o=n(126),s=r(o);t.TabBar=i.default,t.TabBarItem=s.default},1:function(e,t){e.exports=function(e,t,n,r){var a,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:a,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(v){var i=p++;r=f||(f=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){b=n;var a=c(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=d[o.id];s.refs--,n.push(s)}t?(a=c(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],l=i[2],c=i[3],d={id:e+":"+a,css:s,media:l,sourceMap:c};r[o]?r[o].parts.push(d):n.push(r[o]={id:o,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},o=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,a=t.getBoundingClientRect().top-r,i=a+t.offsetHeight;return a>=0&&a<n||i>0&&i<=n},s=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},c=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,r,a){if(n!==r){var i=n+a>r?r:n+a;n>r&&(i=n-a<r?r:n-a),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,a)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-r),o=Math.ceil(i/a*50);t(n,r,o)};t.pageScroll=n,t.isIOS=r,t.isColor=a,t.getScrollview=i,t.checkInview=o,t.addClass=l,t.removeClass=c,t.scrollTop=d},48:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-tabbar{width:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.104rem 0 .07rem;background-color:hsla(0,0%,100%,.96)}.yd-tabbar:after{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #c9c9c9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-tabbar-fixed{position:fixed;bottom:0;left:0;z-index:100}.yd-tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-tabbar-active,.yd-tabbar-active .yd-tabbar-icon{color:inherit}.yd-tabbar-badge{top:-.02rem;margin-left:-.15rem}.yd-tabbar-badge,.yd-tabbar-dot{position:absolute;left:100%;z-index:999}.yd-tabbar-dot{display:block;width:10px;height:10px;background-color:#ef4f4f;border-radius:50%;top:.02rem;margin-left:-.11rem}.yd-tabbar-icon{height:.5832rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.yd-tabbar-icon img{height:70%}.yd-tabbar-txt{display:inline-block;font-size:inherit}',""])},126:function(e,t,n){var r=n(1)(n(287),n(183),null,null);e.exports=r.exports},127:function(e,t,n){n(207);var r=n(1)(n(288),n(155),null,null);e.exports=r.exports},155:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"yd-tabbar tabbbar-top-line-color",class:e.classes,style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},183:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"link"===e.type?n("router-link",{staticClass:"yd-tabbar-item",class:e.classes,style:e.styles,attrs:{to:e.link,exact:e.$parent.exact,"active-class":e.$parent.activeClass,tag:e.tag}},[n("span",{staticClass:"yd-tabbar-icon"},[e._t("icon"),e._v(" "),n("span",{staticClass:"yd-tabbar-badge"},[e._t("badge")],2),e._v(" "),e.dot?n("span",{staticClass:"yd-tabbar-dot"}):e._e()],2),e._v(" "),n("span",{staticClass:"yd-tabbar-txt"},[e._v(e._s(e.title))])]):n("a",{staticClass:"yd-tabbar-item",class:e.classes,style:e.styles,attrs:{href:e.link}},[n("span",{staticClass:"yd-tabbar-icon"},[e._t("icon"),e._v(" "),n("span",{staticClass:"yd-tabbar-badge"},[e._t("badge")],2),e._v(" "),e.dot?n("span",{staticClass:"yd-tabbar-dot"}):e._e()],2),e._v(" "),n("span",{staticClass:"yd-tabbar-txt"},[e._v(e._s(e.title))])])},staticRenderFns:[]}},207:function(e,t,n){var r=n(48);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("0af85aae",r,!0)},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5);t.default={name:"yd-tabbar-item",props:{type:{validator:function(e){return["link","a"].indexOf(e)>-1},default:"link"},tag:String,link:[String,Object],title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active?"yd-tabbar-active":""},styles:function(){return this.active?{}:{color:this.$parent.color}}}}},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-tabbar",props:{fixed:Boolean,exact:{type:Boolean,default:!0},activeClass:{type:String,default:"router-link-active"},activeColor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#09BB07"},bgcolor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#FFF"},color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#979797"},fontsize:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:".24rem"}},computed:{classes:function(){return this.fixed?"yd-tabbar-fixed":""},styles:function(){return{color:this.activeColor,backgroundColor:this.bgcolor,fontSize:this.fontsize}}}}}})});