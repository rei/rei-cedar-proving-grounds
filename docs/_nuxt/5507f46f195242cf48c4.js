(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("53c4588c",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";var n=r(207);r.n(n).a},258:function(t,e,r){(t.exports=r(28)(!1)).push([t.i,".table-examples-wrapper{padding:10px}.table-examples-wrapper>div{margin-bottom:40px}",""])},273:function(t,e,r){"use strict";r.r(e);r(38);var n=r(36),o=r(80),c=r(256),l=r(113).dependencies,d={name:"swapi",components:{CdrDataTable:n.CdrDataTable},data:function(){return{version:l["@rei/cdr-data-table"],characters:[{}],hasData:!1}},computed:{getColHeaders:function(){return this.hasData?c.allKeys(this.characters[0]):[]},getRowHeaders:function(){return this.hasData?this.characters.map(function(t){return t.name}):[]}},mounted:function(){var t=this;o.get("https://swapi.co/api/people").then(function(e){return t.characters=e.data.results}).then(this.hasData=!0)}},h=(r(257),r(13)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Star Wars API using DataTables version: "+t._s(t.version))]),t._v(" "),r("cdr-data-table",{attrs:{"col-headers":!0,"row-headers":!0,caption:"Table with data fed from REST API using slots",id:"slots-example"}},[r("template",{slot:"thead"},[r("tr",[r("th",{staticClass:"empty",attrs:{scope:"col"}}),t._v(" "),t._l(t.getColHeaders,function(e){return r("th",[t._v("\n            "+t._s(e)+"\n        ")])})],2)]),t._v(" "),r("template",{slot:"tbody"},t._l(t.characters,function(e,n){return r("tr",{key:"tr_"+n},[r("th",[t._v(t._s(e.name))]),t._v(" "),t._l(e,function(e,n,o){return r("td",{key:o},[t._v("\n          "+t._s(e)+"\n        ")])})],2)}),0)],2),t._v(" "),r("cdr-data-table",{attrs:{"col-headers":t.getColHeaders,"row-headers":t.getRowHeaders,"row-data":t.characters,"key-order":t.getColHeaders,caption:"REST data fed using cdr api only",id:"cdr-data-table-api"}})],1)},[],!1,null,null,null);e.default=component.exports}}]);