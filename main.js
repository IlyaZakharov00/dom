(()=>{"use strict";var e,n,t,r,o,c,i,a,s,u,l,d,p,f,m={16:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),c=t(314),i=t.n(c),a=t(417),s=t.n(a),u=new URL(t(842),t.b),l=i()(o()),d=s()(u);l.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    background-color: darkgreen;\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 30%;\n    margin: auto;\n    margin-top: 5%;\n}\n\n.square {\n    width: 100px;\n    height: 100px;\n    margin: 5px;\n    background-color: white;\n}\n\n.goblin {\n    background-image: url(${d});\n    background-position: center;\n    background-size: cover;\n    background-color: white;\n    cursor: pointer;\n    height: 100%;\n}\n\n.count-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 5%;\n}\n\n.count-name {\n    font-size: 50px;\n    color: white;\n    margin-right: 20px;\n}\n\n.counter {\n    margin-right: 20px;\n    font-size: 50px;\n    color: white;\n}\n\n.button-reset {\n    width: 10%;\n    background-color: rgb(188, 245, 66);\n    opacity: 0.5;\n    border: none;\n    color: black;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 20px;\n}\n\n.button-reset:hover {\n    opacity: 1;\n}`,""]);const p=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],u=r.base?s[0]+r.base:s[0],l=c[u]||0,d="".concat(u," ").concat(l);c[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=t(c[i]);n[a].references--}for(var s=r(e,o),u=0;u<c.length;u++){var l=t(c[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},842:(e,n,t)=>{e.exports=t.p+"2dbd01ce16c0fa83cb67.png"}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,g),t.exports}g.m=m,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(72),n=g.n(e),t=g(825),r=g.n(t),o=g(659),c=g.n(o),i=g(56),a=g.n(i),s=g(540),u=g.n(s),l=g(113),d=g.n(l),p=g(16),(f={}).styleTagTransform=d(),f.setAttributes=a(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(p.A,f),p.A&&p.A.locals&&p.A.locals,document.addEventListener("DOMContentLoaded",(()=>{function e(){const e=document.querySelectorAll(".square");return Math.ceil(Math.random()*e.length)}console.log("загружено"),document.querySelector(".counter").textContent=0;let n=setInterval((()=>{(function(){let n=function(){let e=document.querySelectorAll(".square");for(const n of e)if(n.firstElementChild&&n.firstElementChild.classList.contains("goblin"))return n.id}();n&&function(e){document.getElementById(e).firstElementChild.remove()}(n);let t=e(),r=document.getElementById(t);do{t=e(),r=document.getElementById(t)}while(n==r.id);let o=document.createElement("div");o.classList.add("goblin"),r.appendChild(o),o.addEventListener("click",(()=>{document.querySelector(".counter").textContent++})),document.querySelector(".button-reset").addEventListener("click",(()=>{document.querySelector(".counter").textContent=0}))})(),console.log(n)}),1e3)}))})();