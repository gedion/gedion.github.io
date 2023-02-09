var dashboard;(()=>{"use strict";var e,r,t,a,n,o,i,u,d,f,l,s={578:(e,r,t)=>{var a={"./DashboardApp":()=>Promise.all([t.e(492),t.e(361)]).then((()=>()=>t(361)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},h={};function p(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,exports:{}};return s[e](t,t.exports,p),t.exports}p.m=s,p.c=h,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+"."+{361:"da64f41ce368d34bb32d",403:"d7f64927be4ed0ef7486",492:"82cf2e31d35e07f9ff88",672:"9985fa6f813ec05bdf47"}[e]+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="dashboard:",p.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,u;if(void 0!==n)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var l=d[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,a)=>{a||(a=[]);var n,o,i,u,d=r[t];if(d||(d=r[t]={}),!(a.indexOf(d)>=0)){if(a.push(d),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var f=p.S[t],l="dashboard",s=[];return"default"===t&&(n="3.2.31",i=f.vue=f.vue||{},(!(u=i[n])||!u.loaded&&(1!=!u.eager?o:l>u.from))&&(i[n]={get:()=>p.e(672).then((()=>()=>p(672))),from:l,eager:!1})),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),p.p="https://gedion.github.io/mfp/dashboard/latest/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,d=!0;;u++,i++){var f,l,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(l=(typeof(f=r[i]))[0]))return!d||("u"==s?u>a&&!o:""==s!=o);if("u"==l){if(!d||"u"!=s)return!1}else if(d)if(s==l)if(u<=a){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(d=!1)}else if("s"!=s&&"n"!=s){if(o||u<=a)return!1;d=!1,u--}else{if(u<=a||l<s!=o)return!1;d=!1}else"s"!=s&&"n"!=s&&(d=!1,u--)}}var h=[],p=h.pop.bind(h);for(i=1;i<e.length;i++){var c=e[i];h.push(1==c?p()|p():2==c?p()&p():c?n(c,r):!p())}return!!p()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!n(t,r)||e&&!a(e,r)?e:r),0))&&o[r]},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,a,n){var o=p.I(r);return o&&o.then?o.then(e.bind(e,r,p.S[r],t,a,n)):e(0,p.S[r],t,a,n)})(((e,r,t,a,n)=>{var u=r&&p.o(r,t)&&o(r,t,a);return u?i(u):n()})),d={},f={40:()=>u("default","vue",[4,3,2,31],(()=>p.e(672).then((()=>()=>p(672)))))},l={361:[40]},p.f.consumes=(e,r)=>{p.o(l,e)&&l[e].forEach((e=>{if(p.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},a=r=>{delete d[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var n=f[e]();n.then?r.push(d[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={966:0};p.f.j=(r,t)=>{var a=p.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=p.p+p.u(r),i=new Error;p.l(o,(t=>{if(p.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,u]=t,d=0;if(o.some((r=>0!==e[r]))){for(a in i)p.o(i,a)&&(p.m[a]=i[a]);u&&u(p)}for(r&&r(t);d<o.length;d++)n=o[d],p.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p.nc=void 0;var c=p(578);dashboard=c})();