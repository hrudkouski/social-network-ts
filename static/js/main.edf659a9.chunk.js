(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(36),a=n(3),c="social-network-ts/dialogs_reducer/ADD_MESSAGE",s={dialogs:[{id:1,name:"Nikita"},{id:2,name:"Masha"},{id:3,name:"Sasha"},{id:4,name:"Kirill"},{id:5,name:"Vasil"},{id:6,name:"Jon"}],messages:[{id:1,message:"Hi! how are you?"},{id:2,message:"Hi! How old are you?"},{id:3,message:"Hi! Where are you from?"},{id:4,message:"Hello! I don't need books"},{id:5,message:"How do you do?"},{id:6,message:"I'm fine"}],newMessageText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:(new Date).getTime(),message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}},o=function(e){return{type:c,newMessageBody:e}}},129:function(e,t,n){"use strict";n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return S})),n.d(t,"f",(function(){return N}));var r=n(8),a=n.n(r),c=n(13),s=n(36),i=n(3),o=n(16),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="social-network-ts/users_reducer/FOLLOW",d="social-network-ts/users_reducer/UNFOLLOW",p="social-network-ts/users_reducer/SET_USERS",j="social-network-ts/users_reducer/SET_CURRENT_PAGE",f="social-network-ts/users_reducer/SET_TOTAL_USERS_COUNT",b="social-network-ts/users_reducer/TOGGLE_IS_FETCHING",O="social-network-ts/users_reducer/TOGGLE_IS_FOLLOWING_PROGRESS",h={users:[],pageSize:5,totalUserCount:100,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!1})});case p:return Object(i.a)(Object(i.a)({},e),{},{users:Object(s.a)(t.users)});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.page});case f:return Object(i.a)(Object(i.a)({},e),{},{totalUserCount:t.totalCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case O:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.progress?[].concat(Object(s.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},g=function(e){return{type:l,userID:e}},v=function(e){return{type:d,userID:e}},x=function(e){return{type:j,page:e}},_=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:O,progress:e,userID:t}},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0)),n(x(e)),t.next=4,o.d.getUsers(e);case 4:r=t.sent,n(_(!1)),n((c=r.items,{type:p,users:c})),n((a=r.totalCount,{type:f,totalCount:a}));case 8:case"end":return t.stop()}var a,c}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,o.d.follow,g);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,o.d.unFollow,v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},130:function(e,t,n){e.exports={news:"News_news__ZrF7U"}},131:function(e,t,n){e.exports={music:"Music_music__LLZrF"}},132:function(e,t,n){e.exports={settings:"Settings_settings__30q53"}},133:function(e,t,n){e.exports={findFriends:"FindFriends_findFriends__3u4U7"}},134:function(e,t,n){e.exports={ldsRoller:"Preloader_ldsRoller__2oF8r"}},138:function(e,t,n){e.exports={wrapper:"Login_wrapper__3ctdC"}},14:function(e,t,n){e.exports={AppNav:"Navbar_AppNav__2O-N-",item:"Navbar_item__36B1R",active:"Navbar_active__GyOf7"}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g}));var r=n(8),a=n.n(r),c=n(13),s=n(3),i=n(16),o=n(31),u="social-network-ts/auth_reducer/SET_AUTH_USERS_DATA",l="social-network-ts/auth_reducer/TOGGLE_IS_FETCHING",d="social-network-ts/auth_reducer/GET_CAPTCHA_URL",p={userId:5513,login:"hrudkouski",email:"aprilshower19@gmail.com",isAuth:!1,isFetching:!1,captchaURL:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),t.payload);case l:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case d:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}},f=function(e,t,n,r){return{type:u,payload:{userId:e,login:t,email:n,isAuth:r}}},b=function(e){return{type:l,isFetching:e}},O=function(e){return{type:d,payload:{captchaURL:e}}},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0)),e.next=3,i.a.amIsAuth();case 3:0===(n=e.sent).data.resultCode&&(t(b(!1)),r=n.data.data,c=r.id,s=r.login,o=r.email,t(f(c,s,o,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var u,l,d;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(b(!0)),a.next=3,i.a.login(e,t,n,r);case 3:0===(u=a.sent).data.resultCode?s(h()):10===u.data.resultCode?s(v()):(l=u.data.messages.length>0?u.data.messages:"Some error",d=Object(o.b)("login",{_error:l}),s(d)),s(b(!1));case 6:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0)),e.next=3,i.a.logout();case 3:0===e.sent.data.resultCode&&(t(b(!1)),t(f(null,null,null,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptcha();case 2:n=e.sent,r=n.data.url,t(O(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(135),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(e){return a.get("users?page=".concat(e,"&count=10")).then((function(e){return e.data}))},unFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={amIsAuth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptcha:function(){return a.get("security/get-captcha-url")}}},164:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);n(164);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,309)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(0),c=n.n(a),s=n(66),i=n.n(s),o=n(54),u=n(55),l=n(57),d=n(56),p=n(20),j=n(11),f=n(89),b=n.n(f),O=n(14),h=n.n(O),m=n(1),g=function(){return Object(m.jsxs)("nav",{className:h.a.AppNav,children:[Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/profile",children:"Profile"})}),Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/dialogs",children:"Messages"})}),Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/news",children:"News"})}),Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/users",children:"Users"})}),Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/music",children:"Music"})}),Object(m.jsx)("div",{className:h.a.item,children:Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/settings",children:"Settings"})}),Object(m.jsxs)("div",{className:h.a.item,children:[Object(m.jsx)(p.b,{activeClassName:h.a.active,to:"/findFriends",children:"Find friends"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"}),Object(m.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"}),Object(m.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"})]})]})]})},v=n(130),x=n.n(v),_=function(){return Object(m.jsx)("div",{className:x.a.dialogs,children:"News"})},w=n(131),y=n.n(w),k=function(){return Object(m.jsx)("div",{className:y.a.dialogs,children:"Music"})},S=n(132),N=n.n(S),C=function(){return Object(m.jsx)("div",{className:N.a.dialogs,children:"Settings"})},F=n(133),A=n.n(F),E=function(){return Object(m.jsx)("div",{className:A.a.findFriends,children:"FindFriends"})},T=n(3),P=n.p+"static/media/logo.6ce24c58.svg",I=n(43),U=n.n(I),L=n(34),R=function(e){var t=e.login,n=e.isFetching,r=e.isAuth,a=e.logout;return n?Object(m.jsx)(L.a,{}):Object(m.jsxs)("header",{className:U.a.AppHeader,children:[Object(m.jsx)("img",{src:P,className:U.a.AppLogo,alt:"logo"}),Object(m.jsx)("div",{className:U.a.loginBlock,children:r?Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:U.a.loginTitle,children:"Username: "}),Object(m.jsx)("span",{className:U.a.userName,children:t}),Object(m.jsx)("button",{style:{marginLeft:"15px"},onClick:a,children:"LogOut"})]}):Object(m.jsx)(p.b,{to:"/login",children:"Please login to continue"})})]})},D=n(17),H=n(15),M=n(10),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)(R,Object(T.a)({},this.props))}}]),n}(c.a.Component),z=Object(M.d)(Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{setAuthUsersData:H.e,toggleIsFetching:H.f,logout:H.d}))(G),B="social-network-ts/app_reducer/SET_INITIALIZED",W={initialized:!1},q=n(94),V=n(129),Y=n(106),J={},Z=n(136),K=n(128),X=Object(M.c)({profilePage:q.d,dialogsPage:Y.b,usersPage:V.h,sideBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;return t.type,e},auth:H.a,form:K.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(T.a)(Object(T.a)({},e),{},{initialized:t.value});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,$=Object(M.e)(X,Q(Object(M.a)(Z.a))),ee=$;window.__store__=$;var te=n(88),ne=n(127),re=n(39),ae=n(85),ce=n(52),se=n.n(ce),ie=n(138),oe=n.n(ie),ue=Object(ne.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)(te.a,{validate:[ae.b],component:re.a,name:"email",placeholder:"email"}),Object(m.jsx)(te.a,{validate:[ae.b],component:re.a,name:"password",placeholder:"password",type:"password"}),Object(m.jsx)(te.a,{component:re.a,name:"rememberMe",type:"checkbox"})," ",Object(m.jsx)("span",{children:"remember me"}),Object(m.jsx)("div",{children:r&&Object(m.jsx)("img",{src:r,alt:r})}),r&&Object(re.c)("captcha","Symbols from image",re.a,[]),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Login"})}),n&&Object(m.jsx)("span",{className:se.a.formSummaryError,children:n})]})})),le=function(){var e=Object(D.d)((function(e){return e.auth.captchaURL})),t=Object(D.d)((function(e){return e.auth.isAuth})),n=Object(D.d)((function(e){return e.auth.isFetching})),r=Object(D.c)();return t?Object(m.jsx)(j.a,{to:"/profile/5513"}):n?Object(m.jsx)(L.a,{}):Object(m.jsxs)("div",{className:oe.a.wrapper,children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:["You can register -",Object(m.jsx)("a",{href:"https://social-network.samuraijs.com/",rel:"noreferrer",target:"_blank",children:"here"})]}),Object(m.jsx)("div",{children:"or use test account:"}),Object(m.jsx)("div",{children:"Email: free@samuraijs.com"}),Object(m.jsx)("div",{children:"Password: free"})]}),Object(m.jsx)("h1",{children:"Please, login"}),Object(m.jsx)(ue,{onSubmit:function(e){r(Object(H.c)(e.email,e.password,e.rememberMe,e.captcha))},captchaURL:e})]})},de=c.a.lazy((function(){return n.e(3).then(n.bind(null,310))})),pe=c.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),je=c.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(L.a,{}),children:Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{className:b.a.AppWrapper,children:[Object(m.jsx)(z,{}),Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:b.a.AppContent,children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(j.a,{to:"/profile"})}}),Object(m.jsx)(j.b,{render:function(){return Object(m.jsx)(de,{})},path:"/profile/:userID?"}),Object(m.jsx)(j.b,{render:function(){return Object(m.jsx)(pe,{})},exact:!0,path:"/dialogs"}),Object(m.jsx)(j.b,{render:function(){return Object(m.jsx)(je,{})},exact:!0,path:"/users"}),Object(m.jsx)(j.b,{component:_,path:"/news"}),Object(m.jsx)(j.b,{component:k,path:"/music"}),Object(m.jsx)(j.b,{component:C,path:"/settings"}),Object(m.jsx)(j.b,{component:E,path:"/findFriends"}),Object(m.jsx)(j.b,{component:le,path:"/login"}),Object(m.jsx)(j.b,{path:"*",render:function(){return Object(m.jsx)("div",{children:"ERROR 404"})}})]})})]})})}):Object(m.jsx)(L.a,{})}}]),n}(c.a.Component),be=Object(M.d)(Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(H.f)(!0));var t=e(Object(H.b)());Promise.all([t]).then((function(){e({type:B,value:!0}),e(Object(H.f)(!1))}))}}}))(fe),Oe=function(){return Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(D.a,{store:ee,children:Object(m.jsx)(be,{})})})};i.a.render(Object(m.jsx)(Oe,{}),document.getElementById("root")),r()},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n(134),a=n.n(r),c=n(1),s=function(){return Object(c.jsxs)("div",{className:a.a.ldsRoller,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(3),a=n(70),c=(n(0),n(88)),s=n(52),i=n.n(s),o=n(1),u=function(e){var t=e.meta,n=t.error,r=t.touched,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(c?i.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:n})]})},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function p(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({placeholder:t,name:e,validate:a,component:n},s),{},{id:l,className:i})),u]})}},43:function(e,t,n){e.exports={AppHeader:"Header_AppHeader__3RgHs",AppLogo:"Header_AppLogo__3z8wq",loginBlock:"Header_loginBlock__1mU5U",userName:"Header_userName__lGbDY",loginTitle:"Header_loginTitle__vm67N"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1eM7x",error:"FormsControls_error__3vels",formSummaryError:"FormsControls_formSummaryError__1z8YO"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return+t.length>+e?"Max length is ".concat(e," symbols"):void 0}}},89:function(e,t,n){e.exports={AppWrapper:"App_AppWrapper__V62o8",AppContent:"App_AppContent__qt_pG"}},94:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return _})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return y}));var r=n(8),a=n.n(r),c=n(13),s=n(36),i=n(3),o=n(16),u=n(15),l=n(31),d="social-network-ts/profile_reducer/ADD_POST",p="social-network-ts/profile_reducer/SET_USER_PROFILE",j="social-network-ts/profile_reducer/SET_PROFILE_STATUS",f="social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS",b="social-network-ts/profile_reducer/SAVE_PHOTO_SUCCESS",O={posts:[{id:1,message:"\u041f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 (\u0438\u043b\u0438 \u0438\u0442\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435) \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u2013 \u044d\u0442\u043e...",likesCount:9},{id:2,message:"\u041a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435, \u0441\u0430\u043c\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u043c\u0438...",likesCount:19},{id:3,message:"\u0415\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c, \u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442...",likesCount:3}],newPostText:"",profileUser:null,profileStatus:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:(new Date).getTime(),message:t.newPostMessage,likesCount:19};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case p:return Object(i.a)(Object(i.a)({},e),{},{profileUser:t.profileUser});case j:return Object(i.a)(Object(i.a)({},e),{},{profileStatus:t.profileStatus});case f:return Object(i.a)(Object(i.a)({},e),{},{profileStatus:t.newStatus});case b:return Object(i.a)(Object(i.a)({},e),{},{profileUser:Object(i.a)(Object(i.a)({},e.profileUser),{},{photos:t.photo})});default:return e}},m=function(e){return{type:d,newPostMessage:e}},g=function(e){return{type:j,profileStatus:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:p,profileUser:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.updateStatus(e);case 3:0===(r=t.sent).data.resultCode&&n(g(r.data.status)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.savePhoto(e);case 3:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photo:a})),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,n(Object(u.f)(!0)),t.next=4,o.b.saveProfile(e);case 4:if(0!==(s=t.sent).data.resultCode){t.next=12;break}if(!c){t.next=10;break}n(v(c)),t.next=12;break;case 10:return n(Object(l.b)("edit_profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 12:n(Object(u.f)(!1));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},[[292,1,2]]]);
//# sourceMappingURL=main.edf659a9.chunk.js.map