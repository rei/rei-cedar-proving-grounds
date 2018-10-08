!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("CdrRating",[],r):"object"==typeof exports?exports.CdrRating=r():t.CdrRating=r()}("undefined"!=typeof self?self:this,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=3)}([function(t,r,n){"use strict";var e=n(1);r.a=e.a},function(t,r,n){"use strict";var e=n(7);r.a={name:"CdrRating",mixins:[e.a],props:{rating:{required:!0,type:[String,Number],default:0},count:{required:!1,type:[String,Number],default:0},compact:{type:Boolean,default:!1},href:{type:String}},computed:{baseClass:function(){return"cdr-rating"},rounded:function(){return Math.round(4*this.rating)/4},whole:function(){return Math.floor(this.rounded)},remainder:function(){return this.rounded.toFixed(2).split(".")[1]},formattedCount:function(){return this.compact?"("+this.count+")":""+this.count}}}},function(t,r){t.exports={"cdr-rating":"cdr-rating_1.0.0-alpha.3","cdr-rating__icon":"cdr-rating__icon_1.0.0-alpha.3","cdr-rating__count":"cdr-rating__count_1.0.0-alpha.3","cdr-rating__ratings":"cdr-rating__ratings_1.0.0-alpha.3","cdr-rating__background":"cdr-rating__background_1.0.0-alpha.3","cdr-rating__placeholder":"cdr-rating__placeholder_1.0.0-alpha.3","cdr-rating__placeholder--no-reviews":"cdr-rating__placeholder--no-reviews_1.0.0-alpha.3","cdr-rating__100":"cdr-rating__100_1.0.0-alpha.3","cdr-rating__75":"cdr-rating__75_1.0.0-alpha.3","cdr-rating__50":"cdr-rating__50_1.0.0-alpha.3","cdr-rating__25":"cdr-rating__25_1.0.0-alpha.3","cdr-rating--linked":"cdr-rating--linked_1.0.0-alpha.3","cdr-rating__number":"cdr-rating__number_1.0.0-alpha.3","cdr-rating--large":"cdr-rating--large_1.0.0-alpha.3","cdr-rating--small":"cdr-rating--small_1.0.0-alpha.3"}},function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n(4);n.d(r,"CdrRating",function(){return e.a})},function(t,r,n){"use strict";var e=n(5),a=n(0),i=n(8),s=n(9);var o=Object(s.a)(a.a,e.a,e.b,!1,function(t){this.$style=i.default.locals||i.default},null,null);o.options.__file="CdrRating.vue",r.a=o.exports},function(t,r,n){"use strict";var e=n(6);n.d(r,"a",function(){return e.a}),n.d(r,"b",function(){return e.b})},function(t,r,n){"use strict";n.d(r,"a",function(){return e}),n.d(r,"b",function(){return a});var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n(t.href?"a":"div",{tag:"component",class:[t.modifierClass,t.href?t.$style["cdr-rating--linked"]:""],attrs:{href:t.href}},[n("div",{class:t.$style["cdr-rating__background"]},t._l(5,function(r){return n("span",{key:r,class:[t.$style["cdr-rating__icon"],t.count>0?t.$style["cdr-rating__placeholder"]:t.$style["cdr-rating__placeholder--no-reviews"]],attrs:{"aria-hidden":"true"}})})),t._v(" "),n("div",{class:t.$style["cdr-rating__ratings"]},[t._l(t.whole,function(r){return n("span",{key:r,class:[t.$style["cdr-rating__icon"],t.$style["cdr-rating__100"]],attrs:{"aria-hidden":"true"}})}),t._v(" "),"25"===t.remainder?n("span",{class:[t.$style["cdr-rating__icon"],t.$style["cdr-rating__25"]],attrs:{"aria-hidden":"true"}}):"50"===t.remainder?n("span",{class:[t.$style["cdr-rating__icon"],t.$style["cdr-rating__50"]],attrs:{"aria-hidden":"true"}}):"75"===t.remainder?n("span",{class:[t.$style["cdr-rating__icon"],t.$style["cdr-rating__75"]],attrs:{"aria-hidden":"true"}}):t._e()],2),t._v(" "),t.count?n("span",{class:t.$style["cdr-rating__count"],attrs:{"aria-hidden":"true"}},[t.href?n("span",{class:t.$style["cdr-rating__number"]},[t._v(t._s(t.rounded))]):t._e(),n("span",[t._v(t._s(t.formattedCount))]),t.compact?t._e():n("span",[t._v(" Reviews")])]):t._e(),t._v(" "),n("span",{staticClass:"cdr-sr-only"},[t._v("rated "+t._s(t.rounded)+" out of 5 with "+t._s(t.count)+" reviews")])])},a=[]},function(t,r,n){"use strict";r.a={props:{modifier:String},computed:{modifierClass:function(){var t=this,r=this.baseClass,n=this.modifier?this.modifier.split(" "):[],e=[];return this.$style?(e.push(this.moduleClass(r)),e=e.concat(n.map(function(n){return t.modifyClassName(r,n)}))):(e.push(""+r),e=e.concat(n.map(function(n){return t.modifyClassName(r,n)}))),e.join(" ")}},methods:{moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,r){return this.$style?this.moduleClass(t+"--"+r):t+"--"+r}}}},function(t,r,n){"use strict";var e=n(2),a=n.n(e);r.default=a.a},function(t,r,n){"use strict";r.a=function(t,r,n,e,a,i,s,o){var c,d="function"==typeof t?t.options:t;r&&(d.render=r,d.staticRenderFns=n,d._compiled=!0);e&&(d.functional=!0);i&&(d._scopeId="data-v-"+i);s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a);if(c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(t,r){return c.call(r),u(t,r)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:d}}}])});