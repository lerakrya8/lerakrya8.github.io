(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/unnamed.ba80d2b3.png"},,,,,,,,,,,,function(e,t,n){e.exports=n(58)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),u=n.n(c),i=(n(33),n(3)),l=n(4),s=n(6),o=n(5),m=(n(34),n(35),n(16)),f=n.n(m),p=n(11),h=r.a.createContext(null),d=function(e){return function(t){return r.a.createElement(h.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},E=h,v=n(17),b=n.n(v),y=(n(40),n(59),{apiKey:"AIzaSyCyA5u1Bh1t3MCuqP4qmzVmyTkm5uRJTTs",authDomain:"converter-currency.firebaseapp.com",databaseURL:"https://converter-currency.firebaseio.com",projectId:"converter-currency",storageBucket:"converter-currency.appspot.com",messagingSenderId:"707902134140",appId:"1:707902134140:web:52fb266a74953a162976f9",measurementId:"G-1TBDPXH4TF"}),g=function e(){var t=this;Object(i.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.storageRef=function(e){return t.stor.child("photos/".concat(e))},b.a.initializeApp(y),this.auth=b.a.auth(),this.stor=b.a.storage().ref()},O=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={authUser:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Buttons"},this.state.authUser?r.a.createElement(N,null):r.a.createElement(j,null)),r.a.createElement("br",null),r.a.createElement("div",{className:"Topic"},r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:"name",width:"60",height:"60",className:"Picture"})),r.a.createElement("div",{className:"Name"},"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"),r.a.createElement("div",null)))}}]),n}(a.Component),j=function(){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/",className:"MainList"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(p.b,{to:"/Auto",className:"SingIn"},"\u0412\u043e\u0439\u0442\u0438"))},N=d((function(e){var t=e.firebase;return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/Converter",className:"MainList"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"),r.a.createElement("div",{className:"SingIn",onClick:t.doSignOut},"\u0412\u044b\u0439\u0442\u0438"))})),C=d(O),w=(n(48),n(49),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"DateNow"},this.state.date.toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"}))}}]),n}(a.Component)),S=(n(50),n(51),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.name,t=this.props.currency_id,n=this.props.rub;return r.a.createElement("tr",null,r.a.createElement("td",{className:"Line"},e),r.a.createElement("td",{className:"Line"},"1 ",t," = ",(1/n).toFixed(2)," RUB"))}}]),n}(a.Component)),k=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={isLoad:!1,result:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=RUB").then((function(e){return e.json()})).then((function(t){return e.setState({isLoad:!0,result:t})}))}},{key:"render",value:function(){if(this.state.isLoad){var e=this.state.result.rates;return r.a.createElement("table",{className:"Ttable"},r.a.createElement("tbody",null,r.a.createElement(S,{currency_id:"EUR",rub:e.EUR,name:"\u0415\u0432\u0440\u043e"}),r.a.createElement(S,{currency_id:"USD",rub:e.USD,name:"\u0414\u043e\u043b\u043b\u0430\u0440"}),r.a.createElement(S,{currency_id:"GBP",rub:e.GBP,name:"\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432"}),r.a.createElement(S,{currency_id:"CNY",rub:e.CNY,name:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c"}),r.a.createElement(S,{currency_id:"NOK",rub:e.NOK,name:"\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430"}),r.a.createElement(S,{currency_id:"MXN",rub:e.MXN,name:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u043f\u0435\u0441\u043e"}),r.a.createElement(S,{currency_id:"SEK",rub:e.SEK,name:"\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430"})))}return r.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")}}]),n}(a.Component),U=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(w,null),r.a.createElement(k,null))}}]),n}(a.Component),x=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main_page"},r.a.createElement(C,null),r.a.createElement(U,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(52),n(53);var A=d(function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Buttons"},r.a.createElement(p.b,{to:"/",className:"MainList"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("br",null),r.a.createElement("div",{className:"Topic"},r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:"name",width:"60",height:"60",className:"Picture"})),r.a.createElement("div",{className:"Name"},"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"),r.a.createElement("div",null)))}}]),n}(a.Component)),B=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={isLoad:!1,currency:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=RUB").then((function(e){return e.json()})).then((function(t){return e.setState({isLoad:!0,currency:t.rates})}))}},{key:"CurrentValue",value:function(e){return"USD"===e?this.state.currency.USD:"EUR"===e?this.state.currency.EUR:"GBP"===e?this.state.currency.GPB:"NOK"===e?this.state.currency.NOK:"SEK"===e?this.state.currency.SEK:"MXN"===e?this.state.currency.MXN:"CNY"===e?this.state.currency.CNY:void 0}},{key:"Converter",value:function(e,t){"RUB"!==t&&(this.rub.value=(e/this.CurrentValue(t)).toFixed(1)),"USD"!==t&&(this.usd.value=(this.rub.value*this.state.currency.USD).toFixed(1)),"EUR"!==t&&(this.eur.value=(this.rub.value*this.state.currency.EUR).toFixed(1)),"GBP"!==t&&(this.gbp.value=(this.rub.value*this.state.currency.GBP).toFixed(1)),"NOK"!==t&&(this.nok.value=(this.rub.value*this.state.currency.NOK).toFixed(1)),"CNY"!==t&&(this.cny.value=(this.rub.value*this.state.currency.CNY).toFixed(1)),"SEK"!==t&&(this.sek.value=(this.rub.value*this.state.currency.SEK).toFixed(1)),"MXN"!==t&&(this.mxn.value=(this.rub.value*this.state.currency.MXN).toFixed(1))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Main_converter"},r.a.createElement("form",{class:"transparent"},r.a.createElement("div",{class:"form-inner"},r.a.createElement("label",{for:"nom"},"RUB"),r.a.createElement("input",{type:"number",name:"RUB",ref:function(t){return e.rub=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"EUR"),r.a.createElement("input",{type:"number",name:"EUR",ref:function(t){return e.eur=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"USD"),r.a.createElement("input",{type:"number",name:"USD",ref:function(t){return e.usd=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"GPB"),r.a.createElement("input",{type:"number",name:"GBP",ref:function(t){return e.gbp=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"NOK"),r.a.createElement("input",{type:"number",name:"NOK",ref:function(t){return e.nok=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"SEK"),r.a.createElement("input",{type:"number",name:"SEK",ref:function(t){return e.sek=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"MXN"),r.a.createElement("input",{type:"number",name:"MXN",ref:function(t){return e.mxn=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}),r.a.createElement("label",{for:"nom"},"CNY"),r.a.createElement("input",{type:"number",name:"CNY",ref:function(t){return e.cny=t},onInput:function(t){return e.Converter(t.target.value,t.target.name)}}))))}}]),n}(a.Component),M=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main_page"},r.a.createElement(A,null),r.a.createElement(B,null))}}]),n}(a.Component),P=(n(54),n(14)),R=(n(55),n(7)),I=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).Change=e.Change.bind(Object(P.a)(e)),e.state={passwordsEquel:!0,filePut:!0,filevalid:!0},e}return Object(l.a)(n,[{key:"Change",value:function(e){var t=this,n=!0,a=!0,r=!0;if(this.password.value!==this.passwordsecond.value&&(n=!1),0===this.file.files.length)a=!1;else{/(\.jpg|\.jpeg|\.gif|\.png)$/i.test(this.file.files[0].name)||(r=!1)}this.setState({passwordsEquel:n,filePut:a,filevalid:r}),n&a&r&&this.props.firebase.doCreateUserWithEmailAndPassword(this.email.value,this.password.value).then((function(e){t.props.firebase.storageRef(e.user.uid).put(t.file.files[0]),t.props.history.push("/")})).catch((function(e){alert(e)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"transparent",onSubmit:this.Change},r.a.createElement("div",{className:"form-inner"},r.a.createElement("h3",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("label",{for:"username"},"\u0418\u043c\u044f*"),r.a.createElement("input",{type:"text",id:"username",required:!0,pattern:"[\u0410-\u042fA-Z\u0430-\u044fa-z]+",ref:function(t){return e.username=t}}),r.a.createElement("label",{for:"username"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*"),r.a.createElement("input",{type:"text",id:"surname",required:!0,pattern:"[\u0410-\u042fA-Z\u0430-\u044fa-z]+",ref:function(t){return e.usersurname=t}}),r.a.createElement("label",{for:"email"},"\u041f\u043e\u0447\u0442\u0430*"),r.a.createElement("input",{id:"email",type:"email",required:!0,ref:function(t){return e.email=t}}),r.a.createElement("label",{for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c*"),r.a.createElement("input",{id:"password",type:"password",required:!0,ref:function(t){return e.password=t}}),r.a.createElement("label",{for:"password_1"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c*"),r.a.createElement("p",{className:"Alert"},this.state.passwordsEquel?"":"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u043f\u0430\u0434\u0430\u044e\u0442"),r.a.createElement("input",{type:"password",id:"password_1",ref:function(t){return e.passwordsecond=t}}),r.a.createElement("p",{className:"Alert"},this.state.filePut?"":"\u041d\u0435\u0442 \u0444\u043e\u0442\u043e!"),r.a.createElement("p",{className:"Alert"},this.state.filevalid?"":"\u0424\u043e\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 .png/.jpg/.jpeg/.gif!"),r.a.createElement("input",{type:"file",name:"f",ref:function(t){return e.file=t}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),r.a.createElement("div",{className:"Dod"},r.a.createElement("p",null,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),r.a.createElement(p.b,{to:"Auto",type:"submit",className:"Bob"},"\u0412\u0445\u043e\u0434"))))}}]),n}(a.Component),D=d(Object(R.f)(I)),K=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main_page"},r.a.createElement(C,null),r.a.createElement(D,null))}}]),n}(a.Component),_=(n(56),n(57),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).Aunten=e.Aunten.bind(Object(P.a)(e)),e}return Object(l.a)(n,[{key:"Aunten",value:function(e){var t=this;this.props.firebase.doSignInWithEmailAndPassword(this.email.value,this.password.value).then((function(e){t.props.history.push("/")})).catch((function(e){alert(e)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"transparent"},r.a.createElement("form",{onSubmit:this.Aunten},r.a.createElement("div",{className:"form-inner"},r.a.createElement("h3",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("label",{for:"username"},"\u041f\u043e\u0447\u0442\u0430"),r.a.createElement("input",{type:"text",id:"username",ref:function(t){return e.email=t}}),r.a.createElement("label",{for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{id:"password",type:"password",ref:function(t){return e.password=t}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"\u0412\u043e\u0439\u0442\u0438"}),r.a.createElement("div",{className:"Regg"},r.a.createElement("p",null,"\u041d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),r.a.createElement(p.b,{to:"/Reg",className:"Linkk",type:"submit"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))}}]),n}(a.Component)),L=d(Object(R.f)(_)),F=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main_page"},r.a.createElement(C,null),r.a.createElement(L,null))}}]),n}(a.Component);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.Provider,{value:new g},r.a.createElement(p.a,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/Auto"},r.a.createElement(F,null)),r.a.createElement(R.a,{exact:!0,path:"/Reg"},r.a.createElement(K,null)),r.a.createElement(R.a,{exact:!0,path:"/"},r.a.createElement(x,null)),r.a.createElement(R.a,{exact:!0,path:"/Converter"},r.a.createElement(M,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.247ad9c0.chunk.js.map