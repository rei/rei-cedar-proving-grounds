webpackJsonp([26],{"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@rei/cdr-assets":"0.3.0","@rei/cdr-accordion":"1.0.5-alpha.0","@rei/cdr-activity-card":"0.1.5-alpha.0","@rei/cdr-breadcrumb":"1.0.3-alpha.0","@rei/cdr-button":"2.0.2-alpha.1","@rei/cdr-caption":"1.0.2-alpha.0","@rei/cdr-card":"0.2.4-alpha.0","@rei/cdr-checkbox":"1.0.3-alpha.0","@rei/cdr-cta":"1.1.2-alpha.0","@rei/cdr-data-table":"1.1.2-alpha.0","@rei/cdr-grid":"1.0.4-alpha.0","@rei/cdr-icon":"2.0.2-alpha.0","@rei/cdr-img":"1.0.0","@rei/cdr-input":"1.0.2-alpha.0","@rei/cdr-link":"1.0.5-alpha.2","@rei/cdr-list":"1.0.3-alpha.0","@rei/cdr-media-object":"0.1.5-alpha.0","@rei/cdr-pagination":"1.0.2-alpha.0","@rei/cdr-quote":"1.0.2-alpha.0","@rei/cdr-radio":"1.0.3-alpha.0","@rei/cdr-rating":"1.0.2-alpha.0","@rei/cdr-search":"1.0.2-alpha.0","@rei/cdr-select":"0.1.5-alpha.0","@rei/cdr-tabs":"1.0.2-alpha.0","@rei/cdr-text":"1.0.3-alpha.0","es6-promise":"^4.2.6","isomorphic-fetch":"^2.2.1",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"0.1.8","babel-polyfill":"^6.8.0","eventsource-polyfill":"^0.9.6","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},B2ni:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},Oi5h:function(e,t,r){var i=r("B2ni");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("286498d0",i,!0,{sourceMap:!1})},Xrv2:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";var i=r(1);t.a=i.a},function(e,t,r){"use strict";t.a={name:"CdrCaption",props:{summary:String,credit:String}}},function(e,t){e.exports={"cdr-caption":"cdr-caption_1.0.2-alpha.0","cdr-caption__summary":"cdr-caption__summary_1.0.2-alpha.0","cdr-caption__cite":"cdr-caption__cite_1.0.2-alpha.0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(4);r.d(t,"CdrCaption",function(){return i.a})},function(e,t,r){"use strict";var i=r(5),a=r(0),n=r(7),s=r(8),o=Object(s.a)(a.a,i.a,i.b,!1,function(e){this.$style=n.default.locals||n.default},null,null);t.a=o.exports},function(e,t,r){"use strict";var i=r(6);r.d(t,"a",function(){return i.a}),r.d(t,"b",function(){return i.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return a});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.$style["cdr-caption"],"cdr-inset--squish"]},[e.summary?r("p",{class:e.$style["cdr-caption__summary"]},[e._v("\n    "+e._s(e.summary)+"\n  ")]):e._e(),e._v(" "),e.credit?r("cite",{staticClass:"cdr-text cdr-text--citation",class:e.$style["cdr-caption__cite"]},[e._v("\n    "+e._s(e.credit)+"\n  ")]):e._e()])},a=[]},function(e,t,r){"use strict";var i=r(2),a=r.n(i);t.default=a.a},function(e,t,r){"use strict";t.a=function(e,t,r,i,a,n,s,o){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}}])})},cUzT:function(e,t,r){"use strict";var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Caption version: "+this._s(this.version))]),t("h3",[this._v("Default")]),t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?",credit:"Lorem ipsum dolor sit"}}),t("h3",[this._v("Summary only")]),t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"}}),t("h3",[this._v("Caption only")]),t("cdr-caption",{attrs:{credit:"Lorem ipsum dolor sit"}}),t("h3",[this._v("In a figure")]),t("figure",[t("figcaption",[t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?",credit:"Lorem ipsum dolor sit"}})],1)])],1)},staticRenderFns:[]};t.a=i},js5S:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("wyzQ"),a=r("cUzT");var n=function(e){r("Oi5h")},s=r("VU/8")(i.a,a.a,!1,n,null,null);t.default=s.exports},wyzQ:function(e,t,r){"use strict";var i=r("Xrv2"),a=(r.n(i),r("7YgM").dependencies);t.a={name:"CaptionExample",components:{CdrCaption:i.CdrCaption},data:function(){return{version:a["@rei/cdr-caption"]}}}}});