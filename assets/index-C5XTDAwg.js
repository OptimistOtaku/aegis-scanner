(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="171",n_=0,Bh=1,i_=2,Ud=1,r_=2,Li=3,cr=0,Tn=1,Ni=2,rr=0,As=1,zh=2,kh=3,Hh=4,s_=5,Dr=100,o_=101,a_=102,l_=103,c_=104,u_=200,h_=201,f_=202,d_=203,Uc=204,Nc=205,p_=206,m_=207,__=208,g_=209,v_=210,x_=211,M_=212,y_=213,S_=214,Oc=0,Fc=1,Bc=2,Os=3,zc=4,kc=5,Hc=6,Vc=7,Nd=0,E_=1,T_=2,sr=0,b_=1,A_=2,w_=3,C_=4,R_=5,P_=6,D_=7,Od=300,Fs=301,Bs=302,Gc=303,Wc=304,wl=306,Xc=1e3,Ur=1001,Yc=1002,di=1003,L_=1004,na=1005,xi=1006,Bl=1007,Nr=1008,Vi=1009,Fd=1010,Bd=1011,Oo=1012,Ku=1013,Xr=1014,Fi=1015,Ko=1016,Ju=1017,ju=1018,zs=1020,zd=35902,kd=1021,Hd=1022,hi=1023,Vd=1024,Gd=1025,ws=1026,ks=1027,Wd=1028,Qu=1029,Xd=1030,th=1031,eh=1033,Ya=33776,qa=33777,$a=33778,Za=33779,qc=35840,$c=35841,Zc=35842,Kc=35843,Jc=36196,jc=37492,Qc=37496,tu=37808,eu=37809,nu=37810,iu=37811,ru=37812,su=37813,ou=37814,au=37815,lu=37816,cu=37817,uu=37818,hu=37819,fu=37820,du=37821,Ka=36492,pu=36494,mu=36495,Yd=36283,_u=36284,gu=36285,vu=36286,I_=3200,U_=3201,qd=0,N_=1,ji="",Qn="srgb",Hs="srgb-linear",cl="linear",ge="srgb",ts=7680,Vh=519,O_=512,F_=513,B_=514,$d=515,z_=516,k_=517,H_=518,V_=519,Gh=35044,Wh="300 es",Bi=2e3,ul=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,xu=180/Math.PI;function Ks(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function G_(r,t){return(r%t+t)%t}function zl(r,t,e){return(1-e)*r+e*t}function eo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],M=i[4],v=i[7],w=i[2],R=i[5],b=i[8];return s[0]=o*g+a*T+l*w,s[3]=o*m+a*M+l*R,s[6]=o*p+a*v+l*b,s[1]=c*g+u*T+h*w,s[4]=c*m+u*M+h*R,s[7]=c*p+u*v+h*b,s[2]=f*g+d*T+_*w,s[5]=f*m+d*M+_*R,s[8]=f*p+d*v+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Jt;function Zd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function W_(){const r=hl("canvas");return r.style.display="block",r}const Xh={};function vs(r){r in Xh||(Xh[r]=!0,console.warn(r))}function X_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Y_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const r={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?cl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Hs]:{primaries:t,whitePoint:n,transfer:cl,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),r}const fe=$_();function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let es;class Z_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=hl("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let K_=0;class Kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hl(i[o].image)):s.push(Hl(i[o]))}else s=Hl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Z_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J_=0;class bn extends Zs{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=Ur,i=Ur,s=xi,o=Nr,a=hi,l=Vi,c=bn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ks(),this.name="",this.source=new Kd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xc:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xc:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Od;bn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+f)/4,b=(h+g)/4,P=(_+m)/4;return M>v&&M>w?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=R/n,s=b/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=P/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j_ extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends j_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jd extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),R=Math.atan2(w,p*T);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const v=a*T;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new O,$h=new Jo;class jo{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),ra.subVectors(this.max,no),ns.subVectors(t.a,no),is.subVectors(t.b,no),rs.subVectors(t.c,no),Xi.subVectors(is,ns),Yi.subVectors(rs,is),vr.subVectors(ns,rs);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-vr.z,vr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,vr.z,0,-vr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-vr.y,vr.x,0];return!Gl(e,ns,is,rs,ra)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,ns,is,rs,ra))?!1:(sa.crossVectors(Xi,Yi),e=[sa.x,sa.y,sa.z],Gl(e,ns,is,rs,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new O,new O,new O,new O,new O,new O,new O,new O],ai=new O,ia=new jo,ns=new O,is=new O,rs=new O,Xi=new O,Yi=new O,vr=new O,no=new O,ra=new O,sa=new O,xr=new O;function Gl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xr.fromArray(r,s);const a=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),l=t.dot(xr),c=e.dot(xr),u=n.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tg=new jo,io=new O,Wl=new O;class Qo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Wl)),this.expandByPoint(io.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new O,Xl=new O,oa=new O,qi=new O,Yl=new O,aa=new O,ql=new O;class nh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(Xl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=qi.dot(this.direction),l=-qi.dot(oa),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xl).addScaledVector(oa,f),d}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,s){Yl.subVectors(e,t),aa.subVectors(n,t),ql.crossVectors(Yl,aa);let o=this.direction.dot(ql),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const l=a*this.direction.dot(aa.crossVectors(qi,aa));if(l<0)return null;const c=a*this.direction.dot(Yl.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(ql);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eg,t,ng)}lookAt(t,e,n){const i=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),$i.crossVectors(n,Un),$i.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),$i.crossVectors(n,Un)),$i.normalize(),la.crossVectors(Un,$i),i[0]=$i.x,i[4]=la.x,i[8]=Un.x,i[1]=$i.y,i[5]=la.y,i[9]=Un.y,i[2]=$i.z,i[6]=la.z,i[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],M=n[7],v=n[11],w=n[15],R=i[0],b=i[4],P=i[8],y=i[12],x=i[1],D=i[5],B=i[9],z=i[13],V=i[2],q=i[6],G=i[10],W=i[14],H=i[3],rt=i[7],L=i[11],ct=i[15];return s[0]=o*R+a*x+l*V+c*H,s[4]=o*b+a*D+l*q+c*rt,s[8]=o*P+a*B+l*G+c*L,s[12]=o*y+a*z+l*W+c*ct,s[1]=u*R+h*x+f*V+d*H,s[5]=u*b+h*D+f*q+d*rt,s[9]=u*P+h*B+f*G+d*L,s[13]=u*y+h*z+f*W+d*ct,s[2]=_*R+g*x+m*V+p*H,s[6]=_*b+g*D+m*q+p*rt,s[10]=_*P+g*B+m*G+p*L,s[14]=_*y+g*z+m*W+p*ct,s[3]=T*R+M*x+v*V+w*H,s[7]=T*b+M*D+v*q+w*rt,s[11]=T*P+M*B+v*G+w*L,s[15]=T*y+M*z+v*W+w*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],T=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,M=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,v=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,w=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,R=e*T+n*M+i*v+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=T*b,t[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*b,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,t[4]=M*b,t[5]=(u*m*s-_*f*s+_*i*d-e*m*d-u*i*p+e*f*p)*b,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*b,t[8]=v*b,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*p-e*h*p)*b,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*b,t[12]=w*b,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*m+e*h*m)*b,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*b,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,T=l*c,M=l*u,v=l*h,w=n.x,R=n.y,b=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+v)*w,i[2]=(_-M)*w,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(_+M)*b,i[9]=(m-T)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],li.copy(this);const c=1/s,u=1/o,h=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,e.setFromRotationMatrix(li),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Bi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Bi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Bi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(a===Bi)_=(o+s)*h,g=-2*h;else if(a===ul)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new O,li=new Te,eg=new O(0,0,0),ng=new O(1,1,1),$i=new O,la=new O,Un=new O,Zh=new Te,Kh=new Jo;class Ei{constructor(t=0,e=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ig=0;const Jh=new O,os=new Jo,Ri=new Te,ca=new O,ro=new O,rg=new O,sg=new Jo,jh=new O(1,0,0),Qh=new O(0,1,0),tf=new O(0,0,1),ef={type:"added"},og={type:"removed"},as={type:"childadded",child:null},$l={type:"childremoved",child:null};class ln extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new O,e=new Ei,n=new Jo,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Jt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ro,ca,this.up):Ri.lookAt(ca,ro,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Ri),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(og),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ln.DEFAULT_UP=new O(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new O,Pi=new O,Zl=new O,Di=new O,ls=new O,cs=new O,nf=new O,Kl=new O,Jl=new O,jl=new O,Ql=new ve,tc=new ve,ec=new ve;class ni{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ci.subVectors(t,e),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ci.subVectors(i,e),Pi.subVectors(n,e),Zl.subVectors(t,e);const o=ci.dot(ci),a=ci.dot(Pi),l=ci.dot(Zl),c=Pi.dot(Pi),u=Pi.dot(Zl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ql,s.x),o.addScaledVector(tc,s.y),o.addScaledVector(ec,s.z),o}static isFrontFacing(t,e,n,i){return ci.subVectors(n,e),Pi.subVectors(t,e),ci.cross(Pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ci.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(s,n),Kl.subVectors(t,n);const l=ls.dot(Kl),c=cs.dot(Kl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,i);const u=ls.dot(Jl),h=cs.dot(Jl);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ls,o);jl.subVectors(t,s);const d=ls.dot(jl),_=cs.dot(jl);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(cs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return nf.subVectors(s,i),a=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(nf,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function nc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=G_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=nc(o,s,t+1/3),this.g=nc(o,s,t),this.b=nc(o,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qn){const n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return fe.fromWorkingColorSpace(nn.copy(this),t),Math.round(se(nn.r*255,0,255))*65536+Math.round(se(nn.g*255,0,255))*256+Math.round(se(nn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Qn){fe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==Qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(ua);const n=zl(Zi.h,ua.h,e),i=zl(Zi.s,ua.s,e),s=zl(Zi.l,ua.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ae;ae.NAMES=Qd;let ag=0;class Jr extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=As,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tp extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new O,ha=new St;class pi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}}class ep extends pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class np extends pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xn extends pi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lg=0;const Jn=new Te,ic=new ln,us=new O,Nn=new jo,so=new jo,$e=new O;class Dn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?np:ep)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Nn.min,so.min),Nn.expandByPoint($e),$e.addVectors(Nn.max,so.max),Nn.expandByPoint($e)):(Nn.expandByPoint(so.min),Nn.expandByPoint(so.max))}Nn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),$e.add(us)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,h=new O,f=new St,d=new St,_=new St,g=new O,m=new O;function p(P,y,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(g),a[y].add(g),a[x].add(g),l[P].add(m),l[y].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,y=T.length;P<y;++P){const x=T[P],D=x.start,B=x.count;for(let z=D,V=D+B;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new O,v=new O,w=new O,R=new O;function b(P){w.fromBufferAttribute(i,P),R.copy(w);const y=a[P];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(R,y);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,y=T.length;P<y;++P){const x=T[P],D=x.start,B=x.count;for(let z=D,V=D+B;z<V;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new pi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rf=new Te,Mr=new nh,fa=new Qo,sf=new O,da=new O,pa=new O,ma=new O,rc=new O,_a=new O,of=new O,ga=new O;class fi extends ln{constructor(t=new Dn,e=new tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(rc.fromBufferAttribute(h,t),o?_a.addScaledVector(rc,u):_a.addScaledVector(rc.sub(e),u))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),Mr.copy(t.ray).recast(t.near),!(fa.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(fa,sf)===null||Mr.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(rf.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=M;v<w;v+=3){const R=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);i=va(this,p,t,n,c,u,h,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=va(this,o,t,n,c,u,h,T,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=M;v<w;v+=3){const R=v,b=v+1,P=v+2;i=va(this,p,t,n,c,u,h,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=m,M=m+1,v=m+2;i=va(this,o,t,n,c,u,h,T,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function cg(r,t,e,n,i,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===cr,a),l===null)return null;ga.copy(a),ga.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:r}}function va(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,da),r.getVertexPosition(l,pa),r.getVertexPosition(c,ma);const u=cg(r,t,e,n,da,pa,ma,of);if(u){const h=new O;ni.getBarycoord(of,da,pa,ma,h),i&&(u.uv=ni.getInterpolatedAttribute(i,a,l,c,h,new St)),s&&(u.uv1=ni.getInterpolatedAttribute(s,a,l,c,h,new St)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};ni.getNormal(da,pa,ma,f.normal),u.face=f,u.barycoord=h}return u}class ta extends Dn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function _(g,m,p,T,M,v,w,R,b,P,y){const x=v/b,D=w/P,B=v/2,z=w/2,V=R/2,q=b+1,G=P+1;let W=0,H=0;const rt=new O;for(let L=0;L<G;L++){const ct=L*D-z;for(let It=0;It<q;It++){const $t=It*x-B;rt[g]=$t*T,rt[m]=ct*M,rt[p]=V,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[m]=0,rt[p]=R>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(It/b),h.push(1-L/P),W+=1}}for(let L=0;L<P;L++)for(let ct=0;ct<b;ct++){const It=f+ct+q*L,$t=f+ct+q*(L+1),Z=f+(ct+1)+q*(L+1),st=f+(ct+1)+q*L;l.push(It,$t,st),l.push($t,Z,st),H+=6}a.addGroup(d,H,y),d+=H,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(r){const t={};for(let e=0;e<r.length;e++){const n=Vs(r[e]);for(const i in n)t[i]=n[i]}return t}function ug(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ip(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const hg={clone:Vs,merge:pn};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=ug(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rp extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new O,af=new St,lf=new St;class zn extends rp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xu*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,af,lf),e.subVectors(lf,af)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,fs=1;class pg extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(hs,fs,t,e);i.layers=this.layers,this.add(i);const s=new zn(hs,fs,t,e);s.layers=this.layers,this.add(s);const o=new zn(hs,fs,t,e);o.layers=this.layers,this.add(o);const a=new zn(hs,fs,t,e);a.layers=this.layers,this.add(a);const l=new zn(hs,fs,t,e);l.layers=this.layers,this.add(l);const c=new zn(hs,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class sp extends bn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mg extends Yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ta(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:rr});s.uniforms.tEquirect.value=e;const o=new fi(i,s),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=xi),new pg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class _g extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sc=new O,gg=new O,vg=new Jt;class Ar{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sc.subVectors(n,e).cross(gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vg.getNormalMatrix(t),i=this.coplanarPoint(sc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Qo,xa=new O;class ih{constructor(t=new Ar,e=new Ar,n=new Ar,i=new Ar,s=new Ar,o=new Ar){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],T=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+_,v+T).normalize(),n[3].setComponents(l-o,f-u,m-_,v-T).normalize(),n[4].setComponents(l-a,f-h,m-g,v-M).normalize(),e===Bi)n[5].setComponents(l+a,f+h,m+g,v+M).normalize();else if(e===ul)n[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(xa.x=i.normal.x>0?t.max.x:t.min.x,xa.y=i.normal.y>0?t.max.y:t.min.y,xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rh extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fl=new O,dl=new O,cf=new Te,oo=new nh,Ma=new Qo,oc=new O,uf=new O;class op extends ln{constructor(t=new Dn,e=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)fl.fromBufferAttribute(e,i-1),dl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fl.distanceTo(dl);t.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=s,t.ray.intersectsSphere(Ma)===!1)return;cf.copy(i).invert(),oo.copy(t.ray).applyMatrix4(cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),T=u.getX(g+1),M=ya(this,t,oo,l,p,T);M&&e.push(M)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=ya(this,t,oo,l,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=ya(this,t,oo,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=ya(this,t,oo,l,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ya(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(fl.fromBufferAttribute(o,i),dl.fromBufferAttribute(o,s),e.distanceSqToSegment(fl,dl,oc,uf)>n)return;oc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(oc);if(!(l<t.near||l>t.far))return{distance:l,point:uf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const hf=new O,ff=new O;class xg extends op{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)hf.fromBufferAttribute(e,i),ff.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hf.distanceTo(ff);t.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mg extends op{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ap extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const df=new Te,Mu=new nh,Sa=new Qo,Ea=new O;class yg extends ln{constructor(t=new Dn,e=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=s,t.ray.intersectsSphere(Sa)===!1)return;df.copy(i).invert(),Mu.copy(t.ray).applyMatrix4(df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Ea.fromBufferAttribute(h,m),pf(Ea,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Ea.fromBufferAttribute(h,_),pf(Ea,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pf(r,t,e,n,i,s,o){const a=Mu.distanceSqToPoint(r);if(a<e){const l=new O;Mu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ho extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class lp extends bn{constructor(t,e,n,i,s,o,a,l,c,u=ws){if(u!==ws&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ws&&(n=Xr),n===void 0&&u===ks&&(n=zs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new St:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,l=new Te;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(se(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(se(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Ai{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sg extends Cl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ta=new O,ac=new sh,lc=new sh,cc=new sh;class Eg extends Ai{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ta.subVectors(i[0],i[1]).add(i[0]),c=Ta);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ta.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ac.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),lc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),cc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),lc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),cc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ac.calc(l),lc.calc(l),cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Tg(r,t){const e=1-r;return e*e*t}function bg(r,t){return 2*(1-r)*r*t}function Ag(r,t){return r*r*t}function yo(r,t,e,n){return Tg(r,t)+bg(r,e)+Ag(r,n)}function wg(r,t){const e=1-r;return e*e*e*t}function Cg(r,t){const e=1-r;return 3*e*e*r*t}function Rg(r,t){return 3*(1-r)*r*r*t}function Pg(r,t){return r*r*r*t}function So(r,t,e,n,i){return wg(r,t)+Cg(r,e)+Rg(r,n)+Pg(r,i)}class cp extends Ai{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dg extends Ai{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y),So(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class up extends Ai{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends Ai{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hp extends Ai{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(yo(t,i.x,s.x,o.x),yo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends Ai{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(yo(t,i.x,s.x,o.x),yo(t,i.y,s.y,o.y),yo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(mf(a,l.x,c.x,u.x,h.x),mf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new St().fromArray(i))}return this}}var yu=Object.freeze({__proto__:null,ArcCurve:Sg,CatmullRomCurve3:Eg,CubicBezierCurve:cp,CubicBezierCurve3:Dg,EllipseCurve:Cl,LineCurve:up,LineCurve3:Lg,QuadraticBezierCurve:hp,QuadraticBezierCurve3:Ig,SplineCurve:fp});class Ug extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new yu[i.type]().fromJSON(i))}return this}}class _f extends Ug{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new up(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hp(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new cp(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Cl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const ba=new O,Aa=new O,uc=new O,wa=new ni;class Ng extends Dn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Ja*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=wa;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),wa.getNormal(uc),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const M=(T+1)%3,v=h[T],w=h[M],R=wa[u[T]],b=wa[u[M]],P=`${v}_${w}`,y=`${w}_${v}`;y in f&&f[y]?(uc.dot(f[y].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(b.x,b.y,b.z)),f[y]=null):P in f||(f[P]={index0:c[T],index1:c[M],normal:uc.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];ba.fromBufferAttribute(a,g),Aa.fromBufferAttribute(a,m),d.push(ba.x,ba.y,ba.z),d.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new xn(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class dp extends _f{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new _f().fromJSON(i))}return this}}const Og={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=pp(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=Hg(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let _=e;_<i;_+=e)h=r[_],f=r[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Fo(s,o,e,a,l,d,0),o}};function pp(r,t,e,n,i){let s,o;if(i===jg(r,t,e,n)>0)for(s=t;s<e;s+=n)o=gf(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=gf(s,r[s],r[s+1],o);return o&&Rl(o,o.next)&&(zo(o),o=o.next),o}function qr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Rl(e,e.next)||Pe(e.prev,e,e.next)===0)){if(zo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Yg(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Bg(r,n,i,s):Fg(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),zo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=zg(qr(r),t,e),Fo(r,t,e,n,i,s,2)):o===2&&kg(r,t,e,n,i,s):Fo(qr(r),t,e,n,i,s,1);break}}}function Fg(r){const t=r.prev,e=r,n=r.next;if(Pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&ys(i,a,s,l,o,c,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bg(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Pe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Su(d,_,t,e,n),T=Su(g,m,t,e,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=p&&v&&v.z<=T;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==o&&ys(a,u,l,h,c,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ys(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==o&&ys(a,u,l,h,c,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ys(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function zg(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Rl(i,s)&&mp(i,n,n.next,s)&&Bo(i,s)&&Bo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),zo(n),zo(n.next),n=r=s),n=n.next}while(n!==r);return qr(n)}function kg(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zg(o,a)){let l=_p(o,a);o=qr(o,o.next),l=qr(l,l.next),Fo(o,t,e,n,i,s,0),Fo(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Hg(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=pp(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($g(c));for(i.sort(Vg),s=0;s<i.length;s++)e=Gg(i[s],e);return e}function Vg(r,t){return r.x-t.x}function Gg(r,t){const e=Wg(r,t);if(!e)return t;const n=_p(e,r);return qr(n,n.next),qr(e,e.next)}function Wg(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&ys(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Bo(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Xg(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Xg(r,t){return Pe(r.prev,r,t.prev)<0&&Pe(t.next,r,r.next)<0}function Yg(r,t,e,n){let i=r;do i.z===0&&(i.z=Su(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qg(i)}function qg(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Su(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $g(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ys(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Zg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Kg(r,t)&&(Bo(r,t)&&Bo(t,r)&&Jg(r,t)&&(Pe(r.prev,r,t.prev)||Pe(r,t.prev,t))||Rl(r,t)&&Pe(r.prev,r,r.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Rl(r,t){return r.x===t.x&&r.y===t.y}function mp(r,t,e,n){const i=Ra(Pe(r,t,e)),s=Ra(Pe(r,t,n)),o=Ra(Pe(e,n,r)),a=Ra(Pe(e,n,t));return!!(i!==s&&o!==a||i===0&&Ca(r,e,t)||s===0&&Ca(r,n,t)||o===0&&Ca(e,r,n)||a===0&&Ca(e,t,n))}function Ca(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ra(r){return r>0?1:r<0?-1:0}function Kg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&mp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Bo(r,t){return Pe(r.prev,r,r.next)<0?Pe(r,t,r.next)>=0&&Pe(r,r.prev,t)>=0:Pe(r,t,r.prev)<0||Pe(r,r.next,t)<0}function Jg(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function _p(r,t){const e=new Eu(r.i,r.x,r.y),n=new Eu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function gf(r,t,e,n){const i=new Eu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Eu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jg(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Eo{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Eo.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];vf(t),xf(n,t);let o=t.length;e.forEach(vf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,xf(n,e[l]);const a=Og.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function vf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function xf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class oh extends Dn{constructor(t=new dp([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new xn(i,3)),this.setAttribute("uv",new xn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Qg;let M,v=!1,w,R,b,P;p&&(M=p.getSpacedPoints(u),v=!0,f=!1,w=p.computeFrenetFrames(u,!1),R=new O,b=new O,P=new O),f||(m=0,d=0,_=0,g=0);const y=a.extractPoints(c);let x=y.shape;const D=y.holes;if(!Eo.isClockWise(x)){x=x.reverse();for(let j=0,Q=D.length;j<Q;j++){const C=D[j];Eo.isClockWise(C)&&(D[j]=C.reverse())}}const z=Eo.triangulateShape(x,D),V=x;for(let j=0,Q=D.length;j<Q;j++){const C=D[j];x=x.concat(C)}function q(j,Q,C){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(Q,C)}const G=x.length,W=z.length;function H(j,Q,C){let Et,it,U;const at=j.x-Q.x,Ut=j.y-Q.y,gt=C.x-j.x,A=C.y-j.y,S=at*at+Ut*Ut,k=at*A-Ut*gt;if(Math.abs(k)>Number.EPSILON){const K=Math.sqrt(S),tt=Math.sqrt(gt*gt+A*A),J=Q.x-Ut/K,dt=Q.y+at/K,ut=C.x-A/tt,_t=C.y+gt/tt,Yt=((ut-J)*A-(_t-dt)*gt)/(at*A-Ut*gt);Et=J+at*Yt-j.x,it=dt+Ut*Yt-j.y;const lt=Et*Et+it*it;if(lt<=2)return new St(Et,it);U=Math.sqrt(lt/2)}else{let K=!1;at>Number.EPSILON?gt>Number.EPSILON&&(K=!0):at<-Number.EPSILON?gt<-Number.EPSILON&&(K=!0):Math.sign(Ut)===Math.sign(A)&&(K=!0),K?(Et=-Ut,it=at,U=Math.sqrt(S)):(Et=at,it=Ut,U=Math.sqrt(S/2))}return new St(Et/U,it/U)}const rt=[];for(let j=0,Q=V.length,C=Q-1,Et=j+1;j<Q;j++,C++,Et++)C===Q&&(C=0),Et===Q&&(Et=0),rt[j]=H(V[j],V[C],V[Et]);const L=[];let ct,It=rt.concat();for(let j=0,Q=D.length;j<Q;j++){const C=D[j];ct=[];for(let Et=0,it=C.length,U=it-1,at=Et+1;Et<it;Et++,U++,at++)U===it&&(U=0),at===it&&(at=0),ct[Et]=H(C[Et],C[U],C[at]);L.push(ct),It=It.concat(ct)}for(let j=0;j<m;j++){const Q=j/m,C=d*Math.cos(Q*Math.PI/2),Et=_*Math.sin(Q*Math.PI/2)+g;for(let it=0,U=V.length;it<U;it++){const at=q(V[it],rt[it],Et);ot(at.x,at.y,-C)}for(let it=0,U=D.length;it<U;it++){const at=D[it];ct=L[it];for(let Ut=0,gt=at.length;Ut<gt;Ut++){const A=q(at[Ut],ct[Ut],Et);ot(A.x,A.y,-C)}}}const $t=_+g;for(let j=0;j<G;j++){const Q=f?q(x[j],It[j],$t):x[j];v?(b.copy(w.normals[0]).multiplyScalar(Q.x),R.copy(w.binormals[0]).multiplyScalar(Q.y),P.copy(M[0]).add(b).add(R),ot(P.x,P.y,P.z)):ot(Q.x,Q.y,0)}for(let j=1;j<=u;j++)for(let Q=0;Q<G;Q++){const C=f?q(x[Q],It[Q],$t):x[Q];v?(b.copy(w.normals[j]).multiplyScalar(C.x),R.copy(w.binormals[j]).multiplyScalar(C.y),P.copy(M[j]).add(b).add(R),ot(P.x,P.y,P.z)):ot(C.x,C.y,h/u*j)}for(let j=m-1;j>=0;j--){const Q=j/m,C=d*Math.cos(Q*Math.PI/2),Et=_*Math.sin(Q*Math.PI/2)+g;for(let it=0,U=V.length;it<U;it++){const at=q(V[it],rt[it],Et);ot(at.x,at.y,h+C)}for(let it=0,U=D.length;it<U;it++){const at=D[it];ct=L[it];for(let Ut=0,gt=at.length;Ut<gt;Ut++){const A=q(at[Ut],ct[Ut],Et);v?ot(A.x,A.y+M[u-1].y,M[u-1].x+C):ot(A.x,A.y,h+C)}}}Z(),st();function Z(){const j=i.length/3;if(f){let Q=0,C=G*Q;for(let Et=0;Et<W;Et++){const it=z[Et];wt(it[2]+C,it[1]+C,it[0]+C)}Q=u+m*2,C=G*Q;for(let Et=0;Et<W;Et++){const it=z[Et];wt(it[0]+C,it[1]+C,it[2]+C)}}else{for(let Q=0;Q<W;Q++){const C=z[Q];wt(C[2],C[1],C[0])}for(let Q=0;Q<W;Q++){const C=z[Q];wt(C[0]+G*u,C[1]+G*u,C[2]+G*u)}}n.addGroup(j,i.length/3-j,0)}function st(){const j=i.length/3;let Q=0;xt(V,Q),Q+=V.length;for(let C=0,Et=D.length;C<Et;C++){const it=D[C];xt(it,Q),Q+=it.length}n.addGroup(j,i.length/3-j,1)}function xt(j,Q){let C=j.length;for(;--C>=0;){const Et=C;let it=C-1;it<0&&(it=j.length-1);for(let U=0,at=u+m*2;U<at;U++){const Ut=G*U,gt=G*(U+1),A=Q+Et+Ut,S=Q+it+Ut,k=Q+it+gt,K=Q+Et+gt;Pt(A,S,k,K)}}}function ot(j,Q,C){l.push(j),l.push(Q),l.push(C)}function wt(j,Q,C){Ot(j),Ot(Q),Ot(C);const Et=i.length/3,it=T.generateTopUV(n,i,Et-3,Et-2,Et-1);Vt(it[0]),Vt(it[1]),Vt(it[2])}function Pt(j,Q,C,Et){Ot(j),Ot(Q),Ot(Et),Ot(Q),Ot(C),Ot(Et);const it=i.length/3,U=T.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Vt(U[0]),Vt(U[1]),Vt(U[3]),Vt(U[1]),Vt(U[2]),Vt(U[3])}function Ot(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Vt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new yu[i.type]().fromJSON(i)),new oh(n,t.options)}}const Qg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new St(s,o),new St(a,l),new St(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],_=t[i*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-h),new St(f,1-_),new St(g,1-p)]:[new St(a,1-l),new St(u,1-h),new St(d,1-_),new St(m,1-p)]}};function t0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pl extends Dn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let M=0;M<c;M++){const v=M*h-s;_.push(v,-T,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,v=T+c*(p+1),w=T+1+c*(p+1),R=T+1+c*p;d.push(M,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.width,t.height,t.widthSegments,t.heightSegments)}}class ah extends Dn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const T=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const R=w/e;h.x=-t*Math.cos(i+R*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(i+R*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(R+v,1-M),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const M=u[p][T+1],v=u[p][T],w=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&d.push(M,v,R),(p!==n-1||l<Math.PI)&&d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gp extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e0 extends gp{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class n0 extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i0 extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vp extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const hc=new Te,Mf=new O,yf=new O;class r0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mf),yf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yf),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sf=new Te,ao=new O,fc=new O;class s0 extends r0{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(ao),fc.copy(n.position),fc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fc),n.updateMatrixWorld(),i.makeTranslation(-ao.x,-ao.y,-ao.z),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}}class xp extends vp{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new s0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class o0 extends rp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class a0 extends vp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class l0 extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class c0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ef(){return performance.now()}function Tf(r,t,e,n){const i=u0(n);switch(e){case kd:return r*t;case Vd:return r*t;case Gd:return r*t*2;case Wd:return r*t/i.components*i.byteLength;case Qu:return r*t/i.components*i.byteLength;case Xd:return r*t*2/i.components*i.byteLength;case th:return r*t*2/i.components*i.byteLength;case Hd:return r*t*3/i.components*i.byteLength;case hi:return r*t*4/i.components*i.byteLength;case eh:return r*t*4/i.components*i.byteLength;case Ya:case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $a:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $c:case Kc:return Math.max(r,16)*Math.max(t,8)/4;case qc:case Zc:return Math.max(r,8)*Math.max(t,8)/2;case Jc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case su:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ou:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case uu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ka:case pu:case mu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yd:case _u:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gu:case vu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u0(r){switch(r){case Vi:case Fd:return{byteLength:1,components:1};case Oo:case Bd:case Ko:return{byteLength:2,components:1};case Ju:case ju:return{byteLength:2,components:4};case Xr:case Ku:case Fi:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function h0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N0=`#define PI 3.141592653589793
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,uv=`struct PhysicalMaterial {
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
}`,hv=`
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yv=`#if defined( USE_POINTS_UV )
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
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,Bx=`#define TOON
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
}`,zx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:f0,alphahash_pars_fragment:d0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:_0,alphatest_pars_fragment:g0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:M0,batching_vertex:y0,begin_vertex:S0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:b0,bumpmap_pars_fragment:A0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:P0,color_fragment:D0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:F0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:Y0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:rv,envmap_vertex:$0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:J0,fog_pars_fragment:j0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:tv,lights_lambert_fragment:ev,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:sv,lights_toon_pars_fragment:ov,lights_phong_fragment:av,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:hv,lights_fragment_maps:fv,lights_fragment_end:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Mv,map_particle_pars_fragment:yv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:Tv,morphcolor_vertex:bv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Zv,shadowmask_pars_fragment:Kv,skinbase_vertex:Jv,skinning_pars_vertex:jv,skinning_vertex:Qv,skinnormal_vertex:tx,specularmap_fragment:ex,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:rx,transmission_fragment:sx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:vx,distanceRGBA_vert:xx,distanceRGBA_frag:Mx,equirect_vert:yx,equirect_frag:Sx,linedashed_vert:Ex,linedashed_frag:Tx,meshbasic_vert:bx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Cx,meshmatcap_vert:Rx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Ox,meshtoon_vert:Fx,meshtoon_frag:Bx,points_vert:zx,points_frag:kx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:Wx},yt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},gi={basic:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ae(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:pn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:pn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ae(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:pn([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:pn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:pn([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:pn([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:pn([yt.common,yt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:pn([yt.lights,yt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};gi.physical={uniforms:pn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Pa={r:0,b:0,g:0},Sr=new Ei,Xx=new Te;function Yx(r,t,e,n,i,s,o){const a=new ae(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function g(M){let v=!1;const w=_(M);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===wl)?(u===void 0&&(u=new fi(new ta(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Vs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Sr)),u.material.toneMapped=fe.getTransfer(w.colorSpace)!==ge,(h!==w||f!==w.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new fi(new Pl(2,2),new ur({name:"BackgroundMaterial",uniforms:Vs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=fe.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Pa,ip(r)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m,dispose:T}}function qx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,D,B,z,V){let q=!1;const G=h(z,B,D);s!==G&&(s=G,c(s.object)),q=d(x,z,B,V),q&&_(x,z,B,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,D,B,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,B){const z=B.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let q=V[D.id];q===void 0&&(q={},V[D.id]=q);let G=q[z];return G===void 0&&(G=f(l()),q[z]=G),G}function f(x){const D=[],B=[],z=[];for(let V=0;V<e;V++)D[V]=0,B[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:z,object:x,attributes:{},index:null}}function d(x,D,B,z){const V=s.attributes,q=D.attributes;let G=0;const W=B.getAttributes();for(const H in W)if(W[H].location>=0){const L=V[H];let ct=q[H];if(ct===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),L===void 0||L.attribute!==ct||ct&&L.data!==ct.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(x,D,B,z){const V={},q=D.attributes;let G=0;const W=B.getAttributes();for(const H in W)if(W[H].location>=0){let L=q[H];L===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ct={};ct.attribute=L,L&&L.data&&(ct.data=L.data),V[H]=ct,G++}s.attributes=V,s.attributesNum=G,s.index=z}function g(){const x=s.newAttributes;for(let D=0,B=x.length;D<B;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const B=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;B[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),V[x]!==D&&(r.vertexAttribDivisor(x,D),V[x]=D)}function T(){const x=s.newAttributes,D=s.enabledAttributes;for(let B=0,z=D.length;B<z;B++)D[B]!==x[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function M(x,D,B,z,V,q,G){G===!0?r.vertexAttribIPointer(x,D,B,V,q):r.vertexAttribPointer(x,D,B,z,V,q)}function v(x,D,B,z){g();const V=z.attributes,q=B.getAttributes(),G=D.defaultAttributeValues;for(const W in q){const H=q[W];if(H.location>=0){let rt=V[W];if(rt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const L=rt.normalized,ct=rt.itemSize,It=t.get(rt);if(It===void 0)continue;const $t=It.buffer,Z=It.type,st=It.bytesPerElement,xt=Z===r.INT||Z===r.UNSIGNED_INT||rt.gpuType===Ku;if(rt.isInterleavedBufferAttribute){const ot=rt.data,wt=ot.stride,Pt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)p(H.location+Ot,ot.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let Ot=0;Ot<H.locationSize;Ot++)M(H.location+Ot,ct/H.locationSize,Z,L,wt*st,(Pt+ct/H.locationSize*Ot)*st,xt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot,rt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let ot=0;ot<H.locationSize;ot++)M(H.location+ot,ct/H.locationSize,Z,L,ct*st,ct/H.locationSize*ot*st,xt)}}else if(G!==void 0){const L=G[W];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(H.location,L);break;case 3:r.vertexAttrib3fv(H.location,L);break;case 4:r.vertexAttrib4fv(H.location,L);break;default:r.vertexAttrib1fv(H.location,L)}}}}T()}function w(){P();for(const x in n){const D=n[x];for(const B in D){const z=D[B];for(const V in z)u(z[V].object),delete z[V];delete D[B]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const B in D){const z=D[B];for(const V in z)u(z[V].object),delete z[V];delete D[B]}delete n[x.id]}function b(x){for(const D in n){const B=n[D];if(B[x.id]===void 0)continue;const z=B[x.id];for(const V in z)u(z[V].object),delete z[V];delete B[x.id]}}function P(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function $x(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==hi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Vi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Fi&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function Kx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ar,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,M=T*4;let v=p.clippingState||null;l.value=v,v=u(_,f,M,d);for(let w=0;w!==M;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==g;++M,v+=4)o.copy(h[M]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Jx(r){let t=new WeakMap;function e(o,a){return a===Gc?o.mapping=Fs:a===Wc&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gc||a===Wc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ss=4,bf=[.125,.215,.35,.446,.526,.582],Lr=20,dc=new o0,Af=new ae;let pc=null,mc=0,_c=0,gc=!1;const wr=(1+Math.sqrt(5))/2,ds=1/wr,wf=[new O(-wr,ds,0),new O(wr,ds,0),new O(-ds,0,wr),new O(ds,0,wr),new O(0,wr,-ds),new O(0,wr,ds),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,_c),this._renderer.xr.enabled=gc,t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ko,format:hi,colorSpace:Hs,depthBuffer:!1},i=Rf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(s)),this._blurMaterial=Qx(s,t,e)}return i}_compileMaterial(t){const e=new fi(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,i){const a=new zn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Af),u.toneMapping=sr,u.autoClear=!1;const d=new tp({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new fi(new ta,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Af),g=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Da(i,T*M,p>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fs||t.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wf[(i-s-1)%wf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let T=0;for(let b=0;b<Lr;++b){const P=b/g,y=Math.exp(-P*P/2);p.push(y),b===0?T+=y:b<m&&(T+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const v=this._sizeLods[i],w=3*v*(i>M-Ss?i-M+Ss:0),R=4*(this._cubeSize-v);Da(e,w,R,3*v,2*v),l.setRenderTarget(e),l.render(h,dc)}}function jx(r){const t=[],e=[],n=[];let i=r;const s=r-Ss+1+bf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ss?l=bf[o-r+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*d),M=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,P=R>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(y,g*_*R),M.set(f,m*_*R);const x=[R,R,R,R,R,R];v.set(x,p*_*R)}const w=new Dn;w.setAttribute("position",new pi(T,g)),w.setAttribute("uv",new pi(M,m)),w.setAttribute("faceIndex",new pi(v,p)),t.push(w),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rf(r,t,e){const n=new Yr(r,t,e);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Qx(r,t,e){const n=new Float32Array(Lr),i=new O(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Pf(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Df(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function tM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gc||l===Wc,u=l===Fs||l===Bs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cf(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Cf(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function eM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nM(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let M=0,v=T.length;M<v;M+=3){const w=T[M+0],R=T[M+1],b=T[M+2];f.push(w,R,R,b,b,w)}}else if(_!==void 0){const T=_.array;g=_.version;for(let M=0,v=T.length/3-1;M<v;M+=3){const w=M+0,R=M+1,b=M+2;f.push(w,R,R,b,b,w)}}else return;const m=new(Zd(f)?np:ep)(f,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*g[T];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sM(r,t,e){const n=new WeakMap,i=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*R*4*h),P=new Jd(b,w,R,h);P.type=Fi,P.needsUpdate=!0;const y=v*4;for(let D=0;D<h;D++){const B=p[D],z=T[D],V=M[D],q=w*R*4*D;for(let G=0;G<B.count;G++){const W=G*y;_===!0&&(i.fromBufferAttribute(B,G),b[q+W+0]=i.x,b[q+W+1]=i.y,b[q+W+2]=i.z,b[q+W+3]=0),g===!0&&(i.fromBufferAttribute(z,G),b[q+W+4]=i.x,b[q+W+5]=i.y,b[q+W+6]=i.z,b[q+W+7]=0),m===!0&&(i.fromBufferAttribute(V,G),b[q+W+8]=i.x,b[q+W+9]=i.y,b[q+W+10]=i.z,b[q+W+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new St(w,R)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function oM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const yp=new bn,Lf=new lp(1,1),Sp=new Jd,Ep=new Q_,Tp=new sp,If=[],Uf=[],Nf=new Float32Array(16),Of=new Float32Array(9),Ff=new Float32Array(4);function Js(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=If[i];if(s===void 0&&(s=new Float32Array(i),If[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Dl(r,t){let e=Uf[t];e===void 0&&(e=new Int32Array(t),Uf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function aM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function lM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function cM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function uM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function hM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Ff.set(n),r.uniformMatrix2fv(this.addr,!1,Ff),qe(e,n)}}function fM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Of.set(n),r.uniformMatrix3fv(this.addr,!1,Of),qe(e,n)}}function dM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Nf.set(n),r.uniformMatrix4fv(this.addr,!1,Nf),qe(e,n)}}function pM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function mM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function _M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function gM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function vM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function xM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function MM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function yM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function SM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Lf.compareFunction=$d,s=Lf):s=yp,e.setTexture2D(t||s,i)}function EM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ep,i)}function TM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tp,i)}function bM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sp,i)}function AM(r){switch(r){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return hM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return _M;case 35669:case 35673:return gM;case 5125:return vM;case 36294:return xM;case 36295:return MM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return bM}}function wM(r,t){r.uniform1fv(this.addr,t)}function CM(r,t){const e=Js(t,this.size,2);r.uniform2fv(this.addr,e)}function RM(r,t){const e=Js(t,this.size,3);r.uniform3fv(this.addr,e)}function PM(r,t){const e=Js(t,this.size,4);r.uniform4fv(this.addr,e)}function DM(r,t){const e=Js(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function LM(r,t){const e=Js(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function IM(r,t){const e=Js(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function UM(r,t){r.uniform1iv(this.addr,t)}function NM(r,t){r.uniform2iv(this.addr,t)}function OM(r,t){r.uniform3iv(this.addr,t)}function FM(r,t){r.uniform4iv(this.addr,t)}function BM(r,t){r.uniform1uiv(this.addr,t)}function zM(r,t){r.uniform2uiv(this.addr,t)}function kM(r,t){r.uniform3uiv(this.addr,t)}function HM(r,t){r.uniform4uiv(this.addr,t)}function VM(r,t,e){const n=this.cache,i=t.length,s=Dl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||yp,s[o])}function GM(r,t,e){const n=this.cache,i=t.length,s=Dl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ep,s[o])}function WM(r,t,e){const n=this.cache,i=t.length,s=Dl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Tp,s[o])}function XM(r,t,e){const n=this.cache,i=t.length,s=Dl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sp,s[o])}function YM(r){switch(r){case 5126:return wM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}class qM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=AM(e.type)}}class $M{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YM(e.type)}}class ZM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Bf(r,t){r.seq.push(t),r.map[t.id]=t}function KM(r,t,e){const n=r.name,i=n.length;for(vc.lastIndex=0;;){const s=vc.exec(n),o=vc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bf(e,c===void 0?new qM(a,r,t):new $M(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new ZM(a),Bf(e,h)),e=h}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);KM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function zf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const JM=37297;let jM=0;function QM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kf=new Jt;function ty(r){fe._getMatrix(kf,fe.workingColorSpace,r);const t=`mat3( ${kf.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(r)){case cl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+QM(r.getShaderSource(t),o)}else return i}function ey(r,t){const e=ty(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ny(r,t){let e;switch(t){case b_:e="Linear";break;case A_:e="Reinhard";break;case w_:e="Cineon";break;case C_:e="ACESFilmic";break;case P_:e="AgX";break;case D_:e="Neutral";break;case R_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const La=new O;function iy(){fe.getLuminanceCoefficients(La);const r=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function sy(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oy(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function fo(r){return r!==""}function Vf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(r){return r.replace(ay,cy)}const ly=new Map;function cy(r,t){let e=jt[t];if(e===void 0){const n=ly.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tu(e)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(r){return r.replace(uy,hy)}function hy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===r_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function dy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function py(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function my(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nd:t="ENVMAP_BLENDING_MULTIPLY";break;case E_:t="ENVMAP_BLENDING_MIX";break;case T_:t="ENVMAP_BLENDING_ADD";break}return t}function _y(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gy(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fy(e),c=dy(e),u=py(e),h=my(e),f=_y(e),d=ry(e),_=sy(s),g=i.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?jt.tonemapping_pars_fragment:"",e.toneMapping!==sr?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,ey("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),o=Tu(o),o=Vf(o,e),o=Gf(o,e),a=Tu(a),a=Vf(a,e),a=Gf(a,e),o=Wf(o),a=Wf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,v=T+p+a,w=zf(i,i.VERTEX_SHADER,M),R=zf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,R),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(D){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(w).trim(),V=i.getShaderInfoLog(R).trim();let q=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,R);else{const W=Hf(i,w,"vertex"),H=Hf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+W+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(w),i.deleteShader(R),P=new ja(i,g),y=oy(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,JM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let vy=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new My(t),e.set(t,n)),n}}class My{constructor(t){this.id=vy++,this.code=t,this.usedTimes=0}}function yy(r,t,e,n,i,s,o){const a=new jd,l=new xy,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,D,B,z){const V=B.fog,q=z.geometry,G=y.isMeshStandardMaterial?B.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=W&&W.mapping===wl?W.image.height:null,rt=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=L!==void 0?L.length:0;let It=0;q.morphAttributes.position!==void 0&&(It=1),q.morphAttributes.normal!==void 0&&(It=2),q.morphAttributes.color!==void 0&&(It=3);let $t,Z,st,xt;if(rt){const Tt=gi[rt];$t=Tt.vertexShader,Z=Tt.fragmentShader}else $t=y.vertexShader,Z=y.fragmentShader,l.update(y),st=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);const ot=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,Vt=!!y.map,j=!!y.matcap,Q=!!W,C=!!y.aoMap,Et=!!y.lightMap,it=!!y.bumpMap,U=!!y.normalMap,at=!!y.displacementMap,Ut=!!y.emissiveMap,gt=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,k=y.clearcoat>0,K=y.dispersion>0,tt=y.iridescence>0,J=y.sheen>0,dt=y.transmission>0,ut=S&&!!y.anisotropyMap,_t=k&&!!y.clearcoatMap,Yt=k&&!!y.clearcoatNormalMap,lt=k&&!!y.clearcoatRoughnessMap,ht=tt&&!!y.iridescenceMap,zt=tt&&!!y.iridescenceThicknessMap,Ft=J&&!!y.sheenColorMap,bt=J&&!!y.sheenRoughnessMap,Zt=!!y.specularMap,Gt=!!y.specularColorMap,ce=!!y.specularIntensityMap,I=dt&&!!y.transmissionMap,mt=dt&&!!y.thicknessMap,$=!!y.gradientMap,et=!!y.alphaMap,pt=y.alphaTest>0,vt=!!y.alphaHash,Wt=!!y.extensions;let ue=sr;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Le={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:Z,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Hs,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:j,envMap:Q,envMapMode:Q&&W.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Et,bumpMap:it,normalMap:U,displacementMap:f&&at,emissiveMap:Ut,normalMapObjectSpace:U&&y.normalMapType===N_,normalMapTangentSpace:U&&y.normalMapType===qd,metalnessMap:gt,roughnessMap:A,anisotropy:S,anisotropyMap:ut,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:Yt,clearcoatRoughnessMap:lt,dispersion:K,iridescence:tt,iridescenceMap:ht,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:Zt,specularColorMap:Gt,specularIntensityMap:ce,transmission:dt,transmissionMap:I,thicknessMap:mt,gradientMap:$,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:vt,combine:y.combine,mapUv:Vt&&g(y.map.channel),aoMapUv:C&&g(y.aoMap.channel),lightMapUv:Et&&g(y.lightMap.channel),bumpMapUv:it&&g(y.bumpMap.channel),normalMapUv:U&&g(y.normalMap.channel),displacementMapUv:at&&g(y.displacementMap.channel),emissiveMapUv:Ut&&g(y.emissiveMap.channel),metalnessMapUv:gt&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:ut&&g(y.anisotropyMap.channel),clearcoatMapUv:_t&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(y.sheenRoughnessMap.channel),specularMapUv:Zt&&g(y.specularMap.channel),specularColorMapUv:Gt&&g(y.specularColorMap.channel),specularIntensityMapUv:ce&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:mt&&g(y.thicknessMap.channel),alphaMapUv:et&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(U||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Vt||et),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:It,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:Ut&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ni,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(x,y),M(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=_[y.type];let D;if(x){const B=gi[x];D=hg.clone(B.uniforms)}else D=y.uniforms;return D}function w(y,x){let D;for(let B=0,z=u.length;B<z;B++){const V=u[B];if(V.cacheKey===x){D=V,++D.usedTimes;break}}return D===void 0&&(D=new gy(r,x,y,s),u.push(D)),D}function R(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:P}}function Sy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ey(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Ey),n.length>1&&n.sort(f||Yf),i.length>1&&i.sort(f||Yf)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ty(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new qf,r.set(n,[o])):i>=s.length?(o=new qf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function by(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ae};break;case"SpotLight":e={position:new O,direction:new O,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function Ay(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let wy=0;function Cy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ry(r){const t=new by,e=Ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new Te,o=new Te;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,T=0,M=0,v=0,w=0,R=0,b=0;c.sort(Cy);for(let y=0,x=c.length;y<x;y++){const D=c[y],B=D.color,z=D.intensity,V=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*z,h+=B.g*z,f+=B.b*z;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],z);b++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=D.shadow.matrix,T++}n.directional[d]=G,d++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(z),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[g]=G;const W=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=W.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,v++}g++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(B).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const W=D.shadow,H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=D.shadow.matrix,M++}n.point[_]=G,_++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(z),G.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=b,n.version=wy++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function $f(r){const t=new Ry(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Py(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new $f(r),t.set(i,[a])):s>=o.length?(a=new $f(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
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
}`;function Iy(r,t,e){let n=new ih;const i=new St,s=new St,o=new ve,a=new n0({depthPacking:U_}),l=new i0,c={},u=e.maxTextureSize,h={[cr]:Tn,[Tn]:cr,[Ni]:Ni},f=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Dy,fragmentShader:Ly}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Dn;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let p=this.type;this.render=function(R,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),B=r.state;B.setBlending(rr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==Li&&this.type===Li,V=p===Li&&this.type!==Li;for(let q=0,G=R.length;q<G;q++){const W=R[q],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const rt=H.getFrameExtents();if(i.multiply(rt),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,H.mapSize.y=s.y)),H.map===null||z===!0||V===!0){const ct=this.type!==Li?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new Yr(i.x,i.y,ct),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const L=H.getViewportCount();for(let ct=0;ct<L;ct++){const It=H.getViewport(ct);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),B.viewport(o),H.updateMatrices(W,ct),n=H.getFrustum(),v(b,P,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Li&&T(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,D)};function T(R,b){const P=t.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yr(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(b,null,P,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(b,null,P,d,g,null)}function M(R,b,P,y){let x=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=x.uuid,z=b.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let q=V[z];q===void 0&&(q=x.clone(),V[z]=q,b.addEventListener("dispose",w)),x=q}if(x.visible=b.visible,x.wireframe=b.wireframe,y===Li?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=r.properties.get(x);B.light=P}return x}function v(R,b,P,y,x){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Li)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const z=t.update(R),V=R.material;if(Array.isArray(V)){const q=z.groups;for(let G=0,W=q.length;G<W;G++){const H=q[G],rt=V[H.materialIndex];if(rt&&rt.visible){const L=M(R,rt,y,x);R.onBeforeShadow(r,R,b,P,z,L,H),r.renderBufferDirect(P,null,z,L,R,H),R.onAfterShadow(r,R,b,P,z,L,H)}}}else if(V.visible){const q=M(R,V,y,x);R.onBeforeShadow(r,R,b,P,z,q,null),r.renderBufferDirect(P,null,z,q,R,null),R.onAfterShadow(r,R,b,P,z,q,null)}}const B=R.children;for(let z=0,V=B.length;z<V;z++)v(B[z],b,P,y,x)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],x=R.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Uy={[Oc]:Fc,[Bc]:Hc,[zc]:Vc,[Os]:kc,[Fc]:Oc,[Hc]:Bc,[Vc]:zc,[kc]:Os};function Ny(r,t){function e(){let I=!1;const mt=new ve;let $=null;const et=new ve(0,0,0,0);return{setMask:function(pt){$!==pt&&!I&&(r.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){I=pt},setClear:function(pt,vt,Wt,ue,Le){Le===!0&&(pt*=ue,vt*=ue,Wt*=ue),mt.set(pt,vt,Wt,ue),et.equals(mt)===!1&&(r.clearColor(pt,vt,Wt,ue),et.copy(mt))},reset:function(){I=!1,$=null,et.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,$=null,et=null,pt=null;return{setReversed:function(vt){if(mt!==vt){const Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ue=pt;pt=null,this.setClear(ue)}mt=vt},getReversed:function(){return mt},setTest:function(vt){vt?ot(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(vt){$!==vt&&!I&&(r.depthMask(vt),$=vt)},setFunc:function(vt){if(mt&&(vt=Uy[vt]),et!==vt){switch(vt){case Oc:r.depthFunc(r.NEVER);break;case Fc:r.depthFunc(r.ALWAYS);break;case Bc:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case zc:r.depthFunc(r.EQUAL);break;case kc:r.depthFunc(r.GEQUAL);break;case Hc:r.depthFunc(r.GREATER);break;case Vc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=vt}},setLocked:function(vt){I=vt},setClear:function(vt){pt!==vt&&(mt&&(vt=1-vt),r.clearDepth(vt),pt=vt)},reset:function(){I=!1,$=null,et=null,pt=null,mt=!1}}}function i(){let I=!1,mt=null,$=null,et=null,pt=null,vt=null,Wt=null,ue=null,Le=null;return{setTest:function(Tt){I||(Tt?ot(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Tt){mt!==Tt&&!I&&(r.stencilMask(Tt),mt=Tt)},setFunc:function(Tt,Dt,Kt){($!==Tt||et!==Dt||pt!==Kt)&&(r.stencilFunc(Tt,Dt,Kt),$=Tt,et=Dt,pt=Kt)},setOp:function(Tt,Dt,Kt){(vt!==Tt||Wt!==Dt||ue!==Kt)&&(r.stencilOp(Tt,Dt,Kt),vt=Tt,Wt=Dt,ue=Kt)},setLocked:function(Tt){I=Tt},setClear:function(Tt){Le!==Tt&&(r.clearStencil(Tt),Le=Tt)},reset:function(){I=!1,mt=null,$=null,et=null,pt=null,vt=null,Wt=null,ue=null,Le=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,M=null,v=null,w=null,R=null,b=new ae(0,0,0),P=0,y=!1,x=null,D=null,B=null,z=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=W>=2);let rt=null,L={};const ct=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),$t=new ve().fromArray(ct),Z=new ve().fromArray(It);function st(I,mt,$,et){const pt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(I,vt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<$;Wt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(mt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return vt}const xt={};xt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(Os),it(!1),U(Bh),ot(r.CULL_FACE),C(rr);function ot(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function wt(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Pt(I,mt){return h[I]!==mt?(r.bindFramebuffer(I,mt),h[I]=mt,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=mt),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ot(I,mt){let $=d,et=!1;if(I){$=f.get(mt),$===void 0&&($=[],f.set(mt,$));const pt=I.textures;if($.length!==pt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Wt=pt.length;vt<Wt;vt++)$[vt]=r.COLOR_ATTACHMENT0+vt;$.length=pt.length,et=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,et=!0);et&&r.drawBuffers($)}function Vt(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const j={[Dr]:r.FUNC_ADD,[o_]:r.FUNC_SUBTRACT,[a_]:r.FUNC_REVERSE_SUBTRACT};j[l_]=r.MIN,j[c_]=r.MAX;const Q={[u_]:r.ZERO,[h_]:r.ONE,[f_]:r.SRC_COLOR,[Uc]:r.SRC_ALPHA,[v_]:r.SRC_ALPHA_SATURATE,[__]:r.DST_COLOR,[p_]:r.DST_ALPHA,[d_]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[g_]:r.ONE_MINUS_DST_COLOR,[m_]:r.ONE_MINUS_DST_ALPHA,[x_]:r.CONSTANT_COLOR,[M_]:r.ONE_MINUS_CONSTANT_COLOR,[y_]:r.CONSTANT_ALPHA,[S_]:r.ONE_MINUS_CONSTANT_ALPHA};function C(I,mt,$,et,pt,vt,Wt,ue,Le,Tt){if(I===rr){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(ot(r.BLEND),g=!0),I!==s_){if(I!==m||Tt!==y){if((p!==Dr||v!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,v=Dr),Tt)switch(I){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.ONE,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,M=null,w=null,R=null,b.set(0,0,0),P=0,m=I,y=Tt}return}pt=pt||mt,vt=vt||$,Wt=Wt||et,(mt!==p||pt!==v)&&(r.blendEquationSeparate(j[mt],j[pt]),p=mt,v=pt),($!==T||et!==M||vt!==w||Wt!==R)&&(r.blendFuncSeparate(Q[$],Q[et],Q[vt],Q[Wt]),T=$,M=et,w=vt,R=Wt),(ue.equals(b)===!1||Le!==P)&&(r.blendColor(ue.r,ue.g,ue.b,Le),b.copy(ue),P=Le),m=I,y=!1}function Et(I,mt){I.side===Ni?wt(r.CULL_FACE):ot(r.CULL_FACE);let $=I.side===Tn;mt&&($=!$),it($),I.blending===As&&I.transparent===!1?C(rr):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const et=I.stencilWrite;a.setTest(et),et&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function U(I){I!==n_?(ot(r.CULL_FACE),I!==D&&(I===Bh?r.cullFace(r.BACK):I===i_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),D=I}function at(I){I!==B&&(G&&r.lineWidth(I),B=I)}function Ut(I,mt,$){I?(ot(r.POLYGON_OFFSET_FILL),(z!==mt||V!==$)&&(r.polygonOffset(mt,$),z=mt,V=$)):wt(r.POLYGON_OFFSET_FILL)}function gt(I){I?ot(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function A(I){I===void 0&&(I=r.TEXTURE0+q-1),rt!==I&&(r.activeTexture(I),rt=I)}function S(I,mt,$){$===void 0&&(rt===null?$=r.TEXTURE0+q-1:$=rt);let et=L[$];et===void 0&&(et={type:void 0,texture:void 0},L[$]=et),(et.type!==I||et.texture!==mt)&&(rt!==$&&(r.activeTexture($),rt=$),r.bindTexture(I,mt||xt[I]),et.type=I,et.texture=mt)}function k(){const I=L[rt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){$t.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function bt(I){Z.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Zt(I,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let et=$.get(I);et===void 0&&(et=r.getUniformBlockIndex(mt,I.name),$.set(I,et))}function Gt(I,mt){const et=c.get(mt).get(I);l.get(mt)!==et&&(r.uniformBlockBinding(mt,et,I.__bindingPointIndex),l.set(mt,et))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},rt=null,L={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,M=null,v=null,w=null,R=null,b=new ae(0,0,0),P=0,y=!1,x=null,D=null,B=null,z=null,V=null,$t.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:wt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:Vt,setBlending:C,setMaterial:Et,setFlipSided:it,setCullFace:U,setLineWidth:at,setPolygonOffset:Ut,setScissorTest:gt,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:ht,texImage3D:zt,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:Yt,texStorage3D:lt,texSubImage2D:J,texSubImage3D:dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ft,viewport:bt,reset:ce}}function Oy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return d?new OffscreenCanvas(A,S):hl("canvas")}function g(A,S,k){let K=1;const tt=gt(A);if((tt.width>k||tt.height>k)&&(K=k/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(K*tt.width),dt=Math.floor(K*tt.height);h===void 0&&(h=_(J,dt));const ut=S?_(J,dt):h;return ut.width=J,ut.height=dt,ut.getContext("2d").drawImage(A,0,0,J,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+dt+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(A,S,k,K,tt=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===r.RED&&(k===r.FLOAT&&(J=r.R32F),k===r.HALF_FLOAT&&(J=r.R16F),k===r.UNSIGNED_BYTE&&(J=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.R8UI),k===r.UNSIGNED_SHORT&&(J=r.R16UI),k===r.UNSIGNED_INT&&(J=r.R32UI),k===r.BYTE&&(J=r.R8I),k===r.SHORT&&(J=r.R16I),k===r.INT&&(J=r.R32I)),S===r.RG&&(k===r.FLOAT&&(J=r.RG32F),k===r.HALF_FLOAT&&(J=r.RG16F),k===r.UNSIGNED_BYTE&&(J=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RG8UI),k===r.UNSIGNED_SHORT&&(J=r.RG16UI),k===r.UNSIGNED_INT&&(J=r.RG32UI),k===r.BYTE&&(J=r.RG8I),k===r.SHORT&&(J=r.RG16I),k===r.INT&&(J=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGB8UI),k===r.UNSIGNED_SHORT&&(J=r.RGB16UI),k===r.UNSIGNED_INT&&(J=r.RGB32UI),k===r.BYTE&&(J=r.RGB8I),k===r.SHORT&&(J=r.RGB16I),k===r.INT&&(J=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),k===r.UNSIGNED_INT&&(J=r.RGBA32UI),k===r.BYTE&&(J=r.RGBA8I),k===r.SHORT&&(J=r.RGBA16I),k===r.INT&&(J=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),S===r.RGBA){const dt=tt?cl:fe.getTransfer(K);k===r.FLOAT&&(J=r.RGBA32F),k===r.HALF_FLOAT&&(J=r.RGBA16F),k===r.UNSIGNED_BYTE&&(J=dt===ge?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,S){let k;return A?S===null||S===Xr||S===zs?k=r.DEPTH24_STENCIL8:S===Fi?k=r.DEPTH32F_STENCIL8:S===Oo&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xr||S===zs?k=r.DEPTH_COMPONENT24:S===Fi?k=r.DEPTH_COMPONENT32F:S===Oo&&(k=r.DEPTH_COMPONENT16),k}function w(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==di&&A.minFilter!==xi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&u.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),x(S)}function P(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,K=f.get(k);if(K){const tt=K[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(A),Object.keys(K).length===0&&f.delete(k)}n.remove(A)}function y(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const k=A.source,K=f.get(k);delete K[S.__cacheKey],o.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let tt=0;tt<S.__webglFramebuffer[K].length;tt++)r.deleteFramebuffer(S.__webglFramebuffer[K][tt]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let K=0,tt=k.length;K<tt;K++){const J=n.get(k[K]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(A)}let D=0;function B(){D=0}function z(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const k=n.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,A,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function G(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Z(k,A,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function W(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Z(k,A,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function H(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){st(k,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const rt={[Xc]:r.REPEAT,[Ur]:r.CLAMP_TO_EDGE,[Yc]:r.MIRRORED_REPEAT},L={[di]:r.NEAREST,[L_]:r.NEAREST_MIPMAP_NEAREST,[na]:r.NEAREST_MIPMAP_LINEAR,[xi]:r.LINEAR,[Bl]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},ct={[O_]:r.NEVER,[V_]:r.ALWAYS,[F_]:r.LESS,[$d]:r.LEQUAL,[B_]:r.EQUAL,[H_]:r.GEQUAL,[z_]:r.GREATER,[k_]:r.NOTEQUAL};function It(A,S){if(S.type===Fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xi||S.magFilter===Bl||S.magFilter===na||S.magFilter===Nr||S.minFilter===xi||S.minFilter===Bl||S.minFilter===na||S.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,rt[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,rt[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,rt[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,L[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===di||S.minFilter!==na&&S.minFilter!==Nr||S.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $t(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const J=V(S);if(J!==A.__cacheKey){tt[J]===void 0&&(tt[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[J].usedTimes++;const dt=tt[A.__cacheKey];dt!==void 0&&(tt[A.__cacheKey].usedTimes--,dt.usedTimes===0&&y(S)),A.__cacheKey=J,A.__webglTexture=tt[J].texture}return k}function Z(A,S,k){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const tt=$t(A,S),J=S.source;e.bindTexture(K,A.__webglTexture,r.TEXTURE0+k);const dt=n.get(J);if(J.version!==dt.__version||tt===!0){e.activeTexture(r.TEXTURE0+k);const ut=fe.getPrimaries(fe.workingColorSpace),_t=S.colorSpace===ji?null:fe.getPrimaries(S.colorSpace),Yt=S.colorSpace===ji||ut===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let lt=g(S.image,!1,i.maxTextureSize);lt=Ut(S,lt);const ht=s.convert(S.format,S.colorSpace),zt=s.convert(S.type);let Ft=M(S.internalFormat,ht,zt,S.colorSpace,S.isVideoTexture);It(K,S);let bt;const Zt=S.mipmaps,Gt=S.isVideoTexture!==!0,ce=dt.__version===void 0||tt===!0,I=J.dataReady,mt=w(S,lt);if(S.isDepthTexture)Ft=v(S.format===ks,S.type),ce&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,Ft,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Ft,lt.width,lt.height,0,ht,zt,null));else if(S.isDataTexture)if(Zt.length>0){Gt&&ce&&e.texStorage2D(r.TEXTURE_2D,mt,Ft,Zt[0].width,Zt[0].height);for(let $=0,et=Zt.length;$<et;$++)bt=Zt[$],Gt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ht,zt,bt.data):e.texImage2D(r.TEXTURE_2D,$,Ft,bt.width,bt.height,0,ht,zt,bt.data);S.generateMipmaps=!1}else Gt?(ce&&e.texStorage2D(r.TEXTURE_2D,mt,Ft,lt.width,lt.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,ht,zt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Ft,lt.width,lt.height,0,ht,zt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ft,Zt[0].width,Zt[0].height,lt.depth);for(let $=0,et=Zt.length;$<et;$++)if(bt=Zt[$],S.format!==hi)if(ht!==null)if(Gt){if(I)if(S.layerUpdates.size>0){const pt=Tf(bt.width,bt.height,S.format,S.type);for(const vt of S.layerUpdates){const Wt=bt.data.subarray(vt*pt/bt.data.BYTES_PER_ELEMENT,(vt+1)*pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,vt,bt.width,bt.height,1,ht,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,lt.depth,ht,bt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ft,bt.width,bt.height,lt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,lt.depth,ht,zt,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ft,bt.width,bt.height,lt.depth,0,ht,zt,bt.data)}else{Gt&&ce&&e.texStorage2D(r.TEXTURE_2D,mt,Ft,Zt[0].width,Zt[0].height);for(let $=0,et=Zt.length;$<et;$++)bt=Zt[$],S.format!==hi?ht!==null?Gt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ht,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ht,zt,bt.data):e.texImage2D(r.TEXTURE_2D,$,Ft,bt.width,bt.height,0,ht,zt,bt.data)}else if(S.isDataArrayTexture)if(Gt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ft,lt.width,lt.height,lt.depth),I)if(S.layerUpdates.size>0){const $=Tf(lt.width,lt.height,S.format,S.type);for(const et of S.layerUpdates){const pt=lt.data.subarray(et*$/lt.data.BYTES_PER_ELEMENT,(et+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,ht,zt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,ht,zt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,lt.width,lt.height,lt.depth,0,ht,zt,lt.data);else if(S.isData3DTexture)Gt?(ce&&e.texStorage3D(r.TEXTURE_3D,mt,Ft,lt.width,lt.height,lt.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,ht,zt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Ft,lt.width,lt.height,lt.depth,0,ht,zt,lt.data);else if(S.isFramebufferTexture){if(ce)if(Gt)e.texStorage2D(r.TEXTURE_2D,mt,Ft,lt.width,lt.height);else{let $=lt.width,et=lt.height;for(let pt=0;pt<mt;pt++)e.texImage2D(r.TEXTURE_2D,pt,Ft,$,et,0,ht,zt,null),$>>=1,et>>=1}}else if(Zt.length>0){if(Gt&&ce){const $=gt(Zt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Ft,$.width,$.height)}for(let $=0,et=Zt.length;$<et;$++)bt=Zt[$],Gt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ht,zt,bt):e.texImage2D(r.TEXTURE_2D,$,Ft,ht,zt,bt);S.generateMipmaps=!1}else if(Gt){if(ce){const $=gt(lt);e.texStorage2D(r.TEXTURE_2D,mt,Ft,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,zt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Ft,ht,zt,lt);m(S)&&p(K),dt.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function st(A,S,k){if(S.image.length!==6)return;const K=$t(A,S),tt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const J=n.get(tt);if(tt.version!==J.__version||K===!0){e.activeTexture(r.TEXTURE0+k);const dt=fe.getPrimaries(fe.workingColorSpace),ut=S.colorSpace===ji?null:fe.getPrimaries(S.colorSpace),_t=S.colorSpace===ji||dt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let et=0;et<6;et++)!Yt&&!lt?ht[et]=g(S.image[et],!0,i.maxCubemapSize):ht[et]=lt?S.image[et].image:S.image[et],ht[et]=Ut(S,ht[et]);const zt=ht[0],Ft=s.convert(S.format,S.colorSpace),bt=s.convert(S.type),Zt=M(S.internalFormat,Ft,bt,S.colorSpace),Gt=S.isVideoTexture!==!0,ce=J.__version===void 0||K===!0,I=tt.dataReady;let mt=w(S,zt);It(r.TEXTURE_CUBE_MAP,S);let $;if(Yt){Gt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Zt,zt.width,zt.height);for(let et=0;et<6;et++){$=ht[et].mipmaps;for(let pt=0;pt<$.length;pt++){const vt=$[pt];S.format!==hi?Ft!==null?Gt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,vt.width,vt.height,Ft,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Zt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,vt.width,vt.height,Ft,bt,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Zt,vt.width,vt.height,0,Ft,bt,vt.data)}}}else{if($=S.mipmaps,Gt&&ce){$.length>0&&mt++;const et=gt(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Zt,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Gt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ht[et].width,ht[et].height,Ft,bt,ht[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,ht[et].width,ht[et].height,0,Ft,bt,ht[et].data);for(let pt=0;pt<$.length;pt++){const Wt=$[pt].image[et].image;Gt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Wt.width,Wt.height,Ft,bt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Zt,Wt.width,Wt.height,0,Ft,bt,Wt.data)}}else{Gt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,bt,ht[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,Ft,bt,ht[et]);for(let pt=0;pt<$.length;pt++){const vt=$[pt];Gt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ft,bt,vt.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Zt,Ft,bt,vt.image[et])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),J.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,k,K,tt,J){const dt=s.convert(k.format,k.colorSpace),ut=s.convert(k.type),_t=M(k.internalFormat,dt,ut,k.colorSpace),Yt=n.get(S),lt=n.get(k);if(lt.__renderTarget=S,!Yt.__hasExternalTextures){const ht=Math.max(1,S.width>>J),zt=Math.max(1,S.height>>J);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,_t,ht,zt,S.depth,0,dt,ut,null):e.texImage2D(tt,J,_t,ht,zt,0,dt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),U(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,tt,lt.__webglTexture,0,it(S)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,tt,lt.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,tt=K&&K.isDepthTexture?K.type:null,J=v(S.stencilBuffer,tt),dt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=it(S);U(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,J,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,A)}else{const K=S.textures;for(let tt=0;tt<K.length;tt++){const J=K[tt],dt=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),_t=M(J.internalFormat,dt,ut,J.colorSpace),Yt=it(S);k&&U(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,_t,S.width,S.height):U(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,_t,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,_t,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const tt=K.__webglTexture,J=it(S);if(S.depthTexture.format===ws)U(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(S.depthTexture.format===ks)U(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),ot(S.__webglDepthbuffer[K],A,!1);else{const tt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ot(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(A,S,k){const K=n.get(A);S!==void 0&&xt(K.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Pt(A)}function Vt(A){const S=A.texture,k=n.get(A),K=n.get(S);A.addEventListener("dispose",b);const tt=A.textures,J=A.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let _t=0;_t<S.mipmaps.length;_t++)k.__webglFramebuffer[ut][_t]=r.createFramebuffer()}else k.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)k.__webglFramebuffer[ut]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(dt)for(let ut=0,_t=tt.length;ut<_t;ut++){const Yt=n.get(tt[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&U(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const _t=tt[ut];k.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const Yt=s.convert(_t.format,_t.colorSpace),lt=s.convert(_t.type),ht=M(_t.internalFormat,Yt,lt,_t.colorSpace,A.isXRRenderTarget===!0),zt=it(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,ht,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),It(r.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(k.__webglFramebuffer[ut][_t],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else xt(k.__webglFramebuffer[ut],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ut=0,_t=tt.length;ut<_t;ut++){const Yt=tt[ut],lt=n.get(Yt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),It(r.TEXTURE_2D,Yt),xt(k.__webglFramebuffer,A,Yt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),m(Yt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),It(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(k.__webglFramebuffer[_t],A,S,r.COLOR_ATTACHMENT0,ut,_t);else xt(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}A.depthBuffer&&Pt(A)}function j(A){const S=A.textures;for(let k=0,K=S.length;k<K;k++){const tt=S[k];if(m(tt)){const J=T(A),dt=n.get(tt).__webglTexture;e.bindTexture(J,dt),p(J),e.unbindTexture()}}}const Q=[],C=[];function Et(A){if(A.samples>0){if(U(A)===!1){const S=A.textures,k=A.width,K=A.height;let tt=r.COLOR_BUFFER_BIT;const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(A),ut=S.length>1;if(ut)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);const Yt=n.get(S[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,tt,r.NEAREST),l===!0&&(Q.length=0,C.length=0,Q.push(r.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(J),C.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,C)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);const Yt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function it(A){return Math.min(i.maxSamples,A.samples)}function U(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function Ut(A,S){const k=A.colorSpace,K=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Hs&&k!==ji&&(fe.getTransfer(k)===ge?(K!==hi||tt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=U}function Fy(r,t){function e(n,i=ji){let s;const o=fe.getTransfer(i);if(n===Vi)return r.UNSIGNED_BYTE;if(n===Ju)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return r.BYTE;if(n===Bd)return r.SHORT;if(n===Oo)return r.UNSIGNED_SHORT;if(n===Ku)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Ko)return r.HALF_FLOAT;if(n===kd)return r.ALPHA;if(n===Hd)return r.RGB;if(n===hi)return r.RGBA;if(n===Vd)return r.LUMINANCE;if(n===Gd)return r.LUMINANCE_ALPHA;if(n===ws)return r.DEPTH_COMPONENT;if(n===ks)return r.DEPTH_STENCIL;if(n===Wd)return r.RED;if(n===Qu)return r.RED_INTEGER;if(n===Xd)return r.RG;if(n===th)return r.RG_INTEGER;if(n===eh)return r.RGBA_INTEGER;if(n===Ya||n===qa||n===$a||n===Za)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===$c||n===Zc||n===Kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===jc||n===Qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jc||n===jc)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===pu||n===mu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ka)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yd||n===_u||n===gu||n===vu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const By={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ho;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
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

}`;class Hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new bn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ur({vertexShader:zy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fi(new Pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vy extends Zs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new Hy,m=e.getContextAttributes();let p=null,T=null;const M=[],v=[],w=new St;let R=null;const b=new zn;b.viewport=new ve;const P=new zn;P.viewport=new ve;const y=[b,P],x=new l0;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=M[Z];return st===void 0&&(st=new xc,M[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=M[Z];return st===void 0&&(st=new xc,M[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=M[Z];return st===void 0&&(st=new xc,M[Z]=st),st.getHandSpace()};function z(Z){const st=v.indexOf(Z.inputSource);if(st===-1)return;const xt=M[st];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||o),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<M.length;Z++){const st=v[Z];st!==null&&(v[Z]=null,M[Z].disconnect(st))}D=null,B=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,T=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Yr(d.framebufferWidth,d.framebufferHeight,{format:hi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,xt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ks:ws,xt=m.stencil?zs:Xr);const wt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Yr(f.textureWidth,f.textureHeight,{format:hi,type:Vi,depthTexture:new lp(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Z){for(let st=0;st<Z.removed.length;st++){const xt=Z.removed[st],ot=v.indexOf(xt);ot>=0&&(v[ot]=null,M[ot].disconnect(xt))}for(let st=0;st<Z.added.length;st++){const xt=Z.added[st];let ot=v.indexOf(xt);if(ot===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=v.length){v.push(xt),ot=Pt;break}else if(v[Pt]===null){v[Pt]=xt,ot=Pt;break}if(ot===-1)break}const wt=M[ot];wt&&wt.connect(xt)}}const G=new O,W=new O;function H(Z,st,xt){G.setFromMatrixPosition(st.matrixWorld),W.setFromMatrixPosition(xt.matrixWorld);const ot=G.distanceTo(W),wt=st.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),Vt=wt[14]/(wt[10]+1),j=(wt[9]+1)/wt[5],Q=(wt[9]-1)/wt[5],C=(wt[8]-1)/wt[0],Et=(Pt[8]+1)/Pt[0],it=Ot*C,U=Ot*Et,at=ot/(-C+Et),Ut=at*-C;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ut),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const gt=Ot+at,A=Vt+at,S=it-Ut,k=U+(ot-Ut),K=j*Vt/A*gt,tt=Q*Vt/A*gt;Z.projectionMatrix.makePerspective(S,k,K,tt,gt,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let st=Z.near,xt=Z.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),x.near=P.near=b.near=st,x.far=P.far=b.far=xt,(D!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,B=x.far),b.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,x.layers.mask=b.layers.mask|P.layers.mask;const ot=Z.parent,wt=x.cameras;rt(x,ot);for(let Pt=0;Pt<wt.length;Pt++)rt(wt[Pt],ot);wt.length===2?H(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),L(Z,x,ot)};function L(Z,st,xt){xt===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ct=null;function It(Z,st){if(u=st.getViewerPose(c||o),_=st,u!==null){const xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ot=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Pt=0;Pt<xt.length;Pt++){const Ot=xt[Pt];let Vt=null;if(d!==null)Vt=d.getViewport(Ot);else{const Q=h.getViewSubImage(f,Ot);Vt=Q.viewport,Pt===0&&(t.setRenderTargetTextures(T,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(T))}let j=y[Pt];j===void 0&&(j=new zn,j.layers.enable(Pt),j.viewport=new ve,y[Pt]=j),j.matrix.fromArray(Ot.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ot.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Pt===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(j)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Pt=h.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(t,Pt,i.renderState)}}for(let xt=0;xt<M.length;xt++){const ot=v[xt],wt=M[xt];ot!==null&&wt!==void 0&&wt.update(ot,st,c||o)}ct&&ct(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const $t=new Mp;$t.setAnimationLoop(It),this.setAnimationLoop=function(Z){ct=Z},this.dispose=function(){}}}const Er=new Ei,Gy=new Te;function Wy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ip(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),M=T.envMap,v=T.envMapRotation;M&&(m.envMap.value=M,Er.copy(v),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),m.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Er)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xy(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const v=M.program;n.uniformBlockBinding(T,v)}function c(T,M){let v=i[T.id];v===void 0&&(_(T),v=u(T),i[T.id]=v,T.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(T,w);const R=t.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const M=h();T.__bindingPointIndex=M;const v=r.createBuffer(),w=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=i[T.id],v=T.uniforms,w=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let R=0,b=v.length;R<b;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,x=P.length;y<x;y++){const D=P[y];if(d(D,R,y,w)===!0){const B=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let q=0;q<z.length;q++){const G=z[q],W=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,M,v,w){const R=T.value,b=M+"_"+v;if(w[b]===void 0)return typeof R=="number"||typeof R=="boolean"?w[b]=R:w[b]=R.clone(),!0;{const P=w[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(T){const M=T.uniforms;let v=0;const w=16;for(let b=0,P=M.length;b<P;b++){const y=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,D=y.length;x<D;x++){const B=y[x],z=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=z.length;V<q;V++){const G=z[V],W=g(G),H=v%w,rt=H%W.boundary,L=H+rt;v+=rt,L!==0&&w-L<W.storage&&(v+=w-L),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=W.storage}}}const R=v%w;return R>0&&(v+=w-R),T.__size=v,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Yy{constructor(t={}){const{canvas:e=W_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let w=!1,R=0,b=0,P=null,y=-1,x=null;const D=new ve,B=new ve;let z=null;const V=new ae(0);let q=0,G=e.width,W=e.height,H=1,rt=null,L=null;const ct=new ve(0,0,G,W),It=new ve(0,0,G,W);let $t=!1;const Z=new ih;let st=!1,xt=!1;const ot=new Te,wt=new Te,Pt=new O,Ot=new ve,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function Q(){return P===null?H:1}let C=n;function Et(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zu}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),C===null){const N="webgl2";if(C=Et(N,E),C===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,U,at,Ut,gt,A,S,k,K,tt,J,dt,ut,_t,Yt,lt,ht,zt,Ft,bt,Zt,Gt,ce,I;function mt(){it=new eM(C),it.init(),Gt=new Fy(C,it),U=new Zx(C,it,t,Gt),at=new Ny(C,it),U.reverseDepthBuffer&&f&&at.buffers.depth.setReversed(!0),Ut=new rM(C),gt=new Sy,A=new Oy(C,it,at,gt,U,Gt,Ut),S=new Jx(v),k=new tM(v),K=new h0(C),ce=new qx(C,K),tt=new nM(C,K,Ut,ce),J=new oM(C,tt,K,Ut),Ft=new sM(C,U,A),lt=new Kx(gt),dt=new yy(v,S,k,it,U,ce,lt),ut=new Wy(v,gt),_t=new Ty,Yt=new Py(it),zt=new Yx(v,S,k,at,J,d,l),ht=new Iy(v,J,U),I=new Xy(C,Ut,U,at),bt=new $x(C,it,Ut),Zt=new iM(C,it,Ut),Ut.programs=dt.programs,v.capabilities=U,v.extensions=it,v.properties=gt,v.renderLists=_t,v.shadowMap=ht,v.state=at,v.info=Ut}mt();const $=new Vy(v,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(G,W,!1))},this.getSize=function(E){return E.set(G,W)},this.setSize=function(E,N,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,W=N,e.width=Math.floor(E*H),e.height=Math.floor(N*H),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(G*H,W*H).floor()},this.setDrawingBufferSize=function(E,N,X){G=E,W=N,H=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,N,X,Y){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,N,X,Y),at.viewport(D.copy(ct).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,N,X,Y){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,N,X,Y),at.scissor(B.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){at.setScissorTest($t=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,N=!0,X=!0){let Y=0;if(E){let F=!1;if(P!==null){const nt=P.texture.format;F=nt===eh||nt===th||nt===Qu}if(F){const nt=P.texture.type,ft=nt===Vi||nt===Xr||nt===Oo||nt===zs||nt===Ju||nt===ju,At=zt.getClearColor(),Rt=zt.getClearAlpha(),kt=At.r,Bt=At.g,Nt=At.b;ft?(_[0]=kt,_[1]=Bt,_[2]=Nt,_[3]=Rt,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=kt,g[1]=Bt,g[2]=Nt,g[3]=Rt,C.clearBufferiv(C.COLOR,0,g))}else Y|=C.COLOR_BUFFER_BIT}N&&(Y|=C.DEPTH_BUFFER_BIT),X&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),zt.dispose(),_t.dispose(),Yt.dispose(),gt.dispose(),S.dispose(),k.dispose(),J.dispose(),ce.dispose(),I.dispose(),dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Mt),$.removeEventListener("sessionend",qt),Lt.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Ut.autoReset,N=ht.enabled,X=ht.autoUpdate,Y=ht.needsUpdate,F=ht.type;mt(),Ut.autoReset=E,ht.enabled=N,ht.autoUpdate=X,ht.needsUpdate=Y,ht.type=F}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const N=E.target;N.removeEventListener("dispose",Wt),ue(N)}function ue(E){Le(E),gt.remove(E)}function Le(E){const N=gt.get(E).programs;N!==void 0&&(N.forEach(function(X){dt.releaseProgram(X)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,Y,F,nt){N===null&&(N=Vt);const ft=F.isMesh&&F.matrixWorld.determinant()<0,At=Ln(E,N,X,Y,F);at.setMaterial(Y,ft);let Rt=X.index,kt=1;if(Y.wireframe===!0){if(Rt=tt.getWireframeAttribute(X),Rt===void 0)return;kt=2}const Bt=X.drawRange,Nt=X.attributes.position;let ne=Bt.start*kt,Qt=(Bt.start+Bt.count)*kt;nt!==null&&(ne=Math.max(ne,nt.start*kt),Qt=Math.min(Qt,(nt.start+nt.count)*kt)),Rt!==null?(ne=Math.max(ne,0),Qt=Math.min(Qt,Rt.count)):Nt!=null&&(ne=Math.max(ne,0),Qt=Math.min(Qt,Nt.count));const Be=Qt-ne;if(Be<0||Be===1/0)return;ce.setup(F,Y,At,X,Rt);let Ie,he=bt;if(Rt!==null&&(Ie=K.get(Rt),he=Zt,he.setIndex(Ie)),F.isMesh)Y.wireframe===!0?(at.setLineWidth(Y.wireframeLinewidth*Q()),he.setMode(C.LINES)):he.setMode(C.TRIANGLES);else if(F.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),at.setLineWidth(Ht*Q()),F.isLineSegments?he.setMode(C.LINES):F.isLineLoop?he.setMode(C.LINE_LOOP):he.setMode(C.LINE_STRIP)}else F.isPoints?he.setMode(C.POINTS):F.isSprite&&he.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)he.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))he.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ht=F._multiDrawStarts,je=F._multiDrawCounts,pe=F._multiDrawCount,oi=Rt?K.get(Rt).bytesPerElement:1,Qr=gt.get(Y).currentProgram.getUniforms();for(let In=0;In<pe;In++)Qr.setValue(C,"_gl_DrawID",In),he.render(Ht[In]/oi,je[In])}else if(F.isInstancedMesh)he.renderInstances(ne,Be,F.count);else if(X.isInstancedBufferGeometry){const Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,je=Math.min(X.instanceCount,Ht);he.renderInstances(ne,Be,je)}else he.render(ne,Be)};function Tt(E,N,X){E.transparent===!0&&E.side===Ni&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,xe(E,N,X),E.side=cr,E.needsUpdate=!0,xe(E,N,X),E.side=Ni):xe(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),p=Yt.get(X),p.init(N),M.push(p),X.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==X&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const Y=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){const At=nt[ft];Tt(At,X,F),Y.add(At)}else Tt(nt,X,F),Y.add(nt)}),M.pop(),p=null,Y},this.compileAsync=function(E,N,X=null){const Y=this.compile(E,N,X);return new Promise(F=>{function nt(){if(Y.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){F(E);return}setTimeout(nt,10)}it.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Dt=null;function Kt(E){Dt&&Dt(E)}function Mt(){Lt.stop()}function qt(){Lt.start()}const Lt=new Mp;Lt.setAnimationLoop(Kt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(E){Dt=E,$.setAnimationLoop(E),E===null?Lt.stop():Lt.start()},$.addEventListener("sessionstart",Mt),$.addEventListener("sessionend",qt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,P),p=Yt.get(E,M.length),p.init(N),M.push(p),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(wt),xt=this.localClippingEnabled,st=lt.init(this.clippingPlanes,xt),m=_t.get(E,T.length),m.init(),T.push(m),$.enabled===!0&&$.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Xt(nt,N,-1/0,v.sortObjects)}Xt(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,L),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&zt.addToRenderList(m,E),this.info.render.frame++,st===!0&&lt.beginShadows();const X=p.state.shadowsArray;ht.render(X,E,N),st===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const nt=N.cameras;if(F.length>0)for(let ft=0,At=nt.length;ft<At;ft++){const Rt=nt[ft];ee(Y,F,E,Rt)}j&&zt.render(E);for(let ft=0,At=nt.length;ft<At;ft++){const Rt=nt[ft];Ne(m,E,Rt,Rt.viewport)}}else F.length>0&&ee(Y,F,E,N),j&&zt.render(E),Ne(m,E,N);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,N),ce.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Xt(E,N,X,Y){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){Y&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const ft=J.update(E),At=E.material;At.visible&&m.push(E,ft,At,X,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const ft=J.update(E),At=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ot.copy(ft.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(At)){const Rt=ft.groups;for(let kt=0,Bt=Rt.length;kt<Bt;kt++){const Nt=Rt[kt],ne=At[Nt.materialIndex];ne&&ne.visible&&m.push(E,ft,ne,X,Ot.z,Nt)}}else At.visible&&m.push(E,ft,At,X,Ot.z,null)}}const nt=E.children;for(let ft=0,At=nt.length;ft<At;ft++)Xt(nt[ft],N,X,Y)}function Ne(E,N,X,Y){const F=E.opaque,nt=E.transmissive,ft=E.transparent;p.setupLightsView(X),st===!0&&lt.setGlobalState(v.clippingPlanes,X),Y&&at.viewport(D.copy(Y)),F.length>0&&Ee(F,N,X),nt.length>0&&Ee(nt,N,X),ft.length>0&&Ee(ft,N,X),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function ee(E,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Yr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ko:Vi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const nt=p.state.transmissionRenderTarget[Y.id],ft=Y.viewport||D;nt.setSize(ft.z,ft.w);const At=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),j&&zt.render(X);const Rt=v.toneMapping;v.toneMapping=sr;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),st===!0&&lt.setGlobalState(v.clippingPlanes,Y),Ee(E,X,Y),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Nt=0,ne=N.length;Nt<ne;Nt++){const Qt=N[Nt],Be=Qt.object,Ie=Qt.geometry,he=Qt.material,Ht=Qt.group;if(he.side===Ni&&Be.layers.test(Y.layers)){const je=he.side;he.side=Tn,he.needsUpdate=!0,Ve(Be,X,Y,Ie,he,Ht),he.side=je,he.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}v.setRenderTarget(At),v.setClearColor(V,q),kt!==void 0&&(Y.viewport=kt),v.toneMapping=Rt}function Ee(E,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=E.length;F<nt;F++){const ft=E[F],At=ft.object,Rt=ft.geometry,kt=Y===null?ft.material:Y,Bt=ft.group;At.layers.test(X.layers)&&Ve(At,N,X,Rt,kt,Bt)}}function Ve(E,N,X,Y,F,nt){E.onBeforeRender(v,N,X,Y,F,nt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,X,Y,E,nt),F.transparent===!0&&F.side===Ni&&F.forceSinglePass===!1?(F.side=Tn,F.needsUpdate=!0,v.renderBufferDirect(X,N,Y,F,E,nt),F.side=cr,F.needsUpdate=!0,v.renderBufferDirect(X,N,Y,F,E,nt),F.side=Ni):v.renderBufferDirect(X,N,Y,F,E,nt),E.onAfterRender(v,N,X,Y,F,nt)}function xe(E,N,X){N.isScene!==!0&&(N=Vt);const Y=gt.get(E),F=p.state.lights,nt=p.state.shadowsArray,ft=F.state.version,At=dt.getParameters(E,F.state,nt,N,X),Rt=dt.getProgramCacheKey(At);let kt=Y.programs;Y.environment=E.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Wt),kt=new Map,Y.programs=kt);let Bt=kt.get(Rt);if(Bt!==void 0){if(Y.currentProgram===Bt&&Y.lightsStateVersion===ft)return de(E,At),Bt}else At.uniforms=dt.getUniforms(E),E.onBeforeCompile(At,v),Bt=dt.acquireProgram(At,Rt),kt.set(Rt,Bt),Y.uniforms=At.uniforms;const Nt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=lt.uniform),de(E,At),Y.needsLights=un(E),Y.lightsStateVersion=ft,Y.needsLights&&(Nt.ambientLightColor.value=F.state.ambient,Nt.lightProbe.value=F.state.probe,Nt.directionalLights.value=F.state.directional,Nt.directionalLightShadows.value=F.state.directionalShadow,Nt.spotLights.value=F.state.spot,Nt.spotLightShadows.value=F.state.spotShadow,Nt.rectAreaLights.value=F.state.rectArea,Nt.ltc_1.value=F.state.rectAreaLTC1,Nt.ltc_2.value=F.state.rectAreaLTC2,Nt.pointLights.value=F.state.point,Nt.pointLightShadows.value=F.state.pointShadow,Nt.hemisphereLights.value=F.state.hemi,Nt.directionalShadowMap.value=F.state.directionalShadowMap,Nt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Nt.spotShadowMap.value=F.state.spotShadowMap,Nt.spotLightMatrix.value=F.state.spotLightMatrix,Nt.spotLightMap.value=F.state.spotLightMap,Nt.pointShadowMap.value=F.state.pointShadowMap,Nt.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Bt,Y.uniformsList=null,Bt}function Me(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ja.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function de(E,N){const X=gt.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Ln(E,N,X,Y,F){N.isScene!==!0&&(N=Vt),A.resetTextureUnits();const nt=N.fog,ft=Y.isMeshStandardMaterial?N.environment:null,At=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Hs,Rt=(Y.isMeshStandardMaterial?k:S).get(Y.envMap||ft),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Bt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Qt=!!X.morphAttributes.color;let Be=sr;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Be=v.toneMapping);const Ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=Ie!==void 0?Ie.length:0,Ht=gt.get(Y),je=p.state.lights;if(st===!0&&(xt===!0||E!==x)){const hn=E===x&&Y.id===y;lt.setState(Y,E,hn)}let pe=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==je.state.version||Ht.outputColorSpace!==At||F.isBatchedMesh&&Ht.batching===!1||!F.isBatchedMesh&&Ht.batching===!0||F.isBatchedMesh&&Ht.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ht.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ht.instancing===!1||!F.isInstancedMesh&&Ht.instancing===!0||F.isSkinnedMesh&&Ht.skinning===!1||!F.isSkinnedMesh&&Ht.skinning===!0||F.isInstancedMesh&&Ht.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ht.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ht.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ht.instancingMorph===!1&&F.morphTexture!==null||Ht.envMap!==Rt||Y.fog===!0&&Ht.fog!==nt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==lt.numPlanes||Ht.numIntersection!==lt.numIntersection)||Ht.vertexAlphas!==kt||Ht.vertexTangents!==Bt||Ht.morphTargets!==Nt||Ht.morphNormals!==ne||Ht.morphColors!==Qt||Ht.toneMapping!==Be||Ht.morphTargetsCount!==he)&&(pe=!0):(pe=!0,Ht.__version=Y.version);let oi=Ht.currentProgram;pe===!0&&(oi=xe(Y,N,F));let Qr=!1,In=!1,to=!1;const Ae=oi.getUniforms(),Zn=Ht.uniforms;if(at.useProgram(oi.program)&&(Qr=!0,In=!0,to=!0),Y.id!==y&&(y=Y.id,In=!0),Qr||x!==E){at.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),Y_(ot),q_(ot),Ae.setValue(C,"projectionMatrix",ot)):Ae.setValue(C,"projectionMatrix",E.projectionMatrix),Ae.setValue(C,"viewMatrix",E.matrixWorldInverse);const Mn=Ae.map.cameraPosition;Mn!==void 0&&Mn.setValue(C,Pt.setFromMatrixPosition(E.matrixWorld)),U.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,In=!0,to=!0)}if(F.isSkinnedMesh){Ae.setOptional(C,F,"bindMatrix"),Ae.setOptional(C,F,"bindMatrixInverse");const hn=F.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ae.setValue(C,"boneTexture",hn.boneTexture,A))}F.isBatchedMesh&&(Ae.setOptional(C,F,"batchingTexture"),Ae.setValue(C,"batchingTexture",F._matricesTexture,A),Ae.setOptional(C,F,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",F._indirectTexture,A),Ae.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",F._colorsTexture,A));const Kn=X.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ft.update(F,X,oi),(In||Ht.receiveShadow!==F.receiveShadow)&&(Ht.receiveShadow=F.receiveShadow,Ae.setValue(C,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zn.envMap.value=Rt,Zn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(Zn.envMapIntensity.value=N.environmentIntensity),In&&(Ae.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&be(Zn,to),nt&&Y.fog===!0&&ut.refreshFogUniforms(Zn,nt),ut.refreshMaterialUniforms(Zn,Y,H,W,p.state.transmissionRenderTarget[E.id]),ja.upload(C,Me(Ht),Zn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ja.upload(C,Me(Ht),Zn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ae.setValue(C,"center",F.center),Ae.setValue(C,"modelViewMatrix",F.modelViewMatrix),Ae.setValue(C,"normalMatrix",F.normalMatrix),Ae.setValue(C,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const hn=Y.uniformsGroups;for(let Mn=0,Fl=hn.length;Mn<Fl;Mn++){const gr=hn[Mn];I.update(gr,oi),I.bind(gr,oi)}}return oi}function be(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function un(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,X){gt.get(E.texture).__webglTexture=N,gt.get(E.depthTexture).__webglTexture=X;const Y=gt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=gt.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){P=E,R=N,b=X;let Y=!0,F=null,nt=!1,ft=!1;if(E){const Rt=gt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Rt.__hasExternalTextures)A.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(Rt.__boundDepthTexture!==Nt){if(Nt!==null&&gt.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ft=!0);const Bt=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?F=Bt[N][X]:F=Bt[N],nt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[X]:F=Bt,D.copy(E.viewport),B.copy(E.scissor),z=E.scissorTest}else D.copy(ct).multiplyScalar(H).floor(),B.copy(It).multiplyScalar(H).floor(),z=$t;if(at.bindFramebuffer(C.FRAMEBUFFER,F)&&Y&&at.drawBuffers(E,F),at.viewport(D),at.scissor(B),at.setScissorTest(z),nt){const Rt=gt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,X)}else if(ft){const Rt=gt.get(E.texture),kt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,X||0,kt)}y=-1},this.readRenderTargetPixels=function(E,N,X,Y,F,nt,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(At=At[ft]),At){at.bindFramebuffer(C.FRAMEBUFFER,At);try{const Rt=E.texture,kt=Rt.format,Bt=Rt.type;if(!U.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-Y&&X>=0&&X<=E.height-F&&C.readPixels(N,X,Y,F,Gt.convert(kt),Gt.convert(Bt),nt)}finally{const Rt=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,Y,F,nt,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(At=At[ft]),At){const Rt=E.texture,kt=Rt.format,Bt=Rt.type;if(!U.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-Y&&X>=0&&X<=E.height-F){at.bindFramebuffer(C.FRAMEBUFFER,At);const Nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(N,X,Y,F,Gt.convert(kt),Gt.convert(Bt),0);const ne=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,ne);const Qt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await X_(C,Qt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(Nt),C.deleteSync(Qt),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,X=0){E.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),F=Math.floor(E.image.width*Y),nt=Math.floor(E.image.height*Y),ft=N!==null?N.x:0,At=N!==null?N.y:0;A.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,ft,At,F,nt),at.unbindTexture()};const $n=C.createFramebuffer(),Ge=C.createFramebuffer();this.copyTextureToTexture=function(E,N,X=null,Y=null,F=0,nt=null){E.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],N=arguments[2],nt=arguments[3]||0,X=null),nt===null&&(F!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=F,F=0):nt=0);let ft,At,Rt,kt,Bt,Nt,ne,Qt,Be;const Ie=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(X!==null)ft=X.max.x-X.min.x,At=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,Bt=X.min.y,Nt=X.isBox3?X.min.z:0;else{const Kn=Math.pow(2,-F);ft=Math.floor(Ie.width*Kn),At=Math.floor(Ie.height*Kn),E.isDataArrayTexture?Rt=Ie.depth:E.isData3DTexture?Rt=Math.floor(Ie.depth*Kn):Rt=1,kt=0,Bt=0,Nt=0}Y!==null?(ne=Y.x,Qt=Y.y,Be=Y.z):(ne=0,Qt=0,Be=0);const he=Gt.convert(N.format),Ht=Gt.convert(N.type);let je;N.isData3DTexture?(A.setTexture3D(N,0),je=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),je=C.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),je=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const pe=C.getParameter(C.UNPACK_ROW_LENGTH),oi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qr=C.getParameter(C.UNPACK_SKIP_PIXELS),In=C.getParameter(C.UNPACK_SKIP_ROWS),to=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ie.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ie.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nt);const Ae=E.isDataArrayTexture||E.isData3DTexture,Zn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Kn=gt.get(E),hn=gt.get(N),Mn=gt.get(Kn.__renderTarget),Fl=gt.get(hn.__renderTarget);at.bindFramebuffer(C.READ_FRAMEBUFFER,Mn.__webglFramebuffer),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let gr=0;gr<Rt;gr++)Ae&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,F,Nt+gr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,nt,Be+gr)),C.blitFramebuffer(kt,Bt,ft,At,ne,Qt,ft,At,C.DEPTH_BUFFER_BIT,C.NEAREST);at.bindFramebuffer(C.READ_FRAMEBUFFER,null),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||gt.has(E)){const Kn=gt.get(E),hn=gt.get(N);at.bindFramebuffer(C.READ_FRAMEBUFFER,$n),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ge);for(let Mn=0;Mn<Rt;Mn++)Ae?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Kn.__webglTexture,F,Nt+Mn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Kn.__webglTexture,F),Zn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,hn.__webglTexture,nt,Be+Mn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,hn.__webglTexture,nt),F!==0?C.blitFramebuffer(kt,Bt,ft,At,ne,Qt,ft,At,C.COLOR_BUFFER_BIT,C.NEAREST):Zn?C.copyTexSubImage3D(je,nt,ne,Qt,Be+Mn,kt,Bt,ft,At):C.copyTexSubImage2D(je,nt,ne,Qt,kt,Bt,ft,At);at.bindFramebuffer(C.READ_FRAMEBUFFER,null),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Zn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(je,nt,ne,Qt,Be,ft,At,Rt,he,Ht,Ie.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(je,nt,ne,Qt,Be,ft,At,Rt,he,Ie.data):C.texSubImage3D(je,nt,ne,Qt,Be,ft,At,Rt,he,Ht,Ie):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,nt,ne,Qt,ft,At,he,Ht,Ie.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,nt,ne,Qt,Ie.width,Ie.height,he,Ie.data):C.texSubImage2D(C.TEXTURE_2D,nt,ne,Qt,ft,At,he,Ht,Ie);C.pixelStorei(C.UNPACK_ROW_LENGTH,pe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qr),C.pixelStorei(C.UNPACK_SKIP_ROWS,In),C.pixelStorei(C.UNPACK_SKIP_IMAGES,to),nt===0&&N.generateMipmaps&&C.generateMipmap(je),at.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X=null,Y=null,F=0){return E.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,X,Y,F)},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),at.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,at.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},ch,tn,we,ii=1e8,Se=1/ii,bu=Math.PI*2,qy=bu/4,$y=0,Ap=Math.sqrt,Zy=Math.cos,Ky=Math.sin,Je=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},uh=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},An=function(t){return t!==!1},hh=function(){return typeof window<"u"},Ia=function(t){return Ue(t)||Je(t)},wp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Jy=/random\([^)]+\)/g,jy=/,\s*/g,Zf=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rp=/[+-]=-?[.\d]+/,Qy=/[^,'"\[\]\s]+/gi,tS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,mi,Au,fh,Yn={},pl={},Pp,Dp=function(t){return(pl=Gs(t,Yn))&&Pn},dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ho=function(t,e){return!e&&console.warn(t)},Lp=function(t,e){return t&&(Yn[t]=e)&&pl&&(pl[t]=e)||Yn},Vo=function(){return 0},eS={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},nS={suppressEvents:!0},ph={},or=[],wu={},Ip,Bn={},yc={},Kf=30,tl=[],mh="",_h=function(t){var e=t[0],n,i;if(Ti(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=tl.length;i--&&!tl[i].targetTest(e););n=tl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new em(t[i],n)))||t.splice(i,1);return t},Br=function(t){return t._gsap||_h(ri(t))[0]._gsap},Up=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():uh(n)&&t.getAttribute&&t.getAttribute(e)||n},wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},Rs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},iS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ml=function(){var t=or.length,e=or.slice(0),n,i;for(wu={},or.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gh=function(t){return!!(t._initted||t._startAt||t.add)},Np=function(t,e,n,i){or.length&&!tn&&ml(),t.render(e,n,!!(tn&&e<0&&gh(t))),or.length&&!tn&&ml()},Op=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qy).length<2?e:Je(t)?t.trim():t},Fp=function(t){return t},qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Gs=function(t,e){for(var n in e)t[n]=e[n];return t},Jf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},_l=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},To=function(t){var e=t.parent||Re,n=t.keyframes?rS(cn(t.keyframes)):qn;if(An(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},sS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ll=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},oS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cu=function(t,e,n,i){return t._startAt&&(tn?t._startAt.revert(Qa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},aS=function r(t){return!t||t._ts&&r(t.parent)},jf=function(t){return t._repeat?Ws(t._tTime,t=t.duration()+t._rDelay)*t:0},Ws=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},gl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Il=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Ul=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Il(t),n._dirty||zr(n,t)),t},zp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=gl(t.rawTime(),e),(!e._dur||ea(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},vi=function(t,e,n,i){return e.parent&&hr(e),e._start=Ce((Gi(n)?n:n||t!==Re?jn(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bp(t,e,"_first","_last",t._sort?"_start":0),Ru(e)||(t._recent=e),i||zp(t,e),t._ts<0&&Ul(t,t._tTime),t},kp=function(t,e){return(Yn.ScrollTrigger||dh("scrollTrigger",e))&&Yn.ScrollTrigger.create(e,t)},Hp=function(t,e,n,i,s){if(xh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ip!==Hn.frame)return or.push(t),t._lazy=[s,i],1},lS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ru=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},cS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&lS(t)&&!(!t._initted&&Ru(t))||(t._ts<0||t._dp._ts<0)&&!Ru(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ea(0,t._tDur,e),u=Ws(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ws(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||tn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Hp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Cu(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&hr(t,1),!n&&!tn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},uS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Xs=function(t,e,n,i){var s=t._repeat,o=Ce(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ce(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ul(t,t._tTime=t._tDur*a),t.parent&&Il(t),n||zr(t.parent,t),t},Qf=function(t){return t instanceof En?zr(t):Xs(t,t._dur)},hS={_start:0,endTime:Vo,totalDuration:Vo},jn=function r(t,e,n){var i=t.labels,s=t._recent||hS,o=t.duration()>=ii?s.endTime(!1):t._dur,a,l,c;return Je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},bo=function(t,e,n){var i=Gi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},mr=function(t,e){return t||t===0?e(t):e},ea=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!Je(t)||!(e=tS.exec(t))?"":e[1]},fS=function(t,e,n){return mr(n,function(i){return ea(t,e,i)})},Pu=[].slice,Vp=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==mi},dS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Je(i)&&!e||Vp(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(t,e,n){return we&&!e&&we.selector?we.selector(t):Je(t)&&!n&&(Au||!Ys())?Pu.call((e||fh).querySelectorAll(t),0):cn(t)?dS(t,n):Vp(t)?Pu.call(t,0):t?[t]:[]},Du=function(t){return t=ri(t)[0]||Ho("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ri(e,n.querySelectorAll?n:n===t?Ho("Invalid scope")||fh.createElement("div"):t)}},Gp=function(t){return t.sort(function(){return .5-Math.random()})},Wp=function(t){if(Ue(t))return t;var e=Ti(t)?t:{each:t},n=kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Je(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,m=o[g],p,T,M,v,w,R,b,P,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,ii])[1],!y){for(b=-ii;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,T=y===ii?0:l?g*h/y-.5:i/y|0,b=0,P=ii,R=0;R<g;R++)M=R%y-p,v=T-(R/y|0),m[R]=w=c?Math.abs(c==="y"?v:M):Ap(M*M+v*v),w>b&&(b=w),w<P&&(P=w);i==="random"&&Gp(m),m.max=b-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=on(e.amount||e.each)||0,n=n&&g<0?AS(n):n}return g=(m[f]-m.min)/m.max||0,Ce(m.b+(n?n(g):g)*m.v)+m.u}},Lu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gi(n)?0:on(n))}},Xp=function(t,e){var n=cn(t),i,s;return!n&&Ti(t)&&(i=n=t.radius||ii,t.values?(t=ri(t.values),(s=!Gi(t[0]))&&(i*=i)):t=Lu(t.increment)),mr(e,n?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ii,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Gi(o)?u:u+on(o)}:Lu(t))},Yp=function(t,e,n,i){return mr(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},pS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},mS=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},_S=function(t,e,n){return $p(t,e,0,1,n)},qp=function(t,e,n){return mr(n,function(i){return t[~~e(i)]})},gS=function r(t,e,n){var i=e-t;return cn(t)?qp(t,r(0,t.length),e):mr(n,function(s){return(i+(s-t)%i)%i+t})},vS=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?qp(t,r(0,t.length-1),e):mr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Go=function(t){return t.replace(Jy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(jy);return Yp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$p=function(t,e,n,i,s){var o=e-t,a=i-n;return mr(s,function(l){return n+((l-t)/o*a||0)})},xS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Je(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=Gs(cn(t)?[]:{},t));if(!u){for(l in e)vh.call(a,t,l,"get",e[l]);s=function(_){return Sh(_,a)||(o?t.p:t)}}}return mr(n,s)},td=function(t,e,n){var i=t.labels,s=ii,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],o=we,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&or.length&&ml(),a&&(we=a),u=l?s.apply(c,l):s.call(c),we=o,u},po=function(t){return hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tn),t.progress()<1&&Gn(t,"onInterrupt"),t},Ts,Zp=[],Kp=function(t){if(t)if(t=!t.name&&t.default||t,hh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Vo,render:Sh,add:vh,kill:OS,modifier:NS,rawVars:0},o={targetTest:0,get:0,getSetter:yh,aliases:{},register:0};if(Ys(),t!==i){if(Bn[e])return;qn(i,qn(_l(t,s),o)),Gs(i.prototype,Gs(s,_l(t,o))),Bn[i.prop=e]=i,t.targetTest&&(tl.push(i),ph[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lp(e,i),t.register&&t.register(Pn,i,Cn)}else Zp.push(t)},ye=255,mo={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},Sc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Jp=function(t,e,n){var i=t?Gi(t)?[t>>16,t>>8&ye,t&ye]:0:mo.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),mo[t])i=mo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Zf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Sc(l+1/3,s,o),i[1]=Sc(l,s,o),i[2]=Sc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Zf)||mo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,o=i[1]/ye,a=i[2]/ye,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jp=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var o=s.match(Es)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ed=function(t,e,n){var i="",s=(t+i).match(ar),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Jp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=jp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ar,"1").split(Es),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ar=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in mo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),MS=/hsl[a]?\(/,Qp=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=MS.test(e),t[1]=ed(t[1],n),t[0]=ed(t[0],n,jp(t[1])),!0},Wo,Hn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,T=m===!0,M,v,w,R;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,M=w-o,(M>0||T)&&(R=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=M+(M>=s?4:s-M),v=1),T||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](w,f,R,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Pp&&(!Au&&hh()&&(mi=Au=window,fh=mi.document||{},Yn.gsap=Pn,(mi.gsapVersions||(mi.gsapVersions=[])).push(Pn.version),Dp(pl||mi.GreenSockGlobals||!mi.gsap&&mi||{}),Zp.forEach(Kp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Wo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Vo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,T){var M=p?function(v,w,R,b){m(v,w,R,b),h.remove(M)}:m;return h.remove(m),a[T?"unshift":"push"](M),Ys(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Ys=function(){return!Wo&&Hn.wake()},le={},yS=/^[\d.\-M][\d.\-,\s]/,SS=/["']/g,ES=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(SS,"").trim():+c,i=l.substr(a+1).trim();return e},TS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},bS=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ES(e[1])]:TS(t).split(",").map(Op)):le._CE&&yS.test(t)?le._CE("",t):n},AS=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Ue(t)?t:le[t]||bS(t))||e},jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return wn(t,function(a){le[a]=Yn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},tm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ec=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/bu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ky((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:tm(a);return s=bu/s,l.config=function(c,u){return r(t,c,u)},l},Tc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:tm(n);return i.config=function(s){return r(t,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;jr("Elastic",Ec("in"),Ec("out"),Ec());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jr("Circ",function(r){return-(Ap(1-r*r)-1)});jr("Sine",function(r){return r===1?1:-Zy(r*qy)+1});jr("Back",Tc("in"),Tc("out"),Tc());le.SteppedEase=le.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*ea(0,o,a)|0)+s)*n}}};ko.ease=le["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mh+=r+","+r+"Params,"});var em=function(t,e){this.id=$y++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Up,this.set=e?e.getSetter:yh},Xo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Xs(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),Wo||Hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ul(this,n),!s._dp||s.parent||zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Np(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ws(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(ea(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Il(this),oS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=nS);var i=tn;return tn=n,gh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),An(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ue(n)?n:Fp,l=function(){var u=i.then;i.then=null,s&&s(),Ue(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){po(this)},r})();qn(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var En=(function(r){bp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Re&&vi(n.parent||Re,Ii(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kp(Ii(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return bo(0,arguments,this),this},e.from=function(i,s,o){return bo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return bo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,To(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,jn(this,o),1),this},e.call=function(i,s,o){return vi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new He(i,o,jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,To(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,To(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ce(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,T,M,v,w,R,b;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ce(u%m),u===l?(g=this._repeat,f=c):(w=Ce(u/m),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=Ws(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),R&&g&1&&(f=c-f,b=1),g!==w&&!this._lock){var P=R&&w&1,y=P===(R&&g&1);if(g<w&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ce(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=uS(this,Ce(a),Ce(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!w&&(Gn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=-Se);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||tn&&gh(d)),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=x?-Se:Se);break}}d=_}}if(T&&!s&&(this.pause(),T.render(f>=a?0:-Se)._zTime=f>=a?1:-1,this._ts))return this._start=v,Il(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Gi(s)||(s=jn(this,s,i)),!(i instanceof Xo)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Je(i))return this.addLabel(i,s);if(Ue(i))i=He.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Je(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&Ll(this,i),i===this._recent&&(this._recent=this._last),zr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,vi(this,a,jn(this,i))},e.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&hr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,c=Gi(s),u;l;)l instanceof He?iS(l._targets,a)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=He.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Xs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,qn({startAt:{time:jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),td(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),td(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ce(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ii,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ce(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xs(o,o===Re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(Np(Re,gl(i,Re)),Ip=Hn.frame),Hn.frame>=Kf){Kf+=Xn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t})(Xo);qn(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var wS=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,am,null,s),c=0,u=0,h,f,d,_,g,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Go(i)),o&&(T=[n,i],o(T,t,e),n=T[0],i=T[1]),f=n.match(Mc)||[];h=Mc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Rs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Rp.test(i)||p)&&(l.e=0),this._pt=l,l},vh=function(t,e,n,i,s,o,a,l,c,u){Ue(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Ue(h)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ue(h)?c?LS:sm:Mh,_;if(Je(i)&&(~i.indexOf("random(")&&(i=Go(i)),i.charAt(1)==="="&&(_=Rs(f,i)+(on(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Iu)return!isNaN(f*i)&&i!==""?(_=new Cn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?US:om,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&dh(e,i),wS.call(this,t,e,f,i,d,l||Xn.stringFilter,c))},CS=function(t,e,n,i,s){if(Ue(t)&&(t=Ao(t,s,e,n,i)),!Ti(t)||t.style&&t.nodeType||cn(t)||wp(t))return Je(t)?Ao(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ao(t[a],s,e,n,i);return o},nm=function(t,e,n,i,s,o){var a,l,c,u;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:CS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ts))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qi,Iu,xh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,T=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!ch,v=t.timeline,w=i.easeReverse||h,R,b,P,y,x,D,B,z,V,q,G,W,H;if(v&&(!f||!s)&&(s="none"),t._ease=kr(s,ko.ease),t._rEase=w&&(kr(w)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(z=m[0]?Br(m[0]).harness:0,W=z&&i[z.prop],R=_l(i,ph),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Qa:eS),g._lazy=0),o){if(hr(t._startAt=He.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn||!a&&!d)&&t._startAt.revert(Qa),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),P=qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&An(l),immediateRender:a,stagger:0,parent:p},R),W&&(P[z.prop]=W),hr(t._startAt=He.set(m,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn?t._startAt.revert(Qa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&An(l)||l&&!_,b=0;b<m.length;b++){if(x=m[b],B=x._gsap||_h(m)[b]._gsap,t._ptLookup[b]=q={},wu[B.id]&&or.length&&ml(),G=T===m?b:T.indexOf(x),z&&(V=new z).init(x,W||R,t,G,T)!==!1&&(t._pt=y=new Cn(t._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(rt){q[rt]=y}),V.priority&&(D=1)),!z||W)for(P in R)Bn[P]&&(V=nm(P,R,t,G,x,T))?V.priority&&(D=1):q[P]=y=vh.call(t,x,P,"get",R[P],G,T,0,i.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),M&&t._pt&&(Qi=t,Re.killTweensOf(x,q,t.globalTime(e)),H=!t.parent,Qi=0),t._pt&&l&&(wu[B.id]=1)}D&&lm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&v.render(ii,!0,!0)},RS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Iu=1,t.vars[e]="+=0",xh(t,a),Iu=0,l?Ho(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Oe(n)+on(h.e)),h.b&&(h.b=u.s+on(h.b))},PS=function(t,e){var n=t[0]?Br(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Gs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},DS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ao=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Je(t)&&~t.indexOf("random(")?Go(t):t},im=mh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rm={};wn(im+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rm[r]=1});var He=(function(r){bp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:To(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Re,T=(cn(n)||wp(n)?Gi(n[0]):"length"in i)?[n]:ri(n),M,v,w,R,b,P,y,x;if(a._targets=T.length?_h(T):Ho("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ia(c)||Ia(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(M=a.timeline=new En({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:T}),M.kill(),M.parent=M._dp=Ii(a),M._start=0,f||Ia(c)||Ia(u)){if(R=T.length,y=f&&Wp(f),Ti(f))for(b in f)~im.indexOf(b)&&(x||(x={}),x[b]=f[b]);for(v=0;v<R;v++)w=_l(i,rm),w.stagger=0,D&&(w.easeReverse=D),x&&Gs(w,x),P=T[v],w.duration=+Ao(c,Ii(a),v,P,T),w.delay=(+Ao(u,Ii(a),v,P,T)||0)-a._delay,!f&&R===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),M.to(P,w,y?y(v,P,T):0),M._ease=le.none;M.duration()?c=u=0:a.timeline=0}else if(_){To(qn(M.vars.defaults,{ease:"none"})),M._ease=kr(_.ease||i.ease||"none");var B=0,z,V,q;if(cn(_))_.forEach(function(G){return M.to(T,G,">")}),M.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||DS(b,_[b],w,_.easeEach);for(b in w)for(z=w[b].sort(function(G,W){return G.t-W.t}),B=0,v=0;v<z.length;v++)V=z[v],q={ease:V.e,duration:(V.t-(v?z[v-1].t:0))/100*c},q[b]=V.v,M.to(T,q,B),B+=q.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!ch&&(Qi=Ii(a),Re.killTweensOf(T),Qi=0),vi(p,Ii(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ce(p._time)&&An(h)&&aS(Ii(a))&&p.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-u)||0)),m&&kp(Ii(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Se&&!u?l:i<Se?0:i,f,d,_,g,m,p,T,M;if(!c)cS(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ce(h%g),h===l?(_=this._repeat,f=c):(m=Ce(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=Ws(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ce(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Hp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var w=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(f/c);if(this._from&&(this.ratio=T=1-T),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cu(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&hr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Wo||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||xh(this,c),u=this._ease(c/this._dur),RS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ul(this,0),this.parent||Bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||po(this),this.parent&&o!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&sS(a,l))return s==="all"&&(this._pt=0),po(this);for(h=this._op=this._op||[],s!=="all"&&(Je(s)&&(g={},wn(s,function(T){return g[T]=1}),s=g),s=PS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ll(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&po(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return bo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return bo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Re.killTweensOf(i,s,o)},t})(Xo);qn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new En,e=Pu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Mh=function(t,e,n){return t[e]=n},sm=function(t,e,n){return t[e](n)},LS=function(t,e,n,i){return t[e](i.fp,n)},IS=function(t,e,n){return t.setAttribute(e,n)},yh=function(t,e){return Ue(t[e])?sm:uh(t[e])&&t.setAttribute?IS:Mh},om=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},US=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},am=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Sh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},NS=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},OS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ll(this,e,"_pt"):e.dep||(n=1),e=i;return!n},FS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},lm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||om,this.d=l||this,this.set=c||Mh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=FS,this.m=n,this.mt=s,this.tween=i},r})();wn(mh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ph[r]=1});Yn.TweenMax=Yn.TweenLite=He;Yn.TimelineLite=Yn.TimelineMax=En;Re=new En({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Qp;var Hr=[],el={},BS=[],nd=0,zS=0,bc=function(t){return(el[t]||BS).map(function(e){return e()})},Uu=function(){var t=Date.now(),e=[];t-nd>2&&(bc("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),bc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nd=t,bc("matchMedia"))},cm=(function(){function r(e,n){this.selector=n&&Du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var o=this,a=function(){var c=we,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Du(s)),we=o,h=i.apply(o,arguments),Ue(h)&&o._r.push(h),we=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ue?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),kS=(function(){function r(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ti(n)||(n={matches:n});var o=new cm(0,s||this.scope),a=o.conditions={},l,c,u;we&&!o.selector&&(o.selector=we.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=mi.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uu):l.addEventListener("change",Uu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),vl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Kp(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Je(t)&&(t=ri(t)[0]);var s=Br(t||{}).get,o=n?Fp:Op;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ri(t),t.length>1){var i=t.map(function(u){return Pn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Bn[e],a=Br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Ts._pt=0,h.init(t,n?u+n:u,Ts,0,[t]),h.render(1,h),Ts._pt&&Sh(1,Ts)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,ko.ease)),Jf(ko,t||{})},config:function(t){return Jf(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Yn[a]&&Ho(e+" effect requires "+a+" plugin.")}),yc[e]=function(a,l,c){return n(ri(a),qn(l||{},s),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(yc[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):le},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,s;for(n.smoothChildTiming=An(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(Re,n,0),n},context:function(t,e){return t?new cm(t,e):we},matchMedia:function(t){return new kS(t)},matchMediaRefresh:function(){return Hr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Uu()},addEventListener:function(t,e){var n=el[t]||(el[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=el[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:gS,wrapYoyo:vS,distribute:Wp,random:Yp,snap:Xp,normalize:_S,getUnit:on,clamp:fS,splitColor:Jp,toArray:ri,selector:Du,mapRange:$p,pipe:pS,unitize:mS,interpolate:xS,shuffle:Gp},install:Dp,effects:yc,ticker:Hn,updateRoot:En.updateRoot,plugins:Bn,globalTimeline:Re,core:{PropTween:Cn,globals:Lp,Tween:He,Timeline:En,Animation:Xo,getCache:Br,_removeLinkedListItem:Ll,reverting:function(){return tn},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return ch=t}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vl[r]=He[r]});Hn.add(En.updateRoot);Ts=vl.to({},{duration:0});var HS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},VS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=HS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ac=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Je(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}VS(a,s)}}}},Pn=vl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ac("roundProps",Lu),Ac("modifiers"),Ac("snap",Xp))||vl;He.version=En.version=Pn.version="3.15.0";Pp=1;hh()&&Ys();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var id,tr,Ps,Eh,Or,rd,Th,GS=function(){return typeof window<"u"},Wi={},Cr=180/Math.PI,Ds=Math.PI/180,ps=Math.atan2,sd=1e8,bh=/([A-Z])/g,WS=/(left|right|width|margin|padding|x)/i,XS=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$S=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ZS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},um=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},hm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},KS=function(t,e,n){return t.style[e]=n},JS=function(t,e,n){return t.style.setProperty(e,n)},jS=function(t,e,n){return t._gsap[e]=n},QS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},tE=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},eE=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},De="transform",Rn=De+"Origin",nE=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Mi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ui(i,a)}):this.tfm[t]=o.x?o[t]:Ui(i,t),t===Rn&&(this.tfm.zOrigin=o.zOrigin);else return Mi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},fm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},iE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(bh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Th(),(!s||!s.isStart)&&!n[De]&&(fm(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dm=function(t,e){var n={target:t,props:[],revert:iE,save:nE};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},pm,Ou=function(t,e){var n=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return n&&n.style?n:tr.createElement(t)},Wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(bh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,qs(e)||e,1)||""},od="O,Moz,ms,Ms,Webkit".split(","),qs=function(t,e,n){var i=e||Or,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(od[o]+t in s););return o<0?null:(o===3?"ms":o>=0?od[o]:"")+t},Fu=function(){GS()&&window.document&&(id=window,tr=id.document,Ps=tr.documentElement,Or=Ou("div")||{style:{}},Ou("div"),De=qs(De),Rn=De+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!qs("perspective"),Th=Pn.core.reverting,Eh=1)},ad=function(t){var e=t.ownerSVGElement,n=Ou("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ps.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ps.removeChild(n),s},ld=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},mm=function(t){var e,n;try{e=t.getBBox()}catch{e=ad(t),n=1}return e&&(e.width||e.height)||n||(e=ad(t)),e&&!e.width&&!e.x&&!e.y?{x:+ld(t,["x","cx","x1"])||0,y:+ld(t,["y","cy","y1"])||0,width:0,height:0}:e},_m=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&mm(t))},fr=function(t,e){if(e){var n=t.style,i;e in Wi&&e!==Rn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(bh,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?hm:um);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},cd={deg:1,rad:1,turn:1},rE={grid:1,flex:1},dr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Or.style,l=WS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||cd[i]||cd[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&_m(t),(d||o==="%")&&(Wi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Oe(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===tr||!g.appendChild)&&(g=tr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Hn.time&&!m.uncache)return Oe(s/m.width*h);if(d&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=h+i,_=t[u],T?t.style[e]=T:fr(t,e)}else(d||o==="%")&&!rE[Wn(g,"display")]&&(a.position=Wn(t,"position")),g===t&&(a.position="static"),g.appendChild(Or),_=Or[u],g.removeChild(Or),a.position="absolute";return l&&d&&(m=Br(g),m.time=Hn.time,m.width=g[u]),Oe(f?_*s/h:_&&s?h/_*s:0)},Ui=function(t,e,n,i){var s;return Eh||Fu(),e in Mi&&e!=="transform"&&(e=Mi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wi[e]&&e!=="transform"?(s=qo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ml(Wn(t,Rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xl[e]&&xl[e](t,e,n)||Wn(t,e)||Up(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(t,e,s,n)+n:s},sE=function(t,e,n,i){if(!n||n==="none"){var s=qs(e,t,1),o=s&&Wn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Wn(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,am),l=0,c=0,u,h,f,d,_,g,m,p,T,M,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Wn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Wn(t,e)||i,g?t.style[e]=g:fr(t,e)),u=[n,i],Qp(u),n=u[0],i=u[1],f=n.match(Es)||[],w=i.match(Es)||[],w.length){for(;h=Es.exec(i);)m=h[0],T=i.substring(l,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Rs(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=Es.lastIndex-M.length,M||(M=M||Xn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=dr(t,e,g,M)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?hm:um;return Rp.test(i)&&(a.e=0),this._pt=a,a},ud={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oE=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ud[n]||n,e[1]=ud[i]||i,e.join(" ")},aE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wi[a]&&(l=1,a=a==="transformOrigin"?Rn:De),fr(n,a);l&&(fr(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),o.uncache=1,fm(i)))}},xl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,aE);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Yo=[1,0,0,1,0,0],gm={},vm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hd=function(t){var e=Wn(t,De);return vm(e)?Yo:e.substr(7).match(Cp).map(Oe)},Ah=function(t,e){var n=t._gsap||Br(t),i=t.style,s=hd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Yo:s):(s===Yo&&!t.offsetParent&&t!==Ps&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ps.appendChild(t)),s=hd(t),l?i.display=l:fr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ps.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Ah(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],T=l[5],M=e.split(" "),v=parseFloat(M[0])||0,w=parseFloat(M[1])||0,R,b,P,y;n?l!==Yo&&(b=d*m-_*g)&&(P=v*(m/b)+w*(-g/b)+(g*T-m*p)/b,y=v*(-_/b)+w*(d/b)-(d*T-_*p)/b,v=P,w=y):(R=mm(t),v=R.x+(~M[0].indexOf("%")?v/100*R.width:v),w=R.y+(~(M[1]||M[0]).indexOf("%")?w/100*R.height:w)),i||i!==!1&&a.smooth?(p=v-c,T=w-u,a.xOffset=h+(p*d+T*g)-p,a.yOffset=f+(p*_+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Rn]="0px 0px",o&&(er(o,a,"xOrigin",c,v),er(o,a,"yOrigin",u,w),er(o,a,"xOffset",h,a.xOffset),er(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},qo=function(t,e){var n=t._gsap||new em(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Wn(t,Rn)||"0",u,h,f,d,_,g,m,p,T,M,v,w,R,b,P,y,x,D,B,z,V,q,G,W,H,rt,L,ct,It,$t,Z,st;return u=h=f=g=m=p=T=M=v=0,d=_=1,n.svg=!!(t.getCTM&&_m(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),b=Ah(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Bu(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,R=n.yOrigin||0,b!==Yo&&(D=b[0],B=b[1],z=b[2],V=b[3],u=q=b[4],h=G=b[5],b.length===6?(d=Math.sqrt(D*D+B*B),_=Math.sqrt(V*V+z*z),g=D||B?ps(B,D)*Cr:0,T=z||V?ps(z,V)*Cr+g:0,T&&(_*=Math.abs(Math.cos(T*Ds))),n.svg&&(u-=w-(w*D+R*z),h-=R-(w*B+R*V))):(st=b[6],$t=b[7],L=b[8],ct=b[9],It=b[10],Z=b[11],u=b[12],h=b[13],f=b[14],P=ps(st,It),m=P*Cr,P&&(y=Math.cos(-P),x=Math.sin(-P),W=q*y+L*x,H=G*y+ct*x,rt=st*y+It*x,L=q*-x+L*y,ct=G*-x+ct*y,It=st*-x+It*y,Z=$t*-x+Z*y,q=W,G=H,st=rt),P=ps(-z,It),p=P*Cr,P&&(y=Math.cos(-P),x=Math.sin(-P),W=D*y-L*x,H=B*y-ct*x,rt=z*y-It*x,Z=V*x+Z*y,D=W,B=H,z=rt),P=ps(B,D),g=P*Cr,P&&(y=Math.cos(P),x=Math.sin(P),W=D*y+B*x,H=q*y+G*x,B=B*y-D*x,G=G*y-q*x,D=W,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Oe(Math.sqrt(D*D+B*B+z*z)),_=Oe(Math.sqrt(G*G+st*st)),P=ps(q,G),T=Math.abs(P)>2e-4?P*Cr:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vm(Wn(t,De)),W&&t.setAttribute("transform",W))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Oe(d),n.scaleY=Oe(_),n.rotation=Oe(g)+a,n.rotationX=Oe(m)+a,n.rotationY=Oe(p)+a,n.skewX=T+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Rn]=Ml(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?cE:pm?xm:lE,n.uncache=0,n},Ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},wc=function(t,e,n){var i=on(e);return Oe(parseFloat(e)+parseFloat(dr(t,"x",n+"px",i)))+i},lE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,xm(t,e)},Tr="0deg",lo="0px",br=") ",xm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,M=n.zOrigin,v="",w=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==Tr||u!==Tr)){var R=parseFloat(u)*Ds,b=Math.sin(R),P=Math.cos(R),y;R=parseFloat(h)*Ds,y=Math.cos(R),o=wc(T,o,b*y*-M),a=wc(T,a,-Math.sin(R)*-M),l=wc(T,l,P*y*-M+M)}m!==lo&&(v+="perspective("+m+br),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||o!==lo||a!==lo||l!==lo)&&(v+=l!==lo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+br),c!==Tr&&(v+="rotate("+c+br),u!==Tr&&(v+="rotateY("+u+br),h!==Tr&&(v+="rotateX("+h+br),(f!==Tr||d!==Tr)&&(v+="skew("+f+", "+d+br),(_!==1||g!==1)&&(v+="scale("+_+", "+g+br),T.style[De]=v||"translate(0, 0)"},cE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,M=parseFloat(o),v=parseFloat(a),w,R,b,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ds,c*=Ds,w=Math.cos(l)*h,R=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ds,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,R*=y)),w=Oe(w),R=Oe(R),b=Oe(b),P=Oe(P)):(w=h,P=f,R=b=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=dr(d,"x",o,"px"),v=dr(d,"y",a,"px")),(_||g||m||p)&&(M=Oe(M+_-(_*w+g*b)+m),v=Oe(v+g-(_*R+g*P)+p)),(i||s)&&(y=d.getBBox(),M=Oe(M+i/100*y.width),v=Oe(v+s/100*y.height)),y="matrix("+w+","+R+","+b+","+P+","+M+","+v+")",d.setAttribute("transform",y),T&&(d.style[De]=y)},uE=function(t,e,n,i,s){var o=360,a=Je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*sd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*sd)%o-~~(c/o)*o)),t._pt=f=new Cn(t._pt,e,n,i,c,YS),f.e=u,f.u="deg",t._props.push(n),f},fd=function(t,e){for(var n in e)t[n]=e[n];return t},hE=function(t,e,n){var i=fd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=qo(n,1),fr(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],o[De]=e,a=qo(n,1),o[De]=c);for(l in Wi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),_=on(u),h=d!==_?dr(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Cn(t._pt,a,l,h,f-h,Nu),t._pt.u=_||0,t._props.push(l));fd(a,i)};wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});xl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Ui(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Mm={name:"css",register:Fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,T,M,v,w,R,b,P,y;Eh||Fu(),this.styles=this.styles||dm(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Bn[g]&&nm(g,e,n,i,t,s)))){if(d=typeof u,_=xl[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Go(u)),_)_(this,t,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(m=on(c),p=on(u),p?m!==p&&(c=dr(t,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Je(c)&&~c.indexOf("random(")&&(c=Go(c)),on(c+"")||c==="auto"||(c+=Xn.units[g]||on(Ui(t,g))||""),(c+"").charAt(1)==="="&&(c=Ui(t,g))):c=Ui(t,g),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in Mi&&(g==="autoAlpha"&&(f===1&&Ui(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),er(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Mi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Wi,M){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Wn(t,"perspective"),x?t.style.perspective=x:fr(t,"perspective")}h=parseFloat(u)}if(v||(w=t._gsap,w.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),R=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new Cn(this._pt,a,De,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new Cn(this._pt,w,"scaleY",w.scaleY,(T?Rs(w.scaleY,T+h):h)-w.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Rn,0,a[Rn]),u=oE(u),w.svg?Bu(t,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&er(this,w,"zOrigin",w.zOrigin,p),er(this,a,g,Ml(c),Ml(u)));continue}else if(g==="svgOrigin"){Bu(t,u,1,R,0,this);continue}else if(g in gm){uE(this,w,g,f,T?Rs(f,T+u):u);continue}else if(g==="smoothOrigin"){er(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){hE(this,u,t);continue}}else g in a||(g=qs(g)||g);if(M||(h||h===0)&&(f||f===0)&&!XS.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=on(u)||(g in Xn.units?Xn.units[g]:m),m!==p&&(f=dr(t,g,c,p)),this._pt=new Cn(this._pt,M?w:a,g,f,(T?Rs(f,T+h):h)-f,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?ZS:Nu),this._pt.u=p||0,M&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=$S):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=qS);else if(g in a)sE.call(this,t,g,c,T?T+u:u);else if(g in t)this.add(t,g,c||t[g],T?T+u:u,i,s);else if(g!=="parseTransform"){dh(g,u);continue}M||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}b&&lm(this)},render:function(t,e){if(e.tween._time||!Th())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ui,aliases:Mi,getSetter:function(t,e,n){var i=Mi[e];return i&&i.indexOf(",")<0&&(e=i),e in Wi&&e!==Rn&&(t._gsap.x||Ui(t,"x"))?n&&rd===n?e==="scale"?QS:jS:(rd=n||{})&&(e==="scale"?tE:eE):t.style&&!uh(t.style[e])?KS:~e.indexOf("-")?JS:yh(t,e)},core:{_removeProperty:fr,_getMatrix:Ah}};Pn.utils.checkPrefix=qs;Pn.core.getStyleSaver=dm;(function(r,t,e,n){var i=wn(r+","+t+","+e,function(s){Wi[s]=1});wn(t,function(s){Xn.units[s]="deg",gm[s]=1}),Mi[i[13]]=r+","+t,wn(n,function(s){var o=s.split(":");Mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Pn.registerPlugin(Mm);var Ir=Pn.registerPlugin(Mm)||Pn;Ir.core.Tween;function fE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function dE(r,t,e){return t&&fE(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe,nl,Vn,nr,ir,Ls,ym,Rr,Is,Sm,zi,ui,Em,Tm=function(){return Qe||typeof window<"u"&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},bm=1,bs=[],re=[],Si=[],wo=Date.now,zu=function(t,e){return e},pE=function(){var t=Is.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Si),re=n,Si=i,zu=function(o,a){return e[o](a)}},lr=function(t,e){return~Si.indexOf(t)&&Si[Si.indexOf(t)+1][e]},Co=function(t){return!!~Sm.indexOf(t)},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ua="scrollLeft",Na="scrollTop",ku=function(){return zi&&zi.isPressed||re.cache++},yl=function(t,e){var n=function i(s){if(s||s===0){bm&&(Vn.history.scrollRestoration="manual");var o=zi&&zi.isPressed;s=i.v=Math.round(s)||(zi&&zi.iOS?1:0),t(s),i.cacheID=re.cache,o&&zu("ss",s)}else(e||re.cache!==i.cacheID||zu("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},vn={s:Ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yl(function(r){return arguments.length?Vn.scrollTo(r,Xe.sc()):Vn.pageXOffset||nr[Ua]||ir[Ua]||Ls[Ua]||0})},Xe={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:yl(function(r){return arguments.length?Vn.scrollTo(vn.sc(),r):Vn.pageYOffset||nr[Na]||ir[Na]||Ls[Na]||0})},Sn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Qe.utils.toArray)(t)[0]||(typeof t=="string"&&Qe.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},mE=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},pr=function(t,e){var n=e.s,i=e.sc;Co(t)&&(t=nr.scrollingElement||ir);var s=re.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||dn(t,"scroll",ku);var a=re[s+o],l=a||(re[s+o]=yl(lr(t,n),!0)||(Co(t)?i:yl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Qe.getProperty(t,"scrollBehavior")==="smooth"),l},Hu=function(t,e,n){var i=t,s=t,o=wo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=wo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=wo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},co=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},dd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Am=function(){Is=Qe.core.globals().ScrollTrigger,Is&&Is.core&&pE()},wm=function(t){return Qe=t||Tm(),!nl&&Qe&&typeof document<"u"&&document.body&&(Vn=window,nr=document,ir=nr.documentElement,Ls=nr.body,Sm=[Vn,nr,ir,Ls],Qe.utils.clamp,Em=Qe.core.context||function(){},Rr="onpointerenter"in Ls?"pointer":"mouse",ym=Fe.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Fe.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bm=0},500),nl=1),Is||Am(),nl};vn.op=Xe;re.cache=0;var Fe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){nl||wm(Qe)||console.warn("Please gsap.registerPlugin(Observer)"),Is||Am();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,M=n.onPress,v=n.onRelease,w=n.onRight,R=n.onLeft,b=n.onUp,P=n.onDown,y=n.onChangeX,x=n.onChangeY,D=n.onChange,B=n.onToggleX,z=n.onToggleY,V=n.onHover,q=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,H=n.isNormalizer,rt=n.onGestureStart,L=n.onGestureEnd,ct=n.onWheel,It=n.onEnable,$t=n.onDisable,Z=n.onClick,st=n.scrollSpeed,xt=n.capture,ot=n.allowClicks,wt=n.lockAxis,Pt=n.onLockAxis;this.target=a=Sn(a)||ir,this.vars=n,d&&(d=Qe.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,st=st||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Ls).lineHeight)||22);var Ot,Vt,j,Q,C,Et,it,U=this,at=0,Ut=0,gt=n.passive||!u&&n.passive!==!1,A=pr(a,vn),S=pr(a,Xe),k=A(),K=S(),tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ui[0]==="pointerdown",J=Co(a),dt=a.ownerDocument||nr,ut=[0,0,0],_t=[0,0,0],Yt=0,lt=function(){return Yt=wo()},ht=function(Dt,Kt){return(U.event=Dt)&&d&&mE(Dt.target,d)||Kt&&tt&&Dt.pointerType!=="touch"||W&&W(Dt,Kt)},zt=function(){U._vx.reset(),U._vy.reset(),Vt.pause(),h&&h(U)},Ft=function(){var Dt=U.deltaX=dd(ut),Kt=U.deltaY=dd(_t),Mt=Math.abs(Dt)>=i,qt=Math.abs(Kt)>=i;D&&(Mt||qt)&&D(U,Dt,Kt,ut,_t),Mt&&(w&&U.deltaX>0&&w(U),R&&U.deltaX<0&&R(U),y&&y(U),B&&U.deltaX<0!=at<0&&B(U),at=U.deltaX,ut[0]=ut[1]=ut[2]=0),qt&&(P&&U.deltaY>0&&P(U),b&&U.deltaY<0&&b(U),x&&x(U),z&&U.deltaY<0!=Ut<0&&z(U),Ut=U.deltaY,_t[0]=_t[1]=_t[2]=0),(Q||j)&&(G&&G(U),j&&(m&&j===1&&m(U),T&&T(U),j=0),Q=!1),Et&&!(Et=!1)&&Pt&&Pt(U),C&&(ct(U),C=!1),Ot=0},bt=function(Dt,Kt,Mt){ut[Mt]+=Dt,_t[Mt]+=Kt,U._vx.update(Dt),U._vy.update(Kt),c?Ot||(Ot=requestAnimationFrame(Ft)):Ft()},Zt=function(Dt,Kt){wt&&!it&&(U.axis=it=Math.abs(Dt)>Math.abs(Kt)?"x":"y",Et=!0),it!=="y"&&(ut[2]+=Dt,U._vx.update(Dt,!0)),it!=="x"&&(_t[2]+=Kt,U._vy.update(Kt,!0)),c?Ot||(Ot=requestAnimationFrame(Ft)):Ft()},Gt=function(Dt){if(!ht(Dt,1)){Dt=co(Dt,u);var Kt=Dt.clientX,Mt=Dt.clientY,qt=Kt-U.x,Lt=Mt-U.y,Xt=U.isDragging;U.x=Kt,U.y=Mt,(Xt||(qt||Lt)&&(Math.abs(U.startX-Kt)>=s||Math.abs(U.startY-Mt)>=s))&&(j||(j=Xt?2:1),Xt||(U.isDragging=!0),Zt(qt,Lt))}},ce=U.onPress=function(Tt){ht(Tt,1)||Tt&&Tt.button||(U.axis=it=null,Vt.pause(),U.isPressed=!0,Tt=co(Tt),at=Ut=0,U.startX=U.x=Tt.clientX,U.startY=U.y=Tt.clientY,U._vx.reset(),U._vy.reset(),dn(H?a:dt,ui[1],Gt,gt,!0),U.deltaX=U.deltaY=0,M&&M(U))},I=U.onRelease=function(Tt){if(!ht(Tt,1)){fn(H?a:dt,ui[1],Gt,!0);var Dt=!isNaN(U.y-U.startY),Kt=U.isDragging,Mt=Kt&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),qt=co(Tt);!Mt&&Dt&&(U._vx.reset(),U._vy.reset(),u&&ot&&Qe.delayedCall(.08,function(){if(wo()-Yt>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(dt.createEvent){var Lt=dt.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,Vn,1,qt.screenX,qt.screenY,qt.clientX,qt.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(Lt)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,h&&Kt&&!H&&Vt.restart(!0),j&&Ft(),p&&Kt&&p(U),v&&v(U,Mt)}},mt=function(Dt){return Dt.touches&&Dt.touches.length>1&&(U.isGesturing=!0)&&rt(Dt,U.isDragging)},$=function(){return(U.isGesturing=!1)||L(U)},et=function(Dt){if(!ht(Dt)){var Kt=A(),Mt=S();bt((Kt-k)*st,(Mt-K)*st,1),k=Kt,K=Mt,h&&Vt.restart(!0)}},pt=function(Dt){if(!ht(Dt)){Dt=co(Dt,u),ct&&(C=!0);var Kt=(Dt.deltaMode===1?l:Dt.deltaMode===2?Vn.innerHeight:1)*_;bt(Dt.deltaX*Kt,Dt.deltaY*Kt,0),h&&!H&&Vt.restart(!0)}},vt=function(Dt){if(!ht(Dt)){var Kt=Dt.clientX,Mt=Dt.clientY,qt=Kt-U.x,Lt=Mt-U.y;U.x=Kt,U.y=Mt,Q=!0,h&&Vt.restart(!0),(qt||Lt)&&Zt(qt,Lt)}},Wt=function(Dt){U.event=Dt,V(U)},ue=function(Dt){U.event=Dt,q(U)},Le=function(Dt){return ht(Dt)||co(Dt,u)&&Z(U)};Vt=U._dc=Qe.delayedCall(f||.25,zt).pause(),U.deltaX=U.deltaY=0,U._vx=Hu(0,50,!0),U._vy=Hu(0,50,!0),U.scrollX=A,U.scrollY=S,U.isDragging=U.isGesturing=U.isPressed=!1,Em(this),U.enable=function(Tt){return U.isEnabled||(dn(J?dt:a,"scroll",ku),o.indexOf("scroll")>=0&&dn(J?dt:a,"scroll",et,gt,xt),o.indexOf("wheel")>=0&&dn(a,"wheel",pt,gt,xt),(o.indexOf("touch")>=0&&ym||o.indexOf("pointer")>=0)&&(dn(a,ui[0],ce,gt,xt),dn(dt,ui[2],I),dn(dt,ui[3],I),ot&&dn(a,"click",lt,!0,!0),Z&&dn(a,"click",Le),rt&&dn(dt,"gesturestart",mt),L&&dn(dt,"gestureend",$),V&&dn(a,Rr+"enter",Wt),q&&dn(a,Rr+"leave",ue),G&&dn(a,Rr+"move",vt)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=Q=j=!1,U._vx.reset(),U._vy.reset(),k=A(),K=S(),Tt&&Tt.type&&ce(Tt),It&&It(U)),U},U.disable=function(){U.isEnabled&&(bs.filter(function(Tt){return Tt!==U&&Co(Tt.target)}).length||fn(J?dt:a,"scroll",ku),U.isPressed&&(U._vx.reset(),U._vy.reset(),fn(H?a:dt,ui[1],Gt,!0)),fn(J?dt:a,"scroll",et,xt),fn(a,"wheel",pt,xt),fn(a,ui[0],ce,xt),fn(dt,ui[2],I),fn(dt,ui[3],I),fn(a,"click",lt,!0),fn(a,"click",Le),fn(dt,"gesturestart",mt),fn(dt,"gestureend",$),fn(a,Rr+"enter",Wt),fn(a,Rr+"leave",ue),fn(a,Rr+"move",vt),U.isEnabled=U.isPressed=U.isDragging=!1,$t&&$t(U))},U.kill=U.revert=function(){U.disable();var Tt=bs.indexOf(U);Tt>=0&&bs.splice(Tt,1),zi===U&&(zi=0)},bs.push(U),H&&Co(a)&&(zi=U),U.enable(g)},dE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Fe.version="3.15.0";Fe.create=function(r){return new Fe(r)};Fe.register=wm;Fe.getAll=function(){return bs.slice()};Fe.getById=function(r){return bs.filter(function(t){return t.vars.id===r})[0]};Tm()&&Qe.registerPlugin(Fe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ct,xs,ie,_e,kn,me,wh,Sl,$o,Ro,_o,Oa,rn,Nl,Vu,_n,pd,md,Ms,Cm,Cc,Rm,mn,Gu,Pm,Dm,Ji,Wu,Ch,Us,Rh,Po,Xu,Rc,Fa=1,sn=Date.now,Pc=sn(),si=0,go=0,_d=function(t,e,n){var i=Fn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},gd=function(t,e){return e&&(!Fn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},_E=function r(){return go&&requestAnimationFrame(r)},vd=function(){return Nl=1},xd=function(){return Nl=0},_i=function(t){return t},vo=function(t){return Math.round(t*1e5)/1e5||0},Lm=function(){return typeof window<"u"},Im=function(){return Ct||Lm()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},$r=function(t){return!!~wh.indexOf(t)},Um=function(t){return(t==="Height"?Rh:ie["inner"+t])||kn["client"+t]||me["client"+t]},Nm=function(t){return lr(t,"getBoundingClientRect")||($r(t)?function(){return al.width=ie.innerWidth,al.height=Rh,al}:function(){return Oi(t)})},gE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Um(s):t["client"+s])||0}},vE=function(t,e){return!e||~Si.indexOf(t)?Nm(t):function(){return al}},yi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-Nm(t)()[s]:$r(t)?(kn[n]||me[n])-Um(i):t[n]-t["offset"+i])},Ba=function(t,e){for(var n=0;n<Ms.length;n+=3)(!e||~e.indexOf(Ms[n+1]))&&t(Ms[n],Ms[n+1],Ms[n+2])},Fn=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},xo=function(t){return typeof t=="number"},Pr=function(t){return typeof t=="object"},uo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ms=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},_s=Math.abs,Om="left",Fm="top",Ph="right",Dh="bottom",Vr="width",Gr="height",Do="Right",Lo="Left",Io="Top",Uo="Bottom",ke="padding",ti="margin",$s="Width",Lh="Height",We="px",ei=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},xE=function(t){var e=ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Md=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Oi=function(t,e){var n=e&&ei(t)[Vu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},El=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Bm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},ME=function(t){return function(e){return Ct.utils.snap(Bm(t),e)}},Ih=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},yE=function(t){return function(e,n){return Ih(Bm(t))(e,n.direction)}},za=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ze=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ka=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},yd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ha={toggleActions:"play",anticipatePin:0},Tl={top:0,left:0,center:.5,bottom:1,right:1},il=function(t,e){if(Fn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Tl?Tl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Va=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=$r(n)||lr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?me:n.tagName==="IFRAME"?n.contentDocument.body:n,T=t.indexOf("start")!==-1,M=T?c:u,v="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Xe?Ph:Dh)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=T,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],rl(_,0,i,T),_},rl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+$s]=1,s["border"+a+$s]=0,s[n.p]=e+"px",Ct.set(t,s)},te=[],Yu={},Zo,Sd=function(){return sn()-si>34&&(Zo||(Zo=requestAnimationFrame(Hi)))},gs=function(){(!mn||!mn.isPressed||mn.startX>me.clientWidth)&&(re.cache++,mn?Zo||(Zo=requestAnimationFrame(Hi)):Hi(),si||Kr("scrollStart"),si=sn())},Dc=function(){Dm=ie.innerWidth,Pm=ie.innerHeight},Mo=function(t){re.cache++,(t===!0||!rn&&!Rm&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Gu||Dm!==ie.innerWidth||Math.abs(ie.innerHeight-Pm)>ie.innerHeight*.25))&&Sl.restart(!0)},Zr={},SE=[],zm=function r(){return Ze(oe,"scrollEnd",r)||Fr(!0)},Kr=function(t){return Zr[t]&&Zr[t].map(function(e){return e()})||SE},On=[],km=function(t){for(var e=0;e<On.length;e+=5)(!t||On[e+4]&&On[e+4].query===t)&&(On[e].style.cssText=On[e+1],On[e].getBBox&&On[e].setAttribute("transform",On[e+2]||""),On[e+3].uncache=1)},Hm=function(){return re.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},Uh=function(t,e){var n;for(_n=0;_n<te.length;_n++)n=te[_n],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Po=!0,e&&km(e),e||Kr("revert")},Vm=function(t,e){re.cache++,(e||!gn)&&re.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Fn(t)&&(ie.history.scrollRestoration=Ch=t)},gn,Wr=0,Ed,EE=function(){if(Ed!==Wr){var t=Ed=Wr;requestAnimationFrame(function(){return t===Wr&&Fr(!0)})}},Gm=function(){me.appendChild(Us),Rh=!mn&&Us.offsetHeight||ie.innerHeight,me.removeChild(Us)},Td=function(t){return $o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fr=function(t,e){if(kn=_e.documentElement,me=_e.body,wh=[ie,_e,kn,me],si&&!t&&!Po){Ke(oe,"scrollEnd",zm);return}Gm(),gn=oe.isRefreshing=!0,Po||Hm();var n=Kr("refreshInit");Cm&&oe.sort(),e||Uh(),re.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Po=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xu=1,Td(!0),te.forEach(function(i){var s=yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Td(!1),Xu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vm(Ch,1),Sl.pause(),Wr++,gn=2,Hi(2),te.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=oe.isRefreshing=!1,Kr("refresh")},qu=0,sl=1,No,Hi=function(t){if(t===2||!gn&&!Po){oe.isUpdating=!0,No&&No.update(0);var e=te.length,n=sn(),i=n-Pc>=50,s=e&&te[0].scroll();if(sl=qu>s?-1:1,gn||(qu=s),i&&(si&&!Nl&&n-si>200&&(si=0,Kr("scrollEnd")),_o=Pc,Pc=n),sl<0){for(_n=e;_n-- >0;)te[_n]&&te[_n].update(0,i);sl=1}else for(_n=0;_n<e;_n++)te[_n]&&te[_n].update(0,i);oe.isUpdating=!1}Zo=0},$u=[Om,Fm,Dh,Ph,ti+Uo,ti+Do,ti+Io,ti+Lo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ol=$u.concat([Vr,Gr,"boxSizing","max"+$s,"max"+Lh,"position",ti,ke,ke+Io,ke+Do,ke+Uo,ke+Lo]),TE=function(t,e,n){Ns(n);var i=t._gsap;if(i.spacerIsNative)Ns(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Lc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=$u.length,o=e.style,a=t.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Dh]=a[Ph]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vr]=El(t,vn)+We,o[Gr]=El(t,Xe)+We,o[ke]=a[ti]=a[Fm]=a[Om]="0",Ns(i),a[Vr]=a["max"+$s]=n[Vr],a[Gr]=a["max"+Lh]=n[Gr],a[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},bE=/([A-Z])/g,Ns=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(bE,"-$1").toLowerCase())}},Ga=function(t){for(var e=ol.length,n=t.style,i=[],s=0;s<e;s++)i.push(ol[s],n[ol[s]]);return i.t=t,i},AE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},al={left:0,top:0},bd=function(t,e,n,i,s,o,a,l,c,u,h,f,d,_){an(t)&&(t=t(l)),Fn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?il("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,T;if(d&&d.seek(0),isNaN(t)||(t=+t),xo(t))d&&(t=Ct.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&rl(a,n,i,!0);else{an(e)&&(e=e(l));var M=(t||"0").split(" "),v,w,R,b;T=Sn(e,l)||me,v=Oi(T)||{},(!v||!v.left&&!v.top)&&ei(T).display==="none"&&(b=T.style.display,T.style.display="block",v=Oi(T),b?T.style.display=b:T.style.removeProperty("display")),w=il(M[0],v[i.d]),R=il(M[1]||"0",n),t=v[i.p]-c[i.p]-u+w+s-R,a&&rl(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var P=t+n,y=o._isStart;m="scroll"+i.d2,rl(o,P,i,y&&P>20||!y&&(h?Math.max(me[m],kn[m]):o.parentNode[m])<=P+1),h&&(c=Oi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+We))}return d&&T&&(m=Oi(T),d.seek(f),p=Oi(T),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},wE=/(webkit|moz|length|cssText|inset)/i,Ad=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=ei(t);for(o in a)!+o&&!wE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},Wm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wa=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},wd=function(t,e){var n=pr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=Wm(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Hi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ct.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),oe.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},oe=(function(){function r(e,n){xs||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!go){this.update=this.refresh=this.kill=_i;return}n=Md(Fn(n)||xo(n)||n.nodeType?{trigger:n}:n,Ha);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,M=s.once,v=s.snap,w=s.pinReparent,R=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Xe,D=!h&&h!==0,B=Sn(n.scroller||ie),z=Ct.core.getCache(B),V=$r(B),q=("pinType"in n?n.pinType:lr(B,"pinType")||V&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),H="markers"in n?n.markers:Ha.markers,rt=V?0:parseFloat(ei(B)["border"+x.p2+$s])||0,L=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(L)},It=gE(B,V,x),$t=vE(B,V),Z=0,st=0,xt=0,ot=pr(B,x),wt,Pt,Ot,Vt,j,Q,C,Et,it,U,at,Ut,gt,A,S,k,K,tt,J,dt,ut,_t,Yt,lt,ht,zt,Ft,bt,Zt,Gt,ce,I,mt,$,et,pt,vt,Wt,ue;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=B,L.scroll=b?b.time.bind(b):ot,Vt=ot(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cm=1,n.refreshPriority===-9999&&(No=L)),z.tweenScroll=z.tweenScroll||{top:wd(B,Xe),left:wd(B,vn)},L.tweenTo=wt=z.tweenScroll[x.p],L.scrubDuration=function(Mt){mt=xo(Mt)&&Mt,mt?I?I.duration(Mt):I=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:mt,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Gt=0,l||(l=i.vars.id)),v&&((!Pr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&Ct.set(V?[me,kn]:B,{scrollBehavior:"auto"}),re.forEach(function(Mt){return an(Mt)&&Mt.target===(V?_e.scrollingElement||kn:B)&&(Mt.smooth=!1)}),Ot=an(v.snapTo)?v.snapTo:v.snapTo==="labels"?ME(i):v.snapTo==="labelsDirectional"?yE(i):v.directional!==!1?function(Mt,qt){return Ih(v.snapTo)(Mt,sn()-st<500?0:qt.direction)}:Ct.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Pr($)?Ro($.min,$.max):Ro($,$),et=Ct.delayedCall(v.delay||mt/2||.1,function(){var Mt=ot(),qt=sn()-st<500,Lt=wt.tween;if((qt||Math.abs(L.getVelocity())<10)&&!Lt&&!Nl&&Z!==Mt){var Xt=(Mt-Q)/A,Ne=i&&!D?i.totalProgress():Xt,ee=qt?0:(Ne-ce)/(sn()-_o)*1e3||0,Ee=Ct.utils.clamp(-Xt,1-Xt,_s(ee/2)*ee/.185),Ve=Xt+(v.inertia===!1?0:Ee),xe,Me,de=v,Ln=de.onStart,be=de.onInterrupt,un=de.onComplete;if(xe=Ot(Ve,L),xo(xe)||(xe=Ve),Me=Math.max(0,Math.round(Q+xe*A)),Mt<=C&&Mt>=Q&&Me!==Mt){if(Lt&&!Lt._initted&&Lt.data<=_s(Me-Mt))return;v.inertia===!1&&(Ee=xe-Xt),wt(Me,{duration:$(_s(Math.max(_s(Ve-Ne),_s(xe-Ne))*.185/ee/.05||0)),ease:v.ease||"power3",data:_s(Me-Mt),onInterrupt:function(){return et.restart(!0)&&be&&ms(L,be)},onComplete:function(){L.update(),Z=ot(),i&&!D&&(I?I.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),Gt=ce=i&&!D?i.totalProgress():L.progress,T&&T(L),un&&ms(L,un)}},Mt,Ee*A,Me-Mt-Ee*A),Ln&&ms(L,Ln,wt.tween)}}else L.isActive&&Z!==Mt&&et.restart(!0)}).pause()),l&&(Yu[l]=L),f=L.trigger=Sn(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(L)),d=d===!0?f:Sn(d),Fn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ti||(_=!_&&d.parentNode&&d.parentNode.style&&ei(d.parentNode).display==="flex"?!1:ke),L.pin=d,Pt=Ct.core.getCache(d),Pt.spacer?S=Pt.pinState:(R&&(R=Sn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Pt.spacerIsNative=!!R,R&&(Pt.spacerState=Ga(R))),Pt.spacer=tt=R||_e.createElement("div"),tt.classList.add("pin-spacer"),l&&tt.classList.add("pin-spacer-"+l),Pt.pinState=S=Ga(d)),n.force3D!==!1&&Ct.set(d,{force3D:!0}),L.spacer=tt=Pt.spacer,Zt=ei(d),lt=Zt[_+x.os2],dt=Ct.getProperty(d),ut=Ct.quickSetter(d,x.a,We),Lc(d,tt,Zt),K=Ga(d)),H){Ut=Pr(H)?Md(H,yd):yd,U=Va("scroller-start",l,B,x,Ut,0),at=Va("scroller-end",l,B,x,Ut,0,U),J=U["offset"+x.op.d2];var Le=Sn(lr(B,"content")||B);Et=this.markerStart=Va("start",l,Le,x,Ut,J,0,b),it=this.markerEnd=Va("end",l,Le,x,Ut,J,0,b),b&&(Wt=Ct.quickSetter([Et,it],x.a,We)),!q&&!(Si.length&&lr(B,"fixedMarkers")===!0)&&(xE(V?me:B),Ct.set([U,at],{force3D:!0}),zt=Ct.quickSetter(U,x.a,We),bt=Ct.quickSetter(at,x.a,We))}if(b){var Tt=b.vars.onUpdate,Dt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),Tt&&Tt.apply(b,Dt||[])})}if(L.previous=function(){return te[te.indexOf(L)-1]},L.next=function(){return te[te.indexOf(L)+1]},L.revert=function(Mt,qt){if(!qt)return L.kill(!0);var Lt=Mt!==!1||!L.enabled,Xt=rn;Lt!==L.isReverted&&(Lt&&(pt=Math.max(ot(),L.scroll.rec||0),xt=L.progress,vt=i&&i.progress()),Et&&[Et,it,U,at].forEach(function(Ne){return Ne.style.display=Lt?"none":"block"}),Lt&&(rn=L,L.update(Lt)),d&&(!w||!L.isActive)&&(Lt?TE(d,tt,S):Lc(d,tt,ei(d),ht)),Lt||L.update(Lt),rn=Xt,L.isReverted=Lt)},L.refresh=function(Mt,qt,Lt,Xt){if(!((rn||!L.enabled)&&!qt)){if(d&&Mt&&si){Ke(r,"scrollEnd",zm);return}!gn&&ct&&ct(L),rn=L,wt.tween&&!Lt&&(wt.tween.kill(),wt.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qt){return Qt.vars.immediateRender&&Qt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ne=It(),ee=$t(),Ee=b?b.duration():yi(B,x),Ve=A<=.01||!A,xe=0,Me=Xt||0,de=Pr(Lt)?Lt.end:n.end,Ln=n.endTrigger||f,be=Pr(Lt)?Lt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),un=L.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,L),$n=f&&Math.max(0,te.indexOf(L))||0,Ge=$n,E,N,X,Y,F,nt,ft,At,Rt,kt,Bt,Nt,ne;for(H&&Pr(Lt)&&(Nt=Ct.getProperty(U,x.p),ne=Ct.getProperty(at,x.p));Ge-- >0;)nt=te[Ge],nt.end||nt.refresh(0,1)||(rn=L),ft=nt.pin,ft&&(ft===f||ft===d||ft===un)&&!nt.isReverted&&(kt||(kt=[]),kt.unshift(nt),nt.revert(!0,!0)),nt!==te[Ge]&&($n--,Ge--);for(an(be)&&(be=be(L)),be=_d(be,"start",L),Q=bd(be,f,Ne,x,ot(),Et,U,L,ee,rt,q,Ee,b,L._startClamp&&"_startClamp")||(d?-.001:0),an(de)&&(de=de(L)),Fn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Fn(be)?be.split(" ")[0]:"")+de:(xe=il(de.substr(2),Ne),de=Fn(be)?be:(b?Ct.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Q):Q)+xe,Ln=f)),de=_d(de,"end",L),C=Math.max(Q,bd(de||(Ln?"100% 0":Ee),Ln,Ne,x,ot()+xe,it,at,L,ee,rt,q,Ee,b,L._endClamp&&"_endClamp"))||-.001,xe=0,Ge=$n;Ge--;)nt=te[Ge]||{},ft=nt.pin,ft&&nt.start-nt._pinPush<=Q&&!b&&nt.end>0&&(E=nt.end-(L._startClamp?Math.max(0,nt.start):nt.start),(ft===f&&nt.start-nt._pinPush<Q||ft===un)&&isNaN(be)&&(xe+=E*(1-nt.progress)),ft===d&&(Me+=E));if(Q+=xe,C+=xe,L._startClamp&&(L._startClamp+=xe),L._endClamp&&!gn&&(L._endClamp=C||-.001,C=Math.min(C,yi(B,x))),A=C-Q||(Q-=.01)&&.001,Ve&&(xt=Ct.utils.clamp(0,1,Ct.utils.normalize(Q,C,pt))),L._pinPush=Me,Et&&xe&&(E={},E[x.a]="+="+xe,un&&(E[x.p]="-="+ot()),Ct.set([Et,it],E)),d&&!(Xu&&L.end>=yi(B,x)))E=ei(d),Y=x===Xe,X=ot(),_t=parseFloat(dt(x.a))+Me,!Ee&&C>1&&(Bt=(V?_e.scrollingElement||kn:B).style,Bt={style:Bt,value:Bt["overflow"+x.a.toUpperCase()]},V&&ei(me)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Bt.style["overflow"+x.a.toUpperCase()]="scroll")),Lc(d,tt,E),K=Ga(d),N=Oi(d,!0),At=q&&pr(B,Y?vn:Xe)(),_?(ht=[_+x.os2,A+Me+We],ht.t=tt,Ge=_===ke?El(d,x)+A+Me:0,Ge&&(ht.push(x.d,Ge+We),tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=Ge+We)),Ns(ht),un&&te.forEach(function(Qt){Qt.pin===un&&Qt.vars.pinSpacing!==!1&&(Qt._subPinOffset=!0)}),q&&ot(pt)):(Ge=El(d,x),Ge&&tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=Ge+We)),q&&(F={top:N.top+(Y?X-Q:At)+We,left:N.left+(Y?At:X-Q)+We,boxSizing:"border-box",position:"fixed"},F[Vr]=F["max"+$s]=Math.ceil(N.width)+We,F[Gr]=F["max"+Lh]=Math.ceil(N.height)+We,F[ti]=F[ti+Io]=F[ti+Do]=F[ti+Uo]=F[ti+Lo]="0",F[ke]=E[ke],F[ke+Io]=E[ke+Io],F[ke+Do]=E[ke+Do],F[ke+Uo]=E[ke+Uo],F[ke+Lo]=E[ke+Lo],k=AE(S,F,w),gn&&ot(0)),i?(Rt=i._initted,Cc(1),i.render(i.duration(),!0,!0),Yt=dt(x.a)-_t+A+Me,Ft=Math.abs(A-Yt)>1,q&&Ft&&k.splice(k.length-2,2),i.render(0,!0,!0),Rt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cc(0)):Yt=A,Bt&&(Bt.value?Bt.style["overflow"+x.a.toUpperCase()]=Bt.value:Bt.style.removeProperty("overflow-"+x.a));else if(f&&ot()&&!b)for(N=f.parentNode;N&&N!==me;)N._pinOffset&&(Q-=N._pinOffset,C-=N._pinOffset),N=N.parentNode;kt&&kt.forEach(function(Qt){return Qt.revert(!1,!0)}),L.start=Q,L.end=C,Vt=j=gn?pt:ot(),!b&&!gn&&(Vt<pt&&ot(pt),L.scroll.rec=0),L.revert(!1,!0),st=sn(),et&&(Z=-1,et.restart(!0)),rn=0,i&&D&&(i._initted||vt)&&i.progress()!==vt&&i.progress(vt||0,!0).render(i.time(),!0,!0),(Ve||xt!==L.progress||b||g||i&&!i._initted)&&(i&&!D&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Q<-.001&&!xt?Ct.utils.normalize(Q,C,0):xt,!0),L.progress=Ve||(Vt-Q)/A===xt?0:xt),d&&_&&(tt._pinOffset=Math.round(L.progress*Yt)),I&&I.invalidate(),isNaN(Nt)||(Nt-=Ct.getProperty(U,x.p),ne-=Ct.getProperty(at,x.p),Wa(U,x,Nt),Wa(Et,x,Nt-(Xt||0)),Wa(at,x,ne),Wa(it,x,ne-(Xt||0))),Ve&&!gn&&L.update(),u&&!gn&&!gt&&(gt=!0,u(L),gt=!1)}},L.getVelocity=function(){return(ot()-j)/(sn()-_o)*1e3||0},L.endAnimation=function(){uo(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||uo(i,L.direction<0,1):uo(i,i.reversed()))},L.labelToScroll=function(Mt){return i&&i.labels&&(Q||L.refresh()||Q)+i.labels[Mt]/i.duration()*A||0},L.getTrailing=function(Mt){var qt=te.indexOf(L),Lt=L.direction>0?te.slice(0,qt).reverse():te.slice(qt+1);return(Fn(Mt)?Lt.filter(function(Xt){return Xt.vars.preventOverlaps===Mt}):Lt).filter(function(Xt){return L.direction>0?Xt.end<=Q:Xt.start>=C})},L.update=function(Mt,qt,Lt){if(!(b&&!Lt&&!Mt)){var Xt=gn===!0?pt:L.scroll(),Ne=Mt?0:(Xt-Q)/A,ee=Ne<0?0:Ne>1?1:Ne||0,Ee=L.progress,Ve,xe,Me,de,Ln,be,un,$n;if(qt&&(j=Vt,Vt=b?ot():Xt,v&&(ce=Gt,Gt=i&&!D?i.totalProgress():ee)),m&&d&&!rn&&!Fa&&si&&(!ee&&Q<Xt+(Xt-j)/(sn()-_o)*m?ee=1e-4:ee===1&&C>Xt+(Xt-j)/(sn()-_o)*m&&(ee=.9999)),ee!==Ee&&L.enabled){if(Ve=L.isActive=!!ee&&ee<1,xe=!!Ee&&Ee<1,be=Ve!==xe,Ln=be||!!ee!=!!Ee,L.direction=ee>Ee?1:-1,L.progress=ee,Ln&&!rn&&(Me=ee&&!Ee?0:ee===1?1:Ee===1?2:3,D&&(de=!be&&W[Me+1]!=="none"&&W[Me+1]||W[Me],$n=i&&(de==="complete"||de==="reset"||de in i))),y&&(be||$n)&&($n||h||!i)&&(an(y)?y(L):L.getTrailing(y).forEach(function(X){return X.endAnimation()})),D||(I&&!rn&&!Fa?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",ee,i._tTime/i._tDur):(I.vars.totalProgress=ee,I.invalidate().restart())):i&&i.totalProgress(ee,!!(rn&&(st||Mt)))),d){if(Mt&&_&&(tt.style[_+x.os2]=lt),!q)ut(vo(_t+Yt*ee));else if(Ln){if(un=!Mt&&ee>Ee&&C+1>Xt&&Xt+1>=yi(B,x),w)if(!Mt&&(Ve||un)){var Ge=Oi(d,!0),E=Xt-Q;Ad(d,me,Ge.top+(x===Xe?E:0)+We,Ge.left+(x===Xe?0:E)+We)}else Ad(d,tt);Ns(Ve||un?k:K),Ft&&ee<1&&Ve||ut(_t+(ee===1&&!un?Yt:0))}}v&&!wt.tween&&!rn&&!Fa&&et.restart(!0),a&&(be||M&&ee&&(ee<1||!Rc))&&$o(a.targets).forEach(function(X){return X.classList[Ve||M?"add":"remove"](a.className)}),o&&!D&&!Mt&&o(L),Ln&&!rn?(D&&($n&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(L)),(be||!Rc)&&(c&&be&&ms(L,c),G[Me]&&ms(L,G[Me]),M&&(ee===1?L.kill(!1,1):G[Me]=0),be||(Me=ee===1?1:3,G[Me]&&ms(L,G[Me]))),P&&!Ve&&Math.abs(L.getVelocity())>(xo(P)?P:2500)&&(uo(L.callbackAnimation),I?I.progress(1):uo(i,de==="reverse"?1:!ee,1))):D&&o&&!rn&&o(L)}if(bt){var N=b?Xt/b.duration()*(b._caScrollDist||0):Xt;zt(N+(U._isFlipped?1:0)),bt(N)}Wt&&Wt(-Xt/b.duration()*(b._caScrollDist||0))}},L.enable=function(Mt,qt){L.enabled||(L.enabled=!0,Ke(B,"resize",Mo),V||Ke(B,"scroll",gs),ct&&Ke(r,"refreshInit",ct),Mt!==!1&&(L.progress=xt=0,Vt=j=Z=ot()),qt!==!1&&L.refresh())},L.getTween=function(Mt){return Mt&&wt?wt.tween:I},L.setPositions=function(Mt,qt,Lt,Xt){if(b){var Ne=b.scrollTrigger,ee=b.duration(),Ee=Ne.end-Ne.start;Mt=Ne.start+Ee*Mt/ee,qt=Ne.start+Ee*qt/ee}L.refresh(!1,!1,{start:gd(Mt,Lt&&!!L._startClamp),end:gd(qt,Lt&&!!L._endClamp)},Xt),L.update()},L.adjustPinSpacing=function(Mt){if(ht&&Mt){var qt=ht.indexOf(x.d)+1;ht[qt]=parseFloat(ht[qt])+Mt+We,ht[1]=parseFloat(ht[1])+Mt+We,Ns(ht)}},L.disable=function(Mt,qt){if(Mt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qt||I&&I.pause(),pt=0,Pt&&(Pt.uncache=1),ct&&Ze(r,"refreshInit",ct),et&&(et.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!V)){for(var Lt=te.length;Lt--;)if(te[Lt].scroller===B&&te[Lt]!==L)return;Ze(B,"resize",Mo),V||Ze(B,"scroll",gs)}},L.kill=function(Mt,qt){L.disable(Mt,qt),I&&!qt&&I.kill(),l&&delete Yu[l];var Lt=te.indexOf(L);Lt>=0&&te.splice(Lt,1),Lt===_n&&sl>0&&_n--,Lt=0,te.forEach(function(Xt){return Xt.scroller===L.scroller&&(Lt=1)}),Lt||gn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Mt&&i.revert({kill:!1}),qt||i.kill()),Et&&[Et,it,U,at].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),No===L&&(No=0),d&&(Pt&&(Pt.uncache=1),Lt=0,te.forEach(function(Xt){return Xt.pin===d&&Lt++}),Lt||(Pt.spacer=0)),n.onKill&&n.onKill(L)},te.push(L),L.enable(!1,!1),ue&&ue(L),i&&i.add&&!A){var Kt=L.update;L.update=function(){L.update=Kt,re.cache++,Q||C||L.refresh()},Ct.delayedCall(.01,L.update),A=.01,Q=C=0}else L.refresh();d&&EE()},r.register=function(n){return xs||(Ct=n||Im(),Lm()&&window.document&&r.enable(),xs=go),xs},r.defaults=function(n){if(n)for(var i in n)Ha[i]=n[i];return Ha},r.disable=function(n,i){go=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),Ze(ie,"wheel",gs),Ze(_e,"scroll",gs),clearInterval(Oa),Ze(_e,"touchcancel",_i),Ze(me,"touchstart",_i),za(Ze,_e,"pointerdown,touchstart,mousedown",vd),za(Ze,_e,"pointerup,touchend,mouseup",xd),Sl.kill(),Ba(Ze);for(var s=0;s<re.length;s+=3)ka(Ze,re[s],re[s+1]),ka(Ze,re[s],re[s+2])},r.enable=function(){if(ie=window,_e=document,kn=_e.documentElement,me=_e.body,Ct){if($o=Ct.utils.toArray,Ro=Ct.utils.clamp,Wu=Ct.core.context||_i,Cc=Ct.core.suppressOverwrites||_i,Ch=ie.history.scrollRestoration||"auto",qu=ie.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),me){go=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",Gm(),_E(),Fe.register(Ct),r.isTouch=Fe.isTouch,Ji=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gu=Fe.isTouch===1,Ke(ie,"wheel",gs),wh=[ie,_e,kn,me],Ct.matchMedia?(r.matchMedia=function(u){var h=Ct.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ct.addEventListener("matchMediaInit",function(){Hm(),Uh()}),Ct.addEventListener("matchMediaRevert",function(){return km()}),Ct.addEventListener("matchMedia",function(){Fr(0,1),Kr("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return Dc(),Dc})):console.warn("Requires GSAP 3.11.0 or later"),Dc(),Ke(_e,"scroll",gs);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(me),Xe.m=Math.round(a.top+Xe.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Oa=setInterval(Sd,250),Ct.delayedCall(.5,function(){return Fa=0}),Ke(_e,"touchcancel",_i),Ke(me,"touchstart",_i),za(Ke,_e,"pointerdown,touchstart,mousedown",vd),za(Ke,_e,"pointerup,touchend,mouseup",xd),Vu=Ct.utils.checkPrefix("transform"),ol.push(Vu),xs=sn(),Sl=Ct.delayedCall(.2,Fr).pause(),Ms=[_e,"visibilitychange",function(){var u=ie.innerWidth,h=ie.innerHeight;_e.hidden?(pd=u,md=h):(pd!==u||md!==h)&&Mo()},_e,"DOMContentLoaded",Fr,ie,"load",Fr,ie,"resize",Mo],Ba(Ke),te.forEach(function(u){return u.enable(0,1)}),l=0;l<re.length;l+=3)ka(Ze,re[l],re[l+1]),ka(Ze,re[l],re[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Rc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Oa)||(Oa=i)&&setInterval(Sd,i),"ignoreMobileResize"in n&&(Gu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ba(Ze)||Ba(Ke,n.autoRefreshEvents||"none"),Rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=re.indexOf(s),a=$r(s);~o&&re.splice(o,a?6:2),i&&(a?Si.unshift(ie,i,me,i,kn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Fn(n)?Sn(n):n).getBoundingClientRect(),a=o[s?Vr:Gr]*i||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(n,i,s){Fn(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?Vr:Gr],l=i==null?a/2:i in Tl?Tl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Zr.killAll||[];Zr={},i.forEach(function(s){return s()})}},r})();oe.version="3.15.0";oe.saveStyles=function(r){return r?$o(r).forEach(function(t){if(t&&t.style){var e=On.indexOf(t);e>=0&&On.splice(e,5),On.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),Wu())}}):On};oe.revert=function(r,t){return Uh(!r,t)};oe.create=function(r,t){return new oe(r,t)};oe.refresh=function(r){return r?Mo(!0):(xs||oe.register())&&Fr(!0)};oe.update=function(r){return++re.cache&&Hi(r===!0?2:0)};oe.clearScrollMemory=Vm;oe.maxScroll=function(r,t){return yi(r,t?vn:Xe)};oe.getScrollFunc=function(r,t){return pr(Sn(r),t?vn:Xe)};oe.getById=function(r){return Yu[r]};oe.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};oe.isScrolling=function(){return!!si};oe.snapDirectional=Ih;oe.addEventListener=function(r,t){var e=Zr[r]||(Zr[r]=[]);~e.indexOf(t)||e.push(t)};oe.removeEventListener=function(r,t){var e=Zr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};oe.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ct.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&an(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return an(s)&&(s=s(),Ke(oe,"refresh",function(){return s=t.batchMax()})),$o(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(oe.create(c))}),e};var Cd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ic=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===kn&&r(me,e)},Xa={auto:1,scroll:1},CE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ct.core.getCache(s),a=sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xa[(l=ei(s)).overflowY]||Xa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!$r(s)&&(Xa[(l=ei(s)).overflowY]||Xa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Xm=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&CE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(_e,Fe.eventTypes[0],Pd,!1,!0)},onDisable:function(){return Ze(_e,Fe.eventTypes[0],Pd,!0)}})},RE=/(input|label|select|textarea)/i,Rd,Pd=function(t){var e=RE.test(t.target.tagName);(e||Rd)&&(t._gsapAllow=!0,Rd=e)},PE=function(t){Pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Sn(t.target)||kn,u=Ct.core.globals().ScrollSmoother,h=u&&u.get(),f=Ji&&(t.content&&Sn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=pr(c,Xe),_=pr(c,vn),g=1,m=(Fe.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,T=an(i)?function(){return i(a)}:function(){return i||2.8},M,v,w=Xm(c,t.type,!0,s),R=function(){return v=!1},b=_i,P=_i,y=function(){l=yi(c,Xe),P=Ro(Ji?1:0,l),n&&(b=Ro(0,yi(c,vn))),M=Wr},x=function(){f._gsap.y=vo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(R);var H=vo(a.deltaY/2),rt=P(d.v-H);if(f&&rt!==d.v+d.offset){d.offset=rt-d.v;var L=vo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=re.cache,Hi()}return!0}d.offset&&x(),v=!0},B,z,V,q,G=function(){y(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Ct.set(f,{y:"+=0"}),t.ignoreCheck=function(W){return Ji&&W.type==="touchmove"&&D()||g>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){v=!1;var W=g;g=vo((ie.visualViewport&&ie.visualViewport.scale||1)/m),B.pause(),W!==g&&Ic(c,g>1.01?!0:n?!1:"x"),z=_(),V=d(),y(),M=Wr},t.onRelease=t.onGestureStart=function(W,H){if(d.offset&&x(),!H)q.restart(!0);else{re.cache++;var rt=T(),L,ct;n&&(L=_(),ct=L+rt*.05*-W.velocityX/.227,rt*=Cd(_,L,ct,yi(c,vn)),B.vars.scrollX=b(ct)),L=d(),ct=L+rt*.05*-W.velocityY/.227,rt*=Cd(d,L,ct,yi(c,Xe)),B.vars.scrollY=P(ct),B.invalidate().duration(rt).play(.01),(Ji&&B.vars.scrollY>=l||L>=l-1)&&Ct.to({},{onUpdate:G,duration:rt})}o&&o(W)},t.onWheel=function(){B._ts&&B.pause(),sn()-p>1e3&&(M=0,p=sn())},t.onChange=function(W,H,rt,L,ct){if(Wr!==M&&y(),H&&n&&_(b(L[2]===H?z+(W.startX-W.x):_()+H-L[1])),rt){d.offset&&x();var It=ct[2]===rt,$t=It?V+W.startY-W.y:d()+rt-ct[1],Z=P($t);It&&$t!==Z&&(V+=Z-$t),d(Z)}(rt||H)&&Hi()},t.onEnable=function(){Ic(c,n?!1:"x"),oe.addEventListener("refresh",G),Ke(ie,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},t.onDisable=function(){Ic(c,!0),Ze(ie,"resize",G),oe.removeEventListener("refresh",G),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=Ji,Ji&&!d()&&d(1),Ji&&Ct.ticker.add(_i),q=a._dc,B=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Wm(d,d(),function(){return B.pause()})},onUpdate:Hi,onComplete:q.vars.onComplete}),a};oe.sort=function(r){if(an(r))return te.sort(r);var t=ie.pageYOffset||0;return oe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};oe.observe=function(r){return new Fe(r)};oe.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var t=r instanceof Fe?r:PE(r);return mn&&mn.target===t.target&&mn.kill(),$r(t.target)&&(mn=t),t};oe.core={_getVelocityProp:Hu,_inputObserver:Xm,_scrollers:re,_proxies:Si,bridge:{ss:function(){si||Kr("scrollStart"),si=sn()},ref:function(){return rn}}};Im()&&Ct.registerPlugin(oe);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=(r,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(t).forEach(i=>{n.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const s=Ym(...i);n.appendChild(s)}),n};var DE=([r,t,e])=>Ym(r,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=r=>Array.from(r.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),IE=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",UE=r=>r.flatMap(IE).map(e=>e.trim()).filter(Boolean).filter((e,n,i)=>i.indexOf(e)===n).join(" "),NE=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Dd=(r,{nameAttr:t,icons:e,attrs:n})=>{var _;const i=r.getAttribute(t);if(i==null)return;const s=NE(i),o=e[s];if(!o)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const a=LE(r),[l,c,u]=o,h={...c,"data-lucide":i,...n,...a},f=UE(["lucide",`lucide-${i}`,a,n]);f&&Object.assign(h,{class:f});const d=DE([l,h,u]);return(_=r.parentNode)==null?void 0:_.replaceChild(d,r)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=["svg",_r,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=["svg",_r,[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=["svg",_r,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=["svg",_r,[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=["svg",_r,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=["svg",_r,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=["svg",_r,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=["svg",_r,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=({icons:r={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(i=>Dd(i,{nameAttr:t,icons:r,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>Dd(s,{nameAttr:"icon-name",icons:r,attrs:e})))}};Ir.registerPlugin(oe);WE({icons:{Box:OE,Fingerprint:FE,Github:BE,KeyRound:zE,MessageSquareWarning:kE,Package:HE,Route:VE,Terminal:GE}});const Nh=window.matchMedia("(prefers-reduced-motion: reduce)").matches,bl=new URLSearchParams(window.location.search).has("static"),Ld=[{text:"$ npx @optimistotaku/aegis-scan .",className:"scan-ok"},{text:"Aegis Security Scanner v1.2.0",className:"scan-muted"},{text:"Scanning: /your-project  (312 files)",className:"scan-muted"},{text:""},{text:"[CRITICAL] Secrets Auditor",className:"scan-critical"},{text:"src/config.py:14   Exposed Anthropic API key"},{text:"                  → sk-ant-api03-...7Kx  [aegis-id: exposed-api-key]",className:"scan-muted"},{text:""},{text:"[HIGH] Dependency Hallucination Guard",className:"scan-high"},{text:"requirements.txt:8  Package 'openai-utils-helper' not found on PyPI"},{text:"package.json:22     Package 'react-llm-bridge' registered 6 days ago"},{text:""},{text:"[HIGH] PII Compliance Taint Tracker",className:"scan-high"},{text:"api/chat.py:47      user_email flows into openai.chat.completions.create()"},{text:""},{text:"Summary: 3 findings (1 CRITICAL · 2 HIGH · 0 MEDIUM · 0 LOW)",className:"scan-ok"}],XE=async()=>{const r=document.querySelector("#scan-output");if(r){if(Nh||bl){r.innerHTML=Ld.map(t=>`<span class="${t.className||""}">${t.text}</span>`).join(`
`);return}r.textContent="";for(const t of Ld){const e=document.createElement("span");t.className&&(e.className=t.className),r.append(e);for(const n of t.text)e.textContent+=n,await new Promise(i=>window.setTimeout(i,t.text.startsWith("$")?18:7));r.append(`
`),await new Promise(n=>window.setTimeout(n,t.text?90:40))}}},Id=(r,t)=>{const e=r.querySelector("span");e.textContent="Copied to clipboard",window.setTimeout(()=>{e.textContent=t},1400)};document.querySelectorAll(".copy-command").forEach(r=>{r.addEventListener("click",async()=>{const t=r.dataset.copy;try{await navigator.clipboard.writeText(t),Id(r,t)}catch{const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",document.body.append(e),e.select();const n=document.execCommand("copy");e.remove(),n&&Id(r,t)}})});const YE=document.querySelector("#aegis-scene"),js=new _g,Al=new zn(38,window.innerWidth/window.innerHeight,.1,100);Al.position.set(0,.1,10);const Ol=new Yy({canvas:YE,antialias:!0,alpha:!0});Ol.setPixelRatio(Math.min(window.devicePixelRatio,1.55));Ol.setSize(window.innerWidth,window.innerHeight);const bi=new ho;js.add(bi);const Qs=new dp;Qs.moveTo(0,2.55);Qs.bezierCurveTo(1.55,2.2,2.25,1.38,2.08,.1);Qs.bezierCurveTo(1.92,-1.08,.92,-2.1,0,-2.78);Qs.bezierCurveTo(-.92,-2.1,-1.92,-1.08,-2.08,.1);Qs.bezierCurveTo(-2.25,1.38,-1.55,2.2,0,2.55);const Oh=new oh(Qs,{depth:.24,bevelEnabled:!0,bevelSegments:5,bevelSize:.05,bevelThickness:.08});Oh.center();const Fh=new fi(Oh,new e0({color:723207,metalness:.62,roughness:.34,clearcoat:.7,clearcoatRoughness:.2,emissive:1708291,emissiveIntensity:.25}));Fh.rotation.y=-.22;bi.add(Fh);const qm=new xg(new Ng(Oh,18),new rh({color:14198591,transparent:!0,opacity:.72}));qm.rotation.copy(Fh.rotation);bi.add(qm);const $m=new fi(new ah(.34,48,24),new gp({color:14198591,metalness:.8,roughness:.22,emissive:4138496,emissiveIntensity:.28}));$m.position.z=.24;bi.add($m);const qE=new rh({color:14198591,transparent:!0,opacity:.28}),$E=[2.85,3.45,4.05].map(r=>{const e=new Cl(0,0,r,r*.42,0,Math.PI*2).getPoints(160),n=new Dn().setFromPoints(e),i=new Mg(n,qE.clone());return i.rotation.x=-.1,bi.add(i),i}),Zm=new Dn,Km=460,ll=new Float32Array(Km*3);for(let r=0;r<Km;r+=1)ll[r*3]=(Math.random()-.5)*14,ll[r*3+1]=(Math.random()-.5)*8,ll[r*3+2]=(Math.random()-.5)*6-1;Zm.setAttribute("position",new pi(ll,3));const Jm=new yg(Zm,new ap({color:14198591,size:.018,transparent:!0,opacity:.42}));js.add(Jm);js.add(new a0(15979413,.6));const jm=new xp(16767370,34,14);jm.position.set(3.6,3.2,4.2);js.add(jm);const Qm=new xp(9053210,12,11);Qm.position.set(-4.5,-2.2,3.2);js.add(Qm);const t_=()=>{const r=window.innerWidth<920;bi.position.set(r?1.8:3.45,r?.8:.2,r?-1.8:-.2),bi.scale.setScalar(r?.72:1)};t_();const ZE=new c0,e_=()=>{const r=ZE.getElapsedTime();!Nh&&!bl&&(bi.rotation.y=Math.sin(r*.35)*.08,bi.rotation.z=Math.sin(r*.22)*.025,$E.forEach((t,e)=>{t.rotation.z=r*(.08+e*.035)*(e%2?-1:1)}),Jm.rotation.y=r*.018),Ol.render(js,Al),bl||window.requestAnimationFrame(e_)};e_();window.addEventListener("resize",()=>{t_(),Al.aspect=window.innerWidth/window.innerHeight,Al.updateProjectionMatrix(),Ol.setSize(window.innerWidth,window.innerHeight),oe.refresh()});XE();!Nh&&!bl&&(Ir.defaults({ease:"power3.out"}),Ir.timeline().from(".brand, nav a, .nav-cta",{y:-16,autoAlpha:0,stagger:.06,duration:.7}).from(".eyebrow, h1, .hero-lede, .hero-actions",{y:32,autoAlpha:0,stagger:.08,duration:.85},"-=0.25").from(".hero-terminal",{y:34,rotationX:-5,autoAlpha:0,duration:.9},"-=0.6"),Ir.to(bi.position,{y:"+=0.8",z:"-=0.6",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}}),Ir.utils.toArray(".temple-section, .stats-bar").forEach(r=>{Ir.from(r.querySelectorAll("h2, .section-kicker, p, .comparison, .module-card, .code-panel, .copy-command.large, .stats-bar div"),{y:36,autoAlpha:0,duration:.75,stagger:.06,scrollTrigger:{trigger:r,start:"top 75%",toggleActions:"play none none reverse"}})}));
