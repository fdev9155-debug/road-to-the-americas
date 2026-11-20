(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Bc="180",Yd=0,_l=1,jd=2,Eu=1,Au=2,si=3,oi=0,nn=1,Sn=2,Mi=0,vs=1,yl=2,xl=3,Ml=4,$d=5,Bi=100,Zd=101,Jd=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Uo=204,Fo=205,of=206,cf=207,lf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Oo=0,Bo=1,zo=2,Ms=3,Vo=4,Ho=5,Go=6,Wo=7,Ru=0,gf=1,vf=2,bi=0,_f=1,yf=2,xf=3,Cu=4,Mf=5,bf=6,Sf=7,bl="attached",Tf="detached",Pu=300,bs=301,Ss=302,qo=303,Xo=304,Aa=306,wi=1e3,yi=1001,va=1002,sn=1003,Lu=1004,Zs=1005,mn=1006,la=1007,Wn=1008,Qn=1009,Iu=1010,ku=1011,or=1012,zc=1013,Xi=1014,Nn=1015,_r=1016,Vc=1017,Hc=1018,cr=1020,Du=35902,Nu=35899,Uu=1021,Fu=1022,Tn=1023,lr=1026,hr=1027,Gc=1028,Wc=1029,Ou=1030,qc=1031,Xc=1033,ha=33776,ua=33777,da=33778,fa=33779,Qo=35840,Ko=35841,Yo=35842,jo=35843,$o=36196,Zo=37492,Jo=37496,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,vc=36283,_c=36284,yc=36285,xc=36286,ur=2300,dr=2301,Oa=2302,Sl=2400,Tl=2401,wl=2402,wf=2500,Ef=0,Bu=1,Mc=2,Af=3200,Rf=3201,zu=0,Cf=1,_i="",Lt="srgb",an="srgb-linear",_a="linear",mt="srgb",$i=7680,El=519,Pf=512,Lf=513,If=514,Vu=515,kf=516,Df=517,Nf=518,Uf=519,bc=35044,Ba=35048,Al="300 es",qn=2e3,ya=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const er=Math.PI/180,Ts=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function Ff(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Of(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function Bf(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function zf(i,e=1){return e-Math.abs(Qc(i,e*2)-e)}function Vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wf(i,e){return i+Math.random()*(e-i)}function qf(i){return i*(.5-Math.random())}function Xf(i){i!==void 0&&(Rl=i);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(i){return i*er}function Kf(i){return i*Ts}function Yf(i){return(i&i-1)===0&&i!==0}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:er,RAD2DEG:Ts,generateUUID:Fn,clamp:Ze,euclideanModulo:Qc,mapLinear:Ff,inverseLerp:Of,lerp:tr,damp:Bf,pingpong:zf,smoothstep:Vf,smootherstep:Hf,randInt:Gf,randFloat:Wf,randFloatSpread:qf,seededRandom:Xf,degToRad:Qf,radToDeg:Kf,isPowerOfTwo:Yf,ceilPowerOfTwo:jf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Zf,normalize:ht,denormalize:In};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==m){let g=1-o;const p=c*f+l*d+u*m+h*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),T=Math.atan2(S,p*M);g=Math.sin(g*T)/S,o=Math.sin(o*T)/S}const _=o*M;if(c=c*g+f*_,l=l*g+d*_,u=u*g+m*_,h=h*g+v*_,g===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-o*d,e[t+2]=l*m+u*d+o*f-c*h,e[t+3]=u*m-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new U,Cl=new Mt;class Ke{constructor(e,t,n,s,r,a,o,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],y=s[4],_=s[7],S=s[2],T=s[5],E=s[8];return r[0]=a*v+o*M+c*S,r[3]=a*g+o*y+c*T,r[6]=a*p+o*_+c*E,r[1]=l*v+u*M+h*S,r[4]=l*g+u*y+h*T,r[7]=l*p+u*_+h*E,r[2]=f*v+d*M+m*S,r[5]=f*g+d*y+m*T,r[8]=f*p+d*_+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(s*l-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ke;function Hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jf(){const i=fr("canvas");return i.style.display="block",i}const Pl={};function pr(i){i in Pl||(Pl[i]=!0,console.warn(i))}function ep(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ll=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?_a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const nt=tp();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class np{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=fr("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ha(s[a].image)):r.push(Ha(s[a]))}else r=Ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?np.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;const Ga=new U;class Dt extends Cs{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=yi,s=yi,r=mn,a=Wn,o=Tn,c=Qn,l=Dt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Fn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Pu;Dt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,S=(p+1)/2,T=(u+f)/4,E=(h+v)/4,P=(m+g)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=E/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends rp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Sr.subVectors(this.max,Us),Ji.subVectors(e.a,Us),es.subVectors(e.b,Us),ts.subVectors(e.c,Us),li.subVectors(es,Ji),hi.subVectors(ts,es),Ri.subVectors(Ji,ts);let t=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,li.z,0,-li.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!Wa(t,Ji,es,ts,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Ji,es,ts,Sr))?!1:(Tr.crossVectors(li,hi),t=[Tr.x,Tr.y,Tr.z],Wa(t,Ji,es,ts,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,br=new ci,Ji=new U,es=new U,ts=new U,li=new U,hi=new U,Ri=new U,Us=new U,Sr=new U,Tr=new U,Ci=new U;function Wa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const op=new ci,Fs=new U,qa=new U;class Yn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(qa)),this.expandByPoint(Fs.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new U,Xa=new U,wr=new U,ui=new U,Qa=new U,Er=new U,Ka=new U;class Ra{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xa.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=ui.dot(this.direction),c=-ui.dot(wr),l=ui.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*c-o,f=a*o-c,m=r*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(wr,f),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){Qa.subVectors(t,e),Er.subVectors(n,e),Ka.crossVectors(Qa,Er);let a=this.direction.dot(Ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(Er.crossVectors(ui,Er));if(c<0)return null;const l=o*this.direction.dot(Qa.cross(ui));if(l<0||c+l>a)return null;const u=-o*ui.dot(Ka);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g)}set(e,t,n,s,r,a,o,c,l,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,lp)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),di.crossVectors(n,fn),di.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),di.crossVectors(n,fn)),di.normalize(),Ar.crossVectors(fn,di),s[0]=di.x,s[4]=Ar.x,s[8]=fn.x,s[1]=di.y,s[5]=Ar.y,s[9]=fn.y,s[2]=di.z,s[6]=Ar.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],y=n[7],_=n[11],S=n[15],T=s[0],E=s[4],P=s[8],x=s[12],b=s[1],L=s[5],I=s[9],D=s[13],H=s[2],N=s[6],z=s[10],q=s[14],V=s[3],K=s[7],ie=s[11],le=s[15];return r[0]=a*T+o*b+c*H+l*V,r[4]=a*E+o*L+c*N+l*K,r[8]=a*P+o*I+c*z+l*ie,r[12]=a*x+o*D+c*q+l*le,r[1]=u*T+h*b+f*H+d*V,r[5]=u*E+h*L+f*N+d*K,r[9]=u*P+h*I+f*z+d*ie,r[13]=u*x+h*D+f*q+d*le,r[2]=m*T+v*b+g*H+p*V,r[6]=m*E+v*L+g*N+p*K,r[10]=m*P+v*I+g*z+p*ie,r[14]=m*x+v*D+g*q+p*le,r[3]=M*T+y*b+_*H+S*V,r[7]=M*E+y*L+_*N+S*K,r[11]=M*P+y*I+_*z+S*ie,r[15]=M*x+y*D+_*q+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*d-n*c*d)+v*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+g*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=h*g*l-v*f*l+v*c*d-o*g*d-h*c*p+o*f*p,y=m*f*l-u*g*l-m*c*d+a*g*d+u*c*p-a*f*p,_=u*v*l-m*h*l+m*o*d-a*v*d-u*o*p+a*h*p,S=m*h*c-u*v*c-m*o*f+a*v*f+u*o*g-a*h*g,T=t*M+n*y+s*_+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(v*f*r-h*g*r-v*s*d+n*g*d+h*s*p-n*f*p)*E,e[2]=(o*g*r-v*c*r+v*s*l-n*g*l-o*s*p+n*c*p)*E,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*d-n*c*d)*E,e[4]=y*E,e[5]=(u*g*r-m*f*r+m*s*d-t*g*d-u*s*p+t*f*p)*E,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*E,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*d+t*c*d)*E,e[8]=_*E,e[9]=(m*h*r-u*v*r-m*n*d+t*v*d+u*n*p-t*h*p)*E,e[10]=(a*v*r-m*o*r+m*n*l-t*v*l-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*E,e[12]=S*E,e[13]=(u*v*s-m*h*s+m*n*f-t*v*f-u*n*g+t*h*g)*E,e[14]=(m*o*s-a*v*s-m*n*c+t*v*c+a*n*g-t*o*g)*E,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,m=r*h,v=a*u,g=a*h,p=o*h,M=c*l,y=c*u,_=c*h,S=n.x,T=n.y,E=n.z;return s[0]=(1-(v+p))*S,s[1]=(d+_)*S,s[2]=(m-y)*S,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+y)*E,s[9]=(g-M)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,u=1/a,h=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===qn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ya)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===qn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===ya)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new U,Rn=new Ge,cp=new U(0,0,0),lp=new U(1,1,1),di=new U,Ar=new U,fn=new U,kl=new Ge,Dl=new Mt;class Qt{constructor(e=0,t=0,n=0,s=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const Nl=new U,is=new Mt,Zn=new Ge,Rr=new U,Os=new U,up=new U,dp=new Mt,Ul=new U(1,0,0),Fl=new U(0,1,0),Ol=new U(0,0,1),Bl={type:"added"},fp={type:"removed"},ss={type:"childadded",child:null},Ya={type:"childremoved",child:null};class St extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new U,t=new Qt,n=new Mt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ke}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Os,Rr,this.up):Zn.lookAt(Rr,Os,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Zn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new U(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new U,Jn=new U,ja=new U,ei=new U,rs=new U,as=new U,zl=new U,$a=new U,Za=new U,Ja=new U,eo=new ct,to=new ct,no=new ct;class kn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),Jn.subVectors(n,t),ja.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Jn),c=Cn.dot(ja),l=Jn.dot(Jn),u=Jn.dot(ja),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,m=(a*u-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return eo.setScalar(0),to.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,n),no.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(to,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),Jn.subVectors(e,t),Cn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Cn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),$a.subVectors(e,n);const c=rs.dot($a),l=as.dot($a);if(c<=0&&l<=0)return t.copy(n);Za.subVectors(e,s);const u=rs.dot(Za),h=as.dot(Za);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(rs,a);Ja.subVectors(e,r);const d=rs.dot(Ja),m=as.dot(Ja);if(m>=0&&d<=m)return t.copy(r);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(as,o);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return zl.subVectors(r,s),o=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(zl,o);const p=1/(g+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Qc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=io(a,r,e+1/3),this.g=io(a,r,e),this.b=io(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return nt.workingToColorSpace(Xt.copy(this),e),Math.round(Ze(Xt.r*255,0,255))*65536+Math.round(Ze(Xt.g*255,0,255))*256+Math.round(Ze(Xt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Lt){nt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Cr);const n=tr(fi.h,Cr.h,t),s=tr(fi.s,Cr.s,t),r=tr(fi.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ze;ze.NAMES=qu;let pp=0;class Xn extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=vs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Fo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Un extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new U,Pr=new Ye;let mp=0;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}}class Xu extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qu extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gp=0;const _n=new Ge,so=new St,os=new U,pn=new ci,Bs=new ci,Ft=new U;class Wt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?Qu:Xu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(pn.min,Bs.min),pn.expandByPoint(Ft),Ft.addVectors(pn.max,Bs.max),pn.expandByPoint(Ft)):(pn.expandByPoint(Bs.min),pn.expandByPoint(Bs.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ft.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),Ft.add(os)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;const l=new U,u=new U,h=new U,f=new Ye,d=new Ye,m=new Ye,v=new U,g=new U;function p(P,x,b){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,x),m.fromBufferAttribute(r,b),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),o[P].add(v),o[x].add(v),o[b].add(v),c[P].add(g),c[x].add(g),c[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,x=M.length;P<x;++P){const b=M[P],L=b.start,I=b.count;for(let D=L,H=L+I;D<H;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new U,_=new U,S=new U,T=new U;function E(P){S.fromBufferAttribute(s,P),T.copy(S);const x=o[P];y.copy(x),y.sub(S.multiplyScalar(S.dot(x))).normalize(),_.crossVectors(T,x);const L=_.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,x=M.length;P<x;++P){const b=M[P],L=b.start,I=b.count;for(let D=L,H=L+I;D<H;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new _t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new Ge,Pi=new Ra,Lr=new Yn,Hl=new U,Ir=new U,kr=new U,Dr=new U,ro=new U,Nr=new U,Gl=new U,Ur=new U;class lt extends St{constructor(e=new Wt,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ro.fromBufferAttribute(h,e),a?Nr.addScaledVector(ro,u):Nr.addScaledVector(ro.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Lr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Lr,Hl)===null||Pi.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,S=y;_<S;_+=3){const T=o.getX(_),E=o.getX(_+1),P=o.getX(_+2);s=Fr(this,p,e,n,l,u,h,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=Fr(this,a,e,n,l,u,h,M,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,S=y;_<S;_+=3){const T=_,E=_+1,P=_+2;s=Fr(this,p,e,n,l,u,h,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=g,y=g+1,_=g+2;s=Fr(this,a,e,n,l,u,h,M,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function vp(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===oi,o),c===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,kr),i.getVertexPosition(l,Dr);const u=vp(i,e,t,n,Ir,kr,Dr,Gl);if(u){const h=new U;kn.getBarycoord(Gl,Ir,kr,Dr,h),s&&(u.uv=kn.getInterpolatedAttribute(s,o,c,l,h,new Ye)),r&&(u.uv1=kn.getInterpolatedAttribute(r,o,c,l,h,new Ye)),a&&(u.normal=kn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};kn.getNormal(Ir,kr,Dr,f.normal),u.face=f,u.barycoord=h}return u}class en extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function m(v,g,p,M,y,_,S,T,E,P,x){const b=_/E,L=S/P,I=_/2,D=S/2,H=T/2,N=E+1,z=P+1;let q=0,V=0;const K=new U;for(let ie=0;ie<z;ie++){const le=ie*L-D;for(let pe=0;pe<N;pe++){const ge=pe*b-I;K[v]=ge*M,K[g]=le*y,K[p]=H,l.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(pe/E),h.push(1-ie/P),q+=1}}for(let ie=0;ie<P;ie++)for(let le=0;le<E;le++){const pe=f+le+N*ie,ge=f+le+N*(ie+1),Ve=f+(le+1)+N*(ie+1),ke=f+(le+1)+N*ie;c.push(pe,ge,ke),c.push(ge,Ve,ke),V+=6}o.addGroup(d,V,x),d+=V,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function _p(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ku(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Yu={clone:ws,merge:Jt};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ju extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new U,Wl=new Ye,ql=new Ye;class tn extends ju{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,ql),t.subVectors(ql,Wl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,ls=1;class Mp extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(cs,ls,e,t);s.layers=this.layers,this.add(s);const r=new tn(cs,ls,e,t);r.layers=this.layers,this.add(r);const a=new tn(cs,ls,e,t);a.layers=this.layers,this.add(a);const o=new tn(cs,ls,e,t);o.layers=this.layers,this.add(o);const c=new tn(cs,ls,e,t);c.layers=this.layers,this.add(c);const l=new tn(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class $u extends Dt{constructor(e=[],t=bs,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $u(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=mn),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class wn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xl extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new U;class jc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ql=new U,Kl=new ct,Yl=new ct,wp=new U,jl=new Ge,Or=new U,oo=new Yn,$l=new Ge,co=new Ra;class Ep extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(s),e.ray.intersectsSphere(oo)!==!1&&($l.copy(s).invert(),co.copy(e.ray).applyMatrix4($l),!(this.boundingBox!==null&&co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Kl.fromBufferAttribute(s.attributes.skinIndex,e),Yl.fromBufferAttribute(s.attributes.skinWeight,e),Ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Yl.getComponent(r);if(a!==0){const o=Kl.getComponent(r);jl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(wp.copy(Ql).applyMatrix4(jl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ju extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=sn,u=sn,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=new Ge,Ap=new Ge;class $c{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ap;Zl.multiplyMatrices(o,t[r]),Zl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,Tn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zu),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Sc extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Ge,Jl=new Ge,Br=[],eh=new ci,Rp=new Ge,zs=new lt,Vs=new Yn;class Ln extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),eh.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Vs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Jl.multiplyMatrices(n,hs),zs.matrixWorld=Jl,zs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=r,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(s*this.count),s,this.count,Gc,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new U,Cp=new U,Pp=new Ke;class Fi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lo.subVectors(n,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pp.getNormalMatrix(e),s=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Yn,Lp=new Ye(.5,.5),zr=new U;class Zc{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-a,d-u,p-m,S-M).normalize(),s[1].setComponents(l+a,d+u,p+m,S+M).normalize(),s[2].setComponents(l+o,d+h,p+v,S+y).normalize(),s[3].setComponents(l-o,d-h,p-v,S-y).normalize(),n)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,d-f,p-g,S-_).normalize();else if(s[4].setComponents(l-c,d-f,p-g,S-_).normalize(),t===qn)s[5].setComponents(l+c,d+f,p+g,S+_).normalize();else if(t===ya)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=Lp.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ed extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new U,Ma=new U,th=new Ge,Hs=new Ra,Vr=new Yn,ho=new U,nh=new U;class Jc extends St{constructor(e=new Wt,t=new ed){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xa.distanceTo(Ma);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;th.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=u.getX(v),M=u.getX(v+1),y=Hr(this,e,Hs,c,p,M,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=Hr(this,e,Hs,c,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=Hr(this,e,Hs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Hr(this,e,Hs,c,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(xa.fromBufferAttribute(o,s),Ma.fromBufferAttribute(o,r),t.distanceSqToSegment(xa,Ma,ho,nh)>n)return;ho.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ho);if(!(l<e.near||l>e.far))return{distance:l,point:nh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ih=new U,sh=new U;class Ip extends Jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ih.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ih.distanceTo(sh);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kp extends Jc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class td extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new Ge,Tc=new Ra,Gr=new Yn,Wr=new U;class nd extends St{constructor(e=new Wt,t=new td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;rh.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,v=d;m<v;m++){const g=l.getX(m);Wr.fromBufferAttribute(h,g),ah(Wr,g,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,v=d;m<v;m++)Wr.fromBufferAttribute(h,m),ah(Wr,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ah(i,e,t,n,s,r,a){const o=Tc.distanceSqToPoint(i);if(o<t){const c=new U;Tc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class id extends Dt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sd extends Dt{constructor(e,t,n=Xi,s,r,a,o=sn,c=sn,l,u=lr,h=1){if(u!==lr&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rd extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends Wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new U,u=new Ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nr extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function M(){const _=new U,S=new U;let T=0;const E=(t-e)/n;for(let P=0;P<=r;P++){const x=[],b=P/r,L=b*(t-e)+e;for(let I=0;I<=s;I++){const D=I/s,H=D*c+o,N=Math.sin(H),z=Math.cos(H);S.x=L*N,S.y=-b*n+g,S.z=L*z,h.push(S.x,S.y,S.z),_.set(N,E,z).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-b),x.push(m++)}v.push(x)}for(let P=0;P<s;P++)for(let x=0;x<r;x++){const b=v[x][P],L=v[x+1][P],I=v[x+1][P+1],D=v[x][P+1];(e>0||x!==0)&&(u.push(b,L,D),T+=3),(t>0||x!==r-1)&&(u.push(L,I,D),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){const S=m,T=new Ye,E=new U;let P=0;const x=_===!0?e:t,b=_===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const L=m;for(let I=0;I<=s;I++){const H=I/s*c+o,N=Math.cos(H),z=Math.sin(H);E.x=x*z,E.y=g*b,E.z=x*N,h.push(E.x,E.y,E.z),f.push(0,b,0),T.x=N*.5+.5,T.y=z*.5*b+.5,d.push(T.x,T.y),m++}for(let I=0;I<s;I++){const D=S+I,H=L+I;_===!0?u.push(H,H+1,D):u.push(H+1,H,D),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends Wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new U,_=new U,S=new U;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],_),d(t[T+2],S),c(y,_,S,M)}function c(M,y,_,S){const T=S+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const x=M.clone().lerp(_,P/T),b=y.clone().lerp(_,P/T),L=T-P;for(let I=0;I<=L;I++)I===0&&P===T?E[P][I]=x:E[P][I]=x.clone().lerp(b,I/L)}for(let P=0;P<T;P++)for(let x=0;x<2*(T-P)-1;x++){const b=Math.floor(x/2);x%2===0?(f(E[P][b+1]),f(E[P+1][b]),f(E[P][b])):(f(E[P][b+1]),f(E[P+1][b+1]),f(E[P+1][b]))}}function l(M){const y=new U;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const M=new U;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;a.push(_,1-S)}m(),h()}function h(){for(let M=0;M<a.length;M+=6){const y=a[M+0],_=a[M+2],S=a[M+4],T=Math.max(y,_,S),E=Math.min(y,_,S);T>.9&&E<.1&&(y<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){const _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){const M=new U,y=new U,_=new U,S=new U,T=new Ye,E=new Ye,P=new Ye;for(let x=0,b=0;x<r.length;x+=9,b+=6){M.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),T.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),S.copy(M).add(y).add(_).divideScalar(3);const L=g(S);v(T,b+0,M,L),v(E,b+2,y,L),v(P,b+4,_,L)}}function v(M,y,_,S){S<0&&M.x===1&&(a[y]=M.x-1),_.x===0&&_.z===0&&(a[y]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.vertices,e.indices,e.radius,e.details)}}class nl extends tl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nl(e.radius,e.detail)}}class xi extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*f-a;for(let y=0;y<l;y++){const _=y*h-r;m.push(_,-M,0),v.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const y=M+l*p,_=M+l*(p+1),S=M+1+l*(p+1),T=M+1+l*p;d.push(y,_,T),d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bt extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dp extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Np extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function oh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ad(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class yr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Op extends yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=e,o=2*t-n;break;case wl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tl:a=e,c=2*n-t;break;case wl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,M=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+M*a[l+S]+y*a[c+S]+_*a[h+S];return r}}class Bp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class zp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Op(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Up(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=dr;class Ps extends Bn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ur;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class od extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}od.prototype.ValueTypeName="color";class Es extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}Es.prototype.ValueTypeName="number";class Vp extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Mt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class As extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vp(this.times,this.values,this.getValueSize(),e)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Bn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ur;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Bn{constructor(e,t,n,s){super(e,t,n,s)}}Rs.prototype.ValueTypeName="vector";class Hp{constructor(e="",t=-1,n=[],s=wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Fp(c);c=oh(c,1,u),l=oh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Es(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const g=[],p=[];ad(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){const y=f[m];g.push(y.time),p.push(y.morphTarget===v?1:0)}s.push(new Es(".morphTargetInfluence["+v+"]",g,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Rs,d+".position",f,"pos",s),n(As,d+".quaternion",f,"rot",s),n(Rs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Gp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return od;case"quaternion":return As;case"bool":case"boolean":return Ps;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Gp(i.type);if(i.times===void 0){const t=[],n=[];ad(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xp=new qp;class Is{constructor(e){this.manager=e!==void 0?e:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Qp extends Error{constructor(e,t){super(e),this.response=t}}class cd extends Is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let T=0,E=u.length;T<E;T++){const P=u[T];P.onProgress&&P.onProgress(S)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Qp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ri.add(`file:${e}`,l);const u=ti[e];delete ti[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const us=new WeakMap;class Kp extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=us.get(a);h===void 0&&(h=[],us.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=fr("img");function c(){u(),t&&t(this);const h=us.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}us.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),ri.remove(`image:${e}`);const f=us.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ld extends Is{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new Kp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ca extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yp extends Ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uo=new Ge,ch=new U,lh=new U;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jp extends il{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $p extends Ca{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hh=new Ge,Gs=new U,fo=new U;class Zp extends il{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,n.coordinateSystem,n.reversedDepth)}}class Jp extends Ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sl extends ju{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e0 extends il{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hd extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new e0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const po=new WeakMap;class t0 extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(po.has(a)===!0)s&&s(po.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),po.set(c,l),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class n0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rl="\\[\\]\\.:\\/",i0=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",s0="[^"+rl.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",al),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),l0=new RegExp("^"+r0+a0+o0+c0+"$"),h0=["material","materials","bones","map"];class u0{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){const t=l0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=u0;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function uh(i,e,t,n){const s=d0(n);switch(t){case Uu:return i*e;case Gc:return i*e/s.components*s.byteLength;case Wc:return i*e/s.components*s.byteLength;case Ou:return i*e*2/s.components*s.byteLength;case qc:return i*e*2/s.components*s.byteLength;case Fu:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Xc:return i*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case jo:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case Yo:return Math.max(i,8)*Math.max(e,8)/2;case $o:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(i){switch(i){case Qn:case Iu:return{byteLength:1,components:1};case or:case ku:case _r:return{byteLength:2,components:1};case Vc:case Hc:return{byteLength:2,components:4};case Xi:case zc:case Nn:return{byteLength:4,components:1};case Du:case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function ud(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function f0(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,dm=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,zg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:v0,alphatest_fragment:_0,alphatest_pars_fragment:y0,aomap_fragment:x0,aomap_pars_fragment:M0,batching_pars_vertex:b0,batching_vertex:S0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:E0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:I0,color_fragment:k0,color_pars_fragment:D0,color_pars_vertex:N0,color_vertex:U0,common:F0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:z0,displacementmap_vertex:V0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:W0,colorspace_pars_fragment:q0,envmap_fragment:X0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:K0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:am,envmap_vertex:j0,fog_vertex:$0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:cm,lights_phong_fragment:lm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:ym,map_fragment:xm,map_pars_fragment:Mm,map_particle_fragment:bm,map_particle_pars_fragment:Sm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Em,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:km,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Vm,packing:Hm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:qm,dithering_pars_fragment:Xm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:jm,shadowmap_vertex:$m,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:dg,background_vert:fg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:vg,cube_frag:_g,depth_vert:yg,depth_frag:xg,distanceRGBA_vert:Mg,distanceRGBA_frag:bg,equirect_vert:Sg,equirect_frag:Tg,linedashed_vert:wg,linedashed_frag:Eg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:kg,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Fg,meshphysical_frag:Og,meshtoon_vert:Bg,meshtoon_frag:zg,points_vert:Vg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:qg,sprite_frag:Xg},ve={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Jt([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Jt([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Jt([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Jt([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Jt([ve.lights,ve.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Xr={r:0,b:0,g:0},Ii=new Qt,Qg=new Ge;function Kg(i,e,t,n,s,r,a){const o=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const S=m(y);S===null?p(o,c):S&&S.isColor&&(p(S,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){const S=m(_);S&&(S.isCubeTexture||S.mapping===Aa)?(u===void 0&&(u=new lt(new en(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ws(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ii.copy(_.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Ii)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,(h!==S||f!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new lt(new xi(2,2),new Kn({name:"BackgroundMaterial",uniforms:ws(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(Xr,Ku(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,_,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:v,addToRenderList:g,dispose:M}}function Yg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,L,I,D,H){let N=!1;const z=h(D,I,L);r!==z&&(r=z,l(r.object)),N=d(b,D,I,H),N&&m(b,D,I,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(b,L,I,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,L,I){const D=I.wireframe===!0;let H=n[b.id];H===void 0&&(H={},n[b.id]=H);let N=H[L.id];N===void 0&&(N={},H[L.id]=N);let z=N[D];return z===void 0&&(z=f(c()),N[D]=z),z}function f(b){const L=[],I=[],D=[];for(let H=0;H<t;H++)L[H]=0,I[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,L,I,D){const H=r.attributes,N=L.attributes;let z=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){const ie=H[V];let le=N[V];if(le===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function m(b,L,I,D){const H={},N=L.attributes;let z=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){let ie=N[V];ie===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),H[V]=le,z++}r.attributes=H,r.attributesNum=z,r.index=D}function v(){const b=r.newAttributes;for(let L=0,I=b.length;L<I;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const I=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;I[b]=1,D[b]===0&&(i.enableVertexAttribArray(b),D[b]=1),H[b]!==L&&(i.vertexAttribDivisor(b,L),H[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let I=0,D=L.length;I<D;I++)L[I]!==b[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function y(b,L,I,D,H,N,z){z===!0?i.vertexAttribIPointer(b,L,I,H,N):i.vertexAttribPointer(b,L,I,D,H,N)}function _(b,L,I,D){v();const H=D.attributes,N=I.getAttributes(),z=L.defaultAttributeValues;for(const q in N){const V=N[q];if(V.location>=0){let K=H[q];if(K===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const ie=K.normalized,le=K.itemSize,pe=e.get(K);if(pe===void 0)continue;const ge=pe.buffer,Ve=pe.type,ke=pe.bytesPerElement,ee=Ve===i.INT||Ve===i.UNSIGNED_INT||K.gpuType===zc;if(K.isInterleavedBufferAttribute){const ae=K.data,_e=ae.stride,Fe=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<V.locationSize;Ae++)p(V.location+Ae,ae.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)g(V.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ae=0;Ae<V.locationSize;Ae++)y(V.location+Ae,le/V.locationSize,Ve,ie,_e*ke,(Fe+le/V.locationSize*Ae)*ke,ee)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,K.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,le/V.locationSize,Ve,ie,le*ke,le/V.locationSize*ae*ke,ee)}}else if(z!==void 0){const ie=z[q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}M()}function S(){P();for(const b in n){const L=n[b];for(const I in L){const D=L[I];for(const H in D)u(D[H].object),delete D[H];delete L[I]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const I in L){const D=L[I];for(const H in D)u(D[H].object),delete D[H];delete L[I]}delete n[b.id]}function E(b){for(const L in n){const I=n[L];if(I[b.id]===void 0)continue;const D=I[b.id];for(const H in D)u(D[H].object),delete D[H];delete I[b.id]}}function P(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function jg(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $g(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Nn&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:T}}function Zg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fi,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const M=r?0:n,y=M*4;let _=p.clippingState||null;c.value=_,_=u(m,f,y,d);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(h[y]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Jg(i){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=bs:o===Xo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Xo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new bp(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gs=4,dh=[.125,.215,.35,.446,.526,.582],zi=20,mo=new sl,fh=new ze;let go=null,vo=0,_o=0,yo=!1;const Oi=(1+Math.sqrt(5))/2,ds=1/Oi,ph=[new U(-Oi,ds,0),new U(Oi,ds,0),new U(-ds,0,Oi),new U(ds,0,Oi),new U(0,Oi,-ds),new U(0,Oi,ds),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],e1=new U;class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=e1}=r;go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,_o),this._renderer.xr.enabled=yo,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:_r,format:Tn,colorSpace:an,depthBuffer:!1},s=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(r)),this._blurMaterial=n1(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s,r){const c=new tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(fh),h.toneMapping=bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new Un({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new lt(new en,v);let p=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,p=!0):(v.color.copy(fh),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const S=this._cubeSize;Qr(s,_*S,y>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ph[(s-r-1)%ph.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let M=0;for(let E=0;E<zi;++E){const P=E/v,x=Math.exp(-P*P/2);p.push(x),E===0?M+=x:E<g&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const _=this._sizeLods[s],S=3*_*(s>y-gs?s-y+gs:0),T=4*(this._cubeSize-_);Qr(t,S,T,3*_,2*_),c.setRenderTarget(t),c.render(h,mo)}}function t1(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+dh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-gs?c=dh[a-i+gs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,P=T>2?0:-1,x=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(x,v*m*T),y.set(f,g*m*T);const b=[T,T,T,T,T,T];_.set(b,p*m*T)}const S=new Wt;S.setAttribute("position",new _t(M,v)),S.setAttribute("uv",new _t(y,g)),S.setAttribute("faceIndex",new _t(_,p)),e.push(S),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n1(i,e,t){const n=new Float32Array(zi),s=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function gh(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function i1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===Xo,u=c===bs||c===Ss;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new wc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new wc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function s1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r1(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let y=0,_=M.length;y<_;y+=3){const S=M[y+0],T=M[y+1],E=M[y+2];f.push(S,T,T,E,E,S)}}else if(m!==void 0){const M=m.array;v=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const S=y+0,T=y+1,E=y+2;f.push(S,T,T,E,E,S)}}else return;const g=new(Hu(f)?Qu:Xu)(f,1);g.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function a1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*v[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function o1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c1(i,e,t){const n=new WeakMap,s=new ct;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let x=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*S*4*h),E=new Gu(T,_,S,h);E.type=Nn,E.needsUpdate=!0;const P=y*4;for(let b=0;b<h;b++){const L=g[b],I=p[b],D=M[b],H=_*S*4*b;for(let N=0;N<L.count;N++){const z=N*P;d===!0&&(s.fromBufferAttribute(L,N),T[H+z+0]=s.x,T[H+z+1]=s.y,T[H+z+2]=s.z,T[H+z+3]=0),m===!0&&(s.fromBufferAttribute(I,N),T[H+z+4]=s.x,T[H+z+5]=s.y,T[H+z+6]=s.z,T[H+z+7]=0),v===!0&&(s.fromBufferAttribute(D,N),T[H+z+8]=s.x,T[H+z+9]=s.y,T[H+z+10]=s.z,T[H+z+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new Ye(_,S)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function l1(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const dd=new Dt,_h=new sd(1,1),fd=new Gu,pd=new ap,md=new $u,yh=[],xh=[],Mh=new Float32Array(16),bh=new Float32Array(9),Sh=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function p1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),Ut(t,n)}}function m1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),Ut(t,n)}}function g1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Ut(t,n)}}function v1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function x1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function M1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function T1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function w1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=Vu,r=_h):r=dd,t.setTexture2D(e||r,s)}function E1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pd,s)}function A1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||md,s)}function R1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fd,s)}function C1(i){switch(i){case 5126:return h1;case 35664:return u1;case 35665:return d1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return y1;case 35669:case 35673:return x1;case 5125:return M1;case 36294:return b1;case 36295:return S1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function P1(i,e){i.uniform1fv(this.addr,e)}function L1(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function I1(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function k1(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function D1(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N1(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U1(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F1(i,e){i.uniform1iv(this.addr,e)}function O1(i,e){i.uniform2iv(this.addr,e)}function B1(i,e){i.uniform3iv(this.addr,e)}function z1(i,e){i.uniform4iv(this.addr,e)}function V1(i,e){i.uniform1uiv(this.addr,e)}function H1(i,e){i.uniform2uiv(this.addr,e)}function G1(i,e){i.uniform3uiv(this.addr,e)}function W1(i,e){i.uniform4uiv(this.addr,e)}function q1(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||dd,r[a])}function X1(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pd,r[a])}function Q1(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||md,r[a])}function K1(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fd,r[a])}function Y1(i){switch(i){case 5126:return P1;case 35664:return L1;case 35665:return I1;case 35666:return k1;case 35674:return D1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return V1;case 36294:return H1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return K1}}class j1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C1(t.type)}}class $1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Th(i,e){i.seq.push(e),i.map[e.id]=e}function J1(i,e,t){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Th(t,l===void 0?new j1(o,i,e):new $1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Z1(o),Th(t,h)),t=h}}}class pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);J1(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const e9=37297;let t9=0;function n9(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eh=new Ke;function i9(i){nt._getMatrix(Eh,nt.workingColorSpace,i);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case _a:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ah(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+n9(i.getShaderSource(e),o)}else return r}function s9(i,e){const t=i9(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r9(i,e){let t;switch(e){case _f:t="Linear";break;case yf:t="Reinhard";break;case xf:t="Cineon";break;case Cu:t="ACESFilmic";break;case bf:t="AgX";break;case Sf:t="Neutral";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new U;function a9(){nt.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o9(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function c9(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l9(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Js(i){return i!==""}function Rh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h9=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(h9,d9)}const u9=new Map;function d9(i,e){let t=je[e];if(t===void 0){const n=u9.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const f9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(f9,p9)}function p9(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function m9(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function g9(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v9(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function _9(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case vf:e="ENVMAP_BLENDING_ADD";break}return e}function y9(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x9(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=m9(t),l=g9(t),u=v9(t),h=_9(t),f=y9(t),d=o9(t),m=c9(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Js).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(g=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?je.tonemapping_pars_fragment:"",t.toneMapping!==bi?r9("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,s9("linearToOutputTexel",t.outputColorSpace),a9(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=Ec(a),a=Rh(a,t),a=Ch(a,t),o=Ec(o),o=Rh(o,t),o=Ch(o,t),a=Ph(a),o=Ph(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+a,_=M+p+o,S=wh(s,s.VERTEX_SHADER,y),T=wh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(L){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(T)||"",N=I.trim(),z=D.trim(),q=H.trim();let V=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{const ie=Ah(s,S,"vertex"),le=Ah(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+ie+`
`+le)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||q==="")&&(K=!1);K&&(L.diagnostics={runnable:V,programLog:N,vertexShader:{log:z,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(S),s.deleteShader(T),P=new pa(s,v),x=l9(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,e9)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t9++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}let M9=0;class b9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S9(e),t.set(e,n)),n}}class S9{constructor(e){this.id=M9++,this.code=e,this.usedTimes=0}}function T9(i,e,t,n,s,r,a){const o=new Wu,c=new b9,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,L,I,D){const H=I.fog,N=D.geometry,z=x.isMeshStandardMaterial?I.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),V=q&&q.mapping===Aa?q.image.height:null,K=m[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=ie!==void 0?ie.length:0;let pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let ge,Ve,ke,ee;if(K){const tt=Gn[K];ge=tt.vertexShader,Ve=tt.fragmentShader}else ge=x.vertexShader,Ve=x.fragmentShader,c.update(x),ke=c.getVertexShaderID(x),ee=c.getFragmentShaderID(x);const ae=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Ae=D.isBatchedMesh===!0,We=!!x.map,yt=!!x.matcap,F=!!q,it=!!x.aoMap,Le=!!x.lightMap,Se=!!x.bumpMap,be=!!x.normalMap,rt=!!x.displacementMap,ye=!!x.emissiveMap,Ne=!!x.metalnessMap,dt=!!x.roughnessMap,ft=x.anisotropy>0,k=x.clearcoat>0,w=x.dispersion>0,C=x.iridescence>0,B=x.sheen>0,W=x.transmission>0,O=ft&&!!x.anisotropyMap,oe=k&&!!x.clearcoatMap,Y=k&&!!x.clearcoatNormalMap,te=k&&!!x.clearcoatRoughnessMap,re=C&&!!x.iridescenceMap,Z=C&&!!x.iridescenceThicknessMap,se=B&&!!x.sheenColorMap,xe=B&&!!x.sheenRoughnessMap,Te=!!x.specularMap,fe=!!x.specularColorMap,Xe=!!x.specularIntensityMap,G=W&&!!x.transmissionMap,ue=W&&!!x.thicknessMap,me=!!x.gradientMap,we=!!x.alphaMap,he=x.alphaTest>0,ce=!!x.alphaHash,Re=!!x.extensions;let qe=bi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(qe=i.toneMapping);const at={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:Ve,defines:x.defines,customVertexShaderID:ke,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:an,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:yt,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:Le,bumpMap:Se,normalMap:be,displacementMap:f&&rt,emissiveMap:ye,normalMapObjectSpace:be&&x.normalMapType===Cf,normalMapTangentSpace:be&&x.normalMapType===zu,metalnessMap:Ne,roughnessMap:dt,anisotropy:ft,anisotropyMap:O,clearcoat:k,clearcoatMap:oe,clearcoatNormalMap:Y,clearcoatRoughnessMap:te,dispersion:w,iridescence:C,iridescenceMap:re,iridescenceThicknessMap:Z,sheen:B,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:Te,specularColorMap:fe,specularIntensityMap:Xe,transmission:W,transmissionMap:G,thicknessMap:ue,gradientMap:me,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:ce,combine:x.combine,mapUv:We&&v(x.map.channel),aoMapUv:it&&v(x.aoMap.channel),lightMapUv:Le&&v(x.lightMap.channel),bumpMapUv:Se&&v(x.bumpMap.channel),normalMapUv:be&&v(x.normalMap.channel),displacementMapUv:rt&&v(x.displacementMap.channel),emissiveMapUv:ye&&v(x.emissiveMap.channel),metalnessMapUv:Ne&&v(x.metalnessMap.channel),roughnessMapUv:dt&&v(x.roughnessMap.channel),anisotropyMapUv:O&&v(x.anisotropyMap.channel),clearcoatMapUv:oe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Y&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(x.sheenRoughnessMap.channel),specularMapUv:Te&&v(x.specularMap.channel),specularColorMapUv:fe&&v(x.specularColorMap.channel),specularIntensityMapUv:Xe&&v(x.specularIntensityMap.channel),transmissionMapUv:G&&v(x.transmissionMap.channel),thicknessMapUv:ue&&v(x.thicknessMap.channel),alphaMapUv:we&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(be||ft),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(We||we),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Re&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(M(b,x),y(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const b=m[x.type];let L;if(b){const I=Gn[b];L=Yu.clone(I.uniforms)}else L=x.uniforms;return L}function S(x,b){let L;for(let I=0,D=u.length;I<D;I++){const H=u[I];if(H.cacheKey===b){L=H,++L.usedTimes;break}}return L===void 0&&(L=new x9(i,b,x,r),u.push(L)),L}function T(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function E(x){c.remove(x)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:P}}function w9(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function E9(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,f,d,m,v,g){const p=a(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,m,v,g){const p=a(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||E9),n.length>1&&n.sort(f||Ih),s.length>1&&s.sort(f||Ih)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function A9(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new kh,i.set(n,[a])):s>=r.length?(a=new kh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function R9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function C9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let P9=0;function L9(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I9(i){const e=new R9,t=C9(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new Ge,a=new Ge;function o(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,y=0,_=0,S=0,T=0,E=0;l.sort(L9);for(let x=0,b=l.length;x<b;x++){const L=l[x],I=L.color,D=L.intensity,H=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*D,h+=I.g*D,f+=I.b*D;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],D);E++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=z,d++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(I).multiplyScalar(D),z.distance=H,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[v]=z;const q=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=q.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=N,_++}v++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(I).multiplyScalar(D),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=z,g++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=z,m++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(D),z.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=d,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=E,n.version=P9++)}function c(l,u){let h=0,f=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Dh(i){const e=new I9(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function k9(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dh(i),e.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const D9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N9=`uniform sampler2D shadow_pass;
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
}`;function U9(i,e,t){let n=new Zc;const s=new Ye,r=new Ye,a=new ct,o=new Dp({depthPacking:Rf}),c=new Np,l={},u=t.maxTextureSize,h={[oi]:nn,[nn]:oi,[Sn]:Sn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:D9,fragmentShader:N9}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Wt;m.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(T,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Mi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==si&&this.type===si,H=p===si&&this.type!==si;for(let N=0,z=T.length;N<z;N++){const q=T[N],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const K=V.getFrameExtents();if(s.multiply(K),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||D===!0||H===!0){const le=this.type!==si?{minFilter:sn,magFilter:sn}:{};V.map!==null&&V.map.dispose(),V.map=new Qi(s.x,s.y,le),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ie=V.getViewportCount();for(let le=0;le<ie;le++){const pe=V.getViewport(le);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),I.viewport(a),V.updateMatrices(q,le),n=V.getFrustum(),_(E,P,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===si&&M(V,P),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(x,b,L)};function M(T,E){const P=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,d,v,null)}function y(T,E,P,x){let b=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=b.uuid,D=E.uuid;let H=l[I];H===void 0&&(H={},l[I]=H);let N=H[D];N===void 0&&(N=b.clone(),H[D]=N,E.addEventListener("dispose",S)),b=N}if(b.visible=E.visible,b.wireframe=E.wireframe,x===si?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=i.properties.get(b);I.light=P}return b}function _(T,E,P,x,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=e.update(T),H=T.material;if(Array.isArray(H)){const N=D.groups;for(let z=0,q=N.length;z<q;z++){const V=N[z],K=H[V.materialIndex];if(K&&K.visible){const ie=y(T,K,x,b);T.onBeforeShadow(i,T,E,P,D,ie,V),i.renderBufferDirect(P,null,D,ie,T,V),T.onAfterShadow(i,T,E,P,D,ie,V)}}}else if(H.visible){const N=y(T,H,x,b);T.onBeforeShadow(i,T,E,P,D,N,null),i.renderBufferDirect(P,null,D,N,T,null),T.onAfterShadow(i,T,E,P,D,N,null)}}const I=T.children;for(let D=0,H=I.length;D<H;D++)_(I[D],E,P,x,b)}function S(T){T.target.removeEventListener("dispose",S);for(const P in l){const x=l[P],b=T.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const F9={[Oo]:Bo,[zo]:Go,[Vo]:Wo,[Ms]:Ho,[Bo]:Oo,[Go]:zo,[Wo]:Vo,[Ho]:Ms};function O9(i,e){function t(){let G=!1;const ue=new ct;let me=null;const we=new ct(0,0,0,0);return{setMask:function(he){me!==he&&!G&&(i.colorMask(he,he,he,he),me=he)},setLocked:function(he){G=he},setClear:function(he,ce,Re,qe,at){at===!0&&(he*=qe,ce*=qe,Re*=qe),ue.set(he,ce,Re,qe),we.equals(ue)===!1&&(i.clearColor(he,ce,Re,qe),we.copy(ue))},reset:function(){G=!1,me=null,we.set(-1,0,0,0)}}}function n(){let G=!1,ue=!1,me=null,we=null,he=null;return{setReversed:function(ce){if(ue!==ce){const Re=e.get("EXT_clip_control");ce?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ce;const qe=he;he=null,this.setClear(qe)}},getReversed:function(){return ue},setTest:function(ce){ce?ae(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ce){me!==ce&&!G&&(i.depthMask(ce),me=ce)},setFunc:function(ce){if(ue&&(ce=F9[ce]),we!==ce){switch(ce){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ce}},setLocked:function(ce){G=ce},setClear:function(ce){he!==ce&&(ue&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){G=!1,me=null,we=null,he=null,ue=!1}}}function s(){let G=!1,ue=null,me=null,we=null,he=null,ce=null,Re=null,qe=null,at=null;return{setTest:function(tt){G||(tt?ae(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!G&&(i.stencilMask(tt),ue=tt)},setFunc:function(tt,hn,cn){(me!==tt||we!==hn||he!==cn)&&(i.stencilFunc(tt,hn,cn),me=tt,we=hn,he=cn)},setOp:function(tt,hn,cn){(ce!==tt||Re!==hn||qe!==cn)&&(i.stencilOp(tt,hn,cn),ce=tt,Re=hn,qe=cn)},setLocked:function(tt){G=tt},setClear:function(tt){at!==tt&&(i.clearStencil(tt),at=tt)},reset:function(){G=!1,ue=null,me=null,we=null,he=null,ce=null,Re=null,qe=null,at=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,M=null,y=null,_=null,S=null,T=null,E=new ze(0,0,0),P=0,x=!1,b=null,L=null,I=null,D=null,H=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=q>=2);let K=null,ie={};const le=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),ge=new ct().fromArray(le),Ve=new ct().fromArray(pe);function ke(G,ue,me,we){const he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(G,ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<me;Re++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ue+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}const ee={};ee[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ms),Se(!1),be(_l),ae(i.CULL_FACE),it(Mi);function ae(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function _e(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Fe(G,ue){return h[G]!==ue?(i.bindFramebuffer(G,ue),h[G]=ue,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ae(G,ue){let me=d,we=!1;if(G){me=f.get(ue),me===void 0&&(me=[],f.set(ue,me));const he=G.textures;if(me.length!==he.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Re=he.length;ce<Re;ce++)me[ce]=i.COLOR_ATTACHMENT0+ce;me.length=he.length,we=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,we=!0);we&&i.drawBuffers(me)}function We(G){return m!==G?(i.useProgram(G),m=G,!0):!1}const yt={[Bi]:i.FUNC_ADD,[Zd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};yt[ef]=i.MIN,yt[tf]=i.MAX;const F={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[of]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function it(G,ue,me,we,he,ce,Re,qe,at,tt){if(G===Mi){v===!0&&(_e(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),G!==$d){if(G!==g||tt!==x){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),tt)switch(G){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,y=null,S=null,T=null,E.set(0,0,0),P=0,g=G,x=tt}return}he=he||ue,ce=ce||me,Re=Re||we,(ue!==p||he!==_)&&(i.blendEquationSeparate(yt[ue],yt[he]),p=ue,_=he),(me!==M||we!==y||ce!==S||Re!==T)&&(i.blendFuncSeparate(F[me],F[we],F[ce],F[Re]),M=me,y=we,S=ce,T=Re),(qe.equals(E)===!1||at!==P)&&(i.blendColor(qe.r,qe.g,qe.b,at),E.copy(qe),P=at),g=G,x=!1}function Le(G,ue){G.side===Sn?_e(i.CULL_FACE):ae(i.CULL_FACE);let me=G.side===nn;ue&&(me=!me),Se(me),G.blending===vs&&G.transparent===!1?it(Mi):it(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const we=G.stencilWrite;o.setTest(we),we&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ye(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function be(G){G!==Yd?(ae(i.CULL_FACE),G!==L&&(G===_l?i.cullFace(i.BACK):G===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=G}function rt(G){G!==I&&(z&&i.lineWidth(G),I=G)}function ye(G,ue,me){G?(ae(i.POLYGON_OFFSET_FILL),(D!==ue||H!==me)&&(i.polygonOffset(ue,me),D=ue,H=me)):_e(i.POLYGON_OFFSET_FILL)}function Ne(G){G?ae(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function dt(G){G===void 0&&(G=i.TEXTURE0+N-1),K!==G&&(i.activeTexture(G),K=G)}function ft(G,ue,me){me===void 0&&(K===null?me=i.TEXTURE0+N-1:me=K);let we=ie[me];we===void 0&&(we={type:void 0,texture:void 0},ie[me]=we),(we.type!==G||we.texture!==ue)&&(K!==me&&(i.activeTexture(me),K=me),i.bindTexture(G,ue||ee[G]),we.type=G,we.texture=ue)}function k(){const G=ie[K];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(G){ge.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function xe(G){Ve.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ve.copy(G))}function Te(G,ue){let me=l.get(ue);me===void 0&&(me=new WeakMap,l.set(ue,me));let we=me.get(G);we===void 0&&(we=i.getUniformBlockIndex(ue,G.name),me.set(G,we))}function fe(G,ue){const we=l.get(ue).get(G);c.get(ue)!==we&&(i.uniformBlockBinding(ue,we,G.__bindingPointIndex),c.set(ue,we))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,ie={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,M=null,y=null,_=null,S=null,T=null,E=new ze(0,0,0),P=0,x=!1,b=null,L=null,I=null,D=null,H=null,ge.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:_e,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:We,setBlending:it,setMaterial:Le,setFlipSided:Se,setCullFace:be,setLineWidth:rt,setPolygonOffset:ye,setScissorTest:Ne,activeTexture:dt,bindTexture:ft,unbindTexture:k,compressedTexImage2D:w,compressedTexImage3D:C,texImage2D:re,texImage3D:Z,updateUBOMapping:Te,uniformBlockBinding:fe,texStorage2D:Y,texStorage3D:te,texSubImage2D:B,texSubImage3D:W,compressedTexSubImage2D:O,compressedTexSubImage3D:oe,scissor:se,viewport:xe,reset:Xe}}function B9(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(k,w){return d?new OffscreenCanvas(k,w):fr("canvas")}function v(k,w,C){let B=1;const W=ft(k);if((W.width>C||W.height>C)&&(B=C/Math.max(W.width,W.height)),B<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const O=Math.floor(B*W.width),oe=Math.floor(B*W.height);h===void 0&&(h=m(O,oe));const Y=w?m(O,oe):h;return Y.width=O,Y.height=oe,Y.getContext("2d").drawImage(k,0,0,O,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+O+"x"+oe+")."),Y}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),k;return k}function g(k){return k.generateMipmaps}function p(k){i.generateMipmap(k)}function M(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(k,w,C,B,W=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let O=w;if(w===i.RED&&(C===i.FLOAT&&(O=i.R32F),C===i.HALF_FLOAT&&(O=i.R16F),C===i.UNSIGNED_BYTE&&(O=i.R8)),w===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.R8UI),C===i.UNSIGNED_SHORT&&(O=i.R16UI),C===i.UNSIGNED_INT&&(O=i.R32UI),C===i.BYTE&&(O=i.R8I),C===i.SHORT&&(O=i.R16I),C===i.INT&&(O=i.R32I)),w===i.RG&&(C===i.FLOAT&&(O=i.RG32F),C===i.HALF_FLOAT&&(O=i.RG16F),C===i.UNSIGNED_BYTE&&(O=i.RG8)),w===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RG8UI),C===i.UNSIGNED_SHORT&&(O=i.RG16UI),C===i.UNSIGNED_INT&&(O=i.RG32UI),C===i.BYTE&&(O=i.RG8I),C===i.SHORT&&(O=i.RG16I),C===i.INT&&(O=i.RG32I)),w===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RGB8UI),C===i.UNSIGNED_SHORT&&(O=i.RGB16UI),C===i.UNSIGNED_INT&&(O=i.RGB32UI),C===i.BYTE&&(O=i.RGB8I),C===i.SHORT&&(O=i.RGB16I),C===i.INT&&(O=i.RGB32I)),w===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),C===i.UNSIGNED_INT&&(O=i.RGBA32UI),C===i.BYTE&&(O=i.RGBA8I),C===i.SHORT&&(O=i.RGBA16I),C===i.INT&&(O=i.RGBA32I)),w===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),w===i.RGBA){const oe=W?_a:nt.getTransfer(B);C===i.FLOAT&&(O=i.RGBA32F),C===i.HALF_FLOAT&&(O=i.RGBA16F),C===i.UNSIGNED_BYTE&&(O=oe===mt?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function _(k,w){let C;return k?w===null||w===Xi||w===cr?C=i.DEPTH24_STENCIL8:w===Nn?C=i.DEPTH32F_STENCIL8:w===or&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===cr?C=i.DEPTH_COMPONENT24:w===Nn?C=i.DEPTH_COMPONENT32F:w===or&&(C=i.DEPTH_COMPONENT16),C}function S(k,w){return g(k)===!0||k.isFramebufferTexture&&k.minFilter!==sn&&k.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function T(k){const w=k.target;w.removeEventListener("dispose",T),P(w),w.isVideoTexture&&u.delete(w)}function E(k){const w=k.target;w.removeEventListener("dispose",E),b(w)}function P(k){const w=n.get(k);if(w.__webglInit===void 0)return;const C=k.source,B=f.get(C);if(B){const W=B[w.__cacheKey];W.usedTimes--,W.usedTimes===0&&x(k),Object.keys(B).length===0&&f.delete(C)}n.remove(k)}function x(k){const w=n.get(k);i.deleteTexture(w.__webglTexture);const C=k.source,B=f.get(C);delete B[w.__cacheKey],a.memory.textures--}function b(k){const w=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(w.__webglFramebuffer[B]))for(let W=0;W<w.__webglFramebuffer[B].length;W++)i.deleteFramebuffer(w.__webglFramebuffer[B][W]);else i.deleteFramebuffer(w.__webglFramebuffer[B]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[B])}else{if(Array.isArray(w.__webglFramebuffer))for(let B=0;B<w.__webglFramebuffer.length;B++)i.deleteFramebuffer(w.__webglFramebuffer[B]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let B=0;B<w.__webglColorRenderbuffer.length;B++)w.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[B]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const C=k.textures;for(let B=0,W=C.length;B<W;B++){const O=n.get(C[B]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(C[B])}n.remove(k)}let L=0;function I(){L=0}function D(){const k=L;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),L+=1,k}function H(k){const w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function N(k,w){const C=n.get(k);if(k.isVideoTexture&&Ne(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&C.__version!==k.version){const B=k.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(C,k,w);return}}else k.isExternalTexture&&(C.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+w)}function z(k,w){const C=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&C.__version!==k.version){ee(C,k,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+w)}function q(k,w){const C=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&C.__version!==k.version){ee(C,k,w);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+w)}function V(k,w){const C=n.get(k);if(k.version>0&&C.__version!==k.version){ae(C,k,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+w)}const K={[wi]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},ie={[sn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},le={[Pf]:i.NEVER,[Uf]:i.ALWAYS,[Lf]:i.LESS,[Vu]:i.LEQUAL,[If]:i.EQUAL,[Nf]:i.GEQUAL,[kf]:i.GREATER,[Df]:i.NOTEQUAL};function pe(k,w){if(w.type===Nn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===mn||w.magFilter===la||w.magFilter===Zs||w.magFilter===Wn||w.minFilter===mn||w.minFilter===la||w.minFilter===Zs||w.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,K[w.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,ie[w.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==Zs&&w.minFilter!==Wn||w.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(k,w){let C=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",T));const B=w.source;let W=f.get(B);W===void 0&&(W={},f.set(B,W));const O=H(w);if(O!==k.__cacheKey){W[O]===void 0&&(W[O]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),W[O].usedTimes++;const oe=W[k.__cacheKey];oe!==void 0&&(W[k.__cacheKey].usedTimes--,oe.usedTimes===0&&x(w)),k.__cacheKey=O,k.__webglTexture=W[O].texture}return C}function Ve(k,w,C){return Math.floor(Math.floor(k/C)/w)}function ke(k,w,C,B){const O=k.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,C,B,w.data);else{O.sort((Z,se)=>Z.start-se.start);let oe=0;for(let Z=1;Z<O.length;Z++){const se=O[oe],xe=O[Z],Te=se.start+se.count,fe=Ve(xe.start,w.width,4),Xe=Ve(se.start,w.width,4);xe.start<=Te+1&&fe===Xe&&Ve(xe.start+xe.count-1,w.width,4)===fe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++oe,O[oe]=xe)}O.length=oe+1;const Y=i.getParameter(i.UNPACK_ROW_LENGTH),te=i.getParameter(i.UNPACK_SKIP_PIXELS),re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Z=0,se=O.length;Z<se;Z++){const xe=O[Z],Te=Math.floor(xe.start/4),fe=Math.ceil(xe.count/4),Xe=Te%w.width,G=Math.floor(Te/w.width),ue=fe,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Xe,G,ue,me,C,B,w.data)}k.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Y),i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function ee(k,w,C){let B=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(B=i.TEXTURE_3D);const W=ge(k,w),O=w.source;t.bindTexture(B,k.__webglTexture,i.TEXTURE0+C);const oe=n.get(O);if(O.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+C);const Y=nt.getPrimaries(nt.workingColorSpace),te=w.colorSpace===_i?null:nt.getPrimaries(w.colorSpace),re=w.colorSpace===_i||Y===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Z=v(w.image,!1,s.maxTextureSize);Z=dt(w,Z);const se=r.convert(w.format,w.colorSpace),xe=r.convert(w.type);let Te=y(w.internalFormat,se,xe,w.colorSpace,w.isVideoTexture);pe(B,w);let fe;const Xe=w.mipmaps,G=w.isVideoTexture!==!0,ue=oe.__version===void 0||W===!0,me=O.dataReady,we=S(w,Z);if(w.isDepthTexture)Te=_(w.format===hr,w.type),ue&&(G?t.texStorage2D(i.TEXTURE_2D,1,Te,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Te,Z.width,Z.height,0,se,xe,null));else if(w.isDataTexture)if(Xe.length>0){G&&ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,Xe[0].width,Xe[0].height);for(let he=0,ce=Xe.length;he<ce;he++)fe=Xe[he],G?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,se,xe,fe.data);w.generateMipmaps=!1}else G?(ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,Z.width,Z.height),me&&ke(w,Z,se,xe)):t.texImage2D(i.TEXTURE_2D,0,Te,Z.width,Z.height,0,se,xe,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,Xe[0].width,Xe[0].height,Z.depth);for(let he=0,ce=Xe.length;he<ce;he++)if(fe=Xe[he],w.format!==Tn)if(se!==null)if(G){if(me)if(w.layerUpdates.size>0){const Re=uh(fe.width,fe.height,w.format,w.type);for(const qe of w.layerUpdates){const at=fe.data.subarray(qe*Re/fe.data.BYTES_PER_ELEMENT,(qe+1)*Re/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,qe,fe.width,fe.height,1,se,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,fe.width,fe.height,Z.depth,se,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,fe.width,fe.height,Z.depth,se,xe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,Z.depth,0,se,xe,fe.data)}else{G&&ue&&t.texStorage2D(i.TEXTURE_2D,we,Te,Xe[0].width,Xe[0].height);for(let he=0,ce=Xe.length;he<ce;he++)fe=Xe[he],w.format!==Tn?se!==null?G?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(i.TEXTURE_2D,he,Te,fe.width,fe.height,0,se,xe,fe.data)}else if(w.isDataArrayTexture)if(G){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,Z.width,Z.height,Z.depth),me)if(w.layerUpdates.size>0){const he=uh(Z.width,Z.height,w.format,w.type);for(const ce of w.layerUpdates){const Re=Z.data.subarray(ce*he/Z.data.BYTES_PER_ELEMENT,(ce+1)*he/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Z.width,Z.height,1,se,xe,Re)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(w.isData3DTexture)G?(ue&&t.texStorage3D(i.TEXTURE_3D,we,Te,Z.width,Z.height,Z.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(w.isFramebufferTexture){if(ue)if(G)t.texStorage2D(i.TEXTURE_2D,we,Te,Z.width,Z.height);else{let he=Z.width,ce=Z.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,Te,he,ce,0,se,xe,null),he>>=1,ce>>=1}}else if(Xe.length>0){if(G&&ue){const he=ft(Xe[0]);t.texStorage2D(i.TEXTURE_2D,we,Te,he.width,he.height)}for(let he=0,ce=Xe.length;he<ce;he++)fe=Xe[he],G?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,se,xe,fe):t.texImage2D(i.TEXTURE_2D,he,Te,se,xe,fe);w.generateMipmaps=!1}else if(G){if(ue){const he=ft(Z);t.texStorage2D(i.TEXTURE_2D,we,Te,he.width,he.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,xe,Z)}else t.texImage2D(i.TEXTURE_2D,0,Te,se,xe,Z);g(w)&&p(B),oe.__version=O.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function ae(k,w,C){if(w.image.length!==6)return;const B=ge(k,w),W=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+C);const O=n.get(W);if(W.version!==O.__version||B===!0){t.activeTexture(i.TEXTURE0+C);const oe=nt.getPrimaries(nt.workingColorSpace),Y=w.colorSpace===_i?null:nt.getPrimaries(w.colorSpace),te=w.colorSpace===_i||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,Z=w.image[0]&&w.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!re&&!Z?se[ce]=v(w.image[ce],!0,s.maxCubemapSize):se[ce]=Z?w.image[ce].image:w.image[ce],se[ce]=dt(w,se[ce]);const xe=se[0],Te=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),Xe=y(w.internalFormat,Te,fe,w.colorSpace),G=w.isVideoTexture!==!0,ue=O.__version===void 0||B===!0,me=W.dataReady;let we=S(w,xe);pe(i.TEXTURE_CUBE_MAP,w);let he;if(re){G&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,xe.width,xe.height);for(let ce=0;ce<6;ce++){he=se[ce].mipmaps;for(let Re=0;Re<he.length;Re++){const qe=he[Re];w.format!==Tn?Te!==null?G?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,qe.width,qe.height,Te,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Xe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,qe.width,qe.height,Te,fe,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Xe,qe.width,qe.height,0,Te,fe,qe.data)}}}else{if(he=w.mipmaps,G&&ue){he.length>0&&we++;const ce=ft(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Z){G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,Te,fe,se[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,se[ce].width,se[ce].height,0,Te,fe,se[ce].data);for(let Re=0;Re<he.length;Re++){const at=he[Re].image[ce].image;G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,at.width,at.height,Te,fe,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Xe,at.width,at.height,0,Te,fe,at.data)}}else{G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te,fe,se[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,Te,fe,se[ce]);for(let Re=0;Re<he.length;Re++){const qe=he[Re];G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,Te,fe,qe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Xe,Te,fe,qe.image[ce])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),O.__version=W.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function _e(k,w,C,B,W,O){const oe=r.convert(C.format,C.colorSpace),Y=r.convert(C.type),te=y(C.internalFormat,oe,Y,C.colorSpace),re=n.get(w),Z=n.get(C);if(Z.__renderTarget=w,!re.__hasExternalTextures){const se=Math.max(1,w.width>>O),xe=Math.max(1,w.height>>O);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,O,te,se,xe,w.depth,0,oe,Y,null):t.texImage2D(W,O,te,se,xe,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,W,Z.__webglTexture,0,rt(w)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,W,Z.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(k,w,C){if(i.bindRenderbuffer(i.RENDERBUFFER,k),w.depthBuffer){const B=w.depthTexture,W=B&&B.isDepthTexture?B.type:null,O=_(w.stencilBuffer,W),oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=rt(w);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,O,w.width,w.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,O,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,O,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,k)}else{const B=w.textures;for(let W=0;W<B.length;W++){const O=B[W],oe=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),te=y(O.internalFormat,oe,Y,O.colorSpace),re=rt(w);C&&ye(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,te,w.width,w.height):ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(k,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(w.depthTexture);B.__renderTarget=w,(!B.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const W=B.__webglTexture,O=rt(w);if(w.depthTexture.format===lr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(w.depthTexture.format===hr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function We(k){const w=n.get(k),C=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){const B=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),B){const W=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,B.removeEventListener("dispose",W)};B.addEventListener("dispose",W),w.__depthDisposeCallback=W}w.__boundDepthTexture=B}if(k.depthTexture&&!w.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const B=k.texture.mipmaps;B&&B.length>0?Ae(w.__webglFramebuffer[0],k):Ae(w.__webglFramebuffer,k)}else if(C){w.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[B]),w.__webglDepthbuffer[B]===void 0)w.__webglDepthbuffer[B]=i.createRenderbuffer(),Fe(w.__webglDepthbuffer[B],k,!1);else{const W=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=w.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,O)}}else{const B=k.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Fe(w.__webglDepthbuffer,k,!1);else{const W=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(k,w,C){const B=n.get(k);w!==void 0&&_e(B.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&We(k)}function F(k){const w=k.texture,C=n.get(k),B=n.get(w);k.addEventListener("dispose",E);const W=k.textures,O=k.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=w.version,a.memory.textures++),O){C.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(w.mipmaps&&w.mipmaps.length>0){C.__webglFramebuffer[Y]=[];for(let te=0;te<w.mipmaps.length;te++)C.__webglFramebuffer[Y][te]=i.createFramebuffer()}else C.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){C.__webglFramebuffer=[];for(let Y=0;Y<w.mipmaps.length;Y++)C.__webglFramebuffer[Y]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,te=W.length;Y<te;Y++){const re=n.get(W[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(k.samples>0&&ye(k)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){const te=W[Y];C.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[Y]);const re=r.convert(te.format,te.colorSpace),Z=r.convert(te.type),se=y(te.internalFormat,re,Z,te.colorSpace,k.isXRRenderTarget===!0),xe=rt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,se,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,C.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(C.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),pe(i.TEXTURE_CUBE_MAP,w);for(let Y=0;Y<6;Y++)if(w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)_e(C.__webglFramebuffer[Y][te],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te);else _e(C.__webglFramebuffer[Y],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,te=W.length;Y<te;Y++){const re=W[Y],Z=n.get(re);let se=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(se=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),pe(se,re),_e(C.__webglFramebuffer,k,re,i.COLOR_ATTACHMENT0+Y,se,0),g(re)&&p(se)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Y=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,B.__webglTexture),pe(Y,w),w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)_e(C.__webglFramebuffer[te],k,w,i.COLOR_ATTACHMENT0,Y,te);else _e(C.__webglFramebuffer,k,w,i.COLOR_ATTACHMENT0,Y,0);g(w)&&p(Y),t.unbindTexture()}k.depthBuffer&&We(k)}function it(k){const w=k.textures;for(let C=0,B=w.length;C<B;C++){const W=w[C];if(g(W)){const O=M(k),oe=n.get(W).__webglTexture;t.bindTexture(O,oe),p(O),t.unbindTexture()}}}const Le=[],Se=[];function be(k){if(k.samples>0){if(ye(k)===!1){const w=k.textures,C=k.width,B=k.height;let W=i.COLOR_BUFFER_BIT;const O=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(k),Y=w.length>1;if(Y)for(let re=0;re<w.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const te=k.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<w.length;re++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Z=n.get(w[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,C,B,0,0,C,B,W,i.NEAREST),c===!0&&(Le.length=0,Se.length=0,Le.push(i.COLOR_ATTACHMENT0+re),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Le.push(O),Se.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<w.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Z=n.get(w[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&c){const w=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function rt(k){return Math.min(s.maxSamples,k.samples)}function ye(k){const w=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(k){const w=a.render.frame;u.get(k)!==w&&(u.set(k,w),k.update())}function dt(k,w){const C=k.colorSpace,B=k.format,W=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||C!==an&&C!==_i&&(nt.getTransfer(C)===mt?(B!==Tn||W!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),w}function ft(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ye}function z9(i,e){function t(n,s=_i){let r;const a=nt.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===ku)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===_r)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===Tn)return i.RGBA;if(n===lr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===Ou)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Xc)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===Ko||n===Yo||n===jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Zo)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===_c||n===yc||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const V9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H9=`
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

}`;class G9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:V9,fragmentShader:H9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W9 extends Cs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new G9,p={},M=t.getContextAttributes();let y=null,_=null;const S=[],T=[],E=new Ye;let P=null;const x=new tn;x.viewport=new ct;const b=new tn;b.viewport=new ct;const L=[x,b],I=new n0;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=S[ee];return ae===void 0&&(ae=new ao,S[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=S[ee];return ae===void 0&&(ae=new ao,S[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=S[ee];return ae===void 0&&(ae=new ao,S[ee]=ae),ae.getHandSpace()};function N(ee){const ae=T.indexOf(ee.inputSource);if(ae===-1)return;const _e=S[ae];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,l||a),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let ee=0;ee<S.length;ee++){const ae=T[ee];ae!==null&&(T[ee]=null,S[ee].disconnect(ae))}D=null,H=null,g.reset();for(const ee in p)delete p[ee];e.setRenderTarget(y),d=null,f=null,h=null,s=null,_=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?hr:lr,Fe=M.stencil?cr:Xi);const We={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Qi(f.textureWidth,f.textureHeight,{format:Tn,type:Qn,depthTexture:new sd(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Qi(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(ee){for(let ae=0;ae<ee.removed.length;ae++){const _e=ee.removed[ae],Fe=T.indexOf(_e);Fe>=0&&(T[Fe]=null,S[Fe].disconnect(_e))}for(let ae=0;ae<ee.added.length;ae++){const _e=ee.added[ae];let Fe=T.indexOf(_e);if(Fe===-1){for(let We=0;We<S.length;We++)if(We>=T.length){T.push(_e),Fe=We;break}else if(T[We]===null){T[We]=_e,Fe=We;break}if(Fe===-1)break}const Ae=S[Fe];Ae&&Ae.connect(_e)}}const V=new U,K=new U;function ie(ee,ae,_e){V.setFromMatrixPosition(ae.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const Fe=V.distanceTo(K),Ae=ae.projectionMatrix.elements,We=_e.projectionMatrix.elements,yt=Ae[14]/(Ae[10]-1),F=Ae[14]/(Ae[10]+1),it=(Ae[9]+1)/Ae[5],Le=(Ae[9]-1)/Ae[5],Se=(Ae[8]-1)/Ae[0],be=(We[8]+1)/We[0],rt=yt*Se,ye=yt*be,Ne=Fe/(-Se+be),dt=Ne*-Se;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(dt),ee.translateZ(Ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ft=yt+Ne,k=F+Ne,w=rt-dt,C=ye+(Fe-dt),B=it*F/k*ft,W=Le*F/k*ft;ee.projectionMatrix.makePerspective(w,C,B,W,ft,k),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function le(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ae=ee.near,_e=ee.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),I.near=b.near=x.near=ae,I.far=b.far=x.far=_e,(D!==I.near||H!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,H=I.far),I.layers.mask=ee.layers.mask|6,x.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Fe=ee.parent,Ae=I.cameras;le(I,Fe);for(let We=0;We<Ae.length;We++)le(Ae[We],Fe);Ae.length===2?ie(I,x,b):I.projectionMatrix.copy(x.projectionMatrix),pe(ee,I,Fe)};function pe(ee,ae,_e){_e===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ts*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(ee){return p[ee]};let ge=null;function Ve(ee,ae){if(u=ae.getViewerPose(l||a),m=ae,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Fe=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let F=0;F<_e.length;F++){const it=_e[F];let Le=null;if(d!==null)Le=d.getViewport(it);else{const be=h.getViewSubImage(f,it);Le=be.viewport,F===0&&(e.setRenderTargetTextures(_,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(_))}let Se=L[F];Se===void 0&&(Se=new tn,Se.layers.enable(F),Se.viewport=new ct,L[F]=Se),Se.matrix.fromArray(it.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(it.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Le.x,Le.y,Le.width,Le.height),F===0&&(I.matrix.copy(Se.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(Se)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const F=h.getDepthInformation(_e[0]);F&&F.isValid&&F.texture&&g.init(F,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let F=0;F<_e.length;F++){const it=_e[F].camera;if(it){let Le=p[it];Le||(Le=new rd,p[it]=Le);const Se=h.getCameraImage(it);Le.sourceTexture=Se}}}}for(let _e=0;_e<S.length;_e++){const Fe=T[_e],Ae=S[_e];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ae,l||a)}ge&&ge(ee,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const ke=new ud;ke.setAnimationLoop(Ve),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}}const ki=new Qt,q9=new Ge;function X9(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ku(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(q9.makeRotationFromEuler(ki)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q9(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const _=y.program;n.uniformBlockBinding(M,_)}function l(M,y){let _=s[M.id];_===void 0&&(m(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",g));const S=y.program;n.updateUBOMapping(M,S);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function u(M){const y=h();M.__bindingPointIndex=y;const _=i.createBuffer(),S=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],_=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,E=_.length;T<E;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,b=P.length;x<b;x++){const L=P[x];if(d(L,T,x,S)===!0){const I=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let N=0;N<D.length;N++){const z=D[N],q=v(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+H,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,_,S){const T=M.value,E=y+"_"+_;if(S[E]===void 0)return typeof T=="number"||typeof T=="boolean"?S[E]=T:S[E]=T.clone(),!0;{const P=S[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return S[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(M){const y=M.uniforms;let _=0;const S=16;for(let E=0,P=y.length;E<P;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,L=x.length;b<L;b++){const I=x[b],D=Array.isArray(I.value)?I.value:[I.value];for(let H=0,N=D.length;H<N;H++){const z=D[H],q=v(z),V=_%S,K=V%q.boundary,ie=V+K;_+=K,ie!==0&&S-ie<q.storage&&(_+=S-ie),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=q.storage}}}const T=_%S;return T>0&&(_+=S-T),M.__size=_,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class K9{constructor(e={}){const{canvas:t=Jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=Lt;let T=0,E=0,P=null,x=-1,b=null;const L=new ct,I=new ct;let D=null;const H=new ze(0);let N=0,z=t.width,q=t.height,V=1,K=null,ie=null;const le=new ct(0,0,z,q),pe=new ct(0,0,z,q);let ge=!1;const Ve=new Zc;let ke=!1,ee=!1;const ae=new Ge,_e=new U,Fe=new ct,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function yt(){return P===null?V:1}let F=n;function it(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",he,!1),F===null){const X="webgl2";if(F=it(X,R),F===null)throw it(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,Se,be,rt,ye,Ne,dt,ft,k,w,C,B,W,O,oe,Y,te,re,Z,se,xe,Te,fe,Xe;function G(){Le=new s1(F),Le.init(),Te=new z9(F,Le),Se=new $g(F,Le,e,Te),be=new O9(F,Le),Se.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),rt=new o1(F),ye=new w9,Ne=new B9(F,Le,be,ye,Se,Te,rt),dt=new Jg(_),ft=new i1(_),k=new f0(F),fe=new Yg(F,k),w=new r1(F,k,rt,fe),C=new l1(F,w,k,rt),Z=new c1(F,Se,Ne),Y=new Zg(ye),B=new T9(_,dt,ft,Le,Se,fe,Y),W=new X9(_,ye),O=new A9,oe=new k9(Le),re=new Kg(_,dt,ft,be,C,d,c),te=new U9(_,C,Se),Xe=new Q9(F,rt,Se,be),se=new jg(F,Le,rt),xe=new a1(F,Le,rt),rt.programs=B.programs,_.capabilities=Se,_.extensions=Le,_.properties=ye,_.renderLists=O,_.shadowMap=te,_.state=be,_.info=rt}G();const ue=new W9(_,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(z,q,!1))},this.getSize=function(R){return R.set(z,q)},this.setSize=function(R,X,j=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,q=X,t.width=Math.floor(R*V),t.height=Math.floor(X*V),j===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(z*V,q*V).floor()},this.setDrawingBufferSize=function(R,X,j){z=R,q=X,V=j,t.width=Math.floor(R*j),t.height=Math.floor(X*j),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,X,j,$){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,X,j,$),be.viewport(L.copy(le).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,X,j,$){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,X,j,$),be.scissor(I.copy(pe).multiplyScalar(V).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){be.setScissorTest(ge=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,j=!0){let $=0;if(R){let Q=!1;if(P!==null){const de=P.texture.format;Q=de===Xc||de===qc||de===Wc}if(Q){const de=P.texture.type,Me=de===Qn||de===Xi||de===or||de===cr||de===Vc||de===Hc,Ce=re.getClearColor(),Ee=re.getClearAlpha(),Be=Ce.r,He=Ce.g,Ue=Ce.b;Me?(m[0]=Be,m[1]=He,m[2]=Ue,m[3]=Ee,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=Be,v[1]=He,v[2]=Ue,v[3]=Ee,F.clearBufferiv(F.COLOR,0,v))}else $|=F.COLOR_BUFFER_BIT}X&&($|=F.DEPTH_BUFFER_BIT),j&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",he,!1),re.dispose(),O.dispose(),oe.dispose(),ye.dispose(),dt.dispose(),ft.dispose(),C.dispose(),fe.dispose(),Xe.dispose(),B.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",cn),ue.removeEventListener("sessionend",dl),Ei.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=rt.autoReset,X=te.enabled,j=te.autoUpdate,$=te.needsUpdate,Q=te.type;G(),rt.autoReset=R,te.enabled=X,te.autoUpdate=j,te.needsUpdate=$,te.type=Q}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const X=R.target;X.removeEventListener("dispose",ce),Re(X)}function Re(R){qe(R),ye.remove(R)}function qe(R){const X=ye.get(R).programs;X!==void 0&&(X.forEach(function(j){B.releaseProgram(j)}),R.isShaderMaterial&&B.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,j,$,Q,de){X===null&&(X=Ae);const Me=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=Gd(R,X,j,$,Q);be.setMaterial($,Me);let Ee=j.index,Be=1;if($.wireframe===!0){if(Ee=w.getWireframeAttribute(j),Ee===void 0)return;Be=2}const He=j.drawRange,Ue=j.attributes.position;let et=He.start*Be,pt=(He.start+He.count)*Be;de!==null&&(et=Math.max(et,de.start*Be),pt=Math.min(pt,(de.start+de.count)*Be)),Ee!==null?(et=Math.max(et,0),pt=Math.min(pt,Ee.count)):Ue!=null&&(et=Math.max(et,0),pt=Math.min(pt,Ue.count));const Rt=pt-et;if(Rt<0||Rt===1/0)return;fe.setup(Q,$,Ce,j,Ee);let xt,gt=se;if(Ee!==null&&(xt=k.get(Ee),gt=xe,gt.setIndex(xt)),Q.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*yt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(Q.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),be.setLineWidth(Oe*yt()),Q.isLineSegments?gt.setMode(F.LINES):Q.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else Q.isPoints?gt.setMode(F.POINTS):Q.isSprite&&gt.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Oe=Q._multiDrawStarts,Tt=Q._multiDrawCounts,ot=Q._multiDrawCount,un=Ee?k.get(Ee).bytesPerElement:1,ji=ye.get($).currentProgram.getUniforms();for(let dn=0;dn<ot;dn++)ji.setValue(F,"_gl_DrawID",dn),gt.render(Oe[dn]/un,Tt[dn])}else if(Q.isInstancedMesh)gt.renderInstances(et,Rt,Q.count);else if(j.isInstancedBufferGeometry){const Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,Oe);gt.renderInstances(et,Rt,Tt)}else gt.render(et,Rt)};function at(R,X,j){R.transparent===!0&&R.side===Sn&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,Mr(R,X,j),R.side=oi,R.needsUpdate=!0,Mr(R,X,j),R.side=Sn):Mr(R,X,j)}this.compile=function(R,X,j=null){j===null&&(j=R),p=oe.get(j),p.init(X),y.push(p),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),R!==j&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();const $=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const de=Q.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ce=de[Me];at(Ce,j,Q),$.add(Ce)}else at(de,j,Q),$.add(de)}),p=y.pop(),$},this.compileAsync=function(R,X,j=null){const $=this.compile(R,X,j);return new Promise(Q=>{function de(){if($.forEach(function(Me){ye.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){Q(R);return}setTimeout(de,10)}Le.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let tt=null;function hn(R){tt&&tt(R)}function cn(){Ei.stop()}function dl(){Ei.start()}const Ei=new ud;Ei.setAnimationLoop(hn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){tt=R,ue.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},ue.addEventListener("sessionstart",cn),ue.addEventListener("sessionend",dl),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,X,P),p=oe.get(R,y.length),p.init(X),y.push(p),ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ve.setFromProjectionMatrix(ae,qn,X.reversedDepth),ee=this.localClippingEnabled,ke=Y.init(this.clippingPlanes,ee),g=O.get(R,M.length),g.init(),M.push(g),ue.enabled===!0&&ue.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Ua(de,X,-1/0,_.sortObjects)}Ua(R,X,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(K,ie),We=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,We&&re.addToRenderList(g,R),this.info.render.frame++,ke===!0&&Y.beginShadows();const j=p.state.shadowsArray;te.render(j,R,X),ke===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,Q=g.transmissive;if(p.setupLights(),X.isArrayCamera){const de=X.cameras;if(Q.length>0)for(let Me=0,Ce=de.length;Me<Ce;Me++){const Ee=de[Me];pl($,Q,R,Ee)}We&&re.render(R);for(let Me=0,Ce=de.length;Me<Ce;Me++){const Ee=de[Me];fl(g,R,Ee,Ee.viewport)}}else Q.length>0&&pl($,Q,R,X),We&&re.render(R),fl(g,R,X);P!==null&&E===0&&(Ne.updateMultisampleRenderTarget(P),Ne.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(_,R,X),fe.resetDefaultState(),x=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],ke===!0&&Y.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ua(R,X,j,$){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ve.intersectsSprite(R)){$&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ae);const Me=C.update(R),Ce=R.material;Ce.visible&&g.push(R,Me,Ce,j,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ve.intersectsObject(R))){const Me=C.update(R),Ce=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Fe.copy(Me.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(ae)),Array.isArray(Ce)){const Ee=Me.groups;for(let Be=0,He=Ee.length;Be<He;Be++){const Ue=Ee[Be],et=Ce[Ue.materialIndex];et&&et.visible&&g.push(R,Me,et,j,Fe.z,Ue)}}else Ce.visible&&g.push(R,Me,Ce,j,Fe.z,null)}}const de=R.children;for(let Me=0,Ce=de.length;Me<Ce;Me++)Ua(de[Me],X,j,$)}function fl(R,X,j,$){const Q=R.opaque,de=R.transmissive,Me=R.transparent;p.setupLightsView(j),ke===!0&&Y.setGlobalState(_.clippingPlanes,j),$&&be.viewport(L.copy($)),Q.length>0&&xr(Q,X,j),de.length>0&&xr(de,X,j),Me.length>0&&xr(Me,X,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function pl(R,X,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Qi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?_r:Qn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=p.state.transmissionRenderTarget[$.id],Me=$.viewport||L;de.setSize(Me.z*_.transmissionResolutionScale,Me.w*_.transmissionResolutionScale);const Ce=_.getRenderTarget(),Ee=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(de),_.getClearColor(H),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),We&&re.render(j);const He=_.toneMapping;_.toneMapping=bi;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ke===!0&&Y.setGlobalState(_.clippingPlanes,$),xr(R,j,$),Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de),Le.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let pt=0,Rt=X.length;pt<Rt;pt++){const xt=X[pt],gt=xt.object,Oe=xt.geometry,Tt=xt.material,ot=xt.group;if(Tt.side===Sn&&gt.layers.test($.layers)){const un=Tt.side;Tt.side=nn,Tt.needsUpdate=!0,ml(gt,j,$,Oe,Tt,ot),Tt.side=un,Tt.needsUpdate=!0,et=!0}}et===!0&&(Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de))}_.setRenderTarget(Ce,Ee,Be),_.setClearColor(H,N),Ue!==void 0&&($.viewport=Ue),_.toneMapping=He}function xr(R,X,j){const $=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,de=R.length;Q<de;Q++){const Me=R[Q],Ce=Me.object,Ee=Me.geometry,Be=Me.group;let He=Me.material;He.allowOverride===!0&&$!==null&&(He=$),Ce.layers.test(j.layers)&&ml(Ce,X,j,Ee,He,Be)}}function ml(R,X,j,$,Q,de){R.onBeforeRender(_,X,j,$,Q,de),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(_,X,j,$,R,de),Q.transparent===!0&&Q.side===Sn&&Q.forceSinglePass===!1?(Q.side=nn,Q.needsUpdate=!0,_.renderBufferDirect(j,X,$,Q,R,de),Q.side=oi,Q.needsUpdate=!0,_.renderBufferDirect(j,X,$,Q,R,de),Q.side=Sn):_.renderBufferDirect(j,X,$,Q,R,de),R.onAfterRender(_,X,j,$,Q,de)}function Mr(R,X,j){X.isScene!==!0&&(X=Ae);const $=ye.get(R),Q=p.state.lights,de=p.state.shadowsArray,Me=Q.state.version,Ce=B.getParameters(R,Q.state,de,X,j),Ee=B.getProgramCacheKey(Ce);let Be=$.programs;$.environment=R.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(R.isMeshStandardMaterial?ft:dt).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",ce),Be=new Map,$.programs=Be);let He=Be.get(Ee);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===Me)return vl(R,Ce),He}else Ce.uniforms=B.getUniforms(R),R.onBeforeCompile(Ce,_),He=B.acquireProgram(Ce,Ee),Be.set(Ee,He),$.uniforms=Ce.uniforms;const Ue=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=Y.uniform),vl(R,Ce),$.needsLights=qd(R),$.lightsStateVersion=Me,$.needsLights&&(Ue.ambientLightColor.value=Q.state.ambient,Ue.lightProbe.value=Q.state.probe,Ue.directionalLights.value=Q.state.directional,Ue.directionalLightShadows.value=Q.state.directionalShadow,Ue.spotLights.value=Q.state.spot,Ue.spotLightShadows.value=Q.state.spotShadow,Ue.rectAreaLights.value=Q.state.rectArea,Ue.ltc_1.value=Q.state.rectAreaLTC1,Ue.ltc_2.value=Q.state.rectAreaLTC2,Ue.pointLights.value=Q.state.point,Ue.pointLightShadows.value=Q.state.pointShadow,Ue.hemisphereLights.value=Q.state.hemi,Ue.directionalShadowMap.value=Q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ue.spotShadowMap.value=Q.state.spotShadowMap,Ue.spotLightMatrix.value=Q.state.spotLightMatrix,Ue.spotLightMap.value=Q.state.spotLightMap,Ue.pointShadowMap.value=Q.state.pointShadowMap,Ue.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function gl(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=pa.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function vl(R,X){const j=ye.get(R);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Gd(R,X,j,$,Q){X.isScene!==!0&&(X=Ae),Ne.resetTextureUnits();const de=X.fog,Me=$.isMeshStandardMaterial?X.environment:null,Ce=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:an,Ee=($.isMeshStandardMaterial?ft:dt).get($.envMap||Me),Be=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,He=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color;let Rt=bi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=_.toneMapping);const xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=xt!==void 0?xt.length:0,Oe=ye.get($),Tt=p.state.lights;if(ke===!0&&(ee===!0||R!==b)){const jt=R===b&&$.id===x;Y.setState($,R,jt)}let ot=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Tt.state.version||Oe.outputColorSpace!==Ce||Q.isBatchedMesh&&Oe.batching===!1||!Q.isBatchedMesh&&Oe.batching===!0||Q.isBatchedMesh&&Oe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Oe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Oe.instancing===!1||!Q.isInstancedMesh&&Oe.instancing===!0||Q.isSkinnedMesh&&Oe.skinning===!1||!Q.isSkinnedMesh&&Oe.skinning===!0||Q.isInstancedMesh&&Oe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Oe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Oe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Oe.instancingMorph===!1&&Q.morphTexture!==null||Oe.envMap!==Ee||$.fog===!0&&Oe.fog!==de||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Y.numPlanes||Oe.numIntersection!==Y.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==He||Oe.morphTargets!==Ue||Oe.morphNormals!==et||Oe.morphColors!==pt||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==gt)&&(ot=!0):(ot=!0,Oe.__version=$.version);let un=Oe.currentProgram;ot===!0&&(un=Mr($,X,Q));let ji=!1,dn=!1,Ns=!1;const wt=un.getUniforms(),gn=Oe.uniforms;if(be.useProgram(un.program)&&(ji=!0,dn=!0,Ns=!0),$.id!==x&&(x=$.id,dn=!0),ji||b!==R){be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),wt.setValue(F,"projectionMatrix",R.projectionMatrix),wt.setValue(F,"viewMatrix",R.matrixWorldInverse);const ln=wt.map.cameraPosition;ln!==void 0&&ln.setValue(F,_e.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&wt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,dn=!0,Ns=!0)}if(Q.isSkinnedMesh){wt.setOptional(F,Q,"bindMatrix"),wt.setOptional(F,Q,"bindMatrixInverse");const jt=Q.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),wt.setValue(F,"boneTexture",jt.boneTexture,Ne))}Q.isBatchedMesh&&(wt.setOptional(F,Q,"batchingTexture"),wt.setValue(F,"batchingTexture",Q._matricesTexture,Ne),wt.setOptional(F,Q,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",Q._indirectTexture,Ne),wt.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",Q._colorsTexture,Ne));const vn=j.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Z.update(Q,j,un),(dn||Oe.receiveShadow!==Q.receiveShadow)&&(Oe.receiveShadow=Q.receiveShadow,wt.setValue(F,"receiveShadow",Q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(gn.envMap.value=Ee,gn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),dn&&(wt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&Wd(gn,Ns),de&&$.fog===!0&&W.refreshFogUniforms(gn,de),W.refreshMaterialUniforms(gn,$,V,q,p.state.transmissionRenderTarget[R.id]),pa.upload(F,gl(Oe),gn,Ne)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pa.upload(F,gl(Oe),gn,Ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&wt.setValue(F,"center",Q.center),wt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),wt.setValue(F,"normalMatrix",Q.normalMatrix),wt.setValue(F,"modelMatrix",Q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const jt=$.uniformsGroups;for(let ln=0,Fa=jt.length;ln<Fa;ln++){const Ai=jt[ln];Xe.update(Ai,un),Xe.bind(Ai,un)}}return un}function Wd(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function qd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,X,j){const $=ye.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ye.get(R.texture).__webglTexture=X,ye.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const j=ye.get(R);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};const Xd=F.createFramebuffer();this.setRenderTarget=function(R,X=0,j=0){P=R,T=X,E=j;let $=!0,Q=null,de=!1,Me=!1;if(R){const Ee=ye.get(R);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Ee.__webglFramebuffer===void 0)Ne.setupRenderTarget(R);else if(Ee.__hasExternalTextures)Ne.rebindTextures(R,ye.get(R.texture).__webglTexture,ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ue=R.depthTexture;if(Ee.__boundDepthTexture!==Ue){if(Ue!==null&&ye.has(Ue)&&(R.width!==Ue.image.width||R.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const He=ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Q=He[X][j]:Q=He[X],de=!0):R.samples>0&&Ne.useMultisampledRTT(R)===!1?Q=ye.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?Q=He[j]:Q=He,L.copy(R.viewport),I.copy(R.scissor),D=R.scissorTest}else L.copy(le).multiplyScalar(V).floor(),I.copy(pe).multiplyScalar(V).floor(),D=ge;if(j!==0&&(Q=Xd),be.bindFramebuffer(F.FRAMEBUFFER,Q)&&$&&be.drawBuffers(R,Q),be.viewport(L),be.scissor(I),be.setScissorTest(D),de){const Ee=ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee.__webglTexture,j)}else if(Me){const Ee=X;for(let Be=0;Be<R.textures.length;Be++){const He=ye.get(R.textures[Be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Be,He.__webglTexture,j,Ee)}}else if(R!==null&&j!==0){const Ee=ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ee.__webglTexture,j)}x=-1},this.readRenderTargetPixels=function(R,X,j,$,Q,de,Me,Ce=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){be.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Be=R.textures[Ce],He=Be.format,Ue=Be.type;if(!Se.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-$&&j>=0&&j<=R.height-Q&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ce),F.readPixels(X,j,$,Q,Te.convert(He),Te.convert(Ue),de))}finally{const Be=P!==null?ye.get(P).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,X,j,$,Q,de,Me,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(X>=0&&X<=R.width-$&&j>=0&&j<=R.height-Q){be.bindFramebuffer(F.FRAMEBUFFER,Ee);const Be=R.textures[Ce],He=Be.format,Ue=Be.type;if(!Se.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,de.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ce),F.readPixels(X,j,$,Q,Te.convert(He),Te.convert(Ue),0);const pt=P!==null?ye.get(P).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,pt);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ep(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,de),F.deleteBuffer(et),F.deleteSync(Rt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,j=0){const $=Math.pow(2,-j),Q=Math.floor(R.image.width*$),de=Math.floor(R.image.height*$),Me=X!==null?X.x:0,Ce=X!==null?X.y:0;Ne.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,Me,Ce,Q,de),be.unbindTexture()};const Qd=F.createFramebuffer(),Kd=F.createFramebuffer();this.copyTextureToTexture=function(R,X,j=null,$=null,Q=0,de=null){de===null&&(Q!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=Q,Q=0):de=0);let Me,Ce,Ee,Be,He,Ue,et,pt,Rt;const xt=R.isCompressedTexture?R.mipmaps[de]:R.image;if(j!==null)Me=j.max.x-j.min.x,Ce=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,He=j.min.y,Ue=j.isBox3?j.min.z:0;else{const vn=Math.pow(2,-Q);Me=Math.floor(xt.width*vn),Ce=Math.floor(xt.height*vn),R.isDataArrayTexture?Ee=xt.depth:R.isData3DTexture?Ee=Math.floor(xt.depth*vn):Ee=1,Be=0,He=0,Ue=0}$!==null?(et=$.x,pt=$.y,Rt=$.z):(et=0,pt=0,Rt=0);const gt=Te.convert(X.format),Oe=Te.convert(X.type);let Tt;X.isData3DTexture?(Ne.setTexture3D(X,0),Tt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ne.setTexture2DArray(X,0),Tt=F.TEXTURE_2D_ARRAY):(Ne.setTexture2D(X,0),Tt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const ot=F.getParameter(F.UNPACK_ROW_LENGTH),un=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ji=F.getParameter(F.UNPACK_SKIP_PIXELS),dn=F.getParameter(F.UNPACK_SKIP_ROWS),Ns=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const wt=R.isDataArrayTexture||R.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const vn=ye.get(R),jt=ye.get(X),ln=ye.get(vn.__renderTarget),Fa=ye.get(jt.__renderTarget);be.bindFramebuffer(F.READ_FRAMEBUFFER,ln.__webglFramebuffer),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fa.__webglFramebuffer);for(let Ai=0;Ai<Ee;Ai++)wt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,Q,Ue+Ai),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(X).__webglTexture,de,Rt+Ai)),F.blitFramebuffer(Be,He,Me,Ce,et,pt,Me,Ce,F.DEPTH_BUFFER_BIT,F.NEAREST);be.bindFramebuffer(F.READ_FRAMEBUFFER,null),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ye.has(R)){const vn=ye.get(R),jt=ye.get(X);be.bindFramebuffer(F.READ_FRAMEBUFFER,Qd),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,Kd);for(let ln=0;ln<Ee;ln++)wt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Ue+ln):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vn.__webglTexture,Q),gn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,de,Rt+ln):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,de),Q!==0?F.blitFramebuffer(Be,He,Me,Ce,et,pt,Me,Ce,F.COLOR_BUFFER_BIT,F.NEAREST):gn?F.copyTexSubImage3D(Tt,de,et,pt,Rt+ln,Be,He,Me,Ce):F.copyTexSubImage2D(Tt,de,et,pt,Be,He,Me,Ce);be.bindFramebuffer(F.READ_FRAMEBUFFER,null),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Tt,de,et,pt,Rt,Me,Ce,Ee,gt,Oe,xt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,de,et,pt,Rt,Me,Ce,Ee,gt,xt.data):F.texSubImage3D(Tt,de,et,pt,Rt,Me,Ce,Ee,gt,Oe,xt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,de,et,pt,Me,Ce,gt,Oe,xt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,de,et,pt,xt.width,xt.height,gt,xt.data):F.texSubImage2D(F.TEXTURE_2D,de,et,pt,Me,Ce,gt,Oe,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,un),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ns),de===0&&X.generateMipmaps&&F.generateMipmap(Tt),be.unbindTexture()},this.initRenderTarget=function(R){ye.get(R).__webglFramebuffer===void 0&&Ne.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ne.setTextureCube(R,0):R.isData3DTexture?Ne.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ne.setTexture2DArray(R,0):Ne.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,be.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class mr extends lt{constructor(){const e=mr.SkyShader,t=new Kn({name:e.name,uniforms:Yu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:nn,depthWrite:!1});super(new en(1,1,1),t),this.isSky=!0}}mr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};const Mo={low:{dpr:1,shadow:0,msaa:!1,maxCars:10,crowd:2500,far:1500},medium:{dpr:1.25,shadow:1024,msaa:!0,maxCars:20,crowd:6e3,far:2400},high:{dpr:1.5,shadow:2048,msaa:!0,maxCars:40,crowd:12e3,far:3200},ultra:{dpr:2,shadow:4096,msaa:!0,maxCars:40,crowd:2e4,far:4e3}},Nh={day:{elev:48,azim:215,turb:3,ray:1.1,mie:.004,g:.8,exposure:.62,sun:3.2,sunCol:16773596,hemiSky:12375807,hemiGround:7043658,hemi:.55,fog:12176870,fogD:18e-5,lamps:!1},sunset:{elev:4.5,azim:255,turb:6,ray:1.6,mie:.006,g:.85,exposure:.55,sun:2.6,sunCol:16751178,hemiSky:16751979,hemiGround:3815978,hemi:.42,fog:14719602,fogD:26e-5,lamps:!0},night:{elev:-9,azim:215,turb:1,ray:.2,mie:.001,g:.7,exposure:.5,sun:0,sunCol:9414911,hemiSky:2371930,hemiGround:724242,hemi:.5,fog:659488,fogD:32e-5,lamps:!0}};class Y9{constructor(e,t={}){this.canvas=e,this.quality=t.quality||"high";const n=Mo[this.quality];this.renderer=new K9({canvas:e,antialias:n.msaa,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=Lt,this.renderer.toneMapping=Cu,this.renderer.shadowMap.enabled=n.shadow>0,this.renderer.shadowMap.type=Au,this.scene=new Xl,this.camera=new tn(62,16/9,.3,n.far),this.sky=new mr,this.sky.scale.setScalar(2e4),this.scene.add(this.sky),this.sunDir=new U,this.sun=new hd(16777215,3),this.sun.castShadow=n.shadow>0,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new Yp(12375807,7043658,.5),this.scene.add(this.hemi),this.scene.fog=new Yc(12176870,2e-4),this.pmrem=new wc(this.renderer),this.timeKey="day",this.envRT=null,this.setQuality(this.quality),this.resize(),this.setTime("day"),addEventListener("resize",()=>this.resize())}setQuality(e){const t=Mo[e]||Mo.high;if(this.quality=e,this.q=t,this.renderer.shadowMap.enabled=t.shadow>0,this.sun.castShadow=t.shadow>0,t.shadow){const n=this.sun.shadow;n.mapSize.set(t.shadow,t.shadow);const s=90;n.camera.left=-s,n.camera.right=s,n.camera.top=s,n.camera.bottom=-s,n.camera.near=10,n.camera.far=500,n.bias=-25e-5,n.normalBias=.35,n.map&&(n.map.dispose(),n.map=null)}this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.resize(),this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.camera.fov=this.camera.aspect<1?78:this.baseFov||62,this.camera.updateProjectionMatrix()}setTime(e,t="clear"){const n=Nh[e]||Nh.day;this.timeKey=e,this.weather=t;const s=this.sky.material.uniforms,r=t==="overcast"||t==="rain";s.turbidity.value=r?14:n.turb,s.rayleigh.value=r?.6:n.ray,s.mieCoefficient.value=r?.02:n.mie,s.mieDirectionalG.value=n.g;const a=Si.degToRad(90-n.elev),o=Si.degToRad(n.azim);this.sunDir.setFromSphericalCoords(1,a,o),s.sunPosition.value.copy(this.sunDir),this.sun.color.set(n.sunCol),this.sun.intensity=n.sun*(r?.35:1),e==="night"&&(this.sunDir.set(-.4,.8,.45).normalize(),this.sun.intensity=.9),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemi*(r?1.25:1),this.renderer.toneMappingExposure=n.exposure*(r?1.15:1),this.scene.fog.color.set(r?10134704:n.fog),this.scene.fog.density=n.fogD*(r?2.2:1),this.lampsOn=n.lamps,this.bakeEnv(),this.onTime&&this.onTime(e,t)}bakeEnv(){const e=new Xl,t=new mr;t.scale.setScalar(2e4),e.add(t);for(const s of Object.keys(this.sky.material.uniforms))if(t.material.uniforms[s]&&this.sky.material.uniforms[s].value!==void 0){const r=this.sky.material.uniforms[s].value;t.material.uniforms[s].value=r.clone?r.clone():r}const n=this.envRT;this.envRT=this.pmrem.fromScene(e,0,1,5e4),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=this.timeKey==="night"?.25:.9,n&&n.dispose(),t.material.dispose(),t.geometry.dispose()}followSun(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,220),this.sun.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}const yn=Si.degToRad,Yr={halfW:11,apron:8,wallH:1.3,infieldLimit:70,bulge:0,lake:0},bt={americas:{...Yr,id:"americas",short:"Americas",name:"Americas Superspeedway",kind:"Superspeedway",miles:2.5,straight:1e3,radius:300,bulge:34,maxBank:yn(30),frontBank:yn(7),backBank:yn(3),lake:1,standRows:1,laps:[3,5,8,12],crowdK:1,pit:{limit:29,stalls:43}},lonestar:{...Yr,id:"lonestar",short:"Lone Star",name:"Lone Star Motor Speedway",kind:"Intermediate tri-oval",miles:1.5,straight:450,radius:240,halfW:11,bulge:16,maxBank:yn(24),frontBank:yn(5),backBank:yn(4),lake:.7,standRows:.85,laps:[5,8,12,20],crowdK:.8,pit:{limit:25,stalls:36}},piedmont:{...Yr,id:"piedmont",short:"Piedmont",name:"Piedmont Mile",kind:"One-mile flat oval",miles:1,straight:340,radius:150,halfW:10.5,apron:7,maxBank:yn(12),frontBank:yn(4),backBank:yn(4),lake:.3,standRows:.7,laps:[8,12,18,28],crowdK:.65,pit:{limit:22,stalls:30}},thunder:{...Yr,id:"thunder",short:"Thunder Bowl",name:"Thunder Bowl",kind:"Short track bullring",miles:.53,straight:190,radius:80,halfW:9.5,apron:6,maxBank:yn(26),frontBank:yn(8),backBank:yn(8),lake:0,standRows:.55,laps:[15,25,40,60],crowdK:.5,infieldLimit:40,pit:{limit:18,stalls:22}}},gd=["americas","lonestar","piedmont","thunder"],vd=bt.americas;function jr(i,e,t=!0){const n=i.length,s=new Float64Array(n),r=Math.ceil(e*3),a=[];let o=0;for(let c=-r;c<=r;c++){const l=Math.exp(-(c*c)/(2*e*e));a.push(l),o+=l}for(let c=0;c<n;c++){let l=0;for(let u=-r;u<=r;u++)l+=i[(c+u+n*8)%n]*a[u+r];s[c]=l/o}return s}function j9(i=vd){const{straight:e,radius:t,bulge:n}=i,s=[],r=1,a=e/2,o=(N,z,q,V)=>{const K=Math.hypot(q-N,V-z),ie=Math.max(1,Math.round(K/r));for(let le=0;le<ie;le++)s.push([N+(q-N)*le/ie,z+(V-z)*le/ie])},c=(N,z,q,V)=>{const K=Math.abs(V-q)*t,ie=Math.max(2,Math.round(K/r));for(let le=0;le<ie;le++){const pe=q+(V-q)*le/ie;s.push([N+t*Math.cos(pe),z+t*Math.sin(pe)])}};o(0,t,a,t),c(a,0,Math.PI/2,-Math.PI/2),o(a,-t,-a,-t),c(-a,0,-Math.PI/2,-3*Math.PI/2),o(-a,t,0,t);for(const N of s)if(N[1]>t-1&&Math.abs(N[0])<a){const z=(N[0]+a)/(2*a);N[1]+=n*Math.pow(Math.sin(Math.PI*z),2)}const l=s.length,u=Float64Array.from(s,N=>N[0]),h=Float64Array.from(s,N=>N[1]),f=Si.clamp(t*.23,17,70),d=jr(u,f),m=jr(h,f),v=new Float64Array(l+1);for(let N=0;N<l;N++){const z=(N+1)%l;v[N+1]=v[N]+Math.hypot(d[z]-d[N],m[z]-m[N])}const g=v[l],p=Math.round(g/3.8),M=g/p,y=new Float64Array(p),_=new Float64Array(p);let S=0;for(let N=0;N<p;N++){const z=N*M;for(;v[S+1]<z;)S++;const q=(z-v[S])/(v[S+1]-v[S]),V=(S+1)%l;y[N]=d[S]+(d[V]-d[S])*q,_[N]=m[S]+(m[V]-m[S])*q}const T=new Float64Array(p),E=new Float64Array(p),P=new Float64Array(p);for(let N=0;N<p;N++){const z=(N+p-1)%p,q=(N+1)%p,V=y[q]-y[z],K=_[q]-_[z],ie=Math.hypot(V,K);T[N]=V/ie,E[N]=K/ie}for(let N=0;N<p;N++){const z=(N+p-1)%p,q=(N+1)%p,V=T[z]*E[q]-E[z]*T[q];P[N]=-Math.asin(Si.clamp(V,-1,1))/(2*M)}const x=jr(P,Math.max(2,Math.round(6*t/300))),b=.85/t,L=new Float64Array(p);for(let N=0;N<p;N++){const z=Si.clamp(x[N]/b,0,1),q=z*z*(3-2*z),K=(_[N]>t*.6?1:0)?i.frontBank:i.backBank;L[N]=K+(i.maxBank-K)*q}const I=jr(L,Math.max(4,Math.round(22*t/300))),D=new Float64Array(p);for(let N=0;N<p;N++)D[N]=i.halfW*Math.sin(I[N]);const H=new Float64Array(p);for(let N=0;N<p;N++)H[N]=N*M;return{N:p,ds:M,length:g,px:y,pz:_,tx:T,tz:E,k:x,bank:I,yc:D,s:H,cfg:i}}class $9{constructor(e=vd){this.cfg=e,this.id=e.id||"americas",this.name=e.name||"",this.d=j9(e),this.N=this.d.N,this.length=this.d.length,this.ds=this.d.ds}wrapS(e){const t=this.length;return(e%t+t)%t}idx(e){return Math.floor(this.wrapS(e)/this.ds)%this.N}at(e){const t=this.d,n=this.wrapS(e)/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,a=n-Math.floor(n),o=t.px[s]+(t.px[r]-t.px[s])*a,c=t.pz[s]+(t.pz[r]-t.pz[s])*a;let l=t.tx[s]+(t.tx[r]-t.tx[s])*a,u=t.tz[s]+(t.tz[r]-t.tz[s])*a;const h=Math.hypot(l,u);return l/=h,u/=h,{x:o,z:c,tx:l,tz:u,rx:-u,rz:l,bank:t.bank[s]+(t.bank[r]-t.bank[s])*a,yc:t.yc[s]+(t.yc[r]-t.yc[s])*a,k:t.k[s],i:s}}point(e,t,n={}){const s=this.at(e),r=this.cfg.halfW,a=Math.cos(s.bank),o=Math.sin(s.bank);return t>=-r?(n.x=s.x+s.rx*t*a,n.z=s.z+s.rz*t*a,n.y=s.yc+t*o):(n.x=s.x+s.rx*(-r*a+(t+r)),n.z=s.z+s.rz*(-r*a+(t+r)),n.y=0),n.heading=Math.atan2(s.tx,s.tz),n.bank=s.bank,n}query(e,t,n,s={}){const r=this.d,a=this.N;let o=1e18,c=n|0;const l=n===void 0?a:24;for(let P=-l;P<=l;P++){const x=((n|0)+P+a*4)%a,b=e-r.px[x],L=t-r.pz[x],I=b*b+L*L;I<o&&(o=I,c=x)}if(n!==void 0){if(o>2500)for(let P=0;P<a;P++){const x=e-r.px[P],b=t-r.pz[P],L=x*x+b*b;L<o&&(o=L,c=P)}}let u=c,h=(c+1)%a,f=r.px[h]-r.px[u],d=r.pz[h]-r.pz[u],m=((e-r.px[u])*f+(t-r.pz[u])*d)/(f*f+d*d);m<0&&(h=u,u=(c+a-1)%a,f=r.px[h]-r.px[u],d=r.pz[h]-r.pz[u],m=((e-r.px[u])*f+(t-r.pz[u])*d)/(f*f+d*d)),m=Si.clamp(m,0,1);const v=this.wrapS((u===a-1&&h===0?a-1+m:u+m)*this.ds),g=this.at(v),p=e-g.x,M=t-g.z,y=p*g.rx+M*g.rz,_=this.cfg.halfW,S=Math.cos(g.bank),T=Math.sin(g.bank),E=y>=-_*S?y/S:y+_*S-_;return s.i=c,s.s=v,s.u=E,s.lat=y,s.bank=g.bank,s.tx=g.tx,s.tz=g.tz,s.k=g.k,s.rx=g.rx,s.rz=g.rz,s.surface=E>_+.4?"wall":E>=-_?"track":E>=-_-this.cfg.apron?"apron":"grass",s.y=E>=-_?g.yc+Math.min(E,_+.4)*T:0,s}}function Di(i,e,t={}){const{N:n}=i,{uvU:s=12,uvV:r=12,yOff:a=0,color:o=null,wrapUV:c=!0,sFrom:l=0,sTo:u=n,yFn:h=null,closed:f=!0}=t,d=e.length,m=u-l+(f&&l===0&&u===n?1:0),v=new Float32Array(d*m*3),g=new Float32Array(d*m*2),p=o?new Float32Array(d*m*3):null,M={};for(let S=0;S<m;S++){const T=l+S,E=T%n*i.ds+(T>=n?i.length:0);for(let P=0;P<d;P++){i.point(T%n*i.ds,e[P],M);const x=S*d+P;if(v[x*3]=M.x,v[x*3+1]=M.y+a+(h?h(e[P],T%n):0),v[x*3+2]=M.z,g[x*2]=e[P]/s,g[x*2+1]=T*i.ds/r,p){const b=o(e[P],T%n,E);p[x*3]=b[0],p[x*3+1]=b[1],p[x*3+2]=b[2]}}}const y=[];for(let S=0;S<m-1;S++)for(let T=0;T<d-1;T++){const E=S*d+T,P=E+1,x=(S+1)*d+T,b=x+1;y.push(E,P,x,P,b,x)}const _=new Wt;return _.setAttribute("position",new _t(v,3)),_.setAttribute("uv",new _t(g,2)),p&&_.setAttribute("color",new _t(p,3)),_.setIndex(y),_.computeVertexNormals(),_}const Ie=(i,e,t)=>i<e?e:i>t?t:i,ni=(i,e,t)=>i+(e-i)*t,sr=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function ba(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ac=["hood","roof","door","quarter","trunk","bumper"],ma={hood:"Hood",roof:"Roof",door:"Doors",quarter:"Rear quarters",trunk:"Trunk",bumper:"Front bumper"},gr=[{id:"dustyfork",name:"Dusty Fork Diner",tier:1,payout:120,slots:["door","quarter","bumper"],colors:["#f2b134","#7a2e1b"]},{id:"greaseline",name:"Greaseline Garage",tier:1,payout:140,slots:["door","trunk","bumper"],colors:["#e8e8e8","#d1342c"]},{id:"cornerbolt",name:"Corner Bolt Supply",tier:1,payout:150,slots:["quarter","door","trunk"],colors:["#2f6fdb","#f4f4f4"]},{id:"vantafuel",name:"Vanta Fuel",tier:2,payout:320,slots:["hood","door","trunk"],colors:["#13c28a","#0b2a24"]},{id:"halo",name:"Halo Energy",tier:2,payout:360,slots:["hood","roof","quarter"],colors:["#ffd400","#1a1a1a"]},{id:"ironbark",name:"Ironbark Tools",tier:2,payout:340,slots:["door","quarter","hood"],colors:["#e2552c","#222"]},{id:"meridian",name:"Meridian Mobile",tier:3,payout:720,slots:["hood","roof","door"],colors:["#00a3e0","#ffffff"]},{id:"stratus",name:"Stratus Air",tier:3,payout:760,slots:["hood","trunk","quarter"],colors:["#5b4bd6","#ffffff"]},{id:"kestrel",name:"Kestrel Tires",tier:3,payout:700,slots:["door","bumper","quarter"],colors:["#111","#ffcf1b"]},{id:"apexgrid",name:"Apex Grid Power",tier:4,payout:1500,slots:["hood","roof","door"],colors:["#ff2d55","#0d0d0d"]},{id:"northstar",name:"Northstar Motors",tier:4,payout:1600,slots:["hood","door","trunk"],colors:["#c0c6cc","#0a2a66"]}],Ds=i=>gr.find(e=>e.id===i)||null,Z9={},J9=Z9&&"./"||"./",ev=new ld;function fs(i,e=!0,t=!1,n=8){const s=ev.load(J9+"assets/tex/"+i);return e&&(s.wrapS=s.wrapT=wi),s.anisotropy=n,t&&(s.colorSpace=Lt),s}function $r(i,e,t,n=!1,s=!0){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new id(r);return n&&(a.wrapS=a.wrapT=wi),s&&(a.colorSpace=Lt),a.anisotropy=8,a}function tv(i,e,t=()=>{}){const n=new wn;n.name="track";const s=ba(2026),r=i.cfg,a=r.halfW,o=i.N,c=8,l=r.straight/2,u=l+r.radius,h=r.radius+(r.bulge||0)*.5,f=i.length,d=Math.PI*r.radius,m=Math.max(.35,u/800),v=fs("asphalt_track_col.jpg",!0,!0,c),g=fs("asphalt_track_nrm.jpg",!0,!1,c),p=fs("asphalt_track_rgh.jpg",!0,!1,c),M=new Bt({map:v,normalMap:g,roughnessMap:p,roughness:1,metalness:0,vertexColors:!0,normalScale:new Ye(.8,.8)}),y=fs("sparse_grass_col.jpg",!0,!0,c),_=fs("sparse_grass_nrm.jpg"),S=fs("sparse_grass_rgh.jpg");for(const C of[y,_,S])C.repeat.set(220,220);const T=new Bt({map:y,normalMap:_,roughnessMap:S,color:12175258,roughness:1}),E=$r(512,128,(C,B,W)=>{C.fillStyle="#b9b9b4",C.fillRect(0,0,B,W);for(let O=0;O<2600;O++)C.fillStyle=`rgba(${90+s()*70|0},${90+s()*70|0},${88+s()*70|0},0.12)`,C.fillRect(s()*B,s()*W,2+s()*3,1+s()*3);C.fillStyle="rgba(255,255,255,0.9)",C.fillRect(0,W*.28,B,W*.2),C.fillStyle="rgba(0,0,0,0.18)",C.fillRect(0,W*.78,B,W*.22),C.fillStyle="rgba(0,0,0,0.35)";for(let O=0;O<B;O+=128)C.fillRect(O,0,2,W)},!0);new Bt({map:E,roughness:.85,metalness:0});const P=new Bt({color:9408911,roughness:.95}),x=(C,B={})=>new Bt(Object.assign({color:C,roughness:.55,metalness:.05},B)),b=[];for(let C=0;C<=16;C++)b.push(-a+2*a*C/16);const L=(C,B,W)=>{const O=.5+.5*Math.sin(W*.011+1.3)*Math.sin(W*.0037),oe=Math.exp(-Math.pow((C+3.5)/3.2,2))*.28,Y=Math.exp(-Math.pow((C-4.2)/3,2))*.22,te=Math.exp(-Math.pow((C-a)/1.4,2))*.14+Math.exp(-Math.pow((C+a)/1.4,2))*.08,re=.78+.18*O,Z=Math.max(.3,re-oe-Y-te);return[Z,Z,Z*1.02]},I=new lt(Di(i,b,{uvU:7,uvV:7,color:L}),M);I.receiveShadow=!0,I.name="road",n.add(I);const D=[];for(let C=0;C<=4;C++)D.push(-a-r.apron*C/4);const H=M.clone();H.color=new ze(12171958);const N=new lt(Di(i,D.slice().reverse(),{uvU:7,uvV:7,color:()=>[.95,.95,.95]}),H);N.receiveShadow=!0,n.add(N),t(.15);const z=C=>new Un({color:C,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),q=(C,B,W,O=.03)=>{const oe=new lt(Di(i,[C,B],{yOff:O}),z(W));return n.add(oe),oe};q(a-.55,a-.3,15987696),q(-a+.3,-a+.55,15987696),q(-a-.05,-a+.12,15909376),q(-a-.5,-a-.33,15909376);const V=$r(256,32,(C,B,W)=>{for(let oe=0;oe<16;oe++)for(let Y=0;Y<2;Y++)C.fillStyle=(oe+Y)%2?"#111":"#fff",C.fillRect(B/16*oe,W/2*Y,B/16,W/2)});{const C=new xi(2*a,1.6),B=new lt(C,new Un({map:V,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),W=i.point(0,0,{}),O=i.at(0);B.position.set(W.x,W.y+.04,W.z),B.rotation.order="YXZ",B.rotation.y=Math.atan2(O.tx,O.tz),B.rotation.x=-Math.PI/2,B.rotation.z=0,B.rotation.set(0,0,0);const oe=new Ge,Y=new U(O.tx,0,O.tz),te=new U(-O.rx*Math.sin(O.bank),Math.cos(O.bank),-O.rz*Math.sin(O.bank)),re=new U().crossVectors(Y,te).normalize();oe.makeBasis(re,Y,te),B.quaternion.setFromRotationMatrix(oe),n.add(B)}t(.25);const K=a+.5,ie=(()=>{const C=Di(i,[0,1],{uvU:1,uvV:1});C.attributes.position,C.attributes.uv;const B=o+1,W=new Float32Array(B*2*3),O=new Float32Array(B*2*2),oe={};for(let re=0;re<B;re++){const Z=re%o;i.point(Z*i.ds,K,oe);const se=re*2;W[se*3]=oe.x,W[se*3+1]=oe.y-.2,W[se*3+2]=oe.z,W[(se+1)*3]=oe.x,W[(se+1)*3+1]=oe.y+r.wallH,W[(se+1)*3+2]=oe.z,O[se*2]=re*i.ds/4,O[se*2+1]=0,O[(se+1)*2]=re*i.ds/4,O[(se+1)*2+1]=1}const Y=[];for(let re=0;re<B-1;re++){const Z=re*2,se=Z+1,xe=Z+2,Te=Z+3;Y.push(Z,se,xe,se,Te,xe)}const te=new Wt;return te.setAttribute("position",new _t(W,3)),te.setAttribute("uv",new _t(O,2)),te.setIndex(Y),te.computeVertexNormals(),te})(),le=new lt(ie,new Bt({map:E,roughness:.85,side:Sn}));le.receiveShadow=!0,le.castShadow=!0,n.add(le),n.add(new lt(Di(i,[K-.2,K+.5],{yOff:r.wallH}),P));const pe=[];for(let C=0;C<=6;C++)pe.push(K+.5+C*2.5);const ge=Di(i,pe,{uvU:8,uvV:8,yFn:(C,B)=>{const W=i.d.yc[B]+K*Math.sin(i.d.bank[B]),O=(C-(K+.5))/15;return-Math.min(1,O)*(W+.2)-.1+(O>0,0)}});{const C=ge.attributes.position,B=pe.length;for(let W=0;W<C.count/B;W++){const O=W*B+(B-1);C.setY(O,-.05)}ge.computeVertexNormals()}const Ve=new lt(ge,new Bt({color:10263960,roughness:1,map:v}));Ve.receiveShadow=!0,n.add(Ve);const ke=$r(128,128,(C,B,W)=>{C.clearRect(0,0,B,W),C.strokeStyle="rgba(200,205,210,0.95)",C.lineWidth=2;for(let O=-W;O<B+W;O+=16)C.beginPath(),C.moveTo(O,0),C.lineTo(O+W,W),C.stroke(),C.beginPath(),C.moveTo(O+W,0),C.lineTo(O,W),C.stroke()},!0);ke.repeat.set(1,1);const ee=(()=>{const C=o+1,B=new Float32Array(C*2*3),W=new Float32Array(C*2*2),O={},oe=7;for(let re=0;re<C;re++){const Z=re%o;i.point(Z*i.ds,K+.2,O);const se=re*2;B[se*3]=O.x,B[se*3+1]=O.y+r.wallH,B[se*3+2]=O.z,B[(se+1)*3]=O.x,B[(se+1)*3+1]=O.y+r.wallH+oe,B[(se+1)*3+2]=O.z,W[se*2]=re*i.ds/2.5,W[se*2+1]=0,W[(se+1)*2]=re*i.ds/2.5,W[(se+1)*2+1]=3}const Y=[];for(let re=0;re<C-1;re++){const Z=re*2;Y.push(Z,Z+1,Z+2,Z+1,Z+3,Z+2)}const te=new Wt;return te.setAttribute("position",new _t(B,3)),te.setAttribute("uv",new _t(W,2)),te.setIndex(Y),te.computeVertexNormals(),te})();n.add(new lt(ee,new Un({map:ke,transparent:!0,alphaTest:.2,side:Sn,depthWrite:!1,fog:!0})));{const C=new Ln(new nr(.07,.09,7.4,6),x(7238520,{metalness:.6,roughness:.4}),Math.ceil(i.length/9)),B=new Ge,W={};let O=0;for(let oe=0;oe<i.length;oe+=9)i.point(oe,K+.2,W),B.makeTranslation(W.x,W.y+r.wallH+3.6,W.z),C.setMatrixAt(O++,B);C.count=O,n.add(C)}t(.4);const ae=new lt(new xi(9e3,9e3),T);ae.rotation.x=-Math.PI/2,ae.position.y=-.06,ae.receiveShadow=!0,ae.name="ground",n.add(ae);{const C=new xi(r.straight*1.4,r.radius*1.4),B=new lt(C,new Un({color:5138997,transparent:!0,opacity:.18,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.set(0,-.04,-r.radius*.1),n.add(B)}if(r.lake>0){const C=new lt(new el(150,40),new Bt({color:2775666,roughness:.08,metalness:0,envMapIntensity:1.4}));C.rotation.x=-Math.PI/2,C.scale.set(1.9*r.lake*Math.max(.5,m),.55*r.lake*Math.max(.5,r.radius/300),1),C.position.set(0,-.02,-r.radius*.17),n.add(C)}t(.5);const _e=Math.round(e.crowd*(r.crowdK||1)),Fe=r.standRows||1,Ae=C=>Math.max(5,Math.round(C*Fe)),We=[{s0:-l-20,s1:l+20,off:26,rows:Ae(28),rise:.78,depth:.95,color:3820138,side:1},{s0:f-l-d*.45,s1:f-l-30,off:24,rows:Ae(22),rise:.75,depth:.95,color:5849402,side:1},{s0:l+d*.04,s1:l+d*.66,off:36,rows:Ae(18),rise:.74,depth:.95,color:4020810,side:1},{s0:f-l-d*.98,s1:f-l-d*.5,off:34,rows:Ae(16),rise:.74,depth:.95,color:4865370,side:1}],yt=new en(1,1,1),F=new Bt({color:16777215,roughness:.7});let it=0;for(const C of We)it+=Math.ceil((C.s1-C.s0)/8)*C.rows;const Le=new Ln(yt,F,it);Le.castShadow=!1,Le.receiveShadow=!0;const Se=new Ge,be=new Mt,rt=new U,ye=new U,Ne=new ze;let dt=0;const ft={},k=[];for(const C of We)for(let B=C.s0;B<C.s1;B+=8){const W=i.wrapS(B+4),O=i.at(W);i.point(W,a+C.off-C.rows*C.depth*0,ft);const oe=Math.atan2(O.tx,O.tz),Y=Math.floor(W/96);for(let te=0;te<C.rows;te++){const re=C.off+te*C.depth,Z=ft.y*0+te*C.rise+2.2+Math.max(0,(O.yc+(a+.5)*Math.sin(O.bank))*.55);ye.set(O.x+O.rx*(a+re),Z*.5+0,O.z+O.rz*(a+re));const se=Z;ye.y=se*.5,be.setFromEuler(new Qt(0,oe,0)),rt.set(C.depth*1.02,se,8.05),Se.compose(ye,be,rt),Le.setMatrixAt(dt,Se);const xe=.75+te%2*.12+(Y*7+te)%3*.04;Ne.setHex(C.color).multiplyScalar(xe),Le.setColorAt(dt,Ne),dt++,k.length<_e*1.5&&te%1===0&&k.push([O.x+O.rx*(a+re-C.depth*.25),se,O.z+O.rz*(a+re-C.depth*.25),oe,O.tx,O.tz])}if(C.rows>=22&&(B-C.s0)%16===0){const te=C.off+C.rows*C.depth*.55,re=C.rows*C.rise+9,Z=new lt(new en(C.rows*C.depth*1.15,.5,16.2),x(14343648,{roughness:.6}));Z.position.set(O.x+O.rx*(a+te),re,O.z+O.rz*(a+te)),Z.rotation.y=oe,Z.castShadow=!0,n.add(Z)}}Le.count=dt,Le.instanceMatrix.needsUpdate=!0,Le.instanceColor&&(Le.instanceColor.needsUpdate=!0),n.add(Le);{const C=Math.min(_e,k.length),B=new Ln(new en(.42,.9,.34),new Bt({color:16777215,roughness:.9}),C),W=[13712187,3108827,15909376,15658734,2763306,4039517,15043115,10181046],O=new Qt;for(let oe=0;oe<C;oe++){const Y=k[s()*k.length|0],te=(s()-.5)*7.4;ye.set(Y[0]+Y[4]*te,Y[1]+.55,Y[2]+Y[5]*te),O.set(0,Y[3],0),be.setFromEuler(O),rt.set(1,.8+s()*.4,1),Se.compose(ye,be,rt),B.setMatrixAt(oe,Se),B.setColorAt(oe,Ne.setHex(W[s()*W.length|0]).multiplyScalar(.7+s()*.3))}B.instanceMatrix.needsUpdate=!0,B.instanceColor.needsUpdate=!0,n.add(B)}t(.65);const w=[];{const C=new nr(.35,.6,46,8),B=new Ln(C,x(8159622,{metalness:.7,roughness:.4}),40),W=new en(9,3.2,1.2),O=new Bt({color:3355443,emissive:16773839,emissiveIntensity:0,roughness:.5}),oe=new Ln(W,O,40);let Y=0;for(let te=40;te<i.length&&Y<40;te+=Math.max(95,Math.min(190,f/20))){const re=i.at(te),Z=a+34*Math.max(.6,Math.min(1,m*1.4)),se=re.x+re.rx*Z,xe=re.z+re.rz*Z;Se.makeTranslation(se,23,xe),B.setMatrixAt(Y,Se);const Te=Math.atan2(re.tx,re.tz);Se.compose(new U(se-re.rx*2,45.5,xe-re.rz*2),new Mt().setFromEuler(new Qt(0,Te,0)),new U(1,1,1)),oe.setMatrixAt(Y,Se),w.push({x:se,z:xe}),Y++}B.count=Y,oe.count=Y,B.castShadow=!0,n.add(B,oe),n.userData.lampMat=O}{const C=[];for(let B=0;B<=3;B++)C.push(-a-r.apron-3-B*4.2);new lt(Di(i,C.slice().reverse(),{uvU:7,uvV:7,sFrom:0,sTo:0,yOff:.02,color:()=>[.8,.8,.8],closed:!1}),H)}{const C=new Ln(new en(10,4.2,12),x(13619924,{roughness:.7}),60);let B=0;const W=new Ln(new en(11,1.1,.5),x(15329764),60);for(let O=-Math.min(260,l*.55);O<Math.min(260,l*.55)&&B<60;O+=12){const oe=i.wrapS(O),Y=i.at(oe),te=-a-r.apron-16,re=Y.x+Y.rx*te,Z=Y.z+Y.rz*te,se=Math.atan2(Y.tx,Y.tz),xe=new Mt().setFromEuler(new Qt(0,se,0));Se.compose(new U(re,2.1,Z),xe,new U(1,1,1)),C.setMatrixAt(B,Se);const Te=Y.x+Y.rx*(te+8),fe=Y.z+Y.rz*(te+8);Se.compose(new U(Te,.55,fe),xe,new U(1,1,1)),W.setMatrixAt(B,Se),B++}C.count=B,W.count=B,C.castShadow=!0,C.receiveShadow=!0,n.add(C,W)}{const C=i.at(-Math.min(120,l*.24)),B=C.x+C.rx*(-a-r.apron-34),W=C.z+C.rz*(-a-r.apron-34),O=new lt(new en(5,42,5),x(15263972,{roughness:.5}));O.position.set(B,21,W),O.castShadow=!0,n.add(O);const oe=new lt(new en(5.2,1.6,5.2),new Bt({color:2763306,emissive:4045397,emissiveIntensity:.9}));oe.position.set(B,38,W),n.add(oe)}t(.75);{const C=[],B=Y=>$r(512,96,(te,re,Z)=>{te.fillStyle=Y.colors[0],te.fillRect(0,0,re,Z),te.fillStyle=Y.colors[1],te.fillRect(0,Z-14,re,14),te.fillStyle=Y.colors[1]==="#ffffff"||Y.colors[1]==="#f4f4f4"?"#111":"#fff",te.font='italic 700 54px "Barlow Condensed", Impact, sans-serif',te.textAlign="center",te.textBaseline="middle",te.fillText(Y.name.toUpperCase(),re/2,Z/2-5)}),W=gr.map(B);let O=0;for(let Y=20;Y<i.length;Y+=36){const te=i.at(Y),re=te.x+te.rx*(K+.55),Z=te.z+te.rz*(K+.55),se={};i.point(Y,K+.55,se);const xe=new lt(new xi(14,2.2),new Bt({map:W[O%W.length],roughness:.6}));O++,xe.position.set(re,se.y+r.wallH+3.2,Z),xe.rotation.y=Math.atan2(te.tx,te.tz)+Math.PI/2*0,xe.lookAt(re-te.rx*10,se.y+r.wallH+3.2,Z-te.rz*10),C.push(xe)}const oe=new wn;C.forEach(Y=>oe.add(Y)),n.add(oe)}{const B=new Ln(new nr(.25,.4,5,5),x(5916210,{roughness:1}),1400),W=new Ln(new nl(3.2,1),new Bt({color:16777215,roughness:1,flatShading:!0}),1400);let O=0;for(let Y=0;Y<1400*3&&O<1400;Y++){const te=s()*Math.PI*2,re=u+200+s()*600*Math.max(.5,m),Z=h+220+s()*400*Math.max(.5,m),se=Math.cos(te)*re,xe=Math.sin(te)*Z*1.1+40,Te=i.query(se,xe,void 0,{});if(Te.u<a+70&&Te.u>-a-120)continue;const fe=.8+s()*1.4;Se.compose(new U(se,2.5*fe,xe),new Mt,new U(fe,fe,fe)),B.setMatrixAt(O,Se),Se.compose(new U(se,7*fe,xe),new Mt().setFromEuler(new Qt(s(),s()*6,0)),new U(fe,fe*(.9+s()*.5),fe)),W.setMatrixAt(O,Se),W.setColorAt(O,Ne.setHSL(.25+s()*.08,.45,.16+s()*.1)),O++}B.count=O,W.count=O,W.castShadow=!1,n.add(B,W);const oe=new Ln(new en(1,1,1),new Bt({color:16777215,roughness:.9}),90);for(let Y=0;Y<90;Y++){const te=Y/90*Math.PI*2+s()*.05,re=1500+900*m+s()*(350+250*m),Z=40+s()*120,se=15+s()*70,xe=40+s()*90;Se.compose(new U(Math.cos(te)*re*(.9+.35*m),se/2,Math.sin(te)*re*.9),new Mt().setFromEuler(new Qt(0,s()*3,0)),new U(Z,se,xe)),oe.setMatrixAt(Y,Se),oe.setColorAt(Y,Ne.setHSL(.58+s()*.1,.1,.5+s()*.25))}n.add(oe)}return t(1),n.userData.lamps=w,n}function Uh(i,e){if(e===Ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Mc||e===Bu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Mc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class nv extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ov(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new Mv(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ir.extractUrlBase(e);a=ir.resolveURL(l,this.path)}else a=ir.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new cd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_d){try{a[Je.KHR_BINARY_GLTF]=new bv(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Nv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:a[h]=new rv;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[h]=new Sv(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[h]=new Tv;break;case Je.KHR_MESH_QUANTIZATION:a[h]=new wv;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function iv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sv{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new hd(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jp(u),l.distance=h;break;case"spot":l=new $p(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rv{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}}class av{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ov{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(o,o)}return Promise.all(r)}}class cv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class lv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class uv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class dv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class gv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class vv{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class _v{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class yv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class xv{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class Mv{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const m of h){const v=new Ge,g=new U,p=new Mt,M=new U(1,1,1),y=new Ln(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&M.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,v.compose(g,p,M));for(const _ in c)if(_==="_COLOR_0"){const S=c[_];y.instanceColor=new Sc(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);St.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const _d="glTF",Ws=12,Fh={JSON:1313821514,BIN:5130562};class bv{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ws,r=new DataView(e,Ws);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Fh.JSON){const l=new Uint8Array(e,Ws+a,o);this.content=n.decode(l)}else if(c===Fh.BIN){const l=Ws+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Rc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Rc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ys[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const v=d.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}h(d)},o,l,an,f)})})}}class Tv{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wv{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class yd extends yr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,v=m-l,g=-2*d+3*f,p=d-f,M=1-g,y=p-f+h;for(let _=0;_!==o;_++){const S=a[v+_+o],T=a[v+_+c]*u,E=a[m+_+o],P=a[m+_]*u;r[_]=M*S+y*T+g*E+p*P}return r}}const Ev=new Mt;class Av extends yd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Ev.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oh={9728:sn,9729:mn,9984:Lu,9985:la,9986:Zs,9987:Wn},Bh={33071:yi,33648:va,10497:wi},bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rv={CUBICSPLINE:void 0,LINEAR:dr,STEP:ur},So={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Lv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iv(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+To(t.attributes):e=i.indices+":"+To(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+To(i.targets[n]);return e}function To(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dv=new Ge;class Nv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ld(this.options.manager):this.textureLoader=new t0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ni(r,o,s),Hn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ir.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=bo[s.type],o=ys[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new _t(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=bo[s.type],l=ys[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let v,g;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(M);y||(v=new l(o,p*d,s.count*d/u),y=new Tp(v,d/u),t.cache.add(M,y)),g=new jc(y,c,f%d/u,m)}else o===null?v=new l(s.count*c):v=new l(o,f,s.count*c),g=new _t(v,c,m);if(s.sparse!==void 0){const p=bo.SCALAR,M=ys[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new M(a[1],y,s.sparse.count*p),T=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new _t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=S.length;E<P;E++){const x=S[E];if(g.setX(x,T[E*c]),c>=2&&g.setY(x,T[E*c+1]),c>=3&&g.setZ(x,T[E*c+2]),c>=4&&g.setW(x,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Oh[f.magFilter]||mn,u.minFilter=Oh[f.minFilter]||Wn,u.wrapS=Bh[f.wrapS]||wi,u.wrapT=Bh[f.wrapT]||wi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==mn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Dt(v);g.needsUpdate=!0,f(g)}),t.load(ir.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Hn(h,a),h.userData.mimeType=a.mimeType||kv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new td,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ed,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],an),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Sn);const u=r.alphaMode||So.OPAQUE;if(u===So.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===So.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Un&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Un&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Un){const h=r.emissiveFactor;o.emissive=new ze().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==Un&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ni(s,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return zh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Iv(l),h=s[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=zh(new Wt,l,t),s[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Cv(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const v=u[d],g=a[d];let p;const M=l[d];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ep(v,M):new lt(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=Uh(p.geometry,Bu):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=Uh(p.geometry,Mc));else if(g.mode===Mn.LINES)p=new Ip(v,M);else if(g.mode===Mn.LINE_STRIP)p=new Jc(v,M);else if(g.mode===Mn.LINE_LOOP)p=new kp(v,M);else if(g.mode===Mn.POINTS)p=new nd(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),g.extensions&&Ni(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ni(s,h[0],r),h[0];const f=new wn;r.extensions&&Ni(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Si.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new sl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new Ge;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $c(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],m=s.samplers[d.sampler],v=d.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let y=0,_=f.length;y<_;y++){const S=f[y],T=d[y],E=m[y],P=v[y],x=g[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=n._createAnimationTracks(S,T,E,P,x);if(b)for(let L=0;L<b.length;L++)p.push(b[L])}const M=new Hp(r,void 0,p);return Hn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Dv)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Zu:l.length>1?u=new wn:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Hn(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new wn;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Xn||f instanceof Dt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];mi[r.path]===mi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(mi[r.path]){case mi.weights:l=Es;break;case mi.rotation:l=As;break;case mi.translation:case mi.scale:l=Rs;break;default:n.itemSize===1?l=Es:l=Rs;break}const u=s.interpolation!==void 0?Rv[s.interpolation]:dr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+mi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof As?Av:yd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Uv(i,e,t){const n=e.attributes,s=new ci;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const u=Cc(ys[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=Cc(ys[f.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Yn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function zh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Rc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return nt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Hn(i,e),Uv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Pv(i,e.targets,t):i})}const Pc=240,Lc=96,Fv='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function Pn(i,e,t=14,n=null){i.beginPath(),i.roundRect(2,2,Pc-4,Lc-4,t),i.fillStyle=e,i.fill(),n&&(i.lineWidth=3,i.strokeStyle=n,i.stroke())}function Ct(i,e,t,n,s,r,{weight:a=700,italic:o=!0,align:c="left",spacing:l=0,maxW:u=0}={}){i.font=`${o?"italic ":""}${a} ${s}px ${Fv}`,i.fillStyle=r,i.textAlign=c,i.textBaseline="alphabetic";try{i.letterSpacing=l+"px"}catch{}if(u){const h=i.measureText(e).width;if(h>u){i.save(),i.translate(t,n),i.scale(u/h,1),i.fillText(e,0,0),i.restore();try{i.letterSpacing="0px"}catch{}return}}i.fillText(e,t,n);try{i.letterSpacing="0px"}catch{}}function Ui(i,e,t){i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fillStyle=t,i.fill()}function Zr(i,e,t,n,s,r=0){i.beginPath();for(let a=0;a<6;a++){const o=r+Math.PI/3*a,c=e+n*Math.cos(o),l=t+n*Math.sin(o);a?i.lineTo(c,l):i.moveTo(c,l)}i.closePath(),i.fillStyle=s,i.fill()}const Ov={dustyfork(i){Pn(i,"#f2b134",16),i.fillStyle="#7a2e1b",i.fillRect(14,70,212,5),i.fillRect(14,79,212,3),i.fillStyle="#7a2e1b",i.fillRect(36,18,5,34),i.fillRect(46,18,5,34),i.fillRect(56,18,5,34),i.beginPath(),i.roundRect(34,46,29,8,4),i.fill(),i.fillRect(46,50,5,18),Ct(i,"DUSTY FORK",78,46,34,"#7a2e1b",{maxW:136}),Ct(i,"DINER",80,64,20,"#7a2e1b",{spacing:7,italic:!1,weight:600})},greaseline(i){Pn(i,"#ececec",14,"#d1342c"),i.save(),i.translate(46,48),i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(22,-2,22,26,0,26),i.bezierCurveTo(-22,26,-22,-2,0,-30),i.fillStyle="#d1342c",i.fill(),i.fillStyle="#ececec",i.beginPath(),i.ellipse(-6,8,4,8,.4,0,7),i.fill(),i.restore(),Ct(i,"GREASELINE",82,50,36,"#16181c",{maxW:140}),i.fillStyle="#d1342c",i.fillRect(82,58,140,4),Ct(i,"GARAGE",83,80,20,"#d1342c",{spacing:8,italic:!1,weight:600})},cornerbolt(i){Pn(i,"#2f6fdb",14),Zr(i,46,48,30,"#f4f4f4",Math.PI/6),Zr(i,46,48,17,"#2f6fdb",Math.PI/6),Zr(i,46,48,8,"#f4f4f4",Math.PI/6),Ct(i,"CORNER BOLT",86,46,34,"#ffffff",{maxW:140}),Ct(i,"SUPPLY CO.",88,70,19,"#cfe0ff",{spacing:6,italic:!1,weight:600})},vantafuel(i){Pn(i,"#0d1f1b",14,"#13c28a"),Ui(i,[[22,22],[50,22],[62,58],[74,22],[100,22],[66,76],[56,76]],"#13c28a"),Ui(i,[[62,30],[68,44],[62,56],[56,44]],"#0d1f1b"),Ct(i,"VANTA",112,52,40,"#ffffff",{maxW:112}),Ct(i,"FUEL",114,76,26,"#13c28a",{spacing:10,italic:!1})},halo(i){Pn(i,"#ffd400",48),i.lineWidth=9,i.strokeStyle="#151515",i.beginPath(),i.ellipse(46,48,24,24,0,0,7),i.stroke(),Ui(i,[[50,26],[36,52],[47,52],[42,70],[58,42],[47,42]],"#151515"),Ct(i,"HALO",82,56,46,"#151515",{maxW:140}),Ct(i,"ENERGY",84,78,19,"#151515",{spacing:9,italic:!1})},ironbark(i){Pn(i,"#232323",12,"#e2552c"),Zr(i,44,48,31,"#e2552c",0),i.strokeStyle="#232323",i.lineWidth=3.5,[8,15,22].forEach(e=>{i.beginPath(),i.arc(44,48,e,0,7),i.stroke()}),Ct(i,"IRONBARK",84,52,40,"#ffffff",{maxW:140}),Ct(i,"TOOLS",86,76,21,"#e2552c",{spacing:10,italic:!1})},meridian(i){Pn(i,"#00a3e0",16),i.save(),i.translate(46,48),i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.arc(0,0,27,0,7),i.stroke(),i.beginPath(),i.ellipse(0,0,11,27,0,0,7),i.stroke(),i.beginPath(),i.moveTo(-27,0),i.lineTo(27,0),i.stroke(),i.beginPath(),i.moveTo(-23,-13),i.lineTo(23,-13),i.moveTo(-23,13),i.lineTo(23,13),i.lineWidth=2.5,i.stroke(),i.restore(),Ct(i,"MERIDIAN",86,52,38,"#ffffff",{maxW:140}),Ct(i,"MOBILE",88,76,20,"#d9f3ff",{spacing:9,italic:!1})},stratus(i){Pn(i,"#4b3fc4",16),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(18,62),i.quadraticCurveTo(46,58,78,26),i.quadraticCurveTo(68,52,92,56),i.quadraticCurveTo(54,74,18,62),i.fill(),i.fillStyle="#b9b2ff",i.beginPath(),i.moveTo(24,74),i.quadraticCurveTo(52,72,70,60),i.quadraticCurveTo(52,82,24,74),i.fill(),Ct(i,"STRATUS",102,54,38,"#ffffff",{maxW:124}),Ct(i,"AIR",104,76,21,"#cfc9ff",{spacing:14,italic:!1})},kestrel(i){Pn(i,"#121212",14,"#ffcf1b"),i.lineWidth=11,i.strokeStyle="#ffcf1b",i.beginPath(),i.arc(46,48,24,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="#121212";for(let e=0;e<12;e++){const t=Math.PI*2*e/12;i.beginPath(),i.moveTo(46+19*Math.cos(t),48+19*Math.sin(t)),i.lineTo(46+29*Math.cos(t),48+29*Math.sin(t)),i.stroke()}Ui(i,[[36,50],[60,36],[52,52],[64,50],[38,64]],"#ffffff"),Ct(i,"KESTREL",84,54,38,"#ffcf1b",{maxW:140}),Ct(i,"TIRES",86,76,21,"#ffffff",{spacing:12,italic:!1})},apexgrid(i){Pn(i,"#0d0d0d",12,"#ff2d55"),Ui(i,[[44,14],[78,80],[10,80]],"#ff2d55"),i.strokeStyle="#0d0d0d",i.lineWidth=3,i.beginPath(),i.moveTo(44,38),i.lineTo(44,80),i.moveTo(28,58),i.lineTo(60,58),i.moveTo(22,70),i.lineTo(66,70),i.stroke(),Ct(i,"APEX GRID",92,50,40,"#ffffff",{maxW:128}),Ct(i,"POWER",94,76,21,"#ff2d55",{spacing:11,italic:!1})},northstar(i){Pn(i,"#0a2a66",14,"#c0c6cc"),Ui(i,[[44,10],[51,40],[80,48],[51,56],[44,86],[37,56],[8,48],[37,40]],"#c0c6cc"),Ui(i,[[44,26],[48,44],[44,48],[40,44]],"#ffffff"),Ct(i,"NORTHSTAR",92,50,36,"#ffffff",{maxW:138}),Ct(i,"MOTORS",94,76,21,"#c0c6cc",{spacing:10,italic:!1})}};function xd(i,e,t,n,s,r){const a=Ov[e];if(!a)return!1;const o=Math.min(s/Pc,r/Lc);return i.save(),i.translate(t+(s-Pc*o)/2,n+(r-Lc*o)/2),i.scale(o,o),i.lineJoin="round",a(i),i.restore(),!0}const ga=new Map;function Md(i,e=240,t=96){const n=`${i}:${e}x${t}`;if(ga.has(n))return ga.get(n);const s=Math.min(2,(typeof devicePixelRatio=="number"?devicePixelRatio:1)||1),r=document.createElement("canvas");r.width=Math.round(e*s),r.height=Math.round(t*s);const a=r.getContext("2d");a.scale(s,s),xd(a,i,0,0,e,t);const o=r.toDataURL("image/png");return ga.set(n,o),o}function bd(){ga.clear()}const Bv=i=>(Ds(i)||{}).name||i,zv=Object.freeze(Object.defineProperty({__proto__:null,clearSponsorPreviewCache:bd,drawSponsor:xd,sponsorName:Bv,sponsorPreviewURL:Md},Symbol.toStringTag,{value:"Module"})),Vv=Object.assign({"../ui/sponsorArt.js":zv}),wo=Object.values(Vv)[0]||null,Hv={left:(i,e)=>[-i*100,-e*100],right:(i,e)=>[i*100,-e*100],top:(i,e)=>[i*100,e*100],tail:(i,e)=>[-i*100,-e*100],nose:(i,e)=>[i*100,-e*100]};function zt(i,e,t,n){const s=e.frames[t];i.save(),i.beginPath(),i.rect(...s.clip),i.clip(),i.translate(s.ox,s.oy),i.scale(s.sx,s.sy),n(Hv[t]),i.restore()}const qs=(i,e,t)=>{i.beginPath(),t.forEach(([n,s],r)=>{const[a,o]=e(n,s);r?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath(),i.fill()},Vi=(i,e,t,n,s,r)=>{const[a,o]=e(t,n),[c,l]=e(s,r);i.fillRect(Math.min(a,c),Math.min(o,l),Math.abs(c-a),Math.abs(l-o))},Sd=(i,e)=>`${i==="italic"?"italic 800":i==="slab"?"900":"800"} ${e}px "Barlow Condensed", Impact, "Arial Narrow", sans-serif`;function Gv(i,e,t,n,s,r,a=0){i.save(),i.translate(t,n),a&&i.rotate(a);const o=Ds(e);if(i.beginPath(),i.rect(-s/2,-r/2,s,r),i.clip(),wo&&wo.drawSponsor)try{wo.drawSponsor(i,e,-s/2,-r/2,s,r),i.restore();return}catch{}i.fillStyle=o?o.colors[0]:"#444",i.fillRect(-s/2,-r/2,s,r),i.fillStyle=o?o.colors[1]:"#fff",i.fillRect(-s/2,r/2-r*.14,s,r*.14),i.fillStyle="#fff",i.font=Sd("italic",Math.floor(r*.42)),i.textAlign="center",i.textBaseline="middle",i.fillText(o?o.name.toUpperCase():e,0,-r*.04,s*.94),i.restore()}function Jr(i,e,t,n,s,r=0){i.save(),i.translate(t,n),r&&i.rotate(r),i.font=Sd(e.numberStyle,s),i.textAlign="center",i.textBaseline="middle";const a=String(e.number||"0");e.numberStyle==="italic"&&i.transform(1,0,-.22,1,0,0);const o=(e.numberColor||"#fff").toLowerCase(),c=o==="#ffffff"||o==="#fff"?"#000":"#fff";i.lineJoin="round",i.lineWidth=s*.12,i.strokeStyle=c,i.strokeText(a,0,0),e.numberStyle==="outline"?(i.lineWidth=s*.06,i.strokeStyle=e.numberColor,i.strokeText(a,0,0)):(i.fillStyle=e.numberColor,i.fillText(a,0,0)),i.restore()}function Wv(i,e,t){const n=t.accent,s=t.trim,r=a=>{zt(i,e,"left",a),zt(i,e,"right",a)};if(t.pattern==="stripe")r(a=>{i.fillStyle=n,Vi(i,a,-3,.52,3,.46),i.fillStyle=s,Vi(i,a,-3,.44,3,.425)}),zt(i,e,"top",()=>{i.fillStyle=n,i.fillRect(-22,-300,44,600),i.fillStyle=s,i.fillRect(-32,-300,5,600),i.fillRect(27,-300,5,600)});else if(t.pattern==="split")i.fillStyle=n,r(a=>qs(i,a,[[3,-.1],[3,1.1],[.3,1.1],[-.9,-.1]])),zt(i,e,"top",a=>qs(i,a,[[-1.2,3],[1.2,3],[1.2,.35],[-1.2,-.45]])),zt(i,e,"nose",a=>qs(i,a,[[-1.2,-.1],[1.2,-.1],[1.2,.9],[-1.2,.9]]));else if(t.pattern==="chevron"){i.fillStyle=n;for(let a=0;a<7;a++){const o=-2.6+a*.5;r(c=>qs(i,c,[[o,-.1],[o+.3,-.1],[o+.55,.5],[o+.3,1.1],[o,1.1],[o+.25,.5]]))}for(let a=0;a<7;a++){const o=-2.6+a*.5;zt(i,e,"top",c=>qs(i,c,[[-1.2,o],[-1.2,o+.3],[0,o+.55],[1.2,o+.3],[1.2,o],[0,o+.25]]))}}else t.pattern==="fade"&&(r(()=>{const a=i.createLinearGradient(-260,0,260,0);a.addColorStop(0,n),a.addColorStop(.55,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-300,-140,600,160)}),zt(i,e,"top",()=>{const a=i.createLinearGradient(0,260,0,-150);a.addColorStop(0,n),a.addColorStop(.7,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-130,-320,260,640)}))}function qv(i,e,t){const n=i.getContext("2d");n.setTransform(i.width/2048,0,0,i.height/2048,0,0),n.globalCompositeOperation="source-over",n.fillStyle=e.paint,n.fillRect(0,0,2048,2048),Wv(n,t,e);const s=t.band||.3,r=l=>{n.fillStyle=e.trim,Vi(n,l,-4,-.2,4,s),n.fillStyle=e.accent,Vi(n,l,-4,s,4,s+.025)};zt(n,t,"left",r),zt(n,t,"right",r),zt(n,t,"nose",r),zt(n,t,"tail",r),t.paintLights&&(zt(n,t,"nose",l=>{for(const u of[-1,1]){n.fillStyle="#e8eaec";const[h,f]=l(u*.38,.31),[d,m]=l(u*.84,.22);n.beginPath(),n.roundRect(Math.min(h,d),Math.min(f,m),Math.abs(d-h),Math.abs(m-f),3),n.fill(),n.fillStyle="#ffcf5a";const v=u>0?Math.max(h,d)-12:Math.min(h,d);n.fillRect(v,Math.min(f,m)+2,12,Math.abs(m-f)-4)}n.fillStyle="#0b0c0e",Vi(n,l,-.34,.33,.34,.13),n.fillStyle="#2a2d33";for(let u=0;u<17;u++){const[h,f]=l(-.3+u*.0375,.31);n.fillRect(h,f,1.4,14)}}),zt(n,t,"tail",l=>{n.fillStyle="#16171a",Vi(n,l,-.9,.78,.9,.46),n.fillStyle="#d0171e";for(const u of[-1,1])Vi(n,l,u*.39,.7,u*.81,.52)}));const a=e.slots||{},o=t.spots;zt(n,t,"left",l=>{const[u,h]=l(o.number.z,o.number.y);Jr(n,e,u,h,o.number.h*100)}),zt(n,t,"right",l=>{const[u,h]=l(o.number.z,o.number.y);Jr(n,e,u,h,o.number.h*100)}),zt(n,t,"top",l=>{const[u,h]=l(0,a.roof?o.roofNumberZ:o.roofNumberZ-.15);Jr(n,e,u,h,32,Math.PI/2)}),zt(n,t,"tail",l=>{const[u,h]=l(0,a.bumper?o.bumper.y-.17:o.bumper.y);Jr(n,e,u,h,a.bumper?13:21)});const c=(l,u,h,f,d,m=0)=>{if(!a[u])return;const v=d*2.5,g=d;zt(n,t,l,p=>{const[M,y]=p(h,f);Gv(n,a[u],M,y,v,g,m)})};c("left","door",o.door.z,o.door.y,o.door.h*100),c("right","door",o.door.z,o.door.y,o.door.h*100),c("left","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("right","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("top","hood",o.hood.x,o.hood.z,o.hood.h*100,0),c("top","trunk",o.trunk.x,o.trunk.z,o.trunk.h*100,Math.PI),c("top","roof",0,o.roofLogoZ,22,Math.PI/2),c("tail","bumper",o.bumper.x,o.bumper.y,o.bumper.h*100)}const ps=9.81,Dn={mass:1500,L:2.85,a:1.38,b:1.47,cgH:.52,Iz:2900,wheelR:.34,length:5.1,width:1.95,cdA:1.3,clA:.85,rolling:.012,maxSteer:.5,gears:[9.4,6.3,4.55,3.46],eff:.9,idle:2600,redline:9e3,limiter:9250,torque:[[1200,300],[3e3,470],[4500,610],[6e3,690],[7500,740],[8500,720],[9100,640],[9500,400]],mu:{track:1.5,apron:1.3,grass:.42},trackHalf:.78},Xv=2.23694;function Vh(i,e=Dn){const t=e.torque;if(i<=t[0][0])return t[0][1];if(i>=t[t.length-1][0])return t[t.length-1][1];for(let n=0;n<t.length-1;n++)if(i<=t[n+1][0]){const s=(i-t[n][0])/(t[n+1][0]-t[n][0]);return t[n][1]+s*(t[n+1][1]-t[n][1])}return 0}class Qv{constructor(e=0,t=null){this.C=t?Object.assign({},Dn,t,{mu:Object.assign({},Dn.mu,t.mu||{})}):Dn,this.id=e,this.x=0,this.z=0,this.psi=0,this.vx=0,this.vy=0,this.w=0,this.steer=0,this.steerCmd=0,this.gear=1,this.rpm=this.C.idle,this.shiftT=0,this.throttle=0,this.brake=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.surface="track",this.bank=0,this.trackU=0,this.trackS=0,this.trackI=0,this.draft=0,this.dirty=0,this.damage={front:0,rear:0,left:0,right:0},this.hit=0,this.scrape=0,this.limiter=!1,this.out=!1,this.nLoad=1,this.lap=0,this.pitch=0,this.roll=0,this.skid=0,this.lastImpact=0,this.fracF={t:1,a:0,g:0},this.fracR={t:1,a:0,g:0},this.fracTrack=1,this.fracGrass=0,this.bankEff=0,this.gh=0,this.gp=0,this.gr=0,this.ghv=0,this.gpv=0,this.grv=0,this.gTh=0,this.gTp=0,this.gTr=0,this._gInit=!1,this.wy=[0,0,0,0],this._wq=[{},{},{},{}],this.gunk=0,this.dirt=0,this.alphaFe=0,this.alphaRe=0,this.tumble=null,this.wrecked=!1,this.dmgPull=0,this.scuffs=[],this.dig=0,this.lift=0,this.pendingTrip=null,this.hidden=!1,this.ghost=!1,this.dents=[],this._rs=e*2654435761>>>0||1,this.tripAt=2.3+this.rand()*2.4,this.hitBias=this.rand()}rand(){let e=(this._rs+=1831565813)|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}checkTrip(e){if(this.tumble||this.ghost)return null;const t=Math.hypot(this.vx,this.vy),n=this.fracGrass;if(t<12)return this.dig=Math.max(0,this.dig-e*2),this.lift=Math.max(0,this.lift-e),null;const s=Math.abs(this.vy);return this.dig=Math.max(0,this.dig+(Math.max(0,s-13)*n*.8*(1+.5*this.dirt)+Math.max(0,s-30)*.1*(1-n)-.9*(1-n))*e),this.lift=Math.max(0,this.lift+(Math.max(0,-this.vx-24)*.07-.5)*e),this.dig>this.tripAt?"dig":this.lift>this.tripAt?"lift":null}recover(e,t,n){this.place(e,t,n,0),this.tumble=null,this.wrecked=!1,this.dig=0,this.lift=0,this.pendingTrip=null,this.gear=1,this.throttle=0,this.steer=0,this.gunk=0,this.roll=0,this.pitch=0,this.tripAt=2.3+this.rand()*2.4}get speed(){return Math.hypot(this.vx,this.vy)}get mph(){return this.vx*Xv}place(e,t,n,s=0){this.px=e,this.pz=t,this.ppsi=n,this.x=e,this.z=t,this.psi=n,this.vx=s,this.vy=0,this.w=0,this._gInit=!1,this.alphaFe=0,this.alphaRe=0}sampleGround(e,t){const n=this.C,s=Math.sin(this.psi),r=Math.cos(this.psi),a=n.trackHalf||.78;let o=0,c=0,l=0,u=0,h=0,f=0;for(let m=0;m<4;m++){const v=m<2?n.a:-n.b,g=m&1?-a:a,p=this.x+s*v+r*g,M=this.z+r*v-s*g,y=this._wq[m];e.query(p,M,t,y),this.wy[m]=y.y;const _=y.surface;m<2?_==="grass"?l++:_==="apron"?c++:o++:_==="grass"?f++:_==="apron"?h++:u++}this.fracF.t=o/2,this.fracF.a=c/2,this.fracF.g=l/2,this.fracR.t=u/2,this.fracR.a=h/2,this.fracR.g=f/2,this.fracTrack=(o+u)/4,this.fracGrass=(l+f)/4;const d=this.wy;this.gTh=(d[0]+d[1]+d[2]+d[3])/4,this.gTp=Math.atan2((d[0]+d[1]-d[2]-d[3])/2,n.a+n.b),this.gTr=Math.atan2((d[0]+d[2]-d[1]-d[3])/2,2*a),this._gInit||(this.gh=this.gTh,this.gp=this.gTp,this.gr=this.gTr,this.ghv=this.gpv=this.grv=0,this._gInit=!0)}get wvx(){return this.vx*Math.sin(this.psi)+this.vy*Math.cos(this.psi)}get wvz(){return this.vx*Math.cos(this.psi)-this.vy*Math.sin(this.psi)}step(e,t,n){const s=this.C,r=s.mass;this.px=this.x,this.pz=this.z,this.ppsi=this.psi,this.pgh=this.gh,this.pgp=this.gp,this.pgr=this.gr,this.surface=n.surface||"track",this.bankEff+=((n.bank||0)*this.fracTrack-this.bankEff)*Math.min(1,e*14);const a=this.bankEff;this.bank=a;const o=Math.cos(a),c=Math.sin(a),l=s.mu.track,u=s.mu.apron,h=s.mu.grass,f=Math.hypot(this.vx,this.vy);this.gunk=Ie(this.gunk+(this.fracGrass*Ie(f/9,0,1)*.45-(1-this.fracGrass)*(.07+.006*f))*e,0,1),this.dirt=Math.min(1,this.dirt+this.fracGrass*Ie(f/12,0,1)*.025*e);const d=1-.3*this.gunk,m=(this.fracF.t*l+this.fracF.a*u+this.fracF.g*h)*d,v=(this.fracR.t*l+this.fracR.a*u+this.fracR.g*h)*d,g=this.damage,p=1-.35*g.front-.1*(g.left+g.right)*.5,M=1-.25*g.rear-.1*(g.left+g.right)*.5,y=Math.max(0,this.vx),_=s.maxSteer/(1+Math.pow(y/42,2)),S=Ie(t.steer,-1,1)*_,T=(t.analog?6.5:4.2)*(1+1.2/(1+y/12));this.steer+=Ie(S-this.steer,-T*e*_*2,T*e*_*2),this.throttle+=Ie(t.throttle-this.throttle,-5*e,4.5*e),this.brake+=Ie(t.brake-this.brake,-8*e,7*e);const E=s.gears[this.gear-1],P=Math.abs(this.vx)/s.wheelR*E*60/(2*Math.PI);let x=Math.max(s.idle,P);this.gear===1&&this.vx<6&&(x=Math.max(x,3200+3500*this.throttle)),this.limiter=x>=s.limiter,this.limiter&&(x=s.limiter-150*Math.random()),this.rpm+=(x-this.rpm)*Math.min(1,e*28),this.shiftT>0?this.shiftT-=e:this.gear<4&&P>8350*(s.redline/9e3)?(this.gear++,this.shiftT=.12):this.gear>1&&P<(4700+(this.gear-2)*150)*(s.redline/9e3)&&(this.gear--,this.shiftT=.08);const b=Vh(this.rpm,s)*(this.limiter?0:1)*(this.shiftT>0?.15:1);let L=this.throttle*b*E*s.eff/s.wheelR;const I=(1-this.throttle)*.085*Vh(Math.max(this.rpm,3e3),s)*E/s.wheelR*(this.vx>.5?1:0);L=L*(1-.2*this.damage.front-.12*this.damage.rear)-I;const D=1.2,H=(1-.3*n.draft)*(1+.22*this.damage.front+.1*this.damage.rear+.08*(this.damage.left+this.damage.right)),N=.5*D*this.vx*this.vx,z=N*s.cdA*H*Math.sign(this.vx||1),q=N*s.clA*(1-.35*n.draft*.3)*(1-.18*(this.damage.front+this.damage.rear));this.draft=n.draft,this.dirty=n.dirty;const V=Math.max(0,n.k||0),K=this.vx*this.vx*V,ie=r*(ps*o+K*c)+q*.9,le=s.b/s.L;s.a/s.L;const pe=r*this.ax*s.cgH/s.L,ge=.44*(1-.55*n.dirty);let Ve=Ie(ie*le-pe+q*.9*(ge-le),400,1e6);const ke=Ie(ie-Ve,400,1e6);Ve=ie-ke;const ee=Math.max(2.5,Math.abs(this.vx)),ae=this.vx>=0?1:-1;this.dmgPull+=(((g.left-g.right)*.05+(g.front>.3?.012*g.front:0)*(g.left>=g.right?1:-1))*Ie(1.5*g.front+.3,0,1)-this.dmgPull)*Math.min(1,e*3);const _e=this.steer+this.dmgPull,Fe=_e*ae-Math.atan2(this.vy+s.a*this.w,ee)*1,Ae=-Math.atan2(this.vy-s.b*this.w,ee),We=Math.min(1,e*ee/.45);this.alphaFe+=(Fe-this.alphaFe)*We,this.alphaRe+=(Ae-this.alphaRe)*We;const yt=this.alphaFe,F=this.alphaRe;this.slipF=yt,this.slipR=F;const it=m*p*Math.pow(Ve/7e3,-.14),Le=v*M*Math.pow(ke/7e3,-.14),Se=.15;let be=this.brake*2.3*r*ps*(1-.5*this.fracGrass);be=Math.min(be,2.6*r*ps);const rt=-Math.sign(this.vx||1);let ye=L+rt*be*.42,Ne=rt*be*.58;const dt=Le*ke,ft=it*Ve,k=t.assist===0?1:.8;ye>0&&(ye=Math.min(ye,k*dt)),ye=Ie(ye,-dt,dt),Ne=Ie(Ne,-ft,ft);const w=Math.sqrt(Math.max(.35,1-Math.pow(ye/dt,2))),C=Math.sqrt(Math.max(.35,1-Math.pow(Ne/ft,2))),B=at=>Math.sin(1.45*Math.atan(at/Se*2));let W=it*Ve*C*B(yt),O=Le*ke*w*B(F);const oe=Ie(Math.abs(this.vx)/3,0,1);W*=oe,O*=oe;const Y=Math.cos(_e),te=Math.sin(_e),re=1/o;W*=re,O*=re;let Z=ye+Ne*Y-W*te-z-s.rolling*r*ps*Math.sign(this.vx||0)*(1+5*this.fracGrass+3*(g.left+g.right)),se=O+W*Y+Ne*te;this.fracGrass>0&&(Z-=this.fracGrass*.9*r*Math.min(1,Math.abs(this.vx)/8)*Math.sign(this.vx)*(2+.04*Math.abs(this.vx)));const xe=-(n.rx||0),Te=-(n.rz||0),fe=r*ps*Math.tan(a),Xe=s.a*W*Y+s.a*Ne*te-s.b*O,G=-this.w*Math.abs(this.w)*0-this.w*180,ue=0,me=Z/r,we=se/r;this.ax+=(me-this.ax)*Math.min(1,e*12),this.ay+=(we-this.ay)*Math.min(1,e*12);const he=me+this.w*this.vy,ce=we-this.w*this.vx;if(this.vx+=he*e,this.vy+=ce*e,this.w+=(Xe+G+ue)/s.Iz*e,fe>0&&(n.rx||n.rz)){const at=xe*fe/r*e,tt=Te*fe/r*e,hn=Math.sin(this.psi),cn=Math.cos(this.psi);this.vx+=at*hn+tt*cn,this.vy+=at*cn-tt*hn}this.brake>.5&&Math.abs(this.vx)<.4&&this.throttle<.05&&(this.vx*=.8,this.vy*=.8),this.psi+=this.w*e;const Re=Math.sin(this.psi),qe=Math.cos(this.psi);this.x+=(this.vx*Re+this.vy*qe)*e,this.z+=(this.vx*qe-this.vy*Re)*e,this.roll+=(Ie(-this.ay*.012,-.08,.08)-this.roll)*Math.min(1,e*8),this.pitch+=(Ie(-this.ax*.004,-.05,.05)-this.pitch)*Math.min(1,e*8),this.skid=Ie((Math.abs(F)-.12)*4+(Math.abs(yt)-.13)*3,0,1)*Ie(this.speed/15,0,1),this.hit*=Math.max(0,1-e*4),this.scrape*=Math.max(0,1-e*6),this.nLoad=ie/(r*ps),this.ghv+=(676*(this.gTh-this.gh)-2*.8*26*this.ghv)*e,this.gh+=this.ghv*e,this.gpv+=(289*(this.gTp-this.gp)-2*.7*17*this.gpv)*e,this.gp+=this.gpv*e,this.grv+=(289*(this.gTr-this.gr)-2*.7*17*this.grv)*e,this.gr+=this.grv*e}applyImpulse(e,t,n,s,r){const a=this.C.mass,o=this.wvx+n*r/a,c=this.wvz+s*r/a,l=e-this.x,u=t-this.z;this.w+=(l*s-u*n)*r*-1/this.C.Iz*.5;const h=Math.sin(this.psi),f=Math.cos(this.psi);this.vx=o*h+c*f,this.vy=o*f-c*h}addDamage(e,t,n){const s=e-this.x,r=t-this.z,a=Math.sin(this.psi),o=Math.cos(this.psi),c=s*a+r*o,l=s*o-r*a,u=Math.min(1,n);if(Math.abs(c)>Math.abs(l)*1.5?c>0?this.damage.front=Math.min(1,this.damage.front+u):this.damage.rear=Math.min(1,this.damage.rear+u):l>0?this.damage.left=Math.min(1,this.damage.left+u):this.damage.right=Math.min(1,this.damage.right+u),n>.01){const h={lf:Math.max(-2.7,Math.min(2.7,c)),lt:Math.max(-1.1,Math.min(1.1,l)),ly:.55,m:Math.min(1,n*2.2)};this.dents.length<40&&this.dents.push(h),this.dentVer=(this.dentVer||0)+1}this.hit=Math.max(this.hit,Math.min(1,n*3)),this.lastImpact=Math.min(1,n*3)}}const rn={e87:{id:"e87",file:"regal",year:1987,name:"'87 Heritage Stock",tag:"Big, heavy and loose. Carburetted V8, bias tyres, almost no downforce.",spec:{mass:1570,Iz:3050,clA:.38,cdA:1.48,cgH:.55,rpmScale:.84,tqScale:.95,mu:{track:1.3,apron:1.15},pace:.9},stats:{power:3,grip:2,aero:1}},e05:{id:"e05",file:"stock",year:2005,name:"'05 Classic Stock",tag:"The balanced all-rounder. Fuel-injected V8, solid downforce.",spec:{rpmScale:1,tqScale:1,pace:1},stats:{power:4,grip:4,aero:3}},e15:{id:"e15",file:"camry",year:2015,name:"'15 Modern Stock",tag:"Lightest and stickiest. Wide tyres, big aero package, a rocket in the draft.",spec:{mass:1470,Iz:2850,clA:1,cdA:1.22,cgH:.5,rpmScale:1,tqScale:1.05,mu:{track:1.6,apron:1.35},pace:1.045},stats:{power:5,grip:5,aero:5}}},cl=["e87","e05","e15"];function Hh(i,e=null){const t=rn[i]||rn.e05,n=Object.assign({},t.spec),s=n.rpmScale||1,r=n.tqScale||1;return delete n.rpmScale,delete n.tqScale,n.torque=Dn.torque.map(([a,o])=>[a*s,o*r]),n.gears=Dn.gears.map(a=>a*s),n.idle=Math.round(Dn.idle*(.9+.1*s)),n.redline=Math.round(Dn.redline*s),n.limiter=Math.round(Dn.limiter*s),e&&(n.L=e.wheelbase,n.a=e.a,n.b=e.b,n.wheelR=e.wheelR,n.length=e.L,n.width=e.W,n.trackHalf=e.track,n.H=e.H),n}const Gh={rookie:"e87",regional:"e05",pro:"e15",legends:"e15"},qi={},Kv={},Wh=i=>new URL("assets/car/"+i,document.baseURI).href;function Eo(i){const e=rn[i];return e?qi[i]?Promise.resolve(qi[i]):Kv[i]||=Promise.all([new nv().loadAsync(Wh(e.file+".glb")),fetch(Wh(e.file+".json")).then(t=>t.json())]).then(([t,n])=>(qi[i]={scene:t.scene,cfg:n},qi[i])):Promise.reject(new Error("unknown car "+i))}const qh=i=>qi[i]&&qi[i].cfg;function Yv(i,e){e==="matte"?(i.roughness=.72,i.metalness=.05,i.clearcoat=0):e==="metallic"?(i.roughness=.3,i.metalness=.65,i.clearcoat=1,i.clearcoatRoughness=.04):(i.roughness=.26,i.metalness=.12,i.clearcoat=1,i.clearcoatRoughness=.06),i.needsUpdate=!0}function ea({car:i="e05",atlas:e="high",livery:t}={}){const n=qi[i];if(!n)throw new Error("car not loaded: "+i+" (await loadCar first)");const s=n.cfg,r=n.scene.clone(!0),a=e==="high"?2048:e==="med"?1024:512,o=document.createElement("canvas");o.width=a,o.height=a;const c=new id(o);c.colorSpace=Lt,c.flipY=!1,c.anisotropy=8,c.generateMipmaps=!0,c.minFilter=Wn;const l=new On({map:c,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25}),u={F:null,R:null},h={value:0};l.onBeforeCompile=x=>{x.uniforms.uDirt=h,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
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
void main() {`)},r.traverse(x=>{if(!x.isMesh)return;const b=x.material.name;x.castShadow=b!=="RTTA_Glass",x.receiveShadow=b==="RTTA_Paint",b==="RTTA_Paint"?x.material=l:b==="RTTA_LightF"?x.material=u.F||=x.material.clone():b==="RTTA_LightR"?x.material=u.R||=x.material.clone():b==="RTTA_Glass"&&(x.material.depthWrite=!1,x.material.envMapIntensity=1.6,x.renderOrder=2)});const f=new wn,d=new wn;f.add(d),d.add(r);const m=[],v=[];for(const x of["FL","FR","RL","RR"]){const b=r.getObjectByName("wheel_"+x);if(!b)continue;const L=new wn;for(const I of b.children.slice())L.add(I);b.add(L),m.push(L),v.push({pivot:b,spin:L,front:x[0]==="F",side:x[1]==="L"?1:-1})}const g={group:f,inner:d,wheels:m,pivots:v,bodyMat:l,texture:c,canvas:o,cfg:s,id:i,livery:null,dirty:!0,spin:0,dim:{L:s.L,W:s.W,H:s.H,wheelR:s.wheelR,tireW:s.tireW,track:s.track,front:s.a,rear:-s.b}};g.setLivery=x=>{g.livery=JSON.parse(JSON.stringify(x)),g.dirty=!0},g.flush=()=>{!g.dirty||!g.livery||(qv(o,g.livery,s),c.needsUpdate=!0,g.dirty=!1,Yv(l,g.livery.finish))},g.setLights=x=>{g.lightsOn=!!x,p()},g.setBrake=x=>{g.brakeOn=x>.05,p()};function p(){u.F&&(u.F.emissive=new ze(16773840),u.F.emissiveIntensity=g.lightsOn?1.6:0),u.R&&(u.R.emissive=new ze(16715792),u.R.emissiveIntensity=(g.lightsOn?.5:0)+(g.brakeOn?2.2:0))}let M=null,y=0;const _=new U,S=new U,T=new U,E=new Ge;new Ge;function P(){M=[],r.updateMatrixWorld(!0);const x=new Set(["RTTA_Trim","RTTA_Black","RTTA_LightF","RTTA_LightR","RTTA_Glass"]);r.traverse(b=>{if(!b.isMesh||!(b.material===l||x.has(b.material.name)))return;const L=b.geometry.clone();b.geometry=L;const I=L.attributes.position;b.material===l&&L.setAttribute("aScuff",new _t(new Float32Array(I.count),1)),E.identity();for(let D=b;D&&D!==r;D=D.parent)E.premultiply(D.matrix);M.push({o:b,g:L,m:E.clone(),mi:E.clone().invert()})})}return g.applyDents=(x,b=.5)=>{if(!x||x.length<=y)return;M||P(),_.set(0,b+.12,0);const L=new U,I=new U;for(let D=y;D<x.length;D++){const H=x[D],N=new U(H.lt,H.ly,H.lf),z=Math.min(1,H.m),q=.05+.13*z,V=.4+.55*z,K=V*V*1.6,ie=T.copy(_).sub(N);ie.y*=.35,ie.normalize();for(const le of M){const pe=le.g.attributes.position,ge=le.g.attributes.normal,Ve=le.g.attributes.aScuff;for(let ke=0;ke<pe.count;ke++){S.fromBufferAttribute(pe,ke).applyMatrix4(le.m);const ee=S.x-N.x,ae=S.y-N.y,_e=S.z-N.z,Fe=ee*ee+ae*ae+_e*_e;if(Fe>K)continue;const Ae=Fe/K,We=1-Ae,yt=We*We*(3-2*We),F=-2*(6*We*(1-We))/K*.5,it=.75+.5*Math.abs(Math.sin(S.x*91.7+S.y*57.3+S.z*33.1));if(ge){L.fromBufferAttribute(ge,ke);const Le=ie.dot(L);I.set(ee,ae,_e).multiplyScalar(q*it*F*2),I.addScaledVector(L,-I.dot(L)),L.addScaledVector(I,-Le*-1).normalize(),ge.setXYZ(ke,L.x,L.y,L.z)}S.addScaledVector(ie,q*yt*it),S.applyMatrix4(le.mi),pe.setXYZ(ke,S.x,S.y,S.z),Ve&&Ve.setX(ke,Math.min(1,Ve.getX(ke)+yt*(.35+.65*z)))}pe.needsUpdate=!0,Ve&&(Ve.needsUpdate=!0),ge&&(ge.needsUpdate=!0)}}y=x.length;for(const D of M)D.g.computeBoundingSphere()},g.setDirt=x=>{h.value=x},g.update=x=>{for(const b of v)b.pivot.rotation.y=b.front?x.steer:0,b.spin.rotation.x=x.spin;d.rotation.z=x.roll||0,d.rotation.x=x.pitch||0},g.dispose=()=>{if(M)for(const x of M)x.g.dispose();c.dispose(),l.dispose(),u.F&&u.F.dispose(),u.R&&u.R.dispose()},t&&(g.setLivery(t),g.flush()),g}const Xh={rookie:{pace:.905,aggression:.25,mistakes:.0012,lines:3},pro:{pace:.945,aggression:.45,mistakes:7e-4,lines:4},veteran:{pace:.975,aggression:.65,mistakes:3e-4,lines:5},legend:{pace:1,aggression:.85,mistakes:12e-5,lines:5}};class Ic{constructor(e,t="pro",n=1,s=0){this.track=e,this.lv=Xh[t]||Xh.pro,this.rnd=ba(n*7919+13),this.skill=.97+this.rnd()*.06,this.lane=s,this.laneT=s,this.laneTimer=2+this.rnd()*4,this.err=0,this.mistake=0,this.passing=0,this.steerLP=0}control(e,t,n,s,r){const a=this.track,o=Math.max(.1,t.vx);this.laneTimer-=e;let c=null,l=1e9;for(const H of s){if(H.car===t)continue;let N=H.s-n.s;N<-a.length/2&&(N+=a.length),N>a.length/2&&(N-=a.length),N>0&&N<l&&Math.abs(H.u-n.u)<3.4&&(l=N,c=H)}let u=!1,h=!1;for(const H of s){if(H.car===t)continue;let N=H.s-n.s;if(N<-a.length/2&&(N+=a.length),N>a.length/2&&(N-=a.length),N>-8&&N<8){const z=H.u-n.u;z>.5&&z<3.8&&(h=!0),z<-.5&&z>-3.8&&(u=!0)}}const f=r.phase==="green"&&r.t>9;if(c&&l<34&&this.laneTimer<=0&&f){const H=[-1,1].map(V=>this.laneTarget(n.u+V*3.6)),N=H.map(V=>this.laneFree(t,n,s,V)),z=this.rnd()<.5?0:1,q=N[z]?z:N[1-z]?1-z:-1;q>=0&&this.rnd()<.5+.5*this.lv.aggression&&(this.laneT=H[q],this.passing=3+this.rnd()*3),this.laneTimer=1.5+this.rnd()*2}else this.passing>0?(this.passing-=e,this.passing<=0&&!c&&(this.laneT=this.lane+(this.rnd()-.5)*2)):this.laneTimer<=0&&(this.laneT=this.lane+(this.rnd()-.5)*3,this.laneTimer=4+this.rnd()*6);this.laneT=Ie(this.laneT,-a.cfg.halfW+1.8,a.cfg.halfW-1.8),h&&this.laneT>this.err&&(this.laneT=this.err-.3),u&&this.laneT<this.err&&(this.laneT=this.err+.3),h&&u&&(this.laneT=this.err),this.err+=(this.laneT-this.err)*Math.min(1,e*.9),this.mistake>0?this.mistake-=e:r.phase==="green"&&this.rnd()<this.lv.mistakes*e*60&&(this.mistake=.4+this.rnd()*.5);const d=Math.atan2(n.tx,n.tz),m=sr(d-t.psi+Math.atan2(t.vy,Math.max(5,o))*0),v=n.u-this.err,g=a.at(n.s+.18*o+6).k;let p=Math.atan(t.C.L*g)*1+.01*o*o*g*0;p+=.9*m+Math.atan2(1.1*v,o+6)-.09*(t.w-o*n.k)*1;const M=Math.atan2(t.vy,Math.max(6,o));Math.abs(M)>.12&&(p+=.9*(M-Math.sign(M)*.12));const y=t.C.maxSteer/(1+Math.pow(o/42,2));let _=Ie(p/y,-1,1);_+=this.mistake>0?Math.sin(this.mistake*14)*.05:0,this.steerLP+=(_-this.steerLP)*Math.min(1,e*14);const S=Math.abs(a.at(n.s+40+o*.8).k);let T=88*this.lv.pace*this.skill*(t.C.pace||1);const E=a.at(n.s+30).bank,P=(20+9.81*Math.tan(Math.min(E,.55))*1.4)*(t.C.mu.track/1.5)*(1-.07*Ie(t.dirty||0,0,1))*.94;if(S>1e-4&&(T=Math.min(T,Math.sqrt(P/S))),c){const H=7+o*.12,N=Math.max(0,c.car.vx);if(l<H+25){const z=Ie((l-H)/25,-1,1);T=Math.min(T,N*(1+.04*z)+(z>0?6:-4))}this.passing>0&&Math.abs(this.err-c.u)>2.5&&(T=Math.max(T,N+2))}this.mistake>0&&(T*=.85),r.phase!=="green"&&r.phase!=="checker"&&r.phase!=="yellow"&&(T=0),r.phase==="yellow"&&(T=Math.min(T,38)),r.phase==="checker"&&(T=Math.min(T,Math.max(40,86-4.5*(r.t-(r.checkerT||r.t)))));const x=T-t.vx,L=Math.abs(M)>.2?0:Ie(.5+x*.45,0,1),I=Math.abs(o*o*n.k),D=Ie(-x*.15-.05,0,.85*Ie(1-.8*I/20,.22,1))*(x<-3?1:0);return{steer:this.steerLP,throttle:D>0?0:L,brake:D,analog:!0}}laneTarget(e){return Ie(e,-this.track.cfg.halfW+1.8,this.track.cfg.halfW-1.8)}laneFree(e,t,n,s){for(const r of n){if(r.car===e)continue;let a=r.s-t.s;if(a<-this.track.length/2&&(a+=this.track.length),a>this.track.length/2&&(a-=this.track.length),a>-10&&a<18&&Math.abs(r.u-s)<2.6)return!1}return!0}}const jv=9.81,Et=()=>new U,Qh=new Ge,Ao=new Mt,$v=new Mt;class Zv{constructor(e){const t=e.C;this.C=t,this.m=t.mass;const n=t.length||5,s=t.width||1.95,r=t.H||1.4,a=t.cgH||.52,o=t.trackHalf||.78,c=t.wheelR||.34,l=n/2,u=s/2;this.cg=a,this.hl=l,this.wr=c;const h=[];for(const[M,y]of[[t.a,"f"],[-t.b,"r"]])for(const _ of[1,-1])h.push({p:Et().set(_*o,c-a,M),r:c,wheel:!0});for(const M of[1,-1])for(const y of[1,-1])h.push({p:Et().set(y*u,.2-a,M*l*.97),r:0}),h.push({p:Et().set(y*u*.82,.62*r-a,M*l*.93),r:0});for(const M of[.9,-1.3])for(const y of[1,-1])h.push({p:Et().set(y*u*.72,r-a,M),r:0});this.pts=h,this.I=[this.m/12*(n*n+r*r)*.8,t.Iz||2900,this.m/12*(s*s+r*r)];const f=Math.sin(e.psi),d=Math.cos(e.psi),m=new Mt().setFromAxisAngle(new U(0,1,0),e.psi),v=new Mt().setFromAxisAngle(new U(0,0,1),e.gr||0),g=new Mt().setFromAxisAngle(new U(1,0,0),-(e.gp||0));this.q=m.multiply(v).multiply(g),this.p=Et().set(e.x,e.gh||0,e.z).add(Et().set(0,a,0).applyQuaternion(this.q)),this.v=Et().set(e.vx*f+e.vy*d,0,e.vx*d-e.vy*f);const p=Et().set(0,0,1).applyQuaternion(this.q);Et().set(0,1,0).applyQuaternion(this.q),this.w=Et().set(0,e.w,0).addScaledVector(p,-Ie(e.vy,-30,30)*.12),e.vx<-20&&this.w.addScaledVector(Et().set(1,0,0).applyQuaternion(this.q),-.4),this.dmg={front:0,rear:0,left:0,right:0,top:0},this.dents=[],this.age=0,this.rest=0,this.done=!1,this.upright=!1,this.ev=[],this.dirtGain=0,this.maxHit=0,this._R=new Ge,this._r=Et(),this._pw=Et(),this._vel=Et(),this._F=Et(),this._T=Et(),this._n=Et(),this._vt=Et(),this._ft=Et(),this._tmp=Et(),this._tmp2=Et()}step(e,t,n){if(this.done)return;const s=2,r=e/s;this.ev.length=0;for(let c=0;c<s;c++)this.sub(r,t,n);this.age+=e;const a=this.v.length(),o=this.w.length();if(this.rest=a<.9&&o<.35?this.rest+e:0,this.rest>1||this.age>20){this.done=!0;const c=Et().set(0,1,0).applyQuaternion(this.q);this.upright=c.y>.62,this.v.set(0,0,0),this.w.set(0,0,0)}}sub(e,t,n){const s=this.m,r=this.q;Qh.makeRotationFromQuaternion(r);const a=Qh.elements,o=this._F.set(0,-s*jv,0),c=this._T.set(0,0,0),l=this.v.length();t(this.p.x,this.p.z,n);const u=this.p.y-n.y;if(l>1){o.addScaledVector(this.v,-.5*1.2*(this.C.cdA||1.3)*1.6*l);const S=this._tmp.set(a[8],a[9],a[10]).dot(this.v)/l;if(S<-.3&&u<6){const T=.6*l*l*6*(-S-.3);o.y+=T;const E=this._r.set(0,0,this.hl).applyQuaternion(r);c.add(this._tmp2.crossVectors(E,this._tmp.set(0,T*1,0)))}}for(const _ of this.pts){const S=this._r.copy(_.p).applyQuaternion(r),T=this._pw.copy(this.p).add(S),E=this._vel.crossVectors(this.w,S).add(this.v);t(T.x,T.z,n);let P=n.y+_.r-T.y;if(P>0){const L=this._n.set(n.nx,n.ny,n.nz),I=E.dot(L),D=_.wheel?15e4:38e4,H=_.wheel?5200:12e3,N=Ie(D*P-H*I,0,_.wheel?11e4:2e5),z=this._tmp.copy(L).multiplyScalar(N),q=this._vt.copy(E).addScaledVector(L,-I),V=q.length(),K=n.surface==="grass";let ie=K?1.1:.6;if(_.wheel){ie=K?2.3:.95;const pe=this._tmp2.set(a[8],a[9],a[10]).addScaledVector(L,-L.dot(this._tmp2)),ge=pe.length();if(ge>.001){pe.multiplyScalar(1/ge);const Ve=q.dot(pe);q.addScaledVector(pe,-Ve*.92)}}const le=q.length();if(le>1e-5){const pe=this._ft.copy(q).multiplyScalar(-ie*N/(le+.35));z.add(pe)}if(_.wheel&&V>1e-5&&this._ft.copy(E).addScaledVector(L,-I),o.add(z),c.add(this._tmp2.crossVectors(S,z)),N>4e3&&this.ev.length<8&&this.ev.push({x:T.x,y:n.y,z:T.z,hit:N/11e4,speed:V,soft:K,wheel:!!_.wheel}),!_.wheel&&N>9e3){const pe=N/2e5*e*2.6,ge=_.p;ge.y>.3&&(this.dmg.top+=pe),Math.abs(ge.z)>Math.abs(ge.x)*1.2?ge.z>0?this.dmg.front+=pe:this.dmg.rear+=pe:ge.x>0?this.dmg.left+=pe:this.dmg.right+=pe,N>3e4&&(this._dentT||0)<=this.age&&(this._dentT=this.age+.12,this.dents.push({lf:ge.z,lt:ge.x,ly:ge.y+this.cg,m:Ie(N/16e4,.15,1)}))}I<-3&&-I>this.maxHit&&(this.maxHit=-I),K&&(this.dirtGain+=N/11e4*e*1.6)}const x=n.u-n.wallU,b=n.infieldU-n.u;if(x>0||b>0){const L=x>0,I=L?x:b,D=L?-n.rx:n.rx,H=L?-n.rz:n.rz,N=E.x*D+E.z*H,z=Ie(22e4*I-9e3*N,0,9e4),q=this._tmp.set(D*z,0,H*z),V=E.x-N*D,K=E.z-N*H,ie=E.y,le=Math.hypot(V,ie,K);if(le>1e-5){const pe=-.35*z/(le+.4);q.x+=V*pe,q.y+=ie*pe,q.z+=K*pe}o.add(q),c.add(this._tmp2.crossVectors(S,q)),z>6e3&&this.ev.length<8&&this.ev.push({x:T.x,y:T.y,z:T.z,hit:z/9e4,speed:le,soft:!1,wall:!0}),N<-3&&-N>this.maxHit&&(this.maxHit=-N)}}this.v.addScaledVector(o,e/s),this.p.addScaledVector(this.v,e),Ao.copy(r).invert();const h=this._tmp.copy(this.w).applyQuaternion(Ao),f=this._r.copy(c).applyQuaternion(Ao),d=this.I,m=(d[2]-d[1])*h.y*h.z/d[0],v=(d[0]-d[2])*h.z*h.x/d[1],g=(d[1]-d[0])*h.x*h.y/d[2],p=this._pw.set(f.x/d[0]+m,f.y/d[1]+v,f.z/d[2]+g).applyQuaternion(r);this.w.addScaledVector(p,e),this.w.multiplyScalar(1-.45*e);const M=this.w,y=$v.set(M.x*e*.5,M.y*e*.5,M.z*e*.5,0).multiply(r);r.set(r.x+y.x,r.y+y.y,r.z+y.z,r.w+y.w).normalize()}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}forwardYaw(){const e=Et().set(0,0,1).applyQuaternion(this.q);return Math.atan2(e.x,e.z)}}const ta=Dn.length/2,na=Dn.width/2;class Ro{constructor(e,t,n,s,r=!1,a=null,o=null){this.carId=o,this.id=e,this.name=t,this.number=n,this.livery=s,this.isPlayer=r,this.sim=new Qv(e,a),this.driver=null,this.q={},this.hint=0,this.prog=0,this.prevS=0,this.lap=0,this.lapStart=0,this.lastLap=null,this.bestLap=null,this.finished=!1,this.finishTime=null,this.pos=0,this.gap=0,this.visual=null,this.controls={steer:0,throttle:0,brake:1},this.slot=e,this.remote=!1,this.nid=null,this.left=!1}}class Kh{constructor(e,t,n={}){this.track=e,this.entries=t,this.laps=n.laps||3,this.mode=n.mode||"race",this.phase="grid",this.t=0,this.countdown=4.2,this.onEvent=n.onEvent||(()=>{}),this.mp=!!n.mp,this.holdGrid=!!n.hold,this.finishedCount=0,this.leaderDone=!1,this.endTimer=0,this.sorted=t.slice(),this.ready=!1,this.lastCount=99,this.flag=null,this.wallHits=0,this.cars=t.map(r=>({car:r.sim,s:0,u:0}));const s=e.cfg;this._wallU=s.halfW+.5,this._infU=-s.halfW-s.apron-s.infieldLimit,this._gq={},this._gHint=0,this._go={},this._tf={x:0,z:0},this._groundFn=(r,a,o)=>{const c=this._gq;if(e.query(r,a,this._gHint,c),o.y=c.y,o.surface=c.surface,o.u=c.u,o.rx=c.rx,o.rz=c.rz,o.wallU=this._wallU,o.infieldU=this._infU,c.surface==="track"&&c.bank){const l=Math.sin(c.bank),u=Math.cos(c.bank);o.nx=-c.rx*l,o.ny=u,o.nz=-c.rz*l}else o.nx=0,o.ny=1,o.nz=0;return o}}get player(){return this.entries.find(e=>e.isPlayer)}gridUp(e=0,t=null){const n=this.track,s=t?t.slice():this.entries.slice(),r=this.player;r&&!t&&(s.splice(s.indexOf(r),1),s.splice(Ie(e,0,s.length),0,r)),s.forEach((a,o)=>{const c=Math.floor(o/2),l=o%2,u=-14-c*11-(l?5.5:0),h=l?3.4:-3.4,f=n.point(u,h,{});a.sim.place(f.x,f.z,f.heading,0),a.sim.damage={front:0,rear:0,left:0,right:0},a.sim.gear=1,a.sim.rpm=a.sim.C.idle,n.query(f.x,f.z,void 0,a.q),a.hint=a.q.i,a.prevS=a.q.s,a.prog=u,a.lap=0,a.lapStart=0,a.lastLap=null,a.bestLap=null,a.finished=!1,a.finishTime=null,a.gridPos=o+1,a.driver&&(a.driver.lane=h*.4,a.driver.laneT=a.driver.lane,a.driver.err=h)}),this.sortNow(),this.phase="grid",this.t=0,this.countdown=4.2,this.lastCount=99}rollingStart(e=40,t=-60){const n=this.player,s=this.track.point(t,-1,{});n.sim.place(s.x,s.z,s.heading,e),n.sim.gear=3,this.track.query(s.x,s.z,void 0,n.q),n.hint=n.q.i,n.prevS=n.q.s,n.prog=t,n.lap=0,n.lapStart=0,this.phase="green",this.t=0,this.countdown=0}sortNow(){this.sorted=this.entries.slice().sort((e,t)=>!!e.left!=!!t.left?e.left?1:-1:t.finished!==e.finished?t.finished?1:-1:t.finished&&e.finished?e.finishTime-t.finishTime:t.prog-e.prog),this.sorted.forEach((e,t)=>{e.pos=t+1})}update(e){const t=this.track;if(this.t+=e,this.phase==="grid"){this.holdGrid||(this.countdown-=e);const r=Math.ceil(this.countdown);if(r!==this.lastCount&&r<=3&&(this.lastCount=r,r>0&&this.onEvent("count",r)),this.countdown<=0){this.phase="green",this.t=0,this.onEvent("go",0);for(const a of this.entries)a.lapStart=0}}for(let r=0;r<this.entries.length;r++){const a=this.entries[r],o=a.sim.ghost;this.cars[r].s=a.q.s||0,this.cars[r].u=o?1e5:a.q.u||0,this.cars[r].car=a.sim}const n=t.length;for(const r of this.entries){const a=r.sim,o=r.q;if(a.hidden)continue;if(r.remote){t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,r.finished&&!r.countedFin&&(r.countedFin=!0,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker")));continue}if(a.tumble)this.stepTumble(r,e);else{let u=r.controls;!r.isPlayer&&r.driver&&(u=r.driver.control(e,a,o,this.cars,this)),r.controls=u,this.phase==="grid"&&(u={steer:0,throttle:0,brake:1,analog:!0}),r.finished&&r.isPlayer&&this.phase!=="grid"&&(u={steer:Ie(u.steer*.6,-1,1),throttle:0,brake:.25,analog:!0});let h=0,f=0;for(const m of this.entries){if(m===r||m.sim.ghost)continue;let v=m.q.s-o.s;if(v<-n/2&&(v+=n),v>n/2&&(v-=n),v>3&&v<45&&Math.abs(m.q.u-o.u)<3){const g=1-v/45;h=Math.max(h,g*(m.sim.vx>30?1:.3)),v<20&&(f=Math.max(f,1-v/20))}}a.sampleGround(t,r.hint),r.hold>0&&(r.hold-=e,u={steer:0,throttle:0,brake:1,analog:!0}),a.step(e,u,{surface:o.surface,bank:o.bank,rx:o.rx,rz:o.rz,k:o.k,draft:h,dirty:f});const d=this.phase!=="grid"?a.checkTrip(e)||a.pendingTrip:null;d&&this.startTumble(r,d)}if(t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,!r.isPlayer&&this.phase!=="grid"&&!a.tumble){const u=Math.atan2(o.tx,o.tz);let h=Math.abs((a.psi-u+Math.PI*3)%(Math.PI*2)-Math.PI);if(a.vx<6||h<1.2&&!1||Math.abs(a.psi-u)>1.6&&Math.abs(a.psi-u)<4.7?r.stuck=(r.stuck||0)+e:r.stuck=0,r.stuck>3&&!r.finished){const f=t.point(o.s+6,Ie(o.u,-7,7),{});a.place(f.x,f.z,f.heading,28),a.w=0,a.gear=2,r.stuck=0}}let c=o.s-r.prevS;c<-n/2?c+=n:c>n/2&&(c-=n),r.prevS=o.s;const l=r.prog;if(r.prog+=c,Math.floor(r.prog/n)>Math.floor(l/n)&&r.prog>0){const u=Math.floor(r.prog/n);if(u>=1){const h=this.t-r.lapStart;this.phase!=="grid"&&u===r.lap+1&&(r.lastLap=h,(r.lapStart>0||u>1||this.mode==="hotlap"||h>20)&&(!r.bestLap||h<r.bestLap)&&(r.bestLap=h),r.lap=u,r.lapStart=this.t,this.onEvent("lap",r,h),r.isPlayer&&r.bestLap===h&&this.onEvent("bestlap",r,h),this.mode==="race"&&u>=this.laps&&!r.finished&&(r.finished=!0,r.finishTime=this.t,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.checkerT=this.t,this.onEvent("checker"))))}}}this.contacts(),this.sortNow();const s=this.sorted[0];for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r-1];a.gapAhead=o?Math.max(0,o.prog-a.prog)/Math.max(25,a.sim.vx):0,a.gapLead=s?Math.max(0,s.prog-a.prog)/Math.max(25,a.sim.vx):0}for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r+1];a.gapBehind=o?Math.max(0,a.prog-o.prog)/Math.max(25,o.sim.vx):0}if(this.phase==="checker"){const r=this.player;this.mode==="race"&&r&&r.finished&&(this.endTimer+=e,this.endTimer>(this.mp?5.5:4.5)&&!this.done&&(this.done=!0,this.phase="done",this.onEvent("done")))}}startTumble(e,t){const n=e.sim;n.tumble||(n.tumble=new Zv(n),n.pendingTrip=null,n.wrecked=!1,e.tumbleDone=0,e.tumbleKind=t,this.onEvent("flip",e,t,n.speed))}stepTumble(e,t){const n=e.sim,s=n.tumble;this._gHint=e.hint;const r=s.done;s.done||s.step(t,this._groundFn,this._go);const a=s.q,o=2*(a.x*a.z+a.w*a.y),c=1-2*(a.x*a.x+a.y*a.y);Math.hypot(o,c)>.35&&(n.psi=Math.atan2(o,c)),n.x=s.p.x,n.z=s.p.z;const l=Math.sin(n.psi),u=Math.cos(n.psi);n.vx=s.v.x*l+s.v.z*u,n.vy=s.v.x*u-s.v.z*l,n.w=s.w.y,n.throttle=0,n.rpm+=(n.C.idle-n.rpm)*Math.min(1,t*3),n.skid=0,n.gh=s.p.y-s.cg;for(let d=0;d<s.ev.length&&d<3;d++)this.onEvent("tumbleHit",e,s.ev[d]);const h=n.damage,f=s.dmg;if(f.front+f.rear+f.left+f.right+f.top>0){const d=f.top*.5;h.front=Math.min(1,h.front+f.front+d),h.rear=Math.min(1,h.rear+f.rear+d),h.left=Math.min(1,h.left+f.left+d),h.right=Math.min(1,h.right+f.right+d),f.front=f.rear=f.left=f.right=f.top=0}if(s.dents.length){for(const d of s.dents)n.dents.length<40&&n.dents.push(d);s.dents.length=0,n.dentVer=(n.dentVer||0)+1}if(n.dirt=Math.min(1,n.dirt+s.dirtGain*.6),s.dirtGain=0,s.done&&!r&&(e.tumbleDone=this.t,n.wrecked=!0,this.onEvent("wrecked",e)),s.done){e.tumbleDone||(e.tumbleDone=this.t);const d=this.t-e.tumbleDone;e.isPlayer?d>3.2&&this.recover(e):(e.retired=!0,d>2.5&&(n.ghost=!0),d>9&&(n.hidden=!0,this.onEvent("removed",e)))}}recover(e){const t=e.sim,n=e.q,s=this.track.point(n.s,Ie(n.u,-6,6),{});t.recover(s.x,s.z,s.heading),t.dents=t.dents.slice(0,40),e.hold=1.6,e.tumbleDone=0,this.track.query(s.x,s.z,e.hint,n),e.hint=n.i,this.onEvent("recovered",e)}tripFromHit(e,t){const n=e.sim;n.tumble||n.ghost||this.phase==="grid"||t>14&&Math.abs(n.vy)>8&&n.speed>28&&n.rand()<.3&&(n.pendingTrip="impact")}contacts(){const e=this.entries,t=this.track,n=t.cfg,s=n.halfW+.5,r=-n.halfW-n.apron-n.infieldLimit,a=e.map(o=>o.sim.tumble?[o.sim.x,o.sim.z,o.sim.wvx,o.sim.wvz]:null);for(let o=0;o<e.length;o++){const c=e[o].sim;if(c.ghost)continue;for(let f=o+1;f<e.length;f++){const d=e[f].sim;if(d.ghost)continue;const m=e[o].remote,v=e[f].remote;if(m&&v)continue;const g=d.x-c.x,p=d.z-c.z;if(g*g+p*p>36)continue;const M=Math.sin(c.psi),y=Math.cos(c.psi),_=Math.sin(d.psi),S=Math.cos(d.psi);for(const T of[1.4,0,-1.4])for(const E of[1.4,0,-1.4]){const P=c.x+M*T,x=c.z+y*T,b=d.x+_*E,L=d.z+S*E,I=b-P,D=L-x,H=I*I+D*D,N=2;if(H<N*N&&H>1e-6){const z=Math.sqrt(H),q=I/z,V=D/z,K=N-z,ie=d.wvx-c.wvx,le=d.wvz-c.wvz,pe=ie*q+le*V,ge=K*.5;if(m||(c.x-=q*ge,c.z-=V*ge),v||(d.x+=q*ge,d.z+=V*ge),pe<0){const Ve=-1.12*pe/(1/c.C.mass+1/d.C.mass),ke=Math.min(Ve,3e4);m||c.applyImpulse((P+b)/2,(x+L)/2,-q,-V,ke*.6),v||d.applyImpulse((P+b)/2,(x+L)/2,q,V,ke*.6);const ee=Math.min(1,-pe/22);m||this.tripFromHit(e[o],-pe),v||this.tripFromHit(e[f],-pe),-pe>2&&(m||c.addDamage((P+b)/2,(x+L)/2,ee*.18),v||d.addDamage((P+b)/2,(x+L)/2,ee*.18),this.onEvent("crash",e[o],e[f],ee))}}}}const l=e[o].q;if(!l||l.u===void 0||c.tumble||e[o].remote)continue;const u=Math.sin(c.psi),h=Math.cos(c.psi);for(const[f,d]of[[ta,na],[ta,-na],[-ta,na],[-ta,-na]]){const m=c.x+u*f+h*d,v=c.z+h*f-u*d,g={};t.query(m,v,e[o].hint,g);const p=g.u-s,M=r-g.u;if(p>0||M>0){const y=p>0,_=y?-g.rx:g.rx,S=y?-g.rz:g.rz,T=y?p:M;c.x+=_*T*1,c.z+=S*T*1;const E=c.wvx*_+c.wvz*S;if(E<0){const P=-1.08*E*c.C.mass;c.applyImpulse(m,v,_,S,Math.min(P,9e4)*.55);const x=Math.min(1,-E/26);-E>22&&Math.abs(c.vy)>7&&c.rand()<.35&&!c.tumble&&(c.pendingTrip="impact"),-E>1.5&&(c.addDamage(m,v,x*.22),this.onEvent("wall",e[o],x)),c.scrape=1,c.vx*=.995}}}}for(let o=0;o<e.length;o++){const c=a[o],l=e[o].sim;if(c&&l.tumble){const u=l.tumble;u.p.x+=l.x-c[0],u.p.z+=l.z-c[1],u.v.x+=l.wvx-c[2],u.v.z+=l.wvz-c[3]}}}}const Td="rtta3.career.v1",rr={paint:"#d9dde2",accent:"#1d1f24",trim:"#1d1f24",pattern:"none",finish:"gloss",number:"00",numberColor:"#1d1f24",numberStyle:"block",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}},xn=[{id:"rookie",name:"Rookie Cup",laps:3,field:12,ai:"rookie",mult:1,unlockRep:0,races:6},{id:"regional",name:"Regional Sprint",laps:5,field:16,ai:"pro",mult:1.5,unlockRep:350,races:8},{id:"pro",name:"Pro Series",laps:8,field:24,ai:"veteran",mult:2.2,unlockRep:1100,races:10},{id:"legends",name:"Legends 200",laps:12,field:32,ai:"legend",mult:3,unlockRep:2600,races:12}],Yh={1:{races:2,avgPct:.3,series:0},2:{races:5,avgPct:.55,series:0},3:{races:9,avgPct:.7,series:1},4:{races:14,avgPct:.82,series:2}},Hi={pattern:{none:0,stripe:0,split:300,chevron:600,fade:900},finish:{gloss:0,matte:400,metallic:800}},jh={rookie:["thunder","piedmont","thunder","piedmont","lonestar","americas"],regional:["piedmont","lonestar","thunder","americas","lonestar","piedmont","americas","thunder"],pro:["lonestar","americas","piedmont","thunder","americas","lonestar","piedmont","americas","thunder","lonestar"],legends:["americas","thunder","lonestar","piedmont","americas","americas","lonestar","thunder","piedmont","americas","lonestar","americas"]},Jv=i=>JSON.parse(JSON.stringify(i)),kc=()=>({v:1,name:"Driver",credits:0,rep:0,races:[],owned:[],declined:[],unlocked:{pattern:["none","stripe"],finish:["gloss"]},livery:Jv(rr),seriesIndex:0,seasonRace:0,bestLap:null,bests:{},unlockAll:!0,car:null});function e_(i){try{const e=i&&i.getItem(Td);if(e){const t=JSON.parse(e);if(t&&t.v===1){const n=Object.assign(kc(),t);return(!n.bests||typeof n.bests!="object")&&(n.bests={}),n.bestLap&&!n.bests.americas&&(n.bests.americas=n.bestLap),n}}}catch{}return kc()}class La{constructor(e=typeof localStorage<"u"?localStorage:null){this.storage=e,this.state=e_(e),this.listeners=new Set,this.applyUnlockAll()}applyUnlockAll(){const e=this.state;e.unlockAll&&(e.owned=gr.map(t=>t.id),e.unlocked.pattern=Object.keys(Hi.pattern),e.unlocked.finish=Object.keys(Hi.finish))}setUnlockAll(e){this.state.unlockAll=!!e,e?this.applyUnlockAll():this.state.car=null,this.save()}seriesOpen(e){return!!xn[e]&&(this.state.unlockAll||this.state.rep>=xn[e].unlockRep)}setCar(e){this.state.car=e||null,this.save()}carChoice(){return this.state.unlockAll?this.state.car:null}save(){try{this.storage&&this.storage.setItem(Td,JSON.stringify(this.state))}catch{}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){const e=this.state.unlockAll;this.state=kc(),this.state.unlockAll=e,this.applyUnlockAll(),this.save()}get series(){return xn[this.state.seriesIndex]}unlockedSeries(){return xn.filter((e,t)=>this.seriesOpen(t)||t<=this.state.seriesIndex)}selectSeries(e){return this.seriesOpen(e)?(this.state.seriesIndex=e,this.state.seasonRace=0,this.save(),!0):!1}trackFor(e,t){const n=jh[e]||jh.rookie;return n[(t%n.length+n.length)%n.length]}nextRace(){const e=this.series,t=this.trackFor(e.id,this.state.seasonRace),n=bt[t],s=Math.max(0,xn.indexOf(e));return{series:e,index:this.state.seasonRace,of:e.races,laps:n&&n.laps[s]||e.laps,field:e.field,ai:e.ai,track:t}}bestFor(e){return this.state.bests&&this.state.bests[e]||null}noteBest(e,t){if(!t||!isFinite(t))return!1;const n=this.state.bests,s=n[e];return!s||t<s?(n[e]=t,e==="americas"&&(this.state.bestLap=t),this.save(),!0):!1}setLivery(e){const t=this.state.livery;for(const n of Object.keys(e))n==="slots"?Object.assign(t.slots,e.slots):t[n]=e[n];for(const n of Ac){const s=t.slots[n];s&&!this.state.owned.includes(s)&&(t.slots[n]=null)}return this.save(),t}static finishPct(e,t){return t<=1?1:1-(e-1)/(t-1)}recentAvgPct(e=3){const t=this.state.races.slice(-e);return t.length?t.reduce((n,s)=>n+t_.pct(s),0)/t.length:0}repFor(e,t,n){const s=120*(t-e)/Math.max(1,t-1);return Math.round((s+(e===1?40:0)+(e<=3?15:0)+10)*n)}recordResult({series:e,pos:t,field:n,laps:s,bestLap:r,points:a,track:o}){const c=this.state,l=xn.find(M=>M.id===e)||this.series,u=new Set(this.offers().map(M=>M.id)),h=this.repFor(t,n,l.mult);let f=0;const d=[],m=new Set;for(const M of Ac){const y=c.livery.slots[M],_=y&&Ds(y);if(!_||m.has(y)||!c.owned.includes(y))continue;m.add(y);const S=_.slots.includes(M)?1:.6,T=.5+.5*La.finishPct(t,n),E=Math.round(_.payout*S*T);f+=E,d.push({id:y,name:_.name,amount:E})}const v=Math.round(40*l.mult*(n-t+1));c.rep+=h,c.credits+=f+v,c.races.push({series:l.id,pos:t,field:n,laps:s,track:o,t:Date.now()}),r&&o&&((!c.bests[o]||r<c.bests[o])&&(c.bests[o]=r),o==="americas"&&(!c.bestLap||r<c.bestLap)&&(c.bestLap=r)),l.id===this.series.id&&(c.seasonRace=Math.min(c.seasonRace+1,l.races)),this.save();const g=this.offers().filter(M=>!u.has(M.id)),p=xn.filter(M=>c.rep>=M.unlockRep&&c.rep-h<M.unlockRep);return{repGain:h,prize:v,sponsorPay:f,paid:d,newOffers:g,unlockedSeries:p,rep:c.rep,credits:c.credits}}eligibleTier(){const e=this.state,t=this.recentAvgPct(3),n=Math.max(...xn.map((r,a)=>e.rep>=r.unlockRep?a:0));let s=0;for(const r of[1,2,3,4]){const a=Yh[r];e.races.length>=a.races&&t>=a.avgPct&&n>=a.series&&(s=r)}return s}offers(){if(this.state.unlockAll)return[];const e=this.eligibleTier();return gr.filter(t=>t.tier<=e&&!this.state.owned.includes(t.id)&&!this.state.declined.includes(t.id))}nextTierGoal(){const e=this.eligibleTier()+1,t=Yh[e];if(!t)return null;const n=this.state,s=Math.max(...xn.map((r,a)=>n.rep>=r.unlockRep?a:0));return{tier:e,racesNeeded:Math.max(0,t.races-n.races.length),avgNeeded:t.avgPct,avgNow:this.recentAvgPct(3),seriesNeeded:t.series>s?xn[t.series].name:null}}acceptSponsor(e){return this.offers().some(t=>t.id===e)?(this.state.owned.push(e),this.save(),!0):!1}declineSponsor(e){this.state.declined.includes(e)||(this.state.declined.push(e),this.save())}canUse(e,t){return this.state.unlocked[e]?this.state.unlocked[e].includes(t)||Hi[e][t]===0:!0}buy(e,t){const n=Hi[e]&&Hi[e][t];return n===void 0||this.canUse(e,t)||this.state.credits<n?!1:(this.state.credits-=n,(this.state.unlocked[e]||=[]).push(t),this.save(),!0)}}const t_={pct:i=>La.finishPct(i.pos,i.field)},n_=new La;function i_(){const i=new Set,e=new Set,t={touchActive:!1,touch:{steer:0,throttle:0,brake:0},steer:0,usingPad:!1,lastKeyT:0},n={KeyC:"camera",Escape:"pause",KeyP:"pause",KeyR:"reset",KeyV:"look"},s=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);addEventListener("keydown",a=>{a.target&&/INPUT|TEXTAREA|SELECT/.test(a.target.tagName)||(s.has(a.code)&&a.preventDefault(),a.repeat||(i.add(a.code),n[a.code]&&e.add(n[a.code])))}),addEventListener("keyup",a=>i.delete(a.code)),addEventListener("blur",()=>i.clear()),t.setTouch=a=>{t.touch.steer=Ie(a.steer||0,-1,1),t.touch.throttle=Ie(a.throttle||0,0,1),t.touch.brake=Ie(a.brake||0,0,1),t.lastTouchT=performance.now()},t.press=a=>e.add(a),t.consume=a=>e.has(a)?(e.delete(a),!0):!1,t.clear=()=>{e.clear()};const r=(...a)=>a.some(o=>i.has(o));return t.read=(a,o)=>{let c=0,l=0,u=0,h=!1;const f=r("ArrowLeft","KeyA"),d=r("ArrowRight","KeyD");u=(f?1:0)-(d?1:0),c=r("ArrowUp","KeyW")?1:0,l=r("ArrowDown","KeyS","Space")?1:0;const m=navigator.getGamepads?navigator.getGamepads():[],v=m&&[...m].find(g=>g&&g.connected);if(v){const g=Math.abs(v.axes[0])>.08?v.axes[0]:0,p=v.buttons[7]?v.buttons[7].value:0,M=v.buttons[6]?v.buttons[6].value:0;(g||p>.02||M>.02)&&(u=-g,c=Math.max(c,p),l=Math.max(l,M),h=!0,t.steer=Ie(-g,-1,1)),v.buttons[0]&&v.buttons[0].pressed&&!t._a&&e.add("look"),t._a=v.buttons[0]&&v.buttons[0].pressed,v.buttons[3]&&v.buttons[3].pressed&&!t._y&&e.add("camera"),t._y=v.buttons[3]&&v.buttons[3].pressed,v.buttons[9]&&v.buttons[9].pressed&&!t._s&&e.add("pause"),t._s=v.buttons[9]&&v.buttons[9].pressed}if(t.touchActive&&performance.now()-(t.lastTouchT||0)<600){const g=t.touch;(g.steer||g.throttle||g.brake)&&(u=g.steer,c=g.throttle,l=g.brake,h=!0,t.steer=g.steer)}if(!h){const g=3.6/(1+o/45),M=(u===0?6.5:g)*(Math.sign(u)!==Math.sign(t.steer)&&t.steer!==0&&u!==0?1.6:1);t.steer+=Ie(u-t.steer,-M*a,M*a)}return{steer:Ie(t.steer,-1,1),throttle:c,brake:l,analog:!0}},t}const kt=(i,e,t)=>i<e?e:i>t?t:i,Gi=i=>440*Math.pow(2,(i-69)/12);function Ia(i){let e=i>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const $h=new WeakMap;function ka(i,e="white"){let t=$h.get(i);if(t||(t={},$h.set(i,t)),t[e])return t[e];const n=i.sampleRate,s=Math.floor(n*4),r=2048,a=s+r,o=new Float32Array(a),c=Ia(e==="white"?1234:e==="pink"?777:4242);if(e==="white")for(let d=0;d<a;d++)o[d]=c()*2-1;else if(e==="pink"){let d=0,m=0,v=0,g=0,p=0,M=0,y=0;for(let _=0;_<a;_++){const S=c()*2-1;d=.99886*d+S*.0555179,m=.99332*m+S*.0750759,v=.969*v+S*.153852,g=.8665*g+S*.3104856,p=.55*p+S*.5329522,M=-.7616*M-S*.016898,o[_]=(d+m+v+g+p+M+y+S*.5362)*.11,y=S*.115926}}else{let d=0;for(let m=0;m<a;m++){const v=c()*2-1;d=(d+.02*v)/1.02,o[m]=d*3.5}}const l=i.createBuffer(1,s,n),u=l.getChannelData(0);for(let d=0;d<s;d++)u[d]=o[d];for(let d=0;d<r;d++){const m=d/r;u[d]=o[d]*m+o[s+d]*(1-m)}let h=0;for(let d=0;d<s;d++)h=Math.max(h,Math.abs(u[d]));const f=h>0?.95/h:1;for(let d=0;d<s;d++)u[d]*=f;return t[e]=l,l}function wd(i,e,t,n,s,r){const a=i.createGain(),o=Math.max(.002,s);return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+o),a.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(o+.01,r)),a.gain.setValueAtTime(0,t+Math.max(o+.01,r)+.005),a.connect(e),a}function $e(i,e,t,n){const s=n.dur??.2,r=wd(i,e,t,n.peak??.3,n.attack??.004,s);let a=r;if(n.pan){const l=i.createStereoPanner?i.createStereoPanner():null;l&&(l.pan.value=n.pan,l.connect(r),a=l)}let o=a;if(n.filter){const l=i.createBiquadFilter();l.type=n.filter.type||"lowpass",l.Q.value=n.filter.q??.7,l.frequency.setValueAtTime(n.filter.f,t),n.filter.f1&&l.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),l.connect(a),o=l}const c=i.createOscillator();return c.type=n.type||"sine",c.frequency.setValueAtTime(n.f0,t),n.f1&&c.frequency.exponentialRampToValueAtTime(n.f1,t+s),n.detune&&(c.detune.value=n.detune),c.connect(o),c.start(t),c.stop(t+s+.05),c}function Ht(i,e,t,n){const s=n.dur??.1,r=wd(i,e,t,n.peak??.3,n.attack??.002,s);let a=r;if(n.pan&&i.createStereoPanner){const l=i.createStereoPanner();l.pan.value=n.pan,l.connect(r),a=l}const o=i.createBiquadFilter();o.type=n.filter?.type||"bandpass",o.Q.value=n.filter?.q??1,o.frequency.setValueAtTime(n.filter?.f??1500,t),n.filter?.f1&&o.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),o.connect(a);const c=i.createBufferSource();return c.buffer=ka(i,n.kind||"white"),c.loop=!0,c.connect(o),c.start(t,(n.offset??0)%3.5),c.stop(t+s+.05),c}function s_(i,e=1.6,t=3.2,n=99){const s=i.sampleRate,r=Math.floor(s*e),a=i.createBuffer(2,r,s);for(let o=0;o<2;o++){const c=a.getChannelData(o),l=Ia(n+o*17);let u=0;for(let h=0;h<r;h++){const f=Math.pow(1-h/r,t);u+=(l()*2-1-u)*(.35+.65*(1-h/r)),c[h]=u*f*(h<64?h/64:1)}}return a}function Sa(i){return new Promise(e=>setTimeout(e,i))}const zn={C5:523.25,G5:783.99,A5:880,B5:987.77,E6:1318.5,A6:1760},Zh=(i,e,t=.03)=>i*(1+e*t),r_={hover(i,e,t,n=0){return $e(i,e,t,{type:"sine",f0:Zh(2400,n),dur:.035,peak:.07,attack:.002}),Ht(i,e,t,{dur:.012,peak:.035,filter:{type:"highpass",f:6500,q:.7}}),.06},click(i,e,t,n=0){return Ht(i,e,t,{dur:.014,peak:.2,filter:{type:"highpass",f:3500,q:.7}}),$e(i,e,t,{type:"sine",f0:Zh(1100,n),f1:700,dur:.075,peak:.28,attack:.002}),$e(i,e,t,{type:"triangle",f0:330,dur:.05,peak:.1,attack:.002}),.12},confirm(i,e,t){return $e(i,e,t,{type:"square",f0:zn.C5,dur:.1,peak:.12,filter:{type:"lowpass",f:3200}}),$e(i,e,t+.07,{type:"square",f0:zn.G5,dur:.24,peak:.13,filter:{type:"lowpass",f:3600,f1:1200}}),$e(i,e,t+.07,{type:"sine",f0:zn.G5*2,dur:.22,peak:.07}),$e(i,e,t,{type:"sine",f0:130,f1:100,dur:.18,peak:.22,attack:.003}),Ht(i,e,t+.07,{dur:.16,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),.35},back(i,e,t){return $e(i,e,t,{type:"sine",f0:740,f1:420,dur:.12,peak:.24,attack:.002}),Ht(i,e,t,{dur:.012,peak:.1,filter:{type:"highpass",f:3e3,q:.7}}),.16},error(i,e,t){for(const n of[0,.13])$e(i,e,t+n,{type:"sawtooth",f0:165,dur:.1,peak:.2,filter:{type:"lowpass",f:800}}),$e(i,e,t+n,{type:"square",f0:110,dur:.1,peak:.1});return .28},tab(i,e,t){return Ht(i,e,t,{dur:.06,peak:.12,filter:{type:"bandpass",f:2500,f1:5200,q:1.5}}),$e(i,e,t,{type:"sine",f0:1800,dur:.035,peak:.12,attack:.002}),.08},toggle(i,e,t,n=!0){return $e(i,e,t,{type:"sine",f0:n?600:1200,f1:n?1200:560,dur:.09,peak:.22,attack:.002}),Ht(i,e,t,{dur:.01,peak:.08,filter:{type:"highpass",f:4e3,q:.7}}),.12},whoosh(i,e,t){return Ht(i,e,t,{kind:"pink",dur:.5,attack:.14,peak:.34,filter:{type:"bandpass",f:250,f1:4200,q:1}}),Ht(i,e,t+.05,{kind:"white",dur:.35,attack:.12,peak:.07,filter:{type:"highpass",f:3e3,f1:8e3,q:.7}}),.55},intro(i,e,t){$e(i,e,t,{type:"sine",f0:40,f1:110,dur:1.75+.1,peak:.26,attack:1.5}),Ht(i,e,t,{kind:"pink",dur:1.75+.05,attack:1.75-.1,peak:.28,filter:{type:"bandpass",f:200,f1:8e3,q:2}});for(const r of[110,164.81,246.94,261.63,392])$e(i,e,t,{type:"sawtooth",f0:r,dur:1.75+.2,peak:.05,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}}),$e(i,e,t,{type:"sawtooth",f0:r*1.004,dur:1.75+.2,peak:.035,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}});const s=t+1.75;$e(i,e,s,{type:"sine",f0:120,f1:34,dur:.75,peak:.55,attack:.003}),Ht(i,e,s,{kind:"white",dur:1,peak:.26,attack:.002,filter:{type:"highpass",f:1800,f1:900,q:.6}});for(const[r,a]of[[440,.1],[659.25,.09],[880,.08]])$e(i,e,s,{type:"sawtooth",f0:r,dur:1,peak:a,attack:.003,filter:{type:"lowpass",f:5200,f1:700,q:.9}}),$e(i,e,s+.24,{type:"sawtooth",f0:r,dur:.8,peak:a*.4,attack:.003,filter:{type:"lowpass",f:4200,f1:700,q:.9}});return 1.75+1.1},countdown(i,e,t,n=3){return $e(i,e,t,{type:"sine",f0:880,dur:.16,peak:.3,attack:.004}),$e(i,e,t,{type:"square",f0:440,dur:.12,peak:.05,filter:{type:"lowpass",f:1500}}),.2},go(i,e,t){return $e(i,e,t,{type:"square",f0:1320,dur:.5,peak:.12,filter:{type:"lowpass",f:4e3,f1:1500}}),$e(i,e,t,{type:"sine",f0:660,dur:.5,peak:.28,attack:.004}),$e(i,e,t,{type:"sine",f0:90,f1:45,dur:.35,peak:.35,attack:.003}),Ht(i,e,t,{kind:"pink",dur:.4,attack:.05,peak:.16,filter:{type:"bandpass",f:400,f1:3800,q:1}}),.6},lap(i,e,t){return $e(i,e,t,{type:"sine",f0:zn.B5,dur:.5,peak:.22,attack:.003}),$e(i,e,t,{type:"sine",f0:zn.B5*2,dur:.28,peak:.07,attack:.003}),$e(i,e,t+.12,{type:"sine",f0:zn.E6,dur:.62,peak:.2,attack:.003}),$e(i,e,t+.12,{type:"sine",f0:zn.E6*2,dur:.35,peak:.06,attack:.003}),.8},bestLap(i,e,t){return[zn.A5,1108.73,zn.E6,zn.A6].forEach((n,s)=>{$e(i,e,t+s*.075,{type:"triangle",f0:n,dur:.38,peak:.17,attack:.003}),$e(i,e,t+s*.075,{type:"sine",f0:n*2,dur:.22,peak:.05,attack:.003})}),Ht(i,e,t+.28,{dur:.5,attack:.05,peak:.05,filter:{type:"highpass",f:6500,q:.7}}),$e(i,e,t,{type:"sine",f0:110,dur:.4,peak:.16,attack:.004}),.95},sponsor(i,e,t){for(const n of[523.25,659.25,783.99,1174.66])$e(i,e,t,{type:"sawtooth",f0:n,dur:.55,peak:.05,attack:.004,filter:{type:"lowpass",f:4200,f1:1e3}});return $e(i,e,t+.18,{type:"sine",f0:1568,dur:.09,peak:.16,attack:.002}),$e(i,e,t+.25,{type:"sine",f0:2093,dur:.55,peak:.16,attack:.002}),Ht(i,e,t+.18,{dur:.04,peak:.12,filter:{type:"highpass",f:5e3,q:.7}}),Ht(i,e,t+.3,{dur:.6,attack:.08,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),$e(i,e,t,{type:"sine",f0:100,f1:60,dur:.3,peak:.25,attack:.003}),1},crash(i,e,t,n=.6){n=kt(n,0,1);const s=Ia(Math.floor(n*1e3)+5);$e(i,e,t,{type:"sine",f0:95,f1:28,dur:.25+.3*n,peak:.2+.4*n,attack:.002}),Ht(i,e,t,{kind:"white",dur:.12+.3*n,peak:.15+.25*n,attack:.002,filter:{type:"bandpass",f:900,f1:250,q:.8}}),Ht(i,e,t,{kind:"pink",dur:.06+.2*n,peak:.1+.18*n,attack:.001,filter:{type:"lowpass",f:3e3,q:.6}});for(const r of[420,613])$e(i,e,t,{type:"square",f0:r,dur:.2+.4*n,peak:.03+.07*n,attack:.002,filter:{type:"lowpass",f:1800,f1:500}});if(n>.4)for(let r=0;r<3+Math.floor(n*5);r++)$e(i,e,t+.05+s()*.35,{type:"sine",f0:2e3+s()*3e3,dur:.05,peak:.04*n,attack:.001});return .3+.7*n}},Jh={cockpit:{lp:3200,wind:.65,squeal:.7,rumble:1.25,crowd:.35},chase:{lp:12e3,wind:1,squeal:1,rumble:1,crowd:.8},broadcast:{lp:12e3,wind:.5,squeal:1,rumble:.7,crowd:1.1}};function a_(i,e){const t=i.createGain();t.gain.value=1;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.5,t.connect(n),n.connect(e);const s=[],r=(S,T=0)=>{const E=i.createBufferSource();return E.buffer=ka(i,S),E.loop=!0,E.start(0,T),s.push(E),E},a=(S,T,E)=>{const P=i.createBiquadFilter();return P.type=S,P.frequency.value=T,P.Q.value=E,P},o=(S=0)=>{const T=i.createGain();return T.gain.value=S,T},c={g:o(),f:a("bandpass",500,.6)};r("pink",.3).connect(c.f),c.f.connect(c.g),c.g.connect(t);const l={g:o(),f:a("bandpass",1500,9),o:i.createOscillator(),og:o(.25)};l.o.type="sawtooth",l.o.frequency.value=900,s.push(l.o),l.o.start(),r("white",1.1).connect(l.f),l.o.connect(l.og),l.og.connect(l.f),l.f.connect(l.g),l.g.connect(t);const h={g:o(),f:a("lowpass",160,.7),am:o(.55),lfo:i.createOscillator(),lg:o(.45)};h.lfo.type="sine",h.lfo.frequency.value=20,s.push(h.lfo),h.lfo.start(),h.lfo.connect(h.lg),h.lg.connect(h.am.gain),r("brown",.7).connect(h.f),h.f.connect(h.am),h.am.connect(h.g),h.g.connect(t);const f={g:o(),f:a("lowpass",700,.6),am:o(.7),lfo:i.createOscillator(),lg:o(.3)};f.lfo.type="triangle",f.lfo.frequency.value=9,s.push(f.lfo),f.lfo.start(),f.lfo.connect(f.lg),f.lg.connect(f.am.gain),r("pink",1.9).connect(f.f),f.f.connect(f.am),f.am.connect(f.g),f.g.connect(t);const d={g:o(),f:a("bandpass",900,.45),am:o(.8),lfo:i.createOscillator(),lg:o(.2)};d.lfo.type="sine",d.lfo.frequency.value=.17,s.push(d.lfo),d.lfo.start(),d.lfo.connect(d.lg),d.lg.connect(d.am.gain),r("pink",2.6).connect(d.f),d.f.connect(d.am),d.am.connect(d.g),d.g.connect(t);const m={g:o(),f:a("bandpass",520,.7)};r("pink",3.1).connect(m.f),m.f.connect(m.g),m.g.connect(t);const v={g:o(),f:a("bandpass",1400,3),o:i.createOscillator(),og:o(.12),am:o(.6),lfo:i.createOscillator(),lg:o(.4)};v.o.type="sawtooth",v.o.frequency.value=230,s.push(v.o),v.o.start(),v.lfo.type="square",v.lfo.frequency.value=11,s.push(v.lfo),v.lfo.start(),v.lfo.connect(v.lg),v.lg.connect(v.am.gain),r("white",.2).connect(v.f),v.o.connect(v.og),v.og.connect(v.f),v.f.connect(v.am),v.am.connect(v.g),v.g.connect(t);let g=Jh.cockpit,p={speed:0,slip01:0,offTrack:!1,drafting01:0,crowd01:0,wall01:0},M=!1;const y=.06,_={update(S={},T){p={...p,...S};const E=T??i.currentTime,P=M?0:1,x=Math.max(0,p.speed||0),b=kt(x/90,0,1),L=kt(p.slip01||0,0,1),I=Math.pow(kt((L-.3)/.7,0,1),1.4);c.f.frequency.setTargetAtTime(350+900*b,E,y),c.g.gain.setTargetAtTime(P*.34*b*b*g.wind,E,y),l.o.frequency.setTargetAtTime(640+520*L+x*2.2,E,.03),l.f.frequency.setTargetAtTime(1100+900*L+x*4,E,.03),l.g.gain.setTargetAtTime(P*.85*I*g.squeal*(.4+.6*b),E,.03);const D=(p.offTrack,0);h.lfo.frequency.setTargetAtTime(6+x*.5,E,y),h.g.gain.setTargetAtTime(P*(p.offTrack?.5:.1)*b*g.rumble+D,E,y),f.lfo.frequency.setTargetAtTime(5+x*.3,E,y),f.g.gain.setTargetAtTime(P*(p.offTrack?.55:0)*(.2+.8*b),E,y),d.g.gain.setTargetAtTime(P*.24*kt(p.crowd01||0,0,1)*g.crowd,E,.25),m.f.frequency.setTargetAtTime(350+700*b,E,y),m.g.gain.setTargetAtTime(P*.14*kt(p.drafting01||0,0,1)*(.3+.7*b),E,.12),v.g.gain.setTargetAtTime(P*.55*kt(p.wall01||0,0,1),E,.02)},setPerspective(S){g=Jh[S]||g,n.frequency.setTargetAtTime(g.lp,i.currentTime,.1),_.update({})},setMute(S){M=!!S,_.update({})},dispose(){for(const S of s)try{S.stop()}catch{}try{t.disconnect()}catch{}}};return _}const o_=`
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
`,eu=343,Ed={e87:7770,e05:9250,e15:9250},c_={e87:.79,e05:1,e15:.66},Ad=i=>i==="e87"||i==="e15"||i==="e05"?i:"e05",Co=new WeakMap;function l_(i){if(Co.has(i))return Co.get(i);let e;if(!i.audioWorklet||typeof AudioWorkletNode>"u")e=Promise.resolve(!1);else try{const t=URL.createObjectURL(new Blob([o_],{type:"application/javascript"}));e=i.audioWorklet.addModule(t).then(()=>{try{URL.revokeObjectURL(t)}catch{}return!0}).catch(()=>!1)}catch{e=Promise.resolve(!1)}return Co.set(i,e),e}const Xs=(i,e,t)=>{t==null?i.value=e:i.setValueAtTime(e,t)};function h_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=new AudioWorkletNode(i,"rtta-v8",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{seed:e,gain:t,rpm0:n,era:s}}),a=o=>r.parameters.get(o);return{kind:"worklet",out:r,setState(o,c){c.rpm!=null&&Xs(a("rpm"),c.rpm,o),c.throttle01!=null&&Xs(a("throttle"),kt(c.throttle01,0,1),o),c.load01!=null&&Xs(a("load"),kt(c.load01,0,1),o),c.pitch!=null&&Xs(a("pitch"),kt(c.pitch,.5,2),o),c.rpmLimit!=null&&Xs(a("limit"),c.rpmLimit,o)},setDetail(o){a("detail").value=o},setActive(o){a("active").value=o?1:0},dispose(){try{r.disconnect(),r.port.close()}catch{}}}}function u_(i,{seed:e,gain:t,rpm0:n,era:s}){const r=Ia(e||1),a=Ed[s]||9250,o=t*.55*(s==="e87"?1.45:1),c=s==="e15"?.65:s==="e87"?1.1:1,l=c_[s]||1,u=i.createGain();u.gain.value=o;const h=i.createGain();h.gain.value=.5;const f=i.createWaveShaper(),d=new Float32Array(1024);for(let q=0;q<1024;q++){const V=q/511.5-1;d[q]=Math.tanh(2.2*V)}f.curve=d;const m=i.createBiquadFilter();m.type="lowpass",m.Q.value=.8,m.frequency.value=1200;const v=i.createGain();v.gain.value=1;const g=i.createBiquadFilter();g.type="lowshelf",g.frequency.value=170,g.gain.value=7,h.connect(g),g.connect(m),m.connect(f),f.connect(v),v.connect(u);const p=30,M=new Float32Array(p+1),y=new Float32Array(p+1);for(let q=1;q<=p;q++)y[q]=1/Math.pow(q,1.1)*(q%2===0?.9:1);const _=i.createPeriodicWave(M,y),S=(q,V)=>{const K=i.createOscillator();K.setPeriodicWave(_),K.detune.value=q;const ie=i.createGain();return ie.gain.value=V,K.connect(ie),ie.connect(h),K.start(),K},T=S(0,.7),E=S(r()*12-6,.45),P=i.createOscillator();P.type="triangle";const x=i.createGain();x.gain.value=.3,P.connect(x),x.connect(h),P.start();const b=i.createBufferSource();b.buffer=ka(i,"pink"),b.loop=!0;const L=i.createBiquadFilter();L.type="bandpass",L.Q.value=1,L.frequency.value=500;const I=i.createGain();I.gain.value=0,b.connect(L),L.connect(I),I.connect(h),b.start();const D=i.createOscillator();D.type="square",D.frequency.value=20;const H=i.createGain();H.gain.value=0,D.connect(H),H.connect(v.gain),D.start();let N=0;const z=(q,V,K)=>{const ie=Math.max(1,q/15*V*l);for(const[le,pe]of[[T,1],[E,1],[P,.125]]){const ge=ie*pe;K==null?le.frequency.setTargetAtTime(ge,i.currentTime,.02):le.frequency.setValueAtTime(ge,K)}};return z(n||900,1,0),{kind:"native",out:u,setState(q,V){const K=q??i.currentTime,ie=V.rpm??900,le=kt(V.throttle01??0,0,1),pe=Math.max(V.load01??0,le*.85);z(ie,V.pitch??1,q);const ge=kt(ie/(s==="e87"?7560:9e3),0,1);m.frequency.setTargetAtTime((700+3300*Math.pow(pe,.8)+300*ge)*c,K,.03),h.gain.setTargetAtTime(.25+.5*pe,K,.03),L.frequency.setTargetAtTime(250+ie*.22,K,.03),I.gain.setTargetAtTime(Math.pow(le,1.6)*(.04+.4*ge),K,.03);const Ve=V.rpmLimit??a,ke=ie>=Ve*.985;v.gain.setTargetAtTime(ke?.55:1,K,.02),H.gain.setTargetAtTime(ke?.45:0,K,.02),le<.1&&ie>2800&&K-N>.08&&Math.random()<.12*(ie-2800)/6200&&(N=K,Ht(i,u,K,{dur:.05,peak:.25,filter:{type:"bandpass",f:500+Math.random()*1100,q:1.4}}))},setDetail(){},setActive(q){u.gain.setTargetAtTime(q?o:0,i.currentTime,.03)},dispose(){try{T.stop(),E.stop(),P.stop(),b.stop(),D.stop(),u.disconnect()}catch{}}}}function d_(i,e={},t=!1){const n={seed:e.seed??1,gain:e.gain??.5,rpm0:e.rpm0??900,era:Ad(e.era)};return t&&!e.forceNative?h_(i,n):u_(i,n)}const Po=["idle","low","mid","high"],tu={idle:1e3,low:3e3,mid:6e3,high:8500,offLow:3e3,offHigh:7e3};function f_(i,e,t={}){const n={...tu,...t},s=i.createGain();s.gain.value=1;const r={};for(const o of Object.keys(e)){if(!(o in tu)||!e[o])continue;const c=i.createBufferSource();c.buffer=e[o],c.loop=!0;const l=i.createGain();l.gain.value=0,c.connect(l),l.connect(s),c.start(0,Math.random()*Math.max(.01,e[o].duration*.5)),r[o]={src:c,g:l}}const a=(o,c,l)=>{const u=c.map((d,m)=>({n:d,ref:l[m]})).filter(d=>r[d.n]).sort((d,m)=>d.ref-m.ref),h={};if(!u.length)return h;for(const d of u)h[d.n]=0;if(o<=u[0].ref)return h[u[0].n]=1,h;const f=u[u.length-1];if(o>=f.ref)return h[f.n]=1,h;for(let d=0;d<u.length-1;d++){const m=u[d],v=u[d+1];if(o>=m.ref&&o<v.ref){const g=(o-m.ref)/(v.ref-m.ref);h[m.n]=Math.sqrt(1-g),h[v.n]=Math.sqrt(g);break}}return h};return{out:s,voices:r,has:()=>Object.keys(r).length>0,setState(o,{rpm:c,throttle01:l,pitch:u=1}){const h=o??i.currentTime,f=kt(l??0,0,1),d=kt((f-.05)/.35,0,1),m=c*u,v=Po.map(M=>n[M]),g=a(c,Po,v),p=a(c,["offLow","offHigh"],[n.offLow,n.offHigh]);for(const M of Object.keys(r)){const y=Po.includes(M),_=(y?g[M]:p[M])??0,S=n[M];r[M].g.gain.setTargetAtTime(_*(y?d:1-d),h,.04),r[M].src.playbackRate.setTargetAtTime(kt(m/S,.4,2.4),h,.03)}},dispose(){for(const o of Object.keys(r))try{r[o].src.stop()}catch{}try{s.disconnect()}catch{}}}}const Dc={cockpit:{hp:38,shelf:3,pkF:90,pkQ:4,pkG:6,lp:1900,gain:.95,aiCut:3500},chase:{hp:35,shelf:0,pkF:120,pkQ:1,pkG:0,lp:7e3,gain:1,aiCut:14e3},broadcast:{hp:90,shelf:-2,pkF:1800,pkQ:.8,pkG:3,lp:9e3,gain:.8,aiCut:14e3}};function p_(i,e,t){const n=i.listener;if(!n)return;const s=t||{x:0,y:0,z:-1};if(n.positionX){const r=i.currentTime;n.positionX.setTargetAtTime(e.x,r,.02),n.positionY.setTargetAtTime(e.y,r,.02),n.positionZ.setTargetAtTime(e.z,r,.02),n.forwardX.setTargetAtTime(s.x,r,.03),n.forwardY.setTargetAtTime(s.y,r,.03),n.forwardZ.setTargetAtTime(s.z,r,.03),n.upX.value=0,n.upY.value=1,n.upZ.value=0}else try{n.setPosition(e.x,e.y,e.z),n.setOrientation(s.x,s.y,s.z,0,1,0)}catch{}}function m_(i,e,t){if(i.positionX)i.positionX.setTargetAtTime(e.x,t,.03),i.positionY.setTargetAtTime(e.y,t,.03),i.positionZ.setTargetAtTime(e.z,t,.03);else try{i.setPosition(e.x,e.y,e.z)}catch{}}class g_{constructor(e){this.sys=e,this.voices=new Set,this.listener={pos:null,vel:null,fwd:null},this.mode="cockpit",this.recBuffers=null,this.recRefs={},this.paused=!1,this.MAX_FULL=6,this.MAX_LITE=10}create(e={}){const t=new v_(this,e);return this.voices.add(t),this.sys.ctx()&&this.sys.bus()&&t.build(),t}onReady(){for(const e of this.voices)e.build();this._applyRec()}setPerspective(e){if(Dc[e]){this.mode=e;for(const t of this.voices)t.applyPerspective()}}setListener(e,t,n){this.listener={pos:e,vel:t,fwd:n};const s=this.sys.ctx();s&&e&&p_(s,e,n);const r=[];for(const a of this.voices)!a.player&&a.built&&r.push(a);r.sort((a,o)=>a.lastDist-o.lastDist),r.forEach((a,o)=>a.setTier(this.paused?2:o<this.MAX_FULL?0:o<this.MAX_FULL+this.MAX_LITE&&a.lastDist<400?1:2))}setPaused(e){this.paused=e;for(const t of this.voices)t.setPausedState(e)}async loadRecordings(e,t={}){const n=this.sys.ctx(),s={loaded:[],failed:[]};if(!n)return s.failed=Object.keys(e||{}),s;const r={};return await Promise.all(Object.keys(e||{}).map(async a=>{try{const o=e[a];if(!o)return;if(typeof AudioBuffer<"u"&&o instanceof AudioBuffer){r[a]=o,s.loaded.push(a);return}const c=await fetch(o);if(!c.ok)throw new Error("http "+c.status);const l=await c.arrayBuffer();r[a]=await new Promise((u,h)=>{const f=n.decodeAudioData(l,u,h);f&&f.catch&&f.catch(h)}),s.loaded.push(a)}catch{s.failed.push(a)}})),s.loaded.length&&(this.recBuffers=r,this.recRefs=t,this._applyRec()),s}_applyRec(){for(const e of this.voices)e.player&&e.attachRecordings()}}class v_{constructor(e,t){this.mgr=e,this.player=!!t.player,this.era=Ad(t.era),this.seed=t.seed??Math.floor(Math.random()*1e6),this.opts=t,this.built=!1,this.disposed=!1,this.last=null,this.lastDist=1e9,this.tier=0,this.rec=null,this.recSent=!1,this.nodes=null,this.core=null}build(){if(this.built||this.disposed)return;const e=this.mgr.sys.ctx(),t=this.mgr.sys.bus();if(!e||!t)return;this.ctx=e;const n=d_(e,{seed:this.seed,gain:this.player?.7:.56,rpm0:this.last?.rpm??900,era:this.era},this.mgr.sys.workletOk());this.core=n;const s=e.createGain();s.gain.value=1,n.out.connect(s);const r=e.createGain();s.connect(r);const a={procGain:s,sum:r};let o=r;if(this.player){const l=e.createBiquadFilter();l.type="highpass";const u=e.createBiquadFilter();u.type="lowshelf",u.frequency.value=120;const h=e.createBiquadFilter();h.type="peaking";const f=e.createBiquadFilter();f.type="lowpass",f.Q.value=.5;const d=e.createGain();o.connect(l),l.connect(u),u.connect(h),h.connect(f),f.connect(d),o=d,Object.assign(a,{hp:l,shelf:u,pk:h,lp:f,pg:d})}else{const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=.5,l.frequency.value=12e3,o.connect(l),o=l,a.dlp=l}const c=e.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=this.player?1:6,c.maxDistance=600,c.rolloffFactor=this.player?0:1.3,o.connect(c),c.connect(t),a.pan=c,this.nodes=a,this.built=!0,this.applyPerspective(!0),this.attachRecordings(),this.last&&this.update(this.last)}applyPerspective(e){if(!this.built)return;const t=this.nodes,n=Dc[this.mgr.mode],s=this.ctx.currentTime,r=e?.001:.08;this.player&&(t.hp.frequency.setTargetAtTime(n.hp,s,r),t.shelf.gain.setTargetAtTime(n.shelf,s,r),t.pk.frequency.setTargetAtTime(n.pkF,s,r),t.pk.Q.setTargetAtTime(n.pkQ,s,r),t.pk.gain.setTargetAtTime(n.pkG,s,r),t.lp.frequency.setTargetAtTime(n.lp,s,r),t.pg.gain.setTargetAtTime(n.gain,s,r))}attachRecordings(){if(!this.built||!this.player||this.rec||!this.mgr.recBuffers)return;const e=this.ctx;if(this.rec=f_(e,this.mgr.recBuffers,this.mgr.recRefs),!this.rec.has()){this.rec=null;return}const t=e.createGain();t.gain.value=.9,this.rec.out.connect(t),t.connect(this.nodes.sum),this.nodes.recGain=t,this.nodes.procGain.gain.setTargetAtTime(.5,e.currentTime,.3)}setTier(e){!this.built||e===this.tier||(this.tier=e,this.core.setActive(e<2&&!this.mgr.paused),this.core.setDetail(e===0?1:0))}setPausedState(e){this.built&&this.core.setActive(!e&&(this.player||this.tier<2))}update(e){if(this.disposed||(this.last=e,!this.built&&(this.mgr.sys.ctx()&&this.mgr.sys.bus()&&this.build(),!this.built))||this.mgr.paused)return;const n=this.ctx.currentTime,s=this.mgr.listener;let r=1,a=0;if(e.pos&&s.pos){const c=e.pos.x-s.pos.x,l=(e.pos.y||0)-(s.pos.y||0),u=e.pos.z-s.pos.z;if(a=Math.sqrt(c*c+l*l+u*u),!this.player&&a>.5){const h=c/a,f=l/a,d=u/a,m=s.vel?s.vel.x*h+(s.vel.y||0)*f+s.vel.z*d:0,v=e.vel?e.vel.x*h+(e.vel.y||0)*f+e.vel.z*d:0;r=kt((eu+m)/(eu+v),.85,1.18)}m_(this.nodes.pan,e.pos,n)}if(this.lastDist=a,!this.player){const c=Dc[this.mgr.mode].aiCut;this.nodes.dlp.frequency.setTargetAtTime(kt(14e3/(1+a/50),1500,c),n,.1)}if(this.tier===2&&!this.player)return;const o={rpm:e.rpm??900,throttle01:e.throttle01??0,load01:e.load01??0,pitch:r,rpmLimit:this.opts.rpmLimit??Ed[this.era]};this.core.setState(null,o),this.rec&&this.rec.setState(null,o)}dispose(){if(this.disposed=!0,this.mgr.voices.delete(this),!!this.built)try{this.rec&&this.rec.dispose(),this.core.dispose();for(const e of Object.keys(this.nodes))try{this.nodes[e].disconnect()}catch{}}catch{}}}const Rd={menu:{bpm:124,bars:32,target:.115,desc:"confident, building, bass-led"},garage:{bpm:88,bars:24,target:.085,desc:"calm, warm, sparse"},race:{bpm:128,bars:32,target:.06,desc:"low-intensity bed under the engines"},results:{bpm:96,bars:16,target:.09,desc:"short resolve"}},nu=3.2;class __{constructor(e,t,n,s=0){this.ctx=e,this.step=60/t/4,this.loopLen=n*16*this.step,this.bars=n,this.origin=s*16*this.step;const r=(g,p)=>{const M=e.createGain();return M.gain.value=g,p&&M.connect(p),M},a=r(.9);a.connect(e.destination),this.master=a;const o=e.createConvolver();o.buffer=s_(e,1.8,3,11);const c=r(1,o),l=r(.42,a);o.connect(l);const u=e.createDelay(1.5);u.delayTime.value=this.step*3;const h=r(.36),f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=3200;const d=r(1,u);u.connect(f),f.connect(h),h.connect(u);const m=r(.34,a);f.connect(m),f.connect(c);const v=(g,p=0,M=0)=>{const y=r(g,a);return p&&y.connect(r(p,c)),M&&y.connect(r(M,d)),y};this.bus={kick:v(.95),snare:v(.6,.18),hat:v(.5),bass:v(.85),pad:v(.55,.5),arp:v(.55,.28,.5),lead:v(.6,.32,.42),fx:v(.6,.2)},this.vib=e.createOscillator(),this.vib.frequency.value=5.3,this.vibG=r(9),this.vib.connect(this.vibG),this.vib.start(0)}t(e,t=0){return(e*16+t)*this.step-this.origin}noise(e,t,n,s,r,a,o=1,c="bandpass",l="white",u=.002){const h=this.ctx,f=h.createGain();f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(n,e+u),f.gain.exponentialRampToValueAtTime(1e-4,e+t),f.gain.setValueAtTime(0,e+t+.01),f.connect(s);const d=h.createBiquadFilter();d.type=c,d.Q.value=o,a?(d.frequency.setValueAtTime(r,e),d.frequency.exponentialRampToValueAtTime(a,e+t)):d.frequency.value=r,d.connect(f);const m=h.createBufferSource();m.buffer=ka(h,l),m.loop=!0,m.connect(d),m.start(e,e*7.31%3.5),m.stop(e+t+.03)}note(e,t,n,s,r,a={}){const o=this.ctx,c=Math.min(a.attack??.005,n),l=a.release??.12,u=o.createGain();if(u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(r,t+c),u.gain.setValueAtTime(r,t+Math.max(c,n)),u.gain.exponentialRampToValueAtTime(1e-4,t+n+l),u.gain.setValueAtTime(0,t+n+l+.01),a.pan){const f=o.createStereoPanner();f.pan.value=a.pan,u.connect(f),f.connect(e)}else u.connect(e);let h=u;a.filter&&(h=o.createBiquadFilter(),h.type="lowpass",h.Q.value=a.filter[2]??.8,a.filter[1]==null||a.filter[1]===a.filter[0]?h.frequency.value=a.filter[0]:(h.frequency.setValueAtTime(a.filter[0],t),h.frequency.exponentialRampToValueAtTime(Math.max(40,a.filter[1]),t+Math.max(.02,n*(a.sweep??.6)))),h.connect(u));for(const f of a.detune||[0]){const d=o.createOscillator();d.type=a.type||"sawtooth",d.frequency.value=s,d.detune.value=f,d.connect(h),a.vib&&this.vibG.connect(d.detune),d.start(t),d.stop(t+n+l+.05)}}kick(e,t=1){const n=this.ctx,s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.9*t,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.34),s.gain.setValueAtTime(0,e+.36),s.connect(this.bus.kick);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(155,e),r.frequency.exponentialRampToValueAtTime(46,e+.1),r.connect(s),r.start(e),r.stop(e+.4),this.noise(e,.012,.16*t,this.bus.kick,2500,0,.7,"highpass")}snare(e,t=1){this.noise(e,.2,.5*t,this.bus.snare,1900,1100,.8,"bandpass"),this.noise(e,.08,.2*t,this.bus.snare,5200,0,.7,"highpass"),this.note(this.bus.snare,e,.02,195,.28*t,{type:"triangle",release:.09,attack:.002})}hat(e,t=1,n=!1){this.noise(e,n?.2:.04,.17*t,this.bus.hat,7800,0,.7,"highpass","white",.001)}crash(e,t=1){this.noise(e,1.6,.16*t,this.bus.fx,4200,0,.6,"highpass","white",.003)}riser(e,t,n=1){this.noise(e,t,.22*n,this.bus.fx,250,9e3,2,"bandpass","pink",t-.05)}bass(e,t,n,s=1,r=1){const a=Gi(t),o=n*this.step;this.note(this.bus.bass,e,o,a,.34*s,{type:"sawtooth",attack:.004,release:.05,filter:[Math.min(2400,1400*r),260*r+60,1.4],sweep:.5}),this.note(this.bus.bass,e,o,a,.3*s,{type:"sine",attack:.004,release:.05})}pad(e,t,n,s=1,r=1500,a=.5){const o=this.ctx,c=.8,l=.07*s,u=o.createBiquadFilter();u.type="lowpass",u.Q.value=.7,u.frequency.setValueAtTime(r*.5,e),u.frequency.exponentialRampToValueAtTime(r,e+n*.8),u.connect(this.bus.pad);const h=o.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(l,e+Math.min(a,n)),h.gain.setValueAtTime(l,e+n),h.gain.exponentialRampToValueAtTime(1e-4,e+n+c),h.gain.setValueAtTime(0,e+n+c+.01),h.connect(u);const f=o.createStereoPanner();f.pan.value=-.85,f.connect(h);const d=o.createStereoPanner();d.pan.value=.85,d.connect(h),t.forEach((m,v)=>{for(const[g,p]of[[-7,f],[6,d]]){const M=o.createOscillator();M.type="sawtooth",M.frequency.value=Gi(m),M.detune.value=g+v%2*2,M.connect(p),M.start(e),M.stop(e+n+c+.05)}})}pluck(e,t,n,s=1,r=0,a=3500){const o=Gi(t),c=n*this.step;this.note(this.bus.arp,e,c*.45,o,.13*s,{type:"square",attack:.002,release:.05,pan:r,filter:[a]}),this.note(this.bus.arp,e,c,o,.1*s,{type:"sine",attack:.002,release:.1,pan:r})}bell(e,t,n,s=1){const r=Gi(t),a=n*this.step;this.note(this.bus.lead,e,a,r,.13*s,{type:"triangle",attack:.003,release:.5}),this.note(this.bus.lead,e,a*.6,r*2.01,.04*s,{type:"sine",attack:.002,release:.3})}lead(e,t,n,s=1){this.note(this.bus.lead,e,n*this.step,Gi(t),.12*s,{type:"sawtooth",detune:[-9,8],attack:.01,release:.14,vib:!0,filter:[3400,1500,.9],sweep:.9})}}const Ki=(i,e)=>e.map(t=>i+t);async function y_(i,e,t,n){const s=[{r:43,iv:[0,3,7]},{r:39,iv:[0,4,7]},{r:46,iv:[0,4,7]},{r:41,iv:[0,4,7]}],r=[[0,0],[2,0],[3,12],[6,0],[8,0],[10,7],[11,12],[14,0]],a=[0,2,1,3,2,1,3,2,0,2,1,3,2,3,1,2],o=[[[0,74,3],[3,77,2],[6,79,2],[8,77,3],[12,74,4]],[[0,75,3],[3,79,2],[6,82,2],[8,79,3],[12,75,4]],[[0,77,2],[2,74,2],[4,70,4],[8,74,3],[12,77,4]],[[0,72,3],[3,77,2],[6,81,2],[8,79,4],[12,77,2],[14,74,2]]];for(let c=t;c<n;c++){const l=Math.floor(c/8),u=s[c%4],h=i.t(c),f=Ki(u.r,u.iv),d=l===3?c>=30?[]:[0,8]:[0,4,8,12];for(const v of d)i.kick(i.t(c,v),l===0?.8:.95);c%8===0&&i.crash(h,l===0?.5:.7);for(const v of[2,6,10,14])i.hat(i.t(c,v),l===0?.5:.7,v===14&&l>=2);if(l>=1)for(const v of[0,4,8,12])(l!==3||c>=30)&&i.hat(i.t(c,v+1),.3+.1*(v%8===0));if(l>=1&&l!==3&&(i.snare(i.t(c,4),.85),i.snare(i.t(c,12),.9)),l===3&&c<30&&i.snare(i.t(c,12),.7),c===31)for(let v=8;v<16;v++)i.snare(i.t(c,v),.35+.08*(v-8));if(l===0)for(let v=0;v<16;v+=2)i.bass(i.t(c,v),u.r,1.5,.8,.55);else if(l===3)i.bass(h,u.r,15,.8,.7);else for(const[v,g]of r)i.bass(i.t(c,v),u.r+g,1.2,.95+(g?.05:0),1);if(i.pad(h,Ki(u.r+24,u.iv),16*i.step,l===0?.8:1,l===0?900:l===3?2400:1500,.4),l>=1)for(let v=0;v<16;v++){const g=a[v],p=f[g%3]+36+(g===3?12:0);i.pluck(i.t(c,v),p,1.1,(l===3?.5:.8)*(v%4===0?1:.75),(v%4-1.5)*.25,3600)}if(l===2||l===1&&c>=12)for(const[v,g,p]of o[c%4])i.lead(i.t(c,v),g,p,l===2?1:.5);c===30&&i.riser(i.t(30),32*i.step,1),c%4===3&&await e()}}async function x_(i,e,t,n){const s=[{r:50,iv:[0,3,7,10,14]},{r:46,iv:[0,4,7,11]},{r:53,iv:[0,4,7,11]},{r:48,iv:[0,4,7,14]}],r=[0,2,4,2,1,3,2,1];for(let a=t;a<n;a++){const o=Math.floor(a/8),c=s[a%4],l=i.t(a),u=Ki(c.r,c.iv);if(i.pad(l,Ki(c.r+12,c.iv).slice(0,4),16*i.step+.4,1,800,1.2),i.note(i.bus.bass,l,15.5*i.step,Gi(c.r-12),.3,{type:"sine",attack:.05,release:.4}),o>=1)for(let h=0;h<8;h++){const f=r[h]%u.length;i.pluck(i.t(a,h*2),u[f]+24,3,(h%2?.55:.8)*(o===1?.8:1),(h%4-1.5)*.3,2400)}o>=2&&(i.kick(l,.5),i.kick(i.t(a,10),.35),i.hat(i.t(a,4),.35),i.hat(i.t(a,12),.35),i.snare(i.t(a,8),.28)),a%4===3&&await e()}}async function M_(i,e,t,n){const s=[{r:45,iv:[0,3,7]},{r:41,iv:[0,4,7]},{r:48,iv:[0,4,7]},{r:43,iv:[0,4,7]}];for(let r=t;r<n;r++){const a=Math.floor(r/8),o=s[r%4],c=i.t(r),l=Ki(o.r,o.iv);i.kick(c,.55),i.kick(i.t(r,8),.45),r>=4&&(i.hat(i.t(r,4),.35),i.hat(i.t(r,12),.35)),a>=2&&(i.hat(i.t(r,14),.25),i.snare(i.t(r,12),.25));for(let u=0;u<16;u+=2)i.bass(i.t(r,u),o.r+(u===6&&r%2?12:0),1.4,.55+.1*(u===0),.45);i.pad(c,Ki(o.r+12,o.iv),16*i.step,.7,700,.6),r%2===1&&a>=1&&[0,3,6,8,11,14].forEach((u,h)=>i.pluck(i.t(r,u),l[h%3]+24,1.2,.38,(h%3-1)*.3,2200)),r%8===7&&i.riser(i.t(r,8),8*i.step,.35),r%4===3&&await e()}}async function b_(i,e,t,n){const s=[{r:53,iv:[0,4,7,11]},{r:50,iv:[0,3,7,10]},{r:46,iv:[0,4,7,14]},{r:48,iv:[0,4,7]}],r=[[[0,72,3],[3,76,3],[8,77,6]],[[0,74,3],[3,77,3],[8,81,6]],[[0,74,3],[3,77,3],[8,82,6]],[[0,76,3],[3,79,3],[8,84,8]]];for(let a=t;a<n;a++){const o=s[a%4],c=i.t(a);if(i.pad(c,Ki(o.r+12,o.iv).slice(0,4),16*i.step+.3,1,1700,.35),i.note(i.bus.bass,c,15*i.step,Gi(o.r-12),.32,{type:"sine",attack:.02,release:.3}),a>=2&&a<14)for(const[l,u,h]of r[a%4])i.bell(i.t(a,l),u,h,a<4?.8:1);if(a>=4&&a<14&&(i.kick(c,.55),i.kick(i.t(a,8),.4)),a>=8&&a<14){i.snare(i.t(a,12),.35);for(const l of[4,12])i.hat(i.t(a,l),.35)}a===0&&i.crash(c,.3),a%4===3&&await e()}}const S_={menu:y_,garage:x_,race:M_,results:b_},iu=4;function T_(i,e,t){const r=Math.exp(-1/(.006*t)),a=Math.exp(-1/(.18*t)),o=i.length;let c=0;for(let l=0;l<2;l++)for(let u=0;u<o;u++){const h=Math.max(Math.abs(i[u]),Math.abs(e[u]));if(c=h>c?r*c+(1-r)*h:a*c+(1-a)*h,l===1){const f=c>.16?Math.pow(c/.16,-.7142857142857143):1;i[u]*=f,e[u]*=f}}}async function w_(i,{ctxFactory:e,sampleRate:t=32e3,yieldFn:n=()=>Sa(0),concurrency:s=2}={}){const r=Rd[i];if(!r)throw new Error("unknown track "+i);const a=e||((T,E,P)=>new OfflineAudioContext(T,E,P)),c=16*(60/r.bpm/4),l=t,u=Math.round(r.bars*c*l),h=Math.round(nu*l),f=u+h,d=[new Float32Array(f),new Float32Array(f)],m=[];for(let T=0;T<r.bars;T+=iu)m.push([T,Math.min(r.bars,T+iu)]);let v=0;const g=async()=>{for(;v<m.length;){const[T,E]=m[v++],P=Math.ceil(((E-T)*c+nu)*l),x=a(2,P,l),b=new __(x,r.bpm,r.bars,T);await S_[i](b,n,T,E),await n();const L=await x.startRendering(),I=Math.round(T*c*l);for(let D=0;D<2;D++){const H=L.getChannelData(D),N=d[D],z=Math.min(H.length,f-I);for(let q=0;q<z;q++)N[I+q]+=H[q]}}};await Promise.all(Array.from({length:Math.max(1,s)},g));const p=[new Float32Array(u),new Float32Array(u)];for(let T=0;T<2;T++){const E=p[T],P=d[T];for(let x=0;x<u;x++)E[x]=P[x];for(let x=0;x<h&&x<u;x++)E[x]+=P[u+x]}T_(p[0],p[1],l);let M=0,y=0;for(let T=0;T<2;T++)for(let E=0;E<u;E++){const P=p[T][E];M+=P*P,Math.abs(P)>y&&(y=Math.abs(P))}const _=Math.sqrt(M/(2*u));let S=_>0?r.target/_:1;y*S>.92&&(S=.92/y);for(let T=0;T<2;T++)for(let E=0;E<u;E++)p[T][E]*=S;return{name:i,sampleRate:l,length:u,channels:p,rmsBefore:_,gain:S,seconds:u/l}}const En=typeof window<"u"?window:null,Qs=En&&(En.AudioContext||En.webkitAudioContext),su=En&&(En.OfflineAudioContext||En.webkitOfflineAudioContext),ne={ctx:null,ready:!1,unlocked:!1,inited:!1,workletOk:!1,unlockP:null,gestureArmed:!1,buses:null,ambient:null,paused:!1,perspective:"cockpit",hiddenSuspended:!1,listeners:new Set,vol:{master:.9,music:.5,sfx:.9,engine:.9,ambient:.7},musicBuf:{},musicJob:{},musicWanted:null,musicFade:1.5,musicCur:null,lastHover:0},ms=new g_({ctx:()=>ne.ready?ne.ctx:null,bus:()=>ne.ready?ne.buses.engine:null,workletOk:()=>ne.workletOk});function Cd(){for(const i of ne.listeners)try{i(Qe.state)}catch{}}function E_(){const i=ne.ctx,e=r=>{const a=i.createGain();return a.gain.value=r,a},t=e(ne.vol.master),n=i.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=20,n.ratio.value=3,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(i.destination);const s={master:t,music:e(ne.vol.music),sfx:e(ne.vol.sfx),engine:e(ne.vol.engine),ambient:e(ne.vol.ambient),musicDuck:e(1)};s.music.connect(s.musicDuck),s.musicDuck.connect(t),s.sfx.connect(t),s.engine.connect(t),s.ambient.connect(t),ne.buses=s}function Pd(){if(!ne.buses)return;const i=ne.ctx.currentTime;for(const e of["master","music","sfx","engine","ambient"])ne.buses[e].gain.setTargetAtTime(kt(ne.vol[e],0,1),i,.05)}function A_(){try{const i=ne.ctx.createBuffer(1,1,22050),e=ne.ctx.createBufferSource();e.buffer=i,e.connect(ne.ctx.destination),e.start(0)}catch{}}function Nc(){if(ne.gestureArmed||!En)return;ne.gestureArmed=!0;const i=["pointerdown","touchend","keydown","click"],e=()=>{Qe.unlock().then(t=>{t&&(i.forEach(n=>En.removeEventListener(n,e,!0)),ne.gestureArmed=!1)})};i.forEach(t=>En.addEventListener(t,e,!0))}function R_(){const i=ne.ctx;i.onstatechange=()=>{ne.unlocked=i.state==="running",Cd(),!ne.unlocked&&!ne.hiddenSuspended&&Nc()},typeof document<"u"&&document.addEventListener("visibilitychange",()=>{ne.ctx&&(document.hidden?ne.ctx.state==="running"&&(ne.hiddenSuspended=!0,ne.ctx.suspend().catch(()=>{})):ne.hiddenSuspended&&(ne.hiddenSuspended=!1,ne.ctx.resume().catch(()=>Nc())))})}async function C_(){if(!ne.inited){ne.inited=!0,ne.workletOk=await Promise.race([l_(ne.ctx),Sa(2500).then(()=>!1)]),ne.ready=!0,Pd();try{ne.ambient=a_(ne.ctx,ne.buses.ambient),ne.ambient.setPerspective(ne.perspective),ne.ambient.update({})}catch{ne.ambient=null}ms.onReady(),ne.musicWanted&&Id(ne.musicWanted,ne.musicFade),(async()=>{for(const i of["menu","garage","race","results"])await Ld(i),await Sa(250)})()}}function Ld(i){return ne.musicBuf[i]?Promise.resolve(ne.musicBuf[i]):ne.musicJob[i]?ne.musicJob[i]:!Rd[i]||!su||!ne.ctx?Promise.resolve(null):(ne.musicJob[i]=w_(i,{ctxFactory:(e,t,n)=>new su(e,t,n),sampleRate:32e3}).then(e=>{const t=ne.ctx.createBuffer(2,e.length,e.sampleRate);return t.copyToChannel(e.channels[0],0),t.copyToChannel(e.channels[1],1),ne.musicBuf[i]=t,t}).catch(()=>(ne.musicJob[i]=null,null)),ne.musicJob[i])}async function Id(i,e){if(!ne.ready||ne.musicCur&&ne.musicCur.name===i)return;const t=await Ld(i);if(!t||ne.musicWanted!==i||ne.musicCur&&ne.musicCur.name===i)return;const n=ne.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=t,r.loop=!0;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+Math.max(.05,e)),r.connect(a),a.connect(ne.buses.music),r.start(s);const o=ne.musicCur;ne.musicCur={name:i,src:r,g:a},o&&kd(o,e)}function kd(i,e){const t=ne.ctx.currentTime;try{i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(i.g.gain.value,t),i.g.gain.linearRampToValueAtTime(0,t+Math.max(.05,e)),i.src.stop(t+Math.max(.05,e)+.1)}catch{}}function Zt(i,...e){if(!ne.ready||ne.ctx.state!=="running")return 0;try{return r_[i](ne.ctx,ne.buses.sfx,ne.ctx.currentTime+.005,...e)||0}catch{return 0}}const ru=()=>Math.random()*2-1,Qe={get supported(){return!!Qs},get state(){return Qs?ne.ctx?ne.ctx.state==="running"&&ne.ready?"running":ne.ctx.state==="running"?"starting":ne.ctx.state:"locked":"unsupported"},get ctx(){return ne.ctx},onStateChange(i){return ne.listeners.add(i),()=>ne.listeners.delete(i)},unlock(){if(!Qs)return Promise.resolve(!1);if(ne.unlockP)return ne.unlockP;if(!ne.ctx){try{ne.ctx=new Qs({latencyHint:"interactive"})}catch{try{ne.ctx=new Qs}catch{return Promise.resolve(!1)}}try{En.navigator&&En.navigator.audioSession&&(En.navigator.audioSession.type="playback")}catch{}E_(),R_()}A_();let i;try{i=ne.ctx.state==="running"?Promise.resolve():ne.ctx.resume()}catch{i=Promise.resolve()}return ne.unlockP=(async()=>{try{await Promise.race([i,Sa(1200)])}catch{}return ne.unlocked=ne.ctx.state==="running",ne.unlocked?await C_():Nc(),Cd(),ne.unlocked})().finally(()=>{ne.unlockP=null}),ne.unlockP},setVolumes(i={}){for(const e of Object.keys(ne.vol))typeof i[e]=="number"&&(ne.vol[e]=kt(i[e],0,1));Pd()},setPerspective(i){ne.perspective=i,ms.setPerspective(i),ne.ambient&&ne.ambient.setPerspective(i)},setListener(i,e,t){ms.setListener(i,e,t)},setPaused(i){ne.paused=!!i,ms.setPaused(ne.paused),ne.ambient&&ne.ambient.setMute(ne.paused),ne.buses&&ne.buses.musicDuck.gain.setTargetAtTime(ne.paused?.4:1,ne.ctx.currentTime,.12)},ui:{hover(){const i=performance.now();i-ne.lastHover<45||(ne.lastHover=i,Zt("hover",ru()))},click(){Zt("click",ru())},confirm(){Zt("confirm")},back(){Zt("back")},error(){Zt("error")},tab(){Zt("tab")},toggle(i=!0){Zt("toggle",!!i)},whoosh(){Zt("whoosh")},intro(){return Zt("intro")},countdown(i=3){Zt("countdown",i)},go(){Zt("go")},lap(){Zt("lap")},bestLap(){Zt("bestLap")},sponsor(){Zt("sponsor")},crash(i=.6){Zt("crash",kt(i,0,1))}},music:{play(i,{fade:e=1.5}={}){ne.musicWanted=i,ne.musicFade=e,ne.ready&&Id(i,e)},stop(i=1){ne.musicWanted=null,ne.musicCur&&ne.ctx&&(kd(ne.musicCur,i),ne.musicCur=null)},get current(){return ne.musicCur?ne.musicCur.name:null},isReady(i){return!!ne.musicBuf[i]}},engine:{create(i){return ms.create(i)},loadRecordings(i,e){return ms.loadRecordings(i,e)}},ambient:{update(i){ne.ambient&&ne.ambient.update(i)}}},Vn=3e3,au={grass:[.2,.34,.09,.3,0,1.6,9.5,.4,1],dirt:[.28,.2,.11,.26,0,1.5,9.5,.5,1],dust:[.62,.55,.42,.9,1.7,1.9,-.3,1.1,.5],smoke:[.86,.86,.88,.8,1.6,1.5,-.6,1.2,.42],blacksmoke:[.1,.1,.1,.7,1.4,2.2,-1.2,.9,.55],spark:[1,.72,.28,.07,0,.55,8,.2,1],debris:[.12,.12,.13,.14,0,1.6,9.5,.3,1]},P_=`
attribute vec3 aColor; attribute vec2 aSA; varying vec3 vC; varying float vA; uniform float uScale;
void main(){ vC = aColor; vA = aSA.y; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = clamp(aSA.x * uScale / max(0.5, -mv.z), 0.0, 220.0); gl_Position = projectionMatrix * mv; }`,L_=`
varying vec3 vC; varying float vA; uniform vec3 uLight;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d) * 4.0; if (r > 1.0) discard; float a = vA * (1.0 - r) * (1.0 - r * 0.5); gl_FragColor = vec4(vC * uLight, a); }`;class I_{constructor(e){this.pos=new Float32Array(Vn*3),this.col=new Float32Array(Vn*3),this.sa=new Float32Array(Vn*2),this.vel=new Float32Array(Vn*3),this.age=new Float32Array(Vn).fill(99),this.life=new Float32Array(Vn).fill(1),this.kind=new Uint8Array(Vn),this.size0=new Float32Array(Vn),this.head=0,this.names=Object.keys(au),this.kidx={},this.names.forEach((s,r)=>{this.kidx[s]=r}),this.kdata=this.names.map(s=>au[s]);const t=new Wt;t.setAttribute("position",new _t(this.pos,3).setUsage(Ba)),t.setAttribute("aColor",new _t(this.col,3).setUsage(Ba)),t.setAttribute("aSA",new _t(this.sa,2).setUsage(Ba)),this.uniforms={uScale:{value:700},uLight:{value:new U(1,1,1)}};const n=new Kn({vertexShader:P_,fragmentShader:L_,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0});this.points=new nd(t,n),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=t,this.scene=e,this.live=0}setView(e,t){const n=t.domElement.height/(t.getPixelRatio,1);this.uniforms.uScale.value=n*.5/Math.tan(e.fov*Math.PI/360)}setLight(e){this.uniforms.uLight.value.setScalar(e)}emit(e,t,n,s,r,a,o,c=1,l=1){const u=this.kidx[e],h=this.kdata[u];for(let f=0;f<c;f++){const d=this.head;this.head=(this.head+1)%Vn;const m=d*3,v=Math.random(),g=Math.random(),p=Math.random();this.pos[m]=t+(v-.5)*.4*l,this.pos[m+1]=n+(g-.5)*.2,this.pos[m+2]=s+(p-.5)*.4*l,this.vel[m]=r+(Math.random()-.5)*3*l,this.vel[m+1]=a+(Math.random()-.3)*2.5*l,this.vel[m+2]=o+(Math.random()-.5)*3*l;const M=.8+Math.random()*.4;this.col[m]=h[0]*M,this.col[m+1]=h[1]*M,this.col[m+2]=h[2]*M,this.kind[d]=u,this.age[d]=0,this.life[d]=h[5]*(.7+Math.random()*.6),this.size0[d]=h[3]*(.7+Math.random()*.7),this.sa[d*2]=this.size0[d],this.sa[d*2+1]=h[8]}}update(e){let t=0;for(let n=0;n<Vn;n++){let s=this.age[n];if(s>=this.life[n]){this.sa[n*2+1]!==0&&(this.sa[n*2+1]=0,this.sa[n*2]=0);continue}t++,s+=e,this.age[n]=s;const r=this.kdata[this.kind[n]],a=n*3,o=s/this.life[n],c=Math.exp(-r[7]*e);this.vel[a]*=c,this.vel[a+2]*=c,this.vel[a+1]=this.vel[a+1]*(r[7]>.9?c:1)-r[6]*e,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.pos[a+1]<.04&&r[6]>1&&(this.pos[a+1]=.04,this.vel[a+1]*=-.25,this.vel[a]*=.6,this.vel[a+2]*=.6),this.sa[n*2]=this.size0[n]+r[4]*s,this.sa[n*2+1]=r[8]*(o<.12?o/.12:1)*(1-o)*(r[4]>0,1)}this.live=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSA.needsUpdate=!0}clear(){this.age.fill(99),this.sa.fill(0)}dispose(){this.scene.remove(this.points),this.geo.dispose(),this.points.material.dispose()}}const k_="modulepreload",D_=function(i,e){return new URL(i,e).href},ou={},N_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(u=>{if(u=D_(u,n),u in ou)return;ou[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const v=a[m];if(v.href===u&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":k_,h||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},U_=["hello","lobby","prof","start","rdy","go","st","ai","ev","ping","pong","end"],F_="road-to-the-americas.fdev9155-debug",O_=()=>Math.random().toString(36).slice(2,10);function Dd(){const i={};return{on(e,t){return(i[e]||=[]).push(t),()=>{i[e]=(i[e]||[]).filter(n=>n!==t)}},emit(e,...t){for(const n of(i[e]||[]).slice())try{n(...t)}catch(s){console.error("[net]",e,s)}}}}async function B_(i){const{joinRoom:e}=await N_(async()=>{const{joinRoom:o}=await import("./dist-CIn7zB77.js");return{joinRoom:o}},[],import.meta.url),t=e({appId:F_,identity:"none"},i),n=Dd(),s={},r=new Set,a=await t.getSelf();for(const o of U_){const c=t.makeAction(o);s[o]=c,c.onMessage((l,u)=>n.emit("msg:"+o,l,u.peerId))}return t.onPeerJoin(({peerId:o})=>{r.add(o),n.emit("join",o)}),t.onPeerLeave(({peerId:o})=>{r.delete(o),n.emit("leave",o)}),t.onError(o=>{n.emit("error",o)}),{kind:"trystero",selfId:a.peerId,peers:()=>[...r],send(o,c,l){const u=s[o];if(u)try{const h=u.send(c,l?{target:l}:{});h&&h.catch&&h.catch(()=>{})}catch{}},on(o,c){return n.on("msg:"+o,c)},onJoin:o=>n.on("join",o),onLeave:o=>n.on("leave",o),onError:o=>n.on("error",o),async leave(){try{await t.leave()}catch{}}}}function z_(i){const e="L"+O_(),t=new BroadcastChannel("rtta-room-"+i),n=Dd(),s=new Set,r=+(new URLSearchParams(location.search).get("lag")||0)/1e3,a=+(new URLSearchParams(location.search).get("loss")||0),o=c=>{r>0?setTimeout(c,r*1e3*(.7+Math.random()*.6)):c()};return t.onmessage=c=>{const l=c.data;if(!(!l||l.from===e||l.to&&l.to!==e))if(l.sys==="join")s.add(l.from),t.postMessage({sys:"here",from:e,to:l.from}),n.emit("join",l.from);else if(l.sys==="here")s.has(l.from)||(s.add(l.from),n.emit("join",l.from));else if(l.sys==="leave")s.delete(l.from)&&n.emit("leave",l.from);else{if(a&&l.type==="st"&&Math.random()<a)return;o(()=>n.emit("msg:"+l.type,l.data,l.from))}},setTimeout(()=>t.postMessage({sys:"join",from:e}),30),Promise.resolve({kind:"local",selfId:e,peers:()=>[...s],send(c,l,u){t.postMessage({type:c,data:l,from:e,to:u||null})},on(c,l){return n.on("msg:"+c,l)},onJoin:c=>n.on("join",c),onLeave:c=>n.on("leave",c),onError:c=>n.on("error",c),async leave(){try{t.postMessage({sys:"leave",from:e}),t.close()}catch{}}})}const V_=()=>new URLSearchParams(location.search).get("net")==="local";function H_(i){return V_()?z_(i):B_(i)}const cu="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function G_(){const i=new Uint32Array(6);return(crypto||window.crypto).getRandomValues(i),[...i].map(e=>cu[e%cu.length]).join("")}function xs(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function Nd(i){return/^[A-Z0-9]{6}$/.test(xs(i))&&xs(i).length===6}const Ta=8,Uc=24,lu={track:"americas",laps:5,ai:"pro",aiCount:6,weather:"clear",time:"day",cars:"same"},W_=14e3,q_=25e3;class X_{constructor(){this.ls={},this.game=null,this.reset()}reset(){this.state="idle",this.code="",this.isHost=!1,this.selfId="",this.hostId="",this.players=[],this.settings={...lu},this.error="",this.rtt={},this.net=null,this.offs=[],this.timers=[],this.ready=new Set,this.goSent=!1,this.inRace=!1,this.raceMsg=null}bind(e){this.game=e}on(e,t){return(this.ls[e]||=[]).push(t),()=>{this.ls[e]=(this.ls[e]||[]).filter(n=>n!==t)}}emit(e,...t){for(const n of(this.ls[e]||[]).slice())try{n(...t)}catch(s){console.error("[session]",s)}}get active(){return this.state==="lobby"}get me(){return this.players.find(e=>e.id===this.selfId)||null}get phase(){return this.players.some(e=>e.state!=="lobby")?"race":"lobby"}get link(){const e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",this.code),new URLSearchParams(location.search).get("net")==="local"&&e.searchParams.set("net","local"),e.toString()}profile(){const e=this.game,t=e.career.state;let n="";try{n=localStorage.getItem("rtta.name")||""}catch{}if(!n){n="Driver "+(100+Math.floor(Math.random()*900));try{localStorage.setItem("rtta.name",n)}catch{}}return{name:n.slice(0,16),carId:e.carIdForSeries(e.career.series.id),livery:t.livery}}setName(e){e=String(e||"").replace(/[^\w .'-]/g,"").trim().slice(0,16)||"Driver";try{localStorage.setItem("rtta.name",e)}catch{}return this.active&&this.pushProfile(),e}pushProfile(e={}){const t=this.me,n={...this.profile(),ready:t?t.ready:!1,state:t?t.state:"lobby",...e};this.isHost?(this.upsert(this.selfId,n),this.broadcastLobby()):this.net.send("hello",{...n,host:!1},this.hostId||void 0),t&&Object.assign(t,n),this.emit("change")}setReady(e){this.pushProfile({ready:!!e})}async host(){await this.leave(),this.state="connecting",this.isHost=!0,this.code=G_(),this.emit("change");try{await this.open()}catch(e){return this.fail(e)}return this.state="lobby",this.hostId=this.selfId,this.players=[],this.upsert(this.selfId,{...this.profile(),ready:!0,state:"lobby"}),this.emit("change"),!0}async join(e){if(e=xs(e),await this.leave(),!Nd(e))return this.state="error",this.error="Enter the 6-character room code.",this.emit("change"),!1;this.state="connecting",this.isHost=!1,this.code=e,this.emit("change");try{await this.open()}catch(t){return this.fail(t)}return this.joinTimer=setTimeout(()=>{this.state==="connecting"&&this.fail(new Error("No room found with that code. Check the code, and make sure the host is still on the Online screen."))},W_),this.timers.push(this.joinTimer),!0}fail(e){const t=e&&e.message||String(e);return this.cleanup(),this.state="error",this.error=t,this.emit("change"),!1}async open(){const e=this.net=await H_(this.code);this.selfId=e.selfId;const t=this.offs;t.push(e.onJoin(n=>this.onJoin(n)),e.onLeave(n=>this.onLeave(n)),e.onError(n=>{n&&n.code==="peer-connect-failed"&&this.state!=="lobby"&&console.warn("[net]",n.message)})),t.push(e.on("hello",(n,s)=>this.onHello(n,s)),e.on("lobby",(n,s)=>this.onLobby(n,s)),e.on("start",(n,s)=>this.onStart(n,s)),e.on("rdy",(n,s)=>this.onRdy(s)),e.on("go",(n,s)=>this.onGo(s))),t.push(e.on("ping",(n,s)=>e.send("pong",n,s)),e.on("pong",(n,s)=>{const r=performance.now()-n;this.rtt[s]=this.rtt[s]?this.rtt[s]*.7+r*.3:r})),this.timers.push(setInterval(()=>{if(this.net)for(const n of this.net.peers())this.net.send("ping",performance.now(),n)},1500))}cleanup(){for(const t of this.offs)try{t()}catch{}for(const t of this.timers)clearTimeout(t),clearInterval(t);const e=this.net;this.offs=[],this.timers=[],this.net=null,e&&e.leave()}async leave(){if(this.state==="idle")return;const e=this.state;this.cleanup(),this.reset(),e!=="idle"&&this.emit("change")}onJoin(e){this.net&&this.net.send("hello",{...this.profile(),ready:this.isHost?!0:this.me?this.me.ready:!1,state:this.me?this.me.state:"lobby",host:this.isHost},e)}onLeave(e){if(this.state==="lobby"){if(e===this.hostId&&!this.isHost){this.cleanup(),this.state="error",this.error="The host left the room.",this.emit("change"),this.emit("closed",this.error);return}this.emit("peerLeft",e),this.isHost&&(this.players=this.players.filter(t=>t.id!==e),delete this.rtt[e],this.broadcastLobby(),this.checkGo()),this.emit("change")}}upsert(e,t){let n=this.players.find(r=>r.id===e);n||(n={id:e,name:"Driver",carId:"e05",livery:null,ready:!1,state:"lobby"},this.players.push(n)),Object.assign(n,{name:String(t.name||n.name).slice(0,16),carId:t.carId||n.carId,livery:t.livery||n.livery,ready:!!t.ready,state:t.state||n.state});const s=this.players.filter(r=>r.id!==e&&r.name.toLowerCase()===n.name.toLowerCase());return s.length&&(n.name=n.name.slice(0,13)+" "+(s.length+1)),n}onHello(e,t){if(!e||this.state==="error")return;if(e.host&&!this.isHost){this.hostId=t,this.state;return}if(!this.isHost)return;if(!this.players.some(s=>s.id===t)&&(this.players.length>=Ta||this.phase==="race")){this.net.send("lobby",{deny:this.phase==="race"?"A race is already in progress in this room.":"This room is full."},t);return}this.upsert(t,e),this.broadcastLobby(),this.emit("change")}lobbyMsg(){return{host:this.selfId,code:this.code,settings:this.settings,players:this.players,max:Ta}}broadcastLobby(){this.net&&this.isHost&&this.net.send("lobby",this.lobbyMsg()),this.emit("change")}onLobby(e,t){if(e){if(e.deny){this.state==="connecting"&&this.fail(new Error(e.deny));return}this.isHost||this.hostId&&t!==this.hostId||e.host!==t||(this.hostId=t,this.settings={...lu,...e.settings},this.players=e.players||[],this.state==="connecting"&&(this.state="lobby",clearTimeout(this.joinTimer)),this.emit("change"))}}setSettings(e){this.isHost&&(this.settings={...this.settings,...e},this.broadcastLobby())}canStart(){return this.isHost&&this.state==="lobby"&&this.players.every(e=>e.state==="lobby")}startRace(){if(!this.canStart()||!this.game)return!1;const t={...this.game.mpRoster(this.players,this.settings),cfg:{...this.settings},hostId:this.selfId,humans:this.players.map(n=>n.id)};for(const n of this.players)n.state="race";return this.ready=new Set,this.goSent=!1,this.inRace=!0,this.raceMsg=t,this.broadcastLobby(),this.net.send("start",t),this.timers.push(setTimeout(()=>this.sendGo(),q_)),this.emit("start",t),!0}onStart(e,t){if(this.isHost||t!==this.hostId||this.state!=="lobby")return;this.inRace=!0,this.raceMsg=e;const n=this.me;n&&(n.state="race"),this.emit("start",e)}markReady(){this.isHost?(this.ready.add(this.selfId),this.checkGo()):this.net&&this.net.send("rdy",1,this.hostId)}onRdy(e){this.isHost&&(this.ready.add(e),this.checkGo())}checkGo(){if(!this.isHost||!this.inRace||this.goSent)return;this.players.map(t=>t.id).every(t=>this.ready.has(t))&&this.sendGo()}sendGo(){this.goSent||!this.isHost||!this.net||(this.goSent=!0,this.net.send("go",1),this.emit("go",0))}onGo(e){e===this.hostId&&this.inRace&&this.emit("go",(this.rtt[e]||0)/2e3)}raceOver(){this.inRace=!1,this.raceMsg=null,this.state==="lobby"&&this.pushProfile({state:"lobby"})}oneWay(e){const t=this.rtt[e];return t?Math.min(.3,t/2e3):.03}}const Pe=new X_,ll=["x","z","psi","vx","vy","w","gh","gp","gr","steer","rpm","throttle","brake","skid","roll","pitch","fracGrass","scrape","dirt","gear"],Q_=[2,2,3,2,2,3,3,3,3,3,0,2,2,2,3,3,2,2,2,0],wa=ll.length,K_=Q_.map(i=>10**i),Y_=.05,j_=.066,$_=3,ia=.12,bn={tumble:1,done:2,hidden:4,ghost:8,retired:16},Z_=new U,hu=new Mt,vt=(i,e)=>Math.round((i||0)*e)/e;function uu(i,e){const t=i.sim,n=new Array(wa);for(let o=0;o<wa;o++)n[o]=vt(t[ll[o]],K_[o]);const s=t.damage;n.push(vt(s.front,100),vt(s.rear,100),vt(s.left,100),vt(s.right,100),vt(i.prog,10),i.lap|0,i.finished?vt(i.finishTime,1e3):-1,i.bestLap?vt(i.bestLap,1e3):-1,i.lastLap?vt(i.lastLap,1e3):-1);let r=0;const a=t.tumble;return a&&(r|=bn.tumble,a.done&&(r|=bn.done)),t.hidden&&(r|=bn.hidden),t.ghost&&(r|=bn.ghost),i.retired&&(r|=bn.retired),n.push(r),a&&n.push(vt(a.p.x,100),vt(a.p.y,100),vt(a.p.z,100),vt(a.q.x,1e3),vt(a.q.y,1e3),vt(a.q.z,1e3),vt(a.q.w,1e3),vt(a.v.x,100),vt(a.v.y,100),vt(a.v.z,100),vt(a.w.x,100),vt(a.w.y,100),vt(a.w.z,100),vt(a.cg,100)),n}function du(i,e=0){const t={};for(let s=0;s<wa;s++)t[ll[s]]=i[e+s];let n=e+wa;return t.damage={front:i[n++],rear:i[n++],left:i[n++],right:i[n++]},t.prog=i[n++],t.lap=i[n++],t.fin=i[n++],t.best=i[n++],t.last=i[n++],t.f=i[n++],t.f&bn.tumble&&(t.T={p:[i[n],i[n+1],i[n+2]],q:[i[n+3],i[n+4],i[n+5],i[n+6]],v:[i[n+7],i[n+8],i[n+9]],w:[i[n+10],i[n+11],i[n+12]],cg:i[n+13]}),t}class J_{constructor(){this.p=new U,this.q=new Mt,this.cg=.5,this.done=!1,this.v=new U,this.w=new U}pose(e,t){return t.copy(this.q),e.set(0,-this.cg,0).applyQuaternion(this.q).add(this.p),e}}class ey{constructor(e,t){this.e=e,this.game=t,this.s=null,this.off={x:0,z:0,psi:0},this.offT=0,this.pt=new J_,this.lastRx=0,this.dentVer=0,this.wasFin=!1}push(e,t,n){e.tr=t,e.lag=n;const s=this.s;if(this.s=e,this.lastRx=t,s){const r=this.predict(s,t),a=this.predict(e,t),o=r.x+this.off.x*Math.exp(-(t-this.offT)/ia)-a.x,c=r.z+this.off.z*Math.exp(-(t-this.offT)/ia)-a.z,l=sr(r.psi+this.off.psi*Math.exp(-(t-this.offT)/ia)-a.psi);Math.hypot(o,c)>12||(s.f&bn.tumble)!==(e.f&bn.tumble)?this.off.x=this.off.z=this.off.psi=0:(this.off.x=o,this.off.z=c,this.off.psi=l),this.offT=t}}predict(e,t){const n=Ie(t-e.tr+e.lag,0,.4),s=e.psi+e.w*n*.5,r=Math.sin(s),a=Math.cos(s);return{x:e.x+(e.vx*r+e.vy*a)*n,z:e.z+(e.vx*a-e.vy*r)*n,psi:e.psi+e.w*n,dt:n}}apply(e){const t=this.s,n=this.e,s=n.sim;if(!t)return;if(e-this.lastRx>$_&&!n.left&&(n.left=!0),n.left){s.hidden=!0,s.ghost=!0;return}s.hidden=!!(t.f&bn.hidden),s.ghost=!!(t.f&bn.ghost)||s.hidden,n.retired=!!(t.f&bn.retired);const r=this.predict(t,e),a=Math.exp(-(e-this.offT)/ia);let o=r.x+this.off.x*a,c=r.z+this.off.z*a,l=r.psi+this.off.psi*a;if(t.T){const h=this.pt,f=r.dt;if(h.cg=t.T.cg,h.done=!!(t.f&bn.done),h.v.set(t.T.v[0],t.T.v[1],t.T.v[2]),h.w.set(t.T.w[0],t.T.w[1],t.T.w[2]),h.q.set(t.T.q[0],t.T.q[1],t.T.q[2],t.T.q[3]),h.done)h.p.set(t.T.p[0],t.T.p[1],t.T.p[2]);else{h.p.set(t.T.p[0]+t.T.v[0]*f,Math.max(0,t.T.p[1]+t.T.v[1]*f-4.9*f*f),t.T.p[2]+t.T.v[2]*f);const v=h.w.length();v>1e-4&&(hu.setFromAxisAngle(Z_.copy(h.w).multiplyScalar(1/v),v*f),h.q.premultiply(hu).normalize())}s.tumble=h,o=h.p.x,c=h.p.z;const d=2*(h.q.x*h.q.z+h.q.w*h.q.y),m=1-2*(h.q.x*h.q.x+h.q.y*h.q.y);Math.hypot(d,m)>.35&&(l=Math.atan2(d,m))}else s.tumble=null;s.x=o,s.z=c,s.psi=l,s.vx=t.vx,s.vy=t.vy,s.w=t.w,s.gh=t.gh,s.gp=t.gp,s.gr=t.gr,s.steer=t.steer,s.rpm=t.rpm,s.throttle=t.throttle,s.brake=t.brake,s.skid=t.skid,s.roll=t.roll,s.pitch=t.pitch,s.fracGrass=t.fracGrass,s.fracTrack=1-t.fracGrass,s.scrape=t.scrape,s.dirt=t.dirt,s.gear=t.gear,s.nLoad=.6,s.damage=t.damage,s.px=s.x,s.pz=s.z,s.ppsi=s.psi,s.pgh=s.gh,s.pgp=s.gp,s.pgr=s.gr,n.prog=t.prog+t.vx*r.dt,n.lap=t.lap,n.bestLap=t.best>0?t.best:null,n.lastLap=t.last>0?t.last:null;const u=t.fin>=0;u&&!n.finished?(n.finished=!0,n.finishTime=t.fin,this.wasFin=!0):u||(n.finished=!1)}}class ty{constructor(e,t,n,s,r){this.game=e,this.mp=t,this.race=n,this.isHost=t.isHost,this.selfSlot=r,this.puppets={},this.bySlot={},this.bySender={},this.offs=[],this.tSend=0,this.tAI=0,this.mine=[],this.dentSent={};for(const o of n.entries){this.bySlot[o.slot]=o;const c=s.find(l=>l.slot===o.slot);o.remote?(this.puppets[o.slot]=new ey(o,e),c&&c.human&&(this.bySender[c.nid]=o)):(o.slot===r||this.isHost&&!o.isPlayer&&o.driver)&&this.mine.push(o)}this.me=n.entries.find(o=>o.slot===r),this.ai=this.isHost?n.entries.filter(o=>o.driver&&!o.remote):[];const a=t.net;a&&this.offs.push(a.on("st",(o,c)=>{const l=this.bySender[c],u=l&&this.puppets[l.slot];u&&Array.isArray(o)&&u.push(du(o,0),performance.now()/1e3,this.mp.oneWay(c))}),a.on("ai",(o,c)=>{if(this.isHost||c!==this.mp.hostId||!Array.isArray(o))return;const l=performance.now()/1e3,u=this.mp.oneWay(c);for(const h of o){const f=this.puppets[h[0]];f&&f.push(du(h,1),l,u)}}),a.on("ev",(o,c)=>this.onEvent(o,c)))}stop(){for(const e of this.offs)try{e()}catch{}this.offs=[]}frame(){const e=performance.now()/1e3;for(const t in this.puppets)this.puppets[t].apply(e)}step(){const e=this.mp.net;if(!e)return;const t=performance.now()/1e3;if(this.me&&t-this.tSend>=Y_&&(this.tSend=t,e.send("st",uu(this.me,this.race)),this.sendDents(this.me,t)),this.isHost&&this.ai.length&&t-this.tAI>=j_){this.tAI=t;const n=[];for(const s of this.ai)n.push([s.slot,...uu(s,this.race)]);e.send("ai",n);for(const s of this.ai)this.sendDents(s,t)}}sendDents(e,t){const n=e.sim;(n.dentVer||0)!==(this.dentSent[e.slot]||0)&&t-(e._dentT||0)>.8&&(e._dentT=t,this.dentSent[e.slot]=n.dentVer||0,this.mp.net.send("ev",{k:"dent",slot:e.slot,d:n.dents.map(s=>[vt(s.lf,100),vt(s.lt,100),vt(s.ly,100),vt(s.m,100)]),v:n.dentVer}))}announce(e,t,n){const s=this.mp.net;s&&t&&s.send("ev",{k:e,slot:t.slot,x:n})}onEvent(e,t){if(!e)return;const n=this.bySlot[e.slot];if(!n||!n.remote)return;const s=this.puppets[e.slot];e.k==="dent"&&s?(n.sim.dents=e.d.map(r=>({lf:r[0],lt:r[1],ly:r[2],m:r[3]})),n.sim.dentVer=(n.sim.dentVer||0)+1):e.k==="flip"?this.race.onEvent("flip",n,e.x,n.sim.speed):e.k==="wreck"?this.race.onEvent("wrecked",n):e.k==="out"&&(n.left=!0,n.sim.hidden=!0,this.race.onEvent("left",n))}}const ny=new U(0,1,0),iy=new U(0,0,1),sy=new U(1,0,0),fu=new U(1,1,1),Lo=new U,pu=new Mt,mu=new Mt,gu=new Mt,sa=new Mt,Ks=1/120,ra=["J. Walker","M. Ortega","D. Hale","T. Brandt","R. Okafor","S. Lindgren","C. Duval","A. Reyes","B. Kowalski","L. Moreau","H. Tanaka","P. Novak","E. Castillo","G. Fischer","K. Mbeki","V. Santos","N. Ivanov","F. Dunmore","O. Haugen","Z. Marlow","W. Prescott","I. Barros","Q. Ellison","U. Nakamura","Y. Delacroix","X. Whitaker","A. Strand","R. Quill","D. Pruitt","M. Sato","L. Voss","T. Greer"],vu=[["#c8102e","#f4f4f4"],["#0b5fa5","#f2c200"],["#1c1c1c","#e0e0e0"],["#f2c200","#1c1c1c"],["#2c8a3d","#f4f4f4"],["#6a2c91","#f4c542"],["#e8661a","#1c1c1c"],["#e9e9e9","#c8102e"],["#0f7f8c","#f4f4f4"],["#8a1c1c","#d9b25c"],["#14315c","#e34a33"],["#3f4a52","#9ae37c"]],_u=["none","stripe","split","chevron","fade"],aa={quality:"medium",units:"mph",camera:0,assists:1,volumes:{master:.8,music:.55,sfx:.8,engine:.9,ambient:.7},touch:"auto"};function ry(){try{const i=JSON.parse(localStorage.getItem("rtta.settings")||"{}");return{...aa,...i,volumes:{...aa.volumes,...i.volumes||{}}}}catch{return{...aa,volumes:{...aa.volumes}}}}class ay{constructor(){this.settings=ry(),this.career=n_,this.input=i_(),this.ui=null,this.handlers={},this.mode="idle",this.paused=!1,this.race=null,this.vis=[],this.cfg=null,this.acc=0,this.shake=0,this.orbit={az:.6,el:.16,dist:7.2,auto:!0},this.garageOn=!1,this.showcase=null,this.showId=null,this.camMode=this.settings.camera|0,this.camPos=new U,this.camTgt=new U,this.camInit=!1,this.fov=62,this.t=0,this.fps=60,this.garage={enter:()=>{this.garageOn=!0,this.orbit.auto=!1,this.orbit.az=.7,this.orbit.dist=6.6,this.refreshShowcase()},exit:()=>{this.garageOn=!1,this.orbit.auto=!0,this.orbit.dist=7.4},setLivery:e=>{const t=this.career.state.livery,{slots:n,...s}=e;Object.assign(t,s),n&&(t.slots={...t.slots,...n}),this.career.save(),this.showcase&&(this.showcase.setLivery(t),this.showcase.flush())},setCar:e=>{this.career.setCar(e),this.refreshShowcase()},orbit:(e,t)=>{this.orbit.az-=e*.008,this.orbit.el=Ie(this.orbit.el+t*.005,.02,.9)},zoom:e=>{this.orbit.dist=Ie(this.orbit.dist+e,4.2,12)}},this.input.cycleCamera=()=>this.cycleCamera(),this.net=null,this.mpMenu=!1,this.pendingGo=void 0,Pe.bind(this),Pe.on("go",e=>this.mpGo(e)),Pe.on("peerLeft",e=>{const t=this.race;if(!t||!t.mp)return;const n=t.entries.find(s=>s.nid===e);n&&n.remote&&(n.left=!0,n.sim.hidden=!0,n.sim.ghost=!0,this.toast(`${n.name} left the race`,"info"))})}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,...t){for(const n of this.handlers[e]||[])try{n(...t)}catch(s){console.error(s)}}saveSettings(){try{localStorage.setItem("rtta.settings",JSON.stringify(this.settings))}catch{}try{Qe.setVolumes(this.settings.volumes)}catch{}}toast(e,t="info"){this.ui&&this.ui.toast(e,t)}async init(e,t=()=>{}){const n=document.createElement("canvas");n.id="gl",e.appendChild(n),t(.04,"Starting renderer"),this.world=new Y9(n,{quality:this.settings.quality}),this.tracks={},await new Promise(a=>setTimeout(a,0)),t(.12,"Building the speedway"),await this.ensureTrack("americas",a=>t(.12+a*.3,"Building the speedway")),this.useTrack("americas"),this.world.setTime("day","clear"),this.fx=new I_(this.world.scene);const s=["e87","e05","e15"];let r=0;for(const a of s)t(.45+r++*.15,"Loading cars"),await Eo(a);t(.92,"Preparing garage"),this.refreshShowcase(),this.world.render(),t(1,"Ready"),this.running=!0,this.last=performance.now(),requestAnimationFrame(a=>this.frame(a)),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.saveSettings(),this.emit("ready")}async ensureTrack(e,t){if(e=bt[e]?e:"americas",this.tracks[e])return this.tracks[e];const n=new $9(bt[e]);await new Promise(c=>setTimeout(c,0));const s=tv(n,this.world.q,t);s.visible=!1,this.world.scene.add(s);const r=n.d,a=[],o=Math.max(1,Math.floor(r.px.length/120));for(let c=0;c<r.px.length;c+=o)a.push([r.px[c],r.pz[c]]);return this.tracks[e]={track:n,root:s,minimap:a}}useTrack(e){const t=this.tracks[bt[e]?e:"americas"];if(!(!t||this.track===t.track)){for(const n in this.tracks)this.tracks[n].root.visible=this.tracks[n]===t;this.track=t.track,this.trackRoot=t.root,this.minimapPts=t.minimap,this.showcase&&this.placeShowcase()}}trackId(){return this.track?this.track.id:"americas"}placeShowcase(){const e=this.track.point(120,0,{}),t=this.track.at(120);this.showPt=e,this.place(this.showcase.group,e.x,e.y,e.z,e.heading,t)}place(e,t,n,s,r,a){const o=a.bank||0,c=a.rx||0,l=a.rz||0,u=new U(-c*Math.sin(o),Math.cos(o),-l*Math.sin(o)),h=new U(Math.sin(r),0,Math.cos(r));h.addScaledVector(u,-h.dot(u)).normalize();const f=new U().crossVectors(u,h).normalize();e.matrixAutoUpdate=!1,e.matrix.makeBasis(f,u,h),e.matrix.setPosition(t,n,s),e.matrixWorldNeedsUpdate=!0}placeSim(e,t,n=1,s=null){if(t.tumble){t.tumble.pose(Lo,sa),e.matrixAutoUpdate=!1,e.matrix.compose(Lo,sa,fu),e.matrixWorldNeedsUpdate=!0,s&&(s.x=t.x,s.z=t.z,s.psi=t.psi);return}const r=t.px===void 0?1:n,a=ni(t.px===void 0?t.x:t.px,t.x,r),o=ni(t.pz===void 0?t.z:t.pz,t.z,r),c=(t.ppsi===void 0?t.psi:t.ppsi)+sr(t.psi-(t.ppsi===void 0?t.psi:t.ppsi))*r,l=ni(t.pgh===void 0?t.gh:t.pgh,t.gh,r),u=ni(t.pgp===void 0?t.gp:t.pgp,t.gp,r),h=ni(t.pgr===void 0?t.gr:t.pgr,t.gr,r);pu.setFromAxisAngle(ny,c),mu.setFromAxisAngle(iy,h),gu.setFromAxisAngle(sy,-u),sa.copy(pu).multiply(mu).multiply(gu),e.matrixAutoUpdate=!1,e.matrix.compose(Lo.set(a,l,o),sa,fu),e.matrixWorldNeedsUpdate=!0,s&&(s.x=a,s.z=o,s.psi=c)}carIdForSeries(e){const t=this.career.carChoice();return t&&rn[t]?t:Gh[e]||Gh[this.career.series.id]||"e05"}refreshShowcase(){const e=this.carIdForSeries(this.career.series.id);!this.showcase||this.showId!==e?(this.showcase&&(this.world.scene.remove(this.showcase.group),this.showcase.dispose()),this.showcase=ea({car:e,atlas:this.settings.quality==="low"?"med":"high",livery:this.career.state.livery}),this.showId=e,this.world.scene.add(this.showcase.group),this.placeShowcase(),this.showcase.setLights(!1)):(this.showcase.setLivery(this.career.state.livery),this.showcase.flush()),this.showcase.group.visible=this.mode!=="race"&&this.mode!=="results"}randomLivery(e,t){const[n,s]=vu[Math.floor(e()*vu.length)];let r;do r=String(1+Math.floor(e()*98));while(t.has(r));t.add(r);const a={},o=gr.filter(c=>c.tier<=2);for(const c of["hood","roof","door","quarter","trunk","bumper"])a[c]=e()<.7?o[Math.floor(e()*o.length)].id:null;return{...rr,paint:n,accent:s,trim:"#14161a",pattern:_u[Math.floor(e()*_u.length)],finish:"gloss",number:r,numberColor:e()<.5?"#ffffff":"#111111",numberStyle:"italic",slots:a}}clearRace(){for(const e of this.vis)if(this.world.scene.remove(e.car.group),e.car.dispose(),e.voice)try{e.voice.dispose()}catch{}this.net&&(this.net.stop(),this.net=null),this.mpMenu=!1,this.vis=[],this.race=null,this.fx&&this.fx.clear(),this.ghostVis&&(this.world.scene.remove(this.ghostVis.group),this.ghostVis.dispose(),this.ghostVis=null)}async startRace(e={}){return this.launch("race",e)}async startHotLap(e={}){return this.launch("hotlap",e)}async launch(e,t){try{this.clearRace(),this.cfg={...t,kind:e},this.paused=!1,this.input.clear(),await this.ensureTrack(t.track),this.useTrack(t.track),t.track=this.track.id,this.cfg.track=t.track;const n=t.series||this.career.series.id,s=t.car&&rn[t.car]?t.car:this.carIdForSeries(n);await Eo(s);const r=Hh(s,qh(s)),a=e==="hotlap",o=a?1:Ie(t.field||12,2,this.world.q.maxCars),c=ba(Date.now()&65535),l=new Set([String(this.career.state.livery.number)]),u=[],h=this.career.state.livery,f=new Ro(0,"You",h.number,h,!0,r,s);u.push(f);for(let m=1;m<o;m++){const v=this.randomLivery(c,l),g=new Ro(m,ra[(m-1)%ra.length],v.number,v,!1,r,s);g.driver=new Ic(this.track,t.ai||"pro",m+1,(c()-.5)*6),u.push(g)}this.race=new Kh(this.track,u,{laps:a?999:t.laps||3,mode:a?"hotlap":"race",onEvent:(m,...v)=>this.onRaceEvent(m,...v)}),this.world.setTime(t.time||"day",t.weather||"clear"),a?this.race.rollingStart(42,-80):this.race.gridUp(Math.min(o-1,Math.floor(o*.55)));const d=o<=16?"med":"low";for(const m of u){const v=ea({car:s,atlas:m.isPlayer?this.settings.quality==="low"?"med":"high":d,livery:m.livery});this.world.scene.add(v.group),this.vis.push({e:m,car:v,spin:0,voice:null,roll:0,pitch:0})}try{const m=f.gridPos||1,v=u.filter(g=>!g.isPlayer).sort((g,p)=>Math.abs((g.gridPos||0)-m)-Math.abs((p.gridPos||0)-m)).slice(0,3);for(const g of this.vis)(g.e.isPlayer||v.includes(g.e))&&(g.voice=Qe.engine.create({player:g.e.isPlayer,kind:"v8",era:g.e.carId||s,seed:g.e.id+3}));Qe.setPerspective(this.camMode===1?"cockpit":"chase"),Qe.music.play("race",{fade:1.5})}catch(m){console.warn("audio",m)}this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=a?this.loadGhost():null,this.ghostVis=null,this.ghostHint=void 0,a&&t.ghost&&(this.ghostVis=this.makeGhostCar(s)),this.showcase&&(this.showcase.group.visible=!1),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1}catch(n){console.error(n),this.toast("Could not start: "+(n&&n.message||n),"warn")}}mpRoster(e,t){const n=ba((Date.now()^24301)&16777215),s=e.find(c=>c.id===Pe.selfId)||e[0],r=new Set,a=[];for(const c of e){let l={...rr,...c.livery||{}};if(r.has(String(l.number))){let u;do u=String(1+Math.floor(n()*98));while(r.has(u));l={...l,number:u}}r.add(String(l.number)),a.push({nid:c.id,name:c.name,carId:t.cars==="own"&&rn[c.carId]?c.carId:s.carId,livery:l,human:!0})}const o=Ie(t.aiCount|0,0,Math.max(0,Uc-e.length));for(let c=0;c<o;c++){const l=this.randomLivery(n,r);a.push({nid:"ai"+c,name:ra[c%ra.length],carId:s.carId,livery:l,human:!1,skill:(n()-.5)*6})}for(let c=a.length-1;c>0;c--){const l=Math.floor(n()*(c+1));[a[c],a[l]]=[a[l],a[c]]}return a.forEach((c,l)=>{c.slot=l}),{roster:a,seed:Math.floor(n()*1e9)}}async launchMP(e){try{this.clearRace();const{roster:t,cfg:n,hostId:s}=e;this.cfg={kind:"race",mp:!0,track:n.track,laps:n.laps,ai:n.ai,weather:n.weather,time:n.time},this.paused=!1,this.input.clear(),await this.ensureTrack(n.track),this.useTrack(n.track);const r=[...new Set(t.map(h=>h.carId))];await Promise.all(r.map(h=>Eo(h)));const a={};for(const h of r)a[h]=Hh(h,qh(h));const o=Pe.selfId===s,c=[];for(const h of t.slice().sort((f,d)=>f.slot-d.slot)){const f=h.nid===Pe.selfId,d=new Ro(h.slot,f?"You":h.name,h.livery.number,h.livery,f,a[h.carId],h.carId);d.slot=h.slot,d.nid=h.nid,f||(h.human||!o?d.remote=!0:d.driver=new Ic(this.track,n.ai||"pro",h.slot+1,h.skill||0)),c.push(d)}const l=t.find(h=>h.nid===Pe.selfId);if(!l)throw new Error("You are not in this race");this.race=new Kh(this.track,c,{laps:n.laps||5,mode:"race",mp:!0,hold:!0,onEvent:(h,...f)=>this.onRaceEvent(h,...f)}),this.world.setTime(n.time||"day",n.weather||"clear"),this.race.gridUp(0,c);const u=c.length<=16?"med":"low";for(const h of c){const f=ea({car:h.carId,atlas:h.isPlayer?this.settings.quality==="low"?"med":"high":u,livery:h.livery});this.world.scene.add(f.group),f.group.visible=!0,this.vis.push({e:h,car:f,spin:0,voice:null,roll:0,pitch:0})}try{const f=this.race.player.gridPos||1,d=c.filter(m=>!m.isPlayer).sort((m,v)=>Math.abs((m.gridPos||0)-f)-Math.abs((v.gridPos||0)-f)).slice(0,3);for(const m of this.vis)(m.e.isPlayer||d.includes(m.e))&&(m.voice=Qe.engine.create({player:m.e.isPlayer,kind:"v8",era:m.e.carId,seed:m.e.id+3}));Qe.setPerspective(this.camMode===1?"cockpit":"chase"),Qe.music.play("race",{fade:1.5})}catch(h){console.warn("audio",h)}if(this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=null,this.ghostVis=null,this.ghostHint=void 0,this.showcase&&(this.showcase.group.visible=!1),this.net=new ty(this,Pe,this.race,t,l.slot),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1,Pe.markReady(),this.pendingGo!==void 0){const h=this.pendingGo;this.pendingGo=void 0,this.mpGo(h)}}catch(t){console.error(t),this.toast("Could not start the online race: "+(t&&t.message||t),"warn");try{Pe.raceOver()}catch{}this.ui&&this.ui.show("online")}}mpGo(e){const t=this.race;if(!t||!t.mp){this.pendingGo=e;return}t.holdGrid=!1,t.countdown=Math.max(1.2,4.2-(e||0))}leaveMP(){try{this.net&&this.net.me&&!(this.race&&this.race.player&&this.race.player.finished)&&this.net.announce("out",this.net.me)}catch{}this.net&&(this.net.stop(),this.net=null),this.pendingGo=void 0,Pe.raceOver()}onRaceEvent(e,t,n,s){const r=this.race&&this.race.player;this.net&&t&&!t.remote&&t.slot!==void 0&&(e==="flip"?this.net.announce("flip",t,n):e==="wrecked"&&this.net.announce("wreck",t));try{if(e==="left"){this.toast(`${t.name} left the race`,"info");return}e==="count"?Qe.ui.countdown(t):e==="go"?(Qe.ui.go(),this.toast("Green flag","good")):e==="lap"&&t===r?(Qe.ui.lap(),this.emit("lapComplete",t.lastLap),this.race.mode==="hotlap"&&this.hotLapCrossed(t)):e==="bestlap"&&t===r?(Qe.ui.bestLap(),this.toast("Best lap","good"),this.race.mode==="hotlap"&&t.bestLap&&this.career.noteBest(this.trackId(),t.bestLap)):e==="crash"&&(t===r||n===r)?(Qe.ui.crash(Ie(s||.4,0,1)),this.shake=Math.max(this.shake,Ie(s||.4,0,1))):e==="wall"&&t===r?(Qe.ui.crash(.5),this.shake=Math.max(this.shake,.5)):e==="flip"?t===r?(this.toast(n==="lift"?"Airborne!":"You're rolling!","warn"),Qe.ui.crash(1),this.shake=Math.max(this.shake,1)):this.nearPlayer(t,90)&&Qe.ui.crash(.7):e==="tumbleHit"?this.tumbleHit(t,n):e==="wrecked"?t===r?this.toast("Wrecked. Recovering to the track...","warn"):this.nearPlayer(t,200)&&this.t-(this._wt||-9)>3&&(this._wt=this.t,this.toast(`#${t.number} ${t.name} is out`,"info")):e==="recovered"&&t===r?(this.toast("Back on track","good"),this.camInit=!1):e==="finish"&&t===r?(this.flag="checker",this.emit("flag","checker")):e==="done"&&this.finishRace()}catch(a){console.warn(a)}}nearPlayer(e,t){const n=this.race&&this.race.player;return!!n&&Math.hypot(e.sim.x-n.sim.x,e.sim.z-n.sim.z)<t}tumbleHit(e,t){const n=this.fx,s=this.race.player;if(!(e===s||this.nearPlayer(e,90)))return;const a=e.sim,o=Ie(t.hit,0,1);if(n){const c=a.wvx*.35,l=a.wvz*.35;if(t.soft){const u=3+Math.floor(o*14);for(let h=0;h<u;h++)n.emit(Math.random()<.6?"grass":"dirt",t.x,.2,t.z,c,3+Math.random()*6*(.4+o),l,1,1.4);n.emit("dust",t.x,.3,t.z,c*.3,1,l*.3,1+Math.floor(o*2),1.5)}else{const u=2+Math.floor(o*16);for(let h=0;h<u;h++)n.emit("spark",t.x,Math.max(.1,t.y),t.z,c,1+Math.random()*3,l,1,1.8);o>.35&&n.emit("debris",t.x,Math.max(.2,t.y),t.z,c,3+Math.random()*4,l,2,1.5),o>.2&&n.emit("smoke",t.x,Math.max(.1,t.y),t.z,c*.2,.8,l*.2,1,1)}}(e===s||this.nearPlayer(e,50))&&(o>.25&&this.t-(this._tt||0)>.18&&(this._tt=this.t,Qe.ui.crash(Ie(o*(e===s?1:.6),.1,1))),e===s&&(this.shake=Math.max(this.shake,o*.8)))}finishRace(){if(this.finishing)return;this.finishing=!0;const e=this.race,t=e.player,n=this.cfg.kind==="hotlap",s=(o,c)=>({pos:c+1,name:o.isPlayer?"You":o.name,me:o.isPlayer,gap:c===0?"":o.finished&&e.sorted[0].finished?`+${Math.max(0,o.finishTime-e.sorted[0].finishTime).toFixed(1)}s`:`+${Math.max(1,Math.round((e.sorted[0].prog-o.prog)/e.track.length))} lap`}),r=e.sorted.slice(0,10).map(s);t.pos>10&&r.push(s(t,t.pos-1));let a={mode:n?"hotlap":"race",pos:t.pos,field:e.entries.length,laps:this.cfg.laps||e.laps,bestLap:t.bestLap,standings:r};!n&&this.cfg.series&&!this.cfg.mp&&(a.career=this.career.recordResult({series:this.cfg.series,pos:t.pos,field:e.entries.length,laps:e.laps,bestLap:t.bestLap,points:0,track:this.trackId()})),a.track=this.trackId(),this.cfg.mp&&(a.mp=!0),this.emit("raceFinished",a),this.endRace(),this.mode="results";try{Qe.music.play("results",{fade:1})}catch{}this.ui&&this.ui.show("results",a)}endRace(){for(const e of this.vis)if(e.voice){try{e.voice.dispose()}catch{}e.voice=null}}afterStep(){const e=this.race;if(e.mode==="hotlap"&&this.recOK&&e.t-this.recLast>=.05){this.recLast=e.t;const t=e.player.sim;this.rec.push(+t.x.toFixed(2),+t.z.toFixed(2),+t.psi.toFixed(3))}}ghostKey(){const e=this.trackId();return e==="americas"?"rtta.ghost.v1":"rtta.ghost.v1."+e}loadGhost(){try{const e=JSON.parse(localStorage.getItem(this.ghostKey())||"null");return e&&e.pts&&e.pts.length>60?e:null}catch{return null}}hotLapCrossed(e){const t=e.lastLap;if(this.recOK&&t&&this.rec.length>60&&(!this.ghostData||t<this.ghostData.lap)){this.ghostData={lap:+t.toFixed(3),pts:this.rec.slice()};try{localStorage.setItem(this.ghostKey(),JSON.stringify(this.ghostData))}catch{}}this.rec=[],this.recOK=!0,this.lapT0=this.race.t,this.recLast=this.race.t}updateGhost(){const e=this.ghostVis;if(!e)return;const t=this.race,n=this.ghostData;if(!n||!this.recOK||t.mode!=="hotlap"){e.group.visible=!1;return}const s=t.t-this.lapT0,r=s/.05,a=Math.floor(r),o=n.pts.length/3;if(a<0||a>=o-1||s>n.lap+.5){e.group.visible=!1;return}const c=r-a,l=n.pts,u=l[a*3]+(l[a*3+3]-l[a*3])*c,h=l[a*3+1]+(l[a*3+4]-l[a*3+1])*c;let f=l[a*3+2],d=l[a*3+5];for(;d-f>Math.PI;)d-=2*Math.PI;for(;d-f<-Math.PI;)d+=2*Math.PI;const m=this.ghostQ||(this.ghostQ={});this.track.query(u,h,this.ghostHint,m),this.ghostHint=m.i,this.place(e.group,u,m.surface==="grass"?0:m.y,h,f+(d-f)*c,m.surface==="grass"?{bank:0,rx:0,rz:0}:m),e.spin+=(n.lap>0?70:0)*.016/e.dim.wheelR,e.update({steer:0,spin:e.spin,roll:0,pitch:0}),e.group.visible=!0}makeGhostCar(e){const t=ea({car:e,atlas:"low",livery:{...rr,paint:"#9fe6ff",accent:"#ffffff",trim:"#9fe6ff",pattern:"none",number:"",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}}});return t.group.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.38,n.material.depthWrite=!1)}),t.spin=0,this.world.scene.add(t.group),t}finishHotLap(){const e=this.race,t=e&&e.player;if(!t||this.finishing)return;this.finishing=!0;const n=t.bestLap,s=this.career.bestFor(this.trackId()),r=!!n&&(!s||n<=s);r&&this.career.noteBest(this.trackId(),n);const a={mode:"hotlap",bestLap:n,newBest:r,standings:[],track:this.trackId()};this.emit("raceFinished",a),this.endRace(),this.mode="results",this.ui&&this.ui.show("results",a)}pause(){if(!(this.mode!=="race"||this.paused||this.mpMenu)){if(this.race&&this.race.mp){this.mpMenu=!0,this.ui&&this.ui.show("pause",{mp:!0,info:"The race keeps going for everyone else. Your car coasts while this menu is open."});return}this.paused=!0;try{Qe.setPaused(!0)}catch{}this.ui&&this.ui.show("pause")}}resume(){this.mpMenu=!1,this.paused=!1,this.last=performance.now(),this.acc=0,this.input.clear();try{Qe.setPaused(!1)}catch{}}restart(){const e=this.cfg;if(!(!e||e.mp)){this.paused=!1;try{Qe.setPaused(!1)}catch{}return this.launch(e.kind,e)}}exitToMenu(){const e=!!(this.race&&this.race.mp);e&&this.leaveMP(),this.paused=!1;try{Qe.setPaused(!1),Qe.music.play("menu",{fade:1})}catch{}this.clearRace(),this.mode="idle",this.camInit=!1,this.useTrack("americas"),this.refreshShowcase(),this.world.setTime("day","clear"),this.ui&&this.ui.show(e&&Pe.active?"online":"menu")}cycleCamera(){this.camMode=(this.camMode+1)%3,this.settings.camera=this.camMode,this.camInit=!1;try{Qe.setPerspective(this.camMode===1?"cockpit":this.camMode===2?"broadcast":"chase")}catch{}}frame(e){requestAnimationFrame(n=>this.frame(n));let t=Math.min(this.race&&this.race.mp?.25:.1,(e-this.last)/1e3);this.last=e,this.fps=ni(this.fps,1/Math.max(t,.001),.05),this.t+=t,this.mode==="race"&&this.race?(this.paused||this.runRace(t),this.renderRace(t)):this.renderShowcase(t),this.world.render()}runRace(e){const t=this.race,n=t.player;if(this.input.consume("pause")){this.pause();return}if(this.input.consume("camera")&&this.cycleCamera(),this.input.consume("reset")&&n&&!n.finished&&!n.sim.tumble){const a=n.q,o=this.track.point(a.s+2,Ie(a.u,-8,8),{});n.sim.place(o.x,o.z,o.heading,22),n.sim.w=0,n.sim.vy=0}this.net&&this.net.frame(),this.acc+=e;let s=0;const r=t.mp?28:10;for(;this.acc>=Ks&&s<r;){let a=this.input.read(Ks,n.sim.speed);if(this.mpMenu&&(a={steer:0,throttle:0,brake:.25,analog:!0}),a.assist=this.settings.assists===0?0:1,n.controls=a,t.update(Ks),this.afterStep(),this.net&&this.net.step(),this.acc-=Ks,s++,this.mode!=="race")return}s>=r&&(this.acc=0),this.pushHud(),this.updateAudio(e)}pushHud(){const e=this.race,t=e.player,n=t.sim;if(!this.ui)return;const s=e.phase==="grid"?e.holdGrid?"Waiting for drivers"+".".repeat(1+Math.floor(this.t/3)%3):e.countdown>3?"Get ready":e.countdown>0?String(Math.ceil(e.countdown)):"GO":null;let r=this.flag||e.flag||null;t.finished&&(r="checker"),this.ui.hud.update({speedMph:n.speed*2.23694,speedKph:n.speed*3.6,rpm:n.rpm,rpmMax:n.C.redline,gear:n.gear,throttle:n.throttle,brake:n.brake,steer:t.controls.steer||0,lap:Ie(t.lap+1,1,e.mode==="hotlap"?999:e.laps),laps:e.mode==="hotlap"?0:e.laps,pos:t.pos||1,field:e.entries.length,lastLap:t.lastLap,bestLap:t.bestLap,curLap:Math.max(0,e.t-t.lapStart),gapAhead:t.gapAhead||0,gapBehind:t.gapBehind||0,drafting:n.draft>.15,damage:n.damage,flag:r,mode:e.mode,standings:this.hudStandings(e,t),minimap:{pts:this.minimapPts,cars:e.entries.filter(a=>!a.sim.hidden&&!a.left).map(a=>({x:a.sim.x,z:a.sim.z,me:a.isPlayer}))},message:s})}hudStandings(e,t){const n=r=>({pos:r.pos,name:r.isPlayer?"You":r.name,gap:r.pos===1?"":`+${(r.gapLead||0).toFixed(1)}`,me:r.isPlayer,color:r.livery&&r.livery.paint||"#888"}),s=e.sorted.slice(0,7).map(n);return t.pos>7&&s.push(n(t)),s}updateAudio(e){const t=this.world.camera,n=new U;t.getWorldDirection(n);try{const s=this.vis.find(l=>l.e.isPlayer),r=s.e.sim,a=Math.sin(r.psi)*r.vx,o=Math.cos(r.psi)*r.vx;Qe.setListener({x:t.position.x,y:t.position.y,z:t.position.z},{x:a,y:0,z:o},{x:n.x,y:n.y,z:n.z});for(const l of this.vis)if(l.voice){const u=l.e.sim,h=Math.sin(u.psi),f=Math.cos(u.psi);l.voice.update({rpm:u.rpm,throttle01:u.throttle,load01:Ie(u.nLoad*.5+u.throttle*.5,0,1),pos:{x:u.x,y:1,z:u.z},vel:{x:h*u.vx,y:0,z:f*u.vx}})}const c=this.race.entries.some(l=>!l.isPlayer&&Math.hypot(l.sim.x-r.x,l.sim.z-r.z)<40);Qe.ambient.update({speed:r.speed,slip01:r.skid||0,offTrack:s.e.q.surface==="grass"||s.e.q.surface==="apron",drafting01:Ie(r.draft||0,0,1),crowd01:c?.5:.7,wall01:s.e.q.surface==="wall"?1:0})}catch(s){this._ae||(this._ae=1,console.warn("audio update",s))}}renderRace(e){this.race;const t=this.fx;for(const s of this.vis){const r=s.e,a=r.sim;if(a.hidden){if(s.car.group.visible=!1,s.voice){try{s.voice.dispose()}catch{}s.voice=null}continue}s.pose=s.pose||{x:0,z:0,psi:0},this.placeSim(s.car.group,a,Ie(this.acc/Ks,0,1),s.pose),a.tumble?(s.roll=0,s.pitch=0,s.car.update({steer:0,spin:s.spin,roll:0,pitch:0}),s.spin+=Math.hypot(a.vx,a.vy)/s.car.dim.wheelR*e*.5):(s.spin+=a.vx/s.car.dim.wheelR*e,s.roll=ni(s.roll,-(a.roll||0),.3),s.pitch=ni(s.pitch,a.pitch||0,.3),s.car.update({steer:a.steer||0,spin:s.spin,roll:s.roll,pitch:s.pitch})),s.car.setBrake(a.brake),s.car.setLights(this.world.timeKey==="night"||this.world.timeKey==="sunset"),s.car.setDirt(a.dirt||0),a.dentVer!==s.dentVer&&(s.dentT||0)<=this.t&&(s.dentVer=a.dentVer,s.dentT=this.t+.3,s.car.applyDents(a.dents,a.C.cgH)),this.emitFx(s,e)}t&&(t.setView(this.world.camera,this.world.renderer),t.setLight(this.world.timeKey==="night"?.35:this.world.timeKey==="sunset"?.8:1),t.update(e)),this.updateGhost();const n=this.vis.find(s=>s.e.isPlayer);this.updateCamera(n,e),this.input.consume("look")}emitFx(e,t){const n=e.e.sim,s=this.fx;if(!s||this.paused)return;const r=this.world.camera.position,a=n.x-r.x,o=n.z-r.z;if(a*a+o*o>25600)return;const c=e.fxA||(e.fxA={g:0,d:0,s:0,k:0,b:0}),l=n.C,u=l.trackHalf||.8,h=Math.sin(n.psi),f=Math.cos(n.psi),d=n.speed,m=n.wvx,v=n.wvz,g=(y,_)=>{const S=y?l.a:-l.b,T=_?u:-u;return[n.x+h*S+f*T,n.z+f*S-h*T]};if(n.tumble){const y=n.tumble;if(!y.done&&n.fracGrass>.01||!y.done&&e.e.q.surface==="grass")for(c.d+=t*55*Math.min(1,d/25);c.d>=1;)c.d-=1,s.emit("dust",n.x,.3,n.z,m*.15,1.2,v*.15,1,1.5);return}const p=n.fracGrass;if(p>.2&&d>5){for(c.g+=t*(14+d*1.1)*p;c.g>=1;){c.g-=1;const[y,_]=g(Math.random()<.3,Math.random()<.5);s.emit(Math.random()<.55?"grass":"dirt",y,.15,_,-m*.22,1.8+Math.random()*3.5,-v*.22,1,1)}for(c.d+=t*(22+d*1.3)*p;c.d>=1;){c.d-=1;const[y,_]=g(!1,Math.random()<.5);s.emit("dust",y,.2,_,-m*.08,.7,-v*.08,1,1.2)}}if(n.skid>.3&&n.fracTrack>.4)for(c.s+=t*40*n.skid;c.s>=1;){c.s-=1;const[y,_]=g(!1,Math.random()<.5);s.emit("smoke",y,.15,_,-m*.04,.5,-v*.04,1,.6)}if(n.scrape>.4&&d>10){const y=e.e.q,_=y.u>0?1:-1;for(c.k+=t*110*n.scrape;c.k>=1;){c.k-=1;const S=n.x+(y.rx||0)*_*1,T=n.z+(y.rz||0)*_*1;s.emit("spark",S,.4+Math.random()*.4,T,m*.5,1+Math.random()*2.5,v*.5,1,1.6)}}const M=Math.max(n.damage.front,n.damage.left*.7,n.damage.right*.7);if(M>.55&&d>3)for(c.b+=t*(6+M*22);c.b>=1;)c.b-=1,s.emit("blacksmoke",n.x+h*(l.a+.4),.95,n.z+f*(l.a+.4),m*.5,1.2,v*.5,1,.6)}updateCamera(e,t){const n=this.world.camera,s=e.e.sim,r=e.pose||s,a=Object.create(s,{x:{value:r.x},z:{value:r.z},psi:{value:r.psi}}),o=e.car.group,c=e.car.dim,l=a.tumble,u=l&&this.camMode===1?0:this.camMode;if(this.camInit||(this.camYaw=a.psi),l){const _=l,T=Math.hypot(_.v.x,_.v.z)>4?Math.atan2(_.v.x,_.v.z):this.camYaw;this.camYaw+=sr(T-this.camYaw)*(1-Math.exp(-t*2.5))}else this.camYaw+=sr(a.psi-this.camYaw)*(1-Math.exp(-t*(u===2?5:10)));const h=u===1?a.psi:this.camYaw,f=new U(Math.sin(h),0,Math.cos(h)),d=new U(f.z,0,-f.x),m=new U(a.x,l?Math.max(0,a.gh):o.matrix.elements[13],a.z),v=u;let g=new U,p=new U,M=62;const y=a.speed;if(M=62+Ie(y/90,0,1)*14,v===0){const _=8.2+Ie(y/80,0,1)*1.2;g.copy(m).addScaledVector(f,-_).addScaledVector(d,-a.vy*.05).add(new U(0,2.5,0)),p.copy(m).addScaledVector(f,12).add(new U(0,1,0))}else v===1?(g.copy(m).addScaledVector(f,c.front*.05+.1).addScaledVector(d,.34).add(new U(0,1.05,0)),p.copy(g).addScaledVector(f,30).addScaledVector(d,(a.steer||0)*-4*0+0).add(new U(0,-.3,0)),M=74+Ie(y/90,0,1)*8):(g.copy(m).addScaledVector(f,-13).add(new U(0,5.2,0)),p.copy(m).addScaledVector(f,8).add(new U(0,.8,0)),M=52+Ie(y/90,0,1)*8);this.camInit||(this.camPos.copy(g),this.camTgt.copy(p),this.camInit=!0),this.camPos.copy(g),this.camTgt.copy(p),n.position.copy(this.camPos),this.shake>.01&&(n.position.x+=(Math.random()-.5)*this.shake*.35,n.position.y+=(Math.random()-.5)*this.shake*.35,this.shake*=Math.exp(-t*5)),n.lookAt(this.camTgt),Math.abs(n.fov-M)>.05&&(n.fov=ni(n.fov,M,.08),n.updateProjectionMatrix()),this.world.followSun(m),e.car.group&&(e.car.group.visible=!0)}renderShowcase(e){if(!this.showcase||!this.showPt)return;const t=this.orbit;t.auto&&(t.az+=e*.18);const n=this.showPt,s=this.world.camera,r=n.x,a=n.y+.6,o=n.z,c=t.dist;s.position.set(r+Math.sin(t.az)*Math.cos(t.el)*c,a+Math.sin(t.el)*c+.3,o+Math.cos(t.az)*Math.cos(t.el)*c),s.lookAt(r,a,o),Math.abs(s.fov-38)>.05&&(s.fov=38,s.updateProjectionMatrix()),this.world.followSun(n)}}const Da=new ay;function A(i,e,...t){const n=document.createElement(i);if(e)for(const r of Object.keys(e)){const a=e[r];if(!(a==null||a===!1))if(r==="class")n.className=a;else if(r==="style"&&typeof a=="object")for(const o of Object.keys(a))o.startsWith("--")?n.style.setProperty(o,a[o]):n.style[o]=a[o];else r==="dataset"?Object.assign(n.dataset,a):r.startsWith("on")&&typeof a=="function"?n.addEventListener(r.slice(2).toLowerCase(),a):r==="html"?n.innerHTML=a:a===!0?n.setAttribute(r,""):n.setAttribute(r,a)}const s=r=>{r==null||r===!1||(Array.isArray(r)?r.forEach(s):n.append(r instanceof Node?r:document.createTextNode(String(r))))};return t.forEach(s),n}const Ys=(i,e=document)=>e.querySelector(i),oy=(i,e=document)=>Array.from(e.querySelectorAll(i)),cy=(i,e,t)=>Math.min(t,Math.max(e,i)),Yt=i=>Math.round(i).toLocaleString("en-US");function Ti(i){if(i==null||!isFinite(i)||i<=0)return"--:--.---";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function yu(i){if(i==null||!isFinite(i))return"--";const e=Math.abs(i).toFixed(1);return e==="0.0"?"0.0":(i>=0?"+":"-")+e}const Ud=i=>{const e=["th","st","nd","rd"],t=i%100;return i+(e[(t-20)%10]||e[t]||e[0])},hl=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Fd=i=>new Promise(e=>setTimeout(e,i)),Ot=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${i}</svg>`,ly={home:Ot('<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'),trophy:Ot('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a2 2 0 0 0 2 4"/><path d="M16 6h3a2 2 0 0 1-2 4"/><path d="M12 13v4"/><path d="M8 20h8"/>'),flag:Ot('<path d="M5 21V4"/><path d="M5 5h13l-2 4 2 4H5"/>'),stopwatch:Ot('<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'),car:Ot('<path d="M3 15l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v3H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),globe:Ot('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>'),gear:Ot('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),pause:Ot('<path d="M8 5v14M16 5v14"/>'),play:Ot('<path d="M7 4l13 8-13 8z"/>'),camera:Ot('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>'),lock:Ot('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),check:Ot('<path d="M5 12l4.5 4.5L19 7"/>'),back:Ot('<path d="M15 5l-7 7 7 7"/>'),chevron:Ot('<path d="M9 5l7 7-7 7"/>'),coin:Ot('<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),star:Ot('<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'),handshake:Ot('<path d="M3 12l4-4 4 2 3-2 4 3 3-1"/><path d="M7 8v7l5 4 7-5"/>'),fullscreen:Ot('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>')},on=(i,e="ico")=>{const t=document.createElement("span");return t.className=e,t.innerHTML=ly[i]||"",t},hy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 200" width="604" height="200" role="img" aria-label="Road to the Americas"><g class="mk">
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
`;function Gt(i,...e){try{const t=Qe&&Qe.ui&&Qe.ui[i];typeof t=="function"&&t.apply(Qe.ui,e)}catch{}}function uy(i){try{Qe&&Qe.setVolumes&&Qe.setVolumes(i)}catch{}}function dy(i,e){try{Qe&&Qe.music&&Qe.music.play(i,e)}catch{}}function fy(){try{return Promise.resolve(Qe&&Qe.unlock&&Qe.unlock()).catch(()=>{})}catch{return Promise.resolve()}}const py='button:not([disabled]), a[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',xu="button, a[href], input, select, label.sw, [role=button]",my=i=>i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden",Io=i=>i?oy(py,i).filter(my):[];function gy(i,{getScope:e,onBack:t,hudActive:n,onHudPause:s}){let r=null;i.addEventListener("click",d=>{const m=d.target.closest(xu);if(!m)return;if(m.disabled||m.getAttribute("aria-disabled")==="true"){Gt("error");return}const v=m.dataset.snd||(m.closest("[data-snd]")||{}).dataset?.snd;if(v!=="none"){if(v==="toggle"){Gt("toggle",m.getAttribute("aria-checked")==="true");return}if(v==="back"){Gt("back");return}if(v==="confirm"||m.classList.contains("btn-primary")){Gt("confirm");return}if(m.classList.contains("nav-item")||m.classList.contains("tab")){Gt("tab");return}Gt("click")}},!1),i.addEventListener("pointerover",d=>{if(d.pointerType&&d.pointerType!=="mouse")return;const m=d.target.closest&&d.target.closest(xu);if(!m||m===r){m||(r=null);return}r=m,!m.disabled&&m.getAttribute("aria-disabled")!=="true"&&Gt("hover")}),i.addEventListener("focusin",d=>{d.target.matches&&d.target.matches(":focus-visible")&&Gt("hover")});let a=0;i.addEventListener("input",d=>{if(d.target.type==="range"){const m=performance.now();m-a>70&&(a=m,Gt("hover"))}});function o(d){const m=e(),v=Io(m);if(!v.length)return;const g=document.activeElement&&m.contains(document.activeElement)?document.activeElement:null;if(!g){v[0].focus({preventScroll:!1});return}const p=g.getBoundingClientRect(),M=p.left+p.width/2,y=p.top+p.height/2;let _=null,S=1/0;for(const T of v){if(T===g)continue;const E=T.getBoundingClientRect(),P=E.left+E.width/2-M,x=E.top+E.height/2-y;let b,L;if(d==="right"?(b=P,L=Math.abs(x)):d==="left"?(b=-P,L=Math.abs(x)):d==="down"?(b=x,L=Math.abs(P)):(b=-x,L=Math.abs(P)),b<=1)continue;const I=b+L*2.2;I<S&&(S=I,_=T)}_&&(_.focus(),_.scrollIntoView({block:"nearest",inline:"nearest"}))}window.addEventListener("keydown",d=>{if(d.altKey||d.ctrlKey||d.metaKey)return;if(n()){(d.code==="Escape"||d.code==="KeyP")&&(d.preventDefault(),d.stopPropagation(),d.repeat||s());return}const m=e();if(!m||(d.stopPropagation(),d.defaultPrevented))return;if(d.key==="Tab"&&!m.classList.contains("shell")){const y=Io(m);if(!y.length)return;const _=y[0],S=y[y.length-1],T=document.activeElement;m.contains(T)?d.shiftKey&&T===_?(d.preventDefault(),S.focus()):!d.shiftKey&&T===S&&(d.preventDefault(),_.focus()):(d.preventDefault(),_.focus());return}const v=document.activeElement,g=v&&v.type==="range",p=v&&v.tagName==="INPUT"&&!["range","color","checkbox"].includes(v.type),M={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};if(M[d.key]){if(g&&(d.key==="ArrowLeft"||d.key==="ArrowRight")||p)return;d.preventDefault(),o(M[d.key])}else(d.key==="Escape"||d.key==="Backspace"&&!p)&&(d.preventDefault(),t())},!0);const c={};let l=0;const u=230;function h(){l=requestAnimationFrame(h);const d=navigator.getGamepads?navigator.getGamepads():[],m=performance.now();for(const v of d){if(!v)continue;const g=v.axes[0]||0,p=v.axes[1]||0,M={up:v.buttons[12]?.pressed||p<-.6,down:v.buttons[13]?.pressed||p>.6,left:v.buttons[14]?.pressed||g<-.6,right:v.buttons[15]?.pressed||g>.6,a:v.buttons[0]?.pressed,b:v.buttons[1]?.pressed,start:v.buttons[9]?.pressed};for(const y of Object.keys(M)){if(!M[y]){c[y]=0;continue}if(c[y]&&m-c[y]<u)continue;const _=!c[y];if(c[y]=m,n()){y==="start"&&_&&s();continue}if(y==="a"){if(_){const S=document.activeElement;S&&S.click&&S.click()}}else if(y==="b")_&&t();else if(y!=="start"&&e()){const T=document.activeElement;T&&T.type==="range"&&(y==="left"||y==="right")?(T.value=+T.value+(y==="right"?1:-1)*(T.step||.05)*2,T.dispatchEvent(new Event("input",{bubbles:!0}))):o(y)}}}}const f=()=>{l||(l=requestAnimationFrame(h))};return window.addEventListener("gamepadconnected",f),navigator.getGamepads&&Array.from(navigator.getGamepads()).some(Boolean)&&f(),{focusFirst(d){const m=Io(d),v=d&&d.querySelector("[data-autofocus]");(v&&!v.disabled?v:m[0])?.focus({preventScroll:!0})}}}function vy(i){const e=Ys("#boot");if(!e)return{setLoading(){},hide(){},el:null};const t=Ys("#boot-fill"),n=Ys("#boot-label"),s=Ys("#boot-start"),r=Ys(".boot-bar"),a=hl()?200:1700,o=performance.now();let c=0,l=!1,u=!1,h=!1;function f(){if(h)return;h=!0,e.classList.add("ready"),s.hidden=!1,r.setAttribute("aria-valuenow","100"),n.textContent="Ready";const g=async M=>{u||M.type==="keydown"&&(M.key==="Tab"||M.key==="Shift"||M.key==="Meta"||M.key==="Alt"||M.key==="Control")||(u=!0,window.removeEventListener("keydown",g,!0),e.removeEventListener("pointerdown",g,!0),e.classList.add("go"),s.blur(),await i())};window.addEventListener("keydown",g,!0),e.addEventListener("pointerdown",g,!0),window.addEventListener("gamepadconnected",()=>{});const p=()=>{if(u)return;const M=navigator.getGamepads?navigator.getGamepads():[];for(const y of M)if(y&&y.buttons.some(_=>_.pressed)){g({type:"pad"});return}requestAnimationFrame(p)};requestAnimationFrame(p),s.focus({preventScroll:!0})}function d(){if(c>=1&&l===!1){const g=Math.max(0,a-(performance.now()-o));l=!0,setTimeout(f,g)}}let m=!1;function v(g){if(m)return;m=!0,h=!0,e.classList.remove("ready"),s.hidden=!0,t.style.transform="scaleX(1)",t.style.background="#e5332d",n.textContent=g,n.style.cssText="color:#ff8a84;text-transform:none;letter-spacing:.02em;max-width:min(86vw,560px);text-align:center;font-size:1.05rem";const p=document.createElement("button");p.type="button",p.className="boot-start",p.textContent="Reload",p.style.animation="none",p.addEventListener("click",()=>location.reload()),n.after(p),p.focus({preventScroll:!0})}return{el:e,setLoading(g,p){if(!m){if(p&&/^failed/i.test(p)){v(p);return}c=Math.max(c,Math.min(1,g)),t.style.transform=`scaleX(${c})`,r.setAttribute("aria-valuenow",String(Math.round(c*100))),p&&!h&&(n.textContent=p),d()}},hide(){e.classList.add("out"),setTimeout(()=>{e.hidden=!0},600)},show(){e.hidden=!1,e.classList.remove("out")}}}const oa=22,ko={green:["GREEN FLAG","f-green"],yellow:["CAUTION","f-yellow"],white:["WHITE FLAG · LAST LAP","f-white"],checker:["CHECKERED FLAG","f-check"]};function _y(i){const e=A("div",{class:"hud","aria-hidden":"false"}),t={},n=(D,H="")=>A("span",{class:D},H);t.posBadge=A("div",{class:"h-pos"},t.posN=n("h-pos-n","P1"),t.posOf=n("h-pos-of","/ 1")),t.tower=A("ol",{class:"h-tower"});const s=A("div",{class:"h-tl"},t.posBadge,t.tower),r=A("div",{class:"h-btns"},A("button",{type:"button",class:"rbtn","aria-label":"Pause",dataset:{snd:"none"},onClick:()=>i.pause()},on("pause")),A("button",{type:"button",class:"rbtn","aria-label":"Change camera",dataset:{snd:"none"},onClick:()=>i.cycleCamera()},on("camera"))),a=(D,H,N)=>A("div",{class:`h-t ${N||""}`},n("h-t-l",H),t[D]=n("h-t-v","--:--.---"));t.lap=n("h-lap-v","LAP 1/3");const o=A("div",{class:"h-tr"},t.lap,a("cur","CURRENT","cur"),a("last","LAST"),a("best","BEST","best"));o.append(r),t.flag=A("div",{class:"h-flag",hidden:!0}),t.msg=A("div",{class:"h-msg",hidden:!0});const c=A("div",{class:"h-tc"},t.flag,t.msg);t.leds=Array.from({length:oa},(D,H)=>A("i",{class:`led ${H<12?"g":H<18?"y":"r"}`})),t.speed=n("h-spd","0"),t.unit=n("h-unit","MPH"),t.gear=n("h-gear","N"),t.rpm=n("h-rpm","0 RPM");const l=A("div",{class:"h-dash"},A("div",{class:"leds"},t.leds),A("div",{class:"h-dash-r"},A("div",{class:"h-gearbox"},n("h-gl","GEAR"),t.gear),A("div",{class:"h-spdbox"},t.speed,t.unit),A("div",{class:"h-rpmbox"},t.rpm)));t.thr=A("i",{class:"ped-f"}),t.brk=A("i",{class:"ped-f"});const u=A("div",{class:"h-ped"},A("div",{class:"ped thr"},t.thr,n("ped-l","T")),A("div",{class:"ped brk"},t.brk,n("ped-l","B")));t.gapA=n("gap-v","--"),t.gapB=n("gap-v","--"),t.draft=A("div",{class:"h-draft"},"DRAFTING");const h=A("div",{class:"h-gaps"},A("div",{class:"gap ahead"},n("gap-l","AHEAD"),t.gapA),A("div",{class:"gap behind"},n("gap-l","BEHIND"),t.gapB),t.draft);t.map=A("canvas",{class:"h-map",width:180,height:180,"aria-label":"Track map"}),t.dmg={};const f="http://www.w3.org/2000/svg",d=(D,H)=>{const N=document.createElementNS(f,D);for(const z of Object.keys(H))N.setAttribute(z,H[z]);return N},m=A("div",{class:"h-dmg","aria-label":"Car damage"},(()=>{const D=d("svg",{viewBox:"0 0 44 84"});D.append(d("path",{class:"dm-body",d:"M12 4h20a7 7 0 0 1 7 7v62a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7z"})),D.append(d("rect",{class:"dm-cab",x:13,y:28,width:18,height:26,rx:4}));const H=(N,z,q,V,K)=>{const ie=d("rect",{class:"dm ok",x:z,y:q,width:V,height:K,rx:3});t.dmg[N]=ie,D.append(ie)};return H("front",11,8,22,13),H("rear",11,63,22,13),H("left",7,24,6,36),H("right",31,24,6,36),D})()),v=A("div",{class:"h-bl"},t.map,m);e.append(s,c,o,v,l,u,h);const g={},p=(D,H,N)=>{g[D]!==N&&(g[D]=N,H.textContent=N)};let M=-1,y=null,_=null,S=null,T="",E="",P="",x=0;const b=t.map.getContext("2d");function L(D){let H=1e9,N=-1e9,z=1e9,q=-1e9;for(const[ee,ae]of D)H=Math.min(H,ee),N=Math.max(N,ee),z=Math.min(z,ae),q=Math.max(q,ae);const V=t.map.width,K=16,ie=Math.min((V-K*2)/(N-H||1),(V-K*2)/(q-z||1)),le=(V-(N-H)*ie)/2-H*ie,pe=(V-(q-z)*ie)/2-z*ie;S={s:ie,ox:le,oy:pe},_=document.createElement("canvas"),_.width=_.height=V;const ge=_.getContext("2d");ge.lineJoin="round",ge.lineCap="round",ge.beginPath(),D.forEach(([ee,ae],_e)=>_e?ge.lineTo(ee*ie+le,ae*ie+pe):ge.moveTo(ee*ie+le,ae*ie+pe)),ge.closePath(),ge.strokeStyle="rgba(0,0,0,.55)",ge.lineWidth=11,ge.stroke(),ge.strokeStyle="#8b939d",ge.lineWidth=6,ge.stroke();const[Ve,ke]=D[0];ge.fillStyle="#f4f6f8",ge.fillRect(Ve*ie+le-5,ke*ie+pe-1.5,10,3)}function I(D){if(!D)return;const H=i.game.settings.units==="kph";p("spd",t.speed,String(Math.round(H?D.speedKph:D.speedMph))),p("unit",t.unit,H?"KM/H":"MPH"),p("gear",t.gear,D.gear===0?"N":D.gear<0?"R":String(D.gear)),p("rpm",t.rpm,`${Math.round(D.rpm/10)*10} RPM`);const N=Math.round(Math.max(0,Math.min(1,D.rpm/(D.rpmMax||9e3)))*oa);if(N!==M){for(let V=0;V<oa;V++)t.leds[V].classList.toggle("on",V<N);M=N,e.classList.toggle("redline",N>=oa-1)}if(t.thr.style.transform=`scaleY(${D.throttle||0})`,t.brk.style.transform=`scaleY(${D.brake||0})`,p("posn",t.posN,`P${D.pos}`),p("posof",t.posOf,`/ ${D.field}`),p("lap",t.lap,D.mode==="hotlap"?`LAP ${D.lap}`:`LAP ${Math.min(D.lap,D.laps)}/${D.laps}`),p("cur",t.cur,Ti(D.curLap)),p("last",t.last,Ti(D.lastLap)),p("best",t.best,Ti(D.bestLap)),e.classList.toggle("hot",D.mode==="hotlap"),p("gapa",t.gapA,D.gapAhead==null||D.pos===1||D.mode==="hotlap"?"--":yu(-Math.abs(D.gapAhead))),p("gapb",t.gapB,D.gapBehind==null||D.mode==="hotlap"||D.field>1&&D.pos>=D.field?"--":yu(Math.abs(D.gapBehind))),g.dr!==!!D.drafting&&(g.dr=!!D.drafting,t.draft.classList.toggle("on",!!D.drafting)),D.damage)for(const V of["front","rear","left","right"]){const K=Math.round((D.damage[V]||0)*10);g["d"+V]!==K&&(g["d"+V]=K,t.dmg[V].setAttribute("class",`dm ${K>=7?"bad":K>=3?"mid":"ok"}`))}const z=D.flag||"";z!==E&&(E=z,z&&ko[z]?(t.flag.hidden=!1,t.flag.className=`h-flag ${ko[z][1]}`,t.flag.textContent=ko[z][0]):t.flag.hidden=!0);const q=D.message||"";if(q!==P&&(P=q,q?(t.msg.hidden=!1,t.msg.textContent=q,t.msg.classList.remove("pop"),t.msg.offsetWidth,t.msg.classList.add("pop"),clearTimeout(x),x=setTimeout(()=>{t.msg.hidden=!0},3200)):t.msg.hidden=!0),D.standings){const V=D.standings.map(K=>K.pos+K.name+(K.gap||"")).join("|");V!==T&&(T=V,t.tower.replaceChildren(...D.standings.slice(0,7).map(K=>A("li",{class:`tw${K.me?" me":""}`},A("span",{class:"tw-p"},String(K.pos)),A("i",{class:"tw-c",style:{background:K.color||"#888"}}),A("span",{class:"tw-n"},K.name),A("span",{class:"tw-g"},K.gap||"")))))}if(D.minimap&&D.minimap.pts&&D.minimap.pts.length>2){D.minimap.pts!==y&&(y=D.minimap.pts,L(y)),b.clearRect(0,0,t.map.width,t.map.height),b.drawImage(_,0,0);for(const V of D.minimap.cars||[])b.beginPath(),b.arc(V.x*S.s+S.ox,V.z*S.s+S.oy,V.me?6.5:4,0,6.2832),b.fillStyle=V.me?"#3dba55":"#e8eaed",b.fill(),V.me&&(b.lineWidth=2,b.strokeStyle="#fff",b.stroke())}}return{el:e,update:I,ref:t}}function yy(i){const e=A("div",{class:"touch",hidden:!0}),t={steer:0,throttle:0,brake:0};let n=!1,s=!1;const r=()=>{const m=i.game.input;m&&m.setTouch&&m.setTouch({steer:t.steer?-t.steer:0,throttle:t.throttle,brake:t.brake})},a=A("i",{class:"st-knob"}),o=A("div",{class:"st-strip",role:"slider","aria-label":"Steering","aria-valuemin":-1,"aria-valuemax":1,"aria-valuenow":0},A("span",{class:"st-l"},"‹"),a,A("span",{class:"st-r"},"›"));let c=null;const l=m=>{const v=o.getBoundingClientRect(),g=Math.max(-1,Math.min(1,((m.clientX-v.left)/v.width-.5)*2*1.08));t.steer=Math.abs(g)<.04?0:g,a.style.transform=`translateX(${t.steer*(v.width/2-34)}px)`,r()};o.addEventListener("pointerdown",m=>{m.preventDefault(),c=m.pointerId;try{o.setPointerCapture(c)}catch{}o.classList.add("down"),l(m)}),o.addEventListener("pointermove",m=>{m.pointerId===c&&l(m)});const u=m=>{m.pointerId===c&&(c=null,t.steer=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())};o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u);const h=(m,v,g)=>{const p=A("div",{class:`pd ${m}`,role:"button","aria-label":v,tabindex:-1},A("span",null,v));let M=null;p.addEventListener("pointerdown",_=>{_.preventDefault(),M=_.pointerId;try{p.setPointerCapture(M)}catch{}p.classList.add("down"),t[g]=1,r(),navigator.vibrate&&navigator.vibrate(6)});const y=_=>{_.pointerId===M&&(M=null,p.classList.remove("down"),t[g]=0,r())};return p.addEventListener("pointerup",y),p.addEventListener("pointercancel",y),p};e.append(A("div",{class:"tc-l"},o),A("div",{class:"tc-r"},h("brake","BRAKE","brake"),h("gas","GAS","throttle"))),e.addEventListener("contextmenu",m=>m.preventDefault()),window.addEventListener("pointerdown",m=>{m.pointerType==="touch"&&!s&&(s=!0,d.refresh())},!0);const f=()=>{const m=i.game.settings.touch;return m===!0?!0:m===!1?!1:s||matchMedia("(pointer: coarse)").matches},d={el:e,refresh(){const m=f();n=m&&e.dataset.active==="1",e.hidden=!n,document.documentElement.classList.toggle("touch-on",m);const v=i.game.input;v&&(v.touchActive=m),n||(t.steer=t.throttle=t.brake=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())},tick(){n&&(t.steer||t.throttle||t.brake)&&r()},setActive(m){e.dataset.active=m?"1":"0",d.refresh()},wanted:f};return d}function st(i,{kind:e="ghost",onClick:t,disabled:n=!1,title:s,icon:r,snd:a,cls:o="",type:c="button",aria:l}={}){const u=A("button",{class:`btn btn-${e} ${o}`.trim(),type:c,title:n?s||"Not available yet":s,"aria-disabled":n?"true":null,dataset:a?{snd:a}:null,...l||{}},r?on(r):null,A("span",{class:"btn-label"},i));return n?u.disabled=!0:t&&u.addEventListener("click",t),u}function At(i,e,t,{label:n,cls:s=""}={}){const r=A("div",{class:`seg ${s}`.trim(),role:"radiogroup","aria-label":n||null}),a=o=>{r.replaceChildren(...i.map(c=>{const l=c.value===o;return A("button",{type:"button",class:`seg-opt${l?" on":""}${c.locked?" locked":""}`,role:"radio","aria-checked":l?"true":"false",dataset:{value:String(c.value)},title:c.locked?c.cost?`Unlock for ${c.cost} credits`:"Locked":null,onClick:()=>{if(c.locked){t(c.value,c);return}a(c.value),t(c.value,c)}},c.locked?on("lock","ico ico-s"):null,A("span",{class:"seg-l"},c.label),c.sub?A("span",{class:"seg-s"},c.sub):c.locked&&c.cost?A("span",{class:"seg-s"},String(c.cost)):null,c.default?A("span",{class:"seg-d"},"DEFAULT"):null)}))};return a(e),r.set=a,r}function ca(i,e,t,{label:n,allowCustom:s=!0}={}){const r=A("div",{class:"swatches",role:"radiogroup","aria-label":n||null}),a=o=>{if(r.replaceChildren(...i.map(c=>A("button",{type:"button",class:`sw${c.toLowerCase()===String(o).toLowerCase()?" on":""}`,style:{"--c":c},title:c,role:"radio","aria-checked":c.toLowerCase()===String(o).toLowerCase()?"true":"false","aria-label":`Colour ${c}`,onClick:()=>{a(c),t(c)}}))),s){const c=A("input",{type:"color",class:"sw-custom",value:/^#[0-9a-f]{6}$/i.test(o)?o:"#808080","aria-label":"Custom colour",title:"Custom colour"});c.addEventListener("input",()=>t(c.value)),c.addEventListener("change",()=>a(c.value)),r.append(A("label",{class:"sw sw-plus",title:"Custom colour"},c,A("span",null,"+")))}};return a(e),r.set=a,r}function xy(i,e,{min:t=0,max:n=1,step:s=.01,label:r,fmt:a=o=>Math.round(o*100)+"%"}={}){const o=A("output",{class:"sl-out"},a(i)),c=A("input",{type:"range",min:t,max:n,step:s,value:i,class:"sl","aria-label":r||"Value"}),l=()=>c.style.setProperty("--p",(c.value-t)/(n-t)*100+"%");return c.addEventListener("input",()=>{l(),o.textContent=a(+c.value),e(+c.value)}),l(),A("div",{class:"slider"},c,o)}function Od(i,e,{label:t}={}){const n=A("button",{type:"button",class:`tg${i?" on":""}`,role:"switch","aria-checked":i?"true":"false","aria-label":t||"Toggle",dataset:{snd:"toggle"}},A("i"));return n.addEventListener("click",()=>{const s=n.getAttribute("aria-checked")!=="true";n.setAttribute("aria-checked",String(s)),n.classList.toggle("on",s),e(s)}),n}function Pt(i,e,t){return A("div",{class:"orow"},A("div",{class:"orow-t"},A("div",{class:"orow-n"},i),e?A("div",{class:"orow-s"},e):null),A("div",{class:"orow-c"},t))}function Kt(i,e=""){return A("span",{class:`chip ${e}`.trim()},i)}function My(i,e,t){return A("div",{class:"stat"},A("div",{class:"stat-v"},e),A("div",{class:"stat-l"},i),null)}function Bd(i,e=""){return A("div",{class:`pbar ${e}`.trim()},A("i",{style:{width:cy(i,0,1)*100+"%"}}))}function js({title:i,text:e,ic:t,kind:n="",onClick:s,disabled:r=!1,hint:a,badge:o,big:c}){const l=A("button",{type:"button",class:`tile ${n}${c?" tile-big":""}`,disabled:r,title:r?a:null,"aria-disabled":r?"true":null,dataset:n.includes("primary")?{snd:"confirm"}:null,onClick:s},A("span",{class:"tile-ic"},on(t)),A("span",{class:"tile-b"},A("span",{class:"tile-t"},i),A("span",{class:"tile-x"},e)),o?Kt(o,r?"":"gold"):null,r?null:A("span",{class:"tile-go"},on("chevron")));return r&&l.setAttribute("disabled",""),l}function by(i){const e=i.game.career,t=e.state,n=e.nextRace(),s=t.races.length===0,r=e.offers().length,a=t.races[t.races.length-1];return A("div",{class:"page page-home"},A("header",{class:"hero"},A("h1",{class:"big"},s?"Build your car.":"Back on track.",A("br"),A("span",null,s?"Earn your sponsors.":`${n.series.name}, race ${Math.min(n.index+1,n.of)} of ${n.of}`)),A("p",{class:"lead"},s?"You start with a blank car and a small local race. Finish well and sponsors will put their names on your hood.":`Last result: P${a.pos} of ${a.field}. ${r?`${r} sponsor ${r===1?"offer is":"offers are"} waiting in the Garage.`:"Keep your finishes consistent to bring in bigger sponsors."}`)),A("div",{class:"stats"},[["Reputation",Yt(t.rep)],["Credits",Yt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Ti(t.bestLap):"—"]].map(([c,l])=>A("div",{class:"stat"},A("div",{class:"stat-v"},l),A("div",{class:"stat-l"},c)))),A("div",{class:"tiles"},js({big:!0,kind:"primary",title:s?"Start career":"Continue career",text:`${n.series.name} · ${n.laps} laps · ${n.field} cars`,ic:"trophy",onClick:()=>i.go("raceSetup",{mode:"career"})}),js({title:"Quick race",text:"Pick the laps, rivals and weather",ic:"flag",onClick:()=>i.go("raceSetup",{mode:"quick"})}),js({title:"Hot lap",text:"Alone on track. Chase your best lap",ic:"stopwatch",onClick:()=>i.go("raceSetup",{mode:"hotlap"})}),js({title:"Garage",text:"Colours, number and sponsors",ic:"car",badge:r?`${r} ${r===1?"offer":"offers"}`:null,onClick:()=>i.go("garage")}),js({title:"Online",text:"Host a room, share the code, race friends",ic:"globe",onClick:()=>i.go("online")})),A("p",{class:"page-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."))}const ul={1:"Local",2:"Regional",3:"National",4:"Title"},vr=(i,e=120,t="sp-logo")=>{const n=Ds(i);return A("img",{class:t,src:Md(i,e*2,Math.round(e*.4)*2),alt:n?n.name:i,width:e,height:Math.round(e*.4),draggable:"false"})};function Mu(i){const e=i.game.career.nextTierGoal();if(!e)return A("div",{class:"note"},on("star"),A("span",null,"Every sponsor tier is unlocked. Keep winning to keep the contracts paying."));const t=Math.round(e.avgNow*100),n=Math.round(e.avgNeeded*100),s=[];return e.racesNeeded>0&&s.push(`Finish ${e.racesNeeded} more ${e.racesNeeded===1?"race":"races"}`),s.push(`A finish score of ${n}% or better, averaged over your last 3 races (you are at ${t}%)`),e.seriesNeeded&&s.push(`Reach the ${e.seriesNeeded} series`),A("div",{class:"goal"},A("div",{class:"goal-h"},Kt(`${ul[e.tier]} sponsors`,"gold"),A("span",null,"Next tier needs")),A("ul",{class:"goal-l"},s.map(r=>A("li",null,r))),Bd(Math.min(1,e.avgNow/e.avgNeeded),"gold"),A("div",{class:"goal-n"},"Finish score is 100% for a win and 0% for last place."))}function zd(i,e){const t=i.game.career,n=t.offers(),s=A("section",{class:"card"},A("h3",{class:"card-t"},"Sponsor offers"));return n.length?(s.append(A("div",{class:"offers"},n.map(r=>A("div",{class:"offer"},vr(r.id,132),A("div",{class:"offer-t"},A("div",{class:"offer-n"},r.name),A("div",{class:"offer-s"},`${ul[r.tier]} sponsor · pays about ${Yt(r.payout)} credits a race`),A("div",{class:"offer-f"},"Best on: "+r.slots.map(a=>ma[a]).join(", "))),A("div",{class:"offer-b"},st("Accept",{kind:"primary",icon:"handshake",onClick:()=>{t.acceptSponsor(r.id)&&(i.ui.toast(`${r.name} signed. Put them on your car in the Garage.`,"good"),e())}}),st("Decline",{kind:"ghost",snd:"back",onClick:()=>{t.declineSponsor(r.id),e()}})))))),s.append(Mu(i))):s.append(A("p",{class:"muted"},t.state.owned.length?"No new offers right now.":"No offers yet. Finish a few races in the top half of the field and sponsors will call."),Mu(i)),s}function Sy(i){const e=i.game.career,t=e.state.owned.map(Ds).filter(Boolean),n=new Set(Object.values(e.state.livery.slots).filter(Boolean));return A("section",{class:"card"},A("h3",{class:"card-t"},"Sponsor contracts"),t.length?A("div",{class:"contracts"},t.map(s=>A("div",{class:"contract"},vr(s.id,96),A("div",{class:"contract-t"},A("div",{class:"offer-n"},s.name),A("div",{class:"offer-s"},`${ul[s.tier]} · ~${Yt(s.payout)} credits a race`)),n.has(s.id)?Kt("On your car","good"):Kt("Not on car","warn")))):A("p",{class:"muted"},"No contracts yet."))}function Ty(i){const e=i.game.career,t=e.state,n=A("div",{class:"page page-career"}),s=()=>{n.replaceChildren(A("header",{class:"page-h"},A("h1",{class:"big"},"Career"),A("p",{class:"lead"},"Climb the series. Consistent finishes bring sponsors, and sponsors pay for every race.")),A("div",{class:"stats"},[["Reputation",Yt(t.rep)],["Credits",Yt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Ti(t.bestLap):"—"]].map(([r,a])=>My(r,a))),A("section",{class:"card"},A("h3",{class:"card-t"},"Series"),A("div",{class:"series"},xn.map((r,a)=>{const o=!e.seriesOpen(a),c=a===t.seriesIndex,l=c?t.seasonRace:0;return A("div",{class:`ser${c?" cur":""}${o?" locked":""}`},A("div",{class:"ser-h"},A("div",{class:"ser-n"},r.name),o?Kt(`Needs ${Yt(r.unlockRep)} rep`,""):c?Kt("Current","good"):null),A("div",{class:"ser-m"},`${r.races} races · ${r.field} cars · ${r.ai[0].toUpperCase()+r.ai.slice(1)} rivals`),c?A("div",{class:"ser-p"},Bd(l/r.races),A("span",null,`${Math.min(l,r.races)} of ${r.races} done`)):null,c?A("div",{class:"ser-m"},`Next: ${bt[e.trackFor(r.id,t.seasonRace)].name}`):null,o?A("div",{class:"ser-l"},on("lock"),A("span",null,`${Yt(r.unlockRep-t.rep)} more reputation to unlock`)):c?st("Race next event",{kind:"primary",icon:"play",onClick:()=>i.go("raceSetup",{mode:"career"})}):st("Switch to this series",{onClick:()=>{e.selectSeries(a)&&(i.ui.toast(`Switched to ${r.name}`,"info"),s())}}))}))),A("div",{class:"cols"},A("div",null,zd(i,s),Sy(i)),A("section",{class:"card"},A("h3",{class:"card-t"},"Recent results"),t.races.length?A("table",{class:"tbl"},A("thead",null,A("tr",null,["Series","Finish","Field"].map(r=>A("th",null,r)))),A("tbody",null,t.races.slice(-10).reverse().map(r=>{const a=xn.find(o=>o.id===r.series);return A("tr",null,A("td",null,a?a.name:r.series),A("td",{class:r.pos<=3?"good":""},Ud(r.pos)),A("td",null,`${r.field} cars`))}))):A("p",{class:"muted"},"No races yet. Your first result will appear here."))))};return s(),n}function ar(i,{title:e,body:t,confirmLabel:n="OK",cancelLabel:s="Cancel",danger:r=!1,disabled:a=!1,onConfirm:o}){const c=i.ui.overlayEl,l=()=>{const f=!!c.querySelector(".ov");c.hidden=!f&&i.ui._modals.length===0,c.classList.toggle("modal-only",!f&&i.ui._modals.length>0)},u=()=>{h.remove(),i.ui._modals=i.ui._modals.filter(f=>f!==h),l(),i.ui.focusScope()},h=A("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":e},A("div",{class:"modal-card"},A("h3",{class:"modal-t"},e),A("p",{class:"modal-b"},t),A("div",{class:"modal-a"},st(s,{kind:"ghost",snd:"back",onClick:u}),st(n,{kind:r?"danger":"primary",disabled:a,title:a?"You do not have enough credits yet":null,onClick:()=>{u(),o&&o()}}))));return h.dataset.close="1",h.close=u,h.addEventListener("pointerdown",f=>{f.target===h&&u()}),c.append(h),i.ui._modals.push(h),l(),i.ui.focusScope(h),h}const bu=["#d9dde2","#f4f6f8","#1d1f24","#c8102e","#e8590c","#f2b134","#3dba55","#0d8a6a","#1f6fe0","#2a3f8f","#7a3fc4","#e83e8c"],wy=["#1d1f24","#f4f6f8","#c0c6cc","#f2b134","#c8102e","#3dba55","#1f6fe0"],Ey=[["none","Plain"],["stripe","Stripe"],["split","Split"],["chevron","Chevron"],["fade","Fade"]],Ay=[["gloss","Gloss"],["matte","Matte"],["metallic","Metallic"]],Ry=[["block","Block"],["italic","Italic"],["outline","Outline"]];function Cy(i){const e=i.game,t=e.career;let n=i.params?.tab||"paint";const s=p=>e.garage.setLivery(p),r=A("div",{class:"page page-garage"}),a=A("div",{class:"garage-stage","aria-label":"Drag to rotate the car. Scroll or pinch to zoom.",role:"img"},A("div",{class:"stage-hint"},on("car"),A("span",null,"Drag to rotate. Scroll or pinch to zoom."))),o=new Map;let c=0;a.addEventListener("pointerdown",p=>{try{a.setPointerCapture(p.pointerId)}catch{}if(o.set(p.pointerId,[p.clientX,p.clientY]),o.size===2){const[M,y]=[...o.values()];c=Math.hypot(M[0]-y[0],M[1]-y[1])}}),a.addEventListener("pointermove",p=>{const M=o.get(p.pointerId);if(M){if(o.size===2){o.set(p.pointerId,[p.clientX,p.clientY]);const[y,_]=[...o.values()],S=Math.hypot(y[0]-_[0],y[1]-_[1]);e.garage.zoom((c-S)*.01),c=S;return}e.garage.orbit(p.clientX-M[0],p.clientY-M[1]),o.set(p.pointerId,[p.clientX,p.clientY])}});const l=p=>{o.delete(p.pointerId),c=0};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("wheel",p=>{p.preventDefault(),e.garage.zoom(Math.sign(p.deltaY)*.6)},{passive:!1});const u=A("aside",{class:"garage-panel"}),h=(p,M,y,_)=>{const S=Hi[p][M],T=t.state.credits;ar(i,{title:`Unlock ${y}?`,body:`${y} costs ${Yt(S)} credits. You have ${Yt(T)}.`,confirmLabel:T>=S?`Unlock for ${Yt(S)}`:"Not enough credits",disabled:T<S,onConfirm:()=>{t.buy(p,M)&&(i.ui.toast(`${y} unlocked`,"good"),_(),g())}})},f=(p,M,y,_)=>At(M.map(([S,T])=>{const E=t.canUse(p,S);return{value:S,label:T,locked:!E,cost:Hi[p][S]}}),y,(S,T)=>{T.locked?h(p,S,M.find(E=>E[0]===S)[1],()=>_(S)):_(S)},{label:p}),d=[["paint","Paint"],["number","Number"],["sponsors","Sponsors"]],m=(p,...M)=>A("div",{class:"g-sec"},A("div",{class:"g-t"},p),...M);function v(){const p=t.state.livery;if(n==="paint")return[t.state.unlockAll?m("Car",At(cl.map(_=>({value:_,label:rn[_].year+"",sub:rn[_].name.replace(/^'\d+ /,"")})),e.carIdForSeries(t.series.id),_=>{e.garage.setCar(_),g()},{label:"Car"})):null,m("Body colour",ca(bu,p.paint,_=>s({paint:_}),{label:"Body colour"})),m("Accent",ca(bu,p.accent,_=>s({accent:_}),{label:"Accent colour"})),m("Trim and wheels",ca(wy,p.trim,_=>s({trim:_}),{label:"Trim colour"})),m("Pattern",f("pattern",Ey,p.pattern,_=>s({pattern:_}))),m("Finish",f("finish",Ay,p.finish,_=>s({finish:_})))];if(n==="number"){const _=A("input",{class:"num-in",type:"text",inputmode:"numeric",maxlength:3,value:p.number,"aria-label":"Car number",pattern:"[0-9]*"});return _.addEventListener("input",()=>{_.value=_.value.replace(/\D/g,"").slice(0,3),_.value&&s({number:_.value})}),_.addEventListener("blur",()=>{_.value||(_.value=p.number)}),[m("Car number",A("div",{class:"num-wrap"},_,A("span",{class:"muted"},"Up to three digits")),A("div",{class:"quick-nums"},["7","18","24","42","88","99"].map(S=>A("button",{type:"button",class:"qn",onClick:()=>{_.value=S,s({number:S})}},S)))),m("Style",At(Ry.map(([S,T])=>({value:S,label:T})),p.numberStyle,S=>s({numberStyle:S}),{label:"Number style"})),m("Number colour",ca(["#1d1f24","#f4f6f8","#f2b134","#c8102e","#1f6fe0","#3dba55"],p.numberColor,S=>s({numberColor:S}),{label:"Number colour"}))]}const M=t.state.owned.map(Ds).filter(Boolean),y=[];return M.length?y.push(...Ac.map(_=>{const S=p.slots[_];return A("div",{class:"slot"},A("div",{class:"slot-h"},A("div",{class:"slot-n"},ma[_]),S?vr(S,84,"sp-logo sm"):A("span",{class:"muted"},"Empty")),A("div",{class:"slot-o"},M.map(T=>A("button",{type:"button",class:`slot-pick${S===T.id?" on":""}`,title:`${T.name}${T.slots.includes(_)?" (pays full rate here)":" (pays 60% here)"}`,"aria-pressed":S===T.id?"true":"false","aria-label":`${T.name} on ${ma[_]}`,onClick:()=>{s({slots:{...t.state.livery.slots,[_]:T.id}}),g()}},vr(T.id,64,"sp-logo xs"))),S?A("button",{type:"button",class:"slot-clear","aria-label":`Clear ${ma[_]}`,dataset:{snd:"back"},onClick:()=>{s({slots:{...t.state.livery.slots,[_]:null}}),g()}},"Clear"):null))})):y.push(A("p",{class:"muted pad"},"You do not have any sponsors yet. Race well and offers will show up below.")),y.push(zd(i,g)),y}function g(){const p=u.querySelector(".g-body")?.scrollTop||0;u.replaceChildren(A("div",{class:"g-head"},A("h1",{class:"big sm"},"Garage"),A("div",{class:"g-credits",title:"Credits"},on("coin"),A("b",null,Yt(t.state.credits)))),A("div",{class:"tabs",role:"tablist"},d.map(([M,y])=>A("button",{type:"button",class:`tab-b${n===M?" on":""}`,role:"tab","aria-selected":n===M?"true":"false",onClick:()=>{n=M,g()}},y,M==="sponsors"&&t.offers().length?A("i",{class:"dot","aria-label":"New offers"}):null))),A("div",{class:"g-body",role:"tabpanel"},v()),A("div",{class:"g-foot"},st("Done",{kind:"primary",icon:"check",onClick:()=>i.go(i.params&&i.params.from||"menu")}))),u.querySelector(".g-body").scrollTop=p}return g(),r.append(a,u),r}const gi={laps:3,field:12,ai:"pro",weather:"clear",time:"day",ghost:!0,track:"americas"},$s=(i,e)=>i.map(([t,n,s])=>({value:t,label:n,sub:s,default:t===e})),Py=()=>gd.map(i=>({value:i,label:bt[i].short,sub:`${bt[i].miles} mi`}));function Ly(i){const e=i.params?.mode||"quick",t=i.game.career,n=t.nextRace(),s=i.game.world&&i.game.world.q&&i.game.world.q.maxCars||99,r=n.field>s;gi.field>s&&(gi.field=[32,24,16,12,8,4].find(m=>m<=s)||4),bt[gi.track]||(gi.track="americas");const a=e==="career"?{laps:n.laps,field:Math.min(n.field,s),ai:n.ai,series:n.series.id,track:n.track,weather:gi.weather,time:gi.time}:{...gi};e==="quick"&&!bt[a.track].laps.includes(a.laps)&&(a.laps=bt[a.track].laps[0]);const o=e==="career"?n.series.name:e==="hotlap"?"Hot lap":"Quick race",c=e==="career"?`Race ${Math.min(n.index+1,n.of)} of ${n.of}. The series sets the track, laps, rivals and field size. Your result counts for reputation and sponsors.`:e==="hotlap"?"Just you and the clock. No traffic, no damage penalties, and your best lap is saved for each track.":"A one-off race. Results here do not affect your career.",l=A("div",{class:"page page-setup"},A("header",{class:"page-h"},A("h1",{class:"big"},o),A("p",{class:"lead"},c))),u=A("section",{class:"card opts"});l.append(u);const h=(m,v)=>{a[m]=v,(e!=="career"||m==="weather"||m==="time")&&(gi[m]=v)},f=()=>{const m=bt[a.track],v=t.bestFor(a.track);return`${m.kind}, ${m.miles} miles, ${Math.round(m.maxBank*57.3)}° banking.${v?" Your best lap here: "+Ti(v)+".":""}`},d=()=>{u.replaceChildren(),e==="career"?(u.append(Pt("Track",f(),A("div",{class:"fixed"},Kt(bt[a.track].name,"good")))),u.append(Pt("Race",r?`Set by the series. Graphics quality limits the grid to ${s} cars; raise it in Settings for the full field.`:"Set by the series",A("div",{class:"fixed"},Kt(`${a.laps} laps`),Kt(`${a.field} cars`),Kt(`${a.ai[0].toUpperCase()+a.ai.slice(1)} rivals`))))):(u.append(Pt("Track",f(),At(Py(),a.track,m=>{h("track",m),e==="quick"&&h("laps",bt[m].laps[0]),d()},{label:"Track"}))),e==="quick"&&u.append(Pt("Laps","Fewer laps for a quick go",At($s(bt[a.track].laps.map(m=>[m,String(m)]),bt[a.track].laps[0]),a.laps,m=>h("laps",m),{label:"Laps"})),Pt("AI level","Legend is the toughest",At($s([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]],"pro"),a.ai,m=>h("ai",m),{label:"AI level"})),Pt("Cars in the race",s<32?`Including you. Up to ${s} at this graphics quality`:"Including you",At($s([[4,"4"],[8,"8"],[12,"12"],[16,"16"],[24,"24"],[32,"32"]].filter(([m])=>m<=s),12),a.field,m=>h("field",m),{label:"Cars"}))),e==="hotlap"&&u.append(Pt("Ghost car","Race against your best lap on this track",Od(a.ghost,m=>h("ghost",m),{label:"Ghost car"})))),t.state.unlockAll&&u.append(Pt("Car","Every car is unlocked. Your paint and sponsors carry over.",At(cl.map(m=>({value:m,label:rn[m].year+"",sub:rn[m].name.replace(/^'\d+ /,"")})),a.car||i.game.carIdForSeries(a.series||t.series.id),m=>{a.car=m,t.setCar(m)},{label:"Car"}))),u.append(Pt("Weather","Rain means less grip",At($s([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]],"clear"),a.weather,m=>h("weather",m),{label:"Weather"})),Pt("Time of day",null,At($s([["day","Day"],["sunset","Sunset"],["night","Night"]],"day"),a.time,m=>h("time",m),{label:"Time of day"})))};return d(),l.append(A("div",{class:"actions"},st(e==="hotlap"?"Start hot lap":"Start race",{kind:"primary",icon:"play",onClick:()=>i.launch(e==="hotlap"?"hotlap":"race",e==="hotlap"?{ghost:a.ghost,car:a.car,track:a.track,weather:a.weather,time:a.time}:{laps:a.laps,field:a.field,ai:a.ai,series:e==="career"?a.series:void 0,track:a.track,car:a.car,weather:a.weather,time:a.time})}),st("Back",{kind:"ghost",snd:"back",icon:"back",onClick:()=>i.go("menu")}))),l}function Vd(i){const e=i.game,t=e.settings;t.volumes=Object.assign({master:.8,music:.6,sfx:.8,engine:.9,ambient:.7},t.volumes||{});const n=()=>{e.saveSettings()},s=A("div",{class:"page page-settings"},A("header",{class:"page-h"},A("h1",{class:"big"},"Settings"),A("p",{class:"lead"},"Changes save automatically. Graphics changes made during a race apply from the next one."))),r=a=>a.map(([o,c,l])=>({value:o,label:c,sub:l}));return s.append(A("section",{class:"card opts"},A("h3",{class:"card-t"},"Display and driving"),Pt("Graphics quality","Low suits older phones. Ultra needs a recent GPU.",At(r([["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]]),t.quality,a=>{t.quality=a,n(),i.ui.applyQuality()},{label:"Graphics quality"})),Pt("Speed units",null,At(r([["mph","mph"],["kph","km/h"]]),t.units,a=>{t.units=a,n()},{label:"Units"})),Pt("Default camera","You can change it in a race with the camera button.",At(r([[0,"Chase"],[1,"Cockpit"],[2,"Broadcast"]]),t.camera,a=>{t.camera=a,n()},{label:"Camera"})),Pt("Driving assists","More help keeps the car steadier.",At(r([[0,"Off"],[1,"Medium"],[2,"Full"]]),t.assists,a=>{t.assists=a,n()},{label:"Assists"})),Pt("Touch controls","Auto shows them on touch screens only.",At(r([["auto","Auto"],[!0,"On"],[!1,"Off"]]),t.touch,a=>{t.touch=a,n(),i.ui.touch&&i.ui.touch.refresh()},{label:"Touch controls"})),document.fullscreenEnabled?Pt("Full screen",null,st("Toggle full screen",{icon:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>i.ui.toast("Full screen was blocked by the browser","warn"))}})):null),A("section",{class:"card opts"},A("h3",{class:"card-t"},"Sound"),[["master","Master"],["music","Music"],["sfx","Menu and effects"],["engine","Engines"],["ambient","Crowd and track"]].map(([a,o])=>Pt(o,null,xy(t.volumes[a],c=>{t.volumes[a]=c,uy({...t.volumes}),n()},{label:o})))),A("section",{class:"card opts"},A("h3",{class:"card-t"},"Progress"),Pt("Unlock everything","Every car, sponsor, series and paint option, from the start.",Od(e.career.state.unlockAll,a=>{e.career.setUnlockAll(a),e.refreshShowcase()},{label:"Unlock everything"})),Pt("Reset career","Deletes your results, sponsors, credits and car design on this device.",st("Reset career",{kind:"danger",onClick:()=>ar(i,{title:"Reset your career?",body:"This deletes your results, sponsors, credits and car design on this device. It cannot be undone.",confirmLabel:"Reset everything",danger:!0,onConfirm:()=>{e.career.reset(),e.garage.setLivery(JSON.parse(JSON.stringify(rr))),i.ui.toast("Career reset","info"),i.go("menu")}})})))),i.params?.overlay&&s.append(A("div",{class:"actions"},st("Back",{kind:"primary",snd:"back",icon:"back",onClick:()=>i.back()}))),s}function Iy(i){const e=i.params||{},t=e.career||null,n=e.mode==="hotlap",s=A("div",{class:"results"}),r=n?A("div",{class:"res-top"},A("div",{class:"res-pos"},A("span",{class:"res-k"},"Best lap"),A("b",null,Ti(e.bestLap))),A("div",{class:"res-sub"},e.newBest?"New personal best":"Hot lap finished")):A("div",{class:"res-top"},A("div",{class:"res-pos"},A("span",{class:"res-k"},e.pos===1?"Winner":"Finished"),A("b",null,Ud(e.pos||0)),A("span",{class:"res-of"},`of ${e.field||"?"}`)),A("div",{class:"res-sub"},`${e.laps||"?"} laps · best lap ${Ti(e.bestLap)}`)),a=A("div",{class:"card res-card"},r,e.track&&bt[e.track]?A("div",{class:"res-trk muted"},bt[e.track].name):null);if(e.standings&&e.standings.length){const c=e.standings;let l=c.slice(0,8);const u=c.find(h=>h.me);u&&!l.includes(u)&&(l=[...c.slice(0,7),u]),a.append(A("table",{class:"tbl tight"},A("tbody",null,l.map((h,f)=>A("tr",{class:`${h.me?"me":""}${l[f-1]&&h.pos-l[f-1].pos>1?" gap":""}`.trim()},A("td",null,String(h.pos)),A("td",null,h.name),A("td",{class:"r"},h.gap||""))))))}t&&(a.append(A("div",{class:"earn"},A("div",{class:"earn-r"},A("span",null,"Reputation"),A("b",{class:"good"},`+${Yt(t.repGain)}`)),A("div",{class:"earn-r"},A("span",null,"Prize money"),A("b",null,`+${Yt(t.prize)}`)),(t.paid||[]).map(c=>A("div",{class:"earn-r"},A("span",{class:"earn-sp"},vr(c.id,56,"sp-logo xs"),c.name),A("b",null,`+${Yt(c.amount)}`))),A("div",{class:"earn-r tot"},A("span",null,"Credits now"),A("b",null,Yt(t.credits))))),t.newOffers&&t.newOffers.length&&a.append(A("div",{class:"note good"},on("handshake"),A("span",null,`${t.newOffers.length} new sponsor ${t.newOffers.length===1?"offer":"offers"}: ${t.newOffers.map(c=>c.name).join(", ")}`))),t.unlockedSeries&&t.unlockedSeries.length&&a.append(A("div",{class:"note gold"},on("trophy"),A("span",null,`Series unlocked: ${t.unlockedSeries.map(c=>c.name).join(", ")}`))));const o=A("div",{class:"actions"});return t?o.append(st("Next race",{kind:"primary",icon:"play",onClick:()=>i.leave("raceSetup",{mode:"career"})}),t.newOffers&&t.newOffers.length?st("View offers",{icon:"handshake",onClick:()=>i.leave("garage",{tab:"sponsors"})}):st("Garage",{icon:"car",onClick:()=>i.leave("garage")})):e.mp?o.append(st(Pe.active?"Back to lobby":"Main menu",{kind:"primary",icon:"play",onClick:()=>i.leave(Pe.active?"online":"menu")})):o.append(st(n?"Another lap":"Race again",{kind:"primary",icon:"play",onClick:()=>i.restart()})),(!e.mp||Pe.active)&&o.append(st(e.mp?"Leave room":"Main menu",{snd:"back",onClick:()=>{e.mp&&Pe.leave(),i.leave("menu")}})),s.append(a,o),s}function ky(i){const e=i.params||{};return A("div",{class:"pause card"},A("h2",{class:"big sm"},"Paused"),e.info?A("p",{class:"lead"},e.info):null,A("div",{class:"pause-a"},st("Resume",{kind:"primary",icon:"play",onClick:()=>i.resume()}),e.mp?null:st("Restart",{icon:"back",onClick:()=>ar(i,{title:"Restart this race?",body:"Your progress in this race will be lost.",confirmLabel:"Restart",onConfirm:()=>i.restart()})}),st("Settings",{icon:"gear",onClick:()=>i.go("settings",{overlay:!0,from:"pause"})}),e.mp?st("Leave race",{kind:"danger",snd:"back",onClick:()=>ar(i,{title:"Leave the race?",body:"You will go back to the room lobby. The others keep racing.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.leave(Pe.active?"online":"menu")})}):st("Exit to menu",{kind:"danger",snd:"back",onClick:()=>ar(i,{title:"Leave the race?",body:"This result will not count.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.exitToMenu()})})))}let ii="";function Su(i,e,t){const n=()=>i.ui.toast(`${t} copied`,"good"),s=()=>{const r=A("textarea",{style:{position:"fixed",opacity:"0",left:"-999px"}});r.value=e,document.body.append(r),r.select();try{document.execCommand("copy"),n()}catch{i.ui.toast("Could not copy. Select the code and copy it by hand.","warn")}r.remove()};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(n,s):s()}const Tu=i=>rn[i]?`${rn[i].year} ${rn[i].name.replace(/^'\d+ /,"")}`:"Car";function Dy(i){const e=A("div",{class:"page page-online"}),t=()=>{const c=e.parentElement,l=c?c.scrollTop:0;e.replaceChildren(...Pe.state==="lobby"?o():Pe.state==="connecting"?a():r()),c&&(c.scrollTop=l)},n=Pe.on("change",()=>{if(!e.isConnected){n();return}t()}),s=i.params||{};s.join&&Pe.state==="idle"&&(ii=xs(s.join),Pe.join(ii));function r(){const c=A("input",{class:"txt-in",type:"text",maxlength:16,value:Pe.profile().name,"aria-label":"Your driver name",autocomplete:"off",spellcheck:"false"});c.addEventListener("change",()=>{c.value=Pe.setName(c.value)});const l=A("input",{class:"code-in",type:"text",maxlength:7,value:ii,placeholder:"ABC123","aria-label":"Room code",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",inputmode:"text"}),u=()=>{if(c.value=Pe.setName(c.value),ii=xs(l.value),l.value=ii,!Nd(ii)){Pe.error="Enter the 6-character room code.",Pe.state="error",t();return}Pe.join(ii)};l.addEventListener("input",()=>{const d=xs(l.value);l.value=d,ii=d,h.disabled=d.length!==6,h.setAttribute("aria-disabled",d.length!==6?"true":"false")}),l.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),u())});const h=st("Join room",{kind:"primary",icon:"play",onClick:u});ii.length!==6&&(h.disabled=!0,h.setAttribute("aria-disabled","true"));const f=Pe.state==="error"&&Pe.error?A("div",{class:"note warn",role:"alert"},on("flag"),A("span",null,Pe.error)):null;return[A("header",{class:"page-h"},A("h1",{class:"big"},"Race online"),A("p",{class:"lead"},"Host a room and send the code to your friends, or type in a code to join theirs. Up to "+Ta+" drivers, with AI cars to fill the grid.")),f,A("section",{class:"card"},Pt("Your name","Other drivers see this in the lobby and on the leaderboard",c)),A("div",{class:"online-two"},A("section",{class:"card oc"},A("h3",{class:"card-t"},"Host a room"),A("p",{class:"muted"},"You get a 6-letter code to share. You pick the track and start the race."),A("div",{class:"actions"},st("Create room",{kind:"primary",icon:"flag",onClick:()=>{c.value=Pe.setName(c.value),Pe.host()}}))),A("section",{class:"card oc"},A("h3",{class:"card-t"},"Join with a code"),A("p",{class:"muted"},"Ask the host for the code, then type it here."),A("div",{class:"join-row"},l,h))),A("p",{class:"online-note"},"Rooms connect players directly with no account and no game server. If a friend cannot connect, one of you may be on a network that blocks direct connections (some school, work and mobile networks do). A different network or a phone hotspot usually fixes it.")]}function a(){return[A("header",{class:"page-h"},A("h1",{class:"big"},Pe.isHost?"Opening room":"Joining room"),A("p",{class:"lead"},Pe.isHost?"Setting up your room. This takes a few seconds.":`Looking for room ${Pe.code}. This can take up to 15 seconds.`)),A("div",{class:"card conn"},A("div",{class:"spin","aria-hidden":"true"}),A("div",null,A("div",{class:"orow-n"},Pe.isHost?"Connecting to the matchmaking relays":"Contacting the host"),A("div",{class:"orow-s"},"Nothing to install and no account to make."))),A("div",{class:"actions"},st("Cancel",{kind:"ghost",snd:"back",icon:"back",onClick:()=>Pe.leave()}))]}function o(){const c=i.game.career,l=Pe.settings,u=Pe.isHost,h=Pe.me,f=Pe.players,d=bt[l.track]||bt.americas,m=d.laps.includes(l.laps)?l.laps:d.laps[0],v=Math.max(0,Uc-f.length),g=I=>Pe.setSettings(I),p=A("div",{class:"room-code"},A("div",{class:"rc-l"},"Room code"),A("div",{class:"rc-v","aria-label":"Room code "+Pe.code.split("").join(" ")},Pe.code),A("div",{class:"rc-a"},st("Copy code",{icon:"check",onClick:()=>Su(i,Pe.code,"Code")}),st("Copy invite link",{icon:"globe",onClick:()=>Su(i,Pe.link,"Link")}),navigator.share?st("Share",{icon:"handshake",onClick:()=>navigator.share({title:"Road to the Americas",text:`Race me online. Room code ${Pe.code}`,url:Pe.link}).catch(()=>{})}):null)),M=A("div",{class:"plist",role:"list"},f.map(I=>{const D=I.livery||{},H=I.id===Pe.selfId,N=I.id===Pe.hostId,z=I.state!=="lobby",q=Pe.rtt[I.id];return A("div",{class:`pl${H?" me":""}`,role:"listitem"},A("span",{class:"pl-sw",style:{"--a":D.paint||"#888","--b":D.accent||"#ddd"},"aria-hidden":"true"},A("i"),A("b",null,D.number||"")),A("div",{class:"pl-n"},A("div",{class:"pl-name"},I.name,H?Kt("You"):null,N?Kt("Host","gold"):null),A("div",{class:"pl-c"},Tu(I.carId))),A("div",{class:"pl-s"},z?Kt("In a race","gold"):N||I.ready?Kt("Ready","good"):Kt("Not ready"),!H&&q?A("span",{class:"pl-ping muted"},Math.round(q)+" ms"):null))}),f.length<2?A("div",{class:"pl pl-empty"},A("span",{class:"muted"},"Waiting for friends to join. Send them the code above.")):null),y=(I,D,H)=>Pt(I,D,H),_=(...I)=>A("div",{class:"fixed"},I.map(D=>Kt(String(D)))),S=A("section",{class:"card opts"},A("h3",{class:"card-t"},u?"Race settings":"Race settings (set by the host)"),u?y("Track",`${d.kind}, ${d.miles} miles`,At(gd.map(I=>({value:I,label:bt[I].short,sub:`${bt[I].miles} mi`})),l.track,I=>g({track:I,laps:bt[I].laps[Math.min(1,bt[I].laps.length-1)]}),{label:"Track"})):y("Track",`${d.kind}, ${d.miles} miles`,_(d.name)),u?y("Laps",null,At(d.laps.map(I=>({value:I,label:String(I)})),m,I=>g({laps:I}),{label:"Laps"})):y("Laps",null,_(m)),u?y("AI drivers",`Fill the grid. Up to ${Uc} cars in total`,At([0,4,8,12,16,20].filter(I=>I<=v||I===0).map(I=>({value:I,label:String(I)})),Math.min(l.aiCount,v),I=>g({aiCount:I}),{label:"AI drivers"})):y("AI drivers",null,_(Math.min(l.aiCount,v))),u?y("AI level",null,At([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]].map(([I,D])=>({value:I,label:D})),l.ai,I=>g({ai:I}),{label:"AI level"})):y("AI level",null,_(l.ai[0].toUpperCase()+l.ai.slice(1))),u?y("Cars","Same car keeps it fair across eras",At([["same","Same as host"],["own","Everyone picks"]].map(([I,D])=>({value:I,label:D})),l.cars,I=>g({cars:I}),{label:"Cars"})):y("Cars",null,_(l.cars==="same"?"Same as host":"Everyone picks")),u?y("Weather","Rain means less grip",At([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]].map(([I,D])=>({value:I,label:D})),l.weather,I=>g({weather:I}),{label:"Weather"})):y("Weather",null,_(l.weather[0].toUpperCase()+l.weather.slice(1))),u?y("Time of day",null,At([["day","Day"],["sunset","Sunset"],["night","Night"]].map(([I,D])=>({value:I,label:D})),l.time,I=>g({time:I}),{label:"Time of day"})):y("Time of day",null,_(l.time[0].toUpperCase()+l.time.slice(1)))),T=c.state.unlockAll&&(u||l.cars==="own"),E=A("section",{class:"card opts"},A("h3",{class:"card-t"},"Your car"),T?y("Car","Your paint, number and sponsors come with you",At(cl.map(I=>({value:I,label:rn[I].year+"",sub:rn[I].name.replace(/^'\d+ /,"")})),i.game.carIdForSeries(c.series.id),I=>{c.setCar(I),i.game.refreshShowcase(),Pe.pushProfile()},{label:"Car"})):y("Car",l.cars==="same"&&!u?"The host picked one car for everybody":"Pick a car in the Garage",_(Tu(i.game.carIdForSeries(c.series.id)))),Pt("Paint and number","Change your colours, number and sponsors in the Garage",st("Open garage",{icon:"car",onClick:()=>i.go("garage",{from:"online"})}))),P=f.filter(I=>I.id!==Pe.selfId),x=P.filter(I=>I.state!=="lobby").length,b=P.filter(I=>I.ready).length,L=A("div",{class:"actions"},u?st(x?"Waiting for drivers to return":"Start race",{kind:"primary",icon:"play",disabled:!Pe.canStart(),title:x?"Some drivers are still in the last race":void 0,onClick:()=>{Pe.startRace()||i.ui.toast("Could not start yet","warn")}}):st(h&&h.ready?"Ready":"Click when ready",{kind:h&&h.ready?"ghost":"primary",icon:"check",onClick:()=>Pe.setReady(!(h&&h.ready))}),st("Leave room",{kind:"danger",snd:"back",icon:"back",onClick:()=>Pe.leave()}));return[A("header",{class:"page-h"},A("h1",{class:"big"},u?"Your room":"Room lobby")),p,A("section",{class:"card"},A("h3",{class:"card-t"},`Drivers ${f.length} of ${Ta}`),M,u&&P.length?A("p",{class:"muted pad"},`${b} of ${P.length} ready. You can start whenever you like.`):u?null:A("p",{class:"muted pad"},h&&h.ready?"Waiting for the host to start the race.":"Click Ready when you are set. The host starts the race.")),S,E,L]}return t(),e}const wu={menu:by,career:Ty,garage:Cy,raceSetup:Ly,settings:Vd,online:Dy},Ny=[{id:"menu",label:"Home",icon:"home"},{id:"career",label:"Career",icon:"trophy"},{id:"raceSetup",params:{mode:"quick"},label:"Race",icon:"flag"},{id:"raceSetup",params:{mode:"hotlap"},label:"Hot lap",icon:"stopwatch",desk:!0},{id:"garage",label:"Garage",icon:"car"},{id:"online",label:"Online",icon:"globe",desk:!0},{id:"settings",label:"Settings",icon:"gear"}],J={game:null,root:null,cur:"boot",params:{},listeners:{},nav:null,wiping:!1,music:"",hudWait:!0},De={_modals:[],overlayEl:null},Do=(i,...e)=>(J.listeners[i]||[]).forEach(t=>{try{t(...e)}catch(n){console.error(n)}});De.on=(i,e)=>((J.listeners[i]||=[]).push(e),()=>{J.listeners[i]=J.listeners[i].filter(t=>t!==e)});De.current=()=>J.cur;function Na(i){return hl()?(i(),Promise.resolve()):new Promise(e=>{const t=J.wipeEl;t.classList.remove("run"),t.offsetWidth,t.classList.add("run"),J.wiping=!0,Gt("whoosh"),setTimeout(()=>{i()},330),setTimeout(()=>{t.classList.remove("run"),J.wiping=!1,e()},760)})}function Yi(){try{const i=J.game.input;i&&typeof i.clear=="function"&&i.clear()}catch{}}function Ea(i){return{game:J.game,ui:De,params:i,go:(e,t)=>De.show(e,t),back:()=>De.back(),launch:(e,t)=>Fy(e,t),restart:()=>Oy(),resume:()=>By(),pause:()=>Oc(),cycleCamera:()=>{const e=J.game.input;e&&e.cycleCamera?e.cycleCamera():e&&e.press&&e.press("camera")},exitToMenu:()=>Fc(),leave:(e,t)=>Fc(e,t)}}async function Uy(i){for(;J.wiping;)await Fd(80);await Na(()=>{Yi(),De.applyQuality(),Hd(),De.show("hud"),J.game.launchMP(i)})}async function Fy(i,e){J.wiping||await Na(()=>{Yi(),De.applyQuality(),Hd(),De.show("hud");const t=J.game;(i==="hotlap"?t.startHotLap:t.startRace).call(t,e)})}async function Fc(i="menu",e={}){J.wiping||await Na(()=>{try{J.game.exitToMenu()}catch(t){console.error(t)}Yi(),De.show(i,e)})}function Oy(){Yi(),De.applyQuality(),J.game.restart(),De.show("hud")}function By(){Yi(),J.game.resume(),De.show("hud"),Yi()}De.applyQuality=()=>{const i=J.game,e=i&&i.world;if(!e||typeof e.setQuality!="function")return;const t=i.settings&&i.settings.quality;if(!(!t||e.quality===t||i.mode==="race"&&i.race))try{e.setQuality(t)}catch(n){console.warn("[ui] could not apply graphics quality",n)}};function Hd(){const i=J.game;i&&typeof i.camMode=="number"&&i.settings&&typeof i.settings.camera=="number"&&(i.camMode=i.settings.camera|0,i.camInit=!1)}function Oc(){J.cur==="hud"&&(J.game.pause(),Yi(),J.cur!=="pause"&&De.show("pause",J.pauseInfo||{}))}function zy(){const i=t=>{const n=A("button",{type:"button",class:`nav-item${t.desk?" desk":""}`,disabled:t.disabled,title:t.disabled?t.hint:null,"aria-disabled":t.disabled?"true":null,dataset:{id:t.id,mode:t.params?.mode||""},onClick:()=>De.show(t.id,t.params||{})},on(t.icon),A("span",{class:"nav-l"},t.label),t.disabled?A("span",{class:"nav-soon"},"Soon"):null);return t.disabled&&n.setAttribute("disabled",""),n};J.navItems=Ny.map(i);const e=A("nav",{class:"side","aria-label":"Main menu"},A("div",{class:"side-logo",html:hy.replace("<svg ",'<svg class="side-logo-svg" aria-hidden="true" ')}),A("div",{class:"nav"},J.navItems),A("p",{class:"side-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."));J.mainEl=A("main",{class:"main",id:"shell-main"}),J.shellEl=A("div",{class:"shell",hidden:!0},e,J.mainEl)}function Vy(i,e){J.navItems.forEach(t=>{t.dataset.id===i&&(t.dataset.mode?t.dataset.mode===(e.mode==="career"?"quick":e.mode||""):!0)?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function vi({shell:i=!1,hud:e=!1,overlay:t=!1,boot:n=!1}){J.shellEl.hidden=!i,J.hudEl.hidden=!e,J.overlayEl.hidden=!t,J.bootCtl.el&&n&&J.bootCtl.show(),J.root.dataset.layer=i?"shell":e?t?"hud-overlay":"hud":t?"overlay":n?"boot":"none"}function Wi(){const i=document.getElementById("game-root");if(!i)return;const e=J.cur==="garage"&&!(J.game&&J.game.usesStageRect)?De.stageRect():null;i.style.transform=e?`translate(${Math.round(e.x+e.width/2-innerWidth/2)}px, ${Math.round(e.y+e.height/2-innerHeight/2)}px)`:""}function Hy(){const i=J.game;if(J.cur!=="garage"||!i||!i.orbit||typeof i.orbit.dist!="number"||i.usesStageRect)return;const e=De.stageRect();if(!e||e.width<80||e.height<80)return;const t=2*Math.tan(38/2*Math.PI/180),n=Math.max(5.8/(t*(innerWidth/innerHeight)*(e.width/innerWidth)),2.7/(t*(e.height/innerHeight)));try{i.garage.zoom(Math.min(12,Math.max(4.2,n))-i.orbit.dist)}catch{}}function No(i){J.music!==i&&(J.music=i,dy(i,{fade:1.2}))}De.show=function(e,t={}){const n=J.cur;if(J.params=t,e==="none"){vi({}),J.cur="none",J.touch.setActive(!1),Wi(),Do("screen",e,t);return}if(e==="boot"){vi({boot:!0}),J.cur="boot",Wi(),Do("screen",e,t);return}J.bootCtl.el&&!J.bootCtl.el.hidden&&e!=="boot"&&J.bootCtl.hide(),J.overlayEl.querySelectorAll(".ov").forEach(r=>r.remove()),De._modals.forEach(r=>r.remove()),De._modals=[];const s=Ea(t);if(wu[e]&&!(e==="settings"&&t.overlay)){if(n==="garage"&&e!=="garage")try{J.game.garage.exit()}catch(a){console.error(a)}vi({shell:!0}),J.touch.setActive(!1),De.applyQuality(),J.shellEl.classList.toggle("garage-mode",e==="garage"),J.shellEl.dataset.screen=e;const r=wu[e](s);if(r.classList.add("enter"),J.mainEl.replaceChildren(r),J.mainEl.scrollTop=0,Vy(e,t),e==="garage"&&n!=="garage")try{J.game.garage.enter()}catch(a){console.error(a)}No(e==="garage"?"garage":"menu")}else if(e==="hud"){if(n==="garage")try{J.game.garage.exit()}catch{}vi({hud:!0}),J.touch.setActive(!0),J.hudWait=!0,J.hudEl.classList.add("wait"),No("race"),!J.rotHint&&J.touch.wanted()&&innerWidth<700&&innerHeight>innerWidth&&(J.rotHint=!0,setTimeout(()=>De.toast("Tip: turn your phone sideways for a wider view","info"),2500))}else if(e==="pause")vi({hud:!0,overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(A("div",{class:"ov ov-pause"},ky(s)));else if(e==="results")vi({overlay:!0}),J.touch.setActive(!1),No("results"),Gt(t.pos===1?"bestLap":"lap"),J.overlayEl.append(A("div",{class:"ov ov-results"},Iy(s)));else if(e==="settings")vi({hud:n==="pause"||J.cur==="pause",overlay:!0}),J.touch.setActive(!1),J.overlayEl.append(A("div",{class:"ov ov-settings"},Vd(s)));else{console.warn("[ui] unknown screen",e);return}J.cur=e,J.pauseOverlayFrom=t.from,Do("screen",e,t),Wi(),requestAnimationFrame(()=>{Wi(),De.focusScope()}),e==="garage"&&(n!=="garage"&&requestAnimationFrame(Hy),setTimeout(Wi,560))};De.back=function(){if(De._modals.length){De._modals[De._modals.length-1].close(),Gt("back");return}const e=J.cur;e==="settings"&&J.params.overlay?(Gt("back"),De.show("pause",J.pauseInfo||{})):e==="pause"?(Gt("back"),Ea({}).resume()):e==="results"?(Gt("back"),Fc()):["career","garage","raceSetup","settings","online"].includes(e)&&(Gt("back"),De.show("menu"))};De.getScope=()=>De._modals.length?De._modals[De._modals.length-1]:!J.overlayEl.hidden&&J.overlayEl.querySelector(".ov")?J.overlayEl.querySelector(".ov"):J.shellEl.hidden?null:J.shellEl;De.focusScope=i=>{J.nav&&J.nav.focusFirst(i||De.getScope())};De.hud={update(i){J.hudWait&&(J.hudWait=!1,J.hudEl.classList.remove("wait")),J.hudCtl.update(i),J.touchCtl.tick()}};De.stageRect=()=>{const i=J.mainEl&&J.mainEl.querySelector(".garage-stage");if(!i||J.shellEl.hidden)return null;let e=0,t=0,n=i;for(;n&&n!==J.root;){e+=n.offsetLeft,t+=n.offsetTop;const r=n.offsetParent;r&&r!==J.root&&(e-=r.scrollLeft,t-=r.scrollTop),n=r}const s=J.root.getBoundingClientRect();return{x:e+s.left,y:t+s.top,width:i.offsetWidth,height:i.offsetHeight}};De.setPauseInfo=i=>{J.pauseInfo={info:i}};De.setLoading=(i,e)=>J.bootCtl.setLoading(i,e);De.touch=null;De.toast=(i,e="info")=>{const t=performance.now();if(J.lastToast&&J.lastToast.text===i&&t-J.lastToast.t<1500)return;J.lastToast={text:i,t};const n=A("div",{class:`toast ${e}`,role:"status"},e==="good"?on("check"):null,A("span",null,i));for(J.toastsEl.append(n);J.toastsEl.children.length>3;)J.toastsEl.firstChild.remove();setTimeout(()=>n.classList.add("out"),3e3),setTimeout(()=>n.remove(),3500)};De.init=function(e,t){J.game=t,J.root=e,e.classList.add("ui-root"),J.bootCtl=vy(async()=>{await fy(),Gt("intro"),await Fd(hl()?50:900);const n=new URLSearchParams(location.search).get("room");await Na(()=>{n?De.show("online",{join:n}):De.show("menu")})}),zy(),Pe.on("start",n=>{Uy(n)}),J.hudCtl=_y(Ea({})),J.hudEl=J.hudCtl.el,J.hudEl.hidden=!0,J.touchCtl=yy(Ea({})),De.touch=J.touch=J.touchCtl,J.hudEl.append(J.touchCtl.el),J.overlayEl=De.overlayEl=A("div",{class:"overlay",hidden:!0}),J.toastsEl=A("div",{class:"toasts","aria-live":"polite"}),J.wipeEl=A("div",{class:"wipe","aria-hidden":"true"},A("i"),A("i"),A("i")),e.append(J.shellEl,J.hudEl,J.overlayEl,J.toastsEl,J.wipeEl),J.nav=gy(e,{getScope:()=>De.getScope(),onBack:()=>De.back(),hudActive:()=>J.cur==="hud"&&!J.overlayEl.hasChildNodes()||J.cur==="hud",onHudPause:()=>Oc()}),window.addEventListener("resize",Wi),window.addEventListener("orientationchange",()=>setTimeout(Wi,250)),J.pauseInfo={},t&&typeof t.on=="function"&&t.on("ready",()=>De.setLoading(1,"Ready")),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>bd()),document.addEventListener("visibilitychange",()=>{document.hidden&&J.cur==="hud"&&Oc()}),J.cur="boot",vi({boot:!0})};Da.ui=De;De.init(document.getElementById("ui-root"),Da);window.__rtta={game:Da,ui:De,audio:Qe,Driver:Ic,mp:Pe};const Gy=document.getElementById("game-root");Da.init(Gy,(i,e)=>De.setLoading(i,e)).catch(i=>{console.error(i),De.setLoading(1,"Failed to start: "+(i&&i.message||i))});
