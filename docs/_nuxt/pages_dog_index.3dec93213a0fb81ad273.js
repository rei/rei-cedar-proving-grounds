webpackJsonp([22],{Ydc6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("dPzy"),a=n("xa+q"),s=n("VU/8")(r.a,a.a,!1,null,null,null);e.default=s.exports},dPzy:function(t,e,n){"use strict";var r=n("Xxa5"),a=n.n(r),s=n("exGp"),u=n.n(s);e.a={asyncData:function(){var t=u()(a.a.mark(function t(e){var n,r,s=e.app;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$axios.get("/dog");case 2:return n=t.sent,r=n.data.message,t.abrupt("return",{dog:r});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"xa+q":function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Dog")]),e("img",{attrs:{src:this.dog}})])},staticRenderFns:[]};e.a=r}});