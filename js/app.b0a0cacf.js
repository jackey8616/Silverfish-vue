(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({admin:"admin",comic:"comic",index:"index",info:"info",list:"list",login:"login",not_found:"not_found",novel:"novel",register:"register",userinfo:"userinfo"}[e]||e)+"."+{admin:"53ce6e75",comic:"154d6b60",index:"feff4ce6",info:"691727c2",list:"10ec697d",login:"269cbe2a",not_found:"17cc20d4",novel:"b47421b2",register:"e1ad478e",userinfo:"4d907fae"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={comic:1,index:1,info:1,list:1,login:1,novel:1,register:1,userinfo:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({admin:"admin",comic:"comic",index:"index",info:"info",list:"list",login:"login",not_found:"not_found",novel:"novel",register:"register",userinfo:"userinfo"}[e]||e)+"."+{admin:"31d6cfe0",comic:"3eeafaa0",index:"3e366bde",info:"7eb88899",list:"573dac1a",login:"5681edfb",not_found:"31d6cfe0",novel:"7950de67",register:"e87ddd98",userinfo:"dcc14cab"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"201f":function(e,t,n){},"30bb":function(e,t,n){},"3a0b":function(e,t,n){"use strict";var r=n("cbeb"),a=n.n(r);a.a},"3ccc":function(e,t,n){"use strict";var r=n("30bb"),a=n.n(r);a.a},"4c60":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark",attrs:{id:"navigator"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("書蠹付梓 | 無縫閱讀")]),e._m(0),n("div",{staticClass:"navbar-collapse collapse row",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav col-8",attrs:{id:"left-nav"}},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[n("font-awesome-icon",{attrs:{icon:"home"}}),e._v("  首頁\n        ")],1)],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"list"}}},[n("font-awesome-icon",{attrs:{icon:"book-open"}}),e._v(" 列表\n        ")],1)],1)]),n("ul",{staticClass:"navbar-nav col-4",attrs:{id:"right-nav"}},[e._m(1),e._v(" \n      "),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("font-awesome-icon",{attrs:{icon:"user"}})],1),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdown"}},[!0===e.$vuex.getters.isLogging()?n("div",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v(e._s(e.$vuex.getters.getAuth().account))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"userinfo"}}},[e._v("資訊")]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return e.logout()}}},[e._v("登出")])],1):n("div",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v(e._s(e.$vuex.getters.getAuth().account))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"register"}}},[e._v("註冊")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"login"}}},[e._v("登入")])],1)])])])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"nav-item"},[n("div",{staticClass:"fb-like",attrs:{"data-href":"https://www.facebook.com/silverfish.compose/","data-width":"","data-layout":"button_count","data-action":"recommend","data-size":"small","data-show-faces":"false","data-share":"true"}})])}],o=(n("96cf"),n("3b8d")),i={name:"navigator",watch:{$route:function(e,t){this.status(this.$vuex.getters.getSession())}},methods:{status:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.$api.authStatus(t);case 4:n=e.sent,0==n&&(this.$vuex.commit("logout"),this.$toasted.show("Session過期，請重新登入"));case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.authLogout(this.$vuex.getters.getSession());case 2:this.$vuex.commit("logout"),this.$toasted.success("登出成功"),this.$router.push({path:"/"});case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},u=i,s=(n("3ccc"),n("2877")),c=Object(s["a"])(u,r,a,!1,null,"1e4814ce",null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("6b54"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"nav"}}),n("router-view"),n("foot")],1)},o=[],i=(n("034f"),n("2877")),u={},s=Object(i["a"])(u,a,o,!1,null,null,null),c=s.exports,l=(n("7f7f"),n("96cf"),n("3b8d")),d=n("8c4f"),f=n("0a89"),p=n.n(f);r["a"].use(d["a"]),r["a"].use(p.a,{refreshOnceOnNavigation:!0});var m=new d["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("index").then(n.bind(null,"d504"))}},{path:"/list",name:"list",components:{default:function(){return n.e("list").then(n.bind(null,"1a33"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}}},{path:"/login",name:"login",components:{default:function(){return n.e("login").then(n.bind(null,"5326"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}}},{path:"/register",name:"register",components:{default:function(){return n.e("register").then(n.bind(null,"935e"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}}},{path:"/userinfo",name:"userinfo",components:{default:function(){return n.e("userinfo").then(n.bind(null,"2157"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}},meta:{requiresAuth:!0}},{path:"/admin",name:"admin",components:{default:function(){return n.e("admin").then(n.bind(null,"da17"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}},meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/info/:type/:id",name:"info",components:{default:function(){return n.e("info").then(n.bind(null,"9d8c"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}},props:!0},{path:"/novel/:novelID",name:"novel",components:{default:function(){return n.e("novel").then(n.bind(null,"8dae"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}},props:!0},{path:"/comic/:comicID",name:"comic",components:{default:function(){return n.e("comic").then(n.bind(null,"d73b"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}},props:!0},{path:"*",name:"not_found",components:{default:function(){return n.e("not_found").then(n.bind(null,"9703"))},nav:function(){return Promise.resolve().then(n.bind(null,"4c60"))}}}]});m.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,n,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=9;break}if(!1!==r["a"].prototype.$vuex.getters.isLogging()){e.next=5;break}return e.abrupt("return",a({path:"/login",query:{redirect:t.fullPath}}));case 5:if(!t.matched.some(function(e){return e.meta.requiresAdmin})){e.next=9;break}return e.next=8,r["a"].prototype.$api.authIsAdmin(r["a"].prototype.$vuex.getters.getSession()).then(function(e){return 1==e.isAdmin?a():(r["a"].prototype.$toasted.error("安安你不是管理員ㄛ~"),a({path:t.name!=n.name?n.path:"/"}))}).catch(function(){return a({path:t.name!=n.name?n.path:"/"})});case 8:return e.abrupt("return",e.sent);case 9:return console.log(t),e.abrupt("return",a());case 11:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}());var h=m,v=n("db0c"),g=n.n(v),b=n("2f62"),w=n("0e44");r["a"].use(b["a"]);var k=new b["a"].Store({plugins:[Object(w["a"])({key:"SILVERFISH",storage:window.localStorage})],state:{session:"",auth:{account:"guest",registerDatetime:"",lastLoginDatetime:"",bookmark:{novel:{},comic:{}}},Novels:{},Comics:{}},mutations:{login:function(e,t){e.session=t.session,e.auth.account=t.user.account,e.auth.registerDatetime=t.user.registerDatetime,e.auth.lastLoginDatetime=t.user.lastLoginDatetime,e.auth.bookmark={novel:null==t.user.bookmark.novel?{}:t.user.bookmark.novel,comic:null==t.user.bookmark.comic?{}:t.user.bookmark.comic}},logout:function(e){e.session="",e.auth={account:"guest",registerDatetime:"",lastLoginDatetime:"",bookmark:{novel:{},comic:{}}}},updateBookmark:function(e,t){e.auth.bookmark=t},insertNovel:function(e,t){r["a"].set(e.Novels,t.novelID,t.novel)},upsertNovel:function(e,t){if(t.novelID in e.Novels)for(var n in t)e.Novels[t.novelID][n]=t[n];else r["a"].set(e.Novels,t.novelID,t)},updateNovel:function(e,t){t.novelID in e.Novels&&(e.Novels[t.novelID]["chapters"]=t.novel.chapters,e.Novels[t.novelID]["lastCrawlTime"]=t.novel.lastCrawlTime)},insertNovelBookmark:function(e,t){r["a"].set(e.auth.bookmark.novel,t.novelID,t.bookmark)},insertComic:function(e,t){r["a"].set(e.Comics,t.comicID,t.comic)},upsertComic:function(e,t){if(t.comicID in e.Comics)for(var n in t)e.Comics[t.comicID][n]=t[n];else r["a"].set(e.Comics,t.comicID,t)},updateComic:function(e,t){t.comicID in e.Comics&&(e.Comics[t.comicID]["chapters"]=t.comic.chapters,e.Comics[t.comicID]["lastCrawlTime"]=t.comic.lastCrawlTime)},insertComicBookmark:function(e,t){r["a"].set(e.auth.bookmark.comic,t.comicID,t.bookmark)}},getters:{isLogging:function(e){return function(){return""!==e.auth.account&&"guest"!==e.auth.account}},getSession:function(e){return function(){return e.session}},getAuth:function(e){return function(){return e.auth}},isNovelIDExists:function(e){return function(t){return t in e.Novels}},isNovelNeedUpdate:function(e){return function(t){var n=(new Date-new Date(e.Novels[t].lastCrawlTime))/36e5;return n>=24}},getNovelByID:function(e){return function(t){return e.Novels[t]}},getNovelByURL:function(e){return function(t){for(var n in g()(e.Novels))if(n.url===t)return n;return null}},getNovelBookmarkByID:function(e){return function(t){return e.auth.bookmark.novel[t]}},isComicIDExists:function(e){return function(t){return t in e.Comics}},isComicNeedUpdate:function(e){return function(t){var n=(new Date-new Date(e.Comics[t].lastCrawlTime))/36e5;return n>=24}},getComicByID:function(e){return function(t){return e.Comics[t]}},getComicBookmarkByID:function(e){return function(t){return e.auth.bookmark.comic[t]}}}}),x=n("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=n("cebc"),_=n("795b"),C=n.n(_),D=n("d225"),R=n("b0b4"),j=n("bc3a"),T=n.n(j),O=n("4328"),N=n.n(O),I=function(){function e(t,n){Object(D["a"])(this,e),this.endpoint=t,this.version=n,T.a.defaults.withCredentials=!1}return Object(R["a"])(e,[{key:"endpointRoute",value:function(){return this.endpoint+this.version}},{key:"authStatus",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpoint+"/auth/status",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,1!=o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"authRegister",value:function(e,t){var n=this;return new C.a(function(){var r=Object(l["a"])(regeneratorRuntime.mark(function r(a,o){var i;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T()({url:n.endpoint+"/auth/register",method:"POST",data:N.a.stringify(Object(y["a"])({},{recaptchaToken:e},t))});case 2:if(i=r.sent,!0!==i.data.success){r.next=5;break}return r.abrupt("return",a(i.data.data));case 5:return r.abrupt("return",o(i.data.data));case 6:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}},{key:"authLogin",value:function(e,t,n){var r=this;return new C.a(function(){var a=Object(l["a"])(regeneratorRuntime.mark(function a(o,i){var u;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,T()({url:r.endpoint+"/auth/login",method:"POST",headers:{Authorization:e},data:N.a.stringify(Object(y["a"])({},{recaptchaToken:t},n))});case 2:if(u=a.sent,!0!==u.data.success){a.next=5;break}return a.abrupt("return",o(u.data.data));case 5:return a.abrupt("return",i(u.data.data));case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}())}},{key:"authLogout",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpoint+"/auth/logout",method:"GET",headers:{Authorization:e}});case 2:return n.abrupt("return",r(!0));case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}},{key:"authIsAdmin",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpoint+"/auth/isAdmin",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,!o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"adminFetcherList",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpoint+"/admin/fetchers",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,!o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"fetchLatestBookmark",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpoint+"/user/bookmark",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,!o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"fetchNovels",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpointRoute()+"/novels",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,!o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"fetchNovelByID",value:function(e,t){var n=this;return new C.a(function(){var r=Object(l["a"])(regeneratorRuntime.mark(function r(a,o){var i,u;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T()({url:n.endpointRoute()+"/novel",method:"GET",headers:{Authorization:e},params:{novel_id:t}});case 2:if(i=r.sent,!i.data.success){r.next=6;break}return u=i.data.data,r.abrupt("return",a({novelID:u.novelID,author:u.author,description:u.description,dns:u.dns,url:u.url,title:u.title,cover_url:u.coverUrl,chapters:u.chapters,lastCrawlTime:u.lastCrawlTime}));case 6:return r.abrupt("return",o(i.data.data));case 7:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}},{key:"fetchNovelChapter",value:function(e,t,n){var r=this;return new C.a(function(){var a=Object(l["a"])(regeneratorRuntime.mark(function a(o,i){var u;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,T()({url:r.endpointRoute()+"/chapter",method:"GET",headers:{Authorization:e},params:{novel_id:t,chapter_index:n}});case 2:if(u=a.sent,!u.data.success){a.next=5;break}return a.abrupt("return",o(u.data.data));case 5:return a.abrupt("return",i(u.data.data));case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}())}},{key:"fetchComics",value:function(e){var t=this;return new C.a(function(){var n=Object(l["a"])(regeneratorRuntime.mark(function n(r,a){var o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T()({url:t.endpointRoute()+"/comics",method:"GET",headers:{Authorization:e}});case 2:if(o=n.sent,!o.data.success){n.next=5;break}return n.abrupt("return",r(o.data.data));case 5:return n.abrupt("return",a(o.data.data));case 6:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}},{key:"fetchComicByID",value:function(e,t){var n=this;return new C.a(function(){var r=Object(l["a"])(regeneratorRuntime.mark(function r(a,o){var i,u;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T()({url:n.endpointRoute()+"/comic",method:"GET",headers:{Authorization:e},params:{comic_id:t}});case 2:if(i=r.sent,!i.data.success){r.next=6;break}return u=i.data.data,r.abrupt("return",a({comicID:u.comicID,author:u.author,description:u.description,dns:u.dns,url:u.url,title:u.title,cover_url:u.coverUrl,chapters:u.chapters,lastCrawlTime:u.lastCrawlTime}));case 6:return r.abrupt("return",o(i.data.data));case 7:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}},{key:"fetchComicChapter",value:function(e,t,n){var r=this;return new C.a(function(){var a=Object(l["a"])(regeneratorRuntime.mark(function a(o,i){var u;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,T()({url:r.endpointRoute()+"/comic/chapter",method:"GET",headers:{Authorization:e},params:{comic_id:t,chapter_index:n}});case 2:if(u=a.sent,!u.data.success){a.next=5;break}return a.abrupt("return",o(u.data.data));case 5:return a.abrupt("return",i(u.data.data));case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}())}},{key:"addNewNovel",value:function(e,t){var n=this;return new C.a(function(){var r=Object(l["a"])(regeneratorRuntime.mark(function r(a,o){var i;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T()({url:n.endpointRoute()+"/novel",method:"POST",headers:{Authorization:e},data:N.a.stringify({novel_url:t})});case 2:if(i=r.sent,1!=i.data.success){r.next=5;break}return r.abrupt("return",a(i.data.data));case 5:return r.abrupt("return",o(i.data.data));case 6:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}},{key:"addNewComic",value:function(e,t){var n=this;return new C.a(function(){var r=Object(l["a"])(regeneratorRuntime.mark(function r(a,o){var i;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T()({url:n.endpointRoute()+"/comic",method:"POST",headers:{Authorization:e},data:N.a.stringify({comic_url:t})});case 2:if(i=r.sent,1!=i.data.success){r.next=5;break}return r.abrupt("return",a(i.data.data));case 5:return r.abrupt("return",o(i.data.data));case 6:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}}]),e}(),A=I,$=n("6dd8"),E=n("85fe"),S=n("ecee"),z=n("c074"),B=n("b702"),P=n("ad3d"),L=(n("4989"),n("f9e3"),n("a65d")),G=n.n(L),H=n("f206"),F=n.n(H),M=n("f13c"),q=n.n(M),U=n("4c60"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:e.size+"px",height:e.size+"px"}},[n("div",{staticClass:"lds-eclipse",staticStyle:{width:"100%",height:"100%"},style:{width:e.size+"px !important",height:e.size+"px !important","-webkit-transform":"translate(-"+e.size+"px, -"+e.size+"px) scale(1) translate("+e.size+"px, "+e.size+"px)",transform:"translate(-"+e.size+"px, -"+e.size+"px) scale(1) translate("+e.size+"px, "+e.size+"px)"}},[n("div",{style:{"box-shadow":"0 "+2*e.scale+"px 0 0 #0089d0",top:10*e.scale+"px",left:10*e.scale+"px",width:80*e.scale+"px",height:80*e.scale+"px","-webkit-transform-origin":40*e.scale+"px "+41*e.scale+"px","transform-origin":40*e.scale+"px "+41*e.scale+"px"}})])])},Y=[],J={name:"loading",props:["size"],data:function(){return{scale:1}},mounted:function(){this.scale=this.size/100}},W=J,K=(n("3a0b"),Object(i["a"])(W,V,Y,!1,null,"83442d00",null)),Q=K.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"foot"}},[n("small",[e._v("\n    本站所有圖文影來源皆為其他網站，"),n("br",{staticClass:"d-md-none"}),e._v("且針對所有內容未進行任何儲存。"),n("br"),e._v("\n    Version  \n    "),n("a",{attrs:{href:"https://github.com/jackey8616/Silverfish-Vue/commit/"+e.last_update_master_hash,target:"_blank"}},[e._v("\n      "+e._s(e.last_update_master_hash.slice(0,7))+"\n    ")]),n("br"),e._v("\n    Updated @ "+e._s(e.last_update_master_time)),n("br"),e._v("\n    Built @ "+e._s(e.last_deploy_time)),n("br"),e._v("\n    Service Mail: "),n("a",{attrs:{href:"mailto:service@silverfish.cc"}},[e._v("service@silverfish.cc")])])])},Z=[],ee={name:"foot",data:function(){return{last_update_master_hash:"",last_update_master_time:"",last_deploy_time:""}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T()({url:"https://api.github.com/repos/jackey8616/Silverfish-Vue/commits/master",method:"GET"});case 2:return t=e.sent,e.next=5,T()({url:"https://api.github.com/repos/jackey8616/Silverfish-Vue/deployments",method:"GET"});case 5:n=e.sent,this.last_update_master_hash=t.data.sha,this.last_update_master_time=this.$root.formatDate(t.data.commit.committer.date,!0),this.last_deploy_time=this.$root.formatDate(n.data[0].created_at,!0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},te=ee,ne=(n("74ca"),Object(i["a"])(te,X,Z,!1,null,"840415e4",null)),re=ne.exports;S["c"].add(z["e"],z["b"],z["a"],z["h"],B["a"],z["i"],z["f"],z["g"],z["c"],B["b"],z["j"],z["d"]);var ae="https://silverfish-backend.clo5de.info:2087",oe="/api/v1";r["a"].config.productionTip=!1,r["a"].prototype.$vuex=k,r["a"].prototype.$api=new A(ae,oe),r["a"].component("font-awesome-icon",P["a"]),r["a"].component("navigator",U["default"]),r["a"].component("loading",Q),r["a"].component("foot",re),r["a"].directive("observe-visibility",E["a"]),r["a"].use(G.a,{duration:2500,keepOnHover:!0,iconPack:"fontawesome",theme:"bubble"}),r["a"].use(F.a),r["a"].use(q.a),new r["a"]({router:h,metaInfo:function(){return{htmlAttrs:{prefix:"og: http://ogp.me/ns#",lang:"zh-Hant-TW"},title:"首頁",titleTemplate:"%s - 書蠹付梓 | 無縫閱讀",meta:[{charset:"utf-8"},{vmid:"description",name:"description",content:"提供流暢、無廣告的小說/漫畫閱覽，支援各平台裝置使用，無需下載任何App。"},{vmid:"og:title",property:"og:title",content:"首頁",template:function(e){return"".concat(e,"  - 書蠹付梓 | 無縫閱讀")}},{vmid:"og:site_name",property:"og:site_name",content:"書蠹付梓 | 無縫閱讀"},{vmid:"og:url",property:"og:url",content:"",template:function(e){return"https://silverfish.cc/#/".concat(e)}},{vmid:"og:description",property:"og:description",content:"提供流暢、無廣告的小說/漫畫閱覽，支援各平台裝置使用，無需下載任何App。"},{vmid:"og:image",property:"og:image",content:""},{vmid:"og:type",property:"og:type",content:"website"},{property:"fb:app_id",content:"1284931168337983"}],script:[{vmid:"ldjson-schema",innerHTML:"",type:"application/ld+json"}],__dangerouslyDisableSanitizersByTagID:{"ldjson-schema":["innerHTML"]}}},store:k,data:function(){return{height:0,withFootHeight:0}},mounted:function(){var e=this;this.$nextTick(function(){var t=new $["a"](function(){e.$nextTick(function(){var t=document.getElementById("navigator"),n=document.getElementById("foot");null!=t&&(e.height=window.innerHeight-t.clientHeight,e.withFootHeight=window.innerHeight-t.clientHeight-n.clientHeight)})}),n=document.getElementById("navigator");t.observe(document.body),null!=n&&t.observe(n)})},methods:{fetchBookmark:function(){var e=this;1==this.$vuex.getters.isLogging()&&this.$api.fetchLatestBookmark(this.$vuex.getters.getSession()).then(function(t){e.$vuex.commit("updateBookmark",t)}).catch(function(t){"SessionToken not exists"==t.reason?(e.$vuex.commit("logout"),e.$toasted.show("不存在的Session，無法獲取書籤，請重新登入！")):console.error(t)})},formatDate:function(e,t){var n=new Date(e),r="0".concat(n.getMonth()+1).slice(-2),a="0".concat(n.getDate()).slice(-2),o="0".concat(n.getHours()).slice(-2),i="0".concat(n.getMinutes()).slice(-2);if(void 0==t||0==t)return"".concat(n.getFullYear(),"/").concat(r,"/").concat(a," ").concat(o,":").concat(i);var u="0".concat(n.getSeconds()).slice(-2);return"".concat(n.getFullYear(),"/").concat(r,"/").concat(a," ").concat(o,":").concat(i,":").concat(u)},simpleFormatDate:function(e){var t=new Date(e),n=t.getFullYear().toString().substr(-2),r="0".concat(t.getMonth()+1).slice(-2),a="0".concat(t.getDate()).slice(-2);return"".concat(n,"/").concat(r,"/").concat(a)}},render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},"74ca":function(e,t,n){"use strict";var r=n("201f"),a=n.n(r);a.a},cbeb:function(e,t,n){}});
//# sourceMappingURL=app.b0a0cacf.js.map