(this["webpackJsonplms-react-app"]=this["webpackJsonplms-react-app"]||[]).push([[32],{434:function(e,a,t){"use strict";t.r(a);var r=t(67),l=t.n(r),s=t(68),n=t(9),i=t(10),o=t(12),c=t(11),d=t(0),u=t.n(d),m=t(71),f=t(457),b=t(74),v=t(244),p=t(73),h=t(72),E=t(76),y=t(21),x=t(63),O=t.n(x),N=t(23),j=t(64),w=t(16),P=t(22),g=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).componentDidMount=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.props.user||!r.props.user.id){e.next=4;break}return e.next=3,r.setState({user_id:r.props.user.id});case 3:r.getClassesList();case 4:case"end":return e.stop()}}),e)}))),r.createNotification=function(e,a){switch(e){case"info":j.NotificationManager.info(a,"",5e3);break;case"success":j.NotificationManager.success(a,"",5e3);break;case"warning":j.NotificationManager.warning(a,"",5e3);break;case"error":j.NotificationManager.error(a,"",5e3)}},r.state={isLoading:!1,joinRowId:null,elem:{},showModal:!1,isValid:{value:!1,text:""},data:[],user_id:"",name:""},r}return Object(i.a)(t,[{key:"getClassesList",value:function(){var e=this;this.setState({isLoading:!0}),O.a.get("".concat(N.a.prod,"/api/users/").concat(this.state.user_id,"/class/list")).then((function(a){var t=a.data.data;e.setState({data:t,isLoading:!1})})).catch((function(a){e.setState({isLoading:!1}),console.log("Error: getting data from db ",a.response),e.createNotification("error","Error while Getting data from db")}))}},{key:"openEnrollModal",value:function(e){this.setState({showModal:!0,joinRowId:e.id,elem:e,name:e.name,isValid:{value:!1}})}},{key:"cancelEnroll",value:function(){this.setState({showModal:!1,isValid:{value:!1}})}},{key:"handleEnrollNow",value:function(){var e=this;this.setState({showModal:!1,isLoading:!0}),O.a.post("".concat(N.a.prod,"/api/users/class/enroll"),{userid:this.state.user_id,classid:this.state.joinRowId}).then((function(a){e.getClassesList()})).catch((function(a){console.log("Error: ",a.response),a.response&&a.response.status&&(400===a.response.status||500===a.response.status)?500===a.response.status?e.setState({isValid:{value:!0,text:"Internal Server Error",name:"server_error"},showModal:!0}):e.setState({isValid:{value:!0,text:a.response.data.msg,name:"server_error"},showModal:!0}):e.setState({isValid:{value:!0,text:"Unknown Error",name:"server_error"},showModal:!0})}))}},{key:"render",value:function(){var e=this;return u.a.createElement(y.a,null,this.state.isLoading&&u.a.createElement(w.a,null),u.a.createElement(m.a,null,this.state.showModal&&u.a.createElement(f.a,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Confirm Enroll Now")),u.a.createElement(f.a.Body,null,u.a.createElement("div",null,"Are you sure to want to enroll ",u.a.createElement("b",null,this.state.name),"?"),this.state.isValid.value&&"server_error"===this.state.isValid.name?u.a.createElement(b.a.Text,{style:{color:"red"}},this.state.isValid.text):null),u.a.createElement(f.a.Footer,null,u.a.createElement(v.a,{variant:"primary",onClick:function(){return e.handleEnrollNow()}},"OK"),u.a.createElement(v.a,{variant:"secondary",onClick:function(){return e.cancelEnroll()}},"Cancel"))),u.a.createElement(j.NotificationContainer,null),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement(h.a.Header,null,u.a.createElement(h.a.Title,{as:"h5"},"Enrolled Students")),u.a.createElement(h.a.Body,null,u.a.createElement(m.a,null,u.a.createElement(p.a,null,u.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Class Name"),u.a.createElement("th",null,"Description"),u.a.createElement("th",null,"Lecturer Name"),u.a.createElement("th",null,"Actions"))),u.a.createElement("tbody",null,this.state.data.map((function(a,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null,a.name),u.a.createElement("td",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"}},a.description),u.a.createElement("td",null,"".concat(a.first_name," ").concat(a.last_name)),u.a.createElement("td",null,u.a.createElement(v.a,{style:{width:"100%"},onClick:function(t){return e.openEnrollModal(a)},variant:"outline-primary"},"Enroll Now")))})))))))))))}}]),t}(u.a.Component);a.default=Object(P.b)((function(e){return{user:e.userDetails.user}}),null)(g)},58:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,s.default)(r)};var r,l=t(66),s=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},66:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,s,n){var i=l||"<<anonymous>>",o=n||r;if(null==t[r])return a?new Error("Required "+s+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,i,s,o].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},74:function(e,a,t){"use strict";var r=t(4),l=t(7),s=t(56),n=t.n(s),i=t(0),o=t.n(i),c=(t(58),t(1)),d=t.n(c),u={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},m=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,c=e.type,d=void 0===c?"valid":c,u=e.tooltip,m=void 0!==u&&u,f=Object(l.a)(e,["as","className","type","tooltip"]);return o.a.createElement(s,Object(r.a)({},f,{ref:a,className:n()(i,d+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u;var f=m,b=o.a.createContext({controlId:void 0}),v=t(57),p=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,u=e.type,m=void 0===u?"checkbox":u,f=e.isValid,p=void 0!==f&&f,h=e.isInvalid,E=void 0!==h&&h,y=e.isStatic,x=e.as,O=void 0===x?"input":x,N=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),j=Object(i.useContext)(b),w=j.controlId,P=j.custom?[c,"custom-control-input"]:[s,"form-check-input"],g=P[0],k=P[1];return s=Object(v.a)(g,k),o.a.createElement(O,Object(r.a)({},N,{ref:a,type:m,id:t||w,className:n()(d,s,p&&"is-valid",E&&"is-invalid",y&&"position-static")}))}));p.displayName="FormCheckInput";var h=p,E=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,u=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[s,"custom-control-label"]:[t,"form-check-label"],h=p[0],E=p[1];return t=Object(v.a)(h,E),o.a.createElement("label",Object(r.a)({},u,{ref:a,htmlFor:d||f,className:n()(c,t)}))}));E.displayName="FormCheckLabel";var y=E,x=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,u=void 0!==d&&d,m=e.disabled,p=void 0!==m&&m,E=e.isValid,x=void 0!==E&&E,O=e.isInvalid,N=void 0!==O&&O,j=e.feedbackTooltip,w=void 0!==j&&j,P=e.feedback,g=e.className,k=e.style,C=e.title,I=void 0===C?"":C,F=e.type,M=void 0===F?"checkbox":F,S=e.label,V=e.children,R=e.custom,L=e.as,_=void 0===L?"input":L,T=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),z="switch"===M||R,A=z?[c,"custom-control"]:[s,"form-check"],B=A[0],D=A[1];s=Object(v.a)(B,D);var G=Object(i.useContext)(b).controlId,H=Object(i.useMemo)((function(){return{controlId:t||G,custom:z}}),[G,z,t]),q=null!=S&&!1!==S&&!V,J=o.a.createElement(h,Object(r.a)({},T,{type:"switch"===M?"checkbox":M,ref:a,isValid:x,isInvalid:N,isStatic:!q,disabled:p,as:_}));return o.a.createElement(b.Provider,{value:H},o.a.createElement("div",{style:k,className:n()(g,s,z&&"custom-"+M,u&&s+"-inline")},V||o.a.createElement(o.a.Fragment,null,J,q&&o.a.createElement(y,{title:I},S),(x||N)&&o.a.createElement(f,{type:x?"valid":"invalid",tooltip:w},P))))}));x.displayName="FormCheck",x.Input=h,x.Label=y;var O=x,N=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,u=e.isValid,m=e.isInvalid,f=e.lang,p=e.as,h=void 0===p?"input":p,E=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=Object(i.useContext)(b),x=y.controlId,O=y.custom?[c,"custom-file-input"]:[s,"form-control-file"],N=O[0],j=O[1];return s=Object(v.a)(N,j),o.a.createElement(h,Object(r.a)({},E,{ref:a,id:t||x,type:"file",lang:f,className:n()(d,s,u&&"is-valid",m&&"is-invalid")}))}));N.displayName="FormFileInput";var j=N,w=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,u=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[s,"custom-file-label"]:[t,"form-file-label"],h=p[0],E=p[1];return t=Object(v.a)(h,E),o.a.createElement("label",Object(r.a)({},u,{ref:a,htmlFor:d||f,className:n()(c,t),"data-browse":u["data-browse"]}))}));w.displayName="FormFileLabel";var P=w,g=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,u=void 0!==d&&d,m=e.isValid,p=void 0!==m&&m,h=e.isInvalid,E=void 0!==h&&h,y=e.feedbackTooltip,x=void 0!==y&&y,O=e.feedback,N=e.className,w=e.style,g=e.label,k=e.children,C=e.custom,I=e.lang,F=e["data-browse"],M=e.as,S=void 0===M?"div":M,V=e.inputAs,R=void 0===V?"input":V,L=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),_=C?[c,"custom"]:[s,"form-file"],T=_[0],z=_[1];s=Object(v.a)(T,z);var A=Object(i.useContext)(b).controlId,B=Object(i.useMemo)((function(){return{controlId:t||A,custom:C}}),[A,C,t]),D=null!=g&&!1!==g&&!k,G=o.a.createElement(j,Object(r.a)({},L,{ref:a,isValid:p,isInvalid:E,disabled:u,as:R,lang:I}));return o.a.createElement(b.Provider,{value:B},o.a.createElement(S,{style:w,className:n()(N,s,C&&"custom-file")},k||o.a.createElement(o.a.Fragment,null,C?o.a.createElement(o.a.Fragment,null,G,D&&o.a.createElement(P,{"data-browse":F},g)):o.a.createElement(o.a.Fragment,null,D&&o.a.createElement(P,null,g),G),(p||E)&&o.a.createElement(f,{type:p?"valid":"invalid",tooltip:x},O))))}));g.displayName="FormFile",g.Input=j,g.Label=P;var k=g,C=(t(3),o.a.forwardRef((function(e,a){var t,s,c=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,m=e.size,f=e.htmlSize,p=e.id,h=e.className,E=e.isValid,y=void 0!==E&&E,x=e.isInvalid,O=void 0!==x&&x,N=e.plaintext,j=e.readOnly,w=e.custom,P=e.as,g=void 0===P?"input":P,k=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(i.useContext)(b).controlId,I=w?[d,"custom"]:[c,"form-control"],F=I[0],M=I[1];if(c=Object(v.a)(F,M),N)(s={})[c+"-plaintext"]=!0,t=s;else if("file"===u){var S;(S={})[c+"-file"]=!0,t=S}else if("range"===u){var V;(V={})[c+"-range"]=!0,t=V}else if("select"===g&&w){var R;(R={})[c+"-select"]=!0,R[c+"-select-"+m]=m,t=R}else{var L;(L={})[c]=!0,L[c+"-"+m]=m,t=L}return o.a.createElement(g,Object(r.a)({},k,{type:u,size:f,ref:a,readOnly:j,id:p||C,className:n()(h,t,y&&"is-valid",O&&"is-invalid")}))})));C.displayName="FormControl";var I=Object.assign(C,{Feedback:f}),F=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.children,d=e.controlId,u=e.as,m=void 0===u?"div":u,f=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(i.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(b.Provider,{value:p},o.a.createElement(m,Object(r.a)({},f,{ref:a,className:n()(s,t)}),c))}));F.displayName="FormGroup";var M=F,S=t(73),V=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,c=e.bsPrefix,d=e.column,u=e.srOnly,m=e.className,f=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(i.useContext)(b).controlId;c=Object(v.a)(c,"form-label");var E="col-form-label";"string"===typeof d&&(E=E+"-"+d);var y=n()(m,c,u&&"sr-only",d&&E);return f=f||h,d?o.a.createElement(S.a,Object(r.a)({as:"label",className:y,htmlFor:f},p)):o.a.createElement(s,Object(r.a)({ref:a,className:y,htmlFor:f},p))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var R=V,L=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,c=void 0===i?"small":i,d=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),o.a.createElement(c,Object(r.a)({},u,{ref:a,className:n()(s,t,d&&"text-muted")}))}));L.displayName="FormText";var _=L,T=o.a.forwardRef((function(e,a){return o.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=O.Input,T.Label=O.Label;var z=T,A=t(60),B=Object(A.a)("form-row"),D=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,i=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,m=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),o.a.createElement(u,Object(r.a)({},m,{ref:a,className:n()(i,c&&"was-validated",s&&t+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=B,D.Group=M,D.Control=I,D.Check=O,D.File=k,D.Switch=z,D.Label=R,D.Text=_;a.a=D},76:function(e,a,t){"use strict";var r=t(4),l=t(7),s=t(56),n=t.n(s),i=t(0),o=t.n(i),c=t(57),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.striped,d=e.bordered,u=e.borderless,m=e.hover,f=e.size,b=e.variant,v=e.responsive,p=Object(l.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(c.a)(t,"table"),E=n()(s,h,b&&h+"-"+b,f&&h+"-"+f,i&&h+"-striped",d&&h+"-bordered",u&&h+"-borderless",m&&h+"-hover"),y=o.a.createElement("table",Object(r.a)({},p,{className:E,ref:a}));if(v){var x=h+"-responsive";return"string"===typeof v&&(x=x+"-"+v),o.a.createElement("div",{className:x},y)}return y}));a.a=d}}]);
//# sourceMappingURL=32.704aaf32.chunk.js.map