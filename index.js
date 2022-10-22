// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var a,f,p,b;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(a=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),b&&l&&l.call(e,t,r.set),e};function f(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(e){var t,r,o,n,i;if(null==e)return s.call(e);r=e[d],i=d,t=null!=(n=e)&&_.call(n,i);try{e[d]=void 0}catch(t){return s.call(e)}return o=s.call(e),t?e[d]=r:delete e[d],o}:function(e){return s.call(e)},v=Number,j=v.prototype.toString,g=y();function O(e){return"object"==typeof e&&(e instanceof v||(g?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function S(e){return p(e)||O(e)}function h(e){return p(e)&&e>=0}function w(e){return O(e)&&e.valueOf()>=0}function P(e){return h(e)||w(e)}f(S,"isPrimitive",p),f(S,"isObject",O),f(P,"isPrimitive",h),f(P,"isObject",w),e.default=P,e.isObject=w,e.isPrimitive=h,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isNonNegativeNumber={});
//# sourceMappingURL=index.js.map