(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,a){},269:function(e,t,a){e.exports=a(548)},533:function(e,t,a){},541:function(e,t,a){},543:function(e,t,a){},546:function(e,t,a){},548:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(264),c=a.n(i),l=a(552),s=a(5),o=a(8),u=a(267),m=a(268),h=a(74),p=a(50),d=a(116),f=a.n(d);a(527),a(531);f.a.initializeApp({apiKey:"AIzaSyCZnBjFCvxM90C-WIcjuVwzUPAgr2782QA",authDomain:"psy-testing.firebaseapp.com",databaseURL:"https://psy-testing.firebaseio.com",projectId:"psy-testing",storageBucket:"psy-testing.appspot.com",messagingSenderId:"209166839391"}),f.a.firestore();var E=f.a,b=a(41),g={authError:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(b.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(b.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(b.a)({},e,{authError:t.err.message});default:return e}},N={},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(console.log("State in project reducer",t,e),t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success"),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;default:return e}},O=Object(o.combineReducers)({setTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"current/SET_TIME":return t.payload.currentTime;default:return e}}}),y=Object(o.combineReducers)({submitShulte:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case"general/SUBMIT_SHULTE":return Object(b.a)({},e,{time:t.payload.result.time,errors:t.payload.result.errors});default:return e}}}),S=Object(o.combineReducers)({auth:v,project:j,firestore:h.firestoreReducer,firebase:p.firebaseReducer,current:O,result:y}),C=a(18),w=a(19),T=a(21),R=a(20),x=a(22),k=a(553),F=a(549),I=a(551),U=a(535),_=(a(533),function(e){return r.a.createElement("div",{className:"container home-container"},r.a.createElement("div",{className:"home-item"},r.a.createElement(U.a,{to:"/test"},"Test")),r.a.createElement("div",{className:"home-item"},r.a.createElement(U.a,{to:"/train"},"Train")))}),P=a(40),A=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"center red-text"},t&&r.a.createElement("p",null,t)))))}}]),t}(n.Component),L=Object(s.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(A),G=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),M=Object(s.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,i=n.getFirestore,c=r(),l=i();c.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return l.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(G),D=(a(541),Object(o.compose)(Object(s.b)(function(e){return{auth:e.firebase.auth}}))(function(e){return e.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"test-home"},r.a.createElement(U.a,{to:"/test/shulte"},"Start Shulte Test"))):r.a.createElement(I.a,{to:"/signin"})})),z=Object(o.compose)(Object(s.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}}),Object(p.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.projects;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},t&&t.length&&t.map(function(e){return r.a.createElement("div",{className:"card-content grey-text text-darken-3",key:e.id},r.a.createElement("p",null,"Name: ",e.authorFirstName," ",e.authorLastName),r.a.createElement("p",{className:"grey-text"},e.createdAt&&e.createdAt.toDate().toString()),e.submitShulte&&r.a.createElement("div",null,r.a.createElement("h4",null,"Shulte results"),r.a.createElement("div",null,"Time: ",e.submitShulte&&e.submitShulte.time),r.a.createElement("div",null,"Errors: ",e.submitShulte&&e.submitShulte.errors)),r.a.createElement("hr",null))}))}),W=function(e){return function(t,a,n){var r=(0,n.getFirestore)(),i=a().firebase.profile,c=a().firebase.auth.uid;r.collection("projects").add(Object(b.a)({},e,{authorFirstName:i.firstName,authorLastName:i.lastName,authorId:c,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT_SUCCESS"})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR"},e)})}},B=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Project Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Project Content")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Create")))):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),J=Object(s.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(W(t))}}})(B),H=Object(o.compose)(Object(s.b)(function(e){return{auth:e.firebase.auth}}))(function(e){return e.auth.uid?r.a.createElement("div",null,"Train",r.a.createElement(J,{history:e.history})):r.a.createElement(I.a,{to:"/signin"})}),V=function(e){function t(){return Object(C.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidUpdate",value:function(e){return e.time!==this.props.time||e.errors!==this.props.errors}},{key:"render",value:function(){var e=this.props,t=e.end,a=e.errors,n=e.error,i=e.errorMessage,c=e.instructionNote,l=e.time;return r.a.createElement("div",{className:"info"},t?r.a.createElement("p",null,"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e! \u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f: ",l," \u0441\u0435\u043a. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a: ",a,"."):n?r.a.createElement("p",{className:"info__error"},i):r.a.createElement("p",null,c))}}]),t}(n.Component),K=Object(s.b)(function(e){return{time:e.current.setTime}},function(e){return{}})(V),Q=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={timer:null,counter:0},a.tick=function(){a.setState({counter:a.state.counter+1})},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.tick,1e3);this.setState({timer:e})}},{key:"componentWillUnmount",value:function(){this.props.setTime(this.state.counter),clearInterval(this.state.timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},this.state.counter," \u0441\u0435\u043a.")}}]),t}(n.Component),Z={setTime:function(){return{type:"current/SET_TIME",payload:{currentTime:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}}},$=Object(s.b)(function(e,t){return{}},Z)(Q),q=(a(543),function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1},a.tableLength=25,a.numbers=Array(a.tableLength).fill().map(function(e,t){return t+1}).sort(function(){return Math.random()-.5}),a.userNumbers=[0],a.cellVerify=function(e){if(a.setState({error:!1}),a.userNumbers.slice(-1)[0]+1===e)a.userNumbers.push(e),a.userNumbers.slice(-1)[0]===a.tableLength&&a.setState({endTraining:!0});else if(a.setState({error:!0}),a.userNumbers.length<=a.tableLength&&25!==e){var t=a.state.errorCounter+1;a.setState({errorCounter:t})}},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?r.a.createElement("div",{className:"contents"},r.a.createElement("p",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u0432 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"),!this.state.startTraining&&r.a.createElement("div",{className:"message"},r.a.createElement("span",{className:"start-message"},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0446\u0438\u0444\u0440 \u043e\u0442 1 \u0434\u043e 25"),r.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({startTraining:!0})}},"\u041d\u0430\u0447\u0430\u0442\u044c")),this.state.startTraining&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{error:this.state.error,end:this.state.endTraining,errors:this.state.errorCounter,errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e!",instructionNote:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430!"}),r.a.createElement("div",{className:"table"},this.numbers.map(function(t){return r.a.createElement("div",{key:t,onClick:function(){return e.cellVerify(t)},className:"cell"},t)})),!this.state.endTraining&&r.a.createElement($,null)),this.state.endTraining&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"next",onClick:function(){return e.props.submitResult({time:e.props.time,errors:e.state.errorCounter})}},"Next"),r.a.createElement("button",{className:"next",onClick:function(){return e.props.createProject(e.props.project)}},"Submit"))):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component)),X=Object(s.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(W(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_SHULTE",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(q),Y=a(550),ee=(a(173),Object(s.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav-right"},r.a.createElement("li",null,r.a.createElement("div",{onClick:e.signOut,className:"logout"},"Log Out")),r.a.createElement("li",null,r.a.createElement(Y.a,{to:"/profile",className:""},"Profile: ",e.profile.firstName))))})),te=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav-right"},r.a.createElement("li",null,r.a.createElement(Y.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(Y.a,{to:"/signin"},"Login"))))},ae=Object(s.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(ee,{profile:a}):r.a.createElement(te,null);return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"container inner-wrapper"},r.a.createElement(U.a,{to:"/"},"Home"),n))}),ne=(a(546),function(e){function t(){return Object(C.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(k.a,null,r.a.createElement(F.a,{exact:!0,path:"/psy-testing",component:_}),r.a.createElement(F.a,{exact:!0,path:"/signin",component:L}),r.a.createElement(F.a,{exact:!0,path:"/signup",component:M}),r.a.createElement(F.a,{exact:!0,path:"/test",component:D}),r.a.createElement(F.a,{exact:!0,path:"/train",component:H}),r.a.createElement(F.a,{exact:!0,path:"/profile",component:z}),r.a.createElement(F.a,{exact:!0,path:"/summary",component:z}),r.a.createElement(F.a,{exact:!0,path:"/test/sample",component:J}),r.a.createElement(F.a,{exact:!0,path:"/test/shulte",component:X}),r.a.createElement(I.a,{to:"/psy-testing"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=Object(o.createStore)(S,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(m.a.withExtraArgument({getFirebase:p.getFirebase,getFirestore:h.getFirestore})),Object(p.reactReduxFirebase)(E,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0}),Object(h.reduxFirestore)(E)));re.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(s.a,{store:re},r.a.createElement(l.a,null,r.a.createElement(ne,null))),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[269,2,1]]]);
//# sourceMappingURL=main.0e1b69e7.chunk.js.map