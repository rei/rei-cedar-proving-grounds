webpackJsonp([5],{"/8oF":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"1JYE":function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n          "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact Unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"inline unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline compact unordered list\n  ")]),i("cdr-list",{attrs:{modifier:"inline compact unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},"7ir+":function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=3)}([function(t,e,i){"use strict";var r=i(1);e.a=r.a},function(t,e,i){"use strict";var r=i(7);e.a={name:"CdrList",mixins:[r.a],props:{tag:{type:String,default:"ul",validator:function(t){return["ul","ol"].indexOf(t)>=0||!1}}},computed:{baseClass:function(){return"cdr-list"}}}},function(t,e){t.exports={"cdr-list":"cdr-list_1.0.1","cdr-list--compact":"cdr-list--compact_1.0.1","cdr-list--ordered":"cdr-list--ordered_1.0.1","cdr-list--unordered":"cdr-list--unordered_1.0.1","cdr-list--inline":"cdr-list--inline_1.0.1"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(4);i.d(e,"CdrList",function(){return r.a})},function(t,e,i){"use strict";var r=i(5),s=i(0),n=i(8),o=i(9),a=Object(o.a)(s.a,r.a,r.b,!1,function(t){this.$style=n.default.locals||n.default},null,null);e.a=a.exports},function(t,e,i){"use strict";var r=i(6);i.d(e,"a",function(){return r.a}),i.d(e,"b",function(){return r.b})},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s});var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.modifierClass},[this._t("default")],2)},s=[]},function(t,e,i){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this,e=this.baseClass,i=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))):(r.push(""+e),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))),r.join(" ")}},methods:{moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,i){"use strict";var r=i(2),s=i.n(r);e.default=s.a},function(t,e,i){"use strict";e.a=function(t,e,i,r,s,n,o,a){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):s&&(d=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(t,e){return d.call(e),u(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:t,options:c}}}])})},FQNU:function(t,e,i){var r=i("saD2");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("06f13f9b",r,!0,{sourceMap:!1})},"KAC+":function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Ordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n          "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n              "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)])],1)])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact ordered list\n  ")]),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},Ltw8:function(t,e,i){var r=i("hwpS");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("6a6a596c",r,!0,{sourceMap:!1})},"O+Zu":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("cdr-text",{attrs:{tag:"h2",modifier:"heading-large"}},[this._v("\n    List version: "+this._s(this.version)+"\n  ")]),e("unordered-list",{staticClass:"cdr-stack--xl"}),e("ordered-list",{staticClass:"cdr-stack--xl"}),e("bare-list",{staticClass:"cdr-stack--xl"})],1)},staticRenderFns:[]};e.a=r},Py5H:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"OrderedList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},XnJy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("s5Xf"),s=a(i("iRkc")),n=a(i("qaM5")),o=a(i("sKes"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Lists",components:{unorderedList:s.default,orderedList:n.default,bareList:o.default,CdrText:r.CdrText}}},h3Vd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("XnJy"),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);var o=i("O+Zu"),a=i("VU/8")(s.a,o.a,!1,null,null,null);e.default=a.exports},hA7V:function(t,e,i){var r=i("/8oF");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("282dd872",r,!0,{sourceMap:!1})},hAPa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"UnorderedList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},hK2j:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg"},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"inline"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline compact bare list\n  ")]),i("cdr-list",{attrs:{modifier:"inline compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},hwpS:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},iRkc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("hAPa"),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);var o=i("1JYE");var a=function(t){i("hA7V")},d=i("VU/8")(s.a,o.a,!1,a,null,null);e.default=d.exports},mmOi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"BareList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},qaM5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Py5H"),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);var o=i("KAC+");var a=function(t){i("Ltw8")},d=i("VU/8")(s.a,o.a,!1,a,null,null);e.default=d.exports},s5Xf:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=2)}([function(t,e,i){"use strict";var r=i(1);e.a=r.a},function(t,e,i){"use strict";var r=i(6);e.a={name:"CdrText",mixins:[r.a],props:{tag:{type:String,default:"p"}},computed:{baseClass:function(){return"cdr-text"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(3);i.d(e,"CdrText",function(){return r.a})},function(t,e,i){"use strict";var r=i(4),s=i(0),n=i(8),o=Object(n.a)(s.a,r.a,r.b,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var r=i(5);i.d(e,"a",function(){return r.a}),i.d(e,"b",function(){return r.b})},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s});var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:[this.modifierClass]},[this._t("default")],2)},s=[]},function(t,e,i){"use strict";var r=i(7);e.a={mixins:[r.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(t,e,i){"use strict";e.a={methods:{buildClass:function(t){var e=this,i="cdr";this.baseClass&&(i=this.baseClass);var r=i,s=this[t]?this[t].split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(r)),n=n.concat(s.map(function(t){return e.modifyClassName(r,t)}))):(n.push(""+r),n=n.concat(s.map(function(t){return e.modifyClassName(r,t)}))),n.join(" ")},moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,i){"use strict";e.a=function(t,e,i,r,s,n,o,a){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):s&&(d=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(t,e){return d.call(e),u(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:t,options:c}}}])})},sKes:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("mmOi"),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);var o=i("hK2j");var a=function(t){i("FQNU")},d=i("VU/8")(s.a,o.a,!1,a,null,null);e.default=d.exports},saD2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])}});