(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["info"],{8525:function(t,e,n){"use strict";n("c657")},"9d8c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{"min-height":t.$root.$data.withFootHeight+"px"},attrs:{id:"content"}},[1==t.load?n("div",[n("br"),n("center",[n("loading",{attrs:{size:160}})],1)],1):n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-2 offset-md-2"},[n("img",{attrs:{src:t.entry.cover_url,alt:t.entry.title}})]),n("div",{staticClass:"col-10 offset-1 col-md-5 offset-md-0"},[n("div",{staticStyle:{"padding-top":"10px"}},[n("div",[n("div",{staticStyle:{"text-align":"left"}},[n("big",{staticClass:"btn-xs intro"},[t._v(t._s("novel"===t.type?"小說":"漫畫"))]),n("h4",[n("strong",[t._v(t._s(t.entry.title))])])],1),n("div",{staticClass:"d-none d-lg-block",staticStyle:{"text-align":"right"}},[n("a",{attrs:{href:t.entry.url}},[n("small",{staticClass:"btn-xs btn-color-2 intro"},[t._v(t._s(t.entry.dns))])]),t._v("\n             \n            "),n("small",{staticClass:"btn-xs btn-color-1 intro"},[t._v(t._s(t.$root.formatDate(t.entry.lastCrawlTime)))]),n("br")]),n("div",{staticClass:"d-md-none",staticStyle:{"text-align":"right"}},[n("a",{attrs:{href:t.entry.url}},[n("small",{staticClass:"btn-xs btn-color-2 intro"},[n("font-awesome-icon",{attrs:{icon:"link"}}),t._v(" Source\n              ")],1)]),t._v("\n             \n            "),n("small",{staticClass:"btn-xs btn-color-1 intro"},[t._v(t._s(t.$root.simpleFormatDate(t.entry.lastCrawlTime)))]),n("br")])]),n("hr"),n("h6",{staticStyle:{"text-align":"right"}},[n("strong",[t._v(t._s(t.entry.author)+" / 著")])])]),n("div",{staticStyle:{"padding-top":"10px","text-align":"left"}},[n("p",[t._v(t._s(t.entry.description))]),n("br")])]),n("div",{staticClass:"col-10 offset-1"},[n("div",{staticClass:"row"},t._l(t.entry.chapters,(function(e){return n("div",{key:e.title,staticClass:"col-md-3 offset-md-0 col-11 offset-1 left middle",staticStyle:{padding:"3px 0"}},[t._v("\n          "+t._s(e.title)+"\n        ")])})),0)])])])},i=[],s=(n("96cf"),n("3b8d")),o={name:"info",metaInfo:function(){return{title:this.entry.title,meta:[{vmid:"description",name:"description",content:this.entry.description},{vmid:"og:title",property:"og:title",content:this.entry.title},{vmid:"og:url",property:"og:url",content:"info/".concat(this.type,"/").concat(this.entry.novelID)},{vmid:"og:description",property:"og:description",content:this.entry.description},{vmid:"og:image",property:"og:image",content:this.entry.coverURL},{vmid:"og:type",property:"og:type",content:this.type}],script:[{vmid:"ldjson-schema",innerHTML:'{\n            "@context": "http://schema.org",\n            "@type": "Article",\n            "name": "'.concat(this.entry.title,'",\n            "author": {\n              "@type": "Person",\n              "name": "').concat(this.entry.author,'"\n            },\n            "image": "').concat(this.entry.cover_url,'"\n          }'),type:"application/ld+json"}]}},beforeRouteEnter:function(t,e,n){n(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$vuex.getters.getSession(),e.type=e.$route.params.type,e.id=e.$route.params.id,"novel"!=e.type){t.next=9;break}return t.next=6,e.$api.fetchNovelByID(n,e.id);case 6:e.entry=t.sent,t.next=16;break;case 9:if("comic"!=e.type){t.next=15;break}return t.next=12,e.$api.fetchComicByID(n,e.id);case 12:e.entry=t.sent,t.next=16;break;case 15:return t.abrupt("return",!1);case 16:return e.load=!1,t.abrupt("return",!0);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},data:function(){return{load:!0,type:"",id:"",entry:{}}}},a=o,c=(n("8525"),n("2877")),l=Object(c["a"])(a,r,i,!1,null,"ed86ce22",null);e["default"]=l.exports},c657:function(t,e,n){}}]);
//# sourceMappingURL=info.b7febad2.js.map