(this.webpackJsonpquizer=this.webpackJsonpquizer||[]).push([[0],{235:function(e,t,a){e.exports=a(444)},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){e.exports=a.p+"static/media/search.3ab2148d.svg"},250:function(e,t,a){e.exports=a.p+"static/media/eye.1216f5ec.svg"},251:function(e,t,a){e.exports=a.p+"static/media/add.008d57d6.svg"},252:function(e,t,a){},253:function(e,t){e.exports="data:image/gif;base64,R0lGODlhKwALAPEAAAAA/////3x8/v///yH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAAKAAEALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQACgACACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkEAAoAAwAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA="},256:function(e,t){},258:function(e,t){},300:function(e,t){},301:function(e,t){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){},439:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(221),o=a.n(c),i=(a(240),a(25)),s=(a(241),a(24)),u=(a(242),function(){return r.a.createElement("div",{className:"home-container scales-bg"},r.a.createElement("div",{className:"home-header"},r.a.createElement("h1",{className:"home-header-logo"},"Q")),r.a.createElement("div",{className:"home-highlights"},r.a.createElement("div",{className:"home-highlights-heading"},r.a.createElement("h1",{className:"home-highlights-heading-text"},"Quizer")),r.a.createElement(s.b,{to:"/board",className:"home-highlights-subheading"},"Explore Quizzes"),r.a.createElement(s.b,{to:"/create",className:"home-highlights-subheading"},"Create A Quiz")))}),l=a(33),m=a(12),p=(a(247),function(e){return r.a.createElement("div",{className:"quiz-card"},r.a.createElement("h1",{className:"quiz-card-title-image"},e.title[0]),r.a.createElement("div",{className:"quiz-card-info"},r.a.createElement("p",{className:"quiz-card-info-main"},e.title),r.a.createElement("p",{className:"quiz-card-info-sub"},"Questions: ",e.questions),r.a.createElement("p",{className:"quiz-card-info-sub"},"views: ",e.views),r.a.createElement("p",{className:"quiz-card-info-sub"},"Author: ",e.author)))}),d=a(29),f=a.n(d),b=a(57),h="https://quizeer.herokuapp.com/",E=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"q-off",n=void 0,e.prev=2,e.next=5,fetch(h+"api/all?page=".concat(t,"&flag=").concat(a));case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",void 0);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"",n=void 0,e.prev=2,e.next=5,fetch("".concat(h,"api/one/").concat(t,"?flag=").concat(a));case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",void 0);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.prev=1,e.next=4,fetch("".concat(h,"api/add"),{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-type":"application/json"},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.prev=1,e.next=4,fetch("".concat(h,"api/add"),{method:"PATCH",headers:{Accept:"application/json, text/plain, */*","Content-type":"application/json"},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.prev=1,e.next=4,fetch("".concat(h,"api/"),{method:"DELETE",headers:{Accept:"application/json, text/plain, */*","Content-type":"application/json"},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.message;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(f.a.mark((function e(t,a,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=void 0,e.prev=1,e.next=4,fetch("".concat(h).concat(t),{method:a,headers:{Accept:"application/json, text/plain, */*","Content-type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r=e.t0.message;case 13:return console.log(r),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n,r,c,o,i=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:"q-off",r=void 0,c="",a>=0&&(c="&page=".concat(a)),e.prev=4,e.next=7,fetch("".concat(h,"api/search?q=").concat(t,"&flag=").concat(n).concat(c));case 7:return o=e.sent,e.next=10,o.json();case 10:r=e.sent,e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(4),e.abrupt("return",void 0);case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,a){return e.apply(this,arguments)}}(),O=(a(248),function(e){return r.a.createElement("div",{className:"navbar"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",{className:"navbar-logo"},"Quizer")),r.a.createElement("div",{className:"navbar-search"},r.a.createElement("input",{className:"navbar-search-field",placeholder:"Find A Quiz...",value:e.searchText,onChange:function(t){return e.setSearchText(t.target.value)}}),r.a.createElement("img",{className:"navbar-search-icon",src:a(249),alt:"Search",onClick:function(){N(e.searchText).then((function(t){t&&(t.msg||t.err||e.setSearchData(t))}))}})),r.a.createElement("div",{className:"navbar-options"},r.a.createElement("img",{className:"navbar-options-icon",src:a(250),alt:"Change Theme",onClick:e.changeTheme}),r.a.createElement(s.b,{to:"/create"},r.a.createElement("img",{className:"navbar-options-icon",src:a(251),alt:"Add A Quiz"}))))}),x=(a(252),function(){var e=Object(n.useState)((function(){return"blue"})),t=Object(m.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)((function(){return[]})),u=Object(m.a)(i,2),d=u[0],f=u[1],b=Object(n.useState)((function(){return"Loading..."})),h=Object(m.a)(b,2),v=h[0],g=h[1],q=Object(n.useState)((function(){return 0})),z=Object(m.a)(q,2),A=z[0],N=z[1],x=Object(n.useState)((function(){return!1})),y=Object(m.a)(x,2),j=y[0],w=y[1],C=Object(n.useState)((function(){return""})),S=Object(m.a)(C,2),k=S[0],T=S[1],Q=Object(n.useState)((function(){})),L=Object(m.a)(Q,2),D=L[0],P=L[1],B=Object(n.useState)((function(){})),I=Object(m.a)(B,2),F=I[0],H=I[1];Object(n.useEffect)((function(){j||(g("Loading..."),E(A).then((function(e){e?e.msg?(w(!0),g("")):e.err?(w(!0),g(e.err)):(f((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))})),g("")):g((function(){return"Network Error, Please Check Your Internet Connection And Refresh The Page"}))})))}),[A]),Object(n.useEffect)((function(){F&&(D||P(d),f(F))}),[F]),Object(n.useEffect)((function(){k||D&&(f(D),P(void 0),H(void 0))}),[k]);var M=void 0;return M="Loading..."===v?r.a.createElement("img",{className:"quiz-board-loading-gif",src:a(253),alt:"Loading..."}):r.a.createElement("div",{className:"quiz-board-loading"},v),r.a.createElement("div",{className:"quiz-board"},r.a.createElement(O,{changeTheme:function(){o((function(e){return"blue"===e?"white":"blue"}))},setSearchData:H,searchText:k,setSearchText:T,setQuizesData:f}),r.a.createElement("div",{className:"quiz-cards ".concat(c,"-quiz-cards"),onScroll:function(e){if(!j){var t=e.target,a=t.scrollHeight,n=t.scrollTop;a-t.clientHeight===n&&N((function(e){return e+1}))}}},d&&d.map((function(e){return r.a.createElement(s.b,{to:"/".concat(e._id),key:e._id},r.a.createElement(p,{title:e.title,questions:e.questions.length,views:e.views,author:e.author}))})),M))}),y=a(36),j=["0","a","b","c","d","e","f"],w=y.d.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center",fontFamily:"Helvetica"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,margin:15,marginLeft:5,fontFamily:"Helvetica"},text:{marginTop:10,marginLeft:20,marginBottom:5,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},answer:{fontSize:20,textAlign:"center",textDecoration:"underline",fontFamily:"Times-Roman",margin:45}}),C=function(e){var t=e.data;return r.a.createElement(y.a,null,r.a.createElement(y.c,{style:w.body},r.a.createElement(y.e,{style:w.header,fixed:!0},"~ Quizer | Quizeer.herokuapp.com~"),r.a.createElement(y.e,{style:w.title},t.title),r.a.createElement(y.e,{style:w.author},"By ",t.author),t.questions.map((function(e,t,a){return e.map((function(e,a){return 0===a?r.a.createElement(y.e,{style:w.subtitle,key:a},"".concat(t+1,". ").concat(e)):r.a.createElement(y.e,{style:w.text,key:a},"".concat(j[a],". ").concat(e[0]))}))})),r.a.createElement(y.e,{style:w.answer},"Answers"),t.questions.map((function(e,t,a){return r.a.createElement(y.e,{style:w.text,key:t},t+1+". ",e.map((function(e,t){if(0!==t&&e[1])return j[t]})).filter((function(e){return void 0!==e})).join(", "))}))))},S=(a(434),function(e){var t=e.status,a=e.handleCancel,c=e.handleSubmit,o=Object(n.useState)((function(){return!1})),i=Object(m.a)(o,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"quiz-pass-bg"},r.a.createElement("div",{className:"quiz-pass-cont"},r.a.createElement("p",null,"Enter Password"),r.a.createElement("input",{type:s?"text":"password",placeholder:"Password",id:"password-box-input"}),r.a.createElement("p",{className:"quiz-pass-status"},t||"Waiting For You To Submit..."),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:a},"Cancel"),r.a.createElement("button",{type:"button",onClick:function(){u(!s)}},"Show"),r.a.createElement("button",{type:"button",onClick:function(){return c(document.getElementById("password-box-input").value)}},"Submit"))))}),k=(a(435),function(e){var t=e.quizInfo,a=e.handleStartClick,c=e.history,o=Object(n.useState)((function(){return!1})),i=Object(m.a)(o,2),u=i[0],l=i[1],p=Object(n.useState)((function(){return"Enter Password To Delete"})),d=Object(m.a)(p,2),f=d[0],b=d[1];return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(S,{handleCancel:function(){return l(!1)},handleSubmit:function(e){z({_id:t._id,_password:e}).then((function(e){e?e.err?b(e.err):(b("Quiz Deleted Succesfully"),c.push("/board")):b("Network Error, Please Check Your Internet Connection")}))},status:f}),r.a.createElement("div",{className:"quiz-info doodles-bg"},r.a.createElement("p",{className:"quiz-info-text-main"},t.title),r.a.createElement("div",{className:"quiz-info-subs"},r.a.createElement("p",{className:"quiz-info-text-sub"},"Qustions: ",t.questions.length),r.a.createElement("p",{className:"quiz-info-text-sub"},"Views: ",t.views),r.a.createElement("p",{className:"quiz-info-text-sub"},"Author: ",t.author),r.a.createElement("p",{className:"quiz-info-text-sub"},new Date(t.date).toLocaleString())),r.a.createElement("div",{className:"quiz-info-btns"},r.a.createElement(s.b,{to:"/board"},r.a.createElement("button",{type:"button",className:"quiz-info-btn"},"Go Back")),r.a.createElement("button",{type:"button",onClick:function(){return l(!0)},className:"quiz-info-btn"},"Delete"),r.a.createElement(s.b,{to:{pathname:"/create",qData:t}},r.a.createElement("button",{type:"button",className:"quiz-info-btn",onClick:function(){return!0}},"Edit")),r.a.createElement("button",{type:"button",className:"quiz-info-btn",onClick:a},"Start"),r.a.createElement(y.b,{document:r.a.createElement(C,{data:t}),fileName:"MyDoc.pdf",className:"quiz-info-btn",style:{textAlign:"center",lineHeight:"2.5em"}},"PDF"))))}),T=(a(436),function(e){var t=e.message;return r.a.createElement("div",{className:"bad-page-cont tornado-bg"},r.a.createElement("h1",{className:"bad-page-text"},t))}),Q=(a(437),function(e){return r.a.createElement("div",{className:"quiz-score-bg doodles-bg"},r.a.createElement("div",{className:"quiz-score-cont"},r.a.createElement("h1",{className:"quiz-score-title"},e.title),r.a.createElement("div",{className:"quiz-score-boxes"},r.a.createElement("div",{className:"quiz-score-box"},r.a.createElement("p",{className:"quiz-score-box-text"},"Total"),r.a.createElement("p",{className:"quiz-score-box-num"},e.questionNo)),r.a.createElement("div",{className:"quiz-score-box"},r.a.createElement("p",{className:"quiz-score-box-text"},"Right"),r.a.createElement("p",{className:"quiz-score-box-num"},e.score)),r.a.createElement("div",{className:"quiz-score-box"},r.a.createElement("p",{className:"quiz-score-box-text"},"Wrong"),r.a.createElement("p",{className:"quiz-score-box-num"},e.questionNo-e.score)),r.a.createElement("div",{className:"quiz-score-box"},r.a.createElement("p",{className:"quiz-score-box-text"},"Percentage"),r.a.createElement("p",{className:"quiz-score-box-num"},Math.floor(e.score/e.questionNo*100)+"%"))),r.a.createElement("div",{className:"quiz-score-btns"},r.a.createElement(s.b,{to:"/board"},r.a.createElement("button",{type:"button",className:"quiz-score-btn"},"More Quizzes")),r.a.createElement("button",{type:"button",className:"quiz-score-btn",onClick:e.handleReplayClick},"Replay"))))}),L=(a(438),function(e){var t=e.history,a=e.match;Object(n.useEffect)((function(){a.params.id&&v(a.params.id).then((function(e){e?e.err?H("".concat(a.params.id," is not a vaild id")):(console.log(e),p(e)):H("Network Error, Please Make Sure You Have An Internet Connection.")}))}),[]);var c=function(e){x((function(t){return t<e-1?(function(){var e=document.querySelector(".quiz-play-options").children;Array.prototype.forEach.call(e,(function(e){e.classList.remove("quiz-play-option-right"),e.classList.remove("quiz-play-option-wrong")}))}(),t+1):(z((function(){return!0})),t)}))},o=Object(n.useState)((function(){})),i=Object(m.a)(o,2),u=i[0],p=i[1],d=Object(n.useState)((function(){return!0})),f=Object(m.a)(d,2),b=f[0],h=f[1],E=Object(n.useState)((function(){return!1})),g=Object(m.a)(E,2),q=g[0],z=g[1],A=Object(n.useState)((function(){return 0})),N=Object(m.a)(A,2),O=N[0],x=N[1],y=Object(n.useState)((function(){return 0})),j=Object(m.a)(y,2),w=j[0],C=j[1],S=Object(n.useState)((function(){return!1})),L=Object(m.a)(S,2),D=L[0],P=L[1],B=Object(n.useState)((function(){return"Loading..."})),I=Object(m.a)(B,2),F=I[0],H=I[1];return u?b?r.a.createElement(k,{quizInfo:u,handleStartClick:function(){h((function(){return!1}))},history:t}):q?r.a.createElement(Q,{title:u.title,score:w,questionNo:u.questions.length,handleReplayClick:function(){z(!1),C(0),x(0)}}):r.a.createElement("div",{className:"quiz-play-cont doodles-bg"},r.a.createElement("div",{className:"quiz-play"},r.a.createElement("p",{className:"quiz-play-question"},u.questions[O][0]),r.a.createElement("div",{className:"quiz-play-options",onClick:function(e){return function(e){var t=Object(l.a)(u.questions[O]);t.splice(0,1);var a=!1,n=void 0;n="P"===e.tagName?e.parentElement.children:e.children,Array.prototype.some.call(n,(function(e){(e.classList.contains("quiz-play-option-right")||e.classList.contains("quiz-play-option-wrong"))&&(a=!0)}));var r=t.find((function(t){return t[0]===e.innerHTML}));"P"!==e.tagName||a||(r&&(r[1]?(C((function(e){return e+1})),e.classList.add("quiz-play-option-right")):e.classList.add("quiz-play-option-wrong")),P(!0))}(e.target)}},u.questions[O].map((function(e,t,a){return t>0&&t<a.length?r.a.createElement("p",{className:"quiz-play-option",key:t},e):null}))),r.a.createElement("div",{className:"quiz-play-footer"},r.a.createElement(s.b,{to:"/board"},r.a.createElement("button",{className:"quiz-play-footer-btn"},"Cancel")),r.a.createElement("p",{className:"quiz-play-footer-text"},"Question ",O+1," out of ",u.questions.length),r.a.createElement("button",{className:"quiz-play-footer-btn",onClick:function(){D&&(c(u.questions.length),P(!1))}},"Next")))):r.a.createElement(T,{message:F})}),D=a(51),P=(a(439),function(e){var t=e.message,a=e.onAnime;return Object(n.useEffect)((function(){var e=document.querySelector(".alert-box-text");if(t){a(!0),e.classList.add("fade"),e.classList.remove("display-off");setTimeout((function(){e.classList.add("display-off"),a(!1)}),4e3)}return function(){e.classList.remove("fade")}}),[t]),r.a.createElement("h1",{className:"alert-box-text display-off"},t)}),B=(a(440),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"quiz-create-info-bg doodles-bg"},r.a.createElement("form",{className:"quiz-create-info-cont",onSubmit:function(t){t.preventDefault();var a=new FormData(t.target),n=void 0;e.qData._id?(e.qData.password=a.get("password"),e.qData.title=a.get("title"),e.qData.author=a.get("author"),n=e.qData):n={title:a.get("title"),author:a.get("author"),password:a.get("password"),plays:0,questions:[["Question 1",["Yes",!0],["No",!1]]]},e.setQuizData(n),e.setOptions(n.questions[0]),e.disappear(!1)}},r.a.createElement("h1",{className:"quiz-create-info-title"},"QUIZER"),r.a.createElement("div",{className:"quiz-create-info-label-cont"},r.a.createElement("label",{className:"quiz-create-info-label"},r.a.createElement("p",null,"Title"),r.a.createElement("input",{name:"title",type:"text",placeholder:"Quiz Title",autoComplete:"off",required:!0,maxLength:"50",defaultValue:e.qData.title})),r.a.createElement("label",{className:"quiz-create-info-label"},r.a.createElement("p",null,"Name"),r.a.createElement("input",{name:"author",type:"text",placeholder:"Your Name",autoComplete:"off",required:!0,maxLength:"30",defaultValue:e.qData.author})),r.a.createElement("label",{className:"quiz-create-info-label"},r.a.createElement("p",null,"Password"),r.a.createElement("input",{name:"password",type:"text",placeholder:"Quiz Password",autoComplete:"off",required:!0,minLength:"4",maxLength:"10"})),r.a.createElement("div",{className:"quiz-create-info-btns"},r.a.createElement("button",{type:"reset",className:"quiz-create-info-btn"},"Reset"),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"reset",className:"quiz-create-info-btn"},"Cancel")),r.a.createElement("button",{type:"submit",className:"quiz-create-info-btn"},"Create"))))))}),I=(a(441),function(e){return r.a.createElement("div",{className:"quiz-create-option-box-cont"},r.a.createElement("textarea",{maxLength:"80",className:"quiz-create-textarea",placeholder:"Type An Option",spellCheck:"false",value:e.text,onChange:function(t){return e.handleInput(e.index,t.target.value,!1)}}),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return e.handleRight(!e.isRight,e.index)},className:"quiz-create-option-box-cont-btn ".concat(e.isRight?"quiz-create-option-box-right":"")},"Right"),r.a.createElement("button",{type:"button",onClick:function(){e.arrLen>3?e.handleDelete(e.index):e.setMsg("You Need To Have At Least Two Options.")},className:"quiz-create-option-box-cont-btn"},"Delete")))}),F=function(e){var t=Object(l.a)(e);t.splice(0,1);for(var a=[],n=t.length,r=0;r<n;r++){var c=Math.floor(Math.random()*t.length);a.push(t[c]),t.splice(c,1)}return a.unshift(e[0]),a},H=function(e,t,a){var n=Object(D.a)({},a);return a.questions.splice(e,1,t),n},M=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replace",r=Object(l.a)(e);switch(n){case"replace":r.splice(t,1,a);break;case"remove":r.splice(t,1);break;case"add":a&&r.splice(t,0,a);break;default:console.log("No Valid Operation Provided To Perform")}return r},R=function(e,t){var a=Object(l.a)(t);return"boolean"===typeof e?(a.pop(),a.push(e)):(a.shift(),a.unshift(e)),a},Y=(a(442),function(e){var t=Object(n.useState)((function(){return!0})),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)((function(){})),u=Object(m.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)((function(){return 0})),b=Object(m.a)(f,2),h=b[0],E=b[1],v=Object(n.useState)((function(){return""})),z=Object(m.a)(v,2),A=z[0],N=z[1],O=Object(n.useState)((function(){})),x=Object(m.a)(O,2),y=x[0],j=x[1],w=Object(n.useState)((function(){return!1})),C=Object(m.a)(w,2),k=C[0],T=C[1],Q=Object(n.useState)((function(){return"Enter Password To Update This Quiz"})),L=Object(m.a)(Q,2),Y=L[0],_=L[1],U=Object(n.useState)((function(){return""})),W=Object(m.a)(U,2),K=W[0],J=W[1],Z=Object(n.useState)((function(){return Boolean(K)})),G=Object(m.a)(Z,2),V=G[0],X=G[1],$=function(e){V||J(e)};Object(n.useEffect)((function(){c||j(p.questions[h])}),[h]);var ee=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;j(M(n,e,a?t:R(t,y[e]),"replace"))},te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;j(M(t,e,void 0,"remove"))},ae=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;j(M(y,t,R(e,a[t]),"replace"))},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(l.a)(y);t=t.map((function(e,t){return t>0?[e[0].trim(),e[1]]:e.trim()}));var a=!1;if(t=t.map((function(e,t){return t>0?e[0]?e:(a=!0,["Option ".concat(t),e[1]]):e||(a=!0,"Question ".concat(h+1))})),a)j(t),$("Cannot Update Question, One Of The Options Is Empty.");else{var n=t.some((function(e,t){return t>0&&e[1]}));if(n){for(var r=!1,c=1;c<t.length;c++)for(var o=1;o<t.length;o++)if(c!==o&&t[c][0]===t[o][0]){r=!0;break}if(r)$("Cannot Update Question, Duplicate Options Are Not Allowed");else{var i=p.questions.some((function(e,a){return a!==h&&e[0]===t[0]}));if(!i){if(t=F(t),d(H(h,t,p)),e)return!0;h+1>=p.questions.length&&d(Object(D.a)(Object(D.a)({},p),{},{questions:[].concat(Object(l.a)(p.questions),[["Question ".concat(h+2),["Option 1",!0],["Option 2",!1]]])})),E(h+1)}}}else $("Cannot Update Question, Atleast One Right Option Needs To Be Selected")}return!1};return c?r.a.createElement(B,{setQuizData:d,setOptions:j,disappear:o,qData:e.location.qData||{title:void 0,author:void 0}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{message:K,onAnime:X}),k&&r.a.createElement(S,{handleCancel:function(){return T(!1)},handleSubmit:function(t){var a=Object(D.a)(Object(D.a)({},p),{},{_password:t});q(a).then((function(t){t?t.err?_(t.err):e.history.push("/board"):_("Network Error, Check Your Internet Connection.")}))},status:Y}),r.a.createElement("div",{className:"quiz-create-cont tornado-bg"},r.a.createElement("div",{className:"quiz-create"},r.a.createElement("textarea",{maxLength:"100",className:"quiz-create-question quiz-create-textarea",placeholder:"Type Your Question",spellCheck:"false",value:y[0],onChange:function(e){j(M(y,0,e.target.value,"replace"))}}),r.a.createElement("div",{className:"quiz-create-option-cont"},r.a.createElement("textarea",{maxLength:"80",className:"quiz-create-textarea",placeholder:"Type An Option",spellCheck:"false",value:A,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{type:"button",className:"quiz-create-option-btn quiz-create-option-btn-large",onClick:function(){var e=A.trim();if(e){var t=y.find((function(t,a){return a>0&&t[0]===e}));y.length<7?t?$("Cannot Add This Option, Such Option Already Exists"):(j(M(y,1,[e,!1],"add")),N("")):$("Cannot Add More Than 6 Options.")}else $("Cannot Add An Empty Option")}},"Add Option")),y.map((function(e,t,a){return t>0?r.a.createElement(I,{key:t,index:t,text:e[0],arrLen:a.length,handleInput:ee,handleDelete:te,isRight:a[t][1],handleRight:ae,setMsg:$}):null}))),r.a.createElement("div",{className:"quiz-create-btns-cont"},r.a.createElement("button",{onClick:function(){h-1>=0?E(h-1):$("There Are No More Questions To Go Back To.")}},"Previous"),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",null,"Cancel")),r.a.createElement("button",{onClick:function(){p.questions.length>=2?ne(!0)?p._id?T(!0):function(){var t=Object(D.a)({},p);g(t).then((function(t){t?(console.log(t),d(t),e.history.push("/board")):$("Couldn't Save Quiz Because Of Network Error, Please Try Again. You Will Be Taken To Another Page When Quiz Succesfully Saves.")}))}():$("In Order To Save, You Must Correct Your Questions."):$("In Order To Save, You Must Create At Least Two Questions.")}},"Save Quiz"),r.a.createElement("button",{onClick:function(){if(p.questions.length>=2){E(0===h?h+1:h-1);var e=Object(l.a)(p.questions);e.splice(h,1),d(Object(D.a)(Object(D.a)({},p),{},{questions:e}))}else $("Cannot Delete Question, A Quiz Must Contain At Least Two Questions.")}},"Delete Question"),r.a.createElement("button",{onClick:function(){return ne(!1)}},"Update Question"))))}),_=(a(443),function(){var e=Object(n.useState)((function(){return!0})),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)((function(){return"Enter Admin Password To Proceed"})),i=Object(m.a)(o,2),s=i[0],u=i[1],l=Object(n.useState)((function(){return""})),p=Object(m.a)(l,2),d=p[0],f=p[1],b=Object(n.useState)((function(){return""})),h=Object(m.a)(b,2),E=h[0],v=h[1],g=Object(n.useState)((function(){return{title:"",_id:"",password:""}})),q=Object(m.a)(g,2),z=q[0],N=q[1];return a?r.a.createElement(S,{status:s,handleSubmit:function(e){A("api/admin","POST",{password:e,_method:"check"}).then((function(t){t?t.err?u(t.err):t.msg&&(u("Welcome Admin !"),c(!1),v(e)):u("Network Error")}))}}):r.a.createElement("div",{className:"quiz-admin-bg"},r.a.createElement("div",{className:"quiz-admin-cont"},r.a.createElement("h1",{className:"quiz-admin-title"},"Admin Panel"),r.a.createElement("input",{type:"text",className:"quiz-admin-search",placeholder:"Search By ID",value:d,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{className:"quiz-admin-btn",style:{width:"10em"},onClick:function(){return e=d,N({title:"",_id:"",password:""}),void A("api/admin","POST",{password:E,_method:"show",_id:e}).then((function(e){e?e.err?u(e.err):(u("Data Loaded Succesfully"),N(e)):u("Network Error")}));var e}},"Seacrh"),r.a.createElement("div",{className:"quiz-admin-info"},r.a.createElement("h3",null,"Quiz-ID: "),r.a.createElement("p",null,z._id)),r.a.createElement("div",{className:"quiz-admin-info"},r.a.createElement("h3",null,"Quiz-Title: "),r.a.createElement("p",null,z.title)),r.a.createElement("div",{className:"quiz-admin-info"},r.a.createElement("h3",null,"Quiz-Password: "),r.a.createElement("p",null,z.password)),r.a.createElement("p",{className:"quiz-admin-status"},s),r.a.createElement("button",{className:"quiz-admin-btn",onClick:function(){A("api/admin","DELETE",{password:E,_id:z._id}).then((function(e){e?e.msg?(u(e.msg),N({title:"",_id:"",password:""})):u(e.err):u("Network Error")}))}},"Delete")))});var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:u}),r.a.createElement(i.a,{path:"/board",component:x}),r.a.createElement(i.a,{path:"/create",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(i.a,{path:"/admin",component:_}),r.a.createElement(i.a,{path:"/:id",render:function(e){return r.a.createElement(L,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[235,1,2]]]);
//# sourceMappingURL=main.7fb2f209.chunk.js.map