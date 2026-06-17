"use strict";var h=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var p=h(function(H,j){
var M=require('@stdlib/math-base-special-sincos/dist').assign,P=require('@stdlib/constants-float64-two-pi/dist'),S=require('@stdlib/math-base-special-floor/dist'),b=require('@stdlib/fft-base-fftpack-decompose/dist'),y=[4,2,3,5];function z(a,r,v,u,f,i,O){var t,R,T,n,o,q,l,e,s,_,c,m,x,g,A,I;if(o=b(a,4,y,1,0,f,i,O),o-1!==0)for(T=P/a,m=2,e=1,n=O+2*i,_=2*v,A=0;A<o-1;A++){for(t=f[n],l=t*e,x=S(a/l),s=0,I=1;I<t;I++){for(s+=e,R=s*T,q=1,c=u+m*v,g=2;g<x;g+=2)M(q*R,r,-v,c),q+=1,c+=_;m+=x}e=l,n+=i}}j.exports=z
});var L=h(function(J,C){
var B=p();function D(a,r,v,u){var f,i;return a===1||(f=u+a*v,i=f+a*v,B(a,r,v,f,r,v,i)),r}C.exports=D
});var E=L();module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
