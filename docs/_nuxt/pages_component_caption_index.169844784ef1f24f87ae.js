webpackJsonp([32],{"6uo1":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"1.0.2","@rei/cdr-activity-card":"0.1.4","@rei/cdr-assets":"0.3.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"2.0.0","@rei/cdr-caption":"1.0.0","@rei/cdr-card":"0.2.0","@rei/cdr-checkbox":"1.0.2","@rei/cdr-cta":"1.0.4-alpha.1","@rei/cdr-data-table":"1.1.0-alpha.4","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"2.0.1","@rei/cdr-img":"1.0.1","@rei/cdr-input":"1.0.0-alpha.5","@rei/cdr-link":"1.1.0-alpha.2","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"0.1.4","@rei/cdr-pagination":"0.1.2-alpha.6","@rei/cdr-popover":"0.1.0-alpha.1","@rei/cdr-quote":"1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0","@rei/cdr-search":"0.1.3-alpha.0","@rei/cdr-select":"0.1.4","@rei/cdr-tabs":"1.0.0-alpha.64","@rei/cdr-text":"1.0.2-alpha.0",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"^0.1.7","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},Xrv2:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";var i=r(1);t.a=i.a},function(e,t,r){"use strict";t.a={name:"CdrCaption",props:{summary:String,credit:String}}},function(e,t){e.exports={"cdr-caption":"cdr-caption_1.0.0","cdr-caption__summary":"cdr-caption__summary_1.0.0","cdr-caption__cite":"cdr-caption__cite_1.0.0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(4);r.d(t,"CdrCaption",function(){return i.a})},function(e,t,r){"use strict";var i=r(5),n=r(0),a=r(7),s=r(8),o=Object(s.a)(n.a,i.a,i.b,!1,function(e){this.$style=a.default.locals||a.default},null,null);t.a=o.exports},function(e,t,r){"use strict";var i=r(6);r.d(t,"a",function(){return i.a}),r.d(t,"b",function(){return i.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.$style["cdr-caption"],"cdr-inset--squish"]},[e.summary?r("p",{class:e.$style["cdr-caption__summary"]},[e._v("\n    "+e._s(e.summary)+"\n  ")]):e._e(),e._v(" "),e.credit?r("cite",{staticClass:"cdr-text cdr-text--citation",class:e.$style["cdr-caption__cite"]},[e._v("\n    "+e._s(e.credit)+"\n  ")]):e._e()])},n=[]},function(e,t,r){"use strict";var i=r(2),n=r.n(i);t.default=n.a},function(e,t,r){"use strict";t.a=function(e,t,r,i,n,a,s,o){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:u}}}])})},cUzT:function(e,t,r){"use strict";var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Caption version: "+this._s(this.version))]),t("h3",[this._v("Default")]),t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?",credit:"Lorem ipsum dolor sit"}}),t("h3",[this._v("Summary only")]),t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"}}),t("h3",[this._v("Caption only")]),t("cdr-caption",{attrs:{credit:"Lorem ipsum dolor sit"}}),t("h3",[this._v("In a figure")]),t("figure",[t("figcaption",[t("cdr-caption",{attrs:{summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?",credit:"Lorem ipsum dolor sit"}})],1)])],1)},staticRenderFns:[]};t.a=i},gbNS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Xrv2"),n=r("7YgM").dependencies;t.default={name:"CaptionExample",components:{CdrCaption:i.CdrCaption},data:function(){return{version:n["@rei/cdr-caption"]}}}},js5S:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("gbNS"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);var s=r("cUzT");var o=function(e){r("tMEw")},c=r("VU/8")(n.a,s.a,!1,o,null,null);t.default=c.exports},tMEw:function(e,t,r){var i=r("6uo1");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("b7048c80",i,!0,{sourceMap:!1})}});