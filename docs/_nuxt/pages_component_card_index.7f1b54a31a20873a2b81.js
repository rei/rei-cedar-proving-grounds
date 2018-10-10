webpackJsonp([20],{"3/sA":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("jslJ");t.default={name:"SimpleCard",components:n.CdrCard}},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"^1.0.2-alpha.0","@rei/cdr-activity-card":"0.1.3","@rei/cdr-assets":"^0.3.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"^1.0.3-alpha.0","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.4","@rei/cdr-data-table":"0.1.0-alpha.2","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"0.1.2","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0-alpha.3","@rei/cdr-select":"0.1.1","@rei/cdr-tabs":"1.0.0-alpha.62","@rei/cdr-text":"^1.0.1",nuxt:"^1.0.0","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},BbYR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("3/sA"),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);var a=r("TlPP"),o=r("VU/8")(i.a,a.a,!1,null,null,null);t.default=o.exports},RXqA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("bn7w"),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);var a=r("xIhE"),o=r("VU/8")(i.a,a.a,!1,null,null,null);t.default=o.exports},TlPP:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("cdr-card",[t("p",[this._v("A simple card")])])],1)},staticRenderFns:[]};t.a=n},bn7w:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r("BbYR"));var i=r("7YgM").dependencies;t.default={name:"Cards",components:{simpleCard:n.default},data:function(){return{version:i["@rei/cdr-card"]}}}},jslJ:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";var n=r(1);t.a=n.a},function(e,t,r){"use strict";var n=r(7);t.a={name:"CdrCard",mixins:[n.a],computed:{baseClass:function(){return"cdr-card"}}}},function(e,t){e.exports={"cdr-card":"cdr-card_0.2.0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);r.d(t,"CdrCard",function(){return n.a})},function(e,t,r){"use strict";var n=r(5),i=r(0),s=r(8),a=r(9),o=Object(a.a)(i.a,n.a,n.b,!1,function(e){this.$style=s.default.locals||s.default},null,null);t.a=o.exports},function(e,t,r){"use strict";var n=r(6);r.d(t,"a",function(){return n.a}),r.d(t,"b",function(){return n.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this.$createElement;return(this._self._c||e)("article",{class:this.modifierClass},[this._t("default")],2)},i=[]},function(e,t,r){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,r=this.modifier?this.modifier.split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(t)),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))):(n.push(""+t),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))),n.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,r){"use strict";var n=r(2),i=r.n(n);t.default=i.a},function(e,t,r){"use strict";t.a=function(e,t,r,n,i,s,a,o){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}}])})},xIhE:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Card version: "+this._s(this.version))]),t("div",[t("simple-card")],1)])},staticRenderFns:[]};t.a=n}});