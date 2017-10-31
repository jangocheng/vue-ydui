/*! vue-ydui v1.0.8 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;var s=n(95),o=i(s);t.InfiniteScroll=o.default},1:function(e,t){e.exports=function(e,t,n,i){var s,o=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(s=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:s,exports:o,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},3:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=d[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(o(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(o(n.parts[s]));d[n.id]={id:n.id,refs:1,parts:r}}}}function s(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(m){var o=p++;i=f||(f=s()),t=r.bind(null,i,o,!1),n=r.bind(null,i,o,!0)}else i=s(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function r(e,t,n,i){var s=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var o=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function a(e,t){var n=t.css,i=t.media,s=t.sourceMap;if(i&&e.setAttribute("media",i),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var s=c(e,t);return i(s),function(t){for(var n=[],o=0;o<s.length;o++){var r=s[o],a=d[r.id];a.refs--,n.push(a)}t?(s=c(e,t),i(s)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],i={},s=0;s<t.length;s++){var o=t[s],r=o[0],a=o[1],l=o[2],c=o[3],d={id:e+":"+s,css:a,media:l,sourceMap:c};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),s=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||i.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},r=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,i=e===window?0:e.getBoundingClientRect().top,s=t.getBoundingClientRect().top-i,o=s+t.offsetHeight;return s>=0&&s<n||o>0&&o<=n},a=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){a(e,t)||(e.className=""===e.className?t:e.className+" "+t)},c=function(e,t){if(a(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,i,s){if(n!==i){var o=n+s>i?i:n+s;n>i&&(o=n-s<i?i:n-s),e===window?window.scrollTo(o,o):e.scrollTop=o,window.requestAnimationFrame(function(){return t(o,i,s)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var o=Math.abs(n-i),r=Math.ceil(o/s*50);t(n,i,r)};t.pageScroll=n,t.isIOS=i,t.isColor=s,t.getScrollview=o,t.checkInview=r,t.addClass=l,t.removeClass=c,t.scrollTop=d},56:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".yd-list-loading{padding:5px 0;text-align:center;font-size:13px;color:#999;height:33px;box-sizing:content-box}.yd-list-loading-box{height:33px;overflow:hidden;line-height:33px}.yd-list-loading img{height:33px;display:inline-block}.yd-list-loading svg{width:33px;height:33px}.yd-list-donetip{font-size:12px;text-align:center;padding:12px 0;color:#777}",""])},95:function(e,t,n){n(218);var i=n(1)(n(260),n(171),null,null);e.exports=i.exports},96:function(e,t,n){var i=n(1)(null,n(184),null,null);e.exports=i.exports},171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("list"),e._v(" "),n("div",{ref:"tag",staticStyle:{height:"0"}}),e._v(" "),e.isDone?e._e():n("div",{staticClass:"yd-list-loading"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]},[e._t("loadingTip",[n("loading")])],2)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.isDone,expression:"!isLoading && isDone"}],staticClass:"yd-list-donetip"},[e._t("doneTip",[e._v("没有更多数据了")])],2)],2)},staticRenderFns:[]}},184:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"lds-ellipsis",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"84",cy:"50",r:"5.04711",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"10;0;0;0;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"84;84;84;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),e._v(" "),n("circle",{attrs:{cx:"66.8398",cy:"50",r:"10",fill:"#E8574E"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}})]),e._v(" "),n("circle",{attrs:{cx:"32.8398",cy:"50",r:"10",fill:"#43A976"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}})]),e._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"4.95289",fill:"#304153"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),e._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"0",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"0;0;10;10;10",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;16;50;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})])])},staticRenderFns:[]}},218:function(e,t,n){var i=n(56);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(3)("2a4f7d60",i,!0)},260:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(96),o=i(s),r=n(5);t.default={name:"yd-infinitescroll",components:{Loading:o.default},data:function(){return{isLoading:!1,isDone:!1,num:1}},props:{onInfinite:{type:Function},callback:{type:Function},distance:{default:0,validator:function(e){return/^\d*$/.test(e)}},scrollTop:{type:Boolean,default:!0}},methods:{init:function(){var e=this;this.scrollview=(0,r.getScrollview)(this.$el),this.scrollTop&&(this.scrollview===window?window.scrollTo(0,0):this.scrollview.scrollTop=0),this.scrollview.addEventListener("scroll",this.throttledCheck,!1),this.$on("ydui.infinitescroll.loadedDone",function(){e.isLoading=!1,e.isDone=!0}),this.$on("ydui.infinitescroll.finishLoad",function(t){e.isLoading=!1}),this.$on("ydui.infinitescroll.reInit",function(){e.isLoading=!1,e.isDone=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var e=this.scrollview,t=document.body.offsetHeight,n=e===window,i=n?0:e.getBoundingClientRect().top,s=n?t:e.offsetHeight;if(!e)return void console.warn("Can't find the scrollview!");if(!this.$refs.tag)return void console.warn("Can't find the refs.tag!");var o=Math.floor(this.$refs.tag.getBoundingClientRect().top)-1,r=this.distance&&this.distance>0?~~this.distance:Math.floor(t/10);o>i&&o-(r+i)*this.num<=t&&this.$el.offsetHeight>s&&(this.isLoading=!0,this.onInfinite&&(this.onInfinite(),console.warn('From VUE-YDUI: The parameter "onInfinite" is destroyed, please use "callback".')),this.callback&&this.callback(),this.num++)}},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},30)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.scrollview.removeEventListener("scroll",this.throttledCheck)}}}})});