(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){},254:function(e,t,a){e.exports=a(510)},489:function(e,t,a){},493:function(e,t,a){},495:function(e,t,a){},497:function(e,t,a){},499:function(e,t,a){},501:function(e,t,a){},503:function(e,t,a){},505:function(e,t,a){},508:function(e,t,a){},510:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(249),c=a.n(s),i=a(514),o=a(3),l=a(13),u=a(252),m=a(253),h=a(71),p=a(45),d=a(103),f=a.n(d);a(483),a(487);f.a.initializeApp({apiKey:"AIzaSyCZnBjFCvxM90C-WIcjuVwzUPAgr2782QA",authDomain:"psy-testing.firebaseapp.com",databaseURL:"https://psy-testing.firebaseio.com",projectId:"psy-testing",storageBucket:"psy-testing.appspot.com",messagingSenderId:"209166839391"}),f.a.firestore();var g=f.a,b=a(12),E={authError:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(b.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(b.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(b.a)({},e,{authError:t.err.message});default:return e}},O={},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(console.log("State in project reducer",t,e),t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success"),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;default:return e}},y=Object(l.combineReducers)({setTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"current/SET_TIME":return t.payload.currentTime;default:return e}}}),N=Object(l.combineReducers)({perceptionResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_PERCEPTION":return Object(b.a)({},e,{time:t.payload.result.time,errors:t.payload.result.errors});default:return e}},shulteResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_SHULTE":return Object(b.a)({},e,{time:t.payload.result.time,errors:t.payload.result.errors});default:return e}},shulteRedResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_SHULTE_RED":return Object(b.a)({},e,{time:t.payload.result.time,errors:t.payload.result.errors});default:return e}},countResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_COUNT":return Object(b.a)({},e,{result:t.payload.result});default:return e}},memoryWordsResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_MEMORY_WORDS":return Object(b.a)({},e,{result:t.payload.result});default:return e}},memoryImagesResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"general/SUBMIT_MEMORY_IMAGES":return Object(b.a)({},e,{time:t.payload.result.time,errors:t.payload.result.errors});default:return e}}}),C=Object(l.combineReducers)({auth:v,project:j,firestore:h.firestoreReducer,firebase:p.firebaseReducer,current:y,result:N}),w=a(5),S=a(6),T=a(8),R=a(7),k=a(9),x=a(515),I=a(511),L=a(513),A=a(491),M=(a(489),function(e){return n.a.createElement("div",{className:"container home-container"},n.a.createElement(A.a,{to:"/test/shulte"},"\u041d\u0430\u0447\u0430\u0442\u044c"))}),U=a(18),_=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?n.a.createElement(L.a,{to:"/"}):n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"\u0412\u043e\u0439\u0442\u0438"),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"email"},"\u041f\u043e\u0447\u0442\u0430 "),n.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c "),n.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"\u0412\u0445\u043e\u0434"),n.a.createElement("div",{className:"center red-text"},t&&n.a.createElement("p",null,t)))))}}]),t}(r.Component),F=Object(o.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(_),P=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?n.a.createElement(L.a,{to:"/"}):n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"email"},"\u041f\u043e\u0447\u0442\u0430 "),n.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c "),n.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"firstName"},"\u0418\u043c\u044f "),n.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"lastName"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f "),n.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),n.a.createElement("div",{className:"center red-text"},a?n.a.createElement("p",null,a):null))))}}]),t}(r.Component),B=Object(o.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,r){var n=r.getFirebase,s=r.getFirestore,c=n(),i=s();c.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(P),W=(a(493),Object(l.compose)(Object(o.b)(function(e){return{auth:e.firebase.auth}}))(function(e){return e.auth.uid?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"test-home"},n.a.createElement(A.a,{to:"/test/shulte"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442 \u0428\u0443\u043b\u044c\u0442\u0435"),n.a.createElement("br",null),n.a.createElement(A.a,{to:"/test/shulte-red"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442 \u0428\u0443\u043b\u044c\u0442\u0435 \u0432 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0413\u043e\u0440\u0431\u043e\u0432\u0430"),n.a.createElement("br",null),n.a.createElement(A.a,{to:"/test/perception"},"\u041d\u0430\u0447\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0443 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u044b"),n.a.createElement("br",null),n.a.createElement(A.a,{to:"/test/count"},"\u041d\u0430\u0447\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0443 \u0441\u0447\u0435\u0442 \u043f\u043e \u041a\u0440\u0435\u043f\u0435\u043b\u0438\u043d\u0443"),n.a.createElement("br",null),n.a.createElement(A.a,{to:"/test/memory-words"},'\u041d\u0430\u0447\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0443 "\u0417\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432"'))):n.a.createElement(L.a,{to:"/signin"})})),D=Object(l.compose)(Object(o.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}}),Object(p.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.projects,a=e.auth;return n.a.createElement("div",{className:"card z-depth-0 project-summary container"},t&&t.length&&t.filter(function(e){return e.authorId===a.uid}).map(function(e){return n.a.createElement("div",{className:"card-content grey-text text-darken-3",key:e.id},n.a.createElement("p",null,"\u0418\u043c\u044f: ",e.authorFirstName," ",e.authorLastName),n.a.createElement("p",{className:"grey-text"},e.createdAt&&e.createdAt.toDate().toString()),e.shulteResult&&n.a.createElement("div",null,n.a.createElement("h4",null,'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 "\u0422\u0430\u0431\u043b\u0438\u0446\u044b \u0448\u0443\u043b\u044c\u0442\u0435"'),n.a.createElement("div",null,"\u0412\u0440\u0435\u043c\u044f: ",e.shulteResult&&e.shulteResult.time),n.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0438: ",e.shulteResult&&e.shulteResult.errors)),n.a.createElement("hr",null))}))}),G=function(e){return function(t,a,r){var n=(0,r.getFirestore)(),s=a().firebase.profile,c=a().firebase.auth.uid;n.collection("projects").add(Object(b.a)({},e,{authorFirstName:s.firstName,authorLastName:s.lastName,authorId:c,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT_SUCCESS"})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR"},e)})}},z=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return this.props.auth.uid?n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a New Project"),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"title"},"Project Title")),n.a.createElement("div",{className:"input-field"},n.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"content"},"Project Content")),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn pink lighten-1"},"Create")))):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component),V=Object(o.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(G(t))}}})(z),J=Object(l.compose)(Object(o.b)(function(e){return{auth:e.firebase.auth}}))(function(e){return e.auth.uid?n.a.createElement("div",null,"Train",n.a.createElement(V,{history:e.history})):n.a.createElement(L.a,{to:"/signin"})}),H=function(e){function t(){return Object(w.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidUpdate",value:function(e){return e.time!==this.props.time||e.errors!==this.props.errors}},{key:"render",value:function(){var e=this.props,t=e.end,a=e.errors,r=e.error,s=e.errorMessage,c=e.instructionNote,i=e.time;return n.a.createElement("div",{className:"info"},t?n.a.createElement("p",null,"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e! \u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f: ",i," \u0441\u0435\u043a. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a: ",a,"."):r?n.a.createElement("p",{className:"info__error"},s):n.a.createElement("p",null,c))}}]),t}(r.Component),Y=Object(o.b)(function(e){return{time:e.current.setTime}},function(e){return{}})(H),K=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={timer:null,counter:0},a.tick=function(){a.setState({counter:a.state.counter+1})},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.tick,1e3);this.setState({timer:e})}},{key:"componentWillUnmount",value:function(){this.props.setTime(this.state.counter),clearInterval(this.state.timer)}},{key:"render",value:function(){return n.a.createElement("div",{className:"timer"},this.state.counter," \u0441\u0435\u043a.")}}]),t}(r.Component),Q={setTime:function(){return{type:"current/SET_TIME",payload:{currentTime:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}}},Z=Object(o.b)(function(e,t){return{}},Q)(K),$=(a(495),function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).nameOfClass=function(){switch(a.props.nameOfClass){case"next":return"button-next";default:return"button-main"}},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.onClick;return n.a.createElement("button",{className:this.nameOfClass(),onClick:a},t)}}]),t}(r.Component)),q=(a(497),function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1},a.tableLength=25,a.numbers=Array(a.tableLength).fill().map(function(e,t){return t+1}).sort(function(){return Math.random()-.5}),a.userNumbers=[0],a.cellVerify=function(e){if(a.setState({error:!1}),a.userNumbers.slice(-1)[0]+1===e)a.userNumbers.push(e),a.userNumbers.slice(-1)[0]===a.tableLength&&a.setState({endTraining:!0});else if(a.setState({error:!0}),a.userNumbers.length<=a.tableLength&&25!==e){var t=a.state.errorCounter+1;a.setState({errorCounter:t})}},a.setNext=function(){a.props.submitResult({time:a.props.time,errors:a.state.errorCounter}),a.props.history.push("/test/shulte-red")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?n.a.createElement("div",{className:"contents"},n.a.createElement("p",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u0432 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"),!this.state.startTraining&&n.a.createElement("div",{className:"message"},n.a.createElement("span",{className:"start-message"},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0446\u0438\u0444\u0440 \u043e\u0442 1 \u0434\u043e 25"),n.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({startTraining:!0})}},"\u041d\u0430\u0447\u0430\u0442\u044c")),this.state.startTraining&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{error:this.state.error,end:this.state.endTraining,errors:this.state.errorCounter,errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e!",instructionNote:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430!"}),n.a.createElement("div",{className:"table"},this.numbers.map(function(t){return n.a.createElement("div",{key:t,onClick:function(){return e.cellVerify(t)},className:"cell"},t)})),!this.state.endTraining&&n.a.createElement(Z,null)),this.state.endTraining&&n.a.createElement($,{nameOfClass:"next",onClick:this.setNext,text:"\u0414\u0430\u043b\u0435\u0435"})):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component)),X=Object(o.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(G(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_SHULTE",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(q),ee=(a(499),function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1,countBackwards:!1},a.redLength=24,a.blackLength=25,a.red=Array(a.redLength).fill().map(function(e,t){return t+1+"r"}),a.black=Array(a.blackLength).fill().map(function(e,t){return t+1+"b"}),a.numbers=a.red.concat(a.black).sort(function(){return Math.random()-.5}),a.userRed=["".concat(a.redLength+1,"r")],a.userBlack=["0b"],a.cellVerify=function(e){if(console.log(e,a.userRed,a.userBlack),a.setState({error:!1}),a.state.countBackwards){if(parseInt(a.userRed.slice(-1)[0])-1+"r"===e)a.userRed.push(e),a.setState({countBackwards:!1});else if(a.setState({error:!0}),a.userRed.length<=a.redLength&&24!==e){var t=a.state.errorCounter+1;a.setState({errorCounter:t})}}else if(!a.state.countBackwards)if(parseInt(a.userBlack.slice(-1)[0])+1+"b"===e)a.userBlack.push(e),a.setState({countBackwards:!0}),parseInt(a.userBlack.slice(-1)[0])===a.blackLength&&a.setState({endTraining:!0});else if(a.setState({error:!0}),a.userBlack.length<=a.blackLength&&25!==e){var r=a.state.errorCounter+1;a.setState({errorCounter:r})}},a.setNext=function(){a.props.submitResult({time:a.props.time,errors:a.state.errorCounter}),a.props.history.push("/test/perception")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?n.a.createElement("div",{className:"contents"},n.a.createElement("p",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u0432 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"),!this.state.startTraining&&n.a.createElement("div",{className:"message"},n.a.createElement("span",{className:"start-message"},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0446\u0438\u0444\u0440"),n.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({startTraining:!0})}},"\u041d\u0430\u0447\u0430\u0442\u044c")),this.state.startTraining&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{error:this.state.error,end:this.state.endTraining,errors:this.state.errorCounter,errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e!",instructionNote:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430!"}),n.a.createElement("div",{className:"table-wide"},this.numbers.map(function(t){return n.a.createElement("div",{className:"r"===t.slice(-1)?"red cell-wide":"cell-wide",key:t,onClick:function(){return e.cellVerify(t)}},parseInt(t))})),!this.state.endTraining&&n.a.createElement(Z,null)),this.state.endTraining&&n.a.createElement($,{nameOfClass:"next",onClick:this.setNext,text:"\u0414\u0430\u043b\u0435\u0435"})):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component)),te=Object(o.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(G(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_SHULTE_RED",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(ee),ae=(a(501),function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1},a.letter="\u043d",a.searchedLetter="\u043f",a.gridLength=252,a.letters=Array(a.gridLength).fill(a.letter),a.newLetters=Array(4).fill(a.searchedLetter),a.longLetters=a.letters.concat(a.newLetters).sort(function(){return Math.random()-.5}),a.guessedCells=[],a.cellVerify=function(e,t){a.setState({error:!1}),e===a.searchedLetter&&!a.guessedCells.includes(t)&&a.guessedCells.length<=a.newLetters.length?(a.guessedCells.push(t),a.newLetters.length===a.guessedCells.length&&a.setState({endTraining:!0})):a.setState({error:!0,errorCounter:a.state.errorCounter+1})},a.setNext=function(){a.props.submitResult({time:a.props.time,errors:a.state.errorCounter}),a.props.history.push("/test/count")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"contents"},n.a.createElement("p",null,"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u043f\u0440\u043e\u0431\u0430"),!this.state.startTraining&&n.a.createElement("div",{className:"message"},n.a.createElement("span",{className:"start-message"},'\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0431\u0443\u043a\u0432\u044b "'.concat(this.searchedLetter,'"')),n.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({startTraining:!0})}},"\u041d\u0430\u0447\u0430\u0442\u044c")),this.state.startTraining&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{error:this.state.error,end:this.state.endTraining,errors:this.state.errorCounter,errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430!",instructionNote:'\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0431\u0443\u043a\u0432\u044b "'.concat(this.searchedLetter,'"')}),n.a.createElement("div",{className:"grid"},this.longLetters.map(function(t,a){return n.a.createElement("div",{key:a,onClick:function(t){return e.cellVerify(t.target.innerText,a)},className:"letter"},t)})),!this.state.endTraining&&n.a.createElement(Z,{getTime:this.props.time}))),this.state.endTraining&&n.a.createElement($,{nameOfClass:"next",onClick:this.setNext,text:"\u0414\u0430\u043b\u0435\u0435"})):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component)),re=Object(o.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(G(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_PERCEPTION",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(ae),ne=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={value:null},a.firstNumber=Math.floor(9*Math.random())+1,a.secondNumber=Math.floor(9*Math.random())+1,a.sign=Math.round(Math.random()),a.handleChange=function(e){a.setState({value:e.target.value})},a.checkResult=function(){var e=parseInt(a.firstNumber),t=parseInt(a.secondNumber),r=a.sign?e+t:e-t;a.props.setAnswer({index:a.props.elIndex,res:parseInt(a.state.value)===r?1:0})},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.firstNumber,t=this.secondNumber,a=this.sign,r=this.props.disabled;return n.a.createElement("div",{className:"cell-container"},n.a.createElement("div",null,e),n.a.createElement("div",null," ",a?"+":"-"," "),n.a.createElement("div",null,t),n.a.createElement("input",{onChange:this.handleChange,disabled:r,onBlur:this.checkResult,style:{width:"36px"}}))}}]),t}(r.Component),se=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={timer:null,counter:a.props.maxTime},a.tick=function(){a.state.counter>1?a.setState({counter:a.state.counter-1}):(a.setState({counter:a.state.counter-1}),a.props.passedFunction(),clearInterval(a.state.timer))},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.tick,1e3);this.setState({timer:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){return n.a.createElement("div",{className:"timer"},this.state.counter," \u0441\u0435\u043a.")}}]),t}(r.Component),ce=Object(o.b)(function(e,t){return{}},{})(se),ie=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state=Object(U.a)({},a.props.row,[]),a.rowAnswer=function(e){a.setState(function(t){return Object(b.a)({},t,Object(U.a)({},a.props.row,t[a.props.row].concat(e)))})},a.submitRow=function(){var e=a.props,t=e.startNextRow,r=e.row;a.props.setAnswer(a.state[a.props.row]),t(r+1)},a.submitLastRow=function(){a.submitRow(),a.props.endTraining()},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.row,r=t.currentRow,s=t.time,c=t.rowLength;return n.a.createElement("div",{className:"number-container"},Array(oe).fill().map(function(t,s){return n.a.createElement(ne,{row:a,key:s,elIndex:s,disabled:a!==r,lineLength:oe,setAnswer:e.rowAnswer})}),c===a?n.a.createElement($,{onClick:this.submitLastRow,text:"\u0413\u043e\u0442\u043e\u0432\u043e",nameOfClass:"next"}):n.a.createElement($,{nameOfClass:"next",onClick:this.submitRow,text:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"}),n.a.createElement("div",{className:"timer-container"},a===r&&n.a.createElement(ce,{maxTime:s,passedFunction:c===a?this.submitLastRow:this.submitRow})))}}]),t}(r.Component),oe=(a(503),23),le=10,ue=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1,result:{},currentRow:0,answer:[]},a.setAnswer=function(e){console.log(e),a.setState({answer:Object(b.a)({},a.state.answer,Object(U.a)({},a.state.currentRow,e))})},a.rowLength=Array(le).fill(""),a.startNextRow=function(e){a.setState({currentRow:e})},a.endTraining=function(){a.setState({endTraining:!0})},a.setNext=function(){a.props.submitResult(a.state.answer),a.props.history.push("/test/memory-words")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?n.a.createElement("div",{className:"contents"},n.a.createElement("p",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u0432 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"),!this.state.startTraining&&n.a.createElement("div",{className:"message"},n.a.createElement("span",{className:"start-message"},"\u0421\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0439\u0442\u0435 \u0438\u043b\u0438 \u0432\u044b\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0447\u0438\u0441\u043b\u0430"),n.a.createElement($,{text:"\u041d\u0430\u0447\u0430\u0442\u044c",onClick:function(){return e.setState({startTraining:!0})}})),this.state.startTraining&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{error:this.state.error,end:this.state.endTraining,errors:this.state.errorCounter,errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e!",instructionNote:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430!"}),this.rowLength.map(function(t,a){return n.a.createElement(ie,{rowLength:e.rowLength.length-1,key:a,row:a,currentRow:e.state.currentRow,time:10,setAnswer:e.setAnswer,startNextRow:e.startNextRow,endTraining:e.endTraining})})),this.state.endTraining&&n.a.createElement($,{nameOfClass:"next",onClick:this.setNext,text:"\u0414\u0430\u043b\u0435\u0435"})):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component),me=Object(o.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(G(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_COUNT",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(ue),he=(a(505),["\u041b\u0435\u0441","\u0425\u043b\u0435\u0431","\u041e\u043a\u043d\u043e","\u0421\u0442\u0443\u043b","\u0412\u043e\u0434\u0430","\u041a\u043e\u043d\u044c","\u0413\u0440\u0438\u0431","\u0418\u0433\u043b\u0430","\u041c\u0435\u0434","\u041e\u0433\u043e\u043d\u044c"].sort(function(){return Math.random()-.5})),pe=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={error:!1,errorCounter:0,startTraining:!1,endTraining:!1,showWords:!0,result:[],correct:0},a.endMemorizing=function(){a.setState({showWords:!1})},a.checkWords=function(){var e=he.map(function(e){return e.toLowerCase()}),t=Object.values(a.state.result).filter(function(t){return e.includes(t.toLowerCase())});a.setState({endTraining:!0,correct:t.length})},a.handleChange=function(e){a.setState({result:Object(b.a)({},a.state.result,Object(U.a)({},e.target.id,e.target.value))})},a.setNext=function(){a.props.submitResult(a.state.correct),a.props.history.push("/test/current-summary")},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?n.a.createElement("div",{className:"contents"},n.a.createElement("p",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),!this.state.startTraining&&n.a.createElement("div",{className:"message"},n.a.createElement("span",{className:"start-message"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043b\u043e\u0432\u0430"),n.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({startTraining:!0})}},"\u041d\u0430\u0447\u0430\u0442\u044c")),this.state.startTraining&&n.a.createElement(n.a.Fragment,null,this.state.showWords&&n.a.createElement(ce,{maxTime:3,passedFunction:this.endMemorizing}),this.state.showWords&&n.a.createElement("div",{className:"words"},he.join(", ")),!this.state.showWords&&n.a.createElement("div",null,he.map(function(t,a){return n.a.createElement("div",{key:a,className:"input-wrapper"},n.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e",onChange:e.handleChange,autoComplete:"off",id:a}))}),n.a.createElement($,{onClick:this.checkWords,text:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",nameOfClass:"next"}))),this.state.endTraining&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043b\u043e\u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e: ",this.state.correct),n.a.createElement($,{nameOfClass:"next",onClick:this.setNext,text:"\u0414\u0430\u043b\u0435\u0435"}))):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component),de=Object(o.b)(function(e){return{auth:e.firebase.auth,time:e.current.setTime,project:e.result}},function(e){return{createProject:function(t){return e(G(t))},submitResult:function(t){return e(function(){return{type:"general/SUBMIT_MEMORY_WORDS",payload:{result:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}}(t))}}})(pe),fe=a(512),ge=(a(161),Object(o.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav-right"},n.a.createElement("li",null,n.a.createElement("div",{onClick:e.signOut,className:"logout"},"\u0412\u044b\u0445\u043e\u0434")),n.a.createElement("li",null,n.a.createElement(fe.a,{to:"/profile",className:""},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c: ",e.profile.firstName))))})),be=function(){return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav-right"},n.a.createElement("li",null,n.a.createElement(fe.a,{to:"/signup"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),n.a.createElement("li",null,n.a.createElement(fe.a,{to:"/signin"},"\u0412\u0445\u043e\u0434"))))},Ee=Object(o.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,r=t.uid?n.a.createElement(ge,{profile:a}):n.a.createElement(be,null);return n.a.createElement("nav",{className:"nav-wrapper"},n.a.createElement("div",{className:"container inner-wrapper"},n.a.createElement(A.a,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r))}),ve=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(n)))).state={showSummary:!1},a.showResults=function(){a.props.createProject(a.props.project),a.setState({showSummary:!0})},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth;e.project;return t.uid?n.a.createElement("div",null,n.a.createElement($,{onClick:this.showResults,text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"}),this.state.showSummary&&n.a.createElement("div",null,"\u0412\u0430\u0448\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b:")):n.a.createElement(L.a,{to:"/signin"})}}]),t}(r.Component),Oe=Object(o.b)(function(e){return{auth:e.firebase.auth,project:e.result}},function(e){return{createProject:function(t){return e(G(t))}}})(ve),je=(a(508),function(e){function t(){return Object(w.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Ee,null),n.a.createElement(x.a,null,n.a.createElement(I.a,{exact:!0,path:"/psy-testing",component:M}),n.a.createElement(I.a,{exact:!0,path:"/signin",component:F}),n.a.createElement(I.a,{exact:!0,path:"/signup",component:B}),n.a.createElement(I.a,{exact:!0,path:"/test",component:W}),n.a.createElement(I.a,{exact:!0,path:"/train",component:J}),n.a.createElement(I.a,{exact:!0,path:"/profile",component:D}),n.a.createElement(I.a,{exact:!0,path:"/summary",component:D}),n.a.createElement(I.a,{exact:!0,path:"/test/sample",component:V}),n.a.createElement(I.a,{exact:!0,path:"/test/shulte",component:X}),n.a.createElement(I.a,{exact:!0,path:"/test/shulte-red",component:te}),n.a.createElement(I.a,{exact:!0,path:"/test/perception",component:re}),n.a.createElement(I.a,{exact:!0,path:"/test/count",component:me}),n.a.createElement(I.a,{exact:!0,path:"/test/memory-words",component:de}),n.a.createElement(I.a,{exact:!0,path:"/test/current-summary",component:Oe}),n.a.createElement(L.a,{to:"/psy-testing"})))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=Object(l.createStore)(C,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(m.a.withExtraArgument({getFirebase:p.getFirebase,getFirestore:h.getFirestore})),Object(p.reactReduxFirebase)(g,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0}),Object(h.reduxFirestore)(g)));ye.firebaseAuthIsReady.then(function(){c.a.render(n.a.createElement(o.a,{store:ye},n.a.createElement(i.a,null,n.a.createElement(je,null))),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[254,2,1]]]);
//# sourceMappingURL=main.e900a5a6.chunk.js.map