var auth;(()=>{"use strict";var e,t,r,a,n,o,i,u,l,f,d,s={8678:(e,t,r)=>{var a={"./AuthApp":()=>Promise.all([r.e(826),r.e(396)]).then((()=>()=>r(6795)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o})}},h={};function c(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={exports:{}};return s[e](r,r.exports,c),r.exports}c.m=s,c.c=h,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"."+{294:"588f6aa2480174552ca1",345:"cc0434845be3e2be8de7",396:"a5e296d172e9a45c4a27",826:"ad318a06366921e3ea8f",935:"4ecab2083f628ddfe659",976:"e56ef3740e58ab164c1d"}[e]+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="auth:",c.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[a];var s=(t,a)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{c.S={};var e={},t={};c.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];c.o(c.S,r)||(c.S[r]={});var o=c.S[r],i="auth",u=(e,t,r,a)=>{var n=o[e]=o[e]||{},u=n[t];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[t]={get:r,from:i,eager:!!a})},l=[];return"default"===r&&(u("react-dom","17.0.2",(()=>Promise.all([c.e(935),c.e(345)]).then((()=>()=>c(3935))))),u("react","17.0.2",(()=>c.e(294).then((()=>()=>c(9976)))))),e[r]=l.length?Promise.all(l).then((()=>e[r]=1)):1}}})(),c.p="https://gedion.github.io/mfp/auth/latest/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var i=t[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,l=!0;;u++,i++){var f,d,s=u<e.length?(typeof e[u])[0]:"";if(i>=t.length||"o"==(d=(typeof(f=t[i]))[0]))return!l||("u"==s?u>a&&!o:""==s!=o);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(u<=a){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||u<=a)return!1;l=!1,u--}else{if(u<=a||d<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var h=[],c=h.pop.bind(h);for(i=1;i<e.length;i++){var p=e[i];h.push(1==p?c()|c():2==p?c()&c():p?n(p,t):!c())}return!!c()},o=(e,t,r)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&o[t]},i=e=>(e.loaded=1,e.get()),u=(e=>function(t,r,a,n){var o=c.I(t);return o&&o.then?o.then(e.bind(e,t,c.S[t],r,a,n)):e(0,c.S[t],r,a,n)})(((e,t,r,a,n)=>{var u=t&&c.o(t,r)&&o(t,r,a);return u?i(u):n()})),l={},f={9345:()=>u("default","react",[4,17,0,2],(()=>c.e(976).then((()=>()=>c(9976))))),2692:()=>u("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>c.e(294).then((()=>()=>c(9976))))),3489:()=>u("default","react",[0,15],(()=>c.e(294).then((()=>()=>c(9976))))),5228:()=>u("default","react-dom",[,[1,17,0,0],[1,16,8,0],1],(()=>Promise.all([c.e(935),c.e(345)]).then((()=>()=>c(3935))))),5695:()=>u("default","react-dom",[0,16,6,0],(()=>Promise.all([c.e(935),c.e(345)]).then((()=>()=>c(3935))))),6279:()=>u("default","react",[0,16,6,0],(()=>c.e(294).then((()=>()=>c(9976))))),7271:()=>u("default","react",[1,17,0,1],(()=>c.e(294).then((()=>()=>c(9976))))),7650:()=>u("default","react-dom",[1,17,0,1],(()=>Promise.all([c.e(935),c.e(345)]).then((()=>()=>c(3935)))))},d={345:[9345],396:[2692,3489,5228,5695,6279,7271,7650]},c.f.consumes=(e,t)=>{c.o(d,e)&&d[e].forEach((e=>{if(c.o(l,e))return t.push(l[e]);var r=t=>{l[e]=0,c.m[e]=r=>{delete c.c[e],r.exports=t()}},a=t=>{delete l[e],c.m[e]=r=>{throw delete c.c[e],t}};try{var n=f[e]();n.then?t.push(l[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={818:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(345!=t){var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=c.p+c.u(t),i=new Error;c.l(o,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var a,n,[o,i,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in i)c.o(i,a)&&(c.m[a]=i[a]);u&&u(c)}for(t&&t(r);l<o.length;l++)n=o[l],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkauth=self.webpackChunkauth||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var p=c(8678);auth=p})();