(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"13e2":function(e,t,n){},"1cbd":function(e,t,n){},"3e10":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6a1e":function(e,t,n){"use strict";n("13e2")},9938:function(e,t,n){"use strict";n("3e10")},"9c0c":function(e,t,n){},a521:function(e,t,n){"use strict";n("df61")},a9b1:function(e,t,n){"use strict";n("1cbd")},cd49:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v(" Journal ")]),n("router-link",{attrs:{to:"/reports"}},[e._v(" Einträge ")]),n("router-link",{attrs:{to:"/export"}},[e._v(" Export ")]),n("router-view")],1)])},i=[],c=n("d4ec"),u=n("262e"),s=n("2caf"),l=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(a["a"]),p=l,f=(n("5c0b"),n("2877")),d=Object(f["a"])(p,o,i,!1,null,null,null),b=d.exports,v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home page"},[n("div",{staticClass:"sub-header"},[e._v("Es gibt vieles in unserem Leben, wofür wir dankbar sein können. Dankbarkeit kann sich auf alles Mögliche beziehen - Erlebnisse, Objekte, Personen, etc. Deinen Gedanken sind keine Grenzen gesetzt! Erinnere dich an den vergangenen Tag und notiere dir, wofür du heute dankbar bist.")]),n("report-editor",{attrs:{buttonText:"Report eingeben",content:e.content,submit:e.submit},on:{"update:content":function(t){e.content=t}}})],1)},g=[],O=(n("7db0"),n("bee2")),j=n("9ab4"),y=n("1b40"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("textarea",{domProps:{value:e.content},on:{input:function(t){return e.$emit("update:content",t.target.value)}}})]),n("button",{on:{click:function(t){return e.submit()}}},[e._v(e._s(e.buttonText))])])},k=[],_=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(y["c"]);Object(j["a"])([Object(y["b"])()],_.prototype,"content",void 0),Object(j["a"])([Object(y["b"])()],_.prototype,"submit",void 0),Object(j["a"])([Object(y["b"])()],_.prototype,"buttonText",void 0),_=Object(j["a"])([y["a"]],_);var x=_,S=x,E=Object(f["a"])(S,w,k,!1,null,null,null),R=E.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"note"},[e._v("Morgen kannst du hier wieder einen Eintrag verfassen.")])])}],C=(n("6a1e"),{}),D=Object(f["a"])(C,I,P,!1,null,"136c89c0",null),M=D.exports,N=(n("4de4"),n("d3b7"),"gratitude-reporter"),$=function(){function e(){Object(c["a"])(this,e)}return Object(O["a"])(e,null,[{key:"buildInitialState",value:function(e){var t={userId:e,reports:[]};return JSON.stringify(t)}},{key:"initialiseIfNeeded",value:function(e){var t=localStorage.getItem(N);return t||localStorage.setItem(N,this.buildInitialState(e)),Promise.resolve()}},{key:"getParticipantId",value:function(){var e=localStorage.getItem(N);if(!e)return Promise.reject("state may not be null");var t=JSON.parse(e);return Promise.resolve(t.userId)}},{key:"addReport",value:function(e){var t=localStorage.getItem(N);if(!t)return Promise.reject("state may not be null");var n=JSON.parse(t);return n.reports.push(e),localStorage.setItem(N,JSON.stringify(n)),Promise.resolve()}},{key:"loadReports",value:function(){var e=localStorage.getItem(N);if(!e)return Promise.reject("state may not be null");var t=JSON.parse(e);return Promise.resolve(t.reports)}},{key:"deleteReport",value:function(e){var t=localStorage.getItem(N);if(!t)return Promise.reject("state may not be null");var n=JSON.parse(t),r=n.reports.filter((function(t){return t.timestamp!==e}));return n.reports=r,localStorage.setItem(N,JSON.stringify(n)),Promise.resolve()}}]),e}(),J=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.alreadyReported=!1,e.content="",e.toastOptions={duration:2e3,position:"bottom-center",fullWidth:!0},e}return Object(O["a"])(n,[{key:"created",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.loadReports();case 2:t=e.sent,t.find((function(e){var t=new Date(e.timestamp),n=new Date(Date.now()),r=t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate();return r}));case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"clearEditor",value:function(){this.content=""}},{key:"submit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Date.now(),n={content:this.content,timestamp:t},e.next=4,$.addReport(n);case 4:this.clearEditor(),r=this.$toasted.show("Danke für deinen Report!",this.toastOptions),r.goAway(2e3);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(y["c"]);J=Object(j["a"])([Object(y["a"])({components:{ReportEditor:R,AlreadyReported:M}})],J);var A=J,F=A,T=Object(f["a"])(F,m,g,!1,null,null,null),z=T.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"report-container"},e._l(e.reports,(function(e){return n("list-entry",{key:e.timestamp,attrs:{report:e}})})),1)])},G=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-entry"},[n("div",{staticClass:"metadata"},[e._v(e._s(e.getFormatted()))]),n("div",{staticClass:"content"},[e._v(e._s(e.report.content))])])},L=[],q=(n("99af"),function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(O["a"])(n,[{key:"getFormatted",value:function(){var e=new Date(this.report.timestamp),t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return"".concat(t,".").concat(n,".").concat(r)}}]),n}(y["c"]));Object(j["a"])([Object(y["b"])()],q.prototype,"report",void 0),q=Object(j["a"])([y["a"]],q);var B=q,U=B,W=(n("a9b1"),Object(f["a"])(U,H,L,!1,null,"1b4f3b7b",null)),Z=W.exports,K=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.reports=[],e}return Object(O["a"])(n,[{key:"created",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.loadReports();case 2:this.reports=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(y["c"]);K=Object(j["a"])([Object(y["a"])({components:{ListEntry:Z}})],K);var Q=K,V=Q,X=(n("a521"),Object(f["a"])(V,Y,G,!1,null,"9de76882",null)),ee=X.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"sub-header"},[e._v(" Hier kannst du deine Einträge zum Abschluss der Studie exportieren. Dabei werden selbstverständlich nur Metadaten (also Anzahl und Zeitpunkt) der Einträge exportiert. Die eigentlichen Inhalte bleiben privat. ")]),n("button",{on:{click:function(t){return e.sendMail()}}},[e._v("Einträge exportieren")])])},ne=[],re=(n("d81d"),n("13d5"),n("25f0"),"participant_id;timestamp\n"),ae=function(){function e(t,n){Object(c["a"])(this,e),this.participantId=t,this.report=n}return Object(O["a"])(e,[{key:"toString",value:function(){return"".concat(this.participantId,";").concat(this.report.timestamp,"\n")}}]),e}(),oe=function(){function e(){Object(c["a"])(this,e)}return Object(O["a"])(e,null,[{key:"generateExport",value:function(e,t){var n=t.map((function(t){return new ae(e,t)})).map((function(e){return e.toString()})).reduce((function(e,t){return e+t}));return re+n}}]),e}(),ie=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(O["a"])(n,[{key:"sendMail",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.loadReports();case 2:return t=e.sent,e.next=5,$.getParticipantId();case 5:n=e.sent,r="dankbarkeitsstudie@gmail.com",a=oe.generateExport(n,t),o=encodeURIComponent(a),window.location.href="mailto:".concat(r,"?body=").concat(o);case 10:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(y["c"]);ie=Object(j["a"])([Object(y["a"])({components:{}})],ie);var ce=ie,ue=ce,se=(n("9938"),Object(f["a"])(ue,te,ne,!1,null,"1b78c2e7",null)),le=se.exports;a["a"].use(h["a"]);var pe=[{path:"/",name:"Home",component:z},{path:"/reports",name:"Reports",component:ee},{path:"/export",name:"Export",component:le}],fe=new h["a"]({routes:pe}),de=fe,be=n("ec26"),ve=n("a65d"),he=n.n(ve);a["a"].config.productionTip=!1,a["a"].use(he.a),new a["a"]({router:de,render:function(e){return e(b)},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.initialiseIfNeeded(Object(be["a"])());case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}).$mount("#app")},df61:function(e,t,n){}});
//# sourceMappingURL=app.67b06385.js.map