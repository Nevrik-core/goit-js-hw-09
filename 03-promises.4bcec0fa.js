!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=p||v||Function("return this")(),y=Object.prototype.toString,b=Math.max,g=Math.min,h=function(){return m.Date.now()};function O(e,t,n){var o,r,i,u,f,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function m(e){return l=e,f=setTimeout(O,t),d?v(e):u}function y(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=i}function O(){var e=h();if(y(e))return N(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,i-(e-l)):n}(e))}function N(e){return f=void 0,p&&o?v(e):(o=r=void 0,u)}function x(){var e=h(),n=y(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return m(c);if(s)return f=setTimeout(O,t),v(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,j(n)&&(d=!!n.leading,i=(s="maxWait"in n)?b(w(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?u:N(h())},x}function j(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var o=l.test(t);return o||d.test(t)?s(t.slice(2),o?2:8):c.test(t)?NaN:+t}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),O(e,t,{leading:o,maxWait:t,trailing:r})};var N=r("iU1Pc"),x=document.querySelector("button"),T=document.querySelector("form"),S="form-data",E=JSON.parse(localStorage.getItem(S))||{};function M(e,t){return localStorage.removeItem(S),new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}T.addEventListener("input",e(i)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(E))}),500)),x.addEventListener("submit",M);for(var _=Number(E.delay),q=1;q<=E.amount;q++){M(q,_).then((function(t){var n=t.position,o=t.delay;e(N).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(N).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),_+=Number(E.step)}}();
//# sourceMappingURL=03-promises.4bcec0fa.js.map