(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userinfo"],{2157:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",style:{"min-height":t.$root.$data.withFootHeight+"px"},attrs:{id:"content"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1 col-md-6 offset-md-3"},[s("div",{staticClass:"row"},[t._v("\n        帳號"),s("br"),s("div",{staticClass:"col-12 right"},[t._v(" "+t._s(t.account))])]),s("div",{staticClass:"row"},[t._v("\n        註冊時間"),s("br"),s("div",{staticClass:"col-12 right"},[t._v(" "+t._s(t.$root.formatDate(t.registerDatetime)))])]),s("div",{staticClass:"row"},[t._v("\n        上次登入時間"),s("br"),s("div",{staticClass:"col-12 right"},[t._v("\n         "+t._s(t.$root.formatDate(t.lastLoginDatetime))+"\n        ")])]),s("div",{staticClass:"row"},[s("label",[t._v("書籤")]),t._v(" \n        "),s("div",{staticClass:"col-12 booksList"},[t._m(0),t._l(t.bookmark.novel,(function(e){return s("div",{key:e.id,staticClass:"row bookRow"},[s("div",{staticClass:"col left"},[s("div",{staticClass:"d-none d-md-block"},[s("span",{attrs:{title:"上次閱讀: "+e.lastReadDatetime}},[t._v(t._s(e.info.title))]),t._v("\n                 / "+t._s(e.info.author)+"\n              ")]),s("div",{staticClass:"d-md-none"},[s("small",[s("span",{attrs:{title:"上次閱讀: "+e.lastReadDatetime}},[t._v(t._s(e.info.title))]),s("br"),s("div",{staticClass:"right"},[t._v(t._s(e.info.author)+" / 著")])])])]),s("div",{staticClass:"col-4 col-md-3 right center"},[s("small",[t._v("\n                "+t._s(e.lastReadIndex)+" \n                "),s("router-link",{attrs:{to:{path:"/novel/"+e.info.novelID}}},[s("font-awesome-icon",{attrs:{icon:"book-open"}})],1)],1)])])}))],2),s("div",{staticClass:"col-12 booksList"},[t._m(1),t._l(t.bookmark.comic,(function(e){return s("div",{key:e.id,staticClass:"row bookRow"},[s("div",{staticClass:"col left"},[s("div",{staticClass:"d-none d-md-block"},[s("span",{attrs:{title:"上次閱讀: "+e.lastReadDatetime}},[t._v(t._s(e.info.title))]),t._v("\n                 / "+t._s(e.info.author)+"\n              ")]),s("div",{staticClass:"d-md-none"},[s("small",[s("span",{attrs:{title:"上次閱讀: "+e.lastReadDatetime}},[t._v(t._s(e.info.title))]),s("br"),s("div",{staticClass:"right"},[t._v(t._s(e.info.author)+" / 著")])])])]),s("div",{staticClass:"col-4 col-md-3 right center"},[s("small",[t._v("\n                "+t._s(e.lastReadIndex)+" \n                "),s("router-link",{attrs:{to:{path:"/comic/"+e.info.comicID}}},[s("font-awesome-icon",{attrs:{icon:"book-open"}})],1)],1)])])}))],2)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col left"},[t._v("小說書名 / 作者")]),s("div",{staticClass:"col-5 right"},[t._v("上次章節")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col left"},[t._v("漫畫書名 / 作者")]),s("div",{staticClass:"col-5 right"},[t._v("上次章節")])])}],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=(s("96cf"),s("3b8d"));function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={name:"userinfo",data:function(){return{account:"guest",registerDatetime:"",lastLoginDatetime:"",bookmark:{novel:[],comic:[]}}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,o,i,a,r,n,l,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$root.fetchBookmark(!0);case 2:for(s in e=this.$vuex.getters.getAuth(),this.account=e.account,this.registerDatetime=e.registerDatetime,this.lastLoginDatetime=e.lastLoginDatetime,e.bookmark.novel)o=e.bookmark.novel[s],i=this.$vuex.getters.getNovelByID(s),void 0!==i&&(a=c(c({},o),{},{info:i}),this.bookmark.novel.length>0&&this.bookmark.novel[0].lastReadDatetime<o.lastReadDatetime?this.bookmark.novel.unshift(a):this.bookmark.novel.push(a));for(r in e.bookmark.comic)n=e.bookmark.comic[r],l=this.$vuex.getters.getComicByID(r),void 0!==l&&(v=c(c({},n),{},{info:l}),this.bookmark.comic.length>0&&this.bookmark.comic[0].lastReadDatetime<n.lastReadDatetime?this.bookmark.comic.unshift(v):this.bookmark.comic.push(v));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},v=l,d=(s("a204"),s("2877")),m=Object(d["a"])(v,o,i,!1,null,"64bd404a",null);e["default"]=m.exports},"9c5b":function(t,e,s){},a204:function(t,e,s){"use strict";s("9c5b")}}]);
//# sourceMappingURL=userinfo.fe3aa950.js.map