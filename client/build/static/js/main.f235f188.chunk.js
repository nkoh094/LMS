(this["webpackJsonplms-react-app"]=this["webpackJsonplms-react-app"]||[]).push([[9],{16:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},21:function(e,n,t){"use strict";n.a=function(e){return e.children}},23:function(e,n,t){"use strict";n.a={prod:"",REACT_APP_FACEBOOK_APP_ID:"797442954129952",defaultPath:"/dashboard",basename:"",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},36:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),i=t.n(c),o=t(22),u=t(54),l=t(9),s=t(10),d=t(12),m=t(11),p=t(52),f=t(55),O=t(30),b=t.n(O),v=(t(45),t(16)),g=t(21),h=t(51),E=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),j=Object(h.a)(E),y=r.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(8),t.e(36)]).then(t.bind(null,455))})),L=[{path:"/login",exact:!0,name:"Signin 1",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(15),t.e(8),t.e(44)]).then(t.bind(null,456))}))},{path:"/signup",exact:!0,name:"Signup 1",component:y}],T=b()({loader:function(){return Promise.all([t.e(4),t.e(11),t.e(13)]).then(t.bind(null,459))},loading:v.a}),w=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=L.map((function(e,n){return e.component?r.a.createElement(p.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null}));return r.a.createElement(g.a,null,r.a.createElement(j,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(v.a,null)},r.a.createElement(f.a,null,e,r.a.createElement(p.a,{path:"/",component:T})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(17),k=t(2),_=t(6),A=t(23),S=Object(k.a)(Object(k.a)({isOpen:[],isTrigger:[]},A.a),{},{isFullScreen:!1}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case _.b:return Object(k.a)(Object(k.a)({},e),{},{collapseMenu:!e.collapseMenu});case _.c:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),-1===r&&(a=[].concat(Object(C.a)(a),[n.menu.id]),t=[].concat(Object(C.a)(t),[n.menu.id]))}else{a=e.isOpen;var c=e.isTrigger.indexOf(n.menu.id);t=-1===c?[n.menu.id]:[],a=-1===c?[n.menu.id]:[]}return Object(k.a)(Object(k.a)({},e),{},{isOpen:a,isTrigger:t});case _.g:return Object(k.a)(Object(k.a)({},e),{},{isOpen:a,isTrigger:t});case _.f:if("sub"===n.menu.type){a=e.isOpen;var i=(t=e.isTrigger).indexOf(n.menu.id);return i>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),Object(k.a)(Object(k.a)({},e),{},{isOpen:a,isTrigger:t})}return Object(k.a)({},e);case _.d:return Object(k.a)(Object(k.a)({},e),{},{isFullScreen:!e.isFullScreen});case _.e:return Object(k.a)(Object(k.a)({},e),{},{isFullScreen:!1});case _.a:return Object(k.a)(Object(k.a)({},e),{},{layout:n.layout});default:return e}},x=(t(47),t(35),t(8)),F={},I=t(32),B=t.n(I),P=Object(x.b)({reducer:N,userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SIGN_IN":return Object(k.a)(Object(k.a)({},e),{},{user:n.payload});case"SIGN_OUT":return Object(k.a)(Object(k.a)({},e),{},{user:F});default:return e}}}),U=(window.devToolsExtension?window.devToolsExtension()(x.c):x.c)(P),D=r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:U},r.a.createElement(u.a,null,r.a.createElement(w,null))),r.a.createElement(B.a,{pageId:"406156429546294",appId:"797442954129952"}));i.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"g",(function(){return u})),t.d(n,"f",(function(){return l}));var a="COLLAPSE_MENU",r="COLLAPSE_TOGGLE",c="FULL_SCREEN",i="FULL_SCREEN_EXIT",o="CHANGE_LAYOUT",u="NAV_CONTENT_LEAVE",l="NAV_COLLAPSE_LEAVE"}},[[36,10,12]]]);
//# sourceMappingURL=main.f235f188.chunk.js.map