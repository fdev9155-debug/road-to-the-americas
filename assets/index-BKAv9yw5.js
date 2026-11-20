(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const dc="180",ed=0,Xc=1,td=2,Bh=1,zh=2,qn=3,$n=0,Yt=1,dn=2,ui=0,is=1,qc=2,Qc=3,Kc=4,nd=5,Ri=100,id=101,sd=102,rd=103,ad=104,od=200,cd=201,ld=202,hd=203,lo=204,ho=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,vd=213,yd=214,uo=0,fo=1,po=2,as=3,mo=4,go=5,_o=6,vo=7,Vh=0,xd=1,Md=2,di=0,bd=1,Sd=2,Td=3,Hh=4,Ed=5,wd=6,Ad=7,Yc="attached",Rd="detached",Gh=300,os=301,cs=302,yo=303,xo=304,aa=306,fi=1e3,li=1001,$r=1002,jt=1003,Wh=1004,Fs=1005,on=1006,Gr=1007,Nn=1008,Fn=1009,Xh=1010,qh=1011,Ws=1012,fc=1013,Ni=1014,En=1015,er=1016,pc=1017,mc=1018,Xs=1020,Qh=35902,Kh=35899,Yh=1021,jh=1022,pn=1023,qs=1026,Qs=1027,gc=1028,_c=1029,$h=1030,vc=1031,yc=1033,Wr=33776,Xr=33777,qr=33778,Qr=33779,Mo=35840,bo=35841,So=35842,To=35843,Eo=36196,wo=37492,Ao=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,No=37814,Uo=37815,ko=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,Vo=37821,Ho=36492,Go=36494,Wo=36495,Xo=36283,qo=36284,Qo=36285,Ko=36286,Ks=2300,Ys=2301,_a=2302,jc=2400,$c=2401,Zc=2402,Cd=2500,Pd=0,Zh=1,Yo=2,Ld=3200,Id=3201,Jh=0,Dd=1,ci="",St="srgb",$t="srgb-linear",Zr="linear",dt="srgb",Oi=7680,Jc=519,Nd=512,Ud=513,kd=514,eu=515,Fd=516,Od=517,Bd=518,zd=519,jo=35044,el="300 es",Un=2e3,Jr=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tl=1234567;const Bs=Math.PI/180,ls=180/Math.PI;function An(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function xc(i,e){return(i%e+e)%e}function Vd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hd(i,e,t){return i!==e?(t-i)/(e-i):0}function zs(i,e,t){return(1-t)*i+t*e}function Gd(i,e,t,n){return zs(i,e,1-Math.exp(-t*n))}function Wd(i,e=1){return e-Math.abs(xc(i,e*2)-e)}function Xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kd(i,e){return i+Math.random()*(e-i)}function Yd(i){return i*(.5-Math.random())}function jd(i){i!==void 0&&(tl=i);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $d(i){return i*Bs}function Zd(i){return i*ls}function Jd(i){return(i&i-1)===0&&i!==0}function ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:Bs,RAD2DEG:ls,generateUUID:An,clamp:$e,euclideanModulo:xc,mapLinear:Vd,inverseLerp:Hd,lerp:zs,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Qd,randFloat:Kd,randFloatSpread:Yd,seededRandom:jd,degToRad:$d,radToDeg:Zd,isPowerOfTwo:Jd,ceilPowerOfTwo:ef,floorPowerOfTwo:tf,setQuaternionFromProperEuler:nf,normalize:lt,denormalize:Sn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const E=Math.sqrt(M),T=Math.atan2(E,p*y);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}const v=o*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new U,nl=new Jt;class Qe{constructor(e,t,n,s,r,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],M=s[4],v=s[7],E=s[2],T=s[5],R=s[8];return r[0]=a*_+o*y+c*E,r[3]=a*m+o*M+c*T,r[6]=a*p+o*v+c*R,r[1]=l*_+h*y+u*E,r[4]=l*m+h*M+u*T,r[7]=l*p+h*v+u*R,r[2]=d*_+f*y+g*E,r[5]=d*m+f*M+g*T,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Qe;function tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=js("canvas");return i.style.display="block",i}const il={};function $s(i){i in il||(il[i]=!0,console.warn(i))}function rf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sl=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const i={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$t]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}const nt=af();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=js("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cf=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xa(s[a].image)):r.push(xa(s[a]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;const Ma=new U;class At extends ms{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=li,s=li,r=on,a=Nn,o=pn,c=Fn,l=At.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=An(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Gh;At.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(f+1)/2,E=(p+1)/2,T=(h+d)/4,R=(u+_)/4,C=(g+m)/4;return M>v&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new At(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends hf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nu extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),rr.subVectors(this.max,bs),zi.subVectors(e.a,bs),Vi.subVectors(e.b,bs),Hi.subVectors(e.c,bs),ei.subVectors(Vi,zi),ti.subVectors(Hi,Vi),gi.subVectors(zi,Hi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-gi.z,gi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!ba(t,zi,Vi,Hi,rr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,zi,Vi,Hi,rr))?!1:(ar.crossVectors(ei,ti),t=[ar.x,ar.y,ar.z],ba(t,zi,Vi,Hi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,sr=new Jn,zi=new U,Vi=new U,Hi=new U,ei=new U,ti=new U,gi=new U,bs=new U,rr=new U,ar=new U,_i=new U;function ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const df=new Jn,Ss=new U,Sa=new U;class On{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Sa)),this.expandByPoint(Ss.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new U,Ta=new U,or=new U,ni=new U,Ea=new U,cr=new U,wa=new U;class oa{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ta.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=ni.dot(this.direction),c=-ni.dot(or),l=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ta).addScaledVector(or,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),cr.subVectors(n,e),wa.crossVectors(Ea,cr);let a=this.direction.dot(wa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const c=o*this.direction.dot(cr.crossVectors(ni,cr));if(c<0)return null;const l=o*this.direction.dot(Ea.cross(ni));if(l<0||c+l>a)return null;const h=-o*ni.dot(wa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,n){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ii.crossVectors(n,sn),ii.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ii.crossVectors(n,sn)),ii.normalize(),lr.crossVectors(sn,ii),s[0]=ii.x,s[4]=lr.x,s[8]=sn.x,s[1]=ii.y,s[5]=lr.y,s[9]=sn.y,s[2]=ii.z,s[6]=lr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],M=n[7],v=n[11],E=n[15],T=s[0],R=s[4],C=s[8],b=s[12],S=s[1],D=s[5],F=s[9],L=s[13],I=s[2],k=s[6],H=s[10],q=s[14],V=s[3],te=s[7],ae=s[11],_e=s[15];return r[0]=a*T+o*S+c*I+l*V,r[4]=a*R+o*D+c*k+l*te,r[8]=a*C+o*F+c*H+l*ae,r[12]=a*b+o*L+c*q+l*_e,r[1]=h*T+u*S+d*I+f*V,r[5]=h*R+u*D+d*k+f*te,r[9]=h*C+u*F+d*H+f*ae,r[13]=h*b+u*L+d*q+f*_e,r[2]=g*T+_*S+m*I+p*V,r[6]=g*R+_*D+m*k+p*te,r[10]=g*C+_*F+m*H+p*ae,r[14]=g*b+_*L+m*q+p*_e,r[3]=y*T+M*S+v*I+E*V,r[7]=y*R+M*D+v*k+E*te,r[11]=y*C+M*F+v*H+E*ae,r[15]=y*b+M*L+v*q+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,M=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=t*y+n*M+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=M*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=v*R,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=E*R,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,M=c*h,v=c*u,E=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+v)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+M)*R,s[9]=(m-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,h=1/a,u=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Un,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Un)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Jr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Un,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Un)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Jr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new U,vn=new qe,ff=new U(0,0,0),pf=new U(1,1,1),ii=new U,lr=new U,sn=new U,al=new qe,ol=new Jt;class Bt{constructor(e=0,t=0,n=0,s=Bt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bt.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mf=0;const cl=new U,Wi=new Jt,Hn=new qe,hr=new U,Ts=new U,gf=new U,_f=new Jt,ll=new U(1,0,0),hl=new U(0,1,0),ul=new U(0,0,1),dl={type:"added"},vf={type:"removed"},Xi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class _t extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new Bt,n=new Jt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Qe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ts,hr,this.up):Hn.lookAt(hr,Ts,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new U,Gn=new U,Ra=new U,Wn=new U,qi=new U,Qi=new U,fl=new U,Ca=new U,Pa=new U,La=new U,Ia=new rt,Da=new rt,Na=new rt;class Tn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Gn.subVectors(n,t),Ra.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Gn),c=yn.dot(Ra),l=Gn.dot(Gn),h=Gn.dot(Ra),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ia.setScalar(0),Da.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ia,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,n),Qi.subVectors(r,n),Ca.subVectors(e,n);const c=qi.dot(Ca),l=Qi.dot(Ca);if(c<=0&&l<=0)return t.copy(n);Pa.subVectors(e,s);const h=qi.dot(Pa),u=Qi.dot(Pa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(qi,a);La.subVectors(e,r);const f=qi.dot(La),g=Qi.dot(La);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Qi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(fl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(qi,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=xc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return nt.workingToColorSpace(Ot.copy(this),e),Math.round($e(Ot.r*255,0,255))*65536+Math.round($e(Ot.g*255,0,255))*256+Math.round($e(Ot.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=St){nt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ur);const n=zs(si.h,ur.h,t),s=zs(si.s,ur.s,t),r=zs(si.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Be;Be.NAMES=su;let yf=0;class kn extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=is,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wn extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,dr=new Ke;let xf=0;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jo&&(e.usage=this.usage),e}}class ru extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class au extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mf=0;const hn=new qe,ka=new _t,Ki=new U,rn=new Jn,Es=new Jn,Pt=new U;class Vt extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?au:ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(rn.min,Es.min),rn.expandByPoint(Pt),Pt.addVectors(rn.max,Es.max),rn.expandByPoint(Pt)):(rn.expandByPoint(Es.min),rn.expandByPoint(Es.max))}rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(e,l),Pt.add(Ki)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new U,c[C]=new U;const l=new U,h=new U,u=new U,d=new Ke,f=new Ke,g=new Ke,_=new U,m=new U;function p(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(_),o[b].add(_),o[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,b=y.length;C<b;++C){const S=y[C],D=S.start,F=S.count;for(let L=D,I=D+F;L<I;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new U,v=new U,E=new U,T=new U;function R(C){E.fromBufferAttribute(s,C),T.copy(E);const b=o[C];M.copy(b),M.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(T,b);const D=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,b=y.length;C<b;++C){const S=y[C],D=S.start,F=S.count;for(let L=D,I=D+F;L<I;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new qe,vi=new oa,fr=new On,ml=new U,pr=new U,mr=new U,gr=new U,Fa=new U,_r=new U,gl=new U,vr=new U;class ot extends _t{constructor(e=new Vt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Fa.fromBufferAttribute(u,e),a?_r.addScaledVector(Fa,h):_r.addScaledVector(Fa.sub(t),h))}t.add(_r)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(fr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(fr,ml)===null||vi.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),vi.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=M;v<E;v+=3){const T=o.getX(v),R=o.getX(v+1),C=o.getX(v+2);s=yr(this,p,e,n,l,h,u,T,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=yr(this,a,e,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=M;v<E;v+=3){const T=v,R=v+1,C=v+2;s=yr(this,p,e,n,l,h,u,T,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,v=m+2;s=yr(this,a,e,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bf(i,e,t,n,s,r,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===$n,o),c===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:i}}function yr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);const h=bf(i,e,t,n,pr,mr,gr,gl);if(h){const u=new U;Tn.getBarycoord(gl,pr,mr,gr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,c,l,u,new Ke)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,c,l,u,new Ke)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};Tn.getNormal(pr,mr,gr,d.normal),h.face=d,h.barycoord=u}return h}class qt extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(_,m,p,y,M,v,E,T,R,C,b){const S=v/R,D=E/C,F=v/2,L=E/2,I=T/2,k=R+1,H=C+1;let q=0,V=0;const te=new U;for(let ae=0;ae<H;ae++){const _e=ae*D-L;for(let De=0;De<k;De++){const Ne=De*S-F;te[_]=Ne*y,te[m]=_e*M,te[p]=I,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(De/R),u.push(1-ae/C),q+=1}}for(let ae=0;ae<C;ae++)for(let _e=0;_e<R;_e++){const De=d+_e+k*ae,Ne=d+_e+k*(ae+1),st=d+(_e+1)+k*(ae+1),Je=d+(_e+1)+k*ae;c.push(De,Ne,Je),c.push(Ne,st,Je),V+=6}o.addGroup(f,V,b),f+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const s in n)e[s]=n[s]}return e}function Sf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ou(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const cu={clone:hs,merge:Xt};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lu extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new U,_l=new Ke,vl=new Ke;class Kt extends lu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,_l,vl),t.subVectors(vl,_l)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,ji=1;class wf extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Yi,ji,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Yi,ji,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Yi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Yi,ji,e,t);o.layers=this.layers,this.add(o);const c=new Kt(Yi,ji,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Yi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hu extends At{constructor(e=[],t=os,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ui});r.uniforms.tEquirect.value=t;const a=new ot(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=on),new wf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class mn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rf={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yl extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jo,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new U;class Sc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xl=new U,Ml=new rt,bl=new rt,Pf=new U,Sl=new qe,xr=new U,Ba=new On,Tl=new qe,za=new oa;class Lf extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingBox.expandByPoint(xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingSphere.expandByPoint(xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(s),e.ray.intersectsSphere(Ba)!==!1&&(Tl.copy(s).invert(),za.copy(e.ray).applyMatrix4(Tl),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ml.fromBufferAttribute(s.attributes.skinIndex,e),bl.fromBufferAttribute(s.attributes.skinWeight,e),xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=bl.getComponent(r);if(a!==0){const o=Ml.getComponent(r);Sl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pf.copy(xl).applyMatrix4(Sl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uu extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class du extends At{constructor(e=null,t=1,n=1,s,r,a,o,c,l=jt,h=jt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new qe,If=new qe;class Tc{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:If;El.multiplyMatrices(o,t[r]),El.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new du(t,e,e,pn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new uu),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class $o extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new qe,wl=new qe,Mr=[],Al=new Jn,Df=new qe,ws=new ot,As=new On;class Mn extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Df)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),Al.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),As.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),wl.multiplyMatrices(n,$i),ws.matrixWorld=wl,ws.raycast(e,Mr);for(let a=0,o=Mr.length;a<o;a++){const c=Mr[a];c.instanceId=r,c.object=this,t.push(c)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(s*this.count),s,this.count,gc,En));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Va=new U,Nf=new U,Uf=new Qe;class wi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Va.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uf.getNormalMatrix(e),s=this.coplanarPoint(Va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new On,kf=new Ke(.5,.5),br=new U;class Ec{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],M=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,p-g,E-y).normalize(),s[1].setComponents(l+a,f+h,p+g,E+y).normalize(),s[2].setComponents(l+o,f+u,p+_,E+M).normalize(),s[3].setComponents(l-o,f-u,p-_,E-M).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===Un)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===Jr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=kf.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fu extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new U,ta=new U,Rl=new qe,Rs=new oa,Sr=new On,Ha=new U,Cl=new U;class wc extends _t{constructor(e=new Vt,t=new fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ea.fromBufferAttribute(t,s-1),ta.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;Rl.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),M=Tr(this,e,Rs,c,p,y,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Tr(this,e,Rs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Tr(this,e,Rs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Tr(this,e,Rs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ea.fromBufferAttribute(o,s),ta.fromBufferAttribute(o,r),t.distanceSqToSegment(ea,ta,Ha,Cl)>n)return;Ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:Cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Pl=new U,Ll=new U;class Ff extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pl.fromBufferAttribute(t,s),Ll.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pl.distanceTo(Ll);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Of extends wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pu extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new qe,Zo=new oa,Er=new On,wr=new U;class Bf extends _t{constructor(e=new Vt,t=new pu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;Il.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(Il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);wr.fromBufferAttribute(u,m),Dl(wr,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)wr.fromBufferAttribute(u,g),Dl(wr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dl(i,e,t,n,s,r,a){const o=Zo.distanceSqToPoint(i);if(o<t){const c=new U;Zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class mu extends At{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gu extends At{constructor(e,t,n=Ni,s,r,a,o=jt,c=jt,l,h=qs,u=1){if(h!==qs&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _u extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ac extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new U,h=new Ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vs extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function y(){const v=new U,E=new U;let T=0;const R=(t-e)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(t-e)+e;for(let F=0;F<=s;F++){const L=F/s,I=L*c+o,k=Math.sin(I),H=Math.cos(I);E.x=D*k,E.y=-S*n+m,E.z=D*H,u.push(E.x,E.y,E.z),v.set(k,R,H).normalize(),d.push(v.x,v.y,v.z),f.push(L,1-S),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=_[b][C],D=_[b+1][C],F=_[b+1][C+1],L=_[b][C+1];(e>0||b!==0)&&(h.push(S,D,L),T+=3),(t>0||b!==r-1)&&(h.push(D,F,L),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){const E=g,T=new Ke,R=new U;let C=0;const b=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const I=F/s*c+o,k=Math.cos(I),H=Math.sin(I);R.x=b*H,R.y=m*S,R.z=b*k,u.push(R.x,R.y,R.z),d.push(0,S,0),T.x=k*.5+.5,T.y=H*.5*S+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){const L=E+F,I=D+F;v===!0?h.push(I,I+1,L):h.push(I+1,I,L),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rc extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new U,v=new U,E=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],v),f(t[T+2],E),c(M,v,E,y)}function c(y,M,v,E){const T=E+1,R=[];for(let C=0;C<=T;C++){R[C]=[];const b=y.clone().lerp(v,C/T),S=M.clone().lerp(v,C/T),D=T-C;for(let F=0;F<=D;F++)F===0&&C===T?R[C][F]=b:R[C][F]=b.clone().lerp(S,F/D)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(R[C][S+1]),d(R[C+1][S]),d(R[C][S])):(d(R[C][S+1]),d(R[C+1][S+1]),d(R[C+1][S]))}}function l(y){const M=new U;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const y=new U;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const v=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(v,1-E)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const M=a[y+0],v=a[y+2],E=a[y+4],T=Math.max(M,v,E),R=Math.min(M,v,E);T>.9&&R<.1&&(M<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){const v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const y=new U,M=new U,v=new U,E=new U,T=new Ke,R=new Ke,C=new Ke;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),E.copy(y).add(M).add(v).divideScalar(3);const D=m(E);_(T,S+0,y,D),_(R,S+2,M,D),_(C,S+4,v,D)}}function _(y,M,v,E){E<0&&y.x===1&&(a[M]=y.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.vertices,e.indices,e.radius,e.details)}}class Cc extends Rc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cc(e.radius,e.detail)}}class hi extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let M=0;M<l;M++){const v=M*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const M=y+l*p,v=y+l*(p+1),E=y+1+l*(p+1),T=y+1+l*p;f.push(M,v,T),f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class It extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends It{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zf extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vf extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gf(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Nl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function vu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class tr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wf extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=e,o=2*t-n;break;case Zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,c=2*n-t;break;case Zc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+y*a[l+E]+M*a[c+E]+v*a[u+E];return r}}class Xf extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class qf extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Hf(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ys;class gs extends Cn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ks;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class yu extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}yu.prototype.ValueTypeName="color";class us extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}us.prototype.ValueTypeName="number";class Qf extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Jt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ds extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qf(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends Cn{constructor(e,t,n){super(e,t,n)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ks;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}fs.prototype.ValueTypeName="vector";class Kf{constructor(e="",t=-1,n=[],s=Cd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(jf(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Gf(c);c=Nl(c,1,h),l=Nl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new us(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];vu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new us(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(fs,f+".position",d,"pos",s),n(ds,f+".quaternion",d,"rot",s),n(fs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Yf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return yu;case"quaternion":return ds;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yf(i.type);if(i.times===void 0){const t=[],n=[];vu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $f{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Zf=new $f;class vs{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Jf extends Error{constructor(e,t){super(e),this.response=t}}class xu extends vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){const C=h[T];C.onProgress&&C.onProgress(E)}p.enqueue(v),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Jf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Qn.add(`file:${e}`,l);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class ep extends vs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Zi.get(a);u===void 0&&(u=[],Zi.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=js("img");function c(){h(),t&&t(this);const u=Zi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Zi.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Qn.remove(`image:${e}`);const d=Zi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Mu extends vs{constructor(e){super(e)}load(e,t,n,s){const r=new At,a=new ep(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ca extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tp extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new qe,Ul=new U,kl=new U;class Pc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ul),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class np extends Pc{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ip extends ca{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fl=new qe,Cs=new U,Wa=new U;class sp extends Pc{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,n.coordinateSystem,n.reversedDepth)}}class rp extends ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lc extends lu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ap extends Pc{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bu extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xa=new WeakMap;class op extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Xa.has(a)===!0)s&&s(Xa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Xa.set(c,l),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class cp extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ic="\\[\\]\\.:\\/",lp=new RegExp("["+Ic+"]","g"),Dc="[^"+Ic+"]",hp="[^"+Ic.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",Dc),dp=/(WCOD+)?/.source.replace("WCOD",hp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),mp=new RegExp("^"+up+dp+fp+pp+"$"),gp=["material","materials","bones","map"];class _p{constructor(e,t,n){const s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(e){const t=mp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=_p;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ol(i,e,t,n){const s=vp(n);switch(t){case Yh:return i*e;case gc:return i*e/s.components*s.byteLength;case _c:return i*e/s.components*s.byteLength;case $h:return i*e*2/s.components*s.byteLength;case vc:return i*e*2/s.components*s.byteLength;case jh:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case yc:return i*e*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case To:return Math.max(i,16)*Math.max(e,8)/4;case Mo:case So:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Go:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vp(i){switch(i){case Fn:case Xh:return{byteLength:1,components:1};case Ws:case qh:case er:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Ni:case fc:case En:return{byteLength:4,components:1};case Qh:case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);function Su(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yp(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:xp,alphahash_pars_fragment:Mp,alphamap_fragment:bp,alphamap_pars_fragment:Sp,alphatest_fragment:Tp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Ip,iridescence_fragment:Dp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:Vp,color_vertex:Hp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Qp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Yp,colorspace_fragment:jp,colorspace_pars_fragment:$p,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:d0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:c0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:_0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:x0,lights_fragment_end:M0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphinstance_vertex:I0,morphcolor_vertex:D0,morphnormal_vertex:N0,morphtarget_pars_vertex:U0,morphtarget_vertex:k0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:V0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Q0,packing:K0,premultiplied_alpha_fragment:Y0,project_vertex:j0,dithering_fragment:$0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:cm,specularmap_fragment:lm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:ym,background_frag:xm,backgroundCube_vert:Mm,backgroundCube_frag:bm,cube_vert:Sm,cube_frag:Tm,depth_vert:Em,depth_frag:wm,distanceRGBA_vert:Am,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:km,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Qm,points_frag:Km,shadow_vert:Ym,shadow_frag:jm,sprite_vert:$m,sprite_frag:Zm},ge={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([ge.lights,ge.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:Xt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Rr={r:0,b:0,g:0},xi=new Bt,Jm=new qe;function eg(i,e,t,n,s,r,a){const o=new Be(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const E=g(M);E===null?p(o,c):E&&E.isColor&&(p(E,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===aa)?(h===void 0&&(h=new ot(new qt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:hs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(xi)),h.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ot(new hi(2,2),new Zn({name:"BackgroundMaterial",uniforms:hs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Rr,ou(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m,dispose:y}}function tg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,F,L,I){let k=!1;const H=u(L,F,D);r!==H&&(r=H,l(r.object)),k=f(S,L,F,I),k&&g(S,L,F,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(S,D,F,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,F){const L=F.wireframe===!0;let I=n[S.id];I===void 0&&(I={},n[S.id]=I);let k=I[D.id];k===void 0&&(k={},I[D.id]=k);let H=k[L];return H===void 0&&(H=d(c()),k[L]=H),H}function d(S){const D=[],F=[],L=[];for(let I=0;I<t;I++)D[I]=0,F[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,D,F,L){const I=r.attributes,k=D.attributes;let H=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){const ae=I[V];let _e=k[V];if(_e===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ae===void 0||ae.attribute!==_e||_e&&ae.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(S,D,F,L){const I={},k=D.attributes;let H=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){let ae=k[V];ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const _e={};_e.attribute=ae,ae&&ae.data&&(_e.data=ae.data),I[V]=_e,H++}r.attributes=I,r.attributesNum=H,r.index=L}function _(){const S=r.newAttributes;for(let D=0,F=S.length;D<F;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const F=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;F[S]=1,L[S]===0&&(i.enableVertexAttribArray(S),L[S]=1),I[S]!==D&&(i.vertexAttribDivisor(S,D),I[S]=D)}function y(){const S=r.newAttributes,D=r.enabledAttributes;for(let F=0,L=D.length;F<L;F++)D[F]!==S[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function M(S,D,F,L,I,k,H){H===!0?i.vertexAttribIPointer(S,D,F,I,k):i.vertexAttribPointer(S,D,F,L,I,k)}function v(S,D,F,L){_();const I=L.attributes,k=F.getAttributes(),H=D.defaultAttributeValues;for(const q in k){const V=k[q];if(V.location>=0){let te=I[q];if(te===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const ae=te.normalized,_e=te.itemSize,De=e.get(te);if(De===void 0)continue;const Ne=De.buffer,st=De.type,Je=De.bytesPerElement,J=st===i.INT||st===i.UNSIGNED_INT||te.gpuType===fc;if(te.isInterleavedBufferAttribute){const ne=te.data,ce=ne.stride,Pe=te.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)p(V.location+be,ne.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let be=0;be<V.locationSize;be++)M(V.location+be,_e/V.locationSize,st,ae,ce*Je,(Pe+_e/V.locationSize*be)*Je,J)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,te.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ne=0;ne<V.locationSize;ne++)M(V.location+ne,_e/V.locationSize,st,ae,_e*Je,_e/V.locationSize*ne*Je,J)}}else if(H!==void 0){const ae=H[q];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}y()}function E(){C();for(const S in n){const D=n[S];for(const F in D){const L=D[F];for(const I in L)h(L[I].object),delete L[I];delete D[F]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const F in D){const L=D[F];for(const I in L)h(L[I].object),delete L[I];delete D[F]}delete n[S.id]}function R(S){for(const D in n){const F=n[D];if(F[S.id]===void 0)continue;const L=F[S.id];for(const I in L)h(L[I].object),delete L[I];delete F[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function ng(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ig(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function sg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new wi,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,M=y*4;let v=p.clippingState||null;c.value=v,v=h(g,d,M,f);for(let E=0;E!==M;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function rg(i){let e=new WeakMap;function t(a,o){return o===yo?a.mapping=os:o===xo&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yo||o===xo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Af(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ns=4,Bl=[.125,.215,.35,.446,.526,.582],Ci=20,qa=new Lc,zl=new Be;let Qa=null,Ka=0,Ya=0,ja=!1;const Ai=(1+Math.sqrt(5))/2,Ji=1/Ai,Vl=[new U(-Ai,Ji,0),new U(Ai,Ji,0),new U(-Ji,0,Ai),new U(Ji,0,Ai),new U(0,Ai,-Ji),new U(0,Ai,Ji),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],ag=new U;class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ag}=r;Qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,Ka,Ya),this._renderer.xr.enabled=ja,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:er,format:pn,colorSpace:$t,depthBuffer:!1},s=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(r)),this._blurMaterial=cg(r,e,t)}return s}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,s,r){const c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zl),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new wn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new ot(new qt,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(zl),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const E=this._cubeSize;Cr(s,v*E,M>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===os||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vl[(s-r-1)%Vl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let y=0;for(let R=0;R<Ci;++R){const C=R/_,b=Math.exp(-C*C/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[s],E=3*v*(s>M-ns?s-M+ns:0),T=4*(this._cubeSize-v);Cr(t,E,T,3*v,2*v),c.setRenderTarget(t),c.render(u,qa)}}function og(i){const e=[],t=[],n=[];let s=i;const r=i-ns+1+Bl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ns?c=Bl[a-i+ns-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,C=T>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];y.set(b,_*g*T),M.set(d,m*g*T);const S=[T,T,T,T,T,T];v.set(S,p*g*T)}const E=new Vt;E.setAttribute("position",new bt(y,_)),E.setAttribute("uv",new bt(M,m)),E.setAttribute("faceIndex",new bt(v,p)),e.push(E),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hl(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cg(i,e,t){const n=new Float32Array(Ci),s=new U(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Gl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Wl(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function lg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yo||c===xo,h=c===os||c===cs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Jo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,v=y.length;M<v;M+=3){const E=y[M+0],T=y[M+1],R=y[M+2];d.push(E,T,T,R,R,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const E=M+0,T=M+1,R=M+2;d.push(E,T,T,R,R,E)}}else return;const m=new(tu(d)?au:ru)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function dg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,e,t){const n=new WeakMap,s=new rt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*T*4*u),C=new nu(R,E,T,u);C.type=En,C.needsUpdate=!0;const b=v*4;for(let D=0;D<u;D++){const F=p[D],L=y[D],I=M[D],k=E*T*4*D;for(let H=0;H<F.count;H++){const q=H*b;g===!0&&(s.fromBufferAttribute(F,H),R[k+q+0]=s.x,R[k+q+1]=s.y,R[k+q+2]=s.z,R[k+q+3]=0),_===!0&&(s.fromBufferAttribute(L,H),R[k+q+4]=s.x,R[k+q+5]=s.y,R[k+q+6]=s.z,R[k+q+7]=0),m===!0&&(s.fromBufferAttribute(I,H),R[k+q+8]=s.x,R[k+q+9]=s.y,R[k+q+10]=s.z,R[k+q+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Ke(E,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Tu=new At,Xl=new gu(1,1),Eu=new nu,wu=new uf,Au=new hu,ql=[],Ql=[],Kl=new Float32Array(16),Yl=new Float32Array(9),jl=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Ct(t,n)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Ct(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Ct(t,n)}}function Sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=eu,r=Xl):r=Tu,t.setTexture2D(e||r,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function Dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Au,s)}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eu,s)}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return yg;case 35674:return xg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Sg;case 35667:case 35671:return Tg;case 35668:case 35672:return Eg;case 35669:case 35673:return wg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}function kg(i,e){i.uniform1fv(this.addr,e)}function Fg(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function Og(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hg(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Wg(i,e){i.uniform2iv(this.addr,e)}function Xg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Qg(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Yg(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function $g(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tu,r[a])}function Zg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wu,r[a])}function Jg(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Au,r[a])}function e9(i,e,t){const n=this.cache,s=e.length,r=la(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eu,r[a])}function t9(i){switch(i){case 5126:return kg;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Qg;case 36294:return Kg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return e9}}class n9{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}}class i9{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t9(t.type)}}class s9{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function $l(i,e){i.seq.push(e),i.map[e.id]=e}function r9(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$l(t,l===void 0?new n9(o,i,e):new i9(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new s9(o),$l(t,u)),t=u}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);r9(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a9=37297;let o9=0;function c9(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Jl=new Qe;function l9(i){nt._getMatrix(Jl,nt.workingColorSpace,i);const e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c9(i.getShaderSource(e),o)}else return r}function h9(i,e){const t=l9(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u9(i,e){let t;switch(e){case bd:t="Linear";break;case Sd:t="Reinhard";break;case Td:t="Cineon";break;case Hh:t="ACESFilmic";break;case wd:t="AgX";break;case Ad:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new U;function d9(){nt.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f9(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function p9(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m9(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Os(i){return i!==""}function th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g9=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(g9,v9)}const _9=new Map;function v9(i,e){let t=Ye[e];if(t===void 0){const n=_9.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const y9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(y9,x9)}function x9(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function M9(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function b9(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S9(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function T9(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case xd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function E9(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w9(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=M9(t),l=b9(t),h=S9(t),u=T9(t),d=E9(t),f=f9(t),g=p9(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==di?u9("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,h9("linearToOutputTexel",t.outputColorSpace),d9(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=ec(a),a=th(a,t),a=nh(a,t),o=ec(o),o=th(o,t),o=nh(o,t),a=ih(a),o=ih(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,v=y+p+o,E=Zl(s,s.VERTEX_SHADER,M),T=Zl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(T)||"",k=F.trim(),H=L.trim(),q=I.trim();let V=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,T);else{const ae=eh(s,E,"vertex"),_e=eh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+ae+`
`+_e)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||q==="")&&(te=!1);te&&(D.diagnostics={runnable:V,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(E),s.deleteShader(T),C=new Kr(s,_),b=m9(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,a9)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o9++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let A9=0;class R9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C9(e),t.set(e,n)),n}}class C9{constructor(e){this.id=A9++,this.code=e,this.usedTimes=0}}function P9(i,e,t,n,s,r,a){const o=new iu,c=new R9,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,F,L){const I=F.fog,k=L.geometry,H=b.isMeshStandardMaterial?F.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),V=q&&q.mapping===aa?q.image.height:null,te=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=ae!==void 0?ae.length:0;let De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let Ne,st,Je,J;if(te){const at=Dn[te];Ne=at.vertexShader,st=at.fragmentShader}else Ne=b.vertexShader,st=b.fragmentShader,c.update(b),Je=c.getVertexShaderID(b),J=c.getFragmentShaderID(b);const ne=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,He=!!b.map,gt=!!b.matcap,N=!!q,ct=!!b.aoMap,Ue=!!b.lightMap,Le=!!b.bumpMap,z=!!b.normalMap,ie=!!b.displacementMap,Q=!!b.emissiveMap,Y=!!b.metalnessMap,ye=!!b.roughnessMap,ue=b.anisotropy>0,w=b.clearcoat>0,x=b.dispersion>0,O=b.iridescence>0,X=b.sheen>0,ee=b.transmission>0,$=ue&&!!b.anisotropyMap,Me=w&&!!b.clearcoatMap,fe=w&&!!b.clearcoatNormalMap,we=w&&!!b.clearcoatRoughnessMap,Ce=O&&!!b.iridescenceMap,le=O&&!!b.iridescenceThicknessMap,ve=X&&!!b.sheenColorMap,ke=X&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,me=!!b.specularColorMap,Ge=!!b.specularIntensityMap,B=ee&&!!b.transmissionMap,de=ee&&!!b.thicknessMap,pe=!!b.gradientMap,Te=!!b.alphaMap,oe=b.alphaTest>0,re=!!b.alphaHash,Re=!!b.extensions;let We=di;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(We=i.toneMapping);const pt={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:st,defines:b.defines,customVertexShaderID:Je,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:gt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:V,aoMap:ct,lightMap:Ue,bumpMap:Le,normalMap:z,displacementMap:d&&ie,emissiveMap:Q,normalMapObjectSpace:z&&b.normalMapType===Dd,normalMapTangentSpace:z&&b.normalMapType===Jh,metalnessMap:Y,roughnessMap:ye,anisotropy:ue,anisotropyMap:$,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:fe,clearcoatRoughnessMap:we,dispersion:x,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:X,sheenColorMap:ve,sheenRoughnessMap:ke,specularMap:Ee,specularColorMap:me,specularIntensityMap:Ge,transmission:ee,transmissionMap:B,thicknessMap:de,gradientMap:pe,opaque:b.transparent===!1&&b.blending===is&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:re,combine:b.combine,mapUv:He&&_(b.map.channel),aoMapUv:ct&&_(b.aoMap.channel),lightMapUv:Ue&&_(b.lightMap.channel),bumpMapUv:Le&&_(b.bumpMap.channel),normalMapUv:z&&_(b.normalMap.channel),displacementMapUv:ie&&_(b.displacementMap.channel),emissiveMapUv:Q&&_(b.emissiveMap.channel),metalnessMapUv:Y&&_(b.metalnessMap.channel),roughnessMapUv:ye&&_(b.roughnessMap.channel),anisotropyMapUv:$&&_(b.anisotropyMap.channel),clearcoatMapUv:Me&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(b.sheenRoughnessMap.channel),specularMapUv:Ee&&_(b.specularMap.channel),specularColorMapUv:me&&_(b.specularColorMap.channel),specularIntensityMapUv:Ge&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:de&&_(b.thicknessMap.channel),alphaMapUv:Te&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(z||ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(He||Te),fog:!!I,useFog:b.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:Q&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let D;if(S){const F=Dn[S];D=cu.clone(F.uniforms)}else D=b.uniforms;return D}function E(b,S){let D;for(let F=0,L=h.length;F<L;F++){const I=h[F];if(I.cacheKey===S){D=I,++D.usedTimes;break}}return D===void 0&&(D=new w9(i,S,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function L9(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I9(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||I9),n.length>1&&n.sort(d||rh),s.length>1&&s.sort(d||rh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function D9(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ah,i.set(n,[a])):s>=r.length?(a=new ah,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function N9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function U9(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k9=0;function F9(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O9(i){const e=new N9,t=U9(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new qe,a=new qe;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,v=0,E=0,T=0,R=0;l.sort(F9);for(let b=0,S=l.length;b<S;b++){const D=l[b],F=D.color,L=D.intensity,I=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*L,u+=F.g*L,d+=F.b*L;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],L);R++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=H,f++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(L),H.distance=I,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[_]=H;const q=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,q.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=q.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=k,v++}_++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(F).multiplyScalar(L),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(L),H.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=R,n.version=k9++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function oh(i){const e=new O9(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function B9(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new oh(i),e.set(s,[o])):r>=a.length?(o=new oh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const z9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V9=`uniform sampler2D shadow_pass;
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
}`;function H9(i,e,t){let n=new Ec;const s=new Ke,r=new Ke,a=new rt,o=new zf({depthPacking:Id}),c=new Vf,l={},h=t.maxTextureSize,u={[$n]:Yt,[Yt]:$n,[dn]:dn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:z9,fragmentShader:V9}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(T,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=p!==qn&&this.type===qn,I=p===qn&&this.type!==qn;for(let k=0,H=T.length;k<H;k++){const q=T[k],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const te=V.getFrameExtents();if(s.multiply(te),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,V.mapSize.y=r.y)),V.map===null||L===!0||I===!0){const _e=this.type!==qn?{minFilter:jt,magFilter:jt}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,_e),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ae=V.getViewportCount();for(let _e=0;_e<ae;_e++){const De=V.getViewport(_e);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),F.viewport(a),V.updateMatrices(q,_e),n=V.getFrustum(),v(R,C,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&y(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function y(T,R){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,C,f,_,null)}function M(T,R,C,b){let S=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=S.uuid,L=R.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let k=I[L];k===void 0&&(k=S.clone(),I[L]=k,R.addEventListener("dispose",E)),S=k}if(S.visible=R.visible,S.wireframe=R.wireframe,b===qn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=C}return S}function v(T,R,C,b,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const L=e.update(T),I=T.material;if(Array.isArray(I)){const k=L.groups;for(let H=0,q=k.length;H<q;H++){const V=k[H],te=I[V.materialIndex];if(te&&te.visible){const ae=M(T,te,b,S);T.onBeforeShadow(i,T,R,C,L,ae,V),i.renderBufferDirect(C,null,L,ae,T,V),T.onAfterShadow(i,T,R,C,L,ae,V)}}}else if(I.visible){const k=M(T,I,b,S);T.onBeforeShadow(i,T,R,C,L,k,null),i.renderBufferDirect(C,null,L,k,T,null),T.onAfterShadow(i,T,R,C,L,k,null)}}const F=T.children;for(let L=0,I=F.length;L<I;L++)v(F[L],R,C,b,S)}function E(T){T.target.removeEventListener("dispose",E);for(const C in l){const b=l[C],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const G9={[uo]:fo,[po]:_o,[mo]:vo,[as]:go,[fo]:uo,[_o]:po,[vo]:mo,[go]:as};function W9(i,e){function t(){let B=!1;const de=new rt;let pe=null;const Te=new rt(0,0,0,0);return{setMask:function(oe){pe!==oe&&!B&&(i.colorMask(oe,oe,oe,oe),pe=oe)},setLocked:function(oe){B=oe},setClear:function(oe,re,Re,We,pt){pt===!0&&(oe*=We,re*=We,Re*=We),de.set(oe,re,Re,We),Te.equals(de)===!1&&(i.clearColor(oe,re,Re,We),Te.copy(de))},reset:function(){B=!1,pe=null,Te.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,pe=null,Te=null,oe=null;return{setReversed:function(re){if(de!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=re;const We=oe;oe=null,this.setClear(We)}},getReversed:function(){return de},setTest:function(re){re?ne(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(re){pe!==re&&!B&&(i.depthMask(re),pe=re)},setFunc:function(re){if(de&&(re=G9[re]),Te!==re){switch(re){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=re}},setLocked:function(re){B=re},setClear:function(re){oe!==re&&(de&&(re=1-re),i.clearDepth(re),oe=re)},reset:function(){B=!1,pe=null,Te=null,oe=null,de=!1}}}function s(){let B=!1,de=null,pe=null,Te=null,oe=null,re=null,Re=null,We=null,pt=null;return{setTest:function(at){B||(at?ne(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(at){de!==at&&!B&&(i.stencilMask(at),de=at)},setFunc:function(at,Bn,Pn){(pe!==at||Te!==Bn||oe!==Pn)&&(i.stencilFunc(at,Bn,Pn),pe=at,Te=Bn,oe=Pn)},setOp:function(at,Bn,Pn){(re!==at||Re!==Bn||We!==Pn)&&(i.stencilOp(at,Bn,Pn),re=at,Re=Bn,We=Pn)},setLocked:function(at){B=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){B=!1,de=null,pe=null,Te=null,oe=null,re=null,Re=null,We=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,E=null,T=null,R=new Be(0,0,0),C=0,b=!1,S=null,D=null,F=null,L=null,I=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=q>=2);let te=null,ae={};const _e=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ne=new rt().fromArray(_e),st=new rt().fromArray(De);function Je(B,de,pe,Te){const oe=new Uint8Array(4),re=i.createTexture();i.bindTexture(B,re),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<pe;Re++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(de+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return re}const J={};J[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(as),Le(!1),z(Xc),ne(i.CULL_FACE),ct(ui);function ne(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ce(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Pe(B,de){return u[B]!==de?(i.bindFramebuffer(B,de),u[B]=de,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function be(B,de){let pe=f,Te=!1;if(B){pe=d.get(de),pe===void 0&&(pe=[],d.set(de,pe));const oe=B.textures;if(pe.length!==oe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Re=oe.length;re<Re;re++)pe[re]=i.COLOR_ATTACHMENT0+re;pe.length=oe.length,Te=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Te=!0);Te&&i.drawBuffers(pe)}function He(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const gt={[Ri]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};gt[rd]=i.MIN,gt[ad]=i.MAX;const N={[od]:i.ZERO,[cd]:i.ONE,[ld]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(B,de,pe,Te,oe,re,Re,We,pt,at){if(B===ui){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),B!==nd){if(B!==m||at!==b){if((p!==Ri||v!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,v=Ri),at)switch(B){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,M=null,E=null,T=null,R.set(0,0,0),C=0,m=B,b=at}return}oe=oe||de,re=re||pe,Re=Re||Te,(de!==p||oe!==v)&&(i.blendEquationSeparate(gt[de],gt[oe]),p=de,v=oe),(pe!==y||Te!==M||re!==E||Re!==T)&&(i.blendFuncSeparate(N[pe],N[Te],N[re],N[Re]),y=pe,M=Te,E=re,T=Re),(We.equals(R)===!1||pt!==C)&&(i.blendColor(We.r,We.g,We.b,pt),R.copy(We),C=pt),m=B,b=!1}function Ue(B,de){B.side===dn?ce(i.CULL_FACE):ne(i.CULL_FACE);let pe=B.side===Yt;de&&(pe=!pe),Le(pe),B.blending===is&&B.transparent===!1?ct(ui):ct(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Te=B.stencilWrite;o.setTest(Te),Te&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function z(B){B!==ed?(ne(i.CULL_FACE),B!==D&&(B===Xc?i.cullFace(i.BACK):B===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),D=B}function ie(B){B!==F&&(H&&i.lineWidth(B),F=B)}function Q(B,de,pe){B?(ne(i.POLYGON_OFFSET_FILL),(L!==de||I!==pe)&&(i.polygonOffset(de,pe),L=de,I=pe)):ce(i.POLYGON_OFFSET_FILL)}function Y(B){B?ne(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function ye(B){B===void 0&&(B=i.TEXTURE0+k-1),te!==B&&(i.activeTexture(B),te=B)}function ue(B,de,pe){pe===void 0&&(te===null?pe=i.TEXTURE0+k-1:pe=te);let Te=ae[pe];Te===void 0&&(Te={type:void 0,texture:void 0},ae[pe]=Te),(Te.type!==B||Te.texture!==de)&&(te!==pe&&(i.activeTexture(pe),te=pe),i.bindTexture(B,de||J[B]),Te.type=B,Te.texture=de)}function w(){const B=ae[te];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(B){Ne.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ne.copy(B))}function ke(B){st.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),st.copy(B))}function Ee(B,de){let pe=l.get(de);pe===void 0&&(pe=new WeakMap,l.set(de,pe));let Te=pe.get(B);Te===void 0&&(Te=i.getUniformBlockIndex(de,B.name),pe.set(B,Te))}function me(B,de){const Te=l.get(de).get(B);c.get(de)!==Te&&(i.uniformBlockBinding(de,Te,B.__bindingPointIndex),c.set(de,Te))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,ae={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,E=null,T=null,R=new Be(0,0,0),C=0,b=!1,S=null,D=null,F=null,L=null,I=null,Ne.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ce,bindFramebuffer:Pe,drawBuffers:be,useProgram:He,setBlending:ct,setMaterial:Ue,setFlipSided:Le,setCullFace:z,setLineWidth:ie,setPolygonOffset:Q,setScissorTest:Y,activeTexture:ye,bindTexture:ue,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ce,texImage3D:le,updateUBOMapping:Ee,uniformBlockBinding:me,texStorage2D:fe,texStorage3D:we,texSubImage2D:X,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Me,scissor:ve,viewport:ke,reset:Ge}}function X9(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):js("canvas")}function _(w,x,O){let X=1;const ee=ue(w);if((ee.width>O||ee.height>O)&&(X=O/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(X*ee.width),Me=Math.floor(X*ee.height);u===void 0&&(u=g($,Me));const fe=x?g($,Me):u;return fe.width=$,fe.height=Me,fe.getContext("2d").drawImage(w,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Me+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,x,O,X,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){const Me=ee?Zr:nt.getTransfer(X);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Me===dt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(w,x){let O;return w?x===null||x===Ni||x===Xs?O=i.DEPTH24_STENCIL8:x===En?O=i.DEPTH32F_STENCIL8:x===Ws&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===Xs?O=i.DEPTH_COMPONENT24:x===En?O=i.DEPTH_COMPONENT32F:x===Ws&&(O=i.DEPTH_COMPONENT16),O}function E(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){const x=w.target;x.removeEventListener("dispose",T),C(x),x.isVideoTexture&&h.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),S(x)}function C(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,X=d.get(O);if(X){const ee=X[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(w),Object.keys(X).length===0&&d.delete(O)}n.remove(w)}function b(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,X=d.get(O);delete X[x.__cacheKey],a.memory.textures--}function S(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ee=0;ee<x.__webglFramebuffer[X].length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[X][ee]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let X=0,ee=O.length;X<ee;X++){const $=n.get(O[X]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(w)}let D=0;function F(){D=0}function L(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function I(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){const O=n.get(w);if(w.isVideoTexture&&Y(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function H(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){J(O,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function q(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){J(O,w,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function V(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){ne(O,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const te={[fi]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},ae={[jt]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},_e={[Nd]:i.NEVER,[zd]:i.ALWAYS,[Ud]:i.LESS,[eu]:i.LEQUAL,[kd]:i.EQUAL,[Bd]:i.GEQUAL,[Fd]:i.GREATER,[Od]:i.NOTEQUAL};function De(w,x){if(x.type===En&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===Gr||x.magFilter===Fs||x.magFilter===Nn||x.minFilter===on||x.minFilter===Gr||x.minFilter===Fs||x.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,te[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,te[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,te[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==Fs&&x.minFilter!==Nn||x.type===En&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ne(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));const X=x.source;let ee=d.get(X);ee===void 0&&(ee={},d.set(X,ee));const $=I(x);if($!==w.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[$].usedTimes++;const Me=ee[w.__cacheKey];Me!==void 0&&(ee[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(x)),w.__cacheKey=$,w.__webglTexture=ee[$].texture}return O}function st(w,x,O){return Math.floor(Math.floor(w/O)/x)}function Je(w,x,O,X){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{$.sort((le,ve)=>le.start-ve.start);let Me=0;for(let le=1;le<$.length;le++){const ve=$[Me],ke=$[le],Ee=ve.start+ve.count,me=st(ke.start,x.width,4),Ge=st(ve.start,x.width,4);ke.start<=Ee+1&&me===Ge&&st(ke.start+ke.count-1,x.width,4)===me?ve.count=Math.max(ve.count,ke.start+ke.count-ve.start):(++Me,$[Me]=ke)}$.length=Me+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let le=0,ve=$.length;le<ve;le++){const ke=$[le],Ee=Math.floor(ke.start/4),me=Math.ceil(ke.count/4),Ge=Ee%x.width,B=Math.floor(Ee/x.width),de=me,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Ge,B,de,pe,O,X,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function J(w,x,O){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const ee=Ne(w,x),$=x.source;t.bindTexture(X,w.__webglTexture,i.TEXTURE0+O);const Me=n.get($);if($.version!==Me.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const fe=nt.getPrimaries(nt.workingColorSpace),we=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),Ce=x.colorSpace===ci||fe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=_(x.image,!1,s.maxTextureSize);le=ye(x,le);const ve=r.convert(x.format,x.colorSpace),ke=r.convert(x.type);let Ee=M(x.internalFormat,ve,ke,x.colorSpace,x.isVideoTexture);De(X,x);let me;const Ge=x.mipmaps,B=x.isVideoTexture!==!0,de=Me.__version===void 0||ee===!0,pe=$.dataReady,Te=E(x,le);if(x.isDepthTexture)Ee=v(x.format===Qs,x.type),de&&(B?t.texStorage2D(i.TEXTURE_2D,1,Ee,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ee,le.width,le.height,0,ve,ke,null));else if(x.isDataTexture)if(Ge.length>0){B&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Ge[0].width,Ge[0].height);for(let oe=0,re=Ge.length;oe<re;oe++)me=Ge[oe],B?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ke,me.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,me.width,me.height,0,ve,ke,me.data);x.generateMipmaps=!1}else B?(de&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,le.width,le.height),pe&&Je(x,le,ve,ke)):t.texImage2D(i.TEXTURE_2D,0,Ee,le.width,le.height,0,ve,ke,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,Ge[0].width,Ge[0].height,le.depth);for(let oe=0,re=Ge.length;oe<re;oe++)if(me=Ge[oe],x.format!==pn)if(ve!==null)if(B){if(pe)if(x.layerUpdates.size>0){const Re=Ol(me.width,me.height,x.format,x.type);for(const We of x.layerUpdates){const pt=me.data.subarray(We*Re/me.data.BYTES_PER_ELEMENT,(We+1)*Re/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,We,me.width,me.height,1,ve,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,le.depth,ve,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,le.depth,ve,ke,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,me.width,me.height,le.depth,0,ve,ke,me.data)}else{B&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Ge[0].width,Ge[0].height);for(let oe=0,re=Ge.length;oe<re;oe++)me=Ge[oe],x.format!==pn?ve!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ke,me.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,me.width,me.height,0,ve,ke,me.data)}else if(x.isDataArrayTexture)if(B){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,le.width,le.height,le.depth),pe)if(x.layerUpdates.size>0){const oe=Ol(le.width,le.height,x.format,x.type);for(const re of x.layerUpdates){const Re=le.data.subarray(re*oe/le.data.BYTES_PER_ELEMENT,(re+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,ve,ke,Re)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,ke,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,le.width,le.height,le.depth,0,ve,ke,le.data);else if(x.isData3DTexture)B?(de&&t.texStorage3D(i.TEXTURE_3D,Te,Ee,le.width,le.height,le.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,ke,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,le.width,le.height,le.depth,0,ve,ke,le.data);else if(x.isFramebufferTexture){if(de)if(B)t.texStorage2D(i.TEXTURE_2D,Te,Ee,le.width,le.height);else{let oe=le.width,re=le.height;for(let Re=0;Re<Te;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ee,oe,re,0,ve,ke,null),oe>>=1,re>>=1}}else if(Ge.length>0){if(B&&de){const oe=ue(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ee,oe.width,oe.height)}for(let oe=0,re=Ge.length;oe<re;oe++)me=Ge[oe],B?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve,ke,me):t.texImage2D(i.TEXTURE_2D,oe,Ee,ve,ke,me);x.generateMipmaps=!1}else if(B){if(de){const oe=ue(le);t.texStorage2D(i.TEXTURE_2D,Te,Ee,oe.width,oe.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,ke,le)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ve,ke,le);m(x)&&p(X),Me.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ne(w,x,O){if(x.image.length!==6)return;const X=Ne(w,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const $=n.get(ee);if(ee.version!==$.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const Me=nt.getPrimaries(nt.workingColorSpace),fe=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),we=x.colorSpace===ci||Me===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!Ce&&!le?ve[re]=_(x.image[re],!0,s.maxCubemapSize):ve[re]=le?x.image[re].image:x.image[re],ve[re]=ye(x,ve[re]);const ke=ve[0],Ee=r.convert(x.format,x.colorSpace),me=r.convert(x.type),Ge=M(x.internalFormat,Ee,me,x.colorSpace),B=x.isVideoTexture!==!0,de=$.__version===void 0||X===!0,pe=ee.dataReady;let Te=E(x,ke);De(i.TEXTURE_CUBE_MAP,x);let oe;if(Ce){B&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,ke.width,ke.height);for(let re=0;re<6;re++){oe=ve[re].mipmaps;for(let Re=0;Re<oe.length;Re++){const We=oe[Re];x.format!==pn?Ee!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,We.width,We.height,Ee,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ge,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,We.width,We.height,Ee,me,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ge,We.width,We.height,0,Ee,me,We.data)}}}else{if(oe=x.mipmaps,B&&de){oe.length>0&&Te++;const re=ue(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(le){B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Ee,me,ve[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,ve[re].width,ve[re].height,0,Ee,me,ve[re].data);for(let Re=0;Re<oe.length;Re++){const pt=oe[Re].image[re].image;B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,pt.width,pt.height,Ee,me,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ge,pt.width,pt.height,0,Ee,me,pt.data)}}else{B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,me,ve[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ee,me,ve[re]);for(let Re=0;Re<oe.length;Re++){const We=oe[Re];B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Ee,me,We.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ge,Ee,me,We.image[re])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ce(w,x,O,X,ee,$){const Me=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),we=M(O.internalFormat,Me,fe,O.colorSpace),Ce=n.get(x),le=n.get(O);if(le.__renderTarget=x,!Ce.__hasExternalTextures){const ve=Math.max(1,x.width>>$),ke=Math.max(1,x.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,we,ve,ke,x.depth,0,Me,fe,null):t.texImage2D(ee,$,we,ve,ke,0,Me,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ee,le.__webglTexture,0,ie(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ee,le.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const X=x.depthTexture,ee=X&&X.isDepthTexture?X.type:null,$=v(x.stencilBuffer,ee),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ie(x);Q(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,w)}else{const X=x.textures;for(let ee=0;ee<X.length;ee++){const $=X[ee],Me=r.convert($.format,$.colorSpace),fe=r.convert($.type),we=M($.internalFormat,Me,fe,$.colorSpace),Ce=ie(x);O&&Q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,we,x.width,x.height):Q(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,we,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,we,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const ee=X.__webglTexture,$=ie(x);if(x.depthTexture.format===qs)Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Qs)Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function He(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?be(x.__webglFramebuffer[0],w):be(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Pe(x.__webglDepthbuffer[X],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Pe(x.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(w,x,O){const X=n.get(w);x!==void 0&&ce(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&He(w)}function N(w){const x=w.texture,O=n.get(w),X=n.get(x);w.addEventListener("dispose",R);const ee=w.textures,$=w.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let we=0;we<x.mipmaps.length;we++)O.__webglFramebuffer[fe][we]=i.createFramebuffer()}else O.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)O.__webglFramebuffer[fe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let fe=0,we=ee.length;fe<we;fe++){const Ce=n.get(ee[fe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Q(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const we=ee[fe];O.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Ce=r.convert(we.format,we.colorSpace),le=r.convert(we.type),ve=M(we.internalFormat,Ce,le,we.colorSpace,w.isXRRenderTarget===!0),ke=ie(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,ve,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),De(i.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)ce(O.__webglFramebuffer[fe][we],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we);else ce(O.__webglFramebuffer[fe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let fe=0,we=ee.length;fe<we;fe++){const Ce=ee[fe],le=n.get(Ce);let ve=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),De(ve,Ce),ce(O.__webglFramebuffer,w,Ce,i.COLOR_ATTACHMENT0+fe,ve,0),m(Ce)&&p(ve)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),De(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)ce(O.__webglFramebuffer[we],w,x,i.COLOR_ATTACHMENT0,fe,we);else ce(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,fe,0);m(x)&&p(fe),t.unbindTexture()}w.depthBuffer&&He(w)}function ct(w){const x=w.textures;for(let O=0,X=x.length;O<X;O++){const ee=x[O];if(m(ee)){const $=y(w),Me=n.get(ee).__webglTexture;t.bindTexture($,Me),p($),t.unbindTexture()}}}const Ue=[],Le=[];function z(w){if(w.samples>0){if(Q(w)===!1){const x=w.textures,O=w.width,X=w.height;let ee=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(w),fe=x.length>1;if(fe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const we=w.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const le=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,ee,i.NEAREST),c===!0&&(Ue.length=0,Le.length=0,Ue.push(i.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ue.push($),Le.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const le=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function Q(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Y(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ye(w,x){const O=w.colorSpace,X=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==$t&&O!==ci&&(nt.getTransfer(O)===dt?(X!==pn||ee!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=gt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Q}function q9(i,e){function t(n,s=ci){let r;const a=nt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===Yh)return i.ALPHA;if(n===jh)return i.RGB;if(n===pn)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===$h)return i.RG;if(n===vc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Qr)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===bo||n===So||n===To)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===Ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===ko||n===Fo||n===Oo||n===Bo||n===zo||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Go||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Qo||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Q9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K9=`
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

}`;class Y9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _u(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:Q9,fragmentShader:K9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j9 extends ms{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Y9,p={},y=t.getContextAttributes();let M=null,v=null;const E=[],T=[],R=new Ke;let C=null;const b=new Kt;b.viewport=new rt;const S=new Kt;S.viewport=new rt;const D=[b,S],F=new cp;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=E[J];return ne===void 0&&(ne=new Oa,E[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=E[J];return ne===void 0&&(ne=new Oa,E[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=E[J];return ne===void 0&&(ne=new Oa,E[J]=ne),ne.getHandSpace()};function k(J){const ne=T.indexOf(J.inputSource);if(ne===-1)return;const ce=E[ne];ce!==void 0&&(ce.update(J.inputSource,J.frame,l||a),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let J=0;J<E.length;J++){const ne=T[J];ne!==null&&(T[J]=null,E[J].disconnect(ne))}L=null,I=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Pe=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?Qs:qs,Pe=y.stencil?Xs:Ni);const He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ui(d.textureWidth,d.textureHeight,{format:pn,type:Fn,depthTexture:new gu(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ui(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let ne=0;ne<J.removed.length;ne++){const ce=J.removed[ne],Pe=T.indexOf(ce);Pe>=0&&(T[Pe]=null,E[Pe].disconnect(ce))}for(let ne=0;ne<J.added.length;ne++){const ce=J.added[ne];let Pe=T.indexOf(ce);if(Pe===-1){for(let He=0;He<E.length;He++)if(He>=T.length){T.push(ce),Pe=He;break}else if(T[He]===null){T[He]=ce,Pe=He;break}if(Pe===-1)break}const be=E[Pe];be&&be.connect(ce)}}const V=new U,te=new U;function ae(J,ne,ce){V.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(ce.matrixWorld);const Pe=V.distanceTo(te),be=ne.projectionMatrix.elements,He=ce.projectionMatrix.elements,gt=be[14]/(be[10]-1),N=be[14]/(be[10]+1),ct=(be[9]+1)/be[5],Ue=(be[9]-1)/be[5],Le=(be[8]-1)/be[0],z=(He[8]+1)/He[0],ie=gt*Le,Q=gt*z,Y=Pe/(-Le+z),ye=Y*-Le;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(Y),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ue=gt+Y,w=N+Y,x=ie-ye,O=Q+(Pe-ye),X=ct*N/w*ue,ee=Ue*N/w*ue;J.projectionMatrix.makePerspective(x,O,X,ee,ue,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,ce=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),F.near=S.near=b.near=ne,F.far=S.far=b.far=ce,(L!==F.near||I!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,I=F.far),F.layers.mask=J.layers.mask|6,b.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Pe=J.parent,be=F.cameras;_e(F,Pe);for(let He=0;He<be.length;He++)_e(be[He],Pe);be.length===2?ae(F,b,S):F.projectionMatrix.copy(b.projectionMatrix),De(J,F,Pe)};function De(J,ne,ce){ce===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let Ne=null;function st(J,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Pe=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let N=0;N<ce.length;N++){const ct=ce[N];let Ue=null;if(f!==null)Ue=f.getViewport(ct);else{const z=u.getViewSubImage(d,ct);Ue=z.viewport,N===0&&(e.setRenderTargetTextures(v,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(v))}let Le=D[N];Le===void 0&&(Le=new Kt,Le.layers.enable(N),Le.viewport=new rt,D[N]=Le),Le.matrix.fromArray(ct.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ct.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),N===0&&(F.matrix.copy(Le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Le)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const N=u.getDepthInformation(ce[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let N=0;N<ce.length;N++){const ct=ce[N].camera;if(ct){let Ue=p[ct];Ue||(Ue=new _u,p[ct]=Ue);const Le=u.getCameraImage(ct);Ue.sourceTexture=Le}}}}for(let ce=0;ce<E.length;ce++){const Pe=T[ce],be=E[ce];Pe!==null&&be!==void 0&&be.update(Pe,ne,l||a)}Ne&&Ne(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Je=new Su;Je.setAnimationLoop(st),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const Mi=new Bt,$9=new qe;function Z9(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4($9.makeRotationFromEuler(Mi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J9(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function l(y,M){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(y,E);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const M=u();y.__bindingPointIndex=M;const v=i.createBuffer(),E=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,R=v.length;T<R;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,T,b,E)===!0){const F=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let k=0;k<L.length;k++){const H=L[k],q=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+I,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,v,E){const T=y.value,R=M+"_"+v;if(E[R]===void 0)return typeof T=="number"||typeof T=="boolean"?E[R]=T:E[R]=T.clone(),!0;{const C=E[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const M=y.uniforms;let v=0;const E=16;for(let R=0,C=M.length;R<C;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,D=b.length;S<D;S++){const F=b[S],L=Array.isArray(F.value)?F.value:[F.value];for(let I=0,k=L.length;I<k;I++){const H=L[I],q=_(H),V=v%E,te=V%q.boundary,ae=V+te;v+=te,ae!==0&&E-ae<q.storage&&(v+=E-ae),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=q.storage}}}const T=v%E;return T>0&&(v+=E-T),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class e_{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=St;let T=0,R=0,C=null,b=-1,S=null;const D=new rt,F=new rt;let L=null;const I=new Be(0);let k=0,H=t.width,q=t.height,V=1,te=null,ae=null;const _e=new rt(0,0,H,q),De=new rt(0,0,H,q);let Ne=!1;const st=new Ec;let Je=!1,J=!1;const ne=new qe,ce=new U,Pe=new rt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function gt(){return C===null?V:1}let N=n;function ct(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const G="webgl2";if(N=ct(G,A),N===null)throw ct(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ue,Le,z,ie,Q,Y,ye,ue,w,x,O,X,ee,$,Me,fe,we,Ce,le,ve,ke,Ee,me,Ge;function B(){Ue=new hg(N),Ue.init(),Ee=new q9(N,Ue),Le=new ig(N,Ue,e,Ee),z=new W9(N,Ue),Le.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),ie=new fg(N),Q=new L9,Y=new X9(N,Ue,z,Q,Le,Ee,ie),ye=new rg(v),ue=new lg(v),w=new yp(N),me=new tg(N,w),x=new ug(N,w,ie,me),O=new mg(N,x,w,ie),le=new pg(N,Le,Y),fe=new sg(Q),X=new P9(v,ye,ue,Ue,Le,me,fe),ee=new Z9(v,Q),$=new D9,Me=new B9(Ue),Ce=new eg(v,ye,ue,z,O,f,c),we=new H9(v,O,Le),Ge=new J9(N,ie,Le,z),ve=new ng(N,Ue,ie),ke=new dg(N,Ue,ie),ie.programs=X.programs,v.capabilities=Le,v.extensions=Ue,v.properties=Q,v.renderLists=$,v.shadowMap=we,v.state=z,v.info=ie}B();const de=new j9(v,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(H,q,!1))},this.getSize=function(A){return A.set(H,q)},this.setSize=function(A,G,K=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,q=G,t.width=Math.floor(A*V),t.height=Math.floor(G*V),K===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(H*V,q*V).floor()},this.setDrawingBufferSize=function(A,G,K){H=A,q=G,V=K,t.width=Math.floor(A*K),t.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,G,K,j){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,G,K,j),z.viewport(D.copy(_e).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,G,K,j){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,G,K,j),z.scissor(F.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){z.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,K=!0){let j=0;if(A){let W=!1;if(C!==null){const he=C.texture.format;W=he===yc||he===vc||he===_c}if(W){const he=C.texture.type,xe=he===Fn||he===Ni||he===Ws||he===Xs||he===pc||he===mc,Ae=Ce.getClearColor(),Se=Ce.getClearAlpha(),Oe=Ae.r,ze=Ae.g,Ie=Ae.b;xe?(g[0]=Oe,g[1]=ze,g[2]=Ie,g[3]=Se,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Oe,_[1]=ze,_[2]=Ie,_[3]=Se,N.clearBufferiv(N.COLOR,0,_))}else j|=N.COLOR_BUFFER_BIT}G&&(j|=N.DEPTH_BUFFER_BIT),K&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),$.dispose(),Me.dispose(),Q.dispose(),ye.dispose(),ue.dispose(),O.dispose(),me.dispose(),Ge.dispose(),X.dispose(),de.dispose(),de.removeEventListener("sessionstart",Pn),de.removeEventListener("sessionend",Bc),pi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=ie.autoReset,G=we.enabled,K=we.autoUpdate,j=we.needsUpdate,W=we.type;B(),ie.autoReset=A,we.enabled=G,we.autoUpdate=K,we.needsUpdate=j,we.type=W}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const G=A.target;G.removeEventListener("dispose",re),Re(G)}function Re(A){We(A),Q.remove(A)}function We(A){const G=Q.get(A).programs;G!==void 0&&(G.forEach(function(K){X.releaseProgram(K)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,K,j,W,he){G===null&&(G=be);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Ae=Ku(A,G,K,j,W);z.setMaterial(j,xe);let Se=K.index,Oe=1;if(j.wireframe===!0){if(Se=x.getWireframeAttribute(K),Se===void 0)return;Oe=2}const ze=K.drawRange,Ie=K.attributes.position;let et=ze.start*Oe,ut=(ze.start+ze.count)*Oe;he!==null&&(et=Math.max(et,he.start*Oe),ut=Math.min(ut,(he.start+he.count)*Oe)),Se!==null?(et=Math.max(et,0),ut=Math.min(ut,Se.count)):Ie!=null&&(et=Math.max(et,0),ut=Math.min(ut,Ie.count));const xt=ut-et;if(xt<0||xt===1/0)return;me.setup(W,j,Ae,K,Se);let mt,ft=ve;if(Se!==null&&(mt=w.get(Se),ft=ke,ft.setIndex(mt)),W.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*gt()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(W.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),z.setLineWidth(Fe*gt()),W.isLineSegments?ft.setMode(N.LINES):W.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else W.isPoints?ft.setMode(N.POINTS):W.isSprite&&ft.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Fe=W._multiDrawStarts,vt=W._multiDrawCounts,it=W._multiDrawCount,tn=Se?w.get(Se).bytesPerElement:1,Fi=Q.get(j).currentProgram.getUniforms();for(let nn=0;nn<it;nn++)Fi.setValue(N,"_gl_DrawID",nn),ft.render(Fe[nn]/tn,vt[nn])}else if(W.isInstancedMesh)ft.renderInstances(et,xt,W.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vt=Math.min(K.instanceCount,Fe);ft.renderInstances(et,xt,vt)}else ft.render(et,xt)};function pt(A,G,K){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,ir(A,G,K),A.side=$n,A.needsUpdate=!0,ir(A,G,K),A.side=dn):ir(A,G,K)}this.compile=function(A,G,K=null){K===null&&(K=A),p=Me.get(K),p.init(G),M.push(p),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==K&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const j=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ae=he[xe];pt(Ae,K,W),j.add(Ae)}else pt(he,K,W),j.add(he)}),p=M.pop(),j},this.compileAsync=function(A,G,K=null){const j=this.compile(A,G,K);return new Promise(W=>{function he(){if(j.forEach(function(xe){Q.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){W(A);return}setTimeout(he,10)}Ue.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let at=null;function Bn(A){at&&at(A)}function Pn(){pi.stop()}function Bc(){pi.start()}const pi=new Su;pi.setAnimationLoop(Bn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){at=A,de.setAnimationLoop(A),A===null?pi.stop():pi.start()},de.addEventListener("sessionstart",Pn),de.addEventListener("sessionend",Bc),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,C),p=Me.get(A,M.length),p.init(G),M.push(p),ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),st.setFromProjectionMatrix(ne,Un,G.reversedDepth),J=this.localClippingEnabled,Je=fe.init(this.clippingPlanes,J),m=$.get(A,y.length),m.init(),y.push(m),de.enabled===!0&&de.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&ma(he,G,-1/0,v.sortObjects)}ma(A,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,ae),He=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,He&&Ce.addToRenderList(m,A),this.info.render.frame++,Je===!0&&fe.beginShadows();const K=p.state.shadowsArray;we.render(K,A,G),Je===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const he=G.cameras;if(W.length>0)for(let xe=0,Ae=he.length;xe<Ae;xe++){const Se=he[xe];Vc(j,W,A,Se)}He&&Ce.render(A);for(let xe=0,Ae=he.length;xe<Ae;xe++){const Se=he[xe];zc(m,A,Se,Se.viewport)}}else W.length>0&&Vc(j,W,A,G),He&&Ce.render(A),zc(m,A,G);C!==null&&R===0&&(Y.updateMultisampleRenderTarget(C),Y.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,G),me.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Je===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ma(A,G,K,j){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||st.intersectsSprite(A)){j&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const xe=O.update(A),Ae=A.material;Ae.visible&&m.push(A,xe,Ae,K,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||st.intersectsObject(A))){const xe=O.update(A),Ae=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Ae)){const Se=xe.groups;for(let Oe=0,ze=Se.length;Oe<ze;Oe++){const Ie=Se[Oe],et=Ae[Ie.materialIndex];et&&et.visible&&m.push(A,xe,et,K,Pe.z,Ie)}}else Ae.visible&&m.push(A,xe,Ae,K,Pe.z,null)}}const he=A.children;for(let xe=0,Ae=he.length;xe<Ae;xe++)ma(he[xe],G,K,j)}function zc(A,G,K,j){const W=A.opaque,he=A.transmissive,xe=A.transparent;p.setupLightsView(K),Je===!0&&fe.setGlobalState(v.clippingPlanes,K),j&&z.viewport(D.copy(j)),W.length>0&&nr(W,G,K),he.length>0&&nr(he,G,K),xe.length>0&&nr(xe,G,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Vc(A,G,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ui(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?er:Fn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const he=p.state.transmissionRenderTarget[j.id],xe=j.viewport||D;he.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const Ae=v.getRenderTarget(),Se=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(he),v.getClearColor(I),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),He&&Ce.render(K);const ze=v.toneMapping;v.toneMapping=di;const Ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Je===!0&&fe.setGlobalState(v.clippingPlanes,j),nr(A,K,j),Y.updateMultisampleRenderTarget(he),Y.updateRenderTargetMipmap(he),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ut=0,xt=G.length;ut<xt;ut++){const mt=G[ut],ft=mt.object,Fe=mt.geometry,vt=mt.material,it=mt.group;if(vt.side===dn&&ft.layers.test(j.layers)){const tn=vt.side;vt.side=Yt,vt.needsUpdate=!0,Hc(ft,K,j,Fe,vt,it),vt.side=tn,vt.needsUpdate=!0,et=!0}}et===!0&&(Y.updateMultisampleRenderTarget(he),Y.updateRenderTargetMipmap(he))}v.setRenderTarget(Ae,Se,Oe),v.setClearColor(I,k),Ie!==void 0&&(j.viewport=Ie),v.toneMapping=ze}function nr(A,G,K){const j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,he=A.length;W<he;W++){const xe=A[W],Ae=xe.object,Se=xe.geometry,Oe=xe.group;let ze=xe.material;ze.allowOverride===!0&&j!==null&&(ze=j),Ae.layers.test(K.layers)&&Hc(Ae,G,K,Se,ze,Oe)}}function Hc(A,G,K,j,W,he){A.onBeforeRender(v,G,K,j,W,he),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,G,K,j,A,he),W.transparent===!0&&W.side===dn&&W.forceSinglePass===!1?(W.side=Yt,W.needsUpdate=!0,v.renderBufferDirect(K,G,j,W,A,he),W.side=$n,W.needsUpdate=!0,v.renderBufferDirect(K,G,j,W,A,he),W.side=dn):v.renderBufferDirect(K,G,j,W,A,he),A.onAfterRender(v,G,K,j,W,he)}function ir(A,G,K){G.isScene!==!0&&(G=be);const j=Q.get(A),W=p.state.lights,he=p.state.shadowsArray,xe=W.state.version,Ae=X.getParameters(A,W.state,he,G,K),Se=X.getProgramCacheKey(Ae);let Oe=j.programs;j.environment=A.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(A.isMeshStandardMaterial?ue:ye).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",re),Oe=new Map,j.programs=Oe);let ze=Oe.get(Se);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===xe)return Wc(A,Ae),ze}else Ae.uniforms=X.getUniforms(A),A.onBeforeCompile(Ae,v),ze=X.acquireProgram(Ae,Se),Oe.set(Se,ze),j.uniforms=Ae.uniforms;const Ie=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=fe.uniform),Wc(A,Ae),j.needsLights=ju(A),j.lightsStateVersion=xe,j.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Gc(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Wc(A,G){const K=Q.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ku(A,G,K,j,W){G.isScene!==!0&&(G=be),Y.resetTextureUnits();const he=G.fog,xe=j.isMeshStandardMaterial?G.environment:null,Ae=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$t,Se=(j.isMeshStandardMaterial?ue:ye).get(j.envMap||xe),Oe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,ut=!!K.morphAttributes.color;let xt=di;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=v.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=mt!==void 0?mt.length:0,Fe=Q.get(j),vt=p.state.lights;if(Je===!0&&(J===!0||A!==S)){const Ht=A===S&&j.id===b;fe.setState(j,A,Ht)}let it=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vt.state.version||Fe.outputColorSpace!==Ae||W.isBatchedMesh&&Fe.batching===!1||!W.isBatchedMesh&&Fe.batching===!0||W.isBatchedMesh&&Fe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Fe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||W.isInstancedMesh&&Fe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Fe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Fe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Fe.instancingMorph===!1&&W.morphTexture!==null||Fe.envMap!==Se||j.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ze||Fe.morphTargets!==Ie||Fe.morphNormals!==et||Fe.morphColors!==ut||Fe.toneMapping!==xt||Fe.morphTargetsCount!==ft)&&(it=!0):(it=!0,Fe.__version=j.version);let tn=Fe.currentProgram;it===!0&&(tn=ir(j,G,W));let Fi=!1,nn=!1,Ms=!1;const yt=tn.getUniforms(),cn=Fe.uniforms;if(z.useProgram(tn.program)&&(Fi=!0,nn=!0,Ms=!0),j.id!==b&&(b=j.id,nn=!0),Fi||S!==A){z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(N,"projectionMatrix",A.projectionMatrix),yt.setValue(N,"viewMatrix",A.matrixWorldInverse);const Zt=yt.map.cameraPosition;Zt!==void 0&&Zt.setValue(N,ce.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,nn=!0,Ms=!0)}if(W.isSkinnedMesh){yt.setOptional(N,W,"bindMatrix"),yt.setOptional(N,W,"bindMatrixInverse");const Ht=W.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),yt.setValue(N,"boneTexture",Ht.boneTexture,Y))}W.isBatchedMesh&&(yt.setOptional(N,W,"batchingTexture"),yt.setValue(N,"batchingTexture",W._matricesTexture,Y),yt.setOptional(N,W,"batchingIdTexture"),yt.setValue(N,"batchingIdTexture",W._indirectTexture,Y),yt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(N,"batchingColorTexture",W._colorsTexture,Y));const ln=K.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&le.update(W,K,tn),(nn||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,yt.setValue(N,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(cn.envMap.value=Se,cn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(cn.envMapIntensity.value=G.environmentIntensity),nn&&(yt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Yu(cn,Ms),he&&j.fog===!0&&ee.refreshFogUniforms(cn,he),ee.refreshMaterialUniforms(cn,j,V,q,p.state.transmissionRenderTarget[A.id]),Kr.upload(N,Gc(Fe),cn,Y)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Kr.upload(N,Gc(Fe),cn,Y),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(N,"center",W.center),yt.setValue(N,"modelViewMatrix",W.modelViewMatrix),yt.setValue(N,"normalMatrix",W.normalMatrix),yt.setValue(N,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let Zt=0,ga=Ht.length;Zt<ga;Zt++){const mi=Ht[Zt];Ge.update(mi,tn),Ge.bind(mi,tn)}}return tn}function Yu(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,G,K){const j=Q.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Q.get(A.texture).__webglTexture=G,Q.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const K=Q.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const $u=N.createFramebuffer();this.setRenderTarget=function(A,G=0,K=0){C=A,T=G,R=K;let j=!0,W=null,he=!1,xe=!1;if(A){const Se=Q.get(A);if(Se.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Se.__webglFramebuffer===void 0)Y.setupRenderTarget(A);else if(Se.__hasExternalTextures)Y.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Se.__boundDepthTexture!==Ie){if(Ie!==null&&Q.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const ze=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?W=ze[G][K]:W=ze[G],he=!0):A.samples>0&&Y.useMultisampledRTT(A)===!1?W=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[K]:W=ze,D.copy(A.viewport),F.copy(A.scissor),L=A.scissorTest}else D.copy(_e).multiplyScalar(V).floor(),F.copy(De).multiplyScalar(V).floor(),L=Ne;if(K!==0&&(W=$u),z.bindFramebuffer(N.FRAMEBUFFER,W)&&j&&z.drawBuffers(A,W),z.viewport(D),z.scissor(F),z.setScissorTest(L),he){const Se=Q.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se.__webglTexture,K)}else if(xe){const Se=G;for(let Oe=0;Oe<A.textures.length;Oe++){const ze=Q.get(A.textures[Oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,K,Se)}}else if(A!==null&&K!==0){const Se=Q.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(A,G,K,j,W,he,xe,Ae=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){z.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Oe=A.textures[Ae],ze=Oe.format,Ie=Oe.type;if(!Le.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-j&&K>=0&&K<=A.height-W&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(G,K,j,W,Ee.convert(ze),Ee.convert(Ie),he))}finally{const Oe=C!==null?Q.get(C).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,G,K,j,W,he,xe,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(G>=0&&G<=A.width-j&&K>=0&&K<=A.height-W){z.bindFramebuffer(N.FRAMEBUFFER,Se);const Oe=A.textures[Ae],ze=Oe.format,Ie=Oe.type;if(!Le.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(G,K,j,W,Ee.convert(ze),Ee.convert(Ie),0);const ut=C!==null?Q.get(C).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,ut);const xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rf(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(et),N.deleteSync(xt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,K=0){const j=Math.pow(2,-K),W=Math.floor(A.image.width*j),he=Math.floor(A.image.height*j),xe=G!==null?G.x:0,Ae=G!==null?G.y:0;Y.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,xe,Ae,W,he),z.unbindTexture()};const Zu=N.createFramebuffer(),Ju=N.createFramebuffer();this.copyTextureToTexture=function(A,G,K=null,j=null,W=0,he=null){he===null&&(W!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=W,W=0):he=0);let xe,Ae,Se,Oe,ze,Ie,et,ut,xt;const mt=A.isCompressedTexture?A.mipmaps[he]:A.image;if(K!==null)xe=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Se=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,ze=K.min.y,Ie=K.isBox3?K.min.z:0;else{const ln=Math.pow(2,-W);xe=Math.floor(mt.width*ln),Ae=Math.floor(mt.height*ln),A.isDataArrayTexture?Se=mt.depth:A.isData3DTexture?Se=Math.floor(mt.depth*ln):Se=1,Oe=0,ze=0,Ie=0}j!==null?(et=j.x,ut=j.y,xt=j.z):(et=0,ut=0,xt=0);const ft=Ee.convert(G.format),Fe=Ee.convert(G.type);let vt;G.isData3DTexture?(Y.setTexture3D(G,0),vt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Y.setTexture2DArray(G,0),vt=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(G,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const it=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fi=N.getParameter(N.UNPACK_SKIP_PIXELS),nn=N.getParameter(N.UNPACK_SKIP_ROWS),Ms=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const yt=A.isDataArrayTexture||A.isData3DTexture,cn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const ln=Q.get(A),Ht=Q.get(G),Zt=Q.get(ln.__renderTarget),ga=Q.get(Ht.__renderTarget);z.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let mi=0;mi<Se;mi++)yt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,W,Ie+mi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,he,xt+mi)),N.blitFramebuffer(Oe,ze,xe,Ae,et,ut,xe,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST);z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Q.has(A)){const ln=Q.get(A),Ht=Q.get(G);z.bindFramebuffer(N.READ_FRAMEBUFFER,Zu),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ju);for(let Zt=0;Zt<Se;Zt++)yt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ln.__webglTexture,W,Ie+Zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ln.__webglTexture,W),cn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,he,xt+Zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ht.__webglTexture,he),W!==0?N.blitFramebuffer(Oe,ze,xe,Ae,et,ut,xe,Ae,N.COLOR_BUFFER_BIT,N.NEAREST):cn?N.copyTexSubImage3D(vt,he,et,ut,xt+Zt,Oe,ze,xe,Ae):N.copyTexSubImage2D(vt,he,et,ut,Oe,ze,xe,Ae);z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else cn?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(vt,he,et,ut,xt,xe,Ae,Se,ft,Fe,mt.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,he,et,ut,xt,xe,Ae,Se,ft,mt.data):N.texSubImage3D(vt,he,et,ut,xt,xe,Ae,Se,ft,Fe,mt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,et,ut,xe,Ae,ft,Fe,mt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,et,ut,mt.width,mt.height,ft,mt.data):N.texSubImage2D(N.TEXTURE_2D,he,et,ut,xe,Ae,ft,Fe,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,it),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fi),N.pixelStorei(N.UNPACK_SKIP_ROWS,nn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ms),he===0&&G.generateMipmaps&&N.generateMipmap(vt),z.unbindTexture()},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&Y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Y.setTextureCube(A,0):A.isData3DTexture?Y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Y.setTexture2DArray(A,0):Y.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Zs extends ot{constructor(){const e=Zs.SkyShader,t=new Zn({name:e.name,uniforms:cu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Yt,depthWrite:!1});super(new qt(1,1,1),t),this.isSky=!0}}Zs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};const Za={low:{dpr:1,shadow:0,msaa:!1,maxCars:10,crowd:2500,far:1500},medium:{dpr:1.25,shadow:1024,msaa:!0,maxCars:20,crowd:6e3,far:2400},high:{dpr:1.5,shadow:2048,msaa:!0,maxCars:40,crowd:12e3,far:3200},ultra:{dpr:2,shadow:4096,msaa:!0,maxCars:40,crowd:2e4,far:4e3}},ch={day:{elev:48,azim:215,turb:3,ray:1.1,mie:.004,g:.8,exposure:.62,sun:3.2,sunCol:16773596,hemiSky:12375807,hemiGround:7043658,hemi:.55,fog:12176870,fogD:18e-5,lamps:!1},sunset:{elev:4.5,azim:255,turb:6,ray:1.6,mie:.006,g:.85,exposure:.55,sun:2.6,sunCol:16751178,hemiSky:16751979,hemiGround:3815978,hemi:.42,fog:14719602,fogD:26e-5,lamps:!0},night:{elev:-9,azim:215,turb:1,ray:.2,mie:.001,g:.7,exposure:.5,sun:0,sunCol:9414911,hemiSky:2371930,hemiGround:724242,hemi:.5,fog:659488,fogD:32e-5,lamps:!0}};class t_{constructor(e,t={}){this.canvas=e,this.quality=t.quality||"high";const n=Za[this.quality];this.renderer=new e_({canvas:e,antialias:n.msaa,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=St,this.renderer.toneMapping=Hh,this.renderer.shadowMap.enabled=n.shadow>0,this.renderer.shadowMap.type=zh,this.scene=new yl,this.camera=new Kt(62,16/9,.3,n.far),this.sky=new Zs,this.sky.scale.setScalar(2e4),this.scene.add(this.sky),this.sunDir=new U,this.sun=new bu(16777215,3),this.sun.castShadow=n.shadow>0,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new tp(12375807,7043658,.5),this.scene.add(this.hemi),this.scene.fog=new bc(12176870,2e-4),this.pmrem=new Jo(this.renderer),this.timeKey="day",this.envRT=null,this.setQuality(this.quality),this.resize(),this.setTime("day"),addEventListener("resize",()=>this.resize())}setQuality(e){const t=Za[e]||Za.high;if(this.quality=e,this.q=t,this.renderer.shadowMap.enabled=t.shadow>0,this.sun.castShadow=t.shadow>0,t.shadow){const n=this.sun.shadow;n.mapSize.set(t.shadow,t.shadow);const s=90;n.camera.left=-s,n.camera.right=s,n.camera.top=s,n.camera.bottom=-s,n.camera.near=10,n.camera.far=500,n.bias=-25e-5,n.normalBias=.35,n.map&&(n.map.dispose(),n.map=null)}this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.resize(),this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.camera.fov=this.camera.aspect<1?78:this.baseFov||62,this.camera.updateProjectionMatrix()}setTime(e,t="clear"){const n=ch[e]||ch.day;this.timeKey=e,this.weather=t;const s=this.sky.material.uniforms,r=t==="overcast"||t==="rain";s.turbidity.value=r?14:n.turb,s.rayleigh.value=r?.6:n.ray,s.mieCoefficient.value=r?.02:n.mie,s.mieDirectionalG.value=n.g;const a=Kn.degToRad(90-n.elev),o=Kn.degToRad(n.azim);this.sunDir.setFromSphericalCoords(1,a,o),s.sunPosition.value.copy(this.sunDir),this.sun.color.set(n.sunCol),this.sun.intensity=n.sun*(r?.35:1),e==="night"&&(this.sunDir.set(-.4,.8,.45).normalize(),this.sun.intensity=.9),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemi*(r?1.25:1),this.renderer.toneMappingExposure=n.exposure*(r?1.15:1),this.scene.fog.color.set(r?10134704:n.fog),this.scene.fog.density=n.fogD*(r?2.2:1),this.lampsOn=n.lamps,this.bakeEnv(),this.onTime&&this.onTime(e,t)}bakeEnv(){const e=new yl,t=new Zs;t.scale.setScalar(2e4),e.add(t);for(const s of Object.keys(this.sky.material.uniforms))if(t.material.uniforms[s]&&this.sky.material.uniforms[s].value!==void 0){const r=this.sky.material.uniforms[s].value;t.material.uniforms[s].value=r.clone?r.clone():r}const n=this.envRT;this.envRT=this.pmrem.fromScene(e,0,1,5e4),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=this.timeKey==="night"?.25:.9,n&&n.dispose(),t.material.dispose(),t.geometry.dispose()}followSun(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,220),this.sun.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}const Ru={straight:1e3,radius:300,halfW:11,apron:8,wallH:1.3,bulge:34,maxBank:Kn.degToRad(30),frontBank:Kn.degToRad(7),backBank:Kn.degToRad(3),infieldLimit:70};function Lr(i,e,t=!0){const n=i.length,s=new Float64Array(n),r=Math.ceil(e*3),a=[];let o=0;for(let c=-r;c<=r;c++){const l=Math.exp(-(c*c)/(2*e*e));a.push(l),o+=l}for(let c=0;c<n;c++){let l=0;for(let h=-r;h<=r;h++)l+=i[(c+h+n*8)%n]*a[h+r];s[c]=l/o}return s}function n_(i=Ru){const{straight:e,radius:t,bulge:n}=i,s=[],r=1,a=e/2,o=(I,k,H,q)=>{const V=Math.hypot(H-I,q-k),te=Math.max(1,Math.round(V/r));for(let ae=0;ae<te;ae++)s.push([I+(H-I)*ae/te,k+(q-k)*ae/te])},c=(I,k,H,q)=>{const V=Math.abs(q-H)*t,te=Math.max(2,Math.round(V/r));for(let ae=0;ae<te;ae++){const _e=H+(q-H)*ae/te;s.push([I+t*Math.cos(_e),k+t*Math.sin(_e)])}};o(0,t,a,t),c(a,0,Math.PI/2,-Math.PI/2),o(a,-t,-a,-t),c(-a,0,-Math.PI/2,-3*Math.PI/2),o(-a,t,0,t);for(const I of s)if(I[1]>t-1&&Math.abs(I[0])<a){const k=(I[0]+a)/(2*a);I[1]+=n*Math.pow(Math.sin(Math.PI*k),2)}const l=s.length,h=Float64Array.from(s,I=>I[0]),u=Float64Array.from(s,I=>I[1]),d=Lr(h,70),f=Lr(u,70),g=new Float64Array(l+1);for(let I=0;I<l;I++){const k=(I+1)%l;g[I+1]=g[I]+Math.hypot(d[k]-d[I],f[k]-f[I])}const _=g[l],m=Math.round(_/3.8),p=_/m,y=new Float64Array(m),M=new Float64Array(m);let v=0;for(let I=0;I<m;I++){const k=I*p;for(;g[v+1]<k;)v++;const H=(k-g[v])/(g[v+1]-g[v]),q=(v+1)%l;y[I]=d[v]+(d[q]-d[v])*H,M[I]=f[v]+(f[q]-f[v])*H}const E=new Float64Array(m),T=new Float64Array(m),R=new Float64Array(m);for(let I=0;I<m;I++){const k=(I+m-1)%m,H=(I+1)%m,q=y[H]-y[k],V=M[H]-M[k],te=Math.hypot(q,V);E[I]=q/te,T[I]=V/te}for(let I=0;I<m;I++){const k=(I+m-1)%m,H=(I+1)%m,q=E[k]*T[H]-T[k]*E[H];R[I]=-Math.asin(Kn.clamp(q,-1,1))/(2*p)}const C=Lr(R,6),b=.85/t,S=new Float64Array(m);for(let I=0;I<m;I++){const k=Kn.clamp(C[I]/b,0,1),H=k*k*(3-2*k),V=(M[I]>t*.6?1:0)?i.frontBank:i.backBank;S[I]=V+(i.maxBank-V)*H}const D=Lr(S,22),F=new Float64Array(m);for(let I=0;I<m;I++)F[I]=i.halfW*Math.sin(D[I]);const L=new Float64Array(m);for(let I=0;I<m;I++)L[I]=I*p;return{N:m,ds:p,length:_,px:y,pz:M,tx:E,tz:T,k:C,bank:D,yc:F,s:L,cfg:i}}class i_{constructor(e=Ru){this.cfg=e,this.d=n_(e),this.N=this.d.N,this.length=this.d.length,this.ds=this.d.ds}wrapS(e){const t=this.length;return(e%t+t)%t}idx(e){return Math.floor(this.wrapS(e)/this.ds)%this.N}at(e){const t=this.d,n=this.wrapS(e)/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,a=n-Math.floor(n),o=t.px[s]+(t.px[r]-t.px[s])*a,c=t.pz[s]+(t.pz[r]-t.pz[s])*a;let l=t.tx[s]+(t.tx[r]-t.tx[s])*a,h=t.tz[s]+(t.tz[r]-t.tz[s])*a;const u=Math.hypot(l,h);return l/=u,h/=u,{x:o,z:c,tx:l,tz:h,rx:-h,rz:l,bank:t.bank[s]+(t.bank[r]-t.bank[s])*a,yc:t.yc[s]+(t.yc[r]-t.yc[s])*a,k:t.k[s],i:s}}point(e,t,n={}){const s=this.at(e),r=this.cfg.halfW,a=Math.cos(s.bank),o=Math.sin(s.bank);return t>=-r?(n.x=s.x+s.rx*t*a,n.z=s.z+s.rz*t*a,n.y=s.yc+t*o):(n.x=s.x+s.rx*(-r*a+(t+r)),n.z=s.z+s.rz*(-r*a+(t+r)),n.y=0),n.heading=Math.atan2(s.tx,s.tz),n.bank=s.bank,n}query(e,t,n,s={}){const r=this.d,a=this.N;let o=1e18,c=n|0;const l=n===void 0?a:24;for(let C=-l;C<=l;C++){const b=((n|0)+C+a*4)%a,S=e-r.px[b],D=t-r.pz[b],F=S*S+D*D;F<o&&(o=F,c=b)}if(n!==void 0){if(o>2500)for(let C=0;C<a;C++){const b=e-r.px[C],S=t-r.pz[C],D=b*b+S*S;D<o&&(o=D,c=C)}}let h=c,u=(c+1)%a,d=r.px[u]-r.px[h],f=r.pz[u]-r.pz[h],g=((e-r.px[h])*d+(t-r.pz[h])*f)/(d*d+f*f);g<0&&(u=h,h=(c+a-1)%a,d=r.px[u]-r.px[h],f=r.pz[u]-r.pz[h],g=((e-r.px[h])*d+(t-r.pz[h])*f)/(d*d+f*f)),g=Kn.clamp(g,0,1);const _=this.wrapS((h===a-1&&u===0?a-1+g:h+g)*this.ds),m=this.at(_),p=e-m.x,y=t-m.z,M=p*m.rx+y*m.rz,v=this.cfg.halfW,E=Math.cos(m.bank),T=Math.sin(m.bank),R=M>=-v*E?M/E:M+v*E-v;return s.i=c,s.s=_,s.u=R,s.lat=M,s.bank=m.bank,s.tx=m.tx,s.tz=m.tz,s.k=m.k,s.rx=m.rx,s.rz=m.rz,s.surface=R>v+.4?"wall":R>=-v?"track":R>=-v-this.cfg.apron?"apron":"grass",s.y=R>=-v?m.yc+Math.min(R,v+.4)*T:0,s}}function bi(i,e,t={}){const{N:n}=i,{uvU:s=12,uvV:r=12,yOff:a=0,color:o=null,wrapUV:c=!0,sFrom:l=0,sTo:h=n,yFn:u=null,closed:d=!0}=t,f=e.length,g=h-l+(d&&l===0&&h===n?1:0),_=new Float32Array(f*g*3),m=new Float32Array(f*g*2),p=o?new Float32Array(f*g*3):null,y={};for(let E=0;E<g;E++){const T=l+E,R=T%n*i.ds+(T>=n?i.length:0);for(let C=0;C<f;C++){i.point(T%n*i.ds,e[C],y);const b=E*f+C;if(_[b*3]=y.x,_[b*3+1]=y.y+a+(u?u(e[C],T%n):0),_[b*3+2]=y.z,m[b*2]=e[C]/s,m[b*2+1]=T*i.ds/r,p){const S=o(e[C],T%n,R);p[b*3]=S[0],p[b*3+1]=S[1],p[b*3+2]=S[2]}}}const M=[];for(let E=0;E<g-1;E++)for(let T=0;T<f-1;T++){const R=E*f+T,C=R+1,b=(E+1)*f+T,S=b+1;M.push(R,C,b,C,S,b)}const v=new Vt;return v.setAttribute("position",new bt(_,3)),v.setAttribute("uv",new bt(m,2)),p&&v.setAttribute("color",new bt(p,3)),v.setIndex(M),v.computeVertexNormals(),v}const Xe=(i,e,t)=>i<e?e:i>t?t:i,Ir=(i,e,t)=>i+(e-i)*t,s_=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function Uc(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const tc=["hood","roof","door","quarter","trunk","bumper"],Yr={hood:"Hood",roof:"Roof",door:"Doors",quarter:"Rear quarters",trunk:"Trunk",bumper:"Front bumper"},ha=[{id:"dustyfork",name:"Dusty Fork Diner",tier:1,payout:120,slots:["door","quarter","bumper"],colors:["#f2b134","#7a2e1b"]},{id:"greaseline",name:"Greaseline Garage",tier:1,payout:140,slots:["door","trunk","bumper"],colors:["#e8e8e8","#d1342c"]},{id:"cornerbolt",name:"Corner Bolt Supply",tier:1,payout:150,slots:["quarter","door","trunk"],colors:["#2f6fdb","#f4f4f4"]},{id:"vantafuel",name:"Vanta Fuel",tier:2,payout:320,slots:["hood","door","trunk"],colors:["#13c28a","#0b2a24"]},{id:"halo",name:"Halo Energy",tier:2,payout:360,slots:["hood","roof","quarter"],colors:["#ffd400","#1a1a1a"]},{id:"ironbark",name:"Ironbark Tools",tier:2,payout:340,slots:["door","quarter","hood"],colors:["#e2552c","#222"]},{id:"meridian",name:"Meridian Mobile",tier:3,payout:720,slots:["hood","roof","door"],colors:["#00a3e0","#ffffff"]},{id:"stratus",name:"Stratus Air",tier:3,payout:760,slots:["hood","trunk","quarter"],colors:["#5b4bd6","#ffffff"]},{id:"kestrel",name:"Kestrel Tires",tier:3,payout:700,slots:["door","bumper","quarter"],colors:["#111","#ffcf1b"]},{id:"apexgrid",name:"Apex Grid Power",tier:4,payout:1500,slots:["hood","roof","door"],colors:["#ff2d55","#0d0d0d"]},{id:"northstar",name:"Northstar Motors",tier:4,payout:1600,slots:["hood","door","trunk"],colors:["#c0c6cc","#0a2a66"]}],xs=i=>ha.find(e=>e.id===i)||null,r_={},a_=r_&&"./"||"./",o_=new Mu;function es(i,e=!0,t=!1,n=8){const s=o_.load(a_+"assets/tex/"+i);return e&&(s.wrapS=s.wrapT=fi),s.anisotropy=n,t&&(s.colorSpace=St),s}function Dr(i,e,t,n=!1,s=!0){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new mu(r);return n&&(a.wrapS=a.wrapT=fi),s&&(a.colorSpace=St),a.anisotropy=8,a}function c_(i,e,t=()=>{}){const n=new mn;n.name="track";const s=Uc(2026),r=i.cfg,a=r.halfW,o=i.N,c=8,l=es("asphalt_track_col.jpg",!0,!0,c),h=es("asphalt_track_nrm.jpg",!0,!1,c),u=es("asphalt_track_rgh.jpg",!0,!1,c),d=new It({map:l,normalMap:h,roughnessMap:u,roughness:1,metalness:0,vertexColors:!0,normalScale:new Ke(.8,.8)}),f=es("sparse_grass_col.jpg",!0,!0,c),g=es("sparse_grass_nrm.jpg"),_=es("sparse_grass_rgh.jpg");for(const z of[f,g,_])z.repeat.set(220,220);const m=new It({map:f,normalMap:g,roughnessMap:_,color:12175258,roughness:1}),p=Dr(512,128,(z,ie,Q)=>{z.fillStyle="#b9b9b4",z.fillRect(0,0,ie,Q);for(let Y=0;Y<2600;Y++)z.fillStyle=`rgba(${90+s()*70|0},${90+s()*70|0},${88+s()*70|0},0.12)`,z.fillRect(s()*ie,s()*Q,2+s()*3,1+s()*3);z.fillStyle="rgba(255,255,255,0.9)",z.fillRect(0,Q*.28,ie,Q*.2),z.fillStyle="rgba(0,0,0,0.18)",z.fillRect(0,Q*.78,ie,Q*.22),z.fillStyle="rgba(0,0,0,0.35)";for(let Y=0;Y<ie;Y+=128)z.fillRect(Y,0,2,Q)},!0);new It({map:p,roughness:.85,metalness:0});const y=new It({color:9408911,roughness:.95}),M=(z,ie={})=>new It(Object.assign({color:z,roughness:.55,metalness:.05},ie)),v=[];for(let z=0;z<=16;z++)v.push(-a+2*a*z/16);const E=(z,ie,Q)=>{const Y=.5+.5*Math.sin(Q*.011+1.3)*Math.sin(Q*.0037),ye=Math.exp(-Math.pow((z+3.5)/3.2,2))*.28,ue=Math.exp(-Math.pow((z-4.2)/3,2))*.22,w=Math.exp(-Math.pow((z-a)/1.4,2))*.14+Math.exp(-Math.pow((z+a)/1.4,2))*.08,x=.78+.18*Y,O=Math.max(.3,x-ye-ue-w);return[O,O,O*1.02]},T=new ot(bi(i,v,{uvU:7,uvV:7,color:E}),d);T.receiveShadow=!0,T.name="road",n.add(T);const R=[];for(let z=0;z<=4;z++)R.push(-a-r.apron*z/4);const C=d.clone();C.color=new Be(12171958);const b=new ot(bi(i,R.slice().reverse(),{uvU:7,uvV:7,color:()=>[.95,.95,.95]}),C);b.receiveShadow=!0,n.add(b),t(.15);const S=z=>new wn({color:z,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),D=(z,ie,Q,Y=.03)=>{const ye=new ot(bi(i,[z,ie],{yOff:Y}),S(Q));return n.add(ye),ye};D(a-.55,a-.3,15987696),D(-a+.3,-a+.55,15987696),D(-a-.05,-a+.12,15909376),D(-a-.5,-a-.33,15909376);const F=Dr(256,32,(z,ie,Q)=>{for(let ye=0;ye<16;ye++)for(let ue=0;ue<2;ue++)z.fillStyle=(ye+ue)%2?"#111":"#fff",z.fillRect(ie/16*ye,Q/2*ue,ie/16,Q/2)});{const z=new hi(2*a,1.6),ie=new ot(z,new wn({map:F,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),Q=i.point(0,0,{}),Y=i.at(0);ie.position.set(Q.x,Q.y+.04,Q.z),ie.rotation.order="YXZ",ie.rotation.y=Math.atan2(Y.tx,Y.tz),ie.rotation.x=-Math.PI/2,ie.rotation.z=0,ie.rotation.set(0,0,0);const ye=new qe,ue=new U(Y.tx,0,Y.tz),w=new U(-Y.rx*Math.sin(Y.bank),Math.cos(Y.bank),-Y.rz*Math.sin(Y.bank)),x=new U().crossVectors(ue,w).normalize();ye.makeBasis(x,ue,w),ie.quaternion.setFromRotationMatrix(ye),n.add(ie)}t(.25);const L=a+.5,I=(()=>{const z=bi(i,[0,1],{uvU:1,uvV:1});z.attributes.position,z.attributes.uv;const ie=o+1,Q=new Float32Array(ie*2*3),Y=new Float32Array(ie*2*2),ye={};for(let x=0;x<ie;x++){const O=x%o;i.point(O*i.ds,L,ye);const X=x*2;Q[X*3]=ye.x,Q[X*3+1]=ye.y-.2,Q[X*3+2]=ye.z,Q[(X+1)*3]=ye.x,Q[(X+1)*3+1]=ye.y+r.wallH,Q[(X+1)*3+2]=ye.z,Y[X*2]=x*i.ds/4,Y[X*2+1]=0,Y[(X+1)*2]=x*i.ds/4,Y[(X+1)*2+1]=1}const ue=[];for(let x=0;x<ie-1;x++){const O=x*2,X=O+1,ee=O+2,$=O+3;ue.push(O,X,ee,X,$,ee)}const w=new Vt;return w.setAttribute("position",new bt(Q,3)),w.setAttribute("uv",new bt(Y,2)),w.setIndex(ue),w.computeVertexNormals(),w})(),k=new ot(I,new It({map:p,roughness:.85,side:dn}));k.receiveShadow=!0,k.castShadow=!0,n.add(k),n.add(new ot(bi(i,[L-.2,L+.5],{yOff:r.wallH}),y));const H=[];for(let z=0;z<=6;z++)H.push(L+.5+z*2.5);const q=bi(i,H,{uvU:8,uvV:8,yFn:(z,ie)=>{const Q=i.d.yc[ie]+L*Math.sin(i.d.bank[ie]),Y=(z-(L+.5))/15;return-Math.min(1,Y)*(Q+.2)-.1+(Y>0,0)}});{const z=q.attributes.position,ie=H.length;for(let Q=0;Q<z.count/ie;Q++){const Y=Q*ie+(ie-1);z.setY(Y,-.05)}q.computeVertexNormals()}const V=new ot(q,new It({color:10263960,roughness:1,map:l}));V.receiveShadow=!0,n.add(V);const te=Dr(128,128,(z,ie,Q)=>{z.clearRect(0,0,ie,Q),z.strokeStyle="rgba(200,205,210,0.95)",z.lineWidth=2;for(let Y=-Q;Y<ie+Q;Y+=16)z.beginPath(),z.moveTo(Y,0),z.lineTo(Y+Q,Q),z.stroke(),z.beginPath(),z.moveTo(Y+Q,0),z.lineTo(Y,Q),z.stroke()},!0);te.repeat.set(1,1);const ae=(()=>{const z=o+1,ie=new Float32Array(z*2*3),Q=new Float32Array(z*2*2),Y={},ye=7;for(let x=0;x<z;x++){const O=x%o;i.point(O*i.ds,L+.2,Y);const X=x*2;ie[X*3]=Y.x,ie[X*3+1]=Y.y+r.wallH,ie[X*3+2]=Y.z,ie[(X+1)*3]=Y.x,ie[(X+1)*3+1]=Y.y+r.wallH+ye,ie[(X+1)*3+2]=Y.z,Q[X*2]=x*i.ds/2.5,Q[X*2+1]=0,Q[(X+1)*2]=x*i.ds/2.5,Q[(X+1)*2+1]=3}const ue=[];for(let x=0;x<z-1;x++){const O=x*2;ue.push(O,O+1,O+2,O+1,O+3,O+2)}const w=new Vt;return w.setAttribute("position",new bt(ie,3)),w.setAttribute("uv",new bt(Q,2)),w.setIndex(ue),w.computeVertexNormals(),w})();n.add(new ot(ae,new wn({map:te,transparent:!0,alphaTest:.2,side:dn,depthWrite:!1,fog:!0})));{const z=new Mn(new Vs(.07,.09,7.4,6),M(7238520,{metalness:.6,roughness:.4}),Math.ceil(i.length/9)),ie=new qe,Q={};let Y=0;for(let ye=0;ye<i.length;ye+=9)i.point(ye,L+.2,Q),ie.makeTranslation(Q.x,Q.y+r.wallH+3.6,Q.z),z.setMatrixAt(Y++,ie);z.count=Y,n.add(z)}t(.4);const _e=new ot(new hi(9e3,9e3),m);_e.rotation.x=-Math.PI/2,_e.position.y=-.06,_e.receiveShadow=!0,_e.name="ground",n.add(_e);{const z=new hi(1400,420),ie=new ot(z,new wn({color:5138997,transparent:!0,opacity:.18,depthWrite:!1}));ie.rotation.x=-Math.PI/2,ie.position.set(0,-.04,-30),n.add(ie)}{const z=new ot(new Ac(150,40),new It({color:2775666,roughness:.08,metalness:0,envMapIntensity:1.4}));z.rotation.x=-Math.PI/2,z.scale.set(1.9,.55,1),z.position.set(0,-.02,-50),n.add(z)}t(.5);const De=e.crowd,Ne=[{s0:-520,s1:520,off:26,rows:28,rise:.78,depth:.95,color:3820138,side:1},{s0:3320,s1:3881,off:24,rows:22,rise:.75,depth:.95,color:5849402,side:1},{s0:540,s1:1120,off:36,rows:18,rise:.74,depth:.95,color:4020810,side:1},{s0:2860,s1:3260,off:34,rows:16,rise:.74,depth:.95,color:4865370,side:1}],st=new qt(1,1,1),Je=new It({color:16777215,roughness:.7});let J=0;for(const z of Ne)J+=Math.ceil((z.s1-z.s0)/8)*z.rows;const ne=new Mn(st,Je,J);ne.castShadow=!1,ne.receiveShadow=!0;const ce=new qe,Pe=new Jt,be=new U,He=new U,gt=new Be;let N=0;const ct={},Ue=[];for(const z of Ne)for(let ie=z.s0;ie<z.s1;ie+=8){const Q=i.wrapS(ie+4),Y=i.at(Q);i.point(Q,a+z.off-z.rows*z.depth*0,ct);const ye=Math.atan2(Y.tx,Y.tz),ue=Math.floor(Q/96);for(let w=0;w<z.rows;w++){const x=z.off+w*z.depth,O=ct.y*0+w*z.rise+2.2+Math.max(0,(Y.yc+(a+.5)*Math.sin(Y.bank))*.55);He.set(Y.x+Y.rx*(a+x),O*.5+0,Y.z+Y.rz*(a+x));const X=O;He.y=X*.5,Pe.setFromEuler(new Bt(0,ye,0)),be.set(z.depth*1.02,X,8.05),ce.compose(He,Pe,be),ne.setMatrixAt(N,ce);const ee=.75+w%2*.12+(ue*7+w)%3*.04;gt.setHex(z.color).multiplyScalar(ee),ne.setColorAt(N,gt),N++,Ue.length<De*1.5&&w%1===0&&Ue.push([Y.x+Y.rx*(a+x-z.depth*.25),X,Y.z+Y.rz*(a+x-z.depth*.25),ye,Y.tx,Y.tz])}if(z.rows>=22&&(ie-z.s0)%16===0){const w=z.off+z.rows*z.depth*.55,x=z.rows*z.rise+9,O=new ot(new qt(z.rows*z.depth*1.15,.5,16.2),M(14343648,{roughness:.6}));O.position.set(Y.x+Y.rx*(a+w),x,Y.z+Y.rz*(a+w)),O.rotation.y=ye,O.castShadow=!0,n.add(O)}}ne.count=N,ne.instanceMatrix.needsUpdate=!0,ne.instanceColor&&(ne.instanceColor.needsUpdate=!0),n.add(ne);{const z=Math.min(De,Ue.length),ie=new Mn(new qt(.42,.9,.34),new It({color:16777215,roughness:.9}),z),Q=[13712187,3108827,15909376,15658734,2763306,4039517,15043115,10181046],Y=new Bt;for(let ye=0;ye<z;ye++){const ue=Ue[s()*Ue.length|0],w=(s()-.5)*7.4;He.set(ue[0]+ue[4]*w,ue[1]+.55,ue[2]+ue[5]*w),Y.set(0,ue[3],0),Pe.setFromEuler(Y),be.set(1,.8+s()*.4,1),ce.compose(He,Pe,be),ie.setMatrixAt(ye,ce),ie.setColorAt(ye,gt.setHex(Q[s()*Q.length|0]).multiplyScalar(.7+s()*.3))}ie.instanceMatrix.needsUpdate=!0,ie.instanceColor.needsUpdate=!0,n.add(ie)}t(.65);const Le=[];{const z=new Vs(.35,.6,46,8),ie=new Mn(z,M(8159622,{metalness:.7,roughness:.4}),40),Q=new qt(9,3.2,1.2),Y=new It({color:3355443,emissive:16773839,emissiveIntensity:0,roughness:.5}),ye=new Mn(Q,Y,40);let ue=0;for(let w=40;w<i.length&&ue<40;w+=190){const x=i.at(w),O=a+34,X=x.x+x.rx*O,ee=x.z+x.rz*O;ce.makeTranslation(X,23,ee),ie.setMatrixAt(ue,ce);const $=Math.atan2(x.tx,x.tz);ce.compose(new U(X-x.rx*2,45.5,ee-x.rz*2),new Jt().setFromEuler(new Bt(0,$,0)),new U(1,1,1)),ye.setMatrixAt(ue,ce),Le.push({x:X,z:ee}),ue++}ie.count=ue,ye.count=ue,ie.castShadow=!0,n.add(ie,ye),n.userData.lampMat=Y}{const z=[];for(let ie=0;ie<=3;ie++)z.push(-a-r.apron-3-ie*4.2);new ot(bi(i,z.slice().reverse(),{uvU:7,uvV:7,sFrom:0,sTo:0,yOff:.02,color:()=>[.8,.8,.8],closed:!1}),C)}{const z=new Mn(new qt(10,4.2,12),M(13619924,{roughness:.7}),60);let ie=0;const Q=new Mn(new qt(11,1.1,.5),M(15329764),60);for(let Y=-260;Y<260&&ie<60;Y+=12){const ye=i.wrapS(Y),ue=i.at(ye),w=-a-r.apron-16,x=ue.x+ue.rx*w,O=ue.z+ue.rz*w,X=Math.atan2(ue.tx,ue.tz),ee=new Jt().setFromEuler(new Bt(0,X,0));ce.compose(new U(x,2.1,O),ee,new U(1,1,1)),z.setMatrixAt(ie,ce);const $=ue.x+ue.rx*(w+8),Me=ue.z+ue.rz*(w+8);ce.compose(new U($,.55,Me),ee,new U(1,1,1)),Q.setMatrixAt(ie,ce),ie++}z.count=ie,Q.count=ie,z.castShadow=!0,z.receiveShadow=!0,n.add(z,Q)}{const z=i.at(-120),ie=z.x+z.rx*(-a-r.apron-34),Q=z.z+z.rz*(-a-r.apron-34),Y=new ot(new qt(5,42,5),M(15263972,{roughness:.5}));Y.position.set(ie,21,Q),Y.castShadow=!0,n.add(Y);const ye=new ot(new qt(5.2,1.6,5.2),new It({color:2763306,emissive:4045397,emissiveIntensity:.9}));ye.position.set(ie,38,Q),n.add(ye)}t(.75);{const z=[],ie=ue=>Dr(512,96,(w,x,O)=>{w.fillStyle=ue.colors[0],w.fillRect(0,0,x,O),w.fillStyle=ue.colors[1],w.fillRect(0,O-14,x,14),w.fillStyle=ue.colors[1]==="#ffffff"||ue.colors[1]==="#f4f4f4"?"#111":"#fff",w.font='italic 700 54px "Barlow Condensed", Impact, sans-serif',w.textAlign="center",w.textBaseline="middle",w.fillText(ue.name.toUpperCase(),x/2,O/2-5)}),Q=ha.map(ie);let Y=0;for(let ue=20;ue<i.length;ue+=36){const w=i.at(ue),x=w.x+w.rx*(L+.55),O=w.z+w.rz*(L+.55),X={};i.point(ue,L+.55,X);const ee=new ot(new hi(14,2.2),new It({map:Q[Y%Q.length],roughness:.6}));Y++,ee.position.set(x,X.y+r.wallH+3.2,O),ee.rotation.y=Math.atan2(w.tx,w.tz)+Math.PI/2*0,ee.lookAt(x-w.rx*10,X.y+r.wallH+3.2,O-w.rz*10),z.push(ee)}const ye=new mn;z.forEach(ue=>ye.add(ue)),n.add(ye)}{const ie=new Mn(new Vs(.25,.4,5,5),M(5916210,{roughness:1}),1400),Q=new Mn(new Cc(3.2,1),new It({color:16777215,roughness:1,flatShading:!0}),1400);let Y=0;for(let ue=0;ue<1400*3&&Y<1400;ue++){const w=s()*Math.PI*2,x=1e3+s()*600,O=520+s()*400,X=Math.cos(w)*x,ee=Math.sin(w)*O*1.1+40,$=i.query(X,ee,void 0,{});if($.u<a+70&&$.u>-a-120)continue;const Me=.8+s()*1.4;ce.compose(new U(X,2.5*Me,ee),new Jt,new U(Me,Me,Me)),ie.setMatrixAt(Y,ce),ce.compose(new U(X,7*Me,ee),new Jt().setFromEuler(new Bt(s(),s()*6,0)),new U(Me,Me*(.9+s()*.5),Me)),Q.setMatrixAt(Y,ce),Q.setColorAt(Y,gt.setHSL(.25+s()*.08,.45,.16+s()*.1)),Y++}ie.count=Y,Q.count=Y,Q.castShadow=!1,n.add(ie,Q);const ye=new Mn(new qt(1,1,1),new It({color:16777215,roughness:.9}),90);for(let ue=0;ue<90;ue++){const w=ue/90*Math.PI*2+s()*.05,x=2300+s()*600,O=40+s()*120,X=15+s()*70,ee=40+s()*90;ce.compose(new U(Math.cos(w)*x*1.25,X/2,Math.sin(w)*x*.9),new Jt().setFromEuler(new Bt(0,s()*3,0)),new U(O,X,ee)),ye.setMatrixAt(ue,ce),ye.setColorAt(ue,gt.setHSL(.58+s()*.1,.1,.5+s()*.25))}n.add(ye)}return t(1),n.userData.lamps=Le,n}function lh(i,e){if(e===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yo||e===Zh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Yo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class l_ extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new R_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Hs.extractUrlBase(e);a=Hs.resolveURL(l,this.path)}else a=Hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cu){try{a[Ze.KHR_BINARY_GLTF]=new C_(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new H_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new d_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new P_(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new L_;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new I_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function h_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u_{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$t);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new rp(h),l.distance=u;break;case"spot":l=new ip(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),In(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class d_{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){const s=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}}class f_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class p_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(o,o)}return Promise.all(r)}}class m_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class g_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class __{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,St)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class v_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class y_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],$t),Promise.all(r)}}class x_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class M_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,St)),Promise.all(r)}}class b_{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class S_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class T_{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class E_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class w_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class A_{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class R_{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new qe,m=new U,p=new Jt,y=new U(1,1,1),M=new Mn(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,_.compose(m,p,y));for(const v in c)if(v==="_COLOR_0"){const E=c[v];M.instanceColor=new $o(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Cu="glTF",Ps=12,hh={JSON:1313821514,BIN:5130562};class C_{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ps,r=new DataView(e,Ps);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===hh.JSON){const l=new Uint8Array(e,Ps+a,o);this.content=n.decode(l)}else if(c===hh.BIN){const l=Ps+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class P_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=nc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=nc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=rs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,$t,d)})})}}class L_{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class I_{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Pu extends tr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,M=p-d+u;for(let v=0;v!==o;v++){const E=a[_+v+o],T=a[_+v+c]*h,R=a[g+v+o],C=a[g+v]*h;r[v]=y*E+M*T+m*R+p*C}return r}}const D_=new Jt;class N_ extends Pu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return D_.fromArray(r).normalize().toArray(r),r}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uh={9728:jt,9729:on,9984:Wh,9985:Gr,9986:Fs,9987:Nn},dh={33071:li,33648:$r,10497:fi},Ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U_={CUBICSPLINE:void 0,LINEAR:Ys,STEP:Ks},eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new It({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Si(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function O_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B_(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+to(t.attributes):e=i.indices+":"+to(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+to(i.targets[n]);return e}function to(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ic(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function z_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const V_=new qe;class H_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Mu(this.options.manager):this.textureLoader=new op(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Si(r,o,s),In(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Hs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Ja[s.type],o=rs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new bt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ja[s.type],l=rs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(y);M||(_=new l(o,p*f,s.count*f/h),M=new Cf(_,f/h),t.cache.add(y,M)),m=new Sc(M,c,d%f/h,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new bt(_,c,g);if(s.sparse!==void 0){const p=Ja.SCALAR,y=rs[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(a[1],M,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=E.length;R<C;R++){const b=E[R];if(m.setX(b,T[R*c]),c>=2&&m.setY(b,T[R*c+1]),c>=3&&m.setZ(b,T[R*c+2]),c>=4&&m.setW(b,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=uh[d.magFilter]||on,h.minFilter=uh[d.minFilter]||Nn,h.wrapS=dh[d.wrapS]||fi,h.wrapT=dh[d.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==on,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new At(_);m.needsUpdate=!0,d(m)}),t.load(Hs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),In(u,a),u.userData.mimeType=a.mimeType||z_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new pu,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new fu,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return It}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=s[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,St)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dn);const h=r.alphaMode||eo.OPAQUE;if(h===eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==wn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wn){const u=r.emissiveFactor;o.emissive=new Be().setRGB(u[0],u[1],u[2],$t)}return r.emissiveTexture!==void 0&&a!==wn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),In(u,r),t.associations.set(u,{materials:e}),r.extensions&&Si(s,u,r),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=B_(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=fh(new Vt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?k_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=l[f];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Lf(_,y):new ot(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?p.geometry=lh(p.geometry,Zh):m.mode===un.TRIANGLE_FAN&&(p.geometry=lh(p.geometry,Yo));else if(m.mode===un.LINES)p=new Ff(_,y);else if(m.mode===un.LINE_STRIP)p=new wc(_,y);else if(m.mode===un.LINE_LOOP)p=new Of(_,y);else if(m.mode===un.POINTS)p=new Bf(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&O_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),In(p,r),m.extensions&&Si(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Si(s,u[0],r),u[0];const d=new mn;r.extensions&&Si(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Kn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Lc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Tc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){const E=d[M],T=f[M],R=g[M],C=_[M],b=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const S=n._createAnimationTracks(E,T,R,C,b);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const y=new Kf(r,void 0,p);return In(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,V_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new uu:l.length>1?h=new mn:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),In(h,r),r.extensions&&Si(n,h,r),r.matrix!==void 0){const u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new mn;n.name&&(r.name=s.createUniqueName(n.name)),In(r,n),n.extensions&&Si(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof kn||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];ai[r.path]===ai.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ai[r.path]){case ai.weights:l=us;break;case ai.rotation:l=ds;break;case ai.translation:case ai.scale:l=fs;break;default:n.itemSize===1?l=us:l=fs;break}const h=s.interpolation!==void 0?U_[s.interpolation]:Ys,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ai[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ic(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ds?N_:Pu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function G_(i,e,t){const n=e.attributes,s=new Jn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const h=ic(rs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ic(rs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new On;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function fh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=nc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return nt.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),In(i,e),G_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?F_(i,e.targets,t):i})}const sc=240,rc=96,W_='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function xn(i,e,t=14,n=null){i.beginPath(),i.roundRect(2,2,sc-4,rc-4,t),i.fillStyle=e,i.fill(),n&&(i.lineWidth=3,i.strokeStyle=n,i.stroke())}function Mt(i,e,t,n,s,r,{weight:a=700,italic:o=!0,align:c="left",spacing:l=0,maxW:h=0}={}){i.font=`${o?"italic ":""}${a} ${s}px ${W_}`,i.fillStyle=r,i.textAlign=c,i.textBaseline="alphabetic";try{i.letterSpacing=l+"px"}catch{}if(h){const u=i.measureText(e).width;if(u>h){i.save(),i.translate(t,n),i.scale(h/u,1),i.fillText(e,0,0),i.restore();try{i.letterSpacing="0px"}catch{}return}}i.fillText(e,t,n);try{i.letterSpacing="0px"}catch{}}function Ti(i,e,t){i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fillStyle=t,i.fill()}function Nr(i,e,t,n,s,r=0){i.beginPath();for(let a=0;a<6;a++){const o=r+Math.PI/3*a,c=e+n*Math.cos(o),l=t+n*Math.sin(o);a?i.lineTo(c,l):i.moveTo(c,l)}i.closePath(),i.fillStyle=s,i.fill()}const X_={dustyfork(i){xn(i,"#f2b134",16),i.fillStyle="#7a2e1b",i.fillRect(14,70,212,5),i.fillRect(14,79,212,3),i.fillStyle="#7a2e1b",i.fillRect(36,18,5,34),i.fillRect(46,18,5,34),i.fillRect(56,18,5,34),i.beginPath(),i.roundRect(34,46,29,8,4),i.fill(),i.fillRect(46,50,5,18),Mt(i,"DUSTY FORK",78,46,34,"#7a2e1b",{maxW:136}),Mt(i,"DINER",80,64,20,"#7a2e1b",{spacing:7,italic:!1,weight:600})},greaseline(i){xn(i,"#ececec",14,"#d1342c"),i.save(),i.translate(46,48),i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(22,-2,22,26,0,26),i.bezierCurveTo(-22,26,-22,-2,0,-30),i.fillStyle="#d1342c",i.fill(),i.fillStyle="#ececec",i.beginPath(),i.ellipse(-6,8,4,8,.4,0,7),i.fill(),i.restore(),Mt(i,"GREASELINE",82,50,36,"#16181c",{maxW:140}),i.fillStyle="#d1342c",i.fillRect(82,58,140,4),Mt(i,"GARAGE",83,80,20,"#d1342c",{spacing:8,italic:!1,weight:600})},cornerbolt(i){xn(i,"#2f6fdb",14),Nr(i,46,48,30,"#f4f4f4",Math.PI/6),Nr(i,46,48,17,"#2f6fdb",Math.PI/6),Nr(i,46,48,8,"#f4f4f4",Math.PI/6),Mt(i,"CORNER BOLT",86,46,34,"#ffffff",{maxW:140}),Mt(i,"SUPPLY CO.",88,70,19,"#cfe0ff",{spacing:6,italic:!1,weight:600})},vantafuel(i){xn(i,"#0d1f1b",14,"#13c28a"),Ti(i,[[22,22],[50,22],[62,58],[74,22],[100,22],[66,76],[56,76]],"#13c28a"),Ti(i,[[62,30],[68,44],[62,56],[56,44]],"#0d1f1b"),Mt(i,"VANTA",112,52,40,"#ffffff",{maxW:112}),Mt(i,"FUEL",114,76,26,"#13c28a",{spacing:10,italic:!1})},halo(i){xn(i,"#ffd400",48),i.lineWidth=9,i.strokeStyle="#151515",i.beginPath(),i.ellipse(46,48,24,24,0,0,7),i.stroke(),Ti(i,[[50,26],[36,52],[47,52],[42,70],[58,42],[47,42]],"#151515"),Mt(i,"HALO",82,56,46,"#151515",{maxW:140}),Mt(i,"ENERGY",84,78,19,"#151515",{spacing:9,italic:!1})},ironbark(i){xn(i,"#232323",12,"#e2552c"),Nr(i,44,48,31,"#e2552c",0),i.strokeStyle="#232323",i.lineWidth=3.5,[8,15,22].forEach(e=>{i.beginPath(),i.arc(44,48,e,0,7),i.stroke()}),Mt(i,"IRONBARK",84,52,40,"#ffffff",{maxW:140}),Mt(i,"TOOLS",86,76,21,"#e2552c",{spacing:10,italic:!1})},meridian(i){xn(i,"#00a3e0",16),i.save(),i.translate(46,48),i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.arc(0,0,27,0,7),i.stroke(),i.beginPath(),i.ellipse(0,0,11,27,0,0,7),i.stroke(),i.beginPath(),i.moveTo(-27,0),i.lineTo(27,0),i.stroke(),i.beginPath(),i.moveTo(-23,-13),i.lineTo(23,-13),i.moveTo(-23,13),i.lineTo(23,13),i.lineWidth=2.5,i.stroke(),i.restore(),Mt(i,"MERIDIAN",86,52,38,"#ffffff",{maxW:140}),Mt(i,"MOBILE",88,76,20,"#d9f3ff",{spacing:9,italic:!1})},stratus(i){xn(i,"#4b3fc4",16),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(18,62),i.quadraticCurveTo(46,58,78,26),i.quadraticCurveTo(68,52,92,56),i.quadraticCurveTo(54,74,18,62),i.fill(),i.fillStyle="#b9b2ff",i.beginPath(),i.moveTo(24,74),i.quadraticCurveTo(52,72,70,60),i.quadraticCurveTo(52,82,24,74),i.fill(),Mt(i,"STRATUS",102,54,38,"#ffffff",{maxW:124}),Mt(i,"AIR",104,76,21,"#cfc9ff",{spacing:14,italic:!1})},kestrel(i){xn(i,"#121212",14,"#ffcf1b"),i.lineWidth=11,i.strokeStyle="#ffcf1b",i.beginPath(),i.arc(46,48,24,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="#121212";for(let e=0;e<12;e++){const t=Math.PI*2*e/12;i.beginPath(),i.moveTo(46+19*Math.cos(t),48+19*Math.sin(t)),i.lineTo(46+29*Math.cos(t),48+29*Math.sin(t)),i.stroke()}Ti(i,[[36,50],[60,36],[52,52],[64,50],[38,64]],"#ffffff"),Mt(i,"KESTREL",84,54,38,"#ffcf1b",{maxW:140}),Mt(i,"TIRES",86,76,21,"#ffffff",{spacing:12,italic:!1})},apexgrid(i){xn(i,"#0d0d0d",12,"#ff2d55"),Ti(i,[[44,14],[78,80],[10,80]],"#ff2d55"),i.strokeStyle="#0d0d0d",i.lineWidth=3,i.beginPath(),i.moveTo(44,38),i.lineTo(44,80),i.moveTo(28,58),i.lineTo(60,58),i.moveTo(22,70),i.lineTo(66,70),i.stroke(),Mt(i,"APEX GRID",92,50,40,"#ffffff",{maxW:128}),Mt(i,"POWER",94,76,21,"#ff2d55",{spacing:11,italic:!1})},northstar(i){xn(i,"#0a2a66",14,"#c0c6cc"),Ti(i,[[44,10],[51,40],[80,48],[51,56],[44,86],[37,56],[8,48],[37,40]],"#c0c6cc"),Ti(i,[[44,26],[48,44],[44,48],[40,44]],"#ffffff"),Mt(i,"NORTHSTAR",92,50,36,"#ffffff",{maxW:138}),Mt(i,"MOTORS",94,76,21,"#c0c6cc",{spacing:10,italic:!1})}};function Lu(i,e,t,n,s,r){const a=X_[e];if(!a)return!1;const o=Math.min(s/sc,r/rc);return i.save(),i.translate(t+(s-sc*o)/2,n+(r-rc*o)/2),i.scale(o,o),i.lineJoin="round",a(i),i.restore(),!0}const jr=new Map;function Iu(i,e=240,t=96){const n=`${i}:${e}x${t}`;if(jr.has(n))return jr.get(n);const s=Math.min(2,(typeof devicePixelRatio=="number"?devicePixelRatio:1)||1),r=document.createElement("canvas");r.width=Math.round(e*s),r.height=Math.round(t*s);const a=r.getContext("2d");a.scale(s,s),Lu(a,i,0,0,e,t);const o=r.toDataURL("image/png");return jr.set(n,o),o}function Du(){jr.clear()}const q_=i=>(xs(i)||{}).name||i,Q_=Object.freeze(Object.defineProperty({__proto__:null,clearSponsorPreviewCache:Du,drawSponsor:Lu,sponsorName:q_,sponsorPreviewURL:Iu},Symbol.toStringTag,{value:"Module"})),K_=Object.assign({"../ui/sponsorArt.js":Q_}),no=Object.values(K_)[0]||null,Y_={left:(i,e)=>[-i*100,-e*100],right:(i,e)=>[i*100,-e*100],top:(i,e)=>[i*100,e*100],tail:(i,e)=>[-i*100,-e*100],nose:(i,e)=>[i*100,-e*100]};function Dt(i,e,t,n){const s=e.frames[t];i.save(),i.beginPath(),i.rect(...s.clip),i.clip(),i.translate(s.ox,s.oy),i.scale(s.sx,s.sy),n(Y_[t]),i.restore()}const Ls=(i,e,t)=>{i.beginPath(),t.forEach(([n,s],r)=>{const[a,o]=e(n,s);r?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath(),i.fill()},Pi=(i,e,t,n,s,r)=>{const[a,o]=e(t,n),[c,l]=e(s,r);i.fillRect(Math.min(a,c),Math.min(o,l),Math.abs(c-a),Math.abs(l-o))},Nu=(i,e)=>`${i==="italic"?"italic 800":i==="slab"?"900":"800"} ${e}px "Barlow Condensed", Impact, "Arial Narrow", sans-serif`;function j_(i,e,t,n,s,r,a=0){i.save(),i.translate(t,n),a&&i.rotate(a);const o=xs(e);if(i.beginPath(),i.rect(-s/2,-r/2,s,r),i.clip(),no&&no.drawSponsor)try{no.drawSponsor(i,e,-s/2,-r/2,s,r),i.restore();return}catch{}i.fillStyle=o?o.colors[0]:"#444",i.fillRect(-s/2,-r/2,s,r),i.fillStyle=o?o.colors[1]:"#fff",i.fillRect(-s/2,r/2-r*.14,s,r*.14),i.fillStyle="#fff",i.font=Nu("italic",Math.floor(r*.42)),i.textAlign="center",i.textBaseline="middle",i.fillText(o?o.name.toUpperCase():e,0,-r*.04,s*.94),i.restore()}function Ur(i,e,t,n,s,r=0){i.save(),i.translate(t,n),r&&i.rotate(r),i.font=Nu(e.numberStyle,s),i.textAlign="center",i.textBaseline="middle";const a=String(e.number||"0");e.numberStyle==="italic"&&i.transform(1,0,-.22,1,0,0);const o=(e.numberColor||"#fff").toLowerCase(),c=o==="#ffffff"||o==="#fff"?"#000":"#fff";i.lineJoin="round",i.lineWidth=s*.12,i.strokeStyle=c,i.strokeText(a,0,0),e.numberStyle==="outline"?(i.lineWidth=s*.06,i.strokeStyle=e.numberColor,i.strokeText(a,0,0)):(i.fillStyle=e.numberColor,i.fillText(a,0,0)),i.restore()}function $_(i,e,t){const n=t.accent,s=t.trim,r=a=>{Dt(i,e,"left",a),Dt(i,e,"right",a)};if(t.pattern==="stripe")r(a=>{i.fillStyle=n,Pi(i,a,-3,.52,3,.46),i.fillStyle=s,Pi(i,a,-3,.44,3,.425)}),Dt(i,e,"top",()=>{i.fillStyle=n,i.fillRect(-22,-300,44,600),i.fillStyle=s,i.fillRect(-32,-300,5,600),i.fillRect(27,-300,5,600)});else if(t.pattern==="split")i.fillStyle=n,r(a=>Ls(i,a,[[3,-.1],[3,1.1],[.3,1.1],[-.9,-.1]])),Dt(i,e,"top",a=>Ls(i,a,[[-1.2,3],[1.2,3],[1.2,.35],[-1.2,-.45]])),Dt(i,e,"nose",a=>Ls(i,a,[[-1.2,-.1],[1.2,-.1],[1.2,.9],[-1.2,.9]]));else if(t.pattern==="chevron"){i.fillStyle=n;for(let a=0;a<7;a++){const o=-2.6+a*.5;r(c=>Ls(i,c,[[o,-.1],[o+.3,-.1],[o+.55,.5],[o+.3,1.1],[o,1.1],[o+.25,.5]]))}for(let a=0;a<7;a++){const o=-2.6+a*.5;Dt(i,e,"top",c=>Ls(i,c,[[-1.2,o],[-1.2,o+.3],[0,o+.55],[1.2,o+.3],[1.2,o],[0,o+.25]]))}}else t.pattern==="fade"&&(r(()=>{const a=i.createLinearGradient(-260,0,260,0);a.addColorStop(0,n),a.addColorStop(.55,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-300,-140,600,160)}),Dt(i,e,"top",()=>{const a=i.createLinearGradient(0,260,0,-150);a.addColorStop(0,n),a.addColorStop(.7,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(-130,-320,260,640)}))}function Z_(i,e,t){const n=i.getContext("2d");n.setTransform(i.width/2048,0,0,i.height/2048,0,0),n.globalCompositeOperation="source-over",n.fillStyle=e.paint,n.fillRect(0,0,2048,2048),$_(n,t,e);const s=t.band||.3,r=l=>{n.fillStyle=e.trim,Pi(n,l,-4,-.2,4,s),n.fillStyle=e.accent,Pi(n,l,-4,s,4,s+.025)};Dt(n,t,"left",r),Dt(n,t,"right",r),Dt(n,t,"nose",r),Dt(n,t,"tail",r),t.paintLights&&(Dt(n,t,"nose",l=>{for(const h of[-1,1]){n.fillStyle="#e8eaec";const[u,d]=l(h*.38,.31),[f,g]=l(h*.84,.22);n.beginPath(),n.roundRect(Math.min(u,f),Math.min(d,g),Math.abs(f-u),Math.abs(g-d),3),n.fill(),n.fillStyle="#ffcf5a";const _=h>0?Math.max(u,f)-12:Math.min(u,f);n.fillRect(_,Math.min(d,g)+2,12,Math.abs(g-d)-4)}n.fillStyle="#0b0c0e",Pi(n,l,-.34,.33,.34,.13),n.fillStyle="#2a2d33";for(let h=0;h<17;h++){const[u,d]=l(-.3+h*.0375,.31);n.fillRect(u,d,1.4,14)}}),Dt(n,t,"tail",l=>{n.fillStyle="#16171a",Pi(n,l,-.9,.78,.9,.46),n.fillStyle="#d0171e";for(const h of[-1,1])Pi(n,l,h*.39,.7,h*.81,.52)}));const a=e.slots||{},o=t.spots;Dt(n,t,"left",l=>{const[h,u]=l(o.number.z,o.number.y);Ur(n,e,h,u,o.number.h*100)}),Dt(n,t,"right",l=>{const[h,u]=l(o.number.z,o.number.y);Ur(n,e,h,u,o.number.h*100)}),Dt(n,t,"top",l=>{const[h,u]=l(0,a.roof?o.roofNumberZ:o.roofNumberZ-.15);Ur(n,e,h,u,32,Math.PI/2)}),Dt(n,t,"tail",l=>{const[h,u]=l(0,a.bumper?o.bumper.y-.17:o.bumper.y);Ur(n,e,h,u,a.bumper?13:21)});const c=(l,h,u,d,f,g=0)=>{if(!a[h])return;const _=f*2.5,m=f;Dt(n,t,l,p=>{const[y,M]=p(u,d);j_(n,a[h],y,M,_,m,g)})};c("left","door",o.door.z,o.door.y,o.door.h*100),c("right","door",o.door.z,o.door.y,o.door.h*100),c("left","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("right","quarter",o.quarter.z,o.quarter.y,o.quarter.h*100),c("top","hood",o.hood.x,o.hood.z,o.hood.h*100,0),c("top","trunk",o.trunk.x,o.trunk.z,o.trunk.h*100,Math.PI),c("top","roof",0,o.roofLogoZ,22,Math.PI/2),c("tail","bumper",o.bumper.x,o.bumper.y,o.bumper.h*100)}const Ei=9.81,an={mass:1500,L:2.85,a:1.38,b:1.47,cgH:.52,Iz:2900,wheelR:.34,length:5.1,width:1.95,cdA:1.3,clA:.85,rolling:.012,maxSteer:.5,gears:[9.4,6.3,4.55,3.46],eff:.9,idle:2600,redline:9e3,limiter:9250,torque:[[1200,300],[3e3,470],[4500,610],[6e3,690],[7500,740],[8500,720],[9100,640],[9500,400]],mu:{track:1.5,apron:1.3,grass:.5}},J_=2.23694;function ph(i,e=an){const t=e.torque;if(i<=t[0][0])return t[0][1];if(i>=t[t.length-1][0])return t[t.length-1][1];for(let n=0;n<t.length-1;n++)if(i<=t[n+1][0]){const s=(i-t[n][0])/(t[n+1][0]-t[n][0]);return t[n][1]+s*(t[n+1][1]-t[n][1])}return 0}class e1{constructor(e=0,t=null){this.C=t?Object.assign({},an,t,{mu:Object.assign({},an.mu,t.mu||{})}):an,this.id=e,this.x=0,this.z=0,this.psi=0,this.vx=0,this.vy=0,this.w=0,this.steer=0,this.steerCmd=0,this.gear=1,this.rpm=this.C.idle,this.shiftT=0,this.throttle=0,this.brake=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.surface="track",this.bank=0,this.trackU=0,this.trackS=0,this.trackI=0,this.draft=0,this.dirty=0,this.damage={front:0,rear:0,left:0,right:0},this.hit=0,this.scrape=0,this.limiter=!1,this.out=!1,this.nLoad=1,this.lap=0,this.pitch=0,this.roll=0,this.skid=0,this.lastImpact=0}get speed(){return Math.hypot(this.vx,this.vy)}get mph(){return this.vx*J_}place(e,t,n,s=0){this.x=e,this.z=t,this.psi=n,this.vx=s,this.vy=0,this.w=0}get wvx(){return this.vx*Math.sin(this.psi)+this.vy*Math.cos(this.psi)}get wvz(){return this.vx*Math.cos(this.psi)-this.vy*Math.sin(this.psi)}step(e,t,n){const s=this.C,r=s.mass;this.surface=n.surface||"track";const a=n.bank||0;this.bank=a;const o=Math.cos(a),c=Math.sin(a),l=s.mu[this.surface]||s.mu.track,h=1-.35*this.damage.front,u=1-.25*this.damage.rear,d=Math.max(0,this.vx),f=s.maxSteer/(1+Math.pow(d/42,2)),g=Xe(t.steer,-1,1)*f,_=(t.analog?6.5:4.2)*(1+1.2/(1+d/12));this.steer+=Xe(g-this.steer,-_*e*f*2,_*e*f*2),this.throttle+=Xe(t.throttle-this.throttle,-5*e,4.5*e),this.brake+=Xe(t.brake-this.brake,-8*e,7*e);const m=s.gears[this.gear-1],p=Math.abs(this.vx)/s.wheelR*m*60/(2*Math.PI);let y=Math.max(s.idle,p);this.gear===1&&this.vx<6&&(y=Math.max(y,3200+3500*this.throttle)),this.limiter=y>=s.limiter,this.limiter&&(y=s.limiter-150*Math.random()),this.rpm+=(y-this.rpm)*Math.min(1,e*28),this.shiftT>0?this.shiftT-=e:this.gear<4&&p>8350*(s.redline/9e3)?(this.gear++,this.shiftT=.12):this.gear>1&&p<(4700+(this.gear-2)*150)*(s.redline/9e3)&&(this.gear--,this.shiftT=.08);const M=ph(this.rpm,s)*(this.limiter?0:1)*(this.shiftT>0?.15:1);let v=this.throttle*M*m*s.eff/s.wheelR;const E=(1-this.throttle)*.085*ph(Math.max(this.rpm,3e3),s)*m/s.wheelR*(this.vx>.5?1:0);v=v*(1-.18*this.damage.rear)-E;const T=1.2,R=(1-.3*n.draft)*(1+.15*this.damage.front),C=.5*T*this.vx*this.vx,b=C*s.cdA*R*Math.sign(this.vx||1),S=C*s.clA*(1-.35*n.draft*.3);this.draft=n.draft,this.dirty=n.dirty;const D=Math.max(0,n.k||0),F=this.vx*this.vx*D;let L=r*(Ei*o+F*c)+S*.9;this.surface!=="track"&&(L=r*Ei+S*.8);const I=s.b/s.L;s.a/s.L;const k=r*this.ax*s.cgH/s.L,H=.44*(1-.55*n.dirty);let q=Xe(L*I-k+S*.9*(H-I),400,1e6);const V=Xe(L-q,400,1e6);q=L-V;const te=Math.max(2.5,Math.abs(this.vx)),ae=this.vx>=0?1:-1,_e=this.steer*ae-Math.atan2(this.vy+s.a*this.w,te)*1,De=-Math.atan2(this.vy-s.b*this.w,te);this.slipF=_e,this.slipR=De;const Ne=l*h*Math.pow(q/7e3,-.14),st=l*u*Math.pow(V/7e3,-.14),Je=.15;let J=this.brake*2.3*r*Ei*(this.surface==="grass"?.5:1);J=Math.min(J,2.6*r*Ei);const ne=-Math.sign(this.vx||1);let ce=v+ne*J*.42,Pe=ne*J*.58;const be=st*V,He=Ne*q,gt=t.assist===0?1:.8;ce>0&&(ce=Math.min(ce,gt*be)),ce=Xe(ce,-be,be),Pe=Xe(Pe,-He,He);const N=Math.sqrt(Math.max(.35,1-Math.pow(ce/be,2))),ct=Math.sqrt(Math.max(.35,1-Math.pow(Pe/He,2))),Ue=Ee=>Math.sin(1.45*Math.atan(Ee/Je*2));let Le=Ne*q*ct*Ue(_e),z=st*V*N*Ue(De);const ie=Xe(Math.abs(this.vx)/3,0,1);Le*=ie,z*=ie;const Q=Math.cos(this.steer),Y=Math.sin(this.steer),ye=this.surface==="track"?1/o:1;Le*=ye,z*=ye;let ue=ce+Pe*Q-Le*Y-b-s.rolling*r*Ei*Math.sign(this.vx||0)*(this.surface==="grass"?6:1),w=z+Le*Q+Pe*Y;this.surface==="grass"&&(ue-=.9*r*Math.min(1,Math.abs(this.vx)/8)*Math.sign(this.vx)*(2+.04*Math.abs(this.vx)));const x=-(n.rx||0),O=-(n.rz||0),X=this.surface==="track"?r*Ei*Math.tan(a):0,ee=s.a*Le*Q+s.a*Pe*Y-s.b*z,$=-this.w*Math.abs(this.w)*0-this.w*180,Me=this.damage.front>.4?(this.damage.left-this.damage.right+.25)*this.damage.front*700*Math.min(1,this.vx/40):0,fe=ue/r,we=w/r;this.ax+=(fe-this.ax)*Math.min(1,e*12),this.ay+=(we-this.ay)*Math.min(1,e*12);const Ce=fe+this.w*this.vy,le=we-this.w*this.vx;if(this.vx+=Ce*e,this.vy+=le*e,this.w+=(ee+$+Me)/s.Iz*e,X>0&&(n.rx||n.rz)){const Ee=x*X/r*e,me=O*X/r*e,Ge=Math.sin(this.psi),B=Math.cos(this.psi);this.vx+=Ee*Ge+me*B,this.vy+=Ee*B-me*Ge}this.brake>.5&&Math.abs(this.vx)<.4&&this.throttle<.05&&(this.vx*=.8,this.vy*=.8),this.psi+=this.w*e;const ve=Math.sin(this.psi),ke=Math.cos(this.psi);this.x+=(this.vx*ve+this.vy*ke)*e,this.z+=(this.vx*ke-this.vy*ve)*e,this.roll+=(Xe(-this.ay*.012,-.08,.08)-this.roll)*Math.min(1,e*8),this.pitch+=(Xe(-this.ax*.004,-.05,.05)-this.pitch)*Math.min(1,e*8),this.skid=Xe((Math.abs(De)-.12)*4+(Math.abs(_e)-.13)*3,0,1)*Xe(this.speed/15,0,1),this.hit*=Math.max(0,1-e*4),this.scrape*=Math.max(0,1-e*6),this.nLoad=L/(r*Ei)}applyImpulse(e,t,n,s,r){const a=this.C.mass,o=this.wvx+n*r/a,c=this.wvz+s*r/a,l=e-this.x,h=t-this.z;this.w+=(l*s-h*n)*r*-1/this.C.Iz*.3;const u=Math.sin(this.psi),d=Math.cos(this.psi);this.vx=o*u+c*d,this.vy=o*d-c*u}addDamage(e,t,n){const s=e-this.x,r=t-this.z,a=Math.sin(this.psi),o=Math.cos(this.psi),c=s*a+r*o,l=s*o-r*a,h=Math.min(1,n);Math.abs(c)>Math.abs(l)*1.5?c>0?this.damage.front=Math.min(1,this.damage.front+h):this.damage.rear=Math.min(1,this.damage.rear+h):l>0?this.damage.left=Math.min(1,this.damage.left+h):this.damage.right=Math.min(1,this.damage.right+h),this.hit=Math.max(this.hit,Math.min(1,n*3)),this.lastImpact=Math.min(1,n*3)}}const ac={e87:{id:"e87",file:"regal",year:1987,name:"'87 Heritage Stock",tag:"Big, heavy and loose. Carburetted V8, bias tyres, almost no downforce.",spec:{mass:1570,Iz:3050,clA:.38,cdA:1.48,cgH:.55,rpmScale:.84,tqScale:.95,mu:{track:1.3,apron:1.15},pace:.9},stats:{power:3,grip:2,aero:1}},e05:{id:"e05",file:"stock",year:2005,name:"'05 Classic Stock",tag:"The balanced all-rounder. Fuel-injected V8, solid downforce.",spec:{rpmScale:1,tqScale:1,pace:1},stats:{power:4,grip:4,aero:3}},e15:{id:"e15",file:"camry",year:2015,name:"'15 Modern Stock",tag:"Lightest and stickiest. Wide tyres, big aero package, a rocket in the draft.",spec:{mass:1470,Iz:2850,clA:1,cdA:1.22,cgH:.5,rpmScale:1,tqScale:1.05,mu:{track:1.6,apron:1.35},pace:1.045},stats:{power:5,grip:5,aero:5}}};function t1(i,e=null){const t=ac[i]||ac.e05,n=Object.assign({},t.spec),s=n.rpmScale||1,r=n.tqScale||1;return delete n.rpmScale,delete n.tqScale,n.torque=an.torque.map(([a,o])=>[a*s,o*r]),n.gears=an.gears.map(a=>a*s),n.idle=Math.round(an.idle*(.9+.1*s)),n.redline=Math.round(an.redline*s),n.limiter=Math.round(an.limiter*s),e&&(n.L=e.wheelbase,n.a=e.a,n.b=e.b,n.wheelR=e.wheelR,n.length=e.L,n.width=e.W),n}const mh={rookie:"e87",regional:"e05",pro:"e15",legends:"e15"},Ii={},n1={},gh=i=>new URL("assets/car/"+i,document.baseURI).href;function _h(i){const e=ac[i];return e?Ii[i]?Promise.resolve(Ii[i]):n1[i]||=Promise.all([new l_().loadAsync(gh(e.file+".glb")),fetch(gh(e.file+".json")).then(t=>t.json())]).then(([t,n])=>(Ii[i]={scene:t.scene,cfg:n},Ii[i])):Promise.reject(new Error("unknown car "+i))}const i1=i=>Ii[i]&&Ii[i].cfg;function s1(i,e){e==="matte"?(i.roughness=.72,i.metalness=.05,i.clearcoat=0):e==="metallic"?(i.roughness=.3,i.metalness=.65,i.clearcoat=1,i.clearcoatRoughness=.04):(i.roughness=.26,i.metalness=.12,i.clearcoat=1,i.clearcoatRoughness=.06),i.needsUpdate=!0}function io({car:i="e05",atlas:e="high",livery:t}={}){const n=Ii[i];if(!n)throw new Error("car not loaded: "+i+" (await loadCar first)");const s=n.cfg,r=n.scene.clone(!0),a=e==="high"?2048:e==="med"?1024:512,o=document.createElement("canvas");o.width=a,o.height=a;const c=new mu(o);c.colorSpace=St,c.flipY=!1,c.anisotropy=8,c.generateMipmaps=!0,c.minFilter=Nn;const l=new Rn({map:c,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25}),h={F:null,R:null};r.traverse(p=>{if(!p.isMesh)return;const y=p.material.name;p.castShadow=y!=="RTTA_Glass",p.receiveShadow=y==="RTTA_Paint",y==="RTTA_Paint"?p.material=l:y==="RTTA_LightF"?p.material=h.F||=p.material.clone():y==="RTTA_LightR"?p.material=h.R||=p.material.clone():y==="RTTA_Glass"&&(p.material.depthWrite=!1,p.material.envMapIntensity=1.6,p.renderOrder=2)});const u=new mn,d=new mn;u.add(d),d.add(r);const f=[],g=[];for(const p of["FL","FR","RL","RR"]){const y=r.getObjectByName("wheel_"+p);if(!y)continue;const M=new mn;for(const v of y.children.slice())M.add(v);y.add(M),f.push(M),g.push({pivot:y,spin:M,front:p[0]==="F",side:p[1]==="L"?1:-1})}const _={group:u,inner:d,wheels:f,pivots:g,bodyMat:l,texture:c,canvas:o,cfg:s,id:i,livery:null,dirty:!0,spin:0,dim:{L:s.L,W:s.W,H:s.H,wheelR:s.wheelR,tireW:s.tireW,track:s.track,front:s.a,rear:-s.b}};_.setLivery=p=>{_.livery=JSON.parse(JSON.stringify(p)),_.dirty=!0},_.flush=()=>{!_.dirty||!_.livery||(Z_(o,_.livery,s),c.needsUpdate=!0,_.dirty=!1,s1(l,_.livery.finish))},_.setLights=p=>{_.lightsOn=!!p,m()},_.setBrake=p=>{_.brakeOn=p>.05,m()};function m(){h.F&&(h.F.emissive=new Be(16773840),h.F.emissiveIntensity=_.lightsOn?1.6:0),h.R&&(h.R.emissive=new Be(16715792),h.R.emissiveIntensity=(_.lightsOn?.5:0)+(_.brakeOn?2.2:0))}return _.update=p=>{for(const y of g)y.pivot.rotation.y=y.front?p.steer:0,y.spin.rotation.x=p.spin;d.rotation.z=p.roll||0,d.rotation.x=p.pitch||0},_.dispose=()=>{c.dispose(),l.dispose(),h.F&&h.F.dispose(),h.R&&h.R.dispose()},t&&(_.setLivery(t),_.flush()),_}const vh={rookie:{pace:.905,aggression:.25,mistakes:.0012,lines:3},pro:{pace:.945,aggression:.45,mistakes:7e-4,lines:4},veteran:{pace:.975,aggression:.65,mistakes:3e-4,lines:5},legend:{pace:1,aggression:.85,mistakes:12e-5,lines:5}};class Uu{constructor(e,t="pro",n=1,s=0){this.track=e,this.lv=vh[t]||vh.pro,this.rnd=Uc(n*7919+13),this.skill=.97+this.rnd()*.06,this.lane=s,this.laneT=s,this.laneTimer=2+this.rnd()*4,this.err=0,this.mistake=0,this.passing=0,this.steerLP=0}control(e,t,n,s,r){const a=this.track,o=Math.max(.1,t.vx);this.laneTimer-=e;let c=null,l=1e9;for(const I of s){if(I.car===t)continue;let k=I.s-n.s;k<-a.length/2&&(k+=a.length),k>a.length/2&&(k-=a.length),k>0&&k<l&&Math.abs(I.u-n.u)<3.4&&(l=k,c=I)}let h=!1,u=!1;for(const I of s){if(I.car===t)continue;let k=I.s-n.s;if(k<-a.length/2&&(k+=a.length),k>a.length/2&&(k-=a.length),k>-8&&k<8){const H=I.u-n.u;H>.5&&H<3.8&&(u=!0),H<-.5&&H>-3.8&&(h=!0)}}const d=r.phase==="green"&&r.t>9;if(c&&l<34&&this.laneTimer<=0&&d){const I=[-1,1].map(V=>this.laneTarget(n.u+V*3.6)),k=I.map(V=>this.laneFree(t,n,s,V)),H=this.rnd()<.5?0:1,q=k[H]?H:k[1-H]?1-H:-1;q>=0&&this.rnd()<.5+.5*this.lv.aggression&&(this.laneT=I[q],this.passing=3+this.rnd()*3),this.laneTimer=1.5+this.rnd()*2}else this.passing>0?(this.passing-=e,this.passing<=0&&!c&&(this.laneT=this.lane+(this.rnd()-.5)*2)):this.laneTimer<=0&&(this.laneT=this.lane+(this.rnd()-.5)*3,this.laneTimer=4+this.rnd()*6);this.laneT=Xe(this.laneT,-a.cfg.halfW+1.8,a.cfg.halfW-1.8),u&&this.laneT>this.err&&(this.laneT=this.err-.3),h&&this.laneT<this.err&&(this.laneT=this.err+.3),u&&h&&(this.laneT=this.err),this.err+=(this.laneT-this.err)*Math.min(1,e*.9),this.mistake>0?this.mistake-=e:r.phase==="green"&&this.rnd()<this.lv.mistakes*e*60&&(this.mistake=.4+this.rnd()*.5);const f=Math.atan2(n.tx,n.tz),g=s_(f-t.psi+Math.atan2(t.vy,Math.max(5,o))*0),_=n.u-this.err,m=a.at(n.s+.18*o+6).k;let p=Math.atan(t.C.L*m)*1+.01*o*o*m*0;p+=.9*g+Math.atan2(1.1*_,o+6)-.09*(t.w-o*n.k)*1;const y=Math.atan2(t.vy,Math.max(6,o));Math.abs(y)>.12&&(p+=.9*(y-Math.sign(y)*.12));const M=t.C.maxSteer/(1+Math.pow(o/42,2));let v=Xe(p/M,-1,1);v+=this.mistake>0?Math.sin(this.mistake*14)*.05:0,this.steerLP+=(v-this.steerLP)*Math.min(1,e*14);const E=Math.abs(a.at(n.s+40+o*.8).k);let T=88*this.lv.pace*this.skill*(t.C.pace||1);const R=a.at(n.s+30).bank,C=(20+9.81*Math.tan(Math.min(R,.55))*1.4)*(t.C.mu.track/1.5)*(1-.07*Xe(t.dirty||0,0,1))*.94;if(E>1e-4&&(T=Math.min(T,Math.sqrt(C/E))),c){const I=7+o*.12,k=Math.max(0,c.car.vx);if(l<I+25){const H=Xe((l-I)/25,-1,1);T=Math.min(T,k*(1+.04*H)+(H>0?6:-4))}this.passing>0&&Math.abs(this.err-c.u)>2.5&&(T=Math.max(T,k+2))}this.mistake>0&&(T*=.85),r.phase!=="green"&&r.phase!=="checker"&&r.phase!=="yellow"&&(T=0),r.phase==="yellow"&&(T=Math.min(T,38)),r.phase==="checker"&&(T=Math.min(T,40));const b=T-t.vx,D=Math.abs(y)>.2?0:Xe(.5+b*.45,0,1),F=Math.abs(o*o*n.k),L=Xe(-b*.15-.05,0,.85*Xe(1-.8*F/20,.22,1))*(b<-3?1:0);return{steer:this.steerLP,throttle:L>0?0:D,brake:L,analog:!0}}laneTarget(e){return Xe(e,-this.track.cfg.halfW+1.8,this.track.cfg.halfW-1.8)}laneFree(e,t,n,s){for(const r of n){if(r.car===e)continue;let a=r.s-t.s;if(a<-this.track.length/2&&(a+=this.track.length),a>this.track.length/2&&(a-=this.track.length),a>-10&&a<18&&Math.abs(r.u-s)<2.6)return!1}return!0}}const kr=an.length/2,Fr=an.width/2;class yh{constructor(e,t,n,s,r=!1,a=null,o=null){this.carId=o,this.id=e,this.name=t,this.number=n,this.livery=s,this.isPlayer=r,this.sim=new e1(e,a),this.driver=null,this.q={},this.hint=0,this.prog=0,this.prevS=0,this.lap=0,this.lapStart=0,this.lastLap=null,this.bestLap=null,this.finished=!1,this.finishTime=null,this.pos=0,this.gap=0,this.visual=null,this.controls={steer:0,throttle:0,brake:1}}}class r1{constructor(e,t,n={}){this.track=e,this.entries=t,this.laps=n.laps||3,this.mode=n.mode||"race",this.phase="grid",this.t=0,this.countdown=4.2,this.onEvent=n.onEvent||(()=>{}),this.finishedCount=0,this.leaderDone=!1,this.endTimer=0,this.sorted=t.slice(),this.ready=!1,this.lastCount=99,this.flag=null,this.wallHits=0,this.cars=t.map(s=>({car:s.sim,s:0,u:0}))}get player(){return this.entries.find(e=>e.isPlayer)}gridUp(e=0){const t=this.track,n=this.entries.slice(),s=this.player;s&&(n.splice(n.indexOf(s),1),n.splice(Xe(e,0,n.length),0,s)),n.forEach((r,a)=>{const o=Math.floor(a/2),c=a%2,l=-14-o*11-(c?5.5:0),h=c?3.4:-3.4,u=t.point(l,h,{});r.sim.place(u.x,u.z,u.heading,0),r.sim.damage={front:0,rear:0,left:0,right:0},r.sim.gear=1,r.sim.rpm=r.sim.C.idle,t.query(u.x,u.z,void 0,r.q),r.hint=r.q.i,r.prevS=r.q.s,r.prog=l,r.lap=0,r.lapStart=0,r.lastLap=null,r.bestLap=null,r.finished=!1,r.finishTime=null,r.gridPos=a+1,r.driver&&(r.driver.lane=h*.4,r.driver.laneT=r.driver.lane,r.driver.err=h)}),this.sortNow(),this.phase="grid",this.t=0,this.countdown=4.2,this.lastCount=99}rollingStart(e=40,t=-60){const n=this.player,s=this.track.point(t,-1,{});n.sim.place(s.x,s.z,s.heading,e),n.sim.gear=3,this.track.query(s.x,s.z,void 0,n.q),n.hint=n.q.i,n.prevS=n.q.s,n.prog=t,n.lap=0,n.lapStart=0,this.phase="green",this.t=0,this.countdown=0}sortNow(){this.sorted=this.entries.slice().sort((e,t)=>t.finished!==e.finished?t.finished?1:-1:t.finished&&e.finished?e.finishTime-t.finishTime:t.prog-e.prog),this.sorted.forEach((e,t)=>{e.pos=t+1})}update(e){const t=this.track;if(this.t+=e,this.phase==="grid"){this.countdown-=e;const r=Math.ceil(this.countdown);if(r!==this.lastCount&&r<=3&&(this.lastCount=r,this.onEvent(r>0?"count":"go",r)),this.countdown<=0){this.phase="green",this.t=0,this.onEvent("go",0);for(const a of this.entries)a.lapStart=0}}for(let r=0;r<this.entries.length;r++){const a=this.entries[r];this.cars[r].s=a.q.s||0,this.cars[r].u=a.q.u||0,this.cars[r].car=a.sim}const n=t.length;for(const r of this.entries){const a=r.sim,o=r.q;let c=r.controls;!r.isPlayer&&r.driver&&(c=r.driver.control(e,a,o,this.cars,this)),r.controls=c,this.phase==="grid"&&(c={steer:0,throttle:0,brake:1,analog:!0}),r.finished&&r.isPlayer&&this.phase!=="grid"&&(c={steer:Xe(c.steer*.6,-1,1),throttle:0,brake:.25,analog:!0});let l=0,h=0;for(const f of this.entries){if(f===r)continue;let g=f.q.s-o.s;if(g<-n/2&&(g+=n),g>n/2&&(g-=n),g>3&&g<45&&Math.abs(f.q.u-o.u)<3){const _=1-g/45;l=Math.max(l,_*(f.sim.vx>30?1:.3)),g<20&&(h=Math.max(h,1-g/20))}}if(a.step(e,c,{surface:o.surface,bank:o.bank,rx:o.rx,rz:o.rz,k:o.k,draft:l,dirty:h}),t.query(a.x,a.z,r.hint,o),r.hint=o.i,a.trackU=o.u,a.trackS=o.s,!r.isPlayer&&this.phase!=="grid"){const f=Math.atan2(o.tx,o.tz);let g=Math.abs((a.psi-f+Math.PI*3)%(Math.PI*2)-Math.PI);if(a.vx<6||g<1.2&&!1||Math.abs(a.psi-f)>1.6&&Math.abs(a.psi-f)<4.7?r.stuck=(r.stuck||0)+e:r.stuck=0,r.stuck>3&&!r.finished){const _=t.point(o.s+6,Xe(o.u,-7,7),{});a.place(_.x,_.z,_.heading,28),a.w=0,a.gear=2,r.stuck=0}}let u=o.s-r.prevS;u<-n/2?u+=n:u>n/2&&(u-=n),r.prevS=o.s;const d=r.prog;if(r.prog+=u,Math.floor(r.prog/n)>Math.floor(d/n)&&r.prog>0){const f=Math.floor(r.prog/n);if(f>=1){const g=this.t-r.lapStart;this.phase!=="grid"&&f===r.lap+1&&(r.lastLap=g,(r.lapStart>0||f>1||this.mode==="hotlap"||g>20)&&(!r.bestLap||g<r.bestLap)&&(r.bestLap=g),r.lap=f,r.lapStart=this.t,this.onEvent("lap",r,g),r.isPlayer&&r.bestLap===g&&this.onEvent("bestlap",r,g),this.mode==="race"&&f>=this.laps&&!r.finished&&(r.finished=!0,r.finishTime=this.t,this.finishedCount++,this.onEvent("finish",r),this.leaderDone||(this.leaderDone=!0,this.phase="checker",this.onEvent("checker"))))}}}this.contacts(),this.sortNow();const s=this.sorted[0];for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r-1];a.gapAhead=o?Math.max(0,o.prog-a.prog)/Math.max(25,a.sim.vx):0,a.gapLead=s?Math.max(0,s.prog-a.prog)/Math.max(25,a.sim.vx):0}for(let r=0;r<this.sorted.length;r++){const a=this.sorted[r],o=this.sorted[r+1];a.gapBehind=o?Math.max(0,a.prog-o.prog)/Math.max(25,o.sim.vx):0}if(this.phase==="checker"){const r=this.player;this.mode==="race"&&r&&r.finished&&(this.endTimer+=e,this.endTimer>4.5&&!this.done&&(this.done=!0,this.phase="done",this.onEvent("done")))}}contacts(){const e=this.entries,t=this.track,n=t.cfg,s=n.halfW+.5,r=-n.halfW-n.apron-n.infieldLimit;for(let a=0;a<e.length;a++){const o=e[a].sim;for(let u=a+1;u<e.length;u++){const d=e[u].sim,f=d.x-o.x,g=d.z-o.z;if(f*f+g*g>36)continue;const _=Math.sin(o.psi),m=Math.cos(o.psi),p=Math.sin(d.psi),y=Math.cos(d.psi);for(const M of[1.4,0,-1.4])for(const v of[1.4,0,-1.4]){const E=o.x+_*M,T=o.z+m*M,R=d.x+p*v,C=d.z+y*v,b=R-E,S=C-T,D=b*b+S*S,F=2;if(D<F*F&&D>1e-6){const L=Math.sqrt(D),I=b/L,k=S/L,H=F-L,q=d.wvx-o.wvx,V=d.wvz-o.wvz,te=q*I+V*k,ae=H*.5;if(o.x-=I*ae,o.z-=k*ae,d.x+=I*ae,d.z+=k*ae,te<0){const _e=-1.12*te/(2/an.mass),De=Math.min(_e,3e4);o.applyImpulse((E+R)/2,(T+C)/2,-I,-k,De*.6),d.applyImpulse((E+R)/2,(T+C)/2,I,k,De*.6);const Ne=Math.min(1,-te/22);-te>2&&(o.addDamage((E+R)/2,(T+C)/2,Ne*.18),d.addDamage((E+R)/2,(T+C)/2,Ne*.18),this.onEvent("crash",e[a],e[u],Ne))}}}}const c=e[a].q;if(!c||c.u===void 0)continue;const l=Math.sin(o.psi),h=Math.cos(o.psi);for(const[u,d]of[[kr,Fr],[kr,-Fr],[-kr,Fr],[-kr,-Fr]]){const f=o.x+l*u+h*d,g=o.z+h*u-l*d,_={};t.query(f,g,e[a].hint,_);const m=_.u-s,p=r-_.u;if(m>0||p>0){const y=m>0,M=y?-_.rx:_.rx,v=y?-_.rz:_.rz,E=y?m:p;o.x+=M*E*1,o.z+=v*E*1;const T=o.wvx*M+o.wvz*v;if(T<0){const R=-1.08*T*an.mass;o.applyImpulse(f,g,M,v,Math.min(R,9e4)*.55);const C=Math.min(1,-T/26);-T>1.5&&(o.addDamage(f,g,C*.22),this.onEvent("wall",e[a],C)),o.scrape=1,o.vx*=.995}}}}}}const ku="rtta3.career.v1",na={paint:"#d9dde2",accent:"#1d1f24",trim:"#1d1f24",pattern:"none",finish:"gloss",number:"00",numberColor:"#1d1f24",numberStyle:"block",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}},bn=[{id:"rookie",name:"Rookie Cup",laps:3,field:12,ai:"rookie",mult:1,unlockRep:0,races:6},{id:"regional",name:"Regional Sprint",laps:5,field:16,ai:"pro",mult:1.5,unlockRep:350,races:8},{id:"pro",name:"Pro Series",laps:8,field:24,ai:"veteran",mult:2.2,unlockRep:1100,races:10},{id:"legends",name:"Legends 200",laps:12,field:32,ai:"legend",mult:3,unlockRep:2600,races:12}],xh={1:{races:2,avgPct:.3,series:0},2:{races:5,avgPct:.55,series:0},3:{races:9,avgPct:.7,series:1},4:{races:14,avgPct:.82,series:2}},Gs={pattern:{none:0,stripe:0,split:300,chevron:600,fade:900},finish:{gloss:0,matte:400,metallic:800}},a1=i=>JSON.parse(JSON.stringify(i)),oc=()=>({v:1,name:"Driver",credits:0,rep:0,races:[],owned:[],declined:[],unlocked:{pattern:["none","stripe"],finish:["gloss"]},livery:a1(na),seriesIndex:0,seasonRace:0,bestLap:null});function o1(i){try{const e=i&&i.getItem(ku);if(e){const t=JSON.parse(e);if(t&&t.v===1)return Object.assign(oc(),t)}}catch{}return oc()}class ua{constructor(e=typeof localStorage<"u"?localStorage:null){this.storage=e,this.state=o1(e),this.listeners=new Set}save(){try{this.storage&&this.storage.setItem(ku,JSON.stringify(this.state))}catch{}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.state=oc(),this.save()}get series(){return bn[this.state.seriesIndex]}unlockedSeries(){return bn.filter((e,t)=>this.state.rep>=e.unlockRep||t<=this.state.seriesIndex)}selectSeries(e){return bn[e]&&this.state.rep>=bn[e].unlockRep?(this.state.seriesIndex=e,this.state.seasonRace=0,this.save(),!0):!1}nextRace(){const e=this.series;return{series:e,index:this.state.seasonRace,of:e.races,laps:e.laps,field:e.field,ai:e.ai}}setLivery(e){const t=this.state.livery;for(const n of Object.keys(e))n==="slots"?Object.assign(t.slots,e.slots):t[n]=e[n];for(const n of tc){const s=t.slots[n];s&&!this.state.owned.includes(s)&&(t.slots[n]=null)}return this.save(),t}static finishPct(e,t){return t<=1?1:1-(e-1)/(t-1)}recentAvgPct(e=3){const t=this.state.races.slice(-e);return t.length?t.reduce((n,s)=>n+c1.pct(s),0)/t.length:0}repFor(e,t,n){const s=120*(t-e)/Math.max(1,t-1);return Math.round((s+(e===1?40:0)+(e<=3?15:0)+10)*n)}recordResult({series:e,pos:t,field:n,laps:s,bestLap:r,points:a}){const o=this.state,c=bn.find(p=>p.id===e)||this.series,l=new Set(this.offers().map(p=>p.id)),h=this.repFor(t,n,c.mult);let u=0;const d=[],f=new Set;for(const p of tc){const y=o.livery.slots[p],M=y&&xs(y);if(!M||f.has(y)||!o.owned.includes(y))continue;f.add(y);const v=M.slots.includes(p)?1:.6,E=.5+.5*ua.finishPct(t,n),T=Math.round(M.payout*v*E);u+=T,d.push({id:y,name:M.name,amount:T})}const g=Math.round(40*c.mult*(n-t+1));o.rep+=h,o.credits+=u+g,o.races.push({series:c.id,pos:t,field:n,laps:s,t:Date.now()}),r&&(!o.bestLap||r<o.bestLap)&&(o.bestLap=r),c.id===this.series.id&&(o.seasonRace=Math.min(o.seasonRace+1,c.races)),this.save();const _=this.offers().filter(p=>!l.has(p.id)),m=bn.filter(p=>o.rep>=p.unlockRep&&o.rep-h<p.unlockRep);return{repGain:h,prize:g,sponsorPay:u,paid:d,newOffers:_,unlockedSeries:m,rep:o.rep,credits:o.credits}}eligibleTier(){const e=this.state,t=this.recentAvgPct(3),n=Math.max(...bn.map((r,a)=>e.rep>=r.unlockRep?a:0));let s=0;for(const r of[1,2,3,4]){const a=xh[r];e.races.length>=a.races&&t>=a.avgPct&&n>=a.series&&(s=r)}return s}offers(){const e=this.eligibleTier();return ha.filter(t=>t.tier<=e&&!this.state.owned.includes(t.id)&&!this.state.declined.includes(t.id))}nextTierGoal(){const e=this.eligibleTier()+1,t=xh[e];if(!t)return null;const n=this.state,s=Math.max(...bn.map((r,a)=>n.rep>=r.unlockRep?a:0));return{tier:e,racesNeeded:Math.max(0,t.races-n.races.length),avgNeeded:t.avgPct,avgNow:this.recentAvgPct(3),seriesNeeded:t.series>s?bn[t.series].name:null}}acceptSponsor(e){return this.offers().some(t=>t.id===e)?(this.state.owned.push(e),this.save(),!0):!1}declineSponsor(e){this.state.declined.includes(e)||(this.state.declined.push(e),this.save())}canUse(e,t){return this.state.unlocked[e]?this.state.unlocked[e].includes(t)||Gs[e][t]===0:!0}buy(e,t){const n=Gs[e]&&Gs[e][t];return n===void 0||this.canUse(e,t)||this.state.credits<n?!1:(this.state.credits-=n,(this.state.unlocked[e]||=[]).push(t),this.save(),!0)}}const c1={pct:i=>ua.finishPct(i.pos,i.field)},l1=new ua;function h1(){const i=new Set,e=new Set,t={touchActive:!1,touch:{steer:0,throttle:0,brake:0},steer:0,usingPad:!1,lastKeyT:0},n={KeyC:"camera",Escape:"pause",KeyP:"pause",KeyR:"reset",KeyV:"look"},s=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);addEventListener("keydown",a=>{a.target&&/INPUT|TEXTAREA|SELECT/.test(a.target.tagName)||(s.has(a.code)&&a.preventDefault(),a.repeat||(i.add(a.code),n[a.code]&&e.add(n[a.code])))}),addEventListener("keyup",a=>i.delete(a.code)),addEventListener("blur",()=>i.clear()),t.setTouch=a=>{t.touch.steer=Xe(a.steer||0,-1,1),t.touch.throttle=Xe(a.throttle||0,0,1),t.touch.brake=Xe(a.brake||0,0,1),t.lastTouchT=performance.now()},t.press=a=>e.add(a),t.consume=a=>e.has(a)?(e.delete(a),!0):!1,t.clear=()=>{e.clear()};const r=(...a)=>a.some(o=>i.has(o));return t.read=(a,o)=>{let c=0,l=0,h=0,u=!1;const d=r("ArrowLeft","KeyA"),f=r("ArrowRight","KeyD");h=(d?1:0)-(f?1:0),c=r("ArrowUp","KeyW")?1:0,l=r("ArrowDown","KeyS","Space")?1:0;const g=navigator.getGamepads?navigator.getGamepads():[],_=g&&[...g].find(m=>m&&m.connected);if(_){const m=Math.abs(_.axes[0])>.08?_.axes[0]:0,p=_.buttons[7]?_.buttons[7].value:0,y=_.buttons[6]?_.buttons[6].value:0;(m||p>.02||y>.02)&&(h=-m,c=Math.max(c,p),l=Math.max(l,y),u=!0,t.steer=Xe(-m,-1,1)),_.buttons[0]&&_.buttons[0].pressed&&!t._a&&e.add("look"),t._a=_.buttons[0]&&_.buttons[0].pressed,_.buttons[3]&&_.buttons[3].pressed&&!t._y&&e.add("camera"),t._y=_.buttons[3]&&_.buttons[3].pressed,_.buttons[9]&&_.buttons[9].pressed&&!t._s&&e.add("pause"),t._s=_.buttons[9]&&_.buttons[9].pressed}if(t.touchActive&&performance.now()-(t.lastTouchT||0)<600){const m=t.touch;(m.steer||m.throttle||m.brake)&&(h=m.steer,c=m.throttle,l=m.brake,u=!0,t.steer=m.steer)}if(!u){const m=3.6/(1+o/45),y=(h===0?6.5:m)*(Math.sign(h)!==Math.sign(t.steer)&&t.steer!==0&&h!==0?1.6:1);t.steer+=Xe(h-t.steer,-y*a,y*a)}return{steer:Xe(t.steer,-1,1),throttle:c,brake:l,analog:!0}},t}const wt=(i,e,t)=>i<e?e:i>t?t:i,Li=i=>440*Math.pow(2,(i-69)/12);function da(i){let e=i>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Mh=new WeakMap;function fa(i,e="white"){let t=Mh.get(i);if(t||(t={},Mh.set(i,t)),t[e])return t[e];const n=i.sampleRate,s=Math.floor(n*4),r=2048,a=s+r,o=new Float32Array(a),c=da(e==="white"?1234:e==="pink"?777:4242);if(e==="white")for(let f=0;f<a;f++)o[f]=c()*2-1;else if(e==="pink"){let f=0,g=0,_=0,m=0,p=0,y=0,M=0;for(let v=0;v<a;v++){const E=c()*2-1;f=.99886*f+E*.0555179,g=.99332*g+E*.0750759,_=.969*_+E*.153852,m=.8665*m+E*.3104856,p=.55*p+E*.5329522,y=-.7616*y-E*.016898,o[v]=(f+g+_+m+p+y+M+E*.5362)*.11,M=E*.115926}}else{let f=0;for(let g=0;g<a;g++){const _=c()*2-1;f=(f+.02*_)/1.02,o[g]=f*3.5}}const l=i.createBuffer(1,s,n),h=l.getChannelData(0);for(let f=0;f<s;f++)h[f]=o[f];for(let f=0;f<r;f++){const g=f/r;h[f]=o[f]*g+o[s+f]*(1-g)}let u=0;for(let f=0;f<s;f++)u=Math.max(u,Math.abs(h[f]));const d=u>0?.95/u:1;for(let f=0;f<s;f++)h[f]*=d;return t[e]=l,l}function Fu(i,e,t,n,s,r){const a=i.createGain(),o=Math.max(.002,s);return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+o),a.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(o+.01,r)),a.gain.setValueAtTime(0,t+Math.max(o+.01,r)+.005),a.connect(e),a}function je(i,e,t,n){const s=n.dur??.2,r=Fu(i,e,t,n.peak??.3,n.attack??.004,s);let a=r;if(n.pan){const l=i.createStereoPanner?i.createStereoPanner():null;l&&(l.pan.value=n.pan,l.connect(r),a=l)}let o=a;if(n.filter){const l=i.createBiquadFilter();l.type=n.filter.type||"lowpass",l.Q.value=n.filter.q??.7,l.frequency.setValueAtTime(n.filter.f,t),n.filter.f1&&l.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),l.connect(a),o=l}const c=i.createOscillator();return c.type=n.type||"sine",c.frequency.setValueAtTime(n.f0,t),n.f1&&c.frequency.exponentialRampToValueAtTime(n.f1,t+s),n.detune&&(c.detune.value=n.detune),c.connect(o),c.start(t),c.stop(t+s+.05),c}function Ut(i,e,t,n){const s=n.dur??.1,r=Fu(i,e,t,n.peak??.3,n.attack??.002,s);let a=r;if(n.pan&&i.createStereoPanner){const l=i.createStereoPanner();l.pan.value=n.pan,l.connect(r),a=l}const o=i.createBiquadFilter();o.type=n.filter?.type||"bandpass",o.Q.value=n.filter?.q??1,o.frequency.setValueAtTime(n.filter?.f??1500,t),n.filter?.f1&&o.frequency.exponentialRampToValueAtTime(n.filter.f1,t+s),o.connect(a);const c=i.createBufferSource();return c.buffer=fa(i,n.kind||"white"),c.loop=!0,c.connect(o),c.start(t,(n.offset??0)%3.5),c.stop(t+s+.05),c}function u1(i,e=1.6,t=3.2,n=99){const s=i.sampleRate,r=Math.floor(s*e),a=i.createBuffer(2,r,s);for(let o=0;o<2;o++){const c=a.getChannelData(o),l=da(n+o*17);let h=0;for(let u=0;u<r;u++){const d=Math.pow(1-u/r,t);h+=(l()*2-1-h)*(.35+.65*(1-u/r)),c[u]=h*d*(u<64?u/64:1)}}return a}function ia(i){return new Promise(e=>setTimeout(e,i))}const Ln={C5:523.25,G5:783.99,A5:880,B5:987.77,E6:1318.5,A6:1760},bh=(i,e,t=.03)=>i*(1+e*t),d1={hover(i,e,t,n=0){return je(i,e,t,{type:"sine",f0:bh(2400,n),dur:.035,peak:.07,attack:.002}),Ut(i,e,t,{dur:.012,peak:.035,filter:{type:"highpass",f:6500,q:.7}}),.06},click(i,e,t,n=0){return Ut(i,e,t,{dur:.014,peak:.2,filter:{type:"highpass",f:3500,q:.7}}),je(i,e,t,{type:"sine",f0:bh(1100,n),f1:700,dur:.075,peak:.28,attack:.002}),je(i,e,t,{type:"triangle",f0:330,dur:.05,peak:.1,attack:.002}),.12},confirm(i,e,t){return je(i,e,t,{type:"square",f0:Ln.C5,dur:.1,peak:.12,filter:{type:"lowpass",f:3200}}),je(i,e,t+.07,{type:"square",f0:Ln.G5,dur:.24,peak:.13,filter:{type:"lowpass",f:3600,f1:1200}}),je(i,e,t+.07,{type:"sine",f0:Ln.G5*2,dur:.22,peak:.07}),je(i,e,t,{type:"sine",f0:130,f1:100,dur:.18,peak:.22,attack:.003}),Ut(i,e,t+.07,{dur:.16,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),.35},back(i,e,t){return je(i,e,t,{type:"sine",f0:740,f1:420,dur:.12,peak:.24,attack:.002}),Ut(i,e,t,{dur:.012,peak:.1,filter:{type:"highpass",f:3e3,q:.7}}),.16},error(i,e,t){for(const n of[0,.13])je(i,e,t+n,{type:"sawtooth",f0:165,dur:.1,peak:.2,filter:{type:"lowpass",f:800}}),je(i,e,t+n,{type:"square",f0:110,dur:.1,peak:.1});return .28},tab(i,e,t){return Ut(i,e,t,{dur:.06,peak:.12,filter:{type:"bandpass",f:2500,f1:5200,q:1.5}}),je(i,e,t,{type:"sine",f0:1800,dur:.035,peak:.12,attack:.002}),.08},toggle(i,e,t,n=!0){return je(i,e,t,{type:"sine",f0:n?600:1200,f1:n?1200:560,dur:.09,peak:.22,attack:.002}),Ut(i,e,t,{dur:.01,peak:.08,filter:{type:"highpass",f:4e3,q:.7}}),.12},whoosh(i,e,t){return Ut(i,e,t,{kind:"pink",dur:.5,attack:.14,peak:.34,filter:{type:"bandpass",f:250,f1:4200,q:1}}),Ut(i,e,t+.05,{kind:"white",dur:.35,attack:.12,peak:.07,filter:{type:"highpass",f:3e3,f1:8e3,q:.7}}),.55},intro(i,e,t){je(i,e,t,{type:"sine",f0:40,f1:110,dur:1.75+.1,peak:.26,attack:1.5}),Ut(i,e,t,{kind:"pink",dur:1.75+.05,attack:1.75-.1,peak:.28,filter:{type:"bandpass",f:200,f1:8e3,q:2}});for(const r of[110,164.81,246.94,261.63,392])je(i,e,t,{type:"sawtooth",f0:r,dur:1.75+.2,peak:.05,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}}),je(i,e,t,{type:"sawtooth",f0:r*1.004,dur:1.75+.2,peak:.035,attack:1.75-.1,filter:{type:"lowpass",f:300,f1:3500,q:.8}});const s=t+1.75;je(i,e,s,{type:"sine",f0:120,f1:34,dur:.75,peak:.55,attack:.003}),Ut(i,e,s,{kind:"white",dur:1,peak:.26,attack:.002,filter:{type:"highpass",f:1800,f1:900,q:.6}});for(const[r,a]of[[440,.1],[659.25,.09],[880,.08]])je(i,e,s,{type:"sawtooth",f0:r,dur:1,peak:a,attack:.003,filter:{type:"lowpass",f:5200,f1:700,q:.9}}),je(i,e,s+.24,{type:"sawtooth",f0:r,dur:.8,peak:a*.4,attack:.003,filter:{type:"lowpass",f:4200,f1:700,q:.9}});return 1.75+1.1},countdown(i,e,t,n=3){return je(i,e,t,{type:"sine",f0:880,dur:.16,peak:.3,attack:.004}),je(i,e,t,{type:"square",f0:440,dur:.12,peak:.05,filter:{type:"lowpass",f:1500}}),.2},go(i,e,t){return je(i,e,t,{type:"square",f0:1320,dur:.5,peak:.12,filter:{type:"lowpass",f:4e3,f1:1500}}),je(i,e,t,{type:"sine",f0:660,dur:.5,peak:.28,attack:.004}),je(i,e,t,{type:"sine",f0:90,f1:45,dur:.35,peak:.35,attack:.003}),Ut(i,e,t,{kind:"pink",dur:.4,attack:.05,peak:.16,filter:{type:"bandpass",f:400,f1:3800,q:1}}),.6},lap(i,e,t){return je(i,e,t,{type:"sine",f0:Ln.B5,dur:.5,peak:.22,attack:.003}),je(i,e,t,{type:"sine",f0:Ln.B5*2,dur:.28,peak:.07,attack:.003}),je(i,e,t+.12,{type:"sine",f0:Ln.E6,dur:.62,peak:.2,attack:.003}),je(i,e,t+.12,{type:"sine",f0:Ln.E6*2,dur:.35,peak:.06,attack:.003}),.8},bestLap(i,e,t){return[Ln.A5,1108.73,Ln.E6,Ln.A6].forEach((n,s)=>{je(i,e,t+s*.075,{type:"triangle",f0:n,dur:.38,peak:.17,attack:.003}),je(i,e,t+s*.075,{type:"sine",f0:n*2,dur:.22,peak:.05,attack:.003})}),Ut(i,e,t+.28,{dur:.5,attack:.05,peak:.05,filter:{type:"highpass",f:6500,q:.7}}),je(i,e,t,{type:"sine",f0:110,dur:.4,peak:.16,attack:.004}),.95},sponsor(i,e,t){for(const n of[523.25,659.25,783.99,1174.66])je(i,e,t,{type:"sawtooth",f0:n,dur:.55,peak:.05,attack:.004,filter:{type:"lowpass",f:4200,f1:1e3}});return je(i,e,t+.18,{type:"sine",f0:1568,dur:.09,peak:.16,attack:.002}),je(i,e,t+.25,{type:"sine",f0:2093,dur:.55,peak:.16,attack:.002}),Ut(i,e,t+.18,{dur:.04,peak:.12,filter:{type:"highpass",f:5e3,q:.7}}),Ut(i,e,t+.3,{dur:.6,attack:.08,peak:.04,filter:{type:"highpass",f:7e3,q:.7}}),je(i,e,t,{type:"sine",f0:100,f1:60,dur:.3,peak:.25,attack:.003}),1},crash(i,e,t,n=.6){n=wt(n,0,1);const s=da(Math.floor(n*1e3)+5);je(i,e,t,{type:"sine",f0:95,f1:28,dur:.25+.3*n,peak:.2+.4*n,attack:.002}),Ut(i,e,t,{kind:"white",dur:.12+.3*n,peak:.15+.25*n,attack:.002,filter:{type:"bandpass",f:900,f1:250,q:.8}}),Ut(i,e,t,{kind:"pink",dur:.06+.2*n,peak:.1+.18*n,attack:.001,filter:{type:"lowpass",f:3e3,q:.6}});for(const r of[420,613])je(i,e,t,{type:"square",f0:r,dur:.2+.4*n,peak:.03+.07*n,attack:.002,filter:{type:"lowpass",f:1800,f1:500}});if(n>.4)for(let r=0;r<3+Math.floor(n*5);r++)je(i,e,t+.05+s()*.35,{type:"sine",f0:2e3+s()*3e3,dur:.05,peak:.04*n,attack:.001});return .3+.7*n}},Sh={cockpit:{lp:3200,wind:.65,squeal:.7,rumble:1.25,crowd:.35},chase:{lp:12e3,wind:1,squeal:1,rumble:1,crowd:.8},broadcast:{lp:12e3,wind:.5,squeal:1,rumble:.7,crowd:1.1}};function f1(i,e){const t=i.createGain();t.gain.value=1;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.5,t.connect(n),n.connect(e);const s=[],r=(E,T=0)=>{const R=i.createBufferSource();return R.buffer=fa(i,E),R.loop=!0,R.start(0,T),s.push(R),R},a=(E,T,R)=>{const C=i.createBiquadFilter();return C.type=E,C.frequency.value=T,C.Q.value=R,C},o=(E=0)=>{const T=i.createGain();return T.gain.value=E,T},c={g:o(),f:a("bandpass",500,.6)};r("pink",.3).connect(c.f),c.f.connect(c.g),c.g.connect(t);const l={g:o(),f:a("bandpass",1500,9),o:i.createOscillator(),og:o(.25)};l.o.type="sawtooth",l.o.frequency.value=900,s.push(l.o),l.o.start(),r("white",1.1).connect(l.f),l.o.connect(l.og),l.og.connect(l.f),l.f.connect(l.g),l.g.connect(t);const u={g:o(),f:a("lowpass",160,.7),am:o(.55),lfo:i.createOscillator(),lg:o(.45)};u.lfo.type="sine",u.lfo.frequency.value=20,s.push(u.lfo),u.lfo.start(),u.lfo.connect(u.lg),u.lg.connect(u.am.gain),r("brown",.7).connect(u.f),u.f.connect(u.am),u.am.connect(u.g),u.g.connect(t);const d={g:o(),f:a("lowpass",700,.6),am:o(.7),lfo:i.createOscillator(),lg:o(.3)};d.lfo.type="triangle",d.lfo.frequency.value=9,s.push(d.lfo),d.lfo.start(),d.lfo.connect(d.lg),d.lg.connect(d.am.gain),r("pink",1.9).connect(d.f),d.f.connect(d.am),d.am.connect(d.g),d.g.connect(t);const f={g:o(),f:a("bandpass",900,.45),am:o(.8),lfo:i.createOscillator(),lg:o(.2)};f.lfo.type="sine",f.lfo.frequency.value=.17,s.push(f.lfo),f.lfo.start(),f.lfo.connect(f.lg),f.lg.connect(f.am.gain),r("pink",2.6).connect(f.f),f.f.connect(f.am),f.am.connect(f.g),f.g.connect(t);const g={g:o(),f:a("bandpass",520,.7)};r("pink",3.1).connect(g.f),g.f.connect(g.g),g.g.connect(t);const _={g:o(),f:a("bandpass",1400,3),o:i.createOscillator(),og:o(.12),am:o(.6),lfo:i.createOscillator(),lg:o(.4)};_.o.type="sawtooth",_.o.frequency.value=230,s.push(_.o),_.o.start(),_.lfo.type="square",_.lfo.frequency.value=11,s.push(_.lfo),_.lfo.start(),_.lfo.connect(_.lg),_.lg.connect(_.am.gain),r("white",.2).connect(_.f),_.o.connect(_.og),_.og.connect(_.f),_.f.connect(_.am),_.am.connect(_.g),_.g.connect(t);let m=Sh.cockpit,p={speed:0,slip01:0,offTrack:!1,drafting01:0,crowd01:0,wall01:0},y=!1;const M=.06,v={update(E={},T){p={...p,...E};const R=T??i.currentTime,C=y?0:1,b=Math.max(0,p.speed||0),S=wt(b/90,0,1),D=wt(p.slip01||0,0,1),F=Math.pow(wt((D-.3)/.7,0,1),1.4);c.f.frequency.setTargetAtTime(350+900*S,R,M),c.g.gain.setTargetAtTime(C*.34*S*S*m.wind,R,M),l.o.frequency.setTargetAtTime(640+520*D+b*2.2,R,.03),l.f.frequency.setTargetAtTime(1100+900*D+b*4,R,.03),l.g.gain.setTargetAtTime(C*.85*F*m.squeal*(.4+.6*S),R,.03);const L=(p.offTrack,0);u.lfo.frequency.setTargetAtTime(6+b*.5,R,M),u.g.gain.setTargetAtTime(C*(p.offTrack?.5:.1)*S*m.rumble+L,R,M),d.lfo.frequency.setTargetAtTime(5+b*.3,R,M),d.g.gain.setTargetAtTime(C*(p.offTrack?.55:0)*(.2+.8*S),R,M),f.g.gain.setTargetAtTime(C*.24*wt(p.crowd01||0,0,1)*m.crowd,R,.25),g.f.frequency.setTargetAtTime(350+700*S,R,M),g.g.gain.setTargetAtTime(C*.14*wt(p.drafting01||0,0,1)*(.3+.7*S),R,.12),_.g.gain.setTargetAtTime(C*.55*wt(p.wall01||0,0,1),R,.02)},setPerspective(E){m=Sh[E]||m,n.frequency.setTargetAtTime(m.lp,i.currentTime,.1),v.update({})},setMute(E){y=!!E,v.update({})},dispose(){for(const E of s)try{E.stop()}catch{}try{t.disconnect()}catch{}}};return v}const p1=`
const TWO_PI = 6.283185307179586;
const BANK = [0, 1, 1, 0, 1, 0, 0, 1];
// per firing: deviation of the pulse size from the base. Gap since the previous firing on the same bank in quarter turns is
// 2,2,1,3,2,2,1,3: the second pulse of a doublet is weak, the one after the long gap is big -> period of 4 slots (one revolution).
const LUMP = [0, 0, -0.55, 0.60, 0, 0, -0.55, 0.60];
const HI_A = 5500, HI_B = 8800;   // crossfade region of the morph (rpm)
const LIM_K = 0.62, LIM_R = 0.30; // soft limiter: transparent below 0.62, asymptote 0.92
const RING = 1024, RM = 1023;     // impulse rings (power of two)
const E1 = 2.718281828;

// loudness trim by rpm (dB, knots every 1000 rpm from 0): measured K-weighted loudness of the steady full-throttle renders is flat to
// within about 1.5 dB over 2500..9000 with these values
const TRIM_DB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    let seed = (po.seed || 1) >>> 0; if (!seed) seed = 1;
    this.ns = (seed * 2654435761) >>> 0 || 12345;
    const R = () => { this.ns ^= this.ns << 13; this.ns >>>= 0; this.ns ^= this.ns >>> 17; this.ns ^= this.ns << 5; this.ns >>>= 0; return this.ns / 4294967296; };
    this.R = R;
    for (let i = 0; i < 8; i++) R();
    this.outGain = po.gain || 0.5;
    this.rpm = po.rpm0 || 900; this.thr = 0; this.load = 0; this.pitch = 1; this.actEnv = 0; this.wob = 0; this.wobT = 0;
    this.cp = 0; this.lastIdx = -1;
    // per car variation (all from the seed)
    this.cylAmp = []; for (let i = 0; i < 8; i++) this.cylAmp.push(0.84 + R() * 0.32);
    this.bankAmp = [0.90 + R() * 0.20, 0.90 + R() * 0.20];
    this.lumpVar = 0.88 + R() * 0.24; this.howlVar = 0.92 + R() * 0.16; this.tilt = (R() * 2 - 1) * 0.12; this.crkVar = 0.8 + R() * 0.4;
    const sr = sampleRate; this.sr = sr;
    // impulse rings (body, crack) per bank
    this.rb = [new Float32Array(RING), new Float32Array(RING)]; this.rc = [new Float32Array(RING), new Float32Array(RING)]; this.rp = 0;
    // pulse shapers (2 poles) and crack filters, per bank
    this.b1 = [0, 0]; this.b2 = [0, 0]; this.k1 = [0, 0]; this.k2 = [0, 0];
    this.cB = 0.05; this.cK1 = 0.1; this.cK2 = 0.3; this.kN = 5;
    // header / collector comb per bank
    this.SZ = 2048; this.dl = [new Float32Array(this.SZ), new Float32Array(this.SZ)]; this.wp = 0; this.lpc = [0, 0];
    this.D = [Math.round(sr * 0.0058 * (0.96 + R() * 0.08)), Math.round(sr * 0.0069 * (0.96 + R() * 0.08))];
    this.dcx = 0; this.dcy = 0; this.dcR = 1 - 2 * Math.PI * 30 / sr;
    this.f1 = new SVF(); this.f2 = new SVF(); this.f3 = new SVF(); this.f4 = new SVF();
    this.fs = 0.94 + R() * 0.12;
    this.lp1 = 0; this.lp2 = 0; this.lpA = 0.2;
    this.intake = new SVF(); this.valve = new SVF(); this.pop = new SVF(); this.howl = new SVF(); this.crk = new SVF();
    this.valve.set(3400, 0.8, sr);
    this.popEnv = 0; this.popDecay = Math.exp(-1 / (sr * 0.011));
    this.crkEnv = 0; this.crkDecay = Math.exp(-1 / (sr * 0.0016));
    this.thrRef = 0; this.liftLatch = false; this.barkN = 0; this.barkT = 0; this.barkAmp = 0; this.burb = 0;
    // phasors: crank (order 0.5 base), gear whine
    this.zs = 0; this.zc = 1; this.ws = 0; this.wc = 1; this.ws2 = 1.0;
    this.lim = false; this.cutPhase = 0; this.cutNow = false;
    // control values interpolated across each block
    this.g = new Float64Array(15); this.T = new Float64Array(15); this.dG = new Float64Array(15);
    this.gInit = false;
    this.kR = 1 - Math.exp(-1 / (sr * 0.018)); this.kT = 1 - Math.exp(-1 / (sr * 0.030)); this.kL = 1 - Math.exp(-1 / (sr * 0.050));
    this.kP = 1 - Math.exp(-1 / (sr * 0.025)); this.kA = 1 - Math.exp(-1 / (sr * 0.030));
    // block-level firing parameters (set in process)
    this.lk = 1; this.jit = 0.1; this.jt = 0; this.crackAmt = 0; this.baseAmp = 1; this.miss = 0; this.hiV = 0; this.loadV = 0; this.rpmV = 900; this.thrV = 0; this.fullV = true;
  }
  // inject a body impulse (area A) and a crack impulse (area Ac) for bank b, fr = samples since the slot boundary (0..1), dly in samples
  inject(b, A, Ac, fr, dly) {
    const x = (1 - fr) + dly; const i0 = x | 0; const w = x - i0; const p = this.rp + i0;
    const rb = this.rb[b]; rb[p & RM] += A * (1 - w); rb[(p + 1) & RM] += A * w;
    if (Ac !== 0) { const rc = this.rc[b]; rc[p & RM] += Ac * (1 - w); rc[(p + 1) & RM] += Ac * w; }
  }
  fire(idx, fr, dcp) {
    const R = this.R; const bank = BANK[idx]; const hi = this.hiV; const loadEff = this.loadV;
    if (this.cutNow) {
      if (R() < 0.35) {
        this.inject(bank, 0.7 * E1 / this.cB, 0.5 * this.kN, fr, 0);
        if (this.fullV && R() < 0.5) { this.crkEnv = 0.6 + 0.4 * R(); this.crk.set(1300 + R() * 2600, 1.5, this.sr); }
      }
      return;
    }
    // cam-lope: at low rpm and light load a cylinder sometimes fires weakly and the timing wanders
    let a = 1;
    if (this.miss > 0 && R() < this.miss) a = 0.25 + 0.4 * R();
    const amp = a * this.baseAmp * this.cylAmp[idx] * this.bankAmp[bank] * (1 + this.lk * LUMP[idx]) * (1 + this.jit * (R() * 2 - 1));
    const slotSamp = this.sr * 15 / Math.max(this.rpmV, 300);        // samples per firing slot
    const dly = Math.min(240, slotSamp * this.jt * R());
    const ca = this.crackAmt * (0.6 + 0.4 * amp);
    this.inject(bank, amp * E1 / this.cB, ca * this.kN, fr, dly);
    // extra bark on the firing at high load and extra random crackle off throttle
    if (this.thrV < 0.08 && this.rpmV > 2200 && R() < 0.05 + 0.10 * Math.min(1, this.rpmV / 9000)) this.inject(bank, 0.8 * (0.5 + R()) * E1 / this.cB, 0.5 * this.kN, fr, 0);
    if (this.fullV && R() < (0.10 + 0.22 * loadEff) * (1 - 0.65 * hi) * this.crkVar) { this.crkEnv = 0.35 + 0.65 * R(); this.crk.set(1300 + R() * 2800, 1.5, this.sr); }
  }
  process(inputs, outputs, parameters) {
    const out = outputs[0]; const o0 = out[0]; const N = o0.length; const sr = this.sr; const R = this.R;
    const actT = parameters.active[0];
    if (actT < 0.5 && this.actEnv < 0.0004) { for (let c = 0; c < out.length; c++) out[c].fill(0); this.actEnv = 0; return true; }
    const rpmT = parameters.rpm[0], thrT = parameters.throttle[0], loadT = parameters.load[0];
    const pitchT = parameters.pitch[0], detail = parameters.detail[0], limit = parameters.limit[0];
    const full = detail >= 0.5; this.fullV = full;

    // rev limiter hysteresis (ignition cut at ~20 Hz, 45 percent of the time)
    if (!this.lim && rpmT >= limit * 0.985) this.lim = true; else if (this.lim && rpmT < limit * 0.965) this.lim = false;

    // ---------------- block-level derived values (state at block start) ----------------
    const rpmB = this.rpm * this.pitch;
    const rpmN0 = Math.min(1, Math.max(0, rpmB / 9000));
    const th0 = Math.min(1, Math.max(0, (rpmB - HI_A) / (HI_B - HI_A)));
    const hi = th0 * th0 * (3 - 2 * th0);
    const loadEff = Math.max(this.load, this.thr * 0.85);
    this.hiV = hi; this.loadV = loadEff; this.rpmV = rpmB; this.thrV = this.thr;
    // pulse shapers: widths fixed in crank angle (cycle = 120 / rpm s)
    const cyc = 120 / Math.max(rpmB, 300);
    const tauB = Math.max(3.5 / sr, (0.030 - 0.017 * hi) * cyc);
    this.cB = 1 - Math.exp(-1 / (tauB * sr));
    const tk1 = (0.00030 - 0.00012 * hi), tk2 = 0.00007;
    this.cK1 = 1 - Math.exp(-1 / (tk1 * sr)); this.cK2 = 1 - Math.exp(-1 / (tk2 * sr)); this.kN = 1 / (this.cK2 - this.cK1);
    // firing amplitude model
    this.baseAmp = 0.45 + 0.55 * loadEff;
    this.lk = (1 - 0.75 * hi) * this.lumpVar;
    this.jit = (0.16 * (1 - rpmN0) * (1 - rpmN0) * (1.0 + 0.8 * (1 - loadEff)) + 0.035) * (1 - 0.5 * hi);
    this.jt = (0.10 * (1 - rpmN0) * (1 - rpmN0) * (0.4 + 0.6 * (1 - loadEff))) * (1 - hi);
    this.miss = 0.16 * (1 - rpmN0) * (1 - rpmN0) * (1 - rpmN0) * (1 - loadEff) * (1 - hi);
    this.crackAmt = Math.max(0, (loadEff - 0.25)) * (0.55 + 0.45 * hi) * 0.9;
    // targets of the interpolated controls
    const bright = Math.pow(loadEff, 0.8);
    const fc = 1000 + 3200 * bright + 300 * rpmN0 + 5200 * hi * (0.35 + 0.65 * bright);
    this.lpA = 1 - Math.exp(-2 * Math.PI * fc / sr);
    const fs = this.fs;
    this.f1.set(118 * fs, 2.0, sr); this.f2.set(400 * fs, 2.6, sr); this.f3.set(1000 * fs, 2.0, sr); this.f4.set(2400 * fs, 1.6, sr);
    // loudness trim (linear between 1000 rpm knots)
    const kx = Math.min(8.999, Math.max(0, rpmB / 1000)); const k0 = kx | 0; const tdb = TRIM_DB[k0] + (TRIM_DB[k0 + 1] - TRIM_DB[k0]) * (kx - k0);
    const T = this.T, G = this.g, dG = this.dG;
    T[0] = 1; T[1] = 0.55; T[2] = 0.95 - 0.45 * hi; T[3] = 0.60 - 0.10 * hi; T[4] = 0.30 + 0.35 * hi; T[5] = 0.40 * hi * (0.4 + 0.6 * loadEff);
    T[6] = 0.40 - 0.18 * hi; T[7] = 1.5 + 1.5 * loadEff; T[8] = Math.pow(10, tdb / 20);
    T[9] = full ? (0.40 + 0.60 * loadEff) * (1 - 0.72 * hi) : 0;
    T[10] = full ? hi * Math.pow(hi, 0.3) * (0.25 + 0.75 * loadEff) * 0.06 : 0;
    T[11] = full ? Math.pow(this.thr, 1.6) * (0.04 + 0.42 * rpmN0) * 1.4 : 0;
    T[12] = full ? hi * Math.pow(this.thr, 1.2) * 1.6 : 0;
    T[13] = full ? 0.020 * (1.2 - rpmN0) : 0;
    T[14] = full ? 0.012 * (0.3 + rpmN0) * (1 - 0.6 * this.thr) : 0;
    if (!this.gInit) { for (let k = 0; k < 15; k++) G[k] = T[k]; this.gInit = true; }
    for (let k = 0; k < 15; k++) dG[k] = (T[k] - G[k]) / N;
    let gBody = G[0], gDry = G[1], gW1 = G[2], gW2 = G[3], gW3 = G[4], gW4 = G[5], gFb = G[6], gDrive = G[7], gTrim = G[8], gRumble = G[9], gScream = G[10], gIntake = G[11], gHowl = G[12], gValve = G[13], gWhine = G[14];
    const dBody = dG[0], dDry = dG[1], dW1 = dG[2], dW2 = dG[3], dW3 = dG[4], dW4 = dG[5], dFb = dG[6], dDrive = dG[7], dTrim = dG[8], dRumble = dG[9], dScream = dG[10], dIntake = dG[11], dHowl = dG[12], dValve = dG[13], dWhine = dG[14];
    if (full) {
      this.intake.set(250 + rpmB * 0.22, 1.1, sr);
      this.howl.set((rpmB / 15 * 3.0 + 250) * this.howlVar, 7, sr);
    }
    // idle governor hunting
    if (this.rpm < 1600) { this.wobT = (R() * 2 - 1) * 0.014 * (1 - this.rpm / 1600); }
    else this.wobT = 0;
    // off throttle: afterfire energy decays after a lift; pops / burble are Poisson per block
    this.burb *= Math.exp(-N / (sr * 1.1));
    if (full && this.thr < 0.10 && this.rpm > 2400) {
      const offAmt = (1 - this.thr / 0.10);
      const rate = (3 + 22 * this.burb) * Math.min(1, (this.rpm - 2400) / 5000) * offAmt;
      if (R() < rate * N / sr) {
        this.popEnv = 0.5 + R() * 0.9; this.pop.set(400 + R() * 1100, 1.4, sr);
        this.inject(R() < 0.5 ? 0 : 1, (0.5 + 0.7 * R()) * E1 / this.cB, 0.4 * this.kN, 0, 0);
      }
    }
    // throttle lift bark: peak-hold of the throttle (0.25 s fall), a quick lift to near closed fires a short burst of loud pops
    this.thrRef = Math.max(this.thr, this.thrRef - 4 * N / sr);
    if (this.liftLatch) { if (this.thr > 0.30) this.liftLatch = false; }
    else if (full && this.thr < 0.14 && this.thrRef > 0.5 && this.rpm > 2400) {
      this.liftLatch = true; this.barkN = 3 + ((R() * 3) | 0); this.barkT = 0; this.barkAmp = Math.min(1, 0.45 + this.rpm / 9000); this.burb = 1;
    }
    if (this.barkN > 0) {
      this.barkT -= N;
      if (this.barkT <= 0) {
        const a = this.barkAmp;
        this.popEnv = Math.max(this.popEnv, (1.2 + R() * 0.7) * a); this.pop.set(600 + R() * 1200, 1.4, sr);
        this.inject(R() < 0.5 ? 0 : 1, 1.0 * a * E1 / this.cB, 0.9 * a * this.kN, 0, 0);
        this.crkEnv = Math.max(this.crkEnv, 1.0 * a); this.crk.set(1500 + R() * 2200, 1.5, sr);
        this.barkAmp *= 0.72; this.barkN--; this.barkT = (0.028 + R() * 0.05) * sr;
      }
    }
    // resync the crank phasor to the exact phase once per block (it is advanced by a 4th order rotation per sample)
    { const th = TWO_PI * this.cp; this.zs = Math.sin(th); this.zc = Math.cos(th); }

    // ---------------- per-sample loop ----------------
    const cB = this.cB, cK1 = this.cK1, cK2 = this.cK2, lpA = this.lpA;
    const rb0 = this.rb[0], rb1 = this.rb[1], rc0 = this.rc[0], rc1 = this.rc[1];
    const dl0 = this.dl[0], dl1 = this.dl[1]; const SZ = this.SZ, SM = SZ - 1; const D0 = this.D[0], D1 = this.D[1];
    let b1a = this.b1[0], b1b = this.b1[1], b2a = this.b2[0], b2b = this.b2[1], k1a = this.k1[0], k1b = this.k1[1], k2a = this.k2[0], k2b = this.k2[1];
    let lpc0 = this.lpc[0], lpc1 = this.lpc[1];
    let zs = this.zs, zc = this.zc; let rp = this.rp; let wp = this.wp;
    // gear whine phasor: constant rotation per block (14.5 x crank frequency), renormalised each block
    const wd = TWO_PI * (rpmB / 60 * 14.5) / sr; const wcd = Math.cos(wd), wsd = Math.sin(wd); let ws = this.ws, wc = this.wc; { const m = 1 / Math.sqrt(ws * ws + wc * wc + 1e-30); ws *= m; wc *= m; }
    const f1 = this.f1, f2 = this.f2, f3 = this.f3, f4 = this.f4;
    for (let i = 0; i < N; i++) {
      this.rpm += (rpmT - this.rpm) * this.kR; this.thr += (thrT - this.thr) * this.kT; this.load += (loadT - this.load) * this.kL;
      this.pitch += (pitchT - this.pitch) * this.kP; this.wob += (this.wobT - this.wob) * 0.0004;
      this.actEnv += ((actT > 0.5 ? 1 : 0) - this.actEnv) * this.kA;
      const rpmEff = this.rpm * this.pitch * (1 + this.wob);
      const dcp = rpmEff / (120 * sr);
      const rpmN = Math.min(1, rpmEff / 9000);

      if (this.lim) { this.cutPhase += 20 / sr; if (this.cutPhase >= 1) this.cutPhase -= 1; this.cutNow = this.cutPhase < 0.45; } else { this.cutNow = false; this.cutPhase = 0; }

      this.cp += dcp; if (this.cp >= 1) this.cp -= 1;
      const slotF = this.cp * 8; const idx = slotF | 0;
      this.rp = rp;
      if (idx !== this.lastIdx) {
        this.lastIdx = idx;
        if (rpmEff > 30) { const fr = Math.min(0.999, Math.max(0, (slotF - idx) / (dcp * 8 + 1e-9))); this.fire(idx, fr, dcp); }
      }
      // crank phasor step (order 0.5 = one turn per 720 degrees)
      { const d = TWO_PI * dcp; const d2 = d * d; const cd = 1 - 0.5 * d2 + d2 * d2 * 0.0416667; const sd = d * (1 - d2 * 0.1666667 + d2 * d2 * 0.00833333); const ns = zs * cd + zc * sd; zc = zc * cd - zs * sd; zs = ns; }

      // impulses -> shapers
      const iA = rb0[rp], iB = rb1[rp], kA = rc0[rp], kB = rc1[rp]; rb0[rp] = 0; rb1[rp] = 0; rc0[rp] = 0; rc1[rp] = 0; rp = (rp + 1) & RM;
      b1a += cB * (iA - b1a); b2a += cB * (b1a - b2a); b1b += cB * (iB - b1b); b2b += cB * (b1b - b2b);
      k1a += cK1 * (kA - k1a); k2a += cK2 * (kA - k2a); k1b += cK1 * (kB - k1b); k2b += cK2 * (kB - k2b);
      const sA = gBody * b2a + (k2a - k1a), sB = gBody * b2b + (k2b - k1b);

      // header / collector combs
      const dA = dl0[(wp - D0 + SZ) & SM], dB = dl1[(wp - D1 + SZ) & SM];
      lpc0 += (dA - lpc0) * 0.5; lpc1 += (dB - lpc1) * 0.5;
      const yA = sA + gFb * lpc0, yB = sB + gFb * lpc1;
      dl0[wp] = yA; dl1[wp] = yB; wp = (wp + 1) & SM;
      const s = (yA + yB) * 0.5;

      const dc = s - this.dcx + this.dcR * this.dcy; this.dcx = s; this.dcy = dc;
      let x = gDry * dc + gW1 * f1.bp(dc) + gW2 * f2.bp(dc) + gW3 * f3.bp(dc) + gW4 * f4.bp(dc);
      this.lp1 += (x - this.lp1) * lpA; this.lp2 += (this.lp1 - this.lp2) * lpA; x = this.lp2;

      // soft clip (Pade tanh)
      let xd = x * gDrive * 2.2; xd = xd > 3 ? 3 : (xd < -3 ? -3 : xd);
      let y = xd * (27 + xd * xd) / (27 + 9 * xd * xd) * 0.46 * (1 - 0.32 * this.hiV) * gTrim;
      void rpmN;

      if (this.fullV) {
        // crank-locked: orders 1, 2, 4 rumble (from the phasor, orders by double angle), harmonic ladder 8..24 by recurrence
        const s1 = 2 * zs * zc, c1 = 1 - 2 * zs * zs;            // order 1
        const s2 = 2 * s1 * c1, c2 = 1 - 2 * s1 * s1;            // order 2
        const s4 = 2 * s2 * c2, c4 = 1 - 2 * s2 * s2;            // order 4 (firing)
        y += gRumble * (0.022 * zs + 0.030 * s1 + 0.050 * s2 + 0.030 * s4);
        if (gScream > 0.0003) {
          const c24 = 2 * c4; const S2 = 2 * s4 * c4; const S3 = c24 * S2 - s4; const S4 = c24 * S3 - S2; const S5 = c24 * S4 - S3; const S6 = c24 * S5 - S4;
          const tl = this.tilt;
          y += gScream * ((0.90 * S2 + (0.90 - tl) * S3 + 0.85 * S4 + (0.78 + tl) * S5 + 0.70 * S6) * (1 + 0.20 * s1 + 0.10 * s2));
        }
        const wn = R() * 2 - 1;
        const frac = slotF - idx; const v2 = slotF * 2; const frac2 = v2 - (v2 | 0);
        const pulse = 0.55 + 0.45 * (1 - frac);
        y += this.intake.bp(wn) * gIntake * pulse;
        if (gHowl > 0.0003) y += this.howl.bp(wn) * gHowl * pulse;
        { const ve = 1 - frac2 * 5; if (ve > 0) y += this.valve.hp(R() * 2 - 1) * ve * ve * gValve; }
        // gear whine: phasor at 14.5 x crank frequency, second harmonic by double angle
        { const ns = ws * wcd + wc * wsd; wc = wc * wcd - ws * wsd; ws = ns; }
        y += (ws + this.ws2 * ws * wc) * gWhine;
        if (this.popEnv > 0.001) { y += this.pop.bp(wn) * this.popEnv * 1.3; this.popEnv *= this.popDecay; }
        if (this.crkEnv > 0.002) { y += this.crk.bp(wn) * this.crkEnv * 0.9; this.crkEnv *= this.crkDecay; }
      }
      // soft limiter: transparent up to LIM_K, asymptote LIM_K + LIM_R = 0.92 (0.46 at the default gain of 0.5)
      const ay = y < 0 ? -y : y;
      if (ay > LIM_K) { const z = LIM_K + LIM_R * Math.tanh((ay - LIM_K) / LIM_R); y = y < 0 ? -z : z; }
      const v = y * this.outGain * this.actEnv;
      o0[i] = v;
      for (let c = 1; c < out.length; c++) out[c][i] = v;
      gBody += dBody; gDry += dDry; gW1 += dW1; gW2 += dW2; gW3 += dW3; gW4 += dW4; gFb += dFb; gDrive += dDrive; gTrim += dTrim; gRumble += dRumble; gScream += dScream;
      gIntake += dIntake; gHowl += dHowl; gValve += dValve; gWhine += dWhine;
    }
    this.rp = rp; this.wp = wp; this.zs = zs; this.zc = zc; this.ws = ws; this.wc = wc; this.lpc[0] = lpc0; this.lpc[1] = lpc1;
    this.b1[0] = b1a; this.b1[1] = b1b; this.b2[0] = b2a; this.b2[1] = b2b; this.k1[0] = k1a; this.k1[1] = k1b; this.k2[0] = k2a; this.k2[1] = k2b;
    for (let k = 0; k < 15; k++) G[k] = T[k];
    return true;
  }
}
registerProcessor('rtta-v8', V8Processor);
`,Th=343,so=new WeakMap;function m1(i){if(so.has(i))return so.get(i);let e;if(!i.audioWorklet||typeof AudioWorkletNode>"u")e=Promise.resolve(!1);else try{const t=URL.createObjectURL(new Blob([p1],{type:"application/javascript"}));e=i.audioWorklet.addModule(t).then(()=>{try{URL.revokeObjectURL(t)}catch{}return!0}).catch(()=>!1)}catch{e=Promise.resolve(!1)}return so.set(i,e),e}const Is=(i,e,t)=>{t==null?i.value=e:i.setValueAtTime(e,t)};function g1(i,{seed:e,gain:t,rpm0:n}){const s=new AudioWorkletNode(i,"rtta-v8",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{seed:e,gain:t,rpm0:n}}),r=a=>s.parameters.get(a);return{kind:"worklet",out:s,setState(a,o){o.rpm!=null&&Is(r("rpm"),o.rpm,a),o.throttle01!=null&&Is(r("throttle"),wt(o.throttle01,0,1),a),o.load01!=null&&Is(r("load"),wt(o.load01,0,1),a),o.pitch!=null&&Is(r("pitch"),wt(o.pitch,.5,2),a),o.rpmLimit!=null&&Is(r("limit"),o.rpmLimit,a)},setDetail(a){r("detail").value=a},setActive(a){r("active").value=a?1:0},dispose(){try{s.disconnect(),s.port.close()}catch{}}}}function _1(i,{seed:e,gain:t,rpm0:n}){const s=da(e||1),r=t*.55,a=i.createGain();a.gain.value=r;const o=i.createGain();o.gain.value=.5;const c=i.createWaveShaper(),l=new Float32Array(1024);for(let F=0;F<1024;F++){const L=F/511.5-1;l[F]=Math.tanh(2.2*L)}c.curve=l;const h=i.createBiquadFilter();h.type="lowpass",h.Q.value=.8,h.frequency.value=1200;const u=i.createGain();u.gain.value=1,o.connect(h),h.connect(c),c.connect(u),u.connect(a);const d=30,f=new Float32Array(d+1),g=new Float32Array(d+1);for(let F=1;F<=d;F++)g[F]=1/Math.pow(F,1.1)*(F%2===0?.9:1);const _=i.createPeriodicWave(f,g),m=(F,L)=>{const I=i.createOscillator();I.setPeriodicWave(_),I.detune.value=F;const k=i.createGain();return k.gain.value=L,I.connect(k),k.connect(o),I.start(),I},p=m(0,.7),y=m(s()*12-6,.45),M=i.createOscillator();M.type="triangle";const v=i.createGain();v.gain.value=.3,M.connect(v),v.connect(o),M.start();const E=i.createBufferSource();E.buffer=fa(i,"pink"),E.loop=!0;const T=i.createBiquadFilter();T.type="bandpass",T.Q.value=1,T.frequency.value=500;const R=i.createGain();R.gain.value=0,E.connect(T),T.connect(R),R.connect(o),E.start();const C=i.createOscillator();C.type="square",C.frequency.value=20;const b=i.createGain();b.gain.value=0,C.connect(b),b.connect(u.gain),C.start();let S=0;const D=(F,L,I)=>{const k=Math.max(1,F/15*L);for(const[H,q]of[[p,1],[y,1],[M,.125]]){const V=k*q;I==null?H.frequency.setTargetAtTime(V,i.currentTime,.02):H.frequency.setValueAtTime(V,I)}};return D(n||900,1,0),{kind:"native",out:a,setState(F,L){const I=F??i.currentTime,k=L.rpm??900,H=wt(L.throttle01??0,0,1),q=Math.max(L.load01??0,H*.85);D(k,L.pitch??1,F);const V=wt(k/9e3,0,1);h.frequency.setTargetAtTime(700+3300*Math.pow(q,.8)+300*V,I,.03),o.gain.setTargetAtTime(.25+.5*q,I,.03),T.frequency.setTargetAtTime(250+k*.22,I,.03),R.gain.setTargetAtTime(Math.pow(H,1.6)*(.04+.4*V),I,.03);const te=L.rpmLimit??9e3,ae=k>=te*.985;u.gain.setTargetAtTime(ae?.55:1,I,.02),b.gain.setTargetAtTime(ae?.45:0,I,.02),H<.1&&k>2800&&I-S>.08&&Math.random()<.12*(k-2800)/6200&&(S=I,Ut(i,a,I,{dur:.05,peak:.25,filter:{type:"bandpass",f:500+Math.random()*1100,q:1.4}}))},setDetail(){},setActive(F){a.gain.setTargetAtTime(F?r:0,i.currentTime,.03)},dispose(){try{p.stop(),y.stop(),M.stop(),E.stop(),C.stop(),a.disconnect()}catch{}}}}function v1(i,e={},t=!1){const n={seed:e.seed??1,gain:e.gain??.5,rpm0:e.rpm0??900};return t&&!e.forceNative?g1(i,n):_1(i,n)}const ro=["idle","low","mid","high"],Eh={idle:1e3,low:3e3,mid:6e3,high:8500,offLow:3e3,offHigh:7e3};function y1(i,e,t={}){const n={...Eh,...t},s=i.createGain();s.gain.value=1;const r={};for(const o of Object.keys(e)){if(!(o in Eh)||!e[o])continue;const c=i.createBufferSource();c.buffer=e[o],c.loop=!0;const l=i.createGain();l.gain.value=0,c.connect(l),l.connect(s),c.start(0,Math.random()*Math.max(.01,e[o].duration*.5)),r[o]={src:c,g:l}}const a=(o,c,l)=>{const h=c.map((f,g)=>({n:f,ref:l[g]})).filter(f=>r[f.n]).sort((f,g)=>f.ref-g.ref),u={};if(!h.length)return u;for(const f of h)u[f.n]=0;if(o<=h[0].ref)return u[h[0].n]=1,u;const d=h[h.length-1];if(o>=d.ref)return u[d.n]=1,u;for(let f=0;f<h.length-1;f++){const g=h[f],_=h[f+1];if(o>=g.ref&&o<_.ref){const m=(o-g.ref)/(_.ref-g.ref);u[g.n]=Math.sqrt(1-m),u[_.n]=Math.sqrt(m);break}}return u};return{out:s,voices:r,has:()=>Object.keys(r).length>0,setState(o,{rpm:c,throttle01:l,pitch:h=1}){const u=o??i.currentTime,d=wt(l??0,0,1),f=wt((d-.05)/.35,0,1),g=c*h,_=ro.map(y=>n[y]),m=a(c,ro,_),p=a(c,["offLow","offHigh"],[n.offLow,n.offHigh]);for(const y of Object.keys(r)){const M=ro.includes(y),v=(M?m[y]:p[y])??0,E=n[y];r[y].g.gain.setTargetAtTime(v*(M?f:1-f),u,.04),r[y].src.playbackRate.setTargetAtTime(wt(g/E,.4,2.4),u,.03)}},dispose(){for(const o of Object.keys(r))try{r[o].src.stop()}catch{}try{s.disconnect()}catch{}}}}const cc={cockpit:{hp:38,shelf:3,pkF:90,pkQ:4,pkG:6,lp:1900,gain:.95,aiCut:3500},chase:{hp:35,shelf:0,pkF:120,pkQ:1,pkG:0,lp:7e3,gain:1,aiCut:14e3},broadcast:{hp:90,shelf:-2,pkF:1800,pkQ:.8,pkG:3,lp:9e3,gain:.8,aiCut:14e3}};function x1(i,e,t){const n=i.listener;if(!n)return;const s=t||{x:0,y:0,z:-1};if(n.positionX){const r=i.currentTime;n.positionX.setTargetAtTime(e.x,r,.02),n.positionY.setTargetAtTime(e.y,r,.02),n.positionZ.setTargetAtTime(e.z,r,.02),n.forwardX.setTargetAtTime(s.x,r,.03),n.forwardY.setTargetAtTime(s.y,r,.03),n.forwardZ.setTargetAtTime(s.z,r,.03),n.upX.value=0,n.upY.value=1,n.upZ.value=0}else try{n.setPosition(e.x,e.y,e.z),n.setOrientation(s.x,s.y,s.z,0,1,0)}catch{}}function M1(i,e,t){if(i.positionX)i.positionX.setTargetAtTime(e.x,t,.03),i.positionY.setTargetAtTime(e.y,t,.03),i.positionZ.setTargetAtTime(e.z,t,.03);else try{i.setPosition(e.x,e.y,e.z)}catch{}}class b1{constructor(e){this.sys=e,this.voices=new Set,this.listener={pos:null,vel:null,fwd:null},this.mode="cockpit",this.recBuffers=null,this.recRefs={},this.paused=!1,this.MAX_FULL=6,this.MAX_LITE=10}create(e={}){const t=new S1(this,e);return this.voices.add(t),this.sys.ctx()&&this.sys.bus()&&t.build(),t}onReady(){for(const e of this.voices)e.build();this._applyRec()}setPerspective(e){if(cc[e]){this.mode=e;for(const t of this.voices)t.applyPerspective()}}setListener(e,t,n){this.listener={pos:e,vel:t,fwd:n};const s=this.sys.ctx();s&&e&&x1(s,e,n);const r=[];for(const a of this.voices)!a.player&&a.built&&r.push(a);r.sort((a,o)=>a.lastDist-o.lastDist),r.forEach((a,o)=>a.setTier(this.paused?2:o<this.MAX_FULL?0:o<this.MAX_FULL+this.MAX_LITE&&a.lastDist<400?1:2))}setPaused(e){this.paused=e;for(const t of this.voices)t.setPausedState(e)}async loadRecordings(e,t={}){const n=this.sys.ctx(),s={loaded:[],failed:[]};if(!n)return s.failed=Object.keys(e||{}),s;const r={};return await Promise.all(Object.keys(e||{}).map(async a=>{try{const o=e[a];if(!o)return;if(typeof AudioBuffer<"u"&&o instanceof AudioBuffer){r[a]=o,s.loaded.push(a);return}const c=await fetch(o);if(!c.ok)throw new Error("http "+c.status);const l=await c.arrayBuffer();r[a]=await new Promise((h,u)=>{const d=n.decodeAudioData(l,h,u);d&&d.catch&&d.catch(u)}),s.loaded.push(a)}catch{s.failed.push(a)}})),s.loaded.length&&(this.recBuffers=r,this.recRefs=t,this._applyRec()),s}_applyRec(){for(const e of this.voices)e.player&&e.attachRecordings()}}class S1{constructor(e,t){this.mgr=e,this.player=!!t.player,this.seed=t.seed??Math.floor(Math.random()*1e6),this.opts=t,this.built=!1,this.disposed=!1,this.last=null,this.lastDist=1e9,this.tier=0,this.rec=null,this.recSent=!1,this.nodes=null,this.core=null}build(){if(this.built||this.disposed)return;const e=this.mgr.sys.ctx(),t=this.mgr.sys.bus();if(!e||!t)return;this.ctx=e;const n=v1(e,{seed:this.seed,gain:this.player?.5:.42,rpm0:this.last?.rpm??900},this.mgr.sys.workletOk());this.core=n;const s=e.createGain();s.gain.value=1,n.out.connect(s);const r=e.createGain();s.connect(r);const a={procGain:s,sum:r};let o=r;if(this.player){const l=e.createBiquadFilter();l.type="highpass";const h=e.createBiquadFilter();h.type="lowshelf",h.frequency.value=120;const u=e.createBiquadFilter();u.type="peaking";const d=e.createBiquadFilter();d.type="lowpass",d.Q.value=.5;const f=e.createGain();o.connect(l),l.connect(h),h.connect(u),u.connect(d),d.connect(f),o=f,Object.assign(a,{hp:l,shelf:h,pk:u,lp:d,pg:f})}else{const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=.5,l.frequency.value=12e3,o.connect(l),o=l,a.dlp=l}const c=e.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=this.player?1:6,c.maxDistance=600,c.rolloffFactor=this.player?0:1.3,o.connect(c),c.connect(t),a.pan=c,this.nodes=a,this.built=!0,this.applyPerspective(!0),this.attachRecordings(),this.last&&this.update(this.last)}applyPerspective(e){if(!this.built)return;const t=this.nodes,n=cc[this.mgr.mode],s=this.ctx.currentTime,r=e?.001:.08;this.player&&(t.hp.frequency.setTargetAtTime(n.hp,s,r),t.shelf.gain.setTargetAtTime(n.shelf,s,r),t.pk.frequency.setTargetAtTime(n.pkF,s,r),t.pk.Q.setTargetAtTime(n.pkQ,s,r),t.pk.gain.setTargetAtTime(n.pkG,s,r),t.lp.frequency.setTargetAtTime(n.lp,s,r),t.pg.gain.setTargetAtTime(n.gain,s,r))}attachRecordings(){if(!this.built||!this.player||this.rec||!this.mgr.recBuffers)return;const e=this.ctx;if(this.rec=y1(e,this.mgr.recBuffers,this.mgr.recRefs),!this.rec.has()){this.rec=null;return}const t=e.createGain();t.gain.value=.9,this.rec.out.connect(t),t.connect(this.nodes.sum),this.nodes.recGain=t,this.nodes.procGain.gain.setTargetAtTime(.5,e.currentTime,.3)}setTier(e){!this.built||e===this.tier||(this.tier=e,this.core.setActive(e<2&&!this.mgr.paused),this.core.setDetail(e===0?1:0))}setPausedState(e){this.built&&this.core.setActive(!e&&(this.player||this.tier<2))}update(e){if(this.disposed||(this.last=e,!this.built&&(this.mgr.sys.ctx()&&this.mgr.sys.bus()&&this.build(),!this.built))||this.mgr.paused)return;const n=this.ctx.currentTime,s=this.mgr.listener;let r=1,a=0;if(e.pos&&s.pos){const c=e.pos.x-s.pos.x,l=(e.pos.y||0)-(s.pos.y||0),h=e.pos.z-s.pos.z;if(a=Math.sqrt(c*c+l*l+h*h),!this.player&&a>.5){const u=c/a,d=l/a,f=h/a,g=s.vel?s.vel.x*u+(s.vel.y||0)*d+s.vel.z*f:0,_=e.vel?e.vel.x*u+(e.vel.y||0)*d+e.vel.z*f:0;r=wt((Th+g)/(Th+_),.85,1.18)}M1(this.nodes.pan,e.pos,n)}if(this.lastDist=a,!this.player){const c=cc[this.mgr.mode].aiCut;this.nodes.dlp.frequency.setTargetAtTime(wt(14e3/(1+a/50),1500,c),n,.1)}if(this.tier===2&&!this.player)return;const o={rpm:e.rpm??900,throttle01:e.throttle01??0,load01:e.load01??0,pitch:r,rpmLimit:this.opts.rpmLimit??9e3};this.core.setState(null,o),this.rec&&this.rec.setState(null,o)}dispose(){if(this.disposed=!0,this.mgr.voices.delete(this),!!this.built)try{this.rec&&this.rec.dispose(),this.core.dispose();for(const e of Object.keys(this.nodes))try{this.nodes[e].disconnect()}catch{}}catch{}}}const Ou={menu:{bpm:124,bars:32,target:.115,desc:"confident, building, bass-led"},garage:{bpm:88,bars:24,target:.085,desc:"calm, warm, sparse"},race:{bpm:128,bars:32,target:.06,desc:"low-intensity bed under the engines"},results:{bpm:96,bars:16,target:.09,desc:"short resolve"}},wh=3.2;class T1{constructor(e,t,n,s=0){this.ctx=e,this.step=60/t/4,this.loopLen=n*16*this.step,this.bars=n,this.origin=s*16*this.step;const r=(m,p)=>{const y=e.createGain();return y.gain.value=m,p&&y.connect(p),y},a=r(.9);a.connect(e.destination),this.master=a;const o=e.createConvolver();o.buffer=u1(e,1.8,3,11);const c=r(1,o),l=r(.42,a);o.connect(l);const h=e.createDelay(1.5);h.delayTime.value=this.step*3;const u=r(.36),d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=3200;const f=r(1,h);h.connect(d),d.connect(u),u.connect(h);const g=r(.34,a);d.connect(g),d.connect(c);const _=(m,p=0,y=0)=>{const M=r(m,a);return p&&M.connect(r(p,c)),y&&M.connect(r(y,f)),M};this.bus={kick:_(.95),snare:_(.6,.18),hat:_(.5),bass:_(.85),pad:_(.55,.5),arp:_(.55,.28,.5),lead:_(.6,.32,.42),fx:_(.6,.2)},this.vib=e.createOscillator(),this.vib.frequency.value=5.3,this.vibG=r(9),this.vib.connect(this.vibG),this.vib.start(0)}t(e,t=0){return(e*16+t)*this.step-this.origin}noise(e,t,n,s,r,a,o=1,c="bandpass",l="white",h=.002){const u=this.ctx,d=u.createGain();d.gain.setValueAtTime(0,e),d.gain.linearRampToValueAtTime(n,e+h),d.gain.exponentialRampToValueAtTime(1e-4,e+t),d.gain.setValueAtTime(0,e+t+.01),d.connect(s);const f=u.createBiquadFilter();f.type=c,f.Q.value=o,a?(f.frequency.setValueAtTime(r,e),f.frequency.exponentialRampToValueAtTime(a,e+t)):f.frequency.value=r,f.connect(d);const g=u.createBufferSource();g.buffer=fa(u,l),g.loop=!0,g.connect(f),g.start(e,e*7.31%3.5),g.stop(e+t+.03)}note(e,t,n,s,r,a={}){const o=this.ctx,c=Math.min(a.attack??.005,n),l=a.release??.12,h=o.createGain();if(h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(r,t+c),h.gain.setValueAtTime(r,t+Math.max(c,n)),h.gain.exponentialRampToValueAtTime(1e-4,t+n+l),h.gain.setValueAtTime(0,t+n+l+.01),a.pan){const d=o.createStereoPanner();d.pan.value=a.pan,h.connect(d),d.connect(e)}else h.connect(e);let u=h;a.filter&&(u=o.createBiquadFilter(),u.type="lowpass",u.Q.value=a.filter[2]??.8,a.filter[1]==null||a.filter[1]===a.filter[0]?u.frequency.value=a.filter[0]:(u.frequency.setValueAtTime(a.filter[0],t),u.frequency.exponentialRampToValueAtTime(Math.max(40,a.filter[1]),t+Math.max(.02,n*(a.sweep??.6)))),u.connect(h));for(const d of a.detune||[0]){const f=o.createOscillator();f.type=a.type||"sawtooth",f.frequency.value=s,f.detune.value=d,f.connect(u),a.vib&&this.vibG.connect(f.detune),f.start(t),f.stop(t+n+l+.05)}}kick(e,t=1){const n=this.ctx,s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.9*t,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.34),s.gain.setValueAtTime(0,e+.36),s.connect(this.bus.kick);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(155,e),r.frequency.exponentialRampToValueAtTime(46,e+.1),r.connect(s),r.start(e),r.stop(e+.4),this.noise(e,.012,.16*t,this.bus.kick,2500,0,.7,"highpass")}snare(e,t=1){this.noise(e,.2,.5*t,this.bus.snare,1900,1100,.8,"bandpass"),this.noise(e,.08,.2*t,this.bus.snare,5200,0,.7,"highpass"),this.note(this.bus.snare,e,.02,195,.28*t,{type:"triangle",release:.09,attack:.002})}hat(e,t=1,n=!1){this.noise(e,n?.2:.04,.17*t,this.bus.hat,7800,0,.7,"highpass","white",.001)}crash(e,t=1){this.noise(e,1.6,.16*t,this.bus.fx,4200,0,.6,"highpass","white",.003)}riser(e,t,n=1){this.noise(e,t,.22*n,this.bus.fx,250,9e3,2,"bandpass","pink",t-.05)}bass(e,t,n,s=1,r=1){const a=Li(t),o=n*this.step;this.note(this.bus.bass,e,o,a,.34*s,{type:"sawtooth",attack:.004,release:.05,filter:[Math.min(2400,1400*r),260*r+60,1.4],sweep:.5}),this.note(this.bus.bass,e,o,a,.3*s,{type:"sine",attack:.004,release:.05})}pad(e,t,n,s=1,r=1500,a=.5){const o=this.ctx,c=.8,l=.07*s,h=o.createBiquadFilter();h.type="lowpass",h.Q.value=.7,h.frequency.setValueAtTime(r*.5,e),h.frequency.exponentialRampToValueAtTime(r,e+n*.8),h.connect(this.bus.pad);const u=o.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+Math.min(a,n)),u.gain.setValueAtTime(l,e+n),u.gain.exponentialRampToValueAtTime(1e-4,e+n+c),u.gain.setValueAtTime(0,e+n+c+.01),u.connect(h);const d=o.createStereoPanner();d.pan.value=-.85,d.connect(u);const f=o.createStereoPanner();f.pan.value=.85,f.connect(u),t.forEach((g,_)=>{for(const[m,p]of[[-7,d],[6,f]]){const y=o.createOscillator();y.type="sawtooth",y.frequency.value=Li(g),y.detune.value=m+_%2*2,y.connect(p),y.start(e),y.stop(e+n+c+.05)}})}pluck(e,t,n,s=1,r=0,a=3500){const o=Li(t),c=n*this.step;this.note(this.bus.arp,e,c*.45,o,.13*s,{type:"square",attack:.002,release:.05,pan:r,filter:[a]}),this.note(this.bus.arp,e,c,o,.1*s,{type:"sine",attack:.002,release:.1,pan:r})}bell(e,t,n,s=1){const r=Li(t),a=n*this.step;this.note(this.bus.lead,e,a,r,.13*s,{type:"triangle",attack:.003,release:.5}),this.note(this.bus.lead,e,a*.6,r*2.01,.04*s,{type:"sine",attack:.002,release:.3})}lead(e,t,n,s=1){this.note(this.bus.lead,e,n*this.step,Li(t),.12*s,{type:"sawtooth",detune:[-9,8],attack:.01,release:.14,vib:!0,filter:[3400,1500,.9],sweep:.9})}}const ki=(i,e)=>e.map(t=>i+t);async function E1(i,e,t,n){const s=[{r:43,iv:[0,3,7]},{r:39,iv:[0,4,7]},{r:46,iv:[0,4,7]},{r:41,iv:[0,4,7]}],r=[[0,0],[2,0],[3,12],[6,0],[8,0],[10,7],[11,12],[14,0]],a=[0,2,1,3,2,1,3,2,0,2,1,3,2,3,1,2],o=[[[0,74,3],[3,77,2],[6,79,2],[8,77,3],[12,74,4]],[[0,75,3],[3,79,2],[6,82,2],[8,79,3],[12,75,4]],[[0,77,2],[2,74,2],[4,70,4],[8,74,3],[12,77,4]],[[0,72,3],[3,77,2],[6,81,2],[8,79,4],[12,77,2],[14,74,2]]];for(let c=t;c<n;c++){const l=Math.floor(c/8),h=s[c%4],u=i.t(c),d=ki(h.r,h.iv),f=l===3?c>=30?[]:[0,8]:[0,4,8,12];for(const _ of f)i.kick(i.t(c,_),l===0?.8:.95);c%8===0&&i.crash(u,l===0?.5:.7);for(const _ of[2,6,10,14])i.hat(i.t(c,_),l===0?.5:.7,_===14&&l>=2);if(l>=1)for(const _ of[0,4,8,12])(l!==3||c>=30)&&i.hat(i.t(c,_+1),.3+.1*(_%8===0));if(l>=1&&l!==3&&(i.snare(i.t(c,4),.85),i.snare(i.t(c,12),.9)),l===3&&c<30&&i.snare(i.t(c,12),.7),c===31)for(let _=8;_<16;_++)i.snare(i.t(c,_),.35+.08*(_-8));if(l===0)for(let _=0;_<16;_+=2)i.bass(i.t(c,_),h.r,1.5,.8,.55);else if(l===3)i.bass(u,h.r,15,.8,.7);else for(const[_,m]of r)i.bass(i.t(c,_),h.r+m,1.2,.95+(m?.05:0),1);if(i.pad(u,ki(h.r+24,h.iv),16*i.step,l===0?.8:1,l===0?900:l===3?2400:1500,.4),l>=1)for(let _=0;_<16;_++){const m=a[_],p=d[m%3]+36+(m===3?12:0);i.pluck(i.t(c,_),p,1.1,(l===3?.5:.8)*(_%4===0?1:.75),(_%4-1.5)*.25,3600)}if(l===2||l===1&&c>=12)for(const[_,m,p]of o[c%4])i.lead(i.t(c,_),m,p,l===2?1:.5);c===30&&i.riser(i.t(30),32*i.step,1),c%4===3&&await e()}}async function w1(i,e,t,n){const s=[{r:50,iv:[0,3,7,10,14]},{r:46,iv:[0,4,7,11]},{r:53,iv:[0,4,7,11]},{r:48,iv:[0,4,7,14]}],r=[0,2,4,2,1,3,2,1];for(let a=t;a<n;a++){const o=Math.floor(a/8),c=s[a%4],l=i.t(a),h=ki(c.r,c.iv);if(i.pad(l,ki(c.r+12,c.iv).slice(0,4),16*i.step+.4,1,800,1.2),i.note(i.bus.bass,l,15.5*i.step,Li(c.r-12),.3,{type:"sine",attack:.05,release:.4}),o>=1)for(let u=0;u<8;u++){const d=r[u]%h.length;i.pluck(i.t(a,u*2),h[d]+24,3,(u%2?.55:.8)*(o===1?.8:1),(u%4-1.5)*.3,2400)}o>=2&&(i.kick(l,.5),i.kick(i.t(a,10),.35),i.hat(i.t(a,4),.35),i.hat(i.t(a,12),.35),i.snare(i.t(a,8),.28)),a%4===3&&await e()}}async function A1(i,e,t,n){const s=[{r:45,iv:[0,3,7]},{r:41,iv:[0,4,7]},{r:48,iv:[0,4,7]},{r:43,iv:[0,4,7]}];for(let r=t;r<n;r++){const a=Math.floor(r/8),o=s[r%4],c=i.t(r),l=ki(o.r,o.iv);i.kick(c,.55),i.kick(i.t(r,8),.45),r>=4&&(i.hat(i.t(r,4),.35),i.hat(i.t(r,12),.35)),a>=2&&(i.hat(i.t(r,14),.25),i.snare(i.t(r,12),.25));for(let h=0;h<16;h+=2)i.bass(i.t(r,h),o.r+(h===6&&r%2?12:0),1.4,.55+.1*(h===0),.45);i.pad(c,ki(o.r+12,o.iv),16*i.step,.7,700,.6),r%2===1&&a>=1&&[0,3,6,8,11,14].forEach((h,u)=>i.pluck(i.t(r,h),l[u%3]+24,1.2,.38,(u%3-1)*.3,2200)),r%8===7&&i.riser(i.t(r,8),8*i.step,.35),r%4===3&&await e()}}async function R1(i,e,t,n){const s=[{r:53,iv:[0,4,7,11]},{r:50,iv:[0,3,7,10]},{r:46,iv:[0,4,7,14]},{r:48,iv:[0,4,7]}],r=[[[0,72,3],[3,76,3],[8,77,6]],[[0,74,3],[3,77,3],[8,81,6]],[[0,74,3],[3,77,3],[8,82,6]],[[0,76,3],[3,79,3],[8,84,8]]];for(let a=t;a<n;a++){const o=s[a%4],c=i.t(a);if(i.pad(c,ki(o.r+12,o.iv).slice(0,4),16*i.step+.3,1,1700,.35),i.note(i.bus.bass,c,15*i.step,Li(o.r-12),.32,{type:"sine",attack:.02,release:.3}),a>=2&&a<14)for(const[l,h,u]of r[a%4])i.bell(i.t(a,l),h,u,a<4?.8:1);if(a>=4&&a<14&&(i.kick(c,.55),i.kick(i.t(a,8),.4)),a>=8&&a<14){i.snare(i.t(a,12),.35);for(const l of[4,12])i.hat(i.t(a,l),.35)}a===0&&i.crash(c,.3),a%4===3&&await e()}}const C1={menu:E1,garage:w1,race:A1,results:R1},Ah=4;function P1(i,e,t){const r=Math.exp(-1/(.006*t)),a=Math.exp(-1/(.18*t)),o=i.length;let c=0;for(let l=0;l<2;l++)for(let h=0;h<o;h++){const u=Math.max(Math.abs(i[h]),Math.abs(e[h]));if(c=u>c?r*c+(1-r)*u:a*c+(1-a)*u,l===1){const d=c>.16?Math.pow(c/.16,-.7142857142857143):1;i[h]*=d,e[h]*=d}}}async function L1(i,{ctxFactory:e,sampleRate:t=32e3,yieldFn:n=()=>ia(0),concurrency:s=2}={}){const r=Ou[i];if(!r)throw new Error("unknown track "+i);const a=e||((T,R,C)=>new OfflineAudioContext(T,R,C)),c=16*(60/r.bpm/4),l=t,h=Math.round(r.bars*c*l),u=Math.round(wh*l),d=h+u,f=[new Float32Array(d),new Float32Array(d)],g=[];for(let T=0;T<r.bars;T+=Ah)g.push([T,Math.min(r.bars,T+Ah)]);let _=0;const m=async()=>{for(;_<g.length;){const[T,R]=g[_++],C=Math.ceil(((R-T)*c+wh)*l),b=a(2,C,l),S=new T1(b,r.bpm,r.bars,T);await C1[i](S,n,T,R),await n();const D=await b.startRendering(),F=Math.round(T*c*l);for(let L=0;L<2;L++){const I=D.getChannelData(L),k=f[L],H=Math.min(I.length,d-F);for(let q=0;q<H;q++)k[F+q]+=I[q]}}};await Promise.all(Array.from({length:Math.max(1,s)},m));const p=[new Float32Array(h),new Float32Array(h)];for(let T=0;T<2;T++){const R=p[T],C=f[T];for(let b=0;b<h;b++)R[b]=C[b];for(let b=0;b<u&&b<h;b++)R[b]+=C[h+b]}P1(p[0],p[1],l);let y=0,M=0;for(let T=0;T<2;T++)for(let R=0;R<h;R++){const C=p[T][R];y+=C*C,Math.abs(C)>M&&(M=Math.abs(C))}const v=Math.sqrt(y/(2*h));let E=v>0?r.target/v:1;M*E>.92&&(E=.92/M);for(let T=0;T<2;T++)for(let R=0;R<h;R++)p[T][R]*=E;return{name:i,sampleRate:l,length:h,channels:p,rmsBefore:v,gain:E,seconds:h/l}}const gn=typeof window<"u"?window:null,Ds=gn&&(gn.AudioContext||gn.webkitAudioContext),Rh=gn&&(gn.OfflineAudioContext||gn.webkitOfflineAudioContext),Z={ctx:null,ready:!1,unlocked:!1,inited:!1,workletOk:!1,unlockP:null,gestureArmed:!1,buses:null,ambient:null,paused:!1,perspective:"cockpit",hiddenSuspended:!1,listeners:new Set,vol:{master:.9,music:.5,sfx:.9,engine:.9,ambient:.7},musicBuf:{},musicJob:{},musicWanted:null,musicFade:1.5,musicCur:null,lastHover:0},ts=new b1({ctx:()=>Z.ready?Z.ctx:null,bus:()=>Z.ready?Z.buses.engine:null,workletOk:()=>Z.workletOk});function Bu(){for(const i of Z.listeners)try{i(tt.state)}catch{}}function I1(){const i=Z.ctx,e=r=>{const a=i.createGain();return a.gain.value=r,a},t=e(Z.vol.master),n=i.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=20,n.ratio.value=3,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(i.destination);const s={master:t,music:e(Z.vol.music),sfx:e(Z.vol.sfx),engine:e(Z.vol.engine),ambient:e(Z.vol.ambient),musicDuck:e(1)};s.music.connect(s.musicDuck),s.musicDuck.connect(t),s.sfx.connect(t),s.engine.connect(t),s.ambient.connect(t),Z.buses=s}function zu(){if(!Z.buses)return;const i=Z.ctx.currentTime;for(const e of["master","music","sfx","engine","ambient"])Z.buses[e].gain.setTargetAtTime(wt(Z.vol[e],0,1),i,.05)}function D1(){try{const i=Z.ctx.createBuffer(1,1,22050),e=Z.ctx.createBufferSource();e.buffer=i,e.connect(Z.ctx.destination),e.start(0)}catch{}}function lc(){if(Z.gestureArmed||!gn)return;Z.gestureArmed=!0;const i=["pointerdown","touchend","keydown","click"],e=()=>{tt.unlock().then(t=>{t&&(i.forEach(n=>gn.removeEventListener(n,e,!0)),Z.gestureArmed=!1)})};i.forEach(t=>gn.addEventListener(t,e,!0))}function N1(){const i=Z.ctx;i.onstatechange=()=>{Z.unlocked=i.state==="running",Bu(),!Z.unlocked&&!Z.hiddenSuspended&&lc()},typeof document<"u"&&document.addEventListener("visibilitychange",()=>{Z.ctx&&(document.hidden?Z.ctx.state==="running"&&(Z.hiddenSuspended=!0,Z.ctx.suspend().catch(()=>{})):Z.hiddenSuspended&&(Z.hiddenSuspended=!1,Z.ctx.resume().catch(()=>lc())))})}async function U1(){if(!Z.inited){Z.inited=!0,Z.workletOk=await Promise.race([m1(Z.ctx),ia(2500).then(()=>!1)]),Z.ready=!0,zu();try{Z.ambient=f1(Z.ctx,Z.buses.ambient),Z.ambient.setPerspective(Z.perspective),Z.ambient.update({})}catch{Z.ambient=null}ts.onReady(),Z.musicWanted&&Hu(Z.musicWanted,Z.musicFade),(async()=>{for(const i of["menu","garage","race","results"])await Vu(i),await ia(250)})()}}function Vu(i){return Z.musicBuf[i]?Promise.resolve(Z.musicBuf[i]):Z.musicJob[i]?Z.musicJob[i]:!Ou[i]||!Rh||!Z.ctx?Promise.resolve(null):(Z.musicJob[i]=L1(i,{ctxFactory:(e,t,n)=>new Rh(e,t,n),sampleRate:32e3}).then(e=>{const t=Z.ctx.createBuffer(2,e.length,e.sampleRate);return t.copyToChannel(e.channels[0],0),t.copyToChannel(e.channels[1],1),Z.musicBuf[i]=t,t}).catch(()=>(Z.musicJob[i]=null,null)),Z.musicJob[i])}async function Hu(i,e){if(!Z.ready||Z.musicCur&&Z.musicCur.name===i)return;const t=await Vu(i);if(!t||Z.musicWanted!==i||Z.musicCur&&Z.musicCur.name===i)return;const n=Z.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=t,r.loop=!0;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+Math.max(.05,e)),r.connect(a),a.connect(Z.buses.music),r.start(s);const o=Z.musicCur;Z.musicCur={name:i,src:r,g:a},o&&Gu(o,e)}function Gu(i,e){const t=Z.ctx.currentTime;try{i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(i.g.gain.value,t),i.g.gain.linearRampToValueAtTime(0,t+Math.max(.05,e)),i.src.stop(t+Math.max(.05,e)+.1)}catch{}}function Wt(i,...e){if(!Z.ready||Z.ctx.state!=="running")return 0;try{return d1[i](Z.ctx,Z.buses.sfx,Z.ctx.currentTime+.005,...e)||0}catch{return 0}}const Ch=()=>Math.random()*2-1,tt={get supported(){return!!Ds},get state(){return Ds?Z.ctx?Z.ctx.state==="running"&&Z.ready?"running":Z.ctx.state==="running"?"starting":Z.ctx.state:"locked":"unsupported"},get ctx(){return Z.ctx},onStateChange(i){return Z.listeners.add(i),()=>Z.listeners.delete(i)},unlock(){if(!Ds)return Promise.resolve(!1);if(Z.unlockP)return Z.unlockP;if(!Z.ctx){try{Z.ctx=new Ds({latencyHint:"interactive"})}catch{try{Z.ctx=new Ds}catch{return Promise.resolve(!1)}}try{gn.navigator&&gn.navigator.audioSession&&(gn.navigator.audioSession.type="playback")}catch{}I1(),N1()}D1();let i;try{i=Z.ctx.state==="running"?Promise.resolve():Z.ctx.resume()}catch{i=Promise.resolve()}return Z.unlockP=(async()=>{try{await Promise.race([i,ia(1200)])}catch{}return Z.unlocked=Z.ctx.state==="running",Z.unlocked?await U1():lc(),Bu(),Z.unlocked})().finally(()=>{Z.unlockP=null}),Z.unlockP},setVolumes(i={}){for(const e of Object.keys(Z.vol))typeof i[e]=="number"&&(Z.vol[e]=wt(i[e],0,1));zu()},setPerspective(i){Z.perspective=i,ts.setPerspective(i),Z.ambient&&Z.ambient.setPerspective(i)},setListener(i,e,t){ts.setListener(i,e,t)},setPaused(i){Z.paused=!!i,ts.setPaused(Z.paused),Z.ambient&&Z.ambient.setMute(Z.paused),Z.buses&&Z.buses.musicDuck.gain.setTargetAtTime(Z.paused?.4:1,Z.ctx.currentTime,.12)},ui:{hover(){const i=performance.now();i-Z.lastHover<45||(Z.lastHover=i,Wt("hover",Ch()))},click(){Wt("click",Ch())},confirm(){Wt("confirm")},back(){Wt("back")},error(){Wt("error")},tab(){Wt("tab")},toggle(i=!0){Wt("toggle",!!i)},whoosh(){Wt("whoosh")},intro(){return Wt("intro")},countdown(i=3){Wt("countdown",i)},go(){Wt("go")},lap(){Wt("lap")},bestLap(){Wt("bestLap")},sponsor(){Wt("sponsor")},crash(i=.6){Wt("crash",wt(i,0,1))}},music:{play(i,{fade:e=1.5}={}){Z.musicWanted=i,Z.musicFade=e,Z.ready&&Hu(i,e)},stop(i=1){Z.musicWanted=null,Z.musicCur&&Z.ctx&&(Gu(Z.musicCur,i),Z.musicCur=null)},get current(){return Z.musicCur?Z.musicCur.name:null},isReady(i){return!!Z.musicBuf[i]}},engine:{create(i){return ts.create(i)},loadRecordings(i,e){return ts.loadRecordings(i,e)}},ambient:{update(i){Z.ambient&&Z.ambient.update(i)}}},Or=1/120,Ph=["J. Walker","M. Ortega","D. Hale","T. Brandt","R. Okafor","S. Lindgren","C. Duval","A. Reyes","B. Kowalski","L. Moreau","H. Tanaka","P. Novak","E. Castillo","G. Fischer","K. Mbeki","V. Santos","N. Ivanov","F. Dunmore","O. Haugen","Z. Marlow","W. Prescott","I. Barros","Q. Ellison","U. Nakamura","Y. Delacroix","X. Whitaker","A. Strand","R. Quill","D. Pruitt","M. Sato","L. Voss","T. Greer"],Lh=[["#c8102e","#f4f4f4"],["#0b5fa5","#f2c200"],["#1c1c1c","#e0e0e0"],["#f2c200","#1c1c1c"],["#2c8a3d","#f4f4f4"],["#6a2c91","#f4c542"],["#e8661a","#1c1c1c"],["#e9e9e9","#c8102e"],["#0f7f8c","#f4f4f4"],["#8a1c1c","#d9b25c"],["#14315c","#e34a33"],["#3f4a52","#9ae37c"]],Ih=["none","stripe","split","chevron","fade"],Br={quality:"medium",units:"mph",camera:0,assists:1,volumes:{master:.8,music:.55,sfx:.8,engine:.9,ambient:.7},touch:"auto"};function k1(){try{const i=JSON.parse(localStorage.getItem("rtta.settings")||"{}");return{...Br,...i,volumes:{...Br.volumes,...i.volumes||{}}}}catch{return{...Br,volumes:{...Br.volumes}}}}class F1{constructor(){this.settings=k1(),this.career=l1,this.input=h1(),this.ui=null,this.handlers={},this.mode="idle",this.paused=!1,this.race=null,this.vis=[],this.cfg=null,this.acc=0,this.shake=0,this.orbit={az:.6,el:.16,dist:7.2,auto:!0},this.garageOn=!1,this.showcase=null,this.showId=null,this.camMode=this.settings.camera|0,this.camPos=new U,this.camTgt=new U,this.camInit=!1,this.fov=62,this.t=0,this.fps=60,this.garage={enter:()=>{this.garageOn=!0,this.orbit.auto=!1,this.orbit.az=.7,this.orbit.dist=6.6,this.refreshShowcase()},exit:()=>{this.garageOn=!1,this.orbit.auto=!0,this.orbit.dist=7.4},setLivery:e=>{const t=this.career.state.livery;Object.assign(t,e),e.slots&&(t.slots={...t.slots,...e.slots}),this.career.save(),this.showcase&&(this.showcase.setLivery(t),this.showcase.flush())},orbit:(e,t)=>{this.orbit.az-=e*.008,this.orbit.el=Xe(this.orbit.el+t*.005,.02,.9)},zoom:e=>{this.orbit.dist=Xe(this.orbit.dist+e,4.2,12)}},this.input.cycleCamera=()=>this.cycleCamera()}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,...t){for(const n of this.handlers[e]||[])try{n(...t)}catch(s){console.error(s)}}saveSettings(){try{localStorage.setItem("rtta.settings",JSON.stringify(this.settings))}catch{}try{tt.setVolumes(this.settings.volumes)}catch{}}toast(e,t="info"){this.ui&&this.ui.toast(e,t)}async init(e,t=()=>{}){const n=document.createElement("canvas");n.id="gl",e.appendChild(n),t(.04,"Starting renderer"),this.world=new t_(n,{quality:this.settings.quality}),this.track=new i_,await new Promise(l=>setTimeout(l,0)),t(.12,"Building the speedway"),this.trackRoot=c_(this.track,this.world.q,l=>t(.12+l*.3,"Building the speedway")),this.world.scene.add(this.trackRoot),this.world.setTime("day","clear");const s=this.track.d,r=[],a=Math.max(1,Math.floor(s.px.length/120));for(let l=0;l<s.px.length;l+=a)r.push([s.px[l],s.pz[l]]);this.minimapPts=r;const o=["e87","e05","e15"];let c=0;for(const l of o)t(.45+c++*.15,"Loading cars"),await _h(l);t(.92,"Preparing garage"),this.refreshShowcase(),this.world.render(),t(1,"Ready"),this.running=!0,this.last=performance.now(),requestAnimationFrame(l=>this.frame(l)),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.saveSettings(),this.emit("ready")}place(e,t,n,s,r,a){const o=a.bank||0,c=a.rx||0,l=a.rz||0,h=new U(-c*Math.sin(o),Math.cos(o),-l*Math.sin(o)),u=new U(Math.sin(r),0,Math.cos(r));u.addScaledVector(h,-u.dot(h)).normalize();const d=new U().crossVectors(h,u).normalize();e.matrixAutoUpdate=!1,e.matrix.makeBasis(d,h,u),e.matrix.setPosition(t,n,s),e.matrixWorldNeedsUpdate=!0}carIdForSeries(e){return mh[e]||mh[this.career.series.id]||"e05"}refreshShowcase(){const e=this.carIdForSeries(this.career.series.id);if(!this.showcase||this.showId!==e){this.showcase&&(this.world.scene.remove(this.showcase.group),this.showcase.dispose()),this.showcase=io({car:e,atlas:this.settings.quality==="low"?"med":"high",livery:this.career.state.livery}),this.showId=e,this.world.scene.add(this.showcase.group);const t=this.track.point(120,0,{}),n=this.track.at(120);this.showPt=t,this.place(this.showcase.group,t.x,t.y,t.z,t.heading,n),this.showcase.setLights(!1)}else this.showcase.setLivery(this.career.state.livery),this.showcase.flush();this.showcase.group.visible=this.mode!=="race"&&this.mode!=="results"}randomLivery(e,t){const[n,s]=Lh[Math.floor(e()*Lh.length)];let r;do r=String(1+Math.floor(e()*98));while(t.has(r));t.add(r);const a={},o=ha.filter(c=>c.tier<=2);for(const c of["hood","roof","door","quarter","trunk","bumper"])a[c]=e()<.7?o[Math.floor(e()*o.length)].id:null;return{...na,paint:n,accent:s,trim:"#14161a",pattern:Ih[Math.floor(e()*Ih.length)],finish:"gloss",number:r,numberColor:e()<.5?"#ffffff":"#111111",numberStyle:"italic",slots:a}}clearRace(){for(const e of this.vis)if(this.world.scene.remove(e.car.group),e.car.dispose(),e.voice)try{e.voice.dispose()}catch{}this.vis=[],this.race=null,this.ghostVis&&(this.world.scene.remove(this.ghostVis.group),this.ghostVis.dispose(),this.ghostVis=null)}async startRace(e={}){return this.launch("race",e)}async startHotLap(e={}){return this.launch("hotlap",e)}async launch(e,t){try{this.clearRace(),this.cfg={...t,kind:e},this.paused=!1,this.input.clear();const n=t.series||this.career.series.id,s=this.carIdForSeries(n);await _h(s);const r=t1(s,i1(s)),a=e==="hotlap",o=a?1:Xe(t.field||12,2,this.world.q.maxCars),c=Uc(Date.now()&65535),l=new Set([String(this.career.state.livery.number)]),h=[],u=this.career.state.livery,d=new yh(0,"You",u.number,u,!0,r,s);h.push(d);for(let g=1;g<o;g++){const _=this.randomLivery(c,l),m=new yh(g,Ph[(g-1)%Ph.length],_.number,_,!1,r,s);m.driver=new Uu(this.track,t.ai||"pro",g+1,(c()-.5)*6),h.push(m)}this.race=new r1(this.track,h,{laps:a?999:t.laps||3,mode:a?"hotlap":"race",onEvent:(g,..._)=>this.onRaceEvent(g,..._)}),this.world.setTime(t.time||"day",t.weather||"clear"),a?this.race.rollingStart(42,-80):this.race.gridUp(Math.min(o-1,Math.floor(o*.55)));const f=o<=16?"med":"low";for(const g of h){const _=io({car:s,atlas:g.isPlayer?this.settings.quality==="low"?"med":"high":f,livery:g.livery});this.world.scene.add(_.group),this.vis.push({e:g,car:_,spin:0,voice:null,roll:0,pitch:0})}try{const g=d.gridPos||1,_=h.filter(m=>!m.isPlayer).sort((m,p)=>Math.abs((m.gridPos||0)-g)-Math.abs((p.gridPos||0)-g)).slice(0,3);for(const m of this.vis)(m.e.isPlayer||_.includes(m.e))&&(m.voice=tt.engine.create({player:m.e.isPlayer,kind:"v8",seed:m.e.id+3}));tt.setPerspective(this.camMode===1?"cockpit":"chase"),tt.music.play("race",{fade:1.5})}catch(g){console.warn("audio",g)}this.rec=[],this.recOK=!1,this.recLast=0,this.lapT0=0,this.ghostData=a?this.loadGhost():null,this.ghostVis=null,this.ghostHint=void 0,a&&t.ghost&&(this.ghostVis=this.makeGhostCar(s)),this.showcase&&(this.showcase.group.visible=!1),this.mode="race",this.acc=0,this.camInit=!1,this.flag=null,this.finishing=!1,this.shown=!1}catch(n){console.error(n),this.toast("Could not start: "+(n&&n.message||n),"warn")}}onRaceEvent(e,t,n,s){const r=this.race&&this.race.player;try{e==="count"?tt.ui.countdown(t):e==="go"?(tt.ui.go(),this.toast("Green flag","good")):e==="lap"&&t===r?(tt.ui.lap(),this.emit("lapComplete",t.lastLap),this.race.mode==="hotlap"&&this.hotLapCrossed(t)):e==="bestlap"&&t===r?(tt.ui.bestLap(),this.toast("Best lap","good"),this.race.mode==="hotlap"&&t.bestLap&&(!this.career.state.bestLap||t.bestLap<this.career.state.bestLap)&&(this.career.state.bestLap=t.bestLap,this.career.save())):e==="crash"&&(t===r||n===r)?(tt.ui.crash(Xe(s||.4,0,1)),this.shake=Math.max(this.shake,Xe(s||.4,0,1))):e==="wall"&&t===r?(tt.ui.crash(.5),this.shake=Math.max(this.shake,.5)):e==="finish"&&t===r?(this.flag="checker",this.emit("flag","checker")):e==="done"&&this.finishRace()}catch(a){console.warn(a)}}finishRace(){if(this.finishing)return;this.finishing=!0;const e=this.race,t=e.player,n=this.cfg.kind==="hotlap",s=e.sorted.slice(0,10).map((a,o)=>({pos:o+1,name:a.isPlayer?"You":a.name,me:a.isPlayer,gap:o===0?"":a.finished&&e.sorted[0].finished?`+${Math.max(0,a.finishTime-e.sorted[0].finishTime).toFixed(1)}s`:`+${Math.max(1,Math.round((e.sorted[0].prog-a.prog)/e.track.length))} lap`}));let r={mode:n?"hotlap":"race",pos:t.pos,field:e.entries.length,laps:this.cfg.laps||e.laps,bestLap:t.bestLap,standings:s};!n&&this.cfg.series&&(r.career=this.career.recordResult({series:this.cfg.series,pos:t.pos,field:e.entries.length,laps:e.laps,bestLap:t.bestLap,points:0})),this.emit("raceFinished",r),this.endRace(),this.mode="results";try{tt.music.play("results",{fade:1})}catch{}this.ui&&this.ui.show("results",r)}endRace(){for(const e of this.vis)if(e.voice){try{e.voice.dispose()}catch{}e.voice=null}}afterStep(){const e=this.race;if(e.mode==="hotlap"&&this.recOK&&e.t-this.recLast>=.05){this.recLast=e.t;const t=e.player.sim;this.rec.push(+t.x.toFixed(2),+t.z.toFixed(2),+t.psi.toFixed(3))}}loadGhost(){try{const e=JSON.parse(localStorage.getItem("rtta.ghost.v1")||"null");return e&&e.pts&&e.pts.length>60?e:null}catch{return null}}hotLapCrossed(e){const t=e.lastLap;if(this.recOK&&t&&this.rec.length>60&&(!this.ghostData||t<this.ghostData.lap)){this.ghostData={lap:+t.toFixed(3),pts:this.rec.slice()};try{localStorage.setItem("rtta.ghost.v1",JSON.stringify(this.ghostData))}catch{}}this.rec=[],this.recOK=!0,this.lapT0=this.race.t,this.recLast=this.race.t}updateGhost(){const e=this.ghostVis;if(!e)return;const t=this.race,n=this.ghostData;if(!n||!this.recOK||t.mode!=="hotlap"){e.group.visible=!1;return}const s=t.t-this.lapT0,r=s/.05,a=Math.floor(r),o=n.pts.length/3;if(a<0||a>=o-1||s>n.lap+.5){e.group.visible=!1;return}const c=r-a,l=n.pts,h=l[a*3]+(l[a*3+3]-l[a*3])*c,u=l[a*3+1]+(l[a*3+4]-l[a*3+1])*c;let d=l[a*3+2],f=l[a*3+5];for(;f-d>Math.PI;)f-=2*Math.PI;for(;f-d<-Math.PI;)f+=2*Math.PI;const g=this.ghostQ||(this.ghostQ={});this.track.query(h,u,this.ghostHint,g),this.ghostHint=g.i,this.place(e.group,h,g.surface==="grass"?0:g.y,u,d+(f-d)*c,g.surface==="grass"?{bank:0,rx:0,rz:0}:g),e.spin+=(n.lap>0?70:0)*.016/e.dim.wheelR,e.update({steer:0,spin:e.spin,roll:0,pitch:0}),e.group.visible=!0}makeGhostCar(e){const t=io({car:e,atlas:"low",livery:{...na,paint:"#9fe6ff",accent:"#ffffff",trim:"#9fe6ff",pattern:"none",number:"",slots:{hood:null,roof:null,door:null,quarter:null,trunk:null,bumper:null}}});return t.group.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.38,n.material.depthWrite=!1)}),t.spin=0,this.world.scene.add(t.group),t}finishHotLap(){const e=this.race,t=e&&e.player;if(!t||this.finishing)return;this.finishing=!0;const n=t.bestLap,s=this.career.state.bestLap,r=!!n&&(!s||n<=s);r&&(this.career.state.bestLap=n,this.career.save());const a={mode:"hotlap",bestLap:n,newBest:r,standings:[]};this.emit("raceFinished",a),this.endRace(),this.mode="results",this.ui&&this.ui.show("results",a)}pause(){if(!(this.mode!=="race"||this.paused)){this.paused=!0;try{tt.setPaused(!0)}catch{}this.ui&&this.ui.show("pause")}}resume(){this.paused=!1,this.last=performance.now(),this.acc=0;try{tt.setPaused(!1)}catch{}}restart(){const e=this.cfg;if(e){this.paused=!1;try{tt.setPaused(!1)}catch{}return this.launch(e.kind,e)}}exitToMenu(){this.paused=!1;try{tt.setPaused(!1),tt.music.play("menu",{fade:1})}catch{}this.clearRace(),this.mode="idle",this.camInit=!1,this.refreshShowcase(),this.world.setTime("day","clear"),this.ui&&this.ui.show("menu")}cycleCamera(){this.camMode=(this.camMode+1)%3,this.settings.camera=this.camMode,this.camInit=!1;try{tt.setPerspective(this.camMode===1?"cockpit":this.camMode===2?"broadcast":"chase")}catch{}}frame(e){requestAnimationFrame(n=>this.frame(n));let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.fps=Ir(this.fps,1/Math.max(t,.001),.05),this.t+=t,this.mode==="race"&&this.race?(this.paused||this.runRace(t),this.renderRace(t)):this.renderShowcase(t),this.world.render()}runRace(e){const t=this.race,n=t.player;if(this.input.consume("pause")){this.pause();return}if(this.input.consume("camera")&&this.cycleCamera(),this.input.consume("reset")&&n&&!n.finished){const r=n.q,a=this.track.point(r.s+2,Xe(r.u,-8,8),{});n.sim.place(a.x,a.z,a.heading,22),n.sim.w=0,n.sim.vy=0}this.acc+=e;let s=0;for(;this.acc>=Or&&s<10;){const r=this.input.read(Or,n.sim.speed);if(r.assist=this.settings.assists===0?0:1,n.controls=r,t.update(Or),this.afterStep(),this.acc-=Or,s++,this.mode!=="race")return}s>=10&&(this.acc=0),this.pushHud(),this.updateAudio(e)}pushHud(){const e=this.race,t=e.player,n=t.sim;if(!this.ui)return;const s=e.phase==="grid"?e.countdown>3?"Get ready":e.countdown>0?String(Math.ceil(e.countdown)):"GO":null;let r=this.flag||e.flag||null;t.finished&&(r="checker"),this.ui.hud.update({speedMph:n.speed*2.23694,speedKph:n.speed*3.6,rpm:n.rpm,rpmMax:n.C.redline,gear:n.gear,throttle:n.throttle,brake:n.brake,steer:t.controls.steer||0,lap:Xe(t.lap+1,1,e.mode==="hotlap"?999:e.laps),laps:e.mode==="hotlap"?0:e.laps,pos:t.pos||1,field:e.entries.length,lastLap:t.lastLap,bestLap:t.bestLap,curLap:Math.max(0,e.t-t.lapStart),gapAhead:t.gapAhead||0,gapBehind:t.gapBehind||0,drafting:n.draft>.15,damage:n.damage,flag:r,mode:e.mode,minimap:{pts:this.minimapPts,cars:e.entries.map(a=>({x:a.sim.x,z:a.sim.z,me:a.isPlayer}))},message:s})}updateAudio(e){const t=this.world.camera,n=new U;t.getWorldDirection(n);try{const s=this.vis.find(l=>l.e.isPlayer),r=s.e.sim,a=Math.sin(r.psi)*r.vx,o=Math.cos(r.psi)*r.vx;tt.setListener({x:t.position.x,y:t.position.y,z:t.position.z},{x:a,y:0,z:o},{x:n.x,y:n.y,z:n.z});for(const l of this.vis)if(l.voice){const h=l.e.sim,u=Math.sin(h.psi),d=Math.cos(h.psi);l.voice.update({rpm:h.rpm,throttle01:h.throttle,load01:Xe(h.nLoad*.5+h.throttle*.5,0,1),pos:{x:h.x,y:1,z:h.z},vel:{x:u*h.vx,y:0,z:d*h.vx}})}const c=this.race.entries.some(l=>!l.isPlayer&&Math.hypot(l.sim.x-r.x,l.sim.z-r.z)<40);tt.ambient.update({speed:r.speed,slip01:r.skid||0,offTrack:s.e.q.surface==="grass"||s.e.q.surface==="apron",drafting01:Xe(r.draft||0,0,1),crowd01:c?.5:.7,wall01:s.e.q.surface==="wall"?1:0})}catch(s){this._ae||(this._ae=1,console.warn("audio update",s))}}renderRace(e){this.race;const t=this.track;for(const s of this.vis){const r=s.e,a=r.sim,o=r.q;t.at(o.s);const c=o.surface==="grass"?0:o.y||0;this.place(s.car.group,a.x,c,a.z,a.psi,o.surface==="grass"?{bank:0,rx:0,rz:0}:{bank:o.bank,rx:o.rx,rz:o.rz}),s.spin+=a.vx/s.car.dim.wheelR*e,s.roll=Ir(s.roll,-(a.roll||0),.3),s.pitch=Ir(s.pitch,a.pitch||0,.3),s.car.update({steer:a.steer||0,spin:s.spin,roll:s.roll,pitch:s.pitch}),s.car.setBrake(a.brake),s.car.setLights(this.world.timeKey==="night"||this.world.timeKey==="sunset")}this.updateGhost();const n=this.vis.find(s=>s.e.isPlayer);this.updateCamera(n,e),this.input.consume("look")}updateCamera(e,t){const n=this.world.camera,s=e.e.sim,r=e.car.group,a=e.car.dim,o=new U(Math.sin(s.psi),0,Math.cos(s.psi)),c=new U(o.z,0,-o.x),l=new U(s.x,r.matrix.elements[13],s.z),h=this.camMode;let u=new U,d=new U,f=62;const g=s.speed;if(f=62+Xe(g/90,0,1)*14,h===0){const m=8.2+Xe(g/80,0,1)*1.2;u.copy(l).addScaledVector(o,-m).addScaledVector(c,-s.vy*.05).add(new U(0,2.5,0)),d.copy(l).addScaledVector(o,12).add(new U(0,1,0))}else h===1?(u.copy(l).addScaledVector(o,a.front*.05+.1).addScaledVector(c,.34).add(new U(0,1.05,0)),d.copy(u).addScaledVector(o,30).addScaledVector(c,(s.steer||0)*-4*0+0).add(new U(0,-.3,0)),f=74+Xe(g/90,0,1)*8):(u.copy(l).addScaledVector(o,-13).add(new U(0,5.2,0)),d.copy(l).addScaledVector(o,8).add(new U(0,.8,0)),f=52+Xe(g/90,0,1)*8);this.camInit||(this.camPos.copy(u),this.camTgt.copy(d),this.camInit=!0);const _=h===1?1:1-Math.exp(-t*(h===0?11:6));this.camPos.lerp(u,_),this.camTgt.lerp(d,h===1?1:1-Math.exp(-t*14)),n.position.copy(this.camPos),this.shake>.01&&(n.position.x+=(Math.random()-.5)*this.shake*.35,n.position.y+=(Math.random()-.5)*this.shake*.35,this.shake*=Math.exp(-t*5)),n.lookAt(this.camTgt),Math.abs(n.fov-f)>.05&&(n.fov=Ir(n.fov,f,.08),n.updateProjectionMatrix()),this.world.followSun(l),e.car.group&&(e.car.group.visible=!0)}renderShowcase(e){if(!this.showcase||!this.showPt)return;const t=this.orbit;t.auto&&(t.az+=e*.18);const n=this.showPt,s=this.world.camera,r=n.x,a=n.y+.6,o=n.z,c=t.dist;s.position.set(r+Math.sin(t.az)*Math.cos(t.el)*c,a+Math.sin(t.el)*c+.3,o+Math.cos(t.az)*Math.cos(t.el)*c),s.lookAt(r,a,o),Math.abs(s.fov-38)>.05&&(s.fov=38,s.updateProjectionMatrix()),this.world.followSun(n)}}const pa=new F1;function P(i,e,...t){const n=document.createElement(i);if(e)for(const r of Object.keys(e)){const a=e[r];if(!(a==null||a===!1))if(r==="class")n.className=a;else if(r==="style"&&typeof a=="object")for(const o of Object.keys(a))o.startsWith("--")?n.style.setProperty(o,a[o]):n.style[o]=a[o];else r==="dataset"?Object.assign(n.dataset,a):r.startsWith("on")&&typeof a=="function"?n.addEventListener(r.slice(2).toLowerCase(),a):r==="html"?n.innerHTML=a:a===!0?n.setAttribute(r,""):n.setAttribute(r,a)}const s=r=>{r==null||r===!1||(Array.isArray(r)?r.forEach(s):n.append(r instanceof Node?r:document.createTextNode(String(r))))};return t.forEach(s),n}const Ns=(i,e=document)=>e.querySelector(i),O1=(i,e=document)=>Array.from(e.querySelectorAll(i)),B1=(i,e,t)=>Math.min(t,Math.max(e,i)),zt=i=>Math.round(i).toLocaleString("en-US");function Di(i){if(i==null||!isFinite(i)||i<=0)return"--:--.---";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function Dh(i){if(i==null||!isFinite(i))return"--";const e=Math.abs(i).toFixed(1);return e==="0.0"?"0.0":(i>=0?"+":"-")+e}const Wu=i=>{const e=["th","st","nd","rd"],t=i%100;return i+(e[(t-20)%10]||e[t]||e[0])},kc=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,z1=i=>new Promise(e=>setTimeout(e,i)),Lt=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${i}</svg>`,V1={home:Lt('<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'),trophy:Lt('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a2 2 0 0 0 2 4"/><path d="M16 6h3a2 2 0 0 1-2 4"/><path d="M12 13v4"/><path d="M8 20h8"/>'),flag:Lt('<path d="M5 21V4"/><path d="M5 5h13l-2 4 2 4H5"/>'),stopwatch:Lt('<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'),car:Lt('<path d="M3 15l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v3H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),globe:Lt('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>'),gear:Lt('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),pause:Lt('<path d="M8 5v14M16 5v14"/>'),play:Lt('<path d="M7 4l13 8-13 8z"/>'),camera:Lt('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>'),lock:Lt('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),check:Lt('<path d="M5 12l4.5 4.5L19 7"/>'),back:Lt('<path d="M15 5l-7 7 7 7"/>'),chevron:Lt('<path d="M9 5l7 7-7 7"/>'),coin:Lt('<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),star:Lt('<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'),handshake:Lt('<path d="M3 12l4-4 4 2 3-2 4 3 3-1"/><path d="M7 8v7l5 4 7-5"/>'),fullscreen:Lt('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>')},en=(i,e="ico")=>{const t=document.createElement("span");return t.className=e,t.innerHTML=V1[i]||"",t},H1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 200" width="604" height="200" role="img" aria-label="Road to the Americas"><g class="mk">
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
`;function kt(i,...e){try{const t=tt&&tt.ui&&tt.ui[i];typeof t=="function"&&t.apply(tt.ui,e)}catch{}}function G1(i){try{tt&&tt.setVolumes&&tt.setVolumes(i)}catch{}}function W1(i,e){try{tt&&tt.music&&tt.music.play(i,e)}catch{}}function X1(){try{return Promise.resolve(tt&&tt.unlock&&tt.unlock()).catch(()=>{})}catch{return Promise.resolve()}}const q1='button:not([disabled]), a[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',Nh="button, a[href], input, select, label.sw, [role=button]",Q1=i=>i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden",Uh=i=>i?O1(q1,i).filter(Q1):[];function K1(i,{getScope:e,onBack:t,hudActive:n,onHudPause:s}){let r=null;i.addEventListener("click",f=>{const g=f.target.closest(Nh);if(!g)return;if(g.disabled||g.getAttribute("aria-disabled")==="true"){kt("error");return}const _=g.dataset.snd||(g.closest("[data-snd]")||{}).dataset?.snd;if(_!=="none"){if(_==="toggle"){kt("toggle",g.getAttribute("aria-checked")==="true");return}if(_==="back"){kt("back");return}if(_==="confirm"||g.classList.contains("btn-primary")){kt("confirm");return}if(g.classList.contains("nav-item")||g.classList.contains("tab")){kt("tab");return}kt("click")}},!1),i.addEventListener("pointerover",f=>{if(f.pointerType&&f.pointerType!=="mouse")return;const g=f.target.closest&&f.target.closest(Nh);if(!g||g===r){g||(r=null);return}r=g,!g.disabled&&g.getAttribute("aria-disabled")!=="true"&&kt("hover")}),i.addEventListener("focusin",f=>{f.target.matches&&f.target.matches(":focus-visible")&&kt("hover")});let a=0;i.addEventListener("input",f=>{if(f.target.type==="range"){const g=performance.now();g-a>70&&(a=g,kt("hover"))}});function o(f){const g=e(),_=Uh(g);if(!_.length)return;const m=document.activeElement&&g.contains(document.activeElement)?document.activeElement:null;if(!m){_[0].focus({preventScroll:!1});return}const p=m.getBoundingClientRect(),y=p.left+p.width/2,M=p.top+p.height/2;let v=null,E=1/0;for(const T of _){if(T===m)continue;const R=T.getBoundingClientRect(),C=R.left+R.width/2-y,b=R.top+R.height/2-M;let S,D;if(f==="right"?(S=C,D=Math.abs(b)):f==="left"?(S=-C,D=Math.abs(b)):f==="down"?(S=b,D=Math.abs(C)):(S=-b,D=Math.abs(C)),S<=1)continue;const F=S+D*2.2;F<E&&(E=F,v=T)}v&&(v.focus(),v.scrollIntoView({block:"nearest",inline:"nearest"}))}window.addEventListener("keydown",f=>{if(f.defaultPrevented||f.altKey||f.ctrlKey||f.metaKey)return;if(n()){(f.code==="Escape"||f.code==="KeyP")&&(f.preventDefault(),s());return}if(!e())return;const _=document.activeElement,m=_&&_.type==="range",p=_&&_.tagName==="INPUT"&&!["range","color","checkbox"].includes(_.type),y={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};if(y[f.key]){if(m&&(f.key==="ArrowLeft"||f.key==="ArrowRight")||p)return;f.preventDefault(),o(y[f.key])}else(f.key==="Escape"||f.key==="Backspace"&&!p)&&(f.preventDefault(),t())});const c={};let l=0;const h=230;function u(){l=requestAnimationFrame(u);const f=navigator.getGamepads?navigator.getGamepads():[],g=performance.now();for(const _ of f){if(!_)continue;const m=_.axes[0]||0,p=_.axes[1]||0,y={up:_.buttons[12]?.pressed||p<-.6,down:_.buttons[13]?.pressed||p>.6,left:_.buttons[14]?.pressed||m<-.6,right:_.buttons[15]?.pressed||m>.6,a:_.buttons[0]?.pressed,b:_.buttons[1]?.pressed,start:_.buttons[9]?.pressed};for(const M of Object.keys(y)){if(!y[M]){c[M]=0;continue}if(c[M]&&g-c[M]<h)continue;const v=!c[M];if(c[M]=g,n()){M==="start"&&v&&s();continue}if(M==="a"){if(v){const E=document.activeElement;E&&E.click&&E.click()}}else if(M==="b")v&&t();else if(M!=="start"&&e()){const T=document.activeElement;T&&T.type==="range"&&(M==="left"||M==="right")?(T.value=+T.value+(M==="right"?1:-1)*(T.step||.05)*2,T.dispatchEvent(new Event("input",{bubbles:!0}))):o(M)}}}}const d=()=>{l||(l=requestAnimationFrame(u))};return window.addEventListener("gamepadconnected",d),navigator.getGamepads&&Array.from(navigator.getGamepads()).some(Boolean)&&d(),{focusFirst(f){const g=Uh(f),_=f&&f.querySelector("[data-autofocus]");(_&&!_.disabled?_:g[0])?.focus({preventScroll:!0})}}}function Y1(i){const e=Ns("#boot");if(!e)return{setLoading(){},hide(){},el:null};const t=Ns("#boot-fill"),n=Ns("#boot-label"),s=Ns("#boot-start"),r=Ns(".boot-bar"),a=kc()?200:1700,o=performance.now();let c=0,l=!1,h=!1,u=!1;function d(){if(u)return;u=!0,e.classList.add("ready"),s.hidden=!1,r.setAttribute("aria-valuenow","100"),n.textContent="Ready";const g=async m=>{h||m.type==="keydown"&&(m.key==="Tab"||m.key==="Shift"||m.key==="Meta"||m.key==="Alt"||m.key==="Control")||(h=!0,window.removeEventListener("keydown",g,!0),e.removeEventListener("pointerdown",g,!0),e.classList.add("go"),s.blur(),await i())};window.addEventListener("keydown",g,!0),e.addEventListener("pointerdown",g,!0),window.addEventListener("gamepadconnected",()=>{});const _=()=>{if(h)return;const m=navigator.getGamepads?navigator.getGamepads():[];for(const p of m)if(p&&p.buttons.some(y=>y.pressed)){g({type:"pad"});return}requestAnimationFrame(_)};requestAnimationFrame(_),s.focus({preventScroll:!0})}function f(){if(c>=1&&l===!1){const g=Math.max(0,a-(performance.now()-o));l=!0,setTimeout(d,g)}}return{el:e,setLoading(g,_){c=Math.max(c,Math.min(1,g)),t.style.transform=`scaleX(${c})`,r.setAttribute("aria-valuenow",String(Math.round(c*100))),_&&!u&&(n.textContent=_),f()},hide(){e.classList.add("out"),setTimeout(()=>{e.hidden=!0},600)},show(){e.hidden=!1,e.classList.remove("out")}}}const zr=22,ao={green:["GREEN FLAG","f-green"],yellow:["CAUTION","f-yellow"],white:["WHITE FLAG · LAST LAP","f-white"],checker:["CHECKERED FLAG","f-check"]};function j1(i){const e=P("div",{class:"hud","aria-hidden":"false"}),t={},n=(L,I="")=>P("span",{class:L},I);t.posBadge=P("div",{class:"h-pos"},t.posN=n("h-pos-n","P1"),t.posOf=n("h-pos-of","/ 1")),t.tower=P("ol",{class:"h-tower"});const s=P("div",{class:"h-tl"},t.posBadge,t.tower),r=P("div",{class:"h-btns"},P("button",{type:"button",class:"rbtn","aria-label":"Pause",dataset:{snd:"none"},onClick:()=>i.pause()},en("pause")),P("button",{type:"button",class:"rbtn","aria-label":"Change camera",dataset:{snd:"none"},onClick:()=>i.cycleCamera()},en("camera"))),a=(L,I,k)=>P("div",{class:`h-t ${k||""}`},n("h-t-l",I),t[L]=n("h-t-v","--:--.---"));t.lap=n("h-lap-v","LAP 1/3");const o=P("div",{class:"h-tr"},t.lap,a("cur","CURRENT","cur"),a("last","LAST"),a("best","BEST","best"));o.append(r),t.flag=P("div",{class:"h-flag",hidden:!0}),t.msg=P("div",{class:"h-msg",hidden:!0});const c=P("div",{class:"h-tc"},t.flag,t.msg);t.leds=Array.from({length:zr},(L,I)=>P("i",{class:`led ${I<12?"g":I<18?"y":"r"}`})),t.speed=n("h-spd","0"),t.unit=n("h-unit","MPH"),t.gear=n("h-gear","N"),t.rpm=n("h-rpm","0 RPM");const l=P("div",{class:"h-dash"},P("div",{class:"leds"},t.leds),P("div",{class:"h-dash-r"},P("div",{class:"h-gearbox"},n("h-gl","GEAR"),t.gear),P("div",{class:"h-spdbox"},t.speed,t.unit),P("div",{class:"h-rpmbox"},t.rpm)));t.thr=P("i",{class:"ped-f"}),t.brk=P("i",{class:"ped-f"});const h=P("div",{class:"h-ped"},P("div",{class:"ped thr"},t.thr,n("ped-l","T")),P("div",{class:"ped brk"},t.brk,n("ped-l","B")));t.gapA=n("gap-v","--"),t.gapB=n("gap-v","--"),t.draft=P("div",{class:"h-draft"},"DRAFTING");const u=P("div",{class:"h-gaps"},P("div",{class:"gap ahead"},n("gap-l","AHEAD"),t.gapA),P("div",{class:"gap behind"},n("gap-l","BEHIND"),t.gapB),t.draft);t.map=P("canvas",{class:"h-map",width:180,height:180,"aria-label":"Track map"}),t.dmg={};const d="http://www.w3.org/2000/svg",f=(L,I)=>{const k=document.createElementNS(d,L);for(const H of Object.keys(I))k.setAttribute(H,I[H]);return k},g=P("div",{class:"h-dmg","aria-label":"Car damage"},(()=>{const L=f("svg",{viewBox:"0 0 44 84"});L.append(f("path",{class:"dm-body",d:"M12 4h20a7 7 0 0 1 7 7v62a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7z"})),L.append(f("rect",{class:"dm-cab",x:13,y:28,width:18,height:26,rx:4}));const I=(k,H,q,V,te)=>{const ae=f("rect",{class:"dm ok",x:H,y:q,width:V,height:te,rx:3});t.dmg[k]=ae,L.append(ae)};return I("front",11,8,22,13),I("rear",11,63,22,13),I("left",7,24,6,36),I("right",31,24,6,36),L})()),_=P("div",{class:"h-bl"},t.map,g);e.append(s,c,o,_,l,h,u,P("div",{class:"h-rotate"},"Turn your phone sideways to race"));const m={},p=(L,I,k)=>{m[L]!==k&&(m[L]=k,I.textContent=k)};let y=-1,M=null,v=null,E=null,T="",R="",C="",b=0;const S=t.map.getContext("2d");function D(L){let I=1e9,k=-1e9,H=1e9,q=-1e9;for(const[J,ne]of L)I=Math.min(I,J),k=Math.max(k,J),H=Math.min(H,ne),q=Math.max(q,ne);const V=t.map.width,te=16,ae=Math.min((V-te*2)/(k-I||1),(V-te*2)/(q-H||1)),_e=(V-(k-I)*ae)/2-I*ae,De=(V-(q-H)*ae)/2-H*ae;E={s:ae,ox:_e,oy:De},v=document.createElement("canvas"),v.width=v.height=V;const Ne=v.getContext("2d");Ne.lineJoin="round",Ne.lineCap="round",Ne.beginPath(),L.forEach(([J,ne],ce)=>ce?Ne.lineTo(J*ae+_e,ne*ae+De):Ne.moveTo(J*ae+_e,ne*ae+De)),Ne.closePath(),Ne.strokeStyle="rgba(0,0,0,.55)",Ne.lineWidth=11,Ne.stroke(),Ne.strokeStyle="#8b939d",Ne.lineWidth=6,Ne.stroke();const[st,Je]=L[0];Ne.fillStyle="#f4f6f8",Ne.fillRect(st*ae+_e-5,Je*ae+De-1.5,10,3)}function F(L){if(!L)return;const I=i.game.settings.units==="kph";p("spd",t.speed,String(Math.round(I?L.speedKph:L.speedMph))),p("unit",t.unit,I?"KM/H":"MPH"),p("gear",t.gear,L.gear===0?"N":L.gear<0?"R":String(L.gear)),p("rpm",t.rpm,`${Math.round(L.rpm/10)*10} RPM`);const k=Math.round(Math.max(0,Math.min(1,L.rpm/(L.rpmMax||9e3)))*zr);if(k!==y){for(let V=0;V<zr;V++)t.leds[V].classList.toggle("on",V<k);y=k,e.classList.toggle("redline",k>=zr-1)}if(t.thr.style.transform=`scaleY(${L.throttle||0})`,t.brk.style.transform=`scaleY(${L.brake||0})`,p("posn",t.posN,`P${L.pos}`),p("posof",t.posOf,`/ ${L.field}`),p("lap",t.lap,L.mode==="hotlap"?`LAP ${L.lap}`:`LAP ${Math.min(L.lap,L.laps)}/${L.laps}`),p("cur",t.cur,Di(L.curLap)),p("last",t.last,Di(L.lastLap)),p("best",t.best,Di(L.bestLap)),e.classList.toggle("hot",L.mode==="hotlap"),p("gapa",t.gapA,L.gapAhead==null||L.pos===1||L.mode==="hotlap"?"--":Dh(-Math.abs(L.gapAhead))),p("gapb",t.gapB,L.gapBehind==null||L.mode==="hotlap"||L.field>1&&L.pos>=L.field?"--":Dh(Math.abs(L.gapBehind))),m.dr!==!!L.drafting&&(m.dr=!!L.drafting,t.draft.classList.toggle("on",!!L.drafting)),L.damage)for(const V of["front","rear","left","right"]){const te=Math.round((L.damage[V]||0)*10);m["d"+V]!==te&&(m["d"+V]=te,t.dmg[V].setAttribute("class",`dm ${te>=7?"bad":te>=3?"mid":"ok"}`))}const H=L.flag||"";H!==R&&(R=H,H&&ao[H]?(t.flag.hidden=!1,t.flag.className=`h-flag ${ao[H][1]}`,t.flag.textContent=ao[H][0]):t.flag.hidden=!0);const q=L.message||"";if(q!==C&&(C=q,q?(t.msg.hidden=!1,t.msg.textContent=q,t.msg.classList.remove("pop"),t.msg.offsetWidth,t.msg.classList.add("pop"),clearTimeout(b),b=setTimeout(()=>{t.msg.hidden=!0},3200)):t.msg.hidden=!0),L.standings){const V=L.standings.map(te=>te.pos+te.name+(te.gap||"")).join("|");V!==T&&(T=V,t.tower.replaceChildren(...L.standings.slice(0,7).map(te=>P("li",{class:`tw${te.me?" me":""}`},P("span",{class:"tw-p"},String(te.pos)),P("i",{class:"tw-c",style:{background:te.color||"#888"}}),P("span",{class:"tw-n"},te.name),P("span",{class:"tw-g"},te.gap||"")))))}if(L.minimap&&L.minimap.pts&&L.minimap.pts.length>2){L.minimap.pts!==M&&(M=L.minimap.pts,D(M)),S.clearRect(0,0,t.map.width,t.map.height),S.drawImage(v,0,0);for(const V of L.minimap.cars||[])S.beginPath(),S.arc(V.x*E.s+E.ox,V.z*E.s+E.oy,V.me?6.5:4,0,6.2832),S.fillStyle=V.me?"#3dba55":"#e8eaed",S.fill(),V.me&&(S.lineWidth=2,S.strokeStyle="#fff",S.stroke())}}return{el:e,update:F,ref:t}}function $1(i){const e=P("div",{class:"touch",hidden:!0}),t={steer:0,throttle:0,brake:0};let n=!1,s=!1;const r=()=>{const g=i.game.input;g&&g.setTouch&&g.setTouch({steer:t.steer?-t.steer:0,throttle:t.throttle,brake:t.brake})},a=P("i",{class:"st-knob"}),o=P("div",{class:"st-strip",role:"slider","aria-label":"Steering","aria-valuemin":-1,"aria-valuemax":1,"aria-valuenow":0},P("span",{class:"st-l"},"‹"),a,P("span",{class:"st-r"},"›"));let c=null;const l=g=>{const _=o.getBoundingClientRect(),m=Math.max(-1,Math.min(1,((g.clientX-_.left)/_.width-.5)*2*1.08));t.steer=Math.abs(m)<.04?0:m,a.style.transform=`translateX(${t.steer*(_.width/2-34)}px)`,r()};o.addEventListener("pointerdown",g=>{g.preventDefault(),c=g.pointerId;try{o.setPointerCapture(c)}catch{}o.classList.add("down"),l(g)}),o.addEventListener("pointermove",g=>{g.pointerId===c&&l(g)});const h=g=>{g.pointerId===c&&(c=null,t.steer=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h);const u=(g,_,m)=>{const p=P("div",{class:`pd ${g}`,role:"button","aria-label":_,tabindex:-1},P("span",null,_));let y=null;p.addEventListener("pointerdown",v=>{v.preventDefault(),y=v.pointerId;try{p.setPointerCapture(y)}catch{}p.classList.add("down"),t[m]=1,r(),navigator.vibrate&&navigator.vibrate(6)});const M=v=>{v.pointerId===y&&(y=null,p.classList.remove("down"),t[m]=0,r())};return p.addEventListener("pointerup",M),p.addEventListener("pointercancel",M),p};e.append(P("div",{class:"tc-l"},o),P("div",{class:"tc-r"},u("brake","BRAKE","brake"),u("gas","GAS","throttle"))),e.addEventListener("contextmenu",g=>g.preventDefault()),window.addEventListener("pointerdown",g=>{g.pointerType==="touch"&&!s&&(s=!0,f.refresh())},!0);const d=()=>{const g=i.game.settings.touch;return g===!0?!0:g===!1?!1:s||matchMedia("(pointer: coarse)").matches},f={el:e,refresh(){const g=d();n=g&&e.dataset.active==="1",e.hidden=!n,document.documentElement.classList.toggle("touch-on",g);const _=i.game.input;_&&(_.touchActive=g),n||(t.steer=t.throttle=t.brake=0,a.style.transform="translateX(0)",o.classList.remove("down"),r())},tick(){n&&(t.steer||t.throttle||t.brake)&&r()},setActive(g){e.dataset.active=g?"1":"0",f.refresh()},wanted:d};return f}function Tt(i,{kind:e="ghost",onClick:t,disabled:n=!1,title:s,icon:r,snd:a,cls:o="",type:c="button",aria:l}={}){const h=P("button",{class:`btn btn-${e} ${o}`.trim(),type:c,title:n?s||"Not available yet":s,"aria-disabled":n?"true":null,dataset:a?{snd:a}:null,...l||{}},r?en(r):null,P("span",{class:"btn-label"},i));return n?h.disabled=!0:t&&h.addEventListener("click",t),h}function fn(i,e,t,{label:n,cls:s=""}={}){const r=P("div",{class:`seg ${s}`.trim(),role:"radiogroup","aria-label":n||null}),a=o=>{r.replaceChildren(...i.map(c=>{const l=c.value===o;return P("button",{type:"button",class:`seg-opt${l?" on":""}${c.locked?" locked":""}`,role:"radio","aria-checked":l?"true":"false",dataset:{value:String(c.value)},title:c.locked?c.cost?`Unlock for ${c.cost} credits`:"Locked":null,onClick:()=>{if(c.locked){t(c.value,c);return}a(c.value),t(c.value,c)}},c.locked?en("lock","ico ico-s"):null,P("span",{class:"seg-l"},c.label),c.sub?P("span",{class:"seg-s"},c.sub):c.locked&&c.cost?P("span",{class:"seg-s"},String(c.cost)):null,c.default?P("span",{class:"seg-d"},"DEFAULT"):null)}))};return a(e),r.set=a,r}function Vr(i,e,t,{label:n,allowCustom:s=!0}={}){const r=P("div",{class:"swatches",role:"radiogroup","aria-label":n||null}),a=o=>{if(r.replaceChildren(...i.map(c=>P("button",{type:"button",class:`sw${c.toLowerCase()===String(o).toLowerCase()?" on":""}`,style:{"--c":c},title:c,role:"radio","aria-checked":c.toLowerCase()===String(o).toLowerCase()?"true":"false","aria-label":`Colour ${c}`,onClick:()=>{a(c),t(c)}}))),s){const c=P("input",{type:"color",class:"sw-custom",value:/^#[0-9a-f]{6}$/i.test(o)?o:"#808080","aria-label":"Custom colour",title:"Custom colour"});c.addEventListener("input",()=>t(c.value)),c.addEventListener("change",()=>a(c.value)),r.append(P("label",{class:"sw sw-plus",title:"Custom colour"},c,P("span",null,"+")))}};return a(e),r.set=a,r}function Z1(i,e,{min:t=0,max:n=1,step:s=.01,label:r,fmt:a=o=>Math.round(o*100)+"%"}={}){const o=P("output",{class:"sl-out"},a(i)),c=P("input",{type:"range",min:t,max:n,step:s,value:i,class:"sl","aria-label":r||"Value"}),l=()=>c.style.setProperty("--p",(c.value-t)/(n-t)*100+"%");return c.addEventListener("input",()=>{l(),o.textContent=a(+c.value),e(+c.value)}),l(),P("div",{class:"slider"},c,o)}function J1(i,e,{label:t}={}){const n=P("button",{type:"button",class:`tg${i?" on":""}`,role:"switch","aria-checked":i?"true":"false","aria-label":t||"Toggle",dataset:{snd:"toggle"}},P("i"));return n.addEventListener("click",()=>{const s=n.getAttribute("aria-checked")!=="true";n.setAttribute("aria-checked",String(s)),n.classList.toggle("on",s),e(s)}),n}function Qt(i,e,t){return P("div",{class:"orow"},P("div",{class:"orow-t"},P("div",{class:"orow-n"},i),e?P("div",{class:"orow-s"},e):null),P("div",{class:"orow-c"},t))}function jn(i,e=""){return P("span",{class:`chip ${e}`.trim()},i)}function ev(i,e,t){return P("div",{class:"stat"},P("div",{class:"stat-v"},e),P("div",{class:"stat-l"},i),null)}function Xu(i,e=""){return P("div",{class:`pbar ${e}`.trim()},P("i",{style:{width:B1(i,0,1)*100+"%"}}))}function Us({title:i,text:e,ic:t,kind:n="",onClick:s,disabled:r=!1,hint:a,badge:o,big:c}){const l=P("button",{type:"button",class:`tile ${n}${c?" tile-big":""}`,disabled:r,title:r?a:null,"aria-disabled":r?"true":null,dataset:n.includes("primary")?{snd:"confirm"}:null,onClick:s},P("span",{class:"tile-ic"},en(t)),P("span",{class:"tile-b"},P("span",{class:"tile-t"},i),P("span",{class:"tile-x"},e)),o?jn(o,r?"":"gold"):null,r?null:P("span",{class:"tile-go"},en("chevron")));return r&&l.setAttribute("disabled",""),l}function tv(i){const e=i.game.career,t=e.state,n=e.nextRace(),s=t.races.length===0,r=e.offers().length,a=t.races[t.races.length-1];return P("div",{class:"page page-home"},P("header",{class:"hero"},P("h1",{class:"big"},s?"Build your car.":"Back on track.",P("br"),P("span",null,s?"Earn your sponsors.":`${n.series.name}, race ${Math.min(n.index+1,n.of)} of ${n.of}`)),P("p",{class:"lead"},s?"You start with a blank car and a small local race. Finish well and sponsors will put their names on your hood.":`Last result: P${a.pos} of ${a.field}. ${r?`${r} sponsor ${r===1?"offer is":"offers are"} waiting in the Garage.`:"Keep your finishes consistent to bring in bigger sponsors."}`)),P("div",{class:"stats"},[["Reputation",zt(t.rep)],["Credits",zt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Di(t.bestLap):"—"]].map(([c,l])=>P("div",{class:"stat"},P("div",{class:"stat-v"},l),P("div",{class:"stat-l"},c)))),P("div",{class:"tiles"},Us({big:!0,kind:"primary",title:s?"Start career":"Continue career",text:`${n.series.name} · ${n.laps} laps · ${n.field} cars`,ic:"trophy",onClick:()=>i.go("raceSetup",{mode:"career"})}),Us({title:"Quick race",text:"Pick the laps, rivals and weather",ic:"flag",onClick:()=>i.go("raceSetup",{mode:"quick"})}),Us({title:"Hot lap",text:"Alone on track. Chase your best lap",ic:"stopwatch",onClick:()=>i.go("raceSetup",{mode:"hotlap"})}),Us({title:"Garage",text:"Colours, number and sponsors",ic:"car",badge:r?`${r} ${r===1?"offer":"offers"}`:null,onClick:()=>i.go("garage")}),Us({title:"Online",text:"Race other drivers",ic:"globe",disabled:!0,hint:"Online racing is planned for a later update",badge:"Coming soon"})))}const Fc={1:"Local",2:"Regional",3:"National",4:"Title"},Js=(i,e=120,t="sp-logo")=>{const n=xs(i);return P("img",{class:t,src:Iu(i,e*2,Math.round(e*.4)*2),alt:n?n.name:i,width:e,height:Math.round(e*.4),draggable:"false"})};function kh(i){const e=i.game.career.nextTierGoal();if(!e)return P("div",{class:"note"},en("star"),P("span",null,"Every sponsor tier is unlocked. Keep winning to keep the contracts paying."));const t=Math.round(e.avgNow*100),n=Math.round(e.avgNeeded*100),s=[];return e.racesNeeded>0&&s.push(`Finish ${e.racesNeeded} more ${e.racesNeeded===1?"race":"races"}`),s.push(`A finish score of ${n}% or better, averaged over your last 3 races (you are at ${t}%)`),e.seriesNeeded&&s.push(`Reach the ${e.seriesNeeded} series`),P("div",{class:"goal"},P("div",{class:"goal-h"},jn(`${Fc[e.tier]} sponsors`,"gold"),P("span",null,"Next tier needs")),P("ul",{class:"goal-l"},s.map(r=>P("li",null,r))),Xu(Math.min(1,e.avgNow/e.avgNeeded),"gold"),P("div",{class:"goal-n"},"Finish score is 100% for a win and 0% for last place."))}function qu(i,e){const t=i.game.career,n=t.offers(),s=P("section",{class:"card"},P("h3",{class:"card-t"},"Sponsor offers"));return n.length?(s.append(P("div",{class:"offers"},n.map(r=>P("div",{class:"offer"},Js(r.id,132),P("div",{class:"offer-t"},P("div",{class:"offer-n"},r.name),P("div",{class:"offer-s"},`${Fc[r.tier]} sponsor · pays about ${zt(r.payout)} credits a race`),P("div",{class:"offer-f"},"Best on: "+r.slots.map(a=>Yr[a]).join(", "))),P("div",{class:"offer-b"},Tt("Accept",{kind:"primary",icon:"handshake",onClick:()=>{t.acceptSponsor(r.id)&&(i.ui.toast(`${r.name} signed. Put them on your car in the Garage.`,"good"),e())}}),Tt("Decline",{kind:"ghost",snd:"back",onClick:()=>{t.declineSponsor(r.id),e()}})))))),s.append(kh(i))):s.append(P("p",{class:"muted"},t.state.owned.length?"No new offers right now.":"No offers yet. Finish a few races in the top half of the field and sponsors will call."),kh(i)),s}function nv(i){const e=i.game.career,t=e.state.owned.map(xs).filter(Boolean),n=new Set(Object.values(e.state.livery.slots).filter(Boolean));return P("section",{class:"card"},P("h3",{class:"card-t"},"Sponsor contracts"),t.length?P("div",{class:"contracts"},t.map(s=>P("div",{class:"contract"},Js(s.id,96),P("div",{class:"contract-t"},P("div",{class:"offer-n"},s.name),P("div",{class:"offer-s"},`${Fc[s.tier]} · ~${zt(s.payout)} credits a race`)),n.has(s.id)?jn("On your car","good"):jn("Not on car","warn")))):P("p",{class:"muted"},"No contracts yet."))}function iv(i){const e=i.game.career,t=e.state,n=P("div",{class:"page page-career"}),s=()=>{n.replaceChildren(P("header",{class:"page-h"},P("h1",{class:"big"},"Career"),P("p",{class:"lead"},"Climb the series. Consistent finishes bring sponsors, and sponsors pay for every race.")),P("div",{class:"stats"},[["Reputation",zt(t.rep)],["Credits",zt(t.credits)],["Races",String(t.races.length)],["Best lap",t.bestLap?Di(t.bestLap):"—"]].map(([r,a])=>ev(r,a))),P("section",{class:"card"},P("h3",{class:"card-t"},"Series"),P("div",{class:"series"},bn.map((r,a)=>{const o=t.rep<r.unlockRep,c=a===t.seriesIndex,l=c?t.seasonRace:0;return P("div",{class:`ser${c?" cur":""}${o?" locked":""}`},P("div",{class:"ser-h"},P("div",{class:"ser-n"},r.name),o?jn(`Needs ${zt(r.unlockRep)} rep`,""):c?jn("Current","good"):null),P("div",{class:"ser-m"},`${r.races} races · ${r.laps} laps · ${r.field} cars · ${r.ai[0].toUpperCase()+r.ai.slice(1)} rivals`),c?P("div",{class:"ser-p"},Xu(l/r.races),P("span",null,`${Math.min(l,r.races)} of ${r.races} done`)):null,o?P("div",{class:"ser-l"},en("lock"),P("span",null,`${zt(r.unlockRep-t.rep)} more reputation to unlock`)):c?Tt("Race next event",{kind:"primary",icon:"play",onClick:()=>i.go("raceSetup",{mode:"career"})}):Tt("Switch to this series",{onClick:()=>{e.selectSeries(a)&&(i.ui.toast(`Switched to ${r.name}`,"info"),s())}}))}))),P("div",{class:"cols"},P("div",null,qu(i,s),nv(i)),P("section",{class:"card"},P("h3",{class:"card-t"},"Recent results"),t.races.length?P("table",{class:"tbl"},P("thead",null,P("tr",null,["Series","Finish","Field"].map(r=>P("th",null,r)))),P("tbody",null,t.races.slice(-10).reverse().map(r=>{const a=bn.find(o=>o.id===r.series);return P("tr",null,P("td",null,a?a.name:r.series),P("td",{class:r.pos<=3?"good":""},Wu(r.pos)),P("td",null,`${r.field} cars`))}))):P("p",{class:"muted"},"No races yet. Your first result will appear here."))))};return s(),n}function sa(i,{title:e,body:t,confirmLabel:n="OK",cancelLabel:s="Cancel",danger:r=!1,disabled:a=!1,onConfirm:o}){const c=()=>{l.remove(),i.ui._modals=i.ui._modals.filter(h=>h!==l),i.ui.focusScope()},l=P("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":e},P("div",{class:"modal-card"},P("h3",{class:"modal-t"},e),P("p",{class:"modal-b"},t),P("div",{class:"modal-a"},Tt(s,{kind:"ghost",snd:"back",onClick:c}),Tt(n,{kind:r?"danger":"primary",disabled:a,title:a?"You do not have enough credits yet":null,onClick:()=>{c(),o&&o()}}))));return l.dataset.close="1",l.close=c,l.addEventListener("pointerdown",h=>{h.target===l&&c()}),i.ui.overlayEl.append(l),i.ui._modals.push(l),i.ui.focusScope(l),l}const Fh=["#d9dde2","#f4f6f8","#1d1f24","#c8102e","#e8590c","#f2b134","#3dba55","#0d8a6a","#1f6fe0","#2a3f8f","#7a3fc4","#e83e8c"],sv=["#1d1f24","#f4f6f8","#c0c6cc","#f2b134","#c8102e","#3dba55","#1f6fe0"],rv=[["none","Plain"],["stripe","Stripe"],["split","Split"],["chevron","Chevron"],["fade","Fade"]],av=[["gloss","Gloss"],["matte","Matte"],["metallic","Metallic"]],ov=[["block","Block"],["italic","Italic"],["outline","Outline"]];function cv(i){const e=i.game,t=e.career;let n=i.params?.tab||"paint";const s=p=>e.garage.setLivery(p),r=P("div",{class:"page page-garage"}),a=P("div",{class:"garage-stage","aria-label":"Drag to rotate the car. Scroll or pinch to zoom.",role:"img"},P("div",{class:"stage-hint"},en("car"),P("span",null,"Drag to rotate. Scroll or pinch to zoom."))),o=new Map;let c=0;a.addEventListener("pointerdown",p=>{try{a.setPointerCapture(p.pointerId)}catch{}if(o.set(p.pointerId,[p.clientX,p.clientY]),o.size===2){const[y,M]=[...o.values()];c=Math.hypot(y[0]-M[0],y[1]-M[1])}}),a.addEventListener("pointermove",p=>{const y=o.get(p.pointerId);if(y){if(o.size===2){o.set(p.pointerId,[p.clientX,p.clientY]);const[M,v]=[...o.values()],E=Math.hypot(M[0]-v[0],M[1]-v[1]);e.garage.zoom((c-E)*.01),c=E;return}e.garage.orbit(p.clientX-y[0],p.clientY-y[1]),o.set(p.pointerId,[p.clientX,p.clientY])}});const l=p=>{o.delete(p.pointerId),c=0};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("wheel",p=>{p.preventDefault(),e.garage.zoom(Math.sign(p.deltaY)*.6)},{passive:!1});const h=P("aside",{class:"garage-panel"}),u=(p,y,M,v)=>{const E=Gs[p][y],T=t.state.credits;sa(i,{title:`Unlock ${M}?`,body:`${M} costs ${zt(E)} credits. You have ${zt(T)}.`,confirmLabel:T>=E?`Unlock for ${zt(E)}`:"Not enough credits",disabled:T<E,onConfirm:()=>{t.buy(p,y)&&(i.ui.toast(`${M} unlocked`,"good"),v(),m())}})},d=(p,y,M,v)=>fn(y.map(([E,T])=>{const R=t.canUse(p,E);return{value:E,label:T,locked:!R,cost:Gs[p][E]}}),M,(E,T)=>{T.locked?u(p,E,y.find(R=>R[0]===E)[1],()=>v(E)):v(E)},{label:p}),f=[["paint","Paint"],["number","Number"],["sponsors","Sponsors"]],g=(p,...y)=>P("div",{class:"g-sec"},P("div",{class:"g-t"},p),...y);function _(){const p=t.state.livery;if(n==="paint")return[g("Body colour",Vr(Fh,p.paint,v=>s({paint:v}),{label:"Body colour"})),g("Accent",Vr(Fh,p.accent,v=>s({accent:v}),{label:"Accent colour"})),g("Trim and wheels",Vr(sv,p.trim,v=>s({trim:v}),{label:"Trim colour"})),g("Pattern",d("pattern",rv,p.pattern,v=>s({pattern:v}))),g("Finish",d("finish",av,p.finish,v=>s({finish:v})))];if(n==="number"){const v=P("input",{class:"num-in",type:"text",inputmode:"numeric",maxlength:3,value:p.number,"aria-label":"Car number",pattern:"[0-9]*"});return v.addEventListener("input",()=>{v.value=v.value.replace(/\D/g,"").slice(0,3),v.value&&s({number:v.value})}),v.addEventListener("blur",()=>{v.value||(v.value=p.number)}),[g("Car number",P("div",{class:"num-wrap"},v,P("span",{class:"muted"},"Up to three digits")),P("div",{class:"quick-nums"},["7","18","24","42","88","99"].map(E=>P("button",{type:"button",class:"qn",onClick:()=>{v.value=E,s({number:E})}},E)))),g("Style",fn(ov.map(([E,T])=>({value:E,label:T})),p.numberStyle,E=>s({numberStyle:E}),{label:"Number style"})),g("Number colour",Vr(["#1d1f24","#f4f6f8","#f2b134","#c8102e","#1f6fe0","#3dba55"],p.numberColor,E=>s({numberColor:E}),{label:"Number colour"}))]}const y=t.state.owned.map(xs).filter(Boolean),M=[];return y.length?M.push(...tc.map(v=>{const E=p.slots[v];return P("div",{class:"slot"},P("div",{class:"slot-h"},P("div",{class:"slot-n"},Yr[v]),E?Js(E,84,"sp-logo sm"):P("span",{class:"muted"},"Empty")),P("div",{class:"slot-o"},y.map(T=>P("button",{type:"button",class:`slot-pick${E===T.id?" on":""}`,title:`${T.name}${T.slots.includes(v)?" (pays full rate here)":" (pays 60% here)"}`,"aria-pressed":E===T.id?"true":"false","aria-label":`${T.name} on ${Yr[v]}`,onClick:()=>{s({slots:{[v]:T.id}}),m()}},Js(T.id,64,"sp-logo xs"))),E?P("button",{type:"button",class:"slot-clear","aria-label":`Clear ${Yr[v]}`,dataset:{snd:"back"},onClick:()=>{s({slots:{[v]:null}}),m()}},"Clear"):null))})):M.push(P("p",{class:"muted pad"},"You do not have any sponsors yet. Race well and offers will show up below.")),M.push(qu(i,m)),M}function m(){const p=h.querySelector(".g-body")?.scrollTop||0;h.replaceChildren(P("div",{class:"g-head"},P("h1",{class:"big sm"},"Garage"),P("div",{class:"g-credits",title:"Credits"},en("coin"),P("b",null,zt(t.state.credits)))),P("div",{class:"tabs",role:"tablist"},f.map(([y,M])=>P("button",{type:"button",class:`tab-b${n===y?" on":""}`,role:"tab","aria-selected":n===y?"true":"false",onClick:()=>{n=y,m()}},M,y==="sponsors"&&t.offers().length?P("i",{class:"dot","aria-label":"New offers"}):null))),P("div",{class:"g-body",role:"tabpanel"},_()),P("div",{class:"g-foot"},Tt("Done",{kind:"primary",icon:"check",onClick:()=>i.go("menu")}))),h.querySelector(".g-body").scrollTop=p}return m(),r.append(a,h),r}const Hr={laps:3,field:12,ai:"pro",weather:"clear",time:"day",ghost:!0},ks=(i,e)=>i.map(([t,n,s])=>({value:t,label:n,sub:s,default:t===e}));function lv(i){const e=i.params?.mode||"quick",n=i.game.career.nextRace(),s=e==="career"?{laps:n.laps,field:n.field,ai:n.ai,series:n.series.id,weather:Hr.weather,time:Hr.time}:{...Hr},r=e==="career"?n.series.name:e==="hotlap"?"Hot lap":"Quick race",a=e==="career"?`Race ${Math.min(n.index+1,n.of)} of ${n.of}. The series sets laps, rivals and field size. Your result counts for reputation and sponsors.`:e==="hotlap"?"Just you and the clock. No traffic, no damage penalties, and your best lap is saved.":"A one-off race. Results here do not affect your career.",o=P("div",{class:"page page-setup"},P("header",{class:"page-h"},P("h1",{class:"big"},r),P("p",{class:"lead"},a))),c=P("section",{class:"card opts"});o.append(c);const l=(h,u)=>{s[h]=u,(e!=="career"||h==="weather"||h==="time")&&(Hr[h]=u)};return e==="career"?c.append(Qt("Race","Set by the series",P("div",{class:"fixed"},jn(`${s.laps} laps`),jn(`${s.field} cars`),jn(`${s.ai[0].toUpperCase()+s.ai.slice(1)} rivals`)))):(e==="quick"&&c.append(Qt("Laps","Fewer laps for a quick go",fn(ks([[3,"3"],[5,"5"],[10,"10"],[20,"20"]],3),s.laps,h=>l("laps",h),{label:"Laps"})),Qt("AI level","Legend is the toughest",fn(ks([["rookie","Rookie"],["pro","Pro"],["veteran","Veteran"],["legend","Legend"]],"pro"),s.ai,h=>l("ai",h),{label:"AI level"})),Qt("Cars in the race","Including you",fn(ks([[4,"4"],[8,"8"],[12,"12"],[16,"16"],[24,"24"],[32,"32"]],12),s.field,h=>l("field",h),{label:"Cars"}))),e==="hotlap"&&c.append(Qt("Ghost car","Race against your best lap",J1(s.ghost,h=>l("ghost",h),{label:"Ghost car"})))),c.append(Qt("Weather","Rain means less grip",fn(ks([["clear","Clear"],["overcast","Overcast"],["rain","Rain"]],"clear"),s.weather,h=>l("weather",h),{label:"Weather"})),Qt("Time of day",null,fn(ks([["day","Day"],["sunset","Sunset"],["night","Night"]],"day"),s.time,h=>l("time",h),{label:"Time of day"}))),o.append(P("div",{class:"actions"},Tt(e==="hotlap"?"Start hot lap":"Start race",{kind:"primary",icon:"play",onClick:()=>i.launch(e==="hotlap"?"hotlap":"race",e==="hotlap"?{ghost:s.ghost,weather:s.weather,time:s.time}:{laps:s.laps,field:s.field,ai:s.ai,series:e==="career"?s.series:void 0,weather:s.weather,time:s.time})}),Tt("Back",{kind:"ghost",snd:"back",icon:"back",onClick:()=>i.go("menu")}))),o}function Qu(i){const e=i.game,t=e.settings;t.volumes=Object.assign({master:.8,music:.6,sfx:.8,engine:.9,ambient:.7},t.volumes||{});const n=()=>{e.saveSettings()},s=P("div",{class:"page page-settings"},P("header",{class:"page-h"},P("h1",{class:"big"},"Settings"),P("p",{class:"lead"},"Changes save automatically. Graphics changes apply from the next race."))),r=a=>a.map(([o,c,l])=>({value:o,label:c,sub:l}));return s.append(P("section",{class:"card opts"},P("h3",{class:"card-t"},"Display and driving"),Qt("Graphics quality","Low suits older phones. Ultra needs a recent GPU.",fn(r([["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]]),t.quality,a=>{t.quality=a,n()},{label:"Graphics quality"})),Qt("Speed units",null,fn(r([["mph","mph"],["kph","km/h"]]),t.units,a=>{t.units=a,n()},{label:"Units"})),Qt("Default camera","You can change it in a race with the camera button.",fn(r([[0,"Cockpit"],[1,"Chase"],[2,"Broadcast"]]),t.camera,a=>{t.camera=a,n()},{label:"Camera"})),Qt("Driving assists","More help keeps the car steadier.",fn(r([[0,"Off"],[1,"Medium"],[2,"Full"]]),t.assists,a=>{t.assists=a,n()},{label:"Assists"})),Qt("Touch controls","Auto shows them on touch screens only.",fn(r([["auto","Auto"],[!0,"On"],[!1,"Off"]]),t.touch,a=>{t.touch=a,n(),i.ui.touch&&i.ui.touch.refresh()},{label:"Touch controls"})),document.fullscreenEnabled?Qt("Full screen",null,Tt("Toggle full screen",{icon:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>i.ui.toast("Full screen was blocked by the browser","warn"))}})):null),P("section",{class:"card opts"},P("h3",{class:"card-t"},"Sound"),[["master","Master"],["music","Music"],["sfx","Menu and effects"],["engine","Engines"],["ambient","Crowd and track"]].map(([a,o])=>Qt(o,null,Z1(t.volumes[a],c=>{t.volumes[a]=c,G1({...t.volumes}),n()},{label:o})))),P("section",{class:"card opts"},P("h3",{class:"card-t"},"Progress"),Qt("Reset career","Deletes your results, sponsors, credits and car design on this device.",Tt("Reset career",{kind:"danger",onClick:()=>sa(i,{title:"Reset your career?",body:"This deletes your results, sponsors, credits and car design on this device. It cannot be undone.",confirmLabel:"Reset everything",danger:!0,onConfirm:()=>{e.career.reset(),e.garage.setLivery(JSON.parse(JSON.stringify(na))),i.ui.toast("Career reset","info"),i.go("menu")}})})))),i.params?.overlay&&s.append(P("div",{class:"actions"},Tt("Back",{kind:"primary",snd:"back",icon:"back",onClick:()=>i.back()}))),s}function hv(i){const e=i.params||{},t=e.career||null,n=e.mode==="hotlap",s=P("div",{class:"results"}),r=n?P("div",{class:"res-top"},P("div",{class:"res-pos"},P("span",{class:"res-k"},"Best lap"),P("b",null,Di(e.bestLap))),P("div",{class:"res-sub"},e.newBest?"New personal best":"Hot lap finished")):P("div",{class:"res-top"},P("div",{class:"res-pos"},P("span",{class:"res-k"},e.pos===1?"Winner":"Finished"),P("b",null,Wu(e.pos||0)),P("span",{class:"res-of"},`of ${e.field||"?"}`)),P("div",{class:"res-sub"},`${e.laps||"?"} laps · best lap ${Di(e.bestLap)}`)),a=P("div",{class:"card res-card"},r);e.standings&&e.standings.length&&a.append(P("table",{class:"tbl tight"},P("tbody",null,e.standings.slice(0,8).map(c=>P("tr",{class:c.me?"me":""},P("td",null,String(c.pos)),P("td",null,c.name),P("td",{class:"r"},c.gap||"")))))),t&&(a.append(P("div",{class:"earn"},P("div",{class:"earn-r"},P("span",null,"Reputation"),P("b",{class:"good"},`+${zt(t.repGain)}`)),P("div",{class:"earn-r"},P("span",null,"Prize money"),P("b",null,`+${zt(t.prize)}`)),(t.paid||[]).map(c=>P("div",{class:"earn-r"},P("span",{class:"earn-sp"},Js(c.id,56,"sp-logo xs"),c.name),P("b",null,`+${zt(c.amount)}`))),P("div",{class:"earn-r tot"},P("span",null,"Credits now"),P("b",null,zt(t.credits))))),t.newOffers&&t.newOffers.length&&a.append(P("div",{class:"note good"},en("handshake"),P("span",null,`${t.newOffers.length} new sponsor ${t.newOffers.length===1?"offer":"offers"}: ${t.newOffers.map(c=>c.name).join(", ")}`))),t.unlockedSeries&&t.unlockedSeries.length&&a.append(P("div",{class:"note gold"},en("trophy"),P("span",null,`Series unlocked: ${t.unlockedSeries.map(c=>c.name).join(", ")}`))));const o=P("div",{class:"actions"});return t?o.append(Tt("Next race",{kind:"primary",icon:"play",onClick:()=>i.leave("raceSetup",{mode:"career"})}),t.newOffers&&t.newOffers.length?Tt("View offers",{icon:"handshake",onClick:()=>i.leave("garage",{tab:"sponsors"})}):Tt("Garage",{icon:"car",onClick:()=>i.leave("garage")})):o.append(Tt(n?"Another lap":"Race again",{kind:"primary",icon:"play",onClick:()=>i.restart()})),o.append(Tt("Main menu",{snd:"back",onClick:()=>i.leave("menu")})),s.append(a,o),s}function uv(i){const e=i.params||{};return P("div",{class:"pause card"},P("h2",{class:"big sm"},"Paused"),e.info?P("p",{class:"lead"},e.info):null,P("div",{class:"pause-a"},Tt("Resume",{kind:"primary",icon:"play",onClick:()=>i.resume()}),Tt("Restart",{icon:"back",onClick:()=>sa(i,{title:"Restart this race?",body:"Your progress in this race will be lost.",confirmLabel:"Restart",onConfirm:()=>i.restart()})}),Tt("Settings",{icon:"gear",onClick:()=>i.go("settings",{overlay:!0,from:"pause"})}),Tt("Exit to menu",{kind:"danger",snd:"back",onClick:()=>sa(i,{title:"Leave the race?",body:"This result will not count.",confirmLabel:"Leave race",danger:!0,onConfirm:()=>i.exitToMenu()})})))}const Oh={menu:tv,career:iv,garage:cv,raceSetup:lv,settings:Qu},dv=[{id:"menu",label:"Home",icon:"home"},{id:"career",label:"Career",icon:"trophy"},{id:"raceSetup",params:{mode:"quick"},label:"Race",icon:"flag"},{id:"raceSetup",params:{mode:"hotlap"},label:"Hot lap",icon:"stopwatch",desk:!0},{id:"garage",label:"Garage",icon:"car"},{id:"online",label:"Online",icon:"globe",disabled:!0,desk:!0,hint:"Online racing is planned for a later update"},{id:"settings",label:"Settings",icon:"gear"}],se={game:null,root:null,cur:"boot",params:{},listeners:{},nav:null,wiping:!1,music:"",hudWait:!0},Ve={_modals:[],overlayEl:null},oo=(i,...e)=>(se.listeners[i]||[]).forEach(t=>{try{t(...e)}catch(n){console.error(n)}});Ve.on=(i,e)=>((se.listeners[i]||=[]).push(e),()=>{se.listeners[i]=se.listeners[i].filter(t=>t!==e)});Ve.current=()=>se.cur;function Oc(i){return kc()?(i(),Promise.resolve()):new Promise(e=>{const t=se.wipeEl;t.classList.remove("run"),t.offsetWidth,t.classList.add("run"),se.wiping=!0,kt("whoosh"),setTimeout(()=>{i()},330),setTimeout(()=>{t.classList.remove("run"),se.wiping=!1,e()},760)})}function ps(){try{const i=se.game.input;i&&typeof i.clear=="function"&&i.clear()}catch{}}function ra(i){return{game:se.game,ui:Ve,params:i,go:(e,t)=>Ve.show(e,t),back:()=>Ve.back(),launch:(e,t)=>fv(e,t),restart:()=>pv(),resume:()=>mv(),pause:()=>uc(),cycleCamera:()=>{const e=se.game.input;e&&e.cycleCamera?e.cycleCamera():e&&e.press&&e.press("camera")},exitToMenu:()=>hc(),leave:(e,t)=>hc(e,t)}}async function fv(i,e){se.wiping||await Oc(()=>{ps(),Ve.show("hud");const t=se.game;(i==="hotlap"?t.startHotLap:t.startRace).call(t,e)})}async function hc(i="menu",e={}){se.wiping||await Oc(()=>{try{se.game.exitToMenu()}catch(t){console.error(t)}ps(),Ve.show(i,e)})}function pv(){ps(),se.game.restart(),Ve.show("hud")}function mv(){ps(),se.game.resume(),Ve.show("hud"),ps()}function uc(){se.cur==="hud"&&(se.game.pause(),ps(),se.cur!=="pause"&&Ve.show("pause",se.pauseInfo||{}))}function gv(){const i=t=>{const n=P("button",{type:"button",class:`nav-item${t.desk?" desk":""}`,disabled:t.disabled,title:t.disabled?t.hint:null,"aria-disabled":t.disabled?"true":null,dataset:{id:t.id,mode:t.params?.mode||""},onClick:()=>Ve.show(t.id,t.params||{})},en(t.icon),P("span",{class:"nav-l"},t.label),t.disabled?P("span",{class:"nav-soon"},"Soon"):null);return t.disabled&&n.setAttribute("disabled",""),n};se.navItems=dv.map(i);const e=P("nav",{class:"side","aria-label":"Main menu"},P("div",{class:"side-logo",html:H1.replace("<svg ",'<svg class="side-logo-svg" aria-hidden="true" ')}),P("div",{class:"nav"},se.navItems),P("p",{class:"side-foot"},"Fan-made game. Not affiliated with or endorsed by NASCAR or any speedway."));se.mainEl=P("main",{class:"main",id:"shell-main"}),se.shellEl=P("div",{class:"shell",hidden:!0},e,se.mainEl)}function _v(i,e){se.navItems.forEach(t=>{t.dataset.id===i&&(t.dataset.mode?t.dataset.mode===(e.mode==="career"?"quick":e.mode||""):!0)?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function oi({shell:i=!1,hud:e=!1,overlay:t=!1,boot:n=!1}){se.shellEl.hidden=!i,se.hudEl.hidden=!e,se.overlayEl.hidden=!t,se.bootCtl.el&&n&&se.bootCtl.show(),se.root.dataset.layer=i?"shell":e?t?"hud-overlay":"hud":t?"overlay":n?"boot":"none"}function co(i){se.music!==i&&(se.music=i,W1(i,{fade:1.2}))}Ve.show=function(e,t={}){const n=se.cur;if(se.params=t,e==="none"){oi({}),se.cur="none",se.touch.setActive(!1),oo("screen",e,t);return}if(e==="boot"){oi({boot:!0}),se.cur="boot",oo("screen",e,t);return}se.bootCtl.el&&!se.bootCtl.el.hidden&&e!=="boot"&&se.bootCtl.hide(),se.overlayEl.querySelectorAll(".ov").forEach(r=>r.remove()),Ve._modals.forEach(r=>r.remove()),Ve._modals=[];const s=ra(t);if(Oh[e]&&!(e==="settings"&&t.overlay)){if(n==="garage"&&e!=="garage")try{se.game.garage.exit()}catch(a){console.error(a)}oi({shell:!0}),se.touch.setActive(!1),se.shellEl.classList.toggle("garage-mode",e==="garage"),se.shellEl.dataset.screen=e;const r=Oh[e](s);if(r.classList.add("enter"),se.mainEl.replaceChildren(r),se.mainEl.scrollTop=0,_v(e,t),e==="garage"&&n!=="garage")try{se.game.garage.enter()}catch(a){console.error(a)}co(e==="garage"?"garage":"menu")}else if(e==="hud"){if(n==="garage")try{se.game.garage.exit()}catch{}oi({hud:!0}),se.touch.setActive(!0),se.hudWait=!0,se.hudEl.classList.add("wait"),co("race")}else if(e==="pause")oi({hud:!0,overlay:!0}),se.touch.setActive(!1),se.overlayEl.append(P("div",{class:"ov ov-pause"},uv(s)));else if(e==="results")oi({overlay:!0}),se.touch.setActive(!1),co("results"),kt(t.pos===1?"bestLap":"lap"),se.overlayEl.append(P("div",{class:"ov ov-results"},hv(s)));else if(e==="settings")oi({hud:n==="pause"||se.cur==="pause",overlay:!0}),se.touch.setActive(!1),se.overlayEl.append(P("div",{class:"ov ov-settings"},Qu(s)));else{console.warn("[ui] unknown screen",e);return}se.cur=e,se.pauseOverlayFrom=t.from,oo("screen",e,t),requestAnimationFrame(()=>Ve.focusScope())};Ve.back=function(){if(Ve._modals.length){Ve._modals[Ve._modals.length-1].close(),kt("back");return}const e=se.cur;e==="settings"&&se.params.overlay?(kt("back"),Ve.show("pause",se.pauseInfo||{})):e==="pause"?(kt("back"),ra({}).resume()):e==="results"?(kt("back"),hc()):["career","garage","raceSetup","settings"].includes(e)&&(kt("back"),Ve.show("menu"))};Ve.getScope=()=>Ve._modals.length?Ve._modals[Ve._modals.length-1]:!se.overlayEl.hidden&&se.overlayEl.querySelector(".ov")?se.overlayEl.querySelector(".ov"):se.shellEl.hidden?null:se.shellEl;Ve.focusScope=i=>{se.nav&&se.nav.focusFirst(i||Ve.getScope())};Ve.hud={update(i){se.hudWait&&(se.hudWait=!1,se.hudEl.classList.remove("wait")),se.hudCtl.update(i),se.touchCtl.tick()}};Ve.stageRect=()=>{const i=se.mainEl&&se.mainEl.querySelector(".garage-stage");if(!i||se.shellEl.hidden)return null;const e=i.getBoundingClientRect();return{x:e.left,y:e.top,width:e.width,height:e.height}};Ve.setPauseInfo=i=>{se.pauseInfo={info:i}};Ve.setLoading=(i,e)=>se.bootCtl.setLoading(i,e);Ve.touch=null;Ve.toast=(i,e="info")=>{const t=P("div",{class:`toast ${e}`,role:"status"},e==="good"?en("check"):null,P("span",null,i));for(se.toastsEl.append(t);se.toastsEl.children.length>3;)se.toastsEl.firstChild.remove();setTimeout(()=>t.classList.add("out"),3e3),setTimeout(()=>t.remove(),3500)};Ve.init=function(e,t){se.game=t,se.root=e,e.classList.add("ui-root"),se.bootCtl=Y1(async()=>{await X1(),kt("intro"),await z1(kc()?50:900),await Oc(()=>{Ve.show("menu")})}),gv(),se.hudCtl=j1(ra({})),se.hudEl=se.hudCtl.el,se.hudEl.hidden=!0,se.touchCtl=$1(ra({})),Ve.touch=se.touch=se.touchCtl,se.hudEl.append(se.touchCtl.el),se.overlayEl=Ve.overlayEl=P("div",{class:"overlay",hidden:!0}),se.toastsEl=P("div",{class:"toasts","aria-live":"polite"}),se.wipeEl=P("div",{class:"wipe","aria-hidden":"true"},P("i"),P("i"),P("i")),e.append(se.shellEl,se.hudEl,se.overlayEl,se.toastsEl,se.wipeEl),se.nav=K1(e,{getScope:()=>Ve.getScope(),onBack:()=>Ve.back(),hudActive:()=>se.cur==="hud"&&!se.overlayEl.hasChildNodes()||se.cur==="hud",onHudPause:()=>uc()}),window.addEventListener("keydown",n=>{n.key},!0),se.pauseInfo={},t&&typeof t.on=="function"&&t.on("ready",()=>Ve.setLoading(1,"Ready")),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Du()),document.addEventListener("visibilitychange",()=>{document.hidden&&se.cur==="hud"&&uc()}),se.cur="boot",oi({boot:!0})};pa.ui=Ve;Ve.init(document.getElementById("ui-root"),pa);window.__rtta={game:pa,ui:Ve,audio:tt,Driver:Uu};const vv=document.getElementById("game-root");pa.init(vv,(i,e)=>Ve.setLoading(i,e)).catch(i=>{console.error(i),Ve.setLoading(1,"Failed to start: "+(i&&i.message||i))});
