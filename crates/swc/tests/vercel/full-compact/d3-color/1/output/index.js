import t from"@swc/helpers/src/_instanceof.mjs";import{Color as i,rgbConvert as e,Rgb as h}from"./color.js";var r=Math.PI/180,n=180/Math.PI,s=-1.78277*.29227-.1347134789;export default function o(i,r,o,a){return 1===arguments.length?function(i){if(t(i,Cubehelix))return new Cubehelix(i.h,i.s,i.l,i.opacity);t(i,h)||(i=e(i));var r=i.r/255,o=i.g/255,a=i.b/255,u=(s*a+-1.7884503806*r-3.5172982438*o)/(s+-1.7884503806-3.5172982438),c=a-u,l=-((1.97294*(o-u)- -.29227*c)/.90649),p=Math.sqrt(l*l+c*c)/(1.97294*u*(1-u)),f=p?Math.atan2(l,c)*n-120:NaN;return new Cubehelix(f<0?f+360:f,p,u,i.opacity)}(i):new Cubehelix(i,r,o,null==a?1:a)};export function Cubehelix(t,i,e,h){this.h=+t,this.s=+i,this.l=+e,this.opacity=+h}!function(t,i,e){t.prototype=i.prototype=e,e.constructor=t}(Cubehelix,o,function(t,i){var e=Object.create(t.prototype);for(var h in i)e[h]=i[h];return e}(i,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Cubehelix(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Cubehelix(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*r,i=+this.l,e=isNaN(this.s)?0:this.s*i*(1-i),n=Math.cos(t),s=Math.sin(t);return new h(255*(i+e*(-.14861*n+1.78277*s)),255*(i+e*(-.29227*n+-.90649*s)),255*(i+e*(1.97294*n)),this.opacity)}}));
