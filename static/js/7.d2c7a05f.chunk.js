(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[7],{393:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(155);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},420:function(t,e,n){"use strict";n.r(e);var r=n(73),a=n(393),c=n(127),s=n(0),i=n(1),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),u=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(l,{})]})},j=function(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(s.useEffect)((function(){o.addEventListener("message",(function(t){var e=JSON.parse(t.data);c((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))}))}))}),[]),Object(i.jsx)("div",{style:{height:"400px",overflowY:"auto"},children:n.map((function(t,e){return Object(i.jsx)(b,{message:t},e)}))})},b=function(t){var e=t.message;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:e.photo,alt:"avatar",style:{width:"30px"}}),Object(i.jsx)("b",{children:e.userName}),Object(i.jsx)("br",{}),e.message,Object(i.jsx)("hr",{})]})},l=function(){var t=Object(s.useState)(""),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("textarea",{onChange:function(t){return r(t.currentTarget.value)},value:n}),Object(i.jsx)("div",{children:Object(i.jsx)(c.a,{onClick:function(){n&&(o.send(n),r(""))},children:"Send"})})]})};e.default=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(u,{})})}}}]);
//# sourceMappingURL=7.d2c7a05f.chunk.js.map