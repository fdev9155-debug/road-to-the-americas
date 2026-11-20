(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Mc="180",_d=0,el=1,vd=2,Jh=1,eu=2,jn=3,ti=0,$t=1,mn=2,pi=0,cs=1,tl=2,nl=3,il=4,yd=5,Pi=100,xd=101,Md=102,bd=103,Sd=104,Td=200,wd=201,Ed=202,Ad=203,yo=204,xo=205,Rd=206,Cd=207,Pd=208,Ld=209,Id=210,Dd=211,Nd=212,Ud=213,kd=214,Mo=0,bo=1,So=2,us=3,To=4,wo=5,Eo=6,Ao=7,tu=0,Fd=1,Od=2,mi=0,Bd=1,zd=2,Vd=3,nu=4,Hd=5,Gd=6,Wd=7,sl="attached",qd="detached",iu=300,ds=301,fs=302,Ro=303,Co=304,ua=306,gi=1e3,di=1001,na=1002,Zt=1003,su=1004,Gs=1005,hn=1006,Qr=1007,Fn=1008,zn=1009,ru=1010,au=1011,js=1012,bc=1013,Fi=1014,Rn=1015,ar=1016,Sc=1017,Tc=1018,$s=1020,ou=35902,cu=35899,lu=1021,hu=1022,_n=1023,Zs=1026,Js=1027,wc=1028,Ec=1029,uu=1030,Ac=1031,Rc=1033,Kr=33776,Yr=33777,jr=33778,$r=33779,Po=35840,Lo=35841,Io=35842,Do=35843,No=36196,Uo=37492,ko=37496,Fo=37808,Oo=37809,Bo=37810,zo=37811,Vo=37812,Ho=37813,Go=37814,Wo=37815,qo=37816,Xo=37817,Qo=37818,Ko=37819,Yo=37820,jo=37821,$o=36492,Zo=36494,Jo=36495,ec=36283,tc=36284,nc=36285,ic=36286,er=2300,tr=2301,ba=2302,rl=2400,al=2401,ol=2402,Xd=2500,Qd=0,du=1,sc=2,Kd=3200,Yd=3201,fu=0,jd=1,ui="",wt="srgb",Jt="srgb-linear",ia="linear",pt="srgb",Vi=7680,cl=519,$d=512,Zd=513,Jd=514,pu=515,ef=516,tf=517,nf=518,sf=519,rc=35044,Sa=35048,ll="300 es",On=2e3,sa=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const qs=Math.PI/180,ps=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Cc(i,e){return(i%e+e)%e}function rf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function af(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function of(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function cf(i,e=1){return e-Math.abs(Cc(i,e*2)-e)}function lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function df(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(hl=i);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*qs}function gf(i){return i*ps}function _f(i){return(i&i-1)===0&&i!==0}function vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zn={DEG2RAD:qs,RAD2DEG:ps,generateUUID:Pn,clamp:et,euclideanModulo:Cc,mapLinear:rf,inverseLerp:af,lerp:Xs,damp:of,pingpong:cf,smoothstep:lf,smootherstep:hf,randInt:uf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:_f,ceilPowerOfTwo:vf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:xf,normalize:ut,denormalize:En};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*M);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const v=o*M;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new D,ul=new bt;class Ye{constructor(e,t,n,s,r,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],v=s[7],T=s[2],w=s[5],E=s[8];return r[0]=a*_+o*M+c*T,r[3]=a*m+o*y+c*w,r[6]=a*p+o*v+c*E,r[1]=l*_+h*M+u*T,r[4]=l*m+h*y+u*w,r[7]=l*p+h*v+u*E,r[2]=d*_+f*M+g*T,r[5]=d*m+f*y+g*w,r[8]=d*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ye;function mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){const i=nr("canvas");return i.style.display="block",i}const dl={};function ir(i){i in dl||(dl[i]=!0,console.warn(i))}function bf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){const i={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jt]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}const st=Sf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class Tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=nr("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wf=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;const Aa=new D;class Ct extends xs{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=di,s=di,r=hn,a=Fn,o=_n,c=zn,l=Ct.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Pn(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=iu;Ct.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,T=(p+1)/2,w=(h+d)/4,E=(u+_)/4,C=(g+m)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=E/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=C/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Af extends xs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ct(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gu extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ur.subVectors(this.max,As),Gi.subVectors(e.a,As),Wi.subVectors(e.b,As),qi.subVectors(e.c,As),ii.subVectors(Wi,Gi),si.subVectors(qi,Wi),yi.subVectors(Gi,qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-yi.z,yi.y,ii.z,0,-ii.x,si.z,0,-si.x,yi.z,0,-yi.x,-ii.y,ii.x,0,-si.y,si.x,0,-yi.y,yi.x,0];return!Ra(t,Gi,Wi,qi,ur)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,Gi,Wi,qi,ur))?!1:(dr.crossVectors(ii,si),t=[dr.x,dr.y,dr.z],Ra(t,Gi,Wi,qi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,hr=new ni,Gi=new D,Wi=new D,qi=new D,ii=new D,si=new D,yi=new D,As=new D,ur=new D,dr=new D,xi=new D;function Ra(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Cf=new ni,Rs=new D,Ca=new D;class Hn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Ca)),this.expandByPoint(Rs.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wn=new D,Pa=new D,fr=new D,ri=new D,La=new D,pr=new D,Ia=new D;class da{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pa.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Pa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fr),o=ri.dot(this.direction),c=-ri.dot(fr),l=ri.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pa).addScaledVector(fr,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){La.subVectors(t,e),pr.subVectors(n,e),Ia.crossVectors(La,pr);let a=this.direction.dot(Ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const c=o*this.direction.dot(pr.crossVectors(ri,pr));if(c<0)return null;const l=o*this.direction.dot(La.cross(ri));if(l<0||c+l>a)return null;const h=-o*ri.dot(Ia);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),mr.crossVectors(on,ai),s[0]=ai.x,s[4]=mr.x,s[8]=on.x,s[1]=ai.y,s[5]=mr.y,s[9]=on.y,s[2]=ai.z,s[6]=mr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],T=n[15],w=s[0],E=s[4],C=s[8],x=s[12],S=s[1],P=s[5],F=s[9],I=s[13],N=s[2],k=s[6],z=s[10],G=s[14],B=s[3],K=s[7],ee=s[11],oe=s[15];return r[0]=a*w+o*S+c*N+l*B,r[4]=a*E+o*P+c*k+l*K,r[8]=a*C+o*F+c*z+l*ee,r[12]=a*x+o*I+c*G+l*oe,r[1]=h*w+u*S+d*N+f*B,r[5]=h*E+u*P+d*k+f*K,r[9]=h*C+u*F+d*z+f*ee,r[13]=h*x+u*I+d*G+f*oe,r[2]=g*w+_*S+m*N+p*B,r[6]=g*E+_*P+m*k+p*K,r[10]=g*C+_*F+m*z+p*ee,r[14]=g*x+_*I+m*G+p*oe,r[3]=M*w+y*S+v*N+T*B,r[7]=M*E+y*P+v*k+T*K,r[11]=M*C+y*F+v*z+T*ee,r[15]=M*x+y*I+v*G+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,T=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,w=t*M+n*y+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=M*E,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*E,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*E,e[4]=y*E,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*E,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*E,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*E,e[8]=v*E,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*E,e[12]=T*E,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*E,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=c*l,y=c*h,v=c*u,T=n.x,w=n.y,E=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+y)*E,s[9]=(m-M)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const l=1/r,h=1/a,u=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===sa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===sa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new D,Mn=new Xe,Pf=new D(0,0,0),Lf=new D(1,1,1),ai=new D,mr=new D,on=new D,ml=new Xe,gl=new bt;class Ht{constructor(e=0,t=0,n=0,s=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let If=0;const _l=new D,Qi=new bt,qn=new Xe,gr=new D,Cs=new D,Df=new D,Nf=new bt,vl=new D(1,0,0),yl=new D(0,1,0),xl=new D(0,0,1),Ml={type:"added"},Uf={type:"removed"},Ki={type:"childadded",child:null},Da={type:"childremoved",child:null};class vt extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new Ht,n=new bt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Cs,gr,this.up):qn.lookAt(gr,Cs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,Xn=new D,Na=new D,Qn=new D,Yi=new D,ji=new D,bl=new D,Ua=new D,ka=new D,Fa=new D,Oa=new ct,Ba=new ct,za=new ct;class An{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Xn.subVectors(n,t),Na.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Xn),c=bn.dot(Na),l=Xn.dot(Xn),h=Xn.dot(Na),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,n),za.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(za,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),ji.subVectors(r,n),Ua.subVectors(e,n);const c=Yi.dot(Ua),l=ji.dot(Ua);if(c<=0&&l<=0)return t.copy(n);ka.subVectors(e,s);const h=Yi.dot(ka),u=ji.dot(ka);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Yi,a);Fa.subVectors(e,r);const f=Yi.dot(Fa),g=ji.dot(Fa);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return bl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(bl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Yi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Cc(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Va(a,r,e+1/3),this.g=Va(a,r,e),this.b=Va(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return st.workingToColorSpace(Vt.copy(this),e),Math.round(et(Vt.r*255,0,255))*65536+Math.round(et(Vt.g*255,0,255))*256+Math.round(et(Vt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=wt){st.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(_r);const n=Xs(oi.h,_r.h,t),s=Xs(oi.s,_r.s,t),r=Xs(oi.l,_r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ge;Ge.NAMES=vu;let kf=0;class Bn extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=cs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=xo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,vr=new je;let Ff=0;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class yu extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xu extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Of=0;const fn=new Xe,Ha=new vt,$i=new D,cn=new ni,Ps=new ni,It=new D;class Bt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?xu:yu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(cn.min,Ps.min),cn.expandByPoint(It),It.addVectors(cn.max,Ps.max),cn.expandByPoint(It)):(cn.expandByPoint(Ps.min),cn.expandByPoint(Ps.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&($i.fromBufferAttribute(e,l),It.add($i)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,d=new je,f=new je,g=new je,_=new D,m=new D;function p(C,x,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[S].add(_),c[C].add(m),c[x].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,F=S.count;for(let I=P,N=P+F;I<N;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new D,v=new D,T=new D,w=new D;function E(C){T.fromBufferAttribute(s,C),w.copy(T);const x=o[C];y.copy(x),y.sub(T.multiplyScalar(T.dot(x))).normalize(),v.crossVectors(w,x);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,F=S.count;for(let I=P,N=P+F;I<N;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new Xe,Mi=new da,yr=new Hn,Tl=new D,xr=new D,Mr=new D,br=new D,Ga=new D,Sr=new D,wl=new D,Tr=new D;class lt extends vt{constructor(e=new Bt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ga.fromBufferAttribute(u,e),a?Sr.addScaledVector(Ga,h):Sr.addScaledVector(Ga.sub(t),h))}t.add(Sr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(yr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(yr,Tl)===null||Mi.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Sl.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const w=o.getX(v),E=o.getX(v+1),C=o.getX(v+2);s=wr(this,p,e,n,l,h,u,w,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=wr(this,a,e,n,l,h,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const w=v,E=v+1,C=v+2;s=wr(this,p,e,n,l,h,u,w,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;s=wr(this,a,e,n,l,h,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Bf(i,e,t,n,s,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ti,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Tr);return l<t.near||l>t.far?null:{distance:l,point:Tr.clone(),object:i}}function wr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,xr),i.getVertexPosition(c,Mr),i.getVertexPosition(l,br);const h=Bf(i,e,t,n,xr,Mr,br,wl);if(h){const u=new D;An.getBarycoord(wl,xr,Mr,br,u),s&&(h.uv=An.getInterpolatedAttribute(s,o,c,l,u,new je)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,c,l,u,new je)),a&&(h.normal=An.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};An.getNormal(xr,Mr,br,d.normal),h.face=d,h.barycoord=u}return h}class Kt extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(_,m,p,M,y,v,T,w,E,C,x){const S=v/E,P=T/C,F=v/2,I=T/2,N=w/2,k=E+1,z=C+1;let G=0,B=0;const K=new D;for(let ee=0;ee<z;ee++){const oe=ee*P-I;for(let _e=0;_e<k;_e++){const xe=_e*S-F;K[_]=xe*M,K[m]=oe*y,K[p]=N,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(_e/E),u.push(1-ee/C),G+=1}}for(let ee=0;ee<C;ee++)for(let oe=0;oe<E;oe++){const _e=d+oe+k*ee,xe=d+oe+k*(ee+1),We=d+(oe+1)+k*(ee+1),Oe=d+(oe+1)+k*ee;c.push(_e,xe,Oe),c.push(xe,We,Oe),B+=6}o.addGroup(f,B,x),f+=B,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=ms(i[t]);for(const s in n)e[s]=n[s]}return e}function zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const bu={clone:ms,merge:Qt};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Su extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,El=new je,Al=new je;class jt extends Su{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,El,Al),t.subVectors(Al,El)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Gf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const r=new jt(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const a=new jt(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const o=new jt(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const c=new jt(Zi,Ji,e,t);c.layers=this.layers,this.add(c);const l=new jt(Zi,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tu extends Ct{constructor(e=[],t=ds,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Tu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:pi});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=hn),new Gf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class vn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qf={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rl extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new D;class Ic{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ic(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cl=new D,Pl=new ct,Ll=new ct,Qf=new D,Il=new Xe,Er=new D,qa=new Hn,Dl=new Xe,Xa=new da;class Kf extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sl,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(s),e.ray.intersectsSphere(qa)!==!1&&(Dl.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Pl.fromBufferAttribute(s.attributes.skinIndex,e),Ll.fromBufferAttribute(s.attributes.skinWeight,e),Cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ll.getComponent(r);if(a!==0){const o=Pl.getComponent(r);Il.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qf.copy(Cl).applyMatrix4(Il),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wu extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Eu extends Ct{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Zt,h=Zt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nl=new Xe,Yf=new Xe;class Dc{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Yf;Nl.multiplyMatrices(o,t[r]),Nl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Eu(t,e,e,_n,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new wu),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class ac extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Xe,Ul=new Xe,Ar=[],kl=new ni,jf=new Xe,Ls=new lt,Is=new Hn;class Tn extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),kl.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Is.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Ul.multiplyMatrices(n,es),Ls.matrixWorld=Ul,Ls.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const c=Ar[a];c.instanceId=r,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eu(new Float32Array(s*this.count),s,this.count,wc,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qa=new D,$f=new D,Zf=new Ye;class Ri{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qa.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),s=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Hn,Jf=new je(.5,.5),Rr=new D;class Nc{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],y=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,f-h,p-g,T-M).normalize(),s[1].setComponents(l+a,f+h,p+g,T+M).normalize(),s[2].setComponents(l+o,f+u,p+_,T+y).normalize(),s[3].setComponents(l-o,f-u,p-_,T-y).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,T-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,T-v).normalize(),t===On)s[5].setComponents(l+c,f+d,p+m,T+v).normalize();else if(t===sa)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Jf.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Au extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new D,aa=new D,Fl=new Xe,Ds=new da,Cr=new Hn,Ka=new D,Ol=new D;class Uc extends vt{constructor(e=new Bt,t=new Au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ra.fromBufferAttribute(t,s-1),aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ra.distanceTo(aa);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Fl.copy(s).invert(),Ds.copy(e.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),y=Pr(this,e,Ds,c,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Pr(this,e,Ds,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Pr(this,e,Ds,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Pr(this,e,Ds,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ra.fromBufferAttribute(o,s),aa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,aa,Ka,Ol)>n)return;Ka.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ka);if(!(l<e.near||l>e.far))return{distance:l,point:Ol.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new D,zl=new D;class ep extends Uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bl.fromBufferAttribute(t,s),zl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bl.distanceTo(zl);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tp extends Uc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ru extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new Xe,oc=new da,Lr=new Hn,Ir=new D;class Cu extends vt{constructor(e=new Bt,t=new Ru){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;Vl.copy(s).invert(),oc.copy(e.ray).applyMatrix4(Vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ir.fromBufferAttribute(u,m),Hl(Ir,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ir.fromBufferAttribute(u,g),Hl(Ir,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(i,e,t,n,s,r,a){const o=oc.distanceSqToPoint(i);if(o<t){const c=new D;oc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pu extends Ct{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lu extends Ct{constructor(e,t,n=Fi,s,r,a,o=Zt,c=Zt,l,h=Zs,u=1){if(h!==Zs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iu extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kc extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new D,h=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qs extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function M(){const v=new D,T=new D;let w=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const x=[],S=C/r,P=S*(t-e)+e;for(let F=0;F<=s;F++){const I=F/s,N=I*c+o,k=Math.sin(N),z=Math.cos(N);T.x=P*k,T.y=-S*n+m,T.z=P*z,u.push(T.x,T.y,T.z),v.set(k,E,z).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-S),x.push(g++)}_.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const S=_[x][C],P=_[x+1][C],F=_[x+1][C+1],I=_[x][C+1];(e>0||x!==0)&&(h.push(S,P,I),w+=3),(t>0||x!==r-1)&&(h.push(P,F,I),w+=3)}l.addGroup(p,w,0),p+=w}function y(v){const T=g,w=new je,E=new D;let C=0;const x=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const N=F/s*c+o,k=Math.cos(N),z=Math.sin(N);E.x=x*z,E.y=m*S,E.z=x*k,u.push(E.x,E.y,E.z),d.push(0,S,0),w.x=k*.5+.5,w.y=z*.5*S+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const I=T+F,N=P+F;v===!0?h.push(N,N+1,I):h.push(N+1,N,I),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fc extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new D,v=new D,T=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],v),f(t[w+2],T),c(y,v,T,M)}function c(M,y,v,T){const w=T+1,E=[];for(let C=0;C<=w;C++){E[C]=[];const x=M.clone().lerp(v,C/w),S=y.clone().lerp(v,C/w),P=w-C;for(let F=0;F<=P;F++)F===0&&C===w?E[C][F]=x:E[C][F]=x.clone().lerp(S,F/P)}for(let C=0;C<w;C++)for(let x=0;x<2*(w-C)-1;x++){const S=Math.floor(x/2);x%2===0?(d(E[C][S+1]),d(E[C+1][S]),d(E[C][S])):(d(E[C][S+1]),d(E[C+1][S+1]),d(E[C+1][S]))}}function l(M){const y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const M=new D;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(v,1-T)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const y=a[M+0],v=a[M+2],T=a[M+4],w=Math.max(y,v,T),E=Math.min(y,v,T);w>.9&&E<.1&&(y<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const M=new D,y=new D,v=new D,T=new D,w=new je,E=new je,C=new je;for(let x=0,S=0;x<r.length;x+=9,S+=6){M.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),w.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),T.copy(M).add(y).add(v).divideScalar(3);const P=m(T);_(w,S+0,M,P),_(E,S+2,y,P),_(C,S+4,v,P)}}function _(M,y,v,T){T<0&&M.x===1&&(a[y]=M.x-1),v.x===0&&v.z===0&&(a[y]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.vertices,e.indices,e.radius,e.details)}}class Oc extends Fc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oc(e.radius,e.detail)}}class fi extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const y=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),w=M+1+l*p;f.push(y,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nt extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class np extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ip extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Du(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class or{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ap extends or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=e,o=2*t-n;break;case ol:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case al:a=e,c=2*n-t;break;case ol:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+M*a[l+T]+y*a[c+T]+v*a[u+T];return r}}class op extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class cp extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new op(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ap(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&sp(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=tr;class Ms extends In{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=er;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Nu extends In{constructor(e,t,n,s){super(e,t,n,s)}}Nu.prototype.ValueTypeName="color";class gs extends In{constructor(e,t,n,s){super(e,t,n,s)}}gs.prototype.ValueTypeName="number";class lp extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)bt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class _s extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lp(this.times,this.values,this.getValueSize(),e)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends In{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=er;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends In{constructor(e,t,n,s){super(e,t,n,s)}}vs.prototype.ValueTypeName="vector";class hp{constructor(e="",t=-1,n=[],s=Xd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(dp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=rp(c);c=Gl(c,1,h),l=Gl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Du(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new gs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(vs,f+".position",d,"pos",s),n(_s,f+".quaternion",d,"rot",s),n(vs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function up(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Nu;case"quaternion":return _s;case"bool":case"boolean":return Ms;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=up(i.type);if(i.times===void 0){const t=[],n=[];Du(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const $n={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pp=new fp;class Ss{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class mp extends Error{constructor(e,t){super(e),this.response=t}}class Uu extends Ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$n.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,E=h.length;w<E;w++){const C=h[w];C.onProgress&&C.onProgress(T)}p.enqueue(v),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new mp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{$n.add(`file:${e}`,l);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class gp extends Ss{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$n.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ts.get(a);u===void 0&&(u=[],ts.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=nr("img");function c(){h(),t&&t(this);const u=ts.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ts.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),$n.remove(`image:${e}`);const d=ts.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}ts.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ku extends Ss{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,a=new gp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class fa extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _p extends fa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ya=new Xe,Wl=new D,ql=new D;class Bc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vp extends Bc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yp extends fa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xl=new Xe,Ns=new D,ja=new D;class xp extends Bc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,n.coordinateSystem,n.reversedDepth)}}class Mp extends fa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zc extends Su{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bp extends Bc{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fu extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ks{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $a=new WeakMap;class Sp extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$n.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if($a.has(a)===!0)s&&s($a.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $n.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$a.set(c,l),$n.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Tp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vc="\\[\\]\\.:\\/",wp=new RegExp("["+Vc+"]","g"),Hc="[^"+Vc+"]",Ep="[^"+Vc.replace("\\.","")+"]",Ap=/((?:WC+[\/:])*)/.source.replace("WC",Hc),Rp=/(WCOD+)?/.source.replace("WCOD",Ep),Cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Lp=new RegExp("^"+Ap+Rp+Cp+Pp+"$"),Ip=["material","materials","bones","map"];class Dp{constructor(e,t,n){const s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wp,"")}static parseTrackName(e){const t=Lp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Dp;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ql(i,e,t,n){const s=Np(n);switch(t){case lu:return i*e;case wc:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case uu:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Rc:return i*e*4/s.components*s.byteLength;case Kr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Io:return Math.max(i,8)*Math.max(e,8)/2;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $o:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Np(i){switch(i){case zn:case ru:return{byteLength:1,components:1};case js:case au:case ar:return{byteLength:2,components:1};case Sc:case Tc:return{byteLength:2,components:4};case Fi:case bc:case Rn:return{byteLength:4,components:1};case ou:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function Ou(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Up(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,U0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,cg=`#define TOON
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
}`,lg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:kp,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:Bp,alphatest_fragment:zp,alphatest_pars_fragment:Vp,aomap_fragment:Hp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:qp,begin_vertex:Xp,beginnormal_vertex:Qp,bsdfs:Kp,iridescence_fragment:Yp,bumpmap_pars_fragment:jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:o0,displacementmap_pars_vertex:c0,displacementmap_vertex:l0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:R0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:x0,fog_fragment:M0,fog_pars_fragment:b0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:E0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:k0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:q0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:K0,morphcolor_vertex:Y0,morphnormal_vertex:j0,morphtarget_pars_vertex:$0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:vm,shadowmap_vertex:ym,shadowmask_pars_fragment:xm,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:Tm,specularmap_fragment:wm,specularmap_pars_fragment:Em,tonemapping_fragment:Am,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Um,background_frag:km,backgroundCube_vert:Fm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:zm,depth_vert:Vm,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:qm,equirect_frag:Xm,linedashed_vert:Qm,linedashed_frag:Km,meshbasic_vert:Ym,meshbasic_frag:jm,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Jm,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:cg,points_vert:lg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},ye={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},kn={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};kn.physical={uniforms:Qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Nr={r:0,b:0,g:0},Si=new Ht,mg=new Xe;function gg(i,e,t,n,s,r,a){const o=new Ge(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const T=g(y);T===null?p(o,c):T&&T.isColor&&(p(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===ua)?(h===void 0&&(h=new lt(new Kt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ms(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Si)),h.material.toneMapped=st.getTransfer(T.colorSpace)!==pt,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new lt(new fi(2,2),new Vn({name:"BackgroundMaterial",uniforms:ms(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(T.colorSpace)!==pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Nr,Mu(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m,dispose:M}}function _g(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,P,F,I,N){let k=!1;const z=u(I,F,P);r!==z&&(r=z,l(r.object)),k=f(S,I,F,N),k&&g(S,I,F,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(S,P,F,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,F){const I=F.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let k=N[P.id];k===void 0&&(k={},N[P.id]=k);let z=k[I];return z===void 0&&(z=d(c()),k[I]=z),z}function d(S){const P=[],F=[],I=[];for(let N=0;N<t;N++)P[N]=0,F[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,P,F,I){const N=r.attributes,k=P.attributes;let z=0;const G=F.getAttributes();for(const B in G)if(G[B].location>=0){const ee=N[B];let oe=k[B];if(oe===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function g(S,P,F,I){const N={},k=P.attributes;let z=0;const G=F.getAttributes();for(const B in G)if(G[B].location>=0){let ee=k[B];ee===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),N[B]=oe,z++}r.attributes=N,r.attributesNum=z,r.index=I}function _(){const S=r.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const F=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;F[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),N[S]!==P&&(i.vertexAttribDivisor(S,P),N[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let F=0,I=P.length;F<I;F++)P[F]!==S[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function y(S,P,F,I,N,k,z){z===!0?i.vertexAttribIPointer(S,P,F,N,k):i.vertexAttribPointer(S,P,F,I,N,k)}function v(S,P,F,I){_();const N=I.attributes,k=F.getAttributes(),z=P.defaultAttributeValues;for(const G in k){const B=k[G];if(B.location>=0){let K=N[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const ee=K.normalized,oe=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const xe=_e.buffer,We=_e.type,Oe=_e.bytesPerElement,te=We===i.INT||We===i.UNSIGNED_INT||K.gpuType===bc;if(K.isInterleavedBufferAttribute){const se=K.data,he=se.stride,Ie=K.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)p(B.location+Ee,se.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)m(B.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ee=0;Ee<B.locationSize;Ee++)y(B.location+Ee,oe/B.locationSize,We,ee,he*Oe,(Ie+oe/B.locationSize*Ee)*Oe,te)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)p(B.location+se,K.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<B.locationSize;se++)m(B.location+se);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let se=0;se<B.locationSize;se++)y(B.location+se,oe/B.locationSize,We,ee,oe*Oe,oe/B.locationSize*se*Oe,te)}}else if(z!==void 0){const ee=z[G];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(B.location,ee);break;case 3:i.vertexAttrib3fv(B.location,ee);break;case 4:i.vertexAttrib4fv(B.location,ee);break;default:i.vertexAttrib1fv(B.location,ee)}}}}M()}function T(){C();for(const S in n){const P=n[S];for(const F in P){const I=P[F];for(const N in I)h(I[N].object),delete I[N];delete P[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const F in P){const I=P[F];for(const N in I)h(I[N].object),delete I[N];delete P[F]}delete n[S.id]}function E(S){for(const P in n){const F=n[P];if(F[S.id]===void 0)continue;const I=F[S.id];for(const N in I)h(I[N].object),delete I[N];delete F[S.id]}}function C(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function vg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Rn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function xg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ri,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,y=M*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mg(i){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=ds:o===Co&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ro||o===Co)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const os=4,Kl=[.125,.215,.35,.446,.526,.582],Li=20,Za=new zc,Yl=new Ge;let Ja=null,eo=0,to=0,no=!1;const Ci=(1+Math.sqrt(5))/2,ns=1/Ci,jl=[new D(-Ci,ns,0),new D(Ci,ns,0),new D(-ns,0,Ci),new D(ns,0,Ci),new D(0,Ci,-ns),new D(0,Ci,ns),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],bg=new D;class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=bg}=r;Ja=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,eo,to),this._renderer.xr.enabled=no,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ar,format:_n,colorSpace:Jt,depthBuffer:!1},s=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(r)),this._blurMaterial=Tg(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yl),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Cn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new lt(new Kt,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Yl),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const T=this._cubeSize;Ur(s,v*T,y>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ds||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jl[(s-r-1)%jl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let M=0;for(let E=0;E<Li;++E){const C=E/_,x=Math.exp(-C*C/2);p.push(x),E===0?M+=x:E<m&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],T=3*v*(s>y-os?s-y+os:0),w=4*(this._cubeSize-v);Ur(t,T,w,3*v,2*v),c.setRenderTarget(t),c.render(u,Za)}}function Sg(i){const e=[],t=[],n=[];let s=i;const r=i-os+1+Kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-os?c=Kl[a-i+os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,x=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(x,_*g*w),y.set(d,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const T=new Bt;T.setAttribute("position",new gt(M,_)),T.setAttribute("uv",new gt(y,m)),T.setAttribute("faceIndex",new gt(v,p)),e.push(T),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(i,e,t){const n=new Oi(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tg(i,e,t){const n=new Float32Array(Li),s=new D(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Jl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function wg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ro||c===Co,h=c===ds||c===fs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new cc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new cc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Eg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,v=M.length;y<v;y+=3){const T=M[y+0],w=M[y+1],E=M[y+2];d.push(T,w,w,E,E,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const T=y+0,w=y+1,E=y+2;d.push(T,w,w,E,E,T)}}else return;const m=new(mu(d)?xu:yu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Rg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pg(i,e,t){const n=new WeakMap,s=new ct;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*w*4*u),C=new gu(E,T,w,u);C.type=Rn,C.needsUpdate=!0;const x=v*4;for(let P=0;P<u;P++){const F=p[P],I=M[P],N=y[P],k=T*w*4*P;for(let z=0;z<F.count;z++){const G=z*x;g===!0&&(s.fromBufferAttribute(F,z),E[k+G+0]=s.x,E[k+G+1]=s.y,E[k+G+2]=s.z,E[k+G+3]=0),_===!0&&(s.fromBufferAttribute(I,z),E[k+G+4]=s.x,E[k+G+5]=s.y,E[k+G+6]=s.z,E[k+G+7]=0),m===!0&&(s.fromBufferAttribute(N,z),E[k+G+8]=s.x,E[k+G+9]=s.y,E[k+G+10]=s.z,E[k+G+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new je(T,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Bu=new Ct,eh=new Lu(1,1),zu=new gu,Vu=new Rf,Hu=new Tu,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pa(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Lt(t,n)}}function Fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Lt(t,n)}}function Og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Lt(t,n)}}function Bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=pu,r=eh):r=Bu,t.setTexture2D(e||r,s)}function Kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vu,s)}function Yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hu,s)}function jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zu,s)}function $g(i){switch(i){case 5126:return Ig;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return kg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Wg;case 36295:return qg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}function Zg(i,e){i.uniform1fv(this.addr,e)}function Jg(i,e){const t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function e1(i,e){const t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function t1(i,e){const t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function n1(i,e){const t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i1(i,e){const t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s1(i,e){const t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r1(i,e){i.uniform1iv(this.addr,e)}function a1(i,e){i.uniform2iv(this.addr,e)}function o1(i,e){i.uniform3iv(this.addr,e)}function c1(i,e){i.uniform4iv(this.addr,e)}function l1(i,e){i.uniform1uiv(this.addr,e)}function h1(i,e){i.uniform2uiv(this.addr,e)}function u1(i,e){i.uniform3uiv(this.addr,e)}function d1(i,e){i.uniform4uiv(this.addr,e)}function f1(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bu,r[a])}function p1(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vu,r[a])}function m1(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hu,r[a])}function g1(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zu,r[a])}function _1(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return c1;case 5125:return l1;case 36294:return h1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class v1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}}class y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_1(t.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function M1(i,e,t){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ah(t,l===void 0?new v1(o,i,e):new y1(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new x1(o),ah(t,u)),t=u}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);M1(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b1=37297;let S1=0;function T1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ch=new Ye;function w1(i){st._getMatrix(ch,st.workingColorSpace,i);const e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case ia:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+T1(i.getShaderSource(e),o)}else return r}function E1(i,e){const t=w1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A1(i,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case Vd:t="Cineon";break;case nu:t="ACESFilmic";break;case Gd:t="AgX";break;case Wd:t="Neutral";break;case Hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new D;function R1(){st.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function P1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(I1,N1)}const D1=new Map;function N1(i,e){let t=$e[e];if(t===void 0){const n=D1.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace(U1,k1)}function k1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function F1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fs&&(e="ENVMAP_MODE_REFRACTION"),e}function z1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function V1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H1(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=F1(t),l=O1(t),h=B1(t),u=z1(t),d=V1(t),f=C1(t),g=P1(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?$e.tonemapping_pars_fragment:"",t.toneMapping!==mi?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,E1("linearToOutputTexel",t.outputColorSpace),R1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=lc(a),a=hh(a,t),a=uh(a,t),o=lc(o),o=hh(o,t),o=uh(o,t),a=dh(a),o=dh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,v=M+p+o,T=oh(s,s.VERTEX_SHADER,y),w=oh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(w)||"",k=F.trim(),z=I.trim(),G=N.trim();let B=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const ee=lh(s,T,"vertex"),oe=lh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ee+`
`+oe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||G==="")&&(K=!1);K&&(P.diagnostics={runnable:B,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(T),s.deleteShader(w),C=new Zr(s,_),x=L1(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,b1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let G1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new q1(e),t.set(e,n)),n}}class q1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(i,e,t,n,s,r,a){const o=new _u,c=new W1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,F,I){const N=F.fog,k=I.geometry,z=x.isMeshStandardMaterial?F.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),B=G&&G.mapping===ua?G.image.height:null,K=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ee!==void 0?ee.length:0;let _e=0;k.morphAttributes.position!==void 0&&(_e=1),k.morphAttributes.normal!==void 0&&(_e=2),k.morphAttributes.color!==void 0&&(_e=3);let xe,We,Oe,te;if(K){const it=kn[K];xe=it.vertexShader,We=it.fragmentShader}else xe=x.vertexShader,We=x.fragmentShader,c.update(x),Oe=c.getVertexShaderID(x),te=c.getFragmentShaderID(x);const se=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,Ve=!!x.map,ht=!!x.matcap,U=!!G,rt=!!x.aoMap,Ne=!!x.lightMap,ke=!!x.bumpMap,H=!!x.normalMap,re=!!x.displacementMap,Q=!!x.emissiveMap,Y=!!x.metalnessMap,ve=!!x.roughnessMap,ue=x.anisotropy>0,A=x.clearcoat>0,b=x.dispersion>0,O=x.iridescence>0,X=x.sheen>0,ne=x.transmission>0,Z=ue&&!!x.anisotropyMap,Se=A&&!!x.clearcoatMap,pe=A&&!!x.clearcoatNormalMap,Re=A&&!!x.clearcoatRoughnessMap,Pe=O&&!!x.iridescenceMap,le=O&&!!x.iridescenceThicknessMap,Me=X&&!!x.sheenColorMap,ze=X&&!!x.sheenRoughnessMap,Le=!!x.specularMap,ge=!!x.specularColorMap,Ke=!!x.specularIntensityMap,V=ne&&!!x.transmissionMap,de=ne&&!!x.thicknessMap,me=!!x.gradientMap,Te=!!x.alphaMap,ce=x.alphaTest>0,ae=!!x.alphaHash,Ae=!!x.extensions;let Qe=mi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const at={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:xe,fragmentShader:We,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Jt,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:ht,envMap:U,envMapMode:U&&G.mapping,envMapCubeUVHeight:B,aoMap:rt,lightMap:Ne,bumpMap:ke,normalMap:H,displacementMap:d&&re,emissiveMap:Q,normalMapObjectSpace:H&&x.normalMapType===jd,normalMapTangentSpace:H&&x.normalMapType===fu,metalnessMap:Y,roughnessMap:ve,anisotropy:ue,anisotropyMap:Z,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:b,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:le,sheen:X,sheenColorMap:Me,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:ge,specularIntensityMap:Ke,transmission:ne,transmissionMap:V,thicknessMap:de,gradientMap:me,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:ce,alphaHash:ae,combine:x.combine,mapUv:Ve&&_(x.map.channel),aoMapUv:rt&&_(x.aoMap.channel),lightMapUv:Ne&&_(x.lightMap.channel),bumpMapUv:ke&&_(x.bumpMap.channel),normalMapUv:H&&_(x.normalMap.channel),displacementMapUv:re&&_(x.displacementMap.channel),emissiveMapUv:Q&&_(x.emissiveMap.channel),metalnessMapUv:Y&&_(x.metalnessMap.channel),roughnessMapUv:ve&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:Se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(x.sheenRoughnessMap.channel),specularMapUv:Le&&_(x.specularMap.channel),specularColorMapUv:ge&&_(x.specularColorMap.channel),specularIntensityMapUv:Ke&&_(x.specularIntensityMap.channel),transmissionMapUv:V&&_(x.transmissionMap.channel),thicknessMapUv:de&&_(x.thicknessMap.channel),alphaMapUv:Te&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(H||ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Ve||Te),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Q&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&x.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const S=g[x.type];let P;if(S){const F=kn[S];P=bu.clone(F.uniforms)}else P=x.uniforms;return P}function T(x,S){let P;for(let F=0,I=h.length;F<I;F++){const N=h[F];if(N.cacheKey===S){P=N,++P.usedTimes;break}}return P===void 0&&(P=new H1(i,S,x,r),h.push(P)),P}function w(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function E(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function Q1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||K1),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Y1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new mh,i.set(n,[a])):s>=r.length?(a=new mh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function $1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Z1=0;function J1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e9(i){const e=new j1,t=$1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new Xe,a=new Xe;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,T=0,w=0,E=0;l.sort(J1);for(let x=0,S=l.length;x<S;x++){const P=l[x],F=P.color,I=P.intensity,N=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*I,u+=F.g*I,d+=F.b*I;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],I);E++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,B=t.get(P);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(I),z.distance=N,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const G=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,P.castShadow){const B=t.get(P);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=k,v++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(F).multiplyScalar(I),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const G=P.shadow,B=t.get(P);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(I),z.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=E,n.version=Z1++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function gh(i){const e=new e9(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function t9(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gh(i),e.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const n9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i9=`uniform sampler2D shadow_pass;
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
}`;function s9(i,e,t){let n=new Nc;const s=new je,r=new je,a=new ct,o=new np({depthPacking:Yd}),c=new ip,l={},h=t.maxTextureSize,u={[ti]:$t,[$t]:ti,[mn]:mn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:n9,fragmentShader:i9}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==jn&&this.type===jn,N=p===jn&&this.type!==jn;for(let k=0,z=w.length;k<z;k++){const G=w[k],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const K=B.getFrameExtents();if(s.multiply(K),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,B.mapSize.y=r.y)),B.map===null||I===!0||N===!0){const oe=this.type!==jn?{minFilter:Zt,magFilter:Zt}:{};B.map!==null&&B.map.dispose(),B.map=new Oi(s.x,s.y,oe),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ee=B.getViewportCount();for(let oe=0;oe<ee;oe++){const _e=B.getViewport(oe);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(a),B.updateMatrices(G,oe),n=B.getFrustum(),v(E,C,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&M(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,S,P)};function M(w,E){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Oi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function y(w,E,C,x){let S=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=S.uuid,I=E.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let k=N[I];k===void 0&&(k=S.clone(),N[I]=k,E.addEventListener("dispose",T)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,x===jn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=C}return S}function v(w,E,C,x,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=e.update(w),N=w.material;if(Array.isArray(N)){const k=I.groups;for(let z=0,G=k.length;z<G;z++){const B=k[z],K=N[B.materialIndex];if(K&&K.visible){const ee=y(w,K,x,S);w.onBeforeShadow(i,w,E,C,I,ee,B),i.renderBufferDirect(C,null,I,ee,w,B),w.onAfterShadow(i,w,E,C,I,ee,B)}}}else if(N.visible){const k=y(w,N,x,S);w.onBeforeShadow(i,w,E,C,I,k,null),i.renderBufferDirect(C,null,I,k,w,null),w.onAfterShadow(i,w,E,C,I,k,null)}}const F=w.children;for(let I=0,N=F.length;I<N;I++)v(F[I],E,C,x,S)}function T(w){w.target.removeEventListener("dispose",T);for(const C in l){const x=l[C],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const r9={[Mo]:bo,[So]:Eo,[To]:Ao,[us]:wo,[bo]:Mo,[Eo]:So,[Ao]:To,[wo]:us};function a9(i,e){function t(){let V=!1;const de=new ct;let me=null;const Te=new ct(0,0,0,0);return{setMask:function(ce){me!==ce&&!V&&(i.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){V=ce},setClear:function(ce,ae,Ae,Qe,at){at===!0&&(ce*=Qe,ae*=Qe,Ae*=Qe),de.set(ce,ae,Ae,Qe),Te.equals(de)===!1&&(i.clearColor(ce,ae,Ae,Qe),Te.copy(de))},reset:function(){V=!1,me=null,Te.set(-1,0,0,0)}}}function n(){let V=!1,de=!1,me=null,Te=null,ce=null;return{setReversed:function(ae){if(de!==ae){const Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),de=ae;const Qe=ce;ce=null,this.setClear(Qe)}},getReversed:function(){return de},setTest:function(ae){ae?se(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ae){me!==ae&&!V&&(i.depthMask(ae),me=ae)},setFunc:function(ae){if(de&&(ae=r9[ae]),Te!==ae){switch(ae){case Mo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ae}},setLocked:function(ae){V=ae},setClear:function(ae){ce!==ae&&(de&&(ae=1-ae),i.clearDepth(ae),ce=ae)},reset:function(){V=!1,me=null,Te=null,ce=null,de=!1}}}function s(){let V=!1,de=null,me=null,Te=null,ce=null,ae=null,Ae=null,Qe=null,at=null;return{setTest:function(it){V||(it?se(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(it){de!==it&&!V&&(i.stencilMask(it),de=it)},setFunc:function(it,sn,en){(me!==it||Te!==sn||ce!==en)&&(i.stencilFunc(it,sn,en),me=it,Te=sn,ce=en)},setOp:function(it,sn,en){(ae!==it||Ae!==sn||Qe!==en)&&(i.stencilOp(it,sn,en),ae=it,Ae=sn,Qe=en)},setLocked:function(it){V=it},setClear:function(it){at!==it&&(i.clearStencil(it),at=it)},reset:function(){V=!1,de=null,me=null,Te=null,ce=null,ae=null,Ae=null,Qe=null,at=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,w=null,E=new Ge(0,0,0),C=0,x=!1,S=null,P=null,F=null,I=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=G>=2);let K=null,ee={};const oe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),xe=new ct().fromArray(oe),We=new ct().fromArray(_e);function Oe(V,de,me,Te){const ce=new Uint8Array(4),ae=i.createTexture();i.bindTexture(V,ae),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<me;Ae++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(de+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ae}const te={};te[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(us),ke(!1),H(el),se(i.CULL_FACE),rt(pi);function se(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function he(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ie(V,de){return u[V]!==de?(i.bindFramebuffer(V,de),u[V]=de,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ee(V,de){let me=f,Te=!1;if(V){me=d.get(de),me===void 0&&(me=[],d.set(de,me));const ce=V.textures;if(me.length!==ce.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ae=ce.length;ae<Ae;ae++)me[ae]=i.COLOR_ATTACHMENT0+ae;me.length=ce.length,Te=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Te=!0);Te&&i.drawBuffers(me)}function Ve(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const ht={[Pi]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};ht[bd]=i.MIN,ht[Sd]=i.MAX;const U={[Td]:i.ZERO,[wd]:i.ONE,[Ed]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[Ld]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(V,de,me,Te,ce,ae,Ae,Qe,at,it){if(V===pi){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),V!==yd){if(V!==m||it!==x){if((p!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,v=Pi),it)switch(V){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case il:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,y=null,T=null,w=null,E.set(0,0,0),C=0,m=V,x=it}return}ce=ce||de,ae=ae||me,Ae=Ae||Te,(de!==p||ce!==v)&&(i.blendEquationSeparate(ht[de],ht[ce]),p=de,v=ce),(me!==M||Te!==y||ae!==T||Ae!==w)&&(i.blendFuncSeparate(U[me],U[Te],U[ae],U[Ae]),M=me,y=Te,T=ae,w=Ae),(Qe.equals(E)===!1||at!==C)&&(i.blendColor(Qe.r,Qe.g,Qe.b,at),E.copy(Qe),C=at),m=V,x=!1}function Ne(V,de){V.side===mn?he(i.CULL_FACE):se(i.CULL_FACE);let me=V.side===$t;de&&(me=!me),ke(me),V.blending===cs&&V.transparent===!1?rt(pi):rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Te=V.stencilWrite;o.setTest(Te),Te&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function H(V){V!==_d?(se(i.CULL_FACE),V!==P&&(V===el?i.cullFace(i.BACK):V===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),P=V}function re(V){V!==F&&(z&&i.lineWidth(V),F=V)}function Q(V,de,me){V?(se(i.POLYGON_OFFSET_FILL),(I!==de||N!==me)&&(i.polygonOffset(de,me),I=de,N=me)):he(i.POLYGON_OFFSET_FILL)}function Y(V){V?se(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function ve(V){V===void 0&&(V=i.TEXTURE0+k-1),K!==V&&(i.activeTexture(V),K=V)}function ue(V,de,me){me===void 0&&(K===null?me=i.TEXTURE0+k-1:me=K);let Te=ee[me];Te===void 0&&(Te={type:void 0,texture:void 0},ee[me]=Te),(Te.type!==V||Te.texture!==de)&&(K!==me&&(i.activeTexture(me),K=me),i.bindTexture(V,de||te[V]),Te.type=V,Te.texture=de)}function A(){const V=ee[K];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(V){xe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),xe.copy(V))}function ze(V){We.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function Le(V,de){let me=l.get(de);me===void 0&&(me=new WeakMap,l.set(de,me));let Te=me.get(V);Te===void 0&&(Te=i.getUniformBlockIndex(de,V.name),me.set(V,Te))}function ge(V,de){const Te=l.get(de).get(V);c.get(de)!==Te&&(i.uniformBlockBinding(de,Te,V.__bindingPointIndex),c.set(de,Te))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ee={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,w=null,E=new Ge(0,0,0),C=0,x=!1,S=null,P=null,F=null,I=null,N=null,xe.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:he,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Ve,setBlending:rt,setMaterial:Ne,setFlipSided:ke,setCullFace:H,setLineWidth:re,setPolygonOffset:Q,setScissorTest:Y,activeTexture:ve,bindTexture:ue,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Pe,texImage3D:le,updateUBOMapping:Le,uniformBlockBinding:ge,texStorage2D:pe,texStorage3D:Re,texSubImage2D:X,texSubImage3D:ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:Se,scissor:Me,viewport:ze,reset:Ke}}function o9(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):nr("canvas")}function _(A,b,O){let X=1;const ne=ue(A);if((ne.width>O||ne.height>O)&&(X=O/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(X*ne.width),Se=Math.floor(X*ne.height);u===void 0&&(u=g(Z,Se));const pe=b?g(Z,Se):u;return pe.width=Z,pe.height=Se,pe.getContext("2d").drawImage(A,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Se+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,b,O,X,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=b;if(b===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){const Se=ne?ia:st.getTransfer(X);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Se===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,b){let O;return A?b===null||b===Fi||b===$s?O=i.DEPTH24_STENCIL8:b===Rn?O=i.DEPTH32F_STENCIL8:b===js&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===$s?O=i.DEPTH_COMPONENT24:b===Rn?O=i.DEPTH_COMPONENT32F:b===js&&(O=i.DEPTH_COMPONENT16),O}function T(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&h.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),S(b)}function C(A){const b=n.get(A);if(b.__webglInit===void 0)return;const O=A.source,X=d.get(O);if(X){const ne=X[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&x(A),Object.keys(X).length===0&&d.delete(O)}n.remove(A)}function x(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const O=A.source,X=d.get(O);delete X[b.__cacheKey],a.memory.textures--}function S(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let ne=0;ne<b.__webglFramebuffer[X].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[X][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let X=0,ne=O.length;X<ne;X++){const Z=n.get(O[X]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(A)}let P=0;function F(){P=0}function I(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function N(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function k(A,b){const O=n.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(O,A,b);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function z(A,b){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){te(O,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function G(A,b){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){te(O,A,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function B(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const K={[gi]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ee={[Zt]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},oe={[$d]:i.NEVER,[sf]:i.ALWAYS,[Zd]:i.LESS,[pu]:i.LEQUAL,[Jd]:i.EQUAL,[nf]:i.GEQUAL,[ef]:i.GREATER,[tf]:i.NOTEQUAL};function _e(A,b){if(b.type===Rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===Qr||b.magFilter===Gs||b.magFilter===Fn||b.minFilter===hn||b.minFilter===Qr||b.minFilter===Gs||b.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==Gs&&b.minFilter!==Fn||b.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function xe(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const X=b.source;let ne=d.get(X);ne===void 0&&(ne={},d.set(X,ne));const Z=N(b);if(Z!==A.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ne[Z].usedTimes++;const Se=ne[A.__cacheKey];Se!==void 0&&(ne[A.__cacheKey].usedTimes--,Se.usedTimes===0&&x(b)),A.__cacheKey=Z,A.__webglTexture=ne[Z].texture}return O}function We(A,b,O){return Math.floor(Math.floor(A/O)/b)}function Oe(A,b,O,X){const Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,O,X,b.data);else{Z.sort((le,Me)=>le.start-Me.start);let Se=0;for(let le=1;le<Z.length;le++){const Me=Z[Se],ze=Z[le],Le=Me.start+Me.count,ge=We(ze.start,b.width,4),Ke=We(Me.start,b.width,4);ze.start<=Le+1&&ge===Ke&&We(ze.start+ze.count-1,b.width,4)===ge?Me.count=Math.max(Me.count,ze.start+ze.count-Me.start):(++Se,Z[Se]=ze)}Z.length=Se+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let le=0,Me=Z.length;le<Me;le++){const ze=Z[le],Le=Math.floor(ze.start/4),ge=Math.ceil(ze.count/4),Ke=Le%b.width,V=Math.floor(Le/b.width),de=ge,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Ke,V,de,me,O,X,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function te(A,b,O){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);const ne=xe(A,b),Z=b.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+O);const Se=n.get(Z);if(Z.version!==Se.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const pe=st.getPrimaries(st.workingColorSpace),Re=b.colorSpace===ui?null:st.getPrimaries(b.colorSpace),Pe=b.colorSpace===ui||pe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=_(b.image,!1,s.maxTextureSize);le=ve(b,le);const Me=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let Le=y(b.internalFormat,Me,ze,b.colorSpace,b.isVideoTexture);_e(X,b);let ge;const Ke=b.mipmaps,V=b.isVideoTexture!==!0,de=Se.__version===void 0||ne===!0,me=Z.dataReady,Te=T(b,le);if(b.isDepthTexture)Le=v(b.format===Js,b.type),de&&(V?t.texStorage2D(i.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,Me,ze,null));else if(b.isDataTexture)if(Ke.length>0){V&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Le,Ke[0].width,Ke[0].height);for(let ce=0,ae=Ke.length;ce<ae;ce++)ge=Ke[ce],V?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,Me,ze,ge.data):t.texImage2D(i.TEXTURE_2D,ce,Le,ge.width,ge.height,0,Me,ze,ge.data);b.generateMipmaps=!1}else V?(de&&t.texStorage2D(i.TEXTURE_2D,Te,Le,le.width,le.height),me&&Oe(b,le,Me,ze)):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,Me,ze,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Le,Ke[0].width,Ke[0].height,le.depth);for(let ce=0,ae=Ke.length;ce<ae;ce++)if(ge=Ke[ce],b.format!==_n)if(Me!==null)if(V){if(me)if(b.layerUpdates.size>0){const Ae=Ql(ge.width,ge.height,b.format,b.type);for(const Qe of b.layerUpdates){const at=ge.data.subarray(Qe*Ae/ge.data.BYTES_PER_ELEMENT,(Qe+1)*Ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Qe,ge.width,ge.height,1,Me,at)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,le.depth,Me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Le,ge.width,ge.height,le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,le.depth,Me,ze,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Le,ge.width,ge.height,le.depth,0,Me,ze,ge.data)}else{V&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Le,Ke[0].width,Ke[0].height);for(let ce=0,ae=Ke.length;ce<ae;ce++)ge=Ke[ce],b.format!==_n?Me!==null?V?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,Me,ze,ge.data):t.texImage2D(i.TEXTURE_2D,ce,Le,ge.width,ge.height,0,Me,ze,ge.data)}else if(b.isDataArrayTexture)if(V){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Le,le.width,le.height,le.depth),me)if(b.layerUpdates.size>0){const ce=Ql(le.width,le.height,b.format,b.type);for(const ae of b.layerUpdates){const Ae=le.data.subarray(ae*ce/le.data.BYTES_PER_ELEMENT,(ae+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,Me,ze,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,ze,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,Me,ze,le.data);else if(b.isData3DTexture)V?(de&&t.texStorage3D(i.TEXTURE_3D,Te,Le,le.width,le.height,le.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,ze,le.data)):t.texImage3D(i.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,Me,ze,le.data);else if(b.isFramebufferTexture){if(de)if(V)t.texStorage2D(i.TEXTURE_2D,Te,Le,le.width,le.height);else{let ce=le.width,ae=le.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Le,ce,ae,0,Me,ze,null),ce>>=1,ae>>=1}}else if(Ke.length>0){if(V&&de){const ce=ue(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Te,Le,ce.width,ce.height)}for(let ce=0,ae=Ke.length;ce<ae;ce++)ge=Ke[ce],V?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Me,ze,ge):t.texImage2D(i.TEXTURE_2D,ce,Le,Me,ze,ge);b.generateMipmaps=!1}else if(V){if(de){const ce=ue(le);t.texStorage2D(i.TEXTURE_2D,Te,Le,ce.width,ce.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,ze,le)}else t.texImage2D(i.TEXTURE_2D,0,Le,Me,ze,le);m(b)&&p(X),Se.__version=Z.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function se(A,b,O){if(b.image.length!==6)return;const X=xe(A,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const Z=n.get(ne);if(ne.version!==Z.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const Se=st.getPrimaries(st.workingColorSpace),pe=b.colorSpace===ui?null:st.getPrimaries(b.colorSpace),Re=b.colorSpace===ui||Se===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!Pe&&!le?Me[ae]=_(b.image[ae],!0,s.maxCubemapSize):Me[ae]=le?b.image[ae].image:b.image[ae],Me[ae]=ve(b,Me[ae]);const ze=Me[0],Le=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),Ke=y(b.internalFormat,Le,ge,b.colorSpace),V=b.isVideoTexture!==!0,de=Z.__version===void 0||X===!0,me=ne.dataReady;let Te=T(b,ze);_e(i.TEXTURE_CUBE_MAP,b);let ce;if(Pe){V&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ke,ze.width,ze.height);for(let ae=0;ae<6;ae++){ce=Me[ae].mipmaps;for(let Ae=0;Ae<ce.length;Ae++){const Qe=ce[Ae];b.format!==_n?Le!==null?V?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Qe.width,Qe.height,Le,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Ke,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Qe.width,Qe.height,Le,ge,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Ke,Qe.width,Qe.height,0,Le,ge,Qe.data)}}}else{if(ce=b.mipmaps,V&&de){ce.length>0&&Te++;const ae=ue(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){V?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Le,ge,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Me[ae].width,Me[ae].height,0,Le,ge,Me[ae].data);for(let Ae=0;Ae<ce.length;Ae++){const at=ce[Ae].image[ae].image;V?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,at.width,at.height,Le,ge,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Ke,at.width,at.height,0,Le,ge,at.data)}}else{V?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,ge,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Le,ge,Me[ae]);for(let Ae=0;Ae<ce.length;Ae++){const Qe=ce[Ae];V?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Le,ge,Qe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Ke,Le,ge,Qe.image[ae])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=ne.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function he(A,b,O,X,ne,Z){const Se=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),Re=y(O.internalFormat,Se,pe,O.colorSpace),Pe=n.get(b),le=n.get(O);if(le.__renderTarget=b,!Pe.__hasExternalTextures){const Me=Math.max(1,b.width>>Z),ze=Math.max(1,b.height>>Z);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,Re,Me,ze,b.depth,0,Se,pe,null):t.texImage2D(ne,Z,Re,Me,ze,0,Se,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,le.__webglTexture,0,re(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,le.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const X=b.depthTexture,ne=X&&X.isDepthTexture?X.type:null,Z=v(b.stencilBuffer,ne),Se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=re(b);Q(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Z,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const X=b.textures;for(let ne=0;ne<X.length;ne++){const Z=X[ne],Se=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),Re=y(Z.internalFormat,Se,pe,Z.colorSpace),Pe=re(b);O&&Q(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Re,b.width,b.height):Q(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const ne=X.__webglTexture,Z=re(b);if(b.depthTexture.format===Zs)Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Js)Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ve(A){const b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=X}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=A.texture.mipmaps;X&&X.length>0?Ee(b.__webglFramebuffer[0],A):Ee(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(b.__webglDepthbuffer[X],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Z)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ie(b.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(A,b,O){const X=n.get(A);b!==void 0&&he(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ve(A)}function U(A){const b=A.texture,O=n.get(A),X=n.get(b);A.addEventListener("dispose",E);const ne=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Re=0;Re<b.mipmaps.length;Re++)O.__webglFramebuffer[pe][Re]=i.createFramebuffer()}else O.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)O.__webglFramebuffer[pe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let pe=0,Re=ne.length;pe<Re;pe++){const Pe=n.get(ne[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Q(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const Re=ne[pe];O.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const Pe=r.convert(Re.format,Re.colorSpace),le=r.convert(Re.type),Me=y(Re.internalFormat,Pe,le,Re.colorSpace,A.isXRRenderTarget===!0),ze=re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),_e(i.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)he(O.__webglFramebuffer[pe][Re],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else he(O.__webglFramebuffer[pe],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let pe=0,Re=ne.length;pe<Re;pe++){const Pe=ne[pe],le=n.get(Pe);let Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,le.__webglTexture),_e(Me,Pe),he(O.__webglFramebuffer,A,Pe,i.COLOR_ATTACHMENT0+pe,Me,0),m(Pe)&&p(Me)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),_e(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)he(O.__webglFramebuffer[Re],A,b,i.COLOR_ATTACHMENT0,pe,Re);else he(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,pe,0);m(b)&&p(pe),t.unbindTexture()}A.depthBuffer&&Ve(A)}function rt(A){const b=A.textures;for(let O=0,X=b.length;O<X;O++){const ne=b[O];if(m(ne)){const Z=M(A),Se=n.get(ne).__webglTexture;t.bindTexture(Z,Se),p(Z),t.unbindTexture()}}}const Ne=[],ke=[];function H(A){if(A.samples>0){if(Q(A)===!1){const b=A.textures,O=A.width,X=A.height;let ne=i.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),pe=b.length>1;if(pe)for(let Pe=0;Pe<b.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const le=n.get(b[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,ne,i.NEAREST),c===!0&&(Ne.length=0,ke.length=0,Ne.push(i.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ne.push(Z),ke.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<b.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const le=n.get(b[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function re(A){return Math.min(s.maxSamples,A.samples)}function Q(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(A){const b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ve(A,b){const O=A.colorSpace,X=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Jt&&O!==ui&&(st.getTransfer(O)===pt?(X!==_n||ne!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=ht,this.setupRenderTarget=U,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Q}function c9(i,e){function t(n,s=ui){let r;const a=st.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===hu)return i.RGB;if(n===_n)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===uu)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===Kr||n===Yr||n===jr||n===$r)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Io||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Uo||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Uo)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===qo||n===Xo||n===Qo||n===Ko||n===Yo||n===jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const l9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h9=`
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

}`;class u9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Iu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:l9,fragmentShader:h9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d9 extends xs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new u9,p={},M=t.getContextAttributes();let y=null,v=null;const T=[],w=[],E=new je;let C=null;const x=new jt;x.viewport=new ct;const S=new jt;S.viewport=new ct;const P=[x,S],F=new Tp;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=T[te];return se===void 0&&(se=new Wa,T[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=T[te];return se===void 0&&(se=new Wa,T[te]=se),se.getGripSpace()},this.getHand=function(te){let se=T[te];return se===void 0&&(se=new Wa,T[te]=se),se.getHandSpace()};function k(te){const se=w.indexOf(te.inputSource);if(se===-1)return;const he=T[se];he!==void 0&&(he.update(te.inputSource,te.frame,l||a),he.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let te=0;te<T.length;te++){const se=w[te];se!==null&&(w[te]=null,T[te].disconnect(se))}I=null,N=null,m.reset();for(const te in p)delete p[te];e.setRenderTarget(y),f=null,d=null,u=null,s=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=M.stencil?Js:Zs,Ie=M.stencil?$s:Fi);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Oi(d.textureWidth,d.textureHeight,{format:_n,type:zn,depthTexture:new Lu(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Oi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(te){for(let se=0;se<te.removed.length;se++){const he=te.removed[se],Ie=w.indexOf(he);Ie>=0&&(w[Ie]=null,T[Ie].disconnect(he))}for(let se=0;se<te.added.length;se++){const he=te.added[se];let Ie=w.indexOf(he);if(Ie===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=w.length){w.push(he),Ie=Ve;break}else if(w[Ve]===null){w[Ve]=he,Ie=Ve;break}if(Ie===-1)break}const Ee=T[Ie];Ee&&Ee.connect(he)}}const B=new D,K=new D;function ee(te,se,he){B.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const Ie=B.distanceTo(K),Ee=se.projectionMatrix.elements,Ve=he.projectionMatrix.elements,ht=Ee[14]/(Ee[10]-1),U=Ee[14]/(Ee[10]+1),rt=(Ee[9]+1)/Ee[5],Ne=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],H=(Ve[8]+1)/Ve[0],re=ht*ke,Q=ht*H,Y=Ie/(-ke+H),ve=Y*-ke;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ve),te.translateZ(Y),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ee[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ue=ht+Y,A=U+Y,b=re-ve,O=Q+(Ie-ve),X=rt*U/A*ue,ne=Ne*U/A*ue;te.projectionMatrix.makePerspective(b,O,X,ne,ue,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let se=te.near,he=te.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(he=m.depthFar)),F.near=S.near=x.near=se,F.far=S.far=x.far=he,(I!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,N=F.far),F.layers.mask=te.layers.mask|6,x.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Ie=te.parent,Ee=F.cameras;oe(F,Ie);for(let Ve=0;Ve<Ee.length;Ve++)oe(Ee[Ve],Ie);Ee.length===2?ee(F,x,S):F.projectionMatrix.copy(x.projectionMatrix),_e(te,F,Ie)};function _e(te,se,he){he===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ps*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return p[te]};let xe=null;function We(te,se){if(h=se.getViewerPose(l||a),g=se,h!==null){const he=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let U=0;U<he.length;U++){const rt=he[U];let Ne=null;if(f!==null)Ne=f.getViewport(rt);else{const H=u.getViewSubImage(d,rt);Ne=H.viewport,U===0&&(e.setRenderTargetTextures(v,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(v))}let ke=P[U];ke===void 0&&(ke=new jt,ke.layers.enable(U),ke.viewport=new ct,P[U]=ke),ke.matrix.fromArray(rt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(rt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),U===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(ke)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const U=u.getDepthInformation(he[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<he.length;U++){const rt=he[U].camera;if(rt){let Ne=p[rt];Ne||(Ne=new Iu,p[rt]=Ne);const ke=u.getCameraImage(rt);Ne.sourceTexture=ke}}}}for(let he=0;he<T.length;he++){const Ie=w[he],Ee=T[he];Ie!==null&&Ee!==void 0&&Ee.update(Ie,se,l||a)}xe&&xe(te,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Oe=new Ou;Oe.setAnimationLoop(We),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}}const Ti=new Ht,f9=new Xe;function p9(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(f9.makeRotationFromEuler(Ti)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m9(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(M,T);const w=e.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){const y=u();M.__bindingPointIndex=y;const v=i.createBuffer(),T=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,E=v.length;w<E;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,S=C.length;x<S;x++){const P=C[x];if(f(P,w,x,T)===!0){const F=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let k=0;k<I.length;k++){const z=I[k],G=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+N,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,N),N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,v,T){const w=M.value,E=y+"_"+v;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{const C=T[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(M){const y=M.uniforms;let v=0;const T=16;for(let E=0,C=y.length;E<C;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,P=x.length;S<P;S++){const F=x[S],I=Array.isArray(F.value)?F.value:[F.value];for(let N=0,k=I.length;N<k;N++){const z=I[N],G=_(z),B=v%T,K=B%G.boundary,ee=B+K;v+=K,ee!==0&&T-ee<G.storage&&(v+=T-ee),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=G.storage}}}const w=v%T;return w>0&&(v+=T-w),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class g9{constructor(e={}){const{canvas:t=Mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=wt;let w=0,E=0,C=null,x=-1,S=null;const P=new ct,F=new ct;let I=null;const N=new Ge(0);let k=0,z=t.width,G=t.height,B=1,K=null,ee=null;const oe=new ct(0,0,z,G),_e=new ct(0,0,z,G);let xe=!1;const We=new Nc;let Oe=!1,te=!1;const se=new Xe,he=new D,Ie=new ct,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ht(){return C===null?B:1}let U=n;function rt(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const W="webgl2";if(U=rt(W,R),U===null)throw rt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ne,ke,H,re,Q,Y,ve,ue,A,b,O,X,ne,Z,Se,pe,Re,Pe,le,Me,ze,Le,ge,Ke;function V(){Ne=new Eg(U),Ne.init(),Le=new c9(U,Ne),ke=new yg(U,Ne,e,Le),H=new a9(U,Ne),ke.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),re=new Cg(U),Q=new Q1,Y=new o9(U,Ne,H,Q,ke,Le,re),ve=new Mg(v),ue=new wg(v),A=new Up(U),ge=new _g(U,A),b=new Ag(U,A,re,ge),O=new Lg(U,b,A,re),le=new Pg(U,ke,Y),pe=new xg(Q),X=new X1(v,ve,ue,Ne,ke,ge,pe),ne=new p9(v,Q),Z=new Y1,Se=new t9(Ne),Pe=new gg(v,ve,ue,H,O,f,c),Re=new s9(v,O,ke),Ke=new m9(U,re,ke,H),Me=new vg(U,Ne,re),ze=new Rg(U,Ne,re),re.programs=X.programs,v.capabilities=ke,v.extensions=Ne,v.properties=Q,v.renderLists=Z,v.shadowMap=Re,v.state=H,v.info=re}V();const de=new d9(v,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(z,G,!1))},this.getSize=function(R){return R.set(z,G)},this.setSize=function(R,W,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,G=W,t.width=Math.floor(R*B),t.height=Math.floor(W*B),j===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*B,G*B).floor()},this.setDrawingBufferSize=function(R,W,j){z=R,G=W,B=j,t.width=Math.floor(R*j),t.height=Math.floor(W*j),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,W,j,$){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,W,j,$),H.viewport(P.copy(oe).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,W,j,$){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,W,j,$),H.scissor(F.copy(_e).multiplyScalar(B).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){H.setScissorTest(xe=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,j=!0){let $=0;if(R){let q=!1;if(C!==null){const fe=C.texture.format;q=fe===Rc||fe===Ac||fe===Ec}if(q){const fe=C.texture.type,be=fe===zn||fe===Fi||fe===js||fe===$s||fe===Sc||fe===Tc,Ce=Pe.getClearColor(),we=Pe.getClearAlpha(),He=Ce.r,qe=Ce.g,Ue=Ce.b;be?(g[0]=He,g[1]=qe,g[2]=Ue,g[3]=we,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=He,_[1]=qe,_[2]=Ue,_[3]=we,U.clearBufferiv(U.COLOR,0,_))}else $|=U.COLOR_BUFFER_BIT}W&&($|=U.DEPTH_BUFFER_BIT),j&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Pe.dispose(),Z.dispose(),Se.dispose(),Q.dispose(),ve.dispose(),ue.dispose(),O.dispose(),ge.dispose(),Ke.dispose(),X.dispose(),de.dispose(),de.removeEventListener("sessionstart",en),de.removeEventListener("sessionend",Kc),_i.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=re.autoReset,W=Re.enabled,j=Re.autoUpdate,$=Re.needsUpdate,q=Re.type;V(),re.autoReset=R,Re.enabled=W,Re.autoUpdate=j,Re.needsUpdate=$,Re.type=q}function ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const W=R.target;W.removeEventListener("dispose",ae),Ae(W)}function Ae(R){Qe(R),Q.remove(R)}function Qe(R){const W=Q.get(R).programs;W!==void 0&&(W.forEach(function(j){X.releaseProgram(j)}),R.isShaderMaterial&&X.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,j,$,q,fe){W===null&&(W=Ee);const be=q.isMesh&&q.matrixWorld.determinant()<0,Ce=ud(R,W,j,$,q);H.setMaterial($,be);let we=j.index,He=1;if($.wireframe===!0){if(we=b.getWireframeAttribute(j),we===void 0)return;He=2}const qe=j.drawRange,Ue=j.attributes.position;let nt=qe.start*He,ft=(qe.start+qe.count)*He;fe!==null&&(nt=Math.max(nt,fe.start*He),ft=Math.min(ft,(fe.start+fe.count)*He)),we!==null?(nt=Math.max(nt,0),ft=Math.min(ft,we.count)):Ue!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,Ue.count));const St=ft-nt;if(St<0||St===1/0)return;ge.setup(q,$,Ce,j,we);let _t,mt=Me;if(we!==null&&(_t=A.get(we),mt=ze,mt.setIndex(_t)),q.isMesh)$.wireframe===!0?(H.setLineWidth($.wireframeLinewidth*ht()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(q.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),H.setLineWidth(Be*ht()),q.isLineSegments?mt.setMode(U.LINES):q.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else q.isPoints?mt.setMode(U.POINTS):q.isSprite&&mt.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Be=q._multiDrawStarts,yt=q._multiDrawCounts,ot=q._multiDrawCount,rn=we?A.get(we).bytesPerElement:1,zi=Q.get($).currentProgram.getUniforms();for(let an=0;an<ot;an++)zi.setValue(U,"_gl_DrawID",an),mt.render(Be[an]/rn,yt[an])}else if(q.isInstancedMesh)mt.renderInstances(nt,St,q.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yt=Math.min(j.instanceCount,Be);mt.renderInstances(nt,St,yt)}else mt.render(nt,St)};function at(R,W,j){R.transparent===!0&&R.side===mn&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,lr(R,W,j),R.side=ti,R.needsUpdate=!0,lr(R,W,j),R.side=mn):lr(R,W,j)}this.compile=function(R,W,j=null){j===null&&(j=R),p=Se.get(j),p.init(W),y.push(p),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==j&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const $=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const fe=q.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ce=fe[be];at(Ce,j,q),$.add(Ce)}else at(fe,j,q),$.add(fe)}),p=y.pop(),$},this.compileAsync=function(R,W,j=null){const $=this.compile(R,W,j);return new Promise(q=>{function fe(){if($.forEach(function(be){Q.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){q(R);return}setTimeout(fe,10)}Ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let it=null;function sn(R){it&&it(R)}function en(){_i.stop()}function Kc(){_i.start()}const _i=new Ou;_i.setAnimationLoop(sn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){it=R,de.setAnimationLoop(R),R===null?_i.stop():_i.start()},de.addEventListener("sessionstart",en),de.addEventListener("sessionend",Kc),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,C),p=Se.get(R,y.length),p.init(W),y.push(p),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),We.setFromProjectionMatrix(se,On,W.reversedDepth),te=this.localClippingEnabled,Oe=pe.init(this.clippingPlanes,te),m=Z.get(R,M.length),m.init(),M.push(m),de.enabled===!0&&de.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&xa(fe,W,-1/0,v.sortObjects)}xa(R,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,ee),Ve=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ve&&Pe.addToRenderList(m,R),this.info.render.frame++,Oe===!0&&pe.beginShadows();const j=p.state.shadowsArray;Re.render(j,R,W),Oe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){const fe=W.cameras;if(q.length>0)for(let be=0,Ce=fe.length;be<Ce;be++){const we=fe[be];jc($,q,R,we)}Ve&&Pe.render(R);for(let be=0,Ce=fe.length;be<Ce;be++){const we=fe[be];Yc(m,R,we,we.viewport)}}else q.length>0&&jc($,q,R,W),Ve&&Pe.render(R),Yc(m,R,W);C!==null&&E===0&&(Y.updateMultisampleRenderTarget(C),Y.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,W),ge.resetDefaultState(),x=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Oe===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function xa(R,W,j,$){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||We.intersectsSprite(R)){$&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const be=O.update(R),Ce=R.material;Ce.visible&&m.push(R,be,Ce,j,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||We.intersectsObject(R))){const be=O.update(R),Ce=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ie.copy(be.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Ce)){const we=be.groups;for(let He=0,qe=we.length;He<qe;He++){const Ue=we[He],nt=Ce[Ue.materialIndex];nt&&nt.visible&&m.push(R,be,nt,j,Ie.z,Ue)}}else Ce.visible&&m.push(R,be,Ce,j,Ie.z,null)}}const fe=R.children;for(let be=0,Ce=fe.length;be<Ce;be++)xa(fe[be],W,j,$)}function Yc(R,W,j,$){const q=R.opaque,fe=R.transmissive,be=R.transparent;p.setupLightsView(j),Oe===!0&&pe.setGlobalState(v.clippingPlanes,j),$&&H.viewport(P.copy($)),q.length>0&&cr(q,W,j),fe.length>0&&cr(fe,W,j),be.length>0&&cr(be,W,j),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function jc(R,W,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Oi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?ar:zn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const fe=p.state.transmissionRenderTarget[$.id],be=$.viewport||P;fe.setSize(be.z*v.transmissionResolutionScale,be.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),we=v.getActiveCubeFace(),He=v.getActiveMipmapLevel();v.setRenderTarget(fe),v.getClearColor(N),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&Pe.render(j);const qe=v.toneMapping;v.toneMapping=mi;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Oe===!0&&pe.setGlobalState(v.clippingPlanes,$),cr(R,j,$),Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ft=0,St=W.length;ft<St;ft++){const _t=W[ft],mt=_t.object,Be=_t.geometry,yt=_t.material,ot=_t.group;if(yt.side===mn&&mt.layers.test($.layers)){const rn=yt.side;yt.side=$t,yt.needsUpdate=!0,$c(mt,j,$,Be,yt,ot),yt.side=rn,yt.needsUpdate=!0,nt=!0}}nt===!0&&(Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe))}v.setRenderTarget(Ce,we,He),v.setClearColor(N,k),Ue!==void 0&&($.viewport=Ue),v.toneMapping=qe}function cr(R,W,j){const $=W.isScene===!0?W.overrideMaterial:null;for(let q=0,fe=R.length;q<fe;q++){const be=R[q],Ce=be.object,we=be.geometry,He=be.group;let qe=be.material;qe.allowOverride===!0&&$!==null&&(qe=$),Ce.layers.test(j.layers)&&$c(Ce,W,j,we,qe,He)}}function $c(R,W,j,$,q,fe){R.onBeforeRender(v,W,j,$,q,fe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,W,j,$,R,fe),q.transparent===!0&&q.side===mn&&q.forceSinglePass===!1?(q.side=$t,q.needsUpdate=!0,v.renderBufferDirect(j,W,$,q,R,fe),q.side=ti,q.needsUpdate=!0,v.renderBufferDirect(j,W,$,q,R,fe),q.side=mn):v.renderBufferDirect(j,W,$,q,R,fe),R.onAfterRender(v,W,j,$,q,fe)}function lr(R,W,j){W.isScene!==!0&&(W=Ee);const $=Q.get(R),q=p.state.lights,fe=p.state.shadowsArray,be=q.state.version,Ce=X.getParameters(R,q.state,fe,W,j),we=X.getProgramCacheKey(Ce);let He=$.programs;$.environment=R.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(R.isMeshStandardMaterial?ue:ve).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",ae),He=new Map,$.programs=He);let qe=He.get(we);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===be)return Jc(R,Ce),qe}else Ce.uniforms=X.getUniforms(R),R.onBeforeCompile(Ce,v),qe=X.acquireProgram(Ce,we),He.set(we,qe),$.uniforms=Ce.uniforms;const Ue=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),Jc(R,Ce),$.needsLights=fd(R),$.lightsStateVersion=be,$.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function Zc(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Zr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Jc(R,W){const j=Q.get(R);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function ud(R,W,j,$,q){W.isScene!==!0&&(W=Ee),Y.resetTextureUnits();const fe=W.fog,be=$.isMeshStandardMaterial?W.environment:null,Ce=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Jt,we=($.isMeshStandardMaterial?ue:ve).get($.envMap||be),He=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,ft=!!j.morphAttributes.color;let St=mi;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=v.toneMapping);const _t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=_t!==void 0?_t.length:0,Be=Q.get($),yt=p.state.lights;if(Oe===!0&&(te===!0||R!==S)){const Wt=R===S&&$.id===x;pe.setState($,R,Wt)}let ot=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==yt.state.version||Be.outputColorSpace!==Ce||q.isBatchedMesh&&Be.batching===!1||!q.isBatchedMesh&&Be.batching===!0||q.isBatchedMesh&&Be.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Be.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Be.instancingMorph===!1&&q.morphTexture!==null||Be.envMap!==we||$.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==pe.numPlanes||Be.numIntersection!==pe.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==qe||Be.morphTargets!==Ue||Be.morphNormals!==nt||Be.morphColors!==ft||Be.toneMapping!==St||Be.morphTargetsCount!==mt)&&(ot=!0):(ot=!0,Be.__version=$.version);let rn=Be.currentProgram;ot===!0&&(rn=lr($,W,q));let zi=!1,an=!1,Es=!1;const xt=rn.getUniforms(),un=Be.uniforms;if(H.useProgram(rn.program)&&(zi=!0,an=!0,Es=!0),$.id!==x&&(x=$.id,an=!0),zi||S!==R){H.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",R.projectionMatrix),xt.setValue(U,"viewMatrix",R.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(U,he.setFromMatrixPosition(R.matrixWorld)),ke.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,an=!0,Es=!0)}if(q.isSkinnedMesh){xt.setOptional(U,q,"bindMatrix"),xt.setOptional(U,q,"bindMatrixInverse");const Wt=q.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),xt.setValue(U,"boneTexture",Wt.boneTexture,Y))}q.isBatchedMesh&&(xt.setOptional(U,q,"batchingTexture"),xt.setValue(U,"batchingTexture",q._matricesTexture,Y),xt.setOptional(U,q,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",q._indirectTexture,Y),xt.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",q._colorsTexture,Y));const dn=j.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&le.update(q,j,rn),(an||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,xt.setValue(U,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=we,un.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),an&&(xt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&dd(un,Es),fe&&$.fog===!0&&ne.refreshFogUniforms(un,fe),ne.refreshMaterialUniforms(un,$,B,G,p.state.transmissionRenderTarget[R.id]),Zr.upload(U,Zc(Be),un,Y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zr.upload(U,Zc(Be),un,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xt.setValue(U,"center",q.center),xt.setValue(U,"modelViewMatrix",q.modelViewMatrix),xt.setValue(U,"normalMatrix",q.normalMatrix),xt.setValue(U,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Wt=$.uniformsGroups;for(let tn=0,Ma=Wt.length;tn<Ma;tn++){const vi=Wt[tn];Ke.update(vi,rn),Ke.bind(vi,rn)}}return rn}function dd(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function fd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,j){const $=Q.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=W,Q.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const j=Q.get(R);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const pd=U.createFramebuffer();this.setRenderTarget=function(R,W=0,j=0){C=R,w=W,E=j;let $=!0,q=null,fe=!1,be=!1;if(R){const we=Q.get(R);if(we.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(we.__hasExternalTextures)Y.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ue=R.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&Q.has(Ue)&&(R.width!==Ue.image.width||R.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const qe=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?q=qe[W][j]:q=qe[W],fe=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?q=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[j]:q=qe,P.copy(R.viewport),F.copy(R.scissor),I=R.scissorTest}else P.copy(oe).multiplyScalar(B).floor(),F.copy(_e).multiplyScalar(B).floor(),I=xe;if(j!==0&&(q=pd),H.bindFramebuffer(U.FRAMEBUFFER,q)&&$&&H.drawBuffers(R,q),H.viewport(P),H.scissor(F),H.setScissorTest(I),fe){const we=Q.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,j)}else if(be){const we=W;for(let He=0;He<R.textures.length;He++){const qe=Q.get(R.textures[He]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+He,qe.__webglTexture,j,we)}}else if(R!==null&&j!==0){const we=Q.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,j)}x=-1},this.readRenderTargetPixels=function(R,W,j,$,q,fe,be,Ce=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){H.bindFramebuffer(U.FRAMEBUFFER,we);try{const He=R.textures[Ce],qe=He.format,Ue=He.type;if(!ke.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-$&&j>=0&&j<=R.height-q&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(W,j,$,q,Le.convert(qe),Le.convert(Ue),fe))}finally{const He=C!==null?Q.get(C).__webglFramebuffer:null;H.bindFramebuffer(U.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,W,j,$,q,fe,be,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(W>=0&&W<=R.width-$&&j>=0&&j<=R.height-q){H.bindFramebuffer(U.FRAMEBUFFER,we);const He=R.textures[Ce],qe=He.format,Ue=He.type;if(!ke.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(W,j,$,q,Le.convert(qe),Le.convert(Ue),0);const ft=C!==null?Q.get(C).__webglFramebuffer:null;H.bindFramebuffer(U.FRAMEBUFFER,ft);const St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bf(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(nt),U.deleteSync(St),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,j=0){const $=Math.pow(2,-j),q=Math.floor(R.image.width*$),fe=Math.floor(R.image.height*$),be=W!==null?W.x:0,Ce=W!==null?W.y:0;Y.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,be,Ce,q,fe),H.unbindTexture()};const md=U.createFramebuffer(),gd=U.createFramebuffer();this.copyTextureToTexture=function(R,W,j=null,$=null,q=0,fe=null){fe===null&&(q!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=q,q=0):fe=0);let be,Ce,we,He,qe,Ue,nt,ft,St;const _t=R.isCompressedTexture?R.mipmaps[fe]:R.image;if(j!==null)be=j.max.x-j.min.x,Ce=j.max.y-j.min.y,we=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,qe=j.min.y,Ue=j.isBox3?j.min.z:0;else{const dn=Math.pow(2,-q);be=Math.floor(_t.width*dn),Ce=Math.floor(_t.height*dn),R.isDataArrayTexture?we=_t.depth:R.isData3DTexture?we=Math.floor(_t.depth*dn):we=1,He=0,qe=0,Ue=0}$!==null?(nt=$.x,ft=$.y,St=$.z):(nt=0,ft=0,St=0);const mt=Le.convert(W.format),Be=Le.convert(W.type);let yt;W.isData3DTexture?(Y.setTexture3D(W,0),yt=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Y.setTexture2DArray(W,0),yt=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(W,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),rn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zi=U.getParameter(U.UNPACK_SKIP_PIXELS),an=U.getParameter(U.UNPACK_SKIP_ROWS),Es=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,He),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue);const xt=R.isDataArrayTexture||R.isData3DTexture,un=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const dn=Q.get(R),Wt=Q.get(W),tn=Q.get(dn.__renderTarget),Ma=Q.get(Wt.__renderTarget);H.bindFramebuffer(U.READ_FRAMEBUFFER,tn.__webglFramebuffer),H.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let vi=0;vi<we;vi++)xt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,q,Ue+vi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(W).__webglTexture,fe,St+vi)),U.blitFramebuffer(He,qe,be,Ce,nt,ft,be,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);H.bindFramebuffer(U.READ_FRAMEBUFFER,null),H.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Q.has(R)){const dn=Q.get(R),Wt=Q.get(W);H.bindFramebuffer(U.READ_FRAMEBUFFER,md),H.bindFramebuffer(U.DRAW_FRAMEBUFFER,gd);for(let tn=0;tn<we;tn++)xt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,q,Ue+tn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,q),un?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,fe,St+tn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wt.__webglTexture,fe),q!==0?U.blitFramebuffer(He,qe,be,Ce,nt,ft,be,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):un?U.copyTexSubImage3D(yt,fe,nt,ft,St+tn,He,qe,be,Ce):U.copyTexSubImage2D(yt,fe,nt,ft,He,qe,be,Ce);H.bindFramebuffer(U.READ_FRAMEBUFFER,null),H.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else un?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(yt,fe,nt,ft,St,be,Ce,we,mt,Be,_t.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,fe,nt,ft,St,be,Ce,we,mt,_t.data):U.texSubImage3D(yt,fe,nt,ft,St,be,Ce,we,mt,Be,_t):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,nt,ft,be,Ce,mt,Be,_t.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,nt,ft,_t.width,_t.height,mt,_t.data):U.texSubImage2D(U.TEXTURE_2D,fe,nt,ft,be,Ce,mt,Be,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zi),U.pixelStorei(U.UNPACK_SKIP_ROWS,an),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Es),fe===0&&W.generateMipmaps&&U.generateMipmap(yt),H.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),H.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,H.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class sr extends lt{constructor(){const e=sr.SkyShader,t=new Vn({name:e.name,uniforms:bu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:$t,depthWrite:!1});super(new Kt(1,1,1),t),this.isSky=!0}}sr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};const so={low:{dpr:1,shadow:0,msaa:!1,maxCars:10,crowd:2500,far:1500},medium:{dpr:1.25,shadow:1024,msaa:!0,maxCars:20,crowd:6e3,far:2400},high:{dpr:1.5,shadow:2048,msaa:!0,maxCars:40,crowd:12e3,far:3200},ultra:{dpr:2,shadow:4096,msaa:!0,maxCars:40,crowd:2e4,far:4e3}},_h={day:{elev:48,azim:215,turb:3,ray:1.1,mie:.004,g:.8,exposure:.62,sun:3.2,sunCol:16773596,hemiSky:12375807,hemiGround:7043658,hemi:.55,fog:12176870,fogD:18e-5,lamps:!1},sunset:{elev:4.5,azim:255,turb:6,ray:1.6,mie:.006,g:.85,exposure:.55,sun:2.6,sunCol:16751178,hemiSky:16751979,hemiGround:3815978,hemi:.42,fog:14719602,fogD:26e-5,lamps:!0},night:{elev:-9,azim:215,turb:1,ray:.2,mie:.001,g:.7,exposure:.5,sun:0,sunCol:9414911,hemiSky:2371930,hemiGround:724242,hemi:.5,fog:659488,fogD:32e-5,lamps:!0}};class _9{constructor(e,t={}){this.canvas=e,this.quality=t.quality||"high";const n=so[this.quality];this.renderer=new g9({canvas:e,antialias:n.msaa,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=wt,this.renderer.toneMapping=nu,this.renderer.shadowMap.enabled=n.shadow>0,this.renderer.shadowMap.type=eu,this.scene=new Rl,this.camera=new jt(62,16/9,.3,n.far),this.sky=new sr,this.sky.scale.setScalar(2e4),this.scene.add(this.sky),this.sunDir=new D,this.sun=new Fu(16777215,3),this.sun.castShadow=n.shadow>0,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new _p(12375807,7043658,.5),this.scene.add(this.hemi),this.scene.fog=new Lc(12176870,2e-4),this.pmrem=new cc(this.renderer),this.timeKey="day",this.envRT=null,this.setQuality(this.quality),this.resize(),this.setTime("day"),addEventListener("resize",()=>this.resize())}setQuality(e){const t=so[e]||so.high;if(this.quality=e,this.q=t,this.renderer.shadowMap.enabled=t.shadow>0,this.sun.castShadow=t.shadow>0,t.shadow){const n=this.sun.shadow;n.mapSize.set(t.shadow,t.shadow);const s=90;n.camera.left=-s,n.camera.right=s,n.camera.top=s,n.camera.bottom=-s,n.camera.near=10,n.camera.far=500,n.bias=-25e-5,n.normalBias=.35,n.map&&(n.map.dispose(),n.map=null)}this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.resize(),this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.camera.fov=this.camera.aspect<1?78:this.baseFov||62,this.camera.updateProjectionMatrix()}setTime(e,t="clear"){const n=_h[e]||_h.day;this.timeKey=e,this.weather=t;const s=this.sky.material.uniforms,r=t==="overcast"||t==="rain";s.turbidity.value=r?14:n.turb,s.rayleigh.value=r?.6:n.ray,s.mieCoefficient.value=r?.02:n.mie,s.mieDirectionalG.value=n.g;const a=Zn.degToRad(90-n.elev),o=Zn.degToRad(n.azim);this.sunDir.setFromSphericalCoords(1,a,o),s.sunPosition.value.copy(this.sunDir),this.sun.color.set(n.sunCol),this.sun.intensity=n.sun*(r?.35:1),e==="night"&&(this.sunDir.set(-.4,.8,.45).normalize(),this.sun.intensity=.9),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemi*(r?1.25:1),this.renderer.toneMappingExposure=n.exposure*(r?1.15:1),this.scene.fog.color.set(r?10134704:n.fog),this.scene.fog.density=n.fogD*(r?2.2:1),this.lampsOn=n.lamps,this.bakeEnv(),this.onTime&&this.onTime(e,t)}bakeEnv(){const e=new Rl,t=new sr;t.scale.setScalar(2e4),e.add(t);for(const s of Object.keys(this.sky.material.uniforms))if(t.material.uniforms[s]&&this.sky.material.uniforms[s].value!==void 0){const r=this.sky.material.uniforms[s].value;t.material.uniforms[s].value=r.clone?r.clone():r}const n=this.envRT;this.envRT=this.pmrem.fromScene(e,0,1,5e4),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=this.timeKey==="night"?.25:.9,n&&n.dispose(),t.material.dispose(),t.geometry.dispose()}followSun(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,220),this.sun.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}const Gu={straight:1e3,radius:300,halfW:11,apron:8,wallH:1.3,bulge:34,maxBank:Zn.degToRad(30),frontBank:Zn.degToRad(7),backBank:Zn.degToRad(3),infieldLimit:70};function Fr(i,e,t=!0){const n=i.length,s=new Float64Array(n),r=Math.ceil(e*3),a=[];let o=0;for(let c=-r;c<=r;c++){const l=Math.exp(-(c*c)/(2*e*e));a.push(l),o+=l}for(let c=0;c<n;c++){let l=0;for(let h=-r;h<=r;h++)l+=i[(c+h+n*8)%n]*a[h+r];s[c]=l/o}return s}function v9(i=Gu){const{straight:e,radius:t,bulge:n}=i,s=[],r=1,a=e/2,o=(N,k,z,G)=>{const B=Math.hypot(z-N,G-k),K=Math.max(1,Math.round(B/r));for(let ee=0;ee<K;ee++)s.push([N+(z-N)*ee/K,k+(G-k)*ee/K])},c=(N,k,z,G)=>{const B=Math.abs(G-z)*t,K=Math.max(2,Math.round(B/r));for(let ee=0;ee<K;ee++){const oe=z+(G-z)*ee/K;s.push([N+t*Math.cos(oe),k+t*Math.sin(oe)])}};o(0,t,a,t),c(a,0,Math.PI/2,-Math.PI/2),o(a,-t,-a,-t),c(-a,0,-Math.PI/2,-3*Math.PI/2),o(-a,t,0,t);for(const N of s)if(N[1]>t-1&&Math.abs(N[0])<a){const k=(N[0]+a)/(2*a);N[1]+=n*Math.pow(Math.sin(Math.PI*k),2)}const l=s.length,h=Float64Array.from(s,N=>N[0]),u=Float64Array.from(s,N=>N[1]),d=Fr(h,70),f=Fr(u,70),g=new Float64Array(l+1);for(let N=0;N<l;N++){const k=(N+1)%l;g[N+1]=g[N]+Math.hypot(d[k]-d[N],f[k]-f[N])}const _=g[l],m=Math.round(_/3.8),p=_/m,M=new Float64Array(m),y=new Float64Array(m);let v=0;for(let N=0;N<m;N++){const k=N*p;for(;g[v+1]<k;)v++;const z=(k-g[v])/(g[v+1]-g[v]),G=(v+1)%l;M[N]=d[v]+(d[G]-d[v])*z,y[N]=f[v]+(f[G]-f[v])*z}const T=new Float64Array(m),w=new Float64Array(m),E=new Float64Array(m);for(let N=0;N<m;N++){const k=(N+m-1)%m,z=(N+1)%m,G=M[z]-M[k],B=y[z]-y[k],K=Math.hypot(G,B);T[N]=G/K,w[N]=B/K}for(let N=0;N<m;N++){const k=(N+m-1)%m,z=(N+1)%m,G=T[k]*w[z]-w[k]*T[z];E[N]=-Math.asin(Zn.clamp(G,-1,1))/(2*p)}const C=Fr(E,6),x=.85/t,S=new Float64Array(m);for(let N=0;N<m;N++){const k=Zn.clamp(C[N]/x,0,1),z=k*k*(3-2*k),B=(y[N]>t*.6?1:0)?i.frontBank:i.backBank;S[N]=B+(i.maxBank-B)*z}const P=Fr(S,22),F=new Float64Array(m);for(let N=0;N<m;N++)F[N]=i.halfW*Math.sin(P[N]);const I=new Float64Array(m);for(let N=0;N<m;N++)I[N]=N*p;return{N:m,ds:p,length:_,px:M,pz:y,tx:T,tz:w,k:C,bank:P,yc:F,s:I,cfg:i}}class y9{constructor(e=Gu){this.cfg=e,this.d=v9(e),this.N=this.d.N,this.length=this.d.length,this.ds=this.d.ds}wrapS(e){const t=this.length;return(e%t+t)%t}idx(e){return Math.floor(this.wrapS(e)/this.ds)%this.N}at(e){const t=this.d,n=this.wrapS(e)/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,a=n-Math.floor(n),o=t.px[s]+(t.px[r]-t.px[s])*a,c=t.pz[s]+(t.pz[r]-t.pz[s])*a;let l=t.tx[s]+(t.tx[r]-t.tx[s])*a,h=t.tz[s]+(t.tz[r]-t.tz[s])*a;const u=Math.hypot(l,h);return l/=u,h/=u,{x:o,z:c,tx:l,tz:h,rx:-h,rz:l,bank:t.bank[s]+(t.bank[r]-t.bank[s])*a,yc:t.yc[s]+(t.yc[r]-t.yc[s])*a,k:t.k[s],i:s}}point(e,t,n={}){const s=this.at(e),r=this.cfg.halfW,a=Math.cos(s.bank),o=Math.sin(s.bank);return t>=-r?(n.x=s.x+s.rx*t*a,n.z=s.z+s.rz*t*a,n.y=s.yc+t*o):(n.x=s.x+s.rx*(-r*a+(t+r)),n.z=s.z+s.rz*(-r*a+(t+r)),n.y=0),n.heading=Math.atan2(s.tx,s.tz),n.bank=s.bank,n}query(e,t,n,s={}){const r=this.d,a=this.N;let o=1e18,c=n|0;const l=n===void 0?a:24;for(let C=-l;C<=l;C++){const x=((n|0)+C+a*4)%a,S=e-r.px[x],P=t-r.pz[x],F=S*S+P*P;F<o&&(o=F,c=x)}if(n!==void 0){if(o>2500)for(let C=0;C<a;C++){const x=e-r.px[C],S=t-r.pz[C],P=x*x+S*S;P<o&&(o=P,c=C)}}let h=c,u=(c+1)%a,d=r.px[u]-r.px[h],f=r.pz[u]-r.pz[h],g=((e-r.px[h])*d+(t-r.pz[h])*f)/(d*d+f*f);g<0&&(u=h,h=(c+a-1)%a,d=r.px[u]-r.px[h],f=r.pz[u]-r.pz[h],g=((e-r.px[h])*d+(t-r.pz[h])*f)/(d*d+f*f)),g=Zn.clamp(g,0,1);const _=this.wrapS((h===a-1&&u===0?a-1+g:h+g)*this.ds),m=this.at(_),p=e-m.x,M=t-m.z,y=p*m.rx+M*m.rz,v=this.cfg.halfW,T=Math.cos(m.bank),w=Math.sin(m.bank),E=y>=-v*T?y/T:y+v*T-v;return s.i=c,s.s=_,s.u=E,s.lat=y,s.bank=m.bank,s.tx=m.tx,s.tz=m.tz,s.k=m.k,s.rx=m.rx,s.rz=m.rz,s.surface=E>v+.4?"wall":E>=-v?"track":E>=-v-this.cfg.apron?"apron":"grass",s.y=E>=-v?m.yc+Math.min(E,v+.4)*w:0,s}}function wi(i,e,t={}){const{N:n}=i,{uvU:s=12,uvV:r=12,yOff:a=0,color:o=null,wrapUV:c=!0,sFrom:l=0,sTo:h=n,yFn:u=null,closed:d=!0}=t,f=e.length,g=h-l+(d&&l===0&&h===n?1:0),_=new Float32Array(f*g*3),m=new Float32Array(f*g*2),p=o?new Float32Array(f*g*3):null,M={};for(let T=0;T<g;T++){const w=l+T,E=w%n*i.ds+(w>=n?i.length:0);for(let C=0;C<f;C++){i.point(w%n*i.ds,e[C],M);const x=T*f+C;if(_[x*3]=M.x,_[x*3+1]=M.y+a+(u?u(e[C],w%n):0),_[x*3+2]=M.z,m[x*2]=e[C]/s,m[x*2+1]=w*i.ds/r,p){const S=o(e[C],w%n,E);p[x*3]=S[0],p[x*3+1]=S[1],p[x*3+2]=S[2]}}}const y=[];for(let T=0;T<g-1;T++)for(let w=0;w<f-1;w++){const E=T*f+w,C=E+1,x=(T+1)*f+w,S=x+1;y.push(E,C,x,C,S,x)}const v=new Bt;return v.setAttribute("position",new gt(_,3)),v.setAttribute("uv",new gt(m,2)),p&&v.setAttribute("color",new gt(p,3)),v.setIndex(y),v.computeVertexNormals(),v}const De=(i,e,t)=>i<e?e:i>t?t:i,Yn=(i,e,t)=>i+(e-i)*t,Jr=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function Wc(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const hc=["hood","roof","door","quarter","trunk","bumper"],ea={hood:"Hood",roof:"Roof",door:"Doors",quarter:"Rear quarters",trunk:"Trunk",bumper:"Front bumper"},ma=[{id:"dustyfork",name:"Dusty Fork Diner",tier:1,payout:120,slots:["door","quarter","bumper"],colors:["#f2b134","#7a2e1b"]},{id:"greaseline",name:"Greaseline Garage",tier:1,payout:140,slots:["door","trunk","bumper"],colors:["#e8e8e8","#d1342c"]},{id:"cornerbolt",name:"Corner Bolt Supply",tier:1,payout:150,slots:["quarter","door","trunk"],colors:["#2f6fdb","#f4f4f4"]},{id:"vantafuel",name:"Vanta Fuel",tier:2,payout:320,slots:["hood","door","trunk"],colors:["#13c28a","#0b2a24"]},{id:"halo",name:"Halo Energy",tier:2,payout:360,slots:["hood","roof","quarter"],colors:["#ffd400","#1a1a1a"]},{id:"ironbark",name:"Ironbark Tools",tier:2,payout:340,slots:["door","quarter","hood"],colors:["#e2552c","#222"]},{id:"meridian",name:"Meridian Mobile",tier:3,payout:720,slots:["hood","roof","door"],colors:["#00a3e0","#ffffff"]},{id:"stratus",name:"Stratus Air",tier:3,payout:760,slots:["hood","trunk","quarter"],colors:["#5b4bd6","#ffffff"]},{id:"kestrel",name:"Kestrel Tires",tier:3,payout:700,slots:["door","bumper","quarter"],colors:["#111","#ffcf1b"]},{id:"apexgrid",name:"Apex Grid Power",tier:4,payout:1500,slots:["hood","roof","door"],colors:["#ff2d55","#0d0d0d"]},{id:"northstar",name:"Northstar Motors",tier:4,payout:1600,slots:["hood","door","trunk"],colors:["#c0c6cc","#0a2a66"]}],ws=i=>ma.find(e=>e.id===i)||null,x9={},M9=x9&&"./"||"./",b9=new ku;function is(i,e=!0,t=!1,n=8){const s=b9.load(M9+"assets/tex/"+i);return e&&(s.wrapS=s.wrapT=gi),s.anisotropy=n,t&&(s.colorSpace=wt),s}function Or(i,e,t,n=!1,s=!0){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new Pu(r);return n&&(a.wrapS=a.wrapT=gi),s&&(a.colorSpace=wt),a.anisotropy=8,a}function S9(i,e,t=()=>{}){const n=new vn;n.name="track";const s=Wc(2026),r=i.cfg,a=r.halfW,o=i.N,c=8,l=is("asphalt_track_col.jpg",!0,!0,c),h=is("asphalt_track_nrm.jpg",!0,!1,c),u=is("asphalt_track_rgh.jpg",!0,!1,c),d=new Nt({map:l,normalMap:h,roughnessMap:u,roughness:1,metalness:0,vertexColors:!0,normalScale:new je(.8,.8)}),f=is("sparse_grass_col.jpg",!0,!0,c),g=is("sparse_grass_nrm.jpg"),_=is("sparse_grass_rgh.jpg");for(const H of[f,g,_])H.repeat.set(220,220);const m=new Nt({map:f,normalMap:g,roughnessMap:_,color:12175258,roughness:1}),p=Or(512,128,(H,re,Q)=>{H.fillStyle="#b9b9b4",H.fillRect(0,0,re,Q);for(let Y=0;Y<2600;Y++)H.fillStyle=`rgba(${90+s()*70|0},${90+s()*70|0},${88+s()*70|0},0.12)`,H.fillRect(s()*re,s()*Q,2+s()*3,1+s()*3);H.fillStyle="rgba(255,255,255,0.9)",H.fillRect(0,Q*.28,re,Q*.2),H.fillStyle="rgba(0,0,0,0.18)",H.fillRect(0,Q*.78,re,Q*.22),H.fillStyle="rgba(0,0,0,0.35)";for(let Y=0;Y<re;Y+=128)H.fillRect(Y,0,2,Q)},!0);new Nt({map:p,roughness:.85,metalness:0});const M=new Nt({color:9408911,roughness:.95}),y=(H,re={})=>new Nt(Object.assign({color:H,roughness:.55,metalness:.05},re)),v=[];for(let H=0;H<=16;H++)v.push(-a+2*a*H/16);const T=(H,re,Q)=>{const Y=.5+.5*Math.sin(Q*.011+1.3)*Math.sin(Q*.0037),ve=Math.exp(-Math.pow((H+3.5)/3.2,2))*.28,ue=Math.exp(-Math.pow((H-4.2)/3,2))*.22,A=Math.exp(-Math.pow((H-a)/1.4,2))*.14+Math.exp(-Math.pow((H+a)/1.4,2))*.08,b=.78+.18*Y,O=Math.max(.3,b-ve-ue-A);return[O,O,O*1.02]},w=new lt(wi(i,v,{uvU:7,uvV:7,color:T}),d);w.receiveShadow=!0,w.name="road",n.add(w);const E=[];for(let H=0;H<=4;H++)E.push(-a-r.apron*H/4);const C=d.clone();C.color=new Ge(12171958);const x=new lt(wi(i,E.slice().reverse(),{uvU:7,uvV:7,color:()=>[.95,.95,.95]}),C);x.receiveShadow=!0,n.add(x),t(.15);const S=H=>new Cn({color:H,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),P=(H,re,Q,Y=.03)=>{const ve=new lt(wi(i,[H,re],{yOff:Y}),S(Q));return n.add(ve),ve};P(a-.55,a-.3,15987696),P(-a+.3,-a+.55,15987696),P(-a-.05,-a+.12,15909376),P(-a-.5,-a-.33,15909376);const F=Or(256,32,(H,re,Q)=>{for(let ve=0;ve<16;ve++)for(let ue=0;ue<2;ue++)H.fillStyle=(ve+ue)%2?"#111":"#fff",H.fillRect(re/16*ve,Q/2*ue,re/16,Q/2)});{const H=new fi(2*a,1.6),re=new lt(H,new Cn({map:F,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),Q=i.point(0,0,{}),Y=i.at(0);re.position.set(Q.x,Q.y+.04,Q.z),re.rotation.order="YXZ",re.rotation.y=Math.atan2(Y.tx,Y.tz),re.rotation.x=-Math.PI/2,re.rotation.z=0,re.rotation.set(0,0,0);const ve=new Xe,ue=new D(Y.tx,0,Y.tz),A=new D(-Y.rx*Math.sin(Y.bank),Math.cos(Y.bank),-Y.rz*Math.sin(Y.bank)),b=new D().crossVectors(ue,A).normalize();ve.makeBasis(b,ue,A),re.quaternion.setFromRotationMatrix(ve),n.add(re)}t(.25);const I=a+.5,N=(()=>{const H=wi(i,[0,1],{uvU:1,uvV:1});H.attributes.position,H.attributes.uv;const re=o+1,Q=new Float32Array(re*2*3),Y=new Float32Array(re*2*2),ve={};for(let b=0;b<re;b++){const O=b%o;i.point(O*i.ds,I,ve);const X=b*2;Q[X*3]=ve.x,Q[X*3+1]=ve.y-.2,Q[X*3+2]=ve.z,Q[(X+1)*3]=ve.x,Q[(X+1)*3+1]=ve.y+r.wallH,Q[(X+1)*3+2]=ve.z,Y[X*2]=b*i.ds/4,Y[X*2+1]=0,Y[(X+1)*2]=b*i.ds/4,Y[(X+1)*2+1]=1}const ue=[];for(let b=0;b<re-1;b++){const O=b*2,X=O+1,ne=O+2,Z=O+3;ue.push(O,X,ne,X,Z,ne)}const A=new Bt;return A.setAttribute("position",new gt(Q,3)),A.setAttribute("uv",new gt(Y,2)),A.setIndex(ue),A.computeVertexNormals(),A})(),k=new lt(N,new Nt({map:p,roughness:.85,side:mn}));k.receiveShadow=!0,k.castShadow=!0,n.add(k),n.add(new lt(wi(i,[I-.2,I+.5],{yOff:r.wallH}),M));const z=[];for(let H=0;H<=6;H++)z.push(I+.5+H*2.5);const G=wi(i,z,{uvU:8,uvV:8,yFn:(H,re)=>{const Q=i.d.yc[re]+I*Math.sin(i.d.bank[re]),Y=(H-(I+.5))/15;return-Math.min(1,Y)*(Q+.2)-.1+(Y>0,0)}});{const H=G.attributes.position,re=z.length;for(let Q=0;Q<H.count/re;Q++){const Y=Q*re+(re-1);H.setY(Y,-.05)}G.computeVertexNormals()}const B=new lt(G,new Nt({color:10263960,roughness:1,map:l}));B.receiveShadow=!0,n.add(B);const K=Or(128,128,(H,re,Q)=>{H.clearRect(0,0,re,Q),H.strokeStyle="rgba(200,205,210,0.95)",H.lineWidth=2;for(let Y=-Q;Y<re+Q;Y+=16)H.beginPath(),H.moveTo(Y,0),H.lineTo(Y+Q,Q),H.stroke(),H.beginPath(),H.moveTo(Y+Q,0),H.lineTo(Y,Q),H.stroke()},!0);K.repeat.set(1,1);const ee=(()=>{const H=o+1,re=new Float32Array(H*2*3),Q=new Float32Array(H*2*2),Y={},ve=7;for(let b=0;b<H;b++){const O=b%o;i.point(O*i.ds,I+.2,Y);const X=b*2;re[X*3]=Y.x,re[X*3+1]=Y.y+r.wallH,re[X*3+2]=Y.z,re[(X+1)*3]=Y.x,re[(X+1)*3+1]=Y.y+r.wallH+ve,re[(X+1)*3+2]=Y.z,Q[X*2]=b*i.ds/2.5,Q[X*2+1]=0,Q[(X+1)*2]=b*i.ds/2.5,Q[(X+1)*2+1]=3}const ue=[];for(let b=0;b<H-1;b++){const O=b*2;ue.push(O,O+1,O+2,O+1,O+3,O+2)}const A=new Bt;return A.setAttribute("position",new gt(re,3)),A.setAttribute("uv",new gt(Q,2)),A.setIndex(ue),A.computeVertexNormals(),A})();n.add(new lt(ee,new Cn({map:K,transparent:!0,alphaTest:.2,side:mn,depthWrite:!1,fog:!0})));{const H=new Tn(new Qs(.07,.09,7.4,6),y(7238520,{metalness:.6,roughness:.4}),Math.ceil(i.length/9)),re=new Xe,Q={};let Y=0;for(let ve=0;ve<i.length;ve+=9)i.point(ve,I+.2,Q),re.makeTranslation(Q.x,Q.y+r.wallH+3.6,Q.z),H.setMatrixAt(Y++,re);H.count=Y,n.add(H)}t(.4);const oe=new lt(new fi(9e3,9e3),m);oe.rotation.x=-Math.PI/2,oe.position.y=-.06,oe.receiveShadow=!0,oe.name="ground",n.add(oe);{const H=new fi(1400,420),re=new lt(H,new Cn({color:5138997,transparent:!0,opacity:.18,depthWrite:!1}));re.rotation.x=-Math.PI/2,re.position.set(0,-.04,-30),n.add(re)}{const H=new lt(new kc(150,40),new Nt({color:2775666,roughness:.08,metalness:0,envMapIntensity:1.4}));H.rotation.x=-Math.PI/2,H.scale.set(1.9,.55,1),H.position.set(0,-.02,-50),n.add(H)}t(.5);const _e=e.crowd,xe=[{s0:-520,s1:520,off:26,rows:28,rise:.78,depth:.95,color:3820138,side:1},{s0:3320,s1:3881,off:24,rows:22,rise:.75,depth:.95,color:5849402,side:1},{s0:540,s1:1120,off:36,rows:18,rise:.74,depth:.95,color:4020810,side:1},{s0:2860,s1:3260,off:34,rows:16,rise:.74,depth:.95,color:4865370,side:1}],We=new Kt(1,1,1),Oe=new Nt({color:16777215,roughness:.7});let te=0;for(const H of xe)te+=Math.ceil((H.s1-H.s0)/8)*H.rows;const se=new Tn(We,Oe,te);se.castShadow=!1,se.receiveShadow=!0;const he=new Xe,Ie=new bt,Ee=new D,Ve=new D,ht=new Ge;let U=0;const rt={},Ne=[];for(const H of xe)for(let re=H.s0;re<H.s1;re+=8){const Q=i.wrapS(re+4),Y=i.at(Q);i.point(Q,a+H.off-H.rows*H.depth*0,rt);const ve=Math.atan2(Y.tx,Y.tz),ue=Math.floor(Q/96);for(let A=0;A<H.rows;A++){const b=H.off+A*H.depth,O=rt.y*0+A*H.rise+2.2+Math.max(0,(Y.yc+(a+.5)*Math.sin(Y.bank))*.55);Ve.set(Y.x+Y.rx*(a+b),O*.5+0,Y.z+Y.rz*(a+b));const X=O;Ve.y=X*.5,Ie.setFromEuler(new Ht(0,ve,0)),Ee.set(H.depth*1.02,X,8.05),he.compose(Ve,Ie,Ee),se.setMatrixAt(U,he);const ne=.75+A%2*.12+(ue*7+A)%3*.04;ht.setHex(H.color).multiplyScalar(ne),se.setColorAt(U,ht),U++,Ne.length<_e*1.5&&A%1===0&&Ne.push([Y.x+Y.rx*(a+b-H.depth*.25),X,Y.z+Y.rz*(a+b-H.depth*.25),ve,Y.tx,Y.tz])}if(H.rows>=22&&(re-H.s0)%16===0){const A=H.off+H.rows*H.depth*.55,b=H.rows*H.rise+9,O=new lt(new Kt(H.rows*H.depth*1.15,.5,16.2),y(14343648,{roughness:.6}));O.position.set(Y.x+Y.rx*(a+A),b,Y.z+Y.rz*(a+A)),O.rotation.y=ve,O.castShadow=!0,n.add(O)}}se.count=U,se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0),n.add(se);{const H=Math.min(_e,Ne.length),re=new Tn(new Kt(.42,.9,.34),new Nt({color:16777215,roughness:.9}),H),Q=[13712187,3108827,15909376,15658734,2763306,4039517,15043115,10181046],Y=new Ht;for(let ve=0;ve<H;ve++){const ue=Ne[s()*Ne.length|0],A=(s()-.5)*7.4;Ve.set(ue[0]+ue[4]*A,ue[1]+.55,ue[2]+ue[5]*A),Y.set(0,ue[3],0),Ie.setFromEuler(Y),Ee.set(1,.8+s()*.4,1),he.compose(Ve,Ie,Ee),re.setMatrixAt(ve,he),re.setColorAt(ve,ht.setHex(Q[s()*Q.length|0]).multiplyScalar(.7+s()*.3))}re.instanceMatrix.needsUpdate=!0,re.instanceColor.needsUpdate=!0,n.add(re)}t(.65);const ke=[];{const H=new Qs(.35,.6,46,8),re=new Tn(H,y(8159622,{metalness:.7,roughness:.4}),40),Q=new Kt(9,3.2,1.2),Y=new Nt({color:3355443,emissive:16773839,emissiveIntensity:0,roughness:.5}),ve=new Tn(Q,Y,40);let ue=0;for(let A=40;A<i.length&&ue<40;A+=190){const b=i.at(A),O=a+34,X=b.x+b.rx*O,ne=b.z+b.rz*O;he.makeTranslation(X,23,ne),re.setMatrixAt(ue,he);const Z=Math.atan2(b.tx,b.tz);he.compose(new D(X-b.rx*2,45.5,ne-b.rz*2),new bt().setFromEuler(new Ht(0,Z,0)),new D(1,1,1)),ve.setMatrixAt(ue,he),ke.push({x:X,z:ne}),ue++}re.count=ue,ve.count=ue,re.castShadow=!0,n.add(re,ve),n.userData.lampMat=Y}{const H=[];for(let re=0;re<=3;re++)H.push(-a-r.apron-3-re*4.2);new lt(wi(i,H.slice().reverse(),{uvU:7,uvV:7,sFrom:0,sTo:0,yOff:.02,color:()=>[.8,.8,.8],closed:!1}),C)}{const H=new Tn(new Kt(10,4.2,12),y(13619924,{roughness:.7}),60);let re=0;const Q=new Tn(new Kt(11,1.1,.5),y(15329764),60);for(let Y=-260;Y<260&&re<60;Y+=12){const ve=i.wrapS(Y),ue=i.at(ve),A=-a-r.apron-16,b=ue.x+ue.rx*A,O=ue.z+ue.rz*A,X=Math.atan2(ue.tx,ue.tz),ne=new bt().setFromEuler(new Ht(0,X,0));he.compose(new D(b,2.1,O),ne,new D(1,1,1)),H.setMatrixAt(re,he);const Z=ue.x+ue.rx*(A+8),Se=ue.z+ue.rz*(A+8);he.compose(new D(Z,.55,Se),ne,new D(1,1,1)),Q.setMatrixAt(re,he),re++}H.count=re,Q.count=re,H.castShadow=!0,H.receiveShadow=!0,n.add(H,Q)}{const H=i.at(-120),re=H.x+H.rx*(-a-r.apron-34),Q=H.z+H.rz*(-a-r.apron-34),Y=new lt(new Kt(5,42,5),y(15263972,{roughness:.5}));Y.position.set(re,21,Q),Y.castShadow=!0,n.add(Y);const ve=new lt(new Kt(5.2,1.6,5.2),new Nt({color:2763306,emissive:4045397,emissiveIntensity:.9}));ve.position.set(re,38,Q),n.add(ve)}t(.75);{const H=[],re=ue=>Or(512,96,(A,b,O)=>{A.fillStyle=ue.colors[0],A.fillRect(0,0,b,O),A.fillStyle=ue.colors[1],A.fillRect(0,O-14,b,14),A.fillStyle=ue.colors[1]==="#ffffff"||ue.colors[1]==="#f4f4f4"?"#111":"#fff",A.font='italic 700 54px "Barlow Condensed", Impact, sans-serif',A.textAlign="center",A.textBaseline="middle",A.fillText(ue.name.toUpperCase(),b/2,O/2-5)}),Q=ma.map(re);let Y=0;for(let ue=20;ue<i.length;ue+=36){const A=i.at(ue),b=A.x+A.rx*(I+.55),O=A.z+A.rz*(I+.55),X={};i.point(ue,I+.55,X);const ne=new lt(new fi(14,2.2),new Nt({map:Q[Y%Q.length],roughness:.6}));Y++,ne.position.set(b,X.y+r.wallH+3.2,O),ne.rotation.y=Math.atan2(A.tx,A.tz)+Math.PI/2*0,ne.lookAt(b-A.rx*10,X.y+r.wallH+3.2,O-A.rz*10),H.push(ne)}const ve=new vn;H.forEach(ue=>ve.add(ue)),n.add(ve)}{const re=new Tn(new Qs(.25,.4,5,5),y(5916210,{roughness:1}),1400),Q=new Tn(new Oc(3.2,1),new Nt({color:16777215,roughness:1,flatShading:!0}),1400);let Y=0;for(let ue=0;ue<1400*3&&Y<1400;ue++){const A=s()*Math.PI*2,b=1e3+s()*600,O=520+s()*400,X=Math.cos(A)*b,ne=Math.sin(A)*O*1.1+40,Z=i.query(X,ne,void 0,{});if(Z.u<a+70&&Z.u>-a-120)continue;const Se=.8+s()*1.4;he.compose(new D(X,2.5*Se,ne),new bt,new D(Se,Se,Se)),re.setMatrixAt(Y,he),he.compose(new D(X,7*Se,ne),new bt().setFromEuler(new Ht(s(),s()*6,0)),new D(Se,Se*(.9+s()*.5),Se)),Q.setMatrixAt(Y,he),Q.setColorAt(Y,ht.setHSL(.25+s()*.08,.45,.16+s()*.1)),Y++}re.count=Y,Q.count=Y,Q.castShadow=!1,n.add(re,Q);const ve=new Tn(new Kt(1,1,1),new Nt({color:16777215,roughness:.9}),90);for(let ue=0;ue<90;ue++){const A=ue/90*Math.PI*2+s()*.05,b=2300+s()*600,O=40+s()*120,X=15+s()*70,ne=40+s()*90;he.compose(new D(Math.cos(A)*b*1.25,X/2,Math.sin(A)*b*.9),new bt().setFromEuler(new Ht(0,s()*3,0)),new D(O,X,ne)),ve.setMatrixAt(ue,he),ve.setColorAt(ue,ht.setHSL(.58+s()*.1,.1,.5+s()*.25))}n.add(ve)}return t(1),n.userData.lamps=ke,n}function vh(i,e){if(e===Qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sc||e===du){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===sc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class T9 extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new C9(t)}),this.register(function(t){return new P9(t)}),this.register(function(t){return new B9(t)}),this.register(function(t){return new z9(t)}),this.register(function(t){return new V9(t)}),this.register(function(t){return new I9(t)}),this.register(function(t){return new D9(t)}),this.register(function(t){return new N9(t)}),this.register(function(t){return new U9(t)}),this.register(function(t){return new R9(t)}),this.register(function(t){return new k9(t)}),this.register(function(t){return new L9(t)}),this.register(function(t){return new O9(t)}),this.register(function(t){return new F9(t)}),this.register(function(t){return new E9(t)}),this.register(function(t){return new H9(t)}),this.register(function(t){return new G9(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ks.extractUrlBase(e);a=Ks.resolveURL(l,this.path)}else a=Ks.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Uu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wu){try{a[tt.KHR_BINARY_GLTF]=new W9(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new i_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new A9;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new q9(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new X9;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Q9;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function w9(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class E9{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Jt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Mp(h),l.distance=u;break;case"spot":l=new yp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Un(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class A9{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}}class R9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class C9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(r)}}class P9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class L9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class I9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class D9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class N9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(o[0],o[1],o[2],Jt),Promise.all(r)}}class U9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class k9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(o[0],o[1],o[2],Jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(r)}}class F9{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class O9{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class B9{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class z9{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class V9{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class H9{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class G9{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==pn.TRIANGLES&&l.mode!==pn.TRIANGLE_STRIP&&l.mode!==pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Xe,m=new D,p=new bt,M=new D(1,1,1),y=new Tn(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(m,p,M));for(const v in c)if(v==="_COLOR_0"){const T=c[v];y.instanceColor=new ac(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);vt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Wu="glTF",Us=12,yh={JSON:1313821514,BIN:5130562};class W9{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Us,r=new DataView(e,Us);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===yh.JSON){const l=new Uint8Array(e,Us+a,o);this.content=n.decode(l)}else if(c===yh.BIN){const l=Us+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q9{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=uc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=uc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=hs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Jt,d)})})}}class X9{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Q9{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class qu extends or{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+u;for(let v=0;v!==o;v++){const T=a[_+v+o],w=a[_+v+c]*h,E=a[g+v+o],C=a[g+v]*h;r[v]=M*T+y*w+m*E+p*C}return r}}const K9=new bt;class Y9 extends qu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return K9.fromArray(r).normalize().toArray(r),r}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xh={9728:Zt,9729:hn,9984:su,9985:Qr,9986:Gs,9987:Fn},Mh={33071:di,33648:na,10497:gi},ro={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j9={CUBICSPLINE:void 0,LINEAR:tr,STEP:er},ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $9(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Ei(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z9(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function J9(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e_(i){let e;const t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oo(t.attributes):e=i.indices+":"+oo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+oo(i.targets[n]);return e}function oo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function dc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const n_=new Xe;class i_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w9,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ku(this.options.manager):this.textureLoader=new Sp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ei(r,o,s),Un(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Ks.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ro[s.type],o=hs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new gt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=ro[s.type],l=hs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(M);y||(_=new l(o,p*f,s.count*f/h),y=new Xf(_,f/h),t.cache.add(M,y)),m=new Ic(y,c,d%f/h,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new gt(_,c,g);if(s.sparse!==void 0){const p=ro.SCALAR,M=hs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new M(a[1],y,s.sparse.count*p),w=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=T.length;E<C;E++){const x=T[E];if(m.setX(x,w[E*c]),c>=2&&m.setY(x,w[E*c+1]),c>=3&&m.setZ(x,w[E*c+2]),c>=4&&m.setW(x,w[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=xh[d.magFilter]||hn,h.minFilter=xh[d.minFilter]||Fn,h.wrapS=Mh[d.wrapS]||gi,h.wrapT=Mh[d.wrapT]||gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==hn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,d(m)}),t.load(Ks.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Un(u,a),u.userData.mimeType=a.mimeType||t_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ru,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Au,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){const u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=mn);const h=r.alphaMode||ao.OPAQUE;if(h===ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Cn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Cn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Cn){const u=r.emissiveFactor;o.emissive=new Ge().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&a!==Cn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Un(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ei(s,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return bh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=e_(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=bh(new Bt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?$9(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const M=l[f];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Kf(_,M):new lt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?p.geometry=vh(p.geometry,du):m.mode===pn.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,sc));else if(m.mode===pn.LINES)p=new ep(_,M);else if(m.mode===pn.LINE_STRIP)p=new Uc(_,M);else if(m.mode===pn.LINE_LOOP)p=new tp(_,M);else if(m.mode===pn.POINTS)p=new Cu(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&J9(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Un(p,r),m.extensions&&Ei(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ei(s,u[0],r),u[0];const d=new vn;r.extensions&&Ei(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Zn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Dc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const T=d[y],w=f[y],E=g[y],C=_[y],x=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const S=n._createAnimationTracks(T,w,E,C,x);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const M=new hp(r,void 0,p);return Un(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,n_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new wu:l.length>1?h=new vn:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Un(h,r),r.extensions&&Ei(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new vn;n.name&&(r.name=s.createUniqueName(n.name)),Un(r,n),n.extensions&&Ei(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Bn||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];li[r.path]===li.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(li[r.path]){case li.weights:l=gs;break;case li.rotation:l=_s;break;case li.translation:case li.scale:l=vs;break;default:n.itemSize===1?l=gs:l=vs;break}const h=s.interpolation!==void 0?j9[s.interpolation]:tr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+li[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof _s?Y9:qu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s_(i,e,t){const n=e.attributes,s=new ni;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const h=dc(hs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=dc(hs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function bh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=uc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Un(i,e),s_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Z9(i,e.targets,t):i})}const fc=240,pc=96,r_='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function Sn(i,e,t=14,n=null){i.beginPath(),i.roundRect(2,2,fc-4,pc-4,t),i.fillStyle=e,i.fill(),n&&(i.lineWidth=3,i.strokeStyle=n,i.stroke())}function Tt(i,e,t,n,s,r,{weight:a=700,italic:o=!0,align:c="left",spacing:l=0,maxW:h=0}={}){i.font=`${o?"italic ":""}${a} ${s}px ${r_}`,i.fillStyle=r,i.textAlign=c,i.textBaseline="alphabetic";try{i.letterSpacing=l+"px"}catch{}if(h){const u=i.measureText(e).width;if(u>h){i.save(),i.translate(t,n),i.scale(h/u,1),i.fillText(e,0,0),i.restore();try{i.letterSpacing="0px"}catch{}return}}i.fillText(e,t,n);try{i.letterSpacing="0px"}catch{}}function Ai(i,e,t){i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fillStyle=t,i.fill()}function Br(i,e,t,n,s,r=0){i.beginPath();for(let a=0;a<6;a++){const o=r+Math.PI/3*a,c=e+n*Math.cos(o),l=t+n*Math.sin(o);a?i.lineTo(c,l):i.moveTo(c,l)}i.closePath(),i.fillStyle=s,i.fill()}const a_={dustyfork(i){Sn(i,"#f2b134",16),i.fillStyle="#7a2e1b",i.fillRect(14,70,212,5),i.fillRect(14,79,212,3),i.fillStyle="#7a2e1b",i.fillRect(36,18,5,34),i.fillRect(46,18,5,34),i.fillRect(56,18,5,34),i.beginPath(),i.roundRect(34,46,29,8,4),i.fill(),i.fillRect(46,50,5,18),Tt(i,"DUSTY FORK",78,46,34,"#7a2e1b",{maxW:136}),Tt(i,"DINER",80,64,20,"#7a2e1b",{spacing:7,italic:!1,weight:600})},greaseline(i){Sn(i,"#ececec",14,"#d1342c"),i.save(),i.translate(46,48),i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(22,-2,22,26,0,26),i.bezierCurveTo(-22,26,-22,-2,0,-30),i.fillStyle="#d1342c",i.fill(),i.fillStyle="#ececec",i.beginPath(),i.ellipse(-6,8,4,8,.4,0,7),i.fill(),i.restore(),Tt(i,"GREASELINE",82,50,36,"#16181c",{maxW:140}),i.fillStyle="#d1342c",i.fillRect(82,58,140,4),Tt(i,"GARAGE",83,80,20,"#d1342c",{spacing:8,italic:!1,weight:600})},cornerbolt(i){Sn(i,"#2f6fdb",14),Br(i,46,48,30,"#f4f4f4",Math.PI/6),Br(i,46,48,17,"#2f6fdb",Math.PI/6),Br(i,46,48,8,"#f4f4f4",Math.PI/6),Tt(i,"CORNER BOLT",86,46,34,"#ffffff",{maxW:140}),Tt(i,"SUPPLY CO.",88,70,19,"#cfe0ff",{spacing:6,italic:!1,weight:600})},vantafuel(i){Sn(i,"#0d1f1b",14,"#13c28a"),Ai(i,[[22,22],[50,22],[62,58],[74,22],[100,22],[66,76],[56,76]],"#13c28a"),Ai(i,[[62,30],[68,44],[62,56],[56,44]],"#0d1f1b"),Tt(i,"VANTA",112,52,40,"#ffffff",{maxW:112}),Tt(i,"FUEL",114,76,26,"#13c28a",{spacing:10,italic:!1})},halo(i){Sn(i,"#ffd400",48),i.lineWidth=9,i.strokeStyle="#151515",i.beginPath(),i.ellipse(46,48,24,24,0,0,7),i.stroke(),Ai(i,[[50,26],[36,52],[47,52],[42,70],[58,42],[47,42]],"#151515"),Tt(i,"HALO",82,56,46,"#151515",{maxW:140}),Tt(i,"ENERGY",84,78,19,"#151515",{spacing:9,italic:!1})},ironbark(i){Sn(i,"#232323",12,"#e2552c"),Br(i,44,48,31,"#e2552c",0),i.strokeStyle="#232323",i.lineWidth=3.5,[8,15,22].forEach(e=>{i.beginPath(),i.arc(44,48,e,0,7),i.stroke()}),Tt(i,"IRONBARK",84,52,40,"#ffffff",{maxW:140}),Tt(i,"TOOLS",86,76,21,"#e2552c",{spacing:10,italic:!1})},meridian(i){Sn(i,"#00a3e0",16),i.save(),i.translate(46,48),i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.arc(0,0,27,0,7),i.stroke(),i.beginPath(),i.ellipse(0,0,11,27,0,0,7),i.stroke(),i.beginPath(),i.moveTo(-27,0),i.lineTo(27,0),i.stroke(),i.beginPath(),i.moveTo(-23,-13),i.lineTo(23,-13),i.moveTo(-23,13),i.lineTo(23,13),i.lineWidth=2.5,i.stroke(),i.restore(),Tt(i,"MERIDIAN",86,52,38,"#ffffff",{maxW:140}),Tt(i,"MOBILE",88,76,20,"#d9f3ff",{spacing:9,italic:!1})},stratus(i){Sn(i,"#4b3fc4",16),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(18,62),i.quadraticCurveTo(46,58,78,26),i.quadraticCurveTo(68,52,92,56),i.quadraticCurveTo(54,74,18,62),i.fill(),i.fillStyle="#b9b2ff",i.beginPath(),i.moveTo(24,74),i.quadraticCurveTo(52,72,70,60),i.quadraticCurveTo(52,82,24,74),i.fill(),Tt(i,"STRATUS",102,54,38,"#ffffff",{maxW:124}),Tt(i,"AIR",104,76,21,"#cfc9ff",{spacing:14,italic:!1})},kestrel(i){Sn(i,"#121212",14,"#ffcf1b"),i.lineWidth=11,i.strokeStyle="#ffcf1b",i.beginPath(),i.arc(46,48,24,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="#121212";for(let e=0;e<12;e++){const t=Math.PI*2*e/12;i.beginPath(),i.moveTo(46+19*Math.cos(t),48+19*Math.sin(t)),i.lineTo(46+29*Math.cos(t),48+29*Math.sin(t)),i.stroke()}Ai(i,[[36,50],[60,36],[52,52],[64,50],[38,64]],"#ffffff"),Tt(i,"KESTREL",84,54,38,"#ffcf1b",{maxW:140}),Tt(i,"TIRES",86,76,21,"#ffffff",{spacing:12,italic:!1})},apexgrid(i){Sn(i,"#0d0d0d",12,"#ff2d55"),Ai(i,[[44,14],[78,80],[10,80]],"#ff2d55"),i.strokeStyle="#0d0d0d",i.lineWidth=3,i.beginPath(),i.moveTo(44,38),i.lineTo(44,80),i.moveTo(28,58),i.lineTo(60,58),i.moveTo(22,70),i.lineTo(66,70),i.stroke(),Tt(i,"APEX GRID",92,50,40,"#ffffff",{maxW:128}),Tt(i,"POWER",94,76,21,"#ff2d55",{spacing:11,italic:!1})},northstar(i){Sn(i,"#0a2a66",14,"#c0c6cc"),Ai(i,[[44,10],[51,40],[80,48],[51,56],[44,86],[37,56],[8,48],[37,40]],"#c0c6cc"),Ai(i,[[44,26],[48,44],[44,48],[40,44]],"#ffffff"),Tt(i,"NORTHSTAR",92,50,36,"#ffffff",{maxW:138}),Tt(i,"MOTORS",94,76,21,"#c0c6cc",{spacing:10,italic:!1})}};function Xu(i,e,t,n,s,r){const a=a_[e];if(!a)return!1;const o=Math.min(s/fc,r/pc);return i.save(),i.translate(t+(s-fc*o)/2,n+(r-pc*o)/2),i.scale(o,o),i.lineJoin="round",a(i),i.restore(),!0}const ta=new Map;function Qu(i,e=240,t=96){const n=`${i}:${e}x${t}`;if(ta.has(n))return ta.get(n);const s=Math.min(2,(typeof devicePixelRatio=="number"?devicePixelRatio:1)||1),r=document.createElement("canvas");r.width=Math.round(e*s),r.height=Math.round(t*s);const a=r.getContext("2d");a.scale(s,s),Xu(a,i,0,0,e,t);const o=r.toDataURL("image/png");return ta.set(n,o),o}function Ku(){ta.clear()}const o_=i=>(ws(i)||{}).name||i,c_=Object.freeze(Object.defineProperty({__proto__:null,clearSponsorPreviewCache:Ku,drawSponsor:Xu,sponsorName:o_,sponsorPreviewURL:Qu},Symbol.toStringTag,{value:"Module"})),l_=Object.assign({"../ui/sponsorArt.js":c_}),co=Object.values(l_)[0]||null,h_={left:(i,e)=>[-i*100,-e*100],right:(i,e)=>[i*100,-e*100],top:(i,e)=>[i*100,e*100],tail:(i,e)=>[-i*100,-e*100],nose:(i,e)=>[i*100,-e*100]};function Ut(i,e,t,n){const s=e.frames[t];i.save(),i.beginPath(),i.rect(...s.clip),i.clip(),i.translate(s.ox,s.oy),i.scale(s.sx,s.sy),n(h_[t]),i.restore()}const ks=(i,e,t)=>{i.beginPath(),t.forEach(([n,s],r)=>{const[a,o]=e(n,s);r?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath(),i.fill()},Ii=(i,e,t,n,s,r)=>{const[a,o]=e(t,n),[c,l]=e(s,r);i.fillRect(Math.min(a,c),Math.min(o,l),Math.abs(c-a),Math.abs(l-o))},Yu=(i,e)=>`${i==="italic"?"italic 800":i==="slab"?"900":"800"} ${e}px "Barlow Condensed", Impact, "Arial Narrow", sans-serif`;function u_(i,e,t,n,s,r,a=0){i.save(),i.translate(t,n),a&&i.rotate(a);const o=ws(e);if(i.beginPath(),i.rect(-s/2,-r/2,s,r),i.clip(),co&&co.drawSponsor)try{co.drawSponsor(i,e,-s/2,-r/2,s,r),i.restore();return}catch{}i.fillStyle=o?o.colors[0]:"#444",i.fillRect(-s/2,-r/2,s,r),i.fillStyle=o?o.colors[1]:"#fff",i.fillRect(-s/2,r/2-r*.14,s,r*.14),i.fillStyle="#fff",i.font=Yu("italic",Math.floor(r*.42)),i.textAlign="center",i.textBaseline="middle",i.fillText(o?o.name.toUpperCase():e,0,-r*.04,s*.94),i.restore()}function zr(i,e,t,n,s,r=0){i.save(),i.translate(t,n),r&&i.rotate(r),i.font=Yu(e.numberStyle,s),i.textAlign="center",i.textBaseline="middle";const a=String(e.number||"0");e.numberStyle==="italic"&&i.transform(1,0,-.22,1,0,0);const o=(e.numberColor||"#fff").toLowerCase(),c=o==="#ffffff"||o==="#fff"?"#000":"#fff";i.lineJoin="round",i.lineWidth=s*.12,i.strokeStyle=c,i.strokeText(a,0,0),e.numberStyle==="outline"?(i.lineWidth=s*.06,i.strokeStyle=e.numberColor,i.strokeText(a,0,0)):(i.fillStyle=e.numberColor,i.fillText(a,0,0)),i.restore()}function d_(i,e,t){const n=t.accent,s=t.trim,r=a=>{Ut(i,e,"left",a),Ut(i,e,"right",a)};if(t.pattern==="stripe")r(a=>{i.fillStyle=n,Ii(i,a,-3,.52,3,.46),i.fillStyle=s,Ii(i,a,-3,.44,3,.425)}),Ut(i,e,"top",()=>{i.fillStyle=n,i.fillRect(-22,-300,44,600),i.fillStyle=s,i.fillRect(-32,-300,5,600),i.fillRect(27,-300,5,600)});else if(t.pattern==="split")i.fillStyle=n,r(a=>ks(i,a,[[3,-.1],[3,1.1],[.3,1.1],[-.9,-.1]])),Ut(i,e,"top",a=>ks(i,a,[[-1.2,3],[1.2,3],[1.2,.35],[-1.2,-.45]])),Ut(i,e,"nose",a=>ks(i,a,[[-1.2,-.1],[1.2,-.1],[1.2,.9],[-1.2,.9]]));else if(t.pattern==="chevron"){i.fillStyle=n;for(let a=0;a<7;a++){const o=-2.6+a*.5;r(c=>ks(i,c,[[o,-.1],[o+.3,-.1],[o+.55,.5],[o+.3,1.1],[o,1.1],[o+.25,.5]]))}for(let a=0;a<7;a++){const o=-2.6+a*.5;Ut(i,e,"top",c=>ks(i,c,[[-1.2,o],[-1.2,o+.3],[0,o+.55],[1.2,o+.3],[1.2,o],[0,o+.25]]))}}else t.pattern==="fade"&&(r(()=>{const a=i.createLinearGradient(-260,0,260,0);a.addColorStop(0,n),a.addColorStop(.55,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-300,-140,600,160)}),Ut(i,e,"top",()=>{const a=i.createLinearGradient(0,260,0,-150);a.addColorStop(0,n),a.addColorStop(.7,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-130,-320,260,640)}))}function f_(i,e,t){const n=i.getContext("2d");n.setTransform(i.width/2048,0,0,i.height/2048,0,0),n.globalCompositeOperation="source-over",n.fillStyle=e.paint,n.fillRect(0,0,2048,2048),d_(n,t,e);const s=t.band||.3,r=l=>{n.fillStyle=e.trim,Ii(n,l,-4,-.2,4,s),n.fillStyle=e.accent,Ii(n,l,-4,s,4,s+.025)};Ut(n,t,"left",r),Ut(n,t,"right",r),Ut(n,t,"nose",r),Ut(n,t,"tail",r),t.paintLights&&(Ut(n,t,"nose",l=>{for(const h of[-1,1]){n.fillStyle="#e8eaec";const[u,d]=l(h*.38,.31),[f,g]=l(h*.84,.22);n.beginPath(),n.roundRect(Math.min(u,f),Math.min(d,g),Math.abs(f-u),Math.abs(g-d),3),n.fill(),n.fillStyle="#ffcf5a";const _=h>0?Math.max(u,f)-12:Math.min(u,f);n.fillRect(_,Math.min(d,g)+2,12,Math.abs(g-d)-4)}n.fillStyle="#0b0c0e",Ii(n,l,-.34,.33,.34,.13),n.fillStyle="#2a2d33";for(let h=0;h<17;h++){const[u,d]=l(-.3+h*.0375,.31);n.fillRect(u,d,1.4,14)}}),Ut(n,t,"tail",l=>{n.fillStyle="#16171a",Ii(n,l,-.9,.78,.9,.46),n.fillStyle="#d0171e";for(const h of[-1,1])Ii(n,l,h*.39,.7,h*.81,.52)}));const a=e.slots||{},o=t.spots;Ut(n,t,"left",l=>{const[h,u]=l(o.number.z,o.number.y);zr(n,e,h,u,o.number.h*100)}),Ut(n,t,"right",l=>{const[h,u]=l(o.number.z,o.number.y);zr(n,e,h,u,o.number.h*100)}),Ut(n,t,"top",l=>{const[h,u]=l(0,a.roof?o.roofNumberZ:o.roofNumberZ-.15);zr(n,e,h,u,32,Math.PI/2)}),Ut(n,t,"tail",l=>{const[h,u]=l(0,a.bumper?o.bumper.y-.17:o.bumper.y);zr(n,e,h,u,a.bumper?13:21)});const c=(l,h,u,d,f,g=0)=>{if(!a[h])return;const _=f*2.5,m=f;Ut(n,t,l,p=>{const[M,y]=p(u,d);u_(n,a[h],M,y,_,m,g)})};c("left","door",o.door.z,o.door.y,o.door.h*100),c("right","door",o.door.z,o.door.y,o.door.h*100),c("left","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("right","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("top","hood",o.hood.x,o.hood.z,o.hood.h*100,0),c("top","trunk",o.trunk.x,o.trunk.z,o.trunk.h*100,Math.PI),c("top","roof",0,o.roofLogoZ,22,Math.PI/2),c("tail","bumper",o.bumper.x,o.bumper.y,o.bumper.h*100)}const ss=9.81,ln={mass:1500,L:2.85,a:1.38,b:1.47,cgH:.52,Iz:2900,wheelR:.34,length:5.1,width:1.95,cdA:1.3,clA:.85,rolling:.012,maxSteer:.5,gears:[9.4,6.3,4.55,3.46],eff:.9,idle:2600,redline:9e3,limiter:9250,torque:[[1200,300],[3e3,470],[4500,610],[6e3,690],[7500,740],[8500,720],[9100,640],[9500,400]],mu:{track:1.5,apron:1.3,grass:.42},trackHalf:.78},p_=2.23694;function Sh(i,e=ln){const t=e.torque;if(i<=t[0][0])return t[0][1];if(i>=t[t.length-1][0])return t[t.length-1][1];for(let n=0;n<t.length-1;n++)if(i<=t[n+1][0]){const s=(i-t[n][0])/(t[n+1][0]-t[n][0]);return t[n][1]+s*(t[n+1][1]-t[n][1])}return 0}class m_{constructor(e=0,t=null){this.C=t?Object.assign({},ln,t,{mu:Object.assign({},ln.mu,t.mu||{})}):ln,this.id=e,this.x=0,this.z=0,this.psi=0,this.vx=0,this.vy=0,this.w=0,this.steer=0,this.steerCmd=0,this.gear=1,this.rpm=this.C.idle,this.shiftT=0,this.throttle=0,this.brake=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.surface="track",this.bank=0,this.trackU=0,this.trackS=0,this.trackI=0,this.draft=0,this.dirty=0,this.damage={front:0,rear:0,left:0,right:0},this.hit=0,this.scrape=0,this.limiter=!1,this.out=!1,this.nLoad=1,this.lap=0,this.pitch=0,this.roll=0,this.skid=0,this.lastImpact=0,this.fracF={t:1,a:0,g:0},this.fracR={t:1,a:0,g:0},this.fracTrack=1,this.fracGrass=0,this.bankEff=0,this.gh=0,this.gp=0,this.gr=0,this.ghv=0,this.gpv=0,this.grv=0,this.gTh=0,this.gTp=0,this.gTr=0,this._gInit=!1,this.wy=[0,0,0,0],this._wq=[{},{},{},{}],this.gunk=0,this.dirt=0,this.alphaFe=0,this.alphaRe=0,this.tumble=null,this.wrecked=!1,this.dmgPull=0,this.scuffs=[],this.dig=0,this.lift=0,this.pendingTrip=null,this.hidden=!1,this.ghost=!1,this.dents=[],this._rs=e*2654435761>>>0||1,this.tripAt=2.3+this.rand()*2.4,this.hitBias=this.rand()}rand(){let e=(this._rs+=1831565813)|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}checkTrip(e){if(this.tumble||this.ghost)return null;const t=Math.hypot(this.vx,this.vy),n=this.fracGrass;if(t<12)return this.dig=Math.max(0,this.dig-e*2),this.lift=Math.max(0,this.lift-e),null;const s=Math.abs(this.vy);return this.dig=Math.max(0,this.dig+(Math.max(0,s-13)*n*.8*(1+.5*this.dirt)+Math.max(0,s-30)*.1*(1-n)-.9*(1-n))*e),this.lift=Math.max(0,this.lift+(Math.max(0,-this.vx-24)*.07-.5)*e),this.dig>this.tripAt?"dig":this.lift>this.tripAt?"lift":null}recover(e,t,n){this.place(e,t,n,0),this.tumble=null,this.wrecked=!1,this.dig=0,this.lift=0,this.pendingTrip=null,this.gear=1,this.throttle=0,this.steer=0,this.gunk=0,this.roll=0,this.pitch=0,this.tripAt=2.3+this.rand()*2.4}get speed(){return Math.hypot(this.vx,this.vy)}get mph(){return this.vx*p_}place(e,t,n,s=0){this.px=e,this.pz=t,this.ppsi=n,this.x=e,this.z=t,this.psi=n,this.vx=s,this.vy=0,this.w=0,this._gInit=!1,this.alphaFe=0,this.alphaRe=0}sampleGround(e,t){const n=this.C,s=Math.sin(this.psi),r=Math.cos(this.psi),a=n.trackHalf||.78;let o=0,c=0,l=0,h=0,u=0,d=0;for(let g=0;g<4;g++){const _=g<2?n.a:-n.b,m=g&1?-a:a,p=this.x+s*_+r*m,M=this.z+r*_-s*m,y=this._wq[g];e.query(p,M,t,y),this.wy[g]=y.y;const v=y.surface;g<2?v==="grass"?l++:v==="apron"?c++:o++:v==="grass"?d++:v==="apron"?u++:h++}this.fracF.t=o/2,this.fracF.a=c/2,this.fracF.g=l/2,this.fracR.t=h/2,this.fracR.a=u/2,this.fracR.g=d/2,this.fracTrack=(o+h)/4,this.fracGrass=(l+d)/4;const f=this.wy;this.gTh=(f[0]+f[1]+f[2]+f[3])/4,this.gTp=Math.atan2((f[0]+f[1]-f[2]-f[3])/2,n.a+n.b),this.gTr=Math.atan2((f[0]+f[2]-f[1]-f[3])/2,2*a),this._gInit||(this.gh=this.gTh,this.gp=this.gTp,this.gr=this.gTr,this.ghv=this.gpv=this.grv=0,this._gInit=!0)}get wvx(){return this.vx*Math.sin(this.psi)+this.vy*Math.cos(this.psi)}get wvz(){return this.vx*Math.cos(this.psi)-this.vy*Math.sin(this.psi)}step(e,t,n){const s=this.C,r=s.mass;this.px=this.x,this.pz=this.z,this.ppsi=this.psi,this.pgh=this.gh,this.pgp=this.gp,this.pgr=this.gr,this.surface=n.surface||"track",this.bankEff+=((n.bank||0)*this.fracTrack-this.bankEff)*Math.min(1,e*14);const a=this.bankEff;this.bank=a;const o=Math.cos(a),c=Math.sin(a),l=s.mu.track,h=s.mu.apron,u=s.mu.grass,d=Math.hypot(this.vx,this.vy);this.gunk=De(this.gunk+(this.fracGrass*De(d/9,0,1)*.45-(1-this.fracGrass)*(.07+.006*d))*e,0,1),this.dirt=Math.min(1,this.dirt+this.fracGrass*De(d/12,0,1)*.025*e);const f=1-.3*this.gunk,g=(this.fracF.t*l+this.fracF.a*h+this.fracF.g*u)*f,_=(this.fracR.t*l+this.fracR.a*h+this.fracR.g*u)*f,m=this.damage,p=1-.35*m.front-.1*(m.left+m.right)*.5,M=1-.25*m.rear-.1*(m.left+m.right)*.5,y=Math.max(0,this.vx),v=s.maxSteer/(1+Math.pow(y/42,2)),T=De(t.steer,-1,1)*v,w=(t.analog?6.5:4.2)*(1+1.2/(1+y/12));this.steer+=De(T-this.steer,-w*e*v*2,w*e*v*2),this.throttle+=De(t.throttle-this.throttle,-5*e,4.5*e),this.brake+=De(t.brake-this.brake,-8*e,7*e);const E=s.gears[this.gear-1],C=Math.abs(this.vx)/s.wheelR*E*60/(2*Math.PI);let x=Math.max(s.idle,C);this.gear===1&&this.vx<6&&(x=Math.max(x,3200+3500*this.throttle)),this.limiter=x>=s.limiter,this.limiter&&(x=s.limiter-150*Math.random()),this.rpm+=(x-this.rpm)*Math.min(1,e*28),this.shiftT>0?this.shiftT-=e:this.gear<4&&C>8350*(s.redline/9e3)?(this.gear++,this.shiftT=.12):this.gear>1&&C<(4700+(this.gear-2)*150)*(s.redline/9e3)&&(this.gear--,this.shiftT=.08);const S=Sh(this.rpm,s)*(this.limiter?0:1)*(this.shiftT>0?.15:1);let P=this.throttle*S*E*s.eff/s.wheelR;const F=(1-this.throttle)*.085*Sh(Math.max(this.rpm,3e3),s)*E/s.wheelR*(this.vx>.5?1:0);P=P*(1-.2*this.damage.front-.12*this.damage.rear)-F;const I=1.2,N=(1-.3*n.draft)*(1+.22*this.damage.front+.1*this.damage.rear+.08*(this.damage.left+this.damage.right)),k=.5*I*this.vx*this.vx,z=k*s.cdA*N*Math.sign(this.vx||1),G=k*s.clA*(1-.35*n.draft*.3)*(1-.18*(this.damage.front+this.damage.rear));this.draft=n.draft,this.dirty=n.dirty;const B=Math.max(0,n.k||0),K=this.vx*this.vx*B,ee=r*(ss*o+K*c)+G*.9,oe=s.b/s.L;s.a/s.L;const _e=r*this.ax*s.cgH/s.L,xe=.44*(1-.55*n.dirty);let We=De(ee*oe-_e+G*.9*(xe-oe),400,1e6);const Oe=De(ee-We,400,1e6);We=ee-Oe;const te=Math.max(2.5,Math.abs(this.vx)),se=this.vx>=0?1:-1;this.dmgPull+=(((m.left-m.right)*.05+(m.front>.3?.012*m.front:0)*(m.left>=m.right?1:-1))*De(1.5*m.front+.3,0,1)-this.dmgPull)*Math.min(1,e*3);const he=this.steer+this.dmgPull,Ie=he*se-Math.atan2(this.vy+s.a*this.w,te)*1,Ee=-Math.atan2(this.vy-s.b*this.w,te),Ve=Math.min(1,e*te/.45);this.alphaFe+=(Ie-this.alphaFe)*Ve,this.alphaRe+=(Ee-this.alphaRe)*Ve;const ht=this.alphaFe,U=this.alphaRe;this.slipF=ht,this.slipR=U;const rt=g*p*Math.pow(We/7e3,-.14),Ne=_*M*Math.pow(Oe/7e3,-.14),ke=.15;let H=this.brake*2.3*r*ss*(1-.5*this.fracGrass);H=Math.min(H,2.6*r*ss);const re=-Math.sign(this.vx||1);let Q=P+re*H*.42,Y=re*H*.58;const ve=Ne*Oe,ue=rt*We,A=t.assist===0?1:.8;Q>0&&(Q=Math.min(Q,A*ve)),Q=De(Q,-ve,ve),Y=De(Y,-ue,ue);const b=Math.sqrt(Math.max(.35,1-Math.pow(Q/ve,2))),O=Math.sqrt(Math.max(.35,1-Math.pow(Y/ue,2))),X=at=>Math.sin(1.45*Math.atan(at/ke*2));let ne=rt*We*O*X(ht),Z=Ne*Oe*b*X(U);const Se=De(Math.abs(this.vx)/3,0,1);ne*=Se,Z*=Se;const pe=Math.cos(he),Re=Math.sin(he),Pe=1/o;ne*=Pe,Z*=Pe;let le=Q+Y*pe-ne*Re-z-s.rolling*r*ss*Math.sign(this.vx||0)*(1+5*this.fracGrass+3*(m.left+m.right)),Me=Z+ne*pe+Y*Re;this.fracGrass>0&&(le-=this.fracGrass*.9*r*Math.min(1,Math.abs(this.vx)/8)*Math.sign(this.vx)*(2+.04*Math.abs(this.vx)));const ze=-(n.rx||0),Le=-(n.rz||0),ge=r*ss*Math.tan(a),Ke=s.a*ne*pe+s.a*Y*Re-s.b*Z,V=-this.w*Math.abs(this.w)*0-this.w*180,de=0,me=le/r,Te=Me/r;this.ax+=(me-this.ax)*Math.min(1,e*12),this.ay+=(Te-this.ay)*Math.min(1,e*12);const ce=me+this.w*this.vy,ae=Te-this.w*this.vx;if(this.vx+=ce*e,this.vy+=ae*e,this.w+=(Ke+V+de)/s.Iz*e,ge>0&&(n.rx||n.rz)){const at=ze*ge/r*e,it=Le*ge/r*e,sn=Math.sin(this.psi),en=Math.cos(this.psi);this.vx+=at*sn+it*en,this.vy+=at*en-it*sn}this.brake>.5&&Math.abs(this.vx)<.4&&this.throttle<.05&&(this.vx*=.8,this.vy*=.8),this.psi+=this.w*e;const Ae=Math.sin(this.psi),Qe=Math.cos(this.psi);this.x+=(this.vx*Ae+this.vy*Qe)*e,this.z+=(this.vx*Qe-this.vy*Ae)*e,this.roll+=(De(-this.ay*.012,-.08,.08)-this.roll)*Math.min(1,e*8),this.pitch+=(De(-this.ax*.004,-.05,.05)-this.pitch)*Math.min(1,e*8),this.skid=De((Math.abs(U)-.12)*4+(Math.abs(ht)-.13)*3,0,1)*De(this.speed/15,0,1),this.hit*=Math.max(0,1-e*4),this.scrape*=Math.max(0,1-e*6),this.nLoad=ee/(r*ss),this.ghv+=(676*(this.gTh-this.gh)-2*.8*26*this.ghv)*e,this.gh+=this.ghv*e,this.gpv+=(289*(this.gTp-this.gp)-2*.7*17*this.gpv)*e,this.gp+=this.gpv*e,this.grv+=(289*(this.gTr-this.gr)-2*.7*17*this.grv)*e,this.gr+=this.grv*e}applyImpulse(e,t,n,s,r){const a=this.C.mass,o=this.wvx+n*r/a,c=this.wvz+s*r/a,l=e-this.x,h=t-this.z;this.w+=(l*s-h*n)*r*-1/this.C.Iz*.3;const u=Math.sin(this.psi),d=Math.cos(this.psi);this.vx=o*u+c*d,this.vy=o*d-c*u}addDamage(e,t,n){const s=e-this.x,r=t-this.z,a=Math.sin(this.psi),o=Math.cos(this.psi),c=s*a+r*o,l=s*o-r*a,h=Math.min(1,n);if(Math.abs(c)>Math.abs(l)*1.5?c>0?this.damage.front=Math.min(1,this.damage.front+h):this.damage.rear=Math.min(1,this.damage.rear+h):l>0?this.damage.left=Math.min(1,this.damage.left+h):this.damage.right=Math.min(1,this.damage.right+h),n>.01){const u={lf:Math.max(-2.7,Math.min(2.7,c)),lt:Math.max(-1.1,Math.min(1.1,l)),ly:.55,m:Math.min(1,n*2.2)};this.dents.length<40&&this.dents.push(u),this.dentVer=(this.dentVer||0)+1}this.hit=Math.max(this.hit,Math.min(1,n*3)),this.lastImpact=Math.min(1,n*3)}}const mc={e87:{id:"e87",file:"regal",year:1987,name:"'87 Heritage Stock",tag:"Big, heavy and loose. Carburetted V8, bias tyres, almost no downforce.",spec:{mass:1570,Iz:3050,clA:.38,cdA:1.48,cgH:.55,rpmScale:.84,tqScale:.95,mu:{track:1.3,apron:1.15},pace:.9},stats:{power:3,grip:2,aero:1}},e05:{id:"e05",file:"stock",year:2005,name:"'05 Classic Stock",tag:"The balanced all-rounder. Fuel-injected V8, solid downforce.",spec:{rpmScale:1,tqScale:1,pace:1},stats:{power:4,grip:4,aero:3}},e15:{id:"e15",file:"camry",year:2015,name:"'15 Modern Stock",tag:"Lightest and stickiest. Wide tyres, big aero package, a rocket in the draft.",spec:{mass:1470,Iz:2850,clA:1,cdA:1.22,cgH:.5,rpmScale:1,tqScale:1.05,mu:{track:1.6,apron:1.35},pace:1.045},stats:{power:5,grip:5,aero:5}}};function g_(i,e=null){const t=mc[i]||mc.e05,n=Object.assign({},t.spec),s=n.rpmScale||1,r=n.tqScale||1;return delete n.rpmScale,delete n.tqScale,n.torque=ln.torque.map(([a,o])=>[a*s,o*r]),n.gears=ln.gears.map(a=>a*s),n.idle=Math.round(ln.idle*(.9+.1*s)),n.redline=Math.round(ln.redline*s),n.limiter=Math.round(ln.limiter*s),e&&(n.L=e.wheelbase,n.a=e.a,n.b=e.b,n.wheelR=e.wheelR,n.length=e.L,n.width=e.W,n.trackHalf=e.track,n.H=e.H),n}const Th={rookie:"e87",regional:"e05",pro:"e15",legends:"e15"},Ui={},__={},wh=i=>new URL("assets/car/"+i,document.baseURI).href;function Eh(i){const e=mc[i];return e?Ui[i]?Promise.resolve(Ui[i]):__[i]||=Promise.all([new T9().loadAsync(wh(e.file+".glb")),fetch(wh(e.file+".json")).then(t=>t.json())]).then(([t,n])=>(Ui[i]={scene:t.scene,cfg:n},Ui[i])):Promise.reject(new Error("unknown car "+i))}const v_=i=>Ui[i]&&Ui[i].cfg;function y_(i,e){e==="matte"?(i.roughness=.72,i.metalness=.05,i.clearcoat=0):e==="metallic"?(i.roughness=.3,i.metalness=.65,i.clearcoat=1,i.clearcoatRoughness=.04):(i.roughness=.26,i.metalness=.12,i.clearcoat=1,i.clearcoatRoughness=.06),i.needsUpdate=!0}function lo({car:i="e05",atlas:e="high",livery:t}={}){const n=Ui[i];if(!n)throw new Error("car not loaded: "+i+" (await loadCar first)");const s=n.cfg,r=n.scene.clone(!0),a=e==="high"?2048:e==="med"?1024:512,o=document.createElement("canvas");o.width=a,o.height=a;const c=new Pu(o);c.colorSpace=wt,c.flipY=!1,c.anisotropy=8,c.generateMipmaps=!0,c.minFilter=Fn;const l=new Ln({map:c,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25}),h={F:null,R:null},u={value:0};l.onBeforeCompile=x=>{x.uniforms.uDirt=u,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute float aScuff; varying float vScuff; varying vec3 vOP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vScuff = aScuff; vOP = position;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
void main() {`)},r.traverse(x=>{if(!x.isMesh)return;const S=x.material.name;x.castShadow=S!=="RTTA_Glass",x.receiveShadow=S==="RTTA_Paint",S==="RTTA_Paint"?x.material=l:S==="RTTA_LightF"?x.material=h.F||=x.material.clone():S==="RTTA_LightR"?x.material=h.R||=x.material.clone():S==="RTTA_Glass"&&(x.material.depthWrite=!1,x.material.envMapIntensity=1.6,x.renderOrder=2)});const d=new vn,f=new vn;d.add(f),f.add(r);const g=[],_=[];for(const x of["FL","FR","RL","RR"]){const S=r.getObjectByName("wheel_"+x);if(!S)continue;const P=new vn;for(const F of S.children.slice())P.add(F);S.add(P),g.push(P),_.push({pivot:S,spin:P,front:x[0]==="F",side:x[1]==="L"?1:-1})}const m={group:d,inner:f,wheels:g,pivots:_,bodyMat:l,texture:c,canvas:o,cfg:s,id:i,livery:null,dirty:!0,spin:0,dim:{L:s.L,W:s.W,H:s.H,wheelR:s.wheelR,tireW:s.tireW,track:s.track,front:s.a,rear:-s.b}};m.setLivery=x=>{m.livery=JSON.parse(JSON.stringify(x)),m.dirty=!0},m.flush=()=>{!m.dirty||!m.livery||(f_(o,m.livery,s),c.needsUpdate=!0,m.dirty=!1,y_(l,m.livery.finish))},m.setLights=x=>{m.lightsOn=!!x,p()},m.setBrake=x=>{m.brakeOn=x>.05,p()};function p(){h.F&&(h.F.emissive=new Ge(16773840),h.F.emissiveIntensity=m.lightsOn?1.6:0),h.R&&(h.R.emissive=new Ge(16715792),h.R.emissiveIntensity=(m.lightsOn?.5:0)+(m.brakeOn?2.2:0))}let M=null,y=0;const v=new D,T=new D,w=new D,E=new Xe;new Xe;function C(){M=[],r.updateMatrixWorld(!0);const x=new Set(["RTTA_Trim","RTTA_Black","RTTA_LightF","RTTA_LightR","RTTA_Glass"]);r.traverse(S=>{if(!S.isMesh||!(S.material===l||x.has(S.material.name)))return;const P=S.geometry.clone();S.geometry=P;const F=P.attributes.position;S.material===l&&P.setAttribute("aScuff",new gt(new Float32Array(F.count),1)),E.identity();for(let I=S;I&&I!==r;I=I.parent)E.premultiply(I.matrix);M.push({o:S,g:P,m:E.clone(),mi:E.clone().invert()})})}return m.applyDents=(x,S=.5)=>{if(!x||x.length<=y)return;M||C(),v.set(0,S+.12,0);const P=new D,F=new D;for(let I=y;I<x.length;I++){const N=x[I],k=new D(N.lt,N.ly,N.lf),z=Math.min(1,N.m),G=.05+.13*z,B=.4+.55*z,K=B*B*1.6,ee=w.copy(v).sub(k);ee.y*=.35,ee.normalize();for(const oe of M){const _e=oe.g.attributes.position,xe=oe.g.attributes.normal,We=oe.g.attributes.aScuff;for(let Oe=0;Oe<_e.count;Oe++){T.fromBufferAttribute(_e,Oe).applyMatrix4(oe.m);const te=T.x-k.x,se=T.y-k.y,he=T.z-k.z,Ie=te*te+se*se+he*he;if(Ie>K)continue;const Ee=Ie/K,Ve=1-Ee,ht=Ve*Ve*(3-2*Ve),U=-2*(6*Ve*(1-Ve))/K*.5,rt=.75+.5*Math.abs(Math.sin(T.x*91.7+T.y*57.3+T.z*33.1));if(xe){P.fromBufferAttribute(xe,Oe);const Ne=ee.dot(P);F.set(te,se,he).multiplyScalar(G*rt*U*2),F.addScaledVector(P,-F.dot(P)),P.addScaledVector(F,-Ne*-1).normalize(),xe.setXYZ(Oe,P.x,P.y,P.z)}T.addScaledVector(ee,G*ht*rt),T.applyMatrix4(oe.mi),_e.setXYZ(Oe,T.x,T.y,T.z),We&&We.setX(Oe,Math.min(1,We.getX(Oe)+ht*(.35+.65*z)))}_e.needsUpdate=!0,We&&(We.needsUpdate=!0),xe&&(xe.needsUpdate=!0)}}y=x.length;for(const I of M)I.g.computeBoundingSphere()},m.setDirt=x=>{u.value=x},m.update=x=>{for(const S of _)S.pivot.rotation.y=S.front?x.steer:0,S.spin.rotation.x=x.spin;f.rotation.z=x.roll||0,f.rotation.x=x.pitch||0},m.dispose=()=>{if(M)for(const x of M)x.g.dispose();c.dispose(),l.dispose(),h.F&&h.F.dispose(),h.R&&h.R.dispose()},t&&(m.setLivery(t),m.flush()),m}const Ah={rookie:{pace:.905,aggression:.25,mistakes:.0012,lines:3},pro:{pace:.945,aggression:.45,mistakes:7e-4,lines:4},veteran:{pace:.975,aggression:.65,mistakes:3e-4,lines:5},legend:{pace:1,aggression:.85,mistakes:12e-5,lines:5}};class ju{constructor(e,t="pro",n=1,s=0){this.track=e,this.lv=Ah[t]||Ah.pro,this.rnd=Wc(n*7919+13),this.skill=.97+this.rnd()*.06,this.lane=s,this.laneT=s,this.laneTimer=2+this.rnd()*4,this.err=0,this.mistake=0,this.passing=0,this.steerLP=0}control(e,t,n,s,r){const a=this.track,o=Math.max(.1,t.vx);this.laneTimer-=e;let c=null,l=1e9;for(const N of s){if(N.car===t)continue;let k=N.s-n.s;k<-a.length/2&&(k+=a.length),k>a.length/2&&(k-=a.length),k>0&&k<l&&Math.abs(N.u-n.u)<3.4&&(l=k,c=N)}let h=!1,u=!1;for(const N of s){if(N.car===t)continue;let k=N.s-n.s;if(k<-a.length/2&&(k+=a.length),k>a.length/2&&(k-=a.length),k>-8&&k<8){const z=N.u-n.u;z>.5&&z<3.8&&(u=!0),z<-.5&&z>-3.8&&(h=!0)}}const d=r.phase==="green"&&r.t>9;if(c&&l<34&&this.laneTimer<=0&&d){const N=[-1,1].map(B=>this.laneTarget(n.u+B*3.6)),k=N.map(B=>this.laneFree(t,n,s,B)),z=this.rnd()<.5?0:1,G=k[z]?z:k[1-z]?1-z:-1;G>=0&&this.rnd()<.5+.5*this.lv.aggression&&(this.laneT=N[G],this.passing=3+this.rnd()*3),this.laneTimer=1.5+this.rnd()*2}else this.passing>0?(this.passing-=e,this.passing<=0&&!c&&(this.laneT=this.lane+(this.rnd()-.5)*2)):this.laneTimer<=0&&(this.laneT=this.lane+(this.rnd()-.5)*3,this.laneTimer=4+this.rnd()*6);this.laneT=De(this.laneT,-a.cfg.halfW+1.8,a.cfg.halfW-1.8),u&&this.laneT>this.err&&(this.laneT=this.err-.3),h&&this.laneT<this.err&&(this.laneT=this.err+.3),u&&h&&(this.laneT=this.err),this.err+=(this.laneT-this.err)*Math.min(1,e*.9),this.mistake>0?this.mistake-=e:r.phase==="green"&&this.rnd()<this.lv.mistakes*e*60&&(this.mistake=.4+this.rnd()*.5);const f=Math.atan2(n.tx,n.tz),g=Jr(f-t.psi+Math.atan2(t.vy,Math.max(5,o))*0),_=n.u-this.err,m=a.at(n.s+.18*o+6).k;let p=Math.atan(t.C.L*m)*1+.01*o*o*m*0;p+=.9*g+Math.atan2(1.1*_,o+6)-.09*(t.w-o*n.k)*1;const M=Math.atan2(t.vy,Math.max(6,o));Math.abs(M)>.12&&(p+=.9*(M-Math.sign(M)*.12));const y=t.C.maxSteer/(1+Math.pow(o/42,2));let v=De(p/y,-1,1);v+=this.mistake>0?Math.sin(this.mistake*14)*.05:0,this.steerLP+=(v-this.steerLP)*Math.min(1,e*14);const T=Math.abs(a.at(n.s+40+o*.8).k);let w=88*this.lv.pace*this.skill*(t.C.pace||1);const E=a.at(n.s+30).bank,C=(20+9.81*Math.tan(Math.min(E,.55))*1.4)*(t.C.mu.track/1.5)*(1-.07*De(t.dirty||0,0,1))*.94;if(T>1e-4&&(w=Math.min(w,Math.sqrt(C/T))),c){const N=7+o*.12,k=Math.max(0,c.car.vx);if(l<N+25){const z=De((l-N)/25,-1,1);w=Math.min(w,k*(1+.04*z)+(z>0?6:-4))}this.passing>0&&Math.abs(this.err-c.u)>2.5&&(w=Math.max(w,k+2))}this.mistake>0&&(w*=.85),r.phase!=="green"&&r.phase!=="checker"&&r.phase!=="yellow"&&(w=0),r.phase==="yellow"&&(w=Math.min(w,38)),r.phase==="checker"&&(w=Math.min(w,Math.max(40,86-4.5*(r.t-(r.checkerT||r.t)))));const x=w-t.vx,P=Math.abs(M)>.2?0:De(.5+x*.45,0,1),F=Math.abs(o*o*n.k),I=De(-x*.15-.05,0,.85*De(1-.8*F/20,.22,1))*(x<-3?1:0);return{steer:this.steerLP,throttle:I>0?0:P,brake:I,analog:!0}}laneTarget(e){return De(e,-this.track.cfg.halfW+1.8,this.track.cfg.halfW-1.8)}laneFree(e,t,n,s){for(const r of n){if(r.car===e)continue;let a=r.s-t.s;if(a<-this.track.length/2&&(a+=this.track.length),a>this.track.length/2&&(a-=this.track.length),a>-10&&a<18&&Math.abs(r.u-s)<2.6)return!1}return!0}}const x_=9.81,Mt=()=>new D,Rh=new Xe,ho=new bt,M_=new bt;class b_{constructor(e){const t=e.C;this.C=t,this.m=t.mass;const n=t.length||5,s=t.width||1.95,r=t.H||1.4,a=t.cgH||.52,o=t.trackHalf||.78,c=t.wheelR||.34,l=n/2,h=s/2;this.cg=a,this.hl=l,this.wr=c;const u=[];for(const[M,y]of[[t.a,"f"],[-t.b,"r"]])for(const v of[1,-1])u.push({p:Mt().set(v*o,c-a,M),r:c,wheel:!0});for(const M of[1,-1])for(const y of[1,-1])u.push({p:Mt().set(y*h,.2-a,M*l*.97),r:0}),u.push({p:Mt().set(y*h*.82,.62*r-a,M*l*.93),r:0});for(const M of[.9,-1.3])for(const y of[1,-1])u.push({p:Mt().set(y*h*.72,r-a,M),r:0});this.pts=u,this.I=[this.m/12*(n*n+r*r)*.8,t.Iz||2900,this.m/12*(s*s+r*r)];const d=Math.sin(e.psi),f=Math.cos(e.psi),g=new bt().setFromAxisAngle(new D(0,1,0),e.psi),_=new bt().setFromAxisAngle(new D(0,0,1),e.gr||0),m=new bt().setFromAxisAngle(new D(1,0,0),-(e.gp||0));this.q=g.multiply(_).multiply(m),this.p=Mt().set(e.x,e.gh||0,e.z).add(Mt().set(0,a,0).applyQuaternion(this.q)),this.v=Mt().set(e.vx*d+e.vy*f,0,e.vx*f-e.vy*d);const p=Mt().set(0,0,1).applyQuaternion(this.q);Mt().set(0,1,0).applyQuaternion(this.q),this.w=Mt().set(0,e.w,0).addScaledVector(p,-De(e.vy,-30,30)*.12),e.vx<-20&&this.w.addScaledVector(Mt().set(1,0,0).applyQuaternion(this.q),-.4),this.dmg={front:0,rear:0,left:0,right:0,top:0},this.dents=[],this.age=0,this.rest=0,this.done=!1,this.upright=!1,this.ev=[],this.dirtGain=0,this.maxHit=0,this._R=new Xe,this._r=Mt(),this._pw=Mt(),this._vel=Mt(),this._F=Mt(),this._T=Mt(),this._n=Mt(),this._vt=Mt(),this._ft=Mt(),this._tmp=Mt(),this._tmp2=Mt()}step(e,t,n){if(this.done)return;const s=2,r=e/s;this.ev.length=0;for(let c=0;c<s;c++)this.sub(r,t,n);this.age+=e;const a=this.v.length(),o=this.w.length();if(this.rest=a<.9&&o<.35?this.rest+e:0,this.rest>1||this.age>20){this.done=!0;const c=Mt().set(0,1,0).applyQuaternion(this.q);this.upright=c.y>.62,this.v.set(0,0,0),this.w.set(0,0,0)}}sub(e,t,n){const s=this.m,r=this.q;Rh.makeRotationFromQuaternion(r);const a=Rh.elements,o=this._F.set(0,-s*x_,0),c=this._T.set(0,0,0),l=this.v.length();t(this.p.x,this.p.z,n);const h=this.p.y-n.y;if(l>1){o.addScaledVector(this.v,-.5*1.2*(this.C.cdA||1.3)*1.6*l);const T=this._tmp.set(a[8],a[9],a[10]).dot(this.v)/l;if(T<-.3&&h<6){const w=.6*l*l*6*(-T-.3);o.y+=w;const E=this._r.set(0,0,this.hl).applyQuaternion(r);c.add(this._tmp2.crossVectors(E,this._tmp.set(0,w*1,0)))}}for(const v of this.pts){const T=this._r.copy(v.p).applyQuaternion(r),w=this._pw.copy(this.p).add(T),E=this._vel.crossVectors(this.w,T).add(this.v);t(w.x,w.z,n);let C=n.y+v.r-w.y;if(C>0){const P=this._n.set(n.nx,n.ny,n.nz),F=E.dot(P),I=v.wheel?15e4:38e4,N=v.wheel?5200:12e3,k=De(I*C-N*F,0,v.wheel?11e4:2e5),z=this._tmp.copy(P).multiplyScalar(k),G=this._vt.copy(E).addScaledVector(P,-F),B=G.length(),K=n.surface==="grass";let ee=K?1.1:.6;if(v.wheel){ee=K?2.3:.95;const _e=this._tmp2.set(a[8],a[9],a[10]).addScaledVector(P,-P.dot(this._tmp2)),xe=_e.length();if(xe>.001){_e.multiplyScalar(1/xe);const We=G.dot(_e);G.addScaledVector(_e,-We*.92)}}const oe=G.length();if(oe>1e-5){const _e=this._ft.copy(G).multiplyScalar(-ee*k/(oe+.35));z.add(_e)}if(v.wheel&&B>1e-5&&this._ft.copy(E).addScaledVector(P,-F),o.add(z),c.add(this._tmp2.crossVectors(T,z)),k>4e3&&this.ev.length<8&&this.ev.push({x:w.x,y:n.y,z:w.z,hit:k/11e4,speed:B,soft:K,wheel:!!v.wheel}),!v.wheel&&k>9e3){const _e=k/2e5*e*2.6,xe=v.p;xe.y>.3&&(this.dmg.top+=_e),Math.abs(xe.z)>Math.abs(xe.x)*1.2?xe.z>0?this.dmg.front+=_e:this.dmg.rear+=_e:xe.x>0?this.dmg.left+=_e:this.dmg.right+=_e,k>3e4&&(this._dentT||0)<=this.age&&(this._dentT=this.age+.12,this.dents.push({lf:xe.z,lt:xe.x,ly:xe.y+this.cg,m:De(k/16e4,.15,1)}))}F<-3&&-F>this.maxHit&&(this.maxHit=-F),K&&(this.dirtGain+=k/11e4*e*1.6)}const x=n.u-n.wallU,S=n.infieldU-n.u;if(x>0||S>0){const P=x>0,F=P?x:S,I=P?-n.rx:n.rx,N=P?-n.rz:n.rz,k=E.x*I+E.z*N,z=De(22e4*F-9e3*k,0,9e4),G=this._tmp.set(I*z,0,N*z),B=E.x-k*I,K=E.z-k*N,ee=E.y,oe=Math.hypot(B,ee,K);if(oe>1e-5){const _e=-.35*z/(oe+.4);G.x+=B*_e,G.y+=ee*_e,G.z+=K*_e}o.add(G),c.add(this._tmp2.crossVectors(T,G)),z>6e3&&this.ev.length<8&&this.ev.push({x:w.x,y:w.y,z:w.z,hit:z/9e4,speed:oe,soft:!1,wall:!0}),k<-3&&-k>this.maxHit&&(this.maxHit=-k)}}this.v.addScaledVector(o,e/s),this.p.addScaledVector(this.v,e),ho.copy(r).invert();const u=this._tmp.copy(this.w).applyQuaternion(ho),d=this._r.copy(c).applyQuaternion(ho),f=this.I,g=(f[2]-f[1])*u.y*u.z/f[0],_=(f[0]-f[2])*u.z*u.x/f[1],m=(f[1]-f[0])*u.x*u.y/f[2],p=this._pw.set(d.x/f[0]+g,d.y/f[1]+_,d.z/f[2]+m).applyQuaternion(r);this.w.addScaledVector(p,e),this.w.multiplyScalar(1-.45*e);const M=this.w,y=M_.set(M.x*e*.5,M.y*e*.5,M.z*e*.5,0).multiply(r);r.set(r.x+y.x,r.y+y.y,r.z+y.z,r.w+y.w).normalize()}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}forwardYaw(){const e=Mt().set(0,0,1).applyQuaternion(this.q);return Math.atan2(e.x,e.z)}}const Vr=ln.length/2,Hr=ln.width/2;class Ch{constructor(e,t,n,s,r=!1,a=null,o=null){this.carId=o,this.id=e,this.name=t,this.number=n,this.livery=s,this.isPlayer=r,this.sim=new m_(e,a),this.driver=null,this.q={},this.hint=0,this.prog=0,this.prevS=0,this.lap=0,this.lapStart=0,this.lastLap=null,this.bestLap=null,this.finished=!1,this.finishTime=null,this.pos=0,this.gap=0,this.visual=null,this.controls={steer:0,throttle:0,brake:1}}}class S_{constructor(e,t,n={}){this.track=e,this.entries=t,this.laps=n.laps||3,this.mode=n.mode||"race",this.phase="grid",this.t=0,this.countdown=4.2,this.onEvent=n.onEvent||(()=>{}),this.finishedCount=0,this.leaderDone=!1,this.endTimer=0,this.sorted=t.slice(),this.ready=!1,this.lastCount=99,this.flag=null,this.wallHits=0,this.cars=t.map(r=>({car:r.sim,s:0,u:0}));const s=e.cfg;this._wallU=s.halfW+.5,this._infU=-s.halfW-s.apron-s.infieldLimit,this._gq={},this._gHint=0,this._go={},this._tf={x:0,z:0},this._groundFn=(r,a,o)=>{const c=this._gq;if(e.query(r,a,this._gHint,c),o.y=c.y,o.surface=c.surface,o.u=c.u,o.rx=c.rx,o.rz=c.rz,o.wallU=this._wallU,o.infieldU=this._infU,c.surface==="track"&&c.bank){const l=Math.sin(c.bank),h=Math.cos(c.bank);o.nx=-c.rx*l,o.ny=h,o.nz=-c.rz*l}else o.nx=0,o.ny=1,o.nz=0;return o}}get player(){return this.entries.find(e=>e.isPlayer)}gridUp(e=0){const t=this.track,n=this.entries.slice(),s=this.player;s&&(n.splice(n.indexOf(s),1),n.splice(De(e,0,n.length),0,s)),n.forEach((r,a)=>{const o=Math.floor(a/2),c=a%2,l=-14-o*11-(c?5.5:0),h=c?3.4:-3.4,u=t.point(l,h,{});r.sim.place(u.x,u.z,u.heading,0),r.sim.damage={front:0,rear:0,left:0,right:0},r.sim.gear=1,r.sim.rpm=r.sim.C.idle,t.query(u.x,u.z,void 0,r.q),r.hint=r.q.i,r.prevS=r.q.s,r.prog=l,r.lap=0,r.lapStart=0,r.lastLap=null,r.bestLap=null,r.finished=!1,r.finishTime=null,r.gridPos=a+1,r.driver&&(r.driver.lane=h*.4,r.driver.laneT=r.driver.lane,r.driver.err=h)}),this.sortNow(),this.phase="grid",this.t=0,this.countdown=4.2,this.lastCount=99}rollingStart(e=40,t=-60){const n=this.player,s=this.track.point(t,-1,{});n.sim.place(s.x,s.z,s.heading,e),n.sim.gear=3,this.track.query(s.x,s.z,void 0,n.q),n.hint=n.q.i,n.prevS=n.q.s,n.prog=t,n.lap=0,n.lapStart=0,this.phase="green",this.t=0,this.countdown=0}sortNow(){this.sorted=this.entries.slice().sort((e,t)=>t.finished!==e.finished?t.finished?1:-1:t.finished&&e.finished?e.finishTime-t.finishTime:t.prog-e.prog),this.sorted.forEach((e,t)=>{e.pos=t+1})}update(e){const t=this.track;if(this.t+=e,this.phase==="grid"){this.countdown-=e;const r=Math.ceil(this.countdown);if(r!==this.lastCount&&r<=3&&(this.lastCount=r,r>0&&this.onEvent("count",r)),this.countdown<=0){this.phase="green",this.t=0,this.onEvent("go",0);for(const a of this.entries)a.lapStart=0}}for(let r=0;r<this.entries.length;r++){const a=this.entries[r],o=a.sim.ghost;this.cars[r].s=a.q.s||0,this.cars[r].u=o?1e5:a.q.u||0,this.cars[r].car=a.sim}const n=t.length;for(const r of this.entries){const a=r.sim,o=r.q;if(a.hidden)continue;if(a.tumble)this.stepTumble(r,e);else{let h=r.controls;!r.isPlayer&&r.driver&&(h=r.driver.control(e,a,o,this.cars,this)),r.controls=h,this.phase==="grid"&&(h={steer:0,throttle:0,brake:1,analog:!0}),r.finished&&r.isPlayer&&this.phase!=="grid"&&(h={steer:De(h.steer*.6,-1,1),throttle:0,brake:.25,analog:!0});let u=0,d=0;for(const g of this.entries){if(g===r||g.sim.ghost)continue;let _=g.q.s-o.s;if(_<-n/2&&(_+=n),_>n/2&&(_-=n),_>3&&_<45&&Math.abs(g.q.u-o.u)<3){const m=1-_/45;u=Math.max(u,m*(g.sim.vx>30?1:.3)),_<20&&(d=Math.max(d,1-_/20))}}a.sampleGround(t,r.hint),r.hold>0&&(r.hold-=e,h={steer:0,throttle:0,brake:1,analog:!0}),a.step(e,h,{surface:o.surface,bank:o.bank,rx:o.rx,rz:o.rz,k:o.k,draft:u,dirty:d});const f=this.phase!=="grid"?a.checkTrip(e)||a.pendingTrip:null;f&&this.startTumble(r,f)}if(t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,!r.isPlayer&&this.phase!=="grid"&&!a.tumble){const h=Math.atan2(o.tx,o.tz);let u=Math.abs((a.psi-h+Math.PI*3)%(Math.PI*2)-Math.PI);if(a.vx<6||u<1.2&&!1||Math.abs(a.psi-h)>1.6&&Math.abs(a.psi-h)<4.7?r.stuck=(r.stuck||0)+e:r.stuck=0,r.stuck>3&&!r.finished){const d=t.point(o.s+6,De(o.u,-7,7),{});a.place(d.x,d.z,d.heading,28),a.w=0,a.gear=2,r.stuck=0}}let c=o.s-r.prevS;c<-n/2?c+=n:c>n/2&&(c-=n),r.prevS=o.s;const l=r.prog;if(r.prog+=c,Math.floor(r.prog/n)>Math.floor(l/n)&&r.prog>0){const h=Math.floor(r.prog/n);if(h>=1){const u=this.t-r.lapStart;this.phase!=="grid"&&h===r.lap+1&&(r.lastLap=u,(r.lapStart>0||h>1||this.mode==="hotlap"||u>20)&&(!r.bestLap||u<r.bestLap)&&(r.bestLap=u),r.lap=h,r.lapStart=this.t,this.onEvent("lap",r,u),r.isPlayer&&r.bestLap===u&&this.onEvent("bestlap",r,u),this.mode==="race"&&h>=this.laps&&!r.finished&&(r.finished=!0,r.finishTime=this.t,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker"))))}}}this.contacts(),this.sortNow();const s=this.sorted[0];for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r-1];a.gapAhead=o?Math.max(0,o.prog-a.prog)/Math.max(25,a.sim.vx):0,a.gapLead=s?Math.max(0,s.prog-a.prog)/Math.max(25,a.sim.vx):0}for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r+1];a.gapBehind=o?Math.max(0,a.prog-o.prog)/Math.max(25,o.sim.vx):0}if(this.phase==="checker"){const r=this.player;this.mode==="race"&&r&&r.finished&&(this.endTimer+=e,this.endTimer>4.5&&!this.done&&(this.done=!0,this.phase="done",this.onEvent("done")))}}startTumble(e,t){const n=e.sim;n.tumble||(n.tumble=new b_(n),n.pendingTrip=null,n.wrecked=!1,e.tumbleDone=0,e.tumbleKind=t,this.onEvent("flip",e,t,n.speed))}stepTumble(e,t){const n=e.sim,s=n.tumble;this._gHint=e.hint;const r=s.done;s.done||s.step(t,this._groundFn,this._go);const a=s.q,o=2*(a.x*a.z+a.w*a.y),c=1-2*(a.x*a.x+a.y*a.y);Math.hypot(o,c)>.35&&(n.psi=Math.atan2(o,c)),n.x=s.p.x,n.z=s.p.z;const l=Math.sin(n.psi),h=Math.cos(n.psi);n.vx=s.v.x*l+s.v.z*h,n.vy=s.v.x*h-s.v.z*l,n.w=s.w.y,n.throttle=0,n.rpm+=(n.C.idle-n.rpm)*Math.min(1,t*3),n.skid=0,n.gh=s.p.y-s.cg;for(let f=0;f<s.ev.length&&f<3;f++)this.onEvent("tumbleHit",e,s.ev[f]);const u=n.damage,d=s.dmg;if(d.front+d.rear+d.left+d.right+d.top>0){const f=d.top*.5;u.front=Math.min(1,u.front+d.front+f),u.rear=Math.min(1,u.rear+d.rear+f),u.left=Math.min(1,u.left+d.left+f),u.right=Math.min(1,u.right+d.right+f),d.front=d.rear=d.left=d.right=d.top=0}if(s.dents.length){for(const f of s.dents)n.dents.length<40&&n.dents.push(f);s.dents.length=0,n.dentVer=(n.dentVer||0)+1}if(n.dirt=Math.min(1,n.dirt+s.dirtGain*.6),s.dirtGain=0,s.done&&!r&&(e.tumbleDone=this.t,n.wrecked=!0,this.onEvent("wrecked",e)),s.done){e.tumbleDone||(e.tumbleDone=this.t);const f=this.t-e.tumbleDone;e.isPlayer?f>3.2&&this.recover(e):(e.retired=!0,f>2.5&&(n.ghost=!0),f>9&&(n.hidden=!0,this.onEvent("removed",e)))}}recover(e){const t=e.sim,n=e.q,s=this.track.point(n.s,De(n.u,-6,6),{});t.recover(s.x,s.z,s.heading),t.dents=t.dents.slice(0,40),e.hold=1.6,e.tumbleDone=0,this.track.query(s.x,s.z,e.hint,n),e.hint=n.i,this.onEvent("recovered",e)}tripFromHit(e,t){const n=e.sim;n.tumble||n.ghost||this.phase==="grid"||t>14&&Math.abs(n.vy)>8&&n.speed>28&&n.rand()<.3&&(n.pendingTrip="impact")}contacts(){const e=this.entries,t=this.track,n=t.cfg,s=n.halfW+.5,r=-n.halfW-n.apron-n.infieldLimit,a=e.map(o=>o.sim.tumble?[o.sim.x,o.sim.z,o.sim.wvx,o.sim.wvz]:null);for(let o=0;o<e.length;o++){const c=e[o].sim;if(c.ghost)continue;for(let d=o+1;d<e.length;d++){const f=e[d].sim;if(f.ghost)continue;const g=f.x-c.x,_=f.z-c.z;if(g*g+_*_>36)continue;const m=Math.sin(c.psi),p=Math.cos(c.psi),M=Math.sin(f.psi),y=Math.cos(f.psi);for(const v of[1.4,0,-1.4])for(const T of[1.4,0,-1.4]){const w=c.x+m*v,E=c.z+p*v,C=f.x+M*T,x=f.z+y*T,S=C-w,P=x-E,F=S*S+P*P,I=2;if(F<I*I&&F>1e-6){const N=Math.sqrt(F),k=S/N,z=P/N,G=I-N,B=f.wvx-c.wvx,K=f.wvz-c.wvz,ee=B*k+K*z,oe=G*.5;if(c.x-=k*oe,c.z-=z*oe,f.x+=k*oe,f.z+=z*oe,ee<0){const _e=-1.12*ee/(2/ln.mass),xe=Math.min(_e,3e4);c.applyImpulse((w+C)/2,(E+x)/2,-k,-z,xe*.6),f.applyImpulse((w+C)/2,(E+x)/2,k,z,xe*.6);const We=Math.min(1,-ee/22);this.tripFromHit(e[o],-ee),this.tripFromHit(e[d],-ee),-ee>2&&(c.addDamage((w+C)/2,(E+x)/2,We*.18),f.addDamage((w+C)/2,(E+x)/2,We*.18),this.onEvent("crash",e[o],e[d],We))}}}}const l=e[o].q;if(!l||l.u===void 0||c.tumble)continue;const h=Math.sin(c.psi),u=Math.cos(c.psi);for(const[d,f]of[[Vr,Hr],[Vr,-Hr],[-Vr,Hr],[-Vr,-Hr]]){const g=c.x+h*d+u*f,_=c.z+u*d-h*f,m={};t.query(g,_,e[o].hint,m);const p=m.u-s,M=r-m.u;if(p>0||M>0){const y=p>0,v=y?-m.rx:m.rx,T=y?-m.rz:m.rz,w=y?p:M;c.x+=v*w*1,c.z+=T*w*1;const E=c.wvx*v+c.wvz*T;if(E<0){const C=-1.08*E*ln.mass;c.applyImpulse(g,_,v,T,Math.min(C,9e4)*.55);const x=Math.min(1,-E/26);-E>22&&Math.abs(c.vy)>7&&c.rand()<.35&&!c.tumble&&(c.pendingTrip="impact"),-E>1.5&&(c.addDamage(g,_,x*.22),this.onEvent("wall",e[o],x)),c.scrape=1,c.vx*=.995}}}}for(let o=0;o<e.length;o++){const c=a[o],l=e[o].sim;if(c&&l.tumble){const h=l.tumble;h.p.x+=l.x-c[0],h.p.z+=l.z-c[1],h.v.x+=l.wvx-c[2],h.v.z+=l.wvz-c[3]}}}}const $u="rtta3.career.v1",oa={paint:"#d9dde2",accent:"#1d1f24",trim:"#1d1f24",pattern:"none",finish:"gloss",number:"00",numberColor:"#1d1f24",numberStyle:"block",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}},wn=[{id:"rookie",name:"Rookie Cup",laps:3,field:12,ai:"rookie",mult:1,unlockRep:0,races:6},{id:"regional",name:"Regional Sprint",laps:5,field:16,ai:"pro",mult:1.5,unlockRep:350,races:8},{id:"pro",name:"Pro Series",laps:8,field:24,ai:"veteran",mult:2.2,unlockRep:1100,races:10},{id:"legends",name:"Legends 200",laps:12,field:32,ai:"legend",mult:3,unlockRep:2600,races:12}],Ph={1:{races:2,avgPct:.3,series:0},2:{races:5,avgPct:.55,series:0},3:{races:9,avgPct:.7,series:1},4:{races:14,avgPct:.82,series:2}},Ys={pattern:{none:0,stripe:0,split:300,chevron:600,fade:900},finish:{gloss:0,matte:400,metallic:800}},T_=i=>JSON.parse(JSON.stringify(i)),gc=()=>({v:1,name:"Driver",credits:0,rep:0,races:[],owned:[],declined:[],unlocked:{pattern:["none","stripe"],finish:["gloss"]},livery:T_(oa),seriesIndex:0,seasonRace:0,bestLap:null});function w_(i){try{const e=i&&i.getItem($u);if(e){const t=JSON.parse(e);if(t&&t.v===1)return Object.assign(gc(),t)}}catch{}return gc()}class ga{constructor(e=typeof localStorage<"u"?localStorage:null){this.storage=e,this.state=w_(e),this.listeners=new Set}save(){try{this.storage&&this.storage.setItem($u,JSON.stringify(this.state))}catch{}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.state=gc(),this.save()}get series(){return wn[this.state.seriesIndex]}unlockedSeries(){return wn.filter((e,t)=>this.state.rep>=e.unlockRep||t<=this.state.seriesIndex)}selectSeries(e){return wn[e]&&this.state.rep>=wn[e].unlockRep?(this.state.seriesIndex=e,this.state.seasonRace=0,this.save(),!0):!1}nextRace(){const e=this.series;return{series:e,index:this.state.seasonRace,of:e.races,laps:e.laps,field:e.field,ai:e.ai}}setLivery(e){const t=this.state.livery;for(const n of Object.keys(e))n==="slots"?Object.assign(t.slots,e.slots):t[n]=e[n];for(const n of hc){const s=t.slots[n];s&&!this.state.owned.includes(s)&&(t.slots[n]=null)}return this.save(),t}static finishPct(e,t){return t<=1?1:1-(e-1)/(t-1)}recentAvgPct(e=3){const t=this.state.races.slice(-e);return t.length?t.reduce((n,s)=>n+E_.pct(s),0)/t.length:0}repFor(e,t,n){const s=120*(t-e)/Math.max(1,t-1);return Math.round((s+(e===1?40:0)+(e<=3?15:0)+10)*n)}recordResult({series:e,pos:t,field:n,laps:s,bestLap:r,points:a}){const o=this.state,c=wn.find(p=>p.id===e)||this.series,l=new Set(this.offers().map(p=>p.id)),h=this.repFor(t,n,c.mult);let u=0;const d=[],f=new Set;for(const p of hc){const M=o.livery.slots[p],y=M&&ws(M);if(!y||f.has(M)||!o.owned.includes(M))continue;f.add(M);const v=y.slots.includes(p)?1:.6,T=.5+.5*ga.finishPct(t,n),w=Math.round(y.payout*v*T);u+=w,d.push({id:M,name:y.name,amount:w})}const g=Math.round(40*c.mult*(n-t+1));o.rep+=h,o.credits+=u+g,o.races.push({series:c.id,pos:t,field:n,laps:s,t:Date.now()}),r&&(!o.bestLap||r<o.bestLap)&&(o.bestLap=r),c.id===this.series.id&&(o.seasonRace=Math.min(o.seasonRace+1,c.races)),this.save();const _=this.offers().filter(p=>!l.has(p.id)),m=wn.filter(p=>o.rep>=p.unlockRep&&o.rep-h<p.unlockRep);return{repGain:h,prize:g,sponsorPay:u,paid:d,newOffers:_,unlockedSeries:m,rep:o.rep,credits:o.credits}}eligibleTier(){const e=this.state,t=this.recentAvgPct(3),n=Math.max(...wn.map((r,a)=>e.rep>=r.unlockRep?a:0));let s=0;for(const r of[1,2,3,4]){const a=Ph[r];e.races.length>=a.races&&t>=a.avgPct&&n>=a.series&&(s=r)}return s}offers(){const e=this.eligibleTier();return ma.filter(t=>t.tier<=e&&!this.state.owned.includes(t.id)&&!this.state.declined.includes(t.id))}nextTierGoal(){const e=this.eligibleTier()+1,t=Ph[e];if(!t)return null;const n=this.state,s=Math.max(...wn.map((r,a)=>n.rep>=r.unlockRep?a:0));return{tier:e,racesNeeded:Math.max(0,t.races-n.races.length),avgNeeded:t.avgPct,avgNow:this.recentAvgPct(3),seriesNeeded:t.series>s?wn[t.series].name:null}}acceptSponsor(e){return this.offers().some(t=>t.id===e)?(this.state.owned.push(e),this.save(),!0):!1}declineSponsor(e){this.state.declined.includes(e)||(this.state.declined.push(e),this.save())}canUse(e,t){return this.state.unlocked[e]?this.state.unlocked[e].includes(t)||Ys[e][t]===0:!0}buy(e,t){const n=Ys[e]&&Ys[e][t];return n===void 0||this.canUse(e,t)||this.state.credits<n?!1:(this.state.credits-=n,(this.state.unlocked[e]||=[]).push(t),this.save(),!0)}}const E_={pct:i=>ga.finishPct(i.pos,i.field)},A_=new ga;function R_(){const i=new Set,e=new Set,t={touchActive:!1,touch:{steer:0,throttle:0,brake:0},steer:0,usingPad:!1,lastKeyT:0},n={KeyC:"camera",Escape:"pause",KeyP:"pause",KeyR:"reset",KeyV:"look"},s=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);addEventListener("keydown",a=>{a.target&&/INPUT|TEXTAREA|SELECT/.test(a.target.tagName)||(s.has(a.code)&&a.preventDefault(),a.repeat||(i.add(a.code),n[a.code]&&e.add(n[a.code])))}),addEventListener("keyup",a=>i.delete(a.code)),addEventListener("blur",()=>i.clear()),t.setTouch=a=>{t.touch.steer=De(a.steer||0,-1,1),t.touch.throttle=De(a.throttle||0,0,1),t.touch.brake=De(a.brake||0,0,1),t.lastTouchT=performance.now()},t.press=a=>e.add(a),t.consume=a=>e.has(a)?(e.delete(a),!0):!1,t.clear=()=>{e.clear()};const r=(...a)=>a.some(o=>i.has(o));return t.read=(a,o)=>{let c=0,l=0,h=0,u=!1;const d=r("ArrowLeft","KeyA"),f=r("ArrowRight","KeyD");h=(d?1:0)-(f?1:0),c=r("ArrowUp","KeyW")?1:0,l=r("ArrowDown","KeyS","Space")?1:0;const g=navigator.getGamepads?navigator.getGamepads():[],_=g&&[...g].find(m=>m&&m.connected);if(_){const m=Math.abs(_.axes[0])>.08?_.axes[0]:0,p=_.buttons[7]?_.buttons[7].value:0,M=_.buttons[6]?_.buttons[6].value:0;(m||p>.02||M>.02)&&(h=-m,c=Math.max(c,p),l=Math.max(l,M),u=!0,t.steer=De(-m,-1,1)),_.buttons[0]&&_.buttons[0].pressed&&!t._a&&e.add("look"),t._a=_.buttons[0]&&_.buttons[0].pressed,_.buttons[3]&&_.buttons[3].pressed&&!t._y&&e.add("camera"),t._y=_.buttons[3]&&_.buttons[3].pressed,_.buttons[9]&&_.buttons[9].pressed&&!t._s&&e.add("pause"),t._s=_.buttons[9]&&_.buttons[9].pressed}if(t.touchActive&&performance.now()-(t.lastTouchT||0)<600){const m=t.touch;(m.steer||m.throttle||m.brake)&&(h=m.steer,c=m.throttle,l=m.brake,u=!0,t.steer=m.steer)}if(!u){const m=3.6/(1+o/45),M=(h===0?6.5:m)*(Math.sign(h)!==Math.sign(t.steer)&&t.steer!==0&&h!==0?1.6:1);t.steer+=De(h-t.steer,-M*a,M*a)}return{steer:De(t.steer,-1,1),throttle:c,brake:l,analog:!0}},t}const Rt=(i,e,t)=>i<e?e:i>t?t:i,Di=i=>440*Math.pow(2,(i-69)/12);function _a(i){let e=i>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Lh=new WeakMap;function va(i,e="white"){let t=Lh.get(i);if(t||(t={},Lh.set(i,t)),t[e])return t[e];const n=i.sampleRate,s=Math.floor(n*4),r=2048,a=s+r,o=new Float32Array(a),c=_a(e==="white"?1234:e==="pink"?777:4242);if(e==="white")for(let f=0;f<a;f++)o[f]=c()*2-1;else if(e==="pink"){let f=0,g=0,_=0,m=0,p=0,M=0,y=0;for(let v=0;v<a;v++){const T=c()*2-1;f=.99886*f+T*.0555179,g=.99332*g+T*.0750759,_=.969*_+T*.153852,m=.8665*m+T*.3104856,p=.55*p+T*.5329522,M=-.7616*M-T*.016898,o[v]=(f+g+_+m+p+M+y+T*.5362)*.11,y=T*.115926}}else{let f=0;for(let g=0;g<a;g++){const _=c()*2-1;f=(f+.02*_)/1.02,o[g]=f*3.5}}const l=i.createBuffer(1,s,n),h=l.getChannelData(0);for(let f=0;f<s;f++)h[f]=o[f];for(let f=0;f<r;f++){const g=f/r;h[f]=o[f]*g+o[s+f]*(1-g)}let u=0;for(let f=0;f<s;f++)u=Math.max(u,Math.abs(h[f]));const d=u>0?.95/u:1;for(let f=0;f<s;f++)h[f]*=d;return t[e]=l,l}function Zu(i,e,t,n,s,r){const a=i.createGain(),o=Math.max(.002,s);return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+o),a.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(o+.01,r)),a.gain.setValueAtTime(0,t+Math.max(o+.01,r)+.005),a.connect(e),a}function Je(i,e,t,n){const s=n.dur??.2,r=Zu(i,e,t,n.peak??.3,n.attack??.004,s);let a=r;if(n.pan){const l=i.createStereoPanner?i.createStereoPanner():null;l&&(l.pan.value=n.pan,l.connect(r),a=l)}let o=a;if(n.filter){const l=i.createBiquadFilter();l.type=n.filter.type||"lowpass",l.Q.value=n.filter.q??.7,l.frequency.setValueAtTime(n.filter.f,t),n.filter.f1&&l.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),l.connect(a),o=l}const c=i.createOscillator();return c.type=n.type||"sine",c.frequency.setValueAtTime(n.f0,t),n.f1&&c.frequency.exponentialRampToValueAtTime(n.f1,t+s),n.detune&&(c.detune.value=n.detune),c.connect(o),c.start(t),c.stop(t+s+.05),c}function Ft(i,e,t,n){const s=n.dur??.1,r=Zu(i,e,t,n.peak??.3,n.attack??.002,s);let a=r;if(n.pan&&i.createStereoPanner){const l=i.createStereoPanner();l.pan.value=n.pan,l.connect(r),a=l}const o=i.createBiquadFilter();o.type=n.filter?.type||"bandpass",o.Q.value=n.filter?.q??1,o.frequency.setValueAtTime(n.filter?.f??1500,t),n.filter?.f1&&o.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),o.connect(a);const c=i.createBufferSource();return c.buffer=va(i,n.kind||"white"),c.loop=!0,c.connect(o),c.start(t,(n.offset??0)%3.5),c.stop(t+s+.05),c}function C_(i,e=1.6,t=3.2,n=99){const s=i.sampleRate,r=Math.floor(s*e),a=i.createBuffer(2,r,s);for(let o=0;o<2;o++){const c=a.getChannelData(o),l=_a(n+o*17);let h=0;for(let u=0;u<r;u++){const d=Math.pow(1-u/r,t);h+=(l()*2-1-h)*(.35+.65*(1-u/r)),c[u]=h*d*(u<64?u/64:1)}}return a}function ca(i){return new Promise(e=>setTimeout(e,i))}const Dn={C5:523.25,G5:783.99,A5:880,B5:987.77,E6:1318.5,A6:1760},Ih=(i,e,t=.03)=>i*(1+e*t),P_={hover(i,e,t,n=0){return Je(i,e,t,{type:"sine",f0:Ih(2400,n),dur:.035,peak:.07,attack:.002}),Ft(i,e,t,{dur:.012,peak:.035,filter:{type:"highpass",f:6500,q:.7}}),.06},click(i,e,t,n=0){return Ft(i,e,t,{dur:.014,peak:.2,filter:{type:"highpass",f:3500,q:.7}}),Je(i,e,t,{type:"sine",f0:Ih(1100,n),f1:700,dur:.075,peak:.28,attack:.002}),Je(i,e,t,{type:"triangle",f0:330,dur:.05,peak:.1,attack:.002}),.12},confirm(i,e,t){return Je(i,e,t,{type:"square",f0:Dn.C5,dur:.1,peak:.12,filter:{type:"lowpass",f:3200}}),Je(i,e,t+.07,{type:"square",f0:Dn.G5,dur:.24,peak:.13,filter:{type:"lowpass",f:3600,f1:1200}}),Je(i,e,t+.07,{type:"sine",f0:Dn.G5*2,dur:.22,peak:.07}),Je(i,e,t,{type:"sine",f0:130,f1:100,dur:.18,peak:.22,attack:.003}),Ft(i,e,t+.07,{dur:.16,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),.35},back(i,e,t){return Je(i,e,t,{type:"sine",f0:740,f1:420,dur:.12,peak:.24,attack:.002}),Ft(i,e,t,{dur:.012,peak:.1,filter:{type:"highpass",f:3e3,q:.7}}),.16},error(i,e,t){for(const n of[0,.13])Je(i,e,t+n,{type:"sawtooth",f0:165,dur:.1,peak:.2,filter:{type:"lowpass",f:800}}),Je(i,e,t+n,{type:"square",f0:110,dur:.1,peak:.1});return .28},tab(i,e,t){return Ft(i,e,t,{dur:.06,peak:.12,filter:{type:"bandpass",f:2500,f1:5200,q:1.5}}),Je(i,e,t,{type:"sine",f0:1800,dur:.035,peak:.12,attack:.002}),.08},toggle(i,e,t,n=!0){return Je(i,e,t,{type:"sine",f0:n?600:1200,f1:n?1200:560,dur:.09,peak:.22,attack:.002}),Ft(i,e,t,{dur:.01,peak:.08,filter:{type:"highpass",f:4e3,q:.7}}),.12},whoosh(i,e,t){return Ft(i,e,t,{kind:"pink",dur:.5,attack:.14,peak:.34,filter:{type:"bandpass",f:250,f1:4200,q:1}}),Ft(i,e,t+.05,{kind:"white",dur:.35,attack:.12,peak:.07,filter:{type:"highpass",f:3e3,f1:8e3,q:.7}}),.55},intro(i,e,t){Je(i,e,t,{type:"sine",f0:40,f1:110,dur:1.75+.1,peak:.26,attack:1.5}),Ft(i,e,t,{kind:"pink",dur:1.75+.05,attack:1.75-.1,peak:.28,filter:{type:"bandpass",f:200,f1:8e3,q:2}});for(const r of[110,164.81,246.94,261.63,392])Je(i,e,t,{type:"sawtooth",f0:r,dur:1.75+.2,peak:.05,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}}),Je(i,e,t,{type:"sawtooth",f0:r*1.004,dur:1.75+.2,peak:.035,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}});const s=t+1.75;Je(i,e,s,{type:"sine",f0:120,f1:34,dur:.75,peak:.55,attack:.003}),Ft(i,e,s,{kind:"white",dur:1,peak:.26,attack:.002,filter:{type:"highpass",f:1800,f1:900,q:.6}});for(const[r,a]of[[440,.1],[659.25,.09],[880,.08]])Je(i,e,s,{type:"sawtooth",f0:r,dur:1,peak:a,attack:.003,filter:{type:"lowpass",f:5200,f1:700,q:.9}}),Je(i,e,s+.24,{type:"sawtooth",f0:r,dur:.8,peak:a*.4,attack:.003,filter:{type:"lowpass",f:4200,f1:700,q:.9}});return 1.75+1.1},countdown(i,e,t,n=3){return Je(i,e,t,{type:"sine",f0:880,dur:.16,peak:.3,attack:.004}),Je(i,e,t,{type:"square",f0:440,dur:.12,peak:.05,filter:{type:"lowpass",f:1500}}),.2},go(i,e,t){return Je(i,e,t,{type:"square",f0:1320,dur:.5,peak:.12,filter:{type:"lowpass",f:4e3,f1:1500}}),Je(i,e,t,{type:"sine",f0:660,dur:.5,peak:.28,attack:.004}),Je(i,e,t,{type:"sine",f0:90,f1:45,dur:.35,peak:.35,attack:.003}),Ft(i,e,t,{kind:"pink",dur:.4,attack:.05,peak:.16,filter:{type:"bandpass",f:400,f1:3800,q:1}}),.6},lap(i,e,t){return Je(i,e,t,{type:"sine",f0:Dn.B5,dur:.5,peak:.22,attack:.003}),Je(i,e,t,{type:"sine",f0:Dn.B5*2,dur:.28,peak:.07,attack:.003}),Je(i,e,t+.12,{type:"sine",f0:Dn.E6,dur:.62,peak:.2,attack:.003}),Je(i,e,t+.12,{type:"sine",f0:Dn.E6*2,dur:.35,peak:.06,attack:.003}),.8},bestLap(i,e,t){return[Dn.A5,1108.73,Dn.E6,Dn.A6].forEach((n,s)=>{Je(i,e,t+s*.075,{type:"triangle",f0:n,dur:.38,peak:.17,attack:.003}),Je(i,e,t+s*.075,{type:"sine",f0:n*2,dur:.22,peak:.05,attack:.003})}),Ft(i,e,t+.28,{dur:.5,attack:.05,peak:.05,filter:{type:"highpass",f:6500,q:.7}}),Je(i,e,t,{type:"sine",f0:110,dur:.4,peak:.16,attack:.004}),.95},sponsor(i,e,t){for(const n of[523.25,659.25,783.99,1174.66])Je(i,e,t,{type:"sawtooth",f0:n,dur:.55,peak:.05,attack:.004,filter:{type:"lowpass",f:4200,f1:1e3}});return Je(i,e,t+.18,{type:"sine",f0:1568,dur:.09,peak:.16,attack:.002}),Je(i,e,t+.25,{type:"sine",f0:2093,dur:.55,peak:.16,attack:.002}),Ft(i,e,t+.18,{dur:.04,peak:.12,filter:{type:"highpass",f:5e3,q:.7}}),Ft(i,e,t+.3,{dur:.6,attack:.08,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),Je(i,e,t,{type:"sine",f0:100,f1:60,dur:.3,peak:.25,attack:.003}),1},crash(i,e,t,n=.6){n=Rt(n,0,1);const s=_a(Math.floor(n*1e3)+5);Je(i,e,t,{type:"sine",f0:95,f1:28,dur:.25+.3*n,peak:.2+.4*n,attack:.002}),Ft(i,e,t,{kind:"white",dur:.12+.3*n,peak:.15+.25*n,attack:.002,filter:{type:"bandpass",f:900,f1:250,q:.8}}),Ft(i,e,t,{kind:"pink",dur:.06+.2*n,peak:.1+.18*n,attack:.001,filter:{type:"lowpass",f:3e3,q:.6}});for(const r of[420,613])Je(i,e,t,{type:"square",f0:r,dur:.2+.4*n,peak:.03+.07*n,attack:.002,filter:{type:"lowpass",f:1800,f1:500}});if(n>.4)for(let r=0;r<3+Math.floor(n*5);r++)Je(i,e,t+.05+s()*.35,{type:"sine",f0:2e3+s()*3e3,dur:.05,peak:.04*n,attack:.001});return .3+.7*n}},Dh={cockpit:{lp:3200,wind:.65,squeal:.7,rumble:1.25,crowd:.35},chase:{lp:12e3,wind:1,squeal:1,rumble:1,crowd:.8},broadcast:{lp:12e3,wind:.5,squeal:1,rumble:.7,crowd:1.1}};function L_(i,e){const t=i.createGain();t.gain.value=1;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.5,t.connect(n),n.connect(e);const s=[],r=(T,w=0)=>{const E=i.createBufferSource();return E.buffer=va(i,T),E.loop=!0,E.start(0,w),s.push(E),E},a=(T,w,E)=>{const C=i.createBiquadFilter();return C.type=T,C.frequency.value=w,C.Q.value=E,C},o=(T=0)=>{const w=i.createGain();return w.gain.value=T,w},c={g:o(),f:a("bandpass",500,.6)};r("pink",.3).connect(c.f),c.f.connect(c.g),c.g.connect(t);const l={g:o(),f:a("bandpass",1500,9),o:i.createOscillator(),og:o(.25)};l.o.type="sawtooth",l.o.frequency.value=900,s.push(l.o),l.o.start(),r("white",1.1).connect(l.f),l.o.connect(l.og),l.og.connect(l.f),l.f.connect(l.g),l.g.connect(t);const u={g:o(),f:a("lowpass",160,.7),am:o(.55),lfo:i.createOscillator(),lg:o(.45)};u.lfo.type="sine",u.lfo.frequency.value=20,s.push(u.lfo),u.lfo.start(),u.lfo.connect(u.lg),u.lg.connect(u.am.gain),r("brown",.7).connect(u.f),u.f.connect(u.am),u.am.connect(u.g),u.g.connect(t);const d={g:o(),f:a("lowpass",700,.6),am:o(.7),lfo:i.createOscillator(),lg:o(.3)};d.lfo.type="triangle",d.lfo.frequency.value=9,s.push(d.lfo),d.lfo.start(),d.lfo.connect(d.lg),d.lg.connect(d.am.gain),r("pink",1.9).connect(d.f),d.f.connect(d.am),d.am.connect(d.g),d.g.connect(t);const f={g:o(),f:a("bandpass",900,.45),am:o(.8),lfo:i.createOscillator(),lg:o(.2)};f.lfo.type="sine",f.lfo.frequency.value=.17,s.push(f.lfo),f.lfo.start(),f.lfo.connect(f.lg),f.lg.connect(f.am.gain),r("pink",2.6).connect(f.f),f.f.connect(f.am),f.am.connect(f.g),f.g.connect(t);const g={g:o(),f:a("bandpass",520,.7)};r("pink",3.1).connect(g.f),g.f.connect(g.g),g.g.connect(t);const _={g:o(),f:a("bandpass",1400,3),o:i.createOscillator(),og:o(.12),am:o(.6),lfo:i.createOscillator(),lg:o(.4)};_.o.type="sawtooth",_.o.frequency.value=230,s.push(_.o),_.o.start(),_.lfo.type="square",_.lfo.frequency.value=11,s.push(_.lfo),_.lfo.start(),_.lfo.connect(_.lg),_.lg.connect(_.am.gain),r("white",.2).connect(_.f),_.o.connect(_.og),_.og.connect(_.f),_.f.connect(_.am),_.am.connect(_.g),_.g.connect(t);let m=Dh.cockpit,p={speed:0,slip01:0,offTrack:!1,drafting01:0,crowd01:0,wall01:0},M=!1;const y=.06,v={update(T={},w){p={...p,...T};const E=w??i.currentTime,C=M?0:1,x=Math.max(0,p.speed||0),S=Rt(x/90,0,1),P=Rt(p.slip01||0,0,1),F=Math.pow(Rt((P-.3)/.7,0,1),1.4);c.f.frequency.setTargetAtTime(350+900*S,E,y),c.g.gain.setTargetAtTime(C*.34*S*S*m.wind,E,y),l.o.frequency.setTargetAtTime(640+520*P+x*2.2,E,.03),l.f.frequency.setTargetAtTime(1100+900*P+x*4,E,.03),l.g.gain.setTargetAtTime(C*.85*F*m.squeal*(.4+.6*S),E,.03);const I=(p.offTrack,0);u.lfo.frequency.setTargetAtTime(6+x*.5,E,y),u.g.gain.setTargetAtTime(C*(p.offTrack?.5:.1)*S*m.rumble+I,E,y),d.lfo.frequency.setTargetAtTime(5+x*.3,E,y),d.g.gain.setTargetAtTime(C*(p.offTrack?.55:0)*(.2+.8*S),E,y),f.g.gain.setTargetAtTime(C*.24*Rt(p.crowd01||0,0,1)*m.crowd,E,.25),g.f.frequency.setTargetAtTime(350+700*S,E,y),g.g.gain.setTargetAtTime(C*.14*Rt(p.drafting01||0,0,1)*(.3+.7*S),E,.12),_.g.gain.setTargetAtTime(C*.55*Rt(p.wall01||0,0,1),E,.02)},setPerspective(T){m=Dh[T]||m,n.frequency.setTargetAtTime(m.lp,i.currentTime,.1),v.update({})},setMute(T){M=!!T,v.update({})},dispose(){for(const T of s)try{T.stop()}catch{}try{t.disconnect()}catch{}}};return v}const I_=`
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
  e05: { pS: 1.0, shelfDb: 10.0, shelfF: 150, boomDb: -1.0, boomF: 92, boomQ: 1.6, rumble: 3.0, rumF: 62, idleDb: 4.88, rpmRef: 9000, limit: 9250, hiA: 5500, hiB: 8800, hiCap: 1.0, fade: 1.0, lumpK: 1.0, cyl: 1.0, tauLo: 0.030, tauD: 0.022, crack: 1.0, cn: 1.0, fcMul: 1.0, angFc: 1200,
         fb0: 0.20, fbD: 0.08, drive: 1.0, w1: 1.0, w2: 1.0, w3: 1.0, w4: 1.0, intake: 1.0, intakeF: 1.0, howl: 1.0, whine: 1.0, valve: 1.0, valveF: 3400, pops: 1.0, burble: 1.0, burbT: 1.1,
         head: 1.35, trim: TRIM_E05 },
  e15: { pS: 0.66, shelfDb: 5.5, shelfF: 190, boomDb: -5.0, boomF: 82, boomQ: 1.6, rumble: 1.2, rumF: 58, idleDb: 7.14, rpmRef: 9000, limit: 9250, hiA: 5500, hiB: 8800, hiCap: 0.10, fade: 0.30, lumpK: 1.0, cyl: 1.0, tauLo: 0.032, tauD: 0.022, crack: 0.8, cn: 0.8, fcMul: 0.55, angFc: 700,
         fb0: 0.22, fbD: 0.04, drive: 1.0, w1: 1.15, w2: 1.0, w3: 0.5, w4: 0.10, intake: 0.6, intakeF: 0.5, howl: 0.04, whine: 0.0, valve: 0.2, valveF: 2600, pops: 0.8, burble: 0.8, burbT: 1.1,
         head: 1.35, trim: TRIM_E15 },
  e87: { pS: 0.79, shelfDb: 9.0, shelfF: 190, boomDb: -3.0, boomF: 84, boomQ: 1.6, rumble: 2.8, rumF: 60, idleDb: 3.96, rpmRef: 7560, limit: 7770, hiA: 4500, hiB: 7300, hiCap: 0.12, fade: 0.25, lumpK: 1.15, cyl: 1.25, tauLo: 0.034, tauD: 0.022, crack: 1.6, cn: 1.5, fcMul: 1.15, angFc: 1200,
         fb0: 0.10, fbD: 0.02, drive: 1.1, w1: 1.6, w2: 1.6, w3: 1.0, w4: 0.5, intake: 1.2, intakeF: 0.8, howl: 0.04, whine: 0.0, valve: 2.2, valveF: 2200, pops: 2.5, burble: 2.6, burbT: 1.7,
         head: 1.25, trim: TRIM_E87 },
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
    this.intake = new SVF(); this.valve = new SVF(); this.pop = new SVF(); this.howl = new SVF(); this.crk = new SVF(); this.cbp = new SVF();
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
    this.f1.set(130 * fs, 0.9, sr); this.f2.set(430 * fs, 1.0, sr); this.f3.set(1150 * fs, 1.2, sr); this.f4.set(2700 * fs, 1.2, sr);
    // loudness trim (linear between 1000 rpm knots)
    const trim = P.trim; const kx = Math.min(8.999, Math.max(0, rpmB / 1000)); const k0 = kx | 0; const tdb = trim[k0] + (trim[k0 + 1] - trim[k0]) * (kx - k0);
    // light-throttle compensation at low rpm (idle / grid): the part-throttle voice is much quieter than full throttle, which made the start of a race weak
    const idleW = Math.min(1, Math.max(0, (3700 - rpmB) / 1100)), idleDb = P.idleDb * (1 - loadEff) * idleW;
    const T = this.T, G = this.g, dG = this.dG;
    T[0] = 1; T[1] = 1.0; T[2] = P.w1 * (0.28 - 0.10 * hiE); T[3] = P.w2 * 0.38; T[4] = P.w3 * (0.28 + 0.25 * hiE);
    T[5] = P.w4 * (0.40 * hiE + 0.10 * ang) * (0.4 + 0.6 * loadEff);
    T[6] = P.fb0 - P.fbD * hiE; T[7] = (0.9 + 0.6 * loadEff + 0.5 * ang * loadEff) * P.drive; T[8] = Math.pow(10, (tdb + idleDb) / 20);
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
    const cB = this.cB, cK1 = this.cK1, cK2 = this.cK2, lpA = this.lpA; const limK = this.limK, limR = this.limR; const outGain = this.outGain;
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
`,Nh=343,Ju={e87:7770,e05:9250,e15:9250},D_={e87:.79,e05:1,e15:.66},ed=i=>i==="e87"||i==="e15"||i==="e05"?i:"e05",uo=new WeakMap;function N_(i){if(uo.has(i))return uo.get(i);let e;if(!i.audioWorklet||typeof AudioWorkletNode>"u")e=Promise.resolve(!1);else try{const t=URL.createObjectURL(new Blob([I_],{type:"application/javascript"}));e=i.audioWorklet.addModule(t).then(()=>{try{URL.revokeObjectURL(t)}catch{}return!0}).catch(()=>!1)}catch{e=Promise.resolve(!1)}return uo.set(i,e),e}const Fs=(i,e,t)=>{t==null?i.value=e:i.setValueAtTime(e,t)};function U_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=new AudioWorkletNode(i,"rtta-v8",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{seed:e,gain:t,rpm0:n,era:s}}),a=o=>r.parameters.get(o);return{kind:"worklet",out:r,setState(o,c){c.rpm!=null&&Fs(a("rpm"),c.rpm,o),c.throttle01!=null&&Fs(a("throttle"),Rt(c.throttle01,0,1),o),c.load01!=null&&Fs(a("load"),Rt(c.load01,0,1),o),c.pitch!=null&&Fs(a("pitch"),Rt(c.pitch,.5,2),o),c.rpmLimit!=null&&Fs(a("limit"),c.rpmLimit,o)},setDetail(o){a("detail").value=o},setActive(o){a("active").value=o?1:0},dispose(){try{r.disconnect(),r.port.close()}catch{}}}}function k_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=_a(e||1),a=Ju[s]||9250,o=t*.55*(s==="e87"?1.45:1),c=s==="e15"?.65:s==="e87"?1.1:1,l=D_[s]||1,h=i.createGain();h.gain.value=o;const u=i.createGain();u.gain.value=.5;const d=i.createWaveShaper(),f=new Float32Array(1024);for(let G=0;G<1024;G++){const B=G/511.5-1;f[G]=Math.tanh(2.2*B)}d.curve=f;const g=i.createBiquadFilter();g.type="lowpass",g.Q.value=.8,g.frequency.value=1200;const _=i.createGain();_.gain.value=1;const m=i.createBiquadFilter();m.type="lowshelf",m.frequency.value=170,m.gain.value=7,u.connect(m),m.connect(g),g.connect(d),d.connect(_),_.connect(h);const p=30,M=new Float32Array(p+1),y=new Float32Array(p+1);for(let G=1;G<=p;G++)y[G]=1/Math.pow(G,1.1)*(G%2===0?.9:1);const v=i.createPeriodicWave(M,y),T=(G,B)=>{const K=i.createOscillator();K.setPeriodicWave(v),K.detune.value=G;const ee=i.createGain();return ee.gain.value=B,K.connect(ee),ee.connect(u),K.start(),K},w=T(0,.7),E=T(r()*12-6,.45),C=i.createOscillator();C.type="triangle";const x=i.createGain();x.gain.value=.3,C.connect(x),x.connect(u),C.start();const S=i.createBufferSource();S.buffer=va(i,"pink"),S.loop=!0;const P=i.createBiquadFilter();P.type="bandpass",P.Q.value=1,P.frequency.value=500;const F=i.createGain();F.gain.value=0,S.connect(P),P.connect(F),F.connect(u),S.start();const I=i.createOscillator();I.type="square",I.frequency.value=20;const N=i.createGain();N.gain.value=0,I.connect(N),N.connect(_.gain),I.start();let k=0;const z=(G,B,K)=>{const ee=Math.max(1,G/15*B*l);for(const[oe,_e]of[[w,1],[E,1],[C,.125]]){const xe=ee*_e;K==null?oe.frequency.setTargetAtTime(xe,i.currentTime,.02):oe.frequency.setValueAtTime(xe,K)}};return z(n||900,1,0),{kind:"native",out:h,setState(G,B){const K=G??i.currentTime,ee=B.rpm??900,oe=Rt(B.throttle01??0,0,1),_e=Math.max(B.load01??0,oe*.85);z(ee,B.pitch??1,G);const xe=Rt(ee/(s==="e87"?7560:9e3),0,1);g.frequency.setTargetAtTime((700+3300*Math.pow(_e,.8)+300*xe)*c,K,.03),u.gain.setTargetAtTime(.25+.5*_e,K,.03),P.frequency.setTargetAtTime(250+ee*.22,K,.03),F.gain.setTargetAtTime(Math.pow(oe,1.6)*(.04+.4*xe),K,.03);const We=B.rpmLimit??a,Oe=ee>=We*.985;_.gain.setTargetAtTime(Oe?.55:1,K,.02),N.gain.setTargetAtTime(Oe?.45:0,K,.02),oe<.1&&ee>2800&&K-k>.08&&Math.random()<.12*(ee-2800)/6200&&(k=K,Ft(i,h,K,{dur:.05,peak:.25,filter:{type:"bandpass",f:500+Math.random()*1100,q:1.4}}))},setDetail(){},setActive(G){h.gain.setTargetAtTime(G?o:0,i.currentTime,.03)},dispose(){try{w.stop(),E.stop(),C.stop(),S.stop(),I.stop(),h.disconnect()}catch{}}}}function F_(i,e={},t=!1){const n={seed:e.seed??1,gain:e.gain??.5,rpm0:e.rpm0??900,era:ed(e.era)};return t&&!e.forceNative?U_(i,n):k_(i,n)}const fo=["idle","low","mid","high"],Uh={idle:1e3,low:3e3,mid:6e3,high:8500,offLow:3e3,offHigh:7e3};function O_(i,e,t={}){const n={...Uh,...t},s=i.createGain();s.gain.value=1;const r={};for(const o of Object.keys(e)){if(!(o in Uh)||!e[o])continue;const c=i.createBufferSource();c.buffer=e[o],c.loop=!0;const l=i.createGain();l.gain.value=0,c.connect(l),l.connect(s),c.start(0,Math.random()*Math.max(.01,e[o].duration*.5)),r[o]={src:c,g:l}}const a=(o,c,l)=>{const h=c.map((f,g)=>({n:f,ref:l[g]})).filter(f=>r[f.n]).sort((f,g)=>f.ref-g.ref),u={};if(!h.length)return u;for(const f of h)u[f.n]=0;if(o<=h[0].ref)return u[h[0].n]=1,u;const d=h[h.length-1];if(o>=d.ref)return u[d.n]=1,u;for(let f=0;f<h.length-1;f++){const g=h[f],_=h[f+1];if(o>=g.ref&&o<_.ref){const m=(o-g.ref)/(_.ref-g.ref);u[g.n]=Math.sqrt(1-m),u[_.n]=Math.sqrt(m);break}}return u};return{out:s,voices:r,has:()=>Object.keys(r).length>0,setState(o,{rpm:c,throttle01:l,pitch:h=1}){const u=o??i.currentTime,d=Rt(l??0,0,1),f=Rt((d-.05)/.35,0,1),g=c*h,_=fo.map(M=>n[M]),m=a(c,fo,_),p=a(c,["offLow","offHigh"],[n.offLow,n.offHigh]);for(const M of Object.keys(r)){const y=fo.includes(M),v=(y?m[M]:p[M])??0,T=n[M];r[M].g.gain.setTargetAtTime(v*(y?f:1-f),u,.04),r[M].src.playbackRate.setTargetAtTime(Rt(g/T,.4,2.4),u,.03)}},dispose(){for(const o of Object.keys(r))try{r[o].src.stop()}catch{}try{s.disconnect()}catch{}}}}const _c={cockpit:{hp:38,shelf:3,pkF:90,pkQ:4,pkG:6,lp:1900,gain:.95,aiCut:3500},chase:{hp:35,shelf:0,pkF:120,pkQ:1,pkG:0,lp:7e3,gain:1,aiCut:14e3},broadcast:{hp:90,shelf:-2,pkF:1800,pkQ:.8,pkG:3,lp:9e3,gain:.8,aiCut:14e3}};function B_(i,e,t){const n=i.listener;if(!n)return;const s=t||{x:0,y:0,z:-1};if(n.positionX){const r=i.currentTime;n.positionX.setTargetAtTime(e.x,r,.02),n.positionY.setTargetAtTime(e.y,r,.02),n.positionZ.setTargetAtTime(e.z,r,.02),n.forwardX.setTargetAtTime(s.x,r,.03),n.forwardY.setTargetAtTime(s.y,r,.03),n.forwardZ.setTargetAtTime(s.z,r,.03),n.upX.value=0,n.upY.value=1,n.upZ.value=0}else try{n.setPosition(e.x,e.y,e.z),n.setOrientation(s.x,s.y,s.z,0,1,0)}catch{}}function z_(i,e,t){if(i.positionX)i.positionX.setTargetAtTime(e.x,t,.03),i.positionY.setTargetAtTime(e.y,t,.03),i.positionZ.setTargetAtTime(e.z,t,.03);else try{i.setPosition(e.x,e.y,e.z)}catch{}}class V_{constructor(e){this.sys=e,this.voices=new Set,this.listener={pos:null,vel:null,fwd:null},this.mode="cockpit",this.recBuffers=null,this.recRefs={},this.paused=!1,this.MAX_FULL=6,this.MAX_LITE=10}create(e={}){const t=new H_(this,e);return this.voices.add(t),this.sys.ctx()&&this.sys.bus()&&t.build(),t}onReady(){for(const e of this.voices)e.build();this._applyRec()}setPerspective(e){if(_c[e]){this.mode=e;for(const t of this.voices)t.applyPerspective()}}setListener(e,t,n){this.listener={pos:e,vel:t,fwd:n};const s=this.sys.ctx();s&&e&&B_(s,e,n);const r=[];for(const a of this.voices)!a.player&&a.built&&r.push(a);r.sort((a,o)=>a.lastDist-o.lastDist),r.forEach((a,o)=>a.setTier(this.paused?2:o<this.MAX_FULL?0:o<this.MAX_FULL+this.MAX_LITE&&a.lastDist<400?1:2))}setPaused(e){this.paused=e;for(const t of this.voices)t.setPausedState(e)}async loadRecordings(e,t={}){const n=this.sys.ctx(),s={loaded:[],failed:[]};if(!n)return s.failed=Object.keys(e||{}),s;const r={};return await Promise.all(Object.keys(e||{}).map(async a=>{try{const o=e[a];if(!o)return;if(typeof AudioBuffer<"u"&&o instanceof AudioBuffer){r[a]=o,s.loaded.push(a);return}const c=await fetch(o);if(!c.ok)throw new Error("http "+c.status);const l=await c.arrayBuffer();r[a]=await new Promise((h,u)=>{const d=n.decodeAudioData(l,h,u);d&&d.catch&&d.catch(u)}),s.loaded.push(a)}catch{s.failed.push(a)}})),s.loaded.length&&(this.recBuffers=r,this.recRefs=t,this._applyRec()),s}_applyRec(){for(const e of this.voices)e.player&&e.attachRecordings()}}class H_{constructor(e,t){this.mgr=e,this.player=!!t.player,this.era=ed(t.era),this.seed=t.seed??Math.floor(Math.random()*1e6),this.opts=t,this.built=!1,this.disposed=!1,this.last=null,this.lastDist=1e9,this.tier=0,this.rec=null,this.recSent=!1,this.nodes=null,this.core=null}build(){if(this.built||this.disposed)return;const e=this.mgr.sys.ctx(),t=this.mgr.sys.bus();if(!e||!t)return;this.ctx=e;const n=F_(e,{seed:this.seed,gain:this.player?.5:.42,rpm0:this.last?.rpm??900,era:this.era},this.mgr.sys.workletOk());this.core=n;const s=e.createGain();s.gain.value=1,n.out.connect(s);const r=e.createGain();s.connect(r);const a={procGain:s,sum:r};let o=r;if(this.player){const l=e.createBiquadFilter();l.type="highpass";const h=e.createBiquadFilter();h.type="lowshelf",h.frequency.value=120;const u=e.createBiquadFilter();u.type="peaking";const d=e.createBiquadFilter();d.type="lowpass",d.Q.value=.5;const f=e.createGain();o.connect(l),l.connect(h),h.connect(u),u.connect(d),d.connect(f),o=f,Object.assign(a,{hp:l,shelf:h,pk:u,lp:d,pg:f})}else{const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=.5,l.frequency.value=12e3,o.connect(l),o=l,a.dlp=l}const c=e.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=this.player?1:6,c.maxDistance=600,c.rolloffFactor=this.player?0:1.3,o.connect(c),c.connect(t),a.pan=c,this.nodes=a,this.built=!0,this.applyPerspective(!0),this.attachRecordings(),this.last&&this.update(this.last)}applyPerspective(e){if(!this.built)return;const t=this.nodes,n=_c[this.mgr.mode],s=this.ctx.currentTime,r=e?.001:.08;this.player&&(t.hp.frequency.setTargetAtTime(n.hp,s,r),t.shelf.gain.setTargetAtTime(n.shelf,s,r),t.pk.frequency.setTargetAtTime(n.pkF,s,r),t.pk.Q.setTargetAtTime(n.pkQ,s,r),t.pk.gain.setTargetAtTime(n.pkG,s,r),t.lp.frequency.setTargetAtTime(n.lp,s,r),t.pg.gain.setTargetAtTime(n.gain,s,r))}attachRecordings(){if(!this.built||!this.player||this.rec||!this.mgr.recBuffers)return;const e=this.ctx;if(this.rec=O_(e,this.mgr.recBuffers,this.mgr.recRefs),!this.rec.has()){this.rec=null;return}const t=e.createGain();t.gain.value=.9,this.rec.out.connect(t),t.connect(this.nodes.sum),this.nodes.recGain=t,this.nodes.procGain.gain.setTargetAtTime(.5,e.currentTime,.3)}setTier(e){!this.built||e===this.tier||(this.tier=e,this.core.setActive(e<2&&!this.mgr.paused),this.core.setDetail(e===0?1:0))}setPausedState(e){this.built&&this.core.setActive(!e&&(this.player||this.tier<2))}update(e){if(this.disposed||(this.last=e,!this.built&&(this.mgr.sys.ctx()&&this.mgr.sys.bus()&&this.build(),!this.built))||this.mgr.paused)return;const n=this.ctx.currentTime,s=this.mgr.listener;let r=1,a=0;if(e.pos&&s.pos){const c=e.pos.x-s.pos.x,l=(e.pos.y||0)-(s.pos.y||0),h=e.pos.z-s.pos.z;if(a=Math.sqrt(c*c+l*l+h*h),!this.player&&a>.5){const u=c/a,d=l/a,f=h/a,g=s.vel?s.vel.x*u+(s.vel.y||0)*d+s.vel.z*f:0,_=e.vel?e.vel.x*u+(e.vel.y||0)*d+e.vel.z*f:0;r=Rt((Nh+g)/(Nh+_),.85,1.18)}z_(this.nodes.pan,e.pos,n)}if(this.lastDist=a,!this.player){const c=_c[this.mgr.mode].aiCut;this.nodes.dlp.frequency.setTargetAtTime(Rt(14e3/(1+a/50),1500,c),n,.1)}if(this.tier===2&&!this.player)return;const o={rpm:e.rpm??900,throttle01:e.throttle01??0,load01:e.load01??0,pitch:r,rpmLimit:this.opts.rpmLimit??Ju[this.era]};this.core.setState(null,o),this.rec&&this.rec.setState(null,o)}dispose(){if(this.disposed=!0,this.mgr.voices.delete(this),!!this.built)try{this.rec&&this.rec.dispose(),this.core.dispose();for(const e of Object.keys(this.nodes))try{this.nodes[e].disconnect()}catch{}}catch{}}}const td={menu:{bpm:124,bars:32,target:.115,desc:"confident, building, bass-led"},garage:{bpm:88,bars:24,target:.085,desc:"calm, warm, sparse"},race:{bpm:128,bars:32,target:.06,desc:"low-intensity bed under the engines"},results:{bpm:96,bars:16,target:.09,desc:"short resolve"}},kh=3.2;class G_{constructor(e,t,n,s=0){this.ctx=e,this.step=60/t/4,this.loopLen=n*16*this.step,this.bars=n,this.origin=s*16*this.step;const r=(m,p)=>{const M=e.createGain();return M.gain.value=m,p&&M.connect(p),M},a=r(.9);a.connect(e.destination),this.master=a;const o=e.createConvolver();o.buffer=C_(e,1.8,3,11);const c=r(1,o),l=r(.42,a);o.connect(l);const h=e.createDelay(1.5);h.delayTime.value=this.step*3;const u=r(.36),d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=3200;const f=r(1,h);h.connect(d),d.connect(u),u.connect(h);const g=r(.34,a);d.connect(g),d.connect(c);const _=(m,p=0,M=0)=>{const y=r(m,a);return p&&y.connect(r(p,c)),M&&y.connect(r(M,f)),y};this.bus={kick:_(.95),snare:_(.6,.18),hat:_(.5),bass:_(.85),pad:_(.55,.5),arp:_(.55,.28,.5),lead:_(.6,.32,.42),fx:_(.6,.2)},this.vib=e.createOscillator(),this.vib.frequency.value=5.3,this.vibG=r(9),this.vib.connect(this.vibG),this.vib.start(0)}t(e,t=0){return(e*16+t)*this.step-this.origin}noise(e,t,n,s,r,a,o=1,c="bandpass",l="white",h=.002){const u=this.ctx,d=u.createGain();d.gain.setValueAtTime(0,e),d.gain.linearRampToValueAtTime(n,e+h),d.gain.exponentialRampToValueAtTime(1e-4,e+t),d.gain.setValueAtTime(0,e+t+.01),d.connect(s);const f=u.createBiquadFilter();f.type=c,f.Q.value=o,a?(f.frequency.setValueAtTime(r,e),f.frequency.exponentialRampToValueAtTime(a,e+t)):f.frequency.value=r,f.connect(d);const g=u.createBufferSource();g.buffer=va(u,l),g.loop=!0,g.connect(f),g.start(e,e*7.31%3.5),g.stop(e+t+.03)}note(e,t,n,s,r,a={}){const o=this.ctx,c=Math.min(a.attack??.005,n),l=a.release??.12,h=o.createGain();if(h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(r,t+c),h.gain.setValueAtTime(r,t+Math.max(c,n)),h.gain.exponentialRampToValueAtTime(1e-4,t+n+l),h.gain.setValueAtTime(0,t+n+l+.01),a.pan){const d=o.createStereoPanner();d.pan.value=a.pan,h.connect(d),d.connect(e)}else h.connect(e);let u=h;a.filter&&(u=o.createBiquadFilter(),u.type="lowpass",u.Q.value=a.filter[2]??.8,a.filter[1]==null||a.filter[1]===a.filter[0]?u.frequency.value=a.filter[0]:(u.frequency.setValueAtTime(a.filter[0],t),u.frequency.exponentialRampToValueAtTime(Math.max(40,a.filter[1]),t+Math.max(.02,n*(a.sweep??.6)))),u.connect(h));for(const d of a.detune||[0]){const f=o.createOscillator();f.type=a.type||"sawtooth",f.frequency.value=s,f.detune.value=d,f.connect(u),a.vib&&this.vibG.connect(f.detune),f.start(t),f.stop(t+n+l+.05)}}kick(e,t=1){const n=this.ctx,s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.9*t,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.34),s.gain.setValueAtTime(0,e+.36),s.connect(this.bus.kick);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(155,e),r.frequency.exponentialRampToValueAtTime(46,e+.1),r.connect(s),r.start(e),r.stop(e+.4),this.noise(e,.012,.16*t,this.bus.kick,2500,0,.7,"highpass")}snare(e,t=1){this.noise(e,.2,.5*t,this.bus.snare,1900,1100,.8,"bandpass"),this.noise(e,.08,.2*t,this.bus.snare,5200,0,.7,"highpass"),this.note(this.bus.snare,e,.02,195,.28*t,{type:"triangle",release:.09,attack:.002})}hat(e,t=1,n=!1){this.noise(e,n?.2:.04,.17*t,this.bus.hat,7800,0,.7,"highpass","white",.001)}crash(e,t=1){this.noise(e,1.6,.16*t,this.bus.fx,4200,0,.6,"highpass","white",.003)}riser(e,t,n=1){this.noise(e,t,.22*n,this.bus.fx,250,9e3,2,"bandpass","pink",t-.05)}bass(e,t,n,s=1,r=1){const a=Di(t),o=n*this.step;this.note(this.bus.bass,e,o,a,.34*s,{type:"sawtooth",attack:.004,release:.05,filter:[Math.min(2400,1400*r),260*r+60,1.4],sweep:.5}),this.note(this.bus.bass,e,o,a,.3*s,{type:"sine",attack:.004,release:.05})}pad(e,t,n,s=1,r=1500,a=.5){const o=this.ctx,c=.8,l=.07*s,h=o.createBiquadFilter();h.type="lowpass",h.Q.value=.7,h.frequency.setValueAtTime(r*.5,e),h.frequency.exponentialRampToValueAtTime(r,e+n*.8),h.connect(this.bus.pad);const u=o.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+Math.min(a,n)),u.gain.setValueAtTime(l,e+n),u.gain.exponentialRampToValueAtTime(1e-4,e+n+c),u.gain.setValueAtTime(0,e+n+c+.01),u.connect(h);const d=o.createStereoPanner();d.pan.value=-.85,d.connect(u);const f=o.createStereoPanner();f.pan.value=.85,f.connect(u),t.forEach((g,_)=>{for(const[m,p]of[[-7,d],[6,f]]){const M=o.createOscillator();M.type="sawtooth",M.frequency.value=Di(g),M.detune.value=m+_%2*2,M.connect(p),M.start(e),M.stop(e+n+c+.05)}})}pluck(e,t,n,s=1,r=0,a=3500){const o=Di(t),c=n*this.step;this.note(this.bus.arp,e,c*.45,o,.13*s,{type:"square",attack:.002,release:.05,pan:r,filter:[a]}),this.note(this.bus.arp,e,c,o,.1*s,{type:"sine",attack:.002,release:.1,pan:r})}bell(e,t,n,s=1){const r=Di(t),a=n*this.step;this.note(this.bus.lead,e,a,r,.13*s,{type:"triangle",attack:.003,release:.5}),this.note(this.bus.lead,e,a*.6,r*2.01,.04*s,{type:"sine",attack:.002,release:.3})}lead(e,t,n,s=1){this.note(this.bus.lead,e,n*this.step,Di(t),.12*s,{type:"sawtooth",detune:[-9,8],attack:.01,release:.14,vib:!0,filter:[3400,1500,.9],sweep:.9})}}const Bi=(i,e)=>e.map(t=>i+t);async function W_(i,e,t,n){const s=[{r:43,iv:[0,3,7]},{r:39,iv:[0,4,7]},{r:46,iv:[0,4,7]},{r:41,iv:[0,4,7]}],r=[[0,0],[2,0],[3,12],[6,0],[8,0],[10,7],[11,12],[14,0]],a=[0,2,1,3,2,1,3,2,0,2,1,3,2,3,1,2],o=[[[0,74,3],[3,77,2],[6,79,2],[8,77,3],[12,74,4]],[[0,75,3],[3,79,2],[6,82,2],[8,79,3],[12,75,4]],[[0,77,2],[2,74,2],[4,70,4],[8,74,3],[12,77,4]],[[0,72,3],[3,77,2],[6,81,2],[8,79,4],[12,77,2],[14,74,2]]];for(let c=t;c<n;c++){const l=Math.floor(c/8),h=s[c%4],u=i.t(c),d=Bi(h.r,h.iv),f=l===3?c>=30?[]:[0,8]:[0,4,8,12];for(const _ of f)i.kick(i.t(c,_),l===0?.8:.95);c%8===0&&i.crash(u,l===0?.5:.7);for(const _ of[2,6,10,14])i.hat(i.t(c,_),l===0?.5:.7,_===14&&l>=2);if(l>=1)for(const _ of[0,4,8,12])(l!==3||c>=30)&&i.hat(i.t(c,_+1),.3+.1*(_%8===0));if(l>=1&&l!==3&&(i.snare(i.t(c,4),.85),i.snare(i.t(c,12),.9)),l===3&&c<30&&i.snare(i.t(c,12),.7),c===31)for(let _=8;_<16;_++)i.snare(i.t(c,_),.35+.08*(_-8));if(l===0)for(let _=0;_<16;_+=2)i.bass(i.t(c,_),h.r,1.5,.8,.55);else if(l===3)i.bass(u,h.r,15,.8,.7);else for(const[_,m]of r)i.bass(i.t(c,_),h.r+m,1.2,.95+(m?.05:0),1);if(i.pad(u,Bi(h.r+24,h.iv),16*i.step,l===0?.8:1,l===0?900:l===3?2400:1500,.4),l>=1)for(let _=0;_<16;_++){const m=a[_],p=d[m%3]+36+(m===3?12:0);i.pluck(i.t(c,_),p,1.1,(l===3?.5:.8)*(_%4===0?1:.75),(_%4-1.5)*.25,3600)}if(l===2||l===1&&c>=12)for(const[_,m,p]of o[c%4])i.lead(i.t(c,_),m,p,l===2?1:.5);c===30&&i.riser(i.t(30),32*i.step,1),c%4===3&&await e()}}async function q_(i,e,t,n){const s=[{r:50,iv:[0,3,7,10,14]},{r:46,iv:[0,4,7,11]},{r:53,iv:[0,4,7,11]},{r:48,iv:[0,4,7,14]}],r=[0,2,4,2,1,3,2,1];for(let a=t;a<n;a++){const o=Math.floor(a/8),c=s[a%4],l=i.t(a),h=Bi(c.r,c.iv);if(i.pad(l,Bi(c.r+12,c.iv).slice(0,4),16*i.step+.4,1,800,1.2),i.note(i.bus.bass,l,15.5*i.step,Di(c.r-12),.3,{type:"sine",attack:.05,release:.4}),o>=1)for(let u=0;u<8;u++){const d=r[u]%h.length;i.pluck(i.t(a,u*2),h[d]+24,3,(u%2?.55:.8)*(o===1?.8:1),(u%4-1.5)*.3,2400)}o>=2&&(i.kick(l,.5),i.kick(i.t(a,10),.35),i.hat(i.t(a,4),.35),i.hat(i.t(a,12),.35),i.snare(i.t(a,8),.28)),a%4===3&&await e()}}async function X_(i,e,t,n){const s=[{r:45,iv:[0,3,7]},{r:41,iv:[0,4,7]},{r:48,iv:[0,4,7]},{r:43,iv:[0,4,7]}];for(let r=t;r<n;r++){const a=Math.floor(r/8),o=s[r%4],c=i.t(r),l=Bi(o.r,o.iv);i.kick(c,.55),i.kick(i.t(r,8),.45),r>=4&&(i.hat(i.t(r,4),.35),i.hat(i.t(r,12),.35)),a>=2&&(i.hat(i.t(r,14),.25),i.snare(i.t(r,12),.25));for(let h=0;h<16;h+=2)i.bass(i.t(r,h),o.r+(h===6&&r%2?12:0),1.4,.55+.1*(h===0),.45);i.pad(c,Bi(o.r+12,o.iv),16*i.step,.7,700,.6),r%2===1&&a>=1&&[0,3,6,8,11,14].forEach((h,u)=>i.pluck(i.t(r,h),l[u%3]+24,1.2,.38,(u%3-1)*.3,2200)),r%8===7&&i.riser(i.t(r,8),8*i.step,.35),r%4===3&&await e()}}async function Q_(i,e,t,n){const s=[{r:53,iv:[0,4,7,11]},{r:50,iv:[0,3,7,10]},{r:46,iv:[0,4,7,14]},{r:48,iv:[0,4,7]}],r=[[[0,72,3],[3,76,3],[8,77,6]],[[0,74,3],[3,77,3],[8,81,6]],[[0,74,3],[3,77,3],[8,82,6]],[[0,76,3],[3,79,3],[8,84,8]]];for(let a=t;a<n;a++){const o=s[a%4],c=i.t(a);if(i.pad(c,Bi(o.r+12,o.iv).slice(0,4),16*i.step+.3,1,1700,.35),i.note(i.bus.bass,c,15*i.step,Di(o.r-12),.32,{type:"sine",attack:.02,release:.3}),a>=2&&a<14)for(const[l,h,u]of r[a%4])i.bell(i.t(a,l),h,u,a<4?.8:1);if(a>=4&&a<14&&(i.kick(c,.55),i.kick(i.t(a,8),.4)),a>=8&&a<14){i.snare(i.t(a,12),.35);for(const l of[4,12])i.hat(i.t(a,l),.35)}a===0&&i.crash(c,.3),a%4===3&&await e()}}const K_={menu:W_,garage:q_,race:X_,results:Q_},Fh=4;function Y_(i,e,t){const r=Math.exp(-1/(.006*t)),a=Math.exp(-1/(.18*t)),o=i.length;let c=0;for(let l=0;l<2;l++)for(let h=0;h<o;h++){const u=Math.max(Math.abs(i[h]),Math.abs(e[h]));if(c=u>c?r*c+(1-r)*u:a*c+(1-a)*u,l===1){const d=c>.16?Math.pow(c/.16,-.7142857142857143):1;i[h]*=d,e[h]*=d}}}async function j_(i,{ctxFactory:e,sampleRate:t=32e3,yieldFn:n=()=>ca(0),concurrency:s=2}={}){const r=td[i];if(!r)throw new Error("unknown track "+i);const a=e||((w,E,C)=>new OfflineAudioContext(w,E,C)),c=16*(60/r.bpm/4),l=t,h=Math.round(r.bars*c*l),u=Math.round(kh*l),d=h+u,f=[new Float32Array(d),new Float32Array(d)],g=[];for(let w=0;w<r.bars;w+=Fh)g.push([w,Math.min(r.bars,w+Fh)]);let _=0;const m=async()=>{for(;_<g.length;){const[w,E]=g[_++],C=Math.ceil(((E-w)*c+kh)*l),x=a(2,C,l),S=new G_(x,r.bpm,r.bars,w);await K_[i](S,n,w,E),await n();const P=await x.startRendering(),F=Math.round(w*c*l);for(let I=0;I<2;I++){const N=P.getChannelData(I),k=f[I],z=Math.min(N.length,d-F);for(let G=0;G<z;G++)k[F+G]+=N[G]}}};await Promise.all(Array.from({length:Math.max(1,s)},m));const p=[new Float32Array(h),new Float32Array(h)];for(let w=0;w<2;w++){const E=p[w],C=f[w];for(let x=0;x<h;x++)E[x]=C[x];for(let x=0;x<u&&x<h;x++)E[x]+=C[h+x]}Y_(p[0],p[1],l);let M=0,y=0;for(let w=0;w<2;w++)for(let E=0;E<h;E++){const C=p[w][E];M+=C*C,Math.abs(C)>y&&(y=Math.abs(C))}const v=Math.sqrt(M/(2*h));let T=v>0?r.target/v:1;y*T>.92&&(T=.92/y);for(let w=0;w<2;w++)for(let E=0;E<h;E++)p[w][E]*=T;return{name:i,sampleRate:l,length:h,channels:p,rmsBefore:v,gain:T,seconds:h/l}}const yn=typeof window<"u"?window:null,Os=yn&&(yn.AudioContext||yn.webkitAudioContext),Oh=yn&&(yn.OfflineAudioContext||yn.webkitOfflineAudioContext),ie={ctx:null,ready:!1,unlocked:!1,inited:!1,workletOk:!1,unlockP:null,gestureArmed:!1,buses:null,ambient:null,paused:!1,perspective:"cockpit",hiddenSuspended:!1,listeners:new Set,vol:{master:.9,music:.5,sfx:.9,engine:.9,ambient:.7},musicBuf:{},musicJob:{},musicWanted:null,musicFade:1.5,musicCur:null,lastHover:0},as=new V_({ctx:()=>ie.ready?ie.ctx:null,bus:()=>ie.ready?ie.buses.engine:null,workletOk:()=>ie.workletOk});function nd(){for(const i of ie.listeners)try{i(Ze.state)}catch{}}function $_(){const i=ie.ctx,e=r=>{const a=i.createGain();return a.gain.value=r,a},t=e(ie.vol.master),n=i.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=20,n.ratio.value=3,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(i.destination);const s={master:t,music:e(ie.vol.music),sfx:e(ie.vol.sfx),engine:e(ie.vol.engine),ambient:e(ie.vol.ambient),musicDuck:e(1)};s.music.connect(s.musicDuck),s.musicDuck.connect(t),s.sfx.connect(t),s.engine.connect(t),s.ambient.connect(t),ie.buses=s}function id(){if(!ie.buses)return;const i=ie.ctx.currentTime;for(const e of["master","music","sfx","engine","ambient"])ie.buses[e].gain.setTargetAtTime(Rt(ie.vol[e],0,1),i,.05)}function Z_(){try{const i=ie.ctx.createBuffer(1,1,22050),e=ie.ctx.createBufferSource();e.buffer=i,e.connect(ie.ctx.destination),e.start(0)}catch{}}function vc(){if(ie.gestureArmed||!yn)return;ie.gestureArmed=!0;const i=["pointerdown","touchend","keydown","click"],e=()=>{Ze.unlock().then(t=>{t&&(i.forEach(n=>yn.removeEventListener(n,e,!0)),ie.gestureArmed=!1)})};i.forEach(t=>yn.addEventListener(t,e,!0))}function J_(){const i=ie.ctx;i.onstatechange=()=>{ie.unlocked=i.state==="running",nd(),!ie.unlocked&&!ie.hiddenSuspended&&vc()},typeof document<"u"&&document.addEventListener("visibilitychange",()=>{ie.ctx&&(document.hidden?ie.ctx.state==="running"&&(ie.hiddenSuspended=!0,ie.ctx.suspend().catch(()=>{})):ie.hiddenSuspended&&(ie.hiddenSuspended=!1,ie.ctx.resume().catch(()=>vc())))})}async function ev(){if(!ie.inited){ie.inited=!0,ie.workletOk=await Promise.race([N_(ie.ctx),ca(2500).then(()=>!1)]),ie.ready=!0,id();try{ie.ambient=L_(ie.ctx,ie.buses.ambient),ie.ambient.setPerspective(ie.perspective),ie.ambient.update({})}catch{ie.ambient=null}as.onReady(),ie.musicWanted&&rd(ie.musicWanted,ie.musicFade),(async()=>{for(const i of["menu","garage","race","results"])await sd(i),await ca(250)})()}}function sd(i){return ie.musicBuf[i]?Promise.resolve(ie.musicBuf[i]):ie.musicJob[i]?ie.musicJob[i]:!td[i]||!Oh||!ie.ctx?Promise.resolve(null):(ie.musicJob[i]=j_(i,{ctxFactory:(e,t,n)=>new Oh(e,t,n),sampleRate:32e3}).then(e=>{const t=ie.ctx.createBuffer(2,e.length,e.sampleRate);return t.copyToChannel(e.channels[0],0),t.copyToChannel(e.channels[1],1),ie.musicBuf[i]=t,t}).catch(()=>(ie.musicJob[i]=null,null)),ie.musicJob[i])}async function rd(i,e){if(!ie.ready||ie.musicCur&&ie.musicCur.name===i)return;const t=await sd(i);if(!t||ie.musicWanted!==i||ie.musicCur&&ie.musicCur.name===i)return;const n=ie.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=t,r.loop=!0;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+Math.max(.05,e)),r.connect(a),a.connect(ie.buses.music),r.start(s);const o=ie.musicCur;ie.musicCur={name:i,src:r,g:a},o&&ad(o,e)}function ad(i,e){const t=ie.ctx.currentTime;try{i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(i.g.gain.value,t),i.g.gain.linearRampToValueAtTime(0,t+Math.max(.05,e)),i.src.stop(t+Math.max(.05,e)+.1)}catch{}}function Xt(i,...e){if(!ie.ready||ie.ctx.state!=="running")return 0;try{return P_[i](ie.ctx,ie.buses.sfx,ie.ctx.currentTime+.005,...e)||0}catch{return 0}}const Bh=()=>Math.random()*2-1,Ze={get supported(){return!!Os},get state(){return Os?ie.ctx?ie.ctx.state==="running"&&ie.ready?"running":ie.ctx.state==="running"?"starting":ie.ctx.state:"locked":"unsupported"},get ctx(){return ie.ctx},onStateChange(i){return ie.listeners.add(i),()=>ie.listeners.delete(i)},unlock(){if(!Os)return Promise.resolve(!1);if(ie.unlockP)return ie.unlockP;if(!ie.ctx){try{ie.ctx=new Os({latencyHint:"interactive"})}catch{try{ie.ctx=new Os}catch{return Promise.resolve(!1)}}try{yn.navigator&&yn.navigator.audioSession&&(yn.navigator.audioSession.type="playback")}catch{}$_(),J_()}Z_();let i;try{i=ie.ctx.state==="running"?Promise.resolve():ie.ctx.resume()}catch{i=Promise.resolve()}return ie.unlockP=(async()=>{try{await Promise.race([i,ca(1200)])}catch{}return ie.unlocked=ie.ctx.state==="running",ie.unlocked?await ev():vc(),nd(),ie.unlocked})().finally(()=>{ie.unlockP=null}),ie.unlockP},setVolumes(i={}){for(const e of Object.keys(ie.vol))typeof i[e]=="number"&&(ie.vol[e]=Rt(i[e],0,1));id()},setPerspective(i){ie.perspective=i,as.setPerspective(i),ie.ambient&&ie.ambient.setPerspective(i)},setListener(i,e,t){as.setListener(i,e,t)},setPaused(i){ie.paused=!!i,as.setPaused(ie.paused),ie.ambient&&ie.ambient.setMute(ie.paused),ie.buses&&ie.buses.musicDuck.gain.setTargetAtTime(ie.paused?.4:1,ie.ctx.currentTime,.12)},ui:{hover(){const i=performance.now();i-ie.lastHover<45||(ie.lastHover=i,Xt("hover",Bh()))},click(){Xt("click",Bh())},confirm(){Xt("confirm")},back(){Xt("back")},error(){Xt("error")},tab(){Xt("tab")},toggle(i=!0){Xt("toggle",!!i)},whoosh(){Xt("whoosh")},intro(){return Xt("intro")},countdown(i=3){Xt("countdown",i)},go(){Xt("go")},lap(){Xt("lap")},bestLap(){Xt("bestLap")},sponsor(){Xt("sponsor")},crash(i=.6){Xt("crash",Rt(i,0,1))}},music:{play(i,{fade:e=1.5}={}){ie.musicWanted=i,ie.musicFade=e,ie.ready&&rd(i,e)},stop(i=1){ie.musicWanted=null,ie.musicCur&&ie.ctx&&(ad(ie.musicCur,i),ie.musicCur=null)},get current(){return ie.musicCur?ie.musicCur.name:null},isReady(i){return!!ie.musicBuf[i]}},engine:{create(i){return as.create(i)},loadRecordings(i,e){return as.loadRecordings(i,e)}},ambient:{update(i){ie.ambient&&ie.ambient.update(i)}}},Nn=3e3,zh={grass:[.2,.34,.09,.3,0,1.6,9.5,.4,1],dirt:[.28,.2,.11,.26,0,1.5,9.5,.5,1],dust:[.62,.55,.42,.9,1.7,1.9,-.3,1.1,.5],smoke:[.86,.86,.88,.8,1.6,1.5,-.6,1.2,.42],blacksmoke:[.1,.1,.1,.7,1.4,2.2,-1.2,.9,.55],spark:[1,.72,.28,.07,0,.55,8,.2,1],debris:[.12,.12,.13,.14,0,1.6,9.5,.3,1]},tv=`
attribute vec3 aColor; attribute vec2 aSA; varying vec3 vC; varying float vA; uniform float uScale;
void main(){ vC = aColor; vA = aSA.y; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = clamp(aSA.x * uScale / max(0.5, -mv.z), 0.0, 220.0); gl_Position = projectionMatrix * mv; }`,nv=`
varying vec3 vC; varying float vA; uniform vec3 uLight;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d) * 4.0; if (r > 1.0) discard; float a = vA * (1.0 - r) * (1.0 - r * 0.5); gl_FragColor = vec4(vC * uLight, a); }`;class iv{constructor(e){this.pos=new Float32Array(Nn*3),this.col=new Float32Array(Nn*3),this.sa=new Float32Array(Nn*2),this.vel=new Float32Array(Nn*3),this.age=new Float32Array(Nn).fill(99),this.life=new Float32Array(Nn).fill(1),this.kind=new Uint8Array(Nn),this.size0=new Float32Array(Nn),this.head=0,this.names=Object.keys(zh),this.kidx={},this.names.forEach((s,r)=>{this.kidx[s]=r}),this.kdata=this.names.map(s=>zh[s]);const t=new Bt;t.setAttribute("position",new gt(this.pos,3).setUsage(Sa)),t.setAttribute("aColor",new gt(this.col,3).setUsage(Sa)),t.setAttribute("aSA",new gt(this.sa,2).setUsage(Sa)),this.uniforms={uScale:{value:700},uLight:{value:new D(1,1,1)}};const n=new Vn({vertexShader:tv,fragmentShader:nv,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0});this.points=new Cu(t,n),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=t,this.scene=e,this.live=0}setView(e,t){const n=t.domElement.height/(t.getPixelRatio,1);this.uniforms.uScale.value=n*.5/Math.tan(e.fov*Math.PI/360)}setLight(e){this.uniforms.uLight.value.setScalar(e)}emit(e,t,n,s,r,a,o,c=1,l=1){const h=this.kidx[e],u=this.kdata[h];for(let d=0;d<c;d++){const f=this.head;this.head=(this.head+1)%Nn;const g=f*3,_=Math.random(),m=Math.random(),p=Math.random();this.pos[g]=t+(_-.5)*.4*l,this.pos[g+1]=n+(m-.5)*.2,this.pos[g+2]=s+(p-.5)*.4*l,this.vel[g]=r+(Math.random()-.5)*3*l,this.vel[g+1]=a+(Math.random()-.3)*2.5*l,this.vel[g+2]=o+(Math.random()-.5)*3*l;const M=.8+Math.random()*.4;this.col[g]=u[0]*M,this.col[g+1]=u[1]*M,this.col[g+2]=u[2]*M,this.kind[f]=h,this.age[f]=0,this.life[f]=u[5]*(.7+Math.random()*.6),this.size0[f]=u[3]*(.7+Math.random()*.7),this.sa[f*2]=this.size0[f],this.sa[f*2+1]=u[8]}}update(e){let t=0;for(let n=0;n<Nn;n++){let s=this.age[n];if(s>=this.life[n]){this.sa[n*2+1]!==0&&(this.sa[n*2+1]=0,this.sa[n*2]=0);continue}t++,s+=e,this.age[n]=s;const r=this.kdata[this.kind[n]],a=n*3,o=s/this.life[n],c=Math.exp(-r[7]*e);this.vel[a]*=c,this.vel[a+2]*=c,this.vel[a+1]=this.vel[a+1]*(r[7]>.9?c:1)-r[6]*e,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.pos[a+1]<.04&&r[6]>1&&(this.pos[a+1]=.04,this.vel[a+1]*=-.25,this.vel[a]*=.6,this.vel[a+2]*=.6),this.sa[n*2]=this.size0[n]+r[4]*s,this.sa[n*2+1]=r[8]*(o<.12?o/.12:1)*(1-o)*(r[4]>0,1)}this.live=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSA.needsUpdate=!0}clear(){this.age.fill(99),this.sa.fill(0)}dispose(){this.scene.remove(this.points),this.geo.dispose(),this.points.material.dispose()}}const sv=new D(0,1,0),rv=new D(0,0,1),av=new D(1,0,0),Vh=new D(1,1,1),po=new D,Hh=new bt,Gh=new bt,Wh=new bt,Gr=new bt,Bs=1/120,qh=["J. Walker","M. Ortega","D. Hale","T. Brandt","R. Okafor","S. Lindgren","C. Duval","A. Reyes","B. Kowalski","L. Moreau","H. Tanaka","P. Novak","E. Castillo","G. Fischer","K. Mbeki","V. Santos","N. Ivanov","F. Dunmore","O. Haugen","Z. Marlow","W. Prescott","I. Barros","Q. Ellison","U. Nakamura","Y. Delacroix","X. Whitaker","A. Strand","R. Quill","D. Pruitt","M. Sato","L. Voss","T. Greer"],Xh=[["#c8102e","#f4f4f4"],["#0b5fa5","#f2c200"],["#1c1c1c","#e0e0e0"],["#f2c200","#1c1c1c"],["#2c8a3d","#f4f4f4"],["#6a2c91","#f4c542"],["#e8661a","#1c1c1c"],["#e9e9e9","#c8102e"],["#0f7f8c","#f4f4f4"],["#8a1c1c","#d9b25c"],["#14315c","#e34a33"],["#3f4a52","#9ae37c"]],Qh=["none","stripe","split","chevron","fade"],Wr={quality:"medium",units:"mph",camera:0,assists:1,volumes:{master:.8,music:.55,sfx:.8,engine:.9,ambient:.7},touch:"auto"};function ov(){try{const i=JSON.parse(localStorage.getItem("rtta.settings")||"{}");return{...Wr,...i,volumes:{...Wr.volumes,...i.volumes||{}}}}catch{return{...Wr,volumes:{...Wr.volumes}}}}class cv{constructor(){this.settings=ov(),this.career=A_,this.input=R_(),this.ui=null,this.handlers={},this.mode="idle",this.paused=!1,this.race=null,this.vis=[],this.cfg=null,this.acc=0,this.shake=0,this.orbit={az:.6,el:.16,dist:7.2,auto:!0},this.garageOn=!1,this.showcase=null,this.showId=null,this.camMode=this.settings.camera|0,this.camPos=new D,this.camTgt=new D,this.camInit=!1,this.fov=62,this.t=0,this.fps=60,this.garage={enter:()=>{this.garageOn=!0,this.orbit.auto=!1,this.orbit.az=.7,this.orbit.dist=6.6,this.refreshShowcase()},exit:()=>{this.garageOn=!1,this.orbit.auto=!0,this.orbit.dist=7.4},setLivery:e=>{const t=this.career.state.livery,{slots:n,...s}=e;Object.assign(t,s),n&&(t.slots={...t.slots,...n}),this.career.save(),this.showcase&&(this.showcase.setLivery(t),this.showcase.flush())},orbit:(e,t)=>{this.orbit.az-=e*.008,this.orbit.el=De(this.orbit.el+t*.005,.02,.9)},zoom:e=>{this.orbit.dist=De(this.orbit.dist+e,4.2,12)}},this.input.cycleCamera=()=>this.cycleCamera()}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,...t){for(const n of this.handlers[e]||[])try{n(...t)}catch(s){console.error(s)}}saveSettings(){try{localStorage.setItem("rtta.settings",JSON.stringify(this.settings))}catch{}try{Ze.setVolumes(this.settings.volumes)}catch{}}toast(e,t="info"){this.ui&&this.ui.toast(e,t)}async init(e,t=()=>{}){const n=document.createElement("canvas");n.id="gl",e.appendChild(n),t(.04,"Starting renderer"),this.world=new _9(n,{quality:this.settings.quality}),this.track=new y9,await new Promise(l=>setTimeout(l,0)),t(.12,"Building the speedway"),this.trackRoot=S9(this.track,this.world.q,l=>t(.12+l*.3,"Building the speedway")),this.world.scene.add(this.trackRoot),this.world.setTime("day","clear"),this.fx=new iv(this.world.scene);const s=this.track.d,r=[],a=Math.max(1,Math.floor(s.px.length/120));for(let l=0;l<s.px.length;l+=a)r.push([s.px[l],s.pz[l]]);this.minimapPts=r;const o=["e87","e05","e15"];let c=0;for(const l of o)t(.45+c++*.15,"Loading cars"),await Eh(l);t(.92,"Preparing garage"),this.refreshShowcase(),this.world.render(),t(1,"Ready"),this.running=!0,this.last=performance.now(),requestAnimationFrame(l=>this.frame(l)),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.saveSettings(),this.emit("ready")}place(e,t,n,s,r,a){const o=a.bank||0,c=a.rx||0,l=a.rz||0,h=new D(-c*Math.sin(o),Math.cos(o),-l*Math.sin(o)),u=new D(Math.sin(r),0,Math.cos(r));u.addScaledVector(h,-u.dot(h)).normalize();const d=new D().crossVectors(h,u).normalize();e.matrixAutoUpdate=!1,e.matrix.makeBasis(d,h,u),e.matrix.setPosition(t,n,s),e.matrixWorldNeedsUpdate=!0}placeSim(e,t,n=1,s=null){if(t.tumble){t.tumble.pose(po,Gr),e.matrixAutoUpdate=!1,e.matrix.compose(po,Gr,Vh),e.matrixWorldNeedsUpdate=!0,s&&(s.x=t.x,s.z=t.z,s.psi=t.psi);return}const r=t.px===void 0?1:n,a=Yn(t.px===void 0?t.x:t.px,t.x,r),o=Yn(t.pz===void 0?t.z:t.pz,t.z,r),c=(t.ppsi===void 0?t.psi:t.ppsi)+Jr(t.psi-(t.ppsi===void 0?t.psi:t.ppsi))*r,l=Yn(t.pgh===void 0?t.gh:t.pgh,t.gh,r),h=Yn(t.pgp===void 0?t.gp:t.pgp,t.gp,r),u=Yn(t.pgr===void 0?t.gr:t.pgr,t.gr,r);Hh.setFromAxisAngle(sv,c),Gh.setFromAxisAngle(rv,u),Wh.setFromAxisAngle(av,-h),Gr.copy(Hh).multiply(Gh).multiply(Wh),e.matrixAutoUpdate=!1,e.matrix.compose(po.set(a,l,o),Gr,Vh),e.matrixWorldNeedsUpdate=!0,s&&(s.x=a,s.z=o,s.psi=c)}carIdForSeries(e){return Th[e]||Th[this.career.series.id]||"e05"}refreshShowcase(){const e=this.carIdForSeries(this.career.series.id);if(!this.showcase||this.showId!==e){this.showcase&&(this.world.scene.remove(this.showcase.group),this.showcase.dispose()),this.showcase=lo({car:e,atlas:this.settings.quality==="low"?"med":"high",livery:this.career.state.livery}),this.showId=e,this.world.scene.add(this.showcase.group);const t=this.track.point(120,0,{}),n=this.track.at(120);this.showPt=t,this.place(this.showcase.group,t.x,t.y,t.z,t.heading,n),this.showcase.setLights(!1)}else this.showcase.setLivery(this.career.state.livery),this.showcase.flush();this.showcase.group.visible=this.mode!=="race"&&this.mode!=="results"}randomLivery(e,t){const[n,s]=Xh[Math.floor(e()*Xh.length)];let r;do r=String(1+Math.floor(e()*98));while(t.has(r));t.add(r);const a={},o=ma.filter(c=>c.tier<=2);for(const c of["hood","roof","door","quarter","trunk","bumper"])a[c]=e()<.7?o[Math.floor(e()*o.length)].id:null;return{...oa,paint:n,accent:s,trim:"#14161a",pattern:Qh[Math.floor(e()*Qh.length)],finish:"gloss",number:r,numberColor:e()<.5?"#ffffff":"#111111",numberStyle:"italic",slots:a}}clearRace(){for(const e of this.vis)if(this.world.scene.remove(e.car.group),e.car.dispose(),e.voice)try{e.voice.dispose()}catch{}this.vis=[],this.race=null,this.fx&&this.fx.clear(),this.ghostVis&&(this.world.scene.remove(this.ghostVis.group),this.ghostVis.dispose(),this.ghostVis=null)}async startRace(e={}){return this.launch("race",e)}async startHotLap(e={}){return this.launch("hotlap",e)}async launch(e,t){try{this.clearRace(),this.cfg={...t,kind:e},this.paused=!1,this.input.clear();const n=t.series||this.career.series.id,s=this.carIdForSeries(n);await Eh(s);const r=g_(s,v_(s)),a=e==="hotlap",o=a?1:De(t.field||12,2,this.world.q.maxCars),c=Wc(Date.now()&65535),l=new Set([String(this.career.state.livery.number)]),h=[],u=this.career.state.livery,d=new Ch(0,"You",u.number,u,!0,r,s);h.push(d);for(let g=1;g<o;g++){const _=this.randomLivery(c,l),m=new Ch(g,qh[(g-1)%qh.length],_.number,_,!1,r,s);m.driver=new ju(this.track,t.ai||"pro",g+1,(c()-.5)*6),h.push(m)}this.race=new S_(this.track,h,{laps:a?999:t.laps||3,mode:a?"hotlap":"race",onEvent:(g,..._)=>this.onRaceEvent(g,..._)}),this.world.setTime(t.time||"day",t.weather||"clear"),a?this.race.rollingStart(42,-80):this.race.gridUp(Math.min(o-1,Math.floor(o*.55)));const f=o<=16?"med":"low";for(const g of h){const _=lo({car:s,atlas:g.isPlayer?this.settings.quality==="low"?"med":"high":f,livery:g.livery});this.world.scene.add(_.group),this.vis.push({e:g,car:_,spin:0,voice:null,roll:0,pitch:0})}try{const g=d.gridPos||1,_=h.filter(m=>!m.isPlayer).sort((m,p)=>Math.abs((m.gridPos||0)-g)-Math.abs((p.gridPos||0)-g)).slice(0,3);for(const m of this.vis)(m.e.isPlayer||_.includes(m.e))&&(m.voice=Ze.engine.create({player:m.e.isPlayer,kind:"v8",era:m.e.carId||s,seed:m.e.id+3}));Ze.setPerspective(this.camMode===1?"cockpit":"chase"),Ze.music.play("race",{fade:1.5})}catch(g){console.warn("audio",g)}this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=a?this.loadGhost():null,this.ghostVis=null,this.ghostHint=void 0,a&&t.ghost&&(this.ghostVis=this.makeGhostCar(s)),this.showcase&&(this.showcase.group.visible=!1),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1}catch(n){console.error(n),this.toast("Could not start: "+(n&&n.message||n),"warn")}}onRaceEvent(e,t,n,s){const r=this.race&&this.race.player;try{e==="count"?Ze.ui.countdown(t):e==="go"?(Ze.ui.go(),this.toast("Green flag","good")):e==="lap"&&t===r?(Ze.ui.lap(),this.emit("lapComplete",t.lastLap),this.race.mode==="hotlap"&&this.hotLapCrossed(t)):e==="bestlap"&&t===r?(Ze.ui.bestLap(),this.toast("Best lap","good"),this.race.mode==="hotlap"&&t.bestLap&&(!this.career.state.bestLap||t.bestLap<this.career.state.bestLap)&&(this.career.state.bestLap=t.bestLap,this.career.save())):e==="crash"&&(t===r||n===r)?(Ze.ui.crash(De(s||.4,0,1)),this.shake=Math.max(this.shake,De(s||.4,0,1))):e==="wall"&&t===r?(Ze.ui.crash(.5),this.shake=Math.max(this.shake,.5)):e==="flip"?t===r?(this.toast(n==="lift"?"Airborne!":"You're rolling!","warn"),Ze.ui.crash(1),this.shake=Math.max(this.shake,1)):this.nearPlayer(t,90)&&Ze.ui.crash(.7):e==="tumbleHit"?this.tumbleHit(t,n):e==="wrecked"?t===r?this.toast("Wrecked. Recovering to the track...","warn"):this.nearPlayer(t,200)&&this.t-(this._wt||-9)>3&&(this._wt=this.t,this.toast(`#${t.number} ${t.name} is out`,"info")):e==="recovered"&&t===r?(this.toast("Back on track","good"),this.camInit=!1):e==="finish"&&t===r?(this.flag="checker",this.emit("flag","checker")):e==="done"&&this.finishRace()}catch(a){console.warn(a)}}nearPlayer(e,t){const n=this.race&&this.race.player;return!!n&&Math.hypot(e.sim.x-n.sim.x,e.sim.z-n.sim.z)<t}tumbleHit(e,t){const n=this.fx,s=this.race.player;if(!(e===s||this.nearPlayer(e,90)))return;const a=e.sim,o=De(t.hit,0,1);if(n){const c=a.wvx*.35,l=a.wvz*.35;if(t.soft){const h=3+Math.floor(o*14);for(let u=0;u<h;u++)n.emit(Math.random()<.6?"grass":"dirt",t.x,.2,t.z,c,3+Math.random()*6*(.4+o),l,1,1.4);n.emit("dust",t.x,.3,t.z,c*.3,1,l*.3,1+Math.floor(o*2),1.5)}else{const h=2+Math.floor(o*16);for(let u=0;u<h;u++)n.emit("spark",t.x,Math.max(.1,t.y),t.z,c,1+Math.random()*3,l,1,1.8);o>.35&&n.emit("debris",t.x,Math.max(.2,t.y),t.z,c,3+Math.random()*4,l,2,1.5),o>.2&&n.emit("smoke",t.x,Math.max(.1,t.y),t.z,c*.2,.8,l*.2,1,1)}}(e===s||this.nearPlayer(e,50))&&(o>.25&&this.t-(this._tt||0)>.18&&(this._tt=this.t,Ze.ui.crash(De(o*(e===s?1:.6),.1,1))),e===s&&(this.shake=Math.max(this.shake,o*.8)))}finishRace(){if(this.finishing)return;this.finishing=!0;const e=this.race,t=e.player,n=this.cfg.kind==="hotlap",s=(o,c)=>({pos:c+1,name:o.isPlayer?"You":o.name,me:o.isPlayer,gap:c===0?"":o.finished&&e.sorted[0].finished?`+${Math.max(0,o.finishTime-e.sorted[0].finishTime).toFixed(1)}s`:`+${Math.max(1,Math.round((e.sorted[0].prog-o.prog)/e.track.length))} lap`}),r=e.sorted.slice(0,10).map(s);t.pos>10&&r.push(s(t,t.pos-1));let a={mode:n?"hotlap":"race",pos:t.pos,field:e.entries.length,laps:this.cfg.laps||e.laps,bestLap:t.bestLap,standings:r};!n&&this.cfg.series&&(a.career=this.career.recordResult({series:this.cfg.series,pos:t.pos,field:e.entries.length,laps:e.laps,bestLap:t.bestLap,points:0})),this.emit("raceFinished",a),this.endRace(),this.mode="results";try{Ze.music.play("results",{fade:1})}catch{}this.ui&&this.ui.show("results",a)}endRace(){for(const e of this.vis)if(e.voice){try{e.voice.dispose()}catch{}e.voice=null}}afterStep(){const e=this.race;if(e.mode==="hotlap"&&this.recOK&&e.t-this.recLast>=.05){this.recLast=e.t;const t=e.player.sim;this.rec.push(+t.x.toFixed(2),+t.z.toFixed(2),+t.psi.toFixed(3))}}loadGhost(){try{const e=JSON.parse(localStorage.getItem("rtta.ghost.v1")||"null");return e&&e.pts&&e.pts.length>60?e:null}catch{return null}}hotLapCrossed(e){const t=e.lastLap;if(this.recOK&&t&&this.rec.length>60&&(!this.ghostData||t<this.ghostData.lap)){this.ghostData={lap:+t.toFixed(3),pts:this.rec.slice()};try{localStorage.setItem("rtta.ghost.v1",JSON.stringify(this.ghostData))}catch{}}this.rec=[],this.recOK=!0,this.lapT0=this.race.t,this.recLast=this.race.t}updateGhost(){const e=this.ghostVis;if(!e)return;const t=this.race,n=this.ghostData;if(!n||!this.recOK||t.mode!=="hotlap"){e.group.visible=!1;return}const s=t.t-this.lapT0,r=s/.05,a=Math.floor(r),o=n.pts.length/3;if(a<0||a>=o-1||s>n.lap+.5){e.group.visible=!1;return}const c=r-a,l=n.pts,h=l[a*3]+(l[a*3+3]-l[a*3])*c,u=l[a*3+1]+(l[a*3+4]-l[a*3+1])*c;let d=l[a*3+2],f=l[a*3+5];for(;f-d>Math.PI;)f-=2*Math.PI;for(;f-d<-Math.PI;)f+=2*Math.PI;const g=this.ghostQ||(this.ghostQ={});this.track.query(h,u,this.ghostHint,g),this.ghostHint=g.i,this.place(e.group,h,g.surface==="grass"?0:g.y,u,d+(f-d)*c,g.surface==="grass"?{bank:0,rx:0,rz:0}:g),e.spin+=(n.lap>0?70:0)*.016/e.dim.wheelR,e.update({steer:0,spin:e.spin,roll:0,pitch:0}),e.group.visible=!0}makeGhostCar(e){const t=lo({car:e,atlas:"low",livery:{...oa,paint:"#9fe6ff",accent:"#ffffff",trim:"#9fe6ff",pattern:"none",number:"",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}}});return t.group.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.38,n.material.depthWrite=!1)}),t.spin=0,this.world.scene.add(t.group),t}finishHotLap(){const e=this.race,t=e&&e.player;if(!t||this.finishing)return;this.finishing=!0;const n=t.bestLap,s=this.career.state.bestLap,r=!!n&&(!s||n<=s);r&&(this.career.state.bestLap=n,this.career.save());const a={mode:"hotlap",bestLap:n,newBest:r,standings:[]};this.emit("raceFinished",a),this.endRace(),this.mode="results",this.ui&&this.ui.show("results",a)}pause(){if(!(this.mode!=="race"||this.paused)){this.paused=!0;try{Ze.setPaused(!0)}catch{}this.ui&&this.ui.show("pause")}}resume(){this.paused=!1,this.last=performance.now(),this.acc=0,this.input.clear();try{Ze.setPaused(!1)}catch{}}restart(){const e=this.cfg;if(e){this.paused=!1;try{Ze.setPaused(!1)}catch{}return this.launch(e.kind,e)}}exitToMenu(){this.paused=!1;try{Ze.setPaused(!1),Ze.music.play("menu",{fade:1})}catch{}this.clearRace(),this.mode="idle",this.camInit=!1,this.refreshShowcase(),this.world.setTime("day","clear"),this.ui&&this.ui.show("menu")}cycleCamera(){this.camMode=(this.camMode+1)%3,this.settings.camera=this.camMode,this.camInit=!1;try{Ze.setPerspective(this.camMode===1?"cockpit":this.camMode===2?"broadcast":"chase")}catch{}}frame(e){requestAnimationFrame(n=>this.frame(n));let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.fps=Yn(this.fps,1/Math.max(t,.001),.05),this.t+=t,this.mode==="race"&&this.race?(this.paused||this.runRace(t),this.renderRace(t)):this.renderShowcase(t),this.world.render()}runRace(e){const t=this.race,n=t.player;if(this.input.consume("pause")){this.pause();return}if(this.input.consume("camera")&&this.cycleCamera(),this.input.consume("reset")&&n&&!n.finished&&!n.sim.tumble){const r=n.q,a=this.track.point(r.s+2,De(r.u,-8,8),{});n.sim.place(a.x,a.z,a.heading,22),n.sim.w=0,n.sim.vy=0}this.acc+=e;let s=0;for(;this.acc>=Bs&&s<10;){const r=this.input.read(Bs,n.sim.speed);if(r.assist=this.settings.assists===0?0:1,n.controls=r,t.update(Bs),this.afterStep(),this.acc-=Bs,s++,this.mode!=="race")return}s>=10&&(this.acc=0),this.pushHud(),this.updateAudio(e)}pushHud(){const e=this.race,t=e.player,n=t.sim;if(!this.ui)return;const s=e.phase==="grid"?e.countdown>3?"Get ready":e.countdown>0?String(Math.ceil(e.countdown)):"GO":null;let r=this.flag||e.flag||null;t.finished&&(r="checker"),this.ui.hud.update({speedMph:n.speed*2.23694,speedKph:n.speed*3.6,rpm:n.rpm,rpmMax:n.C.redline,gear:n.gear,throttle:n.throttle,brake:n.brake,steer:t.controls.steer||0,lap:De(t.lap+1,1,e.mode==="hotlap"?999:e.laps),laps:e.mode==="hotlap"?0:e.laps,pos:t.pos||1,field:e.entries.length,lastLap:t.lastLap,bestLap:t.bestLap,curLap:Math.max(0,e.t-t.lapStart),gapAhead:t.gapAhead||0,gapBehind:t.gapBehind||0,drafting:n.draft>.15,damage:n.damage,flag:r,mode:e.mode,standings:this.hudStandings(e,t),minimap:{pts:this.minimapPts,cars:e.entries.filter(a=>!a.sim.hidden).map(a=>({x:a.sim.x,z:a.sim.z,me:a.isPlayer}))},message:s})}hudStandings(e,t){const n=r=>({pos:r.pos,name:r.isPlayer?"You":r.name,gap:r.pos===1?"":`+${(r.gapLead||0).toFixed(1)}`,me:r.isPlayer,color:r.livery&&r.livery.paint||"#888"}),s=e.sorted.slice(0,7).map(n);return t.pos>7&&s.push(n(t)),s}updateAudio(e){const t=this.world.camera,n=new D;t.getWorldDirection(n);try{const s=this.vis.find(l=>l.e.isPlayer),r=s.e.sim,a=Math.sin(r.psi)*r.vx,o=Math.cos(r.psi)*r.vx;Ze.setListener({x:t.position.x,y:t.position.y,z:t.position.z},{x:a,y:0,z:o},{x:n.x,y:n.y,z:n.z});for(const l of this.vis)if(l.voice){const h=l.e.sim,u=Math.sin(h.psi),d=Math.cos(h.psi);l.voice.update({rpm:h.rpm,throttle01:h.throttle,load01:De(h.nLoad*.5+h.throttle*.5,0,1),pos:{x:h.x,y:1,z:h.z},vel:{x:u*h.vx,y:0,z:d*h.vx}})}const c=this.race.entries.some(l=>!l.isPlayer&&Math.hypot(l.sim.x-r.x,l.sim.z-r.z)<40);Ze.ambient.update({speed:r.speed,slip01:r.skid||0,offTrack:s.e.q.surface==="grass"||s.e.q.surface==="apron",drafting01:De(r.draft||0,0,1),crowd01:c?.5:.7,wall01:s.e.q.surface==="wall"?1:0})}catch(s){this._ae||(this._ae=1,console.warn("audio update",s))}}renderRace(e){this.race;const t=this.fx;for(const s of this.vis){const r=s.e,a=r.sim;if(a.hidden){if(s.car.group.visible=!1,s.voice){try{s.voice.dispose()}catch{}s.voice=null}continue}s.pose=s.pose||{x:0,z:0,psi:0},this.placeSim(s.car.group,a,De(this.acc/Bs,0,1),s.pose),a.tumble?(s.roll=0,s.pitch=0,s.car.update({steer:0,spin:s.spin,roll:0,pitch:0}),s.spin+=Math.hypot(a.vx,a.vy)/s.car.dim.wheelR*e*.5):(s.spin+=a.vx/s.car.dim.wheelR*e,s.roll=Yn(s.roll,-(a.roll||0),.3),s.pitch=Yn(s.pitch,a.pitch||0,.3),s.car.update({steer:a.steer||0,spin:s.spin,roll:s.roll,pitch:s.pitch})),s.car.setBrake(a.brake),s.car.setLights(this.world.timeKey==="night"||this.world.timeKey==="sunset"),s.car.setDirt(a.dirt||0),a.dentVer!==s.dentVer&&(s.dentT||0)<=this.t&&(s.dentVer=a.dentVer,s.dentT=this.t+.3,s.car.applyDents(a.dents,a.C.cgH)),this.emitFx(s,e)}t&&(t.setView(this.world.camera,this.world.renderer),t.setLight(this.world.timeKey==="night"?.35:this.world.timeKey==="sunset"?.8:1),t.update(e)),this.updateGhost();const n=this.vis.find(s=>s.e.isPlayer);this.updateCamera(n,e),this.input.consume("look")}emitFx(e,t){const n=e.e.sim,s=this.fx;if(!s||this.paused)return;const r=this.world.camera.position,a=n.x-r.x,o=n.z-r.z;if(a*a+o*o>25600)return;const c=e.fxA||(e.fxA={g:0,d:0,s:0,k:0,b:0}),l=n.C,h=l.trackHalf||.8,u=Math.sin(n.psi),d=Math.cos(n.psi),f=n.speed,g=n.wvx,_=n.wvz,m=(y,v)=>{const T=y?l.a:-l.b,w=v?h:-h;return[n.x+u*T+d*w,n.z+d*T-u*w]};if(n.tumble){const y=n.tumble;if(!y.done&&n.fracGrass>.01||!y.done&&e.e.q.surface==="grass")for(c.d+=t*55*Math.min(1,f/25);c.d>=1;)c.d-=1,s.emit("dust",n.x,.3,n.z,g*.15,1.2,_*.15,1,1.5);return}const p=n.fracGrass;if(p>.2&&f>5){for(c.g+=t*(14+f*1.1)*p;c.g>=1;){c.g-=1;const[y,v]=m(Math.random()<.3,Math.random()<.5);s.emit(Math.random()<.55?"grass":"dirt",y,.15,v,-g*.22,1.8+Math.random()*3.5,-_*.22,1,1)}for(c.d+=t*(22+f*1.3)*p;c.d>=1;){c.d-=1;const[y,v]=m(!1,Math.random()<.5);s.emit("dust",y,.2,v,-g*.08,.7,-_*.08,1,1.2)}}if(n.skid>.3&&n.fracTrack>.4)for(c.s+=t*40*n.skid;c.s>=1;){c.s-=1;const[y,v]=m(!1,Math.random()<.5);s.emit("smoke",y,.15,v,-g*.04,.5,-_*.04,1,.6)}if(n.scrape>.4&&f>10){const y=e.e.q,v=y.u>0?1:-1;for(c.k+=t*110*n.scrape;c.k>=1;){c.k-=1;const T=n.x+(y.rx||0)*v*1,w=n.z+(y.rz||0)*v*1;s.emit("spark",T,.4+Math.random()*.4,w,g*.5,1+Math.random()*2.5,_*.5,1,1.6)}}const M=Math.max(n.damage.front,n.damage.left*.7,n.damage.right*.7);if(M>.55&&f>3)for(c.b+=t*(6+M*22);c.b>=1;)c.b-=1,s.emit("blacksmoke",n.x+u*(l.a+.4),.95,n.z+d*(l.a+.4),g*.5,1.2,_*.5,1,.6)}updateCamera(e,t){const n=this.world.camera,s=e.e.sim,r=e.pose||s,a=Object.create(s,{x:{value:r.x},z:{value:r.z},psi:{value:r.psi}}),o=e.car.group,c=e.car.dim,l=a.tumble,h=l&&this.camMode===1?0:this.camMode;if(this.camInit||(this.camYaw=a.psi),l){const v=l,w=Math.hypot(v.v.x,v.v.z)>4?Math.atan2(v.v.x,v.v.z):this.camYaw;this.camYaw+=Jr(w-this.camYaw)*(1-Math.exp(-t*2.5))}else this.camYaw+=Jr(a.psi-this.camYaw)*(1-Math.exp(-t*(h===2?5:10)));const u=h===1?a.psi:this.camYaw,d=new D(Math.sin(u),0,Math.cos(u)),f=new D(d.z,0,-d.x),g=new D(a.x,l?Math.max(0,a.gh):o.matrix.elements[13],a.z),_=h;let m=new D,p=new D,M=62;const y=a.speed;if(M=62+De(y/90,0,1)*14,_===0){const v=8.2+De(y/80,0,1)*1.2;m.copy(g).addScaledVector(d,-v).addScaledVector(f,-a.vy*.05).add(new D(0,2.5,0)),p.copy(g).addScaledVector(d,12).add(new D(0,1,0))}else _===1?(m.copy(g).addScaledVector(d,c.front*.05+.1).addScaledVector(f,.34).add(new D(0,1.05,0)),p.copy(m).addScaledVector(d,30).addScaledVector(f,(a.steer||0)*-4*0+0).add(new D(0,-.3,0)),M=74+De(y/90,0,1)*8):(m.copy(g).addScaledVector(d,-13).add(new D(0,5.2,0)),p.copy(g).addScaledVector(d,8).add(new D(0,.8,0)),M=52+De(y/90,0,1)*8);this.camInit||(this.camPos.copy(m),this.camTgt.copy(p),this.camInit=!0),this.camPos.copy(m),this.camTgt.copy(p),n.position.copy(this.camPos),this.shake>.01&&(n.position.x+=(Math.random()-.5)*this.shake*.35,n.position.y+=(Math.random()-.5)*this.shake*.35,this.shake*=Math.exp(-t*5)),n.lookAt(this.camTgt),Math.abs(n.fov-M)>.05&&(n.fov=Yn(n.fov,M,.08),n.updateProjectionMatrix()),this.world.followSun(g),e.car.group&&(e.car.group.visible=!0)}renderShowcase(e){if(!this.showcase||!this.showPt)return;const t=this.orbit;t.auto&&(t.az+=e*.18);const n=this.showPt,s=this.world.camera,r=n.x,a=n.y+.6,o=n.z,c=t.dist;s.position.set(r+Math.sin(t.az)*Math.cos(t.el)*c,a+Math.sin(t.el)*c+.3,o+Math.cos(t.az)*Math.cos(t.el)*c),s.lookAt(r,a,o),Math.abs(s.fov-38)>.05&&(s.fov=38,s.updateProjectionMatrix()),this.world.followSun(n)}}const ya=new cv;function L(i,e,...t){const n=document.createElement(i);if(e)for(const r of Object.keys(e)){const a=e[r];if(!(a==null||a===!1))if(r==="class")n.className=a;else if(r==="style"&&typeof a=="object")for(const o of Object.keys(a))o.startsWith("--")?n.style.setProperty(o,a[o]):n.style[o]=a[o];else r==="dataset"?Object.assign(n.dataset,a):r.startsWith("on")&&typeof a=="function"?n.addEventListener(r.slice(2).toLowerCase(),a):r==="html"?n.innerHTML=a:a===!0?n.setAttribute(r,""):n.setAttribute(r,a)}const s=r=>{r==null||r===!1||(Array.isArray(r)?r.forEach(s):n.append(r instanceof Node?r:document.createTextNode(String(r))))};return t.forEach(s),n}const zs=(i,e=document)=>e.querySelector(i),lv=(i,e=document)=>Array.from(e.querySelectorAll(i)),hv=(i,e,t)=>Math.min(t,Math.max(e,i)),Gt=i=>Math.round(i).toLocaleString("en-US");function ki(i){if(i==null||!isFinite(i)||i<=0)return"--:--.---";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function Kh(i){if(i==null||!isFinite(i))return"--";const e=Math.abs(i).toFixed(1);return e==="0.0"?"0.0":(i>=0?"+":"-")+e}const od=i=>{const e=["th","st","nd","rd"],t=i%100;return i+(e[(t-20)%10]||e[t]||e[0])},qc=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,uv=i=>new Promise(e=>setTimeout(e,i)),Dt=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${i}</svg>`,dv={home:Dt('<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'),trophy:Dt('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a2 2 0 0 0 2 4"/><path d="M16 6h3a2 2 0 0 1-2 4"/><path d="M12 13v4"/><path d="M8 20h8"/>'),flag:Dt('<path d="M5 21V4"/><path d="M5 5h13l-2 4 2 4H5"/>'),stopwatch:Dt('<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'),car:Dt('<path d="M3 15l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v3H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),globe:Dt('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>'),gear:Dt('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),pause:Dt('<path d="M8 5v14M16 5v14"/>'),play:Dt('<path d="M7 4l13 8-13 8z"/>'),camera:Dt('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>'),lock:Dt('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),check:Dt('<path d="M5 12l4.5 4.5L19 7"/>'),back:Dt('<path d="M15 5l-7 7 7 7"/>'),chevron:Dt('<path d="M9 5l7 7-7 7"/>'),coin:Dt('<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),star:Dt('<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'),handshake:Dt('<path d="M3 12l4-4 4 2 3-2 4 3 3-1"/><path d="M7 8v7l5 4 7-5"/>'),fullscreen:Dt('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>')},nn=(i,e="ico")=>{const t=document.createElement("span");return t.className=e,t.innerHTML=dv[i]||"",t},fv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 200" width="604" height="200" role="img" aria-label="Road to the Americas"><g class="mk">
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
`;function Ot(i,...e){try{const t=Ze&&Ze.ui&&Ze.ui[i];typeof t=="function"&&t.apply(Ze.ui,e)}catch{}}function pv(i){try{Ze&&Ze.setVolumes&&Ze.setVolumes(i)}catch{}}function mv(i,e){try{Ze&&Ze.music&&Ze.music.play(i,e)}catch{}}function gv(){try{return Promise.resolve(Ze&&Ze.unlock&&Ze.unlock()).catch(()=>{})}catch{return Promise.resolve()}}const _v='button:not([disabled]), a[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',Yh="button, a[href], input, select, label.sw, [role=button]",vv=i=>i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden",mo=i=>i?lv(_v,i).filter(vv):[];function yv(i,{getScope:e,onBack:t,hudActive:n,onHudPause:s}){let r=null;i.addEventListener("click",f=>{const g=f.target.closest(Yh);if(!g)return;if(g.disabled||g.getAttribute("aria-disabled")==="true"){Ot("error");return}const _=g.dataset.snd||(g.closest("[data-snd]")||{}).dataset?.snd;if(_!=="none"){if(_==="toggle"){Ot("toggle",g.getAttribute("aria-checked")==="true");return}if(_==="back"){Ot("back");return}if(_==="confirm"||g.classList.contains("btn-primary")){Ot("confirm");return}if(g.classList.contains("nav-item")||g.classList.contains("tab")){Ot("tab");return}Ot("click")}},!1),i.addEventListener("pointerover",f=>{if(f.pointerType&&f.pointerType!=="mouse")return;const g=f.target.closest&&f.target.closest(Yh);if(!g||g===r){g||(r=null);return}r=g,!g.disabled&&g.getAttribute("aria-disabled")!=="true"&&Ot("hover")}),i.addEventListener("focusin",f=>{f.target.matches&&f.target.matches(":focus-visible")&&Ot("hover")});let a=0;i.addEventListener("input",f=>{if(f.target.type==="range"){const g=performance.now();g-a>70&&(a=g,Ot("hover"))}});function o(f){const g=e(),_=mo(g);if(!_.length)return;const m=document.activeElement&&g.contains(document.activeElement)?document.activeElement:null;if(!m){_[0].focus({preventScroll:!1});return}const p=m.getBoundingClientRect(),M=p.left+p.width/2,y=p.top+p.height/2;let v=null,T=1/0;for(const w of _){if(w===m)continue;const E=w.getBoundingClientRect(),C=E.left+E.width/2-M,x=E.top+E.height/2-y;let S,P;if(f==="right"?(S=C,P=Math.abs(x)):f==="left"?(S=-C,P=Math.abs(x)):f==="down"?(S=x,P=Math.abs(C)):(S=-x,P=Math.abs(C)),S<=1)continue;const F=S+P*2.2;F<T&&(T=F,v=w)}v&&(v.focus(),v.scrollIntoView({block:"nearest",inline:"nearest"}))}window.addEventListener("keydown",f=>{if(f.altKey||f.ctrlKey||f.metaKey)return;if(n()){(f.code==="Escape"||f.code==="KeyP")&&(f.preventDefault(),f.stopPropagation(),f.repeat||s());return}const g=e();if(!g||(f.stopPropagation(),f.defaultPrevented))return;if(f.key==="Tab"&&!g.classList.contains("shell")){const y=mo(g);if(!y.length)return;const v=y[0],T=y[y.length-1],w=document.activeElement;g.contains(w)?f.shiftKey&&w===v?(f.preventDefault(),T.focus()):!f.shiftKey&&w===T&&(f.preventDefault(),v.focus()):(f.preventDefault(),v.focus());return}const _=document.activeElement,m=_&&_.type==="range",p=_&&_.tagName==="INPUT"&&!["range","color","checkbox"].includes(_.type),M={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};if(M[f.key]){if(m&&(f.key==="ArrowLeft"||f.key==="ArrowRight")||p)return;f.preventDefault(),o(M[f.key])}else(f.key==="Escape"||f.key==="Backspace"&&!p)&&(f.preventDefault(),t())},!0);const c={};let l=0;const h=230;function u(){l=requestAnimationFrame(u);const f=navigator.getGamepads?navigator.getGamepads():[],g=performance.now();for(const _ of f){if(!_)continue;const m=_.axes[0]||0,p=_.axes[1]||0,M={up:_.buttons[12]?.pressed||p<-.6,down:_.buttons[13]?.pressed||p>.6,left:_.buttons[14]?.pressed||m<-.6,right:_.buttons[15]?.pressed||m>.6,a:_.buttons[0]?.pressed,b:_.buttons[1]?.pressed,start:_.buttons[9]?.pressed};for(const y of Object.keys(M)){if(!M[y]){c[y]=0;continue}if(c[y]&&g-c[y]<h)continue;const v=!c[y];if(c[y]=g,n()){y==="start"&&v&&s();continue}if(y==="a"){if(v){const T=document.activeElement;T&&T.click&&T.click()}}else if(y==="b")v&&t();else if(y!=="start"&&e()){const w=document.activeElement;w&&w.type==="range"&&(y==="left"||y==="right")?(w.value=+w.value+(y==="right"?1:-1)*(w.step||.05)*2,w.dispatchEvent(new Event("input",{bubbles:!0}))):o(y)}}}}const d=()=>{l||(l=requestAnimationFrame(u))};return window.addEventListener("gamepadconnected",d),navigator.getGamepads&&Array.from(navigator.getGamepads()).some(Boolean)&&d(),{focusFirst(f){const g=mo(f),_=f&&f.querySelector("[data-autofocus]");(_&&!_.disabled?_:g[0])?.focus({preventScroll:!0})}}}function xv(i){const e=zs("#boot");if(!e)return{setLoading(){},hide(){},el:null};const t=zs("#boot-fill"),n=zs("#boot-label"),s=zs("#boot-start"),r=zs(".boot-bar"),a=qc()?200:1700,o=performance.now();let c=0,l=!1,h=!1,u=!1;function d(){if(u)return;u=!0,e.classList.add("ready"),s.hidden=!1,r.setAttribute("aria-valuenow","100"),n.textContent="Ready";const m=async M=>{h||M.type==="keydown"&&(M.key==="Tab"||M.key==="Shift"||M.key==="Meta"||M.key==="Alt"||M.key==="Control")||(h=!0,window.removeEventListener("keydown",m,!0),e.removeEventListener("pointerdown",m,!0),e.classList.add("go"),s.blur(),await i())};window.addEventListener("keydown",m,!0),e.addEventListener("pointerdown",m,!0),window.addEventListener("gamepadconnected",()=>{});const p=()=>{if(h)return;const M=navigator.getGamepads?navigator.getGamepads():[];for(const y of M)if(y&&y.buttons.some(v=>v.pressed)){m({type:"pad"});return}requestAnimationFrame(p)};requestAnimationFrame(p),s.focus({preventScroll:!0})}function f(){if(c>=1&&l===!1){const m=Math.max(0,a-(performance.now()-o));l=!0,setTimeout(d,m)}}let g=!1;function _(m){if(g)return;g=!0,u=!0,e.classList.remove("ready"),s.hidden=!0,t.style.transform="scaleX(1)",t.style.background="#e5332d",n.textContent=m,n.style.cssText="color:#ff8a84;text-transform:none;letter-spacing:.02em;max-width:min(86vw,560px);text-align:center;font-size:1.05rem";const p=document.createElement("button");p.type="button",p.className="boot-start",p.textContent="Reload",p.style.animation="none",p.addEventListener("click",()=>location.reload()),n.after(p),p.focus({preventScroll:!0})}return{el:e,setLoading(m,p){if(!g){if(p&&/^failed/i.test(p)){_(p);return}c=Math.max(c,Math.min(1,m)),t.style.transform=`scaleX(${c})`,r.setAttribute("aria-valuenow",String(Math.round(c*100))),p&&!u&&(n.textContent=p),f()}},hide(){e.classList.add("out"),setTimeout(()=>{e.hidden=!0},600)},show(){e.hidden=!1,e.classList.remove("out")}}}const qr=22,go={green:["GREEN FLAG","f-green"],yellow:["CAUTION","f-yellow"],white:["WHITE FLAG · LAST LAP","f-white"],checker:["CHECKERED FLAG","f-check"]};function Mv(i){const e=L("div",{class:"hud","aria-hidden":"false"}),t={},n=(I,N="")=>L("span",{class:I},N);t.posBadge=L("div",{class:"h-pos"},t.posN=n("h-pos-n","P1"),t.posOf=n("h-pos-of","/ 1")),t.tower=L("ol",{class:"h-tower"});const s=L("div",{class:"h-tl"},t.posBadge,t.tower),r=L("div",{class:"h-btns"},L("button",{type:"button",class:"rbtn","aria-label":"Pause",dataset:{snd:"none"},onClick:()=>i.pause()},nn("pause")),L("button",{type:"button",class:"rbtn","aria-label":"Change camera",dataset:{snd:"none"},onClick:()=>i.cycleCamera()},nn("camera"))),a=(I,N,k)=>L("div",{class:`h-t ${k||""}`},n("h-t-l",N),t[I]=n("h-t-v","--:--.---"));t.lap=n("h-lap-v","LAP 1/3");const o=L("div",{class:"h-tr"},t.lap,a("cur","CURRENT","cur"),a("last","LAST"),a("best","BEST","best"));o.append(r),t.flag=L("div",{class:"h-flag",hidden:!0}),t.msg=L("div",{class:"h-msg",hidden:!0});const c=L("div",{class:"h-tc"},t.flag,t.msg);t.leds=Array.from({length:qr},(I,N)=>L("i",{class:`led ${N<12?"g":N<18?"y":"r"}`})),t.speed=n("h-spd","0"),t.unit=n("h-unit","MPH"),t.gear=n("h-gear","N"),t.rpm=n("h-rpm","0 RPM");const l=L("div",{class:"h-dash"},L("div",{class:"leds"},t.leds),L("div",{class:"h-dash-r"},L("div",{class:"h-gearbox"},n("h-gl","GEAR"),t.gear),L("div",{class:"h-spdbox"},t.speed,t.unit),L("div",{class:"h-rpmbox"},t.rpm)));t.thr=L("i",{class:"ped-f"}),t.brk=L("i",{class:"ped-f"});const h=L("div",{class:"h-ped"},L("div",{class:"ped thr"},t.thr,n("ped-l","T")),L("div",{class:"ped brk"},t.brk,n("ped-l","B")));t.gapA=n("gap-v","--"),t.gapB=n("gap-v","--"),t.draft=L("div",{class:"h-draft"},"DRAFTING");const u=L("div",{class:"h-gaps"},L("div",{class:"gap ahead"},n("gap-l","AHEAD"),t.gapA),L("div",{class:"gap behind"},n("gap-l","BEHIND"),t.gapB),t.draft);t.map=L("canvas",{class:"h-map",width:180,height:180,"aria-label":"Track map"}),t.dmg={};const d="http://www.w3.org/2000/svg",f=(I,N)=>{const k=document.createElementNS(d,I);for(const z of Object.keys(N))k.setAttribute(z,N[z]);return k},g=L("div",{class:"h-dmg","aria-label":"Car damage"},(()=>{const I=f("svg",{viewBox:"0 0 44 84"});I.append(f("path",{class:"dm-body",d:"M12 4h20a7 7 0 0 1 7 7v62a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7z"})),I.append(f("rect",{class:"dm-cab",x:13,y:28,width:18,height:26,rx:4}));const N=(k,z,G,B,K)=>{const ee=f("rect",{class:"dm ok",x:z,y:G,width:B,height:K,rx:3});t.dmg[k]=ee,I.append(ee)};return N("front",11,8,22,13),N("rear",11,63,22,13),N("left",7,24,6,36),N("right",31,24,6,36),I})()),_=L("div",{class:"h-bl"},t.map,g);e.append(s,c,o,_,l,h,u);const m={},p=(I,N,k)=>{m[I]!==k&&(m[I]=k,N.textContent=k)};let M=-1,y=null,v=null,T=null,w="",E="",C="",x=0;const S=t.map.getContext("2d");function P(I){let N=1e9,k=-1e9,z=1e9,G=-1e9;for(const[te,se]of I)N=Math.min(N,te),k=Math.max(k,te),z=Math.min(z,se),G=Math.max(G,se);const B=t.map.width,K=16,ee=Math.min((B-K*2)/(k-N||1),(B-K*2)/(G-z||1)),oe=(B-(k-N)*ee)/2-N*ee,_e=(B-(G-z)*ee)/2-z*ee;T={s:ee,ox:oe,oy:_e},v=document.createElement("canvas"),v.width=v.height=B;const xe=v.getContext("2d");xe.lineJoin="round",xe.lineCap="round",xe.beginPath(),I.forEach(([te,se],he)=>he?xe.lineTo(te*ee+oe,se*ee+_e):xe.moveTo(te*ee+oe,se*ee+_e)),xe.closePath(),xe.strokeStyle="rgba(0,0,0,.55)",xe.lineWidth=11,xe.stroke(),xe.strokeStyle="#8b939d",xe.lineWidth=6,xe.stroke();const[We,Oe]=I[0];xe.fillStyle="#f4f6f8",xe.fillRect(We*ee+oe-5,Oe*ee+_e-1.5,10,3)}function F(I){if(!I)return;const N=i.game.settings.units==="kph";p("spd",t.speed,String(Math.round(N?I.speedKph:I.speedMph))),p("unit",t.unit,N?"KM/H":"MPH"),p("gear",t.gear,I.gear===0?"N":I.gear<0?"R":String(I.gear)),p("rpm",t.rpm,`${Math.round(I.rpm/10)*10} RPM`);const k=Math.round(Math.max(0,Math.min(1,I.rpm/(I.rpmMax||9e3)))*qr);if(k!==M){for(let B=0;B<qr;B++)t.leds[B].classList.toggle("on",B<k);M=k,e.classList.toggle("redline",k>=qr-1)}if(t.thr.style.transform=`scaleY(${I.throttle||0})`,t.brk.style.transform=`scaleY(${I.brake||0})`,p("posn",t.posN,`P${I.pos}`),p("posof",t.posOf,`/ ${I.field}`),p("lap",t.lap,I.mode==="hotlap"?`LAP ${I.lap}`:`LAP ${Math.min(I.lap,I.laps)}/${I.laps}`),p("cur",t.cur,ki(I.curLap)),p("last",t.last,ki(I.lastLap)),p("best",t.best,ki(I.bestLap)),e.classList.toggle("hot",I.mode==="hotlap"),p("gapa",t.gapA,I.gapAhead==null||I.pos===1||I.mode==="hotlap"?"--":Kh(-Math.abs(I.gapAhead))),p("gapb",t.gapB,I.gapBehind==null||I.mode==="hotlap"||I.field>1&&I.pos>=I.field?"--":Kh(Math.abs(I.gapBehind))),m.dr!==!!I.drafting&&(m.dr=!!I.drafting,t.draft.classList.toggle("on",!!I.drafting)),I.damage)for(const B of["front","rear","left","right"]){const K=Math.round((I.damage[B]||0)*10);m["d"+B]!==K&&(m["d"+B]=K,t.dmg[B].setAttribute("class",`dm ${K>=7?"bad":K>=3?"mid":"ok"}`))}const z=I.flag||"";z!==E&&(E=z,z&&go[z]?(t.flag.hidden=!1,t.flag.className=`h-flag ${go[z][1]}`,t.flag.textContent=go[z][0]):t.flag.hidden=!0);const G=I.message||"";if(G!==C&&(C=G,G?(t.msg.hidden=!1,t.msg.textContent=G,t.msg.classList.remove("pop"),t.msg.offsetWidth,t.msg.classList.add("pop"),clearTimeout(x),x=setTimeout(()=>{t.msg.hidden=!0},3200)):t.msg.hidden=!0),I.standings){const B=I.standings.map(K=>K.pos+K.name+(K.gap||"")).join("|");B!==w&&(w=B,t.tower.replaceChildren(...I.standings.slice(0,7).map(K=>L("li",{class:`tw${K.me?" me":""}`},L("span",{class:"tw-p"},String(K.pos)),L("i",{class:"tw-c",style:{background:K.color||"#888"}}),L("span",{class:"tw-n"},K.name),L("span",{class:"tw-g"},K.gap||"")))))}if(I.minimap&&I.minimap.pts&&I.minimap.pts.length>2){I.minimap.pts!==y&&(y=I.minimap.pts,P(y)),S.clearRect(0,0,t.map.width,t.map.height),S.drawImage(v,0,0);for(const B of I.minimap.cars||[])S.beginPath(),S.arc(B.x*T.s+T.ox,B.z*T.s+T.oy,B.me?6.5:4,0,6.2832),S.fillStyle=B.me?"#3dba55":"#e8eaed",S.fill(),B.me&&(S.lineWidth=2,S.strokeStyle="#fff",S.stroke())}}return{el:e,update:F,ref:t}}function bv(i){const e=L("div",{class:"touch",hidden:!0}),t={steer:0,throttle:0,brake:0};let n=!1,s=!1;const r=()=>{const g=i.game.input;g&&g.setTouch&&g.setTouch({steer:t.steer?-t.steer:0,throttle:t.throttle,brake:t.brake})},a=L("i",{class:"st-knob"}),o=L("div",{class:"st-strip",role:"slider","aria-label":"Steering","aria-valuemin":-1,"aria-valuemax":1,"aria-valuenow":0},L("span",{class:"st-l"},"‹"),a,L("span",{class:"st-r"},"›"));let c=null;const l=g=>{const _=o.getBoundingClientRect(),m=Math.max(-1,Math.min(1,((g.clientX-_.left)/_.width-.5)*2*1.08));t.steer=Math.abs(m)<.04?0:m,a.style.transform=`translateX(${t.steer*(_.width/2-34)}px)`,r()};o.addEventListener("pointerdown",g=>{g.preventDefault(),c=g.pointerId;try{o.setPointerCapture(c)}catch{}o.classList.add("down"),l(g)}),o.addEventListener("pointermove",g=>{g.pointerId===c&&l(g)});const h=g=>{g.pointerId===c&&(c=null,t.steer=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h);const u=(g,_,m)=>{const p=L("div",{class:`pd ${g}`,role:"button","aria-label":_,tabindex:-1},L("span",null,_));let M=null;p.addEventListener("pointerdown",v=>{v.preventDefault(),M=v.pointerId;try{p.setPointerCapture(M)}catch{}p.classList.add("down"),t[m]=1,r(),navigator.vibrate&&navigator.vibrate(6)});const y=v=>{v.pointerId===M&&(M=null,p.classList.remove("down"),t[m]=0,r())};return p.addEventListener("pointerup",y),p.addEventListener("pointercancel",y),p};e.append(L("div",{class:"tc-l"},o),L("div",{class:"tc-r"},u("brake","BRAKE","brake"),u("gas","GAS","throttle"))),e.addEventListener("contextmenu",g=>g.preventDefault()),window.addEventListener("pointerdown",g=>{g.pointerType==="touch"&&!s&&(s=!0,f.refresh())},!0);const d=()=>{const g=i.game.settings.touch;return g===!0?!0:g===!1?!1:s||matchMedia("(pointer: coarse)").matches},f={el:e,refresh(){const g=d();n=g&&e.dataset.active==="1",e.hidden=!n,document.documentElement.classList.toggle("touch-on",g);const _=i.game.input;_&&(_.touchActive=g),n||(t.steer=t.throttle=t.brake=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())},tick(){n&&(t.steer||t.throttle||t.brake)&&r()},setActive(g){e.dataset.active=g?"1":"0",f.refresh()},wanted:d};return f}function Et(i,{kind:e="ghost",onClick:t,disabled:n=!1,title:s,icon:r,snd:a,cls:o="",type:c="button",aria:l}={}){const h=L("button",{class:`btn btn-${e} ${o}`.trim(),type:c,title:n?s||"Not available yet":s,"aria-disabled":n?"true":null,dataset:a?{snd:a}:null,...l||{}},r?nn(r):null,L("span",{class:"btn-label"},i));return n?h.disabled=!0:t&&h.addEventListener("click",t),h}function gn(i,e,t,{label:n,cls:s=""}={}){const r=L("div",{class:`seg ${s}`.trim(),role:"radiogroup","aria-label":n||null}),a=o=>{r.replaceChildren(...i.map(c=>{const l=c.value===o;return L("button",{type:"button",class:`seg-opt${l?" on":""}${c.locked?" locked":""}`,role:"radio","aria-checked":l?"true":"false",dataset:{value:String(c.value)},title:c.locked?c.cost?`Unlock for ${c.cost} credits`:"Locked":null,onClick:()=>{if(c.locked){t(c.value,c);return}a(c.value),t(c.value,c)}},c.locked?nn("lock","ico ico-s"):null,L("span",{class:"seg-l"},c.label),c.sub?L("span",{class:"seg-s"},c.sub):c.locked&&c.cost?L("span",{class:"seg-s"},String(c.cost)):null,c.default?L("span",{class:"seg-d"},"DEFAULT"):null)}))};return a(e),r.set=a,r}function Xr(i,e,t,{label:n,allowCustom:s=!0}={}){const r=L("div",{class:"swatches",role:"radiogroup","aria-label":n||null}),a=o=>{if(r.replaceChildren(...i.map(c=>L("button",{type:"button",class:`sw${c.toLowerCase()===String(o).toLowerCase()?" on":""}`,style:{"--c":c},title:c,role:"radio","aria-checked":c.toLowerCase()===String(o).toLowerCase()?"true":"false","aria-label":`Colour ${c}`,onClick:()=>{a(c),t(c)}}))),s){const c=L("input",{type:"color",class:"sw-custom",value:/^#[0-9a-f]{6}$/i.test(o)?o:"#808080","aria-label":"Custom colour",title:"Custom colour"});c.addEventListener("input",()=>t(c.value)),c.addEventListener("change",()=>a(c.value)),r.append(L("label",{class:"sw sw-plus",title:"Custom colour"},c,L("span",null,"+")))}};return a(e),r.set=a,r}function Sv(i,e,{min:t=0,max:n=1,step:s=.01,label:r,fmt:a=o=>Math.round(o*100)+"%"}={}){const o=L("output",{class:"sl-out"},a(i)),c=L("input",{type:"range",min:t,max:n,step:s,value:i,class:"sl","aria-label":r||"Value"}),l=()=>c.style.setProperty("--p",(c.value-t)/(n-t)*100+"%");return c.addEventListener("input",()=>{l(),o.textContent=a(+c.value),e(+c.value)}),l(),L("div",{class:"slider"},c,o)}function Tv(i,e,{label:t}={}){const n=L("button",{type:"button",class:`tg${i?" on":""}`,role:"switch","aria-checked":i?"true":"false","aria-label":t||"Toggle",dataset:{snd:"toggle"}},L("i"));return n.addEventListener("click",()=>{const s=n.getAttribute("aria-checked")!=="true";n.setAttribute("aria-checked",String(s)),n.classList.toggle("on",s),e(s)}),n}function Yt(i,e,t){return L("div",{class:"orow"},L("div",{class:"orow-t"},L("div",{class:"orow-n"},i),e?L("div",{class:"orow-s"},e):null),L("div",{class:"orow-c"},t))}function ei(i,e=""){return L("span",{class:`chip ${e}`.trim()},i)}function wv(i,e,t){return L("div",{class:"stat"},L("div",{class:"stat-v"},e),L("div",{class:"stat-l"},i),null)}function cd(i,e=""){return L("div",{class:`pbar ${e}`.trim()},L("i",{style:{width:hv(i,0,1)*100+"%"}}))}function Vs({title:i,text:e,ic:t,kind:n="",onClick:s,disabled:r=!1,hint:a,badge:o,big:c}){const l=L("button",{type:"button",class:`tile ${n}${c?" tile-big":""}`,disabled:r,title:r?a:null,"aria-disabled":r?"true":null,dataset:n.includes("primary")?{snd:"confirm"}:null,onClick:s},L("span",{class:"tile-ic"},nn(t)),L("span",{class:"tile-b"},L("span",{class:"tile-t"},i),L("span",{class:"tile-x"},e)),o?ei(o,r?"":"gold"):null,r?null:L("span",{class:"tile-go"},nn("chevron")));return r&&l.setAttribute("disabled",""),l}function Ev(i){const e=i.game.career,t=e.state,n=e.nextRace(),s=t.races.length===0,r=e.offers().length,a=t.races[t.races.length-1];return L("div",{class:"page page-home"},L("header",{class:"hero"},L("h1",{class:"big"},s?"Build your car.":"Back on track.",L("br"),L("span",null,s?"Earn your sponsors.":`${n.series.name}, race ${Math.min(n.index+1,n.of)} of ${n.of}`)),L("p",{class:"lead"},s?"You start with a blank car and a small local race. Finish well and sponsors will put their names on your hood.":`Last result: P${a.pos} of ${a.field}. ${r?`${r} sponsor ${r===1?"offer is":"offers are"} waiting in the Garage.`:"Keep your finishes consistent to bring in bigger sponsors."}`)),L("div",{class:"stats"},[["Reputation",Gt(t.rep)],["Credits",Gt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?ki(t.bestLap):"—"]].map(([c,l])=>L("div",{class:"stat"},L("div",{class:"stat-v"},l),L("div",{class:"stat-l"},c)))),L("div",{class:"tiles"},Vs({big:!0,kind:"primary",title:s?"Start career":"Continue career",text:`${n.series.name} · ${n.laps} laps · ${n.field} cars`,ic:"trophy",onClick:()=>i.go("raceSetup",{mode:"career"})}),Vs({title:"Quick race",text:"Pick the laps, rivals and weather",ic:"flag",onClick:()=>i.go("raceSetup",{mode:"quick"})}),Vs({title:"Hot lap",text:"Alone on track. Chase your best lap",ic:"stopwatch",onClick:()=>i.go("raceSetup",{mode:"hotlap"})}),Vs({title:"Garage",text:"Colours, number and sponsors",ic:"car",badge:r?`${r} ${r===1?"offer":"offers"}`:null,onClick:()=>i.go("garage")}),Vs({title:"Online",text:"Race other drivers",ic:"globe",disabled:!0,hint:"Online racing is planned for a later update",badge:"Coming soon"})),L("p",{class:"page-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."))}const Xc={1:"Local",2:"Regional",3:"National",4:"Title"},rr=(i,e=120,t="sp-logo")=>{const n=ws(i);return L("img",{class:t,src:Qu(i,e*2,Math.round(e*.4)*2),alt:n?n.name:i,width:e,height:Math.round(e*.4),draggable:"false"})};function jh(i){const e=i.game.career.nextTierGoal();if(!e)return L("div",{class:"note"},nn("star"),L("span",null,"Every sponsor tier is unlocked. Keep winning to keep the contracts paying."));const t=Math.round(e.avgNow*100),n=Math.round(e.avgNeeded*100),s=[];return e.racesNeeded>0&&s.push(`Finish ${e.racesNeeded} more ${e.racesNeeded===1?"race":"races"}`),s.push(`A finish score of ${n}% or better, averaged over your last 3 races (you are at ${t}%)`),e.seriesNeeded&&s.push(`Reach the ${e.seriesNeeded} series`),L("div",{class:"goal"},L("div",{class:"goal-h"},ei(`${Xc[e.tier]} sponsors`,"gold"),L("span",null,"Next tier needs")),L("ul",{class:"goal-l"},s.map(r=>L("li",null,r))),cd(Math.min(1,e.avgNow/e.avgNeeded),"gold"),L("div",{class:"goal-n"},"Finish score is 100% for a win and 0% for last place."))}function ld(i,e){const t=i.game.career,n=t.offers(),s=L("section",{class:"card"},L("h3",{class:"card-t"},"Sponsor offers"));return n.length?(s.append(L("div",{class:"offers"},n.map(r=>L("div",{class:"offer"},rr(r.id,132),L("div",{class:"offer-t"},L("div",{class:"offer-n"},r.name),L("div",{class:"offer-s"},`${Xc[r.tier]} sponsor · pays about ${Gt(r.payout)} credits a race`),L("div",{class:"offer-f"},"Best on: "+r.slots.map(a=>ea[a]).join(", "))),L("div",{class:"offer-b"},Et("Accept",{kind:"primary",icon:"handshake",onClick:()=>{t.acceptSponsor(r.id)&&(i.ui.toast(`${r.name} signed. Put them on your car in the Garage.`,"good"),e())}}),Et("Decline",{kind:"ghost",snd:"back",onClick:()=>{t.declineSponsor(r.id),e()}})))))),s.append(jh(i))):s.append(L("p",{class:"muted"},t.state.owned.length?"No new offers right now.":"No offers yet. Finish a few races in the top half of the field and sponsors will call."),jh(i)),s}function Av(i){const e=i.game.career,t=e.state.owned.map(ws).filter(Boolean),n=new Set(Object.values(e.state.livery.slots).filter(Boolean));return L("section",{class:"card"},L("h3",{class:"card-t"},"Sponsor contracts"),t.length?L("div",{class:"contracts"},t.map(s=>L("div",{class:"contract"},rr(s.id,96),L("div",{class:"contract-t"},L("div",{class:"offer-n"},s.name),L("div",{class:"offer-s"},`${Xc[s.tier]} · ~${Gt(s.payout)} credits a race`)),n.has(s.id)?ei("On your car","good"):ei("Not on car","warn")))):L("p",{class:"muted"},"No contracts yet."))}function Rv(i){const e=i.game.career,t=e.state,n=L("div",{class:"page page-career"}),s=()=>{n.replaceChildren(L("header",{class:"page-h"},L("h1",{class:"big"},"Career"),L("p",{class:"lead"},"Climb the series. Consistent finishes bring sponsors, and sponsors pay for every race.")),L("div",{class:"stats"},[["Reputation",Gt(t.rep)],["Credits",Gt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?ki(t.bestLap):"—"]].map(([r,a])=>wv(r,a))),L("section",{class:"card"},L("h3",{class:"card-t"},"Series"),L("div",{class:"series"},wn.map((r,a)=>{const o=t.rep<r.unlockRep,c=a===t.seriesIndex,l=c?t.seasonRace:0;return L("div",{class:`ser${c?" cur":""}${o?" locked":""}`},L("div",{class:"ser-h"},L("div",{class:"ser-n"},r.name),o?ei(`Needs ${Gt(r.unlockRep)} rep`,""):c?ei("Current","good"):null),L("div",{class:"ser-m"},`${r.races} races · ${r.laps} laps · ${r.field} cars · ${r.ai[0].toUpperCase()+r.ai.slice(1)} rivals`),c?L("div",{class:"ser-p"},cd(l/r.races),L("span",null,`${Math.min(l,r.races)} of ${r.races} done`)):null,o?L("div",{class:"ser-l"},nn("lock"),L("span",null,`${Gt(r.unlockRep-t.rep)} more reputation to unlock`)):c?Et("Race next event",{kind:"primary",icon:"play",onClick:()=>i.go("raceSetup",{mode:"career"})}):Et("Switch to this series",{onClick:()=>{e.selectSeries(a)&&(i.ui.toast(`Switched to ${r.name}`,"info"),s())}}))}))),L("div",{class:"cols"},L("div",null,ld(i,s),Av(i)),L("section",{class:"card"},L("h3",{class:"card-t"},"Recent results"),t.races.length?L("table",{class:"tbl"},L("thead",null,L("tr",null,["Series","Finish","Field"].map(r=>L("th",null,r)))),L("tbody",null,t.races.slice(-10).reverse().map(r=>{const a=wn.find(o=>o.id===r.series);return L("tr",null,L("td",null,a?a.name:r.series),L("td",{class:r.pos<=3?"good":""},od(r.pos)),L("td",null,`${r.field} cars`))}))):L("p",{class:"muted"},"No races yet. Your first result will appear here."))))};return s(),n}function la(i,{title:e,body:t,confirmLabel:n="OK",cancelLabel:s="Cancel",danger:r=!1,disabled:a=!1,onConfirm:o}){const c=i.ui.overlayEl,l=()=>{const d=!!c.querySelector(".ov");c.hidden=!d&&i.ui._modals.length===0,c.classList.toggle("modal-only",!d&&i.ui._modals.length>0)},h=()=>{u.remove(),i.ui._modals=i.ui._modals.filter(d=>d!==u),l(),i.ui.focusScope()},u=L("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":e},L("div",{class:"modal-card"},L("h3",{class:"modal-t"},e),L("p",{class:"modal-b"},t),L("div",{class:"modal-a"},Et(s,{kind:"ghost",snd:"back",onClick:h}),Et(n,{kind:r?"danger":"primary",disabled:a,title:a?"You do not have enough credits yet":null,onClick:()=>{h(),o&&o()}}))));return u.dataset.close="1",u.close=h,u.addEventListener("pointerdown",d=>{d.target===u&&h()}),c.append(u),i.ui._modals.push(u),l(),i.ui.focusScope(u),u}const $h=["#d9dde2","#f4f6f8","#1d1f24","#c8102e","#e8590c","#f2b134","#3dba55","#0d8a6a","#1f6fe0","#2a3f8f","#7a3fc4","#e83e8c"],Cv=["#1d1f24","#f4f6f8","#c0c6cc","#f2b134","#c8102e","#3dba55","#1f6fe0"],Pv=[["none","Plain"],["stripe","Stripe"],["split","Split"],["chevron","Chevron"],["fade","Fade"]],Lv=[["gloss","Gloss"],["matte","Matte"],["metallic","Metallic"]],Iv=[["block","Block"],["italic","Italic"],["outline","Outline"]];function Dv(i){const e=i.game,t=e.career;let n=i.params?.tab||"paint";const s=p=>e.garage.setLivery(p),r=L("div",{class:"page page-garage"}),a=L("div",{class:"garage-stage","aria-label":"Drag to rotate the car. Scroll or pinch to zoom.",role:"img"},L("div",{class:"stage-hint"},nn("car"),L("span",null,"Drag to rotate. Scroll or pinch to zoom."))),o=new Map;let c=0;a.addEventListener("pointerdown",p=>{try{a.setPointerCapture(p.pointerId)}catch{}if(o.set(p.pointerId,[p.clientX,p.clientY]),o.size===2){const[M,y]=[...o.values()];c=Math.hypot(M[0]-y[0],M[1]-y[1])}}),a.addEventListener("pointermove",p=>{const M=o.get(p.pointerId);if(M){if(o.size===2){o.set(p.pointerId,[p.clientX,p.clientY]);const[y,v]=[...o.values()],T=Math.hypot(y[0]-v[0],y[1]-v[1]);e.garage.zoom((c-T)*.01),c=T;return}e.garage.orbit(p.clientX-M[0],p.clientY-M[1]),o.set(p.pointerId,[p.clientX,p.clientY])}});const l=p=>{o.delete(p.pointerId),c=0};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("wheel",p=>{p.preventDefault(),e.garage.zoom(Math.sign(p.deltaY)*.6)},{passive:!1});const h=L("aside",{class:"garage-panel"}),u=(p,M,y,v)=>{const T=Ys[p][M],w=t.state.credits;la(i,{title:`Unlock ${y}?`,body:`${y} costs ${Gt(T)} credits. You have ${Gt(w)}.`,confirmLabel:w>=T?`Unlock for ${Gt(T)}`:"Not enough credits",disabled:w<T,onConfirm:()=>{t.buy(p,M)&&(i.ui.toast(`${y} unlocked`,"good"),v(),m())}})},d=(p,M,y,v)=>gn(M.map(([T,w])=>{const E=t.canUse(p,T);return{value:T,label:w,locked:!E,cost:Ys[p][T]}}),y,(T,w)=>{w.locked?u(p,T,M.find(E=>E[0]===T)[1],()=>v(T)):v(T)},{label:p}),f=[["paint","Paint"],["number","Number"],["sponsors","Sponsors"]],g=(p,...M)=>L("div",{class:"g-sec"},L("div",{class:"g-t"},p),...M);function _(){const p=t.state.livery;if(n==="paint")return[g("Body colour",Xr($h,p.paint,v=>s({paint:v}),{label:"Body colour"})),g("Accent",Xr($h,p.accent,v=>s({accent:v}),{label:"Accent colour"})),g("Trim and wheels",Xr(Cv,p.trim,v=>s({trim:v}),{label:"Trim colour"})),g("Pattern",d("pattern",Pv,p.pattern,v=>s({pattern:v}))),g("Finish",d("finish",Lv,p.finish,v=>s({finish:v})))];if(n==="number"){const v=L("input",{class:"num-in",type:"text",inputmode:"numeric",maxlength:3,value:p.number,"aria-label":"Car number",pattern:"[0-9]*"});return v.addEventListener("input",()=>{v.value=v.value.replace(/\D/g,"").slice(0,3),v.value&&s({number:v.value})}),v.addEventListener("blur",()=>{v.value||(v.value=p.number)}),[g("Car number",L("div",{class:"num-wrap"},v,L("span",{class:"muted"},"Up to three digits")),L("div",{class:"quick-nums"},["7","18","24","42","88","99"].map(T=>L("button",{type:"button",class:"qn",onClick:()=>{v.value=T,s({number:T})}},T)))),g("Style",gn(Iv.map(([T,w])=>({value:T,label:w})),p.numberStyle,T=>s({numberStyle:T}),{label:"Number style"})),g("Number colour",Xr(["#1d1f24","#f4f6f8","#f2b134","#c8102e","#1f6fe0","#3dba55"],p.numberColor,T=>s({numberColor:T}),{label:"Number colour"}))]}const M=t.state.owned.map(ws).filter(Boolean),y=[];return M.length?y.push(...hc.map(v=>{const T=p.slots[v];return L("div",{class:"slot"},L("div",{class:"slot-h"},L("div",{class:"slot-n"},ea[v]),T?rr(T,84,"sp-logo sm"):L("span",{class:"muted"},"Empty")),L("div",{class:"slot-o"},M.map(w=>L("button",{type:"button",class:`slot-pick${T===w.id?" on":""}`,title:`${w.name}${w.slots.includes(v)?" (pays full rate here)":" (pays 60% here)"}`,"aria-pressed":T===w.id?"true":"false","aria-label":`${w.name} on ${ea[v]}`,onClick:()=>{s({slots:{...t.state.livery.slots,[v]:w.id}}),m()}},rr(w.id,64,"sp-logo xs"))),T?L("button",{type:"button",class:"slot-clear","aria-label":`Clear ${ea[v]}`,dataset:{snd:"back"},onClick:()=>{s({slots:{...t.state.livery.slots,[v]:null}}),m()}},"Clear"):null))})):y.push(L("p",{class:"muted pad"},"You do not have any sponsors yet. Race well and offers will show up below.")),y.push(ld(i,m)),y}function m(){const p=h.querySelector(".g-body")?.scrollTop||0;h.replaceChildren(L("div",{class:"g-head"},L("h1",{class:"big sm"},"Garage"),L("div",{class:"g-credits",title:"Credits"},nn("coin"),L("b",null,Gt(t.state.credits)))),L("div",{class:"tabs",role:"tablist"},f.map(([M,y])=>L("button",{type:"button",class:`tab-b${n===M?" on":""}`,role:"tab","aria-selected":n===M?"true":"false",onClick:()=>{n=M,m()}},y,M==="sponsors"&&t.offers().length?L("i",{class:"dot","aria-label":"New offers"}):null))),L("div",{class:"g-body",role:"tabpanel"},_()),L("div",{class:"g-foot"},Et("Done",{kind:"primary",icon:"check",onClick:()=>i.go("menu")}))),h.querySelector(".g-body").scrollTop=p}return m(),r.append(a,h),r}const rs={laps:3,field:12,ai:"pro",weather:"clear",time:"day",ghost:!0},Hs=(i,e)=>i.map(([t,n,s])=>({value:t,label:n,sub:s,default:t===e}));function Nv(i){const e=i.params?.mode||"quick",n=i.game.career.nextRace(),s=i.game.world&&i.game.world.q&&i.game.world.q.maxCars||99,r=n.field>s;rs.field>s&&(rs.field=[32,24,16,12,8,4].find(d=>d<=s)||4);const a=e==="career"?{laps:n.laps,field:Math.min(n.field,s),ai:n.ai,series:n.series.id,weather:rs.weather,time:rs.time}:{...rs},o=e==="career"?n.series.name:e==="hotlap"?"Hot lap":"Quick race",c=e==="career"?`Race ${Math.min(n.index+1,n.of)} of ${n.of}. The series sets laps, rivals and field size. Your result counts for reputation and sponsors.`:e==="hotlap"?"Just you and the clock. No traffic, no damage penalties, and your best lap is saved.":"A one-off race. Results here do not affect your career.",l=L("div",{class:"page page-setup"},L("header",{class:"page-h"},L("h1",{class:"big"},o),L("p",{class:"lead"},c))),h=L("section",{class:"card opts"});l.append(h);const u=(d,f)=>{a[d]=f,(e!=="career"||d==="weather"||d==="time")&&(rs[d]=f)};return e==="career"?h.append(Yt("Race",r?`Set by the series. Graphics quality limits the grid to ${s} cars; raise it in Settings for the full field.`:"Set by the series",L("div",{class:"fixed"},ei(`${a.laps} laps`),ei(`${a.field} cars`),ei(`${a.ai[0].toUpperCase()+a.ai.slice(1)} rivals`)))):(e==="quick"&&h.append(Yt("Laps","Fewer laps for a quick go",gn(Hs([[3,"3"],[5,"5"],[10,"10"],[20,"20"]],3),a.laps,d=>u("laps",d),{label:"Laps"})),Yt("AI level","Legend is the toughest",gn(Hs([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]],"pro"),a.ai,d=>u("ai",d),{label:"AI level"})),Yt("Cars in the race",s<32?`Including you. Up to ${s} at this graphics quality`:"Including you",gn(Hs([[4,"4"],[8,"8"],[12,"12"],[16,"16"],[24,"24"],[32,"32"]].filter(([d])=>d<=s),12),a.field,d=>u("field",d),{label:"Cars"}))),e==="hotlap"&&h.append(Yt("Ghost car","Race against your best lap",Tv(a.ghost,d=>u("ghost",d),{label:"Ghost car"})))),h.append(Yt("Weather","Rain means less grip",gn(Hs([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]],"clear"),a.weather,d=>u("weather",d),{label:"Weather"})),Yt("Time of day",null,gn(Hs([["day","Day"],["sunset","Sunset"],["night","Night"]],"day"),a.time,d=>u("time",d),{label:"Time of day"}))),l.append(L("div",{class:"actions"},Et(e==="hotlap"?"Start hot lap":"Start race",{kind:"primary",icon:"play",onClick:()=>i.launch(e==="hotlap"?"hotlap":"race",e==="hotlap"?{ghost:a.ghost,weather:a.weather,time:a.time}:{laps:a.laps,field:a.field,ai:a.ai,series:e==="career"?a.series:void 0,weather:a.weather,time:a.time})}),Et("Back",{kind:"ghost",snd:"back",icon:"back",onClick:()=>i.go("menu")}))),l}function hd(i){const e=i.game,t=e.settings;t.volumes=Object.assign({master:.8,music:.6,sfx:.8,engine:.9,ambient:.7},t.volumes||{});const n=()=>{e.saveSettings()},s=L("div",{class:"page page-settings"},L("header",{class:"page-h"},L("h1",{class:"big"},"Settings"),L("p",{class:"lead"},"Changes save automatically. Graphics changes made during a race apply from the next one."))),r=a=>a.map(([o,c,l])=>({value:o,label:c,sub:l}));return s.append(L("section",{class:"card opts"},L("h3",{class:"card-t"},"Display and driving"),Yt("Graphics quality","Low suits older phones. Ultra needs a recent GPU.",gn(r([["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]]),t.quality,a=>{t.quality=a,n(),i.ui.applyQuality()},{label:"Graphics quality"})),Yt("Speed units",null,gn(r([["mph","mph"],["kph","km/h"]]),t.units,a=>{t.units=a,n()},{label:"Units"})),Yt("Default camera","You can change it in a race with the camera button.",gn(r([[0,"Chase"],[1,"Cockpit"],[2,"Broadcast"]]),t.camera,a=>{t.camera=a,n()},{label:"Camera"})),Yt("Driving assists","More help keeps the car steadier.",gn(r([[0,"Off"],[1,"Medium"],[2,"Full"]]),t.assists,a=>{t.assists=a,n()},{label:"Assists"})),Yt("Touch controls","Auto shows them on touch screens only.",gn(r([["auto","Auto"],[!0,"On"],[!1,"Off"]]),t.touch,a=>{t.touch=a,n(),i.ui.touch&&i.ui.touch.refresh()},{label:"Touch controls"})),document.fullscreenEnabled?Yt("Full screen",null,Et("Toggle full screen",{icon:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>i.ui.toast("Full screen was blocked by the browser","warn"))}})):null),L("section",{class:"card opts"},L("h3",{class:"card-t"},"Sound"),[["master","Master"],["music","Music"],["sfx","Menu and effects"],["engine","Engines"],["ambient","Crowd and track"]].map(([a,o])=>Yt(o,null,Sv(t.volumes[a],c=>{t.volumes[a]=c,pv({...t.volumes}),n()},{label:o})))),L("section",{class:"card opts"},L("h3",{class:"card-t"},"Progress"),Yt("Reset career","Deletes your results, sponsors, credits and car design on this device.",Et("Reset career",{kind:"danger",onClick:()=>la(i,{title:"Reset your career?",body:"This deletes your results, sponsors, credits and car design on this device. It cannot be undone.",confirmLabel:"Reset everything",danger:!0,onConfirm:()=>{e.career.reset(),e.garage.setLivery(JSON.parse(JSON.stringify(oa))),i.ui.toast("Career reset","info"),i.go("menu")}})})))),i.params?.overlay&&s.append(L("div",{class:"actions"},Et("Back",{kind:"primary",snd:"back",icon:"back",onClick:()=>i.back()}))),s}function Uv(i){const e=i.params||{},t=e.career||null,n=e.mode==="hotlap",s=L("div",{class:"results"}),r=n?L("div",{class:"res-top"},L("div",{class:"res-pos"},L("span",{class:"res-k"},"Best lap"),L("b",null,ki(e.bestLap))),L("div",{class:"res-sub"},e.newBest?"New personal best":"Hot lap finished")):L("div",{class:"res-top"},L("div",{class:"res-pos"},L("span",{class:"res-k"},e.pos===1?"Winner":"Finished"),L("b",null,od(e.pos||0)),L("span",{class:"res-of"},`of ${e.field||"?"}`)),L("div",{class:"res-sub"},`${e.laps||"?"} laps · best lap ${ki(e.bestLap)}`)),a=L("div",{class:"card res-card"},r);if(e.standings&&e.standings.length){const c=e.standings;let l=c.slice(0,8);const h=c.find(u=>u.me);h&&!l.includes(h)&&(l=[...c.slice(0,7),h]),a.append(L("table",{class:"tbl tight"},L("tbody",null,l.map((u,d)=>L("tr",{class:`${u.me?"me":""}${l[d-1]&&u.pos-l[d-1].pos>1?" gap":""}`.trim()},L("td",null,String(u.pos)),L("td",null,u.name),L("td",{class:"r"},u.gap||""))))))}t&&(a.append(L("div",{class:"earn"},L("div",{class:"earn-r"},L("span",null,"Reputation"),L("b",{class:"good"},`+${Gt(t.repGain)}`)),L("div",{class:"earn-r"},L("span",null,"Prize money"),L("b",null,`+${Gt(t.prize)}`)),(t.paid||[]).map(c=>L("div",{class:"earn-r"},L("span",{class:"earn-sp"},rr(c.id,56,"sp-logo xs"),c.name),L("b",null,`+${Gt(c.amount)}`))),L("div",{class:"earn-r tot"},L("span",null,"Credits now"),L("b",null,Gt(t.credits))))),t.newOffers&&t.newOffers.length&&a.append(L("div",{class:"note good"},nn("handshake"),L("span",null,`${t.newOffers.length} new sponsor ${t.newOffers.length===1?"offer":"offers"}: ${t.newOffers.map(c=>c.name).join(", ")}`))),t.unlockedSeries&&t.unlockedSeries.length&&a.append(L("div",{class:"note gold"},nn("trophy"),L("span",null,`Series unlocked: ${t.unlockedSeries.map(c=>c.name).join(", ")}`))));const o=L("div",{class:"actions"});return t?o.append(Et("Next race",{kind:"primary",icon:"play",onClick:()=>i.leave("raceSetup",{mode:"career"})}),t.newOffers&&t.newOffers.length?Et("View offers",{icon:"handshake",onClick:()=>i.leave("garage",{tab:"sponsors"})}):Et("Garage",{icon:"car",onClick:()=>i.leave("garage")})):o.append(Et(n?"Another lap":"Race again",{kind:"primary",icon:"play",onClick:()=>i.restart()})),o.append(Et("Main menu",{snd:"back",onClick:()=>i.leave("menu")})),s.append(a,o),s}function kv(i){const e=i.params||{};return L("div",{class:"pause card"},L("h2",{class:"big sm"},"Paused"),e.info?L("p",{class:"lead"},e.info):null,L("div",{class:"pause-a"},Et("Resume",{kind:"primary",icon:"play",onClick:()=>i.resume()}),Et("Restart",{icon:"back",onClick:()=>la(i,{title:"Restart this race?",body:"Your progress in this race will be lost.",confirmLabel:"Restart",onConfirm:()=>i.restart()})}),Et("Settings",{icon:"gear",onClick:()=>i.go("settings",{overlay:!0,from:"pause"})}),Et("Exit to menu",{kind:"danger",snd:"back",onClick:()=>la(i,{title:"Leave the race?",body:"This result will not count.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.exitToMenu()})})))}const Zh={menu:Ev,career:Rv,garage:Dv,raceSetup:Nv,settings:hd},Fv=[{id:"menu",label:"Home",icon:"home"},{id:"career",label:"Career",icon:"trophy"},{id:"raceSetup",params:{mode:"quick"},label:"Race",icon:"flag"},{id:"raceSetup",params:{mode:"hotlap"},label:"Hot lap",icon:"stopwatch",desk:!0},{id:"garage",label:"Garage",icon:"car"},{id:"online",label:"Online",icon:"globe",disabled:!0,desk:!0,hint:"Online racing is planned for a later update"},{id:"settings",label:"Settings",icon:"gear"}],J={game:null,root:null,cur:"boot",params:{},listeners:{},nav:null,wiping:!1,music:"",hudWait:!0},Fe={_modals:[],overlayEl:null},_o=(i,...e)=>(J.listeners[i]||[]).forEach(t=>{try{t(...e)}catch(n){console.error(n)}});Fe.on=(i,e)=>((J.listeners[i]||=[]).push(e),()=>{J.listeners[i]=J.listeners[i].filter(t=>t!==e)});Fe.current=()=>J.cur;function Qc(i){return qc()?(i(),Promise.resolve()):new Promise(e=>{const t=J.wipeEl;t.classList.remove("run"),t.offsetWidth,t.classList.add("run"),J.wiping=!0,Ot("whoosh"),setTimeout(()=>{i()},330),setTimeout(()=>{t.classList.remove("run"),J.wiping=!1,e()},760)})}function ys(){try{const i=J.game.input;i&&typeof i.clear=="function"&&i.clear()}catch{}}function ha(i){return{game:J.game,ui:Fe,params:i,go:(e,t)=>Fe.show(e,t),back:()=>Fe.back(),launch:(e,t)=>Ov(e,t),restart:()=>Bv(),resume:()=>zv(),pause:()=>xc(),cycleCamera:()=>{const e=J.game.input;e&&e.cycleCamera?e.cycleCamera():e&&e.press&&e.press("camera")},exitToMenu:()=>yc(),leave:(e,t)=>yc(e,t)}}async function Ov(i,e){J.wiping||await Qc(()=>{ys(),Fe.applyQuality(),Vv(),Fe.show("hud");const t=J.game;(i==="hotlap"?t.startHotLap:t.startRace).call(t,e)})}async function yc(i="menu",e={}){J.wiping||await Qc(()=>{try{J.game.exitToMenu()}catch(t){console.error(t)}ys(),Fe.show(i,e)})}function Bv(){ys(),Fe.applyQuality(),J.game.restart(),Fe.show("hud")}function zv(){ys(),J.game.resume(),Fe.show("hud"),ys()}Fe.applyQuality=()=>{const i=J.game,e=i&&i.world;if(!e||typeof e.setQuality!="function")return;const t=i.settings&&i.settings.quality;if(!(!t||e.quality===t||i.mode==="race"&&i.race))try{e.setQuality(t)}catch(n){console.warn("[ui] could not apply graphics quality",n)}};function Vv(){const i=J.game;i&&typeof i.camMode=="number"&&i.settings&&typeof i.settings.camera=="number"&&(i.camMode=i.settings.camera|0,i.camInit=!1)}function xc(){J.cur==="hud"&&(J.game.pause(),ys(),J.cur!=="pause"&&Fe.show("pause",J.pauseInfo||{}))}function Hv(){const i=t=>{const n=L("button",{type:"button",class:`nav-item${t.desk?" desk":""}`,disabled:t.disabled,title:t.disabled?t.hint:null,"aria-disabled":t.disabled?"true":null,dataset:{id:t.id,mode:t.params?.mode||""},onClick:()=>Fe.show(t.id,t.params||{})},nn(t.icon),L("span",{class:"nav-l"},t.label),t.disabled?L("span",{class:"nav-soon"},"Soon"):null);return t.disabled&&n.setAttribute("disabled",""),n};J.navItems=Fv.map(i);const e=L("nav",{class:"side","aria-label":"Main menu"},L("div",{class:"side-logo",html:fv.replace("<svg ",'<svg class="side-logo-svg" aria-hidden="true" ')}),L("div",{class:"nav"},J.navItems),L("p",{class:"side-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."));J.mainEl=L("main",{class:"main",id:"shell-main"}),J.shellEl=L("div",{class:"shell",hidden:!0},e,J.mainEl)}function Gv(i,e){J.navItems.forEach(t=>{t.dataset.id===i&&(t.dataset.mode?t.dataset.mode===(e.mode==="career"?"quick":e.mode||""):!0)?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function hi({shell:i=!1,hud:e=!1,overlay:t=!1,boot:n=!1}){J.shellEl.hidden=!i,J.hudEl.hidden=!e,J.overlayEl.hidden=!t,J.bootCtl.el&&n&&J.bootCtl.show(),J.root.dataset.layer=i?"shell":e?t?"hud-overlay":"hud":t?"overlay":n?"boot":"none"}function Ni(){const i=document.getElementById("game-root");if(!i)return;const e=J.cur==="garage"&&!(J.game&&J.game.usesStageRect)?Fe.stageRect():null;i.style.transform=e?`translate(${Math.round(e.x+e.width/2-innerWidth/2)}px, ${Math.round(e.y+e.height/2-innerHeight/2)}px)`:""}function Wv(){const i=J.game;if(J.cur!=="garage"||!i||!i.orbit||typeof i.orbit.dist!="number"||i.usesStageRect)return;const e=Fe.stageRect();if(!e||e.width<80||e.height<80)return;const t=2*Math.tan(38/2*Math.PI/180),n=Math.max(5.8/(t*(innerWidth/innerHeight)*(e.width/innerWidth)),2.7/(t*(e.height/innerHeight)));try{i.garage.zoom(Math.min(12,Math.max(4.2,n))-i.orbit.dist)}catch{}}function vo(i){J.music!==i&&(J.music=i,mv(i,{fade:1.2}))}Fe.show=function(e,t={}){const n=J.cur;if(J.params=t,e==="none"){hi({}),J.cur="none",J.touch.setActive(!1),Ni(),_o("screen",e,t);return}if(e==="boot"){hi({boot:!0}),J.cur="boot",Ni(),_o("screen",e,t);return}J.bootCtl.el&&!J.bootCtl.el.hidden&&e!=="boot"&&J.bootCtl.hide(),J.overlayEl.querySelectorAll(".ov").forEach(r=>r.remove()),Fe._modals.forEach(r=>r.remove()),Fe._modals=[];const s=ha(t);if(Zh[e]&&!(e==="settings"&&t.overlay)){if(n==="garage"&&e!=="garage")try{J.game.garage.exit()}catch(a){console.error(a)}hi({shell:!0}),J.touch.setActive(!1),Fe.applyQuality(),J.shellEl.classList.toggle("garage-mode",e==="garage"),J.shellEl.dataset.screen=e;const r=Zh[e](s);if(r.classList.add("enter"),J.mainEl.replaceChildren(r),J.mainEl.scrollTop=0,Gv(e,t),e==="garage"&&n!=="garage")try{J.game.garage.enter()}catch(a){console.error(a)}vo(e==="garage"?"garage":"menu")}else if(e==="hud"){if(n==="garage")try{J.game.garage.exit()}catch{}hi({hud:!0}),J.touch.setActive(!0),J.hudWait=!0,J.hudEl.classList.add("wait"),vo("race"),!J.rotHint&&J.touch.wanted()&&innerWidth<700&&innerHeight>innerWidth&&(J.rotHint=!0,setTimeout(()=>Fe.toast("Tip: turn your phone sideways for a wider view","info"),2500))}else if(e==="pause")hi({hud:!0,overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(L("div",{class:"ov ov-pause"},kv(s)));else if(e==="results")hi({overlay:!0}),J.touch.setActive(!1),vo("results"),Ot(t.pos===1?"bestLap":"lap"),J.overlayEl.append(L("div",{class:"ov ov-results"},Uv(s)));else if(e==="settings")hi({hud:n==="pause"||J.cur==="pause",overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(L("div",{class:"ov ov-settings"},hd(s)));else{console.warn("[ui] unknown screen",e);return}J.cur=e,J.pauseOverlayFrom=t.from,_o("screen",e,t),Ni(),requestAnimationFrame(()=>{Ni(),Fe.focusScope()}),e==="garage"&&(n!=="garage"&&requestAnimationFrame(Wv),setTimeout(Ni,560))};Fe.back=function(){if(Fe._modals.length){Fe._modals[Fe._modals.length-1].close(),Ot("back");return}const e=J.cur;e==="settings"&&J.params.overlay?(Ot("back"),Fe.show("pause",J.pauseInfo||{})):e==="pause"?(Ot("back"),ha({}).resume()):e==="results"?(Ot("back"),yc()):["career","garage","raceSetup","settings"].includes(e)&&(Ot("back"),Fe.show("menu"))};Fe.getScope=()=>Fe._modals.length?Fe._modals[Fe._modals.length-1]:!J.overlayEl.hidden&&J.overlayEl.querySelector(".ov")?J.overlayEl.querySelector(".ov"):J.shellEl.hidden?null:J.shellEl;Fe.focusScope=i=>{J.nav&&J.nav.focusFirst(i||Fe.getScope())};Fe.hud={update(i){J.hudWait&&(J.hudWait=!1,J.hudEl.classList.remove("wait")),J.hudCtl.update(i),J.touchCtl.tick()}};Fe.stageRect=()=>{const i=J.mainEl&&J.mainEl.querySelector(".garage-stage");if(!i||J.shellEl.hidden)return null;let e=0,t=0,n=i;for(;n&&n!==J.root;){e+=n.offsetLeft,t+=n.offsetTop;const r=n.offsetParent;r&&r!==J.root&&(e-=r.scrollLeft,t-=r.scrollTop),n=r}const s=J.root.getBoundingClientRect();return{x:e+s.left,y:t+s.top,width:i.offsetWidth,height:i.offsetHeight}};Fe.setPauseInfo=i=>{J.pauseInfo={info:i}};Fe.setLoading=(i,e)=>J.bootCtl.setLoading(i,e);Fe.touch=null;Fe.toast=(i,e="info")=>{const t=performance.now();if(J.lastToast&&J.lastToast.text===i&&t-J.lastToast.t<1500)return;J.lastToast={text:i,t};const n=L("div",{class:`toast ${e}`,role:"status"},e==="good"?nn("check"):null,L("span",null,i));for(J.toastsEl.append(n);J.toastsEl.children.length>3;)J.toastsEl.firstChild.remove();setTimeout(()=>n.classList.add("out"),3e3),setTimeout(()=>n.remove(),3500)};Fe.init=function(e,t){J.game=t,J.root=e,e.classList.add("ui-root"),J.bootCtl=xv(async()=>{await gv(),Ot("intro"),await uv(qc()?50:900),await Qc(()=>{Fe.show("menu")})}),Hv(),J.hudCtl=Mv(ha({})),J.hudEl=J.hudCtl.el,J.hudEl.hidden=!0,J.touchCtl=bv(ha({})),Fe.touch=J.touch=J.touchCtl,J.hudEl.append(J.touchCtl.el),J.overlayEl=Fe.overlayEl=L("div",{class:"overlay",hidden:!0}),J.toastsEl=L("div",{class:"toasts","aria-live":"polite"}),J.wipeEl=L("div",{class:"wipe","aria-hidden":"true"},L("i"),L("i"),L("i")),e.append(J.shellEl,J.hudEl,J.overlayEl,J.toastsEl,J.wipeEl),J.nav=yv(e,{getScope:()=>Fe.getScope(),onBack:()=>Fe.back(),hudActive:()=>J.cur==="hud"&&!J.overlayEl.hasChildNodes()||J.cur==="hud",onHudPause:()=>xc()}),window.addEventListener("resize",Ni),window.addEventListener("orientationchange",()=>setTimeout(Ni,250)),J.pauseInfo={},t&&typeof t.on=="function"&&t.on("ready",()=>Fe.setLoading(1,"Ready")),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Ku()),document.addEventListener("visibilitychange",()=>{document.hidden&&J.cur==="hud"&&xc()}),J.cur="boot",hi({boot:!0})};ya.ui=Fe;Fe.init(document.getElementById("ui-root"),ya);window.__rtta={game:ya,ui:Fe,audio:Ze,Driver:ju};const qv=document.getElementById("game-root");ya.init(qv,(i,e)=>Fe.setLoading(i,e)).catch(i=>{console.error(i),Fe.setLoading(1,"Failed to start: "+(i&&i.message||i))});
