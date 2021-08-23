(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[1],{137:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(87),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),s={getUsers:function(e){return a.get("users?page=".concat(e,"&count=10")).then((function(e){return e.data}))},unFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status",{status:e})}},i={amIsAuth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(6),a=n.n(r),s=n(12),c=n(3),i=n(15),o=n(47),u="social-network-ts/auth_reducer/SET_AUTH_USERS_DATA",l="social-network-ts/auth_reducer/TOGGLE_IS_FETCHING",d={userId:5513,login:"hrudkouski",email:"aprilshower19@gmail.com",isAuth:!1,isFetching:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),t.payload);case l:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});default:return e}},f=function(e,t,n,r){return{type:u,payload:{userId:e,login:t,email:n,isAuth:r}}},j=function(e){return{type:l,isFetching:e}},b=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0)),e.next=3,i.a.amIsAuth();case 3:0===(n=e.sent).data.resultCode&&(t(j(!1)),r=n.data.data,s=r.id,c=r.login,o=r.email,t(f(s,c,o,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,u,l;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(j(!0)),r.next=3,i.a.login(e,t,n);case 3:0===(c=r.sent).data.resultCode?s(b()):(u=c.data.messages.length>0?c.data.messages:"Some error",l=Object(o.b)("login",{_error:u}),s(l)),s(j(!1));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0)),e.next=3,i.a.logout();case 3:0===e.sent.data.resultCode&&(t(j(!1)),t(f(null,null,null,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},226:function(e,t,n){"use strict";n.r(t);n(137);var r=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,305)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(46),i=n.n(c),o=n(35),u=n(36),l=n(38),d=n(37),p=n(14),f=n(7),j=n(54),b=n.n(j),O=n(8),g=n.n(O),h=n(1),m=function(){return Object(h.jsxs)("nav",{className:g.a.AppNav,children:[Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/profile",children:"Profile"})}),Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/dialogs",children:"Messages"})}),Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/news",children:"News"})}),Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/users",children:"Users"})}),Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/music",children:"Music"})}),Object(h.jsx)("div",{className:g.a.item,children:Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/settings",children:"Settings"})}),Object(h.jsxs)("div",{className:g.a.item,children:[Object(h.jsx)(p.b,{activeClassName:g.a.active,to:"/findFriends",children:"Find friends"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"}),Object(h.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"}),Object(h.jsx)("img",{src:"https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",alt:"Friends"})]})]})]})},v=n(82),x=n.n(v),_=function(){return Object(h.jsx)("div",{className:x.a.dialogs,children:"News"})},w=n(83),N=n.n(w),y=function(){return Object(h.jsx)("div",{className:N.a.dialogs,children:"Music"})},k=n(84),S=n.n(k),F=function(){return Object(h.jsx)("div",{className:S.a.dialogs,children:"Settings"})},A=n(85),C=n.n(A),I=function(){return Object(h.jsx)("div",{className:C.a.findFriends,children:"FindFriends"})},T=n(3),E=n.p+"static/media/logo.6ce24c58.svg",P=n(27),U=n.n(P),L=n(32),D=function(e){var t=e.login,n=e.isFetching,r=e.isAuth,a=e.logout;return n?Object(h.jsx)(L.a,{}):Object(h.jsxs)("header",{className:U.a.AppHeader,children:[Object(h.jsx)("img",{src:E,className:U.a.AppLogo,alt:"logo"}),Object(h.jsx)("div",{className:U.a.loginBlock,children:r?Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:U.a.loginTitle,children:"Username: "}),Object(h.jsx)("span",{className:U.a.userName,children:t}),Object(h.jsx)("button",{style:{marginLeft:"15px"},onClick:a,children:"LogOut"})]}):Object(h.jsx)(p.b,{to:"/login",children:"Please login to continue"})})]})},H=n(28),R=n(18),G=n(21),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(D,Object(T.a)({},this.props))}}]),n}(s.a.Component),z=Object(G.d)(Object(H.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{setAuthUsersData:R.e,toggleIsFetching:R.f,logout:R.d}))(M),B="social-network-ts/app_reducer/SET_INITIALIZED",W={initialized:!1},q=n(59),J=n(81),V=n(74),Z={},K=n(88),X=n(80),Y=Object(G.c)({profilePage:q.d,dialogsPage:V.b,usersPage:J.h,sideBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type,e},auth:R.a,form:X.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(T.a)(Object(T.a)({},e),{},{initialized:t.value});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,$=Object(G.e)(Y,Q(Object(G.a)(K.a))),ee=$;window.__store__=$;var te=s.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,307))})),ne=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,309))})),re=s.a.lazy((function(){return n.e(6).then(n.bind(null,308))})),ae=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,306))})),se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(L.a,{}),children:Object(h.jsx)(p.a,{children:Object(h.jsxs)("div",{className:b.a.AppWrapper,children:[Object(h.jsx)(z,{}),Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:b.a.AppContent,children:[Object(h.jsx)(f.b,{render:function(){return Object(h.jsx)(te,{})},path:"/profile/:userID?"}),Object(h.jsx)(f.b,{render:function(){return Object(h.jsx)(ne,{})},exact:!0,path:"/dialogs"}),Object(h.jsx)(f.b,{render:function(){return Object(h.jsx)(re,{})},exact:!0,path:"/users"}),Object(h.jsx)(f.b,{component:_,path:"/news"}),Object(h.jsx)(f.b,{component:y,path:"/music"}),Object(h.jsx)(f.b,{component:F,path:"/settings"}),Object(h.jsx)(f.b,{component:I,path:"/findFriends"}),Object(h.jsx)(f.b,{component:ae,path:"/login"})]})]})})}):Object(h.jsx)(L.a,{})}}]),n}(s.a.Component),ce=Object(G.d)(Object(H.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(R.f)(!0));var t=e(Object(R.b)());Promise.all([t]).then((function(){e({type:B,value:!0}),e(Object(R.f)(!1))}))}}}))(se),ie=function(){return Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(H.a,{store:ee,children:Object(h.jsx)(ce,{})})})};i.a.render(Object(h.jsx)(ie,{}),document.getElementById("root")),r()},27:function(e,t,n){e.exports={AppHeader:"Header_AppHeader__3RgHs",AppLogo:"Header_AppLogo__3z8wq",loginBlock:"Header_loginBlock__1mU5U",userName:"Header_userName__lGbDY",loginTitle:"Header_loginTitle__vm67N"}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n(86),a=n.n(r),s=n(1),c=function(){return Object(s.jsxs)("div",{className:a.a.ldsRoller,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})}},54:function(e,t,n){e.exports={AppWrapper:"App_AppWrapper__V62o8",AppContent:"App_AppContent__qt_pG"}},59:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return m}));var r=n(6),a=n.n(r),s=n(12),c=n(24),i=n(3),o=n(15),u="social-network-ts/profile_reducer/ADD_POST",l="social-network-ts/profile_reducer/SET_USER_PROFILE",d="social-network-ts/profile_reducer/SET_PROFILE_STATUS",p="social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS",f={posts:[{id:1,message:"\u041f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 (\u0438\u043b\u0438 \u0438\u0442\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435) \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u2013 \u044d\u0442\u043e...",likesCount:9},{id:2,message:"\u041a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435, \u0441\u0430\u043c\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u043c\u0438...",likesCount:19},{id:3,message:"\u0415\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c, \u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442...",likesCount:3}],newPostText:"",profileUser:null,profileStatus:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:(new Date).getTime(),message:t.newPostMessage,likesCount:19};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profileUser:t.profileUser});case d:return Object(i.a)(Object(i.a)({},e),{},{profileStatus:t.profileStatus});case p:return Object(i.a)(Object(i.a)({},e),{},{profileStatus:t.newStatus});default:return e}},b=function(e){return{type:u,newPostMessage:e}},O=function(e){return{type:d,profileStatus:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profileUser:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===(r=t.sent).data.resultCode&&n(O(r.data.status));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(24),a=n(3),s="social-network-ts/dialogs_reducer/ADD_MESSAGE",c={dialogs:[{id:1,name:"Nikita"},{id:2,name:"Masha"},{id:3,name:"Sasha"},{id:4,name:"Kirill"},{id:5,name:"Vasil"},{id:6,name:"Jon"}],messages:[{id:1,message:"Hi! how are you?"},{id:2,message:"Hi! How old are you?"},{id:3,message:"Hi! Where are you from?"},{id:4,message:"Hello! I don't need books"},{id:5,message:"How do you do?"},{id:6,message:"I'm fine"}],newMessageText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:(new Date).getTime(),message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}},o=function(e){return{type:s,newMessageBody:e}}},8:function(e,t,n){e.exports={AppNav:"Navbar_AppNav__2O-N-",item:"Navbar_item__36B1R",active:"Navbar_active__GyOf7"}},81:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return N})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return S}));var r=n(6),a=n.n(r),s=n(12),c=n(24),i=n(3),o=n(15),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="social-network-ts/users_reducer/FOLLOW",d="social-network-ts/users_reducer/UNFOLLOW",p="social-network-ts/users_reducer/SET_USERS",f="social-network-ts/users_reducer/SET_CURRENT_PAGE",j="social-network-ts/users_reducer/SET_TOTAL_USERS_COUNT",b="social-network-ts/users_reducer/TOGGLE_IS_FETCHING",O="social-network-ts/users_reducer/TOGGLE_IS_FOLLOWING_PROGRESS",g={users:[],pageSize:5,totalUserCount:100,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userID,"id",{followed:!1})});case p:return Object(i.a)(Object(i.a)({},e),{},{users:Object(c.a)(t.users)});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.page});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUserCount:t.totalCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case O:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.progress?[].concat(Object(c.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},m=function(e){return{type:l,userID:e}},v=function(e){return{type:d,userID:e}},x=function(e){return{type:f,page:e}},_=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:O,progress:e,userID:t}},N=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0)),n(x(e)),t.next=4,o.c.getUsers(e);case 4:r=t.sent,n(_(!1)),n((s=r.items,{type:p,users:s})),n((a=r.totalCount,{type:j,totalCount:a}));case 8:case"end":return t.stop()}var a,s}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,o.c.follow,m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,o.c.unFollow,v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},82:function(e,t,n){e.exports={news:"News_news__ZrF7U"}},83:function(e,t,n){e.exports={music:"Music_music__LLZrF"}},84:function(e,t,n){e.exports={settings:"Settings_settings__30q53"}},85:function(e,t,n){e.exports={findFriends:"FindFriends_findFriends__3u4U7"}},86:function(e,t,n){e.exports={ldsRoller:"Preloader_ldsRoller__2oF8r"}}},[[226,2,3]]]);
//# sourceMappingURL=main.9cb01d60.chunk.js.map