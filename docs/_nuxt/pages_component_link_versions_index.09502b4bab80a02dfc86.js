webpackJsonp([17],{"3IRH":function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},"3P1c":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("EQ8I"),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var a=t("jKbG");var l=function(n){t("z5d7")},s=t("VU/8")(o.a,a.a,!1,l,null,null);e.default=s.exports},AKnX:function(n,e,t){"use strict";(function(n){var r,o,i,a=s(t("C4MV")),l=s(t("pFYg"));function s(n){return n&&n.__esModule?n:{default:n}}!function(t,a){"object"==(0,l.default)(e)&&"object"==(0,l.default)(n)?n.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(e,o):r)||(n.exports=i))}("undefined"!=typeof self&&self,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||(0,a.default)(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=3)}([function(n,e,t){var r=t(1);e.a=r.a},function(n,e,t){var r=t(7);e.a={name:"CdrLink",mixins:[r.a],props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},target:String,rel:String},computed:{baseClass:function(){return"cdr-link"},computedRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(n,e){n.exports={"cdr-link":"cdr-link_0.2.0","cdr-link--standalone":"cdr-link--standalone_0.2.0"}},function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0});var r=t(4);t.d(e,"CdrLink",function(){return r.a})},function(n,e,t){var r=t(5),o=t(0),i=t(8),a=t(9),l=Object(a.a)(o.a,r.a,r.b,!1,function(n){this.$style=i.default.locals||i.default},null,null);e.a=l.exports},function(n,e,t){var r=t(6);t.d(e,"a",function(){return r.a}),t.d(e,"b",function(){return r.b})},function(n,e,t){t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this,e=n.$createElement;return(n._self._c||e)(n.tag,{tag:"component",class:[n.$style.poo,n.modifierClass],attrs:{target:n.target,rel:n.computedRel,href:"a"===n.tag?n.href:null}},[n._t("default",[n._v("Link Text")])],2)},o=[]},function(n,e,t){e.a={props:{modifier:String},computed:{modifierClass:function(){var n=this,e=this.baseClass,t=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(t.map(function(t){return n.modifyClassName(e,t)}))):(r.push(""+e),r=r.concat(t.map(function(t){return n.modifyClassName(e,t)}))),r.join(" ")}},methods:{moduleClass:function(n){return this.$style[""+n]},modifyClassName:function(n,e){return this.$style?this.moduleClass(n+"--"+e):n+"--"+e}}}},function(n,e,t){var r=t(2),o=t.n(r);e.default=o.a},function(n,e,t){e.a=function(n,e,t,r,o,i,a,l){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(n,e){return s.call(e),c(n,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:n,options:u}}}])})}).call(e,t("3IRH")(n))},EQ8I:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(t("Dd8w")),o=i(t("EgZ5"));function i(n){return n&&n.__esModule?n:{default:n}}e.default={name:"LinkVersions",components:(0,r.default)({},o.default),data:function(){return{VersionedLinks:o.default}}}},EgZ5:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("J8c9"),o=t("AKnX"),i=t("yFSF");e.default={CdrLink010:r.CdrLink,CdrLink020:o.CdrLink,CdrLink100:i.CdrLink}},J8c9:function(n,e,t){"use strict";(function(n){var r,o,i,a=s(t("C4MV")),l=s(t("pFYg"));function s(n){return n&&n.__esModule?n:{default:n}}!function(t,a){"object"==(0,l.default)(e)&&"object"==(0,l.default)(n)?n.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(e,o):r)||(n.exports=i))}("undefined"!=typeof self&&self,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||(0,a.default)(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=1)}([function(n,e,t){var r=t(4);e.a={name:"CdrLink",mixins:[r.a],props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},target:String,rel:String},computed:{baseClass:function(){return"cdr-link"},computedRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0});var r=t(2);t.d(e,"CdrLink",function(){return r.a})},function(n,e,t){var r=t(0),o=t(5),i=t(6),a=Object(i.a)(r.a,o.a,o.b,!1,function(n){t(3)},null,null);e.a=a.exports},function(n,e){},function(n,e,t){e.a={props:{modifier:String},computed:{modifierClass:function(){var n=this.baseClass,e=this.modifier?this.modifier.split(" "):[],t=[];return this.theme||(t.push(""+n),t=t.concat(e.map(function(e){return n+"--"+e}))),t.join(" ")}}}},function(n,e,t){t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this,e=n.$createElement;return(n._self._c||e)(n.tag,{tag:"component",class:n.modifierClass,attrs:{target:n.target,rel:n.computedRel,href:"a"===n.tag?n.href:null}},[n._t("default",[n._v("Link Text")])],2)},o=[]},function(n,e,t){e.a=function(n,e,t,r,o,i,a,s){var u=(0,l.default)((n=n||{}).default);"object"!==u&&"function"!==u||(n=n.default);var c,d="function"==typeof n?n.options:n;if(e&&(d.render=e,d.staticRenderFns=t,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId=i),a?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var f=d.render;d.render=function(n,e){return c.call(e),f(n,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:n,options:d}}}])})}).call(e,t("3IRH")(n))},XVRT:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,".cdr-link{-ms-flex-align:center;-webkit-box-align:center;align-items:center;background-color:transparent;border:0;cursor:pointer;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;fill:#3278ae;padding:0;vertical-align:top}.cdr-link,.cdr-link:active,.cdr-link:focus,.cdr-link:hover{color:#3278ae;outline:none;text-decoration:underline}.cdr-link:focus{outline:3.2px dotted #8dd1ed;outline:.2rem dotted #8dd1ed}.cdr-link--standalone{text-decoration:none}.cdr-link--standalone:active,.cdr-link--standalone:focus,.cdr-link--standalone:hover,.cdr-link--standalone:visited{text-decoration:underline}.cdr-link .cdr-link__icon{fill:#3278ae}.cdr-link_0\\.2\\.0{-ms-flex-align:center;-webkit-box-align:center;align-items:center;background-color:transparent;border:0;cursor:pointer;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;fill:#3278ae;padding:0;vertical-align:top}.cdr-link_0\\.2\\.0,.cdr-link_0\\.2\\.0:active,.cdr-link_0\\.2\\.0:focus,.cdr-link_0\\.2\\.0:hover{color:#3278ae;outline:none;text-decoration:underline}.cdr-link_0\\.2\\.0:focus{outline:3.2px dotted #8dd1ed;outline:.2rem dotted #8dd1ed}.cdr-link--standalone_0\\.2\\.0{text-decoration:none}.cdr-link--standalone_0\\.2\\.0:active,.cdr-link--standalone_0\\.2\\.0:focus,.cdr-link--standalone_0\\.2\\.0:hover,.cdr-link--standalone_0\\.2\\.0:visited{text-decoration:underline}.cdr-link_1\\.0\\.0{-ms-flex-align:center;-webkit-box-align:center;align-items:center;background-color:transparent;border:0;cursor:pointer;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;fill:#3278ae;padding:0;vertical-align:top}.cdr-link_1\\.0\\.0,.cdr-link_1\\.0\\.0:active,.cdr-link_1\\.0\\.0:focus,.cdr-link_1\\.0\\.0:hover{color:#3278ae;outline:none;text-decoration:underline}.cdr-link_1\\.0\\.0:focus{outline:3.2px dotted #8dd1ed;outline:.2rem dotted #8dd1ed}.cdr-link--standalone_1\\.0\\.0{text-decoration:none}.cdr-link--standalone_1\\.0\\.0:active,.cdr-link--standalone_1\\.0\\.0:focus,.cdr-link--standalone_1\\.0\\.0:hover,.cdr-link--standalone_1\\.0\\.0:visited{text-decoration:underline}",""])},jKbG:function(n,e,t){"use strict";var r={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("Versioned Links")]),n._l(n.VersionedLinks,function(e,r){return t("div",{key:r},[t(e,{tag:"component"},[n._v("test")]),t("p",[n._v(n._s(r))])],1)})],2)},staticRenderFns:[]};e.a=r},yFSF:function(n,e,t){"use strict";(function(n){var r,o,i,a=s(t("C4MV")),l=s(t("pFYg"));function s(n){return n&&n.__esModule?n:{default:n}}!function(t,a){"object"==(0,l.default)(e)&&"object"==(0,l.default)(n)?n.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(e,o):r)||(n.exports=i))}("undefined"!=typeof self&&self,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||(0,a.default)(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=3)}([function(n,e,t){var r=t(1);e.a=r.a},function(n,e,t){var r=t(7);e.a={name:"CdrLink",mixins:[r.a],props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},target:String,rel:String},computed:{baseClass:function(){return"cdr-link"},computedRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(n,e){n.exports={"cdr-link":"cdr-link_1.0.0","cdr-link--standalone":"cdr-link--standalone_1.0.0"}},function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0});var r=t(4);t.d(e,"CdrLink",function(){return r.a})},function(n,e,t){var r=t(5),o=t(0),i=t(8),a=t(9),l=Object(a.a)(o.a,r.a,r.b,!1,function(n){this.$style=i.default.locals||i.default},null,null);e.a=l.exports},function(n,e,t){var r=t(6);t.d(e,"a",function(){return r.a}),t.d(e,"b",function(){return r.b})},function(n,e,t){t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this,e=n.$createElement;return(n._self._c||e)(n.tag,{tag:"component",class:[n.modifierClass],attrs:{target:n.target,rel:n.computedRel,href:"a"===n.tag?n.href:null}},[n._t("default",[n._v("Link Text")])],2)},o=[]},function(n,e,t){e.a={props:{modifier:String},computed:{modifierClass:function(){var n=this,e=this.baseClass,t=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(t.map(function(t){return n.modifyClassName(e,t)}))):(r.push(""+e),r=r.concat(t.map(function(t){return n.modifyClassName(e,t)}))),r.join(" ")}},methods:{moduleClass:function(n){return this.$style[""+n]},modifyClassName:function(n,e){return this.$style?this.moduleClass(n+"--"+e):n+"--"+e}}}},function(n,e,t){var r=t(2),o=t.n(r);e.default=o.a},function(n,e,t){e.a=function(n,e,t,r,o,i,a,l){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(n,e){return s.call(e),c(n,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:n,options:u}}}])})}).call(e,t("3IRH")(n))},z5d7:function(n,e,t){var r=t("XVRT");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("99626c06",r,!0,{sourceMap:!1})}});