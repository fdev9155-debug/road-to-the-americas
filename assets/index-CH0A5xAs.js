(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Gc="180",Jd=0,bl=1,ef=2,Lu=1,Iu=2,ai=3,li=0,rn=1,Wt=2,bi=0,_s=1,_a=2,Sl=3,wl=4,tf=5,Bi=100,nf=101,sf=102,rf=103,af=104,of=200,cf=201,lf=202,hf=203,zo=204,Vo=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,vf=212,_f=213,yf=214,Ho=0,Go=1,Wo=2,bs=3,qo=4,Xo=5,Qo=6,Ko=7,ku=0,xf=1,Mf=2,Si=0,bf=1,Sf=2,wf=3,Du=4,Tf=5,Ef=6,Af=7,Tl="attached",Rf="detached",Nu=300,Ss=301,ws=302,Yo=303,jo=304,Ca=306,Ei=1e3,Mi=1001,ya=1002,an=1003,Uu=1004,Js=1005,_n=1006,ha=1007,Xn=1008,Yn=1009,Fu=1010,Ou=1011,or=1012,Wc=1013,Xi=1014,Un=1015,_r=1016,qc=1017,Xc=1018,cr=1020,Bu=35902,zu=35899,Vu=1021,Hu=1022,En=1023,lr=1026,hr=1027,Qc=1028,Kc=1029,Gu=1030,Yc=1031,jc=1033,ua=33776,da=33777,fa=33778,pa=33779,$o=35840,Zo=35841,Jo=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,cc=37812,lc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,vc=37821,_c=36492,yc=36494,xc=36495,Mc=36283,bc=36284,Sc=36285,wc=36286,ur=2300,dr=2301,Va=2302,El=2400,Al=2401,Rl=2402,Cf=2500,Pf=0,Wu=1,Tc=2,Lf=3200,If=3201,qu=0,kf=1,xi="",Rt="srgb",cn="srgb-linear",xa="linear",vt="srgb",$i=7680,Cl=519,Df=512,Nf=513,Uf=514,Xu=515,Ff=516,Of=517,Bf=518,zf=519,Ec=35044,Ha=35048,Pl="300 es",Qn=2e3,Ma=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const tr=Math.PI/180,Ts=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function Vf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hf(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function Gf(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function Wf(i,e=1){return e-Math.abs($c(i,e*2)-e)}function qf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kf(i,e){return i+Math.random()*(e-i)}function Yf(i){return i*(.5-Math.random())}function jf(i){i!==void 0&&(Ll=i);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $f(i){return i*tr}function Zf(i){return i*Ts}function Jf(i){return(i&i-1)===0&&i!==0}function ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wi={DEG2RAD:tr,RAD2DEG:Ts,generateUUID:Fn,clamp:st,euclideanModulo:$c,mapLinear:Vf,inverseLerp:Hf,lerp:nr,damp:Gf,pingpong:Wf,smoothstep:qf,smootherstep:Xf,randInt:Qf,randFloat:Kf,randFloatSpread:Yf,seededRandom:jf,degToRad:$f,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:ep,floorPowerOfTwo:tp,setQuaternionFromProperEuler:np,normalize:ft,denormalize:kn};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==m){let g=1-o;const p=c*f+l*d+u*m+h*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),w=Math.atan2(S,p*y);g=Math.sin(g*w)/S,o=Math.sin(o*w)/S}const _=o*y;if(c=c*g+f*_,l=l*g+d*_,u=u*g+m*_,h=h*g+v*_,g===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-o*d,e[t+2]=l*m+u*d+o*f-c*h,e[t+3]=u*m-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new F,Il=new Mt;class Je{constructor(e,t,n,s,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],y=s[1],x=s[4],_=s[7],S=s[2],w=s[5],E=s[8];return r[0]=a*v+o*y+c*S,r[3]=a*g+o*x+c*w,r[6]=a*p+o*_+c*E,r[1]=l*v+u*y+h*S,r[4]=l*g+u*x+h*w,r[7]=l*p+u*_+h*E,r[2]=f*v+d*y+m*S,r[5]=f*g+d*x+m*w,r[8]=f*p+d*_+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(s*l-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Je;function Qu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=fr("canvas");return i.style.display="block",i}const kl={};function pr(i){i in kl||(kl[i]=!0,console.warn(i))}function sp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Dl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){const i={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cn]:{primaries:e,whitePoint:n,transfer:xa,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const ct=rp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=fr("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let op=0;class Zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ap.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;const Xa=new F;class Ot extends Ps{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Mi,s=Mi,r=_n,a=Xn,o=En,c=Yn,l=Ot.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Fn(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Nu;Ot.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(d+1)/2,S=(p+1)/2,w=(u+f)/4,E=(h+v)/4,L=(m+g)/4;return x>_&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=E/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=L/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lp extends Ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ot(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends lp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Sr.subVectors(this.max,Fs),Ji.subVectors(e.a,Fs),es.subVectors(e.b,Fs),ts.subVectors(e.c,Fs),ui.subVectors(es,Ji),di.subVectors(ts,es),Ci.subVectors(Ji,ts);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ci.z,Ci.y,ui.z,0,-ui.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!Qa(t,Ji,es,ts,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Ji,es,ts,Sr))?!1:(wr.crossVectors(ui,di),t=[wr.x,wr.y,wr.z],Qa(t,Ji,es,ts,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,br=new hi,Ji=new F,es=new F,ts=new F,ui=new F,di=new F,Ci=new F,Fs=new F,Sr=new F,wr=new F,Pi=new F;function Qa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const up=new hi,Os=new F,Ka=new F;class $n{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):up.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Ka)),this.expandByPoint(Os.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new F,Ya=new F,Tr=new F,fi=new F,ja=new F,Er=new F,$a=new F;class Pa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ya.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=fi.dot(this.direction),c=-fi.dot(Tr),l=fi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*c-o,f=a*o-c,m=r*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ya).addScaledVector(Tr,f),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){ja.subVectors(t,e),Er.subVectors(n,e),$a.crossVectors(ja,Er);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(Er.crossVectors(fi,Er));if(c<0)return null;const l=o*this.direction.dot(ja.cross(fi));if(l<0||c+l>a)return null;const u=-o*fi.dot($a);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g)}set(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,fp)}lookAt(e,t,n){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),pi.crossVectors(n,gn),pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),pi.crossVectors(n,gn)),pi.normalize(),Ar.crossVectors(gn,pi),s[0]=pi.x,s[4]=Ar.x,s[8]=gn.x,s[1]=pi.y,s[5]=Ar.y,s[9]=gn.y,s[2]=pi.z,s[6]=Ar.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],_=n[11],S=n[15],w=s[0],E=s[4],L=s[8],M=s[12],b=s[1],C=s[5],k=s[9],D=s[13],V=s[2],N=s[6],O=s[10],W=s[14],B=s[3],j=s[7],J=s[11],pe=s[15];return r[0]=a*w+o*b+c*V+l*B,r[4]=a*E+o*C+c*N+l*j,r[8]=a*L+o*k+c*O+l*J,r[12]=a*M+o*D+c*W+l*pe,r[1]=u*w+h*b+f*V+d*B,r[5]=u*E+h*C+f*N+d*j,r[9]=u*L+h*k+f*O+d*J,r[13]=u*M+h*D+f*W+d*pe,r[2]=m*w+v*b+g*V+p*B,r[6]=m*E+v*C+g*N+p*j,r[10]=m*L+v*k+g*O+p*J,r[14]=m*M+v*D+g*W+p*pe,r[3]=y*w+x*b+_*V+S*B,r[7]=y*E+x*C+_*N+S*j,r[11]=y*L+x*k+_*O+S*J,r[15]=y*M+x*D+_*W+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*d-n*c*d)+v*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+g*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=h*g*l-v*f*l+v*c*d-o*g*d-h*c*p+o*f*p,x=m*f*l-u*g*l-m*c*d+a*g*d+u*c*p-a*f*p,_=u*v*l-m*h*l+m*o*d-a*v*d-u*o*p+a*h*p,S=m*h*c-u*v*c-m*o*f+a*v*f+u*o*g-a*h*g,w=t*y+n*x+s*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(v*f*r-h*g*r-v*s*d+n*g*d+h*s*p-n*f*p)*E,e[2]=(o*g*r-v*c*r+v*s*l-n*g*l-o*s*p+n*c*p)*E,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*d-n*c*d)*E,e[4]=x*E,e[5]=(u*g*r-m*f*r+m*s*d-t*g*d-u*s*p+t*f*p)*E,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*E,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*d+t*c*d)*E,e[8]=_*E,e[9]=(m*h*r-u*v*r-m*n*d+t*v*d+u*n*p-t*h*p)*E,e[10]=(a*v*r-m*o*r+m*n*l-t*v*l-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*E,e[12]=S*E,e[13]=(u*v*s-m*h*s+m*n*f-t*v*f-u*n*g+t*h*g)*E,e[14]=(m*o*s-a*v*s-m*n*c+t*v*c+a*n*g-t*o*g)*E,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,m=r*h,v=a*u,g=a*h,p=o*h,y=c*l,x=c*u,_=c*h,S=n.x,w=n.y,E=n.z;return s[0]=(1-(v+p))*S,s[1]=(d+_)*S,s[2]=(m-x)*S,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(m+x)*E,s[9]=(g-y)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const l=1/r,u=1/a,h=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Qn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===Qn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ma)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===Qn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ma)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new F,Pn=new Qe,dp=new F(0,0,0),fp=new F(1,1,1),pi=new F,Ar=new F,gn=new F,Ul=new Qe,Fl=new Mt;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Ol=new F,is=new Mt,ei=new Qe,Rr=new F,Bs=new F,mp=new F,gp=new Mt,Bl=new F(1,0,0),zl=new F(0,1,0),Vl=new F(0,0,1),Hl={type:"added"},vp={type:"removed"},ss={type:"childadded",child:null},Za={type:"childremoved",child:null};class St extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new F,t=new $t,n=new Mt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Je}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,Rr,this.up):ei.lookAt(Rr,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),is.setFromRotationMatrix(ei),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new F(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new F,ti=new F,Ja=new F,ni=new F,rs=new F,as=new F,Gl=new F,eo=new F,to=new F,no=new F,io=new dt,so=new dt,ro=new dt;class Dn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ti.subVectors(n,t),Ja.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(ti),c=Ln.dot(Ja),l=ti.dot(ti),u=ti.dot(Ja),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,m=(a*u-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,n),ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ti.subVectors(e,t),Ln.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),eo.subVectors(e,n);const c=rs.dot(eo),l=as.dot(eo);if(c<=0&&l<=0)return t.copy(n);to.subVectors(e,s);const u=rs.dot(to),h=as.dot(to);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(rs,a);no.subVectors(e,r);const d=rs.dot(no),m=as.dot(no);if(m>=0&&d<=m)return t.copy(r);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(as,o);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Gl.subVectors(r,s),o=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(Gl,o);const p=1/(g+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=$c(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ao(a,r,e+1/3),this.g=ao(a,r,e),this.b=ao(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ct.workingToColorSpace(Yt.copy(this),e),Math.round(st(Yt.r*255,0,255))*65536+Math.round(st(Yt.g*255,0,255))*256+Math.round(st(Yt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Rt){ct.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Cr);const n=nr(mi.h,Cr.h,t),s=nr(mi.s,Cr.s,t),r=nr(mi.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new qe;qe.NAMES=ju;let _p=0;class Kn extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=_s,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Vo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qt extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new F,Pr=new et;let yp=0;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class $u extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xp=0;const Mn=new Qe,oo=new St,os=new F,vn=new hi,zs=new hi,Vt=new F;class Nt extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?Zu:$u)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(vn.min,zs.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,zs.max),vn.expandByPoint(Vt)):(vn.expandByPoint(zs.min),vn.expandByPoint(zs.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),Vt.add(os)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new F,c[L]=new F;const l=new F,u=new F,h=new F,f=new et,d=new et,m=new et,v=new F,g=new F;function p(L,M,b){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(C),o[L].add(v),o[M].add(v),o[b].add(v),c[L].add(g),c[M].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,M=y.length;L<M;++L){const b=y[L],C=b.start,k=b.count;for(let D=C,V=C+k;D<V;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new F,_=new F,S=new F,w=new F;function E(L){S.fromBufferAttribute(s,L),w.copy(S);const M=o[L];x.copy(M),x.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(w,M);const C=_.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,C)}for(let L=0,M=y.length;L<M;++L){const b=y[L],C=b.start,k=b.count;for(let D=C,V=C+k;D<V;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Qe,Li=new Pa,Lr=new $n,ql=new F,Ir=new F,kr=new F,Dr=new F,co=new F,Nr=new F,Xl=new F,Ur=new F;class nt extends St{constructor(e=new Nt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(co.fromBufferAttribute(h,e),a?Nr.addScaledVector(co,u):Nr.addScaledVector(co.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Lr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Lr,ql)===null||Li.origin.distanceToSquared(ql)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,S=x;_<S;_+=3){const w=o.getX(_),E=o.getX(_+1),L=o.getX(_+2);s=Fr(this,p,e,n,l,u,h,w,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);s=Fr(this,a,e,n,l,u,h,y,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,S=x;_<S;_+=3){const w=_,E=_+1,L=_+2;s=Fr(this,p,e,n,l,u,h,w,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const y=g,x=g+1,_=g+2;s=Fr(this,a,e,n,l,u,h,y,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Mp(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===li,o),c===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,kr),i.getVertexPosition(l,Dr);const u=Mp(i,e,t,n,Ir,kr,Dr,Xl);if(u){const h=new F;Dn.getBarycoord(Xl,Ir,kr,Dr,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,c,l,h,new et)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,c,l,h,new et)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new F,materialIndex:0};Dn.getNormal(Ir,kr,Dr,f.normal),u.face=f,u.barycoord=h}return u}class Ft extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function m(v,g,p,y,x,_,S,w,E,L,M){const b=_/E,C=S/L,k=_/2,D=S/2,V=w/2,N=E+1,O=L+1;let W=0,B=0;const j=new F;for(let J=0;J<O;J++){const pe=J*C-D;for(let be=0;be<N;be++){const Ee=be*b-k;j[v]=Ee*y,j[g]=pe*x,j[p]=V,l.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(be/E),h.push(1-J/L),W+=1}}for(let J=0;J<L;J++)for(let pe=0;pe<E;pe++){const be=f+pe+N*J,Ee=f+pe+N*(J+1),He=f+(pe+1)+N*(J+1),Ue=f+(pe+1)+N*J;c.push(be,Ee,Ue),c.push(Ee,He,Ue),B+=6}o.addGroup(d,B,M),d+=B,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Es(i[t]);for(const s in n)e[s]=n[s]}return e}function bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ed={clone:Es,merge:nn};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class td extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new F,Ql=new et,Kl=new et;class sn extends td{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Ql,Kl),t.subVectors(Kl,Ql)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,ls=1;class Tp extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(cs,ls,e,t);s.layers=this.layers,this.add(s);const r=new sn(cs,ls,e,t);r.layers=this.layers,this.add(r);const a=new sn(cs,ls,e,t);a.layers=this.layers,this.add(a);const o=new sn(cs,ls,e,t);o.layers=this.layers,this.add(o);const c=new sn(cs,ls,e,t);c.layers=this.layers,this.add(c);const l=new sn(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class nd extends Ot{constructor(e=[],t=Ss,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:bi});r.uniforms.tEquirect.value=t;const a=new nt(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=_n),new Tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class dn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new Jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yl extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new F;class el{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new el(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jl=new F,$l=new dt,Zl=new dt,Cp=new F,Jl=new Qe,Or=new F,ho=new $n,eh=new Qe,uo=new Pa;class Pp extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(s),e.ray.intersectsSphere(ho)!==!1&&(eh.copy(s).invert(),uo.copy(e.ray).applyMatrix4(eh),!(this.boundingBox!==null&&uo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;$l.fromBufferAttribute(s.attributes.skinIndex,e),Zl.fromBufferAttribute(s.attributes.skinWeight,e),jl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Zl.getComponent(r);if(a!==0){const o=$l.getComponent(r);Jl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cp.copy(jl).applyMatrix4(Jl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class id extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sd extends Ot{constructor(e=null,t=1,n=1,s,r,a,o,c,l=an,u=an,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new Qe,Lp=new Qe;class tl{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Lp;th.multiplyMatrices(o,t[r]),th.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sd(t,e,e,En,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new id),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ac extends mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Qe,nh=new Qe,Br=[],ih=new hi,Ip=new Qe,Vs=new nt,Hs=new $n;class Hn extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),ih.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(ih)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Hs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),nh.multiplyMatrices(n,hs),Vs.matrixWorld=nh,Vs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=r,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sd(new Float32Array(s*this.count),s,this.count,Qc,Un));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fo=new F,kp=new F,Dp=new Je;class Fi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fo.subVectors(n,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new $n,Np=new et(.5,.5),zr=new F;class nl{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],y=r[12],x=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-a,d-u,p-m,S-y).normalize(),s[1].setComponents(l+a,d+u,p+m,S+y).normalize(),s[2].setComponents(l+o,d+h,p+v,S+x).normalize(),s[3].setComponents(l-o,d-h,p-v,S-x).normalize(),n)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,d-f,p-g,S-_).normalize();else if(s[4].setComponents(l-c,d-f,p-g,S-_).normalize(),t===Qn)s[5].setComponents(l+c,d+f,p+g,S+_).normalize();else if(t===Ma)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Np.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rd extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new F,Sa=new F,sh=new Qe,Gs=new Pa,Vr=new $n,po=new F,rh=new F;class il extends St{constructor(e=new Nt,t=new rd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ba.fromBufferAttribute(t,s-1),Sa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Sa);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;sh.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(sh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=u.getX(v),y=u.getX(v+1),x=Hr(this,e,Gs,c,p,y,v);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=Hr(this,e,Gs,c,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=Hr(this,e,Gs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Hr(this,e,Gs,c,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ba.fromBufferAttribute(o,s),Sa.fromBufferAttribute(o,r),t.distanceSqToSegment(ba,Sa,po,rh)>n)return;po.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(po);if(!(l<e.near||l>e.far))return{distance:l,point:rh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ah=new F,oh=new F;class Up extends il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ah.fromBufferAttribute(t,s),oh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ah.distanceTo(oh);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fp extends il{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ad extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ch=new Qe,Rc=new Pa,Gr=new $n,Wr=new F;class od extends St{constructor(e=new Nt,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;ch.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,v=d;m<v;m++){const g=l.getX(m);Wr.fromBufferAttribute(h,g),lh(Wr,g,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,v=d;m<v;m++)Wr.fromBufferAttribute(h,m),lh(Wr,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(i,e,t,n,s,r,a){const o=Rc.distanceSqToPoint(i);if(o<t){const c=new F;Rc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class La extends Ot{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cd extends Ot{constructor(e,t,n=Xi,s,r,a,o=an,c=an,l,u=lr,h=1){if(u!==lr&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ld extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new F,u=new et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(o,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qn extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function y(){const _=new F,S=new F;let w=0;const E=(t-e)/n;for(let L=0;L<=r;L++){const M=[],b=L/r,C=b*(t-e)+e;for(let k=0;k<=s;k++){const D=k/s,V=D*c+o,N=Math.sin(V),O=Math.cos(V);S.x=C*N,S.y=-b*n+g,S.z=C*O,h.push(S.x,S.y,S.z),_.set(N,E,O).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-b),M.push(m++)}v.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const b=v[M][L],C=v[M+1][L],k=v[M+1][L+1],D=v[M][L+1];(e>0||M!==0)&&(u.push(b,C,D),w+=3),(t>0||M!==r-1)&&(u.push(C,k,D),w+=3)}l.addGroup(p,w,0),p+=w}function x(_){const S=m,w=new et,E=new F;let L=0;const M=_===!0?e:t,b=_===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const C=m;for(let k=0;k<=s;k++){const V=k/s*c+o,N=Math.cos(V),O=Math.sin(V);E.x=M*O,E.y=g*b,E.z=M*N,h.push(E.x,E.y,E.z),f.push(0,b,0),w.x=N*.5+.5,w.y=O*.5*b+.5,d.push(w.x,w.y),m++}for(let k=0;k<s;k++){const D=S+k,V=C+k;_===!0?u.push(V,V+1,D):u.push(V+1,V,D),L+=3}l.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rl extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new F,_=new F,S=new F;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],_),d(t[w+2],S),c(x,_,S,y)}function c(y,x,_,S){const w=S+1,E=[];for(let L=0;L<=w;L++){E[L]=[];const M=y.clone().lerp(_,L/w),b=x.clone().lerp(_,L/w),C=w-L;for(let k=0;k<=C;k++)k===0&&L===w?E[L][k]=M:E[L][k]=M.clone().lerp(b,k/C)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const b=Math.floor(M/2);M%2===0?(f(E[L][b+1]),f(E[L+1][b]),f(E[L][b])):(f(E[L][b+1]),f(E[L+1][b+1]),f(E[L+1][b]))}}function l(y){const x=new F;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const y=new F;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=g(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(_,1-S)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],S=a[y+4],w=Math.max(x,_,S),E=Math.min(x,_,S);w>.9&&E<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){const y=new F,x=new F,_=new F,S=new F,w=new et,E=new et,L=new et;for(let M=0,b=0;M<r.length;M+=9,b+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),w.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),S.copy(y).add(x).add(_).divideScalar(3);const C=g(S);v(w,b+0,y,C),v(E,b+2,x,C),v(L,b+4,_,C)}}function v(y,x,_,S){S<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.vertices,e.indices,e.radius,e.details)}}class al extends rl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new al(e.radius,e.detail)}}class An extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const y=p*f-a;for(let x=0;x<l;x++){const _=x*h-r;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,_=y+l*(p+1),S=y+1+l*(p+1),w=y+1+l*p;d.push(x,_,w),d.push(_,S,w)}this.setIndex(d),this.setAttribute("position",new It(m,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ut extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Op extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bp extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function hd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class yr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hp extends yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=e,o=2*t-n;break;case Rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,c=2*n-t;break;case Rl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+y*a[l+S]+x*a[c+S]+_*a[h+S];return r}}class Gp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Wp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&zp(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=dr;class Ls extends Bn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ur;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ud extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}ud.prototype.ValueTypeName="color";class As extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}As.prototype.ValueTypeName="number";class qp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Mt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Rs extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}}Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Bn{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ur;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}Cs.prototype.ValueTypeName="vector";class Xp{constructor(e="",t=-1,n=[],s=Cf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Kp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Vp(c);c=hh(c,1,u),l=hh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new As(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const g=[],p=[];hd(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){const x=f[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new As(".morphTargetInfluence["+v+"]",g,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Cs,d+".position",f,"pos",s),n(Rs,d+".quaternion",f,"rot",s),n(Cs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Qp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return ud;case"quaternion":return Rs;case"bool":case"boolean":return Ls;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Kp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qp(i.type);if(i.times===void 0){const t=[],n=[];hd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jp=new Yp;class ks{constructor(e){this.manager=e!==void 0?e:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class $p extends Error{constructor(e,t){super(e),this.response=t}}class dd extends ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ii[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let w=0,E=u.length;w<E;w++){const L=u[w];L.onProgress&&L.onProgress(S)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new $p(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{oi.add(`file:${e}`,l);const u=ii[e];delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const us=new WeakMap;class Zp extends ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=us.get(a);h===void 0&&(h=[],us.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=fr("img");function c(){u(),t&&t(this);const h=us.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}us.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),oi.remove(`image:${e}`);const f=us.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class fd extends ks{constructor(e){super(e)}load(e,t,n,s){const r=new Ot,a=new Zp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ia extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Jp extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mo=new Qe,uh=new F,dh=new F;class ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e0 extends ol{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class t0 extends Ia{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new e0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fh=new Qe,Ws=new F,go=new F;class n0 extends ol{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),go.copy(n.position),go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(go),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,n.coordinateSystem,n.reversedDepth)}}class i0 extends Ia{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new n0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cl extends td{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class s0 extends ol{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const vo=new WeakMap;class r0 extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(vo.has(a)===!0)s&&s(vo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vo.set(c,l),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class a0 extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ll="\\[\\]\\.:\\/",o0=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",c0="[^"+ll.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",hl),h0=/(WCOD+)?/.source.replace("WCOD",c0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),f0=new RegExp("^"+l0+h0+u0+d0+"$"),p0=["material","materials","bones","map"];class m0{constructor(e,t,n){const s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(e){const t=f0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=m0;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ph(i,e,t,n){const s=g0(n);switch(t){case Vu:return i*e;case Qc:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case Gu:return i*e*2/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case Hu:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case ec:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _c:case yc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(i){switch(i){case Yn:case Fu:return{byteLength:1,components:1};case or:case Ou:case _r:return{byteLength:2,components:1};case qc:case Xc:return{byteLength:2,components:4};case Xi:case Wc:case Un:return{byteLength:4,components:1};case Bu:case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function md(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function v0(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,vm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Yg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:_0,alphahash_pars_fragment:y0,alphamap_fragment:x0,alphamap_pars_fragment:M0,alphatest_fragment:b0,alphatest_pars_fragment:S0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:E0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:I0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:z0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:q0,emissivemap_fragment:X0,emissivemap_pars_fragment:Q0,colorspace_fragment:K0,colorspace_pars_fragment:Y0,envmap_fragment:j0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:tm,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:vm,lights_fragment_maps:_m,lights_fragment_end:ym,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Sm,map_fragment:wm,map_pars_fragment:Tm,map_particle_fragment:Em,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Im,morphtarget_pars_vertex:km,morphtarget_vertex:Dm,normal_fragment_begin:Nm,normal_fragment_maps:Um,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:qm,packing:Xm,premultiplied_alpha_fragment:Qm,project_vertex:Km,dithering_fragment:Ym,dithering_pars_fragment:jm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:og,specularmap_pars_fragment:cg,tonemapping_fragment:lg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:vg,background_frag:_g,backgroundCube_vert:yg,backgroundCube_frag:xg,cube_vert:Mg,cube_frag:bg,depth_vert:Sg,depth_frag:wg,distanceRGBA_vert:Tg,distanceRGBA_frag:Eg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Ig,meshlambert_vert:kg,meshlambert_frag:Dg,meshmatcap_vert:Ng,meshmatcap_frag:Ug,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:zg,meshphysical_vert:Vg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:qg,points_frag:Xg,shadow_vert:Qg,shadow_frag:Kg,sprite_vert:Yg,sprite_frag:jg},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wn={basic:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:nn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:nn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:nn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:nn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:nn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:nn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:nn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:nn([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Wn.physical={uniforms:nn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Xr={r:0,b:0,g:0},ki=new $t,$g=new Qe;function Zg(i,e,t,n,s,r,a){const o=new qe(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const S=m(x);S===null?p(o,c):S&&S.isColor&&(p(S,1),_=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){const S=m(_);S&&(S.isCubeTexture||S.mapping===Ca)?(u===void 0&&(u=new nt(new Ft(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Es(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(ki)),u.material.toneMapped=ct.getTransfer(S.colorSpace)!==vt,(h!==S||f!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nt(new An(2,2),new jn({name:"BackgroundMaterial",uniforms:Es(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ct.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Xr,Ju(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,_,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:g,dispose:y}}function Jg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,C,k,D,V){let N=!1;const O=h(D,k,C);r!==O&&(r=O,l(r.object)),N=d(b,D,k,V),N&&m(b,D,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(b,C,k,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,C,k){const D=k.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let N=V[C.id];N===void 0&&(N={},V[C.id]=N);let O=N[D];return O===void 0&&(O=f(c()),N[D]=O),O}function f(b){const C=[],k=[],D=[];for(let V=0;V<t;V++)C[V]=0,k[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,C,k,D){const V=r.attributes,N=C.attributes;let O=0;const W=k.getAttributes();for(const B in W)if(W[B].location>=0){const J=V[B];let pe=N[B];if(pe===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function m(b,C,k,D){const V={},N=C.attributes;let O=0;const W=k.getAttributes();for(const B in W)if(W[B].location>=0){let J=N[B];J===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),V[B]=pe,O++}r.attributes=V,r.attributesNum=O,r.index=D}function v(){const b=r.newAttributes;for(let C=0,k=b.length;C<k;C++)b[C]=0}function g(b){p(b,0)}function p(b,C){const k=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;k[b]=1,D[b]===0&&(i.enableVertexAttribArray(b),D[b]=1),V[b]!==C&&(i.vertexAttribDivisor(b,C),V[b]=C)}function y(){const b=r.newAttributes,C=r.enabledAttributes;for(let k=0,D=C.length;k<D;k++)C[k]!==b[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function x(b,C,k,D,V,N,O){O===!0?i.vertexAttribIPointer(b,C,k,V,N):i.vertexAttribPointer(b,C,k,D,V,N)}function _(b,C,k,D){v();const V=D.attributes,N=k.getAttributes(),O=C.defaultAttributeValues;for(const W in N){const B=N[W];if(B.location>=0){let j=V[W];if(j===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const J=j.normalized,pe=j.itemSize,be=e.get(j);if(be===void 0)continue;const Ee=be.buffer,He=be.type,Ue=be.bytesPerElement,ee=He===i.INT||He===i.UNSIGNED_INT||j.gpuType===Wc;if(j.isInterleavedBufferAttribute){const he=j.data,Me=he.stride,ze=j.offset;if(he.isInstancedInterleavedBuffer){for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie,he.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<B.locationSize;ie++)g(B.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ie=0;ie<B.locationSize;ie++)x(B.location+ie,pe/B.locationSize,He,J,Me*Ue,(ze+pe/B.locationSize*ie)*Ue,ee)}else{if(j.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)p(B.location+he,j.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let he=0;he<B.locationSize;he++)g(B.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let he=0;he<B.locationSize;he++)x(B.location+he,pe/B.locationSize,He,J,pe*Ue,pe/B.locationSize*he*Ue,ee)}}else if(O!==void 0){const J=O[W];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}y()}function S(){L();for(const b in n){const C=n[b];for(const k in C){const D=C[k];for(const V in D)u(D[V].object),delete D[V];delete C[k]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const k in C){const D=C[k];for(const V in D)u(D[V].object),delete D[V];delete C[k]}delete n[b.id]}function E(b){for(const C in n){const k=n[C];if(k[b.id]===void 0)continue;const D=k[b.id];for(const V in D)u(D[V].object),delete D[V];delete k[b.id]}}function L(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function e1(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function t1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Un&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:S,maxSamples:w}}function n1(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fi,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;c.value=_,_=u(m,f,x,d);for(let S=0;S!==x;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function i1(i){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Ss:o===jo&&(a.mapping=ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yo||o===jo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ep(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const vs=4,mh=[.125,.215,.35,.446,.526,.582],zi=20,_o=new cl,gh=new qe;let yo=null,xo=0,Mo=0,bo=!1;const Oi=(1+Math.sqrt(5))/2,ds=1/Oi,vh=[new F(-Oi,ds,0),new F(Oi,ds,0),new F(-ds,0,Oi),new F(ds,0,Oi),new F(0,Oi,-ds),new F(0,Oi,ds),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],s1=new F;class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=s1}=r;yo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo,xo,Mo),this._renderer.xr.enabled=bo,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:_r,format:En,colorSpace:cn,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(r)),this._blurMaterial=a1(r,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,s,r){const c=new sn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(gh),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new Qt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new nt(new Ft,v);let p=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(gh),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const S=this._cubeSize;Qr(s,_*S,x>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ss||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let y=0;for(let E=0;E<zi;++E){const L=E/v,M=Math.exp(-L*L/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const _=this._sizeLods[s],S=3*_*(s>x-vs?s-x+vs:0),w=4*(this._cubeSize-_);Qr(t,S,w,3*_,2*_),c.setRenderTarget(t),c.render(h,_o)}}function r1(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+mh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-vs?c=mh[a-i+vs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),x=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(M,v*m*w),x.set(f,g*m*w);const b=[w,w,w,w,w,w];_.set(b,p*m*w)}const S=new Nt;S.setAttribute("position",new mt(y,v)),S.setAttribute("uv",new mt(x,g)),S.setAttribute("faceIndex",new mt(_,p)),e.push(S),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function a1(i,e,t){const n=new Float32Array(zi),s=new F(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function yh(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function xh(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function o1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yo||c===jo,u=c===Ss||c===ws;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Cc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Cc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function c1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function l1(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const S=y[x+0],w=y[x+1],E=y[x+2];f.push(S,w,w,E,E,S)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const S=x+0,w=x+1,E=x+2;f.push(S,w,w,E,E,S)}}else return;const g=new(Qu(f)?Zu:$u)(f,1);g.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function h1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function u1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d1(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*S*4*h),E=new Ku(w,_,S,h);E.type=Un,E.needsUpdate=!0;const L=x*4;for(let b=0;b<h;b++){const C=g[b],k=p[b],D=y[b],V=_*S*4*b;for(let N=0;N<C.count;N++){const O=N*L;d===!0&&(s.fromBufferAttribute(C,N),w[V+O+0]=s.x,w[V+O+1]=s.y,w[V+O+2]=s.z,w[V+O+3]=0),m===!0&&(s.fromBufferAttribute(k,N),w[V+O+4]=s.x,w[V+O+5]=s.y,w[V+O+6]=s.z,w[V+O+7]=0),v===!0&&(s.fromBufferAttribute(D,N),w[V+O+8]=s.x,w[V+O+9]=s.y,w[V+O+10]=s.z,w[V+O+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new et(_,S)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function f1(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const gd=new Ot,Mh=new cd(1,1),vd=new Ku,_d=new hp,yd=new nd,bh=[],Sh=[],wh=new Float32Array(16),Th=new Float32Array(9),Eh=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ka(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function _1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),zt(t,n)}}function y1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),zt(t,n)}}function x1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),zt(t,n)}}function M1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function T1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function C1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=Xu,r=Mh):r=gd,t.setTexture2D(e||r,s)}function P1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_d,s)}function L1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yd,s)}function I1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vd,s)}function k1(i){switch(i){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return _1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return S1;case 35669:case 35673:return w1;case 5125:return T1;case 36294:return E1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return I1}}function D1(i,e){i.uniform1fv(this.addr,e)}function N1(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function U1(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function F1(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function O1(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B1(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z1(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V1(i,e){i.uniform1iv(this.addr,e)}function H1(i,e){i.uniform2iv(this.addr,e)}function G1(i,e){i.uniform3iv(this.addr,e)}function W1(i,e){i.uniform4iv(this.addr,e)}function q1(i,e){i.uniform1uiv(this.addr,e)}function X1(i,e){i.uniform2uiv(this.addr,e)}function Q1(i,e){i.uniform3uiv(this.addr,e)}function K1(i,e){i.uniform4uiv(this.addr,e)}function Y1(i,e,t){const n=this.cache,s=e.length,r=ka(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gd,r[a])}function j1(i,e,t){const n=this.cache,s=e.length,r=ka(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_d,r[a])}function $1(i,e,t){const n=this.cache,s=e.length,r=ka(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yd,r[a])}function Z1(i,e,t){const n=this.cache,s=e.length,r=ka(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vd,r[a])}function J1(i){switch(i){case 5126:return D1;case 35664:return N1;case 35665:return U1;case 35666:return F1;case 35674:return O1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return V1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return q1;case 36294:return X1;case 36295:return Q1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return Z1}}class e9{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k1(t.type)}}class t9{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}}class n9{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Ah(i,e){i.seq.push(e),i.map[e.id]=e}function i9(i,e,t){const n=i.name,s=n.length;for(So.lastIndex=0;;){const r=So.exec(n),a=So.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ah(t,l===void 0?new e9(o,i,e):new t9(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new n9(o),Ah(t,h)),t=h}}}class ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);i9(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Rh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const s9=37297;let r9=0;function a9(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ch=new Je;function o9(i){ct._getMatrix(Ch,ct.workingColorSpace,i);const e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case xa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ph(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a9(i.getShaderSource(e),o)}else return r}function c9(i,e){const t=o9(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l9(i,e){let t;switch(e){case bf:t="Linear";break;case Sf:t="Reinhard";break;case wf:t="Cineon";break;case Du:t="ACESFilmic";break;case Ef:t="AgX";break;case Af:t="Neutral";break;case Tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new F;function h9(){ct.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u9(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function d9(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f9(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function er(i){return i!==""}function Lh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p9=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(p9,g9)}const m9=new Map;function g9(i,e){let t=tt[e];if(t===void 0){const n=m9.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const v9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(v9,_9)}function _9(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function y9(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function x9(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case ws:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M9(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function b9(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ku:e="ENVMAP_BLENDING_MULTIPLY";break;case xf:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function S9(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w9(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=y9(t),l=x9(t),u=M9(t),h=b9(t),f=S9(t),d=u9(t),m=d9(r),v=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(er).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(er).join(`
`),p.length>0&&(p+=`
`)):(g=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?tt.tonemapping_pars_fragment:"",t.toneMapping!==Si?l9("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,c9("linearToOutputTexel",t.outputColorSpace),h9(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=Pc(a),a=Lh(a,t),a=Ih(a,t),o=Pc(o),o=Lh(o,t),o=Ih(o,t),a=kh(a),o=kh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+a,_=y+p+o,S=Rh(s,s.VERTEX_SHADER,x),w=Rh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(w)||"",N=k.trim(),O=D.trim(),W=V.trim();let B=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,w);else{const J=Ph(s,S,"vertex"),pe=Ph(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+J+`
`+pe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(j=!1);j&&(C.diagnostics={runnable:B,programLog:N,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(w),L=new ma(s,v),M=f9(s,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,s9)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r9++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let T9=0;class E9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A9(e),t.set(e,n)),n}}class A9{constructor(e){this.id=T9++,this.code=e,this.usedTimes=0}}function R9(i,e,t,n,s,r,a){const o=new Yu,c=new E9,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,C,k,D){const V=k.fog,N=D.geometry,O=M.isMeshStandardMaterial?k.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),B=W&&W.mapping===Ca?W.image.height:null,j=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=J!==void 0?J.length:0;let be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Ee,He,Ue,ee;if(j){const ot=Wn[j];Ee=ot.vertexShader,He=ot.fragmentShader}else Ee=M.vertexShader,He=M.fragmentShader,c.update(M),Ue=c.getVertexShaderID(M),ee=c.getFragmentShaderID(M);const he=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,ie=D.isBatchedMesh===!0,de=!!M.map,ae=!!M.matcap,I=!!W,Re=!!M.aoMap,Te=!!M.lightMap,ve=!!M.bumpMap,re=!!M.normalMap,Oe=!!M.displacementMap,fe=!!M.emissiveMap,_e=!!M.metalnessMap,Ke=!!M.roughnessMap,je=M.anisotropy>0,P=M.clearcoat>0,T=M.dispersion>0,Q=M.iridescence>0,U=M.sheen>0,H=M.transmission>0,z=je&&!!M.anisotropyMap,K=P&&!!M.clearcoatMap,te=P&&!!M.clearcoatNormalMap,ce=P&&!!M.clearcoatRoughnessMap,oe=Q&&!!M.iridescenceMap,Y=Q&&!!M.iridescenceThicknessMap,le=U&&!!M.sheenColorMap,me=U&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Se=!!M.specularColorMap,Ge=!!M.specularIntensityMap,G=H&&!!M.transmissionMap,ye=H&&!!M.thicknessMap,we=!!M.gradientMap,Le=!!M.alphaMap,ge=M.alphaTest>0,ue=!!M.alphaHash,ke=!!M.extensions;let $e=Si;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&($e=i.toneMapping);const ht={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Ee,fragmentShader:He,defines:M.defines,customVertexShaderID:Ue,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ie,batchingColor:ie&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:cn,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:ae,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:B,aoMap:Re,lightMap:Te,bumpMap:ve,normalMap:re,displacementMap:f&&Oe,emissiveMap:fe,normalMapObjectSpace:re&&M.normalMapType===kf,normalMapTangentSpace:re&&M.normalMapType===qu,metalnessMap:_e,roughnessMap:Ke,anisotropy:je,anisotropyMap:z,clearcoat:P,clearcoatMap:K,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:T,iridescence:Q,iridescenceMap:oe,iridescenceThicknessMap:Y,sheen:U,sheenColorMap:le,sheenRoughnessMap:me,specularMap:Ae,specularColorMap:Se,specularIntensityMap:Ge,transmission:H,transmissionMap:G,thicknessMap:ye,gradientMap:we,opaque:M.transparent===!1&&M.blending===_s&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:ue,combine:M.combine,mapUv:de&&v(M.map.channel),aoMapUv:Re&&v(M.aoMap.channel),lightMapUv:Te&&v(M.lightMap.channel),bumpMapUv:ve&&v(M.bumpMap.channel),normalMapUv:re&&v(M.normalMap.channel),displacementMapUv:Oe&&v(M.displacementMap.channel),emissiveMapUv:fe&&v(M.emissiveMap.channel),metalnessMapUv:_e&&v(M.metalnessMap.channel),roughnessMapUv:Ke&&v(M.roughnessMap.channel),anisotropyMapUv:z&&v(M.anisotropyMap.channel),clearcoatMapUv:K&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(M.sheenRoughnessMap.channel),specularMapUv:Ae&&v(M.specularMap.channel),specularColorMapUv:Se&&v(M.specularColorMap.channel),specularIntensityMapUv:Ge&&v(M.specularIntensityMap.channel),transmissionMapUv:G&&v(M.transmissionMap.channel),thicknessMapUv:ye&&v(M.thicknessMap.channel),alphaMapUv:Le&&v(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(re||je),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(de||Le),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&ct.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const b=m[M.type];let C;if(b){const k=Wn[b];C=ed.clone(k.uniforms)}else C=M.uniforms;return C}function S(M,b){let C;for(let k=0,D=u.length;k<D;k++){const V=u[k];if(V.cacheKey===b){C=V,++C.usedTimes;break}}return C===void 0&&(C=new w9(i,b,M,r),u.push(C)),C}function w(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:L}}function C9(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function P9(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,f,d,m,v,g){const p=a(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,m,v,g){const p=a(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||P9),n.length>1&&n.sort(f||Nh),s.length>1&&s.sort(f||Nh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function L9(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function I9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new qe};break;case"SpotLight":t={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function k9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let D9=0;function N9(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U9(i){const e=new I9,t=k9(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new Qe,a=new Qe;function o(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,S=0,w=0,E=0;l.sort(N9);for(let M=0,b=l.length;M<b;M++){const C=l[M],k=C.color,D=C.intensity,V=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*D,h+=k.g*D,f+=k.b*D;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],D);E++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,B=t.get(C);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=O,d++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(k).multiplyScalar(D),O.distance=V,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[v]=O;const W=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,W.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=W.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=N,_++}v++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(k).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=O,g++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const W=C.shadow,B=t.get(C);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=C.shadow.matrix,x++}n.point[m]=O,m++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(D),O.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=O,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==_||L.numSpotMaps!==S||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,L.directionalLength=d,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=_,L.numSpotMaps=S,L.numLightProbes=E,n.version=D9++)}function c(l,u){let h=0,f=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Fh(i){const e=new U9(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function F9(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Fh(i),e.set(s,[o])):r>=a.length?(o=new Fh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const O9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B9=`uniform sampler2D shadow_pass;
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
}`;function z9(i,e,t){let n=new nl;const s=new et,r=new et,a=new dt,o=new Op({depthPacking:If}),c=new Bp,l={},u=t.maxTextureSize,h={[li]:rn,[rn]:li,[Wt]:Wt},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:O9,fragmentShader:B9}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Nt;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(w,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(bi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const D=p!==ai&&this.type===ai,V=p===ai&&this.type!==ai;for(let N=0,O=w.length;N<O;N++){const W=w[N],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();if(s.multiply(j),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||D===!0||V===!0){const pe=this.type!==ai?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(s.x,s.y,pe),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const J=B.getViewportCount();for(let pe=0;pe<J;pe++){const be=B.getViewport(pe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),k.viewport(a),B.updateMatrices(W,pe),n=B.getFrustum(),_(E,L,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===ai&&y(B,L),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,b,C)};function y(w,E){const L=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,L,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,L,d,v,null)}function x(w,E,L,M){let b=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const k=b.uuid,D=E.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let N=V[D];N===void 0&&(N=b.clone(),V[D]=N,E.addEventListener("dispose",S)),b=N}if(b.visible=E.visible,b.wireframe=E.wireframe,M===ai?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=L}return b}function _(w,E,L,M,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ai)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const D=e.update(w),V=w.material;if(Array.isArray(V)){const N=D.groups;for(let O=0,W=N.length;O<W;O++){const B=N[O],j=V[B.materialIndex];if(j&&j.visible){const J=x(w,j,M,b);w.onBeforeShadow(i,w,E,L,D,J,B),i.renderBufferDirect(L,null,D,J,w,B),w.onAfterShadow(i,w,E,L,D,J,B)}}}else if(V.visible){const N=x(w,V,M,b);w.onBeforeShadow(i,w,E,L,D,N,null),i.renderBufferDirect(L,null,D,N,w,null),w.onAfterShadow(i,w,E,L,D,N,null)}}const k=w.children;for(let D=0,V=k.length;D<V;D++)_(k[D],E,L,M,b)}function S(w){w.target.removeEventListener("dispose",S);for(const L in l){const M=l[L],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const V9={[Ho]:Go,[Wo]:Qo,[qo]:Ko,[bs]:Xo,[Go]:Ho,[Qo]:Wo,[Ko]:qo,[Xo]:bs};function H9(i,e){function t(){let G=!1;const ye=new dt;let we=null;const Le=new dt(0,0,0,0);return{setMask:function(ge){we!==ge&&!G&&(i.colorMask(ge,ge,ge,ge),we=ge)},setLocked:function(ge){G=ge},setClear:function(ge,ue,ke,$e,ht){ht===!0&&(ge*=$e,ue*=$e,ke*=$e),ye.set(ge,ue,ke,$e),Le.equals(ye)===!1&&(i.clearColor(ge,ue,ke,$e),Le.copy(ye))},reset:function(){G=!1,we=null,Le.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,we=null,Le=null,ge=null;return{setReversed:function(ue){if(ye!==ue){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const $e=ge;ge=null,this.setClear($e)}},getReversed:function(){return ye},setTest:function(ue){ue?he(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ue){we!==ue&&!G&&(i.depthMask(ue),we=ue)},setFunc:function(ue){if(ye&&(ue=V9[ue]),Le!==ue){switch(ue){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ue}},setLocked:function(ue){G=ue},setClear:function(ue){ge!==ue&&(ye&&(ue=1-ue),i.clearDepth(ue),ge=ue)},reset:function(){G=!1,we=null,Le=null,ge=null,ye=!1}}}function s(){let G=!1,ye=null,we=null,Le=null,ge=null,ue=null,ke=null,$e=null,ht=null;return{setTest:function(ot){G||(ot?he(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ot){ye!==ot&&!G&&(i.stencilMask(ot),ye=ot)},setFunc:function(ot,fn,hn){(we!==ot||Le!==fn||ge!==hn)&&(i.stencilFunc(ot,fn,hn),we=ot,Le=fn,ge=hn)},setOp:function(ot,fn,hn){(ue!==ot||ke!==fn||$e!==hn)&&(i.stencilOp(ot,fn,hn),ue=ot,ke=fn,$e=hn)},setLocked:function(ot){G=ot},setClear:function(ot){ht!==ot&&(i.clearStencil(ot),ht=ot)},reset:function(){G=!1,ye=null,we=null,Le=null,ge=null,ue=null,ke=null,$e=null,ht=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,S=null,w=null,E=new qe(0,0,0),L=0,M=!1,b=null,C=null,k=null,D=null,V=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=W>=2);let j=null,J={};const pe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ee=new dt().fromArray(pe),He=new dt().fromArray(be);function Ue(G,ye,we,Le){const ge=new Uint8Array(4),ue=i.createTexture();i.bindTexture(G,ue),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<we;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ye+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ue}const ee={};ee[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(bs),ve(!1),re(bl),he(i.CULL_FACE),Re(bi);function he(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function Me(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function ze(G,ye){return h[G]!==ye?(i.bindFramebuffer(G,ye),h[G]=ye,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function ie(G,ye){let we=d,Le=!1;if(G){we=f.get(ye),we===void 0&&(we=[],f.set(ye,we));const ge=G.textures;if(we.length!==ge.length||we[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,ke=ge.length;ue<ke;ue++)we[ue]=i.COLOR_ATTACHMENT0+ue;we.length=ge.length,Le=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Le=!0);Le&&i.drawBuffers(we)}function de(G){return m!==G?(i.useProgram(G),m=G,!0):!1}const ae={[Bi]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};ae[rf]=i.MIN,ae[af]=i.MAX;const I={[of]:i.ZERO,[cf]:i.ONE,[lf]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(G,ye,we,Le,ge,ue,ke,$e,ht,ot){if(G===bi){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),G!==tf){if(G!==g||ot!==M){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),ot)switch(G){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,x=null,S=null,w=null,E.set(0,0,0),L=0,g=G,M=ot}return}ge=ge||ye,ue=ue||we,ke=ke||Le,(ye!==p||ge!==_)&&(i.blendEquationSeparate(ae[ye],ae[ge]),p=ye,_=ge),(we!==y||Le!==x||ue!==S||ke!==w)&&(i.blendFuncSeparate(I[we],I[Le],I[ue],I[ke]),y=we,x=Le,S=ue,w=ke),($e.equals(E)===!1||ht!==L)&&(i.blendColor($e.r,$e.g,$e.b,ht),E.copy($e),L=ht),g=G,M=!1}function Te(G,ye){G.side===Wt?Me(i.CULL_FACE):he(i.CULL_FACE);let we=G.side===rn;ye&&(we=!we),ve(we),G.blending===_s&&G.transparent===!1?Re(bi):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Le=G.stencilWrite;o.setTest(Le),Le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function re(G){G!==Jd?(he(i.CULL_FACE),G!==C&&(G===bl?i.cullFace(i.BACK):G===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),C=G}function Oe(G){G!==k&&(O&&i.lineWidth(G),k=G)}function fe(G,ye,we){G?(he(i.POLYGON_OFFSET_FILL),(D!==ye||V!==we)&&(i.polygonOffset(ye,we),D=ye,V=we)):Me(i.POLYGON_OFFSET_FILL)}function _e(G){G?he(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ke(G){G===void 0&&(G=i.TEXTURE0+N-1),j!==G&&(i.activeTexture(G),j=G)}function je(G,ye,we){we===void 0&&(j===null?we=i.TEXTURE0+N-1:we=j);let Le=J[we];Le===void 0&&(Le={type:void 0,texture:void 0},J[we]=Le),(Le.type!==G||Le.texture!==ye)&&(j!==we&&(i.activeTexture(we),j=we),i.bindTexture(G,ye||ee[G]),Le.type=G,Le.texture=ye)}function P(){const G=J[j];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(G){Ee.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function me(G){He.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function Ae(G,ye){let we=l.get(ye);we===void 0&&(we=new WeakMap,l.set(ye,we));let Le=we.get(G);Le===void 0&&(Le=i.getUniformBlockIndex(ye,G.name),we.set(G,Le))}function Se(G,ye){const Le=l.get(ye).get(G);c.get(ye)!==Le&&(i.uniformBlockBinding(ye,Le,G.__bindingPointIndex),c.set(ye,Le))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,J={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,S=null,w=null,E=new qe(0,0,0),L=0,M=!1,b=null,C=null,k=null,D=null,V=null,Ee.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Me,bindFramebuffer:ze,drawBuffers:ie,useProgram:de,setBlending:Re,setMaterial:Te,setFlipSided:ve,setCullFace:re,setLineWidth:Oe,setPolygonOffset:fe,setScissorTest:_e,activeTexture:Ke,bindTexture:je,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:oe,texImage3D:Y,updateUBOMapping:Ae,uniformBlockBinding:Se,texStorage2D:te,texStorage3D:ce,texSubImage2D:U,texSubImage3D:H,compressedTexSubImage2D:z,compressedTexSubImage3D:K,scissor:le,viewport:me,reset:Ge}}function G9(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return d?new OffscreenCanvas(P,T):fr("canvas")}function v(P,T,Q){let U=1;const H=je(P);if((H.width>Q||H.height>Q)&&(U=Q/Math.max(H.width,H.height)),U<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const z=Math.floor(U*H.width),K=Math.floor(U*H.height);h===void 0&&(h=m(z,K));const te=T?m(z,K):h;return te.width=z,te.height=K,te.getContext("2d").drawImage(P,0,0,z,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+K+")."),te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,T,Q,U,H=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let z=T;if(T===i.RED&&(Q===i.FLOAT&&(z=i.R32F),Q===i.HALF_FLOAT&&(z=i.R16F),Q===i.UNSIGNED_BYTE&&(z=i.R8)),T===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(z=i.R8UI),Q===i.UNSIGNED_SHORT&&(z=i.R16UI),Q===i.UNSIGNED_INT&&(z=i.R32UI),Q===i.BYTE&&(z=i.R8I),Q===i.SHORT&&(z=i.R16I),Q===i.INT&&(z=i.R32I)),T===i.RG&&(Q===i.FLOAT&&(z=i.RG32F),Q===i.HALF_FLOAT&&(z=i.RG16F),Q===i.UNSIGNED_BYTE&&(z=i.RG8)),T===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(z=i.RG8UI),Q===i.UNSIGNED_SHORT&&(z=i.RG16UI),Q===i.UNSIGNED_INT&&(z=i.RG32UI),Q===i.BYTE&&(z=i.RG8I),Q===i.SHORT&&(z=i.RG16I),Q===i.INT&&(z=i.RG32I)),T===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(z=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(z=i.RGB16UI),Q===i.UNSIGNED_INT&&(z=i.RGB32UI),Q===i.BYTE&&(z=i.RGB8I),Q===i.SHORT&&(z=i.RGB16I),Q===i.INT&&(z=i.RGB32I)),T===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),Q===i.UNSIGNED_INT&&(z=i.RGBA32UI),Q===i.BYTE&&(z=i.RGBA8I),Q===i.SHORT&&(z=i.RGBA16I),Q===i.INT&&(z=i.RGBA32I)),T===i.RGB&&(Q===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),T===i.RGBA){const K=H?xa:ct.getTransfer(U);Q===i.FLOAT&&(z=i.RGBA32F),Q===i.HALF_FLOAT&&(z=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(z=K===vt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function _(P,T){let Q;return P?T===null||T===Xi||T===cr?Q=i.DEPTH24_STENCIL8:T===Un?Q=i.DEPTH32F_STENCIL8:T===or&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xi||T===cr?Q=i.DEPTH_COMPONENT24:T===Un?Q=i.DEPTH_COMPONENT32F:T===or&&(Q=i.DEPTH_COMPONENT16),Q}function S(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){const T=P.target;T.removeEventListener("dispose",w),L(T),T.isVideoTexture&&u.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),b(T)}function L(P){const T=n.get(P);if(T.__webglInit===void 0)return;const Q=P.source,U=f.get(Q);if(U){const H=U[T.__cacheKey];H.usedTimes--,H.usedTimes===0&&M(P),Object.keys(U).length===0&&f.delete(Q)}n.remove(P)}function M(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const Q=P.source,U=f.get(Q);delete U[T.__cacheKey],a.memory.textures--}function b(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(T.__webglFramebuffer[U]))for(let H=0;H<T.__webglFramebuffer[U].length;H++)i.deleteFramebuffer(T.__webglFramebuffer[U][H]);else i.deleteFramebuffer(T.__webglFramebuffer[U]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[U])}else{if(Array.isArray(T.__webglFramebuffer))for(let U=0;U<T.__webglFramebuffer.length;U++)i.deleteFramebuffer(T.__webglFramebuffer[U]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let U=0;U<T.__webglColorRenderbuffer.length;U++)T.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[U]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=P.textures;for(let U=0,H=Q.length;U<H;U++){const z=n.get(Q[U]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(Q[U])}n.remove(P)}let C=0;function k(){C=0}function D(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function V(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function N(P,T){const Q=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const U=P.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,P,T);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+T)}function O(P,T){const Q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){ee(Q,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+T)}function W(P,T){const Q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){ee(Q,P,T);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+T)}function B(P,T){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){he(Q,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+T)}const j={[Ei]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},J={[an]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},pe={[Df]:i.NEVER,[zf]:i.ALWAYS,[Nf]:i.LESS,[Xu]:i.LEQUAL,[Uf]:i.EQUAL,[Bf]:i.GEQUAL,[Ff]:i.GREATER,[Of]:i.NOTEQUAL};function be(P,T){if(T.type===Un&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===ha||T.magFilter===Js||T.magFilter===Xn||T.minFilter===_n||T.minFilter===ha||T.minFilter===Js||T.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==Js&&T.minFilter!==Xn||T.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(P,T){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",w));const U=T.source;let H=f.get(U);H===void 0&&(H={},f.set(U,H));const z=V(T);if(z!==P.__cacheKey){H[z]===void 0&&(H[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),H[z].usedTimes++;const K=H[P.__cacheKey];K!==void 0&&(H[P.__cacheKey].usedTimes--,K.usedTimes===0&&M(T)),P.__cacheKey=z,P.__webglTexture=H[z].texture}return Q}function He(P,T,Q){return Math.floor(Math.floor(P/Q)/T)}function Ue(P,T,Q,U){const z=P.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Q,U,T.data);else{z.sort((Y,le)=>Y.start-le.start);let K=0;for(let Y=1;Y<z.length;Y++){const le=z[K],me=z[Y],Ae=le.start+le.count,Se=He(me.start,T.width,4),Ge=He(le.start,T.width,4);me.start<=Ae+1&&Se===Ge&&He(me.start+me.count-1,T.width,4)===Se?le.count=Math.max(le.count,me.start+me.count-le.start):(++K,z[K]=me)}z.length=K+1;const te=i.getParameter(i.UNPACK_ROW_LENGTH),ce=i.getParameter(i.UNPACK_SKIP_PIXELS),oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Y=0,le=z.length;Y<le;Y++){const me=z[Y],Ae=Math.floor(me.start/4),Se=Math.ceil(me.count/4),Ge=Ae%T.width,G=Math.floor(Ae/T.width),ye=Se,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Ge,G,ye,we,Q,U,T.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ee(P,T,Q){let U=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(U=i.TEXTURE_3D);const H=Ee(P,T),z=T.source;t.bindTexture(U,P.__webglTexture,i.TEXTURE0+Q);const K=n.get(z);if(z.version!==K.__version||H===!0){t.activeTexture(i.TEXTURE0+Q);const te=ct.getPrimaries(ct.workingColorSpace),ce=T.colorSpace===xi?null:ct.getPrimaries(T.colorSpace),oe=T.colorSpace===xi||te===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Y=v(T.image,!1,s.maxTextureSize);Y=Ke(T,Y);const le=r.convert(T.format,T.colorSpace),me=r.convert(T.type);let Ae=x(T.internalFormat,le,me,T.colorSpace,T.isVideoTexture);be(U,T);let Se;const Ge=T.mipmaps,G=T.isVideoTexture!==!0,ye=K.__version===void 0||H===!0,we=z.dataReady,Le=S(T,Y);if(T.isDepthTexture)Ae=_(T.format===hr,T.type),ye&&(G?t.texStorage2D(i.TEXTURE_2D,1,Ae,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,le,me,null));else if(T.isDataTexture)if(Ge.length>0){G&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ae,Ge[0].width,Ge[0].height);for(let ge=0,ue=Ge.length;ge<ue;ge++)Se=Ge[ge],G?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,le,me,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,le,me,Se.data);T.generateMipmaps=!1}else G?(ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ae,Y.width,Y.height),we&&Ue(T,Y,le,me)):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,le,me,Y.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ae,Ge[0].width,Ge[0].height,Y.depth);for(let ge=0,ue=Ge.length;ge<ue;ge++)if(Se=Ge[ge],T.format!==En)if(le!==null)if(G){if(we)if(T.layerUpdates.size>0){const ke=ph(Se.width,Se.height,T.format,T.type);for(const $e of T.layerUpdates){const ht=Se.data.subarray($e*ke/Se.data.BYTES_PER_ELEMENT,($e+1)*ke/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,$e,Se.width,Se.height,1,le,ht)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,Y.depth,le,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,Se.width,Se.height,Y.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,Y.depth,le,me,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,Se.width,Se.height,Y.depth,0,le,me,Se.data)}else{G&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ae,Ge[0].width,Ge[0].height);for(let ge=0,ue=Ge.length;ge<ue;ge++)Se=Ge[ge],T.format!==En?le!==null?G?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,le,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,le,me,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,le,me,Se.data)}else if(T.isDataArrayTexture)if(G){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ae,Y.width,Y.height,Y.depth),we)if(T.layerUpdates.size>0){const ge=ph(Y.width,Y.height,T.format,T.type);for(const ue of T.layerUpdates){const ke=Y.data.subarray(ue*ge/Y.data.BYTES_PER_ELEMENT,(ue+1)*ge/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,Y.width,Y.height,1,le,me,ke)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,le,me,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Y.width,Y.height,Y.depth,0,le,me,Y.data);else if(T.isData3DTexture)G?(ye&&t.texStorage3D(i.TEXTURE_3D,Le,Ae,Y.width,Y.height,Y.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,le,me,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Y.width,Y.height,Y.depth,0,le,me,Y.data);else if(T.isFramebufferTexture){if(ye)if(G)t.texStorage2D(i.TEXTURE_2D,Le,Ae,Y.width,Y.height);else{let ge=Y.width,ue=Y.height;for(let ke=0;ke<Le;ke++)t.texImage2D(i.TEXTURE_2D,ke,Ae,ge,ue,0,le,me,null),ge>>=1,ue>>=1}}else if(Ge.length>0){if(G&&ye){const ge=je(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ae,ge.width,ge.height)}for(let ge=0,ue=Ge.length;ge<ue;ge++)Se=Ge[ge],G?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,le,me,Se):t.texImage2D(i.TEXTURE_2D,ge,Ae,le,me,Se);T.generateMipmaps=!1}else if(G){if(ye){const ge=je(Y);t.texStorage2D(i.TEXTURE_2D,Le,Ae,ge.width,ge.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,me,Y)}else t.texImage2D(i.TEXTURE_2D,0,Ae,le,me,Y);g(T)&&p(U),K.__version=z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function he(P,T,Q){if(T.image.length!==6)return;const U=Ee(P,T),H=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const z=n.get(H);if(H.version!==z.__version||U===!0){t.activeTexture(i.TEXTURE0+Q);const K=ct.getPrimaries(ct.workingColorSpace),te=T.colorSpace===xi?null:ct.getPrimaries(T.colorSpace),ce=T.colorSpace===xi||K===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const oe=T.isCompressedTexture||T.image[0].isCompressedTexture,Y=T.image[0]&&T.image[0].isDataTexture,le=[];for(let ue=0;ue<6;ue++)!oe&&!Y?le[ue]=v(T.image[ue],!0,s.maxCubemapSize):le[ue]=Y?T.image[ue].image:T.image[ue],le[ue]=Ke(T,le[ue]);const me=le[0],Ae=r.convert(T.format,T.colorSpace),Se=r.convert(T.type),Ge=x(T.internalFormat,Ae,Se,T.colorSpace),G=T.isVideoTexture!==!0,ye=z.__version===void 0||U===!0,we=H.dataReady;let Le=S(T,me);be(i.TEXTURE_CUBE_MAP,T);let ge;if(oe){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ge,me.width,me.height);for(let ue=0;ue<6;ue++){ge=le[ue].mipmaps;for(let ke=0;ke<ge.length;ke++){const $e=ge[ke];T.format!==En?Ae!==null?G?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,$e.width,$e.height,Ae,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Ge,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,$e.width,$e.height,Ae,Se,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Ge,$e.width,$e.height,0,Ae,Se,$e.data)}}}else{if(ge=T.mipmaps,G&&ye){ge.length>0&&Le++;const ue=je(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ge,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Y){G?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,le[ue].width,le[ue].height,Ae,Se,le[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,le[ue].width,le[ue].height,0,Ae,Se,le[ue].data);for(let ke=0;ke<ge.length;ke++){const ht=ge[ke].image[ue].image;G?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,ht.width,ht.height,Ae,Se,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Ge,ht.width,ht.height,0,Ae,Se,ht.data)}}else{G?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae,Se,le[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,Ae,Se,le[ue]);for(let ke=0;ke<ge.length;ke++){const $e=ge[ke];G?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,Ae,Se,$e.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Ge,Ae,Se,$e.image[ue])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),z.__version=H.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,Q,U,H,z){const K=r.convert(Q.format,Q.colorSpace),te=r.convert(Q.type),ce=x(Q.internalFormat,K,te,Q.colorSpace),oe=n.get(T),Y=n.get(Q);if(Y.__renderTarget=T,!oe.__hasExternalTextures){const le=Math.max(1,T.width>>z),me=Math.max(1,T.height>>z);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,z,ce,le,me,T.depth,0,K,te,null):t.texImage2D(H,z,ce,le,me,0,K,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,H,Y.__webglTexture,0,Oe(T)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,H,Y.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(P,T,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const U=T.depthTexture,H=U&&U.isDepthTexture?U.type:null,z=_(T.stencilBuffer,H),K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=Oe(T);fe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,z,T.width,T.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,P)}else{const U=T.textures;for(let H=0;H<U.length;H++){const z=U[H],K=r.convert(z.format,z.colorSpace),te=r.convert(z.type),ce=x(z.internalFormat,K,te,z.colorSpace),oe=Oe(T);Q&&fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ce,T.width,T.height):fe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=n.get(T.depthTexture);U.__renderTarget=T,(!U.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const H=U.__webglTexture,z=Oe(T);if(T.depthTexture.format===lr)fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(T.depthTexture.format===hr)fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function de(P){const T=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const U=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),U){const H=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,U.removeEventListener("dispose",H)};U.addEventListener("dispose",H),T.__depthDisposeCallback=H}T.__boundDepthTexture=U}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const U=P.texture.mipmaps;U&&U.length>0?ie(T.__webglFramebuffer[0],P):ie(T.__webglFramebuffer,P)}else if(Q){T.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[U]),T.__webglDepthbuffer[U]===void 0)T.__webglDepthbuffer[U]=i.createRenderbuffer(),ze(T.__webglDepthbuffer[U],P,!1);else{const H=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}else{const U=P.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ze(T.__webglDepthbuffer,P,!1);else{const H=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,T,Q){const U=n.get(P);T!==void 0&&Me(U.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&de(P)}function I(P){const T=P.texture,Q=n.get(P),U=n.get(T);P.addEventListener("dispose",E);const H=P.textures,z=P.isWebGLCubeRenderTarget===!0,K=H.length>1;if(K||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=T.version,a.memory.textures++),z){Q.__webglFramebuffer=[];for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[te]=[];for(let ce=0;ce<T.mipmaps.length;ce++)Q.__webglFramebuffer[te][ce]=i.createFramebuffer()}else Q.__webglFramebuffer[te]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let te=0;te<T.mipmaps.length;te++)Q.__webglFramebuffer[te]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(K)for(let te=0,ce=H.length;te<ce;te++){const oe=n.get(H[te]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&fe(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let te=0;te<H.length;te++){const ce=H[te];Q.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[te]);const oe=r.convert(ce.format,ce.colorSpace),Y=r.convert(ce.type),le=x(ce.internalFormat,oe,Y,ce.colorSpace,P.isXRRenderTarget===!0),me=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,Q.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(Q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),be(i.TEXTURE_CUBE_MAP,T);for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)Me(Q.__webglFramebuffer[te][ce],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else Me(Q.__webglFramebuffer[te],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let te=0,ce=H.length;te<ce;te++){const oe=H[te],Y=n.get(oe);let le=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),be(le,oe),Me(Q.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+te,le,0),g(oe)&&p(le)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,U.__webglTexture),be(te,T),T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)Me(Q.__webglFramebuffer[ce],P,T,i.COLOR_ATTACHMENT0,te,ce);else Me(Q.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,te,0);g(T)&&p(te),t.unbindTexture()}P.depthBuffer&&de(P)}function Re(P){const T=P.textures;for(let Q=0,U=T.length;Q<U;Q++){const H=T[Q];if(g(H)){const z=y(P),K=n.get(H).__webglTexture;t.bindTexture(z,K),p(z),t.unbindTexture()}}}const Te=[],ve=[];function re(P){if(P.samples>0){if(fe(P)===!1){const T=P.textures,Q=P.width,U=P.height;let H=i.COLOR_BUFFER_BIT;const z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(P),te=T.length>1;if(te)for(let oe=0;oe<T.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);const ce=P.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let oe=0;oe<T.length;oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[oe]);const Y=n.get(T[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,Q,U,0,0,Q,U,H,i.NEAREST),c===!0&&(Te.length=0,ve.length=0,Te.push(i.COLOR_ATTACHMENT0+oe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Te.push(z),ve.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let oe=0;oe<T.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[oe]);const Y=n.get(T[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Y,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Oe(P){return Math.min(s.maxSamples,P.samples)}function fe(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _e(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Ke(P,T){const Q=P.colorSpace,U=P.format,H=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==cn&&Q!==xi&&(ct.getTransfer(Q)===vt?(U!==En||H!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=ae,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=fe}function W9(i,e){function t(n,s=xi){let r;const a=ct.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return i.BYTE;if(n===Ou)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Wc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===_r)return i.HALF_FLOAT;if(n===Vu)return i.ALPHA;if(n===Hu)return i.RGB;if(n===En)return i.RGBA;if(n===lr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Gu)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Zo||n===Jo||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===yc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===bc||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const q9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X9=`
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

}`;class Q9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:q9,fragmentShader:X9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K9 extends Ps{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Q9,p={},y=t.getContextAttributes();let x=null,_=null;const S=[],w=[],E=new et;let L=null;const M=new sn;M.viewport=new dt;const b=new sn;b.viewport=new dt;const C=[M,b],k=new a0;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=S[ee];return he===void 0&&(he=new lo,S[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=S[ee];return he===void 0&&(he=new lo,S[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=S[ee];return he===void 0&&(he=new lo,S[ee]=he),he.getHandSpace()};function N(ee){const he=w.indexOf(ee.inputSource);if(he===-1)return;const Me=S[he];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,l||a),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let ee=0;ee<S.length;ee++){const he=w[ee];he!==null&&(w[ee]=null,S[ee].disconnect(he))}D=null,V=null,g.reset();for(const ee in p)delete p[ee];e.setRenderTarget(x),d=null,f=null,h=null,s=null,_=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,ie=null;y.depth&&(ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?hr:lr,ze=y.stencil?cr:Xi);const de={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(de),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Qi(f.textureWidth,f.textureHeight,{format:En,type:Yn,depthTexture:new cd(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Qi(d.framebufferWidth,d.framebufferHeight,{format:En,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(ee){for(let he=0;he<ee.removed.length;he++){const Me=ee.removed[he],ze=w.indexOf(Me);ze>=0&&(w[ze]=null,S[ze].disconnect(Me))}for(let he=0;he<ee.added.length;he++){const Me=ee.added[he];let ze=w.indexOf(Me);if(ze===-1){for(let de=0;de<S.length;de++)if(de>=w.length){w.push(Me),ze=de;break}else if(w[de]===null){w[de]=Me,ze=de;break}if(ze===-1)break}const ie=S[ze];ie&&ie.connect(Me)}}const B=new F,j=new F;function J(ee,he,Me){B.setFromMatrixPosition(he.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const ze=B.distanceTo(j),ie=he.projectionMatrix.elements,de=Me.projectionMatrix.elements,ae=ie[14]/(ie[10]-1),I=ie[14]/(ie[10]+1),Re=(ie[9]+1)/ie[5],Te=(ie[9]-1)/ie[5],ve=(ie[8]-1)/ie[0],re=(de[8]+1)/de[0],Oe=ae*ve,fe=ae*re,_e=ze/(-ve+re),Ke=_e*-ve;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ke),ee.translateZ(_e),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ie[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const je=ae+_e,P=I+_e,T=Oe-Ke,Q=fe+(ze-Ke),U=Re*I/P*je,H=Te*I/P*je;ee.projectionMatrix.makePerspective(T,Q,U,H,je,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let he=ee.near,Me=ee.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),k.near=b.near=M.near=he,k.far=b.far=M.far=Me,(D!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,V=k.far),k.layers.mask=ee.layers.mask|6,M.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const ze=ee.parent,ie=k.cameras;pe(k,ze);for(let de=0;de<ie.length;de++)pe(ie[de],ze);ie.length===2?J(k,M,b):k.projectionMatrix.copy(M.projectionMatrix),be(ee,k,ze)};function be(ee,he,Me){Me===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ts*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ee){return p[ee]};let Ee=null;function He(ee,he){if(u=he.getViewerPose(l||a),m=he,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ze=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let I=0;I<Me.length;I++){const Re=Me[I];let Te=null;if(d!==null)Te=d.getViewport(Re);else{const re=h.getViewSubImage(f,Re);Te=re.viewport,I===0&&(e.setRenderTargetTextures(_,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(_))}let ve=C[I];ve===void 0&&(ve=new sn,ve.layers.enable(I),ve.viewport=new dt,C[I]=ve),ve.matrix.fromArray(Re.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Re.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Te.x,Te.y,Te.width,Te.height),I===0&&(k.matrix.copy(ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(ve)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const I=h.getDepthInformation(Me[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<Me.length;I++){const Re=Me[I].camera;if(Re){let Te=p[Re];Te||(Te=new ld,p[Re]=Te);const ve=h.getCameraImage(Re);Te.sourceTexture=ve}}}}for(let Me=0;Me<S.length;Me++){const ze=w[Me],ie=S[Me];ze!==null&&ie!==void 0&&ie.update(ze,he,l||a)}Ee&&Ee(ee,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const Ue=new md;Ue.setAnimationLoop(He),this.setAnimationLoop=function(ee){Ee=ee},this.dispose=function(){}}}const Di=new $t,Y9=new Qe;function j9(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ju(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Di.copy(_),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(Y9.makeRotationFromEuler(Di)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $9(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=s[y.id];_===void 0&&(m(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",g));const S=x.program;n.updateUBOMapping(y,S);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const _=i.createBuffer(),S=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,E=_.length;w<E;w++){const L=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,b=L.length;M<b;M++){const C=L[M];if(d(C,w,M,S)===!0){const k=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let N=0;N<D.length;N++){const O=D[N],W=v(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,k+V,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,_,S){const w=y.value,E=x+"_"+_;if(S[E]===void 0)return typeof w=="number"||typeof w=="boolean"?S[E]=w:S[E]=w.clone(),!0;{const L=S[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return S[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(y){const x=y.uniforms;let _=0;const S=16;for(let E=0,L=x.length;E<L;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,C=M.length;b<C;b++){const k=M[b],D=Array.isArray(k.value)?k.value:[k.value];for(let V=0,N=D.length;V<N;V++){const O=D[V],W=v(O),B=_%S,j=B%W.boundary,J=B+j;_+=j,J!==0&&S-J<W.storage&&(_+=S-J),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=W.storage}}}const w=_%S;return w>0&&(_+=S-w),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Z9{constructor(e={}){const{canvas:t=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=Rt;let w=0,E=0,L=null,M=-1,b=null;const C=new dt,k=new dt;let D=null;const V=new qe(0);let N=0,O=t.width,W=t.height,B=1,j=null,J=null;const pe=new dt(0,0,O,W),be=new dt(0,0,O,W);let Ee=!1;const He=new nl;let Ue=!1,ee=!1;const he=new Qe,Me=new F,ze=new dt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ae(){return L===null?B:1}let I=n;function Re(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const q="webgl2";if(I=Re(q,R),I===null)throw Re(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Te,ve,re,Oe,fe,_e,Ke,je,P,T,Q,U,H,z,K,te,ce,oe,Y,le,me,Ae,Se,Ge;function G(){Te=new c1(I),Te.init(),Ae=new W9(I,Te),ve=new t1(I,Te,e,Ae),re=new H9(I,Te),ve.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),Oe=new u1(I),fe=new C9,_e=new G9(I,Te,re,fe,ve,Ae,Oe),Ke=new i1(_),je=new o1(_),P=new v0(I),Se=new Jg(I,P),T=new l1(I,P,Oe,Se),Q=new f1(I,T,P,Oe),Y=new d1(I,ve,_e),te=new n1(fe),U=new R9(_,Ke,je,Te,ve,Se,te),H=new j9(_,fe),z=new L9,K=new F9(Te),oe=new Zg(_,Ke,je,re,Q,d,c),ce=new z9(_,Q,ve),Ge=new $9(I,Oe,ve,re),le=new e1(I,Te,Oe),me=new h1(I,Te,Oe),Oe.programs=U.programs,_.capabilities=ve,_.extensions=Te,_.properties=fe,_.renderLists=z,_.shadowMap=ce,_.state=re,_.info=Oe}G();const ye=new K9(_,I);this.xr=ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(O,W,!1))},this.getSize=function(R){return R.set(O,W)},this.setSize=function(R,q,$=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,W=q,t.width=Math.floor(R*B),t.height=Math.floor(q*B),$===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(O*B,W*B).floor()},this.setDrawingBufferSize=function(R,q,$){O=R,W=q,B=$,t.width=Math.floor(R*$),t.height=Math.floor(q*$),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,q,$,Z){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,q,$,Z),re.viewport(C.copy(pe).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(be)},this.setScissor=function(R,q,$,Z){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,q,$,Z),re.scissor(k.copy(be).multiplyScalar(B).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){re.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,$=!0){let Z=0;if(R){let X=!1;if(L!==null){const xe=L.texture.format;X=xe===jc||xe===Yc||xe===Kc}if(X){const xe=L.texture.type,Pe=xe===Yn||xe===Xi||xe===or||xe===cr||xe===qc||xe===Xc,De=oe.getClearColor(),Ie=oe.getClearAlpha(),Xe=De.r,Ye=De.g,Ve=De.b;Pe?(m[0]=Xe,m[1]=Ye,m[2]=Ve,m[3]=Ie,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Xe,v[1]=Ye,v[2]=Ve,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else Z|=I.COLOR_BUFFER_BIT}q&&(Z|=I.DEPTH_BUFFER_BIT),$&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),oe.dispose(),z.dispose(),K.dispose(),fe.dispose(),Ke.dispose(),je.dispose(),Q.dispose(),Se.dispose(),Ge.dispose(),U.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",hn),ye.removeEventListener("sessionend",gl),Ai.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Oe.autoReset,q=ce.enabled,$=ce.autoUpdate,Z=ce.needsUpdate,X=ce.type;G(),Oe.autoReset=R,ce.enabled=q,ce.autoUpdate=$,ce.needsUpdate=Z,ce.type=X}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const q=R.target;q.removeEventListener("dispose",ue),ke(q)}function ke(R){$e(R),fe.remove(R)}function $e(R){const q=fe.get(R).programs;q!==void 0&&(q.forEach(function($){U.releaseProgram($)}),R.isShaderMaterial&&U.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,$,Z,X,xe){q===null&&(q=ie);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,De=Qd(R,q,$,Z,X);re.setMaterial(Z,Pe);let Ie=$.index,Xe=1;if(Z.wireframe===!0){if(Ie=T.getWireframeAttribute($),Ie===void 0)return;Xe=2}const Ye=$.drawRange,Ve=$.attributes.position;let at=Ye.start*Xe,gt=(Ye.start+Ye.count)*Xe;xe!==null&&(at=Math.max(at,xe.start*Xe),gt=Math.min(gt,(xe.start+xe.count)*Xe)),Ie!==null?(at=Math.max(at,0),gt=Math.min(gt,Ie.count)):Ve!=null&&(at=Math.max(at,0),gt=Math.min(gt,Ve.count));const Ct=gt-at;if(Ct<0||Ct===1/0)return;Se.setup(X,Z,De,$,Ie);let xt,_t=le;if(Ie!==null&&(xt=P.get(Ie),_t=me,_t.setIndex(xt)),X.isMesh)Z.wireframe===!0?(re.setLineWidth(Z.wireframeLinewidth*ae()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(X.isLine){let We=Z.linewidth;We===void 0&&(We=1),re.setLineWidth(We*ae()),X.isLineSegments?_t.setMode(I.LINES):X.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else X.isPoints?_t.setMode(I.POINTS):X.isSprite&&_t.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,wt=X._multiDrawCounts,ut=X._multiDrawCount,pn=Ie?P.get(Ie).bytesPerElement:1,ji=fe.get(Z).currentProgram.getUniforms();for(let mn=0;mn<ut;mn++)ji.setValue(I,"_gl_DrawID",mn),_t.render(We[mn]/pn,wt[mn])}else if(X.isInstancedMesh)_t.renderInstances(at,Ct,X.count);else if($.isInstancedBufferGeometry){const We=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wt=Math.min($.instanceCount,We);_t.renderInstances(at,Ct,wt)}else _t.render(at,Ct)};function ht(R,q,$){R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,Mr(R,q,$),R.side=li,R.needsUpdate=!0,Mr(R,q,$),R.side=Wt):Mr(R,q,$)}this.compile=function(R,q,$=null){$===null&&($=R),p=K.get($),p.init(q),x.push(p),$.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==$&&R.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const De=xe[Pe];ht(De,$,X),Z.add(De)}else ht(xe,$,X),Z.add(xe)}),p=x.pop(),Z},this.compileAsync=function(R,q,$=null){const Z=this.compile(R,q,$);return new Promise(X=>{function xe(){if(Z.forEach(function(Pe){fe.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){X(R);return}setTimeout(xe,10)}Te.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ot=null;function fn(R){ot&&ot(R)}function hn(){Ai.stop()}function gl(){Ai.start()}const Ai=new md;Ai.setAnimationLoop(fn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){ot=R,ye.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ye.addEventListener("sessionstart",hn),ye.addEventListener("sessionend",gl),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,L),p=K.get(R,x.length),p.init(q),x.push(p),he.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),He.setFromProjectionMatrix(he,Qn,q.reversedDepth),ee=this.localClippingEnabled,Ue=te.init(this.clippingPlanes,ee),g=z.get(R,y.length),g.init(),y.push(g),ye.enabled===!0&&ye.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&Ba(xe,q,-1/0,_.sortObjects)}Ba(R,q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(j,J),de=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,de&&oe.addToRenderList(g,R),this.info.render.frame++,Ue===!0&&te.beginShadows();const $=p.state.shadowsArray;ce.render($,R,q),Ue===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,X=g.transmissive;if(p.setupLights(),q.isArrayCamera){const xe=q.cameras;if(X.length>0)for(let Pe=0,De=xe.length;Pe<De;Pe++){const Ie=xe[Pe];_l(Z,X,R,Ie)}de&&oe.render(R);for(let Pe=0,De=xe.length;Pe<De;Pe++){const Ie=xe[Pe];vl(g,R,Ie,Ie.viewport)}}else X.length>0&&_l(Z,X,R,q),de&&oe.render(R),vl(g,R,q);L!==null&&E===0&&(_e.updateMultisampleRenderTarget(L),_e.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(_,R,q),Se.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],Ue===!0&&te.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ba(R,q,$,Z){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){Z&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const Pe=Q.update(R),De=R.material;De.visible&&g.push(R,Pe,De,$,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const Pe=Q.update(R),De=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ze.copy(Pe.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(De)){const Ie=Pe.groups;for(let Xe=0,Ye=Ie.length;Xe<Ye;Xe++){const Ve=Ie[Xe],at=De[Ve.materialIndex];at&&at.visible&&g.push(R,Pe,at,$,ze.z,Ve)}}else De.visible&&g.push(R,Pe,De,$,ze.z,null)}}const xe=R.children;for(let Pe=0,De=xe.length;Pe<De;Pe++)Ba(xe[Pe],q,$,Z)}function vl(R,q,$,Z){const X=R.opaque,xe=R.transmissive,Pe=R.transparent;p.setupLightsView($),Ue===!0&&te.setGlobalState(_.clippingPlanes,$),Z&&re.viewport(C.copy(Z)),X.length>0&&xr(X,q,$),xe.length>0&&xr(xe,q,$),Pe.length>0&&xr(Pe,q,$),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function _l(R,q,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Qi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?_r:Yn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const xe=p.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||C;xe.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);const De=_.getRenderTarget(),Ie=_.getActiveCubeFace(),Xe=_.getActiveMipmapLevel();_.setRenderTarget(xe),_.getClearColor(V),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),de&&oe.render($);const Ye=_.toneMapping;_.toneMapping=Si;const Ve=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ue===!0&&te.setGlobalState(_.clippingPlanes,Z),xr(R,$,Z),_e.updateMultisampleRenderTarget(xe),_e.updateRenderTargetMipmap(xe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let gt=0,Ct=q.length;gt<Ct;gt++){const xt=q[gt],_t=xt.object,We=xt.geometry,wt=xt.material,ut=xt.group;if(wt.side===Wt&&_t.layers.test(Z.layers)){const pn=wt.side;wt.side=rn,wt.needsUpdate=!0,yl(_t,$,Z,We,wt,ut),wt.side=pn,wt.needsUpdate=!0,at=!0}}at===!0&&(_e.updateMultisampleRenderTarget(xe),_e.updateRenderTargetMipmap(xe))}_.setRenderTarget(De,Ie,Xe),_.setClearColor(V,N),Ve!==void 0&&(Z.viewport=Ve),_.toneMapping=Ye}function xr(R,q,$){const Z=q.isScene===!0?q.overrideMaterial:null;for(let X=0,xe=R.length;X<xe;X++){const Pe=R[X],De=Pe.object,Ie=Pe.geometry,Xe=Pe.group;let Ye=Pe.material;Ye.allowOverride===!0&&Z!==null&&(Ye=Z),De.layers.test($.layers)&&yl(De,q,$,Ie,Ye,Xe)}}function yl(R,q,$,Z,X,xe){R.onBeforeRender(_,q,$,Z,X,xe),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(_,q,$,Z,R,xe),X.transparent===!0&&X.side===Wt&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,_.renderBufferDirect($,q,Z,X,R,xe),X.side=li,X.needsUpdate=!0,_.renderBufferDirect($,q,Z,X,R,xe),X.side=Wt):_.renderBufferDirect($,q,Z,X,R,xe),R.onAfterRender(_,q,$,Z,X,xe)}function Mr(R,q,$){q.isScene!==!0&&(q=ie);const Z=fe.get(R),X=p.state.lights,xe=p.state.shadowsArray,Pe=X.state.version,De=U.getParameters(R,X.state,xe,q,$),Ie=U.getProgramCacheKey(De);let Xe=Z.programs;Z.environment=R.isMeshStandardMaterial?q.environment:null,Z.fog=q.fog,Z.envMap=(R.isMeshStandardMaterial?je:Ke).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",ue),Xe=new Map,Z.programs=Xe);let Ye=Xe.get(Ie);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Pe)return Ml(R,De),Ye}else De.uniforms=U.getUniforms(R),R.onBeforeCompile(De,_),Ye=U.acquireProgram(De,Ie),Xe.set(Ie,Ye),Z.uniforms=De.uniforms;const Ve=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=te.uniform),Ml(R,De),Z.needsLights=Yd(R),Z.lightsStateVersion=Pe,Z.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function xl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ma.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ml(R,q){const $=fe.get(R);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.batchingColor=q.batchingColor,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.instancingMorph=q.instancingMorph,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function Qd(R,q,$,Z,X){q.isScene!==!0&&(q=ie),_e.resetTextureUnits();const xe=q.fog,Pe=Z.isMeshStandardMaterial?q.environment:null,De=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:cn,Ie=(Z.isMeshStandardMaterial?je:Ke).get(Z.envMap||Pe),Xe=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,gt=!!$.morphAttributes.color;let Ct=Si;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=_.toneMapping);const xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=xt!==void 0?xt.length:0,We=fe.get(Z),wt=p.state.lights;if(Ue===!0&&(ee===!0||R!==b)){const Jt=R===b&&Z.id===M;te.setState(Z,R,Jt)}let ut=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==wt.state.version||We.outputColorSpace!==De||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ie||Z.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==te.numPlanes||We.numIntersection!==te.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ye||We.morphTargets!==Ve||We.morphNormals!==at||We.morphColors!==gt||We.toneMapping!==Ct||We.morphTargetsCount!==_t)&&(ut=!0):(ut=!0,We.__version=Z.version);let pn=We.currentProgram;ut===!0&&(pn=Mr(Z,q,X));let ji=!1,mn=!1,Us=!1;const Tt=pn.getUniforms(),yn=We.uniforms;if(re.useProgram(pn.program)&&(ji=!0,mn=!0,Us=!0),Z.id!==M&&(M=Z.id,mn=!0),ji||b!==R){re.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Tt.setValue(I,"projectionMatrix",R.projectionMatrix),Tt.setValue(I,"viewMatrix",R.matrixWorldInverse);const un=Tt.map.cameraPosition;un!==void 0&&un.setValue(I,Me.setFromMatrixPosition(R.matrixWorld)),ve.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,mn=!0,Us=!0)}if(X.isSkinnedMesh){Tt.setOptional(I,X,"bindMatrix"),Tt.setOptional(I,X,"bindMatrixInverse");const Jt=X.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Jt.boneTexture,_e))}X.isBatchedMesh&&(Tt.setOptional(I,X,"batchingTexture"),Tt.setValue(I,"batchingTexture",X._matricesTexture,_e),Tt.setOptional(I,X,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",X._indirectTexture,_e),Tt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",X._colorsTexture,_e));const xn=$.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Y.update(X,$,pn),(mn||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Tt.setValue(I,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(yn.envMap.value=Ie,yn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),mn&&(Tt.setValue(I,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Kd(yn,Us),xe&&Z.fog===!0&&H.refreshFogUniforms(yn,xe),H.refreshMaterialUniforms(yn,Z,B,W,p.state.transmissionRenderTarget[R.id]),ma.upload(I,xl(We),yn,_e)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ma.upload(I,xl(We),yn,_e),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Tt.setValue(I,"center",X.center),Tt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(I,"normalMatrix",X.normalMatrix),Tt.setValue(I,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Jt=Z.uniformsGroups;for(let un=0,za=Jt.length;un<za;un++){const Ri=Jt[un];Ge.update(Ri,pn),Ge.bind(Ri,pn)}}return pn}function Kd(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Yd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,q,$){const Z=fe.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),fe.get(R.texture).__webglTexture=q,fe.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const $=fe.get(R);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0};const jd=I.createFramebuffer();this.setRenderTarget=function(R,q=0,$=0){L=R,w=q,E=$;let Z=!0,X=null,xe=!1,Pe=!1;if(R){const Ie=fe.get(R);if(Ie.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(Ie.__webglFramebuffer===void 0)_e.setupRenderTarget(R);else if(Ie.__hasExternalTextures)_e.rebindTextures(R,fe.get(R.texture).__webglTexture,fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&fe.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Ye=fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?X=Ye[q][$]:X=Ye[q],xe=!0):R.samples>0&&_e.useMultisampledRTT(R)===!1?X=fe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[$]:X=Ye,C.copy(R.viewport),k.copy(R.scissor),D=R.scissorTest}else C.copy(pe).multiplyScalar(B).floor(),k.copy(be).multiplyScalar(B).floor(),D=Ee;if($!==0&&(X=jd),re.bindFramebuffer(I.FRAMEBUFFER,X)&&Z&&re.drawBuffers(R,X),re.viewport(C),re.scissor(k),re.setScissorTest(D),xe){const Ie=fe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,$)}else if(Pe){const Ie=q;for(let Xe=0;Xe<R.textures.length;Xe++){const Ye=fe.get(R.textures[Xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,$,Ie)}}else if(R!==null&&$!==0){const Ie=fe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(R,q,$,Z,X,xe,Pe,De=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){re.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Xe=R.textures[De],Ye=Xe.format,Ve=Xe.type;if(!ve.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Z&&$>=0&&$<=R.height-X&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(q,$,Z,X,Ae.convert(Ye),Ae.convert(Ve),xe))}finally{const Xe=L!==null?fe.get(L).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,$,Z,X,xe,Pe,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(q>=0&&q<=R.width-Z&&$>=0&&$<=R.height-X){re.bindFramebuffer(I.FRAMEBUFFER,Ie);const Xe=R.textures[De],Ye=Xe.format,Ve=Xe.type;if(!ve.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(q,$,Z,X,Ae.convert(Ye),Ae.convert(Ve),0);const gt=L!==null?fe.get(L).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,gt);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sp(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(at),I.deleteSync(Ct),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,$=0){const Z=Math.pow(2,-$),X=Math.floor(R.image.width*Z),xe=Math.floor(R.image.height*Z),Pe=q!==null?q.x:0,De=q!==null?q.y:0;_e.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Pe,De,X,xe),re.unbindTexture()};const $d=I.createFramebuffer(),Zd=I.createFramebuffer();this.copyTextureToTexture=function(R,q,$=null,Z=null,X=0,xe=null){xe===null&&(X!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=X,X=0):xe=0);let Pe,De,Ie,Xe,Ye,Ve,at,gt,Ct;const xt=R.isCompressedTexture?R.mipmaps[xe]:R.image;if($!==null)Pe=$.max.x-$.min.x,De=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Xe=$.min.x,Ye=$.min.y,Ve=$.isBox3?$.min.z:0;else{const xn=Math.pow(2,-X);Pe=Math.floor(xt.width*xn),De=Math.floor(xt.height*xn),R.isDataArrayTexture?Ie=xt.depth:R.isData3DTexture?Ie=Math.floor(xt.depth*xn):Ie=1,Xe=0,Ye=0,Ve=0}Z!==null?(at=Z.x,gt=Z.y,Ct=Z.z):(at=0,gt=0,Ct=0);const _t=Ae.convert(q.format),We=Ae.convert(q.type);let wt;q.isData3DTexture?(_e.setTexture3D(q,0),wt=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(_e.setTexture2DArray(q,0),wt=I.TEXTURE_2D_ARRAY):(_e.setTexture2D(q,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const ut=I.getParameter(I.UNPACK_ROW_LENGTH),pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ji=I.getParameter(I.UNPACK_SKIP_PIXELS),mn=I.getParameter(I.UNPACK_SKIP_ROWS),Us=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const Tt=R.isDataArrayTexture||R.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const xn=fe.get(R),Jt=fe.get(q),un=fe.get(xn.__renderTarget),za=fe.get(Jt.__renderTarget);re.bindFramebuffer(I.READ_FRAMEBUFFER,un.__webglFramebuffer),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,za.__webglFramebuffer);for(let Ri=0;Ri<Ie;Ri++)Tt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(R).__webglTexture,X,Ve+Ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,xe,Ct+Ri)),I.blitFramebuffer(Xe,Ye,Pe,De,at,gt,Pe,De,I.DEPTH_BUFFER_BIT,I.NEAREST);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||fe.has(R)){const xn=fe.get(R),Jt=fe.get(q);re.bindFramebuffer(I.READ_FRAMEBUFFER,$d),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zd);for(let un=0;un<Ie;un++)Tt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,X,Ve+un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,X),yn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,xe,Ct+un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,xe),X!==0?I.blitFramebuffer(Xe,Ye,Pe,De,at,gt,Pe,De,I.COLOR_BUFFER_BIT,I.NEAREST):yn?I.copyTexSubImage3D(wt,xe,at,gt,Ct+un,Xe,Ye,Pe,De):I.copyTexSubImage2D(wt,xe,at,gt,Xe,Ye,Pe,De);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(wt,xe,at,gt,Ct,Pe,De,Ie,_t,We,xt.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,xe,at,gt,Ct,Pe,De,Ie,_t,xt.data):I.texSubImage3D(wt,xe,at,gt,Ct,Pe,De,Ie,_t,We,xt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,at,gt,Pe,De,_t,We,xt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,at,gt,xt.width,xt.height,_t,xt.data):I.texSubImage2D(I.TEXTURE_2D,xe,at,gt,Pe,De,_t,We,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ji),I.pixelStorei(I.UNPACK_SKIP_ROWS,mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Us),xe===0&&q.generateMipmaps&&I.generateMipmap(wt),re.unbindTexture()},this.initRenderTarget=function(R){fe.get(R).__webglFramebuffer===void 0&&_e.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?_e.setTextureCube(R,0):R.isData3DTexture?_e.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?_e.setTexture2DArray(R,0):_e.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){w=0,E=0,L=null,re.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class mr extends nt{constructor(){const e=mr.SkyShader,t=new jn({name:e.name,uniforms:ed.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:rn,depthWrite:!1});super(new Ft(1,1,1),t),this.isSky=!0}}mr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
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

		}`};const wo={low:{dpr:1,shadow:0,msaa:!1,maxCars:10,crowd:2500,far:1500},medium:{dpr:1.25,shadow:1024,msaa:!0,maxCars:20,crowd:6e3,far:2400},high:{dpr:1.5,shadow:2048,msaa:!0,maxCars:40,crowd:12e3,far:3200},ultra:{dpr:2,shadow:4096,msaa:!0,maxCars:40,crowd:2e4,far:4e3}},Oh={day:{elev:48,azim:215,turb:3,ray:1.1,mie:.004,g:.8,exposure:.62,sun:3.2,sunCol:16773596,hemiSky:12375807,hemiGround:7043658,hemi:.55,fog:12176870,fogD:18e-5,lamps:!1},sunset:{elev:4.5,azim:255,turb:6,ray:1.6,mie:.006,g:.85,exposure:.55,sun:2.6,sunCol:16751178,hemiSky:16751979,hemiGround:3815978,hemi:.42,fog:14719602,fogD:26e-5,lamps:!0},night:{elev:-9,azim:215,turb:1,ray:.2,mie:.001,g:.7,exposure:.5,sun:0,sunCol:9414911,hemiSky:2371930,hemiGround:724242,hemi:.5,fog:659488,fogD:32e-5,lamps:!0}};class J9{constructor(e,t={}){this.canvas=e,this.quality=t.quality||"high";const n=wo[this.quality];this.renderer=new Z9({canvas:e,antialias:n.msaa,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=Du,this.renderer.shadowMap.enabled=n.shadow>0,this.renderer.shadowMap.type=Iu,this.scene=new Yl,this.camera=new sn(62,16/9,.3,n.far),this.sky=new mr,this.sky.scale.setScalar(2e4),this.scene.add(this.sky),this.sunDir=new F,this.sun=new pd(16777215,3),this.sun.castShadow=n.shadow>0,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new Jp(12375807,7043658,.5),this.scene.add(this.hemi),this.scene.fog=new Jc(12176870,2e-4),this.pmrem=new Cc(this.renderer),this.timeKey="day",this.envRT=null,this.setQuality(this.quality),this.resize(),this.setTime("day"),addEventListener("resize",()=>this.resize())}setQuality(e){const t=wo[e]||wo.high;if(this.quality=e,this.q=t,this.renderer.shadowMap.enabled=t.shadow>0,this.sun.castShadow=t.shadow>0,t.shadow){const n=this.sun.shadow;n.mapSize.set(t.shadow,t.shadow);const s=90;n.camera.left=-s,n.camera.right=s,n.camera.top=s,n.camera.bottom=-s,n.camera.near=10,n.camera.far=500,n.bias=-25e-5,n.normalBias=.35,n.map&&(n.map.dispose(),n.map=null)}this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.resize(),this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.camera.fov=this.camera.aspect<1?78:this.baseFov||62,this.camera.updateProjectionMatrix()}setTime(e,t="clear"){const n=Oh[e]||Oh.day;this.timeKey=e,this.weather=t;const s=this.sky.material.uniforms,r=t==="overcast"||t==="rain";s.turbidity.value=r?14:n.turb,s.rayleigh.value=r?.6:n.ray,s.mieCoefficient.value=r?.02:n.mie,s.mieDirectionalG.value=n.g;const a=wi.degToRad(90-n.elev),o=wi.degToRad(n.azim);this.sunDir.setFromSphericalCoords(1,a,o),s.sunPosition.value.copy(this.sunDir),this.sun.color.set(n.sunCol),this.sun.intensity=n.sun*(r?.35:1),e==="night"&&(this.sunDir.set(-.4,.8,.45).normalize(),this.sun.intensity=.9),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemi*(r?1.25:1),this.renderer.toneMappingExposure=n.exposure*(r?1.15:1),this.scene.fog.color.set(r?10134704:n.fog),this.scene.fog.density=n.fogD*(r?2.2:1),this.lampsOn=n.lamps,this.bakeEnv(),this.onTime&&this.onTime(e,t)}bakeEnv(){const e=new Yl,t=new mr;t.scale.setScalar(2e4),e.add(t);for(const s of Object.keys(this.sky.material.uniforms))if(t.material.uniforms[s]&&this.sky.material.uniforms[s].value!==void 0){const r=this.sky.material.uniforms[s].value;t.material.uniforms[s].value=r.clone?r.clone():r}const n=this.envRT;this.envRT=this.pmrem.fromScene(e,0,1,5e4),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=this.timeKey==="night"?.25:.9,n&&n.dispose(),t.material.dispose(),t.geometry.dispose()}followSun(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,220),this.sun.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}const To=5.6,Yr=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function ev(i){const e=i.cfg,t=e.pit;if(!t)return null;const n=e.halfW+e.apron,s=t.stalls,r=t.stallLen,a=t.ramp,o=14,c=s*r+o*2,l=a+c+a,u=i.wrapS((t.mid||0)-l/2),h=-(n+6.4),f=-(n-2),d=-(n+12),m=-(n+14.8),v=-(n+15.1),g=y=>a+o+(y+.5)*r,p={n:s,SL:r,E:a,S:c,len:l,s0:u,A:n,cF:h,c0:f,uStop:d,uWallFace:m,uWallMid:v,limit:t.limit,stallP:g,wallP0:a+3,wallP1:a+c-3,limIn:16,limOut:l-14,pOf(y){return i.wrapS(y-u)},sOf(y){return i.wrapS(u+y)},cAt(y){return y<a?f+(h-f)*Yr(y/a):y>a+c?h+(f-h)*Yr((y-a-c)/a):h},wExt(y){return To*Yr((y-a)/12)*(1-Yr((y-(a+c-12))/12))},hi(y){return p.cAt(y)+To/2},lo(y){return p.cAt(y)-To/2-p.wExt(y)},on(y,x){const _=i.wrapS(y-u);return _>l?-1:x<=p.hi(_)&&x>=p.lo(_)?_:-1},stallFor(y,x){const _=Math.max(0,(y|0)-1);return x<=s?Math.min(_,s-1):Math.min(s-1,Math.floor(_*s/x))},pathU(y,x){return p.cAt(y)},slope(y){return(p.cAt(y+.5)-p.cAt(y-.5))/(2*.5)},stallPose(y,x={}){const _=p.sOf(g(y));i.point(_,d,x);const S=i.at(_);return x.s=_,x.tx=S.tx,x.tz=S.tz,x.rx=S.rx,x.rz=S.rz,x}};return p}const bn=wi.degToRad,jr={halfW:11,apron:8,wallH:1.3,infieldLimit:70,bulge:0,lake:0},bt={americas:{...jr,id:"americas",short:"Americas",name:"Americas Superspeedway",kind:"Superspeedway",miles:2.5,straight:1e3,radius:300,bulge:34,maxBank:bn(30),frontBank:bn(7),backBank:bn(3),lake:1,standRows:1,laps:[3,5,8,12],crowdK:1,pit:{limit:29,stalls:40,stallLen:13,ramp:60}},lonestar:{...jr,id:"lonestar",short:"Lone Star",name:"Lone Star Motor Speedway",kind:"Intermediate tri-oval",miles:1.5,straight:450,radius:240,halfW:11,bulge:16,maxBank:bn(24),frontBank:bn(5),backBank:bn(4),lake:.7,standRows:.85,laps:[5,8,12,20],crowdK:.8,pit:{limit:25,stalls:30,stallLen:12.5,ramp:52}},piedmont:{...jr,id:"piedmont",short:"Piedmont",name:"Piedmont Mile",kind:"One-mile flat oval",miles:1,straight:340,radius:150,halfW:10.5,apron:7,maxBank:bn(12),frontBank:bn(4),backBank:bn(4),lake:.3,standRows:.7,laps:[8,12,18,28],crowdK:.65,pit:{limit:22,stalls:24,stallLen:12,ramp:46}},thunder:{...jr,id:"thunder",short:"Thunder Bowl",name:"Thunder Bowl",kind:"Short track bullring",miles:.53,straight:190,radius:80,halfW:9.5,apron:6,maxBank:bn(26),frontBank:bn(8),backBank:bn(8),lake:0,standRows:.55,laps:[15,25,40,60],crowdK:.5,infieldLimit:40,pit:{limit:18,stalls:16,stallLen:10.5,ramp:38}}},xd=["americas","lonestar","piedmont","thunder"],Md=bt.americas;function $r(i,e,t=!0){const n=i.length,s=new Float64Array(n),r=Math.ceil(e*3),a=[];let o=0;for(let c=-r;c<=r;c++){const l=Math.exp(-(c*c)/(2*e*e));a.push(l),o+=l}for(let c=0;c<n;c++){let l=0;for(let u=-r;u<=r;u++)l+=i[(c+u+n*8)%n]*a[u+r];s[c]=l/o}return s}function tv(i=Md){const{straight:e,radius:t,bulge:n}=i,s=[],r=1,a=e/2,o=(N,O,W,B)=>{const j=Math.hypot(W-N,B-O),J=Math.max(1,Math.round(j/r));for(let pe=0;pe<J;pe++)s.push([N+(W-N)*pe/J,O+(B-O)*pe/J])},c=(N,O,W,B)=>{const j=Math.abs(B-W)*t,J=Math.max(2,Math.round(j/r));for(let pe=0;pe<J;pe++){const be=W+(B-W)*pe/J;s.push([N+t*Math.cos(be),O+t*Math.sin(be)])}};o(0,t,a,t),c(a,0,Math.PI/2,-Math.PI/2),o(a,-t,-a,-t),c(-a,0,-Math.PI/2,-3*Math.PI/2),o(-a,t,0,t);for(const N of s)if(N[1]>t-1&&Math.abs(N[0])<a){const O=(N[0]+a)/(2*a);N[1]+=n*Math.pow(Math.sin(Math.PI*O),2)}const l=s.length,u=Float64Array.from(s,N=>N[0]),h=Float64Array.from(s,N=>N[1]),f=wi.clamp(t*.23,17,70),d=$r(u,f),m=$r(h,f),v=new Float64Array(l+1);for(let N=0;N<l;N++){const O=(N+1)%l;v[N+1]=v[N]+Math.hypot(d[O]-d[N],m[O]-m[N])}const g=v[l],p=Math.round(g/3.8),y=g/p,x=new Float64Array(p),_=new Float64Array(p);let S=0;for(let N=0;N<p;N++){const O=N*y;for(;v[S+1]<O;)S++;const W=(O-v[S])/(v[S+1]-v[S]),B=(S+1)%l;x[N]=d[S]+(d[B]-d[S])*W,_[N]=m[S]+(m[B]-m[S])*W}const w=new Float64Array(p),E=new Float64Array(p),L=new Float64Array(p);for(let N=0;N<p;N++){const O=(N+p-1)%p,W=(N+1)%p,B=x[W]-x[O],j=_[W]-_[O],J=Math.hypot(B,j);w[N]=B/J,E[N]=j/J}for(let N=0;N<p;N++){const O=(N+p-1)%p,W=(N+1)%p,B=w[O]*E[W]-E[O]*w[W];L[N]=-Math.asin(wi.clamp(B,-1,1))/(2*y)}const M=$r(L,Math.max(2,Math.round(6*t/300))),b=.85/t,C=new Float64Array(p);for(let N=0;N<p;N++){const O=wi.clamp(M[N]/b,0,1),W=O*O*(3-2*O),j=(_[N]>t*.6?1:0)?i.frontBank:i.backBank;C[N]=j+(i.maxBank-j)*W}const k=$r(C,Math.max(4,Math.round(22*t/300))),D=new Float64Array(p);for(let N=0;N<p;N++)D[N]=i.halfW*Math.sin(k[N]);const V=new Float64Array(p);for(let N=0;N<p;N++)V[N]=N*y;return{N:p,ds:y,length:g,px:x,pz:_,tx:w,tz:E,k:M,bank:k,yc:D,s:V,cfg:i}}class nv{constructor(e=Md){this.cfg=e,this.id=e.id||"americas",this.name=e.name||"",this.d=tv(e),this.N=this.d.N,this.length=this.d.length,this.ds=this.d.ds,this.pit=ev(this)}wrapS(e){const t=this.length;return(e%t+t)%t}idx(e){return Math.floor(this.wrapS(e)/this.ds)%this.N}at(e){const t=this.d,n=this.wrapS(e)/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,a=n-Math.floor(n),o=t.px[s]+(t.px[r]-t.px[s])*a,c=t.pz[s]+(t.pz[r]-t.pz[s])*a;let l=t.tx[s]+(t.tx[r]-t.tx[s])*a,u=t.tz[s]+(t.tz[r]-t.tz[s])*a;const h=Math.hypot(l,u);return l/=h,u/=h,{x:o,z:c,tx:l,tz:u,rx:-u,rz:l,bank:t.bank[s]+(t.bank[r]-t.bank[s])*a,yc:t.yc[s]+(t.yc[r]-t.yc[s])*a,k:t.k[s],i:s}}point(e,t,n={}){const s=this.at(e),r=this.cfg.halfW,a=Math.cos(s.bank),o=Math.sin(s.bank);return t>=-r?(n.x=s.x+s.rx*t*a,n.z=s.z+s.rz*t*a,n.y=s.yc+t*o):(n.x=s.x+s.rx*(-r*a+(t+r)),n.z=s.z+s.rz*(-r*a+(t+r)),n.y=0),n.heading=Math.atan2(s.tx,s.tz),n.bank=s.bank,n}query(e,t,n,s={}){const r=this.d,a=this.N;let o=1e18,c=n|0;const l=n===void 0?a:24;for(let M=-l;M<=l;M++){const b=((n|0)+M+a*4)%a,C=e-r.px[b],k=t-r.pz[b],D=C*C+k*k;D<o&&(o=D,c=b)}if(n!==void 0){if(o>2500)for(let M=0;M<a;M++){const b=e-r.px[M],C=t-r.pz[M],k=b*b+C*C;k<o&&(o=k,c=M)}}let u=c,h=(c+1)%a,f=r.px[h]-r.px[u],d=r.pz[h]-r.pz[u],m=((e-r.px[u])*f+(t-r.pz[u])*d)/(f*f+d*d);m<0&&(h=u,u=(c+a-1)%a,f=r.px[h]-r.px[u],d=r.pz[h]-r.pz[u],m=((e-r.px[u])*f+(t-r.pz[u])*d)/(f*f+d*d)),m=wi.clamp(m,0,1);const v=this.wrapS((u===a-1&&h===0?a-1+m:u+m)*this.ds),g=this.at(v),p=e-g.x,y=t-g.z,x=p*g.rx+y*g.rz,_=this.cfg.halfW,S=Math.cos(g.bank),w=Math.sin(g.bank),E=x>=-_*S?x/S:x+_*S-_;s.i=c,s.s=v,s.u=E,s.lat=x,s.bank=g.bank,s.tx=g.tx,s.tz=g.tz,s.k=g.k,s.rx=g.rx,s.rz=g.rz,s.surface=E>_+.4?"wall":E>=-_?"track":E>=-_-this.cfg.apron?"apron":"grass",s.y=E>=-_?g.yc+Math.min(E,_+.4)*w:0,s.pit=-1,s.inPit=!1;const L=this.pit;if(L&&E<-_-this.cfg.apron+3.2&&E>L.uWallFace-.6){const M=L.on(v,E);M>=0&&(s.pit=M,s.surface==="grass"&&(s.surface="apron"),s.inPit=E<-_-this.cfg.apron-.2)}return s}}function fs(i,e,t={}){const{N:n}=i,{uvU:s=12,uvV:r=12,yOff:a=0,color:o=null,wrapUV:c=!0,sFrom:l=0,sTo:u=n,yFn:h=null,closed:f=!0}=t,d=e.length,m=u-l+(f&&l===0&&u===n?1:0),v=new Float32Array(d*m*3),g=new Float32Array(d*m*2),p=o?new Float32Array(d*m*3):null,y={};for(let S=0;S<m;S++){const w=l+S,E=w%n*i.ds+(w>=n?i.length:0);for(let L=0;L<d;L++){i.point(w%n*i.ds,e[L],y);const M=S*d+L;if(v[M*3]=y.x,v[M*3+1]=y.y+a+(h?h(e[L],w%n):0),v[M*3+2]=y.z,g[M*2]=e[L]/s,g[M*2+1]=w*i.ds/r,p){const b=o(e[L],w%n,E);p[M*3]=b[0],p[M*3+1]=b[1],p[M*3+2]=b[2]}}}const x=[];for(let S=0;S<m-1;S++)for(let w=0;w<d-1;w++){const E=S*d+w,L=E+1,M=(S+1)*d+w,b=M+1;x.push(E,L,M,L,b,M)}const _=new Nt;return _.setAttribute("position",new mt(v,3)),_.setAttribute("uv",new mt(g,2)),p&&_.setAttribute("color",new mt(p,3)),_.setIndex(x),_.computeVertexNormals(),_}const Fe=(i,e,t)=>i<e?e:i>t?t:i,si=(i,e,t)=>i+(e-i)*t,sr=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function wa(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Lc=["hood","roof","door","quarter","trunk","bumper"],ga={hood:"Hood",roof:"Roof",door:"Doors",quarter:"Rear quarters",trunk:"Trunk",bumper:"Front bumper"},gr=[{id:"dustyfork",name:"Dusty Fork Diner",tier:1,payout:120,slots:["door","quarter","bumper"],colors:["#f2b134","#7a2e1b"]},{id:"greaseline",name:"Greaseline Garage",tier:1,payout:140,slots:["door","trunk","bumper"],colors:["#e8e8e8","#d1342c"]},{id:"cornerbolt",name:"Corner Bolt Supply",tier:1,payout:150,slots:["quarter","door","trunk"],colors:["#2f6fdb","#f4f4f4"]},{id:"vantafuel",name:"Vanta Fuel",tier:2,payout:320,slots:["hood","door","trunk"],colors:["#13c28a","#0b2a24"]},{id:"halo",name:"Halo Energy",tier:2,payout:360,slots:["hood","roof","quarter"],colors:["#ffd400","#1a1a1a"]},{id:"ironbark",name:"Ironbark Tools",tier:2,payout:340,slots:["door","quarter","hood"],colors:["#e2552c","#222"]},{id:"meridian",name:"Meridian Mobile",tier:3,payout:720,slots:["hood","roof","door"],colors:["#00a3e0","#ffffff"]},{id:"stratus",name:"Stratus Air",tier:3,payout:760,slots:["hood","trunk","quarter"],colors:["#5b4bd6","#ffffff"]},{id:"kestrel",name:"Kestrel Tires",tier:3,payout:700,slots:["door","bumper","quarter"],colors:["#111","#ffcf1b"]},{id:"apexgrid",name:"Apex Grid Power",tier:4,payout:1500,slots:["hood","roof","door"],colors:["#ff2d55","#0d0d0d"]},{id:"northstar",name:"Northstar Motors",tier:4,payout:1600,slots:["hood","door","trunk"],colors:["#c0c6cc","#0a2a66"]}],Ns=i=>gr.find(e=>e.id===i)||null,Bh=2.23694;function zh(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new La(n);return s.colorSpace=Rt,s.anisotropy=4,s}function iv(i,e,t){const n=i.pit;if(!n)return null;const{paint:s,wallMat:r,asphaltMat:a}=t;i.cfg;const o=new dn;o.name="pit",e.add(o);const c={},l=(ie,de)=>(i.point(ie,de,c),c);{const de=Math.ceil(n.len/2)+1,ae=9,I=new Float32Array(de*ae*3),Re=new Float32Array(de*ae*2),Te=new Float32Array(de*ae*3);for(let fe=0;fe<de;fe++){const _e=Math.min(n.len,fe*2),Ke=n.sOf(_e),je=n.lo(_e),P=n.hi(_e);for(let T=0;T<ae;T++){const Q=je+(P-je)*T/(ae-1),U=l(Ke,Q),H=fe*ae+T;I[H*3]=U.x,I[H*3+1]=.012,I[H*3+2]=U.z,Re[H*2]=Q/7,Re[H*2+1]=Ke/7;const z=.9+.05*Math.sin(_e*.21+T);Te[H*3]=z,Te[H*3+1]=z,Te[H*3+2]=z*1.02}}const ve=[];for(let fe=0;fe<de-1;fe++)for(let _e=0;_e<ae-1;_e++){const Ke=fe*ae+_e,je=Ke+1,P=(fe+1)*ae+_e,T=P+1;ve.push(Ke,je,P,je,T,P)}const re=new Nt;re.setAttribute("position",new mt(I,3)),re.setAttribute("uv",new mt(Re,2)),re.setAttribute("color",new mt(Te,3)),re.setIndex(ve),re.computeVertexNormals();const Oe=new nt(re,a);Oe.receiveShadow=!0,Oe.name="pitRoad",o.add(Oe)}const u=[],h=[],f=[.95,.95,.93],d=[.95,.76,.05],m=(ie,de,ae,I,Re)=>{const Te=l(n.sOf(ie),ae),ve=[Te.x,Te.z],re=l(n.sOf(ie),I),Oe=[re.x,re.z],fe=l(n.sOf(de),I),_e=[fe.x,fe.z],Ke=l(n.sOf(de),ae),je=[Ke.x,Ke.z];for(const[P,T]of[ve,Oe,_e,ve,_e,je])u.push(P,.028,T),h.push(Re[0],Re[1],Re[2])},v=(ie,de,ae,I,Re,Te=0,ve=0)=>{let Oe=!0,fe=0;for(let _e=ie;_e<de;_e+=2){const Ke=Math.min(de,_e+2);Te&&(fe+=2,fe>=(Oe?Te:ve)&&(Oe=!Oe,fe=0),!Oe)||m(_e,Ke,ae(_e)-I/2,ae((_e+Ke)/2)+I/2,Re)}};v(0,n.len,ie=>n.hi(ie)-.22,.2,f),v(0,n.len,ie=>n.lo(ie)+.22,.2,f),v(n.E+10,n.E+n.S-10,()=>n.cF-2.8,.16,f),v(n.limIn-1,n.limIn+.2,ie=>n.cAt(ie)-0+0,5.6,f),v(n.limOut-.2,n.limOut+1,ie=>n.cAt(ie),5.6,d);for(let ie=0;ie<=n.n;ie++){const de=n.E+14+ie*n.SL;m(de-.08,de+.08,n.cF-2.8,n.uWallFace+.25,f)}for(let ie=0;ie<n.n;ie++){const de=n.stallP(ie);m(de-.9,de+.9,n.uStop-.08,n.uStop+.08,[.55,.9,.55]),m(de-.08,de+.08,n.uStop-1.6,n.uStop+1.6,[.55,.9,.55])}{const ie=new Nt;ie.setAttribute("position",new It(u,3)),ie.setAttribute("color",new It(h,3));const de=new nt(ie,new Qt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,side:Wt}));de.name="pitPaint",o.add(de)}{const ie=Math.round(n.limit*Bh),de=zh(128,256,(ae,I,Re)=>{ae.clearRect(0,0,I,Re),ae.fillStyle="rgba(245,245,240,0.92)",ae.font='800 80px "Barlow Condensed", Impact, sans-serif',ae.textAlign="center",ae.textBaseline="middle",ae.fillText("PIT",I/2,40),ae.font='800 118px "Barlow Condensed", Impact, sans-serif',ae.fillText(String(ie),I/2,150),ae.font='700 40px "Barlow Condensed", Impact, sans-serif',ae.fillText("MPH",I/2,226)});for(const ae of[n.limIn+9,n.E+n.S*.5,n.limOut-24]){const I=n.sOf(ae),Re=i.at(I),Te=l(I,n.cF+0-0),ve=new nt(new An(2.6,5.2),new Qt({map:de,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),re=new F(Re.tx,0,Re.tz),Oe=new F(0,1,0),fe=new F().crossVectors(re,Oe).normalize(),_e=new Qe().makeBasis(fe,re,Oe);ve.quaternion.setFromRotationMatrix(_e),ve.position.set(Te.x,.034,Te.z),o.add(ve)}}{const ae=Math.ceil((n.wallP1-n.wallP0)/2)+1,I=[],Re=[],Te=[];for(let Oe=0;Oe<ae;Oe++){const fe=Math.min(n.wallP1,n.wallP0+Oe*2),_e=n.sOf(fe),Ke=l(_e,n.uWallFace),je=l(_e,n.uWallMid-.3);I.push(Ke.x,0,Ke.z,Ke.x,1.05,Ke.z,je.x,1.05,je.z,je.x,0,je.z);const P=fe/4;Re.push(P,0,P,1,P,1,P,0)}for(let Oe=0;Oe<ae-1;Oe++){const fe=Oe*4,_e=fe+4;Te.push(fe,fe+1,_e,fe+1,_e+1,_e,fe+1,fe+2,_e+1,fe+2,_e+2,_e+1,fe+2,fe+3,_e+2,fe+3,_e+3,_e+2)}const ve=new Nt;ve.setAttribute("position",new It(I,3)),ve.setAttribute("uv",new It(Re,2)),ve.setIndex(Te),ve.computeVertexNormals();const re=new nt(ve,new Ut({map:r.map,roughness:.85,side:Wt}));re.castShadow=!0,re.receiveShadow=!0,re.name="pitWall",o.add(re)}const g=n.n,p=new Qe,y=new Mt,x=new F(1,1,1),_=new F,S=new $t,w=(ie,de,ae,I,Re,Te=0,ve=null)=>{const re=l(ae,I);S.set(0,re.heading+Te,0),y.setFromEuler(S),_.set(re.x,Re,re.z),p.compose(_,y,ve||x),ie.setMatrixAt(de,p)},E=(ie,de,ae)=>{const I=new Hn(ie,de,ae);return I.castShadow=!0,I.receiveShadow=!0,o.add(I),I},L=s(2895667,{roughness:.6}),M=s(8028295,{metalness:.6,roughness:.4}),b=s(1381653,{roughness:.9}),C=s(12856101,{roughness:.5}),k=E(new Ft(1.3,1,2.2),L,g),D=E(new qn(.05,.05,2.7,6),M,g),V=E(new Ft(1.7,.08,2.8),s(14672612,{roughness:.5}),g),N=E(new qn(.34,.34,.27,12),b,g*8),O=E(new Ft(.36,.7,.3),C,g*2),W=E(new qn(.06,.06,4.7,6),M,g),B=E(new Ft(8,4.2,n.SL-.8),s(13619924,{roughness:.7}),g),j=E(new Ft(.12,3.2,n.SL-3.2),s(3817285,{roughness:.5,metalness:.3}),g),J=E(new Ft(9,.25,n.SL-.4),s(9146518,{roughness:.7}),g),pe=n.uWallMid-2.6,be=n.uWallMid-1.2,Ee=n.uWallMid-1.3,He=-(n.A+26),Ue=[];for(let ie=0;ie<g;ie++){const de=n.sOf(n.stallP(ie));w(k,ie,de-3,pe,.5),w(D,ie,de-3,pe-.3,2.35),w(V,ie,de-3,pe,3.7);for(let ve=0;ve<2;ve++)for(let re=0;re<4;re++)w(N,ie*8+ve*4+re,de+1.5+ve*.85,be,.15+re*.28);w(O,ie*2,de-.6,n.uWallMid-1.1,.35),w(O,ie*2+1,de-.6-.45,n.uWallMid-1.1,.35),w(W,ie,de+4,Ee,2.35),w(B,ie,de,He,2.1),w(j,ie,de,He+4+.1,1.7),w(J,ie,de,He,4.3);const ae=document.createElement("canvas");ae.width=192,ae.height=108;const I=new La(ae);I.colorSpace=Rt,I.anisotropy=4;const Re=new nt(new An(1.9,1.07),new Qt({map:I,side:Wt})),Te=l(de+4,Ee+0);Re.position.set(Te.x,4.55,Te.z),Re.rotation.y=Te.heading-Math.PI/2,o.add(Re),Ue.push({cvn:ae,tex:I,sign:Re})}for(const ie of[k,D,V,N,O,W,B,j,J])ie.instanceMatrix.needsUpdate=!0;const ee=(ie,de,ae,I,Re)=>{const{cvn:Te,tex:ve}=Ue[ie],re=Te.getContext("2d");re.fillStyle=ae,re.fillRect(0,0,192,108),re.fillStyle="rgba(0,0,0,0.28)",re.fillRect(0,0,192,20),re.fillStyle="#f4f4f4",re.font='700 17px "Barlow Condensed", Arial, sans-serif',re.textAlign="center",re.textBaseline="middle",re.fillText(Re,96,11),re.fillStyle=I,re.font='italic 800 76px "Barlow Condensed", Impact, sans-serif',re.fillText(de,96,64),ve.needsUpdate=!0};for(let ie=0;ie<g;ie++)ee(ie,String(ie+1),"#4a5058","#e8eaed","STALL");const he=ie=>{const de=new Set;for(const ae of ie){if(ae.stall<0||ae.stall>=g||de.has(ae.stall))continue;de.add(ae.stall);const I=Re=>{const Te=new qe(Re);return Te.r*.3+Te.g*.6+Te.b*.1>.55};ee(ae.stall,"#"+ae.number,ae.paint,I(ae.paint)?"#101010":"#ffffff","STALL "+(ae.stall+1))}for(let ae=0;ae<g;ae++)de.has(ae)||ee(ae,String(ae+1),"#4a5058","#e8eaed","STALL")};{const ie=(ae,I,Re,Te,ve,re=!0,Oe=-1)=>{const fe=zh(256,Math.round(256*Re/I),Te),_e=n.sOf(ae),Ke=-(n.A+2),je=new nt(new qn(.07,.07,ve+.6,6),M),P=l(_e,Ke);je.position.set(P.x,(ve+.6)/2-.3,P.z),o.add(je);const T=new nt(new An(I,Re),new Qt({map:fe,side:Wt}));T.position.set(P.x,ve,P.z),T.rotation.y=P.heading+(re?Math.PI:0),o.add(T)},de=Math.round(n.limit*Bh);ie(n.limIn-14,3,1.5,(ae,I,Re)=>{ae.fillStyle="#f2f2ee",ae.fillRect(0,0,I,Re),ae.fillStyle="#111",ae.lineWidth=6,ae.strokeRect(5,5,I-10,Re-10),ae.fillStyle="#111",ae.textAlign="center",ae.textBaseline="middle",ae.font='800 40px "Barlow Condensed", Arial, sans-serif',ae.fillText("PIT SPEED LIMIT",I/2,Re*.22),ae.font='800 112px "Barlow Condensed", Impact, sans-serif',ae.fillText(String(de),I/2,Re*.62)},2.6),ie(n.limIn-40,3.2,1,(ae,I,Re)=>{ae.fillStyle="#1b5fb0",ae.fillRect(0,0,I,Re),ae.fillStyle="#fff",ae.textAlign="center",ae.textBaseline="middle",ae.font='800 78px "Barlow Condensed", Impact, sans-serif',ae.fillText("PIT ROAD",I/2,Re/2)},2.8),ie(n.len-30,3.2,1,(ae,I,Re)=>{ae.fillStyle="#b32019",ae.fillRect(0,0,I,Re),ae.fillStyle="#fff",ae.textAlign="center",ae.textBaseline="middle",ae.font='800 78px "Barlow Condensed", Impact, sans-serif',ae.fillText("PIT EXIT",I/2,Re/2)},2.8,!1)}const Me=new dn;Me.visible=!1,o.add(Me);{const ie=new Qt({color:4063098,transparent:!0,opacity:.35,depthWrite:!1,blending:_a,side:Wt}),de=new nt(new An(4.2,n.SL-2.6),ie);de.rotation.x=-Math.PI/2,de.position.y=.05,Me.add(de);const ae=new nt(new qn(.5,.5,16,14,1,!0),new Qt({color:4063098,transparent:!0,opacity:.16,depthWrite:!1,blending:_a,side:Wt}));ae.position.y=8,Me.add(ae),Me.userData={pad:de,beam:ae}}return{group:o,assign:he,marker:Me,placeMarker:ie=>{if(ie==null||ie<0){Me.visible=!1;return}const de=n.stallPose(ie,{});Me.position.set(de.x,0,de.z),Me.rotation.y=de.heading,Me.visible=!0},signs:Ue}}const sv={},rv=sv&&"./"||"./",av=new fd;function ps(i,e=!0,t=!1,n=8){const s=av.load(rv+"assets/tex/"+i);return e&&(s.wrapS=s.wrapT=Ei),s.anisotropy=n,t&&(s.colorSpace=Rt),s}function Zr(i,e,t,n=!1,s=!0){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new La(r);return n&&(a.wrapS=a.wrapT=Ei),s&&(a.colorSpace=Rt),a.anisotropy=8,a}function ov(i,e,t=()=>{}){const n=new dn;n.name="track";const s=wa(2026),r=i.cfg,a=r.halfW,o=i.N,c=8,l=r.straight/2,u=l+r.radius,h=r.radius+(r.bulge||0)*.5,f=i.length,d=Math.PI*r.radius,m=Math.max(.35,u/800),v=ps("asphalt_track_col.jpg",!0,!0,c),g=ps("asphalt_track_nrm.jpg",!0,!1,c),p=ps("asphalt_track_rgh.jpg",!0,!1,c),y=new Ut({map:v,normalMap:g,roughnessMap:p,roughness:1,metalness:0,vertexColors:!0,normalScale:new et(.8,.8)}),x=ps("sparse_grass_col.jpg",!0,!0,c),_=ps("sparse_grass_nrm.jpg"),S=ps("sparse_grass_rgh.jpg");for(const U of[x,_,S])U.repeat.set(220,220);const w=new Ut({map:x,normalMap:_,roughnessMap:S,color:12175258,roughness:1}),E=Zr(512,128,(U,H,z)=>{U.fillStyle="#b9b9b4",U.fillRect(0,0,H,z);for(let K=0;K<2600;K++)U.fillStyle=`rgba(${90+s()*70|0},${90+s()*70|0},${88+s()*70|0},0.12)`,U.fillRect(s()*H,s()*z,2+s()*3,1+s()*3);U.fillStyle="rgba(255,255,255,0.9)",U.fillRect(0,z*.28,H,z*.2),U.fillStyle="rgba(0,0,0,0.18)",U.fillRect(0,z*.78,H,z*.22),U.fillStyle="rgba(0,0,0,0.35)";for(let K=0;K<H;K+=128)U.fillRect(K,0,2,z)},!0),L=new Ut({map:E,roughness:.85,metalness:0}),M=new Ut({color:9408911,roughness:.95}),b=(U,H={})=>new Ut(Object.assign({color:U,roughness:.55,metalness:.05},H)),C=[];for(let U=0;U<=16;U++)C.push(-a+2*a*U/16);const k=(U,H,z)=>{const K=.5+.5*Math.sin(z*.011+1.3)*Math.sin(z*.0037),te=Math.exp(-Math.pow((U+3.5)/3.2,2))*.28,ce=Math.exp(-Math.pow((U-4.2)/3,2))*.22,oe=Math.exp(-Math.pow((U-a)/1.4,2))*.14+Math.exp(-Math.pow((U+a)/1.4,2))*.08,Y=.78+.18*K,le=Math.max(.3,Y-te-ce-oe);return[le,le,le*1.02]},D=new nt(fs(i,C,{uvU:7,uvV:7,color:k}),y);D.receiveShadow=!0,D.name="road",n.add(D);const V=[];for(let U=0;U<=4;U++)V.push(-a-r.apron*U/4);const N=y.clone();N.color=new qe(12171958);const O=new nt(fs(i,V.slice().reverse(),{uvU:7,uvV:7,color:()=>[.95,.95,.95]}),N);O.receiveShadow=!0,n.add(O),t(.15);const W=U=>new Qt({color:U,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),B=(U,H,z,K=.03)=>{const te=new nt(fs(i,[U,H],{yOff:K}),W(z));return n.add(te),te};B(a-.55,a-.3,15987696),B(-a+.3,-a+.55,15987696),B(-a-.05,-a+.12,15909376),B(-a-.5,-a-.33,15909376);const j=Zr(256,32,(U,H,z)=>{for(let te=0;te<16;te++)for(let ce=0;ce<2;ce++)U.fillStyle=(te+ce)%2?"#111":"#fff",U.fillRect(H/16*te,z/2*ce,H/16,z/2)});{const U=new An(2*a,1.6),H=new nt(U,new Qt({map:j,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),z=i.point(0,0,{}),K=i.at(0);H.position.set(z.x,z.y+.04,z.z),H.rotation.order="YXZ",H.rotation.y=Math.atan2(K.tx,K.tz),H.rotation.x=-Math.PI/2,H.rotation.z=0,H.rotation.set(0,0,0);const te=new Qe,ce=new F(K.tx,0,K.tz),oe=new F(-K.rx*Math.sin(K.bank),Math.cos(K.bank),-K.rz*Math.sin(K.bank)),Y=new F().crossVectors(ce,oe).normalize();te.makeBasis(Y,ce,oe),H.quaternion.setFromRotationMatrix(te),n.add(H)}t(.25);const J=a+.5,pe=(()=>{const U=fs(i,[0,1],{uvU:1,uvV:1});U.attributes.position,U.attributes.uv;const H=o+1,z=new Float32Array(H*2*3),K=new Float32Array(H*2*2),te={};for(let Y=0;Y<H;Y++){const le=Y%o;i.point(le*i.ds,J,te);const me=Y*2;z[me*3]=te.x,z[me*3+1]=te.y-.2,z[me*3+2]=te.z,z[(me+1)*3]=te.x,z[(me+1)*3+1]=te.y+r.wallH,z[(me+1)*3+2]=te.z,K[me*2]=Y*i.ds/4,K[me*2+1]=0,K[(me+1)*2]=Y*i.ds/4,K[(me+1)*2+1]=1}const ce=[];for(let Y=0;Y<H-1;Y++){const le=Y*2,me=le+1,Ae=le+2,Se=le+3;ce.push(le,me,Ae,me,Se,Ae)}const oe=new Nt;return oe.setAttribute("position",new mt(z,3)),oe.setAttribute("uv",new mt(K,2)),oe.setIndex(ce),oe.computeVertexNormals(),oe})(),be=new nt(pe,new Ut({map:E,roughness:.85,side:Wt}));be.receiveShadow=!0,be.castShadow=!0,n.add(be),n.add(new nt(fs(i,[J-.2,J+.5],{yOff:r.wallH}),M));const Ee=[];for(let U=0;U<=6;U++)Ee.push(J+.5+U*2.5);const He=fs(i,Ee,{uvU:8,uvV:8,yFn:(U,H)=>{const z=i.d.yc[H]+J*Math.sin(i.d.bank[H]),K=(U-(J+.5))/15;return-Math.min(1,K)*(z+.2)-.1+(K>0,0)}});{const U=He.attributes.position,H=Ee.length;for(let z=0;z<U.count/H;z++){const K=z*H+(H-1);U.setY(K,-.05)}He.computeVertexNormals()}const Ue=new nt(He,new Ut({color:10263960,roughness:1,map:v}));Ue.receiveShadow=!0,n.add(Ue);const ee=Zr(128,128,(U,H,z)=>{U.clearRect(0,0,H,z),U.strokeStyle="rgba(200,205,210,0.95)",U.lineWidth=2;for(let K=-z;K<H+z;K+=16)U.beginPath(),U.moveTo(K,0),U.lineTo(K+z,z),U.stroke(),U.beginPath(),U.moveTo(K+z,0),U.lineTo(K,z),U.stroke()},!0);ee.repeat.set(1,1);const he=(()=>{const U=o+1,H=new Float32Array(U*2*3),z=new Float32Array(U*2*2),K={},te=7;for(let Y=0;Y<U;Y++){const le=Y%o;i.point(le*i.ds,J+.2,K);const me=Y*2;H[me*3]=K.x,H[me*3+1]=K.y+r.wallH,H[me*3+2]=K.z,H[(me+1)*3]=K.x,H[(me+1)*3+1]=K.y+r.wallH+te,H[(me+1)*3+2]=K.z,z[me*2]=Y*i.ds/2.5,z[me*2+1]=0,z[(me+1)*2]=Y*i.ds/2.5,z[(me+1)*2+1]=3}const ce=[];for(let Y=0;Y<U-1;Y++){const le=Y*2;ce.push(le,le+1,le+2,le+1,le+3,le+2)}const oe=new Nt;return oe.setAttribute("position",new mt(H,3)),oe.setAttribute("uv",new mt(z,2)),oe.setIndex(ce),oe.computeVertexNormals(),oe})();n.add(new nt(he,new Qt({map:ee,transparent:!0,alphaTest:.2,side:Wt,depthWrite:!1,fog:!0})));{const U=new Hn(new qn(.07,.09,7.4,6),b(7238520,{metalness:.6,roughness:.4}),Math.ceil(i.length/9)),H=new Qe,z={};let K=0;for(let te=0;te<i.length;te+=9)i.point(te,J+.2,z),H.makeTranslation(z.x,z.y+r.wallH+3.6,z.z),U.setMatrixAt(K++,H);U.count=K,n.add(U)}t(.4);const Me=new nt(new An(9e3,9e3),w);Me.rotation.x=-Math.PI/2,Me.position.y=-.06,Me.receiveShadow=!0,Me.name="ground",n.add(Me);{const U=new An(r.straight*1.4,r.radius*1.4),H=new nt(U,new Qt({color:5138997,transparent:!0,opacity:.18,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.set(0,-.04,-r.radius*.1),n.add(H)}if(r.lake>0){const U=new nt(new sl(150,40),new Ut({color:2775666,roughness:.08,metalness:0,envMapIntensity:1.4}));U.rotation.x=-Math.PI/2,U.scale.set(1.9*r.lake*Math.max(.5,m),.55*r.lake*Math.max(.5,r.radius/300),1),U.position.set(0,-.02,-r.radius*.17),n.add(U)}t(.5);const ze=Math.round(e.crowd*(r.crowdK||1)),ie=r.standRows||1,de=U=>Math.max(5,Math.round(U*ie)),ae=[{s0:-l-20,s1:l+20,off:26,rows:de(28),rise:.78,depth:.95,color:3820138,side:1},{s0:f-l-d*.45,s1:f-l-30,off:24,rows:de(22),rise:.75,depth:.95,color:5849402,side:1},{s0:l+d*.04,s1:l+d*.66,off:36,rows:de(18),rise:.74,depth:.95,color:4020810,side:1},{s0:f-l-d*.98,s1:f-l-d*.5,off:34,rows:de(16),rise:.74,depth:.95,color:4865370,side:1}],I=new Ft(1,1,1),Re=new Ut({color:16777215,roughness:.7});let Te=0;for(const U of ae)Te+=Math.ceil((U.s1-U.s0)/8)*U.rows;const ve=new Hn(I,Re,Te);ve.castShadow=!1,ve.receiveShadow=!0;const re=new Qe,Oe=new Mt,fe=new F,_e=new F,Ke=new qe;let je=0;const P={},T=[];for(const U of ae)for(let H=U.s0;H<U.s1;H+=8){const z=i.wrapS(H+4),K=i.at(z);i.point(z,a+U.off-U.rows*U.depth*0,P);const te=Math.atan2(K.tx,K.tz),ce=Math.floor(z/96);for(let oe=0;oe<U.rows;oe++){const Y=U.off+oe*U.depth,le=P.y*0+oe*U.rise+2.2+Math.max(0,(K.yc+(a+.5)*Math.sin(K.bank))*.55);_e.set(K.x+K.rx*(a+Y),le*.5+0,K.z+K.rz*(a+Y));const me=le;_e.y=me*.5,Oe.setFromEuler(new $t(0,te,0)),fe.set(U.depth*1.02,me,8.05),re.compose(_e,Oe,fe),ve.setMatrixAt(je,re);const Ae=.75+oe%2*.12+(ce*7+oe)%3*.04;Ke.setHex(U.color).multiplyScalar(Ae),ve.setColorAt(je,Ke),je++,T.length<ze*1.5&&oe%1===0&&T.push([K.x+K.rx*(a+Y-U.depth*.25),me,K.z+K.rz*(a+Y-U.depth*.25),te,K.tx,K.tz])}if(U.rows>=22&&(H-U.s0)%16===0){const oe=U.off+U.rows*U.depth*.55,Y=U.rows*U.rise+9,le=new nt(new Ft(U.rows*U.depth*1.15,.5,16.2),b(14343648,{roughness:.6}));le.position.set(K.x+K.rx*(a+oe),Y,K.z+K.rz*(a+oe)),le.rotation.y=te,le.castShadow=!0,n.add(le)}}ve.count=je,ve.instanceMatrix.needsUpdate=!0,ve.instanceColor&&(ve.instanceColor.needsUpdate=!0),n.add(ve);{const U=Math.min(ze,T.length),H=new Hn(new Ft(.42,.9,.34),new Ut({color:16777215,roughness:.9}),U),z=[13712187,3108827,15909376,15658734,2763306,4039517,15043115,10181046],K=new $t;for(let te=0;te<U;te++){const ce=T[s()*T.length|0],oe=(s()-.5)*7.4;_e.set(ce[0]+ce[4]*oe,ce[1]+.55,ce[2]+ce[5]*oe),K.set(0,ce[3],0),Oe.setFromEuler(K),fe.set(1,.8+s()*.4,1),re.compose(_e,Oe,fe),H.setMatrixAt(te,re),H.setColorAt(te,Ke.setHex(z[s()*z.length|0]).multiplyScalar(.7+s()*.3))}H.instanceMatrix.needsUpdate=!0,H.instanceColor.needsUpdate=!0,n.add(H)}t(.65);const Q=[];{const U=new qn(.35,.6,46,8),H=new Hn(U,b(8159622,{metalness:.7,roughness:.4}),40),z=new Ft(9,3.2,1.2),K=new Ut({color:3355443,emissive:16773839,emissiveIntensity:0,roughness:.5}),te=new Hn(z,K,40);let ce=0;for(let oe=40;oe<i.length&&ce<40;oe+=Math.max(95,Math.min(190,f/20))){const Y=i.at(oe),le=a+34*Math.max(.6,Math.min(1,m*1.4)),me=Y.x+Y.rx*le,Ae=Y.z+Y.rz*le;re.makeTranslation(me,23,Ae),H.setMatrixAt(ce,re);const Se=Math.atan2(Y.tx,Y.tz);re.compose(new F(me-Y.rx*2,45.5,Ae-Y.rz*2),new Mt().setFromEuler(new $t(0,Se,0)),new F(1,1,1)),te.setMatrixAt(ce,re),Q.push({x:me,z:Ae}),ce++}H.count=ce,te.count=ce,H.castShadow=!0,n.add(H,te),n.userData.lampMat=K}{const U=iv(i,n,{paint:b,wallMat:L,asphaltMat:(()=>{const H=N.clone();return H.color=new qe(11119270),H})()});n.userData.pit=U}{const U=i.at(-Math.min(120,l*.24)),H=U.x+U.rx*(-a-r.apron-34),z=U.z+U.rz*(-a-r.apron-34),K=new nt(new Ft(5,42,5),b(15263972,{roughness:.5}));K.position.set(H,21,z),K.castShadow=!0,n.add(K);const te=new nt(new Ft(5.2,1.6,5.2),new Ut({color:2763306,emissive:4045397,emissiveIntensity:.9}));te.position.set(H,38,z),n.add(te)}t(.75);{const U=[],H=ce=>Zr(512,96,(oe,Y,le)=>{oe.fillStyle=ce.colors[0],oe.fillRect(0,0,Y,le),oe.fillStyle=ce.colors[1],oe.fillRect(0,le-14,Y,14),oe.fillStyle=ce.colors[1]==="#ffffff"||ce.colors[1]==="#f4f4f4"?"#111":"#fff",oe.font='italic 700 54px "Barlow Condensed", Impact, sans-serif',oe.textAlign="center",oe.textBaseline="middle",oe.fillText(ce.name.toUpperCase(),Y/2,le/2-5)}),z=gr.map(H);let K=0;for(let ce=20;ce<i.length;ce+=36){const oe=i.at(ce),Y=oe.x+oe.rx*(J+.55),le=oe.z+oe.rz*(J+.55),me={};i.point(ce,J+.55,me);const Ae=new nt(new An(14,2.2),new Ut({map:z[K%z.length],roughness:.6}));K++,Ae.position.set(Y,me.y+r.wallH+3.2,le),Ae.rotation.y=Math.atan2(oe.tx,oe.tz)+Math.PI/2*0,Ae.lookAt(Y-oe.rx*10,me.y+r.wallH+3.2,le-oe.rz*10),U.push(Ae)}const te=new dn;U.forEach(ce=>te.add(ce)),n.add(te)}{const H=new Hn(new qn(.25,.4,5,5),b(5916210,{roughness:1}),1400),z=new Hn(new al(3.2,1),new Ut({color:16777215,roughness:1,flatShading:!0}),1400);let K=0;for(let ce=0;ce<1400*3&&K<1400;ce++){const oe=s()*Math.PI*2,Y=u+200+s()*600*Math.max(.5,m),le=h+220+s()*400*Math.max(.5,m),me=Math.cos(oe)*Y,Ae=Math.sin(oe)*le*1.1+40,Se=i.query(me,Ae,void 0,{});if(Se.u<a+70&&Se.u>-a-120)continue;const Ge=.8+s()*1.4;re.compose(new F(me,2.5*Ge,Ae),new Mt,new F(Ge,Ge,Ge)),H.setMatrixAt(K,re),re.compose(new F(me,7*Ge,Ae),new Mt().setFromEuler(new $t(s(),s()*6,0)),new F(Ge,Ge*(.9+s()*.5),Ge)),z.setMatrixAt(K,re),z.setColorAt(K,Ke.setHSL(.25+s()*.08,.45,.16+s()*.1)),K++}H.count=K,z.count=K,z.castShadow=!1,n.add(H,z);const te=new Hn(new Ft(1,1,1),new Ut({color:16777215,roughness:.9}),90);for(let ce=0;ce<90;ce++){const oe=ce/90*Math.PI*2+s()*.05,Y=1500+900*m+s()*(350+250*m),le=40+s()*120,me=15+s()*70,Ae=40+s()*90;re.compose(new F(Math.cos(oe)*Y*(.9+.35*m),me/2,Math.sin(oe)*Y*.9),new Mt().setFromEuler(new $t(0,s()*3,0)),new F(le,me,Ae)),te.setMatrixAt(ce,re),te.setColorAt(ce,Ke.setHSL(.58+s()*.1,.1,.5+s()*.25))}n.add(te)}return t(1),n.userData.lamps=Q,n}function Vh(i,e){if(e===Pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Tc||e===Wu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Tc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class cv extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Av(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ir.extractUrlBase(e);a=ir.resolveURL(l,this.path)}else a=ir.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new dd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bd){try{a[rt.KHR_BINARY_GLTF]=new Rv(e)}catch(h){s&&s(h);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Vv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:a[h]=new uv;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Cv(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[h]=new Pv;break;case rt.KHR_MESH_QUANTIZATION:a[h]=new Lv;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function lv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hv{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new qe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],cn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pd(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new i0(u),l.distance=h;break;case"spot":l=new t0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class uv{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){const s=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}}class dv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class fv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(o,o)}return Promise.all(r)}}class pv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class mv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class gv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],cn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Rt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class vv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class _v{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(o[0],o[1],o[2],cn),Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class xv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(o[0],o[1],o[2],cn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Rt)),Promise.all(r)}}class Mv{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class wv{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Tv{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Ev{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class Av{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const m of h){const v=new Qe,g=new F,p=new Mt,y=new F(1,1,1),x=new Hn(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,v.compose(g,p,y));for(const _ in c)if(_==="_COLOR_0"){const S=c[_];x.instanceColor=new Ac(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);St.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const bd="glTF",qs=12,Hh={JSON:1313821514,BIN:5130562};class Rv{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qs,r=new DataView(e,qs);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Hh.JSON){const l=new Uint8Array(e,qs+a,o);this.content=n.decode(l)}else if(c===Hh.BIN){const l=qs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Ic[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ic[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=xs[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const v=d.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}h(d)},o,l,cn,f)})})}}class Pv{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Lv{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class Sd extends yr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,v=m-l,g=-2*d+3*f,p=d-f,y=1-g,x=p-f+h;for(let _=0;_!==o;_++){const S=a[v+_+o],w=a[v+_+c]*u,E=a[m+_+o],L=a[m+_]*u;r[_]=y*S+x*w+g*E+p*L}return r}}const Iv=new Mt;class kv extends Sd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Iv.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gh={9728:an,9729:_n,9984:Uu,9985:ha,9986:Js,9987:Xn},Wh={33071:Mi,33648:ya,10497:Ei},Eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dv={CUBICSPLINE:void 0,LINEAR:dr,STEP:ur},Ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Uv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Fv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ov(i){let e;const t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ro(t.attributes):e=i.indices+":"+Ro(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ro(i.targets[n]);return e}function Ro(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function kc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zv=new Qe;class Vv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new fd(this.options.manager):this.textureLoader=new r0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ni(r,o,s),Gn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ir.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Eo[s.type],o=xs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new mt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Eo[s.type],l=xs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let v,g;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(y);x||(v=new l(o,p*d,s.count*d/u),x=new Rp(v,d/u),t.cache.add(y,x)),g=new el(x,c,f%d/u,m)}else o===null?v=new l(s.count*c):v=new l(o,f,s.count*c),g=new mt(v,c,m);if(s.sparse!==void 0){const p=Eo.SCALAR,y=xs[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new y(a[1],x,s.sparse.count*p),w=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new mt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,L=S.length;E<L;E++){const M=S[E];if(g.setX(M,w[E*c]),c>=2&&g.setY(M,w[E*c+1]),c>=3&&g.setZ(M,w[E*c+2]),c>=4&&g.setW(M,w[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Gh[f.magFilter]||_n,u.minFilter=Gh[f.minFilter]||Xn,u.wrapS=Wh[f.wrapS]||Ei,u.wrapT=Wh[f.wrapT]||Ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==_n,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Ot(v);g.needsUpdate=!0,f(g)}),t.load(ir.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Gn(h,a),h.userData.mimeType=a.mimeType||Bv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ad,Kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new rd,Kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ut}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){const h=s[rt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],cn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);const u=r.alphaMode||Ao.OPAQUE;if(u===Ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new et(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt){const h=r.emissiveFactor;o.emissive=new qe().setRGB(h[0],h[1],h[2],cn)}return r.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Gn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ni(s,h,r),h})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return qh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Ov(l),h=s[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=qh(new Nt,l,t),s[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Nv(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const v=u[d],g=a[d];let p;const y=l[d];if(g.mode===wn.TRIANGLES||g.mode===wn.TRIANGLE_STRIP||g.mode===wn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Pp(v,y):new nt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===wn.TRIANGLE_STRIP?p.geometry=Vh(p.geometry,Wu):g.mode===wn.TRIANGLE_FAN&&(p.geometry=Vh(p.geometry,Tc));else if(g.mode===wn.LINES)p=new Up(v,y);else if(g.mode===wn.LINE_STRIP)p=new il(v,y);else if(g.mode===wn.LINE_LOOP)p=new Fp(v,y);else if(g.mode===wn.POINTS)p=new od(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),g.extensions&&Ni(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ni(s,h[0],r),h[0];const f=new dn;r.extensions&&Ni(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(wi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new cl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new Qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new tl(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],m=s.samplers[d.sampler],v=d.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let x=0,_=f.length;x<_;x++){const S=f[x],w=d[x],E=m[x],L=v[x],M=g[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=n._createAnimationTracks(S,w,E,L,M);if(b)for(let C=0;C<b.length;C++)p.push(b[C])}const y=new Xp(r,void 0,p);return Gn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,zv)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new id:l.length>1?u=new dn:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Gn(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new dn;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Kn||f instanceof Ot)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];vi[r.path]===vi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(vi[r.path]){case vi.weights:l=As;break;case vi.rotation:l=Rs;break;case vi.translation:case vi.scale:l=Cs;break;default:n.itemSize===1?l=As:l=Cs;break}const u=s.interpolation!==void 0?Dv[s.interpolation]:dr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+vi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Rs?kv:Sd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Hv(i,e,t){const n=e.attributes,s=new hi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){const u=kc(xs[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,c=new F;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=kc(xs[f.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new $n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function qh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Ic[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Gn(i,e),Hv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Uv(i,e.targets,t):i})}const Dc=240,Nc=96,Gv='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function In(i,e,t=14,n=null){i.beginPath(),i.roundRect(2,2,Dc-4,Nc-4,t),i.fillStyle=e,i.fill(),n&&(i.lineWidth=3,i.strokeStyle=n,i.stroke())}function Pt(i,e,t,n,s,r,{weight:a=700,italic:o=!0,align:c="left",spacing:l=0,maxW:u=0}={}){i.font=`${o?"italic ":""}${a} ${s}px ${Gv}`,i.fillStyle=r,i.textAlign=c,i.textBaseline="alphabetic";try{i.letterSpacing=l+"px"}catch{}if(u){const h=i.measureText(e).width;if(h>u){i.save(),i.translate(t,n),i.scale(u/h,1),i.fillText(e,0,0),i.restore();try{i.letterSpacing="0px"}catch{}return}}i.fillText(e,t,n);try{i.letterSpacing="0px"}catch{}}function Ui(i,e,t){i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fillStyle=t,i.fill()}function Jr(i,e,t,n,s,r=0){i.beginPath();for(let a=0;a<6;a++){const o=r+Math.PI/3*a,c=e+n*Math.cos(o),l=t+n*Math.sin(o);a?i.lineTo(c,l):i.moveTo(c,l)}i.closePath(),i.fillStyle=s,i.fill()}const Wv={dustyfork(i){In(i,"#f2b134",16),i.fillStyle="#7a2e1b",i.fillRect(14,70,212,5),i.fillRect(14,79,212,3),i.fillStyle="#7a2e1b",i.fillRect(36,18,5,34),i.fillRect(46,18,5,34),i.fillRect(56,18,5,34),i.beginPath(),i.roundRect(34,46,29,8,4),i.fill(),i.fillRect(46,50,5,18),Pt(i,"DUSTY FORK",78,46,34,"#7a2e1b",{maxW:136}),Pt(i,"DINER",80,64,20,"#7a2e1b",{spacing:7,italic:!1,weight:600})},greaseline(i){In(i,"#ececec",14,"#d1342c"),i.save(),i.translate(46,48),i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(22,-2,22,26,0,26),i.bezierCurveTo(-22,26,-22,-2,0,-30),i.fillStyle="#d1342c",i.fill(),i.fillStyle="#ececec",i.beginPath(),i.ellipse(-6,8,4,8,.4,0,7),i.fill(),i.restore(),Pt(i,"GREASELINE",82,50,36,"#16181c",{maxW:140}),i.fillStyle="#d1342c",i.fillRect(82,58,140,4),Pt(i,"GARAGE",83,80,20,"#d1342c",{spacing:8,italic:!1,weight:600})},cornerbolt(i){In(i,"#2f6fdb",14),Jr(i,46,48,30,"#f4f4f4",Math.PI/6),Jr(i,46,48,17,"#2f6fdb",Math.PI/6),Jr(i,46,48,8,"#f4f4f4",Math.PI/6),Pt(i,"CORNER BOLT",86,46,34,"#ffffff",{maxW:140}),Pt(i,"SUPPLY CO.",88,70,19,"#cfe0ff",{spacing:6,italic:!1,weight:600})},vantafuel(i){In(i,"#0d1f1b",14,"#13c28a"),Ui(i,[[22,22],[50,22],[62,58],[74,22],[100,22],[66,76],[56,76]],"#13c28a"),Ui(i,[[62,30],[68,44],[62,56],[56,44]],"#0d1f1b"),Pt(i,"VANTA",112,52,40,"#ffffff",{maxW:112}),Pt(i,"FUEL",114,76,26,"#13c28a",{spacing:10,italic:!1})},halo(i){In(i,"#ffd400",48),i.lineWidth=9,i.strokeStyle="#151515",i.beginPath(),i.ellipse(46,48,24,24,0,0,7),i.stroke(),Ui(i,[[50,26],[36,52],[47,52],[42,70],[58,42],[47,42]],"#151515"),Pt(i,"HALO",82,56,46,"#151515",{maxW:140}),Pt(i,"ENERGY",84,78,19,"#151515",{spacing:9,italic:!1})},ironbark(i){In(i,"#232323",12,"#e2552c"),Jr(i,44,48,31,"#e2552c",0),i.strokeStyle="#232323",i.lineWidth=3.5,[8,15,22].forEach(e=>{i.beginPath(),i.arc(44,48,e,0,7),i.stroke()}),Pt(i,"IRONBARK",84,52,40,"#ffffff",{maxW:140}),Pt(i,"TOOLS",86,76,21,"#e2552c",{spacing:10,italic:!1})},meridian(i){In(i,"#00a3e0",16),i.save(),i.translate(46,48),i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.arc(0,0,27,0,7),i.stroke(),i.beginPath(),i.ellipse(0,0,11,27,0,0,7),i.stroke(),i.beginPath(),i.moveTo(-27,0),i.lineTo(27,0),i.stroke(),i.beginPath(),i.moveTo(-23,-13),i.lineTo(23,-13),i.moveTo(-23,13),i.lineTo(23,13),i.lineWidth=2.5,i.stroke(),i.restore(),Pt(i,"MERIDIAN",86,52,38,"#ffffff",{maxW:140}),Pt(i,"MOBILE",88,76,20,"#d9f3ff",{spacing:9,italic:!1})},stratus(i){In(i,"#4b3fc4",16),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(18,62),i.quadraticCurveTo(46,58,78,26),i.quadraticCurveTo(68,52,92,56),i.quadraticCurveTo(54,74,18,62),i.fill(),i.fillStyle="#b9b2ff",i.beginPath(),i.moveTo(24,74),i.quadraticCurveTo(52,72,70,60),i.quadraticCurveTo(52,82,24,74),i.fill(),Pt(i,"STRATUS",102,54,38,"#ffffff",{maxW:124}),Pt(i,"AIR",104,76,21,"#cfc9ff",{spacing:14,italic:!1})},kestrel(i){In(i,"#121212",14,"#ffcf1b"),i.lineWidth=11,i.strokeStyle="#ffcf1b",i.beginPath(),i.arc(46,48,24,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="#121212";for(let e=0;e<12;e++){const t=Math.PI*2*e/12;i.beginPath(),i.moveTo(46+19*Math.cos(t),48+19*Math.sin(t)),i.lineTo(46+29*Math.cos(t),48+29*Math.sin(t)),i.stroke()}Ui(i,[[36,50],[60,36],[52,52],[64,50],[38,64]],"#ffffff"),Pt(i,"KESTREL",84,54,38,"#ffcf1b",{maxW:140}),Pt(i,"TIRES",86,76,21,"#ffffff",{spacing:12,italic:!1})},apexgrid(i){In(i,"#0d0d0d",12,"#ff2d55"),Ui(i,[[44,14],[78,80],[10,80]],"#ff2d55"),i.strokeStyle="#0d0d0d",i.lineWidth=3,i.beginPath(),i.moveTo(44,38),i.lineTo(44,80),i.moveTo(28,58),i.lineTo(60,58),i.moveTo(22,70),i.lineTo(66,70),i.stroke(),Pt(i,"APEX GRID",92,50,40,"#ffffff",{maxW:128}),Pt(i,"POWER",94,76,21,"#ff2d55",{spacing:11,italic:!1})},northstar(i){In(i,"#0a2a66",14,"#c0c6cc"),Ui(i,[[44,10],[51,40],[80,48],[51,56],[44,86],[37,56],[8,48],[37,40]],"#c0c6cc"),Ui(i,[[44,26],[48,44],[44,48],[40,44]],"#ffffff"),Pt(i,"NORTHSTAR",92,50,36,"#ffffff",{maxW:138}),Pt(i,"MOTORS",94,76,21,"#c0c6cc",{spacing:10,italic:!1})}};function wd(i,e,t,n,s,r){const a=Wv[e];if(!a)return!1;const o=Math.min(s/Dc,r/Nc);return i.save(),i.translate(t+(s-Dc*o)/2,n+(r-Nc*o)/2),i.scale(o,o),i.lineJoin="round",a(i),i.restore(),!0}const va=new Map;function Td(i,e=240,t=96){const n=`${i}:${e}x${t}`;if(va.has(n))return va.get(n);const s=Math.min(2,(typeof devicePixelRatio=="number"?devicePixelRatio:1)||1),r=document.createElement("canvas");r.width=Math.round(e*s),r.height=Math.round(t*s);const a=r.getContext("2d");a.scale(s,s),wd(a,i,0,0,e,t);const o=r.toDataURL("image/png");return va.set(n,o),o}function Ed(){va.clear()}const qv=i=>(Ns(i)||{}).name||i,Xv=Object.freeze(Object.defineProperty({__proto__:null,clearSponsorPreviewCache:Ed,drawSponsor:wd,sponsorName:qv,sponsorPreviewURL:Td},Symbol.toStringTag,{value:"Module"})),Qv=Object.assign({"../ui/sponsorArt.js":Xv}),Co=Object.values(Qv)[0]||null,Kv={left:(i,e)=>[-i*100,-e*100],right:(i,e)=>[i*100,-e*100],top:(i,e)=>[i*100,e*100],tail:(i,e)=>[-i*100,-e*100],nose:(i,e)=>[i*100,-e*100]};function Gt(i,e,t,n){const s=e.frames[t];i.save(),i.beginPath(),i.rect(...s.clip),i.clip(),i.translate(s.ox,s.oy),i.scale(s.sx,s.sy),n(Kv[t]),i.restore()}const Xs=(i,e,t)=>{i.beginPath(),t.forEach(([n,s],r)=>{const[a,o]=e(n,s);r?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath(),i.fill()},Vi=(i,e,t,n,s,r)=>{const[a,o]=e(t,n),[c,l]=e(s,r);i.fillRect(Math.min(a,c),Math.min(o,l),Math.abs(c-a),Math.abs(l-o))},Ad=(i,e)=>`${i==="italic"?"italic 800":i==="slab"?"900":"800"} ${e}px "Barlow Condensed", Impact, "Arial Narrow", sans-serif`;function Yv(i,e,t,n,s,r,a=0){i.save(),i.translate(t,n),a&&i.rotate(a);const o=Ns(e);if(i.beginPath(),i.rect(-s/2,-r/2,s,r),i.clip(),Co&&Co.drawSponsor)try{Co.drawSponsor(i,e,-s/2,-r/2,s,r),i.restore();return}catch{}i.fillStyle=o?o.colors[0]:"#444",i.fillRect(-s/2,-r/2,s,r),i.fillStyle=o?o.colors[1]:"#fff",i.fillRect(-s/2,r/2-r*.14,s,r*.14),i.fillStyle="#fff",i.font=Ad("italic",Math.floor(r*.42)),i.textAlign="center",i.textBaseline="middle",i.fillText(o?o.name.toUpperCase():e,0,-r*.04,s*.94),i.restore()}function ea(i,e,t,n,s,r=0){i.save(),i.translate(t,n),r&&i.rotate(r),i.font=Ad(e.numberStyle,s),i.textAlign="center",i.textBaseline="middle";const a=String(e.number||"0");e.numberStyle==="italic"&&i.transform(1,0,-.22,1,0,0);const o=(e.numberColor||"#fff").toLowerCase(),c=o==="#ffffff"||o==="#fff"?"#000":"#fff";i.lineJoin="round",i.lineWidth=s*.12,i.strokeStyle=c,i.strokeText(a,0,0),e.numberStyle==="outline"?(i.lineWidth=s*.06,i.strokeStyle=e.numberColor,i.strokeText(a,0,0)):(i.fillStyle=e.numberColor,i.fillText(a,0,0)),i.restore()}function jv(i,e,t){const n=t.accent,s=t.trim,r=a=>{Gt(i,e,"left",a),Gt(i,e,"right",a)};if(t.pattern==="stripe")r(a=>{i.fillStyle=n,Vi(i,a,-3,.52,3,.46),i.fillStyle=s,Vi(i,a,-3,.44,3,.425)}),Gt(i,e,"top",()=>{i.fillStyle=n,i.fillRect(-22,-300,44,600),i.fillStyle=s,i.fillRect(-32,-300,5,600),i.fillRect(27,-300,5,600)});else if(t.pattern==="split")i.fillStyle=n,r(a=>Xs(i,a,[[3,-.1],[3,1.1],[.3,1.1],[-.9,-.1]])),Gt(i,e,"top",a=>Xs(i,a,[[-1.2,3],[1.2,3],[1.2,.35],[-1.2,-.45]])),Gt(i,e,"nose",a=>Xs(i,a,[[-1.2,-.1],[1.2,-.1],[1.2,.9],[-1.2,.9]]));else if(t.pattern==="chevron"){i.fillStyle=n;for(let a=0;a<7;a++){const o=-2.6+a*.5;r(c=>Xs(i,c,[[o,-.1],[o+.3,-.1],[o+.55,.5],[o+.3,1.1],[o,1.1],[o+.25,.5]]))}for(let a=0;a<7;a++){const o=-2.6+a*.5;Gt(i,e,"top",c=>Xs(i,c,[[-1.2,o],[-1.2,o+.3],[0,o+.55],[1.2,o+.3],[1.2,o],[0,o+.25]]))}}else t.pattern==="fade"&&(r(()=>{const a=i.createLinearGradient(-260,0,260,0);a.addColorStop(0,n),a.addColorStop(.55,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-300,-140,600,160)}),Gt(i,e,"top",()=>{const a=i.createLinearGradient(0,260,0,-150);a.addColorStop(0,n),a.addColorStop(.7,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-130,-320,260,640)}))}function $v(i,e,t){const n=i.getContext("2d");n.setTransform(i.width/2048,0,0,i.height/2048,0,0),n.globalCompositeOperation="source-over",n.fillStyle=e.paint,n.fillRect(0,0,2048,2048),jv(n,t,e);const s=t.band||.3,r=l=>{n.fillStyle=e.trim,Vi(n,l,-4,-.2,4,s),n.fillStyle=e.accent,Vi(n,l,-4,s,4,s+.025)};Gt(n,t,"left",r),Gt(n,t,"right",r),Gt(n,t,"nose",r),Gt(n,t,"tail",r),t.paintLights&&(Gt(n,t,"nose",l=>{for(const u of[-1,1]){n.fillStyle="#e8eaec";const[h,f]=l(u*.38,.31),[d,m]=l(u*.84,.22);n.beginPath(),n.roundRect(Math.min(h,d),Math.min(f,m),Math.abs(d-h),Math.abs(m-f),3),n.fill(),n.fillStyle="#ffcf5a";const v=u>0?Math.max(h,d)-12:Math.min(h,d);n.fillRect(v,Math.min(f,m)+2,12,Math.abs(m-f)-4)}n.fillStyle="#0b0c0e",Vi(n,l,-.34,.33,.34,.13),n.fillStyle="#2a2d33";for(let u=0;u<17;u++){const[h,f]=l(-.3+u*.0375,.31);n.fillRect(h,f,1.4,14)}}),Gt(n,t,"tail",l=>{n.fillStyle="#16171a",Vi(n,l,-.9,.78,.9,.46),n.fillStyle="#d0171e";for(const u of[-1,1])Vi(n,l,u*.39,.7,u*.81,.52)}));const a=e.slots||{},o=t.spots;Gt(n,t,"left",l=>{const[u,h]=l(o.number.z,o.number.y);ea(n,e,u,h,o.number.h*100)}),Gt(n,t,"right",l=>{const[u,h]=l(o.number.z,o.number.y);ea(n,e,u,h,o.number.h*100)}),Gt(n,t,"top",l=>{const[u,h]=l(0,a.roof?o.roofNumberZ:o.roofNumberZ-.15);ea(n,e,u,h,32,Math.PI/2)}),Gt(n,t,"tail",l=>{const[u,h]=l(0,a.bumper?o.bumper.y-.17:o.bumper.y);ea(n,e,u,h,a.bumper?13:21)});const c=(l,u,h,f,d,m=0)=>{if(!a[u])return;const v=d*2.5,g=d;Gt(n,t,l,p=>{const[y,x]=p(h,f);Yv(n,a[u],y,x,v,g,m)})};c("left","door",o.door.z,o.door.y,o.door.h*100),c("right","door",o.door.z,o.door.y,o.door.h*100),c("left","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("right","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("top","hood",o.hood.x,o.hood.z,o.hood.h*100,0),c("top","trunk",o.trunk.x,o.trunk.z,o.trunk.h*100,Math.PI),c("top","roof",0,o.roofLogoZ,22,Math.PI/2),c("tail","bumper",o.bumper.x,o.bumper.y,o.bumper.h*100)}const ms=9.81,Nn={mass:1500,L:2.85,a:1.38,b:1.47,cgH:.52,Iz:2900,wheelR:.34,length:5.1,width:1.95,cdA:1.3,clA:.85,rolling:.012,maxSteer:.5,gears:[9.4,6.3,4.55,3.46],eff:.9,idle:2600,redline:9e3,limiter:9250,torque:[[1200,300],[3e3,470],[4500,610],[6e3,690],[7500,740],[8500,720],[9100,640],[9500,400]],mu:{track:1.5,apron:1.3,grass:.42},trackHalf:.78},Zv=2.23694;function Xh(i,e=Nn){const t=e.torque;if(i<=t[0][0])return t[0][1];if(i>=t[t.length-1][0])return t[t.length-1][1];for(let n=0;n<t.length-1;n++)if(i<=t[n+1][0]){const s=(i-t[n][0])/(t[n+1][0]-t[n][0]);return t[n][1]+s*(t[n+1][1]-t[n][1])}return 0}class Jv{constructor(e=0,t=null){this.C=t?Object.assign({},Nn,t,{mu:Object.assign({},Nn.mu,t.mu||{})}):Nn,this.id=e,this.x=0,this.z=0,this.psi=0,this.vx=0,this.vy=0,this.w=0,this.steer=0,this.steerCmd=0,this.gear=1,this.rpm=this.C.idle,this.shiftT=0,this.throttle=0,this.brake=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.surface="track",this.bank=0,this.trackU=0,this.trackS=0,this.trackI=0,this.draft=0,this.dirty=0,this.damage={front:0,rear:0,left:0,right:0},this.hit=0,this.scrape=0,this.limiter=!1,this.out=!1,this.nLoad=1,this.lap=0,this.pitch=0,this.roll=0,this.skid=0,this.lastImpact=0,this.fracF={t:1,a:0,g:0},this.fracR={t:1,a:0,g:0},this.fracTrack=1,this.fracGrass=0,this.bankEff=0,this.gh=0,this.gp=0,this.gr=0,this.ghv=0,this.gpv=0,this.grv=0,this.gTh=0,this.gTp=0,this.gTr=0,this._gInit=!1,this.wy=[0,0,0,0],this._wq=[{},{},{},{}],this.gunk=0,this.dirt=0,this.alphaFe=0,this.alphaRe=0,this.tumble=null,this.wrecked=!1,this.dmgPull=0,this.scuffs=[],this.dig=0,this.lift=0,this.pendingTrip=null,this.hidden=!1,this.ghost=!1,this.dents=[],this._rs=e*2654435761>>>0||1,this.tripAt=2.3+this.rand()*2.4,this.hitBias=this.rand()}rand(){let e=(this._rs+=1831565813)|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}checkTrip(e){if(this.tumble||this.ghost)return null;const t=Math.hypot(this.vx,this.vy),n=this.fracGrass;if(t<12)return this.dig=Math.max(0,this.dig-e*2),this.lift=Math.max(0,this.lift-e),null;const s=Math.abs(this.vy);return this.dig=Math.max(0,this.dig+(Math.max(0,s-13)*n*.8*(1+.5*this.dirt)+Math.max(0,s-30)*.1*(1-n)-.9*(1-n))*e),this.lift=Math.max(0,this.lift+(Math.max(0,-this.vx-24)*.07-.5)*e),this.dig>this.tripAt?"dig":this.lift>this.tripAt?"lift":null}recover(e,t,n){this.place(e,t,n,0),this.tumble=null,this.wrecked=!1,this.dig=0,this.lift=0,this.pendingTrip=null,this.gear=1,this.throttle=0,this.steer=0,this.gunk=0,this.roll=0,this.pitch=0,this.tripAt=2.3+this.rand()*2.4}get speed(){return Math.hypot(this.vx,this.vy)}get mph(){return this.vx*Zv}place(e,t,n,s=0){this.px=e,this.pz=t,this.ppsi=n,this.x=e,this.z=t,this.psi=n,this.vx=s,this.vy=0,this.w=0,this._gInit=!1,this.alphaFe=0,this.alphaRe=0}sampleGround(e,t){const n=this.C,s=Math.sin(this.psi),r=Math.cos(this.psi),a=n.trackHalf||.78;let o=0,c=0,l=0,u=0,h=0,f=0;for(let m=0;m<4;m++){const v=m<2?n.a:-n.b,g=m&1?-a:a,p=this.x+s*v+r*g,y=this.z+r*v-s*g,x=this._wq[m];e.query(p,y,t,x),this.wy[m]=x.y;const _=x.surface;m<2?_==="grass"?l++:_==="apron"?c++:o++:_==="grass"?f++:_==="apron"?h++:u++}this.fracF.t=o/2,this.fracF.a=c/2,this.fracF.g=l/2,this.fracR.t=u/2,this.fracR.a=h/2,this.fracR.g=f/2,this.fracTrack=(o+u)/4,this.fracGrass=(l+f)/4;const d=this.wy;this.gTh=(d[0]+d[1]+d[2]+d[3])/4,this.gTp=Math.atan2((d[0]+d[1]-d[2]-d[3])/2,n.a+n.b),this.gTr=Math.atan2((d[0]+d[2]-d[1]-d[3])/2,2*a),this._gInit||(this.gh=this.gTh,this.gp=this.gTp,this.gr=this.gTr,this.ghv=this.gpv=this.grv=0,this._gInit=!0)}get wvx(){return this.vx*Math.sin(this.psi)+this.vy*Math.cos(this.psi)}get wvz(){return this.vx*Math.cos(this.psi)-this.vy*Math.sin(this.psi)}step(e,t,n){const s=this.C,r=s.mass;this.px=this.x,this.pz=this.z,this.ppsi=this.psi,this.pgh=this.gh,this.pgp=this.gp,this.pgr=this.gr,this.surface=n.surface||"track",this.bankEff+=((n.bank||0)*this.fracTrack-this.bankEff)*Math.min(1,e*14);const a=this.bankEff;this.bank=a;const o=Math.cos(a),c=Math.sin(a),l=s.mu.track,u=s.mu.apron,h=s.mu.grass,f=Math.hypot(this.vx,this.vy);this.gunk=Fe(this.gunk+(this.fracGrass*Fe(f/9,0,1)*.45-(1-this.fracGrass)*(.07+.006*f))*e,0,1),this.dirt=Math.min(1,this.dirt+this.fracGrass*Fe(f/12,0,1)*.025*e);const d=1-.3*this.gunk,m=(this.fracF.t*l+this.fracF.a*u+this.fracF.g*h)*d,v=(this.fracR.t*l+this.fracR.a*u+this.fracR.g*h)*d,g=this.damage,p=1-.35*g.front-.1*(g.left+g.right)*.5,y=1-.25*g.rear-.1*(g.left+g.right)*.5,x=Math.max(0,this.vx),_=s.maxSteer/(1+Math.pow(x/42,2)),S=Fe(t.steer,-1,1)*_,w=(t.analog?6.5:4.2)*(1+1.2/(1+x/12));this.steer+=Fe(S-this.steer,-w*e*_*2,w*e*_*2),this.throttle+=Fe(t.throttle-this.throttle,-5*e,4.5*e),this.brake+=Fe(t.brake-this.brake,-8*e,7*e);const E=s.gears[this.gear-1],L=Math.abs(this.vx)/s.wheelR*E*60/(2*Math.PI);let M=Math.max(s.idle,L);this.gear===1&&this.vx<6&&(M=Math.max(M,3200+3500*this.throttle)),this.limiter=M>=s.limiter,this.limiter&&(M=s.limiter-150*Math.random()),this.rpm+=(M-this.rpm)*Math.min(1,e*28),this.shiftT>0?this.shiftT-=e:this.gear<4&&L>8350*(s.redline/9e3)?(this.gear++,this.shiftT=.12):this.gear>1&&L<(4700+(this.gear-2)*150)*(s.redline/9e3)&&(this.gear--,this.shiftT=.08);const b=Xh(this.rpm,s)*(this.limiter?0:1)*(this.shiftT>0?.15:1);let C=this.throttle*b*E*s.eff/s.wheelR;const k=(1-this.throttle)*.085*Xh(Math.max(this.rpm,3e3),s)*E/s.wheelR*(this.vx>.5?1:0);C=C*(1-.2*this.damage.front-.12*this.damage.rear)-k;const D=1.2,V=(1-.3*n.draft)*(1+.22*this.damage.front+.1*this.damage.rear+.08*(this.damage.left+this.damage.right)),N=.5*D*this.vx*this.vx,O=N*s.cdA*V*Math.sign(this.vx||1),W=N*s.clA*(1-.35*n.draft*.3)*(1-.18*(this.damage.front+this.damage.rear));this.draft=n.draft,this.dirty=n.dirty;const B=Math.max(0,n.k||0),j=this.vx*this.vx*B,J=r*(ms*o+j*c)+W*.9,pe=s.b/s.L;s.a/s.L;const be=r*this.ax*s.cgH/s.L,Ee=.44*(1-.55*n.dirty);let He=Fe(J*pe-be+W*.9*(Ee-pe),400,1e6);const Ue=Fe(J-He,400,1e6);He=J-Ue;const ee=Math.max(2.5,Math.abs(this.vx)),he=this.vx>=0?1:-1;this.dmgPull+=(((g.left-g.right)*.05+(g.front>.3?.012*g.front:0)*(g.left>=g.right?1:-1))*Fe(1.5*g.front+.3,0,1)-this.dmgPull)*Math.min(1,e*3);const Me=this.steer+this.dmgPull,ze=Me*he-Math.atan2(this.vy+s.a*this.w,ee)*1,ie=-Math.atan2(this.vy-s.b*this.w,ee),de=Math.min(1,e*ee/.45);this.alphaFe+=(ze-this.alphaFe)*de,this.alphaRe+=(ie-this.alphaRe)*de;const ae=this.alphaFe,I=this.alphaRe;this.slipF=ae,this.slipR=I;const Re=m*p*Math.pow(He/7e3,-.14),Te=v*y*Math.pow(Ue/7e3,-.14),ve=.15;let re=this.brake*2.3*r*ms*(1-.5*this.fracGrass);re=Math.min(re,2.6*r*ms);const Oe=-Math.sign(this.vx||1);let fe=C+Oe*re*.42,_e=Oe*re*.58;const Ke=Te*Ue,je=Re*He,P=t.assist===0?1:.8;fe>0&&(fe=Math.min(fe,P*Ke)),fe=Fe(fe,-Ke,Ke),_e=Fe(_e,-je,je);const T=Math.sqrt(Math.max(.35,1-Math.pow(fe/Ke,2))),Q=Math.sqrt(Math.max(.35,1-Math.pow(_e/je,2))),U=ht=>Math.sin(1.45*Math.atan(ht/ve*2));let H=Re*He*Q*U(ae),z=Te*Ue*T*U(I);const K=Fe(Math.abs(this.vx)/3,0,1);H*=K,z*=K;const te=Math.cos(Me),ce=Math.sin(Me),oe=1/o;H*=oe,z*=oe;let Y=fe+_e*te-H*ce-O-s.rolling*r*ms*Math.sign(this.vx||0)*(1+5*this.fracGrass+3*(g.left+g.right)),le=z+H*te+_e*ce;this.fracGrass>0&&(Y-=this.fracGrass*.9*r*Math.min(1,Math.abs(this.vx)/8)*Math.sign(this.vx)*(2+.04*Math.abs(this.vx)));const me=-(n.rx||0),Ae=-(n.rz||0),Se=r*ms*Math.tan(a),Ge=s.a*H*te+s.a*_e*ce-s.b*z,G=-this.w*Math.abs(this.w)*0-this.w*180,ye=0,we=Y/r,Le=le/r;this.ax+=(we-this.ax)*Math.min(1,e*12),this.ay+=(Le-this.ay)*Math.min(1,e*12);const ge=we+this.w*this.vy,ue=Le-this.w*this.vx;if(this.vx+=ge*e,this.vy+=ue*e,this.w+=(Ge+G+ye)/s.Iz*e,Se>0&&(n.rx||n.rz)){const ht=me*Se/r*e,ot=Ae*Se/r*e,fn=Math.sin(this.psi),hn=Math.cos(this.psi);this.vx+=ht*fn+ot*hn,this.vy+=ht*hn-ot*fn}this.brake>.5&&Math.abs(this.vx)<.4&&this.throttle<.05&&(this.vx*=.8,this.vy*=.8),this.psi+=this.w*e;const ke=Math.sin(this.psi),$e=Math.cos(this.psi);this.x+=(this.vx*ke+this.vy*$e)*e,this.z+=(this.vx*$e-this.vy*ke)*e,this.roll+=(Fe(-this.ay*.012,-.08,.08)-this.roll)*Math.min(1,e*8),this.pitch+=(Fe(-this.ax*.004,-.05,.05)-this.pitch)*Math.min(1,e*8),this.skid=Fe((Math.abs(I)-.12)*4+(Math.abs(ae)-.13)*3,0,1)*Fe(this.speed/15,0,1),this.hit*=Math.max(0,1-e*4),this.scrape*=Math.max(0,1-e*6),this.nLoad=J/(r*ms),this.ghv+=(676*(this.gTh-this.gh)-2*.8*26*this.ghv)*e,this.gh+=this.ghv*e,this.gpv+=(289*(this.gTp-this.gp)-2*.7*17*this.gpv)*e,this.gp+=this.gpv*e,this.grv+=(289*(this.gTr-this.gr)-2*.7*17*this.grv)*e,this.gr+=this.grv*e}applyImpulse(e,t,n,s,r){const a=this.C.mass,o=this.wvx+n*r/a,c=this.wvz+s*r/a,l=e-this.x,u=t-this.z;this.w+=(l*s-u*n)*r*-1/this.C.Iz*.5;const h=Math.sin(this.psi),f=Math.cos(this.psi);this.vx=o*h+c*f,this.vy=o*f-c*h}addDamage(e,t,n){const s=e-this.x,r=t-this.z,a=Math.sin(this.psi),o=Math.cos(this.psi),c=s*a+r*o,l=s*o-r*a,u=Math.min(1,n);if(Math.abs(c)>Math.abs(l)*1.5?c>0?this.damage.front=Math.min(1,this.damage.front+u):this.damage.rear=Math.min(1,this.damage.rear+u):l>0?this.damage.left=Math.min(1,this.damage.left+u):this.damage.right=Math.min(1,this.damage.right+u),n>.01){const h={lf:Math.max(-2.7,Math.min(2.7,c)),lt:Math.max(-1.1,Math.min(1.1,l)),ly:.55,m:Math.min(1,n*2.2)};this.dents.length<40&&this.dents.push(h),this.dentVer=(this.dentVer||0)+1}this.hit=Math.max(this.hit,Math.min(1,n*3)),this.lastImpact=Math.min(1,n*3)}}const on={e87:{id:"e87",file:"regal",year:1987,name:"'87 Heritage Stock",tag:"Big, heavy and loose. Carburetted V8, bias tyres, almost no downforce.",spec:{mass:1570,Iz:3050,clA:.38,cdA:1.48,cgH:.55,rpmScale:.84,tqScale:.95,mu:{track:1.3,apron:1.15},pace:.9},stats:{power:3,grip:2,aero:1}},e05:{id:"e05",file:"stock",year:2005,name:"'05 Classic Stock",tag:"The balanced all-rounder. Fuel-injected V8, solid downforce.",spec:{rpmScale:1,tqScale:1,pace:1},stats:{power:4,grip:4,aero:3}},e15:{id:"e15",file:"camry",year:2015,name:"'15 Modern Stock",tag:"Lightest and stickiest. Wide tyres, big aero package, a rocket in the draft.",spec:{mass:1470,Iz:2850,clA:1,cdA:1.22,cgH:.5,rpmScale:1,tqScale:1.05,mu:{track:1.6,apron:1.35},pace:1.045},stats:{power:5,grip:5,aero:5}}},dl=["e87","e05","e15"];function Qh(i,e=null){const t=on[i]||on.e05,n=Object.assign({},t.spec),s=n.rpmScale||1,r=n.tqScale||1;return delete n.rpmScale,delete n.tqScale,n.torque=Nn.torque.map(([a,o])=>[a*s,o*r]),n.gears=Nn.gears.map(a=>a*s),n.idle=Math.round(Nn.idle*(.9+.1*s)),n.redline=Math.round(Nn.redline*s),n.limiter=Math.round(Nn.limiter*s),e&&(n.L=e.wheelbase,n.a=e.a,n.b=e.b,n.wheelR=e.wheelR,n.length=e.L,n.width=e.W,n.trackHalf=e.track,n.H=e.H),n}const Kh={rookie:"e87",regional:"e05",pro:"e15",legends:"e15"},qi={},e_={},Yh=i=>new URL("assets/car/"+i,document.baseURI).href;function Po(i){const e=on[i];return e?qi[i]?Promise.resolve(qi[i]):e_[i]||=Promise.all([new cv().loadAsync(Yh(e.file+".glb")),fetch(Yh(e.file+".json")).then(t=>t.json())]).then(([t,n])=>(qi[i]={scene:t.scene,cfg:n},qi[i])):Promise.reject(new Error("unknown car "+i))}const jh=i=>qi[i]&&qi[i].cfg;function t_(i,e){e==="matte"?(i.roughness=.72,i.metalness=.05,i.clearcoat=0):e==="metallic"?(i.roughness=.3,i.metalness=.65,i.clearcoat=1,i.clearcoatRoughness=.04):(i.roughness=.26,i.metalness=.12,i.clearcoat=1,i.clearcoatRoughness=.06),i.needsUpdate=!0}function ta({car:i="e05",atlas:e="high",livery:t}={}){const n=qi[i];if(!n)throw new Error("car not loaded: "+i+" (await loadCar first)");const s=n.cfg,r=n.scene.clone(!0),a=e==="high"?2048:e==="med"?1024:512,o=document.createElement("canvas");o.width=a,o.height=a;const c=new La(o);c.colorSpace=Rt,c.flipY=!1,c.anisotropy=8,c.generateMipmaps=!0,c.minFilter=Xn;const l=new On({map:c,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25}),u={F:null,R:null},h={value:0};l.onBeforeCompile=M=>{M.uniforms.uDirt=h,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
attribute float aScuff; varying float vScuff; varying vec3 vOP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vScuff = aScuff; vOP = position;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
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
void main() {`)},r.traverse(M=>{if(!M.isMesh)return;const b=M.material.name;M.castShadow=b!=="RTTA_Glass",M.receiveShadow=b==="RTTA_Paint",b==="RTTA_Paint"?M.material=l:b==="RTTA_LightF"?M.material=u.F||=M.material.clone():b==="RTTA_LightR"?M.material=u.R||=M.material.clone():b==="RTTA_Glass"&&(M.material.depthWrite=!1,M.material.envMapIntensity=1.6,M.renderOrder=2)});const f=new dn,d=new dn;f.add(d),d.add(r);const m=[],v=[];for(const M of["FL","FR","RL","RR"]){const b=r.getObjectByName("wheel_"+M);if(!b)continue;const C=new dn;for(const k of b.children.slice())C.add(k);b.add(C),m.push(C),v.push({pivot:b,spin:C,front:M[0]==="F",side:M[1]==="L"?1:-1})}const g={group:f,inner:d,wheels:m,pivots:v,bodyMat:l,texture:c,canvas:o,cfg:s,id:i,livery:null,dirty:!0,spin:0,dim:{L:s.L,W:s.W,H:s.H,wheelR:s.wheelR,tireW:s.tireW,track:s.track,front:s.a,rear:-s.b}};g.setLivery=M=>{g.livery=JSON.parse(JSON.stringify(M)),g.dirty=!0},g.flush=()=>{!g.dirty||!g.livery||($v(o,g.livery,s),c.needsUpdate=!0,g.dirty=!1,t_(l,g.livery.finish))},g.setLights=M=>{g.lightsOn=!!M,p()},g.setBrake=M=>{g.brakeOn=M>.05,p()};function p(){u.F&&(u.F.emissive=new qe(16773840),u.F.emissiveIntensity=g.lightsOn?1.6:0),u.R&&(u.R.emissive=new qe(16715792),u.R.emissiveIntensity=(g.lightsOn?.5:0)+(g.brakeOn?2.2:0))}let y=null,x=0;const _=new F,S=new F,w=new F,E=new Qe;new Qe;function L(){y=[],r.updateMatrixWorld(!0);const M=new Set(["RTTA_Trim","RTTA_Black","RTTA_LightF","RTTA_LightR","RTTA_Glass"]);r.traverse(b=>{if(!b.isMesh||!(b.material===l||M.has(b.material.name)))return;const C=b.geometry.clone();b.geometry=C;const k=C.attributes.position;b.material===l&&C.setAttribute("aScuff",new mt(new Float32Array(k.count),1)),E.identity();for(let D=b;D&&D!==r;D=D.parent)E.premultiply(D.matrix);y.push({o:b,g:C,m:E.clone(),mi:E.clone().invert()})})}return g.applyDents=(M,b=.5)=>{if(!M||M.length<=x)return;y||L(),_.set(0,b+.12,0);const C=new F,k=new F;for(let D=x;D<M.length;D++){const V=M[D],N=new F(V.lt,V.ly,V.lf),O=Math.min(1,V.m),W=.05+.13*O,B=.4+.55*O,j=B*B*1.6,J=w.copy(_).sub(N);J.y*=.35,J.normalize();for(const pe of y){const be=pe.g.attributes.position,Ee=pe.g.attributes.normal,He=pe.g.attributes.aScuff;for(let Ue=0;Ue<be.count;Ue++){S.fromBufferAttribute(be,Ue).applyMatrix4(pe.m);const ee=S.x-N.x,he=S.y-N.y,Me=S.z-N.z,ze=ee*ee+he*he+Me*Me;if(ze>j)continue;const ie=ze/j,de=1-ie,ae=de*de*(3-2*de),I=-2*(6*de*(1-de))/j*.5,Re=.75+.5*Math.abs(Math.sin(S.x*91.7+S.y*57.3+S.z*33.1));if(Ee){C.fromBufferAttribute(Ee,Ue);const Te=J.dot(C);k.set(ee,he,Me).multiplyScalar(W*Re*I*2),k.addScaledVector(C,-k.dot(C)),C.addScaledVector(k,-Te*-1).normalize(),Ee.setXYZ(Ue,C.x,C.y,C.z)}S.addScaledVector(J,W*ae*Re),S.applyMatrix4(pe.mi),be.setXYZ(Ue,S.x,S.y,S.z),He&&He.setX(Ue,Math.min(1,He.getX(Ue)+ae*(.35+.65*O)))}be.needsUpdate=!0,He&&(He.needsUpdate=!0),Ee&&(Ee.needsUpdate=!0)}}x=M.length;for(const D of y)D.g.computeBoundingSphere()},g.setDirt=M=>{h.value=M},g.update=M=>{for(const b of v)b.pivot.rotation.y=b.front?M.steer:0,b.spin.rotation.x=M.spin;d.rotation.z=M.roll||0,d.rotation.x=M.pitch||0},g.dispose=()=>{if(y)for(const M of y)M.g.dispose();c.dispose(),l.dispose(),u.F&&u.F.dispose(),u.R&&u.R.dispose()},t&&(g.setLivery(t),g.flush()),g}const $h={rookie:{pace:.905,aggression:.25,mistakes:.0012,lines:3},pro:{pace:.945,aggression:.45,mistakes:7e-4,lines:4},veteran:{pace:.975,aggression:.65,mistakes:3e-4,lines:5},legend:{pace:1,aggression:.85,mistakes:12e-5,lines:5}};class Uc{constructor(e,t="pro",n=1,s=0){this.track=e,this.lv=$h[t]||$h.pro,this.rnd=wa(n*7919+13),this.skill=.97+this.rnd()*.06,this.lane=s,this.laneT=s,this.laneTimer=2+this.rnd()*4,this.err=0,this.mistake=0,this.passing=0,this.steerLP=0}control(e,t,n,s,r){const a=this.track,o=Math.max(.1,t.vx);this.laneTimer-=e;let c=null,l=1e9;for(const V of s){if(V.car===t)continue;let N=V.s-n.s;N<-a.length/2&&(N+=a.length),N>a.length/2&&(N-=a.length),N>0&&N<l&&Math.abs(V.u-n.u)<3.4&&(l=N,c=V)}let u=!1,h=!1;for(const V of s){if(V.car===t)continue;let N=V.s-n.s;if(N<-a.length/2&&(N+=a.length),N>a.length/2&&(N-=a.length),N>-8&&N<8){const O=V.u-n.u;O>.5&&O<3.8&&(h=!0),O<-.5&&O>-3.8&&(u=!0)}}const f=r.phase==="green"&&r.t>9;if(c&&l<34&&this.laneTimer<=0&&f){const V=[-1,1].map(B=>this.laneTarget(n.u+B*3.6)),N=V.map(B=>this.laneFree(t,n,s,B)),O=this.rnd()<.5?0:1,W=N[O]?O:N[1-O]?1-O:-1;W>=0&&this.rnd()<.5+.5*this.lv.aggression&&(this.laneT=V[W],this.passing=3+this.rnd()*3),this.laneTimer=1.5+this.rnd()*2}else this.passing>0?(this.passing-=e,this.passing<=0&&!c&&(this.laneT=this.lane+(this.rnd()-.5)*2)):this.laneTimer<=0&&(this.laneT=this.lane+(this.rnd()-.5)*3,this.laneTimer=4+this.rnd()*6);this.laneT=Fe(this.laneT,-a.cfg.halfW+1.8,a.cfg.halfW-1.8),h&&this.laneT>this.err&&(this.laneT=this.err-.3),u&&this.laneT<this.err&&(this.laneT=this.err+.3),h&&u&&(this.laneT=this.err),this.err+=(this.laneT-this.err)*Math.min(1,e*.9),this.mistake>0?this.mistake-=e:r.phase==="green"&&this.rnd()<this.lv.mistakes*e*60&&(this.mistake=.4+this.rnd()*.5);const d=Math.atan2(n.tx,n.tz),m=sr(d-t.psi+Math.atan2(t.vy,Math.max(5,o))*0),v=n.u-this.err,g=a.at(n.s+.18*o+6).k;let p=Math.atan(t.C.L*g)*1+.01*o*o*g*0;p+=.9*m+Math.atan2(1.1*v,o+6)-.09*(t.w-o*n.k)*1;const y=Math.atan2(t.vy,Math.max(6,o));Math.abs(y)>.12&&(p+=.9*(y-Math.sign(y)*.12));const x=t.C.maxSteer/(1+Math.pow(o/42,2));let _=Fe(p/x,-1,1);_+=this.mistake>0?Math.sin(this.mistake*14)*.05:0,this.steerLP+=(_-this.steerLP)*Math.min(1,e*14);const S=Math.abs(a.at(n.s+40+o*.8).k);let w=88*this.lv.pace*this.skill*(t.C.pace||1);const E=a.at(n.s+30).bank,L=(20+9.81*Math.tan(Math.min(E,.55))*1.4)*(t.C.mu.track/1.5)*(1-.07*Fe(t.dirty||0,0,1))*.94;if(S>1e-4&&(w=Math.min(w,Math.sqrt(L/S))),c){const V=7+o*.12,N=Math.max(0,c.car.vx);if(l<V+25){const O=Fe((l-V)/25,-1,1);w=Math.min(w,N*(1+.04*O)+(O>0?6:-4))}this.passing>0&&Math.abs(this.err-c.u)>2.5&&(w=Math.max(w,N+2))}this.mistake>0&&(w*=.85),r.phase!=="green"&&r.phase!=="checker"&&r.phase!=="yellow"&&(w=0),r.phase==="yellow"&&(w=Math.min(w,38)),r.phase==="checker"&&(w=Math.min(w,Math.max(40,86-4.5*(r.t-(r.checkerT||r.t)))));const M=w-t.vx,C=Math.abs(y)>.2?0:Fe(.5+M*.45,0,1),k=Math.abs(o*o*n.k),D=Fe(-M*.15-.05,0,.85*Fe(1-.8*k/20,.22,1))*(M<-3?1:0);return{steer:this.steerLP,throttle:D>0?0:C,brake:D,analog:!0}}laneTarget(e){return Fe(e,-this.track.cfg.halfW+1.8,this.track.cfg.halfW-1.8)}laneFree(e,t,n,s){for(const r of n){if(r.car===e)continue;let a=r.s-t.s;if(a<-this.track.length/2&&(a+=this.track.length),a>this.track.length/2&&(a-=this.track.length),a>-10&&a<18&&Math.abs(r.u-s)<2.6)return!1}return!0}}const n_=9.81,Et=()=>new F,Zh=new Qe,Lo=new Mt,i_=new Mt;class s_{constructor(e){const t=e.C;this.C=t,this.m=t.mass;const n=t.length||5,s=t.width||1.95,r=t.H||1.4,a=t.cgH||.52,o=t.trackHalf||.78,c=t.wheelR||.34,l=n/2,u=s/2;this.cg=a,this.hl=l,this.wr=c;const h=[];for(const[y,x]of[[t.a,"f"],[-t.b,"r"]])for(const _ of[1,-1])h.push({p:Et().set(_*o,c-a,y),r:c,wheel:!0});for(const y of[1,-1])for(const x of[1,-1])h.push({p:Et().set(x*u,.2-a,y*l*.97),r:0}),h.push({p:Et().set(x*u*.82,.62*r-a,y*l*.93),r:0});for(const y of[.9,-1.3])for(const x of[1,-1])h.push({p:Et().set(x*u*.72,r-a,y),r:0});this.pts=h,this.I=[this.m/12*(n*n+r*r)*.8,t.Iz||2900,this.m/12*(s*s+r*r)];const f=Math.sin(e.psi),d=Math.cos(e.psi),m=new Mt().setFromAxisAngle(new F(0,1,0),e.psi),v=new Mt().setFromAxisAngle(new F(0,0,1),e.gr||0),g=new Mt().setFromAxisAngle(new F(1,0,0),-(e.gp||0));this.q=m.multiply(v).multiply(g),this.p=Et().set(e.x,e.gh||0,e.z).add(Et().set(0,a,0).applyQuaternion(this.q)),this.v=Et().set(e.vx*f+e.vy*d,0,e.vx*d-e.vy*f);const p=Et().set(0,0,1).applyQuaternion(this.q);Et().set(0,1,0).applyQuaternion(this.q),this.w=Et().set(0,e.w,0).addScaledVector(p,-Fe(e.vy,-30,30)*.12),e.vx<-20&&this.w.addScaledVector(Et().set(1,0,0).applyQuaternion(this.q),-.4),this.dmg={front:0,rear:0,left:0,right:0,top:0},this.dents=[],this.age=0,this.rest=0,this.done=!1,this.upright=!1,this.ev=[],this.dirtGain=0,this.maxHit=0,this._R=new Qe,this._r=Et(),this._pw=Et(),this._vel=Et(),this._F=Et(),this._T=Et(),this._n=Et(),this._vt=Et(),this._ft=Et(),this._tmp=Et(),this._tmp2=Et()}step(e,t,n){if(this.done)return;const s=2,r=e/s;this.ev.length=0;for(let c=0;c<s;c++)this.sub(r,t,n);this.age+=e;const a=this.v.length(),o=this.w.length();if(this.rest=a<.9&&o<.35?this.rest+e:0,this.rest>1||this.age>20){this.done=!0;const c=Et().set(0,1,0).applyQuaternion(this.q);this.upright=c.y>.62,this.v.set(0,0,0),this.w.set(0,0,0)}}sub(e,t,n){const s=this.m,r=this.q;Zh.makeRotationFromQuaternion(r);const a=Zh.elements,o=this._F.set(0,-s*n_,0),c=this._T.set(0,0,0),l=this.v.length();t(this.p.x,this.p.z,n);const u=this.p.y-n.y;if(l>1){o.addScaledVector(this.v,-.5*1.2*(this.C.cdA||1.3)*1.6*l);const S=this._tmp.set(a[8],a[9],a[10]).dot(this.v)/l;if(S<-.3&&u<6){const w=.6*l*l*6*(-S-.3);o.y+=w;const E=this._r.set(0,0,this.hl).applyQuaternion(r);c.add(this._tmp2.crossVectors(E,this._tmp.set(0,w*1,0)))}}for(const _ of this.pts){const S=this._r.copy(_.p).applyQuaternion(r),w=this._pw.copy(this.p).add(S),E=this._vel.crossVectors(this.w,S).add(this.v);t(w.x,w.z,n);let L=n.y+_.r-w.y;if(L>0){const C=this._n.set(n.nx,n.ny,n.nz),k=E.dot(C),D=_.wheel?15e4:38e4,V=_.wheel?5200:12e3,N=Fe(D*L-V*k,0,_.wheel?11e4:2e5),O=this._tmp.copy(C).multiplyScalar(N),W=this._vt.copy(E).addScaledVector(C,-k),B=W.length(),j=n.surface==="grass";let J=j?1.1:.6;if(_.wheel){J=j?2.3:.95;const be=this._tmp2.set(a[8],a[9],a[10]).addScaledVector(C,-C.dot(this._tmp2)),Ee=be.length();if(Ee>.001){be.multiplyScalar(1/Ee);const He=W.dot(be);W.addScaledVector(be,-He*.92)}}const pe=W.length();if(pe>1e-5){const be=this._ft.copy(W).multiplyScalar(-J*N/(pe+.35));O.add(be)}if(_.wheel&&B>1e-5&&this._ft.copy(E).addScaledVector(C,-k),o.add(O),c.add(this._tmp2.crossVectors(S,O)),N>4e3&&this.ev.length<8&&this.ev.push({x:w.x,y:n.y,z:w.z,hit:N/11e4,speed:B,soft:j,wheel:!!_.wheel}),!_.wheel&&N>9e3){const be=N/2e5*e*2.6,Ee=_.p;Ee.y>.3&&(this.dmg.top+=be),Math.abs(Ee.z)>Math.abs(Ee.x)*1.2?Ee.z>0?this.dmg.front+=be:this.dmg.rear+=be:Ee.x>0?this.dmg.left+=be:this.dmg.right+=be,N>3e4&&(this._dentT||0)<=this.age&&(this._dentT=this.age+.12,this.dents.push({lf:Ee.z,lt:Ee.x,ly:Ee.y+this.cg,m:Fe(N/16e4,.15,1)}))}k<-3&&-k>this.maxHit&&(this.maxHit=-k),j&&(this.dirtGain+=N/11e4*e*1.6)}const M=n.u-n.wallU,b=n.infieldU-n.u;if(M>0||b>0){const C=M>0,k=C?M:b,D=C?-n.rx:n.rx,V=C?-n.rz:n.rz,N=E.x*D+E.z*V,O=Fe(22e4*k-9e3*N,0,9e4),W=this._tmp.set(D*O,0,V*O),B=E.x-N*D,j=E.z-N*V,J=E.y,pe=Math.hypot(B,J,j);if(pe>1e-5){const be=-.35*O/(pe+.4);W.x+=B*be,W.y+=J*be,W.z+=j*be}o.add(W),c.add(this._tmp2.crossVectors(S,W)),O>6e3&&this.ev.length<8&&this.ev.push({x:w.x,y:w.y,z:w.z,hit:O/9e4,speed:pe,soft:!1,wall:!0}),N<-3&&-N>this.maxHit&&(this.maxHit=-N)}}this.v.addScaledVector(o,e/s),this.p.addScaledVector(this.v,e),Lo.copy(r).invert();const h=this._tmp.copy(this.w).applyQuaternion(Lo),f=this._r.copy(c).applyQuaternion(Lo),d=this.I,m=(d[2]-d[1])*h.y*h.z/d[0],v=(d[0]-d[2])*h.z*h.x/d[1],g=(d[1]-d[0])*h.x*h.y/d[2],p=this._pw.set(f.x/d[0]+m,f.y/d[1]+v,f.z/d[2]+g).applyQuaternion(r);this.w.addScaledVector(p,e),this.w.multiplyScalar(1-.45*e);const y=this.w,x=i_.set(y.x*e*.5,y.y*e*.5,y.z*e*.5,0).multiply(r);r.set(r.x+x.x,r.y+x.y,r.z+x.z,r.w+x.w).normalize()}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}forwardYaw(){const e=Et().set(0,0,1).applyQuaternion(this.q);return Math.atan2(e.x,e.z)}}const na=Nn.length/2,ia=Nn.width/2;class Io{constructor(e,t,n,s,r=!1,a=null,o=null){this.carId=o,this.id=e,this.name=t,this.number=n,this.livery=s,this.isPlayer=r,this.sim=new Jv(e,a),this.driver=null,this.q={},this.hint=0,this.prog=0,this.prevS=0,this.lap=0,this.lapStart=0,this.lastLap=null,this.bestLap=null,this.finished=!1,this.finishTime=null,this.pos=0,this.gap=0,this.visual=null,this.controls={steer:0,throttle:0,brake:1},this.slot=e,this.remote=!1,this.nid=null,this.left=!1}}class Jh{constructor(e,t,n={}){this.track=e,this.entries=t,this.laps=n.laps||3,this.mode=n.mode||"race",this.phase="grid",this.t=0,this.countdown=4.2,this.onEvent=n.onEvent||(()=>{}),this.mp=!!n.mp,this.holdGrid=!!n.hold,this.finishedCount=0,this.leaderDone=!1,this.endTimer=0,this.sorted=t.slice(),this.ready=!1,this.lastCount=99,this.flag=null,this.wallHits=0,this.cars=t.map(r=>({car:r.sim,s:0,u:0}));const s=e.cfg;this._wallU=s.halfW+.5,this._infU=-s.halfW-s.apron-s.infieldLimit,this._gq={},this._gHint=0,this._go={},this._tf={x:0,z:0},this._groundFn=(r,a,o)=>{const c=this._gq;if(e.query(r,a,this._gHint,c),o.y=c.y,o.surface=c.surface,o.u=c.u,o.rx=c.rx,o.rz=c.rz,o.wallU=this._wallU,o.infieldU=this._infU,c.surface==="track"&&c.bank){const l=Math.sin(c.bank),u=Math.cos(c.bank);o.nx=-c.rx*l,o.ny=u,o.nz=-c.rz*l}else o.nx=0,o.ny=1,o.nz=0;return o}}get player(){return this.entries.find(e=>e.isPlayer)}gridUp(e=0,t=null){const n=this.track,s=t?t.slice():this.entries.slice(),r=this.player;r&&!t&&(s.splice(s.indexOf(r),1),s.splice(Fe(e,0,s.length),0,r)),s.forEach((a,o)=>{const c=Math.floor(o/2),l=o%2,u=-14-c*11-(l?5.5:0),h=l?3.4:-3.4,f=n.point(u,h,{});a.sim.place(f.x,f.z,f.heading,0),a.sim.damage={front:0,rear:0,left:0,right:0},a.sim.gear=1,a.sim.rpm=a.sim.C.idle,n.query(f.x,f.z,void 0,a.q),a.hint=a.q.i,a.prevS=a.q.s,a.prog=u,a.lap=0,a.lapStart=0,a.lastLap=null,a.bestLap=null,a.finished=!1,a.finishTime=null,a.gridPos=o+1,a.driver&&(a.driver.lane=h*.4,a.driver.laneT=a.driver.lane,a.driver.err=h)}),this.sortNow(),this.phase="grid",this.t=0,this.countdown=4.2,this.lastCount=99}rollingStart(e=40,t=-60){const n=this.player,s=this.track.point(t,-1,{});n.sim.place(s.x,s.z,s.heading,e),n.sim.gear=3,this.track.query(s.x,s.z,void 0,n.q),n.hint=n.q.i,n.prevS=n.q.s,n.prog=t,n.lap=0,n.lapStart=0,this.phase="green",this.t=0,this.countdown=0}sortNow(){this.sorted=this.entries.slice().sort((e,t)=>!!e.left!=!!t.left?e.left?1:-1:t.finished!==e.finished?t.finished?1:-1:t.finished&&e.finished?e.finishTime-t.finishTime:t.prog-e.prog),this.sorted.forEach((e,t)=>{e.pos=t+1})}update(e){const t=this.track;if(this.t+=e,this.phase==="grid"){this.holdGrid||(this.countdown-=e);const r=Math.ceil(this.countdown);if(r!==this.lastCount&&r<=3&&(this.lastCount=r,r>0&&this.onEvent("count",r)),this.countdown<=0){this.phase="green",this.t=0,this.onEvent("go",0);for(const a of this.entries)a.lapStart=0}}for(let r=0;r<this.entries.length;r++){const a=this.entries[r],o=a.sim.ghost;this.cars[r].s=a.q.s||0,this.cars[r].u=o?1e5:a.q.u||0,this.cars[r].car=a.sim}const n=t.length;for(const r of this.entries){const a=r.sim,o=r.q;if(a.hidden)continue;if(r.remote){t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,r.finished&&!r.countedFin&&(r.countedFin=!0,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker")));continue}if(a.tumble)this.stepTumble(r,e);else{let u=r.controls;!r.isPlayer&&r.driver&&(u=r.driver.control(e,a,o,this.cars,this)),r.controls=u,this.phase==="grid"&&(u={steer:0,throttle:0,brake:1,analog:!0}),r.finished&&r.isPlayer&&this.phase!=="grid"&&(u={steer:Fe(u.steer*.6,-1,1),throttle:0,brake:.25,analog:!0});let h=0,f=0;for(const m of this.entries){if(m===r||m.sim.ghost)continue;let v=m.q.s-o.s;if(v<-n/2&&(v+=n),v>n/2&&(v-=n),v>3&&v<45&&Math.abs(m.q.u-o.u)<3){const g=1-v/45;h=Math.max(h,g*(m.sim.vx>30?1:.3)),v<20&&(f=Math.max(f,1-v/20))}}a.sampleGround(t,r.hint),r.hold>0&&(r.hold-=e,u={steer:0,throttle:0,brake:1,analog:!0}),a.step(e,u,{surface:o.surface,bank:o.bank,rx:o.rx,rz:o.rz,k:o.k,draft:h,dirty:f});const d=this.phase!=="grid"?a.checkTrip(e)||a.pendingTrip:null;d&&this.startTumble(r,d)}if(t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,!r.isPlayer&&this.phase!=="grid"&&!a.tumble){const u=Math.atan2(o.tx,o.tz);let h=Math.abs((a.psi-u+Math.PI*3)%(Math.PI*2)-Math.PI);if(a.vx<6||h<1.2&&!1||Math.abs(a.psi-u)>1.6&&Math.abs(a.psi-u)<4.7?r.stuck=(r.stuck||0)+e:r.stuck=0,r.stuck>3&&!r.finished){const f=t.point(o.s+6,Fe(o.u,-7,7),{});a.place(f.x,f.z,f.heading,28),a.w=0,a.gear=2,r.stuck=0}}let c=o.s-r.prevS;c<-n/2?c+=n:c>n/2&&(c-=n),r.prevS=o.s;const l=r.prog;if(r.prog+=c,Math.floor(r.prog/n)>Math.floor(l/n)&&r.prog>0){const u=Math.floor(r.prog/n);if(u>=1){const h=this.t-r.lapStart;this.phase!=="grid"&&u===r.lap+1&&(r.lastLap=h,(r.lapStart>0||u>1||this.mode==="hotlap"||h>20)&&(!r.bestLap||h<r.bestLap)&&(r.bestLap=h),r.lap=u,r.lapStart=this.t,this.onEvent("lap",r,h),r.isPlayer&&r.bestLap===h&&this.onEvent("bestlap",r,h),this.mode==="race"&&u>=this.laps&&!r.finished&&(r.finished=!0,r.finishTime=this.t,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker"))))}}}this.contacts(),this.sortNow();const s=this.sorted[0];for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r-1];a.gapAhead=o?Math.max(0,o.prog-a.prog)/Math.max(25,a.sim.vx):0,a.gapLead=s?Math.max(0,s.prog-a.prog)/Math.max(25,a.sim.vx):0}for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r+1];a.gapBehind=o?Math.max(0,a.prog-o.prog)/Math.max(25,o.sim.vx):0}if(this.phase==="checker"){const r=this.player;this.mode==="race"&&r&&r.finished&&(this.endTimer+=e,this.endTimer>(this.mp?5.5:4.5)&&!this.done&&(this.done=!0,this.phase="done",this.onEvent("done")))}}startTumble(e,t){const n=e.sim;n.tumble||(n.tumble=new s_(n),n.pendingTrip=null,n.wrecked=!1,e.tumbleDone=0,e.tumbleKind=t,this.onEvent("flip",e,t,n.speed))}stepTumble(e,t){const n=e.sim,s=n.tumble;this._gHint=e.hint;const r=s.done;s.done||s.step(t,this._groundFn,this._go);const a=s.q,o=2*(a.x*a.z+a.w*a.y),c=1-2*(a.x*a.x+a.y*a.y);Math.hypot(o,c)>.35&&(n.psi=Math.atan2(o,c)),n.x=s.p.x,n.z=s.p.z;const l=Math.sin(n.psi),u=Math.cos(n.psi);n.vx=s.v.x*l+s.v.z*u,n.vy=s.v.x*u-s.v.z*l,n.w=s.w.y,n.throttle=0,n.rpm+=(n.C.idle-n.rpm)*Math.min(1,t*3),n.skid=0,n.gh=s.p.y-s.cg;for(let d=0;d<s.ev.length&&d<3;d++)this.onEvent("tumbleHit",e,s.ev[d]);const h=n.damage,f=s.dmg;if(f.front+f.rear+f.left+f.right+f.top>0){const d=f.top*.5;h.front=Math.min(1,h.front+f.front+d),h.rear=Math.min(1,h.rear+f.rear+d),h.left=Math.min(1,h.left+f.left+d),h.right=Math.min(1,h.right+f.right+d),f.front=f.rear=f.left=f.right=f.top=0}if(s.dents.length){for(const d of s.dents)n.dents.length<40&&n.dents.push(d);s.dents.length=0,n.dentVer=(n.dentVer||0)+1}if(n.dirt=Math.min(1,n.dirt+s.dirtGain*.6),s.dirtGain=0,s.done&&!r&&(e.tumbleDone=this.t,n.wrecked=!0,this.onEvent("wrecked",e)),s.done){e.tumbleDone||(e.tumbleDone=this.t);const d=this.t-e.tumbleDone;e.isPlayer?d>3.2&&this.recover(e):(e.retired=!0,d>2.5&&(n.ghost=!0),d>9&&(n.hidden=!0,this.onEvent("removed",e)))}}recover(e){const t=e.sim,n=e.q,s=this.track.point(n.s,Fe(n.u,-6,6),{});t.recover(s.x,s.z,s.heading),t.dents=t.dents.slice(0,40),e.hold=1.6,e.tumbleDone=0,this.track.query(s.x,s.z,e.hint,n),e.hint=n.i,this.onEvent("recovered",e)}tripFromHit(e,t){const n=e.sim;n.tumble||n.ghost||this.phase==="grid"||t>14&&Math.abs(n.vy)>8&&n.speed>28&&n.rand()<.3&&(n.pendingTrip="impact")}contacts(){const e=this.entries,t=this.track,n=t.cfg,s=n.halfW+.5,r=-n.halfW-n.apron-n.infieldLimit,a=e.map(o=>o.sim.tumble?[o.sim.x,o.sim.z,o.sim.wvx,o.sim.wvz]:null);for(let o=0;o<e.length;o++){const c=e[o].sim;if(c.ghost)continue;for(let f=o+1;f<e.length;f++){const d=e[f].sim;if(d.ghost)continue;const m=e[o].remote,v=e[f].remote;if(m&&v)continue;const g=d.x-c.x,p=d.z-c.z;if(g*g+p*p>36)continue;const y=Math.sin(c.psi),x=Math.cos(c.psi),_=Math.sin(d.psi),S=Math.cos(d.psi);for(const w of[1.4,0,-1.4])for(const E of[1.4,0,-1.4]){const L=c.x+y*w,M=c.z+x*w,b=d.x+_*E,C=d.z+S*E,k=b-L,D=C-M,V=k*k+D*D,N=2;if(V<N*N&&V>1e-6){const O=Math.sqrt(V),W=k/O,B=D/O,j=N-O,J=d.wvx-c.wvx,pe=d.wvz-c.wvz,be=J*W+pe*B,Ee=j*.5;if(m||(c.x-=W*Ee,c.z-=B*Ee),v||(d.x+=W*Ee,d.z+=B*Ee),be<0){const He=-1.12*be/(1/c.C.mass+1/d.C.mass),Ue=Math.min(He,3e4);m||c.applyImpulse((L+b)/2,(M+C)/2,-W,-B,Ue*.6),v||d.applyImpulse((L+b)/2,(M+C)/2,W,B,Ue*.6);const ee=Math.min(1,-be/22);m||this.tripFromHit(e[o],-be),v||this.tripFromHit(e[f],-be),-be>2&&(m||c.addDamage((L+b)/2,(M+C)/2,ee*.18),v||d.addDamage((L+b)/2,(M+C)/2,ee*.18),this.onEvent("crash",e[o],e[f],ee))}}}}const l=e[o].q;if(!l||l.u===void 0||c.tumble||e[o].remote)continue;const u=Math.sin(c.psi),h=Math.cos(c.psi);for(const[f,d]of[[na,ia],[na,-ia],[-na,ia],[-na,-ia]]){const m=c.x+u*f+h*d,v=c.z+h*f-u*d,g={};t.query(m,v,e[o].hint,g);const p=g.u-s;let y=r;const x=t.pit;if(x){const S=t.wrapS(g.s-x.s0);S>x.wallP0&&S<x.wallP1&&(y=x.uWallFace)}const _=y-g.u;if(p>0||_>0){const S=p>0,w=S?-g.rx:g.rx,E=S?-g.rz:g.rz,L=S?p:_;c.x+=w*L*1,c.z+=E*L*1;const M=c.wvx*w+c.wvz*E;if(M<0){const b=-1.08*M*c.C.mass;c.applyImpulse(m,v,w,E,Math.min(b,9e4)*.55);const C=Math.min(1,-M/26);-M>22&&Math.abs(c.vy)>7&&c.rand()<.35&&!c.tumble&&(c.pendingTrip="impact"),-M>1.5&&(c.addDamage(m,v,C*.22),this.onEvent("wall",e[o],C)),c.scrape=1,c.vx*=.995}}}}for(let o=0;o<e.length;o++){const c=a[o],l=e[o].sim;if(c&&l.tumble){const u=l.tumble;u.p.x+=l.x-c[0],u.p.z+=l.z-c[1],u.v.x+=l.wvx-c[2],u.v.z+=l.wvz-c[3]}}}}const Rd="rtta3.career.v1",rr={paint:"#d9dde2",accent:"#1d1f24",trim:"#1d1f24",pattern:"none",finish:"gloss",number:"00",numberColor:"#1d1f24",numberStyle:"block",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}},Sn=[{id:"rookie",name:"Rookie Cup",laps:3,field:12,ai:"rookie",mult:1,unlockRep:0,races:6},{id:"regional",name:"Regional Sprint",laps:5,field:16,ai:"pro",mult:1.5,unlockRep:350,races:8},{id:"pro",name:"Pro Series",laps:8,field:24,ai:"veteran",mult:2.2,unlockRep:1100,races:10},{id:"legends",name:"Legends 200",laps:12,field:32,ai:"legend",mult:3,unlockRep:2600,races:12}],eu={1:{races:2,avgPct:.3,series:0},2:{races:5,avgPct:.55,series:0},3:{races:9,avgPct:.7,series:1},4:{races:14,avgPct:.82,series:2}},Hi={pattern:{none:0,stripe:0,split:300,chevron:600,fade:900},finish:{gloss:0,matte:400,metallic:800}},tu={rookie:["thunder","piedmont","thunder","piedmont","lonestar","americas"],regional:["piedmont","lonestar","thunder","americas","lonestar","piedmont","americas","thunder"],pro:["lonestar","americas","piedmont","thunder","americas","lonestar","piedmont","americas","thunder","lonestar"],legends:["americas","thunder","lonestar","piedmont","americas","americas","lonestar","thunder","piedmont","americas","lonestar","americas"]},r_=i=>JSON.parse(JSON.stringify(i)),Fc=()=>({v:1,name:"Driver",credits:0,rep:0,races:[],owned:[],declined:[],unlocked:{pattern:["none","stripe"],finish:["gloss"]},livery:r_(rr),seriesIndex:0,seasonRace:0,bestLap:null,bests:{},unlockAll:!0,car:null});function a_(i){try{const e=i&&i.getItem(Rd);if(e){const t=JSON.parse(e);if(t&&t.v===1){const n=Object.assign(Fc(),t);return(!n.bests||typeof n.bests!="object")&&(n.bests={}),n.bestLap&&!n.bests.americas&&(n.bests.americas=n.bestLap),n}}}catch{}return Fc()}class Da{constructor(e=typeof localStorage<"u"?localStorage:null){this.storage=e,this.state=a_(e),this.listeners=new Set,this.applyUnlockAll()}applyUnlockAll(){const e=this.state;e.unlockAll&&(e.owned=gr.map(t=>t.id),e.unlocked.pattern=Object.keys(Hi.pattern),e.unlocked.finish=Object.keys(Hi.finish))}setUnlockAll(e){this.state.unlockAll=!!e,e?this.applyUnlockAll():this.state.car=null,this.save()}seriesOpen(e){return!!Sn[e]&&(this.state.unlockAll||this.state.rep>=Sn[e].unlockRep)}setCar(e){this.state.car=e||null,this.save()}carChoice(){return this.state.unlockAll?this.state.car:null}save(){try{this.storage&&this.storage.setItem(Rd,JSON.stringify(this.state))}catch{}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){const e=this.state.unlockAll;this.state=Fc(),this.state.unlockAll=e,this.applyUnlockAll(),this.save()}get series(){return Sn[this.state.seriesIndex]}unlockedSeries(){return Sn.filter((e,t)=>this.seriesOpen(t)||t<=this.state.seriesIndex)}selectSeries(e){return this.seriesOpen(e)?(this.state.seriesIndex=e,this.state.seasonRace=0,this.save(),!0):!1}trackFor(e,t){const n=tu[e]||tu.rookie;return n[(t%n.length+n.length)%n.length]}nextRace(){const e=this.series,t=this.trackFor(e.id,this.state.seasonRace),n=bt[t],s=Math.max(0,Sn.indexOf(e));return{series:e,index:this.state.seasonRace,of:e.races,laps:n&&n.laps[s]||e.laps,field:e.field,ai:e.ai,track:t}}bestFor(e){return this.state.bests&&this.state.bests[e]||null}noteBest(e,t){if(!t||!isFinite(t))return!1;const n=this.state.bests,s=n[e];return!s||t<s?(n[e]=t,e==="americas"&&(this.state.bestLap=t),this.save(),!0):!1}setLivery(e){const t=this.state.livery;for(const n of Object.keys(e))n==="slots"?Object.assign(t.slots,e.slots):t[n]=e[n];for(const n of Lc){const s=t.slots[n];s&&!this.state.owned.includes(s)&&(t.slots[n]=null)}return this.save(),t}static finishPct(e,t){return t<=1?1:1-(e-1)/(t-1)}recentAvgPct(e=3){const t=this.state.races.slice(-e);return t.length?t.reduce((n,s)=>n+o_.pct(s),0)/t.length:0}repFor(e,t,n){const s=120*(t-e)/Math.max(1,t-1);return Math.round((s+(e===1?40:0)+(e<=3?15:0)+10)*n)}recordResult({series:e,pos:t,field:n,laps:s,bestLap:r,points:a,track:o}){const c=this.state,l=Sn.find(y=>y.id===e)||this.series,u=new Set(this.offers().map(y=>y.id)),h=this.repFor(t,n,l.mult);let f=0;const d=[],m=new Set;for(const y of Lc){const x=c.livery.slots[y],_=x&&Ns(x);if(!_||m.has(x)||!c.owned.includes(x))continue;m.add(x);const S=_.slots.includes(y)?1:.6,w=.5+.5*Da.finishPct(t,n),E=Math.round(_.payout*S*w);f+=E,d.push({id:x,name:_.name,amount:E})}const v=Math.round(40*l.mult*(n-t+1));c.rep+=h,c.credits+=f+v,c.races.push({series:l.id,pos:t,field:n,laps:s,track:o,t:Date.now()}),r&&o&&((!c.bests[o]||r<c.bests[o])&&(c.bests[o]=r),o==="americas"&&(!c.bestLap||r<c.bestLap)&&(c.bestLap=r)),l.id===this.series.id&&(c.seasonRace=Math.min(c.seasonRace+1,l.races)),this.save();const g=this.offers().filter(y=>!u.has(y.id)),p=Sn.filter(y=>c.rep>=y.unlockRep&&c.rep-h<y.unlockRep);return{repGain:h,prize:v,sponsorPay:f,paid:d,newOffers:g,unlockedSeries:p,rep:c.rep,credits:c.credits}}eligibleTier(){const e=this.state,t=this.recentAvgPct(3),n=Math.max(...Sn.map((r,a)=>e.rep>=r.unlockRep?a:0));let s=0;for(const r of[1,2,3,4]){const a=eu[r];e.races.length>=a.races&&t>=a.avgPct&&n>=a.series&&(s=r)}return s}offers(){if(this.state.unlockAll)return[];const e=this.eligibleTier();return gr.filter(t=>t.tier<=e&&!this.state.owned.includes(t.id)&&!this.state.declined.includes(t.id))}nextTierGoal(){const e=this.eligibleTier()+1,t=eu[e];if(!t)return null;const n=this.state,s=Math.max(...Sn.map((r,a)=>n.rep>=r.unlockRep?a:0));return{tier:e,racesNeeded:Math.max(0,t.races-n.races.length),avgNeeded:t.avgPct,avgNow:this.recentAvgPct(3),seriesNeeded:t.series>s?Sn[t.series].name:null}}acceptSponsor(e){return this.offers().some(t=>t.id===e)?(this.state.owned.push(e),this.save(),!0):!1}declineSponsor(e){this.state.declined.includes(e)||(this.state.declined.push(e),this.save())}canUse(e,t){return this.state.unlocked[e]?this.state.unlocked[e].includes(t)||Hi[e][t]===0:!0}buy(e,t){const n=Hi[e]&&Hi[e][t];return n===void 0||this.canUse(e,t)||this.state.credits<n?!1:(this.state.credits-=n,(this.state.unlocked[e]||=[]).push(t),this.save(),!0)}}const o_={pct:i=>Da.finishPct(i.pos,i.field)},c_=new Da;function l_(){const i=new Set,e=new Set,t={touchActive:!1,touch:{steer:0,throttle:0,brake:0},steer:0,usingPad:!1,lastKeyT:0},n={KeyC:"camera",Escape:"pause",KeyP:"pause",KeyR:"reset",KeyV:"look"},s=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);addEventListener("keydown",a=>{a.target&&/INPUT|TEXTAREA|SELECT/.test(a.target.tagName)||(s.has(a.code)&&a.preventDefault(),a.repeat||(i.add(a.code),n[a.code]&&e.add(n[a.code])))}),addEventListener("keyup",a=>i.delete(a.code)),addEventListener("blur",()=>i.clear()),t.setTouch=a=>{t.touch.steer=Fe(a.steer||0,-1,1),t.touch.throttle=Fe(a.throttle||0,0,1),t.touch.brake=Fe(a.brake||0,0,1),t.lastTouchT=performance.now()},t.press=a=>e.add(a),t.consume=a=>e.has(a)?(e.delete(a),!0):!1,t.clear=()=>{e.clear()};const r=(...a)=>a.some(o=>i.has(o));return t.read=(a,o)=>{let c=0,l=0,u=0,h=!1;const f=r("ArrowLeft","KeyA"),d=r("ArrowRight","KeyD");u=(f?1:0)-(d?1:0),c=r("ArrowUp","KeyW")?1:0,l=r("ArrowDown","KeyS","Space")?1:0;const m=navigator.getGamepads?navigator.getGamepads():[],v=m&&[...m].find(g=>g&&g.connected);if(v){const g=Math.abs(v.axes[0])>.08?v.axes[0]:0,p=v.buttons[7]?v.buttons[7].value:0,y=v.buttons[6]?v.buttons[6].value:0;(g||p>.02||y>.02)&&(u=-g,c=Math.max(c,p),l=Math.max(l,y),h=!0,t.steer=Fe(-g,-1,1)),v.buttons[0]&&v.buttons[0].pressed&&!t._a&&e.add("look"),t._a=v.buttons[0]&&v.buttons[0].pressed,v.buttons[3]&&v.buttons[3].pressed&&!t._y&&e.add("camera"),t._y=v.buttons[3]&&v.buttons[3].pressed,v.buttons[9]&&v.buttons[9].pressed&&!t._s&&e.add("pause"),t._s=v.buttons[9]&&v.buttons[9].pressed}if(t.touchActive&&performance.now()-(t.lastTouchT||0)<600){const g=t.touch;(g.steer||g.throttle||g.brake)&&(u=g.steer,c=g.throttle,l=g.brake,h=!0,t.steer=g.steer)}if(!h){const g=3.6/(1+o/45),y=(u===0?6.5:g)*(Math.sign(u)!==Math.sign(t.steer)&&t.steer!==0&&u!==0?1.6:1);t.steer+=Fe(u-t.steer,-y*a,y*a)}return{steer:Fe(t.steer,-1,1),throttle:c,brake:l,analog:!0}},t}const Dt=(i,e,t)=>i<e?e:i>t?t:i,Gi=i=>440*Math.pow(2,(i-69)/12);function Na(i){let e=i>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const nu=new WeakMap;function Ua(i,e="white"){let t=nu.get(i);if(t||(t={},nu.set(i,t)),t[e])return t[e];const n=i.sampleRate,s=Math.floor(n*4),r=2048,a=s+r,o=new Float32Array(a),c=Na(e==="white"?1234:e==="pink"?777:4242);if(e==="white")for(let d=0;d<a;d++)o[d]=c()*2-1;else if(e==="pink"){let d=0,m=0,v=0,g=0,p=0,y=0,x=0;for(let _=0;_<a;_++){const S=c()*2-1;d=.99886*d+S*.0555179,m=.99332*m+S*.0750759,v=.969*v+S*.153852,g=.8665*g+S*.3104856,p=.55*p+S*.5329522,y=-.7616*y-S*.016898,o[_]=(d+m+v+g+p+y+x+S*.5362)*.11,x=S*.115926}}else{let d=0;for(let m=0;m<a;m++){const v=c()*2-1;d=(d+.02*v)/1.02,o[m]=d*3.5}}const l=i.createBuffer(1,s,n),u=l.getChannelData(0);for(let d=0;d<s;d++)u[d]=o[d];for(let d=0;d<r;d++){const m=d/r;u[d]=o[d]*m+o[s+d]*(1-m)}let h=0;for(let d=0;d<s;d++)h=Math.max(h,Math.abs(u[d]));const f=h>0?.95/h:1;for(let d=0;d<s;d++)u[d]*=f;return t[e]=l,l}function Cd(i,e,t,n,s,r){const a=i.createGain(),o=Math.max(.002,s);return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+o),a.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(o+.01,r)),a.gain.setValueAtTime(0,t+Math.max(o+.01,r)+.005),a.connect(e),a}function it(i,e,t,n){const s=n.dur??.2,r=Cd(i,e,t,n.peak??.3,n.attack??.004,s);let a=r;if(n.pan){const l=i.createStereoPanner?i.createStereoPanner():null;l&&(l.pan.value=n.pan,l.connect(r),a=l)}let o=a;if(n.filter){const l=i.createBiquadFilter();l.type=n.filter.type||"lowpass",l.Q.value=n.filter.q??.7,l.frequency.setValueAtTime(n.filter.f,t),n.filter.f1&&l.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),l.connect(a),o=l}const c=i.createOscillator();return c.type=n.type||"sine",c.frequency.setValueAtTime(n.f0,t),n.f1&&c.frequency.exponentialRampToValueAtTime(n.f1,t+s),n.detune&&(c.detune.value=n.detune),c.connect(o),c.start(t),c.stop(t+s+.05),c}function qt(i,e,t,n){const s=n.dur??.1,r=Cd(i,e,t,n.peak??.3,n.attack??.002,s);let a=r;if(n.pan&&i.createStereoPanner){const l=i.createStereoPanner();l.pan.value=n.pan,l.connect(r),a=l}const o=i.createBiquadFilter();o.type=n.filter?.type||"bandpass",o.Q.value=n.filter?.q??1,o.frequency.setValueAtTime(n.filter?.f??1500,t),n.filter?.f1&&o.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),o.connect(a);const c=i.createBufferSource();return c.buffer=Ua(i,n.kind||"white"),c.loop=!0,c.connect(o),c.start(t,(n.offset??0)%3.5),c.stop(t+s+.05),c}function h_(i,e=1.6,t=3.2,n=99){const s=i.sampleRate,r=Math.floor(s*e),a=i.createBuffer(2,r,s);for(let o=0;o<2;o++){const c=a.getChannelData(o),l=Na(n+o*17);let u=0;for(let h=0;h<r;h++){const f=Math.pow(1-h/r,t);u+=(l()*2-1-u)*(.35+.65*(1-h/r)),c[h]=u*f*(h<64?h/64:1)}}return a}function Ta(i){return new Promise(e=>setTimeout(e,i))}const zn={C5:523.25,G5:783.99,A5:880,B5:987.77,E6:1318.5,A6:1760},iu=(i,e,t=.03)=>i*(1+e*t),u_={hover(i,e,t,n=0){return it(i,e,t,{type:"sine",f0:iu(2400,n),dur:.035,peak:.07,attack:.002}),qt(i,e,t,{dur:.012,peak:.035,filter:{type:"highpass",f:6500,q:.7}}),.06},click(i,e,t,n=0){return qt(i,e,t,{dur:.014,peak:.2,filter:{type:"highpass",f:3500,q:.7}}),it(i,e,t,{type:"sine",f0:iu(1100,n),f1:700,dur:.075,peak:.28,attack:.002}),it(i,e,t,{type:"triangle",f0:330,dur:.05,peak:.1,attack:.002}),.12},confirm(i,e,t){return it(i,e,t,{type:"square",f0:zn.C5,dur:.1,peak:.12,filter:{type:"lowpass",f:3200}}),it(i,e,t+.07,{type:"square",f0:zn.G5,dur:.24,peak:.13,filter:{type:"lowpass",f:3600,f1:1200}}),it(i,e,t+.07,{type:"sine",f0:zn.G5*2,dur:.22,peak:.07}),it(i,e,t,{type:"sine",f0:130,f1:100,dur:.18,peak:.22,attack:.003}),qt(i,e,t+.07,{dur:.16,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),.35},back(i,e,t){return it(i,e,t,{type:"sine",f0:740,f1:420,dur:.12,peak:.24,attack:.002}),qt(i,e,t,{dur:.012,peak:.1,filter:{type:"highpass",f:3e3,q:.7}}),.16},error(i,e,t){for(const n of[0,.13])it(i,e,t+n,{type:"sawtooth",f0:165,dur:.1,peak:.2,filter:{type:"lowpass",f:800}}),it(i,e,t+n,{type:"square",f0:110,dur:.1,peak:.1});return .28},tab(i,e,t){return qt(i,e,t,{dur:.06,peak:.12,filter:{type:"bandpass",f:2500,f1:5200,q:1.5}}),it(i,e,t,{type:"sine",f0:1800,dur:.035,peak:.12,attack:.002}),.08},toggle(i,e,t,n=!0){return it(i,e,t,{type:"sine",f0:n?600:1200,f1:n?1200:560,dur:.09,peak:.22,attack:.002}),qt(i,e,t,{dur:.01,peak:.08,filter:{type:"highpass",f:4e3,q:.7}}),.12},whoosh(i,e,t){return qt(i,e,t,{kind:"pink",dur:.5,attack:.14,peak:.34,filter:{type:"bandpass",f:250,f1:4200,q:1}}),qt(i,e,t+.05,{kind:"white",dur:.35,attack:.12,peak:.07,filter:{type:"highpass",f:3e3,f1:8e3,q:.7}}),.55},intro(i,e,t){it(i,e,t,{type:"sine",f0:40,f1:110,dur:1.75+.1,peak:.26,attack:1.5}),qt(i,e,t,{kind:"pink",dur:1.75+.05,attack:1.75-.1,peak:.28,filter:{type:"bandpass",f:200,f1:8e3,q:2}});for(const r of[110,164.81,246.94,261.63,392])it(i,e,t,{type:"sawtooth",f0:r,dur:1.75+.2,peak:.05,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}}),it(i,e,t,{type:"sawtooth",f0:r*1.004,dur:1.75+.2,peak:.035,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}});const s=t+1.75;it(i,e,s,{type:"sine",f0:120,f1:34,dur:.75,peak:.55,attack:.003}),qt(i,e,s,{kind:"white",dur:1,peak:.26,attack:.002,filter:{type:"highpass",f:1800,f1:900,q:.6}});for(const[r,a]of[[440,.1],[659.25,.09],[880,.08]])it(i,e,s,{type:"sawtooth",f0:r,dur:1,peak:a,attack:.003,filter:{type:"lowpass",f:5200,f1:700,q:.9}}),it(i,e,s+.24,{type:"sawtooth",f0:r,dur:.8,peak:a*.4,attack:.003,filter:{type:"lowpass",f:4200,f1:700,q:.9}});return 1.75+1.1},countdown(i,e,t,n=3){return it(i,e,t,{type:"sine",f0:880,dur:.16,peak:.3,attack:.004}),it(i,e,t,{type:"square",f0:440,dur:.12,peak:.05,filter:{type:"lowpass",f:1500}}),.2},go(i,e,t){return it(i,e,t,{type:"square",f0:1320,dur:.5,peak:.12,filter:{type:"lowpass",f:4e3,f1:1500}}),it(i,e,t,{type:"sine",f0:660,dur:.5,peak:.28,attack:.004}),it(i,e,t,{type:"sine",f0:90,f1:45,dur:.35,peak:.35,attack:.003}),qt(i,e,t,{kind:"pink",dur:.4,attack:.05,peak:.16,filter:{type:"bandpass",f:400,f1:3800,q:1}}),.6},lap(i,e,t){return it(i,e,t,{type:"sine",f0:zn.B5,dur:.5,peak:.22,attack:.003}),it(i,e,t,{type:"sine",f0:zn.B5*2,dur:.28,peak:.07,attack:.003}),it(i,e,t+.12,{type:"sine",f0:zn.E6,dur:.62,peak:.2,attack:.003}),it(i,e,t+.12,{type:"sine",f0:zn.E6*2,dur:.35,peak:.06,attack:.003}),.8},bestLap(i,e,t){return[zn.A5,1108.73,zn.E6,zn.A6].forEach((n,s)=>{it(i,e,t+s*.075,{type:"triangle",f0:n,dur:.38,peak:.17,attack:.003}),it(i,e,t+s*.075,{type:"sine",f0:n*2,dur:.22,peak:.05,attack:.003})}),qt(i,e,t+.28,{dur:.5,attack:.05,peak:.05,filter:{type:"highpass",f:6500,q:.7}}),it(i,e,t,{type:"sine",f0:110,dur:.4,peak:.16,attack:.004}),.95},sponsor(i,e,t){for(const n of[523.25,659.25,783.99,1174.66])it(i,e,t,{type:"sawtooth",f0:n,dur:.55,peak:.05,attack:.004,filter:{type:"lowpass",f:4200,f1:1e3}});return it(i,e,t+.18,{type:"sine",f0:1568,dur:.09,peak:.16,attack:.002}),it(i,e,t+.25,{type:"sine",f0:2093,dur:.55,peak:.16,attack:.002}),qt(i,e,t+.18,{dur:.04,peak:.12,filter:{type:"highpass",f:5e3,q:.7}}),qt(i,e,t+.3,{dur:.6,attack:.08,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),it(i,e,t,{type:"sine",f0:100,f1:60,dur:.3,peak:.25,attack:.003}),1},crash(i,e,t,n=.6){n=Dt(n,0,1);const s=Na(Math.floor(n*1e3)+5);it(i,e,t,{type:"sine",f0:95,f1:28,dur:.25+.3*n,peak:.2+.4*n,attack:.002}),qt(i,e,t,{kind:"white",dur:.12+.3*n,peak:.15+.25*n,attack:.002,filter:{type:"bandpass",f:900,f1:250,q:.8}}),qt(i,e,t,{kind:"pink",dur:.06+.2*n,peak:.1+.18*n,attack:.001,filter:{type:"lowpass",f:3e3,q:.6}});for(const r of[420,613])it(i,e,t,{type:"square",f0:r,dur:.2+.4*n,peak:.03+.07*n,attack:.002,filter:{type:"lowpass",f:1800,f1:500}});if(n>.4)for(let r=0;r<3+Math.floor(n*5);r++)it(i,e,t+.05+s()*.35,{type:"sine",f0:2e3+s()*3e3,dur:.05,peak:.04*n,attack:.001});return .3+.7*n}},su={cockpit:{lp:3200,wind:.65,squeal:.7,rumble:1.25,crowd:.35},chase:{lp:12e3,wind:1,squeal:1,rumble:1,crowd:.8},broadcast:{lp:12e3,wind:.5,squeal:1,rumble:.7,crowd:1.1}};function d_(i,e){const t=i.createGain();t.gain.value=1;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.5,t.connect(n),n.connect(e);const s=[],r=(S,w=0)=>{const E=i.createBufferSource();return E.buffer=Ua(i,S),E.loop=!0,E.start(0,w),s.push(E),E},a=(S,w,E)=>{const L=i.createBiquadFilter();return L.type=S,L.frequency.value=w,L.Q.value=E,L},o=(S=0)=>{const w=i.createGain();return w.gain.value=S,w},c={g:o(),f:a("bandpass",500,.6)};r("pink",.3).connect(c.f),c.f.connect(c.g),c.g.connect(t);const l={g:o(),f:a("bandpass",1500,9),o:i.createOscillator(),og:o(.25)};l.o.type="sawtooth",l.o.frequency.value=900,s.push(l.o),l.o.start(),r("white",1.1).connect(l.f),l.o.connect(l.og),l.og.connect(l.f),l.f.connect(l.g),l.g.connect(t);const h={g:o(),f:a("lowpass",160,.7),am:o(.55),lfo:i.createOscillator(),lg:o(.45)};h.lfo.type="sine",h.lfo.frequency.value=20,s.push(h.lfo),h.lfo.start(),h.lfo.connect(h.lg),h.lg.connect(h.am.gain),r("brown",.7).connect(h.f),h.f.connect(h.am),h.am.connect(h.g),h.g.connect(t);const f={g:o(),f:a("lowpass",700,.6),am:o(.7),lfo:i.createOscillator(),lg:o(.3)};f.lfo.type="triangle",f.lfo.frequency.value=9,s.push(f.lfo),f.lfo.start(),f.lfo.connect(f.lg),f.lg.connect(f.am.gain),r("pink",1.9).connect(f.f),f.f.connect(f.am),f.am.connect(f.g),f.g.connect(t);const d={g:o(),f:a("bandpass",900,.45),am:o(.8),lfo:i.createOscillator(),lg:o(.2)};d.lfo.type="sine",d.lfo.frequency.value=.17,s.push(d.lfo),d.lfo.start(),d.lfo.connect(d.lg),d.lg.connect(d.am.gain),r("pink",2.6).connect(d.f),d.f.connect(d.am),d.am.connect(d.g),d.g.connect(t);const m={g:o(),f:a("bandpass",520,.7)};r("pink",3.1).connect(m.f),m.f.connect(m.g),m.g.connect(t);const v={g:o(),f:a("bandpass",1400,3),o:i.createOscillator(),og:o(.12),am:o(.6),lfo:i.createOscillator(),lg:o(.4)};v.o.type="sawtooth",v.o.frequency.value=230,s.push(v.o),v.o.start(),v.lfo.type="square",v.lfo.frequency.value=11,s.push(v.lfo),v.lfo.start(),v.lfo.connect(v.lg),v.lg.connect(v.am.gain),r("white",.2).connect(v.f),v.o.connect(v.og),v.og.connect(v.f),v.f.connect(v.am),v.am.connect(v.g),v.g.connect(t);let g=su.cockpit,p={speed:0,slip01:0,offTrack:!1,drafting01:0,crowd01:0,wall01:0},y=!1;const x=.06,_={update(S={},w){p={...p,...S};const E=w??i.currentTime,L=y?0:1,M=Math.max(0,p.speed||0),b=Dt(M/90,0,1),C=Dt(p.slip01||0,0,1),k=Math.pow(Dt((C-.3)/.7,0,1),1.4);c.f.frequency.setTargetAtTime(350+900*b,E,x),c.g.gain.setTargetAtTime(L*.34*b*b*g.wind,E,x),l.o.frequency.setTargetAtTime(640+520*C+M*2.2,E,.03),l.f.frequency.setTargetAtTime(1100+900*C+M*4,E,.03),l.g.gain.setTargetAtTime(L*.85*k*g.squeal*(.4+.6*b),E,.03);const D=(p.offTrack,0);h.lfo.frequency.setTargetAtTime(6+M*.5,E,x),h.g.gain.setTargetAtTime(L*(p.offTrack?.5:.1)*b*g.rumble+D,E,x),f.lfo.frequency.setTargetAtTime(5+M*.3,E,x),f.g.gain.setTargetAtTime(L*(p.offTrack?.55:0)*(.2+.8*b),E,x),d.g.gain.setTargetAtTime(L*.24*Dt(p.crowd01||0,0,1)*g.crowd,E,.25),m.f.frequency.setTargetAtTime(350+700*b,E,x),m.g.gain.setTargetAtTime(L*.14*Dt(p.drafting01||0,0,1)*(.3+.7*b),E,.12),v.g.gain.setTargetAtTime(L*.55*Dt(p.wall01||0,0,1),E,.02)},setPerspective(S){g=su[S]||g,n.frequency.setTargetAtTime(g.lp,i.currentTime,.1),_.update({})},setMute(S){y=!!S,_.update({})},dispose(){for(const S of s)try{S.stop()}catch{}try{t.disconnect()}catch{}}};return _}const f_=`
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
`,ru=343,Pd={e87:7770,e05:9250,e15:9250},p_={e87:.79,e05:1,e15:.66},Ld=i=>i==="e87"||i==="e15"||i==="e05"?i:"e05",ko=new WeakMap;function m_(i){if(ko.has(i))return ko.get(i);let e;if(!i.audioWorklet||typeof AudioWorkletNode>"u")e=Promise.resolve(!1);else try{const t=URL.createObjectURL(new Blob([f_],{type:"application/javascript"}));e=i.audioWorklet.addModule(t).then(()=>{try{URL.revokeObjectURL(t)}catch{}return!0}).catch(()=>!1)}catch{e=Promise.resolve(!1)}return ko.set(i,e),e}const Qs=(i,e,t)=>{t==null?i.value=e:i.setValueAtTime(e,t)};function g_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=new AudioWorkletNode(i,"rtta-v8",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{seed:e,gain:t,rpm0:n,era:s}}),a=o=>r.parameters.get(o);return{kind:"worklet",out:r,setState(o,c){c.rpm!=null&&Qs(a("rpm"),c.rpm,o),c.throttle01!=null&&Qs(a("throttle"),Dt(c.throttle01,0,1),o),c.load01!=null&&Qs(a("load"),Dt(c.load01,0,1),o),c.pitch!=null&&Qs(a("pitch"),Dt(c.pitch,.5,2),o),c.rpmLimit!=null&&Qs(a("limit"),c.rpmLimit,o)},setDetail(o){a("detail").value=o},setActive(o){a("active").value=o?1:0},dispose(){try{r.disconnect(),r.port.close()}catch{}}}}function v_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=Na(e||1),a=Pd[s]||9250,o=t*.55*(s==="e87"?1.45:1),c=s==="e15"?.65:s==="e87"?1.1:1,l=p_[s]||1,u=i.createGain();u.gain.value=o;const h=i.createGain();h.gain.value=.5;const f=i.createWaveShaper(),d=new Float32Array(1024);for(let W=0;W<1024;W++){const B=W/511.5-1;d[W]=Math.tanh(2.2*B)}f.curve=d;const m=i.createBiquadFilter();m.type="lowpass",m.Q.value=.8,m.frequency.value=1200;const v=i.createGain();v.gain.value=1;const g=i.createBiquadFilter();g.type="lowshelf",g.frequency.value=170,g.gain.value=7,h.connect(g),g.connect(m),m.connect(f),f.connect(v),v.connect(u);const p=30,y=new Float32Array(p+1),x=new Float32Array(p+1);for(let W=1;W<=p;W++)x[W]=1/Math.pow(W,1.1)*(W%2===0?.9:1);const _=i.createPeriodicWave(y,x),S=(W,B)=>{const j=i.createOscillator();j.setPeriodicWave(_),j.detune.value=W;const J=i.createGain();return J.gain.value=B,j.connect(J),J.connect(h),j.start(),j},w=S(0,.7),E=S(r()*12-6,.45),L=i.createOscillator();L.type="triangle";const M=i.createGain();M.gain.value=.3,L.connect(M),M.connect(h),L.start();const b=i.createBufferSource();b.buffer=Ua(i,"pink"),b.loop=!0;const C=i.createBiquadFilter();C.type="bandpass",C.Q.value=1,C.frequency.value=500;const k=i.createGain();k.gain.value=0,b.connect(C),C.connect(k),k.connect(h),b.start();const D=i.createOscillator();D.type="square",D.frequency.value=20;const V=i.createGain();V.gain.value=0,D.connect(V),V.connect(v.gain),D.start();let N=0;const O=(W,B,j)=>{const J=Math.max(1,W/15*B*l);for(const[pe,be]of[[w,1],[E,1],[L,.125]]){const Ee=J*be;j==null?pe.frequency.setTargetAtTime(Ee,i.currentTime,.02):pe.frequency.setValueAtTime(Ee,j)}};return O(n||900,1,0),{kind:"native",out:u,setState(W,B){const j=W??i.currentTime,J=B.rpm??900,pe=Dt(B.throttle01??0,0,1),be=Math.max(B.load01??0,pe*.85);O(J,B.pitch??1,W);const Ee=Dt(J/(s==="e87"?7560:9e3),0,1);m.frequency.setTargetAtTime((700+3300*Math.pow(be,.8)+300*Ee)*c,j,.03),h.gain.setTargetAtTime(.25+.5*be,j,.03),C.frequency.setTargetAtTime(250+J*.22,j,.03),k.gain.setTargetAtTime(Math.pow(pe,1.6)*(.04+.4*Ee),j,.03);const He=B.rpmLimit??a,Ue=J>=He*.985;v.gain.setTargetAtTime(Ue?.55:1,j,.02),V.gain.setTargetAtTime(Ue?.45:0,j,.02),pe<.1&&J>2800&&j-N>.08&&Math.random()<.12*(J-2800)/6200&&(N=j,qt(i,u,j,{dur:.05,peak:.25,filter:{type:"bandpass",f:500+Math.random()*1100,q:1.4}}))},setDetail(){},setActive(W){u.gain.setTargetAtTime(W?o:0,i.currentTime,.03)},dispose(){try{w.stop(),E.stop(),L.stop(),b.stop(),D.stop(),u.disconnect()}catch{}}}}function __(i,e={},t=!1){const n={seed:e.seed??1,gain:e.gain??.5,rpm0:e.rpm0??900,era:Ld(e.era)};return t&&!e.forceNative?g_(i,n):v_(i,n)}const Do=["idle","low","mid","high"],au={idle:1e3,low:3e3,mid:6e3,high:8500,offLow:3e3,offHigh:7e3};function y_(i,e,t={}){const n={...au,...t},s=i.createGain();s.gain.value=1;const r={};for(const o of Object.keys(e)){if(!(o in au)||!e[o])continue;const c=i.createBufferSource();c.buffer=e[o],c.loop=!0;const l=i.createGain();l.gain.value=0,c.connect(l),l.connect(s),c.start(0,Math.random()*Math.max(.01,e[o].duration*.5)),r[o]={src:c,g:l}}const a=(o,c,l)=>{const u=c.map((d,m)=>({n:d,ref:l[m]})).filter(d=>r[d.n]).sort((d,m)=>d.ref-m.ref),h={};if(!u.length)return h;for(const d of u)h[d.n]=0;if(o<=u[0].ref)return h[u[0].n]=1,h;const f=u[u.length-1];if(o>=f.ref)return h[f.n]=1,h;for(let d=0;d<u.length-1;d++){const m=u[d],v=u[d+1];if(o>=m.ref&&o<v.ref){const g=(o-m.ref)/(v.ref-m.ref);h[m.n]=Math.sqrt(1-g),h[v.n]=Math.sqrt(g);break}}return h};return{out:s,voices:r,has:()=>Object.keys(r).length>0,setState(o,{rpm:c,throttle01:l,pitch:u=1}){const h=o??i.currentTime,f=Dt(l??0,0,1),d=Dt((f-.05)/.35,0,1),m=c*u,v=Do.map(y=>n[y]),g=a(c,Do,v),p=a(c,["offLow","offHigh"],[n.offLow,n.offHigh]);for(const y of Object.keys(r)){const x=Do.includes(y),_=(x?g[y]:p[y])??0,S=n[y];r[y].g.gain.setTargetAtTime(_*(x?d:1-d),h,.04),r[y].src.playbackRate.setTargetAtTime(Dt(m/S,.4,2.4),h,.03)}},dispose(){for(const o of Object.keys(r))try{r[o].src.stop()}catch{}try{s.disconnect()}catch{}}}}const Oc={cockpit:{hp:38,shelf:3,pkF:90,pkQ:4,pkG:6,lp:1900,gain:.95,aiCut:3500},chase:{hp:35,shelf:0,pkF:120,pkQ:1,pkG:0,lp:7e3,gain:1,aiCut:14e3},broadcast:{hp:90,shelf:-2,pkF:1800,pkQ:.8,pkG:3,lp:9e3,gain:.8,aiCut:14e3}};function x_(i,e,t){const n=i.listener;if(!n)return;const s=t||{x:0,y:0,z:-1};if(n.positionX){const r=i.currentTime;n.positionX.setTargetAtTime(e.x,r,.02),n.positionY.setTargetAtTime(e.y,r,.02),n.positionZ.setTargetAtTime(e.z,r,.02),n.forwardX.setTargetAtTime(s.x,r,.03),n.forwardY.setTargetAtTime(s.y,r,.03),n.forwardZ.setTargetAtTime(s.z,r,.03),n.upX.value=0,n.upY.value=1,n.upZ.value=0}else try{n.setPosition(e.x,e.y,e.z),n.setOrientation(s.x,s.y,s.z,0,1,0)}catch{}}function M_(i,e,t){if(i.positionX)i.positionX.setTargetAtTime(e.x,t,.03),i.positionY.setTargetAtTime(e.y,t,.03),i.positionZ.setTargetAtTime(e.z,t,.03);else try{i.setPosition(e.x,e.y,e.z)}catch{}}class b_{constructor(e){this.sys=e,this.voices=new Set,this.listener={pos:null,vel:null,fwd:null},this.mode="cockpit",this.recBuffers=null,this.recRefs={},this.paused=!1,this.MAX_FULL=6,this.MAX_LITE=10}create(e={}){const t=new S_(this,e);return this.voices.add(t),this.sys.ctx()&&this.sys.bus()&&t.build(),t}onReady(){for(const e of this.voices)e.build();this._applyRec()}setPerspective(e){if(Oc[e]){this.mode=e;for(const t of this.voices)t.applyPerspective()}}setListener(e,t,n){this.listener={pos:e,vel:t,fwd:n};const s=this.sys.ctx();s&&e&&x_(s,e,n);const r=[];for(const a of this.voices)!a.player&&a.built&&r.push(a);r.sort((a,o)=>a.lastDist-o.lastDist),r.forEach((a,o)=>a.setTier(this.paused?2:o<this.MAX_FULL?0:o<this.MAX_FULL+this.MAX_LITE&&a.lastDist<400?1:2))}setPaused(e){this.paused=e;for(const t of this.voices)t.setPausedState(e)}async loadRecordings(e,t={}){const n=this.sys.ctx(),s={loaded:[],failed:[]};if(!n)return s.failed=Object.keys(e||{}),s;const r={};return await Promise.all(Object.keys(e||{}).map(async a=>{try{const o=e[a];if(!o)return;if(typeof AudioBuffer<"u"&&o instanceof AudioBuffer){r[a]=o,s.loaded.push(a);return}const c=await fetch(o);if(!c.ok)throw new Error("http "+c.status);const l=await c.arrayBuffer();r[a]=await new Promise((u,h)=>{const f=n.decodeAudioData(l,u,h);f&&f.catch&&f.catch(h)}),s.loaded.push(a)}catch{s.failed.push(a)}})),s.loaded.length&&(this.recBuffers=r,this.recRefs=t,this._applyRec()),s}_applyRec(){for(const e of this.voices)e.player&&e.attachRecordings()}}class S_{constructor(e,t){this.mgr=e,this.player=!!t.player,this.era=Ld(t.era),this.seed=t.seed??Math.floor(Math.random()*1e6),this.opts=t,this.built=!1,this.disposed=!1,this.last=null,this.lastDist=1e9,this.tier=0,this.rec=null,this.recSent=!1,this.nodes=null,this.core=null}build(){if(this.built||this.disposed)return;const e=this.mgr.sys.ctx(),t=this.mgr.sys.bus();if(!e||!t)return;this.ctx=e;const n=__(e,{seed:this.seed,gain:this.player?.7:.56,rpm0:this.last?.rpm??900,era:this.era},this.mgr.sys.workletOk());this.core=n;const s=e.createGain();s.gain.value=1,n.out.connect(s);const r=e.createGain();s.connect(r);const a={procGain:s,sum:r};let o=r;if(this.player){const l=e.createBiquadFilter();l.type="highpass";const u=e.createBiquadFilter();u.type="lowshelf",u.frequency.value=120;const h=e.createBiquadFilter();h.type="peaking";const f=e.createBiquadFilter();f.type="lowpass",f.Q.value=.5;const d=e.createGain();o.connect(l),l.connect(u),u.connect(h),h.connect(f),f.connect(d),o=d,Object.assign(a,{hp:l,shelf:u,pk:h,lp:f,pg:d})}else{const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=.5,l.frequency.value=12e3,o.connect(l),o=l,a.dlp=l}const c=e.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=this.player?1:6,c.maxDistance=600,c.rolloffFactor=this.player?0:1.3,o.connect(c),c.connect(t),a.pan=c,this.nodes=a,this.built=!0,this.applyPerspective(!0),this.attachRecordings(),this.last&&this.update(this.last)}applyPerspective(e){if(!this.built)return;const t=this.nodes,n=Oc[this.mgr.mode],s=this.ctx.currentTime,r=e?.001:.08;this.player&&(t.hp.frequency.setTargetAtTime(n.hp,s,r),t.shelf.gain.setTargetAtTime(n.shelf,s,r),t.pk.frequency.setTargetAtTime(n.pkF,s,r),t.pk.Q.setTargetAtTime(n.pkQ,s,r),t.pk.gain.setTargetAtTime(n.pkG,s,r),t.lp.frequency.setTargetAtTime(n.lp,s,r),t.pg.gain.setTargetAtTime(n.gain,s,r))}attachRecordings(){if(!this.built||!this.player||this.rec||!this.mgr.recBuffers)return;const e=this.ctx;if(this.rec=y_(e,this.mgr.recBuffers,this.mgr.recRefs),!this.rec.has()){this.rec=null;return}const t=e.createGain();t.gain.value=.9,this.rec.out.connect(t),t.connect(this.nodes.sum),this.nodes.recGain=t,this.nodes.procGain.gain.setTargetAtTime(.5,e.currentTime,.3)}setTier(e){!this.built||e===this.tier||(this.tier=e,this.core.setActive(e<2&&!this.mgr.paused),this.core.setDetail(e===0?1:0))}setPausedState(e){this.built&&this.core.setActive(!e&&(this.player||this.tier<2))}update(e){if(this.disposed||(this.last=e,!this.built&&(this.mgr.sys.ctx()&&this.mgr.sys.bus()&&this.build(),!this.built))||this.mgr.paused)return;const n=this.ctx.currentTime,s=this.mgr.listener;let r=1,a=0;if(e.pos&&s.pos){const c=e.pos.x-s.pos.x,l=(e.pos.y||0)-(s.pos.y||0),u=e.pos.z-s.pos.z;if(a=Math.sqrt(c*c+l*l+u*u),!this.player&&a>.5){const h=c/a,f=l/a,d=u/a,m=s.vel?s.vel.x*h+(s.vel.y||0)*f+s.vel.z*d:0,v=e.vel?e.vel.x*h+(e.vel.y||0)*f+e.vel.z*d:0;r=Dt((ru+m)/(ru+v),.85,1.18)}M_(this.nodes.pan,e.pos,n)}if(this.lastDist=a,!this.player){const c=Oc[this.mgr.mode].aiCut;this.nodes.dlp.frequency.setTargetAtTime(Dt(14e3/(1+a/50),1500,c),n,.1)}if(this.tier===2&&!this.player)return;const o={rpm:e.rpm??900,throttle01:e.throttle01??0,load01:e.load01??0,pitch:r,rpmLimit:this.opts.rpmLimit??Pd[this.era]};this.core.setState(null,o),this.rec&&this.rec.setState(null,o)}dispose(){if(this.disposed=!0,this.mgr.voices.delete(this),!!this.built)try{this.rec&&this.rec.dispose(),this.core.dispose();for(const e of Object.keys(this.nodes))try{this.nodes[e].disconnect()}catch{}}catch{}}}const Id={menu:{bpm:124,bars:32,target:.115,desc:"confident, building, bass-led"},garage:{bpm:88,bars:24,target:.085,desc:"calm, warm, sparse"},race:{bpm:128,bars:32,target:.06,desc:"low-intensity bed under the engines"},results:{bpm:96,bars:16,target:.09,desc:"short resolve"}},ou=3.2;class w_{constructor(e,t,n,s=0){this.ctx=e,this.step=60/t/4,this.loopLen=n*16*this.step,this.bars=n,this.origin=s*16*this.step;const r=(g,p)=>{const y=e.createGain();return y.gain.value=g,p&&y.connect(p),y},a=r(.9);a.connect(e.destination),this.master=a;const o=e.createConvolver();o.buffer=h_(e,1.8,3,11);const c=r(1,o),l=r(.42,a);o.connect(l);const u=e.createDelay(1.5);u.delayTime.value=this.step*3;const h=r(.36),f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=3200;const d=r(1,u);u.connect(f),f.connect(h),h.connect(u);const m=r(.34,a);f.connect(m),f.connect(c);const v=(g,p=0,y=0)=>{const x=r(g,a);return p&&x.connect(r(p,c)),y&&x.connect(r(y,d)),x};this.bus={kick:v(.95),snare:v(.6,.18),hat:v(.5),bass:v(.85),pad:v(.55,.5),arp:v(.55,.28,.5),lead:v(.6,.32,.42),fx:v(.6,.2)},this.vib=e.createOscillator(),this.vib.frequency.value=5.3,this.vibG=r(9),this.vib.connect(this.vibG),this.vib.start(0)}t(e,t=0){return(e*16+t)*this.step-this.origin}noise(e,t,n,s,r,a,o=1,c="bandpass",l="white",u=.002){const h=this.ctx,f=h.createGain();f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(n,e+u),f.gain.exponentialRampToValueAtTime(1e-4,e+t),f.gain.setValueAtTime(0,e+t+.01),f.connect(s);const d=h.createBiquadFilter();d.type=c,d.Q.value=o,a?(d.frequency.setValueAtTime(r,e),d.frequency.exponentialRampToValueAtTime(a,e+t)):d.frequency.value=r,d.connect(f);const m=h.createBufferSource();m.buffer=Ua(h,l),m.loop=!0,m.connect(d),m.start(e,e*7.31%3.5),m.stop(e+t+.03)}note(e,t,n,s,r,a={}){const o=this.ctx,c=Math.min(a.attack??.005,n),l=a.release??.12,u=o.createGain();if(u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(r,t+c),u.gain.setValueAtTime(r,t+Math.max(c,n)),u.gain.exponentialRampToValueAtTime(1e-4,t+n+l),u.gain.setValueAtTime(0,t+n+l+.01),a.pan){const f=o.createStereoPanner();f.pan.value=a.pan,u.connect(f),f.connect(e)}else u.connect(e);let h=u;a.filter&&(h=o.createBiquadFilter(),h.type="lowpass",h.Q.value=a.filter[2]??.8,a.filter[1]==null||a.filter[1]===a.filter[0]?h.frequency.value=a.filter[0]:(h.frequency.setValueAtTime(a.filter[0],t),h.frequency.exponentialRampToValueAtTime(Math.max(40,a.filter[1]),t+Math.max(.02,n*(a.sweep??.6)))),h.connect(u));for(const f of a.detune||[0]){const d=o.createOscillator();d.type=a.type||"sawtooth",d.frequency.value=s,d.detune.value=f,d.connect(h),a.vib&&this.vibG.connect(d.detune),d.start(t),d.stop(t+n+l+.05)}}kick(e,t=1){const n=this.ctx,s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.9*t,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.34),s.gain.setValueAtTime(0,e+.36),s.connect(this.bus.kick);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(155,e),r.frequency.exponentialRampToValueAtTime(46,e+.1),r.connect(s),r.start(e),r.stop(e+.4),this.noise(e,.012,.16*t,this.bus.kick,2500,0,.7,"highpass")}snare(e,t=1){this.noise(e,.2,.5*t,this.bus.snare,1900,1100,.8,"bandpass"),this.noise(e,.08,.2*t,this.bus.snare,5200,0,.7,"highpass"),this.note(this.bus.snare,e,.02,195,.28*t,{type:"triangle",release:.09,attack:.002})}hat(e,t=1,n=!1){this.noise(e,n?.2:.04,.17*t,this.bus.hat,7800,0,.7,"highpass","white",.001)}crash(e,t=1){this.noise(e,1.6,.16*t,this.bus.fx,4200,0,.6,"highpass","white",.003)}riser(e,t,n=1){this.noise(e,t,.22*n,this.bus.fx,250,9e3,2,"bandpass","pink",t-.05)}bass(e,t,n,s=1,r=1){const a=Gi(t),o=n*this.step;this.note(this.bus.bass,e,o,a,.34*s,{type:"sawtooth",attack:.004,release:.05,filter:[Math.min(2400,1400*r),260*r+60,1.4],sweep:.5}),this.note(this.bus.bass,e,o,a,.3*s,{type:"sine",attack:.004,release:.05})}pad(e,t,n,s=1,r=1500,a=.5){const o=this.ctx,c=.8,l=.07*s,u=o.createBiquadFilter();u.type="lowpass",u.Q.value=.7,u.frequency.setValueAtTime(r*.5,e),u.frequency.exponentialRampToValueAtTime(r,e+n*.8),u.connect(this.bus.pad);const h=o.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(l,e+Math.min(a,n)),h.gain.setValueAtTime(l,e+n),h.gain.exponentialRampToValueAtTime(1e-4,e+n+c),h.gain.setValueAtTime(0,e+n+c+.01),h.connect(u);const f=o.createStereoPanner();f.pan.value=-.85,f.connect(h);const d=o.createStereoPanner();d.pan.value=.85,d.connect(h),t.forEach((m,v)=>{for(const[g,p]of[[-7,f],[6,d]]){const y=o.createOscillator();y.type="sawtooth",y.frequency.value=Gi(m),y.detune.value=g+v%2*2,y.connect(p),y.start(e),y.stop(e+n+c+.05)}})}pluck(e,t,n,s=1,r=0,a=3500){const o=Gi(t),c=n*this.step;this.note(this.bus.arp,e,c*.45,o,.13*s,{type:"square",attack:.002,release:.05,pan:r,filter:[a]}),this.note(this.bus.arp,e,c,o,.1*s,{type:"sine",attack:.002,release:.1,pan:r})}bell(e,t,n,s=1){const r=Gi(t),a=n*this.step;this.note(this.bus.lead,e,a,r,.13*s,{type:"triangle",attack:.003,release:.5}),this.note(this.bus.lead,e,a*.6,r*2.01,.04*s,{type:"sine",attack:.002,release:.3})}lead(e,t,n,s=1){this.note(this.bus.lead,e,n*this.step,Gi(t),.12*s,{type:"sawtooth",detune:[-9,8],attack:.01,release:.14,vib:!0,filter:[3400,1500,.9],sweep:.9})}}const Ki=(i,e)=>e.map(t=>i+t);async function T_(i,e,t,n){const s=[{r:43,iv:[0,3,7]},{r:39,iv:[0,4,7]},{r:46,iv:[0,4,7]},{r:41,iv:[0,4,7]}],r=[[0,0],[2,0],[3,12],[6,0],[8,0],[10,7],[11,12],[14,0]],a=[0,2,1,3,2,1,3,2,0,2,1,3,2,3,1,2],o=[[[0,74,3],[3,77,2],[6,79,2],[8,77,3],[12,74,4]],[[0,75,3],[3,79,2],[6,82,2],[8,79,3],[12,75,4]],[[0,77,2],[2,74,2],[4,70,4],[8,74,3],[12,77,4]],[[0,72,3],[3,77,2],[6,81,2],[8,79,4],[12,77,2],[14,74,2]]];for(let c=t;c<n;c++){const l=Math.floor(c/8),u=s[c%4],h=i.t(c),f=Ki(u.r,u.iv),d=l===3?c>=30?[]:[0,8]:[0,4,8,12];for(const v of d)i.kick(i.t(c,v),l===0?.8:.95);c%8===0&&i.crash(h,l===0?.5:.7);for(const v of[2,6,10,14])i.hat(i.t(c,v),l===0?.5:.7,v===14&&l>=2);if(l>=1)for(const v of[0,4,8,12])(l!==3||c>=30)&&i.hat(i.t(c,v+1),.3+.1*(v%8===0));if(l>=1&&l!==3&&(i.snare(i.t(c,4),.85),i.snare(i.t(c,12),.9)),l===3&&c<30&&i.snare(i.t(c,12),.7),c===31)for(let v=8;v<16;v++)i.snare(i.t(c,v),.35+.08*(v-8));if(l===0)for(let v=0;v<16;v+=2)i.bass(i.t(c,v),u.r,1.5,.8,.55);else if(l===3)i.bass(h,u.r,15,.8,.7);else for(const[v,g]of r)i.bass(i.t(c,v),u.r+g,1.2,.95+(g?.05:0),1);if(i.pad(h,Ki(u.r+24,u.iv),16*i.step,l===0?.8:1,l===0?900:l===3?2400:1500,.4),l>=1)for(let v=0;v<16;v++){const g=a[v],p=f[g%3]+36+(g===3?12:0);i.pluck(i.t(c,v),p,1.1,(l===3?.5:.8)*(v%4===0?1:.75),(v%4-1.5)*.25,3600)}if(l===2||l===1&&c>=12)for(const[v,g,p]of o[c%4])i.lead(i.t(c,v),g,p,l===2?1:.5);c===30&&i.riser(i.t(30),32*i.step,1),c%4===3&&await e()}}async function E_(i,e,t,n){const s=[{r:50,iv:[0,3,7,10,14]},{r:46,iv:[0,4,7,11]},{r:53,iv:[0,4,7,11]},{r:48,iv:[0,4,7,14]}],r=[0,2,4,2,1,3,2,1];for(let a=t;a<n;a++){const o=Math.floor(a/8),c=s[a%4],l=i.t(a),u=Ki(c.r,c.iv);if(i.pad(l,Ki(c.r+12,c.iv).slice(0,4),16*i.step+.4,1,800,1.2),i.note(i.bus.bass,l,15.5*i.step,Gi(c.r-12),.3,{type:"sine",attack:.05,release:.4}),o>=1)for(let h=0;h<8;h++){const f=r[h]%u.length;i.pluck(i.t(a,h*2),u[f]+24,3,(h%2?.55:.8)*(o===1?.8:1),(h%4-1.5)*.3,2400)}o>=2&&(i.kick(l,.5),i.kick(i.t(a,10),.35),i.hat(i.t(a,4),.35),i.hat(i.t(a,12),.35),i.snare(i.t(a,8),.28)),a%4===3&&await e()}}async function A_(i,e,t,n){const s=[{r:45,iv:[0,3,7]},{r:41,iv:[0,4,7]},{r:48,iv:[0,4,7]},{r:43,iv:[0,4,7]}];for(let r=t;r<n;r++){const a=Math.floor(r/8),o=s[r%4],c=i.t(r),l=Ki(o.r,o.iv);i.kick(c,.55),i.kick(i.t(r,8),.45),r>=4&&(i.hat(i.t(r,4),.35),i.hat(i.t(r,12),.35)),a>=2&&(i.hat(i.t(r,14),.25),i.snare(i.t(r,12),.25));for(let u=0;u<16;u+=2)i.bass(i.t(r,u),o.r+(u===6&&r%2?12:0),1.4,.55+.1*(u===0),.45);i.pad(c,Ki(o.r+12,o.iv),16*i.step,.7,700,.6),r%2===1&&a>=1&&[0,3,6,8,11,14].forEach((u,h)=>i.pluck(i.t(r,u),l[h%3]+24,1.2,.38,(h%3-1)*.3,2200)),r%8===7&&i.riser(i.t(r,8),8*i.step,.35),r%4===3&&await e()}}async function R_(i,e,t,n){const s=[{r:53,iv:[0,4,7,11]},{r:50,iv:[0,3,7,10]},{r:46,iv:[0,4,7,14]},{r:48,iv:[0,4,7]}],r=[[[0,72,3],[3,76,3],[8,77,6]],[[0,74,3],[3,77,3],[8,81,6]],[[0,74,3],[3,77,3],[8,82,6]],[[0,76,3],[3,79,3],[8,84,8]]];for(let a=t;a<n;a++){const o=s[a%4],c=i.t(a);if(i.pad(c,Ki(o.r+12,o.iv).slice(0,4),16*i.step+.3,1,1700,.35),i.note(i.bus.bass,c,15*i.step,Gi(o.r-12),.32,{type:"sine",attack:.02,release:.3}),a>=2&&a<14)for(const[l,u,h]of r[a%4])i.bell(i.t(a,l),u,h,a<4?.8:1);if(a>=4&&a<14&&(i.kick(c,.55),i.kick(i.t(a,8),.4)),a>=8&&a<14){i.snare(i.t(a,12),.35);for(const l of[4,12])i.hat(i.t(a,l),.35)}a===0&&i.crash(c,.3),a%4===3&&await e()}}const C_={menu:T_,garage:E_,race:A_,results:R_},cu=4;function P_(i,e,t){const r=Math.exp(-1/(.006*t)),a=Math.exp(-1/(.18*t)),o=i.length;let c=0;for(let l=0;l<2;l++)for(let u=0;u<o;u++){const h=Math.max(Math.abs(i[u]),Math.abs(e[u]));if(c=h>c?r*c+(1-r)*h:a*c+(1-a)*h,l===1){const f=c>.16?Math.pow(c/.16,-.7142857142857143):1;i[u]*=f,e[u]*=f}}}async function L_(i,{ctxFactory:e,sampleRate:t=32e3,yieldFn:n=()=>Ta(0),concurrency:s=2}={}){const r=Id[i];if(!r)throw new Error("unknown track "+i);const a=e||((w,E,L)=>new OfflineAudioContext(w,E,L)),c=16*(60/r.bpm/4),l=t,u=Math.round(r.bars*c*l),h=Math.round(ou*l),f=u+h,d=[new Float32Array(f),new Float32Array(f)],m=[];for(let w=0;w<r.bars;w+=cu)m.push([w,Math.min(r.bars,w+cu)]);let v=0;const g=async()=>{for(;v<m.length;){const[w,E]=m[v++],L=Math.ceil(((E-w)*c+ou)*l),M=a(2,L,l),b=new w_(M,r.bpm,r.bars,w);await C_[i](b,n,w,E),await n();const C=await M.startRendering(),k=Math.round(w*c*l);for(let D=0;D<2;D++){const V=C.getChannelData(D),N=d[D],O=Math.min(V.length,f-k);for(let W=0;W<O;W++)N[k+W]+=V[W]}}};await Promise.all(Array.from({length:Math.max(1,s)},g));const p=[new Float32Array(u),new Float32Array(u)];for(let w=0;w<2;w++){const E=p[w],L=d[w];for(let M=0;M<u;M++)E[M]=L[M];for(let M=0;M<h&&M<u;M++)E[M]+=L[u+M]}P_(p[0],p[1],l);let y=0,x=0;for(let w=0;w<2;w++)for(let E=0;E<u;E++){const L=p[w][E];y+=L*L,Math.abs(L)>x&&(x=Math.abs(L))}const _=Math.sqrt(y/(2*u));let S=_>0?r.target/_:1;x*S>.92&&(S=.92/x);for(let w=0;w<2;w++)for(let E=0;E<u;E++)p[w][E]*=S;return{name:i,sampleRate:l,length:u,channels:p,rmsBefore:_,gain:S,seconds:u/l}}const Rn=typeof window<"u"?window:null,Ks=Rn&&(Rn.AudioContext||Rn.webkitAudioContext),lu=Rn&&(Rn.OfflineAudioContext||Rn.webkitOfflineAudioContext),se={ctx:null,ready:!1,unlocked:!1,inited:!1,workletOk:!1,unlockP:null,gestureArmed:!1,buses:null,ambient:null,paused:!1,perspective:"cockpit",hiddenSuspended:!1,listeners:new Set,vol:{master:.9,music:.5,sfx:.9,engine:.9,ambient:.7},musicBuf:{},musicJob:{},musicWanted:null,musicFade:1.5,musicCur:null,lastHover:0},gs=new b_({ctx:()=>se.ready?se.ctx:null,bus:()=>se.ready?se.buses.engine:null,workletOk:()=>se.workletOk});function kd(){for(const i of se.listeners)try{i(Ze.state)}catch{}}function I_(){const i=se.ctx,e=r=>{const a=i.createGain();return a.gain.value=r,a},t=e(se.vol.master),n=i.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=20,n.ratio.value=3,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(i.destination);const s={master:t,music:e(se.vol.music),sfx:e(se.vol.sfx),engine:e(se.vol.engine),ambient:e(se.vol.ambient),musicDuck:e(1)};s.music.connect(s.musicDuck),s.musicDuck.connect(t),s.sfx.connect(t),s.engine.connect(t),s.ambient.connect(t),se.buses=s}function Dd(){if(!se.buses)return;const i=se.ctx.currentTime;for(const e of["master","music","sfx","engine","ambient"])se.buses[e].gain.setTargetAtTime(Dt(se.vol[e],0,1),i,.05)}function k_(){try{const i=se.ctx.createBuffer(1,1,22050),e=se.ctx.createBufferSource();e.buffer=i,e.connect(se.ctx.destination),e.start(0)}catch{}}function Bc(){if(se.gestureArmed||!Rn)return;se.gestureArmed=!0;const i=["pointerdown","touchend","keydown","click"],e=()=>{Ze.unlock().then(t=>{t&&(i.forEach(n=>Rn.removeEventListener(n,e,!0)),se.gestureArmed=!1)})};i.forEach(t=>Rn.addEventListener(t,e,!0))}function D_(){const i=se.ctx;i.onstatechange=()=>{se.unlocked=i.state==="running",kd(),!se.unlocked&&!se.hiddenSuspended&&Bc()},typeof document<"u"&&document.addEventListener("visibilitychange",()=>{se.ctx&&(document.hidden?se.ctx.state==="running"&&(se.hiddenSuspended=!0,se.ctx.suspend().catch(()=>{})):se.hiddenSuspended&&(se.hiddenSuspended=!1,se.ctx.resume().catch(()=>Bc())))})}async function N_(){if(!se.inited){se.inited=!0,se.workletOk=await Promise.race([m_(se.ctx),Ta(2500).then(()=>!1)]),se.ready=!0,Dd();try{se.ambient=d_(se.ctx,se.buses.ambient),se.ambient.setPerspective(se.perspective),se.ambient.update({})}catch{se.ambient=null}gs.onReady(),se.musicWanted&&Ud(se.musicWanted,se.musicFade),(async()=>{for(const i of["menu","garage","race","results"])await Nd(i),await Ta(250)})()}}function Nd(i){return se.musicBuf[i]?Promise.resolve(se.musicBuf[i]):se.musicJob[i]?se.musicJob[i]:!Id[i]||!lu||!se.ctx?Promise.resolve(null):(se.musicJob[i]=L_(i,{ctxFactory:(e,t,n)=>new lu(e,t,n),sampleRate:32e3}).then(e=>{const t=se.ctx.createBuffer(2,e.length,e.sampleRate);return t.copyToChannel(e.channels[0],0),t.copyToChannel(e.channels[1],1),se.musicBuf[i]=t,t}).catch(()=>(se.musicJob[i]=null,null)),se.musicJob[i])}async function Ud(i,e){if(!se.ready||se.musicCur&&se.musicCur.name===i)return;const t=await Nd(i);if(!t||se.musicWanted!==i||se.musicCur&&se.musicCur.name===i)return;const n=se.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=t,r.loop=!0;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+Math.max(.05,e)),r.connect(a),a.connect(se.buses.music),r.start(s);const o=se.musicCur;se.musicCur={name:i,src:r,g:a},o&&Fd(o,e)}function Fd(i,e){const t=se.ctx.currentTime;try{i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(i.g.gain.value,t),i.g.gain.linearRampToValueAtTime(0,t+Math.max(.05,e)),i.src.stop(t+Math.max(.05,e)+.1)}catch{}}function tn(i,...e){if(!se.ready||se.ctx.state!=="running")return 0;try{return u_[i](se.ctx,se.buses.sfx,se.ctx.currentTime+.005,...e)||0}catch{return 0}}const hu=()=>Math.random()*2-1,Ze={get supported(){return!!Ks},get state(){return Ks?se.ctx?se.ctx.state==="running"&&se.ready?"running":se.ctx.state==="running"?"starting":se.ctx.state:"locked":"unsupported"},get ctx(){return se.ctx},onStateChange(i){return se.listeners.add(i),()=>se.listeners.delete(i)},unlock(){if(!Ks)return Promise.resolve(!1);if(se.unlockP)return se.unlockP;if(!se.ctx){try{se.ctx=new Ks({latencyHint:"interactive"})}catch{try{se.ctx=new Ks}catch{return Promise.resolve(!1)}}try{Rn.navigator&&Rn.navigator.audioSession&&(Rn.navigator.audioSession.type="playback")}catch{}I_(),D_()}k_();let i;try{i=se.ctx.state==="running"?Promise.resolve():se.ctx.resume()}catch{i=Promise.resolve()}return se.unlockP=(async()=>{try{await Promise.race([i,Ta(1200)])}catch{}return se.unlocked=se.ctx.state==="running",se.unlocked?await N_():Bc(),kd(),se.unlocked})().finally(()=>{se.unlockP=null}),se.unlockP},setVolumes(i={}){for(const e of Object.keys(se.vol))typeof i[e]=="number"&&(se.vol[e]=Dt(i[e],0,1));Dd()},setPerspective(i){se.perspective=i,gs.setPerspective(i),se.ambient&&se.ambient.setPerspective(i)},setListener(i,e,t){gs.setListener(i,e,t)},setPaused(i){se.paused=!!i,gs.setPaused(se.paused),se.ambient&&se.ambient.setMute(se.paused),se.buses&&se.buses.musicDuck.gain.setTargetAtTime(se.paused?.4:1,se.ctx.currentTime,.12)},ui:{hover(){const i=performance.now();i-se.lastHover<45||(se.lastHover=i,tn("hover",hu()))},click(){tn("click",hu())},confirm(){tn("confirm")},back(){tn("back")},error(){tn("error")},tab(){tn("tab")},toggle(i=!0){tn("toggle",!!i)},whoosh(){tn("whoosh")},intro(){return tn("intro")},countdown(i=3){tn("countdown",i)},go(){tn("go")},lap(){tn("lap")},bestLap(){tn("bestLap")},sponsor(){tn("sponsor")},crash(i=.6){tn("crash",Dt(i,0,1))}},music:{play(i,{fade:e=1.5}={}){se.musicWanted=i,se.musicFade=e,se.ready&&Ud(i,e)},stop(i=1){se.musicWanted=null,se.musicCur&&se.ctx&&(Fd(se.musicCur,i),se.musicCur=null)},get current(){return se.musicCur?se.musicCur.name:null},isReady(i){return!!se.musicBuf[i]}},engine:{create(i){return gs.create(i)},loadRecordings(i,e){return gs.loadRecordings(i,e)}},ambient:{update(i){se.ambient&&se.ambient.update(i)}}},Vn=3e3,uu={grass:[.2,.34,.09,.3,0,1.6,9.5,.4,1],dirt:[.28,.2,.11,.26,0,1.5,9.5,.5,1],dust:[.62,.55,.42,.9,1.7,1.9,-.3,1.1,.5],smoke:[.86,.86,.88,.8,1.6,1.5,-.6,1.2,.42],blacksmoke:[.1,.1,.1,.7,1.4,2.2,-1.2,.9,.55],spark:[1,.72,.28,.07,0,.55,8,.2,1],debris:[.12,.12,.13,.14,0,1.6,9.5,.3,1]},U_=`
attribute vec3 aColor; attribute vec2 aSA; varying vec3 vC; varying float vA; uniform float uScale;
void main(){ vC = aColor; vA = aSA.y; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = clamp(aSA.x * uScale / max(0.5, -mv.z), 0.0, 220.0); gl_Position = projectionMatrix * mv; }`,F_=`
varying vec3 vC; varying float vA; uniform vec3 uLight;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d) * 4.0; if (r > 1.0) discard; float a = vA * (1.0 - r) * (1.0 - r * 0.5); gl_FragColor = vec4(vC * uLight, a); }`;class O_{constructor(e){this.pos=new Float32Array(Vn*3),this.col=new Float32Array(Vn*3),this.sa=new Float32Array(Vn*2),this.vel=new Float32Array(Vn*3),this.age=new Float32Array(Vn).fill(99),this.life=new Float32Array(Vn).fill(1),this.kind=new Uint8Array(Vn),this.size0=new Float32Array(Vn),this.head=0,this.names=Object.keys(uu),this.kidx={},this.names.forEach((s,r)=>{this.kidx[s]=r}),this.kdata=this.names.map(s=>uu[s]);const t=new Nt;t.setAttribute("position",new mt(this.pos,3).setUsage(Ha)),t.setAttribute("aColor",new mt(this.col,3).setUsage(Ha)),t.setAttribute("aSA",new mt(this.sa,2).setUsage(Ha)),this.uniforms={uScale:{value:700},uLight:{value:new F(1,1,1)}};const n=new jn({vertexShader:U_,fragmentShader:F_,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0});this.points=new od(t,n),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=t,this.scene=e,this.live=0}setView(e,t){const n=t.domElement.height/(t.getPixelRatio,1);this.uniforms.uScale.value=n*.5/Math.tan(e.fov*Math.PI/360)}setLight(e){this.uniforms.uLight.value.setScalar(e)}emit(e,t,n,s,r,a,o,c=1,l=1){const u=this.kidx[e],h=this.kdata[u];for(let f=0;f<c;f++){const d=this.head;this.head=(this.head+1)%Vn;const m=d*3,v=Math.random(),g=Math.random(),p=Math.random();this.pos[m]=t+(v-.5)*.4*l,this.pos[m+1]=n+(g-.5)*.2,this.pos[m+2]=s+(p-.5)*.4*l,this.vel[m]=r+(Math.random()-.5)*3*l,this.vel[m+1]=a+(Math.random()-.3)*2.5*l,this.vel[m+2]=o+(Math.random()-.5)*3*l;const y=.8+Math.random()*.4;this.col[m]=h[0]*y,this.col[m+1]=h[1]*y,this.col[m+2]=h[2]*y,this.kind[d]=u,this.age[d]=0,this.life[d]=h[5]*(.7+Math.random()*.6),this.size0[d]=h[3]*(.7+Math.random()*.7),this.sa[d*2]=this.size0[d],this.sa[d*2+1]=h[8]}}update(e){let t=0;for(let n=0;n<Vn;n++){let s=this.age[n];if(s>=this.life[n]){this.sa[n*2+1]!==0&&(this.sa[n*2+1]=0,this.sa[n*2]=0);continue}t++,s+=e,this.age[n]=s;const r=this.kdata[this.kind[n]],a=n*3,o=s/this.life[n],c=Math.exp(-r[7]*e);this.vel[a]*=c,this.vel[a+2]*=c,this.vel[a+1]=this.vel[a+1]*(r[7]>.9?c:1)-r[6]*e,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.pos[a+1]<.04&&r[6]>1&&(this.pos[a+1]=.04,this.vel[a+1]*=-.25,this.vel[a]*=.6,this.vel[a+2]*=.6),this.sa[n*2]=this.size0[n]+r[4]*s,this.sa[n*2+1]=r[8]*(o<.12?o/.12:1)*(1-o)*(r[4]>0,1)}this.live=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSA.needsUpdate=!0}clear(){this.age.fill(99),this.sa.fill(0)}dispose(){this.scene.remove(this.points),this.geo.dispose(),this.points.material.dispose()}}const B_="modulepreload",z_=function(i,e){return new URL(i,e).href},du={},V_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(u=>{if(u=z_(u,n),u in du)return;du[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const v=a[m];if(v.href===u&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":B_,h||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},H_=["hello","lobby","prof","start","rdy","go","st","ai","ev","ping","pong","end"],G_="road-to-the-americas.fdev9155-debug",W_=()=>Math.random().toString(36).slice(2,10);function Od(){const i={};return{on(e,t){return(i[e]||=[]).push(t),()=>{i[e]=(i[e]||[]).filter(n=>n!==t)}},emit(e,...t){for(const n of(i[e]||[]).slice())try{n(...t)}catch(s){console.error("[net]",e,s)}}}}async function q_(i){const{joinRoom:e}=await V_(async()=>{const{joinRoom:o}=await import("./dist-CIn7zB77.js");return{joinRoom:o}},[],import.meta.url),t=e({appId:G_,identity:"none"},i),n=Od(),s={},r=new Set,a=await t.getSelf();for(const o of H_){const c=t.makeAction(o);s[o]=c,c.onMessage((l,u)=>n.emit("msg:"+o,l,u.peerId))}return t.onPeerJoin(({peerId:o})=>{r.add(o),n.emit("join",o)}),t.onPeerLeave(({peerId:o})=>{r.delete(o),n.emit("leave",o)}),t.onError(o=>{n.emit("error",o)}),{kind:"trystero",selfId:a.peerId,peers:()=>[...r],send(o,c,l){const u=s[o];if(u)try{const h=u.send(c,l?{target:l}:{});h&&h.catch&&h.catch(()=>{})}catch{}},on(o,c){return n.on("msg:"+o,c)},onJoin:o=>n.on("join",o),onLeave:o=>n.on("leave",o),onError:o=>n.on("error",o),async leave(){try{await t.leave()}catch{}}}}function X_(i){const e="L"+W_(),t=new BroadcastChannel("rtta-room-"+i),n=Od(),s=new Set,r=+(new URLSearchParams(location.search).get("lag")||0)/1e3,a=+(new URLSearchParams(location.search).get("loss")||0),o=c=>{r>0?setTimeout(c,r*1e3*(.7+Math.random()*.6)):c()};return t.onmessage=c=>{const l=c.data;if(!(!l||l.from===e||l.to&&l.to!==e))if(l.sys==="join")s.add(l.from),t.postMessage({sys:"here",from:e,to:l.from}),n.emit("join",l.from);else if(l.sys==="here")s.has(l.from)||(s.add(l.from),n.emit("join",l.from));else if(l.sys==="leave")s.delete(l.from)&&n.emit("leave",l.from);else{if(a&&l.type==="st"&&Math.random()<a)return;o(()=>n.emit("msg:"+l.type,l.data,l.from))}},setTimeout(()=>t.postMessage({sys:"join",from:e}),30),Promise.resolve({kind:"local",selfId:e,peers:()=>[...s],send(c,l,u){t.postMessage({type:c,data:l,from:e,to:u||null})},on(c,l){return n.on("msg:"+c,l)},onJoin:c=>n.on("join",c),onLeave:c=>n.on("leave",c),onError:c=>n.on("error",c),async leave(){try{t.postMessage({sys:"leave",from:e}),t.close()}catch{}}})}const Q_=()=>new URLSearchParams(location.search).get("net")==="local";function K_(i){return Q_()?X_(i):q_(i)}const fu="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Y_(){const i=new Uint32Array(6);return(crypto||window.crypto).getRandomValues(i),[...i].map(e=>fu[e%fu.length]).join("")}function Ms(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function Bd(i){return/^[A-Z0-9]{6}$/.test(Ms(i))&&Ms(i).length===6}const Ea=8,zc=24,pu={track:"americas",laps:5,ai:"pro",aiCount:6,weather:"clear",time:"day",cars:"same"},j_=14e3,$_=25e3;class Z_{constructor(){this.ls={},this.game=null,this.reset()}reset(){this.state="idle",this.code="",this.isHost=!1,this.selfId="",this.hostId="",this.players=[],this.settings={...pu},this.error="",this.rtt={},this.net=null,this.offs=[],this.timers=[],this.ready=new Set,this.goSent=!1,this.inRace=!1,this.raceMsg=null}bind(e){this.game=e}on(e,t){return(this.ls[e]||=[]).push(t),()=>{this.ls[e]=(this.ls[e]||[]).filter(n=>n!==t)}}emit(e,...t){for(const n of(this.ls[e]||[]).slice())try{n(...t)}catch(s){console.error("[session]",s)}}get active(){return this.state==="lobby"}get me(){return this.players.find(e=>e.id===this.selfId)||null}get phase(){return this.players.some(e=>e.state!=="lobby")?"race":"lobby"}get link(){const e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",this.code),new URLSearchParams(location.search).get("net")==="local"&&e.searchParams.set("net","local"),e.toString()}profile(){const e=this.game,t=e.career.state;let n="";try{n=localStorage.getItem("rtta.name")||""}catch{}if(!n){n="Driver "+(100+Math.floor(Math.random()*900));try{localStorage.setItem("rtta.name",n)}catch{}}return{name:n.slice(0,16),carId:e.carIdForSeries(e.career.series.id),livery:t.livery}}setName(e){e=String(e||"").replace(/[^\w .'-]/g,"").trim().slice(0,16)||"Driver";try{localStorage.setItem("rtta.name",e)}catch{}return this.active&&this.pushProfile(),e}pushProfile(e={}){const t=this.me,n={...this.profile(),ready:t?t.ready:!1,state:t?t.state:"lobby",...e};this.isHost?(this.upsert(this.selfId,n),this.broadcastLobby()):this.net.send("hello",{...n,host:!1},this.hostId||void 0),t&&Object.assign(t,n),this.emit("change")}setReady(e){this.pushProfile({ready:!!e})}async host(){await this.leave(),this.state="connecting",this.isHost=!0,this.code=Y_(),this.emit("change");try{await this.open()}catch(e){return this.fail(e)}return this.state="lobby",this.hostId=this.selfId,this.players=[],this.upsert(this.selfId,{...this.profile(),ready:!0,state:"lobby"}),this.emit("change"),!0}async join(e){if(e=Ms(e),await this.leave(),!Bd(e))return this.state="error",this.error="Enter the 6-character room code.",this.emit("change"),!1;this.state="connecting",this.isHost=!1,this.code=e,this.emit("change");try{await this.open()}catch(t){return this.fail(t)}return this.joinTimer=setTimeout(()=>{this.state==="connecting"&&this.fail(new Error("No room found with that code. Check the code, and make sure the host is still on the Online screen."))},j_),this.timers.push(this.joinTimer),!0}fail(e){const t=e&&e.message||String(e);return this.cleanup(),this.state="error",this.error=t,this.emit("change"),!1}async open(){const e=this.net=await K_(this.code);this.selfId=e.selfId;const t=this.offs;t.push(e.onJoin(n=>this.onJoin(n)),e.onLeave(n=>this.onLeave(n)),e.onError(n=>{n&&n.code==="peer-connect-failed"&&this.state!=="lobby"&&console.warn("[net]",n.message)})),t.push(e.on("hello",(n,s)=>this.onHello(n,s)),e.on("lobby",(n,s)=>this.onLobby(n,s)),e.on("start",(n,s)=>this.onStart(n,s)),e.on("rdy",(n,s)=>this.onRdy(s)),e.on("go",(n,s)=>this.onGo(s))),t.push(e.on("ping",(n,s)=>e.send("pong",n,s)),e.on("pong",(n,s)=>{const r=performance.now()-n;this.rtt[s]=this.rtt[s]?this.rtt[s]*.7+r*.3:r})),this.timers.push(setInterval(()=>{if(this.net)for(const n of this.net.peers())this.net.send("ping",performance.now(),n)},1500))}cleanup(){for(const t of this.offs)try{t()}catch{}for(const t of this.timers)clearTimeout(t),clearInterval(t);const e=this.net;this.offs=[],this.timers=[],this.net=null,e&&e.leave()}async leave(){if(this.state==="idle")return;const e=this.state;this.cleanup(),this.reset(),e!=="idle"&&this.emit("change")}onJoin(e){this.net&&this.net.send("hello",{...this.profile(),ready:this.isHost?!0:this.me?this.me.ready:!1,state:this.me?this.me.state:"lobby",host:this.isHost},e)}onLeave(e){if(this.state==="lobby"){if(e===this.hostId&&!this.isHost){this.cleanup(),this.state="error",this.error="The host left the room.",this.emit("change"),this.emit("closed",this.error);return}this.emit("peerLeft",e),this.isHost&&(this.players=this.players.filter(t=>t.id!==e),delete this.rtt[e],this.broadcastLobby(),this.checkGo()),this.emit("change")}}upsert(e,t){let n=this.players.find(r=>r.id===e);n||(n={id:e,name:"Driver",carId:"e05",livery:null,ready:!1,state:"lobby"},this.players.push(n)),Object.assign(n,{name:String(t.name||n.name).slice(0,16),carId:t.carId||n.carId,livery:t.livery||n.livery,ready:!!t.ready,state:t.state||n.state});const s=this.players.filter(r=>r.id!==e&&r.name.toLowerCase()===n.name.toLowerCase());return s.length&&(n.name=n.name.slice(0,13)+" "+(s.length+1)),n}onHello(e,t){if(!e||this.state==="error")return;if(e.host&&!this.isHost){this.hostId=t,this.state;return}if(!this.isHost)return;if(!this.players.some(s=>s.id===t)&&(this.players.length>=Ea||this.phase==="race")){this.net.send("lobby",{deny:this.phase==="race"?"A race is already in progress in this room.":"This room is full."},t);return}this.upsert(t,e),this.broadcastLobby(),this.emit("change")}lobbyMsg(){return{host:this.selfId,code:this.code,settings:this.settings,players:this.players,max:Ea}}broadcastLobby(){this.net&&this.isHost&&this.net.send("lobby",this.lobbyMsg()),this.emit("change")}onLobby(e,t){if(e){if(e.deny){this.state==="connecting"&&this.fail(new Error(e.deny));return}this.isHost||this.hostId&&t!==this.hostId||e.host!==t||(this.hostId=t,this.settings={...pu,...e.settings},this.players=e.players||[],this.state==="connecting"&&(this.state="lobby",clearTimeout(this.joinTimer)),this.emit("change"))}}setSettings(e){this.isHost&&(this.settings={...this.settings,...e},this.broadcastLobby())}canStart(){return this.isHost&&this.state==="lobby"&&this.players.every(e=>e.state==="lobby")}startRace(){if(!this.canStart()||!this.game)return!1;const t={...this.game.mpRoster(this.players,this.settings),cfg:{...this.settings},hostId:this.selfId,humans:this.players.map(n=>n.id)};for(const n of this.players)n.state="race";return this.ready=new Set,this.goSent=!1,this.inRace=!0,this.raceMsg=t,this.broadcastLobby(),this.net.send("start",t),this.timers.push(setTimeout(()=>this.sendGo(),$_)),this.emit("start",t),!0}onStart(e,t){if(this.isHost||t!==this.hostId||this.state!=="lobby")return;this.inRace=!0,this.raceMsg=e;const n=this.me;n&&(n.state="race"),this.emit("start",e)}markReady(){this.isHost?(this.ready.add(this.selfId),this.checkGo()):this.net&&this.net.send("rdy",1,this.hostId)}onRdy(e){this.isHost&&(this.ready.add(e),this.checkGo())}checkGo(){if(!this.isHost||!this.inRace||this.goSent)return;this.players.map(t=>t.id).every(t=>this.ready.has(t))&&this.sendGo()}sendGo(){this.goSent||!this.isHost||!this.net||(this.goSent=!0,this.net.send("go",1),this.emit("go",0))}onGo(e){e===this.hostId&&this.inRace&&this.emit("go",(this.rtt[e]||0)/2e3)}raceOver(){this.inRace=!1,this.raceMsg=null,this.state==="lobby"&&this.pushProfile({state:"lobby"})}oneWay(e){const t=this.rtt[e];return t?Math.min(.3,t/2e3):.03}}const Ne=new Z_,fl=["x","z","psi","vx","vy","w","gh","gp","gr","steer","rpm","throttle","brake","skid","roll","pitch","fracGrass","scrape","dirt","gear"],J_=[2,2,3,2,2,3,3,3,3,3,0,2,2,2,3,3,2,2,2,0],Aa=fl.length,ey=J_.map(i=>10**i),ty=.05,ny=.066,iy=3,sa=.12,Tn={tumble:1,done:2,hidden:4,ghost:8,retired:16},sy=new F,mu=new Mt,yt=(i,e)=>Math.round((i||0)*e)/e;function gu(i,e){const t=i.sim,n=new Array(Aa);for(let o=0;o<Aa;o++)n[o]=yt(t[fl[o]],ey[o]);const s=t.damage;n.push(yt(s.front,100),yt(s.rear,100),yt(s.left,100),yt(s.right,100),yt(i.prog,10),i.lap|0,i.finished?yt(i.finishTime,1e3):-1,i.bestLap?yt(i.bestLap,1e3):-1,i.lastLap?yt(i.lastLap,1e3):-1);let r=0;const a=t.tumble;return a&&(r|=Tn.tumble,a.done&&(r|=Tn.done)),t.hidden&&(r|=Tn.hidden),t.ghost&&(r|=Tn.ghost),i.retired&&(r|=Tn.retired),n.push(r),a&&n.push(yt(a.p.x,100),yt(a.p.y,100),yt(a.p.z,100),yt(a.q.x,1e3),yt(a.q.y,1e3),yt(a.q.z,1e3),yt(a.q.w,1e3),yt(a.v.x,100),yt(a.v.y,100),yt(a.v.z,100),yt(a.w.x,100),yt(a.w.y,100),yt(a.w.z,100),yt(a.cg,100)),n}function vu(i,e=0){const t={};for(let s=0;s<Aa;s++)t[fl[s]]=i[e+s];let n=e+Aa;return t.damage={front:i[n++],rear:i[n++],left:i[n++],right:i[n++]},t.prog=i[n++],t.lap=i[n++],t.fin=i[n++],t.best=i[n++],t.last=i[n++],t.f=i[n++],t.f&Tn.tumble&&(t.T={p:[i[n],i[n+1],i[n+2]],q:[i[n+3],i[n+4],i[n+5],i[n+6]],v:[i[n+7],i[n+8],i[n+9]],w:[i[n+10],i[n+11],i[n+12]],cg:i[n+13]}),t}class ry{constructor(){this.p=new F,this.q=new Mt,this.cg=.5,this.done=!1,this.v=new F,this.w=new F}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}}class ay{constructor(e,t){this.e=e,this.game=t,this.s=null,this.off={x:0,z:0,psi:0},this.offT=0,this.pt=new ry,this.lastRx=0,this.dentVer=0,this.wasFin=!1}push(e,t,n){e.tr=t,e.lag=n;const s=this.s;if(this.s=e,this.lastRx=t,s){const r=this.predict(s,t),a=this.predict(e,t),o=r.x+this.off.x*Math.exp(-(t-this.offT)/sa)-a.x,c=r.z+this.off.z*Math.exp(-(t-this.offT)/sa)-a.z,l=sr(r.psi+this.off.psi*Math.exp(-(t-this.offT)/sa)-a.psi);Math.hypot(o,c)>12||(s.f&Tn.tumble)!==(e.f&Tn.tumble)?this.off.x=this.off.z=this.off.psi=0:(this.off.x=o,this.off.z=c,this.off.psi=l),this.offT=t}}predict(e,t){const n=Fe(t-e.tr+e.lag,0,.4),s=e.psi+e.w*n*.5,r=Math.sin(s),a=Math.cos(s);return{x:e.x+(e.vx*r+e.vy*a)*n,z:e.z+(e.vx*a-e.vy*r)*n,psi:e.psi+e.w*n,dt:n}}apply(e){const t=this.s,n=this.e,s=n.sim;if(!t)return;if(e-this.lastRx>iy&&!n.left&&(n.left=!0),n.left){s.hidden=!0,s.ghost=!0;return}s.hidden=!!(t.f&Tn.hidden),s.ghost=!!(t.f&Tn.ghost)||s.hidden,n.retired=!!(t.f&Tn.retired);const r=this.predict(t,e),a=Math.exp(-(e-this.offT)/sa);let o=r.x+this.off.x*a,c=r.z+this.off.z*a,l=r.psi+this.off.psi*a;if(t.T){const h=this.pt,f=r.dt;if(h.cg=t.T.cg,h.done=!!(t.f&Tn.done),h.v.set(t.T.v[0],t.T.v[1],t.T.v[2]),h.w.set(t.T.w[0],t.T.w[1],t.T.w[2]),h.q.set(t.T.q[0],t.T.q[1],t.T.q[2],t.T.q[3]),h.done)h.p.set(t.T.p[0],t.T.p[1],t.T.p[2]);else{h.p.set(t.T.p[0]+t.T.v[0]*f,Math.max(0,t.T.p[1]+t.T.v[1]*f-4.9*f*f),t.T.p[2]+t.T.v[2]*f);const v=h.w.length();v>1e-4&&(mu.setFromAxisAngle(sy.copy(h.w).multiplyScalar(1/v),v*f),h.q.premultiply(mu).normalize())}s.tumble=h,o=h.p.x,c=h.p.z;const d=2*(h.q.x*h.q.z+h.q.w*h.q.y),m=1-2*(h.q.x*h.q.x+h.q.y*h.q.y);Math.hypot(d,m)>.35&&(l=Math.atan2(d,m))}else s.tumble=null;s.x=o,s.z=c,s.psi=l,s.vx=t.vx,s.vy=t.vy,s.w=t.w,s.gh=t.gh,s.gp=t.gp,s.gr=t.gr,s.steer=t.steer,s.rpm=t.rpm,s.throttle=t.throttle,s.brake=t.brake,s.skid=t.skid,s.roll=t.roll,s.pitch=t.pitch,s.fracGrass=t.fracGrass,s.fracTrack=1-t.fracGrass,s.scrape=t.scrape,s.dirt=t.dirt,s.gear=t.gear,s.nLoad=.6,s.damage=t.damage,s.px=s.x,s.pz=s.z,s.ppsi=s.psi,s.pgh=s.gh,s.pgp=s.gp,s.pgr=s.gr,n.prog=t.prog+t.vx*r.dt,n.lap=t.lap,n.bestLap=t.best>0?t.best:null,n.lastLap=t.last>0?t.last:null;const u=t.fin>=0;u&&!n.finished?(n.finished=!0,n.finishTime=t.fin,this.wasFin=!0):u||(n.finished=!1)}}class oy{constructor(e,t,n,s,r){this.game=e,this.mp=t,this.race=n,this.isHost=t.isHost,this.selfSlot=r,this.puppets={},this.bySlot={},this.bySender={},this.offs=[],this.tSend=0,this.tAI=0,this.mine=[],this.dentSent={};for(const o of n.entries){this.bySlot[o.slot]=o;const c=s.find(l=>l.slot===o.slot);o.remote?(this.puppets[o.slot]=new ay(o,e),c&&c.human&&(this.bySender[c.nid]=o)):(o.slot===r||this.isHost&&!o.isPlayer&&o.driver)&&this.mine.push(o)}this.me=n.entries.find(o=>o.slot===r),this.ai=this.isHost?n.entries.filter(o=>o.driver&&!o.remote):[];const a=t.net;a&&this.offs.push(a.on("st",(o,c)=>{const l=this.bySender[c],u=l&&this.puppets[l.slot];u&&Array.isArray(o)&&u.push(vu(o,0),performance.now()/1e3,this.mp.oneWay(c))}),a.on("ai",(o,c)=>{if(this.isHost||c!==this.mp.hostId||!Array.isArray(o))return;const l=performance.now()/1e3,u=this.mp.oneWay(c);for(const h of o){const f=this.puppets[h[0]];f&&f.push(vu(h,1),l,u)}}),a.on("ev",(o,c)=>this.onEvent(o,c)))}stop(){for(const e of this.offs)try{e()}catch{}this.offs=[]}frame(){const e=performance.now()/1e3;for(const t in this.puppets)this.puppets[t].apply(e)}step(){const e=this.mp.net;if(!e)return;const t=performance.now()/1e3;if(this.me&&t-this.tSend>=ty&&(this.tSend=t,e.send("st",gu(this.me,this.race)),this.sendDents(this.me,t)),this.isHost&&this.ai.length&&t-this.tAI>=ny){this.tAI=t;const n=[];for(const s of this.ai)n.push([s.slot,...gu(s,this.race)]);e.send("ai",n);for(const s of this.ai)this.sendDents(s,t)}}sendDents(e,t){const n=e.sim;(n.dentVer||0)!==(this.dentSent[e.slot]||0)&&t-(e._dentT||0)>.8&&(e._dentT=t,this.dentSent[e.slot]=n.dentVer||0,this.mp.net.send("ev",{k:"dent",slot:e.slot,d:n.dents.map(s=>[yt(s.lf,100),yt(s.lt,100),yt(s.ly,100),yt(s.m,100)]),v:n.dentVer}))}announce(e,t,n){const s=this.mp.net;s&&t&&s.send("ev",{k:e,slot:t.slot,x:n})}onEvent(e,t){if(!e)return;const n=this.bySlot[e.slot];if(!n||!n.remote)return;const s=this.puppets[e.slot];e.k==="dent"&&s?(n.sim.dents=e.d.map(r=>({lf:r[0],lt:r[1],ly:r[2],m:r[3]})),n.sim.dentVer=(n.sim.dentVer||0)+1):e.k==="flip"?this.race.onEvent("flip",n,e.x,n.sim.speed):e.k==="wreck"?this.race.onEvent("wrecked",n):e.k==="out"&&(n.left=!0,n.sim.hidden=!0,this.race.onEvent("left",n))}}const cy=new F(0,1,0),ly=new F(0,0,1),hy=new F(1,0,0),_u=new F(1,1,1),No=new F,yu=new Mt,xu=new Mt,Mu=new Mt,ra=new Mt,Ys=1/120,aa=["J. Walker","M. Ortega","D. Hale","T. Brandt","R. Okafor","S. Lindgren","C. Duval","A. Reyes","B. Kowalski","L. Moreau","H. Tanaka","P. Novak","E. Castillo","G. Fischer","K. Mbeki","V. Santos","N. Ivanov","F. Dunmore","O. Haugen","Z. Marlow","W. Prescott","I. Barros","Q. Ellison","U. Nakamura","Y. Delacroix","X. Whitaker","A. Strand","R. Quill","D. Pruitt","M. Sato","L. Voss","T. Greer"],bu=[["#c8102e","#f4f4f4"],["#0b5fa5","#f2c200"],["#1c1c1c","#e0e0e0"],["#f2c200","#1c1c1c"],["#2c8a3d","#f4f4f4"],["#6a2c91","#f4c542"],["#e8661a","#1c1c1c"],["#e9e9e9","#c8102e"],["#0f7f8c","#f4f4f4"],["#8a1c1c","#d9b25c"],["#14315c","#e34a33"],["#3f4a52","#9ae37c"]],Su=["none","stripe","split","chevron","fade"],oa={quality:"medium",units:"mph",camera:0,assists:1,volumes:{master:.8,music:.55,sfx:.8,engine:.9,ambient:.7},touch:"auto"};function uy(){try{const i=JSON.parse(localStorage.getItem("rtta.settings")||"{}");return{...oa,...i,volumes:{...oa.volumes,...i.volumes||{}}}}catch{return{...oa,volumes:{...oa.volumes}}}}class dy{constructor(){this.settings=uy(),this.career=c_,this.input=l_(),this.ui=null,this.handlers={},this.mode="idle",this.paused=!1,this.race=null,this.vis=[],this.cfg=null,this.acc=0,this.shake=0,this.orbit={az:.6,el:.16,dist:7.2,auto:!0},this.garageOn=!1,this.showcase=null,this.showId=null,this.camMode=this.settings.camera|0,this.camPos=new F,this.camTgt=new F,this.camInit=!1,this.fov=62,this.t=0,this.fps=60,this.garage={enter:()=>{this.garageOn=!0,this.orbit.auto=!1,this.orbit.az=.7,this.orbit.dist=6.6,this.refreshShowcase()},exit:()=>{this.garageOn=!1,this.orbit.auto=!0,this.orbit.dist=7.4},setLivery:e=>{const t=this.career.state.livery,{slots:n,...s}=e;Object.assign(t,s),n&&(t.slots={...t.slots,...n}),this.career.save(),this.showcase&&(this.showcase.setLivery(t),this.showcase.flush())},setCar:e=>{this.career.setCar(e),this.refreshShowcase()},orbit:(e,t)=>{this.orbit.az-=e*.008,this.orbit.el=Fe(this.orbit.el+t*.005,.02,.9)},zoom:e=>{this.orbit.dist=Fe(this.orbit.dist+e,4.2,12)}},this.input.cycleCamera=()=>this.cycleCamera(),this.net=null,this.mpMenu=!1,this.pendingGo=void 0,Ne.bind(this),Ne.on("go",e=>this.mpGo(e)),Ne.on("peerLeft",e=>{const t=this.race;if(!t||!t.mp)return;const n=t.entries.find(s=>s.nid===e);n&&n.remote&&(n.left=!0,n.sim.hidden=!0,n.sim.ghost=!0,this.toast(`${n.name} left the race`,"info"))})}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,...t){for(const n of this.handlers[e]||[])try{n(...t)}catch(s){console.error(s)}}saveSettings(){try{localStorage.setItem("rtta.settings",JSON.stringify(this.settings))}catch{}try{Ze.setVolumes(this.settings.volumes)}catch{}}toast(e,t="info"){this.ui&&this.ui.toast(e,t)}async init(e,t=()=>{}){const n=document.createElement("canvas");n.id="gl",e.appendChild(n),t(.04,"Starting renderer"),this.world=new J9(n,{quality:this.settings.quality}),this.tracks={},await new Promise(a=>setTimeout(a,0)),t(.12,"Building the speedway"),await this.ensureTrack("americas",a=>t(.12+a*.3,"Building the speedway")),this.useTrack("americas"),this.world.setTime("day","clear"),this.fx=new O_(this.world.scene);const s=["e87","e05","e15"];let r=0;for(const a of s)t(.45+r++*.15,"Loading cars"),await Po(a);t(.92,"Preparing garage"),this.refreshShowcase(),this.world.render(),t(1,"Ready"),this.running=!0,this.last=performance.now(),requestAnimationFrame(a=>this.frame(a)),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.saveSettings(),this.emit("ready")}async ensureTrack(e,t){if(e=bt[e]?e:"americas",this.tracks[e])return this.tracks[e];const n=new nv(bt[e]);await new Promise(c=>setTimeout(c,0));const s=ov(n,this.world.q,t);s.visible=!1,this.world.scene.add(s);const r=n.d,a=[],o=Math.max(1,Math.floor(r.px.length/120));for(let c=0;c<r.px.length;c+=o)a.push([r.px[c],r.pz[c]]);return this.tracks[e]={track:n,root:s,minimap:a}}useTrack(e){const t=this.tracks[bt[e]?e:"americas"];if(!(!t||this.track===t.track)){for(const n in this.tracks)this.tracks[n].root.visible=this.tracks[n]===t;this.track=t.track,this.trackRoot=t.root,this.minimapPts=t.minimap,this.showcase&&this.placeShowcase()}}trackId(){return this.track?this.track.id:"americas"}placeShowcase(){const e=this.track.point(120,0,{}),t=this.track.at(120);this.showPt=e,this.place(this.showcase.group,e.x,e.y,e.z,e.heading,t)}place(e,t,n,s,r,a){const o=a.bank||0,c=a.rx||0,l=a.rz||0,u=new F(-c*Math.sin(o),Math.cos(o),-l*Math.sin(o)),h=new F(Math.sin(r),0,Math.cos(r));h.addScaledVector(u,-h.dot(u)).normalize();const f=new F().crossVectors(u,h).normalize();e.matrixAutoUpdate=!1,e.matrix.makeBasis(f,u,h),e.matrix.setPosition(t,n,s),e.matrixWorldNeedsUpdate=!0}placeSim(e,t,n=1,s=null){if(t.tumble){t.tumble.pose(No,ra),e.matrixAutoUpdate=!1,e.matrix.compose(No,ra,_u),e.matrixWorldNeedsUpdate=!0,s&&(s.x=t.x,s.z=t.z,s.psi=t.psi);return}const r=t.px===void 0?1:n,a=si(t.px===void 0?t.x:t.px,t.x,r),o=si(t.pz===void 0?t.z:t.pz,t.z,r),c=(t.ppsi===void 0?t.psi:t.ppsi)+sr(t.psi-(t.ppsi===void 0?t.psi:t.ppsi))*r,l=si(t.pgh===void 0?t.gh:t.pgh,t.gh,r),u=si(t.pgp===void 0?t.gp:t.pgp,t.gp,r),h=si(t.pgr===void 0?t.gr:t.pgr,t.gr,r);yu.setFromAxisAngle(cy,c),xu.setFromAxisAngle(ly,h),Mu.setFromAxisAngle(hy,-u),ra.copy(yu).multiply(xu).multiply(Mu),e.matrixAutoUpdate=!1,e.matrix.compose(No.set(a,l,o),ra,_u),e.matrixWorldNeedsUpdate=!0,s&&(s.x=a,s.z=o,s.psi=c)}carIdForSeries(e){const t=this.career.carChoice();return t&&on[t]?t:Kh[e]||Kh[this.career.series.id]||"e05"}refreshShowcase(){const e=this.carIdForSeries(this.career.series.id);!this.showcase||this.showId!==e?(this.showcase&&(this.world.scene.remove(this.showcase.group),this.showcase.dispose()),this.showcase=ta({car:e,atlas:this.settings.quality==="low"?"med":"high",livery:this.career.state.livery}),this.showId=e,this.world.scene.add(this.showcase.group),this.placeShowcase(),this.showcase.setLights(!1)):(this.showcase.setLivery(this.career.state.livery),this.showcase.flush()),this.showcase.group.visible=this.mode!=="race"&&this.mode!=="results"}randomLivery(e,t){const[n,s]=bu[Math.floor(e()*bu.length)];let r;do r=String(1+Math.floor(e()*98));while(t.has(r));t.add(r);const a={},o=gr.filter(c=>c.tier<=2);for(const c of["hood","roof","door","quarter","trunk","bumper"])a[c]=e()<.7?o[Math.floor(e()*o.length)].id:null;return{...rr,paint:n,accent:s,trim:"#14161a",pattern:Su[Math.floor(e()*Su.length)],finish:"gloss",number:r,numberColor:e()<.5?"#ffffff":"#111111",numberStyle:"italic",slots:a}}clearRace(){for(const e of this.vis)if(this.world.scene.remove(e.car.group),e.car.dispose(),e.voice)try{e.voice.dispose()}catch{}this.net&&(this.net.stop(),this.net=null),this.mpMenu=!1,this.vis=[],this.race=null,this.fx&&this.fx.clear(),this.ghostVis&&(this.world.scene.remove(this.ghostVis.group),this.ghostVis.dispose(),this.ghostVis=null)}async startRace(e={}){return this.launch("race",e)}async startHotLap(e={}){return this.launch("hotlap",e)}async launch(e,t){try{this.clearRace(),this.cfg={...t,kind:e},this.paused=!1,this.input.clear(),await this.ensureTrack(t.track),this.useTrack(t.track),t.track=this.track.id,this.cfg.track=t.track;const n=t.series||this.career.series.id,s=t.car&&on[t.car]?t.car:this.carIdForSeries(n);await Po(s);const r=Qh(s,jh(s)),a=e==="hotlap",o=a?1:Fe(t.field||12,2,this.world.q.maxCars),c=wa(Date.now()&65535),l=new Set([String(this.career.state.livery.number)]),u=[],h=this.career.state.livery,f=new Io(0,"You",h.number,h,!0,r,s);u.push(f);for(let m=1;m<o;m++){const v=this.randomLivery(c,l),g=new Io(m,aa[(m-1)%aa.length],v.number,v,!1,r,s);g.driver=new Uc(this.track,t.ai||"pro",m+1,(c()-.5)*6),u.push(g)}this.race=new Jh(this.track,u,{laps:a?999:t.laps||3,mode:a?"hotlap":"race",onEvent:(m,...v)=>this.onRaceEvent(m,...v)}),this.world.setTime(t.time||"day",t.weather||"clear"),a?this.race.rollingStart(42,-80):this.race.gridUp(Math.min(o-1,Math.floor(o*.55)));const d=o<=16?"med":"low";for(const m of u){const v=ta({car:s,atlas:m.isPlayer?this.settings.quality==="low"?"med":"high":d,livery:m.livery});this.world.scene.add(v.group),this.vis.push({e:m,car:v,spin:0,voice:null,roll:0,pitch:0})}try{const m=f.gridPos||1,v=u.filter(g=>!g.isPlayer).sort((g,p)=>Math.abs((g.gridPos||0)-m)-Math.abs((p.gridPos||0)-m)).slice(0,3);for(const g of this.vis)(g.e.isPlayer||v.includes(g.e))&&(g.voice=Ze.engine.create({player:g.e.isPlayer,kind:"v8",era:g.e.carId||s,seed:g.e.id+3}));Ze.setPerspective(this.camMode===1?"cockpit":"chase"),Ze.music.play("race",{fade:1.5})}catch(m){console.warn("audio",m)}this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=a?this.loadGhost():null,this.ghostVis=null,this.ghostHint=void 0,a&&t.ghost&&(this.ghostVis=this.makeGhostCar(s)),this.showcase&&(this.showcase.group.visible=!1),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1}catch(n){console.error(n),this.toast("Could not start: "+(n&&n.message||n),"warn")}}mpRoster(e,t){const n=wa((Date.now()^24301)&16777215),s=e.find(c=>c.id===Ne.selfId)||e[0],r=new Set,a=[];for(const c of e){let l={...rr,...c.livery||{}};if(r.has(String(l.number))){let u;do u=String(1+Math.floor(n()*98));while(r.has(u));l={...l,number:u}}r.add(String(l.number)),a.push({nid:c.id,name:c.name,carId:t.cars==="own"&&on[c.carId]?c.carId:s.carId,livery:l,human:!0})}const o=Fe(t.aiCount|0,0,Math.max(0,zc-e.length));for(let c=0;c<o;c++){const l=this.randomLivery(n,r);a.push({nid:"ai"+c,name:aa[c%aa.length],carId:s.carId,livery:l,human:!1,skill:(n()-.5)*6})}for(let c=a.length-1;c>0;c--){const l=Math.floor(n()*(c+1));[a[c],a[l]]=[a[l],a[c]]}return a.forEach((c,l)=>{c.slot=l}),{roster:a,seed:Math.floor(n()*1e9)}}async launchMP(e){try{this.clearRace();const{roster:t,cfg:n,hostId:s}=e;this.cfg={kind:"race",mp:!0,track:n.track,laps:n.laps,ai:n.ai,weather:n.weather,time:n.time},this.paused=!1,this.input.clear(),await this.ensureTrack(n.track),this.useTrack(n.track);const r=[...new Set(t.map(h=>h.carId))];await Promise.all(r.map(h=>Po(h)));const a={};for(const h of r)a[h]=Qh(h,jh(h));const o=Ne.selfId===s,c=[];for(const h of t.slice().sort((f,d)=>f.slot-d.slot)){const f=h.nid===Ne.selfId,d=new Io(h.slot,f?"You":h.name,h.livery.number,h.livery,f,a[h.carId],h.carId);d.slot=h.slot,d.nid=h.nid,f||(h.human||!o?d.remote=!0:d.driver=new Uc(this.track,n.ai||"pro",h.slot+1,h.skill||0)),c.push(d)}const l=t.find(h=>h.nid===Ne.selfId);if(!l)throw new Error("You are not in this race");this.race=new Jh(this.track,c,{laps:n.laps||5,mode:"race",mp:!0,hold:!0,onEvent:(h,...f)=>this.onRaceEvent(h,...f)}),this.world.setTime(n.time||"day",n.weather||"clear"),this.race.gridUp(0,c);const u=c.length<=16?"med":"low";for(const h of c){const f=ta({car:h.carId,atlas:h.isPlayer?this.settings.quality==="low"?"med":"high":u,livery:h.livery});this.world.scene.add(f.group),f.group.visible=!0,this.vis.push({e:h,car:f,spin:0,voice:null,roll:0,pitch:0})}try{const f=this.race.player.gridPos||1,d=c.filter(m=>!m.isPlayer).sort((m,v)=>Math.abs((m.gridPos||0)-f)-Math.abs((v.gridPos||0)-f)).slice(0,3);for(const m of this.vis)(m.e.isPlayer||d.includes(m.e))&&(m.voice=Ze.engine.create({player:m.e.isPlayer,kind:"v8",era:m.e.carId,seed:m.e.id+3}));Ze.setPerspective(this.camMode===1?"cockpit":"chase"),Ze.music.play("race",{fade:1.5})}catch(h){console.warn("audio",h)}if(this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=null,this.ghostVis=null,this.ghostHint=void 0,this.showcase&&(this.showcase.group.visible=!1),this.net=new oy(this,Ne,this.race,t,l.slot),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1,Ne.markReady(),this.pendingGo!==void 0){const h=this.pendingGo;this.pendingGo=void 0,this.mpGo(h)}}catch(t){console.error(t),this.toast("Could not start the online race: "+(t&&t.message||t),"warn");try{Ne.raceOver()}catch{}this.ui&&this.ui.show("online")}}mpGo(e){const t=this.race;if(!t||!t.mp){this.pendingGo=e;return}t.holdGrid=!1,t.countdown=Math.max(1.2,4.2-(e||0))}leaveMP(){try{this.net&&this.net.me&&!(this.race&&this.race.player&&this.race.player.finished)&&this.net.announce("out",this.net.me)}catch{}this.net&&(this.net.stop(),this.net=null),this.pendingGo=void 0,Ne.raceOver()}onRaceEvent(e,t,n,s){const r=this.race&&this.race.player;this.net&&t&&!t.remote&&t.slot!==void 0&&(e==="flip"?this.net.announce("flip",t,n):e==="wrecked"&&this.net.announce("wreck",t));try{if(e==="left"){this.toast(`${t.name} left the race`,"info");return}e==="count"?Ze.ui.countdown(t):e==="go"?(Ze.ui.go(),this.toast("Green flag","good")):e==="lap"&&t===r?(Ze.ui.lap(),this.emit("lapComplete",t.lastLap),this.race.mode==="hotlap"&&this.hotLapCrossed(t)):e==="bestlap"&&t===r?(Ze.ui.bestLap(),this.toast("Best lap","good"),this.race.mode==="hotlap"&&t.bestLap&&this.career.noteBest(this.trackId(),t.bestLap)):e==="crash"&&(t===r||n===r)?(Ze.ui.crash(Fe(s||.4,0,1)),this.shake=Math.max(this.shake,Fe(s||.4,0,1))):e==="wall"&&t===r?(Ze.ui.crash(.5),this.shake=Math.max(this.shake,.5)):e==="flip"?t===r?(this.toast(n==="lift"?"Airborne!":"You're rolling!","warn"),Ze.ui.crash(1),this.shake=Math.max(this.shake,1)):this.nearPlayer(t,90)&&Ze.ui.crash(.7):e==="tumbleHit"?this.tumbleHit(t,n):e==="wrecked"?t===r?this.toast("Wrecked. Recovering to the track...","warn"):this.nearPlayer(t,200)&&this.t-(this._wt||-9)>3&&(this._wt=this.t,this.toast(`#${t.number} ${t.name} is out`,"info")):e==="recovered"&&t===r?(this.toast("Back on track","good"),this.camInit=!1):e==="finish"&&t===r?(this.flag="checker",this.emit("flag","checker")):e==="done"&&this.finishRace()}catch(a){console.warn(a)}}nearPlayer(e,t){const n=this.race&&this.race.player;return!!n&&Math.hypot(e.sim.x-n.sim.x,e.sim.z-n.sim.z)<t}tumbleHit(e,t){const n=this.fx,s=this.race.player;if(!(e===s||this.nearPlayer(e,90)))return;const a=e.sim,o=Fe(t.hit,0,1);if(n){const c=a.wvx*.35,l=a.wvz*.35;if(t.soft){const u=3+Math.floor(o*14);for(let h=0;h<u;h++)n.emit(Math.random()<.6?"grass":"dirt",t.x,.2,t.z,c,3+Math.random()*6*(.4+o),l,1,1.4);n.emit("dust",t.x,.3,t.z,c*.3,1,l*.3,1+Math.floor(o*2),1.5)}else{const u=2+Math.floor(o*16);for(let h=0;h<u;h++)n.emit("spark",t.x,Math.max(.1,t.y),t.z,c,1+Math.random()*3,l,1,1.8);o>.35&&n.emit("debris",t.x,Math.max(.2,t.y),t.z,c,3+Math.random()*4,l,2,1.5),o>.2&&n.emit("smoke",t.x,Math.max(.1,t.y),t.z,c*.2,.8,l*.2,1,1)}}(e===s||this.nearPlayer(e,50))&&(o>.25&&this.t-(this._tt||0)>.18&&(this._tt=this.t,Ze.ui.crash(Fe(o*(e===s?1:.6),.1,1))),e===s&&(this.shake=Math.max(this.shake,o*.8)))}finishRace(){if(this.finishing)return;this.finishing=!0;const e=this.race,t=e.player,n=this.cfg.kind==="hotlap",s=(o,c)=>({pos:c+1,name:o.isPlayer?"You":o.name,me:o.isPlayer,gap:c===0?"":o.finished&&e.sorted[0].finished?`+${Math.max(0,o.finishTime-e.sorted[0].finishTime).toFixed(1)}s`:`+${Math.max(1,Math.round((e.sorted[0].prog-o.prog)/e.track.length))} lap`}),r=e.sorted.slice(0,10).map(s);t.pos>10&&r.push(s(t,t.pos-1));let a={mode:n?"hotlap":"race",pos:t.pos,field:e.entries.length,laps:this.cfg.laps||e.laps,bestLap:t.bestLap,standings:r};!n&&this.cfg.series&&!this.cfg.mp&&(a.career=this.career.recordResult({series:this.cfg.series,pos:t.pos,field:e.entries.length,laps:e.laps,bestLap:t.bestLap,points:0,track:this.trackId()})),a.track=this.trackId(),this.cfg.mp&&(a.mp=!0),this.emit("raceFinished",a),this.endRace(),this.mode="results";try{Ze.music.play("results",{fade:1})}catch{}this.ui&&this.ui.show("results",a)}endRace(){for(const e of this.vis)if(e.voice){try{e.voice.dispose()}catch{}e.voice=null}}afterStep(){const e=this.race;if(e.mode==="hotlap"&&this.recOK&&e.t-this.recLast>=.05){this.recLast=e.t;const t=e.player.sim;this.rec.push(+t.x.toFixed(2),+t.z.toFixed(2),+t.psi.toFixed(3))}}ghostKey(){const e=this.trackId();return e==="americas"?"rtta.ghost.v1":"rtta.ghost.v1."+e}loadGhost(){try{const e=JSON.parse(localStorage.getItem(this.ghostKey())||"null");return e&&e.pts&&e.pts.length>60?e:null}catch{return null}}hotLapCrossed(e){const t=e.lastLap;if(this.recOK&&t&&this.rec.length>60&&(!this.ghostData||t<this.ghostData.lap)){this.ghostData={lap:+t.toFixed(3),pts:this.rec.slice()};try{localStorage.setItem(this.ghostKey(),JSON.stringify(this.ghostData))}catch{}}this.rec=[],this.recOK=!0,this.lapT0=this.race.t,this.recLast=this.race.t}updateGhost(){const e=this.ghostVis;if(!e)return;const t=this.race,n=this.ghostData;if(!n||!this.recOK||t.mode!=="hotlap"){e.group.visible=!1;return}const s=t.t-this.lapT0,r=s/.05,a=Math.floor(r),o=n.pts.length/3;if(a<0||a>=o-1||s>n.lap+.5){e.group.visible=!1;return}const c=r-a,l=n.pts,u=l[a*3]+(l[a*3+3]-l[a*3])*c,h=l[a*3+1]+(l[a*3+4]-l[a*3+1])*c;let f=l[a*3+2],d=l[a*3+5];for(;d-f>Math.PI;)d-=2*Math.PI;for(;d-f<-Math.PI;)d+=2*Math.PI;const m=this.ghostQ||(this.ghostQ={});this.track.query(u,h,this.ghostHint,m),this.ghostHint=m.i,this.place(e.group,u,m.surface==="grass"?0:m.y,h,f+(d-f)*c,m.surface==="grass"?{bank:0,rx:0,rz:0}:m),e.spin+=(n.lap>0?70:0)*.016/e.dim.wheelR,e.update({steer:0,spin:e.spin,roll:0,pitch:0}),e.group.visible=!0}makeGhostCar(e){const t=ta({car:e,atlas:"low",livery:{...rr,paint:"#9fe6ff",accent:"#ffffff",trim:"#9fe6ff",pattern:"none",number:"",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}}});return t.group.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.38,n.material.depthWrite=!1)}),t.spin=0,this.world.scene.add(t.group),t}finishHotLap(){const e=this.race,t=e&&e.player;if(!t||this.finishing)return;this.finishing=!0;const n=t.bestLap,s=this.career.bestFor(this.trackId()),r=!!n&&(!s||n<=s);r&&this.career.noteBest(this.trackId(),n);const a={mode:"hotlap",bestLap:n,newBest:r,standings:[],track:this.trackId()};this.emit("raceFinished",a),this.endRace(),this.mode="results",this.ui&&this.ui.show("results",a)}pause(){if(!(this.mode!=="race"||this.paused||this.mpMenu)){if(this.race&&this.race.mp){this.mpMenu=!0,this.ui&&this.ui.show("pause",{mp:!0,info:"The race keeps going for everyone else. Your car coasts while this menu is open."});return}this.paused=!0;try{Ze.setPaused(!0)}catch{}this.ui&&this.ui.show("pause")}}resume(){this.mpMenu=!1,this.paused=!1,this.last=performance.now(),this.acc=0,this.input.clear();try{Ze.setPaused(!1)}catch{}}restart(){const e=this.cfg;if(!(!e||e.mp)){this.paused=!1;try{Ze.setPaused(!1)}catch{}return this.launch(e.kind,e)}}exitToMenu(){const e=!!(this.race&&this.race.mp);e&&this.leaveMP(),this.paused=!1;try{Ze.setPaused(!1),Ze.music.play("menu",{fade:1})}catch{}this.clearRace(),this.mode="idle",this.camInit=!1,this.useTrack("americas"),this.refreshShowcase(),this.world.setTime("day","clear"),this.ui&&this.ui.show(e&&Ne.active?"online":"menu")}cycleCamera(){this.camMode=(this.camMode+1)%3,this.settings.camera=this.camMode,this.camInit=!1;try{Ze.setPerspective(this.camMode===1?"cockpit":this.camMode===2?"broadcast":"chase")}catch{}}frame(e){requestAnimationFrame(n=>this.frame(n));let t=Math.min(this.race&&this.race.mp?.25:.1,(e-this.last)/1e3);this.last=e,this.fps=si(this.fps,1/Math.max(t,.001),.05),this.t+=t,this.mode==="race"&&this.race?(this.paused||this.runRace(t),this.renderRace(t)):this.renderShowcase(t),this.world.render()}runRace(e){const t=this.race,n=t.player;if(this.input.consume("pause")){this.pause();return}if(this.input.consume("camera")&&this.cycleCamera(),this.input.consume("reset")&&n&&!n.finished&&!n.sim.tumble){const a=n.q,o=this.track.point(a.s+2,Fe(a.u,-8,8),{});n.sim.place(o.x,o.z,o.heading,22),n.sim.w=0,n.sim.vy=0}this.net&&this.net.frame(),this.acc+=e;let s=0;const r=t.mp?28:10;for(;this.acc>=Ys&&s<r;){let a=this.input.read(Ys,n.sim.speed);if(this.mpMenu&&(a={steer:0,throttle:0,brake:.25,analog:!0}),a.assist=this.settings.assists===0?0:1,n.controls=a,t.update(Ys),this.afterStep(),this.net&&this.net.step(),this.acc-=Ys,s++,this.mode!=="race")return}s>=r&&(this.acc=0),this.pushHud(),this.updateAudio(e)}pushHud(){const e=this.race,t=e.player,n=t.sim;if(!this.ui)return;const s=e.phase==="grid"?e.holdGrid?"Waiting for drivers"+".".repeat(1+Math.floor(this.t/3)%3):e.countdown>3?"Get ready":e.countdown>0?String(Math.ceil(e.countdown)):"GO":null;let r=this.flag||e.flag||null;t.finished&&(r="checker"),this.ui.hud.update({speedMph:n.speed*2.23694,speedKph:n.speed*3.6,rpm:n.rpm,rpmMax:n.C.redline,gear:n.gear,throttle:n.throttle,brake:n.brake,steer:t.controls.steer||0,lap:Fe(t.lap+1,1,e.mode==="hotlap"?999:e.laps),laps:e.mode==="hotlap"?0:e.laps,pos:t.pos||1,field:e.entries.length,lastLap:t.lastLap,bestLap:t.bestLap,curLap:Math.max(0,e.t-t.lapStart),gapAhead:t.gapAhead||0,gapBehind:t.gapBehind||0,drafting:n.draft>.15,damage:n.damage,flag:r,mode:e.mode,standings:this.hudStandings(e,t),minimap:{pts:this.minimapPts,cars:e.entries.filter(a=>!a.sim.hidden&&!a.left).map(a=>({x:a.sim.x,z:a.sim.z,me:a.isPlayer}))},message:s})}hudStandings(e,t){const n=r=>({pos:r.pos,name:r.isPlayer?"You":r.name,gap:r.pos===1?"":`+${(r.gapLead||0).toFixed(1)}`,me:r.isPlayer,color:r.livery&&r.livery.paint||"#888"}),s=e.sorted.slice(0,7).map(n);return t.pos>7&&s.push(n(t)),s}updateAudio(e){const t=this.world.camera,n=new F;t.getWorldDirection(n);try{const s=this.vis.find(l=>l.e.isPlayer),r=s.e.sim,a=Math.sin(r.psi)*r.vx,o=Math.cos(r.psi)*r.vx;Ze.setListener({x:t.position.x,y:t.position.y,z:t.position.z},{x:a,y:0,z:o},{x:n.x,y:n.y,z:n.z});for(const l of this.vis)if(l.voice){const u=l.e.sim,h=Math.sin(u.psi),f=Math.cos(u.psi);l.voice.update({rpm:u.rpm,throttle01:u.throttle,load01:Fe(u.nLoad*.5+u.throttle*.5,0,1),pos:{x:u.x,y:1,z:u.z},vel:{x:h*u.vx,y:0,z:f*u.vx}})}const c=this.race.entries.some(l=>!l.isPlayer&&Math.hypot(l.sim.x-r.x,l.sim.z-r.z)<40);Ze.ambient.update({speed:r.speed,slip01:r.skid||0,offTrack:s.e.q.surface==="grass"||s.e.q.surface==="apron",drafting01:Fe(r.draft||0,0,1),crowd01:c?.5:.7,wall01:s.e.q.surface==="wall"?1:0})}catch(s){this._ae||(this._ae=1,console.warn("audio update",s))}}renderRace(e){this.race;const t=this.fx;for(const s of this.vis){const r=s.e,a=r.sim;if(a.hidden){if(s.car.group.visible=!1,s.voice){try{s.voice.dispose()}catch{}s.voice=null}continue}s.pose=s.pose||{x:0,z:0,psi:0},this.placeSim(s.car.group,a,Fe(this.acc/Ys,0,1),s.pose),a.tumble?(s.roll=0,s.pitch=0,s.car.update({steer:0,spin:s.spin,roll:0,pitch:0}),s.spin+=Math.hypot(a.vx,a.vy)/s.car.dim.wheelR*e*.5):(s.spin+=a.vx/s.car.dim.wheelR*e,s.roll=si(s.roll,-(a.roll||0),.3),s.pitch=si(s.pitch,a.pitch||0,.3),s.car.update({steer:a.steer||0,spin:s.spin,roll:s.roll,pitch:s.pitch})),s.car.setBrake(a.brake),s.car.setLights(this.world.timeKey==="night"||this.world.timeKey==="sunset"),s.car.setDirt(a.dirt||0),a.dentVer!==s.dentVer&&(s.dentT||0)<=this.t&&(s.dentVer=a.dentVer,s.dentT=this.t+.3,s.car.applyDents(a.dents,a.C.cgH)),this.emitFx(s,e)}t&&(t.setView(this.world.camera,this.world.renderer),t.setLight(this.world.timeKey==="night"?.35:this.world.timeKey==="sunset"?.8:1),t.update(e)),this.updateGhost();const n=this.vis.find(s=>s.e.isPlayer);this.updateCamera(n,e),this.input.consume("look")}emitFx(e,t){const n=e.e.sim,s=this.fx;if(!s||this.paused)return;const r=this.world.camera.position,a=n.x-r.x,o=n.z-r.z;if(a*a+o*o>25600)return;const c=e.fxA||(e.fxA={g:0,d:0,s:0,k:0,b:0}),l=n.C,u=l.trackHalf||.8,h=Math.sin(n.psi),f=Math.cos(n.psi),d=n.speed,m=n.wvx,v=n.wvz,g=(x,_)=>{const S=x?l.a:-l.b,w=_?u:-u;return[n.x+h*S+f*w,n.z+f*S-h*w]};if(n.tumble){const x=n.tumble;if(!x.done&&n.fracGrass>.01||!x.done&&e.e.q.surface==="grass")for(c.d+=t*55*Math.min(1,d/25);c.d>=1;)c.d-=1,s.emit("dust",n.x,.3,n.z,m*.15,1.2,v*.15,1,1.5);return}const p=n.fracGrass;if(p>.2&&d>5){for(c.g+=t*(14+d*1.1)*p;c.g>=1;){c.g-=1;const[x,_]=g(Math.random()<.3,Math.random()<.5);s.emit(Math.random()<.55?"grass":"dirt",x,.15,_,-m*.22,1.8+Math.random()*3.5,-v*.22,1,1)}for(c.d+=t*(22+d*1.3)*p;c.d>=1;){c.d-=1;const[x,_]=g(!1,Math.random()<.5);s.emit("dust",x,.2,_,-m*.08,.7,-v*.08,1,1.2)}}if(n.skid>.3&&n.fracTrack>.4)for(c.s+=t*40*n.skid;c.s>=1;){c.s-=1;const[x,_]=g(!1,Math.random()<.5);s.emit("smoke",x,.15,_,-m*.04,.5,-v*.04,1,.6)}if(n.scrape>.4&&d>10){const x=e.e.q,_=x.u>0?1:-1;for(c.k+=t*110*n.scrape;c.k>=1;){c.k-=1;const S=n.x+(x.rx||0)*_*1,w=n.z+(x.rz||0)*_*1;s.emit("spark",S,.4+Math.random()*.4,w,m*.5,1+Math.random()*2.5,v*.5,1,1.6)}}const y=Math.max(n.damage.front,n.damage.left*.7,n.damage.right*.7);if(y>.55&&d>3)for(c.b+=t*(6+y*22);c.b>=1;)c.b-=1,s.emit("blacksmoke",n.x+h*(l.a+.4),.95,n.z+f*(l.a+.4),m*.5,1.2,v*.5,1,.6)}updateCamera(e,t){const n=this.world.camera,s=e.e.sim,r=e.pose||s,a=Object.create(s,{x:{value:r.x},z:{value:r.z},psi:{value:r.psi}}),o=e.car.group,c=e.car.dim,l=a.tumble,u=l&&this.camMode===1?0:this.camMode;if(this.camInit||(this.camYaw=a.psi),l){const _=l,w=Math.hypot(_.v.x,_.v.z)>4?Math.atan2(_.v.x,_.v.z):this.camYaw;this.camYaw+=sr(w-this.camYaw)*(1-Math.exp(-t*2.5))}else this.camYaw+=sr(a.psi-this.camYaw)*(1-Math.exp(-t*(u===2?5:10)));const h=u===1?a.psi:this.camYaw,f=new F(Math.sin(h),0,Math.cos(h)),d=new F(f.z,0,-f.x),m=new F(a.x,l?Math.max(0,a.gh):o.matrix.elements[13],a.z),v=u;let g=new F,p=new F,y=62;const x=a.speed;if(y=62+Fe(x/90,0,1)*14,v===0){const _=8.2+Fe(x/80,0,1)*1.2;g.copy(m).addScaledVector(f,-_).addScaledVector(d,-a.vy*.05).add(new F(0,2.5,0)),p.copy(m).addScaledVector(f,12).add(new F(0,1,0))}else v===1?(g.copy(m).addScaledVector(f,c.front*.05+.1).addScaledVector(d,.34).add(new F(0,1.05,0)),p.copy(g).addScaledVector(f,30).addScaledVector(d,(a.steer||0)*-4*0+0).add(new F(0,-.3,0)),y=74+Fe(x/90,0,1)*8):(g.copy(m).addScaledVector(f,-13).add(new F(0,5.2,0)),p.copy(m).addScaledVector(f,8).add(new F(0,.8,0)),y=52+Fe(x/90,0,1)*8);this.camInit||(this.camPos.copy(g),this.camTgt.copy(p),this.camInit=!0),this.camPos.copy(g),this.camTgt.copy(p),n.position.copy(this.camPos),this.shake>.01&&(n.position.x+=(Math.random()-.5)*this.shake*.35,n.position.y+=(Math.random()-.5)*this.shake*.35,this.shake*=Math.exp(-t*5)),n.lookAt(this.camTgt),Math.abs(n.fov-y)>.05&&(n.fov=si(n.fov,y,.08),n.updateProjectionMatrix()),this.world.followSun(m),e.car.group&&(e.car.group.visible=!0)}renderShowcase(e){if(!this.showcase||!this.showPt)return;const t=this.orbit;t.auto&&(t.az+=e*.18);const n=this.showPt,s=this.world.camera,r=n.x,a=n.y+.6,o=n.z,c=t.dist;s.position.set(r+Math.sin(t.az)*Math.cos(t.el)*c,a+Math.sin(t.el)*c+.3,o+Math.cos(t.az)*Math.cos(t.el)*c),s.lookAt(r,a,o),Math.abs(s.fov-38)>.05&&(s.fov=38,s.updateProjectionMatrix()),this.world.followSun(n)}}const Fa=new dy;function A(i,e,...t){const n=document.createElement(i);if(e)for(const r of Object.keys(e)){const a=e[r];if(!(a==null||a===!1))if(r==="class")n.className=a;else if(r==="style"&&typeof a=="object")for(const o of Object.keys(a))o.startsWith("--")?n.style.setProperty(o,a[o]):n.style[o]=a[o];else r==="dataset"?Object.assign(n.dataset,a):r.startsWith("on")&&typeof a=="function"?n.addEventListener(r.slice(2).toLowerCase(),a):r==="html"?n.innerHTML=a:a===!0?n.setAttribute(r,""):n.setAttribute(r,a)}const s=r=>{r==null||r===!1||(Array.isArray(r)?r.forEach(s):n.append(r instanceof Node?r:document.createTextNode(String(r))))};return t.forEach(s),n}const js=(i,e=document)=>e.querySelector(i),fy=(i,e=document)=>Array.from(e.querySelectorAll(i)),py=(i,e,t)=>Math.min(t,Math.max(e,i)),Zt=i=>Math.round(i).toLocaleString("en-US");function Ti(i){if(i==null||!isFinite(i)||i<=0)return"--:--.---";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function wu(i){if(i==null||!isFinite(i))return"--";const e=Math.abs(i).toFixed(1);return e==="0.0"?"0.0":(i>=0?"+":"-")+e}const zd=i=>{const e=["th","st","nd","rd"],t=i%100;return i+(e[(t-20)%10]||e[t]||e[0])},pl=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Vd=i=>new Promise(e=>setTimeout(e,i)),Ht=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${i}</svg>`,my={home:Ht('<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'),trophy:Ht('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a2 2 0 0 0 2 4"/><path d="M16 6h3a2 2 0 0 1-2 4"/><path d="M12 13v4"/><path d="M8 20h8"/>'),flag:Ht('<path d="M5 21V4"/><path d="M5 5h13l-2 4 2 4H5"/>'),stopwatch:Ht('<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'),car:Ht('<path d="M3 15l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v3H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),globe:Ht('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>'),gear:Ht('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),pause:Ht('<path d="M8 5v14M16 5v14"/>'),play:Ht('<path d="M7 4l13 8-13 8z"/>'),camera:Ht('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>'),lock:Ht('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),check:Ht('<path d="M5 12l4.5 4.5L19 7"/>'),back:Ht('<path d="M15 5l-7 7 7 7"/>'),chevron:Ht('<path d="M9 5l7 7-7 7"/>'),coin:Ht('<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),star:Ht('<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'),handshake:Ht('<path d="M3 12l4-4 4 2 3-2 4 3 3-1"/><path d="M7 8v7l5 4 7-5"/>'),fullscreen:Ht('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>')},ln=(i,e="ico")=>{const t=document.createElement("span");return t.className=e,t.innerHTML=my[i]||"",t},gy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 200" width="604" height="200" role="img" aria-label="Road to the Americas"><g class="mk">
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
`;function Xt(i,...e){try{const t=Ze&&Ze.ui&&Ze.ui[i];typeof t=="function"&&t.apply(Ze.ui,e)}catch{}}function vy(i){try{Ze&&Ze.setVolumes&&Ze.setVolumes(i)}catch{}}function _y(i,e){try{Ze&&Ze.music&&Ze.music.play(i,e)}catch{}}function yy(){try{return Promise.resolve(Ze&&Ze.unlock&&Ze.unlock()).catch(()=>{})}catch{return Promise.resolve()}}const xy='button:not([disabled]), a[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',Tu="button, a[href], input, select, label.sw, [role=button]",My=i=>i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden",Uo=i=>i?fy(xy,i).filter(My):[];function by(i,{getScope:e,onBack:t,hudActive:n,onHudPause:s}){let r=null;i.addEventListener("click",d=>{const m=d.target.closest(Tu);if(!m)return;if(m.disabled||m.getAttribute("aria-disabled")==="true"){Xt("error");return}const v=m.dataset.snd||(m.closest("[data-snd]")||{}).dataset?.snd;if(v!=="none"){if(v==="toggle"){Xt("toggle",m.getAttribute("aria-checked")==="true");return}if(v==="back"){Xt("back");return}if(v==="confirm"||m.classList.contains("btn-primary")){Xt("confirm");return}if(m.classList.contains("nav-item")||m.classList.contains("tab")){Xt("tab");return}Xt("click")}},!1),i.addEventListener("pointerover",d=>{if(d.pointerType&&d.pointerType!=="mouse")return;const m=d.target.closest&&d.target.closest(Tu);if(!m||m===r){m||(r=null);return}r=m,!m.disabled&&m.getAttribute("aria-disabled")!=="true"&&Xt("hover")}),i.addEventListener("focusin",d=>{d.target.matches&&d.target.matches(":focus-visible")&&Xt("hover")});let a=0;i.addEventListener("input",d=>{if(d.target.type==="range"){const m=performance.now();m-a>70&&(a=m,Xt("hover"))}});function o(d){const m=e(),v=Uo(m);if(!v.length)return;const g=document.activeElement&&m.contains(document.activeElement)?document.activeElement:null;if(!g){v[0].focus({preventScroll:!1});return}const p=g.getBoundingClientRect(),y=p.left+p.width/2,x=p.top+p.height/2;let _=null,S=1/0;for(const w of v){if(w===g)continue;const E=w.getBoundingClientRect(),L=E.left+E.width/2-y,M=E.top+E.height/2-x;let b,C;if(d==="right"?(b=L,C=Math.abs(M)):d==="left"?(b=-L,C=Math.abs(M)):d==="down"?(b=M,C=Math.abs(L)):(b=-M,C=Math.abs(L)),b<=1)continue;const k=b+C*2.2;k<S&&(S=k,_=w)}_&&(_.focus(),_.scrollIntoView({block:"nearest",inline:"nearest"}))}window.addEventListener("keydown",d=>{if(d.altKey||d.ctrlKey||d.metaKey)return;if(n()){(d.code==="Escape"||d.code==="KeyP")&&(d.preventDefault(),d.stopPropagation(),d.repeat||s());return}const m=e();if(!m||(d.stopPropagation(),d.defaultPrevented))return;if(d.key==="Tab"&&!m.classList.contains("shell")){const x=Uo(m);if(!x.length)return;const _=x[0],S=x[x.length-1],w=document.activeElement;m.contains(w)?d.shiftKey&&w===_?(d.preventDefault(),S.focus()):!d.shiftKey&&w===S&&(d.preventDefault(),_.focus()):(d.preventDefault(),_.focus());return}const v=document.activeElement,g=v&&v.type==="range",p=v&&v.tagName==="INPUT"&&!["range","color","checkbox"].includes(v.type),y={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};if(y[d.key]){if(g&&(d.key==="ArrowLeft"||d.key==="ArrowRight")||p)return;d.preventDefault(),o(y[d.key])}else(d.key==="Escape"||d.key==="Backspace"&&!p)&&(d.preventDefault(),t())},!0);const c={};let l=0;const u=230;function h(){l=requestAnimationFrame(h);const d=navigator.getGamepads?navigator.getGamepads():[],m=performance.now();for(const v of d){if(!v)continue;const g=v.axes[0]||0,p=v.axes[1]||0,y={up:v.buttons[12]?.pressed||p<-.6,down:v.buttons[13]?.pressed||p>.6,left:v.buttons[14]?.pressed||g<-.6,right:v.buttons[15]?.pressed||g>.6,a:v.buttons[0]?.pressed,b:v.buttons[1]?.pressed,start:v.buttons[9]?.pressed};for(const x of Object.keys(y)){if(!y[x]){c[x]=0;continue}if(c[x]&&m-c[x]<u)continue;const _=!c[x];if(c[x]=m,n()){x==="start"&&_&&s();continue}if(x==="a"){if(_){const S=document.activeElement;S&&S.click&&S.click()}}else if(x==="b")_&&t();else if(x!=="start"&&e()){const w=document.activeElement;w&&w.type==="range"&&(x==="left"||x==="right")?(w.value=+w.value+(x==="right"?1:-1)*(w.step||.05)*2,w.dispatchEvent(new Event("input",{bubbles:!0}))):o(x)}}}}const f=()=>{l||(l=requestAnimationFrame(h))};return window.addEventListener("gamepadconnected",f),navigator.getGamepads&&Array.from(navigator.getGamepads()).some(Boolean)&&f(),{focusFirst(d){const m=Uo(d),v=d&&d.querySelector("[data-autofocus]");(v&&!v.disabled?v:m[0])?.focus({preventScroll:!0})}}}function Sy(i){const e=js("#boot");if(!e)return{setLoading(){},hide(){},el:null};const t=js("#boot-fill"),n=js("#boot-label"),s=js("#boot-start"),r=js(".boot-bar"),a=pl()?200:1700,o=performance.now();let c=0,l=!1,u=!1,h=!1;function f(){if(h)return;h=!0,e.classList.add("ready"),s.hidden=!1,r.setAttribute("aria-valuenow","100"),n.textContent="Ready";const g=async y=>{u||y.type==="keydown"&&(y.key==="Tab"||y.key==="Shift"||y.key==="Meta"||y.key==="Alt"||y.key==="Control")||(u=!0,window.removeEventListener("keydown",g,!0),e.removeEventListener("pointerdown",g,!0),e.classList.add("go"),s.blur(),await i())};window.addEventListener("keydown",g,!0),e.addEventListener("pointerdown",g,!0),window.addEventListener("gamepadconnected",()=>{});const p=()=>{if(u)return;const y=navigator.getGamepads?navigator.getGamepads():[];for(const x of y)if(x&&x.buttons.some(_=>_.pressed)){g({type:"pad"});return}requestAnimationFrame(p)};requestAnimationFrame(p),s.focus({preventScroll:!0})}function d(){if(c>=1&&l===!1){const g=Math.max(0,a-(performance.now()-o));l=!0,setTimeout(f,g)}}let m=!1;function v(g){if(m)return;m=!0,h=!0,e.classList.remove("ready"),s.hidden=!0,t.style.transform="scaleX(1)",t.style.background="#e5332d",n.textContent=g,n.style.cssText="color:#ff8a84;text-transform:none;letter-spacing:.02em;max-width:min(86vw,560px);text-align:center;font-size:1.05rem";const p=document.createElement("button");p.type="button",p.className="boot-start",p.textContent="Reload",p.style.animation="none",p.addEventListener("click",()=>location.reload()),n.after(p),p.focus({preventScroll:!0})}return{el:e,setLoading(g,p){if(!m){if(p&&/^failed/i.test(p)){v(p);return}c=Math.max(c,Math.min(1,g)),t.style.transform=`scaleX(${c})`,r.setAttribute("aria-valuenow",String(Math.round(c*100))),p&&!h&&(n.textContent=p),d()}},hide(){e.classList.add("out"),setTimeout(()=>{e.hidden=!0},600)},show(){e.hidden=!1,e.classList.remove("out")}}}const ca=22,Fo={green:["GREEN FLAG","f-green"],yellow:["CAUTION","f-yellow"],white:["WHITE FLAG · LAST LAP","f-white"],checker:["CHECKERED FLAG","f-check"]};function wy(i){const e=A("div",{class:"hud","aria-hidden":"false"}),t={},n=(D,V="")=>A("span",{class:D},V);t.posBadge=A("div",{class:"h-pos"},t.posN=n("h-pos-n","P1"),t.posOf=n("h-pos-of","/ 1")),t.tower=A("ol",{class:"h-tower"});const s=A("div",{class:"h-tl"},t.posBadge,t.tower),r=A("div",{class:"h-btns"},A("button",{type:"button",class:"rbtn","aria-label":"Pause",dataset:{snd:"none"},onClick:()=>i.pause()},ln("pause")),A("button",{type:"button",class:"rbtn","aria-label":"Change camera",dataset:{snd:"none"},onClick:()=>i.cycleCamera()},ln("camera"))),a=(D,V,N)=>A("div",{class:`h-t ${N||""}`},n("h-t-l",V),t[D]=n("h-t-v","--:--.---"));t.lap=n("h-lap-v","LAP 1/3");const o=A("div",{class:"h-tr"},t.lap,a("cur","CURRENT","cur"),a("last","LAST"),a("best","BEST","best"));o.append(r),t.flag=A("div",{class:"h-flag",hidden:!0}),t.msg=A("div",{class:"h-msg",hidden:!0});const c=A("div",{class:"h-tc"},t.flag,t.msg);t.leds=Array.from({length:ca},(D,V)=>A("i",{class:`led ${V<12?"g":V<18?"y":"r"}`})),t.speed=n("h-spd","0"),t.unit=n("h-unit","MPH"),t.gear=n("h-gear","N"),t.rpm=n("h-rpm","0 RPM");const l=A("div",{class:"h-dash"},A("div",{class:"leds"},t.leds),A("div",{class:"h-dash-r"},A("div",{class:"h-gearbox"},n("h-gl","GEAR"),t.gear),A("div",{class:"h-spdbox"},t.speed,t.unit),A("div",{class:"h-rpmbox"},t.rpm)));t.thr=A("i",{class:"ped-f"}),t.brk=A("i",{class:"ped-f"});const u=A("div",{class:"h-ped"},A("div",{class:"ped thr"},t.thr,n("ped-l","T")),A("div",{class:"ped brk"},t.brk,n("ped-l","B")));t.gapA=n("gap-v","--"),t.gapB=n("gap-v","--"),t.draft=A("div",{class:"h-draft"},"DRAFTING");const h=A("div",{class:"h-gaps"},A("div",{class:"gap ahead"},n("gap-l","AHEAD"),t.gapA),A("div",{class:"gap behind"},n("gap-l","BEHIND"),t.gapB),t.draft);t.map=A("canvas",{class:"h-map",width:180,height:180,"aria-label":"Track map"}),t.dmg={};const f="http://www.w3.org/2000/svg",d=(D,V)=>{const N=document.createElementNS(f,D);for(const O of Object.keys(V))N.setAttribute(O,V[O]);return N},m=A("div",{class:"h-dmg","aria-label":"Car damage"},(()=>{const D=d("svg",{viewBox:"0 0 44 84"});D.append(d("path",{class:"dm-body",d:"M12 4h20a7 7 0 0 1 7 7v62a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7z"})),D.append(d("rect",{class:"dm-cab",x:13,y:28,width:18,height:26,rx:4}));const V=(N,O,W,B,j)=>{const J=d("rect",{class:"dm ok",x:O,y:W,width:B,height:j,rx:3});t.dmg[N]=J,D.append(J)};return V("front",11,8,22,13),V("rear",11,63,22,13),V("left",7,24,6,36),V("right",31,24,6,36),D})()),v=A("div",{class:"h-bl"},t.map,m);e.append(s,c,o,v,l,u,h);const g={},p=(D,V,N)=>{g[D]!==N&&(g[D]=N,V.textContent=N)};let y=-1,x=null,_=null,S=null,w="",E="",L="",M=0;const b=t.map.getContext("2d");function C(D){let V=1e9,N=-1e9,O=1e9,W=-1e9;for(const[ee,he]of D)V=Math.min(V,ee),N=Math.max(N,ee),O=Math.min(O,he),W=Math.max(W,he);const B=t.map.width,j=16,J=Math.min((B-j*2)/(N-V||1),(B-j*2)/(W-O||1)),pe=(B-(N-V)*J)/2-V*J,be=(B-(W-O)*J)/2-O*J;S={s:J,ox:pe,oy:be},_=document.createElement("canvas"),_.width=_.height=B;const Ee=_.getContext("2d");Ee.lineJoin="round",Ee.lineCap="round",Ee.beginPath(),D.forEach(([ee,he],Me)=>Me?Ee.lineTo(ee*J+pe,he*J+be):Ee.moveTo(ee*J+pe,he*J+be)),Ee.closePath(),Ee.strokeStyle="rgba(0,0,0,.55)",Ee.lineWidth=11,Ee.stroke(),Ee.strokeStyle="#8b939d",Ee.lineWidth=6,Ee.stroke();const[He,Ue]=D[0];Ee.fillStyle="#f4f6f8",Ee.fillRect(He*J+pe-5,Ue*J+be-1.5,10,3)}function k(D){if(!D)return;const V=i.game.settings.units==="kph";p("spd",t.speed,String(Math.round(V?D.speedKph:D.speedMph))),p("unit",t.unit,V?"KM/H":"MPH"),p("gear",t.gear,D.gear===0?"N":D.gear<0?"R":String(D.gear)),p("rpm",t.rpm,`${Math.round(D.rpm/10)*10} RPM`);const N=Math.round(Math.max(0,Math.min(1,D.rpm/(D.rpmMax||9e3)))*ca);if(N!==y){for(let B=0;B<ca;B++)t.leds[B].classList.toggle("on",B<N);y=N,e.classList.toggle("redline",N>=ca-1)}if(t.thr.style.transform=`scaleY(${D.throttle||0})`,t.brk.style.transform=`scaleY(${D.brake||0})`,p("posn",t.posN,`P${D.pos}`),p("posof",t.posOf,`/ ${D.field}`),p("lap",t.lap,D.mode==="hotlap"?`LAP ${D.lap}`:`LAP ${Math.min(D.lap,D.laps)}/${D.laps}`),p("cur",t.cur,Ti(D.curLap)),p("last",t.last,Ti(D.lastLap)),p("best",t.best,Ti(D.bestLap)),e.classList.toggle("hot",D.mode==="hotlap"),p("gapa",t.gapA,D.gapAhead==null||D.pos===1||D.mode==="hotlap"?"--":wu(-Math.abs(D.gapAhead))),p("gapb",t.gapB,D.gapBehind==null||D.mode==="hotlap"||D.field>1&&D.pos>=D.field?"--":wu(Math.abs(D.gapBehind))),g.dr!==!!D.drafting&&(g.dr=!!D.drafting,t.draft.classList.toggle("on",!!D.drafting)),D.damage)for(const B of["front","rear","left","right"]){const j=Math.round((D.damage[B]||0)*10);g["d"+B]!==j&&(g["d"+B]=j,t.dmg[B].setAttribute("class",`dm ${j>=7?"bad":j>=3?"mid":"ok"}`))}const O=D.flag||"";O!==E&&(E=O,O&&Fo[O]?(t.flag.hidden=!1,t.flag.className=`h-flag ${Fo[O][1]}`,t.flag.textContent=Fo[O][0]):t.flag.hidden=!0);const W=D.message||"";if(W!==L&&(L=W,W?(t.msg.hidden=!1,t.msg.textContent=W,t.msg.classList.remove("pop"),t.msg.offsetWidth,t.msg.classList.add("pop"),clearTimeout(M),M=setTimeout(()=>{t.msg.hidden=!0},3200)):t.msg.hidden=!0),D.standings){const B=D.standings.map(j=>j.pos+j.name+(j.gap||"")).join("|");B!==w&&(w=B,t.tower.replaceChildren(...D.standings.slice(0,7).map(j=>A("li",{class:`tw${j.me?" me":""}`},A("span",{class:"tw-p"},String(j.pos)),A("i",{class:"tw-c",style:{background:j.color||"#888"}}),A("span",{class:"tw-n"},j.name),A("span",{class:"tw-g"},j.gap||"")))))}if(D.minimap&&D.minimap.pts&&D.minimap.pts.length>2){D.minimap.pts!==x&&(x=D.minimap.pts,C(x)),b.clearRect(0,0,t.map.width,t.map.height),b.drawImage(_,0,0);for(const B of D.minimap.cars||[])b.beginPath(),b.arc(B.x*S.s+S.ox,B.z*S.s+S.oy,B.me?6.5:4,0,6.2832),b.fillStyle=B.me?"#3dba55":"#e8eaed",b.fill(),B.me&&(b.lineWidth=2,b.strokeStyle="#fff",b.stroke())}}return{el:e,update:k,ref:t}}function Ty(i){const e=A("div",{class:"touch",hidden:!0}),t={steer:0,throttle:0,brake:0};let n=!1,s=!1;const r=()=>{const m=i.game.input;m&&m.setTouch&&m.setTouch({steer:t.steer?-t.steer:0,throttle:t.throttle,brake:t.brake})},a=A("i",{class:"st-knob"}),o=A("div",{class:"st-strip",role:"slider","aria-label":"Steering","aria-valuemin":-1,"aria-valuemax":1,"aria-valuenow":0},A("span",{class:"st-l"},"‹"),a,A("span",{class:"st-r"},"›"));let c=null;const l=m=>{const v=o.getBoundingClientRect(),g=Math.max(-1,Math.min(1,((m.clientX-v.left)/v.width-.5)*2*1.08));t.steer=Math.abs(g)<.04?0:g,a.style.transform=`translateX(${t.steer*(v.width/2-34)}px)`,r()};o.addEventListener("pointerdown",m=>{m.preventDefault(),c=m.pointerId;try{o.setPointerCapture(c)}catch{}o.classList.add("down"),l(m)}),o.addEventListener("pointermove",m=>{m.pointerId===c&&l(m)});const u=m=>{m.pointerId===c&&(c=null,t.steer=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())};o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u);const h=(m,v,g)=>{const p=A("div",{class:`pd ${m}`,role:"button","aria-label":v,tabindex:-1},A("span",null,v));let y=null;p.addEventListener("pointerdown",_=>{_.preventDefault(),y=_.pointerId;try{p.setPointerCapture(y)}catch{}p.classList.add("down"),t[g]=1,r(),navigator.vibrate&&navigator.vibrate(6)});const x=_=>{_.pointerId===y&&(y=null,p.classList.remove("down"),t[g]=0,r())};return p.addEventListener("pointerup",x),p.addEventListener("pointercancel",x),p};e.append(A("div",{class:"tc-l"},o),A("div",{class:"tc-r"},h("brake","BRAKE","brake"),h("gas","GAS","throttle"))),e.addEventListener("contextmenu",m=>m.preventDefault()),window.addEventListener("pointerdown",m=>{m.pointerType==="touch"&&!s&&(s=!0,d.refresh())},!0);const f=()=>{const m=i.game.settings.touch;return m===!0?!0:m===!1?!1:s||matchMedia("(pointer: coarse)").matches},d={el:e,refresh(){const m=f();n=m&&e.dataset.active==="1",e.hidden=!n,document.documentElement.classList.toggle("touch-on",m);const v=i.game.input;v&&(v.touchActive=m),n||(t.steer=t.throttle=t.brake=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())},tick(){n&&(t.steer||t.throttle||t.brake)&&r()},setActive(m){e.dataset.active=m?"1":"0",d.refresh()},wanted:f};return d}function lt(i,{kind:e="ghost",onClick:t,disabled:n=!1,title:s,icon:r,snd:a,cls:o="",type:c="button",aria:l}={}){const u=A("button",{class:`btn btn-${e} ${o}`.trim(),type:c,title:n?s||"Not available yet":s,"aria-disabled":n?"true":null,dataset:a?{snd:a}:null,...l||{}},r?ln(r):null,A("span",{class:"btn-label"},i));return n?u.disabled=!0:t&&u.addEventListener("click",t),u}function At(i,e,t,{label:n,cls:s=""}={}){const r=A("div",{class:`seg ${s}`.trim(),role:"radiogroup","aria-label":n||null}),a=o=>{r.replaceChildren(...i.map(c=>{const l=c.value===o;return A("button",{type:"button",class:`seg-opt${l?" on":""}${c.locked?" locked":""}`,role:"radio","aria-checked":l?"true":"false",dataset:{value:String(c.value)},title:c.locked?c.cost?`Unlock for ${c.cost} credits`:"Locked":null,onClick:()=>{if(c.locked){t(c.value,c);return}a(c.value),t(c.value,c)}},c.locked?ln("lock","ico ico-s"):null,A("span",{class:"seg-l"},c.label),c.sub?A("span",{class:"seg-s"},c.sub):c.locked&&c.cost?A("span",{class:"seg-s"},String(c.cost)):null,c.default?A("span",{class:"seg-d"},"DEFAULT"):null)}))};return a(e),r.set=a,r}function la(i,e,t,{label:n,allowCustom:s=!0}={}){const r=A("div",{class:"swatches",role:"radiogroup","aria-label":n||null}),a=o=>{if(r.replaceChildren(...i.map(c=>A("button",{type:"button",class:`sw${c.toLowerCase()===String(o).toLowerCase()?" on":""}`,style:{"--c":c},title:c,role:"radio","aria-checked":c.toLowerCase()===String(o).toLowerCase()?"true":"false","aria-label":`Colour ${c}`,onClick:()=>{a(c),t(c)}}))),s){const c=A("input",{type:"color",class:"sw-custom",value:/^#[0-9a-f]{6}$/i.test(o)?o:"#808080","aria-label":"Custom colour",title:"Custom colour"});c.addEventListener("input",()=>t(c.value)),c.addEventListener("change",()=>a(c.value)),r.append(A("label",{class:"sw sw-plus",title:"Custom colour"},c,A("span",null,"+")))}};return a(e),r.set=a,r}function Ey(i,e,{min:t=0,max:n=1,step:s=.01,label:r,fmt:a=o=>Math.round(o*100)+"%"}={}){const o=A("output",{class:"sl-out"},a(i)),c=A("input",{type:"range",min:t,max:n,step:s,value:i,class:"sl","aria-label":r||"Value"}),l=()=>c.style.setProperty("--p",(c.value-t)/(n-t)*100+"%");return c.addEventListener("input",()=>{l(),o.textContent=a(+c.value),e(+c.value)}),l(),A("div",{class:"slider"},c,o)}function Hd(i,e,{label:t}={}){const n=A("button",{type:"button",class:`tg${i?" on":""}`,role:"switch","aria-checked":i?"true":"false","aria-label":t||"Toggle",dataset:{snd:"toggle"}},A("i"));return n.addEventListener("click",()=>{const s=n.getAttribute("aria-checked")!=="true";n.setAttribute("aria-checked",String(s)),n.classList.toggle("on",s),e(s)}),n}function Lt(i,e,t){return A("div",{class:"orow"},A("div",{class:"orow-t"},A("div",{class:"orow-n"},i),e?A("div",{class:"orow-s"},e):null),A("div",{class:"orow-c"},t))}function jt(i,e=""){return A("span",{class:`chip ${e}`.trim()},i)}function Ay(i,e,t){return A("div",{class:"stat"},A("div",{class:"stat-v"},e),A("div",{class:"stat-l"},i),null)}function Gd(i,e=""){return A("div",{class:`pbar ${e}`.trim()},A("i",{style:{width:py(i,0,1)*100+"%"}}))}function $s({title:i,text:e,ic:t,kind:n="",onClick:s,disabled:r=!1,hint:a,badge:o,big:c}){const l=A("button",{type:"button",class:`tile ${n}${c?" tile-big":""}`,disabled:r,title:r?a:null,"aria-disabled":r?"true":null,dataset:n.includes("primary")?{snd:"confirm"}:null,onClick:s},A("span",{class:"tile-ic"},ln(t)),A("span",{class:"tile-b"},A("span",{class:"tile-t"},i),A("span",{class:"tile-x"},e)),o?jt(o,r?"":"gold"):null,r?null:A("span",{class:"tile-go"},ln("chevron")));return r&&l.setAttribute("disabled",""),l}function Ry(i){const e=i.game.career,t=e.state,n=e.nextRace(),s=t.races.length===0,r=e.offers().length,a=t.races[t.races.length-1];return A("div",{class:"page page-home"},A("header",{class:"hero"},A("h1",{class:"big"},s?"Build your car.":"Back on track.",A("br"),A("span",null,s?"Earn your sponsors.":`${n.series.name}, race ${Math.min(n.index+1,n.of)} of ${n.of}`)),A("p",{class:"lead"},s?"You start with a blank car and a small local race. Finish well and sponsors will put their names on your hood.":`Last result: P${a.pos} of ${a.field}. ${r?`${r} sponsor ${r===1?"offer is":"offers are"} waiting in the Garage.`:"Keep your finishes consistent to bring in bigger sponsors."}`)),A("div",{class:"stats"},[["Reputation",Zt(t.rep)],["Credits",Zt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Ti(t.bestLap):"—"]].map(([c,l])=>A("div",{class:"stat"},A("div",{class:"stat-v"},l),A("div",{class:"stat-l"},c)))),A("div",{class:"tiles"},$s({big:!0,kind:"primary",title:s?"Start career":"Continue career",text:`${n.series.name} · ${n.laps} laps · ${n.field} cars`,ic:"trophy",onClick:()=>i.go("raceSetup",{mode:"career"})}),$s({title:"Quick race",text:"Pick the laps, rivals and weather",ic:"flag",onClick:()=>i.go("raceSetup",{mode:"quick"})}),$s({title:"Hot lap",text:"Alone on track. Chase your best lap",ic:"stopwatch",onClick:()=>i.go("raceSetup",{mode:"hotlap"})}),$s({title:"Garage",text:"Colours, number and sponsors",ic:"car",badge:r?`${r} ${r===1?"offer":"offers"}`:null,onClick:()=>i.go("garage")}),$s({title:"Online",text:"Host a room, share the code, race friends",ic:"globe",onClick:()=>i.go("online")})),A("p",{class:"page-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."))}const ml={1:"Local",2:"Regional",3:"National",4:"Title"},vr=(i,e=120,t="sp-logo")=>{const n=Ns(i);return A("img",{class:t,src:Td(i,e*2,Math.round(e*.4)*2),alt:n?n.name:i,width:e,height:Math.round(e*.4),draggable:"false"})};function Eu(i){const e=i.game.career.nextTierGoal();if(!e)return A("div",{class:"note"},ln("star"),A("span",null,"Every sponsor tier is unlocked. Keep winning to keep the contracts paying."));const t=Math.round(e.avgNow*100),n=Math.round(e.avgNeeded*100),s=[];return e.racesNeeded>0&&s.push(`Finish ${e.racesNeeded} more ${e.racesNeeded===1?"race":"races"}`),s.push(`A finish score of ${n}% or better, averaged over your last 3 races (you are at ${t}%)`),e.seriesNeeded&&s.push(`Reach the ${e.seriesNeeded} series`),A("div",{class:"goal"},A("div",{class:"goal-h"},jt(`${ml[e.tier]} sponsors`,"gold"),A("span",null,"Next tier needs")),A("ul",{class:"goal-l"},s.map(r=>A("li",null,r))),Gd(Math.min(1,e.avgNow/e.avgNeeded),"gold"),A("div",{class:"goal-n"},"Finish score is 100% for a win and 0% for last place."))}function Wd(i,e){const t=i.game.career,n=t.offers(),s=A("section",{class:"card"},A("h3",{class:"card-t"},"Sponsor offers"));return n.length?(s.append(A("div",{class:"offers"},n.map(r=>A("div",{class:"offer"},vr(r.id,132),A("div",{class:"offer-t"},A("div",{class:"offer-n"},r.name),A("div",{class:"offer-s"},`${ml[r.tier]} sponsor · pays about ${Zt(r.payout)} credits a race`),A("div",{class:"offer-f"},"Best on: "+r.slots.map(a=>ga[a]).join(", "))),A("div",{class:"offer-b"},lt("Accept",{kind:"primary",icon:"handshake",onClick:()=>{t.acceptSponsor(r.id)&&(i.ui.toast(`${r.name} signed. Put them on your car in the Garage.`,"good"),e())}}),lt("Decline",{kind:"ghost",snd:"back",onClick:()=>{t.declineSponsor(r.id),e()}})))))),s.append(Eu(i))):s.append(A("p",{class:"muted"},t.state.owned.length?"No new offers right now.":"No offers yet. Finish a few races in the top half of the field and sponsors will call."),Eu(i)),s}function Cy(i){const e=i.game.career,t=e.state.owned.map(Ns).filter(Boolean),n=new Set(Object.values(e.state.livery.slots).filter(Boolean));return A("section",{class:"card"},A("h3",{class:"card-t"},"Sponsor contracts"),t.length?A("div",{class:"contracts"},t.map(s=>A("div",{class:"contract"},vr(s.id,96),A("div",{class:"contract-t"},A("div",{class:"offer-n"},s.name),A("div",{class:"offer-s"},`${ml[s.tier]} · ~${Zt(s.payout)} credits a race`)),n.has(s.id)?jt("On your car","good"):jt("Not on car","warn")))):A("p",{class:"muted"},"No contracts yet."))}function Py(i){const e=i.game.career,t=e.state,n=A("div",{class:"page page-career"}),s=()=>{n.replaceChildren(A("header",{class:"page-h"},A("h1",{class:"big"},"Career"),A("p",{class:"lead"},"Climb the series. Consistent finishes bring sponsors, and sponsors pay for every race.")),A("div",{class:"stats"},[["Reputation",Zt(t.rep)],["Credits",Zt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Ti(t.bestLap):"—"]].map(([r,a])=>Ay(r,a))),A("section",{class:"card"},A("h3",{class:"card-t"},"Series"),A("div",{class:"series"},Sn.map((r,a)=>{const o=!e.seriesOpen(a),c=a===t.seriesIndex,l=c?t.seasonRace:0;return A("div",{class:`ser${c?" cur":""}${o?" locked":""}`},A("div",{class:"ser-h"},A("div",{class:"ser-n"},r.name),o?jt(`Needs ${Zt(r.unlockRep)} rep`,""):c?jt("Current","good"):null),A("div",{class:"ser-m"},`${r.races} races · ${r.field} cars · ${r.ai[0].toUpperCase()+r.ai.slice(1)} rivals`),c?A("div",{class:"ser-p"},Gd(l/r.races),A("span",null,`${Math.min(l,r.races)} of ${r.races} done`)):null,c?A("div",{class:"ser-m"},`Next: ${bt[e.trackFor(r.id,t.seasonRace)].name}`):null,o?A("div",{class:"ser-l"},ln("lock"),A("span",null,`${Zt(r.unlockRep-t.rep)} more reputation to unlock`)):c?lt("Race next event",{kind:"primary",icon:"play",onClick:()=>i.go("raceSetup",{mode:"career"})}):lt("Switch to this series",{onClick:()=>{e.selectSeries(a)&&(i.ui.toast(`Switched to ${r.name}`,"info"),s())}}))}))),A("div",{class:"cols"},A("div",null,Wd(i,s),Cy(i)),A("section",{class:"card"},A("h3",{class:"card-t"},"Recent results"),t.races.length?A("table",{class:"tbl"},A("thead",null,A("tr",null,["Series","Finish","Field"].map(r=>A("th",null,r)))),A("tbody",null,t.races.slice(-10).reverse().map(r=>{const a=Sn.find(o=>o.id===r.series);return A("tr",null,A("td",null,a?a.name:r.series),A("td",{class:r.pos<=3?"good":""},zd(r.pos)),A("td",null,`${r.field} cars`))}))):A("p",{class:"muted"},"No races yet. Your first result will appear here."))))};return s(),n}function ar(i,{title:e,body:t,confirmLabel:n="OK",cancelLabel:s="Cancel",danger:r=!1,disabled:a=!1,onConfirm:o}){const c=i.ui.overlayEl,l=()=>{const f=!!c.querySelector(".ov");c.hidden=!f&&i.ui._modals.length===0,c.classList.toggle("modal-only",!f&&i.ui._modals.length>0)},u=()=>{h.remove(),i.ui._modals=i.ui._modals.filter(f=>f!==h),l(),i.ui.focusScope()},h=A("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":e},A("div",{class:"modal-card"},A("h3",{class:"modal-t"},e),A("p",{class:"modal-b"},t),A("div",{class:"modal-a"},lt(s,{kind:"ghost",snd:"back",onClick:u}),lt(n,{kind:r?"danger":"primary",disabled:a,title:a?"You do not have enough credits yet":null,onClick:()=>{u(),o&&o()}}))));return h.dataset.close="1",h.close=u,h.addEventListener("pointerdown",f=>{f.target===h&&u()}),c.append(h),i.ui._modals.push(h),l(),i.ui.focusScope(h),h}const Au=["#d9dde2","#f4f6f8","#1d1f24","#c8102e","#e8590c","#f2b134","#3dba55","#0d8a6a","#1f6fe0","#2a3f8f","#7a3fc4","#e83e8c"],Ly=["#1d1f24","#f4f6f8","#c0c6cc","#f2b134","#c8102e","#3dba55","#1f6fe0"],Iy=[["none","Plain"],["stripe","Stripe"],["split","Split"],["chevron","Chevron"],["fade","Fade"]],ky=[["gloss","Gloss"],["matte","Matte"],["metallic","Metallic"]],Dy=[["block","Block"],["italic","Italic"],["outline","Outline"]];function Ny(i){const e=i.game,t=e.career;let n=i.params?.tab||"paint";const s=p=>e.garage.setLivery(p),r=A("div",{class:"page page-garage"}),a=A("div",{class:"garage-stage","aria-label":"Drag to rotate the car. Scroll or pinch to zoom.",role:"img"},A("div",{class:"stage-hint"},ln("car"),A("span",null,"Drag to rotate. Scroll or pinch to zoom."))),o=new Map;let c=0;a.addEventListener("pointerdown",p=>{try{a.setPointerCapture(p.pointerId)}catch{}if(o.set(p.pointerId,[p.clientX,p.clientY]),o.size===2){const[y,x]=[...o.values()];c=Math.hypot(y[0]-x[0],y[1]-x[1])}}),a.addEventListener("pointermove",p=>{const y=o.get(p.pointerId);if(y){if(o.size===2){o.set(p.pointerId,[p.clientX,p.clientY]);const[x,_]=[...o.values()],S=Math.hypot(x[0]-_[0],x[1]-_[1]);e.garage.zoom((c-S)*.01),c=S;return}e.garage.orbit(p.clientX-y[0],p.clientY-y[1]),o.set(p.pointerId,[p.clientX,p.clientY])}});const l=p=>{o.delete(p.pointerId),c=0};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("wheel",p=>{p.preventDefault(),e.garage.zoom(Math.sign(p.deltaY)*.6)},{passive:!1});const u=A("aside",{class:"garage-panel"}),h=(p,y,x,_)=>{const S=Hi[p][y],w=t.state.credits;ar(i,{title:`Unlock ${x}?`,body:`${x} costs ${Zt(S)} credits. You have ${Zt(w)}.`,confirmLabel:w>=S?`Unlock for ${Zt(S)}`:"Not enough credits",disabled:w<S,onConfirm:()=>{t.buy(p,y)&&(i.ui.toast(`${x} unlocked`,"good"),_(),g())}})},f=(p,y,x,_)=>At(y.map(([S,w])=>{const E=t.canUse(p,S);return{value:S,label:w,locked:!E,cost:Hi[p][S]}}),x,(S,w)=>{w.locked?h(p,S,y.find(E=>E[0]===S)[1],()=>_(S)):_(S)},{label:p}),d=[["paint","Paint"],["number","Number"],["sponsors","Sponsors"]],m=(p,...y)=>A("div",{class:"g-sec"},A("div",{class:"g-t"},p),...y);function v(){const p=t.state.livery;if(n==="paint")return[t.state.unlockAll?m("Car",At(dl.map(_=>({value:_,label:on[_].year+"",sub:on[_].name.replace(/^'\d+ /,"")})),e.carIdForSeries(t.series.id),_=>{e.garage.setCar(_),g()},{label:"Car"})):null,m("Body colour",la(Au,p.paint,_=>s({paint:_}),{label:"Body colour"})),m("Accent",la(Au,p.accent,_=>s({accent:_}),{label:"Accent colour"})),m("Trim and wheels",la(Ly,p.trim,_=>s({trim:_}),{label:"Trim colour"})),m("Pattern",f("pattern",Iy,p.pattern,_=>s({pattern:_}))),m("Finish",f("finish",ky,p.finish,_=>s({finish:_})))];if(n==="number"){const _=A("input",{class:"num-in",type:"text",inputmode:"numeric",maxlength:3,value:p.number,"aria-label":"Car number",pattern:"[0-9]*"});return _.addEventListener("input",()=>{_.value=_.value.replace(/\D/g,"").slice(0,3),_.value&&s({number:_.value})}),_.addEventListener("blur",()=>{_.value||(_.value=p.number)}),[m("Car number",A("div",{class:"num-wrap"},_,A("span",{class:"muted"},"Up to three digits")),A("div",{class:"quick-nums"},["7","18","24","42","88","99"].map(S=>A("button",{type:"button",class:"qn",onClick:()=>{_.value=S,s({number:S})}},S)))),m("Style",At(Dy.map(([S,w])=>({value:S,label:w})),p.numberStyle,S=>s({numberStyle:S}),{label:"Number style"})),m("Number colour",la(["#1d1f24","#f4f6f8","#f2b134","#c8102e","#1f6fe0","#3dba55"],p.numberColor,S=>s({numberColor:S}),{label:"Number colour"}))]}const y=t.state.owned.map(Ns).filter(Boolean),x=[];return y.length?x.push(...Lc.map(_=>{const S=p.slots[_];return A("div",{class:"slot"},A("div",{class:"slot-h"},A("div",{class:"slot-n"},ga[_]),S?vr(S,84,"sp-logo sm"):A("span",{class:"muted"},"Empty")),A("div",{class:"slot-o"},y.map(w=>A("button",{type:"button",class:`slot-pick${S===w.id?" on":""}`,title:`${w.name}${w.slots.includes(_)?" (pays full rate here)":" (pays 60% here)"}`,"aria-pressed":S===w.id?"true":"false","aria-label":`${w.name} on ${ga[_]}`,onClick:()=>{s({slots:{...t.state.livery.slots,[_]:w.id}}),g()}},vr(w.id,64,"sp-logo xs"))),S?A("button",{type:"button",class:"slot-clear","aria-label":`Clear ${ga[_]}`,dataset:{snd:"back"},onClick:()=>{s({slots:{...t.state.livery.slots,[_]:null}}),g()}},"Clear"):null))})):x.push(A("p",{class:"muted pad"},"You do not have any sponsors yet. Race well and offers will show up below.")),x.push(Wd(i,g)),x}function g(){const p=u.querySelector(".g-body")?.scrollTop||0;u.replaceChildren(A("div",{class:"g-head"},A("h1",{class:"big sm"},"Garage"),A("div",{class:"g-credits",title:"Credits"},ln("coin"),A("b",null,Zt(t.state.credits)))),A("div",{class:"tabs",role:"tablist"},d.map(([y,x])=>A("button",{type:"button",class:`tab-b${n===y?" on":""}`,role:"tab","aria-selected":n===y?"true":"false",onClick:()=>{n=y,g()}},x,y==="sponsors"&&t.offers().length?A("i",{class:"dot","aria-label":"New offers"}):null))),A("div",{class:"g-body",role:"tabpanel"},v()),A("div",{class:"g-foot"},lt("Done",{kind:"primary",icon:"check",onClick:()=>i.go(i.params&&i.params.from||"menu")}))),u.querySelector(".g-body").scrollTop=p}return g(),r.append(a,u),r}const _i={laps:3,field:12,ai:"pro",weather:"clear",time:"day",ghost:!0,track:"americas"},Zs=(i,e)=>i.map(([t,n,s])=>({value:t,label:n,sub:s,default:t===e})),Uy=()=>xd.map(i=>({value:i,label:bt[i].short,sub:`${bt[i].miles} mi`}));function Fy(i){const e=i.params?.mode||"quick",t=i.game.career,n=t.nextRace(),s=i.game.world&&i.game.world.q&&i.game.world.q.maxCars||99,r=n.field>s;_i.field>s&&(_i.field=[32,24,16,12,8,4].find(m=>m<=s)||4),bt[_i.track]||(_i.track="americas");const a=e==="career"?{laps:n.laps,field:Math.min(n.field,s),ai:n.ai,series:n.series.id,track:n.track,weather:_i.weather,time:_i.time}:{..._i};e==="quick"&&!bt[a.track].laps.includes(a.laps)&&(a.laps=bt[a.track].laps[0]);const o=e==="career"?n.series.name:e==="hotlap"?"Hot lap":"Quick race",c=e==="career"?`Race ${Math.min(n.index+1,n.of)} of ${n.of}. The series sets the track, laps, rivals and field size. Your result counts for reputation and sponsors.`:e==="hotlap"?"Just you and the clock. No traffic, no damage penalties, and your best lap is saved for each track.":"A one-off race. Results here do not affect your career.",l=A("div",{class:"page page-setup"},A("header",{class:"page-h"},A("h1",{class:"big"},o),A("p",{class:"lead"},c))),u=A("section",{class:"card opts"});l.append(u);const h=(m,v)=>{a[m]=v,(e!=="career"||m==="weather"||m==="time")&&(_i[m]=v)},f=()=>{const m=bt[a.track],v=t.bestFor(a.track);return`${m.kind}, ${m.miles} miles, ${Math.round(m.maxBank*57.3)}° banking.${v?" Your best lap here: "+Ti(v)+".":""}`},d=()=>{u.replaceChildren(),e==="career"?(u.append(Lt("Track",f(),A("div",{class:"fixed"},jt(bt[a.track].name,"good")))),u.append(Lt("Race",r?`Set by the series. Graphics quality limits the grid to ${s} cars; raise it in Settings for the full field.`:"Set by the series",A("div",{class:"fixed"},jt(`${a.laps} laps`),jt(`${a.field} cars`),jt(`${a.ai[0].toUpperCase()+a.ai.slice(1)} rivals`))))):(u.append(Lt("Track",f(),At(Uy(),a.track,m=>{h("track",m),e==="quick"&&h("laps",bt[m].laps[0]),d()},{label:"Track"}))),e==="quick"&&u.append(Lt("Laps","Fewer laps for a quick go",At(Zs(bt[a.track].laps.map(m=>[m,String(m)]),bt[a.track].laps[0]),a.laps,m=>h("laps",m),{label:"Laps"})),Lt("AI level","Legend is the toughest",At(Zs([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]],"pro"),a.ai,m=>h("ai",m),{label:"AI level"})),Lt("Cars in the race",s<32?`Including you. Up to ${s} at this graphics quality`:"Including you",At(Zs([[4,"4"],[8,"8"],[12,"12"],[16,"16"],[24,"24"],[32,"32"]].filter(([m])=>m<=s),12),a.field,m=>h("field",m),{label:"Cars"}))),e==="hotlap"&&u.append(Lt("Ghost car","Race against your best lap on this track",Hd(a.ghost,m=>h("ghost",m),{label:"Ghost car"})))),t.state.unlockAll&&u.append(Lt("Car","Every car is unlocked. Your paint and sponsors carry over.",At(dl.map(m=>({value:m,label:on[m].year+"",sub:on[m].name.replace(/^'\d+ /,"")})),a.car||i.game.carIdForSeries(a.series||t.series.id),m=>{a.car=m,t.setCar(m)},{label:"Car"}))),u.append(Lt("Weather","Rain means less grip",At(Zs([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]],"clear"),a.weather,m=>h("weather",m),{label:"Weather"})),Lt("Time of day",null,At(Zs([["day","Day"],["sunset","Sunset"],["night","Night"]],"day"),a.time,m=>h("time",m),{label:"Time of day"})))};return d(),l.append(A("div",{class:"actions"},lt(e==="hotlap"?"Start hot lap":"Start race",{kind:"primary",icon:"play",onClick:()=>i.launch(e==="hotlap"?"hotlap":"race",e==="hotlap"?{ghost:a.ghost,car:a.car,track:a.track,weather:a.weather,time:a.time}:{laps:a.laps,field:a.field,ai:a.ai,series:e==="career"?a.series:void 0,track:a.track,car:a.car,weather:a.weather,time:a.time})}),lt("Back",{kind:"ghost",snd:"back",icon:"back",onClick:()=>i.go("menu")}))),l}function qd(i){const e=i.game,t=e.settings;t.volumes=Object.assign({master:.8,music:.6,sfx:.8,engine:.9,ambient:.7},t.volumes||{});const n=()=>{e.saveSettings()},s=A("div",{class:"page page-settings"},A("header",{class:"page-h"},A("h1",{class:"big"},"Settings"),A("p",{class:"lead"},"Changes save automatically. Graphics changes made during a race apply from the next one."))),r=a=>a.map(([o,c,l])=>({value:o,label:c,sub:l}));return s.append(A("section",{class:"card opts"},A("h3",{class:"card-t"},"Display and driving"),Lt("Graphics quality","Low suits older phones. Ultra needs a recent GPU.",At(r([["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]]),t.quality,a=>{t.quality=a,n(),i.ui.applyQuality()},{label:"Graphics quality"})),Lt("Speed units",null,At(r([["mph","mph"],["kph","km/h"]]),t.units,a=>{t.units=a,n()},{label:"Units"})),Lt("Default camera","You can change it in a race with the camera button.",At(r([[0,"Chase"],[1,"Cockpit"],[2,"Broadcast"]]),t.camera,a=>{t.camera=a,n()},{label:"Camera"})),Lt("Driving assists","More help keeps the car steadier.",At(r([[0,"Off"],[1,"Medium"],[2,"Full"]]),t.assists,a=>{t.assists=a,n()},{label:"Assists"})),Lt("Touch controls","Auto shows them on touch screens only.",At(r([["auto","Auto"],[!0,"On"],[!1,"Off"]]),t.touch,a=>{t.touch=a,n(),i.ui.touch&&i.ui.touch.refresh()},{label:"Touch controls"})),document.fullscreenEnabled?Lt("Full screen",null,lt("Toggle full screen",{icon:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>i.ui.toast("Full screen was blocked by the browser","warn"))}})):null),A("section",{class:"card opts"},A("h3",{class:"card-t"},"Sound"),[["master","Master"],["music","Music"],["sfx","Menu and effects"],["engine","Engines"],["ambient","Crowd and track"]].map(([a,o])=>Lt(o,null,Ey(t.volumes[a],c=>{t.volumes[a]=c,vy({...t.volumes}),n()},{label:o})))),A("section",{class:"card opts"},A("h3",{class:"card-t"},"Progress"),Lt("Unlock everything","Every car, sponsor, series and paint option, from the start.",Hd(e.career.state.unlockAll,a=>{e.career.setUnlockAll(a),e.refreshShowcase()},{label:"Unlock everything"})),Lt("Reset career","Deletes your results, sponsors, credits and car design on this device.",lt("Reset career",{kind:"danger",onClick:()=>ar(i,{title:"Reset your career?",body:"This deletes your results, sponsors, credits and car design on this device. It cannot be undone.",confirmLabel:"Reset everything",danger:!0,onConfirm:()=>{e.career.reset(),e.garage.setLivery(JSON.parse(JSON.stringify(rr))),i.ui.toast("Career reset","info"),i.go("menu")}})})))),i.params?.overlay&&s.append(A("div",{class:"actions"},lt("Back",{kind:"primary",snd:"back",icon:"back",onClick:()=>i.back()}))),s}function Oy(i){const e=i.params||{},t=e.career||null,n=e.mode==="hotlap",s=A("div",{class:"results"}),r=n?A("div",{class:"res-top"},A("div",{class:"res-pos"},A("span",{class:"res-k"},"Best lap"),A("b",null,Ti(e.bestLap))),A("div",{class:"res-sub"},e.newBest?"New personal best":"Hot lap finished")):A("div",{class:"res-top"},A("div",{class:"res-pos"},A("span",{class:"res-k"},e.pos===1?"Winner":"Finished"),A("b",null,zd(e.pos||0)),A("span",{class:"res-of"},`of ${e.field||"?"}`)),A("div",{class:"res-sub"},`${e.laps||"?"} laps · best lap ${Ti(e.bestLap)}`)),a=A("div",{class:"card res-card"},r,e.track&&bt[e.track]?A("div",{class:"res-trk muted"},bt[e.track].name):null);if(e.standings&&e.standings.length){const c=e.standings;let l=c.slice(0,8);const u=c.find(h=>h.me);u&&!l.includes(u)&&(l=[...c.slice(0,7),u]),a.append(A("table",{class:"tbl tight"},A("tbody",null,l.map((h,f)=>A("tr",{class:`${h.me?"me":""}${l[f-1]&&h.pos-l[f-1].pos>1?" gap":""}`.trim()},A("td",null,String(h.pos)),A("td",null,h.name),A("td",{class:"r"},h.gap||""))))))}t&&(a.append(A("div",{class:"earn"},A("div",{class:"earn-r"},A("span",null,"Reputation"),A("b",{class:"good"},`+${Zt(t.repGain)}`)),A("div",{class:"earn-r"},A("span",null,"Prize money"),A("b",null,`+${Zt(t.prize)}`)),(t.paid||[]).map(c=>A("div",{class:"earn-r"},A("span",{class:"earn-sp"},vr(c.id,56,"sp-logo xs"),c.name),A("b",null,`+${Zt(c.amount)}`))),A("div",{class:"earn-r tot"},A("span",null,"Credits now"),A("b",null,Zt(t.credits))))),t.newOffers&&t.newOffers.length&&a.append(A("div",{class:"note good"},ln("handshake"),A("span",null,`${t.newOffers.length} new sponsor ${t.newOffers.length===1?"offer":"offers"}: ${t.newOffers.map(c=>c.name).join(", ")}`))),t.unlockedSeries&&t.unlockedSeries.length&&a.append(A("div",{class:"note gold"},ln("trophy"),A("span",null,`Series unlocked: ${t.unlockedSeries.map(c=>c.name).join(", ")}`))));const o=A("div",{class:"actions"});return t?o.append(lt("Next race",{kind:"primary",icon:"play",onClick:()=>i.leave("raceSetup",{mode:"career"})}),t.newOffers&&t.newOffers.length?lt("View offers",{icon:"handshake",onClick:()=>i.leave("garage",{tab:"sponsors"})}):lt("Garage",{icon:"car",onClick:()=>i.leave("garage")})):e.mp?o.append(lt(Ne.active?"Back to lobby":"Main menu",{kind:"primary",icon:"play",onClick:()=>i.leave(Ne.active?"online":"menu")})):o.append(lt(n?"Another lap":"Race again",{kind:"primary",icon:"play",onClick:()=>i.restart()})),(!e.mp||Ne.active)&&o.append(lt(e.mp?"Leave room":"Main menu",{snd:"back",onClick:()=>{e.mp&&Ne.leave(),i.leave("menu")}})),s.append(a,o),s}function By(i){const e=i.params||{};return A("div",{class:"pause card"},A("h2",{class:"big sm"},"Paused"),e.info?A("p",{class:"lead"},e.info):null,A("div",{class:"pause-a"},lt("Resume",{kind:"primary",icon:"play",onClick:()=>i.resume()}),e.mp?null:lt("Restart",{icon:"back",onClick:()=>ar(i,{title:"Restart this race?",body:"Your progress in this race will be lost.",confirmLabel:"Restart",onConfirm:()=>i.restart()})}),lt("Settings",{icon:"gear",onClick:()=>i.go("settings",{overlay:!0,from:"pause"})}),e.mp?lt("Leave race",{kind:"danger",snd:"back",onClick:()=>ar(i,{title:"Leave the race?",body:"You will go back to the room lobby. The others keep racing.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.leave(Ne.active?"online":"menu")})}):lt("Exit to menu",{kind:"danger",snd:"back",onClick:()=>ar(i,{title:"Leave the race?",body:"This result will not count.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.exitToMenu()})})))}let ri="";function Ru(i,e,t){const n=()=>i.ui.toast(`${t} copied`,"good"),s=()=>{const r=A("textarea",{style:{position:"fixed",opacity:"0",left:"-999px"}});r.value=e,document.body.append(r),r.select();try{document.execCommand("copy"),n()}catch{i.ui.toast("Could not copy. Select the code and copy it by hand.","warn")}r.remove()};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(n,s):s()}const Cu=i=>on[i]?`${on[i].year} ${on[i].name.replace(/^'\d+ /,"")}`:"Car";function zy(i){const e=A("div",{class:"page page-online"}),t=()=>{const c=e.parentElement,l=c?c.scrollTop:0;e.replaceChildren(...Ne.state==="lobby"?o():Ne.state==="connecting"?a():r()),c&&(c.scrollTop=l)},n=Ne.on("change",()=>{if(!e.isConnected){n();return}t()}),s=i.params||{};s.join&&Ne.state==="idle"&&(ri=Ms(s.join),Ne.join(ri));function r(){const c=A("input",{class:"txt-in",type:"text",maxlength:16,value:Ne.profile().name,"aria-label":"Your driver name",autocomplete:"off",spellcheck:"false"});c.addEventListener("change",()=>{c.value=Ne.setName(c.value)});const l=A("input",{class:"code-in",type:"text",maxlength:7,value:ri,placeholder:"ABC123","aria-label":"Room code",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",inputmode:"text"}),u=()=>{if(c.value=Ne.setName(c.value),ri=Ms(l.value),l.value=ri,!Bd(ri)){Ne.error="Enter the 6-character room code.",Ne.state="error",t();return}Ne.join(ri)};l.addEventListener("input",()=>{const d=Ms(l.value);l.value=d,ri=d,h.disabled=d.length!==6,h.setAttribute("aria-disabled",d.length!==6?"true":"false")}),l.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),u())});const h=lt("Join room",{kind:"primary",icon:"play",onClick:u});ri.length!==6&&(h.disabled=!0,h.setAttribute("aria-disabled","true"));const f=Ne.state==="error"&&Ne.error?A("div",{class:"note warn",role:"alert"},ln("flag"),A("span",null,Ne.error)):null;return[A("header",{class:"page-h"},A("h1",{class:"big"},"Race online"),A("p",{class:"lead"},"Host a room and send the code to your friends, or type in a code to join theirs. Up to "+Ea+" drivers, with AI cars to fill the grid.")),f,A("section",{class:"card"},Lt("Your name","Other drivers see this in the lobby and on the leaderboard",c)),A("div",{class:"online-two"},A("section",{class:"card oc"},A("h3",{class:"card-t"},"Host a room"),A("p",{class:"muted"},"You get a 6-letter code to share. You pick the track and start the race."),A("div",{class:"actions"},lt("Create room",{kind:"primary",icon:"flag",onClick:()=>{c.value=Ne.setName(c.value),Ne.host()}}))),A("section",{class:"card oc"},A("h3",{class:"card-t"},"Join with a code"),A("p",{class:"muted"},"Ask the host for the code, then type it here."),A("div",{class:"join-row"},l,h))),A("p",{class:"online-note"},"Rooms connect players directly with no account and no game server. If a friend cannot connect, one of you may be on a network that blocks direct connections (some school, work and mobile networks do). A different network or a phone hotspot usually fixes it.")]}function a(){return[A("header",{class:"page-h"},A("h1",{class:"big"},Ne.isHost?"Opening room":"Joining room"),A("p",{class:"lead"},Ne.isHost?"Setting up your room. This takes a few seconds.":`Looking for room ${Ne.code}. This can take up to 15 seconds.`)),A("div",{class:"card conn"},A("div",{class:"spin","aria-hidden":"true"}),A("div",null,A("div",{class:"orow-n"},Ne.isHost?"Connecting to the matchmaking relays":"Contacting the host"),A("div",{class:"orow-s"},"Nothing to install and no account to make."))),A("div",{class:"actions"},lt("Cancel",{kind:"ghost",snd:"back",icon:"back",onClick:()=>Ne.leave()}))]}function o(){const c=i.game.career,l=Ne.settings,u=Ne.isHost,h=Ne.me,f=Ne.players,d=bt[l.track]||bt.americas,m=d.laps.includes(l.laps)?l.laps:d.laps[0],v=Math.max(0,zc-f.length),g=k=>Ne.setSettings(k),p=A("div",{class:"room-code"},A("div",{class:"rc-l"},"Room code"),A("div",{class:"rc-v","aria-label":"Room code "+Ne.code.split("").join(" ")},Ne.code),A("div",{class:"rc-a"},lt("Copy code",{icon:"check",onClick:()=>Ru(i,Ne.code,"Code")}),lt("Copy invite link",{icon:"globe",onClick:()=>Ru(i,Ne.link,"Link")}),navigator.share?lt("Share",{icon:"handshake",onClick:()=>navigator.share({title:"Road to the Americas",text:`Race me online. Room code ${Ne.code}`,url:Ne.link}).catch(()=>{})}):null)),y=A("div",{class:"plist",role:"list"},f.map(k=>{const D=k.livery||{},V=k.id===Ne.selfId,N=k.id===Ne.hostId,O=k.state!=="lobby",W=Ne.rtt[k.id];return A("div",{class:`pl${V?" me":""}`,role:"listitem"},A("span",{class:"pl-sw",style:{"--a":D.paint||"#888","--b":D.accent||"#ddd"},"aria-hidden":"true"},A("i"),A("b",null,D.number||"")),A("div",{class:"pl-n"},A("div",{class:"pl-name"},k.name,V?jt("You"):null,N?jt("Host","gold"):null),A("div",{class:"pl-c"},Cu(k.carId))),A("div",{class:"pl-s"},O?jt("In a race","gold"):N||k.ready?jt("Ready","good"):jt("Not ready"),!V&&W?A("span",{class:"pl-ping muted"},Math.round(W)+" ms"):null))}),f.length<2?A("div",{class:"pl pl-empty"},A("span",{class:"muted"},"Waiting for friends to join. Send them the code above.")):null),x=(k,D,V)=>Lt(k,D,V),_=(...k)=>A("div",{class:"fixed"},k.map(D=>jt(String(D)))),S=A("section",{class:"card opts"},A("h3",{class:"card-t"},u?"Race settings":"Race settings (set by the host)"),u?x("Track",`${d.kind}, ${d.miles} miles`,At(xd.map(k=>({value:k,label:bt[k].short,sub:`${bt[k].miles} mi`})),l.track,k=>g({track:k,laps:bt[k].laps[Math.min(1,bt[k].laps.length-1)]}),{label:"Track"})):x("Track",`${d.kind}, ${d.miles} miles`,_(d.name)),u?x("Laps",null,At(d.laps.map(k=>({value:k,label:String(k)})),m,k=>g({laps:k}),{label:"Laps"})):x("Laps",null,_(m)),u?x("AI drivers",`Fill the grid. Up to ${zc} cars in total`,At([0,4,8,12,16,20].filter(k=>k<=v||k===0).map(k=>({value:k,label:String(k)})),Math.min(l.aiCount,v),k=>g({aiCount:k}),{label:"AI drivers"})):x("AI drivers",null,_(Math.min(l.aiCount,v))),u?x("AI level",null,At([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]].map(([k,D])=>({value:k,label:D})),l.ai,k=>g({ai:k}),{label:"AI level"})):x("AI level",null,_(l.ai[0].toUpperCase()+l.ai.slice(1))),u?x("Cars","Same car keeps it fair across eras",At([["same","Same as host"],["own","Everyone picks"]].map(([k,D])=>({value:k,label:D})),l.cars,k=>g({cars:k}),{label:"Cars"})):x("Cars",null,_(l.cars==="same"?"Same as host":"Everyone picks")),u?x("Weather","Rain means less grip",At([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]].map(([k,D])=>({value:k,label:D})),l.weather,k=>g({weather:k}),{label:"Weather"})):x("Weather",null,_(l.weather[0].toUpperCase()+l.weather.slice(1))),u?x("Time of day",null,At([["day","Day"],["sunset","Sunset"],["night","Night"]].map(([k,D])=>({value:k,label:D})),l.time,k=>g({time:k}),{label:"Time of day"})):x("Time of day",null,_(l.time[0].toUpperCase()+l.time.slice(1)))),w=c.state.unlockAll&&(u||l.cars==="own"),E=A("section",{class:"card opts"},A("h3",{class:"card-t"},"Your car"),w?x("Car","Your paint, number and sponsors come with you",At(dl.map(k=>({value:k,label:on[k].year+"",sub:on[k].name.replace(/^'\d+ /,"")})),i.game.carIdForSeries(c.series.id),k=>{c.setCar(k),i.game.refreshShowcase(),Ne.pushProfile()},{label:"Car"})):x("Car",l.cars==="same"&&!u?"The host picked one car for everybody":"Pick a car in the Garage",_(Cu(i.game.carIdForSeries(c.series.id)))),Lt("Paint and number","Change your colours, number and sponsors in the Garage",lt("Open garage",{icon:"car",onClick:()=>i.go("garage",{from:"online"})}))),L=f.filter(k=>k.id!==Ne.selfId),M=L.filter(k=>k.state!=="lobby").length,b=L.filter(k=>k.ready).length,C=A("div",{class:"actions"},u?lt(M?"Waiting for drivers to return":"Start race",{kind:"primary",icon:"play",disabled:!Ne.canStart(),title:M?"Some drivers are still in the last race":void 0,onClick:()=>{Ne.startRace()||i.ui.toast("Could not start yet","warn")}}):lt(h&&h.ready?"Ready":"Click when ready",{kind:h&&h.ready?"ghost":"primary",icon:"check",onClick:()=>Ne.setReady(!(h&&h.ready))}),lt("Leave room",{kind:"danger",snd:"back",icon:"back",onClick:()=>Ne.leave()}));return[A("header",{class:"page-h"},A("h1",{class:"big"},u?"Your room":"Room lobby")),p,A("section",{class:"card"},A("h3",{class:"card-t"},`Drivers ${f.length} of ${Ea}`),y,u&&L.length?A("p",{class:"muted pad"},`${b} of ${L.length} ready. You can start whenever you like.`):u?null:A("p",{class:"muted pad"},h&&h.ready?"Waiting for the host to start the race.":"Click Ready when you are set. The host starts the race.")),S,E,C]}return t(),e}const Pu={menu:Ry,career:Py,garage:Ny,raceSetup:Fy,settings:qd,online:zy},Vy=[{id:"menu",label:"Home",icon:"home"},{id:"career",label:"Career",icon:"trophy"},{id:"raceSetup",params:{mode:"quick"},label:"Race",icon:"flag"},{id:"raceSetup",params:{mode:"hotlap"},label:"Hot lap",icon:"stopwatch",desk:!0},{id:"garage",label:"Garage",icon:"car"},{id:"online",label:"Online",icon:"globe",desk:!0},{id:"settings",label:"Settings",icon:"gear"}],ne={game:null,root:null,cur:"boot",params:{},listeners:{},nav:null,wiping:!1,music:"",hudWait:!0},Be={_modals:[],overlayEl:null},Oo=(i,...e)=>(ne.listeners[i]||[]).forEach(t=>{try{t(...e)}catch(n){console.error(n)}});Be.on=(i,e)=>((ne.listeners[i]||=[]).push(e),()=>{ne.listeners[i]=ne.listeners[i].filter(t=>t!==e)});Be.current=()=>ne.cur;function Oa(i){return pl()?(i(),Promise.resolve()):new Promise(e=>{const t=ne.wipeEl;t.classList.remove("run"),t.offsetWidth,t.classList.add("run"),ne.wiping=!0,Xt("whoosh"),setTimeout(()=>{i()},330),setTimeout(()=>{t.classList.remove("run"),ne.wiping=!1,e()},760)})}function Yi(){try{const i=ne.game.input;i&&typeof i.clear=="function"&&i.clear()}catch{}}function Ra(i){return{game:ne.game,ui:Be,params:i,go:(e,t)=>Be.show(e,t),back:()=>Be.back(),launch:(e,t)=>Gy(e,t),restart:()=>Wy(),resume:()=>qy(),pause:()=>Hc(),cycleCamera:()=>{const e=ne.game.input;e&&e.cycleCamera?e.cycleCamera():e&&e.press&&e.press("camera")},exitToMenu:()=>Vc(),leave:(e,t)=>Vc(e,t)}}async function Hy(i){for(;ne.wiping;)await Vd(80);await Oa(()=>{Yi(),Be.applyQuality(),Xd(),Be.show("hud"),ne.game.launchMP(i)})}async function Gy(i,e){ne.wiping||await Oa(()=>{Yi(),Be.applyQuality(),Xd(),Be.show("hud");const t=ne.game;(i==="hotlap"?t.startHotLap:t.startRace).call(t,e)})}async function Vc(i="menu",e={}){ne.wiping||await Oa(()=>{try{ne.game.exitToMenu()}catch(t){console.error(t)}Yi(),Be.show(i,e)})}function Wy(){Yi(),Be.applyQuality(),ne.game.restart(),Be.show("hud")}function qy(){Yi(),ne.game.resume(),Be.show("hud"),Yi()}Be.applyQuality=()=>{const i=ne.game,e=i&&i.world;if(!e||typeof e.setQuality!="function")return;const t=i.settings&&i.settings.quality;if(!(!t||e.quality===t||i.mode==="race"&&i.race))try{e.setQuality(t)}catch(n){console.warn("[ui] could not apply graphics quality",n)}};function Xd(){const i=ne.game;i&&typeof i.camMode=="number"&&i.settings&&typeof i.settings.camera=="number"&&(i.camMode=i.settings.camera|0,i.camInit=!1)}function Hc(){ne.cur==="hud"&&(ne.game.pause(),Yi(),ne.cur!=="pause"&&Be.show("pause",ne.pauseInfo||{}))}function Xy(){const i=t=>{const n=A("button",{type:"button",class:`nav-item${t.desk?" desk":""}`,disabled:t.disabled,title:t.disabled?t.hint:null,"aria-disabled":t.disabled?"true":null,dataset:{id:t.id,mode:t.params?.mode||""},onClick:()=>Be.show(t.id,t.params||{})},ln(t.icon),A("span",{class:"nav-l"},t.label),t.disabled?A("span",{class:"nav-soon"},"Soon"):null);return t.disabled&&n.setAttribute("disabled",""),n};ne.navItems=Vy.map(i);const e=A("nav",{class:"side","aria-label":"Main menu"},A("div",{class:"side-logo",html:gy.replace("<svg ",'<svg class="side-logo-svg" aria-hidden="true" ')}),A("div",{class:"nav"},ne.navItems),A("p",{class:"side-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."));ne.mainEl=A("main",{class:"main",id:"shell-main"}),ne.shellEl=A("div",{class:"shell",hidden:!0},e,ne.mainEl)}function Qy(i,e){ne.navItems.forEach(t=>{t.dataset.id===i&&(t.dataset.mode?t.dataset.mode===(e.mode==="career"?"quick":e.mode||""):!0)?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function yi({shell:i=!1,hud:e=!1,overlay:t=!1,boot:n=!1}){ne.shellEl.hidden=!i,ne.hudEl.hidden=!e,ne.overlayEl.hidden=!t,ne.bootCtl.el&&n&&ne.bootCtl.show(),ne.root.dataset.layer=i?"shell":e?t?"hud-overlay":"hud":t?"overlay":n?"boot":"none"}function Wi(){const i=document.getElementById("game-root");if(!i)return;const e=ne.cur==="garage"&&!(ne.game&&ne.game.usesStageRect)?Be.stageRect():null;i.style.transform=e?`translate(${Math.round(e.x+e.width/2-innerWidth/2)}px, ${Math.round(e.y+e.height/2-innerHeight/2)}px)`:""}function Ky(){const i=ne.game;if(ne.cur!=="garage"||!i||!i.orbit||typeof i.orbit.dist!="number"||i.usesStageRect)return;const e=Be.stageRect();if(!e||e.width<80||e.height<80)return;const t=2*Math.tan(38/2*Math.PI/180),n=Math.max(5.8/(t*(innerWidth/innerHeight)*(e.width/innerWidth)),2.7/(t*(e.height/innerHeight)));try{i.garage.zoom(Math.min(12,Math.max(4.2,n))-i.orbit.dist)}catch{}}function Bo(i){ne.music!==i&&(ne.music=i,_y(i,{fade:1.2}))}Be.show=function(e,t={}){const n=ne.cur;if(ne.params=t,e==="none"){yi({}),ne.cur="none",ne.touch.setActive(!1),Wi(),Oo("screen",e,t);return}if(e==="boot"){yi({boot:!0}),ne.cur="boot",Wi(),Oo("screen",e,t);return}ne.bootCtl.el&&!ne.bootCtl.el.hidden&&e!=="boot"&&ne.bootCtl.hide(),ne.overlayEl.querySelectorAll(".ov").forEach(r=>r.remove()),Be._modals.forEach(r=>r.remove()),Be._modals=[];const s=Ra(t);if(Pu[e]&&!(e==="settings"&&t.overlay)){if(n==="garage"&&e!=="garage")try{ne.game.garage.exit()}catch(a){console.error(a)}yi({shell:!0}),ne.touch.setActive(!1),Be.applyQuality(),ne.shellEl.classList.toggle("garage-mode",e==="garage"),ne.shellEl.dataset.screen=e;const r=Pu[e](s);if(r.classList.add("enter"),ne.mainEl.replaceChildren(r),ne.mainEl.scrollTop=0,Qy(e,t),e==="garage"&&n!=="garage")try{ne.game.garage.enter()}catch(a){console.error(a)}Bo(e==="garage"?"garage":"menu")}else if(e==="hud"){if(n==="garage")try{ne.game.garage.exit()}catch{}yi({hud:!0}),ne.touch.setActive(!0),ne.hudWait=!0,ne.hudEl.classList.add("wait"),Bo("race"),!ne.rotHint&&ne.touch.wanted()&&innerWidth<700&&innerHeight>innerWidth&&(ne.rotHint=!0,setTimeout(()=>Be.toast("Tip: turn your phone sideways for a wider view","info"),2500))}else if(e==="pause")yi({hud:!0,overlay:!0}),ne.touch.setActive(!1),ne.overlayEl.append(A("div",{class:"ov ov-pause"},By(s)));else if(e==="results")yi({overlay:!0}),ne.touch.setActive(!1),Bo("results"),Xt(t.pos===1?"bestLap":"lap"),ne.overlayEl.append(A("div",{class:"ov ov-results"},Oy(s)));else if(e==="settings")yi({hud:n==="pause"||ne.cur==="pause",overlay:!0}),ne.touch.setActive(!1),ne.overlayEl.append(A("div",{class:"ov ov-settings"},qd(s)));else{console.warn("[ui] unknown screen",e);return}ne.cur=e,ne.pauseOverlayFrom=t.from,Oo("screen",e,t),Wi(),requestAnimationFrame(()=>{Wi(),Be.focusScope()}),e==="garage"&&(n!=="garage"&&requestAnimationFrame(Ky),setTimeout(Wi,560))};Be.back=function(){if(Be._modals.length){Be._modals[Be._modals.length-1].close(),Xt("back");return}const e=ne.cur;e==="settings"&&ne.params.overlay?(Xt("back"),Be.show("pause",ne.pauseInfo||{})):e==="pause"?(Xt("back"),Ra({}).resume()):e==="results"?(Xt("back"),Vc()):["career","garage","raceSetup","settings","online"].includes(e)&&(Xt("back"),Be.show("menu"))};Be.getScope=()=>Be._modals.length?Be._modals[Be._modals.length-1]:!ne.overlayEl.hidden&&ne.overlayEl.querySelector(".ov")?ne.overlayEl.querySelector(".ov"):ne.shellEl.hidden?null:ne.shellEl;Be.focusScope=i=>{ne.nav&&ne.nav.focusFirst(i||Be.getScope())};Be.hud={update(i){ne.hudWait&&(ne.hudWait=!1,ne.hudEl.classList.remove("wait")),ne.hudCtl.update(i),ne.touchCtl.tick()}};Be.stageRect=()=>{const i=ne.mainEl&&ne.mainEl.querySelector(".garage-stage");if(!i||ne.shellEl.hidden)return null;let e=0,t=0,n=i;for(;n&&n!==ne.root;){e+=n.offsetLeft,t+=n.offsetTop;const r=n.offsetParent;r&&r!==ne.root&&(e-=r.scrollLeft,t-=r.scrollTop),n=r}const s=ne.root.getBoundingClientRect();return{x:e+s.left,y:t+s.top,width:i.offsetWidth,height:i.offsetHeight}};Be.setPauseInfo=i=>{ne.pauseInfo={info:i}};Be.setLoading=(i,e)=>ne.bootCtl.setLoading(i,e);Be.touch=null;Be.toast=(i,e="info")=>{const t=performance.now();if(ne.lastToast&&ne.lastToast.text===i&&t-ne.lastToast.t<1500)return;ne.lastToast={text:i,t};const n=A("div",{class:`toast ${e}`,role:"status"},e==="good"?ln("check"):null,A("span",null,i));for(ne.toastsEl.append(n);ne.toastsEl.children.length>3;)ne.toastsEl.firstChild.remove();setTimeout(()=>n.classList.add("out"),3e3),setTimeout(()=>n.remove(),3500)};Be.init=function(e,t){ne.game=t,ne.root=e,e.classList.add("ui-root"),ne.bootCtl=Sy(async()=>{await yy(),Xt("intro"),await Vd(pl()?50:900);const n=new URLSearchParams(location.search).get("room");await Oa(()=>{n?Be.show("online",{join:n}):Be.show("menu")})}),Xy(),Ne.on("start",n=>{Hy(n)}),ne.hudCtl=wy(Ra({})),ne.hudEl=ne.hudCtl.el,ne.hudEl.hidden=!0,ne.touchCtl=Ty(Ra({})),Be.touch=ne.touch=ne.touchCtl,ne.hudEl.append(ne.touchCtl.el),ne.overlayEl=Be.overlayEl=A("div",{class:"overlay",hidden:!0}),ne.toastsEl=A("div",{class:"toasts","aria-live":"polite"}),ne.wipeEl=A("div",{class:"wipe","aria-hidden":"true"},A("i"),A("i"),A("i")),e.append(ne.shellEl,ne.hudEl,ne.overlayEl,ne.toastsEl,ne.wipeEl),ne.nav=by(e,{getScope:()=>Be.getScope(),onBack:()=>Be.back(),hudActive:()=>ne.cur==="hud"&&!ne.overlayEl.hasChildNodes()||ne.cur==="hud",onHudPause:()=>Hc()}),window.addEventListener("resize",Wi),window.addEventListener("orientationchange",()=>setTimeout(Wi,250)),ne.pauseInfo={},t&&typeof t.on=="function"&&t.on("ready",()=>Be.setLoading(1,"Ready")),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Ed()),document.addEventListener("visibilitychange",()=>{document.hidden&&ne.cur==="hud"&&Hc()}),ne.cur="boot",yi({boot:!0})};Fa.ui=Be;Be.init(document.getElementById("ui-root"),Fa);window.__rtta={game:Fa,ui:Be,audio:Ze,Driver:Uc,mp:Ne};const Yy=document.getElementById("game-root");Fa.init(Yy,(i,e)=>Be.setLoading(i,e)).catch(i=>{console.error(i),Be.setLoading(1,"Failed to start: "+(i&&i.message||i))});
