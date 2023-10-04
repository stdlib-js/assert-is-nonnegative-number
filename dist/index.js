"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(g,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive;function o(r){return m(r)&&r>=0}n.exports=o
});var s=i(function(d,v){
var b=require('@stdlib/assert-is-number/dist').isObject;function q(r){return b(r)&&r.valueOf()>=0}v.exports=q
});var c=i(function(y,a){
var O=t(),f=s();function j(r){return O(r)||f(r)}a.exports=j
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),p=t(),x=s();N(u,"isPrimitive",p);N(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
