(()=>{var e,t,r,a,n,o,u,i,l,f,d,s={2352:(e,t,r)=>{Promise.all([r.e(826),r.e(396)]).then(r.bind(r,6795))}},c={};function h(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return s[e](r,r.exports,h),r.exports}h.m=s,h.c=c,h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((t,r)=>(h.f[r](e,t),t)),[])),h.u=e=>e+"."+{294:"588f6aa2480174552ca1",345:"cc0434845be3e2be8de7",396:"2388d3bf088e0c94f28b",826:"ad318a06366921e3ea8f",935:"4ecab2083f628ddfe659",976:"e56ef3740e58ab164c1d"}[e]+".js",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="auth:",h.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var u,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,h.nc&&u.setAttribute("nonce",h.nc),u.setAttribute("data-webpack",t+n),u.src=r),e[r]=[a];var s=(t,a)=>{u.onerror=u.onload=null,clearTimeout(c);var n=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((e=>e(a))),t)return t(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{h.S={};var e={},t={};h.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];h.o(h.S,r)||(h.S[r]={});var o=h.S[r],u="auth",i=(e,t,r,a)=>{var n=o[e]=o[e]||{},i=n[t];(!i||!i.loaded&&(!a!=!i.eager?a:u>i.from))&&(n[t]={get:r,from:u,eager:!!a})},l=[];return"default"===r&&(i("react-dom","17.0.2",(()=>Promise.all([h.e(935),h.e(345)]).then((()=>()=>h(3935))))),i("react","17.0.2",(()=>h.e(294).then((()=>()=>h(9976)))))),e[r]=l.length?Promise.all(l).then((()=>e[r]=1)):1}}})(),h.p="https://gedion.github.io/auth/latest/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var u=t[a],i=(typeof u)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=u)return n<u;a++}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],o=a<0;o&&(a=-a-1);for(var u=0,i=1,l=!0;;i++,u++){var f,d,s=i<e.length?(typeof e[i])[0]:"";if(u>=t.length||"o"==(d=(typeof(f=t[u]))[0]))return!l||("u"==s?i>a&&!o:""==s!=o);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(i<=a){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||i<=a)return!1;l=!1,i--}else{if(i<=a||d<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,i--)}}var c=[],h=c.pop.bind(c);for(u=1;u<e.length;u++){var p=e[u];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},o=(e,t,r)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&o[t]},u=e=>(e.loaded=1,e.get()),i=(e=>function(t,r,a,n){var o=h.I(t);return o&&o.then?o.then(e.bind(e,t,h.S[t],r,a,n)):e(0,h.S[t],r,a,n)})(((e,t,r,a,n)=>{var i=t&&h.o(t,r)&&o(t,r,a);return i?u(i):n()})),l={},f={2692:()=>i("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>h.e(294).then((()=>()=>h(9976))))),3489:()=>i("default","react",[0,15],(()=>h.e(294).then((()=>()=>h(9976))))),5228:()=>i("default","react-dom",[,[1,17,0,0],[1,16,8,0],1],(()=>Promise.all([h.e(935),h.e(345)]).then((()=>()=>h(3935))))),5695:()=>i("default","react-dom",[0,16,6,0],(()=>Promise.all([h.e(935),h.e(345)]).then((()=>()=>h(3935))))),6279:()=>i("default","react",[0,16,6,0],(()=>h.e(294).then((()=>()=>h(9976))))),7271:()=>i("default","react",[1,17,0,1],(()=>h.e(294).then((()=>()=>h(9976))))),7650:()=>i("default","react-dom",[1,17,0,1],(()=>Promise.all([h.e(935),h.e(345)]).then((()=>()=>h(3935))))),9345:()=>i("default","react",[4,17,0,2],(()=>h.e(976).then((()=>()=>h(9976)))))},d={345:[9345],396:[2692,3489,5228,5695,6279,7271,7650]},h.f.consumes=(e,t)=>{h.o(d,e)&&d[e].forEach((e=>{if(h.o(l,e))return t.push(l[e]);var r=t=>{l[e]=0,h.m[e]=r=>{delete h.c[e],r.exports=t()}},a=t=>{delete l[e],h.m[e]=r=>{throw delete h.c[e],t}};try{var n=f[e]();n.then?t.push(l[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={179:0};h.f.j=(t,r)=>{var a=h.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(345!=t){var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=h.p+h.u(t),u=new Error;h.l(o,(r=>{if(h.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var a,n,[o,u,i]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in u)h.o(u,a)&&(h.m[a]=u[a]);i&&i(h)}for(t&&t(r);l<o.length;l++)n=o[l],h.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkauth=self.webpackChunkauth||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),h(2352)})();