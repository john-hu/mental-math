(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(253)},253:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),s=a.n(o),i=a(106),c=a.n(i),l=a(26),d=a(27),u=a(29),m=a(28),p=a(40),h=a(30),w=a(103),f=a.n(w),v=a(33),b=a.n(v),g=a(59),y=a.n(g),E=a(104),j=a.n(E),x=a(18),C=a.n(x),O=a(25),S=a(105),I=a.n(S),T=a(60),k=a(5),A=a.n(k),N=a(32),P=a.n(N),M=a(99),B=a.n(M),D=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleKeyPressed=function(e){var t=a.props.onAnswer;if(e.target.value&&"Enter"===e.key&&t){var n=+e.target.value;t(n,a.state.answer,n===a.state.answer),e.target.value=""}},a.renderRow=function(e,t){var n=a.props.classes;return r.a.createElement("div",{key:t,className:n.row,"data-index":t+1},e)};var n=e.rows.map(function(e){var t=e.min,a=e.max;return Math.round(Math.random()*a+t)});return a.state={candidates:n,answer:n.reduce(function(e,t){return e+t},0)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.header!==this.props.header){var t=e.rows.map(function(e){var t=e.min,a=e.max;return Math.round(Math.random()*a+t)});this.setState({candidates:t,answer:t.reduce(function(e,t){return e+t},0)})}}},{key:"render",value:function(){var e=this.props,t=e.answer,a=e.className,n=e.classes,o=e.header,s=this.state.candidates;return r.a.createElement(P.a,{className:A()(n.root,a)},r.a.createElement(C.a,{className:n.header,variant:"h4",component:"h4"},o),s.map(this.renderRow),r.a.createElement(B.a,{autoFocus:!0,className:A()(n.answer,n.row),type:"number",InputProps:{classes:{input:n.answerInput}},onKeyPress:this.handleKeyPressed},t))}}]),t}(n.PureComponent),R=Object(O.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",padding:"1rem"},header:{borderBottom:"solid 0.2rem ".concat(e.palette.divider)},row:Object(T.a)({},e.typography.display2,{marginBottom:"0.1rem",marginTop:"0.1rem",textAlign:"right","&:before":{content:"attr(data-index)",float:"left"}}),answer:{borderTop:"solid 0.1rem ".concat(e.palette.divider)},answerInput:Object(T.a)({},e.typography.display1,{textAlign:"right"})}})(D),K=a(100),V=a.n(K),Y=a(102),q=a.n(Y),W=a(101),G=a.n(W),J=a(57),U=a.n(J),F=a(41),H=a.n(F),L=a(58),Q=a.n(L),$=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.answered,a=e.correct,n=e.elapsed,o=e.open,s=e.onClose,i=t?"".concat(Math.round(100*a/t),"%"):"N/A",c=Math.round(n/1e3);return r.a.createElement(V.a,{open:o,onClose:s},r.a.createElement(G.a,null,"Your result:"),r.a.createElement(U.a,null,r.a.createElement(H.a,null,r.a.createElement(C.a,null,"You did a great job. You answered ",t," questions with ",a," correct answers within ",c," seconds.")),r.a.createElement(H.a,null,r.a.createElement(Q.a,{primary:"Your score:",secondary:i})),r.a.createElement(H.a,null,r.a.createElement(Q.a,{primary:"Time used:",secondary:"".concat(c," seconds")}))),r.a.createElement(q.a,null,r.a.createElement(b.a,{onClick:s,color:"primary"},"Close")))}}]),t}(n.PureComponent);$.defaultTypes={open:!1};var z=$,X=[{min:0,max:10},{min:-5,max:10},{min:16,max:69},{min:-10,max:10}],Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleTimerUpdate=function(){return a.setState({elapsed:(new Date).getTime()-a.state.startTime})},a.handleResultDialogClosed=function(){return a.setState({resultVisible:!1})},a.handleTimerStartStop=function(e){a.state.timerId?(window.clearInterval(a.state.timerId),a.setState({resultVisible:!0,startTime:0,timerId:null},"function"===typeof e?e:void 0)):a.setState({answeredCount:0,correctCount:0,elapsed:0,startTime:(new Date).getTime(),timerId:window.setInterval(a.handleTimerUpdate,250)},"function"===typeof e?e:void 0)},a.handleAnswered=function(e,t,n){a.state.timerId?a.increaseAnswered(n):a.handleTimerStartStop(a.increaseAnswered.bind(Object(p.a)(a),n))},a.increaseAnswered=function(e){var t=a.state,n=t.answeredCount,r=t.correctCount;a.setState({answeredCount:n+1,correctCount:(r||0)+ +e})},a.state={answeredCount:0,correctCount:0,elapsed:0,resultVisible:!1,startTime:null,timerId:null},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.answeredCount,n=t.correctCount,o=t.elapsed,s=t.resultVisible,i=t.timerId,c="(".concat(n," / ").concat(a,")");return r.a.createElement("div",{className:e.root,onKeyPress:this.handleAnswerChanged},r.a.createElement(f.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,{className:e.grow,color:"inherit",variant:"h6"},"Score: ",c,",",r.a.createElement("span",{className:e.timerBox},r.a.createElement(I.a,{className:e.headerIcon}),": ",Math.round(o/1e3),"s")),r.a.createElement(b.a,{color:"inherit",onClick:this.handleTimerStartStop},i?"Stop":"Start"))),r.a.createElement(y.a,{className:e.grid,container:!0,spacing:24,justify:"center"},r.a.createElement(y.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(R,{className:e.question,rows:X,header:"Q ".concat(a+1),onAnswer:this.handleAnswered}))),r.a.createElement(z,{answered:a,correct:n,elapsed:o,open:s,onClose:this.handleResultDialogClosed}))}}]),t}(n.PureComponent),_=Object(O.withStyles)(function(e){return{root:{flexGrow:1},grid:{margin:"64px 0 0 0",width:"100%"},grow:{flexGrow:1},timerBox:{marginLeft:"8px"},headerIcon:{verticalAlign:"sub"},question:{padding:2*e.spacing.unit,color:e.palette.text.secondary,minHeight:"240px"}}})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(_,null));s.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[107,1,2]]]);
//# sourceMappingURL=main.b4d43eef.chunk.js.map