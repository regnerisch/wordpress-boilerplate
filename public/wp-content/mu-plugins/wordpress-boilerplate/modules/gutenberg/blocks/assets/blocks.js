!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/public/wp-content/mu-plugins/wordpress-boilerplate/modules/gutenberg/blocks/assets/",n(n.s=0)}({"/GqU":function(t,e,n){var r=n("RK3t"),o=n("HYAF");t.exports=function(t){return r(o(t))}},"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(t,e,n){var r=n("2oRo");t.exports=r.Promise},0:function(t,e,n){n("70SZ"),t.exports=n("xcBd")},"0BK2":function(t,e){t.exports={}},"0Dky":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"0GbY":function(t,e,n){var r=n("Qo9l"),o=n("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},"0eef":function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},"0rvr":function(t,e,n){var r=n("glrk"),o=n("O741");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},"1E5z":function(t,e,n){var r=n("m/L8").f,o=n("UTVS"),i=n("tiKp")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"2oRo":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},"33Wh":function(t,e,n){var r=n("yoRg"),o=n("eDl+");t.exports=Object.keys||function(t){return r(t,o)}},"4WOD":function(t,e,n){var r=n("UTVS"),o=n("ewvW"),i=n("93I0"),c=n("4Xet"),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"4Xet":function(t,e,n){var r=n("0Dky");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},"4mDm":function(t,e,n){"use strict";var r=n("/GqU"),o=n("RNIs"),i=n("P4y1"),c=n("afO8"),u=n("fdAy"),a=c.set,l=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},"4syw":function(t,e,n){var r=n("busE");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},"5mdu":function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},"5s+n":function(t,e,n){"use strict";var r,o,i,c,u=n("I+eb"),a=n("xDBR"),l=n("2oRo"),s=n("0GbY"),f=n("/qmn"),p=n("busE"),v=n("4syw"),m=n("1E5z"),d=n("JiZb"),h=n("hh1v"),y=n("HAuM"),w=n("GarU"),g=n("xrYK"),b=n("iSVu"),x=n("ImZN"),O=n("HH4o"),S=n("SEBh"),j=n("LPSS").set,k=n("tXUg"),E=n("zfnd"),P=n("RN6c"),V=n("8GlL"),R=n("5mdu"),M=n("afO8"),T=n("lMq5"),N=n("tiKp"),D=n("LQDL"),_=N("species"),A="Promise",B=M.get,H=M.set,I=M.getterFor(A),z=f,G=l.TypeError,U=l.document,L=l.process,C=s("fetch"),K=V.f,Y=K,W="process"==g(L),F=!!(U&&U.createEvent&&l.dispatchEvent),J=T(A,(function(){if(!(b(z)!==String(z))){if(66===D)return!0;if(!W&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!z.prototype.finally)return!0;if(D>=51&&/native code/.test(z))return!1;var t=z.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[_]=e,!(t.then((function(){}))instanceof e)})),q=J||!O((function(t){z.all(t).catch((function(){}))})),Z=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},Q=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;k((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,l,s=r[c++],f=i?s.ok:s.fail,p=s.resolve,v=s.reject,m=s.domain;try{f?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===f?u=o:(m&&m.enter(),u=f(o),m&&(m.exit(),l=!0)),u===s.promise?v(G("Promise-chain cycle")):(a=Z(u))?a.call(u,p,v):p(u)):v(o)}catch(t){m&&!l&&m.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&$(t,e)}))}},X=function(t,e,n){var r,o;F?((r=U.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},(o=l["on"+t])?o(r):"unhandledrejection"===t&&P("Unhandled promise rejection",n)},$=function(t,e){j.call(l,(function(){var n,r=e.value;if(tt(e)&&(n=R((function(){W?L.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),e.rejection=W||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){j.call(l,(function(){W?L.emit("rejectionHandled",t):X("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Q(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw G("Promise can't be resolved itself");var o=Z(n);o?k((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,Q(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};J&&(z=function(t){w(this,z,A),y(t),r.call(this);var e=B(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){H(this,{type:A,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(z.prototype,{then:function(t,e){var n=I(this),r=K(S(this,z));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=W?L.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Q(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=B(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},V.f=K=function(t){return t===z||t===i?new o(t):Y(t)},a||"function"!=typeof f||(c=f.prototype.then,p(f.prototype,"then",(function(t,e){var n=this;return new z((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof C&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(z,C.apply(l,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:z}),m(z,A,!1,!0),d(A),i=s(A),u({target:A,stat:!0,forced:J},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),u({target:A,stat:!0,forced:a||J},{resolve:function(t){return E(a&&this===i?z:this,t)}}),u({target:A,stat:!0,forced:q},{all:function(t){var e=this,n=K(e),r=n.resolve,o=n.reject,i=R((function(){var n=y(e.resolve),i=[],c=0,u=1;x(t,(function(t){var a=c++,l=!1;i.push(void 0),u++,n.call(e,t).then((function(t){l||(l=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,o=R((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},"6JNq":function(t,e,n){var r=n("UTVS"),o=n("Vu81"),i=n("Bs8V"),c=n("m/L8");t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||u(t,s,a(e,s))}}},"6VoE":function(t,e,n){var r=n("tiKp"),o=n("P4y1"),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},"70SZ":function(t,e,n){"use strict";n.r(e);n("4mDm"),n("5s+n")},"8GlL":function(t,e,n){"use strict";var r=n("HAuM"),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},"8W7c":function(t,e){var n=wp.components,r=n.Path,o=n.SVG;wp.domReady((function(){wp.blocks.unregisterBlockVariation("core/columns","two-columns-equal"),wp.blocks.unregisterBlockVariation("core/columns","three-columns-equal"),wp.blocks.unregisterBlockVariation("core/columns","two-columns-one-third-two-thirds"),wp.blocks.unregisterBlockVariation("core/columns","two-columns-two-thirds-one-third"),wp.blocks.unregisterBlockVariation("core/columns","three-columns-wider-center"),wp.blocks.registerBlockVariation("core/columns",[{name:"1/2-1/2",title:"1/2 Spalten",isDefault:!1,attributes:{className:""},innerBlocks:[["core/column",{className:"w-full md:w-1/2 px-2"}],["core/column",{className:"w-full md:w-1/2 px-2"}]],icon:wp.element.createElement(o,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"})),scope:["block"]},{name:"1/3-1/3-1/3",title:"1/3 Spalten",isDefault:!1,attributes:{className:""},innerBlocks:[["core/column",{className:"w-full md:w-1/3 px-2"}],["core/column",{className:"w-full md:w-1/3 px-2"}],["core/column",{className:"w-full md:w-1/3 px-2"}]],icon:wp.element.createElement(o,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{fillRule:"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"})),scope:["block"]},{name:"1/4-1/4-1/4-1/4",title:"1/4 Spalten",isDefault:!1,attributes:{className:""},innerBlocks:[["core/column",{className:"w-full md:w-1/4 px-2"}],["core/column",{className:"w-full md:w-1/4 px-2"}],["core/column",{className:"w-full md:w-1/4 px-2"}],["core/column",{className:"w-full md:w-1/4 px-2"}]],icon:wp.element.createElement(o,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{fillRule:"evenodd",d:"M41,14c0-1.1-0.9-2-2-2H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14z M23.2,34H17V14h6.2V34z M25,34V14h6.3v20H25z M32.7,34V14h6.3v20H32.7z M15.3,34H9.1V14h6.3V34z"})),scope:["block"]},{name:"1/5-1/5-1/5-1/5-1/5",title:"1/5 Spalten",isDefault:!1,attributes:{className:""},innerBlocks:[["core/column",{className:"w-full md:w-1/2 lg:w-1/5 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/5 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/5 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/5 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/5 px-2"}]],icon:wp.element.createElement(o,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{fillRule:"evenodd",d:"M41,14c0-1.1-0.9-2-2-2H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14z M20.2,34h-4.9V14h4.9V34 z M21.6,34V14h4.9v20H21.6z M27.7,34V14h4.9v20H27.7z M34,34V14h4.9v20H34z M14,34H9.1V14H14V34z"})),scope:["block"]},{name:"1/6-1/6-1/6-1/6-1/6-1/6",title:"1/6 Spalten",isDefault:!1,attributes:{className:""},innerBlocks:[["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}],["core/column",{className:"w-full md:w-1/2 lg:w-1/6 px-2"}]],icon:wp.element.createElement(o,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{fillRule:"evenodd",d:"M41,14c0-1.1-0.9-2-2-2H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14z M18.3,34h-4.1V14h4.1V34 z M19.4,34V14h4.1v20H19.4z M24.4,34V14h4.1v20H24.4z M29.6,34V14h4.1v20H29.6z M34.8,34V14h4.1v20H34.8z M13.2,34H9.1V14h4.1V34z"})),scope:["block"]}])})),wp.hooks.addFilter("blocks.getSaveElement","slug/modify-get-save-content-extra-props",(function(t,e,n){if("core/columns"!==e.name)return t;return wp.element.createElement("div",{className:"px-2"},t)}))},"93I0":function(t,e,n){var r=n("VpIT"),o=n("kOOl"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},"9d/t":function(t,e,n){var r=n("AO7/"),o=n("xrYK"),i=n("tiKp")("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"AO7/":function(t,e,n){var r={};r[n("tiKp")("toStringTag")]="z",t.exports="[object z]"===String(r)},Bs8V:function(t,e,n){var r=n("g6v/"),o=n("0eef"),i=n("XGwC"),c=n("/GqU"),u=n("wE6v"),a=n("UTVS"),l=n("DPsx"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),l)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},DDV2:function(t,e,n){},DPsx:function(t,e,n){var r=n("g6v/"),o=n("0Dky"),i=n("zBJ4");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},GarU:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},HAuM:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HH4o:function(t,e,n){var r=n("tiKp")("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},HNyW:function(t,e,n){var r=n("NC/Y");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},HYAF:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"I+eb":function(t,e,n){var r=n("2oRo"),o=n("Bs8V").f,i=n("kRJp"),c=n("busE"),u=n("zk60"),a=n("6JNq"),l=n("lMq5");t.exports=function(t,e){var n,s,f,p,v,m=t.target,d=t.global,h=t.stat;if(n=d?r:h?r[m]||u(m,{}):(r[m]||{}).prototype)for(s in e){if(p=e[s],f=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!l(d?s:m+(h?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},I8vh:function(t,e,n){var r=n("ppGB"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},ImZN:function(t,e,n){var r=n("glrk"),o=n("6VoE"),i=n("UMSQ"),c=n("A2ZE"),u=n("NaFW"),a=n("m92n"),l=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,s,f){var p,v,m,d,h,y,w,g=c(e,n,s?2:1);if(f)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(m=0,d=i(t.length);d>m;m++)if((h=s?g(r(w=t[m])[0],w[1]):g(t[m]))&&h instanceof l)return h;return new l(!1)}p=v.call(t)}for(y=p.next;!(w=y.call(p)).done;)if("object"==typeof(h=a(p,g,w.value,s))&&h&&h instanceof l)return h;return new l(!1)}).stop=function(t){return new l(!0,t)}},JBy8:function(t,e,n){var r=n("yoRg"),o=n("eDl+").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},JiZb:function(t,e,n){"use strict";var r=n("0GbY"),o=n("m/L8"),i=n("tiKp"),c=n("g6v/"),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},LPSS:function(t,e,n){var r,o,i,c=n("2oRo"),u=n("0Dky"),a=n("xrYK"),l=n("A2ZE"),s=n("G+Rx"),f=n("zBJ4"),p=n("HNyW"),v=c.location,m=c.setImmediate,d=c.clearImmediate,h=c.process,y=c.MessageChannel,w=c.Dispatch,g=0,b={},x=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},O=function(t){return function(){x(t)}},S=function(t){x(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};m&&d||(m=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},d=function(t){delete b[t]},"process"==a(h)?r=function(t){h.nextTick(O(t))}:w&&w.now?r=function(t){w.now(O(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=S,r=l(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)||"file:"===v.protocol?r="onreadystatechange"in f("script")?function(t){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),x(t)}}:function(t){setTimeout(O(t),0)}:(r=j,c.addEventListener("message",S,!1))),t.exports={set:m,clear:d}},LQDL:function(t,e,n){var r,o,i=n("2oRo"),c=n("NC/Y"),u=i.process,a=u&&u.versions,l=a&&a.v8;l?o=(r=l.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},"N+g0":function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("glrk"),c=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},"NC/Y":function(t,e,n){var r=n("0GbY");t.exports=r("navigator","userAgent")||""},NaFW:function(t,e,n){var r=n("9d/t"),o=n("P4y1"),i=n("tiKp")("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},O741:function(t,e,n){var r=n("hh1v");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},P4y1:function(t,e){t.exports={}},Qo9l:function(t,e,n){var r=n("2oRo");t.exports=r},RK3t:function(t,e,n){var r=n("0Dky"),o=n("xrYK"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},RN6c:function(t,e,n){var r=n("2oRo");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},RNIs:function(t,e,n){var r=n("tiKp"),o=n("fHMY"),i=n("m/L8"),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},SEBh:function(t,e,n){var r=n("glrk"),o=n("HAuM"),i=n("tiKp")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},TLoZ:function(t,e){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r,o=wp.blocks,i=o.getCategories;(0,o.setCategories)([{slug:"wordpress-boilerplate",title:"Wordpress Boilerplate"}].concat(function(t){if(Array.isArray(t))return n(t)}(r=i().filter((function(t){return"wordpress-boilerplate"!==t.slug})))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},TWQb:function(t,e,n){var r=n("/GqU"),o=n("UMSQ"),i=n("I8vh"),c=function(t){return function(e,n,c){var u,a=r(e),l=o(a.length),s=i(c,l);if(t&&n!=n){for(;l>s;)if((u=a[s++])!=u)return!0}else for(;l>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},UMSQ:function(t,e,n){var r=n("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},UTVS:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},VpIT:function(t,e,n){var r=n("xDBR"),o=n("xs3f");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,e,n){var r=n("0GbY"),o=n("JBy8"),i=n("dBg+"),c=n("glrk");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},afO8:function(t,e,n){var r,o,i,c=n("f5p1"),u=n("2oRo"),a=n("hh1v"),l=n("kRJp"),s=n("UTVS"),f=n("93I0"),p=n("0BK2"),v=u.WeakMap;if(c){var m=new v,d=m.get,h=m.has,y=m.set;r=function(t,e){return y.call(m,t,e),e},o=function(t){return d.call(m,t)||{}},i=function(t){return h.call(m,t)}}else{var w=f("state");p[w]=!0,r=function(t,e){return l(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},busE:function(t,e,n){var r=n("2oRo"),o=n("kRJp"),i=n("UTVS"),c=n("zk60"),u=n("iSVu"),a=n("afO8"),l=a.get,s=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=f.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u(this)}))},"dBg+":function(t,e){e.f=Object.getOwnPropertySymbols},"eDl+":function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,e,n){var r=n("HYAF");t.exports=function(t){return Object(r(t))}},f5p1:function(t,e,n){var r=n("2oRo"),o=n("iSVu"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},fHMY:function(t,e,n){var r,o=n("glrk"),i=n("N+g0"),c=n("eDl+"),u=n("0BK2"),a=n("G+Rx"),l=n("zBJ4"),s=n("93I0"),f=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;m=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete m.prototype[c[n]];return m()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=m(),void 0===e?n:i(n,e)}},fdAy:function(t,e,n){"use strict";var r=n("I+eb"),o=n("ntOU"),i=n("4WOD"),c=n("0rvr"),u=n("1E5z"),a=n("kRJp"),l=n("busE"),s=n("tiKp"),f=n("xDBR"),p=n("P4y1"),v=n("rpNk"),m=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),y=function(){return this};t.exports=function(t,e,n,s,v,w,g){o(n,e,s);var b,x,O,S=function(t){if(t===v&&V)return V;if(!d&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",k=!1,E=t.prototype,P=E[h]||E["@@iterator"]||v&&E[v],V=!d&&P||S(v),R="Array"==e&&E.entries||P;if(R&&(b=i(R.call(new t)),m!==Object.prototype&&b.next&&(f||i(b)===m||(c?c(b,m):"function"!=typeof b[h]&&a(b,h,y)),u(b,j,!0,!0),f&&(p[j]=y))),"values"==v&&P&&"values"!==P.name&&(k=!0,V=function(){return P.call(this)}),f&&!g||E[h]===V||a(E,h,V),p[e]=V,v)if(x={values:S("values"),keys:w?V:S("keys"),entries:S("entries")},g)for(O in x)(d||k||!(O in E))&&l(E,O,x[O]);else r({target:e,proto:!0,forced:d||k},x);return x}},"g6v/":function(t,e,n){var r=n("0Dky");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,e,n){var r=n("hh1v");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,e,n){var r=n("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},kOOl:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},kRJp:function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("XGwC");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},lMq5:function(t,e,n){var r=n("0Dky"),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==l||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"m/L8":function(t,e,n){var r=n("g6v/"),o=n("DPsx"),i=n("glrk"),c=n("wE6v"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},m92n:function(t,e,n){var r=n("glrk");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},ntOU:function(t,e,n){"use strict";var r=n("rpNk").IteratorPrototype,o=n("fHMY"),i=n("XGwC"),c=n("1E5z"),u=n("P4y1"),a=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,l,!1,!0),u[l]=a,t}},ppGB:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},rpNk:function(t,e,n){"use strict";var r,o,i,c=n("4WOD"),u=n("kRJp"),a=n("UTVS"),l=n("tiKp"),s=n("xDBR"),f=l("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||a(r,f)||u(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},tXUg:function(t,e,n){var r,o,i,c,u,a,l,s,f=n("2oRo"),p=n("Bs8V").f,v=n("xrYK"),m=n("LPSS").set,d=n("HNyW"),h=f.MutationObserver||f.WebKitMutationObserver,y=f.process,w=f.Promise,g="process"==v(y),b=p(f,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,e;for(g&&(t=y.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:h&&!d?(u=!0,a=document.createTextNode(""),new h(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):w&&w.resolve?(l=w.resolve(void 0),s=l.then,c=function(){s.call(l,r)}):c=function(){m.call(f,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},tiKp:function(t,e,n){var r=n("2oRo"),o=n("VpIT"),i=n("UTVS"),c=n("kOOl"),u=n("STAE"),a=n("/b8u"),l=o("wks"),s=r.Symbol,f=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(l,t)||(u&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},wE6v:function(t,e,n){var r=n("hh1v");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,e){t.exports=!1},xcBd:function(t,e,n){"use strict";n.r(e);n("TLoZ"),n("DDV2");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=wp.i18n.__,m=wp.components,d=m.Panel,h=m.PanelBody,y=m.PanelRow;!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(wp.date);var w=wp.element,g=w.Component,b=w.Fragment,x=wp.blockEditor.RichText,O=wp.data,S=O.withSelect,j=O.withDispatch,k=wp.editPost,E=k.PluginSidebar,P=k.PluginSidebarMoreMenuItem,V=wp.compose.compose,R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var e,n,r,o=s(i);function i(){return u(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){var t=this.props,e=t.meta,n=(e=void 0===e?{}:e).wordpress_boilerplate_plugin_text,r=t.updateMeta;return wp.element.createElement(b,null,wp.element.createElement(P,{name:"wordpress-boilerplate-plugin-sidebar",type:"sidebar",target:"wordpress-boilerplate-plugin-sidebar"},v("Demo","wordpress-boilerplate")),wp.element.createElement(E,{name:"wordpress-boilerplate-plugin-sidebar",title:v("Demo","wordpress-boilerplate")},wp.element.createElement(d,null,wp.element.createElement(h,{title:"Demo Text",initialOpen:!1,className:"wordpress-boilerplate-plugin-description"},wp.element.createElement(y,null,wp.element.createElement(x,{value:n,title:v("Demo","wordpress-boilerplate"),placeholder:v("Demo Placeholder","wordpress-boilerplate"),onChange:function(t){r({wordpress_boilerplate_plugin_text:t})}}))))))}}])&&a(e.prototype,n),r&&a(e,r),i}(g),M=V([S((function(t){return{meta:(0,t("core/editor").getEditedPostAttribute)("meta")}})),j((function(t,e){var n=e.meta,r=t("core/editor").editPost;return{updateMeta:function(t){r({meta:o(o({},n),t)})}}}))])(R);wp.plugins.registerPlugin("wordpress-boilerplate-gutenberg-plugin",{icon:"admin-tools",render:M}),n("8W7c")},xrYK:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},xs3f:function(t,e,n){var r=n("2oRo"),o=n("zk60"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},yoRg:function(t,e,n){var r=n("UTVS"),o=n("/GqU"),i=n("TWQb").indexOf,c=n("0BK2");t.exports=function(t,e){var n,u=o(t),a=0,l=[];for(n in u)!r(c,n)&&r(u,n)&&l.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(l,n)||l.push(n));return l}},zBJ4:function(t,e,n){var r=n("2oRo"),o=n("hh1v"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},zfnd:function(t,e,n){var r=n("glrk"),o=n("hh1v"),i=n("8GlL");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},zk60:function(t,e,n){var r=n("2oRo"),o=n("kRJp");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}}});