(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{6717:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coffee-store/[id]",function(){return n(5556)}])},5556:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return le},default:function(){return de}});var r=n(4051),o=n.n(r),i=n(5893),a=n(9008),c=n(1664),u=n(5675),s=n(7889),f=n.n(s),l=n(4184),d=n.n(l),v=n(7294),h=n(1163),p=(n(8090),n(960));function g(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function m(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var b,y=function(){},w=y(),x=Object,_=function(e){return e===w},k=function(e){return"function"==typeof e},S=function(e,t){return x.assign({},e,t)},j="undefined",E=function(){return typeof window!=j},O=new WeakMap,N=0,T=function(e){var t,n,r=typeof e,o=e&&e.constructor,i=o==Date;if(x(e)!==e||i||o==RegExp)t=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=O.get(e))return t;if(t=++N+"~",O.set(e,t),o==Array){for(t="@",n=0;n<e.length;n++)t+=T(e[n])+",";O.set(e,t)}if(o==x){t="#";for(var a=x.keys(e).sort();!_(n=a.pop());)_(e[n])||(t+=n+":"+T(e[n])+",");O.set(e,t)}}return t},R=!0,C=E(),V=typeof document!=j,I=C&&window.addEventListener?window.addEventListener.bind(window):y,W=V?document.addEventListener.bind(document):y,P=C&&window.removeEventListener?window.removeEventListener.bind(window):y,L=V?document.removeEventListener.bind(document):y,D={isOnline:function(){return R},isVisible:function(){var e=V&&document.visibilityState;return _(e)||"hidden"!==e}},M={initFocus:function(e){return W("visibilitychange",e),I("focus",e),function(){L("visibilitychange",e),P("focus",e)}},initReconnect:function(e){var t=function(){R=!0,e()},n=function(){R=!1};return I("online",t),I("offline",n),function(){P("online",t),P("offline",n)}}},A=!E()||"Deno"in window,B=function(e){return E()&&typeof window.requestAnimationFrame!=j?window.requestAnimationFrame(e):setTimeout(e,1)},H=A?v.useEffect:v.useLayoutEffect,F="undefined"!==typeof navigator&&navigator.connection,q=!A&&F&&(["slow-2g","2g"].includes(F.effectiveType)||F.saveData),U=function(e){if(k(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?T(e):"",t,e?"$swr$"+e:""]},G=new WeakMap,J=function(e,t,n,r,o,i,a){void 0===a&&(a=!0);var c=G.get(e),u=c[0],s=c[1],f=c[3],l=u[t],d=s[t];if(a&&d)for(var v=0;v<d.length;++v)d[v](n,r,o);return i&&(delete f[t],l&&l[0])?l[0](2).then((function(){return e.get(t)})):e.get(t)},X=0,Q=function(){return++X},$=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g(void 0,void 0,void 0,(function(){var t,n,r,o,i,a,c,u,s,f,l,d,v,h,p,g,b,y,x,j;return m(this,(function(m){switch(m.label){case 0:if(t=e[0],n=e[1],r=e[2],o=e[3],a=!!_((i="boolean"===typeof o?{revalidate:o}:o||{}).populateCache)||i.populateCache,c=!1!==i.revalidate,u=!1!==i.rollbackOnError,s=i.optimisticData,f=U(n),l=f[0],d=f[2],!l)return[2];if(v=G.get(t),h=v[2],e.length<3)return[2,J(t,l,t.get(l),w,w,c,!0)];if(p=r,b=Q(),h[l]=[b,0],y=!_(s),x=t.get(l),y&&(t.set(l,s),J(t,l,s)),k(p))try{p=p(t.get(l))}catch(E){g=E}return p&&k(p.then)?[4,p.catch((function(e){g=e}))]:[3,2];case 1:if(p=m.sent(),b!==h[l][0]){if(g)throw g;return[2,p]}g&&y&&u&&(a=!0,p=x,t.set(l,x)),m.label=2;case 2:return a&&(g||(k(a)&&(p=a(p,x)),t.set(l,p)),t.set(d,S(t.get(d),{error:g}))),h[l][1]=Q(),[4,J(t,l,p,g,w,c,!!a)];case 3:if(j=m.sent(),g)throw g;return[2,a?j:p]}}))}))},z=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},K=function(e,t){if(!G.has(e)){var n=S(M,t),r={},o=$.bind(w,e),i=y;if(G.set(e,[r,{},{},{},o]),!A){var a=n.initFocus(setTimeout.bind(w,z.bind(w,r,0))),c=n.initReconnect(setTimeout.bind(w,z.bind(w,r,1)));i=function(){a&&a(),c&&c(),G.delete(e)}}return[e,o,i]}return[e,G.get(e)[4]]},Y=K(new Map),Z=Y[0],ee=Y[1],te=S({onLoadingSlow:y,onSuccess:y,onError:y,onErrorRetry:function(e,t,n,r,o){var i=n.errorRetryCount,a=o.retryCount,c=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!_(i)&&a>i||setTimeout(r,c,o)},onDiscarded:y,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:q?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:q?5e3:3e3,compare:function(e,t){return T(e)==T(t)},isPaused:function(){return!1},cache:Z,mutate:ee,fallback:{}},D),ne=function(e,t){var n=S(e,t);if(t){var r=e.use,o=e.fallback,i=t.use,a=t.fallback;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=S(o,a))}return n},re=(0,v.createContext)({}),oe=function(e){return k(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},ie=function(){return S(te,(0,v.useContext)(re))},ae=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},ce={dedupe:!0},ue=(x.defineProperty((function(e){var t=e.value,n=ne((0,v.useContext)(re),t),r=t&&t.provider,o=(0,v.useState)((function(){return r?K(r(n.cache||Z),t):w}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),H((function(){return o?o[2]:w}),[]),(0,v.createElement)(re.Provider,S(e,{value:n}))}),"default",{value:te}),b=function(e,t,n){var r=n.cache,o=n.compare,i=n.fallbackData,a=n.suspense,c=n.revalidateOnMount,u=n.refreshInterval,s=n.refreshWhenHidden,f=n.refreshWhenOffline,l=G.get(r),d=l[0],h=l[1],p=l[2],b=l[3],y=U(e),x=y[0],j=y[1],E=y[2],O=(0,v.useRef)(!1),N=(0,v.useRef)(!1),T=(0,v.useRef)(x),R=(0,v.useRef)(t),C=(0,v.useRef)(n),V=function(){return C.current},I=function(){return V().isVisible()&&V().isOnline()},W=function(e){return r.set(E,S(r.get(E),e))},P=r.get(x),L=_(i)?n.fallback[x]:i,D=_(P)?L:P,M=r.get(E)||{},F=M.error,q=!O.current,X=function(){return q&&!_(c)?c:!V().isPaused()&&(a?!_(D):_(D)||n.revalidateIfStale)},z=!(!x||!t)&&(!!M.isValidating||q&&X()),K=function(e,t){var n=(0,v.useState)({})[1],r=(0,v.useRef)(e),o=(0,v.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,v.useCallback)((function(e){var i=!1,a=r.current;for(var c in e){var u=c;a[u]!==e[u]&&(a[u]=e[u],o.current[u]&&(i=!0))}i&&!t.current&&n({})}),[]);return H((function(){r.current=e})),[r,o.current,i]}({data:D,error:F,isValidating:z},N),Y=K[0],Z=K[1],ee=K[2],te=(0,v.useCallback)((function(e){return g(void 0,void 0,void 0,(function(){var t,i,a,c,u,s,f,l,d,v,h,g,y;return m(this,(function(m){switch(m.label){case 0:if(t=R.current,!x||!t||N.current||V().isPaused())return[2,!1];c=!0,u=e||{},s=!b[x]||!u.dedupe,f=function(){return!N.current&&x===T.current&&O.current},l=function(){var e=b[x];e&&e[1]===a&&delete b[x]},d={isValidating:!1},v=function(){W({isValidating:!1}),f()&&ee(d)},W({isValidating:!0}),ee({isValidating:!0}),m.label=1;case 1:return m.trys.push([1,3,,4]),s&&(J(r,x,Y.current.data,Y.current.error,!0),n.loadingTimeout&&!r.get(x)&&setTimeout((function(){c&&f()&&V().onLoadingSlow(x,n)}),n.loadingTimeout),b[x]=[t.apply(void 0,j),Q()]),y=b[x],i=y[0],a=y[1],[4,i];case 2:return i=m.sent(),s&&setTimeout(l,n.dedupingInterval),b[x]&&b[x][1]===a?(W({error:w}),d.error=w,h=p[x],!_(h)&&(a<=h[0]||a<=h[1]||0===h[1])?(v(),s&&f()&&V().onDiscarded(x),[2,!1]):(o(Y.current.data,i)?d.data=Y.current.data:d.data=i,o(r.get(x),i)||r.set(x,i),s&&f()&&V().onSuccess(i,x,n),[3,4])):(s&&f()&&V().onDiscarded(x),[2,!1]);case 3:return g=m.sent(),l(),V().isPaused()||(W({error:g}),d.error=g,s&&f()&&(V().onError(g,x,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||k(n.shouldRetryOnError)&&n.shouldRetryOnError(g))&&I()&&V().onErrorRetry(g,x,n,te,{retryCount:(u.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,v(),f()&&s&&J(r,x,d.data,d.error,!1),[2,!0]}}))}))}),[x]),ne=(0,v.useCallback)($.bind(w,r,(function(){return T.current})),[]);if(H((function(){R.current=t,C.current=n})),H((function(){if(x){var e=x!==T.current,t=te.bind(w,ce),n=0,r=ae(x,h,(function(e,t,n){ee(S({error:t,isValidating:n},o(Y.current.data,e)?w:{data:e}))})),i=ae(x,d,(function(e){if(0==e){var r=Date.now();V().revalidateOnFocus&&r>n&&I()&&(n=r+V().focusThrottleInterval,t())}else if(1==e)V().revalidateOnReconnect&&I()&&t();else if(2==e)return te()}));return N.current=!1,T.current=x,O.current=!0,e&&ee({data:D,error:F,isValidating:z}),X()&&(_(D)||A?t():B(t)),function(){N.current=!0,r(),i()}}}),[x,te]),H((function(){var e;function t(){var t=k(u)?u(D):u;t&&-1!==e&&(e=setTimeout(n,t))}function n(){Y.current.error||!s&&!V().isVisible()||!f&&!V().isOnline()?t():te(ce).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[u,s,f,te]),(0,v.useDebugValue)(D),a&&_(D)&&x)throw R.current=t,C.current=n,N.current=!1,_(F)?te(ce):F;return{mutate:ne,get data(){return Z.data=!0,D},get error(){return Z.error=!0,F},get isValidating(){return Z.isValidating=!0,z}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ie(),r=oe(e),o=r[0],i=r[1],a=r[2],c=ne(n,a),u=b,s=c.use;if(s)for(var f=s.length;f-- >0;)u=s[f](u);return u(o,i||c.fetcher,c)});function se(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function fe(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){se(i,r,o,a,c,"next",e)}function c(e){se(i,r,o,a,c,"throw",e)}a(void 0)}))}}var le=!0,de=function(e){var t=(0,h.useRouter)();if(t.isFallback)return(0,i.jsx)("div",{children:"Loading..."});var n=t.query.id,r=(0,v.useState)(e.coffeeStore),s=r[0],l=r[1],g=(0,v.useContext)(p.xf).state.coffeeStores,m=function(){var e=fe(o().mark((function e(t){var n,r,i,a,c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.name,r=t.neighbourhood,i=t.imgUrl,t.voting,a=t.address,c=t.id,e.next=4,fetch("/api/createCoffeeStore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,name:n,voting:0,imgUrl:i,neighbourhood:r[0]||"",address:a||""})});case 4:return u=e.sent,e.next=7,u.json();case 7:s=e.sent,console.log({dbCoffeeStore:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){if((r=e.coffeeStore)&&0===Object.keys(r).length){if(g.length>0){var t=g.find((function(e){return e.id.toString()===n}));t&&(l(t),m(t))}}else m(e.coffeeStore);var r}),[n,e,e.coffeeStore]);var b=s.address,y=s.name,w=s.neighbourhood,x=s.imgUrl,_=(0,v.useState)(0),k=_[0],S=_[1],j=ue("/api/getCoffeeStoreById?id=".concat(n),(function(e){return fetch(e).then((function(e){return e.json()}))})),E=j.data,O=j.error;(0,v.useEffect)((function(){E&&E.length>0&&(console.log("data from SWR",E),l(E[0]),S(E[0].voting))}),[E]);var N=function(){var e=fe(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handle upvote"),e.prev=1,e.next=4,fetch("/api/favouriteCoffeeStoreById",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})});case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,console.log({dbCoffeeStore:r}),r&&r.length>0&&S(k+1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error upvoting the coffee store",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return O?(0,i.jsx)("div",{children:"Something went wrong"}):(0,i.jsxs)("div",{className:f().layout,children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:y}),(0,i.jsx)("meta",{name:"description",content:"".concat(y," coffee store")})]}),(0,i.jsxs)("div",{className:f().container,children:[(0,i.jsxs)("div",{className:f().col1,children:[(0,i.jsx)("div",{className:f().backToHomeLink,children:(0,i.jsx)(c.default,{href:"/",children:(0,i.jsx)("a",{children:"\u2190 Back to home"})})}),(0,i.jsx)("div",{className:f().nameWrapper,children:(0,i.jsx)("h1",{className:f().name,children:y})}),(0,i.jsx)(u.default,{src:x||"https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",width:600,height:360,className:f().storeImg,alt:y})]}),(0,i.jsxs)("div",{className:d()("glass",f().col2),children:[(0,i.jsxs)("div",{className:f().iconWrapper,children:[(0,i.jsx)(u.default,{src:"/static/icons/places.svg",width:"24",height:"24",alt:"places icon"}),(0,i.jsx)("p",{className:f().text,children:b})]}),w&&(0,i.jsxs)("div",{className:f().iconWrapper,children:[(0,i.jsx)(u.default,{src:"/static/icons/nearMe.svg",width:"24",height:"24",alt:"near me icon"}),(0,i.jsx)("p",{className:f().text,children:w})]}),(0,i.jsxs)("div",{className:f().iconWrapper,children:[(0,i.jsx)(u.default,{src:"/static/icons/star.svg",width:"24",height:"24",alt:"star icon"}),(0,i.jsx)("p",{className:f().text,children:k})]}),(0,i.jsx)("button",{className:f().upvoteButton,onClick:N,children:"Up vote!"})]})]})]})}},7889:function(e){e.exports={container:"coffee-store_container__hK4Qg",layout:"coffee-store_layout__Vf0fs",col1:"coffee-store_col1__VnuIx",backToHomeLink:"coffee-store_backToHomeLink__iqPWe",nameWrapper:"coffee-store_nameWrapper__hs8UX",name:"coffee-store_name__QrPVr",storeImgWrapper:"coffee-store_storeImgWrapper__OqMHN",storeImg:"coffee-store_storeImg__z5r9A",col2:"coffee-store_col2__TASOZ",iconWrapper:"coffee-store_iconWrapper__ASgsk",text:"coffee-store_text__PO_iM",upvoteButton:"coffee-store_upvoteButton__Bubpv"}},1163:function(e,t,n){e.exports=n(387)},8090:function(e){"use strict";e.exports=[]}},function(e){e.O(0,[78,774,888,179],(function(){return t=6717,e(e.s=t);var t}));var t=e.O();_N_E=t}]);