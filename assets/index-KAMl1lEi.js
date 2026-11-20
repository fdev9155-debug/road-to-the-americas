(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Tc="180",Sd=0,il=1,Td=2,iu=1,su=2,Jn=3,ni=0,Jt=1,vn=2,_i=0,ds=1,sl=2,rl=3,al=4,wd=5,Ni=100,Ed=101,Ad=102,Rd=103,Cd=104,Pd=200,Ld=201,Id=202,Dd=203,So=204,To=205,kd=206,Nd=207,Ud=208,Fd=209,Od=210,Bd=211,zd=212,Vd=213,Hd=214,wo=0,Eo=1,Ao=2,ms=3,Ro=4,Co=5,Po=6,Lo=7,ru=0,Gd=1,Wd=2,vi=0,qd=1,Xd=2,Qd=3,au=4,Kd=5,Yd=6,$d=7,ol="attached",jd="detached",ou=300,gs=301,_s=302,Io=303,Do=304,ga=306,Mi=1e3,mi=1001,oa=1002,en=1003,cu=1004,Qs=1005,un=1006,Zr=1007,Bn=1008,Gn=1009,lu=1010,hu=1011,Js=1012,wc=1013,Hi=1014,Pn=1015,hr=1016,Ec=1017,Ac=1018,er=1020,uu=35902,du=35899,fu=1021,pu=1022,yn=1023,tr=1026,nr=1027,Rc=1028,Cc=1029,mu=1030,Pc=1031,Lc=1033,Jr=33776,ea=33777,ta=33778,na=33779,ko=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Vo=37808,Ho=37809,Go=37810,Wo=37811,qo=37812,Xo=37813,Qo=37814,Ko=37815,Yo=37816,$o=37817,jo=37818,Zo=37819,Jo=37820,ec=37821,tc=36492,nc=36494,ic=36495,sc=36283,rc=36284,ac=36285,oc=36286,ir=2300,sr=2301,Ea=2302,cl=2400,ll=2401,hl=2402,Zd=2500,Jd=0,gu=1,cc=2,ef=3200,tf=3201,_u=0,nf=1,pi="",wt="srgb",tn="srgb-linear",ca="linear",ft="srgb",Xi=7680,ul=519,sf=512,rf=513,af=514,vu=515,of=516,cf=517,lf=518,hf=519,lc=35044,Aa=35048,dl="300 es",zn=2e3,la=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Ys=Math.PI/180,vs=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Ic(i,e){return(i%e+e)%e}function uf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function df(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function ff(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function pf(i,e=1){return e-Math.abs(Ic(i,e*2)-e)}function mf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _f(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vf(i,e){return i+Math.random()*(e-i)}function yf(i){return i*(.5-Math.random())}function xf(i){i!==void 0&&(fl=i);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(i){return i*Ys}function bf(i){return i*vs}function Sf(i){return(i&i-1)===0&&i!==0}function Tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yi={DEG2RAD:Ys,RAD2DEG:vs,generateUUID:In,clamp:je,euclideanModulo:Ic,mapLinear:uf,inverseLerp:df,lerp:$s,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:vf,randFloatSpread:yf,seededRandom:xf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:Tf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Ef,normalize:ct,denormalize:An};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-o;const p=c*f+l*d+h*m+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),T=Math.atan2(S,p*x);g=Math.sin(g*T)/S,o=Math.sin(o*T)/S}const v=o*x;if(c=c*g+f*v,l=l*g+d*v,h=h*g+m*v,u=u*g+_*v,g===1-o){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-o*d,e[t+2]=l*m+h*d+o*f-c*u,e[t+3]=h*m-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new N,pl=new bt;class Xe{constructor(e,t,n,s,r,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],S=s[2],T=s[5],E=s[8];return r[0]=a*_+o*x+c*S,r[3]=a*g+o*M+c*T,r[6]=a*p+o*v+c*E,r[1]=l*_+h*x+u*S,r[4]=l*g+h*M+u*T,r[7]=l*p+h*v+u*E,r[2]=f*_+d*x+m*S,r[5]=f*g+d*M+m*T,r[8]=f*p+d*v+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Xe;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=rr("canvas");return i.style.display="block",i}const ml={};function ar(i){i in ml||(ml[i]=!0,console.warn(i))}function Rf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}const tt=Cf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class Pf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=rr("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lf=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let If=0;const La=new N;class Pt extends Ts{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=mi,s=mi,r=un,a=Bn,o=yn,c=Gn,l=Pt.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=In(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ou;Pt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(d+1)/2,S=(p+1)/2,T=(h+f)/4,E=(u+_)/4,C=(m+g)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),mr.subVectors(this.max,Ls),Ki.subVectors(e.a,Ls),Yi.subVectors(e.b,Ls),$i.subVectors(e.c,Ls),ri.subVectors(Yi,Ki),ai.subVectors($i,Yi),Ti.subVectors(Ki,$i);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!Ia(t,Ki,Yi,$i,mr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Ki,Yi,$i,mr))?!1:(gr.crossVectors(ri,ai),t=[gr.x,gr.y,gr.z],Ia(t,Ki,Yi,$i,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,pr=new si,Ki=new N,Yi=new N,$i=new N,ri=new N,ai=new N,Ti=new N,Ls=new N,mr=new N,gr=new N,wi=new N;function Ia(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Nf=new si,Is=new N,Da=new N;class qn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Da)),this.expandByPoint(Is.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new N,ka=new N,_r=new N,oi=new N,Na=new N,vr=new N,Ua=new N;class _a{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ka.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=oi.dot(this.direction),c=-oi.dot(_r),l=oi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ka).addScaledVector(_r,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Na.subVectors(t,e),vr.subVectors(n,e),Ua.crossVectors(Na,vr);let a=this.direction.dot(Ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const c=o*this.direction.dot(vr.crossVectors(oi,vr));if(c<0)return null;const l=o*this.direction.dot(Na.cross(oi));if(l<0||c+l>a)return null;const h=-o*oi.dot(Ua);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,m,_,g){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,m,_,g)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Ff)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ci.crossVectors(n,ln),ci.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ci.crossVectors(n,ln)),ci.normalize(),yr.crossVectors(ln,ci),s[0]=ci.x,s[4]=yr.x,s[8]=ln.x,s[1]=ci.y,s[5]=yr.y,s[9]=ln.y,s[2]=ci.z,s[6]=yr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],S=n[15],T=s[0],E=s[4],C=s[8],y=s[12],b=s[1],P=s[5],B=s[9],k=s[13],G=s[2],D=s[6],V=s[10],W=s[14],z=s[3],K=s[7],ee=s[11],le=s[15];return r[0]=a*T+o*b+c*G+l*z,r[4]=a*E+o*P+c*D+l*K,r[8]=a*C+o*B+c*V+l*ee,r[12]=a*y+o*k+c*W+l*le,r[1]=h*T+u*b+f*G+d*z,r[5]=h*E+u*P+f*D+d*K,r[9]=h*C+u*B+f*V+d*ee,r[13]=h*y+u*k+f*W+d*le,r[2]=m*T+_*b+g*G+p*z,r[6]=m*E+_*P+g*D+p*K,r[10]=m*C+_*B+g*V+p*ee,r[14]=m*y+_*k+g*W+p*le,r[3]=x*T+M*b+v*G+S*z,r[7]=x*E+M*P+v*D+S*K,r[11]=x*C+M*B+v*V+S*ee,r[15]=x*y+M*k+v*W+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+g*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=u*g*l-_*f*l+_*c*d-o*g*d-u*c*p+o*f*p,M=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,v=h*_*l-m*u*l+m*o*d-a*_*d-h*o*p+a*u*p,S=m*u*c-h*_*c-m*o*f+a*_*f+h*o*g-a*u*g,T=t*x+n*M+s*v+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=x*E,e[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*E,e[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*p+n*c*p)*E,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*E,e[4]=M*E,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*E,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*E,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*E,e[8]=v*E,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*E,e[10]=(a*_*r-m*o*r+m*n*l-t*_*l-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*E,e[12]=S*E,e[13]=(h*_*s-m*u*s+m*n*f-t*_*f-h*n*g+t*u*g)*E,e[14]=(m*o*s-a*_*s-m*n*c+t*_*c+a*n*g-t*o*g)*E,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,_=a*h,g=a*u,p=o*u,x=c*l,M=c*h,v=c*u,S=n.x,T=n.y,E=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+v)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+M)*E,s[9]=(g-x)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=zn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===zn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===la)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=zn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===zn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===la)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new N,Sn=new He,Uf=new N(0,0,0),Ff=new N(1,1,1),ci=new N,yr=new N,ln=new N,vl=new He,yl=new bt;class Wt{constructor(e=0,t=0,n=0,s=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const xl=new N,Zi=new bt,Kn=new He,xr=new N,Ds=new N,Bf=new N,zf=new bt,Ml=new N(1,0,0),bl=new N(0,1,0),Sl=new N(0,0,1),Tl={type:"added"},Vf={type:"removed"},Ji={type:"childadded",child:null},Fa={type:"childremoved",child:null};class vt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new Wt,n=new bt,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Xe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ds,xr,this.up):Kn.lookAt(xr,Ds,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new N,Yn=new N,Oa=new N,$n=new N,es=new N,ts=new N,wl=new N,Ba=new N,za=new N,Va=new N,Ha=new at,Ga=new at,Wa=new at;class Rn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Yn.subVectors(n,t),Oa.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Yn),c=Tn.dot(Oa),l=Yn.dot(Yn),h=Yn.dot(Oa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ha.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ha,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ts.subVectors(r,n),Ba.subVectors(e,n);const c=es.dot(Ba),l=ts.dot(Ba);if(c<=0&&l<=0)return t.copy(n);za.subVectors(e,s);const h=es.dot(za),u=ts.dot(za);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(es,a);Va.subVectors(e,r);const d=es.dot(Va),m=ts.dot(Va);if(m>=0&&d<=m)return t.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ts,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return wl.subVectors(r,s),o=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(wl,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Ic(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return tt.workingToColorSpace(Gt.copy(this),e),Math.round(je(Gt.r*255,0,255))*65536+Math.round(je(Gt.g*255,0,255))*256+Math.round(je(Gt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=wt){tt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Mr);const n=$s(li.h,Mr.h,t),s=$s(li.s,Mr.s,t),r=$s(li.l,Mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ze;ze.NAMES=bu;let Hf=0;class Hn extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=In(),this.name="",this.type="Material",this.blending=ds,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=To,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ln extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new N,br=new Qe;let Gf=0;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Su extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wf=0;const pn=new He,Xa=new vt,ns=new N,hn=new si,ks=new si,Dt=new N;class Vt extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Tu:Su)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(hn.min,ks.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,ks.max),hn.expandByPoint(Dt)):(hn.expandByPoint(ks.min),hn.expandByPoint(ks.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),Dt.add(ns)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new N,c[C]=new N;const l=new N,h=new N,u=new N,f=new Qe,d=new Qe,m=new Qe,_=new N,g=new N;function p(C,y,b){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[C].add(_),o[y].add(_),o[b].add(_),c[C].add(g),c[y].add(g),c[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,y=x.length;C<y;++C){const b=x[C],P=b.start,B=b.count;for(let k=P,G=P+B;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new N,v=new N,S=new N,T=new N;function E(C){S.fromBufferAttribute(s,C),T.copy(S);const y=o[C];M.copy(y),M.sub(S.multiplyScalar(S.dot(y))).normalize(),v.crossVectors(T,y);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,y=x.length;C<y;++C){const b=x[C],P=b.start,B=b.count;for(let k=P,G=P+B;k<G;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new He,Ei=new _a,Sr=new qn,Al=new N,Tr=new N,wr=new N,Er=new N,Qa=new N,Ar=new N,Rl=new N,Rr=new N;class ot extends vt{constructor(e=new Vt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Qa.fromBufferAttribute(u,e),a?Ar.addScaledVector(Qa,h):Ar.addScaledVector(Qa.sub(t),h))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Sr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Sr,Al)===null||Ei.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(El.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=M;v<S;v+=3){const T=o.getX(v),E=o.getX(v+1),C=o.getX(v+2);s=Cr(this,p,e,n,l,h,u,T,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);s=Cr(this,a,e,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=M;v<S;v+=3){const T=v,E=v+1,C=v+2;s=Cr(this,p,e,n,l,h,u,T,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=Cr(this,a,e,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function qf(i,e,t,n,s,r,a,o){let c;if(e.side===Jt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ni,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,wr),i.getVertexPosition(l,Er);const h=qf(i,e,t,n,Tr,wr,Er,Rl);if(h){const u=new N;Rn.getBarycoord(Rl,Tr,wr,Er,u),s&&(h.uv=Rn.getInterpolatedAttribute(s,o,c,l,u,new Qe)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,c,l,u,new Qe)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};Rn.getNormal(Tr,wr,Er,f.normal),h.face=f,h.barycoord=u}return h}class $t extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function m(_,g,p,x,M,v,S,T,E,C,y){const b=v/E,P=S/C,B=v/2,k=S/2,G=T/2,D=E+1,V=C+1;let W=0,z=0;const K=new N;for(let ee=0;ee<V;ee++){const le=ee*P-k;for(let me=0;me<D;me++){const _e=me*b-B;K[_]=_e*x,K[g]=le*M,K[p]=G,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(me/E),u.push(1-ee/C),W+=1}}for(let ee=0;ee<C;ee++)for(let le=0;le<E;le++){const me=f+le+D*ee,_e=f+le+D*(ee+1),Oe=f+(le+1)+D*(ee+1),ke=f+(le+1)+D*ee;c.push(me,_e,ke),c.push(_e,Oe,ke),z+=6}o.addGroup(d,z,y),d+=z,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const s in n)e[s]=n[s]}return e}function Xf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Eu={clone:ys,merge:Yt};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Au extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new N,Cl=new Qe,Pl=new Qe;class Zt extends Au{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Pl),t.subVectors(Pl,Cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class Yf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(is,ss,e,t);s.layers=this.layers,this.add(s);const r=new Zt(is,ss,e,t);r.layers=this.layers,this.add(r);const a=new Zt(is,ss,e,t);a.layers=this.layers,this.add(a);const o=new Zt(is,ss,e,t);o.layers=this.layers,this.add(o);const c=new Zt(is,ss,e,t);c.layers=this.layers,this.add(c);const l=new Zt(is,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ru extends Pt{constructor(e=[],t=gs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $f extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:_i});r.uniforms.tEquirect.value=t;const a=new ot(s,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=un),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class xn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ll extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new N;class Nc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Il=new N,Dl=new at,kl=new at,Jf=new N,Nl=new He,Pr=new N,Ya=new qn,Ul=new He,$a=new _a;class ep extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingSphere.expandByPoint(Pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(s),e.ray.intersectsSphere(Ya)!==!1&&(Ul.copy(s).invert(),$a.copy(e.ray).applyMatrix4(Ul),!(this.boundingBox!==null&&$a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$a)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Dl.fromBufferAttribute(s.attributes.skinIndex,e),kl.fromBufferAttribute(s.attributes.skinWeight,e),Il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=kl.getComponent(r);if(a!==0){const o=Dl.getComponent(r);Nl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jf.copy(Il).applyMatrix4(Nl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cu extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pu extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=en,h=en,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new He,tp=new He;class Uc{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:tp;Fl.multiplyMatrices(o,t[r]),Fl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Uc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pu(t,e,e,yn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Cu),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class hc extends mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new He,Ol=new He,Lr=[],Bl=new si,np=new He,Ns=new ot,Us=new qn;class En extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Bl.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Bl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Us.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),Ol.multiplyMatrices(n,rs),Ns.matrixWorld=Ol,Ns.raycast(e,Lr);for(let a=0,o=Lr.length;a<o;a++){const c=Lr[a];c.instanceId=r,c.object=this,t.push(c)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pu(new Float32Array(s*this.count),s,this.count,Rc,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ja=new N,ip=new N,sp=new Xe;class Di{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ja.subVectors(n,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sp.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new qn,rp=new Qe(.5,.5),Ir=new N;class Fc{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],x=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-a,d-h,p-m,S-x).normalize(),s[1].setComponents(l+a,d+h,p+m,S+x).normalize(),s[2].setComponents(l+o,d+u,p+_,S+M).normalize(),s[3].setComponents(l-o,d-u,p-_,S-M).normalize(),n)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,d-f,p-g,S-v).normalize();else if(s[4].setComponents(l-c,d-f,p-g,S-v).normalize(),t===zn)s[5].setComponents(l+c,d+f,p+g,S+v).normalize();else if(t===la)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=rp.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ha=new N,ua=new N,zl=new He,Fs=new _a,Dr=new qn,Za=new N,Vl=new N;class Oc extends vt{constructor(e=new Vt,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ha.fromBufferAttribute(t,s-1),ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;zl.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=l){const p=h.getX(_),x=h.getX(_+1),M=kr(this,e,Fs,c,p,x,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=kr(this,e,Fs,c,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=l){const p=kr(this,e,Fs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=kr(this,e,Fs,c,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),ua.fromBufferAttribute(o,r),t.distanceSqToSegment(ha,ua,Za,Vl)>n)return;Za.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Za);if(!(l<e.near||l>e.far))return{distance:l,point:Vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Hl=new N,Gl=new N;class ap extends Oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hl.fromBufferAttribute(t,s),Gl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hl.distanceTo(Gl);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class op extends Oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Iu extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wl=new He,uc=new _a,Nr=new qn,Ur=new N;class Du extends vt{constructor(e=new Vt,t=new Iu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Wl.copy(s).invert(),uc.copy(e.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const g=l.getX(m);Ur.fromBufferAttribute(u,g),ql(Ur,g,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Ur.fromBufferAttribute(u,m),ql(Ur,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ql(i,e,t,n,s,r,a){const o=uc.distanceSqToPoint(i);if(o<t){const c=new N;uc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ku extends Pt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nu extends Pt{constructor(e,t,n=Hi,s,r,a,o=en,c=en,l,h=tr,u=1){if(h!==tr&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bc extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new N,h=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class js extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function x(){const v=new N,S=new N;let T=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const y=[],b=C/r,P=b*(t-e)+e;for(let B=0;B<=s;B++){const k=B/s,G=k*c+o,D=Math.sin(G),V=Math.cos(G);S.x=P*D,S.y=-b*n+g,S.z=P*V,u.push(S.x,S.y,S.z),v.set(D,E,V).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-b),y.push(m++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const b=_[y][C],P=_[y+1][C],B=_[y+1][C+1],k=_[y][C+1];(e>0||y!==0)&&(h.push(b,P,k),T+=3),(t>0||y!==r-1)&&(h.push(P,B,k),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){const S=m,T=new Qe,E=new N;let C=0;const y=v===!0?e:t,b=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const P=m;for(let B=0;B<=s;B++){const G=B/s*c+o,D=Math.cos(G),V=Math.sin(G);E.x=y*V,E.y=g*b,E.z=y*D,u.push(E.x,E.y,E.z),f.push(0,b,0),T.x=D*.5+.5,T.y=V*.5*b+.5,d.push(T.x,T.y),m++}for(let B=0;B<s;B++){const k=S+B,G=P+B;v===!0?h.push(G,G+1,k):h.push(G+1,G,k),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new N,v=new N,S=new N;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],v),d(t[T+2],S),c(M,v,S,x)}function c(x,M,v,S){const T=S+1,E=[];for(let C=0;C<=T;C++){E[C]=[];const y=x.clone().lerp(v,C/T),b=M.clone().lerp(v,C/T),P=T-C;for(let B=0;B<=P;B++)B===0&&C===T?E[C][B]=y:E[C][B]=y.clone().lerp(b,B/P)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){const b=Math.floor(y/2);y%2===0?(f(E[C][b+1]),f(E[C+1][b]),f(E[C][b])):(f(E[C][b+1]),f(E[C+1][b+1]),f(E[C+1][b]))}}function l(x){const M=new N;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new N;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;a.push(v,1-S)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],S=a[x+4],T=Math.max(M,v,S),E=Math.min(M,v,S);T>.9&&E<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function m(){const x=new N,M=new N,v=new N,S=new N,T=new Qe,E=new Qe,C=new Qe;for(let y=0,b=0;y<r.length;y+=9,b+=6){x.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),T.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),S.copy(x).add(M).add(v).divideScalar(3);const P=g(S);_(T,b+0,x,P),_(E,b+2,M,P),_(C,b+4,v,P)}}function _(x,M,v,S){S<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.vertices,e.indices,e.radius,e.details)}}class Vc extends zc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class gi extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*f-a;for(let M=0;M<l;M++){const v=M*u-r;m.push(v,-x,0),_.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+l*p,v=x+l*(p+1),S=x+1+l*(p+1),T=x+1+l*p;d.push(M,v,T),d.push(v,S,T)}this.setIndex(d),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nt extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cp extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lp extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function up(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Fu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class ur{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dp extends ur{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ll:r=e,o=2*t-n;break;case hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ll:a=e,c=2*n-t;break;case hl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+x*a[l+S]+M*a[c+S]+v*a[u+S];return r}}class fp extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class pp extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&hp(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=sr;class ws extends kn{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ir;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends kn{constructor(e,t,n,s){super(e,t,n,s)}}Ou.prototype.ValueTypeName="color";class xs extends kn{constructor(e,t,n,s){super(e,t,n,s)}}xs.prototype.ValueTypeName="number";class mp extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)bt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ms extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new mp(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends kn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ir;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends kn{constructor(e,t,n,s){super(e,t,n,s)}}bs.prototype.ValueTypeName="vector";class gp{constructor(e="",t=-1,n=[],s=Zd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(vp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=up(c);c=Xl(c,1,h),l=Xl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const g=[],p=[];Fu(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const M=f[m];g.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new xs(".morphTargetInfluence["+_+"]",g,p))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(bs,d+".position",f,"pos",s),n(Ms,d+".quaternion",f,"rot",s),n(bs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _p(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return Ou;case"quaternion":return Ms;case"bool":case"boolean":return ws;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_p(i.type);if(i.times===void 0){const t=[],n=[];Fu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const xp=new yp;class As{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class Mp extends Error{constructor(e,t){super(e),this.response=t}}class Bu extends As{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=jn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let T=0,E=h.length;T<E;T++){const C=h[T];C.onProgress&&C.onProgress(S)}p.enqueue(v),x()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Mp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ei.add(`file:${e}`,l);const h=jn[e];delete jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class bp extends As{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=as.get(a);u===void 0&&(u=[],as.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=rr("img");function c(){h(),t&&t(this);const u=as.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ei.remove(`image:${e}`);const f=as.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zu extends As{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new bp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class va extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sp extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ja=new He,Ql=new N,Kl=new N;class Hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tp extends Hc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wp extends va{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yl=new He,Os=new N,eo=new N;class Ep extends Hc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl,n.coordinateSystem,n.reversedDepth)}}class Ap extends va{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gc extends Au{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rp extends Hc{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vu extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const to=new WeakMap;class Cp extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(to.has(a)===!0)s&&s(to.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),to.set(c,l),ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Pp extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wc="\\[\\]\\.:\\/",Lp=new RegExp("["+Wc+"]","g"),qc="[^"+Wc+"]",Ip="[^"+Wc.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",qc),kp=/(WCOD+)?/.source.replace("WCOD",Ip),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),Fp=new RegExp("^"+Dp+kp+Np+Up+"$"),Op=["material","materials","bones","map"];class Bp{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(e){const t=Fp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Op.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Bp;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function $l(i,e,t,n){const s=zp(n);switch(t){case fu:return i*e;case Rc:return i*e/s.components*s.byteLength;case Cc:return i*e/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case pu:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Lc:return i*e*4/s.components*s.byteLength;case Jr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:case Fo:return Math.max(i,16)*Math.max(e,8)/4;case ko:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ac:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(i){switch(i){case Gn:case lu:return{byteLength:1,components:1};case Js:case hu:case hr:return{byteLength:2,components:1};case Ec:case Ac:return{byteLength:2,components:4};case Hi:case wc:case Pn:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function Hu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vp(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Em=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Ym=`#define DISTANCE
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
}`,$m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
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
}`,hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:qp,alphatest_fragment:Xp,alphatest_pars_fragment:Qp,aomap_fragment:Kp,aomap_pars_fragment:Yp,batching_pars_vertex:$p,batching_vertex:jp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:c0,color_pars_vertex:l0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:y0,envmap_fragment:x0,envmap_common_pars_fragment:M0,envmap_pars_fragment:b0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:k0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:E0,fog_fragment:A0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:V0,lights_fragment_maps:H0,lights_fragment_end:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:Q0,map_fragment:K0,map_pars_fragment:Y0,map_particle_fragment:$0,map_particle_pars_fragment:j0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:cm,normal_vertex:lm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:ym,dithering_pars_fragment:xm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Tm,shadowmap_vertex:wm,shadowmask_pars_fragment:Em,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:km,transmission_fragment:Nm,transmission_pars_fragment:Um,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:zm,background_vert:Vm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:qm,cube_frag:Xm,depth_vert:Qm,depth_frag:Km,distanceRGBA_vert:Ym,distanceRGBA_frag:$m,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:cg,meshphong_vert:lg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:yg,sprite_frag:xg},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},On={basic:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Or={r:0,b:0,g:0},Ri=new Wt,Mg=new He;function bg(i,e,t,n,s,r,a){const o=new ze(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const S=m(M);S===null?p(o,c):S&&S.isColor&&(p(S,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===ga)?(h===void 0&&(h=new ot(new $t(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ys(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Ri)),h.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ot(new gi(2,2),new Wn({name:"BackgroundMaterial",uniforms:ys(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Or,wu(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:g,dispose:x}}function Sg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,P,B,k,G){let D=!1;const V=u(k,B,P);r!==V&&(r=V,l(r.object)),D=d(b,k,B,G),D&&m(b,k,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(b,P,B,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,B){const k=B.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let D=G[P.id];D===void 0&&(D={},G[P.id]=D);let V=D[k];return V===void 0&&(V=f(c()),D[k]=V),V}function f(b){const P=[],B=[],k=[];for(let G=0;G<t;G++)P[G]=0,B[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,P,B,k){const G=r.attributes,D=P.attributes;let V=0;const W=B.getAttributes();for(const z in W)if(W[z].location>=0){const ee=G[z];let le=D[z];if(le===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function m(b,P,B,k){const G={},D=P.attributes;let V=0;const W=B.getAttributes();for(const z in W)if(W[z].location>=0){let ee=D[z];ee===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),G[z]=le,V++}r.attributes=G,r.attributesNum=V,r.index=k}function _(){const b=r.newAttributes;for(let P=0,B=b.length;P<B;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){const B=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),G[b]!==P&&(i.vertexAttribDivisor(b,P),G[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let B=0,k=P.length;B<k;B++)P[B]!==b[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function M(b,P,B,k,G,D,V){V===!0?i.vertexAttribIPointer(b,P,B,G,D):i.vertexAttribPointer(b,P,B,k,G,D)}function v(b,P,B,k){_();const G=k.attributes,D=B.getAttributes(),V=P.defaultAttributeValues;for(const W in D){const z=D[W];if(z.location>=0){let K=G[W];if(K===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const ee=K.normalized,le=K.itemSize,me=e.get(K);if(me===void 0)continue;const _e=me.buffer,Oe=me.type,ke=me.bytesPerElement,te=Oe===i.INT||Oe===i.UNSIGNED_INT||K.gpuType===wc;if(K.isInterleavedBufferAttribute){const ae=K.data,ve=ae.stride,Ne=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)p(z.location+Ae,ae.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)g(z.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ae=0;Ae<z.locationSize;Ae++)M(z.location+Ae,le/z.locationSize,Oe,ee,ve*ke,(Ne+le/z.locationSize*Ae)*ke,te)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,K.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<z.locationSize;ae++)g(z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ae=0;ae<z.locationSize;ae++)M(z.location+ae,le/z.locationSize,Oe,ee,le*ke,le/z.locationSize*ae*ke,te)}}else if(V!==void 0){const ee=V[W];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(z.location,ee);break;case 3:i.vertexAttrib3fv(z.location,ee);break;case 4:i.vertexAttrib4fv(z.location,ee);break;default:i.vertexAttrib1fv(z.location,ee)}}}}x()}function S(){C();for(const b in n){const P=n[b];for(const B in P){const k=P[B];for(const G in k)h(k[G].object),delete k[G];delete P[B]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const B in P){const k=P[B];for(const G in k)h(k[G].object),delete k[G];delete P[B]}delete n[b.id]}function E(b){for(const P in n){const B=n[P];if(B[b.id]===void 0)continue;const k=B[b.id];for(const G in k)h(k[G].object),delete k[G];delete B[b.id]}}function C(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Tg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function wg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Pn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:T}}function Eg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Di,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=h(m,f,M,d);for(let S=0;S!==M;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ag(i){let e=new WeakMap;function t(a,o){return o===Io?a.mapping=gs:o===Do&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Do)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $f(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const us=4,jl=[.125,.215,.35,.446,.526,.582],Ui=20,no=new Gc,Zl=new ze;let io=null,so=0,ro=0,ao=!1;const ki=(1+Math.sqrt(5))/2,os=1/ki,Jl=[new N(-ki,os,0),new N(ki,os,0),new N(-os,0,ki),new N(os,0,ki),new N(0,ki,-os),new N(0,ki,os),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Rg=new N;class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Rg}=r;io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=ao,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:hr,format:yn,colorSpace:tn,depthBuffer:!1},s=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,s,r){const c=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Zl),u.toneMapping=vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Ln({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new ot(new $t,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(Zl),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;Br(s,v*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,no)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jl[(s-r-1)%Jl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ui;g>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);const p=[];let x=0;for(let E=0;E<Ui;++E){const C=E/_,y=Math.exp(-C*C/2);p.push(y),E===0?x+=y:E<g&&(x+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const v=this._sizeLods[s],S=3*v*(s>M-us?s-M+us:0),T=4*(this._cubeSize-v);Br(t,S,T,3*v,2*v),c.setRenderTarget(t),c.render(u,no)}}function Cg(i){const e=[],t=[],n=[];let s=i;const r=i-us+1+jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-us?c=jl[a-i+us-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),M=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(y,_*m*T),M.set(f,g*m*T);const b=[T,T,T,T,T,T];v.set(b,p*m*T)}const S=new Vt;S.setAttribute("position",new mt(x,_)),S.setAttribute("uv",new mt(M,g)),S.setAttribute("faceIndex",new mt(v,p)),e.push(S),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){const n=new Float32Array(Ui),s=new N(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function th(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function Lg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Io||c===Do,h=c===gs||c===_s;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new dc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new dc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ig(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let M=0,v=x.length;M<v;M+=3){const S=x[M+0],T=x[M+1],E=x[M+2];f.push(S,T,T,E,E,S)}}else if(m!==void 0){const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const S=M+0,T=M+1,E=M+2;f.push(S,T,T,E,E,S)}}else return;const g=new(yu(f)?Tu:Su)(f,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function kg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ng(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ug(i,e,t){const n=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let S=o.attributes.position.count*v,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*T*4*u),C=new xu(E,S,T,u);C.type=Pn,C.needsUpdate=!0;const y=v*4;for(let P=0;P<u;P++){const B=p[P],k=x[P],G=M[P],D=S*T*4*P;for(let V=0;V<B.count;V++){const W=V*y;m===!0&&(s.fromBufferAttribute(B,V),E[D+W+0]=s.x,E[D+W+1]=s.y,E[D+W+2]=s.z,E[D+W+3]=0),_===!0&&(s.fromBufferAttribute(k,V),E[D+W+4]=s.x,E[D+W+5]=s.y,E[D+W+6]=s.z,E[D+W+7]=0),g===!0&&(s.fromBufferAttribute(G,V),E[D+W+8]=s.x,E[D+W+9]=s.y,E[D+W+10]=s.z,E[D+W+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Qe(S,T)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Gu=new Pt,ih=new Nu(1,1),Wu=new xu,qu=new kf,Xu=new Ru,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),ch=new Float32Array(4);function Rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),It(t,n)}}function Gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),It(t,n)}}function Wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),It(t,n)}}function qg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=vu,r=ih):r=Gu,t.setTexture2D(e||r,s)}function e1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qu,s)}function t1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xu,s)}function n1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wu,s)}function i1(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Vg;case 35674:return Hg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return qg;case 35667:case 35671:return Xg;case 35668:case 35672:return Qg;case 35669:case 35673:return Kg;case 5125:return Yg;case 36294:return $g;case 36295:return jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function s1(i,e){i.uniform1fv(this.addr,e)}function r1(i,e){const t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function a1(i,e){const t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function o1(i,e){const t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function c1(i,e){const t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l1(i,e){const t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h1(i,e){const t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u1(i,e){i.uniform1iv(this.addr,e)}function d1(i,e){i.uniform2iv(this.addr,e)}function f1(i,e){i.uniform3iv(this.addr,e)}function p1(i,e){i.uniform4iv(this.addr,e)}function m1(i,e){i.uniform1uiv(this.addr,e)}function g1(i,e){i.uniform2uiv(this.addr,e)}function _1(i,e){i.uniform3uiv(this.addr,e)}function v1(i,e){i.uniform4uiv(this.addr,e)}function y1(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gu,r[a])}function x1(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qu,r[a])}function M1(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xu,r[a])}function b1(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wu,r[a])}function S1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return a1;case 35666:return o1;case 35674:return c1;case 35675:return l1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return b1}}class T1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class w1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S1(t.type)}}class E1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function lh(i,e){i.seq.push(e),i.map[e.id]=e}function A1(i,e,t){const n=i.name,s=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),a=oo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lh(t,l===void 0?new T1(o,i,e):new w1(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new E1(o),lh(t,u)),t=u}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);A1(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function hh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R1=37297;let C1=0;function P1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uh=new Xe;function L1(i){tt._getMatrix(uh,tt.workingColorSpace,i);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+P1(i.getShaderSource(e),o)}else return r}function I1(i,e){const t=L1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D1(i,e){let t;switch(e){case qd:t="Linear";break;case Xd:t="Reinhard";break;case Qd:t="Cineon";break;case au:t="ACESFilmic";break;case Yd:t="AgX";break;case $d:t="Neutral";break;case Kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new N;function k1(){tt.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function U1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ks(i){return i!==""}function fh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(O1,z1)}const B1=new Map;function z1(i,e){let t=Ke[e];if(t===void 0){const n=B1.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(V1,H1)}function H1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function G1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(e="ENVMAP_MODE_REFRACTION"),e}function X1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function Q1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K1(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=G1(t),l=W1(t),h=q1(t),u=X1(t),f=Q1(t),d=N1(t),m=U1(r),_=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==vi?D1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=fc(a),a=fh(a,t),a=ph(a,t),o=fc(o),o=fh(o,t),o=ph(o,t),a=mh(a),o=mh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+a,v=x+p+o,S=hh(s,s.VERTEX_SHADER,M),T=hh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(T)||"",D=B.trim(),V=k.trim(),W=G.trim();let z=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,T);else{const ee=dh(s,S,"vertex"),le=dh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+ee+`
`+le)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(V===""||W==="")&&(K=!1);K&&(P.diagnostics={runnable:z,programLog:D,vertexShader:{log:V,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(T),C=new ia(s,_),y=F1(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,R1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let Y1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j1(e),t.set(e,n)),n}}class j1{constructor(e){this.id=Y1++,this.code=e,this.usedTimes=0}}function Z1(i,e,t,n,s,r,a){const o=new Mu,c=new $1,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,b,P,B,k){const G=B.fog,D=k.geometry,V=y.isMeshStandardMaterial?B.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),z=W&&W.mapping===ga?W.image.height:null,K=m[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=ee!==void 0?ee.length:0;let me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let _e,Oe,ke,te;if(K){const et=On[K];_e=et.vertexShader,Oe=et.fragmentShader}else _e=y.vertexShader,Oe=y.fragmentShader,c.update(y),ke=c.getVertexShaderID(y),te=c.getFragmentShaderID(y);const ae=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,Ge=!!y.map,gt=!!y.matcap,U=!!W,nt=!!y.aoMap,Pe=!!y.lightMap,Se=!!y.bumpMap,be=!!y.normalMap,it=!!y.displacementMap,ye=!!y.emissiveMap,Ie=!!y.metalnessMap,ht=!!y.roughnessMap,ut=y.anisotropy>0,I=y.clearcoat>0,w=y.dispersion>0,R=y.iridescence>0,O=y.sheen>0,q=y.transmission>0,F=ut&&!!y.anisotropyMap,oe=I&&!!y.clearcoatMap,Y=I&&!!y.clearcoatNormalMap,ne=I&&!!y.clearcoatRoughnessMap,re=R&&!!y.iridescenceMap,Z=R&&!!y.iridescenceThicknessMap,se=O&&!!y.sheenColorMap,xe=O&&!!y.sheenRoughnessMap,Te=!!y.specularMap,fe=!!y.specularColorMap,qe=!!y.specularIntensityMap,H=q&&!!y.transmissionMap,ue=q&&!!y.thicknessMap,pe=!!y.gradientMap,we=!!y.alphaMap,he=y.alphaTest>0,ce=!!y.alphaHash,Re=!!y.extensions;let We=vi;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(We=i.toneMapping);const st={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:Oe,defines:y.defines,customVertexShaderID:ke,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tn,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:gt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:Pe,bumpMap:Se,normalMap:be,displacementMap:f&&it,emissiveMap:ye,normalMapObjectSpace:be&&y.normalMapType===nf,normalMapTangentSpace:be&&y.normalMapType===_u,metalnessMap:Ie,roughnessMap:ht,anisotropy:ut,anisotropyMap:F,clearcoat:I,clearcoatMap:oe,clearcoatNormalMap:Y,clearcoatRoughnessMap:ne,dispersion:w,iridescence:R,iridescenceMap:re,iridescenceThicknessMap:Z,sheen:O,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:Te,specularColorMap:fe,specularIntensityMap:qe,transmission:q,transmissionMap:H,thicknessMap:ue,gradientMap:pe,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:ce,combine:y.combine,mapUv:Ge&&_(y.map.channel),aoMapUv:nt&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:Se&&_(y.bumpMap.channel),normalMapUv:be&&_(y.normalMap.channel),displacementMapUv:it&&_(y.displacementMap.channel),emissiveMapUv:ye&&_(y.emissiveMap.channel),metalnessMapUv:Ie&&_(y.metalnessMap.channel),roughnessMapUv:ht&&_(y.roughnessMap.channel),anisotropyMapUv:F&&_(y.anisotropyMap.channel),clearcoatMapUv:oe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Y&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(y.sheenRoughnessMap.channel),specularMapUv:Te&&_(y.specularMap.channel),specularColorMapUv:fe&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:H&&_(y.transmissionMap.channel),thicknessMapUv:ue&&_(y.thicknessMap.channel),alphaMapUv:we&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(be||ut),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(Ge||we),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vn,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const b=m[y.type];let P;if(b){const B=On[b];P=Eu.clone(B.uniforms)}else P=y.uniforms;return P}function S(y,b){let P;for(let B=0,k=h.length;B<k;B++){const G=h[B];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new K1(i,b,y,r),h.push(P)),P}function T(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function E(y){c.remove(y)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:C}}function J1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function e9(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||e9),n.length>1&&n.sort(f||_h),s.length>1&&s.sort(f||_h)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function t9(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new vh,i.set(n,[a])):s>=r.length?(a=new vh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function i9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let s9=0;function r9(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a9(i){const e=new n9,t=i9(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new He,a=new He;function o(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,S=0,T=0,E=0;l.sort(r9);for(let y=0,b=l.length;y<b;y++){const P=l[y],B=P.color,k=P.intensity,G=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*k,u+=B.g*k,f+=B.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],k);E++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const W=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,W.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=W.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=D,v++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const W=P.shadow,z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=V,m++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=d,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=E,n.version=s9++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function yh(i){const e=new a9(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function o9(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new yh(i),e.set(s,[o])):r>=a.length?(o=new yh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const c9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l9=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h9(i,e,t){let n=new Fc;const s=new Qe,r=new Qe,a=new at,o=new cp({depthPacking:tf}),c=new lp,l={},h=t.maxTextureSize,u={[ni]:Jt,[Jt]:ni,[vn]:vn},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:c9,fragmentShader:l9}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(T,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(_i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==Jn&&this.type===Jn,G=p===Jn&&this.type!==Jn;for(let D=0,V=T.length;D<V;D++){const W=T[D],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();if(s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y)),z.map===null||k===!0||G===!0){const le=this.type!==Jn?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new Gi(s.x,s.y,le),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ee=z.getViewportCount();for(let le=0;le<ee;le++){const me=z.getViewport(le);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(a),z.updateMatrices(W,le),n=z.getFrustum(),v(E,C,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Jn&&x(z,C),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,b,P)};function x(T,E){const C=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,C,d,_,null)}function M(T,E,C,y){let b=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const B=b.uuid,k=E.uuid;let G=l[B];G===void 0&&(G={},l[B]=G);let D=G[k];D===void 0&&(D=b.clone(),G[k]=D,E.addEventListener("dispose",S)),b=D}if(b.visible=E.visible,b.wireframe=E.wireframe,y===Jn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=C}return b}function v(T,E,C,y,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const k=e.update(T),G=T.material;if(Array.isArray(G)){const D=k.groups;for(let V=0,W=D.length;V<W;V++){const z=D[V],K=G[z.materialIndex];if(K&&K.visible){const ee=M(T,K,y,b);T.onBeforeShadow(i,T,E,C,k,ee,z),i.renderBufferDirect(C,null,k,ee,T,z),T.onAfterShadow(i,T,E,C,k,ee,z)}}}else if(G.visible){const D=M(T,G,y,b);T.onBeforeShadow(i,T,E,C,k,D,null),i.renderBufferDirect(C,null,k,D,T,null),T.onAfterShadow(i,T,E,C,k,D,null)}}const B=T.children;for(let k=0,G=B.length;k<G;k++)v(B[k],E,C,y,b)}function S(T){T.target.removeEventListener("dispose",S);for(const C in l){const y=l[C],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const u9={[wo]:Eo,[Ao]:Po,[Ro]:Lo,[ms]:Co,[Eo]:wo,[Po]:Ao,[Lo]:Ro,[Co]:ms};function d9(i,e){function t(){let H=!1;const ue=new at;let pe=null;const we=new at(0,0,0,0);return{setMask:function(he){pe!==he&&!H&&(i.colorMask(he,he,he,he),pe=he)},setLocked:function(he){H=he},setClear:function(he,ce,Re,We,st){st===!0&&(he*=We,ce*=We,Re*=We),ue.set(he,ce,Re,We),we.equals(ue)===!1&&(i.clearColor(he,ce,Re,We),we.copy(ue))},reset:function(){H=!1,pe=null,we.set(-1,0,0,0)}}}function n(){let H=!1,ue=!1,pe=null,we=null,he=null;return{setReversed:function(ce){if(ue!==ce){const Re=e.get("EXT_clip_control");ce?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ce;const We=he;he=null,this.setClear(We)}},getReversed:function(){return ue},setTest:function(ce){ce?ae(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!H&&(i.depthMask(ce),pe=ce)},setFunc:function(ce){if(ue&&(ce=u9[ce]),we!==ce){switch(ce){case wo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ce}},setLocked:function(ce){H=ce},setClear:function(ce){he!==ce&&(ue&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){H=!1,pe=null,we=null,he=null,ue=!1}}}function s(){let H=!1,ue=null,pe=null,we=null,he=null,ce=null,Re=null,We=null,st=null;return{setTest:function(et){H||(et?ae(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(et){ue!==et&&!H&&(i.stencilMask(et),ue=et)},setFunc:function(et,an,nn){(pe!==et||we!==an||he!==nn)&&(i.stencilFunc(et,an,nn),pe=et,we=an,he=nn)},setOp:function(et,an,nn){(ce!==et||Re!==an||We!==nn)&&(i.stencilOp(et,an,nn),ce=et,Re=an,We=nn)},setLocked:function(et){H=et},setClear:function(et){st!==et&&(i.clearStencil(et),st=et)},reset:function(){H=!1,ue=null,pe=null,we=null,he=null,ce=null,Re=null,We=null,st=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,S=null,T=null,E=new ze(0,0,0),C=0,y=!1,b=null,P=null,B=null,k=null,G=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=W>=2);let K=null,ee={};const le=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),_e=new at().fromArray(le),Oe=new at().fromArray(me);function ke(H,ue,pe,we){const he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(H,ce),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<pe;Re++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ue+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}const te={};te[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(ms),Se(!1),be(il),ae(i.CULL_FACE),nt(_i);function ae(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ve(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ne(H,ue){return u[H]!==ue?(i.bindFramebuffer(H,ue),u[H]=ue,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ae(H,ue){let pe=d,we=!1;if(H){pe=f.get(ue),pe===void 0&&(pe=[],f.set(ue,pe));const he=H.textures;if(pe.length!==he.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Re=he.length;ce<Re;ce++)pe[ce]=i.COLOR_ATTACHMENT0+ce;pe.length=he.length,we=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,we=!0);we&&i.drawBuffers(pe)}function Ge(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const gt={[Ni]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};gt[Rd]=i.MIN,gt[Cd]=i.MAX;const U={[Pd]:i.ZERO,[Ld]:i.ONE,[Id]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(H,ue,pe,we,he,ce,Re,We,st,et){if(H===_i){_===!0&&(ve(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),H!==wd){if(H!==g||et!==y){if((p!==Ni||v!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,v=Ni),et)switch(H){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,M=null,S=null,T=null,E.set(0,0,0),C=0,g=H,y=et}return}he=he||ue,ce=ce||pe,Re=Re||we,(ue!==p||he!==v)&&(i.blendEquationSeparate(gt[ue],gt[he]),p=ue,v=he),(pe!==x||we!==M||ce!==S||Re!==T)&&(i.blendFuncSeparate(U[pe],U[we],U[ce],U[Re]),x=pe,M=we,S=ce,T=Re),(We.equals(E)===!1||st!==C)&&(i.blendColor(We.r,We.g,We.b,st),E.copy(We),C=st),g=H,y=!1}function Pe(H,ue){H.side===vn?ve(i.CULL_FACE):ae(i.CULL_FACE);let pe=H.side===Jt;ue&&(pe=!pe),Se(pe),H.blending===ds&&H.transparent===!1?nt(_i):nt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const we=H.stencilWrite;o.setTest(we),we&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(H){b!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),b=H)}function be(H){H!==Sd?(ae(i.CULL_FACE),H!==P&&(H===il?i.cullFace(i.BACK):H===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),P=H}function it(H){H!==B&&(V&&i.lineWidth(H),B=H)}function ye(H,ue,pe){H?(ae(i.POLYGON_OFFSET_FILL),(k!==ue||G!==pe)&&(i.polygonOffset(ue,pe),k=ue,G=pe)):ve(i.POLYGON_OFFSET_FILL)}function Ie(H){H?ae(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ht(H){H===void 0&&(H=i.TEXTURE0+D-1),K!==H&&(i.activeTexture(H),K=H)}function ut(H,ue,pe){pe===void 0&&(K===null?pe=i.TEXTURE0+D-1:pe=K);let we=ee[pe];we===void 0&&(we={type:void 0,texture:void 0},ee[pe]=we),(we.type!==H||we.texture!==ue)&&(K!==pe&&(i.activeTexture(pe),K=pe),i.bindTexture(H,ue||te[H]),we.type=H,we.texture=ue)}function I(){const H=ee[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(H){_e.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),_e.copy(H))}function xe(H){Oe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Oe.copy(H))}function Te(H,ue){let pe=l.get(ue);pe===void 0&&(pe=new WeakMap,l.set(ue,pe));let we=pe.get(H);we===void 0&&(we=i.getUniformBlockIndex(ue,H.name),pe.set(H,we))}function fe(H,ue){const we=l.get(ue).get(H);c.get(ue)!==we&&(i.uniformBlockBinding(ue,we,H.__bindingPointIndex),c.set(ue,we))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ee={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,S=null,T=null,E=new ze(0,0,0),C=0,y=!1,b=null,P=null,B=null,k=null,G=null,_e.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ve,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:Ge,setBlending:nt,setMaterial:Pe,setFlipSided:Se,setCullFace:be,setLineWidth:it,setPolygonOffset:ye,setScissorTest:Ie,activeTexture:ht,bindTexture:ut,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:R,texImage2D:re,texImage3D:Z,updateUBOMapping:Te,uniformBlockBinding:fe,texStorage2D:Y,texStorage3D:ne,texSubImage2D:O,texSubImage3D:q,compressedTexSubImage2D:F,compressedTexSubImage3D:oe,scissor:se,viewport:xe,reset:qe}}function f9(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return d?new OffscreenCanvas(I,w):rr("canvas")}function _(I,w,R){let O=1;const q=ut(I);if((q.width>R||q.height>R)&&(O=R/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const F=Math.floor(O*q.width),oe=Math.floor(O*q.height);u===void 0&&(u=m(F,oe));const Y=w?m(F,oe):u;return Y.width=F,Y.height=oe,Y.getContext("2d").drawImage(I,0,0,F,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+F+"x"+oe+")."),Y}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,w,R,O,q=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let F=w;if(w===i.RED&&(R===i.FLOAT&&(F=i.R32F),R===i.HALF_FLOAT&&(F=i.R16F),R===i.UNSIGNED_BYTE&&(F=i.R8)),w===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(F=i.R8UI),R===i.UNSIGNED_SHORT&&(F=i.R16UI),R===i.UNSIGNED_INT&&(F=i.R32UI),R===i.BYTE&&(F=i.R8I),R===i.SHORT&&(F=i.R16I),R===i.INT&&(F=i.R32I)),w===i.RG&&(R===i.FLOAT&&(F=i.RG32F),R===i.HALF_FLOAT&&(F=i.RG16F),R===i.UNSIGNED_BYTE&&(F=i.RG8)),w===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(F=i.RG8UI),R===i.UNSIGNED_SHORT&&(F=i.RG16UI),R===i.UNSIGNED_INT&&(F=i.RG32UI),R===i.BYTE&&(F=i.RG8I),R===i.SHORT&&(F=i.RG16I),R===i.INT&&(F=i.RG32I)),w===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(F=i.RGB8UI),R===i.UNSIGNED_SHORT&&(F=i.RGB16UI),R===i.UNSIGNED_INT&&(F=i.RGB32UI),R===i.BYTE&&(F=i.RGB8I),R===i.SHORT&&(F=i.RGB16I),R===i.INT&&(F=i.RGB32I)),w===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),R===i.UNSIGNED_INT&&(F=i.RGBA32UI),R===i.BYTE&&(F=i.RGBA8I),R===i.SHORT&&(F=i.RGBA16I),R===i.INT&&(F=i.RGBA32I)),w===i.RGB&&(R===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),w===i.RGBA){const oe=q?ca:tt.getTransfer(O);R===i.FLOAT&&(F=i.RGBA32F),R===i.HALF_FLOAT&&(F=i.RGBA16F),R===i.UNSIGNED_BYTE&&(F=oe===ft?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function v(I,w){let R;return I?w===null||w===Hi||w===er?R=i.DEPTH24_STENCIL8:w===Pn?R=i.DEPTH32F_STENCIL8:w===Js&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===er?R=i.DEPTH_COMPONENT24:w===Pn?R=i.DEPTH_COMPONENT32F:w===Js&&(R=i.DEPTH_COMPONENT16),R}function S(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),C(w),w.isVideoTexture&&h.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),b(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const R=I.source,O=f.get(R);if(O){const q=O[w.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(I),Object.keys(O).length===0&&f.delete(R)}n.remove(I)}function y(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const R=I.source,O=f.get(R);delete O[w.__cacheKey],a.memory.textures--}function b(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(w.__webglFramebuffer[O]))for(let q=0;q<w.__webglFramebuffer[O].length;q++)i.deleteFramebuffer(w.__webglFramebuffer[O][q]);else i.deleteFramebuffer(w.__webglFramebuffer[O]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[O])}else{if(Array.isArray(w.__webglFramebuffer))for(let O=0;O<w.__webglFramebuffer.length;O++)i.deleteFramebuffer(w.__webglFramebuffer[O]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let O=0;O<w.__webglColorRenderbuffer.length;O++)w.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[O]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const R=I.textures;for(let O=0,q=R.length;O<q;O++){const F=n.get(R[O]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(R[O])}n.remove(I)}let P=0;function B(){P=0}function k(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function G(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function D(I,w){const R=n.get(I);if(I.isVideoTexture&&Ie(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&R.__version!==I.version){const O=I.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(R,I,w);return}}else I.isExternalTexture&&(R.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+w)}function V(I,w){const R=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&R.__version!==I.version){te(R,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+w)}function W(I,w){const R=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&R.__version!==I.version){te(R,I,w);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+w)}function z(I,w){const R=n.get(I);if(I.version>0&&R.__version!==I.version){ae(R,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+w)}const K={[Mi]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},ee={[en]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},le={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[vu]:i.LEQUAL,[af]:i.EQUAL,[lf]:i.GEQUAL,[of]:i.GREATER,[cf]:i.NOTEQUAL};function me(I,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===Zr||w.magFilter===Qs||w.magFilter===Bn||w.minFilter===un||w.minFilter===Zr||w.minFilter===Qs||w.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ee[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==Qs&&w.minFilter!==Bn||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _e(I,w){let R=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const O=w.source;let q=f.get(O);q===void 0&&(q={},f.set(O,q));const F=G(w);if(F!==I.__cacheKey){q[F]===void 0&&(q[F]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),q[F].usedTimes++;const oe=q[I.__cacheKey];oe!==void 0&&(q[I.__cacheKey].usedTimes--,oe.usedTimes===0&&y(w)),I.__cacheKey=F,I.__webglTexture=q[F].texture}return R}function Oe(I,w,R){return Math.floor(Math.floor(I/R)/w)}function ke(I,w,R,O){const F=I.updateRanges;if(F.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,R,O,w.data);else{F.sort((Z,se)=>Z.start-se.start);let oe=0;for(let Z=1;Z<F.length;Z++){const se=F[oe],xe=F[Z],Te=se.start+se.count,fe=Oe(xe.start,w.width,4),qe=Oe(se.start,w.width,4);xe.start<=Te+1&&fe===qe&&Oe(xe.start+xe.count-1,w.width,4)===fe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++oe,F[oe]=xe)}F.length=oe+1;const Y=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Z=0,se=F.length;Z<se;Z++){const xe=F[Z],Te=Math.floor(xe.start/4),fe=Math.ceil(xe.count/4),qe=Te%w.width,H=Math.floor(Te/w.width),ue=fe,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,qe,H,ue,pe,R,O,w.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Y),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function te(I,w,R){let O=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(O=i.TEXTURE_3D);const q=_e(I,w),F=w.source;t.bindTexture(O,I.__webglTexture,i.TEXTURE0+R);const oe=n.get(F);if(F.version!==oe.__version||q===!0){t.activeTexture(i.TEXTURE0+R);const Y=tt.getPrimaries(tt.workingColorSpace),ne=w.colorSpace===pi?null:tt.getPrimaries(w.colorSpace),re=w.colorSpace===pi||Y===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Z=_(w.image,!1,s.maxTextureSize);Z=ht(w,Z);const se=r.convert(w.format,w.colorSpace),xe=r.convert(w.type);let Te=M(w.internalFormat,se,xe,w.colorSpace,w.isVideoTexture);me(O,w);let fe;const qe=w.mipmaps,H=w.isVideoTexture!==!0,ue=oe.__version===void 0||q===!0,pe=F.dataReady,we=S(w,Z);if(w.isDepthTexture)Te=v(w.format===nr,w.type),ue&&(H?t.texStorage2D(i.TEXTURE_2D,1,Te,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Te,Z.width,Z.height,0,se,xe,null));else if(w.isDataTexture)if(qe.length>0){H&&ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let he=0,ce=qe.length;he<ce;he++)fe=qe[he],H?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,se,xe,fe.data);w.generateMipmaps=!1}else H?(ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,Z.width,Z.height),pe&&ke(w,Z,se,xe)):t.texImage2D(i.TEXTURE_2D,0,Te,Z.width,Z.height,0,se,xe,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,qe[0].width,qe[0].height,Z.depth);for(let he=0,ce=qe.length;he<ce;he++)if(fe=qe[he],w.format!==yn)if(se!==null)if(H){if(pe)if(w.layerUpdates.size>0){const Re=$l(fe.width,fe.height,w.format,w.type);for(const We of w.layerUpdates){const st=fe.data.subarray(We*Re/fe.data.BYTES_PER_ELEMENT,(We+1)*Re/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,We,fe.width,fe.height,1,se,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,fe.width,fe.height,Z.depth,se,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,fe.width,fe.height,Z.depth,se,xe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,Z.depth,0,se,xe,fe.data)}else{H&&ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let he=0,ce=qe.length;he<ce;he++)fe=qe[he],w.format!==yn?se!==null?H?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,se,xe,fe.data)}else if(w.isDataArrayTexture)if(H){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,Z.width,Z.height,Z.depth),pe)if(w.layerUpdates.size>0){const he=$l(Z.width,Z.height,w.format,w.type);for(const ce of w.layerUpdates){const Re=Z.data.subarray(ce*he/Z.data.BYTES_PER_ELEMENT,(ce+1)*he/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Z.width,Z.height,1,se,xe,Re)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(w.isData3DTexture)H?(ue&&t.texStorage3D(i.TEXTURE_3D,we,Te,Z.width,Z.height,Z.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(w.isFramebufferTexture){if(ue)if(H)t.texStorage2D(i.TEXTURE_2D,we,Te,Z.width,Z.height);else{let he=Z.width,ce=Z.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,Te,he,ce,0,se,xe,null),he>>=1,ce>>=1}}else if(qe.length>0){if(H&&ue){const he=ut(qe[0]);t.texStorage2D(i.TEXTURE_2D,we,Te,he.width,he.height)}for(let he=0,ce=qe.length;he<ce;he++)fe=qe[he],H?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,se,xe,fe):t.texImage2D(i.TEXTURE_2D,he,Te,se,xe,fe);w.generateMipmaps=!1}else if(H){if(ue){const he=ut(Z);t.texStorage2D(i.TEXTURE_2D,we,Te,he.width,he.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,xe,Z)}else t.texImage2D(i.TEXTURE_2D,0,Te,se,xe,Z);g(w)&&p(O),oe.__version=F.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ae(I,w,R){if(w.image.length!==6)return;const O=_e(I,w),q=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+R);const F=n.get(q);if(q.version!==F.__version||O===!0){t.activeTexture(i.TEXTURE0+R);const oe=tt.getPrimaries(tt.workingColorSpace),Y=w.colorSpace===pi?null:tt.getPrimaries(w.colorSpace),ne=w.colorSpace===pi||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,Z=w.image[0]&&w.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!re&&!Z?se[ce]=_(w.image[ce],!0,s.maxCubemapSize):se[ce]=Z?w.image[ce].image:w.image[ce],se[ce]=ht(w,se[ce]);const xe=se[0],Te=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),qe=M(w.internalFormat,Te,fe,w.colorSpace),H=w.isVideoTexture!==!0,ue=F.__version===void 0||O===!0,pe=q.dataReady;let we=S(w,xe);me(i.TEXTURE_CUBE_MAP,w);let he;if(re){H&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,qe,xe.width,xe.height);for(let ce=0;ce<6;ce++){he=se[ce].mipmaps;for(let Re=0;Re<he.length;Re++){const We=he[Re];w.format!==yn?Te!==null?H?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,We.width,We.height,Te,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,We.width,We.height,Te,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,qe,We.width,We.height,0,Te,fe,We.data)}}}else{if(he=w.mipmaps,H&&ue){he.length>0&&we++;const ce=ut(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Z){H?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,Te,fe,se[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,se[ce].width,se[ce].height,0,Te,fe,se[ce].data);for(let Re=0;Re<he.length;Re++){const st=he[Re].image[ce].image;H?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,st.width,st.height,Te,fe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,qe,st.width,st.height,0,Te,fe,st.data)}}else{H?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te,fe,se[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Te,fe,se[ce]);for(let Re=0;Re<he.length;Re++){const We=he[Re];H?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,Te,fe,We.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,qe,Te,fe,We.image[ce])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),F.__version=q.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ve(I,w,R,O,q,F){const oe=r.convert(R.format,R.colorSpace),Y=r.convert(R.type),ne=M(R.internalFormat,oe,Y,R.colorSpace),re=n.get(w),Z=n.get(R);if(Z.__renderTarget=w,!re.__hasExternalTextures){const se=Math.max(1,w.width>>F),xe=Math.max(1,w.height>>F);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,F,ne,se,xe,w.depth,0,oe,Y,null):t.texImage2D(q,F,ne,se,xe,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,q,Z.__webglTexture,0,it(w)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,q,Z.__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,w,R){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const O=w.depthTexture,q=O&&O.isDepthTexture?O.type:null,F=v(w.stencilBuffer,q),oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=it(w);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,F,w.width,w.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,F,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,F,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,I)}else{const O=w.textures;for(let q=0;q<O.length;q++){const F=O[q],oe=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),ne=M(F.internalFormat,oe,Y,F.colorSpace),re=it(w);R&&ye(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ne,w.width,w.height):ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=n.get(w.depthTexture);O.__renderTarget=w,(!O.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const q=O.__webglTexture,F=it(w);if(w.depthTexture.format===tr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(w.depthTexture.format===nr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ge(I){const w=n.get(I),R=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const O=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),O){const q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),w.__depthDisposeCallback=q}w.__boundDepthTexture=O}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");const O=I.texture.mipmaps;O&&O.length>0?Ae(w.__webglFramebuffer[0],I):Ae(w.__webglFramebuffer,I)}else if(R){w.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[O]),w.__webglDepthbuffer[O]===void 0)w.__webglDepthbuffer[O]=i.createRenderbuffer(),Ne(w.__webglDepthbuffer[O],I,!1);else{const q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=w.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,F)}}else{const O=I.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ne(w.__webglDepthbuffer,I,!1);else{const q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,F)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,w,R){const O=n.get(I);w!==void 0&&ve(O.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&Ge(I)}function U(I){const w=I.texture,R=n.get(I),O=n.get(w);I.addEventListener("dispose",E);const q=I.textures,F=I.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=w.version,a.memory.textures++),F){R.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(w.mipmaps&&w.mipmaps.length>0){R.__webglFramebuffer[Y]=[];for(let ne=0;ne<w.mipmaps.length;ne++)R.__webglFramebuffer[Y][ne]=i.createFramebuffer()}else R.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){R.__webglFramebuffer=[];for(let Y=0;Y<w.mipmaps.length;Y++)R.__webglFramebuffer[Y]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,ne=q.length;Y<ne;Y++){const re=n.get(q[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const ne=q[Y];R.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[Y]);const re=r.convert(ne.format,ne.colorSpace),Z=r.convert(ne.type),se=M(ne.internalFormat,re,Z,ne.colorSpace,I.isXRRenderTarget===!0),xe=it(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,se,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,R.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(R.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),me(i.TEXTURE_CUBE_MAP,w);for(let Y=0;Y<6;Y++)if(w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(R.__webglFramebuffer[Y][ne],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else ve(R.__webglFramebuffer[Y],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,ne=q.length;Y<ne;Y++){const re=q[Y],Z=n.get(re);let se=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),me(se,re),ve(R.__webglFramebuffer,I,re,i.COLOR_ATTACHMENT0+Y,se,0),g(re)&&p(se)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Y=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,O.__webglTexture),me(Y,w),w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(R.__webglFramebuffer[ne],I,w,i.COLOR_ATTACHMENT0,Y,ne);else ve(R.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,Y,0);g(w)&&p(Y),t.unbindTexture()}I.depthBuffer&&Ge(I)}function nt(I){const w=I.textures;for(let R=0,O=w.length;R<O;R++){const q=w[R];if(g(q)){const F=x(I),oe=n.get(q).__webglTexture;t.bindTexture(F,oe),p(F),t.unbindTexture()}}}const Pe=[],Se=[];function be(I){if(I.samples>0){if(ye(I)===!1){const w=I.textures,R=I.width,O=I.height;let q=i.COLOR_BUFFER_BIT;const F=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(I),Y=w.length>1;if(Y)for(let re=0;re<w.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ne=I.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<w.length;re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Z=n.get(w[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,R,O,0,0,R,O,q,i.NEAREST),c===!0&&(Pe.length=0,Se.length=0,Pe.push(i.COLOR_ATTACHMENT0+re),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Pe.push(F),Se.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<w.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Z=n.get(w[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function it(I){return Math.min(s.maxSamples,I.samples)}function ye(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function ht(I,w){const R=I.colorSpace,O=I.format,q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||R!==tn&&R!==pi&&(tt.getTransfer(R)===ft?(O!==yn||q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),w}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=gt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ye}function p9(i,e){function t(n,s=pi){let r;const a=tt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return i.BYTE;if(n===hu)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===pu)return i.RGB;if(n===yn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===mu)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===Jr||n===ea||n===ta||n===na)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Ho||n===Go||n===Wo||n===qo||n===Xo||n===Qo||n===Ko||n===Yo||n===$o||n===jo||n===Zo||n===Jo||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const m9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g9=`
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

}`;class _9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:m9,fragmentShader:g9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v9 extends Ts{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new _9,p={},x=t.getContextAttributes();let M=null,v=null;const S=[],T=[],E=new Qe;let C=null;const y=new Zt;y.viewport=new at;const b=new Zt;b.viewport=new at;const P=[y,b],B=new Pp;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=S[te];return ae===void 0&&(ae=new Ka,S[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=S[te];return ae===void 0&&(ae=new Ka,S[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=S[te];return ae===void 0&&(ae=new Ka,S[te]=ae),ae.getHandSpace()};function D(te){const ae=T.indexOf(te.inputSource);if(ae===-1)return;const ve=S[ae];ve!==void 0&&(ve.update(te.inputSource,te.frame,l||a),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let te=0;te<S.length;te++){const ae=T[te];ae!==null&&(T[te]=null,S[te].disconnect(ae))}k=null,G=null,g.reset();for(const te in p)delete p[te];e.setRenderTarget(M),d=null,f=null,u=null,s=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ne=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?nr:tr,Ne=x.stencil?er:Hi);const Ge={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Gi(f.textureWidth,f.textureHeight,{format:yn,type:Gn,depthTexture:new Nu(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Gi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(te){for(let ae=0;ae<te.removed.length;ae++){const ve=te.removed[ae],Ne=T.indexOf(ve);Ne>=0&&(T[Ne]=null,S[Ne].disconnect(ve))}for(let ae=0;ae<te.added.length;ae++){const ve=te.added[ae];let Ne=T.indexOf(ve);if(Ne===-1){for(let Ge=0;Ge<S.length;Ge++)if(Ge>=T.length){T.push(ve),Ne=Ge;break}else if(T[Ge]===null){T[Ge]=ve,Ne=Ge;break}if(Ne===-1)break}const Ae=S[Ne];Ae&&Ae.connect(ve)}}const z=new N,K=new N;function ee(te,ae,ve){z.setFromMatrixPosition(ae.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const Ne=z.distanceTo(K),Ae=ae.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,gt=Ae[14]/(Ae[10]-1),U=Ae[14]/(Ae[10]+1),nt=(Ae[9]+1)/Ae[5],Pe=(Ae[9]-1)/Ae[5],Se=(Ae[8]-1)/Ae[0],be=(Ge[8]+1)/Ge[0],it=gt*Se,ye=gt*be,Ie=Ne/(-Se+be),ht=Ie*-Se;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ht),te.translateZ(Ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ut=gt+Ie,I=U+Ie,w=it-ht,R=ye+(Ne-ht),O=nt*U/I*ut,q=Pe*U/I*ut;te.projectionMatrix.makePerspective(w,R,O,q,ut,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ae=te.near,ve=te.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),B.near=b.near=y.near=ae,B.far=b.far=y.far=ve,(k!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,G=B.far),B.layers.mask=te.layers.mask|6,y.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Ne=te.parent,Ae=B.cameras;le(B,Ne);for(let Ge=0;Ge<Ae.length;Ge++)le(Ae[Ge],Ne);Ae.length===2?ee(B,y,b):B.projectionMatrix.copy(y.projectionMatrix),me(te,B,Ne)};function me(te,ae,ve){ve===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(te){return p[te]};let _e=null;function Oe(te,ae){if(h=ae.getViewerPose(l||a),m=ae,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ne=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let U=0;U<ve.length;U++){const nt=ve[U];let Pe=null;if(d!==null)Pe=d.getViewport(nt);else{const be=u.getViewSubImage(f,nt);Pe=be.viewport,U===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let Se=P[U];Se===void 0&&(Se=new Zt,Se.layers.enable(U),Se.viewport=new at,P[U]=Se),Se.matrix.fromArray(nt.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(nt.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),U===0&&(B.matrix.copy(Se.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(Se)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const U=u.getDepthInformation(ve[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<ve.length;U++){const nt=ve[U].camera;if(nt){let Pe=p[nt];Pe||(Pe=new Uu,p[nt]=Pe);const Se=u.getCameraImage(nt);Pe.sourceTexture=Se}}}}for(let ve=0;ve<S.length;ve++){const Ne=T[ve],Ae=S[ve];Ne!==null&&Ae!==void 0&&Ae.update(Ne,ae,l||a)}_e&&_e(te,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const ke=new Hu;ke.setAnimationLoop(Oe),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Ci=new Wt,y9=new He;function x9(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(y9.makeRotationFromEuler(Ci)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M9(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const S=M.program;n.updateUBOMapping(x,S);const T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const M=u();x.__bindingPointIndex=M;const v=i.createBuffer(),S=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],v=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=v.length;T<E;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,b=C.length;y<b;y++){const P=C[y];if(d(P,T,y,S)===!0){const B=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let D=0;D<k.length;D++){const V=k[D],W=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,v,S){const T=x.value,E=M+"_"+v;if(S[E]===void 0)return typeof T=="number"||typeof T=="boolean"?S[E]=T:S[E]=T.clone(),!0;{const C=S[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return S[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function m(x){const M=x.uniforms;let v=0;const S=16;for(let E=0,C=M.length;E<C;E++){const y=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,P=y.length;b<P;b++){const B=y[b],k=Array.isArray(B.value)?B.value:[B.value];for(let G=0,D=k.length;G<D;G++){const V=k[G],W=_(V),z=v%S,K=z%W.boundary,ee=z+K;v+=K,ee!==0&&S-ee<W.storage&&(v+=S-ee),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=W.storage}}}const T=v%S;return T>0&&(v+=S-T),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class b9{constructor(e={}){const{canvas:t=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=wt;let T=0,E=0,C=null,y=-1,b=null;const P=new at,B=new at;let k=null;const G=new ze(0);let D=0,V=t.width,W=t.height,z=1,K=null,ee=null;const le=new at(0,0,V,W),me=new at(0,0,V,W);let _e=!1;const Oe=new Fc;let ke=!1,te=!1;const ae=new He,ve=new N,Ne=new at,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function gt(){return C===null?z:1}let U=n;function nt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const X="webgl2";if(U=nt(X,A),U===null)throw nt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Pe,Se,be,it,ye,Ie,ht,ut,I,w,R,O,q,F,oe,Y,ne,re,Z,se,xe,Te,fe,qe;function H(){Pe=new Ig(U),Pe.init(),Te=new p9(U,Pe),Se=new wg(U,Pe,e,Te),be=new d9(U,Pe),Se.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),it=new Ng(U),ye=new J1,Ie=new f9(U,Pe,be,ye,Se,Te,it),ht=new Ag(v),ut=new Lg(v),I=new Vp(U),fe=new Sg(U,I),w=new Dg(U,I,it,fe),R=new Fg(U,w,I,it),Z=new Ug(U,Se,Ie),Y=new Eg(ye),O=new Z1(v,ht,ut,Pe,Se,fe,Y),q=new x9(v,ye),F=new t9,oe=new o9(Pe),re=new bg(v,ht,ut,be,R,d,c),ne=new h9(v,R,Se),qe=new M9(U,it,Se,be),se=new Tg(U,Pe,it),xe=new kg(U,Pe,it),it.programs=O.programs,v.capabilities=Se,v.extensions=Pe,v.properties=ye,v.renderLists=F,v.shadowMap=ne,v.state=be,v.info=it}H();const ue=new v9(v,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(V,W,!1))},this.getSize=function(A){return A.set(V,W)},this.setSize=function(A,X,$=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,W=X,t.width=Math.floor(A*z),t.height=Math.floor(X*z),$===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(A,X,$){V=A,W=X,z=$,t.width=Math.floor(A*$),t.height=Math.floor(X*$),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,$,j){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,$,j),be.viewport(P.copy(le).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,X,$,j){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,X,$,j),be.scissor(B.copy(me).multiplyScalar(z).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){be.setScissorTest(_e=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,$=!0){let j=0;if(A){let Q=!1;if(C!==null){const de=C.texture.format;Q=de===Lc||de===Pc||de===Cc}if(Q){const de=C.texture.type,Me=de===Gn||de===Hi||de===Js||de===er||de===Ec||de===Ac,Ce=re.getClearColor(),Ee=re.getClearAlpha(),Be=Ce.r,Ve=Ce.g,De=Ce.b;Me?(m[0]=Be,m[1]=Ve,m[2]=De,m[3]=Ee,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Be,_[1]=Ve,_[2]=De,_[3]=Ee,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}X&&(j|=U.DEPTH_BUFFER_BIT),$&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",he,!1),re.dispose(),F.dispose(),oe.dispose(),ye.dispose(),ht.dispose(),ut.dispose(),R.dispose(),fe.dispose(),qe.dispose(),O.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",nn),ue.removeEventListener("sessionend",jc),bi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=it.autoReset,X=ne.enabled,$=ne.autoUpdate,j=ne.needsUpdate,Q=ne.type;H(),it.autoReset=A,ne.enabled=X,ne.autoUpdate=$,ne.needsUpdate=j,ne.type=Q}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const X=A.target;X.removeEventListener("dispose",ce),Re(X)}function Re(A){We(A),ye.remove(A)}function We(A){const X=ye.get(A).programs;X!==void 0&&(X.forEach(function($){O.releaseProgram($)}),A.isShaderMaterial&&O.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,$,j,Q,de){X===null&&(X=Ae);const Me=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=_d(A,X,$,j,Q);be.setMaterial(j,Me);let Ee=$.index,Be=1;if(j.wireframe===!0){if(Ee=w.getWireframeAttribute($),Ee===void 0)return;Be=2}const Ve=$.drawRange,De=$.attributes.position;let Je=Ve.start*Be,dt=(Ve.start+Ve.count)*Be;de!==null&&(Je=Math.max(Je,de.start*Be),dt=Math.min(dt,(de.start+de.count)*Be)),Ee!==null?(Je=Math.max(Je,0),dt=Math.min(dt,Ee.count)):De!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,De.count));const St=dt-Je;if(St<0||St===1/0)return;fe.setup(Q,j,Ce,$,Ee);let _t,pt=se;if(Ee!==null&&(_t=I.get(Ee),pt=xe,pt.setIndex(_t)),Q.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*gt()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(Q.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),be.setLineWidth(Fe*gt()),Q.isLineSegments?pt.setMode(U.LINES):Q.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else Q.isPoints?pt.setMode(U.POINTS):Q.isSprite&&pt.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Fe=Q._multiDrawStarts,yt=Q._multiDrawCounts,rt=Q._multiDrawCount,on=Ee?I.get(Ee).bytesPerElement:1,qi=ye.get(j).currentProgram.getUniforms();for(let cn=0;cn<rt;cn++)qi.setValue(U,"_gl_DrawID",cn),pt.render(Fe[cn]/on,yt[cn])}else if(Q.isInstancedMesh)pt.renderInstances(Je,St,Q.count);else if($.isInstancedBufferGeometry){const Fe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,yt=Math.min($.instanceCount,Fe);pt.renderInstances(Je,St,yt)}else pt.render(Je,St)};function st(A,X,$){A.transparent===!0&&A.side===vn&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,fr(A,X,$),A.side=ni,A.needsUpdate=!0,fr(A,X,$),A.side=vn):fr(A,X,$)}this.compile=function(A,X,$=null){$===null&&($=A),p=oe.get($),p.init(X),M.push(p),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),A!==$&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();const j=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const de=Q.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ce=de[Me];st(Ce,$,Q),j.add(Ce)}else st(de,$,Q),j.add(de)}),p=M.pop(),j},this.compileAsync=function(A,X,$=null){const j=this.compile(A,X,$);return new Promise(Q=>{function de(){if(j.forEach(function(Me){ye.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){Q(A);return}setTimeout(de,10)}Pe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function an(A){et&&et(A)}function nn(){bi.stop()}function jc(){bi.start()}const bi=new Hu;bi.setAnimationLoop(an),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){et=A,ue.setAnimationLoop(A),A===null?bi.stop():bi.start()},ue.addEventListener("sessionstart",nn),ue.addEventListener("sessionend",jc),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,X,C),p=oe.get(A,M.length),p.init(X),M.push(p),ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Oe.setFromProjectionMatrix(ae,zn,X.reversedDepth),te=this.localClippingEnabled,ke=Y.init(this.clippingPlanes,te),g=F.get(A,x.length),g.init(),x.push(g),ue.enabled===!0&&ue.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Ta(de,X,-1/0,v.sortObjects)}Ta(A,X,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(K,ee),Ge=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ge&&re.addToRenderList(g,A),this.info.render.frame++,ke===!0&&Y.beginShadows();const $=p.state.shadowsArray;ne.render($,A,X),ke===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,Q=g.transmissive;if(p.setupLights(),X.isArrayCamera){const de=X.cameras;if(Q.length>0)for(let Me=0,Ce=de.length;Me<Ce;Me++){const Ee=de[Me];Jc(j,Q,A,Ee)}Ge&&re.render(A);for(let Me=0,Ce=de.length;Me<Ce;Me++){const Ee=de[Me];Zc(g,A,Ee,Ee.viewport)}}else Q.length>0&&Jc(j,Q,A,X),Ge&&re.render(A),Zc(g,A,X);C!==null&&E===0&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,X),fe.resetDefaultState(),y=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],ke===!0&&Y.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ta(A,X,$,j){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){j&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Me=R.update(A),Ce=A.material;Ce.visible&&g.push(A,Me,Ce,$,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Me=R.update(A),Ce=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ne.copy(Me.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Ce)){const Ee=Me.groups;for(let Be=0,Ve=Ee.length;Be<Ve;Be++){const De=Ee[Be],Je=Ce[De.materialIndex];Je&&Je.visible&&g.push(A,Me,Je,$,Ne.z,De)}}else Ce.visible&&g.push(A,Me,Ce,$,Ne.z,null)}}const de=A.children;for(let Me=0,Ce=de.length;Me<Ce;Me++)Ta(de[Me],X,$,j)}function Zc(A,X,$,j){const Q=A.opaque,de=A.transmissive,Me=A.transparent;p.setupLightsView($),ke===!0&&Y.setGlobalState(v.clippingPlanes,$),j&&be.viewport(P.copy(j)),Q.length>0&&dr(Q,X,$),de.length>0&&dr(de,X,$),Me.length>0&&dr(Me,X,$),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Jc(A,X,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Gi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?hr:Gn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const de=p.state.transmissionRenderTarget[j.id],Me=j.viewport||P;de.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Ee=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(G),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&re.render($);const Ve=v.toneMapping;v.toneMapping=vi;const De=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ke===!0&&Y.setGlobalState(v.clippingPlanes,j),dr(A,$,j),Ie.updateMultisampleRenderTarget(de),Ie.updateRenderTargetMipmap(de),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let dt=0,St=X.length;dt<St;dt++){const _t=X[dt],pt=_t.object,Fe=_t.geometry,yt=_t.material,rt=_t.group;if(yt.side===vn&&pt.layers.test(j.layers)){const on=yt.side;yt.side=Jt,yt.needsUpdate=!0,el(pt,$,j,Fe,yt,rt),yt.side=on,yt.needsUpdate=!0,Je=!0}}Je===!0&&(Ie.updateMultisampleRenderTarget(de),Ie.updateRenderTargetMipmap(de))}v.setRenderTarget(Ce,Ee,Be),v.setClearColor(G,D),De!==void 0&&(j.viewport=De),v.toneMapping=Ve}function dr(A,X,$){const j=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,de=A.length;Q<de;Q++){const Me=A[Q],Ce=Me.object,Ee=Me.geometry,Be=Me.group;let Ve=Me.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Ce.layers.test($.layers)&&el(Ce,X,$,Ee,Ve,Be)}}function el(A,X,$,j,Q,de){A.onBeforeRender(v,X,$,j,Q,de),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(v,X,$,j,A,de),Q.transparent===!0&&Q.side===vn&&Q.forceSinglePass===!1?(Q.side=Jt,Q.needsUpdate=!0,v.renderBufferDirect($,X,j,Q,A,de),Q.side=ni,Q.needsUpdate=!0,v.renderBufferDirect($,X,j,Q,A,de),Q.side=vn):v.renderBufferDirect($,X,j,Q,A,de),A.onAfterRender(v,X,$,j,Q,de)}function fr(A,X,$){X.isScene!==!0&&(X=Ae);const j=ye.get(A),Q=p.state.lights,de=p.state.shadowsArray,Me=Q.state.version,Ce=O.getParameters(A,Q.state,de,X,$),Ee=O.getProgramCacheKey(Ce);let Be=j.programs;j.environment=A.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(A.isMeshStandardMaterial?ut:ht).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",ce),Be=new Map,j.programs=Be);let Ve=Be.get(Ee);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===Me)return nl(A,Ce),Ve}else Ce.uniforms=O.getUniforms(A),A.onBeforeCompile(Ce,v),Ve=O.acquireProgram(Ce,Ee),Be.set(Ee,Ve),j.uniforms=Ce.uniforms;const De=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Y.uniform),nl(A,Ce),j.needsLights=yd(A),j.lightsStateVersion=Me,j.needsLights&&(De.ambientLightColor.value=Q.state.ambient,De.lightProbe.value=Q.state.probe,De.directionalLights.value=Q.state.directional,De.directionalLightShadows.value=Q.state.directionalShadow,De.spotLights.value=Q.state.spot,De.spotLightShadows.value=Q.state.spotShadow,De.rectAreaLights.value=Q.state.rectArea,De.ltc_1.value=Q.state.rectAreaLTC1,De.ltc_2.value=Q.state.rectAreaLTC2,De.pointLights.value=Q.state.point,De.pointLightShadows.value=Q.state.pointShadow,De.hemisphereLights.value=Q.state.hemi,De.directionalShadowMap.value=Q.state.directionalShadowMap,De.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,De.spotShadowMap.value=Q.state.spotShadowMap,De.spotLightMatrix.value=Q.state.spotLightMatrix,De.spotLightMap.value=Q.state.spotLightMap,De.pointShadowMap.value=Q.state.pointShadowMap,De.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function tl(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ia.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function nl(A,X){const $=ye.get(A);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function _d(A,X,$,j,Q){X.isScene!==!0&&(X=Ae),Ie.resetTextureUnits();const de=X.fog,Me=j.isMeshStandardMaterial?X.environment:null,Ce=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:tn,Ee=(j.isMeshStandardMaterial?ut:ht).get(j.envMap||Me),Be=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,dt=!!$.morphAttributes.color;let St=vi;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=v.toneMapping);const _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=_t!==void 0?_t.length:0,Fe=ye.get(j),yt=p.state.lights;if(ke===!0&&(te===!0||A!==b)){const Xt=A===b&&j.id===y;Y.setState(j,A,Xt)}let rt=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yt.state.version||Fe.outputColorSpace!==Ce||Q.isBatchedMesh&&Fe.batching===!1||!Q.isBatchedMesh&&Fe.batching===!0||Q.isBatchedMesh&&Fe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Fe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Q.isInstancedMesh&&Fe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Fe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Fe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Fe.instancingMorph===!1&&Q.morphTexture!==null||Fe.envMap!==Ee||j.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Y.numPlanes||Fe.numIntersection!==Y.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==Ve||Fe.morphTargets!==De||Fe.morphNormals!==Je||Fe.morphColors!==dt||Fe.toneMapping!==St||Fe.morphTargetsCount!==pt)&&(rt=!0):(rt=!0,Fe.__version=j.version);let on=Fe.currentProgram;rt===!0&&(on=fr(j,X,Q));let qi=!1,cn=!1,Ps=!1;const xt=on.getUniforms(),dn=Fe.uniforms;if(be.useProgram(on.program)&&(qi=!0,cn=!0,Ps=!0),j.id!==y&&(y=j.id,cn=!0),qi||b!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",A.projectionMatrix),xt.setValue(U,"viewMatrix",A.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(U,ve.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,cn=!0,Ps=!0)}if(Q.isSkinnedMesh){xt.setOptional(U,Q,"bindMatrix"),xt.setOptional(U,Q,"bindMatrixInverse");const Xt=Q.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),xt.setValue(U,"boneTexture",Xt.boneTexture,Ie))}Q.isBatchedMesh&&(xt.setOptional(U,Q,"batchingTexture"),xt.setValue(U,"batchingTexture",Q._matricesTexture,Ie),xt.setOptional(U,Q,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",Q._indirectTexture,Ie),xt.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",Q._colorsTexture,Ie));const fn=$.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Z.update(Q,$,on),(cn||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,xt.setValue(U,"receiveShadow",Q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dn.envMap.value=Ee,dn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(dn.envMapIntensity.value=X.environmentIntensity),cn&&(xt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&vd(dn,Ps),de&&j.fog===!0&&q.refreshFogUniforms(dn,de),q.refreshMaterialUniforms(dn,j,z,W,p.state.transmissionRenderTarget[A.id]),ia.upload(U,tl(Fe),dn,Ie)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ia.upload(U,tl(Fe),dn,Ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(U,"center",Q.center),xt.setValue(U,"modelViewMatrix",Q.modelViewMatrix),xt.setValue(U,"normalMatrix",Q.normalMatrix),xt.setValue(U,"modelMatrix",Q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Xt=j.uniformsGroups;for(let sn=0,wa=Xt.length;sn<wa;sn++){const Si=Xt[sn];qe.update(Si,on),qe.bind(Si,on)}}return on}function vd(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,X,$){const j=ye.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ye.get(A.texture).__webglTexture=X,ye.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const $=ye.get(A);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const xd=U.createFramebuffer();this.setRenderTarget=function(A,X=0,$=0){C=A,T=X,E=$;let j=!0,Q=null,de=!1,Me=!1;if(A){const Ee=ye.get(A);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)Ie.setupRenderTarget(A);else if(Ee.__hasExternalTextures)Ie.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Ee.__boundDepthTexture!==De){if(De!==null&&ye.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Ve=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?Q=Ve[X][$]:Q=Ve[X],de=!0):A.samples>0&&Ie.useMultisampledRTT(A)===!1?Q=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?Q=Ve[$]:Q=Ve,P.copy(A.viewport),B.copy(A.scissor),k=A.scissorTest}else P.copy(le).multiplyScalar(z).floor(),B.copy(me).multiplyScalar(z).floor(),k=_e;if($!==0&&(Q=xd),be.bindFramebuffer(U.FRAMEBUFFER,Q)&&j&&be.drawBuffers(A,Q),be.viewport(P),be.scissor(B),be.setScissorTest(k),de){const Ee=ye.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee.__webglTexture,$)}else if(Me){const Ee=X;for(let Be=0;Be<A.textures.length;Be++){const Ve=ye.get(A.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,$,Ee)}}else if(A!==null&&$!==0){const Ee=ye.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,$)}y=-1},this.readRenderTargetPixels=function(A,X,$,j,Q,de,Me,Ce=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){be.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Be=A.textures[Ce],Ve=Be.format,De=Be.type;if(!Se.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-j&&$>=0&&$<=A.height-Q&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,$,j,Q,Te.convert(Ve),Te.convert(De),de))}finally{const Be=C!==null?ye.get(C).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,$,j,Q,de,Me,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(X>=0&&X<=A.width-j&&$>=0&&$<=A.height-Q){be.bindFramebuffer(U.FRAMEBUFFER,Ee);const Be=A.textures[Ce],Ve=Be.format,De=Be.type;if(!Se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,$,j,Q,Te.convert(Ve),Te.convert(De),0);const dt=C!==null?ye.get(C).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,dt);const St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rf(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(Je),U.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,$=0){const j=Math.pow(2,-$),Q=Math.floor(A.image.width*j),de=Math.floor(A.image.height*j),Me=X!==null?X.x:0,Ce=X!==null?X.y:0;Ie.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Me,Ce,Q,de),be.unbindTexture()};const Md=U.createFramebuffer(),bd=U.createFramebuffer();this.copyTextureToTexture=function(A,X,$=null,j=null,Q=0,de=null){de===null&&(Q!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=Q,Q=0):de=0);let Me,Ce,Ee,Be,Ve,De,Je,dt,St;const _t=A.isCompressedTexture?A.mipmaps[de]:A.image;if($!==null)Me=$.max.x-$.min.x,Ce=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,Ve=$.min.y,De=$.isBox3?$.min.z:0;else{const fn=Math.pow(2,-Q);Me=Math.floor(_t.width*fn),Ce=Math.floor(_t.height*fn),A.isDataArrayTexture?Ee=_t.depth:A.isData3DTexture?Ee=Math.floor(_t.depth*fn):Ee=1,Be=0,Ve=0,De=0}j!==null?(Je=j.x,dt=j.y,St=j.z):(Je=0,dt=0,St=0);const pt=Te.convert(X.format),Fe=Te.convert(X.type);let yt;X.isData3DTexture?(Ie.setTexture3D(X,0),yt=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ie.setTexture2DArray(X,0),yt=U.TEXTURE_2D_ARRAY):(Ie.setTexture2D(X,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=U.getParameter(U.UNPACK_ROW_LENGTH),on=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qi=U.getParameter(U.UNPACK_SKIP_PIXELS),cn=U.getParameter(U.UNPACK_SKIP_ROWS),Ps=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const xt=A.isDataArrayTexture||A.isData3DTexture,dn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const fn=ye.get(A),Xt=ye.get(X),sn=ye.get(fn.__renderTarget),wa=ye.get(Xt.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,sn.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Si=0;Si<Ee;Si++)xt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.get(A).__webglTexture,Q,De+Si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.get(X).__webglTexture,de,St+Si)),U.blitFramebuffer(Be,Ve,Me,Ce,Je,dt,Me,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||ye.has(A)){const fn=ye.get(A),Xt=ye.get(X);be.bindFramebuffer(U.READ_FRAMEBUFFER,Md),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,bd);for(let sn=0;sn<Ee;sn++)xt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fn.__webglTexture,Q,De+sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fn.__webglTexture,Q),dn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,de,St+sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,de),Q!==0?U.blitFramebuffer(Be,Ve,Me,Ce,Je,dt,Me,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):dn?U.copyTexSubImage3D(yt,de,Je,dt,St+sn,Be,Ve,Me,Ce):U.copyTexSubImage2D(yt,de,Je,dt,Be,Ve,Me,Ce);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(yt,de,Je,dt,St,Me,Ce,Ee,pt,Fe,_t.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,de,Je,dt,St,Me,Ce,Ee,pt,_t.data):U.texSubImage3D(yt,de,Je,dt,St,Me,Ce,Ee,pt,Fe,_t):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,Je,dt,Me,Ce,pt,Fe,_t.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,Je,dt,_t.width,_t.height,pt,_t.data):U.texSubImage2D(U.TEXTURE_2D,de,Je,dt,Me,Ce,pt,Fe,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,on),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qi),U.pixelStorei(U.UNPACK_SKIP_ROWS,cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ps),de===0&&X.generateMipmaps&&U.generateMipmap(yt),be.unbindTexture()},this.initRenderTarget=function(A){ye.get(A).__webglFramebuffer===void 0&&Ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ie.setTextureCube(A,0):A.isData3DTexture?Ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ie.setTexture2DArray(A,0):Ie.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,be.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class or extends ot{constructor(){const e=or.SkyShader,t=new Wn({name:e.name,uniforms:Eu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Jt,depthWrite:!1});super(new $t(1,1,1),t),this.isSky=!0}}or.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const co={low:{dpr:1,shadow:0,msaa:!1,maxCars:10,crowd:2500,far:1500},medium:{dpr:1.25,shadow:1024,msaa:!0,maxCars:20,crowd:6e3,far:2400},high:{dpr:1.5,shadow:2048,msaa:!0,maxCars:40,crowd:12e3,far:3200},ultra:{dpr:2,shadow:4096,msaa:!0,maxCars:40,crowd:2e4,far:4e3}},xh={day:{elev:48,azim:215,turb:3,ray:1.1,mie:.004,g:.8,exposure:.62,sun:3.2,sunCol:16773596,hemiSky:12375807,hemiGround:7043658,hemi:.55,fog:12176870,fogD:18e-5,lamps:!1},sunset:{elev:4.5,azim:255,turb:6,ray:1.6,mie:.006,g:.85,exposure:.55,sun:2.6,sunCol:16751178,hemiSky:16751979,hemiGround:3815978,hemi:.42,fog:14719602,fogD:26e-5,lamps:!0},night:{elev:-9,azim:215,turb:1,ray:.2,mie:.001,g:.7,exposure:.5,sun:0,sunCol:9414911,hemiSky:2371930,hemiGround:724242,hemi:.5,fog:659488,fogD:32e-5,lamps:!0}};class S9{constructor(e,t={}){this.canvas=e,this.quality=t.quality||"high";const n=co[this.quality];this.renderer=new b9({canvas:e,antialias:n.msaa,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=wt,this.renderer.toneMapping=au,this.renderer.shadowMap.enabled=n.shadow>0,this.renderer.shadowMap.type=su,this.scene=new Ll,this.camera=new Zt(62,16/9,.3,n.far),this.sky=new or,this.sky.scale.setScalar(2e4),this.scene.add(this.sky),this.sunDir=new N,this.sun=new Vu(16777215,3),this.sun.castShadow=n.shadow>0,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new Sp(12375807,7043658,.5),this.scene.add(this.hemi),this.scene.fog=new kc(12176870,2e-4),this.pmrem=new dc(this.renderer),this.timeKey="day",this.envRT=null,this.setQuality(this.quality),this.resize(),this.setTime("day"),addEventListener("resize",()=>this.resize())}setQuality(e){const t=co[e]||co.high;if(this.quality=e,this.q=t,this.renderer.shadowMap.enabled=t.shadow>0,this.sun.castShadow=t.shadow>0,t.shadow){const n=this.sun.shadow;n.mapSize.set(t.shadow,t.shadow);const s=90;n.camera.left=-s,n.camera.right=s,n.camera.top=s,n.camera.bottom=-s,n.camera.near=10,n.camera.far=500,n.bias=-25e-5,n.normalBias=.35,n.map&&(n.map.dispose(),n.map=null)}this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.resize(),this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.camera.fov=this.camera.aspect<1?78:this.baseFov||62,this.camera.updateProjectionMatrix()}setTime(e,t="clear"){const n=xh[e]||xh.day;this.timeKey=e,this.weather=t;const s=this.sky.material.uniforms,r=t==="overcast"||t==="rain";s.turbidity.value=r?14:n.turb,s.rayleigh.value=r?.6:n.ray,s.mieCoefficient.value=r?.02:n.mie,s.mieDirectionalG.value=n.g;const a=yi.degToRad(90-n.elev),o=yi.degToRad(n.azim);this.sunDir.setFromSphericalCoords(1,a,o),s.sunPosition.value.copy(this.sunDir),this.sun.color.set(n.sunCol),this.sun.intensity=n.sun*(r?.35:1),e==="night"&&(this.sunDir.set(-.4,.8,.45).normalize(),this.sun.intensity=.9),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemi*(r?1.25:1),this.renderer.toneMappingExposure=n.exposure*(r?1.15:1),this.scene.fog.color.set(r?10134704:n.fog),this.scene.fog.density=n.fogD*(r?2.2:1),this.lampsOn=n.lamps,this.bakeEnv(),this.onTime&&this.onTime(e,t)}bakeEnv(){const e=new Ll,t=new or;t.scale.setScalar(2e4),e.add(t);for(const s of Object.keys(this.sky.material.uniforms))if(t.material.uniforms[s]&&this.sky.material.uniforms[s].value!==void 0){const r=this.sky.material.uniforms[s].value;t.material.uniforms[s].value=r.clone?r.clone():r}const n=this.envRT;this.envRT=this.pmrem.fromScene(e,0,1,5e4),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=this.timeKey==="night"?.25:.9,n&&n.dispose(),t.material.dispose(),t.geometry.dispose()}followSun(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,220),this.sun.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}const mn=yi.degToRad,Vr={halfW:11,apron:8,wallH:1.3,infieldLimit:70,bulge:0,lake:0},Ft={americas:{...Vr,id:"americas",short:"Americas",name:"Americas Superspeedway",kind:"Superspeedway",miles:2.5,straight:1e3,radius:300,bulge:34,maxBank:mn(30),frontBank:mn(7),backBank:mn(3),lake:1,standRows:1,laps:[3,5,8,12],crowdK:1,pit:{limit:29,stalls:43}},lonestar:{...Vr,id:"lonestar",short:"Lone Star",name:"Lone Star Motor Speedway",kind:"Intermediate tri-oval",miles:1.5,straight:450,radius:240,halfW:11,bulge:16,maxBank:mn(24),frontBank:mn(5),backBank:mn(4),lake:.7,standRows:.85,laps:[5,8,12,20],crowdK:.8,pit:{limit:25,stalls:36}},piedmont:{...Vr,id:"piedmont",short:"Piedmont",name:"Piedmont Mile",kind:"One-mile flat oval",miles:1,straight:340,radius:150,halfW:10.5,apron:7,maxBank:mn(12),frontBank:mn(4),backBank:mn(4),lake:.3,standRows:.7,laps:[8,12,18,28],crowdK:.65,pit:{limit:22,stalls:30}},thunder:{...Vr,id:"thunder",short:"Thunder Bowl",name:"Thunder Bowl",kind:"Short track bullring",miles:.53,straight:190,radius:80,halfW:9.5,apron:6,maxBank:mn(26),frontBank:mn(8),backBank:mn(8),lake:0,standRows:.55,laps:[15,25,40,60],crowdK:.5,infieldLimit:40,pit:{limit:18,stalls:22}}},T9=["americas","lonestar","piedmont","thunder"],Qu=Ft.americas;function Hr(i,e,t=!0){const n=i.length,s=new Float64Array(n),r=Math.ceil(e*3),a=[];let o=0;for(let c=-r;c<=r;c++){const l=Math.exp(-(c*c)/(2*e*e));a.push(l),o+=l}for(let c=0;c<n;c++){let l=0;for(let h=-r;h<=r;h++)l+=i[(c+h+n*8)%n]*a[h+r];s[c]=l/o}return s}function w9(i=Qu){const{straight:e,radius:t,bulge:n}=i,s=[],r=1,a=e/2,o=(D,V,W,z)=>{const K=Math.hypot(W-D,z-V),ee=Math.max(1,Math.round(K/r));for(let le=0;le<ee;le++)s.push([D+(W-D)*le/ee,V+(z-V)*le/ee])},c=(D,V,W,z)=>{const K=Math.abs(z-W)*t,ee=Math.max(2,Math.round(K/r));for(let le=0;le<ee;le++){const me=W+(z-W)*le/ee;s.push([D+t*Math.cos(me),V+t*Math.sin(me)])}};o(0,t,a,t),c(a,0,Math.PI/2,-Math.PI/2),o(a,-t,-a,-t),c(-a,0,-Math.PI/2,-3*Math.PI/2),o(-a,t,0,t);for(const D of s)if(D[1]>t-1&&Math.abs(D[0])<a){const V=(D[0]+a)/(2*a);D[1]+=n*Math.pow(Math.sin(Math.PI*V),2)}const l=s.length,h=Float64Array.from(s,D=>D[0]),u=Float64Array.from(s,D=>D[1]),f=yi.clamp(t*.23,17,70),d=Hr(h,f),m=Hr(u,f),_=new Float64Array(l+1);for(let D=0;D<l;D++){const V=(D+1)%l;_[D+1]=_[D]+Math.hypot(d[V]-d[D],m[V]-m[D])}const g=_[l],p=Math.round(g/3.8),x=g/p,M=new Float64Array(p),v=new Float64Array(p);let S=0;for(let D=0;D<p;D++){const V=D*x;for(;_[S+1]<V;)S++;const W=(V-_[S])/(_[S+1]-_[S]),z=(S+1)%l;M[D]=d[S]+(d[z]-d[S])*W,v[D]=m[S]+(m[z]-m[S])*W}const T=new Float64Array(p),E=new Float64Array(p),C=new Float64Array(p);for(let D=0;D<p;D++){const V=(D+p-1)%p,W=(D+1)%p,z=M[W]-M[V],K=v[W]-v[V],ee=Math.hypot(z,K);T[D]=z/ee,E[D]=K/ee}for(let D=0;D<p;D++){const V=(D+p-1)%p,W=(D+1)%p,z=T[V]*E[W]-E[V]*T[W];C[D]=-Math.asin(yi.clamp(z,-1,1))/(2*x)}const y=Hr(C,Math.max(2,Math.round(6*t/300))),b=.85/t,P=new Float64Array(p);for(let D=0;D<p;D++){const V=yi.clamp(y[D]/b,0,1),W=V*V*(3-2*V),K=(v[D]>t*.6?1:0)?i.frontBank:i.backBank;P[D]=K+(i.maxBank-K)*W}const B=Hr(P,Math.max(4,Math.round(22*t/300))),k=new Float64Array(p);for(let D=0;D<p;D++)k[D]=i.halfW*Math.sin(B[D]);const G=new Float64Array(p);for(let D=0;D<p;D++)G[D]=D*x;return{N:p,ds:x,length:g,px:M,pz:v,tx:T,tz:E,k:y,bank:B,yc:k,s:G,cfg:i}}class E9{constructor(e=Qu){this.cfg=e,this.id=e.id||"americas",this.name=e.name||"",this.d=w9(e),this.N=this.d.N,this.length=this.d.length,this.ds=this.d.ds}wrapS(e){const t=this.length;return(e%t+t)%t}idx(e){return Math.floor(this.wrapS(e)/this.ds)%this.N}at(e){const t=this.d,n=this.wrapS(e)/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,a=n-Math.floor(n),o=t.px[s]+(t.px[r]-t.px[s])*a,c=t.pz[s]+(t.pz[r]-t.pz[s])*a;let l=t.tx[s]+(t.tx[r]-t.tx[s])*a,h=t.tz[s]+(t.tz[r]-t.tz[s])*a;const u=Math.hypot(l,h);return l/=u,h/=u,{x:o,z:c,tx:l,tz:h,rx:-h,rz:l,bank:t.bank[s]+(t.bank[r]-t.bank[s])*a,yc:t.yc[s]+(t.yc[r]-t.yc[s])*a,k:t.k[s],i:s}}point(e,t,n={}){const s=this.at(e),r=this.cfg.halfW,a=Math.cos(s.bank),o=Math.sin(s.bank);return t>=-r?(n.x=s.x+s.rx*t*a,n.z=s.z+s.rz*t*a,n.y=s.yc+t*o):(n.x=s.x+s.rx*(-r*a+(t+r)),n.z=s.z+s.rz*(-r*a+(t+r)),n.y=0),n.heading=Math.atan2(s.tx,s.tz),n.bank=s.bank,n}query(e,t,n,s={}){const r=this.d,a=this.N;let o=1e18,c=n|0;const l=n===void 0?a:24;for(let C=-l;C<=l;C++){const y=((n|0)+C+a*4)%a,b=e-r.px[y],P=t-r.pz[y],B=b*b+P*P;B<o&&(o=B,c=y)}if(n!==void 0){if(o>2500)for(let C=0;C<a;C++){const y=e-r.px[C],b=t-r.pz[C],P=y*y+b*b;P<o&&(o=P,c=C)}}let h=c,u=(c+1)%a,f=r.px[u]-r.px[h],d=r.pz[u]-r.pz[h],m=((e-r.px[h])*f+(t-r.pz[h])*d)/(f*f+d*d);m<0&&(u=h,h=(c+a-1)%a,f=r.px[u]-r.px[h],d=r.pz[u]-r.pz[h],m=((e-r.px[h])*f+(t-r.pz[h])*d)/(f*f+d*d)),m=yi.clamp(m,0,1);const _=this.wrapS((h===a-1&&u===0?a-1+m:h+m)*this.ds),g=this.at(_),p=e-g.x,x=t-g.z,M=p*g.rx+x*g.rz,v=this.cfg.halfW,S=Math.cos(g.bank),T=Math.sin(g.bank),E=M>=-v*S?M/S:M+v*S-v;return s.i=c,s.s=_,s.u=E,s.lat=M,s.bank=g.bank,s.tx=g.tx,s.tz=g.tz,s.k=g.k,s.rx=g.rx,s.rz=g.rz,s.surface=E>v+.4?"wall":E>=-v?"track":E>=-v-this.cfg.apron?"apron":"grass",s.y=E>=-v?g.yc+Math.min(E,v+.4)*T:0,s}}function Pi(i,e,t={}){const{N:n}=i,{uvU:s=12,uvV:r=12,yOff:a=0,color:o=null,wrapUV:c=!0,sFrom:l=0,sTo:h=n,yFn:u=null,closed:f=!0}=t,d=e.length,m=h-l+(f&&l===0&&h===n?1:0),_=new Float32Array(d*m*3),g=new Float32Array(d*m*2),p=o?new Float32Array(d*m*3):null,x={};for(let S=0;S<m;S++){const T=l+S,E=T%n*i.ds+(T>=n?i.length:0);for(let C=0;C<d;C++){i.point(T%n*i.ds,e[C],x);const y=S*d+C;if(_[y*3]=x.x,_[y*3+1]=x.y+a+(u?u(e[C],T%n):0),_[y*3+2]=x.z,g[y*2]=e[C]/s,g[y*2+1]=T*i.ds/r,p){const b=o(e[C],T%n,E);p[y*3]=b[0],p[y*3+1]=b[1],p[y*3+2]=b[2]}}}const M=[];for(let S=0;S<m-1;S++)for(let T=0;T<d-1;T++){const E=S*d+T,C=E+1,y=(S+1)*d+T,b=y+1;M.push(E,C,y,C,b,y)}const v=new Vt;return v.setAttribute("position",new mt(_,3)),v.setAttribute("uv",new mt(g,2)),p&&v.setAttribute("color",new mt(p,3)),v.setIndex(M),v.computeVertexNormals(),v}const Le=(i,e,t)=>i<e?e:i>t?t:i,Zn=(i,e,t)=>i+(e-i)*t,sa=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function Qc(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const pc=["hood","roof","door","quarter","trunk","bumper"],ra={hood:"Hood",roof:"Roof",door:"Doors",quarter:"Rear quarters",trunk:"Trunk",bumper:"Front bumper"},cr=[{id:"dustyfork",name:"Dusty Fork Diner",tier:1,payout:120,slots:["door","quarter","bumper"],colors:["#f2b134","#7a2e1b"]},{id:"greaseline",name:"Greaseline Garage",tier:1,payout:140,slots:["door","trunk","bumper"],colors:["#e8e8e8","#d1342c"]},{id:"cornerbolt",name:"Corner Bolt Supply",tier:1,payout:150,slots:["quarter","door","trunk"],colors:["#2f6fdb","#f4f4f4"]},{id:"vantafuel",name:"Vanta Fuel",tier:2,payout:320,slots:["hood","door","trunk"],colors:["#13c28a","#0b2a24"]},{id:"halo",name:"Halo Energy",tier:2,payout:360,slots:["hood","roof","quarter"],colors:["#ffd400","#1a1a1a"]},{id:"ironbark",name:"Ironbark Tools",tier:2,payout:340,slots:["door","quarter","hood"],colors:["#e2552c","#222"]},{id:"meridian",name:"Meridian Mobile",tier:3,payout:720,slots:["hood","roof","door"],colors:["#00a3e0","#ffffff"]},{id:"stratus",name:"Stratus Air",tier:3,payout:760,slots:["hood","trunk","quarter"],colors:["#5b4bd6","#ffffff"]},{id:"kestrel",name:"Kestrel Tires",tier:3,payout:700,slots:["door","bumper","quarter"],colors:["#111","#ffcf1b"]},{id:"apexgrid",name:"Apex Grid Power",tier:4,payout:1500,slots:["hood","roof","door"],colors:["#ff2d55","#0d0d0d"]},{id:"northstar",name:"Northstar Motors",tier:4,payout:1600,slots:["hood","door","trunk"],colors:["#c0c6cc","#0a2a66"]}],Cs=i=>cr.find(e=>e.id===i)||null,A9={},R9=A9&&"./"||"./",C9=new zu;function cs(i,e=!0,t=!1,n=8){const s=C9.load(R9+"assets/tex/"+i);return e&&(s.wrapS=s.wrapT=Mi),s.anisotropy=n,t&&(s.colorSpace=wt),s}function Gr(i,e,t,n=!1,s=!0){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new ku(r);return n&&(a.wrapS=a.wrapT=Mi),s&&(a.colorSpace=wt),a.anisotropy=8,a}function P9(i,e,t=()=>{}){const n=new xn;n.name="track";const s=Qc(2026),r=i.cfg,a=r.halfW,o=i.N,c=8,l=r.straight/2,h=l+r.radius,u=r.radius+(r.bulge||0)*.5,f=i.length,d=Math.PI*r.radius,m=Math.max(.35,h/800),_=cs("asphalt_track_col.jpg",!0,!0,c),g=cs("asphalt_track_nrm.jpg",!0,!1,c),p=cs("asphalt_track_rgh.jpg",!0,!1,c),x=new Nt({map:_,normalMap:g,roughnessMap:p,roughness:1,metalness:0,vertexColors:!0,normalScale:new Qe(.8,.8)}),M=cs("sparse_grass_col.jpg",!0,!0,c),v=cs("sparse_grass_nrm.jpg"),S=cs("sparse_grass_rgh.jpg");for(const R of[M,v,S])R.repeat.set(220,220);const T=new Nt({map:M,normalMap:v,roughnessMap:S,color:12175258,roughness:1}),E=Gr(512,128,(R,O,q)=>{R.fillStyle="#b9b9b4",R.fillRect(0,0,O,q);for(let F=0;F<2600;F++)R.fillStyle=`rgba(${90+s()*70|0},${90+s()*70|0},${88+s()*70|0},0.12)`,R.fillRect(s()*O,s()*q,2+s()*3,1+s()*3);R.fillStyle="rgba(255,255,255,0.9)",R.fillRect(0,q*.28,O,q*.2),R.fillStyle="rgba(0,0,0,0.18)",R.fillRect(0,q*.78,O,q*.22),R.fillStyle="rgba(0,0,0,0.35)";for(let F=0;F<O;F+=128)R.fillRect(F,0,2,q)},!0);new Nt({map:E,roughness:.85,metalness:0});const C=new Nt({color:9408911,roughness:.95}),y=(R,O={})=>new Nt(Object.assign({color:R,roughness:.55,metalness:.05},O)),b=[];for(let R=0;R<=16;R++)b.push(-a+2*a*R/16);const P=(R,O,q)=>{const F=.5+.5*Math.sin(q*.011+1.3)*Math.sin(q*.0037),oe=Math.exp(-Math.pow((R+3.5)/3.2,2))*.28,Y=Math.exp(-Math.pow((R-4.2)/3,2))*.22,ne=Math.exp(-Math.pow((R-a)/1.4,2))*.14+Math.exp(-Math.pow((R+a)/1.4,2))*.08,re=.78+.18*F,Z=Math.max(.3,re-oe-Y-ne);return[Z,Z,Z*1.02]},B=new ot(Pi(i,b,{uvU:7,uvV:7,color:P}),x);B.receiveShadow=!0,B.name="road",n.add(B);const k=[];for(let R=0;R<=4;R++)k.push(-a-r.apron*R/4);const G=x.clone();G.color=new ze(12171958);const D=new ot(Pi(i,k.slice().reverse(),{uvU:7,uvV:7,color:()=>[.95,.95,.95]}),G);D.receiveShadow=!0,n.add(D),t(.15);const V=R=>new Ln({color:R,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),W=(R,O,q,F=.03)=>{const oe=new ot(Pi(i,[R,O],{yOff:F}),V(q));return n.add(oe),oe};W(a-.55,a-.3,15987696),W(-a+.3,-a+.55,15987696),W(-a-.05,-a+.12,15909376),W(-a-.5,-a-.33,15909376);const z=Gr(256,32,(R,O,q)=>{for(let oe=0;oe<16;oe++)for(let Y=0;Y<2;Y++)R.fillStyle=(oe+Y)%2?"#111":"#fff",R.fillRect(O/16*oe,q/2*Y,O/16,q/2)});{const R=new gi(2*a,1.6),O=new ot(R,new Ln({map:z,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),q=i.point(0,0,{}),F=i.at(0);O.position.set(q.x,q.y+.04,q.z),O.rotation.order="YXZ",O.rotation.y=Math.atan2(F.tx,F.tz),O.rotation.x=-Math.PI/2,O.rotation.z=0,O.rotation.set(0,0,0);const oe=new He,Y=new N(F.tx,0,F.tz),ne=new N(-F.rx*Math.sin(F.bank),Math.cos(F.bank),-F.rz*Math.sin(F.bank)),re=new N().crossVectors(Y,ne).normalize();oe.makeBasis(re,Y,ne),O.quaternion.setFromRotationMatrix(oe),n.add(O)}t(.25);const K=a+.5,ee=(()=>{const R=Pi(i,[0,1],{uvU:1,uvV:1});R.attributes.position,R.attributes.uv;const O=o+1,q=new Float32Array(O*2*3),F=new Float32Array(O*2*2),oe={};for(let re=0;re<O;re++){const Z=re%o;i.point(Z*i.ds,K,oe);const se=re*2;q[se*3]=oe.x,q[se*3+1]=oe.y-.2,q[se*3+2]=oe.z,q[(se+1)*3]=oe.x,q[(se+1)*3+1]=oe.y+r.wallH,q[(se+1)*3+2]=oe.z,F[se*2]=re*i.ds/4,F[se*2+1]=0,F[(se+1)*2]=re*i.ds/4,F[(se+1)*2+1]=1}const Y=[];for(let re=0;re<O-1;re++){const Z=re*2,se=Z+1,xe=Z+2,Te=Z+3;Y.push(Z,se,xe,se,Te,xe)}const ne=new Vt;return ne.setAttribute("position",new mt(q,3)),ne.setAttribute("uv",new mt(F,2)),ne.setIndex(Y),ne.computeVertexNormals(),ne})(),le=new ot(ee,new Nt({map:E,roughness:.85,side:vn}));le.receiveShadow=!0,le.castShadow=!0,n.add(le),n.add(new ot(Pi(i,[K-.2,K+.5],{yOff:r.wallH}),C));const me=[];for(let R=0;R<=6;R++)me.push(K+.5+R*2.5);const _e=Pi(i,me,{uvU:8,uvV:8,yFn:(R,O)=>{const q=i.d.yc[O]+K*Math.sin(i.d.bank[O]),F=(R-(K+.5))/15;return-Math.min(1,F)*(q+.2)-.1+(F>0,0)}});{const R=_e.attributes.position,O=me.length;for(let q=0;q<R.count/O;q++){const F=q*O+(O-1);R.setY(F,-.05)}_e.computeVertexNormals()}const Oe=new ot(_e,new Nt({color:10263960,roughness:1,map:_}));Oe.receiveShadow=!0,n.add(Oe);const ke=Gr(128,128,(R,O,q)=>{R.clearRect(0,0,O,q),R.strokeStyle="rgba(200,205,210,0.95)",R.lineWidth=2;for(let F=-q;F<O+q;F+=16)R.beginPath(),R.moveTo(F,0),R.lineTo(F+q,q),R.stroke(),R.beginPath(),R.moveTo(F+q,0),R.lineTo(F,q),R.stroke()},!0);ke.repeat.set(1,1);const te=(()=>{const R=o+1,O=new Float32Array(R*2*3),q=new Float32Array(R*2*2),F={},oe=7;for(let re=0;re<R;re++){const Z=re%o;i.point(Z*i.ds,K+.2,F);const se=re*2;O[se*3]=F.x,O[se*3+1]=F.y+r.wallH,O[se*3+2]=F.z,O[(se+1)*3]=F.x,O[(se+1)*3+1]=F.y+r.wallH+oe,O[(se+1)*3+2]=F.z,q[se*2]=re*i.ds/2.5,q[se*2+1]=0,q[(se+1)*2]=re*i.ds/2.5,q[(se+1)*2+1]=3}const Y=[];for(let re=0;re<R-1;re++){const Z=re*2;Y.push(Z,Z+1,Z+2,Z+1,Z+3,Z+2)}const ne=new Vt;return ne.setAttribute("position",new mt(O,3)),ne.setAttribute("uv",new mt(q,2)),ne.setIndex(Y),ne.computeVertexNormals(),ne})();n.add(new ot(te,new Ln({map:ke,transparent:!0,alphaTest:.2,side:vn,depthWrite:!1,fog:!0})));{const R=new En(new js(.07,.09,7.4,6),y(7238520,{metalness:.6,roughness:.4}),Math.ceil(i.length/9)),O=new He,q={};let F=0;for(let oe=0;oe<i.length;oe+=9)i.point(oe,K+.2,q),O.makeTranslation(q.x,q.y+r.wallH+3.6,q.z),R.setMatrixAt(F++,O);R.count=F,n.add(R)}t(.4);const ae=new ot(new gi(9e3,9e3),T);ae.rotation.x=-Math.PI/2,ae.position.y=-.06,ae.receiveShadow=!0,ae.name="ground",n.add(ae);{const R=new gi(r.straight*1.4,r.radius*1.4),O=new ot(R,new Ln({color:5138997,transparent:!0,opacity:.18,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.set(0,-.04,-r.radius*.1),n.add(O)}if(r.lake>0){const R=new ot(new Bc(150,40),new Nt({color:2775666,roughness:.08,metalness:0,envMapIntensity:1.4}));R.rotation.x=-Math.PI/2,R.scale.set(1.9*r.lake*Math.max(.5,m),.55*r.lake*Math.max(.5,r.radius/300),1),R.position.set(0,-.02,-r.radius*.17),n.add(R)}t(.5);const ve=Math.round(e.crowd*(r.crowdK||1)),Ne=r.standRows||1,Ae=R=>Math.max(5,Math.round(R*Ne)),Ge=[{s0:-l-20,s1:l+20,off:26,rows:Ae(28),rise:.78,depth:.95,color:3820138,side:1},{s0:f-l-d*.45,s1:f-l-30,off:24,rows:Ae(22),rise:.75,depth:.95,color:5849402,side:1},{s0:l+d*.04,s1:l+d*.66,off:36,rows:Ae(18),rise:.74,depth:.95,color:4020810,side:1},{s0:f-l-d*.98,s1:f-l-d*.5,off:34,rows:Ae(16),rise:.74,depth:.95,color:4865370,side:1}],gt=new $t(1,1,1),U=new Nt({color:16777215,roughness:.7});let nt=0;for(const R of Ge)nt+=Math.ceil((R.s1-R.s0)/8)*R.rows;const Pe=new En(gt,U,nt);Pe.castShadow=!1,Pe.receiveShadow=!0;const Se=new He,be=new bt,it=new N,ye=new N,Ie=new ze;let ht=0;const ut={},I=[];for(const R of Ge)for(let O=R.s0;O<R.s1;O+=8){const q=i.wrapS(O+4),F=i.at(q);i.point(q,a+R.off-R.rows*R.depth*0,ut);const oe=Math.atan2(F.tx,F.tz),Y=Math.floor(q/96);for(let ne=0;ne<R.rows;ne++){const re=R.off+ne*R.depth,Z=ut.y*0+ne*R.rise+2.2+Math.max(0,(F.yc+(a+.5)*Math.sin(F.bank))*.55);ye.set(F.x+F.rx*(a+re),Z*.5+0,F.z+F.rz*(a+re));const se=Z;ye.y=se*.5,be.setFromEuler(new Wt(0,oe,0)),it.set(R.depth*1.02,se,8.05),Se.compose(ye,be,it),Pe.setMatrixAt(ht,Se);const xe=.75+ne%2*.12+(Y*7+ne)%3*.04;Ie.setHex(R.color).multiplyScalar(xe),Pe.setColorAt(ht,Ie),ht++,I.length<ve*1.5&&ne%1===0&&I.push([F.x+F.rx*(a+re-R.depth*.25),se,F.z+F.rz*(a+re-R.depth*.25),oe,F.tx,F.tz])}if(R.rows>=22&&(O-R.s0)%16===0){const ne=R.off+R.rows*R.depth*.55,re=R.rows*R.rise+9,Z=new ot(new $t(R.rows*R.depth*1.15,.5,16.2),y(14343648,{roughness:.6}));Z.position.set(F.x+F.rx*(a+ne),re,F.z+F.rz*(a+ne)),Z.rotation.y=oe,Z.castShadow=!0,n.add(Z)}}Pe.count=ht,Pe.instanceMatrix.needsUpdate=!0,Pe.instanceColor&&(Pe.instanceColor.needsUpdate=!0),n.add(Pe);{const R=Math.min(ve,I.length),O=new En(new $t(.42,.9,.34),new Nt({color:16777215,roughness:.9}),R),q=[13712187,3108827,15909376,15658734,2763306,4039517,15043115,10181046],F=new Wt;for(let oe=0;oe<R;oe++){const Y=I[s()*I.length|0],ne=(s()-.5)*7.4;ye.set(Y[0]+Y[4]*ne,Y[1]+.55,Y[2]+Y[5]*ne),F.set(0,Y[3],0),be.setFromEuler(F),it.set(1,.8+s()*.4,1),Se.compose(ye,be,it),O.setMatrixAt(oe,Se),O.setColorAt(oe,Ie.setHex(q[s()*q.length|0]).multiplyScalar(.7+s()*.3))}O.instanceMatrix.needsUpdate=!0,O.instanceColor.needsUpdate=!0,n.add(O)}t(.65);const w=[];{const R=new js(.35,.6,46,8),O=new En(R,y(8159622,{metalness:.7,roughness:.4}),40),q=new $t(9,3.2,1.2),F=new Nt({color:3355443,emissive:16773839,emissiveIntensity:0,roughness:.5}),oe=new En(q,F,40);let Y=0;for(let ne=40;ne<i.length&&Y<40;ne+=Math.max(95,Math.min(190,f/20))){const re=i.at(ne),Z=a+34*Math.max(.6,Math.min(1,m*1.4)),se=re.x+re.rx*Z,xe=re.z+re.rz*Z;Se.makeTranslation(se,23,xe),O.setMatrixAt(Y,Se);const Te=Math.atan2(re.tx,re.tz);Se.compose(new N(se-re.rx*2,45.5,xe-re.rz*2),new bt().setFromEuler(new Wt(0,Te,0)),new N(1,1,1)),oe.setMatrixAt(Y,Se),w.push({x:se,z:xe}),Y++}O.count=Y,oe.count=Y,O.castShadow=!0,n.add(O,oe),n.userData.lampMat=F}{const R=[];for(let O=0;O<=3;O++)R.push(-a-r.apron-3-O*4.2);new ot(Pi(i,R.slice().reverse(),{uvU:7,uvV:7,sFrom:0,sTo:0,yOff:.02,color:()=>[.8,.8,.8],closed:!1}),G)}{const R=new En(new $t(10,4.2,12),y(13619924,{roughness:.7}),60);let O=0;const q=new En(new $t(11,1.1,.5),y(15329764),60);for(let F=-Math.min(260,l*.55);F<Math.min(260,l*.55)&&O<60;F+=12){const oe=i.wrapS(F),Y=i.at(oe),ne=-a-r.apron-16,re=Y.x+Y.rx*ne,Z=Y.z+Y.rz*ne,se=Math.atan2(Y.tx,Y.tz),xe=new bt().setFromEuler(new Wt(0,se,0));Se.compose(new N(re,2.1,Z),xe,new N(1,1,1)),R.setMatrixAt(O,Se);const Te=Y.x+Y.rx*(ne+8),fe=Y.z+Y.rz*(ne+8);Se.compose(new N(Te,.55,fe),xe,new N(1,1,1)),q.setMatrixAt(O,Se),O++}R.count=O,q.count=O,R.castShadow=!0,R.receiveShadow=!0,n.add(R,q)}{const R=i.at(-Math.min(120,l*.24)),O=R.x+R.rx*(-a-r.apron-34),q=R.z+R.rz*(-a-r.apron-34),F=new ot(new $t(5,42,5),y(15263972,{roughness:.5}));F.position.set(O,21,q),F.castShadow=!0,n.add(F);const oe=new ot(new $t(5.2,1.6,5.2),new Nt({color:2763306,emissive:4045397,emissiveIntensity:.9}));oe.position.set(O,38,q),n.add(oe)}t(.75);{const R=[],O=Y=>Gr(512,96,(ne,re,Z)=>{ne.fillStyle=Y.colors[0],ne.fillRect(0,0,re,Z),ne.fillStyle=Y.colors[1],ne.fillRect(0,Z-14,re,14),ne.fillStyle=Y.colors[1]==="#ffffff"||Y.colors[1]==="#f4f4f4"?"#111":"#fff",ne.font='italic 700 54px "Barlow Condensed", Impact, sans-serif',ne.textAlign="center",ne.textBaseline="middle",ne.fillText(Y.name.toUpperCase(),re/2,Z/2-5)}),q=cr.map(O);let F=0;for(let Y=20;Y<i.length;Y+=36){const ne=i.at(Y),re=ne.x+ne.rx*(K+.55),Z=ne.z+ne.rz*(K+.55),se={};i.point(Y,K+.55,se);const xe=new ot(new gi(14,2.2),new Nt({map:q[F%q.length],roughness:.6}));F++,xe.position.set(re,se.y+r.wallH+3.2,Z),xe.rotation.y=Math.atan2(ne.tx,ne.tz)+Math.PI/2*0,xe.lookAt(re-ne.rx*10,se.y+r.wallH+3.2,Z-ne.rz*10),R.push(xe)}const oe=new xn;R.forEach(Y=>oe.add(Y)),n.add(oe)}{const O=new En(new js(.25,.4,5,5),y(5916210,{roughness:1}),1400),q=new En(new Vc(3.2,1),new Nt({color:16777215,roughness:1,flatShading:!0}),1400);let F=0;for(let Y=0;Y<1400*3&&F<1400;Y++){const ne=s()*Math.PI*2,re=h+200+s()*600*Math.max(.5,m),Z=u+220+s()*400*Math.max(.5,m),se=Math.cos(ne)*re,xe=Math.sin(ne)*Z*1.1+40,Te=i.query(se,xe,void 0,{});if(Te.u<a+70&&Te.u>-a-120)continue;const fe=.8+s()*1.4;Se.compose(new N(se,2.5*fe,xe),new bt,new N(fe,fe,fe)),O.setMatrixAt(F,Se),Se.compose(new N(se,7*fe,xe),new bt().setFromEuler(new Wt(s(),s()*6,0)),new N(fe,fe*(.9+s()*.5),fe)),q.setMatrixAt(F,Se),q.setColorAt(F,Ie.setHSL(.25+s()*.08,.45,.16+s()*.1)),F++}O.count=F,q.count=F,q.castShadow=!1,n.add(O,q);const oe=new En(new $t(1,1,1),new Nt({color:16777215,roughness:.9}),90);for(let Y=0;Y<90;Y++){const ne=Y/90*Math.PI*2+s()*.05,re=1500+900*m+s()*(350+250*m),Z=40+s()*120,se=15+s()*70,xe=40+s()*90;Se.compose(new N(Math.cos(ne)*re*(.9+.35*m),se/2,Math.sin(ne)*re*.9),new bt().setFromEuler(new Wt(0,s()*3,0)),new N(Z,se,xe)),oe.setMatrixAt(Y,Se),oe.setColorAt(Y,Ie.setHSL(.58+s()*.1,.1,.5+s()*.25))}n.add(oe)}return t(1),n.userData.lamps=w,n}function Mh(i,e){if(e===Jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===cc||e===gu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===cc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class L9 extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new U9(t)}),this.register(function(t){return new F9(t)}),this.register(function(t){return new X9(t)}),this.register(function(t){return new Q9(t)}),this.register(function(t){return new K9(t)}),this.register(function(t){return new B9(t)}),this.register(function(t){return new z9(t)}),this.register(function(t){return new V9(t)}),this.register(function(t){return new H9(t)}),this.register(function(t){return new N9(t)}),this.register(function(t){return new G9(t)}),this.register(function(t){return new O9(t)}),this.register(function(t){return new q9(t)}),this.register(function(t){return new W9(t)}),this.register(function(t){return new D9(t)}),this.register(function(t){return new Y9(t)}),this.register(function(t){return new $9(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Zs.extractUrlBase(e);a=Zs.resolveURL(l,this.path)}else a=Zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Bu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ku){try{a[Ze.KHR_BINARY_GLTF]=new j9(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new h_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new k9;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Z9(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new J9;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new e_;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function I9(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class D9{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ap(h),l.distance=u;break;case"spot":l=new wp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class k9{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}}class N9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class U9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(o,o)}return Promise.all(r)}}class F9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class O9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class B9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class z9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class V9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],tn),Promise.all(r)}}class H9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class G9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(r)}}class W9{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class q9{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class X9{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Q9{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class K9{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Y9{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class $9{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const m of u){const _=new He,g=new N,p=new bt,x=new N(1,1,1),M=new En(m.geometry,m.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,_.compose(g,p,x));for(const v in c)if(v==="_COLOR_0"){const S=c[v];M.instanceColor=new hc(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);vt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ku="glTF",Bs=12,bh={JSON:1313821514,BIN:5130562};class j9{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ku)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Bs,r=new DataView(e,Bs);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===bh.JSON){const l=new Uint8Array(e,Bs+a,o);this.content=n.decode(l)}else if(c===bh.BIN){const l=Bs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Z9{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=mc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=mc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=ps[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(d)},o,l,tn,f)})})}}class J9{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class e_{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Yu extends ur{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,_=m-l,g=-2*d+3*f,p=d-f,x=1-g,M=p-f+u;for(let v=0;v!==o;v++){const S=a[_+v+o],T=a[_+v+c]*h,E=a[m+v+o],C=a[m+v]*h;r[v]=x*S+M*T+g*E+p*C}return r}}const t_=new bt;class n_ extends Yu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return t_.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:en,9729:un,9984:cu,9985:Zr,9986:Qs,9987:Bn},Th={33071:mi,33648:oa,10497:Mi},lo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i_={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function Li(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function r_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function a_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o_(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uo(t.attributes):e=i.indices+":"+uo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uo(i.targets[n]);return e}function uo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const l_=new He;class h_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new I9,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new zu(this.options.manager):this.textureLoader=new Cp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Li(r,o,s),Fn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Zs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=lo[s.type],o=ps[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new mt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=lo[s.type],l=ps[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(f/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(x);M||(_=new l(o,p*d,s.count*d/h),M=new Zf(_,d/h),t.cache.add(x,M)),g=new Nc(M,c,f%d/h,m)}else o===null?_=new l(s.count*c):_=new l(o,f,s.count*c),g=new mt(_,c,m);if(s.sparse!==void 0){const p=lo.SCALAR,x=ps[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new x(a[1],M,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new mt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,C=S.length;E<C;E++){const y=S[E];if(g.setX(y,T[E*c]),c>=2&&g.setY(y,T[E*c+1]),c>=3&&g.setZ(y,T[E*c+2]),c>=4&&g.setW(y,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sh[f.magFilter]||un,h.minFilter=Sh[f.minFilter]||Bn,h.wrapS=Th[f.wrapS]||Mi,h.wrapT=Th[f.wrapT]||Mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==un,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Pt(_);g.needsUpdate=!0,f(g)}),t.load(Zs.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Fn(u,a),u.userData.mimeType=a.mimeType||c_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Iu,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Lu,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=s[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],tn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=vn);const h=r.alphaMode||ho.OPAQUE;if(h===ho.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ho.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ln&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ln&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ln){const u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==Ln&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Fn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Li(s,u,r),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=o_(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=wh(new Vt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?s_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],g=a[d];let p;const x=l[d];if(g.mode===_n.TRIANGLES||g.mode===_n.TRIANGLE_STRIP||g.mode===_n.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ep(_,x):new ot(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===_n.TRIANGLE_STRIP?p.geometry=Mh(p.geometry,gu):g.mode===_n.TRIANGLE_FAN&&(p.geometry=Mh(p.geometry,cc));else if(g.mode===_n.LINES)p=new ap(_,x);else if(g.mode===_n.LINE_STRIP)p=new Oc(_,x);else if(g.mode===_n.LINE_LOOP)p=new op(_,x);else if(g.mode===_n.POINTS)p=new Du(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&a_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fn(p,r),g.extensions&&Li(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Li(s,u[0],r),u[0];const f=new xn;r.extensions&&Li(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(yi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new He;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Uc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],m=s.samplers[d.sampler],_=d.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let M=0,v=f.length;M<v;M++){const S=f[M],T=d[M],E=m[M],C=_[M],y=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=n._createAnimationTracks(S,T,E,C,y);if(b)for(let P=0;P<b.length;P++)p.push(b[P])}const x=new gp(r,void 0,p);return Fn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,l_)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Cu:l.length>1?h=new xn:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Fn(h,r),r.extensions&&Li(n,h,r),r.matrix!==void 0){const u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new xn;n.name&&(r.name=s.createUniqueName(n.name)),Fn(r,n),n.extensions&&Li(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof Hn||f instanceof Pt)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];ui[r.path]===ui.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ui[r.path]){case ui.weights:l=xs;break;case ui.rotation:l=Ms;break;case ui.translation:case ui.scale:l=bs;break;default:n.itemSize===1?l=xs:l=bs;break}const h=s.interpolation!==void 0?i_[s.interpolation]:sr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ms?n_:Yu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function u_(i,e,t){const n=e.attributes,s=new si;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const h=gc(ps[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=gc(ps[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new qn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function wh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=mc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return tt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Fn(i,e),u_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?r_(i,e.targets,t):i})}const _c=240,vc=96,d_='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function wn(i,e,t=14,n=null){i.beginPath(),i.roundRect(2,2,_c-4,vc-4,t),i.fillStyle=e,i.fill(),n&&(i.lineWidth=3,i.strokeStyle=n,i.stroke())}function Tt(i,e,t,n,s,r,{weight:a=700,italic:o=!0,align:c="left",spacing:l=0,maxW:h=0}={}){i.font=`${o?"italic ":""}${a} ${s}px ${d_}`,i.fillStyle=r,i.textAlign=c,i.textBaseline="alphabetic";try{i.letterSpacing=l+"px"}catch{}if(h){const u=i.measureText(e).width;if(u>h){i.save(),i.translate(t,n),i.scale(h/u,1),i.fillText(e,0,0),i.restore();try{i.letterSpacing="0px"}catch{}return}}i.fillText(e,t,n);try{i.letterSpacing="0px"}catch{}}function Ii(i,e,t){i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fillStyle=t,i.fill()}function Wr(i,e,t,n,s,r=0){i.beginPath();for(let a=0;a<6;a++){const o=r+Math.PI/3*a,c=e+n*Math.cos(o),l=t+n*Math.sin(o);a?i.lineTo(c,l):i.moveTo(c,l)}i.closePath(),i.fillStyle=s,i.fill()}const f_={dustyfork(i){wn(i,"#f2b134",16),i.fillStyle="#7a2e1b",i.fillRect(14,70,212,5),i.fillRect(14,79,212,3),i.fillStyle="#7a2e1b",i.fillRect(36,18,5,34),i.fillRect(46,18,5,34),i.fillRect(56,18,5,34),i.beginPath(),i.roundRect(34,46,29,8,4),i.fill(),i.fillRect(46,50,5,18),Tt(i,"DUSTY FORK",78,46,34,"#7a2e1b",{maxW:136}),Tt(i,"DINER",80,64,20,"#7a2e1b",{spacing:7,italic:!1,weight:600})},greaseline(i){wn(i,"#ececec",14,"#d1342c"),i.save(),i.translate(46,48),i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(22,-2,22,26,0,26),i.bezierCurveTo(-22,26,-22,-2,0,-30),i.fillStyle="#d1342c",i.fill(),i.fillStyle="#ececec",i.beginPath(),i.ellipse(-6,8,4,8,.4,0,7),i.fill(),i.restore(),Tt(i,"GREASELINE",82,50,36,"#16181c",{maxW:140}),i.fillStyle="#d1342c",i.fillRect(82,58,140,4),Tt(i,"GARAGE",83,80,20,"#d1342c",{spacing:8,italic:!1,weight:600})},cornerbolt(i){wn(i,"#2f6fdb",14),Wr(i,46,48,30,"#f4f4f4",Math.PI/6),Wr(i,46,48,17,"#2f6fdb",Math.PI/6),Wr(i,46,48,8,"#f4f4f4",Math.PI/6),Tt(i,"CORNER BOLT",86,46,34,"#ffffff",{maxW:140}),Tt(i,"SUPPLY CO.",88,70,19,"#cfe0ff",{spacing:6,italic:!1,weight:600})},vantafuel(i){wn(i,"#0d1f1b",14,"#13c28a"),Ii(i,[[22,22],[50,22],[62,58],[74,22],[100,22],[66,76],[56,76]],"#13c28a"),Ii(i,[[62,30],[68,44],[62,56],[56,44]],"#0d1f1b"),Tt(i,"VANTA",112,52,40,"#ffffff",{maxW:112}),Tt(i,"FUEL",114,76,26,"#13c28a",{spacing:10,italic:!1})},halo(i){wn(i,"#ffd400",48),i.lineWidth=9,i.strokeStyle="#151515",i.beginPath(),i.ellipse(46,48,24,24,0,0,7),i.stroke(),Ii(i,[[50,26],[36,52],[47,52],[42,70],[58,42],[47,42]],"#151515"),Tt(i,"HALO",82,56,46,"#151515",{maxW:140}),Tt(i,"ENERGY",84,78,19,"#151515",{spacing:9,italic:!1})},ironbark(i){wn(i,"#232323",12,"#e2552c"),Wr(i,44,48,31,"#e2552c",0),i.strokeStyle="#232323",i.lineWidth=3.5,[8,15,22].forEach(e=>{i.beginPath(),i.arc(44,48,e,0,7),i.stroke()}),Tt(i,"IRONBARK",84,52,40,"#ffffff",{maxW:140}),Tt(i,"TOOLS",86,76,21,"#e2552c",{spacing:10,italic:!1})},meridian(i){wn(i,"#00a3e0",16),i.save(),i.translate(46,48),i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.arc(0,0,27,0,7),i.stroke(),i.beginPath(),i.ellipse(0,0,11,27,0,0,7),i.stroke(),i.beginPath(),i.moveTo(-27,0),i.lineTo(27,0),i.stroke(),i.beginPath(),i.moveTo(-23,-13),i.lineTo(23,-13),i.moveTo(-23,13),i.lineTo(23,13),i.lineWidth=2.5,i.stroke(),i.restore(),Tt(i,"MERIDIAN",86,52,38,"#ffffff",{maxW:140}),Tt(i,"MOBILE",88,76,20,"#d9f3ff",{spacing:9,italic:!1})},stratus(i){wn(i,"#4b3fc4",16),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(18,62),i.quadraticCurveTo(46,58,78,26),i.quadraticCurveTo(68,52,92,56),i.quadraticCurveTo(54,74,18,62),i.fill(),i.fillStyle="#b9b2ff",i.beginPath(),i.moveTo(24,74),i.quadraticCurveTo(52,72,70,60),i.quadraticCurveTo(52,82,24,74),i.fill(),Tt(i,"STRATUS",102,54,38,"#ffffff",{maxW:124}),Tt(i,"AIR",104,76,21,"#cfc9ff",{spacing:14,italic:!1})},kestrel(i){wn(i,"#121212",14,"#ffcf1b"),i.lineWidth=11,i.strokeStyle="#ffcf1b",i.beginPath(),i.arc(46,48,24,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="#121212";for(let e=0;e<12;e++){const t=Math.PI*2*e/12;i.beginPath(),i.moveTo(46+19*Math.cos(t),48+19*Math.sin(t)),i.lineTo(46+29*Math.cos(t),48+29*Math.sin(t)),i.stroke()}Ii(i,[[36,50],[60,36],[52,52],[64,50],[38,64]],"#ffffff"),Tt(i,"KESTREL",84,54,38,"#ffcf1b",{maxW:140}),Tt(i,"TIRES",86,76,21,"#ffffff",{spacing:12,italic:!1})},apexgrid(i){wn(i,"#0d0d0d",12,"#ff2d55"),Ii(i,[[44,14],[78,80],[10,80]],"#ff2d55"),i.strokeStyle="#0d0d0d",i.lineWidth=3,i.beginPath(),i.moveTo(44,38),i.lineTo(44,80),i.moveTo(28,58),i.lineTo(60,58),i.moveTo(22,70),i.lineTo(66,70),i.stroke(),Tt(i,"APEX GRID",92,50,40,"#ffffff",{maxW:128}),Tt(i,"POWER",94,76,21,"#ff2d55",{spacing:11,italic:!1})},northstar(i){wn(i,"#0a2a66",14,"#c0c6cc"),Ii(i,[[44,10],[51,40],[80,48],[51,56],[44,86],[37,56],[8,48],[37,40]],"#c0c6cc"),Ii(i,[[44,26],[48,44],[44,48],[40,44]],"#ffffff"),Tt(i,"NORTHSTAR",92,50,36,"#ffffff",{maxW:138}),Tt(i,"MOTORS",94,76,21,"#c0c6cc",{spacing:10,italic:!1})}};function $u(i,e,t,n,s,r){const a=f_[e];if(!a)return!1;const o=Math.min(s/_c,r/vc);return i.save(),i.translate(t+(s-_c*o)/2,n+(r-vc*o)/2),i.scale(o,o),i.lineJoin="round",a(i),i.restore(),!0}const aa=new Map;function ju(i,e=240,t=96){const n=`${i}:${e}x${t}`;if(aa.has(n))return aa.get(n);const s=Math.min(2,(typeof devicePixelRatio=="number"?devicePixelRatio:1)||1),r=document.createElement("canvas");r.width=Math.round(e*s),r.height=Math.round(t*s);const a=r.getContext("2d");a.scale(s,s),$u(a,i,0,0,e,t);const o=r.toDataURL("image/png");return aa.set(n,o),o}function Zu(){aa.clear()}const p_=i=>(Cs(i)||{}).name||i,m_=Object.freeze(Object.defineProperty({__proto__:null,clearSponsorPreviewCache:Zu,drawSponsor:$u,sponsorName:p_,sponsorPreviewURL:ju},Symbol.toStringTag,{value:"Module"})),g_=Object.assign({"../ui/sponsorArt.js":m_}),fo=Object.values(g_)[0]||null,__={left:(i,e)=>[-i*100,-e*100],right:(i,e)=>[i*100,-e*100],top:(i,e)=>[i*100,e*100],tail:(i,e)=>[-i*100,-e*100],nose:(i,e)=>[i*100,-e*100]};function Ut(i,e,t,n){const s=e.frames[t];i.save(),i.beginPath(),i.rect(...s.clip),i.clip(),i.translate(s.ox,s.oy),i.scale(s.sx,s.sy),n(__[t]),i.restore()}const zs=(i,e,t)=>{i.beginPath(),t.forEach(([n,s],r)=>{const[a,o]=e(n,s);r?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath(),i.fill()},Fi=(i,e,t,n,s,r)=>{const[a,o]=e(t,n),[c,l]=e(s,r);i.fillRect(Math.min(a,c),Math.min(o,l),Math.abs(c-a),Math.abs(l-o))},Ju=(i,e)=>`${i==="italic"?"italic 800":i==="slab"?"900":"800"} ${e}px "Barlow Condensed", Impact, "Arial Narrow", sans-serif`;function v_(i,e,t,n,s,r,a=0){i.save(),i.translate(t,n),a&&i.rotate(a);const o=Cs(e);if(i.beginPath(),i.rect(-s/2,-r/2,s,r),i.clip(),fo&&fo.drawSponsor)try{fo.drawSponsor(i,e,-s/2,-r/2,s,r),i.restore();return}catch{}i.fillStyle=o?o.colors[0]:"#444",i.fillRect(-s/2,-r/2,s,r),i.fillStyle=o?o.colors[1]:"#fff",i.fillRect(-s/2,r/2-r*.14,s,r*.14),i.fillStyle="#fff",i.font=Ju("italic",Math.floor(r*.42)),i.textAlign="center",i.textBaseline="middle",i.fillText(o?o.name.toUpperCase():e,0,-r*.04,s*.94),i.restore()}function qr(i,e,t,n,s,r=0){i.save(),i.translate(t,n),r&&i.rotate(r),i.font=Ju(e.numberStyle,s),i.textAlign="center",i.textBaseline="middle";const a=String(e.number||"0");e.numberStyle==="italic"&&i.transform(1,0,-.22,1,0,0);const o=(e.numberColor||"#fff").toLowerCase(),c=o==="#ffffff"||o==="#fff"?"#000":"#fff";i.lineJoin="round",i.lineWidth=s*.12,i.strokeStyle=c,i.strokeText(a,0,0),e.numberStyle==="outline"?(i.lineWidth=s*.06,i.strokeStyle=e.numberColor,i.strokeText(a,0,0)):(i.fillStyle=e.numberColor,i.fillText(a,0,0)),i.restore()}function y_(i,e,t){const n=t.accent,s=t.trim,r=a=>{Ut(i,e,"left",a),Ut(i,e,"right",a)};if(t.pattern==="stripe")r(a=>{i.fillStyle=n,Fi(i,a,-3,.52,3,.46),i.fillStyle=s,Fi(i,a,-3,.44,3,.425)}),Ut(i,e,"top",()=>{i.fillStyle=n,i.fillRect(-22,-300,44,600),i.fillStyle=s,i.fillRect(-32,-300,5,600),i.fillRect(27,-300,5,600)});else if(t.pattern==="split")i.fillStyle=n,r(a=>zs(i,a,[[3,-.1],[3,1.1],[.3,1.1],[-.9,-.1]])),Ut(i,e,"top",a=>zs(i,a,[[-1.2,3],[1.2,3],[1.2,.35],[-1.2,-.45]])),Ut(i,e,"nose",a=>zs(i,a,[[-1.2,-.1],[1.2,-.1],[1.2,.9],[-1.2,.9]]));else if(t.pattern==="chevron"){i.fillStyle=n;for(let a=0;a<7;a++){const o=-2.6+a*.5;r(c=>zs(i,c,[[o,-.1],[o+.3,-.1],[o+.55,.5],[o+.3,1.1],[o,1.1],[o+.25,.5]]))}for(let a=0;a<7;a++){const o=-2.6+a*.5;Ut(i,e,"top",c=>zs(i,c,[[-1.2,o],[-1.2,o+.3],[0,o+.55],[1.2,o+.3],[1.2,o],[0,o+.25]]))}}else t.pattern==="fade"&&(r(()=>{const a=i.createLinearGradient(-260,0,260,0);a.addColorStop(0,n),a.addColorStop(.55,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-300,-140,600,160)}),Ut(i,e,"top",()=>{const a=i.createLinearGradient(0,260,0,-150);a.addColorStop(0,n),a.addColorStop(.7,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-130,-320,260,640)}))}function x_(i,e,t){const n=i.getContext("2d");n.setTransform(i.width/2048,0,0,i.height/2048,0,0),n.globalCompositeOperation="source-over",n.fillStyle=e.paint,n.fillRect(0,0,2048,2048),y_(n,t,e);const s=t.band||.3,r=l=>{n.fillStyle=e.trim,Fi(n,l,-4,-.2,4,s),n.fillStyle=e.accent,Fi(n,l,-4,s,4,s+.025)};Ut(n,t,"left",r),Ut(n,t,"right",r),Ut(n,t,"nose",r),Ut(n,t,"tail",r),t.paintLights&&(Ut(n,t,"nose",l=>{for(const h of[-1,1]){n.fillStyle="#e8eaec";const[u,f]=l(h*.38,.31),[d,m]=l(h*.84,.22);n.beginPath(),n.roundRect(Math.min(u,d),Math.min(f,m),Math.abs(d-u),Math.abs(m-f),3),n.fill(),n.fillStyle="#ffcf5a";const _=h>0?Math.max(u,d)-12:Math.min(u,d);n.fillRect(_,Math.min(f,m)+2,12,Math.abs(m-f)-4)}n.fillStyle="#0b0c0e",Fi(n,l,-.34,.33,.34,.13),n.fillStyle="#2a2d33";for(let h=0;h<17;h++){const[u,f]=l(-.3+h*.0375,.31);n.fillRect(u,f,1.4,14)}}),Ut(n,t,"tail",l=>{n.fillStyle="#16171a",Fi(n,l,-.9,.78,.9,.46),n.fillStyle="#d0171e";for(const h of[-1,1])Fi(n,l,h*.39,.7,h*.81,.52)}));const a=e.slots||{},o=t.spots;Ut(n,t,"left",l=>{const[h,u]=l(o.number.z,o.number.y);qr(n,e,h,u,o.number.h*100)}),Ut(n,t,"right",l=>{const[h,u]=l(o.number.z,o.number.y);qr(n,e,h,u,o.number.h*100)}),Ut(n,t,"top",l=>{const[h,u]=l(0,a.roof?o.roofNumberZ:o.roofNumberZ-.15);qr(n,e,h,u,32,Math.PI/2)}),Ut(n,t,"tail",l=>{const[h,u]=l(0,a.bumper?o.bumper.y-.17:o.bumper.y);qr(n,e,h,u,a.bumper?13:21)});const c=(l,h,u,f,d,m=0)=>{if(!a[h])return;const _=d*2.5,g=d;Ut(n,t,l,p=>{const[x,M]=p(u,f);v_(n,a[h],x,M,_,g,m)})};c("left","door",o.door.z,o.door.y,o.door.h*100),c("right","door",o.door.z,o.door.y,o.door.h*100),c("left","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("right","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("top","hood",o.hood.x,o.hood.z,o.hood.h*100,0),c("top","trunk",o.trunk.x,o.trunk.z,o.trunk.h*100,Math.PI),c("top","roof",0,o.roofLogoZ,22,Math.PI/2),c("tail","bumper",o.bumper.x,o.bumper.y,o.bumper.h*100)}const ls=9.81,Cn={mass:1500,L:2.85,a:1.38,b:1.47,cgH:.52,Iz:2900,wheelR:.34,length:5.1,width:1.95,cdA:1.3,clA:.85,rolling:.012,maxSteer:.5,gears:[9.4,6.3,4.55,3.46],eff:.9,idle:2600,redline:9e3,limiter:9250,torque:[[1200,300],[3e3,470],[4500,610],[6e3,690],[7500,740],[8500,720],[9100,640],[9500,400]],mu:{track:1.5,apron:1.3,grass:.42},trackHalf:.78},M_=2.23694;function Eh(i,e=Cn){const t=e.torque;if(i<=t[0][0])return t[0][1];if(i>=t[t.length-1][0])return t[t.length-1][1];for(let n=0;n<t.length-1;n++)if(i<=t[n+1][0]){const s=(i-t[n][0])/(t[n+1][0]-t[n][0]);return t[n][1]+s*(t[n+1][1]-t[n][1])}return 0}class b_{constructor(e=0,t=null){this.C=t?Object.assign({},Cn,t,{mu:Object.assign({},Cn.mu,t.mu||{})}):Cn,this.id=e,this.x=0,this.z=0,this.psi=0,this.vx=0,this.vy=0,this.w=0,this.steer=0,this.steerCmd=0,this.gear=1,this.rpm=this.C.idle,this.shiftT=0,this.throttle=0,this.brake=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.surface="track",this.bank=0,this.trackU=0,this.trackS=0,this.trackI=0,this.draft=0,this.dirty=0,this.damage={front:0,rear:0,left:0,right:0},this.hit=0,this.scrape=0,this.limiter=!1,this.out=!1,this.nLoad=1,this.lap=0,this.pitch=0,this.roll=0,this.skid=0,this.lastImpact=0,this.fracF={t:1,a:0,g:0},this.fracR={t:1,a:0,g:0},this.fracTrack=1,this.fracGrass=0,this.bankEff=0,this.gh=0,this.gp=0,this.gr=0,this.ghv=0,this.gpv=0,this.grv=0,this.gTh=0,this.gTp=0,this.gTr=0,this._gInit=!1,this.wy=[0,0,0,0],this._wq=[{},{},{},{}],this.gunk=0,this.dirt=0,this.alphaFe=0,this.alphaRe=0,this.tumble=null,this.wrecked=!1,this.dmgPull=0,this.scuffs=[],this.dig=0,this.lift=0,this.pendingTrip=null,this.hidden=!1,this.ghost=!1,this.dents=[],this._rs=e*2654435761>>>0||1,this.tripAt=2.3+this.rand()*2.4,this.hitBias=this.rand()}rand(){let e=(this._rs+=1831565813)|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}checkTrip(e){if(this.tumble||this.ghost)return null;const t=Math.hypot(this.vx,this.vy),n=this.fracGrass;if(t<12)return this.dig=Math.max(0,this.dig-e*2),this.lift=Math.max(0,this.lift-e),null;const s=Math.abs(this.vy);return this.dig=Math.max(0,this.dig+(Math.max(0,s-13)*n*.8*(1+.5*this.dirt)+Math.max(0,s-30)*.1*(1-n)-.9*(1-n))*e),this.lift=Math.max(0,this.lift+(Math.max(0,-this.vx-24)*.07-.5)*e),this.dig>this.tripAt?"dig":this.lift>this.tripAt?"lift":null}recover(e,t,n){this.place(e,t,n,0),this.tumble=null,this.wrecked=!1,this.dig=0,this.lift=0,this.pendingTrip=null,this.gear=1,this.throttle=0,this.steer=0,this.gunk=0,this.roll=0,this.pitch=0,this.tripAt=2.3+this.rand()*2.4}get speed(){return Math.hypot(this.vx,this.vy)}get mph(){return this.vx*M_}place(e,t,n,s=0){this.px=e,this.pz=t,this.ppsi=n,this.x=e,this.z=t,this.psi=n,this.vx=s,this.vy=0,this.w=0,this._gInit=!1,this.alphaFe=0,this.alphaRe=0}sampleGround(e,t){const n=this.C,s=Math.sin(this.psi),r=Math.cos(this.psi),a=n.trackHalf||.78;let o=0,c=0,l=0,h=0,u=0,f=0;for(let m=0;m<4;m++){const _=m<2?n.a:-n.b,g=m&1?-a:a,p=this.x+s*_+r*g,x=this.z+r*_-s*g,M=this._wq[m];e.query(p,x,t,M),this.wy[m]=M.y;const v=M.surface;m<2?v==="grass"?l++:v==="apron"?c++:o++:v==="grass"?f++:v==="apron"?u++:h++}this.fracF.t=o/2,this.fracF.a=c/2,this.fracF.g=l/2,this.fracR.t=h/2,this.fracR.a=u/2,this.fracR.g=f/2,this.fracTrack=(o+h)/4,this.fracGrass=(l+f)/4;const d=this.wy;this.gTh=(d[0]+d[1]+d[2]+d[3])/4,this.gTp=Math.atan2((d[0]+d[1]-d[2]-d[3])/2,n.a+n.b),this.gTr=Math.atan2((d[0]+d[2]-d[1]-d[3])/2,2*a),this._gInit||(this.gh=this.gTh,this.gp=this.gTp,this.gr=this.gTr,this.ghv=this.gpv=this.grv=0,this._gInit=!0)}get wvx(){return this.vx*Math.sin(this.psi)+this.vy*Math.cos(this.psi)}get wvz(){return this.vx*Math.cos(this.psi)-this.vy*Math.sin(this.psi)}step(e,t,n){const s=this.C,r=s.mass;this.px=this.x,this.pz=this.z,this.ppsi=this.psi,this.pgh=this.gh,this.pgp=this.gp,this.pgr=this.gr,this.surface=n.surface||"track",this.bankEff+=((n.bank||0)*this.fracTrack-this.bankEff)*Math.min(1,e*14);const a=this.bankEff;this.bank=a;const o=Math.cos(a),c=Math.sin(a),l=s.mu.track,h=s.mu.apron,u=s.mu.grass,f=Math.hypot(this.vx,this.vy);this.gunk=Le(this.gunk+(this.fracGrass*Le(f/9,0,1)*.45-(1-this.fracGrass)*(.07+.006*f))*e,0,1),this.dirt=Math.min(1,this.dirt+this.fracGrass*Le(f/12,0,1)*.025*e);const d=1-.3*this.gunk,m=(this.fracF.t*l+this.fracF.a*h+this.fracF.g*u)*d,_=(this.fracR.t*l+this.fracR.a*h+this.fracR.g*u)*d,g=this.damage,p=1-.35*g.front-.1*(g.left+g.right)*.5,x=1-.25*g.rear-.1*(g.left+g.right)*.5,M=Math.max(0,this.vx),v=s.maxSteer/(1+Math.pow(M/42,2)),S=Le(t.steer,-1,1)*v,T=(t.analog?6.5:4.2)*(1+1.2/(1+M/12));this.steer+=Le(S-this.steer,-T*e*v*2,T*e*v*2),this.throttle+=Le(t.throttle-this.throttle,-5*e,4.5*e),this.brake+=Le(t.brake-this.brake,-8*e,7*e);const E=s.gears[this.gear-1],C=Math.abs(this.vx)/s.wheelR*E*60/(2*Math.PI);let y=Math.max(s.idle,C);this.gear===1&&this.vx<6&&(y=Math.max(y,3200+3500*this.throttle)),this.limiter=y>=s.limiter,this.limiter&&(y=s.limiter-150*Math.random()),this.rpm+=(y-this.rpm)*Math.min(1,e*28),this.shiftT>0?this.shiftT-=e:this.gear<4&&C>8350*(s.redline/9e3)?(this.gear++,this.shiftT=.12):this.gear>1&&C<(4700+(this.gear-2)*150)*(s.redline/9e3)&&(this.gear--,this.shiftT=.08);const b=Eh(this.rpm,s)*(this.limiter?0:1)*(this.shiftT>0?.15:1);let P=this.throttle*b*E*s.eff/s.wheelR;const B=(1-this.throttle)*.085*Eh(Math.max(this.rpm,3e3),s)*E/s.wheelR*(this.vx>.5?1:0);P=P*(1-.2*this.damage.front-.12*this.damage.rear)-B;const k=1.2,G=(1-.3*n.draft)*(1+.22*this.damage.front+.1*this.damage.rear+.08*(this.damage.left+this.damage.right)),D=.5*k*this.vx*this.vx,V=D*s.cdA*G*Math.sign(this.vx||1),W=D*s.clA*(1-.35*n.draft*.3)*(1-.18*(this.damage.front+this.damage.rear));this.draft=n.draft,this.dirty=n.dirty;const z=Math.max(0,n.k||0),K=this.vx*this.vx*z,ee=r*(ls*o+K*c)+W*.9,le=s.b/s.L;s.a/s.L;const me=r*this.ax*s.cgH/s.L,_e=.44*(1-.55*n.dirty);let Oe=Le(ee*le-me+W*.9*(_e-le),400,1e6);const ke=Le(ee-Oe,400,1e6);Oe=ee-ke;const te=Math.max(2.5,Math.abs(this.vx)),ae=this.vx>=0?1:-1;this.dmgPull+=(((g.left-g.right)*.05+(g.front>.3?.012*g.front:0)*(g.left>=g.right?1:-1))*Le(1.5*g.front+.3,0,1)-this.dmgPull)*Math.min(1,e*3);const ve=this.steer+this.dmgPull,Ne=ve*ae-Math.atan2(this.vy+s.a*this.w,te)*1,Ae=-Math.atan2(this.vy-s.b*this.w,te),Ge=Math.min(1,e*te/.45);this.alphaFe+=(Ne-this.alphaFe)*Ge,this.alphaRe+=(Ae-this.alphaRe)*Ge;const gt=this.alphaFe,U=this.alphaRe;this.slipF=gt,this.slipR=U;const nt=m*p*Math.pow(Oe/7e3,-.14),Pe=_*x*Math.pow(ke/7e3,-.14),Se=.15;let be=this.brake*2.3*r*ls*(1-.5*this.fracGrass);be=Math.min(be,2.6*r*ls);const it=-Math.sign(this.vx||1);let ye=P+it*be*.42,Ie=it*be*.58;const ht=Pe*ke,ut=nt*Oe,I=t.assist===0?1:.8;ye>0&&(ye=Math.min(ye,I*ht)),ye=Le(ye,-ht,ht),Ie=Le(Ie,-ut,ut);const w=Math.sqrt(Math.max(.35,1-Math.pow(ye/ht,2))),R=Math.sqrt(Math.max(.35,1-Math.pow(Ie/ut,2))),O=st=>Math.sin(1.45*Math.atan(st/Se*2));let q=nt*Oe*R*O(gt),F=Pe*ke*w*O(U);const oe=Le(Math.abs(this.vx)/3,0,1);q*=oe,F*=oe;const Y=Math.cos(ve),ne=Math.sin(ve),re=1/o;q*=re,F*=re;let Z=ye+Ie*Y-q*ne-V-s.rolling*r*ls*Math.sign(this.vx||0)*(1+5*this.fracGrass+3*(g.left+g.right)),se=F+q*Y+Ie*ne;this.fracGrass>0&&(Z-=this.fracGrass*.9*r*Math.min(1,Math.abs(this.vx)/8)*Math.sign(this.vx)*(2+.04*Math.abs(this.vx)));const xe=-(n.rx||0),Te=-(n.rz||0),fe=r*ls*Math.tan(a),qe=s.a*q*Y+s.a*Ie*ne-s.b*F,H=-this.w*Math.abs(this.w)*0-this.w*180,ue=0,pe=Z/r,we=se/r;this.ax+=(pe-this.ax)*Math.min(1,e*12),this.ay+=(we-this.ay)*Math.min(1,e*12);const he=pe+this.w*this.vy,ce=we-this.w*this.vx;if(this.vx+=he*e,this.vy+=ce*e,this.w+=(qe+H+ue)/s.Iz*e,fe>0&&(n.rx||n.rz)){const st=xe*fe/r*e,et=Te*fe/r*e,an=Math.sin(this.psi),nn=Math.cos(this.psi);this.vx+=st*an+et*nn,this.vy+=st*nn-et*an}this.brake>.5&&Math.abs(this.vx)<.4&&this.throttle<.05&&(this.vx*=.8,this.vy*=.8),this.psi+=this.w*e;const Re=Math.sin(this.psi),We=Math.cos(this.psi);this.x+=(this.vx*Re+this.vy*We)*e,this.z+=(this.vx*We-this.vy*Re)*e,this.roll+=(Le(-this.ay*.012,-.08,.08)-this.roll)*Math.min(1,e*8),this.pitch+=(Le(-this.ax*.004,-.05,.05)-this.pitch)*Math.min(1,e*8),this.skid=Le((Math.abs(U)-.12)*4+(Math.abs(gt)-.13)*3,0,1)*Le(this.speed/15,0,1),this.hit*=Math.max(0,1-e*4),this.scrape*=Math.max(0,1-e*6),this.nLoad=ee/(r*ls),this.ghv+=(676*(this.gTh-this.gh)-2*.8*26*this.ghv)*e,this.gh+=this.ghv*e,this.gpv+=(289*(this.gTp-this.gp)-2*.7*17*this.gpv)*e,this.gp+=this.gpv*e,this.grv+=(289*(this.gTr-this.gr)-2*.7*17*this.grv)*e,this.gr+=this.grv*e}applyImpulse(e,t,n,s,r){const a=this.C.mass,o=this.wvx+n*r/a,c=this.wvz+s*r/a,l=e-this.x,h=t-this.z;this.w+=(l*s-h*n)*r*-1/this.C.Iz*.5;const u=Math.sin(this.psi),f=Math.cos(this.psi);this.vx=o*u+c*f,this.vy=o*f-c*u}addDamage(e,t,n){const s=e-this.x,r=t-this.z,a=Math.sin(this.psi),o=Math.cos(this.psi),c=s*a+r*o,l=s*o-r*a,h=Math.min(1,n);if(Math.abs(c)>Math.abs(l)*1.5?c>0?this.damage.front=Math.min(1,this.damage.front+h):this.damage.rear=Math.min(1,this.damage.rear+h):l>0?this.damage.left=Math.min(1,this.damage.left+h):this.damage.right=Math.min(1,this.damage.right+h),n>.01){const u={lf:Math.max(-2.7,Math.min(2.7,c)),lt:Math.max(-1.1,Math.min(1.1,l)),ly:.55,m:Math.min(1,n*2.2)};this.dents.length<40&&this.dents.push(u),this.dentVer=(this.dentVer||0)+1}this.hit=Math.max(this.hit,Math.min(1,n*3)),this.lastImpact=Math.min(1,n*3)}}const ii={e87:{id:"e87",file:"regal",year:1987,name:"'87 Heritage Stock",tag:"Big, heavy and loose. Carburetted V8, bias tyres, almost no downforce.",spec:{mass:1570,Iz:3050,clA:.38,cdA:1.48,cgH:.55,rpmScale:.84,tqScale:.95,mu:{track:1.3,apron:1.15},pace:.9},stats:{power:3,grip:2,aero:1}},e05:{id:"e05",file:"stock",year:2005,name:"'05 Classic Stock",tag:"The balanced all-rounder. Fuel-injected V8, solid downforce.",spec:{rpmScale:1,tqScale:1,pace:1},stats:{power:4,grip:4,aero:3}},e15:{id:"e15",file:"camry",year:2015,name:"'15 Modern Stock",tag:"Lightest and stickiest. Wide tyres, big aero package, a rocket in the draft.",spec:{mass:1470,Iz:2850,clA:1,cdA:1.22,cgH:.5,rpmScale:1,tqScale:1.05,mu:{track:1.6,apron:1.35},pace:1.045},stats:{power:5,grip:5,aero:5}}},ed=["e87","e05","e15"];function S_(i,e=null){const t=ii[i]||ii.e05,n=Object.assign({},t.spec),s=n.rpmScale||1,r=n.tqScale||1;return delete n.rpmScale,delete n.tqScale,n.torque=Cn.torque.map(([a,o])=>[a*s,o*r]),n.gears=Cn.gears.map(a=>a*s),n.idle=Math.round(Cn.idle*(.9+.1*s)),n.redline=Math.round(Cn.redline*s),n.limiter=Math.round(Cn.limiter*s),e&&(n.L=e.wheelbase,n.a=e.a,n.b=e.b,n.wheelR=e.wheelR,n.length=e.L,n.width=e.W,n.trackHalf=e.track,n.H=e.H),n}const Ah={rookie:"e87",regional:"e05",pro:"e15",legends:"e15"},Vi={},T_={},Rh=i=>new URL("assets/car/"+i,document.baseURI).href;function Ch(i){const e=ii[i];return e?Vi[i]?Promise.resolve(Vi[i]):T_[i]||=Promise.all([new L9().loadAsync(Rh(e.file+".glb")),fetch(Rh(e.file+".json")).then(t=>t.json())]).then(([t,n])=>(Vi[i]={scene:t.scene,cfg:n},Vi[i])):Promise.reject(new Error("unknown car "+i))}const w_=i=>Vi[i]&&Vi[i].cfg;function E_(i,e){e==="matte"?(i.roughness=.72,i.metalness=.05,i.clearcoat=0):e==="metallic"?(i.roughness=.3,i.metalness=.65,i.clearcoat=1,i.clearcoatRoughness=.04):(i.roughness=.26,i.metalness=.12,i.clearcoat=1,i.clearcoatRoughness=.06),i.needsUpdate=!0}function po({car:i="e05",atlas:e="high",livery:t}={}){const n=Vi[i];if(!n)throw new Error("car not loaded: "+i+" (await loadCar first)");const s=n.cfg,r=n.scene.clone(!0),a=e==="high"?2048:e==="med"?1024:512,o=document.createElement("canvas");o.width=a,o.height=a;const c=new ku(o);c.colorSpace=wt,c.flipY=!1,c.anisotropy=8,c.generateMipmaps=!0,c.minFilter=Bn;const l=new Dn({map:c,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25}),h={F:null,R:null},u={value:0};l.onBeforeCompile=y=>{y.uniforms.uDirt=u,y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
attribute float aScuff; varying float vScuff; varying vec3 vOP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vScuff = aScuff; vOP = position;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDirt; varying float vScuff; varying vec3 vOP;
float rh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float rn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(mix(rh(i), rh(i+vec3(1,0,0)), f.x), mix(rh(i+vec3(0,1,0)), rh(i+vec3(1,1,0)), f.x), f.y), mix(mix(rh(i+vec3(0,0,1)), rh(i+vec3(1,0,1)), f.x), mix(rh(i+vec3(0,1,1)), rh(i+vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <map_fragment>",`#include <map_fragment>
{ float lo = 1.0 - smoothstep(0.15, 1.15, vOP.y); float nz = rn(vOP * 7.0) * 0.6 + rn(vOP * 19.0) * 0.4;
  float dm = clamp(uDirt * (0.25 + 1.05 * lo) * (0.45 + 0.9 * nz) + uDirt * 0.12, 0.0, 1.0) * step(0.001, uDirt);
  vec3 mud = mix(vec3(0.11, 0.08, 0.045), vec3(0.08, 0.11, 0.04), rn(vOP * 3.0 + 4.0));
  diffuseColor.rgb = mix(diffuseColor.rgb, mud, min(1.0, dm * 1.25));
  float sc = clamp(vScuff, 0.0, 1.0) * (0.55 + 0.6 * rn(vOP * 31.0)); diffuseColor.rgb = mix(diffuseColor.rgb * (1.0 - 0.55 * sc), vec3(0.42, 0.42, 0.44), sc * 0.5);
  dirtMask = max(dm, sc * 0.7); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.93, dirtMask);`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
#ifdef USE_CLEARCOAT
material.clearcoat *= (1.0 - dirtMask);
#endif`).replace("void main() {",`float dirtMask = 0.0;
void main() {`)},r.traverse(y=>{if(!y.isMesh)return;const b=y.material.name;y.castShadow=b!=="RTTA_Glass",y.receiveShadow=b==="RTTA_Paint",b==="RTTA_Paint"?y.material=l:b==="RTTA_LightF"?y.material=h.F||=y.material.clone():b==="RTTA_LightR"?y.material=h.R||=y.material.clone():b==="RTTA_Glass"&&(y.material.depthWrite=!1,y.material.envMapIntensity=1.6,y.renderOrder=2)});const f=new xn,d=new xn;f.add(d),d.add(r);const m=[],_=[];for(const y of["FL","FR","RL","RR"]){const b=r.getObjectByName("wheel_"+y);if(!b)continue;const P=new xn;for(const B of b.children.slice())P.add(B);b.add(P),m.push(P),_.push({pivot:b,spin:P,front:y[0]==="F",side:y[1]==="L"?1:-1})}const g={group:f,inner:d,wheels:m,pivots:_,bodyMat:l,texture:c,canvas:o,cfg:s,id:i,livery:null,dirty:!0,spin:0,dim:{L:s.L,W:s.W,H:s.H,wheelR:s.wheelR,tireW:s.tireW,track:s.track,front:s.a,rear:-s.b}};g.setLivery=y=>{g.livery=JSON.parse(JSON.stringify(y)),g.dirty=!0},g.flush=()=>{!g.dirty||!g.livery||(x_(o,g.livery,s),c.needsUpdate=!0,g.dirty=!1,E_(l,g.livery.finish))},g.setLights=y=>{g.lightsOn=!!y,p()},g.setBrake=y=>{g.brakeOn=y>.05,p()};function p(){h.F&&(h.F.emissive=new ze(16773840),h.F.emissiveIntensity=g.lightsOn?1.6:0),h.R&&(h.R.emissive=new ze(16715792),h.R.emissiveIntensity=(g.lightsOn?.5:0)+(g.brakeOn?2.2:0))}let x=null,M=0;const v=new N,S=new N,T=new N,E=new He;new He;function C(){x=[],r.updateMatrixWorld(!0);const y=new Set(["RTTA_Trim","RTTA_Black","RTTA_LightF","RTTA_LightR","RTTA_Glass"]);r.traverse(b=>{if(!b.isMesh||!(b.material===l||y.has(b.material.name)))return;const P=b.geometry.clone();b.geometry=P;const B=P.attributes.position;b.material===l&&P.setAttribute("aScuff",new mt(new Float32Array(B.count),1)),E.identity();for(let k=b;k&&k!==r;k=k.parent)E.premultiply(k.matrix);x.push({o:b,g:P,m:E.clone(),mi:E.clone().invert()})})}return g.applyDents=(y,b=.5)=>{if(!y||y.length<=M)return;x||C(),v.set(0,b+.12,0);const P=new N,B=new N;for(let k=M;k<y.length;k++){const G=y[k],D=new N(G.lt,G.ly,G.lf),V=Math.min(1,G.m),W=.05+.13*V,z=.4+.55*V,K=z*z*1.6,ee=T.copy(v).sub(D);ee.y*=.35,ee.normalize();for(const le of x){const me=le.g.attributes.position,_e=le.g.attributes.normal,Oe=le.g.attributes.aScuff;for(let ke=0;ke<me.count;ke++){S.fromBufferAttribute(me,ke).applyMatrix4(le.m);const te=S.x-D.x,ae=S.y-D.y,ve=S.z-D.z,Ne=te*te+ae*ae+ve*ve;if(Ne>K)continue;const Ae=Ne/K,Ge=1-Ae,gt=Ge*Ge*(3-2*Ge),U=-2*(6*Ge*(1-Ge))/K*.5,nt=.75+.5*Math.abs(Math.sin(S.x*91.7+S.y*57.3+S.z*33.1));if(_e){P.fromBufferAttribute(_e,ke);const Pe=ee.dot(P);B.set(te,ae,ve).multiplyScalar(W*nt*U*2),B.addScaledVector(P,-B.dot(P)),P.addScaledVector(B,-Pe*-1).normalize(),_e.setXYZ(ke,P.x,P.y,P.z)}S.addScaledVector(ee,W*gt*nt),S.applyMatrix4(le.mi),me.setXYZ(ke,S.x,S.y,S.z),Oe&&Oe.setX(ke,Math.min(1,Oe.getX(ke)+gt*(.35+.65*V)))}me.needsUpdate=!0,Oe&&(Oe.needsUpdate=!0),_e&&(_e.needsUpdate=!0)}}M=y.length;for(const k of x)k.g.computeBoundingSphere()},g.setDirt=y=>{u.value=y},g.update=y=>{for(const b of _)b.pivot.rotation.y=b.front?y.steer:0,b.spin.rotation.x=y.spin;d.rotation.z=y.roll||0,d.rotation.x=y.pitch||0},g.dispose=()=>{if(x)for(const y of x)y.g.dispose();c.dispose(),l.dispose(),h.F&&h.F.dispose(),h.R&&h.R.dispose()},t&&(g.setLivery(t),g.flush()),g}const Ph={rookie:{pace:.905,aggression:.25,mistakes:.0012,lines:3},pro:{pace:.945,aggression:.45,mistakes:7e-4,lines:4},veteran:{pace:.975,aggression:.65,mistakes:3e-4,lines:5},legend:{pace:1,aggression:.85,mistakes:12e-5,lines:5}};class td{constructor(e,t="pro",n=1,s=0){this.track=e,this.lv=Ph[t]||Ph.pro,this.rnd=Qc(n*7919+13),this.skill=.97+this.rnd()*.06,this.lane=s,this.laneT=s,this.laneTimer=2+this.rnd()*4,this.err=0,this.mistake=0,this.passing=0,this.steerLP=0}control(e,t,n,s,r){const a=this.track,o=Math.max(.1,t.vx);this.laneTimer-=e;let c=null,l=1e9;for(const G of s){if(G.car===t)continue;let D=G.s-n.s;D<-a.length/2&&(D+=a.length),D>a.length/2&&(D-=a.length),D>0&&D<l&&Math.abs(G.u-n.u)<3.4&&(l=D,c=G)}let h=!1,u=!1;for(const G of s){if(G.car===t)continue;let D=G.s-n.s;if(D<-a.length/2&&(D+=a.length),D>a.length/2&&(D-=a.length),D>-8&&D<8){const V=G.u-n.u;V>.5&&V<3.8&&(u=!0),V<-.5&&V>-3.8&&(h=!0)}}const f=r.phase==="green"&&r.t>9;if(c&&l<34&&this.laneTimer<=0&&f){const G=[-1,1].map(z=>this.laneTarget(n.u+z*3.6)),D=G.map(z=>this.laneFree(t,n,s,z)),V=this.rnd()<.5?0:1,W=D[V]?V:D[1-V]?1-V:-1;W>=0&&this.rnd()<.5+.5*this.lv.aggression&&(this.laneT=G[W],this.passing=3+this.rnd()*3),this.laneTimer=1.5+this.rnd()*2}else this.passing>0?(this.passing-=e,this.passing<=0&&!c&&(this.laneT=this.lane+(this.rnd()-.5)*2)):this.laneTimer<=0&&(this.laneT=this.lane+(this.rnd()-.5)*3,this.laneTimer=4+this.rnd()*6);this.laneT=Le(this.laneT,-a.cfg.halfW+1.8,a.cfg.halfW-1.8),u&&this.laneT>this.err&&(this.laneT=this.err-.3),h&&this.laneT<this.err&&(this.laneT=this.err+.3),u&&h&&(this.laneT=this.err),this.err+=(this.laneT-this.err)*Math.min(1,e*.9),this.mistake>0?this.mistake-=e:r.phase==="green"&&this.rnd()<this.lv.mistakes*e*60&&(this.mistake=.4+this.rnd()*.5);const d=Math.atan2(n.tx,n.tz),m=sa(d-t.psi+Math.atan2(t.vy,Math.max(5,o))*0),_=n.u-this.err,g=a.at(n.s+.18*o+6).k;let p=Math.atan(t.C.L*g)*1+.01*o*o*g*0;p+=.9*m+Math.atan2(1.1*_,o+6)-.09*(t.w-o*n.k)*1;const x=Math.atan2(t.vy,Math.max(6,o));Math.abs(x)>.12&&(p+=.9*(x-Math.sign(x)*.12));const M=t.C.maxSteer/(1+Math.pow(o/42,2));let v=Le(p/M,-1,1);v+=this.mistake>0?Math.sin(this.mistake*14)*.05:0,this.steerLP+=(v-this.steerLP)*Math.min(1,e*14);const S=Math.abs(a.at(n.s+40+o*.8).k);let T=88*this.lv.pace*this.skill*(t.C.pace||1);const E=a.at(n.s+30).bank,C=(20+9.81*Math.tan(Math.min(E,.55))*1.4)*(t.C.mu.track/1.5)*(1-.07*Le(t.dirty||0,0,1))*.94;if(S>1e-4&&(T=Math.min(T,Math.sqrt(C/S))),c){const G=7+o*.12,D=Math.max(0,c.car.vx);if(l<G+25){const V=Le((l-G)/25,-1,1);T=Math.min(T,D*(1+.04*V)+(V>0?6:-4))}this.passing>0&&Math.abs(this.err-c.u)>2.5&&(T=Math.max(T,D+2))}this.mistake>0&&(T*=.85),r.phase!=="green"&&r.phase!=="checker"&&r.phase!=="yellow"&&(T=0),r.phase==="yellow"&&(T=Math.min(T,38)),r.phase==="checker"&&(T=Math.min(T,Math.max(40,86-4.5*(r.t-(r.checkerT||r.t)))));const y=T-t.vx,P=Math.abs(x)>.2?0:Le(.5+y*.45,0,1),B=Math.abs(o*o*n.k),k=Le(-y*.15-.05,0,.85*Le(1-.8*B/20,.22,1))*(y<-3?1:0);return{steer:this.steerLP,throttle:k>0?0:P,brake:k,analog:!0}}laneTarget(e){return Le(e,-this.track.cfg.halfW+1.8,this.track.cfg.halfW-1.8)}laneFree(e,t,n,s){for(const r of n){if(r.car===e)continue;let a=r.s-t.s;if(a<-this.track.length/2&&(a+=this.track.length),a>this.track.length/2&&(a-=this.track.length),a>-10&&a<18&&Math.abs(r.u-s)<2.6)return!1}return!0}}const A_=9.81,Mt=()=>new N,Lh=new He,mo=new bt,R_=new bt;class C_{constructor(e){const t=e.C;this.C=t,this.m=t.mass;const n=t.length||5,s=t.width||1.95,r=t.H||1.4,a=t.cgH||.52,o=t.trackHalf||.78,c=t.wheelR||.34,l=n/2,h=s/2;this.cg=a,this.hl=l,this.wr=c;const u=[];for(const[x,M]of[[t.a,"f"],[-t.b,"r"]])for(const v of[1,-1])u.push({p:Mt().set(v*o,c-a,x),r:c,wheel:!0});for(const x of[1,-1])for(const M of[1,-1])u.push({p:Mt().set(M*h,.2-a,x*l*.97),r:0}),u.push({p:Mt().set(M*h*.82,.62*r-a,x*l*.93),r:0});for(const x of[.9,-1.3])for(const M of[1,-1])u.push({p:Mt().set(M*h*.72,r-a,x),r:0});this.pts=u,this.I=[this.m/12*(n*n+r*r)*.8,t.Iz||2900,this.m/12*(s*s+r*r)];const f=Math.sin(e.psi),d=Math.cos(e.psi),m=new bt().setFromAxisAngle(new N(0,1,0),e.psi),_=new bt().setFromAxisAngle(new N(0,0,1),e.gr||0),g=new bt().setFromAxisAngle(new N(1,0,0),-(e.gp||0));this.q=m.multiply(_).multiply(g),this.p=Mt().set(e.x,e.gh||0,e.z).add(Mt().set(0,a,0).applyQuaternion(this.q)),this.v=Mt().set(e.vx*f+e.vy*d,0,e.vx*d-e.vy*f);const p=Mt().set(0,0,1).applyQuaternion(this.q);Mt().set(0,1,0).applyQuaternion(this.q),this.w=Mt().set(0,e.w,0).addScaledVector(p,-Le(e.vy,-30,30)*.12),e.vx<-20&&this.w.addScaledVector(Mt().set(1,0,0).applyQuaternion(this.q),-.4),this.dmg={front:0,rear:0,left:0,right:0,top:0},this.dents=[],this.age=0,this.rest=0,this.done=!1,this.upright=!1,this.ev=[],this.dirtGain=0,this.maxHit=0,this._R=new He,this._r=Mt(),this._pw=Mt(),this._vel=Mt(),this._F=Mt(),this._T=Mt(),this._n=Mt(),this._vt=Mt(),this._ft=Mt(),this._tmp=Mt(),this._tmp2=Mt()}step(e,t,n){if(this.done)return;const s=2,r=e/s;this.ev.length=0;for(let c=0;c<s;c++)this.sub(r,t,n);this.age+=e;const a=this.v.length(),o=this.w.length();if(this.rest=a<.9&&o<.35?this.rest+e:0,this.rest>1||this.age>20){this.done=!0;const c=Mt().set(0,1,0).applyQuaternion(this.q);this.upright=c.y>.62,this.v.set(0,0,0),this.w.set(0,0,0)}}sub(e,t,n){const s=this.m,r=this.q;Lh.makeRotationFromQuaternion(r);const a=Lh.elements,o=this._F.set(0,-s*A_,0),c=this._T.set(0,0,0),l=this.v.length();t(this.p.x,this.p.z,n);const h=this.p.y-n.y;if(l>1){o.addScaledVector(this.v,-.5*1.2*(this.C.cdA||1.3)*1.6*l);const S=this._tmp.set(a[8],a[9],a[10]).dot(this.v)/l;if(S<-.3&&h<6){const T=.6*l*l*6*(-S-.3);o.y+=T;const E=this._r.set(0,0,this.hl).applyQuaternion(r);c.add(this._tmp2.crossVectors(E,this._tmp.set(0,T*1,0)))}}for(const v of this.pts){const S=this._r.copy(v.p).applyQuaternion(r),T=this._pw.copy(this.p).add(S),E=this._vel.crossVectors(this.w,S).add(this.v);t(T.x,T.z,n);let C=n.y+v.r-T.y;if(C>0){const P=this._n.set(n.nx,n.ny,n.nz),B=E.dot(P),k=v.wheel?15e4:38e4,G=v.wheel?5200:12e3,D=Le(k*C-G*B,0,v.wheel?11e4:2e5),V=this._tmp.copy(P).multiplyScalar(D),W=this._vt.copy(E).addScaledVector(P,-B),z=W.length(),K=n.surface==="grass";let ee=K?1.1:.6;if(v.wheel){ee=K?2.3:.95;const me=this._tmp2.set(a[8],a[9],a[10]).addScaledVector(P,-P.dot(this._tmp2)),_e=me.length();if(_e>.001){me.multiplyScalar(1/_e);const Oe=W.dot(me);W.addScaledVector(me,-Oe*.92)}}const le=W.length();if(le>1e-5){const me=this._ft.copy(W).multiplyScalar(-ee*D/(le+.35));V.add(me)}if(v.wheel&&z>1e-5&&this._ft.copy(E).addScaledVector(P,-B),o.add(V),c.add(this._tmp2.crossVectors(S,V)),D>4e3&&this.ev.length<8&&this.ev.push({x:T.x,y:n.y,z:T.z,hit:D/11e4,speed:z,soft:K,wheel:!!v.wheel}),!v.wheel&&D>9e3){const me=D/2e5*e*2.6,_e=v.p;_e.y>.3&&(this.dmg.top+=me),Math.abs(_e.z)>Math.abs(_e.x)*1.2?_e.z>0?this.dmg.front+=me:this.dmg.rear+=me:_e.x>0?this.dmg.left+=me:this.dmg.right+=me,D>3e4&&(this._dentT||0)<=this.age&&(this._dentT=this.age+.12,this.dents.push({lf:_e.z,lt:_e.x,ly:_e.y+this.cg,m:Le(D/16e4,.15,1)}))}B<-3&&-B>this.maxHit&&(this.maxHit=-B),K&&(this.dirtGain+=D/11e4*e*1.6)}const y=n.u-n.wallU,b=n.infieldU-n.u;if(y>0||b>0){const P=y>0,B=P?y:b,k=P?-n.rx:n.rx,G=P?-n.rz:n.rz,D=E.x*k+E.z*G,V=Le(22e4*B-9e3*D,0,9e4),W=this._tmp.set(k*V,0,G*V),z=E.x-D*k,K=E.z-D*G,ee=E.y,le=Math.hypot(z,ee,K);if(le>1e-5){const me=-.35*V/(le+.4);W.x+=z*me,W.y+=ee*me,W.z+=K*me}o.add(W),c.add(this._tmp2.crossVectors(S,W)),V>6e3&&this.ev.length<8&&this.ev.push({x:T.x,y:T.y,z:T.z,hit:V/9e4,speed:le,soft:!1,wall:!0}),D<-3&&-D>this.maxHit&&(this.maxHit=-D)}}this.v.addScaledVector(o,e/s),this.p.addScaledVector(this.v,e),mo.copy(r).invert();const u=this._tmp.copy(this.w).applyQuaternion(mo),f=this._r.copy(c).applyQuaternion(mo),d=this.I,m=(d[2]-d[1])*u.y*u.z/d[0],_=(d[0]-d[2])*u.z*u.x/d[1],g=(d[1]-d[0])*u.x*u.y/d[2],p=this._pw.set(f.x/d[0]+m,f.y/d[1]+_,f.z/d[2]+g).applyQuaternion(r);this.w.addScaledVector(p,e),this.w.multiplyScalar(1-.45*e);const x=this.w,M=R_.set(x.x*e*.5,x.y*e*.5,x.z*e*.5,0).multiply(r);r.set(r.x+M.x,r.y+M.y,r.z+M.z,r.w+M.w).normalize()}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}forwardYaw(){const e=Mt().set(0,0,1).applyQuaternion(this.q);return Math.atan2(e.x,e.z)}}const Xr=Cn.length/2,Qr=Cn.width/2;class Ih{constructor(e,t,n,s,r=!1,a=null,o=null){this.carId=o,this.id=e,this.name=t,this.number=n,this.livery=s,this.isPlayer=r,this.sim=new b_(e,a),this.driver=null,this.q={},this.hint=0,this.prog=0,this.prevS=0,this.lap=0,this.lapStart=0,this.lastLap=null,this.bestLap=null,this.finished=!1,this.finishTime=null,this.pos=0,this.gap=0,this.visual=null,this.controls={steer:0,throttle:0,brake:1}}}class P_{constructor(e,t,n={}){this.track=e,this.entries=t,this.laps=n.laps||3,this.mode=n.mode||"race",this.phase="grid",this.t=0,this.countdown=4.2,this.onEvent=n.onEvent||(()=>{}),this.finishedCount=0,this.leaderDone=!1,this.endTimer=0,this.sorted=t.slice(),this.ready=!1,this.lastCount=99,this.flag=null,this.wallHits=0,this.cars=t.map(r=>({car:r.sim,s:0,u:0}));const s=e.cfg;this._wallU=s.halfW+.5,this._infU=-s.halfW-s.apron-s.infieldLimit,this._gq={},this._gHint=0,this._go={},this._tf={x:0,z:0},this._groundFn=(r,a,o)=>{const c=this._gq;if(e.query(r,a,this._gHint,c),o.y=c.y,o.surface=c.surface,o.u=c.u,o.rx=c.rx,o.rz=c.rz,o.wallU=this._wallU,o.infieldU=this._infU,c.surface==="track"&&c.bank){const l=Math.sin(c.bank),h=Math.cos(c.bank);o.nx=-c.rx*l,o.ny=h,o.nz=-c.rz*l}else o.nx=0,o.ny=1,o.nz=0;return o}}get player(){return this.entries.find(e=>e.isPlayer)}gridUp(e=0){const t=this.track,n=this.entries.slice(),s=this.player;s&&(n.splice(n.indexOf(s),1),n.splice(Le(e,0,n.length),0,s)),n.forEach((r,a)=>{const o=Math.floor(a/2),c=a%2,l=-14-o*11-(c?5.5:0),h=c?3.4:-3.4,u=t.point(l,h,{});r.sim.place(u.x,u.z,u.heading,0),r.sim.damage={front:0,rear:0,left:0,right:0},r.sim.gear=1,r.sim.rpm=r.sim.C.idle,t.query(u.x,u.z,void 0,r.q),r.hint=r.q.i,r.prevS=r.q.s,r.prog=l,r.lap=0,r.lapStart=0,r.lastLap=null,r.bestLap=null,r.finished=!1,r.finishTime=null,r.gridPos=a+1,r.driver&&(r.driver.lane=h*.4,r.driver.laneT=r.driver.lane,r.driver.err=h)}),this.sortNow(),this.phase="grid",this.t=0,this.countdown=4.2,this.lastCount=99}rollingStart(e=40,t=-60){const n=this.player,s=this.track.point(t,-1,{});n.sim.place(s.x,s.z,s.heading,e),n.sim.gear=3,this.track.query(s.x,s.z,void 0,n.q),n.hint=n.q.i,n.prevS=n.q.s,n.prog=t,n.lap=0,n.lapStart=0,this.phase="green",this.t=0,this.countdown=0}sortNow(){this.sorted=this.entries.slice().sort((e,t)=>t.finished!==e.finished?t.finished?1:-1:t.finished&&e.finished?e.finishTime-t.finishTime:t.prog-e.prog),this.sorted.forEach((e,t)=>{e.pos=t+1})}update(e){const t=this.track;if(this.t+=e,this.phase==="grid"){this.countdown-=e;const r=Math.ceil(this.countdown);if(r!==this.lastCount&&r<=3&&(this.lastCount=r,r>0&&this.onEvent("count",r)),this.countdown<=0){this.phase="green",this.t=0,this.onEvent("go",0);for(const a of this.entries)a.lapStart=0}}for(let r=0;r<this.entries.length;r++){const a=this.entries[r],o=a.sim.ghost;this.cars[r].s=a.q.s||0,this.cars[r].u=o?1e5:a.q.u||0,this.cars[r].car=a.sim}const n=t.length;for(const r of this.entries){const a=r.sim,o=r.q;if(a.hidden)continue;if(a.tumble)this.stepTumble(r,e);else{let h=r.controls;!r.isPlayer&&r.driver&&(h=r.driver.control(e,a,o,this.cars,this)),r.controls=h,this.phase==="grid"&&(h={steer:0,throttle:0,brake:1,analog:!0}),r.finished&&r.isPlayer&&this.phase!=="grid"&&(h={steer:Le(h.steer*.6,-1,1),throttle:0,brake:.25,analog:!0});let u=0,f=0;for(const m of this.entries){if(m===r||m.sim.ghost)continue;let _=m.q.s-o.s;if(_<-n/2&&(_+=n),_>n/2&&(_-=n),_>3&&_<45&&Math.abs(m.q.u-o.u)<3){const g=1-_/45;u=Math.max(u,g*(m.sim.vx>30?1:.3)),_<20&&(f=Math.max(f,1-_/20))}}a.sampleGround(t,r.hint),r.hold>0&&(r.hold-=e,h={steer:0,throttle:0,brake:1,analog:!0}),a.step(e,h,{surface:o.surface,bank:o.bank,rx:o.rx,rz:o.rz,k:o.k,draft:u,dirty:f});const d=this.phase!=="grid"?a.checkTrip(e)||a.pendingTrip:null;d&&this.startTumble(r,d)}if(t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,!r.isPlayer&&this.phase!=="grid"&&!a.tumble){const h=Math.atan2(o.tx,o.tz);let u=Math.abs((a.psi-h+Math.PI*3)%(Math.PI*2)-Math.PI);if(a.vx<6||u<1.2&&!1||Math.abs(a.psi-h)>1.6&&Math.abs(a.psi-h)<4.7?r.stuck=(r.stuck||0)+e:r.stuck=0,r.stuck>3&&!r.finished){const f=t.point(o.s+6,Le(o.u,-7,7),{});a.place(f.x,f.z,f.heading,28),a.w=0,a.gear=2,r.stuck=0}}let c=o.s-r.prevS;c<-n/2?c+=n:c>n/2&&(c-=n),r.prevS=o.s;const l=r.prog;if(r.prog+=c,Math.floor(r.prog/n)>Math.floor(l/n)&&r.prog>0){const h=Math.floor(r.prog/n);if(h>=1){const u=this.t-r.lapStart;this.phase!=="grid"&&h===r.lap+1&&(r.lastLap=u,(r.lapStart>0||h>1||this.mode==="hotlap"||u>20)&&(!r.bestLap||u<r.bestLap)&&(r.bestLap=u),r.lap=h,r.lapStart=this.t,this.onEvent("lap",r,u),r.isPlayer&&r.bestLap===u&&this.onEvent("bestlap",r,u),this.mode==="race"&&h>=this.laps&&!r.finished&&(r.finished=!0,r.finishTime=this.t,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker"))))}}}this.contacts(),this.sortNow();const s=this.sorted[0];for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r-1];a.gapAhead=o?Math.max(0,o.prog-a.prog)/Math.max(25,a.sim.vx):0,a.gapLead=s?Math.max(0,s.prog-a.prog)/Math.max(25,a.sim.vx):0}for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r+1];a.gapBehind=o?Math.max(0,a.prog-o.prog)/Math.max(25,o.sim.vx):0}if(this.phase==="checker"){const r=this.player;this.mode==="race"&&r&&r.finished&&(this.endTimer+=e,this.endTimer>4.5&&!this.done&&(this.done=!0,this.phase="done",this.onEvent("done")))}}startTumble(e,t){const n=e.sim;n.tumble||(n.tumble=new C_(n),n.pendingTrip=null,n.wrecked=!1,e.tumbleDone=0,e.tumbleKind=t,this.onEvent("flip",e,t,n.speed))}stepTumble(e,t){const n=e.sim,s=n.tumble;this._gHint=e.hint;const r=s.done;s.done||s.step(t,this._groundFn,this._go);const a=s.q,o=2*(a.x*a.z+a.w*a.y),c=1-2*(a.x*a.x+a.y*a.y);Math.hypot(o,c)>.35&&(n.psi=Math.atan2(o,c)),n.x=s.p.x,n.z=s.p.z;const l=Math.sin(n.psi),h=Math.cos(n.psi);n.vx=s.v.x*l+s.v.z*h,n.vy=s.v.x*h-s.v.z*l,n.w=s.w.y,n.throttle=0,n.rpm+=(n.C.idle-n.rpm)*Math.min(1,t*3),n.skid=0,n.gh=s.p.y-s.cg;for(let d=0;d<s.ev.length&&d<3;d++)this.onEvent("tumbleHit",e,s.ev[d]);const u=n.damage,f=s.dmg;if(f.front+f.rear+f.left+f.right+f.top>0){const d=f.top*.5;u.front=Math.min(1,u.front+f.front+d),u.rear=Math.min(1,u.rear+f.rear+d),u.left=Math.min(1,u.left+f.left+d),u.right=Math.min(1,u.right+f.right+d),f.front=f.rear=f.left=f.right=f.top=0}if(s.dents.length){for(const d of s.dents)n.dents.length<40&&n.dents.push(d);s.dents.length=0,n.dentVer=(n.dentVer||0)+1}if(n.dirt=Math.min(1,n.dirt+s.dirtGain*.6),s.dirtGain=0,s.done&&!r&&(e.tumbleDone=this.t,n.wrecked=!0,this.onEvent("wrecked",e)),s.done){e.tumbleDone||(e.tumbleDone=this.t);const d=this.t-e.tumbleDone;e.isPlayer?d>3.2&&this.recover(e):(e.retired=!0,d>2.5&&(n.ghost=!0),d>9&&(n.hidden=!0,this.onEvent("removed",e)))}}recover(e){const t=e.sim,n=e.q,s=this.track.point(n.s,Le(n.u,-6,6),{});t.recover(s.x,s.z,s.heading),t.dents=t.dents.slice(0,40),e.hold=1.6,e.tumbleDone=0,this.track.query(s.x,s.z,e.hint,n),e.hint=n.i,this.onEvent("recovered",e)}tripFromHit(e,t){const n=e.sim;n.tumble||n.ghost||this.phase==="grid"||t>14&&Math.abs(n.vy)>8&&n.speed>28&&n.rand()<.3&&(n.pendingTrip="impact")}contacts(){const e=this.entries,t=this.track,n=t.cfg,s=n.halfW+.5,r=-n.halfW-n.apron-n.infieldLimit,a=e.map(o=>o.sim.tumble?[o.sim.x,o.sim.z,o.sim.wvx,o.sim.wvz]:null);for(let o=0;o<e.length;o++){const c=e[o].sim;if(c.ghost)continue;for(let f=o+1;f<e.length;f++){const d=e[f].sim;if(d.ghost)continue;const m=d.x-c.x,_=d.z-c.z;if(m*m+_*_>36)continue;const g=Math.sin(c.psi),p=Math.cos(c.psi),x=Math.sin(d.psi),M=Math.cos(d.psi);for(const v of[1.4,0,-1.4])for(const S of[1.4,0,-1.4]){const T=c.x+g*v,E=c.z+p*v,C=d.x+x*S,y=d.z+M*S,b=C-T,P=y-E,B=b*b+P*P,k=2;if(B<k*k&&B>1e-6){const G=Math.sqrt(B),D=b/G,V=P/G,W=k-G,z=d.wvx-c.wvx,K=d.wvz-c.wvz,ee=z*D+K*V,le=W*.5;if(c.x-=D*le,c.z-=V*le,d.x+=D*le,d.z+=V*le,ee<0){const me=-1.12*ee/(1/c.C.mass+1/d.C.mass),_e=Math.min(me,3e4);c.applyImpulse((T+C)/2,(E+y)/2,-D,-V,_e*.6),d.applyImpulse((T+C)/2,(E+y)/2,D,V,_e*.6);const Oe=Math.min(1,-ee/22);this.tripFromHit(e[o],-ee),this.tripFromHit(e[f],-ee),-ee>2&&(c.addDamage((T+C)/2,(E+y)/2,Oe*.18),d.addDamage((T+C)/2,(E+y)/2,Oe*.18),this.onEvent("crash",e[o],e[f],Oe))}}}}const l=e[o].q;if(!l||l.u===void 0||c.tumble)continue;const h=Math.sin(c.psi),u=Math.cos(c.psi);for(const[f,d]of[[Xr,Qr],[Xr,-Qr],[-Xr,Qr],[-Xr,-Qr]]){const m=c.x+h*f+u*d,_=c.z+u*f-h*d,g={};t.query(m,_,e[o].hint,g);const p=g.u-s,x=r-g.u;if(p>0||x>0){const M=p>0,v=M?-g.rx:g.rx,S=M?-g.rz:g.rz,T=M?p:x;c.x+=v*T*1,c.z+=S*T*1;const E=c.wvx*v+c.wvz*S;if(E<0){const C=-1.08*E*c.C.mass;c.applyImpulse(m,_,v,S,Math.min(C,9e4)*.55);const y=Math.min(1,-E/26);-E>22&&Math.abs(c.vy)>7&&c.rand()<.35&&!c.tumble&&(c.pendingTrip="impact"),-E>1.5&&(c.addDamage(m,_,y*.22),this.onEvent("wall",e[o],y)),c.scrape=1,c.vx*=.995}}}}for(let o=0;o<e.length;o++){const c=a[o],l=e[o].sim;if(c&&l.tumble){const h=l.tumble;h.p.x+=l.x-c[0],h.p.z+=l.z-c[1],h.v.x+=l.wvx-c[2],h.v.z+=l.wvz-c[3]}}}}const nd="rtta3.career.v1",da={paint:"#d9dde2",accent:"#1d1f24",trim:"#1d1f24",pattern:"none",finish:"gloss",number:"00",numberColor:"#1d1f24",numberStyle:"block",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}},gn=[{id:"rookie",name:"Rookie Cup",laps:3,field:12,ai:"rookie",mult:1,unlockRep:0,races:6},{id:"regional",name:"Regional Sprint",laps:5,field:16,ai:"pro",mult:1.5,unlockRep:350,races:8},{id:"pro",name:"Pro Series",laps:8,field:24,ai:"veteran",mult:2.2,unlockRep:1100,races:10},{id:"legends",name:"Legends 200",laps:12,field:32,ai:"legend",mult:3,unlockRep:2600,races:12}],Dh={1:{races:2,avgPct:.3,series:0},2:{races:5,avgPct:.55,series:0},3:{races:9,avgPct:.7,series:1},4:{races:14,avgPct:.82,series:2}},Oi={pattern:{none:0,stripe:0,split:300,chevron:600,fade:900},finish:{gloss:0,matte:400,metallic:800}},kh={rookie:["thunder","piedmont","thunder","piedmont","lonestar","americas"],regional:["piedmont","lonestar","thunder","americas","lonestar","piedmont","americas","thunder"],pro:["lonestar","americas","piedmont","thunder","americas","lonestar","piedmont","americas","thunder","lonestar"],legends:["americas","thunder","lonestar","piedmont","americas","americas","lonestar","thunder","piedmont","americas","lonestar","americas"]},L_=i=>JSON.parse(JSON.stringify(i)),yc=()=>({v:1,name:"Driver",credits:0,rep:0,races:[],owned:[],declined:[],unlocked:{pattern:["none","stripe"],finish:["gloss"]},livery:L_(da),seriesIndex:0,seasonRace:0,bestLap:null,bests:{},unlockAll:!0,car:null});function I_(i){try{const e=i&&i.getItem(nd);if(e){const t=JSON.parse(e);if(t&&t.v===1){const n=Object.assign(yc(),t);return(!n.bests||typeof n.bests!="object")&&(n.bests={}),n.bestLap&&!n.bests.americas&&(n.bests.americas=n.bestLap),n}}}catch{}return yc()}class xa{constructor(e=typeof localStorage<"u"?localStorage:null){this.storage=e,this.state=I_(e),this.listeners=new Set,this.applyUnlockAll()}applyUnlockAll(){const e=this.state;e.unlockAll&&(e.owned=cr.map(t=>t.id),e.unlocked.pattern=Object.keys(Oi.pattern),e.unlocked.finish=Object.keys(Oi.finish))}setUnlockAll(e){this.state.unlockAll=!!e,e?this.applyUnlockAll():this.state.car=null,this.save()}seriesOpen(e){return!!gn[e]&&(this.state.unlockAll||this.state.rep>=gn[e].unlockRep)}setCar(e){this.state.car=e||null,this.save()}carChoice(){return this.state.unlockAll?this.state.car:null}save(){try{this.storage&&this.storage.setItem(nd,JSON.stringify(this.state))}catch{}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){const e=this.state.unlockAll;this.state=yc(),this.state.unlockAll=e,this.applyUnlockAll(),this.save()}get series(){return gn[this.state.seriesIndex]}unlockedSeries(){return gn.filter((e,t)=>this.seriesOpen(t)||t<=this.state.seriesIndex)}selectSeries(e){return this.seriesOpen(e)?(this.state.seriesIndex=e,this.state.seasonRace=0,this.save(),!0):!1}trackFor(e,t){const n=kh[e]||kh.rookie;return n[(t%n.length+n.length)%n.length]}nextRace(){const e=this.series,t=this.trackFor(e.id,this.state.seasonRace),n=Ft[t],s=Math.max(0,gn.indexOf(e));return{series:e,index:this.state.seasonRace,of:e.races,laps:n&&n.laps[s]||e.laps,field:e.field,ai:e.ai,track:t}}bestFor(e){return this.state.bests&&this.state.bests[e]||null}noteBest(e,t){if(!t||!isFinite(t))return!1;const n=this.state.bests,s=n[e];return!s||t<s?(n[e]=t,e==="americas"&&(this.state.bestLap=t),this.save(),!0):!1}setLivery(e){const t=this.state.livery;for(const n of Object.keys(e))n==="slots"?Object.assign(t.slots,e.slots):t[n]=e[n];for(const n of pc){const s=t.slots[n];s&&!this.state.owned.includes(s)&&(t.slots[n]=null)}return this.save(),t}static finishPct(e,t){return t<=1?1:1-(e-1)/(t-1)}recentAvgPct(e=3){const t=this.state.races.slice(-e);return t.length?t.reduce((n,s)=>n+D_.pct(s),0)/t.length:0}repFor(e,t,n){const s=120*(t-e)/Math.max(1,t-1);return Math.round((s+(e===1?40:0)+(e<=3?15:0)+10)*n)}recordResult({series:e,pos:t,field:n,laps:s,bestLap:r,points:a,track:o}){const c=this.state,l=gn.find(x=>x.id===e)||this.series,h=new Set(this.offers().map(x=>x.id)),u=this.repFor(t,n,l.mult);let f=0;const d=[],m=new Set;for(const x of pc){const M=c.livery.slots[x],v=M&&Cs(M);if(!v||m.has(M)||!c.owned.includes(M))continue;m.add(M);const S=v.slots.includes(x)?1:.6,T=.5+.5*xa.finishPct(t,n),E=Math.round(v.payout*S*T);f+=E,d.push({id:M,name:v.name,amount:E})}const _=Math.round(40*l.mult*(n-t+1));c.rep+=u,c.credits+=f+_,c.races.push({series:l.id,pos:t,field:n,laps:s,track:o,t:Date.now()}),r&&o&&((!c.bests[o]||r<c.bests[o])&&(c.bests[o]=r),o==="americas"&&(!c.bestLap||r<c.bestLap)&&(c.bestLap=r)),l.id===this.series.id&&(c.seasonRace=Math.min(c.seasonRace+1,l.races)),this.save();const g=this.offers().filter(x=>!h.has(x.id)),p=gn.filter(x=>c.rep>=x.unlockRep&&c.rep-u<x.unlockRep);return{repGain:u,prize:_,sponsorPay:f,paid:d,newOffers:g,unlockedSeries:p,rep:c.rep,credits:c.credits}}eligibleTier(){const e=this.state,t=this.recentAvgPct(3),n=Math.max(...gn.map((r,a)=>e.rep>=r.unlockRep?a:0));let s=0;for(const r of[1,2,3,4]){const a=Dh[r];e.races.length>=a.races&&t>=a.avgPct&&n>=a.series&&(s=r)}return s}offers(){if(this.state.unlockAll)return[];const e=this.eligibleTier();return cr.filter(t=>t.tier<=e&&!this.state.owned.includes(t.id)&&!this.state.declined.includes(t.id))}nextTierGoal(){const e=this.eligibleTier()+1,t=Dh[e];if(!t)return null;const n=this.state,s=Math.max(...gn.map((r,a)=>n.rep>=r.unlockRep?a:0));return{tier:e,racesNeeded:Math.max(0,t.races-n.races.length),avgNeeded:t.avgPct,avgNow:this.recentAvgPct(3),seriesNeeded:t.series>s?gn[t.series].name:null}}acceptSponsor(e){return this.offers().some(t=>t.id===e)?(this.state.owned.push(e),this.save(),!0):!1}declineSponsor(e){this.state.declined.includes(e)||(this.state.declined.push(e),this.save())}canUse(e,t){return this.state.unlocked[e]?this.state.unlocked[e].includes(t)||Oi[e][t]===0:!0}buy(e,t){const n=Oi[e]&&Oi[e][t];return n===void 0||this.canUse(e,t)||this.state.credits<n?!1:(this.state.credits-=n,(this.state.unlocked[e]||=[]).push(t),this.save(),!0)}}const D_={pct:i=>xa.finishPct(i.pos,i.field)},k_=new xa;function N_(){const i=new Set,e=new Set,t={touchActive:!1,touch:{steer:0,throttle:0,brake:0},steer:0,usingPad:!1,lastKeyT:0},n={KeyC:"camera",Escape:"pause",KeyP:"pause",KeyR:"reset",KeyV:"look"},s=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);addEventListener("keydown",a=>{a.target&&/INPUT|TEXTAREA|SELECT/.test(a.target.tagName)||(s.has(a.code)&&a.preventDefault(),a.repeat||(i.add(a.code),n[a.code]&&e.add(n[a.code])))}),addEventListener("keyup",a=>i.delete(a.code)),addEventListener("blur",()=>i.clear()),t.setTouch=a=>{t.touch.steer=Le(a.steer||0,-1,1),t.touch.throttle=Le(a.throttle||0,0,1),t.touch.brake=Le(a.brake||0,0,1),t.lastTouchT=performance.now()},t.press=a=>e.add(a),t.consume=a=>e.has(a)?(e.delete(a),!0):!1,t.clear=()=>{e.clear()};const r=(...a)=>a.some(o=>i.has(o));return t.read=(a,o)=>{let c=0,l=0,h=0,u=!1;const f=r("ArrowLeft","KeyA"),d=r("ArrowRight","KeyD");h=(f?1:0)-(d?1:0),c=r("ArrowUp","KeyW")?1:0,l=r("ArrowDown","KeyS","Space")?1:0;const m=navigator.getGamepads?navigator.getGamepads():[],_=m&&[...m].find(g=>g&&g.connected);if(_){const g=Math.abs(_.axes[0])>.08?_.axes[0]:0,p=_.buttons[7]?_.buttons[7].value:0,x=_.buttons[6]?_.buttons[6].value:0;(g||p>.02||x>.02)&&(h=-g,c=Math.max(c,p),l=Math.max(l,x),u=!0,t.steer=Le(-g,-1,1)),_.buttons[0]&&_.buttons[0].pressed&&!t._a&&e.add("look"),t._a=_.buttons[0]&&_.buttons[0].pressed,_.buttons[3]&&_.buttons[3].pressed&&!t._y&&e.add("camera"),t._y=_.buttons[3]&&_.buttons[3].pressed,_.buttons[9]&&_.buttons[9].pressed&&!t._s&&e.add("pause"),t._s=_.buttons[9]&&_.buttons[9].pressed}if(t.touchActive&&performance.now()-(t.lastTouchT||0)<600){const g=t.touch;(g.steer||g.throttle||g.brake)&&(h=g.steer,c=g.throttle,l=g.brake,u=!0,t.steer=g.steer)}if(!u){const g=3.6/(1+o/45),x=(h===0?6.5:g)*(Math.sign(h)!==Math.sign(t.steer)&&t.steer!==0&&h!==0?1.6:1);t.steer+=Le(h-t.steer,-x*a,x*a)}return{steer:Le(t.steer,-1,1),throttle:c,brake:l,analog:!0}},t}const Rt=(i,e,t)=>i<e?e:i>t?t:i,Bi=i=>440*Math.pow(2,(i-69)/12);function Ma(i){let e=i>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Nh=new WeakMap;function ba(i,e="white"){let t=Nh.get(i);if(t||(t={},Nh.set(i,t)),t[e])return t[e];const n=i.sampleRate,s=Math.floor(n*4),r=2048,a=s+r,o=new Float32Array(a),c=Ma(e==="white"?1234:e==="pink"?777:4242);if(e==="white")for(let d=0;d<a;d++)o[d]=c()*2-1;else if(e==="pink"){let d=0,m=0,_=0,g=0,p=0,x=0,M=0;for(let v=0;v<a;v++){const S=c()*2-1;d=.99886*d+S*.0555179,m=.99332*m+S*.0750759,_=.969*_+S*.153852,g=.8665*g+S*.3104856,p=.55*p+S*.5329522,x=-.7616*x-S*.016898,o[v]=(d+m+_+g+p+x+M+S*.5362)*.11,M=S*.115926}}else{let d=0;for(let m=0;m<a;m++){const _=c()*2-1;d=(d+.02*_)/1.02,o[m]=d*3.5}}const l=i.createBuffer(1,s,n),h=l.getChannelData(0);for(let d=0;d<s;d++)h[d]=o[d];for(let d=0;d<r;d++){const m=d/r;h[d]=o[d]*m+o[s+d]*(1-m)}let u=0;for(let d=0;d<s;d++)u=Math.max(u,Math.abs(h[d]));const f=u>0?.95/u:1;for(let d=0;d<s;d++)h[d]*=f;return t[e]=l,l}function id(i,e,t,n,s,r){const a=i.createGain(),o=Math.max(.002,s);return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+o),a.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(o+.01,r)),a.gain.setValueAtTime(0,t+Math.max(o+.01,r)+.005),a.connect(e),a}function $e(i,e,t,n){const s=n.dur??.2,r=id(i,e,t,n.peak??.3,n.attack??.004,s);let a=r;if(n.pan){const l=i.createStereoPanner?i.createStereoPanner():null;l&&(l.pan.value=n.pan,l.connect(r),a=l)}let o=a;if(n.filter){const l=i.createBiquadFilter();l.type=n.filter.type||"lowpass",l.Q.value=n.filter.q??.7,l.frequency.setValueAtTime(n.filter.f,t),n.filter.f1&&l.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),l.connect(a),o=l}const c=i.createOscillator();return c.type=n.type||"sine",c.frequency.setValueAtTime(n.f0,t),n.f1&&c.frequency.exponentialRampToValueAtTime(n.f1,t+s),n.detune&&(c.detune.value=n.detune),c.connect(o),c.start(t),c.stop(t+s+.05),c}function Bt(i,e,t,n){const s=n.dur??.1,r=id(i,e,t,n.peak??.3,n.attack??.002,s);let a=r;if(n.pan&&i.createStereoPanner){const l=i.createStereoPanner();l.pan.value=n.pan,l.connect(r),a=l}const o=i.createBiquadFilter();o.type=n.filter?.type||"bandpass",o.Q.value=n.filter?.q??1,o.frequency.setValueAtTime(n.filter?.f??1500,t),n.filter?.f1&&o.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),o.connect(a);const c=i.createBufferSource();return c.buffer=ba(i,n.kind||"white"),c.loop=!0,c.connect(o),c.start(t,(n.offset??0)%3.5),c.stop(t+s+.05),c}function U_(i,e=1.6,t=3.2,n=99){const s=i.sampleRate,r=Math.floor(s*e),a=i.createBuffer(2,r,s);for(let o=0;o<2;o++){const c=a.getChannelData(o),l=Ma(n+o*17);let h=0;for(let u=0;u<r;u++){const f=Math.pow(1-u/r,t);h+=(l()*2-1-h)*(.35+.65*(1-u/r)),c[u]=h*f*(u<64?u/64:1)}}return a}function fa(i){return new Promise(e=>setTimeout(e,i))}const Nn={C5:523.25,G5:783.99,A5:880,B5:987.77,E6:1318.5,A6:1760},Uh=(i,e,t=.03)=>i*(1+e*t),F_={hover(i,e,t,n=0){return $e(i,e,t,{type:"sine",f0:Uh(2400,n),dur:.035,peak:.07,attack:.002}),Bt(i,e,t,{dur:.012,peak:.035,filter:{type:"highpass",f:6500,q:.7}}),.06},click(i,e,t,n=0){return Bt(i,e,t,{dur:.014,peak:.2,filter:{type:"highpass",f:3500,q:.7}}),$e(i,e,t,{type:"sine",f0:Uh(1100,n),f1:700,dur:.075,peak:.28,attack:.002}),$e(i,e,t,{type:"triangle",f0:330,dur:.05,peak:.1,attack:.002}),.12},confirm(i,e,t){return $e(i,e,t,{type:"square",f0:Nn.C5,dur:.1,peak:.12,filter:{type:"lowpass",f:3200}}),$e(i,e,t+.07,{type:"square",f0:Nn.G5,dur:.24,peak:.13,filter:{type:"lowpass",f:3600,f1:1200}}),$e(i,e,t+.07,{type:"sine",f0:Nn.G5*2,dur:.22,peak:.07}),$e(i,e,t,{type:"sine",f0:130,f1:100,dur:.18,peak:.22,attack:.003}),Bt(i,e,t+.07,{dur:.16,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),.35},back(i,e,t){return $e(i,e,t,{type:"sine",f0:740,f1:420,dur:.12,peak:.24,attack:.002}),Bt(i,e,t,{dur:.012,peak:.1,filter:{type:"highpass",f:3e3,q:.7}}),.16},error(i,e,t){for(const n of[0,.13])$e(i,e,t+n,{type:"sawtooth",f0:165,dur:.1,peak:.2,filter:{type:"lowpass",f:800}}),$e(i,e,t+n,{type:"square",f0:110,dur:.1,peak:.1});return .28},tab(i,e,t){return Bt(i,e,t,{dur:.06,peak:.12,filter:{type:"bandpass",f:2500,f1:5200,q:1.5}}),$e(i,e,t,{type:"sine",f0:1800,dur:.035,peak:.12,attack:.002}),.08},toggle(i,e,t,n=!0){return $e(i,e,t,{type:"sine",f0:n?600:1200,f1:n?1200:560,dur:.09,peak:.22,attack:.002}),Bt(i,e,t,{dur:.01,peak:.08,filter:{type:"highpass",f:4e3,q:.7}}),.12},whoosh(i,e,t){return Bt(i,e,t,{kind:"pink",dur:.5,attack:.14,peak:.34,filter:{type:"bandpass",f:250,f1:4200,q:1}}),Bt(i,e,t+.05,{kind:"white",dur:.35,attack:.12,peak:.07,filter:{type:"highpass",f:3e3,f1:8e3,q:.7}}),.55},intro(i,e,t){$e(i,e,t,{type:"sine",f0:40,f1:110,dur:1.75+.1,peak:.26,attack:1.5}),Bt(i,e,t,{kind:"pink",dur:1.75+.05,attack:1.75-.1,peak:.28,filter:{type:"bandpass",f:200,f1:8e3,q:2}});for(const r of[110,164.81,246.94,261.63,392])$e(i,e,t,{type:"sawtooth",f0:r,dur:1.75+.2,peak:.05,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}}),$e(i,e,t,{type:"sawtooth",f0:r*1.004,dur:1.75+.2,peak:.035,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}});const s=t+1.75;$e(i,e,s,{type:"sine",f0:120,f1:34,dur:.75,peak:.55,attack:.003}),Bt(i,e,s,{kind:"white",dur:1,peak:.26,attack:.002,filter:{type:"highpass",f:1800,f1:900,q:.6}});for(const[r,a]of[[440,.1],[659.25,.09],[880,.08]])$e(i,e,s,{type:"sawtooth",f0:r,dur:1,peak:a,attack:.003,filter:{type:"lowpass",f:5200,f1:700,q:.9}}),$e(i,e,s+.24,{type:"sawtooth",f0:r,dur:.8,peak:a*.4,attack:.003,filter:{type:"lowpass",f:4200,f1:700,q:.9}});return 1.75+1.1},countdown(i,e,t,n=3){return $e(i,e,t,{type:"sine",f0:880,dur:.16,peak:.3,attack:.004}),$e(i,e,t,{type:"square",f0:440,dur:.12,peak:.05,filter:{type:"lowpass",f:1500}}),.2},go(i,e,t){return $e(i,e,t,{type:"square",f0:1320,dur:.5,peak:.12,filter:{type:"lowpass",f:4e3,f1:1500}}),$e(i,e,t,{type:"sine",f0:660,dur:.5,peak:.28,attack:.004}),$e(i,e,t,{type:"sine",f0:90,f1:45,dur:.35,peak:.35,attack:.003}),Bt(i,e,t,{kind:"pink",dur:.4,attack:.05,peak:.16,filter:{type:"bandpass",f:400,f1:3800,q:1}}),.6},lap(i,e,t){return $e(i,e,t,{type:"sine",f0:Nn.B5,dur:.5,peak:.22,attack:.003}),$e(i,e,t,{type:"sine",f0:Nn.B5*2,dur:.28,peak:.07,attack:.003}),$e(i,e,t+.12,{type:"sine",f0:Nn.E6,dur:.62,peak:.2,attack:.003}),$e(i,e,t+.12,{type:"sine",f0:Nn.E6*2,dur:.35,peak:.06,attack:.003}),.8},bestLap(i,e,t){return[Nn.A5,1108.73,Nn.E6,Nn.A6].forEach((n,s)=>{$e(i,e,t+s*.075,{type:"triangle",f0:n,dur:.38,peak:.17,attack:.003}),$e(i,e,t+s*.075,{type:"sine",f0:n*2,dur:.22,peak:.05,attack:.003})}),Bt(i,e,t+.28,{dur:.5,attack:.05,peak:.05,filter:{type:"highpass",f:6500,q:.7}}),$e(i,e,t,{type:"sine",f0:110,dur:.4,peak:.16,attack:.004}),.95},sponsor(i,e,t){for(const n of[523.25,659.25,783.99,1174.66])$e(i,e,t,{type:"sawtooth",f0:n,dur:.55,peak:.05,attack:.004,filter:{type:"lowpass",f:4200,f1:1e3}});return $e(i,e,t+.18,{type:"sine",f0:1568,dur:.09,peak:.16,attack:.002}),$e(i,e,t+.25,{type:"sine",f0:2093,dur:.55,peak:.16,attack:.002}),Bt(i,e,t+.18,{dur:.04,peak:.12,filter:{type:"highpass",f:5e3,q:.7}}),Bt(i,e,t+.3,{dur:.6,attack:.08,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),$e(i,e,t,{type:"sine",f0:100,f1:60,dur:.3,peak:.25,attack:.003}),1},crash(i,e,t,n=.6){n=Rt(n,0,1);const s=Ma(Math.floor(n*1e3)+5);$e(i,e,t,{type:"sine",f0:95,f1:28,dur:.25+.3*n,peak:.2+.4*n,attack:.002}),Bt(i,e,t,{kind:"white",dur:.12+.3*n,peak:.15+.25*n,attack:.002,filter:{type:"bandpass",f:900,f1:250,q:.8}}),Bt(i,e,t,{kind:"pink",dur:.06+.2*n,peak:.1+.18*n,attack:.001,filter:{type:"lowpass",f:3e3,q:.6}});for(const r of[420,613])$e(i,e,t,{type:"square",f0:r,dur:.2+.4*n,peak:.03+.07*n,attack:.002,filter:{type:"lowpass",f:1800,f1:500}});if(n>.4)for(let r=0;r<3+Math.floor(n*5);r++)$e(i,e,t+.05+s()*.35,{type:"sine",f0:2e3+s()*3e3,dur:.05,peak:.04*n,attack:.001});return .3+.7*n}},Fh={cockpit:{lp:3200,wind:.65,squeal:.7,rumble:1.25,crowd:.35},chase:{lp:12e3,wind:1,squeal:1,rumble:1,crowd:.8},broadcast:{lp:12e3,wind:.5,squeal:1,rumble:.7,crowd:1.1}};function O_(i,e){const t=i.createGain();t.gain.value=1;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.5,t.connect(n),n.connect(e);const s=[],r=(S,T=0)=>{const E=i.createBufferSource();return E.buffer=ba(i,S),E.loop=!0,E.start(0,T),s.push(E),E},a=(S,T,E)=>{const C=i.createBiquadFilter();return C.type=S,C.frequency.value=T,C.Q.value=E,C},o=(S=0)=>{const T=i.createGain();return T.gain.value=S,T},c={g:o(),f:a("bandpass",500,.6)};r("pink",.3).connect(c.f),c.f.connect(c.g),c.g.connect(t);const l={g:o(),f:a("bandpass",1500,9),o:i.createOscillator(),og:o(.25)};l.o.type="sawtooth",l.o.frequency.value=900,s.push(l.o),l.o.start(),r("white",1.1).connect(l.f),l.o.connect(l.og),l.og.connect(l.f),l.f.connect(l.g),l.g.connect(t);const u={g:o(),f:a("lowpass",160,.7),am:o(.55),lfo:i.createOscillator(),lg:o(.45)};u.lfo.type="sine",u.lfo.frequency.value=20,s.push(u.lfo),u.lfo.start(),u.lfo.connect(u.lg),u.lg.connect(u.am.gain),r("brown",.7).connect(u.f),u.f.connect(u.am),u.am.connect(u.g),u.g.connect(t);const f={g:o(),f:a("lowpass",700,.6),am:o(.7),lfo:i.createOscillator(),lg:o(.3)};f.lfo.type="triangle",f.lfo.frequency.value=9,s.push(f.lfo),f.lfo.start(),f.lfo.connect(f.lg),f.lg.connect(f.am.gain),r("pink",1.9).connect(f.f),f.f.connect(f.am),f.am.connect(f.g),f.g.connect(t);const d={g:o(),f:a("bandpass",900,.45),am:o(.8),lfo:i.createOscillator(),lg:o(.2)};d.lfo.type="sine",d.lfo.frequency.value=.17,s.push(d.lfo),d.lfo.start(),d.lfo.connect(d.lg),d.lg.connect(d.am.gain),r("pink",2.6).connect(d.f),d.f.connect(d.am),d.am.connect(d.g),d.g.connect(t);const m={g:o(),f:a("bandpass",520,.7)};r("pink",3.1).connect(m.f),m.f.connect(m.g),m.g.connect(t);const _={g:o(),f:a("bandpass",1400,3),o:i.createOscillator(),og:o(.12),am:o(.6),lfo:i.createOscillator(),lg:o(.4)};_.o.type="sawtooth",_.o.frequency.value=230,s.push(_.o),_.o.start(),_.lfo.type="square",_.lfo.frequency.value=11,s.push(_.lfo),_.lfo.start(),_.lfo.connect(_.lg),_.lg.connect(_.am.gain),r("white",.2).connect(_.f),_.o.connect(_.og),_.og.connect(_.f),_.f.connect(_.am),_.am.connect(_.g),_.g.connect(t);let g=Fh.cockpit,p={speed:0,slip01:0,offTrack:!1,drafting01:0,crowd01:0,wall01:0},x=!1;const M=.06,v={update(S={},T){p={...p,...S};const E=T??i.currentTime,C=x?0:1,y=Math.max(0,p.speed||0),b=Rt(y/90,0,1),P=Rt(p.slip01||0,0,1),B=Math.pow(Rt((P-.3)/.7,0,1),1.4);c.f.frequency.setTargetAtTime(350+900*b,E,M),c.g.gain.setTargetAtTime(C*.34*b*b*g.wind,E,M),l.o.frequency.setTargetAtTime(640+520*P+y*2.2,E,.03),l.f.frequency.setTargetAtTime(1100+900*P+y*4,E,.03),l.g.gain.setTargetAtTime(C*.85*B*g.squeal*(.4+.6*b),E,.03);const k=(p.offTrack,0);u.lfo.frequency.setTargetAtTime(6+y*.5,E,M),u.g.gain.setTargetAtTime(C*(p.offTrack?.5:.1)*b*g.rumble+k,E,M),f.lfo.frequency.setTargetAtTime(5+y*.3,E,M),f.g.gain.setTargetAtTime(C*(p.offTrack?.55:0)*(.2+.8*b),E,M),d.g.gain.setTargetAtTime(C*.24*Rt(p.crowd01||0,0,1)*g.crowd,E,.25),m.f.frequency.setTargetAtTime(350+700*b,E,M),m.g.gain.setTargetAtTime(C*.14*Rt(p.drafting01||0,0,1)*(.3+.7*b),E,.12),_.g.gain.setTargetAtTime(C*.55*Rt(p.wall01||0,0,1),E,.02)},setPerspective(S){g=Fh[S]||g,n.frequency.setTargetAtTime(g.lp,i.currentTime,.1),v.update({})},setMute(S){x=!!S,v.update({})},dispose(){for(const S of s)try{S.stop()}catch{}try{t.disconnect()}catch{}}};return v}const B_=`
const TWO_PI = 6.283185307179586;
const BANK = [0, 1, 1, 0, 1, 0, 0, 1];
// per firing: deviation of the pulse size from the base. Gap since the previous firing on the same bank in quarter turns is
// 2,2,1,3,2,2,1,3: the second pulse of a doublet is weak, the one after the long gap is big -> period of 4 slots (one revolution).
const LUMP = [0, 0, -0.55, 0.60, 0, 0, -0.55, 0.60];
const RING = 1024, RM = 1023;     // impulse rings (power of two)
const E1 = 2.718281828;

// loudness trim (dB) by rpm, knots every 1000 rpm from 0, applied to the whole voice. Calibrated so that the K-weighted loudness of
// steady full-throttle renders is flat over the working range of the era (see tools/audio/calibrate.py).
const TRIM_E05 = [-2.57, -2.57, 0.43, 0.94, 0.91, 0.04, -2.58, -2.47, -1.5, -1.3];
const TRIM_E15 = [0.27, 0.27, 3.27, 1.98, 1.48, 2.79, -0.59, -1.34, -0.17, 1];
const TRIM_E87 = [1.62, 1.62, 4.62, 4.07, 4.37, 3.88, 0.3, 0.5, 1.16, 1.16];

// per-era voicing. Multipliers are relative to the e05 base voice.
const PROFILES = {
  e05: { pS: 1.0, shelfDb: 10.0, shelfF: 150, boomDb: -1.0, boomF: 92, boomQ: 1.6, rumble: 3.0, rumF: 62, idleDb: 4.88, rpmRef: 9000, limit: 9250, hiA: 5500, hiB: 8800, hiCap: 1.0, fade: 1.0, lumpK: 1.0, cyl: 1.0, tauLo: 0.030, tauD: 0.022, crack: 1.35, cn: 1.0, fcMul: 1.25, angFc: 1200,
         fb0: 0.20, fbD: 0.08, drive: 1.25, w1: 1.0, w2: 1.5, w3: 1.6, w4: 2.2, intake: 1.0, intakeF: 1.0, howl: 1.4, whine: 1.8, valve: 1.4, valveF: 3400, pops: 1.0, burble: 1.0, burbT: 1.1,
         head: 1.7, gainDb: 1.4, hiDb: 1.8, scream: 2.6, trim: TRIM_E05 },
  e15: { pS: 0.66, shelfDb: 5.5, shelfF: 190, boomDb: -5.0, boomF: 82, boomQ: 1.6, rumble: 1.2, rumF: 58, idleDb: 7.14, rpmRef: 9000, limit: 9250, hiA: 5500, hiB: 8800, hiCap: 0.10, fade: 0.30, lumpK: 1.0, cyl: 1.0, tauLo: 0.032, tauD: 0.022, crack: 0.95, cn: 0.8, fcMul: 0.55, angFc: 700,
         fb0: 0.22, fbD: 0.04, drive: 1.2, w1: 1.15, w2: 1.35, w3: 0.7, w4: 0.1, intake: 0.42, intakeF: 0.5, howl: 0.04, whine: 0.0, valve: 0.12, valveF: 2600, pops: 0.8, burble: 0.8, burbT: 1.1,
         head: 1.7, gainDb: 1.2, scream: 0.12, trim: TRIM_E15 },
  e87: { pS: 0.79, shelfDb: 9.0, shelfF: 190, boomDb: -3.0, boomF: 84, boomQ: 1.6, rumble: 2.8, rumF: 60, idleDb: 3.96, rpmRef: 7560, limit: 7770, hiA: 4500, hiB: 7300, hiCap: 0.12, fade: 0.25, lumpK: 1.15, cyl: 1.25, tauLo: 0.034, tauD: 0.022, crack: 2.0, cn: 1.5, fcMul: 1.3, angFc: 1200,
         fb0: 0.10, fbD: 0.02, drive: 1.3, w1: 1.6, w2: 1.9, w3: 1.4, w4: 0.8, intake: 1.2, intakeF: 0.8, howl: 0.04, whine: 0.0, valve: 2.2, valveF: 2200, pops: 2.5, burble: 2.6, burbT: 1.7,
         head: 1.5, gainDb: 1.8, hiDb: 1.8, scream: 2.0, trim: TRIM_E87 },
};

class SVF {
  constructor() { this.ic1 = 0; this.ic2 = 0; this.a1 = 0; this.a2 = 0; this.a3 = 0; this.k = 1; }
  set(fc, q, sr) {
    const g = Math.tan(Math.PI * Math.min(fc, sr * 0.45) / sr); this.k = 1 / q;
    this.a1 = 1 / (1 + g * (g + this.k)); this.a2 = g * this.a1; this.a3 = g * this.a2;
  }
  // unity-gain band-pass
  bp(x) {
    const v3 = x - this.ic2; const v1 = this.a1 * this.ic1 + this.a2 * v3; const v2 = this.ic2 + this.a2 * this.ic1 + this.a3 * v3;
    this.ic1 = 2 * v1 - this.ic1; this.ic2 = 2 * v2 - this.ic2; return this.k * v1;
  }
  hp(x) {
    const v3 = x - this.ic2; const v1 = this.a1 * this.ic1 + this.a2 * v3; const v2 = this.ic2 + this.a2 * this.ic1 + this.a3 * v3;
    this.ic1 = 2 * v1 - this.ic1; this.ic2 = 2 * v2 - this.ic2; return x - this.k * v1 - v2;
  }
}

class V8Processor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'rpm', defaultValue: 900, minValue: 0, maxValue: 16000, automationRate: 'k-rate' },
      { name: 'throttle', defaultValue: 0, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'load', defaultValue: 0, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'pitch', defaultValue: 1, minValue: 0.5, maxValue: 2, automationRate: 'k-rate' },
      { name: 'detail', defaultValue: 1, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'active', defaultValue: 1, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'limit', defaultValue: 9250, minValue: 1000, maxValue: 16000, automationRate: 'k-rate' }
    ];
  }
  constructor(options) {
    super();
    const po = (options && options.processorOptions) || {};
    this.P = PROFILES[po.era] || PROFILES.e05;
    let seed = (po.seed || 1) >>> 0; if (!seed) seed = 1;
    this.ns = (seed * 2654435761) >>> 0 || 12345;
    const R = () => { this.ns ^= this.ns << 13; this.ns >>>= 0; this.ns ^= this.ns >>> 17; this.ns ^= this.ns << 5; this.ns >>>= 0; return this.ns / 4294967296; };
    for (let i = 0; i < 8; i++) R();
    this.outGain = po.gain || 0.5;
    this.rpm = po.rpm0 || 900; this.thr = 0; this.load = 0; this.pitch = 1; this.actEnv = 0; this.wob = 0; this.wobT = 0;
    this.cp = 0; this.lastIdx = -1;
    // per car variation (all from the seed)
    const cv = this.P.cyl;
    this.cylAmp = []; for (let i = 0; i < 8; i++) this.cylAmp.push(1 + (R() * 2 - 1) * 0.24 * cv);
    this.bankAmp = [1 + (R() * 2 - 1) * 0.12 * cv, 1 + (R() * 2 - 1) * 0.12 * cv];
    this.lumpVar = 0.88 + R() * 0.24; this.howlVar = 0.92 + R() * 0.16; this.crkVar = 0.8 + R() * 0.4;
    const sr = sampleRate; this.sr = sr;
    // impulse rings (body, crack) per bank
    this.rb = [new Float32Array(RING), new Float32Array(RING)]; this.rc = [new Float32Array(RING), new Float32Array(RING)]; this.rp = 0;
    // pulse shapers (2 poles) and crack filters, per bank
    this.b1 = [0, 0]; this.b2 = [0, 0]; this.k1 = [0, 0]; this.k2 = [0, 0];
    this.cB = 0.05; this.cK1 = 0.1; this.cK2 = 0.3; this.kN = 5;
    // header / collector comb per bank
    this.SZ = 2048; this.dl = [new Float32Array(this.SZ), new Float32Array(this.SZ)]; this.wp = 0; this.lpc = [0, 0];
    this.D = [Math.round(sr * 0.0062 * (0.985 + R() * 0.03)), Math.round(sr * 0.0062 * (0.985 + R() * 0.03))];
    this.dcx = 0; this.dcy = 0; this.dcR = 1 - 2 * Math.PI * 40 / sr;
    this.f1 = new SVF(); this.f2 = new SVF(); this.f3 = new SVF(); this.f4 = new SVF();
    this.fs = 0.94 + R() * 0.12;
    this.lp1 = 0; this.lp2 = 0; this.lpA = 0.2;
    this.lsv = 0; this.cLs = 1 - Math.exp(-2 * Math.PI * this.P.shelfF / sr); this.boom = new SVF(); this.boom.set(this.P.boomF, this.P.boomQ, sr); this.rum = new SVF(); this.rum.set(this.P.rumF, 1.0, sr); this.rumM = 1; this.rumT = 1; this.kRum = 0.01; this.rumG = 1; this.kCut = 1 - Math.exp(-1 / (0.002 * sr)); this.rpmS = 900;
    this.scr = new SVF(); this.scrG = 0; this.scrT = 0; this.intake = new SVF(); this.valve = new SVF(); this.pop = new SVF(); this.howl = new SVF(); this.crk = new SVF(); this.cbp = new SVF();
    this.valve.set(this.P.valveF, 0.8, sr);
    this.cenv = 0; this.cDec = 0.9; this.cnAmt = 0;
    this.popEnv = 0; this.popDecay = Math.exp(-1 / (sr * 0.011));
    this.crkEnv = 0; this.crkDecay = Math.exp(-1 / (sr * 0.0016));
    this.thrRef = 0; this.liftLatch = false; this.barkN = 0; this.barkT = 0; this.barkAmp = 0; this.burb = 0;
    this.ws = 0; this.wc = 1;
    this.lim = false; this.cutPhase = 0; this.cutNow = false;
    this.limK = 0.62 * this.P.head; this.limR = 0.30 * this.P.head;   // soft limiter: transparent below limK, asymptote limK + limR
    // control values interpolated across each block
    this.g = new Float64Array(16); this.T = new Float64Array(16); this.dG = new Float64Array(16);
    this.gInit = false;
    this.kR = 1 - Math.exp(-1 / (sr * 0.018)); this.kT = 1 - Math.exp(-1 / (sr * 0.030)); this.kL = 1 - Math.exp(-1 / (sr * 0.050));
    this.kP = 1 - Math.exp(-1 / (sr * 0.025)); this.kA = 1 - Math.exp(-1 / (sr * 0.030));
    // block-level firing parameters (set in process)
    this.lk = 1; this.jit = 0.1; this.jt = 0; this.crackAmt = 0; this.baseAmp = 1; this.miss = 0; this.hiV = 0; this.loadV = 0; this.rpmV = 900; this.thrV = 0; this.fullV = true; this.hiEV = 0;
  }
  rnd() { let x = this.ns; x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; this.ns = x; return x / 4294967296; }
  // inject a body impulse (area A) and a crack impulse (area Ac) for bank b, fr = samples since the slot boundary (0..1), dly in samples
  inject(b, A, Ac, fr, dly) {
    const x = (1 - fr) + dly; const i0 = x | 0; const w = x - i0; const p = this.rp + i0;
    const rb = this.rb[b]; rb[p & RM] += A * (1 - w); rb[(p + 1) & RM] += A * w;
    if (Ac !== 0) { const rc = this.rc[b]; rc[p & RM] += Ac * (1 - w); rc[(p + 1) & RM] += Ac * w; }
  }
  fire(idx, fr) {
    const bank = BANK[idx]; const P = this.P; const loadEff = this.loadV;
    if (this.cutNow) {
      if (this.rnd() < 0.35) {
        this.inject(bank, 0.7 * E1 / this.cB, 0.5 * this.kN * P.crack, fr, 0);
        if (this.fullV && this.rnd() < 0.5) { this.crkEnv = 0.6 + 0.4 * this.rnd(); this.crk.set(1300 + this.rnd() * 2600, 1.5, this.sr); }
      }
      return;
    }
    // cam-lope: at low rpm and light load a cylinder sometimes fires weakly and the timing wanders
    let a = 1;
    if (this.miss > 0 && this.rnd() < this.miss) a = 0.25 + 0.4 * this.rnd();
    const amp = a * this.baseAmp * this.cylAmp[idx] * this.bankAmp[bank] * (1 + this.lk * LUMP[idx]) * (1 + this.jit * (this.rnd() * 2 - 1));
    const slotSamp = this.sr * 15 / Math.max(this.rpmS, 200);        // samples per firing slot
    const dly = Math.min(240, slotSamp * this.jt * this.rnd());
    const ca = this.crackAmt * (0.6 + 0.4 * amp);
    this.cenv += amp * this.cnAmt;
    this.inject(bank, amp * E1 / this.cB, ca * this.kN, fr, dly);
    // extra bark on the firing off throttle (open-header crackle) and random crackle bursts
    if (this.thrV < 0.08 && this.rpmV > 2200 && this.rnd() < (0.05 + 0.10 * Math.min(1, this.rpmV / P.rpmRef)) * P.pops) this.inject(bank, 0.8 * (0.5 + this.rnd()) * E1 / this.cB, 0.5 * this.kN * P.crack, fr, 0);
    if (this.fullV && this.rnd() < (0.10 + 0.22 * loadEff) * (1 - 0.65 * this.hiEV) * this.crkVar * P.pops) { this.crkEnv = 0.35 + 0.65 * this.rnd(); this.crk.set(1300 + this.rnd() * 2800, 1.5, this.sr); }
  }
  process(inputs, outputs, parameters) {
    const out = outputs[0]; const o0 = out[0]; const N = o0.length; const sr = this.sr; const P = this.P;
    const actT = parameters.active[0];
    if (actT < 0.5 && this.actEnv < 0.0004) { for (let c = 0; c < out.length; c++) out[c].fill(0); this.actEnv = 0; return true; }
    const rpmT = parameters.rpm[0], thrT = parameters.throttle[0], loadT = parameters.load[0];
    const pitchT = parameters.pitch[0], detail = parameters.detail[0], limit = parameters.limit[0];
    const full = detail >= 0.5; this.fullV = full;

    // rev limiter hysteresis (ignition cut at ~20 Hz, 45 percent of the time)
    if (!this.lim && rpmT >= limit * 0.985) this.lim = true; else if (this.lim && rpmT < limit * 0.965) this.lim = false;

    // ---------------- block-level derived values (state at block start) ----------------
    const rpmB = this.rpm * this.pitch;
    const rpmS = rpmB * P.pS; this.rpmS = rpmS;      // crank rate that sets the pitch
    const rpmN0 = Math.min(1, Math.max(0, rpmB / P.rpmRef));
    const th0 = Math.min(1, Math.max(0, (rpmB - P.hiA) / (P.hiB - P.hiA)));
    const hi = th0 * th0 * (3 - 2 * th0);
    const hiE = hi * P.hiCap, hiF = hi * P.fade;
    const ang = Math.pow(rpmN0, 1.4);
    const loadEff = Math.max(this.load, this.thr * 0.85);
    this.hiV = hi; this.hiEV = hiE; this.loadV = loadEff; this.rpmV = rpmB; this.thrV = this.thr;
    // pulse shapers: widths fixed in crank angle (cycle = 120 / rpm s)
    const cyc = 120 / Math.max(rpmS, 200);
    const tauB = Math.max(3.5 / sr, (P.tauLo - P.tauD * hiE) * cyc);
    this.cB = 1 - Math.exp(-1 / (tauB * sr));
    const tk1 = (0.00030 - 0.00012 * hiE), tk2 = 0.00007;
    this.cK1 = 1 - Math.exp(-1 / (tk1 * sr)); this.cK2 = 1 - Math.exp(-1 / (tk2 * sr)); this.kN = 1 / (this.cK2 - this.cK1);
    // firing amplitude model
    this.baseAmp = 0.45 + 0.55 * loadEff;
    this.lk = (1 - 0.75 * hiF) * this.lumpVar * P.lumpK;
    this.jit = (0.16 * (1 - rpmN0) * (1 - rpmN0) * (1.0 + 0.8 * (1 - loadEff)) + 0.035) * (1 - 0.5 * hiF);
    this.jt = (0.10 * (1 - rpmN0) * (1 - rpmN0) * (0.4 + 0.6 * (1 - loadEff))) * (1 - hiF);
    this.miss = 0.16 * (1 - rpmN0) * (1 - rpmN0) * (1 - rpmN0) * (1 - loadEff) * (1 - hiF);
    this.cnAmt = full ? 0.18 * P.cn * Math.pow(loadEff, 1.5) * (1 + 0.5 * hiE + 0.5 * ang) : 0;
    this.cDec = Math.exp(-1 / (0.22 * (15 / Math.max(rpmS, 200)) * sr));
    this.crackAmt = Math.max(0, (loadEff - 0.25)) * (0.55 + 0.45 * hiE + 0.35 * ang) * 0.9 * P.crack;
    // targets of the interpolated controls
    const bright = Math.pow(loadEff, 0.8);
    const fc = (1000 + 3200 * bright + 300 * rpmN0 + 5200 * hiE * (0.35 + 0.65 * bright) + P.angFc * ang * bright) * P.fcMul;
    this.lpA = 1 - Math.exp(-2 * Math.PI * fc / sr);
    const fs = this.fs * (0.5 + 0.5 * P.pS);      // exhaust formants follow half of the era pitch scale (deeper pipe for the pure eras)
    this.scr.set(1900 * fs, 0.8, sr); this.scrT = (P.scream || 0) * (0.25 + 0.75 * loadEff) * (0.08 + 0.92 * Math.pow(rpmN0, 1.3)) * (full ? 1 : 0); this.f1.set(130 * fs, 0.9, sr); this.f2.set(430 * fs, 1.0, sr); this.f3.set(1150 * fs, 1.2, sr); this.f4.set(2700 * fs, 1.2, sr);
    // loudness trim (linear between 1000 rpm knots)
    const trim = P.trim; const kx = Math.min(8.999, Math.max(0, rpmB / 1000)); const k0 = kx | 0; const tdb = trim[k0] + (trim[k0 + 1] - trim[k0]) * (kx - k0);
    // light-throttle compensation at low rpm (idle / grid): the part-throttle voice is much quieter than full throttle, which made the start of a race weak
    const idleW = Math.min(1, Math.max(0, (3700 - rpmB) / 1100)), idleDb = P.idleDb * (1 - loadEff) * idleW;
    const T = this.T, G = this.g, dG = this.dG;
    T[0] = 1; T[1] = 1.0; T[2] = P.w1 * (0.28 - 0.10 * hiE); T[3] = P.w2 * 0.38; T[4] = P.w3 * (0.28 + 0.25 * hiE);
    T[5] = P.w4 * (0.40 * hiE + 0.10 * ang) * (0.4 + 0.6 * loadEff);
    T[6] = P.fb0 - P.fbD * hiE; T[7] = (0.9 + 0.6 * loadEff + 0.5 * ang * loadEff) * P.drive; T[8] = Math.pow(10, (tdb + idleDb + (P.gainDb || 0) - (P.hiDb || 0) * Math.min(1, Math.max(0, (rpmB - 4000) / 2500))) / 20);
    const bassLoad = 0.55 + 0.45 * loadEff;       // bass stage backs off with the throttle so a lift-off still drops clearly
    T[9] = (Math.pow(10, P.shelfDb / 20) - 1) * bassLoad; T[10] = Math.pow(10, P.boomDb / 20) * bassLoad;
    T[11] = full ? Math.pow(this.thr, 1.6) * (0.04 + 0.42 * rpmN0) * 1.4 * P.intake : 0;
    T[12] = full ? hi * P.howl * Math.pow(this.thr, 1.2) * 1.6 : 0;
    T[13] = full ? 0.020 * (1.2 - rpmN0) * P.valve : 0;
    T[14] = full ? 0.012 * (0.3 + rpmN0) * (1 - 0.6 * this.thr) * P.whine : 0;
    T[15] = full ? P.rumble * (0.12 + 0.88 * loadEff) : 0;         // low rumble (fixed 40-110 Hz noise band, lump-modulated): keeps chest weight at any rpm
    this.kRum = 1 - Math.exp(-1 / (0.3 * 15 / Math.max(rpmS, 200) * sr));
    if (!this.gInit) { for (let k = 0; k < 16; k++) G[k] = T[k]; this.gInit = true; }
    for (let k = 0; k < 16; k++) dG[k] = (T[k] - G[k]) / N;
    let gBody = G[0], gDry = G[1], gW1 = G[2], gW2 = G[3], gW3 = G[4], gW4 = G[5], gFb = G[6], gDrive = G[7], gTrim = G[8], gShelf = G[9], gBoom = G[10], gIntake = G[11], gHowl = G[12], gValve = G[13], gWhine = G[14], gRum = G[15];
    const dBody = dG[0], dDry = dG[1], dW1 = dG[2], dW2 = dG[3], dW3 = dG[4], dW4 = dG[5], dFb = dG[6], dDrive = dG[7], dTrim = dG[8], dShelf = dG[9], dBoom = dG[10], dIntake = dG[11], dHowl = dG[12], dValve = dG[13], dWhine = dG[14], dRum = dG[15];
    const hiK = 1 - 0.32 * hiE;
    if (full) {
      this.cbp.set(700 + 0.14 * rpmS, 0.9, sr);
      this.intake.set(250 + rpmS * 0.22 * P.intakeF, 1.1, sr);
      this.howl.set((rpmS / 15 * 3.0 + 250) * this.howlVar, 7, sr);
    }
    // idle governor hunting
    if (this.rpm < 1600) { this.wobT = (this.rnd() * 2 - 1) * 0.014 * (1 - this.rpm / 1600); }
    else this.wobT = 0;
    // off throttle: afterfire energy decays after a lift; pops / burble are Poisson per block
    this.burb *= Math.exp(-N / (sr * P.burbT));
    if (full && this.thr < 0.10 && this.rpm > 2400) {
      const offAmt = (1 - this.thr / 0.10);
      const rate = (3 + 22 * this.burb) * P.burble * Math.min(1, (this.rpm - 2400) / 5000) * offAmt;
      if (this.rnd() < rate * N / sr) {
        this.popEnv = (0.5 + this.rnd() * 0.9) * (0.8 + 0.2 * P.pops); this.pop.set(400 + this.rnd() * 1100, 1.4, sr);
        this.inject(this.rnd() < 0.5 ? 0 : 1, (0.5 + 0.7 * this.rnd()) * E1 / this.cB, 0.4 * this.kN * P.crack, 0, 0);
      }
    }
    // throttle lift bark: peak-hold of the throttle (0.25 s fall), a quick lift to near closed fires a short burst of loud pops
    this.thrRef = Math.max(this.thr, this.thrRef - 4 * N / sr);
    if (this.liftLatch) { if (this.thr > 0.30) this.liftLatch = false; }
    else if (full && this.thr < 0.14 && this.thrRef > 0.5 && this.rpm > 2400) {
      this.liftLatch = true; this.barkN = Math.round((3 + ((this.rnd() * 3) | 0)) * (0.7 + 0.3 * P.pops)); this.barkT = 0; this.barkAmp = Math.min(1, 0.45 + this.rpm / P.rpmRef * 0.55); this.burb = 1;
    }
    if (this.barkN > 0) {
      this.barkT -= N;
      if (this.barkT <= 0) {
        const a = this.barkAmp;
        this.popEnv = Math.max(this.popEnv, (1.2 + this.rnd() * 0.7) * a); this.pop.set(600 + this.rnd() * 1200, 1.4, sr);
        this.inject(this.rnd() < 0.5 ? 0 : 1, 1.0 * a * E1 / this.cB, 0.9 * a * this.kN * P.crack, 0, 0);
        this.crkEnv = Math.max(this.crkEnv, 1.0 * a); this.crk.set(1500 + this.rnd() * 2200, 1.5, sr);
        this.barkAmp *= 0.72; this.barkN--; this.barkT = (0.028 + this.rnd() * 0.05) * sr;
      }
    }
    // gear whine phasor: constant rotation per block (14.5 x crank frequency), renormalised each block
    const wd = TWO_PI * (rpmS / 60 * 14.5) / sr; const wcd = Math.cos(wd), wsd = Math.sin(wd); let ws = this.ws, wc = this.wc;
    { const m = 1 / Math.sqrt(ws * ws + wc * wc + 1e-30); ws *= m; wc *= m; }

    // ---------------- per-sample loop ----------------
    this.scrG += (this.scrT - this.scrG) * 0.25; const gScr = this.scrG; const cB = this.cB, cK1 = this.cK1, cK2 = this.cK2, lpA = this.lpA; const limK = this.limK, limR = this.limR; const outGain = this.outGain;
    const rb0 = this.rb[0], rb1 = this.rb[1], rc0 = this.rc[0], rc1 = this.rc[1];
    const dl0 = this.dl[0], dl1 = this.dl[1]; const SZ = this.SZ, SM = SZ - 1; const D0 = this.D[0], D1 = this.D[1];
    let b1a = this.b1[0], b1b = this.b1[1], b2a = this.b2[0], b2b = this.b2[1], k1a = this.k1[0], k1b = this.k1[1], k2a = this.k2[0], k2b = this.k2[1];
    let lpc0 = this.lpc[0], lpc1 = this.lpc[1]; let rp = this.rp; let wp = this.wp;
    let rpm = this.rpm, thr = this.thr, load = this.load, pitch = this.pitch, wob = this.wob, actEnv = this.actEnv, cp = this.cp;
    let lp1 = this.lp1, lp2 = this.lp2, dcx = this.dcx, dcy = this.dcy; const dcR = this.dcR;
    const f1 = this.f1, f2 = this.f2, f3 = this.f3, f4 = this.f4;
    const kR = this.kR, kT = this.kT, kL = this.kL, kP = this.kP, kA = this.kA, wobT = this.wobT; const actTarget = actT > 0.5 ? 1 : 0;
    const pS = P.pS; const cLs = this.cLs, boom = this.boom, kRum = this.kRum; let lsv = this.lsv, rumM = this.rumM, rumG = this.rumG; const kCut = this.kCut;
    const isLim = this.lim; let cutPhase = this.cutPhase; let cutNow = this.cutNow;
    for (let i = 0; i < N; i++) {
      rpm += (rpmT - rpm) * kR; thr += (thrT - thr) * kT; load += (loadT - load) * kL;
      pitch += (pitchT - pitch) * kP; wob += (wobT - wob) * 0.0004; actEnv += (actTarget - actEnv) * kA;
      const rpmEff = rpm * pitch * (1 + wob);
      const dcp = rpmEff * pS / (120 * sr);

      if (isLim) { cutPhase += 20 / sr; if (cutPhase >= 1) cutPhase -= 1; cutNow = cutPhase < 0.45; } else { cutNow = false; cutPhase = 0; }

      cp += dcp; if (cp >= 1) cp -= 1;
      const slotF = cp * 8; const idx = slotF | 0;
      if (idx !== this.lastIdx) {
        this.lastIdx = idx; this.rumT = Math.max(0.1, 1 + 0.9 * this.lk * LUMP[idx]);
        if (rpmEff > 30) { this.rp = rp; this.cutNow = cutNow; this.fire(idx, Math.min(0.999, Math.max(0, (slotF - idx) / (dcp * 8 + 1e-9)))); }
      }

      // impulses -> shapers
      const iA = rb0[rp], iB = rb1[rp], kA2 = rc0[rp], kB2 = rc1[rp]; rb0[rp] = 0; rb1[rp] = 0; rc0[rp] = 0; rc1[rp] = 0; rp = (rp + 1) & RM;
      b1a += cB * (iA - b1a); b2a += cB * (b1a - b2a); b1b += cB * (iB - b1b); b2b += cB * (b1b - b2b);
      k1a += cK1 * (kA2 - k1a); k2a += cK2 * (kA2 - k2a); k1b += cK1 * (kB2 - k1b); k2b += cK2 * (kB2 - k2b);
      const sA = gBody * b2a + (k2a - k1a), sB = gBody * b2b + (k2b - k1b);

      // header / collector combs
      const dA = dl0[(wp - D0 + SZ) & SM], dB = dl1[(wp - D1 + SZ) & SM];
      lpc0 += (dA - lpc0) * 0.5; lpc1 += (dB - lpc1) * 0.5;
      const yA = sA + gFb * lpc0, yB = sB + gFb * lpc1;
      dl0[wp] = yA; dl1[wp] = yB; wp = (wp + 1) & SM;
      const s = (yA + yB) * 0.5;

      const dc = s - dcx + dcR * dcy; dcx = s; dcy = dc;
      let x = gDry * dc + gW1 * f1.bp(dc) + gW2 * f2.bp(dc) + gW3 * f3.bp(dc) + gW4 * f4.bp(dc);
      lsv += (x - lsv) * cLs; x += gShelf * lsv + gBoom * boom.bp(dc);     // bass: low shelf + pipe-body resonance
      lp1 += (x - lp1) * lpA; lp2 += (lp1 - lp2) * lpA; x = lp2;

      // soft clip (Pade tanh)
      let xd = x * gDrive * 2.2; xd = xd > 3 ? 3 : (xd < -3 ? -3 : xd);
      let y = xd * (27 + xd * xd) / (27 + 9 * xd * xd) * 0.46 * hiK;
      if (gScr > 0.0005) y += this.scr.bp(y) * gScr;   // presence / scream band after the saturator

      if (full) {
        const wn = this.rnd() * 2 - 1;
        if (this.cenv > 0.0005) { y += this.cbp.bp(wn) * this.cenv; this.cenv *= this.cDec; }
        const frac = slotF - idx; const v2 = slotF * 2; const frac2 = v2 - (v2 | 0);
        const pulse = 0.55 + 0.45 * (1 - frac);
        y += this.intake.bp(wn) * gIntake * pulse;
        if (gHowl > 0.0003) y += this.howl.bp(wn) * gHowl * pulse;
        { const ve = 1 - frac2 * 5; if (ve > 0) y += this.valve.hp(this.rnd() * 2 - 1) * ve * ve * gValve; }
        if (gRum > 0.0003) { rumM += (this.rumT - rumM) * kRum; rumG += ((cutNow ? 0.12 : 1) - rumG) * kCut; y += this.rum.bp(wn) * gRum * rumM * rumG; }
        // gear whine: phasor at 14.5 x crank frequency, second harmonic by double angle
        if (gWhine > 0.0002) { const ns = ws * wcd + wc * wsd; wc = wc * wcd - ws * wsd; ws = ns; y += (ws + ws * wc) * gWhine; }
        if (this.popEnv > 0.001) { y += this.pop.bp(wn) * this.popEnv * 1.3; this.popEnv *= this.popDecay; }
        if (this.crkEnv > 0.002) { y += this.crk.bp(wn) * this.crkEnv * 0.9; this.crkEnv *= this.crkDecay; }
      }
      y *= gTrim;
      // soft limiter: transparent up to limK, asymptote limK + limR
      const ay = y < 0 ? -y : y;
      if (ay > limK) { const z = limK + limR * Math.tanh((ay - limK) / limR); y = y < 0 ? -z : z; }
      const v = y * outGain * actEnv;
      o0[i] = v;
      for (let c = 1; c < out.length; c++) out[c][i] = v;
      gBody += dBody; gDry += dDry; gW1 += dW1; gW2 += dW2; gW3 += dW3; gW4 += dW4; gFb += dFb; gDrive += dDrive; gTrim += dTrim;
      gShelf += dShelf; gBoom += dBoom; gIntake += dIntake; gHowl += dHowl; gValve += dValve; gWhine += dWhine; gRum += dRum;
    }
    this.rpm = rpm; this.thr = thr; this.load = load; this.pitch = pitch; this.wob = wob; this.actEnv = actEnv; this.cp = cp; this.cutPhase = cutPhase; this.cutNow = cutNow;
    this.lsv = lsv; this.rumM = rumM; this.rumG = rumG; this.lp1 = lp1; this.lp2 = lp2; this.dcx = dcx; this.dcy = dcy;
    this.rp = rp; this.wp = wp; this.ws = ws; this.wc = wc; this.lpc[0] = lpc0; this.lpc[1] = lpc1;
    this.b1[0] = b1a; this.b1[1] = b1b; this.b2[0] = b2a; this.b2[1] = b2b; this.k1[0] = k1a; this.k1[1] = k1b; this.k2[0] = k2a; this.k2[1] = k2b;
    for (let k = 0; k < 16; k++) G[k] = T[k];
    return true;
  }
}
registerProcessor('rtta-v8', V8Processor);
`,Oh=343,sd={e87:7770,e05:9250,e15:9250},z_={e87:.79,e05:1,e15:.66},rd=i=>i==="e87"||i==="e15"||i==="e05"?i:"e05",go=new WeakMap;function V_(i){if(go.has(i))return go.get(i);let e;if(!i.audioWorklet||typeof AudioWorkletNode>"u")e=Promise.resolve(!1);else try{const t=URL.createObjectURL(new Blob([B_],{type:"application/javascript"}));e=i.audioWorklet.addModule(t).then(()=>{try{URL.revokeObjectURL(t)}catch{}return!0}).catch(()=>!1)}catch{e=Promise.resolve(!1)}return go.set(i,e),e}const Vs=(i,e,t)=>{t==null?i.value=e:i.setValueAtTime(e,t)};function H_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=new AudioWorkletNode(i,"rtta-v8",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{seed:e,gain:t,rpm0:n,era:s}}),a=o=>r.parameters.get(o);return{kind:"worklet",out:r,setState(o,c){c.rpm!=null&&Vs(a("rpm"),c.rpm,o),c.throttle01!=null&&Vs(a("throttle"),Rt(c.throttle01,0,1),o),c.load01!=null&&Vs(a("load"),Rt(c.load01,0,1),o),c.pitch!=null&&Vs(a("pitch"),Rt(c.pitch,.5,2),o),c.rpmLimit!=null&&Vs(a("limit"),c.rpmLimit,o)},setDetail(o){a("detail").value=o},setActive(o){a("active").value=o?1:0},dispose(){try{r.disconnect(),r.port.close()}catch{}}}}function G_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=Ma(e||1),a=sd[s]||9250,o=t*.55*(s==="e87"?1.45:1),c=s==="e15"?.65:s==="e87"?1.1:1,l=z_[s]||1,h=i.createGain();h.gain.value=o;const u=i.createGain();u.gain.value=.5;const f=i.createWaveShaper(),d=new Float32Array(1024);for(let W=0;W<1024;W++){const z=W/511.5-1;d[W]=Math.tanh(2.2*z)}f.curve=d;const m=i.createBiquadFilter();m.type="lowpass",m.Q.value=.8,m.frequency.value=1200;const _=i.createGain();_.gain.value=1;const g=i.createBiquadFilter();g.type="lowshelf",g.frequency.value=170,g.gain.value=7,u.connect(g),g.connect(m),m.connect(f),f.connect(_),_.connect(h);const p=30,x=new Float32Array(p+1),M=new Float32Array(p+1);for(let W=1;W<=p;W++)M[W]=1/Math.pow(W,1.1)*(W%2===0?.9:1);const v=i.createPeriodicWave(x,M),S=(W,z)=>{const K=i.createOscillator();K.setPeriodicWave(v),K.detune.value=W;const ee=i.createGain();return ee.gain.value=z,K.connect(ee),ee.connect(u),K.start(),K},T=S(0,.7),E=S(r()*12-6,.45),C=i.createOscillator();C.type="triangle";const y=i.createGain();y.gain.value=.3,C.connect(y),y.connect(u),C.start();const b=i.createBufferSource();b.buffer=ba(i,"pink"),b.loop=!0;const P=i.createBiquadFilter();P.type="bandpass",P.Q.value=1,P.frequency.value=500;const B=i.createGain();B.gain.value=0,b.connect(P),P.connect(B),B.connect(u),b.start();const k=i.createOscillator();k.type="square",k.frequency.value=20;const G=i.createGain();G.gain.value=0,k.connect(G),G.connect(_.gain),k.start();let D=0;const V=(W,z,K)=>{const ee=Math.max(1,W/15*z*l);for(const[le,me]of[[T,1],[E,1],[C,.125]]){const _e=ee*me;K==null?le.frequency.setTargetAtTime(_e,i.currentTime,.02):le.frequency.setValueAtTime(_e,K)}};return V(n||900,1,0),{kind:"native",out:h,setState(W,z){const K=W??i.currentTime,ee=z.rpm??900,le=Rt(z.throttle01??0,0,1),me=Math.max(z.load01??0,le*.85);V(ee,z.pitch??1,W);const _e=Rt(ee/(s==="e87"?7560:9e3),0,1);m.frequency.setTargetAtTime((700+3300*Math.pow(me,.8)+300*_e)*c,K,.03),u.gain.setTargetAtTime(.25+.5*me,K,.03),P.frequency.setTargetAtTime(250+ee*.22,K,.03),B.gain.setTargetAtTime(Math.pow(le,1.6)*(.04+.4*_e),K,.03);const Oe=z.rpmLimit??a,ke=ee>=Oe*.985;_.gain.setTargetAtTime(ke?.55:1,K,.02),G.gain.setTargetAtTime(ke?.45:0,K,.02),le<.1&&ee>2800&&K-D>.08&&Math.random()<.12*(ee-2800)/6200&&(D=K,Bt(i,h,K,{dur:.05,peak:.25,filter:{type:"bandpass",f:500+Math.random()*1100,q:1.4}}))},setDetail(){},setActive(W){h.gain.setTargetAtTime(W?o:0,i.currentTime,.03)},dispose(){try{T.stop(),E.stop(),C.stop(),b.stop(),k.stop(),h.disconnect()}catch{}}}}function W_(i,e={},t=!1){const n={seed:e.seed??1,gain:e.gain??.5,rpm0:e.rpm0??900,era:rd(e.era)};return t&&!e.forceNative?H_(i,n):G_(i,n)}const _o=["idle","low","mid","high"],Bh={idle:1e3,low:3e3,mid:6e3,high:8500,offLow:3e3,offHigh:7e3};function q_(i,e,t={}){const n={...Bh,...t},s=i.createGain();s.gain.value=1;const r={};for(const o of Object.keys(e)){if(!(o in Bh)||!e[o])continue;const c=i.createBufferSource();c.buffer=e[o],c.loop=!0;const l=i.createGain();l.gain.value=0,c.connect(l),l.connect(s),c.start(0,Math.random()*Math.max(.01,e[o].duration*.5)),r[o]={src:c,g:l}}const a=(o,c,l)=>{const h=c.map((d,m)=>({n:d,ref:l[m]})).filter(d=>r[d.n]).sort((d,m)=>d.ref-m.ref),u={};if(!h.length)return u;for(const d of h)u[d.n]=0;if(o<=h[0].ref)return u[h[0].n]=1,u;const f=h[h.length-1];if(o>=f.ref)return u[f.n]=1,u;for(let d=0;d<h.length-1;d++){const m=h[d],_=h[d+1];if(o>=m.ref&&o<_.ref){const g=(o-m.ref)/(_.ref-m.ref);u[m.n]=Math.sqrt(1-g),u[_.n]=Math.sqrt(g);break}}return u};return{out:s,voices:r,has:()=>Object.keys(r).length>0,setState(o,{rpm:c,throttle01:l,pitch:h=1}){const u=o??i.currentTime,f=Rt(l??0,0,1),d=Rt((f-.05)/.35,0,1),m=c*h,_=_o.map(x=>n[x]),g=a(c,_o,_),p=a(c,["offLow","offHigh"],[n.offLow,n.offHigh]);for(const x of Object.keys(r)){const M=_o.includes(x),v=(M?g[x]:p[x])??0,S=n[x];r[x].g.gain.setTargetAtTime(v*(M?d:1-d),u,.04),r[x].src.playbackRate.setTargetAtTime(Rt(m/S,.4,2.4),u,.03)}},dispose(){for(const o of Object.keys(r))try{r[o].src.stop()}catch{}try{s.disconnect()}catch{}}}}const xc={cockpit:{hp:38,shelf:3,pkF:90,pkQ:4,pkG:6,lp:1900,gain:.95,aiCut:3500},chase:{hp:35,shelf:0,pkF:120,pkQ:1,pkG:0,lp:7e3,gain:1,aiCut:14e3},broadcast:{hp:90,shelf:-2,pkF:1800,pkQ:.8,pkG:3,lp:9e3,gain:.8,aiCut:14e3}};function X_(i,e,t){const n=i.listener;if(!n)return;const s=t||{x:0,y:0,z:-1};if(n.positionX){const r=i.currentTime;n.positionX.setTargetAtTime(e.x,r,.02),n.positionY.setTargetAtTime(e.y,r,.02),n.positionZ.setTargetAtTime(e.z,r,.02),n.forwardX.setTargetAtTime(s.x,r,.03),n.forwardY.setTargetAtTime(s.y,r,.03),n.forwardZ.setTargetAtTime(s.z,r,.03),n.upX.value=0,n.upY.value=1,n.upZ.value=0}else try{n.setPosition(e.x,e.y,e.z),n.setOrientation(s.x,s.y,s.z,0,1,0)}catch{}}function Q_(i,e,t){if(i.positionX)i.positionX.setTargetAtTime(e.x,t,.03),i.positionY.setTargetAtTime(e.y,t,.03),i.positionZ.setTargetAtTime(e.z,t,.03);else try{i.setPosition(e.x,e.y,e.z)}catch{}}class K_{constructor(e){this.sys=e,this.voices=new Set,this.listener={pos:null,vel:null,fwd:null},this.mode="cockpit",this.recBuffers=null,this.recRefs={},this.paused=!1,this.MAX_FULL=6,this.MAX_LITE=10}create(e={}){const t=new Y_(this,e);return this.voices.add(t),this.sys.ctx()&&this.sys.bus()&&t.build(),t}onReady(){for(const e of this.voices)e.build();this._applyRec()}setPerspective(e){if(xc[e]){this.mode=e;for(const t of this.voices)t.applyPerspective()}}setListener(e,t,n){this.listener={pos:e,vel:t,fwd:n};const s=this.sys.ctx();s&&e&&X_(s,e,n);const r=[];for(const a of this.voices)!a.player&&a.built&&r.push(a);r.sort((a,o)=>a.lastDist-o.lastDist),r.forEach((a,o)=>a.setTier(this.paused?2:o<this.MAX_FULL?0:o<this.MAX_FULL+this.MAX_LITE&&a.lastDist<400?1:2))}setPaused(e){this.paused=e;for(const t of this.voices)t.setPausedState(e)}async loadRecordings(e,t={}){const n=this.sys.ctx(),s={loaded:[],failed:[]};if(!n)return s.failed=Object.keys(e||{}),s;const r={};return await Promise.all(Object.keys(e||{}).map(async a=>{try{const o=e[a];if(!o)return;if(typeof AudioBuffer<"u"&&o instanceof AudioBuffer){r[a]=o,s.loaded.push(a);return}const c=await fetch(o);if(!c.ok)throw new Error("http "+c.status);const l=await c.arrayBuffer();r[a]=await new Promise((h,u)=>{const f=n.decodeAudioData(l,h,u);f&&f.catch&&f.catch(u)}),s.loaded.push(a)}catch{s.failed.push(a)}})),s.loaded.length&&(this.recBuffers=r,this.recRefs=t,this._applyRec()),s}_applyRec(){for(const e of this.voices)e.player&&e.attachRecordings()}}class Y_{constructor(e,t){this.mgr=e,this.player=!!t.player,this.era=rd(t.era),this.seed=t.seed??Math.floor(Math.random()*1e6),this.opts=t,this.built=!1,this.disposed=!1,this.last=null,this.lastDist=1e9,this.tier=0,this.rec=null,this.recSent=!1,this.nodes=null,this.core=null}build(){if(this.built||this.disposed)return;const e=this.mgr.sys.ctx(),t=this.mgr.sys.bus();if(!e||!t)return;this.ctx=e;const n=W_(e,{seed:this.seed,gain:this.player?.7:.56,rpm0:this.last?.rpm??900,era:this.era},this.mgr.sys.workletOk());this.core=n;const s=e.createGain();s.gain.value=1,n.out.connect(s);const r=e.createGain();s.connect(r);const a={procGain:s,sum:r};let o=r;if(this.player){const l=e.createBiquadFilter();l.type="highpass";const h=e.createBiquadFilter();h.type="lowshelf",h.frequency.value=120;const u=e.createBiquadFilter();u.type="peaking";const f=e.createBiquadFilter();f.type="lowpass",f.Q.value=.5;const d=e.createGain();o.connect(l),l.connect(h),h.connect(u),u.connect(f),f.connect(d),o=d,Object.assign(a,{hp:l,shelf:h,pk:u,lp:f,pg:d})}else{const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=.5,l.frequency.value=12e3,o.connect(l),o=l,a.dlp=l}const c=e.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=this.player?1:6,c.maxDistance=600,c.rolloffFactor=this.player?0:1.3,o.connect(c),c.connect(t),a.pan=c,this.nodes=a,this.built=!0,this.applyPerspective(!0),this.attachRecordings(),this.last&&this.update(this.last)}applyPerspective(e){if(!this.built)return;const t=this.nodes,n=xc[this.mgr.mode],s=this.ctx.currentTime,r=e?.001:.08;this.player&&(t.hp.frequency.setTargetAtTime(n.hp,s,r),t.shelf.gain.setTargetAtTime(n.shelf,s,r),t.pk.frequency.setTargetAtTime(n.pkF,s,r),t.pk.Q.setTargetAtTime(n.pkQ,s,r),t.pk.gain.setTargetAtTime(n.pkG,s,r),t.lp.frequency.setTargetAtTime(n.lp,s,r),t.pg.gain.setTargetAtTime(n.gain,s,r))}attachRecordings(){if(!this.built||!this.player||this.rec||!this.mgr.recBuffers)return;const e=this.ctx;if(this.rec=q_(e,this.mgr.recBuffers,this.mgr.recRefs),!this.rec.has()){this.rec=null;return}const t=e.createGain();t.gain.value=.9,this.rec.out.connect(t),t.connect(this.nodes.sum),this.nodes.recGain=t,this.nodes.procGain.gain.setTargetAtTime(.5,e.currentTime,.3)}setTier(e){!this.built||e===this.tier||(this.tier=e,this.core.setActive(e<2&&!this.mgr.paused),this.core.setDetail(e===0?1:0))}setPausedState(e){this.built&&this.core.setActive(!e&&(this.player||this.tier<2))}update(e){if(this.disposed||(this.last=e,!this.built&&(this.mgr.sys.ctx()&&this.mgr.sys.bus()&&this.build(),!this.built))||this.mgr.paused)return;const n=this.ctx.currentTime,s=this.mgr.listener;let r=1,a=0;if(e.pos&&s.pos){const c=e.pos.x-s.pos.x,l=(e.pos.y||0)-(s.pos.y||0),h=e.pos.z-s.pos.z;if(a=Math.sqrt(c*c+l*l+h*h),!this.player&&a>.5){const u=c/a,f=l/a,d=h/a,m=s.vel?s.vel.x*u+(s.vel.y||0)*f+s.vel.z*d:0,_=e.vel?e.vel.x*u+(e.vel.y||0)*f+e.vel.z*d:0;r=Rt((Oh+m)/(Oh+_),.85,1.18)}Q_(this.nodes.pan,e.pos,n)}if(this.lastDist=a,!this.player){const c=xc[this.mgr.mode].aiCut;this.nodes.dlp.frequency.setTargetAtTime(Rt(14e3/(1+a/50),1500,c),n,.1)}if(this.tier===2&&!this.player)return;const o={rpm:e.rpm??900,throttle01:e.throttle01??0,load01:e.load01??0,pitch:r,rpmLimit:this.opts.rpmLimit??sd[this.era]};this.core.setState(null,o),this.rec&&this.rec.setState(null,o)}dispose(){if(this.disposed=!0,this.mgr.voices.delete(this),!!this.built)try{this.rec&&this.rec.dispose(),this.core.dispose();for(const e of Object.keys(this.nodes))try{this.nodes[e].disconnect()}catch{}}catch{}}}const ad={menu:{bpm:124,bars:32,target:.115,desc:"confident, building, bass-led"},garage:{bpm:88,bars:24,target:.085,desc:"calm, warm, sparse"},race:{bpm:128,bars:32,target:.06,desc:"low-intensity bed under the engines"},results:{bpm:96,bars:16,target:.09,desc:"short resolve"}},zh=3.2;class $_{constructor(e,t,n,s=0){this.ctx=e,this.step=60/t/4,this.loopLen=n*16*this.step,this.bars=n,this.origin=s*16*this.step;const r=(g,p)=>{const x=e.createGain();return x.gain.value=g,p&&x.connect(p),x},a=r(.9);a.connect(e.destination),this.master=a;const o=e.createConvolver();o.buffer=U_(e,1.8,3,11);const c=r(1,o),l=r(.42,a);o.connect(l);const h=e.createDelay(1.5);h.delayTime.value=this.step*3;const u=r(.36),f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=3200;const d=r(1,h);h.connect(f),f.connect(u),u.connect(h);const m=r(.34,a);f.connect(m),f.connect(c);const _=(g,p=0,x=0)=>{const M=r(g,a);return p&&M.connect(r(p,c)),x&&M.connect(r(x,d)),M};this.bus={kick:_(.95),snare:_(.6,.18),hat:_(.5),bass:_(.85),pad:_(.55,.5),arp:_(.55,.28,.5),lead:_(.6,.32,.42),fx:_(.6,.2)},this.vib=e.createOscillator(),this.vib.frequency.value=5.3,this.vibG=r(9),this.vib.connect(this.vibG),this.vib.start(0)}t(e,t=0){return(e*16+t)*this.step-this.origin}noise(e,t,n,s,r,a,o=1,c="bandpass",l="white",h=.002){const u=this.ctx,f=u.createGain();f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(n,e+h),f.gain.exponentialRampToValueAtTime(1e-4,e+t),f.gain.setValueAtTime(0,e+t+.01),f.connect(s);const d=u.createBiquadFilter();d.type=c,d.Q.value=o,a?(d.frequency.setValueAtTime(r,e),d.frequency.exponentialRampToValueAtTime(a,e+t)):d.frequency.value=r,d.connect(f);const m=u.createBufferSource();m.buffer=ba(u,l),m.loop=!0,m.connect(d),m.start(e,e*7.31%3.5),m.stop(e+t+.03)}note(e,t,n,s,r,a={}){const o=this.ctx,c=Math.min(a.attack??.005,n),l=a.release??.12,h=o.createGain();if(h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(r,t+c),h.gain.setValueAtTime(r,t+Math.max(c,n)),h.gain.exponentialRampToValueAtTime(1e-4,t+n+l),h.gain.setValueAtTime(0,t+n+l+.01),a.pan){const f=o.createStereoPanner();f.pan.value=a.pan,h.connect(f),f.connect(e)}else h.connect(e);let u=h;a.filter&&(u=o.createBiquadFilter(),u.type="lowpass",u.Q.value=a.filter[2]??.8,a.filter[1]==null||a.filter[1]===a.filter[0]?u.frequency.value=a.filter[0]:(u.frequency.setValueAtTime(a.filter[0],t),u.frequency.exponentialRampToValueAtTime(Math.max(40,a.filter[1]),t+Math.max(.02,n*(a.sweep??.6)))),u.connect(h));for(const f of a.detune||[0]){const d=o.createOscillator();d.type=a.type||"sawtooth",d.frequency.value=s,d.detune.value=f,d.connect(u),a.vib&&this.vibG.connect(d.detune),d.start(t),d.stop(t+n+l+.05)}}kick(e,t=1){const n=this.ctx,s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.9*t,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.34),s.gain.setValueAtTime(0,e+.36),s.connect(this.bus.kick);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(155,e),r.frequency.exponentialRampToValueAtTime(46,e+.1),r.connect(s),r.start(e),r.stop(e+.4),this.noise(e,.012,.16*t,this.bus.kick,2500,0,.7,"highpass")}snare(e,t=1){this.noise(e,.2,.5*t,this.bus.snare,1900,1100,.8,"bandpass"),this.noise(e,.08,.2*t,this.bus.snare,5200,0,.7,"highpass"),this.note(this.bus.snare,e,.02,195,.28*t,{type:"triangle",release:.09,attack:.002})}hat(e,t=1,n=!1){this.noise(e,n?.2:.04,.17*t,this.bus.hat,7800,0,.7,"highpass","white",.001)}crash(e,t=1){this.noise(e,1.6,.16*t,this.bus.fx,4200,0,.6,"highpass","white",.003)}riser(e,t,n=1){this.noise(e,t,.22*n,this.bus.fx,250,9e3,2,"bandpass","pink",t-.05)}bass(e,t,n,s=1,r=1){const a=Bi(t),o=n*this.step;this.note(this.bus.bass,e,o,a,.34*s,{type:"sawtooth",attack:.004,release:.05,filter:[Math.min(2400,1400*r),260*r+60,1.4],sweep:.5}),this.note(this.bus.bass,e,o,a,.3*s,{type:"sine",attack:.004,release:.05})}pad(e,t,n,s=1,r=1500,a=.5){const o=this.ctx,c=.8,l=.07*s,h=o.createBiquadFilter();h.type="lowpass",h.Q.value=.7,h.frequency.setValueAtTime(r*.5,e),h.frequency.exponentialRampToValueAtTime(r,e+n*.8),h.connect(this.bus.pad);const u=o.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+Math.min(a,n)),u.gain.setValueAtTime(l,e+n),u.gain.exponentialRampToValueAtTime(1e-4,e+n+c),u.gain.setValueAtTime(0,e+n+c+.01),u.connect(h);const f=o.createStereoPanner();f.pan.value=-.85,f.connect(u);const d=o.createStereoPanner();d.pan.value=.85,d.connect(u),t.forEach((m,_)=>{for(const[g,p]of[[-7,f],[6,d]]){const x=o.createOscillator();x.type="sawtooth",x.frequency.value=Bi(m),x.detune.value=g+_%2*2,x.connect(p),x.start(e),x.stop(e+n+c+.05)}})}pluck(e,t,n,s=1,r=0,a=3500){const o=Bi(t),c=n*this.step;this.note(this.bus.arp,e,c*.45,o,.13*s,{type:"square",attack:.002,release:.05,pan:r,filter:[a]}),this.note(this.bus.arp,e,c,o,.1*s,{type:"sine",attack:.002,release:.1,pan:r})}bell(e,t,n,s=1){const r=Bi(t),a=n*this.step;this.note(this.bus.lead,e,a,r,.13*s,{type:"triangle",attack:.003,release:.5}),this.note(this.bus.lead,e,a*.6,r*2.01,.04*s,{type:"sine",attack:.002,release:.3})}lead(e,t,n,s=1){this.note(this.bus.lead,e,n*this.step,Bi(t),.12*s,{type:"sawtooth",detune:[-9,8],attack:.01,release:.14,vib:!0,filter:[3400,1500,.9],sweep:.9})}}const Wi=(i,e)=>e.map(t=>i+t);async function j_(i,e,t,n){const s=[{r:43,iv:[0,3,7]},{r:39,iv:[0,4,7]},{r:46,iv:[0,4,7]},{r:41,iv:[0,4,7]}],r=[[0,0],[2,0],[3,12],[6,0],[8,0],[10,7],[11,12],[14,0]],a=[0,2,1,3,2,1,3,2,0,2,1,3,2,3,1,2],o=[[[0,74,3],[3,77,2],[6,79,2],[8,77,3],[12,74,4]],[[0,75,3],[3,79,2],[6,82,2],[8,79,3],[12,75,4]],[[0,77,2],[2,74,2],[4,70,4],[8,74,3],[12,77,4]],[[0,72,3],[3,77,2],[6,81,2],[8,79,4],[12,77,2],[14,74,2]]];for(let c=t;c<n;c++){const l=Math.floor(c/8),h=s[c%4],u=i.t(c),f=Wi(h.r,h.iv),d=l===3?c>=30?[]:[0,8]:[0,4,8,12];for(const _ of d)i.kick(i.t(c,_),l===0?.8:.95);c%8===0&&i.crash(u,l===0?.5:.7);for(const _ of[2,6,10,14])i.hat(i.t(c,_),l===0?.5:.7,_===14&&l>=2);if(l>=1)for(const _ of[0,4,8,12])(l!==3||c>=30)&&i.hat(i.t(c,_+1),.3+.1*(_%8===0));if(l>=1&&l!==3&&(i.snare(i.t(c,4),.85),i.snare(i.t(c,12),.9)),l===3&&c<30&&i.snare(i.t(c,12),.7),c===31)for(let _=8;_<16;_++)i.snare(i.t(c,_),.35+.08*(_-8));if(l===0)for(let _=0;_<16;_+=2)i.bass(i.t(c,_),h.r,1.5,.8,.55);else if(l===3)i.bass(u,h.r,15,.8,.7);else for(const[_,g]of r)i.bass(i.t(c,_),h.r+g,1.2,.95+(g?.05:0),1);if(i.pad(u,Wi(h.r+24,h.iv),16*i.step,l===0?.8:1,l===0?900:l===3?2400:1500,.4),l>=1)for(let _=0;_<16;_++){const g=a[_],p=f[g%3]+36+(g===3?12:0);i.pluck(i.t(c,_),p,1.1,(l===3?.5:.8)*(_%4===0?1:.75),(_%4-1.5)*.25,3600)}if(l===2||l===1&&c>=12)for(const[_,g,p]of o[c%4])i.lead(i.t(c,_),g,p,l===2?1:.5);c===30&&i.riser(i.t(30),32*i.step,1),c%4===3&&await e()}}async function Z_(i,e,t,n){const s=[{r:50,iv:[0,3,7,10,14]},{r:46,iv:[0,4,7,11]},{r:53,iv:[0,4,7,11]},{r:48,iv:[0,4,7,14]}],r=[0,2,4,2,1,3,2,1];for(let a=t;a<n;a++){const o=Math.floor(a/8),c=s[a%4],l=i.t(a),h=Wi(c.r,c.iv);if(i.pad(l,Wi(c.r+12,c.iv).slice(0,4),16*i.step+.4,1,800,1.2),i.note(i.bus.bass,l,15.5*i.step,Bi(c.r-12),.3,{type:"sine",attack:.05,release:.4}),o>=1)for(let u=0;u<8;u++){const f=r[u]%h.length;i.pluck(i.t(a,u*2),h[f]+24,3,(u%2?.55:.8)*(o===1?.8:1),(u%4-1.5)*.3,2400)}o>=2&&(i.kick(l,.5),i.kick(i.t(a,10),.35),i.hat(i.t(a,4),.35),i.hat(i.t(a,12),.35),i.snare(i.t(a,8),.28)),a%4===3&&await e()}}async function J_(i,e,t,n){const s=[{r:45,iv:[0,3,7]},{r:41,iv:[0,4,7]},{r:48,iv:[0,4,7]},{r:43,iv:[0,4,7]}];for(let r=t;r<n;r++){const a=Math.floor(r/8),o=s[r%4],c=i.t(r),l=Wi(o.r,o.iv);i.kick(c,.55),i.kick(i.t(r,8),.45),r>=4&&(i.hat(i.t(r,4),.35),i.hat(i.t(r,12),.35)),a>=2&&(i.hat(i.t(r,14),.25),i.snare(i.t(r,12),.25));for(let h=0;h<16;h+=2)i.bass(i.t(r,h),o.r+(h===6&&r%2?12:0),1.4,.55+.1*(h===0),.45);i.pad(c,Wi(o.r+12,o.iv),16*i.step,.7,700,.6),r%2===1&&a>=1&&[0,3,6,8,11,14].forEach((h,u)=>i.pluck(i.t(r,h),l[u%3]+24,1.2,.38,(u%3-1)*.3,2200)),r%8===7&&i.riser(i.t(r,8),8*i.step,.35),r%4===3&&await e()}}async function ev(i,e,t,n){const s=[{r:53,iv:[0,4,7,11]},{r:50,iv:[0,3,7,10]},{r:46,iv:[0,4,7,14]},{r:48,iv:[0,4,7]}],r=[[[0,72,3],[3,76,3],[8,77,6]],[[0,74,3],[3,77,3],[8,81,6]],[[0,74,3],[3,77,3],[8,82,6]],[[0,76,3],[3,79,3],[8,84,8]]];for(let a=t;a<n;a++){const o=s[a%4],c=i.t(a);if(i.pad(c,Wi(o.r+12,o.iv).slice(0,4),16*i.step+.3,1,1700,.35),i.note(i.bus.bass,c,15*i.step,Bi(o.r-12),.32,{type:"sine",attack:.02,release:.3}),a>=2&&a<14)for(const[l,h,u]of r[a%4])i.bell(i.t(a,l),h,u,a<4?.8:1);if(a>=4&&a<14&&(i.kick(c,.55),i.kick(i.t(a,8),.4)),a>=8&&a<14){i.snare(i.t(a,12),.35);for(const l of[4,12])i.hat(i.t(a,l),.35)}a===0&&i.crash(c,.3),a%4===3&&await e()}}const tv={menu:j_,garage:Z_,race:J_,results:ev},Vh=4;function nv(i,e,t){const r=Math.exp(-1/(.006*t)),a=Math.exp(-1/(.18*t)),o=i.length;let c=0;for(let l=0;l<2;l++)for(let h=0;h<o;h++){const u=Math.max(Math.abs(i[h]),Math.abs(e[h]));if(c=u>c?r*c+(1-r)*u:a*c+(1-a)*u,l===1){const f=c>.16?Math.pow(c/.16,-.7142857142857143):1;i[h]*=f,e[h]*=f}}}async function iv(i,{ctxFactory:e,sampleRate:t=32e3,yieldFn:n=()=>fa(0),concurrency:s=2}={}){const r=ad[i];if(!r)throw new Error("unknown track "+i);const a=e||((T,E,C)=>new OfflineAudioContext(T,E,C)),c=16*(60/r.bpm/4),l=t,h=Math.round(r.bars*c*l),u=Math.round(zh*l),f=h+u,d=[new Float32Array(f),new Float32Array(f)],m=[];for(let T=0;T<r.bars;T+=Vh)m.push([T,Math.min(r.bars,T+Vh)]);let _=0;const g=async()=>{for(;_<m.length;){const[T,E]=m[_++],C=Math.ceil(((E-T)*c+zh)*l),y=a(2,C,l),b=new $_(y,r.bpm,r.bars,T);await tv[i](b,n,T,E),await n();const P=await y.startRendering(),B=Math.round(T*c*l);for(let k=0;k<2;k++){const G=P.getChannelData(k),D=d[k],V=Math.min(G.length,f-B);for(let W=0;W<V;W++)D[B+W]+=G[W]}}};await Promise.all(Array.from({length:Math.max(1,s)},g));const p=[new Float32Array(h),new Float32Array(h)];for(let T=0;T<2;T++){const E=p[T],C=d[T];for(let y=0;y<h;y++)E[y]=C[y];for(let y=0;y<u&&y<h;y++)E[y]+=C[h+y]}nv(p[0],p[1],l);let x=0,M=0;for(let T=0;T<2;T++)for(let E=0;E<h;E++){const C=p[T][E];x+=C*C,Math.abs(C)>M&&(M=Math.abs(C))}const v=Math.sqrt(x/(2*h));let S=v>0?r.target/v:1;M*S>.92&&(S=.92/M);for(let T=0;T<2;T++)for(let E=0;E<h;E++)p[T][E]*=S;return{name:i,sampleRate:l,length:h,channels:p,rmsBefore:v,gain:S,seconds:h/l}}const Mn=typeof window<"u"?window:null,Hs=Mn&&(Mn.AudioContext||Mn.webkitAudioContext),Hh=Mn&&(Mn.OfflineAudioContext||Mn.webkitOfflineAudioContext),ie={ctx:null,ready:!1,unlocked:!1,inited:!1,workletOk:!1,unlockP:null,gestureArmed:!1,buses:null,ambient:null,paused:!1,perspective:"cockpit",hiddenSuspended:!1,listeners:new Set,vol:{master:.9,music:.5,sfx:.9,engine:.9,ambient:.7},musicBuf:{},musicJob:{},musicWanted:null,musicFade:1.5,musicCur:null,lastHover:0},hs=new K_({ctx:()=>ie.ready?ie.ctx:null,bus:()=>ie.ready?ie.buses.engine:null,workletOk:()=>ie.workletOk});function od(){for(const i of ie.listeners)try{i(Ye.state)}catch{}}function sv(){const i=ie.ctx,e=r=>{const a=i.createGain();return a.gain.value=r,a},t=e(ie.vol.master),n=i.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=20,n.ratio.value=3,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(i.destination);const s={master:t,music:e(ie.vol.music),sfx:e(ie.vol.sfx),engine:e(ie.vol.engine),ambient:e(ie.vol.ambient),musicDuck:e(1)};s.music.connect(s.musicDuck),s.musicDuck.connect(t),s.sfx.connect(t),s.engine.connect(t),s.ambient.connect(t),ie.buses=s}function cd(){if(!ie.buses)return;const i=ie.ctx.currentTime;for(const e of["master","music","sfx","engine","ambient"])ie.buses[e].gain.setTargetAtTime(Rt(ie.vol[e],0,1),i,.05)}function rv(){try{const i=ie.ctx.createBuffer(1,1,22050),e=ie.ctx.createBufferSource();e.buffer=i,e.connect(ie.ctx.destination),e.start(0)}catch{}}function Mc(){if(ie.gestureArmed||!Mn)return;ie.gestureArmed=!0;const i=["pointerdown","touchend","keydown","click"],e=()=>{Ye.unlock().then(t=>{t&&(i.forEach(n=>Mn.removeEventListener(n,e,!0)),ie.gestureArmed=!1)})};i.forEach(t=>Mn.addEventListener(t,e,!0))}function av(){const i=ie.ctx;i.onstatechange=()=>{ie.unlocked=i.state==="running",od(),!ie.unlocked&&!ie.hiddenSuspended&&Mc()},typeof document<"u"&&document.addEventListener("visibilitychange",()=>{ie.ctx&&(document.hidden?ie.ctx.state==="running"&&(ie.hiddenSuspended=!0,ie.ctx.suspend().catch(()=>{})):ie.hiddenSuspended&&(ie.hiddenSuspended=!1,ie.ctx.resume().catch(()=>Mc())))})}async function ov(){if(!ie.inited){ie.inited=!0,ie.workletOk=await Promise.race([V_(ie.ctx),fa(2500).then(()=>!1)]),ie.ready=!0,cd();try{ie.ambient=O_(ie.ctx,ie.buses.ambient),ie.ambient.setPerspective(ie.perspective),ie.ambient.update({})}catch{ie.ambient=null}hs.onReady(),ie.musicWanted&&hd(ie.musicWanted,ie.musicFade),(async()=>{for(const i of["menu","garage","race","results"])await ld(i),await fa(250)})()}}function ld(i){return ie.musicBuf[i]?Promise.resolve(ie.musicBuf[i]):ie.musicJob[i]?ie.musicJob[i]:!ad[i]||!Hh||!ie.ctx?Promise.resolve(null):(ie.musicJob[i]=iv(i,{ctxFactory:(e,t,n)=>new Hh(e,t,n),sampleRate:32e3}).then(e=>{const t=ie.ctx.createBuffer(2,e.length,e.sampleRate);return t.copyToChannel(e.channels[0],0),t.copyToChannel(e.channels[1],1),ie.musicBuf[i]=t,t}).catch(()=>(ie.musicJob[i]=null,null)),ie.musicJob[i])}async function hd(i,e){if(!ie.ready||ie.musicCur&&ie.musicCur.name===i)return;const t=await ld(i);if(!t||ie.musicWanted!==i||ie.musicCur&&ie.musicCur.name===i)return;const n=ie.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=t,r.loop=!0;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+Math.max(.05,e)),r.connect(a),a.connect(ie.buses.music),r.start(s);const o=ie.musicCur;ie.musicCur={name:i,src:r,g:a},o&&ud(o,e)}function ud(i,e){const t=ie.ctx.currentTime;try{i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(i.g.gain.value,t),i.g.gain.linearRampToValueAtTime(0,t+Math.max(.05,e)),i.src.stop(t+Math.max(.05,e)+.1)}catch{}}function Kt(i,...e){if(!ie.ready||ie.ctx.state!=="running")return 0;try{return F_[i](ie.ctx,ie.buses.sfx,ie.ctx.currentTime+.005,...e)||0}catch{return 0}}const Gh=()=>Math.random()*2-1,Ye={get supported(){return!!Hs},get state(){return Hs?ie.ctx?ie.ctx.state==="running"&&ie.ready?"running":ie.ctx.state==="running"?"starting":ie.ctx.state:"locked":"unsupported"},get ctx(){return ie.ctx},onStateChange(i){return ie.listeners.add(i),()=>ie.listeners.delete(i)},unlock(){if(!Hs)return Promise.resolve(!1);if(ie.unlockP)return ie.unlockP;if(!ie.ctx){try{ie.ctx=new Hs({latencyHint:"interactive"})}catch{try{ie.ctx=new Hs}catch{return Promise.resolve(!1)}}try{Mn.navigator&&Mn.navigator.audioSession&&(Mn.navigator.audioSession.type="playback")}catch{}sv(),av()}rv();let i;try{i=ie.ctx.state==="running"?Promise.resolve():ie.ctx.resume()}catch{i=Promise.resolve()}return ie.unlockP=(async()=>{try{await Promise.race([i,fa(1200)])}catch{}return ie.unlocked=ie.ctx.state==="running",ie.unlocked?await ov():Mc(),od(),ie.unlocked})().finally(()=>{ie.unlockP=null}),ie.unlockP},setVolumes(i={}){for(const e of Object.keys(ie.vol))typeof i[e]=="number"&&(ie.vol[e]=Rt(i[e],0,1));cd()},setPerspective(i){ie.perspective=i,hs.setPerspective(i),ie.ambient&&ie.ambient.setPerspective(i)},setListener(i,e,t){hs.setListener(i,e,t)},setPaused(i){ie.paused=!!i,hs.setPaused(ie.paused),ie.ambient&&ie.ambient.setMute(ie.paused),ie.buses&&ie.buses.musicDuck.gain.setTargetAtTime(ie.paused?.4:1,ie.ctx.currentTime,.12)},ui:{hover(){const i=performance.now();i-ie.lastHover<45||(ie.lastHover=i,Kt("hover",Gh()))},click(){Kt("click",Gh())},confirm(){Kt("confirm")},back(){Kt("back")},error(){Kt("error")},tab(){Kt("tab")},toggle(i=!0){Kt("toggle",!!i)},whoosh(){Kt("whoosh")},intro(){return Kt("intro")},countdown(i=3){Kt("countdown",i)},go(){Kt("go")},lap(){Kt("lap")},bestLap(){Kt("bestLap")},sponsor(){Kt("sponsor")},crash(i=.6){Kt("crash",Rt(i,0,1))}},music:{play(i,{fade:e=1.5}={}){ie.musicWanted=i,ie.musicFade=e,ie.ready&&hd(i,e)},stop(i=1){ie.musicWanted=null,ie.musicCur&&ie.ctx&&(ud(ie.musicCur,i),ie.musicCur=null)},get current(){return ie.musicCur?ie.musicCur.name:null},isReady(i){return!!ie.musicBuf[i]}},engine:{create(i){return hs.create(i)},loadRecordings(i,e){return hs.loadRecordings(i,e)}},ambient:{update(i){ie.ambient&&ie.ambient.update(i)}}},Un=3e3,Wh={grass:[.2,.34,.09,.3,0,1.6,9.5,.4,1],dirt:[.28,.2,.11,.26,0,1.5,9.5,.5,1],dust:[.62,.55,.42,.9,1.7,1.9,-.3,1.1,.5],smoke:[.86,.86,.88,.8,1.6,1.5,-.6,1.2,.42],blacksmoke:[.1,.1,.1,.7,1.4,2.2,-1.2,.9,.55],spark:[1,.72,.28,.07,0,.55,8,.2,1],debris:[.12,.12,.13,.14,0,1.6,9.5,.3,1]},cv=`
attribute vec3 aColor; attribute vec2 aSA; varying vec3 vC; varying float vA; uniform float uScale;
void main(){ vC = aColor; vA = aSA.y; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = clamp(aSA.x * uScale / max(0.5, -mv.z), 0.0, 220.0); gl_Position = projectionMatrix * mv; }`,lv=`
varying vec3 vC; varying float vA; uniform vec3 uLight;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d) * 4.0; if (r > 1.0) discard; float a = vA * (1.0 - r) * (1.0 - r * 0.5); gl_FragColor = vec4(vC * uLight, a); }`;class hv{constructor(e){this.pos=new Float32Array(Un*3),this.col=new Float32Array(Un*3),this.sa=new Float32Array(Un*2),this.vel=new Float32Array(Un*3),this.age=new Float32Array(Un).fill(99),this.life=new Float32Array(Un).fill(1),this.kind=new Uint8Array(Un),this.size0=new Float32Array(Un),this.head=0,this.names=Object.keys(Wh),this.kidx={},this.names.forEach((s,r)=>{this.kidx[s]=r}),this.kdata=this.names.map(s=>Wh[s]);const t=new Vt;t.setAttribute("position",new mt(this.pos,3).setUsage(Aa)),t.setAttribute("aColor",new mt(this.col,3).setUsage(Aa)),t.setAttribute("aSA",new mt(this.sa,2).setUsage(Aa)),this.uniforms={uScale:{value:700},uLight:{value:new N(1,1,1)}};const n=new Wn({vertexShader:cv,fragmentShader:lv,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0});this.points=new Du(t,n),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=t,this.scene=e,this.live=0}setView(e,t){const n=t.domElement.height/(t.getPixelRatio,1);this.uniforms.uScale.value=n*.5/Math.tan(e.fov*Math.PI/360)}setLight(e){this.uniforms.uLight.value.setScalar(e)}emit(e,t,n,s,r,a,o,c=1,l=1){const h=this.kidx[e],u=this.kdata[h];for(let f=0;f<c;f++){const d=this.head;this.head=(this.head+1)%Un;const m=d*3,_=Math.random(),g=Math.random(),p=Math.random();this.pos[m]=t+(_-.5)*.4*l,this.pos[m+1]=n+(g-.5)*.2,this.pos[m+2]=s+(p-.5)*.4*l,this.vel[m]=r+(Math.random()-.5)*3*l,this.vel[m+1]=a+(Math.random()-.3)*2.5*l,this.vel[m+2]=o+(Math.random()-.5)*3*l;const x=.8+Math.random()*.4;this.col[m]=u[0]*x,this.col[m+1]=u[1]*x,this.col[m+2]=u[2]*x,this.kind[d]=h,this.age[d]=0,this.life[d]=u[5]*(.7+Math.random()*.6),this.size0[d]=u[3]*(.7+Math.random()*.7),this.sa[d*2]=this.size0[d],this.sa[d*2+1]=u[8]}}update(e){let t=0;for(let n=0;n<Un;n++){let s=this.age[n];if(s>=this.life[n]){this.sa[n*2+1]!==0&&(this.sa[n*2+1]=0,this.sa[n*2]=0);continue}t++,s+=e,this.age[n]=s;const r=this.kdata[this.kind[n]],a=n*3,o=s/this.life[n],c=Math.exp(-r[7]*e);this.vel[a]*=c,this.vel[a+2]*=c,this.vel[a+1]=this.vel[a+1]*(r[7]>.9?c:1)-r[6]*e,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.pos[a+1]<.04&&r[6]>1&&(this.pos[a+1]=.04,this.vel[a+1]*=-.25,this.vel[a]*=.6,this.vel[a+2]*=.6),this.sa[n*2]=this.size0[n]+r[4]*s,this.sa[n*2+1]=r[8]*(o<.12?o/.12:1)*(1-o)*(r[4]>0,1)}this.live=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSA.needsUpdate=!0}clear(){this.age.fill(99),this.sa.fill(0)}dispose(){this.scene.remove(this.points),this.geo.dispose(),this.points.material.dispose()}}const uv=new N(0,1,0),dv=new N(0,0,1),fv=new N(1,0,0),qh=new N(1,1,1),vo=new N,Xh=new bt,Qh=new bt,Kh=new bt,Kr=new bt,Gs=1/120,Yh=["J. Walker","M. Ortega","D. Hale","T. Brandt","R. Okafor","S. Lindgren","C. Duval","A. Reyes","B. Kowalski","L. Moreau","H. Tanaka","P. Novak","E. Castillo","G. Fischer","K. Mbeki","V. Santos","N. Ivanov","F. Dunmore","O. Haugen","Z. Marlow","W. Prescott","I. Barros","Q. Ellison","U. Nakamura","Y. Delacroix","X. Whitaker","A. Strand","R. Quill","D. Pruitt","M. Sato","L. Voss","T. Greer"],$h=[["#c8102e","#f4f4f4"],["#0b5fa5","#f2c200"],["#1c1c1c","#e0e0e0"],["#f2c200","#1c1c1c"],["#2c8a3d","#f4f4f4"],["#6a2c91","#f4c542"],["#e8661a","#1c1c1c"],["#e9e9e9","#c8102e"],["#0f7f8c","#f4f4f4"],["#8a1c1c","#d9b25c"],["#14315c","#e34a33"],["#3f4a52","#9ae37c"]],jh=["none","stripe","split","chevron","fade"],Yr={quality:"medium",units:"mph",camera:0,assists:1,volumes:{master:.8,music:.55,sfx:.8,engine:.9,ambient:.7},touch:"auto"};function pv(){try{const i=JSON.parse(localStorage.getItem("rtta.settings")||"{}");return{...Yr,...i,volumes:{...Yr.volumes,...i.volumes||{}}}}catch{return{...Yr,volumes:{...Yr.volumes}}}}class mv{constructor(){this.settings=pv(),this.career=k_,this.input=N_(),this.ui=null,this.handlers={},this.mode="idle",this.paused=!1,this.race=null,this.vis=[],this.cfg=null,this.acc=0,this.shake=0,this.orbit={az:.6,el:.16,dist:7.2,auto:!0},this.garageOn=!1,this.showcase=null,this.showId=null,this.camMode=this.settings.camera|0,this.camPos=new N,this.camTgt=new N,this.camInit=!1,this.fov=62,this.t=0,this.fps=60,this.garage={enter:()=>{this.garageOn=!0,this.orbit.auto=!1,this.orbit.az=.7,this.orbit.dist=6.6,this.refreshShowcase()},exit:()=>{this.garageOn=!1,this.orbit.auto=!0,this.orbit.dist=7.4},setLivery:e=>{const t=this.career.state.livery,{slots:n,...s}=e;Object.assign(t,s),n&&(t.slots={...t.slots,...n}),this.career.save(),this.showcase&&(this.showcase.setLivery(t),this.showcase.flush())},setCar:e=>{this.career.setCar(e),this.refreshShowcase()},orbit:(e,t)=>{this.orbit.az-=e*.008,this.orbit.el=Le(this.orbit.el+t*.005,.02,.9)},zoom:e=>{this.orbit.dist=Le(this.orbit.dist+e,4.2,12)}},this.input.cycleCamera=()=>this.cycleCamera()}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,...t){for(const n of this.handlers[e]||[])try{n(...t)}catch(s){console.error(s)}}saveSettings(){try{localStorage.setItem("rtta.settings",JSON.stringify(this.settings))}catch{}try{Ye.setVolumes(this.settings.volumes)}catch{}}toast(e,t="info"){this.ui&&this.ui.toast(e,t)}async init(e,t=()=>{}){const n=document.createElement("canvas");n.id="gl",e.appendChild(n),t(.04,"Starting renderer"),this.world=new S9(n,{quality:this.settings.quality}),this.tracks={},await new Promise(a=>setTimeout(a,0)),t(.12,"Building the speedway"),await this.ensureTrack("americas",a=>t(.12+a*.3,"Building the speedway")),this.useTrack("americas"),this.world.setTime("day","clear"),this.fx=new hv(this.world.scene);const s=["e87","e05","e15"];let r=0;for(const a of s)t(.45+r++*.15,"Loading cars"),await Ch(a);t(.92,"Preparing garage"),this.refreshShowcase(),this.world.render(),t(1,"Ready"),this.running=!0,this.last=performance.now(),requestAnimationFrame(a=>this.frame(a)),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.saveSettings(),this.emit("ready")}async ensureTrack(e,t){if(e=Ft[e]?e:"americas",this.tracks[e])return this.tracks[e];const n=new E9(Ft[e]);await new Promise(c=>setTimeout(c,0));const s=P9(n,this.world.q,t);s.visible=!1,this.world.scene.add(s);const r=n.d,a=[],o=Math.max(1,Math.floor(r.px.length/120));for(let c=0;c<r.px.length;c+=o)a.push([r.px[c],r.pz[c]]);return this.tracks[e]={track:n,root:s,minimap:a}}useTrack(e){const t=this.tracks[Ft[e]?e:"americas"];if(!(!t||this.track===t.track)){for(const n in this.tracks)this.tracks[n].root.visible=this.tracks[n]===t;this.track=t.track,this.trackRoot=t.root,this.minimapPts=t.minimap,this.showcase&&this.placeShowcase()}}trackId(){return this.track?this.track.id:"americas"}placeShowcase(){const e=this.track.point(120,0,{}),t=this.track.at(120);this.showPt=e,this.place(this.showcase.group,e.x,e.y,e.z,e.heading,t)}place(e,t,n,s,r,a){const o=a.bank||0,c=a.rx||0,l=a.rz||0,h=new N(-c*Math.sin(o),Math.cos(o),-l*Math.sin(o)),u=new N(Math.sin(r),0,Math.cos(r));u.addScaledVector(h,-u.dot(h)).normalize();const f=new N().crossVectors(h,u).normalize();e.matrixAutoUpdate=!1,e.matrix.makeBasis(f,h,u),e.matrix.setPosition(t,n,s),e.matrixWorldNeedsUpdate=!0}placeSim(e,t,n=1,s=null){if(t.tumble){t.tumble.pose(vo,Kr),e.matrixAutoUpdate=!1,e.matrix.compose(vo,Kr,qh),e.matrixWorldNeedsUpdate=!0,s&&(s.x=t.x,s.z=t.z,s.psi=t.psi);return}const r=t.px===void 0?1:n,a=Zn(t.px===void 0?t.x:t.px,t.x,r),o=Zn(t.pz===void 0?t.z:t.pz,t.z,r),c=(t.ppsi===void 0?t.psi:t.ppsi)+sa(t.psi-(t.ppsi===void 0?t.psi:t.ppsi))*r,l=Zn(t.pgh===void 0?t.gh:t.pgh,t.gh,r),h=Zn(t.pgp===void 0?t.gp:t.pgp,t.gp,r),u=Zn(t.pgr===void 0?t.gr:t.pgr,t.gr,r);Xh.setFromAxisAngle(uv,c),Qh.setFromAxisAngle(dv,u),Kh.setFromAxisAngle(fv,-h),Kr.copy(Xh).multiply(Qh).multiply(Kh),e.matrixAutoUpdate=!1,e.matrix.compose(vo.set(a,l,o),Kr,qh),e.matrixWorldNeedsUpdate=!0,s&&(s.x=a,s.z=o,s.psi=c)}carIdForSeries(e){const t=this.career.carChoice();return t&&ii[t]?t:Ah[e]||Ah[this.career.series.id]||"e05"}refreshShowcase(){const e=this.carIdForSeries(this.career.series.id);!this.showcase||this.showId!==e?(this.showcase&&(this.world.scene.remove(this.showcase.group),this.showcase.dispose()),this.showcase=po({car:e,atlas:this.settings.quality==="low"?"med":"high",livery:this.career.state.livery}),this.showId=e,this.world.scene.add(this.showcase.group),this.placeShowcase(),this.showcase.setLights(!1)):(this.showcase.setLivery(this.career.state.livery),this.showcase.flush()),this.showcase.group.visible=this.mode!=="race"&&this.mode!=="results"}randomLivery(e,t){const[n,s]=$h[Math.floor(e()*$h.length)];let r;do r=String(1+Math.floor(e()*98));while(t.has(r));t.add(r);const a={},o=cr.filter(c=>c.tier<=2);for(const c of["hood","roof","door","quarter","trunk","bumper"])a[c]=e()<.7?o[Math.floor(e()*o.length)].id:null;return{...da,paint:n,accent:s,trim:"#14161a",pattern:jh[Math.floor(e()*jh.length)],finish:"gloss",number:r,numberColor:e()<.5?"#ffffff":"#111111",numberStyle:"italic",slots:a}}clearRace(){for(const e of this.vis)if(this.world.scene.remove(e.car.group),e.car.dispose(),e.voice)try{e.voice.dispose()}catch{}this.vis=[],this.race=null,this.fx&&this.fx.clear(),this.ghostVis&&(this.world.scene.remove(this.ghostVis.group),this.ghostVis.dispose(),this.ghostVis=null)}async startRace(e={}){return this.launch("race",e)}async startHotLap(e={}){return this.launch("hotlap",e)}async launch(e,t){try{this.clearRace(),this.cfg={...t,kind:e},this.paused=!1,this.input.clear(),await this.ensureTrack(t.track),this.useTrack(t.track),t.track=this.track.id,this.cfg.track=t.track;const n=t.series||this.career.series.id,s=t.car&&ii[t.car]?t.car:this.carIdForSeries(n);await Ch(s);const r=S_(s,w_(s)),a=e==="hotlap",o=a?1:Le(t.field||12,2,this.world.q.maxCars),c=Qc(Date.now()&65535),l=new Set([String(this.career.state.livery.number)]),h=[],u=this.career.state.livery,f=new Ih(0,"You",u.number,u,!0,r,s);h.push(f);for(let m=1;m<o;m++){const _=this.randomLivery(c,l),g=new Ih(m,Yh[(m-1)%Yh.length],_.number,_,!1,r,s);g.driver=new td(this.track,t.ai||"pro",m+1,(c()-.5)*6),h.push(g)}this.race=new P_(this.track,h,{laps:a?999:t.laps||3,mode:a?"hotlap":"race",onEvent:(m,..._)=>this.onRaceEvent(m,..._)}),this.world.setTime(t.time||"day",t.weather||"clear"),a?this.race.rollingStart(42,-80):this.race.gridUp(Math.min(o-1,Math.floor(o*.55)));const d=o<=16?"med":"low";for(const m of h){const _=po({car:s,atlas:m.isPlayer?this.settings.quality==="low"?"med":"high":d,livery:m.livery});this.world.scene.add(_.group),this.vis.push({e:m,car:_,spin:0,voice:null,roll:0,pitch:0})}try{const m=f.gridPos||1,_=h.filter(g=>!g.isPlayer).sort((g,p)=>Math.abs((g.gridPos||0)-m)-Math.abs((p.gridPos||0)-m)).slice(0,3);for(const g of this.vis)(g.e.isPlayer||_.includes(g.e))&&(g.voice=Ye.engine.create({player:g.e.isPlayer,kind:"v8",era:g.e.carId||s,seed:g.e.id+3}));Ye.setPerspective(this.camMode===1?"cockpit":"chase"),Ye.music.play("race",{fade:1.5})}catch(m){console.warn("audio",m)}this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=a?this.loadGhost():null,this.ghostVis=null,this.ghostHint=void 0,a&&t.ghost&&(this.ghostVis=this.makeGhostCar(s)),this.showcase&&(this.showcase.group.visible=!1),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1}catch(n){console.error(n),this.toast("Could not start: "+(n&&n.message||n),"warn")}}onRaceEvent(e,t,n,s){const r=this.race&&this.race.player;try{e==="count"?Ye.ui.countdown(t):e==="go"?(Ye.ui.go(),this.toast("Green flag","good")):e==="lap"&&t===r?(Ye.ui.lap(),this.emit("lapComplete",t.lastLap),this.race.mode==="hotlap"&&this.hotLapCrossed(t)):e==="bestlap"&&t===r?(Ye.ui.bestLap(),this.toast("Best lap","good"),this.race.mode==="hotlap"&&t.bestLap&&this.career.noteBest(this.trackId(),t.bestLap)):e==="crash"&&(t===r||n===r)?(Ye.ui.crash(Le(s||.4,0,1)),this.shake=Math.max(this.shake,Le(s||.4,0,1))):e==="wall"&&t===r?(Ye.ui.crash(.5),this.shake=Math.max(this.shake,.5)):e==="flip"?t===r?(this.toast(n==="lift"?"Airborne!":"You're rolling!","warn"),Ye.ui.crash(1),this.shake=Math.max(this.shake,1)):this.nearPlayer(t,90)&&Ye.ui.crash(.7):e==="tumbleHit"?this.tumbleHit(t,n):e==="wrecked"?t===r?this.toast("Wrecked. Recovering to the track...","warn"):this.nearPlayer(t,200)&&this.t-(this._wt||-9)>3&&(this._wt=this.t,this.toast(`#${t.number} ${t.name} is out`,"info")):e==="recovered"&&t===r?(this.toast("Back on track","good"),this.camInit=!1):e==="finish"&&t===r?(this.flag="checker",this.emit("flag","checker")):e==="done"&&this.finishRace()}catch(a){console.warn(a)}}nearPlayer(e,t){const n=this.race&&this.race.player;return!!n&&Math.hypot(e.sim.x-n.sim.x,e.sim.z-n.sim.z)<t}tumbleHit(e,t){const n=this.fx,s=this.race.player;if(!(e===s||this.nearPlayer(e,90)))return;const a=e.sim,o=Le(t.hit,0,1);if(n){const c=a.wvx*.35,l=a.wvz*.35;if(t.soft){const h=3+Math.floor(o*14);for(let u=0;u<h;u++)n.emit(Math.random()<.6?"grass":"dirt",t.x,.2,t.z,c,3+Math.random()*6*(.4+o),l,1,1.4);n.emit("dust",t.x,.3,t.z,c*.3,1,l*.3,1+Math.floor(o*2),1.5)}else{const h=2+Math.floor(o*16);for(let u=0;u<h;u++)n.emit("spark",t.x,Math.max(.1,t.y),t.z,c,1+Math.random()*3,l,1,1.8);o>.35&&n.emit("debris",t.x,Math.max(.2,t.y),t.z,c,3+Math.random()*4,l,2,1.5),o>.2&&n.emit("smoke",t.x,Math.max(.1,t.y),t.z,c*.2,.8,l*.2,1,1)}}(e===s||this.nearPlayer(e,50))&&(o>.25&&this.t-(this._tt||0)>.18&&(this._tt=this.t,Ye.ui.crash(Le(o*(e===s?1:.6),.1,1))),e===s&&(this.shake=Math.max(this.shake,o*.8)))}finishRace(){if(this.finishing)return;this.finishing=!0;const e=this.race,t=e.player,n=this.cfg.kind==="hotlap",s=(o,c)=>({pos:c+1,name:o.isPlayer?"You":o.name,me:o.isPlayer,gap:c===0?"":o.finished&&e.sorted[0].finished?`+${Math.max(0,o.finishTime-e.sorted[0].finishTime).toFixed(1)}s`:`+${Math.max(1,Math.round((e.sorted[0].prog-o.prog)/e.track.length))} lap`}),r=e.sorted.slice(0,10).map(s);t.pos>10&&r.push(s(t,t.pos-1));let a={mode:n?"hotlap":"race",pos:t.pos,field:e.entries.length,laps:this.cfg.laps||e.laps,bestLap:t.bestLap,standings:r};!n&&this.cfg.series&&(a.career=this.career.recordResult({series:this.cfg.series,pos:t.pos,field:e.entries.length,laps:e.laps,bestLap:t.bestLap,points:0,track:this.trackId()})),a.track=this.trackId(),this.emit("raceFinished",a),this.endRace(),this.mode="results";try{Ye.music.play("results",{fade:1})}catch{}this.ui&&this.ui.show("results",a)}endRace(){for(const e of this.vis)if(e.voice){try{e.voice.dispose()}catch{}e.voice=null}}afterStep(){const e=this.race;if(e.mode==="hotlap"&&this.recOK&&e.t-this.recLast>=.05){this.recLast=e.t;const t=e.player.sim;this.rec.push(+t.x.toFixed(2),+t.z.toFixed(2),+t.psi.toFixed(3))}}ghostKey(){const e=this.trackId();return e==="americas"?"rtta.ghost.v1":"rtta.ghost.v1."+e}loadGhost(){try{const e=JSON.parse(localStorage.getItem(this.ghostKey())||"null");return e&&e.pts&&e.pts.length>60?e:null}catch{return null}}hotLapCrossed(e){const t=e.lastLap;if(this.recOK&&t&&this.rec.length>60&&(!this.ghostData||t<this.ghostData.lap)){this.ghostData={lap:+t.toFixed(3),pts:this.rec.slice()};try{localStorage.setItem(this.ghostKey(),JSON.stringify(this.ghostData))}catch{}}this.rec=[],this.recOK=!0,this.lapT0=this.race.t,this.recLast=this.race.t}updateGhost(){const e=this.ghostVis;if(!e)return;const t=this.race,n=this.ghostData;if(!n||!this.recOK||t.mode!=="hotlap"){e.group.visible=!1;return}const s=t.t-this.lapT0,r=s/.05,a=Math.floor(r),o=n.pts.length/3;if(a<0||a>=o-1||s>n.lap+.5){e.group.visible=!1;return}const c=r-a,l=n.pts,h=l[a*3]+(l[a*3+3]-l[a*3])*c,u=l[a*3+1]+(l[a*3+4]-l[a*3+1])*c;let f=l[a*3+2],d=l[a*3+5];for(;d-f>Math.PI;)d-=2*Math.PI;for(;d-f<-Math.PI;)d+=2*Math.PI;const m=this.ghostQ||(this.ghostQ={});this.track.query(h,u,this.ghostHint,m),this.ghostHint=m.i,this.place(e.group,h,m.surface==="grass"?0:m.y,u,f+(d-f)*c,m.surface==="grass"?{bank:0,rx:0,rz:0}:m),e.spin+=(n.lap>0?70:0)*.016/e.dim.wheelR,e.update({steer:0,spin:e.spin,roll:0,pitch:0}),e.group.visible=!0}makeGhostCar(e){const t=po({car:e,atlas:"low",livery:{...da,paint:"#9fe6ff",accent:"#ffffff",trim:"#9fe6ff",pattern:"none",number:"",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}}});return t.group.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.38,n.material.depthWrite=!1)}),t.spin=0,this.world.scene.add(t.group),t}finishHotLap(){const e=this.race,t=e&&e.player;if(!t||this.finishing)return;this.finishing=!0;const n=t.bestLap,s=this.career.bestFor(this.trackId()),r=!!n&&(!s||n<=s);r&&this.career.noteBest(this.trackId(),n);const a={mode:"hotlap",bestLap:n,newBest:r,standings:[],track:this.trackId()};this.emit("raceFinished",a),this.endRace(),this.mode="results",this.ui&&this.ui.show("results",a)}pause(){if(!(this.mode!=="race"||this.paused)){this.paused=!0;try{Ye.setPaused(!0)}catch{}this.ui&&this.ui.show("pause")}}resume(){this.paused=!1,this.last=performance.now(),this.acc=0,this.input.clear();try{Ye.setPaused(!1)}catch{}}restart(){const e=this.cfg;if(e){this.paused=!1;try{Ye.setPaused(!1)}catch{}return this.launch(e.kind,e)}}exitToMenu(){this.paused=!1;try{Ye.setPaused(!1),Ye.music.play("menu",{fade:1})}catch{}this.clearRace(),this.mode="idle",this.camInit=!1,this.useTrack("americas"),this.refreshShowcase(),this.world.setTime("day","clear"),this.ui&&this.ui.show("menu")}cycleCamera(){this.camMode=(this.camMode+1)%3,this.settings.camera=this.camMode,this.camInit=!1;try{Ye.setPerspective(this.camMode===1?"cockpit":this.camMode===2?"broadcast":"chase")}catch{}}frame(e){requestAnimationFrame(n=>this.frame(n));let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.fps=Zn(this.fps,1/Math.max(t,.001),.05),this.t+=t,this.mode==="race"&&this.race?(this.paused||this.runRace(t),this.renderRace(t)):this.renderShowcase(t),this.world.render()}runRace(e){const t=this.race,n=t.player;if(this.input.consume("pause")){this.pause();return}if(this.input.consume("camera")&&this.cycleCamera(),this.input.consume("reset")&&n&&!n.finished&&!n.sim.tumble){const r=n.q,a=this.track.point(r.s+2,Le(r.u,-8,8),{});n.sim.place(a.x,a.z,a.heading,22),n.sim.w=0,n.sim.vy=0}this.acc+=e;let s=0;for(;this.acc>=Gs&&s<10;){const r=this.input.read(Gs,n.sim.speed);if(r.assist=this.settings.assists===0?0:1,n.controls=r,t.update(Gs),this.afterStep(),this.acc-=Gs,s++,this.mode!=="race")return}s>=10&&(this.acc=0),this.pushHud(),this.updateAudio(e)}pushHud(){const e=this.race,t=e.player,n=t.sim;if(!this.ui)return;const s=e.phase==="grid"?e.countdown>3?"Get ready":e.countdown>0?String(Math.ceil(e.countdown)):"GO":null;let r=this.flag||e.flag||null;t.finished&&(r="checker"),this.ui.hud.update({speedMph:n.speed*2.23694,speedKph:n.speed*3.6,rpm:n.rpm,rpmMax:n.C.redline,gear:n.gear,throttle:n.throttle,brake:n.brake,steer:t.controls.steer||0,lap:Le(t.lap+1,1,e.mode==="hotlap"?999:e.laps),laps:e.mode==="hotlap"?0:e.laps,pos:t.pos||1,field:e.entries.length,lastLap:t.lastLap,bestLap:t.bestLap,curLap:Math.max(0,e.t-t.lapStart),gapAhead:t.gapAhead||0,gapBehind:t.gapBehind||0,drafting:n.draft>.15,damage:n.damage,flag:r,mode:e.mode,standings:this.hudStandings(e,t),minimap:{pts:this.minimapPts,cars:e.entries.filter(a=>!a.sim.hidden).map(a=>({x:a.sim.x,z:a.sim.z,me:a.isPlayer}))},message:s})}hudStandings(e,t){const n=r=>({pos:r.pos,name:r.isPlayer?"You":r.name,gap:r.pos===1?"":`+${(r.gapLead||0).toFixed(1)}`,me:r.isPlayer,color:r.livery&&r.livery.paint||"#888"}),s=e.sorted.slice(0,7).map(n);return t.pos>7&&s.push(n(t)),s}updateAudio(e){const t=this.world.camera,n=new N;t.getWorldDirection(n);try{const s=this.vis.find(l=>l.e.isPlayer),r=s.e.sim,a=Math.sin(r.psi)*r.vx,o=Math.cos(r.psi)*r.vx;Ye.setListener({x:t.position.x,y:t.position.y,z:t.position.z},{x:a,y:0,z:o},{x:n.x,y:n.y,z:n.z});for(const l of this.vis)if(l.voice){const h=l.e.sim,u=Math.sin(h.psi),f=Math.cos(h.psi);l.voice.update({rpm:h.rpm,throttle01:h.throttle,load01:Le(h.nLoad*.5+h.throttle*.5,0,1),pos:{x:h.x,y:1,z:h.z},vel:{x:u*h.vx,y:0,z:f*h.vx}})}const c=this.race.entries.some(l=>!l.isPlayer&&Math.hypot(l.sim.x-r.x,l.sim.z-r.z)<40);Ye.ambient.update({speed:r.speed,slip01:r.skid||0,offTrack:s.e.q.surface==="grass"||s.e.q.surface==="apron",drafting01:Le(r.draft||0,0,1),crowd01:c?.5:.7,wall01:s.e.q.surface==="wall"?1:0})}catch(s){this._ae||(this._ae=1,console.warn("audio update",s))}}renderRace(e){this.race;const t=this.fx;for(const s of this.vis){const r=s.e,a=r.sim;if(a.hidden){if(s.car.group.visible=!1,s.voice){try{s.voice.dispose()}catch{}s.voice=null}continue}s.pose=s.pose||{x:0,z:0,psi:0},this.placeSim(s.car.group,a,Le(this.acc/Gs,0,1),s.pose),a.tumble?(s.roll=0,s.pitch=0,s.car.update({steer:0,spin:s.spin,roll:0,pitch:0}),s.spin+=Math.hypot(a.vx,a.vy)/s.car.dim.wheelR*e*.5):(s.spin+=a.vx/s.car.dim.wheelR*e,s.roll=Zn(s.roll,-(a.roll||0),.3),s.pitch=Zn(s.pitch,a.pitch||0,.3),s.car.update({steer:a.steer||0,spin:s.spin,roll:s.roll,pitch:s.pitch})),s.car.setBrake(a.brake),s.car.setLights(this.world.timeKey==="night"||this.world.timeKey==="sunset"),s.car.setDirt(a.dirt||0),a.dentVer!==s.dentVer&&(s.dentT||0)<=this.t&&(s.dentVer=a.dentVer,s.dentT=this.t+.3,s.car.applyDents(a.dents,a.C.cgH)),this.emitFx(s,e)}t&&(t.setView(this.world.camera,this.world.renderer),t.setLight(this.world.timeKey==="night"?.35:this.world.timeKey==="sunset"?.8:1),t.update(e)),this.updateGhost();const n=this.vis.find(s=>s.e.isPlayer);this.updateCamera(n,e),this.input.consume("look")}emitFx(e,t){const n=e.e.sim,s=this.fx;if(!s||this.paused)return;const r=this.world.camera.position,a=n.x-r.x,o=n.z-r.z;if(a*a+o*o>25600)return;const c=e.fxA||(e.fxA={g:0,d:0,s:0,k:0,b:0}),l=n.C,h=l.trackHalf||.8,u=Math.sin(n.psi),f=Math.cos(n.psi),d=n.speed,m=n.wvx,_=n.wvz,g=(M,v)=>{const S=M?l.a:-l.b,T=v?h:-h;return[n.x+u*S+f*T,n.z+f*S-u*T]};if(n.tumble){const M=n.tumble;if(!M.done&&n.fracGrass>.01||!M.done&&e.e.q.surface==="grass")for(c.d+=t*55*Math.min(1,d/25);c.d>=1;)c.d-=1,s.emit("dust",n.x,.3,n.z,m*.15,1.2,_*.15,1,1.5);return}const p=n.fracGrass;if(p>.2&&d>5){for(c.g+=t*(14+d*1.1)*p;c.g>=1;){c.g-=1;const[M,v]=g(Math.random()<.3,Math.random()<.5);s.emit(Math.random()<.55?"grass":"dirt",M,.15,v,-m*.22,1.8+Math.random()*3.5,-_*.22,1,1)}for(c.d+=t*(22+d*1.3)*p;c.d>=1;){c.d-=1;const[M,v]=g(!1,Math.random()<.5);s.emit("dust",M,.2,v,-m*.08,.7,-_*.08,1,1.2)}}if(n.skid>.3&&n.fracTrack>.4)for(c.s+=t*40*n.skid;c.s>=1;){c.s-=1;const[M,v]=g(!1,Math.random()<.5);s.emit("smoke",M,.15,v,-m*.04,.5,-_*.04,1,.6)}if(n.scrape>.4&&d>10){const M=e.e.q,v=M.u>0?1:-1;for(c.k+=t*110*n.scrape;c.k>=1;){c.k-=1;const S=n.x+(M.rx||0)*v*1,T=n.z+(M.rz||0)*v*1;s.emit("spark",S,.4+Math.random()*.4,T,m*.5,1+Math.random()*2.5,_*.5,1,1.6)}}const x=Math.max(n.damage.front,n.damage.left*.7,n.damage.right*.7);if(x>.55&&d>3)for(c.b+=t*(6+x*22);c.b>=1;)c.b-=1,s.emit("blacksmoke",n.x+u*(l.a+.4),.95,n.z+f*(l.a+.4),m*.5,1.2,_*.5,1,.6)}updateCamera(e,t){const n=this.world.camera,s=e.e.sim,r=e.pose||s,a=Object.create(s,{x:{value:r.x},z:{value:r.z},psi:{value:r.psi}}),o=e.car.group,c=e.car.dim,l=a.tumble,h=l&&this.camMode===1?0:this.camMode;if(this.camInit||(this.camYaw=a.psi),l){const v=l,T=Math.hypot(v.v.x,v.v.z)>4?Math.atan2(v.v.x,v.v.z):this.camYaw;this.camYaw+=sa(T-this.camYaw)*(1-Math.exp(-t*2.5))}else this.camYaw+=sa(a.psi-this.camYaw)*(1-Math.exp(-t*(h===2?5:10)));const u=h===1?a.psi:this.camYaw,f=new N(Math.sin(u),0,Math.cos(u)),d=new N(f.z,0,-f.x),m=new N(a.x,l?Math.max(0,a.gh):o.matrix.elements[13],a.z),_=h;let g=new N,p=new N,x=62;const M=a.speed;if(x=62+Le(M/90,0,1)*14,_===0){const v=8.2+Le(M/80,0,1)*1.2;g.copy(m).addScaledVector(f,-v).addScaledVector(d,-a.vy*.05).add(new N(0,2.5,0)),p.copy(m).addScaledVector(f,12).add(new N(0,1,0))}else _===1?(g.copy(m).addScaledVector(f,c.front*.05+.1).addScaledVector(d,.34).add(new N(0,1.05,0)),p.copy(g).addScaledVector(f,30).addScaledVector(d,(a.steer||0)*-4*0+0).add(new N(0,-.3,0)),x=74+Le(M/90,0,1)*8):(g.copy(m).addScaledVector(f,-13).add(new N(0,5.2,0)),p.copy(m).addScaledVector(f,8).add(new N(0,.8,0)),x=52+Le(M/90,0,1)*8);this.camInit||(this.camPos.copy(g),this.camTgt.copy(p),this.camInit=!0),this.camPos.copy(g),this.camTgt.copy(p),n.position.copy(this.camPos),this.shake>.01&&(n.position.x+=(Math.random()-.5)*this.shake*.35,n.position.y+=(Math.random()-.5)*this.shake*.35,this.shake*=Math.exp(-t*5)),n.lookAt(this.camTgt),Math.abs(n.fov-x)>.05&&(n.fov=Zn(n.fov,x,.08),n.updateProjectionMatrix()),this.world.followSun(m),e.car.group&&(e.car.group.visible=!0)}renderShowcase(e){if(!this.showcase||!this.showPt)return;const t=this.orbit;t.auto&&(t.az+=e*.18);const n=this.showPt,s=this.world.camera,r=n.x,a=n.y+.6,o=n.z,c=t.dist;s.position.set(r+Math.sin(t.az)*Math.cos(t.el)*c,a+Math.sin(t.el)*c+.3,o+Math.cos(t.az)*Math.cos(t.el)*c),s.lookAt(r,a,o),Math.abs(s.fov-38)>.05&&(s.fov=38,s.updateProjectionMatrix()),this.world.followSun(n)}}const Sa=new mv;function L(i,e,...t){const n=document.createElement(i);if(e)for(const r of Object.keys(e)){const a=e[r];if(!(a==null||a===!1))if(r==="class")n.className=a;else if(r==="style"&&typeof a=="object")for(const o of Object.keys(a))o.startsWith("--")?n.style.setProperty(o,a[o]):n.style[o]=a[o];else r==="dataset"?Object.assign(n.dataset,a):r.startsWith("on")&&typeof a=="function"?n.addEventListener(r.slice(2).toLowerCase(),a):r==="html"?n.innerHTML=a:a===!0?n.setAttribute(r,""):n.setAttribute(r,a)}const s=r=>{r==null||r===!1||(Array.isArray(r)?r.forEach(s):n.append(r instanceof Node?r:document.createTextNode(String(r))))};return t.forEach(s),n}const Ws=(i,e=document)=>e.querySelector(i),gv=(i,e=document)=>Array.from(e.querySelectorAll(i)),_v=(i,e,t)=>Math.min(t,Math.max(e,i)),qt=i=>Math.round(i).toLocaleString("en-US");function xi(i){if(i==null||!isFinite(i)||i<=0)return"--:--.---";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function Zh(i){if(i==null||!isFinite(i))return"--";const e=Math.abs(i).toFixed(1);return e==="0.0"?"0.0":(i>=0?"+":"-")+e}const dd=i=>{const e=["th","st","nd","rd"],t=i%100;return i+(e[(t-20)%10]||e[t]||e[0])},Kc=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,vv=i=>new Promise(e=>setTimeout(e,i)),kt=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${i}</svg>`,yv={home:kt('<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'),trophy:kt('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a2 2 0 0 0 2 4"/><path d="M16 6h3a2 2 0 0 1-2 4"/><path d="M12 13v4"/><path d="M8 20h8"/>'),flag:kt('<path d="M5 21V4"/><path d="M5 5h13l-2 4 2 4H5"/>'),stopwatch:kt('<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'),car:kt('<path d="M3 15l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v3H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),globe:kt('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>'),gear:kt('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),pause:kt('<path d="M8 5v14M16 5v14"/>'),play:kt('<path d="M7 4l13 8-13 8z"/>'),camera:kt('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>'),lock:kt('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),check:kt('<path d="M5 12l4.5 4.5L19 7"/>'),back:kt('<path d="M15 5l-7 7 7 7"/>'),chevron:kt('<path d="M9 5l7 7-7 7"/>'),coin:kt('<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),star:kt('<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'),handshake:kt('<path d="M3 12l4-4 4 2 3-2 4 3 3-1"/><path d="M7 8v7l5 4 7-5"/>'),fullscreen:kt('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>')},rn=(i,e="ico")=>{const t=document.createElement("span");return t.className=e,t.innerHTML=yv[i]||"",t},xv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 200" width="604" height="200" role="img" aria-label="Road to the Americas"><g class="mk">
  <defs>
    <linearGradient id="lring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#aab2bb"/></linearGradient>
    <radialGradient id="lsun" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe27a"/><stop offset="1" stop-color="#f4c20d"/></radialGradient>
  </defs>
  <g class="m-sun"><circle cx="100" cy="40" r="15" fill="url(#lsun)"/></g>
  <g class="m-ring"><g transform="rotate(-16 100 108)">
    <ellipse cx="100" cy="108" rx="94" ry="56" fill="none" stroke="url(#lring)" stroke-width="10" stroke-linecap="butt" pathLength="100" stroke-dasharray="90.5 9.5" stroke-dashoffset="-3"/>
    <ellipse cx="100" cy="108" rx="79" ry="43" fill="none" stroke="#3dba55" stroke-width="3.5" pathLength="100" stroke-dasharray="90.5 9.5" stroke-dashoffset="-3"/>
  </g></g>
  <g class="m-road">
    <polygon points="91,40 109,40 168,178 32,178" fill="#0f1114"/>
    <polygon points="91,40 109,40 168,178 32,178" fill="none" stroke="#f4f6f8" stroke-width="7" stroke-linejoin="round"/>
    <g fill="#3dba55" class="m-dash">
      <rect x="98.6" y="52" width="2.8" height="9" rx="1"/>
      <rect x="97.6" y="72" width="4.8" height="15" rx="1.4"/>
      <rect x="96.2" y="101" width="7.6" height="23" rx="1.8"/>
      <rect x="94" y="140" width="12" height="32" rx="2.4"/>
    </g>
  </g></g><g transform="translate(214 54) skewX(-9)" class="wm"><path class="wm1" d="M10.404 24.14 7.7860000000000005 14.756Q7.718000000000001 14.62 7.6160000000000005 14.62H6.460000000000001Q6.29 14.62 6.29 14.79V24.072Q6.29 24.242 6.171 24.361Q6.0520000000000005 24.48 5.882000000000001 24.48H1.9040000000000001Q1.7340000000000002 24.48 1.6150000000000002 24.361Q1.496 24.242 1.496 24.072V1.0879999999999974Q1.496 0.9179999999999993 1.6150000000000002 0.7989999999999995Q1.7340000000000002 0.6799999999999997 1.9040000000000001 0.6799999999999997H8.772Q10.642000000000001 0.6799999999999997 12.104000000000001 1.5809999999999995Q13.566 2.4819999999999993 14.365000000000002 4.113999999999999Q15.164000000000001 5.745999999999999 15.164000000000001 7.853999999999999Q15.164000000000001 9.86 14.399000000000001 11.39Q13.634 12.92 12.274000000000001 13.77Q12.206000000000001 13.804 12.172 13.855Q12.138000000000002 13.905999999999999 12.172 13.974L15.3 24.004L15.334000000000001 24.14Q15.334000000000001 24.48 14.96 24.48H10.88Q10.506 24.48 10.404 24.14ZM6.29 4.963999999999999V10.777999999999999Q6.29 10.947999999999999 6.460000000000001 10.947999999999999H7.99Q9.044 10.947999999999999 9.707 10.114999999999998Q10.370000000000001 9.282 10.370000000000001 7.887999999999998Q10.370000000000001 6.460000000000001 9.707 5.627000000000001Q9.044 4.7940000000000005 7.99 4.7940000000000005H6.460000000000001Q6.29 4.7940000000000005 6.29 4.963999999999999ZM22.610000000000003 18.02V7.140000000000001Q22.610000000000003 4.079999999999998 24.480000000000004 2.243999999999998Q26.350000000000005 0.4079999999999977 29.478000000000005 0.4079999999999977Q32.60600000000001 0.4079999999999977 34.49300000000001 2.243999999999998Q36.38000000000001 4.079999999999998 36.38000000000001 7.140000000000001V18.02Q36.38000000000001 21.08 34.49300000000001 22.915999999999997Q32.60600000000001 24.752 29.478000000000005 24.752Q26.350000000000005 24.752 24.480000000000004 22.915999999999997Q22.610000000000003 21.08 22.610000000000003 18.02ZM31.586000000000006 18.224V6.936Q31.586000000000006 5.847999999999999 31.008000000000006 5.184999999999999Q30.430000000000007 4.5219999999999985 29.478000000000005 4.5219999999999985Q28.526000000000003 4.5219999999999985 27.965000000000003 5.184999999999999Q27.404000000000003 5.847999999999999 27.404000000000003 6.936V18.224Q27.404000000000003 19.312 27.965000000000003 19.975Q28.526000000000003 20.638 29.478000000000005 20.638Q30.430000000000007 20.638 31.008000000000006 19.975Q31.586000000000006 19.312 31.586000000000006 18.224ZM54.02600000000001 24.106 53.482000000000006 20.842Q53.482000000000006 20.672 53.278000000000006 20.672H48.96000000000001Q48.75600000000001 20.672 48.75600000000001 20.842L48.212 24.106Q48.178000000000004 24.48 47.77000000000001 24.48H43.79200000000001Q43.35000000000001 24.48 43.452000000000005 24.038L48.45 1.0539999999999985Q48.51800000000001 0.6799999999999997 48.89200000000001 0.6799999999999997H53.482000000000006Q53.85600000000001 0.6799999999999997 53.92400000000001 1.0539999999999985L58.888000000000005 24.038L58.92200000000001 24.174Q58.92200000000001 24.48 58.54800000000001 24.48H54.468Q54.06000000000001 24.48 54.02600000000001 24.106ZM49.572 16.966H52.632000000000005Q52.80200000000001 16.966 52.76800000000001 16.796L51.17000000000001 7.513999999999999Q51.13600000000001 7.411999999999999 51.06800000000001 7.411999999999999Q51.00000000000001 7.411999999999999 50.96600000000001 7.513999999999999L49.43600000000001 16.796Q49.43600000000001 16.966 49.572 16.966ZM66.3 24.072V1.0879999999999974Q66.3 0.9179999999999993 66.419 0.7989999999999995Q66.538 0.6799999999999997 66.708 0.6799999999999997H72.862Q75.956 0.6799999999999997 77.826 2.4819999999999993Q79.696 4.283999999999999 79.696 7.276V17.884Q79.696 20.876 77.826 22.678Q75.956 24.48 72.862 24.48H66.708Q66.538 24.48 66.419 24.361Q66.3 24.242 66.3 24.072ZM71.26400000000001 20.366 72.794 20.332Q73.712 20.298000000000002 74.28999999999999 19.55Q74.868 18.802 74.902 17.578V7.582000000000001Q74.902 6.289999999999999 74.32400000000001 5.542Q73.74600000000001 4.7940000000000005 72.76 4.7940000000000005H71.26400000000001Q71.09400000000001 4.7940000000000005 71.09400000000001 4.963999999999999V20.195999999999998Q71.09400000000001 20.366 71.26400000000001 20.366ZM113.76400000000001 1.0879999999999974V4.385999999999999Q113.76400000000001 4.555999999999997 113.64500000000001 4.674999999999999Q113.52600000000001 4.7940000000000005 113.35600000000001 4.7940000000000005H109.10600000000001Q108.936 4.7940000000000005 108.936 4.963999999999999V24.072Q108.936 24.242 108.81700000000001 24.361Q108.69800000000001 24.48 108.528 24.48H104.55000000000001Q104.38000000000001 24.48 104.26100000000001 24.361Q104.14200000000001 24.242 104.14200000000001 24.072V4.963999999999999Q104.14200000000001 4.7940000000000005 103.97200000000001 4.7940000000000005H99.89200000000001Q99.72200000000001 4.7940000000000005 99.60300000000001 4.674999999999999Q99.48400000000001 4.555999999999997 99.48400000000001 4.385999999999999V1.0879999999999974Q99.48400000000001 0.9179999999999993 99.60300000000001 0.7989999999999995Q99.72200000000001 0.6799999999999997 99.89200000000001 0.6799999999999997H113.35600000000001Q113.52600000000001 0.6799999999999997 113.64500000000001 0.7989999999999995Q113.76400000000001 0.9179999999999993 113.76400000000001 1.0879999999999974ZM121.17600000000002 18.02V7.140000000000001Q121.17600000000002 4.079999999999998 123.04600000000002 2.243999999999998Q124.91600000000001 0.4079999999999977 128.044 0.4079999999999977Q131.17200000000003 0.4079999999999977 133.05900000000003 2.243999999999998Q134.94600000000003 4.079999999999998 134.94600000000003 7.140000000000001V18.02Q134.94600000000003 21.08 133.05900000000003 22.915999999999997Q131.17200000000003 24.752 128.044 24.752Q124.91600000000001 24.752 123.04600000000002 22.915999999999997Q121.17600000000002 21.08 121.17600000000002 18.02ZM130.15200000000002 18.224V6.936Q130.15200000000002 5.847999999999999 129.574 5.184999999999999Q128.996 4.5219999999999985 128.044 4.5219999999999985Q127.09200000000001 4.5219999999999985 126.531 5.184999999999999Q125.97000000000001 5.847999999999999 125.97000000000001 6.936V18.224Q125.97000000000001 19.312 126.531 19.975Q127.09200000000001 20.638 128.044 20.638Q128.996 20.638 129.574 19.975Q130.15200000000002 19.312 130.15200000000002 18.224ZM168.87800000000001 1.0879999999999974V4.385999999999999Q168.87800000000001 4.555999999999997 168.75900000000001 4.674999999999999Q168.64000000000001 4.7940000000000005 168.47 4.7940000000000005H164.22Q164.05 4.7940000000000005 164.05 4.963999999999999V24.072Q164.05 24.242 163.931 24.361Q163.812 24.48 163.64200000000002 24.48H159.66400000000002Q159.494 24.48 159.375 24.361Q159.256 24.242 159.256 24.072V4.963999999999999Q159.256 4.7940000000000005 159.086 4.7940000000000005H155.006Q154.836 4.7940000000000005 154.717 4.674999999999999Q154.598 4.555999999999997 154.598 4.385999999999999V1.0879999999999974Q154.598 0.9179999999999993 154.717 0.7989999999999995Q154.836 0.6799999999999997 155.006 0.6799999999999997H168.47Q168.64000000000001 0.6799999999999997 168.75900000000001 0.7989999999999995Q168.87800000000001 0.9179999999999993 168.87800000000001 1.0879999999999974ZM185.572 0.6799999999999997H189.55Q189.72000000000003 0.6799999999999997 189.83900000000003 0.7989999999999995Q189.95800000000003 0.9179999999999993 189.95800000000003 1.0879999999999974V24.072Q189.95800000000003 24.242 189.83900000000003 24.361Q189.72000000000003 24.48 189.55 24.48H185.572Q185.40200000000002 24.48 185.28300000000002 24.361Q185.16400000000002 24.242 185.16400000000002 24.072V14.79Q185.16400000000002 14.62 184.99400000000003 14.62H181.59400000000002Q181.424 14.62 181.424 14.79V24.072Q181.424 24.242 181.305 24.361Q181.186 24.48 181.01600000000002 24.48H177.038Q176.86800000000002 24.48 176.74900000000002 24.361Q176.63000000000002 24.242 176.63000000000002 24.072V1.0879999999999974Q176.63000000000002 0.9179999999999993 176.74900000000002 0.7989999999999995Q176.86800000000002 0.6799999999999997 177.038 0.6799999999999997H181.01600000000002Q181.186 0.6799999999999997 181.305 0.7989999999999995Q181.424 0.9179999999999993 181.424 1.0879999999999974V10.335999999999999Q181.424 10.506 181.59400000000002 10.506H184.99400000000003Q185.16400000000002 10.506 185.16400000000002 10.335999999999999V1.0879999999999974Q185.16400000000002 0.9179999999999993 185.28300000000002 0.7989999999999995Q185.40200000000002 0.6799999999999997 185.572 0.6799999999999997ZM210.46 4.7940000000000005H203.354Q203.184 4.7940000000000005 203.184 4.963999999999999V10.335999999999999Q203.184 10.506 203.354 10.506H207.434Q207.604 10.506 207.723 10.625Q207.842 10.744 207.842 10.914V14.212Q207.842 14.382 207.723 14.501Q207.604 14.62 207.434 14.62H203.354Q203.184 14.62 203.184 14.79V20.195999999999998Q203.184 20.366 203.354 20.366H210.46Q210.63 20.366 210.749 20.485Q210.868 20.604 210.868 20.774V24.072Q210.868 24.242 210.749 24.361Q210.63 24.48 210.46 24.48H198.798Q198.62800000000001 24.48 198.50900000000001 24.361Q198.39000000000001 24.242 198.39000000000001 24.072V1.0879999999999974Q198.39000000000001 0.9179999999999993 198.50900000000001 0.7989999999999995Q198.62800000000001 0.6799999999999997 198.798 0.6799999999999997H210.46Q210.63 0.6799999999999997 210.749 0.7989999999999995Q210.868 0.9179999999999993 210.868 1.0879999999999974V4.385999999999999Q210.868 4.555999999999997 210.749 4.674999999999999Q210.63 4.7940000000000005 210.46 4.7940000000000005Z" fill="#3dba55"/><g transform="translate(0 36.04)"><path class="wm2" d="M33.8 73.73599999999999 32.135999999999996 63.751999999999995Q32.135999999999996 63.232 31.511999999999997 63.232H18.304Q17.68 63.232 17.68 63.751999999999995L16.016 73.73599999999999Q15.911999999999999 74.88 14.664 74.88H2.496Q1.144 74.88 1.456 73.52799999999999L16.744 3.2240000000000038Q16.951999999999998 2.0799999999999983 18.096 2.0799999999999983H32.135999999999996Q33.28 2.0799999999999983 33.488 3.2240000000000038L48.672 73.52799999999999L48.775999999999996 73.94399999999999Q48.775999999999996 74.88 47.632 74.88H35.152Q33.903999999999996 74.88 33.8 73.73599999999999ZM20.176 51.896H29.535999999999998Q30.055999999999997 51.896 29.951999999999998 51.376L25.064 22.983999999999995Q24.959999999999997 22.671999999999997 24.752 22.671999999999997Q24.544 22.671999999999997 24.439999999999998 22.983999999999995L19.759999999999998 51.376Q19.759999999999998 51.896 20.176 51.896ZM90.792 2.0799999999999983H102.856Q103.376 2.0799999999999983 103.74 2.4439999999999955Q104.10399999999998 2.8079999999999927 104.10399999999998 3.328000000000003V73.63199999999999Q104.10399999999998 74.152 103.74 74.51599999999999Q103.376 74.88 102.856 74.88H90.68799999999999Q90.168 74.88 89.804 74.51599999999999Q89.44 74.152 89.44 73.63199999999999V26.936Q89.44 26.519999999999996 89.232 26.519999999999996Q89.024 26.519999999999996 88.816 26.832L80.704 41.184Q80.184 42.016 79.872 42.016Q79.56 42.016 79.03999999999999 41.184L70.928 26.832Q70.72 26.519999999999996 70.512 26.519999999999996Q70.304 26.519999999999996 70.304 26.936V73.63199999999999Q70.304 74.152 69.94 74.51599999999999Q69.576 74.88 69.056 74.88H56.888Q56.367999999999995 74.88 56.004 74.51599999999999Q55.64 74.152 55.64 73.63199999999999V3.328000000000003Q55.64 2.8079999999999927 56.004 2.4439999999999955Q56.367999999999995 2.0799999999999983 56.888 2.0799999999999983H68.848Q69.888 2.0799999999999983 70.408 2.911999999999992L79.664 19.448Q79.976 19.863999999999997 80.288 19.448L89.232 2.911999999999992Q89.648 2.0799999999999983 90.792 2.0799999999999983ZM151.11199999999997 14.664000000000001H129.37599999999998Q128.856 14.664000000000001 128.856 15.183999999999997V31.616Q128.856 32.135999999999996 129.37599999999998 32.135999999999996H141.856Q142.37599999999998 32.135999999999996 142.73999999999998 32.5Q143.10399999999998 32.864 143.10399999999998 33.384V43.471999999999994Q143.10399999999998 43.992 142.73999999999998 44.355999999999995Q142.37599999999998 44.72 141.856 44.72H129.37599999999998Q128.856 44.72 128.856 45.239999999999995V61.775999999999996Q128.856 62.29599999999999 129.37599999999998 62.29599999999999H151.11199999999997Q151.63199999999998 62.29599999999999 151.99599999999998 62.66Q152.35999999999999 63.023999999999994 152.35999999999999 63.544V73.63199999999999Q152.35999999999999 74.152 151.99599999999998 74.51599999999999Q151.63199999999998 74.88 151.11199999999997 74.88H115.43999999999998Q114.91999999999999 74.88 114.55599999999998 74.51599999999999Q114.19199999999998 74.152 114.19199999999998 73.63199999999999V3.328000000000003Q114.19199999999998 2.8079999999999927 114.55599999999998 2.4439999999999955Q114.91999999999999 2.0799999999999983 115.43999999999998 2.0799999999999983H151.11199999999997Q151.63199999999998 2.0799999999999983 151.99599999999998 2.4439999999999955Q152.35999999999999 2.8079999999999927 152.35999999999999 3.328000000000003V13.415999999999997Q152.35999999999999 13.936 151.99599999999998 14.3Q151.63199999999998 14.664000000000001 151.11199999999997 14.664000000000001ZM188.24 73.83999999999999 180.232 45.135999999999996Q180.024 44.72 179.712 44.72H176.176Q175.656 44.72 175.656 45.239999999999995V73.63199999999999Q175.656 74.152 175.292 74.51599999999999Q174.928 74.88 174.408 74.88H162.24Q161.72 74.88 161.356 74.51599999999999Q160.992 74.152 160.992 73.63199999999999V3.328000000000003Q160.992 2.8079999999999927 161.356 2.4439999999999955Q161.72 2.0799999999999983 162.24 2.0799999999999983H183.248Q188.968 2.0799999999999983 193.44 4.8359999999999985Q197.91199999999998 7.591999999999999 200.356 12.584Q202.8 17.576 202.8 24.024Q202.8 30.159999999999997 200.46 34.839999999999996Q198.12 39.519999999999996 193.95999999999998 42.12Q193.752 42.224 193.648 42.379999999999995Q193.54399999999998 42.535999999999994 193.648 42.744L203.216 73.42399999999999L203.32 73.83999999999999Q203.32 74.88 202.176 74.88H189.696Q188.552 74.88 188.24 73.83999999999999ZM175.656 15.183999999999997V32.967999999999996Q175.656 33.488 176.176 33.488H180.856Q184.07999999999998 33.488 186.108 30.939999999999998Q188.136 28.391999999999996 188.136 24.128Q188.136 19.759999999999998 186.108 17.212Q184.07999999999998 14.664000000000001 180.856 14.664000000000001H176.176Q175.656 14.664000000000001 175.656 15.183999999999997ZM211.224 73.63199999999999V3.328000000000003Q211.224 2.8079999999999927 211.588 2.4439999999999955Q211.952 2.0799999999999983 212.472 2.0799999999999983H224.64Q225.16 2.0799999999999983 225.524 2.4439999999999955Q225.888 2.8079999999999927 225.888 3.328000000000003V73.63199999999999Q225.888 74.152 225.524 74.51599999999999Q225.16 74.88 224.64 74.88H212.472Q211.952 74.88 211.588 74.51599999999999Q211.224 74.152 211.224 73.63199999999999ZM235.352 55.224V21.528Q235.352 12.271999999999998 241.01999999999998 6.760000000000002Q246.688 1.2480000000000047 256.048 1.2480000000000047Q265.512 1.2480000000000047 271.18 6.760000000000002Q276.848 12.271999999999998 276.848 21.528V22.671999999999997Q276.848 23.192 276.48400000000004 23.555999999999997Q276.12 23.919999999999995 275.6 23.919999999999995L263.432 24.439999999999998Q262.184 24.439999999999998 262.184 23.296V20.592Q262.184 17.576 260.52 15.704Q258.856 13.832 256.048 13.832Q253.344 13.832 251.68 15.704Q250.016 17.576 250.016 20.592V56.471999999999994Q250.016 59.488 251.68 61.308Q253.344 63.128 256.048 63.128Q258.856 63.128 260.52 61.308Q262.184 59.488 262.184 56.471999999999994V53.664Q262.184 53.14399999999999 262.548 52.779999999999994Q262.912 52.416 263.432 52.416L275.6 52.93599999999999Q276.12 52.93599999999999 276.48400000000004 53.3Q276.848 53.664 276.848 54.184V55.224Q276.848 64.584 271.12800000000004 70.148Q265.408 75.71199999999999 256.048 75.71199999999999Q246.688 75.71199999999999 241.01999999999998 70.148Q235.352 64.584 235.352 55.224ZM315.12 73.73599999999999 313.456 63.751999999999995Q313.456 63.232 312.832 63.232H299.62399999999997Q299.0 63.232 299.0 63.751999999999995L297.336 73.73599999999999Q297.23199999999997 74.88 295.984 74.88H283.816Q282.464 74.88 282.776 73.52799999999999L298.06399999999996 3.2240000000000038Q298.272 2.0799999999999983 299.416 2.0799999999999983H313.456Q314.6 2.0799999999999983 314.808 3.2240000000000038L329.99199999999996 73.52799999999999L330.096 73.94399999999999Q330.096 74.88 328.952 74.88H316.472Q315.224 74.88 315.12 73.73599999999999ZM301.496 51.896H310.856Q311.376 51.896 311.272 51.376L306.384 22.983999999999995Q306.28 22.671999999999997 306.072 22.671999999999997Q305.864 22.671999999999997 305.76 22.983999999999995L301.08 51.376Q301.08 51.896 301.496 51.896ZM335.816 56.67999999999999V53.664Q335.816 53.14399999999999 336.17999999999995 52.779999999999994Q336.544 52.416 337.06399999999996 52.416H349.02399999999994Q349.544 52.416 349.908 52.779999999999994Q350.272 53.14399999999999 350.272 53.664V55.952Q350.272 59.175999999999995 351.936 61.152Q353.59999999999997 63.128 356.09599999999995 63.128Q358.592 63.128 360.256 61.256Q361.91999999999996 59.384 361.91999999999996 56.367999999999995Q361.91999999999996 53.248 359.84 51.012Q357.76 48.775999999999996 351.72799999999995 44.408Q346.52799999999996 40.663999999999994 343.304 37.751999999999995Q340.08 34.839999999999996 337.792 30.575999999999997Q335.50399999999996 26.311999999999998 335.50399999999996 20.695999999999998Q335.50399999999996 11.856000000000002 341.01599999999996 6.552000000000003Q346.52799999999996 1.2480000000000047 355.57599999999996 1.2480000000000047Q364.72799999999995 1.2480000000000047 370.292 6.760000000000002Q375.856 12.271999999999998 375.856 21.216V23.711999999999996Q375.856 24.232 375.49199999999996 24.596Q375.128 24.96 374.60799999999995 24.96H362.64799999999997Q362.128 24.96 361.764 24.596Q361.4 24.232 361.4 23.711999999999996V20.903999999999996Q361.4 17.68 359.788 15.756Q358.176 13.832 355.57599999999996 13.832Q353.08 13.832 351.52 15.652000000000001Q349.96 17.472 349.96 20.695999999999998Q349.96 23.815999999999995 351.936 26.207999999999995Q353.912 28.599999999999994 359.736 32.864Q366.18399999999997 37.647999999999996 369.46 40.611999999999995Q372.736 43.57599999999999 374.556 47.163999999999994Q376.376 50.751999999999995 376.376 55.744Q376.376 64.896 370.76 70.304Q365.14399999999995 75.71199999999999 355.99199999999996 75.71199999999999Q349.96 75.71199999999999 345.384 73.32Q340.808 70.928 338.312 66.612Q335.816 62.29599999999999 335.816 56.67999999999999Z" fill="#f4f6f8"/></g></g></svg>
`;function zt(i,...e){try{const t=Ye&&Ye.ui&&Ye.ui[i];typeof t=="function"&&t.apply(Ye.ui,e)}catch{}}function Mv(i){try{Ye&&Ye.setVolumes&&Ye.setVolumes(i)}catch{}}function bv(i,e){try{Ye&&Ye.music&&Ye.music.play(i,e)}catch{}}function Sv(){try{return Promise.resolve(Ye&&Ye.unlock&&Ye.unlock()).catch(()=>{})}catch{return Promise.resolve()}}const Tv='button:not([disabled]), a[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',Jh="button, a[href], input, select, label.sw, [role=button]",wv=i=>i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden",yo=i=>i?gv(Tv,i).filter(wv):[];function Ev(i,{getScope:e,onBack:t,hudActive:n,onHudPause:s}){let r=null;i.addEventListener("click",d=>{const m=d.target.closest(Jh);if(!m)return;if(m.disabled||m.getAttribute("aria-disabled")==="true"){zt("error");return}const _=m.dataset.snd||(m.closest("[data-snd]")||{}).dataset?.snd;if(_!=="none"){if(_==="toggle"){zt("toggle",m.getAttribute("aria-checked")==="true");return}if(_==="back"){zt("back");return}if(_==="confirm"||m.classList.contains("btn-primary")){zt("confirm");return}if(m.classList.contains("nav-item")||m.classList.contains("tab")){zt("tab");return}zt("click")}},!1),i.addEventListener("pointerover",d=>{if(d.pointerType&&d.pointerType!=="mouse")return;const m=d.target.closest&&d.target.closest(Jh);if(!m||m===r){m||(r=null);return}r=m,!m.disabled&&m.getAttribute("aria-disabled")!=="true"&&zt("hover")}),i.addEventListener("focusin",d=>{d.target.matches&&d.target.matches(":focus-visible")&&zt("hover")});let a=0;i.addEventListener("input",d=>{if(d.target.type==="range"){const m=performance.now();m-a>70&&(a=m,zt("hover"))}});function o(d){const m=e(),_=yo(m);if(!_.length)return;const g=document.activeElement&&m.contains(document.activeElement)?document.activeElement:null;if(!g){_[0].focus({preventScroll:!1});return}const p=g.getBoundingClientRect(),x=p.left+p.width/2,M=p.top+p.height/2;let v=null,S=1/0;for(const T of _){if(T===g)continue;const E=T.getBoundingClientRect(),C=E.left+E.width/2-x,y=E.top+E.height/2-M;let b,P;if(d==="right"?(b=C,P=Math.abs(y)):d==="left"?(b=-C,P=Math.abs(y)):d==="down"?(b=y,P=Math.abs(C)):(b=-y,P=Math.abs(C)),b<=1)continue;const B=b+P*2.2;B<S&&(S=B,v=T)}v&&(v.focus(),v.scrollIntoView({block:"nearest",inline:"nearest"}))}window.addEventListener("keydown",d=>{if(d.altKey||d.ctrlKey||d.metaKey)return;if(n()){(d.code==="Escape"||d.code==="KeyP")&&(d.preventDefault(),d.stopPropagation(),d.repeat||s());return}const m=e();if(!m||(d.stopPropagation(),d.defaultPrevented))return;if(d.key==="Tab"&&!m.classList.contains("shell")){const M=yo(m);if(!M.length)return;const v=M[0],S=M[M.length-1],T=document.activeElement;m.contains(T)?d.shiftKey&&T===v?(d.preventDefault(),S.focus()):!d.shiftKey&&T===S&&(d.preventDefault(),v.focus()):(d.preventDefault(),v.focus());return}const _=document.activeElement,g=_&&_.type==="range",p=_&&_.tagName==="INPUT"&&!["range","color","checkbox"].includes(_.type),x={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};if(x[d.key]){if(g&&(d.key==="ArrowLeft"||d.key==="ArrowRight")||p)return;d.preventDefault(),o(x[d.key])}else(d.key==="Escape"||d.key==="Backspace"&&!p)&&(d.preventDefault(),t())},!0);const c={};let l=0;const h=230;function u(){l=requestAnimationFrame(u);const d=navigator.getGamepads?navigator.getGamepads():[],m=performance.now();for(const _ of d){if(!_)continue;const g=_.axes[0]||0,p=_.axes[1]||0,x={up:_.buttons[12]?.pressed||p<-.6,down:_.buttons[13]?.pressed||p>.6,left:_.buttons[14]?.pressed||g<-.6,right:_.buttons[15]?.pressed||g>.6,a:_.buttons[0]?.pressed,b:_.buttons[1]?.pressed,start:_.buttons[9]?.pressed};for(const M of Object.keys(x)){if(!x[M]){c[M]=0;continue}if(c[M]&&m-c[M]<h)continue;const v=!c[M];if(c[M]=m,n()){M==="start"&&v&&s();continue}if(M==="a"){if(v){const S=document.activeElement;S&&S.click&&S.click()}}else if(M==="b")v&&t();else if(M!=="start"&&e()){const T=document.activeElement;T&&T.type==="range"&&(M==="left"||M==="right")?(T.value=+T.value+(M==="right"?1:-1)*(T.step||.05)*2,T.dispatchEvent(new Event("input",{bubbles:!0}))):o(M)}}}}const f=()=>{l||(l=requestAnimationFrame(u))};return window.addEventListener("gamepadconnected",f),navigator.getGamepads&&Array.from(navigator.getGamepads()).some(Boolean)&&f(),{focusFirst(d){const m=yo(d),_=d&&d.querySelector("[data-autofocus]");(_&&!_.disabled?_:m[0])?.focus({preventScroll:!0})}}}function Av(i){const e=Ws("#boot");if(!e)return{setLoading(){},hide(){},el:null};const t=Ws("#boot-fill"),n=Ws("#boot-label"),s=Ws("#boot-start"),r=Ws(".boot-bar"),a=Kc()?200:1700,o=performance.now();let c=0,l=!1,h=!1,u=!1;function f(){if(u)return;u=!0,e.classList.add("ready"),s.hidden=!1,r.setAttribute("aria-valuenow","100"),n.textContent="Ready";const g=async x=>{h||x.type==="keydown"&&(x.key==="Tab"||x.key==="Shift"||x.key==="Meta"||x.key==="Alt"||x.key==="Control")||(h=!0,window.removeEventListener("keydown",g,!0),e.removeEventListener("pointerdown",g,!0),e.classList.add("go"),s.blur(),await i())};window.addEventListener("keydown",g,!0),e.addEventListener("pointerdown",g,!0),window.addEventListener("gamepadconnected",()=>{});const p=()=>{if(h)return;const x=navigator.getGamepads?navigator.getGamepads():[];for(const M of x)if(M&&M.buttons.some(v=>v.pressed)){g({type:"pad"});return}requestAnimationFrame(p)};requestAnimationFrame(p),s.focus({preventScroll:!0})}function d(){if(c>=1&&l===!1){const g=Math.max(0,a-(performance.now()-o));l=!0,setTimeout(f,g)}}let m=!1;function _(g){if(m)return;m=!0,u=!0,e.classList.remove("ready"),s.hidden=!0,t.style.transform="scaleX(1)",t.style.background="#e5332d",n.textContent=g,n.style.cssText="color:#ff8a84;text-transform:none;letter-spacing:.02em;max-width:min(86vw,560px);text-align:center;font-size:1.05rem";const p=document.createElement("button");p.type="button",p.className="boot-start",p.textContent="Reload",p.style.animation="none",p.addEventListener("click",()=>location.reload()),n.after(p),p.focus({preventScroll:!0})}return{el:e,setLoading(g,p){if(!m){if(p&&/^failed/i.test(p)){_(p);return}c=Math.max(c,Math.min(1,g)),t.style.transform=`scaleX(${c})`,r.setAttribute("aria-valuenow",String(Math.round(c*100))),p&&!u&&(n.textContent=p),d()}},hide(){e.classList.add("out"),setTimeout(()=>{e.hidden=!0},600)},show(){e.hidden=!1,e.classList.remove("out")}}}const $r=22,xo={green:["GREEN FLAG","f-green"],yellow:["CAUTION","f-yellow"],white:["WHITE FLAG · LAST LAP","f-white"],checker:["CHECKERED FLAG","f-check"]};function Rv(i){const e=L("div",{class:"hud","aria-hidden":"false"}),t={},n=(k,G="")=>L("span",{class:k},G);t.posBadge=L("div",{class:"h-pos"},t.posN=n("h-pos-n","P1"),t.posOf=n("h-pos-of","/ 1")),t.tower=L("ol",{class:"h-tower"});const s=L("div",{class:"h-tl"},t.posBadge,t.tower),r=L("div",{class:"h-btns"},L("button",{type:"button",class:"rbtn","aria-label":"Pause",dataset:{snd:"none"},onClick:()=>i.pause()},rn("pause")),L("button",{type:"button",class:"rbtn","aria-label":"Change camera",dataset:{snd:"none"},onClick:()=>i.cycleCamera()},rn("camera"))),a=(k,G,D)=>L("div",{class:`h-t ${D||""}`},n("h-t-l",G),t[k]=n("h-t-v","--:--.---"));t.lap=n("h-lap-v","LAP 1/3");const o=L("div",{class:"h-tr"},t.lap,a("cur","CURRENT","cur"),a("last","LAST"),a("best","BEST","best"));o.append(r),t.flag=L("div",{class:"h-flag",hidden:!0}),t.msg=L("div",{class:"h-msg",hidden:!0});const c=L("div",{class:"h-tc"},t.flag,t.msg);t.leds=Array.from({length:$r},(k,G)=>L("i",{class:`led ${G<12?"g":G<18?"y":"r"}`})),t.speed=n("h-spd","0"),t.unit=n("h-unit","MPH"),t.gear=n("h-gear","N"),t.rpm=n("h-rpm","0 RPM");const l=L("div",{class:"h-dash"},L("div",{class:"leds"},t.leds),L("div",{class:"h-dash-r"},L("div",{class:"h-gearbox"},n("h-gl","GEAR"),t.gear),L("div",{class:"h-spdbox"},t.speed,t.unit),L("div",{class:"h-rpmbox"},t.rpm)));t.thr=L("i",{class:"ped-f"}),t.brk=L("i",{class:"ped-f"});const h=L("div",{class:"h-ped"},L("div",{class:"ped thr"},t.thr,n("ped-l","T")),L("div",{class:"ped brk"},t.brk,n("ped-l","B")));t.gapA=n("gap-v","--"),t.gapB=n("gap-v","--"),t.draft=L("div",{class:"h-draft"},"DRAFTING");const u=L("div",{class:"h-gaps"},L("div",{class:"gap ahead"},n("gap-l","AHEAD"),t.gapA),L("div",{class:"gap behind"},n("gap-l","BEHIND"),t.gapB),t.draft);t.map=L("canvas",{class:"h-map",width:180,height:180,"aria-label":"Track map"}),t.dmg={};const f="http://www.w3.org/2000/svg",d=(k,G)=>{const D=document.createElementNS(f,k);for(const V of Object.keys(G))D.setAttribute(V,G[V]);return D},m=L("div",{class:"h-dmg","aria-label":"Car damage"},(()=>{const k=d("svg",{viewBox:"0 0 44 84"});k.append(d("path",{class:"dm-body",d:"M12 4h20a7 7 0 0 1 7 7v62a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7z"})),k.append(d("rect",{class:"dm-cab",x:13,y:28,width:18,height:26,rx:4}));const G=(D,V,W,z,K)=>{const ee=d("rect",{class:"dm ok",x:V,y:W,width:z,height:K,rx:3});t.dmg[D]=ee,k.append(ee)};return G("front",11,8,22,13),G("rear",11,63,22,13),G("left",7,24,6,36),G("right",31,24,6,36),k})()),_=L("div",{class:"h-bl"},t.map,m);e.append(s,c,o,_,l,h,u);const g={},p=(k,G,D)=>{g[k]!==D&&(g[k]=D,G.textContent=D)};let x=-1,M=null,v=null,S=null,T="",E="",C="",y=0;const b=t.map.getContext("2d");function P(k){let G=1e9,D=-1e9,V=1e9,W=-1e9;for(const[te,ae]of k)G=Math.min(G,te),D=Math.max(D,te),V=Math.min(V,ae),W=Math.max(W,ae);const z=t.map.width,K=16,ee=Math.min((z-K*2)/(D-G||1),(z-K*2)/(W-V||1)),le=(z-(D-G)*ee)/2-G*ee,me=(z-(W-V)*ee)/2-V*ee;S={s:ee,ox:le,oy:me},v=document.createElement("canvas"),v.width=v.height=z;const _e=v.getContext("2d");_e.lineJoin="round",_e.lineCap="round",_e.beginPath(),k.forEach(([te,ae],ve)=>ve?_e.lineTo(te*ee+le,ae*ee+me):_e.moveTo(te*ee+le,ae*ee+me)),_e.closePath(),_e.strokeStyle="rgba(0,0,0,.55)",_e.lineWidth=11,_e.stroke(),_e.strokeStyle="#8b939d",_e.lineWidth=6,_e.stroke();const[Oe,ke]=k[0];_e.fillStyle="#f4f6f8",_e.fillRect(Oe*ee+le-5,ke*ee+me-1.5,10,3)}function B(k){if(!k)return;const G=i.game.settings.units==="kph";p("spd",t.speed,String(Math.round(G?k.speedKph:k.speedMph))),p("unit",t.unit,G?"KM/H":"MPH"),p("gear",t.gear,k.gear===0?"N":k.gear<0?"R":String(k.gear)),p("rpm",t.rpm,`${Math.round(k.rpm/10)*10} RPM`);const D=Math.round(Math.max(0,Math.min(1,k.rpm/(k.rpmMax||9e3)))*$r);if(D!==x){for(let z=0;z<$r;z++)t.leds[z].classList.toggle("on",z<D);x=D,e.classList.toggle("redline",D>=$r-1)}if(t.thr.style.transform=`scaleY(${k.throttle||0})`,t.brk.style.transform=`scaleY(${k.brake||0})`,p("posn",t.posN,`P${k.pos}`),p("posof",t.posOf,`/ ${k.field}`),p("lap",t.lap,k.mode==="hotlap"?`LAP ${k.lap}`:`LAP ${Math.min(k.lap,k.laps)}/${k.laps}`),p("cur",t.cur,xi(k.curLap)),p("last",t.last,xi(k.lastLap)),p("best",t.best,xi(k.bestLap)),e.classList.toggle("hot",k.mode==="hotlap"),p("gapa",t.gapA,k.gapAhead==null||k.pos===1||k.mode==="hotlap"?"--":Zh(-Math.abs(k.gapAhead))),p("gapb",t.gapB,k.gapBehind==null||k.mode==="hotlap"||k.field>1&&k.pos>=k.field?"--":Zh(Math.abs(k.gapBehind))),g.dr!==!!k.drafting&&(g.dr=!!k.drafting,t.draft.classList.toggle("on",!!k.drafting)),k.damage)for(const z of["front","rear","left","right"]){const K=Math.round((k.damage[z]||0)*10);g["d"+z]!==K&&(g["d"+z]=K,t.dmg[z].setAttribute("class",`dm ${K>=7?"bad":K>=3?"mid":"ok"}`))}const V=k.flag||"";V!==E&&(E=V,V&&xo[V]?(t.flag.hidden=!1,t.flag.className=`h-flag ${xo[V][1]}`,t.flag.textContent=xo[V][0]):t.flag.hidden=!0);const W=k.message||"";if(W!==C&&(C=W,W?(t.msg.hidden=!1,t.msg.textContent=W,t.msg.classList.remove("pop"),t.msg.offsetWidth,t.msg.classList.add("pop"),clearTimeout(y),y=setTimeout(()=>{t.msg.hidden=!0},3200)):t.msg.hidden=!0),k.standings){const z=k.standings.map(K=>K.pos+K.name+(K.gap||"")).join("|");z!==T&&(T=z,t.tower.replaceChildren(...k.standings.slice(0,7).map(K=>L("li",{class:`tw${K.me?" me":""}`},L("span",{class:"tw-p"},String(K.pos)),L("i",{class:"tw-c",style:{background:K.color||"#888"}}),L("span",{class:"tw-n"},K.name),L("span",{class:"tw-g"},K.gap||"")))))}if(k.minimap&&k.minimap.pts&&k.minimap.pts.length>2){k.minimap.pts!==M&&(M=k.minimap.pts,P(M)),b.clearRect(0,0,t.map.width,t.map.height),b.drawImage(v,0,0);for(const z of k.minimap.cars||[])b.beginPath(),b.arc(z.x*S.s+S.ox,z.z*S.s+S.oy,z.me?6.5:4,0,6.2832),b.fillStyle=z.me?"#3dba55":"#e8eaed",b.fill(),z.me&&(b.lineWidth=2,b.strokeStyle="#fff",b.stroke())}}return{el:e,update:B,ref:t}}function Cv(i){const e=L("div",{class:"touch",hidden:!0}),t={steer:0,throttle:0,brake:0};let n=!1,s=!1;const r=()=>{const m=i.game.input;m&&m.setTouch&&m.setTouch({steer:t.steer?-t.steer:0,throttle:t.throttle,brake:t.brake})},a=L("i",{class:"st-knob"}),o=L("div",{class:"st-strip",role:"slider","aria-label":"Steering","aria-valuemin":-1,"aria-valuemax":1,"aria-valuenow":0},L("span",{class:"st-l"},"‹"),a,L("span",{class:"st-r"},"›"));let c=null;const l=m=>{const _=o.getBoundingClientRect(),g=Math.max(-1,Math.min(1,((m.clientX-_.left)/_.width-.5)*2*1.08));t.steer=Math.abs(g)<.04?0:g,a.style.transform=`translateX(${t.steer*(_.width/2-34)}px)`,r()};o.addEventListener("pointerdown",m=>{m.preventDefault(),c=m.pointerId;try{o.setPointerCapture(c)}catch{}o.classList.add("down"),l(m)}),o.addEventListener("pointermove",m=>{m.pointerId===c&&l(m)});const h=m=>{m.pointerId===c&&(c=null,t.steer=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h);const u=(m,_,g)=>{const p=L("div",{class:`pd ${m}`,role:"button","aria-label":_,tabindex:-1},L("span",null,_));let x=null;p.addEventListener("pointerdown",v=>{v.preventDefault(),x=v.pointerId;try{p.setPointerCapture(x)}catch{}p.classList.add("down"),t[g]=1,r(),navigator.vibrate&&navigator.vibrate(6)});const M=v=>{v.pointerId===x&&(x=null,p.classList.remove("down"),t[g]=0,r())};return p.addEventListener("pointerup",M),p.addEventListener("pointercancel",M),p};e.append(L("div",{class:"tc-l"},o),L("div",{class:"tc-r"},u("brake","BRAKE","brake"),u("gas","GAS","throttle"))),e.addEventListener("contextmenu",m=>m.preventDefault()),window.addEventListener("pointerdown",m=>{m.pointerType==="touch"&&!s&&(s=!0,d.refresh())},!0);const f=()=>{const m=i.game.settings.touch;return m===!0?!0:m===!1?!1:s||matchMedia("(pointer: coarse)").matches},d={el:e,refresh(){const m=f();n=m&&e.dataset.active==="1",e.hidden=!n,document.documentElement.classList.toggle("touch-on",m);const _=i.game.input;_&&(_.touchActive=m),n||(t.steer=t.throttle=t.brake=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())},tick(){n&&(t.steer||t.throttle||t.brake)&&r()},setActive(m){e.dataset.active=m?"1":"0",d.refresh()},wanted:f};return d}function Et(i,{kind:e="ghost",onClick:t,disabled:n=!1,title:s,icon:r,snd:a,cls:o="",type:c="button",aria:l}={}){const h=L("button",{class:`btn btn-${e} ${o}`.trim(),type:c,title:n?s||"Not available yet":s,"aria-disabled":n?"true":null,dataset:a?{snd:a}:null,...l||{}},r?rn(r):null,L("span",{class:"btn-label"},i));return n?h.disabled=!0:t&&h.addEventListener("click",t),h}function jt(i,e,t,{label:n,cls:s=""}={}){const r=L("div",{class:`seg ${s}`.trim(),role:"radiogroup","aria-label":n||null}),a=o=>{r.replaceChildren(...i.map(c=>{const l=c.value===o;return L("button",{type:"button",class:`seg-opt${l?" on":""}${c.locked?" locked":""}`,role:"radio","aria-checked":l?"true":"false",dataset:{value:String(c.value)},title:c.locked?c.cost?`Unlock for ${c.cost} credits`:"Locked":null,onClick:()=>{if(c.locked){t(c.value,c);return}a(c.value),t(c.value,c)}},c.locked?rn("lock","ico ico-s"):null,L("span",{class:"seg-l"},c.label),c.sub?L("span",{class:"seg-s"},c.sub):c.locked&&c.cost?L("span",{class:"seg-s"},String(c.cost)):null,c.default?L("span",{class:"seg-d"},"DEFAULT"):null)}))};return a(e),r.set=a,r}function jr(i,e,t,{label:n,allowCustom:s=!0}={}){const r=L("div",{class:"swatches",role:"radiogroup","aria-label":n||null}),a=o=>{if(r.replaceChildren(...i.map(c=>L("button",{type:"button",class:`sw${c.toLowerCase()===String(o).toLowerCase()?" on":""}`,style:{"--c":c},title:c,role:"radio","aria-checked":c.toLowerCase()===String(o).toLowerCase()?"true":"false","aria-label":`Colour ${c}`,onClick:()=>{a(c),t(c)}}))),s){const c=L("input",{type:"color",class:"sw-custom",value:/^#[0-9a-f]{6}$/i.test(o)?o:"#808080","aria-label":"Custom colour",title:"Custom colour"});c.addEventListener("input",()=>t(c.value)),c.addEventListener("change",()=>a(c.value)),r.append(L("label",{class:"sw sw-plus",title:"Custom colour"},c,L("span",null,"+")))}};return a(e),r.set=a,r}function Pv(i,e,{min:t=0,max:n=1,step:s=.01,label:r,fmt:a=o=>Math.round(o*100)+"%"}={}){const o=L("output",{class:"sl-out"},a(i)),c=L("input",{type:"range",min:t,max:n,step:s,value:i,class:"sl","aria-label":r||"Value"}),l=()=>c.style.setProperty("--p",(c.value-t)/(n-t)*100+"%");return c.addEventListener("input",()=>{l(),o.textContent=a(+c.value),e(+c.value)}),l(),L("div",{class:"slider"},c,o)}function fd(i,e,{label:t}={}){const n=L("button",{type:"button",class:`tg${i?" on":""}`,role:"switch","aria-checked":i?"true":"false","aria-label":t||"Toggle",dataset:{snd:"toggle"}},L("i"));return n.addEventListener("click",()=>{const s=n.getAttribute("aria-checked")!=="true";n.setAttribute("aria-checked",String(s)),n.classList.toggle("on",s),e(s)}),n}function Ct(i,e,t){return L("div",{class:"orow"},L("div",{class:"orow-t"},L("div",{class:"orow-n"},i),e?L("div",{class:"orow-s"},e):null),L("div",{class:"orow-c"},t))}function Vn(i,e=""){return L("span",{class:`chip ${e}`.trim()},i)}function Lv(i,e,t){return L("div",{class:"stat"},L("div",{class:"stat-v"},e),L("div",{class:"stat-l"},i),null)}function pd(i,e=""){return L("div",{class:`pbar ${e}`.trim()},L("i",{style:{width:_v(i,0,1)*100+"%"}}))}function qs({title:i,text:e,ic:t,kind:n="",onClick:s,disabled:r=!1,hint:a,badge:o,big:c}){const l=L("button",{type:"button",class:`tile ${n}${c?" tile-big":""}`,disabled:r,title:r?a:null,"aria-disabled":r?"true":null,dataset:n.includes("primary")?{snd:"confirm"}:null,onClick:s},L("span",{class:"tile-ic"},rn(t)),L("span",{class:"tile-b"},L("span",{class:"tile-t"},i),L("span",{class:"tile-x"},e)),o?Vn(o,r?"":"gold"):null,r?null:L("span",{class:"tile-go"},rn("chevron")));return r&&l.setAttribute("disabled",""),l}function Iv(i){const e=i.game.career,t=e.state,n=e.nextRace(),s=t.races.length===0,r=e.offers().length,a=t.races[t.races.length-1];return L("div",{class:"page page-home"},L("header",{class:"hero"},L("h1",{class:"big"},s?"Build your car.":"Back on track.",L("br"),L("span",null,s?"Earn your sponsors.":`${n.series.name}, race ${Math.min(n.index+1,n.of)} of ${n.of}`)),L("p",{class:"lead"},s?"You start with a blank car and a small local race. Finish well and sponsors will put their names on your hood.":`Last result: P${a.pos} of ${a.field}. ${r?`${r} sponsor ${r===1?"offer is":"offers are"} waiting in the Garage.`:"Keep your finishes consistent to bring in bigger sponsors."}`)),L("div",{class:"stats"},[["Reputation",qt(t.rep)],["Credits",qt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?xi(t.bestLap):"—"]].map(([c,l])=>L("div",{class:"stat"},L("div",{class:"stat-v"},l),L("div",{class:"stat-l"},c)))),L("div",{class:"tiles"},qs({big:!0,kind:"primary",title:s?"Start career":"Continue career",text:`${n.series.name} · ${n.laps} laps · ${n.field} cars`,ic:"trophy",onClick:()=>i.go("raceSetup",{mode:"career"})}),qs({title:"Quick race",text:"Pick the laps, rivals and weather",ic:"flag",onClick:()=>i.go("raceSetup",{mode:"quick"})}),qs({title:"Hot lap",text:"Alone on track. Chase your best lap",ic:"stopwatch",onClick:()=>i.go("raceSetup",{mode:"hotlap"})}),qs({title:"Garage",text:"Colours, number and sponsors",ic:"car",badge:r?`${r} ${r===1?"offer":"offers"}`:null,onClick:()=>i.go("garage")}),qs({title:"Online",text:"Race other drivers",ic:"globe",disabled:!0,hint:"Online racing is planned for a later update",badge:"Coming soon"})),L("p",{class:"page-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."))}const Yc={1:"Local",2:"Regional",3:"National",4:"Title"},lr=(i,e=120,t="sp-logo")=>{const n=Cs(i);return L("img",{class:t,src:ju(i,e*2,Math.round(e*.4)*2),alt:n?n.name:i,width:e,height:Math.round(e*.4),draggable:"false"})};function eu(i){const e=i.game.career.nextTierGoal();if(!e)return L("div",{class:"note"},rn("star"),L("span",null,"Every sponsor tier is unlocked. Keep winning to keep the contracts paying."));const t=Math.round(e.avgNow*100),n=Math.round(e.avgNeeded*100),s=[];return e.racesNeeded>0&&s.push(`Finish ${e.racesNeeded} more ${e.racesNeeded===1?"race":"races"}`),s.push(`A finish score of ${n}% or better, averaged over your last 3 races (you are at ${t}%)`),e.seriesNeeded&&s.push(`Reach the ${e.seriesNeeded} series`),L("div",{class:"goal"},L("div",{class:"goal-h"},Vn(`${Yc[e.tier]} sponsors`,"gold"),L("span",null,"Next tier needs")),L("ul",{class:"goal-l"},s.map(r=>L("li",null,r))),pd(Math.min(1,e.avgNow/e.avgNeeded),"gold"),L("div",{class:"goal-n"},"Finish score is 100% for a win and 0% for last place."))}function md(i,e){const t=i.game.career,n=t.offers(),s=L("section",{class:"card"},L("h3",{class:"card-t"},"Sponsor offers"));return n.length?(s.append(L("div",{class:"offers"},n.map(r=>L("div",{class:"offer"},lr(r.id,132),L("div",{class:"offer-t"},L("div",{class:"offer-n"},r.name),L("div",{class:"offer-s"},`${Yc[r.tier]} sponsor · pays about ${qt(r.payout)} credits a race`),L("div",{class:"offer-f"},"Best on: "+r.slots.map(a=>ra[a]).join(", "))),L("div",{class:"offer-b"},Et("Accept",{kind:"primary",icon:"handshake",onClick:()=>{t.acceptSponsor(r.id)&&(i.ui.toast(`${r.name} signed. Put them on your car in the Garage.`,"good"),e())}}),Et("Decline",{kind:"ghost",snd:"back",onClick:()=>{t.declineSponsor(r.id),e()}})))))),s.append(eu(i))):s.append(L("p",{class:"muted"},t.state.owned.length?"No new offers right now.":"No offers yet. Finish a few races in the top half of the field and sponsors will call."),eu(i)),s}function Dv(i){const e=i.game.career,t=e.state.owned.map(Cs).filter(Boolean),n=new Set(Object.values(e.state.livery.slots).filter(Boolean));return L("section",{class:"card"},L("h3",{class:"card-t"},"Sponsor contracts"),t.length?L("div",{class:"contracts"},t.map(s=>L("div",{class:"contract"},lr(s.id,96),L("div",{class:"contract-t"},L("div",{class:"offer-n"},s.name),L("div",{class:"offer-s"},`${Yc[s.tier]} · ~${qt(s.payout)} credits a race`)),n.has(s.id)?Vn("On your car","good"):Vn("Not on car","warn")))):L("p",{class:"muted"},"No contracts yet."))}function kv(i){const e=i.game.career,t=e.state,n=L("div",{class:"page page-career"}),s=()=>{n.replaceChildren(L("header",{class:"page-h"},L("h1",{class:"big"},"Career"),L("p",{class:"lead"},"Climb the series. Consistent finishes bring sponsors, and sponsors pay for every race.")),L("div",{class:"stats"},[["Reputation",qt(t.rep)],["Credits",qt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?xi(t.bestLap):"—"]].map(([r,a])=>Lv(r,a))),L("section",{class:"card"},L("h3",{class:"card-t"},"Series"),L("div",{class:"series"},gn.map((r,a)=>{const o=!e.seriesOpen(a),c=a===t.seriesIndex,l=c?t.seasonRace:0;return L("div",{class:`ser${c?" cur":""}${o?" locked":""}`},L("div",{class:"ser-h"},L("div",{class:"ser-n"},r.name),o?Vn(`Needs ${qt(r.unlockRep)} rep`,""):c?Vn("Current","good"):null),L("div",{class:"ser-m"},`${r.races} races · ${r.field} cars · ${r.ai[0].toUpperCase()+r.ai.slice(1)} rivals`),c?L("div",{class:"ser-p"},pd(l/r.races),L("span",null,`${Math.min(l,r.races)} of ${r.races} done`)):null,c?L("div",{class:"ser-m"},`Next: ${Ft[e.trackFor(r.id,t.seasonRace)].name}`):null,o?L("div",{class:"ser-l"},rn("lock"),L("span",null,`${qt(r.unlockRep-t.rep)} more reputation to unlock`)):c?Et("Race next event",{kind:"primary",icon:"play",onClick:()=>i.go("raceSetup",{mode:"career"})}):Et("Switch to this series",{onClick:()=>{e.selectSeries(a)&&(i.ui.toast(`Switched to ${r.name}`,"info"),s())}}))}))),L("div",{class:"cols"},L("div",null,md(i,s),Dv(i)),L("section",{class:"card"},L("h3",{class:"card-t"},"Recent results"),t.races.length?L("table",{class:"tbl"},L("thead",null,L("tr",null,["Series","Finish","Field"].map(r=>L("th",null,r)))),L("tbody",null,t.races.slice(-10).reverse().map(r=>{const a=gn.find(o=>o.id===r.series);return L("tr",null,L("td",null,a?a.name:r.series),L("td",{class:r.pos<=3?"good":""},dd(r.pos)),L("td",null,`${r.field} cars`))}))):L("p",{class:"muted"},"No races yet. Your first result will appear here."))))};return s(),n}function pa(i,{title:e,body:t,confirmLabel:n="OK",cancelLabel:s="Cancel",danger:r=!1,disabled:a=!1,onConfirm:o}){const c=i.ui.overlayEl,l=()=>{const f=!!c.querySelector(".ov");c.hidden=!f&&i.ui._modals.length===0,c.classList.toggle("modal-only",!f&&i.ui._modals.length>0)},h=()=>{u.remove(),i.ui._modals=i.ui._modals.filter(f=>f!==u),l(),i.ui.focusScope()},u=L("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":e},L("div",{class:"modal-card"},L("h3",{class:"modal-t"},e),L("p",{class:"modal-b"},t),L("div",{class:"modal-a"},Et(s,{kind:"ghost",snd:"back",onClick:h}),Et(n,{kind:r?"danger":"primary",disabled:a,title:a?"You do not have enough credits yet":null,onClick:()=>{h(),o&&o()}}))));return u.dataset.close="1",u.close=h,u.addEventListener("pointerdown",f=>{f.target===u&&h()}),c.append(u),i.ui._modals.push(u),l(),i.ui.focusScope(u),u}const tu=["#d9dde2","#f4f6f8","#1d1f24","#c8102e","#e8590c","#f2b134","#3dba55","#0d8a6a","#1f6fe0","#2a3f8f","#7a3fc4","#e83e8c"],Nv=["#1d1f24","#f4f6f8","#c0c6cc","#f2b134","#c8102e","#3dba55","#1f6fe0"],Uv=[["none","Plain"],["stripe","Stripe"],["split","Split"],["chevron","Chevron"],["fade","Fade"]],Fv=[["gloss","Gloss"],["matte","Matte"],["metallic","Metallic"]],Ov=[["block","Block"],["italic","Italic"],["outline","Outline"]];function Bv(i){const e=i.game,t=e.career;let n=i.params?.tab||"paint";const s=p=>e.garage.setLivery(p),r=L("div",{class:"page page-garage"}),a=L("div",{class:"garage-stage","aria-label":"Drag to rotate the car. Scroll or pinch to zoom.",role:"img"},L("div",{class:"stage-hint"},rn("car"),L("span",null,"Drag to rotate. Scroll or pinch to zoom."))),o=new Map;let c=0;a.addEventListener("pointerdown",p=>{try{a.setPointerCapture(p.pointerId)}catch{}if(o.set(p.pointerId,[p.clientX,p.clientY]),o.size===2){const[x,M]=[...o.values()];c=Math.hypot(x[0]-M[0],x[1]-M[1])}}),a.addEventListener("pointermove",p=>{const x=o.get(p.pointerId);if(x){if(o.size===2){o.set(p.pointerId,[p.clientX,p.clientY]);const[M,v]=[...o.values()],S=Math.hypot(M[0]-v[0],M[1]-v[1]);e.garage.zoom((c-S)*.01),c=S;return}e.garage.orbit(p.clientX-x[0],p.clientY-x[1]),o.set(p.pointerId,[p.clientX,p.clientY])}});const l=p=>{o.delete(p.pointerId),c=0};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("wheel",p=>{p.preventDefault(),e.garage.zoom(Math.sign(p.deltaY)*.6)},{passive:!1});const h=L("aside",{class:"garage-panel"}),u=(p,x,M,v)=>{const S=Oi[p][x],T=t.state.credits;pa(i,{title:`Unlock ${M}?`,body:`${M} costs ${qt(S)} credits. You have ${qt(T)}.`,confirmLabel:T>=S?`Unlock for ${qt(S)}`:"Not enough credits",disabled:T<S,onConfirm:()=>{t.buy(p,x)&&(i.ui.toast(`${M} unlocked`,"good"),v(),g())}})},f=(p,x,M,v)=>jt(x.map(([S,T])=>{const E=t.canUse(p,S);return{value:S,label:T,locked:!E,cost:Oi[p][S]}}),M,(S,T)=>{T.locked?u(p,S,x.find(E=>E[0]===S)[1],()=>v(S)):v(S)},{label:p}),d=[["paint","Paint"],["number","Number"],["sponsors","Sponsors"]],m=(p,...x)=>L("div",{class:"g-sec"},L("div",{class:"g-t"},p),...x);function _(){const p=t.state.livery;if(n==="paint")return[t.state.unlockAll?m("Car",jt(ed.map(v=>({value:v,label:ii[v].year+"",sub:ii[v].name.replace(/^'\d+ /,"")})),e.carIdForSeries(t.series.id),v=>{e.garage.setCar(v),g()},{label:"Car"})):null,m("Body colour",jr(tu,p.paint,v=>s({paint:v}),{label:"Body colour"})),m("Accent",jr(tu,p.accent,v=>s({accent:v}),{label:"Accent colour"})),m("Trim and wheels",jr(Nv,p.trim,v=>s({trim:v}),{label:"Trim colour"})),m("Pattern",f("pattern",Uv,p.pattern,v=>s({pattern:v}))),m("Finish",f("finish",Fv,p.finish,v=>s({finish:v})))];if(n==="number"){const v=L("input",{class:"num-in",type:"text",inputmode:"numeric",maxlength:3,value:p.number,"aria-label":"Car number",pattern:"[0-9]*"});return v.addEventListener("input",()=>{v.value=v.value.replace(/\D/g,"").slice(0,3),v.value&&s({number:v.value})}),v.addEventListener("blur",()=>{v.value||(v.value=p.number)}),[m("Car number",L("div",{class:"num-wrap"},v,L("span",{class:"muted"},"Up to three digits")),L("div",{class:"quick-nums"},["7","18","24","42","88","99"].map(S=>L("button",{type:"button",class:"qn",onClick:()=>{v.value=S,s({number:S})}},S)))),m("Style",jt(Ov.map(([S,T])=>({value:S,label:T})),p.numberStyle,S=>s({numberStyle:S}),{label:"Number style"})),m("Number colour",jr(["#1d1f24","#f4f6f8","#f2b134","#c8102e","#1f6fe0","#3dba55"],p.numberColor,S=>s({numberColor:S}),{label:"Number colour"}))]}const x=t.state.owned.map(Cs).filter(Boolean),M=[];return x.length?M.push(...pc.map(v=>{const S=p.slots[v];return L("div",{class:"slot"},L("div",{class:"slot-h"},L("div",{class:"slot-n"},ra[v]),S?lr(S,84,"sp-logo sm"):L("span",{class:"muted"},"Empty")),L("div",{class:"slot-o"},x.map(T=>L("button",{type:"button",class:`slot-pick${S===T.id?" on":""}`,title:`${T.name}${T.slots.includes(v)?" (pays full rate here)":" (pays 60% here)"}`,"aria-pressed":S===T.id?"true":"false","aria-label":`${T.name} on ${ra[v]}`,onClick:()=>{s({slots:{...t.state.livery.slots,[v]:T.id}}),g()}},lr(T.id,64,"sp-logo xs"))),S?L("button",{type:"button",class:"slot-clear","aria-label":`Clear ${ra[v]}`,dataset:{snd:"back"},onClick:()=>{s({slots:{...t.state.livery.slots,[v]:null}}),g()}},"Clear"):null))})):M.push(L("p",{class:"muted pad"},"You do not have any sponsors yet. Race well and offers will show up below.")),M.push(md(i,g)),M}function g(){const p=h.querySelector(".g-body")?.scrollTop||0;h.replaceChildren(L("div",{class:"g-head"},L("h1",{class:"big sm"},"Garage"),L("div",{class:"g-credits",title:"Credits"},rn("coin"),L("b",null,qt(t.state.credits)))),L("div",{class:"tabs",role:"tablist"},d.map(([x,M])=>L("button",{type:"button",class:`tab-b${n===x?" on":""}`,role:"tab","aria-selected":n===x?"true":"false",onClick:()=>{n=x,g()}},M,x==="sponsors"&&t.offers().length?L("i",{class:"dot","aria-label":"New offers"}):null))),L("div",{class:"g-body",role:"tabpanel"},_()),L("div",{class:"g-foot"},Et("Done",{kind:"primary",icon:"check",onClick:()=>i.go("menu")}))),h.querySelector(".g-body").scrollTop=p}return g(),r.append(a,h),r}const di={laps:3,field:12,ai:"pro",weather:"clear",time:"day",ghost:!0,track:"americas"},Xs=(i,e)=>i.map(([t,n,s])=>({value:t,label:n,sub:s,default:t===e})),zv=()=>T9.map(i=>({value:i,label:Ft[i].short,sub:`${Ft[i].miles} mi`}));function Vv(i){const e=i.params?.mode||"quick",t=i.game.career,n=t.nextRace(),s=i.game.world&&i.game.world.q&&i.game.world.q.maxCars||99,r=n.field>s;di.field>s&&(di.field=[32,24,16,12,8,4].find(m=>m<=s)||4),Ft[di.track]||(di.track="americas");const a=e==="career"?{laps:n.laps,field:Math.min(n.field,s),ai:n.ai,series:n.series.id,track:n.track,weather:di.weather,time:di.time}:{...di};e==="quick"&&!Ft[a.track].laps.includes(a.laps)&&(a.laps=Ft[a.track].laps[0]);const o=e==="career"?n.series.name:e==="hotlap"?"Hot lap":"Quick race",c=e==="career"?`Race ${Math.min(n.index+1,n.of)} of ${n.of}. The series sets the track, laps, rivals and field size. Your result counts for reputation and sponsors.`:e==="hotlap"?"Just you and the clock. No traffic, no damage penalties, and your best lap is saved for each track.":"A one-off race. Results here do not affect your career.",l=L("div",{class:"page page-setup"},L("header",{class:"page-h"},L("h1",{class:"big"},o),L("p",{class:"lead"},c))),h=L("section",{class:"card opts"});l.append(h);const u=(m,_)=>{a[m]=_,(e!=="career"||m==="weather"||m==="time")&&(di[m]=_)},f=()=>{const m=Ft[a.track],_=t.bestFor(a.track);return`${m.kind}, ${m.miles} miles, ${Math.round(m.maxBank*57.3)}° banking.${_?" Your best lap here: "+xi(_)+".":""}`},d=()=>{h.replaceChildren(),e==="career"?(h.append(Ct("Track",f(),L("div",{class:"fixed"},Vn(Ft[a.track].name,"good")))),h.append(Ct("Race",r?`Set by the series. Graphics quality limits the grid to ${s} cars; raise it in Settings for the full field.`:"Set by the series",L("div",{class:"fixed"},Vn(`${a.laps} laps`),Vn(`${a.field} cars`),Vn(`${a.ai[0].toUpperCase()+a.ai.slice(1)} rivals`))))):(h.append(Ct("Track",f(),jt(zv(),a.track,m=>{u("track",m),e==="quick"&&u("laps",Ft[m].laps[0]),d()},{label:"Track"}))),e==="quick"&&h.append(Ct("Laps","Fewer laps for a quick go",jt(Xs(Ft[a.track].laps.map(m=>[m,String(m)]),Ft[a.track].laps[0]),a.laps,m=>u("laps",m),{label:"Laps"})),Ct("AI level","Legend is the toughest",jt(Xs([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]],"pro"),a.ai,m=>u("ai",m),{label:"AI level"})),Ct("Cars in the race",s<32?`Including you. Up to ${s} at this graphics quality`:"Including you",jt(Xs([[4,"4"],[8,"8"],[12,"12"],[16,"16"],[24,"24"],[32,"32"]].filter(([m])=>m<=s),12),a.field,m=>u("field",m),{label:"Cars"}))),e==="hotlap"&&h.append(Ct("Ghost car","Race against your best lap on this track",fd(a.ghost,m=>u("ghost",m),{label:"Ghost car"})))),t.state.unlockAll&&h.append(Ct("Car","Every car is unlocked. Your paint and sponsors carry over.",jt(ed.map(m=>({value:m,label:ii[m].year+"",sub:ii[m].name.replace(/^'\d+ /,"")})),a.car||i.game.carIdForSeries(a.series||t.series.id),m=>{a.car=m,t.setCar(m)},{label:"Car"}))),h.append(Ct("Weather","Rain means less grip",jt(Xs([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]],"clear"),a.weather,m=>u("weather",m),{label:"Weather"})),Ct("Time of day",null,jt(Xs([["day","Day"],["sunset","Sunset"],["night","Night"]],"day"),a.time,m=>u("time",m),{label:"Time of day"})))};return d(),l.append(L("div",{class:"actions"},Et(e==="hotlap"?"Start hot lap":"Start race",{kind:"primary",icon:"play",onClick:()=>i.launch(e==="hotlap"?"hotlap":"race",e==="hotlap"?{ghost:a.ghost,car:a.car,track:a.track,weather:a.weather,time:a.time}:{laps:a.laps,field:a.field,ai:a.ai,series:e==="career"?a.series:void 0,track:a.track,car:a.car,weather:a.weather,time:a.time})}),Et("Back",{kind:"ghost",snd:"back",icon:"back",onClick:()=>i.go("menu")}))),l}function gd(i){const e=i.game,t=e.settings;t.volumes=Object.assign({master:.8,music:.6,sfx:.8,engine:.9,ambient:.7},t.volumes||{});const n=()=>{e.saveSettings()},s=L("div",{class:"page page-settings"},L("header",{class:"page-h"},L("h1",{class:"big"},"Settings"),L("p",{class:"lead"},"Changes save automatically. Graphics changes made during a race apply from the next one."))),r=a=>a.map(([o,c,l])=>({value:o,label:c,sub:l}));return s.append(L("section",{class:"card opts"},L("h3",{class:"card-t"},"Display and driving"),Ct("Graphics quality","Low suits older phones. Ultra needs a recent GPU.",jt(r([["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]]),t.quality,a=>{t.quality=a,n(),i.ui.applyQuality()},{label:"Graphics quality"})),Ct("Speed units",null,jt(r([["mph","mph"],["kph","km/h"]]),t.units,a=>{t.units=a,n()},{label:"Units"})),Ct("Default camera","You can change it in a race with the camera button.",jt(r([[0,"Chase"],[1,"Cockpit"],[2,"Broadcast"]]),t.camera,a=>{t.camera=a,n()},{label:"Camera"})),Ct("Driving assists","More help keeps the car steadier.",jt(r([[0,"Off"],[1,"Medium"],[2,"Full"]]),t.assists,a=>{t.assists=a,n()},{label:"Assists"})),Ct("Touch controls","Auto shows them on touch screens only.",jt(r([["auto","Auto"],[!0,"On"],[!1,"Off"]]),t.touch,a=>{t.touch=a,n(),i.ui.touch&&i.ui.touch.refresh()},{label:"Touch controls"})),document.fullscreenEnabled?Ct("Full screen",null,Et("Toggle full screen",{icon:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>i.ui.toast("Full screen was blocked by the browser","warn"))}})):null),L("section",{class:"card opts"},L("h3",{class:"card-t"},"Sound"),[["master","Master"],["music","Music"],["sfx","Menu and effects"],["engine","Engines"],["ambient","Crowd and track"]].map(([a,o])=>Ct(o,null,Pv(t.volumes[a],c=>{t.volumes[a]=c,Mv({...t.volumes}),n()},{label:o})))),L("section",{class:"card opts"},L("h3",{class:"card-t"},"Progress"),Ct("Unlock everything","Every car, sponsor, series and paint option, from the start.",fd(e.career.state.unlockAll,a=>{e.career.setUnlockAll(a),e.refreshShowcase()},{label:"Unlock everything"})),Ct("Reset career","Deletes your results, sponsors, credits and car design on this device.",Et("Reset career",{kind:"danger",onClick:()=>pa(i,{title:"Reset your career?",body:"This deletes your results, sponsors, credits and car design on this device. It cannot be undone.",confirmLabel:"Reset everything",danger:!0,onConfirm:()=>{e.career.reset(),e.garage.setLivery(JSON.parse(JSON.stringify(da))),i.ui.toast("Career reset","info"),i.go("menu")}})})))),i.params?.overlay&&s.append(L("div",{class:"actions"},Et("Back",{kind:"primary",snd:"back",icon:"back",onClick:()=>i.back()}))),s}function Hv(i){const e=i.params||{},t=e.career||null,n=e.mode==="hotlap",s=L("div",{class:"results"}),r=n?L("div",{class:"res-top"},L("div",{class:"res-pos"},L("span",{class:"res-k"},"Best lap"),L("b",null,xi(e.bestLap))),L("div",{class:"res-sub"},e.newBest?"New personal best":"Hot lap finished")):L("div",{class:"res-top"},L("div",{class:"res-pos"},L("span",{class:"res-k"},e.pos===1?"Winner":"Finished"),L("b",null,dd(e.pos||0)),L("span",{class:"res-of"},`of ${e.field||"?"}`)),L("div",{class:"res-sub"},`${e.laps||"?"} laps · best lap ${xi(e.bestLap)}`)),a=L("div",{class:"card res-card"},r,e.track&&Ft[e.track]?L("div",{class:"res-trk muted"},Ft[e.track].name):null);if(e.standings&&e.standings.length){const c=e.standings;let l=c.slice(0,8);const h=c.find(u=>u.me);h&&!l.includes(h)&&(l=[...c.slice(0,7),h]),a.append(L("table",{class:"tbl tight"},L("tbody",null,l.map((u,f)=>L("tr",{class:`${u.me?"me":""}${l[f-1]&&u.pos-l[f-1].pos>1?" gap":""}`.trim()},L("td",null,String(u.pos)),L("td",null,u.name),L("td",{class:"r"},u.gap||""))))))}t&&(a.append(L("div",{class:"earn"},L("div",{class:"earn-r"},L("span",null,"Reputation"),L("b",{class:"good"},`+${qt(t.repGain)}`)),L("div",{class:"earn-r"},L("span",null,"Prize money"),L("b",null,`+${qt(t.prize)}`)),(t.paid||[]).map(c=>L("div",{class:"earn-r"},L("span",{class:"earn-sp"},lr(c.id,56,"sp-logo xs"),c.name),L("b",null,`+${qt(c.amount)}`))),L("div",{class:"earn-r tot"},L("span",null,"Credits now"),L("b",null,qt(t.credits))))),t.newOffers&&t.newOffers.length&&a.append(L("div",{class:"note good"},rn("handshake"),L("span",null,`${t.newOffers.length} new sponsor ${t.newOffers.length===1?"offer":"offers"}: ${t.newOffers.map(c=>c.name).join(", ")}`))),t.unlockedSeries&&t.unlockedSeries.length&&a.append(L("div",{class:"note gold"},rn("trophy"),L("span",null,`Series unlocked: ${t.unlockedSeries.map(c=>c.name).join(", ")}`))));const o=L("div",{class:"actions"});return t?o.append(Et("Next race",{kind:"primary",icon:"play",onClick:()=>i.leave("raceSetup",{mode:"career"})}),t.newOffers&&t.newOffers.length?Et("View offers",{icon:"handshake",onClick:()=>i.leave("garage",{tab:"sponsors"})}):Et("Garage",{icon:"car",onClick:()=>i.leave("garage")})):o.append(Et(n?"Another lap":"Race again",{kind:"primary",icon:"play",onClick:()=>i.restart()})),o.append(Et("Main menu",{snd:"back",onClick:()=>i.leave("menu")})),s.append(a,o),s}function Gv(i){const e=i.params||{};return L("div",{class:"pause card"},L("h2",{class:"big sm"},"Paused"),e.info?L("p",{class:"lead"},e.info):null,L("div",{class:"pause-a"},Et("Resume",{kind:"primary",icon:"play",onClick:()=>i.resume()}),Et("Restart",{icon:"back",onClick:()=>pa(i,{title:"Restart this race?",body:"Your progress in this race will be lost.",confirmLabel:"Restart",onConfirm:()=>i.restart()})}),Et("Settings",{icon:"gear",onClick:()=>i.go("settings",{overlay:!0,from:"pause"})}),Et("Exit to menu",{kind:"danger",snd:"back",onClick:()=>pa(i,{title:"Leave the race?",body:"This result will not count.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.exitToMenu()})})))}const nu={menu:Iv,career:kv,garage:Bv,raceSetup:Vv,settings:gd},Wv=[{id:"menu",label:"Home",icon:"home"},{id:"career",label:"Career",icon:"trophy"},{id:"raceSetup",params:{mode:"quick"},label:"Race",icon:"flag"},{id:"raceSetup",params:{mode:"hotlap"},label:"Hot lap",icon:"stopwatch",desk:!0},{id:"garage",label:"Garage",icon:"car"},{id:"online",label:"Online",icon:"globe",disabled:!0,desk:!0,hint:"Online racing is planned for a later update"},{id:"settings",label:"Settings",icon:"gear"}],J={game:null,root:null,cur:"boot",params:{},listeners:{},nav:null,wiping:!1,music:"",hudWait:!0},Ue={_modals:[],overlayEl:null},Mo=(i,...e)=>(J.listeners[i]||[]).forEach(t=>{try{t(...e)}catch(n){console.error(n)}});Ue.on=(i,e)=>((J.listeners[i]||=[]).push(e),()=>{J.listeners[i]=J.listeners[i].filter(t=>t!==e)});Ue.current=()=>J.cur;function $c(i){return Kc()?(i(),Promise.resolve()):new Promise(e=>{const t=J.wipeEl;t.classList.remove("run"),t.offsetWidth,t.classList.add("run"),J.wiping=!0,zt("whoosh"),setTimeout(()=>{i()},330),setTimeout(()=>{t.classList.remove("run"),J.wiping=!1,e()},760)})}function Ss(){try{const i=J.game.input;i&&typeof i.clear=="function"&&i.clear()}catch{}}function ma(i){return{game:J.game,ui:Ue,params:i,go:(e,t)=>Ue.show(e,t),back:()=>Ue.back(),launch:(e,t)=>qv(e,t),restart:()=>Xv(),resume:()=>Qv(),pause:()=>Sc(),cycleCamera:()=>{const e=J.game.input;e&&e.cycleCamera?e.cycleCamera():e&&e.press&&e.press("camera")},exitToMenu:()=>bc(),leave:(e,t)=>bc(e,t)}}async function qv(i,e){J.wiping||await $c(()=>{Ss(),Ue.applyQuality(),Kv(),Ue.show("hud");const t=J.game;(i==="hotlap"?t.startHotLap:t.startRace).call(t,e)})}async function bc(i="menu",e={}){J.wiping||await $c(()=>{try{J.game.exitToMenu()}catch(t){console.error(t)}Ss(),Ue.show(i,e)})}function Xv(){Ss(),Ue.applyQuality(),J.game.restart(),Ue.show("hud")}function Qv(){Ss(),J.game.resume(),Ue.show("hud"),Ss()}Ue.applyQuality=()=>{const i=J.game,e=i&&i.world;if(!e||typeof e.setQuality!="function")return;const t=i.settings&&i.settings.quality;if(!(!t||e.quality===t||i.mode==="race"&&i.race))try{e.setQuality(t)}catch(n){console.warn("[ui] could not apply graphics quality",n)}};function Kv(){const i=J.game;i&&typeof i.camMode=="number"&&i.settings&&typeof i.settings.camera=="number"&&(i.camMode=i.settings.camera|0,i.camInit=!1)}function Sc(){J.cur==="hud"&&(J.game.pause(),Ss(),J.cur!=="pause"&&Ue.show("pause",J.pauseInfo||{}))}function Yv(){const i=t=>{const n=L("button",{type:"button",class:`nav-item${t.desk?" desk":""}`,disabled:t.disabled,title:t.disabled?t.hint:null,"aria-disabled":t.disabled?"true":null,dataset:{id:t.id,mode:t.params?.mode||""},onClick:()=>Ue.show(t.id,t.params||{})},rn(t.icon),L("span",{class:"nav-l"},t.label),t.disabled?L("span",{class:"nav-soon"},"Soon"):null);return t.disabled&&n.setAttribute("disabled",""),n};J.navItems=Wv.map(i);const e=L("nav",{class:"side","aria-label":"Main menu"},L("div",{class:"side-logo",html:xv.replace("<svg ",'<svg class="side-logo-svg" aria-hidden="true" ')}),L("div",{class:"nav"},J.navItems),L("p",{class:"side-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."));J.mainEl=L("main",{class:"main",id:"shell-main"}),J.shellEl=L("div",{class:"shell",hidden:!0},e,J.mainEl)}function $v(i,e){J.navItems.forEach(t=>{t.dataset.id===i&&(t.dataset.mode?t.dataset.mode===(e.mode==="career"?"quick":e.mode||""):!0)?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function fi({shell:i=!1,hud:e=!1,overlay:t=!1,boot:n=!1}){J.shellEl.hidden=!i,J.hudEl.hidden=!e,J.overlayEl.hidden=!t,J.bootCtl.el&&n&&J.bootCtl.show(),J.root.dataset.layer=i?"shell":e?t?"hud-overlay":"hud":t?"overlay":n?"boot":"none"}function zi(){const i=document.getElementById("game-root");if(!i)return;const e=J.cur==="garage"&&!(J.game&&J.game.usesStageRect)?Ue.stageRect():null;i.style.transform=e?`translate(${Math.round(e.x+e.width/2-innerWidth/2)}px, ${Math.round(e.y+e.height/2-innerHeight/2)}px)`:""}function jv(){const i=J.game;if(J.cur!=="garage"||!i||!i.orbit||typeof i.orbit.dist!="number"||i.usesStageRect)return;const e=Ue.stageRect();if(!e||e.width<80||e.height<80)return;const t=2*Math.tan(38/2*Math.PI/180),n=Math.max(5.8/(t*(innerWidth/innerHeight)*(e.width/innerWidth)),2.7/(t*(e.height/innerHeight)));try{i.garage.zoom(Math.min(12,Math.max(4.2,n))-i.orbit.dist)}catch{}}function bo(i){J.music!==i&&(J.music=i,bv(i,{fade:1.2}))}Ue.show=function(e,t={}){const n=J.cur;if(J.params=t,e==="none"){fi({}),J.cur="none",J.touch.setActive(!1),zi(),Mo("screen",e,t);return}if(e==="boot"){fi({boot:!0}),J.cur="boot",zi(),Mo("screen",e,t);return}J.bootCtl.el&&!J.bootCtl.el.hidden&&e!=="boot"&&J.bootCtl.hide(),J.overlayEl.querySelectorAll(".ov").forEach(r=>r.remove()),Ue._modals.forEach(r=>r.remove()),Ue._modals=[];const s=ma(t);if(nu[e]&&!(e==="settings"&&t.overlay)){if(n==="garage"&&e!=="garage")try{J.game.garage.exit()}catch(a){console.error(a)}fi({shell:!0}),J.touch.setActive(!1),Ue.applyQuality(),J.shellEl.classList.toggle("garage-mode",e==="garage"),J.shellEl.dataset.screen=e;const r=nu[e](s);if(r.classList.add("enter"),J.mainEl.replaceChildren(r),J.mainEl.scrollTop=0,$v(e,t),e==="garage"&&n!=="garage")try{J.game.garage.enter()}catch(a){console.error(a)}bo(e==="garage"?"garage":"menu")}else if(e==="hud"){if(n==="garage")try{J.game.garage.exit()}catch{}fi({hud:!0}),J.touch.setActive(!0),J.hudWait=!0,J.hudEl.classList.add("wait"),bo("race"),!J.rotHint&&J.touch.wanted()&&innerWidth<700&&innerHeight>innerWidth&&(J.rotHint=!0,setTimeout(()=>Ue.toast("Tip: turn your phone sideways for a wider view","info"),2500))}else if(e==="pause")fi({hud:!0,overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(L("div",{class:"ov ov-pause"},Gv(s)));else if(e==="results")fi({overlay:!0}),J.touch.setActive(!1),bo("results"),zt(t.pos===1?"bestLap":"lap"),J.overlayEl.append(L("div",{class:"ov ov-results"},Hv(s)));else if(e==="settings")fi({hud:n==="pause"||J.cur==="pause",overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(L("div",{class:"ov ov-settings"},gd(s)));else{console.warn("[ui] unknown screen",e);return}J.cur=e,J.pauseOverlayFrom=t.from,Mo("screen",e,t),zi(),requestAnimationFrame(()=>{zi(),Ue.focusScope()}),e==="garage"&&(n!=="garage"&&requestAnimationFrame(jv),setTimeout(zi,560))};Ue.back=function(){if(Ue._modals.length){Ue._modals[Ue._modals.length-1].close(),zt("back");return}const e=J.cur;e==="settings"&&J.params.overlay?(zt("back"),Ue.show("pause",J.pauseInfo||{})):e==="pause"?(zt("back"),ma({}).resume()):e==="results"?(zt("back"),bc()):["career","garage","raceSetup","settings"].includes(e)&&(zt("back"),Ue.show("menu"))};Ue.getScope=()=>Ue._modals.length?Ue._modals[Ue._modals.length-1]:!J.overlayEl.hidden&&J.overlayEl.querySelector(".ov")?J.overlayEl.querySelector(".ov"):J.shellEl.hidden?null:J.shellEl;Ue.focusScope=i=>{J.nav&&J.nav.focusFirst(i||Ue.getScope())};Ue.hud={update(i){J.hudWait&&(J.hudWait=!1,J.hudEl.classList.remove("wait")),J.hudCtl.update(i),J.touchCtl.tick()}};Ue.stageRect=()=>{const i=J.mainEl&&J.mainEl.querySelector(".garage-stage");if(!i||J.shellEl.hidden)return null;let e=0,t=0,n=i;for(;n&&n!==J.root;){e+=n.offsetLeft,t+=n.offsetTop;const r=n.offsetParent;r&&r!==J.root&&(e-=r.scrollLeft,t-=r.scrollTop),n=r}const s=J.root.getBoundingClientRect();return{x:e+s.left,y:t+s.top,width:i.offsetWidth,height:i.offsetHeight}};Ue.setPauseInfo=i=>{J.pauseInfo={info:i}};Ue.setLoading=(i,e)=>J.bootCtl.setLoading(i,e);Ue.touch=null;Ue.toast=(i,e="info")=>{const t=performance.now();if(J.lastToast&&J.lastToast.text===i&&t-J.lastToast.t<1500)return;J.lastToast={text:i,t};const n=L("div",{class:`toast ${e}`,role:"status"},e==="good"?rn("check"):null,L("span",null,i));for(J.toastsEl.append(n);J.toastsEl.children.length>3;)J.toastsEl.firstChild.remove();setTimeout(()=>n.classList.add("out"),3e3),setTimeout(()=>n.remove(),3500)};Ue.init=function(e,t){J.game=t,J.root=e,e.classList.add("ui-root"),J.bootCtl=Av(async()=>{await Sv(),zt("intro"),await vv(Kc()?50:900),await $c(()=>{Ue.show("menu")})}),Yv(),J.hudCtl=Rv(ma({})),J.hudEl=J.hudCtl.el,J.hudEl.hidden=!0,J.touchCtl=Cv(ma({})),Ue.touch=J.touch=J.touchCtl,J.hudEl.append(J.touchCtl.el),J.overlayEl=Ue.overlayEl=L("div",{class:"overlay",hidden:!0}),J.toastsEl=L("div",{class:"toasts","aria-live":"polite"}),J.wipeEl=L("div",{class:"wipe","aria-hidden":"true"},L("i"),L("i"),L("i")),e.append(J.shellEl,J.hudEl,J.overlayEl,J.toastsEl,J.wipeEl),J.nav=Ev(e,{getScope:()=>Ue.getScope(),onBack:()=>Ue.back(),hudActive:()=>J.cur==="hud"&&!J.overlayEl.hasChildNodes()||J.cur==="hud",onHudPause:()=>Sc()}),window.addEventListener("resize",zi),window.addEventListener("orientationchange",()=>setTimeout(zi,250)),J.pauseInfo={},t&&typeof t.on=="function"&&t.on("ready",()=>Ue.setLoading(1,"Ready")),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Zu()),document.addEventListener("visibilitychange",()=>{document.hidden&&J.cur==="hud"&&Sc()}),J.cur="boot",fi({boot:!0})};Sa.ui=Ue;Ue.init(document.getElementById("ui-root"),Sa);window.__rtta={game:Sa,ui:Ue,audio:Ye,Driver:td};const Zv=document.getElementById("game-root");Sa.init(Zv,(i,e)=>Ue.setLoading(i,e)).catch(i=>{console.error(i),Ue.setLoading(1,"Failed to start: "+(i&&i.message||i))});
