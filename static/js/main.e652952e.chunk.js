(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(215)},20:function(e,t,a){"use strict";a.d(t,"b",function(){return r});var n=a(38),l=Object(n.b)({name:"main",initialState:{platform:"",isDesktop:!1,theme:"light",hasHeader:!1,infoUser:{name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}},reducers:{set:function(e,t){e[t.payload.key]=t.payload.value}}}),r=l.actions.set;t.a=l.reducer},214:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);a(163),a(188);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=a(9),o=a(38),u=a(20),m=Object(o.a)({reducer:{main:u.a}}),s=a(12),d=a.n(s),p=[{id:"home",hash:"home",panels:[{id:"base",hash:"/base"},{id:"placeholder",hash:"/placeholder"}]},{id:"map",hash:"map",panels:[{id:"base",hash:"/base"}]},{id:"profile",hash:"profile",panels:[{id:"base",hash:"/base"}]}],b=a(3),f=a(10),E=a.n(f),h=a(80),v=a(219);var k=function(){var e=Object(i.useSelector)(function(e){return e.main.theme}),t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(i.useDispatch)();return Object(n.useEffect)(function(){setTimeout(function(){c(!0)},1)},[]),l.a.createElement(b.i,null,l.a.createElement(b.d,{before:l.a.createElement(v.a,null),disabled:!0,after:r?l.a.createElement(b.A,{onChange:function(){return o(Object(u.b)({key:"theme",value:"dark"===e?"light":"dark"}))},"aria-label":"\u0422\u0451\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430"}):l.a.createElement(b.x,{size:"regular"})},"\u0422\u0451\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430"))},j=a(220),w=a(221),y=a(222);var O=Object(s.withRouter)(function(e){var t=e.router,a=Object(i.useSelector)(function(e){return e.main.hasHeader});return l.a.createElement(b.y,{fixed:!0,width:"252px",maxWidth:"252px",style:{marginLeft:12}},l.a.createElement(b.q,{id:"menuDesktop"},a&&l.a.createElement(b.r,null),l.a.createElement(b.i,null,l.a.createElement(b.d,{onClick:function(){return t.toView("home")},disabled:"home"===t.activeView,before:l.a.createElement(j.a,null),className:"home"===t.activeView?"activeViewCell":""},"\u041c\u0435\u0441\u0442\u0430"),l.a.createElement(b.d,{onClick:function(){return t.toView("map")},disabled:"map"===t.activeView,before:l.a.createElement(w.a,null),className:"map"===t.activeView?"activeViewCell":""},"\u041a\u0430\u0440\u0442\u0430"),l.a.createElement(b.d,{onClick:function(){return t.toView("profile")},disabled:"profile"===t.activeView,before:l.a.createElement(y.a,null),className:"profile"===t.activeView?"activeViewCell":""},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),l.a.createElement(k,null)))});var g=Object(s.withRouter)(function(e){var t=e.router;function a(e){var a=t.activeView;t.toView(e),e===a&&t.toHash("".concat(e,"/base"))}return l.a.createElement(b.B,{className:"tabbarStyle"},l.a.createElement(b.C,{selected:"home"===t.activeView,onClick:function(){return a("home")},text:"\u041c\u0435\u0441\u0442\u0430"},l.a.createElement(j.a,null)),l.a.createElement(b.C,{selected:"map"===t.activeView,onClick:function(){return a("map")},text:"\u041a\u0430\u0440\u0442\u0430"},l.a.createElement(w.a,null)),l.a.createElement(b.C,{"data-id":"profile",selected:"profile"===t.activeView,onClick:function(){return a("profile")},text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(y.a,null)))}),C=a(218),V=a(223),S=a(217),x=[{name:"VK Mini Apps",avatar:"https://sun9-1.userapi.com/impf/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg?size=800x800&quality=96&sign=fefc1a684879e75bd9d36b4ba2907310&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"},{name:"VK API",avatar:"https://sun2.is74.userapi.com/impf/c638629/v638629852/2afba/o-dvykjSIB4.jpg?size=600x600&quality=96&sign=553d78e3d9a15f06cacc3f421d9a4919&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"},{name:"VK Testers",avatar:"https://sun1.is74.userapi.com/impg/A1ovThuM8zEqmrM9JSCmQreQMma77TzS4GKnQg/KXYKrjN-gvs.jpg?size=1280x1280&quality=95&sign=65c063e8da218030ea2643df3414ece4&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"}];var z=Object(s.withRouter)(function(e){var t=e.nav,a=e.router,n=Object(i.useSelector)(function(e){return e.main.platform});return l.a.createElement(b.n,{nav:t,header:l.a.createElement(b.o,{left:n!==b.j&&l.a.createElement(b.t,{onClick:function(){return a.toBack()}},l.a.createElement(C.a,null)),right:n===b.j&&l.a.createElement(b.t,{onClick:function(){return a.toBack()}},l.a.createElement(V.a,null))},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),onClose:function(){return a.toBack()},settlingHeight:100},l.a.createElement(b.m,null,x.map(function(e,t){return l.a.createElement(b.d,{key:t,description:e.desc,before:l.a.createElement(b.c,{size:40,src:e.avatar}),onClick:function(){return a.toModal("botInfo")},asideContent:l.a.createElement(S.a,{fill:"#528bcc"})},e.name)})))});var D=Object(s.withRouter)(function(e){var t=e.nav,a=e.router,n=Object(i.useSelector)(function(e){return e.main.platform});return l.a.createElement(b.n,{nav:t,header:l.a.createElement(b.o,{left:n!==b.j&&l.a.createElement(b.t,{onClick:function(){return a.toBack()}},l.a.createElement(C.a,null)),right:n===b.j&&l.a.createElement(b.t,{onClick:function(){return a.toBack()}},l.a.createElement(V.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435"),onClose:function(){return a.toBack()},settlingHeight:100},l.a.createElement(b.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:l.a.createElement(b.c,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.a.createElement(b.m,null,l.a.createElement(b.d,null,l.a.createElement(b.k,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),l.a.createElement(b.d,null,l.a.createElement(b.k,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),l.a.createElement(b.d,null,l.a.createElement(b.k,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}),P=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,239))}),B=Object(n.lazy)(function(){return a.e(8).then(a.bind(null,240))}),q=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,237))}),H=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,238))}),I=Object(b.I)(function(e){var t=e.viewWidth,a=e.router,r=Object(i.useSelector)(function(e){return e.main}),c=Object(i.useDispatch)();c(Object(u.b)({key:"isDesktop",value:t>=3})),c(Object(u.b)({key:"platform",value:r.isDesktop?b.F:Object(b.H)()})),c(Object(u.b)({key:"hasHeader",value:!0!==r.isDesktop})),Object(n.useEffect)(function(){E.a.subscribe(function(e){var t=e.detail,a=t.type,n=t.data;"VKWebAppUpdateConfig"===a&&c(Object(u.b)({key:"theme",value:"space_gray"===n.scheme?"dark":"light"}))})},[]);var o=l.a.createElement(b.p,{activeModal:a.modal,onClose:function(){return a.toBack()}},l.a.createElement(z,{nav:"botsList"}),l.a.createElement(D,{nav:"botInfo"}));return l.a.createElement(b.e,{platform:r.platform,appearance:r.theme,isWebView:!0},l.a.createElement(b.b,null,l.a.createElement(b.z,{header:r.hasHeader&&l.a.createElement(b.r,{separator:!1}),style:{justifyContent:"center"}},l.a.createElement(b.y,{animate:!r.isDesktop,width:r.isDesktop?"740px":"100%",maxWidth:r.isDesktop?"740px":"100%"},l.a.createElement(b.g,{activeStory:a.activeView,tabbar:!r.isDesktop&&l.a.createElement(g,null)},l.a.createElement(b.G,{id:"home",activePanel:"route_modal"===a.activePanel?"base":a.activePanel,popout:a.popout,modal:o},l.a.createElement(b.q,{id:"base"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b.v,null)},l.a.createElement(P,null))),l.a.createElement(b.q,{id:"placeholder"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b.v,null)},l.a.createElement(B,null)))),l.a.createElement(b.G,{id:"map",activePanel:"route_modal"===a.activePanel?"base":a.activePanel,popout:a.popout,modal:o},l.a.createElement(b.q,{id:"base"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b.v,null)},l.a.createElement(q,null)))),l.a.createElement(b.G,{id:"profile",activePanel:"route_modal"===a.activePanel?"base":a.activePanel,popout:a.popout,modal:o},l.a.createElement(b.q,{id:"base"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b.v,null)},l.a.createElement(H,null)))))),r.isDesktop&&l.a.createElement(O,null))))},{viewWidth:!0}),K=Object(s.withRouter)(I);a(213),a(214);E.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(i.Provider,{store:m},l.a.createElement(b.a,null,l.a.createElement(d.a,{structure:p},l.a.createElement(K,null)))),document.getElementById("root")),Promise.all([a.e(6),a.e(7)]).then(a.bind(null,236)).then(function(e){e.default})}},[[162,1,2]]]);