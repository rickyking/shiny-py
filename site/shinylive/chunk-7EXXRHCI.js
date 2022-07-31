var ee=Object.create;var L=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var re=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var Re=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,c)=>(typeof require!="undefined"?require:t)[c]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var $=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ie=(e,t,c,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of ne(t))!oe.call(e,p)&&p!==c&&L(e,p,{get:()=>t[p],enumerable:!(f=te(t,p))||f.enumerable});return e};var je=(e,t,c)=>(c=e!=null?ee(re(e)):{},ie(t||!e||!e.__esModule?L(c,"default",{value:e,enumerable:!0}):c,e));var X=$(y=>{"use strict";var E=Symbol.for("react.element"),ae=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),me=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),we=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),J=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,K={};function k(e,t,c){this.props=e,this.context=t,this.refs=K,this.updater=c||N}k.prototype.isReactComponent={};k.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W(){}W.prototype=k.prototype;function F(e,t,c){this.props=e,this.context=t,this.refs=K,this.updater=c||N}var M=F.prototype=new W;M.constructor=F;H(M,k.prototype);M.isPureReactComponent=!0;var z=Array.isArray,Z=Object.prototype.hasOwnProperty,B={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,c){var f,p={},h=null,n=null;if(t!=null)for(f in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(h=""+t.key),t)Z.call(t,f)&&!G.hasOwnProperty(f)&&(p[f]=t[f]);var r=arguments.length-2;if(r===1)p.children=c;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];p.children=s}if(e&&e.defaultProps)for(f in r=e.defaultProps,r)p[f]===void 0&&(p[f]=r[f]);return{$$typeof:E,type:e,key:h,ref:n,props:p,_owner:B.current}}function Ae(e,t){return{$$typeof:E,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function xe(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(c){return t[c]})}var I=/\/+/g;function T(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xe(""+e.key):t.toString(36)}function j(e,t,c,f,p){var h=typeof e;(h==="undefined"||h==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(h){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case E:case ae:n=!0}}if(n)return n=e,p=p(n),e=f===""?"."+T(n,0):f,z(p)?(c="",e!=null&&(c=e.replace(I,"$&/")+"/"),j(p,t,c,"",function(o){return o})):p!=null&&(P(p)&&(p=Ae(p,c+(!p.key||n&&n.key===p.key?"":(""+p.key).replace(I,"$&/")+"/")+e)),t.push(p)),1;if(n=0,f=f===""?".":f+":",z(e))for(var r=0;r<e.length;r++){h=e[r];var s=f+T(h,r);n+=j(h,t,c,s,p)}else if(s=Se(e),typeof s=="function")for(e=s.call(e),r=0;!(h=e.next()).done;)h=h.value,s=f+T(h,r++),n+=j(h,t,c,s,p);else if(h==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function R(e,t,c){if(e==null)return e;var f=[],p=0;return j(e,f,"","",function(h){return t.call(c,h,p++)}),f}function Ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(c){(e._status===0||e._status===-1)&&(e._status=1,e._result=c)},function(c){(e._status===0||e._status===-1)&&(e._status=2,e._result=c)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var S={current:null},O={transition:null},be={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:O,ReactCurrentOwner:B};y.Children={map:R,forEach:function(e,t,c){R(e,function(){t.apply(this,arguments)},c)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(t){return t})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};y.Component=k;y.Fragment=pe;y.Profiler=de;y.PureComponent=F;y.StrictMode=ye;y.Suspense=_e;y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=be;y.cloneElement=function(e,t,c){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var f=H({},e.props),p=e.key,h=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(h=t.ref,n=B.current),t.key!==void 0&&(p=""+t.key),e.type&&e.type.defaultProps)var r=e.type.defaultProps;for(s in t)Z.call(t,s)&&!G.hasOwnProperty(s)&&(f[s]=t[s]===void 0&&r!==void 0?r[s]:t[s])}var s=arguments.length-2;if(s===1)f.children=c;else if(1<s){r=Array(s);for(var o=0;o<s;o++)r[o]=arguments[o+2];f.children=r}return{$$typeof:E,type:e.type,key:p,ref:h,props:f,_owner:n}};y.createContext=function(e){return e={$$typeof:me,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:he,_context:e},e.Consumer=e};y.createElement=Q;y.createFactory=function(e){var t=Q.bind(null,e);return t.type=e,t};y.createRef=function(){return{current:null}};y.forwardRef=function(e){return{$$typeof:ve,render:e}};y.isValidElement=P;y.lazy=function(e){return{$$typeof:ge,_payload:{_status:-1,_result:e},_init:Ce}};y.memo=function(e,t){return{$$typeof:we,type:e,compare:t===void 0?null:t}};y.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}};y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};y.useCallback=function(e,t){return S.current.useCallback(e,t)};y.useContext=function(e){return S.current.useContext(e)};y.useDebugValue=function(){};y.useDeferredValue=function(e){return S.current.useDeferredValue(e)};y.useEffect=function(e,t){return S.current.useEffect(e,t)};y.useId=function(){return S.current.useId()};y.useImperativeHandle=function(e,t,c){return S.current.useImperativeHandle(e,t,c)};y.useInsertionEffect=function(e,t){return S.current.useInsertionEffect(e,t)};y.useLayoutEffect=function(e,t){return S.current.useLayoutEffect(e,t)};y.useMemo=function(e,t){return S.current.useMemo(e,t)};y.useReducer=function(e,t,c){return S.current.useReducer(e,t,c)};y.useRef=function(e){return S.current.useRef(e)};y.useState=function(e){return S.current.useState(e)};y.useSyncExternalStore=function(e,t,c){return S.current.useSyncExternalStore(e,t,c)};y.useTransition=function(){return S.current.useTransition()};y.version="18.2.0"});var ke=$((Ie,Y)=>{"use strict";Y.exports=X()});var Ee=$((Ne,U)=>{var V=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",f={};function p(n,r){if(!f[n]){f[n]={};for(var s=0;s<n.length;s++)f[n][n.charAt(s)]=s}return f[n][r]}var h={compressToBase64:function(n){if(n==null)return"";var r=h._compress(n,6,function(s){return t.charAt(s)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(n){return n==null?"":n==""?null:h._decompress(n.length,32,function(r){return p(t,n.charAt(r))})},compressToUTF16:function(n){return n==null?"":h._compress(n,15,function(r){return e(r+32)})+" "},decompressFromUTF16:function(n){return n==null?"":n==""?null:h._decompress(n.length,16384,function(r){return n.charCodeAt(r)-32})},compressToUint8Array:function(n){for(var r=h.compress(n),s=new Uint8Array(r.length*2),o=0,a=r.length;o<a;o++){var _=r.charCodeAt(o);s[o*2]=_>>>8,s[o*2+1]=_%256}return s},decompressFromUint8Array:function(n){if(n==null)return h.decompress(n);for(var r=new Array(n.length/2),s=0,o=r.length;s<o;s++)r[s]=n[s*2]*256+n[s*2+1];var a=[];return r.forEach(function(_){a.push(e(_))}),h.decompress(a.join(""))},compressToEncodedURIComponent:function(n){return n==null?"":h._compress(n,6,function(r){return c.charAt(r)})},decompressFromEncodedURIComponent:function(n){return n==null?"":n==""?null:(n=n.replace(/ /g,"+"),h._decompress(n.length,32,function(r){return p(c,n.charAt(r))}))},compress:function(n){return h._compress(n,16,function(r){return e(r)})},_compress:function(n,r,s){if(n==null)return"";var o,a,_={},A={},x="",C="",v="",w=2,b=3,d=2,m=[],i=0,u=0,g;for(g=0;g<n.length;g+=1)if(x=n.charAt(g),Object.prototype.hasOwnProperty.call(_,x)||(_[x]=b++,A[x]=!0),C=v+x,Object.prototype.hasOwnProperty.call(_,C))v=C;else{if(Object.prototype.hasOwnProperty.call(A,v)){if(v.charCodeAt(0)<256){for(o=0;o<d;o++)i=i<<1,u==r-1?(u=0,m.push(s(i)),i=0):u++;for(a=v.charCodeAt(0),o=0;o<8;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1}else{for(a=1,o=0;o<d;o++)i=i<<1|a,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=0;for(a=v.charCodeAt(0),o=0;o<16;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1}w--,w==0&&(w=Math.pow(2,d),d++),delete A[v]}else for(a=_[v],o=0;o<d;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1;w--,w==0&&(w=Math.pow(2,d),d++),_[C]=b++,v=String(x)}if(v!==""){if(Object.prototype.hasOwnProperty.call(A,v)){if(v.charCodeAt(0)<256){for(o=0;o<d;o++)i=i<<1,u==r-1?(u=0,m.push(s(i)),i=0):u++;for(a=v.charCodeAt(0),o=0;o<8;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1}else{for(a=1,o=0;o<d;o++)i=i<<1|a,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=0;for(a=v.charCodeAt(0),o=0;o<16;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1}w--,w==0&&(w=Math.pow(2,d),d++),delete A[v]}else for(a=_[v],o=0;o<d;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1;w--,w==0&&(w=Math.pow(2,d),d++)}for(a=2,o=0;o<d;o++)i=i<<1|a&1,u==r-1?(u=0,m.push(s(i)),i=0):u++,a=a>>1;for(;;)if(i=i<<1,u==r-1){m.push(s(i));break}else u++;return m.join("")},decompress:function(n){return n==null?"":n==""?null:h._decompress(n.length,32768,function(r){return n.charCodeAt(r)})},_decompress:function(n,r,s){var o=[],a,_=4,A=4,x=3,C="",v=[],w,b,d,m,i,u,g,l={val:s(0),position:r,index:1};for(w=0;w<3;w+=1)o[w]=w;for(d=0,i=Math.pow(2,2),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;switch(a=d){case 0:for(d=0,i=Math.pow(2,8),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;g=e(d);break;case 1:for(d=0,i=Math.pow(2,16),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;g=e(d);break;case 2:return""}for(o[3]=g,b=g,v.push(g);;){if(l.index>n)return"";for(d=0,i=Math.pow(2,x),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;switch(g=d){case 0:for(d=0,i=Math.pow(2,8),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;o[A++]=e(d),g=A-1,_--;break;case 1:for(d=0,i=Math.pow(2,16),u=1;u!=i;)m=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=s(l.index++)),d|=(m>0?1:0)*u,u<<=1;o[A++]=e(d),g=A-1,_--;break;case 2:return v.join("")}if(_==0&&(_=Math.pow(2,x),x++),o[g])C=o[g];else if(g===A)C=b+b.charAt(0);else return null;v.push(C),o[A++]=b+C.charAt(0),_--,b=C,_==0&&(_=Math.pow(2,x),x++)}}};return h}();typeof define=="function"&&define.amd?define(function(){return V}):typeof U<"u"&&U!=null&&(U.exports=V)});function Ue(e){return new Promise(t=>setTimeout(t,e))}function $e(e=5){let t="",c="abcdefghijklmnopqrstuvwxyz0123456789",f=c.length;for(let p=0;p<e;p++)t+=c.charAt(Math.floor(Math.random()*f));return t}function ue(e){return e==="/"||e===""?"":e.replace(/[/]?[^/]+[/]?$/,"")}function se(){return new URL(import.meta.url).pathname}function Te(){return ue(se())}function Fe(e){let t=e.match(/\.[0-9a-z]+$/i);if(t===null)return null;let c=t[0].substring(1).toLowerCase(),f=ce[c];return f||null}var ce={py:"python",js:"javascript",html:"html",css:"css",csv:"csv",r:"r"};function fe(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent)}function Me(){return fe()?"\u2318":"Ctrl"}function Be(e){if(typeof e=="string"){for(let t of e)if(t==="\0"||t==="\xFF")return!0;return!1}else{for(let t of e)if(t===0||t===255)return!0;return!1}}function D(e){let t="";for(let c=0;c<e.length;c++)t+=String.fromCharCode(e[c]);return t}function q(e){let t=e.length,c=new Uint8Array(t);for(let f=0;f<t;f++)c[f]=e.charCodeAt(f);return c}function le(e){return e.type==="binary"?{name:e.name,content:q(window.atob(e.content)),type:"binary"}:{name:e.name,content:e.content,type:"text"}}function De(e){return e.type==="binary"?typeof e.content=="string"?le(e):e:{name:e.name,content:e.content,type:"text"}}function qe(e){return e.type==="binary"?{name:e.name,content:window.btoa(D(e.content)),type:"binary"}:{name:e.name,content:e.content}}export{Re as a,$ as b,je as c,Ue as d,$e as e,Te as f,Fe as g,Me as h,Be as i,D as j,q as k,le as l,De as m,qe as n,ke as o,Ee as p};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
