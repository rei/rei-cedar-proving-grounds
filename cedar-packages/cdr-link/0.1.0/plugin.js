!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CdrLink",[],e):"object"==typeof exports?exports.CdrLink=e():t.CdrLink=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){"use strict";var r=n(4);e.a={name:"CdrLink",mixins:[r.a],props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},target:String,rel:String},computed:{baseClass:function(){return"cdr-link"},computedRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);function o(t){t.component("cdr-link",r.a)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";var r=n(0),o=n(5),i=n(6);var s=function(t){n(3)},u=Object(i.a)(r.a,o.a,o.b,!1,s,null,null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,e=this.modifier?this.modifier.split(" "):[],n=[];return this.theme||(n.push(""+t),n=n.concat(e.map(function(e){return t+"--"+e}))),n.join(" ")}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.modifierClass,attrs:{target:t.target,rel:t.computedRel,href:"a"===t.tag?t.href:null}},[t._t("default",[t._v("Link Text")])],2)},o=[]},function(t,e,n){"use strict";e.a=function(t,e,n,r,o,i,s,u){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var f,c="function"==typeof t?t.options:t;e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0);r&&(c.functional=!0);i&&(c._scopeId=i);s?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(f)if(c.functional){c._injectStyles=f;var d=c.render;c.render=function(t,e){return f.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:c}}}])});