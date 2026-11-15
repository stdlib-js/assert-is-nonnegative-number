"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(m){throw (e=0, m)}};};var t=i(function(d,n){
var o=require('@stdlib/assert-is-number/dist').isPrimitive;function b(r){return o(r)&&r>=0}n.exports=b
});var s=i(function(y,v){
var q=require('@stdlib/assert-is-number/dist').isObject;function O(r){return q(r)&&r.valueOf()>=0}v.exports=O
});var c=i(function(R,a){
var f=t(),j=s();function p(r){return f(r)||j(r)}a.exports=p
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),x=t(),P=s();N(u,"isPrimitive",x);N(u,"isObject",P);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
