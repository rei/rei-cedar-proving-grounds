!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CdrLink",[],e):"object"==typeof exports?exports.CdrLink=e():t.CdrLink=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";var r=n(1);e.a=r.a},function(t,e,n){"use strict";var r=n(7);e.a={name:"CdrLink",mixins:[r.a],props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},target:String,rel:String},computed:{baseClass:function(){return"cdr-link"},computedRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(t,e){t.exports={"cdr-link":"cdr-link_1.0.0","cdr-link--standalone":"cdr-link--standalone_1.0.0"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);function o(t){t.component("cdr-link",r.a)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";var r=n(5),o=n(0),i=n(8),s=n(9);var u=Object(s.a)(o.a,r.a,r.b,!1,function(t){this.$style=i.default.locals||i.default},null,null);e.a=u.exports},function(t,e,n){"use strict";var r=n(6);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return r.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:[t.modifierClass],attrs:{target:t.target,rel:t.computedRel,href:"a"===t.tag?t.href:null}},[t._t("default",[t._v("Link Text")])],2)},o=[]},function(t,e,n){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this,e=this.baseClass,n=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(n.map(function(n){return t.modifyClassName(e,n)}))):(r.push(""+e),r=r.concat(n.map(function(n){return t.modifyClassName(e,n)}))),r.join(" ")}},methods:{moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,n){"use strict";var r=n(2),o=n.n(r);e.default=o.a},function(t,e,n){"use strict";e.a=function(t,e,n,r,o,i,s,u){var a,c="function"==typeof t?t.options:t;e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0);r&&(c.functional=!0);i&&(c._scopeId="data-v-"+i);s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(a)if(c.functional){c._injectStyles=a;var f=c.render;c.render=function(t,e){return a.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:c}}}])});