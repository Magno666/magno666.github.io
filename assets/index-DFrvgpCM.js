(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const nc="185",If=0,Gc=1,Lf=2,Na=1,wh=2,vr=3,vi=0,yn=1,An=2,ti=0,Ns=1,Yi=2,Vc=3,Wc=4,Nf=5,Xi=100,Df=101,Uf=102,Ff=103,Of=104,Bf=200,zf=201,kf=202,Hf=203,tl=204,nl=205,Gf=206,Vf=207,Wf=208,Xf=209,qf=210,Yf=211,Kf=212,Zf=213,$f=214,il=0,sl=1,rl=2,zs=3,al=4,ol=5,ll=6,cl=7,ic=0,Jf=1,Qf=2,ni=0,sc=1,rc=2,ac=3,ja=4,oc=5,lc=6,cc=7,Xc="attached",jf="detached",Ah=300,ji=301,ks=302,Da=303,uo=304,eo=306,Di=1e3,On=1001,Wa=1002,Qt=1003,Rh=1004,Mr=1005,Ut=1006,Ua=1007,jn=1008,Rn=1009,Ch=1010,Ph=1011,Rr=1012,uc=1013,ii=1014,_n=1015,on=1016,hc=1017,fc=1018,Cr=1020,Ih=35902,Lh=35899,Nh=1021,Dh=1022,Jt=1023,Mi=1026,Ki=1027,Zi=1028,dc=1029,Dn=1030,pc=1031,mc=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,ul=35840,hl=35841,fl=35842,dl=35843,pl=36196,ml=37492,gl=37496,_l=37488,xl=37489,Xa=37490,vl=37491,Ml=37808,yl=37809,Sl=37810,bl=37811,Tl=37812,El=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Nl=37821,Dl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,qa=36285,zl=36286,Pr=2300,Ir=2301,ho=2302,qc=2303,Yc=2400,Kc=2401,Zc=2402,ed=2500,td=0,Uh=1,kl=2,nd=3200,Lr=0,id=1,Li="",Xt="srgb",qt="srgb-linear",Ya="linear",St="srgb",cs=7680,$c=519,sd=512,rd=513,ad=514,gc=515,od=516,ld=517,_c=518,cd=519,Hl=35044,Jc="300 es",ei=2e3,Nr=2001;function ud(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=Dr("canvas");return i.style.display="block",i}const Qc={};function Ka(...i){const e="THREE."+i.shift();console.log(e,...i)}function Fh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Fh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=Fh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){const e=i.join(" ");e in Qc||(Qc[e]=!0,et(...i))}function dd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const pd={[il]:sl,[rl]:ll,[al]:cl,[zs]:ol,[sl]:il,[ll]:rl,[cl]:al,[ol]:zs};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Tr=Math.PI/180,Hs=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function xc(i,e){return(i%e+e)%e}function md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function gd(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function _d(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function xd(i,e=1){return e-Math.abs(xc(i,e*2)-e)}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sd(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(jc=i);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(i){return i*Tr}function wd(i){return i*Hs}function Ad(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),f=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*f,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*f,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*f,o*c);break;case"XZX":i.set(o*f,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*f,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*f,o*c);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Id={DEG2RAD:Tr,RAD2DEG:Hs,generateUUID:qn,clamp:mt,euclideanModulo:xc,mapLinear:md,inverseLerp:gd,lerp:Er,damp:_d,pingpong:xd,smoothstep:vd,smootherstep:Md,randInt:yd,randFloat:Sd,randFloatSpread:bd,seededRandom:Td,degToRad:Ed,radToDeg:wd,isPowerOfTwo:Ad,ceilPowerOfTwo:Rd,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Pd,normalize:Tt,denormalize:Wn},Oc=class Oc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oc.prototype.isVector2=!0;let Je=Oc;class Si{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],T=r[a+3];if(h!==T||l!==d||c!==p||f!==x){let g=l*d+c*p+f*x+h*T;g<0&&(d=-d,p=-p,x=-x,T=-T,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),C=Math.sin(S);m=Math.sin(m*S)/C,o=Math.sin(o*S)/C,l=l*m+d*o,c=c*m+p*o,f=f*m+x*o,h=h*m+T*o}else{l=l*m+d*o,c=c*m+p*o,f=f*m+x*o,h=h*m+T*o;const S=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=S,c*=S,f*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+f*h+l*p-c*d,e[t+1]=l*x+f*d+c*h-o*p,e[t+2]=c*x+f*p+o*d-l*h,e[t+3]=f*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"YZX":this._x=d*f*h+c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h-d*p*x;break;case"XZY":this._x=d*f*h-c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h+d*p*x;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bc=class Bc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bc.prototype.isVector3=!0;let V=Bc;const fo=new V,eu=new Si,zc=class zc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],p=n[5],x=n[8],T=s[0],g=s[3],m=s[6],S=s[1],C=s[4],E=s[7],P=s[2],I=s[5],D=s[8];return r[0]=a*T+o*S+l*P,r[3]=a*g+o*C+l*I,r[6]=a*m+o*E+l*D,r[1]=c*T+f*S+h*P,r[4]=c*g+f*C+h*I,r[7]=c*m+f*E+h*D,r[2]=d*T+p*S+x*P,r[5]=d*g+p*C+x*I,r[8]=d*m+p*E+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*r,p=c*r-a*l,x=t*h+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=h*T,e[1]=(s*c-f*n)*T,e[2]=(o*n-s*a)*T,e[3]=d*T,e[4]=(f*t-s*l)*T,e[5]=(s*r-o*t)*T,e[6]=p*T,e[7]=(n*l-c*t)*T,e[8]=(a*t-n*r)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(po.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(po.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zc.prototype.isMatrix3=!0;let lt=zc;const po=new lt,tu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const i={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qt]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const pt=Ld();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class Nd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=Dr("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dd=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let Ud=0;const go=new V;class jt extends ts{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=On,s=On,r=Ut,a=jn,o=Jt,l=Rn,c=jt.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=qn(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ah;jt.DEFAULT_ANISOTROPY=1;const kc=class kc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],x=l[9],T=l[2],g=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-T)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+T)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,E=(p+1)/2,P=(m+1)/2,I=(f+d)/4,D=(h+T)/4,M=(x+g)/4;return C>E&&C>P?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=I/n,r=D/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=M/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=D/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-x)*(g-x)+(h-T)*(h-T)+(d-f)*(d-f));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(h-T)/S,this.z=(d-f)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kc.prototype.isVector4=!0;let Rt=kc;class Fd extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Od extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qa=class Qa{constructor(e,t,n,s,r,a,o,l,c,f,h,d,p,x,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,h,d,p,x,T,g)}set(e,t,n,s,r,a,o,l,c,f,h,d,p,x,T,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=d,m[3]=p,m[7]=x,m[11]=T,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,T=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=d-T*c,t[9]=-o*l,t[2]=T-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,x=c*f,T=c*h;t[0]=d+T*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=T+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,x=c*f,T=c*h;t[0]=d-T*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=T-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,T=o*h;t[0]=l*f,t[4]=x*c-p,t[8]=d*c+T,t[1]=l*h,t[5]=T*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,T=o*c;t[0]=l*f,t[4]=T-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*h+x,t[10]=d-T*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,T=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+T,t[5]=a*f,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*f,t[10]=T*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,zd)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ti.crossVectors(n,Tn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ti.crossVectors(n,Tn)),Ti.normalize(),jr.crossVectors(Tn,Ti),s[0]=Ti.x,s[4]=jr.x,s[8]=Tn.x,s[1]=Ti.y,s[5]=jr.y,s[9]=Tn.y,s[2]=Ti.z,s[6]=jr.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],p=n[13],x=n[2],T=n[6],g=n[10],m=n[14],S=n[3],C=n[7],E=n[11],P=n[15],I=s[0],D=s[4],M=s[8],L=s[12],v=s[1],w=s[5],A=s[9],B=s[13],H=s[2],z=s[6],K=s[10],O=s[14],ee=s[3],j=s[7],ce=s[11],ge=s[15];return r[0]=a*I+o*v+l*H+c*ee,r[4]=a*D+o*w+l*z+c*j,r[8]=a*M+o*A+l*K+c*ce,r[12]=a*L+o*B+l*O+c*ge,r[1]=f*I+h*v+d*H+p*ee,r[5]=f*D+h*w+d*z+p*j,r[9]=f*M+h*A+d*K+p*ce,r[13]=f*L+h*B+d*O+p*ge,r[2]=x*I+T*v+g*H+m*ee,r[6]=x*D+T*w+g*z+m*j,r[10]=x*M+T*A+g*K+m*ce,r[14]=x*L+T*B+g*O+m*ge,r[3]=S*I+C*v+E*H+P*ee,r[7]=S*D+C*w+E*z+P*j,r[11]=S*M+C*A+E*K+P*ce,r[15]=S*L+C*B+E*O+P*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],T=e[7],g=e[11],m=e[15],S=l*p-c*d,C=o*p-c*h,E=o*d-l*h,P=a*p-c*f,I=a*d-l*f,D=a*h-o*f;return t*(T*S-g*C+m*E)-n*(x*S-g*P+m*I)+s*(x*C-T*P+m*D)-r*(x*E-T*I+g*D)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],T=e[13],g=e[14],m=e[15],S=t*o-n*a,C=t*l-s*a,E=t*c-r*a,P=n*l-s*o,I=n*c-r*o,D=s*c-r*l,M=f*T-h*x,L=f*g-d*x,v=f*m-p*x,w=h*g-d*T,A=h*m-p*T,B=d*m-p*g,H=S*B-C*A+E*w+P*v-I*L+D*M;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=(o*B-l*A+c*w)*z,e[1]=(s*A-n*B-r*w)*z,e[2]=(T*D-g*I+m*P)*z,e[3]=(d*I-h*D-p*P)*z,e[4]=(l*v-a*B-c*L)*z,e[5]=(t*B-s*v+r*L)*z,e[6]=(g*E-x*D-m*C)*z,e[7]=(f*D-d*E+p*C)*z,e[8]=(a*A-o*v+c*M)*z,e[9]=(n*v-t*A-r*M)*z,e[10]=(x*I-T*E+m*S)*z,e[11]=(h*E-f*I-p*S)*z,e[12]=(o*L-a*w-l*M)*z,e[13]=(t*w-n*L+s*M)*z,e[14]=(T*C-x*P-g*S)*z,e[15]=(f*P-h*C+d*S)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,h=o+o,d=r*c,p=r*f,x=r*h,T=a*f,g=a*h,m=o*h,S=l*c,C=l*f,E=l*h,P=n.x,I=n.y,D=n.z;return s[0]=(1-(T+m))*P,s[1]=(p+E)*P,s[2]=(x-C)*P,s[3]=0,s[4]=(p-E)*I,s[5]=(1-(d+m))*I,s[6]=(g+S)*I,s[7]=0,s[8]=(x+C)*D,s[9]=(g-S)*D,s[10]=(1-(d+T))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);const c=1/a,f=1/o,h=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ei,l=!1){const c=this.elements,f=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let x,T;if(l)x=r/(a-r),T=a*r/(a-r);else if(o===ei)x=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===Nr)x=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei,l=!1){const c=this.elements,f=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let x,T;if(l)x=1/(a-r),T=a/(a-r);else if(o===ei)x=-2/(a-r),T=-(a+r)/(a-r);else if(o===Nr)x=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Qa.prototype.isMatrix4=!0;let ht=Qa;const hs=new V,Bn=new ht,Bd=new V(0,0,0),zd=new V(1,1,1),Ti=new V,jr=new V,Tn=new V,iu=new ht,su=new Si;class yi{constructor(e=0,t=0,n=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const ru=new V,fs=new Si,ci=new ht,ea=new V,tr=new V,Hd=new V,Gd=new Si,au=new V(1,0,0),ou=new V(0,1,0),lu=new V(0,0,1),cu={type:"added"},Vd={type:"removed"},ds={type:"childadded",child:null},_o={type:"childremoved",child:null};class Pt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new V,t=new yi,n=new Si,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new lt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(tr,ea,this.up):ci.lookAt(ea,tr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ci),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),ds.child=e,this.dispatchEvent(ds),ds.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new V(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ct extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wd={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const T of e.hand.values()){const g=t.getJointPose(T,n),m=this._getHandJoint(c,T);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ta={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=xc(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vo(a,r,e+1/3),this.g=vo(a,r,e),this.b=vo(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return pt.workingToColorSpace(un.copy(this),e),Math.round(mt(un.r*255,0,255))*65536+Math.round(mt(un.g*255,0,255))*256+Math.round(mt(un.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(un.copy(this),t);const n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Xt){pt.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ta);const n=Er(Ei.h,ta.h,t),s=Er(Ei.s,ta.s,t),r=Er(Ei.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Ge;Ge.NAMES=zh;class Mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xd extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zn=new V,ui=new V,Mo=new V,hi=new V,ps=new V,ms=new V,uu=new V,yo=new V,So=new V,bo=new V,To=new Rt,Eo=new Rt,wo=new Rt;class Un{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),ui.subVectors(n,t),Mo.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(ui),l=zn.dot(Mo),c=ui.dot(ui),f=ui.dot(Mo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,x=(a*f-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return To.setScalar(0),Eo.setScalar(0),wo.setScalar(0),To.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,n),wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Eo,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),ui.subVectors(e,t),zn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,n),ms.subVectors(r,n),yo.subVectors(e,n);const l=ps.dot(yo),c=ms.dot(yo);if(l<=0&&c<=0)return t.copy(n);So.subVectors(e,s);const f=ps.dot(So),h=ms.dot(So);if(f>=0&&h<=f)return t.copy(s);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(ps,a);bo.subVectors(e,r);const p=ps.dot(bo),x=ms.dot(bo);if(x>=0&&p<=x)return t.copy(r);const T=p*c-l*x;if(T<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ms,o);const g=f*x-p*h;if(g<=0&&h-f>=0&&p-x>=0)return uu.subVectors(r,s),o=(h-f)/(h-f+(p-x)),t.copy(s).addScaledVector(uu,o);const m=1/(g+T+d);return a=T*m,o=d*m,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),ia.subVectors(this.max,nr),gs.subVectors(e.a,nr),_s.subVectors(e.b,nr),xs.subVectors(e.c,nr),wi.subVectors(_s,gs),Ai.subVectors(xs,_s),Bi.subVectors(gs,xs);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Bi.z,Bi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Bi.z,0,-Bi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Bi.y,Bi.x,0];return!Ao(t,gs,_s,xs,ia)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,gs,_s,xs,ia))?!1:(sa.crossVectors(wi,Ai),t=[sa.x,sa.y,sa.z],Ao(t,gs,_s,xs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new V,new V,new V,new V,new V,new V,new V,new V],kn=new V,na=new bi,gs=new V,_s=new V,xs=new V,wi=new V,Ai=new V,Bi=new V,nr=new V,ia=new V,sa=new V,zi=new V;function Ao(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),f=n.dot(zi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const gi=qd();function qd(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,f=0;for(;(c&8388608)===0;)c<<=1,f-=8388608;c&=-8388609,f+=947912704,r[l]=c|f}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Yd(i){Math.abs(i)>65504&&et("DataUtils.toHalfFloat(): Value out of range."),i=mt(i,-65504,65504),gi.floatView[0]=i;const e=gi.uint32View[0],t=e>>23&511;return gi.baseTable[t]+((e&8388607)>>gi.shiftTable[t])}function Kd(i){const e=i>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[e]+(i&1023)]+gi.exponentTable[e],gi.floatView[0]}class ki{static toHalfFloat(e){return Yd(e)}static fromHalfFloat(e){return Kd(e)}}const Wt=new V,ra=new Je;let Zd=0;class en extends ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kh extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hh extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const $d=new bi,ir=new V,Ro=new V;class ri{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ro)),this.expandByPoint(ir.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jd=0;const Ln=new ht,Co=new Pt,vs=new V,En=new bi,sr=new bi,an=new V;class sn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?Hh:kh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(En.min,sr.min),En.expandByPoint(an),an.addVectors(En.max,sr.max),En.expandByPoint(an)):(En.expandByPoint(sr.min),En.expandByPoint(sr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)an.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),an.add(vs)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new V,l[M]=new V;const c=new V,f=new V,h=new V,d=new Je,p=new Je,x=new Je,T=new V,g=new V;function m(M,L,v){c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,L),x.fromBufferAttribute(r,v),f.sub(c),h.sub(c),p.sub(d),x.sub(d);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(T.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(w),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(w),o[M].add(T),o[L].add(T),o[v].add(T),l[M].add(g),l[L].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let M=0,L=S.length;M<L;++M){const v=S[M],w=v.start,A=v.count;for(let B=w,H=w+A;B<H;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const C=new V,E=new V,P=new V,I=new V;function D(M){P.fromBufferAttribute(s,M),I.copy(P);const L=o[M];C.copy(L),C.sub(P.multiplyScalar(P.dot(L))).normalize(),E.crossVectors(I,L);const w=E.dot(l[M])<0?-1:1;a.setXYZW(M,C.x,C.y,C.z,w)}for(let M=0,L=S.length;M<L;++M){const v=S[M],w=v.start,A=v.count;for(let B=w,H=w+A;B<H;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),T=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,g),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,x=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?p=l[T]*o.data.stride+o.offset:p=l[T]*f;for(let m=0;m<f;m++)d[x++]=c[p++]}return new en(d,f,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],h=r[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new V;class Ur{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Qd=0;class Cn extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Ns,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vh extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const rr=new V,ys=new V,Ss=new V,bs=new Je,ar=new Je,Wh=new ht,aa=new V,or=new V,oa=new V,hu=new Je,Po=new Je,fu=new Je;class jd extends Pt{constructor(e=new Vh){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gh(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Ur(n,3,0,!1)),Ms.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;la(aa.set(-.5,-.5,0),Ss,a,ys,s,r),la(or.set(.5,-.5,0),Ss,a,ys,s,r),la(oa.set(.5,.5,0),Ss,a,ys,s,r),hu.set(0,0),Po.set(1,0),fu.set(1,1);let o=e.ray.intersectTriangle(aa,or,oa,!1,rr);if(o===null&&(la(or.set(-.5,.5,0),Ss,a,ys,s,r),Po.set(0,1),o=e.ray.intersectTriangle(aa,oa,or,!1,rr),o===null))return;const l=e.ray.origin.distanceTo(rr);l<e.near||l>e.far||t.push({distance:l,point:rr.clone(),uv:Un.getInterpolation(rr,aa,or,oa,hu,Po,fu,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(i,e,t,n,s,r){bs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*bs.x-s*bs.y,ar.y=s*bs.x+r*bs.y):ar.copy(bs),i.copy(e),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(Wh)}const di=new V,Io=new V,ca=new V,Ri=new V,Lo=new V,ua=new V,No=new V;class to{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Io.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Io);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=Ri.dot(this.direction),l=-Ri.dot(ca),c=Ri.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*l-o,d=a*o-l,x=r*f,h>=0)if(d>=-x)if(d<=x){const T=1/f;h*=T,d*=T,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Io).addScaledVector(ca,d),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){Lo.subVectors(t,e),ua.subVectors(n,e),No.crossVectors(Lo,ua);let a=this.direction.dot(No),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const l=o*this.direction.dot(ua.crossVectors(Ri,ua));if(l<0)return null;const c=o*this.direction.dot(Lo.cross(Ri));if(c<0||l+c>a)return null;const f=-o*Ri.dot(No);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const du=new ht,Hi=new to,ha=new ri,pu=new V,fa=new V,da=new V,pa=new V,Do=new V,ma=new V,mu=new V,ga=new V;class _t extends Pt{constructor(e=new sn,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(Do.fromBufferAttribute(h,e),a?ma.addScaledVector(Do,f):ma.addScaledVector(Do.sub(t),f))}t.add(ma)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(ha.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ha,pu)===null||Hi.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(du.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const g=d[x],m=a[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,P=C;E<P;E+=3){const I=o.getX(E),D=o.getX(E+1),M=o.getX(E+2);s=_a(this,m,e,n,c,f,h,I,D,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),T=Math.min(o.count,p.start+p.count);for(let g=x,m=T;g<m;g+=3){const S=o.getX(g),C=o.getX(g+1),E=o.getX(g+2);s=_a(this,a,e,n,c,f,h,S,C,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const g=d[x],m=a[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,P=C;E<P;E+=3){const I=E,D=E+1,M=E+2;s=_a(this,m,e,n,c,f,h,I,D,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let g=x,m=T;g<m;g+=3){const S=g,C=g+1,E=g+2;s=_a(this,a,e,n,c,f,h,S,C,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function ep(i,e,t,n,s,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vi,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fa),i.getVertexPosition(l,da),i.getVertexPosition(c,pa);const f=ep(i,e,t,n,fa,da,pa,mu);if(f){const h=new V;Un.getBarycoord(mu,fa,da,pa,h),s&&(f.uv=Un.getInterpolatedAttribute(s,o,l,c,h,new Je)),r&&(f.uv1=Un.getInterpolatedAttribute(r,o,l,c,h,new Je)),a&&(f.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new V),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};Un.getNormal(fa,da,pa,d.normal),f.face=d,f.barycoord=h}return f}const lr=new Rt,gu=new Rt,_u=new Rt,tp=new Rt,xu=new ht,xa=new V,Uo=new ri,vu=new ht,Fo=new to;class np extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xc,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(s),e.ray.intersectsSphere(Uo)!==!1&&(vu.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(vu),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;gu.fromBufferAttribute(s.attributes.skinIndex,e),_u.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(lr.copy(t),t.set(0,0,0,0)):(lr.set(...t,1),t.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=_u.getComponent(r);if(a!==0){const o=gu.getComponent(r);xu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tp.copy(lr).applyMatrix4(xu),a)}}return t.isVector4&&(t.w=lr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Xh extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fr extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,f=Qt,h,d){super(null,a,o,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new ht,ip=new ht;class yc{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ip;Mu.multiplyMatrices(o,t[r]),Mu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fr(t,e,e,Jt,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(et("Skeleton: No bone found with UUID:",r),a=new Xh),this.bones.push(a),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Gl extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new ht,yu=new ht,va=[],Su=new bi,sp=new ht,cr=new _t,ur=new ri;class Vl extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Su.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ur.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),yu.multiplyMatrices(n,Ts),cr.matrixWorld=yu,cr.raycast(e,va);for(let a=0,o=va.length;a<o;a++){const l=va[a];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,Zi,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oo=new V,rp=new V,ap=new lt;class Wi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oo.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ap.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ri,op=new Je(.5,.5),Ma=new V;class Sc{constructor(e=new Wi,t=new Wi,n=new Wi,s=new Wi,r=new Wi,a=new Wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],p=r[7],x=r[8],T=r[9],g=r[10],m=r[11],S=r[12],C=r[13],E=r[14],P=r[15];if(s[0].setComponents(c-a,p-f,m-x,P-S).normalize(),s[1].setComponents(c+a,p+f,m+x,P+S).normalize(),s[2].setComponents(c+o,p+h,m+T,P+C).normalize(),s[3].setComponents(c-o,p-h,m-T,P-C).normalize(),n)s[4].setComponents(l,d,g,E).normalize(),s[5].setComponents(c-l,p-d,m-g,P-E).normalize();else if(s[4].setComponents(c-l,p-d,m-g,P-E).normalize(),t===ei)s[5].setComponents(c+l,p+d,m+g,P+E).normalize();else if(t===Nr)s[5].setComponents(l,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=op.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bc extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new V,$a=new V,bu=new ht,hr=new to,ya=new ri,Bo=new V,Tu=new V;class no extends Pt{constructor(e=new sn,t=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Za.fromBufferAttribute(t,s-1),$a.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Za.distanceTo($a);e.setAttribute("lineDistance",new Ht(n,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;bu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(bu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let T=p,g=x-1;T<g;T+=c){const m=f.getX(T),S=f.getX(T+1),C=Sa(this,e,hr,l,m,S,T);C&&t.push(C)}if(this.isLineLoop){const T=f.getX(x-1),g=f.getX(p),m=Sa(this,e,hr,l,T,g,x-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let T=p,g=x-1;T<g;T+=c){const m=Sa(this,e,hr,l,T,T+1,T);m&&t.push(m)}if(this.isLineLoop){const T=Sa(this,e,hr,l,x-1,p,x-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sa(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Za.fromBufferAttribute(o,s),$a.fromBufferAttribute(o,r),t.distanceSqToSegment(Za,$a,Bo,Tu)>n)return;Bo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Bo);if(!(c<e.near||c>e.far))return{distance:c,point:Tu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Eu=new V,wu=new V;class lp extends no{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Eu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(wu);e.setAttribute("lineDistance",new Ht(n,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends no{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qh extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new ht,Wl=new to,ba=new ri,Ta=new V;class up extends Pt{constructor(e=new sn,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;Au.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,T=p;x<T;x++){const g=c.getX(x);Ta.fromBufferAttribute(h,g),Ru(Ta,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,T=p;x<T;x++)Ta.fromBufferAttribute(h,x),Ru(Ta,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ru(i,e,t,n,s,r,a){const o=Wl.distanceSqToPoint(i);if(o<t){const l=new V;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yh extends jt{constructor(e=[],t=ji,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tc extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends jt{constructor(e,t,n=ii,s,r,a,o=Qt,l=Qt,c,f=Mi,h=1){if(f!==Mi&&f!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hp extends Gs{constructor(e,t=ii,n=ji,s,r,a=Qt,o=Qt,l,c=Mi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kh extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(h,2));function x(T,g,m,S,C,E,P,I,D,M,L){const v=E/D,w=P/M,A=E/2,B=P/2,H=I/2,z=D+1,K=M+1;let O=0,ee=0;const j=new V;for(let ce=0;ce<K;ce++){const ge=ce*w-B;for(let xe=0;xe<z;xe++){const Ze=xe*v-A;j[T]=Ze*S,j[g]=ge*C,j[m]=H,c.push(j.x,j.y,j.z),j[T]=0,j[g]=0,j[m]=I>0?1:-1,f.push(j.x,j.y,j.z),h.push(xe/D),h.push(1-ce/M),O+=1}}for(let ce=0;ce<M;ce++)for(let ge=0;ge<D;ge++){const xe=d+ge+z*ce,Ze=d+ge+z*(ce+1),ot=d+(ge+1)+z*(ce+1),te=d+(ge+1)+z*ce;l.push(xe,Ze,te),l.push(Ze,ot,te),ee+=6}o.addGroup(p,ee,L),p+=ee,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hn extends sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],d=[],p=[];let x=0;const T=[],g=n/2;let m=0;S(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function S(){const E=new V,P=new V;let I=0;const D=(t-e)/n;for(let M=0;M<=r;M++){const L=[],v=M/r,w=v*(t-e)+e;for(let A=0;A<=s;A++){const B=A/s,H=B*l+o,z=Math.sin(H),K=Math.cos(H);P.x=w*z,P.y=-v*n+g,P.z=w*K,h.push(P.x,P.y,P.z),E.set(z,D,K).normalize(),d.push(E.x,E.y,E.z),p.push(B,1-v),L.push(x++)}T.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){const v=T[L][M],w=T[L+1][M],A=T[L+1][M+1],B=T[L][M+1];(e>0||L!==0)&&(f.push(v,w,B),I+=3),(t>0||L!==r-1)&&(f.push(w,A,B),I+=3)}c.addGroup(m,I,0),m+=I}function C(E){const P=x,I=new Je,D=new V;let M=0;const L=E===!0?e:t,v=E===!0?1:-1;for(let A=1;A<=s;A++)h.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),x++;const w=x;for(let A=0;A<=s;A++){const H=A/s*l+o,z=Math.cos(H),K=Math.sin(H);D.x=L*K,D.y=g*v,D.z=L*z,h.push(D.x,D.y,D.z),d.push(0,v,0),I.x=z*.5+.5,I.y=K*.5*v+.5,p.push(I.x,I.y),x++}for(let A=0;A<s;A++){const B=P+A,H=w+A;E===!0?f.push(H,H+1,B):f.push(H+1,H,B),M+=3}c.addGroup(m,M,E===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fs extends hn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ec extends sn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const C=new V,E=new V,P=new V;for(let I=0;I<t.length;I+=3)p(t[I+0],C),p(t[I+1],E),p(t[I+2],P),l(C,E,P,S)}function l(S,C,E,P){const I=P+1,D=[];for(let M=0;M<=I;M++){D[M]=[];const L=S.clone().lerp(E,M/I),v=C.clone().lerp(E,M/I),w=I-M;for(let A=0;A<=w;A++)A===0&&M===I?D[M][A]=L:D[M][A]=L.clone().lerp(v,A/w)}for(let M=0;M<I;M++)for(let L=0;L<2*(I-M)-1;L++){const v=Math.floor(L/2);L%2===0?(d(D[M][v+1]),d(D[M+1][v]),d(D[M][v])):(d(D[M][v+1]),d(D[M+1][v+1]),d(D[M+1][v]))}}function c(S){const C=new V;for(let E=0;E<r.length;E+=3)C.x=r[E+0],C.y=r[E+1],C.z=r[E+2],C.normalize().multiplyScalar(S),r[E+0]=C.x,r[E+1]=C.y,r[E+2]=C.z}function f(){const S=new V;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];const E=g(S)/2/Math.PI+.5,P=m(S)/Math.PI+.5;a.push(E,1-P)}x(),h()}function h(){for(let S=0;S<a.length;S+=6){const C=a[S+0],E=a[S+2],P=a[S+4],I=Math.max(C,E,P),D=Math.min(C,E,P);I>.9&&D<.1&&(C<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),P<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,C){const E=S*3;C.x=e[E+0],C.y=e[E+1],C.z=e[E+2]}function x(){const S=new V,C=new V,E=new V,P=new V,I=new Je,D=new Je,M=new Je;for(let L=0,v=0;L<r.length;L+=9,v+=6){S.set(r[L+0],r[L+1],r[L+2]),C.set(r[L+3],r[L+4],r[L+5]),E.set(r[L+6],r[L+7],r[L+8]),I.set(a[v+0],a[v+1]),D.set(a[v+2],a[v+3]),M.set(a[v+4],a[v+5]),P.copy(S).add(C).add(E).divideScalar(3);const w=g(P);T(I,v+0,S,w),T(D,v+2,C,w),T(M,v+4,E,w)}}function T(S,C,E,P){P<0&&S.x===1&&(a[C]=S.x-1),E.x===0&&E.z===0&&(a[C]=P/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.vertices,e.indices,e.radius,e.detail)}}class io extends Ec{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new io(e.radius,e.detail)}}class Vs extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=e/o,d=t/l,p=[],x=[],T=[],g=[];for(let m=0;m<f;m++){const S=m*d-a;for(let C=0;C<c;C++){const E=C*h-r;x.push(E,-S,0),T.push(0,0,1),g.push(C/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const C=S+c*m,E=S+c*(m+1),P=S+1+c*(m+1),I=S+1+c*m;p.push(C,E,I),p.push(E,P,I)}this.setIndex(p),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(T,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class $i extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new V,d=new V,p=[],x=[],T=[],g=[];for(let m=0;m<=n;m++){const S=[],C=m/n,E=a+C*o,P=e*Math.cos(E),I=Math.sqrt(e*e-P*P);let D=0;m===0&&a===0?D=.5/t:m===n&&l===Math.PI&&(D=-.5/t);for(let M=0;M<=t;M++){const L=M/t,v=s+L*r;h.x=-I*Math.cos(v),h.y=P,h.z=I*Math.sin(v),x.push(h.x,h.y,h.z),d.copy(h).normalize(),T.push(d.x,d.y,d.z),g.push(L+D,1-C),S.push(c++)}f.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const C=f[m][S+1],E=f[m][S],P=f[m+1][S],I=f[m+1][S+1];(m!==0||a>0)&&p.push(C,E,I),(m!==n-1||l<Math.PI)&&p.push(E,P,I)}this.setIndex(p),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(T,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Cu(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Cu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Or={clone:Ws,merge:pn};var dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $h extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ns extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ka extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mp extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gp extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _p extends Cn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ea(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function vp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class qs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Mp extends qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=e,o=2*t-n;break;case Zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=e,l=2*n-t;break;case Zc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),T=x*x,g=T*x,m=-d*g+2*d*T-d*x,S=(1+d)*g+(-1.5-2*d)*T+(-.5+d)*x+1,C=(-1-p)*g+(1.5+p)*T+.5*x,E=p*g-p*T;for(let P=0;P!==o;++P)r[P]=m*a[f+P]+S*a[c+P]+C*a[l+P]+E*a[h+P];return r}}class yp extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),h=1-f;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*f;return r}}class Sp extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class bp extends qs{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){const x=(n-t)/(s-t),T=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*T+a[l+g]*x;return r}const d=o*2,p=e-1;for(let x=0;x!==o;++x){const T=a[c+x],g=a[l+x],m=p*d+x*2,S=h[m],C=h[m+1],E=e*d+x*2,P=f[E],I=f[E+1];let D=(n-t)/(s-t),M,L,v,w,A;for(let B=0;B<8;B++){M=D*D,L=M*D,v=1-D,w=v*v,A=w*v;const z=A*t+3*w*D*S+3*v*M*P+L*s-n;if(Math.abs(z)<1e-10)break;const K=3*w*(S-t)+6*v*D*(P-S)+3*M*(s-P);if(Math.abs(K)<1e-10)break;D=D-z/K,D=Math.max(0,Math.min(1,D))}r[x]=A*T+3*w*D*C+3*v*M*I+L*g}return r}}class Yn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new bp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){nt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hd(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let x=0;x!==n;++x){const T=t[h+x];if(T!==t[d+x]||T!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Ir;class Ys extends Yn{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Pr;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Jh extends Yn{constructor(e,t,n,s){super(e,t,n,s)}}Jh.prototype.ValueTypeName="color";class Br extends Yn{constructor(e,t,n,s){super(e,t,n,s)}}Br.prototype.ValueTypeName="number";class Tp extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let f=c+o;c!==f;c+=4)Si.slerpFlat(r,0,a,c-o,a,c,l);return r}}class zr extends Yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}}zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Yn{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Pr;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ja extends Yn{constructor(e,t,n,s){super(e,t,n,s)}}Ja.prototype.ValueTypeName="vector";class Ep{constructor(e="",t=-1,n=[],s=ed){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ap(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const f=xp(l);l=Pu(l,1,f),c=Pu(c,1,f),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Br(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],f=c.name.match(r);if(f&&f.length>1){const h=f[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return Ja;case"color":return Jh;case"quaternion":return zr;case"bool":case"boolean":return Ys;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ap(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wp(i.type);if(i.times===void 0){const t=[],n=[];vp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Iu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Iu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Iu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Rp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cp=new Rp;class is{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class Pp extends Error{constructor(e,t){super(e),this.response=t}}class wc extends is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=pi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,x=p!==0;let T=0;const g=new ReadableStream({start(m){S();function S(){h.read().then(({done:C,value:E})=>{if(C)m.close();else{T+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:T,total:p});for(let I=0,D=f.length;I<D;I++){const M=f[I];M.onProgress&&M.onProgress(P)}m.enqueue(E),S()}},C=>{m.error(C)})}}});return new Response(g)}else throw new Pp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{_i.add(`file:${e}`,c);const f=pi[e];delete pi[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const f=pi[e];if(f===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=new WeakMap;class Ip extends is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Es.get(a);h===void 0&&(h=[],Es.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Dr("img");function l(){f(),t&&t(this);const h=Es.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Es.delete(this),r.manager.itemEnd(e)}function c(h){f(),s&&s(h),_i.remove(`image:${e}`);const d=Es.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}Es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Lp extends is{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Fr,o=new wc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(f){s!==void 0?s(f):nt(f);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new Fr;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:On,e.wrapT=t.wrapT!==void 0?t.wrapT:On,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=jn),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Qh extends is{constructor(e){super(e)}load(e,t,n,s){const r=new jt,a=new Ip(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class so extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Np extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const zo=new ht,Lu=new V,Nu=new V;class Ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Nr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new V,Aa=new Si,Zn=new V;class jh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Aa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wa,Aa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new V,Du=new Je,Uu=new Je;class gn extends jh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Uu),t.subVectors(Uu,Du)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dp extends Ac{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xl extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Up extends Ac{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class ef extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kr extends jh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fp extends Ac{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tf extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Fp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ko=new WeakMap;class Op extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ko.has(a)===!0?(s&&s(ko.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){_i.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),ko.set(l,c),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ws=-90,As=1;class Bp extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ws,As,e,t);s.layers=this.layers,this.add(s);const r=new gn(ws,As,e,t);r.layers=this.layers,this.add(r);const a=new gn(ws,As,e,t);a.layers=this.layers,this.add(a);const o=new gn(ws,As,e,t);o.layers=this.layers,this.add(o);const l=new gn(ws,As,e,t);l.layers=this.layers,this.add(l);const c=new gn(ws,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class zp extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Hp(){this._document.hidden===!1&&this.reset()}const Rc="\\[\\]\\.:\\/",Gp=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Vp="[^"+Rc.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Xp=/(WCOD+)?/.source.replace("WCOD",Vp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Kp=new RegExp("^"+Wp+Xp+qp+Yp+"$"),Zp=["material","materials","bones","map"];class $p{constructor(e,t,n){const s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(e){const t=Kp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=$p;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hc=class Hc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Hc.prototype.isMatrix2=!0;let Fu=Hc;function Ou(i,e,t,n){const s=Jp(n);switch(t){case Nh:return i*e;case Zi:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case Dn:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case Dh:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(e,8)/4;case ul:case fl:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:case _l:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:case Xa:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(i){switch(i){case Rn:case Ch:return{byteLength:1,components:1};case Rr:case Ph:case on:return{byteLength:2,components:1};case hc:case fc:return{byteLength:2,components:4};case ii:case uc:case _n:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function nf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qp(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],T=h[p];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,h[d]=T)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const T=h[p];i.bufferSubData(c,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Qm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,B0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,_g=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Sg=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,bg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,Eg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:jp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:fm,bumpmap_pars_fragment:dm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:Mm,color_vertex:ym,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Em,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Nm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Km,lights_phong_pars_fragment:Zm,lights_physical_fragment:$m,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:e0,lightprobes_pars_fragment:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:h0,morphinstance_vertex:f0,morphcolor_vertex:d0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:M0,normal_vertex:y0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:k0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:K0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:j0,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:ag,distance_vert:og,distance_frag:lg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:hg,linedashed_frag:fg,meshbasic_vert:dg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:Mg,meshphong_vert:yg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:Tg,meshtoon_vert:Eg,meshtoon_frag:wg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Lg},Ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Qn={basic:{uniforms:pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:pn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:pn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:pn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:pn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:pn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:pn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:pn([Ue.common,Ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:pn([Ue.lights,Ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Qn.physical={uniforms:pn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ra={r:0,b:0,g:0},Ng=new ht,sf=new lt;sf.set(-1,0,0,0,1,0,0,0,1);function Dg(i,e,t,n,s,r){const a=new Ge(0);let o=s===!0?0:1,l,c,f=null,h=0,d=null;function p(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){const E=S.backgroundBlurriness>0;C=e.get(C,E)}return C}function x(S){let C=!1;const E=p(S);E===null?g(a,o):E&&E.isColor&&(g(E,1),C=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(S,C){const E=p(C);E&&(E.isCubeTexture||E.mapping===eo)?(c===void 0&&(c=new _t(new Ui(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ws(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sf),c.material.toneMapped=pt.getTransfer(E.colorSpace)!==St,(f!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new _t(new Vs(2,2),new fn({name:"BackgroundMaterial",uniforms:Ws(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=pt.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,C){S.getRGB(Ra,Zh(i)),t.buffers.color.setClear(Ra.r,Ra.g,Ra.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:x,addToRenderList:T,dispose:m}}function Ug(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,A,B,H,z){let K=!1;const O=h(w,H,B,A);r!==O&&(r=O,c(r.object)),K=p(w,H,B,z),K&&x(w,H,B,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(w,A,B,H),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function h(w,A,B,H){const z=H.wireframe===!0;let K=n[A.id];K===void 0&&(K={},n[A.id]=K);const O=w.isInstancedMesh===!0?w.id:0;let ee=K[O];ee===void 0&&(ee={},K[O]=ee);let j=ee[B.id];j===void 0&&(j={},ee[B.id]=j);let ce=j[z];return ce===void 0&&(ce=d(l()),j[z]=ce),ce}function d(w){const A=[],B=[],H=[];for(let z=0;z<t;z++)A[z]=0,B[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:H,object:w,attributes:{},index:null}}function p(w,A,B,H){const z=r.attributes,K=A.attributes;let O=0;const ee=B.getAttributes();for(const j in ee)if(ee[j].location>=0){const ge=z[j];let xe=K[j];if(xe===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function x(w,A,B,H){const z={},K=A.attributes;let O=0;const ee=B.getAttributes();for(const j in ee)if(ee[j].location>=0){let ge=K[j];ge===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor));const xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),z[j]=xe,O++}r.attributes=z,r.attributesNum=O,r.index=H}function T(){const w=r.newAttributes;for(let A=0,B=w.length;A<B;A++)w[A]=0}function g(w){m(w,0)}function m(w,A){const B=r.newAttributes,H=r.enabledAttributes,z=r.attributeDivisors;B[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),z[w]!==A&&(i.vertexAttribDivisor(w,A),z[w]=A)}function S(){const w=r.newAttributes,A=r.enabledAttributes;for(let B=0,H=A.length;B<H;B++)A[B]!==w[B]&&(i.disableVertexAttribArray(B),A[B]=0)}function C(w,A,B,H,z,K,O){O===!0?i.vertexAttribIPointer(w,A,B,z,K):i.vertexAttribPointer(w,A,B,H,z,K)}function E(w,A,B,H){T();const z=H.attributes,K=B.getAttributes(),O=A.defaultAttributeValues;for(const ee in K){const j=K[ee];if(j.location>=0){let ce=z[ee];if(ce===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const ge=ce.normalized,xe=ce.itemSize,Ze=e.get(ce);if(Ze===void 0)continue;const ot=Ze.buffer,te=Ze.type,k=Ze.bytesPerElement,J=te===i.INT||te===i.UNSIGNED_INT||ce.gpuType===uc;if(ce.isInterleavedBufferAttribute){const fe=ce.data,Ce=fe.stride,Ee=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let pe=0;pe<j.locationSize;pe++)m(j.location+pe,fe.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<j.locationSize;pe++)g(j.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let pe=0;pe<j.locationSize;pe++)C(j.location+pe,xe/j.locationSize,te,ge,Ce*k,(Ee+xe/j.locationSize*pe)*k,J)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)m(j.location+fe,ce.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<j.locationSize;fe++)g(j.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let fe=0;fe<j.locationSize;fe++)C(j.location+fe,xe/j.locationSize,te,ge,xe*k,xe/j.locationSize*fe*k,J)}}else if(O!==void 0){const ge=O[ee];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(j.location,ge);break;case 3:i.vertexAttrib3fv(j.location,ge);break;case 4:i.vertexAttrib4fv(j.location,ge);break;default:i.vertexAttrib1fv(j.location,ge)}}}}S()}function P(){L();for(const w in n){const A=n[w];for(const B in A){const H=A[B];for(const z in H){const K=H[z];for(const O in K)f(K[O].object),delete K[O];delete H[z]}}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const B in A){const H=A[B];for(const z in H){const K=H[z];for(const O in K)f(K[O].object),delete K[O];delete H[z]}}delete n[w.id]}function D(w){for(const A in n){const B=n[A];for(const H in B){const z=B[H];if(z[w.id]===void 0)continue;const K=z[w.id];for(const O in K)f(K[O].object),delete K[O];delete z[w.id]}}}function M(w){for(const A in n){const B=n[A],H=w.isInstancedMesh===!0?w.id:0,z=B[H];if(z!==void 0){for(const K in z){const O=z[K];for(const ee in O)f(O[ee].object),delete O[ee];delete z[K]}delete B[H],Object.keys(B).length===0&&delete n[A]}}}function L(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:g,disableUnusedAttributes:S}}function Fg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Og(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Jt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const M=D===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Rn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_n&&!M)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(et("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:E,maxSamples:P,samples:I}}function Bg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Wi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,T=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||x===null||x.length===0||r&&!g)r?f(null):c();else{const S=r?0:n,C=S*4;let E=m.clippingState||null;l.value=E,E=f(x,d,C,p);for(let P=0;P!==C;++P)E[P]=t[P];m.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,x){const T=h!==null?h.length:0;let g=null;if(T!==0){if(g=l.value,x!==!0||g===null){const m=p+T*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let C=0,E=p;C!==T;++C,E+=4)a.copy(h[C]).applyMatrix4(S,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}const Ni=4,Bu=[.125,.215,.35,.446,.526,.582],qi=20,zg=256,fr=new kr,zu=new Ge;let Ho=null,Go=0,Vo=0,Wo=!1;const kg=new V;class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=kg}=r;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Go,Vo),this._renderer.xr.enabled=Wo,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:on,format:Jt,colorSpace:qt,depthBuffer:!1},s=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Vg(r,e,t),this._ggxMaterial=Gg(r,e,t)}return s}_compileMaterial(e){const t=new _t(new sn,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,s,r){const l=new gn(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(zu),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Ui,new ln({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(zu),m=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[C],r.y,r.z)):E===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[C]));const P=this._cubeSize;Rs(s,E*P,C>2?P:0,P,P),h.setRenderTarget(s),m&&h.render(T,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ji||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:x}=this,T=this._sizeLods[n],g=3*T*(n>x-Ni?n-x+Ni:0),m=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Rs(r,g,m,3*T,2*T),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Rs(e,g,m,3*T,2*T),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),T=r/x,g=isFinite(r)?1+Math.floor(f*T):qi;g>qi&&et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const m=[];let S=0;for(let D=0;D<qi;++D){const M=D/T,L=Math.exp(-M*M/2);m.push(L),D===0?S+=L:D<g&&(S+=2*L)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-n;const E=this._sizeLods[s],P=3*E*(s>C-Ni?s-C+Ni:0),I=4*(this._cubeSize-E);Rs(t,P,I,3*E,2*E),l.setRenderTarget(t),l.render(h,fr)}}function Hg(i){const e=[],t=[],n=[];let s=i;const r=i-Ni+1+Bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=Bu[a-i+Ni-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,T=3,g=2,m=1,S=new Float32Array(T*x*p),C=new Float32Array(g*x*p),E=new Float32Array(m*x*p);for(let I=0;I<p;I++){const D=I%3*2/3-1,M=I>2?0:-1,L=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];S.set(L,T*x*I),C.set(d,g*x*I);const v=[I,I,I,I,I,I];E.set(v,m*x*I)}const P=new sn;P.setAttribute("position",new en(S,T)),P.setAttribute("uv",new en(C,g)),P.setAttribute("faceIndex",new en(E,m)),n.push(new _t(P,null)),s>Ni&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ku(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gg(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vg(i,e,t){const n=new Float32Array(qi),s=new V(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Hu(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Gu(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rf extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:ti});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ut),new Bp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Wg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Da||p===uo)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const T=new rf(x.height);return T.fromEquirectangularTexture(i,d),e.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,x=p===Da||p===uo,T=p===ji||p===ks;if(x||T){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ql(i)),g=x?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return x&&S&&S.height>0||T&&S&&l(S)?(n===null&&(n=new ql(i)),g=x?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,p){return p===Da?d.mapping=ji:p===uo&&(d.mapping=ks),d}function l(d){let p=0;const x=6;for(let T=0;T<x;T++)d[T]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Xg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function qg(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,x=h.attributes.position;let T=0;if(x===void 0)return;if(p!==null){const S=p.array;T=p.version;for(let C=0,E=S.length;C<E;C+=3){const P=S[C+0],I=S[C+1],D=S[C+2];d.push(P,I,I,D,D,P)}}else{const S=x.array;T=x.version;for(let C=0,E=S.length/3-1;C<E;C+=3){const P=C+0,I=C+1,D=C+2;d.push(P,I,I,D,D,P)}}const g=new(x.count>=65535?Hh:kh)(d,1);g.version=T;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Yg(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*a,p),t.update(d,n,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,p);let T=0;for(let g=0;g<p;g++)T+=d[g];t.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Kg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,e,t){const n=new WeakMap,s=new Rt;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),T===!0&&(E=2),g===!0&&(E=3);let P=o.attributes.position.count*E,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*I*4*h),M=new Oh(D,P,I,h);M.type=_n,M.needsUpdate=!0;const L=E*4;for(let w=0;w<h;w++){const A=m[w],B=S[w],H=C[w],z=P*I*4*w;for(let K=0;K<A.count;K++){const O=K*L;x===!0&&(s.fromBufferAttribute(A,K),D[z+O+0]=s.x,D[z+O+1]=s.y,D[z+O+2]=s.z,D[z+O+3]=0),T===!0&&(s.fromBufferAttribute(B,K),D[z+O+4]=s.x,D[z+O+5]=s.y,D[z+O+6]=s.z,D[z+O+7]=0),g===!0&&(s.fromBufferAttribute(H,K),D[z+O+8]=s.x,D[z+O+9]=s.y,D[z+O+10]=s.z,D[z+O+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:M,size:new Je(P,I)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const T=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",T),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $g(i,e,t,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return d}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Jg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[ja]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function Qg(i,e,t,n,s,r){const a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Gs(e,t):void 0}),o=new Sn(e,t,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new sn;l.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const c=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _t(l,c),h=new kr(-1,1,1,-1,0,1);let d=null,p=null,x=!1,T,g=null,m=[],S=!1;this.setSize=function(C,E){a.setSize(C,E),o.setSize(C,E);for(let P=0;P<m.length;P++){const I=m[P];I.setSize&&I.setSize(C,E)}},this.setEffects=function(C){m=C,S=m.length>0&&m[0].isRenderPass===!0;const E=a.width,P=a.height;for(let I=0;I<m.length;I++){const D=m[I];D.setSize&&D.setSize(E,P)}},this.begin=function(C,E){if(x||C.toneMapping===ni&&m.length===0)return!1;if(g=E,E!==null){const P=E.width,I=E.height;(a.width!==P||a.height!==I)&&this.setSize(P,I)}return S===!1&&C.setRenderTarget(a),T=C.toneMapping,C.toneMapping=ni,!0},this.hasRenderPass=function(){return S},this.end=function(C,E){C.toneMapping=T,x=!0;let P=a,I=o;for(let D=0;D<m.length;D++){const M=m[D];if(M.enabled!==!1&&(M.render(C,I,P,E),M.needsSwap!==!1)){const L=P;P=I,I=L}}if(d!==C.outputColorSpace||p!==C.toneMapping){d=C.outputColorSpace,p=C.toneMapping,c.defines={},pt.getTransfer(d)===St&&(c.defines.SRGB_TRANSFER="");const D=Jg[p];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(g),C.render(f,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const af=new jt,Yl=new Gs(1,1),of=new Oh,lf=new Od,cf=new Yh,Vu=[],Wu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function i_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Yu.set(n),i.uniformMatrix2fv(this.addr,!1,Yu),nn(t,n)}}function s_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),nn(t,n)}}function r_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),nn(t,n)}}function a_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function u_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function p_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=t.isReversedDepthBuffer()?_c:gc,r=Yl):r=af,t.setTexture2D(e||r,s)}function m_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lf,s)}function g_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cf,s)}function __(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||of,s)}function x_(i){switch(i){case 5126:return jg;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return h_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(i,e){i.uniform1fv(this.addr,e)}function M_(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function y_(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function b_(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T_(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E_(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function A_(i,e){i.uniform2iv(this.addr,e)}function R_(i,e){i.uniform3iv(this.addr,e)}function C_(i,e){i.uniform4iv(this.addr,e)}function P_(i,e){i.uniform1uiv(this.addr,e)}function I_(i,e){i.uniform2uiv(this.addr,e)}function L_(i,e){i.uniform3uiv(this.addr,e)}function N_(i,e){i.uniform4uiv(this.addr,e)}function D_(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yl:a=af;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function U_(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lf,r[a])}function F_(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||cf,r[a])}function O_(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||of,r[a])}function B_(i){switch(i){case 5126:return v_;case 35664:return M_;case 35665:return y_;case 35666:return S_;case 35674:return b_;case 35675:return T_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}class z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x_(t.type)}}class k_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}}class H_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function G_(i,e,t){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ku(t,c===void 0?new z_(o,i,e):new k_(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new H_(o),Ku(t,h)),t=h}}}class Ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);G_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const V_=37297;let W_=0;function X_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $u=new lt;function q_(i){pt._getMatrix($u,pt.workingColorSpace,i);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ju(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+X_(i.getShaderSource(e),o)}else return r}function Y_(i,e){const t=q_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const K_={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[ja]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function Z_(i,e){const t=K_[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new V;function $_(){pt.getLuminanceCoefficients(Ca);const i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Q_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function Qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(ex,nx)}const tx=new Map;function nx(i,e){let t=ft[e];if(t===void 0){const n=tx.get(e);if(n!==void 0)t=ft[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kl(t)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(ix,sx)}function sx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rx={[Na]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function ax(i){return rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ox={[ji]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function lx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ox[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cx={[ks]:"ENVMAP_MODE_REFRACTION"};function ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hx={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function fx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function px(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ax(t),c=lx(t),f=ux(t),h=fx(t),d=dx(t),p=J_(t),x=Q_(r),T=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ft.tonemapping_pars_fragment:"",t.toneMapping!==ni?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),$_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Kl(a),a=Qu(a,t),a=ju(a,t),o=Kl(o),o=Qu(o,t),o=ju(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const C=S+g+a,E=S+m+o,P=Zu(s,s.VERTEX_SHADER,C),I=Zu(s,s.FRAGMENT_SHADER,E);s.attachShader(T,P),s.attachShader(T,I),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function D(w){if(i.debug.checkShaderErrors){const A=s.getProgramInfoLog(T)||"",B=s.getShaderInfoLog(P)||"",H=s.getShaderInfoLog(I)||"",z=A.trim(),K=B.trim(),O=H.trim();let ee=!0,j=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,P,I);else{const ce=Ju(s,P,"vertex"),ge=Ju(s,I,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+ce+`
`+ge)}else z!==""?et("WebGLProgram: Program Info Log:",z):(K===""||O==="")&&(j=!1);j&&(w.diagnostics={runnable:ee,programLog:z,vertexShader:{log:K,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(P),s.deleteShader(I),M=new Ha(s,T),L=j_(s,T)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(T,V_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _x(e),t.set(e,n)),n}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function xx(i){return i===Dn||i===Xa||i===qa}function vx(i,e,t,n,s,r){const a=new Bh,o=new gx,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function T(M,L,v,w,A,B){const H=w.fog,z=A.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?w.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||K,O),j=ee&&ee.mapping===eo?ee.image.height:null,ce=p[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&et("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=ge!==void 0?ge.length:0;let Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let ot,te,k,J;if(ce){const Ke=Qn[ce];ot=Ke.vertexShader,te=Ke.fragmentShader}else{ot=M.vertexShader,te=M.fragmentShader;const Ke=o.getVertexShaderStage(M),Dt=o.getFragmentShaderStage(M);o.update(M,Ke,Dt),k=Ke.id,J=Dt.id}const fe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ee=A.isInstancedMesh===!0,pe=A.isBatchedMesh===!0,Te=!!M.map,Ve=!!M.matcap,He=!!ee,ze=!!M.aoMap,ke=!!M.lightMap,tt=!!M.bumpMap&&M.wireframe===!1,ut=!!M.normalMap,wt=!!M.displacementMap,Ot=!!M.emissiveMap,bt=!!M.metalnessMap,Nt=!!M.roughnessMap,W=M.anisotropy>0,Yt=M.clearcoat>0,dt=M.dispersion>0,F=M.iridescence>0,b=M.sheen>0,Z=M.transmission>0,ie=W&&!!M.anisotropyMap,ue=Yt&&!!M.clearcoatMap,oe=Yt&&!!M.clearcoatNormalMap,me=Yt&&!!M.clearcoatRoughnessMap,re=F&&!!M.iridescenceMap,ae=F&&!!M.iridescenceThicknessMap,Ae=b&&!!M.sheenColorMap,Ie=b&&!!M.sheenRoughnessMap,be=!!M.specularMap,Re=!!M.specularColorMap,We=!!M.specularIntensityMap,Ne=Z&&!!M.transmissionMap,De=Z&&!!M.thicknessMap,G=!!M.gradientMap,ne=!!M.alphaMap,he=M.alphaTest>0,Le=!!M.alphaHash,Fe=!!M.extensions;let ve=ni;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Qe={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:te,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pe,batchingColor:pe&&A._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&A.instanceColor!==null,instancingMorph:Ee&&A.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Te,matcap:Ve,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:j,aoMap:ze,lightMap:ke,bumpMap:tt,normalMap:ut,displacementMap:wt,emissiveMap:Ot,normalMapObjectSpace:ut&&M.normalMapType===id,normalMapTangentSpace:ut&&M.normalMapType===Lr,packedNormalMap:ut&&M.normalMapType===Lr&&xx(M.normalMap.format),metalnessMap:bt,roughnessMap:Nt,anisotropy:W,anisotropyMap:ie,clearcoat:Yt,clearcoatMap:ue,clearcoatNormalMap:oe,clearcoatRoughnessMap:me,dispersion:dt,iridescence:F,iridescenceMap:re,iridescenceThicknessMap:ae,sheen:b,sheenColorMap:Ae,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:Re,specularIntensityMap:We,transmission:Z,transmissionMap:Ne,thicknessMap:De,gradientMap:G,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:he,alphaHash:Le,combine:M.combine,mapUv:Te&&x(M.map.channel),aoMapUv:ze&&x(M.aoMap.channel),lightMapUv:ke&&x(M.lightMap.channel),bumpMapUv:tt&&x(M.bumpMap.channel),normalMapUv:ut&&x(M.normalMap.channel),displacementMapUv:wt&&x(M.displacementMap.channel),emissiveMapUv:Ot&&x(M.emissiveMap.channel),metalnessMapUv:bt&&x(M.metalnessMap.channel),roughnessMapUv:Nt&&x(M.roughnessMap.channel),anisotropyMapUv:ie&&x(M.anisotropyMap.channel),clearcoatMapUv:ue&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(M.sheenRoughnessMap.channel),specularMapUv:be&&x(M.specularMap.channel),specularColorMapUv:Re&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:Ne&&x(M.transmissionMap.channel),thicknessMapUv:De&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ut||W),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!z.attributes.uv&&(Te||ne),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&ut===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ze,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Ot&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function g(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const v in M.defines)L.push(v),L.push(M.defines[v]);return M.isRawShaderMaterial===!1&&(m(L,M),S(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function m(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function S(M,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function C(M){const L=p[M.type];let v;if(L){const w=Qn[L];v=Or.clone(w.uniforms)}else v=M.uniforms;return v}function E(M,L){let v=f.get(L);return v!==void 0?++v.usedTimes:(v=new px(i,L,M,s),c.push(v),f.set(L,v)),v}function P(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),f.delete(M.cacheKey),M.destroy()}}function I(M){o.remove(M)}function D(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:C,acquireProgram:E,releaseProgram:P,releaseShaderCache:I,programs:c,dispose:D}}function Mx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,T,g,m){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:m},i[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=x,S.materialVariant=a(d),S.groupOrder=T,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function l(d,p,x,T,g,m){const S=o(d,p,x,T,g,m);x.transmission>0?n.push(S):x.transparent===!0?s.push(S):t.push(S)}function c(d,p,x,T,g,m){const S=o(d,p,x,T,g,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function f(d,p,x){t.length>1&&t.sort(d||yx),n.length>1&&n.sort(p||nh),s.length>1&&s.sort(p||nh),x&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function Sx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ih,i.set(n,[a])):s>=r.length?(a=new ih,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ge};break;case"SpotLight":t={position:new V,direction:new V,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Tx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ex=0;function wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i){const e=new bx,t=Tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new ht,a=new ht;function o(c){let f=0,h=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,x=0,T=0,g=0,m=0,S=0,C=0,E=0,P=0,I=0,D=0;c.sort(wx);for(let L=0,v=c.length;L<v;L++){const w=c[L],A=w.color,B=w.intensity,H=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Dn?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=A.r*B,h+=A.g*B,d+=A.b*B;else if(w.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(w.sh.coefficients[K],B);D++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,ee=t.get(w);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=w.shadow.matrix,S++}n.directional[p]=K,p++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(A).multiplyScalar(B),K.distance=H,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,n.spot[T]=K;const O=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,O.updateMatrices(w),w.castShadow&&I++),n.spotLightMatrix[T]=O.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.spotShadow[T]=ee,n.spotShadowMap[T]=z,E++}T++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy(A).multiplyScalar(B),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=K,g++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){const O=w.shadow,ee=t.get(w);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,n.pointShadow[x]=ee,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=w.shadow.matrix,C++}n.point[x]=K,x++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(B),K.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[m]=K,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==p||M.pointLength!==x||M.spotLength!==T||M.rectAreaLength!==g||M.hemiLength!==m||M.numDirectionalShadows!==S||M.numPointShadows!==C||M.numSpotShadows!==E||M.numSpotMaps!==P||M.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=T,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=E+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,M.directionalLength=p,M.pointLength=x,M.spotLength=T,M.rectAreaLength=g,M.hemiLength=m,M.numDirectionalShadows=S,M.numPointShadows=C,M.numSpotShadows=E,M.numSpotMaps=P,M.numLightProbes=D,n.version=Ex++)}function l(c,f){let h=0,d=0,p=0,x=0,T=0;const g=f.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const C=c[m];if(C.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),h++}else if(C.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(C.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),d++}else if(C.isHemisphereLight){const E=n.hemi[T];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:n}}function sh(i){const e=new Ax(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sh(i),e.set(s,[o])):r>=a.length?(o=new sh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`,Ix=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Lx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],rh=new ht,dr=new V,qo=new V;function Nx(i,e,t){let n=new Sc;const s=new Je,r=new Je,a=new Rt,o=new mp,l=new gp,c={},f=t.maxTextureSize,h={[vi]:yn,[yn]:vi,[An]:An},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new sn;x.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _t(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let m=this.type;this.render=function(I,D,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===wh&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);const L=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ti),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const B=m!==this.type;B&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(z=>z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,z=I.length;H<z;H++){const K=I[H],O=K.shadow;if(O===void 0){et("WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ee=O.getFrameExtents();s.multiply(ee),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ee.x),s.x=r.x*ee.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ee.y),s.y=r.y*ee.y,O.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=j,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===vr){if(K.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Sn(s.x,s.y,{format:Dn,type:on,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),O.map.texture.name=K.name+".shadowMap",O.map.depthTexture=new Gs(s.x,s.y,_n),O.map.depthTexture.name=K.name+".shadowMapDepth",O.map.depthTexture.format=Mi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt}else K.isPointLight?(O.map=new rf(s.x),O.map.depthTexture=new hp(s.x,ii)):(O.map=new Sn(s.x,s.y),O.map.depthTexture=new Gs(s.x,s.y,ii)),O.map.depthTexture.name=K.name+".shadowMap",O.map.depthTexture.format=Mi,this.type===Na?(O.map.depthTexture.compareFunction=j?_c:gc,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ce;ge++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(O.map),i.clear());const xe=O.getViewport(ge);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),A.viewport(a)}if(K.isPointLight){const xe=O.camera,Ze=O.matrix,ot=K.distance||xe.far;ot!==xe.far&&(xe.far=ot,xe.updateProjectionMatrix()),dr.setFromMatrixPosition(K.matrixWorld),xe.position.copy(dr),qo.copy(xe.position),qo.add(Ix[ge]),xe.up.copy(Lx[ge]),xe.lookAt(qo),xe.updateMatrixWorld(),Ze.makeTranslation(-dr.x,-dr.y,-dr.z),rh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(rh,xe.coordinateSystem,xe.reversedDepth)}else O.updateMatrices(K);n=O.getFrustum(),E(D,M,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===vr&&S(O,M),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(L,v,w)};function S(I,D){const M=e.update(T);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sn(s.x,s.y,{format:Dn,type:on})),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,M,d,T,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,M,p,T,null)}function C(I,D,M,L){let v=null;const w=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)v=w;else if(v=M.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const A=v.uuid,B=D.uuid;let H=c[A];H===void 0&&(H={},c[A]=H);let z=H[B];z===void 0&&(z=v.clone(),H[B]=z,D.addEventListener("dispose",P)),v=z}if(v.visible=D.visible,v.wireframe=D.wireframe,L===vr?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:h[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,M.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const A=i.properties.get(v);A.light=M}return v}function E(I,D,M,L,v){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===vr)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);const B=e.update(I),H=I.material;if(Array.isArray(H)){const z=B.groups;for(let K=0,O=z.length;K<O;K++){const ee=z[K],j=H[ee.materialIndex];if(j&&j.visible){const ce=C(I,j,L,v);I.onBeforeShadow(i,I,D,M,B,ce,ee),i.renderBufferDirect(M,null,B,ce,I,ee),I.onAfterShadow(i,I,D,M,B,ce,ee)}}}else if(H.visible){const z=C(I,H,L,v);I.onBeforeShadow(i,I,D,M,B,z,null),i.renderBufferDirect(M,null,B,z,I,null),I.onAfterShadow(i,I,D,M,B,z,null)}}const A=I.children;for(let B=0,H=A.length;B<H;B++)E(A[B],D,M,L,v)}function P(I){I.target.removeEventListener("dispose",P);for(const M in c){const L=c[M],v=I.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}function Dx(i,e){function t(){let G=!1;const ne=new Rt;let he=null;const Le=new Rt(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!G&&(i.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,ve,Qe,Ke,Dt){Dt===!0&&(Fe*=Ke,ve*=Ke,Qe*=Ke),ne.set(Fe,ve,Qe,Ke),Le.equals(ne)===!1&&(i.clearColor(Fe,ve,Qe,Ke),Le.copy(ne))},reset:function(){G=!1,he=null,Le.set(-1,0,0,0)}}}function n(){let G=!1,ne=!1,he=null,Le=null,Fe=null;return{setReversed:function(ve){if(ne!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),ne=ve;const Ke=Fe;Fe=null,this.setClear(Ke)}},getReversed:function(){return ne},setTest:function(ve){ve?fe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ve){he!==ve&&!G&&(i.depthMask(ve),he=ve)},setFunc:function(ve){if(ne&&(ve=pd[ve]),Le!==ve){switch(ve){case il:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ve}},setLocked:function(ve){G=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,ne&&(ve=1-ve),i.clearDepth(ve))},reset:function(){G=!1,he=null,Le=null,Fe=null,ne=!1}}}function s(){let G=!1,ne=null,he=null,Le=null,Fe=null,ve=null,Qe=null,Ke=null,Dt=null;return{setTest:function(At){G||(At?fe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(At){ne!==At&&!G&&(i.stencilMask(At),ne=At)},setFunc:function(At,Pn,In){(he!==At||Le!==Pn||Fe!==In)&&(i.stencilFunc(At,Pn,In),he=At,Le=Pn,Fe=In)},setOp:function(At,Pn,In){(ve!==At||Qe!==Pn||Ke!==In)&&(i.stencilOp(At,Pn,In),ve=At,Qe=Pn,Ke=In)},setLocked:function(At){G=At},setClear:function(At){Dt!==At&&(i.clearStencil(At),Dt=At)},reset:function(){G=!1,ne=null,he=null,Le=null,Fe=null,ve=null,Qe=null,Ke=null,Dt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,x=[],T=null,g=!1,m=null,S=null,C=null,E=null,P=null,I=null,D=null,M=new Ge(0,0,0),L=0,v=!1,w=null,A=null,B=null,H=null,z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,ee=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=ee>=2);let ce=null,ge={};const xe=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),ot=new Rt().fromArray(xe),te=new Rt().fromArray(Ze);function k(G,ne,he,Le){const Fe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(G,ve),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<he;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(ne+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return ve}const J={};J[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(zs),tt(!1),ut(Gc),fe(i.CULL_FACE),ze(ti);function fe(G){f[G]!==!0&&(i.enable(G),f[G]=!0)}function Ce(G){f[G]!==!1&&(i.disable(G),f[G]=!1)}function Ee(G,ne){return d[G]!==ne?(i.bindFramebuffer(G,ne),d[G]=ne,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function pe(G,ne){let he=x,Le=!1;if(G){he=p.get(ne),he===void 0&&(he=[],p.set(ne,he));const Fe=G.textures;if(he.length!==Fe.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Qe=Fe.length;ve<Qe;ve++)he[ve]=i.COLOR_ATTACHMENT0+ve;he.length=Fe.length,Le=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Le=!0);Le&&i.drawBuffers(he)}function Te(G){return T!==G?(i.useProgram(G),T=G,!0):!1}const Ve={[Xi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};Ve[Ff]=i.MIN,Ve[Of]=i.MAX;const He={[Bf]:i.ZERO,[zf]:i.ONE,[kf]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[qf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[nl]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[Vf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(G,ne,he,Le,Fe,ve,Qe,Ke,Dt,At){if(G===ti){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),G!==Nf){if(G!==m||At!==v){if((S!==Xi||P!==Xi)&&(i.blendEquation(i.FUNC_ADD),S=Xi,P=Xi),At)switch(G){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",G);break}else switch(G){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",G);break}C=null,E=null,I=null,D=null,M.set(0,0,0),L=0,m=G,v=At}return}Fe=Fe||ne,ve=ve||he,Qe=Qe||Le,(ne!==S||Fe!==P)&&(i.blendEquationSeparate(Ve[ne],Ve[Fe]),S=ne,P=Fe),(he!==C||Le!==E||ve!==I||Qe!==D)&&(i.blendFuncSeparate(He[he],He[Le],He[ve],He[Qe]),C=he,E=Le,I=ve,D=Qe),(Ke.equals(M)===!1||Dt!==L)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Dt),M.copy(Ke),L=Dt),m=G,v=!1}function ke(G,ne){G.side===An?Ce(i.CULL_FACE):fe(i.CULL_FACE);let he=G.side===yn;ne&&(he=!he),tt(he),G.blending===Ns&&G.transparent===!1?ze(ti):ze(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Le=G.stencilWrite;o.setTest(Le),Le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ot(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function ut(G){G!==If?(fe(i.CULL_FACE),G!==A&&(G===Gc?i.cullFace(i.BACK):G===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),A=G}function wt(G){G!==B&&(O&&i.lineWidth(G),B=G)}function Ot(G,ne,he){G?(fe(i.POLYGON_OFFSET_FILL),(H!==ne||z!==he)&&(H=ne,z=he,a.getReversed()&&(ne=-ne),i.polygonOffset(ne,he))):Ce(i.POLYGON_OFFSET_FILL)}function bt(G){G?fe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Nt(G){G===void 0&&(G=i.TEXTURE0+K-1),ce!==G&&(i.activeTexture(G),ce=G)}function W(G,ne,he){he===void 0&&(ce===null?he=i.TEXTURE0+K-1:he=ce);let Le=ge[he];Le===void 0&&(Le={type:void 0,texture:void 0},ge[he]=Le),(Le.type!==G||Le.texture!==ne)&&(ce!==he&&(i.activeTexture(he),ce=he),i.bindTexture(G,ne||J[G]),Le.type=G,Le.texture=ne)}function Yt(){const G=ge[ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function b(){try{i.texSubImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function Z(){try{i.texSubImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function ue(){try{i.compressedTexSubImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function oe(){try{i.texStorage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function me(){try{i.texStorage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function re(){try{i.texImage2D(...arguments)}catch(G){nt("WebGLState:",G)}}function ae(){try{i.texImage3D(...arguments)}catch(G){nt("WebGLState:",G)}}function Ae(G){return h[G]!==void 0?h[G]:i.getParameter(G)}function Ie(G,ne){h[G]!==ne&&(i.pixelStorei(G,ne),h[G]=ne)}function be(G){ot.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ot.copy(G))}function Re(G){te.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function We(G,ne){let he=c.get(ne);he===void 0&&(he=new WeakMap,c.set(ne,he));let Le=he.get(G);Le===void 0&&(Le=i.getUniformBlockIndex(ne,G.name),he.set(G,Le))}function Ne(G,ne){const Le=c.get(ne).get(G);l.get(ne)!==Le&&(i.uniformBlockBinding(ne,Le,G.__bindingPointIndex),l.set(ne,Le))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},ce=null,ge={},d={},p=new WeakMap,x=[],T=null,g=!1,m=null,S=null,C=null,E=null,P=null,I=null,D=null,M=new Ge(0,0,0),L=0,v=!1,w=null,A=null,B=null,H=null,z=null,ot.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Ce,bindFramebuffer:Ee,drawBuffers:pe,useProgram:Te,setBlending:ze,setMaterial:ke,setFlipSided:tt,setCullFace:ut,setLineWidth:wt,setPolygonOffset:Ot,setScissorTest:bt,activeTexture:Nt,bindTexture:W,unbindTexture:Yt,compressedTexImage2D:dt,compressedTexImage3D:F,texImage2D:re,texImage3D:ae,pixelStorei:Ie,getParameter:Ae,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:me,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:ie,compressedTexSubImage3D:ue,scissor:be,viewport:Re,reset:De}}function Ux(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,b){return x?new OffscreenCanvas(F,b):Dr("canvas")}function g(F,b,Z){let ie=1;const ue=dt(F);if((ue.width>Z||ue.height>Z)&&(ie=Z/Math.max(ue.width,ue.height)),ie<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const oe=Math.floor(ie*ue.width),me=Math.floor(ie*ue.height);d===void 0&&(d=T(oe,me));const re=b?T(oe,me):d;return re.width=oe,re.height=me,re.getContext("2d").drawImage(F,0,0,oe,me),et("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+oe+"x"+me+")."),re}else return"data"in F&&et("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),F;return F}function m(F){return F.generateMipmaps}function S(F){i.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(F,b,Z,ie,ue,oe=!1){if(F!==null){if(i[F]!==void 0)return i[F];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me;ie&&(me=e.get("EXT_texture_norm16"),me||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=b;if(b===i.RED&&(Z===i.FLOAT&&(re=i.R32F),Z===i.HALF_FLOAT&&(re=i.R16F),Z===i.UNSIGNED_BYTE&&(re=i.R8),Z===i.UNSIGNED_SHORT&&me&&(re=me.R16_EXT),Z===i.SHORT&&me&&(re=me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(re=i.R8UI),Z===i.UNSIGNED_SHORT&&(re=i.R16UI),Z===i.UNSIGNED_INT&&(re=i.R32UI),Z===i.BYTE&&(re=i.R8I),Z===i.SHORT&&(re=i.R16I),Z===i.INT&&(re=i.R32I)),b===i.RG&&(Z===i.FLOAT&&(re=i.RG32F),Z===i.HALF_FLOAT&&(re=i.RG16F),Z===i.UNSIGNED_BYTE&&(re=i.RG8),Z===i.UNSIGNED_SHORT&&me&&(re=me.RG16_EXT),Z===i.SHORT&&me&&(re=me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(re=i.RG8UI),Z===i.UNSIGNED_SHORT&&(re=i.RG16UI),Z===i.UNSIGNED_INT&&(re=i.RG32UI),Z===i.BYTE&&(re=i.RG8I),Z===i.SHORT&&(re=i.RG16I),Z===i.INT&&(re=i.RG32I)),b===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(re=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(re=i.RGB16UI),Z===i.UNSIGNED_INT&&(re=i.RGB32UI),Z===i.BYTE&&(re=i.RGB8I),Z===i.SHORT&&(re=i.RGB16I),Z===i.INT&&(re=i.RGB32I)),b===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),Z===i.UNSIGNED_INT&&(re=i.RGBA32UI),Z===i.BYTE&&(re=i.RGBA8I),Z===i.SHORT&&(re=i.RGBA16I),Z===i.INT&&(re=i.RGBA32I)),b===i.RGB&&(Z===i.UNSIGNED_SHORT&&me&&(re=me.RGB16_EXT),Z===i.SHORT&&me&&(re=me.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),b===i.RGBA){const ae=oe?Ya:pt.getTransfer(ue);Z===i.FLOAT&&(re=i.RGBA32F),Z===i.HALF_FLOAT&&(re=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(re=ae===St?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&me&&(re=me.RGBA16_EXT),Z===i.SHORT&&me&&(re=me.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(F,b){let Z;return F?b===null||b===ii||b===Cr?Z=i.DEPTH24_STENCIL8:b===_n?Z=i.DEPTH32F_STENCIL8:b===Rr&&(Z=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ii||b===Cr?Z=i.DEPTH_COMPONENT24:b===_n?Z=i.DEPTH_COMPONENT32F:b===Rr&&(Z=i.DEPTH_COMPONENT16),Z}function I(F,b){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Qt&&F.minFilter!==Ut?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function D(F){const b=F.target;b.removeEventListener("dispose",D),L(b),b.isVideoTexture&&f.delete(b),b.isHTMLTexture&&h.delete(b)}function M(F){const b=F.target;b.removeEventListener("dispose",M),w(b)}function L(F){const b=n.get(F);if(b.__webglInit===void 0)return;const Z=F.source,ie=p.get(Z);if(ie){const ue=ie[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&v(F),Object.keys(ie).length===0&&p.delete(Z)}n.remove(F)}function v(F){const b=n.get(F);i.deleteTexture(b.__webglTexture);const Z=F.source,ie=p.get(Z);delete ie[b.__cacheKey],a.memory.textures--}function w(F){const b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let ue=0;ue<b.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=F.textures;for(let ie=0,ue=Z.length;ie<ue;ie++){const oe=n.get(Z[ie]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(Z[ie])}n.remove(F)}let A=0;function B(){A=0}function H(){return A}function z(F){A=F}function K(){const F=A;return F>=s.maxTextures&&et("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),A+=1,F}function O(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function ee(F,b){const Z=n.get(F);if(F.isVideoTexture&&W(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){const ie=F.image;if(ie===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Z,F,b);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+b)}function j(F,b){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Ce(Z,F,b);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+b)}function ce(F,b){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Ce(Z,F,b);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+b)}function ge(F,b){const Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){Ee(Z,F,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+b)}const xe={[Di]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},Ze={[Qt]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ot={[sd]:i.NEVER,[cd]:i.ALWAYS,[rd]:i.LESS,[gc]:i.LEQUAL,[ad]:i.EQUAL,[_c]:i.GEQUAL,[od]:i.GREATER,[ld]:i.NOTEQUAL};function te(F,b){if(b.type===_n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ut||b.magFilter===Ua||b.magFilter===Mr||b.magFilter===jn||b.minFilter===Ut||b.minFilter===Ua||b.minFilter===Mr||b.minFilter===jn)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,xe[b.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,xe[b.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,xe[b.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ze[b.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ze[b.minFilter]),b.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==Mr&&b.minFilter!==jn||b.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function k(F,b){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",D));const ie=b.source;let ue=p.get(ie);ue===void 0&&(ue={},p.set(ie,ue));const oe=O(b);if(oe!==F.__cacheKey){ue[oe]===void 0&&(ue[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ue[oe].usedTimes++;const me=ue[F.__cacheKey];me!==void 0&&(ue[F.__cacheKey].usedTimes--,me.usedTimes===0&&v(b)),F.__cacheKey=oe,F.__webglTexture=ue[oe].texture}return Z}function J(F,b,Z){return Math.floor(Math.floor(F/Z)/b)}function fe(F,b,Z,ie){const oe=F.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,Z,ie,b.data);else{oe.sort((Ie,be)=>Ie.start-be.start);let me=0;for(let Ie=1;Ie<oe.length;Ie++){const be=oe[me],Re=oe[Ie],We=be.start+be.count,Ne=J(Re.start,b.width,4),De=J(be.start,b.width,4);Re.start<=We+1&&Ne===De&&J(Re.start+Re.count-1,b.width,4)===Ne?be.count=Math.max(be.count,Re.start+Re.count-be.start):(++me,oe[me]=Re)}oe.length=me+1;const re=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ie=0,be=oe.length;Ie<be;Ie++){const Re=oe[Ie],We=Math.floor(Re.start/4),Ne=Math.ceil(Re.count/4),De=We%b.width,G=Math.floor(We/b.width),ne=Ne,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,De,G,ne,he,Z,ie,b.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Ce(F,b,Z){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);const ue=k(F,b),oe=b.source;t.bindTexture(ie,F.__webglTexture,i.TEXTURE0+Z);const me=n.get(oe);if(oe.version!==me.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const he=pt.getPrimaries(pt.workingColorSpace),Le=b.colorSpace===Li?null:pt.getPrimaries(b.colorSpace),Fe=b.colorSpace===Li||he===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ae=g(b.image,!1,s.maxTextureSize);ae=Yt(b,ae);const Ae=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type);let be=E(b.internalFormat,Ae,Ie,b.normalized,b.colorSpace,b.isVideoTexture);te(ie,b);let Re;const We=b.mipmaps,Ne=b.isVideoTexture!==!0,De=me.__version===void 0||ue===!0,G=oe.dataReady,ne=I(b,ae);if(b.isDepthTexture)be=P(b.format===Ki,b.type),De&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,be,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,be,ae.width,ae.height,0,Ae,Ie,null));else if(b.isDataTexture)if(We.length>0){Ne&&De&&t.texStorage2D(i.TEXTURE_2D,ne,be,We[0].width,We[0].height);for(let he=0,Le=We.length;he<Le;he++)Re=We[he],Ne?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Re.width,Re.height,Ae,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,he,be,Re.width,Re.height,0,Ae,Ie,Re.data);b.generateMipmaps=!1}else Ne?(De&&t.texStorage2D(i.TEXTURE_2D,ne,be,ae.width,ae.height),G&&fe(b,ae,Ae,Ie)):t.texImage2D(i.TEXTURE_2D,0,be,ae.width,ae.height,0,Ae,Ie,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ne&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,be,We[0].width,We[0].height,ae.depth);for(let he=0,Le=We.length;he<Le;he++)if(Re=We[he],b.format!==Jt)if(Ae!==null)if(Ne){if(G)if(b.layerUpdates.size>0){const Fe=Ou(Re.width,Re.height,b.format,b.type);for(const ve of b.layerUpdates){const Qe=Re.data.subarray(ve*Fe/Re.data.BYTES_PER_ELEMENT,(ve+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ve,Re.width,Re.height,1,Ae,Qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ae.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,be,Re.width,Re.height,ae.depth,0,Re.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ae.depth,Ae,Ie,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,be,Re.width,Re.height,ae.depth,0,Ae,Ie,Re.data)}else{Ne&&De&&t.texStorage2D(i.TEXTURE_2D,ne,be,We[0].width,We[0].height);for(let he=0,Le=We.length;he<Le;he++)Re=We[he],b.format!==Jt?Ae!==null?Ne?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,he,be,Re.width,Re.height,0,Re.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Re.width,Re.height,Ae,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,he,be,Re.width,Re.height,0,Ae,Ie,Re.data)}else if(b.isDataArrayTexture)if(Ne){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,be,ae.width,ae.height,ae.depth),G)if(b.layerUpdates.size>0){const he=Ou(ae.width,ae.height,b.format,b.type);for(const Le of b.layerUpdates){const Fe=ae.data.subarray(Le*he/ae.data.BYTES_PER_ELEMENT,(Le+1)*he/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,ae.width,ae.height,1,Ae,Ie,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ie,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,Ae,Ie,ae.data);else if(b.isData3DTexture)Ne?(De&&t.texStorage3D(i.TEXTURE_3D,ne,be,ae.width,ae.height,ae.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ie,ae.data)):t.texImage3D(i.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,Ae,Ie,ae.data);else if(b.isFramebufferTexture){if(De)if(Ne)t.texStorage2D(i.TEXTURE_2D,ne,be,ae.width,ae.height);else{let he=ae.width,Le=ae.height;for(let Fe=0;Fe<ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,be,he,Le,0,Ae,Ie,null),he>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ae.parentNode!==he){he.appendChild(ae),h.add(b),he.onpaint=Le=>{const Fe=Le.changedElements;for(const ve of h)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{const Fe=i.RGBA,ve=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,ve,Qe,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ne&&De){const he=dt(We[0]);t.texStorage2D(i.TEXTURE_2D,ne,be,he.width,he.height)}for(let he=0,Le=We.length;he<Le;he++)Re=We[he],Ne?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ae,Ie,Re):t.texImage2D(i.TEXTURE_2D,he,be,Ae,Ie,Re);b.generateMipmaps=!1}else if(Ne){if(De){const he=dt(ae);t.texStorage2D(i.TEXTURE_2D,ne,be,he.width,he.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ie,ae)}else t.texImage2D(i.TEXTURE_2D,0,be,Ae,Ie,ae);m(b)&&S(ie),me.__version=oe.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Ee(F,b,Z){if(b.image.length!==6)return;const ie=k(F,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);const oe=n.get(ue);if(ue.version!==oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+Z);const me=pt.getPrimaries(pt.workingColorSpace),re=b.colorSpace===Li?null:pt.getPrimaries(b.colorSpace),ae=b.colorSpace===Li||me===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,Ie=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ve=0;ve<6;ve++)!Ae&&!Ie?be[ve]=g(b.image[ve],!0,s.maxCubemapSize):be[ve]=Ie?b.image[ve].image:b.image[ve],be[ve]=Yt(b,be[ve]);const Re=be[0],We=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),De=E(b.internalFormat,We,Ne,b.normalized,b.colorSpace),G=b.isVideoTexture!==!0,ne=oe.__version===void 0||ie===!0,he=ue.dataReady;let Le=I(b,Re);te(i.TEXTURE_CUBE_MAP,b);let Fe;if(Ae){G&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,De,Re.width,Re.height);for(let ve=0;ve<6;ve++){Fe=be[ve].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const Ke=Fe[Qe];b.format!==Jt?We!==null?G?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Ke.width,Ke.height,We,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,De,Ke.width,Ke.height,0,Ke.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Ke.width,Ke.height,We,Ne,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,De,Ke.width,Ke.height,0,We,Ne,Ke.data)}}}else{if(Fe=b.mipmaps,G&&ne){Fe.length>0&&Le++;const ve=dt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,De,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ie){G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be[ve].width,be[ve].height,We,Ne,be[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,De,be[ve].width,be[ve].height,0,We,Ne,be[ve].data);for(let Qe=0;Qe<Fe.length;Qe++){const Dt=Fe[Qe].image[ve].image;G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Dt.width,Dt.height,We,Ne,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,De,Dt.width,Dt.height,0,We,Ne,Dt.data)}}else{G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,We,Ne,be[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,De,We,Ne,be[ve]);for(let Qe=0;Qe<Fe.length;Qe++){const Ke=Fe[Qe];G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,We,Ne,Ke.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,De,We,Ne,Ke.image[ve])}}}m(b)&&S(i.TEXTURE_CUBE_MAP),oe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function pe(F,b,Z,ie,ue,oe){const me=r.convert(Z.format,Z.colorSpace),re=r.convert(Z.type),ae=E(Z.internalFormat,me,re,Z.normalized,Z.colorSpace),Ae=n.get(b),Ie=n.get(Z);if(Ie.__renderTarget=b,!Ae.__hasExternalTextures){const be=Math.max(1,b.width>>oe),Re=Math.max(1,b.height>>oe);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,oe,ae,be,Re,b.depth,0,me,re,null):t.texImage2D(ue,oe,ae,be,Re,0,me,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ue,Ie.__webglTexture,0,bt(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ue,Ie.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(F,b,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),b.depthBuffer){const ie=b.depthTexture,ue=ie&&ie.isDepthTexture?ie.type:null,oe=P(b.stencilBuffer,ue),me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(b),oe,b.width,b.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(b),oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,F)}else{const ie=b.textures;for(let ue=0;ue<ie.length;ue++){const oe=ie[ue],me=r.convert(oe.format,oe.colorSpace),re=r.convert(oe.type),ae=E(oe.internalFormat,me,re,oe.normalized,oe.colorSpace);Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(b),ae,b.width,b.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(b),ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(F,b,Z){const ie=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=n.get(b.depthTexture);if(ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),ue.__webglTexture===void 0){ue.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),te(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ae=r.convert(b.depthTexture.format),Ie=r.convert(b.depthTexture.type);let be;b.depthTexture.format===Mi?be=i.DEPTH_COMPONENT24:b.depthTexture.format===Ki&&(be=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,b.width,b.height,0,Ae,Ie,null)}}else ee(b.depthTexture,0);const oe=ue.__webglTexture,me=bt(b),re=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ae=b.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Mi)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,oe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,oe,0);else if(b.depthTexture.format===Ki)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,oe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(F){const b=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const ie=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",ue)};ie.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=ie}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let ie=0;ie<6;ie++)Ve(b.__webglFramebuffer[ie],F,ie);else{const ie=F.texture.mipmaps;ie&&ie.length>0?Ve(b.__webglFramebuffer[0],F,0):Ve(b.__webglFramebuffer,F,0)}else if(Z){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),Te(b.__webglDepthbuffer[ie],F,!1);else{const ue=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,oe)}}else{const ie=F.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Te(b.__webglDepthbuffer,F,!1);else{const ue=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(F,b,Z){const ie=n.get(F);b!==void 0&&pe(ie.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&He(F)}function ke(F){const b=F.texture,Z=n.get(F),ie=n.get(b);F.addEventListener("dispose",M);const ue=F.textures,oe=F.isWebGLCubeRenderTarget===!0,me=ue.length>1;if(me||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,a.memory.textures++),oe){Z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[re]=[];for(let ae=0;ae<b.mipmaps.length;ae++)Z.__webglFramebuffer[re][ae]=i.createFramebuffer()}else Z.__webglFramebuffer[re]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)Z.__webglFramebuffer[re]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(me)for(let re=0,ae=ue.length;re<ae;re++){const Ae=n.get(ue[re]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Nt(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let re=0;re<ue.length;re++){const ae=ue[re];Z.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[re]);const Ae=r.convert(ae.format,ae.colorSpace),Ie=r.convert(ae.type),be=E(ae.internalFormat,Ae,Ie,ae.normalized,ae.colorSpace,F.isXRRenderTarget===!0),Re=bt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,be,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,Z.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),te(i.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)pe(Z.__webglFramebuffer[re][ae],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else pe(Z.__webglFramebuffer[re],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let re=0,ae=ue.length;re<ae;re++){const Ae=ue[re],Ie=n.get(Ae);let be=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(be=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Ie.__webglTexture),te(be,Ae),pe(Z.__webglFramebuffer,F,Ae,i.COLOR_ATTACHMENT0+re,be,0),m(Ae)&&S(be)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(re=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),te(re,b),b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)pe(Z.__webglFramebuffer[ae],F,b,i.COLOR_ATTACHMENT0,re,ae);else pe(Z.__webglFramebuffer,F,b,i.COLOR_ATTACHMENT0,re,0);m(b)&&S(re),t.unbindTexture()}F.depthBuffer&&He(F)}function tt(F){const b=F.textures;for(let Z=0,ie=b.length;Z<ie;Z++){const ue=b[Z];if(m(ue)){const oe=C(F),me=n.get(ue).__webglTexture;t.bindTexture(oe,me),S(oe),t.unbindTexture()}}}const ut=[],wt=[];function Ot(F){if(F.samples>0){if(Nt(F)===!1){const b=F.textures,Z=F.width,ie=F.height;let ue=i.COLOR_BUFFER_BIT;const oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(F),re=b.length>1;if(re)for(let Ae=0;Ae<b.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ae=F.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const Ie=n.get(b[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,ue,i.NEAREST),l===!0&&(ut.length=0,wt.length=0,ut.push(i.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ut.push(oe),wt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<b.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const Ie=n.get(b[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const b=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function bt(F){return Math.min(s.maxSamples,F.samples)}function Nt(F){const b=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(F){const b=a.render.frame;f.get(F)!==b&&(f.set(F,b),F.update())}function Yt(F,b){const Z=F.colorSpace,ie=F.format,ue=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==qt&&Z!==Li&&(pt.getTransfer(Z)===St?(ie!==Jt||ue!==Rn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",Z)),b}function dt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=ge,this.rebindTextures=ze,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fx(i,e){function t(n,s=Li){let r;const a=pt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Nh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===Jt)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Zi)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Dn)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===za)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===hl||n===fl||n===dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===Xa||n===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return r.COMPRESSED_RG11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ml||n===yl||n===Sl||n===bl||n===Tl||n===El||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ml)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ul||n===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Bl||n===qa||n===zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kx extends ts{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,x=null;const T=typeof XRWebGLBinding<"u",g=new zx,m={},S=t.getContextAttributes();let C=null,E=null;const P=[],I=[],D=new Je;let M=null;const L=new gn;L.viewport=new Rt;const v=new gn;v.viewport=new Rt;const w=[L,v],A=new zp;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=P[k];return J===void 0&&(J=new xo,P[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=P[k];return J===void 0&&(J=new xo,P[k]=J),J.getGripSpace()},this.getHand=function(k){let J=P[k];return J===void 0&&(J=new xo,P[k]=J),J.getHandSpace()};function z(k){const J=I.indexOf(k.inputSource);if(J===-1)return;const fe=P[J];fe!==void 0&&(fe.update(k.inputSource,k.frame,c||a),fe.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",O);for(let k=0;k<P.length;k++){const J=I[k];J!==null&&(I[k]=null,P[k].disconnect(J))}B=null,H=null,g.reset();for(const k in m)delete m[k];e.setRenderTarget(C),p=null,d=null,h=null,s=null,E=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&T&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(D),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Ki:Mi,Ce=S.stencil?Cr:ii);const pe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Sn(d.textureWidth,d.textureHeight,{format:Jt,type:Rn,depthTexture:new Gs(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Sn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(k){for(let J=0;J<k.removed.length;J++){const fe=k.removed[J],Ce=I.indexOf(fe);Ce>=0&&(I[Ce]=null,P[Ce].disconnect(fe))}for(let J=0;J<k.added.length;J++){const fe=k.added[J];let Ce=I.indexOf(fe);if(Ce===-1){for(let pe=0;pe<P.length;pe++)if(pe>=I.length){I.push(fe),Ce=pe;break}else if(I[pe]===null){I[pe]=fe,Ce=pe;break}if(Ce===-1)break}const Ee=P[Ce];Ee&&Ee.connect(fe)}}const ee=new V,j=new V;function ce(k,J,fe){ee.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const Ce=ee.distanceTo(j),Ee=J.projectionMatrix.elements,pe=fe.projectionMatrix.elements,Te=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),He=(Ee[9]+1)/Ee[5],ze=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],tt=(pe[8]+1)/pe[0],ut=Te*ke,wt=Te*tt,Ot=Ce/(-ke+tt),bt=Ot*-ke;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(bt),k.translateZ(Ot),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ee[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Nt=Te+Ot,W=Ve+Ot,Yt=ut-bt,dt=wt+(Ce-bt),F=He*Ve/W*Nt,b=ze*Ve/W*Nt;k.projectionMatrix.makePerspective(Yt,dt,F,b,Nt,W),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ge(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let J=k.near,fe=k.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),A.near=v.near=L.near=J,A.far=v.far=L.far=fe,(B!==A.near||H!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,H=A.far),A.layers.mask=k.layers.mask|6,L.layers.mask=A.layers.mask&-5,v.layers.mask=A.layers.mask&-3;const Ce=k.parent,Ee=A.cameras;ge(A,Ce);for(let pe=0;pe<Ee.length;pe++)ge(Ee[pe],Ce);Ee.length===2?ce(A,L,v):A.projectionMatrix.copy(L.projectionMatrix),xe(k,A,Ce)};function xe(k,J,fe){fe===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(fe.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Hs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(k){return m[k]};let Ze=null;function ot(k,J){if(f=J.getViewerPose(c||a),x=J,f!==null){const fe=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;fe.length!==A.cameras.length&&(A.cameras.length=0,Ce=!0);for(let Ve=0;Ve<fe.length;Ve++){const He=fe[Ve];let ze=null;if(p!==null)ze=p.getViewport(He);else{const tt=h.getViewSubImage(d,He);ze=tt.viewport,Ve===0&&(e.setRenderTargetTextures(E,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(E))}let ke=w[Ve];ke===void 0&&(ke=new gn,ke.layers.enable(Ve),ke.viewport=new Rt,w[Ve]=ke),ke.matrix.fromArray(He.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(He.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ze.x,ze.y,ze.width,ze.height),Ve===0&&(A.matrix.copy(ke.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ce===!0&&A.cameras.push(ke)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){h=n.getBinding();const Ve=h.getDepthInformation(fe[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(Ee&&Ee.includes("camera-access")&&T){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<fe.length;Ve++){const He=fe[Ve].camera;if(He){let ze=m[He];ze||(ze=new Kh,m[He]=ze);const ke=h.getCameraImage(He);ze.sourceTexture=ke}}}}for(let fe=0;fe<P.length;fe++){const Ce=I[fe],Ee=P[fe];Ce!==null&&Ee!==void 0&&Ee.update(Ce,J,c||a)}Ze&&Ze(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const te=new nf;te.setAnimationLoop(ot),this.setAnimationLoop=function(k){Ze=k},this.dispose=function(){}}}const Hx=new ht,uf=new lt;uf.set(-1,0,0,0,1,0,0,0,1);function Gx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,C,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),T(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,C):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),C=S.envMap,E=S.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(uf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,C){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=C*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function T(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,P){const I=P.program;n.uniformBlockBinding(E,I)}function c(E,P){let I=s[E.id];I===void 0&&(g(E),I=f(E),s[E.id]=I,E.addEventListener("dispose",S));const D=P.program;n.updateUBOMapping(E,D);const M=e.render.frame;r[E.id]!==M&&(d(E),r[E.id]=M)}function f(E){const P=h();E.__bindingPointIndex=P;const I=i.createBuffer(),D=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,D,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,I),I}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const P=s[E.id],I=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let M=0,L=I.length;M<L;M++){const v=I[M];if(Array.isArray(v))for(let w=0,A=v.length;w<A;w++)p(v[w],M,w,D);else p(v,M,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,P,I,D){if(T(E,P,I,D)===!0){const M=E.__offset,L=E.value;if(Array.isArray(L)){let v=0;for(let w=0;w<L.length;w++){const A=L[w],B=m(A);x(A,E.__data,v),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(v+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,E.__data)}}function x(E,P,I){typeof E=="number"||typeof E=="boolean"?P[0]=E:E.isMatrix3?(P[0]=E.elements[0],P[1]=E.elements[1],P[2]=E.elements[2],P[3]=0,P[4]=E.elements[3],P[5]=E.elements[4],P[6]=E.elements[5],P[7]=0,P[8]=E.elements[6],P[9]=E.elements[7],P[10]=E.elements[8],P[11]=0):ArrayBuffer.isView(E)?P.set(new E.constructor(E.buffer,E.byteOffset,P.length)):E.toArray(P,I)}function T(E,P,I,D){const M=E.value,L=P+"_"+I;if(D[L]===void 0)return typeof M=="number"||typeof M=="boolean"?D[L]=M:ArrayBuffer.isView(M)?D[L]=M.slice():D[L]=M.clone(),!0;{const v=D[L];if(typeof M=="number"||typeof M=="boolean"){if(v!==M)return D[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(v.equals(M)===!1)return v.copy(M),!0}}return!1}function g(E){const P=E.uniforms;let I=0;const D=16;for(let L=0,v=P.length;L<v;L++){const w=Array.isArray(P[L])?P[L]:[P[L]];for(let A=0,B=w.length;A<B;A++){const H=w[A],z=Array.isArray(H.value)?H.value:[H.value];for(let K=0,O=z.length;K<O;K++){const ee=z[K],j=m(ee),ce=I%D,ge=ce%j.boundary,xe=ce+ge;I+=ge,xe!==0&&D-xe<j.storage&&(I+=D-xe),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=I,I+=j.storage}}}const M=I%D;return M>0&&(I+=D-M),E.__size=I,E.__cache={},this}function m(E){const P={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(P.boundary=4,P.storage=4):E.isVector2?(P.boundary=8,P.storage=8):E.isVector3||E.isColor?(P.boundary=16,P.storage=12):E.isVector4?(P.boundary=16,P.storage=16):E.isMatrix3?(P.boundary=48,P.storage=48):E.isMatrix4?(P.boundary=64,P.storage=64):E.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(P.boundary=16,P.storage=E.byteLength):et("WebGLRenderer: Unsupported uniform value type.",E),P}function S(E){const P=E.target;P.removeEventListener("dispose",S);const I=a.indexOf(P.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function C(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}const Wx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function Xx(){return $n===null&&($n=new Fr(Wx,16,16,Dn,on),$n.name="DFG_LUT",$n.minFilter=Ut,$n.magFilter=Ut,$n.wrapS=On,$n.wrapT=On,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class qx{constructor(e={}){const{canvas:t=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const T=p,g=new Set([mc,pc,dc]),m=new Set([Rn,ii,Rr,Cr,hc,fc]),S=new Uint32Array(4),C=new Int32Array(4),E=new V;let P=null,I=null;const D=[],M=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1,A=null,B=null,H=null,z=null;this._outputColorSpace=Xt;let K=0,O=0,ee=null,j=-1,ce=null;const ge=new Rt,xe=new Rt;let Ze=null;const ot=new Ge(0);let te=0,k=t.width,J=t.height,fe=1,Ce=null,Ee=null;const pe=new Rt(0,0,k,J),Te=new Rt(0,0,k,J);let Ve=!1;const He=new Sc;let ze=!1,ke=!1;const tt=new ht,ut=new V,wt=new Rt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Nt(){return ee===null?fe:1}let W=n;function Yt(u,_){return t.getContext(u,_)}try{const u={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),W===null){const _="webgl2";if(W=Yt(_,u),W===null)throw Yt(_)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(u){throw nt("WebGLRenderer: "+u.message),u}let dt,F,b,Z,ie,ue,oe,me,re,ae,Ae,Ie,be,Re,We,Ne,De,G,ne,he,Le,Fe,ve;function Qe(){dt=new Xg(W),dt.init(),Le=new Fx(W,dt),F=new Og(W,dt,e,Le),b=new Dx(W,dt),F.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),B=W.createFramebuffer(),H=W.createFramebuffer(),z=W.createFramebuffer(),Z=new Kg(W),ie=new Mx,ue=new Ux(W,dt,b,ie,F,Le,Z),oe=new Wg(v),me=new Qp(W),Fe=new Ug(W,me),re=new qg(W,me,Z,Fe),ae=new $g(W,re,me,Fe,Z),G=new Zg(W,F,ue),We=new Bg(ie),Ae=new vx(v,oe,dt,F,Fe,We),Ie=new Gx(v,ie),be=new Sx,Re=new Rx(dt),De=new Dg(v,oe,b,ae,x,l),Ne=new Nx(v,ae,F),ve=new Vx(W,Z,F,b),ne=new Fg(W,dt,Z),he=new Yg(W,dt,Z),Z.programs=Ae.programs,v.capabilities=F,v.extensions=dt,v.properties=ie,v.renderLists=be,v.shadowMap=Ne,v.state=b,v.info=Z}Qe(),T!==Rn&&(L=new Qg(T,t.width,t.height,o,s,r));const Ke=new kx(v,W);this.xr=Ke,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const u=dt.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=dt.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(u){u!==void 0&&(fe=u,this.setSize(k,J,!1))},this.getSize=function(u){return u.set(k,J)},this.setSize=function(u,_,y=!0){if(Ke.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}k=u,J=_,t.width=Math.floor(u*fe),t.height=Math.floor(_*fe),y===!0&&(t.style.width=u+"px",t.style.height=_+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,u,_)},this.getDrawingBufferSize=function(u){return u.set(k*fe,J*fe).floor()},this.setDrawingBufferSize=function(u,_,y){k=u,J=_,fe=y,t.width=Math.floor(u*y),t.height=Math.floor(_*y),this.setViewport(0,0,u,_)},this.setEffects=function(u){if(T===Rn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let _=0;_<u.length;_++)if(u[_].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(ge)},this.getViewport=function(u){return u.copy(pe)},this.setViewport=function(u,_,y,R){u.isVector4?pe.set(u.x,u.y,u.z,u.w):pe.set(u,_,y,R),b.viewport(ge.copy(pe).multiplyScalar(fe).round())},this.getScissor=function(u){return u.copy(Te)},this.setScissor=function(u,_,y,R){u.isVector4?Te.set(u.x,u.y,u.z,u.w):Te.set(u,_,y,R),b.scissor(xe.copy(Te).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(u){b.setScissorTest(Ve=u)},this.setOpaqueSort=function(u){Ce=u},this.setTransparentSort=function(u){Ee=u},this.getClearColor=function(u){return u.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(u=!0,_=!0,y=!0){let R=0;if(u){let N=!1;if(ee!==null){const X=ee.texture.format;N=g.has(X)}if(N){const X=ee.texture.type,U=m.has(X),q=De.getClearColor(),Y=De.getClearAlpha(),$=q.r,se=q.g,de=q.b;U?(S[0]=$,S[1]=se,S[2]=de,S[3]=Y,W.clearBufferuiv(W.COLOR,0,S)):(C[0]=$,C[1]=se,C[2]=de,C[3]=Y,W.clearBufferiv(W.COLOR,0,C))}else R|=W.COLOR_BUFFER_BIT}_&&(R|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),y&&(R|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&W.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),A=u},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),De.dispose(),be.dispose(),Re.dispose(),ie.dispose(),oe.dispose(),ae.dispose(),Fe.dispose(),ve.dispose(),Ae.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Wr),Ke.removeEventListener("sessionend",Xr),oi.stop()};function Dt(u){u.preventDefault(),Ka("WebGLRenderer: Context Lost."),w=!0}function At(){Ka("WebGLRenderer: Context Restored."),w=!1;const u=Z.autoReset,_=Ne.enabled,y=Ne.autoUpdate,R=Ne.needsUpdate,N=Ne.type;Qe(),Z.autoReset=u,Ne.enabled=_,Ne.autoUpdate=y,Ne.needsUpdate=R,Ne.type=N}function Pn(u){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function In(u){const _=u.target;_.removeEventListener("dispose",In),lo(_)}function lo(u){co(u),ie.remove(u)}function co(u){const _=ie.get(u).programs;_!==void 0&&(_.forEach(function(y){Ae.releaseProgram(y)}),u.isShaderMaterial&&Ae.releaseShaderCache(u))}this.renderBufferDirect=function(u,_,y,R,N,X){_===null&&(_=Ot);const U=N.isMesh&&N.matrixWorld.determinantAffine()<0,q=Zr(u,_,y,R,N);b.setMaterial(R,U);let Y=y.index,$=1;if(R.wireframe===!0){if(Y=re.getWireframeAttribute(y),Y===void 0)return;$=2}const se=y.drawRange,de=y.attributes.position;let Q=se.start*$,_e=(se.start+se.count)*$;X!==null&&(Q=Math.max(Q,X.start*$),_e=Math.min(_e,(X.start+X.count)*$)),Y!==null?(Q=Math.max(Q,0),_e=Math.min(_e,Y.count)):de!=null&&(Q=Math.max(Q,0),_e=Math.min(_e,de.count));const we=_e-Q;if(we<0||we===1/0)return;Fe.setup(N,R,q,y,Y);let Me,Se=ne;if(Y!==null&&(Me=me.get(Y),Se=he,Se.setIndex(Me)),N.isMesh)R.wireframe===!0?(b.setLineWidth(R.wireframeLinewidth*Nt()),Se.setMode(W.LINES)):Se.setMode(W.TRIANGLES);else if(N.isLine){let Oe=R.linewidth;Oe===void 0&&(Oe=1),b.setLineWidth(Oe*Nt()),N.isLineSegments?Se.setMode(W.LINES):N.isLineLoop?Se.setMode(W.LINE_LOOP):Se.setMode(W.LINE_STRIP)}else N.isPoints?Se.setMode(W.POINTS):N.isSprite&&Se.setMode(W.TRIANGLES);if(N.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Oe=N._multiDrawStarts,ye=N._multiDrawCounts,je=N._multiDrawCount,Xe=Y?me.get(Y).bytesPerElement:1,Be=ie.get(R).currentProgram.getUniforms();for(let Pe=0;Pe<je;Pe++)Be.setValue(W,"_gl_DrawID",Pe),Se.render(Oe[Pe]/Xe,ye[Pe])}else if(N.isInstancedMesh)Se.renderInstances(Q,we,N.count);else if(y.isInstancedBufferGeometry){const Oe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,ye=Math.min(y.instanceCount,Oe);Se.renderInstances(Q,we,ye)}else Se.render(Q,we)};function Gr(u,_,y){u.transparent===!0&&u.side===An&&u.forceSinglePass===!1?(u.side=yn,u.needsUpdate=!0,li(u,_,y),u.side=vi,u.needsUpdate=!0,li(u,_,y),u.side=An):li(u,_,y)}this.compile=function(u,_,y=null){y===null&&(y=u),I=Re.get(y),I.init(_),M.push(I),y.traverseVisible(function(N){N.isLight&&N.layers.test(_.layers)&&(I.pushLight(N),N.castShadow&&I.pushShadow(N))}),u!==y&&u.traverseVisible(function(N){N.isLight&&N.layers.test(_.layers)&&(I.pushLight(N),N.castShadow&&I.pushShadow(N))}),I.setupLights();const R=new Set;return u.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const X=N.material;if(X)if(Array.isArray(X))for(let U=0;U<X.length;U++){const q=X[U];Gr(q,y,N),R.add(q)}else Gr(X,y,N),R.add(X)}),I=M.pop(),R},this.compileAsync=function(u,_,y=null){const R=this.compile(u,_,y);return new Promise(N=>{function X(){if(R.forEach(function(U){ie.get(U).currentProgram.isReady()&&R.delete(U)}),R.size===0){N(u);return}setTimeout(X,10)}dt.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Js=null;function Vr(u){Js&&Js(u)}function Wr(){oi.stop()}function Xr(){oi.start()}const oi=new nf;oi.setAnimationLoop(Vr),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(u){Js=u,Ke.setAnimationLoop(u),u===null?oi.stop():oi.start()},Ke.addEventListener("sessionstart",Wr),Ke.addEventListener("sessionend",Xr),this.render=function(u,_){if(_!==void 0&&_.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A!==null&&A.renderStart(u,_);const y=Ke.enabled===!0&&Ke.isPresenting===!0,R=L!==null&&(ee===null||y)&&L.begin(v,ee);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(_),_=Ke.getCamera()),u.isScene===!0&&u.onBeforeRender(v,u,_,ee),I=Re.get(u,M.length),I.init(_),I.state.textureUnits=ue.getTextureUnits(),M.push(I),tt.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),He.setFromProjectionMatrix(tt,ei,_.reversedDepth),ke=this.localClippingEnabled,ze=We.init(this.clippingPlanes,ke),P=be.get(u,D.length),P.init(),D.push(P),Ke.enabled===!0&&Ke.isPresenting===!0){const U=v.xr.getDepthSensingMesh();U!==null&&ss(U,_,-1/0,v.sortObjects)}ss(u,_,0,v.sortObjects),P.finish(),v.sortObjects===!0&&P.sort(Ce,Ee,_.reversedDepth),bt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,bt&&De.addToRenderList(P,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&We.beginShadows();const N=I.state.shadowsArray;if(Ne.render(N,u,_),ze===!0&&We.endShadows(),(R&&L.hasRenderPass())===!1){const U=P.opaque,q=P.transmissive;if(I.setupLights(),_.isArrayCamera){const Y=_.cameras;if(q.length>0)for(let $=0,se=Y.length;$<se;$++){const de=Y[$];Qs(U,q,u,de)}bt&&De.render(u);for(let $=0,se=Y.length;$<se;$++){const de=Y[$];qr(P,u,de,de.viewport)}}else q.length>0&&Qs(U,q,u,_),bt&&De.render(u),qr(P,u,_)}ee!==null&&O===0&&(ue.updateMultisampleRenderTarget(ee),ue.updateRenderTargetMipmap(ee)),R&&L.end(v),u.isScene===!0&&u.onAfterRender(v,u,_),Fe.resetDefaultState(),j=-1,ce=null,M.pop(),M.length>0?(I=M[M.length-1],ue.setTextureUnits(I.state.textureUnits),ze===!0&&We.setGlobalState(v.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,A!==null&&A.renderEnd()};function ss(u,_,y,R){if(u.visible===!1)return;if(u.layers.test(_.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(_);else if(u.isLightProbeGrid)I.pushLightProbeGrid(u);else if(u.isLight)I.pushLight(u),u.castShadow&&I.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||He.intersectsSprite(u)){R&&wt.setFromMatrixPosition(u.matrixWorld).applyMatrix4(tt);const U=ae.update(u),q=u.material;q.visible&&P.push(u,U,q,y,wt.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||He.intersectsObject(u))){const U=ae.update(u),q=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),wt.copy(u.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),wt.copy(U.boundingSphere.center)),wt.applyMatrix4(u.matrixWorld).applyMatrix4(tt)),Array.isArray(q)){const Y=U.groups;for(let $=0,se=Y.length;$<se;$++){const de=Y[$],Q=q[de.materialIndex];Q&&Q.visible&&P.push(u,U,Q,y,wt.z,de)}}else q.visible&&P.push(u,U,q,y,wt.z,null)}}const X=u.children;for(let U=0,q=X.length;U<q;U++)ss(X[U],_,y,R)}function qr(u,_,y,R){const{opaque:N,transmissive:X,transparent:U}=u;I.setupLightsView(y),ze===!0&&We.setGlobalState(v.clippingPlanes,y),R&&b.viewport(ge.copy(R)),N.length>0&&rs(N,_,y),X.length>0&&rs(X,_,y),U.length>0&&rs(U,_,y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Qs(u,_,y,R){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[R.id]===void 0){const Q=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[R.id]=new Sn(1,1,{generateMipmaps:!0,type:Q?on:Rn,minFilter:jn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const X=I.state.transmissionRenderTarget[R.id],U=R.viewport||ge;X.setSize(U.z*v.transmissionResolutionScale,U.w*v.transmissionResolutionScale);const q=v.getRenderTarget(),Y=v.getActiveCubeFace(),$=v.getActiveMipmapLevel();v.setRenderTarget(X),v.getClearColor(ot),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),bt&&De.render(y);const se=v.toneMapping;v.toneMapping=ni;const de=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),I.setupLightsView(R),ze===!0&&We.setGlobalState(v.clippingPlanes,R),rs(u,y,R),ue.updateMultisampleRenderTarget(X),ue.updateRenderTargetMipmap(X),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Q=!1;for(let _e=0,we=_.length;_e<we;_e++){const Me=_[_e],{object:Se,geometry:Oe,material:ye,group:je}=Me;if(ye.side===An&&Se.layers.test(R.layers)){const Xe=ye.side;ye.side=yn,ye.needsUpdate=!0,Yr(Se,y,R,Oe,ye,je),ye.side=Xe,ye.needsUpdate=!0,Q=!0}}Q===!0&&(ue.updateMultisampleRenderTarget(X),ue.updateRenderTargetMipmap(X))}v.setRenderTarget(q,Y,$),v.setClearColor(ot,te),de!==void 0&&(R.viewport=de),v.toneMapping=se}function rs(u,_,y){const R=_.isScene===!0?_.overrideMaterial:null;for(let N=0,X=u.length;N<X;N++){const U=u[N],{object:q,geometry:Y,group:$}=U;let se=U.material;se.allowOverride===!0&&R!==null&&(se=R),q.layers.test(y.layers)&&Yr(q,_,y,Y,se,$)}}function Yr(u,_,y,R,N,X){u.onBeforeRender(v,_,y,R,N,X),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),N.onBeforeRender(v,_,y,R,u,X),N.transparent===!0&&N.side===An&&N.forceSinglePass===!1?(N.side=yn,N.needsUpdate=!0,v.renderBufferDirect(y,_,R,N,u,X),N.side=vi,N.needsUpdate=!0,v.renderBufferDirect(y,_,R,N,u,X),N.side=An):v.renderBufferDirect(y,_,R,N,u,X),u.onAfterRender(v,_,y,R,N,X)}function li(u,_,y){_.isScene!==!0&&(_=Ot);const R=ie.get(u),N=I.state.lights,X=I.state.shadowsArray,U=N.state.version,q=Ae.getParameters(u,N.state,X,_,y,I.state.lightProbeGridArray),Y=Ae.getProgramCacheKey(q);let $=R.programs;R.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?_.environment:null,R.fog=_.fog;const se=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;R.envMap=oe.get(u.envMap||R.environment,se),R.envMapRotation=R.environment!==null&&u.envMap===null?_.environmentRotation:u.envMapRotation,$===void 0&&(u.addEventListener("dispose",In),$=new Map,R.programs=$);let de=$.get(Y);if(de!==void 0){if(R.currentProgram===de&&R.lightsStateVersion===U)return Kr(u,q),de}else q.uniforms=Ae.getUniforms(u),A!==null&&u.isNodeMaterial&&A.build(u,y,q),u.onBeforeCompile(q,v),de=Ae.acquireProgram(q,Y),$.set(Y,de),R.uniforms=q.uniforms;const Q=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Q.clippingPlanes=We.uniform),Kr(u,q),R.needsLights=xn(u),R.lightsStateVersion=U,R.needsLights&&(Q.ambientLightColor.value=N.state.ambient,Q.lightProbe.value=N.state.probe,Q.directionalLights.value=N.state.directional,Q.directionalLightShadows.value=N.state.directionalShadow,Q.spotLights.value=N.state.spot,Q.spotLightShadows.value=N.state.spotShadow,Q.rectAreaLights.value=N.state.rectArea,Q.ltc_1.value=N.state.rectAreaLTC1,Q.ltc_2.value=N.state.rectAreaLTC2,Q.pointLights.value=N.state.point,Q.pointLightShadows.value=N.state.pointShadow,Q.hemisphereLights.value=N.state.hemi,Q.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Q.spotLightMatrix.value=N.state.spotLightMatrix,Q.spotLightMap.value=N.state.spotLightMap,Q.pointShadowMatrix.value=N.state.pointShadowMatrix),R.lightProbeGrid=I.state.lightProbeGridArray.length>0,R.currentProgram=de,R.uniformsList=null,de}function Fi(u){if(u.uniformsList===null){const _=u.currentProgram.getUniforms();u.uniformsList=Ha.seqWithValue(_.seq,u.uniforms)}return u.uniformsList}function Kr(u,_){const y=ie.get(u);y.outputColorSpace=_.outputColorSpace,y.batching=_.batching,y.batchingColor=_.batchingColor,y.instancing=_.instancing,y.instancingColor=_.instancingColor,y.instancingMorph=_.instancingMorph,y.skinning=_.skinning,y.morphTargets=_.morphTargets,y.morphNormals=_.morphNormals,y.morphColors=_.morphColors,y.morphTargetsCount=_.morphTargetsCount,y.numClippingPlanes=_.numClippingPlanes,y.numIntersection=_.numClipIntersection,y.vertexAlphas=_.vertexAlphas,y.vertexTangents=_.vertexTangents,y.toneMapping=_.toneMapping}function as(u,_){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;E.setFromMatrixPosition(_.matrixWorld);for(let y=0,R=u.length;y<R;y++){const N=u[y];if(N.texture!==null&&N.boundingBox.containsPoint(E))return N}return null}function Zr(u,_,y,R,N){_.isScene!==!0&&(_=Ot),ue.resetTextureUnits();const X=_.fog,U=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?_.environment:null,q=ee===null?v.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:pt.workingColorSpace,Y=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,$=oe.get(R.envMap||U,Y),se=R.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,de=!!y.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),Q=!!y.morphAttributes.position,_e=!!y.morphAttributes.normal,we=!!y.morphAttributes.color;let Me=ni;R.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Se=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Oe=Se!==void 0?Se.length:0,ye=ie.get(R),je=I.state.lights;if(ze===!0&&(ke===!0||u!==ce)){const st=u===ce&&R.id===j;We.setState(R,u,st)}let Xe=!1;R.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==je.state.version||ye.outputColorSpace!==q||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==$||R.fog===!0&&ye.fog!==X||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==We.numPlanes||ye.numIntersection!==We.numIntersection)||ye.vertexAlphas!==se||ye.vertexTangents!==de||ye.morphTargets!==Q||ye.morphNormals!==_e||ye.morphColors!==we||ye.toneMapping!==Me||ye.morphTargetsCount!==Oe||!!ye.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,ye.__version=R.version);let Be=ye.currentProgram;Xe===!0&&(Be=li(R,_,N),A&&R.isNodeMaterial&&A.onUpdateProgram(R,Be,ye));let Pe=!1,qe=!1,xt=!1;const $e=Be.getUniforms(),Ye=ye.uniforms;if(b.useProgram(Be.program)&&(Pe=!0,qe=!0,xt=!0),R.id!==j&&(j=R.id,qe=!0),ye.needsLights){const st=as(I.state.lightProbeGridArray,N);ye.lightProbeGrid!==st&&(ye.lightProbeGrid=st,qe=!0)}if(Pe||ce!==u){b.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),$e.setValue(W,"projectionMatrix",u.projectionMatrix),$e.setValue(W,"viewMatrix",u.matrixWorldInverse);const Bt=$e.map.cameraPosition;Bt!==void 0&&Bt.setValue(W,ut.setFromMatrixPosition(u.matrixWorld)),F.logarithmicDepthBuffer&&$e.setValue(W,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&$e.setValue(W,"isOrthographic",u.isOrthographicCamera===!0),ce!==u&&(ce=u,qe=!0,xt=!0)}if(ye.needsLights&&(je.state.directionalShadowMap.length>0&&$e.setValue(W,"directionalShadowMap",je.state.directionalShadowMap,ue),je.state.spotShadowMap.length>0&&$e.setValue(W,"spotShadowMap",je.state.spotShadowMap,ue),je.state.pointShadowMap.length>0&&$e.setValue(W,"pointShadowMap",je.state.pointShadowMap,ue)),N.isSkinnedMesh){$e.setOptional(W,N,"bindMatrix"),$e.setOptional(W,N,"bindMatrixInverse");const st=N.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),$e.setValue(W,"boneTexture",st.boneTexture,ue))}N.isBatchedMesh&&($e.setOptional(W,N,"batchingTexture"),$e.setValue(W,"batchingTexture",N._matricesTexture,ue),$e.setOptional(W,N,"batchingIdTexture"),$e.setValue(W,"batchingIdTexture",N._indirectTexture,ue),$e.setOptional(W,N,"batchingColorTexture"),N._colorsTexture!==null&&$e.setValue(W,"batchingColorTexture",N._colorsTexture,ue));const rt=y.morphAttributes;if((rt.position!==void 0||rt.normal!==void 0||rt.color!==void 0)&&G.update(N,y,Be),(qe||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,$e.setValue(W,"receiveShadow",N.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&_.environment!==null&&(Ye.envMapIntensity.value=_.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Xx()),qe){if($e.setValue(W,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&rn(Ye,xt),X&&R.fog===!0&&Ie.refreshFogUniforms(Ye,X),Ie.refreshMaterialUniforms(Ye,R,fe,J,I.state.transmissionRenderTarget[u.id]),ye.needsLights&&ye.lightProbeGrid){const st=ye.lightProbeGrid;Ye.probesSH.value=st.texture,Ye.probesMin.value.copy(st.boundingBox.min),Ye.probesMax.value.copy(st.boundingBox.max),Ye.probesResolution.value.copy(st.resolution)}Ha.upload(W,Fi(ye),Ye,ue)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ha.upload(W,Fi(ye),Ye,ue),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&$e.setValue(W,"center",N.center),$e.setValue(W,"modelViewMatrix",N.modelViewMatrix),$e.setValue(W,"normalMatrix",N.normalMatrix),$e.setValue(W,"modelMatrix",N.matrixWorld),R.uniformsGroups!==void 0){const st=R.uniformsGroups;for(let Bt=0,Mt=st.length;Bt<Mt;Bt++){const bn=st[Bt];ve.update(bn,Be),ve.bind(bn,Be)}}return Be}function rn(u,_){u.ambientLightColor.needsUpdate=_,u.lightProbe.needsUpdate=_,u.directionalLights.needsUpdate=_,u.directionalLightShadows.needsUpdate=_,u.pointLights.needsUpdate=_,u.pointLightShadows.needsUpdate=_,u.spotLights.needsUpdate=_,u.spotLightShadows.needsUpdate=_,u.rectAreaLights.needsUpdate=_,u.hemisphereLights.needsUpdate=_}function xn(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(u,_,y){const R=ie.get(u);R.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),ie.get(u.texture).__webglTexture=_,ie.get(u.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:y,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,_){const y=ie.get(u);y.__webglFramebuffer=_,y.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(u,_=0,y=0){ee=u,K=_,O=y;let R=null,N=!1,X=!1;if(u){const q=ie.get(u);if(q.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,q.__webglFramebuffer),ge.copy(u.viewport),xe.copy(u.scissor),Ze=u.scissorTest,b.viewport(ge),b.scissor(xe),b.setScissorTest(Ze),j=-1;return}else if(q.__webglFramebuffer===void 0)ue.setupRenderTarget(u);else if(q.__hasExternalTextures)ue.rebindTextures(u,ie.get(u.texture).__webglTexture,ie.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const se=u.depthTexture;if(q.__boundDepthTexture!==se){if(se!==null&&ie.has(se)&&(u.width!==se.image.width||u.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(u)}}const Y=u.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(X=!0);const $=ie.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray($[_])?R=$[_][y]:R=$[_],N=!0):u.samples>0&&ue.useMultisampledRTT(u)===!1?R=ie.get(u).__webglMultisampledFramebuffer:Array.isArray($)?R=$[y]:R=$,ge.copy(u.viewport),xe.copy(u.scissor),Ze=u.scissorTest}else ge.copy(pe).multiplyScalar(fe).floor(),xe.copy(Te).multiplyScalar(fe).floor(),Ze=Ve;if(y!==0&&(R=B),b.bindFramebuffer(W.FRAMEBUFFER,R)&&b.drawBuffers(u,R),b.viewport(ge),b.scissor(xe),b.setScissorTest(Ze),N){const q=ie.get(u.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+_,q.__webglTexture,y)}else if(X){const q=_;for(let Y=0;Y<u.textures.length;Y++){const $=ie.get(u.textures[Y]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Y,$.__webglTexture,y,q)}}else if(u!==null&&y!==0){const q=ie.get(u.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,q.__webglTexture,y)}j=-1},this.readRenderTargetPixels=function(u,_,y,R,N,X,U,q=0){if(!(u&&u.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y){b.bindFramebuffer(W.FRAMEBUFFER,Y);try{const $=u.textures[q],se=$.format,de=$.type;if(u.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+q),!F.textureFormatReadable(se)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(de)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=u.width-R&&y>=0&&y<=u.height-N&&W.readPixels(_,y,R,N,Le.convert(se),Le.convert(de),X)}finally{const $=ee!==null?ie.get(ee).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(u,_,y,R,N,X,U,q=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y)if(_>=0&&_<=u.width-R&&y>=0&&y<=u.height-N){b.bindFramebuffer(W.FRAMEBUFFER,Y);const $=u.textures[q],se=$.format,de=$.type;if(u.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+q),!F.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Q=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Q),W.bufferData(W.PIXEL_PACK_BUFFER,X.byteLength,W.STREAM_READ),W.readPixels(_,y,R,N,Le.convert(se),Le.convert(de),0);const _e=ee!==null?ie.get(ee).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,_e);const we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await dd(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Q),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,X),W.deleteBuffer(Q),W.deleteSync(we),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,_=null,y=0){const R=Math.pow(2,-y),N=Math.floor(u.image.width*R),X=Math.floor(u.image.height*R),U=_!==null?_.x:0,q=_!==null?_.y:0;ue.setTexture2D(u,0),W.copyTexSubImage2D(W.TEXTURE_2D,y,0,0,U,q,N,X),b.unbindTexture()},this.copyTextureToTexture=function(u,_,y=null,R=null,N=0,X=0){let U,q,Y,$,se,de,Q,_e,we;const Me=u.isCompressedTexture?u.mipmaps[X]:u.image;if(y!==null)U=y.max.x-y.min.x,q=y.max.y-y.min.y,Y=y.isBox3?y.max.z-y.min.z:1,$=y.min.x,se=y.min.y,de=y.isBox3?y.min.z:0;else{const Ye=Math.pow(2,-N);U=Math.floor(Me.width*Ye),q=Math.floor(Me.height*Ye),u.isDataArrayTexture?Y=Me.depth:u.isData3DTexture?Y=Math.floor(Me.depth*Ye):Y=1,$=0,se=0,de=0}R!==null?(Q=R.x,_e=R.y,we=R.z):(Q=0,_e=0,we=0);const Se=Le.convert(_.format),Oe=Le.convert(_.type);let ye;_.isData3DTexture?(ue.setTexture3D(_,0),ye=W.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(ue.setTexture2DArray(_,0),ye=W.TEXTURE_2D_ARRAY):(ue.setTexture2D(_,0),ye=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,_.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,_.unpackAlignment);const je=b.getParameter(W.UNPACK_ROW_LENGTH),Xe=b.getParameter(W.UNPACK_IMAGE_HEIGHT),Be=b.getParameter(W.UNPACK_SKIP_PIXELS),Pe=b.getParameter(W.UNPACK_SKIP_ROWS),qe=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,Me.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Me.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,$),b.pixelStorei(W.UNPACK_SKIP_ROWS,se),b.pixelStorei(W.UNPACK_SKIP_IMAGES,de);const xt=u.isDataArrayTexture||u.isData3DTexture,$e=_.isDataArrayTexture||_.isData3DTexture;if(u.isDepthTexture){const Ye=ie.get(u),rt=ie.get(_),st=ie.get(Ye.__renderTarget),Bt=ie.get(rt.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,st.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Mt=0;Mt<Y;Mt++)xt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(u).__webglTexture,N,de+Mt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(_).__webglTexture,X,we+Mt)),W.blitFramebuffer($,se,U,q,Q,_e,U,q,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(N!==0||u.isRenderTargetTexture||ie.has(u)){const Ye=ie.get(u),rt=ie.get(_);b.bindFramebuffer(W.READ_FRAMEBUFFER,H),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,z);for(let st=0;st<Y;st++)xt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,N,de+st):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ye.__webglTexture,N),$e?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,rt.__webglTexture,X,we+st):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,rt.__webglTexture,X),N!==0?W.blitFramebuffer($,se,U,q,Q,_e,U,q,W.COLOR_BUFFER_BIT,W.NEAREST):$e?W.copyTexSubImage3D(ye,X,Q,_e,we+st,$,se,U,q):W.copyTexSubImage2D(ye,X,Q,_e,$,se,U,q);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else $e?u.isDataTexture||u.isData3DTexture?W.texSubImage3D(ye,X,Q,_e,we,U,q,Y,Se,Oe,Me.data):_.isCompressedArrayTexture?W.compressedTexSubImage3D(ye,X,Q,_e,we,U,q,Y,Se,Me.data):W.texSubImage3D(ye,X,Q,_e,we,U,q,Y,Se,Oe,Me):u.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,Q,_e,U,q,Se,Oe,Me.data):u.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,Q,_e,Me.width,Me.height,Se,Me.data):W.texSubImage2D(W.TEXTURE_2D,X,Q,_e,U,q,Se,Oe,Me);b.pixelStorei(W.UNPACK_ROW_LENGTH,je),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xe),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Be),b.pixelStorei(W.UNPACK_SKIP_ROWS,Pe),b.pixelStorei(W.UNPACK_SKIP_IMAGES,qe),X===0&&_.generateMipmaps&&W.generateMipmap(ye),b.unbindTexture()},this.initRenderTarget=function(u){ie.get(u).__webglFramebuffer===void 0&&ue.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?ue.setTextureCube(u,0):u.isData3DTexture?ue.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?ue.setTexture2DArray(u,0):ue.setTexture2D(u,0),b.unbindTexture()},this.resetState=function(){K=0,O=0,ee=null,b.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}function Zl(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new sn;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,f),c+=p}}if(t){let f=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+f);f+=i[d].attributes.position.count}l.setIndex(h)}for(const f in r){const h=ah(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let d=0;d<h;++d){const p=[];for(let T=0;T<a[f].length;++T)p.push(a[f][T][d]);const x=ah(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(x)}}}return l}function ah(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const a=new e(r),o=new en(a,t,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=f.count;d<p;d++)for(let x=0;x<t;x++){const T=f.getComponent(d,x);o.setComponent(d+h,x,T)}}else a.set(f.array,l);l+=f.count*t}return s!==void 0&&(o.gpuType=s),o}function oh(i,e){if(e===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===kl||e===Uh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===kl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yx=new kr(-1,1,1,-1,0,1);class Kx extends sn{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const Zx=new Kx;class Pc{constructor(e){this._mesh=new _t(Zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $x extends $s{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Or.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lh extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Jx extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Qx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $x(Ga),this.copyPass.material.blending=ti,this.timer=new kp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lh!==void 0&&(a instanceof lh?n=!0:a instanceof Jx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jx extends $s{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ge}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ev={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends $s{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,a,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Sn(r,a,{type:on});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Sn(r,a,{type:on});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=ev;this.highPassUniforms=Or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Je(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Or.clone(Ga.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new ln,this._fsQuad=new Pc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Je(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Xs.BlurDirectionX=new Je(1,0);Xs.BlurDirectionY=new Je(0,1);const Pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class tv extends $s{constructor(){super(),this.isOutputPass=!0,this.uniforms=Or.clone(Pa.uniforms),this.material=new $h({name:Pa.name,uniforms:this.uniforms,vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader}),this._fsQuad=new Pc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function nv(i){const e=new Map,t=new Map,n=i.clone();return hf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function hf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)hf(i.children[n],e.children[n],t)}class iv extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ch(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ch(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yv(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);a=wr.resolveURL(c,this.path)}else a=wr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ff){try{a[gt.KHR_BINARY_GLTF]=new Sv(e)}catch(h){s&&s(h);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Uv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const h=r.extensionsUsed[f],d=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:a[h]=new av;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[h]=new bv(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[h]=new Tv;break;case gt.KHR_MESH_QUANTIZATION:a[h]=new Ev;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function sv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Vt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rv{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const f=new Ge(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],qt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tf(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ef(f),c.distance=h;break;case"spot":c=new Xl(f),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class av{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}}class ov{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class lv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(r,r)}return Promise.all(s)}}class cv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class hv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class fv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class dv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],qt),Promise.all(s)}}class pv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class mv{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],qt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(s)}}class gv{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class _v{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?ai:null}extendMaterialParams(e,t){const n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class xv{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class vv{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Mv{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ch{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,f=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(f*h);return a.decodeGltfBuffer(new Uint8Array(p),f,h,d,s.mode,s.filter),p})})}else return null}}class yv{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(f=>(l[c]=f,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const f=c.pop(),h=f.isGroup?f.children:[f],d=c[0].count,p=[];for(const x of h){const T=new ht,g=new V,m=new Si,S=new V(1,1,1),C=new Vl(x.geometry,x.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),C.setMatrixAt(E,T.compose(g,m,S));for(const E in l)if(E==="_COLOR_0"){const P=l[E];C.instanceColor=new Gl(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&x.geometry.setAttribute(E,l[E]);Pt.prototype.copy.call(C,x),this.parser.assignFinalMaterial(C),p.push(C)}return f.isGroup?(f.clear(),f.add(...p),f):p[0]}))}}const ff="glTF",pr=12,uh={JSON:1313821514,BIN:5130562};class Sv{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ff)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-pr,r=new DataView(e,pr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===uh.JSON){const c=new Uint8Array(e,pr+a,o);this.content=n.decode(c)}else if(l===uh.BIN){const c=pr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const f in a){const h=$l[f]||f.toLowerCase();o[h]=a[f]}for(const f in e.attributes){const h=$l[f]||f.toLowerCase();if(a[f]!==void 0){const d=n.accessors[e.attributes[f]],p=Os[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(h,d){s.decodeDracoFile(f,function(p){for(const x in p.attributes){const T=p.attributes[x],g=l[x];g!==void 0&&(T.normalized=g)}h(p)},o,c,qt,d)})})}}class Tv{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ev{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class df extends qs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,f=s-t,h=(n-t)/f,d=h*h,p=d*h,x=e*c,T=x-c,g=-2*p+3*d,m=p-d,S=1-g,C=m-d+h;for(let E=0;E!==o;E++){const P=a[T+E+o],I=a[T+E+l]*f,D=a[x+E+o],M=a[x+E]*f;r[E]=S*P+C*I+g*D+m*M}return r}}const wv=new Si;class Av extends df{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return wv.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hh={9728:Qt,9729:Ut,9984:Rh,9985:Ua,9986:Mr,9987:jn},fh={33071:On,33648:Wa,10497:Di},Yo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rv={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},Ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),i.DefaultMaterial}function Vi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,f=e.length;c<f;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const f=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=f),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Iv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lv(i){let e;const t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zo(t.attributes):e=i.indices+":"+Zo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Zo(i.targets[n]);return e}function Zo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dv=new ht;class Uv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Qh(this.options.manager):this.textureLoader=new Op(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Vi(r,o,s),Jn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,f]of a.children.entries())r(f,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(wr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Yo[s.type],o=Os[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new en(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Yo[s.type],c=Os[s.componentType],f=c.BYTES_PER_ELEMENT,h=f*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let T,g;if(p&&p!==h){const m=Math.floor(d/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let C=t.cache.get(S);C||(T=new c(o,m*p,s.count*p/f),C=new Gh(T,p/f),t.cache.add(S,C)),g=new Ur(C,l,d%p/f,x)}else o===null?T=new c(s.count*l):T=new c(o,d,s.count*l),g=new en(T,l,x);if(s.sparse!==void 0){const m=Yo.SCALAR,S=Os[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,P=new S(a[1],C,s.sparse.count*m),I=new c(a[2],E,s.sparse.count*l);o!==null&&(g=new en(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let D=0,M=P.length;D<M;D++){const L=P[D];if(g.setX(L,I[D*l]),l>=2&&g.setY(L,I[D*l+1]),l>=3&&g.setZ(L,I[D*l+2]),l>=4&&g.setW(L,I[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return f.magFilter=hh[d.magFilter]||Ut,f.minFilter=hh[d.minFilter]||jn,f.wrapS=fh[d.wrapS]||Di,f.wrapT=fh[d.wrapT]||Di,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Qt&&f.minFilter!==Ut,s.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(T){const g=new jt(T);g.needsUpdate=!0,d(g)}),t.load(wr.resolveURL(h,r.path),x,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Jn(h,a),h.userData.mimeType=a.mimeType||Nv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new qh,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bc,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ns}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){const h=s[gt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Xt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=An);const f=r.alphaMode||Ko.OPAQUE;if(f===Ko.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Ko.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ln){const h=r.emissiveFactor;o.emissive=new Ge().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&a!==ln&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Vi(s,h,r),h})}createUniqueName(e){const t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return dh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],f=Lv(c),h=s[f];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=dh(new sn,c,t),s[f]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const f=a[l].material===void 0?Cv(this.cache):this.getDependency("material",a[l].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let p=0,x=f.length;p<x;p++){const T=f[p],g=a[p];let m;const S=c[p];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new np(T,S):new _t(T,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?m.geometry=oh(m.geometry,Uh):g.mode===Nn.TRIANGLE_FAN&&(m.geometry=oh(m.geometry,kl));else if(g.mode===Nn.LINES)m=new lp(T,S);else if(g.mode===Nn.LINE_STRIP)m=new no(T,S);else if(g.mode===Nn.LINE_LOOP)m=new cp(T,S);else if(g.mode===Nn.POINTS)m=new up(T,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Iv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Jn(m,r),g.extensions&&Vi(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,x=h.length;p<x;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Vi(s,h[0],r),h[0];const d=new Ct;r.extensions&&Vi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,x=h.length;p<x;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(Id.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,f=a.length;c<f;c++){const h=a[c];if(h){o.push(h);const d=new ht;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],f=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],x=s.samplers[p.sampler],T=p.target,g=T.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,S=s.parameters!==void 0?s.parameters[x.output]:x.output;T.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(x),f.push(T))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(h){const d=h[0],p=h[1],x=h[2],T=h[3],g=h[4],m=[];for(let C=0,E=d.length;C<E;C++){const P=d[C],I=p[C],D=x[C],M=T[C],L=g[C];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const v=n._createAnimationTracks(P,I,D,M,L);if(v)for(let w=0;w<v.length;w++)m.push(v[w])}const S=new Ep(r,void 0,m);return Jn(S,s),S})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,f=o.length;c<f;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const f=c[0],h=c[1],d=c[2];d!==null&&f.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Dv)});for(let p=0,x=h.length;p<x;p++)f.add(h[p]);if(f.userData.pivot!==void 0&&h.length>0){const p=f.userData.pivot,x=h[0];f.pivot=new V().fromArray(p),f.position.x-=p[0],f.position.y-=p[1],f.position.z-=p[2],x.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let f;if(r.isBone===!0?f=new Xh:c.length>1?f=new Ct:c.length===1?f=c[0]:f=new Pt,f!==c[0])for(let h=0,d=c.length;h<d;h++)f.add(c[h]);if(r.name&&(f.userData.name=r.name,f.name=a),Jn(f,r),r.extensions&&Vi(n,f,r),r.matrix!==void 0){const h=new ht;h.fromArray(r.matrix),f.applyMatrix4(h)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!s.associations.has(f))s.associations.set(f,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(f);s.associations.set(f,{...h})}return s.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ct;n.name&&(r.name=s.createUniqueName(n.name)),Jn(r,n),n.extensions&&Vi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let f=0,h=l.length;f<h;f++){const d=l[f];d.parent!==null?r.add(nv(d)):r.add(d)}const c=f=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Cn||d instanceof jt)&&h.set(d,p);return f.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Pi[r.path]===Pi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let f;switch(Pi[r.path]){case Pi.weights:f=Br;break;case Pi.rotation:f=zr;break;case Pi.translation:case Pi.scale:f=Ja;break;default:n.itemSize===1?f=Br:f=Ja;break}const h=s.interpolation!==void 0?Rv[s.interpolation]:Ir,d=this._getArrayFromAccessor(n);for(let p=0,x=l.length;p<x;p++){const T=new f(l[p]+"."+Pi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(T),a.push(T)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof zr?Av:df;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fv(i,e,t){const n=e.attributes,s=new bi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),o.normalized){const f=Jl(Os[o.componentType]);s.min.multiplyScalar(f),s.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new V,l=new V;for(let c=0,f=r.length;c<f;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){const T=Jl(Os[d.componentType]);l.multiplyScalar(T)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new ri;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function dh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=$l[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return pt.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Jn(i,e),Fv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Pv(i,e.targets,t):i})}var Fn=Uint8Array,Is=Uint16Array,Ov=Int32Array,pf=new Fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mf=new Fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bv=new Fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gf=function(i,e){for(var t=new Is(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ov(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},_f=gf(pf,2),xf=_f.b,zv=_f.r;xf[28]=258,zv[258]=28;var kv=gf(mf,0),Hv=kv.b,Ql=new Is(32768);for(var Lt=0;Lt<32768;++Lt){var Ii=(Lt&43690)>>1|(Lt&21845)<<1;Ii=(Ii&52428)>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>4|(Ii&3855)<<4,Ql[Lt]=((Ii&65280)>>8|(Ii&255)<<8)>>1}var Ar=(function(i,e,t){for(var n=i.length,s=0,r=new Is(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Is(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Is(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],f=e-i[s],h=a[i[s]-1]++<<f,d=h|(1<<f)-1;h<=d;++h)o[Ql[h]>>l]=c}else for(o=new Is(n),s=0;s<n;++s)i[s]&&(o[s]=Ql[a[i[s]-1]++]>>15-i[s]);return o}),Hr=new Fn(288);for(var Lt=0;Lt<144;++Lt)Hr[Lt]=8;for(var Lt=144;Lt<256;++Lt)Hr[Lt]=9;for(var Lt=256;Lt<280;++Lt)Hr[Lt]=7;for(var Lt=280;Lt<288;++Lt)Hr[Lt]=8;var vf=new Fn(32);for(var Lt=0;Lt<32;++Lt)vf[Lt]=5;var Gv=Ar(Hr,9,1),Vv=Ar(vf,5,1),$o=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Hn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Jo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Wv=function(i){return(i+7)/8|0},Xv=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Fn(i.subarray(e,t))},qv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vn=function(i,e,t){var n=new Error(e||qv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vn),!t)throw n;return n},Yv=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new Fn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Fn(s*3));var c=function(pe){var Te=t.length;if(pe>Te){var Ve=new Fn(Math.max(Te*2,pe));Ve.set(t),t=Ve}},f=e.f||0,h=e.p||0,d=e.b||0,p=e.l,x=e.d,T=e.m,g=e.n,m=s*8;do{if(!p){f=Hn(i,h,1);var S=Hn(i,h+1,3);if(h+=3,S)if(S==1)p=Gv,x=Vv,T=9,g=5;else if(S==2){var I=Hn(i,h,31)+257,D=Hn(i,h+10,15)+4,M=I+Hn(i,h+5,31)+1;h+=14;for(var L=new Fn(M),v=new Fn(19),w=0;w<D;++w)v[Bv[w]]=Hn(i,h+w*3,7);h+=D*3;for(var A=$o(v),B=(1<<A)-1,H=Ar(v,A,1),w=0;w<M;){var z=H[Hn(i,h,B)];h+=z&15;var C=z>>4;if(C<16)L[w++]=C;else{var K=0,O=0;for(C==16?(O=3+Hn(i,h,3),h+=2,K=L[w-1]):C==17?(O=3+Hn(i,h,7),h+=3):C==18&&(O=11+Hn(i,h,127),h+=7);O--;)L[w++]=K}}var ee=L.subarray(0,I),j=L.subarray(I);T=$o(ee),g=$o(j),p=Ar(ee,T,1),x=Ar(j,g,1)}else Vn(1);else{var C=Wv(h)+4,E=i[C-4]|i[C-3]<<8,P=C+E;if(P>s){l&&Vn(0);break}o&&c(d+E),t.set(i.subarray(C,P),d),e.b=d+=E,e.p=h=P*8,e.f=f;continue}if(h>m){l&&Vn(0);break}}o&&c(d+131072);for(var ce=(1<<T)-1,ge=(1<<g)-1,xe=h;;xe=h){var K=p[Jo(i,h)&ce],Ze=K>>4;if(h+=K&15,h>m){l&&Vn(0);break}if(K||Vn(2),Ze<256)t[d++]=Ze;else if(Ze==256){xe=h,p=null;break}else{var ot=Ze-254;if(Ze>264){var w=Ze-257,te=pf[w];ot=Hn(i,h,(1<<te)-1)+xf[w],h+=te}var k=x[Jo(i,h)&ge],J=k>>4;k||Vn(3),h+=k&15;var j=Hv[J];if(J>3){var te=mf[J];j+=Jo(i,h)&(1<<te)-1,h+=te}if(h>m){l&&Vn(0);break}o&&c(d+131072);var fe=d+ot;if(d<j){var Ce=r-j,Ee=Math.min(j,fe);for(Ce+d<0&&Vn(3);d<Ee;++d)t[d]=n[Ce+d]}for(;d<fe;++d)t[d]=t[d-j]}}e.l=p,e.p=xe,e.b=d,e.f=f,p&&(f=1,e.m=T,e.d=x,e.n=g)}while(!f);return d!=t.length&&a?Xv(t,0,d):t.subarray(0,d)},Kv=new Fn(0),Zv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Vn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Vn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function mr(i,e){return Yv(i.subarray(Zv(i),-4),{i:2},e,e)}var $v=typeof TextDecoder<"u"&&new TextDecoder,Jv=0;try{$v.decode(Kv,{stream:!0}),Jv=1}catch{}class Qv extends Lp{constructor(e){super(e),this.type=on,this.outputFormat=Jt,this.part=0}parse(e){const L=Math.pow(2.7182818,2.2);let v=null;function w(u,_){let y=0;for(let N=0;N<65536;++N)(N==0||u[N>>3]&1<<(N&7))&&(_[y++]=N);const R=y-1;for(;y<65536;)_[y++]=0;return R}function A(u){for(let _=0;_<16384;_++)u[_]={},u[_].len=0,u[_].lit=0,u[_].p=null}const B={l:0,c:0,lc:0};function H(u,_,y,R,N){for(;y<u;)_=_<<8|Re(R,N),y+=8;y-=u,B.l=_>>y&(1<<u)-1,B.c=_,B.lc=y}const z=new Array(59);function K(u){for(let y=0;y<=58;++y)z[y]=0;for(let y=0;y<65537;++y)z[u[y]]+=1;let _=0;for(let y=58;y>0;--y){const R=_+z[y]>>1;z[y]=_,_=R}for(let y=0;y<65537;++y){const R=u[y];R>0&&(u[y]=R|z[R]++<<6)}}function O(u,_,y,R,N,X){const U=_;let q=0,Y=0;for(;R<=N;R++){if(U.value-_.value>y)return!1;H(6,q,Y,u,U);const $=B.l;if(q=B.c,Y=B.lc,X[R]=$,$==63){if(U.value-_.value>y)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");H(8,q,Y,u,U);let se=B.l+6;if(q=B.c,Y=B.lc,R+se>N+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;se--;)X[R++]=0;R--}else if($>=59){let se=$-59+2;if(R+se>N+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;se--;)X[R++]=0;R--}}K(X)}function ee(u){return u&63}function j(u){return u>>6}function ce(u,_,y,R){for(;_<=y;_++){const N=j(u[_]),X=ee(u[_]);if(N>>X)throw new Error("THREE.EXRLoader: Invalid table entry");if(X>14){const U=R[N>>X-14];if(U.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(U.lit++,U.p){const q=U.p;U.p=new Array(U.lit);for(let Y=0;Y<U.lit-1;++Y)U.p[Y]=q[Y]}else U.p=new Array(1);U.p[U.lit-1]=_}else if(X){let U=0;for(let q=1<<14-X;q>0;q--){const Y=R[(N<<14-X)+U];if(Y.len||Y.p)throw new Error("THREE.EXRLoader: Invalid table entry");Y.len=X,Y.lit=_,U++}}}return!0}const ge={c:0,lc:0};function xe(u,_,y,R){u=u<<8|Re(y,R),_+=8,ge.c=u,ge.lc=_}const Ze={c:0,lc:0};function ot(u,_,y,R,N,X,U,q,Y){if(u==_){R<8&&(xe(y,R,N,X),y=ge.c,R=ge.lc),R-=8;let $=y>>R;if($=new Uint8Array([$])[0],q.value+$>Y)return!1;const se=U[q.value-1];for(;$-- >0;)U[q.value++]=se}else if(q.value<Y)U[q.value++]=u;else return!1;Ze.c=y,Ze.lc=R}function te(u){return u&65535}function k(u){const _=te(u);return _>32767?_-65536:_}const J={a:0,b:0};function fe(u,_){const y=k(u),N=k(_),X=y+(N&1)+(N>>1),U=X,q=X-N;J.a=U,J.b=q}function Ce(u,_){const y=te(u),R=te(_),N=y-(R>>1)&65535,X=R+N-32768&65535;J.a=X,J.b=N}function Ee(u,_,y,R,N,X,U){const q=U<16384,Y=y>N?N:y;let $=1,se,de;for(;$<=Y;)$<<=1;for($>>=1,se=$,$>>=1;$>=1;){de=0;const Q=de+X*(N-se),_e=X*$,we=X*se,Me=R*$,Se=R*se;let Oe,ye,je,Xe;for(;de<=Q;de+=we){let Be=de;const Pe=de+R*(y-se);for(;Be<=Pe;Be+=Se){const qe=Be+Me,xt=Be+_e,$e=xt+Me;q?(fe(u[Be+_],u[xt+_]),Oe=J.a,je=J.b,fe(u[qe+_],u[$e+_]),ye=J.a,Xe=J.b,fe(Oe,ye),u[Be+_]=J.a,u[qe+_]=J.b,fe(je,Xe),u[xt+_]=J.a,u[$e+_]=J.b):(Ce(u[Be+_],u[xt+_]),Oe=J.a,je=J.b,Ce(u[qe+_],u[$e+_]),ye=J.a,Xe=J.b,Ce(Oe,ye),u[Be+_]=J.a,u[qe+_]=J.b,Ce(je,Xe),u[xt+_]=J.a,u[$e+_]=J.b)}if(y&$){const qe=Be+_e;q?fe(u[Be+_],u[qe+_]):Ce(u[Be+_],u[qe+_]),Oe=J.a,u[qe+_]=J.b,u[Be+_]=Oe}}if(N&$){let Be=de;const Pe=de+R*(y-se);for(;Be<=Pe;Be+=Se){const qe=Be+Me;q?fe(u[Be+_],u[qe+_]):Ce(u[Be+_],u[qe+_]),Oe=J.a,u[qe+_]=J.b,u[Be+_]=Oe}}se=$,$>>=1}return de}function pe(u,_,y,R,N,X,U,q,Y){let $=0,se=0;const de=U,Q=Math.trunc(R.value+(N+7)/8);for(;R.value<Q;)for(xe($,se,y,R),$=ge.c,se=ge.lc;se>=14;){const we=$>>se-14&16383,Me=_[we];if(Me.len)se-=Me.len,ot(Me.lit,X,$,se,y,R,q,Y,de),$=Ze.c,se=Ze.lc;else{if(!Me.p)throw new Error("THREE.EXRLoader: hufDecode issues");let Se;for(Se=0;Se<Me.lit;Se++){const Oe=ee(u[Me.p[Se]]);for(;se<Oe&&R.value<Q;)xe($,se,y,R),$=ge.c,se=ge.lc;if(se>=Oe&&j(u[Me.p[Se]])==($>>se-Oe&(1<<Oe)-1)){se-=Oe,ot(Me.p[Se],X,$,se,y,R,q,Y,de),$=Ze.c,se=Ze.lc;break}}if(Se==Me.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const _e=8-N&7;for($>>=_e,se-=_e;se>0;){const we=_[$<<14-se&16383];if(we.len)se-=we.len,ot(we.lit,X,$,se,y,R,q,Y,de),$=Ze.c,se=Ze.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function Te(u,_,y,R,N,X){const U={value:0},q=y.value,Y=be(_,y),$=be(_,y);y.value+=4;const se=be(_,y);if(y.value+=4,Y<0||Y>=65537||$<0||$>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const de=new Array(65537),Q=new Array(16384);A(Q);const _e=R-(y.value-q);if(O(u,y,_e,Y,$,de),se>8*(R-(y.value-q)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");ce(de,Y,$,Q),pe(de,Q,u,y,se,$,X,N,U)}function Ve(u,_,y){for(let R=0;R<y;++R)_[R]=u[_[R]]}function He(u){for(let _=1;_<u.length;_++){const y=u[_-1]+u[_]-128;u[_]=y}}function ze(u,_){let y=0,R=Math.floor((u.length+1)/2),N=0;const X=u.length-1;for(;!(N>X||(_[N++]=u[y++],N>X));)_[N++]=u[R++]}function ke(u){let _=u.byteLength;const y=new Array;let R=0;const N=new DataView(u);for(;_>0;){const X=N.getInt8(R++);if(X<0){const U=-X;_-=U+1;for(let q=0;q<U;q++)y.push(N.getUint8(R++))}else{const U=X;_-=2;const q=N.getUint8(R++);for(let Y=0;Y<U+1;Y++)y.push(q)}}return y}function tt(u,_,y,R,N,X){let U=new DataView(X.buffer);const q=y[u.idx[0]].width,Y=y[u.idx[0]].height,$=3,se=Math.floor(q/8),de=Math.ceil(q/8),Q=Math.ceil(Y/8),_e=q-(de-1)*8,we=Y-(Q-1)*8,Me={value:0},Se=new Array($),Oe=new Array($),ye=new Array($),je=new Array($),Xe=new Array($);for(let Pe=0;Pe<$;++Pe)Xe[Pe]=_[u.idx[Pe]],Se[Pe]=Pe<1?0:Se[Pe-1]+de*Q,Oe[Pe]=new Float32Array(64),ye[Pe]=new Uint16Array(64),je[Pe]=new Uint16Array(de*64);for(let Pe=0;Pe<Q;++Pe){let qe=8;Pe==Q-1&&(qe=we);let xt=8;for(let Ye=0;Ye<de;++Ye){Ye==de-1&&(xt=_e);for(let rt=0;rt<$;++rt)ye[rt].fill(0),ye[rt][0]=N[Se[rt]++],wt(Me,R,ye[rt]),Ot(ye[rt],Oe[rt]),bt(Oe[rt]);Nt(Oe);for(let rt=0;rt<$;++rt)W(Oe[rt],je[rt],Ye*64)}let $e=0;for(let Ye=0;Ye<$;++Ye){const rt=y[u.idx[Ye]].type;for(let st=8*Pe;st<8*Pe+qe;++st){$e=Xe[Ye][st];for(let Bt=0;Bt<se;++Bt){const Mt=Bt*64+(st&7)*8;U.setUint16($e+0*rt,je[Ye][Mt+0],!0),U.setUint16($e+2*rt,je[Ye][Mt+1],!0),U.setUint16($e+4*rt,je[Ye][Mt+2],!0),U.setUint16($e+6*rt,je[Ye][Mt+3],!0),U.setUint16($e+8*rt,je[Ye][Mt+4],!0),U.setUint16($e+10*rt,je[Ye][Mt+5],!0),U.setUint16($e+12*rt,je[Ye][Mt+6],!0),U.setUint16($e+14*rt,je[Ye][Mt+7],!0),$e+=16*rt}}if(se!=de)for(let st=8*Pe;st<8*Pe+qe;++st){const Bt=Xe[Ye][st]+8*se*2*rt,Mt=se*64+(st&7)*8;for(let bn=0;bn<xt;++bn)U.setUint16(Bt+bn*2*rt,je[Ye][Mt+bn],!0)}}}const Be=new Uint16Array(q);U=new DataView(X.buffer);for(let Pe=0;Pe<$;++Pe){y[u.idx[Pe]].decoded=!0;const qe=y[u.idx[Pe]].type;if(y[Pe].type==2)for(let xt=0;xt<Y;++xt){const $e=Xe[Pe][xt];for(let Ye=0;Ye<q;++Ye)Be[Ye]=U.getUint16($e+Ye*2*qe,!0);for(let Ye=0;Ye<q;++Ye)U.setFloat32($e+Ye*2*qe,ne(Be[Ye]),!0)}}}function ut(u,_,y,R,N,X){const U=new DataView(X.buffer),q=y[u],Y=q.width,$=q.height,se=Math.ceil(Y/8),de=Math.ceil($/8),Q=Math.floor(Y/8),_e=Y-(se-1)*8,we=$-(de-1)*8,Me={value:0};let Se=0;const Oe=new Float32Array(64),ye=new Uint16Array(64),je=new Uint16Array(se*64);for(let Xe=0;Xe<de;++Xe){let Be=8;Xe==de-1&&(Be=we);for(let Pe=0;Pe<se;++Pe)ye.fill(0),ye[0]=N[Se++],wt(Me,R,ye),Ot(ye,Oe),bt(Oe),W(Oe,je,Pe*64);for(let Pe=8*Xe;Pe<8*Xe+Be;++Pe){let qe=_[u][Pe];for(let xt=0;xt<Q;++xt){const $e=xt*64+(Pe&7)*8;for(let Ye=0;Ye<8;++Ye)U.setUint16(qe+Ye*2*q.type,je[$e+Ye],!0);qe+=16*q.type}if(se!=Q){const xt=Q*64+(Pe&7)*8;for(let $e=0;$e<_e;++$e)U.setUint16(qe+$e*2*q.type,je[xt+$e],!0)}}}q.decoded=!0}function wt(u,_,y){let R,N=1;for(;N<64;)R=_[u.value],R==65280?N=64:R>>8==255?N+=R&255:(y[N]=R,N++),u.value++}function Ot(u,_){_[0]=ne(u[0]),_[1]=ne(u[1]),_[2]=ne(u[5]),_[3]=ne(u[6]),_[4]=ne(u[14]),_[5]=ne(u[15]),_[6]=ne(u[27]),_[7]=ne(u[28]),_[8]=ne(u[2]),_[9]=ne(u[4]),_[10]=ne(u[7]),_[11]=ne(u[13]),_[12]=ne(u[16]),_[13]=ne(u[26]),_[14]=ne(u[29]),_[15]=ne(u[42]),_[16]=ne(u[3]),_[17]=ne(u[8]),_[18]=ne(u[12]),_[19]=ne(u[17]),_[20]=ne(u[25]),_[21]=ne(u[30]),_[22]=ne(u[41]),_[23]=ne(u[43]),_[24]=ne(u[9]),_[25]=ne(u[11]),_[26]=ne(u[18]),_[27]=ne(u[24]),_[28]=ne(u[31]),_[29]=ne(u[40]),_[30]=ne(u[44]),_[31]=ne(u[53]),_[32]=ne(u[10]),_[33]=ne(u[19]),_[34]=ne(u[23]),_[35]=ne(u[32]),_[36]=ne(u[39]),_[37]=ne(u[45]),_[38]=ne(u[52]),_[39]=ne(u[54]),_[40]=ne(u[20]),_[41]=ne(u[22]),_[42]=ne(u[33]),_[43]=ne(u[38]),_[44]=ne(u[46]),_[45]=ne(u[51]),_[46]=ne(u[55]),_[47]=ne(u[60]),_[48]=ne(u[21]),_[49]=ne(u[34]),_[50]=ne(u[37]),_[51]=ne(u[47]),_[52]=ne(u[50]),_[53]=ne(u[56]),_[54]=ne(u[59]),_[55]=ne(u[61]),_[56]=ne(u[35]),_[57]=ne(u[36]),_[58]=ne(u[48]),_[59]=ne(u[49]),_[60]=ne(u[57]),_[61]=ne(u[58]),_[62]=ne(u[62]),_[63]=ne(u[63])}function bt(u){const _=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),N=.5*Math.cos(3*3.14159/16),X=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),Y=new Array(4),$=new Array(4),se=new Array(4),de=new Array(4);for(let Q=0;Q<8;++Q){const _e=Q*8;Y[0]=R*u[_e+2],Y[1]=U*u[_e+2],Y[2]=R*u[_e+6],Y[3]=U*u[_e+6],$[0]=y*u[_e+1]+N*u[_e+3]+X*u[_e+5]+q*u[_e+7],$[1]=N*u[_e+1]-q*u[_e+3]-y*u[_e+5]-X*u[_e+7],$[2]=X*u[_e+1]-y*u[_e+3]+q*u[_e+5]+N*u[_e+7],$[3]=q*u[_e+1]-X*u[_e+3]+N*u[_e+5]-y*u[_e+7],se[0]=_*(u[_e+0]+u[_e+4]),se[3]=_*(u[_e+0]-u[_e+4]),se[1]=Y[0]+Y[3],se[2]=Y[1]-Y[2],de[0]=se[0]+se[1],de[1]=se[3]+se[2],de[2]=se[3]-se[2],de[3]=se[0]-se[1],u[_e+0]=de[0]+$[0],u[_e+1]=de[1]+$[1],u[_e+2]=de[2]+$[2],u[_e+3]=de[3]+$[3],u[_e+4]=de[3]-$[3],u[_e+5]=de[2]-$[2],u[_e+6]=de[1]-$[1],u[_e+7]=de[0]-$[0]}for(let Q=0;Q<8;++Q)Y[0]=R*u[16+Q],Y[1]=U*u[16+Q],Y[2]=R*u[48+Q],Y[3]=U*u[48+Q],$[0]=y*u[8+Q]+N*u[24+Q]+X*u[40+Q]+q*u[56+Q],$[1]=N*u[8+Q]-q*u[24+Q]-y*u[40+Q]-X*u[56+Q],$[2]=X*u[8+Q]-y*u[24+Q]+q*u[40+Q]+N*u[56+Q],$[3]=q*u[8+Q]-X*u[24+Q]+N*u[40+Q]-y*u[56+Q],se[0]=_*(u[Q]+u[32+Q]),se[3]=_*(u[Q]-u[32+Q]),se[1]=Y[0]+Y[3],se[2]=Y[1]-Y[2],de[0]=se[0]+se[1],de[1]=se[3]+se[2],de[2]=se[3]-se[2],de[3]=se[0]-se[1],u[0+Q]=de[0]+$[0],u[8+Q]=de[1]+$[1],u[16+Q]=de[2]+$[2],u[24+Q]=de[3]+$[3],u[32+Q]=de[3]-$[3],u[40+Q]=de[2]-$[2],u[48+Q]=de[1]-$[1],u[56+Q]=de[0]-$[0]}function Nt(u){for(let _=0;_<64;++_){const y=u[0][_],R=u[1][_],N=u[2][_];u[0][_]=y+1.5747*N,u[1][_]=y-.1873*R-.4682*N,u[2][_]=y+1.8556*R}}function W(u,_,y){for(let R=0;R<64;++R)_[y+R]=ki.toHalfFloat(Yt(u[R]))}function Yt(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(L,Math.abs(u)-1)}function dt(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function F(u){const _=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(ke(_)),R=new Uint8Array(y.length);return He(y),ze(y,R),new DataView(R.buffer)}function b(u){const _=u.array.slice(u.offset.value,u.offset.value+u.size),y=mr(_),R=new Uint8Array(y.length);return He(y),ze(y,R),new DataView(R.buffer)}function Z(u){const _=u.viewer,y={value:u.offset.value},R=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),N=new Uint8Array(8192);let X=0;const U=new Array(u.inputChannels.length);for(let we=0,Me=u.inputChannels.length;we<Me;we++)U[we]={},U[we].start=X,U[we].end=U[we].start,U[we].nx=u.columns,U[we].ny=u.lines,U[we].size=u.type,X+=U[we].nx*U[we].ny*U[we].size;const q=he(_,y),Y=he(_,y);if(Y>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=Y)for(let we=0;we<Y-q+1;we++)N[we+q]=We(_,y);const $=new Uint16Array(65536),se=w(N,$),de=be(_,y);Te(u.array,_,y,de,R,X);for(let we=0;we<u.inputChannels.length;++we){const Me=U[we];for(let Se=0;Se<U[we].size;++Se)Ee(R,Me.start+Se,Me.nx,Me.size,Me.ny,Me.nx*Me.size,se)}Ve($,R,X);let Q=0;const _e=new Uint8Array(R.buffer.byteLength);for(let we=0;we<u.lines;we++)for(let Me=0;Me<u.inputChannels.length;Me++){const Se=U[Me],Oe=Se.nx*Se.size,ye=new Uint8Array(R.buffer,Se.end*2,Oe*2);_e.set(ye,Q),Q+=Oe*2,Se.end+=Oe}return new DataView(_e.buffer)}function ie(u){const _=u.array.slice(u.offset.value,u.offset.value+u.size),y=mr(_),R=u.inputChannels.length*u.lines*u.columns*u.totalBytes,N=new ArrayBuffer(R),X=new DataView(N);let U=0,q=0;const Y=new Array(4);for(let $=0;$<u.lines;$++)for(let se=0;se<u.inputChannels.length;se++){let de=0;switch(u.inputChannels[se].pixelType){case 1:Y[0]=U,Y[1]=Y[0]+u.columns,U=Y[1]+u.columns;for(let _e=0;_e<u.columns;++_e){const we=y[Y[0]++]<<8|y[Y[1]++];de+=we,X.setUint16(q,de,!0),q+=2}break;case 2:Y[0]=U,Y[1]=Y[0]+u.columns,Y[2]=Y[1]+u.columns,U=Y[2]+u.columns;for(let _e=0;_e<u.columns;++_e){const we=y[Y[0]++]<<24|y[Y[1]++]<<16|y[Y[2]++]<<8;de+=we,X.setUint32(q,de,!0),q+=4}break}}return X}function ue(u){const _=u.array;let y=u.offset.value;const R=u.columns,N=u.lines,X=u.inputChannels,U=u.totalBytes,q=rn.compression==="B44A_COMPRESSION",Y=new Uint8Array(N*R*U),$=new Uint16Array(16);let se=0;for(let de=0;de<X.length;de++){const Q=X[de],_e=Q.pixelType*2,we=Math.ceil(R/Q.xSampling),Me=Math.ceil(N/Q.ySampling),Se=Q.xSampling===1&&Q.ySampling===1;if(Q.pixelType!==1){for(let je=0;je<Me;je++)if(Se){const Xe=je*R*U+se*R;for(let Be=0;Be<we*_e;Be++)Y[Xe+Be]=_[y++]}else y+=we*_e;se+=_e;continue}const Oe=Math.ceil(we/4),ye=Math.ceil(Me/4);for(let je=0;je<ye;je++)for(let Xe=0;Xe<Oe;Xe++){if(q&&_[y+2]>=52){const Be=_[y]<<8|_[y+1],Pe=Be&32768?Be&32767:~Be&65535;$.fill(Pe),y+=3}else{const Be=_[y]<<8|_[y+1],Pe=_[y+2]>>2,qe=32<<Pe,xt=Be+((_[y+2]<<4|_[y+3]>>4)&63)*(1<<Pe)-qe&65535,$e=xt+((_[y+3]<<2|_[y+4]>>6)&63)*(1<<Pe)-qe&65535,Ye=$e+(_[y+4]&63)*(1<<Pe)-qe&65535,rt=Be+(_[y+5]>>2&63)*(1<<Pe)-qe&65535,st=xt+((_[y+5]<<4|_[y+6]>>4)&63)*(1<<Pe)-qe&65535,Bt=$e+((_[y+6]<<2|_[y+7]>>6)&63)*(1<<Pe)-qe&65535,Mt=Ye+(_[y+7]&63)*(1<<Pe)-qe&65535,bn=rt+(_[y+8]>>2&63)*(1<<Pe)-qe&65535,os=st+((_[y+8]<<4|_[y+9]>>4)&63)*(1<<Pe)-qe&65535,js=Bt+((_[y+9]<<2|_[y+10]>>6)&63)*(1<<Pe)-qe&65535,Kn=Mt+(_[y+10]&63)*(1<<Pe)-qe&65535,Oi=bn+(_[y+11]>>2&63)*(1<<Pe)-qe&65535,$r=os+((_[y+11]<<4|_[y+12]>>4)&63)*(1<<Pe)-qe&65535,Jr=js+((_[y+12]<<2|_[y+13]>>6)&63)*(1<<Pe)-qe&65535,Qr=Kn+(_[y+13]&63)*(1<<Pe)-qe&65535,er=[Be,rt,bn,Oi,xt,st,os,$r,$e,Bt,js,Jr,Ye,Mt,Kn,Qr];for(let ls=0;ls<16;ls++)$[ls]=er[ls]&32768?er[ls]&32767:~er[ls]&65535;y+=14}if(Q.pLinear){if(v===null){v=new Uint16Array(65536);for(let Be=0;Be<65536;Be++)if((Be&31744)===31744||Be>32768)v[Be]=0;else{const Pe=ne(Be);v[Be]=Pe<=0?0:ki.toHalfFloat(8*Math.log(Pe))}}for(let Be=0;Be<16;Be++)$[Be]=v[$[Be]]}for(let Be=0;Be<4;Be++){const Pe=je*4+Be;if(!(Pe>=Me))for(let qe=0;qe<4;qe++){const xt=Xe*4+qe;if(xt>=we)continue;const $e=$[Be*4+qe];for(let Ye=0;Ye<Q.ySampling;Ye++){const rt=Pe*Q.ySampling+Ye;if(!(rt>=N))for(let st=0;st<Q.xSampling;st++){const Bt=xt*Q.xSampling+st;if(Bt>=R)continue;const Mt=rt*R*U+se*R+Bt*2;Y[Mt]=$e&255,Y[Mt+1]=$e>>8&255}}}}}se+=2}return new DataView(Y.buffer)}function oe(u){const _=u.viewer,y={value:u.offset.value},R=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),N={version:Ne(_,y),unknownUncompressedSize:Ne(_,y),unknownCompressedSize:Ne(_,y),acCompressedSize:Ne(_,y),dcCompressedSize:Ne(_,y),rleCompressedSize:Ne(_,y),rleUncompressedSize:Ne(_,y),rleRawSize:Ne(_,y),totalAcUncompressedCount:Ne(_,y),totalDcUncompressedCount:Ne(_,y),acCompression:Ne(_,y)};if(N.version<2)throw new Error("THREE.EXRLoader: "+rn.compression+" version "+N.version+" is unsupported");const X=new Array;let U=he(_,y)-2;for(;U>0;){const Me=me(_.buffer,y),Se=We(_,y),Oe=Se>>2&3,ye=(Se>>4)-1,je=new Int8Array([ye])[0],Xe=We(_,y);X.push({name:Me,index:je,type:Xe,compression:Oe}),U-=Me.length+3}const q=rn.channels,Y=new Array(u.inputChannels.length);for(let Me=0;Me<u.inputChannels.length;++Me){const Se=Y[Me]={},Oe=q[Me];Se.name=Oe.name,Se.compression=0,Se.decoded=!1,Se.type=Oe.pixelType,Se.pLinear=Oe.pLinear,Se.width=u.columns,Se.height=u.lines}const $={idx:new Array(3)};for(let Me=0;Me<u.inputChannels.length;++Me){const Se=Y[Me],Oe=Se.name.lastIndexOf("."),ye=Oe>=0?Se.name.substring(Oe+1):Se.name;for(let je=0;je<X.length;++je){const Xe=X[je];ye===Xe.name&&Se.type===Xe.type&&(Se.compression=Xe.compression,Xe.index>=0&&($.idx[Xe.index]=Me),Se.offset=Me)}}let se,de,Q;if(N.acCompressedSize>0)switch(N.acCompression){case 0:se=new Uint16Array(N.totalAcUncompressedCount),Te(u.array,_,y,N.acCompressedSize,se,N.totalAcUncompressedCount);break;case 1:const Me=u.array.slice(y.value,y.value+N.totalAcUncompressedCount),Se=mr(Me);se=new Uint16Array(Se.buffer),y.value+=N.totalAcUncompressedCount;break}if(N.dcCompressedSize>0){const Me={array:u.array,offset:y,size:N.dcCompressedSize};de=new Uint16Array(b(Me).buffer),y.value+=N.dcCompressedSize}if(N.rleRawSize>0){const Me=u.array.slice(y.value,y.value+N.rleCompressedSize),Se=mr(Me);Q=ke(Se.buffer),y.value+=N.rleCompressedSize}let _e=0;const we=new Array(Y.length);for(let Me=0;Me<we.length;++Me)we[Me]=new Array;for(let Me=0;Me<u.lines;++Me)for(let Se=0;Se<Y.length;++Se)we[Se].push(_e),_e+=Y[Se].width*u.type*2;$.idx[0]!==void 0&&Y[$.idx[0]]&&tt($,we,Y,se,de,R);for(let Me=0;Me<Y.length;++Me){const Se=Y[Me];if(!Se.decoded)switch(Se.compression){case 2:let Oe=0,ye=0;for(let je=0;je<u.lines;++je){let Xe=we[Me][Oe];for(let Be=0;Be<Se.width;++Be){for(let Pe=0;Pe<2*Se.type;++Pe)R[Xe++]=Q[ye+Pe*Se.width*Se.height];ye++}Oe++}break;case 1:ut(Me,we,Y,se,de,R);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(R.buffer)}function me(u,_){const y=new Uint8Array(u);let R=0;for(;y[_.value+R]!=0;)R+=1;const N=new TextDecoder().decode(y.slice(_.value,_.value+R));return _.value=_.value+R+1,N}function re(u,_,y){const R=new TextDecoder().decode(new Uint8Array(u).slice(_.value,_.value+y));return _.value=_.value+y,R}function ae(u,_){const y=Ie(u,_),R=be(u,_);return[y,R]}function Ae(u,_){const y=be(u,_),R=be(u,_);return[y,R]}function Ie(u,_){const y=u.getInt32(_.value,!0);return _.value=_.value+4,y}function be(u,_){const y=u.getUint32(_.value,!0);return _.value=_.value+4,y}function Re(u,_){const y=u[_.value];return _.value=_.value+1,y}function We(u,_){const y=u.getUint8(_.value);return _.value=_.value+1,y}const Ne=function(u,_){const y=Number(u.getBigInt64(_.value,!0));return _.value+=8,y};function De(u,_){const y=u.getFloat32(_.value,!0);return _.value+=4,y}function G(u,_){return ki.toHalfFloat(De(u,_))}function ne(u){const _=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(_?_===31?y?NaN:1/0:Math.pow(2,_-15)*(1+y/1024):6103515625e-14*(y/1024))}function he(u,_){const y=u.getUint16(_.value,!0);return _.value+=2,y}function Le(u,_){return ne(he(u,_))}function Fe(u,_,y,R){const N=y.value,X=[];for(;y.value<N+R-1;){const U=me(_,y),q=Ie(u,y),Y=We(u,y);y.value+=3;const $=Ie(u,y),se=Ie(u,y);X.push({name:U,pixelType:q,pLinear:Y,xSampling:$,ySampling:se})}return y.value+=1,X}function ve(u,_){const y=De(u,_),R=De(u,_),N=De(u,_),X=De(u,_),U=De(u,_),q=De(u,_),Y=De(u,_),$=De(u,_);return{redX:y,redY:R,greenX:N,greenY:X,blueX:U,blueY:q,whiteX:Y,whiteY:$}}function Qe(u,_){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=We(u,_);return y[R]}function Ke(u,_){const y=Ie(u,_),R=Ie(u,_),N=Ie(u,_),X=Ie(u,_);return{xMin:y,yMin:R,xMax:N,yMax:X}}function Dt(u,_){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=We(u,_);return y[R]}function At(u,_){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=We(u,_);return y[R]}function Pn(u,_){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],N=be(u,_),X=be(u,_),U=We(u,_);return{xSize:N,ySize:X,levelMode:y[U&15],roundingMode:R[U>>4]}}function In(u,_){const y=De(u,_),R=De(u,_);return[y,R]}function lo(u,_){const y=De(u,_),R=De(u,_),N=De(u,_);return[y,R,N]}function co(u,_,y,R,N){if(R==="string"||R==="stringvector"||R==="iccProfile")return re(_,y,N);if(R==="chlist")return Fe(u,_,y,N);if(R==="chromaticities")return ve(u,y);if(R==="compression")return Qe(u,y);if(R==="box2i")return Ke(u,y);if(R==="envmap")return At(u,y);if(R==="tiledesc")return Pn(u,y);if(R==="lineOrder")return Dt(u,y);if(R==="float")return De(u,y);if(R==="v2f")return In(u,y);if(R==="v3f")return lo(u,y);if(R==="int")return Ie(u,y);if(R==="rational")return ae(u,y);if(R==="timecode")return Ae(u,y);if(R==="preview"||R==="deepImageState"||R==="idmanifest")return y.value+=N,"skipped";y.value+=N}function Gr(u,_){const y=Math.log2(u);return _=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Js(u,_,y){let R=0;switch(u.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Gr(Math.max(_,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Vr(u,_,y,R){const N=new Array(u);for(let X=0;X<u;X++){const U=1<<X;let q=_/U|0;R=="ROUND_UP"&&q*U<_&&(q+=1);const Y=Math.max(q,1);N[X]=(Y+y-1)/y|0}return N}function Wr(){const u=this,_=u.offset,y={value:0};for(let R=0;R<u.tileCount;R++){const N=Ie(u.viewer,_),X=Ie(u.viewer,_);_.value+=8,u.size=be(u.viewer,_);const U=N*u.blockWidth,q=X*u.blockHeight;u.columns=U+u.blockWidth>u.width?u.width-U:u.blockWidth,u.lines=q+u.blockHeight>u.height?u.height-q:u.blockHeight;const Y=u.columns*u.totalBytes,se=u.size<u.lines*Y?u.uncompress(u):dt(u);_.value+=u.size;for(let de=0;de<u.lines;de++){const Q=de*u.columns*u.totalBytes;for(let _e=0;_e<u.inputChannels.length;_e++){const we=rn.channels[_e].name,Me=u.channelByteOffsets[we]*u.columns,Se=u.decodeChannels[we];if(Se===void 0)continue;y.value=Q+Me;const Oe=(u.height-(1+q+de))*u.outLineWidth;for(let ye=0;ye<u.columns;ye++){const je=Oe+(ye+U)*u.outputChannels+Se;u.byteArray[je]=u.getter(se,y)}}}}}function Xr(){const u=this,_=u.offset,y={value:0};for(let R=0;R<u.height/u.blockHeight;R++){const N=Ie(u.viewer,_)-rn.dataWindow.yMin;u.size=be(u.viewer,_),u.lines=N+u.blockHeight>u.height?u.height-N:u.blockHeight;const X=u.columns*u.totalBytes,q=u.size<u.lines*X?u.uncompress(u):dt(u);_.value+=u.size;for(let Y=0;Y<u.lines;Y++){const $=N+Y,se=Y*X,de=(u.height-1-$)*u.outLineWidth;for(let Q=0;Q<u.inputChannels.length;Q++){const _e=rn.channels[Q].name,we=u.channelByteOffsets[_e]*u.columns,Me=u.decodeChannels[_e];if(Me!==void 0){y.value=se+we;for(let Se=0;Se<u.columns;Se++){const Oe=de+Se*u.outputChannels+Me;u.byteArray[Oe]=u.getter(q,y)}}}}}}function oi(){const u=this,_=u.chunkOffsets,y={value:0};for(let R=0;R<_.length;R++){const N={value:_[R]};N.value+=4;const X=Ie(u.viewer,N)-rn.dataWindow.yMin;u.size=be(u.viewer,N),u.lines=X+u.blockHeight>u.height?u.height-X:u.blockHeight;const U=u.columns*u.totalBytes,q=u.size<u.lines*U,Y=u.offset;u.offset=N;const $=q?u.uncompress(u):dt(u);u.offset=Y;for(let se=0;se<u.lines;se++){const de=X+se,Q=se*U,_e=(u.height-1-de)*u.outLineWidth;for(let we=0;we<u.inputChannels.length;we++){const Me=rn.channels[we].name,Se=u.channelByteOffsets[Me]*u.columns,Oe=u.decodeChannels[Me];if(Oe!==void 0){y.value=Q+Se;for(let ye=0;ye<u.columns;ye++){const je=_e+ye*u.outputChannels+Oe;u.byteArray[je]=u.getter($,y)}}}}}}function ss(u,_,y,R){if(y===0)return null;const N=u.slice(_,_+y);switch(R){case"NO_COMPRESSION":return new DataView(N.buffer,N.byteOffset,N.byteLength);case"RLE_COMPRESSION":{const X=new Uint8Array(ke(N.buffer.slice(N.byteOffset,N.byteOffset+N.byteLength))),U=new Uint8Array(X.length);return He(X),ze(X,U),new DataView(U.buffer)}case"ZIPS_COMPRESSION":{const X=mr(N),U=new Uint8Array(X.length);return He(X),ze(X,U),new DataView(U.buffer)}default:throw new Error("THREE.EXRLoader: "+R+" is unsupported for deep data")}}function qr(){const u=this,_=u.chunkOffsets,y=u.width,R=u.height,N=u.deepChannels,X=rn.compression,U=u.multiPart,q=u.decodeChannels,Y=u.outputChannels,$=u.byteArray instanceof Uint16Array;let se=-1;for(let de=0;de<N.length;de++)if(N[de].name==="A"){se=de;break}for(let de=0;de<_.length;de++){const Q={value:_[de]};U&&(Q.value+=4);const _e=Ie(u.viewer,Q)-rn.dataWindow.yMin,we=Ne(u.viewer,Q),Me=Ne(u.viewer,Q);Ne(u.viewer,Q);const Se=ss(u.array,Q.value,we,X);if(Q.value+=we,Se===null)continue;const Oe=new Uint32Array(y);for(let qe=0;qe<y;qe++)Oe[qe]=Se.getUint32(qe*4,!0);const ye=Oe[y-1];if(ye===0){Q.value+=Me;continue}const je=ss(u.array,Q.value,Me,X),Xe=[];let Be=0;for(let qe=0;qe<N.length;qe++)Xe.push(Be),Be+=ye*N[qe].bytesPerSample;const Pe=(R-1-_e)*u.outLineWidth;for(let qe=0;qe<y;qe++){const xt=qe===0?0:Oe[qe-1],Ye=Oe[qe]-xt;if(Ye===0)continue;const rt=new Float32Array(Y);let st=0;for(let Mt=0;Mt<Ye;Mt++){const bn=xt+Mt,os=1-st;if(os<=0)break;let js=1;if(se>=0){const Kn=N[se].bytesPerSample,Oi=Xe[se]+bn*Kn;js=Kn===2?ne(je.getUint16(Oi,!0)):je.getFloat32(Oi,!0)}for(let Kn=0;Kn<N.length;Kn++){const Oi=N[Kn],$r=q[Oi.name];if($r===void 0)continue;const Jr=Oi.bytesPerSample,Qr=Xe[Kn]+bn*Jr,er=Jr===2?ne(je.getUint16(Qr,!0)):je.getFloat32(Qr,!0);rt[$r]+=er*os}st+=js*os}q.A!==void 0&&(rt[q.A]=st);const Bt=Pe+qe*Y;for(let Mt=0;Mt<Y;Mt++)u.byteArray[Bt+Mt]=$?ki.toHalfFloat(rt[Mt]):rt[Mt]}}}function Qs(u,_,y){const R={};let N=!1;for(;;){const X=me(_,y);if(X==="")break;N=!0;const U=me(_,y),q=be(u,y),Y=co(u,_,y,U,q);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):R[X]=Y}return N?R:null}function rs(u,_,y){if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const R=u.getUint8(4),N=u.getUint8(5),X={singleTile:!!(N&2),longName:!!(N&4),deepFormat:!!(N&8),multiPart:!!(N&16)};y.value=8;const U=[];if(X.multiPart){for(;;){const q=Qs(u,_,y);if(q===null)break;q.version=R,q.spec=X,U.push(q)}if(U.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const q=Qs(u,_,y);q.version=R,q.spec=X,U.push(q)}return U}function Yr(u,_,y,R,N,X){const U={size:0,viewer:_,array:y,offset:R,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:qt};switch(u.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=dt;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=F;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=b;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=b;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=Z;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=ie;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":U.blockHeight=32,U.uncompress=ue;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=oe;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=oe;break;default:throw new Error("THREE.EXRLoader: "+u.compression+" is unsupported")}const q={};for(const Q of u.channels)switch(Q.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":q[Q.name]=!0,U.type=Q.pixelType}let Y=!1,$=!1;if(q.Y&&q.RY&&q.BY)U.outputChannels=4,U.yCbCr=!0;else if(q.R&&q.G&&q.B)U.outputChannels=4;else if(q.Y)U.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(U.outputChannels){case 4:X==Jt?(Y=!q.A,U.format=Jt,U.colorSpace=qt,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3}):X==Dn?(U.format=Dn,U.colorSpace=qt,U.outputChannels=2,U.decodeChannels={R:0,G:1}):X==Zi?(U.format=Zi,U.colorSpace=qt,U.outputChannels=1,U.decodeChannels={R:0}):$=!0;break;case 1:X==Jt?(Y=!0,U.format=Jt,U.colorSpace=qt,U.outputChannels=4,U.shouldExpand=!0,U.decodeChannels={Y:0}):X==Dn?(U.format=Dn,U.colorSpace=qt,U.outputChannels=2,U.shouldExpand=!0,U.decodeChannels={Y:0}):X==Zi?(U.format=Zi,U.colorSpace=qt,U.outputChannels=1,U.decodeChannels={Y:0}):$=!0;break;default:$=!0}if($)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(U.yCbCr&&(U.format=Jt,U.outputChannels=4,U.decodeChannels={Y:0,RY:1,BY:2},Y=!0),U.type==1)switch(N){case _n:U.getter=Le;break;case on:U.getter=he;break}else if(U.type==2)switch(N){case _n:U.getter=De;break;case on:U.getter=G}else throw new Error("THREE.EXRLoader: unsupported pixelType "+U.type+" for "+u.compression+".");U.columns=U.width;const se=U.width*U.height*U.outputChannels;switch(N){case _n:U.byteArray=new Float32Array(se),Y&&U.byteArray.fill(1,0,se);break;case on:U.byteArray=new Uint16Array(se),Y&&U.byteArray.fill(15360,0,se);break;default:console.error("THREE.EXRLoader: unsupported type: ",N);break}let de=0;for(const Q of u.channels)U.decodeChannels[Q.name]!==void 0&&(U.channelByteOffsets[Q.name]=de),de+=Q.pixelType*2;if(U.totalBytes=de,U.outLineWidth=U.width*U.outputChannels,u.spec.deepFormat){U.deepChannels=[];let Q=0;for(const _e of u.channels){const we=_e.pixelType===0?4:_e.pixelType*2;U.deepChannels.push({name:_e.name,pixelType:_e.pixelType,bytesPerSample:we}),Q+=we}U.deepBytesPerSample=Q,U.chunkOffsets=u._chunkOffsets,U.multiPart=u.spec.multiPart,U.decode=qr.bind(U)}else if(u.spec.singleTile){U.blockHeight=u.tiles.ySize,U.blockWidth=u.tiles.xSize;const Q=Js(u.tiles,U.width,U.height),_e=Vr(Q,U.width,u.tiles.xSize,u.tiles.roundingMode),we=Vr(Q,U.height,u.tiles.ySize,u.tiles.roundingMode);U.tileCount=_e[0]*we[0];for(let Me=0;Me<Q;Me++)for(let Se=0;Se<we[Me];Se++)for(let Oe=0;Oe<_e[Me];Oe++)Ne(_,R);U.decode=Wr.bind(U)}else if(u.spec.multiPart)U.blockWidth=U.width,U.chunkOffsets=u._chunkOffsets,U.decode=oi.bind(U);else{U.blockWidth=U.width;const Q=Math.ceil(U.height/U.blockHeight);for(let _e=0;_e<Q;_e++)Ne(_,R);U.decode=Xr.bind(U)}return U}const li={value:0},Fi=new DataView(e),Kr=new Uint8Array(e),as=rs(Fi,e,li),Zr=Math.max(0,Math.min(this.part,as.length-1)),rn=as[Zr];if(rn.spec.multiPart||rn.spec.deepFormat)for(let u=0;u<as.length;u++){const _=as[u].chunkCount;if(u===Zr){rn._chunkOffsets=[];for(let y=0;y<_;y++)rn._chunkOffsets.push(Ne(Fi,li))}else for(let y=0;y<_;y++)Ne(Fi,li)}const xn=Yr(rn,Fi,Kr,li,this.type,this.outputFormat);if(xn.decode(),xn.shouldExpand){const u=xn.byteArray;if(this.outputFormat==Jt)for(let _=0;_<u.length;_+=4)u[_+2]=u[_+1]=u[_];else if(this.outputFormat==Dn)for(let _=0;_<u.length;_+=2)u[_+1]=u[_]}if(xn.yCbCr){const u=xn.byteArray,_=xn.width*xn.height;if(this.type===on)for(let y=0;y<_;y++){const R=y*4,N=ne(u[R]),X=ne(u[R+1]),U=ne(u[R+2]),q=(1+X)*N,Y=(1+U)*N,$=(N-q*.2126-Y*.0722)/.7152;u[R]=ki.toHalfFloat(Math.max(0,q)),u[R+1]=ki.toHalfFloat(Math.max(0,$)),u[R+2]=ki.toHalfFloat(Math.max(0,Y))}else for(let y=0;y<_;y++){const R=y*4,N=u[R],X=u[R+1],U=u[R+2],q=(1+X)*N,Y=(1+U)*N;u[R]=Math.max(0,q),u[R+1]=Math.max(0,(N-q*.2126-Y*.0722)/.7152),u[R+2]=Math.max(0,Y)}}return{header:rn,width:xn.width,height:xn.height,data:xn.byteArray,format:xn.format,colorSpace:xn.colorSpace,type:this.type,minFilter:Ut,magFilter:Ut,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const jl="/game-assets",ph=["Diffuse","nor_gl","arm"],mh=["pine_bark","forest_ground_04","rocky_trail"],gh=["fern_02","dead_tree_trunk","boulder_01","gate_latch_01","large_iron_gate","Barrel_02","CheeseBox_01","ladder_sectioned_01"],jv=`${jl}/hdri/je_gray_02_1k.exr`;function eM(i){const e=new iv,t=new Qv,n=new Qh;let s=0;const r=mh.length*ph.length+gh.length+1,a=()=>{s+=1,i?.(s/r)},o={},l={};let c=null;const f=(x,T)=>new Promise(g=>{const m=`${jl}/textures/${x}/${x}_${T}_1k.jpg`;n.load(m,S=>{S.wrapS=S.wrapT=Di,T==="Diffuse"&&(S.colorSpace=Xt),o[`${x}_${T}`]=S,a(),g(S)},void 0,()=>{a(),g(null)})}),h=x=>new Promise(T=>{const g=`${jl}/models/${x}`;e.load(`${g}/${x}_1k.gltf`,m=>{l[x]=m.scene,a(),T(m.scene)},void 0,()=>{a(),T(null)})}),d=()=>new Promise(x=>{t.load(jv,T=>{T.mapping=Da,c=T,a(),x(T)},void 0,()=>{a(),x(null)})});async function p(){const x=[];for(const T of mh)for(const g of ph)x.push(f(T,g));for(const T of gh)x.push(h(T));return x.push(d()),await Promise.all(x),{textures:o,models:l,hdri:c}}return{loadAll:p}}function Qo(i,e,t={}){return new ns({map:i[`${e}_Diffuse`]||null,normalMap:i[`${e}_nor_gl`]||null,roughnessMap:i[`${e}_arm`]||null,metalnessMap:i[`${e}_arm`]||null,roughness:1,metalness:1,...t})}function Ic(i){let e=i>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ia(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const _h=i=>i*i*(3-2*i);function tM(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=_h(i-n),a=_h(e-s),o=Ia(n,s,t),l=Ia(n+1,s,t),c=Ia(n,s+1,t),f=Ia(n+1,s+1,t);return o+(l-o)*r+(c+(f-c)*r-(o+(l-o)*r))*a}function ec(i,e,t,n=3){let s=0,r=1,a=1,o=0;for(let l=0;l<n;l++)s+=tM(i*a,e*a,t+l*1013)*r,o+=r,r*=.5,a*=2.07;return s/o}function nM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const xh="BCDFGHJKLMNPQRSTVWXZ";function iM(i,e=4){let t="";for(let n=0;n<e;n++)t+=xh[Math.floor(i()*xh.length)];return t}const sM=20,jo=1/sM,Mf=20,Ft={half:118,fence:120,treeCount:1500,rockCount:220,bushCount:900,terrainAmp:3.6,terrainScale:.017},Kt={eye:1.68,radius:.33,walk:3.5,run:6.4,crouchMul:.45,staminaMax:150,staminaDrain:12,staminaRegen:15,staminaFloor:30,reviveTime:4,downTime:45,pickupRange:4.5},Sr={triggerDist:20,rise:1.15,fall:.3,speedBonus:.32,staminaBonus:70,drainMul:1.6,fovBonus:9},Gt={range:100,angle:.55,focusAngle:.22,focusRange:140},wn={max:100,darkGain:.9,lightRecover:1.6,stareGain:16,proximityGain:7,altoProximityRange:26,altoProximityGain:19},Gn={alto:{killRange:2.4,stareRange:55,teleportCooldown:3.8,minSpawnDist:26,maxSpawnDist:46,closeInStep:3.6},jauria:{count:3,patrolSpeed:2,chaseSpeed:5.9,hearRange:38,sightRange:20,sightAngle:1.15,attackRange:1.5,lightRepelRange:24,lightRepelTime:2.8},ciego:{count:1,patrolSpeed:.95,chaseSpeed:3.9,hearRange:62,attackRange:2.2,roarCooldown:14,smellRange:15,smellCool:11}},mi={walk:7,run:27,crouch:2,pickup:16,ping:55,revive:12,roar:90,scream:70},Mn={beacons:8,maxPlayers:6,extractionTime:90,roomCodeLength:4},Zt={LOBBY:"lobby",HUNT:"hunt",EXTRACTION:"extraction",ESCAPED:"escaped",WIPED:"wiped"},Cs=[{key:"torre",name:"Torre del guardabosques"},{key:"caravana",name:"Caravana volcada"},{key:"piedras",name:"Círculo de piedras"},{key:"caseta",name:"Caseta de bombeo"},{key:"tuberia",name:"Tubería de drenaje"},{key:"camion",name:"Camión abandonado"},{key:"puente",name:"Puente de tablones"},{key:"porton",name:"Portón de la valla"}],Va={nightAtBeacon:3,transitionTime:6},Ls=Math.PI*2,rM={torre:[[-2.2,-2.2,.32],[2.2,-2.2,.32],[-2.2,2.2,.32],[2.2,2.2,.32]],caravana:[[-2.1,0,1.5],[0,0,1.5],[2.1,0,1.5]],caseta:[[0,0,2.3]],camion:[[-2.6,0,1.5],[.2,0,1.5],[3,0,1.5]],piedras:Array.from({length:7},(i,e)=>{const t=e/7*Ls;return[Math.cos(t)*4.2,Math.sin(t)*4.2,.55]})};function aM(i){const e=[];for(const t of i){const n=rM[t.key];if(!n)continue;const s=Math.cos(t.rot),r=Math.sin(t.rot);for(const[a,o,l]of n)e.push({x:t.x+a*s+o*r,z:t.z-a*r+o*s,r:l})}return e}function yf(i,e,t){const n=Ft.terrainScale,s=ec(i*n,e*n,t,3),r=ec(i*n*3.9,e*n*3.9,t+7717,2);return(s-.5)*2*Ft.terrainAmp+(r-.5)*1.7}function mn(i,e,t){let n=yf(e,t,i.seed);for(let s=0;s<i.landmarks.length;s++){const r=i.landmarks[s],a=Math.hypot(e-r.x,t-r.z);if(a<r.clear){const o=a/r.clear,l=o*o*(3-2*o);n=r.y*(1-l)+n*l}}return n}function oM(i,e){const t=[],s=i()*Ls,r={x:Math.cos(s)*(Ft.fence-2),z:Math.sin(s)*(Ft.fence-2),rot:s+Math.PI/2,clear:13},a=[];let o=0;for(;a.length<Cs.length-1&&o++<4e3;){const c=i()*Ls,f=34+i()*68,h=Math.cos(c)*f,d=Math.sin(c)*f;Math.hypot(h-r.x,d-r.z)<56||a.some(p=>Math.hypot(p.x-h,p.z-d)<46)||a.push({x:h,z:d,rot:i()*Ls,clear:10+i()*5})}for(;a.length<Cs.length-1;){const c=a.length/(Cs.length-1)*Ls+.3,f=78;a.push({x:Math.cos(c)*f,z:Math.sin(c)*f,rot:c,clear:12})}const l=[a[0],a[1],a[2],a[3],a[4],a[5],a[6],r];for(let c=0;c<Cs.length;c++){const f=l[c];t.push({index:c,key:Cs[c].key,name:Cs[c].name,x:f.x,z:f.z,y:yf(f.x,f.z,e),rot:f.rot,clear:f.clear})}return t}function lM(i,e,t){const n=Math.ceil(t*2/e)+1,s=new Array(n*n);for(let a=0;a<s.length;a++)s[a]=[];const r=(a,o)=>{const l=Math.min(n-1,Math.max(0,Math.floor((a+t)/e)));return Math.min(n-1,Math.max(0,Math.floor((o+t)/e)))*n+l};return i.forEach((a,o)=>s[r(a.x,a.z)].push(o)),{cell:e,size:n,half:t,buckets:s,idx:r}}function Sf(i,e,t,n){const s=[],r=i.cell,a=Math.max(0,Math.floor((e-n+i.half)/r)),o=Math.min(i.size-1,Math.floor((e+n+i.half)/r)),l=Math.max(0,Math.floor((t-n+i.half)/r)),c=Math.min(i.size-1,Math.floor((t+n+i.half)/r));for(let f=l;f<=c;f++)for(let h=a;h<=o;h++){const d=i.buckets[f*i.size+h];for(let p=0;p<d.length;p++)s.push(d[p])}return s}function el(i,e,t,n){const s=[],r=Ft.half;let a=0;for(;s.length<e&&a++<e*30;){const o=(i()*2-1)*r,l=(i()*2-1)*r;let c=!1;for(const f of t)if(Math.hypot(o-f.x,l-f.z)<f.clear*n.clearMul){c=!0;break}if(!c){if(n.minSep>0){let f=!1;for(let h=s.length-1;h>=0&&h>s.length-160;h--)if(Math.hypot(s[h].x-o,s[h].z-l)<n.minSep){f=!0;break}if(f)continue}s.push({x:o,z:l,s:n.minScale+i()*(n.maxScale-n.minScale),rot:i()*Ls,type:n.types?Math.floor(i()*n.types):0})}}return s}function bf(i){const e=Ic(i),t=oM(e,i),n=el(e,Ft.treeCount,t,{clearMul:1,minSep:3.4,minScale:.75,maxScale:1.7,types:3}),s=el(e,Ft.rockCount,t,{clearMul:.8,minSep:4.5,minScale:.6,maxScale:1.8,types:2}),r=el(e,Ft.bushCount,t,{clearMul:.9,minSep:0,minScale:.6,maxScale:1.5,types:2}),a={seed:i,landmarks:t,trees:n,rocks:s,bushes:r};for(const o of[n,s,r])for(const l of o)l.y=mn(a,l.x,l.z);return a.beacons=t.map((o,l)=>{const c=o.rot+1.1+e()*2.4,f=o.clear*(.35+e()*.3),h=o.x+Math.cos(c)*f,d=o.z+Math.sin(c)*f;return{index:l,landmark:l,name:o.name,x:h,z:d,y:mn(a,h,d)}}),a.solids=[...n.map(o=>({x:o.x,z:o.z,r:.26*o.s})),...s.map(o=>({x:o.x,z:o.z,r:.55*o.s})),...aM(t)],a.solidGrid=lM(a.solids,8,Ft.half+6),a.spawn={x:t[7].x*.9,z:t[7].z*.9},a.tower=t[0],a.gate=t[7],a}function br(i,e,t,n){const s=e,r=t;for(let c=0;c<3;c++){const f=Sf(i.solidGrid,e,t,n+2.5);let h=!1;for(let d=0;d<f.length;d++){const p=i.solids[f[d]],x=e-p.x,T=t-p.z,g=p.r+n,m=x*x+T*T;if(m<g*g&&m>1e-6){const S=Math.sqrt(m),C=(g-S)/S;e+=x*C,t+=T*C,h=!0}}if(!h)break}const a=Math.hypot(e-s,t-r);if(a>2.5){const c=2.5/a;e=s+(e-s)*c,t=r+(t-r)*c}const o=Ft.fence-1.2,l=Math.hypot(e,t);return l>o&&(e=e/l*o,t=t/l*o),{x:e,z:t}}function tc(i,e,t,n,s,r=1.1){const a=n-e,o=s-t,l=Math.hypot(a,o);if(l<.001)return!0;const c=Math.ceil(l/r),f=a/c,h=o/c;let d=e,p=t;for(let x=1;x<c;x++){d+=f,p+=h;const T=Sf(i.solidGrid,d,p,1.2);for(let g=0;g<T.length;g++){const m=i.solids[T[g]],S=d-m.x,C=p-m.z;if(S*S+C*C<m.r*m.r)return!1}}return!0}const vh=30,cM=85,at={night:395785,bark:2893858,barkDry:3880235,needle:1450522,needle2:1780253,ground:1909785,dirt:2761752,rock:3488058,bush:1582106,wood:3748138,metal:2961973,rust:4862242,concrete:3882296,signal:14241579,lamp:15915424};function Ji(i,e){const t=new Ge(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new en(s,3)),i.attributes.uv||i.setAttribute("uv",new en(new Float32Array(n*2),2)),i}function uM(i){if(i===2){const a=[],o=new hn(.09,.26,9.5,5);o.translate(0,4.75,0),a.push(Ji(o,at.barkDry));for(let l=0;l<3;l++){const c=new hn(.03,.09,2.6,4);c.translate(0,1.3,0),c.rotateZ(.9+l*.2),c.rotateY(l*2.3),c.translate(0,5.4+l*1.1,0),a.push(Ji(c,at.barkDry))}return{trunk:Zl(a,!1),canopy:null}}const e=i===0?11.5:7.2,t=new hn(.12,.3,e,5);t.translate(0,e/2,0);const n=Ji(t,at.bark),s=[],r=i===0?3:2;for(let a=0;a<r;a++){const o=a/r,l=(i===0?2.5:1.9)*(1-o*.62),c=(i===0?4.2:3.2)*(1-o*.3),f=new Fs(l,c,6);f.translate(0,e*(.38+o*.17)+c/2,0),s.push(Ji(f,a%2?at.needle:at.needle2))}return{trunk:n,canopy:Zl(s,!1)}}function hM(i){const e=new io(i===0?.9:1.5,0),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=.78+n*37%11/26;t.setXYZ(n,t.getX(n)*s,t.getY(n)*s*.66,t.getZ(n)*s)}return e.computeVertexNormals(),e.translate(0,.25,0),Ji(e,at.rock)}function fM(){const i=[];for(let e=0;e<2;e++){const t=new io(.55-e*.12,0);t.translate((e-.5)*.5,.34+e*.12,e*.3-.15),i.push(Ji(t,at.bush))}return Zl(i,!1)}const Tf=i=>new ns({color:i,roughness:.8,metalness:.05});let gr=null;function dM(){if(gr)return gr;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(46,42,4,64,64,88);return t.addColorStop(0,"#ffffff"),t.addColorStop(.35,"#c9c9c9"),t.addColorStop(.7,"#7a7a7a"),t.addColorStop(1,"#3a3a3a"),e.fillStyle="#3a3a3a",e.fillRect(0,0,128,128),e.fillStyle=t,e.beginPath(),e.arc(64,64,64,0,Math.PI*2),e.fill(),gr=new Tc(i),gr.colorSpace=Xt,gr}const Mh=i=>new _p({color:i,matcap:dM()}),Ps=(i,e=.88)=>new ns({color:i,roughness:e,metalness:.02});function zt(i,e,t,n,s=0,r=0,a=0){const o=new _t(new $i(1,14,10),n);return o.scale.set(i,e,t),o.position.set(s,r,a),o}function vn(i,e,t,n,s=0,r=0,a=0){const o=new _t(new hn(i,e,t,12,1),n);return o.position.set(s,r,a),o}function yt(i,e,t,n,s=0,r=0,a=0,o=0){const l=new _t(new Ui(i,e,t),Tf(n));return l.position.set(s,r,a),l.rotation.y=o,l}function Bs(i,e,t,n,s=0,r=0,a=0){const o=new _t(new hn(i,e,t,12),Tf(n));return o.position.set(s,r,a),o}function pM(i){const e=new Ct;switch(i){case"torre":{for(const[t,n]of[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]])e.add(yt(.28,8,.28,at.wood,t,4,n));e.add(yt(5.4,.3,5.4,at.wood,0,8,0)),e.add(yt(5,2.4,.2,at.wood,0,9.2,-2.5)),e.add(yt(.2,2.4,5,at.wood,-2.5,9.2,0)),e.add(yt(.2,2.4,5,at.wood,2.5,9.2,0)),e.add(yt(6,.25,6,at.metal,0,10.5,0));for(let t=0;t<12;t++)e.add(yt(1.6,.1,.3,at.wood,2.6,.6+t*.62,2.6));e.add(Bs(.06,.06,3,at.metal,0,12,0));break}case"caravana":{const t=yt(6.4,2.5,2.6,7038296,0,1.6,0,.2);t.rotation.z=1.35,t.position.y=1.5,e.add(t),e.add(yt(.3,.9,.9,at.metal,-2.2,.5,1.4)),e.add(yt(.3,.9,.9,at.metal,1.9,.5,1.5)),e.add(yt(3.2,.12,2.2,at.rust,1.4,.06,-2.4));break}case"piedras":{for(let t=0;t<7;t++){const n=t/7*Math.PI*2,s=1.4+t%3*.5,r=yt(.9,s*2,.7,at.rock,Math.cos(n)*4.2,s,Math.sin(n)*4.2,n);r.rotation.z=(t%2?1:-1)*.08,e.add(r)}e.add(Bs(1.5,1.7,.35,2763558,0,.17,0));break}case"caseta":{e.add(yt(4.2,2.8,3.4,at.concrete,0,1.4,0));const t=yt(4.8,.25,4,at.rust,0,2.9,0);t.rotation.x=.08,e.add(t),e.add(yt(1,2,.12,1711128,0,1,1.72)),e.add(yt(1.2,.9,.1,1119503,-1.3,1.9,1.72));break}case"tuberia":{for(let t=0;t<3;t++){const n=new _t(new hn(1.5,1.5,4.5,14,1,!0),new ka({color:at.concrete,side:An}));n.rotation.z=Math.PI/2,n.position.set(t*4.6-4.6,1.5,t%2?.4:-.3),e.add(n)}e.add(yt(9,.4,3.4,2369055,0,.2,2.6));break}case"camion":{e.add(yt(2.6,2.2,2.4,at.rust,-2.6,1.5,0)),e.add(yt(6.4,2.8,2.5,5196350,1.6,1.8,0));for(const[t,n]of[[-2.8,1.2],[-2.8,-1.2],[1.2,1.3],[1.2,-1.3],[3.6,1.3],[3.6,-1.3]]){const s=Bs(.55,.55,.4,1381914,t,.55,n);s.rotation.x=Math.PI/2,e.add(s)}break}case"puente":{e.add(yt(2.6,.18,8.5,at.wood,0,.5,0));for(let t=0;t<9;t++)e.add(yt(2.8,.12,.55,at.barkDry,0,.62,-3.8+t*.95));e.add(yt(.12,.9,8.5,at.wood,1.4,1,0)),e.add(yt(.12,.9,8.5,at.wood,-1.4,1,0));break}case"porton":{e.add(yt(.7,4.2,.7,at.concrete,-3,2.1,0)),e.add(yt(.7,4.2,.7,at.concrete,3,2.1,0));const t=new Ct;t.name="gatePanel";for(let n=0;n<9;n++)t.add(yt(.1,3.2,.1,at.metal,-2.6+n*.65,1.7,0));t.add(yt(5.6,.14,.14,at.metal,0,3.2,0)),t.add(yt(5.6,.14,.14,at.metal,0,.4,0)),e.add(t),e.add(yt(1.3,.9,.08,at.signal,0,3.9,.1));break}}return e}function mM(i,e=null){const t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100,n=new qx({canvas:i,antialias:!t,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,t?1.25:1.75)),n.setClearColor(at.night,1),n.toneMapping=ja,n.toneMappingExposure=1.15,n.shadowMap.enabled=!t,n.shadowMap.type=wh;const s=new Xd;s.fog=new Mc(461325,.028),s.background=new Ge(at.night);const r=new gn(74,1,.1,145),a=new Np(1713200,329482,.22);s.add(a);const o=new tf(9414340,.44);if(o.position.set(-40,70,30),s.add(o),e?.hdri){const te=new ql(n);s.environment=te.fromEquirectangular(e.hdri).texture,te.dispose()}const l={fog:new Ge(9412755),fogDensity:.013,bg:new Ge(9084047),hemiSky:new Ge(13623241),hemiGround:new Ge(4805695),hemiI:1.05,sunColor:new Ge(16642518),sunI:1.5,exposure:1.2,envI:.7},c={fog:new Ge(461325),fogDensity:.028,bg:new Ge(at.night),hemiSky:new Ge(1713200),hemiGround:new Ge(329482),hemiI:.22,sunColor:new Ge(9414340),sunI:.44,exposure:1.15,envI:0};let f=0;function h(){const te=f;s.fog.color.copy(l.fog).lerp(c.fog,te),s.fog.density=l.fogDensity+(c.fogDensity-l.fogDensity)*te,s.background.copy(l.bg).lerp(c.bg,te),a.color.copy(l.hemiSky).lerp(c.hemiSky,te),a.groundColor.copy(l.hemiGround).lerp(c.hemiGround,te),a.intensity=l.hemiI+(c.hemiI-l.hemiI)*te,o.color.copy(l.sunColor).lerp(c.sunColor,te),o.intensity=l.sunI+(c.sunI-l.sunI)*te,n.toneMappingExposure=l.exposure+(c.exposure-l.exposure)*te,s.environmentIntensity=l.envI+(c.envI-l.envI)*te}h();const d=new Xl(16770747,0,Gt.range,Gt.angle,.62,1.15);d.position.set(0,0,0);const p=new Xl(15981748,0,Gt.range*.62,Gt.angle*2.9,.95,1.35);p.position.set(0,0,0);const x=new ef(15258538,0,7,2);x.position.set(0,-.5,-1.2),t||(d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.camera.near=.6,d.shadow.camera.far=Gt.range,d.shadow.bias=-.0015,d.shadow.normalBias=.035);const T=new Pt;r.add(d,p,x,T),T.position.set(0,0,-10),d.target=T,p.target=T,s.add(r);const g=Mh(10254940),m=Mh(3355946),S=new Ct;S.position.set(.27,-.33,-.48),S.rotation.set(.08,-.32,.22);const C=vn(.078,.062,.5,m,0,-.02,.2);C.rotation.x=Math.PI/2-.12,S.add(C),S.add(zt(.06,.052,.062,g,0,.01,-.06)),S.add(zt(.066,.05,.08,g,0,.005,-.14));for(const te of[-.032,0,.032])S.add(vn(.014,.011,.1,g,te,.048,-.19));const E=vn(.02,.017,.075,g,-.05,-.015,-.16);E.rotation.z=.9,S.add(E);const P=new Ct;P.position.set(0,.015,-.24),P.rotation.x=Math.PI/2;const I=new ln({color:1842457});P.add(new _t(new hn(.03,.034,.26,12),I));const D=new ln({color:2762272}),M=new _t(new hn(.032,.032,.012,12),D);M.position.set(0,.135,0),P.add(M),S.add(P),r.add(S);const L=S.position.clone(),v=new Je(window.innerWidth/(t?2:1),window.innerHeight/(t?2:1)),w=new Xs(v,t?.55:.85,.55,.82),A=new Qx(n);A.addPass(new jx(s,r)),A.addPass(w),A.addPass(new tv);const B=new ln({color:at.lamp,transparent:!0,opacity:.05,blending:Yi,depthWrite:!1,side:An}),H=gM(),z=new Ct,K=[];for(let te=0;te<3;te++){const k=new _t(new Vs(120,120),new ln({map:H,transparent:!0,opacity:.019+te*.009,depthWrite:!1,blending:Yi,color:6056818}));k.rotation.x=-Math.PI/2,k.renderOrder=2,z.add(k),K.push({mesh:k,h:.7+te*.9,spin:(te%2?1:-1)*(.006+te*.004)})}s.add(z);const O={scene:s,camera:r,renderer:n,isMobile:t,world:null,groups:{},actors:{players:new Map,beasts:new Map},alto:null,beaconMeshes:[],gateGroup:null};O.buildWorld=function(te){O.world=te;for(const oe of Object.keys(O.groups))s.remove(O.groups[oe]),O.groups[oe].traverse(me=>{me.geometry&&me.geometry.dispose()});O.groups={},O.beaconMeshes=[];const k=Ft.half*2+24,J=O.isMobile?80:112,fe=new Vs(k,k,J,J);fe.rotateX(-Math.PI/2);const Ce=fe.attributes.position,Ee=new Float32Array(Ce.count*3),pe=new Ge(at.ground),Te=new Ge(at.dirt),Ve=new Ge;for(let oe=0;oe<Ce.count;oe++){const me=Ce.getX(oe),re=Ce.getZ(oe);Ce.setY(oe,mn(te,me,re));const ae=ec(me*.06,re*.06,te.seed+991,2);Ve.copy(pe).lerp(Te,ae*.85),Ee[oe*3]=Ve.r,Ee[oe*3+1]=Ve.g,Ee[oe*3+2]=Ve.b}fe.setAttribute("color",new en(Ee,3)),fe.computeVertexNormals();let He;if(e){const oe=k/8;for(const me of["forest_ground_04_Diffuse","forest_ground_04_nor_gl","forest_ground_04_arm"])e.textures[me]?.repeat.set(oe,oe);He=Qo(e.textures,"forest_ground_04",{vertexColors:!0,roughness:1})}else He=new ns({vertexColors:!0,roughness:.92,metalness:.02});const ze=new _t(fe,He);ze.receiveShadow=!0,s.add(ze),O.groups.ground=ze;const ke=new Pt,tt=new Ct;O.vegChunks=[];const ut=(oe,me,re,ae,Ae=!0)=>{const Ie=ae?re.filter(ae):re;if(!Ie.length)return[];const be=new Map;for(const Ne of Ie){const De=`${Math.floor(Ne.x/vh)},${Math.floor(Ne.z/vh)}`;be.has(De)||be.set(De,[]),be.get(De).push(Ne)}const Re=new Ge,We=[];for(const Ne of be.values()){const De=new Vl(oe,me,Ne.length);Ne.forEach((G,ne)=>{if(ke.position.set(G.x,G.y,G.z),ke.rotation.set(0,G.rot,0),ke.scale.setScalar(G.s),ke.updateMatrix(),De.setMatrixAt(ne,ke.matrix),Ae){const he=.78+ne*2654435761%1e3/1e3*.42;Re.setRGB(he*1.04,he,he*.9)}else{const he=.88+ne*2654435761%1e3/1e3*.24;Re.setRGB(he,he,he)}De.setColorAt(ne,Re)}),De.instanceMatrix.needsUpdate=!0,De.instanceColor&&(De.instanceColor.needsUpdate=!0),De.castShadow=!0,De.receiveShadow=!0,De.computeBoundingSphere(),tt.add(De),O.vegChunks.push(De),We.push(De)}return We},wt=e?Qo(e.textures,"pine_bark",{vertexColors:!0}):null,Ot=e?Qo(e.textures,"rocky_trail",{vertexColors:!0}):null,bt=new ka({vertexColors:!0}),Nt=new ka({vertexColors:!0});for(let oe=0;oe<3;oe++){const{trunk:me,canopy:re}=uM(oe);ut(me,wt||bt,te.trees,ae=>ae.type===oe,!1),re&&ut(re,bt,te.trees,ae=>ae.type===oe,!0)}for(let oe=0;oe<2;oe++)ut(hM(oe),Ot||bt,te.rocks,me=>me.type===oe,!1);ut(fM(),Nt,te.bushes,null,!0),s.add(tt),O.groups.veg=tt;const W=new Ct,Yt=Ji(new Ui(.13,2.3,.13),at.metal);Yt.translate(0,1.15,0);const dt=Math.round(Math.PI*2*Ft.fence/3.6),F=new Vl(Yt,new ka({vertexColors:!0}),dt),b=[[],[],[]];for(let oe=0;oe<dt;oe++){const me=oe/dt*Math.PI*2,re=Math.cos(me)*Ft.fence,ae=Math.sin(me)*Ft.fence,Ae=mn(te,re,ae);ke.position.set(re,Ae,ae),ke.rotation.set(0,me,0),ke.scale.setScalar(1),ke.updateMatrix(),F.setMatrixAt(oe,ke.matrix),b[0].push(new V(re,Ae+.6,ae)),b[1].push(new V(re,Ae+1.35,ae)),b[2].push(new V(re,Ae+2.1,ae))}F.instanceMatrix.needsUpdate=!0,F.frustumCulled=!1,W.add(F);for(const oe of b){oe.push(oe[0].clone());const me=new sn().setFromPoints(oe);W.add(new no(me,new bc({color:3817539})))}s.add(W),O.groups.fence=W;const Z=new Ct;for(const oe of te.landmarks){const me=pM(oe.key);me.traverse(re=>{re.isMesh&&(re.castShadow=!0,re.receiveShadow=!0)}),me.position.set(oe.x,oe.y,oe.z),me.rotation.y=oe.rot,Z.add(me),oe.key==="porton"&&(O.gateGroup=me.getObjectByName("gatePanel"))}s.add(Z),O.groups.marks=Z;const ie=new Ct,ue=_M();for(const oe of te.beacons){const me=new Ct;for(let be=0;be<3;be++){const Re=be/3*Math.PI*2,We=Bs(.03,.04,1.15,at.metal,Math.cos(Re)*.28,.55,Math.sin(Re)*.28);We.rotation.z=Math.cos(Re)*-.42,We.rotation.x=Math.sin(Re)*.42,me.add(We)}me.add(yt(.34,.3,.28,2764074,0,1.25,0));const re=new _t(new $i(.11,10,8),new ln({color:at.signal}));re.position.set(0,1.48,0),me.add(re);const ae=new jd(new Vh({map:ue,color:at.signal,transparent:!0,blending:Yi,depthWrite:!1,opacity:.85}));ae.scale.set(4.2,4.2,1),ae.position.set(0,1.48,0),me.add(ae);const Ae=new hn(.06,.75,17,10,1,!0);Ae.translate(0,8.5,0);const Ie=new _t(Ae,new ln({color:at.signal,transparent:!0,opacity:.075,blending:Yi,depthWrite:!1,side:An}));Ie.position.y=1.4,me.add(Ie),me.userData.column=Ie,me.position.set(oe.x,oe.y,oe.z),ie.add(me),O.beaconMeshes.push({group:me,lamp:re,glow:ae,column:me.userData.column,index:oe.index})}s.add(ie),O.groups.beacons=ie};function ee(){const te=new Ct;te.add(Bs(.28,.3,1.15,4212028,0,.62,0)),te.add(yt(.5,.55,.32,3817271,0,1.42,0)),te.add(Bs(.2,.2,.28,12168342,0,1.82,0));const k=new _t(new Fs(1,1,14,1,!0),B.clone());k.material.opacity=.035,k.rotation.x=Math.PI/2,k.position.set(0,1.6,0),k.name="beam",te.add(k);const J=new _t(new $i(.07,8,6),new ln({color:at.lamp}));return J.position.set(0,1.6,-.2),J.name="dot",te.add(J),te}function j(){const te=new Ct,k=Ps(1841686,.92),J=Ps(5130814,.8),fe=zt(.3,.31,.5,k,0,.72,-.28);te.add(fe),te.add(zt(.2,.19,.3,k,0,.68,.1)),te.add(zt(.27,.28,.34,k,0,.7,.52));for(let ze=0;ze<5;ze++){const ke=zt(.31,.055,.045,J,0,.74-ze*.012,-.52+ze*.15);ke.rotation.x=.15,te.add(ke)}for(let ze=0;ze<6;ze++){const ke=new _t(new Fs(.035,.13,5),J);ke.position.set(0,.99-ze*.008,-.5+ze*.19),ke.rotation.x=-.35,te.add(ke)}const Ce=vn(.13,.17,.6,k,0,.86,-.7);Ce.rotation.x=1.15,te.add(Ce);const Ee=new Ct;Ee.add(zt(.115,.115,.16,k,0,0,0));const pe=vn(.055,.095,.34,k,0,0,-.26);pe.rotation.x=Math.PI/2,Ee.add(pe);const Te=zt(.07,.022,.15,Ps(2888978,.7),0,-.055,-.28);Ee.add(Te);for(const ze of[-1,1]){const ke=new _t(new Fs(.05,.19,5),k);ke.position.set(ze*.085,.13,.04),ke.rotation.z=ze*.3,ke.rotation.x=-.2,Ee.add(ke);const tt=new _t(new $i(.028,8,6),new ln({color:12773496}));tt.position.set(ze*.075,.032,-.12),Ee.add(tt)}Ee.position.set(0,1,-.99),te.add(Ee);const Ve=[];for(const[ze,ke,tt]of[[.17,-.42,1],[-.17,-.42,1],[.19,.52,0],[-.19,.52,0]]){const ut=new Ct;ut.add(vn(.075,.05,.44,k,0,-.22,0));const wt=vn(.05,.032,.4,k,0,-.58,tt?-.06:.07);wt.rotation.x=tt?.22:-.24,ut.add(wt),ut.add(zt(.055,.035,.075,k,0,-.78,tt?-.11:.13)),ut.position.set(ze,.8,ke),ut.userData.phase=(ze>0?0:Math.PI)+(tt?0:Math.PI),te.add(ut),Ve.push(ut)}const He=vn(.035,.012,.85,k,0,.74,1.02);return He.rotation.x=-1,te.add(He),te.userData={legs:Ve,head:Ee,tail:He,chest:fe,kind:"jauria"},te}function ce(){const te=new Ct,k=Ps(8617071,.9),J=Ps(6446158,.92),fe=Ps(1444617,.6),Ce=zt(.42,.98,.36,k,0,2.22,0);Ce.rotation.x=.26,te.add(Ce),te.add(zt(.66,.26,.42,J,0,3.02,-.1)),te.add(zt(.33,.38,.29,k,0,1.82,.1));const Ee=new Ct;Ee.add(zt(.28,.34,.32,k,0,0,0)),Ee.add(zt(.2,.16,.16,k,0,-.1,-.26)),Ee.add(zt(.07,.045,.03,J,-.14,.09,-.3)),Ee.add(zt(.07,.045,.03,J,.14,.09,-.3)),Ee.add(zt(.16,.09,.05,fe,0,-.14,-.32));for(const Ve of[-1,1]){const He=zt(.035,.28,.2,J,Ve*.32,.06,.02);He.rotation.z=Ve*.36,Ee.add(He)}te.add(vn(.11,.15,.34,k,0,3.2,-.05)),Ee.position.set(0,3.46,-.12),Ee.rotation.x=-.32,te.add(Ee);const pe=[];for(const Ve of[-1,1]){const He=new Ct;He.add(zt(.2,.22,.2,k,0,0,0)),He.add(vn(.155,.12,1.12,k,0,-.6,0)),He.add(zt(.115,.115,.115,k,0,-1.18,.04)),He.add(vn(.11,.085,1.15,k,0,-1.78,.08));for(let ze=0;ze<4;ze++){const ke=vn(.026,.012,.46,J,(ze-1.5)*.07,-2.56,.1);ke.rotation.x=.12+ze*.04,He.add(ke)}He.position.set(Ve*.56,2.98,0),He.rotation.z=Ve*.12,He.userData.side=Ve,te.add(He),pe.push(He)}const Te=[];for(const Ve of[-1,1]){const He=new Ct;He.add(vn(.21,.16,.86,k,0,-.43,0)),He.add(zt(.14,.13,.14,k,0,-.88,.03)),He.add(vn(.15,.115,.84,k,0,-1.32,.05)),He.add(zt(.15,.075,.32,J,0,-1.72,-.11)),He.position.set(Ve*.26,1.78,0),He.userData.phase=Ve>0?0:Math.PI,te.add(He),Te.push(He)}return te.userData={head:Ee,arms:pe,legs:Te,torso:Ce,kind:"ciego"},te}function ge(){const te=new ln({color:15921126}),k=new Ct,J=new _t(new hn(.17,.31,2.5,8),te);J.position.y=1.9,k.add(J);const fe=new _t(new Ui(.72,.1,.2),te);fe.position.y=3,k.add(fe);const Ce=new _t(new $i(.21,14,12),te);Ce.position.y=3.3,Ce.scale.set(1,1.18,.92),k.add(Ce);const Ee=[];for(const pe of[-1,1]){const Te=new Ct;Te.add(new _t(new hn(.05,.062,1.5,6),te).translateY(-.75));const Ve=new _t(new hn(.04,.05,1.6,6),te);Ve.position.y=-2.3,Te.add(Ve),Te.position.set(pe*.34,2.98,0),Te.rotation.z=pe*.05,k.add(Te),Ee.push(Te)}for(const pe of[-1,1]){const Te=new _t(new hn(.075,.085,1.5,6),te);Te.position.set(pe*.12,.75,0),k.add(Te)}return k.userData={arms:Ee,head:Ce},k}const xe={jauria:1.3,ciego:.9};function Ze(te,k,J,fe,Ce){const Ee=te.userData;if(!Ee)return;const pe=J==="chase",Te=J!=="repelled",Ve=xe[k]||xe.jauria,He=Ce/Ve*Math.PI*2,ze=pe?.85:.4;if(Ee.legs)for(const tt of Ee.legs)tt.rotation.x=Te?Math.sin(He+tt.userData.phase)*ze:0;if(Ee.arms)for(let tt=0;tt<Ee.arms.length;tt++){const ut=Ee.arms[tt],wt=ut.userData.side??(tt===0?-1:1);ut.rotation.x=Te?Math.sin(He*.5+tt*Math.PI)*ze*.55:0,ut.rotation.z=wt*(.12+(pe?.3:0))}Ee.head&&(Ee.head.rotation.y=pe?0:Math.sin(fe*.9)*.55),Ee.tail&&(Ee.tail.rotation.y=Math.sin(fe*2.2)*.35);const ke=1+Math.sin(fe*(pe?6.5:2.1))*(pe?.05:.025);for(const tt of[Ee.chest,Ee.torso]){if(!tt)continue;tt.userData.baseScale||(tt.userData.baseScale=tt.scale.clone());const ut=tt.userData.baseScale;tt.scale.set(ut.x*ke,ut.y,ut.z*ke)}te.position.y+=Te?Math.abs(Math.sin(He))*(pe?.07:.03):0}const ot=(te,k,J,fe,Ce)=>{te.position.x+=(k-te.position.x)*Ce,te.position.y+=(J-te.position.y)*Ce,te.position.z+=(fe-te.position.z)*Ce};return O.syncActors=function(te,k,J=1/20){const fe=1-Math.exp(-18*J),Ce=new Set;for(const pe of te.players||[]){if(pe.id===k)continue;Ce.add(pe.id);let Te=O.actors.players.get(pe.id);Te||(Te=ee(),s.add(Te),O.actors.players.set(pe.id,Te),Te.position.set(pe.x,pe.y,pe.z)),Te.visible=pe.s!=="dead"&&!pe.e,ot(Te,pe.x,pe.y,pe.z,fe),Te.lookAt(Te.position.x+pe.fx,Te.position.y,Te.position.z+pe.fz),Te.rotation.z=pe.s==="down"?1.3:0;const Ve=Te.getObjectByName("beam"),He=Te.getObjectByName("dot"),ze=pe.l>0&&pe.s==="alive";if(Ve.visible=ze,He.visible=ze,ze){const ke=pe.l===2?Gt.focusRange*.6:Gt.range*.6,tt=Math.tan(pe.l===2?Gt.focusAngle:Gt.angle)*ke;Ve.scale.set(tt,ke,tt),Ve.position.set(0,1.6,-ke/2)}}for(const[pe,Te]of O.actors.players)Ce.has(pe)||(s.remove(Te),O.actors.players.delete(pe));const Ee=new Set;for(const pe of te.beasts||[]){Ee.add(pe.id);let Te=O.actors.beasts.get(pe.id);Te&&Te.userData.kind!==pe.k&&(s.remove(Te),O.actors.beasts.delete(pe.id),Te=null),Te||(Te=pe.k==="ciego"?ce():j(),Te.userData.kind=pe.k,Te.traverse(ze=>{ze.isMesh&&(ze.castShadow=!0)}),s.add(Te),O.actors.beasts.set(pe.id,Te),Te.position.set(pe.x,pe.y,pe.z));const Ve=Te.position.x,He=Te.position.z;ot(Te,pe.x,pe.y,pe.z,fe),Te.userData.walkDist=(Te.userData.walkDist||0)+Math.hypot(Te.position.x-Ve,Te.position.z-He),Te.lookAt(Te.position.x+pe.fx,Te.position.y,Te.position.z+pe.fz),Ze(Te,pe.k,pe.s,performance.now()*.001,Te.userData.walkDist)}for(const[pe,Te]of O.actors.beasts)Ee.has(pe)||(s.remove(Te),O.actors.beasts.delete(pe));if(te.alto){O.alto||(O.alto=ge(),s.add(O.alto)),O.alto.visible=!0;const pe=Math.sin(performance.now()*9e-4)*.05;O.alto.position.set(te.alto.x,te.alto.y+pe,te.alto.z),O.alto.lookAt(r.position.x,te.alto.y,r.position.z)}else O.alto&&(O.alto.visible=!1);for(const pe of O.beaconMeshes){const Te=te.beacons&&te.beacons[pe.index];pe.group.visible=!Te}if(O.gateGroup){const pe=te.gateOpen?-2.4:0;O.gateGroup.position.x+=(pe*2.2-O.gateGroup.position.x)*.04}},O.setFlashlight=function(te,k){if(!te){d.intensity=p.intensity=x.intensity=0,D.color.setHex(2762272);return}d.intensity=k?640:250,d.angle=k?Gt.focusAngle:Gt.angle,d.distance=k?Gt.focusRange:Gt.range,d.penumbra=k?.45:.68,p.intensity=k?22:60,p.angle=k?Gt.angle*2.2:Gt.angle*2.9,p.distance=(k?Gt.focusRange:Gt.range)*.55,x.intensity=k?1.4:3.4,D.color.setHex(16774096)},O.updateHand=function(te,k,J){const fe=Math.sin(k*2)*(J?.02:.011),Ce=Math.cos(k)*(J?.014:.007),Ee=Math.sin(te*.8)*.006;S.position.set(L.x+Ce,L.y+fe+Ee,L.z)},O.setDayPhase=function(te,k){const J=te?0:1,fe=k/Va.transitionTime;f=J>f?Math.min(J,f+fe):Math.max(J,f-fe),h()},O.tickBeacons=function(te){for(const k of O.beaconMeshes){if(!k.group.visible)continue;const J=.45+.55*Math.pow(Math.max(0,Math.sin(te*2.1+k.index)),6);k.glow.material.opacity=.3+J*.8,k.lamp.material.color.setHex(14241579).multiplyScalar(.5+J),k.column&&(k.column.material.opacity=.045+J*.075)}},O.setFov=function(te){Math.abs(r.fov-te)<.02||(r.fov+=(te-r.fov)*.09,r.updateProjectionMatrix())},O.resize=function(){const te=i.clientWidth||window.innerWidth,k=i.clientHeight||window.innerHeight;r.aspect=te/k,r.updateProjectionMatrix(),n.setSize(te,k,!1),A.setSize(te,k),w.setSize(te/(t?2:1),k/(t?2:1))},O.cullVegetation=function(){if(!O.vegChunks)return;const te=r.position;for(const k of O.vegChunks){const J=k.boundingSphere;k.visible=!J||Math.hypot(J.center.x-te.x,J.center.z-te.z)-J.radius<cM}},O.tickMist=function(te){const k=O.world?mn(O.world,r.position.x,r.position.z):0;for(const J of K)J.mesh.position.set(r.position.x,k+J.h,r.position.z),J.mesh.rotation.z=te*J.spin},O.render=function(){O.cullVegetation(),A.render()},O}function gM(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){const s=Math.random()*256,r=Math.random()*256,a=18+Math.random()*52,o=e.createRadialGradient(s,r,0,s,r,a),l=.05+Math.random()*.16;o.addColorStop(0,`rgba(255,255,255,${l})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(s-a,r-a,a*2,a*2)}const t=new Tc(i);return t.wrapS=t.wrapT=Di,t.repeat.set(2,2),t}function _M(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Tc(i);return n.colorSpace=Xt,n}const yh=(i,e,t)=>i<e?e:i>t?t:i,_r=(i,e,t)=>i+(e-i)*t,xM=5.4,vM=17;function MM(i,e,t,n={}){const s={x:i.spawn.x,z:i.spawn.z,y:0,vx:0,vz:0,yaw:Math.atan2(i.spawn.x,i.spawn.z),pitch:0,eye:Kt.eye,stamina:Kt.staminaMax,sanity:0,lightOn:!0,lightFocus:!1,exhausted:!1,bob:0,stepAccum:0,breathing:0,adrenaline:0,alive:!0,frozen:!1,jumpY:0,jumpVel:0,groundY:0};s.jump=function(){s.frozen||s.jumpY>.02||(s.jumpVel=xM)},e.rotation.order="YXZ",s.forward=function(){return{x:-Math.sin(s.yaw),z:-Math.cos(s.yaw)}},s.toggleLight=function(){s.lightOn=!s.lightOn,n.onSound?.("click")};function r(o,l){let c=0;s.lightOn||(c+=wn.darkGain);let f=!1,h=1/0;if(l?.alto){const p=l.alto.x-s.x,x=l.alto.z-s.z;if(h=Math.hypot(p,x),h<wn.altoProximityRange){const T=1-h/wn.altoProximityRange;c+=wn.altoProximityGain*T*T}if(h<Gn.alto.stareRange&&h>0){const T=s.forward();p/h*T.x+x/h*T.z>Math.cos(.7)&&tc(i,s.x,s.z,l.alto.x,l.alto.z)&&(f=!0,c+=wn.stareGain*(1+(1-h/Gn.alto.stareRange)))}}let d=h;for(const p of l?.beasts||[])d=Math.min(d,Math.hypot(p.x-s.x,p.z-s.z));d<12&&(c+=wn.proximityGain*(1-d/12)),c===0&&s.lightOn&&(c-=wn.lightRecover),s.sanity=yh(s.sanity+c*o,0,wn.max),s.staring=f,s.nearestBeast=d,s.altoDist=h}function a(o,l){const c=Sr;if(l<c.triggerDist){const f=1-l/c.triggerDist;s.adrenaline=Math.min(1,s.adrenaline+c.rise*(.35+f*1.9)*o)}else s.adrenaline=Math.max(0,s.adrenaline-c.fall*o)}return s.update=function(o,l){const c=t.consumeLook();s.frozen||(s.yaw+=c.x,s.pitch=yh(s.pitch+c.y,-1.35,1.35));let f=s.frozen?0:t.fwd,h=s.frozen?0:t.side;const d=Math.hypot(f,h);d>1&&(f/=d,h/=d);const x=t.run&&!t.crouch&&d>.1&&!s.exhausted&&s.stamina>0,T=Kt.staminaMax+s.adrenaline*Sr.staminaBonus;if(x){const ce=Kt.staminaDrain*(1+s.adrenaline*(Sr.drainMul-1));s.stamina=Math.max(0,s.stamina-ce*o),s.stamina<=0&&(s.exhausted=!0)}else s.stamina=Math.min(T,s.stamina+Kt.staminaRegen*o),s.exhausted&&s.stamina>Kt.staminaFloor&&(s.exhausted=!1);s.staminaCap=T;const g=1+s.adrenaline*Sr.speedBonus,m=(x?Kt.run:t.crouch?Kt.walk*Kt.crouchMul:Kt.walk)*g,S=Math.sin(s.yaw),C=Math.cos(s.yaw),E=(-S*f+C*h)*m,P=(-C*f-S*h)*m,I=1-Math.exp(-22*o);s.vx=_r(s.vx,E,I),s.vz=_r(s.vz,P,I);const D=s.x+s.vx*o,M=s.z+s.vz*o,L=br(i,D,M,Kt.radius),v=L.x-D,w=L.z-M,A=Math.hypot(v,w);if(A>1e-5){const ce=v/A,ge=w/A,xe=s.vx*ce+s.vz*ge;xe<0&&(s.vx-=ce*xe,s.vz-=ge*xe)}s.x=L.x,s.z=L.z;const B=Math.hypot(s.vx,s.vz)>.35,H=mn(i,s.x,s.z),z=Kt.eye*(t.crouch?.62:1);if(s.eye=_r(s.eye,z,1-Math.exp(-9*o)),s.jumpVel-=vM*o,s.jumpY=Math.max(0,s.jumpY+s.jumpVel*o),s.jumpY<=0&&(s.jumpY=0,s.jumpVel=0),s.groundY=_r(s.groundY,H,1-Math.exp(-16*o)),s.y=s.groundY+s.jumpY,B&&!s.frozen){const ce=x?10.5:t.crouch?4.2:6.6;s.bob+=o*ce,s.stepAccum+=o*ce,s.stepAccum>Math.PI&&(s.stepAccum-=Math.PI,n.onSound?.("step",{running:x,crouch:t.crouch}))}else s.bob=_r(s.bob,0,1-Math.exp(-6*o)),s.stepAccum=0;const K=Math.sin(s.bob*2)*(x?.075:.04),O=Math.cos(s.bob)*(x?.045:.022);s.lightFocus=s.lightOn&&t.focus,r(o,l),a(o,s.nearestBeast??999);const ee=(s.sanity/wn.max)**2*.02+s.adrenaline**2*.016,j=performance.now()*.001;return e.position.set(s.x+O+Math.sin(j*23)*ee,s.y+s.eye+K+Math.sin(j*31)*ee,s.z),e.rotation.y=s.yaw+Math.sin(j*17)*ee*.5,e.rotation.x=s.pitch+Math.cos(j*19)*ee*.5,s.moving=B,s.running=x,s.crouching=!!t.crouch,s.hidden=s.crouching&&!s.lightOn,{moving:B,running:x}},s.noiseLevel=function(){return s.moving?s.crouching?.12:s.running?1:.45:0},s.netState=function(){const o=s.forward();return{x:+s.x.toFixed(2),z:+s.z.toFixed(2),fx:+o.x.toFixed(3),fz:+o.z.toFixed(3),moving:s.moving,running:s.running,crouching:s.crouching,lightOn:s.lightOn,lightFocus:s.lightFocus,sanity:Math.round(s.sanity)}},s.findInteractable=function(o,l){const c={kind:null,index:-1,label:"",dist:1/0};if(!o)return c;for(const h of i.beacons){if(o.beacons?.[h.index])continue;const d=Math.hypot(h.x-s.x,h.z-s.z);d<Kt.pickupRange&&d<c.dist&&(c.kind="beacon",c.index=h.index,c.dist=d,c.label=`Encender la baliza · ${h.name}`)}for(const h of o.players||[]){if(h.id===l||h.s!=="down")continue;const d=Math.hypot(h.x-s.x,h.z-s.z);d<Kt.pickupRange&&d<c.dist&&(c.kind="revive",c.index=h.id,c.dist=d,c.label=`Levantar a ${h.n}`)}if(o.beacons&&o.beacons.every(Boolean)&&o.phase==="hunt"){const h=Math.hypot(i.tower.x-s.x,i.tower.z-s.z);h<6&&h<c.dist&&(c.kind="radio",c.dist=h,c.label="Pedir extracción por radio")}return c},s}const Sh={KeyE:"use",KeyF:"light",KeyM:"map",KeyQ:"ping",KeyR:"ping"};function yM(i,e={}){const t={fwd:0,side:0,run:!1,crouch:!1,focus:!1,lookX:0,lookY:0,holdUse:!1,pointerLocked:!1,touch:!1,enabled:!1},n=new Set,s=[],r=S=>s.push(S);t.consumeActions=()=>{const S=s.slice();return s.length=0,S},t.consumeLook=()=>{const S={x:t.lookX,y:t.lookY};return t.lookX=0,t.lookY=0,S};function a(){t.fwd=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0),t.side=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),t.run=n.has("ShiftLeft")||n.has("ShiftRight"),t.crouch=n.has("ControlLeft")||n.has("KeyC"),t.holdUse=n.has("KeyE")}const o=S=>{t.enabled&&(S.repeat||S.code!=="Escape"&&(n.add(S.code),Sh[S.code]&&r(Sh[S.code]),S.code==="Space"&&(r("jump"),S.preventDefault()),a(),["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(S.code)&&S.preventDefault()))},l=S=>{n.delete(S.code),a()},c=()=>{n.clear(),a()};window.addEventListener("keydown",o),window.addEventListener("keyup",l),window.addEventListener("blur",c);const f=.0021;let h=!1,d=0,p=0;const x=S=>{const C=f*(e.sensitivity??1);if(t.pointerLocked){t.lookX-=S.movementX*C,t.lookY-=S.movementY*C;return}!h||!t.enabled||(t.lookX-=(S.clientX-d)*C*1.35,t.lookY-=(S.clientY-p)*C*1.35,d=S.clientX,p=S.clientY)},T=()=>{t.pointerLocked=document.pointerLockElement===i,t.pointerLocked||(n.clear(),a(),e.onUnlock?.())},g=()=>{if(t.touch||!t.enabled)return!1;try{const S=i.requestPointerLock?.();return S&&typeof S.catch=="function"&&S.catch(()=>e.onLockDenied?.()),!0}catch{return e.onLockDenied?.(),!1}};i.addEventListener("click",g),document.addEventListener("pointerlockchange",T),document.addEventListener("mousemove",x),i.addEventListener("mousedown",S=>{t.enabled&&(S.button===2&&(t.focus=!0),S.button===0&&(t.pointerLocked?t.focus=!0:(h=!0,d=S.clientX,p=S.clientY)))}),window.addEventListener("mouseup",S=>{S.button===0&&(t.focus=!1,h=!1),S.button===2&&(t.focus=!1)}),i.addEventListener("contextmenu",S=>S.preventDefault());function m(S,C,E){t.touch=!0;const P=C.querySelector("b"),I=58;let D=null,M=0,L=0;const v=j=>{D=j.identifier,M=j.clientX,L=j.clientY,C.classList.add("active"),P.style.transform=""},w=j=>{let ce=j.clientX-M,ge=j.clientY-L;const xe=Math.hypot(ce,ge);xe>I&&(M+=ce/xe*(xe-I),L+=ge/xe*(xe-I),ce=ce/xe*I,ge=ge/xe*I),P.style.transform=`translate(${ce}px, ${ge}px)`;const Ze=Math.hypot(ce,ge)/I,ot=Ze<.16?0:(Ze-.16)/.84,te=Math.hypot(ce,ge)||1;t.side=ce/te*ot,t.fwd=-(ge/te)*ot,t.run=Ze>.9},A=()=>{C.classList.remove("active"),P.style.transform="",t.fwd=0,t.side=0,t.run=!1,D=null};S.addEventListener("touchstart",j=>{j.preventDefault(),D===null&&v(j.changedTouches[0])},{passive:!1}),window.addEventListener("touchmove",j=>{for(const ce of j.changedTouches)ce.identifier===D&&w(ce)},{passive:!1});const B=j=>{for(const ce of j.changedTouches)ce.identifier===D&&A()};window.addEventListener("touchend",B),window.addEventListener("touchcancel",B);let H=null,z=0,K=0;const O=.0062;i.addEventListener("touchstart",j=>{if(H!==null||!t.enabled)return;const ce=j.changedTouches[0];H=ce.identifier,z=ce.clientX,K=ce.clientY},{passive:!0}),i.addEventListener("touchmove",j=>{for(const ce of j.changedTouches)ce.identifier===H&&(t.lookX-=(ce.clientX-z)*O*(e.sensitivity??1),t.lookY-=(ce.clientY-K)*O*(e.sensitivity??1),z=ce.clientX,K=ce.clientY)},{passive:!0});const ee=j=>{for(const ce of j.changedTouches)ce.identifier===H&&(H=null)};i.addEventListener("touchend",ee),i.addEventListener("touchcancel",ee),E.querySelectorAll("button").forEach(j=>{const ce=j.dataset.act,ge=Ze=>{if(Ze.preventDefault(),Ze.stopPropagation(),e.onBuzz?.(12),ce==="crouch"){t.crouch=!t.crouch,j.classList.toggle("held",t.crouch);return}ce==="use"&&(t.holdUse=!0,j.classList.add("held")),r(ce)},xe=()=>{ce==="use"&&(t.holdUse=!1,j.classList.remove("held"))};j.addEventListener("touchstart",ge,{passive:!1}),j.addEventListener("touchend",xe),j.addEventListener("touchcancel",xe),j.addEventListener("mousedown",ge),j.addEventListener("mouseup",xe)})}return t.setupTouch=m,t.requestLock=g,t.destroy=()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",l),window.removeEventListener("blur",c),document.removeEventListener("pointerlockchange",T),document.removeEventListener("mousemove",x)},t}const kt=i=>document.getElementById(i);function SM(){const i={hud:kt("hud"),beaconRow:kt("beaconRow"),objective:kt("objective"),staminaFill:kt("staminaFill"),staminaMeter:kt("staminaMeter"),noiseFill:kt("noiseFill"),noiseMeter:kt("noiseMeter"),hiddenTag:kt("hiddenTag"),squad:kt("squad"),subtitle:kt("subtitle"),prompt:kt("prompt"),promptKey:kt("promptKey"),promptText:kt("promptText"),timer:kt("timer"),timerValue:kt("timerValue"),timerLabel:kt("timerLabel"),downed:kt("downed"),downedSub:kt("downedSub"),mapWrap:kt("mapWrap"),mapCanvas:kt("mapCanvas"),fx:kt("fx"),crosshair:kt("crosshair")};i.beaconRow.innerHTML="";const e=[];for(let o=0;o<Mn.beacons;o++){const l=document.createElement("i");i.beaconRow.appendChild(l),e.push(l)}const t=i.fx.getContext("2d"),n=i.mapCanvas.getContext("2d");let s=0;const r={mapOpen:!1,flash:0,jumpscare:0,reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches};r.show=o=>{i.hud.hidden=!o},r.setBeacons=function(o){let l=0;for(let c=0;c<e.length;c++){const f=!!o?.[c];e[c].classList.toggle("on",f),f&&l++}return l},r.setObjective=function(o){i.objective.textContent=o},r.setMeters=function(o,l,c=0){const f=Math.max(0,Math.min(100,o/(l||100)*100));i.staminaFill.style.width=`${f}%`,i.staminaMeter.classList.toggle("low",f<22),i.staminaMeter.classList.toggle("rush",c>.15)},r.setUseReady=function(o){const l=document.querySelector('#pads button[data-act="use"]');l&&l.classList.toggle("ready",!!o)},r.setNoise=function(o){const l=Math.max(0,Math.min(100,o*100));i.noiseFill.style.width=`${l}%`,i.noiseMeter.classList.toggle("mid",o>=.25&&o<.6),i.noiseMeter.classList.toggle("loud",o>=.6)},r.setHidden=function(o){i.hiddenTag.hidden=!o},r.setSquad=function(o,l){const c=(o||[]).filter(f=>f.id!==l);if(!c.length){i.squad.innerHTML="";return}i.squad.innerHTML=c.map(f=>{const h=f.e?"dead":f.s==="down"?"down":f.s==="dead"?"dead":"",d=f.e?"fuera":f.s==="down"?`${Math.ceil(f.d)}s`:f.s==="dead"?"—":"";return`<div class="squad-row ${h}"><u></u><b>${Ef(f.n)}</b>${d?` ${d}`:""}</div>`}).join("")},r.say=function(o,l=3.4){i.subtitle.textContent=o,i.subtitle.classList.add("show"),s=l},r.setPrompt=function(o,l="E",c=0){if(!o){i.prompt.hidden=!0;return}i.prompt.hidden=!1,i.promptKey.textContent=l,i.promptText.textContent=c>0?`${o} ${"▮".repeat(Math.round(c*8)).padEnd(8,"▯")}`:o},r.setTimer=function(o,l){if(o===null){i.timer.hidden=!0;return}i.timer.hidden=!1,i.timerLabel.textContent=l;const c=Math.floor(o/60),f=Math.floor(o%60);i.timerValue.textContent=`${c}:${String(f).padStart(2,"0")}`},r.setDowned=function(o,l,c){i.downed.hidden=!o,o&&(i.downedSub.textContent=c>0?`Aguanta ${Math.ceil(l)} s. Alguien tiene que llegar hasta ti.`:`Aguanta ${Math.ceil(l)} s. No queda nadie que pueda levantarte.`)},r.setCrosshair=o=>{i.crosshair.style.display=o?"":"none"},r.toggleMap=function(o){return r.mapOpen=o===void 0?!r.mapOpen:o,i.mapWrap.hidden=!r.mapOpen,r.mapOpen},r.drawMap=function(o,l,c,f){if(!r.mapOpen)return;const h=n,d=i.mapCanvas.width,p=Ft.fence*2+24,x=d/p,T=S=>d/2+S*x,g=S=>d/2+S*x;h.fillStyle="#0b100d",h.fillRect(0,0,d,d),h.strokeStyle="rgba(214,210,196,0.05)",h.lineWidth=1;for(let S=0;S<=12;S++){const C=S/12*d;h.beginPath(),h.moveTo(C,0),h.lineTo(C,d),h.stroke(),h.beginPath(),h.moveTo(0,C),h.lineTo(d,C),h.stroke()}h.strokeStyle="rgba(214,210,196,0.32)",h.setLineDash([6,5]),h.lineWidth=2,h.beginPath(),h.arc(d/2,d/2,Ft.fence*x,0,Math.PI*2),h.stroke(),h.setLineDash([]),h.font='500 15px "IBM Plex Mono", monospace',h.textAlign="center";const m=[];for(const S of o.landmarks){const C=T(S.x),E=g(S.z),P=l?.beacons?.[S.index];h.strokeStyle=P?"#d94f2b":"rgba(214,210,196,0.4)",h.fillStyle=P?"rgba(217,79,43,0.22)":"transparent",h.lineWidth=2,h.beginPath(),h.rect(C-7,E-7,14,14),h.fill(),h.stroke(),P&&(h.fillStyle="#d94f2b",h.beginPath(),h.arc(C,E,3.2,0,Math.PI*2),h.fill()),h.fillStyle=P?"#d94f2b":"rgba(214,210,196,0.62)";const I=h.measureText(S.name).width,D=Math.min(d-I/2-6,Math.max(I/2+6,C));let M=E-13;m.some(L=>Math.abs(L.x-D)<(L.w+I)/2&&Math.abs(L.y-M)<16)&&(M=E+24),h.fillText(S.name,D,M),m.push({x:D,y:M,w:I}),S._labelY=M}a(h,d,T(o.tower.x),g(o.tower.z),o.tower._labelY,"EXTRACCIÓN","#f2d9a0"),a(h,d,T(o.gate.x),g(o.gate.z),o.gate._labelY,"SALIDA","#6f8a5a");for(const S of l?.players||[]){if(S.id===f||S.s==="dead")continue;const C=T(S.x),E=g(S.z);h.fillStyle=S.s==="down"?"#d94f2b":"#6f8a5a",h.beginPath(),h.arc(C,E,5,0,Math.PI*2),h.fill(),h.fillStyle="rgba(214,210,196,0.7)",h.font='400 12px "IBM Plex Mono", monospace',h.fillText(S.n,C,E+18),h.font='500 15px "IBM Plex Mono", monospace'}if(c){const S=T(c.x),C=g(c.z),E=Math.atan2(c.fz??1,c.fx??0);h.fillStyle="rgba(242,217,160,0.2)",h.beginPath(),h.moveTo(S,C),h.arc(S,C,34,E-.42,E+.42),h.closePath(),h.fill(),h.fillStyle="#f2d9a0",h.beginPath(),h.arc(S,C,5.5,0,Math.PI*2),h.fill()}h.fillStyle="rgba(214,210,196,0.5)",h.font='500 18px "Anton", sans-serif',h.fillText("N",d/2,30)};function a(o,l,c,f,h,d,p){o.fillStyle=p,o.font='500 11px "IBM Plex Mono", monospace';const x=o.measureText(d).width,T=h>f?f-14:f+24;o.fillText(d,Math.min(l-x/2-6,Math.max(x/2+6,c)),T),o.font='500 15px "IBM Plex Mono", monospace'}return r.resize=function(){const o=Math.min(devicePixelRatio,2);i.fx.width=Math.floor(innerWidth*o),i.fx.height=Math.floor(innerHeight*o)},r.flashHit=function(){r.flash=1},r.triggerJumpscare=function(){r.jumpscare=1.15},r.drawFx=function(o,{sanity:l=0,staring:c=!1,downed:f=!1,adrenaline:h=0}){const d=t,p=i.fx.width,x=i.fx.height;d.clearRect(0,0,p,x);const T=l/100,g=h>.05&&!r.reducedMotion?Math.pow(Math.max(0,Math.sin(performance.now()*.0042)),4)*h*.22:0;if(T>.02||f||h>.05){const S=f?.75:T*.72+h*.3+g,C=d.createRadialGradient(p/2,x/2,Math.min(p,x)*(.22-T*.1),p/2,x/2,Math.max(p,x)*.72);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(1,f?`rgba(90,20,14,${S})`:h>.3?`rgba(38,10,8,${S})`:`rgba(4,7,6,${S})`),d.fillStyle=C,d.fillRect(0,0,p,x)}const m=c?.1+T*.5:T*T*.14;if(m>.01&&!r.reducedMotion){const S=Math.floor(m*5200);d.fillStyle=`rgba(232,230,222,${.1+m*.5})`;for(let E=0;E<S;E++)d.fillRect(Math.random()*p,Math.random()*x,2,2);const C=Math.floor(m*7);d.fillStyle=`rgba(232,230,222,${.05+m*.1})`;for(let E=0;E<C;E++)d.fillRect(0,Math.random()*x,p,1+Math.random()*3)}r.flash>0&&(d.fillStyle=`rgba(140,47,34,${r.flash*.55})`,d.fillRect(0,0,p,x),r.flash=Math.max(0,r.flash-o*2.2)),r.jumpscare>0&&(bM(d,p,x,r.jumpscare,r.reducedMotion),r.jumpscare=Math.max(0,r.jumpscare-o)),s>0&&(s-=o,s<=0&&i.subtitle.classList.remove("show"))},r}function bM(i,e,t,n,s){const r=s?0:(Math.random()-.5)*26*n;i.save(),i.translate(e/2+r,t/2+r*.6);const a=Math.min(e,t)*(.34+(1-n)*.5);if(i.fillStyle="rgba(6,8,7,0.92)",i.fillRect(-e,-t,e*2,t*2),i.fillStyle="#efece2",i.beginPath(),i.ellipse(0,0,a*.62,a,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,20,20,0.16)",i.beginPath(),i.ellipse(-a*.24,-a*.16,a*.15,a*.2,.2,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a*.24,-a*.16,a*.15,a*.2,-.2,0,Math.PI*2),i.fill(),i.restore(),!s){i.fillStyle=`rgba(255,255,255,${.06+Math.random()*.12})`;for(let o=0;o<1600;o++)i.fillRect(Math.random()*e,Math.random()*t,3,3)}i.fillStyle=`rgba(0,0,0,${Math.max(0,1-n*1.6)})`,i.fillRect(0,0,e,t)}function Ef(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function TM(){let i=null,e,t,n,s,r,a=null,o=!1;const l=new Map,c={ready:!1,muted:!1};function f(T=2){const g=i.sampleRate*T,m=i.createBuffer(1,g,i.sampleRate),S=m.getChannelData(0);for(let C=0;C<g;C++)S[C]=Math.random()*2-1;return m}function h(T=!1){const g=i.createBufferSource();return g.buffer=a,g.loop=T,g}c.start=function(){if(o)return;const T=window.AudioContext||window.webkitAudioContext;if(!T)return;i=new T,o=!0,c.ready=!0,a=f(3),e=i.createGain(),e.gain.value=.9;const g=i.createDynamicsCompressor();g.threshold.value=-3,g.knee.value=0,g.ratio.value=20,g.attack.value=.003,g.release.value=.15,g.connect(i.destination),e.connect(g),t=i.createGain(),t.gain.value=0,t.connect(e);const m=h(!0),S=i.createBiquadFilter();S.type="bandpass",S.frequency.value=420,S.Q.value=.7,m.connect(S).connect(t),m.start();const C=i.createOscillator();C.frequency.value=.055;const E=i.createGain();E.gain.value=260,C.connect(E).connect(S.frequency),C.start();const P=i.createOscillator();P.frequency.value=.09;const I=i.createGain();I.gain.value=.035,P.connect(I).connect(t.gain),P.start();const D=i.createOscillator();D.type="sine",D.frequency.value=43;const M=i.createGain();M.gain.value=.035,D.connect(M).connect(e),D.start(),n=i.createGain(),n.gain.value=0,n.connect(e);const L=h(!0),v=i.createBiquadFilter();v.type="bandpass",v.frequency.value=2600,v.Q.value=.55,L.connect(v).connect(n),L.start(),c._staticFilter=v,s=i.createGain(),s.gain.value=.85,s.connect(e),r=i.createGain(),r.gain.value=0,r.connect(e);const w=h(!0),A=i.createBiquadFilter();A.type="bandpass",A.frequency.value=700,A.Q.value=1.4,w.connect(A).connect(r),w.start();const B=i.createOscillator();B.frequency.value=.42;const H=i.createGain();H.gain.value=.05,B.connect(H).connect(r.gain),B.start(),c._breathLfo=B,t.gain.setTargetAtTime(.075,i.currentTime,3)},c.resume=function(){i&&i.state==="suspended"&&i.resume()},c.setMuted=function(T){c.muted=T,e&&(e.gain.value=T?0:.9)},c.updateListener=function(T,g,m,S,C){if(!i)return;const E=i.listener;if(E.positionX){const P=i.currentTime;E.positionX.setTargetAtTime(T,P,.02),E.positionY.setTargetAtTime(g,P,.02),E.positionZ.setTargetAtTime(m,P,.02),E.forwardX.setTargetAtTime(S,P,.02),E.forwardY.setTargetAtTime(0,P,.02),E.forwardZ.setTargetAtTime(C,P,.02),E.upX.setTargetAtTime(0,P,.02),E.upY.setTargetAtTime(1,P,.02),E.upZ.setTargetAtTime(0,P,.02)}else E.setPosition&&(E.setPosition(T,g,m),E.setOrientation(S,0,C,0,1,0))};function d(T,g,m,S=6,C=90){const E=i.createPanner();return E.panningModel="HRTF",E.distanceModel="inverse",E.refDistance=S,E.maxDistance=C,E.rolloffFactor=1.1,E.positionX?(E.positionX.value=T,E.positionY.value=g,E.positionZ.value=m):E.setPosition&&E.setPosition(T,g,m),E}function p({dur:T=.12,freq:g=900,Q:m=1.2,gain:S=.2,type:C="bandpass",at:E=null,decay:P=1}){if(!i)return;const I=h(),D=i.createBiquadFilter();D.type=C,D.frequency.value=g,D.Q.value=m;const M=i.createGain(),L=i.currentTime;M.gain.setValueAtTime(S,L),M.gain.exponentialRampToValueAtTime(1e-4,L+T*P),I.connect(D).connect(M),M.connect(E||e),I.start(L),I.stop(L+T*P+.05)}function x({f0:T,f1:g,dur:m,type:S="sine",gain:C=.2,at:E=null}){if(!i)return;const P=i.createOscillator();P.type=S;const I=i.createGain(),D=i.currentTime;P.frequency.setValueAtTime(T,D),P.frequency.exponentialRampToValueAtTime(Math.max(20,g),D+m),I.gain.setValueAtTime(C,D),I.gain.exponentialRampToValueAtTime(1e-4,D+m),P.connect(I),I.connect(E||e),P.start(D),P.stop(D+m+.05)}return c.step=function(T,g){if(!i)return;const m=g?.045:T?.16:.1;p({dur:.07,freq:1900+Math.random()*900,Q:.8,gain:m}),p({dur:.11,freq:240+Math.random()*120,Q:1,gain:m*.7})},c.click=function(){p({dur:.035,freq:3200,Q:3,gain:.16})},c.pickup=function(){x({f0:660,f1:990,dur:.13,type:"square",gain:.06}),setTimeout(()=>x({f0:990,f1:1320,dur:.18,type:"square",gain:.05}),110)},c.radio=function(){p({dur:.5,freq:1500,Q:.5,gain:.12}),x({f0:420,f1:300,dur:.7,type:"sawtooth",gain:.05})},c.heartbeat=function(T){if(!i||T<=0)return;const g=.1+T*.6;x({f0:68,f1:34,dur:.15,type:"sine",gain:g,at:s}),setTimeout(()=>x({f0:58,f1:30,dur:.19,type:"sine",gain:g*.72,at:s}),155)},c.roar=function(T,g,m){if(!i)return;const S=d(T,g+1.5,m,12,140);S.connect(e),x({f0:130,f1:44,dur:1.5,type:"sawtooth",gain:.5,at:S}),x({f0:68,f1:30,dur:1.9,type:"square",gain:.28,at:S}),p({dur:1.4,freq:320,Q:.5,gain:.24,at:S})},c.snarl=function(T,g,m){if(!i)return;const S=d(T,g+.7,m,6,60);S.connect(e),p({dur:.34,freq:480+Math.random()*260,Q:2.2,gain:.24,at:S}),x({f0:190,f1:96,dur:.36,type:"sawtooth",gain:.12,at:S})},c.scream=function(T,g,m){if(!i)return;const S=T===void 0?null:d(T,g+1.6,m,10,120);S&&S.connect(e),x({f0:880,f1:210,dur:.85,type:"sawtooth",gain:.3,at:S}),p({dur:.7,freq:1400,Q:.8,gain:.2,at:S})},c.dreadPulse=function(){i&&(x({f0:52,f1:30,dur:1.1,type:"sine",gain:.22}),p({dur:.9,freq:1900,Q:6,gain:.05,decay:1}))},c.jumpscare=function(){i&&(p({dur:1.1,freq:1800,Q:.35,gain:.58}),x({f0:1400,f1:45,dur:1,type:"sawtooth",gain:.38}),x({f0:90,f1:38,dur:1.6,type:"square",gain:.26}))},c.gate=function(){p({dur:1.6,freq:260,Q:1.6,gain:.3,decay:1}),x({f0:150,f1:70,dur:1.4,type:"square",gain:.12})},c.nightfall=function(){i&&(x({f0:220,f1:40,dur:3.2,type:"sine",gain:.22}),x({f0:110,f1:32,dur:3.6,type:"sawtooth",gain:.14}),p({dur:2.6,freq:700,Q:.4,gain:.1,decay:1.4}))},c.updateBeaconHums=function(T,g,m,S){if(i)for(const C of T){const E=!g?.[C.index],P=Math.hypot(C.x-m,C.z-S);let I=l.get(C.index);if(E&&P<34){if(!I){const D=d(C.x,C.y+1.4,C.z,4,40),M=i.createOscillator();M.type="triangle",M.frequency.value=118;const L=i.createGain();L.gain.value=0,M.connect(L).connect(D).connect(e),M.start(),I={osc:M,gain:L,panner:D},l.set(C.index,I)}I.gain.gain.setTargetAtTime(.055*(1-P/34),i.currentTime,.3)}else if(I&&(I.gain.gain.setTargetAtTime(0,i.currentTime,.3),!E)){try{I.osc.stop(i.currentTime+.6)}catch{}l.delete(C.index)}}},c.updateTension=function({sanity:T,staring:g,altoDist:m=999,exhausted:S,nearest:C,adrenaline:E=0}){if(!i)return;const P=i.currentTime,I=T/100,D=m<wn.altoProximityRange?1-m/wn.altoProximityRange:0,M=I*I*.1+D*D*.38+(g?.07:0);n.gain.setTargetAtTime(M,P,.2),c._staticFilter.frequency.setTargetAtTime(1400+I*3200,P,.3);const L=Math.max(S?.085:0,E*.09,I>.5?.035:0);if(r.gain.setTargetAtTime(L,P,.3),c._breathLfo&&c._breathLfo.frequency.setTargetAtTime(S?1.15:.42+E*.75,P,.4),t){const w=C<22?.3:1;t.gain.setTargetAtTime(.075*w,P,1.2)}if(!c._presence){const w=i.createGain();w.gain.value=0,w.connect(e);const A=i.createOscillator();A.type="sawtooth",A.frequency.value=46;const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=190,A.connect(B).connect(w),A.start();const H=i.createOscillator();H.frequency.value=.7;const z=i.createGain();z.gain.value=9,H.connect(z).connect(A.frequency),H.start(),c._presence=w}const v=C<26?1-C/26:0;c._presence.gain.setTargetAtTime(v*v*.13,P,.45)},c.stopAll=function(){for(const[T,g]of l){try{g.osc.stop()}catch{}l.delete(T)}n&&(n.gain.value=0),r&&(r.gain.value=0),c._presence&&(c._presence.gain.value=0)},c}const EM=800,wM="https://roblox-juego.onrender.com/telemetry";function AM(){const i=[],e=Date.now();function t(r){const{name:a,byName:o,...l}=r;return l}function n(r,a){i.push({t:+(performance.now()/1e3).toFixed(2),type:r,...t(a)}),i.length>EM&&i.shift()}const s={log:(r,a={})=>n(r,a),init(){window.addEventListener("error",r=>{n("jsError",{message:r.message,file:r.filename,line:r.lineno})}),window.addEventListener("unhandledrejection",r=>{n("jsError",{message:String(r.reason?.message||r.reason)})})},toJSON(){return JSON.stringify({startedAt:new Date(e).toISOString(),ua:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`,touch:navigator.maxTouchPoints>0,events:i},null,2)},async send(){try{return await fetch(wM,{method:"POST",headers:{"content-type":"application/json"},body:s.toJSON(),keepalive:!0}),!0}catch{return!1}},download(){const r=new Blob([s.toJSON()],{type:"application/json"}),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.download=`coto-vedado-registro-${e}.json`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};return s}const bh=Math.PI*2,xr=(i,e,t)=>i<e?e:i>t?t:i,La=(i,e=0)=>typeof i=="number"&&Number.isFinite(i)?i:e,RM=10;function CM(i){const e=Ic(i^2654435769),t=bf(i),n={world:t,seed:i,time:0,phase:Zt.LOBBY,players:new Map,beasts:[],alto:null,noises:[],events:[],beaconsTaken:new Array(Mn.beacons).fill(!1),extractionLeft:Mn.extractionTime,radioOn:!1,gateOpen:!1,pressure:0,dayPhase:!0,activeBeasts:{alto:!0,jauria:!0,ciego:!0}},s=(v,w)=>n.events.push({type:v,...w}),r=(v,w,A,B)=>{n.noises.push({x:v,z:w,r:A,life:.35,source:B})},a=()=>[...n.players.values()].filter(v=>v.state==="alive"&&!v.escaped),o=()=>[...n.players.values()].filter(v=>v.state!=="dead"&&!v.escaped);function l(v,w,A=B=>B.state==="alive"&&!B.escaped){let B=null,H=1/0;for(const z of n.players.values()){if(!A(z))continue;const K=Math.hypot(z.x-v,z.z-w);K<H&&(H=K,B=z)}return{player:B,dist:H}}function c(v,w,A,B,H){const z=w-v.x,K=A-v.z,O=Math.hypot(z,K);return O>B||O<.001?O<=B:z/O*v.fx+K/O*v.fz<H?!1:tc(t,v.x,v.z,w,A)}function f(v,w,A){for(const B of n.players.values()){if(B.state!=="alive"||!B.lightOn||B.escaped)continue;const H=B.lightFocus?Gt.focusRange:Gt.range,z=Math.cos(B.lightFocus?Gt.focusAngle:Gt.angle);if(!(Math.hypot(v-B.x,w-B.z)>Math.min(H,A))&&c(B,v,w,Math.min(H,A),z))return B}return null}function h(){for(let v=0;v<40;v++){const w=e()*bh,A=Math.sqrt(e())*(Ft.half-8),B=Math.cos(w)*A,H=Math.sin(w)*A;if(!t.landmarks.some(K=>Math.hypot(B-K.x,H-K.z)<K.clear+3))return{x:B,z:H}}return{x:0,z:0}}n.addPlayer=function(v,w){const A={id:v,name:w||"Rastreador",x:t.spawn.x+(e()-.5)*5,z:t.spawn.z+(e()-.5)*5,y:0,fx:0,fz:1,moving:!1,running:!1,crouching:!1,lightOn:!0,lightFocus:!1,state:"alive",downT:0,reviveProgress:0,invuln:0,sanity:0,escaped:!1,noiseAccum:0,ready:!1,scentTrail:[],scentAcc:0};return A.y=mn(t,A.x,A.z),n.players.set(v,A),s("join",{id:v,name:A.name}),A},n.removePlayer=function(v){n.players.delete(v)&&s("leave",{id:v})},n.setInput=function(v,w){const A=n.players.get(v);if(!A)return;if(A.state==="alive"&&!A.escaped){const z=Date.now(),K=xr(La(w.x,A.x),-120,Ft.fence),O=xr(La(w.z,A.z),-120,Ft.fence),ee=A._lastMoveAt?Math.min(1,(z-A._lastMoveAt)/1e3):1,j=RM*ee+1.5,ce=K-A.x,ge=O-A.z,xe=Math.hypot(ce,ge);xe>j&&xe>1e-6?(A.x+=ce/xe*j,A.z+=ge/xe*j):(A.x=K,A.z=O),A._lastMoveAt=z,A.y=mn(t,A.x,A.z),A.moving=!!w.moving,A.running=!!w.running,A.crouching=!!w.crouching}const B=La(w.fx,NaN),H=La(w.fz,NaN);Number.isFinite(B)&&Number.isFinite(H)&&(B!==0||H!==0)&&(A.fx=B,A.fz=H),A.lightOn=!!w.lightOn,A.lightFocus=!!w.lightFocus,typeof w.sanity=="number"&&Number.isFinite(w.sanity)&&(A.sanity=xr(w.sanity,0,wn.max))},n.setReady=function(v,w){const A=n.players.get(v);A&&(A.ready=!!w)},n.pickupBeacon=function(v,w){const A=n.players.get(v);if(!A||A.state!=="alive"||n.phase!==Zt.HUNT)return!1;const B=t.beacons[w];if(!B||n.beaconsTaken[w]||Math.hypot(A.x-B.x,A.z-B.z)>Kt.pickupRange+1)return!1;n.beaconsTaken[w]=!0;const H=n.beaconsTaken.filter(Boolean).length,z=Math.max(1,Mn.beacons-Va.nightAtBeacon);return n.pressure=Math.max(0,Math.min(1,(H-Va.nightAtBeacon)/z)),r(A.x,A.z,mi.pickup,"pickup"),s("beacon",{index:w,by:v,name:A.name,count:H,place:B.name}),n.dayPhase&&H>=Va.nightAtBeacon&&(n.dayPhase=!1,g(),s("nightfall",{})),H>=Mn.beacons&&s("allBeacons",{}),!0},n.activateRadio=function(v){if(n.phase!==Zt.HUNT||n.beaconsTaken.filter(Boolean).length<Mn.beacons)return!1;const w=n.players.get(v);return!w||w.state!=="alive"||Math.hypot(w.x-t.tower.x,w.z-t.tower.z)>6?!1:(n.phase=Zt.EXTRACTION,n.radioOn=!0,n.pressure=1,n.extractionLeft=Mn.extractionTime,r(t.tower.x,t.tower.z,mi.roar,"radio"),s("radio",{by:v,name:w.name}),!0)},n.ping=function(v){const w=n.players.get(v);!w||w.state==="dead"||(r(w.x,w.z,mi.ping,"ping"),s("ping",{id:v,x:w.x,z:w.z,name:w.name}))},n.revive=function(v,w){const A=n.players.get(v),B=n.players.get(w);if(!A||!B||A.state!=="alive"||B.state!=="down"||Math.hypot(A.x-B.x,A.z-B.z)>Kt.pickupRange)return;const H=Date.now(),z=A._reviveTarget===w?Math.min(.2,Math.max(0,(H-A._reviveAt)/1e3)):0;A._reviveTarget=w,A._reviveAt=H,B.reviveProgress+=z,B._lastRevivedAt=n.time,A.noiseAccum+=z,A.noiseAccum>.8&&(A.noiseAccum=0,r(A.x,A.z,mi.revive,"revive")),B.reviveProgress>=Kt.reviveTime&&(B.state="alive",B.downT=0,B.reviveProgress=0,B.invuln=3.5,B.sanity=Math.max(B.sanity,45),s("revived",{id:w,by:v,name:B.name,byName:A.name}))};function d(v,w){return v.state!=="alive"||v.invuln>0?!1:(a().filter(B=>B.id!==v.id).length===0?(v.state="dead",s("death",{id:v.id,name:v.name,cause:w})):(v.state="down",v.downT=Kt.downTime,v.reviveProgress=0,s("down",{id:v.id,name:v.name,cause:w})),r(v.x,v.z,mi.scream,"scream"),!0)}function p(v,w){v.state!=="dead"&&(v.state="dead",s("death",{id:v.id,name:v.name,cause:w}))}function x(){const v=a();if(!v.length)return null;v.sort((z,K)=>K.sanity-z.sanity);const w=v[0],A=Gn.alto,B=A.minSpawnDist-n.pressure*8,H=A.maxSpawnDist-n.pressure*12;for(let z=0;z<30;z++){const K=e()*bh,O=B+e()*Math.max(4,H-B);let ee=w.x+Math.cos(K)*O,j=w.z+Math.sin(K)*O;const ce=Math.hypot(ee,j),ge=Ft.fence-1.5;ce>ge&&(ee=ee/ce*ge,j=j/ce*ge);const xe={x:ee,z:j};if(c(w,xe.x,xe.z,A.stareRange,Math.cos(.75)))continue;const{x:Ze,z:ot}=br(t,xe.x,xe.z,.9);return{x:Ze,z:ot,target:w.id}}return null}function T(v){const w=Gn.alto;n.alto||(n.alto={active:!1,x:0,z:0,y:0,cool:14-n.pressure*6,target:null,seenT:0});const A=n.alto;if(!A.active){if(A.cool-=v,A.cool<=0){const J=x();J?(A.active=!0,A.x=J.x,A.z=J.z,A.y=mn(t,A.x,A.z),A.target=J.target,A.cool=w.teleportCooldown,A.seenT=0,s("altoAppear",{x:A.x,z:A.z})):A.cool=3}return}let B=!1;for(const J of a())if(c(J,A.x,A.z,w.stareRange,Math.cos(.7))&&(B=!0,s("stare",{id:J.id,gain:wn.stareGain*v})),Math.hypot(J.x-A.x,J.z-A.z)<w.killRange){p(J,"alto"),A.active=!1,A.cool=20-n.pressure*8,s("altoVanish",{});return}if(B){A.seenT+=v,A.cool=w.teleportCooldown*(1-n.pressure*.45);return}if(A.cool-=v,A.cool>0)return;A.cool=w.teleportCooldown*(1-n.pressure*.45);const H=n.players.get(A.target),z=H&&H.state==="alive"?H:l(A.x,A.z).player;if(!z){A.active=!1;return}const K=z.x-A.x,O=z.z-A.z,ee=Math.hypot(K,O)||1,j=7;if(ee<=j+.5){A.x=z.x,A.z=z.z,A.y=mn(t,A.x,A.z),p(z,"alto"),A.active=!1,A.cool=20-n.pressure*8,s("altoVanish",{});return}A.cool=Math.max(1.5,A.cool);const ce=w.closeInStep*(1+n.pressure*.5);let ge=A.x+K/ee*Math.min(ce,ee-j),xe=A.z+O/ee*Math.min(ce,ee-j);const Ze=(e()-.5)*8;ge+=-O/ee*Ze,xe+=K/ee*Ze;const ot=Math.hypot(ge,xe),te=Ft.fence-1.5;ot>te&&(ge=ge/ot*te,xe=xe/ot*te);const k=br(t,ge,xe,.9);A.x=k.x,A.z=k.z,A.y=mn(t,A.x,A.z),e()<.12&&(A.active=!1,A.cool=16-n.pressure*7,s("altoVanish",{}))}function g(){n.beasts=[],n.activeBeasts.jauria;for(let v=0;v<(n.activeBeasts.jauria?Gn.jauria.count:0);v++){const w=h();n.beasts.push({kind:"jauria",id:`j${v}`,x:w.x,z:w.z,y:mn(t,w.x,w.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:0,atkCool:0})}for(let v=0;v<(n.activeBeasts.ciego?Gn.ciego.count:0);v++){const w=h();n.beasts.push({kind:"ciego",id:`c${v}`,x:w.x,z:w.z,y:mn(t,w.x,w.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:Gn.ciego.roarCooldown,atkCool:0})}}function m(v,w,A,B,H){const z=w-v.x,K=A-v.z,O=Math.hypot(z,K);if(O<.05)return 0;let ee=z/O,j=K/O;const ce=br(t,v.x+ee*B*H,v.z+j*B*H,.6);let ge=ce.x,xe=ce.z;if(Math.hypot(ge-v.x,xe-v.z)<B*H*.4){const te=(v.id.charCodeAt(1)||0)%2?1:-1,k=-j*te,J=ee*te,fe=br(t,v.x+(ee*.4+k)*B*H,v.z+(j*.4+J)*B*H,.6);ge=fe.x,xe=fe.z}v.x=ge,v.z=xe,v.y=mn(t,v.x,v.z);const ot=Math.hypot(w-v.x,A-v.z)||1;return v.fx=(w-v.x)/ot,v.fz=(A-v.z)/ot,O}function S(v,w){v.atkCool=6,v.state="investigate",v.cool=5;const A=v.x-w.x,B=v.z-w.z,H=Math.hypot(A,B)||1;v.target={x:xr(v.x+A/H*22,-118,Ft.half),z:xr(v.z+B/H*22,-118,Ft.half)}}function C(v,w){const A=Gn.jauria;v.atkCool=Math.max(0,v.atkCool-w);const B=1+n.pressure*.28,H=f(v.x,v.z,A.lightRepelRange);if(H&&H.lightFocus&&(v.repel=A.lightRepelTime),v.repel>0){if(v.repel-=w,H){m(v,v.x*2-H.x,v.z*2-H.z,A.patrolSpeed*1.6,w),v.fx=H.x-v.x,v.fz=H.z-v.z;const ee=Math.hypot(v.fx,v.fz)||1;v.fx/=ee,v.fz/=ee}v.state="repelled";return}let z=null,K=1/0;for(const ee of a()){if(ee.crouching&&!ee.lightOn)continue;const j=Math.hypot(ee.x-v.x,ee.z-v.z);if(j>A.sightRange||j>K)continue;const ce=(ee.x-v.x)/(j||1),ge=(ee.z-v.z)/(j||1);ce*v.fx+ge*v.fz<Math.cos(A.sightAngle)&&j>5||tc(t,v.x,v.z,ee.x,ee.z)&&(z=ee,K=j)}if(z){v.state="chase",v.target={x:z.x,z:z.z},m(v,z.x,z.z,A.chaseSpeed*B,w),K<A.attackRange&&v.atkCool<=0&&d(z,"jauria")&&S(v,z);return}if(v.state==="chase"&&(v.state="investigate",v.cool=6),v.state==="investigate"){v.cool-=w,(m(v,v.target.x,v.target.z,A.chaseSpeed*.6*B,w)<1.5||v.cool<=0)&&(v.state="patrol",v.target=h());return}m(v,v.target.x,v.target.z,A.patrolSpeed*B,w)<2&&(v.target=h())}function E(v,w){const A=Gn.ciego;v.atkCool=Math.max(0,v.atkCool-w),v.smellCool=Math.max(0,(v.smellCool||0)-w);const B=1+n.pressure*.3;v.roarT-=w;let H=null,z=1/0;if(v.state==="chase"||v.state==="investigate")for(const O of a()){const ee=Math.hypot(O.x-v.x,O.z-v.z),j=O.running?26:O.crouching?4:O.moving?13:0;ee<j&&ee<z&&(H=O,z=ee)}if(H){v.state="chase",v.target={x:H.x,z:H.z},m(v,H.x,H.z,A.chaseSpeed*B,w),v.roarT<=0&&(v.roarT=A.roarCooldown,r(v.x,v.z,mi.roar,"roar"),s("roar",{x:v.x,z:v.z})),z<A.attackRange&&v.atkCool<=0&&d(H,"ciego")&&S(v,H);return}if(v.state==="chase"&&(v.state="investigate",v.cool=9),v.state==="investigate"){if(v.cool-=w,m(v,v.target.x,v.target.z,A.chaseSpeed*B,w)<1.5){const ee=M(v.x,v.z,A.smellRange);ee?(v.smellCool=A.smellCool,v.target={x:ee.x,z:ee.z},v.cool=10):(v.state="patrol",v.target=h())}else v.cool<=0&&(v.state="patrol",v.target=h());return}if(v.smellCool<=0){const O=M(v.x,v.z,A.smellRange);if(O){v.smellCool=A.smellCool,v.state="investigate",v.cool=10,v.target={x:O.x,z:O.z};return}}m(v,v.target.x,v.target.z,A.patrolSpeed*B,w)<2&&(v.target=h())}function P(v){for(let w=n.noises.length-1;w>=0;w--){const A=n.noises[w];if(A.life===.35)for(const B of n.beasts){if(B.state==="chase")continue;const H=B.kind==="ciego"?Gn.ciego:Gn.jauria;Math.hypot(B.x-A.x,B.z-A.z)<Math.min(A.r,H.hearRange)&&(B.state="investigate",B.cool=B.kind==="ciego"?12:8,B.target=B.kind==="ciego"?{x:A.x,z:A.z}:{x:A.x+(e()-.5)*6,z:A.z+(e()-.5)*6})}A.life-=v,A.life<=0&&n.noises.splice(w,1)}}function I(v){for(const w of n.players.values()){if(w.state!=="alive"||w.escaped)continue;if(!w.moving){w.noiseAccum=0;continue}if(w.noiseAccum+=v,w.noiseAccum<.45)continue;w.noiseAccum=0;const A=w.running?mi.run:w.crouching?mi.crouch:mi.walk;r(w.x,w.z,A,"steps")}}function D(v){for(const w of n.players.values())w.state!=="alive"||w.escaped||(w.scentAcc+=v,!(w.scentAcc<2)&&(w.scentAcc=0,w.scentTrail.push({x:w.x,z:w.z,t:n.time}),w.scentTrail.length>16&&w.scentTrail.shift()))}function M(v,w,A){let B=null,H=A;for(const z of n.players.values())if(!(z.state!=="alive"||z.escaped))for(const K of z.scentTrail){if(n.time-K.t>35)continue;const O=Math.hypot(K.x-v,K.z-w);O<H&&(H=O,B=K)}return B}n.start=function(v){if(n.phase===Zt.LOBBY){n.phase=Zt.HUNT,n.beaconsTaken.fill(!1),n.pressure=0,n.extractionLeft=Mn.extractionTime,n.radioOn=!1,n.gateOpen=!1,n.alto=null,n.activeBeasts={alto:v?.activeBeasts?.alto!==!1,jauria:v?.activeBeasts?.jauria!==!1,ciego:v?.activeBeasts?.ciego!==!1},n.dayPhase=!0,n.beasts=[];for(const w of n.players.values())w.state="alive",w.escaped=!1,w.sanity=0,w.downT=0,w.invuln=2,w.x=t.spawn.x+(e()-.5)*6,w.z=t.spawn.z+(e()-.5)*6,w.y=mn(t,w.x,w.z);s("start",{seed:n.seed})}};function L(v){if(n.phase===Zt.EXTRACTION&&!n.gateOpen&&(n.extractionLeft-=v,n.extractionLeft<=0&&(n.extractionLeft=0,n.gateOpen=!0,s("gateOpen",{}))),n.gateOpen)for(const w of a())Math.hypot(w.x-t.gate.x,w.z-t.gate.z)<5&&(w.escaped=!0,s("escaped",{id:w.id,name:w.name}));for(const w of n.players.values())w.invuln>0&&(w.invuln=Math.max(0,w.invuln-v));for(const w of n.players.values()){if(w.state!=="down")continue;w.downT-=v,n.time-(w._lastRevivedAt??-1/0)<.25||(w.reviveProgress=Math.max(0,w.reviveProgress-v*.6)),w.downT<=0&&p(w,"bleedout")}if(n.phase===Zt.HUNT||n.phase===Zt.EXTRACTION){const w=o(),A=[...n.players.values()].filter(B=>B.escaped);n.players.size>0&&w.length===0&&(n.phase=A.length>0?Zt.ESCAPED:Zt.WIPED,s("over",{phase:n.phase,escaped:A.length}))}}return n.tick=function(v){if(n.time+=v,n.phase!==Zt.HUNT&&n.phase!==Zt.EXTRACTION){L(v);return}if(!n.dayPhase){I(v),D(v),P(v);for(const w of n.beasts)w.kind==="jauria"?C(w,v):E(w,v);n.activeBeasts.alto&&T(v)}L(v)},n.snapshot=function(){return{t:+n.time.toFixed(2),phase:n.phase,beacons:n.beaconsTaken.slice(),extraction:+n.extractionLeft.toFixed(1),radioOn:n.radioOn,gateOpen:n.gateOpen,dayPhase:n.dayPhase,pressure:+n.pressure.toFixed(2),players:[...n.players.values()].map(v=>({id:v.id,n:v.name,x:+v.x.toFixed(2),y:+v.y.toFixed(2),z:+v.z.toFixed(2),fx:+v.fx.toFixed(3),fz:+v.fz.toFixed(3),s:v.state,d:+v.downT.toFixed(1),rp:+v.reviveProgress.toFixed(2),l:v.lightOn?v.lightFocus?2:1:0,e:v.escaped,r:v.ready,run:v.running})),beasts:n.beasts.map(v=>({id:v.id,k:v.kind,x:+v.x.toFixed(2),y:+v.y.toFixed(2),z:+v.z.toFixed(2),fx:+v.fx.toFixed(3),fz:+v.fz.toFixed(3),s:v.state})),alto:n.alto&&n.alto.active?{x:+n.alto.x.toFixed(2),y:+n.alto.y.toFixed(2),z:+n.alto.z.toFixed(2)}:null}},n.drainEvents=function(){const v=n.events;return n.events=[],v},n}function wf(){const i=new Map;return{on(e,t){return(i.get(e)||i.set(e,[]).get(e)).push(t),this},emit(e,t){(i.get(e)||[]).forEach(n=>n(t))}}}function Af({name:i}){const e=iM(Ic((Date.now()^1542469173)>>>0)),t=CM(nM(e)),n=wf(),s="me";t.addPlayer(s,i),t.setReady(s,!0);let r=0;const a={id:s,code:e,world:t.world,snapshot:null,local:!0,host:!0,sim:t,on:n.on.bind(n),start(o){t.start(o)},send(o,l={}){switch(o){case"in":t.setInput(s,l);break;case"pickup":t.pickupBeacon(s,l.index);break;case"radio":t.activateRadio(s);break;case"ping":t.ping(s);break;case"revive":t.revive(s,l.id);break;case"ready":t.setReady(s,l.ready);break;case"start":t.start(l);break;case"restart":t.phase=Zt.LOBBY,t.start(l);break}},update(o){for(r+=Math.min(o,.25);r>=jo;)t.tick(jo),r-=jo;a.snapshot=t.snapshot();const l=t.drainEvents();l.length&&n.emit("events",l),n.emit("snapshot",a.snapshot)},close(){}};return a}function PM({url:i,name:e,code:t,host:n}){const s=wf(),r={id:null,code:t||null,world:null,snapshot:null,local:!1,host:!!n,connected:!1,on:s.on.bind(s),update(){}};let a,o=[];try{a=new WebSocket(i)}catch{return setTimeout(()=>s.emit("error","No se pudo abrir la conexión."),0),r}return a.addEventListener("open",()=>{r.connected=!0,a.send(JSON.stringify({t:"hello",name:e,code:t||null,host:!!n})),o.forEach(l=>a.send(l)),o=[]}),a.addEventListener("message",l=>{let c;try{c=JSON.parse(l.data)}catch{return}switch(c.t){case"welcome":r.id=c.id,r.code=c.code,r.host=c.host,r.seed=c.seed,s.emit("welcome",c);break;case"snap":r.snapshot=c.s,s.emit("snapshot",c.s);break;case"ev":s.emit("events",c.e);break;case"err":s.emit("error",c.m);break}}),a.addEventListener("close",()=>{r.connected=!1,s.emit("closed")}),a.addEventListener("error",()=>s.emit("error","Se perdió la conexión con la partida.")),r.send=function(l,c={}){const f=JSON.stringify({t:l,...c});a.readyState===WebSocket.OPEN?a.send(f):a.readyState===WebSocket.CONNECTING&&o.push(f)},r.start=l=>r.send("start",l),r.close=()=>{try{a.close()}catch{}},r}function IM(){const i=location.protocol==="https:"?"wss:":"ws:";return location.port==="5173"||location.port==="4173"?`${i}//${location.hostname}:8787`:`${i}//${location.host}`}const vt=i=>document.getElementById(i),it={scene:vt("scene"),loading:vt("screenLoading"),loadingLabel:vt("loadingLabel"),loadBarFill:vt("loadBarFill"),boot:vt("screenBoot"),lobby:vt("screenLobby"),end:vt("screenEnd"),nameInput:vt("nameInput"),codeInput:vt("codeInput"),pickAlto:vt("pickAlto"),pickJauria:vt("pickJauria"),pickCiego:vt("pickCiego"),btnSolo:vt("btnSolo"),btnHost:vt("btnHost"),joinForm:vt("joinForm"),bootNote:vt("bootNote"),lobbyCode:vt("lobbyCode"),roster:vt("roster"),btnReady:vt("btnReady"),btnStart:vt("btnStart"),btnLeave:vt("btnLeave"),lobbyNote:vt("lobbyNote"),endTitle:vt("endTitle"),endText:vt("endText"),endStamp:vt("endStamp"),btnAgain:vt("btnAgain"),btnMenu:vt("btnMenu"),btnReport:vt("btnReport"),touch:vt("touch"),stickZone:vt("stickZone"),stick:vt("stick"),pads:vt("pads"),mapWrap:vt("mapWrap"),mapClose:vt("mapClose"),mapNote:vt("mapNote")},ct=SM(),It=TM();let $t;const si=AM();si.init();function Qi(i){try{navigator.vibrate?.(i)}catch{}}const Xn=yM(it.scene,{onBuzz:Qi,onUnlock:()=>{le.running&&!ct.mapOpen&&ct.say("Haz clic para volver al bosque.",6)},onLockDenied:()=>{le.running&&ct.say("Haz clic en la pantalla para mirar alrededor.",8)}}),le={session:null,player:null,world:null,running:!1,screen:"boot",myId:null,lastSnap:null,netAcc:0,heartAcc:0,ended:!1,iAmDead:!1,altoWasNear:!1,reviveTarget:null,reviveAcc:0,activeBeasts:{alto:!0,jauria:!0,ciego:!0},telemetryAcc:0},Lc=()=>(it.nameInput.value||"").trim().slice(0,14)||"Rastreador",Rf=()=>({alto:it.pickAlto.checked,jauria:it.pickJauria.checked,ciego:it.pickCiego.checked});function es(i){le.screen=i,it.boot.hidden=i!=="boot",it.lobby.hidden=i!=="lobby",it.end.hidden=i!=="end",ct.show(i==="game"),it.touch.hidden=!(i==="game"&&Xn.touch),ct.setCrosshair(i==="game")}function LM(){it.btnHost.hidden=!0,document.getElementById("joinForm").hidden=!0,it.bootNote.innerHTML="Versión de un jugador. El co-op de 2 a 6 existe y funciona, pero necesita el servidor Node del repositorio corriendo: <code>npm start</code>."}function NM(){navigator.maxTouchPoints>0&&!matchMedia("(pointer:fine)").matches&&(Xn.setupTouch(it.stickZone,it.stick,it.pads),it.bootNote.textContent="Joystick para andar, arrastra para mirar.",it.mapNote.innerHTML="Mapa del coto · toca para cerrar")}function Nc(){ct.mapOpen&&(ct.toggleMap(!1),Qi(10))}it.mapClose.addEventListener("click",i=>{i.stopPropagation(),Nc()});it.mapWrap.addEventListener("pointerdown",Nc);window.addEventListener("keydown",i=>{i.code==="Escape"&&ct.mapOpen&&(i.preventDefault(),Nc())});function Dc(){$t?.resize(),ct.resize()}window.addEventListener("resize",Dc);it.btnSolo.addEventListener("click",()=>{It.start(),le.activeBeasts=Rf(),si.log("sessionStart",{mode:"solo",activeBeasts:le.activeBeasts});const i=Af({name:Lc()});Uc(i),i.start({activeBeasts:le.activeBeasts}),Fc()});it.btnHost.addEventListener("click",()=>{It.start(),le.activeBeasts=Rf(),si.log("sessionStart",{mode:"host",activeBeasts:le.activeBeasts}),Cf({host:!0})});it.joinForm.addEventListener("submit",i=>{i.preventDefault();const e=it.codeInput.value.trim().toUpperCase();if(e.length!==Mn.roomCodeLength){it.bootNote.textContent=`El código son ${Mn.roomCodeLength} letras.`;return}It.start(),si.log("sessionStart",{mode:"join"}),Cf({host:!1,code:e})});function Cf({host:i,code:e}){it.bootNote.textContent="Conectando con el puesto de control…";const t=PM({url:IM(),name:Lc(),code:e,host:i});Uc(t),t.on("welcome",n=>{le.world=bf(n.seed),$t.buildWorld(le.world),it.lobbyCode.textContent=n.code,it.btnStart.hidden=!n.host,es("lobby")}),t.on("error",n=>{it.bootNote.textContent=n,es("boot")}),t.on("closed",()=>{le.screen!=="boot"&&(it.bootNote.textContent="Se cortó la conexión con la partida.",oo())})}it.btnReady.addEventListener("click",()=>{const i=(le.lastSnap?.players||[]).find(e=>e.id===le.session?.id);le.session?.send("ready",{ready:!i?.r})});it.btnStart.addEventListener("click",()=>le.session?.send("start",{activeBeasts:le.activeBeasts}));it.btnLeave.addEventListener("click",oo);it.btnMenu.addEventListener("click",oo);it.btnReport.addEventListener("click",()=>si.download());it.btnAgain.addEventListener("click",()=>{if(!le.session)return oo();if(le.session.local){const i=Af({name:Lc()});Uc(i),i.start({activeBeasts:le.activeBeasts}),Fc()}else le.session.send("restart",{activeBeasts:le.activeBeasts}),es("lobby")});function oo(){le.running=!1,le.session?.close(),le.session=null,It.stopAll(),document.exitPointerLock?.(),es("boot")}function DM(i){if(le.screen!=="lobby")return;it.roster.innerHTML=(i.players||[]).map(t=>{const n=t.id===le.session?.id;return`<li class="${t.r?"ready":""} ${n?"me":""}"><b>${Ef(t.n)}</b><span>${t.r?"listo":"esperando"}</span></li>`}).join("");const e=(i.players||[]).length;it.lobbyNote.textContent=e<2?"Puedes empezar solo, pero nadie te levantará del suelo.":`${e} rastreadores dentro. Máximo ${Mn.maxPlayers}.`}function Uc(i){le.session?.close(),le.session=i,le.myId=i.id,i.local&&(le.world=i.world,$t.buildWorld(le.world)),i.on("snapshot",UM),i.on("events",FM)}function UM(i){le.lastSnap=i,le.myId=le.session.id,le.screen==="lobby"&&(DM(i),i.phase===Zt.HUNT&&Fc())}function Fc(){le.world&&(le.player=MM(le.world,$t.camera,Xn,{onSound:(i,e)=>{i==="step"&&It.step(e.running,e.crouch),i==="click"&&It.click()}}),le.running=!0,le.ended=!1,le.iAmDead=!1,Xn.enabled=!0,es("game"),Dc(),ct.toggleMap(!1),ct.say("Ocho balizas. Enciéndelas todas y sube a la torre. De día vas solo — a la tercera, cae la noche.",7),Xn.touch||Xn.requestLock())}function FM(i){for(const e of i)switch(si.log(e.type,e),e.type){case"beacon":{It.pickup(),e.by===le.myId&&Qi([14,40,14]);const t=Mn.beacons-e.count;ct.say(t>0?`${e.name} encendió la baliza de ${e.place}. Quedan ${t}.`:"Las ocho balizas están encendidas. A la torre del guardabosques.",5);break}case"radio":It.radio(),ct.say("Radio encendida. La extracción tarda noventa segundos. Aguantad.",6);break;case"roar":It.roar(e.x,0,e.z);break;case"down":It.scream(),ct.flashHit(),e.id===le.myId&&Qi([50,60,120]),ct.say(e.id===le.myId?"Te han derribado.":`${e.name} está en el suelo.`,4);break;case"revived":ct.say(`${e.byName} levantó a ${e.name}.`,3.5);break;case"death":e.id===le.myId?(le.iAmDead=!0,Qi([90,50,220]),e.cause==="alto"?(ct.triggerJumpscare(),It.jumpscare()):It.scream(),ct.say("Se acabó tu turno.",5)):ct.say(`${e.name} no lo consiguió.`,4);break;case"altoAppear":break;case"nightfall":It.nightfall(),Qi([40,80,40,80,120]),ct.say("Cae la noche. Ya no estás solo en el coto.",6);break;case"gateOpen":It.gate(),ct.say("El portón está abierto. Corred.",6);break;case"escaped":e.id===le.myId?Th(!0,"escapaste"):ct.say(`${e.name} salió del coto.`,4);break;case"over":Th(e.phase===Zt.ESCAPED,e.phase===Zt.ESCAPED?"parcial":"wipe",e.escaped);break;case"join":le.screen==="lobby"&&ct.say(`${e.name} ha entrado.`,3);break}}function Th(i,e,t=0){le.ended||(si.log("runEnd",{won:i,kind:e,escaped:t}),si.send(),le.ended=!0,le.running=!1,Xn.enabled=!1,document.exitPointerLock?.(),It.stopAll(),it.end.classList.toggle("won",i),e==="escapaste"?(it.endStamp.textContent="Parte de incidencias · Salida registrada",it.endTitle.textContent="Fuera del coto",it.endText.textContent="Cruzaste el portón. El expediente 11-B se cierra con una firma más y ninguna explicación."):e==="parcial"?(it.endStamp.textContent="Parte de incidencias · Salida parcial",it.endTitle.textContent=`${t} de vuelta`,it.endText.textContent="Alguien salió. Los demás siguen dentro y el coto vuelve a estar cerrado."):(it.endStamp.textContent="Parte de incidencias · Sin novedad",it.endTitle.textContent="Nadie volvió",it.endText.textContent="Las balizas se apagaron solas antes del amanecer. Nadie ha vuelto a entrar a comprobarlo."),es("end"))}function OM(i,e){const t=le.player.findInteractable(e,le.myId);if(ct.setUseReady(!!t.kind),t.kind==="revive"){const n=(e.players||[]).find(s=>s.id===t.index)?.rp||0;ct.setPrompt(t.label,"E",n/Kt.reviveTime),le.reviveAcc+=i,Xn.holdUse&&le.reviveAcc>=1/Mf&&(le.reviveAcc=0,le.session.send("revive",{id:t.index}))}else t.kind?ct.setPrompt(t.label,"E"):ct.setPrompt(null);for(const n of Xn.consumeActions())switch(n){case"light":le.player.toggleLight();break;case"jump":le.player.jump();break;case"map":ct.toggleMap();break;case"ping":le.session.send("ping"),It.click();break;case"use":t.kind==="beacon"?le.session.send("pickup",{index:t.index}):t.kind==="radio"&&le.session.send("radio");break}}function BM(i,e){return i?i.gateOpen?"Sal por el portón":i.phase===Zt.EXTRACTION?"Aguanta hasta la extracción":e>=Mn.beacons?"Sube a la torre y pide extracción":`Balizas encendidas · ${e} de ${Mn.beacons}`:""}let Eh=performance.now();function Pf(i){requestAnimationFrame(Pf);const e=Math.min(.1,(i-Eh)/1e3);Eh=i,le.session?.update(e);const t=le.lastSnap;if(le.running&&le.player&&t){const n=(t.players||[]).find(c=>c.id===le.myId),s=n?.s==="down";le.player.frozen=s||le.iAmDead||ct.mapOpen,le.player.update(e,t),le.netAcc+=e,le.netAcc>=1/Mf&&(le.netAcc=0,le.session.send("in",le.player.netState())),le.telemetryAcc+=e,le.telemetryAcc>=20&&(le.telemetryAcc=0,si.log("heartbeat",{x:+le.player.x.toFixed(1),z:+le.player.z.toFixed(1),sanity:+le.player.sanity.toFixed(2),dayPhase:t.dayPhase,state:n?.s})),!s&&!le.iAmDead?OM(e,t):(Xn.consumeActions(),ct.setPrompt(null),ct.setUseReady(!1)),$t.syncActors(t,le.myId,e),$t.setDayPhase(t.dayPhase,e),$t.setFlashlight(le.player.lightOn,le.player.lightFocus),$t.updateHand(i*.001,le.player.bob,le.player.running),$t.tickBeacons(i*.001),$t.tickMist(i*.001),$t.setFov(74+le.player.adrenaline*Sr.fovBonus);const r=le.player.forward();It.updateListener(le.player.x,le.player.y+le.player.eye,le.player.z,r.x,r.z),It.updateBeaconHums(le.world.beacons,t.beacons,le.player.x,le.player.z);const a=!!t.alto&&Math.hypot(t.alto.x-le.player.x,t.alto.z-le.player.z)<10&&!le.player.staring;a&&!le.altoWasNear&&(It.dreadPulse(),Qi([30,40,30])),le.altoWasNear=a,It.updateTension({sanity:le.player.sanity,staring:le.player.staring,altoDist:le.player.altoDist??999,exhausted:le.player.exhausted,nearest:le.player.nearestBeast??999,adrenaline:le.player.adrenaline});const o=Math.max(le.player.sanity/100,le.player.adrenaline,le.player.nearestBeast<30?1-le.player.nearestBeast/30:0);le.heartAcc-=e,o>.12&&le.heartAcc<=0&&(le.heartAcc=Math.max(.24,1.25-o*1),It.heartbeat(o));const l=ct.setBeacons(t.beacons);ct.setObjective(BM(t,l)),ct.setMeters(le.player.stamina,le.player.staminaCap,le.player.adrenaline),ct.setNoise(le.player.noiseLevel()),ct.setHidden(le.player.hidden),ct.setSquad(t.players,le.myId),ct.setDowned(s,n?.d??0,(t.players||[]).filter(c=>c.id!==le.myId&&c.s==="alive").length),ct.setTimer(t.phase===Zt.EXTRACTION&&!t.gateOpen?t.extraction:null,"Extracción"),ct.drawMap(le.world,t,{x:le.player.x,z:le.player.z,fx:r.x,fz:r.z},le.myId),ct.drawFx(e,{sanity:le.player.sanity,staring:le.player.staring,adrenaline:le.player.adrenaline,downed:s}),$t.render()}else if(le.screen==="lobby"&&le.world){const n=i*4e-5;$t.camera.position.set(le.world.gate.x*.75+Math.cos(n)*16,le.world.gate.y+4,le.world.gate.z*.75+Math.sin(n)*16),$t.camera.lookAt(le.world.gate.x,le.world.gate.y+2,le.world.gate.z),$t.setFlashlight(!1,!1),$t.tickBeacons(i*.001),$t.render(),ct.drawFx(e,{})}else ct.drawFx(e,{})}async function zM(){const i=eM(t=>{it.loadBarFill.style.width=`${Math.round(t*100)}%`});let e=null;try{e=await i.loadAll()}catch{it.loadingLabel.textContent="No se pudo bajar todo — sigue igual."}$t=mM(it.scene,e),window.__coto=Object.assign(le,{view:$t,hud:ct,audio:It,input:Xn,telemetry:si}),NM(),LM(),Dc(),it.loading.hidden=!0,es("boot"),requestAnimationFrame(Pf)}zM();window.addEventListener("pointerdown",()=>{It.start(),It.resume()},{once:!0});window.addEventListener("keydown",()=>{It.start(),It.resume()},{once:!0});
