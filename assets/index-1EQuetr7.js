(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const sc="185",Nf=0,Vc=1,Df=2,Tr=1,Rh=2,vr=3,yi=0,bn=1,xn=2,ii=0,Us=1,Di=2,Wc=3,Xc=4,Uf=5,Ki=100,Ff=101,Of=102,Bf=103,zf=104,kf=200,Hf=201,Gf=202,Vf=203,sl=204,rl=205,Wf=206,Xf=207,Yf=208,qf=209,Kf=210,Zf=211,$f=212,Jf=213,Qf=214,al=0,ol=1,ll=2,ks=3,cl=4,ul=5,hl=6,fl=7,rc=0,jf=1,ed=2,si=0,ac=1,oc=2,lc=3,no=4,cc=5,uc=6,hc=7,Yc="attached",td="detached",Ch=300,ts=301,Hs=302,Ba=303,mo=304,io=306,Fi=1e3,On=1001,qa=1002,jt=1003,Ph=1004,Mr=1005,zt=1006,za=1007,ti=1008,Cn=1009,Ih=1010,Lh=1011,Pr=1012,fc=1013,ri=1014,vn=1015,cn=1016,dc=1017,pc=1018,Ir=1020,Nh=35902,Dh=35899,Uh=1021,Fh=1022,Qt=1023,Si=1026,$i=1027,Ji=1028,mc=1029,Dn=1030,gc=1031,_c=1033,ka=33776,Ha=33777,Ga=33778,Va=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,xl=37492,vl=37496,Ml=37488,yl=37489,Ka=37490,Sl=37491,bl=37808,Tl=37809,El=37810,wl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,Nl=37818,Dl=37819,Ul=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,kl=36283,Hl=36284,Za=36285,Gl=36286,Lr=2300,Nr=2301,go=2302,qc=2303,Kc=2400,Zc=2401,$c=2402,nd=2500,id=0,Oh=1,Vl=2,sd=3200,Dr=0,rd=1,Ni="",Wt="srgb",Kt="srgb-linear",$a="linear",Rt="srgb",hs=7680,Jc=519,ad=512,od=513,ld=514,xc=515,cd=516,ud=517,vc=518,hd=519,Wl=35044,Qc="300 es",ni=2e3,Ur=2001;function fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){const i=Fr("canvas");return i.style.display="block",i}const jc={};function Ja(...i){const e="THREE."+i.shift();console.log(e,...i)}function Bh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=Bh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Bh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){const e=i.join(" ");e in jc||(jc[e]=!0,it(...i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gd={[al]:ol,[ll]:hl,[cl]:fl,[ks]:ul,[ol]:al,[hl]:ll,[fl]:cl,[ul]:ks};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const Er=Math.PI/180,Gs=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Mc(i,e){return(i%e+e)%e}function _d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xd(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function vd(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function Md(i,e=1){return e-Math.abs(Mc(i,e*2)-e)}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Td(i,e){return i+Math.random()*(e-i)}function Ed(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(i){return i*Er}function Rd(i){return i*Gs}function Cd(i){return(i&i-1)===0&&i!==0}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),f=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*f,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*f,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*f,o*c);break;case"XZX":i.set(o*f,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*f,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*f,o*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nd={DEG2RAD:Er,RAD2DEG:Gs,generateUUID:Yn,clamp:vt,euclideanModulo:Mc,mapLinear:_d,inverseLerp:xd,lerp:wr,damp:vd,pingpong:Md,smoothstep:yd,smootherstep:Sd,randInt:bd,randFloat:Td,randFloatSpread:Ed,seededRandom:wd,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:Cd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Ld,normalize:Pt,denormalize:Wn},Bc=class Bc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bc.prototype.isVector2=!0;let $e=Bc;class Ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(h!==M||l!==d||c!==p||f!==x){let g=l*d+c*p+f*x+h*M;g<0&&(d=-d,p=-p,x=-x,M=-M,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),R=Math.sin(S);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R,l=l*m+d*o,c=c*m+p*o,f=f*m+x*o,h=h*m+M*o}else{l=l*m+d*o,c=c*m+p*o,f=f*m+x*o,h=h*m+M*o;const S=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=S,c*=S,f*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+f*h+l*p-c*d,e[t+1]=l*x+f*d+c*h-o*p,e[t+2]=c*x+f*p+o*d-l*h,e[t+3]=f*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"YZX":this._x=d*f*h+c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h-d*p*x;break;case"XZY":this._x=d*f*h-c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h+d*p*x;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zc=class zc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zc.prototype.isVector3=!0;let V=zc;const _o=new V,tu=new Ti,kc=class kc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],p=n[5],x=n[8],M=s[0],g=s[3],m=s[6],S=s[1],R=s[4],T=s[7],I=s[2],P=s[5],D=s[8];return r[0]=a*M+o*S+l*I,r[3]=a*g+o*R+l*P,r[6]=a*m+o*T+l*D,r[1]=c*M+f*S+h*I,r[4]=c*g+f*R+h*P,r[7]=c*m+f*T+h*D,r[2]=d*M+p*S+x*I,r[5]=d*g+p*R+x*P,r[8]=d*m+p*T+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*r,p=c*r-a*l,x=t*h+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(s*c-f*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(f*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kc.prototype.isMatrix3=!0;let ht=kc;const xo=new ht,nu=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){const i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const xt=Dd();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fs;class Ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Fr("canvas")),fs.width=e.width,fs.height=e.height;const s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Od=0;const Mo=new V;class en extends ss{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=On,s=On,r=zt,a=ti,o=Qt,l=Cn,c=en.DEFAULT_ANISOTROPY,f=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Yn(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Ch;en.DEFAULT_ANISOTROPY=1;const Hc=class Hc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],x=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,T=(p+1)/2,I=(m+1)/2,P=(f+d)/4,D=(h+M)/4,y=(x+g)/4;return R>T&&R>I?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=P/n,r=D/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=y/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=D/r,s=y/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-x)*(g-x)+(h-M)*(h-M)+(d-f)*(d-f));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(h-M)/S,this.z=(d-f)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;let Lt=Hc;class Bd extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new en(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zh extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zd extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const to=class to{constructor(e,t,n,s,r,a,o,l,c,f,h,d,p,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,h,d,p,x,M,g)}set(e,t,n,s,r,a,o,l,c,f,h,d,p,x,M,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=d,m[3]=p,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new to().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,M=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,x=c*f,M=c*h;t[0]=d+M*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,x=c*f,M=c*h;t[0]=d-M*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,M=o*h;t[0]=l*f,t[4]=x*c-p,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*f,t[4]=M-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*h+x,t[10]=d-M*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+M,t[5]=a*f,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*f,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Hd)}lookAt(e,t,n){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ei.crossVectors(n,wn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ei.crossVectors(n,wn)),Ei.normalize(),ia.crossVectors(wn,Ei),s[0]=Ei.x,s[4]=ia.x,s[8]=wn.x,s[1]=Ei.y,s[5]=ia.y,s[9]=wn.y,s[2]=Ei.z,s[6]=ia.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],p=n[13],x=n[2],M=n[6],g=n[10],m=n[14],S=n[3],R=n[7],T=n[11],I=n[15],P=s[0],D=s[4],y=s[8],L=s[12],v=s[1],w=s[5],A=s[9],O=s[13],H=s[2],B=s[6],q=s[10],G=s[14],j=s[3],Q=s[7],oe=s[11],me=s[15];return r[0]=a*P+o*v+l*H+c*j,r[4]=a*D+o*w+l*B+c*Q,r[8]=a*y+o*A+l*q+c*oe,r[12]=a*L+o*O+l*G+c*me,r[1]=f*P+h*v+d*H+p*j,r[5]=f*D+h*w+d*B+p*Q,r[9]=f*y+h*A+d*q+p*oe,r[13]=f*L+h*O+d*G+p*me,r[2]=x*P+M*v+g*H+m*j,r[6]=x*D+M*w+g*B+m*Q,r[10]=x*y+M*A+g*q+m*oe,r[14]=x*L+M*O+g*G+m*me,r[3]=S*P+R*v+T*H+I*j,r[7]=S*D+R*w+T*B+I*Q,r[11]=S*y+R*A+T*q+I*oe,r[15]=S*L+R*O+T*G+I*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],M=e[7],g=e[11],m=e[15],S=l*p-c*d,R=o*p-c*h,T=o*d-l*h,I=a*p-c*f,P=a*d-l*f,D=a*h-o*f;return t*(M*S-g*R+m*T)-n*(x*S-g*I+m*P)+s*(x*R-M*I+m*D)-r*(x*T-M*P+g*D)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],M=e[13],g=e[14],m=e[15],S=t*o-n*a,R=t*l-s*a,T=t*c-r*a,I=n*l-s*o,P=n*c-r*o,D=s*c-r*l,y=f*M-h*x,L=f*g-d*x,v=f*m-p*x,w=h*g-d*M,A=h*m-p*M,O=d*m-p*g,H=S*O-R*A+T*w+I*v-P*L+D*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=(o*O-l*A+c*w)*B,e[1]=(s*A-n*O-r*w)*B,e[2]=(M*D-g*P+m*I)*B,e[3]=(d*P-h*D-p*I)*B,e[4]=(l*v-a*O-c*L)*B,e[5]=(t*O-s*v+r*L)*B,e[6]=(g*T-x*D-m*R)*B,e[7]=(f*D-d*T+p*R)*B,e[8]=(a*A-o*v+c*y)*B,e[9]=(n*v-t*A-r*y)*B,e[10]=(x*P-M*T+m*S)*B,e[11]=(h*T-f*P-p*S)*B,e[12]=(o*L-a*w-l*y)*B,e[13]=(t*w-n*L+s*y)*B,e[14]=(M*R-x*I-g*S)*B,e[15]=(f*I-h*R+d*S)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,h=o+o,d=r*c,p=r*f,x=r*h,M=a*f,g=a*h,m=o*h,S=l*c,R=l*f,T=l*h,I=n.x,P=n.y,D=n.z;return s[0]=(1-(M+m))*I,s[1]=(p+T)*I,s[2]=(x-R)*I,s[3]=0,s[4]=(p-T)*P,s[5]=(1-(d+m))*P,s[6]=(g+S)*P,s[7]=0,s[8]=(x+R)*D,s[9]=(g-S)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);const c=1/a,f=1/o,h=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ni,l=!1){const c=this.elements,f=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===ni)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ur)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni,l=!1){const c=this.elements,f=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===ni)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ur)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};to.prototype.isMatrix4=!0;let mt=to;const ds=new V,Bn=new mt,kd=new V(0,0,0),Hd=new V(1,1,1),Ei=new V,ia=new V,wn=new V,su=new mt,ru=new Ti;class bi{constructor(e=0,t=0,n=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gd=0;const au=new V,ps=new Ti,hi=new mt,sa=new V,tr=new V,Vd=new V,Wd=new Ti,ou=new V(1,0,0),lu=new V(0,1,0),cu=new V(0,0,1),uu={type:"added"},Xd={type:"removed"},ms={type:"childadded",child:null},yo={type:"childremoved",child:null};class Nt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new V,t=new bi,n=new Ti,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new ht}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(tr,sa,this.up):hi.lookAt(sa,tr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(hi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),ms.child=e,this.dispatchEvent(ms),ms.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new V(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ct extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Mc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return xt.workingToColorSpace(fn.copy(this),e),Math.round(vt(fn.r*255,0,255))*65536+Math.round(vt(fn.g*255,0,255))*256+Math.round(vt(fn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(fn.copy(this),t);const n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Wt){xt.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,s=fn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ra);const n=wr(wi.h,ra.h,t),s=wr(wi.s,ra.s,t),r=wr(wi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Ve;Ve.NAMES=Hh;class Sc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qd extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zn=new V,fi=new V,To=new V,di=new V,gs=new V,_s=new V,hu=new V,Eo=new V,wo=new V,Ao=new V,Ro=new Lt,Co=new Lt,Po=new Lt;class Un{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),fi.subVectors(n,t),To.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(fi),l=zn.dot(To),c=fi.dot(fi),f=fi.dot(To),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,x=(a*f-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),fi.subVectors(e,t),zn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;gs.subVectors(s,n),_s.subVectors(r,n),Eo.subVectors(e,n);const l=gs.dot(Eo),c=_s.dot(Eo);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,s);const f=gs.dot(wo),h=_s.dot(wo);if(f>=0&&h<=f)return t.copy(s);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(gs,a);Ao.subVectors(e,r);const p=gs.dot(Ao),x=_s.dot(Ao);if(x>=0&&p<=x)return t.copy(r);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(_s,o);const g=f*x-p*h;if(g<=0&&h-f>=0&&p-x>=0)return hu.subVectors(r,s),o=(h-f)/(h-f+(p-x)),t.copy(s).addScaledVector(hu,o);const m=1/(g+M+d);return a=M*m,o=d*m,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),oa.subVectors(this.max,nr),xs.subVectors(e.a,nr),vs.subVectors(e.b,nr),Ms.subVectors(e.c,nr),Ai.subVectors(vs,xs),Ri.subVectors(Ms,vs),Hi.subVectors(xs,Ms);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Hi.z,Hi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Hi.z,0,-Hi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Hi.y,Hi.x,0];return!Io(t,xs,vs,Ms,oa)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,xs,vs,Ms,oa))?!1:(la.crossVectors(Ai,Ri),t=[la.x,la.y,la.z],Io(t,xs,vs,Ms,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new V,new V,new V,new V,new V,new V,new V,new V],kn=new V,aa=new qn,xs=new V,vs=new V,Ms=new V,Ai=new V,Ri=new V,Hi=new V,nr=new V,oa=new V,la=new V,Gi=new V;function Io(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);const o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),f=n.dot(Gi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const xi=Kd();function Kd(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,f=0;for(;(c&8388608)===0;)c<<=1,f-=8388608;c&=-8388609,f+=947912704,r[l]=c|f}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Zd(i){Math.abs(i)>65504&&it("DataUtils.toHalfFloat(): Value out of range."),i=vt(i,-65504,65504),xi.floatView[0]=i;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function $d(i){const e=i>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(i&1023)]+xi.exponentTable[e],xi.floatView[0]}class Vi{static toHalfFloat(e){return Zd(e)}static fromHalfFloat(e){return $d(e)}}const qt=new V,ca=new $e;let Jd=0;class tn extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gh extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Qd=new qn,ir=new V,Lo=new V;class oi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Lo)),this.expandByPoint(ir.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jd=0;const Ln=new mt,No=new Nt,ys=new V,An=new qn,sr=new qn,on=new V;class rn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?Vh:Gh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(An.min,sr.min),An.expandByPoint(on),on.addVectors(An.max,sr.max),An.expandByPoint(on)):(An.expandByPoint(sr.min),An.expandByPoint(sr.max))}An.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)on.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),on.add(ys)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new V,l[y]=new V;const c=new V,f=new V,h=new V,d=new $e,p=new $e,x=new $e,M=new V,g=new V;function m(y,L,v){c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,L),x.fromBufferAttribute(r,v),f.sub(c),h.sub(c),p.sub(d),x.sub(d);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(M.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(w),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(w),o[y].add(M),o[L].add(M),o[v].add(M),l[y].add(g),l[L].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,L=S.length;y<L;++y){const v=S[y],w=v.start,A=v.count;for(let O=w,H=w+A;O<H;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const R=new V,T=new V,I=new V,P=new V;function D(y){I.fromBufferAttribute(s,y),P.copy(I);const L=o[y];R.copy(L),R.sub(I.multiplyScalar(I.dot(L))).normalize(),T.crossVectors(P,L);const w=T.dot(l[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,w)}for(let y=0,L=S.length;y<L;++y){const v=S[y],w=v.start,A=v.count;for(let O=w,H=w+A;O<H;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*f;for(let m=0;m<f;m++)d[x++]=c[p++]}return new tn(d,f,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],h=r[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new V;class Or{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ep=0;class Pn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Us,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xh extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const rr=new V,bs=new V,Ts=new V,Es=new $e,ar=new $e,Yh=new mt,ua=new V,or=new V,ha=new V,fu=new $e,Do=new $e,du=new $e;class tp extends Nt{constructor(e=new Xh){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wh(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Or(n,3,0,!1)),Ss.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;fa(ua.set(-.5,-.5,0),Ts,a,bs,s,r),fa(or.set(.5,-.5,0),Ts,a,bs,s,r),fa(ha.set(.5,.5,0),Ts,a,bs,s,r),fu.set(0,0),Do.set(1,0),du.set(1,1);let o=e.ray.intersectTriangle(ua,or,ha,!1,rr);if(o===null&&(fa(or.set(-.5,.5,0),Ts,a,bs,s,r),Do.set(0,1),o=e.ray.intersectTriangle(ua,ha,or,!1,rr),o===null))return;const l=e.ray.origin.distanceTo(rr);l<e.near||l>e.far||t.push({distance:l,point:rr.clone(),uv:Un.getInterpolation(rr,ua,or,ha,fu,Do,du,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fa(i,e,t,n,s,r){Es.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*Es.x-s*Es.y,ar.y=s*Es.x+r*Es.y):ar.copy(Es),i.copy(e),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(Yh)}const mi=new V,Uo=new V,da=new V,Ci=new V,Fo=new V,pa=new V,Oo=new V;class so{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uo.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=Ci.dot(this.direction),l=-Ci.dot(da),c=Ci.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*l-o,d=a*o-l,x=r*f,h>=0)if(d>=-x)if(d<=x){const M=1/f;h*=M,d*=M,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Uo).addScaledVector(da,d),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){Fo.subVectors(t,e),pa.subVectors(n,e),Oo.crossVectors(Fo,pa);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(pa.crossVectors(Ci,pa));if(l<0)return null;const c=o*this.direction.dot(Fo.cross(Ci));if(c<0||l+c>a)return null;const f=-o*Ci.dot(Oo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pu=new mt,Wi=new so,ma=new oi,mu=new V,ga=new V,_a=new V,xa=new V,Bo=new V,va=new V,gu=new V,Ma=new V;class yt extends Nt{constructor(e=new rn,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(Bo.fromBufferAttribute(h,e),a?va.addScaledVector(Bo,f):va.addScaledVector(Bo.sub(t),f))}t.add(va)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(ma.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ma,mu)===null||Wi.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const g=d[x],m=a[g.materialIndex],S=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let T=S,I=R;T<I;T+=3){const P=o.getX(T),D=o.getX(T+1),y=o.getX(T+2);s=ya(this,m,e,n,c,f,h,P,D,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const S=o.getX(g),R=o.getX(g+1),T=o.getX(g+2);s=ya(this,a,e,n,c,f,h,S,R,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const g=d[x],m=a[g.materialIndex],S=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let T=S,I=R;T<I;T+=3){const P=T,D=T+1,y=T+2;s=ya(this,m,e,n,c,f,h,P,D,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const S=g,R=g+1,T=g+2;s=ya(this,a,e,n,c,f,h,S,R,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function np(i,e,t,n,s,r,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yi,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:i}}function ya(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,_a),i.getVertexPosition(c,xa);const f=np(i,e,t,n,ga,_a,xa,gu);if(f){const h=new V;Un.getBarycoord(gu,ga,_a,xa,h),s&&(f.uv=Un.getInterpolatedAttribute(s,o,l,c,h,new $e)),r&&(f.uv1=Un.getInterpolatedAttribute(r,o,l,c,h,new $e)),a&&(f.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new V),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};Un.getNormal(ga,_a,xa,d.normal),f.face=d,f.barycoord=h}return f}const lr=new Lt,_u=new Lt,xu=new Lt,ip=new Lt,vu=new mt,Sa=new V,zo=new oi,Mu=new mt,ko=new so;class sp extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(s),e.ray.intersectsSphere(zo)!==!1&&(Mu.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===td?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;_u.fromBufferAttribute(s.attributes.skinIndex,e),xu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(lr.copy(t),t.set(0,0,0,0)):(lr.set(...t,1),t.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=xu.getComponent(r);if(a!==0){const o=_u.getComponent(r);vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ip.copy(lr).applyMatrix4(vu),a)}}return t.isVector4&&(t.w=lr.w),t.applyMatrix4(this.bindMatrixInverse)}}class qh extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Br extends en{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,f=jt,h,d){super(null,a,o,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new mt,rp=new mt;class bc{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:rp;yu.multiplyMatrices(o,t[r]),yu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new bc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Br(t,e,e,Qt,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(it("Skeleton: No bone found with UUID:",r),a=new qh),this.bones.push(a),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Xl extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new mt,Su=new mt,ba=[],bu=new qn,ap=new mt,cr=new yt,ur=new oi;class Yl extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),bu.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),ur.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Su.multiplyMatrices(n,ws),cr.matrixWorld=Su,cr.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){const l=ba[a];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,Ji,vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ho=new V,op=new V,lp=new ht;class qi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ho.subVectors(n,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lp.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new oi,cp=new $e(.5,.5),Ta=new V;class Tc{constructor(e=new qi,t=new qi,n=new qi,s=new qi,r=new qi,a=new qi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],p=r[7],x=r[8],M=r[9],g=r[10],m=r[11],S=r[12],R=r[13],T=r[14],I=r[15];if(s[0].setComponents(c-a,p-f,m-x,I-S).normalize(),s[1].setComponents(c+a,p+f,m+x,I+S).normalize(),s[2].setComponents(c+o,p+h,m+M,I+R).normalize(),s[3].setComponents(c-o,p-h,m-M,I-R).normalize(),n)s[4].setComponents(l,d,g,T).normalize(),s[5].setComponents(c-l,p-d,m-g,I-T).normalize();else if(s[4].setComponents(c-l,p-d,m-g,I-T).normalize(),t===ni)s[5].setComponents(c+l,p+d,m+g,I+T).normalize();else if(t===Ur)s[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=cp.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ec extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new V,ja=new V,Tu=new mt,hr=new so,Ea=new oi,Go=new V,Eu=new V;class ro extends Nt{constructor(e=new rn,t=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qa.fromBufferAttribute(t,s-1),ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(ja);e.setAttribute("lineDistance",new Gt(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Tu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=c){const m=f.getX(M),S=f.getX(M+1),R=wa(this,e,hr,l,m,S,M);R&&t.push(R)}if(this.isLineLoop){const M=f.getX(x-1),g=f.getX(p),m=wa(this,e,hr,l,M,g,x-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=c){const m=wa(this,e,hr,l,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){const M=wa(this,e,hr,l,x-1,p,x-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wa(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,ja,Go,Eu)>n)return;Go.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Go);if(!(c<e.near||c>e.far))return{distance:c,point:Eu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const wu=new V,Au=new V;class up extends ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Au);e.setAttribute("lineDistance",new Gt(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hp extends ro{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kh extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ru=new mt,ql=new so,Aa=new oi,Ra=new V;class fp extends Nt{constructor(e=new rn,t=new Kh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Ru.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,M=p;x<M;x++){const g=c.getX(x);Ra.fromBufferAttribute(h,g),Cu(Ra,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,M=p;x<M;x++)Ra.fromBufferAttribute(h,x),Cu(Ra,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cu(i,e,t,n,s,r,a){const o=ql.distanceSqToPoint(i);if(o<t){const l=new V;ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zh extends en{constructor(e=[],t=ts,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wc extends en{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends en{constructor(e,t,n=ri,s,r,a,o=jt,l=jt,c,f=Si,h=1){if(f!==Si&&f!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dp extends Vs{constructor(e,t=ri,n=ts,s,r,a=jt,o=jt,l,c=Si){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $h extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oi extends rn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(h,2));function x(M,g,m,S,R,T,I,P,D,y,L){const v=T/D,w=I/y,A=T/2,O=I/2,H=P/2,B=D+1,q=y+1;let G=0,j=0;const Q=new V;for(let oe=0;oe<q;oe++){const me=oe*w-O;for(let ee=0;ee<B;ee++){const Je=ee*v-A;Q[M]=Je*S,Q[g]=me*R,Q[m]=H,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[g]=0,Q[m]=P>0?1:-1,f.push(Q.x,Q.y,Q.z),h.push(ee/D),h.push(1-oe/y),G+=1}}for(let oe=0;oe<y;oe++)for(let me=0;me<D;me++){const ee=d+me+B*oe,Je=d+me+B*(oe+1),dt=d+(me+1)+B*(oe+1),at=d+(me+1)+B*oe;l.push(ee,Je,at),l.push(Je,dt,at),j+=6}o.addGroup(p,j,L),p+=j,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class un extends rn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],d=[],p=[];let x=0;const M=[],g=n/2;let m=0;S(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function S(){const T=new V,I=new V;let P=0;const D=(t-e)/n;for(let y=0;y<=r;y++){const L=[],v=y/r,w=v*(t-e)+e;for(let A=0;A<=s;A++){const O=A/s,H=O*l+o,B=Math.sin(H),q=Math.cos(H);I.x=w*B,I.y=-v*n+g,I.z=w*q,h.push(I.x,I.y,I.z),T.set(B,D,q).normalize(),d.push(T.x,T.y,T.z),p.push(O,1-v),L.push(x++)}M.push(L)}for(let y=0;y<s;y++)for(let L=0;L<r;L++){const v=M[L][y],w=M[L+1][y],A=M[L+1][y+1],O=M[L][y+1];(e>0||L!==0)&&(f.push(v,w,O),P+=3),(t>0||L!==r-1)&&(f.push(w,A,O),P+=3)}c.addGroup(m,P,0),m+=P}function R(T){const I=x,P=new $e,D=new V;let y=0;const L=T===!0?e:t,v=T===!0?1:-1;for(let A=1;A<=s;A++)h.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),x++;const w=x;for(let A=0;A<=s;A++){const H=A/s*l+o,B=Math.cos(H),q=Math.sin(H);D.x=L*q,D.y=g*v,D.z=L*B,h.push(D.x,D.y,D.z),d.push(0,v,0),P.x=B*.5+.5,P.y=q*.5*v+.5,p.push(P.x,P.y),x++}for(let A=0;A<s;A++){const O=I+A,H=w+A;T===!0?f.push(H,H+1,O):f.push(H+1,H,O),y+=3}c.addGroup(m,y,T===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends un{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends rn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const R=new V,T=new V,I=new V;for(let P=0;P<t.length;P+=3)p(t[P+0],R),p(t[P+1],T),p(t[P+2],I),l(R,T,I,S)}function l(S,R,T,I){const P=I+1,D=[];for(let y=0;y<=P;y++){D[y]=[];const L=S.clone().lerp(T,y/P),v=R.clone().lerp(T,y/P),w=P-y;for(let A=0;A<=w;A++)A===0&&y===P?D[y][A]=L:D[y][A]=L.clone().lerp(v,A/w)}for(let y=0;y<P;y++)for(let L=0;L<2*(P-y)-1;L++){const v=Math.floor(L/2);L%2===0?(d(D[y][v+1]),d(D[y+1][v]),d(D[y][v])):(d(D[y][v+1]),d(D[y+1][v+1]),d(D[y+1][v]))}}function c(S){const R=new V;for(let T=0;T<r.length;T+=3)R.x=r[T+0],R.y=r[T+1],R.z=r[T+2],R.normalize().multiplyScalar(S),r[T+0]=R.x,r[T+1]=R.y,r[T+2]=R.z}function f(){const S=new V;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];const T=g(S)/2/Math.PI+.5,I=m(S)/Math.PI+.5;a.push(T,1-I)}x(),h()}function h(){for(let S=0;S<a.length;S+=6){const R=a[S+0],T=a[S+2],I=a[S+4],P=Math.max(R,T,I),D=Math.min(R,T,I);P>.9&&D<.1&&(R<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),I<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,R){const T=S*3;R.x=e[T+0],R.y=e[T+1],R.z=e[T+2]}function x(){const S=new V,R=new V,T=new V,I=new V,P=new $e,D=new $e,y=new $e;for(let L=0,v=0;L<r.length;L+=9,v+=6){S.set(r[L+0],r[L+1],r[L+2]),R.set(r[L+3],r[L+4],r[L+5]),T.set(r[L+6],r[L+7],r[L+8]),P.set(a[v+0],a[v+1]),D.set(a[v+2],a[v+3]),y.set(a[v+4],a[v+5]),I.copy(S).add(R).add(T).divideScalar(3);const w=g(I);M(P,v+0,S,w),M(D,v+2,R,w),M(y,v+4,T,w)}}function M(S,R,T,I){I<0&&S.x===1&&(a[R]=S.x-1),T.x===0&&T.z===0&&(a[R]=I/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.vertices,e.indices,e.radius,e.detail)}}class ao extends Ac{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ao(e.radius,e.detail)}}class ns extends rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=e/o,d=t/l,p=[],x=[],M=[],g=[];for(let m=0;m<f;m++){const S=m*d-a;for(let R=0;R<c;R++){const T=R*h-r;x.push(T,-S,0),M.push(0,0,1),g.push(R/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const R=S+c*m,T=S+c*(m+1),I=S+1+c*(m+1),P=S+1+c*m;p.push(R,T,P),p.push(T,I,P)}this.setIndex(p),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qi extends rn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new V,d=new V,p=[],x=[],M=[],g=[];for(let m=0;m<=n;m++){const S=[],R=m/n,T=a+R*o,I=e*Math.cos(T),P=Math.sqrt(e*e-I*I);let D=0;m===0&&a===0?D=.5/t:m===n&&l===Math.PI&&(D=-.5/t);for(let y=0;y<=t;y++){const L=y/t,v=s+L*r;h.x=-P*Math.cos(v),h.y=I,h.z=P*Math.sin(v),x.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),g.push(L+D,1-R),S.push(c++)}f.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const R=f[m][S+1],T=f[m][S],I=f[m+1][S],P=f[m+1][S+1];(m!==0||a>0)&&p.push(R,T,P),(m!==n-1||l<Math.PI)&&p.push(T,I,P)}this.setIndex(p),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Pu(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const zr={clone:Ws,merge:gn};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qh extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bi extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends Bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kl extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=rc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xp extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vp extends Pn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ca(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Iu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function yp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ys{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Sp extends Ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=e,o=2*t-n;break;case $c:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:a=e,l=2*n-t;break;case $c:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),M=x*x,g=M*x,m=-d*g+2*d*M-d*x,S=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*x+1,R=(-1-p)*g+(1.5+p)*M+.5*x,T=p*g-p*M;for(let I=0;I!==o;++I)r[I]=m*a[f+I]+S*a[c+I]+R*a[l+I]+T*a[h+I];return r}}class bp extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),h=1-f;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*f;return r}}class Tp extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ep extends Ys{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){const x=(n-t)/(s-t),M=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*x;return r}const d=o*2,p=e-1;for(let x=0;x!==o;++x){const M=a[c+x],g=a[l+x],m=p*d+x*2,S=h[m],R=h[m+1],T=e*d+x*2,I=f[T],P=f[T+1];let D=(n-t)/(s-t),y,L,v,w,A;for(let O=0;O<8;O++){y=D*D,L=y*D,v=1-D,w=v*v,A=w*v;const B=A*t+3*w*D*S+3*v*y*I+L*s-n;if(Math.abs(B)<1e-10)break;const q=3*w*(S-t)+6*v*D*(I-S)+3*y*(s-I);if(Math.abs(q)<1e-10)break;D=D-B/q,D=Math.max(0,Math.min(1,D))}r[x]=A*M+3*w*D*R+3*v*y*P+L*g}return r}}class Kn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ep(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&dd(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let x=0;x!==n;++x){const M=t[h+x];if(M!==t[d+x]||M!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Nr;class qs extends Kn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Lr;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends Kn{constructor(e,t,n,s){super(e,t,n,s)}}jh.prototype.ValueTypeName="color";class kr extends Kn{constructor(e,t,n,s){super(e,t,n,s)}}kr.prototype.ValueTypeName="number";class wp extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let f=c+o;c!==f;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Hr extends Kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}}Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Kn{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Lr;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Kn{constructor(e,t,n,s){super(e,t,n,s)}}eo.prototype.ValueTypeName="vector";class Ap{constructor(e="",t=-1,n=[],s=nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const f=Mp(l);l=Iu(l,1,f),c=Iu(c,1,f),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new kr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],f=c.name.match(r);if(f&&f.length>1){const h=f[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Rp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return eo;case"color":return jh;case"quaternion":return Hr;case"bool":case"boolean":return qs;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rp(i.type);if(i.times===void 0){const t=[],n=[];yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Pp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ip=new Pp;class rs{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi={};class Lp extends Error{constructor(e,t){super(e),this.response=t}}class Rc extends rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=gi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,x=p!==0;let M=0;const g=new ReadableStream({start(m){S();function S(){h.read().then(({done:R,value:T})=>{if(R)m.close();else{M+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:p});for(let P=0,D=f.length;P<D;P++){const y=f[P];y.onProgress&&y.onProgress(I)}m.enqueue(T),S()}},R=>{m.error(R)})}}});return new Response(g)}else throw new Lp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{vi.add(`file:${e}`,c);const f=gi[e];delete gi[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const f=gi[e];if(f===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class Np extends rs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=As.get(a);h===void 0&&(h=[],As.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Fr("img");function l(){f(),t&&t(this);const h=As.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}As.delete(this),r.manager.itemEnd(e)}function c(h){f(),s&&s(h),vi.remove(`image:${e}`);const d=As.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}As.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Dp extends rs{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Br,o=new Rc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(f){s!==void 0?s(f):ot(f);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new Br;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:On,e.wrapT=t.wrapT!==void 0?t.wrapT:On,e.magFilter=t.magFilter!==void 0?t.magFilter:zt,e.minFilter=t.minFilter!==void 0?t.minFilter:zt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=ti),t.mipmapCount===1&&(e.minFilter=zt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class ef extends rs{constructor(e){super(e)}load(e,t,n,s){const r=new en,a=new Np(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class oo extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Up extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vo=new mt,Nu=new V,Du=new V;class Cc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ur||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pa=new V,Ia=new Ti,$n=new V;class tf extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Ia,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,Ia,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new V,Uu=new $e,Fu=new $e;class _n extends tf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Fu),t.subVectors(Fu,Uu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fp extends Cc{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zl extends oo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Op extends Cc{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class nf extends oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vr extends tf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bp extends Cc{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sf extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Bp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Rr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wo=new WeakMap;class zp extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Wo.has(a)===!0?(s&&s(Wo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Wo.set(l,c),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=-90,Cs=1;class kp extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new _n(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const a=new _n(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new _n(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new _n(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new _n(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hp extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vp(){this._document.hidden===!1&&this.reset()}const Pc="\\[\\]\\.:\\/",Wp=new RegExp("["+Pc+"]","g"),Ic="[^"+Pc+"]",Xp="[^"+Pc.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Ic),qp=/(WCOD+)?/.source.replace("WCOD",Xp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),$p=new RegExp("^"+Yp+qp+Kp+Zp+"$"),Jp=["material","materials","bones","map"];class Qp{constructor(e,t,n){const s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){const t=$p.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=Qp;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Gc=class Gc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Gc.prototype.isMatrix2=!0;let Ou=Gc;function Bu(i,e,t,n){const s=jp(n);switch(t){case Uh:return i*e;case Ji:return i*e/s.components*s.byteLength;case mc:return i*e/s.components*s.byteLength;case Dn:return i*e*2/s.components*s.byteLength;case gc:return i*e*2/s.components*s.byteLength;case Fh:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case _c:return i*e*4/s.components*s.byteLength;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case dl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case _l:case xl:case Ml:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:case Ka:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Za:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jp(i){switch(i){case Cn:case Ih:return{byteLength:1,components:1};case Pr:case Lh:case cn:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case ri:case fc:case vn:return{byteLength:4,components:1};case Nh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);function rf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function em(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],M=h[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const M=h[p];i.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,jm=`uniform sampler2D dfgLUT;
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:tm,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:am,aomap_fragment:om,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:um,begin_vertex:hm,beginnormal_vertex:fm,bsdfs:dm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:xm,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:ym,color_pars_vertex:Sm,color_vertex:bm,common:Tm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:wm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Lm,envmap_fragment:Nm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:zm,fog_fragment:km,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:Ym,lights_toon_fragment:Km,lights_toon_pars_fragment:Zm,lights_phong_fragment:$m,lights_phong_pars_fragment:Jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:jm,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,lightprobes_pars_fragment:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:u0,map_particle_pars_fragment:h0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:_0,morphtarget_vertex:x0,normal_fragment_begin:v0,normal_fragment_maps:M0,normal_pars_fragment:y0,normal_pars_vertex:S0,normal_vertex:b0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:N0,dithering_pars_fragment:D0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:z0,shadowmask_pars_fragment:k0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:Y0,tonemapping_fragment:q0,tonemapping_pars_fragment:K0,transmission_fragment:Z0,transmission_pars_fragment:$0,uv_pars_fragment:J0,uv_pars_vertex:Q0,uv_vertex:j0,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distance_vert:cg,distance_frag:ug,equirect_vert:hg,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:yg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:wg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Ng,sprite_frag:Dg},ze={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ei={basic:{uniforms:gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ve(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:gn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:gn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:gn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:gn([ze.common,ze.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:gn([ze.lights,ze.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ei.physical={uniforms:gn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const La={r:0,b:0,g:0},Ug=new mt,af=new ht;af.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e,t,n,s,r){const a=new Ve(0);let o=s===!0?0:1,l,c,f=null,h=0,d=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const T=S.backgroundBlurriness>0;R=e.get(R,T)}return R}function x(S){let R=!1;const T=p(S);T===null?g(a,o):T&&T.isColor&&(g(T,1),R=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,R){const T=p(R);T&&(T.isCubeTexture||T.mapping===io)?(c===void 0&&(c=new yt(new Oi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ws(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=xt.getTransfer(T.colorSpace)!==Rt,(f!==T||h!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new yt(new ns(2,2),new pn({name:"BackgroundMaterial",uniforms:Ws(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=xt.getTransfer(T.colorSpace)!==Rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,R){S.getRGB(La,Jh(i)),t.buffers.color.setClear(La.r,La.g,La.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:x,addToRenderList:M,dispose:m}}function Og(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,A,O,H,B){let q=!1;const G=h(w,H,O,A);r!==G&&(r=G,c(r.object)),q=p(w,H,O,B),q&&x(w,H,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(w,A,O,H),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function h(w,A,O,H){const B=H.wireframe===!0;let q=n[A.id];q===void 0&&(q={},n[A.id]=q);const G=w.isInstancedMesh===!0?w.id:0;let j=q[G];j===void 0&&(j={},q[G]=j);let Q=j[O.id];Q===void 0&&(Q={},j[O.id]=Q);let oe=Q[B];return oe===void 0&&(oe=d(l()),Q[B]=oe),oe}function d(w){const A=[],O=[],H=[];for(let B=0;B<t;B++)A[B]=0,O[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:H,object:w,attributes:{},index:null}}function p(w,A,O,H){const B=r.attributes,q=A.attributes;let G=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){const me=B[Q];let ee=q[Q];if(ee===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),me===void 0||me.attribute!==ee||ee&&me.data!==ee.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function x(w,A,O,H){const B={},q=A.attributes;let G=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){let me=q[Q];me===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const ee={};ee.attribute=me,me&&me.data&&(ee.data=me.data),B[Q]=ee,G++}r.attributes=B,r.attributesNum=G,r.index=H}function M(){const w=r.newAttributes;for(let A=0,O=w.length;A<O;A++)w[A]=0}function g(w){m(w,0)}function m(w,A){const O=r.newAttributes,H=r.enabledAttributes,B=r.attributeDivisors;O[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),B[w]!==A&&(i.vertexAttribDivisor(w,A),B[w]=A)}function S(){const w=r.newAttributes,A=r.enabledAttributes;for(let O=0,H=A.length;O<H;O++)A[O]!==w[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function R(w,A,O,H,B,q,G){G===!0?i.vertexAttribIPointer(w,A,O,B,q):i.vertexAttribPointer(w,A,O,H,B,q)}function T(w,A,O,H){M();const B=H.attributes,q=O.getAttributes(),G=A.defaultAttributeValues;for(const j in q){const Q=q[j];if(Q.location>=0){let oe=B[j];if(oe===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),oe!==void 0){const me=oe.normalized,ee=oe.itemSize,Je=e.get(oe);if(Je===void 0)continue;const dt=Je.buffer,at=Je.type,fe=Je.bytesPerElement,pe=at===i.INT||at===i.UNSIGNED_INT||oe.gpuType===fc;if(oe.isInterleavedBufferAttribute){const Me=oe.data,tt=Me.stride,$=oe.offset;if(Me.isInstancedInterleavedBuffer){for(let se=0;se<Q.locationSize;se++)m(Q.location+se,Me.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let se=0;se<Q.locationSize;se++)g(Q.location+se);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let se=0;se<Q.locationSize;se++)R(Q.location+se,ee/Q.locationSize,at,me,tt*fe,($+ee/Q.locationSize*se)*fe,pe)}else{if(oe.isInstancedBufferAttribute){for(let Me=0;Me<Q.locationSize;Me++)m(Q.location+Me,oe.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<Q.locationSize;Me++)g(Q.location+Me);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Me=0;Me<Q.locationSize;Me++)R(Q.location+Me,ee/Q.locationSize,at,me,ee*fe,ee/Q.locationSize*Me*fe,pe)}}else if(G!==void 0){const me=G[j];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Q.location,me);break;case 3:i.vertexAttrib3fv(Q.location,me);break;case 4:i.vertexAttrib4fv(Q.location,me);break;default:i.vertexAttrib1fv(Q.location,me)}}}}S()}function I(){L();for(const w in n){const A=n[w];for(const O in A){const H=A[O];for(const B in H){const q=H[B];for(const G in q)f(q[G].object),delete q[G];delete H[B]}}delete n[w]}}function P(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const O in A){const H=A[O];for(const B in H){const q=H[B];for(const G in q)f(q[G].object),delete q[G];delete H[B]}}delete n[w.id]}function D(w){for(const A in n){const O=n[A];for(const H in O){const B=O[H];if(B[w.id]===void 0)continue;const q=B[w.id];for(const G in q)f(q[G].object),delete q[G];delete B[w.id]}}}function y(w){for(const A in n){const O=n[A],H=w.isInstancedMesh===!0?w.id:0,B=O[H];if(B!==void 0){for(const q in B){const G=B[q];for(const j in G)f(G[j].object),delete G[j];delete B[q]}delete O[H],Object.keys(O).length===0&&delete n[A]}}}function L(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function Bg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Qt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const y=D===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Cn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==vn&&!y)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(it("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:T,maxSamples:I,samples:P}}function kg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qi,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||x===null||x.length===0||r&&!g)r?f(null):c();else{const S=r?0:n,R=S*4;let T=m.clippingState||null;l.value=T,T=f(x,d,R,p);for(let I=0;I!==R;++I)T[I]=t[I];m.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,x){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const m=p+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,T=p;R!==M;++R,T+=4)a.copy(h[R]).applyMatrix4(S,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Ui=4,zu=[.125,.215,.35,.446,.526,.582],Zi=20,Hg=256,fr=new Vr,ku=new Ve;let Xo=null,Yo=0,qo=0,Ko=!1;const Gg=new V;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Gg}=r;Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,Yo,qo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:cn,format:Qt,colorSpace:Kt,depthBuffer:!1},s=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Xg(r,e,t),this._ggxMaterial=Wg(r,e,t)}return s}_compileMaterial(e){const t=new yt(new rn,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,s,r){const l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ku),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new Oi,new ln({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(ku),m=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[R],r.y,r.z)):T===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[R]));const I=this._cubeSize;Ps(s,T*I,R>2?I:0,I,I),h.setRenderTarget(s),m&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ts||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:x}=this,M=this._sizeLods[n],g=3*M*(n>x-Ui?n-x+Ui:0),m=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Ps(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ps(e,g,m,3*M,2*M),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),M=r/x,g=isFinite(r)?1+Math.floor(f*M):Zi;g>Zi&&it(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const m=[];let S=0;for(let D=0;D<Zi;++D){const y=D/M,L=Math.exp(-y*y/2);m.push(L),D===0?S+=L:D<g&&(S+=2*L)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=x,d.mipInt.value=R-n;const T=this._sizeLods[s],I=3*T*(s>R-Ui?s-R+Ui:0),P=4*(this._cubeSize-T);Ps(t,I,P,3*T,2*T),l.setRenderTarget(t),l.render(h,fr)}}function Vg(i){const e=[],t=[],n=[];let s=i;const r=i-Ui+1+zu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ui?l=zu[a-i+Ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,M=3,g=2,m=1,S=new Float32Array(M*x*p),R=new Float32Array(g*x*p),T=new Float32Array(m*x*p);for(let P=0;P<p;P++){const D=P%3*2/3-1,y=P>2?0:-1,L=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];S.set(L,M*x*P),R.set(d,g*x*P);const v=[P,P,P,P,P,P];T.set(v,m*x*P)}const I=new rn;I.setAttribute("position",new tn(S,M)),I.setAttribute("uv",new tn(R,g)),I.setAttribute("faceIndex",new tn(T,m)),n.push(new yt(I,null)),s>Ui&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hu(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wg(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xg(i,e,t){const n=new Float32Array(Zi),s=new V(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Gu(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}class of extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ii});r.uniforms.tEquirect.value=t;const a=new yt(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=zt),new kp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Yg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ba||p===mo)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const M=new of(x.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,x=p===Ba||p===mo,M=p===ts||p===Hs;if(x||M){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new $l(i)),g=x?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return x&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new $l(i)),g=x?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,p){return p===Ba?d.mapping=ts:p===mo&&(d.mapping=Hs),d}function l(d){let p=0;const x=6;for(let M=0;M<x;M++)d[M]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function qg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const S=p.array;M=p.version;for(let R=0,T=S.length;R<T;R+=3){const I=S[R+0],P=S[R+1],D=S[R+2];d.push(I,P,P,D,D,I)}}else{const S=x.array;M=x.version;for(let R=0,T=S.length/3-1;R<T;R+=3){const I=R+0,P=R+1,D=R+2;d.push(I,P,P,D,D,I)}}const g=new(x.count>=65535?Vh:Gh)(d,1);g.version=M;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Zg(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*a,p),t.update(d,n,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,p);let M=0;for(let g=0;g<p;g++)M+=d[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function $g(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,e,t){const n=new WeakMap,s=new Lt;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;x===!0&&(T=1),M===!0&&(T=2),g===!0&&(T=3);let I=o.attributes.position.count*T,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*P*4*h),y=new zh(D,I,P,h);y.type=vn,y.needsUpdate=!0;const L=T*4;for(let w=0;w<h;w++){const A=m[w],O=S[w],H=R[w],B=I*P*4*w;for(let q=0;q<A.count;q++){const G=q*L;x===!0&&(s.fromBufferAttribute(A,q),D[B+G+0]=s.x,D[B+G+1]=s.y,D[B+G+2]=s.z,D[B+G+3]=0),M===!0&&(s.fromBufferAttribute(O,q),D[B+G+4]=s.x,D[B+G+5]=s.y,D[B+G+6]=s.z,D[B+G+7]=0),g===!0&&(s.fromBufferAttribute(H,q),D[B+G+8]=s.x,D[B+G+9]=s.y,D[B+G+10]=s.z,D[B+G+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:y,size:new $e(I,P)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(i,e,t,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return d}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const jg={[ac]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[lc]:"CINEON_TONE_MAPPING",[no]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[cc]:"CUSTOM_TONE_MAPPING"};function e_(i,e,t,n,s,r){const a=new Tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Vs(e,t):void 0}),o=new Tn(e,t,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new rn;l.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const c=new Qh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new yt(l,c),h=new Vr(-1,1,1,-1,0,1);let d=null,p=null,x=!1,M,g=null,m=[],S=!1;this.setSize=function(R,T){a.setSize(R,T),o.setSize(R,T);for(let I=0;I<m.length;I++){const P=m[I];P.setSize&&P.setSize(R,T)}},this.setEffects=function(R){m=R,S=m.length>0&&m[0].isRenderPass===!0;const T=a.width,I=a.height;for(let P=0;P<m.length;P++){const D=m[P];D.setSize&&D.setSize(T,I)}},this.begin=function(R,T){if(x||R.toneMapping===si&&m.length===0)return!1;if(g=T,T!==null){const I=T.width,P=T.height;(a.width!==I||a.height!==P)&&this.setSize(I,P)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=si,!0},this.hasRenderPass=function(){return S},this.end=function(R,T){R.toneMapping=M,x=!0;let I=a,P=o;for(let D=0;D<m.length;D++){const y=m[D];if(y.enabled!==!1&&(y.render(R,P,I,T),y.needsSwap!==!1)){const L=I;I=P,P=L}}if(d!==R.outputColorSpace||p!==R.toneMapping){d=R.outputColorSpace,p=R.toneMapping,c.defines={},xt.getTransfer(d)===Rt&&(c.defines.SRGB_TRANSFER="");const D=jg[p];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=I.texture,R.setRenderTarget(g),R.render(f,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const lf=new en,Jl=new Vs(1,1),cf=new zh,uf=new zd,hf=new Zh,Wu=[],Xu=[],Yu=new Float32Array(16),qu=new Float32Array(9),Ku=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function r_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),sn(t,n)}}function a_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),sn(t,n)}}function o_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),sn(t,n)}}function l_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function f_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function g_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=t.isReversedDepthBuffer()?vc:xc,r=Jl):r=lf,t.setTexture2D(e||r,s)}function __(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uf,s)}function x_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function v_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cf,s)}function M_(i){switch(i){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return u_;case 35669:case 35673:return h_;case 5125:return f_;case 36294:return d_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return v_}}function y_(i,e){i.uniform1fv(this.addr,e)}function S_(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function b_(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function T_(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function E_(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w_(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A_(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R_(i,e){i.uniform1iv(this.addr,e)}function C_(i,e){i.uniform2iv(this.addr,e)}function P_(i,e){i.uniform3iv(this.addr,e)}function I_(i,e){i.uniform4iv(this.addr,e)}function L_(i,e){i.uniform1uiv(this.addr,e)}function N_(i,e){i.uniform2uiv(this.addr,e)}function D_(i,e){i.uniform3uiv(this.addr,e)}function U_(i,e){i.uniform4uiv(this.addr,e)}function F_(i,e,t){const n=this.cache,s=e.length,r=co(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jl:a=lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function O_(i,e,t){const n=this.cache,s=e.length,r=co(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uf,r[a])}function B_(i,e,t){const n=this.cache,s=e.length,r=co(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hf,r[a])}function z_(i,e,t){const n=this.cache,s=e.length,r=co(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cf,r[a])}function k_(i){switch(i){case 5126:return y_;case 35664:return S_;case 35665:return b_;case 35666:return T_;case 35674:return E_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return N_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class H_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}}class G_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}}class V_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Zu(i,e){i.seq.push(e),i.map[e.id]=e}function W_(i,e,t){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zu(t,c===void 0?new H_(o,i,e):new G_(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new V_(o),Zu(t,h)),t=h}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);W_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $u(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X_=37297;let Y_=0;function q_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ju=new ht;function K_(i){xt._getMatrix(Ju,xt.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q_(i.getShaderSource(e),o)}else return r}function Z_(i,e){const t=K_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $_={[ac]:"Linear",[oc]:"Reinhard",[lc]:"Cineon",[no]:"ACESFilmic",[uc]:"AgX",[hc]:"Neutral",[cc]:"Custom"};function J_(i,e){const t=$_[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Na=new V;function Q_(){xt.getLuminanceCoefficients(Na);const i=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function ex(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function ju(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(nx,sx)}const ix=new Map;function sx(i,e){let t=gt[e];if(t===void 0){const n=ix.get(e);if(n!==void 0)t=gt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ql(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(rx,ax)}function ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const ox={[Tr]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function lx(i){return ox[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cx={[ts]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function ux(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const hx={[Hs]:"ENVMAP_MODE_REFRACTION"};function fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dx={[rc]:"ENVMAP_BLENDING_MULTIPLY",[jf]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dx[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lx(t),c=ux(t),f=fx(t),h=px(t),d=mx(t),p=j_(t),x=ex(r),M=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?gt.tonemapping_pars_fragment:"",t.toneMapping!==si?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Ql(a),a=ju(a,t),a=eh(a,t),o=Ql(o),o=ju(o,t),o=eh(o,t),a=th(a),o=th(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=S+g+a,T=S+m+o,I=$u(s,s.VERTEX_SHADER,R),P=$u(s,s.FRAGMENT_SHADER,T);s.attachShader(M,I),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(w){if(i.debug.checkShaderErrors){const A=s.getProgramInfoLog(M)||"",O=s.getShaderInfoLog(I)||"",H=s.getShaderInfoLog(P)||"",B=A.trim(),q=O.trim(),G=H.trim();let j=!0,Q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,I,P);else{const oe=Qu(s,I,"vertex"),me=Qu(s,P,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+oe+`
`+me)}else B!==""?it("WebGLProgram: Program Info Log:",B):(q===""||G==="")&&(Q=!1);Q&&(w.diagnostics={runnable:j,programLog:B,vertexShader:{log:q,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(I),s.deleteShader(P),y=new Wa(s,M),L=tx(s,M)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,X_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=P,this}let _x=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vx(e),t.set(e,n)),n}}class vx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function Mx(i){return i===Dn||i===Ka||i===Za}function yx(i,e,t,n,s,r){const a=new kh,o=new xx,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,L,v,w,A,O){const H=w.fog,B=A.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?w.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||q,G),Q=j&&j.mapping===io?j.image.height:null,oe=p[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&it("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=me!==void 0?me.length:0;let Je=0;B.morphAttributes.position!==void 0&&(Je=1),B.morphAttributes.normal!==void 0&&(Je=2),B.morphAttributes.color!==void 0&&(Je=3);let dt,at,fe,pe;if(oe){const Fe=ei[oe];dt=Fe.vertexShader,at=Fe.fragmentShader}else{dt=y.vertexShader,at=y.fragmentShader;const Fe=o.getVertexShaderStage(y),At=o.getFragmentShaderStage(y);o.update(y,Fe,At),fe=Fe.id,pe=At.id}const Me=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),$=A.isInstancedMesh===!0,se=A.isBatchedMesh===!0,Ue=!!y.map,ke=!!y.matcap,Ze=!!j,Ee=!!y.aoMap,_e=!!y.lightMap,Ae=!!y.bumpMap&&y.wireframe===!1,st=!!y.normalMap,Qe=!!y.displacementMap,nt=!!y.emissiveMap,qe=!!y.metalnessMap,rt=!!y.roughnessMap,z=y.anisotropy>0,Ft=y.clearcoat>0,_t=y.dispersion>0,F=y.iridescence>0,E=y.sheen>0,Z=y.transmission>0,ie=z&&!!y.anisotropyMap,ae=Ft&&!!y.clearcoatMap,Re=Ft&&!!y.clearcoatNormalMap,Ie=Ft&&!!y.clearcoatRoughnessMap,le=F&&!!y.iridescenceMap,de=F&&!!y.iridescenceThicknessMap,Le=E&&!!y.sheenColorMap,Be=E&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ce=!!y.specularColorMap,Se=!!y.specularIntensityMap,Te=Z&&!!y.transmissionMap,Oe=Z&&!!y.thicknessMap,k=!!y.gradientMap,te=!!y.alphaMap,ue=y.alphaTest>0,Pe=!!y.alphaHash,Ne=!!y.extensions;let xe=si;y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Ye={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:dt,fragmentShader:at,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:se,batchingColor:se&&A._colorsTexture!==null,instancing:$,instancingColor:$&&A.instanceColor!==null,instancingMorph:$&&A.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:ke,envMap:Ze,envMapMode:Ze&&j.mapping,envMapCubeUVHeight:Q,aoMap:Ee,lightMap:_e,bumpMap:Ae,normalMap:st,displacementMap:Qe,emissiveMap:nt,normalMapObjectSpace:st&&y.normalMapType===rd,normalMapTangentSpace:st&&y.normalMapType===Dr,packedNormalMap:st&&y.normalMapType===Dr&&Mx(y.normalMap.format),metalnessMap:qe,roughnessMap:rt,anisotropy:z,anisotropyMap:ie,clearcoat:Ft,clearcoatMap:ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,dispersion:_t,iridescence:F,iridescenceMap:le,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Le,sheenRoughnessMap:Be,specularMap:Ce,specularColorMap:ce,specularIntensityMap:Se,transmission:Z,transmissionMap:Te,thicknessMap:Oe,gradientMap:k,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:ue,alphaHash:Pe,combine:y.combine,mapUv:Ue&&x(y.map.channel),aoMapUv:Ee&&x(y.aoMap.channel),lightMapUv:_e&&x(y.lightMap.channel),bumpMapUv:Ae&&x(y.bumpMap.channel),normalMapUv:st&&x(y.normalMap.channel),displacementMapUv:Qe&&x(y.displacementMap.channel),emissiveMapUv:nt&&x(y.emissiveMap.channel),metalnessMapUv:qe&&x(y.metalnessMap.channel),roughnessMapUv:rt&&x(y.roughnessMap.channel),anisotropyMapUv:ie&&x(y.anisotropyMap.channel),clearcoatMapUv:ae&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:ce&&x(y.specularColorMap.channel),specularIntensityMapUv:Se&&x(y.specularIntensityMap.channel),transmissionMapUv:Te&&x(y.transmissionMap.channel),thicknessMapUv:Oe&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(st||z),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!B.attributes.uv&&(Ue||te),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&st===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:tt,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Je,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===Rt,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function g(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const v in y.defines)L.push(v),L.push(y.defines[v]);return y.isRawShaderMaterial===!1&&(m(L,y),S(L,y),L.push(i.outputColorSpace)),L.push(y.customProgramCacheKey),L.join()}function m(y,L){y.push(L.precision),y.push(L.outputColorSpace),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.mapUv),y.push(L.alphaMapUv),y.push(L.lightMapUv),y.push(L.aoMapUv),y.push(L.bumpMapUv),y.push(L.normalMapUv),y.push(L.displacementMapUv),y.push(L.emissiveMapUv),y.push(L.metalnessMapUv),y.push(L.roughnessMapUv),y.push(L.anisotropyMapUv),y.push(L.clearcoatMapUv),y.push(L.clearcoatNormalMapUv),y.push(L.clearcoatRoughnessMapUv),y.push(L.iridescenceMapUv),y.push(L.iridescenceThicknessMapUv),y.push(L.sheenColorMapUv),y.push(L.sheenRoughnessMapUv),y.push(L.specularMapUv),y.push(L.specularColorMapUv),y.push(L.specularIntensityMapUv),y.push(L.transmissionMapUv),y.push(L.thicknessMapUv),y.push(L.combine),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numSpotLightMaps),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.numSpotLightShadowsWithMaps),y.push(L.numLightProbes),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection),y.push(L.depthPacking)}function S(y,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){const L=p[y.type];let v;if(L){const w=ei[L];v=zr.clone(w.uniforms)}else v=y.uniforms;return v}function T(y,L){let v=f.get(L);return v!==void 0?++v.usedTimes:(v=new gx(i,L,y,s),c.push(v),f.set(L,v)),v}function I(y){if(--y.usedTimes===0){const L=c.indexOf(y);c[L]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function P(y){o.remove(y)}function D(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:R,acquireProgram:T,releaseProgram:I,releaseShaderCache:P,programs:c,dispose:D}}function Sx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,M,g,m){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:m},i[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=x,S.materialVariant=a(d),S.groupOrder=M,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function l(d,p,x,M,g,m){const S=o(d,p,x,M,g,m);x.transmission>0?n.push(S):x.transparent===!0?s.push(S):t.push(S)}function c(d,p,x,M,g,m){const S=o(d,p,x,M,g,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function f(d,p,x){t.length>1&&t.sort(d||bx),n.length>1&&n.sort(p||ih),s.length>1&&s.sort(p||ih),x&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function Tx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new sh,i.set(n,[a])):s>=r.length?(a=new sh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ex(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ve};break;case"SpotLight":t={position:new V,direction:new V,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function wx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ax=0;function Rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cx(i){const e=new Ex,t=wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new mt,a=new mt;function o(c){let f=0,h=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,x=0,M=0,g=0,m=0,S=0,R=0,T=0,I=0,P=0,D=0;c.sort(Rx);for(let L=0,v=c.length;L<v;L++){const w=c[L],A=w.color,O=w.intensity,H=w.distance;let B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Dn?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=A.r*O,h+=A.g*O,d+=A.b*O;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],O);D++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,j=t.get(w);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=w.shadow.matrix,S++}n.directional[p]=q,p++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(A).multiplyScalar(O),q.distance=H,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[M]=q;const G=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,G.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[M]=G.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=B,T++}M++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(A).multiplyScalar(O),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=q,g++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const G=w.shadow,j=t.get(w);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=w.shadow.matrix,R++}n.point[x]=q,x++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(O),q.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[m]=q,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==p||y.pointLength!==x||y.spotLength!==M||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==S||y.numPointShadows!==R||y.numSpotShadows!==T||y.numSpotMaps!==I||y.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,y.directionalLength=p,y.pointLength=x,y.spotLength=M,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=S,y.numPointShadows=R,y.numSpotShadows=T,y.numSpotMaps=I,y.numLightProbes=D,n.version=Ax++)}function l(c,f){let h=0,d=0,p=0,x=0,M=0;const g=f.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const R=c[m];if(R.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),h++}else if(R.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),d++}else if(R.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function rh(i){const e=new Cx(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Px(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rh(i),e.set(s,[o])):r>=a.length?(o=new rh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
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
}`,Nx=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Dx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ah=new mt,dr=new V,$o=new V;function Ux(i,e,t){let n=new Tc;const s=new $e,r=new $e,a=new Lt,o=new _p,l=new xp,c={},f=t.maxTextureSize,h={[yi]:bn,[bn]:yi,[xn]:xn},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Ix,fragmentShader:Lx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new rn;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new yt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let m=this.type;this.render=function(P,D,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===Rh&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tr);const L=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ii),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const O=m!==this.type;O&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=P.length;H<B;H++){const q=P[H],G=q.shadow;if(G===void 0){it("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===vr){if(q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Tn(s.x,s.y,{format:Dn,type:cn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Vs(s.x,s.y,vn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Si,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else q.isPointLight?(G.map=new of(s.x),G.map.depthTexture=new dp(s.x,ri)):(G.map=new Tn(s.x,s.y),G.map.depthTexture=new Vs(s.x,s.y,ri)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Si,this.type===Tr?(G.map.depthTexture.compareFunction=Q?vc:xc,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}const oe=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<oe;me++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,me),i.clear();else{me===0&&(i.setRenderTarget(G.map),i.clear());const ee=G.getViewport(me);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),A.viewport(a)}if(q.isPointLight){const ee=G.camera,Je=G.matrix,dt=q.distance||ee.far;dt!==ee.far&&(ee.far=dt,ee.updateProjectionMatrix()),dr.setFromMatrixPosition(q.matrixWorld),ee.position.copy(dr),$o.copy(ee.position),$o.add(Nx[me]),ee.up.copy(Dx[me]),ee.lookAt($o),ee.updateMatrixWorld(),Je.makeTranslation(-dr.x,-dr.y,-dr.z),ah.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ah,ee.coordinateSystem,ee.reversedDepth)}else G.updateMatrices(q);n=G.getFrustum(),T(D,y,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===vr&&S(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(L,v,w)};function S(P,D){const y=e.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Tn(s.x,s.y,{format:Dn,type:cn})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,y,d,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,y,p,M,null)}function R(P,D,y,L){let v=null;const w=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)v=w;else if(v=y.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const A=v.uuid,O=D.uuid;let H=c[A];H===void 0&&(H={},c[A]=H);let B=H[O];B===void 0&&(B=v.clone(),H[O]=B,D.addEventListener("dispose",I)),v=B}if(v.visible=D.visible,v.wireframe=D.wireframe,L===vr?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:h[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const A=i.properties.get(v);A.light=y}return v}function T(P,D,y,L,v){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===vr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);const O=e.update(P),H=P.material;if(Array.isArray(H)){const B=O.groups;for(let q=0,G=B.length;q<G;q++){const j=B[q],Q=H[j.materialIndex];if(Q&&Q.visible){const oe=R(P,Q,L,v);P.onBeforeShadow(i,P,D,y,O,oe,j),i.renderBufferDirect(y,null,O,oe,P,j),P.onAfterShadow(i,P,D,y,O,oe,j)}}}else if(H.visible){const B=R(P,H,L,v);P.onBeforeShadow(i,P,D,y,O,B,null),i.renderBufferDirect(y,null,O,B,P,null),P.onAfterShadow(i,P,D,y,O,B,null)}}const A=P.children;for(let O=0,H=A.length;O<H;O++)T(A[O],D,y,L,v)}function I(P){P.target.removeEventListener("dispose",I);for(const y in c){const L=c[y],v=P.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}function Fx(i,e){function t(){let k=!1;const te=new Lt;let ue=null;const Pe=new Lt(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!k&&(i.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,xe,Ye,Fe,At){At===!0&&(Ne*=Fe,xe*=Fe,Ye*=Fe),te.set(Ne,xe,Ye,Fe),Pe.equals(te)===!1&&(i.clearColor(Ne,xe,Ye,Fe),Pe.copy(te))},reset:function(){k=!1,ue=null,Pe.set(-1,0,0,0)}}}function n(){let k=!1,te=!1,ue=null,Pe=null,Ne=null;return{setReversed:function(xe){if(te!==xe){const Ye=e.get("EXT_clip_control");xe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),te=xe;const Fe=Ne;Ne=null,this.setClear(Fe)}},getReversed:function(){return te},setTest:function(xe){xe?Me(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(xe){ue!==xe&&!k&&(i.depthMask(xe),ue=xe)},setFunc:function(xe){if(te&&(xe=gd[xe]),Pe!==xe){switch(xe){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=xe}},setLocked:function(xe){k=xe},setClear:function(xe){Ne!==xe&&(Ne=xe,te&&(xe=1-xe),i.clearDepth(xe))},reset:function(){k=!1,ue=null,Pe=null,Ne=null,te=!1}}}function s(){let k=!1,te=null,ue=null,Pe=null,Ne=null,xe=null,Ye=null,Fe=null,At=null;return{setTest:function(Tt){k||(Tt?Me(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Tt){te!==Tt&&!k&&(i.stencilMask(Tt),te=Tt)},setFunc:function(Tt,Yt,In){(ue!==Tt||Pe!==Yt||Ne!==In)&&(i.stencilFunc(Tt,Yt,In),ue=Tt,Pe=Yt,Ne=In)},setOp:function(Tt,Yt,In){(xe!==Tt||Ye!==Yt||Fe!==In)&&(i.stencilOp(Tt,Yt,In),xe=Tt,Ye=Yt,Fe=In)},setLocked:function(Tt){k=Tt},setClear:function(Tt){At!==Tt&&(i.clearStencil(Tt),At=Tt)},reset:function(){k=!1,te=null,ue=null,Pe=null,Ne=null,xe=null,Ye=null,Fe=null,At=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,x=[],M=null,g=!1,m=null,S=null,R=null,T=null,I=null,P=null,D=null,y=new Ve(0,0,0),L=0,v=!1,w=null,A=null,O=null,H=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=j>=2);let oe=null,me={};const ee=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),dt=new Lt().fromArray(ee),at=new Lt().fromArray(Je);function fe(k,te,ue,Pe){const Ne=new Uint8Array(4),xe=i.createTexture();i.bindTexture(k,xe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ue;Ye++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(te+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return xe}const pe={};pe[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),a.setFunc(ks),Ae(!1),st(Vc),Me(i.CULL_FACE),Ee(ii);function Me(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function tt(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function $(k,te){return d[k]!==te?(i.bindFramebuffer(k,te),d[k]=te,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function se(k,te){let ue=x,Pe=!1;if(k){ue=p.get(te),ue===void 0&&(ue=[],p.set(te,ue));const Ne=k.textures;if(ue.length!==Ne.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ye=Ne.length;xe<Ye;xe++)ue[xe]=i.COLOR_ATTACHMENT0+xe;ue.length=Ne.length,Pe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ue)}function Ue(k){return M!==k?(i.useProgram(k),M=k,!0):!1}const ke={[Ki]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};ke[Bf]=i.MIN,ke[zf]=i.MAX;const Ze={[kf]:i.ZERO,[Hf]:i.ONE,[Gf]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[Yf]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Vf]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[$f]:i.ONE_MINUS_CONSTANT_COLOR,[Jf]:i.CONSTANT_ALPHA,[Qf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(k,te,ue,Pe,Ne,xe,Ye,Fe,At,Tt){if(k===ii){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(Me(i.BLEND),g=!0),k!==Uf){if(k!==m||Tt!==v){if((S!==Ki||I!==Ki)&&(i.blendEquation(i.FUNC_ADD),S=Ki,I=Ki),Tt)switch(k){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",k);break}else switch(k){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",k);break}R=null,T=null,P=null,D=null,y.set(0,0,0),L=0,m=k,v=Tt}return}Ne=Ne||te,xe=xe||ue,Ye=Ye||Pe,(te!==S||Ne!==I)&&(i.blendEquationSeparate(ke[te],ke[Ne]),S=te,I=Ne),(ue!==R||Pe!==T||xe!==P||Ye!==D)&&(i.blendFuncSeparate(Ze[ue],Ze[Pe],Ze[xe],Ze[Ye]),R=ue,T=Pe,P=xe,D=Ye),(Fe.equals(y)===!1||At!==L)&&(i.blendColor(Fe.r,Fe.g,Fe.b,At),y.copy(Fe),L=At),m=k,v=!1}function _e(k,te){k.side===xn?tt(i.CULL_FACE):Me(i.CULL_FACE);let ue=k.side===bn;te&&(ue=!ue),Ae(ue),k.blending===Us&&k.transparent===!1?Ee(ii):Ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Pe=k.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function st(k){k!==Nf?(Me(i.CULL_FACE),k!==A&&(k===Vc?i.cullFace(i.BACK):k===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),A=k}function Qe(k){k!==O&&(G&&i.lineWidth(k),O=k)}function nt(k,te,ue){k?(Me(i.POLYGON_OFFSET_FILL),(H!==te||B!==ue)&&(H=te,B=ue,a.getReversed()&&(te=-te),i.polygonOffset(te,ue))):tt(i.POLYGON_OFFSET_FILL)}function qe(k){k?Me(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function rt(k){k===void 0&&(k=i.TEXTURE0+q-1),oe!==k&&(i.activeTexture(k),oe=k)}function z(k,te,ue){ue===void 0&&(oe===null?ue=i.TEXTURE0+q-1:ue=oe);let Pe=me[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[ue]=Pe),(Pe.type!==k||Pe.texture!==te)&&(oe!==ue&&(i.activeTexture(ue),oe=ue),i.bindTexture(k,te||pe[k]),Pe.type=k,Pe.texture=te)}function Ft(){const k=me[oe];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Z(){try{i.texSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function ae(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Re(){try{i.texStorage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Ie(){try{i.texStorage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function le(){try{i.texImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function de(){try{i.texImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Le(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Be(k,te){h[k]!==te&&(i.pixelStorei(k,te),h[k]=te)}function Ce(k){dt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function ce(k){at.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),at.copy(k))}function Se(k,te){let ue=c.get(te);ue===void 0&&(ue=new WeakMap,c.set(te,ue));let Pe=ue.get(k);Pe===void 0&&(Pe=i.getUniformBlockIndex(te,k.name),ue.set(k,Pe))}function Te(k,te){const Pe=c.get(te).get(k);l.get(te)!==Pe&&(i.uniformBlockBinding(te,Pe,k.__bindingPointIndex),l.set(te,Pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},oe=null,me={},d={},p=new WeakMap,x=[],M=null,g=!1,m=null,S=null,R=null,T=null,I=null,P=null,D=null,y=new Ve(0,0,0),L=0,v=!1,w=null,A=null,O=null,H=null,B=null,dt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:tt,bindFramebuffer:$,drawBuffers:se,useProgram:Ue,setBlending:Ee,setMaterial:_e,setFlipSided:Ae,setCullFace:st,setLineWidth:Qe,setPolygonOffset:nt,setScissorTest:qe,activeTexture:rt,bindTexture:z,unbindTexture:Ft,compressedTexImage2D:_t,compressedTexImage3D:F,texImage2D:le,texImage3D:de,pixelStorei:Be,getParameter:Le,updateUBOMapping:Se,uniformBlockBinding:Te,texStorage2D:Re,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:ie,compressedTexSubImage3D:ae,scissor:Ce,viewport:ce,reset:Oe}}function Ox(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,E){return x?new OffscreenCanvas(F,E):Fr("canvas")}function g(F,E,Z){let ie=1;const ae=_t(F);if((ae.width>Z||ae.height>Z)&&(ie=Z/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Re=Math.floor(ie*ae.width),Ie=Math.floor(ie*ae.height);d===void 0&&(d=M(Re,Ie));const le=E?M(Re,Ie):d;return le.width=Re,le.height=Ie,le.getContext("2d").drawImage(F,0,0,Re,Ie),it("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Re+"x"+Ie+")."),le}else return"data"in F&&it("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),F;return F}function m(F){return F.generateMipmaps}function S(F){i.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(F,E,Z,ie,ae,Re=!1){if(F!==null){if(i[F]!==void 0)return i[F];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ie;ie&&(Ie=e.get("EXT_texture_norm16"),Ie||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=E;if(E===i.RED&&(Z===i.FLOAT&&(le=i.R32F),Z===i.HALF_FLOAT&&(le=i.R16F),Z===i.UNSIGNED_BYTE&&(le=i.R8),Z===i.UNSIGNED_SHORT&&Ie&&(le=Ie.R16_EXT),Z===i.SHORT&&Ie&&(le=Ie.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.R8UI),Z===i.UNSIGNED_SHORT&&(le=i.R16UI),Z===i.UNSIGNED_INT&&(le=i.R32UI),Z===i.BYTE&&(le=i.R8I),Z===i.SHORT&&(le=i.R16I),Z===i.INT&&(le=i.R32I)),E===i.RG&&(Z===i.FLOAT&&(le=i.RG32F),Z===i.HALF_FLOAT&&(le=i.RG16F),Z===i.UNSIGNED_BYTE&&(le=i.RG8),Z===i.UNSIGNED_SHORT&&Ie&&(le=Ie.RG16_EXT),Z===i.SHORT&&Ie&&(le=Ie.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RG8UI),Z===i.UNSIGNED_SHORT&&(le=i.RG16UI),Z===i.UNSIGNED_INT&&(le=i.RG32UI),Z===i.BYTE&&(le=i.RG8I),Z===i.SHORT&&(le=i.RG16I),Z===i.INT&&(le=i.RG32I)),E===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Z===i.UNSIGNED_INT&&(le=i.RGB32UI),Z===i.BYTE&&(le=i.RGB8I),Z===i.SHORT&&(le=i.RGB16I),Z===i.INT&&(le=i.RGB32I)),E===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Z===i.UNSIGNED_INT&&(le=i.RGBA32UI),Z===i.BYTE&&(le=i.RGBA8I),Z===i.SHORT&&(le=i.RGBA16I),Z===i.INT&&(le=i.RGBA32I)),E===i.RGB&&(Z===i.UNSIGNED_SHORT&&Ie&&(le=Ie.RGB16_EXT),Z===i.SHORT&&Ie&&(le=Ie.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),E===i.RGBA){const de=Re?$a:xt.getTransfer(ae);Z===i.FLOAT&&(le=i.RGBA32F),Z===i.HALF_FLOAT&&(le=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(le=de===Rt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Ie&&(le=Ie.RGBA16_EXT),Z===i.SHORT&&Ie&&(le=Ie.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function I(F,E){let Z;return F?E===null||E===ri||E===Ir?Z=i.DEPTH24_STENCIL8:E===vn?Z=i.DEPTH32F_STENCIL8:E===Pr&&(Z=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ri||E===Ir?Z=i.DEPTH_COMPONENT24:E===vn?Z=i.DEPTH_COMPONENT32F:E===Pr&&(Z=i.DEPTH_COMPONENT16),Z}function P(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==jt&&F.minFilter!==zt?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function D(F){const E=F.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&f.delete(E),E.isHTMLTexture&&h.delete(E)}function y(F){const E=F.target;E.removeEventListener("dispose",y),w(E)}function L(F){const E=n.get(F);if(E.__webglInit===void 0)return;const Z=F.source,ie=p.get(Z);if(ie){const ae=ie[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&v(F),Object.keys(ie).length===0&&p.delete(Z)}n.remove(F)}function v(F){const E=n.get(F);i.deleteTexture(E.__webglTexture);const Z=F.source,ie=p.get(Z);delete ie[E.__cacheKey],a.memory.textures--}function w(F){const E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ae=0;ae<E.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[ie]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=F.textures;for(let ie=0,ae=Z.length;ie<ae;ie++){const Re=n.get(Z[ie]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),a.memory.textures--),n.remove(Z[ie])}n.remove(F)}let A=0;function O(){A=0}function H(){return A}function B(F){A=F}function q(){const F=A;return F>=s.maxTextures&&it("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),A+=1,F}function G(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function j(F,E){const Z=n.get(F);if(F.isVideoTexture&&z(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){const ie=F.image;if(ie===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Z,F,E);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+E)}function Q(F,E){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){tt(Z,F,E);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+E)}function oe(F,E){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){tt(Z,F,E);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+E)}function me(F,E){const Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){$(Z,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+E)}const ee={[Fi]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},Je={[jt]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},dt={[ad]:i.NEVER,[hd]:i.ALWAYS,[od]:i.LESS,[xc]:i.LEQUAL,[ld]:i.EQUAL,[vc]:i.GEQUAL,[cd]:i.GREATER,[ud]:i.NOTEQUAL};function at(F,E){if(E.type===vn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zt||E.magFilter===za||E.magFilter===Mr||E.magFilter===ti||E.minFilter===zt||E.minFilter===za||E.minFilter===Mr||E.minFilter===ti)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ee[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Je[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Je[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Mr&&E.minFilter!==ti||E.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function fe(F,E){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",D));const ie=E.source;let ae=p.get(ie);ae===void 0&&(ae={},p.set(ie,ae));const Re=G(E);if(Re!==F.__cacheKey){ae[Re]===void 0&&(ae[Re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ae[Re].usedTimes++;const Ie=ae[F.__cacheKey];Ie!==void 0&&(ae[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(E)),F.__cacheKey=Re,F.__webglTexture=ae[Re].texture}return Z}function pe(F,E,Z){return Math.floor(Math.floor(F/Z)/E)}function Me(F,E,Z,ie){const Re=F.updateRanges;if(Re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Z,ie,E.data);else{Re.sort((Be,Ce)=>Be.start-Ce.start);let Ie=0;for(let Be=1;Be<Re.length;Be++){const Ce=Re[Ie],ce=Re[Be],Se=Ce.start+Ce.count,Te=pe(ce.start,E.width,4),Oe=pe(Ce.start,E.width,4);ce.start<=Se+1&&Te===Oe&&pe(ce.start+ce.count-1,E.width,4)===Te?Ce.count=Math.max(Ce.count,ce.start+ce.count-Ce.start):(++Ie,Re[Ie]=ce)}Re.length=Ie+1;const le=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ce=Re.length;Be<Ce;Be++){const ce=Re[Be],Se=Math.floor(ce.start/4),Te=Math.ceil(ce.count/4),Oe=Se%E.width,k=Math.floor(Se/E.width),te=Te,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Oe,k,te,ue,Z,ie,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function tt(F,E,Z){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);const ae=fe(F,E),Re=E.source;t.bindTexture(ie,F.__webglTexture,i.TEXTURE0+Z);const Ie=n.get(Re);if(Re.version!==Ie.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ue=xt.getPrimaries(xt.workingColorSpace),Pe=E.colorSpace===Ni?null:xt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Ni||ue===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let de=g(E.image,!1,s.maxTextureSize);de=Ft(E,de);const Le=r.convert(E.format,E.colorSpace),Be=r.convert(E.type);let Ce=T(E.internalFormat,Le,Be,E.normalized,E.colorSpace,E.isVideoTexture);at(ie,E);let ce;const Se=E.mipmaps,Te=E.isVideoTexture!==!0,Oe=Ie.__version===void 0||ae===!0,k=Re.dataReady,te=P(E,de);if(E.isDepthTexture)Ce=I(E.format===$i,E.type),Oe&&(Te?t.texStorage2D(i.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,Le,Be,null));else if(E.isDataTexture)if(Se.length>0){Te&&Oe&&t.texStorage2D(i.TEXTURE_2D,te,Ce,Se[0].width,Se[0].height);for(let ue=0,Pe=Se.length;ue<Pe;ue++)ce=Se[ue],Te?k&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ce.width,ce.height,Le,Be,ce.data):t.texImage2D(i.TEXTURE_2D,ue,Ce,ce.width,ce.height,0,Le,Be,ce.data);E.generateMipmaps=!1}else Te?(Oe&&t.texStorage2D(i.TEXTURE_2D,te,Ce,de.width,de.height),k&&Me(E,de,Le,Be)):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,Le,Be,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Te&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ce,Se[0].width,Se[0].height,de.depth);for(let ue=0,Pe=Se.length;ue<Pe;ue++)if(ce=Se[ue],E.format!==Qt)if(Le!==null)if(Te){if(k)if(E.layerUpdates.size>0){const Ne=Bu(ce.width,ce.height,E.format,E.type);for(const xe of E.layerUpdates){const Ye=ce.data.subarray(xe*Ne/ce.data.BYTES_PER_ELEMENT,(xe+1)*Ne/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,xe,ce.width,ce.height,1,Le,Ye)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,de.depth,Le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ce,ce.width,ce.height,de.depth,0,ce.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,de.depth,Le,Be,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ce,ce.width,ce.height,de.depth,0,Le,Be,ce.data)}else{Te&&Oe&&t.texStorage2D(i.TEXTURE_2D,te,Ce,Se[0].width,Se[0].height);for(let ue=0,Pe=Se.length;ue<Pe;ue++)ce=Se[ue],E.format!==Qt?Le!==null?Te?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ce,ce.width,ce.height,0,ce.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?k&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ce.width,ce.height,Le,Be,ce.data):t.texImage2D(i.TEXTURE_2D,ue,Ce,ce.width,ce.height,0,Le,Be,ce.data)}else if(E.isDataArrayTexture)if(Te){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ce,de.width,de.height,de.depth),k)if(E.layerUpdates.size>0){const ue=Bu(de.width,de.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ne=de.data.subarray(Pe*ue/de.data.BYTES_PER_ELEMENT,(Pe+1)*ue/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,de.width,de.height,1,Le,Be,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Le,Be,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Le,Be,de.data);else if(E.isData3DTexture)Te?(Oe&&t.texStorage3D(i.TEXTURE_3D,te,Ce,de.width,de.height,de.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Le,Be,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Le,Be,de.data);else if(E.isFramebufferTexture){if(Oe)if(Te)t.texStorage2D(i.TEXTURE_2D,te,Ce,de.width,de.height);else{let ue=de.width,Pe=de.height;for(let Ne=0;Ne<te;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ce,ue,Pe,0,Le,Be,null),ue>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),de.parentNode!==ue){ue.appendChild(de),h.add(E),ue.onpaint=Pe=>{const Ne=Pe.changedElements;for(const xe of h)Ne.includes(xe.image)&&(xe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{const Ne=i.RGBA,xe=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,xe,Ye,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(Te&&Oe){const ue=_t(Se[0]);t.texStorage2D(i.TEXTURE_2D,te,Ce,ue.width,ue.height)}for(let ue=0,Pe=Se.length;ue<Pe;ue++)ce=Se[ue],Te?k&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Le,Be,ce):t.texImage2D(i.TEXTURE_2D,ue,Ce,Le,Be,ce);E.generateMipmaps=!1}else if(Te){if(Oe){const ue=_t(de);t.texStorage2D(i.TEXTURE_2D,te,Ce,ue.width,ue.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Be,de)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Le,Be,de);m(E)&&S(ie),Ie.__version=Re.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function $(F,E,Z){if(E.image.length!==6)return;const ie=fe(F,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);const Re=n.get(ae);if(ae.version!==Re.__version||ie===!0){t.activeTexture(i.TEXTURE0+Z);const Ie=xt.getPrimaries(xt.workingColorSpace),le=E.colorSpace===Ni?null:xt.getPrimaries(E.colorSpace),de=E.colorSpace===Ni||Ie===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!Le&&!Be?Ce[xe]=g(E.image[xe],!0,s.maxCubemapSize):Ce[xe]=Be?E.image[xe].image:E.image[xe],Ce[xe]=Ft(E,Ce[xe]);const ce=Ce[0],Se=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),Oe=T(E.internalFormat,Se,Te,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,te=Re.__version===void 0||ie===!0,ue=ae.dataReady;let Pe=P(E,ce);at(i.TEXTURE_CUBE_MAP,E);let Ne;if(Le){k&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Oe,ce.width,ce.height);for(let xe=0;xe<6;xe++){Ne=Ce[xe].mipmaps;for(let Ye=0;Ye<Ne.length;Ye++){const Fe=Ne[Ye];E.format!==Qt?Se!==null?k?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Fe.width,Fe.height,Se,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,Oe,Fe.width,Fe.height,0,Fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Fe.width,Fe.height,Se,Te,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,Oe,Fe.width,Fe.height,0,Se,Te,Fe.data)}}}else{if(Ne=E.mipmaps,k&&te){Ne.length>0&&Pe++;const xe=_t(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Oe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Be){k?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,Se,Te,Ce[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,Ce[xe].width,Ce[xe].height,0,Se,Te,Ce[xe].data);for(let Ye=0;Ye<Ne.length;Ye++){const At=Ne[Ye].image[xe].image;k?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,At.width,At.height,Se,Te,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,Oe,At.width,At.height,0,Se,Te,At.data)}}else{k?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Se,Te,Ce[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,Se,Te,Ce[xe]);for(let Ye=0;Ye<Ne.length;Ye++){const Fe=Ne[Ye];k?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Se,Te,Fe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,Oe,Se,Te,Fe.image[xe])}}}m(E)&&S(i.TEXTURE_CUBE_MAP),Re.__version=ae.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function se(F,E,Z,ie,ae,Re){const Ie=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),de=T(Z.internalFormat,Ie,le,Z.normalized,Z.colorSpace),Le=n.get(E),Be=n.get(Z);if(Be.__renderTarget=E,!Le.__hasExternalTextures){const Ce=Math.max(1,E.width>>Re),ce=Math.max(1,E.height>>Re);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Re,de,Ce,ce,E.depth,0,Ie,le,null):t.texImage2D(ae,Re,de,Ce,ce,0,Ie,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),rt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,Be.__webglTexture,0,qe(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,Be.__webglTexture,Re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(F,E,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ie=E.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,Re=I(E.stencilBuffer,ae),Ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;rt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(E),Re,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(E),Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,F)}else{const ie=E.textures;for(let ae=0;ae<ie.length;ae++){const Re=ie[ae],Ie=r.convert(Re.format,Re.colorSpace),le=r.convert(Re.type),de=T(Re.internalFormat,Ie,le,Re.normalized,Re.colorSpace);rt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(E),de,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(E),de,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(F,E,Z){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(E.depthTexture);if(ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),at(i.TEXTURE_CUBE_MAP,E.depthTexture);const Le=r.convert(E.depthTexture.format),Be=r.convert(E.depthTexture.type);let Ce;E.depthTexture.format===Si?Ce=i.DEPTH_COMPONENT24:E.depthTexture.format===$i&&(Ce=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ce,E.width,E.height,0,Le,Be,null)}}else j(E.depthTexture,0);const Re=ae.__webglTexture,Ie=qe(E),le=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,de=E.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Si)rt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,Re,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,Re,0);else if(E.depthTexture.format===$i)rt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,Re,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(F){const E=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ie=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ie}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let ie=0;ie<6;ie++)ke(E.__webglFramebuffer[ie],F,ie);else{const ie=F.texture.mipmaps;ie&&ie.length>0?ke(E.__webglFramebuffer[0],F,0):ke(E.__webglFramebuffer,F,0)}else if(Z){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ue(E.__webglDepthbuffer[ie],F,!1);else{const ae=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Re)}}else{const ie=F.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ue(E.__webglDepthbuffer,F,!1);else{const ae=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(F,E,Z){const ie=n.get(F);E!==void 0&&se(ie.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ze(F)}function _e(F){const E=F.texture,Z=n.get(F),ie=n.get(E);F.addEventListener("dispose",y);const ae=F.textures,Re=F.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,a.memory.textures++),Re){Z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[le]=[];for(let de=0;de<E.mipmaps.length;de++)Z.__webglFramebuffer[le][de]=i.createFramebuffer()}else Z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)Z.__webglFramebuffer[le]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let le=0,de=ae.length;le<de;le++){const Le=n.get(ae[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&rt(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let le=0;le<ae.length;le++){const de=ae[le];Z.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[le]);const Le=r.convert(de.format,de.colorSpace),Be=r.convert(de.type),Ce=T(de.internalFormat,Le,Be,de.normalized,de.colorSpace,F.isXRRenderTarget===!0),ce=qe(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Ce,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,Z.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)se(Z.__webglFramebuffer[le][de],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else se(Z.__webglFramebuffer[le],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let le=0,de=ae.length;le<de;le++){const Le=ae[le],Be=n.get(Le);let Ce=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Be.__webglTexture),at(Ce,Le),se(Z.__webglFramebuffer,F,Le,i.COLOR_ATTACHMENT0+le,Ce,0),m(Le)&&S(Ce)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(le=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ie.__webglTexture),at(le,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)se(Z.__webglFramebuffer[de],F,E,i.COLOR_ATTACHMENT0,le,de);else se(Z.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,le,0);m(E)&&S(le),t.unbindTexture()}F.depthBuffer&&Ze(F)}function Ae(F){const E=F.textures;for(let Z=0,ie=E.length;Z<ie;Z++){const ae=E[Z];if(m(ae)){const Re=R(F),Ie=n.get(ae).__webglTexture;t.bindTexture(Re,Ie),S(Re),t.unbindTexture()}}}const st=[],Qe=[];function nt(F){if(F.samples>0){if(rt(F)===!1){const E=F.textures,Z=F.width,ie=F.height;let ae=i.COLOR_BUFFER_BIT;const Re=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(F),le=E.length>1;if(le)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const de=F.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const Be=n.get(E[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,ae,i.NEAREST),l===!0&&(st.length=0,Qe.length=0,st.push(i.COLOR_ATTACHMENT0+Le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(st.push(Re),Qe.push(Re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const Be=n.get(E[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function qe(F){return Math.min(s.maxSamples,F.samples)}function rt(F){const E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(F){const E=a.render.frame;f.get(F)!==E&&(f.set(F,E),F.update())}function Ft(F,E){const Z=F.colorSpace,ie=F.format,ae=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Kt&&Z!==Ni&&(xt.getTransfer(Z)===Rt?(ie!==Qt||ae!==Cn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Z)),E}function _t(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=H,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=me,this.rebindTextures=Ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=se,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bx(i,e){function t(n,s=Ni){let r;const a=xt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Lh)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===Qt)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Ji)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Dn)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===ka||n===Ha||n===Ga||n===Va)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===xl||n===vl||n===Ml||n===yl||n===Ka||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===xl)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===Tl||n===El||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Nl||n===Dl||n===Ul||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Hl||n===Za||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends ss{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",g=new Hx,m={},S=t.getContextAttributes();let R=null,T=null;const I=[],P=[],D=new $e;let y=null;const L=new _n;L.viewport=new Lt;const v=new _n;v.viewport=new Lt;const w=[L,v],A=new Hp;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let pe=I[fe];return pe===void 0&&(pe=new So,I[fe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(fe){let pe=I[fe];return pe===void 0&&(pe=new So,I[fe]=pe),pe.getGripSpace()},this.getHand=function(fe){let pe=I[fe];return pe===void 0&&(pe=new So,I[fe]=pe),pe.getHandSpace()};function B(fe){const pe=P.indexOf(fe.inputSource);if(pe===-1)return;const Me=I[pe];Me!==void 0&&(Me.update(fe.inputSource,fe.frame,c||a),Me.dispatchEvent({type:fe.type,data:fe.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",G);for(let fe=0;fe<I.length;fe++){const pe=P[fe];pe!==null&&(P[fe]=null,I[fe].disconnect(pe))}O=null,H=null,g.reset();for(const fe in m)delete m[fe];e.setRenderTarget(R),p=null,d=null,h=null,s=null,T=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){o=fe,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(fe){if(s=fe,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,tt=null,$=null;S.depth&&($=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?$i:Si,tt=S.stencil?Ir:ri);const se={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Tn(d.textureWidth,d.textureHeight,{format:Qt,type:Cn,depthTexture:new Vs(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(fe){for(let pe=0;pe<fe.removed.length;pe++){const Me=fe.removed[pe],tt=P.indexOf(Me);tt>=0&&(P[tt]=null,I[tt].disconnect(Me))}for(let pe=0;pe<fe.added.length;pe++){const Me=fe.added[pe];let tt=P.indexOf(Me);if(tt===-1){for(let se=0;se<I.length;se++)if(se>=P.length){P.push(Me),tt=se;break}else if(P[se]===null){P[se]=Me,tt=se;break}if(tt===-1)break}const $=I[tt];$&&$.connect(Me)}}const j=new V,Q=new V;function oe(fe,pe,Me){j.setFromMatrixPosition(pe.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const tt=j.distanceTo(Q),$=pe.projectionMatrix.elements,se=Me.projectionMatrix.elements,Ue=$[14]/($[10]-1),ke=$[14]/($[10]+1),Ze=($[9]+1)/$[5],Ee=($[9]-1)/$[5],_e=($[8]-1)/$[0],Ae=(se[8]+1)/se[0],st=Ue*_e,Qe=Ue*Ae,nt=tt/(-_e+Ae),qe=nt*-_e;if(pe.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(qe),fe.translateZ(nt),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),$[10]===-1)fe.projectionMatrix.copy(pe.projectionMatrix),fe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const rt=Ue+nt,z=ke+nt,Ft=st-qe,_t=Qe+(tt-qe),F=Ze*ke/z*rt,E=Ee*ke/z*rt;fe.projectionMatrix.makePerspective(Ft,_t,F,E,rt,z),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function me(fe,pe){pe===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(pe.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(s===null)return;let pe=fe.near,Me=fe.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),A.near=v.near=L.near=pe,A.far=v.far=L.far=Me,(O!==A.near||H!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,H=A.far),A.layers.mask=fe.layers.mask|6,L.layers.mask=A.layers.mask&-5,v.layers.mask=A.layers.mask&-3;const tt=fe.parent,$=A.cameras;me(A,tt);for(let se=0;se<$.length;se++)me($[se],tt);$.length===2?oe(A,L,v):A.projectionMatrix.copy(L.projectionMatrix),ee(fe,A,tt)};function ee(fe,pe,Me){Me===null?fe.matrix.copy(pe.matrixWorld):(fe.matrix.copy(Me.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(pe.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(pe.projectionMatrix),fe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Gs*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(fe){l=fe,d!==null&&(d.fixedFoveation=fe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=fe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(fe){return m[fe]};let Je=null;function dt(fe,pe){if(f=pe.getViewerPose(c||a),x=pe,f!==null){const Me=f.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let tt=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,tt=!0);for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke];let Ee=null;if(p!==null)Ee=p.getViewport(Ze);else{const Ae=h.getViewSubImage(d,Ze);Ee=Ae.viewport,ke===0&&(e.setRenderTargetTextures(T,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(T))}let _e=w[ke];_e===void 0&&(_e=new _n,_e.layers.enable(ke),_e.viewport=new Lt,w[ke]=_e),_e.matrix.fromArray(Ze.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ze.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ke===0&&(A.matrix.copy(_e.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),tt===!0&&A.cameras.push(_e)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();const ke=h.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if($&&$.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke].camera;if(Ze){let Ee=m[Ze];Ee||(Ee=new $h,m[Ze]=Ee);const _e=h.getCameraImage(Ze);Ee.sourceTexture=_e}}}}for(let Me=0;Me<I.length;Me++){const tt=P[Me],$=I[Me];tt!==null&&$!==void 0&&$.update(tt,pe,c||a)}Je&&Je(fe,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const at=new rf;at.setAnimationLoop(dt),this.setAnimationLoop=function(fe){Je=fe},this.dispose=function(){}}}const Vx=new mt,ff=new ht;ff.set(-1,0,0,0,1,0,0,0,1);function Wx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Jh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,R,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),R=S.envMap,T=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ff),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,I){const P=I.program;n.uniformBlockBinding(T,P)}function c(T,I){let P=s[T.id];P===void 0&&(g(T),P=f(T),s[T.id]=P,T.addEventListener("dispose",S));const D=I.program;n.updateUBOMapping(T,D);const y=e.render.frame;r[T.id]!==y&&(d(T),r[T.id]=y)}function f(T){const I=h();T.__bindingPointIndex=I;const P=i.createBuffer(),D=T.__size,y=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,D,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const I=s[T.id],P=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let y=0,L=P.length;y<L;y++){const v=P[y];if(Array.isArray(v))for(let w=0,A=v.length;w<A;w++)p(v[w],y,w,D);else p(v,y,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,I,P,D){if(M(T,I,P,D)===!0){const y=T.__offset,L=T.value;if(Array.isArray(L)){let v=0;for(let w=0;w<L.length;w++){const A=L[w],O=m(A);x(A,T.__data,v),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(v+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,T.__data)}}function x(T,I,P){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,P)}function M(T,I,P,D){const y=T.value,L=I+"_"+P;if(D[L]===void 0)return typeof y=="number"||typeof y=="boolean"?D[L]=y:ArrayBuffer.isView(y)?D[L]=y.slice():D[L]=y.clone(),!0;{const v=D[L];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return D[L]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function g(T){const I=T.uniforms;let P=0;const D=16;for(let L=0,v=I.length;L<v;L++){const w=Array.isArray(I[L])?I[L]:[I[L]];for(let A=0,O=w.length;A<O;A++){const H=w[A],B=Array.isArray(H.value)?H.value:[H.value];for(let q=0,G=B.length;q<G;q++){const j=B[q],Q=m(j),oe=P%D,me=oe%Q.boundary,ee=oe+me;P+=me,ee!==0&&D-ee<Q.storage&&(P+=D-ee),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=P,P+=Q.storage}}}const y=P%D;return y>0&&(P+=D-y),T.__size=P,T.__cache={},this}function m(T){const I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):it("WebGLRenderer: Unsupported uniform value type.",T),I}function S(T){const I=T.target;I.removeEventListener("dispose",S);const P=a.indexOf(I.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function R(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}const Yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function qx(){return Jn===null&&(Jn=new Br(Yx,16,16,Dn,cn),Jn.name="DFG_LUT",Jn.minFilter=zt,Jn.magFilter=zt,Jn.wrapS=On,Jn.wrapT=On,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class Kx{constructor(e={}){const{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=p,g=new Set([_c,gc,mc]),m=new Set([Cn,ri,Pr,Ir,dc,pc]),S=new Uint32Array(4),R=new Int32Array(4),T=new V;let I=null,P=null;const D=[],y=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1,A=null,O=null,H=null,B=null;this._outputColorSpace=Wt;let q=0,G=0,j=null,Q=-1,oe=null;const me=new Lt,ee=new Lt;let Je=null;const dt=new Ve(0);let at=0,fe=t.width,pe=t.height,Me=1,tt=null,$=null;const se=new Lt(0,0,fe,pe),Ue=new Lt(0,0,fe,pe);let ke=!1;const Ze=new Tc;let Ee=!1,_e=!1;const Ae=new mt,st=new V,Qe=new Lt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function rt(){return j===null?Me:1}let z=n;function Ft(u,_){return t.getContext(u,_)}try{const u={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Yt,!1),z===null){const _="webgl2";if(z=Ft(_,u),z===null)throw Ft(_)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(u){throw ot("WebGLRenderer: "+u.message),u}let _t,F,E,Z,ie,ae,Re,Ie,le,de,Le,Be,Ce,ce,Se,Te,Oe,k,te,ue,Pe,Ne,xe;function Ye(){_t=new qg(z),_t.init(),Pe=new Bx(z,_t),F=new zg(z,_t,e,Pe),E=new Fx(z,_t),F.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),O=z.createFramebuffer(),H=z.createFramebuffer(),B=z.createFramebuffer(),Z=new $g(z),ie=new Sx,ae=new Ox(z,_t,E,ie,F,Pe,Z),Re=new Yg(v),Ie=new em(z),Ne=new Og(z,Ie),le=new Kg(z,Ie,Z,Ne),de=new Qg(z,le,Ie,Ne,Z),k=new Jg(z,F,ae),Se=new kg(ie),Le=new yx(v,Re,_t,F,Ne,Se),Be=new Wx(v,ie),Ce=new Tx,ce=new Px(_t),Oe=new Fg(v,Re,E,de,x,l),Te=new Ux(v,de,F),xe=new Xx(z,Z,F,E),te=new Bg(z,_t,Z),ue=new Zg(z,_t,Z),Z.programs=Le.programs,v.capabilities=F,v.extensions=_t,v.properties=ie,v.renderLists=Ce,v.shadowMap=Te,v.state=E,v.info=Z}Ye(),M!==Cn&&(L=new e_(M,t.width,t.height,o,s,r));const Fe=new Gx(v,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const u=_t.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=_t.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(u){u!==void 0&&(Me=u,this.setSize(fe,pe,!1))},this.getSize=function(u){return u.set(fe,pe)},this.setSize=function(u,_,b=!0){if(Fe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=u,pe=_,t.width=Math.floor(u*Me),t.height=Math.floor(_*Me),b===!0&&(t.style.width=u+"px",t.style.height=_+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,u,_)},this.getDrawingBufferSize=function(u){return u.set(fe*Me,pe*Me).floor()},this.setDrawingBufferSize=function(u,_,b){fe=u,pe=_,Me=b,t.width=Math.floor(u*b),t.height=Math.floor(_*b),this.setViewport(0,0,u,_)},this.setEffects=function(u){if(M===Cn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let _=0;_<u.length;_++)if(u[_].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(me)},this.getViewport=function(u){return u.copy(se)},this.setViewport=function(u,_,b,C){u.isVector4?se.set(u.x,u.y,u.z,u.w):se.set(u,_,b,C),E.viewport(me.copy(se).multiplyScalar(Me).round())},this.getScissor=function(u){return u.copy(Ue)},this.setScissor=function(u,_,b,C){u.isVector4?Ue.set(u.x,u.y,u.z,u.w):Ue.set(u,_,b,C),E.scissor(ee.copy(Ue).multiplyScalar(Me).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(u){E.setScissorTest(ke=u)},this.setOpaqueSort=function(u){tt=u},this.setTransparentSort=function(u){$=u},this.getClearColor=function(u){return u.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(u=!0,_=!0,b=!0){let C=0;if(u){let N=!1;if(j!==null){const W=j.texture.format;N=g.has(W)}if(N){const W=j.texture.type,U=m.has(W),X=Oe.getClearColor(),Y=Oe.getClearAlpha(),K=X.r,ne=X.g,he=X.b;U?(S[0]=K,S[1]=ne,S[2]=he,S[3]=Y,z.clearBufferuiv(z.COLOR,0,S)):(R[0]=K,R[1]=ne,R[2]=he,R[3]=Y,z.clearBufferiv(z.COLOR,0,R))}else C|=z.COLOR_BUFFER_BIT}_&&(C|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),b&&(C|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&z.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),A=u},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Oe.dispose(),Ce.dispose(),ce.dispose(),ie.dispose(),Re.dispose(),de.dispose(),Ne.dispose(),xe.dispose(),Le.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Kr),Fe.removeEventListener("sessionend",Zr),ci.stop()};function At(u){u.preventDefault(),Ja("WebGLRenderer: Context Lost."),w=!0}function Tt(){Ja("WebGLRenderer: Context Restored."),w=!1;const u=Z.autoReset,_=Te.enabled,b=Te.autoUpdate,C=Te.needsUpdate,N=Te.type;Ye(),Z.autoReset=u,Te.enabled=_,Te.autoUpdate=b,Te.needsUpdate=C,Te.type=N}function Yt(u){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function In(u){const _=u.target;_.removeEventListener("dispose",In),fo(_)}function fo(u){po(u),ie.remove(u)}function po(u){const _=ie.get(u).programs;_!==void 0&&(_.forEach(function(b){Le.releaseProgram(b)}),u.isShaderMaterial&&Le.releaseShaderCache(u))}this.renderBufferDirect=function(u,_,b,C,N,W){_===null&&(_=nt);const U=N.isMesh&&N.matrixWorld.determinantAffine()<0,X=jr(u,_,b,C,N);E.setMaterial(C,U);let Y=b.index,K=1;if(C.wireframe===!0){if(Y=le.getWireframeAttribute(b),Y===void 0)return;K=2}const ne=b.drawRange,he=b.attributes.position;let J=ne.start*K,ge=(ne.start+ne.count)*K;W!==null&&(J=Math.max(J,W.start*K),ge=Math.min(ge,(W.start+W.count)*K)),Y!==null?(J=Math.max(J,0),ge=Math.min(ge,Y.count)):he!=null&&(J=Math.max(J,0),ge=Math.min(ge,he.count));const we=ge-J;if(we<0||we===1/0)return;Ne.setup(N,C,X,b,Y);let ve,be=te;if(Y!==null&&(ve=Ie.get(Y),be=ue,be.setIndex(ve)),N.isMesh)C.wireframe===!0?(E.setLineWidth(C.wireframeLinewidth*rt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(N.isLine){let He=C.linewidth;He===void 0&&(He=1),E.setLineWidth(He*rt()),N.isLineSegments?be.setMode(z.LINES):N.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else N.isPoints?be.setMode(z.POINTS):N.isSprite&&be.setMode(z.TRIANGLES);if(N.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))be.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const He=N._multiDrawStarts,ye=N._multiDrawCounts,et=N._multiDrawCount,We=Y?Ie.get(Y).bytesPerElement:1,Ge=ie.get(C).currentProgram.getUniforms();for(let De=0;De<et;De++)Ge.setValue(z,"_gl_DrawID",De),be.render(He[De]/We,ye[De])}else if(N.isInstancedMesh)be.renderInstances(J,we,N.count);else if(b.isInstancedBufferGeometry){const He=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,ye=Math.min(b.instanceCount,He);be.renderInstances(J,we,ye)}else be.render(J,we)};function Yr(u,_,b){u.transparent===!0&&u.side===xn&&u.forceSinglePass===!1?(u.side=bn,u.needsUpdate=!0,ui(u,_,b),u.side=yi,u.needsUpdate=!0,ui(u,_,b),u.side=xn):ui(u,_,b)}this.compile=function(u,_,b=null){b===null&&(b=u),P=ce.get(b),P.init(_),y.push(P),b.traverseVisible(function(N){N.isLight&&N.layers.test(_.layers)&&(P.pushLight(N),N.castShadow&&P.pushShadow(N))}),u!==b&&u.traverseVisible(function(N){N.isLight&&N.layers.test(_.layers)&&(P.pushLight(N),N.castShadow&&P.pushShadow(N))}),P.setupLights();const C=new Set;return u.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const W=N.material;if(W)if(Array.isArray(W))for(let U=0;U<W.length;U++){const X=W[U];Yr(X,b,N),C.add(X)}else Yr(W,b,N),C.add(W)}),P=y.pop(),C},this.compileAsync=function(u,_,b=null){const C=this.compile(u,_,b);return new Promise(N=>{function W(){if(C.forEach(function(U){ie.get(U).currentProgram.isReady()&&C.delete(U)}),C.size===0){N(u);return}setTimeout(W,10)}_t.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Js=null;function qr(u){Js&&Js(u)}function Kr(){ci.stop()}function Zr(){ci.start()}const ci=new rf;ci.setAnimationLoop(qr),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(u){Js=u,Fe.setAnimationLoop(u),u===null?ci.stop():ci.start()},Fe.addEventListener("sessionstart",Kr),Fe.addEventListener("sessionend",Zr),this.render=function(u,_){if(_!==void 0&&_.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A!==null&&A.renderStart(u,_);const b=Fe.enabled===!0&&Fe.isPresenting===!0,C=L!==null&&(j===null||b)&&L.begin(v,j);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(_),_=Fe.getCamera()),u.isScene===!0&&u.onBeforeRender(v,u,_,j),P=ce.get(u,y.length),P.init(_),P.state.textureUnits=ae.getTextureUnits(),y.push(P),Ae.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),Ze.setFromProjectionMatrix(Ae,ni,_.reversedDepth),_e=this.localClippingEnabled,Ee=Se.init(this.clippingPlanes,_e),I=Ce.get(u,D.length),I.init(),D.push(I),Fe.enabled===!0&&Fe.isPresenting===!0){const U=v.xr.getDepthSensingMesh();U!==null&&as(U,_,-1/0,v.sortObjects)}as(u,_,0,v.sortObjects),I.finish(),v.sortObjects===!0&&I.sort(tt,$,_.reversedDepth),qe=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,qe&&Oe.addToRenderList(I,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Se.beginShadows();const N=P.state.shadowsArray;if(Te.render(N,u,_),Ee===!0&&Se.endShadows(),(C&&L.hasRenderPass())===!1){const U=I.opaque,X=I.transmissive;if(P.setupLights(),_.isArrayCamera){const Y=_.cameras;if(X.length>0)for(let K=0,ne=Y.length;K<ne;K++){const he=Y[K];Qs(U,X,u,he)}qe&&Oe.render(u);for(let K=0,ne=Y.length;K<ne;K++){const he=Y[K];$r(I,u,he,he.viewport)}}else X.length>0&&Qs(U,X,u,_),qe&&Oe.render(u),$r(I,u,_)}j!==null&&G===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),C&&L.end(v),u.isScene===!0&&u.onAfterRender(v,u,_),Ne.resetDefaultState(),Q=-1,oe=null,y.pop(),y.length>0?(P=y[y.length-1],ae.setTextureUnits(P.state.textureUnits),Ee===!0&&Se.setGlobalState(v.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?I=D[D.length-1]:I=null,A!==null&&A.renderEnd()};function as(u,_,b,C){if(u.visible===!1)return;if(u.layers.test(_.layers)){if(u.isGroup)b=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(_);else if(u.isLightProbeGrid)P.pushLightProbeGrid(u);else if(u.isLight)P.pushLight(u),u.castShadow&&P.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Ze.intersectsSprite(u)){C&&Qe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Ae);const U=de.update(u),X=u.material;X.visible&&I.push(u,U,X,b,Qe.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Ze.intersectsObject(u))){const U=de.update(u),X=u.material;if(C&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Qe.copy(u.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),Qe.copy(U.boundingSphere.center)),Qe.applyMatrix4(u.matrixWorld).applyMatrix4(Ae)),Array.isArray(X)){const Y=U.groups;for(let K=0,ne=Y.length;K<ne;K++){const he=Y[K],J=X[he.materialIndex];J&&J.visible&&I.push(u,U,J,b,Qe.z,he)}}else X.visible&&I.push(u,U,X,b,Qe.z,null)}}const W=u.children;for(let U=0,X=W.length;U<X;U++)as(W[U],_,b,C)}function $r(u,_,b,C){const{opaque:N,transmissive:W,transparent:U}=u;P.setupLightsView(b),Ee===!0&&Se.setGlobalState(v.clippingPlanes,b),C&&E.viewport(me.copy(C)),N.length>0&&os(N,_,b),W.length>0&&os(W,_,b),U.length>0&&os(U,_,b),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Qs(u,_,b,C){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[C.id]===void 0){const J=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[C.id]=new Tn(1,1,{generateMipmaps:!0,type:J?cn:Cn,minFilter:ti,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const W=P.state.transmissionRenderTarget[C.id],U=C.viewport||me;W.setSize(U.z*v.transmissionResolutionScale,U.w*v.transmissionResolutionScale);const X=v.getRenderTarget(),Y=v.getActiveCubeFace(),K=v.getActiveMipmapLevel();v.setRenderTarget(W),v.getClearColor(dt),at=v.getClearAlpha(),at<1&&v.setClearColor(16777215,.5),v.clear(),qe&&Oe.render(b);const ne=v.toneMapping;v.toneMapping=si;const he=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),P.setupLightsView(C),Ee===!0&&Se.setGlobalState(v.clippingPlanes,C),os(u,b,C),ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W),_t.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let ge=0,we=_.length;ge<we;ge++){const ve=_[ge],{object:be,geometry:He,material:ye,group:et}=ve;if(ye.side===xn&&be.layers.test(C.layers)){const We=ye.side;ye.side=bn,ye.needsUpdate=!0,Jr(be,b,C,He,ye,et),ye.side=We,ye.needsUpdate=!0,J=!0}}J===!0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W))}v.setRenderTarget(X,Y,K),v.setClearColor(dt,at),he!==void 0&&(C.viewport=he),v.toneMapping=ne}function os(u,_,b){const C=_.isScene===!0?_.overrideMaterial:null;for(let N=0,W=u.length;N<W;N++){const U=u[N],{object:X,geometry:Y,group:K}=U;let ne=U.material;ne.allowOverride===!0&&C!==null&&(ne=C),X.layers.test(b.layers)&&Jr(X,_,b,Y,ne,K)}}function Jr(u,_,b,C,N,W){u.onBeforeRender(v,_,b,C,N,W),u.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),N.onBeforeRender(v,_,b,C,u,W),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,v.renderBufferDirect(b,_,C,N,u,W),N.side=yi,N.needsUpdate=!0,v.renderBufferDirect(b,_,C,N,u,W),N.side=xn):v.renderBufferDirect(b,_,C,N,u,W),u.onAfterRender(v,_,b,C,N,W)}function ui(u,_,b){_.isScene!==!0&&(_=nt);const C=ie.get(u),N=P.state.lights,W=P.state.shadowsArray,U=N.state.version,X=Le.getParameters(u,N.state,W,_,b,P.state.lightProbeGridArray),Y=Le.getProgramCacheKey(X);let K=C.programs;C.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?_.environment:null,C.fog=_.fog;const ne=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;C.envMap=Re.get(u.envMap||C.environment,ne),C.envMapRotation=C.environment!==null&&u.envMap===null?_.environmentRotation:u.envMapRotation,K===void 0&&(u.addEventListener("dispose",In),K=new Map,C.programs=K);let he=K.get(Y);if(he!==void 0){if(C.currentProgram===he&&C.lightsStateVersion===U)return Qr(u,X),he}else X.uniforms=Le.getUniforms(u),A!==null&&u.isNodeMaterial&&A.build(u,b,X),u.onBeforeCompile(X,v),he=Le.acquireProgram(X,Y),K.set(Y,he),C.uniforms=X.uniforms;const J=C.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(J.clippingPlanes=Se.uniform),Qr(u,X),C.needsLights=Mn(u),C.lightsStateVersion=U,C.needsLights&&(J.ambientLightColor.value=N.state.ambient,J.lightProbe.value=N.state.probe,J.directionalLights.value=N.state.directional,J.directionalLightShadows.value=N.state.directionalShadow,J.spotLights.value=N.state.spot,J.spotLightShadows.value=N.state.spotShadow,J.rectAreaLights.value=N.state.rectArea,J.ltc_1.value=N.state.rectAreaLTC1,J.ltc_2.value=N.state.rectAreaLTC2,J.pointLights.value=N.state.point,J.pointLightShadows.value=N.state.pointShadow,J.hemisphereLights.value=N.state.hemi,J.directionalShadowMatrix.value=N.state.directionalShadowMatrix,J.spotLightMatrix.value=N.state.spotLightMatrix,J.spotLightMap.value=N.state.spotLightMap,J.pointShadowMatrix.value=N.state.pointShadowMatrix),C.lightProbeGrid=P.state.lightProbeGridArray.length>0,C.currentProgram=he,C.uniformsList=null,he}function zi(u){if(u.uniformsList===null){const _=u.currentProgram.getUniforms();u.uniformsList=Wa.seqWithValue(_.seq,u.uniforms)}return u.uniformsList}function Qr(u,_){const b=ie.get(u);b.outputColorSpace=_.outputColorSpace,b.batching=_.batching,b.batchingColor=_.batchingColor,b.instancing=_.instancing,b.instancingColor=_.instancingColor,b.instancingMorph=_.instancingMorph,b.skinning=_.skinning,b.morphTargets=_.morphTargets,b.morphNormals=_.morphNormals,b.morphColors=_.morphColors,b.morphTargetsCount=_.morphTargetsCount,b.numClippingPlanes=_.numClippingPlanes,b.numIntersection=_.numClipIntersection,b.vertexAlphas=_.vertexAlphas,b.vertexTangents=_.vertexTangents,b.toneMapping=_.toneMapping}function ls(u,_){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;T.setFromMatrixPosition(_.matrixWorld);for(let b=0,C=u.length;b<C;b++){const N=u[b];if(N.texture!==null&&N.boundingBox.containsPoint(T))return N}return null}function jr(u,_,b,C,N){_.isScene!==!0&&(_=nt),ae.resetTextureUnits();const W=_.fog,U=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?_.environment:null,X=j===null?v.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:xt.workingColorSpace,Y=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,K=Re.get(C.envMap||U,Y),ne=C.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,he=!!b.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),J=!!b.morphAttributes.position,ge=!!b.morphAttributes.normal,we=!!b.morphAttributes.color;let ve=si;C.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ve=v.toneMapping);const be=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,He=be!==void 0?be.length:0,ye=ie.get(C),et=P.state.lights;if(Ee===!0&&(_e===!0||u!==oe)){const ct=u===oe&&C.id===Q;Se.setState(C,u,ct)}let We=!1;C.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==et.state.version||ye.outputColorSpace!==X||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==K||C.fog===!0&&ye.fog!==W||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ne||ye.vertexTangents!==he||ye.morphTargets!==J||ye.morphNormals!==ge||ye.morphColors!==we||ye.toneMapping!==ve||ye.morphTargetsCount!==He||!!ye.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ye.__version=C.version);let Ge=ye.currentProgram;We===!0&&(Ge=ui(C,_,N),A&&C.isNodeMaterial&&A.onUpdateProgram(C,Ge,ye));let De=!1,Xe=!1,St=!1;const je=Ge.getUniforms(),Ke=ye.uniforms;if(E.useProgram(Ge.program)&&(De=!0,Xe=!0,St=!0),C.id!==Q&&(Q=C.id,Xe=!0),ye.needsLights){const ct=ls(P.state.lightProbeGridArray,N);ye.lightProbeGrid!==ct&&(ye.lightProbeGrid=ct,Xe=!0)}if(De||oe!==u){E.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",u.projectionMatrix),je.setValue(z,"viewMatrix",u.matrixWorldInverse);const kt=je.map.cameraPosition;kt!==void 0&&kt.setValue(z,st.setFromMatrixPosition(u.matrixWorld)),F.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&je.setValue(z,"isOrthographic",u.isOrthographicCamera===!0),oe!==u&&(oe=u,Xe=!0,St=!0)}if(ye.needsLights&&(et.state.directionalShadowMap.length>0&&je.setValue(z,"directionalShadowMap",et.state.directionalShadowMap,ae),et.state.spotShadowMap.length>0&&je.setValue(z,"spotShadowMap",et.state.spotShadowMap,ae),et.state.pointShadowMap.length>0&&je.setValue(z,"pointShadowMap",et.state.pointShadowMap,ae)),N.isSkinnedMesh){je.setOptional(z,N,"bindMatrix"),je.setOptional(z,N,"bindMatrixInverse");const ct=N.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),je.setValue(z,"boneTexture",ct.boneTexture,ae))}N.isBatchedMesh&&(je.setOptional(z,N,"batchingTexture"),je.setValue(z,"batchingTexture",N._matricesTexture,ae),je.setOptional(z,N,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",N._indirectTexture,ae),je.setOptional(z,N,"batchingColorTexture"),N._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",N._colorsTexture,ae));const ut=b.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0)&&k.update(N,b,Ge),(Xe||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,je.setValue(z,"receiveShadow",N.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&_.environment!==null&&(Ke.envMapIntensity.value=_.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=qx()),Xe){if(je.setValue(z,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&an(Ke,St),W&&C.fog===!0&&Be.refreshFogUniforms(Ke,W),Be.refreshMaterialUniforms(Ke,C,Me,pe,P.state.transmissionRenderTarget[u.id]),ye.needsLights&&ye.lightProbeGrid){const ct=ye.lightProbeGrid;Ke.probesSH.value=ct.texture,Ke.probesMin.value.copy(ct.boundingBox.min),Ke.probesMax.value.copy(ct.boundingBox.max),Ke.probesResolution.value.copy(ct.resolution)}Wa.upload(z,zi(ye),Ke,ae)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Wa.upload(z,zi(ye),Ke,ae),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&je.setValue(z,"center",N.center),je.setValue(z,"modelViewMatrix",N.modelViewMatrix),je.setValue(z,"normalMatrix",N.normalMatrix),je.setValue(z,"modelMatrix",N.matrixWorld),C.uniformsGroups!==void 0){const ct=C.uniformsGroups;for(let kt=0,Et=ct.length;kt<Et;kt++){const En=ct[kt];xe.update(En,Ge),xe.bind(En,Ge)}}return Ge}function an(u,_){u.ambientLightColor.needsUpdate=_,u.lightProbe.needsUpdate=_,u.directionalLights.needsUpdate=_,u.directionalLightShadows.needsUpdate=_,u.pointLights.needsUpdate=_,u.pointLightShadows.needsUpdate=_,u.spotLights.needsUpdate=_,u.spotLightShadows.needsUpdate=_,u.rectAreaLights.needsUpdate=_,u.hemisphereLights.needsUpdate=_}function Mn(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(u,_,b){const C=ie.get(u);C.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),ie.get(u.texture).__webglTexture=_,ie.get(u.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:b,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,_){const b=ie.get(u);b.__webglFramebuffer=_,b.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(u,_=0,b=0){j=u,q=_,G=b;let C=null,N=!1,W=!1;if(u){const X=ie.get(u);if(X.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(z.FRAMEBUFFER,X.__webglFramebuffer),me.copy(u.viewport),ee.copy(u.scissor),Je=u.scissorTest,E.viewport(me),E.scissor(ee),E.setScissorTest(Je),Q=-1;return}else if(X.__webglFramebuffer===void 0)ae.setupRenderTarget(u);else if(X.__hasExternalTextures)ae.rebindTextures(u,ie.get(u.texture).__webglTexture,ie.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const ne=u.depthTexture;if(X.__boundDepthTexture!==ne){if(ne!==null&&ie.has(ne)&&(u.width!==ne.image.width||u.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(u)}}const Y=u.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(W=!0);const K=ie.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(K[_])?C=K[_][b]:C=K[_],N=!0):u.samples>0&&ae.useMultisampledRTT(u)===!1?C=ie.get(u).__webglMultisampledFramebuffer:Array.isArray(K)?C=K[b]:C=K,me.copy(u.viewport),ee.copy(u.scissor),Je=u.scissorTest}else me.copy(se).multiplyScalar(Me).floor(),ee.copy(Ue).multiplyScalar(Me).floor(),Je=ke;if(b!==0&&(C=O),E.bindFramebuffer(z.FRAMEBUFFER,C)&&E.drawBuffers(u,C),E.viewport(me),E.scissor(ee),E.setScissorTest(Je),N){const X=ie.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+_,X.__webglTexture,b)}else if(W){const X=_;for(let Y=0;Y<u.textures.length;Y++){const K=ie.get(u.textures[Y]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Y,K.__webglTexture,b,X)}}else if(u!==null&&b!==0){const X=ie.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,X.__webglTexture,b)}Q=-1},this.readRenderTargetPixels=function(u,_,b,C,N,W,U,X=0){if(!(u&&u.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y){E.bindFramebuffer(z.FRAMEBUFFER,Y);try{const K=u.textures[X],ne=K.format,he=K.type;if(u.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+X),!F.textureFormatReadable(ne)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(he)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=u.width-C&&b>=0&&b<=u.height-N&&z.readPixels(_,b,C,N,Pe.convert(ne),Pe.convert(he),W)}finally{const K=j!==null?ie.get(j).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(u,_,b,C,N,W,U,X=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y)if(_>=0&&_<=u.width-C&&b>=0&&b<=u.height-N){E.bindFramebuffer(z.FRAMEBUFFER,Y);const K=u.textures[X],ne=K.format,he=K.type;if(u.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+X),!F.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const J=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,J),z.bufferData(z.PIXEL_PACK_BUFFER,W.byteLength,z.STREAM_READ),z.readPixels(_,b,C,N,Pe.convert(ne),Pe.convert(he),0);const ge=j!==null?ie.get(j).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,ge);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await md(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,J),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,W),z.deleteBuffer(J),z.deleteSync(we),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,_=null,b=0){const C=Math.pow(2,-b),N=Math.floor(u.image.width*C),W=Math.floor(u.image.height*C),U=_!==null?_.x:0,X=_!==null?_.y:0;ae.setTexture2D(u,0),z.copyTexSubImage2D(z.TEXTURE_2D,b,0,0,U,X,N,W),E.unbindTexture()},this.copyTextureToTexture=function(u,_,b=null,C=null,N=0,W=0){let U,X,Y,K,ne,he,J,ge,we;const ve=u.isCompressedTexture?u.mipmaps[W]:u.image;if(b!==null)U=b.max.x-b.min.x,X=b.max.y-b.min.y,Y=b.isBox3?b.max.z-b.min.z:1,K=b.min.x,ne=b.min.y,he=b.isBox3?b.min.z:0;else{const Ke=Math.pow(2,-N);U=Math.floor(ve.width*Ke),X=Math.floor(ve.height*Ke),u.isDataArrayTexture?Y=ve.depth:u.isData3DTexture?Y=Math.floor(ve.depth*Ke):Y=1,K=0,ne=0,he=0}C!==null?(J=C.x,ge=C.y,we=C.z):(J=0,ge=0,we=0);const be=Pe.convert(_.format),He=Pe.convert(_.type);let ye;_.isData3DTexture?(ae.setTexture3D(_,0),ye=z.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(ae.setTexture2DArray(_,0),ye=z.TEXTURE_2D_ARRAY):(ae.setTexture2D(_,0),ye=z.TEXTURE_2D),E.activeTexture(z.TEXTURE0),E.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,_.flipY),E.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),E.pixelStorei(z.UNPACK_ALIGNMENT,_.unpackAlignment);const et=E.getParameter(z.UNPACK_ROW_LENGTH),We=E.getParameter(z.UNPACK_IMAGE_HEIGHT),Ge=E.getParameter(z.UNPACK_SKIP_PIXELS),De=E.getParameter(z.UNPACK_SKIP_ROWS),Xe=E.getParameter(z.UNPACK_SKIP_IMAGES);E.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(z.UNPACK_SKIP_PIXELS,K),E.pixelStorei(z.UNPACK_SKIP_ROWS,ne),E.pixelStorei(z.UNPACK_SKIP_IMAGES,he);const St=u.isDataArrayTexture||u.isData3DTexture,je=_.isDataArrayTexture||_.isData3DTexture;if(u.isDepthTexture){const Ke=ie.get(u),ut=ie.get(_),ct=ie.get(Ke.__renderTarget),kt=ie.get(ut.__renderTarget);E.bindFramebuffer(z.READ_FRAMEBUFFER,ct.__webglFramebuffer),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Et=0;Et<Y;Et++)St&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(u).__webglTexture,N,he+Et),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(_).__webglTexture,W,we+Et)),z.blitFramebuffer(K,ne,U,X,J,ge,U,X,z.DEPTH_BUFFER_BIT,z.NEAREST);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(N!==0||u.isRenderTargetTexture||ie.has(u)){const Ke=ie.get(u),ut=ie.get(_);E.bindFramebuffer(z.READ_FRAMEBUFFER,H),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,B);for(let ct=0;ct<Y;ct++)St?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ke.__webglTexture,N,he+ct):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ke.__webglTexture,N),je?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ut.__webglTexture,W,we+ct):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ut.__webglTexture,W),N!==0?z.blitFramebuffer(K,ne,U,X,J,ge,U,X,z.COLOR_BUFFER_BIT,z.NEAREST):je?z.copyTexSubImage3D(ye,W,J,ge,we+ct,K,ne,U,X):z.copyTexSubImage2D(ye,W,J,ge,K,ne,U,X);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else je?u.isDataTexture||u.isData3DTexture?z.texSubImage3D(ye,W,J,ge,we,U,X,Y,be,He,ve.data):_.isCompressedArrayTexture?z.compressedTexSubImage3D(ye,W,J,ge,we,U,X,Y,be,ve.data):z.texSubImage3D(ye,W,J,ge,we,U,X,Y,be,He,ve):u.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,J,ge,U,X,be,He,ve.data):u.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,J,ge,ve.width,ve.height,be,ve.data):z.texSubImage2D(z.TEXTURE_2D,W,J,ge,U,X,be,He,ve);E.pixelStorei(z.UNPACK_ROW_LENGTH,et),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,We),E.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(z.UNPACK_SKIP_ROWS,De),E.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe),W===0&&_.generateMipmaps&&z.generateMipmap(ye),E.unbindTexture()},this.initRenderTarget=function(u){ie.get(u).__webglFramebuffer===void 0&&ae.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?ae.setTextureCube(u,0):u.isData3DTexture?ae.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?ae.setTexture2DArray(u,0):ae.setTexture2D(u,0),E.unbindTexture()},this.resetState=function(){q=0,G=0,j=null,E.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function Wr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new rn;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,f),c+=p}}if(t){let f=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+f);f+=i[d].attributes.position.count}l.setIndex(h)}for(const f in r){const h=oh(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let d=0;d<h;++d){const p=[];for(let M=0;M<a[f].length;++M)p.push(a[f][M][d]);const x=oh(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(x)}}}return l}function oh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const a=new e(r),o=new tn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=f.count;d<p;d++)for(let x=0;x<t;x++){const M=f.getComponent(d,x);o.setComponent(d+h,x,M)}}else a.set(f.array,l);l+=f.count*t}return s!==void 0&&(o.gpuType=s),o}function lh(i,e){if(e===id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vl||e===Oh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Vl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zx=new Vr(-1,1,1,-1,0,1);class $x extends rn{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const Jx=new $x;class Lc{constructor(e){this._mesh=new yt(Jx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qx extends $s{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zr.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ch extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class jx extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ev{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qx(Xa),this.copyPass.material.blending=ii,this.timer=new Gp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ch!==void 0&&(a instanceof ch?n=!0:a instanceof jx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tv extends $s{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const nv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends $s{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(r,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Tn(r,a,{type:cn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Tn(r,a,{type:cn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=nv;this.highPassUniforms=zr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new $e(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zr.clone(Xa.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,premultipliedAlpha:!0,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new ln,this._fsQuad=new Lc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Xs.BlurDirectionX=new $e(1,0);Xs.BlurDirectionY=new $e(0,1);const Da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class iv extends $s{constructor(){super(),this.isOutputPass=!0,this.uniforms=zr.clone(Da.uniforms),this.material=new Qh({name:Da.name,uniforms:this.uniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new Lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===no?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function sv(i){const e=new Map,t=new Map,n=i.clone();return df(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function df(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)df(i.children[n],e.children[n],t)}class rv extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new uh(t,Mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uh(t,Mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new bv(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Rr.extractUrlBase(e);a=Rr.resolveURL(c,this.path)}else a=Rr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Rc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pf){try{a[Mt.KHR_BINARY_GLTF]=new Tv(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ov(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const h=r.extensionsUsed[f],d=r.extensionsRequired||[];switch(h){case Mt.KHR_MATERIALS_UNLIT:a[h]=new lv;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Ev(r,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[h]=new wv;break;case Mt.KHR_MESH_QUANTIZATION:a[h]=new Av;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function av(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ov{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const f=new Ve(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],Kt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sf(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nf(f),c.distance=h;break;case"spot":c=new Zl(f),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class lv{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class cv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(r,r)}return Promise.all(s)}}class hv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class dv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class pv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class mv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],Kt),Promise.all(s)}}class gv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],Kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(s)}}class xv{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class vv{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Mv{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class yv{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Sv{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class uh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,f=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(f*h);return a.decodeGltfBuffer(new Uint8Array(p),f,h,d,s.mode,s.filter),p})})}else return null}}class bv{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(f=>(l[c]=f,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const f=c.pop(),h=f.isGroup?f.children:[f],d=c[0].count,p=[];for(const x of h){const M=new mt,g=new V,m=new Ti,S=new V(1,1,1),R=new Yl(x.geometry,x.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),R.setMatrixAt(T,M.compose(g,m,S));for(const T in l)if(T==="_COLOR_0"){const I=l[T];R.instanceColor=new Xl(I.array,I.itemSize,I.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&x.geometry.setAttribute(T,l[T]);Nt.prototype.copy.call(R,x),this.parser.assignFinalMaterial(R),p.push(R)}return f.isGroup?(f.clear(),f.add(...p),f):p[0]}))}}const pf="glTF",pr=12,hh={JSON:1313821514,BIN:5130562};class Tv{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-pr,r=new DataView(e,pr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===hh.JSON){const c=new Uint8Array(e,pr+a,o);this.content=n.decode(c)}else if(l===hh.BIN){const c=pr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ev{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const f in a){const h=jl[f]||f.toLowerCase();o[h]=a[f]}for(const f in e.attributes){const h=jl[f]||f.toLowerCase();if(a[f]!==void 0){const d=n.accessors[e.attributes[f]],p=Bs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(h,d){s.decodeDracoFile(f,function(p){for(const x in p.attributes){const M=p.attributes[x],g=l[x];g!==void 0&&(M.normalized=g)}h(p)},o,c,Kt,d)})})}}class wv{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Av{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class mf extends Ys{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,f=s-t,h=(n-t)/f,d=h*h,p=d*h,x=e*c,M=x-c,g=-2*p+3*d,m=p-d,S=1-g,R=m-d+h;for(let T=0;T!==o;T++){const I=a[M+T+o],P=a[M+T+l]*f,D=a[x+T+o],y=a[x+T]*f;r[T]=S*I+R*P+g*D+m*y}return r}}const Rv=new Ti;class Cv extends mf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Rv.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:jt,9729:zt,9984:Ph,9985:za,9986:Mr,9987:ti},dh={33071:On,33648:qa,10497:Fi},Jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Pv={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Lr},Qo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Iv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function Yi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Lv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,f=e.length;c<f;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const f=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=f),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Nv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dv(i){let e;const t=i.extensions&&i.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jo(t.attributes):e=i.indices+":"+jo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+jo(i.targets[n]);return e}function jo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ec(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Fv=new mt;class Ov{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new av,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ef(this.options.manager):this.textureLoader=new zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Yi(r,o,s),jn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,f]of a.children.entries())r(f,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Rr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Jo[s.type],o=Bs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new tn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Jo[s.type],c=Bs[s.componentType],f=c.BYTES_PER_ELEMENT,h=f*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let M,g;if(p&&p!==h){const m=Math.floor(d/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let R=t.cache.get(S);R||(M=new c(o,m*p,s.count*p/f),R=new Wh(M,p/f),t.cache.add(S,R)),g=new Or(R,l,d%p/f,x)}else o===null?M=new c(s.count*l):M=new c(o,d,s.count*l),g=new tn(M,l,x);if(s.sparse!==void 0){const m=Jo.SCALAR,S=Bs[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,I=new S(a[1],R,s.sparse.count*m),P=new c(a[2],T,s.sparse.count*l);o!==null&&(g=new tn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let D=0,y=I.length;D<y;D++){const L=I[D];if(g.setX(L,P[D*l]),l>=2&&g.setY(L,P[D*l+1]),l>=3&&g.setZ(L,P[D*l+2]),l>=4&&g.setW(L,P[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return f.magFilter=fh[d.magFilter]||zt,f.minFilter=fh[d.minFilter]||ti,f.wrapS=dh[d.wrapS]||Fi,f.wrapT=dh[d.wrapT]||Fi,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==jt&&f.minFilter!==zt,s.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(M){const g=new en(M);g.needsUpdate=!0,d(g)}),t.load(Rr.resolveURL(h,r.path),x,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),jn(h,a),h.userData.mimeType=a.mimeType||Uv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Kh,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ec,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Mt.KHR_MATERIALS_UNLIT]){const h=s[Mt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Kt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xn);const f=r.alphaMode||Qo.OPAQUE;if(f===Qo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Qo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ln){const h=r.emissiveFactor;o.emissive=new Ve().setRGB(h[0],h[1],h[2],Kt)}return r.emissiveTexture!==void 0&&a!==ln&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Yi(s,h,r),h})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ph(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],f=Dv(c),h=s[f];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ph(new rn,c,t),s[f]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const f=a[l].material===void 0?Iv(this.cache):this.getDependency("material",a[l].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let p=0,x=f.length;p<x;p++){const M=f[p],g=a[p];let m;const S=c[p];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new sp(M,S):new yt(M,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?m.geometry=lh(m.geometry,Oh):g.mode===Nn.TRIANGLE_FAN&&(m.geometry=lh(m.geometry,Vl));else if(g.mode===Nn.LINES)m=new up(M,S);else if(g.mode===Nn.LINE_STRIP)m=new ro(M,S);else if(g.mode===Nn.LINE_LOOP)m=new hp(M,S);else if(g.mode===Nn.POINTS)m=new fp(M,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Nv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),jn(m,r),g.extensions&&Yi(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,x=h.length;p<x;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Yi(s,h[0],r),h[0];const d=new Ct;r.extensions&&Yi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,x=h.length;p<x;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(Nd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,f=a.length;c<f;c++){const h=a[c];if(h){o.push(h);const d=new mt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],f=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],x=s.samplers[p.sampler],M=p.target,g=M.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,S=s.parameters!==void 0?s.parameters[x.output]:x.output;M.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(x),f.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(h){const d=h[0],p=h[1],x=h[2],M=h[3],g=h[4],m=[];for(let R=0,T=d.length;R<T;R++){const I=d[R],P=p[R],D=x[R],y=M[R],L=g[R];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const v=n._createAnimationTracks(I,P,D,y,L);if(v)for(let w=0;w<v.length;w++)m.push(v[w])}const S=new Ap(r,void 0,m);return jn(S,s),S})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,f=o.length;c<f;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const f=c[0],h=c[1],d=c[2];d!==null&&f.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Fv)});for(let p=0,x=h.length;p<x;p++)f.add(h[p]);if(f.userData.pivot!==void 0&&h.length>0){const p=f.userData.pivot,x=h[0];f.pivot=new V().fromArray(p),f.position.x-=p[0],f.position.y-=p[1],f.position.z-=p[2],x.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let f;if(r.isBone===!0?f=new qh:c.length>1?f=new Ct:c.length===1?f=c[0]:f=new Nt,f!==c[0])for(let h=0,d=c.length;h<d;h++)f.add(c[h]);if(r.name&&(f.userData.name=r.name,f.name=a),jn(f,r),r.extensions&&Yi(n,f,r),r.matrix!==void 0){const h=new mt;h.fromArray(r.matrix),f.applyMatrix4(h)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!s.associations.has(f))s.associations.set(f,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(f);s.associations.set(f,{...h})}return s.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ct;n.name&&(r.name=s.createUniqueName(n.name)),jn(r,n),n.extensions&&Yi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let f=0,h=l.length;f<h;f++){const d=l[f];d.parent!==null?r.add(sv(d)):r.add(d)}const c=f=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Pn||d instanceof en)&&h.set(d,p);return f.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Ii[r.path]===Ii.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let f;switch(Ii[r.path]){case Ii.weights:f=kr;break;case Ii.rotation:f=Hr;break;case Ii.translation:case Ii.scale:f=eo;break;default:n.itemSize===1?f=kr:f=eo;break}const h=s.interpolation!==void 0?Pv[s.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let p=0,x=l.length;p<x;p++){const M=new f(l[p]+"."+Ii[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ec(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Hr?Cv:mf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Bv(i,e,t){const n=e.attributes,s=new qn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),o.normalized){const f=ec(Bs[o.componentType]);s.min.multiplyScalar(f),s.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new V,l=new V;for(let c=0,f=r.length;c<f;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){const M=ec(Bs[d.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new oi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ph(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=jl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return xt.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),jn(i,e),Bv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Lv(i,e.targets,t):i})}var Fn=Uint8Array,Ns=Uint16Array,zv=Int32Array,gf=new Fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_f=new Fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kv=new Fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xf=function(i,e){for(var t=new Ns(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new zv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},vf=xf(gf,2),Mf=vf.b,Hv=vf.r;Mf[28]=258,Hv[258]=28;var Gv=xf(_f,0),Vv=Gv.b,tc=new Ns(32768);for(var Ut=0;Ut<32768;++Ut){var Li=(Ut&43690)>>1|(Ut&21845)<<1;Li=(Li&52428)>>2|(Li&13107)<<2,Li=(Li&61680)>>4|(Li&3855)<<4,tc[Ut]=((Li&65280)>>8|(Li&255)<<8)>>1}var Cr=(function(i,e,t){for(var n=i.length,s=0,r=new Ns(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Ns(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Ns(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],f=e-i[s],h=a[i[s]-1]++<<f,d=h|(1<<f)-1;h<=d;++h)o[tc[h]>>l]=c}else for(o=new Ns(n),s=0;s<n;++s)i[s]&&(o[s]=tc[a[i[s]-1]++]>>15-i[s]);return o}),Xr=new Fn(288);for(var Ut=0;Ut<144;++Ut)Xr[Ut]=8;for(var Ut=144;Ut<256;++Ut)Xr[Ut]=9;for(var Ut=256;Ut<280;++Ut)Xr[Ut]=7;for(var Ut=280;Ut<288;++Ut)Xr[Ut]=8;var yf=new Fn(32);for(var Ut=0;Ut<32;++Ut)yf[Ut]=5;var Wv=Cr(Xr,9,1),Xv=Cr(yf,5,1),el=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Hn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},tl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Yv=function(i){return(i+7)/8|0},qv=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Fn(i.subarray(e,t))},Kv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vn=function(i,e,t){var n=new Error(e||Kv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vn),!t)throw n;return n},Zv=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new Fn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Fn(s*3));var c=function(se){var Ue=t.length;if(se>Ue){var ke=new Fn(Math.max(Ue*2,se));ke.set(t),t=ke}},f=e.f||0,h=e.p||0,d=e.b||0,p=e.l,x=e.d,M=e.m,g=e.n,m=s*8;do{if(!p){f=Hn(i,h,1);var S=Hn(i,h+1,3);if(h+=3,S)if(S==1)p=Wv,x=Xv,M=9,g=5;else if(S==2){var P=Hn(i,h,31)+257,D=Hn(i,h+10,15)+4,y=P+Hn(i,h+5,31)+1;h+=14;for(var L=new Fn(y),v=new Fn(19),w=0;w<D;++w)v[kv[w]]=Hn(i,h+w*3,7);h+=D*3;for(var A=el(v),O=(1<<A)-1,H=Cr(v,A,1),w=0;w<y;){var B=H[Hn(i,h,O)];h+=B&15;var R=B>>4;if(R<16)L[w++]=R;else{var q=0,G=0;for(R==16?(G=3+Hn(i,h,3),h+=2,q=L[w-1]):R==17?(G=3+Hn(i,h,7),h+=3):R==18&&(G=11+Hn(i,h,127),h+=7);G--;)L[w++]=q}}var j=L.subarray(0,P),Q=L.subarray(P);M=el(j),g=el(Q),p=Cr(j,M,1),x=Cr(Q,g,1)}else Vn(1);else{var R=Yv(h)+4,T=i[R-4]|i[R-3]<<8,I=R+T;if(I>s){l&&Vn(0);break}o&&c(d+T),t.set(i.subarray(R,I),d),e.b=d+=T,e.p=h=I*8,e.f=f;continue}if(h>m){l&&Vn(0);break}}o&&c(d+131072);for(var oe=(1<<M)-1,me=(1<<g)-1,ee=h;;ee=h){var q=p[tl(i,h)&oe],Je=q>>4;if(h+=q&15,h>m){l&&Vn(0);break}if(q||Vn(2),Je<256)t[d++]=Je;else if(Je==256){ee=h,p=null;break}else{var dt=Je-254;if(Je>264){var w=Je-257,at=gf[w];dt=Hn(i,h,(1<<at)-1)+Mf[w],h+=at}var fe=x[tl(i,h)&me],pe=fe>>4;fe||Vn(3),h+=fe&15;var Q=Vv[pe];if(pe>3){var at=_f[pe];Q+=tl(i,h)&(1<<at)-1,h+=at}if(h>m){l&&Vn(0);break}o&&c(d+131072);var Me=d+dt;if(d<Q){var tt=r-Q,$=Math.min(Q,Me);for(tt+d<0&&Vn(3);d<$;++d)t[d]=n[tt+d]}for(;d<Me;++d)t[d]=t[d-Q]}}e.l=p,e.p=ee,e.b=d,e.f=f,p&&(f=1,e.m=M,e.d=x,e.n=g)}while(!f);return d!=t.length&&a?qv(t,0,d):t.subarray(0,d)},$v=new Fn(0),Jv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Vn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Vn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function mr(i,e){return Zv(i.subarray(Jv(i),-4),{i:2},e,e)}var Qv=typeof TextDecoder<"u"&&new TextDecoder,jv=0;try{Qv.decode($v,{stream:!0}),jv=1}catch{}class eM extends Dp{constructor(e){super(e),this.type=cn,this.outputFormat=Qt,this.part=0}parse(e){const L=Math.pow(2.7182818,2.2);let v=null;function w(u,_){let b=0;for(let N=0;N<65536;++N)(N==0||u[N>>3]&1<<(N&7))&&(_[b++]=N);const C=b-1;for(;b<65536;)_[b++]=0;return C}function A(u){for(let _=0;_<16384;_++)u[_]={},u[_].len=0,u[_].lit=0,u[_].p=null}const O={l:0,c:0,lc:0};function H(u,_,b,C,N){for(;b<u;)_=_<<8|ce(C,N),b+=8;b-=u,O.l=_>>b&(1<<u)-1,O.c=_,O.lc=b}const B=new Array(59);function q(u){for(let b=0;b<=58;++b)B[b]=0;for(let b=0;b<65537;++b)B[u[b]]+=1;let _=0;for(let b=58;b>0;--b){const C=_+B[b]>>1;B[b]=_,_=C}for(let b=0;b<65537;++b){const C=u[b];C>0&&(u[b]=C|B[C]++<<6)}}function G(u,_,b,C,N,W){const U=_;let X=0,Y=0;for(;C<=N;C++){if(U.value-_.value>b)return!1;H(6,X,Y,u,U);const K=O.l;if(X=O.c,Y=O.lc,W[C]=K,K==63){if(U.value-_.value>b)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");H(8,X,Y,u,U);let ne=O.l+6;if(X=O.c,Y=O.lc,C+ne>N+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;ne--;)W[C++]=0;C--}else if(K>=59){let ne=K-59+2;if(C+ne>N+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;ne--;)W[C++]=0;C--}}q(W)}function j(u){return u&63}function Q(u){return u>>6}function oe(u,_,b,C){for(;_<=b;_++){const N=Q(u[_]),W=j(u[_]);if(N>>W)throw new Error("THREE.EXRLoader: Invalid table entry");if(W>14){const U=C[N>>W-14];if(U.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(U.lit++,U.p){const X=U.p;U.p=new Array(U.lit);for(let Y=0;Y<U.lit-1;++Y)U.p[Y]=X[Y]}else U.p=new Array(1);U.p[U.lit-1]=_}else if(W){let U=0;for(let X=1<<14-W;X>0;X--){const Y=C[(N<<14-W)+U];if(Y.len||Y.p)throw new Error("THREE.EXRLoader: Invalid table entry");Y.len=W,Y.lit=_,U++}}}return!0}const me={c:0,lc:0};function ee(u,_,b,C){u=u<<8|ce(b,C),_+=8,me.c=u,me.lc=_}const Je={c:0,lc:0};function dt(u,_,b,C,N,W,U,X,Y){if(u==_){C<8&&(ee(b,C,N,W),b=me.c,C=me.lc),C-=8;let K=b>>C;if(K=new Uint8Array([K])[0],X.value+K>Y)return!1;const ne=U[X.value-1];for(;K-- >0;)U[X.value++]=ne}else if(X.value<Y)U[X.value++]=u;else return!1;Je.c=b,Je.lc=C}function at(u){return u&65535}function fe(u){const _=at(u);return _>32767?_-65536:_}const pe={a:0,b:0};function Me(u,_){const b=fe(u),N=fe(_),W=b+(N&1)+(N>>1),U=W,X=W-N;pe.a=U,pe.b=X}function tt(u,_){const b=at(u),C=at(_),N=b-(C>>1)&65535,W=C+N-32768&65535;pe.a=W,pe.b=N}function $(u,_,b,C,N,W,U){const X=U<16384,Y=b>N?N:b;let K=1,ne,he;for(;K<=Y;)K<<=1;for(K>>=1,ne=K,K>>=1;K>=1;){he=0;const J=he+W*(N-ne),ge=W*K,we=W*ne,ve=C*K,be=C*ne;let He,ye,et,We;for(;he<=J;he+=we){let Ge=he;const De=he+C*(b-ne);for(;Ge<=De;Ge+=be){const Xe=Ge+ve,St=Ge+ge,je=St+ve;X?(Me(u[Ge+_],u[St+_]),He=pe.a,et=pe.b,Me(u[Xe+_],u[je+_]),ye=pe.a,We=pe.b,Me(He,ye),u[Ge+_]=pe.a,u[Xe+_]=pe.b,Me(et,We),u[St+_]=pe.a,u[je+_]=pe.b):(tt(u[Ge+_],u[St+_]),He=pe.a,et=pe.b,tt(u[Xe+_],u[je+_]),ye=pe.a,We=pe.b,tt(He,ye),u[Ge+_]=pe.a,u[Xe+_]=pe.b,tt(et,We),u[St+_]=pe.a,u[je+_]=pe.b)}if(b&K){const Xe=Ge+ge;X?Me(u[Ge+_],u[Xe+_]):tt(u[Ge+_],u[Xe+_]),He=pe.a,u[Xe+_]=pe.b,u[Ge+_]=He}}if(N&K){let Ge=he;const De=he+C*(b-ne);for(;Ge<=De;Ge+=be){const Xe=Ge+ve;X?Me(u[Ge+_],u[Xe+_]):tt(u[Ge+_],u[Xe+_]),He=pe.a,u[Xe+_]=pe.b,u[Ge+_]=He}}ne=K,K>>=1}return he}function se(u,_,b,C,N,W,U,X,Y){let K=0,ne=0;const he=U,J=Math.trunc(C.value+(N+7)/8);for(;C.value<J;)for(ee(K,ne,b,C),K=me.c,ne=me.lc;ne>=14;){const we=K>>ne-14&16383,ve=_[we];if(ve.len)ne-=ve.len,dt(ve.lit,W,K,ne,b,C,X,Y,he),K=Je.c,ne=Je.lc;else{if(!ve.p)throw new Error("THREE.EXRLoader: hufDecode issues");let be;for(be=0;be<ve.lit;be++){const He=j(u[ve.p[be]]);for(;ne<He&&C.value<J;)ee(K,ne,b,C),K=me.c,ne=me.lc;if(ne>=He&&Q(u[ve.p[be]])==(K>>ne-He&(1<<He)-1)){ne-=He,dt(ve.p[be],W,K,ne,b,C,X,Y,he),K=Je.c,ne=Je.lc;break}}if(be==ve.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const ge=8-N&7;for(K>>=ge,ne-=ge;ne>0;){const we=_[K<<14-ne&16383];if(we.len)ne-=we.len,dt(we.lit,W,K,ne,b,C,X,Y,he),K=Je.c,ne=Je.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function Ue(u,_,b,C,N,W){const U={value:0},X=b.value,Y=Ce(_,b),K=Ce(_,b);b.value+=4;const ne=Ce(_,b);if(b.value+=4,Y<0||Y>=65537||K<0||K>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const he=new Array(65537),J=new Array(16384);A(J);const ge=C-(b.value-X);if(G(u,b,ge,Y,K,he),ne>8*(C-(b.value-X)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");oe(he,Y,K,J),se(he,J,u,b,ne,K,W,N,U)}function ke(u,_,b){for(let C=0;C<b;++C)_[C]=u[_[C]]}function Ze(u){for(let _=1;_<u.length;_++){const b=u[_-1]+u[_]-128;u[_]=b}}function Ee(u,_){let b=0,C=Math.floor((u.length+1)/2),N=0;const W=u.length-1;for(;!(N>W||(_[N++]=u[b++],N>W));)_[N++]=u[C++]}function _e(u){let _=u.byteLength;const b=new Array;let C=0;const N=new DataView(u);for(;_>0;){const W=N.getInt8(C++);if(W<0){const U=-W;_-=U+1;for(let X=0;X<U;X++)b.push(N.getUint8(C++))}else{const U=W;_-=2;const X=N.getUint8(C++);for(let Y=0;Y<U+1;Y++)b.push(X)}}return b}function Ae(u,_,b,C,N,W){let U=new DataView(W.buffer);const X=b[u.idx[0]].width,Y=b[u.idx[0]].height,K=3,ne=Math.floor(X/8),he=Math.ceil(X/8),J=Math.ceil(Y/8),ge=X-(he-1)*8,we=Y-(J-1)*8,ve={value:0},be=new Array(K),He=new Array(K),ye=new Array(K),et=new Array(K),We=new Array(K);for(let De=0;De<K;++De)We[De]=_[u.idx[De]],be[De]=De<1?0:be[De-1]+he*J,He[De]=new Float32Array(64),ye[De]=new Uint16Array(64),et[De]=new Uint16Array(he*64);for(let De=0;De<J;++De){let Xe=8;De==J-1&&(Xe=we);let St=8;for(let Ke=0;Ke<he;++Ke){Ke==he-1&&(St=ge);for(let ut=0;ut<K;++ut)ye[ut].fill(0),ye[ut][0]=N[be[ut]++],Qe(ve,C,ye[ut]),nt(ye[ut],He[ut]),qe(He[ut]);rt(He);for(let ut=0;ut<K;++ut)z(He[ut],et[ut],Ke*64)}let je=0;for(let Ke=0;Ke<K;++Ke){const ut=b[u.idx[Ke]].type;for(let ct=8*De;ct<8*De+Xe;++ct){je=We[Ke][ct];for(let kt=0;kt<ne;++kt){const Et=kt*64+(ct&7)*8;U.setUint16(je+0*ut,et[Ke][Et+0],!0),U.setUint16(je+2*ut,et[Ke][Et+1],!0),U.setUint16(je+4*ut,et[Ke][Et+2],!0),U.setUint16(je+6*ut,et[Ke][Et+3],!0),U.setUint16(je+8*ut,et[Ke][Et+4],!0),U.setUint16(je+10*ut,et[Ke][Et+5],!0),U.setUint16(je+12*ut,et[Ke][Et+6],!0),U.setUint16(je+14*ut,et[Ke][Et+7],!0),je+=16*ut}}if(ne!=he)for(let ct=8*De;ct<8*De+Xe;++ct){const kt=We[Ke][ct]+8*ne*2*ut,Et=ne*64+(ct&7)*8;for(let En=0;En<St;++En)U.setUint16(kt+En*2*ut,et[Ke][Et+En],!0)}}}const Ge=new Uint16Array(X);U=new DataView(W.buffer);for(let De=0;De<K;++De){b[u.idx[De]].decoded=!0;const Xe=b[u.idx[De]].type;if(b[De].type==2)for(let St=0;St<Y;++St){const je=We[De][St];for(let Ke=0;Ke<X;++Ke)Ge[Ke]=U.getUint16(je+Ke*2*Xe,!0);for(let Ke=0;Ke<X;++Ke)U.setFloat32(je+Ke*2*Xe,te(Ge[Ke]),!0)}}}function st(u,_,b,C,N,W){const U=new DataView(W.buffer),X=b[u],Y=X.width,K=X.height,ne=Math.ceil(Y/8),he=Math.ceil(K/8),J=Math.floor(Y/8),ge=Y-(ne-1)*8,we=K-(he-1)*8,ve={value:0};let be=0;const He=new Float32Array(64),ye=new Uint16Array(64),et=new Uint16Array(ne*64);for(let We=0;We<he;++We){let Ge=8;We==he-1&&(Ge=we);for(let De=0;De<ne;++De)ye.fill(0),ye[0]=N[be++],Qe(ve,C,ye),nt(ye,He),qe(He),z(He,et,De*64);for(let De=8*We;De<8*We+Ge;++De){let Xe=_[u][De];for(let St=0;St<J;++St){const je=St*64+(De&7)*8;for(let Ke=0;Ke<8;++Ke)U.setUint16(Xe+Ke*2*X.type,et[je+Ke],!0);Xe+=16*X.type}if(ne!=J){const St=J*64+(De&7)*8;for(let je=0;je<ge;++je)U.setUint16(Xe+je*2*X.type,et[St+je],!0)}}}X.decoded=!0}function Qe(u,_,b){let C,N=1;for(;N<64;)C=_[u.value],C==65280?N=64:C>>8==255?N+=C&255:(b[N]=C,N++),u.value++}function nt(u,_){_[0]=te(u[0]),_[1]=te(u[1]),_[2]=te(u[5]),_[3]=te(u[6]),_[4]=te(u[14]),_[5]=te(u[15]),_[6]=te(u[27]),_[7]=te(u[28]),_[8]=te(u[2]),_[9]=te(u[4]),_[10]=te(u[7]),_[11]=te(u[13]),_[12]=te(u[16]),_[13]=te(u[26]),_[14]=te(u[29]),_[15]=te(u[42]),_[16]=te(u[3]),_[17]=te(u[8]),_[18]=te(u[12]),_[19]=te(u[17]),_[20]=te(u[25]),_[21]=te(u[30]),_[22]=te(u[41]),_[23]=te(u[43]),_[24]=te(u[9]),_[25]=te(u[11]),_[26]=te(u[18]),_[27]=te(u[24]),_[28]=te(u[31]),_[29]=te(u[40]),_[30]=te(u[44]),_[31]=te(u[53]),_[32]=te(u[10]),_[33]=te(u[19]),_[34]=te(u[23]),_[35]=te(u[32]),_[36]=te(u[39]),_[37]=te(u[45]),_[38]=te(u[52]),_[39]=te(u[54]),_[40]=te(u[20]),_[41]=te(u[22]),_[42]=te(u[33]),_[43]=te(u[38]),_[44]=te(u[46]),_[45]=te(u[51]),_[46]=te(u[55]),_[47]=te(u[60]),_[48]=te(u[21]),_[49]=te(u[34]),_[50]=te(u[37]),_[51]=te(u[47]),_[52]=te(u[50]),_[53]=te(u[56]),_[54]=te(u[59]),_[55]=te(u[61]),_[56]=te(u[35]),_[57]=te(u[36]),_[58]=te(u[48]),_[59]=te(u[49]),_[60]=te(u[57]),_[61]=te(u[58]),_[62]=te(u[62]),_[63]=te(u[63])}function qe(u){const _=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),C=.5*Math.cos(3.14159/8),N=.5*Math.cos(3*3.14159/16),W=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),X=.5*Math.cos(7*3.14159/16),Y=new Array(4),K=new Array(4),ne=new Array(4),he=new Array(4);for(let J=0;J<8;++J){const ge=J*8;Y[0]=C*u[ge+2],Y[1]=U*u[ge+2],Y[2]=C*u[ge+6],Y[3]=U*u[ge+6],K[0]=b*u[ge+1]+N*u[ge+3]+W*u[ge+5]+X*u[ge+7],K[1]=N*u[ge+1]-X*u[ge+3]-b*u[ge+5]-W*u[ge+7],K[2]=W*u[ge+1]-b*u[ge+3]+X*u[ge+5]+N*u[ge+7],K[3]=X*u[ge+1]-W*u[ge+3]+N*u[ge+5]-b*u[ge+7],ne[0]=_*(u[ge+0]+u[ge+4]),ne[3]=_*(u[ge+0]-u[ge+4]),ne[1]=Y[0]+Y[3],ne[2]=Y[1]-Y[2],he[0]=ne[0]+ne[1],he[1]=ne[3]+ne[2],he[2]=ne[3]-ne[2],he[3]=ne[0]-ne[1],u[ge+0]=he[0]+K[0],u[ge+1]=he[1]+K[1],u[ge+2]=he[2]+K[2],u[ge+3]=he[3]+K[3],u[ge+4]=he[3]-K[3],u[ge+5]=he[2]-K[2],u[ge+6]=he[1]-K[1],u[ge+7]=he[0]-K[0]}for(let J=0;J<8;++J)Y[0]=C*u[16+J],Y[1]=U*u[16+J],Y[2]=C*u[48+J],Y[3]=U*u[48+J],K[0]=b*u[8+J]+N*u[24+J]+W*u[40+J]+X*u[56+J],K[1]=N*u[8+J]-X*u[24+J]-b*u[40+J]-W*u[56+J],K[2]=W*u[8+J]-b*u[24+J]+X*u[40+J]+N*u[56+J],K[3]=X*u[8+J]-W*u[24+J]+N*u[40+J]-b*u[56+J],ne[0]=_*(u[J]+u[32+J]),ne[3]=_*(u[J]-u[32+J]),ne[1]=Y[0]+Y[3],ne[2]=Y[1]-Y[2],he[0]=ne[0]+ne[1],he[1]=ne[3]+ne[2],he[2]=ne[3]-ne[2],he[3]=ne[0]-ne[1],u[0+J]=he[0]+K[0],u[8+J]=he[1]+K[1],u[16+J]=he[2]+K[2],u[24+J]=he[3]+K[3],u[32+J]=he[3]-K[3],u[40+J]=he[2]-K[2],u[48+J]=he[1]-K[1],u[56+J]=he[0]-K[0]}function rt(u){for(let _=0;_<64;++_){const b=u[0][_],C=u[1][_],N=u[2][_];u[0][_]=b+1.5747*N,u[1][_]=b-.1873*C-.4682*N,u[2][_]=b+1.8556*C}}function z(u,_,b){for(let C=0;C<64;++C)_[b+C]=Vi.toHalfFloat(Ft(u[C]))}function Ft(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(L,Math.abs(u)-1)}function _t(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function F(u){const _=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),b=new Uint8Array(_e(_)),C=new Uint8Array(b.length);return Ze(b),Ee(b,C),new DataView(C.buffer)}function E(u){const _=u.array.slice(u.offset.value,u.offset.value+u.size),b=mr(_),C=new Uint8Array(b.length);return Ze(b),Ee(b,C),new DataView(C.buffer)}function Z(u){const _=u.viewer,b={value:u.offset.value},C=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),N=new Uint8Array(8192);let W=0;const U=new Array(u.inputChannels.length);for(let we=0,ve=u.inputChannels.length;we<ve;we++)U[we]={},U[we].start=W,U[we].end=U[we].start,U[we].nx=u.columns,U[we].ny=u.lines,U[we].size=u.type,W+=U[we].nx*U[we].ny*U[we].size;const X=ue(_,b),Y=ue(_,b);if(Y>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(X<=Y)for(let we=0;we<Y-X+1;we++)N[we+X]=Se(_,b);const K=new Uint16Array(65536),ne=w(N,K),he=Ce(_,b);Ue(u.array,_,b,he,C,W);for(let we=0;we<u.inputChannels.length;++we){const ve=U[we];for(let be=0;be<U[we].size;++be)$(C,ve.start+be,ve.nx,ve.size,ve.ny,ve.nx*ve.size,ne)}ke(K,C,W);let J=0;const ge=new Uint8Array(C.buffer.byteLength);for(let we=0;we<u.lines;we++)for(let ve=0;ve<u.inputChannels.length;ve++){const be=U[ve],He=be.nx*be.size,ye=new Uint8Array(C.buffer,be.end*2,He*2);ge.set(ye,J),J+=He*2,be.end+=He}return new DataView(ge.buffer)}function ie(u){const _=u.array.slice(u.offset.value,u.offset.value+u.size),b=mr(_),C=u.inputChannels.length*u.lines*u.columns*u.totalBytes,N=new ArrayBuffer(C),W=new DataView(N);let U=0,X=0;const Y=new Array(4);for(let K=0;K<u.lines;K++)for(let ne=0;ne<u.inputChannels.length;ne++){let he=0;switch(u.inputChannels[ne].pixelType){case 1:Y[0]=U,Y[1]=Y[0]+u.columns,U=Y[1]+u.columns;for(let ge=0;ge<u.columns;++ge){const we=b[Y[0]++]<<8|b[Y[1]++];he+=we,W.setUint16(X,he,!0),X+=2}break;case 2:Y[0]=U,Y[1]=Y[0]+u.columns,Y[2]=Y[1]+u.columns,U=Y[2]+u.columns;for(let ge=0;ge<u.columns;++ge){const we=b[Y[0]++]<<24|b[Y[1]++]<<16|b[Y[2]++]<<8;he+=we,W.setUint32(X,he,!0),X+=4}break}}return W}function ae(u){const _=u.array;let b=u.offset.value;const C=u.columns,N=u.lines,W=u.inputChannels,U=u.totalBytes,X=an.compression==="B44A_COMPRESSION",Y=new Uint8Array(N*C*U),K=new Uint16Array(16);let ne=0;for(let he=0;he<W.length;he++){const J=W[he],ge=J.pixelType*2,we=Math.ceil(C/J.xSampling),ve=Math.ceil(N/J.ySampling),be=J.xSampling===1&&J.ySampling===1;if(J.pixelType!==1){for(let et=0;et<ve;et++)if(be){const We=et*C*U+ne*C;for(let Ge=0;Ge<we*ge;Ge++)Y[We+Ge]=_[b++]}else b+=we*ge;ne+=ge;continue}const He=Math.ceil(we/4),ye=Math.ceil(ve/4);for(let et=0;et<ye;et++)for(let We=0;We<He;We++){if(X&&_[b+2]>=52){const Ge=_[b]<<8|_[b+1],De=Ge&32768?Ge&32767:~Ge&65535;K.fill(De),b+=3}else{const Ge=_[b]<<8|_[b+1],De=_[b+2]>>2,Xe=32<<De,St=Ge+((_[b+2]<<4|_[b+3]>>4)&63)*(1<<De)-Xe&65535,je=St+((_[b+3]<<2|_[b+4]>>6)&63)*(1<<De)-Xe&65535,Ke=je+(_[b+4]&63)*(1<<De)-Xe&65535,ut=Ge+(_[b+5]>>2&63)*(1<<De)-Xe&65535,ct=St+((_[b+5]<<4|_[b+6]>>4)&63)*(1<<De)-Xe&65535,kt=je+((_[b+6]<<2|_[b+7]>>6)&63)*(1<<De)-Xe&65535,Et=Ke+(_[b+7]&63)*(1<<De)-Xe&65535,En=ut+(_[b+8]>>2&63)*(1<<De)-Xe&65535,cs=ct+((_[b+8]<<4|_[b+9]>>4)&63)*(1<<De)-Xe&65535,js=kt+((_[b+9]<<2|_[b+10]>>6)&63)*(1<<De)-Xe&65535,Zn=Et+(_[b+10]&63)*(1<<De)-Xe&65535,ki=En+(_[b+11]>>2&63)*(1<<De)-Xe&65535,ea=cs+((_[b+11]<<4|_[b+12]>>4)&63)*(1<<De)-Xe&65535,ta=js+((_[b+12]<<2|_[b+13]>>6)&63)*(1<<De)-Xe&65535,na=Zn+(_[b+13]&63)*(1<<De)-Xe&65535,er=[Ge,ut,En,ki,St,ct,cs,ea,je,kt,js,ta,Ke,Et,Zn,na];for(let us=0;us<16;us++)K[us]=er[us]&32768?er[us]&32767:~er[us]&65535;b+=14}if(J.pLinear){if(v===null){v=new Uint16Array(65536);for(let Ge=0;Ge<65536;Ge++)if((Ge&31744)===31744||Ge>32768)v[Ge]=0;else{const De=te(Ge);v[Ge]=De<=0?0:Vi.toHalfFloat(8*Math.log(De))}}for(let Ge=0;Ge<16;Ge++)K[Ge]=v[K[Ge]]}for(let Ge=0;Ge<4;Ge++){const De=et*4+Ge;if(!(De>=ve))for(let Xe=0;Xe<4;Xe++){const St=We*4+Xe;if(St>=we)continue;const je=K[Ge*4+Xe];for(let Ke=0;Ke<J.ySampling;Ke++){const ut=De*J.ySampling+Ke;if(!(ut>=N))for(let ct=0;ct<J.xSampling;ct++){const kt=St*J.xSampling+ct;if(kt>=C)continue;const Et=ut*C*U+ne*C+kt*2;Y[Et]=je&255,Y[Et+1]=je>>8&255}}}}}ne+=2}return new DataView(Y.buffer)}function Re(u){const _=u.viewer,b={value:u.offset.value},C=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),N={version:Te(_,b),unknownUncompressedSize:Te(_,b),unknownCompressedSize:Te(_,b),acCompressedSize:Te(_,b),dcCompressedSize:Te(_,b),rleCompressedSize:Te(_,b),rleUncompressedSize:Te(_,b),rleRawSize:Te(_,b),totalAcUncompressedCount:Te(_,b),totalDcUncompressedCount:Te(_,b),acCompression:Te(_,b)};if(N.version<2)throw new Error("THREE.EXRLoader: "+an.compression+" version "+N.version+" is unsupported");const W=new Array;let U=ue(_,b)-2;for(;U>0;){const ve=Ie(_.buffer,b),be=Se(_,b),He=be>>2&3,ye=(be>>4)-1,et=new Int8Array([ye])[0],We=Se(_,b);W.push({name:ve,index:et,type:We,compression:He}),U-=ve.length+3}const X=an.channels,Y=new Array(u.inputChannels.length);for(let ve=0;ve<u.inputChannels.length;++ve){const be=Y[ve]={},He=X[ve];be.name=He.name,be.compression=0,be.decoded=!1,be.type=He.pixelType,be.pLinear=He.pLinear,be.width=u.columns,be.height=u.lines}const K={idx:new Array(3)};for(let ve=0;ve<u.inputChannels.length;++ve){const be=Y[ve],He=be.name.lastIndexOf("."),ye=He>=0?be.name.substring(He+1):be.name;for(let et=0;et<W.length;++et){const We=W[et];ye===We.name&&be.type===We.type&&(be.compression=We.compression,We.index>=0&&(K.idx[We.index]=ve),be.offset=ve)}}let ne,he,J;if(N.acCompressedSize>0)switch(N.acCompression){case 0:ne=new Uint16Array(N.totalAcUncompressedCount),Ue(u.array,_,b,N.acCompressedSize,ne,N.totalAcUncompressedCount);break;case 1:const ve=u.array.slice(b.value,b.value+N.totalAcUncompressedCount),be=mr(ve);ne=new Uint16Array(be.buffer),b.value+=N.totalAcUncompressedCount;break}if(N.dcCompressedSize>0){const ve={array:u.array,offset:b,size:N.dcCompressedSize};he=new Uint16Array(E(ve).buffer),b.value+=N.dcCompressedSize}if(N.rleRawSize>0){const ve=u.array.slice(b.value,b.value+N.rleCompressedSize),be=mr(ve);J=_e(be.buffer),b.value+=N.rleCompressedSize}let ge=0;const we=new Array(Y.length);for(let ve=0;ve<we.length;++ve)we[ve]=new Array;for(let ve=0;ve<u.lines;++ve)for(let be=0;be<Y.length;++be)we[be].push(ge),ge+=Y[be].width*u.type*2;K.idx[0]!==void 0&&Y[K.idx[0]]&&Ae(K,we,Y,ne,he,C);for(let ve=0;ve<Y.length;++ve){const be=Y[ve];if(!be.decoded)switch(be.compression){case 2:let He=0,ye=0;for(let et=0;et<u.lines;++et){let We=we[ve][He];for(let Ge=0;Ge<be.width;++Ge){for(let De=0;De<2*be.type;++De)C[We++]=J[ye+De*be.width*be.height];ye++}He++}break;case 1:st(ve,we,Y,ne,he,C);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(C.buffer)}function Ie(u,_){const b=new Uint8Array(u);let C=0;for(;b[_.value+C]!=0;)C+=1;const N=new TextDecoder().decode(b.slice(_.value,_.value+C));return _.value=_.value+C+1,N}function le(u,_,b){const C=new TextDecoder().decode(new Uint8Array(u).slice(_.value,_.value+b));return _.value=_.value+b,C}function de(u,_){const b=Be(u,_),C=Ce(u,_);return[b,C]}function Le(u,_){const b=Ce(u,_),C=Ce(u,_);return[b,C]}function Be(u,_){const b=u.getInt32(_.value,!0);return _.value=_.value+4,b}function Ce(u,_){const b=u.getUint32(_.value,!0);return _.value=_.value+4,b}function ce(u,_){const b=u[_.value];return _.value=_.value+1,b}function Se(u,_){const b=u.getUint8(_.value);return _.value=_.value+1,b}const Te=function(u,_){const b=Number(u.getBigInt64(_.value,!0));return _.value+=8,b};function Oe(u,_){const b=u.getFloat32(_.value,!0);return _.value+=4,b}function k(u,_){return Vi.toHalfFloat(Oe(u,_))}function te(u){const _=(u&31744)>>10,b=u&1023;return(u>>15?-1:1)*(_?_===31?b?NaN:1/0:Math.pow(2,_-15)*(1+b/1024):6103515625e-14*(b/1024))}function ue(u,_){const b=u.getUint16(_.value,!0);return _.value+=2,b}function Pe(u,_){return te(ue(u,_))}function Ne(u,_,b,C){const N=b.value,W=[];for(;b.value<N+C-1;){const U=Ie(_,b),X=Be(u,b),Y=Se(u,b);b.value+=3;const K=Be(u,b),ne=Be(u,b);W.push({name:U,pixelType:X,pLinear:Y,xSampling:K,ySampling:ne})}return b.value+=1,W}function xe(u,_){const b=Oe(u,_),C=Oe(u,_),N=Oe(u,_),W=Oe(u,_),U=Oe(u,_),X=Oe(u,_),Y=Oe(u,_),K=Oe(u,_);return{redX:b,redY:C,greenX:N,greenY:W,blueX:U,blueY:X,whiteX:Y,whiteY:K}}function Ye(u,_){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],C=Se(u,_);return b[C]}function Fe(u,_){const b=Be(u,_),C=Be(u,_),N=Be(u,_),W=Be(u,_);return{xMin:b,yMin:C,xMax:N,yMax:W}}function At(u,_){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],C=Se(u,_);return b[C]}function Tt(u,_){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],C=Se(u,_);return b[C]}function Yt(u,_){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],C=["ROUND_DOWN","ROUND_UP"],N=Ce(u,_),W=Ce(u,_),U=Se(u,_);return{xSize:N,ySize:W,levelMode:b[U&15],roundingMode:C[U>>4]}}function In(u,_){const b=Oe(u,_),C=Oe(u,_);return[b,C]}function fo(u,_){const b=Oe(u,_),C=Oe(u,_),N=Oe(u,_);return[b,C,N]}function po(u,_,b,C,N){if(C==="string"||C==="stringvector"||C==="iccProfile")return le(_,b,N);if(C==="chlist")return Ne(u,_,b,N);if(C==="chromaticities")return xe(u,b);if(C==="compression")return Ye(u,b);if(C==="box2i")return Fe(u,b);if(C==="envmap")return Tt(u,b);if(C==="tiledesc")return Yt(u,b);if(C==="lineOrder")return At(u,b);if(C==="float")return Oe(u,b);if(C==="v2f")return In(u,b);if(C==="v3f")return fo(u,b);if(C==="int")return Be(u,b);if(C==="rational")return de(u,b);if(C==="timecode")return Le(u,b);if(C==="preview"||C==="deepImageState"||C==="idmanifest")return b.value+=N,"skipped";b.value+=N}function Yr(u,_){const b=Math.log2(u);return _=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function Js(u,_,b){let C=0;switch(u.levelMode){case"ONE_LEVEL":C=1;break;case"MIPMAP_LEVELS":C=Yr(Math.max(_,b),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return C}function qr(u,_,b,C){const N=new Array(u);for(let W=0;W<u;W++){const U=1<<W;let X=_/U|0;C=="ROUND_UP"&&X*U<_&&(X+=1);const Y=Math.max(X,1);N[W]=(Y+b-1)/b|0}return N}function Kr(){const u=this,_=u.offset,b={value:0};for(let C=0;C<u.tileCount;C++){const N=Be(u.viewer,_),W=Be(u.viewer,_);_.value+=8,u.size=Ce(u.viewer,_);const U=N*u.blockWidth,X=W*u.blockHeight;u.columns=U+u.blockWidth>u.width?u.width-U:u.blockWidth,u.lines=X+u.blockHeight>u.height?u.height-X:u.blockHeight;const Y=u.columns*u.totalBytes,ne=u.size<u.lines*Y?u.uncompress(u):_t(u);_.value+=u.size;for(let he=0;he<u.lines;he++){const J=he*u.columns*u.totalBytes;for(let ge=0;ge<u.inputChannels.length;ge++){const we=an.channels[ge].name,ve=u.channelByteOffsets[we]*u.columns,be=u.decodeChannels[we];if(be===void 0)continue;b.value=J+ve;const He=(u.height-(1+X+he))*u.outLineWidth;for(let ye=0;ye<u.columns;ye++){const et=He+(ye+U)*u.outputChannels+be;u.byteArray[et]=u.getter(ne,b)}}}}}function Zr(){const u=this,_=u.offset,b={value:0};for(let C=0;C<u.height/u.blockHeight;C++){const N=Be(u.viewer,_)-an.dataWindow.yMin;u.size=Ce(u.viewer,_),u.lines=N+u.blockHeight>u.height?u.height-N:u.blockHeight;const W=u.columns*u.totalBytes,X=u.size<u.lines*W?u.uncompress(u):_t(u);_.value+=u.size;for(let Y=0;Y<u.lines;Y++){const K=N+Y,ne=Y*W,he=(u.height-1-K)*u.outLineWidth;for(let J=0;J<u.inputChannels.length;J++){const ge=an.channels[J].name,we=u.channelByteOffsets[ge]*u.columns,ve=u.decodeChannels[ge];if(ve!==void 0){b.value=ne+we;for(let be=0;be<u.columns;be++){const He=he+be*u.outputChannels+ve;u.byteArray[He]=u.getter(X,b)}}}}}}function ci(){const u=this,_=u.chunkOffsets,b={value:0};for(let C=0;C<_.length;C++){const N={value:_[C]};N.value+=4;const W=Be(u.viewer,N)-an.dataWindow.yMin;u.size=Ce(u.viewer,N),u.lines=W+u.blockHeight>u.height?u.height-W:u.blockHeight;const U=u.columns*u.totalBytes,X=u.size<u.lines*U,Y=u.offset;u.offset=N;const K=X?u.uncompress(u):_t(u);u.offset=Y;for(let ne=0;ne<u.lines;ne++){const he=W+ne,J=ne*U,ge=(u.height-1-he)*u.outLineWidth;for(let we=0;we<u.inputChannels.length;we++){const ve=an.channels[we].name,be=u.channelByteOffsets[ve]*u.columns,He=u.decodeChannels[ve];if(He!==void 0){b.value=J+be;for(let ye=0;ye<u.columns;ye++){const et=ge+ye*u.outputChannels+He;u.byteArray[et]=u.getter(K,b)}}}}}}function as(u,_,b,C){if(b===0)return null;const N=u.slice(_,_+b);switch(C){case"NO_COMPRESSION":return new DataView(N.buffer,N.byteOffset,N.byteLength);case"RLE_COMPRESSION":{const W=new Uint8Array(_e(N.buffer.slice(N.byteOffset,N.byteOffset+N.byteLength))),U=new Uint8Array(W.length);return Ze(W),Ee(W,U),new DataView(U.buffer)}case"ZIPS_COMPRESSION":{const W=mr(N),U=new Uint8Array(W.length);return Ze(W),Ee(W,U),new DataView(U.buffer)}default:throw new Error("THREE.EXRLoader: "+C+" is unsupported for deep data")}}function $r(){const u=this,_=u.chunkOffsets,b=u.width,C=u.height,N=u.deepChannels,W=an.compression,U=u.multiPart,X=u.decodeChannels,Y=u.outputChannels,K=u.byteArray instanceof Uint16Array;let ne=-1;for(let he=0;he<N.length;he++)if(N[he].name==="A"){ne=he;break}for(let he=0;he<_.length;he++){const J={value:_[he]};U&&(J.value+=4);const ge=Be(u.viewer,J)-an.dataWindow.yMin,we=Te(u.viewer,J),ve=Te(u.viewer,J);Te(u.viewer,J);const be=as(u.array,J.value,we,W);if(J.value+=we,be===null)continue;const He=new Uint32Array(b);for(let Xe=0;Xe<b;Xe++)He[Xe]=be.getUint32(Xe*4,!0);const ye=He[b-1];if(ye===0){J.value+=ve;continue}const et=as(u.array,J.value,ve,W),We=[];let Ge=0;for(let Xe=0;Xe<N.length;Xe++)We.push(Ge),Ge+=ye*N[Xe].bytesPerSample;const De=(C-1-ge)*u.outLineWidth;for(let Xe=0;Xe<b;Xe++){const St=Xe===0?0:He[Xe-1],Ke=He[Xe]-St;if(Ke===0)continue;const ut=new Float32Array(Y);let ct=0;for(let Et=0;Et<Ke;Et++){const En=St+Et,cs=1-ct;if(cs<=0)break;let js=1;if(ne>=0){const Zn=N[ne].bytesPerSample,ki=We[ne]+En*Zn;js=Zn===2?te(et.getUint16(ki,!0)):et.getFloat32(ki,!0)}for(let Zn=0;Zn<N.length;Zn++){const ki=N[Zn],ea=X[ki.name];if(ea===void 0)continue;const ta=ki.bytesPerSample,na=We[Zn]+En*ta,er=ta===2?te(et.getUint16(na,!0)):et.getFloat32(na,!0);ut[ea]+=er*cs}ct+=js*cs}X.A!==void 0&&(ut[X.A]=ct);const kt=De+Xe*Y;for(let Et=0;Et<Y;Et++)u.byteArray[kt+Et]=K?Vi.toHalfFloat(ut[Et]):ut[Et]}}}function Qs(u,_,b){const C={};let N=!1;for(;;){const W=Ie(_,b);if(W==="")break;N=!0;const U=Ie(_,b),X=Ce(u,b),Y=po(u,_,b,U,X);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):C[W]=Y}return N?C:null}function os(u,_,b){if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const C=u.getUint8(4),N=u.getUint8(5),W={singleTile:!!(N&2),longName:!!(N&4),deepFormat:!!(N&8),multiPart:!!(N&16)};b.value=8;const U=[];if(W.multiPart){for(;;){const X=Qs(u,_,b);if(X===null)break;X.version=C,X.spec=W,U.push(X)}if(U.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const X=Qs(u,_,b);X.version=C,X.spec=W,U.push(X)}return U}function Jr(u,_,b,C,N,W){const U={size:0,viewer:_,array:b,offset:C,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Kt};switch(u.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=_t;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=F;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=E;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=E;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=Z;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=ie;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":U.blockHeight=32,U.uncompress=ae;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=Re;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=Re;break;default:throw new Error("THREE.EXRLoader: "+u.compression+" is unsupported")}const X={};for(const J of u.channels)switch(J.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":X[J.name]=!0,U.type=J.pixelType}let Y=!1,K=!1;if(X.Y&&X.RY&&X.BY)U.outputChannels=4,U.yCbCr=!0;else if(X.R&&X.G&&X.B)U.outputChannels=4;else if(X.Y)U.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(U.outputChannels){case 4:W==Qt?(Y=!X.A,U.format=Qt,U.colorSpace=Kt,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3}):W==Dn?(U.format=Dn,U.colorSpace=Kt,U.outputChannels=2,U.decodeChannels={R:0,G:1}):W==Ji?(U.format=Ji,U.colorSpace=Kt,U.outputChannels=1,U.decodeChannels={R:0}):K=!0;break;case 1:W==Qt?(Y=!0,U.format=Qt,U.colorSpace=Kt,U.outputChannels=4,U.shouldExpand=!0,U.decodeChannels={Y:0}):W==Dn?(U.format=Dn,U.colorSpace=Kt,U.outputChannels=2,U.shouldExpand=!0,U.decodeChannels={Y:0}):W==Ji?(U.format=Ji,U.colorSpace=Kt,U.outputChannels=1,U.decodeChannels={Y:0}):K=!0;break;default:K=!0}if(K)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(U.yCbCr&&(U.format=Qt,U.outputChannels=4,U.decodeChannels={Y:0,RY:1,BY:2},Y=!0),U.type==1)switch(N){case vn:U.getter=Pe;break;case cn:U.getter=ue;break}else if(U.type==2)switch(N){case vn:U.getter=Oe;break;case cn:U.getter=k}else throw new Error("THREE.EXRLoader: unsupported pixelType "+U.type+" for "+u.compression+".");U.columns=U.width;const ne=U.width*U.height*U.outputChannels;switch(N){case vn:U.byteArray=new Float32Array(ne),Y&&U.byteArray.fill(1,0,ne);break;case cn:U.byteArray=new Uint16Array(ne),Y&&U.byteArray.fill(15360,0,ne);break;default:console.error("THREE.EXRLoader: unsupported type: ",N);break}let he=0;for(const J of u.channels)U.decodeChannels[J.name]!==void 0&&(U.channelByteOffsets[J.name]=he),he+=J.pixelType*2;if(U.totalBytes=he,U.outLineWidth=U.width*U.outputChannels,u.spec.deepFormat){U.deepChannels=[];let J=0;for(const ge of u.channels){const we=ge.pixelType===0?4:ge.pixelType*2;U.deepChannels.push({name:ge.name,pixelType:ge.pixelType,bytesPerSample:we}),J+=we}U.deepBytesPerSample=J,U.chunkOffsets=u._chunkOffsets,U.multiPart=u.spec.multiPart,U.decode=$r.bind(U)}else if(u.spec.singleTile){U.blockHeight=u.tiles.ySize,U.blockWidth=u.tiles.xSize;const J=Js(u.tiles,U.width,U.height),ge=qr(J,U.width,u.tiles.xSize,u.tiles.roundingMode),we=qr(J,U.height,u.tiles.ySize,u.tiles.roundingMode);U.tileCount=ge[0]*we[0];for(let ve=0;ve<J;ve++)for(let be=0;be<we[ve];be++)for(let He=0;He<ge[ve];He++)Te(_,C);U.decode=Kr.bind(U)}else if(u.spec.multiPart)U.blockWidth=U.width,U.chunkOffsets=u._chunkOffsets,U.decode=ci.bind(U);else{U.blockWidth=U.width;const J=Math.ceil(U.height/U.blockHeight);for(let ge=0;ge<J;ge++)Te(_,C);U.decode=Zr.bind(U)}return U}const ui={value:0},zi=new DataView(e),Qr=new Uint8Array(e),ls=os(zi,e,ui),jr=Math.max(0,Math.min(this.part,ls.length-1)),an=ls[jr];if(an.spec.multiPart||an.spec.deepFormat)for(let u=0;u<ls.length;u++){const _=ls[u].chunkCount;if(u===jr){an._chunkOffsets=[];for(let b=0;b<_;b++)an._chunkOffsets.push(Te(zi,ui))}else for(let b=0;b<_;b++)Te(zi,ui)}const Mn=Jr(an,zi,Qr,ui,this.type,this.outputFormat);if(Mn.decode(),Mn.shouldExpand){const u=Mn.byteArray;if(this.outputFormat==Qt)for(let _=0;_<u.length;_+=4)u[_+2]=u[_+1]=u[_];else if(this.outputFormat==Dn)for(let _=0;_<u.length;_+=2)u[_+1]=u[_]}if(Mn.yCbCr){const u=Mn.byteArray,_=Mn.width*Mn.height;if(this.type===cn)for(let b=0;b<_;b++){const C=b*4,N=te(u[C]),W=te(u[C+1]),U=te(u[C+2]),X=(1+W)*N,Y=(1+U)*N,K=(N-X*.2126-Y*.0722)/.7152;u[C]=Vi.toHalfFloat(Math.max(0,X)),u[C+1]=Vi.toHalfFloat(Math.max(0,K)),u[C+2]=Vi.toHalfFloat(Math.max(0,Y))}else for(let b=0;b<_;b++){const C=b*4,N=u[C],W=u[C+1],U=u[C+2],X=(1+W)*N,Y=(1+U)*N;u[C]=Math.max(0,X),u[C+1]=Math.max(0,(N-X*.2126-Y*.0722)/.7152),u[C+2]=Math.max(0,Y)}}return{header:an,width:Mn.width,height:Mn.height,data:Mn.byteArray,format:Mn.format,colorSpace:Mn.colorSpace,type:this.type,minFilter:zt,magFilter:zt,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}const Gr="/game-assets",mh=["Diffuse","nor_gl","arm"],gh=["pine_bark","forest_ground_04","rocky_trail","forest_leaves_04"],_h=["fern_02","dead_tree_trunk","boulder_01","gate_latch_01","large_iron_gate","Barrel_02","CheeseBox_01","ladder_sectioned_01","fir_sapling","grass_bermuda_01"],tM=`${Gr}/hdri/je_gray_02_1k.exr`,nM=`${Gr}/textures/twig/twig_diff_1k.png`,iM=`${Gr}/textures/twig/twig_nor_gl_1k.jpg`;function sM(i){const e=new rv,t=new eM,n=new ef;let s=0;const r=gh.length*mh.length+_h.length+2+1,a=()=>{s+=1,i?.(s/r)},o={},l={};let c=null;const f=(M,g)=>new Promise(m=>{const S=`${Gr}/textures/${M}/${M}_${g}_1k.jpg`;n.load(S,R=>{R.wrapS=R.wrapT=Fi,g==="Diffuse"&&(R.colorSpace=Wt),o[`${M}_${g}`]=R,a(),m(R)},void 0,()=>{a(),m(null)})}),h=M=>new Promise(g=>{const m=`${Gr}/models/${M}`;e.load(`${m}/${M}_1k.gltf`,S=>{l[M]=S.scene,a(),g(S.scene)},void 0,()=>{a(),g(null)})}),d=(M,g,m)=>new Promise(S=>{n.load(M,R=>{m&&(R.colorSpace=Wt),o[g]=R,a(),S(R)},void 0,()=>{a(),S(null)})}),p=()=>new Promise(M=>{t.load(tM,g=>{g.mapping=Ba,c=g,a(),M(g)},void 0,()=>{a(),M(null)})});async function x(){const M=[];for(const g of gh)for(const m of mh)M.push(f(g,m));for(const g of _h)M.push(h(g));return M.push(d(nM,"twig_diff",!0)),M.push(d(iM,"twig_nor_gl",!1)),M.push(p()),await Promise.all(M),{textures:o,models:l,hdri:c}}return{loadAll:x}}function Ua(i,e,t={}){return new Bi({map:i[`${e}_Diffuse`]||null,normalMap:i[`${e}_nor_gl`]||null,roughnessMap:i[`${e}_arm`]||null,roughness:1,metalness:0,...t})}function uo(i){let e=i>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Fa(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const xh=i=>i*i*(3-2*i);function rM(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=xh(i-n),a=xh(e-s),o=Fa(n,s,t),l=Fa(n+1,s,t),c=Fa(n,s+1,t),f=Fa(n+1,s+1,t);return o+(l-o)*r+(c+(f-c)*r-(o+(l-o)*r))*a}function nc(i,e,t,n=3){let s=0,r=1,a=1,o=0;for(let l=0;l<n;l++)s+=rM(i*a,e*a,t+l*1013)*r,o+=r,r*=.5,a*=2.07;return s/o}function aM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const vh="BCDFGHJKLMNPQRSTVWXZ";function oM(i,e=4){let t="";for(let n=0;n<e;n++)t+=vh[Math.floor(i()*vh.length)];return t}const lM=20,nl=1/lM,Sf=20,Bt={half:118,fence:120,treeCount:1500,rockCount:220,bushCount:900,terrainAmp:3.6,terrainScale:.017},Zt={eye:1.68,radius:.33,walk:3.5,run:6.4,crouchMul:.45,staminaMax:150,staminaDrain:12,staminaRegen:15,staminaFloor:30,reviveTime:4,downTime:45,pickupRange:4.5},Sr={triggerDist:20,rise:1.15,fall:.3,speedBonus:.32,staminaBonus:70,drainMul:1.6,fovBonus:9},Vt={range:100,angle:.55,focusAngle:.22,focusRange:140},Rn={max:100,darkGain:.9,lightRecover:1.6,stareGain:16,proximityGain:7,altoProximityRange:26,altoProximityGain:19},Gn={alto:{killRange:2.4,stareRange:28,teleportCooldown:3.8,minSpawnDist:26,maxSpawnDist:46,closeInStep:3.6},jauria:{count:3,patrolSpeed:2,chaseSpeed:5.9,hearRange:38,sightRange:20,sightAngle:1.15,attackRange:1.5,lightRepelRange:24,lightRepelTime:2.8},ciego:{count:1,patrolSpeed:.95,chaseSpeed:3.9,hearRange:62,attackRange:2.2,roarCooldown:14,smellRange:15,smellCool:11}},_i={walk:7,run:27,crouch:2,pickup:16,ping:55,revive:12,roar:90,scream:70},Sn={beacons:8,maxPlayers:6,extractionTime:90,roomCodeLength:4},$t={LOBBY:"lobby",HUNT:"hunt",EXTRACTION:"extraction",ESCAPED:"escaped",WIPED:"wiped"},Is=[{key:"torre",name:"Torre del guardabosques"},{key:"caravana",name:"Caravana volcada"},{key:"piedras",name:"Círculo de piedras"},{key:"caseta",name:"Caseta de bombeo"},{key:"tuberia",name:"Tubería de drenaje"},{key:"camion",name:"Camión abandonado"},{key:"puente",name:"Puente de tablones"},{key:"porton",name:"Portón de la valla"}],Ya={nightAtBeacon:3,transitionTime:6},Ds=Math.PI*2,Qn=.22,cM={torre:[[-2.2,-2.2,.32],[2.2,-2.2,.32],[-2.2,2.2,.32],[2.2,2.2,.32],[-2.6,2.7,Qn],[-2,3,Qn]],caravana:[[-2.1,0,1.5],[0,0,1.5],[2.1,0,1.5],[3,-1,Qn],[-3.3,1.1,Qn]],caseta:[[0,0,2.3],[2.5,.9,Qn],[2.5,1.9,Qn],[1.4,2.3,Qn]],camion:[[-2.6,0,1.5],[.2,0,1.5],[3,0,1.5],[4.8,0,Qn],[4.1,1.7,Qn],[3.5,-1.7,Qn]],tuberia:[[-6.2,-1.6,.42]],puente:[[0,-5.2,.42]],piedras:[...Array.from({length:7},(i,e)=>{const t=e/7*Ds;return[Math.cos(t)*4.2,Math.sin(t)*4.2,.55]}),...Array.from({length:5},(i,e)=>{const t=(e/4-.5)*7,n=Math.cos(.5),s=Math.sin(.5);return[.6+n*t,6.8+s*t,.4]}),[5.6,-3.1,.55],[-5.2,4,.42],[-6.5,-5,.15]]};function uM(i){const e=[];for(const t of i){const n=cM[t.key];if(!n)continue;const s=Math.cos(t.rot),r=Math.sin(t.rot);for(const[a,o,l]of n)e.push({x:t.x+a*s+o*r,z:t.z-a*r+o*s,r:l})}return e}function bf(i,e,t){const n=Bt.terrainScale,s=nc(i*n,e*n,t,3),r=nc(i*n*3.9,e*n*3.9,t+7717,2);return(s-.5)*2*Bt.terrainAmp+(r-.5)*1.7}function dn(i,e,t){let n=bf(e,t,i.seed);for(let s=0;s<i.landmarks.length;s++){const r=i.landmarks[s],a=Math.hypot(e-r.x,t-r.z);if(a<r.clear){const o=a/r.clear,l=o*o*(3-2*o);n=r.y*(1-l)+n*l}}return n}function hM(i,e){const t=[],s=i()*Ds,r={x:Math.cos(s)*(Bt.fence-2),z:Math.sin(s)*(Bt.fence-2),rot:s+Math.PI/2,clear:13},a=[];let o=0;for(;a.length<Is.length-1&&o++<4e3;){const c=i()*Ds,f=34+i()*68,h=Math.cos(c)*f,d=Math.sin(c)*f;Math.hypot(h-r.x,d-r.z)<56||a.some(p=>Math.hypot(p.x-h,p.z-d)<46)||a.push({x:h,z:d,rot:i()*Ds,clear:10+i()*5})}for(;a.length<Is.length-1;){const c=a.length/(Is.length-1)*Ds+.3,f=78;a.push({x:Math.cos(c)*f,z:Math.sin(c)*f,rot:c,clear:12})}const l=[a[0],a[1],a[2],a[3],a[4],a[5],a[6],r];for(let c=0;c<Is.length;c++){const f=l[c];t.push({index:c,key:Is[c].key,name:Is[c].name,x:f.x,z:f.z,y:bf(f.x,f.z,e),rot:f.rot,clear:f.clear})}return t}function fM(i,e,t){const n=Math.ceil(t*2/e)+1,s=new Array(n*n);for(let a=0;a<s.length;a++)s[a]=[];const r=(a,o)=>{const l=Math.min(n-1,Math.max(0,Math.floor((a+t)/e)));return Math.min(n-1,Math.max(0,Math.floor((o+t)/e)))*n+l};return i.forEach((a,o)=>s[r(a.x,a.z)].push(o)),{cell:e,size:n,half:t,buckets:s,idx:r}}function Tf(i,e,t,n){const s=[],r=i.cell,a=Math.max(0,Math.floor((e-n+i.half)/r)),o=Math.min(i.size-1,Math.floor((e+n+i.half)/r)),l=Math.max(0,Math.floor((t-n+i.half)/r)),c=Math.min(i.size-1,Math.floor((t+n+i.half)/r));for(let f=l;f<=c;f++)for(let h=a;h<=o;h++){const d=i.buckets[f*i.size+h];for(let p=0;p<d.length;p++)s.push(d[p])}return s}function il(i,e,t,n){const s=[],r=Bt.half;let a=0;for(;s.length<e&&a++<e*30;){const o=(i()*2-1)*r,l=(i()*2-1)*r;let c=!1;for(const f of t)if(Math.hypot(o-f.x,l-f.z)<f.clear*n.clearMul){c=!0;break}if(!c){if(n.minSep>0){let f=!1;for(let h=s.length-1;h>=0&&h>s.length-160;h--)if(Math.hypot(s[h].x-o,s[h].z-l)<n.minSep){f=!0;break}if(f)continue}s.push({x:o,z:l,s:n.minScale+i()*(n.maxScale-n.minScale),rot:i()*Ds,type:n.types?Math.floor(i()*n.types):0})}}return s}function Ef(i){const e=uo(i),t=hM(e,i),n=il(e,Bt.treeCount,t,{clearMul:1,minSep:3.4,minScale:.75,maxScale:1.7,types:3}),s=il(e,Bt.rockCount,t,{clearMul:.8,minSep:4.5,minScale:.6,maxScale:1.8,types:2}),r=il(e,Bt.bushCount,t,{clearMul:.9,minSep:0,minScale:.6,maxScale:1.5,types:2}),a={seed:i,landmarks:t,trees:n,rocks:s,bushes:r};for(const o of[n,s,r])for(const l of o)l.y=dn(a,l.x,l.z);return a.beacons=t.map((o,l)=>{const c=o.rot+1.1+e()*2.4,f=o.clear*(.35+e()*.3),h=o.x+Math.cos(c)*f,d=o.z+Math.sin(c)*f;return{index:l,landmark:l,name:o.name,x:h,z:d,y:dn(a,h,d)}}),a.solids=[...n.map(o=>({x:o.x,z:o.z,r:.26*o.s})),...s.map(o=>({x:o.x,z:o.z,r:.55*o.s})),...uM(t)],a.solidGrid=fM(a.solids,8,Bt.half+6),a.spawn={x:t[7].x*.9,z:t[7].z*.9},a.tower=t[0],a.gate=t[7],a}function br(i,e,t,n){const s=e,r=t;for(let c=0;c<3;c++){const f=Tf(i.solidGrid,e,t,n+2.5);let h=!1;for(let d=0;d<f.length;d++){const p=i.solids[f[d]],x=e-p.x,M=t-p.z,g=p.r+n,m=x*x+M*M;if(m<g*g&&m>1e-6){const S=Math.sqrt(m),R=(g-S)/S;e+=x*R,t+=M*R,h=!0}}if(!h)break}const a=Math.hypot(e-s,t-r);if(a>2.5){const c=2.5/a;e=s+(e-s)*c,t=r+(t-r)*c}const o=Bt.fence-1.2,l=Math.hypot(e,t);return l>o&&(e=e/l*o,t=t/l*o),{x:e,z:t}}function ic(i,e,t,n,s,r=1.1){const a=n-e,o=s-t,l=Math.hypot(a,o);if(l<.001)return!0;const c=Math.ceil(l/r),f=a/c,h=o/c;let d=e,p=t;for(let x=1;x<c;x++){d+=f,p+=h;const M=Tf(i.solidGrid,d,p,1.2);for(let g=0;g<M.length;g++){const m=i.solids[M[g]],S=d-m.x,R=p-m.z;if(S*S+R*R<m.r*m.r)return!1}}return!0}const Mh=30,dM=85,pt={night:395785,bark:2893858,barkDry:3880235,ground:1909785,dirt:2761752,rock:3488058,bush:1582106,wood:3748138,metal:2961973,rust:4862242,concrete:3882296,signal:14241579,lamp:15915424};function es(i,e){const t=new Ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new tn(s,3)),i.attributes.uv||i.setAttribute("uv",new tn(new Float32Array(n*2),2)),i}function pM(i,e){if(i===2){const r=[],a=new un(.09,.26,9.5,5);a.translate(0,4.75,0),r.push(es(a,pt.barkDry));for(let o=0;o<3;o++){const l=new un(.03,.09,2.6,4);l.translate(0,1.3,0),l.rotateZ(.9+o*.2),l.rotateY(o*2.3),l.translate(0,5.4+o*1.1,0),r.push(es(l,pt.barkDry))}return{trunk:Wr(r,!1),canopy:null}}const t=i===0?11.5:7.2,n=new un(.12,.3,t,5);return n.translate(0,t/2,0),{trunk:es(n,pt.bark),canopy:gM(t,i,e)}}const mM=193/409;function yh(i,e,t,n,s,r){const a=n*mM,o=[];for(let c=0;c<2;c++){const f=new ns(a,n);f.translate(0,n*.5,0),f.rotateX(r),f.rotateY(s+c*Math.PI/2),o.push(f)}const l=Wr(o,!1);return l.translate(i,e,t),l}function gM(i,e,t){const n=[],s=e===0?3:2,r=t?8:16;for(let f=0;f<s;f++){const h=f/s,d=(e===0?2.3:1.85)*(1-h*.55),p=(e===0?4.4:3.4)*(1-h*.22),x=i*(.32+h*.2);for(let M=0;M<r;M++){const g=M/r*Math.PI*2+f*1.7,m=d*(.15+(M*53+f*17)%10/10*.85),S=Math.cos(g)*m,R=Math.sin(g)*m,T=p*(.4+(M*31+f*11)%10/10*.3),I=x+(M*29+f*13)%10/10*p*.85,P=-.5-M*17%10/10*.6;n.push(yh(S,I,R,T,g+Math.PI+M*7%10/10,P))}}const a=i*.9,o=(e===0?2.4:1.9)*(t?.85:1),l=t?4:6;for(let f=0;f<l;f++){const h=f/l*Math.PI*2+.4,d=.25+f%3*.18;n.push(yh(Math.cos(h)*d,a,Math.sin(h)*d,o,h+.6,-.35))}const c=Wr(n,!1);return es(c,13489853)}function _M(i){const e=[];let t=null;return i.updateMatrixWorld(!0),i.traverse(n=>{if(!n.isMesh)return;const s=n.geometry.clone();s.applyMatrix4(n.matrix),e.push(s),t||(t=n.material)}),{geometry:Wr(e,!1),material:t}}function xM(i,e){const t=uo((i.seed^6976336)>>>0),n=Bt.half,s=[],r=(l,c)=>{for(const f of i.landmarks)if(Math.hypot(l-f.x,c-f.z)<f.clear*.85)return!0;return!1},a=Math.max(1,Math.round(e/6));let o=0;for(;s.length<e&&o++<a*40;){const l=(t()*2-1)*n,c=(t()*2-1)*n;if(r(l,c))continue;const f=1.5+t()*2,h=1.6+t()*1,d=4+Math.floor(t()*5);for(let p=0;p<d&&s.length<e;p++){const x=t()*Math.PI*2,M=t()*f,g=l+Math.cos(x)*M,m=c+Math.sin(x)*M;r(g,m)||s.push({x:g,z:m,y:dn(i,g,m),rot:t()*Math.PI*2,s:h*(.85+t()*.3)})}}return s}function vM(i){const e=new ao(i===0?.9:1.5,0),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=.78+n*37%11/26;t.setXYZ(n,t.getX(n)*s,t.getY(n)*s*.66,t.getZ(n)*s)}return e.computeVertexNormals(),e.translate(0,.25,0),es(e,pt.rock)}function MM(){const i=[];for(let e=0;e<2;e++){const t=new ao(.55-e*.12,0);t.translate((e-.5)*.5,.34+e*.12,e*.3-.15),i.push(es(t,pt.bush))}return Wr(i,!1)}const wf=i=>new Bi({color:i,roughness:.8,metalness:.05});let gr=null;function yM(){if(gr)return gr;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(46,42,4,64,64,88);return t.addColorStop(0,"#ffffff"),t.addColorStop(.35,"#c9c9c9"),t.addColorStop(.7,"#7a7a7a"),t.addColorStop(1,"#3a3a3a"),e.fillStyle="#3a3a3a",e.fillRect(0,0,128,128),e.fillStyle=t,e.beginPath(),e.arc(64,64,64,0,Math.PI*2),e.fill(),gr=new wc(i),gr.colorSpace=Wt,gr}const Sh=i=>new vp({color:i,matcap:yM()}),Ls=(i,e=.88)=>new Bi({color:i,roughness:e,metalness:.02});function Ot(i,e,t,n,s=0,r=0,a=0){const o=new yt(new Qi(1,14,10),n);return o.scale.set(i,e,t),o.position.set(s,r,a),o}function yn(i,e,t,n,s=0,r=0,a=0){const o=new yt(new un(i,e,t,12,1),n);return o.position.set(s,r,a),o}function wt(i,e,t,n,s=0,r=0,a=0,o=0){const l=new yt(new Oi(i,e,t),wf(n));return l.position.set(s,r,a),l.rotation.y=o,l}function zs(i,e,t,n,s=0,r=0,a=0){const o=new yt(new un(i,e,t,12),wf(n));return o.position.set(s,r,a),o}function SM(i){const e=new Ct;switch(i){case"torre":{for(const[t,n]of[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]])e.add(wt(.28,8,.28,pt.wood,t,4,n));e.add(wt(5.4,.3,5.4,pt.wood,0,8,0)),e.add(wt(5,2.4,.2,pt.wood,0,9.2,-2.5)),e.add(wt(.2,2.4,5,pt.wood,-2.5,9.2,0)),e.add(wt(.2,2.4,5,pt.wood,2.5,9.2,0)),e.add(wt(6,.25,6,pt.metal,0,10.5,0));for(let t=0;t<12;t++)e.add(wt(1.6,.1,.3,pt.wood,2.6,.6+t*.62,2.6));e.add(zs(.06,.06,3,pt.metal,0,12,0));break}case"caravana":{const t=wt(6.4,2.5,2.6,7038296,0,1.6,0,.2);t.rotation.z=1.35,t.position.y=1.5,e.add(t),e.add(wt(.3,.9,.9,pt.metal,-2.2,.5,1.4)),e.add(wt(.3,.9,.9,pt.metal,1.9,.5,1.5)),e.add(wt(3.2,.12,2.2,pt.rust,1.4,.06,-2.4));break}case"piedras":{for(let t=0;t<7;t++){const n=t/7*Math.PI*2,s=1.4+t%3*.5,r=wt(.9,s*2,.7,pt.rock,Math.cos(n)*4.2,s,Math.sin(n)*4.2,n);r.rotation.z=(t%2?1:-1)*.08,e.add(r)}e.add(zs(1.5,1.7,.35,2763558,0,.17,0));break}case"caseta":{e.add(wt(4.2,2.8,3.4,pt.concrete,0,1.4,0));const t=wt(4.8,.25,4,pt.rust,0,2.9,0);t.rotation.x=.08,e.add(t),e.add(wt(1,2,.12,1711128,0,1,1.72)),e.add(wt(1.2,.9,.1,1119503,-1.3,1.9,1.72));break}case"tuberia":{for(let t=0;t<3;t++){const n=new yt(new un(1.5,1.5,4.5,14,1,!0),new Kl({color:pt.concrete,side:xn}));n.rotation.z=Math.PI/2,n.position.set(t*4.6-4.6,1.5,t%2?.4:-.3),e.add(n)}e.add(wt(9,.4,3.4,2369055,0,.2,2.6));break}case"camion":{e.add(wt(2.6,2.2,2.4,pt.rust,-2.6,1.5,0)),e.add(wt(6.4,2.8,2.5,5196350,1.6,1.8,0));for(const[t,n]of[[-2.8,1.2],[-2.8,-1.2],[1.2,1.3],[1.2,-1.3],[3.6,1.3],[3.6,-1.3]]){const s=zs(.55,.55,.4,1381914,t,.55,n);s.rotation.x=Math.PI/2,e.add(s)}break}case"puente":{e.add(wt(2.6,.18,8.5,pt.wood,0,.5,0));for(let t=0;t<9;t++)e.add(wt(2.8,.12,.55,pt.barkDry,0,.62,-3.8+t*.95));e.add(wt(.12,.9,8.5,pt.wood,1.4,1,0)),e.add(wt(.12,.9,8.5,pt.wood,-1.4,1,0));break}case"porton":{e.add(wt(.7,4.2,.7,pt.concrete,-3,2.1,0)),e.add(wt(.7,4.2,.7,pt.concrete,3,2.1,0));const t=new Ct;t.name="gatePanel";for(let n=0;n<9;n++)t.add(wt(.1,3.2,.1,pt.metal,-2.6+n*.65,1.7,0));t.add(wt(5.6,.14,.14,pt.metal,0,3.2,0)),t.add(wt(5.6,.14,.14,pt.metal,0,.4,0)),e.add(t),e.add(wt(1.3,.9,.08,pt.signal,0,3.9,.1));break}}return e}const bM={torre:[{slug:"ladder_sectioned_01",x:2.7,z:-1.9,ry:.3,rx:-.14,size:2.5,axis:"y"},{slug:"Barrel_02",x:-2.6,z:2.7,ry:.6,size:.85,axis:"y"},{slug:"CheeseBox_01",x:-2,z:3,ry:.2,size:.4,axis:"xz"}],caravana:[{slug:"Barrel_02",x:3,z:-1,ry:.2,rx:1.5,size:.85,axis:"y"},{slug:"CheeseBox_01",x:-3.3,z:1.1,ry:.5,size:.4,axis:"xz"},{slug:"fern_02",x:2.1,z:2,ry:.1,size:.6,axis:"xz"}],piedras:[{slug:"fir_sapling",x:-6.5,z:-5,ry:2.4,size:2.6,axis:"y",heavy:!0,noCast:!0},{slug:"dead_tree_trunk",x:.6,z:6.8,ry:.5,size:7.5,axis:"xz"},{slug:"boulder_01",x:5.6,z:-3.1,ry:.9,size:1.3,axis:"max"},{slug:"boulder_01",x:-5.2,z:4,ry:2.1,size:1,axis:"max"}],caseta:[{slug:"Barrel_02",x:2.5,z:.9,ry:.1,size:.85,axis:"y"},{slug:"Barrel_02",x:2.5,z:1.9,ry:.4,size:.85,axis:"y"},{slug:"CheeseBox_01",x:1.4,z:2.3,ry:.7,size:.4,axis:"xz"},{slug:"ladder_sectioned_01",x:-2.5,z:-1.8,ry:-.2,rx:-.14,size:2.3,axis:"y"}],tuberia:[{slug:"boulder_01",x:-6.2,z:-1.6,ry:.3,size:1,axis:"max"},{slug:"fern_02",x:6.2,z:1.6,ry:.9,size:.6,axis:"xz"},{slug:"fern_02",x:-3.2,z:2.1,ry:1.4,size:.5,axis:"xz"}],camion:[{slug:"Barrel_02",x:4.8,z:0,ry:.3,rx:1.5,size:.85,axis:"y"},{slug:"CheeseBox_01",x:4.1,z:1.7,ry:.6,size:.4,axis:"xz"},{slug:"CheeseBox_01",x:3.5,z:-1.7,ry:1.1,size:.4,axis:"xz"}],puente:[{slug:"fern_02",x:2.3,z:-4.6,ry:.4,size:.6,axis:"xz"},{slug:"fern_02",x:-2.3,z:4.6,ry:1.2,size:.6,axis:"xz"},{slug:"boulder_01",x:0,z:-5.2,ry:.2,size:1,axis:"max"}],porton:[{slug:"gate_latch_01",x:3.05,z:.35,y:1.55,ry:.2,size:.3,axis:"max"}]};function TM(i,e,{slug:t,x:n=0,y:s=0,z:r=0,ry:a=0,rx:o=0,size:l=1,axis:c="y",noCast:f=!1}){const h=e[t];if(!h)return;const d=h.clone(!0);d.traverse(m=>{if(!m.isMesh)return;m.castShadow=!f,m.receiveShadow=!0,f||m.layers.enable(1);const S=m.material;S&&(S.roughness!==void 0&&(S.roughness=Math.max(S.roughness,.88)),S.metalness!==void 0&&(S.metalness=0),S.map&&S.color&&S.color.setScalar(.38))});const x=new qn().setFromObject(d).getSize(new V),M=c==="y"?x.y:c==="xz"?Math.max(x.x,x.z):Math.max(x.x,x.y,x.z);d.scale.setScalar(M>1e-4?l/M:1);const g=new qn().setFromObject(d);d.position.set(n,s-g.min.y,r),d.rotation.set(o,a,0),i.add(d)}function EM(i,e,t,n){for(const s of bM[e]||[])s.heavy&&n||TM(i,t,s)}function wM(){const i=new un(.25,1.4,22,20,1,!0);i.translate(0,11,0);const e=new ln({color:15332066,transparent:!0,opacity:.1,blending:Di,depthWrite:!1,side:xn});return new yt(i,e)}function AM(i,e=null){const t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100,n=new Kx({canvas:i,antialias:!t,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,t?1.25:1.75)),n.setClearColor(pt.night,1),n.toneMapping=no,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=t?Tr:Rh;const s=new qd;s.fog=new Sc(461325,.028),s.background=new Ve(pt.night);const r=new _n(74,1,.1,145),a=new Up(1713200,329482,.22);s.add(a);const o=new sf(9414340,.44),l=new V(-40,70,30);if(o.position.copy(l),s.add(o),s.add(o.target),t||(o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.camera.left=-40,o.shadow.camera.right=40,o.shadow.camera.top=40,o.shadow.camera.bottom=-40,o.shadow.camera.near=1,o.shadow.camera.far=160,o.shadow.bias=-.0012,o.shadow.normalBias=.05,o.shadow.camera.layers.set(1)),e?.hdri){const $=new $l(n);s.environment=$.fromEquirectangular(e.hdri).texture,$.dispose()}const c={fog:new Ve(9412755),fogDensity:.013,bg:new Ve(9084047),hemiSky:new Ve(13623241),hemiGround:new Ve(4805695),hemiI:.8,sunColor:new Ve(16642518),sunI:1.85,exposure:1.2,envI:.7},f={fog:new Ve(461325),fogDensity:.028,bg:new Ve(pt.night),hemiSky:new Ve(1713200),hemiGround:new Ve(329482),hemiI:.22,sunColor:new Ve(9414340),sunI:.44,exposure:1.15,envI:0};let h=0,d=null;function p(){const $=h;s.fog.color.copy(c.fog).lerp(f.fog,$),s.fog.density=c.fogDensity+(f.fogDensity-c.fogDensity)*$,s.background.copy(c.bg).lerp(f.bg,$),a.color.copy(c.hemiSky).lerp(f.hemiSky,$),a.groundColor.copy(c.hemiGround).lerp(f.hemiGround,$),a.intensity=c.hemiI+(f.hemiI-c.hemiI)*$,o.color.copy(c.sunColor).lerp(f.sunColor,$),o.intensity=c.sunI+(f.sunI-c.sunI)*$,n.toneMappingExposure=c.exposure+(f.exposure-c.exposure)*$,s.environmentIntensity=c.envI+(f.envI-c.envI)*$,o.castShadow=!t&&$<.5,d&&(d.material.opacity=.09*(1-$)+.025*$)}p();const x=new Zl(16770747,0,Vt.range,Vt.angle,.62,.08);x.position.set(0,0,0);const M=new Zl(15981748,0,Vt.range*.62,Vt.angle*2.9,.95,.08);M.position.set(0,0,0);const g=new nf(15258538,0,7,.4);g.position.set(0,-.5,-1.2);{x.castShadow=!0;const $=t?384:1024;x.shadow.mapSize.set($,$),x.shadow.camera.near=.6,x.shadow.camera.far=Vt.range,x.shadow.bias=-.0015,x.shadow.normalBias=.035,t&&x.shadow.camera.layers.set(1)}const m=new Nt;r.add(x,M,g,m),m.position.set(0,0,-10),x.target=m,M.target=m,s.add(r);const S=Sh(4932916),R=Sh(3355946),T=new Ct;T.position.set(.27,-.33,-.48),T.rotation.set(.08,-.32,.22);const I=yn(.078,.062,.5,R,0,-.02,.2);I.rotation.x=Math.PI/2-.12,T.add(I),T.add(Ot(.06,.052,.062,S,0,.01,-.06));const P=Ot(.07,.045,.095,S,0,.018,-.15);T.add(P);function D($,se,Ue,ke,Ze,Ee,_e,Ae){const st=new Ct;st.position.set($,se,Ue),st.rotation.x=_e;const Qe=yn(Ee,Ee*.82,ke,S,0,-ke/2,0);st.add(Qe);const nt=Ot(Ee*.85,Ee*.85,Ee*.85,S,0,-ke,0);st.add(nt);const qe=new Ct;qe.position.set(0,-ke,0),qe.rotation.x=Ae;const rt=yn(Ee*.82,Ee*.6,Ze,S,0,-Ze/2,0);qe.add(rt);const z=Ot(Ee*.6,Ee*.6,Ee*.6,S,0,-Ze,0);return qe.add(z),st.add(qe),st}const y=[{x:-.05,len1:.085,len2:.06,r:.0135},{x:-.018,len1:.095,len2:.066,r:.0145},{x:.014,len1:.09,len2:.062,r:.014},{x:.044,len1:.075,len2:.05,r:.0125}];for(const $ of y)T.add(D($.x,.052,-.175,$.len1,$.len2,$.r,-1.25,-1.35));const L=D(-.062,-.005,-.14,.06,.05,.016,-.35,-1.5);L.rotation.z=.55,T.add(L);const v=new Ct;v.position.set(0,.015,-.24),v.rotation.x=Math.PI/2;const w=new ln({color:1842457});v.add(new yt(new un(.03,.034,.26,12),w));const A=new ln({color:2762272}),O=new yt(new un(.032,.032,.012,12),A);O.position.set(0,.135,0),v.add(O),T.add(v),r.add(T);const H=T.position.clone(),B=new $e(window.innerWidth/(t?2:1),window.innerHeight/(t?2:1)),q=new Xs(B,t?.55:.85,.55,.82),G=new ev(n);G.addPass(new tv(s,r)),G.addPass(q),G.addPass(new iv);const j=new ln({color:pt.lamp,transparent:!0,opacity:.05,blending:Di,depthWrite:!1,side:xn}),Q=RM(),oe=new Ct,me=[];for(let $=0;$<3;$++){const se=new yt(new ns(120,120),new ln({map:Q,transparent:!0,opacity:.019+$*.009,depthWrite:!1,blending:Di,color:6056818}));se.rotation.x=-Math.PI/2,se.renderOrder=2,oe.add(se),me.push({mesh:se,h:.7+$*.9,spin:($%2?1:-1)*(.006+$*.004)})}s.add(oe);const ee={scene:s,camera:r,renderer:n,isMobile:t,world:null,groups:{},actors:{players:new Map,beasts:new Map},alto:null,beaconMeshes:[],gateGroup:null};ee.buildWorld=function($){ee.world=$;for(const ce of Object.keys(ee.groups))s.remove(ee.groups[ce]),ee.groups[ce].traverse(Se=>{Se.geometry&&Se.geometry.dispose()});ee.groups={},ee.beaconMeshes=[],d=null;const se=Bt.half*2+24,Ue=ee.isMobile?80:112,ke=new ns(se,se,Ue,Ue);ke.rotateX(-Math.PI/2);const Ze=ke.attributes.position,Ee=new Float32Array(Ze.count*3),_e=new Ve(pt.ground),Ae=new Ve(pt.dirt),st=new Ve;for(let ce=0;ce<Ze.count;ce++){const Se=Ze.getX(ce),Te=Ze.getZ(ce);Ze.setY(ce,dn($,Se,Te));const Oe=nc(Se*.06,Te*.06,$.seed+991,2);st.copy(_e).lerp(Ae,Oe*.85),Ee[ce*3]=st.r,Ee[ce*3+1]=st.g,Ee[ce*3+2]=st.b}ke.setAttribute("color",new tn(Ee,3)),ke.computeVertexNormals();let Qe;if(e){const ce=se/8;for(const Se of["forest_ground_04_Diffuse","forest_ground_04_nor_gl","forest_ground_04_arm"])e.textures[Se]?.repeat.set(ce,ce);Qe=Ua(e.textures,"forest_ground_04",{vertexColors:!0,roughness:1,normalScale:new $e(1.6,1.6)})}else Qe=new Bi({vertexColors:!0,roughness:.92,metalness:.02});const nt=new yt(ke,Qe);nt.receiveShadow=!0,nt.layers.enable(1),s.add(nt),ee.groups.ground=nt;const qe=new Nt,rt=new Ct;ee.vegChunks=[];const z=(ce,Se,Te,Oe,k=!0,te=!1)=>{const ue=Oe?Te.filter(Oe):Te;if(!ue.length)return[];const Pe=new Map;for(const Ye of ue){const Fe=`${Math.floor(Ye.x/Mh)},${Math.floor(Ye.z/Mh)}`;Pe.has(Fe)||Pe.set(Fe,[]),Pe.get(Fe).push(Ye)}const Ne=new Ve,xe=[];for(const Ye of Pe.values()){const Fe=new Yl(ce,Se,Ye.length);Ye.forEach((At,Tt)=>{if(qe.position.set(At.x,At.y,At.z),qe.rotation.set(0,At.rot,0),qe.scale.setScalar(At.s),qe.updateMatrix(),Fe.setMatrixAt(Tt,qe.matrix),k){const Yt=.78+Tt*2654435761%1e3/1e3*.42;Ne.setRGB(Yt*1.04,Yt,Yt*.9)}else{const Yt=.88+Tt*2654435761%1e3/1e3*.24;Ne.setRGB(Yt,Yt,Yt)}Fe.setColorAt(Tt,Ne)}),Fe.instanceMatrix.needsUpdate=!0,Fe.instanceColor&&(Fe.instanceColor.needsUpdate=!0),Fe.castShadow=!0,Fe.receiveShadow=!0,te&&Fe.layers.enable(1),Fe.computeBoundingSphere(),rt.add(Fe),ee.vegChunks.push(Fe),xe.push(Fe)}return xe},Ft=new $e(1.6,1.6),_t=new Kl({vertexColors:!0});let F=_t,E=_t,Z=_t,ie=_t;e&&(e.textures.pine_bark_Diffuse?.repeat.set(1,3),e.textures.pine_bark_nor_gl?.repeat.set(1,3),e.textures.pine_bark_arm?.repeat.set(1,3),F=Ua(e.textures,"pine_bark",{vertexColors:!0,normalScale:Ft}),E=Ua(e.textures,"rocky_trail",{vertexColors:!0,normalScale:Ft}),Z=Ua(e.textures,"forest_leaves_04",{vertexColors:!0,normalScale:new $e(1.2,1.2)}),e.textures.twig_diff&&(ie=new Bi({map:e.textures.twig_diff,normalMap:e.textures.twig_nor_gl||null,alphaTest:.5,side:xn,vertexColors:!0,roughness:.85,metalness:0})));for(let ce=0;ce<3;ce++){const{trunk:Se,canopy:Te}=pM(ce,t);z(Se,F,$.trees,Oe=>Oe.type===ce,!1,!0),Te&&z(Te,ie,$.trees,Oe=>Oe.type===ce,!0)}for(let ce=0;ce<2;ce++)z(vM(ce),E,$.rocks,Se=>Se.type===ce,!1,!0);if(z(MM(),Z,$.bushes,null,!0),e?.models?.grass_bermuda_01){const{geometry:ce,material:Se}=_M(e.models.grass_bermuda_01),Te=xM($,t?80:400);z(ce,Se,Te,null,!1)}s.add(rt),ee.groups.veg=rt;const ae=new Ct,Re=es(new Oi(.13,2.3,.13),pt.metal);Re.translate(0,1.15,0);const Ie=Math.round(Math.PI*2*Bt.fence/3.6),le=new Yl(Re,new Kl({vertexColors:!0}),Ie),de=[[],[],[]];for(let ce=0;ce<Ie;ce++){const Se=ce/Ie*Math.PI*2,Te=Math.cos(Se)*Bt.fence,Oe=Math.sin(Se)*Bt.fence,k=dn($,Te,Oe);qe.position.set(Te,k,Oe),qe.rotation.set(0,Se,0),qe.scale.setScalar(1),qe.updateMatrix(),le.setMatrixAt(ce,qe.matrix),de[0].push(new V(Te,k+.6,Oe)),de[1].push(new V(Te,k+1.35,Oe)),de[2].push(new V(Te,k+2.1,Oe))}le.instanceMatrix.needsUpdate=!0,le.frustumCulled=!1,ae.add(le);for(const ce of de){ce.push(ce[0].clone());const Se=new rn().setFromPoints(ce);ae.add(new ro(Se,new Ec({color:3817539})))}s.add(ae),ee.groups.fence=ae;const Le=new Ct;for(const ce of $.landmarks){const Se=SM(ce.key);Se.traverse(Te=>{Te.isMesh&&(Te.castShadow=!0,Te.receiveShadow=!0,Te.layers.enable(1))}),e?.models&&EM(Se,ce.key,e.models,t),ce.key==="piedras"&&(d=wM(),d.material.opacity=.09*(1-h)+.025*h,Se.add(d)),Se.position.set(ce.x,ce.y,ce.z),Se.rotation.y=ce.rot,Le.add(Se),ce.key==="porton"&&(ee.gateGroup=Se.getObjectByName("gatePanel"))}s.add(Le),ee.groups.marks=Le;const Be=new Ct,Ce=CM();for(const ce of $.beacons){const Se=new Ct;for(let ue=0;ue<3;ue++){const Pe=ue/3*Math.PI*2,Ne=zs(.03,.04,1.15,pt.metal,Math.cos(Pe)*.28,.55,Math.sin(Pe)*.28);Ne.rotation.z=Math.cos(Pe)*-.42,Ne.rotation.x=Math.sin(Pe)*.42,Se.add(Ne)}Se.add(wt(.34,.3,.28,2764074,0,1.25,0));const Te=new yt(new Qi(.11,10,8),new ln({color:pt.signal}));Te.position.set(0,1.48,0),Se.add(Te);const Oe=new tp(new Xh({map:Ce,color:pt.signal,transparent:!0,blending:Di,depthWrite:!1,opacity:.85}));Oe.scale.set(4.2,4.2,1),Oe.position.set(0,1.48,0),Se.add(Oe);const k=new un(.06,.75,17,10,1,!0);k.translate(0,8.5,0);const te=new yt(k,new ln({color:pt.signal,transparent:!0,opacity:.075,blending:Di,depthWrite:!1,side:xn}));te.position.y=1.4,Se.add(te),Se.userData.column=te,Se.position.set(ce.x,ce.y,ce.z),Be.add(Se),ee.beaconMeshes.push({group:Se,lamp:Te,glow:Oe,column:Se.userData.column,index:ce.index})}s.add(Be),ee.groups.beacons=Be};function Je(){const $=new Ct;$.add(zs(.28,.3,1.15,4212028,0,.62,0)),$.add(wt(.5,.55,.32,3817271,0,1.42,0)),$.add(zs(.2,.2,.28,12168342,0,1.82,0));const se=new yt(new Ar(1,1,14,1,!0),j.clone());se.material.opacity=.035,se.rotation.x=Math.PI/2,se.position.set(0,1.6,0),se.name="beam",$.add(se);const Ue=new yt(new Qi(.07,8,6),new ln({color:pt.lamp}));return Ue.position.set(0,1.6,-.2),Ue.name="dot",$.add(Ue),$}function dt(){const $=new Ct,se=Ls(1841686,.92),Ue=Ls(5130814,.8),ke=Ot(.3,.31,.5,se,0,.72,-.28);$.add(ke),$.add(Ot(.2,.19,.3,se,0,.68,.1)),$.add(Ot(.27,.28,.34,se,0,.7,.52));for(let nt=0;nt<5;nt++){const qe=Ot(.31,.055,.045,Ue,0,.74-nt*.012,-.52+nt*.15);qe.rotation.x=.15,$.add(qe)}for(let nt=0;nt<6;nt++){const qe=new yt(new Ar(.035,.13,5),Ue);qe.position.set(0,.99-nt*.008,-.5+nt*.19),qe.rotation.x=-.35,$.add(qe)}const Ze=yn(.13,.17,.6,se,0,.86,-.7);Ze.rotation.x=1.15,$.add(Ze);const Ee=new Ct;Ee.add(Ot(.115,.115,.16,se,0,0,0));const _e=yn(.055,.095,.34,se,0,0,-.26);_e.rotation.x=Math.PI/2,Ee.add(_e);const Ae=Ot(.07,.022,.15,Ls(2888978,.7),0,-.055,-.28);Ee.add(Ae);for(const nt of[-1,1]){const qe=new yt(new Ar(.05,.19,5),se);qe.position.set(nt*.085,.13,.04),qe.rotation.z=nt*.3,qe.rotation.x=-.2,Ee.add(qe);const rt=new yt(new Qi(.028,8,6),new ln({color:12773496}));rt.position.set(nt*.075,.032,-.12),Ee.add(rt)}Ee.position.set(0,1,-.99),$.add(Ee);const st=[];for(const[nt,qe,rt]of[[.17,-.42,1],[-.17,-.42,1],[.19,.52,0],[-.19,.52,0]]){const z=new Ct;z.add(yn(.075,.05,.44,se,0,-.22,0));const Ft=yn(.05,.032,.4,se,0,-.58,rt?-.06:.07);Ft.rotation.x=rt?.22:-.24,z.add(Ft),z.add(Ot(.055,.035,.075,se,0,-.78,rt?-.11:.13)),z.position.set(nt,.8,qe),z.userData.phase=(nt>0?0:Math.PI)+(rt?0:Math.PI),$.add(z),st.push(z)}const Qe=yn(.035,.012,.85,se,0,.74,1.02);return Qe.rotation.x=-1,$.add(Qe),$.userData={legs:st,head:Ee,tail:Qe,chest:ke,kind:"jauria"},$}function at(){const $=new Ct,se=Ls(8617071,.9),Ue=Ls(6446158,.92),ke=Ls(1444617,.6),Ze=Ot(.42,.98,.36,se,0,2.22,0);Ze.rotation.x=.26,$.add(Ze),$.add(Ot(.66,.26,.42,Ue,0,3.02,-.1)),$.add(Ot(.33,.38,.29,se,0,1.82,.1));const Ee=new Ct;Ee.add(Ot(.28,.34,.32,se,0,0,0)),Ee.add(Ot(.2,.16,.16,se,0,-.1,-.26)),Ee.add(Ot(.07,.045,.03,Ue,-.14,.09,-.3)),Ee.add(Ot(.07,.045,.03,Ue,.14,.09,-.3)),Ee.add(Ot(.16,.09,.05,ke,0,-.14,-.32));for(const st of[-1,1]){const Qe=Ot(.035,.28,.2,Ue,st*.32,.06,.02);Qe.rotation.z=st*.36,Ee.add(Qe)}$.add(yn(.11,.15,.34,se,0,3.2,-.05)),Ee.position.set(0,3.46,-.12),Ee.rotation.x=-.32,$.add(Ee);const _e=[];for(const st of[-1,1]){const Qe=new Ct;Qe.add(Ot(.2,.22,.2,se,0,0,0)),Qe.add(yn(.155,.12,1.12,se,0,-.6,0)),Qe.add(Ot(.115,.115,.115,se,0,-1.18,.04)),Qe.add(yn(.11,.085,1.15,se,0,-1.78,.08));for(let nt=0;nt<4;nt++){const qe=yn(.026,.012,.46,Ue,(nt-1.5)*.07,-2.56,.1);qe.rotation.x=.12+nt*.04,Qe.add(qe)}Qe.position.set(st*.56,2.98,0),Qe.rotation.z=st*.12,Qe.userData.side=st,$.add(Qe),_e.push(Qe)}const Ae=[];for(const st of[-1,1]){const Qe=new Ct;Qe.add(yn(.21,.16,.86,se,0,-.43,0)),Qe.add(Ot(.14,.13,.14,se,0,-.88,.03)),Qe.add(yn(.15,.115,.84,se,0,-1.32,.05)),Qe.add(Ot(.15,.075,.32,Ue,0,-1.72,-.11)),Qe.position.set(st*.26,1.78,0),Qe.userData.phase=st>0?0:Math.PI,$.add(Qe),Ae.push(Qe)}return $.userData={head:Ee,arms:_e,legs:Ae,torso:Ze,kind:"ciego"},$}function fe(){const $=new ln({color:15921126}),se=new Ct,Ue=new yt(new un(.17,.31,2.5,8),$);Ue.position.y=1.9,se.add(Ue);const ke=new yt(new Oi(.72,.1,.2),$);ke.position.y=3,se.add(ke);const Ze=new yt(new Qi(.21,14,12),$);Ze.position.y=3.3,Ze.scale.set(1,1.18,.92),se.add(Ze);const Ee=[];for(const _e of[-1,1]){const Ae=new Ct;Ae.add(new yt(new un(.05,.062,1.5,6),$).translateY(-.75));const st=new yt(new un(.04,.05,1.6,6),$);st.position.y=-2.3,Ae.add(st),Ae.position.set(_e*.34,2.98,0),Ae.rotation.z=_e*.05,se.add(Ae),Ee.push(Ae)}for(const _e of[-1,1]){const Ae=new yt(new un(.075,.085,1.5,6),$);Ae.position.set(_e*.12,.75,0),se.add(Ae)}return se.userData={arms:Ee,head:Ze},se}const pe={jauria:1.3,ciego:.9};function Me($,se,Ue,ke,Ze){const Ee=$.userData;if(!Ee)return;const _e=Ue==="chase",Ae=Ue!=="repelled",st=pe[se]||pe.jauria,Qe=Ze/st*Math.PI*2,nt=_e?.85:.4;if(Ee.legs)for(const rt of Ee.legs)rt.rotation.x=Ae?Math.sin(Qe+rt.userData.phase)*nt:0;if(Ee.arms)for(let rt=0;rt<Ee.arms.length;rt++){const z=Ee.arms[rt],Ft=z.userData.side??(rt===0?-1:1);z.rotation.x=Ae?Math.sin(Qe*.5+rt*Math.PI)*nt*.55:0,z.rotation.z=Ft*(.12+(_e?.3:0))}Ee.head&&(Ee.head.rotation.y=_e?0:Math.sin(ke*.9)*.55),Ee.tail&&(Ee.tail.rotation.y=Math.sin(ke*2.2)*.35);const qe=1+Math.sin(ke*(_e?6.5:2.1))*(_e?.05:.025);for(const rt of[Ee.chest,Ee.torso]){if(!rt)continue;rt.userData.baseScale||(rt.userData.baseScale=rt.scale.clone());const z=rt.userData.baseScale;rt.scale.set(z.x*qe,z.y,z.z*qe)}$.position.y+=Ae?Math.abs(Math.sin(Qe))*(_e?.07:.03):0}const tt=($,se,Ue,ke,Ze)=>{$.position.x+=(se-$.position.x)*Ze,$.position.y+=(Ue-$.position.y)*Ze,$.position.z+=(ke-$.position.z)*Ze};return ee.syncActors=function($,se,Ue=1/20){const ke=1-Math.exp(-18*Ue),Ze=new Set;for(const _e of $.players||[]){if(_e.id===se)continue;Ze.add(_e.id);let Ae=ee.actors.players.get(_e.id);Ae||(Ae=Je(),s.add(Ae),ee.actors.players.set(_e.id,Ae),Ae.position.set(_e.x,_e.y,_e.z)),Ae.visible=_e.s!=="dead"&&!_e.e,tt(Ae,_e.x,_e.y,_e.z,ke),Ae.lookAt(Ae.position.x+_e.fx,Ae.position.y,Ae.position.z+_e.fz),Ae.rotation.z=_e.s==="down"?1.3:0;const st=Ae.getObjectByName("beam"),Qe=Ae.getObjectByName("dot"),nt=_e.l>0&&_e.s==="alive";if(st.visible=nt,Qe.visible=nt,nt){const qe=_e.l===2?Vt.focusRange*.6:Vt.range*.6,rt=Math.tan(_e.l===2?Vt.focusAngle:Vt.angle)*qe;st.scale.set(rt,qe,rt),st.position.set(0,1.6,-qe/2)}}for(const[_e,Ae]of ee.actors.players)Ze.has(_e)||(s.remove(Ae),ee.actors.players.delete(_e));const Ee=new Set;for(const _e of $.beasts||[]){Ee.add(_e.id);let Ae=ee.actors.beasts.get(_e.id);Ae&&Ae.userData.kind!==_e.k&&(s.remove(Ae),ee.actors.beasts.delete(_e.id),Ae=null),Ae||(Ae=_e.k==="ciego"?at():dt(),Ae.userData.kind=_e.k,Ae.traverse(nt=>{nt.isMesh&&(nt.castShadow=!0)}),s.add(Ae),ee.actors.beasts.set(_e.id,Ae),Ae.position.set(_e.x,_e.y,_e.z));const st=Ae.position.x,Qe=Ae.position.z;tt(Ae,_e.x,_e.y,_e.z,ke),Ae.userData.walkDist=(Ae.userData.walkDist||0)+Math.hypot(Ae.position.x-st,Ae.position.z-Qe),Ae.lookAt(Ae.position.x+_e.fx,Ae.position.y,Ae.position.z+_e.fz),Me(Ae,_e.k,_e.s,performance.now()*.001,Ae.userData.walkDist)}for(const[_e,Ae]of ee.actors.beasts)Ee.has(_e)||(s.remove(Ae),ee.actors.beasts.delete(_e));if($.alto){ee.alto||(ee.alto=fe(),s.add(ee.alto)),ee.alto.visible=!0;const _e=Math.sin(performance.now()*9e-4)*.05;ee.alto.position.set($.alto.x,$.alto.y+_e,$.alto.z),ee.alto.lookAt(r.position.x,$.alto.y,r.position.z)}else ee.alto&&(ee.alto.visible=!1);for(const _e of ee.beaconMeshes){const Ae=$.beacons&&$.beacons[_e.index];_e.group.visible=!Ae}if(ee.gateGroup){const _e=$.gateOpen?-2.4:0;ee.gateGroup.position.x+=(_e*2.2-ee.gateGroup.position.x)*.04}},ee.setFlashlight=function($,se){if(!$){x.intensity=M.intensity=g.intensity=0,A.color.setHex(2762272);return}x.intensity=se?5.5:3.2,x.angle=se?Vt.focusAngle:Vt.angle,x.distance=se?Vt.focusRange:Vt.range,x.penumbra=se?.45:.68,M.intensity=se?.55:1.1,M.angle=se?Vt.angle*2.2:Vt.angle*2.9,M.distance=(se?Vt.focusRange:Vt.range)*.55,g.intensity=se?.7:1.5,A.color.setHex(16774096)},ee.updateHand=function($,se,Ue){const ke=Math.sin(se*2)*(Ue?.02:.011),Ze=Math.cos(se)*(Ue?.014:.007),Ee=Math.sin($*.8)*.006;T.position.set(H.x+Ze,H.y+ke+Ee,H.z)},ee.setDayPhase=function($,se){const Ue=$?0:1,ke=se/Ya.transitionTime;h=Ue>h?Math.min(Ue,h+ke):Math.max(Ue,h-ke),p()},ee.tickBeacons=function($){for(const se of ee.beaconMeshes){if(!se.group.visible)continue;const Ue=.45+.55*Math.pow(Math.max(0,Math.sin($*2.1+se.index)),6);se.glow.material.opacity=.3+Ue*.8,se.lamp.material.color.setHex(14241579).multiplyScalar(.5+Ue),se.column&&(se.column.material.opacity=.045+Ue*.075)}},ee.setFov=function($){Math.abs(r.fov-$)<.02||(r.fov+=($-r.fov)*.09,r.updateProjectionMatrix())},ee.resize=function(){const $=i.clientWidth||window.innerWidth,se=i.clientHeight||window.innerHeight;r.aspect=$/se,r.updateProjectionMatrix(),n.setSize($,se,!1),G.setSize($,se),q.setSize($/(t?2:1),se/(t?2:1))},ee.cullVegetation=function(){if(!ee.vegChunks)return;const $=r.position;for(const se of ee.vegChunks){const Ue=se.boundingSphere;se.visible=!Ue||Math.hypot(Ue.center.x-$.x,Ue.center.z-$.z)-Ue.radius<dM}},ee.tickMist=function($){const se=ee.world?dn(ee.world,r.position.x,r.position.z):0;for(const Ue of me)Ue.mesh.position.set(r.position.x,se+Ue.h,r.position.z),Ue.mesh.rotation.z=$*Ue.spin},ee.render=function(){if(ee.cullVegetation(),o.castShadow){const $=r.position.x,se=r.position.y,Ue=r.position.z;o.position.set($+l.x,se+l.y,Ue+l.z),o.target.position.set($,se,Ue),o.target.updateMatrixWorld()}d&&(d.rotation.y+=6e-4),G.render()},ee}function RM(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){const s=Math.random()*256,r=Math.random()*256,a=18+Math.random()*52,o=e.createRadialGradient(s,r,0,s,r,a),l=.05+Math.random()*.16;o.addColorStop(0,`rgba(255,255,255,${l})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(s-a,r-a,a*2,a*2)}const t=new wc(i);return t.wrapS=t.wrapT=Fi,t.repeat.set(2,2),t}function CM(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new wc(i);return n.colorSpace=Wt,n}const bh=(i,e,t)=>i<e?e:i>t?t:i,_r=(i,e,t)=>i+(e-i)*t,PM=5.4,IM=17;function LM(i,e,t,n={}){const s={x:i.spawn.x,z:i.spawn.z,y:0,vx:0,vz:0,yaw:Math.atan2(i.spawn.x,i.spawn.z),pitch:0,eye:Zt.eye,stamina:Zt.staminaMax,sanity:0,lightOn:!0,lightFocus:!1,exhausted:!1,bob:0,stepAccum:0,breathing:0,adrenaline:0,alive:!0,frozen:!1,jumpY:0,jumpVel:0,groundY:0};s.jump=function(){s.frozen||s.jumpY>.02||(s.jumpVel=PM)},e.rotation.order="YXZ",s.forward=function(){return{x:-Math.sin(s.yaw),z:-Math.cos(s.yaw)}},s.toggleLight=function(){s.lightOn=!s.lightOn,n.onSound?.("click")};function r(o,l){let c=0;s.lightOn||(c+=Rn.darkGain);let f=!1,h=1/0;if(l?.alto){const p=l.alto.x-s.x,x=l.alto.z-s.z;if(h=Math.hypot(p,x),h<Rn.altoProximityRange){const M=1-h/Rn.altoProximityRange;c+=Rn.altoProximityGain*M*M}if(h<Gn.alto.stareRange&&h>0){const M=s.forward();p/h*M.x+x/h*M.z>Math.cos(.7)&&ic(i,s.x,s.z,l.alto.x,l.alto.z)&&(f=!0,c+=Rn.stareGain*(1+(1-h/Gn.alto.stareRange)))}}let d=h;for(const p of l?.beasts||[])d=Math.min(d,Math.hypot(p.x-s.x,p.z-s.z));d<12&&(c+=Rn.proximityGain*(1-d/12)),c===0&&s.lightOn&&(c-=Rn.lightRecover),s.sanity=bh(s.sanity+c*o,0,Rn.max),s.staring=f,s.nearestBeast=d,s.altoDist=h}function a(o,l){const c=Sr;if(l<c.triggerDist){const f=1-l/c.triggerDist;s.adrenaline=Math.min(1,s.adrenaline+c.rise*(.35+f*1.9)*o)}else s.adrenaline=Math.max(0,s.adrenaline-c.fall*o)}return s.update=function(o,l){const c=t.consumeLook();s.frozen||(s.yaw+=c.x,s.pitch=bh(s.pitch+c.y,-1.35,1.35));let f=s.frozen?0:t.fwd,h=s.frozen?0:t.side;const d=Math.hypot(f,h);d>1&&(f/=d,h/=d);const x=t.run&&!t.crouch&&d>.1&&!s.exhausted&&s.stamina>0,M=Zt.staminaMax+s.adrenaline*Sr.staminaBonus;if(x){const oe=Zt.staminaDrain*(1+s.adrenaline*(Sr.drainMul-1));s.stamina=Math.max(0,s.stamina-oe*o),s.stamina<=0&&(s.exhausted=!0)}else s.stamina=Math.min(M,s.stamina+Zt.staminaRegen*o),s.exhausted&&s.stamina>Zt.staminaFloor&&(s.exhausted=!1);s.staminaCap=M;const g=1+s.adrenaline*Sr.speedBonus,m=(x?Zt.run:t.crouch?Zt.walk*Zt.crouchMul:Zt.walk)*g,S=Math.sin(s.yaw),R=Math.cos(s.yaw),T=(-S*f+R*h)*m,I=(-R*f-S*h)*m,P=1-Math.exp(-22*o);s.vx=_r(s.vx,T,P),s.vz=_r(s.vz,I,P);const D=s.x+s.vx*o,y=s.z+s.vz*o,L=br(i,D,y,Zt.radius),v=L.x-D,w=L.z-y,A=Math.hypot(v,w);if(A>1e-5){const oe=v/A,me=w/A,ee=s.vx*oe+s.vz*me;ee<0&&(s.vx-=oe*ee,s.vz-=me*ee)}s.x=L.x,s.z=L.z;const O=Math.hypot(s.vx,s.vz)>.35,H=dn(i,s.x,s.z),B=Zt.eye*(t.crouch?.62:1);if(s.eye=_r(s.eye,B,1-Math.exp(-9*o)),s.jumpVel-=IM*o,s.jumpY=Math.max(0,s.jumpY+s.jumpVel*o),s.jumpY<=0&&(s.jumpY=0,s.jumpVel=0),s.groundY=_r(s.groundY,H,1-Math.exp(-16*o)),s.y=s.groundY+s.jumpY,O&&!s.frozen){const oe=x?10.5:t.crouch?4.2:6.6;s.bob+=o*oe,s.stepAccum+=o*oe,s.stepAccum>Math.PI&&(s.stepAccum-=Math.PI,n.onSound?.("step",{running:x,crouch:t.crouch}))}else s.bob=_r(s.bob,0,1-Math.exp(-6*o)),s.stepAccum=0;const q=Math.sin(s.bob*2)*(x?.075:.04),G=Math.cos(s.bob)*(x?.045:.022);s.lightFocus=s.lightOn&&t.focus,r(o,l),a(o,s.nearestBeast??999);const j=(s.sanity/Rn.max)**2*.02+s.adrenaline**2*.016,Q=performance.now()*.001;return e.position.set(s.x+G+Math.sin(Q*23)*j,s.y+s.eye+q+Math.sin(Q*31)*j,s.z),e.rotation.y=s.yaw+Math.sin(Q*17)*j*.5,e.rotation.x=s.pitch+Math.cos(Q*19)*j*.5,s.moving=O,s.running=x,s.crouching=!!t.crouch,s.hidden=s.crouching&&!s.lightOn,{moving:O,running:x}},s.noiseLevel=function(){return s.moving?s.crouching?.12:s.running?1:.45:0},s.netState=function(){const o=s.forward();return{x:+s.x.toFixed(2),z:+s.z.toFixed(2),fx:+o.x.toFixed(3),fz:+o.z.toFixed(3),moving:s.moving,running:s.running,crouching:s.crouching,lightOn:s.lightOn,lightFocus:s.lightFocus,sanity:Math.round(s.sanity)}},s.findInteractable=function(o,l){const c={kind:null,index:-1,label:"",dist:1/0};if(!o)return c;for(const h of i.beacons){if(o.beacons?.[h.index])continue;const d=Math.hypot(h.x-s.x,h.z-s.z);d<Zt.pickupRange&&d<c.dist&&(c.kind="beacon",c.index=h.index,c.dist=d,c.label=`Encender la baliza · ${h.name}`)}for(const h of o.players||[]){if(h.id===l||h.s!=="down")continue;const d=Math.hypot(h.x-s.x,h.z-s.z);d<Zt.pickupRange&&d<c.dist&&(c.kind="revive",c.index=h.id,c.dist=d,c.label=`Levantar a ${h.n}`)}if(o.beacons&&o.beacons.every(Boolean)&&o.phase==="hunt"){const h=Math.hypot(i.tower.x-s.x,i.tower.z-s.z);h<6&&h<c.dist&&(c.kind="radio",c.dist=h,c.label="Pedir extracción por radio")}return c},s}const Th={KeyE:"use",KeyF:"light",KeyM:"map",KeyQ:"ping",KeyR:"ping"};function NM(i,e={}){const t={fwd:0,side:0,run:!1,crouch:!1,focus:!1,lookX:0,lookY:0,holdUse:!1,pointerLocked:!1,touch:!1,enabled:!1},n=new Set,s=[],r=S=>s.push(S);t.consumeActions=()=>{const S=s.slice();return s.length=0,S},t.consumeLook=()=>{const S={x:t.lookX,y:t.lookY};return t.lookX=0,t.lookY=0,S};function a(){t.fwd=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0),t.side=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),t.run=n.has("ShiftLeft")||n.has("ShiftRight"),t.crouch=n.has("ControlLeft")||n.has("KeyC"),t.holdUse=n.has("KeyE")}const o=S=>{t.enabled&&(S.repeat||S.code!=="Escape"&&(n.add(S.code),Th[S.code]&&r(Th[S.code]),S.code==="Space"&&(r("jump"),S.preventDefault()),a(),["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(S.code)&&S.preventDefault()))},l=S=>{n.delete(S.code),a()},c=()=>{n.clear(),a()};window.addEventListener("keydown",o),window.addEventListener("keyup",l),window.addEventListener("blur",c);const f=.0021;let h=!1,d=0,p=0;const x=S=>{const R=f*(e.sensitivity??1);if(t.pointerLocked){t.lookX-=S.movementX*R,t.lookY-=S.movementY*R;return}!h||!t.enabled||(t.lookX-=(S.clientX-d)*R*1.35,t.lookY-=(S.clientY-p)*R*1.35,d=S.clientX,p=S.clientY)},M=()=>{t.pointerLocked=document.pointerLockElement===i,t.pointerLocked||(n.clear(),a(),e.onUnlock?.())},g=()=>{if(t.touch||!t.enabled)return!1;try{const S=i.requestPointerLock?.();return S&&typeof S.catch=="function"&&S.catch(()=>e.onLockDenied?.()),!0}catch{return e.onLockDenied?.(),!1}};i.addEventListener("click",g),document.addEventListener("pointerlockchange",M),document.addEventListener("mousemove",x),i.addEventListener("mousedown",S=>{t.enabled&&(S.button===2&&(t.focus=!0),S.button===0&&(t.pointerLocked?t.focus=!0:(h=!0,d=S.clientX,p=S.clientY)))}),window.addEventListener("mouseup",S=>{S.button===0&&(t.focus=!1,h=!1),S.button===2&&(t.focus=!1)}),i.addEventListener("contextmenu",S=>S.preventDefault());function m(S,R,T){t.touch=!0;const I=R.querySelector("b"),P=58;let D=null,y=0,L=0;const v=Q=>{D=Q.identifier,y=Q.clientX,L=Q.clientY,R.classList.add("active"),I.style.transform=""},w=Q=>{let oe=Q.clientX-y,me=Q.clientY-L;const ee=Math.hypot(oe,me);ee>P&&(y+=oe/ee*(ee-P),L+=me/ee*(ee-P),oe=oe/ee*P,me=me/ee*P),I.style.transform=`translate(${oe}px, ${me}px)`;const Je=Math.hypot(oe,me)/P,dt=Je<.16?0:(Je-.16)/.84,at=Math.hypot(oe,me)||1;t.side=oe/at*dt,t.fwd=-(me/at)*dt,t.run=Je>.9},A=()=>{R.classList.remove("active"),I.style.transform="",t.fwd=0,t.side=0,t.run=!1,D=null};S.addEventListener("touchstart",Q=>{Q.preventDefault(),D===null&&v(Q.changedTouches[0])},{passive:!1}),window.addEventListener("touchmove",Q=>{for(const oe of Q.changedTouches)oe.identifier===D&&w(oe)},{passive:!1});const O=Q=>{for(const oe of Q.changedTouches)oe.identifier===D&&A()};window.addEventListener("touchend",O),window.addEventListener("touchcancel",O);let H=null,B=0,q=0;const G=.0062;i.addEventListener("touchstart",Q=>{if(H!==null||!t.enabled)return;const oe=Q.changedTouches[0];H=oe.identifier,B=oe.clientX,q=oe.clientY},{passive:!0}),i.addEventListener("touchmove",Q=>{for(const oe of Q.changedTouches)oe.identifier===H&&(t.lookX-=(oe.clientX-B)*G*(e.sensitivity??1),t.lookY-=(oe.clientY-q)*G*(e.sensitivity??1),B=oe.clientX,q=oe.clientY)},{passive:!0});const j=Q=>{for(const oe of Q.changedTouches)oe.identifier===H&&(H=null)};i.addEventListener("touchend",j),i.addEventListener("touchcancel",j),T.querySelectorAll("button").forEach(Q=>{const oe=Q.dataset.act,me=Je=>{if(Je.preventDefault(),Je.stopPropagation(),e.onBuzz?.(12),oe==="crouch"){t.crouch=!t.crouch,Q.classList.toggle("held",t.crouch);return}oe==="use"&&(t.holdUse=!0,Q.classList.add("held")),r(oe)},ee=()=>{oe==="use"&&(t.holdUse=!1,Q.classList.remove("held"))};Q.addEventListener("touchstart",me,{passive:!1}),Q.addEventListener("touchend",ee),Q.addEventListener("touchcancel",ee),Q.addEventListener("mousedown",me),Q.addEventListener("mouseup",ee)})}return t.setupTouch=m,t.requestLock=g,t.destroy=()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",l),window.removeEventListener("blur",c),document.removeEventListener("pointerlockchange",M),document.removeEventListener("mousemove",x)},t}const Ht=i=>document.getElementById(i);function DM(){const i={hud:Ht("hud"),beaconRow:Ht("beaconRow"),objective:Ht("objective"),staminaFill:Ht("staminaFill"),staminaMeter:Ht("staminaMeter"),noiseFill:Ht("noiseFill"),noiseMeter:Ht("noiseMeter"),hiddenTag:Ht("hiddenTag"),squad:Ht("squad"),subtitle:Ht("subtitle"),prompt:Ht("prompt"),promptKey:Ht("promptKey"),promptText:Ht("promptText"),timer:Ht("timer"),timerValue:Ht("timerValue"),timerLabel:Ht("timerLabel"),downed:Ht("downed"),downedSub:Ht("downedSub"),mapWrap:Ht("mapWrap"),mapCanvas:Ht("mapCanvas"),fx:Ht("fx"),crosshair:Ht("crosshair")};i.beaconRow.innerHTML="";const e=[];for(let o=0;o<Sn.beacons;o++){const l=document.createElement("i");i.beaconRow.appendChild(l),e.push(l)}const t=i.fx.getContext("2d"),n=i.mapCanvas.getContext("2d");let s=0;const r={mapOpen:!1,flash:0,jumpscare:0,reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches};r.show=o=>{i.hud.hidden=!o},r.setBeacons=function(o){let l=0;for(let c=0;c<e.length;c++){const f=!!o?.[c];e[c].classList.toggle("on",f),f&&l++}return l},r.setObjective=function(o){i.objective.textContent=o},r.setMeters=function(o,l,c=0){const f=Math.max(0,Math.min(100,o/(l||100)*100));i.staminaFill.style.width=`${f}%`,i.staminaMeter.classList.toggle("low",f<22),i.staminaMeter.classList.toggle("rush",c>.15)},r.setUseReady=function(o){const l=document.querySelector('#pads button[data-act="use"]');l&&l.classList.toggle("ready",!!o)},r.setNoise=function(o){const l=Math.max(0,Math.min(100,o*100));i.noiseFill.style.width=`${l}%`,i.noiseMeter.classList.toggle("mid",o>=.25&&o<.6),i.noiseMeter.classList.toggle("loud",o>=.6)},r.setHidden=function(o){i.hiddenTag.hidden=!o},r.setSquad=function(o,l){const c=(o||[]).filter(f=>f.id!==l);if(!c.length){i.squad.innerHTML="";return}i.squad.innerHTML=c.map(f=>{const h=f.e?"dead":f.s==="down"?"down":f.s==="dead"?"dead":"",d=f.e?"fuera":f.s==="down"?`${Math.ceil(f.d)}s`:f.s==="dead"?"—":"";return`<div class="squad-row ${h}"><u></u><b>${Af(f.n)}</b>${d?` ${d}`:""}</div>`}).join("")},r.say=function(o,l=3.4){i.subtitle.textContent=o,i.subtitle.classList.add("show"),s=l},r.setPrompt=function(o,l="E",c=0){if(!o){i.prompt.hidden=!0;return}i.prompt.hidden=!1,i.promptKey.textContent=l,i.promptText.textContent=c>0?`${o} ${"▮".repeat(Math.round(c*8)).padEnd(8,"▯")}`:o},r.setTimer=function(o,l){if(o===null){i.timer.hidden=!0;return}i.timer.hidden=!1,i.timerLabel.textContent=l;const c=Math.floor(o/60),f=Math.floor(o%60);i.timerValue.textContent=`${c}:${String(f).padStart(2,"0")}`},r.setDowned=function(o,l,c){i.downed.hidden=!o,o&&(i.downedSub.textContent=c>0?`Aguanta ${Math.ceil(l)} s. Alguien tiene que llegar hasta ti.`:`Aguanta ${Math.ceil(l)} s. No queda nadie que pueda levantarte.`)},r.setCrosshair=o=>{i.crosshair.style.display=o?"":"none"},r.toggleMap=function(o){return r.mapOpen=o===void 0?!r.mapOpen:o,i.mapWrap.hidden=!r.mapOpen,r.mapOpen},r.drawMap=function(o,l,c,f){if(!r.mapOpen)return;const h=n,d=i.mapCanvas.width,p=Bt.fence*2+24,x=d/p,M=S=>d/2+S*x,g=S=>d/2+S*x;h.fillStyle="#0b100d",h.fillRect(0,0,d,d),h.strokeStyle="rgba(214,210,196,0.05)",h.lineWidth=1;for(let S=0;S<=12;S++){const R=S/12*d;h.beginPath(),h.moveTo(R,0),h.lineTo(R,d),h.stroke(),h.beginPath(),h.moveTo(0,R),h.lineTo(d,R),h.stroke()}h.strokeStyle="rgba(214,210,196,0.32)",h.setLineDash([6,5]),h.lineWidth=2,h.beginPath(),h.arc(d/2,d/2,Bt.fence*x,0,Math.PI*2),h.stroke(),h.setLineDash([]),h.font='500 15px "IBM Plex Mono", monospace',h.textAlign="center";const m=[];for(const S of o.landmarks){const R=M(S.x),T=g(S.z),I=l?.beacons?.[S.index];h.strokeStyle=I?"#d94f2b":"rgba(214,210,196,0.4)",h.fillStyle=I?"rgba(217,79,43,0.22)":"transparent",h.lineWidth=2,h.beginPath(),h.rect(R-7,T-7,14,14),h.fill(),h.stroke(),I&&(h.fillStyle="#d94f2b",h.beginPath(),h.arc(R,T,3.2,0,Math.PI*2),h.fill()),h.fillStyle=I?"#d94f2b":"rgba(214,210,196,0.62)";const P=h.measureText(S.name).width,D=Math.min(d-P/2-6,Math.max(P/2+6,R));let y=T-13;m.some(L=>Math.abs(L.x-D)<(L.w+P)/2&&Math.abs(L.y-y)<16)&&(y=T+24),h.fillText(S.name,D,y),m.push({x:D,y,w:P}),S._labelY=y}a(h,d,M(o.tower.x),g(o.tower.z),o.tower._labelY,"EXTRACCIÓN","#f2d9a0"),a(h,d,M(o.gate.x),g(o.gate.z),o.gate._labelY,"SALIDA","#6f8a5a");for(const S of l?.players||[]){if(S.id===f||S.s==="dead")continue;const R=M(S.x),T=g(S.z);h.fillStyle=S.s==="down"?"#d94f2b":"#6f8a5a",h.beginPath(),h.arc(R,T,5,0,Math.PI*2),h.fill(),h.fillStyle="rgba(214,210,196,0.7)",h.font='400 12px "IBM Plex Mono", monospace',h.fillText(S.n,R,T+18),h.font='500 15px "IBM Plex Mono", monospace'}if(c){const S=M(c.x),R=g(c.z),T=Math.atan2(c.fz??1,c.fx??0);h.fillStyle="rgba(242,217,160,0.2)",h.beginPath(),h.moveTo(S,R),h.arc(S,R,34,T-.42,T+.42),h.closePath(),h.fill(),h.fillStyle="#f2d9a0",h.beginPath(),h.arc(S,R,5.5,0,Math.PI*2),h.fill()}h.fillStyle="rgba(214,210,196,0.5)",h.font='500 18px "Anton", sans-serif',h.fillText("N",d/2,30)};function a(o,l,c,f,h,d,p){o.fillStyle=p,o.font='500 11px "IBM Plex Mono", monospace';const x=o.measureText(d).width,M=h>f?f-14:f+24;o.fillText(d,Math.min(l-x/2-6,Math.max(x/2+6,c)),M),o.font='500 15px "IBM Plex Mono", monospace'}return r.resize=function(){const o=Math.min(devicePixelRatio,2);i.fx.width=Math.floor(innerWidth*o),i.fx.height=Math.floor(innerHeight*o)},r.flashHit=function(){r.flash=1},r.triggerJumpscare=function(){r.jumpscare=1.15},r.drawFx=function(o,{sanity:l=0,staring:c=!1,downed:f=!1,adrenaline:h=0}){const d=t,p=i.fx.width,x=i.fx.height;d.clearRect(0,0,p,x);const M=l/100,g=h>.05&&!r.reducedMotion?Math.pow(Math.max(0,Math.sin(performance.now()*.0042)),4)*h*.22:0;if(M>.02||f||h>.05){const S=f?.75:M*.72+h*.3+g,R=d.createRadialGradient(p/2,x/2,Math.min(p,x)*(.22-M*.1),p/2,x/2,Math.max(p,x)*.72);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(1,f?`rgba(90,20,14,${S})`:h>.3?`rgba(38,10,8,${S})`:`rgba(4,7,6,${S})`),d.fillStyle=R,d.fillRect(0,0,p,x)}const m=c?.1+M*.5:M*M*.14;if(m>.01&&!r.reducedMotion){const S=Math.floor(m*5200);d.fillStyle=`rgba(232,230,222,${.1+m*.5})`;for(let T=0;T<S;T++)d.fillRect(Math.random()*p,Math.random()*x,2,2);const R=Math.floor(m*7);d.fillStyle=`rgba(232,230,222,${.05+m*.1})`;for(let T=0;T<R;T++)d.fillRect(0,Math.random()*x,p,1+Math.random()*3)}r.flash>0&&(d.fillStyle=`rgba(140,47,34,${r.flash*.55})`,d.fillRect(0,0,p,x),r.flash=Math.max(0,r.flash-o*2.2)),r.jumpscare>0&&(UM(d,p,x,r.jumpscare,r.reducedMotion),r.jumpscare=Math.max(0,r.jumpscare-o)),s>0&&(s-=o,s<=0&&i.subtitle.classList.remove("show"))},r}function UM(i,e,t,n,s){const r=s?0:(Math.random()-.5)*26*n;i.save(),i.translate(e/2+r,t/2+r*.6);const a=Math.min(e,t)*(.34+(1-n)*.5);if(i.fillStyle="rgba(6,8,7,0.92)",i.fillRect(-e,-t,e*2,t*2),i.fillStyle="#efece2",i.beginPath(),i.ellipse(0,0,a*.62,a,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,20,20,0.16)",i.beginPath(),i.ellipse(-a*.24,-a*.16,a*.15,a*.2,.2,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a*.24,-a*.16,a*.15,a*.2,-.2,0,Math.PI*2),i.fill(),i.restore(),!s){i.fillStyle=`rgba(255,255,255,${.06+Math.random()*.12})`;for(let o=0;o<1600;o++)i.fillRect(Math.random()*e,Math.random()*t,3,3)}i.fillStyle=`rgba(0,0,0,${Math.max(0,1-n*1.6)})`,i.fillRect(0,0,e,t)}function Af(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function FM(){let i=null,e,t,n,s,r,a=null,o=!1;const l=new Map,c={ready:!1,muted:!1};function f(M=2){const g=i.sampleRate*M,m=i.createBuffer(1,g,i.sampleRate),S=m.getChannelData(0);for(let R=0;R<g;R++)S[R]=Math.random()*2-1;return m}function h(M=!1){const g=i.createBufferSource();return g.buffer=a,g.loop=M,g}c.start=function(){if(o)return;const M=window.AudioContext||window.webkitAudioContext;if(!M)return;i=new M,o=!0,c.ready=!0,a=f(3),e=i.createGain(),e.gain.value=.9;const g=i.createDynamicsCompressor();g.threshold.value=-3,g.knee.value=0,g.ratio.value=20,g.attack.value=.003,g.release.value=.15,g.connect(i.destination),e.connect(g),t=i.createGain(),t.gain.value=0,t.connect(e);const m=h(!0),S=i.createBiquadFilter();S.type="bandpass",S.frequency.value=420,S.Q.value=.7,m.connect(S).connect(t),m.start();const R=i.createOscillator();R.frequency.value=.055;const T=i.createGain();T.gain.value=260,R.connect(T).connect(S.frequency),R.start();const I=i.createOscillator();I.frequency.value=.09;const P=i.createGain();P.gain.value=.035,I.connect(P).connect(t.gain),I.start();const D=i.createOscillator();D.type="sine",D.frequency.value=43;const y=i.createGain();y.gain.value=.035,D.connect(y).connect(e),D.start(),n=i.createGain(),n.gain.value=0,n.connect(e);const L=h(!0),v=i.createBiquadFilter();v.type="bandpass",v.frequency.value=2600,v.Q.value=.55,L.connect(v).connect(n),L.start(),c._staticFilter=v,s=i.createGain(),s.gain.value=.85,s.connect(e),r=i.createGain(),r.gain.value=0,r.connect(e);const w=h(!0),A=i.createBiquadFilter();A.type="bandpass",A.frequency.value=700,A.Q.value=1.4,w.connect(A).connect(r),w.start();const O=i.createOscillator();O.frequency.value=.42;const H=i.createGain();H.gain.value=.05,O.connect(H).connect(r.gain),O.start(),c._breathLfo=O,t.gain.setTargetAtTime(.075,i.currentTime,3)},c.resume=function(){i&&i.state==="suspended"&&i.resume()},c.setMuted=function(M){c.muted=M,e&&(e.gain.value=M?0:.9)},c.updateListener=function(M,g,m,S,R){if(!i)return;const T=i.listener;if(T.positionX){const I=i.currentTime;T.positionX.setTargetAtTime(M,I,.02),T.positionY.setTargetAtTime(g,I,.02),T.positionZ.setTargetAtTime(m,I,.02),T.forwardX.setTargetAtTime(S,I,.02),T.forwardY.setTargetAtTime(0,I,.02),T.forwardZ.setTargetAtTime(R,I,.02),T.upX.setTargetAtTime(0,I,.02),T.upY.setTargetAtTime(1,I,.02),T.upZ.setTargetAtTime(0,I,.02)}else T.setPosition&&(T.setPosition(M,g,m),T.setOrientation(S,0,R,0,1,0))};function d(M,g,m,S=6,R=90){const T=i.createPanner();return T.panningModel="HRTF",T.distanceModel="inverse",T.refDistance=S,T.maxDistance=R,T.rolloffFactor=1.1,T.positionX?(T.positionX.value=M,T.positionY.value=g,T.positionZ.value=m):T.setPosition&&T.setPosition(M,g,m),T}function p({dur:M=.12,freq:g=900,Q:m=1.2,gain:S=.2,type:R="bandpass",at:T=null,decay:I=1}){if(!i)return;const P=h(),D=i.createBiquadFilter();D.type=R,D.frequency.value=g,D.Q.value=m;const y=i.createGain(),L=i.currentTime;y.gain.setValueAtTime(S,L),y.gain.exponentialRampToValueAtTime(1e-4,L+M*I),P.connect(D).connect(y),y.connect(T||e),P.start(L),P.stop(L+M*I+.05)}function x({f0:M,f1:g,dur:m,type:S="sine",gain:R=.2,at:T=null}){if(!i)return;const I=i.createOscillator();I.type=S;const P=i.createGain(),D=i.currentTime;I.frequency.setValueAtTime(M,D),I.frequency.exponentialRampToValueAtTime(Math.max(20,g),D+m),P.gain.setValueAtTime(R,D),P.gain.exponentialRampToValueAtTime(1e-4,D+m),I.connect(P),P.connect(T||e),I.start(D),I.stop(D+m+.05)}return c.step=function(M,g){if(!i)return;const m=g?.045:M?.16:.1;p({dur:.07,freq:1900+Math.random()*900,Q:.8,gain:m}),p({dur:.11,freq:240+Math.random()*120,Q:1,gain:m*.7})},c.click=function(){p({dur:.035,freq:3200,Q:3,gain:.16})},c.pickup=function(){x({f0:660,f1:990,dur:.13,type:"square",gain:.06}),setTimeout(()=>x({f0:990,f1:1320,dur:.18,type:"square",gain:.05}),110)},c.radio=function(){p({dur:.5,freq:1500,Q:.5,gain:.12}),x({f0:420,f1:300,dur:.7,type:"sawtooth",gain:.05})},c.heartbeat=function(M){if(!i||M<=0)return;const g=.1+M*.6;x({f0:68,f1:34,dur:.15,type:"sine",gain:g,at:s}),setTimeout(()=>x({f0:58,f1:30,dur:.19,type:"sine",gain:g*.72,at:s}),155)},c.roar=function(M,g,m){if(!i)return;const S=d(M,g+1.5,m,12,140);S.connect(e),x({f0:130,f1:44,dur:1.5,type:"sawtooth",gain:.5,at:S}),x({f0:68,f1:30,dur:1.9,type:"square",gain:.28,at:S}),p({dur:1.4,freq:320,Q:.5,gain:.24,at:S})},c.snarl=function(M,g,m){if(!i)return;const S=d(M,g+.7,m,6,60);S.connect(e),p({dur:.34,freq:480+Math.random()*260,Q:2.2,gain:.24,at:S}),x({f0:190,f1:96,dur:.36,type:"sawtooth",gain:.12,at:S})},c.scream=function(M,g,m){if(!i)return;const S=M===void 0?null:d(M,g+1.6,m,10,120);S&&S.connect(e),x({f0:880,f1:210,dur:.85,type:"sawtooth",gain:.3,at:S}),p({dur:.7,freq:1400,Q:.8,gain:.2,at:S})},c.dreadPulse=function(){i&&(x({f0:52,f1:30,dur:1.1,type:"sine",gain:.22}),p({dur:.9,freq:1900,Q:6,gain:.05,decay:1}))},c.jumpscare=function(){i&&(p({dur:1.1,freq:1800,Q:.35,gain:.58}),x({f0:1400,f1:45,dur:1,type:"sawtooth",gain:.38}),x({f0:90,f1:38,dur:1.6,type:"square",gain:.26}))},c.gate=function(){p({dur:1.6,freq:260,Q:1.6,gain:.3,decay:1}),x({f0:150,f1:70,dur:1.4,type:"square",gain:.12})},c.nightfall=function(){i&&(x({f0:220,f1:40,dur:3.2,type:"sine",gain:.22}),x({f0:110,f1:32,dur:3.6,type:"sawtooth",gain:.14}),p({dur:2.6,freq:700,Q:.4,gain:.1,decay:1.4}))},c.updateBeaconHums=function(M,g,m,S){if(i)for(const R of M){const T=!g?.[R.index],I=Math.hypot(R.x-m,R.z-S);let P=l.get(R.index);if(T&&I<34){if(!P){const D=d(R.x,R.y+1.4,R.z,4,40),y=i.createOscillator();y.type="triangle",y.frequency.value=118;const L=i.createGain();L.gain.value=0,y.connect(L).connect(D).connect(e),y.start(),P={osc:y,gain:L,panner:D},l.set(R.index,P)}P.gain.gain.setTargetAtTime(.055*(1-I/34),i.currentTime,.3)}else if(P&&(P.gain.gain.setTargetAtTime(0,i.currentTime,.3),!T)){try{P.osc.stop(i.currentTime+.6)}catch{}l.delete(R.index)}}},c.updateTension=function({sanity:M,staring:g,altoDist:m=999,exhausted:S,nearest:R,adrenaline:T=0}){if(!i)return;const I=i.currentTime,P=M/100,D=m<Rn.altoProximityRange?1-m/Rn.altoProximityRange:0,y=P*P*.1+D*D*.38+(g?.07:0);n.gain.setTargetAtTime(y,I,.2),c._staticFilter.frequency.setTargetAtTime(1400+P*3200,I,.3);const L=Math.max(S?.085:0,T*.09,P>.5?.035:0);if(r.gain.setTargetAtTime(L,I,.3),c._breathLfo&&c._breathLfo.frequency.setTargetAtTime(S?1.15:.42+T*.75,I,.4),t){const w=R<22?.3:1;t.gain.setTargetAtTime(.075*w,I,1.2)}if(!c._presence){const w=i.createGain();w.gain.value=0,w.connect(e);const A=i.createOscillator();A.type="sawtooth",A.frequency.value=46;const O=i.createBiquadFilter();O.type="lowpass",O.frequency.value=190,A.connect(O).connect(w),A.start();const H=i.createOscillator();H.frequency.value=.7;const B=i.createGain();B.gain.value=9,H.connect(B).connect(A.frequency),H.start(),c._presence=w}const v=R<26?1-R/26:0;c._presence.gain.setTargetAtTime(v*v*.13,I,.45)},c.stopAll=function(){for(const[M,g]of l){try{g.osc.stop()}catch{}l.delete(M)}n&&(n.gain.value=0),r&&(r.gain.value=0),c._presence&&(c._presence.gain.value=0)},c}const OM=800,BM="https://roblox-juego.onrender.com/telemetry";function zM(){const i=[],e=Date.now();function t(r){const{name:a,byName:o,...l}=r;return l}function n(r,a){i.push({t:+(performance.now()/1e3).toFixed(2),type:r,...t(a)}),i.length>OM&&i.shift()}const s={log:(r,a={})=>n(r,a),init(){window.addEventListener("error",r=>{n("jsError",{message:r.message,file:r.filename,line:r.lineno})}),window.addEventListener("unhandledrejection",r=>{n("jsError",{message:String(r.reason?.message||r.reason)})})},toJSON(){return JSON.stringify({startedAt:new Date(e).toISOString(),ua:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`,touch:navigator.maxTouchPoints>0,events:i},null,2)},async send(){try{return await fetch(BM,{method:"POST",headers:{"content-type":"application/json"},body:s.toJSON(),keepalive:!0}),!0}catch{return!1}},download(){const r=new Blob([s.toJSON()],{type:"application/json"}),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.download=`coto-vedado-registro-${e}.json`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};return s}const Eh=Math.PI*2,xr=(i,e,t)=>i<e?e:i>t?t:i,Oa=(i,e=0)=>typeof i=="number"&&Number.isFinite(i)?i:e,kM=10;function HM(i){const e=uo(i^2654435769),t=Ef(i),n={world:t,seed:i,time:0,phase:$t.LOBBY,players:new Map,beasts:[],alto:null,noises:[],events:[],beaconsTaken:new Array(Sn.beacons).fill(!1),extractionLeft:Sn.extractionTime,radioOn:!1,gateOpen:!1,pressure:0,dayPhase:!0,activeBeasts:{alto:!0,jauria:!0,ciego:!0}},s=(v,w)=>n.events.push({type:v,...w}),r=(v,w,A,O)=>{n.noises.push({x:v,z:w,r:A,life:.35,source:O})},a=()=>[...n.players.values()].filter(v=>v.state==="alive"&&!v.escaped),o=()=>[...n.players.values()].filter(v=>v.state!=="dead"&&!v.escaped);function l(v,w,A=O=>O.state==="alive"&&!O.escaped){let O=null,H=1/0;for(const B of n.players.values()){if(!A(B))continue;const q=Math.hypot(B.x-v,B.z-w);q<H&&(H=q,O=B)}return{player:O,dist:H}}function c(v,w,A,O,H){const B=w-v.x,q=A-v.z,G=Math.hypot(B,q);return G>O||G<.001?G<=O:B/G*v.fx+q/G*v.fz<H?!1:ic(t,v.x,v.z,w,A)}function f(v,w,A){for(const O of n.players.values()){if(O.state!=="alive"||!O.lightOn||O.escaped)continue;const H=O.lightFocus?Vt.focusRange:Vt.range,B=Math.cos(O.lightFocus?Vt.focusAngle:Vt.angle);if(!(Math.hypot(v-O.x,w-O.z)>Math.min(H,A))&&c(O,v,w,Math.min(H,A),B))return O}return null}function h(){for(let v=0;v<40;v++){const w=e()*Eh,A=Math.sqrt(e())*(Bt.half-8),O=Math.cos(w)*A,H=Math.sin(w)*A;if(!t.landmarks.some(q=>Math.hypot(O-q.x,H-q.z)<q.clear+3))return{x:O,z:H}}return{x:0,z:0}}n.addPlayer=function(v,w){const A={id:v,name:w||"Rastreador",x:t.spawn.x+(e()-.5)*5,z:t.spawn.z+(e()-.5)*5,y:0,fx:0,fz:1,moving:!1,running:!1,crouching:!1,lightOn:!0,lightFocus:!1,state:"alive",downT:0,reviveProgress:0,invuln:0,sanity:0,escaped:!1,noiseAccum:0,ready:!1,scentTrail:[],scentAcc:0};return A.y=dn(t,A.x,A.z),n.players.set(v,A),s("join",{id:v,name:A.name}),A},n.removePlayer=function(v){n.players.delete(v)&&s("leave",{id:v})},n.setInput=function(v,w){const A=n.players.get(v);if(!A)return;if(A.state==="alive"&&!A.escaped){const B=Date.now(),q=xr(Oa(w.x,A.x),-120,Bt.fence),G=xr(Oa(w.z,A.z),-120,Bt.fence),j=A._lastMoveAt?Math.min(1,(B-A._lastMoveAt)/1e3):1,Q=kM*j+1.5,oe=q-A.x,me=G-A.z,ee=Math.hypot(oe,me);ee>Q&&ee>1e-6?(A.x+=oe/ee*Q,A.z+=me/ee*Q):(A.x=q,A.z=G),A._lastMoveAt=B,A.y=dn(t,A.x,A.z),A.moving=!!w.moving,A.running=!!w.running,A.crouching=!!w.crouching}const O=Oa(w.fx,NaN),H=Oa(w.fz,NaN);Number.isFinite(O)&&Number.isFinite(H)&&(O!==0||H!==0)&&(A.fx=O,A.fz=H),A.lightOn=!!w.lightOn,A.lightFocus=!!w.lightFocus,typeof w.sanity=="number"&&Number.isFinite(w.sanity)&&(A.sanity=xr(w.sanity,0,Rn.max))},n.setReady=function(v,w){const A=n.players.get(v);A&&(A.ready=!!w)},n.pickupBeacon=function(v,w){const A=n.players.get(v);if(!A||A.state!=="alive"||n.phase!==$t.HUNT)return!1;const O=t.beacons[w];if(!O||n.beaconsTaken[w]||Math.hypot(A.x-O.x,A.z-O.z)>Zt.pickupRange+1)return!1;n.beaconsTaken[w]=!0;const H=n.beaconsTaken.filter(Boolean).length,B=Math.max(1,Sn.beacons-Ya.nightAtBeacon);return n.pressure=Math.max(0,Math.min(1,(H-Ya.nightAtBeacon)/B)),r(A.x,A.z,_i.pickup,"pickup"),s("beacon",{index:w,by:v,name:A.name,count:H,place:O.name}),n.dayPhase&&H>=Ya.nightAtBeacon&&(n.dayPhase=!1,g(),s("nightfall",{})),H>=Sn.beacons&&s("allBeacons",{}),!0},n.activateRadio=function(v){if(n.phase!==$t.HUNT||n.beaconsTaken.filter(Boolean).length<Sn.beacons)return!1;const w=n.players.get(v);return!w||w.state!=="alive"||Math.hypot(w.x-t.tower.x,w.z-t.tower.z)>6?!1:(n.phase=$t.EXTRACTION,n.radioOn=!0,n.pressure=1,n.extractionLeft=Sn.extractionTime,r(t.tower.x,t.tower.z,_i.roar,"radio"),s("radio",{by:v,name:w.name}),!0)},n.ping=function(v){const w=n.players.get(v);!w||w.state==="dead"||(r(w.x,w.z,_i.ping,"ping"),s("ping",{id:v,x:w.x,z:w.z,name:w.name}))},n.revive=function(v,w){const A=n.players.get(v),O=n.players.get(w);if(!A||!O||A.state!=="alive"||O.state!=="down"||Math.hypot(A.x-O.x,A.z-O.z)>Zt.pickupRange)return;const H=Date.now(),B=A._reviveTarget===w?Math.min(.2,Math.max(0,(H-A._reviveAt)/1e3)):0;A._reviveTarget=w,A._reviveAt=H,O.reviveProgress+=B,O._lastRevivedAt=n.time,A.noiseAccum+=B,A.noiseAccum>.8&&(A.noiseAccum=0,r(A.x,A.z,_i.revive,"revive")),O.reviveProgress>=Zt.reviveTime&&(O.state="alive",O.downT=0,O.reviveProgress=0,O.invuln=3.5,O.sanity=Math.max(O.sanity,45),s("revived",{id:w,by:v,name:O.name,byName:A.name}))};function d(v,w){return v.state!=="alive"||v.invuln>0?!1:(a().filter(O=>O.id!==v.id).length===0?(v.state="dead",s("death",{id:v.id,name:v.name,cause:w})):(v.state="down",v.downT=Zt.downTime,v.reviveProgress=0,s("down",{id:v.id,name:v.name,cause:w})),r(v.x,v.z,_i.scream,"scream"),!0)}function p(v,w){v.state!=="dead"&&(v.state="dead",s("death",{id:v.id,name:v.name,cause:w}))}function x(){const v=a();if(!v.length)return null;v.sort((B,q)=>q.sanity-B.sanity);const w=v[0],A=Gn.alto,O=A.minSpawnDist-n.pressure*8,H=A.maxSpawnDist-n.pressure*12;for(let B=0;B<30;B++){const q=e()*Eh,G=O+e()*Math.max(4,H-O);let j=w.x+Math.cos(q)*G,Q=w.z+Math.sin(q)*G;const oe=Math.hypot(j,Q),me=Bt.fence-1.5;oe>me&&(j=j/oe*me,Q=Q/oe*me);const ee={x:j,z:Q};if(c(w,ee.x,ee.z,A.stareRange,Math.cos(.75)))continue;const{x:Je,z:dt}=br(t,ee.x,ee.z,.9);return{x:Je,z:dt,target:w.id}}return null}function M(v){const w=Gn.alto;n.alto||(n.alto={active:!1,x:0,z:0,y:0,cool:14-n.pressure*6,target:null,seenT:0});const A=n.alto;if(!A.active){if(A.cool-=v,A.cool<=0){const pe=x();pe?(A.active=!0,A.x=pe.x,A.z=pe.z,A.y=dn(t,A.x,A.z),A.target=pe.target,A.cool=w.teleportCooldown,A.seenT=0,s("altoAppear",{x:A.x,z:A.z})):A.cool=3}return}let O=!1;for(const pe of a())if(c(pe,A.x,A.z,w.stareRange,Math.cos(.7))&&(O=!0,s("stare",{id:pe.id,gain:Rn.stareGain*v})),Math.hypot(pe.x-A.x,pe.z-A.z)<w.killRange){p(pe,"alto"),A.active=!1,A.cool=20-n.pressure*8,s("altoVanish",{});return}if(O){A.seenT+=v,A.cool=w.teleportCooldown*(1-n.pressure*.45);return}if(A.cool-=v,A.cool>0)return;A.cool=w.teleportCooldown*(1-n.pressure*.45);const H=n.players.get(A.target),B=H&&H.state==="alive"?H:l(A.x,A.z).player;if(!B){A.active=!1;return}const q=B.x-A.x,G=B.z-A.z,j=Math.hypot(q,G)||1,Q=7;if(j<=Q+.5){A.x=B.x,A.z=B.z,A.y=dn(t,A.x,A.z),p(B,"alto"),A.active=!1,A.cool=20-n.pressure*8,s("altoVanish",{});return}A.cool=Math.max(1.5,A.cool);const oe=w.closeInStep*(1+n.pressure*.5);let me=A.x+q/j*Math.min(oe,j-Q),ee=A.z+G/j*Math.min(oe,j-Q);const Je=(e()-.5)*8;me+=-G/j*Je,ee+=q/j*Je;const dt=Math.hypot(me,ee),at=Bt.fence-1.5;dt>at&&(me=me/dt*at,ee=ee/dt*at);const fe=br(t,me,ee,.9);A.x=fe.x,A.z=fe.z,A.y=dn(t,A.x,A.z),e()<.12&&(A.active=!1,A.cool=16-n.pressure*7,s("altoVanish",{}))}function g(){n.beasts=[],n.activeBeasts.jauria;for(let v=0;v<(n.activeBeasts.jauria?Gn.jauria.count:0);v++){const w=h();n.beasts.push({kind:"jauria",id:`j${v}`,x:w.x,z:w.z,y:dn(t,w.x,w.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:0,atkCool:0})}for(let v=0;v<(n.activeBeasts.ciego?Gn.ciego.count:0);v++){const w=h();n.beasts.push({kind:"ciego",id:`c${v}`,x:w.x,z:w.z,y:dn(t,w.x,w.z),fx:0,fz:1,state:"patrol",target:h(),repel:0,cool:0,roarT:Gn.ciego.roarCooldown,atkCool:0})}}function m(v,w,A,O,H){const B=w-v.x,q=A-v.z,G=Math.hypot(B,q);if(G<.05)return 0;let j=B/G,Q=q/G;const oe=br(t,v.x+j*O*H,v.z+Q*O*H,.6);let me=oe.x,ee=oe.z;if(Math.hypot(me-v.x,ee-v.z)<O*H*.4){const at=(v.id.charCodeAt(1)||0)%2?1:-1,fe=-Q*at,pe=j*at,Me=br(t,v.x+(j*.4+fe)*O*H,v.z+(Q*.4+pe)*O*H,.6);me=Me.x,ee=Me.z}v.x=me,v.z=ee,v.y=dn(t,v.x,v.z);const dt=Math.hypot(w-v.x,A-v.z)||1;return v.fx=(w-v.x)/dt,v.fz=(A-v.z)/dt,G}function S(v,w){v.atkCool=6,v.state="investigate",v.cool=5;const A=v.x-w.x,O=v.z-w.z,H=Math.hypot(A,O)||1;v.target={x:xr(v.x+A/H*22,-118,Bt.half),z:xr(v.z+O/H*22,-118,Bt.half)}}function R(v,w){const A=Gn.jauria;v.atkCool=Math.max(0,v.atkCool-w);const O=1+n.pressure*.28,H=f(v.x,v.z,A.lightRepelRange);if(H&&H.lightFocus&&(v.repel=A.lightRepelTime),v.repel>0){if(v.repel-=w,H){m(v,v.x*2-H.x,v.z*2-H.z,A.patrolSpeed*1.6,w),v.fx=H.x-v.x,v.fz=H.z-v.z;const j=Math.hypot(v.fx,v.fz)||1;v.fx/=j,v.fz/=j}v.state="repelled";return}let B=null,q=1/0;for(const j of a()){if(j.crouching&&!j.lightOn)continue;const Q=Math.hypot(j.x-v.x,j.z-v.z);if(Q>A.sightRange||Q>q)continue;const oe=(j.x-v.x)/(Q||1),me=(j.z-v.z)/(Q||1);oe*v.fx+me*v.fz<Math.cos(A.sightAngle)&&Q>5||ic(t,v.x,v.z,j.x,j.z)&&(B=j,q=Q)}if(B){v.state="chase",v.target={x:B.x,z:B.z},m(v,B.x,B.z,A.chaseSpeed*O,w),q<A.attackRange&&v.atkCool<=0&&d(B,"jauria")&&S(v,B);return}if(v.state==="chase"&&(v.state="investigate",v.cool=6),v.state==="investigate"){v.cool-=w,(m(v,v.target.x,v.target.z,A.chaseSpeed*.6*O,w)<1.5||v.cool<=0)&&(v.state="patrol",v.target=h());return}m(v,v.target.x,v.target.z,A.patrolSpeed*O,w)<2&&(v.target=h())}function T(v,w){const A=Gn.ciego;v.atkCool=Math.max(0,v.atkCool-w),v.smellCool=Math.max(0,(v.smellCool||0)-w);const O=1+n.pressure*.3;v.roarT-=w;let H=null,B=1/0;if(v.state==="chase"||v.state==="investigate")for(const G of a()){const j=Math.hypot(G.x-v.x,G.z-v.z),Q=G.running?26:G.crouching?4:G.moving?13:0;j<Q&&j<B&&(H=G,B=j)}if(H){v.state="chase",v.target={x:H.x,z:H.z},m(v,H.x,H.z,A.chaseSpeed*O,w),v.roarT<=0&&(v.roarT=A.roarCooldown,r(v.x,v.z,_i.roar,"roar"),s("roar",{x:v.x,z:v.z})),B<A.attackRange&&v.atkCool<=0&&d(H,"ciego")&&S(v,H);return}if(v.state==="chase"&&(v.state="investigate",v.cool=9),v.state==="investigate"){if(v.cool-=w,m(v,v.target.x,v.target.z,A.chaseSpeed*O,w)<1.5){const j=y(v.x,v.z,A.smellRange);j?(v.smellCool=A.smellCool,v.target={x:j.x,z:j.z},v.cool=10):(v.state="patrol",v.target=h())}else v.cool<=0&&(v.state="patrol",v.target=h());return}if(v.smellCool<=0){const G=y(v.x,v.z,A.smellRange);if(G){v.smellCool=A.smellCool,v.state="investigate",v.cool=10,v.target={x:G.x,z:G.z};return}}m(v,v.target.x,v.target.z,A.patrolSpeed*O,w)<2&&(v.target=h())}function I(v){for(let w=n.noises.length-1;w>=0;w--){const A=n.noises[w];if(A.life===.35)for(const O of n.beasts){if(O.state==="chase")continue;const H=O.kind==="ciego"?Gn.ciego:Gn.jauria;Math.hypot(O.x-A.x,O.z-A.z)<Math.min(A.r,H.hearRange)&&(O.state="investigate",O.cool=O.kind==="ciego"?12:8,O.target=O.kind==="ciego"?{x:A.x,z:A.z}:{x:A.x+(e()-.5)*6,z:A.z+(e()-.5)*6})}A.life-=v,A.life<=0&&n.noises.splice(w,1)}}function P(v){for(const w of n.players.values()){if(w.state!=="alive"||w.escaped)continue;if(!w.moving){w.noiseAccum=0;continue}if(w.noiseAccum+=v,w.noiseAccum<.45)continue;w.noiseAccum=0;const A=w.running?_i.run:w.crouching?_i.crouch:_i.walk;r(w.x,w.z,A,"steps")}}function D(v){for(const w of n.players.values())w.state!=="alive"||w.escaped||(w.scentAcc+=v,!(w.scentAcc<2)&&(w.scentAcc=0,w.scentTrail.push({x:w.x,z:w.z,t:n.time}),w.scentTrail.length>16&&w.scentTrail.shift()))}function y(v,w,A){let O=null,H=A;for(const B of n.players.values())if(!(B.state!=="alive"||B.escaped))for(const q of B.scentTrail){if(n.time-q.t>35)continue;const G=Math.hypot(q.x-v,q.z-w);G<H&&(H=G,O=q)}return O}n.start=function(v){if(n.phase===$t.LOBBY){n.phase=$t.HUNT,n.beaconsTaken.fill(!1),n.pressure=0,n.extractionLeft=Sn.extractionTime,n.radioOn=!1,n.gateOpen=!1,n.alto=null,n.activeBeasts={alto:v?.activeBeasts?.alto!==!1,jauria:v?.activeBeasts?.jauria!==!1,ciego:v?.activeBeasts?.ciego!==!1},n.dayPhase=!0,n.beasts=[];for(const w of n.players.values())w.state="alive",w.escaped=!1,w.sanity=0,w.downT=0,w.invuln=2,w.x=t.spawn.x+(e()-.5)*6,w.z=t.spawn.z+(e()-.5)*6,w.y=dn(t,w.x,w.z);s("start",{seed:n.seed})}};function L(v){if(n.phase===$t.EXTRACTION&&!n.gateOpen&&(n.extractionLeft-=v,n.extractionLeft<=0&&(n.extractionLeft=0,n.gateOpen=!0,s("gateOpen",{}))),n.gateOpen)for(const w of a())Math.hypot(w.x-t.gate.x,w.z-t.gate.z)<5&&(w.escaped=!0,s("escaped",{id:w.id,name:w.name}));for(const w of n.players.values())w.invuln>0&&(w.invuln=Math.max(0,w.invuln-v));for(const w of n.players.values()){if(w.state!=="down")continue;w.downT-=v,n.time-(w._lastRevivedAt??-1/0)<.25||(w.reviveProgress=Math.max(0,w.reviveProgress-v*.6)),w.downT<=0&&p(w,"bleedout")}if(n.phase===$t.HUNT||n.phase===$t.EXTRACTION){const w=o(),A=[...n.players.values()].filter(O=>O.escaped);n.players.size>0&&w.length===0&&(n.phase=A.length>0?$t.ESCAPED:$t.WIPED,s("over",{phase:n.phase,escaped:A.length}))}}return n.tick=function(v){if(n.time+=v,n.phase!==$t.HUNT&&n.phase!==$t.EXTRACTION){L(v);return}if(!n.dayPhase){P(v),D(v),I(v);for(const w of n.beasts)w.kind==="jauria"?R(w,v):T(w,v);n.activeBeasts.alto&&M(v)}L(v)},n.snapshot=function(){return{t:+n.time.toFixed(2),phase:n.phase,beacons:n.beaconsTaken.slice(),extraction:+n.extractionLeft.toFixed(1),radioOn:n.radioOn,gateOpen:n.gateOpen,dayPhase:n.dayPhase,pressure:+n.pressure.toFixed(2),players:[...n.players.values()].map(v=>({id:v.id,n:v.name,x:+v.x.toFixed(2),y:+v.y.toFixed(2),z:+v.z.toFixed(2),fx:+v.fx.toFixed(3),fz:+v.fz.toFixed(3),s:v.state,d:+v.downT.toFixed(1),rp:+v.reviveProgress.toFixed(2),l:v.lightOn?v.lightFocus?2:1:0,e:v.escaped,r:v.ready,run:v.running})),beasts:n.beasts.map(v=>({id:v.id,k:v.kind,x:+v.x.toFixed(2),y:+v.y.toFixed(2),z:+v.z.toFixed(2),fx:+v.fx.toFixed(3),fz:+v.fz.toFixed(3),s:v.state})),alto:n.alto&&n.alto.active?{x:+n.alto.x.toFixed(2),y:+n.alto.y.toFixed(2),z:+n.alto.z.toFixed(2)}:null}},n.drainEvents=function(){const v=n.events;return n.events=[],v},n}function Rf(){const i=new Map;return{on(e,t){return(i.get(e)||i.set(e,[]).get(e)).push(t),this},emit(e,t){(i.get(e)||[]).forEach(n=>n(t))}}}function Cf({name:i}){const e=oM(uo((Date.now()^1542469173)>>>0)),t=HM(aM(e)),n=Rf(),s="me";t.addPlayer(s,i),t.setReady(s,!0);let r=0;const a={id:s,code:e,world:t.world,snapshot:null,local:!0,host:!0,sim:t,on:n.on.bind(n),start(o){t.start(o)},send(o,l={}){switch(o){case"in":t.setInput(s,l);break;case"pickup":t.pickupBeacon(s,l.index);break;case"radio":t.activateRadio(s);break;case"ping":t.ping(s);break;case"revive":t.revive(s,l.id);break;case"ready":t.setReady(s,l.ready);break;case"start":t.start(l);break;case"restart":t.phase=$t.LOBBY,t.start(l);break}},update(o){for(r+=Math.min(o,.25);r>=nl;)t.tick(nl),r-=nl;a.snapshot=t.snapshot();const l=t.drainEvents();l.length&&n.emit("events",l),n.emit("snapshot",a.snapshot)},close(){}};return a}function GM({url:i,name:e,code:t,host:n}){const s=Rf(),r={id:null,code:t||null,world:null,snapshot:null,local:!1,host:!!n,connected:!1,on:s.on.bind(s),update(){}};let a,o=[];try{a=new WebSocket(i)}catch{return setTimeout(()=>s.emit("error","No se pudo abrir la conexión."),0),r}return a.addEventListener("open",()=>{r.connected=!0,a.send(JSON.stringify({t:"hello",name:e,code:t||null,host:!!n})),o.forEach(l=>a.send(l)),o=[]}),a.addEventListener("message",l=>{let c;try{c=JSON.parse(l.data)}catch{return}switch(c.t){case"welcome":r.id=c.id,r.code=c.code,r.host=c.host,r.seed=c.seed,s.emit("welcome",c);break;case"snap":r.snapshot=c.s,s.emit("snapshot",c.s);break;case"ev":s.emit("events",c.e);break;case"err":s.emit("error",c.m);break}}),a.addEventListener("close",()=>{r.connected=!1,s.emit("closed")}),a.addEventListener("error",()=>s.emit("error","Se perdió la conexión con la partida.")),r.send=function(l,c={}){const f=JSON.stringify({t:l,...c});a.readyState===WebSocket.OPEN?a.send(f):a.readyState===WebSocket.CONNECTING&&o.push(f)},r.start=l=>r.send("start",l),r.close=()=>{try{a.close()}catch{}},r}function VM(){const i=location.protocol==="https:"?"wss:":"ws:";return location.port==="5173"||location.port==="4173"?`${i}//${location.hostname}:8787`:`${i}//${location.host}`}const bt=i=>document.getElementById(i),lt={scene:bt("scene"),loading:bt("screenLoading"),loadingLabel:bt("loadingLabel"),loadBarFill:bt("loadBarFill"),boot:bt("screenBoot"),lobby:bt("screenLobby"),end:bt("screenEnd"),nameInput:bt("nameInput"),codeInput:bt("codeInput"),pickAlto:bt("pickAlto"),pickJauria:bt("pickJauria"),pickCiego:bt("pickCiego"),btnSolo:bt("btnSolo"),btnHost:bt("btnHost"),joinForm:bt("joinForm"),bootNote:bt("bootNote"),lobbyCode:bt("lobbyCode"),roster:bt("roster"),btnReady:bt("btnReady"),btnStart:bt("btnStart"),btnLeave:bt("btnLeave"),lobbyNote:bt("lobbyNote"),endTitle:bt("endTitle"),endText:bt("endText"),endStamp:bt("endStamp"),btnAgain:bt("btnAgain"),btnMenu:bt("btnMenu"),btnReport:bt("btnReport"),touch:bt("touch"),stickZone:bt("stickZone"),stick:bt("stick"),pads:bt("pads"),mapWrap:bt("mapWrap"),mapClose:bt("mapClose"),mapNote:bt("mapNote")},ft=DM(),Dt=FM();let Jt;const ai=zM();ai.init();function ji(i){try{navigator.vibrate?.(i)}catch{}}const Xn=NM(lt.scene,{onBuzz:ji,onUnlock:()=>{re.running&&!ft.mapOpen&&ft.say("Haz clic para volver al bosque.",6)},onLockDenied:()=>{re.running&&ft.say("Haz clic en la pantalla para mirar alrededor.",8)}}),re={session:null,player:null,world:null,running:!1,screen:"boot",myId:null,lastSnap:null,netAcc:0,heartAcc:0,ended:!1,iAmDead:!1,altoWasNear:!1,reviveTarget:null,reviveAcc:0,activeBeasts:{alto:!0,jauria:!0,ciego:!0},telemetryAcc:0},Nc=()=>(lt.nameInput.value||"").trim().slice(0,14)||"Rastreador",Pf=()=>({alto:lt.pickAlto.checked,jauria:lt.pickJauria.checked,ciego:lt.pickCiego.checked});function is(i){re.screen=i,lt.boot.hidden=i!=="boot",lt.lobby.hidden=i!=="lobby",lt.end.hidden=i!=="end",ft.show(i==="game"),lt.touch.hidden=!(i==="game"&&Xn.touch),ft.setCrosshair(i==="game")}function WM(){lt.btnHost.hidden=!0,document.getElementById("joinForm").hidden=!0,lt.bootNote.innerHTML="Versión de un jugador. El co-op de 2 a 6 existe y funciona, pero necesita el servidor Node del repositorio corriendo: <code>npm start</code>."}function XM(){navigator.maxTouchPoints>0&&!matchMedia("(pointer:fine)").matches&&(Xn.setupTouch(lt.stickZone,lt.stick,lt.pads),lt.bootNote.textContent="Joystick para andar, arrastra para mirar.",lt.mapNote.innerHTML="Mapa del coto · toca para cerrar")}function Dc(){ft.mapOpen&&(ft.toggleMap(!1),ji(10))}lt.mapClose.addEventListener("click",i=>{i.stopPropagation(),Dc()});lt.mapWrap.addEventListener("pointerdown",Dc);window.addEventListener("keydown",i=>{i.code==="Escape"&&ft.mapOpen&&(i.preventDefault(),Dc())});function Uc(){Jt?.resize(),ft.resize()}window.addEventListener("resize",Uc);lt.btnSolo.addEventListener("click",()=>{Dt.start(),re.activeBeasts=Pf(),ai.log("sessionStart",{mode:"solo",activeBeasts:re.activeBeasts});const i=Cf({name:Nc()});Fc(i),i.start({activeBeasts:re.activeBeasts}),Oc()});lt.btnHost.addEventListener("click",()=>{Dt.start(),re.activeBeasts=Pf(),ai.log("sessionStart",{mode:"host",activeBeasts:re.activeBeasts}),If({host:!0})});lt.joinForm.addEventListener("submit",i=>{i.preventDefault();const e=lt.codeInput.value.trim().toUpperCase();if(e.length!==Sn.roomCodeLength){lt.bootNote.textContent=`El código son ${Sn.roomCodeLength} letras.`;return}Dt.start(),ai.log("sessionStart",{mode:"join"}),If({host:!1,code:e})});function If({host:i,code:e}){lt.bootNote.textContent="Conectando con el puesto de control…";const t=GM({url:VM(),name:Nc(),code:e,host:i});Fc(t),t.on("welcome",n=>{re.world=Ef(n.seed),Jt.buildWorld(re.world),lt.lobbyCode.textContent=n.code,lt.btnStart.hidden=!n.host,is("lobby")}),t.on("error",n=>{lt.bootNote.textContent=n,is("boot")}),t.on("closed",()=>{re.screen!=="boot"&&(lt.bootNote.textContent="Se cortó la conexión con la partida.",ho())})}lt.btnReady.addEventListener("click",()=>{const i=(re.lastSnap?.players||[]).find(e=>e.id===re.session?.id);re.session?.send("ready",{ready:!i?.r})});lt.btnStart.addEventListener("click",()=>re.session?.send("start",{activeBeasts:re.activeBeasts}));lt.btnLeave.addEventListener("click",ho);lt.btnMenu.addEventListener("click",ho);lt.btnReport.addEventListener("click",()=>ai.download());lt.btnAgain.addEventListener("click",()=>{if(!re.session)return ho();if(re.session.local){const i=Cf({name:Nc()});Fc(i),i.start({activeBeasts:re.activeBeasts}),Oc()}else re.session.send("restart",{activeBeasts:re.activeBeasts}),is("lobby")});function ho(){re.running=!1,re.session?.close(),re.session=null,Dt.stopAll(),document.exitPointerLock?.(),is("boot")}function YM(i){if(re.screen!=="lobby")return;lt.roster.innerHTML=(i.players||[]).map(t=>{const n=t.id===re.session?.id;return`<li class="${t.r?"ready":""} ${n?"me":""}"><b>${Af(t.n)}</b><span>${t.r?"listo":"esperando"}</span></li>`}).join("");const e=(i.players||[]).length;lt.lobbyNote.textContent=e<2?"Puedes empezar solo, pero nadie te levantará del suelo.":`${e} rastreadores dentro. Máximo ${Sn.maxPlayers}.`}function Fc(i){re.session?.close(),re.session=i,re.myId=i.id,i.local&&(re.world=i.world,Jt.buildWorld(re.world)),i.on("snapshot",qM),i.on("events",KM)}function qM(i){re.lastSnap=i,re.myId=re.session.id,re.screen==="lobby"&&(YM(i),i.phase===$t.HUNT&&Oc())}function Oc(){re.world&&(re.player=LM(re.world,Jt.camera,Xn,{onSound:(i,e)=>{i==="step"&&Dt.step(e.running,e.crouch),i==="click"&&Dt.click()}}),re.running=!0,re.ended=!1,re.iAmDead=!1,Xn.enabled=!0,is("game"),Uc(),ft.toggleMap(!1),ft.say("Ocho balizas. Enciéndelas todas y sube a la torre. De día vas solo — a la tercera, cae la noche.",7),Xn.touch||Xn.requestLock())}function KM(i){for(const e of i)switch(ai.log(e.type,e),e.type){case"beacon":{Dt.pickup(),e.by===re.myId&&ji([14,40,14]);const t=Sn.beacons-e.count;ft.say(t>0?`${e.name} encendió la baliza de ${e.place}. Quedan ${t}.`:"Las ocho balizas están encendidas. A la torre del guardabosques.",5);break}case"radio":Dt.radio(),ft.say("Radio encendida. La extracción tarda noventa segundos. Aguantad.",6);break;case"roar":Dt.roar(e.x,0,e.z);break;case"down":Dt.scream(),ft.flashHit(),e.id===re.myId&&ji([50,60,120]),ft.say(e.id===re.myId?"Te han derribado.":`${e.name} está en el suelo.`,4);break;case"revived":ft.say(`${e.byName} levantó a ${e.name}.`,3.5);break;case"death":e.id===re.myId?(re.iAmDead=!0,ji([90,50,220]),e.cause==="alto"?(ft.triggerJumpscare(),Dt.jumpscare()):Dt.scream(),ft.say("Se acabó tu turno.",5)):ft.say(`${e.name} no lo consiguió.`,4);break;case"altoAppear":break;case"nightfall":Dt.nightfall(),ji([40,80,40,80,120]),ft.say("Cae la noche. Ya no estás solo en el coto.",6);break;case"gateOpen":Dt.gate(),ft.say("El portón está abierto. Corred.",6);break;case"escaped":e.id===re.myId?wh(!0,"escapaste"):ft.say(`${e.name} salió del coto.`,4);break;case"over":wh(e.phase===$t.ESCAPED,e.phase===$t.ESCAPED?"parcial":"wipe",e.escaped);break;case"join":re.screen==="lobby"&&ft.say(`${e.name} ha entrado.`,3);break}}function wh(i,e,t=0){re.ended||(ai.log("runEnd",{won:i,kind:e,escaped:t}),ai.send(),re.ended=!0,re.running=!1,Xn.enabled=!1,document.exitPointerLock?.(),Dt.stopAll(),lt.end.classList.toggle("won",i),e==="escapaste"?(lt.endStamp.textContent="Parte de incidencias · Salida registrada",lt.endTitle.textContent="Fuera del coto",lt.endText.textContent="Cruzaste el portón. El expediente 11-B se cierra con una firma más y ninguna explicación."):e==="parcial"?(lt.endStamp.textContent="Parte de incidencias · Salida parcial",lt.endTitle.textContent=`${t} de vuelta`,lt.endText.textContent="Alguien salió. Los demás siguen dentro y el coto vuelve a estar cerrado."):(lt.endStamp.textContent="Parte de incidencias · Sin novedad",lt.endTitle.textContent="Nadie volvió",lt.endText.textContent="Las balizas se apagaron solas antes del amanecer. Nadie ha vuelto a entrar a comprobarlo."),is("end"))}function ZM(i,e){const t=re.player.findInteractable(e,re.myId);if(ft.setUseReady(!!t.kind),t.kind==="revive"){const n=(e.players||[]).find(s=>s.id===t.index)?.rp||0;ft.setPrompt(t.label,"E",n/Zt.reviveTime),re.reviveAcc+=i,Xn.holdUse&&re.reviveAcc>=1/Sf&&(re.reviveAcc=0,re.session.send("revive",{id:t.index}))}else t.kind?ft.setPrompt(t.label,"E"):ft.setPrompt(null);for(const n of Xn.consumeActions())switch(n){case"light":re.player.toggleLight();break;case"jump":re.player.jump();break;case"map":ft.toggleMap();break;case"ping":re.session.send("ping"),Dt.click();break;case"use":t.kind==="beacon"?re.session.send("pickup",{index:t.index}):t.kind==="radio"&&re.session.send("radio");break}}function $M(i,e){return i?i.gateOpen?"Sal por el portón":i.phase===$t.EXTRACTION?"Aguanta hasta la extracción":e>=Sn.beacons?"Sube a la torre y pide extracción":`Balizas encendidas · ${e} de ${Sn.beacons}`:""}let Ah=performance.now();function Lf(i){requestAnimationFrame(Lf);const e=Math.min(.1,(i-Ah)/1e3);Ah=i,re.session?.update(e);const t=re.lastSnap;if(re.running&&re.player&&t){const n=(t.players||[]).find(c=>c.id===re.myId),s=n?.s==="down";re.player.frozen=s||re.iAmDead||ft.mapOpen,re.player.update(e,t),re.netAcc+=e,re.netAcc>=1/Sf&&(re.netAcc=0,re.session.send("in",re.player.netState())),re.telemetryAcc+=e,re.telemetryAcc>=20&&(re.telemetryAcc=0,ai.log("heartbeat",{x:+re.player.x.toFixed(1),z:+re.player.z.toFixed(1),sanity:+re.player.sanity.toFixed(2),dayPhase:t.dayPhase,state:n?.s})),!s&&!re.iAmDead?ZM(e,t):(Xn.consumeActions(),ft.setPrompt(null),ft.setUseReady(!1)),Jt.syncActors(t,re.myId,e),Jt.setDayPhase(t.dayPhase,e),Jt.setFlashlight(re.player.lightOn,re.player.lightFocus),Jt.updateHand(i*.001,re.player.bob,re.player.running),Jt.tickBeacons(i*.001),Jt.tickMist(i*.001),Jt.setFov(74+re.player.adrenaline*Sr.fovBonus);const r=re.player.forward();Dt.updateListener(re.player.x,re.player.y+re.player.eye,re.player.z,r.x,r.z),Dt.updateBeaconHums(re.world.beacons,t.beacons,re.player.x,re.player.z);const a=!!t.alto&&Math.hypot(t.alto.x-re.player.x,t.alto.z-re.player.z)<10&&!re.player.staring;a&&!re.altoWasNear&&(Dt.dreadPulse(),ji([30,40,30])),re.altoWasNear=a,Dt.updateTension({sanity:re.player.sanity,staring:re.player.staring,altoDist:re.player.altoDist??999,exhausted:re.player.exhausted,nearest:re.player.nearestBeast??999,adrenaline:re.player.adrenaline});const o=Math.max(re.player.sanity/100,re.player.adrenaline,re.player.nearestBeast<30?1-re.player.nearestBeast/30:0);re.heartAcc-=e,o>.12&&re.heartAcc<=0&&(re.heartAcc=Math.max(.24,1.25-o*1),Dt.heartbeat(o));const l=ft.setBeacons(t.beacons);ft.setObjective($M(t,l)),ft.setMeters(re.player.stamina,re.player.staminaCap,re.player.adrenaline),ft.setNoise(re.player.noiseLevel()),ft.setHidden(re.player.hidden),ft.setSquad(t.players,re.myId),ft.setDowned(s,n?.d??0,(t.players||[]).filter(c=>c.id!==re.myId&&c.s==="alive").length),ft.setTimer(t.phase===$t.EXTRACTION&&!t.gateOpen?t.extraction:null,"Extracción"),ft.drawMap(re.world,t,{x:re.player.x,z:re.player.z,fx:r.x,fz:r.z},re.myId),ft.drawFx(e,{sanity:re.player.sanity,staring:re.player.staring,adrenaline:re.player.adrenaline,downed:s}),Jt.render()}else if(re.screen==="lobby"&&re.world){const n=i*4e-5;Jt.camera.position.set(re.world.gate.x*.75+Math.cos(n)*16,re.world.gate.y+4,re.world.gate.z*.75+Math.sin(n)*16),Jt.camera.lookAt(re.world.gate.x,re.world.gate.y+2,re.world.gate.z),Jt.setFlashlight(!1,!1),Jt.tickBeacons(i*.001),Jt.render(),ft.drawFx(e,{})}else ft.drawFx(e,{})}async function JM(){const i=sM(t=>{lt.loadBarFill.style.width=`${Math.round(t*100)}%`});let e=null;try{e=await i.loadAll()}catch{lt.loadingLabel.textContent="No se pudo bajar todo — sigue igual."}Jt=AM(lt.scene,e),window.__coto=Object.assign(re,{view:Jt,hud:ft,audio:Dt,input:Xn,telemetry:ai}),XM(),WM(),Uc(),lt.loading.hidden=!0,is("boot"),requestAnimationFrame(Lf)}JM();window.addEventListener("pointerdown",()=>{Dt.start(),Dt.resume()},{once:!0});window.addEventListener("keydown",()=>{Dt.start(),Dt.resume()},{once:!0});
