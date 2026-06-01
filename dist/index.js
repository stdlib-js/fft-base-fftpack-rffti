"use strict";var _=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=_(function(H,h){
var M=require('@stdlib/math-base-special-sincos/dist').assign,P=require('@stdlib/constants-float64-two-pi/dist'),S=require('@stdlib/math-base-special-floor/dist'),b=require('@stdlib/fft-base-fftpack-decompose/dist'),y=[4,2,3,5];function z(r,a,v,u,f,i,I){var t,O,R,o,n,q,s,e,c,T,l,m,x,g,p,A;if(n=b(r,4,y,1,0,f,i,I),n-1!==0)for(R=P/r,m=2,e=1,o=I+2*i,T=2*v,p=0;p<n-1;p++){for(t=f[o],s=t*e,x=S(r/s),c=0,A=1;A<t;A++){for(c+=e,O=c*R,q=1,l=u+m*v,g=2;g<x;g+=2)M(q*O,a,-v,l),q+=1,l+=T;m+=x}e=s,o+=i}}h.exports=z
});var L=_(function(J,C){
var B=j();function D(r,a,v,u){var f,i;if(r!==1)return f=u+r*v,i=f+r*v,B(r,a,v,f,a,v,i),a}C.exports=D
});var E=L();module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
