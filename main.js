!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var o=t(1);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"/* Styling for demoing purposes */\n\nbody {\n  margin: 0;\n}\n\n/* Styling for Dropdown */\n\n.dropdown-menu {\n  width: 80%;\n  position: relative;\n  margin: 0 auto;\n  background-color: green;\n}\n\n.dropdown-menu li {\n  width: 10%;\n  display: inline-block;\n  position: relative;\n  padding: 1% 0;\n  list-style: none;\n}\n\n.dropdown-menu li > span:hover {\n  cursor: pointer;\n}\n\n.dd-content {\n  width: 100%;\n  display: none;\n  position: absolute;\n  padding: 0;\n  background-color: orange;\n}\n\n.dd-content li {\n  width: 100%;\n  display: block;\n  overflow: visible;\n  text-align: left;\n  list-style: none;\n  white-space: nowrap;\n}\n\n.show-dd {\n  display: block;\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],e))}else{for(var s=[];a<o.parts.length;a++)s.push(m(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function c(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var o=t.nc;o&&(n.attributes.nonce=o)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r&&n.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var v=null,h=0;function m(n,e){var t,o,r;if(e.singleton){var i=h++;t=v||(v=c(e)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n,e);return u(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i],c=r[a.id];c&&(c.refs--,o.push(c))}n&&u(s(n,e),e);for(var l=0;l<o.length;l++){var d=o[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete r[d.id]}}}}},function(n,e,t){"use strict";function o(){document.querySelectorAll(".show-dd").forEach((function(n){n.classList.remove("show-dd")}))}t.r(e);t(0);document.addEventListener("DOMContentLoaded",(function(n){!function(){let n=document.querySelectorAll(".dd-label"),e=document.querySelectorAll(".dd-content");n.forEach((function(n){n.addEventListener("click",(function(){o(),function(n){n.lastElementChild.classList.add("show-dd")}(n)}))})),e.forEach((function(n){n.addEventListener("mouseleave",(function(){o()}))})),document.querySelector(".dropdown-menu").addEventListener("mouseleave",(function(){o()}))}()}))}]);