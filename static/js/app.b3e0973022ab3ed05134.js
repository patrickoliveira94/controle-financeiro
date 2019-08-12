webpackJsonp([1],{"4yHk":function(s,t){},EzGR:function(s,t){},NHnr:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("7+uW"),r={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},r,!1,function(s){a("EzGR")},null,null).exports,i=a("/ocq"),o=a("c/Tr"),l=a.n(o),c=a("mtWM"),u=a.n(c).a.create({baseURL:"https://api.hgbrasil.com/finance/quotations?format=json-cors&key=dfdf5a27"}),d=function(){return u.get("")},h={extends:a("UlOv").a,props:["backgroundColor","dataLabel","data"],mounted:function(){this.renderLineChart()},computed:{chartData:function(){return this.data}},methods:{renderLineChart:function(){this.renderChart({labels:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho"],datasets:[{label:this.dataLabel,fontColor:"white",backgroundColor:this.backgroundColor,data:this.chartData}]},{responsive:!0,maintainAspectRatio:!1,legend:{display:!1}})}},watch:{data:function(){this.$data._chart.destroy(),this.renderLineChart()}}},v={name:"Currencies",data:function(){return{title:"Moedas",currencies:[],titleChart:"",dataChart:[]}},components:{LineChart:h},methods:{loadChart:function(s){this.dataChart=this.historyMock(),this.titleChart=s},historyMock:function(){return l()({length:7},function(){return Math.floor(10*Math.random())})}},mounted:function(){var s=this;d().then(function(t){s.currencies=t.data.results.currencies})}},m={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"currencies"},[a("h2",[s._v(s._s(s.title))]),s._v(" "),a("div",{staticClass:"cards"},s._l(s.currencies,function(t){return a("div",{key:t.name},[t.name?a("div",{staticClass:"card",on:{click:function(a){return s.loadChart(t.name)}}},[a("h3",[s._v(s._s(t.name))]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Compra")]),s._v(" "),a("span",{staticClass:"card-info-value"},[s._v(s._s(t.buy?t.buy:"--"))])]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Venda")]),s._v(" "),a("span",{staticClass:"card-info-value"},[s._v(s._s(t.sell?t.sell:"--"))])]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Variação")]),s._v(" "),a("span",{staticClass:"card-info-value",class:t.variation>=0?"positive":"negative"},[s._v(s._s(t.variation?t.variation+"%":"--"))])])]):s._e()])}),0),s._v(" "),a("div",{staticClass:"chart"},[a("h3",[s._v(s._s(s.titleChart))]),s._v(" "),a("line-chart",{attrs:{dataLabel:s.titleChart,data:s.dataChart,backgroundColor:"#ffffff8a"}})],1)])},staticRenderFns:[]};var p={name:"Stocks",data:function(){return{title:"Bolsas de valores",stocks:[],titleChart:"",dataChart:[]}},components:{LineChart:h},methods:{loadChart:function(s){this.dataChart=this.historyMock(),this.titleChart=s},historyMock:function(){return l()({length:7},function(){return Math.floor(10*Math.random())})}},mounted:function(){var s=this;d().then(function(t){s.stocks=t.data.results.stocks})}},f={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"stocks"},[a("h2",[s._v(s._s(s.title))]),s._v(" "),a("div",{staticClass:"cards"},s._l(s.stocks,function(t){return a("div",{key:t.name,staticClass:"card",on:{click:function(a){return s.loadChart(t.name)}}},[a("h3",[s._v(s._s(t.name))]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Localização")]),s._v(" "),a("span",{staticClass:"card-info-value"},[s._v(s._s(t.location?t.location:"--"))])]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Pontos")]),s._v(" "),a("span",{staticClass:"card-info-value"},[s._v(s._s(t.points?t.points:"--"))])]),s._v(" "),a("div",{staticClass:"card-info"},[a("span",{staticClass:"card-info-label"},[s._v("Variação")]),s._v(" "),a("span",{staticClass:"card-info-value",class:t.variation>=0?"positive":"negative"},[s._v(s._s(t.variation?t.variation+"%":"--"))])])])}),0),s._v(" "),a("div",{staticClass:"chart"},[a("h3",[s._v(s._s(s.titleChart))]),s._v(" "),a("line-chart",{attrs:{dataLabel:s.titleChart,data:s.dataChart,backgroundColor:"#ffffff8a"}})],1)])},staticRenderFns:[]};var j={name:"Quotations",data:function(){return{title:"Cotações"}},components:{Currencies:a("VU/8")(v,m,!1,function(s){a("XIjx")},"data-v-2bcc777c",null).exports,Stocks:a("VU/8")(p,f,!1,function(s){a("4yHk")},"data-v-5643482c",null).exports},methods:{logout:function(){sessionStorage.removeItem("auth"),this.$router.push({path:"/login"})}},created:function(){sessionStorage.getItem("auth")||this.$router.push({path:"/login"})}},g={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"quotations"},[a("header",[a("h1",[s._v(s._s(s.title))]),s._v(" "),a("span",{staticClass:"link",on:{click:function(t){return s.logout()}}},[s._v("Sair")])]),s._v(" "),a("section",{staticClass:"content"},[a("Currencies"),s._v(" "),a("Stocks")],1)])},staticRenderFns:[]};var _=a("VU/8")(j,g,!1,function(s){a("VPA2")},"data-v-09e3b5ad",null).exports,C=a("mvHQ"),k=a.n(C),b=a("NC6I"),w=a.n(b),y={name:"Register",data:function(){return{title:"Faça seu cadastro",name:"",email:"",password:"",users:[],errors:[],success:!1}},methods:{addUser:function(){this.checkErrors(),0===this.errors.length&&(this.userExists()?this.errors.push("Usuário já cadastrado!"):(this.users.push({name:this.name,email:this.email,password:w()(this.password)}),this.name="",this.email="",this.password="",this.errors=[],this.success=!0))},userExists:function(){return this.users.map(function(s){return s.email}).includes(this.email)},checkErrors:function(){if(this.errors=[],this.name&&this.validEmail(this.email)&&this.password)return!0;this.name||this.errors.push("Informe seu nome!"),this.validEmail(this.email)||this.errors.push("Informe um e-mail válido!"),this.password||this.errors.push("Informe uma senha!")},validEmail:function(s){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)}},mounted:function(){localStorage.getItem("users")&&(this.users=JSON.parse(localStorage.getItem("users")))},watch:{users:{handler:function(){localStorage.setItem("users",k()(this.users))},deep:!0}}},z={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"register"},[a("form",{on:{submit:function(t){return t.preventDefault(),s.addUser()}}},[a("h1",[s._v(" "+s._s(s.title)+" ")]),s._v(" "),s.errors.length?a("div",[a("ul",{staticClass:"errors"},s._l(s.errors,function(t){return a("li",{key:t,staticClass:"error"},[s._v(s._s(t))])}),0)]):s._e(),s._v(" "),s.success?a("div",{staticClass:"success"},[a("span",[s._v("Seu usuário foi cadastrado com sucesso!")]),s._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/login",tag:"span"}},[s._v("Clique aqui para fazer o login")])],1):s._e(),s._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:s.name},on:{input:function(t){t.target.composing||(s.name=t.target.value)}}})]),s._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{type:"email",placeholder:"E-mail"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}})]),s._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"Senha"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),s._v(" "),a("button",{attrs:{type:"submit"}},[s._v(" Cadastar ")]),s._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/login",tag:"span"}},[s._v("Já possui cadastro? Faça seu login!")])],1)])},staticRenderFns:[]};var E=a("VU/8")(y,z,!1,function(s){a("QDtX")},"data-v-8e36ceca",null).exports,x={name:"Login",data:function(){return{title:"Faça seu login",email:"",password:"",users:[],errors:[]}},methods:{login:function(){var s=this,t=!1;this.errors=[],this.users.forEach(function(a){a.email===s.email&&a.password===w()(s.password)&&(t=!0)}),t?(sessionStorage.setItem("auth",w()(this.email)),s.$router.push({path:"/"})):this.errors.push("E-mail ou senha inválida!")}},mounted:function(){localStorage.getItem("users")&&(this.users=JSON.parse(localStorage.getItem("users")))}},F={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login"},[a("form",{on:{submit:function(t){return t.preventDefault(),s.login()}}},[a("h1",[s._v(" "+s._s(s.title)+" ")]),s._v(" "),s.errors.length?a("div",[a("ul",{staticClass:"errors"},s._l(s.errors,function(t){return a("li",{key:t,staticClass:"error"},[s._v(s._s(t))])}),0)]):s._e(),s._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{type:"email",placeholder:"E-mail"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}})]),s._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"Senha"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),s._v(" "),a("button",{attrs:{type:"submit"}},[s._v(" Entrar ")])]),s._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/register",tag:"span"}},[s._v("Ainda não possui cadastro? Faça o seu!")])],1)},staticRenderFns:[]};var S=a("VU/8")(x,F,!1,function(s){a("ny53")},"data-v-957a132a",null).exports;e.a.use(i.a);var N=new i.a({routes:[{path:"/",name:"Quotations",component:_},{path:"/register",name:"Register",component:E},{path:"/login",name:"Login",component:S}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:N,components:{App:n},template:"<App/>"})},QDtX:function(s,t){},VPA2:function(s,t){},XIjx:function(s,t){},ny53:function(s,t){},uslO:function(s,t,a){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(s){return a(n(s))}function n(s){var t=e[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}r.keys=function(){return Object.keys(e)},r.resolve=n,s.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.b3e0973022ab3ed05134.js.map