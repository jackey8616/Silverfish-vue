(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"05a0":function(t,e,a){},3571:function(t,e,a){"use strict";var i=a("05a0"),n=a.n(i);n.a},5326:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",style:{"min-height":t.$root.$data.height+"px"},attrs:{id:"content"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 offset-2 col-md-4 offset-md-4",attrs:{id:"form"}},[a("form",[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.account,expression:"auth.account"}],staticClass:"form-control",attrs:{type:"text",placeholder:"帳號",required:""},domProps:{value:t.auth.account},on:{input:function(e){e.target.composing||t.$set(t.auth,"account",e.target.value)}}}),t.auth.account.length>0?a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-sm btn-light",attrs:{type:"button",tabindex:"-1"},on:{click:function(e){t.auth.account=""}}},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]):t._e()]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密碼",required:""},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}}),t.auth.password.length>0?a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-sm btn-light",attrs:{type:"button",tabindex:"-1"},on:{click:function(e){t.auth.password=""}}},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]):t._e()]),a("div",{staticClass:"form-group",staticStyle:{"text-align":"right"}},[a("vue-recaptcha",{ref:"invisibleRecaptcha",attrs:{size:"invisible",loadRecaptchaScript:!0,sitekey:"6LdgzKYUAAAAAG8KH1AHc_Xjj7yVcAYXZFj7PsPH"},on:{verify:t.onRecaptchaVerfiy,expired:t.onRecaptchaExpired}}),0==t.load?a("div",[a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-2",staticStyle:{"text-align":"left"}},[a("input",{staticClass:"btn-sm btn-color-2",attrs:{disabled:t.valid(),type:"button",value:"登入"},on:{click:function(e){return t.submitLogin()}}})]),a("div",{staticClass:"col-8",attrs:{title:"保持連續一周的登入狀態"}},[a("small",[t._v("保持登入?")]),t._v("\n                 \n                "),a("toggle-button",{attrs:{width:38,height:19,marge:0},model:{value:t.auth.keepLogin,callback:function(e){t.$set(t.auth,"keepLogin",e)},expression:"auth.keepLogin"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col align-self-end",staticStyle:{"text-align":"right"}},[a("router-link",{attrs:{to:{name:"register"},tag:"small"}},[t._v("註冊")]),t._v("\n                 \n                "),a("small",{attrs:{title:"關我屁事"}},[t._v("忘記密碼?")])],1)])]):a("div",[a("br"),a("center",[a("loading",{attrs:{size:80}})],1)],1)],1)])])])])},n=[],o=a("e096"),r={name:"login",components:{VueRecaptcha:o["a"]},data:function(){return{load:!1,auth:{keepLogin:!1,account:"",password:""}}},mounted:function(){"https:"!=location.protocol&&(location.href="https:"+window.location.href.substring(window.location.protocol.length))},methods:{valid:function(){return""===this.auth.account||""===this.auth.password},submitLogin:function(){this.load=!0,this.$refs.invisibleRecaptcha.execute()},onRecaptchaExpired:function(){this.$refs.invisibleRecaptcha.reset()},onRecaptchaVerfiy:function(t){var e=this;this.$api.authLogin(this.$vuex.getters.getSession(),t,this.auth).then(function(t){e.$vuex.commit("login",t),e.$toasted.success("登入成功"),e.$router.push({name:"list"})}).catch(function(t){"Recaptcha verify failed"===t.reason?e.$toasted.error("Google Recaptch 驗證失敗！"):"Account or Password wrong"===t.reason?e.$toasted.error("帳號或密碼錯誤！"):"Account not exists"===t.reason?e.$toasted.error("帳號不存在！"):(e.$toasted.error("未知錯誤！"),console.error(t)),e.onRecaptchaExpired(),e.load=!1})}}},s=r,c=(a("3571"),a("2877")),u=Object(c["a"])(s,i,n,!1,null,"236e9f2e",null);e["default"]=u.exports},e096:function(t,e,a){"use strict";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},i.apply(this,arguments)}var n=function(){var t=!1,e=[],a=function(a){if(!t){t=!0;for(var i=0,n=e.length;i<n;i++)e[i](a)}},i=function(a){t?a():e.push(a)},n={resolved:function(){return t},resolve:a,promise:{then:i}};return n};function o(){var t=n();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,a){this.wait().then(function(){a(window.grecaptcha.render(t,e))})},reset:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){window.hasOwnProperty("grecaptcha")&&window.grecaptcha.hasOwnProperty("render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var r=o();"undefined"!==typeof window&&(window.vueRecaptchaApiLoaded=r.notify);var s={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;r.checkRecaptchaLoad();var e=i({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired}),a=this.$slots["default"]?this.$el.children[0]:this.$el;r.render(a,e,function(e){t.$widgetId=e,t.$emit("render",e)})},methods:{reset:function(){r.reset(this.$widgetId)},execute:function(){r.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")}},render:function(t){return t("div",{},this.$slots["default"])}};e["a"]=s}}]);
//# sourceMappingURL=login.44715297.js.map