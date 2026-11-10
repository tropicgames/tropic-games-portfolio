(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,M=1022,N=1023,ee=1026,P=1027,te=1028,ne=1029,re=1030,ie=1031,ae=1033,oe=33776,se=33777,ce=33778,F=33779,le=35840,ue=35841,de=35842,fe=35843,pe=36196,me=37492,he=37496,ge=37488,_e=37489,ve=37490,ye=37491,be=37808,xe=37809,Se=37810,Ce=37811,we=37812,Te=37813,Ee=37814,De=37815,Oe=37816,ke=37817,Ae=37818,je=37819,Me=37820,Ne=37821,I=36492,Pe=36494,Fe=36495,Ie=36283,L=36284,Le=36285,R=36286,z=2300,Re=2301,ze=2302,Be=2303,Ve=2400,He=2401,Ue=2402,We=3200,Ge=`srgb`,Ke=`srgb-linear`,qe=`linear`,Je=`srgb`,Ye=7680,Xe=35044,Ze=35048,Qe=2e3;function $e(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function et(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function nt(){let e=tt(`canvas`);return e.style.display=`block`,e}var rt={};function it(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function at(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=at(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=at(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ot(...e){let t=e.join(` `);t in rt||(rt[t]=!0,B(...e))}function st(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ct={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},lt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ut=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),dt=1234567,ft=Math.PI/180,pt=180/Math.PI;function mt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ut[e&255]+ut[e>>8&255]+ut[e>>16&255]+ut[e>>24&255]+`-`+ut[t&255]+ut[t>>8&255]+`-`+ut[t>>16&15|64]+ut[t>>24&255]+`-`+ut[n&63|128]+ut[n>>8&255]+`-`+ut[n>>16&255]+ut[n>>24&255]+ut[r&255]+ut[r>>8&255]+ut[r>>16&255]+ut[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function ht(e,t){return(e%t+t)%t}function gt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function _t(e,t,n){return e===t?0:(n-e)/(t-e)}function vt(e,t,n){return(1-n)*e+n*t}function yt(e,t,n,r){return vt(e,t,1-Math.exp(-n*r))}function bt(e,t=1){return t-Math.abs(ht(e,t*2)-t)}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wt(e,t){return e+Math.random()*(t-e)}function Tt(e){return e*(.5-Math.random())}function Et(e){e!==void 0&&(dt=e);let t=dt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dt(e){return e*ft}function Ot(e){return e*pt}function kt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function At(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Nt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pt(e,t){if(t.constructor===Float32Array)return e;let n=Nt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ft(e,t){if(t.constructor===Float32Array)return e;let n=Nt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var It={DEG2RAD:ft,RAD2DEG:pt,generateUUID:mt,clamp:H,euclideanModulo:ht,mapLinear:gt,inverseLerp:_t,lerp:vt,damp:yt,pingpong:bt,smoothstep:xt,smootherstep:St,randInt:Ct,randFloat:wt,randFloatSpread:Tt,seededRandom:Et,degToRad:Dt,radToDeg:Ot,isPowerOfTwo:kt,ceilPowerOfTwo:At,floorPowerOfTwo:jt,setQuaternionFromProperEuler:Mt,normalize:Ft,denormalize:Pt};o=Symbol.iterator;var U=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=U,e.prototype.isVector2=!0;var Lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var W=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rt.copy(this).projectOnVector(e),this.sub(Rt)}reflect(e){return this.sub(Rt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=W,t.prototype.isVector3=!0;var Rt=new W,zt=new Lt,G=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ot(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Bt.makeScale(e,t)),this}rotate(e){return ot(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Bt.makeRotation(-e)),this}translate(e,t){return ot(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=G,n.prototype.isMatrix3=!0;var Bt=new G,Vt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ht=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ut(){let e={enabled:!0,workingColorSpace:Ke,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?qe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ke]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:r,transfer:Je,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),e}var Wt=Ut();function Gt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Kt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var qt,Jt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qt===void 0&&(qt=tt(`canvas`)),qt.width=e.width,qt.height=e.height;let t=qt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=qt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=tt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Gt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Gt(t[e]/255)*255):t[e]=Gt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Yt=0,Xt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=mt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Zt(r[t].image)):e.push(Zt(r[t]))}else e=Zt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Zt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Jt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Qt=0,$t=new W,en=class e extends lt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=N,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=mt(),this.name=``,this.source=new Xt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($t).x}get height(){return this.source.getSize($t).y}get depth(){return this.source.getSize($t).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=300,en.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var tn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=tn,r.prototype.isVector4=!0;var nn=class extends lt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new en({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},rn=class extends nn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},an=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},on=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},sn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cn.setFromMatrixColumn(e,0).length(),i=1/cn.setFromMatrixColumn(e,1).length(),a=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(un,e,dn)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fn.crossVectors(n,mn),fn.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fn.crossVectors(n,mn)),fn.normalize(),pn.crossVectors(mn,fn),r[0]=fn.x,r[4]=pn.x,r[8]=mn.x,r[1]=fn.y,r[5]=pn.y,r[9]=mn.y,r[2]=fn.z,r[6]=pn.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=cn.set(r[0],r[1],r[2]).length(),o=cn.set(r[4],r[5],r[6]).length(),s=cn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ln.copy(this);let c=1/a,l=1/o,u=1/s;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=sn,i.prototype.isMatrix4=!0;var cn=new W,ln=new sn,un=new W(0,0,0),dn=new W(1,1,1),fn=new W,pn=new W,mn=new W,hn=new sn,gn=new Lt,_n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gn.setFromEuler(this),this.setFromQuaternion(gn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER=`XYZ`;var vn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},yn=0,bn=new W,xn=new Lt,Sn=new sn,Cn=new W,wn=new W,Tn=new W,En=new Lt,Dn=new W(1,0,0),On=new W(0,1,0),kn=new W(0,0,1),An={type:`added`},jn={type:`removed`},Mn={type:`childadded`,child:null},Nn={type:`childremoved`,child:null},Pn=class e extends lt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=mt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new _n,r=new Lt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new sn},normalMatrix:{value:new G}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(Dn,e)}rotateY(e){return this.rotateOnAxis(On,e)}rotateZ(e){return this.rotateOnAxis(kn,e)}translateOnAxis(e,t){return bn.copy(e).applyQuaternion(this.quaternion),this.position.add(bn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dn,e)}translateY(e){return this.translateOnAxis(On,e)}translateZ(e){return this.translateOnAxis(kn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cn.copy(e):Cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(wn,Cn,this.up):Sn.lookAt(Cn,wn,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),xn.setFromRotationMatrix(Sn),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,Tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,En,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pn.DEFAULT_UP=new W(0,1,0),Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},In={type:`move`},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(In)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Wt.workingColorSpace){if(e=ht(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vn(i,r,e+1/3),this.g=Vn(i,r,e),this.b=Vn(i,r,e-1/3)}return Wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ge){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ge){let n=Rn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}copyLinearToSRGB(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return Wt.workingToColorSpace(Hn.copy(this),e),Math.round(H(Hn.r*255,0,255))*65536+Math.round(H(Hn.g*255,0,255))*256+Math.round(H(Hn.b*255,0,255))}getHexString(e=Ge){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ge){Wt.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bn);let n=vt(zn.h,Bn.h,t),r=vt(zn.s,Bn.s,t),i=vt(zn.l,Bn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new K;K.NAMES=Rn;var Un=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wn=class extends Pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new W,Kn=new W,qn=new W,Jn=new W,Yn=new W,Xn=new W,Zn=new W,Qn=new W,$n=new W,er=new W,tr=new tn,nr=new tn,rr=new tn,ir=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gn.subVectors(r,t),Kn.subVectors(n,t),qn.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Kn),s=Gn.dot(qn),c=Kn.dot(Kn),l=Kn.dot(qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)!==null&&Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jn.x),s.addScaledVector(a,Jn.y),s.addScaledVector(o,Jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return tr.setScalar(0),nr.setScalar(0),rr.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,i.x),a.addScaledVector(nr,i.y),a.addScaledVector(rr,i.z),a}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),Kn.subVectors(e,t),Gn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yn.subVectors(r,n),Xn.subVectors(i,n),Qn.subVectors(e,n);let s=Yn.dot(Qn),c=Xn.dot(Qn);if(s<=0&&c<=0)return t.copy(n);$n.subVectors(e,r);let l=Yn.dot($n),u=Xn.dot($n);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Yn,a);er.subVectors(e,i);let f=Yn.dot(er),p=Xn.dot(er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ar=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sr):sr.fromBufferAttribute(r,t),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),gr.subVectors(this.max,hr),lr.subVectors(e.a,hr),ur.subVectors(e.b,hr),dr.subVectors(e.c,hr),fr.subVectors(ur,lr),pr.subVectors(dr,ur),mr.subVectors(lr,dr);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-mr.z,mr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,mr.z,0,-mr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-mr.y,mr.x,0];return!yr(t,lr,ur,dr,gr)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,lr,ur,dr,gr))?!1:(_r.crossVectors(fr,pr),t=[_r.x,_r.y,_r.z],yr(t,lr,ur,dr,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new W,new W,new W,new W,new W,new W,new W,new W],sr=new W,cr=new ar,lr=new W,ur=new W,dr=new W,fr=new W,pr=new W,mr=new W,hr=new W,gr=new W,_r=new W,vr=new W;function yr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vr.fromArray(e,a);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),s=t.dot(vr),c=n.dot(vr),l=r.dot(vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var br=new W,xr=new U,Sr=0,Cr=class extends lt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Xe,this.updateRanges=[],this.gpuType=w,this.version=0,this._normalizationScale=e===void 0?void 0:Nt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ft(e,this.array):Math.round(e*t)}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new ar,Or=new W,kr=new W,Ar=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new sn,Nr=new Pn,Pr=new W,Fr=new ar,Ir=new ar,Lr=new W,Rr=class e extends lt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=mt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new($e(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Xe,this.updateRanges=[],this.version=0,this.uuid=mt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Br(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=mt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Vr=new W,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Nt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){it(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){it(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ft(e,this.data.array):Math.round(e*t)}},Ur=new W,Wr=new W,Gr=new G,Kr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends lt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=mt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ye,this.stencilZFail=Ye,this.stencilZPass=Ye,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,Zr=new W,Qr=new W,$r=new W,ei=new U,ti=new U,ni=new sn,ri=new W,ii=new W,ai=new W,oi=new U,si=new U,ci=new U,li=class extends Pn{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type=`Sprite`,Xr===void 0){Xr=new Rr;let e=new zr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute(`position`,new Hr(e,3,0,!1)),Xr.setAttribute(`uv`,new Hr(e,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&V(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Qr.setFromMatrixScale(this.matrixWorld),ni.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-$r.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ui(ri.set(-.5,-.5,0),$r,a,Qr,r,i),ui(ii.set(.5,-.5,0),$r,a,Qr,r,i),ui(ai.set(.5,.5,0),$r,a,Qr,r,i),oi.set(0,0),si.set(1,0),ci.set(1,1);let o=e.ray.intersectTriangle(ri,ii,ai,!1,Zr);if(o===null&&(ui(ii.set(-.5,.5,0),$r,a,Qr,r,i),si.set(0,1),o=e.ray.intersectTriangle(ri,ai,ii,!1,Zr),o===null))return;let s=e.ray.origin.distanceTo(Zr);s<e.near||s>e.far||t.push({distance:s,point:Zr.clone(),uv:ir.getInterpolation(Zr,ri,ii,ai,oi,si,ci,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ui(e,t,n,r,i,a){ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ti.copy(ei):(ti.x=a*ei.x-i*ei.y,ti.y=i*ei.x+a*ei.y),e.copy(t),e.x+=ti.x,e.y+=ti.y,e.applyMatrix4(ni)}var di=new W,fi=new W,pi=new W,mi=new W,hi=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,te=1/w,ne=T-ee*D,re=E-P*D,ie=O-ee*A,ae=k-P*A,oe=j-ee*N,se=M-P*N,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=te*(ce*D+F*A+le*N);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new sn,vi=new hi,yi=new Ar,bi=new W,xi=new W,Si=new W,Ci=new W,wi=new W,Ti=new W,Ei=new W,Di=new W,q=class extends Pn{constructor(e=new Rr,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wi.fromBufferAttribute(s,e),a?Ti.addScaledVector(wi,r):Ti.addScaledVector(wi.sub(t),r))}t.add(Ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(i),vi.copy(e.ray).recast(e.near),yi.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yi,bi)===null||vi.origin.distanceToSquared(bi)>(e.far-e.near)**2)||(_i.copy(i).invert(),vi.copy(e.ray).applyMatrix4(_i),(n.boundingBox===null||vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Di.copy(s),Di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Di);return l<n.near||l>n.far?null:{distance:l,point:Di.clone(),object:e}}function ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xi),e.getVertexPosition(c,Si),e.getVertexPosition(l,Ci);let u=Oi(e,t,n,r,xi,Si,Ci,Ei);if(u){let e=new W;ir.getBarycoord(Ei,xi,Si,Ci,e),i&&(u.uv=ir.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=ir.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=ir.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};ir.getNormal(xi,Si,Ci,t.normal),u.face=t,u.barycoord=e}return u}var Ai=class extends en{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ji=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new sn,Ni=new sn,Pi=[],Fi=new ar,Ii=new sn,Li=new q,Ri=new Ar,zi=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Fi.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ri.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Mi),Ni.multiplyMatrices(n,Mi),Li.matrixWorld=Ni,Li.raycast(e,Pi);for(let e=0,n=Pi.length;e<n;e++){let n=Pi[e];n.instanceId=i,n.object=this,t.push(n)}Pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(r*this.count),r,this.count,te,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new Ar,Vi=new U(.5,.5),Hi=new W,Ui=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476+Vi.distanceTo(e.center),Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Hi.x=r.normal.x>0?e.max.x:e.min.x,Hi.y=r.normal.y>0?e.max.y:e.min.y,Hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wi=new sn,Gi=class e{constructor(){this.coordinateSystem=Qe,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Wi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ui),n[e].setFromProjectionMatrix(Wi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ui),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ki=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qi=new sn,Ji=new hi,Yi=new Ar,Xi=new W,Zi=class extends Pn{constructor(e=new Rr,t=new Ki){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(r),Yi.radius+=i,e.ray.intersectsSphere(Yi)===!1)return;qi.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Xi.fromBufferAttribute(l,n),Qi(Xi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Xi.fromBufferAttribute(l,a),Qi(Xi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Qi(e,t,n,r,i,a,o){let s=Ji.distanceSqToPoint(e);if(s<n){let n=new W;Ji.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var $i=class extends en{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ea=class extends en{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ta=class extends en{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ee,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},na=class extends ta{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ee){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ra=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ia=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},aa=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class e extends aa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class e extends Rr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Er(i,3)),this.setAttribute(`normal`,new Er(i.slice(),3)),this.setAttribute(`uv`,new Er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ca=class e extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},la=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new sn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(H(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(H(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ua=class extends la{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},da=class extends ua{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function fa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var pa=new W,ma=new W,ha=new fa,ga=new fa,_a=new fa,va=class extends la{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ma.subVectors(r[0],r[1]).add(r[0]),c=ma);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(pa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=pa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ha.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ga.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),_a.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ha.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ga.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),_a.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ha.calc(s),ga.calc(s),_a.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ya(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ba(e,t){let n=1-e;return n*n*t}function xa(e,t){return 2*(1-e)*e*t}function Sa(e,t){return e*e*t}function Ca(e,t,n,r){return ba(e,t)+xa(e,n)+Sa(e,r)}function wa(e,t){let n=1-e;return n*n*n*t}function Ta(e,t){let n=1-e;return 3*n*n*e*t}function Ea(e,t){return 3*(1-e)*e*e*t}function Da(e,t){return e*e*e*t}function Oa(e,t,n,r,i){return wa(e,t)+Ta(e,n)+Ea(e,r)+Da(e,i)}var ka=class extends la{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,r.x,i.x,a.x,o.x),Oa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends la{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,r.x,i.x,a.x,o.x),Oa(e,r.y,i.y,a.y,o.y),Oa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends la{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends la{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends la{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ca(e,r.x,i.x,a.x),Ca(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends la{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ca(e,r.x,i.x,a.x),Ca(e,r.y,i.y,a.y),Ca(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends la{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ya(o,s.x,c.x,l.x,u.x),ya(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},Ia=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:va,CubicBezierCurve:ka,CubicBezierCurve3:Aa,EllipseCurve:ua,LineCurve:ja,LineCurve3:Ma,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Pa,SplineCurve:Fa}),La=class extends la{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ia[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ia[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ra=class extends La{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ja(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Na(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ka(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Fa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ua(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},za=class extends Ra{constructor(e){super(e),this.uuid=mt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ra().fromJSON(n))}return this}};function Ba(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Va(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ja(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ua(a,o,n,s,c,l,0),o}function Va(e,t,n,r,i){let a;if(i===yo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=go(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=go(i/r|0,e[i],e[i+1],a);return a&&so(a,a.next)&&(_o(a),a=a.next),a}function Ha(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(so(n,n.next)||oo(n.prev,n,n.next)===0)){if(_o(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ua(e,t,n,r,i,a,o){if(!e)return;!o&&a&&$a(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ga(e,r,i,a):Wa(e))t.push(c.i,e.i,l.i),_o(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ka(Ha(e),t),Ua(e,t,n,r,i,a,2)):o===2&&qa(e,t,n,r,i,a):Ua(Ha(e),t,n,r,i,a,1);break}}}function Wa(e){let t=e.prev,n=e,r=e.next;if(oo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&io(i,s,a,c,o,l,m.x,m.y)&&oo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ga(e,t,n,r){let i=e.prev,a=e,o=e.next;if(oo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=to(p,m,t,n,r),v=to(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&io(s,u,c,d,l,f,y.x,y.y)&&oo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(s,u,c,d,l,f,b.x,b.y)&&oo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&io(s,u,c,d,l,f,y.x,y.y)&&oo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(s,u,c,d,l,f,b.x,b.y)&&oo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ka(e,t){let n=e;do{let r=n.prev,i=n.next.next;!so(r,i)&&co(r,n,n.next,i)&&po(r,i)&&po(i,r)&&(t.push(r.i,n.i,i.i),_o(n),_o(n.next),n=e=i),n=n.next}while(n!==e);return Ha(n)}function qa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ao(o,e)){let s=ho(o,e);o=Ha(o,o.next),s=Ha(s,s.next),Ua(o,t,n,r,i,a,0),Ua(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ja(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Va(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(no(o))}i.sort(Ya);for(let e=0;e<i.length;e++)n=Xa(i[e],n);return n}function Ya(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Xa(e,t){let n=Za(e,t);if(!n)return t;let r=ho(n,e);return Ha(r,r.next),Ha(n,n.next)}function Za(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(so(e,n))return n;do{if(so(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ro(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);po(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Qa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Qa(e,t){return oo(e.prev,e,t.prev)<0&&oo(t.next,e,e.next)<0}function $a(e,t,n,r){let i=e;do i.z===0&&(i.z=to(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,eo(i)}function eo(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function to(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function no(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ro(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function io(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ro(e,t,n,r,i,a,o,s)}function ao(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fo(e,t)&&(po(e,t)&&po(t,e)&&mo(e,t)&&(oo(e.prev,e,t.prev)||oo(e,t.prev,t))||so(e,t)&&oo(e.prev,e,e.next)>0&&oo(t.prev,t,t.next)>0)}function oo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function so(e,t){return e.x===t.x&&e.y===t.y}function co(e,t,n,r){let i=uo(oo(e,t,n)),a=uo(oo(e,t,r)),o=uo(oo(n,r,e)),s=uo(oo(n,r,t));return!!(i!==a&&o!==s||i===0&&lo(e,n,t)||a===0&&lo(e,r,t)||o===0&&lo(n,e,r)||s===0&&lo(n,t,r))}function lo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function uo(e){return e>0?1:e<0?-1:0}function fo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&co(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function po(e,t){return oo(e.prev,e,e.next)<0?oo(e,t,e.next)>=0&&oo(e,e.prev,t)>=0:oo(e,t,e.prev)<0||oo(e,e.next,t)<0}function mo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ho(e,t){let n=vo(e.i,e.x,e.y),r=vo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function go(e,t,n,r){let i=vo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function _o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function vo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var bo=class{static triangulate(e,t,n=2){return Ba(e,t,n)}},xo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];So(e),Co(n,e);let a=e.length;t.forEach(So);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Co(n,t[e]);let o=bo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function So(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Co(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var wo=class e extends Rr{constructor(e=new za([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Er(r,3)),this.setAttribute(`uv`,new Er(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?To:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new W,b=new W,x=new W}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!xo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];xo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=xo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=xo.triangulateShape(e,t)}let te=P.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<te;e++){let n=P[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<te;e++){let n=P[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<te;e++){let t=P[e];se(t[2],t[1],t[0])}for(let e=0;e<te;e++){let t=P[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Eo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ia[i.type]().fromJSON(i)),new e(r,t.options)}},To={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function Eo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Do=class e extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Oo=class e extends sa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ko=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ao=class e extends Rr{constructor(e=new za([new U(0,.5),new U(-.5,-.5),new U(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Er(r,3)),this.setAttribute(`normal`,new Er(i,3)),this.setAttribute(`uv`,new Er(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;xo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];xo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=xo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function jo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Mo=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},No=class e extends Rr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Po(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Io(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Io(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Fo(e){let t={};for(let n=0;n<e.length;n++){let r=Po(e[n]);for(let e in r)t[e]=r[e]}return t}function Io(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Lo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ro(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var zo={clone:Po,merge:Fo},Bo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ho=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bo,this.fragmentShader=Vo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=Lo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new sn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Uo=class extends Ho{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Wo=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Go=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=We,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Jo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Yo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Xo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ve,endingEnd:Ve}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case He:i=e,o=2*t-n;break;case Ue:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case He:a=e,s=2*n-t;break;case Ue:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Zo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Qo=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$o=class extends Yo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ns(n,t,g,y,r);i[p]=es(x,o,_,b,m)}return i}};function es(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ts(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ns(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=es(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ts(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var rs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Jo(e.settings)&&(n.settings={inTangents:qo(e.settings.inTangents,Array),outTangents:qo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case z:t=this.InterpolantFactoryMethodDiscrete;break;case Re:t=this.InterpolantFactoryMethodLinear;break;case ze:t=this.InterpolantFactoryMethodSmooth;break;case Be:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return z;case this.InterpolantFactoryMethodLinear:return Re;case this.InterpolantFactoryMethodSmooth:return ze;case this.InterpolantFactoryMethodBezier:return Be}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Jo(this.settings)&&(is(this.settings.inTangents,e),is(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Jo(this.settings)&&(as(this.settings.inTangents,e),as(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&et(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ze,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Jo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function is(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function as(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}rs.prototype.ValueTypeName=``,rs.prototype.TimeBufferType=Float32Array,rs.prototype.ValueBufferType=Float32Array,rs.prototype.DefaultInterpolation=Re;var os=class extends rs{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName=`bool`,os.prototype.ValueBufferType=Array,os.prototype.DefaultInterpolation=z,os.prototype.InterpolantFactoryMethodLinear=void 0,os.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};ss.prototype.ValueTypeName=`color`;var cs=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};cs.prototype.ValueTypeName=`number`;var ls=class extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},us=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ls(this.times,this.values,this.getValueSize(),e)}};us.prototype.ValueTypeName=`quaternion`,us.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends rs{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName=`string`,ds.prototype.ValueBufferType=Array,ds.prototype.DefaultInterpolation=z,ds.prototype.InterpolantFactoryMethodLinear=void 0,ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}};fs.prototype.ValueTypeName=`vector`;var ps=class extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hs=new sn,gs=new W,_s=new W,vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gs.setFromMatrixPosition(e.matrixWorld),t.position.copy(gs),_s.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_s),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){hs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ys=new W,bs=new Lt,xs=new W,Ss=class extends Pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ys,bs,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,bs,xs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ys,bs,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,bs,xs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new W,ws=new U,Ts=new U,Es=class extends Ss{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ft*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pt*2*Math.atan(Math.tan(ft*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,ws,Ts),t.subVectors(Ts,ws)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ft*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=class extends Ss{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Os=class extends vs{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Os}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},As=class extends Rr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},js=-90,Ms=1,Ns=class extends Pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Es(js,Ms,e,t);r.layers=this.layers,this.add(r);let i=new Es(js,Ms,e,t);i.layers=this.layers,this.add(i);let a=new Es(js,Ms,e,t);a.layers=this.layers,this.add(a);let o=new Es(js,Ms,e,t);o.layers=this.layers,this.add(o);let s=new Es(js,Ms,e,t);s.layers=this.layers,this.add(s);let c=new Es(js,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ps=class extends Es{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Fs=`\\[\\]\\.:\\/`,Is=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ls=`[^\\[\\]\\.:\\/]`,Rs=`[^`+Fs.replace(`\\.`,``)+`]`,zs=`((?:WC+[\\/:])*)`.replace(`WC`,Ls),Bs=`(WCOD+)?`.replace(`WCOD`,Rs),Vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ls),Hs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ls),Us=RegExp(`^`+zs+Bs+Vs+Hs+`$`),Ws=[`material`,`materials`,`bones`,`map`],Gs=class{constructor(e,t,n){let r=n||Ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Is,``)}static parseTrackName(e){let t=Us.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ws.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ks.Composite=Gs,Ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ks.prototype.GetterByBindingType=[Ks.prototype._getValue_direct,Ks.prototype._getValue_array,Ks.prototype._getValue_arrayElement,Ks.prototype._getValue_toArray],Ks.prototype.SetterByBindingTypeAndVersioning=[[Ks.prototype._setValue_direct,Ks.prototype._setValue_direct_setNeedsUpdate,Ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_array,Ks.prototype._setValue_array_setNeedsUpdate,Ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_arrayElement,Ks.prototype._setValue_arrayElement_setNeedsUpdate,Ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_fromArray,Ks.prototype._setValue_fromArray_setNeedsUpdate,Ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function qs(e,t,n,r){let i=Js(r);switch(n){case j:return e*t;case te:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case ae:return e*t*4/i.components*i.byteLength;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:case fe:return Math.max(e,16)*Math.max(t,8)/4;case le:case de:return Math.max(e,8)*Math.max(t,8)/2;case pe:case me:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case he:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case I:case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ie:case L:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Le:case R:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Js(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ys(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Zs={basic:{uniforms:Fo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Fo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Fo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Fo([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Fo([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Fo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Fo([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Fo([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Fo([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Fo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Fo([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:Fo([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:Fo([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Zs.physical={uniforms:Fo([Zs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Qs={r:0,b:0,g:0},$s=new sn,ec=new G;ec.set(-1,0,0,0,1,0,0,0,1);function tc(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new ia(1,1,1),new Ho({name:`BackgroundCubeMaterial`,uniforms:Po(Zs.backgroundCube.uniforms),vertexShader:Zs.backgroundCube.vertexShader,fragmentShader:Zs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($s.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ec),l.material.toneMapped=Wt.getTransfer(i.colorSpace)!==Je,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new ko(2,2),new Ho({name:`BackgroundMaterial`,uniforms:Po(Zs.background.uniforms),vertexShader:Zs.background.vertexShader,fragmentShader:Zs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(i.colorSpace)!==Je,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Qs,Ro(e)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function nc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function rc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ic(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ac(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var oc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $i(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ia(5,5,5),i=new Ho({name:`CubemapFromEquirect`,uniforms:Po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new Ns(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},sc=256,cc=3,lc=20,uc=256,dc=16,fc=3,pc=new W,mc=new K,hc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ns(1,10,null),this._boxMesh=new q(new ia(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=pc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(mc));let h=new Ns(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(sc,jt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?sc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=gc(e,!1,!1),n=Math.log2(e)-cc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=gc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vc(),this._integrationMaterial=yc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/dc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-fc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(uc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function gc(e,t,n){return new oc(e,{minFilter:_,generateMipmaps:t,type:T,colorSpace:Ke,depthBuffer:n})}function _c(e,t,n){return new Ho({name:e,uniforms:t,vertexShader:J.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function vc(){return _c(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yc(){return _c(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bc(){return _c(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xc(){return _c(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sc(){return _c(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new oc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ot(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Tc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Tr:wr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ec(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Dc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Oc(e,t,n){let r=new WeakMap,i=new tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new an(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function kc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ac={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jc(e,t,n,r,i,a){let o=new rn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Rr;u.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let d=new Uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new Ds(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ta(t,n),a===!0&&(l.format=P,l.type=O)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Wt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ac[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Mc=new en,Nc=new ta(1,1),Pc=new na(1),Fc=new an,Ic=new on,Lc=new $i,Rc=[],zc=[],Bc=new Float32Array(16),Vc=new Float32Array(9),Hc=new Float32Array(4);function Uc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Rc[i];if(a===void 0&&(a=new Float32Array(i),Rc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Kc(e,t){let n=zc[t];n===void 0&&(n=new Int32Array(t),zc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2fv(this.addr,t),Gc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wc(n,t))return;e.uniform3fv(this.addr,t),Gc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4fv(this.addr,t),Gc(n,t)}}function Zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Hc.set(r),e.uniformMatrix2fv(this.addr,!1,Hc),Gc(n,r)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Vc.set(r),e.uniformMatrix3fv(this.addr,!1,Vc),Gc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Bc.set(r),e.uniformMatrix4fv(this.addr,!1,Bc),Gc(n,r)}}function el(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2iv(this.addr,t),Gc(n,t)}}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3iv(this.addr,t),Gc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4iv(this.addr,t),Gc(n,t)}}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2uiv(this.addr,t),Gc(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3uiv(this.addr,t),Gc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4uiv(this.addr,t),Gc(n,t)}}function cl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?cl(Nc):Mc,n.setTexture2D(t||a,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ic,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?cl(Pc):Lc,n.setTextureCube(t||a,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fc,i)}function pl(e){switch(e){case 5126:return qc;case 35664:return Jc;case 35665:return Yc;case 35666:return Xc;case 35674:return Zc;case 35675:return Qc;case 35676:return $c;case 5124:case 35670:return el;case 35667:case 35671:return tl;case 35668:case 35672:return nl;case 35669:case 35673:return rl;case 5125:return il;case 36294:return al;case 36295:return ol;case 36296:return sl;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return ul;case 35680:case 36300:case 36308:case 36293:return dl;case 36289:case 36303:case 36311:case 36292:return fl}}function ml(e,t){e.uniform1fv(this.addr,t)}function hl(e,t){let n=Uc(t,this.size,2);e.uniform2fv(this.addr,n)}function gl(e,t){let n=Uc(t,this.size,3);e.uniform3fv(this.addr,n)}function _l(e,t){let n=Uc(t,this.size,4);e.uniform4fv(this.addr,n)}function vl(e,t){let n=Uc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yl(e,t){let n=Uc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bl(e,t){let n=Uc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xl(e,t){e.uniform1iv(this.addr,t)}function Sl(e,t){e.uniform2iv(this.addr,t)}function Cl(e,t){e.uniform3iv(this.addr,t)}function wl(e,t){e.uniform4iv(this.addr,t)}function Tl(e,t){e.uniform1uiv(this.addr,t)}function El(e,t){e.uniform2uiv(this.addr,t)}function Dl(e,t){e.uniform3uiv(this.addr,t)}function Ol(e,t){e.uniform4uiv(this.addr,t)}function kl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?cl(Nc):Mc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ic,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?cl(Pc):Lc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fc,a[e])}function Nl(e){switch(e){case 5126:return ml;case 35664:return hl;case 35665:return gl;case 35666:return _l;case 35674:return vl;case 35675:return yl;case 35676:return bl;case 5124:case 35670:return xl;case 35667:case 35671:return Sl;case 35668:case 35672:return Cl;case 35669:case 35673:return wl;case 5125:return Tl;case 36294:return El;case 36295:return Dl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return kl;case 35679:case 36299:case 36307:return Al;case 35680:case 36300:case 36308:case 36293:return jl;case 36289:case 36303:case 36311:case 36292:return Ml}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pl(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nl(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Rl(e,t){e.seq.push(t),e.map[t.id]=t}function zl(e,t,n){let r=e.name,i=r.length;for(Ll.lastIndex=0;;){let a=Ll.exec(r),o=Ll.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rl(n,l===void 0?new Pl(s,e,t):new Fl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Il(s),Rl(n,e)),n=e}}}var Bl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hl=37297,Ul=0;function Wl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gl=new G;function Kl(e){Wt._getMatrix(Gl,Wt.workingColorSpace,e);let t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(e)){case qe:return[t,`LinearTransferOETF`];case Je:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ql(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wl(e.getShaderSource(t),r)}return i}function Jl(e,t){let n=Kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Yl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xl(e,t){let n=Yl[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zl=new W;function Ql(){return Wt.getLuminanceCoefficients(Zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zl.x.toFixed(4)}, ${Zl.y.toFixed(4)}, ${Zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $l(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nu).join(`
`)}function eu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nu(e){return e!==``}function ru(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function iu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var au=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(e){return e.replace(au,su)}function su(e,t){let n=J[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ou(n)}var cu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(e){return e.replace(cu,uu)}function uu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function du(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var fu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function pu(e){return fu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var mu={302:`ENVMAP_MODE_REFRACTION`};function hu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:mu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var gu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function _u(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:gu[e.combine]||`ENVMAP_BLENDING_NONE`}function vu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=hu(n),d=_u(n),f=$l(n),p=eu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(nu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(nu).join(`
`),g.length>0&&(g+=`
`)):(h=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nu).join(`
`),g=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Xl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Jl(`linearToOutputTexel`,n.outputColorSpace),Ql(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nu).join(`
`)),o=ou(o),o=ru(o,n),o=iu(o,n),s=ou(s),s=ru(s,n),s=iu(s,n),o=lu(o),s=lu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Vl(i,i.VERTEX_SHADER,v),x=Vl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=ql(i,b,`vertex`),n=ql(i,x,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Bl(i,m),w=tu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Hl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ul++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var yu=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xu(e),t.set(e,n)),n}},xu=class{constructor(e){this.id=yu++,this.code=e,this.usedTimes=0}};function Su(e){return e===1030||e===37490||e===36285}function Cu(e,t,n,r,i,a){let o=new vn,s=new bu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Zs[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,P=!!i.matcap,te=!!b,ne=te&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,Ce=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,I=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let L=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:P,envMap:te,envMapMode:te&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?L.length-1:null,envMapSize:ne?L[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Su(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:I,alphaHash:Pe,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:De&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:ke&&p(i.specularIntensityMap.channel),transmissionMapUv:Ae&&p(i.transmissionMap.channel),thicknessMapUv:je&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Wt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Zs[t];n=zo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new vu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function wu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Tu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Eu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Du(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Tu),r.length>1&&r.sort(t||Eu),i.length>1&&i.sort(t||Eu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ou(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Du,e.set(t,[i])):n>=r.length?(i=new Du,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ku(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Au(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ju=0;function Mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Nu(e){let t=new ku,n=Au(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new sn,o=new sn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Mu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ju++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Pu(e){let t=new Nu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Fu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Pu(e),t.set(n,[a])):r>=i.length?(a=new Pu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Iu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ru=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],zu=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Bu=new sn,Vu=new W,Hu=new W;function Uu(e,t,n){let r=new Ui,i=new U,a=new U,o=new tn,s=new Go,c=new Ko,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new Ho({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Iu,fragmentShader:Lu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rr;g.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new q(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new rn(i.x,i.y,{format:re,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ta(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ee,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new oc(i.x),d.map.depthTexture=new na(i.x,C)):(d.map=new rn(i.x,i.y),d.map.depthTexture=new ta(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ee,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Vu),Hu.copy(e.position),Hu.add(Ru[t]),e.up.copy(zu[t]),e.lookAt(Hu),e.updateMatrixWorld(),n.makeTranslation(-Vu.x,-Vu.y,-Vu.z),Bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Bu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new rn(i.x,i.y,{format:re,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wu(e,t){function n(){let t=!1,n=new tn,r=null,i=new tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ct[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new tn().fromArray(re),oe=new tn().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(N&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function Ce(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function L(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function R(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:I,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:R,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Ie,viewport:L,reset:z}}function Gu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):tt(`canvas`)}function D(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?qe:Wt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function te(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,ne),te(e),se(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),te(e),F(e)}function oe(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}C.clear(),b.clear()}function se(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ce(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ce(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function F(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ie(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,i){let a=r.get(t);if(t.isVideoTexture&&Le(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ye={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},be={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne),ee(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=me(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=we(n.start,r.width,4),c=we(t.start,r.width,4);n.start<=i+1&&a===c&&we(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ee(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Wt.getPrimaries(Wt.workingColorSpace),r=o.colorSpace===``?null:Wt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=R(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);Se(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=N(o,t);if(o.isDepthTexture)p=M(o.format===P,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&Te(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=qs(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=qs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=z(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=z(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function De(t,o,s){if(o.image.length!==6)return;let c=Ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Wt.getPrimaries(Wt.workingColorSpace),r=o.colorSpace===``?null:Wt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=R(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=N(o,h);Se(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=M(o.format===P,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=z(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ve(i.depthTexture,0):he(i.depthTexture,0);let u=c.__webglTexture,d=Ie(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ae(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(i.__webglFramebuffer[0],t,0):Ae(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ke(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,i){let a=r.get(t);n!==void 0&&Oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&je(t)}function Ne(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,re),ee(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Se(c,a),Oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Se(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&je(t)}function I(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Pe=[];function Fe(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Pe.length=0,Pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Pe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Le(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Wt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=L,this.dispose=oe}function Ku(e,t){function n(n,r=``){let i,a=Wt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var qu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ju=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ho({vertexShader:qu,fragmentShader:Ju,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends lt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Yu,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new U,T=null,E=null,D=new Es;D.viewport=new tn;let k=new Es;k.viewport=new tn;let A=[D,k],j=new Ps,M=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?P:ee,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:N,type:v,depthTexture:new ta(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:N,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(M!==j.near||te!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,te=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ae(j,i);for(let e=0;e<a.length;e++)ae(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,j,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=pt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new Es,o.layers.enable(n),o.viewport=new tn,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ra,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Ys;F.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Zu=new sn,Qu=new G;Qu.set(-1,0,0,0,1,0,0,0,1);function $u(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ro(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Qu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ed(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var td=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nd=null;function rd(){return nd===null&&(nd=new Ai(td,16,16,re,T),nd.name=`DFG_LUT`,nd.minFilter=h,nd.magFilter=h,nd.wrapS=u,nd.wrapT=u,nd.generateMipmaps=!1,nd.needsUpdate=!0),nd}var id=class{constructor(e={}){let{canvas:t=nt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ae,ie,ne]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,ee=!1,P=null,te=null,re=null,oe=null;this._outputColorSpace=Ge;let se=0,ce=0,F=null,le=-1,ue=null,de=new tn,fe=new tn,pe=null,me=new K(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new tn(0,0,ge,_e),Se=new tn(0,0,ge,_e),Ce=!1,we=new Ui,Te=new Gi,Ee=!1,De=!1,Oe=new sn,ke=new W,Ae=new tn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return F===null?ve:1}let I=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,L,Le,R,z,Re,ze,Be,Ve,He,Ue,We,Ke,qe,Je,Ye,Xe,Ze,$e,et,tt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Pe(t,e),I===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),V(`WebGLRenderer: `+e.message),e}function at(){Fe=new wc(I),Fe.init(),et=new Ku(I,Fe),Ie=new ic(I,Fe,e,et),L=new Wu(I,Fe),Ie.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),te=I.createFramebuffer(),re=I.createFramebuffer(),oe=I.createFramebuffer(),Le=new Dc(I),R=new wu,z=new Gu(I,Fe,L,R,Ie,et,Le),Re=new Cc(N),ze=new Xs(I),tt=new nc(I,ze),Be=new Tc(I,ze,Le,tt),Ve=new kc(I,Be,ze,tt,Le),Xe=new Oc(I,Ie,z),qe=new ac(R),He=new Cu(N,Re,Fe,Ie,tt,qe),Ue=new $u(N,R),We=new Ou,Ke=new Fu(Fe),Ye=new tc(N,Re,L,Ve,p,s),Je=new Uu(N,Ve,Ie),rt=new ed(I,Le,Ie,L),Ze=new rc(I,Fe,Le),$e=new Ec(I,Fe,Le),Le.programs=He.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=R,N.renderLists=We,N.shadowMap=Je,N.state=L,N.info=Le}m!==1009&&(M=new jc(m,t.width,t.height,o,r,i));let ot=new Xu(N,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){ot.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(Ne()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=h.has(t)}if(e){let e=F.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,I.clearBufferiv(I.COLOR,0,b))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Ye.dispose(),We.dispose(),Ke.dispose(),z.dispose(),R.dispose(),Re.dispose(),Ve.dispose(),Be.dispose(),tt.dispose(),rt.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function ct(e){e.preventDefault(),it(`WebGLRenderer: Context Lost.`),ee=!0}function lt(){it(`WebGLRenderer: Context Restored.`),ee=!1;let e=Le.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;at(),Le.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function ut(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),R.remove(e)}function pt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=ze.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Ee===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),k=Ke.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),P!==null&&P.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=qe.init(this.clippingPlanes,De),Ee===!0&&qe.setGlobalState(this.clippingPlanes,t),P!==null&&Je.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),k=j.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let H=null;function ht(e){H&&H(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Ys;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){H=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;P!==null&&P.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=M!==null&&(F===null||n)&&M.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),k=Ke.get(e,j.length),k.init(t),k.state.textureUnits=z.getTextureUnits(),j.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,Qe,t.reversedDepth),De=this.localClippingEnabled,Ee=qe.init(this.clippingPlanes,De),w=We.get(e,A.length),w.init(),A.push(w),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),w.finish(),P!==null&&P.updateLights(k.state.lightsArray),N.sortObjects===!0&&w.sort(ye,be),Me=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Me&&Ye.addToRenderList(w,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Je.render(i,e,t),Ee===!0&&qe.endShadows(),(r&&M.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Me&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(w,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Me&&Ye.render(e),bt(w,e,t)}F!==null&&ce===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),tt.resetDefaultState(),le=-1,ue=null,j.pop(),j.length>0?(k=j[j.length-1],z.setTextureUnits(k.state.textureUnits),Ee===!0&&qe.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,P!==null&&P.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ve.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&qe.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new rn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Me&&Ye.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&qe.setGlobalState(N.clippingPlanes,r),St(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(me,he),d!==void 0&&(r.viewport=d),N.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=R.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=He.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Ot(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=je),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Wt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==ue)){let t=e===ue&&r.id===le;qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||x===!0)&&(C=x===!0?Et(r,t,i,s,h):Tt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,C,v));let w=!1,T=!1,E=!1,D=C.getUniforms(),O=v.uniforms;if(L.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==le&&(le=r.id,T=!0),w||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(I,`projectionMatrix`,e.projectionMatrix),D.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(I,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&D.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,T=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(I,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&D.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&D.setValue(I,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&D.setValue(I,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){D.setOptional(I,i,`bindMatrix`),D.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(D.setOptional(I,i,`batchingTexture`),D.setValue(I,`batchingTexture`,i._matricesTexture,z),D.setOptional(I,i,`batchingIdTexture`),D.setValue(I,`batchingIdTexture`,i._indirectTexture,z),D.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Xe.update(i,n,C),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=rd()),T){if(D.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(O,E),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=S,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Bl.upload(I,Dt(v),O,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bl.upload(I,Dt(v),O,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(I,`center`,i.center),D.setValue(I,`modelViewMatrix`,i.modelViewMatrix),D.setValue(I,`normalMatrix`,i.normalMatrix),D.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,C),rt.bind(n,C)}}return C}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=te),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Mt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await st(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,re),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}},ad={light:{id:`light`,name:`Light Snow`,height:.42,durability:1,value:1,density:6,resistance:.3,topColor:16054783,shadeColor:10274030,sparkle:.5,tuftHeight:.4,tuftWidth:.5},deep:{id:`deep`,name:`Deep Snow`,height:.72,durability:6,value:2,density:8,resistance:.48,topColor:14478591,shadeColor:8169702,sparkle:.6,tuftHeight:.56,tuftWidth:.52},packed:{id:`packed`,name:`Packed Snow`,height:.84,durability:24,value:4,density:10,resistance:.54,topColor:13622518,shadeColor:8295891,sparkle:.45,tuftHeight:.38,tuftWidth:.66},icy:{id:`icy`,name:`Icy Snow`,height:.66,durability:90,value:8,density:12,resistance:.56,topColor:12053751,shadeColor:5223128,sparkle:1.5,tuftHeight:.66,tuftWidth:.32},arctic:{id:`arctic`,name:`Arctic Snow`,height:1.05,durability:400,value:16,density:14,resistance:.62,topColor:14275323,shadeColor:9074912,sparkle:1.1,tuftHeight:.72,tuftWidth:.56},permafrost:{id:`permafrost`,name:`Permafrost`,height:.92,durability:1e3,value:20,density:16,resistance:.66,topColor:11134680,shadeColor:4169623,sparkle:.9,tuftHeight:.5,tuftWidth:.7},starfrost:{id:`starfrost`,name:`Starfrost`,height:1.15,durability:3e3,value:26,density:18,resistance:.7,topColor:16767471,shadeColor:13922240,sparkle:2,tuftHeight:.82,tuftWidth:.42},emberfrost:{id:`emberfrost`,name:`Emberfrost`,height:1,durability:9e3,value:40,density:18,resistance:.72,topColor:16763296,shadeColor:15228986,sparkle:1.6,tuftHeight:.7,tuftWidth:.5},voidsnow:{id:`voidsnow`,name:`Void Snow`,height:1.15,durability:3e4,value:60,density:18,resistance:.74,topColor:11839728,shadeColor:5193652,sparkle:2.4,tuftHeight:.78,tuftWidth:.6},crystal:{id:`crystal`,name:`Crystal Frost`,height:1.05,durability:1e5,value:90,density:18,resistance:.76,topColor:11599860,shadeColor:3130580,sparkle:3,tuftHeight:.95,tuftWidth:.32},plasma:{id:`plasma`,name:`Plasma Snow`,height:1.1,durability:35e4,value:140,density:18,resistance:.78,topColor:13959088,shadeColor:5556287,sparkle:2.6,tuftHeight:.74,tuftWidth:.56},omega:{id:`omega`,name:`Omega Snow`,height:1.25,durability:12e5,value:220,density:18,resistance:.8,topColor:16773296,shadeColor:15247407,sparkle:3.4,tuftHeight:.9,tuftWidth:.5}},od={bladeDepth:.6,minEffectiveness:.05,baseRate:14,denseCutPower:1.7,passRate:1.6,crumb:.08,denseDrag:.45,powerRelief:.45,minSpeed:.26,fullSpeed:.85},sd={basePrice:.1,startingMoney:0,sectionClearedAt:.05},cd={width:{id:`width`,name:`Blade Width`,blurb:`Clear wider paths`,baseCost:5,costGrowth:1.378,maxLevel:80,mode:`add`,step:.11},power:{id:`power`,name:`Plow Power`,blurb:`Bite through dense snow`,baseCost:9,costGrowth:1.249,maxLevel:240,mode:`mul`,step:1.0909},speed:{id:`speed`,name:`Engine Speed`,blurb:`Drive and clear faster`,baseCost:5,costGrowth:1.378,maxLevel:80,mode:`add`,step:.1},capacity:{id:`capacity`,name:`Trailer Size`,blurb:`Carry more per trip`,baseCost:6,costGrowth:1.323,maxLevel:120,mode:`mul`,step:1.044},value:{id:`value`,name:`Sell Price`,blurb:`Your snow sells for more`,baseCost:17,costGrowth:1.36,maxLevel:120,mode:`add`,step:.025},vault:{id:`vault`,name:`Night Shift`,blurb:`Offline earnings: hours the factory keeps earning while you are away`,baseCost:500,costGrowth:4,maxLevel:10,mode:`add`,step:1,requiresStage:`Melt Shed`},assembly:{id:`assembly`,name:`Faster Line`,blurb:`The factory packs crates faster`,baseCost:60,costGrowth:1.32,maxLevel:60,mode:`mul`,step:1.02,requiresStage:`Melt Shed`},warehouse:{id:`warehouse`,name:`Warehouse`,blurb:`Room for more crates before the line has to stop`,baseCost:40,costGrowth:1.3,maxLevel:40,mode:`add`,step:30,requiresStage:`Melt Shed`},dock:{id:`dock`,name:`Bigger Crates`,blurb:`Every vehicle carries away more money per crate`,baseCost:80,costGrowth:1.35,maxLevel:30,mode:`add`,step:.1,requiresStage:`Melt Shed`},train:{id:`train`,name:`Longer Trains`,blurb:`Every train hauls more crates`,baseCost:5e4,costGrowth:1.45,maxLevel:30,mode:`add`,step:6,requiresStage:`Rail Yard`},rocket:{id:`rocket`,name:`Rocket Fuel`,blurb:`More of the factory output goes up on each rocket`,baseCost:5e6,costGrowth:1.5,maxLevel:30,mode:`add`,step:.01,requiresStage:`Rocket Pad`}},ld=[`width`,`power`,`speed`,`capacity`,`value`,`assembly`,`warehouse`,`dock`,`train`,`rocket`,`vault`],ud=[{id:`plow`,name:`Plow`,upgrades:[`width`,`power`]},{id:`truck`,name:`Truck`,upgrades:[`speed`]},{id:`trailer`,name:`Trailer`,upgrades:[`capacity`,`value`]},{id:`factory`,name:`Factory`,upgrades:[`assembly`,`warehouse`,`dock`,`train`,`rocket`,`vault`]}],dd={market:{id:`market`,name:`Snow Market`,blurb:`Every sale pays more`,costs:[2,3,4,6,8,10,13,16,20,25,30,36,44,52,62],step:.1},tank:{id:`tank`,name:`Deep Trailer`,blurb:`More capacity on every vehicle`,costs:[2,3,4,6,8,10,13,16,20,25,30,36,44,52,62],step:.12},turbo:{id:`turbo`,name:`Turbo Engine`,blurb:`Faster on every vehicle`,costs:[3,4,6,8,11,14,18,23,29,36,44,54],step:.05}},fd=[`market`,`tank`,`turbo`],pd={thresholds:[.3,.65,.93],gems:[0,2,3],cash:[.5,0,1],sectionGems:1},md=[{name:`Melt Shed`,cost:100,x:0,effect:{income:3}},{name:`Block Press`,cost:300,x:8,effect:{sale:.05}},{name:`Crate Stacker`,cost:700,x:-8,effect:{income:6}},{name:`Boiler Stack`,cost:1800,x:0,effect:{income:14}},{name:`Engine Lab`,cost:4500,x:13,effect:{speed:.05}},{name:`Water Tower`,cost:1e4,x:0,effect:{income:35}},{name:`Main Hall`,cost:22e3,x:-8,effect:{capacity:.15}},{name:`Pipe Bridge`,cost:45e3,x:8,effect:{income:80}},{name:`Rail Yard`,cost:9e4,x:-13,effect:{income:150},unlocks:`train`},{name:`Cooling Towers`,cost:18e4,x:0,effect:{income:400}},{name:`Blade Forge`,cost:35e4,x:13,effect:{power:.25}},{name:`Helipad`,cost:7e5,x:8,effect:{income:900},unlocks:`heli`},{name:`Arctic Reactor`,cost:14e5,x:0,effect:{sale:.12,income:1800}},{name:`Silo Row`,cost:3e6,x:-8,effect:{capacity:.15}},{name:`Chimney Row`,cost:6e6,x:8,effect:{income:5e3}},{name:`Rocket Pad`,cost:12e6,x:-13,effect:{income:9e3},unlocks:`rocket`},{name:`Wind Farm`,cost:25e6,x:0,effect:{speed:.05}},{name:`Control Tower`,cost:5e7,x:13,effect:{income:22e3}},{name:`Research Dome`,cost:9e7,x:8,effect:{power:.5}},{name:`Snow Cannon`,cost:17e7,x:0,effect:{income:45e3}},{name:`Robot Line`,cost:3e8,x:-8,effect:{sale:.2}},{name:`Gas Tanks`,cost:5e8,x:8,effect:{income:6e4}},{name:`Refinery`,cost:8e8,x:13,effect:{power:.6}},{name:`Turbine Hall`,cost:12e8,x:0,effect:{income:8e4}},{name:`Giant Crane`,cost:18e8,x:-13,effect:{capacity:.25}},{name:`Ice Vault`,cost:25e8,x:8,effect:{sale:.3}},{name:`Orbital Dish`,cost:3e9,x:13,effect:{power:1}},{name:`Quantum Core`,cost:35e8,x:0,effect:{sale:.6,income:4e4}},{name:`Winter Spire`,cost:4e9,x:-8,effect:{sale:1,power:2,income:5e4}},{name:`Aurora Crown`,cost:5e9,x:8,effect:{capacity:.3,income:6e4}}],hd={heli:{id:`heli`,name:`Cargo Helicopter`,interval:45,firstDelay:6,arriveSeconds:5,loadSeconds:3,leaveSeconds:5,crates:8,minCrates:4,premium:1.1},train:{id:`train`,name:`Freight Train`,interval:80,firstDelay:8,arriveSeconds:8,loadSeconds:6,leaveSeconds:8,crates:0,minCrates:8,premium:1.2},rocket:{id:`rocket`,name:`Rocket`,interval:240,firstDelay:60,arriveSeconds:0,loadSeconds:10,leaveSeconds:8,crates:0,minCrates:1,premium:2}},gd=[`heli`,`train`,`rocket`],_d={crateSeconds:3,warehouseSeconds:120,truckCrates:4,truckCycleSeconds:16,rarityPay:{common:1,uncommon:1.1,rare:1.5,veryRare:3},overflowPerCrate:.05,rocketShare:.2,trainCrates:24},vd={basic:{id:`basic`,name:`Basic Plow`,blurb:`Small and nimble`,cost:0,requiresLevel:0,bladeWidth:1.7,power:1,speed:5.6,capacity:280,bladeOffset:1.35,radius:.9,spray:1},heavy:{id:`heavy`,name:`Heavy Plow`,blurb:`Bigger blade, stronger engine`,cost:450,requiresLevel:0,bladeWidth:2.5,power:1.8,speed:5.4,capacity:450,bladeOffset:1.7,radius:1.1,spray:1.1},blower:{id:`blower`,name:`Snow Blower`,blurb:`Auger drum and a huge plume`,cost:3500,requiresLevel:1,bladeWidth:3.2,power:3,speed:6.3,capacity:700,bladeOffset:1.75,radius:1.15,spray:1.8},industrial:{id:`industrial`,name:`Industrial Clearer`,blurb:`Tracked and built for ice`,cost:15e3,requiresLevel:2,bladeWidth:4.4,power:5.5,speed:6,capacity:1100,bladeOffset:2.05,radius:1.35,spray:1.3},destroyer:{id:`destroyer`,name:`Arctic Destroyer`,blurb:`Hovers on glowing pods`,cost:6e4,requiresLevel:3,bladeWidth:6,power:10,speed:7.4,capacity:1800,bladeOffset:2.35,radius:1.5,spray:2},titan:{id:`titan`,name:`Polar Titan`,blurb:`A rolling fortress on six tracks`,cost:25e5,requiresLevel:7,bladeWidth:7,power:40,speed:7.6,capacity:3e3,bladeOffset:2.7,radius:1.7,spray:1.6},mech:{id:`mech`,name:`Frost Mech`,blurb:`It walks. It is enormous.`,cost:25e6,requiresLevel:11,bladeWidth:8,power:130,speed:7.8,capacity:4800,bladeOffset:2.9,radius:1.8,spray:2},phantom:{id:`phantom`,name:`Plasma Phantom`,blurb:`Melts its way through anything`,cost:1e9,requiresLevel:15,bladeWidth:9,power:420,speed:8.4,capacity:7500,bladeOffset:3,radius:1.8,spray:2.4},omega:{id:`omega`,name:`World Eater`,blurb:`The last winter fears this machine`,cost:5e9,requiresLevel:19,bladeWidth:10.5,power:1400,speed:8.8,capacity:12e3,bladeOffset:3.4,radius:2.1,spray:3}},yd=[`basic`,`heavy`,`blower`,`industrial`,`destroyer`,`titan`,`mech`,`phantom`,`omega`],bd={acceleration:20,deceleration:26,turnRate:7.5,deadZone:.08},xd=[{id:`snowy-field`,name:`Snowy Field`,width:40,cellSize:.2,valueMultiplier:1,treeDensity:.7,sections:[{type:`light`,depth:20,clearBonus:40},{type:`deep`,depth:18,clearBonus:150}],palette:{groundA:7327851,groundB:6275683,island:13230322,islandSide:8361133,lake:10476786,fog:13363704,skyTop:6731756,skyBottom:14676988,hemiSky:15398655,hemiGround:11126758,sun:16774108,tree:3116907,mountain:9086664}},{id:`winter-forest`,name:`Winter Forest`,width:46,cellSize:.22,valueMultiplier:1.4,treeDensity:1.5,hardness:1.6,sections:[{type:`deep`,depth:22,clearBonus:250},{type:`packed`,depth:22,clearBonus:700}],palette:{groundA:9357146,groundB:8042066,island:12902370,islandSide:7045007,lake:8244192,fog:12575466,skyTop:5154518,skyBottom:13495025,hemiSky:14742772,hemiGround:10273481,sun:16773074,tree:2062938,mountain:7312040}},{id:`frozen-valley`,name:`Frozen Valley`,width:52,cellSize:.24,valueMultiplier:1.7,treeDensity:1,hardness:1.6,sections:[{type:`packed`,depth:26,clearBonus:1200},{type:`icy`,depth:20,clearBonus:3e3}],palette:{groundA:14725242,groundB:13737836,island:12964079,islandSide:7568294,lake:9418735,fog:13031670,skyTop:6262758,skyBottom:14083323,hemiSky:15002623,hemiGround:10794208,sun:16771536,tree:2916222,mountain:8359876}},{id:`ice-fields`,name:`Ice Fields`,width:58,cellSize:.26,valueMultiplier:2,treeDensity:.4,hardness:2.2,sections:[{type:`icy`,depth:30,clearBonus:5e3},{type:`icy`,depth:22,clearBonus:9e3}],palette:{groundA:4161476,groundB:3569080,island:11854060,islandSide:5081004,lake:6476008,fog:12381428,skyTop:3450585,skyBottom:13234679,hemiSky:14482431,hemiGround:9228256,sun:16774882,tree:2392959,mountain:7320527}},{id:`arctic-zone`,name:`Arctic Zone`,width:64,cellSize:.28,valueMultiplier:2.2,treeDensity:.25,hardness:1.4,sections:[{type:`icy`,depth:20,clearBonus:1e4},{type:`arctic`,depth:25,clearBonus:2e4},{type:`arctic`,depth:25,clearBonus:4e4}],palette:{groundA:4935582,groundB:4409231,island:13223408,islandSide:6183580,lake:9344746,fog:13815799,skyTop:6120150,skyBottom:14736635,hemiSky:15328511,hemiGround:10920676,sun:16773350,tree:4939680,mountain:8815311}},{id:`glacier-pass`,name:`Glacier Pass`,width:70,cellSize:.3,valueMultiplier:2.4,treeDensity:.3,hardness:1.7,sections:[{type:`arctic`,depth:34,clearBonus:15e3},{type:`permafrost`,depth:36,clearBonus:25e3}],palette:{groundA:3116938,groundB:2588025,island:12576994,islandSide:4161413,lake:6279364,fog:12579046,skyTop:3123120,skyBottom:13497838,hemiSky:14483448,hemiGround:9426635,sun:16774882,tree:2064247,mountain:6269096}},{id:`aurora-basin`,name:`Aurora Basin`,width:76,cellSize:.32,valueMultiplier:2.6,treeDensity:.3,hardness:1.9,sections:[{type:`permafrost`,depth:40,clearBonus:35e3},{type:`starfrost`,depth:36,clearBonus:5e4}],palette:{groundA:8011678,groundB:7091854,island:14207220,islandSide:6967198,lake:8364272,fog:14209274,skyTop:5918672,skyBottom:15255796,hemiSky:15524095,hemiGround:11836648,sun:16771828,tree:4157342,mountain:9402576}},{id:`frozen-summit`,name:`Frozen Summit`,width:82,cellSize:.34,valueMultiplier:2.8,treeDensity:.2,hardness:3,sections:[{type:`starfrost`,depth:42,clearBonus:7e4},{type:`starfrost`,depth:42,clearBonus:12e4}],palette:{groundA:13066058,groundB:12080192,island:16309456,islandSide:10116959,lake:15771792,fog:16507092,skyTop:15761263,skyBottom:16770760,hemiSky:16773348,hemiGround:15250592,sun:16773328,tree:5209967,mountain:12881807}}],Sd=1.2,Cd=25e3,wd=1.72,Td=1.5,Ed=2.8,Dd=88,Od=6;function kd(e,t,n){return n.map(([n,r,i])=>({x:n*e/2,z:-r*t,r:i*e}))}function Ad(e,t){let{name:n,types:r,colors:i,landmark:a,spots:o,scenery:s,ambientColor:c,ambientDrift:l}=t,u=Dd+e*Od,[d,f,p,m,h,g]=i,_=Ed*Sd**+(e+1),v=Math.round(u/r.length),y=(e,t)=>{let n=[,,,].fill(0).map((n,r)=>Math.round((e>>16-r*8&255)*t));return n[0]<<16|n[1]<<8|n[2]};return{id:n.toLowerCase().replace(/[^a-z]+/g,`-`),name:n,width:u,cellSize:Math.max(.36,u/280),landmark:a,scenery:s,ambientColor:c,ambientDrift:l,obstacles:kd(u,v*r.length,o),valueMultiplier:_,treeDensity:.25,sections:r.map((t,n)=>({type:t,depth:v,durability:Cd*wd**+e*Td**+n,clearBonus:Math.round(u*v*ad[t].density*sd.basePrice*ad[t].value*_*.04)})),palette:{groundA:d,groundB:y(d,.88),island:f,islandSide:y(f,.5),lake:p,fog:y(m,1),skyTop:m,skyBottom:f,hemiSky:15922431,hemiGround:y(f,.8),sun:16773856,tree:h,mountain:g}}}var jd=[{name:`Shatter Coast`,types:[`starfrost`,`emberfrost`],colors:[4157342,13690100,7320808,11064564,3108735,7311284],landmark:`iceberg`,spots:[[.1,.5,.12]],scenery:`icebergs`,ambientColor:16777215,ambientDrift:1},{name:`Ember Ridge`,types:[`emberfrost`,`emberfrost`],colors:[8008740,16045248,15241071,16040096,8015679,11038559],landmark:`volcano`,spots:[[-.05,.55,.16]],scenery:`lavaRocks`,ambientColor:16752714,ambientDrift:-.7},{name:`Sapphire Shelf`,types:[`emberfrost`,`voidsnow`],colors:[2379919,12638452,5214184,10274036,2384015,5535924],landmark:`crystals`,spots:[[-.35,.45,.09],[.4,.62,.11]],scenery:`crystals`,ambientColor:12114175,ambientDrift:.6},{name:`Midnight Tundra`,types:[`voidsnow`,`voidsnow`],colors:[3682415,13419760,7301320,12103916,4149135,7301288],landmark:`erratics`,spots:[[-.5,.3,.05],[-.12,.55,.07],[.35,.38,.04],[.55,.7,.06],[-.42,.78,.035]],scenery:`erraticStones`,ambientColor:14209279,ambientDrift:.8},{name:`Thunder Plateau`,types:[`voidsnow`,`crystal`],colors:[4868728,13949160,8359880,12107996,4153199,7897244],landmark:`burntTree`,spots:[[-.42,.4,.04],[.4,.46,.05],[.02,.72,.06]],scenery:`burntTrees`,ambientColor:13164799,ambientDrift:2.2},{name:`Crimson Drift`,types:[`crystal`,`crystal`],colors:[9383743,16043216,15237007,16037052,7290703,11034479],landmark:`hoodoos`,spots:[[.15,.5,.08]],scenery:`redRocks`,ambientColor:16758980,ambientDrift:1.3},{name:`Phantom Glacier`,types:[`crystal`,`plasma`],colors:[3112847,12906732,6280404,11070696,3112824,6269096],landmark:`seracs`,spots:[[-.55,.3,.04],[-.2,.62,.055],[.25,.38,.045],[.6,.65,.05],[0,.85,.035]],scenery:`iceSpires`,ambientColor:13629684,ambientDrift:.5},{name:`Solar Steppe`,types:[`plasma`,`plasma`],colors:[11833135,16313536,15783023,16311456,8359743,12888159],landmark:`butte`,spots:[[0,.52,.09]],scenery:`dryGrass`,ambientColor:16773296,ambientDrift:-.3},{name:`Obsidian Flats`,types:[`plasma`,`omega`],colors:[3817295,14212324,7898268,12634328,4149087,6844543],landmark:`basalt`,spots:[[-.5,.35,.045],[.5,.35,.04],[-.25,.7,.05],[.3,.72,.035]],scenery:`basaltStubs`,ambientColor:13154559,ambientDrift:.7},{name:`Nebula Fields`,types:[`omega`,`omega`],colors:[7286671,15518968,12877804,14726388,6242191,9726132],landmark:`fungi`,spots:[[-.3,.42,.06],[.35,.66,.08]],scenery:`smallFungi`,ambientColor:16761076,ambientDrift:-.4},{name:`Meteor Basin`,types:[`omega`,`omega`],colors:[9391908,16047296,15247471,16043168,7298879,11830367],landmark:`meteor`,spots:[[.05,.52,.15]],scenery:`craterRocks`,ambientColor:16756832,ambientDrift:2.8},{name:`Titan's Rest`,types:[`omega`,`omega`],colors:[5205839,14478552,9421980,13165772,4157263,8363140],landmark:`mossBoulder`,spots:[[0,.56,.1]],scenery:`mossyRocks`,ambientColor:14742752,ambientDrift:.6},{name:`Eclipse Expanse`,types:[`omega`,`omega`],colors:[3092303,13158628,6842536,11579612,4145007,6250383],landmark:`rockArch`,spots:[[0,.55,.09]],scenery:`darkRocks`,ambientColor:16769184,ambientDrift:.4},{name:`Singularity Ice`,types:[`omega`,`omega`,`omega`],colors:[2056079,12643576,5227760,10544376,3108751,5215412],landmark:`sinkhole`,spots:[[0,.52,.11]],scenery:`iceShards`,ambientColor:10547455,ambientDrift:-1.1},{name:`The Last Winter`,types:[`omega`,`omega`,`omega`],colors:[11830319,16774352,16308344,16773304,9404223,13939823],landmark:`goldenTree`,spots:[[0,.55,.07]],scenery:`goldPines`,ambientColor:16771226,ambientDrift:.9}],Md=[{landmark:`loneOak`,spots:[[-.5,.5,.085]],scenery:`youngBirch`,ambientColor:16777215,ambientDrift:1},{landmark:`ancientPine`,spots:[[.32,.55,.085]],scenery:`tallPines`,ambientColor:16777215,ambientDrift:.6},{landmark:`frozenFalls`,spots:[[-.25,.55,.1]],scenery:`boulders`,ambientColor:15266047,ambientDrift:1.1},{landmark:`iceFloes`,spots:[[-.42,.4,.075],[.38,.66,.09]],scenery:`iceChunks`,ambientColor:12579583,ambientDrift:1.6},{landmark:`tor`,spots:[[.18,.5,.1]],scenery:`lichenRocks`,ambientColor:15788799,ambientDrift:2},{landmark:`iceArch`,spots:[[-.12,.55,.12]],scenery:`seracStubs`,ambientColor:12648432,ambientDrift:.8},{landmark:`hotSpring`,spots:[[-.2,.45,.085],[.3,.68,.06]],scenery:`frostShrubs`,ambientColor:11599837,ambientDrift:-.35},{landmark:`crag`,spots:[[.1,.55,.1]],scenery:`crags`,ambientColor:16771288,ambientDrift:3}],Nd=[...xd.map((e,t)=>{let n=Md[t],r=e.sections.reduce((e,t)=>e+t.depth,0);return{...e,landmark:n.landmark,scenery:n.scenery,ambientColor:n.ambientColor,ambientDrift:n.ambientDrift,obstacles:kd(e.width,r,n.spots)}}),...jd.map((e,t)=>Ad(t,e))],Pd={chargeSeconds:45,seconds:9,power:3,value:2,speed:1.25},Fd=.25,Id={areaPerFind:80,edgeMargin:1.6,revealAt:.2,chestShare:.008,maxFinds:220,goldenShare:.1,gemFinds:6,gemFindsPerField:1.7,cars:2,kinds:{chest:{name:`Cash Chest`,cashMultiplier:1,gems:0},gem:{name:`Gem`,cashMultiplier:0,gems:1},golden:{name:`Golden Block`,cashMultiplier:5,gems:0},car:{name:`Frozen Car`,cashMultiplier:12,gems:1}}},Ld={first:350,growth:1.22,saleBonus:.01,cashShare:.8,minCash:10,gemEvery:3,gems:1,bigGemEvery:5,bigGems:2},Rd={powerMultiplier:2,powerSeconds:60,storageMultiplier:1.5,storageSeconds:90,bonusCashFraction:.75,minBonusCash:25,bonusCooldownSeconds:120,doubleMinSale:20,doubleOfferSeconds:8},zd={bridgeLength:6,bridgeWidth:9,baseWidth:36,baseDepth:18,factoryDepth:46,factoryLane:5,islandMargin:8},Bd={yawDeg:0,pitchDeg:50,fov:38,distance:23,followStiffness:6,lookAhead:1.6,zoomPerBlade:.9};function Vd(){return{money:sd.startingMoney,gems:0,perks:{market:0,tank:0,turbo:0},factoryLevel:0,rank:0,savedAt:0,cargoQuantity:0,cargoValue:0,pendingIncome:0,rocketStock:0,upgrades:{width:0,power:0,speed:0,capacity:0,value:0,vault:0,assembly:0,warehouse:0,dock:0,train:0,rocket:0},ownedVehicles:[`basic`],vehicle:`basic`,levelIndex:0,maxLevel:0,levels:{},tutorialStep:0,settings:{sound:!0,quality:`auto`},stats:{totalEarned:0,totalSnow:0,playSeconds:0,totalGems:0}}}function Hd(e){"@babel/helpers - typeof";return Hd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Hd(e)}function Ud(e,t){if(Hd(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Hd(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Wd(e){var t=Ud(e,`string`);return Hd(t)==`symbol`?t:t+``}function X(e,t,n){return(t=Wd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gd=class{constructor(){X(this,`context`,null),X(this,`master`,null),X(this,`engineGain`,null),X(this,`engineOsc`,null),X(this,`engineFilter`,null),X(this,`crunchGain`,null),X(this,`crunchFilter`,null),X(this,`noise`,null),X(this,`lastLand`,0),X(this,`userEnabled`,!0),X(this,`platformEnabled`,!0),X(this,`suspendedBy`,new Set);let e=()=>{this.ensureContext(),this.context&&this.context.state===`running`&&(window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,e))};window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,e)}ensureContext(){if(!this.context){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;try{this.context=new e}catch{return}this.build(this.context),this.applyMute()}this.context.state===`suspended`&&this.isAudible()&&this.context.resume().catch(()=>void 0)}build(e){this.master=e.createGain(),this.master.gain.value=.7;let t=e.createDynamicsCompressor();this.master.connect(t),t.connect(e.destination);let n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.engineOsc=e.createOscillator(),this.engineOsc.type=`sawtooth`,this.engineOsc.frequency.value=55,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type=`lowpass`,this.engineFilter.frequency.value=240,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOsc.start();let i=e.createBufferSource();i.buffer=this.noise,i.loop=!0,this.crunchFilter=e.createBiquadFilter(),this.crunchFilter.type=`bandpass`,this.crunchFilter.frequency.value=1500,this.crunchFilter.Q.value=.7,this.crunchGain=e.createGain(),this.crunchGain.gain.value=0,i.connect(this.crunchFilter),this.crunchFilter.connect(this.crunchGain),this.crunchGain.connect(this.master),i.start()}isAudible(){return this.userEnabled&&this.platformEnabled&&this.suspendedBy.size===0}applyMute(){this.context&&(this.isAudible()?this.context.resume().catch(()=>void 0):this.context.suspend().catch(()=>void 0))}setUserEnabled(e){this.userEnabled=e,this.applyMute()}setPlatformEnabled(e){this.platformEnabled=e,this.applyMute()}suspend(e){this.suspendedBy.add(e),this.applyMute()}resume(e){this.suspendedBy.delete(e),this.applyMute()}updateLoops(e,t,n){let r=this.context;if(!r||!this.engineGain||!this.engineOsc||!this.engineFilter||!this.crunchGain||!this.crunchFilter)return;let i=r.currentTime;this.engineOsc.frequency.setTargetAtTime(46+e*44+t*12-n*8,i,.1),this.engineFilter.frequency.setTargetAtTime(170+e*330,i,.1),this.engineGain.gain.setTargetAtTime(.035+e*.05,i,.12),this.crunchGain.gain.setTargetAtTime(t*.085,i,.05),this.crunchFilter.frequency.setTargetAtTime(1500-n*800+e*500,i,.08)}tone(e,t,n,r,i=`triangle`,a){let o=this.context;if(!o||!this.master||!this.isAudible())return;let s=o.createOscillator(),c=o.createGain(),l=o.currentTime+t;s.type=i,s.frequency.setValueAtTime(e,l),a&&s.frequency.exponentialRampToValueAtTime(a,l+n),c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(r,l+.012),c.gain.exponentialRampToValueAtTime(1e-4,l+n),s.connect(c),c.connect(this.master),s.start(l),s.stop(l+n+.02)}whoosh(e,t,n,r,i){let a=this.context;if(!a||!this.master||!this.noise||!this.isAudible())return;let o=a.createBufferSource();o.buffer=this.noise;let s=a.createBiquadFilter();s.type=`bandpass`;let c=a.createGain(),l=a.currentTime+e;s.frequency.setValueAtTime(r,l),s.frequency.exponentialRampToValueAtTime(i,l+t),c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(n,l+t*.3),c.gain.exponentialRampToValueAtTime(1e-4,l+t),o.connect(s),s.connect(c),c.connect(this.master),o.start(l,Math.random()),o.stop(l+t+.02)}crunchGrain(e,t){let n=this.context;if(!n||!this.master||!this.noise||!this.isAudible())return;let r=n.createBufferSource();r.buffer=this.noise;let i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=(2300-e*1500)*(.7+Math.random()*.8),i.Q.value=1.2+Math.random()*2;let a=n.createGain(),o=n.currentTime,s=.03+Math.random()*.05;a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.11+Math.random()*.1,o+.004),a.gain.exponentialRampToValueAtTime(1e-4,o+s),r.connect(i),i.connect(a),a.connect(this.master),r.start(o,Math.random()*1.8,s+.01),t>1&&Math.random()<.12&&this.tone(2600+Math.random()*1800,0,.09,.022,`sine`)}blockLand(e){let t=this.context;if(!t||t.currentTime-this.lastLand<.055)return;this.lastLand=t.currentTime;let n=[0,2,4,7,9],r=Math.floor(e*14),i=262*2**((n[r%5]+12*Math.floor(r/5))/12);this.tone(120,0,.08,.13,`sine`,70),this.tone(i,0,.12,.05,`triangle`)}coinTick(e){this.tone(1046*1.06**Math.min(e,18),0,.09,.05,`triangle`)}press(){this.tone(120,0,.14,.12,`square`,48),this.whoosh(0,.12,.08,1800,500)}crateLoaded(e){this.tone(150+Math.min(e,10)*12,0,.09,.08,`triangle`,90)}deliveryHorn(e){e===`common`||e===`uncommon`?(this.tone(330,0,.16,.05,`sawtooth`),this.tone(415,.02,.14,.04,`sawtooth`)):e===`rare`?[523,659,784].forEach((e,t)=>this.tone(e,t*.09,.26,.11,`triangle`)):([392,523,659,784,1047,1319].forEach((e,t)=>this.tone(e,t*.08,.4,.14,`triangle`)),this.whoosh(0,.8,.12,700,4500))}treasure(e){e===`chest`?[784,1047,1319].forEach((e,t)=>this.tone(e,t*.06,.22,.14,`triangle`)):e===`gem`?[1568,1976,2349,3136].forEach((e,t)=>this.tone(e,t*.07,.3,.09,`sine`)):e===`golden`?([659,784,988,1319,1568,1976].forEach((e,t)=>this.tone(e,t*.06,.34,.14,`triangle`)),this.whoosh(0,.6,.1,800,4e3)):(this.whoosh(0,.25,.22,3e3,700),[392,523,659,784,1047,1319,1568].forEach((e,t)=>this.tone(e,.16+t*.09,.42,.15,`triangle`)))}frenzy(){[220,277,330,440,554,660,880].forEach((e,t)=>this.tone(e,t*.05,.3,.13,`sawtooth`)),this.whoosh(0,.7,.24,300,7e3)}whump(e){this.tone(95-e*35,0,.16,.2+e*.08,`sine`,42),this.whoosh(0,.2,.2,1500-e*700,280)}streakTick(e){let t=[0,2,4,7,9],n=Math.min(e,24),r=t[n%5]+12*Math.floor(n/5);this.tone(330*2**(r/12),0,.14,.055,`sine`)}percent(e){[0,4,7,12].forEach((t,n)=>this.tone(392*2**((t+e)/12),n*.06,.28,.12,`triangle`))}rankUp(){[523,659,784,1047].forEach((e,t)=>{this.tone(e,t*.1,.45,.15,`triangle`),this.tone(e*2,t*.1,.25,.05,`sine`)}),this.tone(1319,.42,.7,.16,`triangle`),this.whoosh(0,.8,.12,500,5e3)}click(){this.tone(720,0,.07,.12,`triangle`,980)}denied(){this.tone(190,0,.14,.14,`square`,130)}sell(e){let t=Math.min(6,2+Math.floor(Math.log10(Math.max(1,e))*1.5));for(let e=0;e<t;e++)this.tone(1046*1.122**(e*2),e*.055,.2,.15,`triangle`),this.tone(2093*1.122**(e*2),e*.055,.09,.05,`sine`)}upgrade(){[523,659,784,1047].forEach((e,t)=>this.tone(e,t*.07,.24,.16,`triangle`)),this.whoosh(0,.4,.12,400,3e3)}unlock(){[392,523,659,784,1047,1319].forEach((e,t)=>this.tone(e,t*.09,.4,.15,`triangle`)),this.whoosh(0,.9,.16,300,5e3)}full(){this.tone(660,0,.12,.13,`square`),this.tone(660,.16,.16,.13,`square`)}cleared(){[659,784,988,1319].forEach((e,t)=>this.tone(e,t*.1,.32,.14,`triangle`))}},Kd={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]},qd=58,Jd=.16,Yd=class{constructor(e,t,n){X(this,`moveX`,0),X(this,`moveZ`,0),X(this,`touchUsed`,!1),X(this,`onActivity`,null),X(this,`keys`,new Set),X(this,`pointerId`,null),X(this,`originX`,0),X(this,`originY`,0),X(this,`stickX`,0),X(this,`stickY`,0),X(this,`base`,void 0),X(this,`knob`,void 0),X(this,`cos`,void 0),X(this,`sin`,void 0),this.cos=Math.cos(n),this.sin=Math.sin(n),this.base=document.createElement(`div`),this.base.className=`joystick`,this.knob=document.createElement(`div`),this.knob.className=`joystick-knob`,this.base.appendChild(this.knob),t.appendChild(this.base),window.addEventListener(`keydown`,e=>{Kd[e.code]&&(this.keys.add(e.code),e.preventDefault())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.reset()),e.addEventListener(`pointerdown`,t=>{if(this.pointerId===null&&(t.pointerType!==`mouse`||t.button===0)){this.pointerId=t.pointerId,this.touchUsed=this.touchUsed||t.pointerType!==`mouse`;try{e.setPointerCapture(t.pointerId)}catch{}this.originX=t.clientX,this.originY=t.clientY,this.stickX=0,this.stickY=0,this.showStick(!0),this.positionStick(),t.preventDefault()}}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==this.pointerId)return;let t=e.clientX-this.originX,n=e.clientY-this.originY,r=Math.hypot(t,n);if(r>qd){let i=r-qd;this.originX+=t/r*i,this.originY+=n/r*i,t=e.clientX-this.originX,n=e.clientY-this.originY}this.stickX=t/qd,this.stickY=n/qd,this.positionStick()});let r=e=>{e.pointerId===this.pointerId&&(this.pointerId=null,this.stickX=0,this.stickY=0,this.showStick(!1))};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r),e.addEventListener(`contextmenu`,e=>e.preventDefault())}reset(){this.keys.clear(),this.pointerId=null,this.stickX=0,this.stickY=0,this.showStick(!1)}showStick(e){this.base.style.opacity=e?`1`:`0`}positionStick(){this.base.style.transform=`translate(${this.originX}px, ${this.originY}px)`,this.knob.style.transform=`translate(${this.stickX*qd}px, ${this.stickY*qd}px)`}poll(){let e=0,t=0;for(let n of this.keys){let r=Kd[n];e+=r[0],t+=r[1]}if(e!==0||t!==0){let n=Math.hypot(e,t);this.moveX=e/n,this.moveZ=t/n,this.onActivity?.();return}let n=Math.hypot(this.stickX,this.stickY);if(n<.12){this.moveX=0,this.moveZ=0;return}let r=this.stickX*this.cos+this.stickY*this.sin,i=-this.stickX*this.sin+this.stickY*this.cos,a=Math.atan2(i,r),o=Math.round(a/(Math.PI/2))*(Math.PI/2);Math.abs(a-o)<Jd&&(r=Math.cos(o)*n,i=Math.sin(o)*n),this.moveX=r,this.moveZ=i,this.onActivity?.()}},Xd=2.1,Zd=16,Qd=It.degToRad(62),$d=1.34,ef=.92,tf=class{constructor(){X(this,`camera`,void 0),X(this,`focusX`,0),X(this,`focusZ`,0),X(this,`lookX`,0),X(this,`lookZ`,0),X(this,`distance`,Bd.distance),X(this,`kick`,0),X(this,`intro`,1),X(this,`panelX`,0),X(this,`strain`,0),X(this,`inLobby`,!1),X(this,`lobbyBlend`,0),X(this,`lobbyX`,0),X(this,`lobbyZ`,0),X(this,`lobbyWidth`,40),X(this,`lobbyDepth`,40),X(this,`shakeTime`,0),X(this,`panelZ`,0),X(this,`panelTargetX`,0),X(this,`panelTargetZ`,0),X(this,`viewX`,0),X(this,`viewZ`,0),X(this,`yaw`,It.degToRad(Bd.yawDeg)),X(this,`pitch`,It.degToRad(Bd.pitchDeg)),this.camera=new Es(Bd.fov,1,1,420)}setAspect(e){!Number.isFinite(e)||e<=0||(this.camera.aspect=e,this.camera.updateProjectionMatrix())}snap(e,t){this.focusX=e,this.focusZ=t,this.lookX=0,this.lookZ=0}playIntro(){this.intro=0}punch(e=1){this.kick=Math.max(this.kick,e)}setLobby(e,t,n,r,i){this.lobbyWidth=r,this.lobbyDepth=i,this.inLobby=e,this.lobbyX=t,this.lobbyZ=n}setStrain(e){this.strain=e}setPanelOpen(e){let t=this.camera.aspect<1||window.innerWidth<=760;this.panelTargetX=e&&!t?7:0,this.panelTargetZ=e&&t?8:0}update(e,t,n,r,i,a,o){let s=1-Math.exp(-5*e);this.panelX+=(this.panelTargetX-this.panelX)*s,this.panelZ+=(this.panelTargetZ-this.panelZ)*s,this.lobbyBlend+=(+!!this.inLobby-this.lobbyBlend)*(1-Math.exp(-2.6*e));let c=this.lobbyBlend*ef,l=1-Math.exp(-Bd.followStiffness*e);this.focusX+=(t+(this.lobbyX-t)*c+this.panelX-this.focusX)*l,this.focusZ+=(n+(this.lobbyZ-n)*c+this.panelZ-this.focusZ)*l;let u=r*Bd.lookAhead*Math.min(1,a/5),d=i*Bd.lookAhead*Math.min(1,a/5),f=1-Math.exp(-2.4*e);this.lookX+=(u-this.lookX)*f,this.lookZ+=(d-this.lookZ)*f;let p=Math.max(1,(1.3/this.camera.aspect)**.62),m=Math.max(0,o-vd.basic.bladeWidth)*Bd.zoomPerBlade,h=(Bd.distance+m)*p,g=Math.tan(It.degToRad(Bd.fov/2)),_=this.lobbyDepth*Math.sin(Qd)/(2*g),v=this.lobbyWidth/(2*g*this.camera.aspect),y=h+(Math.max(_,v)*$d-h)*this.lobbyBlend;this.distance+=(y-this.distance)*(1-Math.exp(-3.4*e)),this.kick*=Math.exp(-5.5*e),this.intro<1&&(this.intro=Math.min(1,this.intro+e/Xd));let b=1-(1-this.intro)**3,x=It.lerp(this.pitch,Qd,this.lobbyBlend),S=It.lerp(It.degToRad(Zd),x,b),C=this.distance*It.lerp(1.5,1,b)*(1-this.kick*.035),w=this.focusX+this.lookX,T=this.focusZ+this.lookZ,E=It.lerp(10,1.8,b)*(1-this.lobbyBlend),D=w-Math.sin(this.yaw)*E,O=T-Math.cos(this.yaw)*E;this.viewX=D,this.viewZ=O;let k=Math.cos(S)*C;this.camera.position.set(D+Math.sin(this.yaw)*k,Math.sin(S)*C,O+Math.cos(this.yaw)*k),this.camera.lookAt(D,b<1?It.lerp(9,0,b):0,O),this.shakeTime+=e,this.camera.position.x+=Math.sin(this.shakeTime*41)*this.strain*.028,this.camera.position.y+=Math.sin(this.shakeTime*53)*this.strain*.022}};function nf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Rr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=rf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=rf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function rf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var af=new W;function of(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;af.copy(t),af[r]=0,af.normalize();let l=.5*o/(o+s),u=1-af.angleTo(e)/c;return Math.sign(af[n])===1?u*l:s/(o+s)+l+l*(1-u)}var sf=class e extends ia{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new W,c=new W,l=new W(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new W,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=of(m,c,`z`,`y`,i,n),f[a+1]=1-of(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-of(m,c,`z`,`y`,i,n),f[a+1]=1-of(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-of(m,c,`x`,`z`,i,e),f[a+1]=of(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-of(m,c,`x`,`z`,i,e),f[a+1]=1-of(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-of(m,c,`x`,`y`,i,e),f[a+1]=1-of(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=of(m,c,`x`,`y`,i,e),f[a+1]=1-of(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},cf=new Wo({vertexColors:!0,flatShading:!0}),lf=new K,uf=new _n,df=new sn,ff=new Lt,pf=new W,mf=new W,Z=class{constructor(){X(this,`parts`,[])}add(e,t,n,r,i,a={},o=1,s=1,c=1){let l=e.index?e.toNonIndexed():e;l!==e&&e.dispose(),l.deleteAttribute(`uv`),uf.set(a.rx??0,a.ry??0,a.rz??0),ff.setFromEuler(uf),df.compose(pf.set(n,r,i),ff,mf.set(o,s,c)),l.applyMatrix4(df),lf.setHex(t);let u=l.attributes.position.count,d=new Float32Array(u*3);for(let e=0;e<u;e++)d[e*3]=lf.r,d[e*3+1]=lf.g,d[e*3+2]=lf.b;return l.setAttribute(`color`,new Cr(d,3)),this.parts.push(l),this}box(e,t,n,r,i,a,o,s){return this.add(new ia(e,t,n),o,r,i,a,s)}round(e,t,n,r,i,a,o,s=.08,c){let l=Math.min(s,Math.min(e,t,n)*.49);return this.add(new sf(e,t,n,2,l),o,r,i,a,c)}cylinder(e,t,n,r,i,a,o,s=10,c){return this.add(new aa(e,t,n,s),o,r,i,a,c)}drum(e,t,n,r,i,a,o=10){return this.cylinder(e,e,t,n,r,i,a,o,{rz:Math.PI/2})}cone(e,t,n,r,i,a,o=7,s){return this.add(new oa(e,t,o),a,n,r,i,s)}blob(e,t,n,r,i,a=1,o=1,s=1,c=1){return this.add(new Do(e,c),i,t,n,r,{},a,o,s)}geometry(){let e=nf(this.parts,!1);for(let e of this.parts)e.dispose();return this.parts.length=0,e}build(){return new q(this.geometry(),cf)}};function hf(e){e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;if(n)for(let e of Array.isArray(n)?n:[n]){if(e===cf)continue;let t=e.map;t&&t.dispose(),e.dispose()}})}var gf=new sn,_f=new W,vf=new W,yf=new Lt,bf=new _n,xf=new K,Sf=class e{constructor(t){X(this,`capacity`,void 0),X(this,`mesh`,void 0),X(this,`data`,void 0),X(this,`next`,0),this.capacity=t;let n=new Z;n.blob(1,0,0,0,16777215,1,.8,1,0),this.mesh=new zi(n.geometry(),cf,t),this.mesh.frustumCulled=!1,this.data=new Float32Array(t*e.STRIDE),xf.setHex(16777215);for(let e=0;e<t;e++)this.mesh.setColorAt(e,xf),gf.makeScale(0,0,0),this.mesh.setMatrixAt(e,gf)}emit(t,n,r,i,a,o,s,c,l){let u=this.next;this.next=(this.next+1)%this.capacity;let d=this.data,f=u*e.STRIDE;d[f]=t,d[f+1]=n,d[f+2]=r,d[f+3]=i,d[f+4]=a,d[f+5]=o,d[f+6]=s,d[f+7]=c,d[f+8]=(Math.random()-.5)*16,d[f+9]=(Math.random()-.5)*16,xf.setHex(l),this.mesh.setColorAt(u,xf),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(t){let n=this.data,r=!1;for(let i=0;i<this.capacity;i++){let a=i*e.STRIDE;if(n[a+6]<=0)continue;if(r=!0,n[a+6]-=t,n[a+6]<=0){gf.makeScale(0,0,0),this.mesh.setMatrixAt(i,gf);continue}n[a+4]-=15*t,n[a]+=n[a+3]*t,n[a+1]+=n[a+4]*t,n[a+2]+=n[a+5]*t,n[a+1]<.12&&n[a+4]<0&&(n[a+1]=.12,n[a+4]*=-.32,n[a+3]*=.45,n[a+5]*=.45,n[a+8]*=.4,n[a+9]*=.4);let o=n[a+6],s=n[a+7]*Math.min(1,o*3.5);bf.set(o*n[a+8],0,o*n[a+9]),yf.setFromEuler(bf),gf.compose(_f.set(n[a],n[a+1],n[a+2]),yf,vf.set(s,s,s)),this.mesh.setMatrixAt(i,gf)}r&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.dispose()}};X(Sf,`STRIDE`,10);var Cf=()=>void 0,wf=()=>void 0,Tf=new W,Ef=class{constructor(e){X(this,`mesh`,void 0),X(this,`flights`,[]);let t=new Z;t.round(1,1,1,0,0,0,16777215,.12),this.mesh=new zi(t.geometry(),cf,e),this.mesh.frustumCulled=!1,xf.setHex(16777215);for(let t=0;t<e;t++)this.mesh.setColorAt(t,xf),gf.makeScale(0,0,0),this.mesh.setMatrixAt(t,gf),this.flights.push({active:!1,fromX:0,fromY:0,fromZ:0,time:0,duration:1,arc:0,size:0,tag:0,target:Cf,land:wf,spin:0})}launch(e,t,n,r,i,a,o,s,c,l){let u=this.flights.findIndex(e=>!e.active);if(u<0)return!1;let d=this.flights[u];return d.active=!0,d.fromX=e,d.fromY=t,d.fromZ=n,d.time=0,d.duration=r,d.arc=i,d.size=a,d.tag=s,d.target=c,d.land=l,d.spin=(Math.random()-.5)*12,xf.setHex(o),this.mesh.setColorAt(u,xf),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),!0}update(e){let t=!1;for(let n=0;n<this.flights.length;n++){let r=this.flights[n];if(!r.active)continue;t=!0,r.time+=e;let i=Math.min(1,r.time/r.duration);if(i>=1){r.active=!1,gf.makeScale(0,0,0),this.mesh.setMatrixAt(n,gf),r.land(r.tag);continue}r.target(r.tag,Tf);let a=i*i*(3-2*i);_f.set(r.fromX+(Tf.x-r.fromX)*a,r.fromY+(Tf.y-r.fromY)*a+Math.sin(i*Math.PI)*r.arc,r.fromZ+(Tf.z-r.fromZ)*a),bf.set(i*r.spin,i*r.spin*.7,0),yf.setFromEuler(bf);let o=r.size*(.6+.4*Math.sin(Math.min(1,i*3)*Math.PI*.5));gf.compose(_f,yf,vf.set(o,o,o)),this.mesh.setMatrixAt(n,gf)}t&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.dispose()}},Df=`"Fredoka Variable", "Arial Rounded MT Bold", "Trebuchet MS", system-ui, sans-serif`;function Of(e){let t=new ea(e);return t.colorSpace=Ge,t.anisotropy=4,t}function kf(e,t,n,r,i,a){e.beginPath(),e.roundRect(t,n,r,i,a)}function Af(e,t,n,r){e.save(),e.fillStyle=r,e.strokeStyle=r,e.lineCap=`round`,e.lineJoin=`round`;let i=n;t===`coin`?(e.beginPath(),e.arc(0,0,i*.5,0,Math.PI*2),e.lineWidth=i*.12,e.stroke(),e.font=`700 ${i*.68}px ${Df}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`$`,0,i*.03)):t===`wrench`?(e.rotate(Math.PI/4),e.lineWidth=i*.22,e.beginPath(),e.moveTo(0,i*.5),e.lineTo(0,-i*.12),e.stroke(),e.lineWidth=i*.16,e.beginPath(),e.arc(0,-i*.28,i*.25,Math.PI*1.25,Math.PI*1.75,!0),e.stroke()):t===`house`?(e.beginPath(),e.moveTo(0,-i*.5),e.lineTo(i*.55,-i*.02),e.lineTo(i*.36,-i*.02),e.lineTo(i*.36,i*.46),e.lineTo(i*.1,i*.46),e.lineTo(i*.1,i*.12),e.lineTo(-i*.1,i*.12),e.lineTo(-i*.1,i*.46),e.lineTo(-i*.36,i*.46),e.lineTo(-i*.36,-i*.02),e.lineTo(-i*.55,-i*.02),e.closePath(),e.fill()):t===`plow`?(e.lineWidth=i*.1,e.fillRect(-i*.16,-i*.34,i*.5,i*.46),e.fillRect(-i*.36,-i*.04,i*.8,i*.2),e.beginPath(),e.arc(-i*.18,i*.28,i*.13,0,Math.PI*2),e.arc(i*.26,i*.28,i*.13,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(-i*.48,-i*.22),e.lineTo(-i*.6,i*.4),e.stroke()):(e.lineWidth=i*.09,e.beginPath(),e.moveTo(-i*.3,i*.5),e.lineTo(-i*.3,-i*.5),e.stroke(),e.beginPath(),e.moveTo(-i*.3,-i*.5),e.lineTo(i*.46,-i*.24),e.lineTo(-i*.3,i*.02),e.closePath(),e.fill()),e.restore()}function jf(e,t,n,r,i,a){let o=document.createElement(`canvas`);o.width=Math.round(e*40),o.height=Math.round(t*40);let s=o.getContext(`2d`),c=o.width,l=o.height;kf(s,8,8,c-16,l-16,34),s.fillStyle=i,s.globalAlpha=.86,s.fill(),s.globalAlpha=1,s.lineWidth=9,s.strokeStyle=`#ffffff`,s.setLineDash([26,16]),kf(s,22,22,c-44,l-44,24),s.stroke(),s.setLineDash([]),s.translate(c/2,l/2),s.rotate(-a);let u=Math.min(l*.27,66);s.font=`700 ${u}px ${Df}`,s.textAlign=`center`,s.textBaseline=`middle`,s.fillStyle=`#ffffff`;let d=u*1.05;return s.save(),s.translate(0,-u*.62),Af(s,r,d,`#ffffff`),s.restore(),s.fillText(n,0,u*.72),Of(o)}var Mf=class{constructor(e){X(this,`sprite`,void 0),X(this,`canvas`,document.createElement(`canvas`)),X(this,`texture`,void 0),X(this,`key`,``),this.canvas.width=384,this.canvas.height=208,this.texture=Of(this.canvas),this.sprite=new li(new Yr({map:this.texture,transparent:!0,depthWrite:!1})),this.sprite.scale.set(e,e*208/384,1),this.sprite.renderOrder=4}draw(e,t,n,r){let i=e+t+n+r;if(i===this.key)return;this.key=i;let a=this.canvas.getContext(`2d`),o=this.canvas.width;a.clearRect(0,0,o,this.canvas.height),kf(a,6,6,o-12,170,30),a.fillStyle=`rgba(19, 49, 82, 0.94)`,a.fill(),a.lineWidth=6,a.strokeStyle=r?`#5fe08f`:`rgba(255,255,255,0.8)`,a.stroke(),a.beginPath(),a.moveTo(o/2-20,174),a.lineTo(o/2,204),a.lineTo(o/2+20,174),a.closePath(),a.fillStyle=`rgba(19, 49, 82, 0.94)`,a.fill(),a.textAlign=`center`,a.textBaseline=`middle`,a.fillStyle=`#ffffff`,a.font=`700 38px ${Df}`,a.fillText(e,o/2,46,o-40),a.fillStyle=r?`#8ff0a8`:`#ffb4a8`,a.font=`700 58px ${Df}`,a.fillText(t,o/2,98,o-40),a.fillStyle=`#bcd3ea`,a.font=`600 28px ${Df}`,a.fillText(n,o/2,146,o-40),this.texture.needsUpdate=!0}dispose(){this.texture.dispose(),this.sprite.material.dispose()}},Nf=`
  attribute float aSize;
  attribute vec4 aColor;
  uniform float uScale;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Pf=`
  varying vec4 vColor;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = dot(c, c) * 4.0;
    if (d > 1.0) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * (1.0 - d * d));
  }
`,Ff=new K,If=class{constructor(e){X(this,`points`,void 0),X(this,`capacity`,void 0),X(this,`alive`,0),X(this,`position`,void 0),X(this,`color`,void 0),X(this,`size`,void 0),X(this,`velocity`,void 0),X(this,`meta`,void 0),X(this,`geometry`,new Rr),X(this,`material`,void 0),this.capacity=e,this.position=new Float32Array(e*3),this.color=new Float32Array(e*4),this.size=new Float32Array(e),this.velocity=new Float32Array(e*3),this.meta=new Float32Array(e*6);let t=(e,t)=>new Cr(e,t).setUsage(Ze);this.geometry.setAttribute(`position`,t(this.position,3)),this.geometry.setAttribute(`aColor`,t(this.color,4)),this.geometry.setAttribute(`aSize`,t(this.size,1)),this.geometry.setDrawRange(0,0),this.material=new Ho({vertexShader:Nf,fragmentShader:Pf,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1}),this.points=new Zi(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5}setViewportHeight(e){this.material.uniforms.uScale.value=e*1.45}emit(e,t,n,r,i,a,o,s,c,l=1,u=9,d=.6){if(this.alive>=this.capacity)return;let f=this.alive++;this.position[f*3]=e,this.position[f*3+1]=t,this.position[f*3+2]=n,this.velocity[f*3]=r,this.velocity[f*3+1]=i,this.velocity[f*3+2]=a,Ff.setHex(c),this.color[f*4]=Ff.r,this.color[f*4+1]=Ff.g,this.color[f*4+2]=Ff.b,this.color[f*4+3]=l,this.size[f]=s;let p=f*6;this.meta[p]=o,this.meta[p+1]=o,this.meta[p+2]=u,this.meta[p+3]=s,this.meta[p+4]=l,this.meta[p+5]=d}update(e){let{position:t,velocity:n,meta:r,color:i,size:a}=this,o=0;for(;o<this.alive;){let s=o*6,c=r[s]-e;if(c<=0||t[o*3+1]<-.2){this.removeAt(o);continue}r[s]=c;let l=c/r[s+1],u=Math.max(0,1-r[s+5]*e);n[o*3]*=u,n[o*3+2]*=u,n[o*3+1]-=r[s+2]*e,t[o*3]+=n[o*3]*e,t[o*3+1]+=n[o*3+1]*e,t[o*3+2]+=n[o*3+2]*e,a[o]=r[s+3]*(.55+.45*l),i[o*4+3]=r[s+4]*Math.min(1,l*2.2),o++}this.geometry.setDrawRange(0,this.alive),this.flag(`position`,3),this.flag(`aColor`,4),this.flag(`aSize`,1)}flag(e,t){let n=this.geometry.getAttribute(e);n.clearUpdateRanges(),n.addUpdateRange(0,this.alive*t),n.needsUpdate=this.alive>0}removeAt(e){let t=--this.alive;if(e===t)return;let{position:n,velocity:r,color:i,size:a,meta:o}=this;for(let i=0;i<3;i++)n[e*3+i]=n[t*3+i],r[e*3+i]=r[t*3+i];for(let n=0;n<4;n++)i[e*4+n]=i[t*4+n];a[e]=a[t];for(let n=0;n<6;n++)o[e*6+n]=o[t*6+n]}get count(){return this.alive}},Lf=`
  attribute float aSeed;
  uniform float uTime;
  uniform float uScale;
  uniform float uIntensity;
  uniform float uDrift;
  uniform vec3 uCenter;
  varying float vAlpha;
  const vec3 BOX = vec3(64.0, 26.0, 64.0);
  void main() {
    vec3 p = position;
    p.y -= uTime * (1.2 + aSeed * 1.4) * uDrift;
    p.x += sin(uTime * 0.6 + aSeed * 40.0) * 1.2 + uTime * 0.35;
    p.z += cos(uTime * 0.5 + aSeed * 30.0) * 0.8;
    vec3 wrapped = mod(p - uCenter + BOX * 0.5, BOX) - BOX * 0.5 + uCenter;
    wrapped.y = mod(p.y, BOX.y);
    vec4 mv = modelViewMatrix * vec4(wrapped, 1.0);
    vAlpha = (0.35 + aSeed * 0.5) * step(aSeed, uIntensity);
    gl_PointSize = (0.1 + aSeed * 0.14) * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Rf=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = dot(c, c) * 4.0;
    if (d > 1.0) discard;
    gl_FragColor = vec4(uColor, vAlpha * (1.0 - d));
  }
`,zf=class{constructor(e){X(this,`points`,void 0),X(this,`material`,void 0),X(this,`target`,.35),X(this,`intensity`,.35),X(this,`burstUntil`,0),X(this,`time`,0);let t=new Float32Array(e*3),n=new Float32Array(e);for(let r=0;r<e;r++)t[r*3]=Math.random()*64,t[r*3+1]=Math.random()*26,t[r*3+2]=Math.random()*64,n[r]=Math.random();let r=new Rr;r.setAttribute(`position`,new Cr(t,3)),r.setAttribute(`aSeed`,new Cr(n,1)),this.material=new Ho({vertexShader:Lf,fragmentShader:Rf,uniforms:{uTime:{value:0},uScale:{value:600},uIntensity:{value:.35},uDrift:{value:1},uColor:{value:new K(16777215)},uCenter:{value:new W}},transparent:!0,depthWrite:!1}),this.points=new Zi(r,this.material),this.points.frustumCulled=!1,this.points.renderOrder=6}setViewportHeight(e){this.material.uniforms.uScale.value=e*1.45}setWeather(e,t){this.material.uniforms.uColor.value.setHex(e),this.material.uniforms.uDrift.value=t}burst(e){this.burstUntil=this.time+e}update(e,t,n){this.time+=e,this.target=this.time<this.burstUntil?1:.35,this.intensity+=(this.target-this.intensity)*Math.min(1,e*2);let r=this.material.uniforms;r.uTime.value=this.time,r.uIntensity.value=this.intensity,r.uCenter.value.set(t,13,n)}},Bf={low:{pixelRatio:1,shadowSize:0,particles:260,ambientSnow:90,snowMeshStep:2,tuftDensity:1.6},medium:{pixelRatio:1.5,shadowSize:1024,particles:560,ambientSnow:180,snowMeshStep:1,tuftDensity:3},high:{pixelRatio:2,shadowSize:2048,particles:1100,ambientSnow:320,snowMeshStep:1,tuftDensity:5}};function Vf(){let e=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=navigator.hardwareConcurrency||4,n=navigator.deviceMemory??8;return t<=2||n<=2?`low`:e||t<=4||n<=4?`medium`:`high`}var Hf=22,Uf=class{constructor(e,t){X(this,`renderer`,void 0),X(this,`scene`,new Wn),X(this,`hemi`,new ms(16777215,11193582,1.75)),X(this,`sun`,new ks(16777215,1.55)),X(this,`quality`,void 0),X(this,`setting`,void 0),X(this,`slowFrames`,0),X(this,`frameWindow`,0),X(this,`framesInWindow`,0),this.setting=t,this.quality=this.resolve(t),this.renderer=new id({antialias:!0,powerPreference:`high-performance`,stencil:!1}),this.renderer.outputColorSpace=Ge,this.renderer.toneMapping=0,this.renderer.shadowMap.type=1,e.appendChild(this.renderer.domElement),this.scene.add(this.hemi),this.sun.position.set(14,26,12),this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03;let n=this.sun.shadow.camera;n.left=-22,n.right=Hf,n.top=Hf,n.bottom=-22,n.near=1,n.far=70,this.scene.add(this.sun),this.scene.add(this.sun.target),this.applyQuality()}resolve(e){let t=e===`auto`?Vf():e;return{tier:t,...Bf[t]}}setQuality(e){this.setting=e,this.quality=this.resolve(e),this.slowFrames=0,this.applyQuality()}applyQuality(){let{renderer:e,quality:t}=this;e.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio));let n=t.shadowSize>0;e.shadowMap.enabled!==n&&(e.shadowMap.enabled=n,this.scene.traverse(e=>{let t=e.material;t&&(t.needsUpdate=!0)})),this.sun.castShadow=n,n&&this.sun.shadow.mapSize.x!==t.shadowSize&&(this.sun.shadow.mapSize.set(t.shadowSize,t.shadowSize),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}setPalette(e){this.hemi.color.setHex(e.hemiSky),this.hemi.groundColor.setHex(e.hemiGround),this.sun.color.setHex(e.sun);let t=new K(e.fog);this.scene.background=t,this.scene.fog=new Un(t,110,300)}followSun(e,t){this.sun.position.set(e+14,26,t+12),this.sun.target.position.set(e,0,t)}monitor(e){if(this.setting!==`auto`||(this.frameWindow+=e,this.framesInWindow++,this.frameWindow<1))return!1;let t=this.framesInWindow/this.frameWindow;if(this.frameWindow=0,this.framesInWindow=0,this.slowFrames=t<40?this.slowFrames+1:Math.max(0,this.slowFrames-1),this.slowFrames<4||this.quality.tier===`low`)return!1;this.slowFrames=0;let n=this.quality.tier===`high`?`medium`:`low`;return this.quality={...this.quality,...Bf[n],tier:n,snowMeshStep:this.quality.snowMeshStep,particles:this.quality.particles,ambientSnow:this.quality.ambientSnow},this.applyQuality(),!0}render(e){this.renderer.render(this.scene,e)}},Wf=1.45,Gf=Wf,Kf=70;function qf(e){return e-Math.floor(e)}function Jf(e,t){return qf(Math.sin(e*127.1+t*311.7)*43758.5453)}function Yf(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Jf(n,r),l=Jf(n+1,r),u=Jf(n,r+1),d=Jf(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function Xf(){let e=new Uint8Array(16384),t=(e,t,n)=>Jf((e%n+n)%n,(t%n+n)%n),n=(e,n,r)=>{let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=c*c*(3-2*c),d=l*l*(3-2*l),f=t(o,s,r),p=t(o+1,s,r),m=t(o,s+1,r),h=t(o+1,s+1,r);return f+(p-f)*u+(m-f)*d+(f-p-m+h)*u*d};for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=n(r,t,8)*.5+n(r,t,16)*.3+n(r,t,48)*.2;e[t*128+r]=Math.round(Math.min(1,i)*255)}let r=new Ai(e,128,128,te,v);return r.wrapS=r.wrapT=l,r.magFilter=h,r.minFilter=_,r.generateMipmaps=!0,r.needsUpdate=!0,r}var Zf=`
  uniform sampler2D uHeight;
  uniform vec2 uTexel;
  uniform float uCell;
  uniform float uMaxH;
  varying vec2 vSnowUv;
  varying vec2 vSnowXZ;
  varying float vSnowH;
  varying vec3 vSnowN;
`,Qf=`
  uniform sampler2D uHeight;
  uniform sampler2D uSection;
  uniform sampler2D uNoise;
  uniform float uMaxH;
  uniform vec3 uSnowTop[4];
  uniform vec3 uSnowShade[4];
  uniform float uSparkle[4];
  uniform vec3 uGroundA;
  uniform vec3 uGroundB;
  uniform vec2 uFieldSize;
  uniform vec2 uTexel;
  varying vec2 vSnowUv;
  varying vec2 vSnowXZ;
  varying float vSnowH;
  varying vec3 vSnowN;
`,$f=`
  {
    int s = int(texture2D(uSection, vSnowUv).r * 255.0 + 0.5);
    vec3 topColor = uSnowTop[s];
    vec3 shadeColor = uSnowShade[s];
    float sparkle = uSparkle[s];

    float n1 = texture2D(uNoise, vSnowXZ * 0.07).r;
    float n2 = texture2D(uNoise, vSnowXZ * 0.31).r;

    // Revealed ground: each pass leaves its own stripe, plus a contact shadow at the snow wall.
    float band = smoothstep(0.25, 0.75, texture2D(uHeight, vSnowUv).g);
    vec3 ground = mix(uGroundA * 0.86, uGroundB * 1.2, band) * (0.94 + 0.12 * n2);
    // The edge of the cut is worked out per pixel, a little unevenly, so it follows the blade and not the grid.
    vec2 edgeUv = vSnowUv + vec2(texture2D(uNoise, vSnowXZ * 0.83).r - 0.5, texture2D(uNoise, vSnowXZ.yx * 0.83 + 0.37).r - 0.5) * uTexel * 1.5;
    vec2 tap = max(vec2(0.42) / uFieldSize, uTexel);
    float nearby = texture2D(uHeight, edgeUv + vec2(tap.x, 0.0)).r
      + texture2D(uHeight, edgeUv - vec2(tap.x, 0.0)).r
      + texture2D(uHeight, edgeUv + vec2(0.0, tap.y)).r
      + texture2D(uHeight, edgeUv - vec2(0.0, tap.y)).r;
    float edgeH = (texture2D(uHeight, edgeUv).r * 0.4 + nearby * 0.15) * uMaxH;
    ground *= 1.0 - 0.34 * clamp(nearby * uMaxH * 0.9, 0.0, 1.0);

    // Snow: bright tops, cool cut walls.
    vec3 snowNormal = normalize(vSnowN);
    float wall = 1.0 - smoothstep(0.55, 0.985, snowNormal.y);
    float dapple = (n1 - 0.5) * 0.7 + (n2 - 0.5) * 0.45;
    vec3 snow = mix(topColor, shadeColor, clamp(wall * 1.05 + max(dapple, -0.04) + 0.1, 0.0, 1.0));

    float glintA = texture2D(uNoise, vSnowXZ * 2.3 + vViewPosition.xy * 0.01).r;
    float glintB = texture2D(uNoise, vSnowXZ * 3.1 - vViewPosition.xy * 0.013).r;
    float glint = smoothstep(0.66, 0.72, glintA * glintB * 1.45) * (1.0 - wall);
    snow += glint * sparkle * 0.55;

    diffuseColor.rgb = mix(ground, snow, smoothstep(0.05, 0.13, edgeH));
  }
`,ep=class{constructor(e,t,n){X(this,`field`,void 0),X(this,`mesh`,void 0),X(this,`heightData`,void 0),X(this,`heightScale`,void 0),X(this,`heightTexture`,void 0),X(this,`sectionTexture`,void 0),X(this,`noiseTexture`,void 0),X(this,`topColors`,[]),X(this,`shadeColors`,[]),X(this,`material`,void 0),X(this,`uploaded`,!1),this.field=e;let{cols:r,rows:i}=e;this.heightScale=new Float32Array(r*i),this.heightData=new Uint8Array(r*i*4);let a=new Uint8Array(r*i);for(let n=0;n<i;n++){let o=e.rowSection[n],s=ad[t.sections[o].type];for(let t=0;t<r;t++){let c=e.originX+(t+.5)*e.cell,l=e.originZ+(n+.5)*e.cell,u=1+(Yf(c*.55,l*.55)-.5)*.34+(Yf(c*1.7,l*1.7)-.5)*.12,d=Math.min(t,r-1-t,n,i-1-n),f=Math.min(1,d/3),p=Math.sqrt(f*(2-f));this.heightScale[n*r+t]=s.height*u*p*255/Gf,a[n*r+t]=o}}this.heightTexture=new Ai(this.heightData,r,i,N,v),this.heightTexture.magFilter=h,this.heightTexture.minFilter=h,this.heightTexture.onUpdate=()=>{this.uploaded=!0},this.sectionTexture=new Ai(a,r,i,te,v),this.sectionTexture.magFilter=f,this.sectionTexture.minFilter=f,this.sectionTexture.needsUpdate=!0,this.noiseTexture=Xf();let o=this.topColors,s=this.shadeColors,c=[];for(let e=0;e<4;e++){let n=ad[t.sections[Math.min(e,t.sections.length-1)].type];o.push(new K(n.topColor)),s.push(new K(n.shadeColor)),c.push(n.sparkle)}let l={uHeight:{value:this.heightTexture},uSection:{value:this.sectionTexture},uNoise:{value:this.noiseTexture},uTexel:{value:new U(n/r,n/i)},uCell:{value:e.cell*n},uMaxH:{value:Gf},uFieldSize:{value:new U(e.width,e.depth)},uSnowTop:{value:o},uSnowShade:{value:s},uSparkle:{value:c},uGroundA:{value:new K(t.palette.groundA)},uGroundB:{value:new K(t.palette.groundB)}};this.material=new Wo({color:16777215}),this.material.onBeforeCompile=e=>{Object.assign(e.uniforms,l),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Zf}`).replace(`#include <beginnormal_vertex>`,`
          float snowL = texture2D(uHeight, uv - vec2(uTexel.x, 0.0)).r * uMaxH;
          float snowR = texture2D(uHeight, uv + vec2(uTexel.x, 0.0)).r * uMaxH;
          float snowD = texture2D(uHeight, uv - vec2(0.0, uTexel.y)).r * uMaxH;
          float snowU = texture2D(uHeight, uv + vec2(0.0, uTexel.y)).r * uMaxH;
          vec3 objectNormal = normalize(vec3(snowL - snowR, 2.0 * uCell, snowD - snowU));
          vSnowN = objectNormal;
        `).replace(`#include <begin_vertex>`,`
          vec3 transformed = vec3(position);
          // A touch of smoothing, so a cut that crosses the grid at an angle does not stair-step.
          vSnowH = texture2D(uHeight, uv).r * uMaxH * 0.4 + (snowL + snowR + snowD + snowU) * 0.15;
          transformed.y += vSnowH;
          vSnowUv = uv;
          vSnowXZ = position.xz;
        `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Qf}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${$f}`)},this.mesh=new q(this.createGrid(n),this.material),this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.writeRect(0,r-1,0,i-1),this.heightTexture.needsUpdate=!0,e.clearDirty()}createGrid(e){let{field:t}=this,n=Math.floor((t.cols-1)/e)+1,r=Math.floor((t.rows-1)/e)+1,i=new Float32Array(n*r*3),a=new Float32Array(n*r*2),o=new Float32Array(n*r*3),s=0;for(let c=0;c<r;c++)for(let r=0;r<n;r++){let n=r*e,l=c*e;i[s*3]=t.originX+(n+.5)*t.cell,i[s*3+2]=t.originZ+(l+.5)*t.cell,o[s*3+1]=1,a[s*2]=(n+.5)/t.cols,a[s*2+1]=(l+.5)/t.rows,s++}let c=new Uint32Array((n-1)*(r-1)*6),l=0;for(let e=0;e<r-1;e++)for(let t=0;t<n-1;t++){let r=e*n+t,i=r+1,a=r+n,o=a+1;c[l++]=r,c[l++]=a,c[l++]=i,c[l++]=i,c[l++]=a,c[l++]=o}let u=new Rr;return u.setAttribute(`position`,new Cr(i,3)),u.setAttribute(`normal`,new Cr(o,3)),u.setAttribute(`uv`,new Cr(a,2)),u.setIndex(new Cr(c,1)),u}writeRect(e,t,n,r){let{heightData:i,heightScale:a}=this,{heights:o,strokes:s,cols:c}=this.field;for(let l=n;l<=r;l++){let n=l*c;for(let r=e;r<=t;r++){let e=n+r;i[e*4]=o[e]*a[e],i[e*4+1]=s[e]}}}sync(){let{field:e,heightTexture:t}=this;if(e.dirtyMaxI<0)return;let n=Math.max(0,e.dirtyMinI),r=Math.min(e.cols-1,e.dirtyMaxI),i=Math.max(0,e.dirtyMinJ),a=Math.min(e.rows-1,e.dirtyMaxJ);this.writeRect(n,r,i,a),e.clearDirty();let o=a-i+1;if(t.clearUpdateRanges(),this.uploaded&&o<Kf){let o=(r-n+1)*4;for(let r=i;r<=a;r++)t.addUpdateRange((r*e.cols+n)*4,o)}t.needsUpdate=!0}heightAt(e,t){let{field:n}=this,r=Math.floor((e-n.originX)/n.cell),i=Math.floor((t-n.originZ)/n.cell);return r<0||i<0||r>=n.cols||i>=n.rows?0:this.heightData[(i*n.cols+r)*4]/255*Gf}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.heightTexture.dispose(),this.sectionTexture.dispose(),this.noiseTexture.dispose()}},tp=50,np=5,rp=`
  attribute vec3 aBase; // world x, world z, random seed
  attribute float aLit;
  uniform sampler2D uHeight;
  uniform sampler2D uSection;
  uniform sampler2D uNoise;
  uniform vec2 uOrigin;
  uniform vec2 uFieldSize;
  uniform vec2 uTexel;
  uniform vec2 uCenter;
  uniform float uPatch;
  uniform float uMaxH;
  uniform float uTime;
  uniform float uScale;
  uniform vec3 uPushA; // vehicle x, z, radius
  uniform vec3 uPushB; // trailer x, z, radius
  uniform vec4 uBlade; // x, z, direction x, direction z
  uniform vec2 uBladeInfo; // half width, strength
  uniform vec3 uTop[4];
  uniform vec3 uShade[4];
  uniform vec3 uTuft[4]; // height, width, full snow height
  varying vec3 vColor;

  vec2 push(vec2 p, vec3 source) {
    vec2 d = p - source.xy;
    float dist = length(d) + 0.001;
    float amount = 1.0 - smoothstep(source.z * 0.55, source.z * 1.75, dist);
    return (d / dist) * amount;
  }

  void main() {
    // Stable world positions that wrap around the camera, so density is the same on any field size.
    vec2 rel = mod(aBase.xy - uCenter + uPatch * 0.5, uPatch) - uPatch * 0.5;
    vec2 world = uCenter + rel;
    vec2 fieldUv = (world - uOrigin) / uFieldSize;

    bool inside = fieldUv.x > 0.0 && fieldUv.x < 1.0 && fieldUv.y > 0.0 && fieldUv.y < 1.0;
    // Smoothed like the snow itself, so rim tufts follow the cut and do not line up with the grid.
    float h = inside ? (texture2D(uHeight, fieldUv).r * 0.4
      + (texture2D(uHeight, fieldUv + vec2(uTexel.x, 0.0)).r + texture2D(uHeight, fieldUv - vec2(uTexel.x, 0.0)).r
        + texture2D(uHeight, fieldUv + vec2(0.0, uTexel.y)).r + texture2D(uHeight, fieldUv - vec2(0.0, uTexel.y)).r) * 0.15) * uMaxH : 0.0;
    int s = int(texture2D(uSection, fieldUv).r * 255.0 + 0.5);
    vec3 tuft = uTuft[s];
    // Tufts shrink with the snow under them and vanish on cleared ground.
    float grow = smoothstep(0.16, 0.62, h / tuft.z);
    if (grow < 0.01) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      vColor = vec3(0.0);
      return;
    }

    float seed = aBase.z;
    float height = tuft.x * (0.62 + 0.76 * seed) * grow;
    // Rim tufts narrow as the cut reaches them, which keeps plowed edges clean.
    float width = tuft.y * (0.8 + 0.5 * fract(seed * 7.3)) * uScale * (0.45 + 0.55 * grow);
    float angle = seed * 37.7;
    float c = cos(angle);
    float sn = sin(angle);
    vec3 p = vec3((position.x * c - position.z * sn) * width, position.y * height, (position.x * sn + position.z * c) * width);

    // Parted by the machine, stirred a little by the wind.
    vec2 bend = push(world, uPushA) + push(world, uPushB);
    float tip = position.y * position.y;
    p.xz += bend * tip * 0.75;
    p.y *= 1.0 - min(length(bend), 1.0) * 0.5;

    // Scooped up and shoved ahead as the blade arrives; spilled sideways near its ends.
    vec2 toTuft = world - uBlade.xy;
    vec2 bladeDir = uBlade.zw;
    float along = dot(toTuft, bladeDir);
    float across = dot(toTuft, vec2(-bladeDir.y, bladeDir.x));
    float inFront = smoothstep(-0.25, 0.1, along) * (1.0 - smoothstep(0.25, 1.7, along));
    float inWidth = 1.0 - smoothstep(uBladeInfo.x - 0.1, uBladeInfo.x + 0.75, abs(across));
    float scoop = inFront * inWidth * uBladeInfo.y;
    float spill = across / max(uBladeInfo.x, 0.1);
    p.y += scoop * (0.2 + position.y * 0.16);
    // Shift the whole clump rather than just its tip, so it heaves up instead of stretching to a spike.
    p.xz += (bladeDir + vec2(-bladeDir.y, bladeDir.x) * spill * 0.9) * (0.2 + tip * 0.22) * scoop;
    p.xz += vec2(sin(uTime * 1.3 + seed * 40.0 + world.x * 0.4), cos(uTime * 1.1 + seed * 25.0 + world.y * 0.4)) * tip * 0.022;

    vec3 worldPos = vec3(world.x + p.x, h - 0.03 + p.y, world.y + p.z);
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);

    // Cool at the root, bright at the tip, with large soft patches across the field.
    float patchNoise = texture2D(uNoise, world * 0.06).r;
    vec3 color = mix(uShade[s], uTop[s], clamp(0.42 + position.y * 0.85 + (patchNoise - 0.5) * 0.55, 0.0, 1.0));
    color *= aLit;
    vColor = color;
  }
`,ip=`
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
    #include <colorspace_fragment>
  }
`;function ap(){let e=[],t=[],n=new W(.45,.75,.45).normalize(),r=(e,t,n)=>{let r=[];for(let i=0;i<5;i++){let a=(i+n)/5*Math.PI*2;r.push(new W(Math.cos(a)*e,t,Math.sin(a)*e))}return r},i=r(.5,0,0),a=r(.34,.58,.5),o=new W(.04,1,-.03),s=new W,c=new W,l=new W,u=(r,i,a)=>{s.crossVectors(c.subVectors(i,r),l.subVectors(a,r)).normalize(),s.y<0&&s.negate();let o=.93+.1*Math.max(0,s.dot(n));for(let n of[r,i,a])e.push(n.x,n.y,n.z),t.push(o)};for(let e=0;e<5;e++){let t=(e+1)%5;u(i[e],a[e],i[t]),u(i[t],a[e],a[t]),u(a[e],o,a[t])}let d=new Rr;return d.setAttribute(`position`,new Er(e,3)),d.setAttribute(`aLit`,new Er(t,1)),d}var op=class{constructor(e,t,n,r){X(this,`mesh`,void 0),X(this,`geometry`,void 0),X(this,`material`,void 0),X(this,`total`,void 0),X(this,`time`,0);let i=ap();this.geometry=new As,this.geometry.setAttribute(`position`,i.getAttribute(`position`)),this.geometry.setAttribute(`aLit`,i.getAttribute(`aLit`)),this.total=Math.round(2500*np);let a=new Float32Array(this.total*3);for(let e=0;e<this.total;e++)a[e*3]=Math.random()*tp,a[e*3+1]=Math.random()*tp,a[e*3+2]=Math.random();this.geometry.setAttribute(`aBase`,new ji(a,3));let o=[];for(let e=0;e<4;e++){let n=ad[t.sections[Math.min(e,t.sections.length-1)].type];o.push(new W(n.tuftHeight,n.tuftWidth,n.height))}this.material=new Ho({vertexShader:rp,fragmentShader:ip,side:2,uniforms:{uHeight:{value:n.heightTexture},uSection:{value:n.sectionTexture},uNoise:{value:n.noiseTexture},uOrigin:{value:new U(e.originX,e.originZ)},uFieldSize:{value:new U(e.width,e.depth)},uTexel:{value:new U(1/e.cols,1/e.rows)},uCenter:{value:new U},uPatch:{value:tp},uMaxH:{value:Wf},uTime:{value:0},uScale:{value:1},uPushA:{value:new W(0,0,1)},uPushB:{value:new W(0,0,1)},uBlade:{value:new tn(0,0,0,-1)},uBladeInfo:{value:new U(1,0)},uTop:{value:n.topColors},uShade:{value:n.shadeColors},uTuft:{value:o}}}),this.setDensity(r),this.mesh=new q(this.geometry,this.material),this.mesh.frustumCulled=!1}setDensity(e){this.geometry.instanceCount=Math.min(this.total,Math.round(2500*e)),this.material&&(this.material.uniforms.uScale.value=Math.min(1.3,Math.sqrt(np/e)))}update(e,t,n,r,i,a,o,s,c){this.time+=e;let l=this.material.uniforms;l.uTime.value=this.time,l.uCenter.value.set(t,n),l.uPushA.value.set(r,i,a),l.uPushB.value.set(o,s,c)}setBlade(e,t,n,r,i,a){let o=this.material.uniforms;o.uBlade.value.set(e,t,n,r),o.uBladeInfo.value.set(i,a)}get triangles(){return(this.geometry.instanceCount??0)*15}dispose(){this.geometry.dispose(),this.material.dispose()}};function sp(e,t){let n=e.levels[t.id];return n||(n={clearedOnce:t.sections.map(()=>!1),snow:null,clearedQuantity:0,stars:0,foundTreasures:[]},e.levels[t.id]=n),n}function cp(e,t){return sp(e,t).clearedOnce.every(Boolean)}function lp(e){return Ld.first*(Ld.growth**+e-1)/(Ld.growth-1)}function up(e,t){let n=lp(e),r=lp(e+1);return Math.max(0,Math.min(1,(t-n)/(r-n)))}function dp(e,t){return e.maxLevel>=vd[t].requiresLevel}function fp(e,t,n){let r=Nd[n+1];return cp(e,t)?r?{kind:`go`,name:r.name}:{kind:`complete`}:{kind:`clear`,next:r?r.name:null}}var pp=.07;function mp(e,t){let n=cd[e];return Math.round(n.baseCost*n.costGrowth**+t)}function hp(e,t){return t>=cd[e].maxLevel}function gp(e,t){switch(t){case`width`:return e.bladeWidth;case`power`:return e.power;case`speed`:return e.speed;case`capacity`:return e.capacity;case`value`:return 1;case`vault`:return 2;case`assembly`:return 1;case`warehouse`:return _d.warehouseSeconds;case`dock`:return _d.crateSeconds;case`train`:return _d.trainCrates;case`rocket`:return _d.rocketShare}}function _p(e,t,n){let r=cd[e],i=gp(t,e);return r.mode===`add`?i+r.step*n:i*r.step**+n}function vp(e,t){let n=vd[e.vehicle],r=0,i=0,a=0,o=0,s=0;for(let t=0;t<e.factoryLevel;t++){let{effect:e}=md[t];r+=e.income??0,i+=e.sale??0,a+=e.capacity??0,o+=e.speed??0,s+=e.power??0}return t.width=_p(`width`,n,e.upgrades.width),t.power=_p(`power`,n,e.upgrades.power)*(1+s),t.speed=_p(`speed`,n,e.upgrades.speed)*(1+dd.turbo.step*e.perks.turbo)*(1+o),t.capacity=Math.round(_p(`capacity`,n,e.upgrades.capacity)*(1+dd.tank.step*e.perks.tank)*(1+a)),t.saleMultiplier=_p(`value`,n,e.upgrades.value)*(1+dd.market.step*e.perks.market)*(1+i)*(1+Ld.saleBonus*e.rank),t.income=r*_p(`assembly`,n,e.upgrades.assembly),t.warehouseSeconds=_p(`warehouse`,n,e.upgrades.warehouse),t.crateSeconds=_p(`dock`,n,e.upgrades.dock),t.trainCrates=_p(`train`,n,e.upgrades.train),t.rocketShare=_p(`rocket`,n,e.upgrades.rocket),t.resistanceMultiplier=1-yd.indexOf(e.vehicle)*pp,t.offlineHours=_p(`vault`,n,e.upgrades.vault),t}function yp(e,t){return!Number.isFinite(t)||t<0||e.money<t?!1:(e.money-=t,!0)}function bp(e,t){return dd[e].costs[t]??null}function xp(e,t){let n=bp(t,e.perks[t]);return n===null||e.gems<n?!1:(e.gems-=n,e.perks[t]++,!0)}function Sp(e){return md[e.factoryLevel]??null}function Cp(e){let t=Sp(e);return!t||!yp(e,t.cost)?null:(e.factoryLevel++,t)}function wp(e){let{income:t,sale:n,capacity:r,speed:i,power:a}=e.effect,o=[];return t&&o.push(`More crates`),n&&o.push(`+${Math.round(n*100)}% sales`),r&&o.push(`+${Math.round(r*100)}% trailer`),i&&o.push(`+${Math.round(i*100)}% speed`),a&&o.push(`+${Math.round(a*100)}% power`),e.unlocks&&o.push(`opens ${hd[e.unlocks].name}`),o.join(`, `)}function Tp(e,t){let n=cd[t].requiresStage;return!n||md.findIndex(e=>e.name===n)<e.factoryLevel}function Ep(e,t){return md.findIndex(e=>e.unlocks===t)<e.factoryLevel}function Dp(e,t){if(!Tp(e,t))return!1;let n=e.upgrades[t];return hp(t,n)||!yp(e,mp(t,n))?!1:(e.upgrades[t]=n+1,!0)}var Op=[``,`K`,`M`,`B`,`T`,`Qa`,`Qi`];function kp(e){let t=Math.floor(e);if(t<1e4)return t.toLocaleString(`en-US`);let n=Math.min(Op.length-1,Math.floor(Math.log10(t)/3)),r=t/1e3**n,i=r>=100?0:r>=10?1:2;return r.toFixed(i)+Op[n]}function Ap(e){return`$${kp(e)}`}function jp(e){return e>=100?kp(e):e.toFixed(1)}var Mp={width:`<svg viewBox="0 0 24 24"><path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/></svg>`,power:`<svg viewBox="0 0 24 24"><path d="M13 2 5 14h6l-1 8 9-13h-6z" class="fill"/></svg>`,speed:`<svg viewBox="0 0 24 24"><path d="M4 18a9 9 0 1 1 16 0"/><path d="m12 15 4-6"/></svg>`,vault:`<svg viewBox="0 0 24 24"><path d="M20 14.500A8.500 8.500 0 1 1 9.500 4a7 7 0 0 0 10.500 10.500z" class="fill"/></svg>`,capacity:`<svg viewBox="0 0 24 24"><path d="M3 15h18v3H3z"/><circle cx="7" cy="20" r="1.4" class="fill"/><circle cx="17" cy="20" r="1.4" class="fill"/><path d="M5 11h6v4H5zM13 11h6v4h-6zM9 7h6v4H9z"/></svg>`,value:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 8.500c-.8-1-1.800-1.400-3-1.400-1.700 0-3 .9-3 2.400 0 3.300 6 1.700 6 5 0 1.500-1.300 2.400-3 2.400-1.300 0-2.400-.5-3.200-1.500M12 5v14"/></svg>`,assembly:`<svg viewBox="0 0 24 24"><path d="M3 17h18M6 17v-3h4v3M14 17v-3h4v3"/><circle cx="7" cy="20" r="1.3" class="fill"/><circle cx="17" cy="20" r="1.3" class="fill"/><path d="M12 3v6M9 6l3 3 3-3"/></svg>`,warehouse:`<svg viewBox="0 0 24 24"><path d="m3 10 9-6 9 6v10H3z"/><path d="M8 20v-7h8v7M8 16.500h8"/></svg>`,dock:`<svg viewBox="0 0 24 24"><path d="M4 8h16v12H4zM4 8l3-4h10l3 4M12 8v12M8 12h8"/></svg>`,train:`<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="12" rx="2"/><path d="M5 11h14M8 20l2-4M16 20l-2-4"/></svg>`,rocket:`<svg viewBox="0 0 24 24"><path d="M12 2c3.500 3 4.500 7 4.500 11l-2 4h-5l-2-4C7.500 9 8.500 5 12 2z" class="fill"/><path d="M8 14l-3 4h4M16 14l3 4h-4M10.500 20h3"/></svg>`,gem:`<svg viewBox="0 0 24 24"><path d="M7 4h10l4 6-9 11L3 10z" class="fill"/></svg>`,star:`<svg viewBox="0 0 24 24"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.500l6.600-.9z" class="fill"/></svg>`,market:`<svg viewBox="0 0 24 24"><path d="M4 10h16l-1 10H5zM3 10l2-6h14l2 6"/><path d="M12 13v4M10 15h4"/></svg>`,tank:`<svg viewBox="0 0 24 24"><path d="M4 7h16v11H4z"/><path d="M8 3v4M16 3v4M9 12h6"/></svg>`,turbo:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 12c0-4 2-6 5-6M12 12c4 0 6 2 6 5M12 12c0 4-2 6-5 6M12 12c-4 0-6-2-6-5"/></svg>`,house:`<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>`,sound:`<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z" class="fill"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>`,muted:`<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z" class="fill"/><path d="m16 9 5 6M21 9l-5 6"/></svg>`,gear:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3"/></svg>`,play:`<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z" class="fill"/></svg>`,lock:`<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2" class="fill"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,close:`<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>`},Np={width:e=>`${e.toFixed(1)} m`,power:e=>jp(e),speed:e=>`${e.toFixed(1)} m/s`,capacity:e=>kp(Math.round(e)),value:e=>`+${Number(((e-1)*100).toFixed(1))}%`,vault:e=>`${Math.round(e)}h offline`,assembly:e=>`x${e.toFixed(2)} output`,warehouse:e=>`${(e/60).toFixed(1)} min of crates`,dock:e=>`x${(e/_d.crateSeconds).toFixed(2)} per crate`,train:e=>`${Math.round(e)} crates`,rocket:e=>`${Math.round(e*100)}% of output`},Pp={upgrade:`Upgrades`,shop:`Vehicle Shop`,travel:`Fields`};function Q(e,t){return e.querySelector(t)}var Fp=class{constructor(e,t,n){X(this,`sim`,void 0),X(this,`actions`,void 0),X(this,`overlay`,void 0),X(this,`hud`,void 0),X(this,`moneyEl`,void 0),X(this,`moneyPill`,void 0),X(this,`gemEl`,void 0),X(this,`starEls`,void 0),X(this,`lastGems`,-1),X(this,`frenzyFill`,void 0),X(this,`frenzyBar`,void 0),X(this,`banner`,void 0),X(this,`rankBadge`,void 0),X(this,`rankFill`,void 0),X(this,`rankPill`,void 0),X(this,`treasureEl`,void 0),X(this,`lastRank`,-1),X(this,`lastTreasure`,``),X(this,`incomeEl`,void 0),X(this,`launchEl`,void 0),X(this,`lastLaunch`,``),X(this,`lastIncomeText`,null),X(this,`lastStars`,-1),X(this,`upgradeTab`,`upgrades`),X(this,`levelNameEl`,void 0),X(this,`progressFill`,void 0),X(this,`objectiveEl`,void 0),X(this,`storageFill`,void 0),X(this,`storageText`,void 0),X(this,`storageBar`,void 0),X(this,`hintEl`,void 0),X(this,`offerBtn`,void 0),X(this,`offerFill`,void 0),X(this,`boostsEl`,void 0),X(this,`panel`,void 0),X(this,`panelTitle`,void 0),X(this,`panelBody`,void 0),X(this,`settings`,void 0),X(this,`fade`,void 0),X(this,`toastEl`,void 0),X(this,`soundBtn`,void 0),X(this,`popups`,[]),X(this,`popupIndex`,0),X(this,`displayedMoney`,0),X(this,`openPanel`,null),X(this,`dismissedZone`,null),X(this,`lastHint`,null),X(this,`lastObjective`,``),X(this,`toastTimer`,0),X(this,`lastStorageText`,``),X(this,`resetArmed`,!1),X(this,`panelDirty`,!1),X(this,`soundOn`,!0),X(this,`lastBoostText`,``),X(this,`tally`,void 0),X(this,`tallyShown`,!1),X(this,`lastTally`,``),this.sim=t,this.actions=n,this.overlay=document.createElement(`div`),this.overlay.className=`ui`,this.overlay.innerHTML=`
      <div class="hud">
        <div class="hud-top">
          <div class="hud-left">
            <div class="money pill"><span class="coin">$</span><span class="money-value">0</span></div>
            <div class="gems pill"><span class="gem-icon">${Mp.gem}</span><span class="gem-value">0</span></div>
            <div class="rank pill"><span class="rank-badge">1</span><span class="rank-track"><span class="rank-fill"></span></span></div>
            <div class="income pill" hidden></div>
            <button class="launch pill" hidden></button>
            <div class="boosts"></div>
          </div>
          <div class="hud-center pill">
            <div class="level-row"><span class="level-name"></span><span class="treasure-count"></span></div>
            <div class="star-track">
              <div class="progress"><div class="progress-fill"></div></div>
              ${pd.thresholds.map((e,t)=>`<span class="star" data-star="${t}" style="left:${e*100}%">${Mp.star}</span>`).join(``)}
            </div>
            <div class="objective"></div>
          </div>
          <div class="hud-right">
            <button class="icon-btn sound-btn" aria-label="Toggle sound">${Mp.sound}</button>
            <button class="icon-btn settings-btn" aria-label="Settings">${Mp.gear}</button>
          </div>
        </div>
        <div class="toast"></div>
        <div class="hint"></div>
        <div class="hud-bottom">
          <button class="offer-btn" hidden><span class="offer-label"></span><span class="offer-track"><span class="offer-fill"></span></span></button>
          <div class="frenzy pill"><span class="frenzy-fill"></span><span class="frenzy-label">FRENZY</span></div>
          <div class="storage pill">
            <div class="storage-track"><div class="storage-fill"></div></div>
            <div class="storage-label"><span class="storage-text">0 / 0</span></div>
          </div>
        </div>
      </div>
      <aside class="panel" aria-hidden="true">
        <header class="panel-head"><h2></h2><button class="icon-btn panel-close" aria-label="Close">${Mp.close}</button></header>
        <div class="panel-body"></div>
      </aside>
      <div class="settings-modal" hidden>
        <div class="settings-card">
          <header class="panel-head"><h2>Settings</h2><button class="icon-btn settings-close" aria-label="Close">${Mp.close}</button></header>
          <label class="setting-row"><span>Sound</span><input type="checkbox" class="setting-sound" /></label>
          <label class="setting-row"><span>Graphics</span>
            <select class="setting-quality">
              <option value="auto">Auto</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
            </select>
          </label>
          <button class="btn btn-danger setting-reset">Reset progress</button>
          <p class="setting-note">WASD or arrow keys to drive. On touch screens, drag anywhere.</p>
        </div>
      </div>
      <div class="banner"><small class="banner-top"></small><strong class="banner-name"></strong></div>
      <div class="frenzy-glow"></div>
      <div class="fade"></div>
    `,e.appendChild(this.overlay);let r=this.overlay;this.hud=Q(r,`.hud`),this.moneyEl=Q(r,`.money-value`),this.moneyPill=Q(r,`.money`),this.gemEl=Q(r,`.gem-value`),this.frenzyFill=Q(r,`.frenzy-fill`),this.frenzyBar=Q(r,`.frenzy`),this.banner=Q(r,`.banner`),this.rankBadge=Q(r,`.rank-badge`),this.rankFill=Q(r,`.rank-fill`),this.rankPill=Q(r,`.rank`),this.treasureEl=Q(r,`.treasure-count`),this.incomeEl=Q(r,`.income`),this.launchEl=Q(r,`.launch`),this.starEls=Array.from(r.querySelectorAll(`.star`)),this.levelNameEl=Q(r,`.level-name`),this.progressFill=Q(r,`.progress-fill`),this.objectiveEl=Q(r,`.objective`),this.storageFill=Q(r,`.storage-fill`),this.storageText=Q(r,`.storage-text`),this.storageBar=Q(r,`.storage`),this.hintEl=Q(r,`.hint`),this.offerBtn=Q(r,`.offer-btn`),this.offerFill=Q(r,`.offer-fill`),this.boostsEl=Q(r,`.boosts`),this.panel=Q(r,`.panel`),this.panelTitle=Q(r,`.panel-head h2`),this.panelBody=Q(r,`.panel-body`),this.settings=Q(r,`.settings-modal`),this.fade=Q(r,`.fade`),this.toastEl=Q(r,`.toast`),this.soundBtn=Q(r,`.sound-btn`);for(let e=0;e<12;e++){let e=document.createElement(`div`);e.className=`popup`,this.hud.appendChild(e),this.popups.push(e)}this.tally=document.createElement(`div`),this.tally.className=`tally`,this.hud.appendChild(this.tally),this.displayedMoney=t.state.money,this.bindEvents(),this.refreshLevel()}bindEvents(){let{actions:e}=this;Q(this.overlay,`.panel-close`).addEventListener(`click`,()=>{e.click(),this.dismissedZone=this.openPanel,this.closePanel()}),this.panelBody.addEventListener(`click`,e=>this.handlePanelClick(e)),this.launchEl.addEventListener(`click`,()=>{e.click(),e.watchLaunch()}),this.offerBtn.addEventListener(`click`,()=>{e.click(),e.reward(`double_sale`)}),this.soundBtn.addEventListener(`click`,()=>{this.setSoundDisplay(!this.soundOn),e.setSound(this.soundOn),e.click()}),Q(this.overlay,`.settings-btn`).addEventListener(`click`,()=>{e.click(),this.openSettings()}),Q(this.overlay,`.settings-close`).addEventListener(`click`,()=>{e.click(),this.settings.hidden=!0}),Q(this.overlay,`.setting-sound`).addEventListener(`change`,t=>{let n=t.target.checked;this.setSoundDisplay(n),e.setSound(n)}),Q(this.overlay,`.setting-quality`).addEventListener(`change`,t=>{e.setQuality(t.target.value)});let t=Q(this.overlay,`.setting-reset`);t.addEventListener(`click`,()=>{this.resetArmed?e.resetProgress():(this.resetArmed=!0,t.textContent=`Tap again to erase everything`)}),this.panel.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.overlay.addEventListener(`click`,e=>{e.target.closest(`button`)?.blur()})}handlePanelClick(e){let t=e.target.closest(`button[data-action]`);if(!t||t.disabled)return;let{action:n,id:r}=t.dataset,{actions:i}=this;switch(n){case`upgrade`:i.buyUpgrade(r);break;case`tab`:i.click(),this.upgradeTab=r,this.renderPanel();break;case`perk`:i.buyPerk(r);break;case`buy-vehicle`:i.buyVehicle(r);break;case`equip-vehicle`:i.click(),i.equipVehicle(r);break;case`travel`:i.click(),i.travel(Number(r));break;case`reward`:i.click(),i.reward(r)}}openSettings(){Q(this.overlay,`.setting-sound`).checked=this.soundOn,Q(this.overlay,`.setting-quality`).value=this.sim.state.settings.quality,this.resetArmed=!1,Q(this.overlay,`.setting-reset`).textContent=`Reset progress`,this.settings.hidden=!1}setSoundDisplay(e){this.soundOn=e,this.soundBtn.innerHTML=e?Mp.sound:Mp.muted,this.soundBtn.classList.toggle(`off`,!e)}onZoneEnter(e){e!==`sell`&&this.dismissedZone!==e&&this.openPanelFor(e)}onZoneExit(e){this.dismissedZone===e&&(this.dismissedZone=null),this.openPanel===e&&this.closePanel()}openPanelFor(e){e!==`sell`&&(this.openPanel=e,this.panelTitle.textContent=Pp[e],this.panel.classList.add(`open`),this.panel.setAttribute(`aria-hidden`,`false`),this.overlay.classList.add(`panel-open`),this.renderPanel())}closePanel(){this.openPanel=null,this.panel.classList.remove(`open`),this.panel.setAttribute(`aria-hidden`,`true`),this.overlay.classList.remove(`panel-open`)}markPanelDirty(){this.panelDirty=!0}renderPanel(){this.panelDirty=!1,this.openPanel===`upgrade`?this.panelBody.innerHTML=this.upgradeHtml():this.openPanel===`shop`?this.panelBody.innerHTML=this.shopHtml():this.openPanel===`travel`&&(this.panelBody.innerHTML=this.travelHtml()),this.refreshAffordability()}upgradeHtml(){let{state:e}=this.sim,t=vd[e.vehicle],n=`<div class="tabs">${[{id:`upgrades`,name:`Upgrades`},{id:`gems`,name:`Gems`}].map(e=>`<button class="tab ${e.id===this.upgradeTab?`active`:``}" data-action="tab" data-id="${e.id}">${e.name}</button>`).join(``)}</div>`;if(this.upgradeTab===`gems`)return n+this.perksHtml()+this.goalHtml();let r=n=>{let r=cd[n],i=e.upgrades[n],a=hp(n,i),o=Np[n](_p(n,t,i)),s=a?``:Np[n](_p(n,t,i+1)),c=Math.round(i/r.maxLevel*100);return`
        <div class="card upgrade-card up-${n}" data-card="${n}" title="${r.blurb}">
          <div class="card-icon">${Mp[n]}</div>
          <div class="card-main">
            <div class="card-title">${r.name} <span class="level-tag">Lv ${i}</span></div>
            <div class="card-effect">${a?`<b>${o}</b> · Max level`:`${o} <i>→</i> <b>${s}</b>`}</div>
            <div class="pips"><div style="width:${c}%"></div></div>
          </div>
          ${a?`<button class="btn btn-buy" disabled>MAX</button>`:`<button class="btn btn-buy" data-action="upgrade" data-id="${n}" data-cost="${mp(n,i)}">${Ap(mp(n,i))}</button>`}
        </div>`};return n+ud.map(t=>{let n=t.upgrades.filter(t=>Tp(e,t));return n.length?`<h3 class="part-head">${t.name}</h3>${n.map(r).join(``)}`:``}).join(``)+this.goalHtml()+this.rewardsHtml()}perksHtml(){let{state:e}=this.sim;return`${fd.map(t=>{let n=dd[t],r=e.perks[t],i=bp(t,r),a=e=>`+${Math.round(n.step*e*100)}%`,o=Math.round(r/n.costs.length*100);return`
        <div class="card upgrade-card perk-card">
          <div class="card-icon">${Mp[t]}</div>
          <div class="card-main">
            <div class="card-title">${n.name} <span class="level-tag">Lv ${r}</span></div>
            <div class="card-effect">${i===null?`<b>${a(r)}</b> · Max level`:`${n.blurb}: ${a(r)} <i>→</i> <b>${a(r+1)}</b>`}</div>
            <div class="pips"><div style="width:${o}%"></div></div>
          </div>
          ${i===null?`<button class="btn btn-buy" disabled>MAX</button>`:`<button class="btn btn-gem" data-action="perk" data-id="${t}" data-gems="${i}">${Mp.gem} ${i}</button>`}
        </div>`}).join(``)}<p class="panel-note">Permanent, on every vehicle. Earn gems from stars and first-time clears.</p>`}goalHtml(){let{sim:e}=this,t=fp(e.state,e.level,e.levelIndex),n;switch(t.kind){case`clear`:n=t.next?`<b>Next: ${t.next}</b><br />Clear this whole field to open it`:`<b>Last field!</b><br />Clear it all to finish the game`;break;case`go`:n=`<b>${t.name} is open</b><br />Visit the NEXT FIELD pad`;break;case`complete`:n=`<b>Every field is cleared.</b><br />You plowed the whole world!`}return`<div class="goal"><div>${n}</div></div>`}rewardsHtml(){if(!this.actions.rewardedSupported())return``;let{sim:e}=this,t=e.time>=e.bonusReadyAt;return`
      <h3 class="panel-sub">Free boosts</h3>
      <div class="reward-row">
        <button class="btn btn-reward" data-action="reward" data-id="power_boost">${Mp.play}<span>Power x${Rd.powerMultiplier}<small>${Rd.powerSeconds}s</small></span></button>
        <button class="btn btn-reward" data-action="reward" data-id="storage_boost">${Mp.play}<span>Storage x${Rd.storageMultiplier}<small>${Rd.storageSeconds}s</small></span></button>
        <button class="btn btn-reward" data-action="reward" data-id="bonus_cash" ${t?``:`disabled`}>${Mp.play}<span>${Ap(e.bonusCashAmount())}<small>${t?`Bonus`:`Later`}</small></span></button>
      </div>`}shopHtml(){let{state:e}=this.sim,t=this.actions.thumbnails();return yd.map(n=>{let r=vd[n],i=e.ownedVehicles.includes(n),a=e.vehicle===n,o=dp(e,n),s;s=a?`<button class="btn btn-equipped" disabled>Equipped</button>`:i?`<button class="btn btn-go" data-action="equip-vehicle" data-id="${n}">Equip</button>`:o?`<button class="btn btn-buy" data-action="buy-vehicle" data-id="${n}" data-cost="${r.cost}">${Ap(r.cost)}</button>`:`<button class="btn btn-buy" disabled>${Mp.lock}</button>`;let c=!i&&!o?`<div class="card-effect need">Open ${Nd[r.requiresLevel].name}</div>`:``,l=`<div class="stat-grid">
        <span>Blade <b>${r.bladeWidth.toFixed(1)}</b></span><span>Power <b>${jp(r.power)}</b></span>
        <span>Speed <b>${r.speed.toFixed(1)}</b></span><span>Tank <b>${kp(r.capacity)}</b></span></div>`;return`
        <div class="card vehicle-card ${a?`equipped`:``} ${!i&&!o?`locked`:``}">
          <div class="thumb">${t[n]?`<img src="${t[n]}" alt="" />`:``}</div>
          <div class="card-main">
            <div class="card-title">${r.name}</div>
            <div class="card-effect dim">${r.blurb}</div>
            ${c}${l}
          </div>
          ${s}
        </div>`}).join(``)+`<p class="panel-note">Base stats. Your upgrades carry over to every vehicle.</p>`}travelHtml(){let{sim:e}=this;return Nd.map((t,n)=>{let r=n===e.levelIndex,i=n<=e.state.maxLevel,a=[...new Set(t.sections.map(e=>ad[e.type].name))].join(`, `),o=sp(e.state,t).stars,s,c=`<div class="card-effect dim">${a}${i?` · ${o}/3 stars`:``}</div>`;return r?s=`<button class="btn btn-equipped" disabled>Here</button>`:i?s=`<button class="btn btn-go" data-action="travel" data-id="${n}">Go</button>`:(s=`<button class="btn btn-buy" disabled>${Mp.lock}</button>`,c+=`<div class="card-effect need">Clear ${Nd[n-1].name}</div>`),`
        <div class="card level-card ${r?`equipped`:``}">
          <div class="level-badge" style="background:#${t.palette.skyTop.toString(16).padStart(6,`0`)}">${n+1}</div>
          <div class="card-main"><div class="card-title">${t.name}</div>${c}</div>
          ${s}
        </div>`}).join(``)}refreshAffordability(){let{money:e,gems:t}=this.sim.state;this.panelBody.querySelectorAll(`button[data-gems]`).forEach(e=>{e.disabled=t<Number(e.dataset.gems)}),this.panelBody.querySelectorAll(`button[data-cost]`).forEach(t=>{let n=Number(t.dataset.cost);t.disabled=e<n})}refreshLevel(){this.levelNameEl.textContent=this.sim.level.name,this.lastObjective=``}update(e,t){let{sim:n}=this,{state:r}=n;Math.abs(this.displayedMoney-r.money)>.5?(this.displayedMoney+=(r.money-this.displayedMoney)*Math.min(1,e*9),Math.abs(this.displayedMoney-r.money)<1&&(this.displayedMoney=r.money),this.moneyEl.textContent=kp(this.displayedMoney)):this.moneyEl.textContent===`0`&&r.money>0&&(this.moneyEl.textContent=kp(r.money));let i=n.stats.capacity,a=i>0?Math.min(1,r.cargoQuantity/i):0;this.storageFill.style.transform=`scaleX(${a})`;let o=n.full?`STORAGE FULL · ${kp(i)}`:`${kp(r.cargoQuantity)} / ${kp(i)}`;o!==this.lastStorageText&&(this.lastStorageText=o,this.storageText.textContent=o,this.storageBar.classList.toggle(`full`,n.full)),this.updateProgress();let s=t;s!==this.lastHint&&(this.lastHint=s,s&&(this.hintEl.textContent=s),this.hintEl.classList.toggle(`show`,!!s)),this.updateOffer();let c=n.frenzyActive,l=c?(n.frenzyUntil-n.time)/Pd.seconds:n.frenzyCharge;this.frenzyFill.style.transform=`scaleX(${Math.max(0,Math.min(1,l))})`,this.frenzyBar.classList.toggle(`active`,c),this.overlay.classList.toggle(`in-frenzy`,c),this.updateBoosts(),this.openPanel&&(this.panelDirty?this.renderPanel():this.refreshAffordability())}updateProgress(){let{sim:e}=this;this.progressFill.style.transform=`scaleX(${e.starProgress()})`;let t=sp(e.state,e.level).stars;t!==this.lastStars&&(this.lastStars=t,this.starEls.forEach((e,n)=>e.classList.toggle(`lit`,n<t))),this.rankFill.style.transform=`scaleX(${up(e.state.rank,e.state.stats.totalSnow)})`,e.state.rank!==this.lastRank&&(this.lastRank>=0&&(this.rankPill.classList.remove(`bump`),this.rankPill.offsetWidth,this.rankPill.classList.add(`bump`)),this.lastRank=e.state.rank,this.rankBadge.textContent=String(e.state.rank));let n=e.treasureCount(),r=` · ${n.found}/${n.total} treasures`;r!==this.lastTreasure&&(this.lastTreasure=r,this.treasureEl.textContent=r);let i=e.warehouseFull?`Warehouse full`:``;i!==this.lastIncomeText&&(this.lastIncomeText=i,this.incomeEl.hidden=i===``,this.incomeEl.textContent=i,this.incomeEl.classList.toggle(`full`,e.warehouseFull));let a=e.rocketCountdown,o=a===null?``:`Rocket launch in ${Math.ceil(a)} · Watch`;o!==this.lastLaunch&&(this.lastLaunch=o,this.launchEl.hidden=o===``,this.launchEl.textContent=o),e.state.gems!==this.lastGems&&(this.lastGems=e.state.gems,this.gemEl.textContent=kp(e.state.gems));let s=fp(e.state,e.level,e.levelIndex),c;switch(s.kind){case`clear`:c=s.next?`Clear the field to open ${s.next}`:`Clear the last field!`;break;case`go`:c=`${s.name} is open!`;break;case`complete`:c=`Every field cleared!`}c!==this.lastObjective&&(this.lastObjective=c,this.objectiveEl.textContent=c)}updateOffer(){let{sim:e}=this,t=e.doubleOffer,n=!!t&&this.actions.rewardedSupported();if(this.offerBtn.hidden===n&&(this.offerBtn.hidden=!n),n&&t){Q(this.offerBtn,`.offer-label`).innerHTML=`${Mp.play} Double it: +${Ap(t.amount)}`;let n=(t.until-e.time)/Rd.doubleOfferSeconds;this.offerFill.style.transform=`scaleX(${Math.max(0,n)})`}}updateBoosts(){let{sim:e}=this,t=[];e.time<e.powerBoostUntil&&t.push(`<span class="boost power">Power x${Rd.powerMultiplier} · ${Math.ceil(e.powerBoostUntil-e.time)}s</span>`),e.time<e.storageBoostUntil&&t.push(`<span class="boost storage">Storage x${Rd.storageMultiplier} · ${Math.ceil(e.storageBoostUntil-e.time)}s</span>`);let n=t.join(``);n!==this.lastBoostText&&(this.lastBoostText=n,this.boostsEl.innerHTML=n)}popup(e,t,n,r){let i=this.popups[this.popupIndex];this.popupIndex=(this.popupIndex+1)%this.popups.length,i.textContent=n,i.className=`popup ${r}`,i.style.left=`${e}px`,i.style.top=`${t}px`,i.offsetWidth,i.classList.add(`play`)}updateTally(e,t,n,r,i=0){if(r!==this.tallyShown&&(this.tallyShown=r,this.tally.classList.toggle(`show`,r)),!r)return;let a=`+${kp(n)}`;a!==this.lastTally&&(this.lastTally=a,this.tally.textContent=a);let o=1+Math.min(.75,Math.log10(Math.max(1,n))*.24);this.tally.style.transform=`translate(${e}px, ${t}px) translate(-50%, -50%) scale(${o})`,this.tally.classList.toggle(`hot`,i>0),this.tally.classList.toggle(`blazing`,i>1)}showBanner(e,t){Q(this.banner,`.banner-top`).textContent=e,Q(this.banner,`.banner-name`).textContent=t,this.banner.classList.remove(`play`),this.banner.offsetWidth,this.banner.classList.add(`play`)}bumpStars(){let e=this.starEls[sp(this.sim.state,this.sim.level).stars-1];e&&(e.classList.remove(`pop`),e.offsetWidth,e.classList.add(`pop`))}bumpMoney(){this.moneyPill.classList.remove(`bump`),this.moneyPill.offsetWidth,this.moneyPill.classList.add(`bump`)}renderUpgradeFlash(e){this.openPanel&&this.renderPanel();let t=this.panelBody.querySelector(`[data-card="${e}"]`);t&&(t.classList.add(`flash`),setTimeout(()=>t.classList.remove(`flash`),450))}toast(e,t=2600){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`show`),t)}setFade(e){return this.fade.classList.toggle(`on`,e),new Promise(e=>setTimeout(e,340))}setBusy(e){this.overlay.classList.toggle(`busy`,e)}get isPanelOpen(){return this.openPanel!==null}},Ip={basic:{hitch:1.12,drawbar:1.55,width:1.3,length:1.7,cols:3,rows:4,block:.38,body:15232791,trim:16763955,wheel:.27},heavy:{hitch:1.85,drawbar:1.8,width:1.65,length:2.2,cols:4,rows:5,block:.38,body:15181069,trim:16738859,wheel:.32},blower:{hitch:1.62,drawbar:1.95,width:1.85,length:2.45,cols:4,rows:5,block:.42,body:12397613,trim:15922424,wheel:.34},industrial:{hitch:1.98,drawbar:2.2,width:2.3,length:2.95,cols:5,rows:6,block:.42,body:1990322,trim:16054011,wheel:.38},destroyer:{hitch:2.15,drawbar:2.4,width:2.65,length:3.3,cols:5,rows:6,block:.48,body:15133942,trim:4321535,wheel:.3,hover:!0},titan:{hitch:2.5,drawbar:2.7,width:3,length:3.8,cols:6,rows:7,block:.46,body:4147802,trim:16756782,wheel:.46},mech:{hitch:2.5,drawbar:2.9,width:3.2,length:4,cols:6,rows:7,block:.5,body:14673646,trim:16734783,wheel:.3,hover:!0},phantom:{hitch:2.5,drawbar:3,width:3.4,length:4.2,cols:6,rows:7,block:.54,body:2435130,trim:11992922,wheel:.3,hover:!0},omega:{hitch:3.1,drawbar:3.4,width:4,length:5,cols:7,rows:9,block:.54,body:2760736,trim:16761902,wheel:.6}},Lp=8,Rp=2764602,zp=3818066,Bp=new sn,Vp=new W,Hp=new W,Up=new Lt,Wp=new K,Gp=new W;function Kp(e){let t=new Z,{width:n,length:r}=e,i=e.hover?.62:e.wheel+.24;t.round(n,.14,r,0,i,0,zp,.04),t.round(n+.1,.24,.09,0,i+.15,-r/2,e.body,.03),t.round(n+.1,.24,.09,0,i+.15,r/2,e.body,.03),t.round(.09,.24,r,n/2,i+.15,0,e.body,.03),t.round(.09,.24,r,-n/2,i+.15,0,e.body,.03),t.round(n*.92,.05,.05,0,i+.28,r/2+.03,e.trim,.02);let a=e.drawbar-r/2;if(t.box(.14,.1,a+.1,0,i-.08,-r/2-a/2,zp),t.cylinder(.08,.08,.2,0,i-.12,-e.drawbar,e.trim,8),t.round(.2,.08,.04,n*.36,i+.14,r/2+.06,16729144,.02),t.round(.2,.08,.04,-n*.36,i+.14,r/2+.06,16729144,.02),e.hover)for(let i of[-1,1])t.round(.42,.24,r*.9,i*(n/2-.1),.38,0,4872826,.1),t.round(.2,.06,r*.8,i*(n/2-.1),.22,0,e.trim,.02);let o=t.build();o.castShadow=!0;let s=null;if(!e.hover){let t=new Z;for(let r of[-1,1])t.drum(e.wheel,.26,r*(n/2+.1),0,0,Rp,12),t.drum(e.wheel*.55,.28,r*(n/2+.1),0,0,14278632,6),t.box(e.wheel*1.1,e.wheel*.22,e.wheel*.22,r*(n/2+.23),0,0,zp);s=t.build(),s.position.y=e.wheel,s.castShadow=!0}return{body:o,axle:s}}var qp=class{constructor(e){X(this,`group`,new Fn),X(this,`x`,0),X(this,`z`,0),X(this,`spec`,void 0),X(this,`parts`,new Fn),X(this,`axle`,null),X(this,`blocks`,void 0),X(this,`blockScale`,new Float32Array),X(this,`shown`,0),X(this,`placed`,!1),X(this,`bedTop`,0),X(this,`ride`,0),X(this,`bumpAmount`,0),X(this,`blockColors`,new Int32Array),X(this,`unloading`,!1),X(this,`onPlace`,null),X(this,`onUnload`,null),this.spec=Ip[e],this.group.add(this.parts),this.buildFor(e)}setVehicle(e){this.parts.traverse(e=>{let t=e;t!==this.blocks&&t.isMesh&&t.geometry.dispose()}),this.group.remove(this.parts),this.blocks.geometry.dispose(),this.blocks.dispose(),this.parts=new Fn,this.group.add(this.parts),this.buildFor(e),this.placed=!1}buildFor(e){let t=Ip[e];this.spec=t;let{body:n,axle:r}=Kp(t);this.parts.add(n),this.axle=r,r&&this.parts.add(r),this.bedTop=(t.hover?.62:t.wheel+.24)+.07;let i=t.cols*t.rows*Lp,a=new Z;a.round(t.block*.94,t.block*.94,t.block*.94,0,0,0,16777215,t.block*.12),this.blocks=new zi(a.geometry(),cf,i),this.blocks.count=0,this.blocks.castShadow=!0,this.blocks.frustumCulled=!1,this.blockScale=new Float32Array(i),this.blockColors=new Int32Array(i),this.shown=0,Wp.setHex(16777215),this.blocks.setColorAt(0,Wp),this.parts.add(this.blocks)}get radius(){return this.spec.width*.62}localBlock(e,t){let{cols:n,rows:r,block:i}=this.spec,a=n*r,o=Math.floor(e/a),s=e%a,c=Math.floor(s/n),l=s%n;return t.set((l-(n-1)/2)*i,this.bedTop+(o+.5)*i,(c-(r-1)/2)*i)}blockWorld(e,t){this.localBlock(e,t);let n=this.group.rotation.y,r=Math.cos(n),i=Math.sin(n),a=t.x*r+t.z*i,o=-t.x*i+t.z*r;t.set(this.group.position.x+a,this.group.position.y+t.y,this.group.position.z+o)}get blockSize(){return this.spec.block}bump(){this.bumpAmount=1}beginUnload(){this.unloading=!0}layout(e){this.localBlock(e,Vp);let t=Math.max(.001,this.blockScale[e]);Hp.setScalar(t),Bp.compose(Vp,Up,Hp),this.blocks.setMatrixAt(e,Bp)}update(e,t,n,r,i,a,o,s,c,l){let{spec:u}=this,d=t-r*u.hitch,f=n-i*u.hitch,p=this.x-d,m=this.z-f,h=Math.hypot(p,m);(!this.placed||h>u.drawbar*2.5)&&(p=-r,m=-i,h=1,this.placed=!0),this.x=d+p/h*u.drawbar,this.z=f+m/h*u.drawbar;let g=l(this.x,this.z)*.5;this.ride+=(g-this.ride)*Math.min(1,e*10),this.group.position.set(this.x,this.ride+.02,this.z),this.group.rotation.y=Math.atan2(p,m),this.axle&&(this.axle.rotation.x-=c/u.wheel*e);let _=Math.min(Lp,3+Math.floor(o/4)),v=u.cols*u.rows*_,y=a<=0?0:Math.max(1,Math.round(a*v)),{blocks:b,blockScale:x}=this;if(y>this.shown){Wp.setHex(s);for(let e=this.shown;e<y;e++)x[e]=this.onPlace?.(e,s)?-2.3:.2,this.blockColors[e]=s,b.setColorAt(e,Wp);b.instanceColor&&(b.instanceColor.needsUpdate=!0),this.shown=y}else if(y<this.shown){let t=Math.max(y,this.shown-Math.max(1,Math.ceil(v*e*2)));if(this.unloading&&this.onUnload)for(let e=this.shown-1,n=0;e>=t;e--,n++)this.blockWorld(e,Gp),this.onUnload(Gp.x,Gp.y,Gp.z,this.blockColors[e],n);this.shown=t,t===y&&(this.unloading=!1)}b.count=this.shown;let S=!1;for(let t=Math.max(0,this.shown-48);t<this.shown;t++)x[t]<1&&(x[t]=Math.min(1,x[t]+e*7),this.layout(t),S=!0);S&&(b.instanceMatrix.needsUpdate=!0),this.bumpAmount=Math.max(0,this.bumpAmount-e*7);let C=Math.sin(this.bumpAmount*Math.PI)*.035;this.parts.position.y=-C}get stackTop(){let e=this.spec.cols*this.spec.rows;return this.bedTop+(Math.ceil(this.shown/e)+.5)*this.spec.block}dispose(){hf(this.parts)}},Jp=2764602,Yp=14278632,Xp=9082792,Zp=10135220,Qp=3818066,$p=2973574,em=16186367;function tm(e,t,n,r,i,a,o=Yp){let s=new Z;for(let e of[-1,1])s.drum(r,a,e*i,0,0,Jp,12),s.drum(r*.55,a+.03,e*i,0,0,o,6),s.box(r*1.1,r*.22,r*.22,e*(i+a*.5),0,0,Qp);let c=s.build();c.position.set(0,n,t),c.castShadow=!0,e.axles.push(c),e.root.add(c)}function nm(e,t,n){let r=new Z;r.box(1,n,.12,0,n*.5+.06,.02,e,{rx:.18}),r.box(1,n*.26,.15,0,n*.98+.07,-.11,e,{rx:-.55}),r.box(1,.09,.2,0,.05,-.04,t);let i=r.build();return i.castShadow=!0,i}function rm(e){let t=new Fn,n=new Fn,r=new Fn;return r.position.z=-vd[e].bladeOffset,t.add(n),t.add(r),{root:t,body:n,blade:r,axles:[],spinners:[],legs:[],beacon:null}}function im(e,t,n){let r=t.build();if(r.castShadow=!0,e.body.add(r),n){let t=new gi({color:n[3]}),r=new q(new Do(.11,0),t);r.position.set(n[0],n[1],n[2]),e.body.add(r),e.beacon=r}}function am(){let e=rm(`basic`),t=16747051,n=15232791,r=new Z;return r.round(1.15,.42,2,0,.58,0,t,.12),r.round(.98,.72,.88,0,1.12,-.24,t,.14),r.round(.84,.36,.05,0,1.2,-.69,$p,.02),r.round(.05,.34,.6,.49,1.2,-.24,$p,.02),r.round(.05,.34,.6,-.49,1.2,-.24,$p,.02),r.round(1.06,.1,1,0,1.52,-.24,n,.04),r.round(.5,.2,.46,.15,1.65,-.24,em,.09),r.box(1.08,.08,.7,0,.84,.66,Qp),r.round(1.06,.34,.08,0,1,1,n,.03),r.round(.08,.34,.72,.5,1,.66,n,.03),r.round(.08,.34,.72,-.5,1,.66,n,.03),r.box(.12,.12,.5,.34,.44,-1.12,Xp),r.box(.12,.12,.5,-.34,.44,-1.12,Xp),r.box(.8,.14,.14,0,.5,-.96,Qp),r.round(.16,.1,.05,.38,.72,-1,16774320,.02),r.round(.16,.1,.05,-.38,.72,-1,16774320,.02),r.box(.96,.05,.62,0,1.14,.66,4870754),im(e,r,[-.28,1.63,-.24,16761405]),tm(e,-.62,.34,.34,.62,.3),tm(e,.66,.34,.34,.62,.3),e.blade.add(nm(16763955,4870754,.52)),e}function om(){let e=rm(`heavy`),t=16761375,n=15181069,r=new Z;return r.box(1.36,.28,3.1,0,.56,.2,Qp),r.round(1.42,1.02,1.05,0,1.15,-.8,t,.16),r.round(1.22,.42,.05,0,1.38,-1.33,$p,.02),r.round(.05,.38,.72,.71,1.38,-.8,$p,.02),r.round(.05,.38,.72,-.71,1.38,-.8,$p,.02),r.round(1.5,.1,1.15,0,1.68,-.8,n,.04),r.box(1.5,.1,1.9,0,.88,.76,n),r.round(1.5,.62,.1,0,1.2,1.68,t,.04),r.round(.1,.62,1.9,.72,1.2,.76,t,.04),r.round(.1,.62,1.9,-.72,1.2,.76,t,.04),r.round(1.56,.16,.1,0,1.54,0,n,.03),r.cylinder(.07,.07,1,.82,1.3,-.25,Xp,8),r.round(1.3,.22,.1,0,.7,-1.38,Qp,.03),r.round(.2,.12,.05,.48,.92,-1.34,16774320,.02),r.round(.2,.12,.05,-.48,.92,-1.34,16774320,.02),r.box(.14,.14,.42,.42,.46,-1.5,Xp),r.box(.14,.14,.42,-.42,.46,-1.5,Xp),r.box(1.36,.06,1.78,0,1.4,.76,4870754),im(e,r,[0,1.84,-.8,16742959]),tm(e,-.82,.42,.42,.72,.34),tm(e,.45,.42,.42,.72,.34),tm(e,1.32,.42,.42,.72,.34),e.blade.add(nm(16738859,3686221,.72)),e}function sm(){let e=rm(`blower`),t=15221050,n=12397613,r=new Z;r.round(1.42,.62,2.36,0,.74,.22,t,.2),r.round(1.06,.66,.92,0,1.36,-.26,15922424,.16),r.round(.92,.36,.05,0,1.44,-.73,$p,.02),r.round(.05,.32,.62,.53,1.44,-.26,$p,.02),r.round(.05,.32,.62,-.53,1.44,-.26,$p,.02),r.round(1.14,.1,1,0,1.73,-.26,n,.04),r.drum(.62,1.34,0,1.34,.9,13949410,14),r.box(1.42,.08,.14,0,1.34,1.52,n),r.cylinder(.2,.25,1.06,.84,1,-.86,15922424,10),r.cylinder(.17,.2,.62,1,1.66,-.86,15922424,10,{rz:-.55}),r.cylinder(.2,.15,.28,1.26,1.92,-.86,t,10,{rz:-1.1}),r.box(1.2,.2,.3,0,.56,-1,Qp),im(e,r,[-.4,1.86,-.26,16766282]),tm(e,-.5,.44,.44,.78,.36),tm(e,.98,.44,.44,.78,.36);let i=new Z;i.add(new aa(.42,.42,1,12,1,!0,0,Math.PI),15922424,0,.36,0,{rz:Math.PI/2,rx:Math.PI*.5}),i.box(1,.1,.1,0,.74,.2,t),i.box(1,.08,.2,0,.04,.22,Qp);let a=i.build();a.castShadow=!0,e.blade.add(a);let o=new Z;o.drum(.1,1,0,0,0,Qp,6);for(let e=-5;e<=5;e++)o.box(.05,.56,.1,e*.09,0,0,e%2==0?16766282:15971631,{rx:e*.55});let s=o.build();return s.position.set(0,.36,-.04),e.blade.add(s),e.spinners.push(s),e}function cm(){let e=rm(`industrial`),t=1990322,n=new Z;for(let e of[-1,1]){n.round(.62,.74,3.5,e*1.06,.42,.1,2501430,.32),n.round(.66,.1,2.4,e*1.06,.82,.1,Xp,.04);for(let t=-3;t<=3;t++)n.box(.68,.08,.16,e*1.06,.8,.1+t*.46,4870752)}n.round(1.6,.72,3.1,0,1,.16,3112672,.14),n.round(1.86,.12,3.1,0,1.4,.16,t,.05),n.round(1.44,.9,1.1,0,1.92,-.66,15791096,.14),n.round(1.3,.5,.05,0,2.02,-1.22,$p,.02),n.round(.05,.42,.8,.72,2.02,-.66,$p,.02),n.round(.05,.42,.8,-.72,2.02,-.66,$p,.02),n.round(1.54,.12,1.2,0,2.42,-.66,t,.05);for(let e of[-.5,-.17,.17,.5])n.round(.2,.12,.08,e,2.54,-1.1,16774320,.02);for(let e of[-.62,.62])n.cylinder(.11,.13,1.1,e,2,.3,5266024,8),n.cylinder(.14,.11,.14,e,2.56,.3,Xp,8);return n.round(1.74,.5,.1,0,1.68,1.66,t,.03),n.round(.1,.5,1.2,.84,1.68,1.1,t,.03),n.round(.1,.5,1.2,-.84,1.68,1.1,t,.03),n.box(.2,.2,.9,.6,.66,-1.66,Xp),n.box(.2,.2,.9,-.6,.66,-1.66,Xp),n.box(1.6,.06,1.1,0,1.88,1.1,3818066),im(e,n,[0,2.6,-.66,16756782]),e.blade.add(nm(16054011,2764860,.95)),e}function lm(){let e=rm(`destroyer`),t=15857147,n=4872826,r=4321535,i=new Z;for(let e of[-1,1])i.round(.72,.4,3.5,e*1.28,.48,.2,n,.18),i.round(.3,.1,3,e*1.28,.26,.2,r,.04),i.round(.76,.06,2.2,e*1.28,.7,.3,r,.02),i.cone(.3,1.16,e*1.28,.5,-1.96,n,6,{rx:-Math.PI/2}),i.box(.1,.9,1,e*1.64,1.04,1.5,t,{rz:e*.35});i.round(2,.56,3.2,0,.92,.3,t,.14),i.add(new aa(.01,1.1,1.7,4),t,0,.92,-1.9,{rx:-Math.PI/2,ry:Math.PI/4},1,1,.3),i.round(2.08,.08,3.24,0,1.2,.3,r,.02),i.round(1.14,.62,1.3,0,1.56,-.5,1391974,.26),i.round(.5,.1,1.5,0,1.87,-.2,t,.04),i.drum(.56,1.66,0,1.74,1.12,n,12),i.drum(.6,.1,.5,1.74,1.12,r,12),i.drum(.6,.1,-.5,1.74,1.12,r,12),i.box(.08,.84,.72,.56,2.42,1.48,t,{rx:.4}),i.box(.08,.84,.72,-.56,2.42,1.48,t,{rx:.4}),im(e,i,[0,2.02,-.2,4321535]);let a=new Z;a.box(1,.9,.12,0,.56,.02,14543094,{rx:.22}),a.box(1,.14,.2,0,.1,-.08,r),a.box(1,.1,.16,0,1,-.1,r);let o=a.build();o.castShadow=!0,e.blade.add(o);let s=new Z;s.drum(.08,1,0,0,0,n,6);for(let e=-4;e<=4;e++)s.box(.06,.46,.08,e*.11,0,0,r,{rx:e*.8});let c=s.build();return c.position.set(0,.4,-.2),e.blade.add(c),e.spinners.push(c),e}function um(){let e=rm(`titan`),t=4872814,n=16756782,r=new Z;for(let e of[-1,1]){for(let t of[-1.5,.1,1.7])r.round(.9,.9,1.5,e*1.5,.5,t,2106670,.3),r.round(.94,.14,1.1,e*1.5,.98,t,Xp,.05);r.round(.3,.9,4.6,e*1.05,1.1,.1,t,.08)}r.round(2.6,1,4.4,0,1.3,.1,t,.16),r.round(2.8,.16,4.5,0,1.86,.1,n,.05),r.round(2,1.2,1.6,0,2.6,-.9,15001838,.14),r.round(1.8,.6,.06,0,2.76,-1.72,$p,.02),r.round(2.1,.14,1.7,0,3.26,-.9,t,.05);for(let e of[-.7,-.24,.24,.7])r.round(.26,.14,.08,e,3.42,-1.68,16774320,.02);for(let e of[-.9,.9])r.cylinder(.18,.22,1.7,e,2.7,1.3,5266024,10),r.cylinder(.26,.18,.2,e,3.6,1.3,n,10);return r.drum(.7,2.2,0,2.7,.7,13949410,14),r.box(.3,.3,1.2,.8,.86,-2.3,Xp),r.box(.3,.3,1.2,-.8,.86,-2.3,Xp),im(e,r,[0,3.56,-.9,16756782]),e.blade.add(nm(2896962,16756782,1.3)),e}function dm(){let e=rm(`mech`),t=15265267,n=16734783,r=new Z;r.round(2.2,1.1,2.4,0,3.1,0,t,.24),r.round(2.3,.14,2.5,0,3.2,0,n,.05),r.round(1.3,.8,1.1,0,4.1,-.5,13687010,.22),r.round(1.1,.42,.06,0,4.2,-1.06,16747098,.02);for(let e of[-1,1])r.round(.7,.7,1.5,e*1.5,3.3,0,4870754,.14),r.cylinder(.26,.26,2,e*.7,3.8,1.1,Zp,10,{rx:Math.PI/2}),r.round(.4,1.6,.4,e*1.5,2.2,-1.1,4870754,.1),r.box(.4,.3,1.1,e*1.5,1.2,-1.6,Xp);im(e,r,[0,4.6,-.5,16734783]);for(let[r,i]of[[-1.1,-.9],[1.1,-.9],[-1.1,1.1],[1.1,1.1]]){let a=new Fn;a.position.set(r,2.6,i);let o=new Z;o.round(.46,2.4,.5,0,-1.3,0,4870754,.14),o.round(.86,.3,1.2,0,-2.5,-.1,t,.08),o.round(.6,.6,.6,0,-.1,0,n,.14);let s=o.build();s.castShadow=!0,a.add(s),e.root.add(a),e.legs.push({hip:a,phase:r*i>0?0:Math.PI})}return e.blade.add(nm(t,n,1.5)),e}function fm(){let e=rm(`phantom`),t=2435130,n=11992922,r=new Z;r.add(new aa(.02,1.8,4.6,4),t,0,1.2,-.4,{rx:-Math.PI/2,ry:Math.PI/4},1,1,.42),r.round(3.2,.5,3,0,1.2,1,t,.16),r.round(3.3,.08,3.1,0,1.46,1,n,.02),r.round(1.5,.6,1.8,0,1.76,.2,3493994,.26);for(let e of[-1,1])r.round(.8,.34,3.8,e*1.9,.55,.6,3817044,.14),r.round(.5,.08,3.4,e*1.9,.34,.6,n,.03),r.box(.12,1.3,1.4,e*1.5,2.1,2,t,{rz:e*.5}),r.box(.14,.1,1.3,e*1.84,2.72,2,n,{rz:e*.5});r.drum(.62,1.9,0,1.9,1.9,3817044,14),r.drum(.66,.1,.6,1.9,1.9,n,14),r.drum(.66,.1,-.6,1.9,1.9,n,14),im(e,r,[0,2.2,.2,11992922]);let i=new Z;i.box(1,1,.12,0,.62,.02,3817044,{rx:.22}),i.box(1,.16,.2,0,.1,-.08,n),i.box(1,.1,.16,0,1.12,-.12,n);let a=i.build();a.castShadow=!0,e.blade.add(a);let o=new Z;o.drum(.1,1,0,0,0,t,6);for(let e=-4;e<=4;e++)o.box(.06,.56,.1,e*.11,0,0,n,{rx:e*.8});let s=o.build();return s.position.set(0,.46,-.24),e.blade.add(s),e.spinners.push(s),e}function pm(){let e=rm(`omega`),t=2760736,n=16761902,r=new Z;for(let e of[-1,1]){r.round(1.1,1.2,6.4,e*2.05,.66,.3,1512210,.46);for(let t=-4;t<=4;t++)r.box(1.16,.1,.24,e*2.05,1.26,.3+t*.66,4866106);r.round(.3,.5,5.8,e*1.42,1.5,.3,n,.1)}r.round(3.2,1.3,6,0,1.6,.3,t,.2),r.round(3.4,.2,6.1,0,2.3,.3,n,.06),r.round(2.5,1.5,2.3,0,3.3,-1,3813164,.2),r.round(2.2,.7,.08,0,3.5,-2.16,16752687,.03),r.round(2.6,.2,2.4,0,4.14,-1,n,.06);for(let e of[-1,-.34,.34,1])r.round(.34,.18,.08,e,4.3,-2.1,16774320,.02);for(let e of[-1.1,0,1.1])r.cylinder(.26,.32,2.2,e,3.5,2.2,4866106,10),r.cylinder(.36,.26,.26,e,4.7,2.2,n,10);r.drum(1,2.8,0,3.4,.9,4866106,16);for(let e of[-1,0,1])r.drum(1.04,.14,e,3.4,.9,n,16);im(e,r,[0,4.5,-1,16734762]);let i=new Z;i.box(1,1.7,.16,0,1,.3,t,{rx:.1}),i.box(1,.2,.3,0,1.9,.2,n),i.box(1,.16,.34,0,.1,.24,n);let a=i.build();a.castShadow=!0,e.blade.add(a);let o=new Z;o.drum(.28,1,0,0,0,4866106,8);for(let e=-5;e<=5;e++)o.box(.07,1.3,.2,e*.09,0,0,n,{rx:e*.7});let s=o.build();return s.position.set(0,.9,0),e.blade.add(s),e.spinners.push(s),e}var mm={basic:am,heavy:om,blower:sm,industrial:cm,destroyer:lm,titan:um,mech:dm,phantom:fm,omega:pm};function hm(e){return mm[e]()}var gm=class{constructor(e,t){X(this,`group`,new Fn),X(this,`trailer`,void 0),X(this,`model`,void 0),X(this,`id`,void 0),X(this,`bladeWidth`,1),X(this,`bladeLift`,0),X(this,`ride`,0),X(this,`time`,0),X(this,`spin`,0),X(this,`pulse`,0),X(this,`lean`,0),X(this,`lastHeading`,0),X(this,`lastSection`,0),X(this,`stride`,0),X(this,`wave`,void 0),X(this,`waveAmount`,0),X(this,`x`,0),X(this,`z`,0),this.id=e,this.model=hm(e),this.group.add(this.model.root),this.bladeWidth=t,this.trailer=new qp(e),this.attachWave()}attachWave(){let e=new Z;for(let t=-4;t<=4;t++){let n=t%2==0;e.blob(n?.34:.27,t*.105,n?.13:.1,n?0:-.1,16777215,.3,.9,1,1)}let t=new Wo({flatShading:!0});this.wave=new q(e.geometry(),t),this.wave.position.z=-.3,this.wave.visible=!1,this.model.blade.add(this.wave)}setVehicle(e){e!==this.id&&(this.group.remove(this.model.root),hf(this.model.root),this.id=e,this.model=hm(e),this.group.add(this.model.root),this.trailer.setVehicle(e),this.attachWave(),this.celebrate())}celebrate(){this.pulse=1}update(e,t,n,r){let{vehicle:i,stats:a,state:o}=n,{model:s}=this;this.time+=e,this.x=i.prevX+(i.x-i.prevX)*t,this.z=i.prevZ+(i.z-i.prevZ)*t;let c=i.heading-i.prevHeading;c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2);let l=i.prevHeading+c*t,u=r(this.x,this.z)*.55;this.ride+=(u-this.ride)*Math.min(1,e*10),this.group.position.set(this.x,this.ride+.02,this.z),this.group.rotation.y=-l;let d=i.speed/.42;for(let t of s.axles)t.rotation.x-=d*e;this.stride+=i.speed*e*1.5;for(let e of s.legs)e.hip.rotation.x=Math.sin(this.stride+e.phase)*Math.min(.5,i.speed*.12);s.legs.length>0&&(s.body.position.y=Math.abs(Math.sin(this.stride))*Math.min(.14,i.speed*.03));let f=n.clearing.contact,p=f*(.35+(1-n.clearing.effectiveness)*1.6)*.022;s.legs.length===0&&(s.body.position.y=Math.sin(this.time*47)*p+Math.sin(this.time*11)*.006),s.body.rotation.x=Math.sin(this.time*31)*p*.7-i.speed*.0022;let m=(i.heading-this.lastHeading)/Math.max(e,.001);this.lastHeading=i.heading;let h=Math.abs(m)>30?0:m;this.lean+=(h*-.018*Math.min(1,i.speed/4)-this.lean)*Math.min(1,e*8),s.body.rotation.z=this.lean,this.bladeWidth+=(a.width-this.bladeWidth)*Math.min(1,e*9);let g=+!!n.full;this.bladeLift+=(g-this.bladeLift)*Math.min(1,e*7);let _=f>0?Math.sin(this.time*55)*.012:0;s.blade.scale.set(this.bladeWidth,1,1),s.blade.position.y=this.bladeLift*.42+_,s.blade.rotation.x=this.bladeLift*-.22,this.spin+=(f>0?26:i.speed>.2?9:2)*e;for(let e of s.spinners)e.rotation.x=this.spin;let v=a.capacity>0?Math.min(1,o.cargoQuantity/a.capacity):0,y=n.clearing.section>=0?n.clearing.section:this.lastSection;this.lastSection=y;let b=ad[n.level.sections[Math.min(y,n.level.sections.length-1)].type].topColor,x=ad[n.level.sections[Math.min(y,n.level.sections.length-1)].type];if(this.waveAmount+=(Math.min(1,f*1.3)-this.waveAmount)*Math.min(1,e*5),this.wave.visible=this.waveAmount>.03,this.wave.visible){let e=this.waveAmount*(.75+x.height*.75),t=1+Math.sin(this.time*19)*.05+Math.sin(this.time*31)*.04;this.wave.scale.set(1,e*t,e*(2-t)),this.wave.material.color.setHex(x.topColor)}if(this.trailer.update(e,this.x,this.z,Math.sin(l),-Math.cos(l),v,o.upgrades.capacity,b,i.speed,r),s.beacon){let e=Math.sin(this.time*9)>0;s.beacon.scale.setScalar(e?1.15:.7)}if(this.pulse>0){this.pulse=Math.max(0,this.pulse-e*2.8);let t=Math.sin(this.pulse*Math.PI*2.5)*this.pulse*.16;s.root.scale.set(1-t*.6,1+t,1-t*.6)}else s.root.scale.setScalar(1)}get bladeLoad(){return this.waveAmount}bladeOffset(){return vd[this.id].bladeOffset}get currentId(){return this.id}};function _m(e){let t=new rn(192,192,{samples:4,colorSpace:Ge}),n=new Wn;n.add(new ms(16777215,12112104,2.2));let r=new ks(16777215,2.2);r.position.set(3,6,4),n.add(r);let i=new Es(26,1,.1,50),a=document.createElement(`canvas`);a.width=a.height=192;let o=a.getContext(`2d`),s=new Uint8Array(147456),c={},l=e.getRenderTarget(),u=e.getClearAlpha();e.setClearAlpha(0);for(let r of Object.keys(vd)){let l=hm(r);l.blade.scale.x=vd[r].bladeWidth,n.add(l.root);let u=4.2+vd[r].bladeWidth*.75;if(i.position.set(u*.95,u*.8,u*-.95),i.lookAt(0,.8,-.2),e.setRenderTarget(t),e.clear(),e.render(n,i),e.readRenderTargetPixels(t,0,0,192,192,s),o){let e=o.createImageData(192,192);for(let t=0;t<192;t++)e.data.set(s.subarray((191-t)*192*4,(192-t)*192*4),t*192*4);o.putImageData(e,0,0),c[r]=a.toDataURL(`image/png`)}n.remove(l.root),hf(l.root)}return e.setRenderTarget(l),e.setClearAlpha(u),t.dispose(),c}var vm=16764730,ym=14260754;function bm(e){e.round(1,.55,.7,0,.28,0,10116916,.05),e.round(1.04,.28,.74,0,.72,0,11826239,.1),e.box(1.08,.08,.1,0,.56,.34,vm),e.box(.12,.8,.78,-.34,.4,0,ym),e.box(.12,.8,.78,.34,.4,0,ym),e.round(.2,.22,.08,0,.54,.38,vm,.03)}function xm(e){e.add(new Oo(.55,0),10189823,0,.62,0,{},1,1.25,1),e.add(new Oo(.28,0),14207487,.05,.75,.2,{},1,1.2,1)}function Sm(e){e.round(.95,.95,.95,0,.5,0,vm,.12),e.box(.98,.07,.98,0,.5,0,ym),e.box(.07,.98,.98,0,.5,0,ym),e.round(.3,.1,.3,.2,1,.2,16774328,.04)}function Cm(e){e.round(2.3,.5,1.1,0,.55,0,14829631,.2),e.round(1.25,.46,.96,-.1,1,0,13056563,.18),e.round(.54,.34,1,-.1,1.02,0,8377584,.05),e.round(1.28,.32,.5,-.1,1.02,0,8377584,.05);for(let[t,n]of[[-.74,.52],[.74,.52],[-.74,-.52],[.74,-.52]])e.drum(.26,.2,t,.28,n,2764602,12),e.drum(.13,.22,t,.28,n,14278632,8);e.round(.16,.14,.2,1.14,.62,.34,16774320,.04),e.round(.16,.14,.2,1.14,.62,-.34,16774320,.04),e.round(2.4,.08,1.14,0,.42,0,15922424,.03)}var wm={chest:bm,gem:xm,golden:Sm,car:Cm},Tm={chest:.9,gem:.85,golden:.95,car:1.05},Em={chest:.95,gem:1.1,golden:1.25,car:1.9},Dm=new Map;function Om(e){let t=Dm.get(e);if(!t){let n=new Z;wm[e](n),t=n.geometry(),Dm.set(e,t)}return t}var km=class{constructor(){X(this,`group`,new Fn),X(this,`reveals`,[])}reveal(e,t,n){let r=new Fn,i=new q(Om(e),cf);i.castShadow=!0,r.add(i),r.position.set(t,.1,n),r.scale.setScalar(.001);let a=null,o=null;e===`car`&&(o=new Wo({color:10479871,transparent:!0,opacity:.45,flatShading:!0,depthWrite:!1}),a=new q(new Do(1.75,0),o),a.position.y=.7,a.scale.set(1,.75,.75),r.add(a)),this.group.add(r),this.reveals.push({holder:r,time:0,life:Em[e],size:Tm[e],spin:e===`car`?1.4:5,rise:e===`car`?1.6:2,ice:a,iceMaterial:o})}update(e){for(let t=this.reveals.length-1;t>=0;t--){let n=this.reveals[t];n.time+=e;let r=Math.min(1,n.time/n.life),i=Math.min(1,r*5),a=1+Math.sin(i*Math.PI)*.35,o=r>.8?1-(r-.8)/.2:1;n.holder.scale.setScalar(Math.max(.001,n.size*i*a*o)),n.holder.position.y=.1+(1-(1-Math.min(1,r*2.2))**3)*n.rise,n.holder.rotation.y+=n.spin*e,n.ice&&n.iceMaterial&&(n.iceMaterial.opacity=Math.max(0,.45*(1-r*2)),n.ice.scale.setScalar(1+r*.7),n.ice.scale.y=.75+r*.5),r>=1&&(this.group.remove(n.holder),n.ice&&n.ice.geometry.dispose(),n.iceMaterial?.dispose(),this.reveals.splice(t,1))}}},Am=2764602,jm=9413557,Mm=8377584,Nm=16186367,Pm=16761902;function Fm(e,t,n,r,i=Am){for(let a of t)for(let t of[-1,1])e.cylinder(r,r,.32,a,r,t*n,i,12,{rx:Math.PI/2}),e.cylinder(r*.45,r*.45,.34,a,r,t*n,12109008,8,{rx:Math.PI/2})}function Im(e,t,n){e.round(1.5,1.5,1.8,t,1.25,0,n,.18),e.round(.08,.7,1.55,t+.74,1.5,0,Mm,.03);for(let n of[-1,1])e.round(.7,.55,.06,t+.08,1.5,n*.9,Mm,.02);e.round(.1,.16,.26,t+.76,.76,.66,16773296,.02),e.round(.1,.16,.26,t+.76,.76,-.66,16773296,.02),e.round(1.3,.2,1.5,t,2.05,0,Nm,.08)}function Lm(e,t,n,r,i){let a=[];for(let o=0;o<t;o++)for(let t of r)a.push([e-o*n,i,t]);return a}function Rm(e,t,n,r,i,a,o){let s=new Z;s.box(a,.05,.28,0,0,0,Am),s.box(.28,.05,a,0,0,0,Am);let c=s.build();c.position.set(n,r,i),e.add(c),t.push(e=>{c.rotation.y=e*o})}var zm=[{id:`flatbed`,name:`Flatbed Truck`,rarity:`common`,weight:20,speed:12,y:0,slots:Lm(.2,3,.8,[-.42,.42],1.22),build(e){Fm(e,[1.5,-.5,-1.6],.86,.42),Im(e,1.7,3116522),e.box(3.2,.14,1.9,-.6,.8,0,7033408),e.box(3.2,.2,1.3,-.6,.62,0,Am)}},{id:`boxTruck`,name:`Box Truck`,rarity:`common`,weight:18,speed:12,y:0,slots:Lm(.1,2,1,[-.4,.4],1.5),build(e){Fm(e,[1.5,-1.2],.86,.42),Im(e,1.7,14829631),e.round(3.2,2.1,2,-.65,1.75,0,15922424,.08),e.box(3.24,.3,2.04,-.65,1.2,0,14829631),e.round(3,.16,1.85,-.65,2.86,0,Nm,.08)}},{id:`pickup`,name:`Pickup`,rarity:`common`,weight:16,speed:13,y:0,slots:Lm(-.5,2,.75,[0],1.14),build(e){Fm(e,[1,-1],.8,.38),e.round(3.6,.6,1.7,0,.72,0,2670438,.14),e.round(1.2,.8,1.55,.45,1.3,0,2336088,.14),e.round(.06,.55,1.35,1.03,1.3,0,Mm,.02),e.box(1.7,.06,1.5,-.95,1.03,0,Am),e.round(1,.1,1.3,.45,1.75,0,Nm,.05)}},{id:`van`,name:`Delivery Van`,rarity:`common`,weight:12,speed:12,y:0,slots:[[.5,2.28,0],[-.3,2.28,0],[-1.1,2.28,0]],build(e){Fm(e,[1.1,-1.1],.84,.38),e.round(4,1.5,1.85,0,1.2,0,15765548,.22),e.round(.08,.55,1.5,1.98,1.42,0,Mm,.03);for(let t of[-1,1])e.round(.8,.5,.06,1.2,1.45,t*.93,Mm,.02);e.box(3.4,.08,1.6,-.3,1.98,0,jm)}},{id:`semi`,name:`Long Hauler`,rarity:`uncommon`,weight:8,speed:11,y:0,slots:Lm(-.2,5,.95,[-.45,.45],1.48),build(e){Fm(e,[3.4,2.1,-3.1,-4.1],.86,.46),Im(e,3.5,9590502),e.round(.8,1.4,.5,2.4,2,.75,8150256,.1),e.box(6.6,.16,2,-1.2,1.05,0,5529711),e.box(6.6,.3,1.3,-1.2,.82,0,Am);for(let t of[-1,1])e.box(6.6,.3,.05,-1.2,1.25,t,16761902)}},{id:`snowcat`,name:`Snowcat`,rarity:`uncommon`,weight:7,speed:9,y:0,slots:Lm(-.5,2,.85,[-.42,.42],1.34),build(e){for(let t of[-1,1])e.round(4.2,.72,.62,0,.36,t*1.05,Am,.24);e.round(3.8,.34,1.7,0,.84,0,14829631,.06),e.round(1.4,1.2,1.6,1.05,1.5,0,14829631,.14),e.round(.06,.65,1.35,1.75,1.6,0,Mm,.02),e.round(1.2,.1,1.4,1.05,2.15,0,Nm,.05),e.box(.14,.7,2.6,2.4,.4,0,jm,{rz:.2})}},{id:`dumpTruck`,name:`Dump Truck`,rarity:`uncommon`,weight:5,speed:10,y:0,slots:[[-.3,1.82,-.42],[-.3,1.82,.42],[-1.2,1.82,-.42],[-1.2,1.82,.42],[-.75,2.5,0]],build(e){Fm(e,[1.9,-.8,-1.9],.94,.56),Im(e,2,16763955),e.box(3.5,.2,2.1,-.7,1.25,0,5529711);for(let t of[-1,1])e.box(3.5,1,.1,-.7,1.8,t*1.03,14260754);e.box(.1,1,2.1,-2.42,1.8,0,14260754),e.box(.1,1,2.1,1,1.8,0,14260754)}},{id:`tractor`,name:`Farm Tractor`,rarity:`uncommon`,weight:4,speed:8,y:0,slots:Lm(-2.2,2,.8,[-.4,.4],.92),build(e){for(let t of[-1,1])e.cylinder(.72,.72,.36,-.2,.72,t*.82,Am,14,{rx:Math.PI/2}),e.cylinder(.38,.38,.28,1.2,.38,t*.68,Am,12,{rx:Math.PI/2});e.round(1.9,.8,.9,.6,1.05,0,2662480,.12),e.round(.9,1.3,1.1,-.35,1.5,0,2662480,.1),e.round(.92,.7,1.12,-.35,1.8,0,Mm,.05),e.cylinder(.05,.08,.8,1.2,1.8,0,jm,6),e.box(1,.08,.08,-1.3,.48,0,Am),e.box(2.2,.1,1.6,-2.6,.52,0,7033408);for(let t of[-1,1])e.box(2.4,.08,.1,-2.6,.2,t*.7,jm)}},{id:`hovercraft`,name:`Hovercraft`,rarity:`rare`,weight:3,speed:13,y:.3,slots:Lm(-.4,2,.85,[-.42,.42],1.08),build(e){e.round(4.6,.6,2.5,0,.3,0,Am,.28),e.round(4.2,.2,2.1,0,.66,0,3126724,.08),e.round(1.2,.9,1.5,1.25,1.2,0,3126724,.2),e.round(.06,.45,1.2,1.84,1.3,0,Mm,.02);for(let t of[-1,1])e.cylinder(.62,.62,.2,-2.15,1.3,t*.68,5529711,14,{rz:Math.PI/2})},animate(e,t){Bm(e,t)}},{id:`cargoHeli`,name:`Cargo Helicopter`,rarity:`rare`,weight:2.5,speed:10,y:5.5,slots:[[0,-1.6,-.42],[0,-1.6,.42],[-.8,-1.6,0],[.8,-1.6,0]],build(e){e.round(3.6,1.5,1.5,0,0,0,5208639,.4),e.round(.8,.9,1.2,1.7,.1,0,Mm,.24),e.round(3,.4,.34,-3,.4,0,4615736,.1),e.box(.14,1.3,.6,-4.4,.9,0,15922424);for(let t of[-1,1])e.box(2.6,.08,.1,0,-1,t*.7,Am);for(let[t,n]of[[-1,-.7],[1,-.7],[-1,.7],[1,.7]])e.cylinder(.02,.02,1.5,t*.6,-1.3,n,Am,4);e.box(2.3,.08,1.9,0,-2,0,7033408)},animate(e,t){Rm(e,t,0,1.02,0,6.4,20)}},{id:`dogSled`,name:`Husky Sled`,rarity:`rare`,weight:1.5,speed:7,y:0,slots:[[-2.1,.74,0],[-2.8,.74,0]],build(e){for(let t of[-1,1])e.box(2.8,.06,.1,-2.4,.08,t*.46,13161439);e.box(2.2,.12,.95,-2.4,.34,0,9071180),e.round(.14,1,.14,-3.5,.74,0,5915184,.04),e.box(.12,.08,.96,-3.5,1.2,0,5915184),e.round(.42,.72,.42,-3.72,.76,0,14829631,.1),e.blob(.2,-3.72,1.32,0,16767416,1,1,1,1),e.cone(.22,.32,-3.72,1.52,0,3116522,8),e.box(4.6,.03,.03,.9,.42,0,Am);for(let t=0;t<6;t++){let n=-.45+(t%2,0)+Math.floor(t/2)*1.35,r=t%2?.28:-.28,i=t%3==0?5529711:9279395;e.blob(.2,n,.4,r,i,1.6,.9,.85,1),e.blob(.15,n+.36,.56,r,15922424,1,1,.9,1),e.cone(.05,.13,n+.3,.73,r+.07,i,4),e.cone(.05,.13,n+.3,.73,r-.07,i,4);for(let[t,a]of[[.2,-.09],[.2,.09],[-.2,-.09],[-.2,.09]])e.cylinder(.03,.035,.28,n+t,.14,r+a,i,5)}}},{id:`blimp`,name:`Cargo Airship`,rarity:`rare`,weight:1.5,speed:6,y:8,slots:Lm(.6,3,.85,[-.42,.42],-3.1),build(e){e.blob(2.2,0,0,0,15922424,2.3,.95,1,2);for(let t=-2;t<=2;t++)e.cylinder(.02,.02,.02,t,0,0,Am,3);e.box(.9,1.5,.08,-4.6,.3,0,14829631),e.box(.9,.08,1.5,-4.6,0,0,14829631),e.round(3.1,.75,1.3,0,-2.45,0,14829631,.16),e.box(3,.08,1.9,0,-3.5,0,7033408);for(let[t,n]of[[-1.3,.8],[1.3,.8],[-1.3,-.8],[1.3,-.8]])e.cylinder(.02,.02,.8,t,-3.1,n,Am,4)}},{id:`goldenTruck`,name:`Golden Truck`,rarity:`veryRare`,weight:.5,speed:13,y:0,slots:Lm(.2,3,.8,[-.42,.42],1.22),build(e){Fm(e,[1.5,-.5,-1.6],.86,.42,9070868),e.round(1.5,1.5,1.8,1.7,1.25,0,Pm,.18),e.round(.08,.7,1.55,2.44,1.5,0,16774344,.03);for(let t of[-1,1])e.round(.7,.55,.06,1.78,1.5,t*.9,16774344,.02);e.box(3.2,.14,1.9,-.6,.8,0,14723096),e.box(3.2,.2,1.3,-.6,.62,0,12092942),e.cone(.26,.42,1.7,2.2,0,16773280,5);for(let t of[-1,1])e.box(3.2,.3,.05,-.6,1,t,Pm)}},{id:`ufo`,name:`Flying Saucer`,rarity:`veryRare`,weight:.4,speed:16,y:7,slots:[[.75,-.55,0],[-.75,-.55,0],[0,-.55,.75],[0,-.55,-.75]],build(e){e.blob(2.6,0,0,0,12898008,1,.26,1,2),e.blob(1.2,0,.45,0,9430980,1,.8,1,2);for(let t=0;t<10;t++){let n=t/10*Math.PI*2;e.blob(.14,Math.cos(n)*2.25,-.08,Math.sin(n)*2.25,16769658,1,1,1,0)}},animate(e,t){let n=new gi({color:10485724,transparent:!0,opacity:.22,depthWrite:!1,side:2}),r=new q(new aa(.5,1.7,7,16,1,!0),n);r.position.y=-3.5,e.add(r),t.push(t=>{n.opacity=.16+Math.sin(t*5)*.08,e.rotation.y+=.015})}},{id:`flyingSleigh`,name:`Flying Sleigh`,rarity:`veryRare`,weight:.4,speed:11,y:6.5,slots:[[-2.5,.9,-.34],[-2.5,.9,.34],[-3.2,.9,0]],build(e){for(let t of[-1,1])e.box(3.2,.08,.12,-2.8,-.4,t*.62,Pm);e.round(3,.9,1.4,-2.8,.1,0,13056047,.26),e.round(.3,1.2,1.4,-1.25,.4,0,13056047,.1),e.box(3,.1,1.44,-2.8,.58,0,Pm),e.box(4.4,.03,.03,.6,.2,0,6243120);for(let t=0;t<4;t++){let n=Math.floor(t/2)*2+.2,r=t%2?.38:-.38;e.blob(.3,n,.3,r,9069120,1.7,.85,.75,1),e.blob(.2,n+.6,.72,r,10121288,1.1,.95,.85,1),e.cylinder(.08,.1,.4,n+.4,.48,r,9069120,6,{rz:-.5});for(let t of[-1,1])e.cylinder(.015,.03,.42,n+.55,1,r+t*.12,15260872,4,{rx:t*.5});for(let[t,i]of[[.32,-.12],[.32,.12],[-.34,-.12],[-.34,.12]])e.cylinder(.04,.05,.42,n+t,-.08,r+i,7294772,5,{rz:.45})}e.blob(.07,2.84,.75,.38,16726576,1,1,1,0)}},{id:`yeti`,name:`Yeti Courier`,rarity:`veryRare`,weight:.2,speed:10,y:0,slots:[[-2.4,.66,0],[-3.1,.66,0],[-2.75,1.36,0]],build(e){let t=15791867;for(let t of[-1,1])e.box(3.2,.05,.2,0,.05,t*.42,3116522);for(let n of[-1,1])e.blob(.32,-.1,.42,n*.42,t,1,1.4,1,1);e.blob(.92,0,1.75,0,t,.92,1.12,1.02,2),e.blob(.56,.26,2.98,0,t,1,.95,1,2),e.round(.1,.46,.62,.76,3,0,4882342,.05);for(let n of[-1,1])e.blob(.04,.82,3.1,n*.16,16777215,1,1,1,0),e.cone(.09,.28,.08,3.5,n*.32,14208960,5,{rx:n*-.35}),e.blob(.27,.28,2,n*.98,t,1.8,.85,.85,1),e.cylinder(.025,.025,2.1,.92,1.04,n*1.05,6057344,5,{rz:.2});e.box(2.6,.03,.03,-1.1,.4,0,Am);for(let t of[-1,1])e.box(2.2,.05,.1,-2.75,.06,t*.46,13161439);e.box(1.9,.1,1,-2.75,.26,0,9071180)}}];function Bm(e,t){for(let n of[-1,1]){let r=new Z;r.box(.05,1.05,.14,0,0,0,Am),r.box(.05,.14,1.05,0,0,0,Am);let i=r.build();i.position.set(-2.26,1.3,n*.68),e.add(i),t.push(e=>{i.rotation.x=e*16})}}function Vm(e,t=!1){let n=t?zm.filter(e=>e.rarity===`common`):zm,r=n.reduce((e,t)=>e+t.weight,0),i=e()*r;for(let e of n)if(i-=e.weight,i<=0)return e;return n[n.length-1]}var Hm=19,Um=8.3,Wm=12.4,Gm=17.2,Km=2.2,qm=.56,Jm=.72,Ym=.72,Xm=.92,Zm=24,Qm=96,$m=6,eh=2,th=.42,nh=72,rh=16;function ih(e,t,n){let r=new za;r.absarc(0,0,t,Math.PI/2,Math.PI,!1),r.absarc(0,0,e,Math.PI,Math.PI/2,!0);let i=new wo(r,{depth:n,bevelEnabled:!1,curveSegments:dh});return i.rotateX(-Math.PI/2),i}var ah=22,oh=88,sh=5,ch=140,lh=69,uh=12,dh=24,fh=78,ph={x:7.7,y:2.1,z:Hm};function mh(){let e=[[ah,oh],[ah,17]];for(let t=1;t<=dh;t++){let n=t/dh*(Math.PI/2);e.push([34-Math.cos(n)*uh,17-Math.sin(n)*uh])}e.push([ch,sh]);let t=0;return e.map(([n,r],i)=>(i>0&&(t+=Math.hypot(n-e[i-1][0],r-e[i-1][1])),{x:n,z:r,at:t}))}var hh=new sn,gh=new W,_h=new Lt,vh=new W,yh=new W(0,1,0),bh=new K,xh=new K(13212255),Sh=new K,Ch=class{constructor(e=Math.random){X(this,`group`,new Fn),X(this,`events`,{}),X(this,`watching`,!1),X(this,`demand`,0),X(this,`nextVehicle`,null),X(this,`random`,void 0),X(this,`queue`,[]),X(this,`blocks`,[]),X(this,`crates`,[]),X(this,`path`,mh()),X(this,`models`,new Map),X(this,`blockMesh`,void 0),X(this,`crateMesh`,void 0),X(this,`pileMesh`,void 0),X(this,`cleats`,void 0),X(this,`pressHead`,void 0),X(this,`loaderArm`,void 0),X(this,`vehicle`,null),X(this,`time`,0),X(this,`held`,0),X(this,`holdTimer`,0),X(this,`pressTimer`,-1),X(this,`heldColor`,16777215),X(this,`releaseTimer`,0),X(this,`loadTimer`,0),X(this,`beltPhase`,0),X(this,`passerTimer`,void 0),X(this,`shineTimer`,0),this.random=e,this.passerTimer=12+e()*16,this.group.add(this.buildRoad(),this.buildPlant());let t=new Z;t.round(1,1,1,0,0,0,16777215,.12),this.blockMesh=new zi(t.geometry(),cf,rh),this.blockMesh.frustumCulled=!1,this.blockMesh.count=0,this.blockMesh.castShadow=!0;let n=new Z;n.box(1,1,1,0,0,0,16777215);for(let e of[-.4,.4])n.box(1.04,.14,1.04,0,e,0,11579568);for(let e of[-.4,.4])n.box(.14,1.04,1.04,e,0,0,12895428);let r=n.geometry();this.crateMesh=new zi(r,cf,nh),this.crateMesh.frustumCulled=!1,this.crateMesh.count=0,this.crateMesh.castShadow=!0,this.pileMesh=new zi(r,cf,Qm),this.pileMesh.frustumCulled=!1,this.pileMesh.count=0,this.pileMesh.castShadow=!0,this.placePile();let i=new Z;i.box(.08,.05,1.08,0,0,0,5529711),this.cleats=new zi(i.geometry(),cf,18),this.cleats.frustumCulled=!1;let a=new Z;a.round(1.15,.34,1.2,0,0,0,14829631,.05),a.box(.32,.9,.32,0,.56,0,jm),this.pressHead=a.build(),this.pressHead.position.set(Wm,2.2,Hm),this.pressHead.castShadow=!0;let o=new Z;o.cylinder(.2,.2,.24,0,0,0,15765548,10),o.box(3.6,.22,.22,1.5,.18,0,16763955),o.box(.05,.9,.05,3.1,-.28,0,Am),o.round(.46,.14,.46,3.1,-.76,0,Am,.03),this.loaderArm=o.build(),this.loaderArm.position.set(17.3,3.1,17.9),this.loaderArm.castShadow=!0,this.group.add(this.blockMesh,this.crateMesh,this.pileMesh,this.cleats,this.pressHead,this.loaderArm),this.placeCleats()}buildRoad(){let e=new Z,t=8095636,n=2.3,r=74.5;e.box(n*2,.24,115,ah,-.16,r,t),e.box(106,.24,n*2,87,-.16,sh,t),e.add(ih(9.7,14.3,.24),t,34,-.28,17);for(let t of[-1,1]){let n=t*2.25;e.box(.3,.2,115,ah+n,-.02,r,Nm),e.box(106,.2,.3,87,-.02,sh+n,Nm),e.add(ih(uh+n-.15,uh+n+.15,.2),Nm,34,-.12,17)}for(let t=18.5;t<130;t+=3)e.box(.14,.02,1.4,ah,-.03,t,15913546);for(let t=35.5;t<ch;t+=3)e.box(1.4,.02,.14,t,-.03,sh,15913546);let i=Math.PI/2,a=Math.round(i*uh/3);for(let t=0;t<a;t++){let n=(t+.5)/a*i;e.box(.14,.02,1.4,34-Math.cos(n)*uh,-.03,17-Math.sin(n)*uh,15913546,{ry:-n})}for(let t=20;t<130;t+=7)for(let n of[-1,1])e.cylinder(.16,.2,1.6,ah+n*1.9,-.9,t,5529711,7);for(let t=37;t<ch;t+=7)for(let n of[-1,1])e.cylinder(.16,.2,1.6,t,-.9,sh+n*1.9,5529711,7);for(let t=0;t<3;t++){let n=(t+.5)/3*i;for(let t of[-1,1]){let r=uh+t*1.9;e.cylinder(.16,.2,1.6,34-Math.cos(n)*r,-.9,17-Math.sin(n)*r,5529711,7)}}let o=e.build();return o.receiveShadow=!0,o}buildPlant(){let e=new Z,t=5529711;e.box(11.4,.05,6.8,12.3,.015,19.8,12174544);for(let t of[16.5,23.1])e.box(11.4,.03,.14,12.3,.05,t,15770426);e.box(.14,.03,6.8,6.65,.05,19.8,15770426),e.cylinder(.95,.42,.9,ph.x,1.72,ph.z,3839468,8),e.cylinder(1,1,.1,ph.x,2.17,ph.z,2253748,8);for(let[n,r]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]])e.box(.12,1.4,.12,ph.x+n,.7,ph.z+r,t);let n=25.5/2,r=9.799999999999999;e.box(r,.12,1.12,n,.74,Hm,Am);for(let t of[-1,1])e.box(r,.26,.09,n,.77,Hm+t*.6,jm);for(let n of[7.8500000000000005,17.65])e.cylinder(.14,.14,1.16,n,.74,Hm,t,10,{rx:Math.PI/2});for(let n=Um;n<=Gm;n+=1.5)for(let r of[-1,1])e.box(.12,.7000000000000001,.12,n,.7000000000000001/2,Hm+r*.52,t);for(let[t,n]of[[-.75,-.72],[.75,-.72],[-.75,.72],[.75,.72]])e.round(.18,3.2,.18,Wm+t,1.6,Hm+n,jm,.04);e.round(1.9,.34,1.78,Wm,3.3,Hm,15765548,.06),e.round(1.84,.14,1.72,Wm,3.54,Hm,Nm,.06),e.box(1.9,.14,.05,Wm,3.2,19.9,Am),e.box(10.4,.06,2.5,12.4,.05,21.6,9411755),e.cylinder(.16,.26,3,17.3,1.5,17.9,t,8);let i=e.build();return i.castShadow=!0,i.receiveShadow=!0,i}placePile(){let e=[];for(let t=0;t<3;t++)for(let n=0;n<12;n++)for(let r=0;r<3;r++){let i=n-11/2;e.push([Math.abs(i)+t*6,i*.8,r,t])}e.sort((e,t)=>e[0]-t[0]);for(let t=0;t<Qm;t++){let[,n,r,i]=e[t];hh.compose(gh.set(12.4+n,.42+i*.76,20.8+r*.8),_h.identity(),vh.setScalar(Ym)),this.pileMesh.setMatrixAt(t,hh),this.pileMesh.setColorAt(t,xh)}this.pileMesh.instanceMatrix.needsUpdate=!0}setWarehouse(e){let t=e<=0?0:Math.max(1,Math.round(Math.min(1,e)*Qm));t!==this.pileMesh.count&&(this.pileMesh.count=t)}get pileCount(){return this.pileMesh.count}placeCleats(){let e=this.cleats.count,t=e*.55;for(let n=0;n<e;n++){let e=7.9+(n*.55+this.beltPhase)%t;hh.makeTranslation(e,.8200000000000001,Hm),this.cleats.setMatrixAt(n,hh)}this.cleats.instanceMatrix.needsUpdate=!0}feed(e){this.queue.length<Zm&&this.queue.push(e)}get busy(){return this.queue.length>0||this.blocks.length>0||this.crates.length>0||this.held>0||this.pressTimer>=0}get activeVehicle(){return this.vehicle?.config??null}get crateCount(){return this.crates.length}get cratesInProgress(){return this.crates.length+(this.vehicle?.flying.length??0)+Math.ceil((this.queue.length+this.blocks.length+this.held)/eh)}update(e){if(e<=0)return;this.time+=e,this.fillBelt(),this.updateRoad(e);let t=this.updateBelt(e);this.updatePress(e),t&&(this.beltPhase+=Km*e,this.placeCleats()),this.loaderArm.rotation.y=this.vehicle?.state===`loading`?Math.sin(this.time*5)*.22:Math.sin(this.time*.5)*.08,this.writeInstances()}fillBelt(){this.cratesInProgress>=Math.min(this.demand,$m)||(this.feed(15398655),this.feed(15398655))}updateBelt(e){let t=!1,n=Km*e;this.releaseTimer-=e;let r=this.blocks[this.blocks.length-1];this.queue.length>0&&this.releaseTimer<=0&&this.blocks.length<rh&&(!r||r.x>9.020000000000001)&&(this.blocks.push({x:Um,color:this.queue.shift()}),this.releaseTimer=.2);for(let e=0;e<this.blocks.length;e++){let r=e===0?12.35:this.blocks[e-1].x-Jm,i=Math.min(r,this.blocks[e].x+n);i>this.blocks[e].x&&(t=!0),this.blocks[e].x=i}this.blocks.length>0&&this.pressTimer<0&&this.held<eh&&this.blocks[0].x>=12.34&&(this.heldColor=this.blocks[0].color,this.blocks.shift(),this.held++,this.holdTimer=0);for(let e=0;e<this.crates.length;e++){let r=e===0?Gm:this.crates[e-1].x-Xm,i=Math.min(r,this.crates[e].x+n);i>this.crates[e].x&&(t=!0),this.crates[e].x=i}return t}updatePress(e){let t=this.pressHead;if(this.pressTimer>=0){let n=this.pressTimer;this.pressTimer+=e;let r=this.pressTimer/th,i=r<.35?r/.35:Math.max(0,1-(r-.35)/.65);t.position.y=2.2-i*.98,n<th*.35&&this.pressTimer>=th*.35&&(this.crates.push({x:Wm,color:this.crateColor(this.heldColor)}),this.held=0,this.events.onPress?.(Wm,1.1,Hm)),r>=1&&(this.pressTimer=-1,t.position.y=2.2);return}if(this.held===0)return;this.holdTimer+=e;let n=this.held>=eh||this.holdTimer>1&&this.blocks.length===0&&this.queue.length===0,r=this.crates[this.crates.length-1],i=!r||r.x>13.32;n&&i&&(this.pressTimer=0)}crateColor(e){return bh.copy(xh).lerp(Sh.setHex(e),.3).getHex()}spawn(e){let t=this.nextVehicle??Vm(this.random,!this.watching);this.nextVehicle=null;let n=this.models.get(t.id);if(!n){let e=new Fn,r=new Z;t.build(r);let i=r.build();i.castShadow=!0,e.add(i);let a=[];t.animate?.(e,a),this.group.add(e),n={root:e,movers:a},this.models.set(t.id,n)}n.root.visible=!0,this.vehicle={config:t,root:n.root,movers:n.movers,distance:0,state:e?`arriving`:`leaving`,stops:e,loaded:[],flying:[],wait:0,speed:t.speed,announced:!1,x:ah,z:oh,heading:0}}updateRoad(e){if(!this.vehicle){this.busy?this.spawn(!0):this.watching&&(this.passerTimer-=e,this.passerTimer<=0&&(this.passerTimer=22+this.random()*26,this.spawn(!1)));return}let t=this.vehicle,{config:n}=t;if(t.state===`arriving`){let r=lh-t.distance;t.speed=Math.min(n.speed,.8+r*1.1),t.distance=Math.min(lh,t.distance+t.speed*e),t.distance>=lh&&(t.state=`loading`,t.speed=0)}else t.state===`loading`?this.updateLoading(t,e):(t.speed=Math.min(n.speed,t.speed+n.speed*e*.7),t.distance+=t.speed*e);for(let r=t.flying.length-1;r>=0;r--){let i=t.flying[r];i.time+=e,i.time>=.5&&(t.loaded[i.slot]=i.color,this.events.onCrateLoaded?.(t.loaded.filter(e=>e!==void 0).length,n,t.x,n.y+2,t.z),t.flying.splice(r,1))}this.placeVehicle(t),!t.announced&&t.z<62&&(t.announced=!0,this.watching&&this.events.onArrive?.(n)),n.rarity===`veryRare`&&t.z<66&&(this.shineTimer-=e,this.shineTimer<=0&&(this.shineTimer=.16,this.events.onShine?.(t.x+(this.random()-.5)*3,n.y+.6+this.random()*1.8,t.z+(this.random()-.5)*3)));for(let e of t.movers)e(this.time);t.x>=fh&&(t.root.visible=!1,this.vehicle=null)}updateLoading(e,t){let{slots:n}=e.config;e.wait+=t,this.loadTimer-=t;let r=e.loaded.filter(e=>e!==void 0).length+e.flying.length,i=this.crates[0];r<n.length&&i&&i.x>=17.189999999999998&&this.loadTimer<=0&&e.flying.length<this.demand&&(this.crates.shift(),this.loadTimer=.32,e.flying.push({time:0,slot:r,color:i.color}),e.wait=0);let a=e.loaded.filter(e=>e!==void 0).length>=n.length,o=!this.busy&&e.flying.length===0&&e.wait>1.4;(a||o||e.wait>9&&e.flying.length===0)&&(e.state=`leaving`)}placeVehicle(e){let{path:t}=this,n=1;for(;n<t.length-1&&t[n].at<e.distance;)n++;let r=t[n-1],i=t[n],a=Math.min(1,(e.distance-r.at)/Math.max(.001,i.at-r.at));e.x=r.x+(i.x-r.x)*a,e.z=r.z+(i.z-r.z)*a,e.heading=Math.atan2(-(i.z-r.z),i.x-r.x);let o=e.config.y>0?Math.sin(this.time*1.7)*.14:0;e.root.position.set(e.x,e.config.y+o,e.z),e.config.id!==`ufo`&&(e.root.rotation.y=e.heading)}writeCrate(e,t,n,r,i,a,o=Ym){_h.setFromAxisAngle(yh,i),hh.compose(gh.set(t,n,r),_h,vh.setScalar(o)),this.crateMesh.setMatrixAt(e,hh),this.crateMesh.setColorAt(e,bh.setHex(a))}slotWorld(e,t,n){let[r,i,a]=e.config.slots[t],o=e.config.id===`ufo`?e.root.rotation.y:e.heading,s=Math.cos(o),c=Math.sin(o);return n.set(e.x+r*s+a*c,e.root.position.y+i,e.z-r*c+a*s)}writeInstances(){let e=0;for(let t of this.blocks)hh.compose(gh.set(t.x,1.08,Hm),_h.identity(),vh.setScalar(qm)),this.blockMesh.setMatrixAt(e,hh),this.blockMesh.setColorAt(e,bh.setHex(t.color)),e++;this.blockMesh.count=e,this.blockMesh.instanceMatrix.needsUpdate=!0,this.blockMesh.instanceColor&&(this.blockMesh.instanceColor.needsUpdate=!0);let t=0;for(let e of this.crates){if(t>=nh)break;this.writeCrate(t++,e.x,1.1600000000000001,Hm,0,e.color)}let n=this.vehicle;if(n){let e=new W;for(let r=0;r<n.loaded.length&&t<nh;r++){let i=n.loaded[r];i!==void 0&&(this.slotWorld(n,r,e),this.writeCrate(t++,e.x,e.y,e.z,n.heading,i))}for(let r of n.flying){if(t>=nh)break;this.slotWorld(n,r.slot,e);let i=r.time/.5,a=i*i*(3-2*i),o=1.1600000000000001;this.writeCrate(t++,Gm+(e.x-Gm)*a,o+(e.y-o)*a+Math.sin(i*Math.PI)*2,Hm+(e.z-Hm)*a,n.heading*i,r.color)}}this.crateMesh.count=t,this.crateMesh.instanceMatrix.needsUpdate=!0,this.crateMesh.instanceColor&&(this.crateMesh.instanceColor.needsUpdate=!0)}},wh=1.9,Th=1.5;function Eh(e,t,n,r,i){return{id:e,x:t,z:n,halfX:r,halfZ:i,minX:t-r,maxX:t+r,minZ:n-i,maxZ:n+i}}var Dh=class{constructor(e){X(this,`fieldWidth`,void 0),X(this,`fieldDepth`,void 0),X(this,`bridge`,void 0),X(this,`base`,void 0),X(this,`zones`,void 0),X(this,`spawn`,void 0),X(this,`obstacles`,void 0),X(this,`fieldLimitZ`,void 0),X(this,`landmarks`,void 0),this.fieldWidth=e.width,this.fieldDepth=e.sections.reduce((e,t)=>e+t.depth,0);let t=zd.bridgeLength,n=zd.bridgeWidth/2;this.bridge={minX:-n,maxX:n,minZ:0,maxZ:t};let r=zd.baseWidth/2;this.base={minX:-r,maxX:r,minZ:t,maxZ:t+zd.baseDepth};let i=t+6;this.zones=[Eh(`sell`,0,i,5.2,3.6),Eh(`upgrade`,-12,i,4.6,3.6),Eh(`shop`,12,i,4.6,3.6),Eh(`travel`,0,t+14.4,6,2.6)],this.obstacles=[{minX:-16.4,maxX:-7.6,minZ:t,maxZ:t+2.1},{minX:7.6,maxX:16.4,minZ:t,maxZ:t+2.1},{minX:6.6,maxX:r+1,minZ:t+10.5,maxZ:t+17.1}],this.spawn={x:0,z:2},this.fieldLimitZ=-this.fieldDepth,this.landmarks=e.obstacles??[]}factoryPadZ(){return this.base.maxZ+zd.factoryLane/2}onFactoryPad(e,t,n){return Math.abs(t-e.x)<=1.9&&Math.abs(n-this.factoryPadZ())<=1.5}zoneById(e){return this.zones.find(t=>t.id===e)}zoneAt(e,t){for(let n of this.zones)if(e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ)return n.id;return null}isWalkable(e,t,n){let r=this.fieldWidth/2-n;if(e>=-r&&e<=r&&t>=this.fieldLimitZ+n&&t<=-n){for(let r of this.landmarks)if(Math.hypot(e-r.x,t-r.z)<r.r+n)return!1;return!0}let i=this.bridge;if(e>=i.minX+n&&e<=i.maxX-n&&t>=i.minZ-n-1&&t<=i.maxZ+n+1)return!0;let a=this.base;if(e>=a.minX+n&&e<=a.maxX-n&&t>=a.minZ+n&&t<=a.maxZ+zd.factoryLane-n){for(let r of this.obstacles)if(e>r.minX-n&&e<r.maxX+n&&t>r.minZ-n&&t<r.maxZ+n)return!1;return!0}return!1}},Oh=16186367,kh=6,Ah=9413557,jh=6057344,Mh=3292491,Nh=7317705,Ph=4882342,Fh=15765548,Ih=16767352,Lh=14829631,Rh=8382975,zh=5.3;function Bh(){let e=new Z;e.round(7,2.4,3.4,0,1.2,0,Nh,.08);for(let t=-3.2;t<=3.2;t+=.8)e.box(.05,2.3,.05,t,1.2,1.72,Ph);e.box(7.4,.14,3.9,0,2.5,0,jh),e.round(7.2,.26,3.6,0,2.68,0,Oh,.1),e.box(2.4,1.7,.1,-1.2,.85,1.74,Mh);for(let t=.25;t<1.7;t+=.3)e.box(2.3,.04,.05,-1.2,t,1.8,jh);return e.round(1.3,.7,.08,1.9,1.5,1.74,Ih,.03),e.box(7.05,.2,.05,0,2.2,1.74,Fh),{body:e,vents:[]}}function Vh(){let e=new Z;e.box(4.6,.12,1.1,-3.9,.62,0,Mh),e.box(4.6,.08,1.24,-3.9,.54,0,Ah);for(let t=-5.9;t<=-1.9;t+=1)e.box(.1,.5,1.1,t,.25,0,jh);e.round(3,.5,2.6,.6,.25,0,jh,.06);for(let[t,n]of[[-.6,-1],[1.8,-1],[-.6,1],[1.8,1]])e.round(.26,2.9,.26,t,1.7,n,Ah,.05);return e.round(3,.5,2.6,.6,3.25,0,Fh,.08),e.round(2.9,.2,2.4,.6,3.6,0,Oh,.08),{body:e,animate(e,t){let n=new Z;n.round(2,.5,1.8,0,0,0,Lh,.06),n.box(.5,1.4,.5,0,.7,0,Ah);let r=n.build();r.position.set(.6,1.8,0),r.castShadow=!0,e.add(r),t.push(e=>{let t=e*.8%1;r.position.y=1.15+(t<.12?1-t/.12:t/.88-.136)*1});let i=new Z;i.round(.56,.56,.56,0,0,0,15398655,.08);let a=new zi(i.geometry(),cf,5);a.frustumCulled=!1,e.add(a);let o=new sn;t.push(e=>{for(let t=0;t<5;t++){let n=(e*.22+t/5)%1;o.makeTranslation(-1.4-n*5,.97,0),a.setMatrixAt(t,o)}a.instanceMatrix.needsUpdate=!0})}}}function Hh(){let e=new Z;e.drum(1.25,4.2,0,1.3,-.4,10247231,16);for(let t of[-1.5,0,1.5])e.drum(1.32,.16,t,1.3,-.4,Mh,16);e.round(4.4,.5,2.2,0,.25,-.4,jh,.06),e.round(.9,.6,.1,-2.1,1.3,.8,Ih,.03),e.cylinder(.62,.92,8.2,1.4,4.1,2.2,Ah,12);for(let t of[2.6,5,7.2])e.cylinder(.84,.86,.5,1.4,t,2.2,Lh,12);return e.cylinder(.78,.66,.4,1.4,8.3,2.2,Mh,12),e.cylinder(.2,.2,2.4,1.4,2.2,.8,jh,8,{rx:Math.PI/2}),{body:e,vents:[[1.4,8.6,2.2]]}}function Uh(){let e=new Z;e.round(5.4,2.5,3.6,0,1.25,0,15265525,.1),e.round(5.1,1.3,.1,0,1.25,1.8,8377584,.03);for(let t of[-1.7,0,1.7])e.box(.1,1.34,.14,t,1.25,1.82,Mh);return e.box(5.5,.16,3.7,0,2.58,0,jh),e.cylinder(1.05,1.05,.3,0,2.8,0,Mh,16),e.box(5.45,.14,.04,0,.42,1.82,Rh),{body:e,animate(e,t){let n=new Z;for(let e=0;e<4;e++)n.box(1.7,.05,.34,0,0,0,Ah,{ry:e*Math.PI/4});n.cylinder(.2,.2,.14,0,0,0,Lh,10);let r=n.build();r.position.set(0,3,0),e.add(r),t.push((e,t)=>{r.rotation.y+=t*7})}}}function Wh(){let e=new Z;e.round(15,5.4,5,0,2.7,0,Ph,.1);for(let t=-7;t<=7;t+=1)e.box(.07,5.3,.06,t,2.65,2.53,Nh);e.box(15.1,.34,.08,0,4.2,2.54,Fh),e.box(15.1,.5,5.2,0,5.55,0,jh);for(let t=-6;t<=6;t+=3)e.box(3,.16,5,t,6.4,0,14542575,{rz:-.42}),e.box(.14,1.2,4.9,t+1.42,6.3,0,Ih);for(let t of[-4.6,4.6]){e.box(3.4,3.2,.1,t,1.6,2.56,Mh);for(let n=.3;n<3.2;n+=.4)e.box(3.3,.04,.05,t,n,2.62,jh);e.box(3.9,.3,.3,t,3.4,2.64,Fh)}for(let t=-1.8;t<=1.8;t+=1.2)e.round(.9,1.4,.08,t,2.2,2.56,Ih,.03);return{body:e}}function Gh(){let e=new Z;for(let[t,n]of[[-1.5,.4],[1.5,-.6]])e.cylinder(1.05,1.5,3.6,t,1.8,n,15265525,16),e.cylinder(1.25,1.05,3.6,t,5.4,n,14673904,16),e.cylinder(1.3,1.28,.3,t,7.2,n,Lh,16),e.cylinder(.96,.96,.1,t,7.37,n,Mh,16);return e.box(1.6,.34,.34,0,1.6,-.1,jh,{ry:-.3}),{body:e,vents:[[-1.5,7.5,.4],[1.5,7.5,-.6]]}}function Kh(){let e=new Z;e.round(5.2,8,4.2,0,4,0,5529711,.1);for(let t=1.4;t<8;t+=1.6)e.box(5.24,.12,4.24,0,t,0,Ah);e.round(2.8,2.4,.12,0,1.4,2.12,16742948,.06),e.round(2,1.5,.14,0,1.2,2.14,16761418,.05),e.box(3.1,.3,.3,0,2.75,2.2,Mh);for(let t of[4.2,5.8])for(let n of[-1.4,1.4])e.round(.9,.8,.08,n,t,2.12,Ih,.03);return e.cylinder(.24,.24,1.4,0,8.7,0,jh,10),{body:e,vents:[],animate(e,t){let n=new Z;n.box(6.6,.3,.3,-1.5,0,0,Fh),n.box(1,.7,.7,2,-.05,0,Mh),n.box(.06,2,.06,-4.2,-1,0,Mh),n.round(.8,.32,.6,-4.2,-2.1,0,16763955,.04);let r=n.build();r.position.y=9.4,r.castShadow=!0,e.add(r),t.push(e=>{r.rotation.y=Math.sin(e*.35)*.7+.5})}}}function qh(){let e=new Z;e.cylinder(3.3,3.8,.8,0,7.1,0,jh,16),e.cylinder(3,3,.2,0,7.6,0,Mh,16);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.round(.3,1.3,.3,Math.cos(n)*2.9,8,Math.sin(n)*2.9,Ah,.05)}return{body:e,animate(e,t){let n=new gi({color:16777215,vertexColors:!0}),r=new Z;r.blob(2.2,0,0,0,Rh,1,.8,1,2),r.blob(1.1,0,.5,0,15138303,1,1,1,1);let i=new q(r.geometry(),n);i.position.y=8.2,e.add(i);let a=new Z;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;a.round(1,.14,.26,Math.cos(t)*3,0,Math.sin(t)*3,Rh,.04,{ry:-t+Math.PI/2})}let o=new q(a.geometry(),n);o.position.y=8.3,e.add(o);let s=new gi({color:Rh,transparent:!0,opacity:.28,depthWrite:!1,side:2}),c=new q(new aa(.75,1.15,9,14,1,!0),s);c.position.y=13.4,c.renderOrder=3,e.add(c),t.push((e,t)=>{o.rotation.y+=t*1.1,o.position.y=8.3+Math.sin(e*1.4)*.22;let n=1+Math.sin(e*2.6)*.04;i.scale.setScalar(n),s.opacity=.22+Math.sin(e*2.6)*.07})}}}function Jh(){let e=new Z;for(let t of[-3,-1,1,3])e.cylinder(.9,.9,4.6,t,2.3,0,13095132,16),e.cone(.98,.9,t,5.05,0,Oh,16),e.cylinder(.94,.94,.14,t,1.6,0,Fh,16);return e.box(8.4,.24,.5,0,5.6,0,jh),{body:e}}function Yh(){let e=new Z;e.box(320,.4,3,0,4.8,0,6977158);for(let t of[-.72,.72])e.box(320,.1,.12,0,5.25,t,Ah);for(let t=-160;t<=160;t+=1.4)e.box(.3,.08,2.1,t,5.1,0,7033408);for(let t of[-1.45,1.45])e.box(320,.3,.14,0,5.2,t,15765548);for(let t=-156;t<=156;t+=12)Math.abs(t-22)<4||(e.cylinder(.42,.56,7.2,t,1.0999999999999996,0,6057344,10),e.box(3.4,.4,.9,t,4.3999999999999995,0,6057344));for(let t of[-2,2])e.box(.34,8.9,.34,t,8.9/2,-2.2,16763955);e.box(5,.5,2.8,0,8.7,-1,16763955),e.box(2.2,2.6,.1,0,1.9,-2.2,Mh);for(let[t,n]of[[-1.2,.5],[0,.5],[1.2,.5],[-.6,1.5],[.6,1.5]])e.box(1,1,1,t,n,-3.4,13212255);return{body:e}}function Xh(e,t,n,r){e.cylinder(.16,.34,r,t,r/2,n,15265525,10),e.round(.56,.56,1,t,r,n,13950182,.14)}function Zh(){let e=new Z,t=[[-1.6,-1.4,7.2],[1.6,1.2,8.2]];for(let[n,r,i]of t)Xh(e,n,r,i);return{body:e,animate(e,n){for(let[r,i,a]of t){let t=new Z;for(let e=0;e<3;e++){let n=e*Math.PI*2/3;t.box(.28,3,.06,Math.sin(n)*1.5,Math.cos(n)*1.5,0,16185852,{rz:-n})}let o=t.build();o.position.set(r,a,i+.6),e.add(o),n.push((e,t)=>{o.rotation.z+=t*1.6})}}}}function Qh(){let e=new Z;return e.cylinder(2.6,2.8,.8,0,.4,0,jh,16),e.round(2.2,1.3,.1,0,1.2,2.72,Ih,.03),{body:e,animate(e,t){let n=new Wo({color:10478847,transparent:!0,opacity:.55,flatShading:!0}),r=new q(new Do(2.5,2),n);r.position.y=.9,e.add(r);let i=new Z;i.cylinder(.3,.5,1.8,0,0,0,Ah,10),i.blob(.55,0,1.2,0,16769146,1,1,1,1);let a=i.build();a.position.y=1.6,e.add(a),t.push(e=>{a.position.y=1.6+Math.sin(e*1.4)*.14,a.rotation.y=e})}}}function $h(){let e=new Z;return e.cylinder(1.8,2.1,1.2,0,.6,0,jh,12),e.round(2.4,.8,2.4,0,1.6,0,5529711,.2),{body:e,vents:[[0,6,-2]],animate(e,t){let n=new Z;n.cylinder(.5,.86,4.2,0,2,0,14673646,12),n.cylinder(.62,.62,.3,0,3.8,0,Fh,12);let r=n.build();r.position.y=2,r.rotation.x=-.6,r.castShadow=!0,e.add(r),t.push(e=>{r.rotation.z=Math.sin(e*.5)*.45})}}}function eg(){let e=new Z;return e.box(8,.5,1.4,0,.5,0,Mh),e.box(8.2,.08,1.5,0,.78,0,Ah),{body:e,animate(e,t){for(let n of[-2.5,0,2.5]){let r=new Z;r.cylinder(.3,.4,.8,0,.4,0,Fh,10),r.round(.3,1.7,.3,0,1.5,0,15770426,.08),r.round(.26,1.1,.26,0,2.3,-.5,15770426,.08,{rx:1.1}),r.round(.5,.26,.5,0,2.05,-1,Mh,.05);let i=r.build();i.position.set(n,0,-1.4),i.castShadow=!0,e.add(i),t.push(e=>{i.rotation.y=Math.sin(e*1.5+n)*.9})}}}}function tg(){let e=new Z;return e.cylinder(3,3.1,.3,0,.15,0,6057344,20),e.cylinder(2.5,2.5,.04,0,.32,0,16054011,20),e.cylinder(2.2,2.2,.06,0,.33,0,6057344,20),e.box(.4,.06,1.8,-.6,.38,0,16054011),e.box(.4,.06,1.8,.6,.38,0,16054011),e.box(1.2,.06,.4,0,.38,0,16054011),{body:e}}function ng(){let e=new Z;e.box(2.4,.5,2.4,0,.25,0,jh);for(let[t,n]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])e.box(.18,12,.18,t,6,n,16763955);for(let t=1;t<12;t+=1)e.box(1.4,.08,.08,0,t,.6,15971631,{rz:t%2==0?.6:-.6}),e.box(.08,.08,1.4,.6,t+.5,0,15971631,{rx:t%2==0?.6:-.6});return{body:e,animate(e,t){let n=new Z;n.box(14,.5,.6,3.6,0,0,16763955),n.box(2.4,1,1,-4,-.4,0,Mh),n.round(1.2,1,1.2,0,.8,0,14673646,.14),n.box(.08,4,.08,9,-2,0,Mh),n.round(1,.5,1,9,-4.1,0,Fh,.08);let r=n.build();r.position.y=12.4,r.castShadow=!0,e.add(r),t.push(e=>{r.rotation.y=e*.18})}}}function rg(){let e=new Z;return e.cylinder(.5,1.5,3,0,1.5,0,13489631,12),{body:e,animate(e,t){let n=new Z;n.add(new Mo(2.8,16,6,0,Math.PI*2,Math.PI*.62,Math.PI*.38),15791353,0,0,0),n.cylinder(.05,.08,2.4,0,-1.1,0,Mh,6),n.blob(.26,0,-.1,0,Lh,1,1,1,1);let r=n.build();r.position.y=5.8,r.rotation.x=Math.PI+.7,r.castShadow=!0,e.add(r),t.push(e=>{r.rotation.z=Math.sin(e*.3)*.5})}}}function ig(){let e=new Z;e.cylinder(3,3.3,.5,0,.25,0,jh,16);for(let[t,n]of[[-2.2,-2.2],[2.2,-2.2]])e.box(.3,13,.3,t,6.5,n,14829631);e.box(4.7,.3,.3,0,12.8,-2.2,14829631);for(let t=2;t<13;t+=2)e.box(4.4,.12,.12,0,t,-2.2,15791096);return{body:e}}function ag(){let e=new Z;e.cylinder(2.4,2.8,1,0,.5,0,Mh,8);for(let t=0;t<4;t++){let n=t*Math.PI/2+Math.PI/4;e.box(.4,4.6,.4,Math.cos(n)*2,3,Math.sin(n)*2,jh)}return{body:e,animate(e,t){let n=new gi({color:16777215,vertexColors:!0}),r=new Z;r.add(new Oo(1.2,0),13073919,0,0,0);let i=new q(r.geometry(),n);i.position.y=3,e.add(i);let a=new Z;for(let e=0;e<10;e++){let t=e/10*Math.PI*2;a.box(.5,.1,.2,Math.cos(t)*1.9,0,Math.sin(t)*1.9,14725375,{ry:-t+Math.PI/2})}let o=new q(a.geometry(),n);o.position.y=3,e.add(o),t.push((e,t)=>{i.rotation.y+=t*1.4,i.position.y=3+Math.sin(e*1.8)*.2,o.rotation.x=e*1.1,o.rotation.z=e*.7})}}}function og(){let e=new Z;e.round(5,2.4,3,0,1.2,0,14260815,.08),e.box(5.3,.14,3.3,0,2.5,0,jh),e.round(5.1,.24,3.1,0,2.68,0,Oh,.1),e.box(2.6,1.8,.1,0,.9,1.54,Mh);for(let[t,n,r]of[[-3.1,.4,1],[-3.1,1.2,1],[-3.1,.4,.1],[3.1,.4,.8]])e.box(.76,.76,.76,t,n,r,13212255);return{body:e}}function sg(){let e=new Z;for(let[t,n]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])e.box(.2,8.4,.2,t,4.2,n,jh),e.box(.1,.1,2.8,t,3,0,Ah);return e.cylinder(2.5,2.5,3.2,0,9.8,0,5223128,16),e.box(5.1,.34,5.1,0,8.3,0,jh),e.cylinder(2.56,2.56,.3,0,10.2,0,Oh,16),e.cone(2.7,1.5,0,12.1,0,Oh,16),{body:e}}function cg(){let e=new Z;for(let[t,n]of[[-.45,12737071],[.45,8369103]]){e.cylinder(.34,.34,30,0,5.8,t,n,10,{rz:Math.PI/2});for(let n=-14;n<=14;n+=4)e.cylinder(.42,.42,.2,n,5.8,t,Mh,10,{rz:Math.PI/2})}for(let t of[-14.5,-7,7,14.5])e.box(.34,5.8,.34,t,2.9,-.9,jh),e.box(.34,5.8,.34,t,2.9,.9,jh),e.box(.3,.3,2.3,t,5.2,0,Ah);return{body:e}}function lg(){let e=new Z,t=[];for(let n of[-2.2,0,2.2]){let r=13+(n+2.2)*1.2;e.cylinder(.56,.95,r,0,r/2,n,12018506,12);for(let t of[r*.45,r*.85])e.cylinder(.84,.86,.4,0,t,n,Oh,12);e.cylinder(.7,.58,.4,0,r,n,Mh,12),t.push([0,r+.3,n])}return e.round(2.8,1.6,6.8,0,.8,0,jh,.06),{body:e,vents:t}}function ug(){let e=new Z;e.cylinder(1.25,1.7,11,0,5.5,0,14673646,8);for(let t of[3,6,9])e.cylinder(1.5,1.55,.14,0,t,0,Fh,8);return e.cylinder(2.5,1.5,.8,0,11.4,0,jh,8),e.cylinder(2.4,2.4,1.5,0,12.5,0,8377584,8),e.cylinder(2.6,2.6,.3,0,13.4,0,Oh,8),e.cylinder(.05,.08,2.6,0,14.8,0,Mh,6),e.blob(.2,0,16.1,0,Lh,1,1,1,1),{body:e}}function dg(){let e=new Z;e.round(7,.5,5,0,.25,0,jh,.06);for(let[t,n,r,i]of[[-1.8,-.8,1.7,15791353],[1.9,-.3,1.5,15770426],[-.2,1.3,1.1,8369103]]){e.blob(r,t,r+1.2,n,i,1,1,1,2);for(let i=0;i<4;i++){let a=i*Math.PI/2+.6;e.box(.14,r+1.1,.14,t+Math.cos(a)*r*.7,(r+1.1)/2+.3,n+Math.sin(a)*r*.7,Ah)}}return{body:e}}function fg(){let e=new Z;e.round(5.6,.5,5,0,.25,0,jh,.06);for(let[t,n,r,i]of[[-1.6,-1,13,13489631],[.5,-1.1,10,14673646],[2,.7,7.5,13489631]]){e.cylinder(.72,.82,r,t,r/2+.5,n,i,12);for(let i=2;i<r;i+=2.2)e.cylinder(.92,.92,.12,t,i,n,Fh,12);e.cone(.72,.8,t,r+.9,n,Mh,12)}return e.cylinder(.14,.14,2.6,-.5,7,-1,Mh,8,{rz:Math.PI/2}),e.cylinder(.14,.14,2.6,1.2,5.4,-.2,Mh,8,{rz:Math.PI/2,ry:.6}),e.cylinder(.06,.1,3.2,-1.6,15.8,-1,Mh,6),{body:e,vents:[[-1.6,17.2,-1]],animate(e,t){let n=new gi({color:16753210}),r=new q(new oa(.36,1.5,8),n);r.position.set(-1.6,18.1,-1),e.add(r),t.push(e=>{r.scale.set(.9+Math.sin(e*19)*.2,.9+Math.sin(e*13)*.3,.9+Math.cos(e*17)*.2)})}}}function pg(){let e=new Z;e.round(10.4,5.6,4.6,0,2.8,0,9082795,.1);for(let t=-4.5;t<=4.5;t+=1.5)e.box(.12,5.5,.1,t,2.75,2.33,6057344);e.box(10.6,.5,4.8,0,5.8,0,jh),e.round(10.4,.36,4.6,0,6.2,0,Oh,.12);for(let t=-3.6;t<=3.6;t+=2.4)e.round(1.6,2.4,.1,t,3.3,2.36,Ih,.03);return{body:e,animate(e,t){for(let n of[-3,0,3]){let r=new Z;for(let e=0;e<3;e++)r.box(2.2,.05,.42,0,0,0,Ah,{ry:e*Math.PI/3});r.cylinder(.26,.26,.2,0,0,0,Lh,10);let i=r.build();i.position.set(n,6.65,0),e.add(i),t.push((e,t)=>{i.rotation.y+=t*5})}}}}function mg(){let e=new Z;e.round(4.4,3.4,4.2,0,1.7,0,8382975,.2),e.round(3.6,2.6,.1,0,1.5,2.12,13170431,.04),e.cylinder(.9,.9,.14,0,1.5,2.18,Ah,16,{rx:Math.PI/2});for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.box(.08,.5,.08,Math.cos(n)*.6,1.5+Math.sin(n)*.6,2.28,Mh,{rz:-n+Math.PI/2})}return e.round(4.6,.3,4.4,0,3.5,0,Oh,.14),{body:e}}var hg=33;function gg(){let e=new Z;for(let[t,n,r,i,a]of[[4.8,6,3.4,1.7,14732434],[3.9,4.8,6,6.4,15325606],[3,3.9,6,12.4,16051408],[2.1,3,6,18.4,16774360],[1.2,2.1,5.5,24.2,16775396]])e.cylinder(t,n,r,0,i,0,a,8),e.cylinder(t+.3,t+.34,.32,0,i+r/2,0,16761902,8);e.cone(1.25,5.6,0,29.8,0,16761902,8);for(let[t,n]of[[4.72,6.2],[3.8,12.2],[2.86,18.2]])for(let r=0;r<8;r++){let i=(r+.5)/8*Math.PI*2;e.round(.72,1.7,.1,Math.sin(i)*t,n,Math.cos(i)*t,Ih,.03,{ry:i})}for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.box(.9,7.5,1.4,Math.sin(n)*5.3,3.75,Math.cos(n)*5.3,13942660,{ry:n}),e.cone(.76,2,Math.sin(n)*5.3,8.5,Math.cos(n)*5.3,16761902,6)}return{body:e,animate(e,t){let n=new q(new Do(1.2,1),new gi({color:16774328}));n.position.y=hg,e.add(n),t.push(e=>{n.position.y=hg+Math.sin(e*1.6)*.35,n.rotation.y=e*.8})}}}function _g(){let e=new Z;return e.cylinder(.5,.5,.4,0,24,0,16761902,8),{body:e,animate(e,t){let n=[8388564,12946431,8374271],r=[];n.forEach((t,n)=>{let i=new q(new No(7.5+n*1.9,.2,8,44),new gi({color:t}));i.position.y=13+n*6,i.rotation.x=Math.PI/2,e.add(i),r.push(i)});let i=new gi({color:13172720,transparent:!0,opacity:.32,depthWrite:!1,side:2}),a=new q(new aa(1.4,.9,16,16,1,!0),i);a.position.y=41,a.renderOrder=3,e.add(a),t.push(e=>{r.forEach((t,n)=>{t.position.y=13+n*6+Math.sin(e*.9+n*2)*.8,t.rotation.x=Math.PI/2+Math.sin(e*.5+n)*.13,t.rotation.y=Math.cos(e*.4+n)*.13}),i.opacity=.26+Math.sin(e*2.2)*.08})}}}var vg={"Melt Shed":{build:Bh,at:[0,-2.2]},"Block Press":{build:Vh,at:[8,-2.4]},"Crate Stacker":{build:og,at:[-5.5,9.2]},"Boiler Stack":{build:Hh,at:[-8,.8]},"Engine Lab":{build:Uh,at:[12.6,-2.6]},"Water Tower":{build:sg,at:[6,21.5]},"Main Hall":{build:Wh,at:[0,2.8]},"Pipe Bridge":{build:cg,at:[0,6.8]},"Rail Yard":{build:Yh,at:[0,33]},"Cooling Towers":{build:Gh,at:[-13,2.4]},"Blade Forge":{build:Kh,at:[12.6,2.8]},Helipad:{build:tg,at:[12.5,20]},"Arctic Reactor":{build:qh,at:[0,2.8]},"Silo Row":{build:Jh,at:[-13,9.6]},"Chimney Row":{build:lg,at:[-8.5,27]},"Rocket Pad":{build:ig,at:[-7.2,16.5]},"Wind Farm":{build:Zh,at:[-13,20.5]},"Control Tower":{build:ug,at:[-5.6,23.2]},"Research Dome":{build:Qh,at:[14,10]},"Snow Cannon":{build:$h,at:[0,10.5]},"Robot Line":{build:eg,at:[7.8,9.6]},"Gas Tanks":{build:dg,at:[-13,27]},Refinery:{build:fg,at:[13,27]},"Turbine Hall":{build:pg,at:[-1,27]},"Giant Crane":{build:ng,at:[-14,15]},"Ice Vault":{build:mg,at:[7,27]},"Orbital Dish":{build:rg,at:[6,15.6]},"Quantum Core":{build:ag,at:[13.2,14.8]},"Winter Spire":{build:gg,at:[0,18.5]},"Aurora Crown":{build:_g,at:[0,18.5]}};function yg(e){return vg[md[e].name]}var bg=class{constructor(e){X(this,`group`,new Fn),X(this,`built`,[]),X(this,`movers`,[]),X(this,`vents`,[]),X(this,`ghost`,null),X(this,`ghostStage`,-1),X(this,`ghostMaterial`,new gi({color:9431039,transparent:!0,opacity:.3,depthWrite:!1})),X(this,`time`,0),X(this,`originX`,0),X(this,`originZ`,void 0),this.originZ=e.base.maxZ+zd.factoryLane+kh,this.group.position.set(this.originX,.05,this.originZ)}setLevel(e,t){for(let n=this.built.length;n<e;n++){let{build:e,at:[r,i]}=yg(n),a=e(),o=new Fn;o.position.set(r,0,i);let s=a.body.build();s.castShadow=!0,s.receiveShadow=!0,o.add(s),a.animate?.(o,this.movers),t&&o.scale.set(1,.001,1),this.group.add(o),this.built.push({group:o,pop:+!t});for(let[e,t,n]of a.vents??[])this.vents.push([e+r,t,n+i])}}setGhost(e,t){let n=e??-1;if(n!==this.ghostStage&&(this.ghost&&(this.group.remove(this.ghost),this.ghost.geometry.dispose(),this.ghost=null),this.ghostStage=n,e!==null&&md[e])){let{build:t,at:[n,r]}=yg(e);this.ghost=new q(t().body.geometry(),this.ghostMaterial),this.ghost.position.set(n,0,r),this.ghost.renderOrder=2,this.group.add(this.ghost)}this.ghostMaterial.opacity=(t?.4:.24)+Math.sin(this.time*3)*.06}forEachVent(e){for(let[t,n,r]of this.vents)e(this.originX+t,n,this.originZ+r)}stagePosition(e){let[t,n]=yg(Math.min(e,md.length-1)).at;return{x:this.originX+t,z:this.originZ+n}}stageAnchor(e){let[t,n]=vg[e].at;return{x:this.originX+t,z:this.originZ+n}}update(e){this.time+=e;for(let t of this.movers)t(this.time,e);for(let t of this.built){if(t.pop>=1)continue;t.pop=Math.min(1,t.pop+e*1.5);let n=t.pop-1;t.group.scale.y=Math.max(.001,1+2.7*n*n*n+1.7*n*n)}}dispose(){this.ghostMaterial.dispose()}};md.filter(e=>vg[e.name]).length;var xg=2764602,Sg=14829631,Cg=16054011,wg=13212255,Tg=8,Eg=6,Dg=4.3,Og=-170,kg=190,Ag={x:90,y:42,z:-30},jg=150,Mg=new sn;function Ng(e,t){return md.findIndex(t=>t.unlocks===e)<t}function Pg(){let e=new Z;e.round(5.4,1.5,1.9,12,1.2,0,Sg,.2),e.round(1.9,1.3,1.8,10.2,2.5,0,12991028,.1),e.round(.08,.6,1.5,11.2,2.7,0,8377584,.02),e.drum(.72,3,12.8,2.2,0,3817293,12),e.cylinder(.22,.32,1,13.6,3.2,0,xg,8),e.box(.2,1,2.2,14.9,.7,0,16763955,{rz:.5});for(let t=0;t<Tg;t++){let n=6-t*Dg;e.box(3.9,.3,1.9,n,.75,0,5531775),e.box(3.9,.3,.08,n,1,.95,16763955),e.box(3.9,.3,.08,n,1,-.95,16763955);for(let t of[-1.3,1.3])for(let r of[-.7,.7])e.cylinder(.26,.26,.16,n+t,.3,r,xg,10,{rx:Math.PI/2})}let t=new Fn,n=e.build();n.castShadow=!0,t.add(n);let r=new Z;r.box(1,1,1,0,0,0,wg);for(let e of[-.4,.4])r.box(1.04,.14,1.04,0,e,0,10122306);let i=new zi(r.geometry(),cf,48);i.frustumCulled=!1,i.castShadow=!0;for(let e=0;e<Tg;e++)for(let t=0;t<Eg;t++){let n=6-e*Dg+(t%3-1)*1.15,r=t<3?-.45:.45;Mg.compose(new W(n,1.4,r),new Lt,new W(.82,.82,.82)),i.setMatrixAt(e*Eg+t,Mg)}return i.count=0,t.add(i),{root:t,crates:i}}function Fg(){let e=new Z;e.round(2.4,1.1,1.1,0,1.1,0,Sg,.3),e.round(.7,.8,.9,1,1.18,0,8377584,.2),e.round(2.2,.26,.26,-2,1.3,0,12991028,.08),e.box(.14,.9,.5,-3,1.6,0,15791096),e.box(2.2,.08,.1,0,.42,.56,xg),e.box(2.2,.08,.1,0,.42,-.56,xg),e.cylinder(.08,.08,.5,0,1.8,0,xg,8);let t=new Fn,n=e.build();n.castShadow=!0,t.add(n);let r=new Z;r.box(5,.05,.3,0,0,0,xg),r.box(.3,.05,5,0,0,0,xg);let i=r.build();i.position.y=2.1,t.add(i);let a=new Z;a.cylinder(.02,.02,1.2,0,.1,0,xg,4);for(let[e,t]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45]])a.box(.8,.8,.8,e,-.9,t,wg);let o=a.build();return o.castShadow=!0,t.add(o),{root:t,rotor:i,sling:o}}function Ig(){let e=new Z;e.cylinder(1,1.2,8,0,4.6,0,Cg,16),e.cylinder(1.04,1.04,.5,0,6,0,Sg,16),e.cone(1,3,0,10.1,0,Sg,16),e.round(.5,.5,.1,0,7.4,1.05,2973574,.1);for(let t=0;t<4;t++){let n=t*Math.PI/2;e.box(.2,2,1.3,Math.cos(n)*1.5,1.6,Math.sin(n)*1.5,Sg,{ry:-n})}let t=new Fn,n=e.build();n.castShadow=!0,t.add(n);let r=new q(new oa(.95,5,12),new gi({color:16757050,transparent:!0,opacity:.9,depthWrite:!1}));return r.rotation.x=Math.PI,r.position.y=-1.9,r.visible=!1,t.add(r),{root:t,flame:r}}function Lg(e){return e*e}function Rg(e){return 1-(1-e)*(1-e)}var zg=class{constructor(e){X(this,`group`,new Fn),X(this,`train`,Pg()),X(this,`heli`,Fg()),X(this,`rocket`,Ig()),X(this,`rocketPad`,void 0),X(this,`heliPad`,void 0),X(this,`heliHasLeft`,{value:!1}),X(this,`time`,0);let t=e.stageAnchor(`Rail Yard`);this.train.root.position.set(Og,zh,t.z),this.heliPad=e.stageAnchor(`Helipad`),this.rocketPad=e.stageAnchor(`Rocket Pad`),this.heli.root.position.set(this.heliPad.x,.45,this.heliPad.z),this.rocket.root.position.set(this.rocketPad.x,.5,this.rocketPad.z),this.train.root.visible=!1,this.heli.root.visible=!1,this.rocket.root.visible=!1,this.group.add(this.train.root,this.heli.root,this.rocket.root)}position(e){let{position:t}=e===`train`?this.train.root:e===`heli`?this.heli.root:this.rocket.root;return{x:e===`train`?0:t.x,y:t.y+3,z:t.z}}rocketEngine(){if(!this.rocket.root.visible||!this.rocket.flame.visible)return null;let{x:e,y:t,z:n}=this.rocket.root.position;return{x:e,y:t,z:n}}update(e,t,n){this.time+=e;for(let e of t){let t=Ng(e.config.id,n),r=e.span>0?Math.max(0,Math.min(1,1-e.timer/e.span)):1;switch(e.config.id){case`train`:this.drawTrain(t,e.phase,r,e.crates);break;case`heli`:this.drawHeli(t,e.phase,r);break;case`rocket`:this.drawRocket(t,e.phase,r)}}}drawTrain(e,t,n,r){let{root:i,crates:a}=this.train;if(i.visible=e&&t!==`away`,!i.visible)return;let o=Math.min(a.instanceMatrix.count,r);t===`arriving`?(i.position.x=Og*(1-Rg(n)),a.count=0):t===`loading`?(i.position.x=0,a.count=Math.round(o*n)):(i.position.x=kg*Lg(n),a.count=o)}drawHeli(e,t,n){let{root:r,rotor:i,sling:a}=this.heli;t===`leaving`&&(this.heliHasLeft.value=!0);let o=t===`loading`||t===`away`&&!this.heliHasLeft.value;if(r.visible=e&&(o||t===`arriving`||t===`leaving`),!r.visible)return;i.rotation.y=this.time*(t===`away`?3:22),a.visible=t===`leaving`;let s=t===`leaving`?Lg(n):t===`arriving`?1-Rg(n):0;r.position.set(this.heliPad.x+Ag.x*s,.45+Ag.y*s+(t===`leaving`?Math.min(1,n*8)*1.8:0),this.heliPad.z+Ag.z*s),r.rotation.z=t===`leaving`?-.18*Math.min(1,n*3):0}drawRocket(e,t,n){let{root:r,flame:i}=this.rocket;if(r.visible=e,!e)return;let a=t===`leaving`||t===`loading`&&n>.85;i.visible=a,a&&i.scale.setScalar(.85+Math.sin(this.time*40)*.15),t===`away`?(r.position.y=.5,r.scale.set(1,Math.max(.02,Rg(n)),1)):t===`leaving`?(r.scale.set(1,1,1),r.position.y=.5+jg*Lg(n),r.visible=n<.98):(r.scale.set(1,1,1),r.position.y=.5+(t===`loading`&&n>.85?Math.sin(this.time*60)*.03:0))}},Bg=16186367;function Vg(e){let t=Math.floor(e*9973)+11;return()=>(t=t*16807%2147483647,t/2147483647)}function Hg(e,t,n=.2,r=1){let i=new Do(e,r),a=i.getAttribute(`position`);for(let r=0;r<a.count;r++){let i=a.getX(r)/e,o=a.getY(r)/e,s=a.getZ(r)/e,c=e*(1+n*(Math.sin(i*3.1+t)*Math.cos(o*2.7+t*1.7)+Math.sin(s*3.7+t*.6)*.7+Math.sin((i+o)*6.3+t*2.3)*.35)*.6);a.setXYZ(r,i*c,o*c,s*c)}return i}function Ug(e,t,n){let r=e.clone(),i=r.getAttribute(`position`),a=n*t,o=t*Math.sqrt(Math.max(.02,1-n*n));for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getY(e),r=i.getZ(e);if(n<a){let e=Math.hypot(t,r)||1;t=t/e*o,r=r/e*o,n=a}i.setXYZ(e,t*1.04,n*1.05,r*1.04)}return r}function $(e,t,n,r,i,a,o={}){let s=Hg(i,o.seed??t+r*3+i,o.rough??.2,i>=2.2?2:1),c=o.cap===void 0?null:Ug(s,i,o.cap),l={rx:o.rx,ry:o.ry,rz:o.rz};e.add(s,a,t,n,r,l,o.sx??1,o.sy??1,o.sz??1),c&&e.add(c,o.capColor??Bg,t,n,r,l,o.sx??1,o.sy??1,o.sz??1)}function Wg(e,t,n,r,i,a,o,s,c,l){let u=i-t,d=a-n,f=o-r,p=Math.hypot(u,d,f)||1,m=Math.asin(Math.max(-1,Math.min(1,-u/p))),h=Math.atan2(f,d);e.cylinder(c,s,p,(t+i)/2,(n+a)/2,(r+o)/2,l,6,{rx:h,rz:m})}function Gg(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=n+a*c,m=r+o*c,h=i+s*c;if(Wg(e,n,r,i,p,m,h,l,l*.68,d),u===0){f(p,m,h,c);return}let g=u>2?3:2+Math.round(t()),_=t()*Math.PI*2;for(let n=0;n<g;n++){let r=_+n/g*Math.PI*2+t()*.6,i=.5+t()*.45,v=a+Math.cos(r)*i,y=o+.1+(t()-.3)*.2,b=s+Math.sin(r)*i,x=Math.hypot(v,y,b)||1;v/=x,y/=x,b/=x,Gg(e,t,p,m,h,v,y,b,c*(.66+t()*.14),l*.62,u-1,d,f)}}function Kg(e,t,n=!0){let{r,snow:i,shade:a,random:o}=t,s=Math.max(r*.2,1.7),c=new K(i).lerp(new K(a),.22).getHex();n&&e.blob(r*.95,0,0,0,i,1,s/(r*.95),1,2);for(let t=0;t<11;t++){let n=t/11*Math.PI*2+o()*.3,a=r*(.74+o()*.18),l=Math.max(.8,r*(.17+o()*.12));e.add(Hg(l,t+r,.12),o()<.7?i:c,Math.cos(n)*a,0,Math.sin(n)*a,{},1.25,s*(.7+o()*.35)/l,1.15)}}function qg(e,t){let n=t.build();return n.castShadow=!0,e.group.add(n),n}function Jg(e,t,n){let r=new q(t,new gi({color:n}));return e.group.add(r),r}function Yg(e,t,n){let r=new Float32Array(t*3),i=new Float32Array(t);for(let a=0;a<t;a++){let t=e.random()*Math.PI*2,o=Math.sqrt(e.random())*n.spread;r[a*3]=Math.cos(t)*o,r[a*3+1]=n.baseY+e.random()*n.height,r[a*3+2]=Math.sin(t)*o,i[a]=e.random()*6.28}let a=new Rr,o=new Cr(r,3);a.setAttribute(`position`,o);let s=new Zi(a,new Ki({color:n.color,size:n.size,transparent:!0,opacity:n.opacity??.75,depthWrite:!1,sizeAttenuation:!0}));s.frustumCulled=!1,e.group.add(s);let c=n.windX??0;e.movers.push((e,a)=>{for(let o=0;o<t;o++){let t=r[o*3+1]+n.rise*a,s=r[o*3]+(Math.sin(e*.9+i[o])*.35+c)*a;if(t>n.baseY+n.height||t<n.baseY){t=n.rise>0?n.baseY:n.baseY+n.height;let a=i[o]+e;s=Math.cos(a)*n.spread*.7,r[o*3+2]=Math.sin(a)*n.spread*.7}r[o*3]=s,r[o*3+1]=t}o.needsUpdate=!0})}function Xg(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=5193010;for(let e=0;e<5;e++){let n=e/5*Math.PI*2+.4;Wg(r,0,t*.35,0,Math.cos(n)*t*.5,t*.08,Math.sin(n)*t*.5,t*.11,t*.03,i)}Gg(r,n,0,t*.1,0,.08,1,-.05,t*1.1,t*.2,3,i,(e,t,n,i)=>{r.blob(i*.26,e,t+i*.05,n,Bg,1.5,.5,1.5,0)}),qg(e,r)}function Zg(e){let{r:t,random:n}=e,r=new Z;Kg(r,e),r.cylinder(t*.2,t*.36,t*1.2,0,t*.6,0,6243636,8);for(let e=0;e<7;e++){let i=t*(1-e*.12)*(.95+n()*.12),a=t*(1.05+e*.56),o=t*.05*(n()-.5);r.cone(i,t*.95,o,a,o,e%2?2060117:2654303,9,{ry:n()*3,rz:(n()-.5)*.06}),r.cone(i*.58,t*.4,o,a+t*.3,o,Bg,9,{ry:n()*3})}Wg(r,t*-.86,t*.16,t*.34,t*-.16,t*.16,t*.76,t*.13,t*.09,5916216),r.blob(t*.13,t*-.5,t*.3,t*.55,Bg,3,.5,1.2,0);for(let[e,n,i]of[[.68,.42,.5],[.34,.76,.34]])r.cone(t*i*.55,t*i*1.4,t*e,t*i*.85,t*n,2654303,7),r.cone(t*i*.32,t*i*.6,t*e,t*i*1.25,t*n,Bg,7);qg(e,r)}function Qg(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=7170674;$(r,t*-.42,t*.85,t*-.4,t*.62,i,{sy:1.5,cap:.55}),$(r,t*.45,t*.75,t*-.42,t*.58,7828346,{sy:1.4,cap:.5}),$(r,0,t*1.5,t*-.5,t*.56,6644330,{sy:1.2,cap:.3}),$(r,t*.78,t*.25,t*-.04,t*.26,i,{cap:.2}),$(r,t*-.78,t*.25,t*.06,t*.3,7828346,{cap:.1});for(let e=0;e<9;e++){let i=t*(-.42+e*.105),a=1.05+n()*.8;r.blob(t*.13,i,t*a*.75,t*(-.12-n()*.08),e%2?12382207:9428210,1,a*2.9,.55,1)}for(let e=0;e<7;e++)r.cone(t*.04,t*(.25+n()*.3),t*(-.5+e*.17),t*(1.55+n()*.1),t*-.08,14219263,5,{rx:Math.PI});r.cylinder(t*.7,t*.74,t*.06,0,t*.12,t*.28,9098990,16),r.cylinder(t*.42,t*.44,t*.02,t*.08,t*.16,t*.3,12906746,12),qg(e,r)}function $g(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e);for(let e=0;e<6;e++){let a=e/6*Math.PI*2+r,o=t*(.14+n()*.36);$(i,Math.cos(a)*o,t*(.32+n()*.3),Math.sin(a)*o,t*(.42+n()*.14),e%2?12119290:9427182,{sx:1.2,sy:.24,sz:.9,rough:.12,cap:.3,ry:a,rx:(n()-.5)*.95,rz:(n()-.5)*.95})}qg(e,i)}function e_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=[9276050,8157570,10131360];[[-.32,.36,.04,.56,.8],[.34,.34,-.1,.52,.8],[.02,.32,.42,.34,.8],[-.04,.98,-.04,.5,.72],[.22,1.46,.02,.32,.8],[-.14,1.72,-.04,.24,.9]].forEach(([e,a,o,s,c],l)=>$(r,t*e,t*a,t*o,t*s,i[l%3],{sx:1.1,sy:c,rough:.12,cap:.42+n()*.2,ry:l*1.3}));for(let e=0;e<9;e++)r.blob(t*.08,t*(-.6+n()*1.2),t*(.25+n()*.8),t*(.28+n()*.26),e%2?13216079:10728026,1.3,.8,.35,0);qg(e,r)}function t_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=[9428204,10938612,7983076];for(let e=0;e<=11;e++){let a=e/11*Math.PI,o=.34-Math.sin(a)*.12;$(r,Math.cos(a)*t*.72,Math.sin(a)*t*1.32+t*.05,(n()-.5)*t*.1,t*o,i[e%3],{rough:.16,cap:Math.sin(a)>.8?.5:void 0,sz:1.05,seed:e*2.3})}for(let e=0;e<7;e++)r.cone(t*.05,t*(.22+n()*.26),t*(-.42+e*.14),t*(.98+Math.sin((e+1)/8*Math.PI)*.1),0,14219263,5,{rx:Math.PI});for(let[e,n,a]of[[-.3,.5,.17],[.28,.42,.12],[.02,-.5,.15]])$(r,t*e,t*a*.7,t*n,t*a,i[1],{rough:.25});qg(e,r)}function n_(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e,!1),i.cylinder(t*.8,t*.92,t*.16,0,t*.08,0,13483942,11,{ry:r}),i.cylinder(t*.66,t*.76,t*.12,t*.03,t*.2,0,14997696,10,{ry:r+1});for(let e=0;e<9;e++){let r=e/9*Math.PI*2+n()*.4;$(i,Math.cos(r)*t*.72,t*.22,Math.sin(r)*t*.72,t*(.1+n()*.08),7174784,{rough:.25,cap:.35,sy:.8})}qg(e,i);let a=Jg(e,new aa(t*.58,t*.58,t*.02,18),5233872);a.position.set(t*.03,t*.27,0),e.movers.push(e=>{a.material.color.setHSL(.47+Math.sin(e*.8+r)*.02,.72,.6+Math.sin(e*1.9+r)*.03)}),Yg(e,22,{color:16777215,size:Math.max(.5,t*.22),spread:t*.5,baseY:t*.3,height:t*1.9,rise:.9,windX:.12,opacity:.42})}function r_(e){let{r:t}=e,n=new Z;Kg(n,e),$(n,0,t*1,t*-.08,t*.68,6840414,{sy:1.75,cap:.28,rough:.28}),$(n,t*-.4,t*.6,t*.2,t*.42,7695464,{sy:1.5,cap:.3,rough:.28}),$(n,t*.44,t*.52,t*.14,t*.36,6182484,{sy:1.5,cap:.25,rough:.28}),$(n,t*.16,t*.3,t*.58,t*.28,7695464,{cap:.2,rough:.3}),$(n,t*-.62,t*.22,t*-.26,t*.26,6840414,{cap:.15,rough:.3}),qg(e,n),Yg(e,26,{color:16777215,size:Math.max(.35,t*.09),spread:t*.3,baseY:t*1.6,height:t*.8,rise:.25,windX:2.6,opacity:.7})}function i_(e){let{r:t}=e,n=new Z;Kg(n,e),$(n,0,t*.75,0,t*.74,12579067,{sx:1.15,sy:1.25,rough:.3,seed:2}),$(n,t*.34,t*1.45,t*-.08,t*.42,14481919,{sy:1.7,rough:.3,seed:5}),$(n,t*-.4,t*1.2,t*.1,t*.34,10478838,{sy:1.5,rough:.3,seed:7}),$(n,t*.1,t*.34,t*.56,t*.3,7653092,{sx:1.5,sy:.8,rough:.2}),$(n,t*-.6,t*.18,t*-.4,t*.26,5595242,{cap:.4}),qg(e,n)}function a_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e),r.cylinder(t*.3,t*.94,t*1.25,0,t*.62,0,4140844,11,{ry:.4}),r.cylinder(t*.38,t*.3,t*.1,0,t*1.28,0,2760736,11);for(let e=0;e<13;e++){let i=e/13*Math.PI*2+n(),a=n()*.85,o=t*(.92-a*.62);$(r,Math.cos(i)*o,t*a*1.2,Math.sin(i)*o,t*(.1+n()*.14),e%2?4864052:3483943,{rough:.3})}for(let e=0;e<4;e++){let i=e/4*Math.PI*2+.5,a=Math.cos(i)*t*.3,o=t*1.27,s=Math.sin(i)*t*.3;for(let e=1;e<=8;e++){i+=(n()-.5)*.34;let c=1-e*.115,l=t*(.98-c*.68),u=Math.cos(i)*l,d=c*t*1.27,f=Math.sin(i)*l;Wg(r,a,o,s,u,d,f,t*(.04+e*.006),t*(.05+e*.006),e<4?16752688:15750682),a=u,o=d,s=f}}qg(e,r);let i=Jg(e,new aa(t*.28,t*.28,t*.03,14),16757304);i.position.y=t*1.32,e.movers.push(e=>{i.material.color.setHSL(.09+Math.sin(e*2.3)*.02,1,.58)}),Yg(e,24,{color:4867140,size:Math.max(.8,t*.16),spread:t*.18,baseY:t*1.35,height:t*2,rise:1.6,windX:.6,opacity:.45}),Yg(e,12,{color:16752704,size:Math.max(.2,t*.03),spread:t*.2,baseY:t*1.35,height:t*1.2,rise:2.4,opacity:.95})}function o_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e),$(r,0,t*.3,0,t*.7,5199976,{sy:.7,rough:.28,cap:.5});for(let[e,i,a,o]of[[-.1,-.05,1.3,.12],[.34,.1,.95,-.34],[-.42,.14,.86,.42],[.12,-.44,.76,-.2],[-.14,.46,.62,.3],[.54,-.3,.5,-.55],[-.56,-.28,.48,.6]]){let s=n()<.5?3112936:5217524;r.add(new Oo(t*.24,0),s,t*e,t*(.48+a*.6),t*i,{rz:o,rx:(n()-.5)*.5,ry:n()*3},.9,a*3,.9)}qg(e,r)}function s_(e){let{r:t,index:n}=e,r=new Z;Kg(r,e),$(r,0,t*.62,0,t*.86,n%2?4999778:5723244,{sx:1.08,sy:.92+n%3*.12,rough:.16,cap:.35,seed:n+3}),$(r,t*.72,t*.2,t*.42,t*.28,4539226,{cap:.25}),qg(e,r)}function c_(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e);let a=2827810;Wg(i,0,0,0,t*.1,t*1.7,t*.05,t*.3,t*.17,a),Gg(i,n,t*.1,t*1.7,t*.05,-.45,.8,.15,t*.9,t*.14,2,a,()=>{}),Gg(i,n,t*.1,t*1.5,t*.05,.7,.6,-.1,t*.7,t*.1,1,a,()=>{}),qg(e,i);let o=new Z;for(let e=0;e<7;e++)o.blob(t*.05,t*(.02+e*.012),t*(.3+e*.2),t*.22,16777215,.7,2,.4,0);let s=new q(o.geometry(),new gi({color:16744496}));e.group.add(s),e.movers.push(e=>{s.material.color.setHSL(.06,1,.45+Math.sin(e*2.7+r)*.1)}),Yg(e,8,{color:5591125,size:Math.max(.5,t*.12),spread:t*.14,baseY:t*1.2,height:t*1.6,rise:.7,opacity:.35})}function l_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=[11029050,12082244,9387828];for(let[e,a,o]of[[-.1,-.08,2.6],[.46,.18,1.7],[-.52,.24,1.9],[.14,.58,1.05],[.42,-.46,1.25],[-.42,-.52,.95]]){let s=Math.max(2,Math.round(o*2));for(let c=0;c<s;c++){let l=c/s,u=.3-Math.sin(l*3.14)*.09+(n()-.5)*.04;$(r,t*e,t*(l*o+.08),t*a,t*u,i[c%3],{sy:1.25,rough:.24,ry:c})}$(r,t*e,t*(o+.16),t*a,t*.25,6967110,{sx:1.1,sy:.72,rough:.28,cap:.35})}qg(e,r)}function u_(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e);let a=t*(2.3+r%3*.6);i.cone(t*.82,a,0,a/2,0,9429746,6,{ry:n()*3,rz:(n()-.5)*.14}),i.cone(t*.5,a*.74,t*.46,a*.36,t*.2,13235967,5,{ry:n()*3,rz:-.18}),i.cone(t*.42,a*.56,t*-.5,a*.27,t*.08,6475752,5,{ry:n()*3,rz:.2}),i.cone(t*.3,a*.36,t*.05,a*.17,t*.62,11070712,5,{rx:.2}),$(i,t*.6,t*.15,t*-.5,t*.26,9428204,{rough:.25,cap:.3}),qg(e,i)}function d_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=[14263639,13012805,14923628,12091709];for(let e=0;e<7;e++){let a=.92-e*.055-(e>4?.1:0);$(r,t*(n()-.5)*.08,t*(.2+e*.28),t*(n()-.5)*.08,t*a,i[e%4],{sy:.42,rough:.2,ry:e*.9,seed:e+1})}$(r,0,t*2.02,0,t*.52,15914124,{sy:.24,rough:.2,cap:.05,capColor:Bg,seed:9}),$(r,t*.72,t*.2,t*.4,t*.24,i[1],{rough:.3}),qg(e,r)}function f_(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e);let a=.3;for(let e=-2;e<=2;e++)for(let o=-2;o<=2;o++){let s=(o+(e%2?.5:0))*a*1.02,c=e*a*.88;if(Math.hypot(s,c)>.86)continue;let l=(2.6-Math.hypot(s,c)*2.1)*(.7+n()*.55)+r%2*.3;i.cylinder(t*a*.56,t*a*.58,t*l,t*s,t*l/2,t*c,n()<.5?2368814:3092538,6),i.cylinder(t*a*.5,t*a*.56,t*.04,t*s,t*(l+.02),t*c,n()<.4?5918602:Bg,6)}qg(e,i)}function p_(e){let{r:t,random:n,index:r}=e,i=new Z;Kg(i,e);let a=[],o=[[0,0,1.75,.62],[.5,.26,1.05,.36],[-.5,.22,1.3,.42],[.08,.6,.62,.24],[-.26,-.5,.8,.28]];for(let[e,s,c,l]of o){let o=(n()-.5)*.2;i.cylinder(t*l*.2,t*l*.32,t*c,t*e,t*c/2,t*s,15260906,8,{rz:o});let u=t*e-Math.sin(o)*t*c*.5;i.blob(t*l,u,t*c,t*s,r%2?11099862:14048948,1,.5,1,2),i.blob(t*l*.72,u,t*(c+l*.34),t*s,Bg,1,.22,1,1),a.push([u,t*(c-l*.06),t*s])}qg(e,i);let s=new Z;a.forEach(([e,n,r],i)=>s.cylinder(t*o[i][3]*.88,t*o[i][3]*.2,t*.03,e,n,r,16777215,12));let c=new q(s.geometry(),new gi({color:16754928}));e.group.add(c),e.movers.push(e=>{c.material.color.setHSL(.86,1,.78+Math.sin(e*1.1+r)*.07)}),Yg(e,14,{color:16763124,size:Math.max(.16,t*.035),spread:t*.8,baseY:t*.3,height:t*1.8,rise:.3,opacity:.9})}function m_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e,!1),r.cylinder(t*.8,t*.88,t*.05,0,t*.03,0,2760990,18);for(let e=0;e<17;e++){let i=e/17*Math.PI*2+n()*.2,a=t*(.76+n()*.12);$(r,Math.cos(i)*a,t*.1,Math.sin(i)*a,t*(.12+n()*.1),e%2?5917252:4602170,{rough:.32,sy:1.1,cap:n()<.4?.3:void 0})}$(r,t*.03,t*.36,0,t*.42,2893091,{rough:.36,seed:4}),qg(e,r);let i=Jg(e,new Do(t*.13,0),16738852);i.position.set(t*.2,t*.46,t*.3);let a=Jg(e,new Do(t*.09,0),16761402);a.position.set(t*-.18,t*.5,t*.3),e.movers.push(e=>{let t=1+Math.sin(e*2.6)*.12;i.scale.setScalar(t),a.scale.setScalar(2-t)}),Yg(e,16,{color:5919312,size:Math.max(.5,t*.12),spread:t*.3,baseY:t*.7,height:t*1.6,rise:.9,opacity:.35})}function h_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e),$(r,0,t*.62,0,t*.88,7831674,{sx:1.05,sy:.92,rough:.14,cap:.28,capColor:6261336,seed:6}),$(r,t*-.2,t*1.22,t*.05,t*.5,7042158,{sy:.78,rough:.16,cap:-.05,capColor:7117410,seed:8});for(let[e,i,a,o]of[[.32,1.34,-.12,.42],[-.34,1.7,-.08,.34],[.02,1.62,.2,.28],[-.62,1.08,.24,.26]])r.cylinder(t*o*.08,t*o*.12,t*o*.5,t*e,t*(i+o*.2),t*a,6243636,6),r.cone(t*o*.52,t*o*1.3,t*e,t*(i+o*.95),t*a,3111512,7,{ry:n()*3}),r.cone(t*o*.26,t*o*.5,t*e,t*(i+o*1.3),t*a,Bg,7);for(let e=0;e<5;e++){let e=n()*6.28;$(r,Math.cos(e)*t*.74,t*.15,Math.sin(e)*t*.74,t*.14,7042158,{cap:.1,capColor:7117410})}qg(e,r)}function g_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=[4144210,4867934,3486282];for(let e=0;e<=12;e++){let a=e/12*Math.PI,o=.32-Math.sin(a)*.12+n()*.03;$(r,Math.cos(a)*t*.7,Math.sin(a)*t*1.5+t*.05,(n()-.5)*t*.1,t*o,i[e%3],{sz:1.15,rough:.2,cap:Math.sin(a)>.75?.45:void 0,seed:e*1.7})}$(r,t*-.72,t*.3,t*.3,t*.28,i[1],{cap:.3,rough:.28}),$(r,t*.66,t*.26,t*-.34,t*.3,i[2],{cap:.25,rough:.28}),qg(e,r)}function __(e){let{r:t,random:n}=e,r=new Z;Kg(r,e,!1),[[.86,10479350],[.72,5223644],[.56,2060206],[.38,1064048],[.2,399928]].forEach(([e,n],i)=>{r.cylinder(t*e,t*e,t*.02,0,t*(.03+i*.012),0,n,22)});for(let e=0;e<16;e++){let i=e/16*Math.PI*2+n()*.2,a=t*(.8+n()*.1),o=t*(.3+n()*.45);r.cone(t*(.09+n()*.07),o,Math.cos(i)*a,o*.42,Math.sin(i)*a,e%2?12579066:9428204,5,{rz:Math.cos(i)*.36,rx:-Math.sin(i)*.36})}qg(e,r),Yg(e,18,{color:12578815,size:Math.max(.2,t*.05),spread:t*.45,baseY:t*.1,height:t*1.2,rise:.55,opacity:.7})}function v_(e){let{r:t,random:n}=e,r=new Z;Kg(r,e);let i=5916210;for(let e=0;e<7;e++){let n=e/7*Math.PI*2;Wg(r,0,t*.5,0,Math.cos(n)*t*.82,t*.06,Math.sin(n)*t*.82,t*.18,t*.04,i)}Gg(r,n,0,0,0,.02,1,0,t*1.6,t*.38,3,i,(e,t,i,a)=>{let o=n()<.4?16765770:n()<.5?15773744:16769658;r.blob(a*1.05,e,t,i,o,1.15,.8,1.15,1)}),qg(e,r),Yg(e,34,{color:16765770,size:Math.max(.24,t*.05),spread:t*2.4,baseY:.2,height:t*3.6,rise:-.8,windX:.5,opacity:.95})}var y_={loneOak:Xg,ancientPine:Zg,frozenFalls:Qg,iceFloes:$g,tor:e_,iceArch:t_,hotSpring:n_,crag:r_,iceberg:i_,volcano:a_,crystals:o_,erratics:s_,burntTree:c_,hoodoos:l_,seracs:u_,butte:d_,basalt:f_,fungi:p_,meteor:m_,mossBoulder:h_,rockArch:g_,sinkhole:__,goldenTree:v_},b_=.26,x_=class{constructor(e){X(this,`group`,new Fn),X(this,`movers`,[]),X(this,`fading`,[]),X(this,`time`,0),X(this,`truckX`,0),X(this,`truckZ`,0);let t=e.obstacles??[];if(!e.landmark)return;let n=e.landmark;t.forEach((t,r)=>{let i=new Fn;i.position.set(t.x,0,t.z),this.group.add(i);let a=0,o=e.sections[e.sections.length-1];for(let n of e.sections)if(a-=n.depth,t.z>=a){o=n;break}let s=ad[o.type];y_[n]({group:i,movers:this.movers,r:t.r,index:r,snow:s.topColor,shade:s.shadeColor,random:Vg(r+t.r+1)}),this.fading.push(this.prepareFade(i,t))})}prepareFade(e,t){let n=[];e.traverse(e=>{let t=e;if(!t.isMesh)return;let r=t.material;if(r.transparent)return;let i=r.clone();t.material=i,n.push(i)}),e.updateWorldMatrix(!0,!0);let r=new ar;return e.traverse(e=>{e.isMesh&&r.expandByObject(e)}),{obstacle:t,reach:r.max.y*.85+t.r,materials:n,opacity:1}}setTruck(e,t){this.truckX=e,this.truckZ=t}update(e){this.time+=e;for(let t of this.movers)t(this.time,e);for(let t of this.fading){let{obstacle:n}=t,r=n.z-this.truckZ,i=r>-n.r*.4&&r<t.reach&&Math.abs(this.truckX-n.x)<n.r+3.5?b_:1;if(t.opacity===i)continue;t.opacity+=(i-t.opacity)*Math.min(1,e*7),Math.abs(t.opacity-i)<.01&&(t.opacity=i);let a=t.opacity>=1;for(let e of t.materials)e.transparent===a&&(e.transparent=!a,e.depthWrite=a,e.needsUpdate=!0),e.opacity=t.opacity}}};function S_(e,t){let n=new Z;switch(e){case`youngBirch`:n.cylinder(.08,.14,2.8,0,1.4,0,15262938,6);for(let[e,t]of[[1.6,.5],[2.1,-.45],[2.5,.32]])Wg(n,0,e,0,t,e+.7,.1,.05,.02,9405560);n.blob(.8,0,3.1,0,9416312,1,.8,1,1),n.blob(.62,.05,3.42,0,Bg,1,.5,1,1);break;case`tallPines`:n.cylinder(.16,.3,1.5,0,.75,0,6965812,6);for(let e=0;e<5;e++)n.cone(1.25-e*.2,1.5,0,1.8+e,0,t,8),n.cone(.74-e*.12,.6,0,2.3+e,0,Bg,8);break;case`boulders`:$(n,0,.75,0,1.2,8817302,{sy:.8,cap:.3}),$(n,1.25,.35,.45,.62,7698820,{cap:.3});break;case`iceChunks`:$(n,0,.6,0,1,12381432,{sx:1.2,sy:.8,rough:.3}),$(n,1,.3,.5,.52,9887728,{rough:.3});break;case`lichenRocks`:$(n,0,.6,0,.95,9276050,{sy:.8,rough:.15,cap:.4}),n.blob(.26,.42,.62,.68,13216079,1.4,.8,.4,0),n.blob(.2,-.3,.46,.76,10728026,1.4,.8,.4,0);break;case`seracStubs`:n.cone(.95,2.8,0,1.4,0,9429746,5,{rz:.1}),n.cone(.55,1.6,.8,.8,.3,12645371,5,{rz:-.12});break;case`frostShrubs`:for(let[e,t,r]of[[0,0,.82],[.8,.3,.52],[-.72,.2,.46]])n.add(Hg(r,e+2,.22),5220496,e,r*.72,t,{},1,.9,1),n.add(Ug(Hg(r,e+2,.22),r,.35),14090228,e,r*.72,t,{},1,.9,1);break;case`crags`:$(n,0,1.3,0,1,6840414,{sy:1.7,cap:.3,rough:.3}),$(n,.9,.55,.3,.6,7695464,{sy:1.3,cap:.3,rough:.3});break;case`icebergs`:$(n,0,1.2,0,1.25,13234426,{sy:1.3,rough:.34}),$(n,.85,.55,.2,.7,11068660,{sy:1.2,rough:.3});break;case`lavaRocks`:$(n,0,.75,0,1.15,3811878,{rough:.32}),n.blob(.14,.5,.82,.82,16747051,2,.5,.5,0),n.blob(.11,-.3,.5,.92,16742948,2,.5,.5,0);break;case`crystals`:$(n,0,.3,0,.8,5199976,{sy:.6}),n.add(new Oo(.62,0),t,0,1.5,0,{rz:.12},1,2.6,1),n.add(new Oo(.38,0),7977215,.62,1,.2,{rz:-.4},1,2.4,1);break;case`erraticStones`:$(n,0,.9,0,1.15,4999778,{sy:.9,rough:.14,cap:.3});break;case`burntTrees`:Wg(n,0,0,0,.12,3,0,.26,.12,2827810),Wg(n,.08,2,0,-.75,3.2,.1,.1,.03,2827810),Wg(n,.1,2.5,0,.8,3.5,-.1,.08,.02,2827810);break;case`redRocks`:for(let e=0;e<5;e++)$(n,0,.3+e*.62,0,.72-e*.07,e%2?11029050:12082244,{sy:.6,rough:.12,ry:e});break;case`iceSpires`:n.cone(.9,5,0,2.5,0,10480374,5,{rz:.06}),n.cone(.5,3,.7,1.5,.3,13235967,5,{rz:-.1});break;case`dryGrass`:for(let e=0;e<11;e++){let t=e*2.4,r=.08+e%4*.2;Wg(n,Math.cos(t)*r,0,Math.sin(t)*r,Math.cos(t)*(r+.5),1+e%3*.32,Math.sin(t)*(r+.5),.05,.012,e%2?14729328:13215319)}break;case`basaltStubs`:for(let[e,t,r]of[[0,0,2.6],[.54,.3,1.7],[-.54,.3,1.25],[0,-.6,2.05]])n.cylinder(.36,.38,r,e,r/2,t,2368814,6),n.cylinder(.32,.36,.04,e,r+.02,t,Bg,6);break;case`smallFungi`:n.cylinder(.14,.24,1.6,0,.8,0,15260906,7),n.blob(.8,0,1.6,0,14048948,1,.48,1,1),n.cylinder(.08,.14,.8,.7,.4,.2,15260906,6),n.blob(.42,.7,.8,.2,11099862,1,.48,1,1);break;case`craterRocks`:for(let e=0;e<6;e++){let t=e/6*Math.PI*2;$(n,Math.cos(t)*1.3,.25,Math.sin(t)*1.3,.48,e%2?5917252:4602170,{rough:.3})}break;case`mossyRocks`:$(n,0,.65,0,1,7831674,{sy:.8,rough:.14,cap:.15,capColor:7117410}),$(n,1,.3,.3,.46,7042158,{cap:.1,capColor:7117410});break;case`darkRocks`:$(n,0,1.1,0,.95,4144210,{sy:1.4,cap:.3,rough:.28}),$(n,.82,.4,.2,.56,4867934,{cap:.2,rough:.28});break;case`iceShards`:for(let e=0;e<5;e++){let t=e*1.3;n.cone(.34,1.7+e%3*.8,Math.cos(t)*.5,.9+e%3*.3,Math.sin(t)*.5,e%2?12579066:8376556,5,{rz:Math.cos(t)*.25,rx:-Math.sin(t)*.25})}break;case`goldPines`:n.cylinder(.16,.22,.9,0,.45,0,8018498,6),n.cone(1.15,1.5,0,1.4,0,14725184,8),n.cone(.92,1.3,0,2.2,0,15777856,8),n.cone(.66,1.15,0,3,0,16767072,8),n.cone(.38,.6,0,3.32,0,16774344,8)}return n.geometry()}function C_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function w_(e,t,n,r,i){let a=new za;return a.moveTo(e+i,n),a.lineTo(t-i,n),a.quadraticCurveTo(t,n,t,n+i),a.lineTo(t,r-i),a.quadraticCurveTo(t,r,t-i,r),a.lineTo(e+i,r),a.quadraticCurveTo(e,r,e,r-i),a.lineTo(e,n+i),a.quadraticCurveTo(e,n,e+i,n),a}function T_(e,t,n,r,i,a,o,s){let c=new wo(w_(e,t,-r,-n,a),{depth:i,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:2,curveSegments:6});c.rotateX(-Math.PI/2),c.translate(0,-i-.5,0);let l=new q(c,[new Wo({color:o}),new Wo({color:s,flatShading:!0})]);return l.receiveShadow=!0,l}function E_(e){let t=new Z;return t.cylinder(.16,.22,.9,0,.45,0,8018498,6),t.cone(1.15,1.5,0,1.4,0,e,8),t.cone(.92,1.3,0,2.2,0,e,8),t.cone(.66,1.15,0,3,0,e,8),t.cone(.62,.72,0,1.92,0,16449023,8),t.cone(.5,.62,0,2.62,0,16449023,8),t.cone(.38,.6,0,3.32,0,16449023,8),t.geometry()}function D_(e,t,n){let r=new zi(e,cf,t.length),i=new sn,a=new Lt,o=new W(0,1,0),s=new W,c=new W;return t.forEach((e,t)=>{a.setFromAxisAngle(o,e.rotation),i.compose(s.set(e.x,e.y,e.z),a,c.set(e.scale,e.scale*e.sy,e.scale)),r.setMatrixAt(t,i)}),r.castShadow=n,r.frustumCulled=!1,r}var O_={sell:{label:`SELL`,icon:`coin`,color:`#26b35e`},upgrade:{label:`UPGRADES`,icon:`wrench`,color:`#2f8dea`},shop:{label:`SHOP`,icon:`plow`,color:`#9256e6`},travel:{label:`NEXT FIELD`,icon:`flag`,color:`#f0902c`}},k_=class{constructor(e,t){X(this,`level`,void 0),X(this,`layout`,void 0),X(this,`group`,new Fn),X(this,`pads`,[]),X(this,`factory`,void 0),X(this,`carriers`,void 0),X(this,`production`,new Ch),X(this,`landmark`,null),X(this,`buyPad`,null),X(this,`time`,0),this.level=e,this.layout=t;let n=C_(e.id.length*7919+e.width*131);this.buildSky(),this.buildLake(n),this.buildIslands(),this.buildBridge(),this.buildBase(),this.buildPads(),this.buildScenery(n),this.factory=new bg(t),this.carriers=new zg(this.factory),this.group.add(this.production.group),e.landmark&&e.obstacles&&(this.landmark=new x_(e),this.group.add(this.landmark.group)),this.group.add(this.factory.group,this.carriers.group)}buildSky(){let{palette:e}=this.level,t=new q(new Mo(380,16,12),new Ho({side:1,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new K(e.skyTop)},uBottom:{value:new K(e.skyBottom)}},vertexShader:`varying float vY; void main() { vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uTop; uniform vec3 uBottom; varying float vY; void main() {
        gl_FragColor = vec4(mix(uBottom, uTop, smoothstep(0.0, 0.55, vY)), 1.0);
        #include <colorspace_fragment>
      }`}));t.renderOrder=-10,this.group.add(t)}buildLake(e){let{palette:t}=this.level,n=document.createElement(`canvas`);n.width=n.height=256;let r=n.getContext(`2d`);r.fillStyle=`#ffffff`,r.fillRect(0,0,256,256),r.strokeStyle=`rgba(255,255,255,0)`,r.globalAlpha=.5,r.strokeStyle=`#d7e8f4`,r.lineWidth=1.6;for(let t=0;t<16;t++){let t=e()*256,n=e()*256;r.beginPath(),r.moveTo(t,n);for(let i=0;i<5;i++)t+=(e()-.5)*70,n+=(e()-.5)*70,r.lineTo(t,n);r.stroke()}let i=new ea(n);i.wrapS=i.wrapT=l,i.repeat.set(26,26),i.colorSpace=Ge;let a=new q(new ko(900,900),new Wo({color:t.lake,map:i}));a.rotation.x=-Math.PI/2,a.position.y=-1.6,a.receiveShadow=!0,this.group.add(a);let o=new Z;o.cylinder(1,1.1,.3,0,0,0,15857919,7);let s=[],{fieldWidth:c,fieldDepth:u}=this.layout;for(let t=0;t<26;t++){let t=e(),n=zd.islandMargin+4,r,i;t<.5?(r=(e()<.5?-1:1)*(c/2+n+e()*34),i=30-e()*(u+70)):(r=(e()-.5)*120,i=-u-n-e()*30),s.push({x:r,y:-1.48,z:i,scale:.9+e()*2.6,sy:.5,rotation:e()*6})}this.group.add(D_(o.geometry(),s,!1))}buildIslands(){let{palette:e}=this.level,{fieldWidth:t,fieldDepth:n,base:r}=this.layout,i=zd.islandMargin,a=T_(-t/2-i,t/2+i,-n-i,1.6,3.2,3.5,e.island,e.islandSide);a.position.y=-.04,this.group.add(a);let o=T_(r.minX-.5,r.maxX+.5,r.minZ-.5,r.maxZ+zd.factoryDepth+.5,3,2.6,14542575,e.islandSide);o.position.y=-.04,this.group.add(o)}buildBridge(){let e=zd.bridgeWidth/2,t=zd.bridgeLength,n=new Z;n.box(zd.bridgeWidth+.5,.3,t+1.4,0,-.22,t/2+.7,8346691);let r=Math.round((t+1.2)/.62);for(let e=0;e<r;e++){let i=.05+(e+.5)*((t+1.2)/r);n.box(zd.bridgeWidth+.2,.08,.52,0,0,i,e%2==0?12882271:12026708)}for(let r of[-1,1]){let i=r*(e+.22);n.round(.2,.2,t-.4,i,.72,t/2,14962245,.06);for(let e=1.9;e<=t-1.2;e+=1.6)n.cylinder(.11,.13,.76,i,.36,e,9398861,6);n.blob(.42,i,.92,1.4,16317695,1,.6,1),n.blob(.42,i,.92,t-.8,16317695,1,.6,1)}let i=n.build();i.receiveShadow=!0,i.castShadow=!0,this.group.add(i)}buildBase(){let{base:e}=this.layout,t=zd.bridgeLength,n=new Z;n.box(10,.04,18,0,.005,e.minZ+9,13161439);let r=t+.95;n.round(8.4,2.3,1.9,-12,1.15,r,3839468,.14),n.round(8.9,.34,2.5,-12,2.42,r+.1,2253748,.1),n.round(8.5,.5,2.3,-12,2.8,r+.1,16449023,.2),n.round(3.2,1.7,.1,-13.9,.9,r+.96,1784415,.04);for(let e=0;e<4;e++)n.box(3,.05,.05,-13.9,.3+e*.42,r+1.02,5206934);n.round(1.5,1,.08,-9.6,1.3,r+.96,12576511,.03),n.box(.08,1,.1,-9.6,1.3,r+1,16777215),n.cylinder(.3,.34,1,-8.4,.5,r+1.4,15028038,8),n.cylinder(.3,.34,1,-9,.5,r+1.5,15909438,8),n.round(8.4,2.5,1.9,12,1.25,r,10512110,.14),n.round(8.9,.34,2.5,12,2.6,r+.1,7225280,.1),n.round(8.5,.5,2.3,12,2.98,r+.1,16449023,.2);for(let e of[-2.5,0,2.5])n.round(2,1.76,.1,12+e,1,r+.96,13167871,.04),n.box(2.1,.1,.12,12+e,1.92,r+.99,16773368);let i=[[e.minX+1,e.minZ+3.5],[e.maxX-1,e.minZ+3.5]];for(let[e,t]of i)n.cylinder(.08,.13,2.5,e,1.25,t,4674922,6),n.blob(.3,e,2.68,t,16773296,1,1,1,1),n.cone(.38,.22,e,2.98,t,16449023,8);for(let t=e.minX+2;t<=e.maxX-2;t+=2.6)n.round(.26,.5,.26,t,.25,e.maxZ+.1,15770426,.05),n.blob(.22,t,.54,e.maxZ+.1,16777215,1.1,.5,1.1,0);let a=e.maxZ+zd.factoryDepth;for(let t=e.minZ+4;t<=a-.5;t+=2.6)for(let r of[e.minX+.05,e.maxX-.05])n.round(.26,.5,.26,r,.25,t,15770426,.05),n.blob(.22,r,.54,t,16777215,1.1,.5,1.1,0);let o=e.maxZ+zd.factoryLane,s=zd.factoryDepth-zd.factoryLane;n.round(e.maxX-e.minX-1.6,.1,s-.5,0,.03,o+s/2,11187907,.05);for(let t=e.minX+2;t<=e.maxX-2;t+=2.6)n.round(.26,.5,.26,t,.25,a+.1,15770426,.05),n.blob(.22,t,.54,a+.1,16777215,1.1,.5,1.1,0);for(let t=e.minX+2;t<=e.maxX-2;t+=2.6)n.round(.26,.5,.26,t,.25,o,15770426,.05),n.blob(.22,t,.54,o,16777215,1.1,.5,1.1,0);n.round(e.maxX-e.minX-2,.08,.08,0,.36,o,14257452,.02),n.round(e.maxX-e.minX-2,.08,.08,0,.36,a+.1,14257452,.02);for(let[t,r,i]of[[e.minX+1.3,e.minZ+2.3,.8],[e.maxX-1.3,e.minZ+2.3,.8]])n.blob(i,t,0,r,16054783,1.5,.45,1);let c=n.build();c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}buildPads(){let e=It.degToRad(Bd.yawDeg);for(let t of this.layout.zones){let n=O_[t.id],r=t.halfX*2,i=t.halfZ*2,a=new gi({map:jf(r,i,n.label,n.icon,n.color,e),transparent:!0,depthWrite:!1}),o=new q(new ko(r,i),a);o.rotation.x=-Math.PI/2,o.position.set(t.x,.06,t.z),o.renderOrder=1,this.group.add(o),this.pads.push({id:t.id,mesh:o,material:a,time:0,highlight:!1})}}buildScenery(e){let{palette:t,treeDensity:n}=this.level,{fieldWidth:r,fieldDepth:i}=this.layout,a=zd.islandMargin,o=r/2,s=[],c=(t,n)=>{s.push({x:t,y:-.02,z:n,scale:.85+e()*.85,sy:.95+e()*.45,rotation:e()*6.28})},l=2.6/n;for(let t=-i-a+2;t<0;t+=l)for(let n of[-1,1])e()<.82&&c(n*(o+2+e()*(a-3.4)),t+e()*1.4);for(let t=-o-a+2;t<o+a-1;t+=l)e()<.9&&c(t+e(),-i-2-e()*(a-3.4));this.group.add(D_(this.level.scenery?S_(this.level.scenery,t.tree):E_(t.tree),s,!0));let u=new Z;u.blob(1,0,0,0,16186367,1,1,1,1);let d=[],f=(t,n)=>{d.push({x:t,y:0,z:n,scale:.75+e()*.55,sy:.55+e()*.3,rotation:e()*6.28})};for(let e=-i-.4;e<=.4;e+=1.15)f(-o-.55,e),f(o+.55,e);for(let e=-o;e<=o;e+=1.15)f(e,-i-.55),Math.abs(e)>zd.bridgeWidth/2+1&&f(e,.55);this.group.add(D_(u.geometry(),d,!1));let p=new Z;p.add(new ca(.8,0),8951464,0,.25,0,{},1,.75,1),p.blob(.5,.05,.72,0,16514559,1.05,.34,1.05,0);let m=[];for(let t=0;t<16;t++){let t=e()<.7,n=t?(e()<.5?-1:1)*(o+2+e()*(a-3)):(e()-.5)*(r+a),s=t?-e()*i:-i-1.5-e()*(a-3);m.push({x:n,y:0,z:s,scale:.6+e()*.9,sy:1,rotation:e()*6.28})}this.group.add(D_(p.geometry(),m,!1));let h=new Z,g=(n,r,i,a)=>{let o=5+Math.floor(e()*3),s={ry:e()*6};h.cone(i,a,n,a/2-1.6,r,t.mountain,o,s),h.cone(i*.44,a*.44,n,a*.78-1.6,r,16514559,o,s)},_=-i-a;for(let t=0;t<13;t++)g(-110+t*19+e()*7,_-18-e()*26,15+e()*15,22+e()*28);for(let t=0;t<7;t++)g(-o-a-30-e()*28,_+t*22+e()*8,14+e()*12,18+e()*22);this.group.add(h.build())}setBuyPad(e,t,n,r,i){this.buyPad?.stage!==t&&(this.clearBuyPad(),t&&this.createBuyPad(t)),this.factory.setGhost(t?e:null,i);let a=this.buyPad;a&&t&&(a.affordable=i,a.sign.draw(t.name,n,r,i),a.plate.material.color.setHex(i?3725690:9084853),a.ring.material.color.setHex(i?13172696:14411504))}createBuyPad(e){let t=this.layout.factoryPadZ(),n=new q(new ia(wh*2-.3,.14,Th*2-.3),new gi({color:3725690}));n.position.set(e.x,.09,t);let r=new q(new ia(wh*2,.08,Th*2),new gi({color:13172696}));r.position.set(e.x,.05,t);let i=new Mf(4.4);i.sprite.position.set(e.x,2.4,t),this.group.add(r,n,i.sprite),this.buyPad={stage:e,plate:n,ring:r,sign:i,affordable:!1,pop:0}}clearBuyPad(){let e=this.buyPad;if(e){for(let t of[e.plate,e.ring])this.group.remove(t),t.geometry.dispose(),t.material.dispose();this.group.remove(e.sign.sprite),e.sign.dispose(),this.buyPad=null}}highlightPad(e){for(let t of this.pads)t.highlight=t.id===e}setTruck(e,t){this.landmark?.setTruck(e,t)}update(e,t){this.time+=e;for(let e of this.pads){let n=e.id===t,r=e.highlight?.5+.5*Math.sin(this.time*6):0,i=1+r*.035+(n?.02:0);e.mesh.scale.set(i,i,1),e.material.opacity=n?1:.82+r*.18}let n=this.buyPad;if(n){n.pop=Math.min(1,n.pop+e*3);let t=n.pop,r=1+2.7*(t-1)**3+1.7*(t-1)**2,i=n.affordable?1+Math.sin(this.time*5)*.03:1;n.plate.scale.set(r*i,1,r*i),n.ring.scale.set(r*(n.affordable?1+Math.sin(this.time*5)*.07:1),1,r*(n.affordable?1+Math.sin(this.time*5)*.07:1)),n.sign.sprite.position.y=2.4+Math.sin(this.time*2.4)*.09}this.factory.update(e),this.production.update(e),this.landmark?.update(e)}dispose(){this.clearBuyPad(),this.factory.dispose(),hf(this.group)}},A_=1/60,j_=.1,M_=class{constructor(e,t){X(this,`step`,void 0),X(this,`render`,void 0),X(this,`raf`,0),X(this,`last`,0),X(this,`accumulator`,0),X(this,`running`,!1),X(this,`tick`,e=>{if(!this.running)return;this.raf=requestAnimationFrame(this.tick);let t=Math.min((e-this.last)/1e3,j_);for(this.last=e,this.accumulator+=t;this.accumulator>=A_;)this.step(A_),this.accumulator-=A_;this.render(t,this.accumulator/A_)}),this.step=e,this.render=t}start(){this.running||(this.running=!0,this.last=performance.now(),this.accumulator=0,this.raf=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}};function N_(e,t){let n=(t-e)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}var P_=class{constructor(){X(this,`x`,0),X(this,`z`,0),X(this,`prevX`,0),X(this,`prevZ`,0),X(this,`heading`,0),X(this,`prevHeading`,0),X(this,`speed`,0),X(this,`colliding`,!1)}teleport(e,t,n=0){this.x=this.prevX=e,this.z=this.prevZ=t,this.heading=this.prevHeading=n,this.speed=0}get dirX(){return Math.sin(this.heading)}get dirZ(){return-Math.cos(this.heading)}update(e,t,n,r,i,a){this.prevX=this.x,this.prevZ=this.z,this.prevHeading=this.heading;let o=Math.min(1,Math.hypot(t,n)),s=0;if(o>bd.deadZone){let i=Math.atan2(t,-n),a=N_(this.heading,i),c=bd.turnRate*e;this.heading+=Math.abs(a)<=c?a:Math.sign(a)*c;let l=Math.max(.25,Math.cos(Math.min(Math.abs(a),Math.PI/2)));s=r*o*l}let c=(s>this.speed?bd.acceleration:bd.deceleration)*e;this.speed+=Math.max(-c,Math.min(c,s-this.speed));let l=this.dirX*this.speed*e,u=this.dirZ*this.speed*e,d=this.x+l,f=this.z+u;if(this.colliding=!1,a.isWalkable(d,f,i))this.x=d,this.z=f;else{this.colliding=!0;let e=a.landmarks.find(e=>Math.hypot(d-e.x,f-e.z)<e.r+i);if(e){let t=Math.hypot(this.x-e.x,this.z-e.z)||1,n=(this.x-e.x)/t,r=(this.z-e.z)/t,o=l*n+u*r,s=this.x+l-Math.min(0,o)*n,c=this.z+u-Math.min(0,o)*r,d=e.r+i+.01,f=Math.hypot(s-e.x,c-e.z)||1,p=e.x+(s-e.x)/f*Math.max(f,d),m=e.z+(c-e.z)/f*Math.max(f,d);if(a.isWalkable(p,m,i)){this.x=p,this.z=m;return}}a.isWalkable(d,this.z,i)?this.x=d:a.isWalkable(this.x,f,i)?this.z=f:this.speed*=.5}}};function F_(){return{quantity:0,value:0,contact:0,effectiveness:1,resistance:0,capacityHit:!1,section:-1}}var I_=class{constructor(e){X(this,`cols`,void 0),X(this,`rows`,void 0),X(this,`cell`,void 0),X(this,`width`,void 0),X(this,`depth`,void 0),X(this,`originX`,void 0),X(this,`originZ`,void 0),X(this,`heights`,void 0),X(this,`strokes`,void 0),X(this,`rowSection`,void 0),X(this,`sectionCount`,void 0),X(this,`sectionCells`,void 0),X(this,`sectionRemaining`,void 0),X(this,`durability`,void 0),X(this,`resistance`,void 0),X(this,`quantityPerCell`,void 0),X(this,`pricePerUnit`,void 0),X(this,`sectionRowStart`,void 0),X(this,`sectionRowEnd`,void 0),X(this,`blockedCells`,[]),X(this,`sectionFarZ`,[]),X(this,`totalQuantity`,0),X(this,`totalValue`,0),X(this,`dirtyMinI`,1/0),X(this,`dirtyMaxI`,-1),X(this,`dirtyMinJ`,1/0),X(this,`dirtyMaxJ`,-1),this.cell=e.cellSize,this.width=e.width,this.depth=e.sections.reduce((e,t)=>e+t.depth,0),this.cols=Math.round(this.width/this.cell),this.rows=Math.round(this.depth/this.cell),this.originX=-this.width/2,this.originZ=-this.depth,this.heights=new Float32Array(this.cols*this.rows).fill(1),this.strokes=new Uint8Array(this.cols*this.rows),this.rowSection=new Uint8Array(this.rows);let t=e.sections.length;this.sectionCount=t,this.sectionCells=new Int32Array(t),this.sectionRemaining=new Float64Array(t),this.durability=new Float64Array(t),this.resistance=new Float64Array(t),this.quantityPerCell=new Float64Array(t),this.pricePerUnit=new Float64Array(t),this.sectionRowStart=new Int32Array(t),this.sectionRowEnd=new Int32Array(t);let n=0;for(let r=0;r<t;r++){let t=e.sections[r],i=ad[t.type];this.durability[r]=t.durability??i.durability*(e.hardness??1),this.resistance[r]=i.resistance,this.quantityPerCell[r]=i.density*this.cell*this.cell,this.pricePerUnit[r]=sd.basePrice*i.value*e.valueMultiplier,n-=t.depth,this.sectionFarZ.push(n);let a=n+t.depth,o=Math.max(0,Math.round((n-this.originZ)/this.cell)),s=Math.min(this.rows,Math.round((a-this.originZ)/this.cell));this.sectionRowStart[r]=o,this.sectionRowEnd[r]=s;for(let e=o;e<s;e++)this.rowSection[e]=r;this.sectionCells[r]=(s-o)*this.cols,this.sectionRemaining[r]=this.sectionCells[r],this.totalQuantity+=this.sectionCells[r]*this.quantityPerCell[r],this.totalValue+=this.sectionCells[r]*this.quantityPerCell[r]*this.pricePerUnit[r]}this.carveObstacles(e)}carveObstacles(e){for(let t of e.obstacles??[]){let e=Math.max(0,Math.floor((t.x-t.r-this.originX)/this.cell)),n=Math.min(this.cols-1,Math.ceil((t.x+t.r-this.originX)/this.cell)),r=Math.max(0,Math.floor((t.z-t.r-this.originZ)/this.cell)),i=Math.min(this.rows-1,Math.ceil((t.z+t.r-this.originZ)/this.cell));for(let a=r;a<=i;a++)for(let r=e;r<=n;r++){let e=this.originX+(r+.5)*this.cell,n=this.originZ+(a+.5)*this.cell,i=Math.atan2(n-t.z,e-t.x),o=t.r*(.82+Math.sin(i*3+t.x)*.06+Math.sin(i*7+t.z)*.04);if(Math.hypot(e-t.x,n-t.z)>o)continue;let s=a*this.cols+r;if(this.heights[s]===0)continue;this.heights[s]=0,this.blockedCells.push(s);let c=this.rowSection[a];this.sectionCells[c]--,this.sectionRemaining[c]--,this.totalQuantity-=this.quantityPerCell[c],this.totalValue-=this.quantityPerCell[c]*this.pricePerUnit[c]}}}get sections(){return this.sectionCount}sectionRatio(e){let t=this.sectionCells[e];return t>0?this.sectionRemaining[e]/t:0}remainingRatio(){let e=0,t=0;for(let n=0;n<this.sectionCount;n++)e+=this.sectionRemaining[n],t+=this.sectionCells[n];return t>0?e/t:0}sectionWorth(e){let t=this.sectionRemaining[e]*this.quantityPerCell[e];return{quantity:t,value:t*this.pricePerUnit[e]}}fractionAt(e,t){let n=Math.floor((e-this.originX)/this.cell),r=Math.floor((t-this.originZ)/this.cell);return n<0||r<0||n>=this.cols||r>=this.rows?0:this.heights[r*this.cols+n]}clear(e,t,n){n.quantity=0,n.value=0,n.contact=0,n.effectiveness=1,n.resistance=0,n.capacityHit=!1,n.section=-1;let{cell:r,cols:i,heights:a}=this,{dirX:o,dirZ:s,halfWidth:c,halfDepth:l}=e,u=-s,d=o,f=Math.abs(u)*c+Math.abs(o)*l+r,p=Math.abs(d)*c+Math.abs(s)*l+r,m=Math.max(0,Math.floor((e.x-f-this.originX)/r)),h=Math.min(i-1,Math.ceil((e.x+f-this.originX)/r)),g=Math.max(0,Math.floor((e.z-p-this.originZ)/r)),_=Math.min(this.rows-1,Math.ceil((e.z+p-this.originZ)/r));if(m>h||g>_)return;let v=t.capacityLeft,y=Math.round((.5+.35355*(o-s))*255),b=0,x=0,S=0,C=1/r;for(let f=g;f<=_;f++){let p=this.rowSection[f],g=this.originZ+(f+.5)*r-e.z,_=Math.max(od.minEffectiveness,t.power/this.durability[p]),w=this.resistance[p]/(1+Math.max(0,_-1)*od.powerRelief),T=this.quantityPerCell[p],E=this.pricePerUnit[p],D=(_>=1?_:_**+od.denseCutPower)*t.rate*t.dt,O=f*i;for(let t=m;t<=h;t++){let i=O+t,m=a[i];if(m<=0)continue;let h=this.originX+(t+.5)*r-e.x,k=Math.abs(h*u+g*d),A=Math.abs(h*o+g*s),j=(c-k)*C+.5;if(j<=0)continue;let M=(l-A)*C+.5;if(M<=0)continue;let N=Math.min(1,j,M);b+=N,x+=N*Math.min(1,_),S+=N*w;let ee=1-N;if(m<=ee+1e-5)continue;let P=Math.min(m-ee,D);m-P<od.crumb&&(P=m);let te=P*T;if(te>v){if(n.capacityHit=!0,v<=0)continue;te=v,P=te/T}a[i]=m-P,this.strokes[i]=y,v-=te,n.quantity+=te,n.value+=te*E,n.section=p,this.sectionRemaining[p]-=P,this.markDirty(t,f)}}if(b>0){n.effectiveness=x/b,n.resistance=S/b;let e=2*c/r;n.contact=Math.min(1,b/e)}}sweep(e,t,n){n.quantity=0,n.value=0;let r=this.sectionRowStart[e],i=this.sectionRowEnd[e],a=this.quantityPerCell[e],o=this.pricePerUnit[e];for(let s=r;s<i;s++)for(let r=0;r<this.cols;r++){let i=s*this.cols+r,c=this.heights[i];if(c<=0)continue;let l=c*a;if(l>t)return;t-=l,n.quantity+=l,n.value+=l*o,this.heights[i]=0,this.sectionRemaining[e]-=c,this.markDirty(r,s)}this.sectionRemaining[e]<1e-6&&(this.sectionRemaining[e]=0)}restore(e){this.heights.set(e);for(let e of this.blockedCells)this.heights[e]=0;for(let e=0;e<this.sectionCount;e++){let t=0;for(let n=this.sectionRowStart[e];n<this.sectionRowEnd[e];n++)for(let e=0;e<this.cols;e++)t+=this.heights[n*this.cols+e];this.sectionRemaining[e]=t}this.markDirtyRect(0,this.cols-1,0,this.rows-1)}clearDirty(){this.dirtyMinI=1/0,this.dirtyMaxI=-1,this.dirtyMinJ=1/0,this.dirtyMaxJ=-1}markDirty(e,t){e<this.dirtyMinI&&(this.dirtyMinI=e),e>this.dirtyMaxI&&(this.dirtyMaxI=e),t<this.dirtyMinJ&&(this.dirtyMinJ=t),t>this.dirtyMaxJ&&(this.dirtyMaxJ=t)}markDirtyRect(e,t,n,r){this.markDirty(e,n),this.markDirty(t,r)}};function L_(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function R_(e){let t=e;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function z_(e,t){let n=R_(L_(e.id)),r=e.sections.reduce((e,t)=>e+t.depth,0),i=Id.edgeMargin,a=e.width-i*2,o=r-i*2,s=Math.min(Id.maxFinds,Math.round(e.width*r/Id.areaPerFind)),c=Math.max(1,Math.round(Math.sqrt(s*a/o))),l=Math.max(1,Math.ceil(s/c)),u=[];for(let t=0;t<l;t++)for(let r=0;r<c;r++)u.push({x:-e.width/2+i+(r+.15+n()*.7)/c*a,z:-i-(t+.15+n()*.7)/l*o});for(let e=u.length-1;e>0;e--){let t=Math.floor(n()*(e+1));[u[e],u[t]]=[u[t],u[e]]}let d=t*Id.chestShare;for(let t of e.obstacles??[])for(let e of u){let n=Math.hypot(e.x-t.x,e.z-t.z);if(n>t.r+1.5)continue;let r=(t.r+1.6)/(n||1);e.x=t.x+(n?e.x-t.x:1)*r,e.z=t.z+(e.z-t.z)*r}let f=Math.round(Id.gemFinds+Id.gemFindsPerField*Math.max(0,Nd.indexOf(e)));return u.slice(0,s).map((e,t)=>{let r=`chest`;t<Id.cars?r=`car`:t<Id.cars+Math.round(s*Id.goldenShare)?r=`golden`:t<Id.cars+Math.round(s*Id.goldenShare)+f&&(r=`gem`);let i=Id.kinds[r],a=i.cashMultiplier>0?Math.max(3,Math.round(d*i.cashMultiplier*(.8+n()*.4))):0;return{index:t,kind:r,x:e.x,z:e.z,cash:a,gems:i.gems,found:!1}})}function B_(e){let t=[],n=-1,r=0;for(let i=0;i<e.length;i++){let a=Math.floor(e[i]*15+1e-4);a===n?r++:(r>0&&t.push(n.toString(16)+r.toString(36)),n=a,r=1)}return r>0&&t.push(n.toString(16)+r.toString(36)),t.join(`.`)}function V_(e,t){if(!e)return null;let n=new Float32Array(t),r=0;for(let i of e.split(`.`)){if(i.length<2)return null;let e=parseInt(i[0],16),a=parseInt(i.slice(1),36);if(!Number.isFinite(e)||!Number.isFinite(a)||a<=0||r+a>t)return null;n.fill(e/15,r,r+a),r+=a}return r===t?n:null}var H_=class{constructor(){X(this,`listeners`,new Map)}on(e,t){let n=this.listeners.get(e)??[];return n.push(t),this.listeners.set(e,n),()=>{let n=this.listeners.get(e);if(!n)return;let r=n.indexOf(t);r>=0&&n.splice(r,1)}}emit(e,t){let n=this.listeners.get(e);if(n)for(let e=0;e<n.length;e++)n[e](t)}},U_=.25,W_=class{constructor(e,t={}){X(this,`state`,void 0),X(this,`options`,void 0),X(this,`events`,new H_),X(this,`vehicle`,new P_),X(this,`stats`,{width:0,power:0,speed:0,capacity:0,saleMultiplier:1,income:0,warehouseSeconds:0,crateSeconds:1,trainCrates:0,rocketShare:0,resistanceMultiplier:1,offlineHours:2}),X(this,`level`,void 0),X(this,`levelIndex`,0),X(this,`layout`,void 0),X(this,`field`,void 0),X(this,`time`,0),X(this,`zone`,null),X(this,`clearing`,F_()),X(this,`full`,!1),X(this,`speedFactor`,1),X(this,`frenzyCharge`,0),X(this,`frenzyUntil`,0),X(this,`powerBoostUntil`,0),X(this,`storageBoostUntil`,0),X(this,`bonusReadyAt`,0),X(this,`doubleOffer`,null),X(this,`pose`,{x:0,z:0,dirX:0,dirZ:-1,halfWidth:1,halfDepth:.3}),X(this,`params`,{power:1,capacityLeft:0,rate:1,dt:0}),X(this,`sweepResult`,F_()),X(this,`sweepAccumulator`,0),X(this,`onFactoryPad`,!1),X(this,`frenzyWasActive`,!1),X(this,`treasures`,[]),X(this,`incomeCarry`,0),X(this,`truckTimer`,0),X(this,`reservedCrates`,0),X(this,`carriers`,gd.map(e=>({config:hd[e],phase:`away`,timer:hd[e].firstDelay,span:hd[e].firstDelay,crates:0}))),this.state=e,this.options=t,this.loadLevel(e.levelIndex,!1)}loadLevel(e,t=!0){this.levelIndex=e,this.state.levelIndex=e,this.level=Nd[e],this.layout=new Dh(this.level),this.field=new I_(this.level);let n=sp(this.state,this.level);if(cp(this.state,this.level)&&(this.state.maxLevel=Math.max(this.state.maxLevel,Math.min(e+1,Nd.length-1))),n.snow){let e=V_(n.snow,this.field.heights.length);e&&this.field.restore(e)}this.loadTreasures(),this.vehicle.teleport(this.layout.spawn.x,this.layout.spawn.z,0),this.zone=null,this.doubleOffer=null,vp(this.state,this.stats),this.applyBoosts(),t&&this.events.emit(`levelLoaded`,{index:e,level:this.level})}captureSnow(){sp(this.state,this.level).snow=B_(this.field.heights)}step(e,t,n){this.time+=e,this.state.stats.playSeconds+=e,vp(this.state,this.stats),this.applyBoosts();let r=vd[this.state.vehicle];this.vehicle.update(e,t,n,this.stats.speed*this.speedFactor,r.radius,this.layout),this.clearSnow(e,r.bladeOffset),this.updateZones(),this.updateFrenzy(e),this.updateFactoryPad(),this.packCrates(e),this.updateCarriers(e),this.updateTreasures(),this.updateRank(),this.updateSections(e),this.doubleOffer&&this.time>this.doubleOffer.until&&(this.doubleOffer=null)}applyBoosts(){this.time<this.powerBoostUntil&&(this.stats.power*=Rd.powerMultiplier),this.frenzyActive&&(this.stats.power*=Pd.power,this.stats.speed*=Pd.speed),this.time<this.storageBoostUntil&&(this.stats.capacity=Math.round(this.stats.capacity*Rd.storageMultiplier))}get frenzyActive(){return this.time<this.frenzyUntil}updateFrenzy(e){let t=this.frenzyWasActive,n=this.frenzyActive;t&&!n&&this.events.emit(`frenzy`,{active:!1}),this.frenzyWasActive=n,n||this.clearing.quantity<=0||(this.frenzyCharge+=this.clearing.contact*e/Pd.chargeSeconds,this.frenzyCharge>=1&&(this.frenzyCharge=0,this.frenzyUntil=this.time+Pd.seconds,this.frenzyWasActive=!0,this.events.emit(`frenzy`,{active:!0})))}applyOffline(e){vp(this.state,this.stats);let t=Math.min(Math.max(0,e),this.stats.offlineHours*3600),n=Math.floor(t*this.stats.income*Fd);return n>0&&(this.state.pendingIncome+=n,this.events.emit(`checkpoint`,{})),n}clearSnow(e,t){let{state:n,vehicle:r,stats:i,pose:a,params:o,clearing:s}=this,c=r.dirX,l=r.dirZ;a.x=r.x+c*t,a.z=r.z+l*t,a.dirX=c,a.dirZ=l,a.halfWidth=i.width/2;let u=Math.max(od.bladeDepth,this.level.cellSize*1.25+r.speed*e);a.halfDepth=u/2,o.power=i.power,o.capacityLeft=Math.max(0,i.capacity-n.cargoQuantity),o.rate=Math.max(od.baseRate,i.speed/u*od.passRate),o.dt=e,this.field.clear(a,o,s),s.quantity>0&&(n.cargoQuantity=Math.min(i.capacity,n.cargoQuantity+s.quantity),n.cargoValue+=s.value*(this.frenzyActive?Pd.value:1),n.stats.totalSnow+=s.quantity,this.addClearedQuantity(s.quantity));let d=this.full;this.full=n.cargoQuantity>=i.capacity-1e-6,this.full&&!d&&this.events.emit(`storageFull`,{});let f=1;if(this.full)this.field.fractionAt(a.x,a.z)>0&&(f=od.fullSpeed);else{let e=1-s.effectiveness;f=Math.max(od.minSpeed,1-s.contact*(s.resistance+e*od.denseDrag)*i.resistanceMultiplier)}this.speedFactor=f}updateZones(){let e=this.layout.zoneAt(this.vehicle.x,this.vehicle.z);e!==this.zone&&(this.zone&&this.events.emit(`zoneExit`,{zone:this.zone}),this.zone=e,e&&this.events.emit(`zoneEnter`,{zone:e})),e===`sell`&&this.state.cargoQuantity>0&&this.sellCargo()}updateFactoryPad(){let e=Sp(this.state),t=e!==null&&this.layout.onFactoryPad(e,this.vehicle.x,this.vehicle.z);t&&e&&(this.state.money>=e.cost?this.buildFactoryStage():this.onFactoryPad||this.events.emit(`factoryPadDenied`,{stage:e,short:e.cost-this.state.money})),this.onFactoryPad=t}loadTreasures(){if(this.options.treasure===!1){this.treasures=[];return}let e=sp(this.state,this.level),t=new Set(e.foundTreasures);this.treasures=z_(this.level,this.field.totalValue);for(let n of this.treasures)n.found=t.has(n.index),!n.found&&this.field.fractionAt(n.x,n.z)<=Id.revealAt&&(n.found=!0,e.foundTreasures.push(n.index))}updateTreasures(){for(let e of this.treasures){if(e.found||this.field.fractionAt(e.x,e.z)>Id.revealAt)continue;e.found=!0,sp(this.state,this.level).foundTreasures.push(e.index);let t=e.cash;this.state.money+=t,this.addGems(e.gems),this.state.stats.totalEarned+=t,this.events.emit(`treasureFound`,{treasure:e,cash:t}),this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{})}}updateRank(){let{state:e}=this;if(e.stats.totalSnow<lp(e.rank+1))return;e.rank++;let t=e.rank%Ld.bigGemEvery===0?Ld.bigGems:e.rank%Ld.gemEvery===0?Ld.gems:0,n=Math.max(Ld.minCash,Math.round(this.cheapestUpgradeCost()*Ld.cashShare));e.money+=n,this.addGems(t),e.stats.totalEarned+=n,vp(e,this.stats),this.applyBoosts(),this.events.emit(`rankUp`,{rank:e.rank,cash:n,gems:t}),this.events.emit(`moneyChanged`,{money:e.money}),this.events.emit(`checkpoint`,{})}treasureCount(){let e=0;for(let t of this.treasures)t.found&&e++;return{found:e,total:this.treasures.length}}packCrates(e){if(this.options.autoTrucks&&(this.truckTimer+=e,this.truckTimer>=_d.truckCycleSeconds&&(this.truckTimer=0,this.shipCrates(_d.truckCrates))),this.stats.income<=0||(this.incomeCarry+=this.stats.income*e,this.incomeCarry<1))return;let t=Math.floor(this.incomeCarry);this.incomeCarry-=t;let n=Ep(this.state,`rocket`)?Math.floor(t*this.stats.rocketShare):0;this.state.rocketStock+=n;let r=Math.max(0,this.warehouseCap-this.state.pendingIncome);this.state.pendingIncome+=Math.min(r,t-n)}get crateValue(){return Math.max(1,this.stats.income*this.stats.crateSeconds)}get warehouseCap(){return this.stats.income*this.stats.warehouseSeconds}get waitingCrates(){return Math.floor(this.state.pendingIncome/this.crateValue)}get warehouseFull(){return this.stats.income>0&&this.state.pendingIncome>=this.warehouseCap}shipCrates(e,t=1){let n=this.state.pendingIncome;if(n<=0||e<=0)return 0;let r=Math.max(0,n-this.warehouseCap),i=Math.min(n,Math.ceil(e*(this.crateValue+r*_d.overflowPerCrate)));this.state.pendingIncome=n-i;let a=Math.round(i*t);return this.state.money+=a,this.state.stats.totalEarned+=a,this.events.emit(`moneyChanged`,{money:this.state.money}),a}updateCarriers(e){for(let t of this.carriers){if(!Ep(this.state,t.config.id)||(t.timer-=e,t.timer>0))continue;let{config:n}=t,r=(e,n)=>{t.phase=e,t.timer=n,t.span=n};switch(t.phase){case`away`:{let e=n.id===`rocket`,i=n.id===`train`?this.stats.trainCrates:n.crates;if(!(e?this.state.rocketStock>=this.crateValue:this.waitingCrates-this.reservedCrates>=n.minCrates)){t.timer=2;break}t.crates=e?0:Math.min(i,this.waitingCrates-this.reservedCrates),r(`arriving`,n.arriveSeconds);break}case`arriving`:r(`loading`,n.loadSeconds);break;case`loading`:{let e;n.id===`rocket`?(e=Math.round(this.state.rocketStock*n.premium),this.state.rocketStock=0,this.grantMoney(e)):e=this.shipCrates(Math.min(t.crates,Math.max(0,this.waitingCrates-this.reservedCrates)),n.premium),r(`leaving`,n.leaveSeconds),this.events.emit(`carrierLeft`,{id:n.id,paid:e});break}case`leaving`:r(`away`,n.interval)}}}get rocketCountdown(){let e=this.carriers.find(e=>e.config.id===`rocket`);return e&&e.phase===`loading`?e.timer:null}updateSections(e){let t=sp(this.state,this.level);for(let e=0;e<this.level.sections.length;e++)!t.clearedOnce[e]&&this.field.sectionRatio(e)<=sd.sectionClearedAt&&this.completeSection(e);if(this.sweepAccumulator+=e,!(this.sweepAccumulator<U_)){this.sweepAccumulator=0;for(let e=0;e<this.level.sections.length;e++){let n=this.field.sectionRatio(e);t.clearedOnce[e]&&n>1e-6&&n<=sd.sectionClearedAt&&this.collectCrumbs(e)}}}collectCrumbs(e){let{state:t,stats:n,sweepResult:r}=this,i=n.capacity-t.cargoQuantity;i<=0||(this.field.sweep(e,i,r),t.cargoQuantity+=r.quantity,t.cargoValue+=r.value,t.stats.totalSnow+=r.quantity,this.addClearedQuantity(r.quantity))}completeSection(e){let{state:t}=this,n=sp(t,this.level);n.clearedOnce[e]=!0,this.collectCrumbs(e);let r=this.level.sections[e].clearBonus;if(t.money+=r,this.addGems(pd.sectionGems),t.stats.totalEarned+=r,this.events.emit(`moneyChanged`,{money:t.money}),this.events.emit(`sectionCleared`,{section:e,bonus:r}),cp(t,this.level)){this.awardStars(pd.thresholds.length);let e=this.levelIndex+1<Nd.length?this.levelIndex+1:null;e!==null&&(t.maxLevel=Math.max(t.maxLevel,e)),this.events.emit(`levelCleared`,{index:this.levelIndex,next:e})}this.events.emit(`checkpoint`,{})}addClearedQuantity(e){let t=sp(this.state,this.level);t.clearedQuantity+=e;let n=t.stars;for(;n<pd.thresholds.length&&t.clearedQuantity>=pd.thresholds[n]*this.field.totalQuantity;)n++;this.awardStars(n)}awardStars(e){let t=sp(this.state,this.level);for(;t.stars<e;){let e=t.stars++,n=Math.round(pd.cash[e]*this.level.sections[0].clearBonus),r=pd.gems[e];this.state.money+=n,this.state.stats.totalEarned+=n,this.addGems(r),this.events.emit(`starEarned`,{index:e,cash:n,gems:r}),this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{})}}starProgress(){let e=sp(this.state,this.level);return Math.min(1,e.clearedQuantity/this.field.totalQuantity)}sellCargo(){let{state:e}=this;if(e.cargoQuantity<=0)return;let t=e.cargoQuantity,n=Math.max(1,Math.round(e.cargoValue*this.stats.saleMultiplier));e.money+=n,e.stats.totalEarned+=n,e.cargoQuantity=0,e.cargoValue=0,this.full=!1;let r=this.layout.zoneById(`sell`);n>=Rd.doubleMinSale&&(this.doubleOffer={amount:n,until:this.time+Rd.doubleOfferSeconds}),this.events.emit(`sold`,{quantity:t,earned:n,x:r.x,z:r.z}),this.events.emit(`moneyChanged`,{money:e.money}),this.events.emit(`checkpoint`,{})}purchaseUpgrade(e){return Dp(this.state,e)?(vp(this.state,this.stats),this.applyBoosts(),this.events.emit(`upgradeBought`,{id:e,level:this.state.upgrades[e]}),this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{}),!0):!1}purchasePerk(e){return xp(this.state,e)?(vp(this.state,this.stats),this.applyBoosts(),this.events.emit(`perkBought`,{id:e,level:this.state.perks[e]}),this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{}),!0):!1}buildFactoryStage(){let e=this.state.factoryLevel,t=Cp(this.state);return t?(vp(this.state,this.stats),this.applyBoosts(),this.events.emit(`factoryBuilt`,{stage:t,index:e}),this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{}),!0):!1}cheapestUpgradeCost(){let e=1/0;for(let t of ld)Tp(this.state,t)&&this.state.upgrades[t]<cd[t].maxLevel&&(e=Math.min(e,mp(t,this.state.upgrades[t])));return Number.isFinite(e)?e:0}canTravel(e){return e>=0&&e<=this.state.maxLevel}buyVehicle(e){let{state:t}=this;return t.ownedVehicles.includes(e)||!dp(t,e)||!yp(t,vd[e].cost)?!1:(t.ownedVehicles.push(e),this.events.emit(`moneyChanged`,{money:t.money}),this.equipVehicle(e),!0)}equipVehicle(e){let{state:t}=this;if(!t.ownedVehicles.includes(e))return!1;t.vehicle=e,vp(t,this.stats),this.applyBoosts();let n=vd[e].radius;if(!this.layout.isWalkable(this.vehicle.x,this.vehicle.z,n)){let e=this.layout.zoneById(`shop`);this.vehicle.teleport(e.x,e.z,this.vehicle.heading)}return this.events.emit(`vehicleChanged`,{id:e}),this.events.emit(`checkpoint`,{}),!0}applyDoubleSale(){if(!this.doubleOffer)return 0;let{amount:e}=this.doubleOffer;return this.doubleOffer=null,this.grantMoney(e),e}applyPowerBoost(){this.powerBoostUntil=this.time+Rd.powerSeconds}applyStorageBoost(){this.storageBoostUntil=this.time+Rd.storageSeconds}bonusCashAmount(){return Math.max(Rd.minBonusCash,Math.round(this.cheapestUpgradeCost()*Rd.bonusCashFraction))}applyBonusCash(){let e=this.bonusCashAmount();return this.bonusReadyAt=this.time+Rd.bonusCooldownSeconds,this.grantMoney(e),e}addGems(e){this.state.gems+=e,this.state.stats.totalGems+=e}grantMoney(e){this.state.money+=e,this.state.stats.totalEarned+=e,this.events.emit(`moneyChanged`,{money:this.state.money}),this.events.emit(`checkpoint`,{})}},G_=class{constructor(e,t){X(this,`sim`,void 0),X(this,`touch`,void 0),X(this,`view`,{hint:null,target:null,zone:null}),X(this,`doneHintUntil`,0),this.sim=e,this.touch=t}onUpgrade(){this.sim.state.tutorialStep<4&&(this.sim.state.tutorialStep=4,this.doneHintUntil=this.sim.time+4)}update(){let{sim:e,view:t}=this,{state:n}=e;switch(t.hint=null,t.target=null,t.zone=null,n.tutorialStep===0&&n.cargoQuantity>0&&(n.tutorialStep=1),n.tutorialStep===1&&n.cargoQuantity>=e.stats.capacity*.75&&(n.tutorialStep=2),n.tutorialStep===2&&n.money>0&&(n.tutorialStep=3),n.tutorialStep){case 0:t.hint=this.touch()?`Drag anywhere to drive into the snow`:`Use WASD or arrow keys to drive into the snow`,t.target={x:e.vehicle.x,z:-6};break;case 1:t.hint=`Nice! Plowing fills your storage tank`;break;case 2:t.hint=`Drive to the green SELL pad to cash in`,t.target=e.layout.zoneById(`sell`),t.zone=`sell`;break;case 3:n.money>=e.cheapestUpgradeCost()?(t.hint=`Spend it on the blue UPGRADES pad`,t.target=e.layout.zoneById(`upgrade`),t.zone=`upgrade`):t.hint=`Plow a little more to afford an upgrade`,e.zone===`upgrade`&&(t.target=null);break;default:if(e.time<this.doneHintUntil&&(t.hint=`Feel that? Keep plowing and keep upgrading!`),e.full)t.hint=`Storage full! Head back and sell`,t.target=e.layout.zoneById(`sell`),t.zone=`sell`;else if(cp(n,e.level))n.cargoQuantity>0?(t.hint=`Field cleared! Sell your last load`,t.target=e.layout.zoneById(`sell`),t.zone=`sell`):e.levelIndex+1<Nd.length&&(t.hint=`Field cleared! Take the NEXT FIELD pad`,t.target=e.layout.zoneById(`travel`),t.zone=`travel`);else if(e.clearing.contact>.3&&e.clearing.effectiveness<.45&&n.money>=mp(`power`,n.upgrades.power))t.hint=`Tough snow! More Plow Power cuts it faster`;else if(n.factoryLevel===0&&e.vehicle.z>0){let r=Sp(n);r&&n.money>=r.cost&&(t.hint=`Drive onto the glowing pad to start your factory`,t.target={x:r.x,z:e.layout.factoryPadZ()})}}return t}},K_=20,q_=14,J_=class{constructor(e,t,n,r){X(this,`platform`,void 0),X(this,`saves`,void 0),X(this,`sim`,void 0),X(this,`ui`,void 0),X(this,`context`,void 0),X(this,`rig`,new tf),X(this,`audio`,new Gd),X(this,`input`,void 0),X(this,`loop`,void 0),X(this,`tutorial`,void 0),X(this,`vehicleView`,void 0),X(this,`particles`,void 0),X(this,`ambient`,void 0),X(this,`debris`,void 0),X(this,`flyers`,void 0),X(this,`treasureView`,new km),X(this,`glintIn`,0),X(this,`tallyAmount`,0),X(this,`tallyIdle`,1),X(this,`grainIn`,0),X(this,`hitstop`,0),X(this,`lastContact`,0),X(this,`whumpCooldown`,0),X(this,`streakStep`,0),X(this,`glitterCarry`,0),X(this,`curlCarry`,0),X(this,`clearedTenths`,-1),X(this,`steamIn`,0),X(this,`debrisCarry`,0),X(this,`sellTarget`,{x:0,z:0}),X(this,`world`,void 0),X(this,`snow`,void 0),X(this,`tufts`,void 0),X(this,`guideArrow`,void 0),X(this,`thumbs`,null),X(this,`pauseReasons`,new Set),X(this,`projected`,new W),X(this,`emitCarry`,0),X(this,`frameQuantity`,0),X(this,`frameSection`,0),X(this,`autosaveIn`,K_),X(this,`savePending`,!1),X(this,`arrowTime`,0),X(this,`travelling`,!1),X(this,`resetting`,!1),X(this,`fpsAverage`,60),X(this,`watchingLaunch`,!1),X(this,`lastCountdown`,-1),this.platform=n,this.saves=r,this.sim=new W_(t),this.context=new Uf(e,t.settings.quality),this.particles=new If(this.context.quality.particles),this.ambient=new zf(this.context.quality.ambientSnow),this.debris=new Sf(this.context.quality.tier===`low`?60:this.context.quality.tier===`medium`?110:190),this.flyers=new Ef(48),this.context.scene.add(this.particles.points,this.ambient.points,this.debris.mesh,this.flyers.mesh,this.treasureView.group);let i={buyUpgrade:e=>this.buyUpgrade(e),buyPerk:e=>{this.sim.purchasePerk(e)||this.audio.denied()},buyVehicle:e=>this.buyVehicle(e),equipVehicle:e=>this.sim.equipVehicle(e),travel:e=>void this.travel(e),reward:e=>void this.playRewarded(e),setSound:e=>this.setSound(e),setQuality:e=>this.setQuality(e),resetProgress:()=>void this.resetProgress(),thumbnails:()=>this.getThumbnails(),watchLaunch:()=>{this.watchingLaunch=!0},rewardedSupported:()=>this.platform.rewardedSupported(),click:()=>this.audio.click(),denied:()=>this.audio.denied()};this.ui=new Fp(e,this.sim,i),this.input=new Yd(this.context.renderer.domElement,this.ui.overlay,this.rig.yaw),this.tutorial=new G_(this.sim,()=>this.input.touchUsed||navigator.maxTouchPoints>0),this.vehicleView=new gm(t.vehicle,this.sim.stats.width),this.context.scene.add(this.vehicleView.group,this.vehicleView.trailer.group),this.bindBlockFlights(),this.guideArrow=this.createGuideArrow(),this.context.scene.add(this.guideArrow),this.buildLevel(),this.bindSimEvents(),this.bindPlatform(),this.bindWindow(),this.resize(),this.rig.snap(this.sim.vehicle.x,this.sim.vehicle.z),this.rig.playIntro(),this.setSound(t.settings.sound),this.ui.setSoundDisplay(t.settings.sound),this.loop=new M_(e=>this.step(e),(e,t)=>this.render(e,t))}start(){this.loop.start();let{savedAt:e}=this.sim.state;e>0&&this.sim.applyOffline((Date.now()-e)/1e3)>0&&Date.now()-e>6e4&&this.ui.toast(`Welcome back! Your factory packed crates while you were away`,4500),requestAnimationFrame(()=>{document.getElementById(`boot`)?.remove(),this.platform.loadingStop(),this.platform.gameReady(),this.platform.gameplayStart()})}bindBlockFlights(){let{trailer:e}=this.vehicleView,t=(t,n)=>e.blockWorld(t,n),n=()=>{e.bump();let{state:t,stats:n}=this.sim;this.audio.blockLand(n.capacity>0?t.cargoQuantity/n.capacity:0),this.vibrate(6)};e.onPlace=(r,i)=>{if(this.frameQuantity<=0)return!1;let{vehicle:a}=this.sim,o=vd[this.sim.state.vehicle].bladeOffset,s=(Math.random()-.5)*this.sim.stats.width*.7,c=this.vehicleView.x+a.dirX*o-a.dirZ*s,l=this.vehicleView.z+a.dirZ*o+a.dirX*s;return this.flyers.launch(c,.6,l,.33,1.5,e.blockSize*.9,i,r,t,n)};let r=(e,t)=>{t.set(this.sellTarget.x,.5,this.sellTarget.z)},i=e=>{this.audio.coinTick(e),this.burstCoins(this.sellTarget.x,this.sellTarget.z,2)},a=(e,t)=>{t.set(ph.x,ph.y+.3,ph.z)};e.onUnload=(t,n,o,s,c)=>{this.flyers.launch(t,n,o,.3+Math.min(c,12)*.018,1.9,e.blockSize*.9,s,c,r,e=>{i(e),c<q_&&this.flyers.launch(this.sellTarget.x,.5,this.sellTarget.z,.62+c*.04,3,.56,s,c,a,()=>{})})}}vibrate(e){if(this.input.touchUsed&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}buildLevel(){let{sim:e,context:t}=this;this.world&&(t.scene.remove(this.world.group),this.world.dispose()),this.snow&&(t.scene.remove(this.snow.mesh,this.tufts.mesh),this.snow.dispose(),this.tufts.dispose()),this.world=new k_(e.level,e.layout),this.bindProduction(),this.snow=new ep(e.field,e.level,t.quality.snowMeshStep),this.tufts=new op(e.field,e.level,this.snow,t.quality.tuftDensity),this.world.factory.setLevel(e.state.factoryLevel,!1),t.scene.add(this.world.group,this.snow.mesh,this.tufts.mesh),t.setPalette(e.level.palette),this.ambient.setWeather(e.level.ambientColor??16777215,e.level.ambientDrift??1),this.clearedTenths=-1,this.ui.refreshLevel()}bindProduction(){this.world.production.events={onPress:(e,t,n)=>{this.audio.press();for(let r=0;r<8;r++)this.particles.emit(e,t,n,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.4+Math.random()*.3,.26,16777215,.9,7,1)},onCrateLoaded:(e,t,n,r,i)=>{this.audio.crateLoaded(e);let a=this.sim.shipCrates(1,_d.rarityPay[t.rarity]);if(a<=0||(this.ui.bumpMoney(),this.audio.coinTick(e),!this.world.production.watching))return;let o=this.toScreen(n,r,i);this.ui.popup(o.x,o.y,`+${Ap(a)}`,`money`),this.burstCoins(n,i,Math.min(14,3+Math.log10(Math.max(1,a))*1.5))},onArrive:e=>{this.audio.deliveryHorn(e.rarity),e.rarity===`rare`?this.ui.toast(`Rare delivery: ${e.name}!`,3200):e.rarity===`veryRare`&&this.ui.showBanner(`VERY RARE DELIVERY`,`${e.name}!`)},onShine:(e,t,n)=>this.particles.emit(e,t,n,0,.8,0,.7,.36,16769658,1,-.5,0)}}bindSimEvents(){let{events:e}=this.sim;e.on(`sold`,e=>{this.sellTarget.x=e.x,this.sellTarget.z=e.z,this.vehicleView.trailer.beginUnload(),this.vibrate(18);let t=this.toScreen(e.x,1.2,e.z);this.ui.popup(t.x,t.y,`+${Ap(e.earned)}`,`big`),this.ui.bumpMoney(),this.audio.sell(e.earned),this.burstCoins(e.x,e.z,Math.min(70,16+Math.log10(Math.max(1,e.earned))*12))}),e.on(`moneyChanged`,()=>this.ui.markPanelDirty()),e.on(`starEarned`,e=>{let t=`Star `+(e.index+1)+` of 3`,n=[e.cash>0?Ap(e.cash):``,e.gems>0?e.gems+(e.gems===1?` gem`:` gems`):``].filter(Boolean);this.ui.toast(n.length?t+`! +`+n.join(` + `):t+`!`),this.ui.bumpStars(),this.audio.cleared(),this.rig.punch(.8),this.sparkle(this.vehicleView.x,this.vehicleView.z,30)}),e.on(`perkBought`,()=>{this.audio.upgrade(),this.vehicleView.celebrate(),this.sparkle(this.vehicleView.x,this.vehicleView.z,26),this.ui.markPanelDirty()}),e.on(`factoryBuilt`,e=>{this.world.factory.setLevel(this.sim.state.factoryLevel,!0),e.stage.unlocks&&this.ui.showBanner(`NEW WAY TO SHIP`,hd[e.stage.unlocks].name),this.ui.toast(`${e.stage.name} built! ${wp(e.stage)}`);let t=this.world.factory.stagePosition(e.index);this.burstCoins(t.x,t.z,50),this.sparkle(t.x,t.z,40),this.audio.unlock(),this.rig.punch(1.6),this.vibrate(30),this.ui.markPanelDirty()}),e.on(`carrierLeft`,e=>this.onCarrierLeft(e.id,e.paid)),e.on(`upgradeBought`,e=>this.onUpgrade(e.id)),e.on(`sectionCleared`,e=>{let t=ad[this.sim.level.sections[e.section].type].name;this.ui.toast(`${t} cleared! Bonus +${Ap(e.bonus)}`),this.ui.bumpMoney(),this.audio.cleared(),this.burstCoins(this.vehicleView.x,this.vehicleView.z,34),this.rig.punch(.8)}),e.on(`levelCleared`,e=>{let t=Nd[e.index].name;this.ui.toast(e.next===null?`${t} cleared! You plowed the whole world!`:`${t} cleared! ${Nd[e.next].name} is open`,4200),this.ambient.burst(4),this.audio.unlock(),this.rig.punch(1.5),this.burstCoins(this.vehicleView.x,this.vehicleView.z,60),this.ui.markPanelDirty()}),e.on(`factoryPadDenied`,e=>{let t=this.toScreen(e.stage.x,1,this.sim.layout.factoryPadZ());this.ui.popup(t.x,t.y,`Need ${Ap(e.short)} more`,`money`),this.audio.denied()}),e.on(`treasureFound`,({treasure:e,cash:t})=>{let{kind:n,x:r,z:i,gems:a}=e;this.treasureView.reveal(n,r,i),this.audio.treasure(n);let o=this.toScreen(r,2,i),s=[t>0?`+${Ap(t)}`:``,a>0?`+${a} gem${a>1?`s`:``}`:``].filter(Boolean).join(`  `);if(this.ui.popup(o.x,o.y,s,n===`chest`||n===`gem`?`money`:`big`),n===`chest`)this.burstCoins(r,i,14);else if(n===`gem`)this.sparkle(r,i,18);else{let e=Id.kinds[n].name;this.ui.toast(`${e}! ${s}`,n===`car`?3400:2400),this.burstCoins(r,i,n===`car`?60:34),this.sparkle(r,i,n===`car`?50:26),this.rig.punch(n===`car`?2.4:1.2),this.hitstop=n===`car`?.14:.07,this.vibrate(n===`car`?50:24)}this.ui.bumpMoney()}),e.on(`rankUp`,e=>{let t=e.gems>0?` +${e.gems} gem${e.gems>1?`s`:``}`:``;this.ui.toast(`Rank ${e.rank}! +${Ap(e.cash)}${t}, +1% all sales`,3e3),this.audio.rankUp(),this.rig.punch(1.2),this.sparkle(this.vehicleView.x,this.vehicleView.z,34),this.burstCoins(this.vehicleView.x,this.vehicleView.z,20),this.ui.bumpMoney(),this.ui.markPanelDirty()}),e.on(`frenzy`,e=>{e.active&&(this.audio.frenzy(),this.rig.punch(2),this.ui.showBanner(`DOUBLE VALUE`,`FRENZY!`),this.hitstop=.1,this.vibrate(60))}),e.on(`storageFull`,()=>this.audio.full()),e.on(`zoneEnter`,e=>this.ui.onZoneEnter(e.zone)),e.on(`zoneExit`,e=>this.ui.onZoneExit(e.zone)),e.on(`vehicleChanged`,e=>{this.vehicleView.setVehicle(e.id),this.audio.upgrade(),this.rig.punch(1.5),this.ui.markPanelDirty()}),e.on(`checkpoint`,()=>{this.savePending=!0})}buyUpgrade(e){this.sim.purchaseUpgrade(e)||this.audio.denied()}onCarrierLeft(e,t){if(t<=0)return;this.ui.bumpMoney();let n=this.world.production.watching;if(e===`rocket`?(this.ui.showBanner(`ROCKET LAUNCH`,`+${Ap(t)}`),this.audio.unlock(),this.vibrate(40),n&&this.rig.punch(2)):this.audio.deliveryHorn(`rare`),!n){e!==`rocket`&&this.ui.toast(`${hd[e].name}: +${Ap(t)}`);return}let r=this.world.carriers.position(e),i=this.toScreen(r.x,r.y,r.z);this.ui.popup(i.x,i.y,`+${Ap(t)}`,`big`),this.burstCoins(r.x,r.z,e===`rocket`?70:34)}onUpgrade(e){this.tutorial.onUpgrade(),this.audio.upgrade(),this.vehicleView.celebrate(),this.rig.punch(1),this.ui.renderUpgradeFlash(e);let t=this.toScreen(this.vehicleView.x,2.4,this.vehicleView.z);this.ui.popup(t.x,t.y,`${cd[e].name} up!`,`money`),this.sparkle(this.vehicleView.x,this.vehicleView.z,26)}buyVehicle(e){this.sim.buyVehicle(e)?(this.ui.toast(`${vd[e].name} is yours!`),this.sparkle(this.vehicleView.x,this.vehicleView.z,44)):this.audio.denied()}async travel(e){if(this.travelling||e===this.sim.levelIndex)return;let{sim:t}=this;t.canTravel(e)?(this.travelling=!0,this.ui.closePanel(),this.pause(`travel`),this.platform.gameplayStop(),await this.ui.setFade(!0),t.captureSnow(),await this.saveNow(),this.pause(`ad`),this.audio.suspend(`ad`),await this.platform.showMidgame(),this.audio.resume(`ad`),this.resume(`ad`),this.platform.loadingStart(),t.loadLevel(e),this.buildLevel(),this.rig.snap(t.vehicle.x,t.vehicle.z),await this.saveNow(),this.platform.loadingStop(),await this.ui.setFade(!1),this.resume(`travel`),this.platform.gameplayStart(),this.ui.showBanner(`FIELD ${e+1}`,Nd[e].name),this.travelling=!1):this.audio.denied()}async playRewarded(e){if(!this.platform.rewardedSupported()||this.pauseReasons.has(`ad`))return;this.pause(`ad`),this.audio.suspend(`ad`),this.platform.gameplayStop(),this.ui.setBusy(!0);let t=await this.platform.showRewarded(e);if(this.ui.setBusy(!1),this.platform.gameplayStart(),this.audio.resume(`ad`),this.resume(`ad`),t!==`completed`)this.sim.doubleOffer=e===`double_sale`?null:this.sim.doubleOffer,this.ui.toast(t===`skipped`?`Watch the whole ad to get the reward`:`No ad available right now`,2e3);else{switch(e){case`double_sale`:{let e=this.sim.applyDoubleSale();e>0&&this.ui.toast(`Doubled! +${Ap(e)}`);break}case`power_boost`:this.sim.applyPowerBoost(),this.ui.toast(`Power x${Rd.powerMultiplier} for ${Rd.powerSeconds}s!`);break;case`storage_boost`:this.sim.applyStorageBoost(),this.ui.toast(`Storage x${Rd.storageMultiplier} for ${Rd.storageSeconds}s!`);break;case`bonus_cash`:this.ui.toast(`Bonus +${Ap(this.sim.applyBonusCash())}`)}this.ui.bumpMoney(),this.ui.markPanelDirty(),this.audio.upgrade()}}setSound(e){this.sim.state.settings.sound=e,this.audio.setUserEnabled(e),this.savePending=!0}setQuality(e){this.sim.state.settings.quality=e;let t=this.context.quality.snowMeshStep;this.context.setQuality(e),this.context.quality.snowMeshStep!==t&&this.buildLevel(),this.tufts.setDensity(this.context.quality.tuftDensity),this.resize(),this.savePending=!0}async resetProgress(){let e=Vd();e.settings=this.sim.state.settings,this.resetting=!0,await this.saves.save(e),location.reload()}getThumbnails(){if(!this.thumbs)try{this.thumbs=_m(this.context.renderer)}catch(e){console.warn(`Thumbnail render failed`,e),this.thumbs={}}return this.thumbs}pause(e){this.pauseReasons.add(e),this.input.reset()}resume(e){this.pauseReasons.delete(e)}bindPlatform(){this.audio.setPlatformEnabled(this.platform.audioAllowed()),this.platform.onAudioChange(e=>this.audio.setPlatformEnabled(e)),this.platform.onPauseChange(e=>{e?(this.pause(`platform`),this.audio.suspend(`platform`)):(this.resume(`platform`),this.audio.resume(`platform`))})}bindWindow(){window.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`orientationchange`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{document.hidden?(this.pause(`hidden`),this.audio.suspend(`hidden`),this.sim.captureSnow(),this.saveNow()):(this.resume(`hidden`),this.audio.resume(`hidden`))}),window.addEventListener(`pagehide`,()=>{this.sim.captureSnow(),this.saveNow()});let e=this.context.renderer.domElement;e.addEventListener(`pointerdown`,()=>window.focus()),e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.pause(`context`)}),e.addEventListener(`webglcontextrestored`,()=>this.resume(`context`))}resize(){let e=window.innerWidth,t=window.innerHeight;this.context.renderer.setSize(e,t,!1),this.rig.setAspect(e/t);let n=this.context.renderer.domElement.height;this.particles.setViewportHeight(n),this.ambient.setViewportHeight(n)}saveNow(){return this.resetting?Promise.resolve(!1):(this.savePending=!1,this.autosaveIn=K_,this.saves.save(this.sim.state))}step(e){if(this.pauseReasons.size>0)return;if(this.hitstop>0){this.hitstop-=e;return}this.sim.step(e,this.input.moveX,this.input.moveZ);let t=this.sim.clearing;t.quantity>0&&(this.frameQuantity+=t.quantity,this.frameSection=t.section),this.autosaveIn-=e,(this.autosaveIn<=0||this.savePending)&&(this.autosaveIn<=0&&this.sim.captureSnow(),this.saveNow())}render(e,t){let n=this.pauseReasons.size>0?0:e,{sim:r,context:i,rig:a,vehicleView:o}=this;this.input.poll(),o.update(n,t,r,(e,t)=>this.snow.heightAt(e,t)),this.snow.sync();let s=this.tutorial.update(),c=s.zone;if(!c){for(let e of ld)if(Tp(r.state,e)&&r.state.upgrades[e]<cd[e].maxLevel&&r.state.money>=mp(e,r.state.upgrades[e])){c=`upgrade`;break}}this.world.highlightPad(c),this.world.setTruck(o.x,o.z),r.rocketCountdown===null&&r.carriers.every(e=>e.config.id!==`rocket`||e.phase!==`leaving`)&&(this.watchingLaunch=!1);let l=r.vehicle.z>zd.bridgeLength/2;this.world.production.watching=l,this.world.production.demand=r.waitingCrates,r.reservedCrates=this.world.production.cratesInProgress,this.world.production.setWarehouse(r.warehouseCap>0?r.state.pendingIncome/r.warehouseCap:0),this.world.update(n,r.zone),this.world.carriers.update(n,r.carriers,r.state.factoryLevel),this.updateRocketEffects(n);let u=Sp(r.state);this.world.setBuyPad(r.state.factoryLevel,u,u?Ap(u.cost):``,u?wp(u):``,u!==null&&r.state.money>=u.cost),this.updateFactoryEffects(n),this.updateGuideArrow(n,s.target),this.emitSpray(e),this.updatePlowFeel(e),this.updateTally(e),this.particles.update(n),this.debris.update(n),this.flyers.update(n),this.treasureView.update(n),this.updateGlints(n);let{vehicle:d}=r;a.setPanelOpen(this.ui.isPanelOpen);let{base:f}=r.layout;a.setLobby(l||this.watchingLaunch,(f.minX+f.maxX)/2+2.5,(f.minZ+f.maxZ+zd.factoryDepth)/2,f.maxX-f.minX+5,f.maxZ-f.minZ+zd.factoryDepth),a.update(e,o.x,o.z,d.dirX,d.dirZ,d.speed,r.stats.width),this.ambient.update(n,a.camera.position.x,a.camera.position.z-16);let{trailer:p}=o,m=vd[r.state.vehicle].bladeOffset;this.tufts.setBlade(o.x+d.dirX*m,o.z+d.dirZ*m,d.dirX,d.dirZ,r.stats.width/2,r.full?0:Math.max(o.bladeLoad,Math.min(1,d.speed/2))),a.setStrain(this.pauseReasons.size>0?0:o.bladeLoad*(.5+(1-r.clearing.effectiveness))),this.tufts.update(n,a.viewX,a.viewZ,o.x,o.z,vd[r.state.vehicle].radius,p.x,p.z,p.radius),i.followSun(a.viewX,a.viewZ);let h=r.clearing.contact;this.updateCrunch(e,h);let g=Math.min(1,d.speed/Math.max(1,r.stats.speed)),_=this.pauseReasons.size===0;this.audio.updateLoops(_?g:0,_&&this.frameQuantity>0?Math.min(1,h*2+.2):0,1-r.clearing.effectiveness),this.frameQuantity=0,this.ui.update(e,s.hint),this.fpsAverage+=(1/Math.max(e,.001)-this.fpsAverage)*.03,i.monitor(e)&&this.tufts.setDensity(i.quality.tuftDensity),i.render(a.camera)}toScreen(e,t,n){return this.projected.set(e,t,n).project(this.rig.camera),{x:(this.projected.x*.5+.5)*window.innerWidth,y:(-this.projected.y*.5+.5)*window.innerHeight}}emitSpray(e){let{sim:t,particles:n,vehicleView:r}=this;if(this.frameQuantity<=0||e<=0||this.pauseReasons.size>0)return;let{vehicle:i,stats:a}=t,o=vd[t.state.vehicle],s=ad[t.level.sections[this.frameSection]?.type??`light`],c=i.dirX,l=i.dirZ,u=-l,d=c,f=r.x+c*(o.bladeOffset+.28),p=r.z+l*(o.bladeOffset+.28),m=a.width/2,h=(t.frenzyActive?2.2:1)*(40+170*Math.min(1,t.clearing.contact*1.4))*o.spray*(.8+a.width*.12);this.emitCarry+=h*e;let g=Math.min(t.frenzyActive?26:14,Math.floor(this.emitCarry));this.emitCarry-=g;let _=i.speed;for(let e=0;e<g;e++){let r=(Math.random()*2-1)*m,i=r>=0?1:-1,a=f+u*r,o=p+d*r,h=i*(Math.abs(r)/Math.max(.1,m)*3.4+Math.random()*1.2),g=_*(.45+Math.random()*.45),v=1.8+Math.random()*3.2,y=t.frenzyActive&&Math.random()<.6?16762170:Math.random()<.5?s.topColor:16777215;n.emit(a,.22+s.height*.5,o,c*g+u*h,v,l*g+d*h,.42+Math.random()*.4,.2+Math.random()*.2,y),e%4==0&&n.emit(a-c*.3,.3,o-l*.3,(Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2,.5+Math.random()*.45,.6+Math.random()*.5,s.topColor,.34,-.2,1.6)}for(this.debrisCarry+=(8+18*t.clearing.contact)*o.spray*(.8+a.width*.18)*e;this.debrisCarry>=1;){--this.debrisCarry;let e=Math.random()<.5?-1:1,t=Math.random()<.72?.7+Math.random()*.3:Math.random(),n=e*t*m,r=e*(1.4+t*3.6+Math.random()*1.2),i=_*(.35+Math.random()*.6)+Math.random(),a=.11+Math.random()*.2+s.height*.07,o=Math.random()<.3?s.shadeColor:s.topColor;this.debris.emit(f+u*n,.3+s.height*.45,p+d*n,c*i+u*r,2.6+Math.random()*3.4,l*i+d*r,.65+Math.random()*.6,a,o)}if(t.state.vehicle===`blower`||t.state.vehicle===`destroyer`){let e=Math.min(5,g),t=r.x+c*.86+u*1.3,i=r.z+l*.86+d*1.3;for(let r=0;r<e;r++){let e=7+Math.random()*2.6,r=6+Math.random()*2.6;n.emit(t,2,i,u*r+c*_*.6+(Math.random()-.5),e,d*r+l*_*.6+(Math.random()-.5),.8+Math.random()*.3,.26+Math.random()*.2,s.topColor,1,13)}}}updateGlints(e){let{sim:t}=this;if(e<=0||(this.glintIn-=e,this.glintIn>0))return;this.glintIn=.09;let n=t.treasures;if(n.length===0)return;let r=n[Math.floor(Math.random()*n.length)];if(r.found||Math.abs(r.x-this.vehicleView.x)>19.5||Math.abs(r.z-this.vehicleView.z)>15)return;let i=r.kind===`car`||r.kind===`golden`,a=r.kind===`gem`?13219071:i?16765502:16773808,o=this.snow.heightAt(r.x,r.z)+.45;for(let e=0;e<(i?3:1);e++)this.particles.emit(r.x+(Math.random()-.5)*.5,o,r.z+(Math.random()-.5)*.5,0,.6+Math.random()*.5,0,.5+Math.random()*.3,i?.3:.2,a,1,0,0)}updateRocketEffects(e){let t=this.sim.rocketCountdown,n=t===null?-1:Math.ceil(t);n!==this.lastCountdown&&(this.lastCountdown=n,n>0&&n<=5&&this.audio.click());let r=this.world.carriers.rocketEngine();if(!(!r||e<=0))for(let e=0;e<5;e++){let e=Math.random()<.5;this.particles.emit(r.x+(Math.random()-.5)*1.6,Math.max(.5,r.y-1),r.z+(Math.random()-.5)*1.6,(Math.random()-.5)*7,-2-Math.random()*4,(Math.random()-.5)*7,.7+Math.random()*.7,e?.8:1.5,e?16757050:15923196,e?1:.5,-.4,1.2)}}updateFactoryEffects(e){let{sim:t}=this;e<=0||this.vehicleView.z<t.layout.base.minZ||(this.steamIn-=e,this.steamIn>0||(this.steamIn=.14,this.world.factory.forEachVent((e,t,n)=>{this.particles.emit(e+(Math.random()-.5)*.4,t,n+(Math.random()-.5)*.4,.35+Math.random()*.3,1.2+Math.random()*.9,Math.random()*.3-.15,1.5+Math.random()*.8,.9+Math.random()*.6,15923196,.32,-.25,.3)})))}updateTally(e){if(this.pauseReasons.size>0)return;this.frameQuantity>0?(this.tallyAmount+=this.frameQuantity,this.tallyIdle=0):(this.tallyIdle+=e,this.tallyIdle>.8&&(this.tallyAmount=0));let t=this.tallyIdle<.8&&this.tallyAmount>=1,n=this.toScreen(this.vehicleView.x,2.6,this.vehicleView.z),r=Math.max(20,this.sim.stats.capacity/12),i=this.tallyAmount>r*8?2:+(this.tallyAmount>r*3);this.ui.updateTally(n.x,n.y,this.tallyAmount,t,i)}updatePlowFeel(e){let{sim:t,debris:n,particles:r}=this;if(this.pauseReasons.size>0||e<=0)return;let{vehicle:i,stats:a,clearing:o}=t,s=vd[t.state.vehicle],c=this.frameQuantity>0,l=ad[t.level.sections[this.frameSection]?.type??`light`],u=i.dirX,d=i.dirZ,f=-d,p=u,m=a.width/2,h=this.vehicleView.x+u*s.bladeOffset,g=this.vehicleView.z+d*s.bladeOffset;if(this.whumpCooldown-=e,c&&o.contact>.45&&this.lastContact<.15&&this.whumpCooldown<=0&&i.speed>1){this.whumpCooldown=.55,this.audio.whump(Math.min(1,l.height)),this.rig.punch(.45+o.contact*.35),this.vibrate(14);for(let e=0;e<16;e++){let e=(Math.random()*2-1)*m,t=3.4+Math.random()*3.6,r=(Math.random()-.5)*3.4,a=1+i.speed*.8+Math.random()*2;n.emit(h+f*e,.5,g+p*e,u*a+f*r,t,d*a+p*r,.8+Math.random()*.5,.15+Math.random()*.2,Math.random()<.3?l.shadeColor:l.topColor)}}if(this.lastContact+=(o.contact-this.lastContact)*Math.min(1,e*14),c){this.curlCarry+=(30+44*o.contact)*s.spray*e;let n=Math.min(12,Math.floor(this.curlCarry));this.curlCarry-=n;for(let e=0;e<n;e++)for(let e of[-1,1]){let t=3.2+Math.random()*1.8,n=4.4+Math.random()*2.2+a.width*.12,o=i.speed*(.4+Math.random()*.25);r.emit(h+f*e*m,.4+l.height*.3,g+p*e*m,u*o+f*e*n,t,d*o+p*e*n,.55+Math.random()*.3,.32+Math.random()*.34,Math.random()<.6?16777215:l.topColor,.95,12,.5)}for(this.glitterCarry+=26*e;this.glitterCarry>=1;){--this.glitterCarry;let e=Math.random()<.5?-1:1,n=Math.random()*1.5;r.emit(h+f*e*(m+.05)-u*n,.3+Math.random()*l.height,g+p*e*(m+.05)-d*n,0,.5+Math.random()*.5,0,.45+Math.random()*.45,.11+Math.random()*.08,t.frenzyActive?16767082:15399167,1,0,0)}if(Math.random()<e*22){let e=Math.random()<.5?-1:1;r.emit(this.vehicleView.x-u*s.radius*.9+f*e*s.radius*.7,.2,this.vehicleView.z-d*s.radius*.9+p*e*s.radius*.7,-u*1.2+(Math.random()-.5),.5+Math.random()*.5,-d*1.2+(Math.random()-.5),.5+Math.random()*.3,.5+Math.random()*.4,16777215,.3,-.1,1.4)}let c=Math.max(8,a.capacity/30),_=Math.floor(this.tallyAmount/c);_>this.streakStep&&(this.streakStep=_,this.audio.streakTick(_))}else this.tallyIdle>.25&&(this.streakStep=0);let _=Math.floor((1-t.field.remainingRatio())*10);if(this.clearedTenths<0&&(this.clearedTenths=_),_>this.clearedTenths&&_<10){this.clearedTenths=_;let e=this.toScreen(this.vehicleView.x,3.4,this.vehicleView.z);this.ui.popup(e.x,e.y,`${_*10}% cleared!`,`big`),this.audio.percent(_),this.burstCoins(this.vehicleView.x,this.vehicleView.z,18),this.sparkle(this.vehicleView.x,this.vehicleView.z,16),this.rig.punch(.6)}}updateCrunch(e,t){if(this.frameQuantity<=0||this.pauseReasons.size>0||(this.grainIn-=e,this.grainIn>0))return;let{sim:n}=this,r=ad[n.level.sections[this.frameSection]?.type??`light`];this.audio.crunchGrain(Math.min(1,r.height),r.sparkle);let i=.35+Math.min(1,n.vehicle.speed/6)*(.4+t*.6);this.grainIn=(.03+Math.random()*.06)/i}burstCoins(e,t,n){for(let r=0;r<n;r++){let n=Math.random()*Math.PI*2,r=1.5+Math.random()*4.5;this.particles.emit(e,.5,t,Math.cos(n)*r,5+Math.random()*5,Math.sin(n)*r,.7+Math.random()*.5,.3+Math.random()*.2,Math.random()<.7?16763182:16773024,1,14,.2)}}sparkle(e,t,n){for(let r=0;r<n;r++){let i=r/n*Math.PI*2,a=2.4+Math.random()*1.6;this.particles.emit(e,1,t,Math.cos(i)*a,2.4+Math.random()*2.4,Math.sin(i)*a,.55+Math.random()*.35,.22+Math.random()*.14,Math.random()<.5?7133183:16777215,1,5,1)}}createGuideArrow(){let e=new za;e.moveTo(0,1.05),e.lineTo(.72,.12),e.lineTo(.28,.12),e.lineTo(.28,-.8),e.lineTo(-.28,-.8),e.lineTo(-.28,.12),e.lineTo(-.72,.12),e.closePath();let t=new Ao(e);t.rotateX(-Math.PI/2);let n=new q(t,new gi({color:16765502,transparent:!0,depthTest:!1,fog:!1}));return n.renderOrder=7,n.visible=!1,n}updateGuideArrow(e,t){let n=this.guideArrow;if(!t){n.visible=!1;return}let{x:r,z:i}=this.vehicleView,a=t.x-r,o=t.z-i,s=Math.hypot(a,o);if(s<3.2){n.visible=!1;return}this.arrowTime+=e;let c=a/s,l=o/s,u=3+vd[this.sim.state.vehicle].radius+Math.sin(this.arrowTime*6)*.3;n.visible=!0,n.position.set(r+c*u,.9,i+l*u),n.rotation.y=Math.atan2(-c,-l)}get debugInfo(){let e=this.context.renderer.info;return{fps:Math.round(this.fpsAverage),drawCalls:e.render.calls,triangles:e.render.triangles,textures:e.memory.textures,geometries:e.memory.geometries,particles:this.particles.count,tufts:this.tufts.triangles/15,tier:this.context.quality.tier,fontLoaded:document.fonts.check(`16px ${Df}`),step:A_}}},Y_=`snow-plow.save`,X_=`snow-plow.save.bak`,Z_=`snow-plow.save.bad`,Q_={treasure:{baseCost:60,costGrowth:1.85},tires:{baseCost:45,costGrowth:2.4},output:{baseCost:200,costGrowth:1.8}},$_=[150,800,3e3,1e4,3e4,9e4,22e4,5e5,15e5,6e6,2e7,7e7,2e8,5e8,12e8,3e9,4e9,5e9,65e8,9e9];function ev(e){let t=$_.slice(0,e).reduce((e,t)=>e+t,0),n=0,r=0;for(let e of md){if(r+=e.cost,r>t)break;n++}return Math.max(n,e)}var tv={1:e=>({...e,version:2,money:e.cash,upgrades:{width:e.widthLevel,power:e.powerLevel,speed:e.speedLevel,capacity:e.capacityLevel}}),2:e=>{let t=rv(e.upgrades)?e.upgrades:{},n={...t},r=0;for(let[e,{baseCost:i,costGrowth:a}]of Object.entries(Q_)){for(let n=0;n<av(t[e],200);n++)r+=Math.round(i*a**+n);delete n[e]}for(let e of[`width`,`power`,`speed`,`capacity`,`value`])n[e]=av(t[e])*2;return{...e,version:3,money:iv(e.money)+r,upgrades:n}},3:e=>({...e,version:4,factoryLevel:ev(av(e.factoryLevel??(Array.isArray(e.yard)?e.yard.length:0),$_.length))})};function nv(e){let t=e,n=typeof t.version==`number`?t.version:1;for(;n<4;){let e=tv[n];if(!e)return null;t=e(t),n++}return n===4?t:null}function rv(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function iv(e,t=2**53-1){return Math.min(t,Math.max(0,typeof e==`number`&&Number.isFinite(e)?e:0))}function av(e,t=2**53-1){return Math.floor(iv(e,t))}function ov(e){let t=Vd();if(t.money=av(e.money),t.gems=av(e.gems),t.rank=av(e.rank),t.savedAt=iv(e.savedAt),rv(e.perks))for(let n of Object.keys(dd))t.perks[n]=av(e.perks[n],dd[n].costs.length);let n=Array.isArray(e.yard)?e.yard.length:0;if(t.factoryLevel=av(e.factoryLevel??n,md.length),t.cargoQuantity=iv(e.cargoQuantity),t.cargoValue=iv(e.cargoValue),t.pendingIncome=av(e.pendingIncome),t.rocketStock=av(e.rocketStock),rv(e.upgrades))for(let n of Object.keys(cd))t.upgrades[n]=av(e.upgrades[n],cd[n].maxLevel);if(Array.isArray(e.ownedVehicles))for(let n of e.ownedVehicles)yd.includes(n)&&!t.ownedVehicles.includes(n)&&t.ownedVehicles.push(n);if(t.ownedVehicles.includes(e.vehicle)&&(t.vehicle=e.vehicle),t.maxLevel=av(e.maxLevel,Nd.length-1),t.levelIndex=Math.min(av(e.levelIndex,Nd.length-1),t.maxLevel),rv(e.levels))for(let n of Nd){let r=e.levels[n.id];if(!rv(r))continue;let i={clearedOnce:n.sections.map((e,t)=>Array.isArray(r.clearedOnce)&&r.clearedOnce[t]===!0),snow:typeof r.snow==`string`?r.snow:null,clearedQuantity:iv(r.clearedQuantity),stars:av(r.stars,3),foundTreasures:Array.isArray(r.foundTreasures)?r.foundTreasures.filter(e=>Number.isInteger(e)&&e>=0):[]};t.levels[n.id]=i}if(t.tutorialStep=av(e.tutorialStep,10),rv(e.settings)){typeof e.settings.sound==`boolean`&&(t.settings.sound=e.settings.sound);let n=e.settings.quality;(n===`auto`||n===`low`||n===`medium`||n===`high`)&&(t.settings.quality=n)}return rv(e.stats)&&(t.stats.totalEarned=iv(e.stats.totalEarned),t.stats.totalSnow=iv(e.stats.totalSnow),t.stats.playSeconds=iv(e.stats.playSeconds),t.stats.totalGems=iv(e.stats.totalGems)),t}function sv(e){if(!e)return null;try{let t=JSON.parse(e);if(!rv(t))return null;let n=nv(t);return n?ov(n):null}catch{return null}}var cv=class{constructor(e){X(this,`backend`,void 0),X(this,`writeBlocked`,!1),X(this,`chain`,Promise.resolve()),X(this,`lastError`,null),this.backend=e}async load(){let e;try{e=await this.backend.getItem(Y_)}catch(e){return this.lastError=e,this.writeBlocked=!0,{state:Vd(),source:`new`}}let t=sv(e);if(t)return{state:t,source:`save`};if(e)try{await this.backend.setItem(Z_,e)}catch(e){this.lastError=e}try{let e=sv(await this.backend.getItem(X_));if(e)return{state:e,source:`backup`}}catch(e){this.lastError=e}return{state:Vd(),source:`new`}}save(e){let t=JSON.stringify({...e,version:4,savedAt:Date.now()}),n=e.stats.totalEarned,r=this.chain.then(()=>this.write(t,n));return this.chain=r,r}async write(e,t){try{return this.writeBlocked&&!await this.canUnblock(t)?!1:(await this.backend.setItem(Y_,e),await this.backend.setItem(X_,e),this.lastError=null,!0)}catch(e){return this.lastError=e,!1}}async canUnblock(e){let t=sv(await this.backend.getItem(Y_));return t&&t.stats.totalEarned>e?!1:(this.writeBlocked=!1,!0)}},lv=class{constructor(){X(this,`memory`,new Map),X(this,`available`,!0);try{let e=`snow-plow.probe`;localStorage.setItem(e,`1`),localStorage.removeItem(e)}catch{this.available=!1}}async getItem(e){if(this.available)try{return localStorage.getItem(e)}catch{this.available=!1}return this.memory.get(e)??null}async setItem(e,t){this.memory.set(e,t),this.available&&localStorage.setItem(e,t)}},uv=class{constructor(e){X(this,`options`,void 0),X(this,`id`,`local`),X(this,`storage`,new lv),this.options=e}async init(){}loadingStart(){}loadingStop(){}gameReady(){}gameplayStart(){}gameplayStop(){}rewardedSupported(){return this.options.simulateAds&&this.options.adMode!==`none`}simulate(){let e=this.options.adMode,t=e===`fail`?`failed`:e===`skip`?`skipped`:e===`none`?`unavailable`:`completed`;return new Promise(e=>setTimeout(()=>e(t),600))}showRewarded(){return this.options.simulateAds?this.simulate():Promise.resolve(`unavailable`)}showMidgame(){return Promise.resolve(`unavailable`)}audioAllowed(){return!0}onAudioChange(){}onPauseChange(){}};function dv(){return new uv({simulateAds:!1,adMode:new URLSearchParams(location.search).get(`ads`)})}async function fv(){let e;try{return e=dv(),await e.init(),e}catch(e){console.warn(`Platform SDK failed to start; continuing without it.`,e);let t=new uv({simulateAds:!1});return await t.init(),t}}function pv(e){let t=document.getElementById(`boot`);t&&(t.textContent=e,t.style.fontSize=`20px`,t.style.padding=`24px`,t.style.textAlign=`center`)}async function mv(){let e=document.getElementById(`game-root`);if(!e)throw Error(`Missing #game-root`);if(!document.createElement(`canvas`).getContext(`webgl2`)){pv(`Snow Plow needs WebGL 2. Please update your browser or enable hardware acceleration.`);return}let t=await fv();t.loadingStart();try{await Promise.race([document.fonts.load(`700 40px ${Df}`),new Promise(e=>setTimeout(e,1500))])}catch{}let n=new cv(t.storage),{state:r,source:i}=await n.load();i===`backup`&&console.warn(`Main save was unreadable; restored from backup.`);let a=new J_(e,r,t,n);a.start(),new URLSearchParams(location.search).has(`debug`)&&(window.__snowPlow=a)}mv().catch(e=>{console.error(e),pv(`Snow Plow could not start. Please reload the page.`)});