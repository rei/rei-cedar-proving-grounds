webpackJsonp([6],{"+ad6":function(e,t,r){var a=r("FTU8");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("3d33ab17",a,!0,{sourceMap:!1})},"0E73":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("4pC+"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);var s=r("jsKN");var i=function(e){r("Wf/u")},l=r("VU/8")(n.a,s.a,!1,i,null,null);t.default=l.exports},"1/TC":function(e,t,r){"use strict";var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-examples-wrapper"},[r("cdr-data-table",{attrs:{"col-headers":!0,"row-headers":!0,caption:"Slots can use components",id:"manual-3-col-slot"}},[r("template",{slot:"thead"},[r("tr",[r("th",{staticClass:"empty",attrs:{scope:"col"}}),r("th",[e._v("\n            Checkbox Col\n        ")]),e._l(e.tableData.books.headers,function(t,a){return r("th",{key:a},[e._v("\n            "+e._s(t)+"\n          ")])})],2)]),r("template",{slot:"tbody"},e._l(e.tableData.books.records,function(t,a){return r("tr",{key:"tr_"+a},[r("th",[e._v(e._s(t.rowheader))]),r("td",[r("cdr-checkbox",[e._v("CheckBox")])],1),e._l(t,function(t,a,n){return"rowheader"!==a?r("td",{key:n},[e._v("\n            "+e._s(t)+"\n          ")]):e._e()})],2)}))],2)],1)},staticRenderFns:[]};t.a=a},"40sz":function(e,t,r){"use strict";var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-examples-wrapper"},[r("cdr-data-table",{attrs:{"col-headers":!0,"row-headers":!0,caption:"Table with data fed in using slots",id:"manual-3-col"}},[r("template",{slot:"thead"},[r("tr",[r("th",{staticClass:"empty",attrs:{scope:"col"}}),e._l(e.tableData.books.headers,function(t,a){return r("th",{key:a},[e._v("\n          "+e._s(t)+"\n        ")])})],2)]),r("template",{slot:"tbody"},e._l(e.tableData.books.records,function(t,a){return r("tr",{key:"tr_"+a},[r("th",[e._v(e._s(t.rowheader))]),e._l(t,function(t,a,n){return"rowheader"!==a?r("td",{key:n},[e._v("\n          "+e._s(t)+"\n        ")]):e._e()})],2)}))],2),r("cdr-data-table",{attrs:{caption:"Scroll example","row-headers":!0,id:"manual-scroll"}},[r("template",{slot:"tbody"},e._l(e.tableData.scroll.records,function(t,a,n){return r("tr",{key:n+"_"+a},[r("th",[e._v(e._s(t.rowheader))]),e._l(t,function(t,a,n){return"rowheader"!==a?r("td",{key:a+"_"+n},[e._v("\n          "+e._s(t)+"\n        ")]):e._e()})],2)}))],2),r("cdr-data-table",{attrs:{modifier:"compact borderless",caption:"Full Manual - Compact & Borderless with a cell with large data",summary:"Summary",id:"full-manual"}},[r("template",{slot:"tbody"},[r("tr",[r("th",[e._v("Best Use")]),r("td",[e._v("Casual")])]),r("tr",[r("th",[e._v("Fabric")]),r("td",[e._v("Cotton canvas")])]),r("tr",[r("th",[e._v("Lining Fabric")]),r("td",[e._v("Polyester microfleece/nylon")])]),r("tr",[r("th",[e._v("“We are three wise men.” ")]),r("td",[e._v("No")])]),r("tr",[r("th",[e._v("Black Length")]),r("td",[e._v("“Well, what are you doing creeping around a cow shed at two o’clock in the morning? That doesn’t sound very wise to me.”")])]),r("tr",[r("th",[e._v("Weight")]),r("td",[e._v("Unavailable")])]),r("tr",[r("th",[e._v("Gender")]),r("td",[e._v("Men's")])]),r("tr",[r("th",[e._v("Number")]),r("td",{staticClass:"content-align-right"},[e._v("25")])])])],2)],1)},staticRenderFns:[]};t.a=a},"4pC+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("g0ZV"),n=function(e){return e&&e.__esModule?e:{default:e}}(r("fyqT"));t.default={name:"Auto",components:{CdrDataTable:a.CdrDataTable},data:function(){return n.default}}},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"1.0.3","@rei/cdr-activity-card":"0.1.4-alpha.0","@rei/cdr-assets":"1.0.0-alpha.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"^2.0.0-alpha.1","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"1.0.2","@rei/cdr-cta":"1.0.4-alpha.1","@rei/cdr-data-table":"1.1.0-alpha.4","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"2.0.0-alpha.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"1.0.0-alpha.5","@rei/cdr-link":"1.1.0-alpha.2","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"0.1.4-alpha.0","@rei/cdr-pagination":"0.1.2-alpha.6","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"^1.0.0","@rei/cdr-search":"0.1.3-alpha.0","@rei/cdr-select":"^0.1.3-alpha.0","@rei/cdr-tabs":"1.0.0-alpha.64","@rei/cdr-text":"1.0.2-alpha.0",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"^0.1.7","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},"8mhB":function(e,t,r){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("DataTables version "+this._s(this.version))]),t("nuxt-link",{attrs:{to:"/testcomponents/data-table/starwars"}},[this._v("Star Wars Dataset")]),t("div",{staticClass:"table-container"},[t("auto-table"),t("manual-table"),t("table-with-components")],1)],1)},staticRenderFns:[]};t.a=a},"8nhN":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".table-examples-wrapper{padding:10px}.table-examples-wrapper>div{margin-bottom:40px}",""])},"Av+r":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("qIjY"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);var s=r("8mhB"),i=r("VU/8")(n.a,s.a,!1,null,null,null);t.default=i.exports},BN3x:function(e,t,r){!function(t,r){e.exports=r()}(0,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){e.exports={"cdr-checkbox":"cdr-checkbox_1.0.2","cdr-checkbox__wrap":"cdr-checkbox__wrap_1.0.2","cdr-checkbox__input":"cdr-checkbox__input_1.0.2","cdr-checkbox__figure":"cdr-checkbox__figure_1.0.2","cdr-checkbox__content":"cdr-checkbox__content_1.0.2","cdr-checkbox--compact":"cdr-checkbox--compact_1.0.2","cdr-checkbox--hide-figure":"cdr-checkbox--hide-figure_1.0.2"}},function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.default=n.a},function(e,t,r){"use strict";r.r(t);var a={name:"CdrCheckbox",mixins:[{mixins:[{methods:{buildClass(e){let t="cdr";this.baseClass&&(t=this.baseClass);const r=t,a=this[e]?this[e].split(" "):[];let n=[];return this.$style?(n.push(this.moduleClass(r)),n=n.concat(a.map(e=>this.modifyClassName(r,e)))):(n.push(`${r}`),n=n.concat(a.map(e=>this.modifyClassName(r,e)))),n.join(" ")},moduleClass(e){return this.$style[`${e}`]},modifyClassName(e,t){return this.$style?this.moduleClass(`${e}--${t}`):`${e}--${t}`}}}],props:{modifier:String},computed:{modifierClass(){return this.buildClass("modifier")}}}],inheritAttrs:!1,props:{labelClass:String,inputClass:String,contentClass:String,indeterminate:{type:Boolean,default:!1},trueValue:{type:[String,Number,Boolean,Object,Array,Symbol,Function],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array,Symbol,Function],default:!1},customValue:[String,Number,Boolean,Object,Array,Symbol,Function],value:{type:[String,Number,Boolean,Object,Array,Symbol,Function]}},data(){return{newValue:this.value}},computed:{baseClass:()=>"cdr-checkbox"},watch:{value(e){this.newValue=e},newValue(e){this.$emit("input",e)}},methods:{updateValue(e,t){this.newValue=e,this.$emit("change",e,t)}}},n=r(1);var o=function(e,t,r,a,n,o,s,i){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style["cdr-checkbox__wrap"]},[r("label",{ref:"label",class:[e.modifierClass,e.labelClass]},[r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:"checkbox",class:[e.$style["cdr-checkbox__input"],e.inputClass],attrs:{type:"checkbox","true-value":e.customValue?null:e.trueValue,"false-value":e.customValue?null:e.falseValue,indeterminate:e.indeterminate},domProps:{value:e.customValue,checked:Array.isArray(e.newValue)?e._i(e.newValue,e.customValue)>-1:e._q(e.newValue,e.customValue?null:e.trueValue)},on:{change:[function(t){var r=e.newValue,a=t.target,n=a.checked?e.customValue?null:e.trueValue:e.customValue?null:e.falseValue;if(Array.isArray(r)){var o=e.customValue,s=e._i(r,o);a.checked?s<0&&(e.newValue=r.concat([o])):s>-1&&(e.newValue=r.slice(0,s).concat(r.slice(s+1)))}else e.newValue=n},function(t){e.updateValue(e.newValue,t)}]}},"input",e.$attrs,!1)),e._v(" "),r("span",{class:e.$style["cdr-checkbox__figure"]}),e._v(" "),r("div",{class:[e.$style["cdr-checkbox__content"],e.contentClass]},[e._t("default")],2)])])},[],!1,function(e){this.$style=n.default.locals||n.default},null,null).exports;r.d(t,"CdrCheckbox",function(){return o})}])})},FTU8:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".table-examples-wrapper{padding:10px}.table-examples-wrapper>div{margin-bottom:40px}",""])},KSRB:function(e,t,r){var a=r("8nhN");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("0ee1028f",a,!0,{sourceMap:!1})},MxGU:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".table-examples-wrapperxxx{padding:10px}.table-examples-wrapperxxx>div{margin-bottom:40px}",""])},THLf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("g0ZV"),n=r("BN3x"),o=function(e){return e&&e.__esModule?e:{default:e}}(r("fyqT"));t.default={name:"TableWithComponents",components:{CdrDataTable:a.CdrDataTable,CdrCheckbox:n.CdrCheckbox},data:function(){return o.default}}},URks:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("u47f"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);var s=r("40sz");var i=function(e){r("KSRB")},l=r("VU/8")(n.a,s.a,!1,i,null,null);t.default=l.exports},"Wf/u":function(e,t,r){var a=r("MxGU");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("5c1b0eea",a,!0,{sourceMap:!1})},fyqT:function(e,t,r){"use strict";for(var a=["a","b","c","d","e","f","g","h"],n=[],o=function(e){var t={};a.forEach(function(e){t[e]=e}),t.rowheader="Row header",n.push(t)},s=0;s<2;s+=1)o();var i={dataCaption:"caption from a data table",colHeaders:["XS","S","M","L","XL","XXL","XXXL"],rowHeaders:["Chest","Sleeve Length","Waist","Hip","Inseam"],rowData:[{xs:"31.5 - 33",s:"35 - 38",m:"38 - 41",l:"42 - 45",xl:"46 - 49",xxl:"50 - 53",xxxl:"54-57"},{s:"33",m:"34",l:"35",xl:"35.5",xxl:"36",xxxl:"36.6",xs:"N/A"},{xs:"26.5 - 27.5",s:"28 - 30",m:"32 - 34",l:"36 - 38",xl:"40 - 42",xxl:"44 - 46",xxxl:"48 - 50"},{xs:"N/A",s:"35 - 37",m:"38 - 40",l:"41 - 43",xl:"44 - 46",xxl:"47 - 49",xxxl:"51 - 54"},{xs:"31",s:"32",m:"32",l:"32",xl:"32",xxl:"32",xxxl:"32"}],books:{headers:["Title","You must cut down the mightiest tree in the forest... WITH... A HERRING!","Year","Author"],records:[{title:"Book A","You must cut down the mightiest tree in the forest... WITH... A HERRING!":"fake data",year:1823,author:"Mikey",rowheader:"It is I, Arthur, son of Uther Pendragon, from the castle of Camelot. King of the Britons, defeater of the Saxons, Sovereign of all England!"},{title:"Mountaineers Books Dirty Gourmet: Food For Your Outdoor Adventures","You must cut down the mightiest tree in the forest... WITH... A HERRING!":"fake data",year:1532,author:"Joey",rowheader:"row 2"},{title:"Book E","You must cut down the mightiest tree in the forest... WITH... A HERRING!":"fake data",year:1253,author:"Scotty Fleschenberger",rowheader:"row 3"}]},scroll:{headers:a,records:n}};e.exports.tableData=i},g0ZV:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=6)}([function(e,t,r){"use strict";var a=r(1);t.a=a.a},function(e,t,r){"use strict";var a=r(10),n=r(12),o=r.n(n);t.a={name:"CdrDataTable",mixins:[a.a],props:{id:{type:String,required:!1},colHeaders:{type:[Array,Boolean],default:!1},rowHeaders:{type:[Array,Boolean],default:!1},rowData:{type:Array,default:function(){return[]}},keyOrder:{type:Array,default:function(){return[]}},caption:{type:String,required:!1},constrainWidth:{type:Boolean,default:!0}},data:function(){return{cols:0,clientWidth:0,scrollWidth:0,hasColHeaders:!1,hasRowHeaders:!1,headerRowHeight:0,rowHeights:null}},computed:{baseClass:function(){return"cdr-data-table"},lockedCol:function(){return this.rowData.length>0&&this.cols>2&&this.hasRowHeaders},isScrolling:function(){return this.scrollWidth>this.clientWidth&&this.lockedCol},headerRowAlignHeight:function(){return this.headerRowHeight?this.headerRowHeight+1+"px":this.headerRowHeight}},mounted:function(){var e=this;this.hasColHeaders="boolean"==typeof this.colHeaders?this.colHeaders:this.colHeaders.length>0,this.hasRowHeaders="boolean"==typeof this.rowHeaders?this.rowHeaders:this.rowHeaders.length>0,this.rowData.length>0&&(this.cols=this.$refs["row-0"][0].children.length),this.lockedCol&&(window.addEventListener("resize",o()(function(){e.rowHeights=null,e.$nextTick(function(){e.checkScroll(),e.setRowsContentHeight()})},250)),this.$nextTick(function(){e.checkScroll(),e.setRowsContentHeight()}))},methods:{checkScroll:function(){var e=this.$refs["scroll-container"];void 0!==e&&(this.clientWidth=e.clientWidth,this.scrollWidth=e.scrollWidth)},getCellContent:function(e,t){return e[t]||""},setRowsContentHeight:function(){for(var e=[],t=0;t<this.rowData.length;t+=1){var r={th:this.$refs["row-"+t][0].children[0].offsetHeight||1,td:this.$refs["row-"+t][0].children[1].offsetHeight||0};e.push(r)}this.hasColHeaders&&(this.headerRowHeight=this.$refs["row-col-headers"].children[1].offsetHeight),this.rowHeights=e},getRowAlignHeight:function(e,t){if(null===this.rowHeights)return null;var r=this.rowHeights[t];if(!r||r.th-r.td==1)return null;var a=r.th>r.td?"td":"th";return e!==a?null:"td"===a?r.th-1+"px":r.td+1+"px"}}}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var a=r(14),n="object"==typeof self&&self&&self.Object===Object&&self,o=a||n||Function("return this")();e.exports=o},function(e,t,r){var a=r(3).Symbol;e.exports=a},function(e,t){e.exports={"cdr-data-table":"cdr-data-table_1.1.0-alpha.4","cdr-data-table__caption":"cdr-data-table__caption_1.1.0-alpha.4","cdr-data-table__scroll-container":"cdr-data-table__scroll-container_1.1.0-alpha.4","cdr-data-table__content":"cdr-data-table__content_1.1.0-alpha.4","align-row-header-content":"align-row-header-content_1.1.0-alpha.4","cdr-data-table--borderless":"cdr-data-table--borderless_1.1.0-alpha.4","cdr-data-table--compact":"cdr-data-table--compact_1.1.0-alpha.4"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(7);r.d(t,"CdrDataTable",function(){return a.a})},function(e,t,r){"use strict";var a=r(8),n=r(0),o=r(22),s=r(23),i=Object(s.a)(n.a,a.a,a.b,!1,function(e){this.$style=o.default.locals||o.default},null,null);t.a=i.exports},function(e,t,r){"use strict";var a=r(9);r.d(t,"a",function(){return a.a}),r.d(t,"b",function(){return a.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.modifierClass]},[e.caption?r("span",{class:e.$style["cdr-data-table__caption"],attrs:{"aria-hidden":"true"}},[e._v("\n    "+e._s(e.caption)+"\n  ")]):e._e(),e._v(" "),r("div",{ref:"scroll-container",class:[e.$style["cdr-data-table__scroll-container"],{"locked-col":e.lockedCol},{"is-scrolling":e.isScrolling}]},[r("table",{class:[e.$style["cdr-data-table__content"],{"constrain-width":e.constrainWidth}],attrs:{id:e.id?e.id:null}},[e.caption?r("caption",{staticClass:"cdr-sr-only"},[e._v("\n        "+e._s(e.caption)+"\n      ")]):e._e(),e._v(" "),e.hasColHeaders?r("thead",[e._t("thead",[r("tr",{ref:"row-col-headers"},[r("th",{directives:[{name:"show",rawName:"v-show",value:e.hasRowHeaders,expression:"hasRowHeaders"}],staticClass:"empty",style:{height:e.headerRowAlignHeight},attrs:{scope:"col"}}),e._v(" "),e._l(e.colHeaders,function(t,a){return r("th",{key:"header-row-col-"+a,attrs:{scope:"col"}},[e._v("\n              "+e._s(t)+"\n            ")])})],2)])],2):e._e(),e._v(" "),r("tbody",{ref:"table-body"},[e._t("tbody",e._l(e.rowData,function(t,a){return r("tr",{key:"row-"+a,ref:"row-"+a,refInFor:!0},[e.hasRowHeaders?r("th",{ref:"row-"+a+"-th",refInFor:!0,class:e.$style["align-row-header-content"],style:{height:e.getRowAlignHeight("th",a)},attrs:{scope:"row"}},[e._v("\n              "+e._s(e.rowHeaders[a])+"\n            ")]):e._e(),e._v(" "),e._l(e.keyOrder,function(n,o){return r("td",{key:"td-"+o+"-"+n,style:{height:e.getRowAlignHeight("td",a)}},[e._v("\n              "+e._s(e.getCellContent(t,n))+"\n            ")])})],2)}))],2)])])])},n=[]},function(e,t,r){"use strict";var a=r(11);t.a={mixins:[a.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(e,t,r){"use strict";t.a={methods:{buildClass:function(e){var t=this,r="cdr";this.baseClass&&(r=this.baseClass);var a=r,n=this[e]?this[e].split(" "):[],o=[];return this.$style?(o.push(this.moduleClass(a)),o=o.concat(n.map(function(e){return t.modifyClassName(a,e)}))):(o.push(""+a),o=o.concat(n.map(function(e){return t.modifyClassName(a,e)}))),o.join(" ")},moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,r){var a=r(2),n=r(13),o=r(16),s=Math.max,i=Math.min;e.exports=function(e,t,r){var l,c,u,d,f,h,p=0,b=!1,v=!1,_=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var r=l,a=c;return l=c=void 0,p=t,d=e.apply(a,r)}function m(e){var r=e-h;return void 0===h||r>=t||r<0||v&&e-p>=u}function y(){var e=n();if(m(e))return w(e);f=setTimeout(y,function(e){var r=t-(e-h);return v?i(r,u-(e-p)):r}(e))}function w(e){return f=void 0,_&&l?x(e):(l=c=void 0,d)}function g(){var e=n(),r=m(e);if(l=arguments,c=this,h=e,r){if(void 0===f)return function(e){return p=e,f=setTimeout(y,t),b?x(e):d}(h);if(v)return f=setTimeout(y,t),x(h)}return void 0===f&&(f=setTimeout(y,t)),d}return t=o(t)||0,a(r)&&(b=!!r.leading,u=(v="maxWait"in r)?s(o(r.maxWait)||0,t):u,_="trailing"in r?!!r.trailing:_),g.cancel=function(){void 0!==f&&clearTimeout(f),p=0,l=h=c=f=void 0},g.flush=function(){return void 0===f?d:w(n())},g}},function(e,t,r){var a=r(3);e.exports=function(){return a.Date.now()}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(15))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var a=r(2),n=r(17),o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=i.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):s.test(e)?NaN:+e}},function(e,t,r){var a=r(18),n=r(21);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==a(e)}},function(e,t,r){var a=r(4),n=r(19),o=r(20),s=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?n(e):o(e)}},function(e,t,r){var a=r(4),n=Object.prototype,o=n.hasOwnProperty,s=n.toString,i=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),r=e[i];try{e[i]=void 0;var a=!0}catch(e){}var n=s.call(e);return a&&(t?e[i]=r:delete e[i]),n}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){"use strict";var a=r(5),n=r.n(a);t.default=n.a},function(e,t,r){"use strict";t.a=function(e,t,r,a,n,o,s,i){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}}])})},jsKN:function(e,t,r){"use strict";var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-examples-wrapperxxx"},[r("cdr-data-table",{attrs:{"col-headers":e.tableData.colHeaders,"row-headers":e.tableData.rowHeaders,"row-data":e.tableData.rowData,caption:e.tableData.dataCaption,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-col-lock-scroll"}}),r("cdr-data-table",{attrs:{"col-headers":!1,"row-headers":e.tableData.rowHeaders,"row-data":e.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-headers"}}),r("cdr-data-table",{attrs:{"col-headers":!1,"row-headers":!1,"row-data":e.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headers"}}),r("cdr-data-table",{attrs:{caption:"“Is it a boy or a girl?” \\n\n    “I think it’s a bit early to start imposing roles on it, don’t you?”","col-headers":!1,"row-headers":!1,"row-data":e.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headersx"}}),r("div",{staticStyle:{"max-width":"500px"},attrs:{id:"scrollable-table"}},[r("cdr-data-table",{attrs:{caption:"Data Table that should be scrollable","col-headers":!1,"row-headers":!1,"row-data":e.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headersy"}})],1)],1)},staticRenderFns:[]};t.a=a},pwuW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("THLf"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);var s=r("1/TC");var i=function(e){r("+ad6")},l=r("VU/8")(n.a,s.a,!1,i,null,null);t.default=l.exports},qIjY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r("0E73")),n=s(r("URks")),o=s(r("pwuW"));function s(e){return e&&e.__esModule?e:{default:e}}var i=r("7YgM").dependencies;t.default={name:"Tables",components:{AutoTable:a.default,ManualTable:n.default,TableWithComponents:o.default},data:function(){return{version:i["@rei/cdr-data-table"]}}}},u47f:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("g0ZV"),n=function(e){return e&&e.__esModule?e:{default:e}}(r("fyqT"));t.default={name:"ManualTable",components:{CdrDataTable:a.CdrDataTable},data:function(){return n.default}}}});