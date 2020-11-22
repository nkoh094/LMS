(this["webpackJsonplms-react-app"]=this["webpackJsonplms-react-app"]||[]).push([[16],{424:function(e,a,t){"use strict";t.r(a);var n=t(67),s=t.n(n),r=t(68),l=t(9),i=t(10),o=t(12),c=t(11),d=t(0),u=t.n(d),m=t(71),f=t(457),b=t(244),v=t(73),p=t(74),h=t(72),w=t(76),E=t(21),k=t(63),y=t.n(k),O=t(23),x=t(64),g=t(16),j=t(22),N=t(82),M=t.n(N),C=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).componentDidMount=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.props&&n.props.user&&n.props.user.id&&n.props.match&&n.props.match.params&&n.props.match.params.id&&n.props.match.params.assign_id)){e.next=4;break}return e.next=3,n.setState({class_id:n.props.match.params.id,assign_id:n.props.match.params.assign_id});case 3:n.getSubmissionList();case 4:case"end":return e.stop()}}),e)}))),n.createNotification=function(e,a){switch(e){case"info":x.NotificationManager.info(a,"",5e3);break;case"success":x.NotificationManager.success(a,"",5e3);break;case"warning":x.NotificationManager.warning(a,"",5e3);break;case"error":x.NotificationManager.error(a,"",5e3)}},n.state={isLoading:!1,downloadRowId:null,marksRowId:null,elem:{},showModal:!1,showModalMarks:!1,handleCloseModal:!1,isValid:{value:!1,text:""},data:[],class_id:"",title:"",assignment:{},obtained_marks:0},n}return Object(i.a)(t,[{key:"openDownloadModal",value:function(e){this.setState({showModal:!0,downloadRowId:e.id,elem:e})}},{key:"openMarksModal",value:function(e){this.setState({showModalMarks:!0,marksRowId:e.id,elem:e})}},{key:"closeDownloadModal",value:function(){this.setState({showModal:!1})}},{key:"closeMarksModal",value:function(){this.setState({showModalMarks:!1})}},{key:"handleDownload",value:function(){var e=this;this.setState({showModal:!1,isLoading:!0}),y.a.get("".concat(O.a.prod,"/").concat(this.state.elem.file),{responseType:"blob"}).then((function(a){M()(a.data,"".concat(e.state.elem.user.u_id,"-").concat(e.state.elem.file)),e.setState({isLoading:!1})}))}},{key:"handleTextChange",value:function(e){this.setState({[e.name]:e.value})}},{key:"handleMarks",value:function(){var e=this,a=this.state,t=a.obtained_marks,n=a.assignment,s=a.marksRowId;t<0||t>n.total_marks?this.setState({isValid:{value:!0,text:"Please enter valid Marks",name:"obtained_marks"}}):(this.setState({isLoading:!0,showModalMarks:!1}),y.a.post("".concat(O.a.prod,"/api/class/assignment/submission/update"),{obtained_marks:t,submission_id:s}).then((function(a){e.setState({showModalMarks:!1}),e.getSubmissionList()})).catch((function(a){console.log("Error: ",a.response),a.response&&a.response.status&&(400===a.response.status||500===a.response.status)?500===a.response.status?e.setState({isValid:{value:!0,text:"Internal Server Error",name:"server_error"},showModalMarks:!0}):e.setState({isValid:{value:!0,text:a.response.data.msg,name:"server_error"},showModalMarks:!0}):e.setState({isValid:{value:!0,text:"Unknown Error",name:"server_error"},showModalMarks:!0})})))}},{key:"getSubmissionList",value:function(){var e=this;this.setState({isLoading:!0}),y.a.get("".concat(O.a.prod,"/api/class/assignment/").concat(this.state.assign_id,"/submission/list")).then((function(a){var t=a.data.data;e.setState({data:t,assignment:t.length?t[0].assignment:{},isLoading:!1})})).catch((function(a){e.setState({isLoading:!1}),console.log("Error: getting data from db ",a.response),e.createNotification("error","Error while Getting data from db")}))}},{key:"cancelDownload",value:function(){this.setState({showModal:!1})}},{key:"cancelMarks",value:function(){this.setState({showModalMarks:!1,isValid:{value:!1}})}},{key:"render",value:function(){var e=this;return u.a.createElement(E.a,null,this.state.isLoading&&u.a.createElement(g.a,null),u.a.createElement(m.a,null,this.state.showModal&&u.a.createElement(f.a,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Download Confirm")),u.a.createElement(f.a.Body,null,"Are you sure to want to download?"),u.a.createElement(f.a.Footer,null,u.a.createElement(b.a,{variant:"primary",onClick:function(){return e.handleDownload()}},"OK"),u.a.createElement(b.a,{variant:"secondary",onClick:function(){return e.cancelDownload()}},"Cancel"))),this.state.showModalMarks&&u.a.createElement(f.a,{show:this.state.showModalMarks,onHide:function(){return e.setState({showModalMarks:!1,isValid:{value:!1}})}},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Confirm Obtained Marks")),u.a.createElement(f.a.Body,null,u.a.createElement(m.a,null,u.a.createElement(v.a,{xs:12},u.a.createElement(p.a,null,u.a.createElement(p.a.Row,null,u.a.createElement(v.a,null,u.a.createElement(p.a.Group,{className:"mb-2",controlId:"formBasicEmail"},u.a.createElement(p.a.Label,null,"Obtained Marks"),u.a.createElement(p.a.Control,{type:"number",name:"obtained_marks",min:0,max:this.state.assignment.total_marks?this.state.assignment.total_marks:10,placeholder:"Obtained Marks",value:this.state.obtained_marks,className:this.state.isValid.value&&"obtained_marks"===this.state.isValid.name?"in-valid-input":"",onFocus:function(){return e.setState({isValid:{value:!1,text:""}})},onChange:function(a){return e.handleTextChange(a.target)}})))),u.a.createElement(p.a.Row,null,this.state.isValid.value?u.a.createElement(p.a.Text,{style:{color:"red"}},this.state.isValid.text):""))))),u.a.createElement(f.a.Footer,null,u.a.createElement(b.a,{variant:"primary",onClick:function(){return e.handleMarks()}},"Save"),u.a.createElement(b.a,{variant:"secondary",onClick:function(){return e.cancelMarks()}},"Cancel"))),u.a.createElement(x.NotificationContainer,null),u.a.createElement(v.a,null,u.a.createElement(h.a,null,u.a.createElement(h.a.Header,null,u.a.createElement(h.a.Title,{as:"h5"},"Submitted Assignments ",u.a.createElement("b",null,this.state.assignment.title?this.state.assignment.title:null))),u.a.createElement(h.a.Body,null,u.a.createElement(m.a,null,u.a.createElement(v.a,null,u.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"First Name"),u.a.createElement("th",null,"Last Name"),u.a.createElement("th",null,"U ID"),u.a.createElement("th",null,"Total Marks"),u.a.createElement("th",null,"Obtained Marks"),u.a.createElement("th",null,"Submission"))),u.a.createElement("tbody",null,this.state.data.map((function(a,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null,a.user.first_name),u.a.createElement("td",null,a.user.last_name),u.a.createElement("td",null,a.user.u_id),u.a.createElement("td",null,a.assignment.total_marks),u.a.createElement("td",null,a.obtained_marks),u.a.createElement("td",null,u.a.createElement(b.a,{style:{width:"100%"},onClick:function(t){return e.openDownloadModal(a)},variant:"primary"},"Download"),u.a.createElement("br",null),u.a.createElement(b.a,{style:{width:"100%"},onClick:function(t){return e.openMarksModal(a)},variant:"outline-primary"},"Add Marks")))})))))))))))}}]),t}(u.a.Component);a.default=Object(j.b)((function(e){return{user:e.userDetails.user}}),null)(C)},58:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=null;return a.forEach((function(e){if(null==s){var a=e.apply(void 0,t);null!=a&&(s=a)}})),s}return(0,r.default)(n)};var n,s=t(66),r=(n=s)&&n.__esModule?n:{default:n};e.exports=a.default},66:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,n,s,r,l){var i=s||"<<anonymous>>",o=l||n;if(null==t[n])return a?new Error("Required "+r+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,n,i,r,o].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},74:function(e,a,t){"use strict";var n=t(4),s=t(7),r=t(56),l=t.n(r),i=t(0),o=t.n(i),c=(t(58),t(1)),d=t.n(c),u={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},m=o.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,c=e.type,d=void 0===c?"valid":c,u=e.tooltip,m=void 0!==u&&u,f=Object(s.a)(e,["as","className","type","tooltip"]);return o.a.createElement(r,Object(n.a)({},f,{ref:a,className:l()(i,d+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u;var f=m,b=o.a.createContext({controlId:void 0}),v=t(57),p=o.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,u=e.type,m=void 0===u?"checkbox":u,f=e.isValid,p=void 0!==f&&f,h=e.isInvalid,w=void 0!==h&&h,E=e.isStatic,k=e.as,y=void 0===k?"input":k,O=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),x=Object(i.useContext)(b),g=x.controlId,j=x.custom?[c,"custom-control-input"]:[r,"form-check-input"],N=j[0],M=j[1];return r=Object(v.a)(N,M),o.a.createElement(y,Object(n.a)({},O,{ref:a,type:m,id:t||g,className:l()(d,r,p&&"is-valid",w&&"is-invalid",E&&"position-static")}))}));p.displayName="FormCheckInput";var h=p,w=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,c=e.className,d=e.htmlFor,u=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[r,"custom-control-label"]:[t,"form-check-label"],h=p[0],w=p[1];return t=Object(v.a)(h,w),o.a.createElement("label",Object(n.a)({},u,{ref:a,htmlFor:d||f,className:l()(c,t)}))}));w.displayName="FormCheckLabel";var E=w,k=o.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,u=void 0!==d&&d,m=e.disabled,p=void 0!==m&&m,w=e.isValid,k=void 0!==w&&w,y=e.isInvalid,O=void 0!==y&&y,x=e.feedbackTooltip,g=void 0!==x&&x,j=e.feedback,N=e.className,M=e.style,C=e.title,P=void 0===C?"":C,I=e.type,S=void 0===I?"checkbox":I,F=e.label,R=e.children,_=e.custom,L=e.as,V=void 0===L?"input":L,T=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),D="switch"===S||_,U=D?[c,"custom-control"]:[r,"form-check"],A=U[0],B=U[1];r=Object(v.a)(A,B);var z=Object(i.useContext)(b).controlId,H=Object(i.useMemo)((function(){return{controlId:t||z,custom:D}}),[z,D,t]),G=null!=F&&!1!==F&&!R,q=o.a.createElement(h,Object(n.a)({},T,{type:"switch"===S?"checkbox":S,ref:a,isValid:k,isInvalid:O,isStatic:!G,disabled:p,as:V}));return o.a.createElement(b.Provider,{value:H},o.a.createElement("div",{style:M,className:l()(N,r,D&&"custom-"+S,u&&r+"-inline")},R||o.a.createElement(o.a.Fragment,null,q,G&&o.a.createElement(E,{title:P},F),(k||O)&&o.a.createElement(f,{type:k?"valid":"invalid",tooltip:g},j))))}));k.displayName="FormCheck",k.Input=h,k.Label=E;var y=k,O=o.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,u=e.isValid,m=e.isInvalid,f=e.lang,p=e.as,h=void 0===p?"input":p,w=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(i.useContext)(b),k=E.controlId,y=E.custom?[c,"custom-file-input"]:[r,"form-control-file"],O=y[0],x=y[1];return r=Object(v.a)(O,x),o.a.createElement(h,Object(n.a)({},w,{ref:a,id:t||k,type:"file",lang:f,className:l()(d,r,u&&"is-valid",m&&"is-invalid")}))}));O.displayName="FormFileInput";var x=O,g=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,c=e.className,d=e.htmlFor,u=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[r,"custom-file-label"]:[t,"form-file-label"],h=p[0],w=p[1];return t=Object(v.a)(h,w),o.a.createElement("label",Object(n.a)({},u,{ref:a,htmlFor:d||f,className:l()(c,t),"data-browse":u["data-browse"]}))}));g.displayName="FormFileLabel";var j=g,N=o.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,u=void 0!==d&&d,m=e.isValid,p=void 0!==m&&m,h=e.isInvalid,w=void 0!==h&&h,E=e.feedbackTooltip,k=void 0!==E&&E,y=e.feedback,O=e.className,g=e.style,N=e.label,M=e.children,C=e.custom,P=e.lang,I=e["data-browse"],S=e.as,F=void 0===S?"div":S,R=e.inputAs,_=void 0===R?"input":R,L=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),V=C?[c,"custom"]:[r,"form-file"],T=V[0],D=V[1];r=Object(v.a)(T,D);var U=Object(i.useContext)(b).controlId,A=Object(i.useMemo)((function(){return{controlId:t||U,custom:C}}),[U,C,t]),B=null!=N&&!1!==N&&!M,z=o.a.createElement(x,Object(n.a)({},L,{ref:a,isValid:p,isInvalid:w,disabled:u,as:_,lang:P}));return o.a.createElement(b.Provider,{value:A},o.a.createElement(F,{style:g,className:l()(O,r,C&&"custom-file")},M||o.a.createElement(o.a.Fragment,null,C?o.a.createElement(o.a.Fragment,null,z,B&&o.a.createElement(j,{"data-browse":I},N)):o.a.createElement(o.a.Fragment,null,B&&o.a.createElement(j,null,N),z),(p||w)&&o.a.createElement(f,{type:p?"valid":"invalid",tooltip:k},y))))}));N.displayName="FormFile",N.Input=x,N.Label=j;var M=N,C=(t(3),o.a.forwardRef((function(e,a){var t,r,c=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,m=e.size,f=e.htmlSize,p=e.id,h=e.className,w=e.isValid,E=void 0!==w&&w,k=e.isInvalid,y=void 0!==k&&k,O=e.plaintext,x=e.readOnly,g=e.custom,j=e.as,N=void 0===j?"input":j,M=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(i.useContext)(b).controlId,P=g?[d,"custom"]:[c,"form-control"],I=P[0],S=P[1];if(c=Object(v.a)(I,S),O)(r={})[c+"-plaintext"]=!0,t=r;else if("file"===u){var F;(F={})[c+"-file"]=!0,t=F}else if("range"===u){var R;(R={})[c+"-range"]=!0,t=R}else if("select"===N&&g){var _;(_={})[c+"-select"]=!0,_[c+"-select-"+m]=m,t=_}else{var L;(L={})[c]=!0,L[c+"-"+m]=m,t=L}return o.a.createElement(N,Object(n.a)({},M,{type:u,size:f,ref:a,readOnly:x,id:p||C,className:l()(h,t,E&&"is-valid",y&&"is-invalid")}))})));C.displayName="FormControl";var P=Object.assign(C,{Feedback:f}),I=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.children,d=e.controlId,u=e.as,m=void 0===u?"div":u,f=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(i.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(b.Provider,{value:p},o.a.createElement(m,Object(n.a)({},f,{ref:a,className:l()(r,t)}),c))}));I.displayName="FormGroup";var S=I,F=t(73),R=o.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,c=e.bsPrefix,d=e.column,u=e.srOnly,m=e.className,f=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(i.useContext)(b).controlId;c=Object(v.a)(c,"form-label");var w="col-form-label";"string"===typeof d&&(w=w+"-"+d);var E=l()(m,c,u&&"sr-only",d&&w);return f=f||h,d?o.a.createElement(F.a,Object(n.a)({as:"label",className:E,htmlFor:f},p)):o.a.createElement(r,Object(n.a)({ref:a,className:E,htmlFor:f},p))}));R.displayName="FormLabel",R.defaultProps={column:!1,srOnly:!1};var _=R,L=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,c=void 0===i?"small":i,d=e.muted,u=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),o.a.createElement(c,Object(n.a)({},u,{ref:a,className:l()(r,t,d&&"text-muted")}))}));L.displayName="FormText";var V=L,T=o.a.forwardRef((function(e,a){return o.a.createElement(y,Object(n.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=y.Input,T.Label=y.Label;var D=T,U=t(60),A=Object(U.a)("form-row"),B=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,i=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,m=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),o.a.createElement(u,Object(n.a)({},m,{ref:a,className:l()(i,c&&"was-validated",r&&t+"-inline")}))}));B.displayName="Form",B.defaultProps={inline:!1},B.Row=A,B.Group=S,B.Control=P,B.Check=y,B.File=M,B.Switch=D,B.Label=_,B.Text=V;a.a=B},76:function(e,a,t){"use strict";var n=t(4),s=t(7),r=t(56),l=t.n(r),i=t(0),o=t.n(i),c=t(57),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.striped,d=e.bordered,u=e.borderless,m=e.hover,f=e.size,b=e.variant,v=e.responsive,p=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(c.a)(t,"table"),w=l()(r,h,b&&h+"-"+b,f&&h+"-"+f,i&&h+"-striped",d&&h+"-bordered",u&&h+"-borderless",m&&h+"-hover"),E=o.a.createElement("table",Object(n.a)({},p,{className:w,ref:a}));if(v){var k=h+"-responsive";return"string"===typeof v&&(k=k+"-"+v),o.a.createElement("div",{className:k},E)}return E}));a.a=d},82:function(e,a){e.exports=function(e,a,t,n){var s=new Blob("undefined"!==typeof n?[n,e]:[e],{type:t||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(s,a);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(s):window.webkitURL.createObjectURL(s),l=document.createElement("a");l.style.display="none",l.href=r,l.setAttribute("download",a),"undefined"===typeof l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(r)}),200)}}}}]);
//# sourceMappingURL=16.cb89bb6a.chunk.js.map