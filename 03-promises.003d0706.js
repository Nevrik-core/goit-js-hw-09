!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",c=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=p||v||Function("return this")(),y=Object.prototype.toString,b=Math.max,g=Math.min,h=function(){return m.Date.now()};function N(e,t,n){var o,i,r,u,c,f,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function m(e){return l=e,c=setTimeout(N,t),s?v(e):u}function y(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=r}function N(){var e=h();if(y(e))return x(e);c=setTimeout(N,function(e){var n=t-(e-f);return d?g(n,r-(e-l)):n}(e))}function x(e){return c=void 0,p&&o?v(e):(o=i=void 0,u)}function O(){var e=h(),n=y(e);if(o=arguments,i=this,f=e,n){if(void 0===c)return m(f);if(d)return c=setTimeout(N,t),v(f)}return void 0===c&&(c=setTimeout(N,t)),u}return t=w(t)||0,j(n)&&(s=!!n.leading,r=(d="maxWait"in n)?b(w(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=f=i=c=void 0},O.flush=function(){return void 0===c?u:x(h())},O}function j(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var o=l.test(t);return o||s.test(t)?d(t.slice(2),o?2:8):f.test(t)?NaN:+t}r=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return j(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),N(e,t,{leading:o,maxWait:t,trailing:i})};var x=i("iU1Pc"),O=document.querySelector("button"),T=document.querySelector("form"),E={};function M(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}T.addEventListener("input",e(r)((function(e){E[e.target.name]=e.target.value,console.log(E)}),500)),O.addEventListener("submit",(function(t){t.preventDefault(),console.log(E);for(var n=Number(E.delay),o=1;o<=E.amount;o++){M(o,n).then((function(t){var n=t.position,o=t.delay;e(x).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(x).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=Number(E.step)}}));for(var _=Number(E.delay),S=1;S<=E.amount;S++){M(S,_).then((function(t){var n=t.position,o=t.delay;e(x).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(x).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),_+=Number(E.step)}}();
//# sourceMappingURL=03-promises.003d0706.js.map