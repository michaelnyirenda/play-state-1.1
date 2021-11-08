(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-btn",{attrs:{to:"/",text:""}},[e._v("VueFirebase")]),a("v-spacer"),e.isAuthenticated?a("div",[a("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("Logout")])],1):a("div",[a("v-btn",{attrs:{to:{name:"Login"},text:""}},[e._v("Login")]),a("v-btn",{attrs:{to:{name:"Register"},text:""}},[e._v("Register")])],1)],1),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)},i=[],s=a("5530"),o=a("2f62"),l={name:"App",data:function(){return{}},computed:Object(s["a"])({},Object(o["b"])(["isAuthenticated"])),methods:{logout:function(){this.$store.dispatch("logout")}}},c=l,u=a("2877"),d=a("6544"),p=a.n(d),m=a("7496"),v=a("40dc"),f=a("8336"),g=a("a523"),h=a("f6c4"),b=a("2fa4"),w=Object(u["a"])(c,n,i,!1,null,null,null),x=w.exports;p()(w,{VApp:m["a"],VAppBar:v["a"],VBtn:f["a"],VContainer:g["a"],VMain:h["a"],VSpacer:b["a"]});a("45fc");var _=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Latest Games")]),0==e.games.length?a("p",[e._v("No games found")]):e._e(),a("v-row",e._l(e.games,(function(t){return a("v-col",{key:t.id,attrs:{md:"4"}},[a("v-card",[t.image?a("v-img",{attrs:{height:"250",src:t.image,"lazy-src":"https://via.placeholder.com/250"}}):e._e(),a("v-card-title",[e._v(e._s(t.title))]),a("v-card-text",[a("p",{staticClass:"body-1"},[e._v("Developer: "+e._s(t.developer))]),a("p",{staticClass:"body-1"},[e._v("Publisher: "+e._s(t.publisher))]),a("p",{staticClass:"body-1"},[e._v("Posted By: "+e._s(t.author))]),a("p",[e._v(e._s(t.description))]),a("v-btn",{attrs:{block:"",color:"primary"}},[e._v("Learn More")])],1)],1)],1)})),1)],1)},R=[],y=(a("a4d3"),a("e01a"),a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),V=a("260b"),C=(a("ea7b"),a("e71f"),a("588e"),{apiKey:"AIzaSyAsStH4eFV1z3PUeZYJc_WXHFMfx19_Ydw",authDomain:"playstate-ec72e.firebaseapp.com",projectId:"playstate-ec72e",storageBucket:"playstate-ec72e.appspot.com",messagingSenderId:"688057309408",appId:"1:688057309408:web:e2ef35c3bf61a8ac39d885"});V["a"].initializeApp(C);var j=V["a"].firestore(),O=V["a"].auth(),P=V["a"].storage(),L=j.collection("users"),G=j.collection("games"),D={name:"Home",data:function(){return{games:[]}},methods:{getGames:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.get();case 3:a=t.sent,a.forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r="",!a.data().image){t.next=5;break}return t.next=4,P.ref().child(a.data().image).getDownloadURL();case 4:r=t.sent;case 5:return t.next=7,L.doc(a.data().userId).get();case 7:n=t.sent,e.games.push({id:a.id,title:a.data().title,developer:a.data().developer,publisher:a.data().publisher,description:a.data().description,image:r,img:a.data().image,author:n.data().name});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGames();case 2:case"end":return t.stop()}}),t)})))()}},I=D,T=a("b0af"),A=a("99d9"),E=a("62ad"),F=a("adda"),U=a("0fd9"),q=Object(u["a"])(I,k,R,!1,null,null,null),$=q.exports;p()(q,{VBtn:f["a"],VCard:T["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:E["a"],VImg:F["a"],VRow:U["a"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"4"}},[a("v-card",{attrs:{elevation:"2"}},[a("v-card-title",[e._v("Register")]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Name",outlined:"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"Email",outlined:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",outlined:"",required:"",type:e.show?"text":"password","append-icon":e.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{attrs:{elevation:"2",color:"primary",loading:e.isLoading},on:{click:e.register}},[e._v(" Register ")])],1),a("p",{staticClass:"pt-2"},[e._v("Already have an account? "),a("router-link",{attrs:{to:{name:"Login"}}},[e._v("Login Now")])],1)],1)],1)],1)],1)},z=[],B={data:function(){return{isLoading:!1,show:!1,valid:!1,name:"",email:"",password:"",nameRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+/.test(e)||"Email must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=8||"Password must be 8 characters or more"}]}},methods:{register:function(){var e=this.$refs.form.validate();e&&(this.isLoading=!0,this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password}))}}},M=B,H=a("4bd4"),N=a("8654"),J=Object(u["a"])(M,S,z,!1,null,null,null),W=J.exports;p()(J,{VBtn:f["a"],VCard:T["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:E["a"],VForm:H["a"],VRow:U["a"],VTextField:N["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"4"}},[a("v-card",{attrs:{elevation:"2"}},[a("v-card-title",[e._v("Login")]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"Email",outlined:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",outlined:"",required:"",type:e.show?"text":"password","append-icon":e.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{attrs:{elevation:"2",color:"primary",loading:e.isLoading},on:{click:e.login}},[e._v(" Login ")])],1),a("p",{staticClass:"pt-2"},[e._v("Create an account? "),a("router-link",{attrs:{to:{name:"Register"}}},[e._v("Register")])],1)],1)],1)],1)],1)},K=[],X={data:function(){return{isLoading:!1,show:!1,valid:!1,email:"",password:"",emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+/.test(e)||"Email must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=8||"Password must be 8 characters or more"}]}},methods:{login:function(){var e=this.$refs.form.validate();e&&(this.isLoading=!0,this.$store.dispatch("login",{email:this.email,password:this.password}))}}},Z=X,Q=Object(u["a"])(Z,Y,K,!1,null,null,null),ee=Q.exports;p()(Q,{VBtn:f["a"],VCard:T["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:E["a"],VForm:H["a"],VRow:U["a"],VTextField:N["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("h1",[e._v("Hi, "+e._s(e.userProfile.name))]),a("GameForm",{on:{"game:added":e.addGame}}),a("v-row",e._l(e.games,(function(t,r){return a("v-col",{key:t.id,attrs:{md:"4"}},[a("v-card",[t.image?a("v-img",{attrs:{height:"250",src:t.image,"lazy-src":"https://via.placeholder.com/250"}}):e._e(),a("v-card-title",[e._v(e._s(t.title))]),a("v-card-text",[a("p",{staticClass:"subtitle-1"},[e._v("Developer: "+e._s(t.developer))]),a("p",{staticClass:"subtitle-1"},[e._v("Publisher: "+e._s(t.publisher))]),a("p",[e._v(e._s(t.description))])]),a("v-card-actions",[a("GameForm",{attrs:{game:t,index:r},on:{"game:updated":e.updateGame}}),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(a){return e.deleteConfirm(t.id,t.title)}}},[e._v("Delete")])],1)],1)],1)})),1),a("v-dialog",{attrs:{"max-width":"400"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(" Delete Game? ")]),a("v-card-text",[e._v("Are you sure you want to delete "),a("b",[e._v(e._s(e.pTitle))]),e._v("?")]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"red"},on:{click:e.deleteGame}},[e._v("Delete")]),a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.deleteDialog=!1}}},[e._v("Close")])],1)],1)],1)],1)},ae=[],re=(a("c740"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-form"},[e.game?a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.dialog=!e.dialog,e.setData()}}},[e._v("Edit game")]):a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.dialog=!e.dialog}}},[e._v("Add new game")]),a("v-dialog",{attrs:{persistent:"",width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[e.game?a("v-card-title",[e._v("Edit game")]):a("v-card-title",[e._v("Add new game")]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.fieldRules,label:"Game title",required:"",outline:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),a("v-text-field",{attrs:{rules:e.fieldRules,label:"Game developer",outlined:"",required:""},model:{value:e.developer,callback:function(t){e.developer=t},expression:"developer"}}),a("v-text-field",{attrs:{rules:e.fieldRules,label:"Game publisher",outlined:"",required:""},model:{value:e.publisher,callback:function(t){e.publisher=t},expression:"publisher"}}),a("v-textarea",{attrs:{rules:e.fieldRules,label:"Game description",outlined:"",required:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),a("v-file-input",{attrs:{accept:"image/*",label:"File input","show-size":""},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),a("p",[e._v("Current image: "),e.oldImage?a("a",{attrs:{href:e.oldImage}},[e._v("link")]):e._e()]),e.game?a("v-btn",{attrs:{elevation:"2",color:"primary",loading:e.isLoading},on:{click:e.updateGame}},[e._v(" Update ")]):a("v-btn",{attrs:{elevation:"2",color:"primary",loading:e.isLoading},on:{click:e.storeGame}},[e._v(" Store ")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1)],1)}),ne=[],ie={name:"GameForm",props:["game","index"],data:function(){return{isLoading:!1,valid:!1,dialog:!1,title:"",developer:"",publisher:"",description:"",file:null,fieldRules:[function(e){return!!e||"this field is required"}],oldImage:""}},methods:{resetForm:function(){this.$refs.form.reset()},storeGame:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!1,a="uploads/games/"+e.file.name,t.next=5,P.ref(a).put(e.file);case 5:return t.sent,r={userId:O.currentUser.uid,title:e.title,developer:e.developer,publisher:e.publisher,description:e.description,image:a},t.next=9,G.add(r);case 9:return t.sent,e.$emit("game:added",r),t.next=13,e.resetForm();case 13:e.isLoading=!1,e.dialog=!1,t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},updateGame:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isLoading=!1,a={userId:O.currentUser.uid,title:e.title,developer:e.developer,publisher:e.publisher,description:e.description},!e.file){t.next=14;break}return r=e.game.img,t.next=7,P.ref(r)["delete"]();case 7:return n="uploads/games/"+e.file.name,t.next=10,P.ref(n).put(e.file);case 10:t.sent,a.image=n,t.next=15;break;case 14:a.image=e.game.img;case 15:return t.next=17,G.doc(e.game.id).update(a);case 17:return t.sent,t.next=20,e.resetForm();case 20:e.isLoading=!1,e.dialog=!1,a.index=e.index,e.$emit("game:updated",a),alert("Game updated!"),t.next=30;break;case 27:t.prev=27,t.t0=t["catch"](0),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[0,27]])})))()},setData:function(){this.game&&(this.title=this.game.title,this.publisher=this.game.publisher,this.developer=this.game.developer,this.description=this.game.description,this.oldImage=this.game.image)}},mounted:function(){this.setData()}},se=ie,oe=a("169a"),le=a("23a7"),ce=a("a844"),ue=Object(u["a"])(se,re,ne,!1,null,null,null),de=ue.exports;p()(ue,{VBtn:f["a"],VCard:T["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VDialog:oe["a"],VFileInput:le["a"],VForm:H["a"],VSpacer:b["a"],VTextField:N["a"],VTextarea:ce["a"]});var pe={components:{GameForm:de},data:function(){return{games:[],pId:null,pTitle:null,deleteDialog:!1}},computed:Object(s["a"])({},Object(o["b"])(["userProfile"])),methods:{addGame:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r="",!e.image){a.next=5;break}return a.next=4,P.ref().child(e.image).getDownloadURL();case 4:r=a.sent;case 5:t.games.push({id:e.id,title:e.title,developer:e.developer,publisher:e.publisher,description:e.description,image:r,img:e.image});case 6:case"end":return a.stop()}}),a)})))()},updateGame:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r="",!e.image){a.next=5;break}return a.next=4,P.ref().child(e.image).getDownloadURL();case 4:r=a.sent;case 5:t.games.splice(e.index,1,{id:e.id,title:e.title,developer:e.developer,publisher:e.publisher,description:e.description,image:r,img:e.image});case 6:case"end":return a.stop()}}),a)})))()},getGames:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.where("userId","==",O.currentUser.uid).get();case 3:a=t.sent,a.forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r="",!a.data().image){t.next=5;break}return t.next=4,P.ref().child(a.data().image).getDownloadURL();case 4:r=t.sent;case 5:e.games.push({id:a.id,title:a.data().title,developer:a.data().developer,publisher:a.data().publisher,description:a.data().description,image:r,img:a.data().image});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},deleteConfirm:function(e,t){var a=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a.deleteDialog=!0,a.pId=e,a.pTitle=t;case 3:case"end":return r.stop()}}),r)})))()},deleteGame:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.doc(e.pId)["delete"]();case 3:alert("Game deleted!"),e.games.splice(e.games.findIndex((function(t){return t.id==e.pId})),1),e.deleteDialog=!1,e.pId=null,e.pTitle=null,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGames();case 2:case"end":return t.stop()}}),t)})))()}},me=pe,ve=Object(u["a"])(me,te,ae,!1,null,null,null),fe=ve.exports;p()(ve,{VBtn:f["a"],VCard:T["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:E["a"],VDialog:oe["a"],VImg:F["a"],VRow:U["a"]}),r["a"].use(_["a"]);var ge=[{path:"/",name:"Home",component:$},{path:"/register",name:"Register",component:W},{path:"/login",name:"Login",component:ee},{path:"/dashboard",name:"Dashboard",component:fe,meta:{auth:!0}}],he=new _["a"]({mode:"history",base:"/",routes:ge});he.beforeEach((function(e,t,a){var r=e.matched.some((function(e){return e.meta.auth}));r&&!O.currentUser?a("/login"):a()}));var be=he;r["a"].use(o["a"]);var we=new o["a"].Store({state:{userProfile:{},isAuthenticated:!1},mutations:{setUserProfile:function(e,t,a){e.isAuthenticated=!e.isAuthenticated,e.userProfile=t}},actions:{register:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.dispatch,a.next=3,O.createUserWithEmailAndPassword(t.email,t.password);case 3:return n=a.sent,i=n.user,a.next=7,L.doc(i.uid).set({name:t.name});case 7:r("fetchUserProfile",i);case 8:case"end":return a.stop()}}),a)})))()},login:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.dispatch,a.next=3,O.signInWithEmailAndPassword(t.email,t.password);case 3:n=a.sent,i=n.user,r("fetchUserProfile",i);case 6:case"end":return a.stop()}}),a)})))()},fetchUserProfile:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.next=3,L.doc(t.uid).get();case 3:n=a.sent,r("setUserProfile",n.data()),be.push("/dashboard");case 6:case"end":return a.stop()}}),a)})))()},logout:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,O.signOut();case 3:a("setUserProfile",{}),be.push("/");case 5:case"end":return t.stop()}}),t)})))()}},modules:{}}),xe=a("f309");r["a"].use(xe["a"]);var _e,ke=new xe["a"]({});r["a"].config.productionTip=!1,O.onAuthStateChanged((function(){_e||new r["a"]({router:be,store:we,vuetify:ke,render:function(e){return e(x)}}).$mount("#app")}))}});
//# sourceMappingURL=app.c3eed7ac.js.map