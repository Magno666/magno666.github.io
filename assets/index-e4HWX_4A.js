(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const cc="185",Gf=0,Yc=1,Vf=2,ka=1,Fh=2,Tr=3,Ti=0,En=1,mn=2,ri=0,Bs=1,Bi=2,Kc=3,Zc=4,Wf=5,ji=100,Xf=101,qf=102,Yf=103,Kf=104,Zf=200,$f=201,Jf=202,Qf=203,cl=204,ul=205,jf=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,hl=0,fl=1,dl=2,Vs=3,pl=4,ml=5,gl=6,_l=7,uc=0,ld=1,cd=2,ai=0,hc=1,fc=2,dc=3,ro=4,pc=5,mc=6,gc=7,$c="attached",ud="detached",Oh=300,rs=301,Ws=302,Ha=303,_o=304,ao=306,Hi=1e3,Bn=1001,$a=1002,en=1003,Bh=1004,Er=1005,kt=1006,Ga=1007,ii=1008,Pn=1009,zh=1010,kh=1011,Dr=1012,_c=1013,oi=1014,Mn=1015,hn=1016,xc=1017,vc=1018,Ur=1020,Hh=35902,Gh=35899,Vh=1021,Wh=1022,jt=1023,Ei=1026,ts=1027,ns=1028,Mc=1029,Un=1030,yc=1031,Sc=1033,Va=33776,Wa=33777,Xa=33778,qa=33779,xl=35840,vl=35841,Ml=35842,yl=35843,Sl=36196,bl=37492,Tl=37496,El=37488,wl=37489,Ja=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Nl=37813,Dl=37814,Ul=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Qa=36285,Yl=36286,Fr=2300,Or=2301,xo=2302,Jc=2303,Qc=2400,jc=2401,eu=2402,hd=2500,fd=0,Xh=1,Kl=2,dd=3200,Br=0,pd=1,Oi="",Vt="srgb",Zt="srgb-linear",ja="linear",Ct="srgb",ps=7680,tu=519,md=512,gd=513,_d=514,bc=515,xd=516,vd=517,Tc=518,Md=519,Zl=35044,nu="300 es",si=2e3,zr=2001;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){const i=kr("canvas");return i.style.display="block",i}const iu={};function eo(...i){const e="THREE."+i.shift();console.log(e,...i)}function qh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){const e=i.join(" ");e in iu||(iu[e]=!0,it(...i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ed={[hl]:fl,[dl]:gl,[pl]:_l,[Vs]:ml,[fl]:hl,[gl]:dl,[_l]:pl,[ml]:Vs};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const Cr=Math.PI/180,Xs=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Ec(i,e){return(i%e+e)%e}function wd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ad(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function Rd(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function Cd(i,e=1){return e-Math.abs(Ec(i,e*2)-e)}function Pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ld(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Dd(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(su=i);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fd(i){return i*Cr}function Od(i){return i*Xs}function Bd(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Gd={DEG2RAD:Cr,RAD2DEG:Xs,generateUUID:Yn,clamp:yt,euclideanModulo:Ec,mapLinear:wd,inverseLerp:Ad,lerp:Pr,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Nd,randFloatSpread:Dd,seededRandom:Ud,degToRad:Fd,radToDeg:Od,isPowerOfTwo:Bd,ceilPowerOfTwo:zd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Hd,normalize:Lt,denormalize:Xn},Gc=class Gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;let Je=Gc;class Ai{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],v=r[a+2],w=r[a+3];if(f!==w||l!==d||c!==p||h!==v){let _=l*d+c*p+h*v+f*w;_<0&&(d=-d,p=-p,v=-v,w=-w,_=-_);let g=1-o;if(_<.9995){const A=Math.acos(_),C=Math.sin(A);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C,l=l*g+d*o,c=c*g+p*o,h=h*g+v*o,f=f*g+w*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+v*o,f=f*g+w*o;const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+h*f+l*p-c*d,e[t+1]=l*v+h*d+c*f-o*p,e[t+2]=c*v+h*p+o*d-l*f,e[t+3]=h*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"YZX":this._x=d*h*f+c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f-d*p*v;break;case"XZY":this._x=d*h*f-c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f+d*p*v;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vc=class Vc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;let G=Vc;const vo=new G,ru=new Ai,Wc=class Wc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],v=n[8],w=s[0],_=s[3],g=s[6],A=s[1],C=s[4],b=s[7],I=s[2],P=s[5],L=s[8];return r[0]=a*w+o*A+l*I,r[3]=a*_+o*C+l*P,r[6]=a*g+o*b+l*L,r[1]=c*w+h*A+f*I,r[4]=c*_+h*C+f*P,r[7]=c*g+h*b+f*L,r[2]=d*w+p*A+v*I,r[5]=d*_+p*C+v*P,r[8]=d*g+p*b+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,v=t*f+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=f*w,e[1]=(s*c-h*n)*w,e[2]=(o*n-s*a)*w,e[3]=d*w,e[4]=(h*t-s*l)*w,e[5]=(s*r-o*t)*w,e[6]=p*w,e[7]=(n*l-c*t)*w,e[8]=(a*t-n*r)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;let gt=Wc;const Mo=new gt,au=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ct&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Mt=Vd();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ms;class Wd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=kr("canvas")),ms.width=e.width,ms.height=e.height;const s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let qd=0;const So=new G;class tn extends os{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Bn,s=Bn,r=kt,a=ii,o=jt,l=Pn,c=tn.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Yn(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Oh;tn.DEFAULT_ANISOTROPY=1;const Xc=class Xc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],v=l[9],w=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+w)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,b=(p+1)/2,I=(g+1)/2,P=(h+d)/4,L=(f+w)/4,M=(v+_)/4;return C>b&&C>I?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=P/n,r=L/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=P/s,r=M/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=L/r,s=M/r),this.set(n,s,r,t),this}let A=Math.sqrt((_-v)*(_-v)+(f-w)*(f-w)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(_-v)/A,this.y=(f-w)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;let Dt=Xc;class Yd extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new tn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const so=class so{constructor(e,t,n,s,r,a,o,l,c,h,f,d,p,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,p,v,w,_)}set(e,t,n,s,r,a,o,l,c,h,f,d,p,v,w,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=p,g[7]=v,g[11]=w,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new so().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*f,v=o*h,w=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-w*c,t[9]=-o*l,t[2]=w-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,v=c*h,w=c*f;t[0]=d+w*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=w+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,v=c*h,w=c*f;t[0]=d-w*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=w-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,v=o*h,w=o*f;t[0]=l*h,t[4]=v*c-p,t[8]=d*c+w,t[1]=l*f,t[5]=w*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,w=o*c;t[0]=l*h,t[4]=w-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+v,t[10]=d-w*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,w=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+w,t[5]=a*h,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*h,t[10]=w*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,$d)}lookAt(e,t,n){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ci.crossVectors(n,Rn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ci.crossVectors(n,Rn)),Ci.normalize(),ra.crossVectors(Rn,Ci),s[0]=Ci.x,s[4]=ra.x,s[8]=Rn.x,s[1]=Ci.y,s[5]=ra.y,s[9]=Rn.y,s[2]=Ci.z,s[6]=ra.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],v=n[2],w=n[6],_=n[10],g=n[14],A=n[3],C=n[7],b=n[11],I=n[15],P=s[0],L=s[4],M=s[8],m=s[12],T=s[1],E=s[5],N=s[9],z=s[13],V=s[2],k=s[6],Y=s[10],H=s[14],Q=s[3],J=s[7],se=s[11],fe=s[15];return r[0]=a*P+o*T+l*V+c*Q,r[4]=a*L+o*E+l*k+c*J,r[8]=a*M+o*N+l*Y+c*se,r[12]=a*m+o*z+l*H+c*fe,r[1]=h*P+f*T+d*V+p*Q,r[5]=h*L+f*E+d*k+p*J,r[9]=h*M+f*N+d*Y+p*se,r[13]=h*m+f*z+d*H+p*fe,r[2]=v*P+w*T+_*V+g*Q,r[6]=v*L+w*E+_*k+g*J,r[10]=v*M+w*N+_*Y+g*se,r[14]=v*m+w*z+_*H+g*fe,r[3]=A*P+C*T+b*V+I*Q,r[7]=A*L+C*E+b*k+I*J,r[11]=A*M+C*N+b*Y+I*se,r[15]=A*m+C*z+b*H+I*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],w=e[7],_=e[11],g=e[15],A=l*p-c*d,C=o*p-c*f,b=o*d-l*f,I=a*p-c*h,P=a*d-l*h,L=a*f-o*h;return t*(w*A-_*C+g*b)-n*(v*A-_*I+g*P)+s*(v*C-w*I+g*L)-r*(v*b-w*P+_*L)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],w=e[13],_=e[14],g=e[15],A=t*o-n*a,C=t*l-s*a,b=t*c-r*a,I=n*l-s*o,P=n*c-r*o,L=s*c-r*l,M=h*w-f*v,m=h*_-d*v,T=h*g-p*v,E=f*_-d*w,N=f*g-p*w,z=d*g-p*_,V=A*z-C*N+b*E+I*T-P*m+L*M;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/V;return e[0]=(o*z-l*N+c*E)*k,e[1]=(s*N-n*z-r*E)*k,e[2]=(w*L-_*P+g*I)*k,e[3]=(d*P-f*L-p*I)*k,e[4]=(l*T-a*z-c*m)*k,e[5]=(t*z-s*T+r*m)*k,e[6]=(_*b-v*L-g*C)*k,e[7]=(h*L-d*b+p*C)*k,e[8]=(a*N-o*T+c*M)*k,e[9]=(n*T-t*N-r*M)*k,e[10]=(v*P-w*b+g*A)*k,e[11]=(f*b-h*P-p*A)*k,e[12]=(o*m-a*E-l*M)*k,e[13]=(t*E-n*m+s*M)*k,e[14]=(w*C-v*I-_*A)*k,e[15]=(h*I-f*C+d*A)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,v=r*f,w=a*h,_=a*f,g=o*f,A=l*c,C=l*h,b=l*f,I=n.x,P=n.y,L=n.z;return s[0]=(1-(w+g))*I,s[1]=(p+b)*I,s[2]=(v-C)*I,s[3]=0,s[4]=(p-b)*P,s[5]=(1-(d+g))*P,s[6]=(_+A)*P,s[7]=0,s[8]=(v+C)*L,s[9]=(_-A)*L,s[10]=(1-(d+w))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);const c=1/a,h=1/o,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=si,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let v,w;if(l)v=r/(a-r),w=a*r/(a-r);else if(o===si)v=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===zr)v=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,w;if(l)v=1/(a-r),w=a/(a-r);else if(o===si)v=-2/(a-r),w=-(a+r)/(a-r);else if(o===zr)v=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};so.prototype.isMatrix4=!0;let xt=so;const gs=new G,zn=new xt,Zd=new G(0,0,0),$d=new G(1,1,1),Ci=new G,ra=new G,Rn=new G,lu=new xt,cu=new Ai;class wi{constructor(e=0,t=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jd=0;const uu=new G,_s=new Ai,pi=new xt,aa=new G,rr=new G,Qd=new G,jd=new Ai,hu=new G(1,0,0),fu=new G(0,1,0),du=new G(0,0,1),pu={type:"added"},ep={type:"removed"},xs={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ft extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,t=new wi,n=new Ai,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new gt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(rr,aa,this.up):pi.lookAt(aa,rr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(pi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),xs.child=e,this.dispatchEvent(xs),xs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ep),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class It extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tp={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,n),g=this._getHandJoint(c,w);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=Ec(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Mt.workingToColorSpace(dn.copy(this),e),Math.round(yt(dn.r*255,0,255))*65536+Math.round(yt(dn.g*255,0,255))*256+Math.round(yt(dn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(dn.copy(this),t);const n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Vt){Mt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,s=dn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(oa);const n=Pr(Pi.h,oa.h,t),s=Pr(Pi.s,oa.s,t),r=Pr(Pi.l,oa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new He;He.NAMES=Zh;class Ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class np extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new G,mi=new G,wo=new G,gi=new G,vs=new G,Ms=new G,mu=new G,Ao=new G,Ro=new G,Co=new G,Po=new Dt,Io=new Dt,Lo=new Dt;class Fn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),mi.subVectors(n,t),wo.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(mi),l=kn.dot(wo),c=mi.dot(mi),h=mi.dot(wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Po.setScalar(0),Io.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),mi.subVectors(e,t),kn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),kn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;vs.subVectors(s,n),Ms.subVectors(r,n),Ao.subVectors(e,n);const l=vs.dot(Ao),c=Ms.dot(Ao);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,s);const h=vs.dot(Ro),f=Ms.dot(Ro);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(vs,a);Co.subVectors(e,r);const p=vs.dot(Co),v=Ms.dot(Co);if(v>=0&&p<=v)return t.copy(r);const w=p*c-l*v;if(w<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ms,o);const _=h*v-p*f;if(_<=0&&f-h>=0&&p-v>=0)return mu.subVectors(r,s),o=(f-h)/(f-h+(p-v)),t.copy(s).addScaledVector(mu,o);const g=1/(_+w+d);return a=w*g,o=d*g,t.copy(n).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),ca.subVectors(this.max,ar),ys.subVectors(e.a,ar),Ss.subVectors(e.b,ar),bs.subVectors(e.c,ar),Ii.subVectors(Ss,ys),Li.subVectors(bs,Ss),qi.subVectors(ys,bs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-qi.z,qi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,qi.z,0,-qi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-qi.y,qi.x,0];return!No(t,ys,Ss,bs,ca)||(t=[1,0,0,0,1,0,0,0,1],!No(t,ys,Ss,bs,ca))?!1:(ua.crossVectors(Ii,Li),t=[ua.x,ua.y,ua.z],No(t,ys,Ss,bs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,la=new Kn,ys=new G,Ss=new G,bs=new G,Ii=new G,Li=new G,qi=new G,ar=new G,ca=new G,ua=new G,Yi=new G;function No(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);const o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mi=ip();function ip(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function sp(i){Math.abs(i)>65504&&it("DataUtils.toHalfFloat(): Value out of range."),i=yt(i,-65504,65504),Mi.floatView[0]=i;const e=Mi.uint32View[0],t=e>>23&511;return Mi.baseTable[t]+((e&8388607)>>Mi.shiftTable[t])}function rp(i){const e=i>>10;return Mi.uint32View[0]=Mi.mantissaTable[Mi.offsetTable[e]+(i&1023)]+Mi.exponentTable[e],Mi.floatView[0]}class Ki{static toHalfFloat(e){return sp(e)}static fromHalfFloat(e){return rp(e)}}const Kt=new G,ha=new Je;let ap=0;class nn extends os{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $h extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const op=new Kn,or=new G,Do=new G;class ci{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Do)),this.expandByPoint(or.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const Nn=new xt,Uo=new Ft,Ts=new G,Cn=new Kn,lr=new Kn,ln=new G;class an extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Jh:$h)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Cn.min,lr.min),Cn.expandByPoint(ln),ln.addVectors(Cn.max,lr.max),Cn.expandByPoint(ln)):(Cn.expandByPoint(lr.min),Cn.expandByPoint(lr.max))}Cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),ln.add(Ts)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new G,l[M]=new G;const c=new G,h=new G,f=new G,d=new Je,p=new Je,v=new Je,w=new G,_=new G;function g(M,m,T){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),f.fromBufferAttribute(n,T),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,m),v.fromBufferAttribute(r,T),h.sub(c),f.sub(c),p.sub(d),v.sub(d);const E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(w.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(E),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(E),o[M].add(w),o[m].add(w),o[T].add(w),l[M].add(_),l[m].add(_),l[T].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let M=0,m=A.length;M<m;++M){const T=A[M],E=T.start,N=T.count;for(let z=E,V=E+N;z<V;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const C=new G,b=new G,I=new G,P=new G;function L(M){I.fromBufferAttribute(s,M),P.copy(I);const m=o[M];C.copy(m),C.sub(I.multiplyScalar(I.dot(m))).normalize(),b.crossVectors(P,m);const E=b.dot(l[M])<0?-1:1;a.setXYZW(M,C.x,C.y,C.z,E)}for(let M=0,m=A.length;M<m;++M){const T=A[M],E=T.start,N=T.count;for(let z=E,V=E+N;z<V;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),w=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,w),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,_),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let w=0,_=l.length;w<_;w++){o.isInterleavedBufferAttribute?p=l[w]*o.data.stride+o.offset:p=l[w]*h;for(let g=0;g<h;g++)d[v++]=c[p++]}return new nn(d,h,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new G;class Hr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let cp=0;class In extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Bs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jh extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const cr=new G,ws=new G,As=new G,Rs=new Je,ur=new Je,ef=new xt,fa=new G,hr=new G,da=new G,gu=new Je,Fo=new Je,_u=new Je;class up extends Ft{constructor(e=new jh){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new an;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qh(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Hr(n,3,0,!1)),Es.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),ef.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;pa(fa.set(-.5,-.5,0),As,a,ws,s,r),pa(hr.set(.5,-.5,0),As,a,ws,s,r),pa(da.set(.5,.5,0),As,a,ws,s,r),gu.set(0,0),Fo.set(1,0),_u.set(1,1);let o=e.ray.intersectTriangle(fa,hr,da,!1,cr);if(o===null&&(pa(hr.set(-.5,.5,0),As,a,ws,s,r),Fo.set(0,1),o=e.ray.intersectTriangle(fa,da,hr,!1,cr),o===null))return;const l=e.ray.origin.distanceTo(cr);l<e.near||l>e.far||t.push({distance:l,point:cr.clone(),uv:Fn.getInterpolation(cr,fa,hr,da,gu,Fo,_u,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(i,e,t,n,s,r){Rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Rs.x-s*Rs.y,ur.y=s*Rs.x+r*Rs.y):ur.copy(Rs),i.copy(e),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(ef)}const xi=new G,Oo=new G,ma=new G,Ni=new G,Bo=new G,ga=new G,zo=new G;class oo{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oo.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Oo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ma),o=Ni.dot(this.direction),l=-Ni.dot(ma),c=Ni.lengthSq(),h=Math.abs(1-a*a);let f,d,p,v;if(h>0)if(f=a*l-o,d=a*o-l,v=r*h,f>=0)if(d>=-v)if(d<=v){const w=1/h;f*=w,d*=w,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oo).addScaledVector(ma,d),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Bo.subVectors(t,e),ga.subVectors(n,e),zo.crossVectors(Bo,ga);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(ga.crossVectors(Ni,ga));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Ni));if(c<0||l+c>a)return null;const h=-o*Ni.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xu=new xt,Zi=new oo,_a=new ci,vu=new G,xa=new G,va=new G,Ma=new G,ko=new G,ya=new G,Mu=new G,Sa=new G;class bt extends Ft{constructor(e=new an,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ko.fromBufferAttribute(f,e),a?ya.addScaledVector(ko,h):ya.addScaledVector(ko.sub(t),h))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(_a.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(_a,vu)===null||Zi.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(xu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=d.length;v<w;v++){const _=d[v],g=a[_.materialIndex],A=Math.max(_.start,p.start),C=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let b=A,I=C;b<I;b+=3){const P=o.getX(b),L=o.getX(b+1),M=o.getX(b+2);s=ba(this,g,e,n,c,h,f,P,L,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),w=Math.min(o.count,p.start+p.count);for(let _=v,g=w;_<g;_+=3){const A=o.getX(_),C=o.getX(_+1),b=o.getX(_+2);s=ba(this,a,e,n,c,h,f,A,C,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,w=d.length;v<w;v++){const _=d[v],g=a[_.materialIndex],A=Math.max(_.start,p.start),C=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let b=A,I=C;b<I;b+=3){const P=b,L=b+1,M=b+2;s=ba(this,g,e,n,c,h,f,P,L,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let _=v,g=w;_<g;_+=3){const A=_,C=_+1,b=_+2;s=ba(this,a,e,n,c,h,f,A,C,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function hp(i,e,t,n,s,r,a,o){let l;if(e.side===En?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function ba(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,Ma);const h=hp(i,e,t,n,xa,va,Ma,Mu);if(h){const f=new G;Fn.getBarycoord(Mu,xa,va,Ma,f),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,f,new Je)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,f,new Je)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Fn.getNormal(xa,va,Ma,d.normal),h.face=d,h.barycoord=f}return h}const fr=new Dt,yu=new Dt,Su=new Dt,fp=new Dt,bu=new xt,Ta=new G,Ho=new ci,Tu=new xt,Go=new oo;class dp extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingSphere.expandByPoint(Ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(s),e.ray.intersectsSphere(Ho)!==!1&&(Tu.copy(s).invert(),Go.copy(e.ray).applyMatrix4(Tu),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),Su.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fr.copy(t),t.set(0,0,0,0)):(fr.set(...t,1),t.set(0,0,0)),fr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Su.getComponent(r);if(a!==0){const o=yu.getComponent(r);bu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fp.copy(fr).applyMatrix4(bu),a)}}return t.isVector4&&(t.w=fr.w),t.applyMatrix4(this.bindMatrixInverse)}}class tf extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gr extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=en,h=en,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new xt,pp=new xt;class Rc{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:pp;Eu.multiplyMatrices(o,t[r]),Eu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gr(t,e,e,jt,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(it("Skeleton: No bone found with UUID:",r),a=new tf),this.bones.push(a),this.boneInverses.push(new xt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class $l extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new xt,wu=new xt,Ea=[],Au=new Kn,mp=new xt,dr=new bt,pr=new ci;class Jl extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Au.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),pr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),wu.multiplyMatrices(n,Cs),dr.matrixWorld=wu,dr.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){const l=Ea[a];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,ns,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vo=new G,gp=new G,_p=new gt;class Qi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vo.subVectors(n,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_p.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new ci,xp=new Je(.5,.5),wa=new G;class Cc{constructor(e=new Qi,t=new Qi,n=new Qi,s=new Qi,r=new Qi,a=new Qi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],v=r[8],w=r[9],_=r[10],g=r[11],A=r[12],C=r[13],b=r[14],I=r[15];if(s[0].setComponents(c-a,p-h,g-v,I-A).normalize(),s[1].setComponents(c+a,p+h,g+v,I+A).normalize(),s[2].setComponents(c+o,p+f,g+w,I+C).normalize(),s[3].setComponents(c-o,p-f,g-w,I-C).normalize(),n)s[4].setComponents(l,d,_,b).normalize(),s[5].setComponents(c-l,p-d,g-_,I-b).normalize();else if(s[4].setComponents(c-l,p-d,g-_,I-b).normalize(),t===si)s[5].setComponents(c+l,p+d,g+_,I+b).normalize();else if(t===zr)s[5].setComponents(l,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=xp.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pc extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new G,no=new G,Ru=new xt,mr=new oo,Aa=new ci,Wo=new G,Cu=new G;class lo extends Ft{constructor(e=new an,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)to.fromBufferAttribute(t,s-1),no.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=to.distanceTo(no);e.setAttribute("lineDistance",new Wt(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Ru.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let w=p,_=v-1;w<_;w+=c){const g=h.getX(w),A=h.getX(w+1),C=Ra(this,e,mr,l,g,A,w);C&&t.push(C)}if(this.isLineLoop){const w=h.getX(v-1),_=h.getX(p),g=Ra(this,e,mr,l,w,_,v-1);g&&t.push(g)}}else{const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let w=p,_=v-1;w<_;w+=c){const g=Ra(this,e,mr,l,w,w+1,w);g&&t.push(g)}if(this.isLineLoop){const w=Ra(this,e,mr,l,v-1,p,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ra(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(to.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),t.distanceSqToSegment(to,no,Wo,Cu)>n)return;Wo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wo);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Pu=new G,Iu=new G;class vp extends lo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pu.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new Wt(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mp extends lo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nf extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new xt,Ql=new oo,Ca=new ci,Pa=new G;class yp extends Ft{constructor(e=new an,t=new nf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Lu.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(Lu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,w=p;v<w;v++){const _=c.getX(v);Pa.fromBufferAttribute(f,_),Nu(Pa,_,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,w=p;v<w;v++)Pa.fromBufferAttribute(f,v),Nu(Pa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nu(i,e,t,n,s,r,a){const o=Ql.distanceSqToPoint(i);if(o<t){const l=new G;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sf extends tn{constructor(e=[],t=rs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class co extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends tn{constructor(e,t,n=oi,s,r,a,o=en,l=en,c,h=Ei,f=1){if(h!==Ei&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sp extends qs{constructor(e,t=oi,n=rs,s,r,a=en,o=en,l,c=Ei){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rf extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gi extends an{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function v(w,_,g,A,C,b,I,P,L,M,m){const T=b/L,E=I/M,N=b/2,z=I/2,V=P/2,k=L+1,Y=M+1;let H=0,Q=0;const J=new G;for(let se=0;se<Y;se++){const fe=se*E-z;for(let Se=0;Se<k;Se++){const $e=Se*T-N;J[w]=$e*A,J[_]=fe*C,J[g]=V,c.push(J.x,J.y,J.z),J[w]=0,J[_]=0,J[g]=P>0?1:-1,h.push(J.x,J.y,J.z),f.push(Se/L),f.push(1-se/M),H+=1}}for(let se=0;se<M;se++)for(let fe=0;fe<L;fe++){const Se=d+fe+k*se,$e=d+fe+k*(se+1),de=d+(fe+1)+k*(se+1),lt=d+(fe+1)+k*se;l.push(Se,$e,lt),l.push($e,de,lt),Q+=6}o.addGroup(p,Q,m),p+=Q,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class un extends an{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],p=[];let v=0;const w=[],_=n/2;let g=0;A(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function A(){const b=new G,I=new G;let P=0;const L=(t-e)/n;for(let M=0;M<=r;M++){const m=[],T=M/r,E=T*(t-e)+e;for(let N=0;N<=s;N++){const z=N/s,V=z*l+o,k=Math.sin(V),Y=Math.cos(V);I.x=E*k,I.y=-T*n+_,I.z=E*Y,f.push(I.x,I.y,I.z),b.set(k,L,Y).normalize(),d.push(b.x,b.y,b.z),p.push(z,1-T),m.push(v++)}w.push(m)}for(let M=0;M<s;M++)for(let m=0;m<r;m++){const T=w[m][M],E=w[m+1][M],N=w[m+1][M+1],z=w[m][M+1];(e>0||m!==0)&&(h.push(T,E,z),P+=3),(t>0||m!==r-1)&&(h.push(E,N,z),P+=3)}c.addGroup(g,P,0),g+=P}function C(b){const I=v,P=new Je,L=new G;let M=0;const m=b===!0?e:t,T=b===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,_*T,0),d.push(0,T,0),p.push(.5,.5),v++;const E=v;for(let N=0;N<=s;N++){const V=N/s*l+o,k=Math.cos(V),Y=Math.sin(V);L.x=m*Y,L.y=_*T,L.z=m*k,f.push(L.x,L.y,L.z),d.push(0,T,0),P.x=k*.5+.5,P.y=Y*.5*T+.5,p.push(P.x,P.y),v++}for(let N=0;N<s;N++){const z=I+N,V=E+N;b===!0?h.push(V,V+1,z):h.push(V+1,V,z),M+=3}c.addGroup(g,M,b===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends un{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ir(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ic extends an{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const C=new G,b=new G,I=new G;for(let P=0;P<t.length;P+=3)p(t[P+0],C),p(t[P+1],b),p(t[P+2],I),l(C,b,I,A)}function l(A,C,b,I){const P=I+1,L=[];for(let M=0;M<=P;M++){L[M]=[];const m=A.clone().lerp(b,M/P),T=C.clone().lerp(b,M/P),E=P-M;for(let N=0;N<=E;N++)N===0&&M===P?L[M][N]=m:L[M][N]=m.clone().lerp(T,N/E)}for(let M=0;M<P;M++)for(let m=0;m<2*(P-M)-1;m++){const T=Math.floor(m/2);m%2===0?(d(L[M][T+1]),d(L[M+1][T]),d(L[M][T])):(d(L[M][T+1]),d(L[M+1][T+1]),d(L[M+1][T]))}}function c(A){const C=new G;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(A),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function h(){const A=new G;for(let C=0;C<r.length;C+=3){A.x=r[C+0],A.y=r[C+1],A.z=r[C+2];const b=_(A)/2/Math.PI+.5,I=g(A)/Math.PI+.5;a.push(b,1-I)}v(),f()}function f(){for(let A=0;A<a.length;A+=6){const C=a[A+0],b=a[A+2],I=a[A+4],P=Math.max(C,b,I),L=Math.min(C,b,I);P>.9&&L<.1&&(C<.2&&(a[A+0]+=1),b<.2&&(a[A+2]+=1),I<.2&&(a[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,C){const b=A*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function v(){const A=new G,C=new G,b=new G,I=new G,P=new Je,L=new Je,M=new Je;for(let m=0,T=0;m<r.length;m+=9,T+=6){A.set(r[m+0],r[m+1],r[m+2]),C.set(r[m+3],r[m+4],r[m+5]),b.set(r[m+6],r[m+7],r[m+8]),P.set(a[T+0],a[T+1]),L.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),I.copy(A).add(C).add(b).divideScalar(3);const E=_(I);w(P,T+0,A,E),w(L,T+2,C,E),w(M,T+4,b,E)}}function w(A,C,b,I){I<0&&A.x===1&&(a[C]=A.x-1),b.x===0&&b.z===0&&(a[C]=I/2/Math.PI+.5)}function _(A){return Math.atan2(A.z,-A.x)}function g(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.vertices,e.indices,e.radius,e.detail)}}class uo extends Ic{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uo(e.radius,e.detail)}}class Vi extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,p=[],v=[],w=[],_=[];for(let g=0;g<h;g++){const A=g*d-a;for(let C=0;C<c;C++){const b=C*f-r;v.push(b,-A,0),w.push(0,0,1),_.push(C/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let A=0;A<o;A++){const C=A+c*g,b=A+c*(g+1),I=A+1+c*(g+1),P=A+1+c*g;p.push(C,b,P),p.push(b,I,P)}this.setIndex(p),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(w,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends an{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new G,d=new G,p=[],v=[],w=[],_=[];for(let g=0;g<=n;g++){const A=[],C=g/n,b=a+C*o,I=e*Math.cos(b),P=Math.sqrt(e*e-I*I);let L=0;g===0&&a===0?L=.5/t:g===n&&l===Math.PI&&(L=-.5/t);for(let M=0;M<=t;M++){const m=M/t,T=s+m*r;f.x=-P*Math.cos(T),f.y=I,f.z=P*Math.sin(T),v.push(f.x,f.y,f.z),d.copy(f).normalize(),w.push(d.x,d.y,d.z),_.push(m+L,1-C),A.push(c++)}h.push(A)}for(let g=0;g<n;g++)for(let A=0;A<t;A++){const C=h[g][A+1],b=h[g][A],I=h[g+1][A],P=h[g+1][A+1];(g!==0||a>0)&&p.push(C,b,P),(g!==n-1||l<Math.PI)&&p.push(b,I,P)}this.setIndex(p),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(w,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Du(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Du(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){const e={};for(let t=0;t<i.length;t++){const n=Ys(i[t]);for(const s in n)e[s]=n[s]}return e}function Du(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function af(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Vr={clone:Ys,merge:xn};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class of extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bi extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jl extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=uc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wp extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ap extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rp extends In{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new He(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ia(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Uu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Pp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class $s{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ip extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jc:r=e,o=2*t-n;break;case eu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:a=e,l=2*n-t;break;case eu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),w=v*v,_=w*v,g=-d*_+2*d*w-d*v,A=(1+d)*_+(-1.5-2*d)*w+(-.5+d)*v+1,C=(-1-p)*_+(1.5+p)*w+.5*v,b=p*_-p*w;for(let I=0;I!==o;++I)r[I]=g*a[h+I]+A*a[c+I]+C*a[l+I]+b*a[f+I];return r}}class Lp extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}}class Np extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dp extends $s{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){const v=(n-t)/(s-t),w=1-v;for(let _=0;_!==o;++_)r[_]=a[c+_]*w+a[l+_]*v;return r}const d=o*2,p=e-1;for(let v=0;v!==o;++v){const w=a[c+v],_=a[l+v],g=p*d+v*2,A=f[g],C=f[g+1],b=e*d+v*2,I=h[b],P=h[b+1];let L=(n-t)/(s-t),M,m,T,E,N;for(let z=0;z<8;z++){M=L*L,m=M*L,T=1-L,E=T*T,N=E*T;const k=N*t+3*E*L*A+3*T*M*I+m*s-n;if(Math.abs(k)<1e-10)break;const Y=3*E*(A-t)+6*T*L*(I-A)+3*M*(s-I);if(Math.abs(Y)<1e-10)break;L=L-k/Y,L=Math.max(0,Math.min(1,L))}r[v]=N*w+3*E*L*C+3*T*M*P+m*_}return r}}class Zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Dp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break;case Jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){ct("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ct("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Sd(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){ct("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const f=o*n,d=f-n,p=f+n;for(let v=0;v!==n;++v){const w=t[f+v];if(w!==t[d+v]||w!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Or;class Js extends Zn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Fr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class lf extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}lf.prototype.ValueTypeName="color";class Wr extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}Wr.prototype.ValueTypeName="number";class Up extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ai.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Xr extends Zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Up(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Zn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Fr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}io.prototype.ValueTypeName="vector";class Fp{constructor(e="",t=-1,n=[],s=hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Cp(l);l=Uu(l,1,h),c=Uu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Wr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const f=h[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Op(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return lf;case"quaternion":return Xr;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Bp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Op(i.type);if(i.times===void 0){const t=[],n=[];Pp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Fu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Fu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kp=new zp;class ls{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class Hp extends Error{constructor(e,t){super(e),this.response=t}}class Lc extends ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=vi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let w=0;const _=new ReadableStream({start(g){A();function A(){f.read().then(({done:C,value:b})=>{if(C)g.close();else{w+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:p});for(let P=0,L=h.length;P<L;P++){const M=h[P];M.onProgress&&M.onProgress(I)}g.enqueue(b),A()}},C=>{g.error(C)})}}});return new Response(_)}else throw new Hp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{yi.add(`file:${e}`,c);const h=vi[e];delete vi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ps=new WeakMap;class Gp extends ls{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Ps.get(a);f===void 0&&(f=[],Ps.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=kr("img");function l(){h(),t&&t(this);const f=Ps.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Ps.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),yi.remove(`image:${e}`);const d=Ps.get(this)||[];for(let p=0;p<d.length;p++){const v=d[p];v.onError&&v.onError(f)}Ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Vp extends ls{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Gr,o=new Lc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):ct(h);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new Gr;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Bn,e.wrapT=t.wrapT!==void 0?t.wrapT:Bn,e.magFilter=t.magFilter!==void 0?t.magFilter:kt,e.minFilter=t.minFilter!==void 0?t.minFilter:kt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=ii),t.mipmapCount===1&&(e.minFilter=kt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class cf extends ls{constructor(e){super(e)}load(e,t,n,s){const r=new tn,a=new Gp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ho extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Wp extends ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xo=new xt,Ou=new G,Bu=new G;class Nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===zr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const La=new G,Na=new Ai,Jn=new G;class uf extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Na,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(La,Na,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new G,zu=new Je,ku=new Je;class vn extends uf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,zu,ku),t.subVectors(ku,zu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xp extends Nc{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ec extends ho{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qp extends Nc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class hf extends ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yr extends uf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yp extends Nc{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Yp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const qo=new WeakMap;class Kp extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{qo.has(a)===!0?(s&&s(qo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),qo.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Is=-90,Ls=1;class Zp extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Is,Ls,e,t);s.layers=this.layers,this.add(s);const r=new vn(Is,Ls,e,t);r.layers=this.layers,this.add(r);const a=new vn(Is,Ls,e,t);a.layers=this.layers,this.add(a);const o=new vn(Is,Ls,e,t);o.layers=this.layers,this.add(o);const l=new vn(Is,Ls,e,t);l.layers=this.layers,this.add(l);const c=new vn(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $p extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qp(){this._document.hidden===!1&&this.reset()}const Dc="\\[\\]\\.:\\/",jp=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",em="[^"+Dc.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Uc),nm=/(WCOD+)?/.source.replace("WCOD",em),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),rm=new RegExp("^"+tm+nm+im+sm+"$"),am=["material","materials","bones","map"];class om{constructor(e,t,n){const s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jp,"")}static parseTrackName(e){const t=rm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);am.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=om;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qc=class qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qc.prototype.isMatrix2=!0;let Hu=qc;function Gu(i,e,t,n){const s=lm(n);switch(t){case Vh:return i*e;case ns:return i*e/s.components*s.byteLength;case Mc:return i*e/s.components*s.byteLength;case Un:return i*e*2/s.components*s.byteLength;case yc:return i*e*2/s.components*s.byteLength;case Wh:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case Sc:return i*e*4/s.components*s.byteLength;case Va:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:case yl:return Math.max(i,16)*Math.max(e,8)/4;case xl:case Ml:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case bl:case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Ja:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qa:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lm(i){switch(i){case Pn:case zh:return{byteLength:1,components:1};case Dr:case kh:case hn:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case oi:case _c:case Mn:return{byteLength:4,components:1};case Hh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function df(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cm(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],w=f[p];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++d,f[d]=w)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const w=f[p];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,c0=`
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,wg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Dg=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Og=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:um,alphahash_pars_fragment:hm,alphamap_fragment:fm,alphamap_pars_fragment:dm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:vm,begin_vertex:Mm,beginnormal_vertex:ym,bsdfs:Sm,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Rm,color_fragment:Cm,color_pars_fragment:Pm,color_pars_vertex:Im,color_vertex:Lm,common:Nm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:Bm,emissivemap_pars_fragment:zm,colorspace_fragment:km,colorspace_pars_fragment:Hm,envmap_fragment:Gm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:n0,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:$m,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:u0,lights_fragment_end:h0,lightprobes_pars_fragment:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:_0,map_pars_fragment:x0,map_particle_fragment:v0,map_particle_pars_fragment:M0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:S0,morphinstance_vertex:b0,morphcolor_vertex:T0,morphnormal_vertex:E0,morphtarget_pars_vertex:w0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:L0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:O0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:k0,project_vertex:H0,dithering_fragment:G0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:K0,shadowmask_pars_fragment:Z0,skinbase_vertex:$0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:j0,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:ug,background_frag:hg,backgroundCube_vert:fg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:_g,distance_vert:xg,distance_frag:vg,equirect_vert:Mg,equirect_frag:yg,linedashed_vert:Sg,linedashed_frag:bg,meshbasic_vert:Tg,meshbasic_frag:Eg,meshlambert_vert:wg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Ng,meshphysical_vert:Dg,meshphysical_frag:Ug,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:zg,shadow_vert:kg,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Vg},Fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ni={basic:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:xn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:xn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:xn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:xn([Fe.lights,Fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ni.physical={uniforms:xn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Da={r:0,b:0,g:0},Wg=new xt,pf=new gt;pf.set(-1,0,0,0,1,0,0,0,1);function Xg(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,l,c,h=null,f=0,d=null;function p(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const b=A.backgroundBlurriness>0;C=e.get(C,b)}return C}function v(A){let C=!1;const b=p(A);b===null?_(a,o):b&&b.isColor&&(_(b,1),C=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(A,C){const b=p(C);b&&(b.isCubeTexture||b.mapping===ao)?(c===void 0&&(c=new bt(new Gi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ys(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pf),c.material.toneMapped=Mt.getTransfer(b.colorSpace)!==Ct,(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new bt(new Vi(2,2),new gn({name:"BackgroundMaterial",uniforms:Ys(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(b.colorSpace)!==Ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function _(A,C){A.getRGB(Da,af(i)),t.buffers.color.setClear(Da.r,Da.g,Da.b,C,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),o=C,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,_(a,o)},render:v,addToRenderList:w,dispose:g}}function qg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(E,N,z,V,k){let Y=!1;const H=f(E,V,z,N);r!==H&&(r=H,c(r.object)),Y=p(E,V,z,k),Y&&v(E,V,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(E,N,z,V),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,N,z,V){const k=V.wireframe===!0;let Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);const H=E.isInstancedMesh===!0?E.id:0;let Q=Y[H];Q===void 0&&(Q={},Y[H]=Q);let J=Q[z.id];J===void 0&&(J={},Q[z.id]=J);let se=J[k];return se===void 0&&(se=d(l()),J[k]=se),se}function d(E){const N=[],z=[],V=[];for(let k=0;k<t;k++)N[k]=0,z[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:V,object:E,attributes:{},index:null}}function p(E,N,z,V){const k=r.attributes,Y=N.attributes;let H=0;const Q=z.getAttributes();for(const J in Q)if(Q[J].location>=0){const fe=k[J];let Se=Y[J];if(Se===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function v(E,N,z,V){const k={},Y=N.attributes;let H=0;const Q=z.getAttributes();for(const J in Q)if(Q[J].location>=0){let fe=Y[J];fe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),k[J]=Se,H++}r.attributes=k,r.attributesNum=H,r.index=V}function w(){const E=r.newAttributes;for(let N=0,z=E.length;N<z;N++)E[N]=0}function _(E){g(E,0)}function g(E,N){const z=r.newAttributes,V=r.enabledAttributes,k=r.attributeDivisors;z[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),k[E]!==N&&(i.vertexAttribDivisor(E,N),k[E]=N)}function A(){const E=r.newAttributes,N=r.enabledAttributes;for(let z=0,V=N.length;z<V;z++)N[z]!==E[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function C(E,N,z,V,k,Y,H){H===!0?i.vertexAttribIPointer(E,N,z,k,Y):i.vertexAttribPointer(E,N,z,V,k,Y)}function b(E,N,z,V){w();const k=V.attributes,Y=z.getAttributes(),H=N.defaultAttributeValues;for(const Q in Y){const J=Y[Q];if(J.location>=0){let se=k[Q];if(se===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){const fe=se.normalized,Se=se.itemSize,$e=e.get(se);if($e===void 0)continue;const de=$e.buffer,lt=$e.type,ue=$e.bytesPerElement,me=lt===i.INT||lt===i.UNSIGNED_INT||se.gpuType===_c;if(se.isInterleavedBufferAttribute){const Me=se.data,nt=Me.stride,ht=se.offset;if(Me.isInstancedInterleavedBuffer){for(let st=0;st<J.locationSize;st++)g(J.location+st,Me.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let st=0;st<J.locationSize;st++)_(J.location+st);i.bindBuffer(i.ARRAY_BUFFER,de);for(let st=0;st<J.locationSize;st++)C(J.location+st,Se/J.locationSize,lt,fe,nt*ue,(ht+Se/J.locationSize*st)*ue,me)}else{if(se.isInstancedBufferAttribute){for(let Me=0;Me<J.locationSize;Me++)g(J.location+Me,se.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Me=0;Me<J.locationSize;Me++)_(J.location+Me);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Me=0;Me<J.locationSize;Me++)C(J.location+Me,Se/J.locationSize,lt,fe,Se*ue,Se/J.locationSize*Me*ue,me)}}else if(H!==void 0){const fe=H[Q];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(J.location,fe);break;case 3:i.vertexAttrib3fv(J.location,fe);break;case 4:i.vertexAttrib4fv(J.location,fe);break;default:i.vertexAttrib1fv(J.location,fe)}}}}A()}function I(){m();for(const E in n){const N=n[E];for(const z in N){const V=N[z];for(const k in V){const Y=V[k];for(const H in Y)h(Y[H].object),delete Y[H];delete V[k]}}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const N=n[E.id];for(const z in N){const V=N[z];for(const k in V){const Y=V[k];for(const H in Y)h(Y[H].object),delete Y[H];delete V[k]}}delete n[E.id]}function L(E){for(const N in n){const z=n[N];for(const V in z){const k=z[V];if(k[E.id]===void 0)continue;const Y=k[E.id];for(const H in Y)h(Y[H].object),delete Y[H];delete k[E.id]}}}function M(E){for(const N in n){const z=n[N],V=E.isInstancedMesh===!0?E.id:0,k=z[V];if(k!==void 0){for(const Y in k){const H=k[Y];for(const Q in H)h(H[Q].object),delete H[Q];delete k[Y]}delete z[V],Object.keys(z).length===0&&delete n[N]}}}function m(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:m,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:A}}function Yg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==jt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const M=L===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Pn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Mn&&!M)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:b,maxSamples:I,samples:P}}function Zg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Qi,o=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,w=f.clipIntersection,_=f.clipShadows,g=i.get(f);if(!s||v===null||v.length===0||r&&!_)r?h(null):c();else{const A=r?0:n,C=A*4;let b=g.clippingState||null;l.value=b,b=h(v,d,C,p);for(let I=0;I!==C;++I)b[I]=t[I];g.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,v){const w=f!==null?f.length:0;let _=null;if(w!==0){if(_=l.value,v!==!0||_===null){const g=p+w*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(_===null||_.length<g)&&(_=new Float32Array(g));for(let C=0,b=p;C!==w;++C,b+=4)a.copy(f[C]).applyMatrix4(A,o),a.normal.toArray(_,b),_[b+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const zi=4,Vu=[.125,.215,.35,.446,.526,.582],es=20,$g=256,gr=new Yr,Wu=new He;let Yo=null,Ko=0,Zo=0,$o=!1;const Jg=new G;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Jg}=r;Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Ko,Zo),this._renderer.xr.enabled=$o,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:hn,format:jt,colorSpace:Zt,depthBuffer:!1},s=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=e_(r,e,t),this._ggxMaterial=jg(r,e,t)}return s}_compileMaterial(e){const t=new bt(new an,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,s,r){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Wu),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Gi,new cn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let g=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,g=!0):(_.color.copy(Wu),g=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));const I=this._cubeSize;Ns(s,b*I,C>2?I:0,I,I),f.setRenderTarget(s),g&&f.render(w,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===rs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,p=f*d,{_lodMax:v}=this,w=this._sizeLods[n],_=3*w*(n>v-zi?n-v+zi:0),g=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Ns(r,_,g,3*w,2*w),s.setRenderTarget(r),s.render(o,gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,Ns(e,_,g,3*w,2*w),s.setRenderTarget(e),s.render(o,gr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),w=r/v,_=isFinite(r)?1+Math.floor(h*w):es;_>es&&it(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${es}`);const g=[];let A=0;for(let L=0;L<es;++L){const M=L/w,m=Math.exp(-M*M/2);g.push(m),L===0?A+=m:L<_&&(A+=2*m)}for(let L=0;L<g.length;L++)g[L]=g[L]/A;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=v,d.mipInt.value=C-n;const b=this._sizeLods[s],I=3*b*(s>C-zi?s-C+zi:0),P=4*(this._cubeSize-b);Ns(t,I,P,3*b,2*b),l.setRenderTarget(t),l.render(f,gr)}}function Qg(i){const e=[],t=[],n=[];let s=i;const r=i-zi+1+Vu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-zi?l=Vu[a-i+zi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,w=3,_=2,g=1,A=new Float32Array(w*v*p),C=new Float32Array(_*v*p),b=new Float32Array(g*v*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,M=P>2?0:-1,m=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];A.set(m,w*v*P),C.set(d,_*v*P);const T=[P,P,P,P,P,P];b.set(T,g*v*P)}const I=new an;I.setAttribute("position",new nn(A,w)),I.setAttribute("uv",new nn(C,_)),I.setAttribute("faceIndex",new nn(b,g)),n.push(new bt(I,null)),s>zi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xu(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jg(i,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function e_(i,e,t){const n=new Float32Array(es),s=new G(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Yu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}class mf extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gi(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:ri});r.uniforms.tEquirect.value=t;const a=new bt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=kt),new Zp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function t_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ha||p===_o)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const w=new mf(v.height);return w.fromEquirectangularTexture(i,d),e.set(d,w),d.addEventListener("dispose",c),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,v=p===Ha||p===_o,w=p===rs||p===Ws;if(v||w){let _=t.get(d);const g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new tc(i)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const A=d.image;return v&&A&&A.height>0||w&&A&&l(A)?(n===null&&(n=new tc(i)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}function o(d,p){return p===Ha?d.mapping=rs:p===_o&&(d.mapping=Ws),d}function l(d){let p=0;const v=6;for(let w=0;w<v;w++)d[w]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function n_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let w=0;if(v===void 0)return;if(p!==null){const A=p.array;w=p.version;for(let C=0,b=A.length;C<b;C+=3){const I=A[C+0],P=A[C+1],L=A[C+2];d.push(I,P,P,L,L,I)}}else{const A=v.array;w=v.version;for(let C=0,b=A.length/3-1;C<b;C+=3){const I=C+0,P=C+1,L=C+2;d.push(I,P,P,L,L,I)}}const _=new(v.count>=65535?Jh:$h)(d,1);_.version=w;const g=r.get(f);g&&e.remove(g),r.set(f,_)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function s_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let w=0;for(let _=0;_<p;_++)w+=d[_];t.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function r_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a_(i,e,t){const n=new WeakMap,s=new Dt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let T=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),w===!0&&(b=2),_===!0&&(b=3);let I=o.attributes.position.count*b,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*P*4*f),M=new Yh(L,I,P,f);M.type=Mn,M.needsUpdate=!0;const m=b*4;for(let E=0;E<f;E++){const N=g[E],z=A[E],V=C[E],k=I*P*4*E;for(let Y=0;Y<N.count;Y++){const H=Y*m;v===!0&&(s.fromBufferAttribute(N,Y),L[k+H+0]=s.x,L[k+H+1]=s.y,L[k+H+2]=s.z,L[k+H+3]=0),w===!0&&(s.fromBufferAttribute(z,Y),L[k+H+4]=s.x,L[k+H+5]=s.y,L[k+H+6]=s.z,L[k+H+7]=0),_===!0&&(s.fromBufferAttribute(V,Y),L[k+H+8]=s.x,L[k+H+9]=s.y,L[k+H+10]=s.z,L[k+H+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:M,size:new Je(I,P)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const w=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",w),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function o_(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const l_={[hc]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[dc]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[mc]:"AGX_TONE_MAPPING",[gc]:"NEUTRAL_TONE_MAPPING",[pc]:"CUSTOM_TONE_MAPPING"};function c_(i,e,t,n,s,r){const a=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new qs(e,t):void 0}),o=new wn(e,t,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new an;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const c=new of({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new bt(l,c),f=new Yr(-1,1,1,-1,0,1);let d=null,p=null,v=!1,w,_=null,g=[],A=!1;this.setSize=function(C,b){a.setSize(C,b),o.setSize(C,b);for(let I=0;I<g.length;I++){const P=g[I];P.setSize&&P.setSize(C,b)}},this.setEffects=function(C){g=C,A=g.length>0&&g[0].isRenderPass===!0;const b=a.width,I=a.height;for(let P=0;P<g.length;P++){const L=g[P];L.setSize&&L.setSize(b,I)}},this.begin=function(C,b){if(v||C.toneMapping===ai&&g.length===0)return!1;if(_=b,b!==null){const I=b.width,P=b.height;(a.width!==I||a.height!==P)&&this.setSize(I,P)}return A===!1&&C.setRenderTarget(a),w=C.toneMapping,C.toneMapping=ai,!0},this.hasRenderPass=function(){return A},this.end=function(C,b){C.toneMapping=w,v=!0;let I=a,P=o;for(let L=0;L<g.length;L++){const M=g[L];if(M.enabled!==!1&&(M.render(C,P,I,b),M.needsSwap!==!1)){const m=I;I=P,P=m}}if(d!==C.outputColorSpace||p!==C.toneMapping){d=C.outputColorSpace,p=C.toneMapping,c.defines={},Mt.getTransfer(d)===Ct&&(c.defines.SRGB_TRANSFER="");const L=l_[p];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(_),C.render(h,f),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const gf=new tn,nc=new qs(1,1),_f=new Yh,xf=new Kd,vf=new sf,Ku=[],Zu=[],$u=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function po(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function p_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Qu.set(n),i.uniformMatrix2fv(this.addr,!1,Qu),rn(t,n)}}function m_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),rn(t,n)}}function g_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),rn(t,n)}}function __(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function E_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?Tc:bc,r=nc):r=gf,t.setTexture2D(e||r,s)}function w_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xf,s)}function A_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vf,s)}function R_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_f,s)}function C_(i){switch(i){case 5126:return u_;case 35664:return h_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return y_;case 36294:return S_;case 36295:return b_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,e){i.uniform1fv(this.addr,e)}function I_(i,e){const t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function L_(i,e){const t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){const t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function D_(i,e){const t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){const t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F_(i,e){const t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O_(i,e){i.uniform1iv(this.addr,e)}function B_(i,e){i.uniform2iv(this.addr,e)}function z_(i,e){i.uniform3iv(this.addr,e)}function k_(i,e){i.uniform4iv(this.addr,e)}function H_(i,e){i.uniform1uiv(this.addr,e)}function G_(i,e){i.uniform2uiv(this.addr,e)}function V_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){const n=this.cache,s=e.length,r=po(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nc:a=gf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function q_(i,e,t){const n=this.cache,s=e.length,r=po(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xf,r[a])}function Y_(i,e,t){const n=this.cache,s=e.length,r=po(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vf,r[a])}function K_(i,e,t){const n=this.cache,s=e.length,r=po(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_f,r[a])}function Z_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return N_;case 35674:return D_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return K_}}class $_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z_(t.type)}}class Q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function ju(i,e){i.seq.push(e),i.map[e.id]=e}function j_(i,e,t){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),a=Jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ju(t,c===void 0?new $_(o,i,e):new J_(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Q_(o),ju(t,f)),t=f}}}class Ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);j_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function eh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ex=37297;let tx=0;function nx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const th=new gt;function ix(i){Mt._getMatrix(th,Mt.workingColorSpace,i);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+nx(i.getShaderSource(e),o)}else return r}function sx(i,e){const t=ix(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rx={[hc]:"Linear",[fc]:"Reinhard",[dc]:"Cineon",[ro]:"ACESFilmic",[mc]:"AgX",[gc]:"Neutral",[pc]:"Custom"};function ax(i,e){const t=rx[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ua=new G;function ox(){Mt.getLuminanceCoefficients(Ua);const i=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function cx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wr(i){return i!==""}function ih(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(hx,dx)}const fx=new Map;function dx(i,e){let t=vt[e];if(t===void 0){const n=fx.get(e);if(n!==void 0)t=vt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(px,mx)}function mx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const gx={[ka]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function _x(i){return gx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xx={[rs]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function vx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mx={[Ws]:"ENVMAP_MODE_REFRACTION"};function yx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sx={[uc]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sx[i.combine]||"ENVMAP_BLENDING_NONE"}function Tx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_x(t),c=vx(t),h=yx(t),f=bx(t),d=Tx(t),p=lx(t),v=cx(r),w=s.createProgram();let _,g,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),g.length>0&&(g+=`
`)):(_=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),g=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?vt.tonemapping_pars_fragment:"",t.toneMapping!==ai?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=ic(a),a=ih(a,t),a=sh(a,t),o=ic(o),o=ih(o,t),o=sh(o,t),a=rh(a),o=rh(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=A+_+a,b=A+g+o,I=eh(s,s.VERTEX_SHADER,C),P=eh(s,s.FRAGMENT_SHADER,b);s.attachShader(w,I),s.attachShader(w,P),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function L(E){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(w)||"",z=s.getShaderInfoLog(I)||"",V=s.getShaderInfoLog(P)||"",k=N.trim(),Y=z.trim(),H=V.trim();let Q=!0,J=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,I,P);else{const se=nh(s,I,"vertex"),fe=nh(s,P,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+se+`
`+fe)}else k!==""?it("WebGLProgram: Program Info Log:",k):(Y===""||H==="")&&(J=!1);J&&(E.diagnostics={runnable:Q,programLog:k,vertexShader:{log:Y,prefix:_},fragmentShader:{log:H,prefix:g}})}s.deleteShader(I),s.deleteShader(P),M=new Ya(s,w),m=ux(s,w)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let m;this.getAttributes=function(){return m===void 0&&L(this),m};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(w,ex)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=P,this}let wx=0;class Ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rx(e),t.set(e,n)),n}}class Rx{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}}function Cx(i){return i===Un||i===Ja||i===Qa}function Px(i,e,t,n,s,r){const a=new Kh,o=new Ax,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function w(M,m,T,E,N,z){const V=E.fog,k=N.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?E.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Q=e.get(M.envMap||Y,H),J=Q&&Q.mapping===ao?Q.image.height:null,se=p[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const fe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=fe!==void 0?fe.length:0;let $e=0;k.morphAttributes.position!==void 0&&($e=1),k.morphAttributes.normal!==void 0&&($e=2),k.morphAttributes.color!==void 0&&($e=3);let de,lt,ue,me;if(se){const ke=ni[se];de=ke.vertexShader,lt=ke.fragmentShader}else{de=M.vertexShader,lt=M.fragmentShader;const ke=o.getVertexShaderStage(M),wt=o.getFragmentShaderStage(M);o.update(M,ke,wt),ue=ke.id,me=wt.id}const Me=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ht=N.isInstancedMesh===!0,st=N.isBatchedMesh===!0,ne=!!M.map,oe=!!M.matcap,Re=!!Q,Ve=!!M.aoMap,Ge=!!M.lightMap,De=!!M.bumpMap&&M.wireframe===!1,be=!!M.normalMap,Ae=!!M.displacementMap,at=!!M.emissiveMap,Ke=!!M.metalnessMap,Qe=!!M.roughnessMap,B=M.anisotropy>0,ut=M.clearcoat>0,rt=M.dispersion>0,F=M.iridescence>0,S=M.sheen>0,$=M.transmission>0,te=B&&!!M.anisotropyMap,ae=ut&&!!M.clearcoatMap,we=ut&&!!M.clearcoatNormalMap,Ce=ut&&!!M.clearcoatRoughnessMap,le=F&&!!M.iridescenceMap,he=F&&!!M.iridescenceThicknessMap,Le=S&&!!M.sheenColorMap,Ue=S&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Pe=!!M.specularColorMap,qe=!!M.specularIntensityMap,ze=$&&!!M.transmissionMap,je=$&&!!M.thicknessMap,O=!!M.gradientMap,X=!!M.alphaMap,ie=M.alphaTest>0,ye=!!M.alphaHash,Ie=!!M.extensions;let pe=ai;M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ye={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:de,fragmentShader:lt,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:st,batchingColor:st&&N._colorsTexture!==null,instancing:ht,instancingColor:ht&&N.instanceColor!==null,instancingMorph:ht&&N.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ne,matcap:oe,envMap:Re,envMapMode:Re&&Q.mapping,envMapCubeUVHeight:J,aoMap:Ve,lightMap:Ge,bumpMap:De,normalMap:be,displacementMap:Ae,emissiveMap:at,normalMapObjectSpace:be&&M.normalMapType===pd,normalMapTangentSpace:be&&M.normalMapType===Br,packedNormalMap:be&&M.normalMapType===Br&&Cx(M.normalMap.format),metalnessMap:Ke,roughnessMap:Qe,anisotropy:B,anisotropyMap:te,clearcoat:ut,clearcoatMap:ae,clearcoatNormalMap:we,clearcoatRoughnessMap:Ce,dispersion:rt,iridescence:F,iridescenceMap:le,iridescenceThicknessMap:he,sheen:S,sheenColorMap:Le,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:Pe,specularIntensityMap:qe,transmission:$,transmissionMap:ze,thicknessMap:je,gradientMap:O,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:ie,alphaHash:ye,combine:M.combine,mapUv:ne&&v(M.map.channel),aoMapUv:Ve&&v(M.aoMap.channel),lightMapUv:Ge&&v(M.lightMap.channel),bumpMapUv:De&&v(M.bumpMap.channel),normalMapUv:be&&v(M.normalMap.channel),displacementMapUv:Ae&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:Ke&&v(M.metalnessMap.channel),roughnessMapUv:Qe&&v(M.roughnessMap.channel),anisotropyMapUv:te&&v(M.anisotropyMap.channel),clearcoatMapUv:ae&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:Pe&&v(M.specularColorMap.channel),specularIntensityMapUv:qe&&v(M.specularIntensityMap.channel),transmissionMapUv:ze&&v(M.transmissionMap.channel),thicknessMapUv:je&&v(M.thicknessMap.channel),alphaMapUv:X&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||B),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(ne||X),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&be===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:nt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:$e,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ne&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:at&&M.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ie&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&M.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function _(M){const m=[];if(M.shaderID?m.push(M.shaderID):(m.push(M.customVertexShaderID),m.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)m.push(T),m.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(g(m,M),A(m,M),m.push(i.outputColorSpace)),m.push(M.customProgramCacheKey),m.join()}function g(M,m){M.push(m.precision),M.push(m.outputColorSpace),M.push(m.envMapMode),M.push(m.envMapCubeUVHeight),M.push(m.mapUv),M.push(m.alphaMapUv),M.push(m.lightMapUv),M.push(m.aoMapUv),M.push(m.bumpMapUv),M.push(m.normalMapUv),M.push(m.displacementMapUv),M.push(m.emissiveMapUv),M.push(m.metalnessMapUv),M.push(m.roughnessMapUv),M.push(m.anisotropyMapUv),M.push(m.clearcoatMapUv),M.push(m.clearcoatNormalMapUv),M.push(m.clearcoatRoughnessMapUv),M.push(m.iridescenceMapUv),M.push(m.iridescenceThicknessMapUv),M.push(m.sheenColorMapUv),M.push(m.sheenRoughnessMapUv),M.push(m.specularMapUv),M.push(m.specularColorMapUv),M.push(m.specularIntensityMapUv),M.push(m.transmissionMapUv),M.push(m.thicknessMapUv),M.push(m.combine),M.push(m.fogExp2),M.push(m.sizeAttenuation),M.push(m.morphTargetsCount),M.push(m.morphAttributeCount),M.push(m.numDirLights),M.push(m.numPointLights),M.push(m.numSpotLights),M.push(m.numSpotLightMaps),M.push(m.numHemiLights),M.push(m.numRectAreaLights),M.push(m.numDirLightShadows),M.push(m.numPointLightShadows),M.push(m.numSpotLightShadows),M.push(m.numSpotLightShadowsWithMaps),M.push(m.numLightProbes),M.push(m.shadowMapType),M.push(m.toneMapping),M.push(m.numClippingPlanes),M.push(m.numClipIntersection),M.push(m.depthPacking)}function A(M,m){a.disableAll(),m.instancing&&a.enable(0),m.instancingColor&&a.enable(1),m.instancingMorph&&a.enable(2),m.matcap&&a.enable(3),m.envMap&&a.enable(4),m.normalMapObjectSpace&&a.enable(5),m.normalMapTangentSpace&&a.enable(6),m.clearcoat&&a.enable(7),m.iridescence&&a.enable(8),m.alphaTest&&a.enable(9),m.vertexColors&&a.enable(10),m.vertexAlphas&&a.enable(11),m.vertexUv1s&&a.enable(12),m.vertexUv2s&&a.enable(13),m.vertexUv3s&&a.enable(14),m.vertexTangents&&a.enable(15),m.anisotropy&&a.enable(16),m.alphaHash&&a.enable(17),m.batching&&a.enable(18),m.dispersion&&a.enable(19),m.batchingColor&&a.enable(20),m.gradientMap&&a.enable(21),m.packedNormalMap&&a.enable(22),m.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reversedDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),m.numLightProbeGrids>0&&a.enable(22),m.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function C(M){const m=p[M.type];let T;if(m){const E=ni[m];T=Vr.clone(E.uniforms)}else T=M.uniforms;return T}function b(M,m){let T=h.get(m);return T!==void 0?++T.usedTimes:(T=new Ex(i,m,M,s),c.push(T),h.set(m,T)),T}function I(M){if(--M.usedTimes===0){const m=c.indexOf(M);c[m]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function P(M){o.remove(M)}function L(){o.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:C,acquireProgram:b,releaseProgram:I,releaseShaderCache:P,programs:c,dispose:L}}function Ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,w,_,g){let A=i[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:_,group:g},i[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=v,A.materialVariant=a(d),A.groupOrder=w,A.renderOrder=d.renderOrder,A.z=_,A.group=g),e++,A}function l(d,p,v,w,_,g){const A=o(d,p,v,w,_,g);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function c(d,p,v,w,_,g){const A=o(d,p,v,w,_,g);v.transmission>0?n.unshift(A):v.transparent===!0?s.unshift(A):t.unshift(A)}function h(d,p,v){t.length>1&&t.sort(d||Lx),n.length>1&&n.sort(p||oh),s.length>1&&s.sort(p||oh),v&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let d=e,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Nx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new He};break;case"SpotLight":t={position:new G,direction:new G,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Ux(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fx=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bx(i){const e=new Dx,t=Ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new xt,a=new xt;function o(c){let h=0,f=0,d=0;for(let m=0;m<9;m++)n.probe[m].set(0,0,0);let p=0,v=0,w=0,_=0,g=0,A=0,C=0,b=0,I=0,P=0,L=0;c.sort(Ox);for(let m=0,T=c.length;m<T;m++){const E=c[m],N=E.color,z=E.intensity,V=E.distance;let k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Un?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=N.r*z,f+=N.g*z,d+=N.b*z;else if(E.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(E.sh.coefficients[Y],z);L++}else if(E.isDirectionalLight){const Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const H=E.shadow,Q=t.get(E);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=E.shadow.matrix,A++}n.directional[p]=Y,p++}else if(E.isSpotLight){const Y=e.get(E);Y.position.setFromMatrixPosition(E.matrixWorld),Y.color.copy(N).multiplyScalar(z),Y.distance=V,Y.coneCos=Math.cos(E.angle),Y.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),Y.decay=E.decay,n.spot[w]=Y;const H=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,H.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[w]=H.matrix,E.castShadow){const Q=t.get(E);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[w]=Q,n.spotShadowMap[w]=k,b++}w++}else if(E.isRectAreaLight){const Y=e.get(E);Y.color.copy(N).multiplyScalar(z),Y.halfWidth.set(E.width*.5,0,0),Y.halfHeight.set(0,E.height*.5,0),n.rectArea[_]=Y,_++}else if(E.isPointLight){const Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),Y.distance=E.distance,Y.decay=E.decay,E.castShadow){const H=E.shadow,Q=t.get(E);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[v]=Q,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=E.shadow.matrix,C++}n.point[v]=Y,v++}else if(E.isHemisphereLight){const Y=e.get(E);Y.skyColor.copy(E.color).multiplyScalar(z),Y.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[g]=Y,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==p||M.pointLength!==v||M.spotLength!==w||M.rectAreaLength!==_||M.hemiLength!==g||M.numDirectionalShadows!==A||M.numPointShadows!==C||M.numSpotShadows!==b||M.numSpotMaps!==I||M.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=w,n.rectArea.length=_,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,M.directionalLength=p,M.pointLength=v,M.spotLength=w,M.rectAreaLength=_,M.hemiLength=g,M.numDirectionalShadows=A,M.numPointShadows=C,M.numSpotShadows=b,M.numSpotMaps=I,M.numLightProbes=L,n.version=Fx++)}function l(c,h){let f=0,d=0,p=0,v=0,w=0;const _=h.matrixWorldInverse;for(let g=0,A=c.length;g<A;g++){const C=c[g];if(C.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),f++}else if(C.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(C.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(C.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),d++}else if(C.isHemisphereLight){const b=n.hemi[w];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(_),w++}}}return{setup:o,setupView:l,state:n}}function ch(i){const e=new Bx(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ch(i),e.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`,Gx=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Vx=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],uh=new xt,_r=new G,Qo=new G;function Wx(i,e,t){let n=new Cc;const s=new Je,r=new Je,a=new Dt,o=new wp,l=new Ap,c={},h=t.maxTextureSize,f={[Ti]:En,[En]:Ti,[mn]:mn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bt(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let g=this.type;this.render=function(P,L,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===Fh&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ka);const m=i.getRenderTarget(),T=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=g!==this.type;z&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(k=>k.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,k=P.length;V<k;V++){const Y=P[V],H=Y.shadow;if(H===void 0){it("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Tr){if(Y.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new wn(s.x,s.y,{format:Un,type:hn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new qs(s.x,s.y,Mn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Ei,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else Y.isPointLight?(H.map=new mf(s.x),H.map.depthTexture=new Sp(s.x,oi)):(H.map=new wn(s.x,s.y),H.map.depthTexture=new qs(s.x,s.y,oi)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Ei,this.type===ka?(H.map.depthTexture.compareFunction=J?Tc:bc,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}const se=H.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<se;fe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(H.map),i.clear());const Se=H.getViewport(fe);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(a)}if(Y.isPointLight){const Se=H.camera,$e=H.matrix,de=Y.distance||Se.far;de!==Se.far&&(Se.far=de,Se.updateProjectionMatrix()),_r.setFromMatrixPosition(Y.matrixWorld),Se.position.copy(_r),Qo.copy(Se.position),Qo.add(Gx[fe]),Se.up.copy(Vx[fe]),Se.lookAt(Qo),Se.updateMatrixWorld(),$e.makeTranslation(-_r.x,-_r.y,-_r.z),uh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(uh,Se.coordinateSystem,Se.reversedDepth)}else H.updateMatrices(Y);n=H.getFrustum(),b(L,M,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Tr&&A(H,M),H.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(m,T,E)};function A(P,L){const M=e.update(w);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wn(s.x,s.y,{format:Un,type:hn})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,M,d,w,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,M,p,w,null)}function C(P,L,M,m){let T=null;const E=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)T=E;else if(T=M.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=T.uuid,z=L.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let k=V[z];k===void 0&&(k=T.clone(),V[z]=k,L.addEventListener("dispose",I)),T=k}if(T.visible=L.visible,T.wireframe=L.wireframe,m===Tr?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:f[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=i.properties.get(T);N.light=M}return T}function b(P,L,M,m,T){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===Tr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);const z=e.update(P),V=P.material;if(Array.isArray(V)){const k=z.groups;for(let Y=0,H=k.length;Y<H;Y++){const Q=k[Y],J=V[Q.materialIndex];if(J&&J.visible){const se=C(P,J,m,T);P.onBeforeShadow(i,P,L,M,z,se,Q),i.renderBufferDirect(M,null,z,se,P,Q),P.onAfterShadow(i,P,L,M,z,se,Q)}}}else if(V.visible){const k=C(P,V,m,T);P.onBeforeShadow(i,P,L,M,z,k,null),i.renderBufferDirect(M,null,z,k,P,null),P.onAfterShadow(i,P,L,M,z,k,null)}}const N=P.children;for(let z=0,V=N.length;z<V;z++)b(N[z],L,M,m,T)}function I(P){P.target.removeEventListener("dispose",I);for(const M in c){const m=c[M],T=P.target.uuid;T in m&&(m[T].dispose(),delete m[T])}}}function Xx(i,e){function t(){let O=!1;const X=new Dt;let ie=null;const ye=new Dt(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!O&&(i.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){O=Ie},setClear:function(Ie,pe,Ye,ke,wt){wt===!0&&(Ie*=ke,pe*=ke,Ye*=ke),X.set(Ie,pe,Ye,ke),ye.equals(X)===!1&&(i.clearColor(Ie,pe,Ye,ke),ye.copy(X))},reset:function(){O=!1,ie=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,X=!1,ie=null,ye=null,Ie=null;return{setReversed:function(pe){if(X!==pe){const Ye=e.get("EXT_clip_control");pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),X=pe;const ke=Ie;Ie=null,this.setClear(ke)}},getReversed:function(){return X},setTest:function(pe){pe?Me(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(pe){ie!==pe&&!O&&(i.depthMask(pe),ie=pe)},setFunc:function(pe){if(X&&(pe=Ed[pe]),ye!==pe){switch(pe){case hl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=pe}},setLocked:function(pe){O=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,X&&(pe=1-pe),i.clearDepth(pe))},reset:function(){O=!1,ie=null,ye=null,Ie=null,X=!1}}}function s(){let O=!1,X=null,ie=null,ye=null,Ie=null,pe=null,Ye=null,ke=null,wt=null;return{setTest:function(At){O||(At?Me(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(At){X!==At&&!O&&(i.stencilMask(At),X=At)},setFunc:function(At,$t,Pt){(ie!==At||ye!==$t||Ie!==Pt)&&(i.stencilFunc(At,$t,Pt),ie=At,ye=$t,Ie=Pt)},setOp:function(At,$t,Pt){(pe!==At||Ye!==$t||ke!==Pt)&&(i.stencilOp(At,$t,Pt),pe=At,Ye=$t,ke=Pt)},setLocked:function(At){O=At},setClear:function(At){wt!==At&&(i.clearStencil(At),wt=At)},reset:function(){O=!1,X=null,ie=null,ye=null,Ie=null,pe=null,Ye=null,ke=null,wt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d={},p=new WeakMap,v=[],w=null,_=!1,g=null,A=null,C=null,b=null,I=null,P=null,L=null,M=new He(0,0,0),m=0,T=!1,E=null,N=null,z=null,V=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=Q>=2);let se=null,fe={};const Se=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),de=new Dt().fromArray(Se),lt=new Dt().fromArray($e);function ue(O,X,ie,ye){const Ie=new Uint8Array(4),pe=i.createTexture();i.bindTexture(O,pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ie;Ye++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(X+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return pe}const me={};me[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),a.setFunc(Vs),De(!1),be(Yc),Me(i.CULL_FACE),Ve(ri);function Me(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function nt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ht(O,X){return d[O]!==X?(i.bindFramebuffer(O,X),d[O]=X,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=X),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=X),!0):!1}function st(O,X){let ie=v,ye=!1;if(O){ie=p.get(X),ie===void 0&&(ie=[],p.set(X,ie));const Ie=O.textures;if(ie.length!==Ie.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ye=Ie.length;pe<Ye;pe++)ie[pe]=i.COLOR_ATTACHMENT0+pe;ie.length=Ie.length,ye=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ie)}function ne(O){return w!==O?(i.useProgram(O),w=O,!0):!1}const oe={[ji]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};oe[Yf]=i.MIN,oe[Kf]=i.MAX;const Re={[Zf]:i.ZERO,[$f]:i.ONE,[Jf]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[jf]:i.DST_ALPHA,[Qf]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[ed]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(O,X,ie,ye,Ie,pe,Ye,ke,wt,At){if(O===ri){_===!0&&(nt(i.BLEND),_=!1);return}if(_===!1&&(Me(i.BLEND),_=!0),O!==Wf){if(O!==g||At!==T){if((A!==ji||I!==ji)&&(i.blendEquation(i.FUNC_ADD),A=ji,I=ji),At)switch(O){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kc:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",O);break}C=null,b=null,P=null,L=null,M.set(0,0,0),m=0,g=O,T=At}return}Ie=Ie||X,pe=pe||ie,Ye=Ye||ye,(X!==A||Ie!==I)&&(i.blendEquationSeparate(oe[X],oe[Ie]),A=X,I=Ie),(ie!==C||ye!==b||pe!==P||Ye!==L)&&(i.blendFuncSeparate(Re[ie],Re[ye],Re[pe],Re[Ye]),C=ie,b=ye,P=pe,L=Ye),(ke.equals(M)===!1||wt!==m)&&(i.blendColor(ke.r,ke.g,ke.b,wt),M.copy(ke),m=wt),g=O,T=!1}function Ge(O,X){O.side===mn?nt(i.CULL_FACE):Me(i.CULL_FACE);let ie=O.side===En;X&&(ie=!ie),De(ie),O.blending===Bs&&O.transparent===!1?Ve(ri):Ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),at(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function be(O){O!==Gf?(Me(i.CULL_FACE),O!==N&&(O===Yc?i.cullFace(i.BACK):O===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),N=O}function Ae(O){O!==z&&(H&&i.lineWidth(O),z=O)}function at(O,X,ie){O?(Me(i.POLYGON_OFFSET_FILL),(V!==X||k!==ie)&&(V=X,k=ie,a.getReversed()&&(X=-X),i.polygonOffset(X,ie))):nt(i.POLYGON_OFFSET_FILL)}function Ke(O){O?Me(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=i.TEXTURE0+Y-1),se!==O&&(i.activeTexture(O),se=O)}function B(O,X,ie){ie===void 0&&(se===null?ie=i.TEXTURE0+Y-1:ie=se);let ye=fe[ie];ye===void 0&&(ye={type:void 0,texture:void 0},fe[ie]=ye),(ye.type!==O||ye.texture!==X)&&(se!==ie&&(i.activeTexture(ie),se=ie),i.bindTexture(O,X||me[O]),ye.type=O,ye.texture=X)}function ut(){const O=fe[se];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function S(){try{i.texSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function $(){try{i.texSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function ae(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function we(){try{i.texStorage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function Ce(){try{i.texStorage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function le(){try{i.texImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function he(){try{i.texImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function Le(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function Ue(O,X){f[O]!==X&&(i.pixelStorei(O,X),f[O]=X)}function Te(O){de.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),de.copy(O))}function Pe(O){lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),lt.copy(O))}function qe(O,X){let ie=c.get(X);ie===void 0&&(ie=new WeakMap,c.set(X,ie));let ye=ie.get(O);ye===void 0&&(ye=i.getUniformBlockIndex(X,O.name),ie.set(O,ye))}function ze(O,X){const ye=c.get(X).get(O);l.get(X)!==ye&&(i.uniformBlockBinding(X,ye,O.__bindingPointIndex),l.set(X,ye))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},se=null,fe={},d={},p=new WeakMap,v=[],w=null,_=!1,g=null,A=null,C=null,b=null,I=null,P=null,L=null,M=new He(0,0,0),m=0,T=!1,E=null,N=null,z=null,V=null,k=null,de.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:nt,bindFramebuffer:ht,drawBuffers:st,useProgram:ne,setBlending:Ve,setMaterial:Ge,setFlipSided:De,setCullFace:be,setLineWidth:Ae,setPolygonOffset:at,setScissorTest:Ke,activeTexture:Qe,bindTexture:B,unbindTexture:ut,compressedTexImage2D:rt,compressedTexImage3D:F,texImage2D:le,texImage3D:he,pixelStorei:Ue,getParameter:Le,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:we,texStorage3D:Ce,texSubImage2D:S,texSubImage3D:$,compressedTexSubImage2D:te,compressedTexSubImage3D:ae,scissor:Te,viewport:Pe,reset:je}}function qx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap,f=new Set;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,S){return v?new OffscreenCanvas(F,S):kr("canvas")}function _(F,S,$){let te=1;const ae=rt(F);if((ae.width>$||ae.height>$)&&(te=$/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const we=Math.floor(te*ae.width),Ce=Math.floor(te*ae.height);d===void 0&&(d=w(we,Ce));const le=S?w(we,Ce):d;return le.width=we,le.height=Ce,le.getContext("2d").drawImage(F,0,0,we,Ce),it("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+we+"x"+Ce+")."),le}else return"data"in F&&it("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),F;return F}function g(F){return F.generateMipmaps}function A(F){i.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,S,$,te,ae,we=!1){if(F!==null){if(i[F]!==void 0)return i[F];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ce;te&&(Ce=e.get("EXT_texture_norm16"),Ce||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=S;if(S===i.RED&&($===i.FLOAT&&(le=i.R32F),$===i.HALF_FLOAT&&(le=i.R16F),$===i.UNSIGNED_BYTE&&(le=i.R8),$===i.UNSIGNED_SHORT&&Ce&&(le=Ce.R16_EXT),$===i.SHORT&&Ce&&(le=Ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(le=i.R8UI),$===i.UNSIGNED_SHORT&&(le=i.R16UI),$===i.UNSIGNED_INT&&(le=i.R32UI),$===i.BYTE&&(le=i.R8I),$===i.SHORT&&(le=i.R16I),$===i.INT&&(le=i.R32I)),S===i.RG&&($===i.FLOAT&&(le=i.RG32F),$===i.HALF_FLOAT&&(le=i.RG16F),$===i.UNSIGNED_BYTE&&(le=i.RG8),$===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RG16_EXT),$===i.SHORT&&Ce&&(le=Ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(le=i.RG8UI),$===i.UNSIGNED_SHORT&&(le=i.RG16UI),$===i.UNSIGNED_INT&&(le=i.RG32UI),$===i.BYTE&&(le=i.RG8I),$===i.SHORT&&(le=i.RG16I),$===i.INT&&(le=i.RG32I)),S===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(le=i.RGB8UI),$===i.UNSIGNED_SHORT&&(le=i.RGB16UI),$===i.UNSIGNED_INT&&(le=i.RGB32UI),$===i.BYTE&&(le=i.RGB8I),$===i.SHORT&&(le=i.RGB16I),$===i.INT&&(le=i.RGB32I)),S===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),$===i.UNSIGNED_INT&&(le=i.RGBA32UI),$===i.BYTE&&(le=i.RGBA8I),$===i.SHORT&&(le=i.RGBA16I),$===i.INT&&(le=i.RGBA32I)),S===i.RGB&&($===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RGB16_EXT),$===i.SHORT&&Ce&&(le=Ce.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),S===i.RGBA){const he=we?ja:Mt.getTransfer(ae);$===i.FLOAT&&(le=i.RGBA32F),$===i.HALF_FLOAT&&(le=i.RGBA16F),$===i.UNSIGNED_BYTE&&(le=he===Ct?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RGBA16_EXT),$===i.SHORT&&Ce&&(le=Ce.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function I(F,S){let $;return F?S===null||S===oi||S===Ur?$=i.DEPTH24_STENCIL8:S===Mn?$=i.DEPTH32F_STENCIL8:S===Dr&&($=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===Ur?$=i.DEPTH_COMPONENT24:S===Mn?$=i.DEPTH_COMPONENT32F:S===Dr&&($=i.DEPTH_COMPONENT16),$}function P(F,S){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function L(F){const S=F.target;S.removeEventListener("dispose",L),m(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function M(F){const S=F.target;S.removeEventListener("dispose",M),E(S)}function m(F){const S=n.get(F);if(S.__webglInit===void 0)return;const $=F.source,te=p.get($);if(te){const ae=te[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(F),Object.keys(te).length===0&&p.delete($)}n.remove(F)}function T(F){const S=n.get(F);i.deleteTexture(S.__webglTexture);const $=F.source,te=p.get($);delete te[S.__cacheKey],a.memory.textures--}function E(F){const S=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let ae=0;ae<S.__webglFramebuffer[te].length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[te][ae]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=F.textures;for(let te=0,ae=$.length;te<ae;te++){const we=n.get($[te]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove($[te])}n.remove(F)}let N=0;function z(){N=0}function V(){return N}function k(F){N=F}function Y(){const F=N;return F>=s.maxTextures&&it("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),N+=1,F}function H(F){const S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function Q(F,S){const $=n.get(F);if(F.isVideoTexture&&B(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const te=F.image;if(te===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{nt($,F,S);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+S)}function J(F,S){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){nt($,F,S);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+S)}function se(F,S){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){nt($,F,S);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+S)}function fe(F,S){const $=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){ht($,F,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+S)}const Se={[Hi]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},$e={[en]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},de={[md]:i.NEVER,[Md]:i.ALWAYS,[gd]:i.LESS,[bc]:i.LEQUAL,[_d]:i.EQUAL,[Tc]:i.GEQUAL,[xd]:i.GREATER,[vd]:i.NOTEQUAL};function lt(F,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===Ga||S.magFilter===Er||S.magFilter===ii||S.minFilter===kt||S.minFilter===Ga||S.minFilter===Er||S.minFilter===ii)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Se[S.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Se[S.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Se[S.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,$e[S.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,$e[S.minFilter]),S.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==Er&&S.minFilter!==ii||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ue(F,S){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",L));const te=S.source;let ae=p.get(te);ae===void 0&&(ae={},p.set(te,ae));const we=H(S);if(we!==F.__cacheKey){ae[we]===void 0&&(ae[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ae[we].usedTimes++;const Ce=ae[F.__cacheKey];Ce!==void 0&&(ae[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(S)),F.__cacheKey=we,F.__webglTexture=ae[we].texture}return $}function me(F,S,$){return Math.floor(Math.floor(F/$)/S)}function Me(F,S,$,te){const we=F.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,$,te,S.data);else{we.sort((Ue,Te)=>Ue.start-Te.start);let Ce=0;for(let Ue=1;Ue<we.length;Ue++){const Te=we[Ce],Pe=we[Ue],qe=Te.start+Te.count,ze=me(Pe.start,S.width,4),je=me(Te.start,S.width,4);Pe.start<=qe+1&&ze===je&&me(Pe.start+Pe.count-1,S.width,4)===ze?Te.count=Math.max(Te.count,Pe.start+Pe.count-Te.start):(++Ce,we[Ce]=Pe)}we.length=Ce+1;const le=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ue=0,Te=we.length;Ue<Te;Ue++){const Pe=we[Ue],qe=Math.floor(Pe.start/4),ze=Math.ceil(Pe.count/4),je=qe%S.width,O=Math.floor(qe/S.width),X=ze,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,je,O,X,ie,$,te,S.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function nt(F,S,$){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ae=ue(F,S),we=S.source;t.bindTexture(te,F.__webglTexture,i.TEXTURE0+$);const Ce=n.get(we);if(we.version!==Ce.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=Mt.getPrimaries(Mt.workingColorSpace),ye=S.colorSpace===Oi?null:Mt.getPrimaries(S.colorSpace),Ie=S.colorSpace===Oi||ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let he=_(S.image,!1,s.maxTextureSize);he=ut(S,he);const Le=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type);let Te=b(S.internalFormat,Le,Ue,S.normalized,S.colorSpace,S.isVideoTexture);lt(te,S);let Pe;const qe=S.mipmaps,ze=S.isVideoTexture!==!0,je=Ce.__version===void 0||ae===!0,O=we.dataReady,X=P(S,he);if(S.isDepthTexture)Te=I(S.format===ts,S.type),je&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Te,he.width,he.height,0,Le,Ue,null));else if(S.isDataTexture)if(qe.length>0){ze&&je&&t.texStorage2D(i.TEXTURE_2D,X,Te,qe[0].width,qe[0].height);for(let ie=0,ye=qe.length;ie<ye;ie++)Pe=qe[ie],ze?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Le,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Le,Ue,Pe.data);S.generateMipmaps=!1}else ze?(je&&t.texStorage2D(i.TEXTURE_2D,X,Te,he.width,he.height),O&&Me(S,he,Le,Ue)):t.texImage2D(i.TEXTURE_2D,0,Te,he.width,he.height,0,Le,Ue,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Te,qe[0].width,qe[0].height,he.depth);for(let ie=0,ye=qe.length;ie<ye;ie++)if(Pe=qe[ie],S.format!==jt)if(Le!==null)if(ze){if(O)if(S.layerUpdates.size>0){const Ie=Gu(Pe.width,Pe.height,S.format,S.type);for(const pe of S.layerUpdates){const Ye=Pe.data.subarray(pe*Ie/Pe.data.BYTES_PER_ELEMENT,(pe+1)*Ie/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,pe,Pe.width,Pe.height,1,Le,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,he.depth,Le,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,he.depth,Le,Ue,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Pe.width,Pe.height,he.depth,0,Le,Ue,Pe.data)}else{ze&&je&&t.texStorage2D(i.TEXTURE_2D,X,Te,qe[0].width,qe[0].height);for(let ie=0,ye=qe.length;ie<ye;ie++)Pe=qe[ie],S.format!==jt?Le!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Pe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Le,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Le,Ue,Pe.data)}else if(S.isDataArrayTexture)if(ze){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Te,he.width,he.height,he.depth),O)if(S.layerUpdates.size>0){const ie=Gu(he.width,he.height,S.format,S.type);for(const ye of S.layerUpdates){const Ie=he.data.subarray(ye*ie/he.data.BYTES_PER_ELEMENT,(ye+1)*ie/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,he.width,he.height,1,Le,Ue,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,Ue,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,Le,Ue,he.data);else if(S.isData3DTexture)ze?(je&&t.texStorage3D(i.TEXTURE_3D,X,Te,he.width,he.height,he.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,Ue,he.data)):t.texImage3D(i.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,Le,Ue,he.data);else if(S.isFramebufferTexture){if(je)if(ze)t.texStorage2D(i.TEXTURE_2D,X,Te,he.width,he.height);else{let ie=he.width,ye=he.height;for(let Ie=0;Ie<X;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Te,ie,ye,0,Le,Ue,null),ie>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),he.parentNode!==ie){ie.appendChild(he),f.add(S),ie.onpaint=ye=>{const Ie=ye.changedElements;for(const pe of f)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{const Ie=i.RGBA,pe=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,Ye,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qe.length>0){if(ze&&je){const ie=rt(qe[0]);t.texStorage2D(i.TEXTURE_2D,X,Te,ie.width,ie.height)}for(let ie=0,ye=qe.length;ie<ye;ie++)Pe=qe[ie],ze?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le,Ue,Pe):t.texImage2D(i.TEXTURE_2D,ie,Te,Le,Ue,Pe);S.generateMipmaps=!1}else if(ze){if(je){const ie=rt(he);t.texStorage2D(i.TEXTURE_2D,X,Te,ie.width,ie.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ue,he)}else t.texImage2D(i.TEXTURE_2D,0,Te,Le,Ue,he);g(S)&&A(te),Ce.__version=we.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function ht(F,S,$){if(S.image.length!==6)return;const te=ue(F,S),ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+$);const we=n.get(ae);if(ae.version!==we.__version||te===!0){t.activeTexture(i.TEXTURE0+$);const Ce=Mt.getPrimaries(Mt.workingColorSpace),le=S.colorSpace===Oi?null:Mt.getPrimaries(S.colorSpace),he=S.colorSpace===Oi||Ce===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!Le&&!Ue?Te[pe]=_(S.image[pe],!0,s.maxCubemapSize):Te[pe]=Ue?S.image[pe].image:S.image[pe],Te[pe]=ut(S,Te[pe]);const Pe=Te[0],qe=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),je=b(S.internalFormat,qe,ze,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,X=we.__version===void 0||te===!0,ie=ae.dataReady;let ye=P(S,Pe);lt(i.TEXTURE_CUBE_MAP,S);let Ie;if(Le){O&&X&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,je,Pe.width,Pe.height);for(let pe=0;pe<6;pe++){Ie=Te[pe].mipmaps;for(let Ye=0;Ye<Ie.length;Ye++){const ke=Ie[Ye];S.format!==jt?qe!==null?O?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,ke.width,ke.height,qe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,je,ke.width,ke.height,0,ke.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,ke.width,ke.height,qe,ze,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,je,ke.width,ke.height,0,qe,ze,ke.data)}}}else{if(Ie=S.mipmaps,O&&X){Ie.length>0&&ye++;const pe=rt(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ue){O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,qe,ze,Te[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Te[pe].width,Te[pe].height,0,qe,ze,Te[pe].data);for(let Ye=0;Ye<Ie.length;Ye++){const wt=Ie[Ye].image[pe].image;O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,wt.width,wt.height,qe,ze,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,je,wt.width,wt.height,0,qe,ze,wt.data)}}else{O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe,ze,Te[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,qe,ze,Te[pe]);for(let Ye=0;Ye<Ie.length;Ye++){const ke=Ie[Ye];O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,qe,ze,ke.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,je,qe,ze,ke.image[pe])}}}g(S)&&A(i.TEXTURE_CUBE_MAP),we.__version=ae.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function st(F,S,$,te,ae,we){const Ce=r.convert($.format,$.colorSpace),le=r.convert($.type),he=b($.internalFormat,Ce,le,$.normalized,$.colorSpace),Le=n.get(S),Ue=n.get($);if(Ue.__renderTarget=S,!Le.__hasExternalTextures){const Te=Math.max(1,S.width>>we),Pe=Math.max(1,S.height>>we);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,we,he,Te,Pe,S.depth,0,Ce,le,null):t.texImage2D(ae,we,he,Te,Pe,0,Ce,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ae,Ue.__webglTexture,0,Ke(S)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ae,Ue.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(F,S,$){if(i.bindRenderbuffer(i.RENDERBUFFER,F),S.depthBuffer){const te=S.depthTexture,ae=te&&te.isDepthTexture?te.type:null,we=I(S.stencilBuffer,ae),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(S),we,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(S),we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,F)}else{const te=S.textures;for(let ae=0;ae<te.length;ae++){const we=te[ae],Ce=r.convert(we.format,we.colorSpace),le=r.convert(we.type),he=b(we.internalFormat,Ce,le,we.normalized,we.colorSpace);Qe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(S),he,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(S),he,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,he,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(F,S,$){const te=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(S.depthTexture);if(ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,S.depthTexture.addEventListener("dispose",L)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S.depthTexture);const Le=r.convert(S.depthTexture.format),Ue=r.convert(S.depthTexture.type);let Te;S.depthTexture.format===Ei?Te=i.DEPTH_COMPONENT24:S.depthTexture.format===ts&&(Te=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,S.width,S.height,0,Le,Ue,null)}}else Q(S.depthTexture,0);const we=ae.__webglTexture,Ce=Ke(S),le=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,he=S.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ei)Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,le,we,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,he,le,we,0);else if(S.depthTexture.format===ts)Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,le,we,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,he,le,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Re(F){const S=n.get(F),$=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){const te=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=te}if(F.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let te=0;te<6;te++)oe(S.__webglFramebuffer[te],F,te);else{const te=F.texture.mipmaps;te&&te.length>0?oe(S.__webglFramebuffer[0],F,0):oe(S.__webglFramebuffer,F,0)}else if($){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=i.createRenderbuffer(),ne(S.__webglDepthbuffer[te],F,!1);else{const ae=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}}else{const te=F.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ne(S.__webglDepthbuffer,F,!1);else{const ae=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(F,S,$){const te=n.get(F);S!==void 0&&st(te.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Re(F)}function Ge(F){const S=F.texture,$=n.get(F),te=n.get(S);F.addEventListener("dispose",M);const ae=F.textures,we=F.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++),we){$.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[le]=[];for(let he=0;he<S.mipmaps.length;he++)$.__webglFramebuffer[le][he]=i.createFramebuffer()}else $.__webglFramebuffer[le]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)$.__webglFramebuffer[le]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let le=0,he=ae.length;le<he;le++){const Le=n.get(ae[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Qe(F)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let le=0;le<ae.length;le++){const he=ae[le];$.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const Le=r.convert(he.format,he.colorSpace),Ue=r.convert(he.type),Te=b(he.internalFormat,Le,Ue,he.normalized,he.colorSpace,F.isXRRenderTarget===!0),Pe=Ke(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Te,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,$.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ne($.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)st($.__webglFramebuffer[le][he],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else st($.__webglFramebuffer[le],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,he=ae.length;le<he;le++){const Le=ae[le],Ue=n.get(Le);let Te=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ue.__webglTexture),lt(Te,Le),st($.__webglFramebuffer,F,Le,i.COLOR_ATTACHMENT0+le,Te,0),g(Le)&&A(Te)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(le=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),lt(le,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)st($.__webglFramebuffer[he],F,S,i.COLOR_ATTACHMENT0,le,he);else st($.__webglFramebuffer,F,S,i.COLOR_ATTACHMENT0,le,0);g(S)&&A(le),t.unbindTexture()}F.depthBuffer&&Re(F)}function De(F){const S=F.textures;for(let $=0,te=S.length;$<te;$++){const ae=S[$];if(g(ae)){const we=C(F),Ce=n.get(ae).__webglTexture;t.bindTexture(we,Ce),A(we),t.unbindTexture()}}}const be=[],Ae=[];function at(F){if(F.samples>0){if(Qe(F)===!1){const S=F.textures,$=F.width,te=F.height;let ae=i.COLOR_BUFFER_BIT;const we=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(F),le=S.length>1;if(le)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const he=F.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const Ue=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,$,te,0,0,$,te,ae,i.NEAREST),l===!0&&(be.length=0,Ae.length=0,be.push(i.COLOR_ATTACHMENT0+Le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(be.push(we),Ae.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const Ue=n.get(S[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const S=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ke(F){return Math.min(s.maxSamples,F.samples)}function Qe(F){const S=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(F){const S=a.render.frame;h.get(F)!==S&&(h.set(F,S),F.update())}function ut(F,S){const $=F.colorSpace,te=F.format,ae=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==Zt&&$!==Oi&&(Mt.getTransfer($)===Ct?(te!==jt||ae!==Pn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",$)),S}function rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.getTextureUnits=V,this.setTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=se,this.setTextureCube=fe,this.rebindTextures=Ve,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yx(i,e){function t(n,s=Oi){let r;const a=Mt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===kh)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===jt)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===ns)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Un)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Va||n===Wa||n===Xa||n===qa)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===Ml||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===Tl||n===El||n===wl||n===Ja||n===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===El)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ja)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Nl||n===Dl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Vl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Qa||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:Kx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends os{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,v=null;const w=typeof XRWebGLBinding<"u",_=new $x,g={},A=t.getContextAttributes();let C=null,b=null;const I=[],P=[],L=new Je;let M=null;const m=new vn;m.viewport=new Dt;const T=new vn;T.viewport=new Dt;const E=[m,T],N=new $p;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let me=I[ue];return me===void 0&&(me=new To,I[ue]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ue){let me=I[ue];return me===void 0&&(me=new To,I[ue]=me),me.getGripSpace()},this.getHand=function(ue){let me=I[ue];return me===void 0&&(me=new To,I[ue]=me),me.getHandSpace()};function k(ue){const me=P.indexOf(ue.inputSource);if(me===-1)return;const Me=I[me];Me!==void 0&&(Me.update(ue.inputSource,ue.frame,c||a),Me.dispatchEvent({type:ue.type,data:ue.inputSource}))}function Y(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",H);for(let ue=0;ue<I.length;ue++){const me=P[ue];me!==null&&(P[ue]=null,I[ue].disconnect(me))}z=null,V=null,_.reset();for(const ue in g)delete g[ue];e.setRenderTarget(C),p=null,d=null,f=null,s=null,b=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){r=ue,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){o=ue,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ue){c=ue},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,nt=null,ht=null;A.depth&&(ht=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=A.stencil?ts:Ei,nt=A.stencil?Ur:oi);const st={colorFormat:t.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(st),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new wn(d.textureWidth,d.textureHeight,{format:jt,type:Pn,depthTexture:new qs(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new wn(p.framebufferWidth,p.framebufferHeight,{format:jt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ue){for(let me=0;me<ue.removed.length;me++){const Me=ue.removed[me],nt=P.indexOf(Me);nt>=0&&(P[nt]=null,I[nt].disconnect(Me))}for(let me=0;me<ue.added.length;me++){const Me=ue.added[me];let nt=P.indexOf(Me);if(nt===-1){for(let st=0;st<I.length;st++)if(st>=P.length){P.push(Me),nt=st;break}else if(P[st]===null){P[st]=Me,nt=st;break}if(nt===-1)break}const ht=I[nt];ht&&ht.connect(Me)}}const Q=new G,J=new G;function se(ue,me,Me){Q.setFromMatrixPosition(me.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const nt=Q.distanceTo(J),ht=me.projectionMatrix.elements,st=Me.projectionMatrix.elements,ne=ht[14]/(ht[10]-1),oe=ht[14]/(ht[10]+1),Re=(ht[9]+1)/ht[5],Ve=(ht[9]-1)/ht[5],Ge=(ht[8]-1)/ht[0],De=(st[8]+1)/st[0],be=ne*Ge,Ae=ne*De,at=nt/(-Ge+De),Ke=at*-Ge;if(me.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Ke),ue.translateZ(at),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),ht[10]===-1)ue.projectionMatrix.copy(me.projectionMatrix),ue.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Qe=ne+at,B=oe+at,ut=be-Ke,rt=Ae+(nt-Ke),F=Re*oe/B*Qe,S=Ve*oe/B*Qe;ue.projectionMatrix.makePerspective(ut,rt,F,S,Qe,B),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function fe(ue,me){me===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(me.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let me=ue.near,Me=ue.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),N.near=T.near=m.near=me,N.far=T.far=m.far=Me,(z!==N.near||V!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,V=N.far),N.layers.mask=ue.layers.mask|6,m.layers.mask=N.layers.mask&-5,T.layers.mask=N.layers.mask&-3;const nt=ue.parent,ht=N.cameras;fe(N,nt);for(let st=0;st<ht.length;st++)fe(ht[st],nt);ht.length===2?se(N,m,T):N.projectionMatrix.copy(m.projectionMatrix),Se(ue,N,nt)};function Se(ue,me,Me){Me===null?ue.matrix.copy(me.matrixWorld):(ue.matrix.copy(Me.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(me.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(me.projectionMatrix),ue.projectionMatrixInverse.copy(me.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Xs*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ue){l=ue,d!==null&&(d.fixedFoveation=ue),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ue)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(ue){return g[ue]};let $e=null;function de(ue,me){if(h=me.getViewerPose(c||a),v=me,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let nt=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,nt=!0);for(let oe=0;oe<Me.length;oe++){const Re=Me[oe];let Ve=null;if(p!==null)Ve=p.getViewport(Re);else{const De=f.getViewSubImage(d,Re);Ve=De.viewport,oe===0&&(e.setRenderTargetTextures(b,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(b))}let Ge=E[oe];Ge===void 0&&(Ge=new vn,Ge.layers.enable(oe),Ge.viewport=new Dt,E[oe]=Ge),Ge.matrix.fromArray(Re.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Re.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),oe===0&&(N.matrix.copy(Ge.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),nt===!0&&N.cameras.push(Ge)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=n.getBinding();const oe=f.getDepthInformation(Me[0]);oe&&oe.isValid&&oe.texture&&_.init(oe,s.renderState)}if(ht&&ht.includes("camera-access")&&w){e.state.unbindTexture(),f=n.getBinding();for(let oe=0;oe<Me.length;oe++){const Re=Me[oe].camera;if(Re){let Ve=g[Re];Ve||(Ve=new rf,g[Re]=Ve);const Ge=f.getCameraImage(Re);Ve.sourceTexture=Ge}}}}for(let Me=0;Me<I.length;Me++){const nt=P[Me],ht=I[Me];nt!==null&&ht!==void 0&&ht.update(nt,me,c||a)}$e&&$e(ue,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}const lt=new df;lt.setAnimationLoop(de),this.setAnimationLoop=function(ue){$e=ue},this.dispose=function(){}}}const Qx=new xt,Mf=new gt;Mf.set(-1,0,0,0,1,0,0,0,1);function jx(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,af(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,A,C,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),f(_,g)):g.isMeshPhongMaterial?(r(_,g),h(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,b)):g.isMeshMatcapMaterial?(r(_,g),v(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),w(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,A,C):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===En&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===En&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const A=e.get(g),C=A.envMap,b=A.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Mf),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,A,C){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*A,_.scale.value=C*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,A){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function w(_,g){const A=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,I){const P=I.program;n.uniformBlockBinding(b,P)}function c(b,I){let P=s[b.id];P===void 0&&(_(b),P=h(b),s[b.id]=P,b.addEventListener("dispose",A));const L=I.program;n.updateUBOMapping(b,L);const M=e.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function h(b){const I=f();b.__bindingPointIndex=I;const P=i.createBuffer(),L=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,L,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const I=s[b.id],P=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let M=0,m=P.length;M<m;M++){const T=P[M];if(Array.isArray(T))for(let E=0,N=T.length;E<N;E++)p(T[E],M,E,L);else p(T,M,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,I,P,L){if(w(b,I,P,L)===!0){const M=b.__offset,m=b.value;if(Array.isArray(m)){let T=0;for(let E=0;E<m.length;E++){const N=m[E],z=g(N);v(N,b.__data,T),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(T+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(m,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function v(b,I,P){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,P)}function w(b,I,P,L){const M=b.value,m=I+"_"+P;if(L[m]===void 0)return typeof M=="number"||typeof M=="boolean"?L[m]=M:ArrayBuffer.isView(M)?L[m]=M.slice():L[m]=M.clone(),!0;{const T=L[m];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return L[m]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function _(b){const I=b.uniforms;let P=0;const L=16;for(let m=0,T=I.length;m<T;m++){const E=Array.isArray(I[m])?I[m]:[I[m]];for(let N=0,z=E.length;N<z;N++){const V=E[N],k=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,H=k.length;Y<H;Y++){const Q=k[Y],J=g(Q),se=P%L,fe=se%J.boundary,Se=se+fe;P+=fe,Se!==0&&L-Se<J.storage&&(P+=L-Se),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=P,P+=J.storage}}}const M=P%L;return M>0&&(P+=L-M),b.__size=P,b.__cache={},this}function g(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),I}function A(b){const I=b.target;I.removeEventListener("dispose",A);const P=a.indexOf(I.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function C(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}const tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function nv(){return Qn===null&&(Qn=new Gr(tv,16,16,Un,hn),Qn.name="DFG_LUT",Qn.minFilter=kt,Qn.magFilter=kt,Qn.wrapS=Bn,Qn.wrapT=Bn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class iv{constructor(e={}){const{canvas:t=bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const w=p,_=new Set([Sc,yc,Mc]),g=new Set([Pn,oi,Dr,Ur,xc,vc]),A=new Uint32Array(4),C=new Int32Array(4),b=new G;let I=null,P=null;const L=[],M=[];let m=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let E=!1,N=null,z=null,V=null,k=null;this._outputColorSpace=Vt;let Y=0,H=0,Q=null,J=-1,se=null;const fe=new Dt,Se=new Dt;let $e=null;const de=new He(0);let lt=0,ue=t.width,me=t.height,Me=1,nt=null,ht=null;const st=new Dt(0,0,ue,me),ne=new Dt(0,0,ue,me);let oe=!1;const Re=new Cc;let Ve=!1,Ge=!1;const De=new xt,be=new G,Ae=new Dt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Qe(){return Q===null?Me:1}let B=n;function ut(u,x){return t.getContext(u,x)}try{const u={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",$t,!1),B===null){const x="webgl2";if(B=ut(x,u),B===null)throw ut(x)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(u){throw ct("WebGLRenderer: "+u.message),u}let rt,F,S,$,te,ae,we,Ce,le,he,Le,Ue,Te,Pe,qe,ze,je,O,X,ie,ye,Ie,pe;function Ye(){rt=new n_(B),rt.init(),ye=new Yx(B,rt),F=new Kg(B,rt,e,ye),S=new Xx(B,rt),F.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),z=B.createFramebuffer(),V=B.createFramebuffer(),k=B.createFramebuffer(),$=new r_(B),te=new Ix,ae=new qx(B,rt,S,te,F,ye,$),we=new t_(T),Ce=new cm(B),Ie=new qg(B,Ce),le=new i_(B,Ce,$,Ie),he=new o_(B,le,Ce,Ie,$),O=new a_(B,F,ae),qe=new Zg(te),Le=new Px(T,we,rt,F,Ie,qe),Ue=new jx(T,te),Te=new Nx,Pe=new zx(rt),je=new Xg(T,we,S,he,v,l),ze=new Wx(T,he,F),pe=new ev(B,$,F,S),X=new Yg(B,rt,$),ie=new s_(B,rt,$),$.programs=Le.programs,T.capabilities=F,T.extensions=rt,T.properties=te,T.renderLists=Te,T.shadowMap=ze,T.state=S,T.info=$}Ye(),w!==Pn&&(m=new c_(w,t.width,t.height,o,s,r));const ke=new Jx(T,B);this.xr=ke,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const u=rt.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=rt.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(u){u!==void 0&&(Me=u,this.setSize(ue,me,!1))},this.getSize=function(u){return u.set(ue,me)},this.setSize=function(u,x,y=!0){if(ke.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=u,me=x,t.width=Math.floor(u*Me),t.height=Math.floor(x*Me),y===!0&&(t.style.width=u+"px",t.style.height=x+"px"),m!==null&&m.setSize(t.width,t.height),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set(ue*Me,me*Me).floor()},this.setDrawingBufferSize=function(u,x,y){ue=u,me=x,Me=y,t.width=Math.floor(u*y),t.height=Math.floor(x*y),this.setViewport(0,0,u,x)},this.setEffects=function(u){if(w===Pn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let x=0;x<u.length;x++)if(u[x].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(fe)},this.getViewport=function(u){return u.copy(st)},this.setViewport=function(u,x,y,R){u.isVector4?st.set(u.x,u.y,u.z,u.w):st.set(u,x,y,R),S.viewport(fe.copy(st).multiplyScalar(Me).round())},this.getScissor=function(u){return u.copy(ne)},this.setScissor=function(u,x,y,R){u.isVector4?ne.set(u.x,u.y,u.z,u.w):ne.set(u,x,y,R),S.scissor(Se.copy(ne).multiplyScalar(Me).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(u){S.setScissorTest(oe=u)},this.setOpaqueSort=function(u){nt=u},this.setTransparentSort=function(u){ht=u},this.getClearColor=function(u){return u.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(u=!0,x=!0,y=!0){let R=0;if(u){let D=!1;if(Q!==null){const W=Q.texture.format;D=_.has(W)}if(D){const W=Q.texture.type,U=g.has(W),q=je.getClearColor(),K=je.getClearAlpha(),Z=q.r,ee=q.g,ce=q.b;U?(A[0]=Z,A[1]=ee,A[2]=ce,A[3]=K,B.clearBufferuiv(B.COLOR,0,A)):(C[0]=Z,C[1]=ee,C[2]=ce,C[3]=K,B.clearBufferiv(B.COLOR,0,C))}else R|=B.COLOR_BUFFER_BIT}x&&(R|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),y&&(R|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&B.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),N=u},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),je.dispose(),Te.dispose(),Pe.dispose(),te.dispose(),we.dispose(),he.dispose(),Ie.dispose(),pe.dispose(),Le.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",$r),ke.removeEventListener("sessionend",Jr),fi.stop()};function wt(u){u.preventDefault(),eo("WebGLRenderer: Context Lost."),E=!0}function At(){eo("WebGLRenderer: Context Restored."),E=!1;const u=$.autoReset,x=ze.enabled,y=ze.autoUpdate,R=ze.needsUpdate,D=ze.type;Ye(),$.autoReset=u,ze.enabled=x,ze.autoUpdate=y,ze.needsUpdate=R,ze.type=D}function $t(u){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Pt(u){const x=u.target;x.removeEventListener("dispose",Pt),hi(x)}function hi(u){Ri(u),te.remove(u)}function Ri(u){const x=te.get(u).programs;x!==void 0&&(x.forEach(function(y){Le.releaseProgram(y)}),u.isShaderMaterial&&Le.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,y,R,D,W){x===null&&(x=at);const U=D.isMesh&&D.matrixWorld.determinantAffine()<0,q=ta(u,x,y,R,D);S.setMaterial(R,U);let K=y.index,Z=1;if(R.wireframe===!0){if(K=le.getWireframeAttribute(y),K===void 0)return;Z=2}const ee=y.drawRange,ce=y.attributes.position;let j=ee.start*Z,ge=(ee.start+ee.count)*Z;W!==null&&(j=Math.max(j,W.start*Z),ge=Math.min(ge,(W.start+W.count)*Z)),K!==null?(j=Math.max(j,0),ge=Math.min(ge,K.count)):ce!=null&&(j=Math.max(j,0),ge=Math.min(ge,ce.count));const Ee=ge-j;if(Ee<0||Ee===1/0)return;Ie.setup(D,R,q,y,K);let _e,ve=X;if(K!==null&&(_e=Ce.get(K),ve=ie,ve.setIndex(_e)),D.isMesh)R.wireframe===!0?(S.setLineWidth(R.wireframeLinewidth*Qe()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(D.isLine){let Oe=R.linewidth;Oe===void 0&&(Oe=1),S.setLineWidth(Oe*Qe()),D.isLineSegments?ve.setMode(B.LINES):D.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else D.isPoints?ve.setMode(B.POINTS):D.isSprite&&ve.setMode(B.TRIANGLES);if(D.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ve.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Oe=D._multiDrawStarts,xe=D._multiDrawCounts,tt=D._multiDrawCount,We=K?Ce.get(K).bytesPerElement:1,Be=te.get(R).currentProgram.getUniforms();for(let Ne=0;Ne<tt;Ne++)Be.setValue(B,"_gl_DrawID",Ne),ve.render(Oe[Ne]/We,xe[Ne])}else if(D.isInstancedMesh)ve.renderInstances(j,Ee,D.count);else if(y.isInstancedBufferGeometry){const Oe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,xe=Math.min(y.instanceCount,Oe);ve.renderInstances(j,Ee,xe)}else ve.render(j,Ee)};function Ln(u,x,y){u.transparent===!0&&u.side===mn&&u.forceSinglePass===!1?(u.side=En,u.needsUpdate=!0,di(u,x,y),u.side=Ti,u.needsUpdate=!0,di(u,x,y),u.side=mn):di(u,x,y)}this.compile=function(u,x,y=null){y===null&&(y=u),P=Pe.get(y),P.init(x),M.push(P),y.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(P.pushLight(D),D.castShadow&&P.pushShadow(D))}),u!==y&&u.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(P.pushLight(D),D.castShadow&&P.pushShadow(D))}),P.setupLights();const R=new Set;return u.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const W=D.material;if(W)if(Array.isArray(W))for(let U=0;U<W.length;U++){const q=W[U];Ln(q,y,D),R.add(q)}else Ln(W,y,D),R.add(W)}),P=M.pop(),R},this.compileAsync=function(u,x,y=null){const R=this.compile(u,x,y);return new Promise(D=>{function W(){if(R.forEach(function(U){te.get(U).currentProgram.isReady()&&R.delete(U)}),R.size===0){D(u);return}setTimeout(W,10)}rt.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let tr=null;function Zr(u){tr&&tr(u)}function $r(){fi.stop()}function Jr(){fi.start()}const fi=new df;fi.setAnimationLoop(Zr),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(u){tr=u,ke.setAnimationLoop(u),u===null?fi.stop():fi.start()},ke.addEventListener("sessionstart",$r),ke.addEventListener("sessionend",Jr),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;N!==null&&N.renderStart(u,x);const y=ke.enabled===!0&&ke.isPresenting===!0,R=m!==null&&(Q===null||y)&&m.begin(T,Q);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(x),x=ke.getCamera()),u.isScene===!0&&u.onBeforeRender(T,u,x,Q),P=Pe.get(u,M.length),P.init(x),P.state.textureUnits=ae.getTextureUnits(),M.push(P),De.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Re.setFromProjectionMatrix(De,si,x.reversedDepth),Ge=this.localClippingEnabled,Ve=qe.init(this.clippingPlanes,Ge),I=Te.get(u,L.length),I.init(),L.push(I),ke.enabled===!0&&ke.isPresenting===!0){const U=T.xr.getDepthSensingMesh();U!==null&&cs(U,x,-1/0,T.sortObjects)}cs(u,x,0,T.sortObjects),I.finish(),T.sortObjects===!0&&I.sort(nt,ht,x.reversedDepth),Ke=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ke&&je.addToRenderList(I,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&qe.beginShadows();const D=P.state.shadowsArray;if(ze.render(D,u,x),Ve===!0&&qe.endShadows(),(R&&m.hasRenderPass())===!1){const U=I.opaque,q=I.transmissive;if(P.setupLights(),x.isArrayCamera){const K=x.cameras;if(q.length>0)for(let Z=0,ee=K.length;Z<ee;Z++){const ce=K[Z];nr(U,q,u,ce)}Ke&&je.render(u);for(let Z=0,ee=K.length;Z<ee;Z++){const ce=K[Z];Qr(I,u,ce,ce.viewport)}}else q.length>0&&nr(U,q,u,x),Ke&&je.render(u),Qr(I,u,x)}Q!==null&&H===0&&(ae.updateMultisampleRenderTarget(Q),ae.updateRenderTargetMipmap(Q)),R&&m.end(T),u.isScene===!0&&u.onAfterRender(T,u,x),Ie.resetDefaultState(),J=-1,se=null,M.pop(),M.length>0?(P=M[M.length-1],ae.setTextureUnits(P.state.textureUnits),Ve===!0&&qe.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?I=L[L.length-1]:I=null,N!==null&&N.renderEnd()};function cs(u,x,y,R){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLightProbeGrid)P.pushLightProbeGrid(u);else if(u.isLight)P.pushLight(u),u.castShadow&&P.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Re.intersectsSprite(u)){R&&Ae.setFromMatrixPosition(u.matrixWorld).applyMatrix4(De);const U=he.update(u),q=u.material;q.visible&&I.push(u,U,q,y,Ae.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Re.intersectsObject(u))){const U=he.update(u),q=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Ae.copy(u.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),Ae.copy(U.boundingSphere.center)),Ae.applyMatrix4(u.matrixWorld).applyMatrix4(De)),Array.isArray(q)){const K=U.groups;for(let Z=0,ee=K.length;Z<ee;Z++){const ce=K[Z],j=q[ce.materialIndex];j&&j.visible&&I.push(u,U,j,y,Ae.z,ce)}}else q.visible&&I.push(u,U,q,y,Ae.z,null)}}const W=u.children;for(let U=0,q=W.length;U<q;U++)cs(W[U],x,y,R)}function Qr(u,x,y,R){const{opaque:D,transmissive:W,transparent:U}=u;P.setupLightsView(y),Ve===!0&&qe.setGlobalState(T.clippingPlanes,y),R&&S.viewport(fe.copy(R)),D.length>0&&us(D,x,y),W.length>0&&us(W,x,y),U.length>0&&us(U,x,y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function nr(u,x,y,R){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[R.id]===void 0){const j=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[R.id]=new wn(1,1,{generateMipmaps:!0,type:j?hn:Pn,minFilter:ii,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const W=P.state.transmissionRenderTarget[R.id],U=R.viewport||fe;W.setSize(U.z*T.transmissionResolutionScale,U.w*T.transmissionResolutionScale);const q=T.getRenderTarget(),K=T.getActiveCubeFace(),Z=T.getActiveMipmapLevel();T.setRenderTarget(W),T.getClearColor(de),lt=T.getClearAlpha(),lt<1&&T.setClearColor(16777215,.5),T.clear(),Ke&&je.render(y);const ee=T.toneMapping;T.toneMapping=ai;const ce=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),P.setupLightsView(R),Ve===!0&&qe.setGlobalState(T.clippingPlanes,R),us(u,y,R),ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W),rt.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let ge=0,Ee=x.length;ge<Ee;ge++){const _e=x[ge],{object:ve,geometry:Oe,material:xe,group:tt}=_e;if(xe.side===mn&&ve.layers.test(R.layers)){const We=xe.side;xe.side=En,xe.needsUpdate=!0,jr(ve,y,R,Oe,xe,tt),xe.side=We,xe.needsUpdate=!0,j=!0}}j===!0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W))}T.setRenderTarget(q,K,Z),T.setClearColor(de,lt),ce!==void 0&&(R.viewport=ce),T.toneMapping=ee}function us(u,x,y){const R=x.isScene===!0?x.overrideMaterial:null;for(let D=0,W=u.length;D<W;D++){const U=u[D],{object:q,geometry:K,group:Z}=U;let ee=U.material;ee.allowOverride===!0&&R!==null&&(ee=R),q.layers.test(y.layers)&&jr(q,x,y,K,ee,Z)}}function jr(u,x,y,R,D,W){u.onBeforeRender(T,x,y,R,D,W),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),D.onBeforeRender(T,x,y,R,u,W),D.transparent===!0&&D.side===mn&&D.forceSinglePass===!1?(D.side=En,D.needsUpdate=!0,T.renderBufferDirect(y,x,R,D,u,W),D.side=Ti,D.needsUpdate=!0,T.renderBufferDirect(y,x,R,D,u,W),D.side=mn):T.renderBufferDirect(y,x,R,D,u,W),u.onAfterRender(T,x,y,R,D,W)}function di(u,x,y){x.isScene!==!0&&(x=at);const R=te.get(u),D=P.state.lights,W=P.state.shadowsArray,U=D.state.version,q=Le.getParameters(u,D.state,W,x,y,P.state.lightProbeGridArray),K=Le.getProgramCacheKey(q);let Z=R.programs;R.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?x.environment:null,R.fog=x.fog;const ee=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;R.envMap=we.get(u.envMap||R.environment,ee),R.envMapRotation=R.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,Z===void 0&&(u.addEventListener("dispose",Pt),Z=new Map,R.programs=Z);let ce=Z.get(K);if(ce!==void 0){if(R.currentProgram===ce&&R.lightsStateVersion===U)return ea(u,q),ce}else q.uniforms=Le.getUniforms(u),N!==null&&u.isNodeMaterial&&N.build(u,y,q),u.onBeforeCompile(q,T),ce=Le.acquireProgram(q,K),Z.set(K,ce),R.uniforms=q.uniforms;const j=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(j.clippingPlanes=qe.uniform),ea(u,q),R.needsLights=yn(u),R.lightsStateVersion=U,R.needsLights&&(j.ambientLightColor.value=D.state.ambient,j.lightProbe.value=D.state.probe,j.directionalLights.value=D.state.directional,j.directionalLightShadows.value=D.state.directionalShadow,j.spotLights.value=D.state.spot,j.spotLightShadows.value=D.state.spotShadow,j.rectAreaLights.value=D.state.rectArea,j.ltc_1.value=D.state.rectAreaLTC1,j.ltc_2.value=D.state.rectAreaLTC2,j.pointLights.value=D.state.point,j.pointLightShadows.value=D.state.pointShadow,j.hemisphereLights.value=D.state.hemi,j.directionalShadowMatrix.value=D.state.directionalShadowMatrix,j.spotLightMatrix.value=D.state.spotLightMatrix,j.spotLightMap.value=D.state.spotLightMap,j.pointShadowMatrix.value=D.state.pointShadowMatrix),R.lightProbeGrid=P.state.lightProbeGridArray.length>0,R.currentProgram=ce,R.uniformsList=null,ce}function Wi(u){if(u.uniformsList===null){const x=u.currentProgram.getUniforms();u.uniformsList=Ya.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function ea(u,x){const y=te.get(u);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function hs(u,x){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;b.setFromMatrixPosition(x.matrixWorld);for(let y=0,R=u.length;y<R;y++){const D=u[y];if(D.texture!==null&&D.boundingBox.containsPoint(b))return D}return null}function ta(u,x,y,R,D){x.isScene!==!0&&(x=at),ae.resetTextureUnits();const W=x.fog,U=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?x.environment:null,q=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Mt.workingColorSpace,K=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,Z=we.get(R.envMap||U,K),ee=R.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,ce=!!y.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),j=!!y.morphAttributes.position,ge=!!y.morphAttributes.normal,Ee=!!y.morphAttributes.color;let _e=ai;R.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(_e=T.toneMapping);const ve=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Oe=ve!==void 0?ve.length:0,xe=te.get(R),tt=P.state.lights;if(Ve===!0&&(Ge===!0||u!==se)){const ft=u===se&&R.id===J;qe.setState(R,u,ft)}let We=!1;R.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tt.state.version||xe.outputColorSpace!==q||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==Z||R.fog===!0&&xe.fog!==W||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==qe.numPlanes||xe.numIntersection!==qe.numIntersection)||xe.vertexAlphas!==ee||xe.vertexTangents!==ce||xe.morphTargets!==j||xe.morphNormals!==ge||xe.morphColors!==Ee||xe.toneMapping!==_e||xe.morphTargetsCount!==Oe||!!xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,xe.__version=R.version);let Be=xe.currentProgram;We===!0&&(Be=di(R,x,D),N&&R.isNodeMaterial&&N.onUpdateProgram(R,Be,xe));let Ne=!1,Xe=!1,Tt=!1;const et=Be.getUniforms(),Ze=xe.uniforms;if(S.useProgram(Be.program)&&(Ne=!0,Xe=!0,Tt=!0),R.id!==J&&(J=R.id,Xe=!0),xe.needsLights){const ft=hs(P.state.lightProbeGridArray,D);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,Xe=!0)}if(Ne||se!==u){S.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),et.setValue(B,"projectionMatrix",u.projectionMatrix),et.setValue(B,"viewMatrix",u.matrixWorldInverse);const Ht=et.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,be.setFromMatrixPosition(u.matrixWorld)),F.logarithmicDepthBuffer&&et.setValue(B,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&et.setValue(B,"isOrthographic",u.isOrthographicCamera===!0),se!==u&&(se=u,Xe=!0,Tt=!0)}if(xe.needsLights&&(tt.state.directionalShadowMap.length>0&&et.setValue(B,"directionalShadowMap",tt.state.directionalShadowMap,ae),tt.state.spotShadowMap.length>0&&et.setValue(B,"spotShadowMap",tt.state.spotShadowMap,ae),tt.state.pointShadowMap.length>0&&et.setValue(B,"pointShadowMap",tt.state.pointShadowMap,ae)),D.isSkinnedMesh){et.setOptional(B,D,"bindMatrix"),et.setOptional(B,D,"bindMatrixInverse");const ft=D.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),et.setValue(B,"boneTexture",ft.boneTexture,ae))}D.isBatchedMesh&&(et.setOptional(B,D,"batchingTexture"),et.setValue(B,"batchingTexture",D._matricesTexture,ae),et.setOptional(B,D,"batchingIdTexture"),et.setValue(B,"batchingIdTexture",D._indirectTexture,ae),et.setOptional(B,D,"batchingColorTexture"),D._colorsTexture!==null&&et.setValue(B,"batchingColorTexture",D._colorsTexture,ae));const dt=y.morphAttributes;if((dt.position!==void 0||dt.normal!==void 0||dt.color!==void 0)&&O.update(D,y,Be),(Xe||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,et.setValue(B,"receiveShadow",D.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&x.environment!==null&&(Ze.envMapIntensity.value=x.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=nv()),Xe){if(et.setValue(B,"toneMappingExposure",T.toneMappingExposure),xe.needsLights&&on(Ze,Tt),W&&R.fog===!0&&Ue.refreshFogUniforms(Ze,W),Ue.refreshMaterialUniforms(Ze,R,Me,me,P.state.transmissionRenderTarget[u.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;Ze.probesSH.value=ft.texture,Ze.probesMin.value.copy(ft.boundingBox.min),Ze.probesMax.value.copy(ft.boundingBox.max),Ze.probesResolution.value.copy(ft.resolution)}Ya.upload(B,Wi(xe),Ze,ae)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ya.upload(B,Wi(xe),Ze,ae),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&et.setValue(B,"center",D.center),et.setValue(B,"modelViewMatrix",D.modelViewMatrix),et.setValue(B,"normalMatrix",D.normalMatrix),et.setValue(B,"modelMatrix",D.matrixWorld),R.uniformsGroups!==void 0){const ft=R.uniformsGroups;for(let Ht=0,Et=ft.length;Ht<Et;Ht++){const An=ft[Ht];pe.update(An,Be),pe.bind(An,Be)}}return Be}function on(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function yn(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(u,x,y){const R=te.get(u);R.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),te.get(u.texture).__webglTexture=x,te.get(u.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:y,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,x){const y=te.get(u);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,y=0){Q=u,Y=x,H=y;let R=null,D=!1,W=!1;if(u){const q=te.get(u);if(q.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,q.__webglFramebuffer),fe.copy(u.viewport),Se.copy(u.scissor),$e=u.scissorTest,S.viewport(fe),S.scissor(Se),S.setScissorTest($e),J=-1;return}else if(q.__webglFramebuffer===void 0)ae.setupRenderTarget(u);else if(q.__hasExternalTextures)ae.rebindTextures(u,te.get(u.texture).__webglTexture,te.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const ee=u.depthTexture;if(q.__boundDepthTexture!==ee){if(ee!==null&&te.has(ee)&&(u.width!==ee.image.width||u.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(u)}}const K=u.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(W=!0);const Z=te.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Z[x])?R=Z[x][y]:R=Z[x],D=!0):u.samples>0&&ae.useMultisampledRTT(u)===!1?R=te.get(u).__webglMultisampledFramebuffer:Array.isArray(Z)?R=Z[y]:R=Z,fe.copy(u.viewport),Se.copy(u.scissor),$e=u.scissorTest}else fe.copy(st).multiplyScalar(Me).floor(),Se.copy(ne).multiplyScalar(Me).floor(),$e=oe;if(y!==0&&(R=z),S.bindFramebuffer(B.FRAMEBUFFER,R)&&S.drawBuffers(u,R),S.viewport(fe),S.scissor(Se),S.setScissorTest($e),D){const q=te.get(u.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,q.__webglTexture,y)}else if(W){const q=x;for(let K=0;K<u.textures.length;K++){const Z=te.get(u.textures[K]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+K,Z.__webglTexture,y,q)}}else if(u!==null&&y!==0){const q=te.get(u.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,q.__webglTexture,y)}J=-1},this.readRenderTargetPixels=function(u,x,y,R,D,W,U,q=0){if(!(u&&u.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K=te.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(K=K[U]),K){S.bindFramebuffer(B.FRAMEBUFFER,K);try{const Z=u.textures[q],ee=Z.format,ce=Z.type;if(u.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+q),!F.textureFormatReadable(ee)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ce)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-R&&y>=0&&y<=u.height-D&&B.readPixels(x,y,R,D,ye.convert(ee),ye.convert(ce),W)}finally{const Z=Q!==null?te.get(Q).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(u,x,y,R,D,W,U,q=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let K=te.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(K=K[U]),K)if(x>=0&&x<=u.width-R&&y>=0&&y<=u.height-D){S.bindFramebuffer(B.FRAMEBUFFER,K);const Z=u.textures[q],ee=Z.format,ce=Z.type;if(u.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+q),!F.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const j=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,j),B.bufferData(B.PIXEL_PACK_BUFFER,W.byteLength,B.STREAM_READ),B.readPixels(x,y,R,D,ye.convert(ee),ye.convert(ce),0);const ge=Q!==null?te.get(Q).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,ge);const Ee=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Td(B,Ee,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,j),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,W),B.deleteBuffer(j),B.deleteSync(Ee),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,x=null,y=0){const R=Math.pow(2,-y),D=Math.floor(u.image.width*R),W=Math.floor(u.image.height*R),U=x!==null?x.x:0,q=x!==null?x.y:0;ae.setTexture2D(u,0),B.copyTexSubImage2D(B.TEXTURE_2D,y,0,0,U,q,D,W),S.unbindTexture()},this.copyTextureToTexture=function(u,x,y=null,R=null,D=0,W=0){let U,q,K,Z,ee,ce,j,ge,Ee;const _e=u.isCompressedTexture?u.mipmaps[W]:u.image;if(y!==null)U=y.max.x-y.min.x,q=y.max.y-y.min.y,K=y.isBox3?y.max.z-y.min.z:1,Z=y.min.x,ee=y.min.y,ce=y.isBox3?y.min.z:0;else{const Ze=Math.pow(2,-D);U=Math.floor(_e.width*Ze),q=Math.floor(_e.height*Ze),u.isDataArrayTexture?K=_e.depth:u.isData3DTexture?K=Math.floor(_e.depth*Ze):K=1,Z=0,ee=0,ce=0}R!==null?(j=R.x,ge=R.y,Ee=R.z):(j=0,ge=0,Ee=0);const ve=ye.convert(x.format),Oe=ye.convert(x.type);let xe;x.isData3DTexture?(ae.setTexture3D(x,0),xe=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(ae.setTexture2DArray(x,0),xe=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(x,0),xe=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);const tt=S.getParameter(B.UNPACK_ROW_LENGTH),We=S.getParameter(B.UNPACK_IMAGE_HEIGHT),Be=S.getParameter(B.UNPACK_SKIP_PIXELS),Ne=S.getParameter(B.UNPACK_SKIP_ROWS),Xe=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Z),S.pixelStorei(B.UNPACK_SKIP_ROWS,ee),S.pixelStorei(B.UNPACK_SKIP_IMAGES,ce);const Tt=u.isDataArrayTexture||u.isData3DTexture,et=x.isDataArrayTexture||x.isData3DTexture;if(u.isDepthTexture){const Ze=te.get(u),dt=te.get(x),ft=te.get(Ze.__renderTarget),Ht=te.get(dt.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,ft.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Et=0;Et<K;Et++)Tt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.get(u).__webglTexture,D,ce+Et),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.get(x).__webglTexture,W,Ee+Et)),B.blitFramebuffer(Z,ee,U,q,j,ge,U,q,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(D!==0||u.isRenderTargetTexture||te.has(u)){const Ze=te.get(u),dt=te.get(x);S.bindFramebuffer(B.READ_FRAMEBUFFER,V),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let ft=0;ft<K;ft++)Tt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.__webglTexture,D,ce+ft):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ze.__webglTexture,D),et?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.__webglTexture,W,Ee+ft):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,W),D!==0?B.blitFramebuffer(Z,ee,U,q,j,ge,U,q,B.COLOR_BUFFER_BIT,B.NEAREST):et?B.copyTexSubImage3D(xe,W,j,ge,Ee+ft,Z,ee,U,q):B.copyTexSubImage2D(xe,W,j,ge,Z,ee,U,q);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else et?u.isDataTexture||u.isData3DTexture?B.texSubImage3D(xe,W,j,ge,Ee,U,q,K,ve,Oe,_e.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(xe,W,j,ge,Ee,U,q,K,ve,_e.data):B.texSubImage3D(xe,W,j,ge,Ee,U,q,K,ve,Oe,_e):u.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,j,ge,U,q,ve,Oe,_e.data):u.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,j,ge,_e.width,_e.height,ve,_e.data):B.texSubImage2D(B.TEXTURE_2D,W,j,ge,U,q,ve,Oe,_e);S.pixelStorei(B.UNPACK_ROW_LENGTH,tt),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),W===0&&x.generateMipmaps&&B.generateMipmap(xe),S.unbindTexture()},this.initRenderTarget=function(u){te.get(u).__webglFramebuffer===void 0&&ae.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?ae.setTextureCube(u,0):u.isData3DTexture?ae.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?ae.setTexture2DArray(u,0):ae.setTexture2D(u,0),S.unbindTexture()},this.resetState=function(){Y=0,H=0,Q=null,S.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function Ks(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new an;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in r){const f=hh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const p=[];for(let w=0;w<a[h].length;++w)p.push(a[h][w][d]);const v=hh(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}}return l}function hh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new nn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=h.count;d<p;d++)for(let v=0;v<t;v++){const w=h.getComponent(d,v);o.setComponent(d+f,v,w)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function fh(i,e){if(e===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kl||e===Xh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Ka={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sv=new Yr(-1,1,1,-1,0,1);class rv extends an{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const av=new rv;class Fc{constructor(e){this._mesh=new bt(av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ov extends er{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vr.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dh extends er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class lv extends er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ov(Ka),this.copyPass.material.blending=ri,this.timer=new Jp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(a instanceof dh?n=!0:a instanceof lv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uv extends er{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const hv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zs extends er{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new wn(r,a,{type:hn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new wn(r,a,{type:hn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=hv;this.highPassUniforms=Vr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Je(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vr.clone(Ka.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader,premultipliedAlpha:!0,blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new Fc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Je(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Zs.BlurDirectionX=new Je(1,0);Zs.BlurDirectionY=new Je(0,1);const Fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fv extends er{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vr.clone(Fa.uniforms),this.material=new of({name:Fa.name,uniforms:this.uniforms,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this._fsQuad=new Fc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function dv(i){const e=new Map,t=new Map,n=i.clone();return yf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function yf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)yf(i.children[n],e.children[n],t)}class pv extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new ph(t,St.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ph(t,St.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lv(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Lr.extractUrlBase(e);a=Lr.resolveURL(c,this.path)}else a=Lr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sf){try{a[St.KHR_BINARY_GLTF]=new Nv(e)}catch(f){s&&s(f);return}r=JSON.parse(a[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case St.KHR_MATERIALS_UNLIT:a[f]=new _v;break;case St.KHR_DRACO_MESH_COMPRESSION:a[f]=new Dv(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:a[f]=new Uv;break;case St.KHR_MESH_QUANTIZATION:a[f]=new Fv;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function mv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Yt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gv{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Zt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ff(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hf(h),c.distance=f;break;case"spot":c=new ec(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class _v{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class xv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class vv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(r,r)}return Promise.all(s)}}class Mv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class yv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class Sv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class bv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class Tv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],Zt),Promise.all(s)}}class Ev{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],Zt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(s)}}class Av{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class Rv{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Cv{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Pv{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Iv{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ph{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,d,s.mode,s.filter),p})})}else return null}}class Lv{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const v of f){const w=new xt,_=new G,g=new Ai,A=new G(1,1,1),C=new Jl(v.geometry,v.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&A.fromBufferAttribute(l.SCALE,b),C.setMatrixAt(b,w.compose(_,g,A));for(const b in l)if(b==="_COLOR_0"){const I=l[b];C.instanceColor=new $l(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&v.geometry.setAttribute(b,l[b]);Ft.prototype.copy.call(C,v),this.parser.assignFinalMaterial(C),p.push(C)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Sf="glTF",xr=12,mh={JSON:1313821514,BIN:5130562};class Nv{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xr,r=new DataView(e,xr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===mh.JSON){const c=new Uint8Array(e,xr+a,o);this.content=n.decode(c)}else if(l===mh.BIN){const c=xr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const f=sc[h]||h.toLowerCase();o[f]=a[h]}for(const h in e.attributes){const f=sc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Hs[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){s.decodeDracoFile(h,function(p){for(const v in p.attributes){const w=p.attributes[v],_=l[v];_!==void 0&&(w.normalized=_)}f(p)},o,c,Zt,d)})})}}class Uv{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fv{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class bf extends $s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,f=(n-t)/h,d=f*f,p=d*f,v=e*c,w=v-c,_=-2*p+3*d,g=p-d,A=1-_,C=g-d+f;for(let b=0;b!==o;b++){const I=a[w+b+o],P=a[w+b+l]*h,L=a[v+b+o],M=a[v+b]*h;r[b]=A*I+C*P+_*L+g*M}return r}}const Ov=new Ai;class Bv extends bf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Ov.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gh={9728:en,9729:kt,9984:Bh,9985:Ga,9986:Er,9987:ii},_h={33071:Bn,33648:$a,10497:Hi},jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zv={CUBICSPLINE:void 0,LINEAR:Or,STEP:Fr},el={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),i.DefaultMaterial}function Ji(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const f=e[c];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(d)}if(s){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],f=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Gv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vv(i){let e;const t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tl(t.attributes):e=i.indices+":"+tl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+tl(i.targets[n]);return e}function tl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Xv=new xt;class qv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new cf(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ji(r,o,s),ti(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Lr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=jo[s.type],o=Hs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new nn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=jo[s.type],c=Hs[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let w,_;if(p&&p!==f){const g=Math.floor(d/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let C=t.cache.get(A);C||(w=new c(o,g*p,s.count*p/h),C=new Qh(w,p/h),t.cache.add(A,C)),_=new Hr(C,l,d%p/h,v)}else o===null?w=new c(s.count*l):w=new c(o,d,s.count*l),_=new nn(w,l,v);if(s.sparse!==void 0){const g=jo.SCALAR,A=Hs[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,I=new A(a[1],C,s.sparse.count*g),P=new c(a[2],b,s.sparse.count*l);o!==null&&(_=new nn(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let L=0,M=I.length;L<M;L++){const m=I[L];if(_.setX(m,P[L*l]),l>=2&&_.setY(m,P[L*l+1]),l>=3&&_.setZ(m,P[L*l+2]),l>=4&&_.setW(m,P[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=v}return _})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=gh[d.magFilter]||kt,h.minFilter=gh[d.minFilter]||ii,h.wrapS=_h[d.wrapS]||Hi,h.wrapT=_h[d.wrapT]||Hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(w){const _=new tn(w);_.needsUpdate=!0,d(_)}),t.load(Lr.resolveURL(f,r.path),v,void 0,p)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),ti(f,a),f.userData.mimeType=a.mimeType||Wv(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new nf,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Pc,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){const f=s[St.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Zt),o.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Vt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=mn);const h=r.alphaMode||el.OPAQUE;if(h===el.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===el.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==cn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==cn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==cn){const f=r.emissiveFactor;o.emissive=new He().setRGB(f[0],f[1],f[2],Zt)}return r.emissiveTexture!==void 0&&a!==cn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const f=new a(o);return r.name&&(f.name=r.name),ti(f,r),t.associations.set(f,{materials:e}),r.extensions&&Ji(s,f,r),f})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return xh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Vv(c),f=s[h];if(f)a.push(f.promise);else{let d;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xh(new an,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?kv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let p=0,v=h.length;p<v;p++){const w=h[p],_=a[p];let g;const A=c[p];if(_.mode===Dn.TRIANGLES||_.mode===Dn.TRIANGLE_STRIP||_.mode===Dn.TRIANGLE_FAN||_.mode===void 0)g=r.isSkinnedMesh===!0?new dp(w,A):new bt(w,A),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),_.mode===Dn.TRIANGLE_STRIP?g.geometry=fh(g.geometry,Xh):_.mode===Dn.TRIANGLE_FAN&&(g.geometry=fh(g.geometry,Kl));else if(_.mode===Dn.LINES)g=new vp(w,A);else if(_.mode===Dn.LINE_STRIP)g=new lo(w,A);else if(_.mode===Dn.LINE_LOOP)g=new Mp(w,A);else if(_.mode===Dn.POINTS)g=new yp(w,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(g.geometry.morphAttributes).length>0&&Gv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ti(g,r),_.extensions&&Ji(s,g,_),t.assignFinalMaterial(g),f.push(g)}for(let p=0,v=f.length;p<v;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Ji(s,f[0],r),f[0];const d=new It;r.extensions&&Ji(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,v=f.length;p<v;p++)d.add(f[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(Gd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const f=a[c];if(f){o.push(f);const d=new xt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let f=0,d=s.channels.length;f<d;f++){const p=s.channels[f],v=s.samplers[p.sampler],w=p.target,_=w.node,g=s.parameters!==void 0?s.parameters[v.input]:v.input,A=s.parameters!==void 0?s.parameters[v.output]:v.output;w.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",A)),c.push(v),h.push(w))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){const d=f[0],p=f[1],v=f[2],w=f[3],_=f[4],g=[];for(let C=0,b=d.length;C<b;C++){const I=d[C],P=p[C],L=v[C],M=w[C],m=_[C];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const T=n._createAnimationTracks(I,P,L,M,m);if(T)for(let E=0;E<T.length;E++)g.push(T[E])}const A=new Fp(r,void 0,g);return ti(A,s),A})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Xv)});for(let p=0,v=f.length;p<v;p++)h.add(f[p]);if(h.userData.pivot!==void 0&&f.length>0){const p=h.userData.pivot,v=f[0];h.pivot=new G().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],v.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new tf:c.length>1?h=new It:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=a),ti(h,r),r.extensions&&Ji(n,h,r),r.matrix!==void 0){const f=new xt;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),ti(r,n),n.extensions&&Ji(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){const d=l[h];d.parent!==null?r.add(dv(d)):r.add(d)}const c=h=>{const f=new Map;for(const[d,p]of s.associations)(d instanceof In||d instanceof tn)&&f.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&f.set(d,p)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Ui[r.path]===Ui.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Ui[r.path]){case Ui.weights:h=Wr;break;case Ui.rotation:h=Xr;break;case Ui.translation:case Ui.scale:h=io;break;default:n.itemSize===1?h=Wr:h=io;break}const f=s.interpolation!==void 0?zv[s.interpolation]:Or,d=this._getArrayFromAccessor(n);for(let p=0,v=l.length;p<v;p++){const w=new h(l[p]+"."+Ui[r.path],t.array,d,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(w),a.push(w)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Xr?Bv:bf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yv(i,e,t){const n=e.attributes,s=new Kn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const h=rc(Hs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,l=new G;for(let c=0,h=r.length;c<h;c++){const f=r[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const w=rc(Hs[d.componentType]);l.multiplyScalar(w)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new ci;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function xh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=sc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Mt.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),ti(i,e),Yv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Hv(i,e.targets,t):i})}var On=Uint8Array,Fs=Uint16Array,Kv=Int32Array,Tf=new On([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ef=new On([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zv=new On([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wf=function(i,e){for(var t=new Fs(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Kv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Af=wf(Tf,2),Rf=Af.b,$v=Af.r;Rf[28]=258,$v[258]=28;var Jv=wf(Ef,0),Qv=Jv.b,ac=new Fs(32768);for(var Ot=0;Ot<32768;++Ot){var Fi=(Ot&43690)>>1|(Ot&21845)<<1;Fi=(Fi&52428)>>2|(Fi&13107)<<2,Fi=(Fi&61680)>>4|(Fi&3855)<<4,ac[Ot]=((Fi&65280)>>8|(Fi&255)<<8)>>1}var Nr=(function(i,e,t){for(var n=i.length,s=0,r=new Fs(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Fs(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Fs(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],f=a[i[s]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)o[ac[f]>>l]=c}else for(o=new Fs(n),s=0;s<n;++s)i[s]&&(o[s]=ac[a[i[s]-1]++]>>15-i[s]);return o}),Kr=new On(288);for(var Ot=0;Ot<144;++Ot)Kr[Ot]=8;for(var Ot=144;Ot<256;++Ot)Kr[Ot]=9;for(var Ot=256;Ot<280;++Ot)Kr[Ot]=7;for(var Ot=280;Ot<288;++Ot)Kr[Ot]=8;var Cf=new On(32);for(var Ot=0;Ot<32;++Ot)Cf[Ot]=5;var jv=Nr(Kr,9,1),eM=Nr(Cf,5,1),nl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Gn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},il=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},tM=function(i){return(i+7)/8|0},nM=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new On(i.subarray(e,t))},iM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wn=function(i,e,t){var n=new Error(e||iM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Wn),!t)throw n;return n},sM=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new On(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new On(s*3));var c=function(st){var ne=t.length;if(st>ne){var oe=new On(Math.max(ne*2,st));oe.set(t),t=oe}},h=e.f||0,f=e.p||0,d=e.b||0,p=e.l,v=e.d,w=e.m,_=e.n,g=s*8;do{if(!p){h=Gn(i,f,1);var A=Gn(i,f+1,3);if(f+=3,A)if(A==1)p=jv,v=eM,w=9,_=5;else if(A==2){var P=Gn(i,f,31)+257,L=Gn(i,f+10,15)+4,M=P+Gn(i,f+5,31)+1;f+=14;for(var m=new On(M),T=new On(19),E=0;E<L;++E)T[Zv[E]]=Gn(i,f+E*3,7);f+=L*3;for(var N=nl(T),z=(1<<N)-1,V=Nr(T,N,1),E=0;E<M;){var k=V[Gn(i,f,z)];f+=k&15;var C=k>>4;if(C<16)m[E++]=C;else{var Y=0,H=0;for(C==16?(H=3+Gn(i,f,3),f+=2,Y=m[E-1]):C==17?(H=3+Gn(i,f,7),f+=3):C==18&&(H=11+Gn(i,f,127),f+=7);H--;)m[E++]=Y}}var Q=m.subarray(0,P),J=m.subarray(P);w=nl(Q),_=nl(J),p=Nr(Q,w,1),v=Nr(J,_,1)}else Wn(1);else{var C=tM(f)+4,b=i[C-4]|i[C-3]<<8,I=C+b;if(I>s){l&&Wn(0);break}o&&c(d+b),t.set(i.subarray(C,I),d),e.b=d+=b,e.p=f=I*8,e.f=h;continue}if(f>g){l&&Wn(0);break}}o&&c(d+131072);for(var se=(1<<w)-1,fe=(1<<_)-1,Se=f;;Se=f){var Y=p[il(i,f)&se],$e=Y>>4;if(f+=Y&15,f>g){l&&Wn(0);break}if(Y||Wn(2),$e<256)t[d++]=$e;else if($e==256){Se=f,p=null;break}else{var de=$e-254;if($e>264){var E=$e-257,lt=Tf[E];de=Gn(i,f,(1<<lt)-1)+Rf[E],f+=lt}var ue=v[il(i,f)&fe],me=ue>>4;ue||Wn(3),f+=ue&15;var J=Qv[me];if(me>3){var lt=Ef[me];J+=il(i,f)&(1<<lt)-1,f+=lt}if(f>g){l&&Wn(0);break}o&&c(d+131072);var Me=d+de;if(d<J){var nt=r-J,ht=Math.min(J,Me);for(nt+d<0&&Wn(3);d<ht;++d)t[d]=n[nt+d]}for(;d<Me;++d)t[d]=t[d-J]}}e.l=p,e.p=Se,e.b=d,e.f=h,p&&(h=1,e.m=w,e.d=v,e.n=_)}while(!h);return d!=t.length&&a?nM(t,0,d):t.subarray(0,d)},rM=new On(0),aM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Wn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Wn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function vr(i,e){return sM(i.subarray(aM(i),-4),{i:2},e,e)}var oM=typeof TextDecoder<"u"&&new TextDecoder,lM=0;try{oM.decode(rM,{stream:!0}),lM=1}catch{}class cM extends Vp{constructor(e){super(e),this.type=hn,this.outputFormat=jt,this.part=0}parse(e){const m=Math.pow(2.7182818,2.2);let T=null;function E(u,x){let y=0;for(let D=0;D<65536;++D)(D==0||u[D>>3]&1<<(D&7))&&(x[y++]=D);const R=y-1;for(;y<65536;)x[y++]=0;return R}function N(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}const z={l:0,c:0,lc:0};function V(u,x,y,R,D){for(;y<u;)x=x<<8|Pe(R,D),y+=8;y-=u,z.l=x>>y&(1<<u)-1,z.c=x,z.lc=y}const k=new Array(59);function Y(u){for(let y=0;y<=58;++y)k[y]=0;for(let y=0;y<65537;++y)k[u[y]]+=1;let x=0;for(let y=58;y>0;--y){const R=x+k[y]>>1;k[y]=x,x=R}for(let y=0;y<65537;++y){const R=u[y];R>0&&(u[y]=R|k[R]++<<6)}}function H(u,x,y,R,D,W){const U=x;let q=0,K=0;for(;R<=D;R++){if(U.value-x.value>y)return!1;V(6,q,K,u,U);const Z=z.l;if(q=z.c,K=z.lc,W[R]=Z,Z==63){if(U.value-x.value>y)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");V(8,q,K,u,U);let ee=z.l+6;if(q=z.c,K=z.lc,R+ee>D+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;ee--;)W[R++]=0;R--}else if(Z>=59){let ee=Z-59+2;if(R+ee>D+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;ee--;)W[R++]=0;R--}}Y(W)}function Q(u){return u&63}function J(u){return u>>6}function se(u,x,y,R){for(;x<=y;x++){const D=J(u[x]),W=Q(u[x]);if(D>>W)throw new Error("THREE.EXRLoader: Invalid table entry");if(W>14){const U=R[D>>W-14];if(U.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(U.lit++,U.p){const q=U.p;U.p=new Array(U.lit);for(let K=0;K<U.lit-1;++K)U.p[K]=q[K]}else U.p=new Array(1);U.p[U.lit-1]=x}else if(W){let U=0;for(let q=1<<14-W;q>0;q--){const K=R[(D<<14-W)+U];if(K.len||K.p)throw new Error("THREE.EXRLoader: Invalid table entry");K.len=W,K.lit=x,U++}}}return!0}const fe={c:0,lc:0};function Se(u,x,y,R){u=u<<8|Pe(y,R),x+=8,fe.c=u,fe.lc=x}const $e={c:0,lc:0};function de(u,x,y,R,D,W,U,q,K){if(u==x){R<8&&(Se(y,R,D,W),y=fe.c,R=fe.lc),R-=8;let Z=y>>R;if(Z=new Uint8Array([Z])[0],q.value+Z>K)return!1;const ee=U[q.value-1];for(;Z-- >0;)U[q.value++]=ee}else if(q.value<K)U[q.value++]=u;else return!1;$e.c=y,$e.lc=R}function lt(u){return u&65535}function ue(u){const x=lt(u);return x>32767?x-65536:x}const me={a:0,b:0};function Me(u,x){const y=ue(u),D=ue(x),W=y+(D&1)+(D>>1),U=W,q=W-D;me.a=U,me.b=q}function nt(u,x){const y=lt(u),R=lt(x),D=y-(R>>1)&65535,W=R+D-32768&65535;me.a=W,me.b=D}function ht(u,x,y,R,D,W,U){const q=U<16384,K=y>D?D:y;let Z=1,ee,ce;for(;Z<=K;)Z<<=1;for(Z>>=1,ee=Z,Z>>=1;Z>=1;){ce=0;const j=ce+W*(D-ee),ge=W*Z,Ee=W*ee,_e=R*Z,ve=R*ee;let Oe,xe,tt,We;for(;ce<=j;ce+=Ee){let Be=ce;const Ne=ce+R*(y-ee);for(;Be<=Ne;Be+=ve){const Xe=Be+_e,Tt=Be+ge,et=Tt+_e;q?(Me(u[Be+x],u[Tt+x]),Oe=me.a,tt=me.b,Me(u[Xe+x],u[et+x]),xe=me.a,We=me.b,Me(Oe,xe),u[Be+x]=me.a,u[Xe+x]=me.b,Me(tt,We),u[Tt+x]=me.a,u[et+x]=me.b):(nt(u[Be+x],u[Tt+x]),Oe=me.a,tt=me.b,nt(u[Xe+x],u[et+x]),xe=me.a,We=me.b,nt(Oe,xe),u[Be+x]=me.a,u[Xe+x]=me.b,nt(tt,We),u[Tt+x]=me.a,u[et+x]=me.b)}if(y&Z){const Xe=Be+ge;q?Me(u[Be+x],u[Xe+x]):nt(u[Be+x],u[Xe+x]),Oe=me.a,u[Xe+x]=me.b,u[Be+x]=Oe}}if(D&Z){let Be=ce;const Ne=ce+R*(y-ee);for(;Be<=Ne;Be+=ve){const Xe=Be+_e;q?Me(u[Be+x],u[Xe+x]):nt(u[Be+x],u[Xe+x]),Oe=me.a,u[Xe+x]=me.b,u[Be+x]=Oe}}ee=Z,Z>>=1}return ce}function st(u,x,y,R,D,W,U,q,K){let Z=0,ee=0;const ce=U,j=Math.trunc(R.value+(D+7)/8);for(;R.value<j;)for(Se(Z,ee,y,R),Z=fe.c,ee=fe.lc;ee>=14;){const Ee=Z>>ee-14&16383,_e=x[Ee];if(_e.len)ee-=_e.len,de(_e.lit,W,Z,ee,y,R,q,K,ce),Z=$e.c,ee=$e.lc;else{if(!_e.p)throw new Error("THREE.EXRLoader: hufDecode issues");let ve;for(ve=0;ve<_e.lit;ve++){const Oe=Q(u[_e.p[ve]]);for(;ee<Oe&&R.value<j;)Se(Z,ee,y,R),Z=fe.c,ee=fe.lc;if(ee>=Oe&&J(u[_e.p[ve]])==(Z>>ee-Oe&(1<<Oe)-1)){ee-=Oe,de(_e.p[ve],W,Z,ee,y,R,q,K,ce),Z=$e.c,ee=$e.lc;break}}if(ve==_e.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const ge=8-D&7;for(Z>>=ge,ee-=ge;ee>0;){const Ee=x[Z<<14-ee&16383];if(Ee.len)ee-=Ee.len,de(Ee.lit,W,Z,ee,y,R,q,K,ce),Z=$e.c,ee=$e.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function ne(u,x,y,R,D,W){const U={value:0},q=y.value,K=Te(x,y),Z=Te(x,y);y.value+=4;const ee=Te(x,y);if(y.value+=4,K<0||K>=65537||Z<0||Z>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const ce=new Array(65537),j=new Array(16384);N(j);const ge=R-(y.value-q);if(H(u,y,ge,K,Z,ce),ee>8*(R-(y.value-q)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");se(ce,K,Z,j),st(ce,j,u,y,ee,Z,W,D,U)}function oe(u,x,y){for(let R=0;R<y;++R)x[R]=u[x[R]]}function Re(u){for(let x=1;x<u.length;x++){const y=u[x-1]+u[x]-128;u[x]=y}}function Ve(u,x){let y=0,R=Math.floor((u.length+1)/2),D=0;const W=u.length-1;for(;!(D>W||(x[D++]=u[y++],D>W));)x[D++]=u[R++]}function Ge(u){let x=u.byteLength;const y=new Array;let R=0;const D=new DataView(u);for(;x>0;){const W=D.getInt8(R++);if(W<0){const U=-W;x-=U+1;for(let q=0;q<U;q++)y.push(D.getUint8(R++))}else{const U=W;x-=2;const q=D.getUint8(R++);for(let K=0;K<U+1;K++)y.push(q)}}return y}function De(u,x,y,R,D,W){let U=new DataView(W.buffer);const q=y[u.idx[0]].width,K=y[u.idx[0]].height,Z=3,ee=Math.floor(q/8),ce=Math.ceil(q/8),j=Math.ceil(K/8),ge=q-(ce-1)*8,Ee=K-(j-1)*8,_e={value:0},ve=new Array(Z),Oe=new Array(Z),xe=new Array(Z),tt=new Array(Z),We=new Array(Z);for(let Ne=0;Ne<Z;++Ne)We[Ne]=x[u.idx[Ne]],ve[Ne]=Ne<1?0:ve[Ne-1]+ce*j,Oe[Ne]=new Float32Array(64),xe[Ne]=new Uint16Array(64),tt[Ne]=new Uint16Array(ce*64);for(let Ne=0;Ne<j;++Ne){let Xe=8;Ne==j-1&&(Xe=Ee);let Tt=8;for(let Ze=0;Ze<ce;++Ze){Ze==ce-1&&(Tt=ge);for(let dt=0;dt<Z;++dt)xe[dt].fill(0),xe[dt][0]=D[ve[dt]++],Ae(_e,R,xe[dt]),at(xe[dt],Oe[dt]),Ke(Oe[dt]);Qe(Oe);for(let dt=0;dt<Z;++dt)B(Oe[dt],tt[dt],Ze*64)}let et=0;for(let Ze=0;Ze<Z;++Ze){const dt=y[u.idx[Ze]].type;for(let ft=8*Ne;ft<8*Ne+Xe;++ft){et=We[Ze][ft];for(let Ht=0;Ht<ee;++Ht){const Et=Ht*64+(ft&7)*8;U.setUint16(et+0*dt,tt[Ze][Et+0],!0),U.setUint16(et+2*dt,tt[Ze][Et+1],!0),U.setUint16(et+4*dt,tt[Ze][Et+2],!0),U.setUint16(et+6*dt,tt[Ze][Et+3],!0),U.setUint16(et+8*dt,tt[Ze][Et+4],!0),U.setUint16(et+10*dt,tt[Ze][Et+5],!0),U.setUint16(et+12*dt,tt[Ze][Et+6],!0),U.setUint16(et+14*dt,tt[Ze][Et+7],!0),et+=16*dt}}if(ee!=ce)for(let ft=8*Ne;ft<8*Ne+Xe;++ft){const Ht=We[Ze][ft]+8*ee*2*dt,Et=ee*64+(ft&7)*8;for(let An=0;An<Tt;++An)U.setUint16(Ht+An*2*dt,tt[Ze][Et+An],!0)}}}const Be=new Uint16Array(q);U=new DataView(W.buffer);for(let Ne=0;Ne<Z;++Ne){y[u.idx[Ne]].decoded=!0;const Xe=y[u.idx[Ne]].type;if(y[Ne].type==2)for(let Tt=0;Tt<K;++Tt){const et=We[Ne][Tt];for(let Ze=0;Ze<q;++Ze)Be[Ze]=U.getUint16(et+Ze*2*Xe,!0);for(let Ze=0;Ze<q;++Ze)U.setFloat32(et+Ze*2*Xe,X(Be[Ze]),!0)}}}function be(u,x,y,R,D,W){const U=new DataView(W.buffer),q=y[u],K=q.width,Z=q.height,ee=Math.ceil(K/8),ce=Math.ceil(Z/8),j=Math.floor(K/8),ge=K-(ee-1)*8,Ee=Z-(ce-1)*8,_e={value:0};let ve=0;const Oe=new Float32Array(64),xe=new Uint16Array(64),tt=new Uint16Array(ee*64);for(let We=0;We<ce;++We){let Be=8;We==ce-1&&(Be=Ee);for(let Ne=0;Ne<ee;++Ne)xe.fill(0),xe[0]=D[ve++],Ae(_e,R,xe),at(xe,Oe),Ke(Oe),B(Oe,tt,Ne*64);for(let Ne=8*We;Ne<8*We+Be;++Ne){let Xe=x[u][Ne];for(let Tt=0;Tt<j;++Tt){const et=Tt*64+(Ne&7)*8;for(let Ze=0;Ze<8;++Ze)U.setUint16(Xe+Ze*2*q.type,tt[et+Ze],!0);Xe+=16*q.type}if(ee!=j){const Tt=j*64+(Ne&7)*8;for(let et=0;et<ge;++et)U.setUint16(Xe+et*2*q.type,tt[Tt+et],!0)}}}q.decoded=!0}function Ae(u,x,y){let R,D=1;for(;D<64;)R=x[u.value],R==65280?D=64:R>>8==255?D+=R&255:(y[D]=R,D++),u.value++}function at(u,x){x[0]=X(u[0]),x[1]=X(u[1]),x[2]=X(u[5]),x[3]=X(u[6]),x[4]=X(u[14]),x[5]=X(u[15]),x[6]=X(u[27]),x[7]=X(u[28]),x[8]=X(u[2]),x[9]=X(u[4]),x[10]=X(u[7]),x[11]=X(u[13]),x[12]=X(u[16]),x[13]=X(u[26]),x[14]=X(u[29]),x[15]=X(u[42]),x[16]=X(u[3]),x[17]=X(u[8]),x[18]=X(u[12]),x[19]=X(u[17]),x[20]=X(u[25]),x[21]=X(u[30]),x[22]=X(u[41]),x[23]=X(u[43]),x[24]=X(u[9]),x[25]=X(u[11]),x[26]=X(u[18]),x[27]=X(u[24]),x[28]=X(u[31]),x[29]=X(u[40]),x[30]=X(u[44]),x[31]=X(u[53]),x[32]=X(u[10]),x[33]=X(u[19]),x[34]=X(u[23]),x[35]=X(u[32]),x[36]=X(u[39]),x[37]=X(u[45]),x[38]=X(u[52]),x[39]=X(u[54]),x[40]=X(u[20]),x[41]=X(u[22]),x[42]=X(u[33]),x[43]=X(u[38]),x[44]=X(u[46]),x[45]=X(u[51]),x[46]=X(u[55]),x[47]=X(u[60]),x[48]=X(u[21]),x[49]=X(u[34]),x[50]=X(u[37]),x[51]=X(u[47]),x[52]=X(u[50]),x[53]=X(u[56]),x[54]=X(u[59]),x[55]=X(u[61]),x[56]=X(u[35]),x[57]=X(u[36]),x[58]=X(u[48]),x[59]=X(u[49]),x[60]=X(u[57]),x[61]=X(u[58]),x[62]=X(u[62]),x[63]=X(u[63])}function Ke(u){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),W=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),K=new Array(4),Z=new Array(4),ee=new Array(4),ce=new Array(4);for(let j=0;j<8;++j){const ge=j*8;K[0]=R*u[ge+2],K[1]=U*u[ge+2],K[2]=R*u[ge+6],K[3]=U*u[ge+6],Z[0]=y*u[ge+1]+D*u[ge+3]+W*u[ge+5]+q*u[ge+7],Z[1]=D*u[ge+1]-q*u[ge+3]-y*u[ge+5]-W*u[ge+7],Z[2]=W*u[ge+1]-y*u[ge+3]+q*u[ge+5]+D*u[ge+7],Z[3]=q*u[ge+1]-W*u[ge+3]+D*u[ge+5]-y*u[ge+7],ee[0]=x*(u[ge+0]+u[ge+4]),ee[3]=x*(u[ge+0]-u[ge+4]),ee[1]=K[0]+K[3],ee[2]=K[1]-K[2],ce[0]=ee[0]+ee[1],ce[1]=ee[3]+ee[2],ce[2]=ee[3]-ee[2],ce[3]=ee[0]-ee[1],u[ge+0]=ce[0]+Z[0],u[ge+1]=ce[1]+Z[1],u[ge+2]=ce[2]+Z[2],u[ge+3]=ce[3]+Z[3],u[ge+4]=ce[3]-Z[3],u[ge+5]=ce[2]-Z[2],u[ge+6]=ce[1]-Z[1],u[ge+7]=ce[0]-Z[0]}for(let j=0;j<8;++j)K[0]=R*u[16+j],K[1]=U*u[16+j],K[2]=R*u[48+j],K[3]=U*u[48+j],Z[0]=y*u[8+j]+D*u[24+j]+W*u[40+j]+q*u[56+j],Z[1]=D*u[8+j]-q*u[24+j]-y*u[40+j]-W*u[56+j],Z[2]=W*u[8+j]-y*u[24+j]+q*u[40+j]+D*u[56+j],Z[3]=q*u[8+j]-W*u[24+j]+D*u[40+j]-y*u[56+j],ee[0]=x*(u[j]+u[32+j]),ee[3]=x*(u[j]-u[32+j]),ee[1]=K[0]+K[3],ee[2]=K[1]-K[2],ce[0]=ee[0]+ee[1],ce[1]=ee[3]+ee[2],ce[2]=ee[3]-ee[2],ce[3]=ee[0]-ee[1],u[0+j]=ce[0]+Z[0],u[8+j]=ce[1]+Z[1],u[16+j]=ce[2]+Z[2],u[24+j]=ce[3]+Z[3],u[32+j]=ce[3]-Z[3],u[40+j]=ce[2]-Z[2],u[48+j]=ce[1]-Z[1],u[56+j]=ce[0]-Z[0]}function Qe(u){for(let x=0;x<64;++x){const y=u[0][x],R=u[1][x],D=u[2][x];u[0][x]=y+1.5747*D,u[1][x]=y-.1873*R-.4682*D,u[2][x]=y+1.8556*R}}function B(u,x,y){for(let R=0;R<64;++R)x[y+R]=Ki.toHalfFloat(ut(u[R]))}function ut(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(m,Math.abs(u)-1)}function rt(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function F(u){const x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(Ge(x)),R=new Uint8Array(y.length);return Re(y),Ve(y,R),new DataView(R.buffer)}function S(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=vr(x),R=new Uint8Array(y.length);return Re(y),Ve(y,R),new DataView(R.buffer)}function $(u){const x=u.viewer,y={value:u.offset.value},R=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),D=new Uint8Array(8192);let W=0;const U=new Array(u.inputChannels.length);for(let Ee=0,_e=u.inputChannels.length;Ee<_e;Ee++)U[Ee]={},U[Ee].start=W,U[Ee].end=U[Ee].start,U[Ee].nx=u.columns,U[Ee].ny=u.lines,U[Ee].size=u.type,W+=U[Ee].nx*U[Ee].ny*U[Ee].size;const q=ie(x,y),K=ie(x,y);if(K>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=K)for(let Ee=0;Ee<K-q+1;Ee++)D[Ee+q]=qe(x,y);const Z=new Uint16Array(65536),ee=E(D,Z),ce=Te(x,y);ne(u.array,x,y,ce,R,W);for(let Ee=0;Ee<u.inputChannels.length;++Ee){const _e=U[Ee];for(let ve=0;ve<U[Ee].size;++ve)ht(R,_e.start+ve,_e.nx,_e.size,_e.ny,_e.nx*_e.size,ee)}oe(Z,R,W);let j=0;const ge=new Uint8Array(R.buffer.byteLength);for(let Ee=0;Ee<u.lines;Ee++)for(let _e=0;_e<u.inputChannels.length;_e++){const ve=U[_e],Oe=ve.nx*ve.size,xe=new Uint8Array(R.buffer,ve.end*2,Oe*2);ge.set(xe,j),j+=Oe*2,ve.end+=Oe}return new DataView(ge.buffer)}function te(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=vr(x),R=u.inputChannels.length*u.lines*u.columns*u.totalBytes,D=new ArrayBuffer(R),W=new DataView(D);let U=0,q=0;const K=new Array(4);for(let Z=0;Z<u.lines;Z++)for(let ee=0;ee<u.inputChannels.length;ee++){let ce=0;switch(u.inputChannels[ee].pixelType){case 1:K[0]=U,K[1]=K[0]+u.columns,U=K[1]+u.columns;for(let ge=0;ge<u.columns;++ge){const Ee=y[K[0]++]<<8|y[K[1]++];ce+=Ee,W.setUint16(q,ce,!0),q+=2}break;case 2:K[0]=U,K[1]=K[0]+u.columns,K[2]=K[1]+u.columns,U=K[2]+u.columns;for(let ge=0;ge<u.columns;++ge){const Ee=y[K[0]++]<<24|y[K[1]++]<<16|y[K[2]++]<<8;ce+=Ee,W.setUint32(q,ce,!0),q+=4}break}}return W}function ae(u){const x=u.array;let y=u.offset.value;const R=u.columns,D=u.lines,W=u.inputChannels,U=u.totalBytes,q=on.compression==="B44A_COMPRESSION",K=new Uint8Array(D*R*U),Z=new Uint16Array(16);let ee=0;for(let ce=0;ce<W.length;ce++){const j=W[ce],ge=j.pixelType*2,Ee=Math.ceil(R/j.xSampling),_e=Math.ceil(D/j.ySampling),ve=j.xSampling===1&&j.ySampling===1;if(j.pixelType!==1){for(let tt=0;tt<_e;tt++)if(ve){const We=tt*R*U+ee*R;for(let Be=0;Be<Ee*ge;Be++)K[We+Be]=x[y++]}else y+=Ee*ge;ee+=ge;continue}const Oe=Math.ceil(Ee/4),xe=Math.ceil(_e/4);for(let tt=0;tt<xe;tt++)for(let We=0;We<Oe;We++){if(q&&x[y+2]>=52){const Be=x[y]<<8|x[y+1],Ne=Be&32768?Be&32767:~Be&65535;Z.fill(Ne),y+=3}else{const Be=x[y]<<8|x[y+1],Ne=x[y+2]>>2,Xe=32<<Ne,Tt=Be+((x[y+2]<<4|x[y+3]>>4)&63)*(1<<Ne)-Xe&65535,et=Tt+((x[y+3]<<2|x[y+4]>>6)&63)*(1<<Ne)-Xe&65535,Ze=et+(x[y+4]&63)*(1<<Ne)-Xe&65535,dt=Be+(x[y+5]>>2&63)*(1<<Ne)-Xe&65535,ft=Tt+((x[y+5]<<4|x[y+6]>>4)&63)*(1<<Ne)-Xe&65535,Ht=et+((x[y+6]<<2|x[y+7]>>6)&63)*(1<<Ne)-Xe&65535,Et=Ze+(x[y+7]&63)*(1<<Ne)-Xe&65535,An=dt+(x[y+8]>>2&63)*(1<<Ne)-Xe&65535,fs=ft+((x[y+8]<<4|x[y+9]>>4)&63)*(1<<Ne)-Xe&65535,ir=Ht+((x[y+9]<<2|x[y+10]>>6)&63)*(1<<Ne)-Xe&65535,$n=Et+(x[y+10]&63)*(1<<Ne)-Xe&65535,Xi=An+(x[y+11]>>2&63)*(1<<Ne)-Xe&65535,na=fs+((x[y+11]<<4|x[y+12]>>4)&63)*(1<<Ne)-Xe&65535,ia=ir+((x[y+12]<<2|x[y+13]>>6)&63)*(1<<Ne)-Xe&65535,sa=$n+(x[y+13]&63)*(1<<Ne)-Xe&65535,sr=[Be,dt,An,Xi,Tt,ft,fs,na,et,Ht,ir,ia,Ze,Et,$n,sa];for(let ds=0;ds<16;ds++)Z[ds]=sr[ds]&32768?sr[ds]&32767:~sr[ds]&65535;y+=14}if(j.pLinear){if(T===null){T=new Uint16Array(65536);for(let Be=0;Be<65536;Be++)if((Be&31744)===31744||Be>32768)T[Be]=0;else{const Ne=X(Be);T[Be]=Ne<=0?0:Ki.toHalfFloat(8*Math.log(Ne))}}for(let Be=0;Be<16;Be++)Z[Be]=T[Z[Be]]}for(let Be=0;Be<4;Be++){const Ne=tt*4+Be;if(!(Ne>=_e))for(let Xe=0;Xe<4;Xe++){const Tt=We*4+Xe;if(Tt>=Ee)continue;const et=Z[Be*4+Xe];for(let Ze=0;Ze<j.ySampling;Ze++){const dt=Ne*j.ySampling+Ze;if(!(dt>=D))for(let ft=0;ft<j.xSampling;ft++){const Ht=Tt*j.xSampling+ft;if(Ht>=R)continue;const Et=dt*R*U+ee*R+Ht*2;K[Et]=et&255,K[Et+1]=et>>8&255}}}}}ee+=2}return new DataView(K.buffer)}function we(u){const x=u.viewer,y={value:u.offset.value},R=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),D={version:ze(x,y),unknownUncompressedSize:ze(x,y),unknownCompressedSize:ze(x,y),acCompressedSize:ze(x,y),dcCompressedSize:ze(x,y),rleCompressedSize:ze(x,y),rleUncompressedSize:ze(x,y),rleRawSize:ze(x,y),totalAcUncompressedCount:ze(x,y),totalDcUncompressedCount:ze(x,y),acCompression:ze(x,y)};if(D.version<2)throw new Error("THREE.EXRLoader: "+on.compression+" version "+D.version+" is unsupported");const W=new Array;let U=ie(x,y)-2;for(;U>0;){const _e=Ce(x.buffer,y),ve=qe(x,y),Oe=ve>>2&3,xe=(ve>>4)-1,tt=new Int8Array([xe])[0],We=qe(x,y);W.push({name:_e,index:tt,type:We,compression:Oe}),U-=_e.length+3}const q=on.channels,K=new Array(u.inputChannels.length);for(let _e=0;_e<u.inputChannels.length;++_e){const ve=K[_e]={},Oe=q[_e];ve.name=Oe.name,ve.compression=0,ve.decoded=!1,ve.type=Oe.pixelType,ve.pLinear=Oe.pLinear,ve.width=u.columns,ve.height=u.lines}const Z={idx:new Array(3)};for(let _e=0;_e<u.inputChannels.length;++_e){const ve=K[_e],Oe=ve.name.lastIndexOf("."),xe=Oe>=0?ve.name.substring(Oe+1):ve.name;for(let tt=0;tt<W.length;++tt){const We=W[tt];xe===We.name&&ve.type===We.type&&(ve.compression=We.compression,We.index>=0&&(Z.idx[We.index]=_e),ve.offset=_e)}}let ee,ce,j;if(D.acCompressedSize>0)switch(D.acCompression){case 0:ee=new Uint16Array(D.totalAcUncompressedCount),ne(u.array,x,y,D.acCompressedSize,ee,D.totalAcUncompressedCount);break;case 1:const _e=u.array.slice(y.value,y.value+D.totalAcUncompressedCount),ve=vr(_e);ee=new Uint16Array(ve.buffer),y.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const _e={array:u.array,offset:y,size:D.dcCompressedSize};ce=new Uint16Array(S(_e).buffer),y.value+=D.dcCompressedSize}if(D.rleRawSize>0){const _e=u.array.slice(y.value,y.value+D.rleCompressedSize),ve=vr(_e);j=Ge(ve.buffer),y.value+=D.rleCompressedSize}let ge=0;const Ee=new Array(K.length);for(let _e=0;_e<Ee.length;++_e)Ee[_e]=new Array;for(let _e=0;_e<u.lines;++_e)for(let ve=0;ve<K.length;++ve)Ee[ve].push(ge),ge+=K[ve].width*u.type*2;Z.idx[0]!==void 0&&K[Z.idx[0]]&&De(Z,Ee,K,ee,ce,R);for(let _e=0;_e<K.length;++_e){const ve=K[_e];if(!ve.decoded)switch(ve.compression){case 2:let Oe=0,xe=0;for(let tt=0;tt<u.lines;++tt){let We=Ee[_e][Oe];for(let Be=0;Be<ve.width;++Be){for(let Ne=0;Ne<2*ve.type;++Ne)R[We++]=j[xe+Ne*ve.width*ve.height];xe++}Oe++}break;case 1:be(_e,Ee,K,ee,ce,R);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(R.buffer)}function Ce(u,x){const y=new Uint8Array(u);let R=0;for(;y[x.value+R]!=0;)R+=1;const D=new TextDecoder().decode(y.slice(x.value,x.value+R));return x.value=x.value+R+1,D}function le(u,x,y){const R=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+y));return x.value=x.value+y,R}function he(u,x){const y=Ue(u,x),R=Te(u,x);return[y,R]}function Le(u,x){const y=Te(u,x),R=Te(u,x);return[y,R]}function Ue(u,x){const y=u.getInt32(x.value,!0);return x.value=x.value+4,y}function Te(u,x){const y=u.getUint32(x.value,!0);return x.value=x.value+4,y}function Pe(u,x){const y=u[x.value];return x.value=x.value+1,y}function qe(u,x){const y=u.getUint8(x.value);return x.value=x.value+1,y}const ze=function(u,x){const y=Number(u.getBigInt64(x.value,!0));return x.value+=8,y};function je(u,x){const y=u.getFloat32(x.value,!0);return x.value+=4,y}function O(u,x){return Ki.toHalfFloat(je(u,x))}function X(u){const x=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function ie(u,x){const y=u.getUint16(x.value,!0);return x.value+=2,y}function ye(u,x){return X(ie(u,x))}function Ie(u,x,y,R){const D=y.value,W=[];for(;y.value<D+R-1;){const U=Ce(x,y),q=Ue(u,y),K=qe(u,y);y.value+=3;const Z=Ue(u,y),ee=Ue(u,y);W.push({name:U,pixelType:q,pLinear:K,xSampling:Z,ySampling:ee})}return y.value+=1,W}function pe(u,x){const y=je(u,x),R=je(u,x),D=je(u,x),W=je(u,x),U=je(u,x),q=je(u,x),K=je(u,x),Z=je(u,x);return{redX:y,redY:R,greenX:D,greenY:W,blueX:U,blueY:q,whiteX:K,whiteY:Z}}function Ye(u,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=qe(u,x);return y[R]}function ke(u,x){const y=Ue(u,x),R=Ue(u,x),D=Ue(u,x),W=Ue(u,x);return{xMin:y,yMin:R,xMax:D,yMax:W}}function wt(u,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=qe(u,x);return y[R]}function At(u,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=qe(u,x);return y[R]}function $t(u,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],D=Te(u,x),W=Te(u,x),U=qe(u,x);return{xSize:D,ySize:W,levelMode:y[U&15],roundingMode:R[U>>4]}}function Pt(u,x){const y=je(u,x),R=je(u,x);return[y,R]}function hi(u,x){const y=je(u,x),R=je(u,x),D=je(u,x);return[y,R,D]}function Ri(u,x,y,R,D){if(R==="string"||R==="stringvector"||R==="iccProfile")return le(x,y,D);if(R==="chlist")return Ie(u,x,y,D);if(R==="chromaticities")return pe(u,y);if(R==="compression")return Ye(u,y);if(R==="box2i")return ke(u,y);if(R==="envmap")return At(u,y);if(R==="tiledesc")return $t(u,y);if(R==="lineOrder")return wt(u,y);if(R==="float")return je(u,y);if(R==="v2f")return Pt(u,y);if(R==="v3f")return hi(u,y);if(R==="int")return Ue(u,y);if(R==="rational")return he(u,y);if(R==="timecode")return Le(u,y);if(R==="preview"||R==="deepImageState"||R==="idmanifest")return y.value+=D,"skipped";y.value+=D}function Ln(u,x){const y=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function tr(u,x,y){let R=0;switch(u.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Ln(Math.max(x,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Zr(u,x,y,R){const D=new Array(u);for(let W=0;W<u;W++){const U=1<<W;let q=x/U|0;R=="ROUND_UP"&&q*U<x&&(q+=1);const K=Math.max(q,1);D[W]=(K+y-1)/y|0}return D}function $r(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.tileCount;R++){const D=Ue(u.viewer,x),W=Ue(u.viewer,x);x.value+=8,u.size=Te(u.viewer,x);const U=D*u.blockWidth,q=W*u.blockHeight;u.columns=U+u.blockWidth>u.width?u.width-U:u.blockWidth,u.lines=q+u.blockHeight>u.height?u.height-q:u.blockHeight;const K=u.columns*u.totalBytes,ee=u.size<u.lines*K?u.uncompress(u):rt(u);x.value+=u.size;for(let ce=0;ce<u.lines;ce++){const j=ce*u.columns*u.totalBytes;for(let ge=0;ge<u.inputChannels.length;ge++){const Ee=on.channels[ge].name,_e=u.channelByteOffsets[Ee]*u.columns,ve=u.decodeChannels[Ee];if(ve===void 0)continue;y.value=j+_e;const Oe=(u.height-(1+q+ce))*u.outLineWidth;for(let xe=0;xe<u.columns;xe++){const tt=Oe+(xe+U)*u.outputChannels+ve;u.byteArray[tt]=u.getter(ee,y)}}}}}function Jr(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.height/u.blockHeight;R++){const D=Ue(u.viewer,x)-on.dataWindow.yMin;u.size=Te(u.viewer,x),u.lines=D+u.blockHeight>u.height?u.height-D:u.blockHeight;const W=u.columns*u.totalBytes,q=u.size<u.lines*W?u.uncompress(u):rt(u);x.value+=u.size;for(let K=0;K<u.lines;K++){const Z=D+K,ee=K*W,ce=(u.height-1-Z)*u.outLineWidth;for(let j=0;j<u.inputChannels.length;j++){const ge=on.channels[j].name,Ee=u.channelByteOffsets[ge]*u.columns,_e=u.decodeChannels[ge];if(_e!==void 0){y.value=ee+Ee;for(let ve=0;ve<u.columns;ve++){const Oe=ce+ve*u.outputChannels+_e;u.byteArray[Oe]=u.getter(q,y)}}}}}}function fi(){const u=this,x=u.chunkOffsets,y={value:0};for(let R=0;R<x.length;R++){const D={value:x[R]};D.value+=4;const W=Ue(u.viewer,D)-on.dataWindow.yMin;u.size=Te(u.viewer,D),u.lines=W+u.blockHeight>u.height?u.height-W:u.blockHeight;const U=u.columns*u.totalBytes,q=u.size<u.lines*U,K=u.offset;u.offset=D;const Z=q?u.uncompress(u):rt(u);u.offset=K;for(let ee=0;ee<u.lines;ee++){const ce=W+ee,j=ee*U,ge=(u.height-1-ce)*u.outLineWidth;for(let Ee=0;Ee<u.inputChannels.length;Ee++){const _e=on.channels[Ee].name,ve=u.channelByteOffsets[_e]*u.columns,Oe=u.decodeChannels[_e];if(Oe!==void 0){y.value=j+ve;for(let xe=0;xe<u.columns;xe++){const tt=ge+xe*u.outputChannels+Oe;u.byteArray[tt]=u.getter(Z,y)}}}}}}function cs(u,x,y,R){if(y===0)return null;const D=u.slice(x,x+y);switch(R){case"NO_COMPRESSION":return new DataView(D.buffer,D.byteOffset,D.byteLength);case"RLE_COMPRESSION":{const W=new Uint8Array(Ge(D.buffer.slice(D.byteOffset,D.byteOffset+D.byteLength))),U=new Uint8Array(W.length);return Re(W),Ve(W,U),new DataView(U.buffer)}case"ZIPS_COMPRESSION":{const W=vr(D),U=new Uint8Array(W.length);return Re(W),Ve(W,U),new DataView(U.buffer)}default:throw new Error("THREE.EXRLoader: "+R+" is unsupported for deep data")}}function Qr(){const u=this,x=u.chunkOffsets,y=u.width,R=u.height,D=u.deepChannels,W=on.compression,U=u.multiPart,q=u.decodeChannels,K=u.outputChannels,Z=u.byteArray instanceof Uint16Array;let ee=-1;for(let ce=0;ce<D.length;ce++)if(D[ce].name==="A"){ee=ce;break}for(let ce=0;ce<x.length;ce++){const j={value:x[ce]};U&&(j.value+=4);const ge=Ue(u.viewer,j)-on.dataWindow.yMin,Ee=ze(u.viewer,j),_e=ze(u.viewer,j);ze(u.viewer,j);const ve=cs(u.array,j.value,Ee,W);if(j.value+=Ee,ve===null)continue;const Oe=new Uint32Array(y);for(let Xe=0;Xe<y;Xe++)Oe[Xe]=ve.getUint32(Xe*4,!0);const xe=Oe[y-1];if(xe===0){j.value+=_e;continue}const tt=cs(u.array,j.value,_e,W),We=[];let Be=0;for(let Xe=0;Xe<D.length;Xe++)We.push(Be),Be+=xe*D[Xe].bytesPerSample;const Ne=(R-1-ge)*u.outLineWidth;for(let Xe=0;Xe<y;Xe++){const Tt=Xe===0?0:Oe[Xe-1],Ze=Oe[Xe]-Tt;if(Ze===0)continue;const dt=new Float32Array(K);let ft=0;for(let Et=0;Et<Ze;Et++){const An=Tt+Et,fs=1-ft;if(fs<=0)break;let ir=1;if(ee>=0){const $n=D[ee].bytesPerSample,Xi=We[ee]+An*$n;ir=$n===2?X(tt.getUint16(Xi,!0)):tt.getFloat32(Xi,!0)}for(let $n=0;$n<D.length;$n++){const Xi=D[$n],na=q[Xi.name];if(na===void 0)continue;const ia=Xi.bytesPerSample,sa=We[$n]+An*ia,sr=ia===2?X(tt.getUint16(sa,!0)):tt.getFloat32(sa,!0);dt[na]+=sr*fs}ft+=ir*fs}q.A!==void 0&&(dt[q.A]=ft);const Ht=Ne+Xe*K;for(let Et=0;Et<K;Et++)u.byteArray[Ht+Et]=Z?Ki.toHalfFloat(dt[Et]):dt[Et]}}}function nr(u,x,y){const R={};let D=!1;for(;;){const W=Ce(x,y);if(W==="")break;D=!0;const U=Ce(x,y),q=Te(u,y),K=Ri(u,x,y,U,q);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):R[W]=K}return D?R:null}function us(u,x,y){if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const R=u.getUint8(4),D=u.getUint8(5),W={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)};y.value=8;const U=[];if(W.multiPart){for(;;){const q=nr(u,x,y);if(q===null)break;q.version=R,q.spec=W,U.push(q)}if(U.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const q=nr(u,x,y);q.version=R,q.spec=W,U.push(q)}return U}function jr(u,x,y,R,D,W){const U={size:0,viewer:x,array:y,offset:R,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Zt};switch(u.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=rt;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=F;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=S;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=S;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=$;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=te;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":U.blockHeight=32,U.uncompress=ae;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=we;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=we;break;default:throw new Error("THREE.EXRLoader: "+u.compression+" is unsupported")}const q={};for(const j of u.channels)switch(j.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":q[j.name]=!0,U.type=j.pixelType}let K=!1,Z=!1;if(q.Y&&q.RY&&q.BY)U.outputChannels=4,U.yCbCr=!0;else if(q.R&&q.G&&q.B)U.outputChannels=4;else if(q.Y)U.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(U.outputChannels){case 4:W==jt?(K=!q.A,U.format=jt,U.colorSpace=Zt,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3}):W==Un?(U.format=Un,U.colorSpace=Zt,U.outputChannels=2,U.decodeChannels={R:0,G:1}):W==ns?(U.format=ns,U.colorSpace=Zt,U.outputChannels=1,U.decodeChannels={R:0}):Z=!0;break;case 1:W==jt?(K=!0,U.format=jt,U.colorSpace=Zt,U.outputChannels=4,U.shouldExpand=!0,U.decodeChannels={Y:0}):W==Un?(U.format=Un,U.colorSpace=Zt,U.outputChannels=2,U.shouldExpand=!0,U.decodeChannels={Y:0}):W==ns?(U.format=ns,U.colorSpace=Zt,U.outputChannels=1,U.decodeChannels={Y:0}):Z=!0;break;default:Z=!0}if(Z)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(U.yCbCr&&(U.format=jt,U.outputChannels=4,U.decodeChannels={Y:0,RY:1,BY:2},K=!0),U.type==1)switch(D){case Mn:U.getter=ye;break;case hn:U.getter=ie;break}else if(U.type==2)switch(D){case Mn:U.getter=je;break;case hn:U.getter=O}else throw new Error("THREE.EXRLoader: unsupported pixelType "+U.type+" for "+u.compression+".");U.columns=U.width;const ee=U.width*U.height*U.outputChannels;switch(D){case Mn:U.byteArray=new Float32Array(ee),K&&U.byteArray.fill(1,0,ee);break;case hn:U.byteArray=new Uint16Array(ee),K&&U.byteArray.fill(15360,0,ee);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let ce=0;for(const j of u.channels)U.decodeChannels[j.name]!==void 0&&(U.channelByteOffsets[j.name]=ce),ce+=j.pixelType*2;if(U.totalBytes=ce,U.outLineWidth=U.width*U.outputChannels,u.spec.deepFormat){U.deepChannels=[];let j=0;for(const ge of u.channels){const Ee=ge.pixelType===0?4:ge.pixelType*2;U.deepChannels.push({name:ge.name,pixelType:ge.pixelType,bytesPerSample:Ee}),j+=Ee}U.deepBytesPerSample=j,U.chunkOffsets=u._chunkOffsets,U.multiPart=u.spec.multiPart,U.decode=Qr.bind(U)}else if(u.spec.singleTile){U.blockHeight=u.tiles.ySize,U.blockWidth=u.tiles.xSize;const j=tr(u.tiles,U.width,U.height),ge=Zr(j,U.width,u.tiles.xSize,u.tiles.roundingMode),Ee=Zr(j,U.height,u.tiles.ySize,u.tiles.roundingMode);U.tileCount=ge[0]*Ee[0];for(let _e=0;_e<j;_e++)for(let ve=0;ve<Ee[_e];ve++)for(let Oe=0;Oe<ge[_e];Oe++)ze(x,R);U.decode=$r.bind(U)}else if(u.spec.multiPart)U.blockWidth=U.width,U.chunkOffsets=u._chunkOffsets,U.decode=fi.bind(U);else{U.blockWidth=U.width;const j=Math.ceil(U.height/U.blockHeight);for(let ge=0;ge<j;ge++)ze(x,R);U.decode=Jr.bind(U)}return U}const di={value:0},Wi=new DataView(e),ea=new Uint8Array(e),hs=us(Wi,e,di),ta=Math.max(0,Math.min(this.part,hs.length-1)),on=hs[ta];if(on.spec.multiPart||on.spec.deepFormat)for(let u=0;u<hs.length;u++){const x=hs[u].chunkCount;if(u===ta){on._chunkOffsets=[];for(let y=0;y<x;y++)on._chunkOffsets.push(ze(Wi,di))}else for(let y=0;y<x;y++)ze(Wi,di)}const yn=jr(on,Wi,ea,di,this.type,this.outputFormat);if(yn.decode(),yn.shouldExpand){const u=yn.byteArray;if(this.outputFormat==jt)for(let x=0;x<u.length;x+=4)u[x+2]=u[x+1]=u[x];else if(this.outputFormat==Un)for(let x=0;x<u.length;x+=2)u[x+1]=u[x]}if(yn.yCbCr){const u=yn.byteArray,x=yn.width*yn.height;if(this.type===hn)for(let y=0;y<x;y++){const R=y*4,D=X(u[R]),W=X(u[R+1]),U=X(u[R+2]),q=(1+W)*D,K=(1+U)*D,Z=(D-q*.2126-K*.0722)/.7152;u[R]=Ki.toHalfFloat(Math.max(0,q)),u[R+1]=Ki.toHalfFloat(Math.max(0,Z)),u[R+2]=Ki.toHalfFloat(Math.max(0,K))}else for(let y=0;y<x;y++){const R=y*4,D=u[R],W=u[R+1],U=u[R+2],q=(1+W)*D,K=(1+U)*D;u[R]=Math.max(0,q),u[R+1]=Math.max(0,(D-q*.2126-K*.0722)/.7152),u[R+2]=Math.max(0,K)}}return{header:on,width:yn.width,height:yn.height,data:yn.byteArray,format:yn.format,colorSpace:yn.colorSpace,type:this.type,minFilter:kt,magFilter:kt,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const qr="/game-assets",vh=["Diffuse","nor_gl","arm"],Mh=["pine_bark","forest_ground_04","rocky_trail","forest_leaves_04"],yh=["fern_02","dead_tree_trunk","boulder_01","gate_latch_01","large_iron_gate","Barrel_02","CheeseBox_01","ladder_sectioned_01","fir_sapling"],uM=`${qr}/hdri/je_gray_02_1k.exr`,hM=`${qr}/textures/twig/twig_diff_1k.png`,fM=`${qr}/textures/twig/twig_nor_gl_1k.jpg`;function dM(i){const e=new pv,t=new cM,n=new cf;let s=0;const r=Mh.length*vh.length+yh.length+2+1,a=()=>{s+=1,i?.(s/r)},o={},l={};let c=null;const h=(w,_)=>new Promise(g=>{const A=`${qr}/textures/${w}/${w}_${_}_1k.jpg`;n.load(A,C=>{C.wrapS=C.wrapT=Hi,_==="Diffuse"&&(C.colorSpace=Vt),o[`${w}_${_}`]=C,a(),g(C)},void 0,()=>{a(),g(null)})}),f=w=>new Promise(_=>{const g=`${qr}/models/${w}`;e.load(`${g}/${w}_1k.gltf`,A=>{l[w]=A.scene,a(),_(A.scene)},void 0,()=>{a(),_(null)})}),d=(w,_,g)=>new Promise(A=>{n.load(w,C=>{g&&(C.colorSpace=Vt),o[_]=C,a(),A(C)},void 0,()=>{a(),A(null)})}),p=()=>new Promise(w=>{t.load(uM,_=>{_.mapping=Ha,c=_,a(),w(_)},void 0,()=>{a(),w(null)})});async function v(){const w=[];for(const _ of Mh)for(const g of vh)w.push(h(_,g));for(const _ of yh)w.push(f(_));return w.push(d(hM,"twig_diff",!0)),w.push(d(fM,"twig_nor_gl",!1)),w.push(p()),await Promise.all(w),{textures:o,models:l,hdri:c}}return{loadAll:v}}function Oa(i,e,t={}){return new bi({map:i[`${e}_Diffuse`]||null,normalMap:i[`${e}_nor_gl`]||null,roughnessMap:i[`${e}_arm`]||null,roughness:1,metalness:0,...t})}function mo(i){let e=i>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ba(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const Sh=i=>i*i*(3-2*i);function pM(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=Sh(i-n),a=Sh(e-s),o=Ba(n,s,t),l=Ba(n+1,s,t),c=Ba(n,s+1,t),h=Ba(n+1,s+1,t);return o+(l-o)*r+(c+(h-c)*r-(o+(l-o)*r))*a}function oc(i,e,t,n=3){let s=0,r=1,a=1,o=0;for(let l=0;l<n;l++)s+=pM(i*a,e*a,t+l*1013)*r,o+=r,r*=.5,a*=2.07;return s/o}function mM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const bh="BCDFGHJKLMNPQRSTVWXZ";function gM(i,e=4){let t="";for(let n=0;n<e;n++)t+=bh[Math.floor(i()*bh.length)];return t}const _M=20,sl=1/_M,Pf=20,zt={half:118,fence:120,treeCount:2050,rockCount:260,bushCount:1250,terrainAmp:3.6,terrainScale:.017},Jt={eye:1.68,radius:.33,walk:3.5,run:6.4,crouchMul:.45,staminaMax:150,staminaDrain:12,staminaRegen:15,staminaFloor:30,reviveTime:4,downTime:45,pickupRange:4.5},Ar={triggerDist:20,rise:1.15,fall:.3,speedBonus:.32,staminaBonus:70,drainMul:1.6,fovBonus:9},Xt={range:100,angle:.55,focusAngle:.22,focusRange:140},bn={max:100,darkGain:.9,lightRecover:1.6,stareGain:16,proximityGain:7,altoProximityRange:26,altoProximityGain:19},Vn={alto:{killRange:2.4,stareRange:28,teleportCooldown:3.8,minSpawnDist:26,maxSpawnDist:46,closeInStep:3.6},jauria:{count:3,patrolSpeed:2,chaseSpeed:5.9,hearRange:38,sightRange:20,sightAngle:1.15,attackRange:1.5,lightRepelRange:24,lightRepelTime:2.8},ciego:{count:1,patrolSpeed:.95,chaseSpeed:3.9,hearRange:62,attackRange:2.2,roarCooldown:14,smellRange:15,smellCool:11}},jn={walk:7,run:27,crouch:2,pickup:16,ping:55,revive:12,roar:90,scream:70,heartbeat:13},Tn={beacons:8,maxPlayers:6,extractionTime:90,roomCodeLength:4},Qt={LOBBY:"lobby",HUNT:"hunt",EXTRACTION:"extraction",ESCAPED:"escaped",WIPED:"wiped"},Ds=[{key:"torre",name:"Torre del guardabosques"},{key:"caravana",name:"Caravana volcada"},{key:"piedras",name:"Círculo de piedras"},{key:"caseta",name:"Caseta de bombeo"},{key:"tuberia",name:"Tubería de drenaje"},{key:"camion",name:"Camión abandonado"},{key:"puente",name:"Puente de tablones"},{key:"porton",name:"Portón de la valla"}],Za={nightAtBeacon:3,transitionTime:6},Os=Math.PI*2,ei=.22,xM={torre:[[-2.2,-2.2,.32],[2.2,-2.2,.32],[-2.2,2.2,.32],[2.2,2.2,.32],[-2.6,2.7,ei],[-2,3,ei]],caravana:[[-2.1,0,1.5],[0,0,1.5],[2.1,0,1.5],[3,-1,ei],[-3.3,1.1,ei]],caseta:[[0,0,2.3],[2.5,.9,ei],[2.5,1.9,ei],[1.4,2.3,ei]],camion:[[-2.6,0,1.5],[.2,0,1.5],[3,0,1.5],[4.8,0,ei],[4.1,1.7,ei],[3.5,-1.7,ei]],tuberia:[[-6.2,-1.6,.42]],puente:[[0,-5.2,.42]],piedras:[...Array.from({length:7},(i,e)=>{const t=e/7*Os;return[Math.cos(t)*4.2,Math.sin(t)*4.2,.55]}),...Array.from({length:5},(i,e)=>{const t=(e/4-.5)*7,n=Math.cos(.5),s=Math.sin(.5);return[.6+n*t,6.8+s*t,.4]}),[5.6,-3.1,.55],[-5.2,4,.42],[-6.5,-5,.15]]};function vM(i){const e=[];for(const t of i){const n=xM[t.key];if(!n)continue;const s=Math.cos(t.rot),r=Math.sin(t.rot);for(const[a,o,l]of n)e.push({x:t.x+a*s+o*r,z:t.z-a*r+o*s,r:l})}return e}function If(i,e,t){const n=zt.terrainScale,s=oc(i*n,e*n,t,3),r=oc(i*n*3.9,e*n*3.9,t+7717,2);return(s-.5)*2*zt.terrainAmp+(r-.5)*1.7}function pn(i,e,t){let n=If(e,t,i.seed);for(let s=0;s<i.landmarks.length;s++){const r=i.landmarks[s],a=Math.hypot(e-r.x,t-r.z);if(a<r.clear){const o=a/r.clear,l=o*o*(3-2*o);n=r.y*(1-l)+n*l}}return n}function MM(i,e){const t=[],s=i()*Os,r={x:Math.cos(s)*(zt.fence-2),z:Math.sin(s)*(zt.fence-2),rot:s+Math.PI/2,clear:13},a=[];let o=0;for(;a.length<Ds.length-1&&o++<4e3;){const c=i()*Os,h=34+i()*68,f=Math.cos(c)*h,d=Math.sin(c)*h;Math.hypot(f-r.x,d-r.z)<56||a.some(p=>Math.hypot(p.x-f,p.z-d)<46)||a.push({x:f,z:d,rot:i()*Os,clear:10+i()*5})}for(;a.length<Ds.length-1;){const c=a.length/(Ds.length-1)*Os+.3,h=78;a.push({x:Math.cos(c)*h,z:Math.sin(c)*h,rot:c,clear:12})}const l=[a[0],a[1],a[2],a[3],a[4],a[5],a[6],r];for(let c=0;c<Ds.length;c++){const h=l[c];t.push({index:c,key:Ds[c].key,name:Ds[c].name,x:h.x,z:h.z,y:If(h.x,h.z,e),rot:h.rot,clear:h.clear})}return t}function yM(i,e,t){const n=Math.ceil(t*2/e)+1,s=new Array(n*n);for(let a=0;a<s.length;a++)s[a]=[];const r=(a,o)=>{const l=Math.min(n-1,Math.max(0,Math.floor((a+t)/e)));return Math.min(n-1,Math.max(0,Math.floor((o+t)/e)))*n+l};return i.forEach((a,o)=>s[r(a.x,a.z)].push(o)),{cell:e,size:n,half:t,buckets:s,idx:r}}function Lf(i,e,t,n){const s=[],r=i.cell,a=Math.max(0,Math.floor((e-n+i.half)/r)),o=Math.min(i.size-1,Math.floor((e+n+i.half)/r)),l=Math.max(0,Math.floor((t-n+i.half)/r)),c=Math.min(i.size-1,Math.floor((t+n+i.half)/r));for(let h=l;h<=c;h++)for(let f=a;f<=o;f++){const d=i.buckets[h*i.size+f];for(let p=0;p<d.length;p++)s.push(d[p])}return s}function rl(i,e,t,n){const s=[],r=zt.half;let a=0;for(;s.length<e&&a++<e*30;){const o=(i()*2-1)*r,l=(i()*2-1)*r;let c=!1;for(const h of t)if(Math.hypot(o-h.x,l-h.z)<h.clear*n.clearMul){c=!0;break}if(!c){if(n.minSep>0){let h=!1;for(let f=s.length-1;f>=0&&f>s.length-160;f--)if(Math.hypot(s[f].x-o,s[f].z-l)<n.minSep){h=!0;break}if(h)continue}s.push({x:o,z:l,s:n.minScale+i()*(n.maxScale-n.minScale),rot:i()*Os,type:n.types?Math.floor(i()*n.types):0})}}return s}function Nf(i){const e=mo(i),t=MM(e,i),n=rl(e,zt.treeCount,t,{clearMul:1,minSep:3.4,minScale:.75,maxScale:1.7,types:3}),s=rl(e,zt.rockCount,t,{clearMul:.8,minSep:4.5,minScale:.6,maxScale:1.8,types:2}),r=rl(e,zt.bushCount,t,{clearMul:.9,minSep:0,minScale:.6,maxScale:1.5,types:2}),a={seed:i,landmarks:t,trees:n,rocks:s,bushes:r};for(const o of[n,s,r])for(const l of o)l.y=pn(a,l.x,l.z);return a.beacons=t.map((o,l)=>{const c=o.rot+1.1+e()*2.4,h=o.clear*(.35+e()*.3),f=o.x+Math.cos(c)*h,d=o.z+Math.sin(c)*h;return{index:l,landmark:l,name:o.name,x:f,z:d,y:pn(a,f,d)}}),a.solids=[...n.map(o=>({x:o.x,z:o.z,r:.26*o.s})),...s.map(o=>({x:o.x,z:o.z,r:(o.type===0?.72:1.2)*o.s})),...vM(t)],a.solidGrid=yM(a.solids,8,zt.half+6),a.spawn={x:t[7].x*.9,z:t[7].z*.9},a.tower=t[0],a.gate=t[7],a}function Rr(i,e,t,n){const s=e,r=t;for(let c=0;c<3;c++){const h=Lf(i.solidGrid,e,t,n+2.5);let f=!1;for(let d=0;d<h.length;d++){const p=i.solids[h[d]],v=e-p.x,w=t-p.z,_=p.r+n,g=v*v+w*w;if(g<_*_&&g>1e-6){const A=Math.sqrt(g),C=(_-A)/A;e+=v*C,t+=w*C,f=!0}}if(!f)break}const a=Math.hypot(e-s,t-r);if(a>2.5){const c=2.5/a;e=s+(e-s)*c,t=r+(t-r)*c}const o=zt.fence-1.2,l=Math.hypot(e,t);return l>o&&(e=e/l*o,t=t/l*o),{x:e,z:t}}function lc(i,e,t,n,s,r=1.1){const a=n-e,o=s-t,l=Math.hypot(a,o);if(l<.001)return!0;const c=Math.ceil(l/r),h=a/c,f=o/c;let d=e,p=t;for(let v=1;v<c;v++){d+=h,p+=f;const w=Lf(i.solidGrid,d,p,1.2);for(let _=0;_<w.length;_++){const g=i.solids[w[_]],A=d-g.x,C=p-g.z;if(A*A+C*C<g.r*g.r)return!1}}return!0}const Th=30;let Eh=85;function wh(i){const e=(i-1)/9;return{pixelRatioCap:.85+e*.9,shadowsOn:i>=5,shadowRes:i>=8?1536:1024,bloomOn:i>=3,bloomStrength:.55+e*.3,grassCount:Math.round(80+e*3120),canopyPerTier:Math.round(8+e*16),sunShadowOn:i>=7,viewDist:Math.round(45+e*55)}}const mt={night:395785,bark:2893858,barkDry:3880235,ground:1909785,dirt:2761752,rock:3488058,bush:1582106,wood:3748138,metal:2961973,rust:4862242,concrete:3882296,signal:14241579,lamp:15915424};function ki(i,e){const t=new He(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new nn(s,3)),i.attributes.uv||i.setAttribute("uv",new nn(new Float32Array(n*2),2)),i}function Ah(i,e){const t=[];for(let s=0;s<5;s++){const r=s/5*Math.PI*2+(s%2?.35:-.2),a=i*3.4+s%3*.22,o=new un(i*.55,i*.08,a,4);o.translate(0,a/2,0),o.rotateZ(Math.PI/2+.2),o.rotateY(r),t.push(ki(o,e))}return t}function SM(i,e){if(i===2){const r=[],a=new un(.09,.26,9.5,5);a.translate(0,4.75,0),r.push(ki(a,mt.barkDry)),r.push(...Ah(.26,mt.barkDry));for(let o=0;o<3;o++){const l=new un(.03,.09,2.6,4);l.translate(0,1.3,0),l.rotateZ(.9+o*.2),l.rotateY(o*2.3),l.translate(0,5.4+o*1.1,0),r.push(ki(l,mt.barkDry))}return{trunk:Ks(r,!1),canopy:null}}const t=i===0?11.5:7.2,n=new un(.12,.3,t,5);return n.translate(0,t/2,0),{trunk:Ks([ki(n,mt.bark),...Ah(.3,mt.bark)],!1),canopy:TM(t,i,e)}}const bM=193/409;function Rh(i,e,t,n,s,r){const a=n*bM,o=[];for(let c=0;c<2;c++){const h=new Vi(a,n);h.translate(0,n*.5,0),h.rotateX(r),h.rotateY(s+c*Math.PI/2),o.push(h)}const l=Ks(o,!1);return l.translate(i,e,t),l}function TM(i,e,t){const n=[],s=e===0?3:2;for(let h=0;h<s;h++){const f=h/s,d=(e===0?2.3:1.85)*(1-f*.55),p=(e===0?4.4:3.4)*(1-f*.22),v=i*(.32+f*.2);for(let w=0;w<t;w++){const _=w/t*Math.PI*2+h*1.7,g=d*(.15+(w*53+h*17)%10/10*.85),A=Math.cos(_)*g,C=Math.sin(_)*g,b=p*(.4+(w*31+h*11)%10/10*.3),I=v+(w*29+h*13)%10/10*p*.85,P=-.5-w*17%10/10*.6;n.push(Rh(A,I,C,b,_+Math.PI+w*7%10/10,P))}}const r=i*.9,a=t<=12,o=(e===0?2.4:1.9)*(a?.85:1),l=a?4:6;for(let h=0;h<l;h++){const f=h/l*Math.PI*2+.4,d=.25+h%3*.18;n.push(Rh(Math.cos(f)*d,r,Math.sin(f)*d,o,f+.6,-.35))}const c=Ks(n,!1);return ki(c,13489853)}let Mr=null;function EM(){if(Mr)return Mr;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");for(let t=0;t<11;t++){const n=10+t/10*108+(Math.random()-.5)*14,s=(Math.random()-.5)*20,r=60+Math.random()*58,a=3.5+Math.random()*3,o=e.createLinearGradient(n,128,n+s,128-r);o.addColorStop(0,"rgba(74,84,42,0.95)"),o.addColorStop(.55,"rgba(128,142,68,0.95)"),o.addColorStop(1,"rgba(196,198,132,0.9)"),e.fillStyle=o,e.beginPath(),e.moveTo(n-a/2,128),e.quadraticCurveTo(n+s*.5,128-r*.6,n+s,128-r),e.quadraticCurveTo(n+s*.5+2,128-r*.6,n+a/2,128),e.closePath(),e.fill()}return Mr=new co(i),Mr.colorSpace=Vt,Mr}function wM(i){const e=[];for(let t=0;t<2;t++){const n=new Vi(i*.85,i);n.translate(0,i*.5,0),n.rotateY(t*Math.PI/2),e.push(n)}return Ks(e,!1)}function AM(i,e){const t=mo((i.seed^6976336)>>>0),n=zt.half,s=[],r=(l,c)=>{for(const h of i.landmarks)if(Math.hypot(l-h.x,c-h.z)<h.clear*.85)return!0;return!1},a=Math.max(1,Math.round(e/6));let o=0;for(;s.length<e&&o++<a*40;){const l=(t()*2-1)*n,c=(t()*2-1)*n;if(r(l,c))continue;const h=1.5+t()*2,f=.3+t()*.18,d=4+Math.floor(t()*5);for(let p=0;p<d&&s.length<e;p++){const v=t()*Math.PI*2,w=t()*h,_=l+Math.cos(v)*w,g=c+Math.sin(v)*w;r(_,g)||s.push({x:_,z:g,y:pn(i,_,g),rot:t()*Math.PI*2,s:f*(.85+t()*.3)})}}return s}function RM(i){const e=new uo(i===0?.9:1.5,2),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getX(n),r=t.getY(n),a=t.getZ(n),o=Math.hypot(s,r,a)||1,l=s/o,c=r/o,h=a/o,d=.82+(Math.sin(l*3.1+h*1.7)*.5+Math.sin(c*4.3+l*2.2)*.35+Math.sin(h*2.6-c*3.8)*.3)*.16;t.setXYZ(n,s*d,r*d*.66,a*d)}return e.computeVertexNormals(),e.translate(0,.25,0),ki(e,mt.rock)}function CM(){const i=[];for(let e=0;e<2;e++){const t=new uo(.55-e*.12,0);t.translate((e-.5)*.5,.34+e*.12,e*.3-.15),i.push(ki(t,mt.bush))}return Ks(i,!1)}const Df=i=>new bi({color:i,roughness:.8,metalness:.05});let yr=null;function PM(){if(yr)return yr;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(46,42,4,64,64,88);return t.addColorStop(0,"#ffffff"),t.addColorStop(.35,"#c9c9c9"),t.addColorStop(.7,"#7a7a7a"),t.addColorStop(1,"#3a3a3a"),e.fillStyle="#3a3a3a",e.fillRect(0,0,128,128),e.fillStyle=t,e.beginPath(),e.arc(64,64,64,0,Math.PI*2),e.fill(),yr=new co(i),yr.colorSpace=Vt,yr}const Ch=i=>new Rp({color:i,matcap:PM()}),Us=(i,e=.88)=>new bi({color:i,roughness:e,metalness:.02});function Bt(i,e,t,n,s=0,r=0,a=0){const o=new bt(new is(1,14,10),n);return o.scale.set(i,e,t),o.position.set(s,r,a),o}function Sn(i,e,t,n,s=0,r=0,a=0){const o=new bt(new un(i,e,t,12,1),n);return o.position.set(s,r,a),o}function Rt(i,e,t,n,s=0,r=0,a=0,o=0){const l=new bt(new Gi(i,e,t),Df(n));return l.position.set(s,r,a),l.rotation.y=o,l}function Gs(i,e,t,n,s=0,r=0,a=0){const o=new bt(new un(i,e,t,12),Df(n));return o.position.set(s,r,a),o}function IM(i){const e=new It;switch(i){case"torre":{for(const[t,n]of[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]])e.add(Rt(.28,8,.28,mt.wood,t,4,n));e.add(Rt(5.4,.3,5.4,mt.wood,0,8,0)),e.add(Rt(5,2.4,.2,mt.wood,0,9.2,-2.5)),e.add(Rt(.2,2.4,5,mt.wood,-2.5,9.2,0)),e.add(Rt(.2,2.4,5,mt.wood,2.5,9.2,0)),e.add(Rt(6,.25,6,mt.metal,0,10.5,0));for(let t=0;t<12;t++)e.add(Rt(1.6,.1,.3,mt.wood,2.6,.6+t*.62,2.6));e.add(Gs(.06,.06,3,mt.metal,0,12,0));break}case"caravana":{const t=Rt(6.4,2.5,2.6,7038296,0,1.6,0,.2);t.rotation.z=1.35,t.position.y=1.5,e.add(t),e.add(Rt(.3,.9,.9,mt.metal,-2.2,.5,1.4)),e.add(Rt(.3,.9,.9,mt.metal,1.9,.5,1.5)),e.add(Rt(3.2,.12,2.2,mt.rust,1.4,.06,-2.4));break}case"piedras":{for(let t=0;t<7;t++){const n=t/7*Math.PI*2,s=1.4+t%3*.5,r=Rt(.9,s*2,.7,mt.rock,Math.cos(n)*4.2,s,Math.sin(n)*4.2,n);r.rotation.z=(t%2?1:-1)*.08,e.add(r)}e.add(Gs(1.5,1.7,.35,2763558,0,.17,0));break}case"caseta":{e.add(Rt(4.2,2.8,3.4,mt.concrete,0,1.4,0));const t=Rt(4.8,.25,4,mt.rust,0,2.9,0);t.rotation.x=.08,e.add(t),e.add(Rt(1,2,.12,1711128,0,1,1.72)),e.add(Rt(1.2,.9,.1,1119503,-1.3,1.9,1.72));break}case"tuberia":{for(let t=0;t<3;t++){const n=new bt(new un(1.5,1.5,4.5,14,1,!0),new jl({color:mt.concrete,side:mn}));n.rotation.z=Math.PI/2,n.position.set(t*4.6-4.6,1.5,t%2?.4:-.3),e.add(n)}e.add(Rt(9,.4,3.4,2369055,0,.2,2.6));break}case"camion":{e.add(Rt(2.6,2.2,2.4,mt.rust,-2.6,1.5,0)),e.add(Rt(6.4,2.8,2.5,5196350,1.6,1.8,0));for(const[t,n]of[[-2.8,1.2],[-2.8,-1.2],[1.2,1.3],[1.2,-1.3],[3.6,1.3],[3.6,-1.3]]){const s=Gs(.55,.55,.4,1381914,t,.55,n);s.rotation.x=Math.PI/2,e.add(s)}break}case"puente":{e.add(Rt(2.6,.18,8.5,mt.wood,0,.5,0));for(let t=0;t<9;t++)e.add(Rt(2.8,.12,.55,mt.barkDry,0,.62,-3.8+t*.95));e.add(Rt(.12,.9,8.5,mt.wood,1.4,1,0)),e.add(Rt(.12,.9,8.5,mt.wood,-1.4,1,0));break}case"porton":{e.add(Rt(.7,4.2,.7,mt.concrete,-3,2.1,0)),e.add(Rt(.7,4.2,.7,mt.concrete,3,2.1,0));const t=new It;t.name="gatePanel";for(let n=0;n<9;n++)t.add(Rt(.1,3.2,.1,mt.metal,-2.6+n*.65,1.7,0));t.add(Rt(5.6,.14,.14,mt.metal,0,3.2,0)),t.add(Rt(5.6,.14,.14,mt.metal,0,.4,0)),e.add(t),e.add(Rt(1.3,.9,.08,mt.signal,0,3.9,.1));break}}return e}const LM={torre:[{slug:"ladder_sectioned_01",x:2.7,z:-1.9,ry:.3,rx:-.14,size:2.5,axis:"y"},{slug:"Barrel_02",x:-2.6,z:2.7,ry:.6,size:.85,axis:"y"},{slug:"CheeseBox_01",x:-2,z:3,ry:.2,size:.4,axis:"xz"}],caravana:[{slug:"Barrel_02",x:3,z:-1,ry:.2,rx:1.5,size:.85,axis:"y"},{slug:"CheeseBox_01",x:-3.3,z:1.1,ry:.5,size:.4,axis:"xz"},{slug:"fern_02",x:2.1,z:2,ry:.1,size:.6,axis:"xz"}],piedras:[{slug:"fir_sapling",x:-6.5,z:-5,ry:2.4,size:2.6,axis:"y",heavy:!0,noCast:!0},{slug:"dead_tree_trunk",x:.6,z:6.8,ry:.5,size:7.5,axis:"xz"},{slug:"boulder_01",x:5.6,z:-3.1,ry:.9,size:1.3,axis:"max"},{slug:"boulder_01",x:-5.2,z:4,ry:2.1,size:1,axis:"max"}],caseta:[{slug:"Barrel_02",x:2.5,z:.9,ry:.1,size:.85,axis:"y"},{slug:"Barrel_02",x:2.5,z:1.9,ry:.4,size:.85,axis:"y"},{slug:"CheeseBox_01",x:1.4,z:2.3,ry:.7,size:.4,axis:"xz"},{slug:"ladder_sectioned_01",x:-2.5,z:-1.8,ry:-.2,rx:-.14,size:2.3,axis:"y"}],tuberia:[{slug:"boulder_01",x:-6.2,z:-1.6,ry:.3,size:1,axis:"max"},{slug:"fern_02",x:6.2,z:1.6,ry:.9,size:.6,axis:"xz"},{slug:"fern_02",x:-3.2,z:2.1,ry:1.4,size:.5,axis:"xz"}],camion:[{slug:"Barrel_02",x:4.8,z:0,ry:.3,rx:1.5,size:.85,axis:"y"},{slug:"CheeseBox_01",x:4.1,z:1.7,ry:.6,size:.4,axis:"xz"},{slug:"CheeseBox_01",x:3.5,z:-1.7,ry:1.1,size:.4,axis:"xz"}],puente:[{slug:"fern_02",x:2.3,z:-4.6,ry:.4,size:.6,axis:"xz"},{slug:"fern_02",x:-2.3,z:4.6,ry:1.2,size:.6,axis:"xz"},{slug:"boulder_01",x:0,z:-5.2,ry:.2,size:1,axis:"max"}],porton:[{slug:"gate_latch_01",x:3.05,z:.35,y:1.55,ry:.2,size:.3,axis:"max"}]};function NM(i,e,{slug:t,x:n=0,y:s=0,z:r=0,ry:a=0,rx:o=0,size:l=1,axis:c="y",noCast:h=!1}){const f=e[t];if(!f)return;const d=f.clone(!0);d.traverse(g=>{if(!g.isMesh)return;g.castShadow=!h,g.receiveShadow=!0,h||g.layers.enable(1);const A=g.material;A&&(A.roughness!==void 0&&(A.roughness=Math.max(A.roughness,.88)),A.metalness!==void 0&&(A.metalness=0),A.map&&A.color&&A.color.setScalar(.38))});const v=new Kn().setFromObject(d).getSize(new G),w=c==="y"?v.y:c==="xz"?Math.max(v.x,v.z):Math.max(v.x,v.y,v.z);d.scale.setScalar(w>1e-4?l/w:1);const _=new Kn().setFromObject(d);d.position.set(n,s-_.min.y,r),d.rotation.set(o,a,0),i.add(d)}function DM(i,e,t,n){for(const s of LM[e]||[])s.heavy&&n||NM(i,t,s)}function UM(){const i=new un(.25,1.4,22,20,1,!0);i.translate(0,11,0);const e=new cn({color:15332066,transparent:!0,opacity:.1,blending:Bi,depthWrite:!1,side:mn});return new bt(i,e)}function FM(i,e=null){const t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100;let n=t?3:6,s=wh(n);const r=new iv({canvas:i,antialias:!t,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,s.pixelRatioCap)),r.setClearColor(mt.night,1),r.toneMapping=ro,r.toneMappingExposure=1.15,r.shadowMap.enabled=s.shadowsOn,r.shadowMap.type=Fh;const a=new np;a.fog=new Ac(461325,.028),a.background=new He(mt.night);const o=new vn(74,1,.1,145),l=new Wp(1713200,329482,.22);a.add(l);const c=new ff(9414340,.44),h=new G(-40,70,30);if(c.position.copy(h),a.add(c),a.add(c.target),c.shadow.mapSize.set(1024,1024),c.shadow.camera.left=-40,c.shadow.camera.right=40,c.shadow.camera.top=40,c.shadow.camera.bottom=-40,c.shadow.camera.near=1,c.shadow.camera.far=160,c.shadow.bias=-.0012,c.shadow.normalBias=.05,c.shadow.camera.layers.set(1),e?.hdri){const ne=new tc(r);a.environment=ne.fromEquirectangular(e.hdri).texture,ne.dispose()}const f={fog:new He(9412755),fogDensity:.013,bg:new He(9084047),hemiSky:new He(13623241),hemiGround:new He(4805695),hemiI:.8,sunColor:new He(16642518),sunI:1.85,exposure:1.2,envI:.7},d={fog:new He(461325),fogDensity:.028,bg:new He(mt.night),hemiSky:new He(1713200),hemiGround:new He(329482),hemiI:.22,sunColor:new He(9414340),sunI:.44,exposure:1.15,envI:0};let p=0,v=null;function w(){const ne=p;a.fog.color.copy(f.fog).lerp(d.fog,ne),a.fog.density=f.fogDensity+(d.fogDensity-f.fogDensity)*ne,a.background.copy(f.bg).lerp(d.bg,ne),l.color.copy(f.hemiSky).lerp(d.hemiSky,ne),l.groundColor.copy(f.hemiGround).lerp(d.hemiGround,ne),l.intensity=f.hemiI+(d.hemiI-f.hemiI)*ne,c.color.copy(f.sunColor).lerp(d.sunColor,ne),c.intensity=f.sunI+(d.sunI-f.sunI)*ne,r.toneMappingExposure=f.exposure+(d.exposure-f.exposure)*ne,a.environmentIntensity=f.envI+(d.envI-f.envI)*ne,c.castShadow=s.sunShadowOn&&ne<.5,v&&(v.material.opacity=.09*(1-ne)+.025*ne)}w();const _=new ec(16770747,0,Xt.range,Xt.angle,.62,.08);_.position.set(0,0,0);const g=new ec(15981748,0,Xt.range*.62,Xt.angle*2.9,.95,.08);g.position.set(0,0,0);const A=new hf(15258538,0,7,.4);A.position.set(0,-.5,-1.2),_.castShadow=!0,_.shadow.mapSize.set(s.shadowRes,s.shadowRes),_.shadow.camera.near=.6,_.shadow.camera.far=Xt.range,_.shadow.bias=-.0015,_.shadow.normalBias=.035;const C=new Ft;o.add(_,g,A,C),C.position.set(0,0,-10),_.target=C,g.target=C,a.add(o);const b=Ch(4932916),I=Ch(3355946),P=new It;P.position.set(.27,-.33,-.48),P.rotation.set(.08,-.32,.22);const L=Sn(.078,.062,.5,I,0,-.02,.2);L.rotation.x=Math.PI/2-.12,P.add(L),P.add(Bt(.06,.052,.062,b,0,.01,-.06));const M=Bt(.07,.045,.095,b,0,.018,-.15);P.add(M);function m(ne,oe,Re,Ve,Ge,De,be,Ae){const at=new It;at.position.set(ne,oe,Re),at.rotation.x=be;const Ke=Sn(De,De*.82,Ve,b,0,-Ve/2,0);at.add(Ke);const Qe=Bt(De*.85,De*.85,De*.85,b,0,-Ve,0);at.add(Qe);const B=new It;B.position.set(0,-Ve,0),B.rotation.x=Ae;const ut=Sn(De*.82,De*.6,Ge,b,0,-Ge/2,0);B.add(ut);const rt=Bt(De*.6,De*.6,De*.6,b,0,-Ge,0);return B.add(rt),at.add(B),at}const T=[{x:-.05,len1:.085,len2:.06,r:.0135},{x:-.018,len1:.095,len2:.066,r:.0145},{x:.014,len1:.09,len2:.062,r:.014},{x:.044,len1:.075,len2:.05,r:.0125}];for(const ne of T)P.add(m(ne.x,.052,-.175,ne.len1,ne.len2,ne.r,-1.25,-1.35));const E=m(-.062,-.005,-.14,.06,.05,.016,-.35,-1.5);E.rotation.z=.55,P.add(E);const N=new It;N.position.set(0,.015,-.24),N.rotation.x=Math.PI/2;const z=new cn({color:1842457});N.add(new bt(new un(.03,.034,.26,12),z));const V=new cn({color:2762272}),k=new bt(new un(.032,.032,.012,12),V);k.position.set(0,.135,0),N.add(k),P.add(N),o.add(P);const Y=P.position.clone(),H=new Je(window.innerWidth/(t?2:1),window.innerHeight/(t?2:1)),Q=new Zs(H,s.bloomStrength,.55,.82);Q.enabled=s.bloomOn;const J=new cv(r);J.addPass(new uv(a,o)),J.addPass(Q),J.addPass(new fv);const se=new cn({color:mt.lamp,transparent:!0,opacity:.05,blending:Bi,depthWrite:!1,side:mn}),fe=OM(),Se=new It,$e=[];for(let ne=0;ne<3;ne++){const oe=new bt(new Vi(120,120),new cn({map:fe,transparent:!0,opacity:.019+ne*.009,depthWrite:!1,blending:Bi,color:6056818}));oe.rotation.x=-Math.PI/2,oe.renderOrder=2,Se.add(oe),$e.push({mesh:oe,h:.7+ne*.9,spin:(ne%2?1:-1)*(.006+ne*.004)})}a.add(Se);const de={scene:a,camera:o,renderer:r,isMobile:t,world:null,groups:{},actors:{players:new Map,beasts:new Map},alto:null,beaconMeshes:[],gateGroup:null};de.buildWorld=function(ne){de.world=ne;for(const O of Object.keys(de.groups))a.remove(de.groups[O]),de.groups[O].traverse(X=>{X.geometry&&X.geometry.dispose()});de.groups={},de.beaconMeshes=[],v=null;const oe=zt.half*2+24,Re=de.isMobile?80:112,Ve=new Vi(oe,oe,Re,Re);Ve.rotateX(-Math.PI/2);const Ge=Ve.attributes.position,De=new Float32Array(Ge.count*3),be=new He(mt.ground),Ae=new He(mt.dirt),at=new He;for(let O=0;O<Ge.count;O++){const X=Ge.getX(O),ie=Ge.getZ(O);Ge.setY(O,pn(ne,X,ie));const ye=oc(X*.06,ie*.06,ne.seed+991,2);at.copy(be).lerp(Ae,ye*.85),De[O*3]=at.r,De[O*3+1]=at.g,De[O*3+2]=at.b}Ve.setAttribute("color",new nn(De,3)),Ve.computeVertexNormals();let Ke;if(e){const O=oe/8;for(const X of["forest_ground_04_Diffuse","forest_ground_04_nor_gl","forest_ground_04_arm"])e.textures[X]?.repeat.set(O,O);Ke=Oa(e.textures,"forest_ground_04",{vertexColors:!0,roughness:1,normalScale:new Je(1.6,1.6)})}else Ke=new bi({vertexColors:!0,roughness:.92,metalness:.02});const Qe=new bt(Ve,Ke);Qe.receiveShadow=!0,Qe.layers.enable(1),a.add(Qe),de.groups.ground=Qe;const B=new Ft,ut=new It;de.vegChunks=[];const rt=(O,X,ie,ye,Ie=!0,pe=!1)=>{const Ye=ye?ie.filter(ye):ie;if(!Ye.length)return[];const ke=new Map;for(const $t of Ye){const Pt=`${Math.floor($t.x/Th)},${Math.floor($t.z/Th)}`;ke.has(Pt)||ke.set(Pt,[]),ke.get(Pt).push($t)}const wt=new He,At=[];for(const $t of ke.values()){const Pt=new Jl(O,X,$t.length);$t.forEach((hi,Ri)=>{if(B.position.set(hi.x,hi.y,hi.z),B.rotation.set(0,hi.rot,0),B.scale.setScalar(hi.s),B.updateMatrix(),Pt.setMatrixAt(Ri,B.matrix),Ie){const Ln=.78+Ri*2654435761%1e3/1e3*.42;wt.setRGB(Ln*1.04,Ln,Ln*.9)}else{const Ln=.88+Ri*2654435761%1e3/1e3*.24;wt.setRGB(Ln,Ln,Ln)}Pt.setColorAt(Ri,wt)}),Pt.instanceMatrix.needsUpdate=!0,Pt.instanceColor&&(Pt.instanceColor.needsUpdate=!0),Pt.castShadow=!0,Pt.receiveShadow=!0,pe&&Pt.layers.enable(1),Pt.computeBoundingSphere(),ut.add(Pt),de.vegChunks.push(Pt),At.push(Pt)}return At},F=new Je(1.6,1.6),S=new jl({vertexColors:!0});let $=S,te=S,ae=S,we=S;e&&(e.textures.pine_bark_Diffuse?.repeat.set(1,3),e.textures.pine_bark_nor_gl?.repeat.set(1,3),e.textures.pine_bark_arm?.repeat.set(1,3),$=Oa(e.textures,"pine_bark",{vertexColors:!0,normalScale:F}),te=Oa(e.textures,"rocky_trail",{vertexColors:!0,normalScale:F}),ae=Oa(e.textures,"forest_leaves_04",{vertexColors:!0,normalScale:new Je(1.2,1.2)}),e.textures.twig_diff&&(we=new bi({map:e.textures.twig_diff,normalMap:e.textures.twig_nor_gl||null,alphaTest:.5,side:mn,vertexColors:!0,roughness:.85,metalness:0})));for(let O=0;O<3;O++){const{trunk:X,canopy:ie}=SM(O,s.canopyPerTier);rt(X,$,ne.trees,ye=>ye.type===O,!1,!0),ie&&rt(ie,we,ne.trees,ye=>ye.type===O,!0)}for(let O=0;O<2;O++)rt(RM(O),te,ne.rocks,X=>X.type===O,!1,!0);rt(CM(),ae,ne.bushes,null,!0);const Ce=new bi({map:EM(),alphaTest:.5,side:mn,vertexColors:!0,roughness:.85,metalness:0}),le=AM(ne,s.grassCount);rt(wM(1),Ce,le,null,!0),a.add(ut),de.groups.veg=ut;const he=new It,Le=ki(new Gi(.13,2.3,.13),mt.metal);Le.translate(0,1.15,0);const Ue=Math.round(Math.PI*2*zt.fence/3.6),Te=new Jl(Le,new jl({vertexColors:!0}),Ue),Pe=[[],[],[]];for(let O=0;O<Ue;O++){const X=O/Ue*Math.PI*2,ie=Math.cos(X)*zt.fence,ye=Math.sin(X)*zt.fence,Ie=pn(ne,ie,ye);B.position.set(ie,Ie,ye),B.rotation.set(0,X,0),B.scale.setScalar(1),B.updateMatrix(),Te.setMatrixAt(O,B.matrix),Pe[0].push(new G(ie,Ie+.6,ye)),Pe[1].push(new G(ie,Ie+1.35,ye)),Pe[2].push(new G(ie,Ie+2.1,ye))}Te.instanceMatrix.needsUpdate=!0,Te.frustumCulled=!1,he.add(Te);for(const O of Pe){O.push(O[0].clone());const X=new an().setFromPoints(O);he.add(new lo(X,new Pc({color:3817539})))}a.add(he),de.groups.fence=he;const qe=new It;for(const O of ne.landmarks){const X=IM(O.key);X.traverse(ie=>{ie.isMesh&&(ie.castShadow=!0,ie.receiveShadow=!0,ie.layers.enable(1))}),e?.models&&DM(X,O.key,e.models,n<5),O.key==="piedras"&&(v=UM(),v.material.opacity=.09*(1-p)+.025*p,X.add(v)),X.position.set(O.x,O.y,O.z),X.rotation.y=O.rot,qe.add(X),O.key==="porton"&&(de.gateGroup=X.getObjectByName("gatePanel"))}a.add(qe),de.groups.marks=qe;const ze=new It,je=BM();for(const O of ne.beacons){const X=new It;for(let Ye=0;Ye<3;Ye++){const ke=Ye/3*Math.PI*2,wt=Gs(.03,.04,1.15,mt.metal,Math.cos(ke)*.28,.55,Math.sin(ke)*.28);wt.rotation.z=Math.cos(ke)*-.42,wt.rotation.x=Math.sin(ke)*.42,X.add(wt)}X.add(Rt(.34,.3,.28,2764074,0,1.25,0));const ie=new bt(new is(.11,10,8),new cn({color:mt.signal}));ie.position.set(0,1.48,0),X.add(ie);const ye=new up(new jh({map:je,color:mt.signal,transparent:!0,blending:Bi,depthWrite:!1,opacity:.85}));ye.scale.set(4.2,4.2,1),ye.position.set(0,1.48,0),X.add(ye);const Ie=new un(.06,.75,17,10,1,!0);Ie.translate(0,8.5,0);const pe=new bt(Ie,new cn({color:mt.signal,transparent:!0,opacity:.075,blending:Bi,depthWrite:!1,side:mn}));pe.position.y=1.4,X.add(pe),X.userData.column=pe,X.position.set(O.x,O.y,O.z),ze.add(X),de.beaconMeshes.push({group:X,lamp:ie,glow:ye,column:X.userData.column,index:O.index})}a.add(ze),de.groups.beacons=ze};function lt(){const ne=new It;ne.add(Gs(.28,.3,1.15,4212028,0,.62,0)),ne.add(Rt(.5,.55,.32,3817271,0,1.42,0)),ne.add(Gs(.2,.2,.28,12168342,0,1.82,0));const oe=new bt(new Ir(1,1,14,1,!0),se.clone());oe.material.opacity=.035,oe.rotation.x=Math.PI/2,oe.position.set(0,1.6,0),oe.name="beam",ne.add(oe);const Re=new bt(new is(.07,8,6),new cn({color:mt.lamp}));return Re.position.set(0,1.6,-.2),Re.name="dot",ne.add(Re),ne}function ue(){const ne=new It,oe=Us(1841686,.92),Re=Us(5130814,.8),Ve=Bt(.3,.31,.5,oe,0,.72,-.28);ne.add(Ve),ne.add(Bt(.2,.19,.3,oe,0,.68,.1)),ne.add(Bt(.27,.28,.34,oe,0,.7,.52));for(let Qe=0;Qe<5;Qe++){const B=Bt(.31,.055,.045,Re,0,.74-Qe*.012,-.52+Qe*.15);B.rotation.x=.15,ne.add(B)}for(let Qe=0;Qe<6;Qe++){const B=new bt(new Ir(.035,.13,5),Re);B.position.set(0,.99-Qe*.008,-.5+Qe*.19),B.rotation.x=-.35,ne.add(B)}const Ge=Sn(.13,.17,.6,oe,0,.86,-.7);Ge.rotation.x=1.15,ne.add(Ge);const De=new It;De.add(Bt(.115,.115,.16,oe,0,0,0));const be=Sn(.055,.095,.34,oe,0,0,-.26);be.rotation.x=Math.PI/2,De.add(be);const Ae=Bt(.07,.022,.15,Us(2888978,.7),0,-.055,-.28);De.add(Ae);for(const Qe of[-1,1]){const B=new bt(new Ir(.05,.19,5),oe);B.position.set(Qe*.085,.13,.04),B.rotation.z=Qe*.3,B.rotation.x=-.2,De.add(B);const ut=new bt(new is(.028,8,6),new cn({color:12773496}));ut.position.set(Qe*.075,.032,-.12),De.add(ut)}De.position.set(0,1,-.99),ne.add(De);const at=[];for(const[Qe,B,ut]of[[.17,-.42,1],[-.17,-.42,1],[.19,.52,0],[-.19,.52,0]]){const rt=new It;rt.add(Sn(.075,.05,.44,oe,0,-.22,0));const F=Sn(.05,.032,.4,oe,0,-.58,ut?-.06:.07);F.rotation.x=ut?.22:-.24,rt.add(F),rt.add(Bt(.055,.035,.075,oe,0,-.78,ut?-.11:.13)),rt.position.set(Qe,.8,B),rt.userData.phase=(Qe>0?0:Math.PI)+(ut?0:Math.PI),ne.add(rt),at.push(rt)}const Ke=Sn(.035,.012,.85,oe,0,.74,1.02);return Ke.rotation.x=-1,ne.add(Ke),ne.userData={legs:at,head:De,tail:Ke,chest:Ve,kind:"jauria"},ne}function me(){const ne=new It,oe=Us(8617071,.9),Re=Us(6446158,.92),Ve=Us(1444617,.6),Ge=Bt(.42,.98,.36,oe,0,2.22,0);Ge.rotation.x=.26,ne.add(Ge),ne.add(Bt(.66,.26,.42,Re,0,3.02,-.1)),ne.add(Bt(.33,.38,.29,oe,0,1.82,.1));const De=new It;De.add(Bt(.28,.34,.32,oe,0,0,0)),De.add(Bt(.2,.16,.16,oe,0,-.1,-.26)),De.add(Bt(.07,.045,.03,Re,-.14,.09,-.3)),De.add(Bt(.07,.045,.03,Re,.14,.09,-.3)),De.add(Bt(.16,.09,.05,Ve,0,-.14,-.32));for(const at of[-1,1]){const Ke=Bt(.035,.28,.2,Re,at*.32,.06,.02);Ke.rotation.z=at*.36,De.add(Ke)}ne.add(Sn(.11,.15,.34,oe,0,3.2,-.05)),De.position.set(0,3.46,-.12),De.rotation.x=-.32,ne.add(De);const be=[];for(const at of[-1,1]){const Ke=new It;Ke.add(Bt(.2,.22,.2,oe,0,0,0)),Ke.add(Sn(.155,.12,1.12,oe,0,-.6,0)),Ke.add(Bt(.115,.115,.115,oe,0,-1.18,.04)),Ke.add(Sn(.11,.085,1.15,oe,0,-1.78,.08));for(let Qe=0;Qe<4;Qe++){const B=Sn(.026,.012,.46,Re,(Qe-1.5)*.07,-2.56,.1);B.rotation.x=.12+Qe*.04,Ke.add(B)}Ke.position.set(at*.56,2.98,0),Ke.rotation.z=at*.12,Ke.userData.side=at,ne.add(Ke),be.push(Ke)}const Ae=[];for(const at of[-1,1]){const Ke=new It;Ke.add(Sn(.21,.16,.86,oe,0,-.43,0)),Ke.add(Bt(.14,.13,.14,oe,0,-.88,.03)),Ke.add(Sn(.15,.115,.84,oe,0,-1.32,.05)),Ke.add(Bt(.15,.075,.32,Re,0,-1.72,-.11)),Ke.position.set(at*.26,1.78,0),Ke.userData.phase=at>0?0:Math.PI,ne.add(Ke),Ae.push(Ke)}return ne.userData={head:De,arms:be,legs:Ae,torso:Ge,kind:"ciego"},ne}function Me(){const ne=new cn({color:15921126}),oe=new It,Re=new bt(new un(.17,.31,2.5,8),ne);Re.position.y=1.9,oe.add(Re);const Ve=new bt(new Gi(.72,.1,.2),ne);Ve.position.y=3,oe.add(Ve);const Ge=new bt(new is(.21,14,12),ne);Ge.position.y=3.3,Ge.scale.set(1,1.18,.92),oe.add(Ge);const De=[];for(const be of[-1,1]){const Ae=new It;Ae.add(new bt(new un(.05,.062,1.5,6),ne).translateY(-.75));const at=new bt(new un(.04,.05,1.6,6),ne);at.position.y=-2.3,Ae.add(at),Ae.position.set(be*.34,2.98,0),Ae.rotation.z=be*.05,oe.add(Ae),De.push(Ae)}for(const be of[-1,1]){const Ae=new bt(new un(.075,.085,1.5,6),ne);Ae.position.set(be*.12,.75,0),oe.add(Ae)}return oe.userData={arms:De,head:Ge},oe}const nt={jauria:1.3,ciego:.9};function ht(ne,oe,Re,Ve,Ge){const De=ne.userData;if(!De)return;const be=Re==="chase",Ae=Re!=="repelled",at=nt[oe]||nt.jauria,Ke=Ge/at*Math.PI*2,Qe=be?.85:.4;if(De.legs)for(const ut of De.legs)ut.rotation.x=Ae?Math.sin(Ke+ut.userData.phase)*Qe:0;if(De.arms)for(let ut=0;ut<De.arms.length;ut++){const rt=De.arms[ut],F=rt.userData.side??(ut===0?-1:1);rt.rotation.x=Ae?Math.sin(Ke*.5+ut*Math.PI)*Qe*.55:0,rt.rotation.z=F*(.12+(be?.3:0))}De.head&&(De.head.rotation.y=be?0:Math.sin(Ve*.9)*.55),De.tail&&(De.tail.rotation.y=Math.sin(Ve*2.2)*.35);const B=1+Math.sin(Ve*(be?6.5:2.1))*(be?.05:.025);for(const ut of[De.chest,De.torso]){if(!ut)continue;ut.userData.baseScale||(ut.userData.baseScale=ut.scale.clone());const rt=ut.userData.baseScale;ut.scale.set(rt.x*B,rt.y,rt.z*B)}ne.position.y+=Ae?Math.abs(Math.sin(Ke))*(be?.07:.03):0}const st=(ne,oe,Re,Ve,Ge)=>{ne.position.x+=(oe-ne.position.x)*Ge,ne.position.y+=(Re-ne.position.y)*Ge,ne.position.z+=(Ve-ne.position.z)*Ge};return de.syncActors=function(ne,oe,Re=1/20){const Ve=1-Math.exp(-18*Re),Ge=new Set;for(const be of ne.players||[]){if(be.id===oe)continue;Ge.add(be.id);let Ae=de.actors.players.get(be.id);Ae||(Ae=lt(),a.add(Ae),de.actors.players.set(be.id,Ae),Ae.position.set(be.x,be.y,be.z)),Ae.visible=be.s!=="dead"&&!be.e,st(Ae,be.x,be.y,be.z,Ve),Ae.lookAt(Ae.position.x+be.fx,Ae.position.y,Ae.position.z+be.fz),Ae.rotation.z=be.s==="down"?1.3:0;const at=Ae.getObjectByName("beam"),Ke=Ae.getObjectByName("dot"),Qe=be.l>0&&be.s==="alive";if(at.visible=Qe,Ke.visible=Qe,Qe){const B=be.l===2?Xt.focusRange*.6:Xt.range*.6,ut=Math.tan(be.l===2?Xt.focusAngle:Xt.angle)*B;at.scale.set(ut,B,ut),at.position.set(0,1.6,-B/2)}}for(const[be,Ae]of de.actors.players)Ge.has(be)||(a.remove(Ae),de.actors.players.delete(be));const De=new Set;for(const be of ne.beasts||[]){De.add(be.id);let Ae=de.actors.beasts.get(be.id);Ae&&Ae.userData.kind!==be.k&&(a.remove(Ae),de.actors.beasts.delete(be.id),Ae=null),Ae||(Ae=be.k==="ciego"?me():ue(),Ae.userData.kind=be.k,Ae.traverse(Qe=>{Qe.isMesh&&(Qe.castShadow=!0)}),a.add(Ae),de.actors.beasts.set(be.id,Ae),Ae.position.set(be.x,be.y,be.z));const at=Ae.position.x,Ke=Ae.position.z;st(Ae,be.x,be.y,be.z,Ve),Ae.userData.walkDist=(Ae.userData.walkDist||0)+Math.hypot(Ae.position.x-at,Ae.position.z-Ke),Ae.lookAt(Ae.position.x+be.fx,Ae.position.y,Ae.position.z+be.fz),ht(Ae,be.k,be.s,performance.now()*.001,Ae.userData.walkDist)}for(const[be,Ae]of de.actors.beasts)De.has(be)||(a.remove(Ae),de.actors.beasts.delete(be));if(ne.alto){de.alto||(de.alto=Me(),a.add(de.alto)),de.alto.visible=!0;const be=Math.sin(performance.now()*9e-4)*.05;de.alto.position.set(ne.alto.x,ne.alto.y+be,ne.alto.z),de.alto.lookAt(o.position.x,ne.alto.y,o.position.z)}else de.alto&&(de.alto.visible=!1);for(const be of de.beaconMeshes){const Ae=ne.beacons&&ne.beacons[be.index];be.group.visible=!Ae}if(de.gateGroup){const be=ne.gateOpen?-2.4:0;de.gateGroup.position.x+=(be*2.2-de.gateGroup.position.x)*.04}},de.setFlashlight=function(ne,oe){if(!ne){_.intensity=g.intensity=A.intensity=0,V.color.setHex(2762272);return}_.intensity=oe?8:4.6,_.angle=oe?Xt.focusAngle:Xt.angle,_.distance=oe?Xt.focusRange:Xt.range,_.penumbra=oe?.45:.68,g.intensity=oe?.8:1.6,g.angle=oe?Xt.angle*2.2:Xt.angle*2.9,g.distance=(oe?Xt.focusRange:Xt.range)*.55,A.intensity=oe?.9:1.9,V.color.setHex(16774096)},de.updateHand=function(ne,oe,Re){const Ve=Math.sin(oe*2)*(Re?.02:.011),Ge=Math.cos(oe)*(Re?.014:.007),De=Math.sin(ne*.8)*.006;P.position.set(Y.x+Ge,Y.y+Ve+De,Y.z)},de.setDayPhase=function(ne,oe){const Re=ne?0:1,Ve=oe/Za.transitionTime;p=Re>p?Math.min(Re,p+Ve):Math.max(Re,p-Ve),w()},de.tickBeacons=function(ne){for(const oe of de.beaconMeshes){if(!oe.group.visible)continue;const Re=.45+.55*Math.pow(Math.max(0,Math.sin(ne*2.1+oe.index)),6);oe.glow.material.opacity=.3+Re*.8,oe.lamp.material.color.setHex(14241579).multiplyScalar(.5+Re),oe.column&&(oe.column.material.opacity=.045+Re*.075)}},de.setFov=function(ne){Math.abs(o.fov-ne)<.02||(o.fov+=(ne-o.fov)*.09,o.updateProjectionMatrix())},de.resize=function(){const ne=i.clientWidth||window.innerWidth,oe=i.clientHeight||window.innerHeight;o.aspect=ne/oe,o.updateProjectionMatrix(),r.setSize(ne,oe,!1),J.setSize(ne,oe),Q.setSize(ne/(t?2:1),oe/(t?2:1))},de.setQuality=function(ne){n=Math.max(1,Math.min(10,Math.round(ne))),s=wh(n),r.setPixelRatio(Math.min(window.devicePixelRatio,s.pixelRatioCap)),r.shadowMap.enabled=s.shadowsOn,_.shadow.mapSize.set(s.shadowRes,s.shadowRes),_.shadow.map&&(_.shadow.map.dispose(),_.shadow.map=null),Q.strength=s.bloomStrength,Q.enabled=s.bloomOn,Eh=s.viewDist,de.resize(),de.world&&de.buildWorld(de.world)},de.getQuality=()=>n,de.cullVegetation=function(){if(!de.vegChunks)return;const ne=o.position;for(const oe of de.vegChunks){const Re=oe.boundingSphere;oe.visible=!Re||Math.hypot(Re.center.x-ne.x,Re.center.z-ne.z)-Re.radius<Eh}},de.tickMist=function(ne){const oe=de.world?pn(de.world,o.position.x,o.position.z):0;for(const Re of $e)Re.mesh.position.set(o.position.x,oe+Re.h,o.position.z),Re.mesh.rotation.z=ne*Re.spin},de.render=function(){if(de.cullVegetation(),c.castShadow){const ne=o.position.x,oe=o.position.y,Re=o.position.z;c.position.set(ne+h.x,oe+h.y,Re+h.z),c.target.position.set(ne,oe,Re),c.target.updateMatrixWorld()}v&&(v.rotation.y+=6e-4),J.render()},de}function OM(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){const s=Math.random()*256,r=Math.random()*256,a=18+Math.random()*52,o=e.createRadialGradient(s,r,0,s,r,a),l=.05+Math.random()*.16;o.addColorStop(0,`rgba(255,255,255,${l})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(s-a,r-a,a*2,a*2)}const t=new co(i);return t.wrapS=t.wrapT=Hi,t.repeat.set(2,2),t}function BM(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new co(i);return n.colorSpace=Vt,n}const Ph=(i,e,t)=>i<e?e:i>t?t:i,Sr=(i,e,t)=>i+(e-i)*t,zM=5.4,kM=17;function HM(i,e,t,n={}){const s={x:i.spawn.x,z:i.spawn.z,y:0,vx:0,vz:0,yaw:Math.atan2(i.spawn.x,i.spawn.z),pitch:0,eye:Jt.eye,stamina:Jt.staminaMax,sanity:0,lightOn:!0,lightFocus:!1,exhausted:!1,bob:0,stepAccum:0,breathing:0,adrenaline:0,alive:!0,frozen:!1,jumpY:0,jumpVel:0,groundY:0};s.jump=function(){s.frozen||s.jumpY>.02||(s.jumpVel=zM)},e.rotation.order="YXZ",s.forward=function(){return{x:-Math.sin(s.yaw),z:-Math.cos(s.yaw)}},s.toggleLight=function(){s.lightOn=!s.lightOn,n.onSound?.("click")};function r(o,l){let c=0;s.lightOn||(c+=bn.darkGain);let h=!1,f=1/0;if(l?.alto){const p=l.alto.x-s.x,v=l.alto.z-s.z;if(f=Math.hypot(p,v),f<bn.altoProximityRange){const w=1-f/bn.altoProximityRange;c+=bn.altoProximityGain*w*w}if(f<Vn.alto.stareRange&&f>0){const w=s.forward();p/f*w.x+v/f*w.z>Math.cos(.7)&&lc(i,s.x,s.z,l.alto.x,l.alto.z)&&(h=!0,c+=bn.stareGain*(1+(1-f/Vn.alto.stareRange)))}}let d=f;for(const p of l?.beasts||[])d=Math.min(d,Math.hypot(p.x-s.x,p.z-s.z));d<12&&(c+=bn.proximityGain*(1-d/12)),c===0&&s.lightOn&&(c-=bn.lightRecover),s.sanity=Ph(s.sanity+c*o,0,bn.max),s.staring=h,s.nearestBeast=d,s.altoDist=f}function a(o,l){const c=Ar;if(l<c.triggerDist){const h=1-l/c.triggerDist;s.adrenaline=Math.min(1,s.adrenaline+c.rise*(.35+h*1.9)*o)}else s.adrenaline=Math.max(0,s.adrenaline-c.fall*o)}return s.update=function(o,l){const c=t.consumeLook();s.frozen||(s.yaw+=c.x,s.pitch=Ph(s.pitch+c.y,-1.35,1.35));let h=s.frozen?0:t.fwd,f=s.frozen?0:t.side;const d=Math.hypot(h,f);d>1&&(h/=d,f/=d);const v=t.run&&!t.crouch&&d>.1&&!s.exhausted&&s.stamina>0,w=Jt.staminaMax+s.adrenaline*Ar.staminaBonus;if(v){const se=Jt.staminaDrain*(1+s.adrenaline*(Ar.drainMul-1));s.stamina=Math.max(0,s.stamina-se*o),s.stamina<=0&&(s.exhausted=!0)}else s.stamina=Math.min(w,s.stamina+Jt.staminaRegen*o),s.exhausted&&s.stamina>Jt.staminaFloor&&(s.exhausted=!1);s.staminaCap=w;const _=1+s.adrenaline*Ar.speedBonus,g=(v?Jt.run:t.crouch?Jt.walk*Jt.crouchMul:Jt.walk)*_,A=Math.sin(s.yaw),C=Math.cos(s.yaw),b=(-A*h+C*f)*g,I=(-C*h-A*f)*g,P=1-Math.exp(-22*o);s.vx=Sr(s.vx,b,P),s.vz=Sr(s.vz,I,P);const L=s.x+s.vx*o,M=s.z+s.vz*o,m=Rr(i,L,M,Jt.radius),T=m.x-L,E=m.z-M,N=Math.hypot(T,E);if(N>1e-5){const se=T/N,fe=E/N,Se=s.vx*se+s.vz*fe;Se<0&&(s.vx-=se*Se,s.vz-=fe*Se)}s.x=m.x,s.z=m.z;const z=Math.hypot(s.vx,s.vz)>.35,V=pn(i,s.x,s.z),k=Jt.eye*(t.crouch?.62:1);if(s.eye=Sr(s.eye,k,1-Math.exp(-9*o)),s.jumpVel-=kM*o,s.jumpY=Math.max(0,s.jumpY+s.jumpVel*o),s.jumpY<=0&&(s.jumpY=0,s.jumpVel=0),s.groundY=Sr(s.groundY,V,1-Math.exp(-16*o)),s.y=s.groundY+s.jumpY,z&&!s.frozen){const se=v?10.5:t.crouch?4.2:6.6;s.bob+=o*se,s.stepAccum+=o*se,s.stepAccum>Math.PI&&(s.stepAccum-=Math.PI,n.onSound?.("step",{running:v,crouch:t.crouch}))}else s.bob=Sr(s.bob,0,1-Math.exp(-6*o)),s.stepAccum=0;const Y=Math.sin(s.bob*2)*(v?.075:.04),H=Math.cos(s.bob)*(v?.045:.022);s.lightFocus=s.lightOn&&t.focus,r(o,l),a(o,s.nearestBeast??999);const Q=(s.sanity/bn.max)**2*.02+s.adrenaline**2*.016,J=performance.now()*.001;return e.position.set(s.x+H+Math.sin(J*23)*Q,s.y+s.eye+Y+Math.sin(J*31)*Q,s.z),e.rotation.y=s.yaw+Math.sin(J*17)*Q*.5,e.rotation.x=s.pitch+Math.cos(J*19)*Q*.5,s.moving=z,s.running=v,s.crouching=!!t.crouch,s.hidden=s.crouching&&!s.lightOn,{moving:z,running:v}},s.noiseLevel=function(){return s.moving?s.crouching?.12:s.running?1:.45:0},s.netState=function(){const o=s.forward();return{x:+s.x.toFixed(2),z:+s.z.toFixed(2),fx:+o.x.toFixed(3),fz:+o.z.toFixed(3),moving:s.moving,running:s.running,crouching:s.crouching,lightOn:s.lightOn,lightFocus:s.lightFocus,sanity:Math.round(s.sanity)}},s.findInteractable=function(o,l){const c={kind:null,index:-1,label:"",dist:1/0};if(!o)return c;for(const f of i.beacons){if(o.beacons?.[f.index])continue;const d=Math.hypot(f.x-s.x,f.z-s.z);d<Jt.pickupRange&&d<c.dist&&(c.kind="beacon",c.index=f.index,c.dist=d,c.label=`Encender la baliza · ${f.name}`)}for(const f of o.players||[]){if(f.id===l||f.s!=="down")continue;const d=Math.hypot(f.x-s.x,f.z-s.z);d<Jt.pickupRange&&d<c.dist&&(c.kind="revive",c.index=f.id,c.dist=d,c.label=`Levantar a ${f.n}`)}if(o.beacons&&o.beacons.every(Boolean)&&o.phase==="hunt"){const f=Math.hypot(i.tower.x-s.x,i.tower.z-s.z);f<6&&f<c.dist&&(c.kind="radio",c.dist=f,c.label="Pedir extracción por radio")}return c},s}const Ih={KeyE:"use",KeyF:"light",KeyM:"map",KeyQ:"ping",KeyR:"ping"};function GM(i,e={}){const t={fwd:0,side:0,run:!1,crouch:!1,focus:!1,lookX:0,lookY:0,holdUse:!1,pointerLocked:!1,touch:!1,enabled:!1},n=new Set,s=[],r=A=>s.push(A);t.consumeActions=()=>{const A=s.slice();return s.length=0,A},t.consumeLook=()=>{const A={x:t.lookX,y:t.lookY};return t.lookX=0,t.lookY=0,A};function a(){t.fwd=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0),t.side=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),t.run=n.has("ShiftLeft")||n.has("ShiftRight"),t.crouch=n.has("ControlLeft")||n.has("KeyC"),t.holdUse=n.has("KeyE")}const o=A=>{t.enabled&&(A.repeat||A.code!=="Escape"&&(n.add(A.code),Ih[A.code]&&r(Ih[A.code]),A.code==="Space"&&(r("jump"),A.preventDefault()),a(),["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(A.code)&&A.preventDefault()))},l=A=>{n.delete(A.code),a()},c=()=>{n.clear(),a()};window.addEventListener("keydown",o),window.addEventListener("keyup",l),window.addEventListener("blur",c);const h=.0021;let f=!1,d=0,p=0;const v=A=>{const C=h*(e.sensitivity??1);if(t.pointerLocked){t.lookX-=A.movementX*C,t.lookY-=A.movementY*C;return}!f||!t.enabled||(t.lookX-=(A.clientX-d)*C*1.35,t.lookY-=(A.clientY-p)*C*1.35,d=A.clientX,p=A.clientY)},w=()=>{t.pointerLocked=document.pointerLockElement===i,t.pointerLocked||(n.clear(),a(),e.onUnlock?.())},_=()=>{if(t.touch||!t.enabled)return!1;try{const A=i.requestPointerLock?.();return A&&typeof A.catch=="function"&&A.catch(()=>e.onLockDenied?.()),!0}catch{return e.onLockDenied?.(),!1}};i.addEventListener("click",_),document.addEventListener("pointerlockchange",w),document.addEventListener("mousemove",v),i.addEventListener("mousedown",A=>{t.enabled&&(A.button===2&&(t.focus=!0),A.button===0&&(t.pointerLocked?t.focus=!0:(f=!0,d=A.clientX,p=A.clientY)))}),window.addEventListener("mouseup",A=>{A.button===0&&(t.focus=!1,f=!1),A.button===2&&(t.focus=!1)}),i.addEventListener("contextmenu",A=>A.preventDefault());function g(A,C,b){t.touch=!0;const I=C.querySelector("b"),P=58;let L=null,M=0,m=0;const T=J=>{L=J.identifier,M=J.clientX,m=J.clientY,C.classList.add("active"),I.style.transform=""},E=J=>{let se=J.clientX-M,fe=J.clientY-m;const Se=Math.hypot(se,fe);Se>P&&(M+=se/Se*(Se-P),m+=fe/Se*(Se-P),se=se/Se*P,fe=fe/Se*P),I.style.transform=`translate(${se}px, ${fe}px)`;const $e=Math.hypot(se,fe)/P,de=$e<.16?0:($e-.16)/.84,lt=Math.hypot(se,fe)||1;t.side=se/lt*de,t.fwd=-(fe/lt)*de,t.run=$e>.9},N=()=>{C.classList.remove("active"),I.style.transform="",t.fwd=0,t.side=0,t.run=!1,L=null};A.addEventListener("touchstart",J=>{J.preventDefault(),L===null&&T(J.changedTouches[0])},{passive:!1}),window.addEventListener("touchmove",J=>{for(const se of J.changedTouches)se.identifier===L&&E(se)},{passive:!1});const z=J=>{for(const se of J.changedTouches)se.identifier===L&&N()};window.addEventListener("touchend",z),window.addEventListener("touchcancel",z);let V=null,k=0,Y=0;const H=.0062;i.addEventListener("touchstart",J=>{if(V!==null||!t.enabled)return;const se=J.changedTouches[0];V=se.identifier,k=se.clientX,Y=se.clientY},{passive:!0}),i.addEventListener("touchmove",J=>{for(const se of J.changedTouches)se.identifier===V&&(t.lookX-=(se.clientX-k)*H*(e.sensitivity??1),t.lookY-=(se.clientY-Y)*H*(e.sensitivity??1),k=se.clientX,Y=se.clientY)},{passive:!0});const Q=J=>{for(const se of J.changedTouches)se.identifier===V&&(V=null)};i.addEventListener("touchend",Q),i.addEventListener("touchcancel",Q),b.querySelectorAll("button").forEach(J=>{const se=J.dataset.act,fe=$e=>{if($e.preventDefault(),$e.stopPropagation(),e.onBuzz?.(12),se==="crouch"){t.crouch=!t.crouch,J.classList.toggle("held",t.crouch);return}se==="use"&&(t.holdUse=!0,J.classList.add("held")),r(se)},Se=()=>{se==="use"&&(t.holdUse=!1,J.classList.remove("held"))};J.addEventListener("touchstart",fe,{passive:!1}),J.addEventListener("touchend",Se),J.addEventListener("touchcancel",Se),J.addEventListener("mousedown",fe),J.addEventListener("mouseup",Se)})}return t.setupTouch=g,t.requestLock=_,t.destroy=()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",l),window.removeEventListener("blur",c),document.removeEventListener("pointerlockchange",w),document.removeEventListener("mousemove",v)},t}const Gt=i=>document.getElementById(i);function VM(){const i={hud:Gt("hud"),beaconRow:Gt("beaconRow"),objective:Gt("objective"),staminaFill:Gt("staminaFill"),staminaMeter:Gt("staminaMeter"),noiseFill:Gt("noiseFill"),noiseMeter:Gt("noiseMeter"),hiddenTag:Gt("hiddenTag"),squad:Gt("squad"),subtitle:Gt("subtitle"),prompt:Gt("prompt"),promptKey:Gt("promptKey"),promptText:Gt("promptText"),timer:Gt("timer"),timerValue:Gt("timerValue"),timerLabel:Gt("timerLabel"),downed:Gt("downed"),downedSub:Gt("downedSub"),mapWrap:Gt("mapWrap"),mapCanvas:Gt("mapCanvas"),fx:Gt("fx"),crosshair:Gt("crosshair")};i.beaconRow.innerHTML="";const e=[];for(let o=0;o<Tn.beacons;o++){const l=document.createElement("i");i.beaconRow.appendChild(l),e.push(l)}const t=i.fx.getContext("2d"),n=i.mapCanvas.getContext("2d");let s=0;const r={mapOpen:!1,flash:0,jumpscare:0,reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches};r.show=o=>{i.hud.hidden=!o},r.setBeacons=function(o){let l=0;for(let c=0;c<e.length;c++){const h=!!o?.[c];e[c].classList.toggle("on",h),h&&l++}return l},r.setObjective=function(o){i.objective.textContent=o},r.setMeters=function(o,l,c=0){const h=Math.max(0,Math.min(100,o/(l||100)*100));i.staminaFill.style.width=`${h}%`,i.staminaMeter.classList.toggle("low",h<22),i.staminaMeter.classList.toggle("rush",c>.15)},r.setUseReady=function(o){const l=document.querySelector('#pads button[data-act="use"]');l&&l.classList.toggle("ready",!!o)},r.setNoise=function(o){const l=Math.max(0,Math.min(100,o*100));i.noiseFill.style.width=`${l}%`,i.noiseMeter.classList.toggle("mid",o>=.25&&o<.6),i.noiseMeter.classList.toggle("loud",o>=.6)},r.setHidden=function(o){i.hiddenTag.hidden=!o},r.setSquad=function(o,l){const c=(o||[]).filter(h=>h.id!==l);if(!c.length){i.squad.innerHTML="";return}i.squad.innerHTML=c.map(h=>{const f=h.e?"dead":h.s==="down"?"down":h.s==="dead"?"dead":"",d=h.e?"fuera":h.s==="down"?`${Math.ceil(h.d)}s`:h.s==="dead"?"—":"";return`<div class="squad-row ${f}"><u></u><b>${Uf(h.n)}</b>${d?` ${d}`:""}</div>`}).join("")},r.say=function(o,l=3.4){i.subtitle.textContent=o,i.subtitle.classList.add("show"),s=l},r.setPrompt=function(o,l="E",c=0){if(!o){i.prompt.hidden=!0;return}i.prompt.hidden=!1,i.promptKey.textContent=l,i.promptText.textContent=c>0?`${o} ${"▮".repeat(Math.round(c*8)).padEnd(8,"▯")}`:o},r.setTimer=function(o,l){if(o===null){i.timer.hidden=!0;return}i.timer.hidden=!1,i.timerLabel.textContent=l;const c=Math.floor(o/60),h=Math.floor(o%60);i.timerValue.textContent=`${c}:${String(h).padStart(2,"0")}`},r.setDowned=function(o,l,c){i.downed.hidden=!o,o&&(i.downedSub.textContent=c>0?`Aguanta ${Math.ceil(l)} s. Alguien tiene que llegar hasta ti.`:`Aguanta ${Math.ceil(l)} s. No queda nadie que pueda levantarte.`)},r.setCrosshair=o=>{i.crosshair.style.display=o?"":"none"},r.toggleMap=function(o){return r.mapOpen=o===void 0?!r.mapOpen:o,i.mapWrap.hidden=!r.mapOpen,r.mapOpen},r.drawMap=function(o,l,c,h){if(!r.mapOpen)return;const f=n,d=i.mapCanvas.width,p=zt.fence*2+24,v=d/p,w=A=>d/2+A*v,_=A=>d/2+A*v;f.fillStyle="#0b100d",f.fillRect(0,0,d,d),f.strokeStyle="rgba(214,210,196,0.05)",f.lineWidth=1;for(let A=0;A<=12;A++){const C=A/12*d;f.beginPath(),f.moveTo(C,0),f.lineTo(C,d),f.stroke(),f.beginPath(),f.moveTo(0,C),f.lineTo(d,C),f.stroke()}f.strokeStyle="rgba(214,210,196,0.32)",f.setLineDash([6,5]),f.lineWidth=2,f.beginPath(),f.arc(d/2,d/2,zt.fence*v,0,Math.PI*2),f.stroke(),f.setLineDash([]),f.font='500 15px "IBM Plex Mono", monospace',f.textAlign="center";const g=[];for(const A of o.landmarks){const C=w(A.x),b=_(A.z),I=l?.beacons?.[A.index];f.strokeStyle=I?"#d94f2b":"rgba(214,210,196,0.4)",f.fillStyle=I?"rgba(217,79,43,0.22)":"transparent",f.lineWidth=2,f.beginPath(),f.rect(C-7,b-7,14,14),f.fill(),f.stroke(),I&&(f.fillStyle="#d94f2b",f.beginPath(),f.arc(C,b,3.2,0,Math.PI*2),f.fill()),f.fillStyle=I?"#d94f2b":"rgba(214,210,196,0.62)";const P=f.measureText(A.name).width,L=Math.min(d-P/2-6,Math.max(P/2+6,C));let M=b-13;g.some(m=>Math.abs(m.x-L)<(m.w+P)/2&&Math.abs(m.y-M)<16)&&(M=b+24),f.fillText(A.name,L,M),g.push({x:L,y:M,w:P}),A._labelY=M}a(f,d,w(o.tower.x),_(o.tower.z),o.tower._labelY,"EXTRACCIÓN","#f2d9a0"),a(f,d,w(o.gate.x),_(o.gate.z),o.gate._labelY,"SALIDA","#6f8a5a");for(const A of l?.players||[]){if(A.id===h||A.s==="dead")continue;const C=w(A.x),b=_(A.z);f.fillStyle=A.s==="down"?"#d94f2b":"#6f8a5a",f.beginPath(),f.arc(C,b,5,0,Math.PI*2),f.fill(),f.fillStyle="rgba(214,210,196,0.7)",f.font='400 12px "IBM Plex Mono", monospace',f.fillText(A.n,C,b+18),f.font='500 15px "IBM Plex Mono", monospace'}if(c){const A=w(c.x),C=_(c.z),b=Math.atan2(c.fz??1,c.fx??0);f.fillStyle="rgba(242,217,160,0.2)",f.beginPath(),f.moveTo(A,C),f.arc(A,C,34,b-.42,b+.42),f.closePath(),f.fill(),f.fillStyle="#f2d9a0",f.beginPath(),f.arc(A,C,5.5,0,Math.PI*2),f.fill()}f.fillStyle="rgba(214,210,196,0.5)",f.font='500 18px "Anton", sans-serif',f.fillText("N",d/2,30)};function a(o,l,c,h,f,d,p){o.fillStyle=p,o.font='500 11px "IBM Plex Mono", monospace';const v=o.measureText(d).width,w=f>h?h-14:h+24;o.fillText(d,Math.min(l-v/2-6,Math.max(v/2+6,c)),w),o.font='500 15px "IBM Plex Mono", monospace'}return r.resize=function(){const o=Math.min(devicePixelRatio,2);i.fx.width=Math.floor(innerWidth*o),i.fx.height=Math.floor(innerHeight*o)},r.flashHit=function(){r.flash=1},r.triggerJumpscare=function(){r.jumpscare=1.15},r.drawFx=function(o,{sanity:l=0,staring:c=!1,downed:h=!1,adrenaline:f=0}){const d=t,p=i.fx.width,v=i.fx.height;d.clearRect(0,0,p,v);const w=l/100,_=f>.05&&!r.reducedMotion?Math.pow(Math.max(0,Math.sin(performance.now()*.0042)),4)*f*.22:0;if(w>.02||h||f>.05){const A=h?.75:w*.72+f*.3+_,C=d.createRadialGradient(p/2,v/2,Math.min(p,v)*(.22-w*.1),p/2,v/2,Math.max(p,v)*.72);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(1,h?`rgba(90,20,14,${A})`:f>.3?`rgba(38,10,8,${A})`:`rgba(4,7,6,${A})`),d.fillStyle=C,d.fillRect(0,0,p,v)}const g=c?.1+w*.5:w*w*.14;if(g>.01&&!r.reducedMotion){const A=Math.floor(g*5200);d.fillStyle=`rgba(232,230,222,${.1+g*.5})`;for(let b=0;b<A;b++)d.fillRect(Math.random()*p,Math.random()*v,2,2);const C=Math.floor(g*7);d.fillStyle=`rgba(232,230,222,${.05+g*.1})`;for(let b=0;b<C;b++)d.fillRect(0,Math.random()*v,p,1+Math.random()*3)}r.flash>0&&(d.fillStyle=`rgba(140,47,34,${r.flash*.55})`,d.fillRect(0,0,p,v),r.flash=Math.max(0,r.flash-o*2.2)),r.jumpscare>0&&(WM(d,p,v,r.jumpscare,r.reducedMotion),r.jumpscare=Math.max(0,r.jumpscare-o)),s>0&&(s-=o,s<=0&&i.subtitle.classList.remove("show"))},r}function WM(i,e,t,n,s){const r=s?0:(Math.random()-.5)*26*n;i.save(),i.translate(e/2+r,t/2+r*.6);const a=Math.min(e,t)*(.34+(1-n)*.5);if(i.fillStyle="rgba(6,8,7,0.92)",i.fillRect(-e,-t,e*2,t*2),i.fillStyle="#efece2",i.beginPath(),i.ellipse(0,0,a*.62,a,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,20,20,0.16)",i.beginPath(),i.ellipse(-a*.24,-a*.16,a*.15,a*.2,.2,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a*.24,-a*.16,a*.15,a*.2,-.2,0,Math.PI*2),i.fill(),i.restore(),!s){i.fillStyle=`rgba(255,255,255,${.06+Math.random()*.12})`;for(let o=0;o<1600;o++)i.fillRect(Math.random()*e,Math.random()*t,3,3)}i.fillStyle=`rgba(0,0,0,${Math.max(0,1-n*1.6)})`,i.fillRect(0,0,e,t)}function Uf(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function XM(){let i=null,e,t,n,s,r,a,o,l,c,h=null,f=!1;const d=new Map,p={ready:!1,muted:!1};function v(b=2){const I=i.sampleRate*b,P=i.createBuffer(1,I,i.sampleRate),L=P.getChannelData(0);for(let M=0;M<I;M++)L[M]=Math.random()*2-1;return P}function w(b=!1){const I=i.createBufferSource();return I.buffer=h,I.loop=b,I}p.start=function(){if(f)return;const b=window.AudioContext||window.webkitAudioContext;if(!b)return;i=new b,f=!0,p.ready=!0,h=v(3),e=i.createGain(),e.gain.value=.9;const I=i.createDynamicsCompressor();I.threshold.value=-3,I.knee.value=0,I.ratio.value=20,I.attack.value=.003,I.release.value=.15,I.connect(i.destination),e.connect(I),a=i.createGain(),a.gain.value=1,o=i.createGain(),o.gain.value=1,l=i.createGain(),l.gain.value=1,c=i.createGain(),c.gain.value=1,a.connect(e),o.connect(e),l.connect(e),c.connect(e),t=i.createGain(),t.gain.value=0,t.connect(a);const P=w(!0),L=i.createBiquadFilter();L.type="bandpass",L.frequency.value=420,L.Q.value=.7,P.connect(L).connect(t),P.start();const M=i.createOscillator();M.frequency.value=.055;const m=i.createGain();m.gain.value=260,M.connect(m).connect(L.frequency),M.start();const T=i.createOscillator();T.frequency.value=.09;const E=i.createGain();E.gain.value=.035,T.connect(E).connect(t.gain),T.start();const N=i.createOscillator();N.type="sine",N.frequency.value=43;const z=i.createGain();z.gain.value=.035,N.connect(z).connect(e),N.start(),n=i.createGain(),n.gain.value=0,n.connect(e);const V=w(!0),k=i.createBiquadFilter();k.type="bandpass",k.frequency.value=2600,k.Q.value=.55,V.connect(k).connect(n),V.start(),p._staticFilter=k,s=i.createGain(),s.gain.value=.85,s.connect(e),r=i.createGain(),r.gain.value=0,r.connect(e);const Y=w(!0),H=i.createBiquadFilter();H.type="bandpass",H.frequency.value=700,H.Q.value=1.4,Y.connect(H).connect(r),Y.start();const Q=i.createOscillator();Q.frequency.value=.42;const J=i.createGain();J.gain.value=.05,Q.connect(J).connect(r.gain),Q.start(),p._breathLfo=Q,t.gain.setTargetAtTime(.075,i.currentTime,3)},p.resume=function(){i&&i.state==="suspended"&&i.resume()},p.setMuted=function(b){p.muted=b,e&&(e.gain.value=b?0:.9)};const _={get trees(){return a},get steps(){return o},get beasts(){return l},get beacon(){return c}};p.setVolume=function(b,I){const P=_[b];!P||!i||P.gain.setTargetAtTime(I,i.currentTime,.05)},p.updateListener=function(b,I,P,L,M){if(!i)return;const m=i.listener;if(m.positionX){const T=i.currentTime;m.positionX.setTargetAtTime(b,T,.02),m.positionY.setTargetAtTime(I,T,.02),m.positionZ.setTargetAtTime(P,T,.02),m.forwardX.setTargetAtTime(L,T,.02),m.forwardY.setTargetAtTime(0,T,.02),m.forwardZ.setTargetAtTime(M,T,.02),m.upX.setTargetAtTime(0,T,.02),m.upY.setTargetAtTime(1,T,.02),m.upZ.setTargetAtTime(0,T,.02)}else m.setPosition&&(m.setPosition(b,I,P),m.setOrientation(L,0,M,0,1,0))};function g(b,I,P,L=6,M=90){const m=i.createPanner();return m.panningModel="HRTF",m.distanceModel="inverse",m.refDistance=L,m.maxDistance=M,m.rolloffFactor=1.1,m.positionX?(m.positionX.value=b,m.positionY.value=I,m.positionZ.value=P):m.setPosition&&m.setPosition(b,I,P),m}function A({dur:b=.12,freq:I=900,Q:P=1.2,gain:L=.2,type:M="bandpass",at:m=null,decay:T=1}){if(!i)return;const E=w(),N=i.createBiquadFilter();N.type=M,N.frequency.value=I,N.Q.value=P;const z=i.createGain(),V=i.currentTime;z.gain.setValueAtTime(L,V),z.gain.exponentialRampToValueAtTime(1e-4,V+b*T),E.connect(N).connect(z),z.connect(m||e),E.start(V),E.stop(V+b*T+.05)}function C({f0:b,f1:I,dur:P,type:L="sine",gain:M=.2,at:m=null}){if(!i)return;const T=i.createOscillator();T.type=L;const E=i.createGain(),N=i.currentTime;T.frequency.setValueAtTime(b,N),T.frequency.exponentialRampToValueAtTime(Math.max(20,I),N+P),E.gain.setValueAtTime(M,N),E.gain.exponentialRampToValueAtTime(1e-4,N+P),T.connect(E),E.connect(m||e),T.start(N),T.stop(N+P+.05)}return p.step=function(b,I){if(!i)return;const P=I?.045:b?.16:.1;A({dur:.07,freq:1900+Math.random()*900,Q:.8,gain:P,at:o}),A({dur:.11,freq:240+Math.random()*120,Q:1,gain:P*.7,at:o})},p.click=function(){A({dur:.035,freq:3200,Q:3,gain:.16})},p.pickup=function(){C({f0:660,f1:990,dur:.13,type:"square",gain:.06,at:c}),setTimeout(()=>C({f0:990,f1:1320,dur:.18,type:"square",gain:.05,at:c}),110)},p.radio=function(){A({dur:.5,freq:1500,Q:.5,gain:.12}),C({f0:420,f1:300,dur:.7,type:"sawtooth",gain:.05})},p.heartbeat=function(b){if(!i||b<=0)return;const I=.1+b*.6;C({f0:68,f1:34,dur:.15,type:"sine",gain:I,at:s}),setTimeout(()=>C({f0:58,f1:30,dur:.19,type:"sine",gain:I*.72,at:s}),155)},p.roar=function(b,I,P){if(!i)return;const L=g(b,I+1.5,P,12,140);L.connect(l),C({f0:130,f1:44,dur:1.5,type:"sawtooth",gain:.5,at:L}),C({f0:68,f1:30,dur:1.9,type:"square",gain:.28,at:L}),A({dur:1.4,freq:320,Q:.5,gain:.24,at:L})},p.snarl=function(b,I,P){if(!i)return;const L=g(b,I+.7,P,6,60);L.connect(l),A({dur:.34,freq:480+Math.random()*260,Q:2.2,gain:.24,at:L}),C({f0:190,f1:96,dur:.36,type:"sawtooth",gain:.12,at:L})},p.scream=function(b,I,P){if(!i)return;const L=b===void 0?null:g(b,I+1.6,P,10,120);L&&L.connect(e),C({f0:880,f1:210,dur:.85,type:"sawtooth",gain:.3,at:L}),A({dur:.7,freq:1400,Q:.8,gain:.2,at:L})},p.dreadPulse=function(){i&&(C({f0:52,f1:30,dur:1.1,type:"sine",gain:.22}),A({dur:.9,freq:1900,Q:6,gain:.05,decay:1}))},p.jumpscare=function(){i&&(A({dur:1.1,freq:1800,Q:.35,gain:.58}),C({f0:1400,f1:45,dur:1,type:"sawtooth",gain:.38}),C({f0:90,f1:38,dur:1.6,type:"square",gain:.26}))},p.gate=function(){A({dur:1.6,freq:260,Q:1.6,gain:.3,decay:1}),C({f0:150,f1:70,dur:1.4,type:"square",gain:.12})},p.nightfall=function(){i&&(C({f0:220,f1:40,dur:3.2,type:"sine",gain:.22}),C({f0:110,f1:32,dur:3.6,type:"sawtooth",gain:.14}),A({dur:2.6,freq:700,Q:.4,gain:.1,decay:1.4}))},p.updateBeaconHums=function(b,I,P,L){if(i)for(const M of b){const m=!I?.[M.index],T=Math.hypot(M.x-P,M.z-L);let E=d.get(M.index);if(m&&T<34){if(!E){const N=g(M.x,M.y+1.4,M.z,4,40),z=i.createOscillator();z.type="triangle",z.frequency.value=118;const V=i.createGain();V.gain.value=0,z.connect(V).connect(N).connect(c),z.start(),E={osc:z,gain:V,panner:N},d.set(M.index,E)}E.gain.gain.setTargetAtTime(.055*(1-T/34),i.currentTime,.3)}else if(E&&(E.gain.gain.setTargetAtTime(0,i.currentTime,.3),!m)){try{E.osc.stop(i.currentTime+.6)}catch{}d.delete(M.index)}}},p.updateTension=function({sanity:b,staring:I,altoDist:P=999,exhausted:L,nearest:M,adrenaline:m=0}){if(!i)return;const T=i.currentTime,E=b/100,N=P<bn.altoProximityRange?1-P/bn.altoProximityRange:0,z=E*E*.1+N*N*.38+(I?.07:0),V=z<(p._staticTarget??0)?.08:.2;n.gain.setTargetAtTime(z,T,V),p._staticTarget=z,p._staticFilter.frequency.setTargetAtTime(1400+E*3200,T,.3);const k=Math.max(L?.085:0,m*.09,E>.5?.035:0);if(r.gain.setTargetAtTime(k,T,.3),p._breathLfo&&p._breathLfo.frequency.setTargetAtTime(L?1.15:.42+m*.75,T,.4),t){const H=M<22?.3:1;t.gain.setTargetAtTime(.075*H,T,1.2)}if(!p._presence){const H=i.createGain();H.gain.value=0,H.connect(e);const Q=i.createOscillator();Q.type="sawtooth",Q.frequency.value=46;const J=i.createBiquadFilter();J.type="lowpass",J.frequency.value=190,Q.connect(J).connect(H),Q.start();const se=i.createOscillator();se.frequency.value=.7;const fe=i.createGain();fe.gain.value=9,se.connect(fe).connect(Q.frequency),se.start(),p._presence=H}const Y=M<26?1-M/26:0;p._presence.gain.setTargetAtTime(Y*Y*.13,T,.45)},p.stopAll=function(){for(const[b,I]of d){try{I.osc.stop()}catch{}d.delete(b)}n&&(n.gain.value=0),r&&(r.gain.value=0),p._presence&&(p._presence.gain.value=0)},p}const qM=800,YM="https://roblox-juego.onrender.com/telemetry";function KM(){const i=[],e=Date.now();function t(r){const{name:a,byName:o,...l}=r;return l}function n(r,a){i.push({t:+(performance.now()/1e3).toFixed(2),type:r,...t(a)}),i.length>qM&&i.shift()}const s={log:(r,a={})=>n(r,a),init(){window.addEventListener("error",r=>{n("jsError",{message:r.message,file:r.filename,line:r.lineno})}),window.addEventListener("unhandledrejection",r=>{n("jsError",{message:String(r.reason?.message||r.reason)})})},toJSON(){return JSON.stringify({startedAt:new Date(e).toISOString(),ua:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`,touch:navigator.maxTouchPoints>0,events:i},null,2)},async send(){try{return await fetch(YM,{method:"POST",headers:{"content-type":"application/json"},body:s.toJSON(),keepalive:!0}),!0}catch{return!1}},download(){const r=new Blob([s.toJSON()],{type:"application/json"}),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.download=`coto-vedado-registro-${e}.json`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};return s}const Ff="cotoVedado.settings.v1",al={quality:null,showFps:!1,volSteps:100,volTrees:100,volBeasts:100,volBeacon:100};function ZM(){try{const i=localStorage.getItem(Ff);return i?{...al,...JSON.parse(i)}:{...al}}catch{return{...al}}}function Lh(i){try{localStorage.setItem(Ff,JSON.stringify(i))}catch{}}function $M({dom:i,audio:e,view:t,isMobile:n}){const s=ZM();s.quality==null&&(s.quality=n?3:6),e.setVolume("steps",s.volSteps/100),e.setVolume("trees",s.volTrees/100),e.setVolume("beasts",s.volBeasts/100),e.setVolume("beacon",s.volBeacon/100),t.setQuality(s.quality),i.qualityRange.value=s.quality,i.qualityValue.textContent=s.quality,i.volSteps.value=s.volSteps,i.volTrees.value=s.volTrees,i.volBeasts.value=s.volBeasts,i.volBeacon.value=s.volBeacon,i.fpsToggle.checked=s.showFps,i.fpsBadge.hidden=!s.showFps,i.btnSettings.hidden=!1;const a=l=>{const c=l===void 0?i.settingsPanel.hidden:l;i.settingsPanel.hidden=!c};i.btnSettings.addEventListener("click",()=>a()),i.settingsClose.addEventListener("click",()=>a(!1));const o=(l,c,h)=>{l.addEventListener("input",()=>{s[c]=Number(l.value),h(s[c]),Lh(s)})};return o(i.qualityRange,"quality",l=>{i.qualityValue.textContent=l,t.setQuality(l)}),o(i.volSteps,"volSteps",l=>e.setVolume("steps",l/100)),o(i.volTrees,"volTrees",l=>e.setVolume("trees",l/100)),o(i.volBeasts,"volBeasts",l=>e.setVolume("beasts",l/100)),o(i.volBeacon,"volBeacon",l=>e.setVolume("beacon",l/100)),i.fpsToggle.addEventListener("change",()=>{s.showFps=i.fpsToggle.checked,i.fpsBadge.hidden=!s.showFps,Lh(s)}),{get:()=>s,close:()=>a(!1)}}const Nh=Math.PI*2,br=(i,e,t)=>i<e?e:i>t?t:i,za=(i,e=0)=>typeof i=="number"&&Number.isFinite(i)?i:e,JM=10;function QM(i){const e=mo(i^2654435769),t=Nf(i),n={world:t,seed:i,time:0,phase:Qt.LOBBY,players:new Map,beasts:[],alto:null,noises:[],events:[],beaconsTaken:new Array(Tn.beacons).fill(!1),extractionLeft:Tn.extractionTime,radioOn:!1,gateOpen:!1,pressure:0,dayPhase:!0,activeBeasts:{alto:!0,jauria:!0,ciego:!0}},s=(m,T)=>n.events.push({type:m,...T}),r=(m,T,E,N)=>{n.noises.push({x:m,z:T,r:E,life:.35,source:N})},a=()=>[...n.players.values()].filter(m=>m.state==="alive"&&!m.escaped),o=()=>[...n.players.values()].filter(m=>m.state!=="dead"&&!m.escaped);function l(m,T,E,N,z){const V=T-m.x,k=E-m.z,Y=Math.hypot(V,k);return Y>N||Y<.001?Y<=N:V/Y*m.fx+k/Y*m.fz<z?!1:lc(t,m.x,m.z,T,E)}function c(m,T,E){for(const N of n.players.values()){if(N.state!=="alive"||!N.lightOn||N.escaped)continue;const z=N.lightFocus?Xt.focusRange:Xt.range,V=Math.cos(N.lightFocus?Xt.focusAngle:Xt.angle);if(!(Math.hypot(m-N.x,T-N.z)>Math.min(z,E))&&l(N,m,T,Math.min(z,E),V))return N}return null}function h(){for(let m=0;m<40;m++){const T=e()*Nh,E=Math.sqrt(e())*(zt.half-8),N=Math.cos(T)*E,z=Math.sin(T)*E;if(!t.landmarks.some(k=>Math.hypot(N-k.x,z-k.z)<k.clear+3))return{x:N,z}}return{x:0,z:0}}n.addPlayer=function(m,T){const E={id:m,name:T||"Rastreador",x:t.spawn.x+(e()-.5)*5,z:t.spawn.z+(e()-.5)*5,y:0,fx:0,fz:1,moving:!1,running:!1,crouching:!1,lightOn:!0,lightFocus:!1,state:"alive",downT:0,reviveProgress:0,invuln:0,sanity:0,escaped:!1,noiseAccum:0,ready:!1,scentTrail:[],scentAcc:0,heartbeatAcc:0};return E.y=pn(t,E.x,E.z),n.players.set(m,E),s("join",{id:m,name:E.name}),E},n.removePlayer=function(m){n.players.delete(m)&&s("leave",{id:m})},n.setInput=function(m,T){const E=n.players.get(m);if(!E)return;if(E.state==="alive"&&!E.escaped){const V=Date.now(),k=br(za(T.x,E.x),-120,zt.fence),Y=br(za(T.z,E.z),-120,zt.fence),H=E._lastMoveAt?Math.min(1,(V-E._lastMoveAt)/1e3):1,Q=JM*H+1.5,J=k-E.x,se=Y-E.z,fe=Math.hypot(J,se);fe>Q&&fe>1e-6?(E.x+=J/fe*Q,E.z+=se/fe*Q):(E.x=k,E.z=Y),E._lastMoveAt=V,E.y=pn(t,E.x,E.z),E.moving=!!T.moving,E.running=!!T.running,E.crouching=!!T.crouching}const N=za(T.fx,NaN),z=za(T.fz,NaN);Number.isFinite(N)&&Number.isFinite(z)&&(N!==0||z!==0)&&(E.fx=N,E.fz=z),E.lightOn=!!T.lightOn,E.lightFocus=!!T.lightFocus,typeof T.sanity=="number"&&Number.isFinite(T.sanity)&&(E.sanity=br(T.sanity,0,bn.max))},n.setReady=function(m,T){const E=n.players.get(m);E&&(E.ready=!!T)},n.pickupBeacon=function(m,T){const E=n.players.get(m);if(!E||E.state!=="alive"||n.phase!==Qt.HUNT)return!1;const N=t.beacons[T];if(!N||n.beaconsTaken[T]||Math.hypot(E.x-N.x,E.z-N.z)>Jt.pickupRange+1)return!1;n.beaconsTaken[T]=!0;const z=n.beaconsTaken.filter(Boolean).length,V=Math.max(1,Tn.beacons-Za.nightAtBeacon);return n.pressure=Math.max(0,Math.min(1,(z-Za.nightAtBeacon)/V)),r(E.x,E.z,jn.pickup,"pickup"),s("beacon",{index:T,by:m,name:E.name,count:z,place:N.name}),n.dayPhase&&z>=Za.nightAtBeacon&&(n.dayPhase=!1,w(),s("nightfall",{})),z>=Tn.beacons&&s("allBeacons",{}),!0},n.activateRadio=function(m){if(n.phase!==Qt.HUNT||n.beaconsTaken.filter(Boolean).length<Tn.beacons)return!1;const T=n.players.get(m);return!T||T.state!=="alive"||Math.hypot(T.x-t.tower.x,T.z-t.tower.z)>6?!1:(n.phase=Qt.EXTRACTION,n.radioOn=!0,n.pressure=1,n.extractionLeft=Tn.extractionTime,r(t.tower.x,t.tower.z,jn.roar,"radio"),s("radio",{by:m,name:T.name}),!0)},n.ping=function(m){const T=n.players.get(m);!T||T.state==="dead"||(r(T.x,T.z,jn.ping,"ping"),s("ping",{id:m,x:T.x,z:T.z,name:T.name}))},n.revive=function(m,T){const E=n.players.get(m),N=n.players.get(T);if(!E||!N||E.state!=="alive"||N.state!=="down"||Math.hypot(E.x-N.x,E.z-N.z)>Jt.pickupRange)return;const z=Date.now(),V=E._reviveTarget===T?Math.min(.2,Math.max(0,(z-E._reviveAt)/1e3)):0;E._reviveTarget=T,E._reviveAt=z,N.reviveProgress+=V,N._lastRevivedAt=n.time,E.noiseAccum+=V,E.noiseAccum>.8&&(E.noiseAccum=0,r(E.x,E.z,jn.revive,"revive")),N.reviveProgress>=Jt.reviveTime&&(N.state="alive",N.downT=0,N.reviveProgress=0,N.invuln=3.5,N.sanity=Math.max(N.sanity,45),s("revived",{id:T,by:m,name:N.name,byName:E.name}))};function f(m,T){return m.state!=="alive"||m.invuln>0?!1:(a().filter(N=>N.id!==m.id).length===0?(m.state="dead",s("death",{id:m.id,name:m.name,cause:T})):(m.state="down",m.downT=Jt.downTime,m.reviveProgress=0,s("down",{id:m.id,name:m.name,cause:T})),r(m.x,m.z,jn.scream,"scream"),!0)}function d(m,T){m.state!=="dead"&&(m.state="dead",s("death",{id:m.id,name:m.name,cause:T}))}function p(){const m=a();if(!m.length)return null;m.sort((V,k)=>k.sanity-V.sanity);const T=m[0],E=Vn.alto,N=E.minSpawnDist-n.pressure*8,z=E.maxSpawnDist-n.pressure*12;for(let V=0;V<30;V++){const k=e()*Nh,Y=N+e()*Math.max(4,z-N);let H=T.x+Math.cos(k)*Y,Q=T.z+Math.sin(k)*Y;const J=Math.hypot(H,Q),se=zt.fence-1.5;J>se&&(H=H/J*se,Q=Q/J*se);const fe={x:H,z:Q};if(l(T,fe.x,fe.z,E.stareRange,Math.cos(.75)))continue;const{x:Se,z:$e}=Rr(t,fe.x,fe.z,.9);return{x:Se,z:$e,target:T.id}}return null}function v(m){const T=Vn.alto;n.alto||(n.alto={active:!1,x:0,z:0,y:0,cool:9-n.pressure*5,target:null});const E=n.alto;if(!E.active){if(E.cool-=m,E.cool<=0){const de=p();de?(E.active=!0,E.x=de.x,E.z=de.z,E.y=pn(t,E.x,E.z),E.target=de.target,E.cool=T.teleportCooldown,s("altoAppear",{x:E.x,z:E.z})):E.cool=3}return}for(const de of a()){const lt=Math.hypot(de.x-E.x,de.z-E.z);if(lt>=bn.altoProximityRange){de.heartbeatAcc=0;continue}de.heartbeatAcc+=m;const ue=.55+lt/bn.altoProximityRange*.7;de.heartbeatAcc<ue||(de.heartbeatAcc=0,r(de.x,de.z,jn.heartbeat,"heartbeat"))}for(const de of a())if(de.lightOn&&Math.hypot(de.x-E.x,de.z-E.z)<T.killRange){d(de,"alto"),E.active=!1,E.cool=13-n.pressure*6,s("altoVanish",{});return}let N=n.players.get(E.target);if((!N||N.state!=="alive"||N.escaped||!N.lightOn)&&(N=a().find(de=>de.id!==E.target&&de.lightOn)||null,N&&(E.target=N.id)),E.cool-=m,E.cool>0)return;if(E.cool=T.teleportCooldown*(1-n.pressure*.45),!N){E.cool=Math.max(1.5,E.cool);return}const z=N.x-E.x,V=N.z-E.z,k=Math.hypot(z,V)||1,Y=7;if(k<=Y+.5){E.x=N.x,E.z=N.z,E.y=pn(t,E.x,E.z),d(N,"alto"),E.active=!1,E.cool=13-n.pressure*6,s("altoVanish",{});return}E.cool=Math.max(1.5,E.cool);const H=T.closeInStep*(1+n.pressure*.5);let Q=E.x+z/k*Math.min(H,k-Y),J=E.z+V/k*Math.min(H,k-Y);const se=(e()-.5)*8;Q+=-V/k*se,J+=z/k*se;const fe=Math.hypot(Q,J),Se=zt.fence-1.5;fe>Se&&(Q=Q/fe*Se,J=J/fe*Se);const $e=Rr(t,Q,J,.9);E.x=$e.x,E.z=$e.z,E.y=pn(t,E.x,E.z)}function w(){n.beasts=[],n.activeBeasts.jauria;for(let m=0;m<(n.activeBeasts.jauria?Vn.jauria.count:0);m++){const T=h();n.beasts.push({kind:"jauria",id:`j${m}`,x:T.x,z:T.z,y:pn(t,T.x,T.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:0,atkCool:0})}for(let m=0;m<(n.activeBeasts.ciego?Vn.ciego.count:0);m++){const T=h();n.beasts.push({kind:"ciego",id:`c${m}`,x:T.x,z:T.z,y:pn(t,T.x,T.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:Vn.ciego.roarCooldown,atkCool:0})}}function _(m,T,E,N,z){const V=T-m.x,k=E-m.z,Y=Math.hypot(V,k);if(Y<.05)return 0;let H=V/Y,Q=k/Y;const J=Rr(t,m.x+H*N*z,m.z+Q*N*z,.6);let se=J.x,fe=J.z;if(Math.hypot(se-m.x,fe-m.z)<N*z*.4){const de=(m.id.charCodeAt(1)||0)%2?1:-1,lt=-Q*de,ue=H*de,me=Rr(t,m.x+(H*.4+lt)*N*z,m.z+(Q*.4+ue)*N*z,.6);se=me.x,fe=me.z}m.x=se,m.z=fe,m.y=pn(t,m.x,m.z);const $e=Math.hypot(T-m.x,E-m.z)||1;return m.fx=(T-m.x)/$e,m.fz=(E-m.z)/$e,Y}function g(m,T){m.atkCool=6,m.state="investigate",m.cool=5;const E=m.x-T.x,N=m.z-T.z,z=Math.hypot(E,N)||1;m.target={x:br(m.x+E/z*22,-118,zt.half),z:br(m.z+N/z*22,-118,zt.half)}}function A(m,T){const E=Vn.jauria;m.atkCool=Math.max(0,m.atkCool-T);const N=1+n.pressure*.28,z=c(m.x,m.z,E.lightRepelRange);if(z&&z.lightFocus&&(m.repel=E.lightRepelTime),m.repel>0){if(m.repel-=T,z){_(m,m.x*2-z.x,m.z*2-z.z,E.patrolSpeed*1.6,T),m.fx=z.x-m.x,m.fz=z.z-m.z;const H=Math.hypot(m.fx,m.fz)||1;m.fx/=H,m.fz/=H}m.state="repelled";return}let V=null,k=1/0;for(const H of a()){if(H.crouching&&!H.lightOn)continue;const Q=Math.hypot(H.x-m.x,H.z-m.z);if(Q>E.sightRange||Q>k)continue;const J=(H.x-m.x)/(Q||1),se=(H.z-m.z)/(Q||1);J*m.fx+se*m.fz<Math.cos(E.sightAngle)&&Q>5||lc(t,m.x,m.z,H.x,H.z)&&(V=H,k=Q)}if(V){m.state="chase",m.target={x:V.x,z:V.z},_(m,V.x,V.z,E.chaseSpeed*N,T),k<E.attackRange&&m.atkCool<=0&&f(V,"jauria")&&g(m,V);return}if(m.state==="chase"&&(m.state="investigate",m.cool=6),m.state==="investigate"){m.cool-=T,(_(m,m.target.x,m.target.z,E.chaseSpeed*.6*N,T)<1.5||m.cool<=0)&&(m.state="patrol",m.target=h());return}_(m,m.target.x,m.target.z,E.patrolSpeed*N,T)<2&&(m.target=h())}function C(m,T){const E=Vn.ciego;m.atkCool=Math.max(0,m.atkCool-T),m.smellCool=Math.max(0,(m.smellCool||0)-T);const N=1+n.pressure*.3;m.roarT-=T;let z=null,V=1/0;if(m.state==="chase"||m.state==="investigate")for(const Y of a()){const H=Math.hypot(Y.x-m.x,Y.z-m.z),Q=Y.running?26:Y.crouching?4:Y.moving?13:0;H<Q&&H<V&&(z=Y,V=H)}if(z){m.state="chase",m.target={x:z.x,z:z.z},_(m,z.x,z.z,E.chaseSpeed*N,T),m.roarT<=0&&(m.roarT=E.roarCooldown,r(m.x,m.z,jn.roar,"roar"),s("roar",{x:m.x,z:m.z})),V<E.attackRange&&m.atkCool<=0&&f(z,"ciego")&&g(m,z);return}if(m.state==="chase"&&(m.state="investigate",m.cool=9),m.state==="investigate"){if(m.cool-=T,_(m,m.target.x,m.target.z,E.chaseSpeed*N,T)<1.5){const H=L(m.x,m.z,E.smellRange);H?(m.smellCool=E.smellCool,m.target={x:H.x,z:H.z},m.cool=10):(m.state="patrol",m.target=h())}else m.cool<=0&&(m.state="patrol",m.target=h());return}if(m.smellCool<=0){const Y=L(m.x,m.z,E.smellRange);if(Y){m.smellCool=E.smellCool,m.state="investigate",m.cool=10,m.target={x:Y.x,z:Y.z};return}}_(m,m.target.x,m.target.z,E.patrolSpeed*N,T)<2&&(m.target=h())}function b(m){for(let T=n.noises.length-1;T>=0;T--){const E=n.noises[T];if(E.life===.35)for(const N of n.beasts){if(N.state==="chase")continue;const z=N.kind==="ciego"?Vn.ciego:Vn.jauria;Math.hypot(N.x-E.x,N.z-E.z)<Math.min(E.r,z.hearRange)&&(N.state="investigate",N.cool=N.kind==="ciego"?12:8,N.target=N.kind==="ciego"?{x:E.x,z:E.z}:{x:E.x+(e()-.5)*6,z:E.z+(e()-.5)*6})}E.life-=m,E.life<=0&&n.noises.splice(T,1)}}function I(m){for(const T of n.players.values()){if(T.state!=="alive"||T.escaped)continue;if(!T.moving){T.noiseAccum=0;continue}if(T.noiseAccum+=m,T.noiseAccum<.45)continue;T.noiseAccum=0;const E=T.running?jn.run:T.crouching?jn.crouch:jn.walk;r(T.x,T.z,E,"steps")}}function P(m){for(const T of n.players.values())T.state!=="alive"||T.escaped||(T.scentAcc+=m,!(T.scentAcc<2)&&(T.scentAcc=0,T.scentTrail.push({x:T.x,z:T.z,t:n.time}),T.scentTrail.length>16&&T.scentTrail.shift()))}function L(m,T,E){let N=null,z=E;for(const V of n.players.values())if(!(V.state!=="alive"||V.escaped))for(const k of V.scentTrail){if(n.time-k.t>35)continue;const Y=Math.hypot(k.x-m,k.z-T);Y<z&&(z=Y,N=k)}return N}n.start=function(m){if(n.phase===Qt.LOBBY){n.phase=Qt.HUNT,n.beaconsTaken.fill(!1),n.pressure=0,n.extractionLeft=Tn.extractionTime,n.radioOn=!1,n.gateOpen=!1,n.alto=null,n.activeBeasts={alto:m?.activeBeasts?.alto!==!1,jauria:m?.activeBeasts?.jauria!==!1,ciego:m?.activeBeasts?.ciego!==!1},n.dayPhase=!0,n.beasts=[];for(const T of n.players.values())T.state="alive",T.escaped=!1,T.sanity=0,T.downT=0,T.invuln=2,T.x=t.spawn.x+(e()-.5)*6,T.z=t.spawn.z+(e()-.5)*6,T.y=pn(t,T.x,T.z);s("start",{seed:n.seed})}};function M(m){if(n.phase===Qt.EXTRACTION&&!n.gateOpen&&(n.extractionLeft-=m,n.extractionLeft<=0&&(n.extractionLeft=0,n.gateOpen=!0,s("gateOpen",{}))),n.gateOpen)for(const T of a())Math.hypot(T.x-t.gate.x,T.z-t.gate.z)<5&&(T.escaped=!0,s("escaped",{id:T.id,name:T.name}));for(const T of n.players.values())T.invuln>0&&(T.invuln=Math.max(0,T.invuln-m));for(const T of n.players.values()){if(T.state!=="down")continue;T.downT-=m,n.time-(T._lastRevivedAt??-1/0)<.25||(T.reviveProgress=Math.max(0,T.reviveProgress-m*.6)),T.downT<=0&&d(T,"bleedout")}if(n.phase===Qt.HUNT||n.phase===Qt.EXTRACTION){const T=o(),E=[...n.players.values()].filter(N=>N.escaped);n.players.size>0&&T.length===0&&(n.phase=E.length>0?Qt.ESCAPED:Qt.WIPED,s("over",{phase:n.phase,escaped:E.length}))}}return n.tick=function(m){if(n.time+=m,n.phase!==Qt.HUNT&&n.phase!==Qt.EXTRACTION){M(m);return}if(!n.dayPhase){I(m),P(m),b(m);for(const T of n.beasts)T.kind==="jauria"?A(T,m):C(T,m);n.activeBeasts.alto&&v(m)}M(m)},n.snapshot=function(){return{t:+n.time.toFixed(2),phase:n.phase,beacons:n.beaconsTaken.slice(),extraction:+n.extractionLeft.toFixed(1),radioOn:n.radioOn,gateOpen:n.gateOpen,dayPhase:n.dayPhase,pressure:+n.pressure.toFixed(2),players:[...n.players.values()].map(m=>({id:m.id,n:m.name,x:+m.x.toFixed(2),y:+m.y.toFixed(2),z:+m.z.toFixed(2),fx:+m.fx.toFixed(3),fz:+m.fz.toFixed(3),s:m.state,d:+m.downT.toFixed(1),rp:+m.reviveProgress.toFixed(2),l:m.lightOn?m.lightFocus?2:1:0,e:m.escaped,r:m.ready,run:m.running})),beasts:n.beasts.map(m=>({id:m.id,k:m.kind,x:+m.x.toFixed(2),y:+m.y.toFixed(2),z:+m.z.toFixed(2),fx:+m.fx.toFixed(3),fz:+m.fz.toFixed(3),s:m.state})),alto:n.alto&&n.alto.active?{x:+n.alto.x.toFixed(2),y:+n.alto.y.toFixed(2),z:+n.alto.z.toFixed(2)}:null}},n.drainEvents=function(){const m=n.events;return n.events=[],m},n}function Of(){const i=new Map;return{on(e,t){return(i.get(e)||i.set(e,[]).get(e)).push(t),this},emit(e,t){(i.get(e)||[]).forEach(n=>n(t))}}}function Bf({name:i}){const e=gM(mo((Date.now()^1542469173)>>>0)),t=QM(mM(e)),n=Of(),s="me";t.addPlayer(s,i),t.setReady(s,!0);let r=0;const a={id:s,code:e,world:t.world,snapshot:null,local:!0,host:!0,sim:t,on:n.on.bind(n),start(o){t.start(o)},send(o,l={}){switch(o){case"in":t.setInput(s,l);break;case"pickup":t.pickupBeacon(s,l.index);break;case"radio":t.activateRadio(s);break;case"ping":t.ping(s);break;case"revive":t.revive(s,l.id);break;case"ready":t.setReady(s,l.ready);break;case"start":t.start(l);break;case"restart":t.phase=Qt.LOBBY,t.start(l);break}},update(o){for(r+=Math.min(o,.25);r>=sl;)t.tick(sl),r-=sl;a.snapshot=t.snapshot();const l=t.drainEvents();l.length&&n.emit("events",l),n.emit("snapshot",a.snapshot)},close(){}};return a}function jM({url:i,name:e,code:t,host:n}){const s=Of(),r={id:null,code:t||null,world:null,snapshot:null,local:!1,host:!!n,connected:!1,on:s.on.bind(s),update(){}};let a,o=[];try{a=new WebSocket(i)}catch{return setTimeout(()=>s.emit("error","No se pudo abrir la conexión."),0),r}return a.addEventListener("open",()=>{r.connected=!0,a.send(JSON.stringify({t:"hello",name:e,code:t||null,host:!!n})),o.forEach(l=>a.send(l)),o=[]}),a.addEventListener("message",l=>{let c;try{c=JSON.parse(l.data)}catch{return}switch(c.t){case"welcome":r.id=c.id,r.code=c.code,r.host=c.host,r.seed=c.seed,s.emit("welcome",c);break;case"snap":r.snapshot=c.s,s.emit("snapshot",c.s);break;case"ev":s.emit("events",c.e);break;case"err":s.emit("error",c.m);break}}),a.addEventListener("close",()=>{r.connected=!1,s.emit("closed")}),a.addEventListener("error",()=>s.emit("error","Se perdió la conexión con la partida.")),r.send=function(l,c={}){const h=JSON.stringify({t:l,...c});a.readyState===WebSocket.OPEN?a.send(h):a.readyState===WebSocket.CONNECTING&&o.push(h)},r.start=l=>r.send("start",l),r.close=()=>{try{a.close()}catch{}},r}function ey(){const i=location.protocol==="https:"?"wss:":"ws:";return location.port==="5173"||location.port==="4173"?`${i}//${location.hostname}:8787`:`${i}//${location.host}`}const pt=i=>document.getElementById(i),ot={scene:pt("scene"),loading:pt("screenLoading"),loadingLabel:pt("loadingLabel"),loadBarFill:pt("loadBarFill"),boot:pt("screenBoot"),lobby:pt("screenLobby"),end:pt("screenEnd"),nameInput:pt("nameInput"),codeInput:pt("codeInput"),pickAlto:pt("pickAlto"),pickJauria:pt("pickJauria"),pickCiego:pt("pickCiego"),btnSolo:pt("btnSolo"),btnHost:pt("btnHost"),joinForm:pt("joinForm"),bootNote:pt("bootNote"),lobbyCode:pt("lobbyCode"),roster:pt("roster"),btnReady:pt("btnReady"),btnStart:pt("btnStart"),btnLeave:pt("btnLeave"),lobbyNote:pt("lobbyNote"),endTitle:pt("endTitle"),endText:pt("endText"),endStamp:pt("endStamp"),btnAgain:pt("btnAgain"),btnMenu:pt("btnMenu"),btnReport:pt("btnReport"),touch:pt("touch"),stickZone:pt("stickZone"),stick:pt("stick"),pads:pt("pads"),mapWrap:pt("mapWrap"),mapClose:pt("mapClose"),mapNote:pt("mapNote"),btnSettings:pt("btnSettings"),settingsPanel:pt("settingsPanel"),settingsClose:pt("settingsClose"),qualityRange:pt("qualityRange"),qualityValue:pt("qualityValue"),fpsToggle:pt("fpsToggle"),volSteps:pt("volSteps"),volTrees:pt("volTrees"),volBeasts:pt("volBeasts"),volBeacon:pt("volBeacon"),fpsBadge:pt("fpsBadge")},_t=VM(),Ut=XM();let qt;const li=KM();li.init();function ss(i){try{navigator.vibrate?.(i)}catch{}}const qn=GM(ot.scene,{onBuzz:ss,onUnlock:()=>{re.running&&!_t.mapOpen&&_t.say("Haz clic para volver al bosque.",6)},onLockDenied:()=>{re.running&&_t.say("Haz clic en la pantalla para mirar alrededor.",8)}}),re={session:null,player:null,world:null,running:!1,screen:"boot",myId:null,lastSnap:null,netAcc:0,heartAcc:0,ended:!1,iAmDead:!1,altoWasNear:!1,reviveTarget:null,reviveAcc:0,activeBeasts:{alto:!0,jauria:!0,ciego:!0},telemetryAcc:0},Oc=()=>(ot.nameInput.value||"").trim().slice(0,14)||"Rastreador",zf=()=>({alto:ot.pickAlto.checked,jauria:ot.pickJauria.checked,ciego:ot.pickCiego.checked});function as(i){re.screen=i,ot.boot.hidden=i!=="boot",ot.lobby.hidden=i!=="lobby",ot.end.hidden=i!=="end",_t.show(i==="game"),ot.touch.hidden=!(i==="game"&&qn.touch),_t.setCrosshair(i==="game")}function ty(){ot.btnHost.hidden=!0,document.getElementById("joinForm").hidden=!0,ot.bootNote.innerHTML="Versión de un jugador. El co-op de 2 a 6 existe y funciona, pero necesita el servidor Node del repositorio corriendo: <code>npm start</code>."}function ny(){navigator.maxTouchPoints>0&&!matchMedia("(pointer:fine)").matches&&(qn.setupTouch(ot.stickZone,ot.stick,ot.pads),ot.bootNote.textContent="Joystick para andar, arrastra para mirar.",ot.mapNote.innerHTML="Mapa del coto · toca para cerrar")}function Bc(){_t.mapOpen&&(_t.toggleMap(!1),ss(10))}ot.mapClose.addEventListener("click",i=>{i.stopPropagation(),Bc()});ot.mapWrap.addEventListener("pointerdown",Bc);window.addEventListener("keydown",i=>{i.code==="Escape"&&_t.mapOpen&&(i.preventDefault(),Bc())});function zc(){qt?.resize(),_t.resize()}window.addEventListener("resize",zc);ot.btnSolo.addEventListener("click",()=>{Ut.start(),re.activeBeasts=zf(),li.log("sessionStart",{mode:"solo",activeBeasts:re.activeBeasts});const i=Bf({name:Oc()});kc(i),i.start({activeBeasts:re.activeBeasts}),Hc()});ot.btnHost.addEventListener("click",()=>{Ut.start(),re.activeBeasts=zf(),li.log("sessionStart",{mode:"host",activeBeasts:re.activeBeasts}),kf({host:!0})});ot.joinForm.addEventListener("submit",i=>{i.preventDefault();const e=ot.codeInput.value.trim().toUpperCase();if(e.length!==Tn.roomCodeLength){ot.bootNote.textContent=`El código son ${Tn.roomCodeLength} letras.`;return}Ut.start(),li.log("sessionStart",{mode:"join"}),kf({host:!1,code:e})});function kf({host:i,code:e}){ot.bootNote.textContent="Conectando con el puesto de control…";const t=jM({url:ey(),name:Oc(),code:e,host:i});kc(t),t.on("welcome",n=>{re.world=Nf(n.seed),qt.buildWorld(re.world),ot.lobbyCode.textContent=n.code,ot.btnStart.hidden=!n.host,as("lobby")}),t.on("error",n=>{ot.bootNote.textContent=n,as("boot")}),t.on("closed",()=>{re.screen!=="boot"&&(ot.bootNote.textContent="Se cortó la conexión con la partida.",go())})}ot.btnReady.addEventListener("click",()=>{const i=(re.lastSnap?.players||[]).find(e=>e.id===re.session?.id);re.session?.send("ready",{ready:!i?.r})});ot.btnStart.addEventListener("click",()=>re.session?.send("start",{activeBeasts:re.activeBeasts}));ot.btnLeave.addEventListener("click",go);ot.btnMenu.addEventListener("click",go);ot.btnReport.addEventListener("click",()=>li.download());ot.btnAgain.addEventListener("click",()=>{if(!re.session)return go();if(re.session.local){const i=Bf({name:Oc()});kc(i),i.start({activeBeasts:re.activeBeasts}),Hc()}else re.session.send("restart",{activeBeasts:re.activeBeasts}),as("lobby")});function go(){re.running=!1,re.session?.close(),re.session=null,Ut.stopAll(),document.exitPointerLock?.(),as("boot")}function iy(i){if(re.screen!=="lobby")return;ot.roster.innerHTML=(i.players||[]).map(t=>{const n=t.id===re.session?.id;return`<li class="${t.r?"ready":""} ${n?"me":""}"><b>${Uf(t.n)}</b><span>${t.r?"listo":"esperando"}</span></li>`}).join("");const e=(i.players||[]).length;ot.lobbyNote.textContent=e<2?"Puedes empezar solo, pero nadie te levantará del suelo.":`${e} rastreadores dentro. Máximo ${Tn.maxPlayers}.`}function kc(i){re.session?.close(),re.session=i,re.myId=i.id,i.local&&(re.world=i.world,qt.buildWorld(re.world)),i.on("snapshot",sy),i.on("events",ry)}function sy(i){re.lastSnap=i,re.myId=re.session.id,re.screen==="lobby"&&(iy(i),i.phase===Qt.HUNT&&Hc())}function Hc(){re.world&&(re.player=HM(re.world,qt.camera,qn,{onSound:(i,e)=>{i==="step"&&Ut.step(e.running,e.crouch),i==="click"&&Ut.click()}}),re.running=!0,re.ended=!1,re.iAmDead=!1,qn.enabled=!0,as("game"),zc(),_t.toggleMap(!1),_t.say("Ocho balizas. Enciéndelas todas y sube a la torre. De día vas solo — a la tercera, cae la noche.",7),qn.touch||qn.requestLock())}function ry(i){for(const e of i)switch(li.log(e.type,e),e.type){case"beacon":{Ut.pickup(),e.by===re.myId&&ss([14,40,14]);const t=Tn.beacons-e.count;_t.say(t>0?`${e.name} encendió la baliza de ${e.place}. Quedan ${t}.`:"Las ocho balizas están encendidas. A la torre del guardabosques.",5);break}case"radio":Ut.radio(),_t.say("Radio encendida. La extracción tarda noventa segundos. Aguantad.",6);break;case"roar":Ut.roar(e.x,0,e.z);break;case"down":Ut.scream(),_t.flashHit(),e.id===re.myId&&ss([50,60,120]),_t.say(e.id===re.myId?"Te han derribado.":`${e.name} está en el suelo.`,4);break;case"revived":_t.say(`${e.byName} levantó a ${e.name}.`,3.5);break;case"death":e.id===re.myId?(re.iAmDead=!0,ss([90,50,220]),e.cause==="alto"?(_t.triggerJumpscare(),Ut.jumpscare()):Ut.scream(),_t.say("Se acabó tu turno.",5)):_t.say(`${e.name} no lo consiguió.`,4);break;case"altoAppear":break;case"nightfall":Ut.nightfall(),ss([40,80,40,80,120]),_t.say("Cae la noche. Ya no estás solo en el coto.",6);break;case"gateOpen":Ut.gate(),_t.say("El portón está abierto. Corred.",6);break;case"escaped":e.id===re.myId?Dh(!0,"escapaste"):_t.say(`${e.name} salió del coto.`,4);break;case"over":Dh(e.phase===Qt.ESCAPED,e.phase===Qt.ESCAPED?"parcial":"wipe",e.escaped);break;case"join":re.screen==="lobby"&&_t.say(`${e.name} ha entrado.`,3);break}}function Dh(i,e,t=0){re.ended||(li.log("runEnd",{won:i,kind:e,escaped:t}),li.send(),re.ended=!0,re.running=!1,qn.enabled=!1,document.exitPointerLock?.(),Ut.stopAll(),ot.end.classList.toggle("won",i),e==="escapaste"?(ot.endStamp.textContent="Parte de incidencias · Salida registrada",ot.endTitle.textContent="Fuera del coto",ot.endText.textContent="Cruzaste el portón. El expediente 11-B se cierra con una firma más y ninguna explicación."):e==="parcial"?(ot.endStamp.textContent="Parte de incidencias · Salida parcial",ot.endTitle.textContent=`${t} de vuelta`,ot.endText.textContent="Alguien salió. Los demás siguen dentro y el coto vuelve a estar cerrado."):(ot.endStamp.textContent="Parte de incidencias · Sin novedad",ot.endTitle.textContent="Nadie volvió",ot.endText.textContent="Las balizas se apagaron solas antes del amanecer. Nadie ha vuelto a entrar a comprobarlo."),as("end"))}function ay(i,e){const t=re.player.findInteractable(e,re.myId);if(_t.setUseReady(!!t.kind),t.kind==="revive"){const n=(e.players||[]).find(s=>s.id===t.index)?.rp||0;_t.setPrompt(t.label,"E",n/Jt.reviveTime),re.reviveAcc+=i,qn.holdUse&&re.reviveAcc>=1/Pf&&(re.reviveAcc=0,re.session.send("revive",{id:t.index}))}else t.kind?_t.setPrompt(t.label,"E"):_t.setPrompt(null);for(const n of qn.consumeActions())switch(n){case"light":re.player.toggleLight();break;case"jump":re.player.jump();break;case"map":_t.toggleMap();break;case"ping":re.session.send("ping"),Ut.click();break;case"use":t.kind==="beacon"?re.session.send("pickup",{index:t.index}):t.kind==="radio"&&re.session.send("radio");break}}function oy(i,e){return i?i.gateOpen?"Sal por el portón":i.phase===Qt.EXTRACTION?"Aguanta hasta la extracción":e>=Tn.beacons?"Sube a la torre y pide extracción":`Balizas encendidas · ${e} de ${Tn.beacons}`:""}let Uh=performance.now(),ol=60,ll=0;function Hf(i){requestAnimationFrame(Hf);const e=Math.min(.1,(i-Uh)/1e3);if(Uh=i,e>0&&(ol+=(1/e-ol)*.1),ll+=e,!ot.fpsBadge.hidden&&ll>.25){ll=0;const n=Math.round(ol);ot.fpsBadge.textContent=`${n} FPS`,ot.fpsBadge.classList.toggle("warn",n<35)}re.session?.update(e);const t=re.lastSnap;if(re.running&&re.player&&t){const n=(t.players||[]).find(c=>c.id===re.myId),s=n?.s==="down";re.player.frozen=s||re.iAmDead||_t.mapOpen,re.player.update(e,t),re.netAcc+=e,re.netAcc>=1/Pf&&(re.netAcc=0,re.session.send("in",re.player.netState())),re.telemetryAcc+=e,re.telemetryAcc>=20&&(re.telemetryAcc=0,li.log("heartbeat",{x:+re.player.x.toFixed(1),z:+re.player.z.toFixed(1),sanity:+re.player.sanity.toFixed(2),dayPhase:t.dayPhase,state:n?.s})),!s&&!re.iAmDead?ay(e,t):(qn.consumeActions(),_t.setPrompt(null),_t.setUseReady(!1)),qt.syncActors(t,re.myId,e),qt.setDayPhase(t.dayPhase,e),qt.setFlashlight(re.player.lightOn,re.player.lightFocus),qt.updateHand(i*.001,re.player.bob,re.player.running),qt.tickBeacons(i*.001),qt.tickMist(i*.001),qt.setFov(74+re.player.adrenaline*Ar.fovBonus);const r=re.player.forward();Ut.updateListener(re.player.x,re.player.y+re.player.eye,re.player.z,r.x,r.z),Ut.updateBeaconHums(re.world.beacons,t.beacons,re.player.x,re.player.z);const a=!!t.alto&&Math.hypot(t.alto.x-re.player.x,t.alto.z-re.player.z)<10&&!re.player.staring;a&&!re.altoWasNear&&(Ut.dreadPulse(),ss([30,40,30])),re.altoWasNear=a,Ut.updateTension({sanity:re.player.sanity,staring:re.player.staring,altoDist:re.player.altoDist??999,exhausted:re.player.exhausted,nearest:re.player.nearestBeast??999,adrenaline:re.player.adrenaline});const o=Math.max(re.player.sanity/100,re.player.adrenaline,re.player.nearestBeast<30?1-re.player.nearestBeast/30:0);re.heartAcc-=e,o>.22&&re.heartAcc<=0&&(re.heartAcc=Math.max(.24,1.5-o*1.3),Ut.heartbeat(o));const l=_t.setBeacons(t.beacons);_t.setObjective(oy(t,l)),_t.setMeters(re.player.stamina,re.player.staminaCap,re.player.adrenaline),_t.setNoise(re.player.noiseLevel()),_t.setHidden(re.player.hidden),_t.setSquad(t.players,re.myId),_t.setDowned(s,n?.d??0,(t.players||[]).filter(c=>c.id!==re.myId&&c.s==="alive").length),_t.setTimer(t.phase===Qt.EXTRACTION&&!t.gateOpen?t.extraction:null,"Extracción"),_t.drawMap(re.world,t,{x:re.player.x,z:re.player.z,fx:r.x,fz:r.z},re.myId),_t.drawFx(e,{sanity:re.player.sanity,staring:re.player.staring,adrenaline:re.player.adrenaline,downed:s}),qt.render()}else if(re.screen==="lobby"&&re.world){const n=i*4e-5;qt.camera.position.set(re.world.gate.x*.75+Math.cos(n)*16,re.world.gate.y+4,re.world.gate.z*.75+Math.sin(n)*16),qt.camera.lookAt(re.world.gate.x,re.world.gate.y+2,re.world.gate.z),qt.setFlashlight(!1,!1),qt.tickBeacons(i*.001),qt.render(),_t.drawFx(e,{})}else _t.drawFx(e,{})}async function ly(){const i=dM(t=>{ot.loadBarFill.style.width=`${Math.round(t*100)}%`});let e=null;try{e=await i.loadAll()}catch{ot.loadingLabel.textContent="No se pudo bajar todo — sigue igual."}qt=FM(ot.scene,e),$M({dom:ot,audio:Ut,view:qt,isMobile:qt.isMobile}),window.__coto=Object.assign(re,{view:qt,hud:_t,audio:Ut,input:qn,telemetry:li}),ny(),ty(),zc(),ot.loading.hidden=!0,as("boot"),requestAnimationFrame(Hf)}ly();window.addEventListener("pointerdown",()=>{Ut.start(),Ut.resume()},{once:!0});window.addEventListener("keydown",()=>{Ut.start(),Ut.resume()},{once:!0});
