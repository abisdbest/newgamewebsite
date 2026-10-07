var bl=Object.defineProperty;var yl=(l,i,e)=>i in l?bl(l,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[i]=e;var o=(l,i,e)=>(yl(l,typeof i!="symbol"?i+"":i,e),e);import{b3 as Dl,b4 as ia,b5 as br,b6 as Ml,b7 as sa,b8 as yr,C as st,b9 as Dr,ba as Ll,ak as Rl,g as Te,ax as Bt,bb as Gt,bc as ns,m as ls,V as m,o as Cl,O as we,bd as Tl,be as Il,ap as ks,bf as Fl,bg as Ut,bh as Mr,aW as et,aP as _l,bi as Ps,ao as $t,aU as ci,h as Lt,bj as kl,B as gt,bk as Pl,t as ei,bl as El,am as Qe,bm as Nl,aQ as Ol,bn as Es,aj as Bl,bo as Ul,bp as Hl,bq as zl,br as Wl,bs as Gl,bt as Lr,bu as Rr,bv as Vl,bw as jl,bx as Zl,by as Ql,k as pt,b2 as aa,bz as Xl,bA as Yl,bB as Kl,bC as Io,bD as Fo,bE as _o,bF as ko,bG as ql,r as Cr,bH as Jl,bI as ii,f as K,bJ as $l,l as U,a as L,aO as Ve,ai as vi,a2 as E,aZ as Tr,a_ as Ir,a$ as Fr,b0 as _r,L as ka,M as le,I as ee,T as mt,a4 as Me,A as De,d as se,a5 as Ri,a3 as eh,bK as Po,ab as th,aG as ss,D as Eo,c as q,E as Z,S as Pa,b as pi,bL as Ea,bM as Na,bN as No,bO as Ns,aH as Oo,F as Ye,s as kr,aY as Ci,bP as ih,aX as Ti,q as At,i as Ss,n as Pr,j as We,N as sh,bQ as ah,bR as oh,au as rh,bS as nh,bT as lh,bU as hh,bV as dh,aV as xi,b1 as ch,bW as gh}from"./conifers.26f84295.js";import{f as vt}from"./scheduler.05185c5f.js";import{w as fe}from"./index.205d685d.js";const bs=!1,J={Chase:{pitch:{near:.25,far:.15},yOffset:{near:1,far:1.3},posOffset:[1.4,0,0],range:{min:-1,near:4,far:4.75,max:45},farSpeed:45,smoothFactor:1.5,rollFactor:0,nearPlane:.3,yawLimit:-1,minPitch:-.25,maxPitch:1.3,fovFactor:.4,hasCollisions:!0},ChaseFar:{pitch:{near:.2,far:.1},yOffset:{near:1.2,far:2.4},posOffset:[0,0,0],range:{min:-3,near:6,far:9,max:41},farSpeed:45,smoothFactor:1.25,rollFactor:0,nearPlane:.5,yawLimit:-1,minPitch:-.2,maxPitch:1.37,fovFactor:.3,hasCollisions:!0},FirstPerson:{pitch:{near:0,far:0},yOffset:{near:.7,far:.7},posOffset:[0,1,0],range:{min:0,near:.75,far:.75,max:0},farSpeed:45,smoothFactor:0,isInterior:!0,nearPlane:.05,rollFactor:.5,yawLimit:1,minPitch:-.6,maxPitch:.6,fovFactor:0},Bonnet:{pitch:{near:-0,far:-0},yOffset:{near:.7,far:.7},posOffset:[.75,.75,0],range:{min:0,near:.75,far:.75,max:0},farSpeed:45,smoothFactor:.3,rollFactor:1,nearPlane:.1,yawLimit:0,minPitch:0,maxPitch:0,fovFactor:.2,static:!0},Bumper:{pitch:{near:-0,far:-0},yOffset:{near:.7,far:.7},posOffset:[1,.5,0],range:{min:0,near:0,far:0,max:0},farSpeed:45,smoothFactor:.3,hideVehicle:!0,rollFactor:1,nearPlane:.25,yawLimit:0,minPitch:0,maxPitch:0,fovFactor:.2,static:!0}};class Ke{constructor(){o(this,"hasInit",!1);o(this,"autodrive",!1);o(this,"braking",!1);o(this,"softBraking",!1)}init(){n.onReady()}reset(){n.onReset()}update(i){}destroy(){}setInterior(){}setShadow(){}setGripFactor(){}setSpeedFactor(){}setShowWheel(){}setDriveMode(){}setDriverSide(){}setDriveLane(){}setHeadlightIntensity(i){}setAutodrive(i){this.autodrive=i}}o(Ke,"id","vehicle"),o(Ke,"name","Vehicle"),o(Ke,"icon","/img/ico_veh_coupe.svg"),o(Ke,"custom",{}),o(Ke,"cameras",J);function Bo(l,i){if(i===Dl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),l;if(i===ia||i===br){let e=l.getIndex();if(e===null){const r=[],c=l.getAttribute("position");if(c!==void 0){for(let g=0;g<c.count;g++)r.push(g);l.setIndex(r),e=l.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const s=e.count-2,a=[];if(i===ia)for(let r=1;r<=s;r++)a.push(e.getX(0)),a.push(e.getX(r)),a.push(e.getX(r+1));else for(let r=0;r<s;r++)r%2===0?(a.push(e.getX(r)),a.push(e.getX(r+1)),a.push(e.getX(r+2))):(a.push(e.getX(r+2)),a.push(e.getX(r+1)),a.push(e.getX(r)));a.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const t=l.clone();return t.setIndex(a),t.clearGroups(),t}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",i),l}class Oa extends Ml{constructor(i){super(i),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new mh(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new Rh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new xh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new Dh(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Th(e)})}load(i,e,s,a){const t=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=sa.extractUrlBase(i),this.manager.itemStart(i);const c=function(f){a?a(f):console.error(f),t.manager.itemError(i),t.manager.itemEnd(i)},g=new yr(this.manager);g.setPath(this.path),g.setResponseType("arraybuffer"),g.setRequestHeader(this.requestHeader),g.setWithCredentials(this.withCredentials),g.load(i,function(f){try{t.parse(f,r,function(x){e(x),t.manager.itemEnd(i)},c)}catch(x){c(x)}},s,c)}setDRACOLoader(i){return this.dracoLoader=i,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(i){return this.ktx2Loader=i,this}setMeshoptDecoder(i){return this.meshoptDecoder=i,this}register(i){return this.pluginCallbacks.indexOf(i)===-1&&this.pluginCallbacks.push(i),this}unregister(i){return this.pluginCallbacks.indexOf(i)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(i),1),this}parse(i,e,s,a){let t;const r={},c={},g=new TextDecoder;if(typeof i=="string")t=JSON.parse(i);else if(i instanceof ArrayBuffer)if(g.decode(new Uint8Array(i,0,4))===Er){try{r[Q.KHR_BINARY_GLTF]=new Ih(i)}catch(w){a&&a(w);return}t=JSON.parse(r[Q.KHR_BINARY_GLTF].content)}else t=JSON.parse(g.decode(i));else t=i;if(t.asset===void 0||t.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new Gh(t,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let x=0;x<this.pluginCallbacks.length;x++){const w=this.pluginCallbacks[x](f);c[w.name]=w,r[w.name]=!0}if(t.extensionsUsed)for(let x=0;x<t.extensionsUsed.length;++x){const w=t.extensionsUsed[x],S=t.extensionsRequired||[];switch(w){case Q.KHR_MATERIALS_UNLIT:r[w]=new ph;break;case Q.KHR_DRACO_MESH_COMPRESSION:r[w]=new Fh(t,this.dracoLoader);break;case Q.KHR_TEXTURE_TRANSFORM:r[w]=new _h;break;case Q.KHR_MESH_QUANTIZATION:r[w]=new kh;break;default:S.indexOf(w)>=0&&c[w]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+w+'".')}}f.setExtensions(r),f.setPlugins(c),f.parse(s,a)}parseAsync(i,e){const s=this;return new Promise(function(a,t){s.parse(i,e,a,t)})}}function uh(){let l={};return{get:function(i){return l[i]},add:function(i,e){l[i]=e},remove:function(i){delete l[i]},removeAll:function(){l={}}}}const Q={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fh{constructor(i){this.parser=i,this.name=Q.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const i=this.parser,e=this.parser.json.nodes||[];for(let s=0,a=e.length;s<a;s++){const t=e[s];t.extensions&&t.extensions[this.name]&&t.extensions[this.name].light!==void 0&&i._addNodeRef(this.cache,t.extensions[this.name].light)}}_loadLight(i){const e=this.parser,s="light:"+i;let a=e.cache.get(s);if(a)return a;const t=e.json,g=((t.extensions&&t.extensions[this.name]||{}).lights||[])[i];let f;const x=new st(16777215);g.color!==void 0&&x.fromArray(g.color);const w=g.range!==void 0?g.range:0;switch(g.type){case"directional":f=new Rl(x),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Ll(x),f.distance=w;break;case"spot":f=new Dr(x),f.distance=w,g.spot=g.spot||{},g.spot.innerConeAngle=g.spot.innerConeAngle!==void 0?g.spot.innerConeAngle:0,g.spot.outerConeAngle=g.spot.outerConeAngle!==void 0?g.spot.outerConeAngle:Math.PI/4,f.angle=g.spot.outerConeAngle,f.penumbra=1-g.spot.innerConeAngle/g.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+g.type)}return f.position.set(0,0,0),f.decay=2,Et(f,g),g.intensity!==void 0&&(f.intensity=g.intensity),f.name=e.createUniqueName(g.name||"light_"+i),a=Promise.resolve(f),e.cache.add(s,a),a}getDependency(i,e){if(i==="light")return this._loadLight(e)}createNodeAttachment(i){const e=this,s=this.parser,t=s.json.nodes[i],c=(t.extensions&&t.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(g){return s._getNodeRef(e.cache,c,g)})}}class ph{constructor(){this.name=Q.KHR_MATERIALS_UNLIT}getMaterialType(){return Te}extendParams(i,e,s){const a=[];i.color=new st(1,1,1),i.opacity=1;const t=e.pbrMetallicRoughness;if(t){if(Array.isArray(t.baseColorFactor)){const r=t.baseColorFactor;i.color.fromArray(r),i.opacity=r[3]}t.baseColorTexture!==void 0&&a.push(s.assignTexture(i,"map",t.baseColorTexture,Bt))}return Promise.all(a)}}class Ah{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(i,e){const a=this.parser.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=a.extensions[this.name].emissiveStrength;return t!==void 0&&(e.emissiveIntensity=t),Promise.resolve()}}class mh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_CLEARCOAT}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&t.push(s.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&t.push(s.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(t.push(s.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const c=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ns(c,c)}return Promise.all(t)}}class vh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_IRIDESCENCE}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&t.push(s.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&t.push(s.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(t)}}class wh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_SHEEN}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[];e.sheenColor=new st(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=a.extensions[this.name];return r.sheenColorFactor!==void 0&&e.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&t.push(s.assignTexture(e,"sheenColorMap",r.sheenColorTexture,Bt)),r.sheenRoughnessTexture!==void 0&&t.push(s.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(t)}}class xh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_TRANSMISSION}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&t.push(s.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(t)}}class Sh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_VOLUME}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&t.push(s.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const c=r.attenuationColor||[1,1,1];return e.attenuationColor=new st(c[0],c[1],c[2]),Promise.all(t)}}class bh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_IOR}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const a=this.parser.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=a.extensions[this.name];return e.ior=t.ior!==void 0?t.ior:1.5,Promise.resolve()}}class yh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_SPECULAR}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&t.push(s.assignTexture(e,"specularIntensityMap",r.specularTexture));const c=r.specularColorFactor||[1,1,1];return e.specularColor=new st(c[0],c[1],c[2]),r.specularColorTexture!==void 0&&t.push(s.assignTexture(e,"specularColorMap",r.specularColorTexture,Bt)),Promise.all(t)}}class Dh{constructor(i){this.parser=i,this.name=Q.KHR_MATERIALS_ANISOTROPY}getMaterialType(i){const s=this.parser.json.materials[i];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(i,e){const s=this.parser,a=s.json.materials[i];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const t=[],r=a.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&t.push(s.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(t)}}class Mh{constructor(i){this.parser=i,this.name=Q.KHR_TEXTURE_BASISU}loadTexture(i){const e=this.parser,s=e.json,a=s.textures[i];if(!a.extensions||!a.extensions[this.name])return null;const t=a.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(i,t.source,r)}}class Lh{constructor(i){this.parser=i,this.name=Q.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(i){const e=this.name,s=this.parser,a=s.json,t=a.textures[i];if(!t.extensions||!t.extensions[e])return null;const r=t.extensions[e],c=a.images[r.source];let g=s.textureLoader;if(c.uri){const f=s.options.manager.getHandler(c.uri);f!==null&&(g=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(i,r.source,g);if(a.extensionsRequired&&a.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(i)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(i){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){i(e.height===1)}})),this.isSupported}}class Rh{constructor(i){this.parser=i,this.name=Q.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(i){const e=this.name,s=this.parser,a=s.json,t=a.textures[i];if(!t.extensions||!t.extensions[e])return null;const r=t.extensions[e],c=a.images[r.source];let g=s.textureLoader;if(c.uri){const f=s.options.manager.getHandler(c.uri);f!==null&&(g=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(i,r.source,g);if(a.extensionsRequired&&a.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(i)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(i){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){i(e.height===1)}})),this.isSupported}}class Ch{constructor(i){this.name=Q.EXT_MESHOPT_COMPRESSION,this.parser=i}loadBufferView(i){const e=this.parser.json,s=e.bufferViews[i];if(s.extensions&&s.extensions[this.name]){const a=s.extensions[this.name],t=this.parser.getDependency("buffer",a.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return t.then(function(c){const g=a.byteOffset||0,f=a.byteLength||0,x=a.count,w=a.byteStride,S=new Uint8Array(c,g,f);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(x,w,S,a.mode,a.filter).then(function(D){return D.buffer}):r.ready.then(function(){const D=new ArrayBuffer(x*w);return r.decodeGltfBuffer(new Uint8Array(D),x,w,S,a.mode,a.filter),D})})}else return null}}class Th{constructor(i){this.name=Q.EXT_MESH_GPU_INSTANCING,this.parser=i}createNodeMesh(i){const e=this.parser.json,s=e.nodes[i];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const a=e.meshes[s.mesh];for(const f of a.primitives)if(f.mode!==Xe.TRIANGLES&&f.mode!==Xe.TRIANGLE_STRIP&&f.mode!==Xe.TRIANGLE_FAN&&f.mode!==void 0)return null;const r=s.extensions[this.name].attributes,c=[],g={};for(const f in r)c.push(this.parser.getDependency("accessor",r[f]).then(x=>(g[f]=x,g[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(i)),Promise.all(c).then(f=>{const x=f.pop(),w=x.isGroup?x.children:[x],S=f[0].count,D=[];for(const C of w){const k=new ls,T=new m,P=new Rr,B=new m(1,1,1),O=new Cl(C.geometry,C.material,S);for(let W=0;W<S;W++)g.TRANSLATION&&T.fromBufferAttribute(g.TRANSLATION,W),g.ROTATION&&P.fromBufferAttribute(g.ROTATION,W),g.SCALE&&B.fromBufferAttribute(g.SCALE,W),O.setMatrixAt(W,k.compose(T,P,B));for(const W in g)W!=="TRANSLATION"&&W!=="ROTATION"&&W!=="SCALE"&&C.geometry.setAttribute(W,g[W]);we.prototype.copy.call(O,C),this.parser.assignFinalMaterial(O),D.push(O)}return x.isGroup?(x.clear(),x.add(...D),x):D[0]}))}}const Er="glTF",Si=12,Uo={JSON:1313821514,BIN:5130562};class Ih{constructor(i){this.name=Q.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(i,0,Si),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(i.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Er)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-Si,t=new DataView(i,Si);let r=0;for(;r<a;){const c=t.getUint32(r,!0);r+=4;const g=t.getUint32(r,!0);if(r+=4,g===Uo.JSON){const f=new Uint8Array(i,Si+r,c);this.content=s.decode(f)}else if(g===Uo.BIN){const f=Si+r;this.body=i.slice(f,f+c)}r+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Fh{constructor(i,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Q.KHR_DRACO_MESH_COMPRESSION,this.json=i,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(i,e){const s=this.json,a=this.dracoLoader,t=i.extensions[this.name].bufferView,r=i.extensions[this.name].attributes,c={},g={},f={};for(const x in r){const w=oa[x]||x.toLowerCase();c[w]=r[x]}for(const x in i.attributes){const w=oa[x]||x.toLowerCase();if(r[x]!==void 0){const S=s.accessors[i.attributes[x]],D=gi[S.componentType];f[w]=D.name,g[w]=S.normalized===!0}}return e.getDependency("bufferView",t).then(function(x){return new Promise(function(w){a.decodeDracoFile(x,function(S){for(const D in S.attributes){const C=S.attributes[D],k=g[D];k!==void 0&&(C.normalized=k)}w(S)},c,f)})})}}class _h{constructor(){this.name=Q.KHR_TEXTURE_TRANSFORM}extendTexture(i,e){return(e.texCoord===void 0||e.texCoord===i.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(i=i.clone(),e.texCoord!==void 0&&(i.channel=e.texCoord),e.offset!==void 0&&i.offset.fromArray(e.offset),e.rotation!==void 0&&(i.rotation=e.rotation),e.scale!==void 0&&i.repeat.fromArray(e.scale),i.needsUpdate=!0),i}}class kh{constructor(){this.name=Q.KHR_MESH_QUANTIZATION}}class Nr extends Jl{constructor(i,e,s,a){super(i,e,s,a)}copySampleValue_(i){const e=this.resultBuffer,s=this.sampleValues,a=this.valueSize,t=i*a*3+a;for(let r=0;r!==a;r++)e[r]=s[t+r];return e}interpolate_(i,e,s,a){const t=this.resultBuffer,r=this.sampleValues,c=this.valueSize,g=c*2,f=c*3,x=a-e,w=(s-e)/x,S=w*w,D=S*w,C=i*f,k=C-f,T=-2*D+3*S,P=D-S,B=1-T,O=P-S+w;for(let W=0;W!==c;W++){const N=r[k+W+c],j=r[k+W+g]*x,G=r[C+W+c],Be=r[C+W]*x;t[W]=B*N+O*j+T*G+P*Be}return t}}const Ph=new Rr;class Eh extends Nr{interpolate_(i,e,s,a){const t=super.interpolate_(i,e,s,a);return Ph.fromArray(t).normalize().toArray(t),t}}const Xe={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ho={9728:Vl,9729:Ut,9984:jl,9985:Zl,9986:Ql,9987:Mr},zo={33071:pt,33648:aa,10497:et},Os={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nh={CUBICSPLINE:void 0,LINEAR:Lr,STEP:Xl},Bs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Oh(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new ci({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yl})),l.DefaultMaterial}function jt(l,i,e){for(const s in e.extensions)l[s]===void 0&&(i.userData.gltfExtensions=i.userData.gltfExtensions||{},i.userData.gltfExtensions[s]=e.extensions[s])}function Et(l,i){i.extras!==void 0&&(typeof i.extras=="object"?Object.assign(l.userData,i.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+i.extras))}function Bh(l,i,e){let s=!1,a=!1,t=!1;for(let f=0,x=i.length;f<x;f++){const w=i[f];if(w.POSITION!==void 0&&(s=!0),w.NORMAL!==void 0&&(a=!0),w.COLOR_0!==void 0&&(t=!0),s&&a&&t)break}if(!s&&!a&&!t)return Promise.resolve(l);const r=[],c=[],g=[];for(let f=0,x=i.length;f<x;f++){const w=i[f];if(s){const S=w.POSITION!==void 0?e.getDependency("accessor",w.POSITION):l.attributes.position;r.push(S)}if(a){const S=w.NORMAL!==void 0?e.getDependency("accessor",w.NORMAL):l.attributes.normal;c.push(S)}if(t){const S=w.COLOR_0!==void 0?e.getDependency("accessor",w.COLOR_0):l.attributes.color;g.push(S)}}return Promise.all([Promise.all(r),Promise.all(c),Promise.all(g)]).then(function(f){const x=f[0],w=f[1],S=f[2];return s&&(l.morphAttributes.position=x),a&&(l.morphAttributes.normal=w),t&&(l.morphAttributes.color=S),l.morphTargetsRelative=!0,l})}function Uh(l,i){if(l.updateMorphTargets(),i.weights!==void 0)for(let e=0,s=i.weights.length;e<s;e++)l.morphTargetInfluences[e]=i.weights[e];if(i.extras&&Array.isArray(i.extras.targetNames)){const e=i.extras.targetNames;if(l.morphTargetInfluences.length===e.length){l.morphTargetDictionary={};for(let s=0,a=e.length;s<a;s++)l.morphTargetDictionary[e[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hh(l){let i;const e=l.extensions&&l.extensions[Q.KHR_DRACO_MESH_COMPRESSION];if(e?i="draco:"+e.bufferView+":"+e.indices+":"+Us(e.attributes):i=l.indices+":"+Us(l.attributes)+":"+l.mode,l.targets!==void 0)for(let s=0,a=l.targets.length;s<a;s++)i+=":"+Us(l.targets[s]);return i}function Us(l){let i="";const e=Object.keys(l).sort();for(let s=0,a=e.length;s<a;s++)i+=e[s]+":"+l[e[s]]+";";return i}function ra(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zh(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wh=new ls;class Gh{constructor(i={},e={}){this.json=i,this.extensions={},this.plugins={},this.options=e,this.cache=new uh,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,a=!1,t=-1;typeof navigator<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,a=navigator.userAgent.indexOf("Firefox")>-1,t=a?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||a&&t<98?this.textureLoader=new Tl(this.options.manager):this.textureLoader=new Il(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(i){this.extensions=i}setPlugins(i){this.plugins=i}parse(i,e){const s=this,a=this.json,t=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(r){const c={scene:r[0][a.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:a.asset,parser:s,userData:{}};jt(t,c,a),Et(c,a),Promise.all(s._invokeAll(function(g){return g.afterRoot&&g.afterRoot(c)})).then(function(){i(c)})}).catch(e)}_markDefs(){const i=this.json.nodes||[],e=this.json.skins||[],s=this.json.meshes||[];for(let a=0,t=e.length;a<t;a++){const r=e[a].joints;for(let c=0,g=r.length;c<g;c++)i[r[c]].isBone=!0}for(let a=0,t=i.length;a<t;a++){const r=i[a];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(s[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(i,e){e!==void 0&&(i.refs[e]===void 0&&(i.refs[e]=i.uses[e]=0),i.refs[e]++)}_getNodeRef(i,e,s){if(i.refs[e]<=1)return s;const a=s.clone(),t=(r,c)=>{const g=this.associations.get(r);g!=null&&this.associations.set(c,g);for(const[f,x]of r.children.entries())t(x,c.children[f])};return t(s,a),a.name+="_instance_"+i.uses[e]++,a}_invokeOne(i){const e=Object.values(this.plugins);e.push(this);for(let s=0;s<e.length;s++){const a=i(e[s]);if(a)return a}return null}_invokeAll(i){const e=Object.values(this.plugins);e.unshift(this);const s=[];for(let a=0;a<e.length;a++){const t=i(e[a]);t&&s.push(t)}return s}getDependency(i,e){const s=i+":"+e;let a=this.cache.get(s);if(!a){switch(i){case"scene":a=this.loadScene(e);break;case"node":a=this._invokeOne(function(t){return t.loadNode&&t.loadNode(e)});break;case"mesh":a=this._invokeOne(function(t){return t.loadMesh&&t.loadMesh(e)});break;case"accessor":a=this.loadAccessor(e);break;case"bufferView":a=this._invokeOne(function(t){return t.loadBufferView&&t.loadBufferView(e)});break;case"buffer":a=this.loadBuffer(e);break;case"material":a=this._invokeOne(function(t){return t.loadMaterial&&t.loadMaterial(e)});break;case"texture":a=this._invokeOne(function(t){return t.loadTexture&&t.loadTexture(e)});break;case"skin":a=this.loadSkin(e);break;case"animation":a=this._invokeOne(function(t){return t.loadAnimation&&t.loadAnimation(e)});break;case"camera":a=this.loadCamera(e);break;default:if(a=this._invokeOne(function(t){return t!=this&&t.getDependency&&t.getDependency(i,e)}),!a)throw new Error("Unknown type: "+i);break}this.cache.add(s,a)}return a}getDependencies(i){let e=this.cache.get(i);if(!e){const s=this,a=this.json[i+(i==="mesh"?"es":"s")]||[];e=Promise.all(a.map(function(t,r){return s.getDependency(i,r)})),this.cache.add(i,e)}return e}loadBuffer(i){const e=this.json.buffers[i],s=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&i===0)return Promise.resolve(this.extensions[Q.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(t,r){s.load(sa.resolveURL(e.uri,a.path),t,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(i){const e=this.json.bufferViews[i];return this.getDependency("buffer",e.buffer).then(function(s){const a=e.byteLength||0,t=e.byteOffset||0;return s.slice(t,t+a)})}loadAccessor(i){const e=this,s=this.json,a=this.json.accessors[i];if(a.bufferView===void 0&&a.sparse===void 0){const r=Os[a.type],c=gi[a.componentType],g=a.normalized===!0,f=new c(a.count*r);return Promise.resolve(new ks(f,r,g))}const t=[];return a.bufferView!==void 0?t.push(this.getDependency("bufferView",a.bufferView)):t.push(null),a.sparse!==void 0&&(t.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),t.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(t).then(function(r){const c=r[0],g=Os[a.type],f=gi[a.componentType],x=f.BYTES_PER_ELEMENT,w=x*g,S=a.byteOffset||0,D=a.bufferView!==void 0?s.bufferViews[a.bufferView].byteStride:void 0,C=a.normalized===!0;let k,T;if(D&&D!==w){const P=Math.floor(S/D),B="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+P+":"+a.count;let O=e.cache.get(B);O||(k=new f(c,P*D,a.count*D/x),O=new Fl(k,D/x),e.cache.add(B,O)),T=new Kl(O,g,S%D/x,C)}else c===null?k=new f(a.count*g):k=new f(c,S,a.count*g),T=new ks(k,g,C);if(a.sparse!==void 0){const P=Os.SCALAR,B=gi[a.sparse.indices.componentType],O=a.sparse.indices.byteOffset||0,W=a.sparse.values.byteOffset||0,N=new B(r[1],O,a.sparse.count*P),j=new f(r[2],W,a.sparse.count*g);c!==null&&(T=new ks(T.array.slice(),T.itemSize,T.normalized));for(let G=0,Be=N.length;G<Be;G++){const ue=N[G];if(T.setX(ue,j[G*g]),g>=2&&T.setY(ue,j[G*g+1]),g>=3&&T.setZ(ue,j[G*g+2]),g>=4&&T.setW(ue,j[G*g+3]),g>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return T})}loadTexture(i){const e=this.json,s=this.options,t=e.textures[i].source,r=e.images[t];let c=this.textureLoader;if(r.uri){const g=s.manager.getHandler(r.uri);g!==null&&(c=g)}return this.loadTextureImage(i,t,c)}loadTextureImage(i,e,s){const a=this,t=this.json,r=t.textures[i],c=t.images[e],g=(c.uri||c.bufferView)+":"+r.sampler;if(this.textureCache[g])return this.textureCache[g];const f=this.loadImageSource(e,s).then(function(x){x.flipY=!1,x.name=r.name||c.name||"",x.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(x.name=c.uri);const S=(t.samplers||{})[r.sampler]||{};return x.magFilter=Ho[S.magFilter]||Ut,x.minFilter=Ho[S.minFilter]||Mr,x.wrapS=zo[S.wrapS]||et,x.wrapT=zo[S.wrapT]||et,a.associations.set(x,{textures:i}),x}).catch(function(){return null});return this.textureCache[g]=f,f}loadImageSource(i,e){const s=this,a=this.json,t=this.options;if(this.sourceCache[i]!==void 0)return this.sourceCache[i].then(w=>w.clone());const r=a.images[i],c=self.URL||self.webkitURL;let g=r.uri||"",f=!1;if(r.bufferView!==void 0)g=s.getDependency("bufferView",r.bufferView).then(function(w){f=!0;const S=new Blob([w],{type:r.mimeType});return g=c.createObjectURL(S),g});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+i+" is missing URI and bufferView");const x=Promise.resolve(g).then(function(w){return new Promise(function(S,D){let C=S;e.isImageBitmapLoader===!0&&(C=function(k){const T=new Io(k);T.needsUpdate=!0,S(T)}),e.load(sa.resolveURL(w,t.path),C,void 0,D)})}).then(function(w){return f===!0&&c.revokeObjectURL(g),w.userData.mimeType=r.mimeType||zh(r.uri),w}).catch(function(w){throw console.error("THREE.GLTFLoader: Couldn't load texture",g),w});return this.sourceCache[i]=x,x}assignTexture(i,e,s,a){const t=this;return this.getDependency("texture",s.index).then(function(r){if(!r)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(r=r.clone(),r.channel=s.texCoord),t.extensions[Q.KHR_TEXTURE_TRANSFORM]){const c=s.extensions!==void 0?s.extensions[Q.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const g=t.associations.get(r);r=t.extensions[Q.KHR_TEXTURE_TRANSFORM].extendTexture(r,c),t.associations.set(r,g)}}return a!==void 0&&(r.colorSpace=a),i[e]=r,r})}assignFinalMaterial(i){const e=i.geometry;let s=i.material;const a=e.attributes.tangent===void 0,t=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(i.isPoints){const c="PointsMaterial:"+s.uuid;let g=this.cache.get(c);g||(g=new _l,Ps.prototype.copy.call(g,s),g.color.copy(s.color),g.map=s.map,g.sizeAttenuation=!1,this.cache.add(c,g)),s=g}else if(i.isLine){const c="LineBasicMaterial:"+s.uuid;let g=this.cache.get(c);g||(g=new $t,Ps.prototype.copy.call(g,s),g.color.copy(s.color),g.map=s.map,this.cache.add(c,g)),s=g}if(a||t||r){let c="ClonedMaterial:"+s.uuid+":";a&&(c+="derivative-tangents:"),t&&(c+="vertex-colors:"),r&&(c+="flat-shading:");let g=this.cache.get(c);g||(g=s.clone(),t&&(g.vertexColors=!0),r&&(g.flatShading=!0),a&&(g.normalScale&&(g.normalScale.y*=-1),g.clearcoatNormalScale&&(g.clearcoatNormalScale.y*=-1)),this.cache.add(c,g),this.associations.set(g,this.associations.get(s))),s=g}i.material=s}getMaterialType(){return ci}loadMaterial(i){const e=this,s=this.json,a=this.extensions,t=s.materials[i];let r;const c={},g=t.extensions||{},f=[];if(g[Q.KHR_MATERIALS_UNLIT]){const w=a[Q.KHR_MATERIALS_UNLIT];r=w.getMaterialType(),f.push(w.extendParams(c,t,e))}else{const w=t.pbrMetallicRoughness||{};if(c.color=new st(1,1,1),c.opacity=1,Array.isArray(w.baseColorFactor)){const S=w.baseColorFactor;c.color.fromArray(S),c.opacity=S[3]}w.baseColorTexture!==void 0&&f.push(e.assignTexture(c,"map",w.baseColorTexture,Bt)),c.metalness=w.metallicFactor!==void 0?w.metallicFactor:1,c.roughness=w.roughnessFactor!==void 0?w.roughnessFactor:1,w.metallicRoughnessTexture!==void 0&&(f.push(e.assignTexture(c,"metalnessMap",w.metallicRoughnessTexture)),f.push(e.assignTexture(c,"roughnessMap",w.metallicRoughnessTexture))),r=this._invokeOne(function(S){return S.getMaterialType&&S.getMaterialType(i)}),f.push(Promise.all(this._invokeAll(function(S){return S.extendMaterialParams&&S.extendMaterialParams(i,c)})))}t.doubleSided===!0&&(c.side=Lt);const x=t.alphaMode||Bs.OPAQUE;if(x===Bs.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,x===Bs.MASK&&(c.alphaTest=t.alphaCutoff!==void 0?t.alphaCutoff:.5)),t.normalTexture!==void 0&&r!==Te&&(f.push(e.assignTexture(c,"normalMap",t.normalTexture)),c.normalScale=new ns(1,1),t.normalTexture.scale!==void 0)){const w=t.normalTexture.scale;c.normalScale.set(w,w)}return t.occlusionTexture!==void 0&&r!==Te&&(f.push(e.assignTexture(c,"aoMap",t.occlusionTexture)),t.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=t.occlusionTexture.strength)),t.emissiveFactor!==void 0&&r!==Te&&(c.emissive=new st().fromArray(t.emissiveFactor)),t.emissiveTexture!==void 0&&r!==Te&&f.push(e.assignTexture(c,"emissiveMap",t.emissiveTexture,Bt)),Promise.all(f).then(function(){const w=new r(c);return t.name&&(w.name=t.name),Et(w,t),e.associations.set(w,{materials:i}),t.extensions&&jt(a,w,t),w})}createUniqueName(i){const e=kl.sanitizeNodeName(i||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(i){const e=this,s=this.extensions,a=this.primitiveCache;function t(c){return s[Q.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,e).then(function(g){return Wo(g,c,e)})}const r=[];for(let c=0,g=i.length;c<g;c++){const f=i[c],x=Hh(f),w=a[x];if(w)r.push(w.promise);else{let S;f.extensions&&f.extensions[Q.KHR_DRACO_MESH_COMPRESSION]?S=t(f):S=Wo(new gt,f,e),a[x]={primitive:f,promise:S},r.push(S)}}return Promise.all(r)}loadMesh(i){const e=this,s=this.json,a=this.extensions,t=s.meshes[i],r=t.primitives,c=[];for(let g=0,f=r.length;g<f;g++){const x=r[g].material===void 0?Oh(this.cache):this.getDependency("material",r[g].material);c.push(x)}return c.push(e.loadGeometries(r)),Promise.all(c).then(function(g){const f=g.slice(0,g.length-1),x=g[g.length-1],w=[];for(let D=0,C=x.length;D<C;D++){const k=x[D],T=r[D];let P;const B=f[D];if(T.mode===Xe.TRIANGLES||T.mode===Xe.TRIANGLE_STRIP||T.mode===Xe.TRIANGLE_FAN||T.mode===void 0)P=t.isSkinnedMesh===!0?new Pl(k,B):new ei(k,B),P.isSkinnedMesh===!0&&P.normalizeSkinWeights(),T.mode===Xe.TRIANGLE_STRIP?P.geometry=Bo(P.geometry,br):T.mode===Xe.TRIANGLE_FAN&&(P.geometry=Bo(P.geometry,ia));else if(T.mode===Xe.LINES)P=new El(k,B);else if(T.mode===Xe.LINE_STRIP)P=new Qe(k,B);else if(T.mode===Xe.LINE_LOOP)P=new Nl(k,B);else if(T.mode===Xe.POINTS)P=new Ol(k,B);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+T.mode);Object.keys(P.geometry.morphAttributes).length>0&&Uh(P,t),P.name=e.createUniqueName(t.name||"mesh_"+i),Et(P,t),T.extensions&&jt(a,P,T),e.assignFinalMaterial(P),w.push(P)}for(let D=0,C=w.length;D<C;D++)e.associations.set(w[D],{meshes:i,primitives:D});if(w.length===1)return t.extensions&&jt(a,w[0],t),w[0];const S=new Es;t.extensions&&jt(a,S,t),e.associations.set(S,{meshes:i});for(let D=0,C=w.length;D<C;D++)S.add(w[D]);return S})}loadCamera(i){let e;const s=this.json.cameras[i],a=s[s.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?e=new Bl(Ul.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):s.type==="orthographic"&&(e=new Hl(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),s.name&&(e.name=this.createUniqueName(s.name)),Et(e,s),Promise.resolve(e)}loadSkin(i){const e=this.json.skins[i],s=[];for(let a=0,t=e.joints.length;a<t;a++)s.push(this._loadNodeShallow(e.joints[a]));return e.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",e.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(a){const t=a.pop(),r=a,c=[],g=[];for(let f=0,x=r.length;f<x;f++){const w=r[f];if(w){c.push(w);const S=new ls;t!==null&&S.fromArray(t.array,f*16),g.push(S)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[f])}return new zl(c,g)})}loadAnimation(i){const e=this.json,s=this,a=e.animations[i],t=a.name?a.name:"animation_"+i,r=[],c=[],g=[],f=[],x=[];for(let w=0,S=a.channels.length;w<S;w++){const D=a.channels[w],C=a.samplers[D.sampler],k=D.target,T=k.node,P=a.parameters!==void 0?a.parameters[C.input]:C.input,B=a.parameters!==void 0?a.parameters[C.output]:C.output;k.node!==void 0&&(r.push(this.getDependency("node",T)),c.push(this.getDependency("accessor",P)),g.push(this.getDependency("accessor",B)),f.push(C),x.push(k))}return Promise.all([Promise.all(r),Promise.all(c),Promise.all(g),Promise.all(f),Promise.all(x)]).then(function(w){const S=w[0],D=w[1],C=w[2],k=w[3],T=w[4],P=[];for(let B=0,O=S.length;B<O;B++){const W=S[B],N=D[B],j=C[B],G=k[B],Be=T[B];if(W===void 0)continue;W.updateMatrix&&W.updateMatrix();const ue=s._createAnimationTracks(W,N,j,G,Be);if(ue)for(let Vt=0;Vt<ue.length;Vt++)P.push(ue[Vt])}return new Wl(t,void 0,P)})}createNodeMesh(i){const e=this.json,s=this,a=e.nodes[i];return a.mesh===void 0?null:s.getDependency("mesh",a.mesh).then(function(t){const r=s._getNodeRef(s.meshCache,a.mesh,t);return a.weights!==void 0&&r.traverse(function(c){if(c.isMesh)for(let g=0,f=a.weights.length;g<f;g++)c.morphTargetInfluences[g]=a.weights[g]}),r})}loadNode(i){const e=this.json,s=this,a=e.nodes[i],t=s._loadNodeShallow(i),r=[],c=a.children||[];for(let f=0,x=c.length;f<x;f++)r.push(s.getDependency("node",c[f]));const g=a.skin===void 0?Promise.resolve(null):s.getDependency("skin",a.skin);return Promise.all([t,Promise.all(r),g]).then(function(f){const x=f[0],w=f[1],S=f[2];S!==null&&x.traverse(function(D){D.isSkinnedMesh&&D.bind(S,Wh)});for(let D=0,C=w.length;D<C;D++)x.add(w[D]);return x})}_loadNodeShallow(i){const e=this.json,s=this.extensions,a=this;if(this.nodeCache[i]!==void 0)return this.nodeCache[i];const t=e.nodes[i],r=t.name?a.createUniqueName(t.name):"",c=[],g=a._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(i)});return g&&c.push(g),t.camera!==void 0&&c.push(a.getDependency("camera",t.camera).then(function(f){return a._getNodeRef(a.cameraCache,t.camera,f)})),a._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(i)}).forEach(function(f){c.push(f)}),this.nodeCache[i]=Promise.all(c).then(function(f){let x;if(t.isBone===!0?x=new Gl:f.length>1?x=new Es:f.length===1?x=f[0]:x=new we,x!==f[0])for(let w=0,S=f.length;w<S;w++)x.add(f[w]);if(t.name&&(x.userData.name=t.name,x.name=r),Et(x,t),t.extensions&&jt(s,x,t),t.matrix!==void 0){const w=new ls;w.fromArray(t.matrix),x.applyMatrix4(w)}else t.translation!==void 0&&x.position.fromArray(t.translation),t.rotation!==void 0&&x.quaternion.fromArray(t.rotation),t.scale!==void 0&&x.scale.fromArray(t.scale);return a.associations.has(x)||a.associations.set(x,{}),a.associations.get(x).nodes=i,x}),this.nodeCache[i]}loadScene(i){const e=this.extensions,s=this.json.scenes[i],a=this,t=new Es;s.name&&(t.name=a.createUniqueName(s.name)),Et(t,s),s.extensions&&jt(e,t,s);const r=s.nodes||[],c=[];for(let g=0,f=r.length;g<f;g++)c.push(a.getDependency("node",r[g]));return Promise.all(c).then(function(g){for(let x=0,w=g.length;x<w;x++)t.add(g[x]);const f=x=>{const w=new Map;for(const[S,D]of a.associations)(S instanceof Ps||S instanceof Io)&&w.set(S,D);return x.traverse(S=>{const D=a.associations.get(S);D!=null&&w.set(S,D)}),w};return a.associations=f(t),t})}_createAnimationTracks(i,e,s,a,t){const r=[],c=i.name?i.name:i.uuid,g=[];Rt[t.path]===Rt.weights?i.traverse(function(S){S.morphTargetInfluences&&g.push(S.name?S.name:S.uuid)}):g.push(c);let f;switch(Rt[t.path]){case Rt.weights:f=_o;break;case Rt.rotation:f=ko;break;case Rt.position:case Rt.scale:f=Fo;break;default:switch(s.itemSize){case 1:f=_o;break;case 2:case 3:default:f=Fo;break}break}const x=a.interpolation!==void 0?Nh[a.interpolation]:Lr,w=this._getArrayFromAccessor(s);for(let S=0,D=g.length;S<D;S++){const C=new f(g[S]+"."+Rt[t.path],e.array,w,x);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(C),r.push(C)}return r}_getArrayFromAccessor(i){let e=i.array;if(i.normalized){const s=ra(e.constructor),a=new Float32Array(e.length);for(let t=0,r=e.length;t<r;t++)a[t]=e[t]*s;e=a}return e}_createCubicSplineTrackInterpolant(i){i.createInterpolant=function(s){const a=this instanceof ko?Eh:Nr;return new a(this.times,this.values,this.getValueSize()/3,s)},i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vh(l,i,e){const s=i.attributes,a=new ql;if(s.POSITION!==void 0){const c=e.json.accessors[s.POSITION],g=c.min,f=c.max;if(g!==void 0&&f!==void 0){if(a.set(new m(g[0],g[1],g[2]),new m(f[0],f[1],f[2])),c.normalized){const x=ra(gi[c.componentType]);a.min.multiplyScalar(x),a.max.multiplyScalar(x)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const t=i.targets;if(t!==void 0){const c=new m,g=new m;for(let f=0,x=t.length;f<x;f++){const w=t[f];if(w.POSITION!==void 0){const S=e.json.accessors[w.POSITION],D=S.min,C=S.max;if(D!==void 0&&C!==void 0){if(g.setX(Math.max(Math.abs(D[0]),Math.abs(C[0]))),g.setY(Math.max(Math.abs(D[1]),Math.abs(C[1]))),g.setZ(Math.max(Math.abs(D[2]),Math.abs(C[2]))),S.normalized){const k=ra(gi[S.componentType]);g.multiplyScalar(k)}c.max(g)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(c)}l.boundingBox=a;const r=new Cr;a.getCenter(r.center),r.radius=a.min.distanceTo(a.max)/2,l.boundingSphere=r}function Wo(l,i,e){const s=i.attributes,a=[];function t(r,c){return e.getDependency("accessor",r).then(function(g){l.setAttribute(c,g)})}for(const r in s){const c=oa[r]||r.toLowerCase();c in l.attributes||a.push(t(s[r],c))}if(i.indices!==void 0&&!l.index){const r=e.getDependency("accessor",i.indices).then(function(c){l.setIndex(c)});a.push(r)}return Et(l,i),Vh(l,i,e),Promise.all(a).then(function(){return i.targets!==void 0?Bh(l,i.targets,e):l})}const jh=""+new URL("../assets/coach_wheel.a6e64795.glb",import.meta.url).href,Zh=""+new URL("../assets/coach_main.94c02efa.glb",import.meta.url).href,Qh=""+new URL("../assets/coach_interior.fbb90733.glb",import.meta.url).href,Xh=""+new URL("../assets/coach_interior_map.c5de95ee.webp",import.meta.url).href,Yh=""+new URL("../assets/coach_dash.adc8ce9b.glb",import.meta.url).href,Kh=""+new URL("../assets/coach_dash_map.74f3bfb1.webp",import.meta.url).href,qh=""+new URL("../assets/coach_steer.a5209215.glb",import.meta.url).href,Jh=""+new URL("../assets/coach_window.0f89b22b.webp",import.meta.url).href,Ba="data:image/webp;base64,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",Ua="data:image/webp;base64,UklGRp4EAABXRUJQVlA4WAoAAAAwAAAAPwAAPwAASUNDUCQCAAAAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH3wAKAA4ADQAIADlhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzluw6YZ71GzUu+RG69G3WYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTUAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8rAAAA1QAAATtgAACfxzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAblZQOEz9AQAALz/ADxBHIRBI8sedYYihn3aGbdtGTvX8B9cGvC6EQgAEIwCAAgCKDwQQEMABCABiIAzixw5AGAQs27bTNs8QZmaSo+bMf4ixJCvvrf5H9J+RIkmRWhJ1Ti6VwnxB/ncrB9Y8a2vO1vjSGHbW+NIYltY4SwZfWFrigbs1jE1R68e/gIpxNYNcPqBjzI17PtQq34BZHi84qvR3MrK5bJmgZMwSgE33Uj6jF0rCOliDL7t4jVZa/QYaaU+4g4dIo2RM6WEuE6DuYq0l7A5eInKBewcVSn0NTL41BMZJZK9lzBmuIuE6XZI+MNaK7DCo6g0bOUfISau/wyFawhx8gqGWsDOgihfxAuJtXLSEdbCVuEavmDBGWpEtkuvoLXuJIzjqRTarTcGXapHNq0ZJ2NrDJK9W4FT6c3ZfaAk7AEbRBdTp2oLTiuwpkZdmmqgKmGkZ0w/4ALyroDSFdbCP8dEiAmO0hF1GW522DOJDiB4grciuRGRBS3gJib7WimyEG6RDcIWzVj8JeZaJECoJm1hlTIcEL9jpPbaHgPRJ6gl7h0tE1022wqo9ti3nsitJjZawT9gHZCQZlkqR/bvmIDOUhC0dPFryrmOmFNmGzPsZqxnzw/meVYQ9Rpi12hq5Ad6ScfhOGNbdmqU14qzZ8TT+gfPGyM6a2hoZl/KvmwAAUFNBSU4AAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",Ha="data:image/webp;base64,UklGRqYFAABXRUJQVlA4WAoAAAAwAAAAPwAAPwAASUNDUCQCAAAAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH3wAKAA4ADQAIADlhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzluw6YZ71GzUu+RG69G3WYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTUAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8rAAAA1QAAATtgAACfxzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAblZQOEwGAwAALz/ADxB3paCNpKj+5eLgXsDB0E+7gbRtU287TjZpQ6dutmfgzoCPQATgzigFGgQEAYY1Ax4VA8CWoCStUACDDYewDoWtYRDC5sBiQ+mxEm3Dsl0I8H4FgERJkk3bmoNr27afr23btm3b99m61tZ85Nnr7LXOMyMi+s/Abds4knffW1rsDfCLoerrR636dhJbM7qJhMfzvTleX3pjbO8x0twssYUvZ85zZFF6G/WlePQc2bxuN/tCy6FrnMKjCjzH8YIkI+6EA4Cxj0HHWvpqAEB1Z/lW3sadvt6aGx0aGp3ben3KSadlGh3xL2oMuVD6crWFnOCxS+H8aKTqoYeliQbUZnZBmSOHk+4A4DDBY68BsRw5Hibqw6FutumBpUr5mdxCVADqwmNE3LRlj/fWzVqcCgDUzlpg0ndNRJ2jwG7CO+FliYkBH6bgA/EJDdmoqriQTnpcgFn7vmMyKWwEA4DJIIc3C9Eq5ph3ExGfuTCV624kALitiig8ydGyp/9CEj/PZluxsCmsewPAvZcSSp+abZjjtPRxMddJxdTWEPkpawBV/ikiXk36Mycgy5XxrT6X77ZGDaBtu0FEfi9ZbVjXZmRGIxZ1CDO2AGAzzSOi9K7SFNjVhjXW0+iVOW80Jl7NviTnfMCNFU1g/cH1ZxrH8p0exQNh0nuivLiV+yq2oWj7SkKMZVjmRuz1Wln5KRJ9xYtcLVMablFnjTI1MqdVxkBq0nVDdjzHrTYs5BFPNa/MqMzrVA3o6bwg6PV20wwFpEp7TXTElKJFRGkrRuk1R+yJZPjdWDoxG7ygUxnirHN+oGTSawn1TnGXGpfSzm6ddPhRT+WequyzfpYsqROtsawitsSRQ+6gqFnHJZKep4PBRjABTuM3JEKtii1sCxRD1gSCywzGBaZdqPeX+FSUV6840nfpYthF/0QU1ZlPBeQO47/Eieb165Z6iz7FLbURaiopryR63feS7cYIvozRy2cCtfPP0Wu3XwiNT8HYm9scZbyIDY/jv9y/iXVsszv8HyAAUFNBSU4AAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",za="data:image/webp;base64,UklGRhYFAABXRUJQVlA4WAoAAAAwAAAAPwAAPwAASUNDUCQCAAAAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH3wAKAA4ADQAIADlhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzluw6YZ71GzUu+RG69G3WYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTUAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8rAAAA1QAAATtgAACfxzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAblZQOEx2AgAALz/ADxDvo6BtG8b84Y7BH4Whn3aGbdtGTp0k36+2bRsG2TrzBo4YcAeEqPMQQLwbAkAzAMAAhrMhCCCAAYRhAAwP/sHChQG8EC8CCOJEuHDjBqWtHwa9gflC9/0BIO3a9kRq3lnBYaCGuw3uUxd8BSdtU29xC+7k+fWbSTJLvf0Q0f8JoF/sSEHkdjl3H5fdrkjXrpc93tgCh1KwGb9cNXg24mSHNyNg+mbAIYpPyvmibPBXYC7X2ojozluI6vC8FViU4oVDRM1HuHkWCclNwOL18ZdXMSKKpyXwscIJpY7D/GZ7duCeQ0RO9ykAuXA/EkKvgC4b6/XKyW26H6XM3J49ZF4u1sSt+dDkvkvakdKWxDnUkrflWPIQzD0yLOxM7UgEy53R1kIbdSJAPCfjhpMb6N+cNlpwOdQrdWRe0ju+LjXOX7/sKbGQgJq7ZNGJFVQlTgK+9ZfEY46ZBzV3yXbxo33FRkeErHKVcMl+/tNzABdP4mTVh7qOwiydA7BcRkTRLrMV1RiF6jSc4LIvQpQ3tVdn4kG54oZDue+xVUEUmT6SMyYzKp9CjkzcpPOJajcBYSIUgkIbOBx2KJq8AuDpeVAmQnNavjYRPfgkAYzpjanG9HyOYD7jK6igMp+o/QAAmN6Cirka5QyGrDdD+fAkg+txFVYSY8oEh0X5oV4RT11mQA/ZeTpTRkSRzs/ytsjDpaGqxtF3lzBzswS4PlhbPbiGhbqsAaREsBZlkfb3iY8lGGPc1gpjbGFsxg5TcQouHxMGK70UXKdiejMqX4OoXGituKTLFDN6viqhRZ6WR9pC4euVq4SrRQmNBdL2oSzX+58/UFNBSU4AAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",Wa="data:image/webp;base64,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",Ga="data:image/webp;base64,UklGRh4PAABXRUJQVlA4WAoAAAAwAAAAPwAAPwAASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t//9WUDhMWgIAAC8/wA8QhyAQSPLHnWGIoZ92gUAKN7hEDY7hgBhJctxmD0eKAIhn8k8X4Ac7gIj+T4D+cd9jTKWkGHdfz2PhYTnCQnY0Xq0/WyPkzus92ncWO9e1xDGVdgH999XWmLe06a7tqU2ghE8i8+x6ccsT+u89K0xz0MshD5DesspYXB9udSC/Y5Xx0MdpIL9hFaC7Pt87QH6hAFTXgt4B4qMIUE3TsD19IO8A+4MNoLvmkce9HOGGvAPdblkbXO+NZbvSDnDeigCHPoJ0pQSw3wgdKPqOfKUKtBsZwFfgd7UB/C4MIOuFomnYUr/o4UIZaBfHED6QZHlGugoA+6wBWd9I56xd6QTOiQP4Z9Yn+NUOYEMEmj5Tmv2u1IDfUIC0wD6LNxKQB4Btge3ZDjRJPthfMACTdqBqgfhMDdikCJQV2my7U4BjFhfIzO1OAqKU1ojMT92Ns7LCXrj8PTq/6WXauNn0qEjpgzf9WZLiSj89i7OyRnU9LLMdqCucux43YJcc4KVeLs+4m54bgEsatneKvt0GSSpA+gsJKEME2l9oQBwcwNdzAB/UgLxeBpqmB0BYLQAcM+tAXi0D3WbKAL6WA2Rdhg6UtQrQw5UiwLHSARB10xqAr+MAze5oG7qv4n3YdD8CVJsFfWsVIOrpCVB98rFXgFOPrQJ0/847QLVnssp4fHUwVtObVgeKf+GFsZretXOAHN4Kmelpej1OIPsbnplHfbm1CbS02R3bUmPeNn1rsU/GVuK0VK57NH0ecr94seegJe1o77TDtK7H8qRE1/K+x5hKSTHurn8cUFNBSU4AAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",Va=""+new URL("../assets/dash_icon_lights.8130060c.webp",import.meta.url).href,Or={value:0},$h=l=>{l.uniforms.shadow=Or,l.fragmentShader=l.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float shadow;
`),l.fragmentShader=l.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.directDiffuse *= 1.0 - shadow; //reflectedLight.indirectDiffuse *= min(1.0, 1.5 - shadow);
`)};class ed{constructor(){o(this,"default",new ii({color:8947848}));o(this,"grey",new K({color:6710886}));o(this,"wheel",new K({color:4473924}));o(this,"black",new K({color:3355443}));o(this,"tire",new K({color:2236962}));o(this,"tiremap",new K);o(this,"body",new ii({color:16316664,specular:16777215,shininess:10}));o(this,"map",new ii({specular:4473924,shininess:40}));o(this,"interior",new ii({fog:!1}));o(this,"metal",new ii({color:3881787,specular:5592405,shininess:20}));o(this,"redlight",new ci({color:6702148,emissive:16711680,roughness:.5,emissiveIntensity:0}));o(this,"rearlight",new ci({color:6702148,emissive:16711680,roughness:.5,emissiveIntensity:0}));o(this,"reverselight",new ci({color:6710852,emissive:16777096}));o(this,"headlight",new ci({color:6710886,emissive:16777181}));o(this,"window",new ii({color:6712183,specular:8961023,shininess:30}));o(this,"windscreen",new K({color:5596791,transparent:!0,opacity:1,fog:!1}));o(this,"shadow",new Te({color:0,colorWrite:!1,depthWrite:!1,side:$l}));o(this,"null",new K({color:16711935}));o(this,"brakesOn",!1);this.makeShadowMaterial(this.map),this.makeShadowMaterial(this.body),this.makeShadowMaterial(this.metal),this.makeShadowMaterial(this.interior),this.makeShadowMaterial(this.window),this.makeShadowMaterial(this.windscreen),this.makeShadowMaterial(this.grey),this.makeShadowMaterial(this.default),this.makeShadowMaterial(this.black),this.shadow.shouldCastShadow=!0,this.grey.needsCameraPosition=!0,this.wheel.needsCameraPosition=!0,this.interior.needsCameraPosition=!0,this.black.needsCameraPosition=!0,this.tire.needsCameraPosition=!0,this.tiremap.needsCameraPosition=!0,this.windscreen.needsCameraPosition=!0,this.null.needsCameraPosition=!0}setMapForMaterial(i,e,s=!1){this[i]&&(this[i].map=U(e),this[i].map.flipY=s)}makeShadowMaterial(i){i.onBeforeCompile=$h}setShadow(i){Or.value=i,this.body.shininess=10*(1-i),this.map.shininess=30*(1-i),this.metal.shininess=20*(1-i)}setBrakeLights(i,e=!1){this.brakesOn=i,i?e?this.redlight.emissiveIntensity=Math.max(.2,.2+L.softBrakeForce**2-.3):this.redlight.emissiveIntensity=.9:this.redlight.emissiveIntensity=0}setInterior(i){this.black.fog=!i,this.metal.fog=!i,this.grey.fog=!i}getMaterialByName(i){let e=this.default,s=i.split("_")[1];return this[s]&&(e=this[s]),e}setOnObject(i){i.traverse(e=>{e.isMesh&&(e.material=this.getMaterialByName(e.name),e.material.shouldCastShadow&&(e.castShadow=!0))})}}const z=new ed,v={fineTail:null,head:null,tail:null,vehicleIndex:0,vehicleNodeDidChange:!1,vehicleNode:null,initIndex:0,generation:0},u={},Vp=(l,i,e)=>{for(u.checkNode=e,u.dist=(e.p.x-l)*(e.p.x-l)+(e.p.z-i)*(e.p.z-i),u.closestDist=u.dist,u.closestNode=u.checkNode,u.closestFwdDist=u.dist,u.closestRearDist=u.dist,u.checkInterval=10;u.checkInterval>0;u.checkInterval-=9){for(u.checkMargin=u.checkInterval==10?1.9:1.2,u.closestFwdNode=u.closestNode,u.closestRearNode=u.closestNode,u.lastChance=!1,u.checkCount=0,u.checkNode=u.closestFwdNode;!(u.checkCount>=10||u.checkNode.i+u.checkInterval>v.tail.i);){if(u.checkInterval>1?u.checkNode=u.checkNode.next.next.next.next.next.next.next.next.next.next:u.checkNode=u.checkNode.next,u.dist=(u.checkNode.p.x-l)*(u.checkNode.p.x-l)+(u.checkNode.p.z-i)*(u.checkNode.p.z-i),u.dist<u.closestDist)u.lastChance=!1,u.closestDist=u.dist,u.closestFwdDist=u.closestDist,u.closestFwdNode=u.checkNode;else if(u.dist<u.closestDist*u.checkMargin)u.lastChance=!1;else if(!u.lastChance)u.lastChance=!0;else break;u.checkCount++}for(u.checkNode=u.closestRearNode,u.lastChance=!1,u.checkCount=0;!(u.checkCount>=10||u.checkNode.i-u.checkInterval<v.head.i);){if(u.checkInterval>1?u.checkNode=u.checkNode.prev.prev.prev.prev.prev.prev.prev.prev.prev.prev:u.checkNode=u.checkNode.prev,u.dist=(u.checkNode.p.x-l)*(u.checkNode.p.x-l)+(u.checkNode.p.z-i)*(u.checkNode.p.z-i),u.dist<u.closestDist)u.lastChance=!1,u.closestDist=u.dist,u.closestRearDist=u.closestDist,u.closestRearNode=u.checkNode;else if(u.dist<u.closestDist*u.checkMargin)u.lastChance=!1;else if(!u.lastChance)u.lastChance=!0;else break;u.checkCount++}u.closestFwdDist<u.closestRearDist?u.closestNode=u.closestFwdNode:u.closestNode=u.closestRearNode}return{n:u.closestNode,d2:u.closestDist}},Go=(l,i,e)=>{for(u.n=e,u.n0=e,u.fine=!1;u.n;)if(u.t=u.n.n.x*(i-u.n.p.z)-u.n.n.z*(l-u.n.p.x),u.t<0&&u.n.nextFine)if(u.fine){if(u.t1=u.n.nextFine.n.x*(i-u.n.nextFine.p.z)-u.n.nextFine.n.z*(l-u.n.nextFine.p.x),u.t1>0)break;u.n=u.n.nextFine}else{if(u.t1=u.n.next.n.x*(i-u.n.next.p.z)-u.n.next.n.z*(l-u.n.next.p.x),u.t1>0){u.n0=u.n,u.fine=!0;continue}if(!u.n.next){u.n0=u.n.prev;break}u.n=u.n.next}else if(u.t>0&&u.n.prevFine)if(u.fine)u.n=u.n.prevFine;else{if(u.t1=u.n.prev.n.x*(i-u.n.prev.p.z)-u.n.prev.n.z*(l-u.n.prev.p.x),u.t1<0){u.n0=u.n.prev,u.fine=!0;continue}u.n=u.n.prev}else{u.n.i?u.n0=u.n:u.n0=u.n.prev;break}if(u.n0.next||(u.n0=e.prev.prev,u.n=e.prev.prev),u.x1=u.n0.p.x,u.z1=u.n0.p.z,u.x2=u.n0.next.p.x,u.z2=u.n0.next.p.z,u.len=(u.x2-u.x1)*(u.x2-u.x1)+(u.z2-u.z1)*(u.z2-u.z1),u.t0=((l-u.x1)*(u.x2-u.x1)+(i-u.z1)*(u.z2-u.z1))/u.len,u.t0>1?u.t0=1:u.t0<0&&(u.t0=0),u.x1=u.n.p.x,u.z1=u.n.p.z,u.nf=u.n.next,u.n.nextFine)u.nf=u.n.nextFine;else{if(Math.floor(Math.sqrt((u.n.p.x-l)**2+(u.n.p.z-i)**2))<100)throw new Error("Midline failed to generate beyond tail "+v.tail.i+" with vehicle/head "+v.vehicleIndex+"/"+v.head.i);if(!u.nf)return u.x1=u.x1-l,u.z1=u.z1-i,{d:Math.sqrt(u.x1*u.x1+u.z1*u.z1),y:u.n.p.y,da:u.n.da,s:u.side<0?-1:1,g:u.n.g,t:0,n:u.n,nf:u.n,t1:0}}return u.x2=u.nf.p.x,u.z2=u.nf.p.z,u.len=(u.x2-u.x1)*(u.x2-u.x1)+(u.z2-u.z1)*(u.z2-u.z1),u.t1=((l-u.x1)*(u.x2-u.x1)+(i-u.z1)*(u.z2-u.z1))/u.len,u.t1>1?u.t1=1:u.t1<0&&(u.t1=0),u.x3=u.x1+u.t1*(u.x2-u.x1),u.z3=u.z1+u.t1*(u.z2-u.z1),u.x1=u.x3-l,u.z1=u.z3-i,u.side=u.x1*u.n.n.x+u.z1*u.n.n.z,{d:Math.sqrt(u.x1*u.x1+u.z1*u.z1),y:u.n.p.y+u.t1*(u.nf.p.y-u.n.p.y),da:u.n0.da+u.t0*(u.n0.next.da-u.n0.da),s:u.side<0?-1:1,g:u.n0.g+u.t0*(u.n0.next.g-u.n0.g),t:u.t0,n:u.n0,nf:u.nf,t1:u.t1}},jp=(l,i,e)=>{var s;for(u.n=e;u.n;)if(u.t=u.n.n.x*(i-u.n.p.z)-u.n.n.z*(l-u.n.p.x),u.t<0&&u.n.next){if(u.t1=u.n.next.n.x*(i-u.n.next.p.z)-u.n.next.n.z*(l-u.n.next.p.x),u.t1>0)break;u.n=u.n.next}else if(u.t>0&&u.n.prev)u.n=u.n.prev;else break;return(s=u.n)!=null&&s.next||(u.n=e.prev.prev),u.x1=u.n.p.x,u.z1=u.n.p.z,u.x2=u.n.next.p.x,u.z2=u.n.next.p.z,u.len=(u.x2-u.x1)*(u.x2-u.x1)+(u.z2-u.z1)*(u.z2-u.z1),u.t=((l-u.x1)*(u.x2-u.x1)+(i-u.z1)*(u.z2-u.z1))/u.len,u.t>1?u.t=1:u.t<0&&(u.t=0),u.x3=u.x1+u.t*(u.x2-u.x1),u.z3=u.z1+u.t*(u.z2-u.z1),u.x1=u.x3-l,u.z1=u.z3-i,u.side=u.x1*u.n.n.x+u.z1*u.n.n.z,{d:Math.sqrt(u.x1*u.x1+u.z1*u.z1),y:u.n.p.y+u.t*(u.n.next.p.y-u.n.p.y),da:u.n.da+u.t*(u.n.next.da-u.n.da),s:u.side<0?-1:1,g:u.n.g+u.t*(u.n.next.g-u.n.g),t:u.t,n:u.n}},ja=(l,i,e)=>{let s,a,t,r,c,g;return t=e.p.x,r=e.p.z,c=e.next.p.x,g=e.next.p.z,s=(c-t)*(c-t)+(g-r)*(g-r),a=((l-t)*(c-t)+(i-r)*(g-r))/s,isNaN(a)?0:Math.max(Math.min(a,1),0)},Zp=(l,i,e)=>(e.p.x-l)*e.n.x+(e.p.z-i)*e.n.z<0?-1:1;class td{constructor(){o(this,"seaLevel",0)}getXZ(i,e){return 0}lookupXZ(i,e){return this.getXZ(i,e)}getGroundState(i,e,s,a,t=!1){return{h:0,f:1,r:!0}}getRoadsideHeight(i,e,s){return 0}}const ce=new td,qe={AWD:0,FWD:1,RWD:2},id={Driver:0,P1:1,P2:2,P3:3},ys={Cruise:0,Max:1},Qp=()=>{let l=V.speedControlTarget;V.set("speedControlTarget",Math.max(Math.min(n.tuning.topSpeed*3.6,l+5/vi[L.units]),5))},Xp=()=>{let l=V.speedControlTarget;V.set("speedControlTarget",Math.max(Math.min(n.tuning.topSpeed*3.6,l-5/vi[L.units]),5))},sd={type:0,mode:qe.AWD,seat:id.Driver,steerRotationIndex:2,steerRotation:450,speedFactor:1,showWheel:!0,seatAdjustment:0,seatHeight:0,autodriveSide:-1,autodriveSideIndex:0,steerSpeedFactor:.75,speedControl:!1,speedControlMode:ys.Cruise,speedControlTarget:60,speedControlTargetMS:16.67,tuningConfig:null,tuningConfigMeta:null},V=new Ve("Vehicle",sd,(l,i)=>!(l=="type"&&n.isLoading),(l,i)=>i),ad={type:{readable:"Vehicle type",label:"TYPE",type:E.Enum,default:0,options:[]},mode:{readable:"Drive mode",label:"DRIVE MODE",type:E.Enum,default:qe.AWD,options:[{readable:"AWD",label:"AWD"},{readable:"FWD",label:"FWD"},{readable:"RWD",label:"RWD"}],disabledForBike:!0}},Za={Forward:"KeyW",Backward:"KeyS",Left:"KeyA",Right:"KeyD",Boost:"ShiftLeft",Reset:"KeyR",CameraMode:"KeyC",NextScene:"KeyE",PrevScene:"KeyQ",Autodrive:"KeyF",AutodriveMode:"KeyG",Handbrake:"Space",ToggleHandbrake:"KeyB",Headlights:"KeyH",StickySteer:"KeyV",Mute:"KeyM",Pause:"KeyP",ToggleUI:"KeyU",ToggleSpeedControl:"KeyJ",IncSpeedControl:"KeyI",DecSpeedControl:"KeyK",ToggleSpeedControlMode:"KeyL",ToggleCinecam:"KeyT",ToggleDebug:"F4",CameraLeft:"Numpad4",CameraRight:"Numpad6",CameraUp:"Numpad8",CameraDown:"Numpad2"},St={toggleBoost:0,doubleTapBoost:!0,softSteer:1,steerSpeed:1,recenterSpeed:1.2,lockedSteerMode:0,lockedSteerSpeed:.6,accelFactor:.8,mapping:{...Za}},at={settings:{accelFactor:{readable:"Acceleration power",desc:"Alters the maximum acceleration of the vehicle",type:E.Range,default:St.accelFactor,min:.1,max:1,precision:1},softSteer:{readable:"Steer style",desc:"Soft steering is more gentle; Quick steering is more direct",type:E.Enum,default:St.softSteer,labels:["Quick","Soft"]},steerSpeed:{readable:"Steer sensitivity",desc:"How quickly the wheels turn under input",type:E.Range,default:St.steerSpeed,min:.2,max:3,precision:1},recenterSpeed:{readable:"Re-center sensitivity",desc:"How quickly the wheels recenter when input is released",type:E.Range,default:St.recenterSpeed,min:.2,max:3,precision:1},lockedSteerMode:{readable:"Steer lock mode",desc:"When active, prevents the steer from re-centering",type:E.Enum,default:St.lockedSteerMode,labels:["Hold","Toggle"]},lockedSteerSpeed:{readable:"Locked steer sensitivity",desc:"Steer sensitivity when using steer lock",type:E.Range,default:St.lockedSteerSpeed,min:.2,max:1,precision:2},toggleBoost:{readable:"Boost mode",type:E.Enum,default:St.toggleBoost,labels:["Hold","Toggle"]},doubleTapBoost:{readable:"Double-tap to boost",desc:"Engage boost by double-tapping forwards",type:E.Boolean,default:St.doubleTapBoost}}},ye=new Ve("Keys",St,(l,i)=>l=="mapping"?!0:l in at.settings?at.settings[l].type==E.Range?Tr(i,at.settings[l].min,at.settings[l].max):at.settings[l].type==E.Enum?Ir(i,at.settings[l].labels.length):!0:!1,(l,i)=>l=="mapping"?i:l in at.settings?at.settings[l].type==E.Range?Fr(i,at.settings[l].precision):at.settings[l].enum==E.Enum?_r(i):i:null);ye.updateMapping=()=>{ye.set("mapping",{...Za,...ye.mapping},!0)};const od={Keyboard:0,Mouse:1,Mobile:2,Gamepad:3};new ka(od.Keyboard);const rd=fe(!1),nd=fe(0),ld=fe(0),hd=fe(0),dd=fe(0),Yp=fe(0),cd=fe(0),Vo=new Ve("CompTracker",{time:0,startTime:0,progress:0,split1:0,split2:0,split3:0,split4:0,final:0,running:!1,finished:!1,isPersonalBest:!1,saving:!1,saved:!1,ghost:[],lines:[],checkpoints:[],skippedNodes:!1,frames:0,cumulativeTime:0,resolution:0,browser:0,offroad:!1,isPlayback:!1,playbackFinished:!1,realtime:0,uniqueID:null,usedController:!1,usedKeys:!1,usedMouse:!1,usedTouch:!1,pauseTime:0,restart:0,restartTimer:0,invalid:!1}),ke={Button:0,Axis:1},Qa={Forward:{type:ke.Button,index:7},Backward:{type:ke.Button,index:6},Left:{type:ke.Axis,index:0,sign:-1,max:1},Right:{type:ke.Axis,index:0,sign:1,max:1},Boost:{type:ke.Button,index:1},Reset:{type:ke.Button,index:3},CameraMode:{type:ke.Button,index:12},NextScene:{type:ke.Button,index:15},PrevScene:{type:ke.Button,index:14},Autodrive:{type:ke.Button,index:0},AutodriveMode:null,Handbrake:{type:ke.Button,index:5},ToggleHandbrake:{type:ke.Button,index:4},Headlights:{type:ke.Button,index:13},ToggleSpeedControl:null,ToggleSpeedControlMode:null,IncSpeedControl:null,DecSpeedControl:null,Mute:null,Pause:null,ToggleUI:null,CameraLeft:null,CameraRight:null,CameraUp:null,CameraDown:null},tt={steerSmoothing:.3,linearity:.25,deadzone:5,autoBoost:!1,controllerIndex:0,controllerIndexWasSet:!1,steerRange:.8,directSteer:!1,brakeSense:2,mapping:{...Qa}},ot={settings:{directSteer:{readable:"Wheel mode",desc:"For wheel controllers - disables all steer input filtering",type:E.Boolean,default:tt.directSteer,overrides:["steerSmoothing","steerRange","speedSteerFactor","linearity","deadzone"]},autoBoost:{readable:"Auto-boost at max throttle",desc:"Applies boost when at max throttle",type:E.Boolean,default:tt.autoBoost},brakeSense:{readable:"Brake sensitivity",desc:"Controls how strongly the brake responds to input",type:E.Range,default:tt.steerSmoothing,min:1,max:10,precision:0},steerSmoothing:{readable:"Steer smoothing",desc:"Applies gentle smoothing to the steering input",type:E.Range,default:tt.steerSmoothing,min:0,max:1,precision:2},steerRange:{readable:"Steer range",desc:"Limits the maximum steering range",type:E.Range,default:tt.steerRange,min:0,max:1,precision:2},linearity:{readable:"Steer linearity",desc:"Less linearity means more precision at small steer angles",type:E.Range,default:tt.linearity,min:0,max:1,precision:2},deadzone:{readable:"Axis Deadzone %",desc:"Width of deadzone as a percentage",default:tt.deadzone,type:E.Range,min:0,max:15,precision:1},controllerIndex:{readable:"Controller to use",default:tt.controllerIndex,type:E.Enum,labels:["Controller 1","Controller 2","Controller 3","Controller 4"]}}},te=new Ve("Gamepad",tt,(l,i)=>l=="mapping"?!0:l in ot.settings?ot.settings[l].type==E.Range?Tr(i,ot.settings[l].min,ot.settings[l].max):ot.settings[l].type==E.Enum?Ir(i,ot.settings[l].labels.length):!0:l in tt,(l,i)=>l=="mapping"?i:l in ot.settings?ot.settings[l].type==E.Range?Fr(i,ot.settings[l].precision):ot.settings[l].enum==E.Enum?_r(i):i:l in tt);te.updateMapping=()=>{te.set("mapping",{...Qa,...te.mapping},!0)};const gd={smoothing:.3,near:.35,fov:75,mode:0,isCinecam:!1,isInterior:!1},Je=new Ve("Camera",gd),ud={Forward:"Forward",Left:"Left",Right:"Right",Backward:"Backward",Handbrake:"Handbrake",ToggleHandbrake:"ToggleHandbrake",Boost:"Boost",Autodrive:"Autodrive",AutodriveMode:"AutodriveMode",Reset:"Reset",NextScene:"NextScene",PrevScene:"PrevScene",StickySteer:"StickySteer",Headlights:"Headlights",CameraMode:"CameraMode",ToggleUI:"ToggleUI",ToggleDebug:"ToggleDebug",ToggleCinecam:"ToggleCinecam",ToggleSpeedControl:"ToggleSpeedControl",ToggleSpeedControlMode:"ToggleSpeedControlMode",IncSpeedControl:"IncSpeedControl",DecSpeedControl:"DecSpeedControl",Mute:"Mute",Pause:"Pause",CinecamUp:"CinecamUp",CinecamDown:"CinecamDown",CinecamZoom:"CinecamZoom",CameraLeft:"CameraLeft",CameraRight:"CameraRight",CameraUp:"CameraUp",CameraDown:"CameraDown"},jo={Handbrake:!0,Autodrive:!0,AutodriveMode:!0,Headlights:!0,StickySteer:!0,Boost:!0,CameraMode:!0,NextScene:!0,PrevScene:!0,ToggleUI:!0,ToggleDebug:!0,ToggleCinecam:!0,ToggleHandbrake:!0,ToggleSpeedControl:!0,ToggleSpeedControlMode:!0,Reset:!0,Mute:!0,Pause:!0},Zo={Autodrive:!0,AutodriveMode:!0,Headlights:!0,CameraMode:!0,NextScene:!0,PrevScene:!0,ToggleUI:!0,ToggleDebug:!0,ToggleCinecam:!0,ToggleSpeedControl:!0,ToggleSpeedControlMode:!0,Reset:!0,IncSpeedControl:!0,DecSpeedControl:!0,Mute:!0,Pause:!0,ToggleHandbrake:!0};let He,Hs,Hi,si;class fd{constructor(){o(this,"signal",{});o(this,"gamepadSignal",{});o(this,"filtered",{steer:0,brake:0,accel:0});o(this,"smooth",{keySteer:0,keyAccel:0,keyBrake:0,mouseSteer:0,gamepadSteer:0});o(this,"keySteerSmoother");o(this,"mouseSteerSmoother");o(this,"gamepadSteerSmoother");o(this,"keyState",{lastAccel:0,hasAccel:!1,hasBoost:!1});o(this,"held",{Autodrive:!1,Headlights:!1,Reset:!1});o(this,"toggled",{Handbrake:!1,Boost:!1});o(this,"listeners",{});o(this,"mouseLockCounter",0);o(this,"hasScreenInput",!1);o(this,"hasScreenSteer",!1);o(this,"hasScreenAccel",!1);o(this,"screenInput",{listeners:[],accel:0,brake:0,steer:0,reset:0});o(this,"hasGamepadInput",!1);o(this,"gamepadCheckTimer",1);o(this,"gamepadHeld",{});o(this,"deadzoneMin",.05);o(this,"deadzoneFactor",1.05);o(this,"gamepadLocked",!1);o(this,"updateDeadzoneBound",this.updateDeadzone.bind(this));o(this,"updateKeySteerSmootherBound",this.updateKeySteerSmoother.bind(this));o(this,"updateMouseSteerSmootherBound",this.updateMouseSteerSmoother.bind(this));o(this,"onToggleUseMouseBound",this.onToggleUseMouse.bind(this));o(this,"updateGamepadSteerSmootherBound",this.updateGamepadSteerSmoother.bind(this));o(this,"mouseReset",!1);o(this,"mouseToggles",[]);o(this,"mouseHasAccel",!1);o(this,"mouseHasBoost",!1);o(this,"mouseLastAccel",0);o(this,"v");o(this,"c");o(this,"onControllerChangedBound",this.onControllerChanged.bind(this));for(let i in ud)this.signal[i]=0,this.gamepadSignal[i]=0,this.listeners[i]=[];this.keySteerSmoother=new Qo,this.keyAccelSmoother=new bi(.5),this.keyBrakeSmoother=new bi(.5),this.mouseSteerSmoother=new bi,this.gamepadSteerSmoother=new bi,rd.subscribe(this.onScreenInputEnabled.bind(this))}updateDeadzone(){te.directSteer?this.deadzoneMin=0:this.deadzoneMin=te.deadzone/100,this.deadzoneFactor=1/(1-this.deadzoneMin)}initialise(){te.addListener("deadzone",this.updateDeadzoneBound),te.addListener("directSteer",this.updateDeadzoneBound),te.addListener("controllerIndex",this.onControllerChangedBound,!0),ye.addListener("any",this.updateKeySteerSmootherBound),le.addListener("useMouse",this.onToggleUseMouseBound),le.addListener("smoothing",this.updateMouseSteerSmootherBound),te.addListener("steerSmoothing",this.updateGamepadSteerSmootherBound),n.addListener("modelChanged",this.updateKeySteerSmootherBound)}onScreenInputEnabled(i){if(this.hasScreenInput=i,this.hasScreenSteer=!1,this.hasScreenAccel=!1,i)this.screenInput.listeners.push(nd.subscribe(e=>this.screenInput.accel=e)),this.screenInput.listeners.push(ld.subscribe(e=>this.screenInput.brake=e)),this.screenInput.listeners.push(cd.subscribe(e=>this.screenInput.boost=e)),this.screenInput.listeners.push(hd.subscribe(e=>this.screenInput.steer=e)),this.screenInput.listeners.push(dd.subscribe(e=>this.screenInput.reset=e));else for(;this.screenInput.listeners.length;)this.screenInput.listeners.pop()()}lockMouse(){this.mouseLockCounter++,le.useMouse&&(this.gamepadSignal.Left=0,this.gamepadSignal.Right=0)}unlockMouse(i=!1){i&&(this.mouseLockCounter=0),this.mouseLockCounter>0&&this.mouseLockCounter--}updateKeySteerSmoother(){this.keySteerSmoother.type!=ye.softSteer&&(ye.softSteer?this.keySteerSmoother=new Qo:this.keySteerSmoother=new bi),this.keySteerSmoother.baseInterval=n.tuning.steerInterval,this.keySteerSmoother.sensitivity=ye.steerSpeed**2,this.keySteerSmoother.recenterSensitivity=ye.recenterSpeed**2}updateMouseSteerSmoother(){this.mouseSteerSmoother.baseInterval=(le.smoothing*2)**2}onToggleUseMouse(i){i||(this.gamepadSignal.Left=0,this.gamepadSignal.Right=0,this.smooth.mouseSteer=0)}updateGamepadSteerSmoother(){this.gamepadSteerSmoother.baseInterval=(te.steerSmoothing*2)**2}update(i){var e;if(this.updateKeys(i),Je.isCinecam&&this.updateCinecam(),this.hasScreenInput&&this.updateScreen(i),!le.useMouse&&this.hasGamepadInput)this.updateGamepad(i),this.signal.Forward=Math.min(1,this.signal.Forward+this.gamepadSignal.Forward),this.signal.Backward=Math.min(1,this.signal.Backward+this.gamepadSignal.Backward),this.signal.Boost=Math.min(1,this.signal.Boost+this.gamepadSignal.Boost),this.signal.Handbrake=Math.min(1,this.signal.Handbrake+this.gamepadSignal.Handbrake),this.signal.CameraLeft=Math.min(1,this.signal.CameraLeft+this.gamepadSignal.CameraLeft),this.signal.CameraRight=Math.min(1,this.signal.CameraRight+this.gamepadSignal.CameraRight),this.signal.CameraUp=Math.min(1,this.signal.CameraUp+this.gamepadSignal.CameraUp),this.signal.CameraDown=Math.min(1,this.signal.CameraDown+this.gamepadSignal.CameraDown);else{if(this.signal.Forward==0&&n.speed<5&&(this.gamepadCheckTimer-=i,this.gamepadCheckTimer<=0&&(this.gamepadCheckTimer=1,(e=navigator.getGamepads)!=null&&e.call(navigator)))){let s=navigator.getGamepads()[te.controllerIndex]!=null;!this.hasGamepadInput&&s&&L.set("touchscreen",!1),this.hasGamepadInput=s}le.useMouse&&(this.updateMouse(i),this.signal.Forward=Math.min(1,this.signal.Forward+this.gamepadSignal.Forward),this.signal.Backward=Math.min(1,this.signal.Backward+this.gamepadSignal.Backward))}this.signal.ToggleHandbrake?(this.toggled.Handbrake=!this.toggled.Handbrake,this.on("ToggleHandbrake",this.toggled.Handbrake)):this.toggled.Handbrake&&this.signal.Handbrake&&(this.toggled.Handbrake=!1,this.on("ToggleHandbrake",!1)),this.signal.Handbrake=this.toggled.Handbrake||this.signal.Handbrake>0?1:0,this.filtered.steer=Math.min(Math.max(-1,this.smooth.keySteer+this.smooth.mouseSteer+this.smooth.gamepadSteer),1)}updateKeys(i){if(He=ye.mapping,this.signal.Forward=0,ee.key[He.Forward]||ee.key.ArrowUp?(this.hasScreenInput&&L.set("touchscreen",!1),!this.keyState.hasAccel&&ye.doubleTapBoost&&(!this.keyState.hasAccel&&mt.appTime-this.keyState.lastAccel<.2&&(ye.toggleBoost?(this.toggled.Boost=!this.toggled.Boost,this.keyState.boostFromTap=this.toggled.Boost):this.keyState.boostFromTap=!0),this.keyState.lastAccel=mt.appTime),this.signal.Forward=1,this.signal.Forward*=ye.accelFactor,this.keyState.hasAccel=!0):(this.keyState.hasAccel=!1,this.keyState.boostFromTap=!1),this.signal.Backward=0,(ee.key[He.Backward]||ee.key.ArrowDown)&&(this.signal.Backward=1,this.signal.Backward*=Math.max(.8,ye.accelFactor)),ye.lockedSteerMode==0?(this.signal.StickySteer=ee.key[He.StickySteer]?1:0,this.toggled.StickySteer=!1):this.checkToggleKey("StickySteer",!1),this.signal.Left=0,(ee.key[He.Left]||ee.key.ArrowLeft)&&(this.signal.Left=1),this.signal.Right=0,(ee.key[He.Right]||ee.key.ArrowRight)&&(this.signal.Right=1),this.signal.StickySteer){let e=this.signal.Left-this.signal.Right;e&&(this.smooth.keySteer=this.keySteerSmoother.update(e,i*ye.lockedSteerSpeed*ye.lockedSteerSpeed))}else this.smooth.keySteer=this.keySteerSmoother.update(this.signal.Left-this.signal.Right,i);this.signal.Handbrake=ee.key[He.Handbrake]?1:0,this.signal.CameraLeft=ee.key[He.CameraLeft]?1:0,this.signal.CameraRight=ee.key[He.CameraRight]?1:0,this.signal.CameraUp=ee.key[He.CameraUp]?1:0,this.signal.CameraDown=ee.key[He.CameraDown]?1:0,this.checkDebouncedKey("ToggleHandbrake",!1),this.keyState.boostFromTap?this.signal.Boost=1:ye.toggleBoost?(this.checkDebouncedKey("Boost",!1),this.signal.Boost&&(this.toggled.Boost=!this.toggled.Boost,this.keyState.boostFromTap=!1),this.signal.Boost=this.toggled.Boost):this.signal.Boost=ee.key[He.Boost]?1:0,this.checkDebouncedKey("Reset"),this.checkDebouncedKey("Autodrive"),this.checkDebouncedKey("AutodriveMode"),this.checkDebouncedKey("Headlights"),this.checkDebouncedKey("CameraMode"),this.checkDebouncedKey("NextScene"),this.checkDebouncedKey("PrevScene"),this.checkDebouncedKey("ToggleUI"),this.checkDebouncedKey("ToggleDebug"),this.checkDebouncedKey("ToggleCinecam"),this.checkDebouncedKey("ToggleSpeedControl"),this.checkDebouncedKey("ToggleSpeedControlMode"),this.checkDebouncedKey("IncSpeedControl"),this.checkDebouncedKey("DecSpeedControl"),this.checkDebouncedKey("Mute"),this.checkDebouncedKey("Pause")}updateCinecam(){this.signal.CinecamUp=ee.mouseDown[0],this.signal.CinecamDown=ee.mouseDown[2],this.signal.CinecamZoom=ee.scrollDelta,ee.scrollDelta=0}updateScreen(i){this.keyState.hasAccel||(this.screenInput.accel<0?this.signal.Backward=-this.screenInput.accel:this.signal.Forward=this.screenInput.accel),this.signal.Left=Math.min(0,Math.min(-this.signal.Left,this.screenInput.steer))*-1,this.signal.Right=Math.max(0,Math.max(this.signal.Right,this.screenInput.steer)),this.smooth.gamepadSteer=this.signal.Left-this.signal.Right,this.hasScreenSteer=this.smooth.gamepadSteer!=0,this.hasScreenAccel=this.screenInput.accel!=0,this.signal.Boost=this.screenInput.boost,this.signal.Boost&&(this.signal.Forward=Math.min(1,.5+this.signal.Forward)),this.screenInput.brake>0&&(n.direction>0?(this.signal.Backward=Math.min(Math.max(.5,n.speed/n.tuning.topSpeed*2),1),this.signal.Forward=0):(this.signal.Forward=Math.min(Math.max(.5,n.speed/n.tuning.topSpeed*2),1),this.signal.Backward=0)),this.screenInput.reset&&(this.screenInput.reset=0,this.signal.Reset=1)}resetByMouse(){this.mouseReset=!0}updateMouse(i){Hi=le.mapping;let e,s;if(this.mouseLockCounter<=0)for(e in Hi)le.clickInputMode==0&&(this.gamepadSignal[e]=0),Hi[e]!=null&&(s=Hi[e],le.clickInputMode==0&&le.doubleClickBoost&&e=="Forward"&&!this.mouseHasAccel&&ee.mouseDown[s]&&mt.appTime-this.mouseLastAccel<le.doubleClickInterval*1&&(this.mouseHasBoost=!0),Zo[e]?ee.mouseClick[s]&&(jo[e]&&(this.signal[e]=1),this.on(e,1)):le.clickInputMode==1?(ee.mouseClick[s]&&(this.gamepadSignal[e]=!this.gamepadSignal[e]),e=="Forward"?this.gamepadSignal[e]*=le.accelFactor:e=="Backward"&&(this.gamepadSignal[e]*=Math.max(.8,le.accelFactor)),this.signal[e]=this.signal[e]||this.gamepadSignal[e]):(this.gamepadSignal[e]=ee.mouseDown[s]?1:0,e=="Forward"?this.gamepadSignal[e]*=le.accelFactor:e=="Backward"&&(this.gamepadSignal[e]*=Math.max(.8,le.accelFactor)),this.signal[e]=Math.min(1,this.signal[e]+this.gamepadSignal[e])));this.gamepadSignal.Forward?this.mouseHasAccel=!0:this.mouseHasAccel&&(this.mouseHasAccel=!1,this.mouseHasBoost=!1,this.mouseLastAccel=mt.appTime),this.mouseHasBoost&&(this.gamepadSignal.Boost=1,this.signal.Boost=1),this.mouseReset&&(this.mouseReset=!1,this.signal.Reset=1,this.gamepadSignal.Reset=1),ee.mouse.y>window.innerHeight-200?(this.gamepadSignal.Left=0,this.gamepadSignal.Right=0):(this.gamepadSignal.Left=Math.min(1,Math.max(0,-(ee.mouseScreen.x/le.steerBarWidth))),this.gamepadSignal.Right=Math.min(1,Math.max(0,ee.mouseScreen.x/le.steerBarWidth)));let a=this.gamepadSignal.Left-this.gamepadSignal.Right;a<0?a=a*le.linearity+a*a*(1-le.linearity)*-1:a=a*le.linearity+a*a*(1-le.linearity),le.smoothing>0?this.smooth.mouseSteer=this.mouseSteerSmoother.update(a,i):this.smooth.mouseSteer=a,a!=0&&bs&&!Vo.usedMouse&&(Vo.usedMouse=!0,console.log("USED MOUSE"))}updateGamepad(i){var s;if(Hs=te.mapping,si=(s=navigator.getGamepads)==null?void 0:s.call(navigator)[te.controllerIndex],!this.gamepadLocked)if(si){for(let a in Hs)this.getGamepadValue(a);this.gamepadSignal.Forward*=1-this.gamepadSignal.Backward,te.autoBoost&&this.gamepadSignal.Boost==0&&(this.gamepadSignal.Boost=this.gamepadSignal.Forward>.99)}else console.warn("Lost gamepad input"),this.hasGamepadInput=!1,this.gamepadSignal.Forward=0,this.gamepadSignal.Backward=0;let e=this.gamepadSignal.Left-this.gamepadSignal.Right;te.directSteer?this.smooth.gamepadSteer=e:(e*=te.steerRange,e<0?e=e*te.linearity+e*e*(1-te.linearity)*-1:e=e*te.linearity+e*e*(1-te.linearity),te.steerSmoothing>0?this.smooth.gamepadSteer=this.gamepadSteerSmoother.update(e,i,!0):this.smooth.gamepadSteer=e)}checkDebouncedKey(i,e=!0){this.signal[i]=0,ee.key[He[i]]?this.held[i]||(this.signal[i]=1,this.held[i]=!0,e&&this.on(i)):this.held[i]=!1}checkToggleKey(i,e=!0){this.checkDebouncedKey(i,e),this.signal[i]&&(this.toggled[i]=!this.toggled[i]),this.signal[i]=this.toggled[i]}getGamepadValue(i,e=!1){if(this.gamepadSignal[i]=0,this.c=Hs[i],this.c)if(this.c.type==ke.Button&&si.buttons[this.c.index]!==void 0)this.v=Math.abs(si.buttons[this.c.index].value)||0,this.v==0&&si.buttons[this.c.index].pressed&&(this.v=1),this.v>.5?Zo[i]&&(this.gamepadHeld[i]||(this.gamepadHeld[i]=!0,jo[i]&&(this.signal[i]=1),this.on(i,1))):this.gamepadHeld[i]=!1,this.gamepadSignal[i]=this.v;else{let s=si.axes[this.c.index]||0;this.c.sign<0?this.c.mode==2?s=1-Math.max(0,s):this.c.mode==1?s=1-(s+1)/2:s=-s:this.c.mode==2?s=Math.max(0,-s):this.c.mode==1&&(s=(s+1)/2),s=Math.max(0,Math.min(1,(s-this.deadzoneMin)*this.deadzoneFactor)),te.directSteer&&i=="Backward"&&(s=Math.min(1,s*te.brakeSense)),this.gamepadSignal[i]=s}}onControllerChanged(i){te.set("controllerIndexWasSet",!0)}addListener(i,e){typeof e=="function"&&(this.listeners[i].includes(e)||this.listeners[i].push(e))}removeListener(i,e){if(!(i in this.listeners))return;let s=this.listeners[i].indexOf(e);s>=0&&this.listeners[i].splice(s,1)}on(i,e=null){for(let s of this.listeners[i])s(e)}lockGamepad(){this.gamepadLocked=!0}unlockGamepad(){this.gamepadLocked=!1}}class Qo{constructor(i=1){o(this,"type",1);o(this,"interval",1);o(this,"baseInterval",1);o(this,"sensitivity",1);o(this,"recenterSensitivity",1);o(this,"current",0);o(this,"timer",0);o(this,"origin",0);o(this,"target",0);o(this,"hasInput",!1);this.baseInterval=i}update(i,e){return i!=0&&(!this.hasInput||i!=this.target)?(this.hasInput=!0,this.origin=this.current,this.target=i,this.interval=Math.min(1,Math.abs(this.current-this.target))*this.baseInterval,Math.sign(i)!==Math.sign(this.current)&&(this.interval*=1/Math.abs(i-this.current)),this.timer=0,this.timeLerp=0):this.hasInput&&i==0&&(this.timer=0,this.hasInput=!1,this.origin=this.current,this.target=0,this.interval=Math.abs(this.current-this.target)*this.baseInterval,this.timeLerp=0),this.hasInput?e*=this.sensitivity:e*=this.recenterSensitivity,e*=.75,this.timeLerp<1&&(this.timer+=e,this.timeLerp=Math.min(1,this.timer/this.interval),this.squareLerp=Math.sqrt(this.timeLerp),this.lerp=this.smoothLerp(this.squareLerp),this.current=this.origin*this.lerp+this.target*(1-this.lerp)),this.current}smoothLerp(i){return i=Math.min(1,i),-1*(3-i*2)*i*i+1}}class bi{constructor(i=1){o(this,"type",0);o(this,"interval",1);o(this,"baseInterval",1);o(this,"sensitivity",1);o(this,"recenterSensitivity",1);o(this,"current",0);o(this,"dir");o(this,"a");this.baseInterval=i}update(i,e){return this.dir=i<0?-1:1,this.temper=1-Math.abs(this.current),(this.dir<0&&this.current>0||this.dir>0&&this.current<0)&&(this.temper=1),i==0?(this.interval=this.baseInterval,this.temper=1,e*=this.recenterSensitivity):(e*=this.sensitivity*.4,this.interval=this.baseInterval),this.temper==0?this.a=0:this.a=Math.min(1,e*6/this.interval)*this.temper,this.current=this.current*(1-this.a)+i*this.a,this.current}}const I=new fd;let xe=-9.81;const Ht={Tarmac:0,Gravel:1,Ice:2},hs=["tarmac","gravel","ice"],Xo=""+new URL("../assets/motor_02.796b0d49.mp3",import.meta.url).href,Br=""+new URL("../assets/brake.fe62943d.mp3",import.meta.url).href,Ur=""+new URL("../assets/suspension.1c4c4b73.mp3",import.meta.url).href,Hr=""+new URL("../assets/roll_tarmac_01.946ae363.mp3",import.meta.url).href,zr=""+new URL("../assets/roll_tarmac_int.e8cc8d26.mp3",import.meta.url).href,Ei=""+new URL("../assets/roll_gravel.81af40f4.mp3",import.meta.url).href,Ni=""+new URL("../assets/roll_gravel_int.c7b362d0.mp3",import.meta.url).href,pd=""+new URL("../assets/roll_ice.e358f630.mp3",import.meta.url).href,Ad=""+new URL("../assets/roll_ice_int.66845f3c.mp3",import.meta.url).href,Wr=""+new URL("../assets/skid_tarmac.2e809198.mp3",import.meta.url).href,Gr=""+new URL("../assets/skid_tarmac_int.98007200.mp3",import.meta.url).href,Vr=""+new URL("../assets/skid_wet.b41804bd.mp3",import.meta.url).href,jr=""+new URL("../assets/skid_wet_int.2f3a8990.mp3",import.meta.url).href,Zr=""+new URL("../assets/hit_01.9e9c259f.mp3",import.meta.url).href,Qr=""+new URL("../assets/hit_01_int.c2f91a7b.mp3",import.meta.url).href,Xr=""+new URL("../assets/hit_02.69c75a35.mp3",import.meta.url).href,Yr=""+new URL("../assets/hit_02_int.44f13e76.mp3",import.meta.url).href,Kr=""+new URL("../assets/hit_03.28674fc6.mp3",import.meta.url).href,qr=""+new URL("../assets/hit_03_int.00b2a132.mp3",import.meta.url).href,Jr=""+new URL("../assets/scrape_metal.417cfe49.mp3",import.meta.url).href,$r=""+new URL("../assets/scrape_metal_int.76a3645c.mp3",import.meta.url).href,zs={engine:Xo,boost:Xo,brake:Br,roll:{tarmac:{ext:Hr,int:zr},gravel:{ext:Ei,int:Ni},ice:{ext:pd,int:Ad}},skid:{tarmac:{ext:Wr,int:Gr},gravel:{ext:Ei,int:Ni},ice:{ext:Vr,int:jr}},hit:[{ext:Zr,int:Qr},{ext:Xr,int:Yr},{ext:Kr,int:qr}],scrape:{ext:Jr,int:$r},suspension:Ur},Ct=2,Yo=.65,md=.15,vd=.7,wd=.2;let xd=.3;const Sd=.3;class Xa{constructor(i,e={}){o(this,"sounds",{engine:null,boost:null,brake:null,wheels:[{roll:[],skid:[],sus:null}],hits:[],scrape:null});o(this,"interiorSounds",{engine:null,boost:null,brake:null,wheels:[],hits:[],scrape:null});o(this,"exteriorSounds",{engine:null,boost:null,brake:null,wheels:[],hits:[],scrape:null});o(this,"interiorVol",1);o(this,"ready",!1);o(this,"vc");o(this,"inputs");o(this,"vol",0);o(this,"decel",!1);o(this,"lerpTarget",2);o(this,"speedTarget",0);o(this,"t1");o(this,"accelPower",0);o(this,"update");o(this,"engineRate",0);o(this,"boostT",0);o(this,"boostV",0);o(this,"boostA",0);o(this,"boostR",0);o(this,"brakeT",0);o(this,"tls",[0,0,0,0]);o(this,"tss",[0,0,0,0]);o(this,"surfaces",[0,0,0,0]);o(this,"tl");o(this,"maxAud");o(this,"stopNextFrame",[]);o(this,"skip",0);o(this,"coll",!1);o(this,"hitIndex",0);o(this,"hitSound");o(this,"lastScrape",0);o(this,"loadStatus",{count:0,loaded:0});o(this,"positions",{wheelBase:0,axleWidth:0});o(this,"loadIndex",0);o(this,"onInteriorChangedBound",this.onInteriorChanged.bind(this));for(let s in e){if(!(s in zs)){console.warn("VEHICLE AUDIO: Invalid audio key ",s);continue}zs[s]}this.vc=i,this.inputs=this.vc.inputs,Je.addListener("isInterior",this.onInteriorChangedBound),this.update=this.updateNull}reset(){this.vol=0,this.lerpTarget=2}destroy(){Je.removeListener("isInterior",this.onInteriorChangedBound);for(let i of this.container.children)i.type=="Audio"&&i.setVolumeStoppable(0);this.container.clear()}updateNull(){}updateLive(i){this.updateEngine(i,this.vc.inputs),this.updateBrakes(),this.updateWheels(i,this.vc.wheels),this.updateCollisions()}updateEngine(i,e){let s=this.sounds.engine;if(!s)return;let a=this.sounds.boost;if(this.vc.powerLerp*.8,e.accel<0&&n.direction>0,this.accelPower=.4+Math.abs(e.accel)/(this.vc.tuning.speedFactor*this.vc.tuning.accel)*.6,n.hasBoost&&e.accel!=0?this.boostV=this.boostV*.9+.1:this.boostV*=.95,this.boostA=this.boostV*(1-this.vc.speedLerp*.5),this.speedTarget=Math.min(n.speed,this.vc.tuning.topSpeed+10)/15+1,this.lerpTarget=this.lerpTarget*.95+this.speedTarget*.05,e.accel!=0){this.decel&&(this.vol+=.2,this.decel=!1),this.vol+=i*2,this.vol=Math.min(1,this.vol,this.accelPower),this.engineRate=.15+this.lerpTarget*.5,this.engineRate*=this.vc.tuning.engineRateFactor,s.setPlaybackRate(this.engineRate+this.boostA*.1),this.t1=(1-this.smoothstep(this.vol))*Yo;let t=this.t1*this.interiorVol*Me.engine+this.boostA*.2;t*=this.vc.tuning.engineVolFactor,s.setVolume(t*(1-this.vc.speedLerp*.15)),a.setPlaybackRate(this.engineRate*this.vc.tuning.engineBoostFactor+this.boostA*.5),a.setVolume(t*(.5-.4*this.vc.speedLerp+this.boostA*.2))}else if(this.vol>0){this.decel==!1&&(this.lerpTarget-=.05),this.decel=!0,this.vol-=i,this.vol=Math.max(0,this.vol),this.t1=this.vol*Yo;let t=this.t1*this.interiorVol*Me.engine+this.boostA*.2;s.setVolume(t*(1-this.vc.speedLerp*.15)),a.setPlaybackRate(this.engineRate*this.vc.tuning.engineBoostFactor+this.boostA*.4),a.setVolume(t*(.5-.3*this.vc.speedLerp+this.boostA*.2))}else s.setVolume(0),a.setVolume(0)}updateBoost(){this.boostV=0,n.hasAccel&&n.hasBoost?(this.boostA=this.boostA*.5+.5,1-this.vc.powerLerp,this.boostT=.5+this.vc.powerLerp/2,this.boostR=this.boostA*this.sounds.engine.playbackRate*1.5,this.sounds.boost.setPlaybackRate(this.boostA*this.sounds.engine.playbackRate*1.5)):(this.boostT*=.95,this.boostA=0),this.boostV=this.boostT*vd*this.accelPower*this.interiorVol*Me.engine*(1-this.vc.speedLerp**2*.65),this.boostV>1&&(this.boostV=1),this.sounds.boost.setVolumeStoppable(this.boostV)}updateBrakes(){if(!this.vc.braking||n.isAirborne||this.vc.softBraking){this.sounds.brake.setVolumeStoppable(0);return}let i=(this.vc.wheels[2].downforce+this.vc.wheels[3].downforce)/2;this.brakeT=this.brakeT*.9+.1*Math.min(i,Math.max(0,(n.speed-20)/20)),this.sounds.brake.setPlaybackRate(1),this.sounds.brake.setVolumeStoppable(this.brakeT*md*this.vc.brakeLerp*this.interiorVol*Me.brakes)}updateWheels(i,e){let s=Math.max(0,Math.min(1,this.vc.speedLerp-.01))*xd*Me.roll,a;for(let t of e){if(t.i>=this.sounds.wheels.length)break;a=this.sounds.wheels[t.i],this.maxAud=0;let r=.05;t.slip>r&&(this.maxAud=(Math.abs(t.latDirDot)-r)/(1-r)),t.locked&&(this.maxAud=Math.max(this.maxAud,Math.min(1,(Math.abs(t.lonDirDot*t.speed)-2)/4))),t.shockFactor==0&&(this.maxAud=0),this.tl=this.tls[t.i],this.maxAud>0?this.tl=this.tl*.95+.05*this.maxAud:this.tl=this.tl*.8,t.shockFactor<.25&&(this.tl*=t.shockFactor*4),this.surfaces[t.i]!=t.groundState.s&&(a.skid[this.surfaces[t.i]].setVolumeStoppable(0),a.roll[this.surfaces[t.i]].setVolumeStoppable(0),this.surfaces[t.i]=t.groundState.s),a.roll[t.groundState.s].isPlaying||(a.roll[t.groundState.s].play(),a.skid[t.groundState.s].play()),t.shockFactor==0?a.roll[t.groundState.s].setVolume(.01):a.roll[t.groundState.s].setVolume(s),a.roll[t.groundState.s].setPlaybackRate(.6+this.vc.speedLerp*.4),a.skid[t.groundState.s].setVolume(Sd*this.tl*Me.skid),this.tls[t.i]=this.tl;let c=this.tss[t.i],g=-t.shockVel;g<1.5?this.tl=0:(g=(g-1.5)**2,this.tl=Math.max(Math.min(1,g),c)),this.tl>c?c=this.tl:c=c*.8,this.tss[t.i]=c,t.i<2?a.sus.setVolume(c*wd*this.interiorVol*Me.roll):a.sus.setVolume(0)}}updateCollisions(){this.vc.didCollide&&!this.vc.collisionsDisabled?this.coll?(this.sounds.scrape.position.copy(this.vc.collisionPos),n.speed>1?this.sounds.scrape.setVolumeStoppable(Math.min(1,this.vc.collisionStrength*2)*Me.collisions):this.sounds.scrape.setVolumeStoppable(Math.min(1,this.vc.collisionStrength*2*n.speed)*Me.collisions),this.sounds.scrape.isPlaying||this.sounds.scrape.play(),this.lastScrape=mt.appTime):(this.coll=!0,this.hitSound=this.sounds.hits[this.hitIndex],this.hitSound.isPlaying||(this.hitSound.position.copy(this.vc.collisionPos),this.hitSound.detune=Math.random()*-1200+600,this.hitSound.setVolume(Math.min(1,this.vc.collisionStrength*.3)*Me.collisions),this.hitSound.play()),this.hitIndex=(this.hitIndex+1)%2):this.coll&&mt.appTime-this.lastScrape>.1&&(this.coll=!1,this.sounds.scrape.setVolumeStoppable(0))}init(){this.loadIndex++,this.update=this.updateNull,this.ready=!1,this.loadStatus={count:0,loaded:0},this.positions.wheelBase=this.vc.metrics.wheelBase,this.positions.axleWidth=this.vc.metrics.axleWidth,this.positions.wheels=this.vc.layout.wheels,this.container=n.audioObj;let i=zs;this.loadSound(i.engine,"engine",this.vc.name),this.loadSound(i.boost,"boost",this.vc.name),this.loadSound(i.brake,"brake",this.vc.name),this.loadWorldSounds(i.hit,i.scrape,this.vc.name);for(let e of this.exteriorSounds.wheels)for(let s in e)if(e[s].length)for(let a of e[s])a&&(a.stop(),a.removeFromParent());else e[s].stop(),e[s].removeFromParent();this.exteriorSounds.wheels.length=0;for(let e of this.interiorSounds.wheels)for(let s in e)if(e[s].length)for(let a of e[s])a&&(a.stop(),a.removeFromParent());else e[s].stop(),e[s].removeFromParent();this.interiorSounds.wheels.length=0;for(let e=0;e<this.positions.wheels.length;e++)this.loadWheelSounds(e,this.positions.wheels[e],{roll:i.roll,skid:i.skid,sus:i.suspension},this.vc.name+"_wheel_"+e);this.lerpTarget=0,this.speedTarget=0}loadSound(i,e,s){this.loadStatus.count++;let a=this.loadIndex;De.getPositionalAudio(i,t=>{a===this.loadIndex&&(this.sounds[e]&&(this.interiorSounds[e].stop(),this.interiorSounds[e].removeFromParent(),this.exteriorSounds[e].stop(),this.exteriorSounds[e].removeFromParent()),this.interiorSounds[e]=t,this.exteriorSounds[e]=t,(e=="engine"||e=="engine2")&&(t.setLoop(!0),t.setLoopStart(.1),t.setLoopEnd(t.buffer.duration-.1),t.setRefDistance(this.positions.wheelBase*2),t.setRolloffFactor(Ct),t.position.set(this.positions.wheelBase,.4,0),t.setVolume(0),t.play()),(e=="brake"||e=="boost")&&(t.setLoop(!0),t.setLoopStart(.1),t.setLoopEnd(t.buffer.duration-.1),t.setRefDistance(this.positions.wheelBase*2),t.setRolloffFactor(Ct),t.position.set(this.positions.wheelBase/2,.4,0),t.setVolume(0),t.play()),t.name=e,this.container.add(t),this.onSoundLoaded())},this.sounds[e],s)}loadWorldSounds(i,e,s){for(let t=0;t<i.length;t++)this.loadHit(i[t],t,s);let a=this.loadIndex;this.loadStatus.count++,De.getPositionalAudio(e.ext,t=>{a===this.loadIndex&&(this.exteriorSounds.scrape&&(this.exteriorSounds.scrape.stop(),this.container.remove(this.exteriorSounds.scrape)),this.exteriorSounds.scrape=t,t.setLoop(!0),t.setLoopStart(.1),t.setLoopEnd(t.buffer.duration-.1),t.setVolumeStoppable(0),t.setRefDistance(8),t.setRolloffFactor(Ct),t.name="scrape_ext",t.position.set(2,.5,0),this.container.add(this.exteriorSounds.scrape),this.onSoundLoaded())},this.exteriorSounds.scrape,s),this.loadStatus.count++,De.getPositionalAudio(e.int,t=>{a===this.loadIndex&&(this.interiorSounds.scrape&&(this.interiorSounds.scrape.stop(),this.container.remove(this.interiorSounds.scrape)),this.interiorSounds.scrape=t,t.setLoop(!0),t.setLoopStart(.1),t.setLoopEnd(t.buffer.duration-.1),t.setVolumeStoppable(0),t.setRefDistance(8),t.setRolloffFactor(Ct),t.name="scrape_int",t.position.set(2,.5,0),this.container.add(this.interiorSounds.scrape),this.onSoundLoaded())},this.interiorSounds.scrape,s)}loadHit(i,e,s){let a=this.loadIndex;this.loadStatus.count++,De.getPositionalAudio(i.ext,t=>{a===this.loadIndex&&(this.exteriorSounds.hits[e]=t,t.setRefDistance(5),t.setRolloffFactor(Ct*3),t.setVolumeStoppable(0),this.container.add(t),t.onEnded=()=>{t.stop()},t.name="hit_ext_"+e,this.onSoundLoaded())},this.exteriorSounds.hits[e],s),this.loadStatus.count++,De.getPositionalAudio(i.int,t=>{a===this.loadIndex&&(this.interiorSounds.hits[e]=t,t.setRefDistance(5),t.setRolloffFactor(Ct*3),t.setVolumeStoppable(0),this.container.add(t),t.onEnded=()=>{t.stop()},t.name="hit_int_"+e,this.onSoundLoaded())},this.interiorSounds.hits[e],s)}loadWheelSounds(i,e,s,a){var f,x,w,S;let t=this.loadIndex,r=Math.random()*.15+.2*i,c=this.exteriorSounds.wheels[i]??{},g=this.interiorSounds.wheels[i]??{};for(let D=0;D<hs.length;D++){let C=hs[D];this.loadStatus.count++,De.getPositionalAudio(s.roll[C].ext,k=>{t===this.loadIndex&&this.onWheelSoundLoaded(k,c,"roll",D,e,r)},(f=c.roll)==null?void 0:f[D],a+"_roll_ext_"+C),this.loadStatus.count++,De.getPositionalAudio(s.roll[C].int,k=>{t===this.loadIndex&&this.onWheelSoundLoaded(k,g,"roll",D,e,r)},(x=g.roll)==null?void 0:x[D],a+"_roll_int_"+C),this.loadStatus.count++,De.getPositionalAudio(s.skid[C].ext,k=>{t===this.loadIndex&&this.onWheelSoundLoaded(k,c,"skid",D,e,r)},(w=c.roll)==null?void 0:w[D],a+"_skid_ext_"+C),this.loadStatus.count++,De.getPositionalAudio(s.skid[C].int,k=>{t===this.loadIndex&&this.onWheelSoundLoaded(k,g,"skid",D,e,r)},(S=g.roll)==null?void 0:S[D],a+"_skid_int_"+C)}this.loadStatus.count++,De.getPositionalAudio(s.sus,D=>{t===this.loadIndex&&(c.sus&&(c.sus.stop(),c.sus.removeFromParent(),delete c.sus),c.sus=D,g.sus=D,D.setLoop(!0),D.setLoopStart(.1),D.setLoopEnd(D.buffer.duration-.1),D.setRefDistance(this.positions.axleWidth*.64),D.setRolloffFactor(Ct),D.setVolumeStoppable(0),D.offset=r*D.buffer.duration,D.detune=Math.random()*-400,D.name="sus",D.position.x=e.x,D.position.z=e.z,this.container.add(D),this.onSoundLoaded())},c.sus,a),this.exteriorSounds.wheels[i]=c,this.interiorSounds.wheels[i]=g}onWheelSoundLoaded(i,e,s,a,t,r=0){e[s]||(e[s]=[]),e[s][a]&&(e[s][a].stop(),e[s][a].removeFromParent(),delete e[s][a]),i.setLoop(!0),i.setLoopStart(.1),i.setLoopEnd(i.buffer.duration-.1),i.setVolumeStoppable(0),i.setRefDistance(this.positions.wheelBase*2),i.setRolloffFactor(Ct),i.offset=r*i.buffer.duration,i.name=s+"_"+a,i.position.x=t.x,i.position.z=t.z,this.container.add(i),e[s][a]=i,this.onSoundLoaded()}onSoundLoaded(){this.ready||(this.loadStatus.loaded++,this.loadStatus.loaded>=this.loadStatus.count&&(this.ready=!0,Je.isInterior?this.sounds=this.interiorSounds:this.sounds=this.exteriorSounds,De.hasInit?this.update=this.updateLive:De.addInitListener(()=>{this.update=this.updateLive})))}onInteriorChanged(i){this.interiorVol=i?.5:1,this.ready&&(this.suspendInteriorExterior(),i?this.sounds=this.interiorSounds:this.sounds=this.exteriorSounds)}suspend(){this.ready&&(this.suspendInteriorExterior(),this.sounds.engine.setVolumeStoppable(0),this.sounds.boost.setVolumeStoppable(0),this.sounds.brake.setVolumeStoppable(0))}suspendInteriorExterior(){for(let i of this.sounds.hits)i.setVolumeStoppable(0);this.sounds.scrape.setVolumeStoppable(0);for(let i of this.sounds.wheels){for(let e in i.roll)i.roll[e].setVolumeStoppable(0);for(let e in i.skid)i.skid[e].setVolumeStoppable(0);i.sus&&i.sus.setVolumeStoppable(0)}}smoothstep(i){return-1*(3-i*2)*i*i+1}}const zt=""+new URL("../assets/motor_01.5c7ff2f7.mp3",import.meta.url).href,zi=new ka(0),Ws=new ka(null),na=.033,Ko=1-na;class bd{constructor(){o(this,"urgent",[]);o(this,"priority",[]);o(this,"queue",[]);o(this,"noneQueued",!0);o(this,"distribute",!1);o(this,"startTime");o(this,"maxTime");o(this,"timer");o(this,"hasLoaded");o(this,"frameFraction",2);o(this,"frameFraction2",4);o(this,"noneQueuedTime",0);o(this,"hasInit",!1);o(this,"backedUp",!1);o(this,"debugCounter",0);o(this,"smoothDT",16);o(this,"smoothMaxTime",3);o(this,"maxUrgent",0);o(this,"maxPriority",0);o(this,"latestProg",0);o(this,"extraPriority",10)}update(i){}updateLive(i){if(!this.noneQueued)if(this.smoothDT=i*na+this.smoothDT*Ko,this.smoothDT>100&&(this.smoothDT=100),this.distribute?this.queue.length<2?this.maxTime=this.smoothDT/5:this.queue.length<4?this.maxTime=this.smoothDT/4:this.queue.length<7?this.maxTime=this.smoothDT/3:this.queue.length<18?this.maxTime=this.smoothDT/2:this.queue.length<30?this.maxTime=this.smoothDT*.75:this.maxTime=this.smoothDT:(this.maxTime=this.smoothDT/2,this.smoothMaxTime=this.maxTime),this.maxTime<1&&(this.maxTime=1),this.smoothMaxTime=this.maxTime*na+this.smoothMaxTime*Ko,this.maxMaxTime=this.smoothMaxTime*2,this.curTime=0,this.urgent.length){this.startTime=Date.now();do this.urgent[0].load()&&this.urgent.shift();while(this.urgent.length&&Date.now()-this.startTime<this.smoothMaxTime)}else if(this.priority.length){this.startTime=Date.now();do this.priority[0].load()&&this.priority.shift();while(this.priority.length&&Date.now()-this.startTime<this.smoothMaxTime)}else if(this.queue.length){this.startTime=Date.now(),this.testTimer=0;do{if(this.distribute&&this.queue[0].deadline<=v.vehicleIndex&&this.curTime<this.maxMaxTime&&!this.queue[0].didPrint){let e=this.queue[0];e.didPrint=!0,se.add("LOAD QUEUE: Job exceeded deadline: "+e.label+", "+e.deadline+" @ "+v.vehicleIndex)}this.hasLoaded=this.queue[0].load(),this.hasLoaded==!0?(this.curTime>this.maxMaxTime&&console.warn("LOAD QUEUE: Overran with process",this.queue[0].label,"by",this.curTime-this.maxMaxTime,this.testTimer),this.testTimer=0,this.queue.shift()):this.hasLoaded==null&&this.queue.push(this.queue.shift()),this.testTimer++,this.curTime=Date.now()-this.startTime}while(this.queue.length&&(this.curTime<this.smoothMaxTime||this.distribute&&this.queue[0].deadline<=v.vehicleIndex&&this.curTime<this.maxMaxTime))}else this.noneQueued=!0}updateInitialise(i){if(this.maxTime=i>17?17:i,this.maxMaxTime=this.maxTime*2,this.curTime=0,this.urgent.length){this.startTime=Date.now();do this.urgent[0].load()&&this.urgent.shift();while(this.urgent.length&&Date.now()-this.startTime<this.maxTime);this.urgent.length&&Ws.set(this.urgent[0].stage),this.maxUrgent=Math.max(this.urgent.length,this.maxUrgent),this.maxPriority=Math.max(this.priority.length,this.maxPriority),this.maxUrgent+this.maxPriority>0&&(this.latestProg=Math.max(this.latestProg,1-(this.urgent.length+this.priority.length)/(this.maxUrgent+this.maxPriority)),this.latestProg<1&&zi.set(this.latestProg))}else if(this.priority.length){this.startTime=Date.now();do this.priority[0].load()&&this.priority.shift();while(this.priority.length&&Date.now()-this.startTime<this.maxTime);this.priority.length?Ws.set(this.priority[0].stage):Ws.set("Rendering"),this.maxUrgent=Math.max(this.urgent.length,this.maxUrgent),this.maxPriority=Math.max(this.priority.length,this.maxPriority),this.maxUrgent+this.maxPriority>0&&(this.latestProg=Math.max(this.latestProg,1-(this.urgent.length+this.priority.length)/(this.maxUrgent+this.maxPriority)),this.latestProg<1&&zi.set(this.latestProg))}else se.add("LoadQueue: Initialised in "+(mt.appTime-this.resetTime).toFixed(3)),this.onInitialiseFinished(),zi.set(1),this.hasInit=!0,this.update=this.updateLive}onInitialiseFinished(){}updateUrgently(i){}clear(){this.queue.length=0,this.priority.length=0,this.urgent.length=0,this.noneQueued=!0}reset(){this.resetTime=mt.appTime,this.clear(),zi.set(0),this.hasInit=!1,this.backedUp=!1,this.extraPriority=10,this.maxUrgent=0,this.maxPriority=0,this.latestProg=0,this.update=this.updateInitialise}updateFrameFraction(){}addJob(i,e=v.tail.i,s="",a="",t=!1,r=!1){t?r?(this.urgent.push({load:i,deadline:e,label:s,stage:a}),this.maxUrgent=Math.max(this.urgent.length,this.maxUrgent)):(this.priority.push({load:i,deadline:e,label:s,stage:a}),this.maxPriority=Math.max(this.priority.length,this.maxPriority)):this.queue.push({load:i,deadline:e,label:s,stage:a}),this.noneQueued=!1,this.hasInit&&(this.queue.length>30?this.backedUp||(se.add("LOAD: Queue is backed up: "+this.queue.length),this.backedUp=!0):this.backedUp&&this.queue.length<21&&(se.add("LOAD: Queue clearing: "+this.queue.length),this.backedUp=!1))}}const Ya=new bd;class yd{constructor(i,e=null,s=(a,t)=>t){o(this,"listeners",{any:[]});o(this,"value",{});o(this,"default",{});o(this,"storageKey",null);for(let t in i)this.default[t]=JSON.parse(JSON.stringify(i[t]));this.storageKey=e;let a=!1;if(e&&localStorage.getItem(e))try{let t=s(e,JSON.parse(localStorage.getItem(e)));if(i)for(let r in i)r in t?(this.value[r]=t[r],this[r]=t[r]):(this.value[r]=i[r],this[r]=i[r]);else for(let r in t)this.value[r]=t[r],this[r]=t[r];a=!0}catch{console.warn("Failed to load saved value for ",e)}if(!a&&i)for(let t in i)this.value[t]=i[t],this[t]=i[t]}reset(){this.setMany(this.default)}setMany(i){for(let e in i)this.set(e,i[e],!0);for(let e in i)this.onChanged(e,this.value[e])}set(i,e,s=!1){!(i in this.value)||this.value[i]===e||(this.value[i]=e,this[i]=e,s||this.onChanged(i,this.value[i]),this.storageKey&&localStorage.setItem(this.storageKey,JSON.stringify(this.value)))}onChanged(i,e){for(let s of this.listeners[i]||[])s(e);for(let s of this.listeners.any||[])s(i)}addListener(i,e,s=!1){typeof e=="function"&&(i in this.listeners||(this.listeners[i]=[]),this.listeners[i].push(e),s||(i=="any"?e(this):e(this[i])))}removeListener(i,e){if(!(i in this.listeners))return;let s=this.listeners[i].indexOf(e);s>=0&&this.listeners[i].splice(s,1)}}const Dd={width:3,lanes:2,friction:1},ze=new yd(Dd);function Ka(){return Math.floor(Date.now()/(Math.random()+.5)).toString(16).substring(3)}class Md{constructor(){o(this,"actions",[])}onMount(){window.onbeforeunload=this.executeActions.bind(this)}registerAction(i){this.actions.push(i)}executeActions(){for(let i of this.actions)i()}}const Ld=new Md,Rd={name:"Profile 1",totalTime:0,totalDist:0,manualTime:0,manualDist:0,autodriveTime:0,autodriveDist:0,totalVisits:0,firstVisit:Date.now(),longestDrive:0,furthestDrive:0,achievements:{},sr1Distance:0};function Wi(l){let i=Math.floor(l/6e4),e=Math.floor(i/60),s=Math.floor(e/24);e%=24,i%=60;let a="";return s>0&&(s==1?a+=s+" day":a+=s+" days",e==0&&i==0)||(a+=" ",e>0&&(e==1?a+=e+" hour":a+=e+" hours",i==0))||(a+=" ",i==1?a+=i+" min":a+=i+" mins"),a}const Cd={totalDist:{readable:"Total travel distance",convert:Ri},manualDist:{readable:" - Driven distance",convert:Ri},autodriveDist:{readable:" - Autodrive distance",convert:Ri},totalTime:{readable:"Total travel time",convert:Wi},manualTime:{readable:" - Drive time",convert:Wi},autodriveTime:{readable:" - Autodrive time",convert:Wi},longestDrive:{readable:"Longest single journey",convert:Wi},furthestDrive:{readable:"Furthest single journey",convert:Ri},totalVisits:{readable:"Total visits",convert:l=>l}},en=()=>{Cd.sr1Distance={readable:"SR1 distance",convert:Ri}};localStorage.getItem("has-sr1-distance")&&en();const Kp=new Ve("Profile",Rd),ds="2.4.2",qp=[{version:"2.4.2",date:"15th June 2026",permalink:"",quickChanges:["The Steam demo is now live!","Minor bug fixes"],changes:["Steam demo announcement","Updated coupe model","Fixed odometer rolling over at 10,000 instead of 100,000","Fixed handbrake not working on gamepad","Fixed initial section of road being broken on Hills","Fixed drystone walls sometimes not spawning on Hills","Disabled fog on interior textures"]},{version:"2.4.1",date:"3rd March 2026",permalink:"",quickChanges:["Minor patches for UI and interaction bugs"],changes:["Small improvements to steering wheel detail","Adjusted position of mouse control UI when in interior view","Fixed pixelly randering of trees on mobile","Fixed dashboard cruise control indicator being set for kilometres when units are miles","Fixed boost button not working on gamepad","Fixed odometer display digits overlapping when the odometer hits a multiple of 10"]},{version:"2.4.0",date:"1st March 2026",permalink:"https://efe4a997.slowroads-io.pages.dev",quickChanges:["Improved vehicle interior detail and added dashboards","Altered vehicle audio","Various minor fixes"],changes:["Added functional dashboards and improved interiors to all vehicles","Reduced issues of bushes and grasses intersecting the interior","Minor alterations to motor audio","Different vehicles now have slightly different motor sounds","Mouse input, if enabled, will now override controller input","Added inputs for switching cruise control mode and autodrive modes","Increased brake force for all vehicles","Acceleration input is now linear (was mistakenly quadratic)","Fixed certain settings not correctly updating when importing a profile","Fixed an issue preventing some controller settings from properly saving","Fixed an issue misreading controller trigger input as a button press","Fixed issue with roadside trees dissolving in from nothing"]},{version:"2.3.3",date:"22nd February 2026",permalink:"https://cde852ad.slowroads-io.pages.dev",quickChanges:["Patch: Fixed various loading crashes","Patch: Fixed asset caching issue"],changes:["Patch: Fixed graphics settings not applying correctly","Patch: Fixed crash when switching road width setting","Patch: Fixed caching to avoid reloading textures between sessions"]},{version:"2.3.2",date:"22nd February 2026",permalink:"https://276ddbc9.slowroads-io.pages.dev",quickChanges:["Profile system added for saving/loading progress and settings","Minor bug fixes"],changes:["Hills: Fixed an issue with the roadside ground shader on winter","Hills: Fixed an issue causing occasional spikes in drystone wall position","Hills: Fixed floating walls perpendicular to the road","Hills: Added extra caution to autodrive when approaching bridge","Hills: Fixed road markings sometimes being only half-shown","Off-World: Fixed bug causing discontinuities in barriers","Fixed bug preventing N key from being mappable","Pressing enter in the world hash input box now triggers world generation","Disabled settings page access during scene load to prevent load conflict bugs"]},{version:"2.3.1",date:"16th February 2026",permalink:"https://39691564.slowroads-io.pages.dev",quickChanges:["Patch: Fixing autosteer and autospeed modes","Patch: Minor fixes and error handling"],changes:["Hills: Tweaking road shader parameters to reduce visible seams","Off-World: Dust spray disabled in Low/Medium detail settings","Fixed autosteer and autodrive modes after bug in 2.3.0","Fixed various bugs causing fatal errors"]},{version:"2.3.0",date:"15th February 2026",permalink:"https://0fa1425b.slowroads-io.pages.dev",quickChanges:["Upgraded road textures with added paint markings","Upgrades and optimisations for trees and forests","Upgrades to Off-World location"],changes:["Hills: Road textures improved and a range of paint markings added","Hills: Improved LoD system for trees and environment chunks","Hills: Small improvements to tree shading","Hills: Fixed missing shadows on walls under trees","Off-World: Upgraded ground shader and improved colours","Off-World: Improved geometry for road and terrain","Off-World: Added dust spray from wheels (on detail settings above Medium)","Enabled shadow casting on off-road environment chunks","Restored ability to set driver seat position on mobile (gameplay settings)","Fixed bug allowing for manual acceleration override when entering autodrive","Fixed setting for enabling/disabling steering wheel visibility","Fixed environment loading issue that left some roadside chunks at low-quality"]},{version:"2.2.0",date:"7th February 2026",permalink:"https://6f2ce0a5.slowroads-io.pages.dev",quickChanges:["Improved environmental detail for Hills","Tweaked steering responsiveness and handling","Added center driving option for autodrive"],changes:["Hills: Added extra layers of detail to the ground shaders","Hills: Altered colours and lighting for all seasons/weathers","Hills: Improved roadside ground geometry","Hills: Resolved texture scale issues for rocky outcrops","Hills: General texture and detail upgrades","Added extra lateral smoothing to road generator","Altered steering input to be snappier","Added center driving option for autodrive","Fixed bug causing large spikes in the first section of road geometry","Fixed minor UI bugs in controller mapping flow","Fixed physics bug causing flinging when crashing into bridge walls","Fixed issue causing empty grey bars in the sky at high FoV"]},{version:"2.1.1",date:"16th November 2025",permalink:"https://88ec82eb.slowroads-io.pages.dev/",quickChanges:["Minor QoL and bug fixes","Bike speed factor can now be reduced","Grip factor can now be reduced to 0.2"],changes:["Fixed occasional instant crash when changing road style or graphics settings","Lowered minimum grip factor to 0.2","Altered turn sign spawn logic for the differences in casual/winding roads","Giving steer input now disables autosteer","Fixed inability to brake in autospeed mode","Fixed chevron sign spawn thresholds to have them return","Fixed minor floating-pixels issue with deciduous tree textures","Fixed issue preventing reversing in cruise control","Fixed minor shimmering pixels issue around signs","Fixed wall collision glitch caused by driving too far backwards","Fixed initial section of road sometimes sticking high into the air","Fixed brake audio running when airborne","Reduced suspension audio effects on bike"]},{version:"2.1.0",date:"1st November 2025",permalink:"https://9807d9f6.slowroads-io.pages.dev",quickChanges:["Improved physics for all vehicles","Added autosteer and autospeed modes","Added one-pedal drive setting","Added controls for moving the camera","Various fixes and upgrades"],changes:["Rewrote and improved physics for all vehicles","Overhauled vehicle architecture in preparation for more vehicles, and vehicle configuration","Fixed feel of RWD and FWD","Added autosteer and autospeed modes to the autodrive","Added one-pedal drive setting to gently brake whenever you stop accelerating","Added camera controls for orbit/zoom in chase, and look-around in first-person","Added speed-relative FoV effects to the chase camera","Added toggle mode for steer lock","Added configurable axis range setting for gamepad inputs","Added brake sensitivity setting for controllers","Improved touchscreen control feel","Fixed rendering issues on mobile","Fixed rendering issues on Firefox","Fixed an audio bug where the boost volume was unlimited, causing issues at high speed factors","Fixed various memory leaks in the scene regeneration process"]},{version:"2.0.3",date:"28th February 2025",permalink:"https://96924af9.slowroads-io.pages.dev/",quickChanges:["Fixed more walls/trees overlapping the road","Fixed bridge geometry bug"],changes:["Fixed all currently known cases of walls/trees overlapping the road","Added logic to rebuild fields in certain circumstances when a long-lived environment tile is revisited","Fixed issue of bridge geometry exceeding the end of the bridge, intersecting the ground","Slightly increased the chance of gorse spawning high up on Hills","Added permalinks to prior versions in the changelog (click the version number)"]},{version:"2.0.2",date:"24th February 2025",permalink:"https://2b2e9f18.slowroads-io.pages.dev/",quickChanges:["Added a max framerate setting","Fixed bugs with deadzone setting","Fixed some ultra view distance issues"],changes:["Added a max framerate setting","Reworked render scale to use virtual pixel resolution by default with a native override toggle","Fixed issue in ultra view distance where winter trees suddenly pop in on the horizon","Fixed a fog distance issue with very high+ detail settings","Fixed deadzone settings not being saved on refresh","Fixed deadzone setting being ignored by raw steer override","Fixed rare issue where the ground sticks up through bridges","Fixed the app's icon for Apple devices"]},{version:"2.0.1",date:"23rd February 2025",permalink:"https://0df09d99.slowroads-io.pages.dev/",quickChanges:["Fixed walls overlapping the road","Improved skid-correction steering","Improved support for controllers/wheels","Reset-to-default added to settings","Various minor fixes"],changes:["Fixed many (probably not all) instances of walls crossing the road","Altered parameters for skid-correction steering to reduce overcorrection","Added a raw-input override for controllers, which disables all steer smoothing effects (useful for wheels)","Steering wheel rotation setting now defines the full range of rotation, not half","Moved simulation speed controls to debug mode only","Render scales are now relative to device pixel ratio, not resolution","Added error handling to catch roads that fail to generate","Added reset-to-defaults for all settings and control mappings","Move speed-relative steer limiter setting into the Controls settings","Removed backdrop blur from touch controls for performance reasons","Smoothed autodrive steering","Increased anisotropy on road texture","Slightly reduced silliness of the bike lean behaviour","Slightly reduced volume of autodrive sound","Longest/furthest journey stats now update live in your profile","Fixed bug where needless concrete walls spawn nowhere near water","Fixed bug allowing the road to rarely loop back on itself","Fixed hard braking when enabling speed control at high speed","Fixed UI being hidden when loading the game","Fixed boost icon being stuck enabled in autodrive","Fixed mouse input causing issues in free cam","Fixed issue with decimal commas in numeric settings","Fixed scrolling issue on Firefox","Replaced missing app icons"]},{version:"2.0.0",date:"22nd January 2025",permalink:"https://df8e1b8c.slowroads-io.pages.dev/",quickChanges:[],changes:["Overhauled engine for major performance and visual upgrades","Added mobile and touchscreen support","Added road width setting"]}],qo=l=>{let i={major:0,minor:0,patch:0,release:10,releaseVersion:10},e=l,s=null;if(l.indexOf("-")>0&&(l=l.split("-"),e=l[0],s=l[1]),e=e.split("."),i.major=Ii(e[0]),i.minor=Ii(e[1]),i.patch=Ii(e[2]),s){s=s.split(".");let a=s[0];a=="alpha"?i.release=0:a=="beta"?i.release=1:i.release=2,i.releaseVersion=Ii(s[1])}return i},Ds=(l,i)=>{if(l===i)return 0;if(!i)return 1;let e=qo(i),s=qo(l),a=s.major*1e5+s.minor*1e4+s.patch*1e3+s.release*10+s.releaseVersion,t=e.major*1e5+e.minor*1e4+e.patch*1e3+e.release*10+e.releaseVersion;return a>t?1:-1};function Ii(l){if(!l)return 0;try{return l=Number.parseInt(l),isNaN(l)?0:l}catch{return 0}}let Se=localStorage.getItem("seen-version");const Jp=Se??ds;if(Se&&Se[0]=="1"){console.log("Migrating localStorage from version 1 to version 2");let l=Object.entries(localStorage),i=0;for(let g of l){let f=g[0].indexOf("_Hills_"),x=g[0].indexOf("_Planet_");if(f>=0||x>=0){let w=0;try{w=Number.parseInt(g[1])}catch{w=0}w&&!isNaN(w)&&w<1e6&&(i+=w)}}localStorage.setItem("profile",JSON.stringify({sr1Distance:i*10})),localStorage.setItem("has-sr1-distance",!0),en(),localStorage.setItem("settings_Gameplay",JSON.stringify({units:(Ii(localStorage.getItem("Units"))+1)%2}));let e=null;try{e=JSON.parse(localStorage.getItem("controls_keys")),e||(e=null)}catch{e=null}let s={};try{s=JSON.parse(localStorage.getItem("controls_keys_settings")),s||(s={})}catch{s={}}let a={...s};if(e){let g={...Za};for(let f in e)f in g&&(g[f]=e[f]);a.mapping=g}localStorage.setItem("settings_Keys",JSON.stringify(a));let t=null;try{t=JSON.parse(localStorage.getItem("controls_gamepad")),t||(t=null)}catch{t=null}let r={};try{r=JSON.parse(localStorage.getItem("controls_gamepad_settings")),r||(r={})}catch{r={}}let c={...r};if(t){let g={...Qa};for(let f in t)f in g&&(g[f]=t[f]);c.mapping=g}localStorage.setItem("settings_Gamepad",JSON.stringify(c)),Se="2.0.0"}if(Se&&Se[0]=="2"&&Ds("2.0.1",Se)>0){se.add("Upgrading to version 2.0.1 from "+Se);try{let i=JSON.parse(localStorage.getItem("settings_Gameplay")).steerSpeedFactor,e=JSON.parse(localStorage.getItem("settings_Keys"));e.speedSteerFactor=i,localStorage.setItem("settings_Keys",JSON.stringify(e));let s=JSON.parse(localStorage.getItem("settings_Mouse"));s.speedSteerFactor=i,localStorage.setItem("settings_Mouse",JSON.stringify(s));let a=JSON.parse(localStorage.getItem("settings_Gamepad"));a.speedSteerFactor=i,localStorage.setItem("settings_Gamepad",JSON.stringify(a));let t=JSON.parse(localStorage.getItem("settings_Touch"));t.speedSteerFactor=i,localStorage.setItem("settings_Touch",JSON.stringify(t))}catch(l){se.add(" - Failed to upgrade"),se.add(l)}Se="2.0.1"}if(Se&&Se[0]=="2"&&Ds("2.1.0",Se)>0){se.add("Upgrading to version 2.1.0 from "+Se);try{let l=JSON.parse(localStorage.getItem("settings_Keys"));l.accelFactor=1,l.steerSpeed>1?l.steerSpeed=1+(l.steerSpeed-1)/2:l.steerSpeed=(l.steerSpeed-.5)*2*.8+.2,l.recenterSpeed>1?l.recenterSpeed=1+(l.recenterSpeed-1)/2:l.recenterSpeed=(l.recenterSpeed-.5)*2*.8+.2,localStorage.setItem("settings_Keys",JSON.stringify(l));let i=JSON.parse(localStorage.getItem("settings_Gameplay"));l.speedSteerFactor!=.75&&(i.steerAssist=l.speedSteerFactor);let e=JSON.parse(localStorage.getItem("settings_Vehicle"));i.driverSide=e.driverSide,e.mode==qe.FWD?e.mode=qe.RWD:e.mode==qe.RWD&&(e.mode=qe.FWD),localStorage.setItem("settings_Gameplay",JSON.stringify(i)),localStorage.setItem("settings_Vehicle",JSON.stringify(e));let s=JSON.parse(localStorage.getItem("settings_Mouse"));s.linearity==.35&&(s.linearity=.5),localStorage.setItem("settings_Mouse",JSON.stringify(s));let a=JSON.parse(localStorage.getItem("settings_Gamepad"));a.steerSmoothing/=2,localStorage.setItem("settings_Gamepad",JSON.stringify(a))}catch(l){se.add(" - Failed to upgrade"),se.add(l)}}Ds(ds,Se)>=0&&window.localStorage.setItem("seen-version",ds);const $p=Se!==null&&Se[0]==="1",Td=Se!==null&&Ds(ds,Se)>0,la={username:localStorage.getItem("username"),personalBest:null,bestSplits:[],runHistory:[],runCount:0,startCount:0,currentPosition:null,highestPosition:null,leaderboard:[],showGhost:!0,currentGhost:null,showGhostLine:!1,showLeaderLines:!1,localPersonalBest:null,personalGhostData:null,resets:[],restarts:[],showResets:!1,showRestarts:!1,leaderboardMode:0,hash:Ka()};la.showGhost,E.Boolean,la.showGhostLine,E.Boolean;const eA=new Ve("Comp",la,(l,i)=>!0,(l,i)=>l=="username"?i&&i.toString().slice(0,20):i),Id=17901828e5,Fd=17913924e5;let cs=location.hash.length==0||location.hash=="#about",qa=!1,tn=Date.now()<1782144e6;localStorage.getItem("hasClickedSteam")&&(tn=!1);if(localStorage.getItem("last-visit"))try{cs=Date.now()-JSON.parse(localStorage.getItem("last-visit"))>3e5}catch{console.warn("Failed to restore 'last-visit' state")}else qa=!0;let _d=!!localStorage.getItem("hasSeenSteamSplash");localStorage.setItem("hasSeenSteamSplash",!0);cs=!_d||tn||qa||cs||Td||eh.value||bs;const tA=qa,iA=new fe(cs),sA=new fe(L.touchscreen),aA=new fe(!1),oA=new fe({}),rA=new fe({}),Ja=new fe(!!localStorage.getItem("enableDriftmasScene")),nA=new fe(!0),kd=new fe(!1),lA=Date.now()<Id,hA=Date.now()<Fd;Ja.subscribe(l=>{l&&localStorage.setItem("enableDriftmasScene",!0)});Ld.registerAction(()=>{localStorage.setItem("last-visit",Date.now())});const Pd={Hills:0,OffWorld:1,Driftmas:2},Jo=["HILLS","OFF-WORLD","DRIFTMAS"],sn={Straight:0,Casual:1,Normal:2,Winding:3,Dev:4},Ed=sn.Dev,ha=["STRAIGHT","CASUAL","NORMAL","WINDING"],Nd={seed:Ka(),scene:Pd.Hills,roadStyle:sn.Normal,startNode:0,accumulatedDistance:0},Ai=["A","O","D"],dA=Od(window.location.hash),cA=Bd();function Od(l){if(!l.length)return null;if(l[0]=="#"&&(l=l.slice(1)),l.length<4)return console.warn("Failed to load from hash: Invalid",l),null;let i=Ai.indexOf(l[0].toUpperCase());if(i<0)return console.warn("Failed to load from hash: Unrecognised location",i),null;let e;try{if(e=parseInt(l[1]),e<0||e>Ed)throw new Error}catch{return console.warn("Failed to load from hash: Unrecognised road style",l[1]),null}if(l=l.slice(2),l[0]!=="-")return console.warn("Failed to load from hash: No seed delimiter",l),null;l=l.slice(1);let s=l.lastIndexOf("@"),a=0,t=Po.KILOMETERS;if(s>0&&s<l.length-1)try{if(a=l.slice(s+1),a.indexOf("km")>0?a.substring(0,a.indexOf("km")):a.indexOf("mi")>0&&(t=Po.MILES,a.substring(0,a.indexOf("mi"))),a=parseFloat(a),isNaN(a))throw new Error}catch{return console.warn("Failed to load from hash: Error parsing start distance"),null}let r=Math.floor(a*100/vi[t]);if(isNaN(r)||r<0)return console.warn("Failed to load from hash: Invalid start distance",a),null;let c=s>0?l.substring(0,s):l;return c.length?{seed:c,scene:i,roadStyle:e,startNode:r,accumulatedDistance:0}:(console.warn("Failed to load from hash: No seed found"),null)}function Bd(){return{}}const Le=new Ve("World",Nd,(l,i)=>l=="seed"?(i=""+i,i.length>0&&i.length<=24&&!/\?|\!/.test(i)):!(l=="startNode"&&i<0),(l,i)=>{if(l=="seed")return i.toString();if(l=="scene")i%=Jo.length,i<0&&(i=Jo.length-1);else if(l=="startNode"){if(i<0)return 0}else l=="roadStyle"&&(i%=ha.length,i<0&&(i=ha.length-1));return i}),$o=new Ve("WorldHistory",{history:{}});let as="";Le.addListener("any",()=>{as=Ai[Le.scene]+Le.roadStyle+"-"+Le.seed});let er=-1,tr=null;const gA=(l,i=!1)=>{let e="#"+as+"@",s="";i?s=(l*10/1e3).toFixed(2):s=Math.floor(l*10/1e3),!(s==er&&as==tr)&&(e+=s,er=s,tr=as,th.set(e),history.replaceState(null,null,location.origin+"/"+e))},ir=()=>""+Ai[Le.scene]+Le.roadStyle+"-"+Le.seed+"@"+(Le.startNode/100).toFixed(2),uA=(l,i,e,s=0)=>s>0?Ai[l]+i+"-"+e+"@"+(s/100).toFixed(2):Ai[l]+i+"-"+e,fA=l=>{if(l[0]=="#"&&(l=l.slice(1)),l.length<3)return!1;let i=l[0].toUpperCase();if(!Ai.includes(i)||!vt(Ja)&&i=="D")return!1;let e;try{e=parseInt(l[1])}catch{return!1}if(e<0||e>=ha.length||l[2]!=="-")return!1;let s=l.slice(3),a=l.indexOf("@"),t=0;if(a>0){t=l.slice(a+1),s=l.slice(3,a);try{t=parseFloat(t)}catch{return!1}}return/^[a-z0-9]+$/gi.test(s)},pA=()=>{let l=Le.scene,i=Le.seed,e=Le.roadStyle,s={...$o.history};s[l]||(s[l]={}),s[l][e]||(s[l][e]={}),s[l][e][i]?(s[l][e][i].ts=Date.now(),s[l][e][i].startNode=Math.max(0,v.vehicleIndex)):s[l][e][i]={ts:Date.now(),startNode:Math.max(0,v.vehicleIndex),accumulatedDistance:Le.accumulatedDistance},$o.set("history",s,!1,!0)},lt=new we;function an(l){for(let i of l.children)an(i);l.mesh&&Ud(l.mesh),l.geometry&&on(l.geometry),l.clear()}function Ud(l){l.geometry&&on(l.geometry)}function on(l){l.dispose();let i=Object.keys(l.attributes);for(let e of i)l.deleteAttribute(e);l.index&&delete l.index}function AA(l,i,e){return(l-e.p.x)*(l-e.p.x)+(i-e.p.z)*(i-e.p.z)}const be={};function mA(l,i,e,s,a,t){return be.l2=(a-e)*(a-e)+(t-s)*(t-s),be.l2==0?{t:0,dSq:(a-l)*(a-l)+(t-i)*(t-i)}:(be.t=((l-e)*(a-e)+(i-s)*(t-s))/be.l2,be.t>1?be.t=1:be.t<0&&(be.t=0),be.x=e+be.t*(a-e),be.z=s+be.t*(t-s),{t:be.t,dSq:(be.x-l)*(be.x-l)+(be.z-i)*(be.z-i)})}const rt=Math.PI*2,b={vecA:new m,vecB:new m},Hd=10,sr=5;class $a{constructor(i,e){o(this,"inputs",{accel:0,steer:0,brake:0,boost:0});o(this,"targetNode",null);o(this,"targetFineIndex",0);o(this,"targetPos",new m);o(this,"targetHeading",0);o(this,"targetSpeed",0);o(this,"dH",0);o(this,"pSpeed",0);o(this,"angleDif",0);o(this,"angleDifAbs",0);o(this,"curvature",0);o(this,"bendyFactor",1);o(this,"bendinessVal",0);o(this,"brakeThreshold",0);o(this,"beelineFactor",0);o(this,"cautionFactor",1);o(this,"topSpeedFactor",.65);o(this,"minTargetDist",0);o(this,"minTargetSpeed",10);o(this,"driveLaneOffsetTarget",0);o(this,"driveLaneOffset",0);o(this,"offroadFactor",0);o(this,"targetPosShape",null);o(this,"container",new we);o(this,"vc",{});o(this,"onDriveLaneChangedBound",this.onDriveLaneChanged.bind(this));o(this,"nominalDriveLaneOffset",0);o(this,"updateCautionParametersBound",this.updateCautionParameters.bind(this));o(this,"roadCautionFactor",1);o(this,"doNotResetIfOffroad",!1);o(this,"driveLaneCorrection",0);o(this,"updateIndex",0);o(this,"offRoadTime");o(this,"vehicleIndex",0);o(this,"vehicleAccel",0);o(this,"pVehicleSpeed",0);o(this,"vehicleFrontAxel",new m);o(this,"pRoadEdgeProximity",0);o(this,"dRoadEdgeProximity",0);o(this,"midlineLookup");o(this,"offroadFactor",0);o(this,"midlaneOffset",0);o(this,"speedAnnotationNode",null);o(this,"bridgeLookaheadNode",null);o(this,"nextBridgeIndex",-5);this.resetVehicle=i||(()=>{}),this.vc=e,this.targetPosShape=new ei(new ss(.5,32,16),new Te({color:16711935})),L.addListener("driveLane",this.onDriveLaneChangedBound,!0),ze.addListener("any",this.onDriveLaneChangedBound,!0),Le.addListener("any",this.updateCautionParametersBound,!0),b.vecA=new m,b.vecB=new m}destroy(){an(this.container),lt.remove(this.container),delete this.speedAnnotationNode,delete this.targetNode;for(let i in b)delete b[i];L.removeListener("driveLane",this.onDriveLaneChangedBound),ze.removeListener("any",this.onDriveLaneChangedBound),Le.removeListener("any",this.updateCautionParametersBound)}onDriveLaneChanged(){ze.lanes<=1||L.driveLane==Eo.CENTER?this.nominalDriveLaneOffset=0:L.driveLane==Eo.LEFT?this.nominalDriveLaneOffset=ze.width/2*-1:this.nominalDriveLaneOffset=ze.width/2,this.driveLaneOffsetTarget=this.nominalDriveLaneOffset,this.driveLaneOffset=this.driveLaneOffsetTarget,this.driveLaneCorrection=0,this.nominalDriveLaneOffset*=.97,this.updateCautionParameters()}updateCautionParameters(){let i=this.cautionFactor;if(this.cautionFactor=1,Le.roadStyle>0){this.cautionFactor=1;let e=ze.width;(ze.lanes<=1||this.nominalDriveLaneOffset==0)&&(e*=2);let s=(e-this.vc.metrics.boxWidth)/2;if(s<1.5)if(s<.25)this.cautionFactor=0;else{let a=(s-.25)/1.25;this.cautionFactor*=a}this.cautionFactor/=2-ze.friction,this.cautionFactor=Math.min(Math.max(0,this.cautionFactor),1)}this.cautionFactor*=this.vc.tuning.cautionFactor,this.cautionFactor=1-this.cautionFactor,this.cautionFactor=Math.max(this.vc.tuning.minCautionFactor,this.cautionFactor),isNaN(this.cautionFactor)&&(this.cautionFactor=.25),i!==this.cautionFactor&&se.add("AUTODRIVE: Setting caution factor "+this.cautionFactor.toFixed(2)),this.topSpeedFactor=.8-this.cautionFactor*.3}initialise(){this.doNotResetIfOffroad=!n.onRoad,this.vehicleIndex=v.vehicleIndex,this.targetNode=v.vehicleNode,this.targetSpeed=20,this.pSpeed=n.speed,this.onDriveLaneChanged(),this.updateCautionParameters(),this.reset()}reset(){this.pDeltaSteer=0,this.pSteer=0,this.steerSpeed=0,this.midlineLookup=Go(n.position.x,n.position.z,v.vehicleNode),this.driveLaneCorrection=Math.min(ze.width,this.midlineLookup.d)*-this.midlineLookup.s-this.nominalDriveLaneOffset,this.driveLaneOffset=Math.min(ze.width,this.midlineLookup.d)*-this.midlineLookup.s,this.beelineFactor=0,this.updateTarget(!0)}update(i){if(this.vehicleAccel=(n.speed-this.pVehicleSpeed)/i,this.pVehicleSpeed=n.speed,this.midlineLookup=Go(n.position.x,n.position.z,v.vehicleNode),this.midlaneOffset=Math.abs(this.midlineLookup.d-this.driveLaneOffset),this.offroadFactor=0,this.midlineLookup.d>ze.width&&(this.offroadFactor=Math.min(1,(this.midlineLookup.d-ze.width)/2)),this.roadEdgeProximity=this.midlineLookup.d/(ze.width-this.vc.metrics.boxWidth/2)*this.midlineLookup.s,this.roadEdgeProximity<0?this.roadEdgeProximity=Math.max(-1,Math.min(0,(this.roadEdgeProximity+.5)*2)):this.roadEdgeProximity=Math.min(1,Math.max(0,(this.roadEdgeProximity-.5)*2)),this.roadEdgeProximityAbs=Math.abs(this.roadEdgeProximity),this.dRoadEdgeProximity=this.roadEdgeProximityAbs-this.pRoadEdgeProximity,this.pRoadEdgeProximity=this.roadEdgeProximityAbs,!n.onRoad&&!this.hasSnow){if(!this.doNotResetIfOffroad){if(this.offRoadTime==null)this.offRoadTime=Date.now(),this.offRoadMidlineDist=this.midlineLookup.d;else if(Date.now()-this.offRoadTime>5e3)if(this.midlineLookup.d>this.offRoadMidlineDist-5){this.resetVehicle();return}else this.offRoadTime=Date.now()}}else this.offRoadTime!=null&&(this.offRoadTime=null),this.doNotResetIfOffroad=!1;if(n.speed<1&&L.autodriveMode!==q.STEER){if(this.stuckTime==null)this.stuckTime=Date.now();else if(Date.now()-this.stuckTime>3e3){se.add("Autodrive stuck; forcing a reset"),this.stuckTime=null,this.resetVehicle();return}}else this.stuckTime!==null&&(this.stuckTime=null);this.updateTarget(),this.targetPosShape.position.copy(this.targetPos),this.angleDif=n.heading-Math.atan2(n.position.z-this.targetPos.z,this.targetPos.x-n.position.x),L.autodriveMode==q.SPEED&&(this.angleDif=n.heading-this.targetHeading),this.angleDif>Math.PI?this.angleDif-=rt:this.angleDif<-Math.PI&&(this.angleDif+=rt),this.angleDifAbs=Math.abs(this.angleDif),b.dist=Math.sqrt((this.targetPos.x-n.position.x)**2+(this.targetPos.z-n.position.z)**2),b.steerRadius=b.dist/2/Math.sin(this.angleDifAbs),this.inputs.steer=Math.atan(this.vc.metrics.wheelBase/b.steerRadius),this.angleDif>0&&(this.inputs.steer*=-1),b.angleOfArrival=this.angleDif*-2+n.heading,b.targetArrivalDif=this.targetHeading-b.angleOfArrival,b.targetArrivalDif>3?b.targetArrivalDif-=rt:b.targetArrivalDif<-3&&(b.targetArrivalDif+=rt),b.targetArrivalDif=Math.abs(b.targetArrivalDif),this.offroadFactor>0?(b.targetArrivalDif>.3?this.targetSpeed*=1-this.offroadFactor*.8:this.targetSpeed*=Math.max(.5,1-this.offroadFactor*.8*(b.targetArrivalDif/.3)),this.targetSpeed=Math.max(5,this.targetSpeed)):b.targetArrivalDif>.25&&(this.targetSpeed*=Math.max(.4,1.25-b.targetArrivalDif)),b.da=this.midlineLookup.n.next.a-this.midlineLookup.n.a,b.da>3?b.da-=rt:b.da<-3&&(b.da+=rt),b.vnHeading=this.midlineLookup.n.a+this.midlineLookup.t*b.da,b.vnHeadingDif=n.heading+b.vnHeading,b.vnHeadingDif>3?b.vnHeadingDif-=rt:b.vnHeadingDif<-3&&(b.vnHeadingDif+=rt),b.vnHeadingDif=Math.abs(b.vnHeadingDif),b.beelineAssessment=b.targetArrivalDif*2,b.beelineAssessment+=b.vnHeadingDif,b.beelineAssessment+=Math.abs(this.vc.slip),this.beelineFactor=1-Math.max(0,Math.min(1,Math.cos(b.beelineAssessment))),this.beelineSteer=-this.angleDif,this.newSteer=this.inputs.steer*(1-this.beelineFactor)+this.beelineSteer*this.beelineFactor,this.newSteer=Math.min(Math.max(-n.tuning.maxSteer,this.newSteer),n.tuning.maxSteer),this.newSteer*=n.direction,n.onRoad||(b.maxSteer=1-this.offroadFactor,this.offroadFactor>=1&&(b.maxSteer=0,n.speed>this.targetSpeed*2?b.maxSteer=0:n.speed>this.targetSpeed?b.maxSteer=1-(n.speed-this.targetSpeed)/this.targetSpeed:b.maxSteer=1),b.maxSteer*=n.tuning.maxSteer,this.newSteer=Math.min(Math.max(-b.maxSteer,this.newSteer),b.maxSteer)),this.inputs.steer=this.newSteer,n.speed<1&&(this.inputs.steer*=n.speed),b.accel=(n.speed-this.pSpeed)/i,this.pSpeed=n.speed,b.tSpeed=n.speed+b.accel,b.tAccel=0,b.tBrake=0,n.speed>this.targetSpeed?(b.tAccel=0,this.brakeThreshold=1.2-this.cautionFactor*.1,this.inputs.brake>0&&(this.brakeThreshold*=.95),this.brakeFactor=1,n.speed/this.targetSpeed>this.brakeThreshold?(b.tBrake=n.speed/this.targetSpeed-this.brakeThreshold,b.tBrake*=2,n.onRoad?(b.tBrake*=this.brakeFactor,b.tBrake=Math.min(.5,b.tBrake)):b.tBrake=Math.min(1,b.tBrake)):b.tBrake=0):n.speed>this.targetSpeed*.98?(b.tAccel=this.inputs.accel*.9,b.tBrake=this.inputs.brake*.9):(b.speedBlend=.7+n.speedLerp*.2,n.speed>this.targetSpeed*b.speedBlend?b.tAccel=1-Math.max(.1,((n.speed-this.targetSpeed*b.speedBlend)/(this.targetSpeed*(1-b.speedBlend)))**2):n.speed<this.targetSpeed*.5?b.tAccel=2-n.speed/(this.targetSpeed*.5):b.tAccel=1,b.tBrake=0),b.tAccel=Math.min(1,b.tAccel),b.tAccel*=b.tAccel,b.tAccel*=n.tuning.accel,b.tAccel>this.inputs.accel?this.inputs.accel=this.inputs.accel*.975+b.tAccel*.025:(this.inputs.accel=this.inputs.accel*.95+b.tAccel*.05,this.inputs.accel<.1&&(this.inputs.accel=0)),this.inputs.brake=this.inputs.brake*.8+b.tBrake*.2,b.tBrake<this.inputs.brake&&this.inputs.brake<.1&&(this.inputs.brake=0)}annotateSpeedLimit(i){let e=-n.tuning.corneringFactor*xe*(1-this.cautionFactor*.2);b.max=n.tuning.topSpeed*this.topSpeedFactor;let s=1.75-this.cautionFactor*.5,a=i.da+i.next.da;if(a==0)i.maxSpeed=b.max;else{let t=Math.abs(a)/2,r=20*Math.cos(t)/Math.sin(t);b.maxCornerSpeed=Math.sqrt(r*e);let c=1;if(i.prev){let x=(i.p.y-i.prev.p.y)/10;x>0?c=1+Math.min(.2,x):c=1+Math.max(-.2,x)}if(i.maxSpeed=Math.min(b.max,b.maxCornerSpeed*c),!i.prev||!i.prev.maxSpeed||i.prev.maxSpeed<i.maxSpeed)return;let g=i,f=i.prev;for(;f&&f.maxSpeed;){let x=g.maxSpeed+s;if(f.maxSpeed>x)f.maxSpeed=x,f=f.prev,g=g.prev;else break}}}updateTarget(i=!1){for(i&&(this.speedAnnotationNode=this.midlineLookup.n,this.bridgeLookaheadNode=this.midlineLookup.n);this.speedAnnotationNode.i<this.midlineLookup.n.i+Hd;)this.speedAnnotationNode=this.speedAnnotationNode.next,this.annotateSpeedLimit(this.speedAnnotationNode);for(;this.bridgeLookaheadNode.i<this.midlineLookup.n.i+sr;)this.bridgeLookaheadNode=this.bridgeLookaheadNode.next;if(b.n=this.midlineLookup.n,b.targetDist=this.vc.metrics.wheelBase+1+n.speed*(1-this.cautionFactor)*n.tuning.targetDistFactor,n.onRoad||(b.targetDist+=this.offroadFactor*10),this.bridgeLookaheadNode.bridge&&!this.midlineLookup.n.bridge){this.nextBridgeIndex<this.midlineLookup.n.i&&(this.nextBridgeIndex=this.bridgeLookaheadNode.i);let e=(this.nextBridgeIndex-this.midlineLookup.n.i)/sr;e=Math.max(e,.2),b.targetDist*=e,b.targetDist=Math.max(this.vc.metrics.wheelBase+1,b.targetDist)}if(b.td=0,b.targetNodeLerp=this.midlineLookup.t+b.targetDist/10,b.targetNodeLerp>1)for(;b.targetNodeLerp>1;)b.n=b.n.next,b.targetNodeLerp-=1;for(b.fineIndex=Math.floor(b.targetNodeLerp/(1/b.n.fs)),b.fineLerp=(b.targetNodeLerp-b.fineIndex/b.n.fs)*b.n.fs,b.nf=b.n;b.fineIndex>0;)b.nf=b.nf.nextFine,b.fineIndex--;this.targetPos.copy(b.nf.p).lerp(b.nf.nextFine.p,b.fineLerp),b.nx=b.nf.n.x*(1-b.fineLerp)+b.nf.nextFine.n.x*b.fineLerp,b.nz=b.nf.n.z*(1-b.fineLerp)+b.nf.nextFine.n.z*b.fineLerp,b.cornerCaution=b.n.next.da*(1-b.targetNodeLerp)+b.n.next.next.da*b.targetNodeLerp,n.speedLerp<.1&&(b.cornerCaution*=n.speedLerp*10),this.driveLaneOffsetTarget=this.nominalDriveLaneOffset+b.cornerCaution*n.tuning.corneringCaution,this.driveLaneCorrection=this.driveLaneCorrection*.99,this.driveLaneOffsetTarget+=this.driveLaneCorrection,this.driveLaneOffset=this.driveLaneOffset*.9+this.driveLaneOffsetTarget*.1,this.targetPos.x+=b.nx*this.driveLaneOffset,this.targetPos.z+=b.nz*this.driveLaneOffset,b.da=b.n.next.a-b.n.a,b.da>3?b.da-=rt:b.da<-3&&(b.da+=rt),this.targetHeading=b.n.a+b.targetNodeLerp*b.da,this.targetHeading*=-1,b.n=this.midlineLookup.n.next.next,b.t=this.midlineLookup.t,b.targetSpeed=b.n.maxSpeed*(1-b.t)+b.n.next.maxSpeed*b.t,b.targetSpeed*=L.autodriveSpeedFactor,this.targetSpeed=this.targetSpeed*.9+b.targetSpeed*.1}}const d={vecA:new m,vecB:new m,vecC:new m,axleFPos:new m,axleFDir:new m,axleRPos:new m,axleRDir:new m,chassisDir:new m,fRightAuthorityS:.5,rRightAuthorityS:.5,frontAuthorityS:.5,maxSteer:.68,weightStability:1},Gs=new m(0,1,0),je=Math.PI*2;class Oi extends Ke{constructor(){super();o(this,"name","classicV3");o(this,"metrics",{axleWidth:1.46,wheelBase:2.65,wheelWidth:.2,wheelRadius:.342665,wheelMass:20,collisionMargin:.2,comHeight:.5,boxWidth:1.42,boxLength:2.75});o(this,"audio",{motor:zt,boost:zt});o(this,"tuning",{accel:8,topSpeed:40,reverse:5,brake:14,jerk:200,brakeResponse:.3,boostFactor:1,speedFactor:1,rearStability:.5,corneringFactor:.3,corneringCaution:-1.4,targetDistFactor:1.1,cautionFactor:.9,minCautionFactor:.15,engineRateFactor:1,engineBoostFactor:1.33,engineVolFactor:1,peakSlipAngle:.14,steerInterval:1.6,maxSteer:.68,shockTravel:.12,shockForce:10,damping:10,rockInertia:.05,wheelMassFactor:.1,weightFactor:.2,maxLinearAccel:50,maxRotAccel:3,rockFactorFront:.5,rockFactorRear:1,aeroFactor:.002,drag:.0018,rollResistance:.25,tyreFriction:1.6,kineticFrictionFactor:.8,lonFrictionFactor:.5,tyreStiffness:.8,lockDiff:!0,lockDiffOnlyRear:!0,steerAssist:1,counterSteerAssist:0});o(this,"layout",{headlightPos:{x:3.1,y:.7,z:.64},headlightTarget:{x:4.1,y:.55,z:.74},steeringPos:{x:1.75,y:.82,z:.32},steeringWheelAngle:.3,cockpitLerp:.4});o(this,"wheelObj");o(this,"meshes",{});o(this,"forward",new m);o(this,"up",new m);o(this,"down",new m);o(this,"right",new m);o(this,"comPos",new m);o(this,"comPosLerped",new m);o(this,"groundAngle",0);o(this,"groundOrientation",new Z(0,0,0,"YZX"));o(this,"groundUp",new m);o(this,"groundDown",new m);o(this,"contactUp",new m);o(this,"contactDown",new m);o(this,"boostFactor",0);o(this,"collisionStrength",0);o(this,"collisionPoint",new m);o(this,"collidingGround",0);o(this,"collidingGroundBounce",1);o(this,"chassisPComPos",new m);o(this,"chassisPRot",new Z(0,0,0,"YZX"));o(this,"chassisVel",new m);o(this,"chassisRotVel",new m);o(this,"chassisPRotVel",new m);o(this,"chassisCandidatePos",new m);o(this,"chassisCandidateComPos",new m);o(this,"chassisCandidateRot",new Z(0,0,0,"YZX"));o(this,"wheelsCandidatePos",new m);o(this,"wheelsCandidateRot",new Z(0,0,0,"YZX"));o(this,"peakSlipAngle",.1);o(this,"inputs",{accel:0,steer:0,gamepadSteer:0,brake:0,handbrake:0,stiffSteer:0});o(this,"fly",{up:0,right:0,back:0});o(this,"autodriver");o(this,"drive",0);o(this,"steer",0);o(this,"effectiveSteer",0);o(this,"effectiveSteerL",0);o(this,"effectiveSteerR",0);o(this,"steerL",0);o(this,"steerR",0);o(this,"steerDifferential",1);o(this,"rearSteerDifferential",1);o(this,"slip",0);o(this,"frontSlip",0);o(this,"spin",0);o(this,"speedLerp",0);o(this,"powerLerp",0);o(this,"downforce",0);o(this,"holdHandbrake",!1);o(this,"pdT",.0167);o(this,"orientation",new Z(0,0,0,"YZX"));o(this,"orientationFlat",new Z(0,0,"YZX"));o(this,"steerOrientation",new Z(0,0,0,"YZX"));o(this,"steerOrientationFlat",new Z(0,0,"YZX"));o(this,"chassisAccel",new m(0,0,0));o(this,"wheelDown",new m);o(this,"didCollide",!1);o(this,"didCollidePoint",!1);o(this,"fCollision",!1);o(this,"collisionSide",0);o(this,"collisionsDisabled",!1);o(this,"wheelsInside",{});o(this,"collisionPos",new m);o(this,"braking",!1);o(this,"brakeLerp",0);o(this,"brakeForce",0);o(this,"rockLatTarget",0);o(this,"rockLat",0);o(this,"rockLonTarget",0);o(this,"rockLon",0);o(this,"prevDriveDir",1);o(this,"driveMode",0);o(this,"driveModeFactor",.5);o(this,"isDriven",!1);o(this,"slipBase",.2);o(this,"slipMod",.1);o(this,"wheels",[]);o(this,"wheelFL");o(this,"wheelFR");o(this,"wheelRL");o(this,"wheelRR");o(this,"ready",!1);o(this,"elementsToLoad",0);o(this,"live",!1);o(this,"wasLive",!1);o(this,"processTime",0);o(this,"processSecs",0);o(this,"update",this.updateLoad);o(this,"vecs",{p:new m,pw:new m,pl:new m,wUp:new m,wLat:new m,wLon:new m,wLatNorm:new m,wLonNorm:new m,cumPos:new m,cumRot:new m,cPos:new m,cRot:new m});o(this,"chassisAccelA",new m);o(this,"reboundVec",new m);o(this,"reboundDir",new m);o(this,"comVec",new m);o(this,"posVec",new m);o(this,"comDir",new m);o(this,"velDir",new m);o(this,"velDirOrth",new m);o(this,"posDir",new m);o(this,"rotVec",new m);o(this,"comOrth",new m);o(this,"preColA",new m);o(this,"preColB",new m);o(this,"preVec",new m);o(this,"postVec",new m);o(this,"preVecDir",new m);o(this,"postVecDir",new m);o(this,"comVel",new m);o(this,"comAcc",new m);o(this,"autoSteer",0);this.prepMetrics(),this.audioController=new Xa(this),this.autodriver=new $a(()=>this.reset(),this)}prepMetrics(){this.metrics.wheelCircumference=this.metrics.wheelRadius*2*Math.PI,this.layout.wheels=[{x:this.metrics.wheelBase,z:-this.metrics.axleWidth/2},{x:this.metrics.wheelBase,z:this.metrics.axleWidth/2},{x:0,z:-this.metrics.axleWidth/2},{x:0,z:this.metrics.axleWidth/2}],this.metrics.shadowMapSize=this.metrics.wheelBase*1.5,n.shadowMapSize=this.metrics.shadowMapSize,n.lights.left.light.position.copy(this.layout.headlightPos),n.lights.left.target.position.copy(this.layout.headlightTarget),n.lights.right.light.position.copy(this.layout.headlightPos),n.lights.right.light.position.z*=-1,n.lights.right.target.position.copy(this.layout.headlightTarget),n.lights.right.target.position.z*=-1}init(){this.update=this.updateLoad,this.ready=!1,this.elementsToLoad=0,this.wheelObj=new we,this.onInit()}onInit(){Ya.addJob(this.load.bind(this),-1,"vehicle","vehicle",!0)}load(){return this.elementsToLoad?!1:(this.onReady(),!0)}onElementLoaded(){this.elementsToLoad--}onReady(){this.ready=!0,this.elementsToLoad=0,this.initWheels(),this.setDriveMode(V.mode),this.setDriverSide(L.driverSide),this.updatePeakSlipAngle(),this.reset(),this.update=this.updateStationed,this.audioController.init(),this.setAutodrive(n.inAutodrive),n.onReady()}initWheels(){let e=Math.PI,s=0,a=this.metrics.comHeight/(this.metrics.wheelBase/2),t=this.metrics.comHeight/(this.metrics.axleWidth/2)*.75,r=this.prepWheel();r.i=0,r.front=!0,r.relPos.set(this.metrics.wheelBase,0,-this.metrics.axleWidth/2),r.comPos.set(this.metrics.wheelBase/2,0,-this.metrics.axleWidth/2),r.comFactor.set(a,0,-t),r.axlePos.set(this.metrics.wheelBase,this.metrics.wheelRadius,-this.metrics.axleWidth/2),r.steerOrientation=new Z(0,0,0,"YZX"),r.position.copy(r.axlePos),r.euler.y=e,r.baseRotation.y=e,r.rotation.y=e,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelFL=r,r=this.prepWheel(),r.i=1,r.front=!0,r.relPos.set(this.metrics.wheelBase,0,this.metrics.axleWidth/2),r.comPos.set(this.metrics.wheelBase/2,0,this.metrics.axleWidth/2),r.comFactor.set(a,0,t),r.axlePos.set(this.metrics.wheelBase,this.metrics.wheelRadius,this.metrics.axleWidth/2),r.steerOrientation=new Z(0,0,0,"YZX"),r.position.copy(r.axlePos),r.baseRotation.y=s,r.euler.y=s,r.rotation.y=s,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelFR=r,r=this.prepWheel(),r.i=2,r.relPos.set(0,0,-this.metrics.axleWidth/2),r.comPos.set(-this.metrics.wheelBase/2,0,-this.metrics.axleWidth/2),r.comFactor.set(-a,0,-t),r.axlePos.set(0,this.metrics.wheelRadius,-this.metrics.axleWidth/2),r.position.copy(r.axlePos),r.euler.y=e,r.baseRotation.y=e,r.rotation.y=e,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelRL=r,r=this.prepWheel(),r.i=3,r.relPos.set(0,0,this.metrics.axleWidth/2),r.comPos.set(-this.metrics.wheelBase/2,0,this.metrics.axleWidth/2),r.comFactor.set(-a,0,t),r.axlePos.set(0,this.metrics.wheelRadius,this.metrics.axleWidth/2),r.position.copy(r.axlePos),r.euler.y=s,r.baseRotation.y=s,r.rotation.y=s,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelRR=r}prepWheel(){let e=this.wheelObj.clone();return e.worldPos=new m,e.pWorldPos=new m,e.relPos=new m,e.comPos=new m,e.comFactor=new m,e.axlePos=new m,e.tPos=new m,e.collisionVector=new m,e.contactPoint=new m,e.groundPoint=new m,e.euler=new Z(0,0,0,"YXZ"),e.baseRotation=new Z(0,0,0,"YXZ"),e.groundOrientation=new Z(0,0,0,"YXZ"),e.accel=new m,e.velocity=new m,e.velocityDir=new m,e.groundNorm=new m,e.groundState={n:new m,f:1,s:0,b:1},e.radius=this.metrics.wheelRadius,e.travel=this.tuning.shockTravel,e.hasDrive=!0,this.resetWheelState(e),e}resetWheelState(e){e.speed=0,e.lonDirDot=1,e.latDirDot=0,e.direction=1,e.traction=1,e.downforce=.95,e.dS=0,e.onRoad=!0,e.latForce=0,e.pLat=0,e.maxLat=0,e.slip=0,e.drive=0,e.kineticBlend=0,e.rollVelocity=0,e.collisionFactor=0,e.insideWall=!0,e.wd=0,e.shockFactor=.25,e.shockForce=1,e.shockExcess=0,e.shockVel=0,e.pShockVel=0,e.shockAcc=0,e.shockCompression=e.shockFactor*e.travel,e.pShockCompresion=e.shockCompression,e.height=0,e.groundHeight=0,e.pGroundHeight=0,e.groundHeightLateral=0,e.lonGroundAngle=0,e.latGroundAngle=0,e.cosLonGroundAngle=1,e.cosLatGroundAngle=1,e.sinLonGroundAngle=0,e.sinLatGroundAngle=0,e.velocity.set(0,0,0),e.velocityDir.set(0,0,0),e.accel.set(0,0,0),e.tPos.set(0,0,0),e.rotation.copy(e.baseRotation),e.euler.copy(e.baseRotation)}initWheelState(e){}setPose(e,s,a,t){t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),this.orientation.x=0,this.orientation.y=-t,this.orientation.z=0,s=ce.getRoadsideHeight(e,a,v.vehicleNode),d.vecA.set(e+Math.cos(t)*this.metrics.wheelBase,s,a+Math.sin(t)*this.metrics.wheelBase);let r=ce.getRoadsideHeight(d.vecA.x,d.vecA.z,v.vehicleNode);r||(r=s),this.orientation.z=Math.tan((r-s)/this.metrics.wheelBase),this.tiltZ=this.orientation.z,n.pitch=this.tiltZ,this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),this.tiltX=this.orientation.x,n.roll=this.tiltX,this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),this.up.set(0,1,0).applyEuler(this.orientation),this.down.copy(this.up).negate(),this.forward.set(1,0,0).applyEuler(this.orientation),n.forwardDir.copy(this.forward),this.orientationFlat.copy(this.orientation),this.steerOrientationFlat.copy(this.orientation),d.vecA.set(e,s,a);for(let c of this.wheels)this.resetWheelState(c),c.contactPoint.copy(c.relPos).add(d.vecA),c.groundPoint.copy(c.contactPoint),c.groundHeight=c.groundPoint.y,c.pGroundHeight=c.groundHeight,c.latGroundAngle=0,c.lonGroundAngle=this.tiltZ,c.cosLonGroundAngle=Math.cos(this.tiltZ);d.frontGroundHeight=(this.wheelFL.groundHeight+this.wheelFR.groundHeight)/2,d.rearGroundHeight=(this.wheelRL.groundHeight+this.wheelRR.groundHeight)/2,this.groundAngle=Math.asin((d.frontGroundHeight-d.rearGroundHeight)/this.wheelFL.groundPoint.distanceTo(this.wheelRL.groundPoint)),this.groundOrientation.x=0,this.groundOrientation.y=this.orientation.y,this.groundOrientation.z=this.groundAngle,this.groundUp.set(0,1,0).applyEuler(this.groundOrientation),this.groundDown.copy(this.groundUp).negate(),this.contactUp.copy(this.groundUp).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),n.position.set(e,s,a),n.pPosition.copy(n.position),n.heading=this.orientation.y,n.motionHeading=n.heading,n.setRotationFromEuler(this.orientation),n.updateMatrix(),n.updateMatrixWorld(!0),n.com.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase/2).add(n.position),d.vecA.copy(this.up).multiplyScalar(this.metrics.comHeight),n.com.add(d.vecA),this.comPosLerped.copy(n.com),this.comVel.set(0,0,0),this.comAcc.set(0,0,0);for(let c of this.wheels)this.updateWheelWorldPos(c),c.pWorldPos.copy(c.worldPos);this.chassisPComPos.copy(n.com),this.chassisPRot.copy(this.orientation)}reset(){let e=v.vehicleNode;this.setPose(e.p.x+e.n.x*n.driveLaneOffset,e.p.y,e.p.z+e.n.z*n.driveLaneOffset,e.next.a),this.chassisAccel.set(0,0,0),this.chassisVel.set(0,0,0),this.chassisRotVel.set(0,0,0),this.chassisPRotVel.copy(this.chassisRotVel),this.steerOrientation.copy(this.orientation),this.didCollide=!1,this.didCollidePoint=!1,this.fCollision=!1,this.collisionSide=0,this.collisionsDisabled=!1,this.inputs.accel=0,this.inputs.steer=0,this.inputs.brake=0,this.inputs.handbrake=0,this.inputs.stickySteer=0,this.autodriver.reset(),this.audioController.reset(),this.update=this.updateStationed,this.processTime=0,this.processSecs=0,n.hasBoost=!1,n.onReset()}destroy(){this.audioController.destroy(),this.autodriver.destroy()}updateStationed(e){if(I.signal.Handbrake=1,n.hasHandbrake=!0,d.debugObj={},this.handleInput(e),!Je.isCinecam&&I.signal.Backward+I.signal.Forward>0||this.autodrive||I.signal.Autodrive||n.hasCruiseTarget){n.hasHandbrake=!1,this.holdHandbrake=!n.hasCruiseTarget&&!this.autodrive,this.update=this.updateLive;return}this.updatePhysics(e),this.updateAudio(e),this.updateVisuals(e),this.pdT=e}updateLive(e){d.debugObj={},this.handleInput(e);let s=e;for(;!mt.stepping&&s>.012;)this.updatePhysics(.01),this.pdT=.01,s-=.01;this.updatePhysics(s),this.updateAudio(e),this.updateVisuals(e),this.pdT=s}updatePhysics(e){this.updateNew(e),this.updateChassisState(e),this.updateWheelsPost(e)}updateVisuals(e){}updateLoad(){}updateNew(e){this.steerOrientation.copy(this.orientation),this.steerOrientation.y+=this.effectiveSteer,d.frontSlip=(this.wheelFL.slip+this.wheelFR.slip)/2,d.rearSlip=(this.wheelRL.slip+this.wheelRR.slip)/2,d.frontRearSlipRatio=0,d.stabilityFactor=1,d.frontSlip>0&&d.rearSlip>d.frontSlip&&(d.frontRearSlipRatio=Math.min(d.rearSlip,Math.min(2,d.rearSlip/d.frontSlip)-1),d.stabilityFactor=1+d.frontRearSlipRatio*this.tuning.rearStability),d.stabilityFactor*=1-this.inputs.brake*.25,d.vecA.set(n.direction,0,0).applyEuler(this.steerOrientation),d.driftAlignment=Math.abs(n.motionDir.dot(d.vecA));for(let t of this.wheels){t.velocity.subVectors(t.worldPos,t.pWorldPos).divideScalar(this.pdT),t.velocityDir.copy(t.velocity).normalize();let r=t.velocity.length();r>t.speed&&(r-t.speed)/e>25&&t.velocity.copy(t.velocityDir).multiplyScalar(25*e+t.speed),t.pWorldPos.copy(t.worldPos),t.speed=t.velocity.length(),t.dS=t.speed*e*Math.abs(t.lonDirDot),t.accel.set(0,0,0),t.shockForce<=1?t.downforce=t.shockForce*.9:t.downforce=.9+.1*Math.sqrt((t.shockForce-1)/(this.tuning.shockForce-1)),t.groundTraction=(Math.max(0,t.groundNorm.dot(Gs)-.5)*2)**2,t.groundTraction*=t.groundNorm.dot(this.up)**2,t.groundImpact=-t.groundNorm.dot(n.motionDir)*t.downforce,(t.groundImpact<0||t.velocityDir.y<0)&&(t.groundImpact=0),t.groundImpactFactor=1+t.groundImpact,t.traction=t.downforce*Math.min(1,t.groundState.f*this.tuning.tyreFriction*t.groundTraction),t.front?(t.steerOrientation.copy(this.orientation),t.i==0?t.steerOrientation.y+=this.effectiveSteerL:t.steerOrientation.y+=this.effectiveSteerR,d.vecA.set(1,0,0).applyEuler(t.steerOrientation),t.lonDirDot=t.velocityDir.dot(d.vecA),t.direction=t.lonDirDot<0?-1:1,d.vecA.set(0,0,1).applyEuler(t.steerOrientation),t.latDirDot=t.velocityDir.dot(d.vecA)):(d.vecA.set(1,0,0).applyEuler(this.orientation),t.lonDirDot=t.velocityDir.dot(d.vecA),t.direction=t.lonDirDot<0?-1:1,d.vecA.set(0,0,1).applyEuler(this.orientation),t.latDirDot=t.velocityDir.dot(d.vecA)),t.locked=!t.front&&n.hasHandbrake,t.locked?(d.maxLon=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction*t.cosLonGroundAngle,d.lon=t.lonDirDot*t.speed/e,d.lonAbs=Math.abs(d.lon),t.lonSlip=0,d.lonAbs>d.maxLon&&(d.maxLon=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*this.tuning.kineticFrictionFactor*t.cosLonGroundAngle*.7,d.lon<0?d.lon=Math.max(d.lon,-d.maxLon):d.lon=Math.min(d.lon,d.maxLon),t.lonSlip=Math.abs(t.lonDirDot)),t.static=t.speed<.2,t.accel.x-=d.lon):n.hasHandbrake&&t.speed<.1?t.static=!0:(t.static=!1,t.accel.x-=Math.min(this.tuning.rollResistance,t.speed/e)*t.shockForce*t.lonDirDot),d.lat=t.latDirDot*t.speed/e,t.pLat=d.lat,t.slipAngle=Math.acos(t.lonDirDot),t.slipAngleFactor=0,d.slipAngleLerp=Math.max(0,t.slipAngle/this.peakSlipAngle),d.slipAngleLerp<=1?t.slipAngleFactor=-((d.slipAngleLerp-1)**2)+1:d.slipAngleLerp>10?t.slipAngleFactor=.75:t.slipAngleFactor=1+(1-d.slipAngleLerp)*.025,d.wl=1,t.groundImpact<=0?d.wl=t.cosLatGroundAngle**3:d.wl=t.groundImpactFactor,L.gripFactor<1?d.wl*=.8+L.gripFactor*.2:d.wl*=L.gripFactor,d.maxLat=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction*t.slipAngleFactor*d.wl,t.front||(d.maxLat*=d.stabilityFactor),d.latAbs=Math.abs(d.lat),t.kineticBlend=0,d.latAbs>d.maxLat?(t.kineticBlend=1,d.kineticForceLimit=t.groundState.f*50,d.latAbs<d.kineticForceLimit&&(t.kineticBlend=this.smoothLerp(d.latAbs/d.kineticForceLimit)),d.frictionFactor=1-t.kineticBlend+t.kineticBlend*this.tuning.kineticFrictionFactor,d.maxLat=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*d.frictionFactor*t.slipAngleFactor*d.wl,t.front||(d.maxLat*=d.stabilityFactor),t.drive>0&&(this.driveMode==qe.RWD?d.maxLat*=1-t.drive*.08*t.kineticBlend:d.maxLat*=1-t.drive*.04*t.kineticBlend),t.locked&&(d.maxLat*=.7),d.lat<-d.maxLat?(t.slip=Math.min(1,-(d.lat-d.maxLat)/(d.maxLat*100)),d.lat=Math.max(d.lat,-d.maxLat)):d.lat>d.maxLat&&(t.slip=Math.min(1,(d.lat-d.maxLat)/(d.maxLat*100)),d.lat=d.maxLat)):t.slip=0,t.maxLat=d.maxLat,t.latForce=d.lat,t.accel.z-=t.latForce,this.braking&&!t.locked&&(t.accel.x=-t.lonDirDot*this.brakeForce*t.traction),t.drive=0,t.hasDrive&&!t.locked&&(d.drive=this.drive*this.driveModeFactor*t.traction,t.drive=this.drive/this.tuning.accel*this.driveModeFactor,t.i==0?(d.drive*=this.steerDifferential,t.drive*=this.steerDifferential):t.i==1?(d.drive/=this.steerDifferential,t.drive/=this.steerDifferential):t.i==2?(d.drive*=this.rearSteerDifferential,t.drive*=this.rearSteerDifferential):(d.drive/=this.rearSteerDifferential,t.drive/=this.rearSteerDifferential),t.accel.x+=d.drive),t.accel.y-=t.shockForce*xe,t.shockVel=(t.shockCompression-t.pShockCompresion)/e,t.pShockCompresion=t.shockCompression,t.accel.y+=this.tuning.damping*t.shockVel,t.accel.y+=t.downforce*(this.sinTiltZ*-t.comFactor.x*xe+this.sinTiltX*t.comFactor.z*xe),t.accel.y+=t.downforce*(this.chassisAccel.x*t.comFactor.x+this.chassisAccel.z*t.comFactor.z),L.gripFactor>1?t.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ:t.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ*L.gripFactor,t.front?t.accel.applyEuler(t.steerOrientation):t.accel.applyEuler(this.orientation),t.accel.y+=xe,d.vecA.copy(t.velocityDir).negate().multiplyScalar(this.tuning.drag*t.speed*t.speed),t.contactPoint.y<ce.seaLevel&&(d.s=ce.seaLevel-this.metrics.wheelRadius,t.contactPoint.y<d.s?d.vecA.multiplyScalar(100):d.vecA.multiplyScalar((1-(t.contactPoint.y-d.s)/this.metrics.wheelRadius)*100)),t.accel.add(d.vecA),t.wheelImpact=-t.groundNorm.dot(t.velocityDir)*t.downforce,(t.wheelImpact<0||t.velocityDir.y<0)&&(t.wheelImpact=0),t.wheelImpact>.01&&(d.vecA.normalize().multiplyScalar(t.wheelImpact*(t.speed/e)*.05*Math.max(Math.abs(t.lonDirDot/4),Math.abs(t.latDirDot))),t.accel.add(d.vecA),d.vecA.copy(t.groundNorm),d.vecA.y*=0,d.vecA.multiplyScalar(t.speed/e*t.wheelImpact*.003),d.vecA.divideScalar(e),t.accel.add(d.vecA)),t.accel.multiplyScalar(e),t.velocity.add(t.accel),t.static&&(t.velocity.x=0,t.velocity.z=0),t.worldPos.copy(t.velocity).multiplyScalar(e).add(t.pWorldPos)}this.resolveChassisTransformNew(e),this.applyChassisUpdate(e);let s=(this.wheelFR.slip+this.wheelFL.slip)/2,a=(this.wheelRR.slip+this.wheelRL.slip)/2;this.slip=a,this.frontSlip=s,this.spin=Math.abs(a-s),this.collisionsDisabled=this.collisionsDisabled&&this.collidingWall,this.collidingWall=!1,n.isAirborne=!0,this.contactUp.copy(this.up).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),this.wheelsInside={},n.onRoad=!1,this.fCollision=!1,this.didCollidePoint=!1,this.collidingGround=0,this.collidingGroundBounce=0,this.collidingWheels=[];for(let t of this.wheels)this.updateWheelWorldPos(t),this.updateWheelContact(t,e),n.onRoad=n.onRoad||t.onRoad;if(this.fCollision)this.resolveCollisions(e)&&(this.chassisVel.copy(n.com).sub(this.chassisPComPos).divideScalar(e),this.chassisVel.multiplyScalar(.98),d.vecA.copy(this.orientation).sub(this.chassisPRot),d.vecA.y>Math.PI?d.vecA.y-=Math.TAU:d.vecA.y<-Math.PI&&(d.vecA.y+=Math.TAU),d.vecA.divideScalar(e),Math.abs(d.vecA.x)>this.tuning.maxRotAccel&&(d.vecA.x=Math.sign(d.vecA.x)*this.tuning.maxRotAccel),Math.abs(d.vecA.z)>this.tuning.maxRotAccel&&(d.vecA.z=Math.sign(d.vecA.z)*this.tuning.maxRotAccel),Math.abs(d.vecA.y)>this.tuning.maxRotAccel&&(d.vecA.y=Math.sign(d.vecA.y)*this.tuning.maxRotAccel),this.chassisRotVel.lerp(d.vecA,1-this.tuning.weightFactor));else if(this.collidingGround>0){d.vecA.copy(n.com).sub(this.chassisPComPos).divideScalar(e),d.vecB.copy(d.vecA).normalize(),d.vecC.copy(this.chassisVel).normalize();let t=d.vecB.dot(d.vecC),r=this.collidingGroundBounce/this.collidingGround;d.vecA.multiplyScalar(this.chassisVel.length()/d.vecA.length()),this.chassisVel.lerp(d.vecA,this.collidingGround/4*r),this.chassisVel.multiplyScalar(Math.max(0,t)),d.vecA.copy(this.orientation).sub(this.chassisPRot),d.vecA.y>Math.PI?d.vecA.y-=Math.TAU:d.vecA.y<-Math.PI&&(d.vecA.y+=Math.TAU),d.vecA.divideScalar(this.pdT),Math.abs(d.vecA.x)>this.tuning.maxRotAccel&&(d.vecA.x=Math.sign(d.vecA.x)*this.tuning.maxRotAccel),Math.abs(d.vecA.z)>this.tuning.maxRotAccel&&(d.vecA.z=Math.sign(d.vecA.z)*this.tuning.maxRotAccel),Math.abs(d.vecA.y)>this.tuning.maxRotAccel&&(d.vecA.y=Math.sign(d.vecA.y)*this.tuning.maxRotAccel),this.chassisRotVel.lerp(d.vecA,(1-this.tuning.weightFactor)*(this.collidingGround/4)*r)}(isNaN(n.position.x)||isNaN(this.orientation.z))&&this.reset()}resolveChassisTransformNew(e){let s,a=this.vecs.p,t=this.vecs.pw,r=this.vecs.pl,c=this.vecs.wUp,g=this.vecs.wLat,f=this.vecs.wLon,x=this.vecs.wLatNorm,w=this.vecs.wLonNorm,S,D,C,k,T,P=0,B=this.vecs.cumPos,O=this.vecs.cumRot,W=0,N=0,j=this.vecs.cPos,G=this.vecs.cRot;B.set(0,0,0),O.set(0,0,0),j.set(0,0,0),G.set(0,0,0);let Be=null;for(let Ue=0;Ue<4;Ue++)s=this.wheels[Ue],a.copy(s.worldPos),Ue==0?(t.copy(this.wheelFR.worldPos),r.copy(this.wheelRL.worldPos),g.subVectors(t,a),f.subVectors(a,r)):Ue==1?(t.copy(this.wheelFL.worldPos),r.copy(this.wheelRR.worldPos),g.subVectors(a,t),f.subVectors(a,r)):Ue==2?(t.copy(this.wheelRR.worldPos),r.copy(this.wheelFL.worldPos),g.subVectors(t,a),f.subVectors(r,a)):(t.copy(this.wheelRL.worldPos),r.copy(this.wheelFR.worldPos),g.subVectors(a,t),f.subVectors(r,a)),c.crossVectors(g,f).normalize(),x.copy(g).normalize(),w.copy(f).normalize(),S=x.dot(w),D=Math.acos(S)-Math.PI/2,C=g.length(),k=f.length(),T=C/(k+C),f.applyAxisAngle(c,-D*T),g.applyAxisAngle(c,D*(1-T)),f.normalize(),g.normalize(),G.y=-Math.atan2(f.z,f.x),s.i==0?Be=G.y:G.y-Be<-Math.PI?G.y+=je:G.y-Be>Math.PI&&(G.y-=je),G.z=Math.asin(f.y),G.x=-Math.asin(g.y/Math.cos(G.z)),f.multiplyScalar(-s.relPos.x),g.multiplyScalar(-s.relPos.z),j.copy(a).add(f).add(g),W=this.tuning.wheelMassFactor+s.downforce,N+=s.shockFactor,j.multiplyScalar(W),G.multiplyScalar(W),B.add(j),O.add(G),P+=W;B.divideScalar(P),O.divideScalar(P),O.x=Math.min(Math.max(-1.4,O.x),1.4),O.z=Math.min(Math.max(-1.4,O.z),1.4),O.y>Math.PI?O.y-=je:O.y<-Math.PI&&(O.y+=je),d.vecA.copy(n.com).sub(this.chassisPComPos).divideScalar(this.pdT),d.vecB.copy(d.vecA).sub(this.chassisVel).divideScalar(e),N>0&&d.vecB.length()>this.tuning.maxLinearAccel&&d.vecB.normalize().multiplyScalar(this.tuning.maxLinearAccel),d.vecB.multiplyScalar(e),this.chassisVel.add(d.vecB),d.vecA.copy(this.orientation).sub(this.chassisPRot),d.vecA.y>Math.PI?d.vecA.y-=Math.TAU:d.vecA.y<-Math.PI&&(d.vecA.y+=Math.TAU),d.vecA.divideScalar(this.pdT),N>0&&(Math.abs(d.vecA.x)>this.tuning.maxRotAccel&&(d.vecA.x=Math.sign(d.vecA.x)*this.tuning.maxRotAccel),Math.abs(d.vecA.z)>this.tuning.maxRotAccel&&(d.vecA.z=Math.sign(d.vecA.z)*this.tuning.maxRotAccel),Math.abs(d.vecA.y)>this.tuning.maxRotAccel&&(d.vecA.y=Math.sign(d.vecA.y)*this.tuning.maxRotAccel)),d.vecB.copy(d.vecA).sub(this.chassisRotVel),this.chassisRotVel.add(d.vecB),this.chassisRotVel.y<-Math.PI?this.chassisRotVel.y+=je:this.chassisRotVel.y>Math.PI&&(this.chassisRotVel.y-=je),this.chassisPComPos.copy(n.com),this.chassisPRot.copy(this.orientation);let ue=N/4*this.tuning.shockForce,Vt=1-Math.min(1,ue),$=.25*e;this.chassisRotVel.x>$?this.chassisRotVel.x-=$:this.chassisRotVel.x<-$&&(this.chassisRotVel.x+=$),this.chassisRotVel.z>$?this.chassisRotVel.z-=$:this.chassisRotVel.z<-$&&(this.chassisRotVel.z+=$),$=.2*e,this.chassisRotVel.y>$?this.chassisRotVel.y-=$:this.chassisRotVel.y<-$&&(this.chassisRotVel.y+=$),this.chassisCandidateRot.copy(this.orientation),this.chassisCandidateRot.x+=this.chassisRotVel.x*e,this.chassisCandidateRot.y+=this.chassisRotVel.y*e,this.chassisCandidateRot.z+=this.chassisRotVel.z*e;let wi=this.chassisCandidateRot.y-O.y;wi<-Math.PI?this.chassisCandidateRot.y+=je:wi>Math.PI&&(this.chassisCandidateRot.y-=je),this.chassisCandidateComPos.copy(this.chassisVel).multiplyScalar(e).add(n.com),d.vecA.set(-this.metrics.wheelBase/2,-this.metrics.comHeight,0).applyEuler(this.chassisCandidateRot),this.chassisCandidatePos.copy(this.chassisCandidateComPos).add(d.vecA),this.chassisCandidatePos.y+=xe*e*e*Vt,this.chassisCandidatePos.y+=this.fly.up,this.chassisCandidatePos.x+=this.right.x*this.fly.right,this.chassisCandidatePos.z+=this.right.z*this.fly.right,d.vecA.copy(this.chassisVel).multiplyScalar(-this.fly.back),this.chassisCandidatePos.add(d.vecA),this.fly.up=0,this.fly.right=0,this.fly.back=0;let ne=.5;ne=this.tuning.weightFactor,ue>1?ne*=Math.max(1-this.tuning.weightFactor,2-ue):(ue==0&&(ne=1),ne=this.tuning.weightFactor+(1-ue)*(1-this.tuning.weightFactor)),this.orientation.x=O.x*(1-ne)+ne*this.chassisCandidateRot.x,this.orientation.y=O.y*(1-ne)+ne*this.chassisCandidateRot.y,this.orientation.z=O.z*(1-ne)+ne*this.chassisCandidateRot.z,this.orientation.x=Math.min(Math.max(-1.2,this.orientation.x),1.2),this.orientation.z=Math.min(Math.max(-1.2,this.orientation.z),1.2),B.lerp(this.chassisCandidatePos,ne),this.tiltZ=this.orientation.z,this.cosTiltZ=Math.cos(this.tiltZ),this.sinTiltZ=Math.sin(this.tiltZ),n.pitch=this.tiltZ,this.tiltX=this.orientation.x,this.cosTiltX=Math.cos(this.tiltX),this.sinTiltX=Math.sin(this.tiltX),n.roll=this.tiltX,n.heading=this.orientation.y,n.position.copy(B),n.direction=Math.min(this.wheelRL.direction,this.wheelRR.direction),n.forwardDir.set(1,0,0).applyEuler(this.orientation),n.right.set(0,0,1).applyEuler(this.orientation),n.up.set(0,1,0).applyEuler(this.orientation),n.forwardPosition.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase).add(n.position),n.midPosition.set((n.position.x+n.forwardPosition.x)/2,(n.position.y+n.forwardPosition.y)/2,(n.position.z+n.forwardPosition.z)/2),n.cockPosition.copy(n.midPosition).lerp(n.forwardPosition,this.layout.cockpitLerp)}resolveChassisTransform(){d.inertia=0,d.authMin=.2,d.authRange=(.5-d.authMin)*2,d.fCollDenom=this.wheelFL.downforce+this.wheelFL.collisionFactor+this.wheelFR.downforce+this.wheelFR.collisionFactor,d.fCollDenom>0?d.fRightAuthority=(this.wheelFR.downforce+this.wheelFR.collisionFactor)/d.fCollDenom:d.fRightAuthority=.5,d.fCollisionFactor=this.wheelFL.collisionFactor+this.wheelFR.collisionFactor,d.fCollisionFactor==0&&(d.fRightAuthority=d.authMin+d.authRange*d.fRightAuthority),d.fRightAuthorityS=d.fRightAuthorityS*d.inertia+(1-d.inertia)*d.fRightAuthority,d.vecA.copy(this.wheelFR.worldPos).sub(this.wheelFL.worldPos),d.offset=d.vecA.length()-this.metrics.axleWidth,d.vecB.copy(d.vecA).normalize().multiplyScalar(d.offset*d.fRightAuthorityS),this.wheelFL.worldPos.add(d.vecB),d.vecA.normalize().multiplyScalar(this.metrics.axleWidth),this.wheelFR.worldPos.copy(d.vecA).add(this.wheelFL.worldPos),d.rCollDenom=this.wheelRL.downforce+this.wheelRL.collisionFactor+this.wheelRR.downforce+this.wheelRR.collisionFactor,d.rCollDenom>0?d.rRightAuthority=(this.wheelRR.downforce+this.wheelRR.collisionFactor)/d.rCollDenom:d.rRightAuthority=.5,d.rCollisionFactor=this.wheelRL.collisionFactor+this.wheelRR.collisionFactor,d.rCollisionFactor==0&&(d.rRightAuthority=d.authMin+d.authRange*d.rRightAuthority),d.rRightAuthorityS=d.rRightAuthorityS*d.inertia+(1-d.inertia)*d.rRightAuthority,d.vecA.copy(this.wheelRR.worldPos).sub(this.wheelRL.worldPos),d.offset=d.vecA.length()-this.metrics.axleWidth,d.vecB.copy(d.vecA).normalize().multiplyScalar(d.offset*d.rRightAuthorityS),this.wheelRL.worldPos.add(d.vecB),d.vecA.normalize().multiplyScalar(this.metrics.axleWidth),this.wheelRR.worldPos.copy(d.vecA).add(this.wheelRL.worldPos),d.axleFPos.addVectors(this.wheelFL.worldPos,this.wheelFR.worldPos).multiplyScalar(.5),d.axleRPos.addVectors(this.wheelRL.worldPos,this.wheelRR.worldPos).multiplyScalar(.5),d.collDenom=d.fCollDenom+d.rCollDenom,d.collDenom>0?d.frontAuthority=d.fCollDenom/d.collDenom:d.frontAuthority=.5,d.fCollisionFactor==0&&d.rCollisionFactor==0&&(d.frontAuthority=d.authMin+d.authRange*d.frontAuthority),d.frontAuthorityS=d.frontAuthorityS*d.inertia+(1-d.inertia)*d.frontAuthority,d.vecA.copy(d.axleFPos).sub(d.axleRPos),d.offset=d.vecA.length()-this.metrics.wheelBase,d.vecB.copy(d.vecA).normalize().multiplyScalar(d.offset*d.frontAuthorityS),d.axleRPos.add(d.vecB),d.vecA.normalize().multiplyScalar(this.metrics.wheelBase),d.axleFPos.copy(d.axleRPos).add(d.vecA),n.position.copy(d.axleRPos),n.forwardPosition.copy(d.axleFPos),n.midPosition.set((n.position.x+n.forwardPosition.x)/2,(n.position.y+n.forwardPosition.y)/2,(n.position.z+n.forwardPosition.z)/2),d.vecA.normalize(),this.orientation.y=-Math.atan2(d.vecA.z,d.vecA.x),this.orientation.y>Math.PI?this.orientation.y-=Math.TAU:this.orientation.y<-Math.PI&&(this.orientation.y+=Math.TAU),n.heading=this.orientation.y,n.direction=Math.min(this.wheelRL.direction,this.wheelRR.direction),this.wheelRR.speed+this.wheelRL.speed<.1&&(n.direction=0),d.d1=this.wheelFL.worldPos.distanceTo(this.wheelRL.worldPos),d.d2=this.wheelFR.worldPos.distanceTo(this.wheelRR.worldPos),d.r1=Math.asin((this.wheelFL.worldPos.y-this.wheelRL.worldPos.y)/d.d1),d.r2=Math.asin((this.wheelFR.worldPos.y-this.wheelRR.worldPos.y)/d.d2),d.tiltLerpDenom=this.wheelFL.downforce+this.wheelRL.downforce+this.wheelFR.downforce+this.wheelRR.downforce,d.tiltLerpDenom>0?d.tiltLerp=(this.wheelFL.downforce+this.wheelRL.downforce)/d.tiltLerpDenom:d.tiltLerp=.5,d.tiltZ=d.r1*d.tiltLerp+d.r2*(1-d.tiltLerp),isNaN(d.tiltZ)&&(d.tiltZ=0),d.dTiltZ=d.tiltZ-this.tiltZ,d.tiltZ>this.tiltZ&&this.tiltZ>1?d.dTiltZ*=1-(this.tiltZ-1)/.4:d.tiltZ<this.tiltZ&&this.tiltZ<-1&&(d.dTiltZ*=(1+this.tiltZ)/-.4),this.tiltZ+=d.dTiltZ,this.tiltZ=Math.min(Math.max(-1.4,this.tiltZ),1.4),this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),n.pitch=this.tiltZ,this.orientation.z=this.tiltZ,d.d2=this.wheelFR.worldPos.distanceTo(this.wheelFL.worldPos)*this.cosTiltZ,d.d1=this.wheelFL.worldPos.y-this.wheelFR.worldPos.y,d.r1=Math.asin(d.d1/d.d2),d.d2=this.wheelRR.worldPos.distanceTo(this.wheelRL.worldPos)*this.cosTiltZ,d.d1=this.wheelRL.worldPos.y-this.wheelRR.worldPos.y,d.r2=Math.asin(d.d1/d.d2),d.tiltLerpDenom>0?d.tiltLerp=(this.wheelFL.downforce+this.wheelFR.downforce)/d.tiltLerpDenom:d.tiltLerp=.5,d.tiltX=d.r1*d.tiltLerp+d.r2*(1-d.tiltLerp),d.dTiltX=d.tiltX-this.tiltX,d.tiltX>this.tiltX&&this.tiltX>1?d.dTiltX*=1-(this.tiltX-1)/.4:d.tiltX<this.tiltX&&this.tiltX<-1&&(d.dTiltX*=(1+this.tiltX)/-.4),this.tiltX+=d.dTiltX,this.tiltX=Math.min(Math.max(-1.4,this.tiltX),1.4),this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),this.orientation.x=this.tiltX,n.roll=this.tiltX}updateWheelsPost(e){d.wheelCirc=this.metrics.wheelCircumference,d.r=0,this.wheelFL.shockFactor==0?(this.wheelFL.rollVelocity*=.995,d.r=this.wheelFL.rollVelocity*e):(d.r=this.wheelFL.dS/d.wheelCirc*je*this.wheelFL.direction,this.wheelFL.rollVelocity=d.r/e),this.wheelFL.euler.z+=d.r,this.wheelFL.euler.y=this.steerL+Math.PI,this.wheelFL.setRotationFromEuler(this.wheelFL.euler),this.wheelFR.shockFactor==0?(this.wheelFR.rollVelocity*=.995,d.r=this.wheelFR.rollVelocity*e):(d.r=this.wheelFR.dS/d.wheelCirc*je*this.wheelFR.direction,this.wheelFR.rollVelocity=d.r/e),this.wheelFR.euler.z-=d.r,this.wheelFR.euler.y=this.steerR,this.wheelFR.setRotationFromEuler(this.wheelFR.euler),n.hasHandbrake||(this.wheelRL.shockFactor==0?(this.wheelRL.rollVelocity*=.995,d.r=this.wheelRL.rollVelocity*e):(d.r=this.wheelRL.dS/d.wheelCirc*je*this.wheelRL.direction,this.wheelRL.rollVelocity=d.r/e),this.wheelRL.rotation.z=this.wheelRL.rotation.z+d.r,this.wheelRR.shockFactor==0?(this.wheelRR.rollVelocity*=.995,d.r=this.wheelRR.rollVelocity*e):(d.r=this.wheelRR.dS/d.wheelCirc*je*this.wheelRR.direction,this.wheelRR.rollVelocity=d.r/e),this.wheelRR.rotation.z=this.wheelRR.rotation.z-d.r)}updateChassisState(e){d.vecA.copy(n.accel),d.vecA.applyAxisAngle(Gs,-this.orientation.y);let s=e*2e3;d.vecA.x=Math.min(Math.max(-s,d.vecA.x),s),d.vecA.z=Math.min(Math.max(-s,d.vecA.z),s),this.chassisAccel.copy(d.vecA),L.speedFactor>1?this.speedLerp=Math.min(1,n.speed/(this.tuning.topSpeed*Math.sqrt(L.speedFactor))):this.speedLerp=Math.min(1,n.speed/this.tuning.topSpeed),n.speedLerp=this.speedLerp}updateAudio(e){this.audioController.update(e),this.collisionStrength*=.9,this.didCollide=!1}updateWheelWorldPos(e){e.position.y=e.axlePos.y+e.shockCompression,e.worldPos.copy(e.relPos),e.worldPos.applyMatrix4(n.matrixWorld),e.height=e.worldPos.y}updateWheelContact(e){e.contactPoint.copy(this.up).multiplyScalar(e.shockCompression+this.metrics.wheelRadius).add(this.contactDown).add(e.worldPos),ce.getGroundState(e.contactPoint.x,e.contactPoint.z,v.vehicleNode,e.groundState,!0),d.ground=e.groundState,e.pGroundHeight=e.groundHeight,e.groundHeight=d.ground.h,e.groundPoint.copy(e.contactPoint),e.groundPoint.y=d.ground.h,e.onRoad=d.ground.r,d.vecA.copy(this.right),d.vecA.y=0,d.vecA.normalize(),d.sideFactor=1,e.i%2==0&&(d.vecA.negate(),d.sideFactor=-1),e.groundHeightLateral=ce.getRoadsideHeight(e.contactPoint.x+this.metrics.wheelWidth*d.vecA.x,e.contactPoint.z+this.metrics.wheelWidth*d.vecA.z,v.vehicleNode),e.onRoad&&v.vehicleNode.bridge&&e.groundHeightLateral<e.groundHeight-.1&&(e.groundHeightLateral=e.groundHeight),e.latGroundAngle=Math.atan((e.groundHeight-e.groundHeightLateral)/this.metrics.wheelWidth),e.latGroundAngle*=d.sideFactor,e.sinLatGroundAngle=Math.sin(e.latGroundAngle),e.cosLatGroundAngle=Math.cos(e.latGroundAngle),d.vecA.copy(this.forward),d.vecA.y=0,d.vecA.normalize(),e.groundHeightLongitudinal=ce.getRoadsideHeight(e.contactPoint.x+this.metrics.wheelWidth*d.vecA.x,e.contactPoint.z+this.metrics.wheelWidth*d.vecA.z,v.vehicleNode),e.onRoad&&v.vehicleNode.bridge&&e.groundHeightLongitudinal<e.groundHeight-.1&&(e.groundHeightLongitudinal=e.groundHeight),e.lonGroundAngle=Math.atan((e.groundHeightLongitudinal-e.groundHeight)/this.metrics.wheelWidth),e.cosLonGroundAngle=Math.cos(e.lonGroundAngle),e.sinLonGroundAngle=Math.sin(e.lonGroundAngle),e.groundOrientation.x=e.latGroundAngle,e.groundOrientation.y=this.orientation.y,e.groundOrientation.z=e.lonGroundAngle,e.groundNorm.set(0,1,0).applyEuler(e.groundOrientation),d.deltaCompression=e.groundPoint.y-e.contactPoint.y,e.shockCompression+=d.deltaCompression,e.shockExcess>0,e.shockExcess=0,e.collisionFactor=0,e.shockCompression<0?e.shockCompression=0:e.shockCompression>e.travel&&(e.shockExcess=e.shockCompression-e.travel,e.shockCompression=e.travel,this.collidingGround++,this.collidingGroundBounce+=e.groundState.b,d.vecA.copy(e.groundNorm).multiplyScalar(e.shockExcess*e.groundNorm.dot(this.up)),e.shockExcess<e.travel&&d.vecA.multiplyScalar(e.groundState.b),e.worldPos.add(d.vecA)),e.contactPoint.y>e.groundHeight+1&&(this.collisionsDisabled=!0),n.isAirborne=n.isAirborne&&e.contactPoint.y>e.groundHeight+.1,e.shockFactor=e.shockCompression/e.travel,e.shockForce=e.shockFactor*this.tuning.shockForce,d.ground.w?(e.wd=d.ground.wd,e.wn=d.ground.wn,e.ws=d.ground.ws,e.wasInsideWall=e.insideWall,e.insideWall=e.wd<0,this.collisionsDisabled&&(e.wasInsideWall=e.insideWall),e.wi==null||e.wi!==d.ground.wi||e.collidingWallEnd?(e.wi=d.ground.wi,e.mayCollide=!0,this.wheelsInside[d.ground.wi]==null&&(this.wheelsInside[d.ground.wi]=e.insideWall),this.wheelsInside[e.wi]!==e.insideWall||e.wd>-this.metrics.collisionMargin&&e.wd<this.metrics.collisionMargin?this.collideWallEnd(e):e.collidingWallEnd=!1):(this.wheelsInside[d.ground.wi]==null&&(this.wheelsInside[d.ground.wi]=e.insideWall),e.collidingWallEnd=!1,this.wheelsInside[e.wi]!==e.insideWall&&(this.collidingWall=!0,this.collideWallEnd(e)),e.collidingWallEnd||(e.wasInsideWall==!1?e.insideWall=e.wd-this.metrics.collisionMargin<0:e.insideWall=e.wd+this.metrics.collisionMargin<0,e.insideWall!==e.wasInsideWall&&(this.collisionsDisabled||(e.insideWall=e.wasInsideWall),e.insideWall?(e.wcd=e.wd+this.metrics.collisionMargin,e.wcd>0&&(this.collidingWall=!0,this.collidingWallSide=e.ws,this.collideWallEdge(e))):(e.wcd=e.wd-this.metrics.collisionMargin,e.wcd<0&&(this.collidingWall=!0,this.collidingWallSide=-e.ws,this.collideWallEdge(e))))),e.collidingWallEnd=!1,e.insideWall=e.wasInsideWall),e.wi=d.ground.wi):(e.wi=null,e.insideWall=null,e.collidingWallEnd=!1)}resolveCollisions(e){if(this.didCollidePoint){let s,a;for(let f of this.wheels)if(f.wi&&f.wi==this.didCollidePointIndex){if(s){if(f.insideWall!==s.insideWall){a=f;break}continue}s=f}if(!a)return!1;let t=Math.abs(s.wd/(Math.abs(s.wd)+Math.abs(a.wd)));if(this.collisionPos.copy(s.pWorldPos).lerp(a.pWorldPos,t),d.vecA.copy(s.worldPos).lerp(a.worldPos,t),this.reboundVec.copy(this.collisionPos).sub(d.vecA),this.reboundDir.copy(this.reboundVec).normalize(),this.reboundDir.dot(n.motionDir)>0)return!1;this.comVec.copy(n.midPosition).sub(this.collisionPos),this.posVec.copy(n.position).sub(this.collisionPos),this.comDir.copy(this.comVec).normalize(),this.posDir.copy(this.posVec).normalize(),this.velDirOrth.copy(n.motionDir),this.velDirOrth.x=-n.motionDir.z,this.velDirOrth.z=n.motionDir.x;let r=Math.sign(this.comDir.dot(this.velDirOrth))*-1,c=this.comDir.dot(n.motionDir),g=Math.acos(c)*r*e*this.speedLerp;this.posDir.applyAxisAngle(Gs,-g),this.reboundVec.multiplyScalar(1.5-this.speedLerp*.5),this.reboundVec.length()<e&&this.reboundVec.copy(this.reboundDir).multiplyScalar(e),n.position.copy(this.posDir).multiplyScalar(this.posVec.length()).add(this.collisionPos).add(this.reboundVec),this.orientation.y-=g,this.collisionPos.copy(s.relPos).lerp(a.relPos,t),this.applyChassisUpdate(e);for(let f of this.wheels)this.updateWheelWorldPos(f);return!0}if(this.collidingWheels.length==1){let s=this.collidingWheels[0];this.comVec.copy(s.worldPos).sub(s.collisionVector).sub(n.com).normalize(),this.rotVec.copy(s.worldPos).sub(n.com).normalize(),this.collisionPos.copy(s.relPos);let a=Math.acos(this.comVec.dot(this.rotVec));a*=.5,this.comOrth.set(-this.comVec.z,this.comVec.y,this.comVec.x);let t=Math.sign(this.comOrth.dot(s.collisionVector));this.orientation.y-=t*a,n.position.copy(s.relPos).negate().applyEuler(this.orientation).add(s.worldPos),this.applyChassisUpdate(e);for(let r of this.wheels)this.updateWheelWorldPos(r);return!0}else if(this.collidingWheels.length==2){let s=this.collidingWheels[0],a=this.collidingWheels[1];this.preColA.copy(s.worldPos).sub(s.collisionVector),this.preColB.copy(a.worldPos).sub(a.collisionVector),this.preVec.copy(this.preColA).sub(this.preColB),this.postVec.copy(s.worldPos).sub(a.worldPos),this.preVecDir.copy(this.preVec).normalize(),this.postVecDir.copy(this.postVec).normalize();let t=this.preVecDir.dot(this.postVecDir),r=Math.acos(t),c=1;s.comPos.z<0&&a.comPos.z<0?c*=-1:s.comPos.z>0&&a.comPos.z>0||s.comPos.x<0&&a.comPos.x<0&&(c*=-1);let g=(.5+s.downforce)/(1+s.downforce+a.downforce),f=(this.preVec.length()-this.postVec.length())*g;this.postVecDir.multiplyScalar(f),s.worldPos.sub(this.postVecDir),this.orientation.y-=c*r,n.position.copy(s.relPos).negate().applyEuler(this.orientation).add(s.worldPos),this.collisionPos.copy(s.relPos),this.applyChassisUpdate(e);for(let x of this.wheels)this.updateWheelWorldPos(x);return!0}else return console.warn(this.collidingWheels.length+" colliding wheels"),this.reset(),!1}applyChassisUpdate(e){n.setRotationFromEuler(this.orientation);try{n.updateMatrix(),n.updateMatrixWorld(),this.didCrash=!1}catch(s){if(this.didCrash)throw s.cause="vehicle_matrix",s;se.add("VEHICLE: Experienced update error"),this.reset(),this.didCrash=!0}this.up.set(0,1,0).applyEuler(this.orientation),this.forward.set(1,0,0).applyEuler(this.orientation),this.right.set(0,0,1).applyEuler(this.orientation),n.forwardDir.copy(this.forward),n.com.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase/2).add(n.position),d.vecA.copy(this.up).multiplyScalar(this.metrics.comHeight),n.com.add(d.vecA)}handleInput(e){if(n.hasBoost=n.hasBoost&&(n.hasAccel||n.hasCruiseTarget)&&!this.autodrive,this.inputs.accel=0,this.inputs.drive=0,this.isDriven=this.autodrive&&L.autodriveMode!==q.STEER||n.hasCruiseTarget,this.allowDrive=!this.autodrive||L.autodriveMode!=q.FULL,this.hasManualAccel=!1,this.hasManualBrake=!1,this.steer=0,Je.isCinecam)this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake;else{if(n.hasBoost=!1,I.signal.Forward&&this.allowDrive?(n.hasBoost=!!I.signal.Boost,this.isDriven=!0,this.hasManualAccel=!0,n.direction>=0&&(this.hasForwardDrive=!0),n.hasAccel=!0,!n.hasBoost&&n.direction<0&&!this.hasForwardDrive&&!I.hasScreenAccel?(this.setBrake(!0,I.signal.Forward),this.hasManualBrake=!0):(this.inputs.accel=I.signal.Forward*this.tuning.accel,this.setBrake(!1),this.prevDriveDir=1),this.holdHandbrake=!1):this.hasForwardDrive=!1,I.signal.Backward&&this.allowDrive?(n.hasAccel=!1,n.direction<=0&&!this.braking&&(this.hasRearDrive=!0),this.isDriven=!0,(n.direction>0||this.braking&&n.speed>1)&&!this.hasRearDrive?(this.setBrake(!0,I.signal.Backward),this.hasManualBrake=!0):(this.setBrake(!1),this.inputs.accel=I.signal.Backward*-this.tuning.accel,this.prevDriveDir=-1),this.holdHandbrake=!1):this.hasRearDrive=!1,this.isDriven?this.softBraking&&this.setSoftBrake(!1):(n.hasAccel=!1,this.setBrake(!1),this.setSoftBrake(!0)),this.inputs.stickySteer=I.signal.StickySteer>0?1:0,this.inputs.stickySteer&&I.signal.Handbrake&&!this.inputs.handbrake&&(this.holdHandbrake=!0),this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake,n.hasBoost?(this.boostFactor=Math.max(0,1-this.speedLerp)*2,this.inputs.accel+=this.tuning.accel*this.tuning.boostFactor*this.boostFactor):this.inputs.accel>0&&this.speedLerp<.5&&(this.inputs.accel+=this.tuning.accel*Math.max(0,1-this.speedLerp*2)),d.vecA.set(n.direction,0,0).applyEuler(this.orientation),d.motionDot=n.motionDir.dot(d.vecA),d.motionDot>1&&(d.motionDot=1),d.slipAngle=Math.acos(d.motionDot),n.speed<1?d.slipAngle*=0:n.speed<2&&(d.slipAngle*=n.speed-1),!te.directSteer||!I.hasGamepadInput){d.sl=this.speedLerp*Math.sqrt(L.steerAssist);let s=this.slip*Math.abs(I.signal.Left-I.signal.Right)*L.steerAssist,a=Math.max(this.tuning.peakSlipAngle,this.tuning.maxSteer*(1-d.sl)*(1+s));d.maxSteer=d.maxSteer*.5+.5*a,d.counterSteerFactor=0,L.steerAssist>.8&&(d.counterSteerFactor=Math.min(1,Math.abs(d.slipAngle)/this.peakSlipAngle)*((L.steerAssist-.8)/.2)*(.5+this.spin*.5)),d.steerFactor=1,d.vecB.set(0,0,1).applyEuler(this.orientation),d.steer=d.steerFactor*I.filtered.steer*d.maxSteer-d.slipAngle*Math.sign(n.motionDir.dot(d.vecB))*d.counterSteerFactor,I.hasScreenSteer&&(d.steer*=.5),this.inputs.steer=Math.min(Math.max(-this.tuning.maxSteer,d.steer),this.tuning.maxSteer)}else this.inputs.steer=I.filtered.steer*this.tuning.maxSteer;this.inputs.accel>0&&(this.inputs.accel*=L.speedFactor)}this.autoSteer=0,this.autodrive&&(this.autodriver.update(e),L.autodriveMode!=q.SPEED&&(this.autoSteer=this.autodriver.inputs.steer),L.autodriveMode!=q.STEER&&!this.hasManualAccel&&!this.hasManualBrake&&(this.inputs.accel=this.autodriver.inputs.accel,this.inputs.boost=this.autodriver.inputs.boost,this.isDriven=!0,n.hasBoost=!!this.autodriver.hasBoost,n.hasBoost?this.inputs.accel+=this.tuning.accel*Math.max(0,(1-this.speedLerp)*2):this.inputs.accel>0&&n.speedLerp<.5&&(this.inputs.accel+=this.tuning.accel*Math.max(0,(1-this.speedLerp*2)*2)),this.prevDriveDir=1,this.autodriver.inputs.brake>0?this.setBrake(!0,this.autodriver.inputs.brake):this.setBrake(!1))),n.hasCruiseTarget&&I.signal.Backward==0&&n.direction>0&&!n.hasHandbrake&&(!this.hasManualAccel||this.useMouse)&&(this.prevDriveDir=1,this.inputs.accel=Math.min(this.tuning.accel,Math.max(-this.tuning.reverse,(n.speedControlTarget-n.speed)/e)),this.useMouse&&this.hasBoost&&(this.inputs.accel=this.tuning.accel),this.holdHandbrake=!1),n.hasSpeedLimit&&(this.hasAccel=this.inputs.accel>0,this.inputs.accel=Math.max(-this.tuning.reverse,Math.min(this.inputs.accel,(n.speedControlTarget-n.speed)/e))),!n.hasCruiseTarget&&(!this.autodrive||L.autodriveMode==q.STEER)&&!this.isDriven&&n.direction!=this.prevDriveDir&&n.speed<.1&&(this.holdHandbrake=!0),this.updateSteerState(e),this.updateAccelState(e)}setSoftBrake(e){if(L.softBrakeForce==0){this.softBraking=!1;return}this.softBraking=e,e&&(this.braking=!0)}setBrake(e,s=0){e?(this.braking||(this.brakeLerp=0),this.braking=!0):this.braking=!1,this.inputs.brake=s}setGripFactor(e){this.updatePeakSlipAngle()}updatePeakSlipAngle(){L.gripFactor<0?this.peakSlipAngle=this.tuning.peakSlipAngle/L.gripFactor**2:this.peakSlipAngle=this.tuning.peakSlipAngle/L.gripFactor}setDriveMode(e){switch(this.driveModeFactor=.5,this.wheels[0].hasDrive=!0,this.wheels[1].hasDrive=!0,this.wheels[2].hasDrive=!0,this.wheels[3].hasDrive=!0,this.driveMode=e,e){case qe.FWD:this.driveModeFactor=1,this.wheels[2].hasDrive=!1,this.wheels[3].hasDrive=!1;break;case qe.RWD:this.driveModeFactor=1,this.wheels[0].hasDrive=!1,this.wheels[1].hasDrive=!1;break}}setDriverSide(e){}setAutodrive(e){this.autodrive=e,e&&(this.autodriver.initialise(),this.holdHandbrake=!1,n.hasHandbrake=!1)}collideWallEnd(e){this.collisionsDisabled||(this.didCollide=!0,this.fCollision=!0,e.collidingWallEnd=!0,e.collisionFactor=1+n.speed/2,this.collisionStrength=Math.max(this.collisionStrength,n.speed/10),this.didCollidePoint=!0,this.didCollidePointIndex=e.wi)}collideWallEdge(e){if(this.collisionsDisabled)return;this.didCollide=!0,this.fCollision=!0,e.collisionVector.copy(e.worldPos),d.vecA.set(e.wn.x,0,e.wn.z),e.worldPos.add(d.vecA.multiplyScalar(e.wcd*e.ws)),d.collDot=e.velocityDir.x*e.wn.z+e.velocityDir.z*-e.wn.x;let s=Math.acos(d.collDot),a=e.wcd/Math.tan(s);a*=.02*this.speedLerp,d.vecA.set(e.wn.z,0,-e.wn.x).multiplyScalar(a),e.worldPos.sub(d.vecA),e.collisionFactor=5+n.speed*5,this.collisionStrength=Math.min(1,Math.max(this.collisionStrength,Math.min(1,(1-Math.abs(d.collDot))*5)*e.collisionFactor/50)),this.collidingWheels.push(e),e.collisionVector.sub(e.worldPos).negate()}updateSteerState(e){if(this.steer=this.inputs.steer+this.autoSteer,this.steer=Math.min(Math.max(-n.tuning.maxSteer,this.steer),n.tuning.maxSteer),d.ts=Math.exp(-e/.1)*(1-this.tuning.tyreStiffness),this.effectiveSteer=this.effectiveSteer*d.ts+this.steer*(1-d.ts),d.sa=Math.sin(this.steer),d.ca=Math.cos(this.steer)*this.metrics.wheelBase*2,d.tl=this.metrics.wheelBase*2*d.sa/(d.ca-this.metrics.axleWidth*d.sa),d.tr=this.metrics.wheelBase*2*d.sa/(d.ca+this.metrics.axleWidth*d.sa),this.steerL=Math.atan(d.tl),this.steerR=Math.atan(d.tr),d.sa=Math.sin(this.effectiveSteer),d.ca=Math.cos(this.effectiveSteer)*this.metrics.wheelBase*2,d.tl=this.metrics.wheelBase*2*d.sa/(d.ca-this.metrics.axleWidth*d.sa),d.tr=this.metrics.wheelBase*2*d.sa/(d.ca+this.metrics.axleWidth*d.sa),d.steerL=Math.atan(d.tl),d.steerR=Math.atan(d.tr),this.effectiveSteerL=this.effectiveSteerL*d.ts+d.steerL*(1-d.ts),this.effectiveSteerR=this.effectiveSteerR*d.ts+d.steerR*(1-d.ts),this.steerDifferential=this.metrics.wheelBase/Math.sin(this.effectiveSteerL)/(this.metrics.wheelBase/Math.sin(this.effectiveSteerR))||1,this.rearSteerDifferential=this.metrics.wheelBase/d.tl/(this.metrics.wheelBase/d.tr)||1,this.tuning.lockDiff&&this.slip>0)if(this.slip>.2)this.lockDiffOnlyRear||(this.steerDifferential=1),this.rearSteerDifferential=1;else{let s=this.smoothLerp(this.slip/.2);this.lockDiffOnlyRear||(this.steerDifferential=this.steerDifferential*(1-s)+s),this.rearSteerDifferential=this.rearSteerDifferential*(1-s)+s}}updateAccelState(e){this.inputs.accel>0?this.drive<this.inputs.accel?(this.drive+=this.tuning.jerk*e,this.drive>this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel:this.drive>this.inputs.accel?(this.drive-=this.tuning.jerk*e*2,this.drive<this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel,this.braking&&(this.brakeLerp+=e/this.tuning.brakeResponse,this.brakeLerp>1&&(this.brakeLerp=1),this.inputs.brake==0&&this.softBraking&&(this.inputs.brake=L.softBrakeForce),this.brakeForce=this.inputs.brake*this.tuning.brake*this.brakeLerp),this.powerLerp=Math.min(1,n.speed/(this.tuning.topSpeed*L.speedFactor))}halfLerp(e){return e=e/2+.5,((3-e*2)*e*e-.5)*2}smoothLerp(e){return(3-e*2)*e*e}}o(Oi,"key","classicV3"),o(Oi,"name","ClassicV3");const vA=fe(0),eo=fe(0),to=fe(!1),wA=fe(!1),io=fe(!1),pe={},Ie={},Ee={};function Zt(l){return new Promise((i,e)=>{const s=new Image;s.onload=()=>i(s),s.onerror=e,s.src=l})}async function zd(){Ee.boost=await Zt(Ba),Ee.boostLine=await Zt(Ua),Ee.lock=await Zt(Ha),Ee.autodrive=await Zt(za),Ee.steerLock=await Zt(Wa),Ee.park=await Zt(Ga),Ee.lights=await Zt(Va)}const Wd=Math.PI*.75,Vs=Math.PI,ar=Math.PI*1.25,ht=100,Tt=126,Qt=386,Gd=10,js=55-Gd/2,Zs=116,Gi=ht+54,Vi=56,or=.65,rr="#f4f2ed66",ai="#f4f2ed",Vd="#f4f2ed33",It={steerAssist:.6,counterSteerAssist:0,rearStability:.4,tyreFriction:1.2,kineticFrictionFactor:.6,tyreStiffness:.7,lockDiff:!1,shockTravel:.2,shockForce:3,damping:5,weightFactor:.5},ut=class ut extends Oi{constructor(){super();o(this,"name","Coach");o(this,"geometry",{body:Zh,wheel:jh,interior:Qh,dash:Yh,steer:qh});o(this,"maps",{windscreen:Jh,interior:Xh});o(this,"metrics",{axleWidth:2.2,wheelBase:5.47,wheelWidth:.2,wheelRadius:.42,wheelMass:50,collisionMargin:.1,comHeight:1,boxWidth:2.24,boxLength:5.47});o(this,"tuning",{accel:8,topSpeed:32,reverse:5,brake:12,jerk:100,brakeResponse:.5,boostFactor:1,speedFactor:1,rearStability:.5,corneringFactor:.16,corneringCaution:-1.1,targetDistFactor:1.4,engineRateFactor:.8,engineBoostFactor:.5,engineVolFactor:1.8,peakSlipAngle:.1,steerInterval:3.5,maxSteer:.65,shockTravel:.2,shockForce:4,damping:8,rockInertia:.1,rockFactorFront:.5,rockFactorRear:.5,aeroFactor:.001,drag:.0025,rollResistance:.4,wheelMassFactor:10,weightFactor:.5,maxLinearAccel:20,maxRotAccel:1,tyreFriction:1,kineticFrictionFactor:.4,tyreStiffness:.3,lockDiff:!0,lockDiffOnlyRear:!1,cautionFactor:1,minCautionFactor:.25,steerAssist:.8,counterSteerAssist:.5});o(this,"layout",{headlightPos:{x:7,y:.7,z:.84},headlightTarget:{x:8,y:.6,z:.84},steeringWheelPos:{x:6.58,y:1.28,z:.683},steeringWheelAngle:.8,dashPos:{x:0,y:0,z:.683},cockpitLerp:1.25});o(this,"interiorObjects",{});o(this,"exteriorObjects",{});o(this,"dashCanvas");o(this,"dashCanvasCtx");o(this,"dashCanvasMat");o(this,"dashCanvasTex");o(this,"onTuningConfig",e=>{this.tuning={...this.tuning,...e};for(let s of this.wheels)s.travel=this.tuning.shockTravel});o(this,"speedConversion",1);o(this,"distConversion",1);o(this,"onUnitsChanged",()=>{this.speedConversion=Pa[L.units],this.distConversion=vi[L.units],this.speedLabel=L.units==0?"KPH":"MPH",this.distLabel=L.units==0?"KM":"MILES",this.handleSpeedControl()});o(this,"scActive",!0);o(this,"scMode",0);o(this,"scTarget",20);o(this,"scTargetProp",.5);o(this,"handleSpeedControl",()=>{this.scActive=V.speedControl,this.scActive&&(this.scMode=V.speedControlMode==ys.Cruise?"CRUISE":"LIMIT",this.scTargetProp=V.speedControlTargetMS/(n.tuning.topSpeed*1.1))});o(this,"autodriveLabel","DRIVE");o(this,"onAutodriveMode",e=>{e==q.FULL?this.autodriveLabel="AUTODRIVE":e==q.SPEED?this.autodriveLabel="AUTOSPEED":e==q.STEER&&(this.autodriveLabel="AUTOSTEER")});o(this,"hasAutodrive",!1);o(this,"onAutodrive",e=>{this.hasAutodrive=e});o(this,"seenIndex",-10);o(this,"wormPoints",[]);o(this,"wormPointsRight",[]);o(this,"wormHorizon",14);o(this,"wormScale",.4);o(this,"wormTargetAngle",null);o(this,"driveModeLabels",["AWD","FWD","RWD"]);o(this,"doUpdateScreen",!0);o(this,"dashPower",0);o(this,"seenDist",0);o(this,"seenDistZeroes","");o(this,"seenDistSpaces","");ut.tuningConfig.addListener("any",this.onTuningConfig),L.addListener("units",this.onUnitsChanged),V.addListener("speedControl",this.handleSpeedControl),V.addListener("speedControlMode",this.handleSpeedControl),V.addListener("speedControlTargetMS",this.handleSpeedControl),pi.addListener(this.onAutodrive),L.addListener("autodriveMode",this.onAutodriveMode),this.prepMetrics()}destroy(){super.destroy(),ut.tuningConfig.removeListener("any",this.onTuningConfig),L.removeListener("units",this.onUnitsChanged),V.removeListener("speedControl",this.handleSpeedControl),V.removeListener("speedControlMode",this.handleSpeedControl),V.removeListener("speedControlTargetMS",this.handleSpeedControl),pi.removeListener(this.onAutodrive),L.removeListener("autodriveMode",this.onAutodriveMode)}async init(){this.elementsToLoad>0&&se.add("VEHICLE: Attempting to load new vehicle before prev initialisation has completed");for(let s in this.maps)z.setMapForMaterial(s,this.maps[s]);z.windscreen.color.setHex(5596791),z.metal.color.setHex(16777215),z.metal.specular.setHex(16777215);const e=new Oa;pe.body?(n.container.add(pe.body),this.exteriorObjects.body=pe.body):(this.elementsToLoad++,e.load(this.geometry.body,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0))}),this.exteriorObjects.body=a,a.frustumCulled=!1,n.container.add(a),pe.body=a,this.onElementLoaded()})),pe.wheel?this.wheelObj=pe.wheel:(this.elementsToLoad++,e.load(this.geometry.wheel,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0),t.position.z-=this.metrics.wheelWidth,t.scale.set(this.metrics.wheelRadius,this.metrics.wheelRadius,this.metrics.wheelRadius))}),this.wheelObj=a,a.frustumCulled=!1,pe.wheel=a,this.onElementLoaded()})),pe.interior?(n.container.add(pe.interior),this.interiorObjects.interior=pe.interior):(this.elementsToLoad++,e.load(this.geometry.interior,s=>{let a=s.scene;z.setOnObject(a),n.container.add(a),this.interiorObjects.interior=a,a.frustumCulled=!1,pe.interior=a,this.onElementLoaded()})),pe.dash?(n.container.add(pe.dash),this.interiorObjects.dash=pe.dash,this.dashCanvasMat=Ie.mat,this.dashCanvas=Ie.canvas,this.dashCanvasCtx=Ie.ctx,this.dashCanvasTex=Ie.tex,this.wormGradient=Ie.wormGradient,this.speedGradient=Ie.speedGradient,this.powerGradient=Ie.powerGradient):(this.elementsToLoad++,e.load(this.geometry.dash,s=>{let a=s.scene;a.traverse(t=>{if(t.isMesh)if(t.name=="coach_dashboard_screen"){let r=document.createElement("canvas"),c=r.getContext("2d");r.width=512,r.height=512;let g=new Ea(r);g.colorSpace=Bt,g.flipY=!1,g.minFilter=Ut,g.magFilter=Ut,g.generateMipmaps=!1,c.fontVariantNumeric="slashed-zero",this.wormGradient=c.createLinearGradient(0,88,0,16),this.wormGradient.addColorStop(.2,"#f4f2edff"),this.wormGradient.addColorStop(1,"#f4f2ed00"),this.speedGradient=c.createConicGradient(Wd-.01,Tt,ht),this.speedGradient.addColorStop(0,"rgb(10, 105, 164)"),this.speedGradient.addColorStop(.3,"rgb(55, 192, 255)"),this.speedGradient.addColorStop(.5,"rgb(230, 205, 107)"),this.speedGradient.addColorStop(.6,"rgb(225, 120, 45)"),this.powerGradient=c.createConicGradient(Vs-.01,Qt,ht),this.powerGradient.addColorStop(0,"rgb(23, 161, 60)"),this.powerGradient.addColorStop(.25,"rgb(90, 197, 88)"),this.powerGradient.addColorStop(.5,"rgb(245, 207, 55)"),this.powerGradient.addColorStop(.6,"rgb(225, 51, 45)");let f=new K({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:1,transparent:!0,fog:!1});f.needsCameraPosition=!0,this.dashCanvasMat=f,this.dashCanvas=r,this.dashCanvasCtx=c,this.dashCanvasTex=g,t.material=f,Ie.canvas=r,Ie.mat=f,Ie.tex=g,Ie.ctx=c,Ie.wormGradient=this.wormGradient,Ie.speedGradient=this.speedGradient,Ie.powerGradient=this.powerGradient}else t.material=new K({map:U(Kh),fog:!1}),z.makeShadowMaterial(t.material),t.material.map.flipY=!1,t.material.needsCameraPosition=!0}),a.position.copy(this.layout.dashPos),this.interiorObjects.dash=a,a.frustumCulled=!1,n.container.add(a),pe.dash=a,this.onElementLoaded()})),pe.steer?(n.container.add(pe.steer),this.interiorObjects.steeringWheel=pe.steer):(this.elementsToLoad++,e.load(this.geometry.steer,s=>{let a=s.scene;z.setOnObject(a),a.rotation.order="YZX",a.rotation.z=-this.layout.steeringWheelAngle,a.position.copy(this.layout.steeringWheelPos),this.interiorObjects.steeringWheel=a,a.frustumCulled=!1,n.container.add(a),pe.steer=a,this.onElementLoaded()})),await zd(),this.onInit()}onReady(){super.onReady(),this.handleSpeedControl(),this.setDriverSide(n.driverSide),this.updateInteriorVisibility()}setShowWheel(e){this.updateInteriorVisibility()}setInterior(){this.updateInteriorVisibility()}setDriverSide(e){this.ready&&(e==Na.LEFT?(this.interiorObjects.interior.scale.z=-1,this.interiorObjects.steeringWheel.position.z=-this.layout.steeringWheelPos.z,this.interiorObjects.dash.position.z=-this.layout.dashPos.z):(this.interiorObjects.interior.scale.z=1,this.interiorObjects.steeringWheel.position.z=this.layout.steeringWheelPos.z,this.interiorObjects.dash.position.z=this.layout.dashPos.z))}updateInteriorVisibility(){if(this.ready){for(let e in this.interiorObjects)this.interiorObjects[e].visible=n.isInterior;this.interiorObjects.steeringWheel.visible=this.interiorObjects.steeringWheel.visible&&n.showSteeringWheel;for(let e in this.exteriorObjects)this.exteriorObjects[e].visible=!n.isInterior;z.setInterior(n.isInterior)}}updateVisuals(){this.ready&&(n.isInterior&&this.updateDashScreen(),n.inAutodrive?this.interiorObjects.steeringWheel.rotation.x=this.interiorObjects.steeringWheel.rotation.x*.9+L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer)*.1:this.interiorObjects.steeringWheel.rotation.x=L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer),z.setBrakeLights(this.braking,this.softBraking))}updateWormPoints(){let e=ja(n.position.x,n.position.z,v.vehicleNode),s=v.vehicleNode.next,a=s.next.p.x-s.p.x,t=s.next.p.z-s.p.z,r={x:s.p.x+a*e,z:s.p.z+t*e},c={x:256,y:80},g=s.i+this.wormHorizon;this.wormPoints.length=0,this.wormPointsRight.length=0;let f=s.a-s.da*e;if(this.wormTargetAngle==null)this.wormTargetAngle=-(f+Math.HALFPI);else{let S=-(s.a+Math.HALFPI);S-this.wormTargetAngle<-Math.PI?this.wormTargetAngle-=Math.TAU:S-this.wormTargetAngle>Math.PI&&(this.wormTargetAngle+=Math.TAU),this.wormTargetAngle=this.wormTargetAngle*.9+.1*-(f+Math.HALFPI)}let x=Math.cos(this.wormTargetAngle),w=Math.sin(this.wormTargetAngle);for(;s.i!==g;){let S=s.next.p.x-s.p.x,D=s.next.p.z-s.p.z,C=s.p.x+S*e-r.x,k=s.p.z+D*e-r.z;C*=this.wormScale,k*=this.wormScale;let T=C*x-k*w,P=C*w+k*x,B=40+-P/90*30;if(Math.abs(T)>B||P<-66)break;this.wormPoints.push([T+c.x,P+c.y]),s=s.next}this.seenIndex=v.vehicleIndex}updateDashScreen(){if(this.doUpdateScreen=!this.doUpdateScreen,!this.doUpdateScreen)return;let e=this.dashCanvasCtx;if(e.clearRect(0,0,512,200),this.updateWormPoints(),this.wormPoints.length){e.strokeStyle=this.wormGradient,e.globalAlpha=1,e.lineCap="round",e.lineWidth=6,e.beginPath(),e.moveTo(this.wormPoints[0][0],this.wormPoints[0][1]);for(let N of this.wormPoints)e.lineTo(N[0],N[1]);e.stroke(),e.globalAlphaa=1,e.lineCap="butt"}e.beginPath(),e.lineWidth=8;let s=Math.PI*.75,a=Math.max(0,Math.min(1,n.speed/(n.tuning.topSpeed*1.1)));a<.01&&(a=0),e.strokeStyle=a==1?"rgb(249, 63, 56)":this.speedGradient,e.arc(Tt,ht,js,s,s+a*ar),e.stroke(),e.font="36px Sono",e.fillStyle="#f4f2ed",e.textAlign="center",e.textBaseline="middle",e.fillText(Math.round(n.speed*this.speedConversion),Tt,ht),e.font="12px Sono",e.fillStyle=rr,e.textAlign="center",e.textBaseline="middle",e.fillText(this.speedLabel,Tt,ht+24),e.beginPath(),e.lineWidth=8;let t=this.autodrive&&L.autodriveMode!==q.STEER?this.autodriver.inputs.accel/n.tuning.accel:0,r=0;n.direction>0?r=Math.max(0,I.signal.Forward-I.signal.Backward):r=Math.max(0,I.signal.Backward-I.signal.Forward)*.33;let c=0;n.hasCruiseTarget&&(c=this.inputs.accel/this.tuning.accel);let g=Math.min(1,Math.max(t,r,c));if(I.signal.Forward>this.dashPower?this.dashPower=this.dashPower*.8+.2*g:this.dashPower=this.dashPower*.9+.1*g,this.dashPower<.01&&(this.dashPower=0),e.arc(Qt,ht,js,Vs,Vs+this.dashPower*ar),e.strokeStyle=n.hasBoost?"rgb(225, 51, 45)":this.powerGradient,e.stroke(),n.hasBoost?e.drawImage(Ee.boost,Qt-18,ht-18,36,36):e.drawImage(Ee.boostLine,Qt-18,ht-18,36,36),this.scActive){e.globalAlpha=or,e.font="12px Sono",e.fillStyle=ai,e.textAlign="center",e.textBaseline="middle",e.fillText(this.scMode,Tt+Vi,Gi),e.drawImage(Ee.lock,Tt+Vi-13,Gi-26,26,26),e.globalAlpha=1,e.beginPath(),e.lineWidth=18;let N=s+this.scTargetProp*Math.PI*1.25;e.arc(Tt,ht,js,N-.025,N+.025),e.strokeStyle=ai,e.stroke()}this.hasAutodrive&&(e.globalAlpha=or,e.font="12px Sono",e.fillStyle=ai,e.textAlign="center",e.textBaseline="middle",e.fillText(this.autodriveLabel,Qt-Vi,Gi),e.drawImage(Ee.autodrive,Qt-Vi-13,Gi-26,26,26),e.globalAlpha=1);let f=Math.floor(vt(eo)*this.distConversion)%1e5;if(f!==this.seenDist){let N="",j="";f<1e4&&(N+="0",j+=" ",f<1e3&&(N+="0",j+=" ",f<100&&(N+="0",j+=" ",f<10&&(N+="0",j+=" ")))),N+=" ",f>=10&&(N+=" ",f>=100&&(N+=" ",f>=1e3&&(N+=" "))),this.seenDist=f,this.seenDistZeroes=N,this.seenDistSpaces=j}e.font="22px Sono",e.fillStyle=Vd,e.textAlign="center",e.textBaseline="middle",e.fillText(this.seenDistZeroes,256,Zs),e.fillStyle=ai,e.fillText(this.seenDistSpaces+this.seenDist,256,Zs),e.font="12px Sono",e.fillStyle=rr,e.textAlign="center",e.textBaseline="middle",e.fillText(this.distLabel,256,Zs+18);let x=new Date,w=x.getHours();w<10&&(w="0"+w);let S=x.getMinutes();S<10&&(S="0"+S);let D=w+":"+S;e.font="12px Sono",e.fillStyle=ai,e.textAlign="center",e.textBaseline="middle",e.fillText(D,256,173);const C=.65;e.globalAlpha=C;const k=162,T=20,P=T/2,B=Tt-58-P,O=Qt+58-P,W=T+18;vt(to)&&e.drawImage(Ee.park,B,k-P,T,T),vt(io)&&e.drawImage(Ee.steerLock,B+W,k-P,T,T),e.font="12px Sono",e.fillStyle=ai,e.textAlign="center",e.textBaseline="middle",e.fillText(this.driveModeLabels[this.driveMode],O+P-W,k),n.headlights&&e.drawImage(Ee.lights,O,k-P,T,T),e.globalAlpha=1,this.dashCanvasTex.needsUpdate=!0}};o(ut,"key","coach"),o(ut,"name","Coach"),o(ut,"icon","/img/ico_veh_coach.svg"),o(ut,"tuningConfigMeta",{steerAssist:{key:"steerAssist",readable:"Steer assist",label:"Steer assist",type:E.Range,default:It.steerAssist,min:0,max:1,precision:1},counterSteerAssist:{key:"counterSteerAssist",readable:"Counter-steer assist",label:"Counter-steer assist",type:E.Range,default:It.counterSteerAssist,min:0,max:1,precision:1},weightFactor:{key:"weightFactor",readable:"Weight factor",label:"Inertia factor",type:E.Range,default:.5,min:0,max:1,precision:2},rearStability:{key:"rearStability",readable:"Rear stability",label:"Rear stability",type:E.Range,default:It.rearStability,min:0,max:1,precision:1},tyreFriction:{key:"tyreFriction",readable:"Tyre Grip",label:"Tyre Grip",type:E.Range,default:It.tyreFriction,min:.2,max:4,precision:1},kineticFrictionFactor:{key:"kineticFrictionFactor",readable:"Tyre Slip Factor",label:"Tyre Slip Factor",type:E.Range,default:It.kineticFrictionFactor,min:.1,max:1,precision:1},tyreStiffness:{key:"tyreStiffness",readable:"Tyre Stiffness",label:"Tyre Stiffness",type:E.Range,default:It.tyreStiffness,min:.1,max:1,precision:1},lockDiff:{key:"lockDiff",readable:"Locked diff",label:"Locked diff",type:E.Boolean,default:It.lockDiff}}),o(ut,"tuningConfig",new Ve("Coach",It)),o(ut,"cameras",{...J,Chase:{...J.Chase,pitch:{near:.45,far:.35},range:{min:-2,near:8,far:10,max:40},farSpeed:32},ChaseFar:{...J.ChaseFar,pitch:{near:.5,far:.4},range:{min:-10,near:16,far:19,max:31}},Bonnet:{...J.Bonnet,pitch:{near:.1,far:.1},yOffset:{near:1.5,far:1.5},posOffset:[7.2,.45,0],range:{min:0,near:0,far:0,max:0},farSpeed:32,smoothFactor:.3,hideVehicle:!0,yawLimit:1.2,minPitch:-.5,maxPitch:.5,static:!1,invertDrag:!0,firstPerson:!0},Bumper:{...J.Bumper,pitch:{near:-0,far:-0},yOffset:{near:.3,far:.3},posOffset:[7.2,.4,0],range:{min:0,near:0,far:0,max:0},farSpeed:32,smoothFactor:.3,hideVehicle:!0},FirstPerson:{...J.FirstPerson,yOffset:{near:.7,far:.7},posOffset:[6.25,1.52,.683],seatOffsets:[[1.9,2.1,.85],[-1.4,2.1,0],[5.5,2.1,-.85]],pitch:{near:.02,far:.02},firstPerson:!0}});let da=ut;const jd=""+new URL("../assets/coupe_main.7ad3201a.glb",import.meta.url).href,Zd=""+new URL("../assets/coupe_interior.60e5599c.glb",import.meta.url).href,Qd=""+new URL("../assets/coupe_dash.34d225ab.glb",import.meta.url).href,Xd=""+new URL("../assets/coach_dash_map.74f3bfb1.webp",import.meta.url).href,Yd=""+new URL("../assets/coach_steer.a5209215.glb",import.meta.url).href,Kd=""+new URL("../assets/coach_wheel.a6e64795.glb",import.meta.url).href,qd=""+new URL("../assets/coupe_map.76d2e800.jpg",import.meta.url).href,Jd=""+new URL("../assets/coupe_interior_map.8845aaf1.webp",import.meta.url).href,$d=""+new URL("../assets/coupe_window.2879fa2c.webp",import.meta.url).href,Ae={},Fe={},ji={steerAssist:.8,counterSteerAssist:0,rearStability:.5,tyreFriction:1.6,kineticFrictionFactor:.85,tyreStiffness:1,lockDiff:!1,shockTravel:.12,shockForce:3,damping:8,weightFactor:.15,wheelMassFactor:.2},Ne={};function Xt(l){return new Promise((i,e)=>{const s=new Image;s.onload=()=>i(s),s.onerror=e,s.src=l})}async function ec(){Ne.boost=await Xt(Ba),Ne.boostLine=await Xt(Ua),Ne.lock=await Xt(Ha),Ne.autodrive=await Xt(za),Ne.steerLock=await Xt(Wa),Ne.park=await Xt(Ga),Ne.lights=await Xt(Va)}const tc=Math.PI*.75,Qs=Math.PI,nr=Math.PI*1.25,dt=100,Ft=126,Yt=386,ic=10,Xs=55-ic/2,Ys=116,Zi=dt+54,Qi=56,lr=.65,hr="#f4f2ed66",oi="#f4f2ed",sc="#f4f2ed33",yt=class yt extends Oi{constructor(){super();o(this,"name","Coupe");o(this,"geometry",{body:jd,wheel:Kd,interior:Zd,dash:Qd,steer:Yd});o(this,"maps",{map:qd,interior:Jd,windscreen:$d});o(this,"layout",{headlightPos:{x:3.1,y:.7,z:.64},headlightTarget:{x:4.1,y:.55,z:.74},steeringWheelPos:{x:1.75,y:.82,z:.321},steeringWheelAngle:.3,dashPos:{x:0,y:0,z:.32},cockpitLerp:.4});o(this,"interiorObjects",{});o(this,"exteriorObjects",{});o(this,"dashCanvas");o(this,"dashCanvasCtx");o(this,"dashCanvasMat");o(this,"dashCanvasTex");o(this,"onTuningConfig",e=>{this.tuning={...this.tuning,...e};for(let s of this.wheels)s.travel=this.tuning.shockTravel});o(this,"speedConversion",1);o(this,"distConversion",1);o(this,"onUnitsChanged",()=>{this.speedConversion=Pa[L.units],this.distConversion=vi[L.units],this.speedLabel=L.units==0?"KPH":"MPH",this.distLabel=L.units==0?"KM":"MILES",this.handleSpeedControl()});o(this,"scActive",!0);o(this,"scMode",0);o(this,"scTarget",20);o(this,"scTargetProp",.5);o(this,"handleSpeedControl",()=>{this.scActive=V.speedControl,this.scActive&&(this.scMode=V.speedControlMode==ys.Cruise?"CRUISE":"LIMIT",this.scTargetProp=V.speedControlTargetMS/(n.tuning.topSpeed*1.1))});o(this,"autodriveLabel","DRIVE");o(this,"onAutodriveMode",e=>{e==q.FULL?this.autodriveLabel="AUTODRIVE":e==q.SPEED?this.autodriveLabel="AUTOSPEED":e==q.STEER&&(this.autodriveLabel="AUTOSTEER")});o(this,"hasAutodrive",!1);o(this,"onAutodrive",e=>{this.hasAutodrive=e});o(this,"seenIndex",-10);o(this,"wormPoints",[]);o(this,"wormPointsRight",[]);o(this,"wormHorizon",14);o(this,"wormScale",.4);o(this,"wormTargetAngle",null);o(this,"driveModeLabels",["AWD","FWD","RWD"]);o(this,"doUpdateScreen",!0);o(this,"dashPower",0);o(this,"seenDist",0);o(this,"seenDistZeroes","");o(this,"seenDistSpaces","");yt.tuningConfig.addListener("any",this.onTuningConfig),L.addListener("units",this.onUnitsChanged),V.addListener("speedControl",this.handleSpeedControl),V.addListener("speedControlMode",this.handleSpeedControl),V.addListener("speedControlTargetMS",this.handleSpeedControl),pi.addListener(this.onAutodrive),L.addListener("autodriveMode",this.onAutodriveMode),this.prepMetrics()}destroy(){super.destroy(),yt.tuningConfig.removeListener("any",this.onTuningConfig),L.removeListener("units",this.onUnitsChanged),V.removeListener("speedControl",this.handleSpeedControl),V.removeListener("speedControlMode",this.handleSpeedControl),V.removeListener("speedControlTargetMS",this.handleSpeedControl),pi.removeListener(this.onAutodrive),L.removeListener("autodriveMode",this.onAutodriveMode)}async init(){this.elementsToLoad>0&&se.add("VEHICLE: Attempting to load new vehicle before prev initialisation has completed");for(let s in this.maps)z.setMapForMaterial(s,this.maps[s]);z.windscreen.color.setHex(5596791),z.metal.color.setHex(16777215),z.metal.specular.setHex(16777215);const e=new Oa;Ae.body?(n.container.add(Ae.body),this.exteriorObjects.body=Ae.body):(this.elementsToLoad++,e.load(this.geometry.body,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0))}),this.exteriorObjects.body=a,a.frustumCulled=!1,a.position.y+=.02,n.container.add(a),Ae.body=a,this.onElementLoaded()})),Ae.wheel?this.wheelObj=Ae.wheel:(this.elementsToLoad++,e.load(this.geometry.wheel,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0),t.position.z-=this.metrics.wheelWidth/2,t.scale.set(this.metrics.wheelRadius,this.metrics.wheelRadius,this.metrics.wheelRadius))}),this.wheelObj=a,a.frustumCulled=!1,Ae.wheel=a,this.onElementLoaded()})),Ae.interior?(n.container.add(Ae.interior),this.interiorObjects.interior=Ae.interior):(this.elementsToLoad++,e.load(this.geometry.interior,s=>{let a=s.scene;z.setOnObject(a),n.container.add(a),this.interiorObjects.interior=a,a.frustumCulled=!1,Ae.interior=a,this.onElementLoaded()})),Ae.dash?(n.container.add(Ae.dash),this.interiorObjects.dash=Ae.dash,this.dashCanvasMat=Fe.mat,this.dashCanvas=Fe.canvas,this.dashCanvasCtx=Fe.ctx,this.dashCanvasTex=Fe.tex,this.wormGradient=Fe.wormGradient,this.speedGradient=Fe.speedGradient,this.powerGradient=Fe.powerGradient):(this.elementsToLoad++,e.load(this.geometry.dash,s=>{let a=s.scene;a.traverse(t=>{if(t.isMesh)if(t.name=="coupe_dashboard_screen"){let r=document.createElement("canvas"),c=r.getContext("2d");r.width=512,r.height=512;let g=new Ea(r);g.colorSpace=Bt,g.flipY=!1,g.minFilter=Ut,g.magFilter=Ut,g.generateMipmaps=!1,c.fontVariantNumeric="slashed-zero",this.wormGradient=c.createLinearGradient(0,88,0,16),this.wormGradient.addColorStop(.2,"#f4f2edff"),this.wormGradient.addColorStop(1,"#f4f2ed00"),this.speedGradient=c.createConicGradient(tc-.01,Ft,dt),this.speedGradient.addColorStop(0,"rgb(10, 105, 164)"),this.speedGradient.addColorStop(.3,"rgb(55, 192, 255)"),this.speedGradient.addColorStop(.5,"rgb(230, 205, 107)"),this.speedGradient.addColorStop(.6,"rgb(225, 120, 45)"),this.powerGradient=c.createConicGradient(Qs-.01,Yt,dt),this.powerGradient.addColorStop(0,"rgb(23, 161, 60)"),this.powerGradient.addColorStop(.25,"rgb(90, 197, 88)"),this.powerGradient.addColorStop(.5,"rgb(245, 207, 55)"),this.powerGradient.addColorStop(.6,"rgb(225, 51, 45)");let f=new K({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:1,transparent:!0,fog:!1});f.needsCameraPosition=!0,this.dashCanvasMat=f,this.dashCanvas=r,this.dashCanvasCtx=c,this.dashCanvasTex=g,t.material=f,Fe.canvas=r,Fe.mat=f,Fe.tex=g,Fe.ctx=c,Fe.wormGradient=this.wormGradient,Fe.speedGradient=this.speedGradient,Fe.powerGradient=this.powerGradient}else t.material=new K({map:U(Xd),fog:!1}),z.makeShadowMaterial(t.material),t.material.map.flipY=!1,t.material.needsCameraPosition=!0}),a.position.copy(this.layout.dashPos),this.interiorObjects.dash=a,a.frustumCulled=!1,n.container.add(a),Ae.dash=a,this.onElementLoaded()})),Ae.steer?(n.container.add(Ae.steer),this.interiorObjects.steeringWheel=Ae.steer):(this.elementsToLoad++,e.load(this.geometry.steer,s=>{let a=s.scene;z.setOnObject(a),a.rotation.order="YZX",a.rotation.z=-this.layout.steeringWheelAngle,a.position.copy(this.layout.steeringWheelPos),this.interiorObjects.steeringWheel=a,a.frustumCulled=!1,n.container.add(a),Ae.steer=a,this.onElementLoaded()})),await ec(),this.onInit()}onReady(){super.onReady(),this.handleSpeedControl(),this.updateInteriorVisibility()}setShowWheel(e){this.updateInteriorVisibility()}setInterior(){this.updateInteriorVisibility()}setDriverSide(e){this.ready&&(e==Na.LEFT?(this.interiorObjects.interior.scale.z=-1,this.interiorObjects.steeringWheel.position.z=-this.layout.steeringWheelPos.z,this.interiorObjects.dash.position.z=-this.layout.dashPos.z):(this.interiorObjects.interior.scale.z=1,this.interiorObjects.steeringWheel.position.z=this.layout.steeringWheelPos.z,this.interiorObjects.dash.position.z=this.layout.dashPos.z))}updateInteriorVisibility(){if(this.ready){for(let e in this.interiorObjects)this.interiorObjects[e].visible=n.isInterior;this.interiorObjects.steeringWheel.visible=this.interiorObjects.steeringWheel.visible&&L.showWheel;for(let e in this.exteriorObjects)this.exteriorObjects[e].visible=!n.isInterior;z.setInterior(n.isInterior)}}updateVisuals(){this.ready&&(n.isInterior&&this.updateDashScreen(),n.inAutodrive?this.interiorObjects.steeringWheel.rotation.x=this.interiorObjects.steeringWheel.rotation.x*.8+L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer)*.2:this.interiorObjects.steeringWheel.rotation.x=L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer),z.setBrakeLights(this.braking,this.softBraking))}updateWormPoints(){let e=ja(n.position.x,n.position.z,v.vehicleNode),s=v.vehicleNode.next,a=s.next.p.x-s.p.x,t=s.next.p.z-s.p.z,r={x:s.p.x+a*e,z:s.p.z+t*e},c={x:256,y:80},g=s.i+this.wormHorizon;this.wormPoints.length=0,this.wormPointsRight.length=0;let f=s.a-s.da*e;if(this.wormTargetAngle==null)this.wormTargetAngle=-(f+Math.HALFPI);else{let S=-(s.a+Math.HALFPI);S-this.wormTargetAngle<-Math.PI?this.wormTargetAngle-=Math.TAU:S-this.wormTargetAngle>Math.PI&&(this.wormTargetAngle+=Math.TAU),this.wormTargetAngle=this.wormTargetAngle*.9+.1*-(f+Math.HALFPI)}let x=Math.cos(this.wormTargetAngle),w=Math.sin(this.wormTargetAngle);for(;s.i!==g;){let S=s.next.p.x-s.p.x,D=s.next.p.z-s.p.z,C=s.p.x+S*e-r.x,k=s.p.z+D*e-r.z;C*=this.wormScale,k*=this.wormScale;let T=C*x-k*w,P=C*w+k*x,B=40+-P/90*30;if(Math.abs(T)>B||P<-66)break;this.wormPoints.push([T+c.x,P+c.y]),s=s.next}this.seenIndex=v.vehicleIndex}updateDashScreen(){if(this.doUpdateScreen=!this.doUpdateScreen,!this.doUpdateScreen)return;let e=this.dashCanvasCtx;if(e.clearRect(0,0,512,200),this.updateWormPoints(),this.wormPoints.length){e.strokeStyle=this.wormGradient,e.globalAlpha=1,e.lineCap="round",e.lineWidth=6,e.beginPath(),e.moveTo(this.wormPoints[0][0],this.wormPoints[0][1]);for(let N of this.wormPoints)e.lineTo(N[0],N[1]);e.stroke(),e.globalAlphaa=1,e.lineCap="butt"}e.beginPath(),e.lineWidth=8;let s=Math.PI*.75,a=Math.max(0,Math.min(1,n.speed/(n.tuning.topSpeed*1.1)));a<.01&&(a=0),e.strokeStyle=a==1?"rgb(249, 63, 56)":this.speedGradient,e.arc(Ft,dt,Xs,s,s+a*nr),e.stroke(),e.font="36px Sono",e.fillStyle="#f4f2ed",e.textAlign="center",e.textBaseline="middle",e.fillText(Math.round(n.speed*this.speedConversion),Ft,dt),e.font="12px Sono",e.fillStyle=hr,e.textAlign="center",e.textBaseline="middle",e.fillText(this.speedLabel,Ft,dt+24),e.beginPath(),e.lineWidth=8;let t=this.autodrive&&L.autodriveMode!==q.STEER?this.autodriver.inputs.accel/n.tuning.accel:0,r=0;n.direction>0?r=Math.max(0,I.signal.Forward-I.signal.Backward):r=Math.max(0,I.signal.Backward-I.signal.Forward)*.33;let c=0;n.hasCruiseTarget&&(c=this.inputs.accel/this.tuning.accel);let g=Math.min(1,Math.max(t,r,c));if(I.signal.Forward>this.dashPower?this.dashPower=this.dashPower*.8+.2*g:this.dashPower=this.dashPower*.9+.1*g,this.dashPower<.01&&g<.01&&(this.dashPower=0),e.arc(Yt,dt,Xs,Qs,Qs+this.dashPower*nr),e.strokeStyle=n.hasBoost?"rgb(225, 51, 45)":this.powerGradient,e.stroke(),n.hasBoost?e.drawImage(Ne.boost,Yt-18,dt-18,36,36):e.drawImage(Ne.boostLine,Yt-18,dt-18,36,36),this.scActive){e.globalAlpha=lr,e.font="12px Sono",e.fillStyle=oi,e.textAlign="center",e.textBaseline="middle",e.fillText(this.scMode,Ft+Qi,Zi),e.drawImage(Ne.lock,Ft+Qi-13,Zi-26,26,26),e.globalAlpha=1,e.beginPath(),e.lineWidth=18;let N=s+this.scTargetProp*Math.PI*1.25;e.arc(Ft,dt,Xs,N-.025,N+.025),e.strokeStyle=oi,e.stroke()}this.hasAutodrive&&(e.globalAlpha=lr,e.font="12px Sono",e.fillStyle=oi,e.textAlign="center",e.textBaseline="middle",e.fillText(this.autodriveLabel,Yt-Qi,Zi),e.drawImage(Ne.autodrive,Yt-Qi-13,Zi-26,26,26),e.globalAlpha=1);let f=Math.floor(vt(eo)*this.distConversion)%1e5;if(f!==this.seenDist){let N="",j="";f<1e4&&(N+="0",j+=" ",f<1e3&&(N+="0",j+=" ",f<100&&(N+="0",j+=" ",f<10&&(N+="0",j+=" ")))),N+=" ",f>=10&&(N+=" ",f>=100&&(N+=" ",f>=1e3&&(N+=" "))),this.seenDist=f,this.seenDistZeroes=N,this.seenDistSpaces=j}e.font="22px Sono",e.fillStyle=sc,e.textAlign="center",e.textBaseline="middle",e.fillText(this.seenDistZeroes,256,Ys),e.fillStyle=oi,e.fillText(this.seenDistSpaces+this.seenDist,256,Ys),e.font="12px Sono",e.fillStyle=hr,e.textAlign="center",e.textBaseline="middle",e.fillText(this.distLabel,256,Ys+18);let x=new Date,w=x.getHours();w<10&&(w="0"+w);let S=x.getMinutes();S<10&&(S="0"+S);let D=w+":"+S;e.font="12px Sono",e.fillStyle=oi,e.textAlign="center",e.textBaseline="middle",e.fillText(D,256,173);const C=.65;e.globalAlpha=C;const k=162,T=20,P=T/2,B=Ft-58-P,O=Yt+58-P,W=T+18;vt(to)&&e.drawImage(Ne.park,B,k-P,T,T),vt(io)&&e.drawImage(Ne.steerLock,B+W,k-P,T,T),e.font="12px Sono",e.fillStyle=oi,e.textAlign="center",e.textBaseline="middle",e.fillText(this.driveModeLabels[this.driveMode],O+P-W,k),n.headlights&&e.drawImage(Ne.lights,O,k-P,T,T),e.globalAlpha=1,this.dashCanvasTex.needsUpdate=!0}};o(yt,"key","coupe"),o(yt,"name","Coupe"),o(yt,"tuningConfigMeta",{steerAssist:{key:"steerAssist",label:"Steer assist",desc:"Narrows steering range as speed increases",type:E.Range,default:.5,min:0,max:1,precision:1},counterSteerAssist:{key:"counterSteerAssist",readable:"Counter-steer assist",label:"Counter-steer assist",desc:"Attempts to correct for spins",type:E.Range,default:ji.counterSteerAssist,min:0,max:1,precision:1},weightFactor:{key:"weightFactor",readable:"Inertia factor",label:"Inertia factor",desc:"Inertia of chassis",type:E.Range,default:ji.weightFactor,min:0,max:.9,precision:2},rearStability:{key:"rearStability",readable:"Rear stability",label:"Rear stability",desc:"Reduces tendency for rear to slip out",type:E.Range,default:ji.rearStability,min:0,max:1,precision:1},tyreFriction:{key:"tyreFriction",readable:"Tyre Grip",label:"Tyre Grip",desc:"Tyre grip",type:E.Range,default:1.1,min:.2,max:4,precision:1},kineticFrictionFactor:{key:"kineticFrictionFactor",readable:"Slip Factor",label:"Tyre Slip Factor",desc:"Multiplier which reduces tyre grip when slipping",type:E.Range,default:.8,min:.1,max:1,precision:1},tyreStiffness:{key:"tyreStiffness",readable:"Tyre Stiffness",label:"Tyre Stiffness",desc:"Responsiveness of tyres to steering input",type:E.Range,default:.5,min:.1,max:1,precision:1},lockDiff:{key:"lockDiff",readable:"Locked diff",label:"Locked diff",desc:"Locks rear differential when slipping",type:E.Boolean,default:!0}}),o(yt,"tuningConfig",new Ve("Coupe",ji)),o(yt,"cameras",{...J,Chase:{...J.Chase,posOffset:[1.4,0,0]},ChaseFar:{...J.ChaseFar,posOffset:[1.4,0,0]},FirstPerson:{...J.FirstPerson,posOffset:[1.36,1.07,.32]},Bonnet:{...J.Bonnet,posOffset:[3.2,.45,0]},Bumper:{...J.Bumper,posOffset:[3.4,.2,0]}});let ca=yt;const ac={engine:zt,boost:zt,brake:Br,roll:{tarmac:{ext:Hr,int:zr},gravel:{ext:Ei,int:Ni},ice:{ext:Ei,int:Ni}},skid:{tarmac:{ext:Wr,int:Gr},gravel:{ext:Ei,int:Ni},ice:{ext:Vr,int:jr}},hit:[{ext:Zr,int:Qr},{ext:Xr,int:Yr},{ext:Kr,int:qr}],scrape:{ext:Jr,int:$r},suspension:Ur},ie={sus:0},oc=.8,dr=1.2,rc=.15,nc=.7,lc=.5;let hc=.8;const dc=.3;class cc extends Xa{constructor(...e){super(...e);o(this,"loadStatus",{count:0,loaded:0});o(this,"positions",{wheelBase:0,axleWidth:0});o(this,"loadIndex",0);o(this,"boostV",0);o(this,"boostA",0);o(this,"engineRate",0);o(this,"wheelSurface",0);o(this,"wheelSoundFactor",0)}init(){this.loadIndex++,this.update=this.updateNull,this.ready=!1,this.loadStatus={count:0,loaded:0},this.positions.wheelBase=this.vc.metrics.wheelBase,this.container=n.audioObj;let e=ac;this.loadSound(e.engine,"engine",this.vc.name),this.loadSound(e.boost,"boost",this.vc.name),this.loadSound(e.brake,"brake",this.vc.name),this.loadWorldSounds(e.hit,e.scrape,this.vc.name);for(let s of this.exteriorSounds.wheels)for(let a in s)if(s[a].length)for(let t of s[a])t&&(t.stop(),t.removeFromParent());else s[a].stop(),s[a].removeFromParent();this.exteriorSounds.wheels.length=0;for(let s of this.interiorSounds.wheels)for(let a in s)if(s[a].length)for(let t of s[a])t&&(t.stop(),t.removeFromParent());else s[a].stop(),s[a].removeFromParent();this.interiorSounds.wheels.length=0,this.loadWheelSounds(new m(this.vc.metrics.wheelBase,this.vc.metrics.wheelRadius,0),{roll:e.roll,skid:e.skid,sus:e.suspension},this.vc.name+"_wheel"),this.lerpTarget=0,this.speedTarget=0,this.wF=this.vc.wheelF,this.wR=this.vc.wheelR}updateLive(e){this.updateEngine(e,this.vc.inputs),this.updateBrakes(),this.updateWheels(e),this.updateCollisions()}updateEngine(e,s){let a=this.sounds.engine;if(!a)return;let t=this.sounds.boost;if(this.vc.powerLerp*.8,s.accel<0&&n.direction>0,this.accelPower=.4+Math.abs(s.accel)/(this.vc.tuning.speedFactor*this.vc.tuning.accel)*.6,n.hasBoost&&s.accel!=0?this.boostV=this.boostV*.9+.1:this.boostV*=.95,this.boostA=this.boostV*(1-this.vc.speedLerp*.5),this.speedTarget=Math.min(n.speed,this.vc.tuning.topSpeed+10)/15+1.5,this.lerpTarget=this.lerpTarget*.95+this.speedTarget*.05,s.accel!=0&&Math.sign(s.accel)==n.direction){this.decel&&(this.vol+=.2,this.decel=!1),this.vol+=e*2,this.vol=Math.min(1,this.vol,this.accelPower),this.engineRate=.1+this.lerpTarget*.7,a.setPlaybackRate(this.engineRate+this.boostA*.2),this.t1=(1-this.smoothstep(this.vol))*dr;let r=this.t1*this.interiorVol*Me.engine+this.boostA*.2;a.setVolume(r*(1-this.vc.speedLerp*.5)),t.setPlaybackRate(this.engineRate*1.4+this.boostA*.5),t.setVolume(r*(.5-.3*this.vc.speedLerp+this.boostA*.2))}else if(this.vol>0){this.decel==!1&&(this.lerpTarget-=.05),this.decel=!0,this.vol-=e,this.vol=Math.max(0,this.vol),this.t1=this.vol*dr;let r=this.t1*this.interiorVol*Me.engine+this.boostA*.2;a.setVolume(r*(1-this.vc.speedLerp*.5)),t.setPlaybackRate(this.engineRate*1.4+this.boostA*.4),t.setVolume(r*(.5-.3*this.vc.speedLerp+this.boostA*.2))}else a.setVolume(0),t.setVolume(0)}updateWheels(e){let s=Math.max(0,Math.min(1,this.vc.speedLerp-.01))*hc*Me.roll,a=this.sounds.wheels[0];ie.lat=Math.max(Math.abs(this.wR.latDirDot),Math.abs(this.wF.latDirDot)),ie.speed=Math.max(this.wR.speed,this.wF.speed),ie.wheelVol=Math.max(0,Math.min(1,((Math.abs(ie.lat)-.05)*ie.speed-2)/4)),this.wR.locked&&this.wR.shockFactor>.1&&(ie.wheelVol=Math.max(ie.wheelVol,Math.min(1,(Math.abs(this.wR.lonDirDot*this.wR.speed)-2)/4))),ie.wheelVol>0?this.wheelSoundFactor=this.wheelSoundFactor*.95+.05*ie.wheelVol:this.wheelSoundFactor=this.wheelSoundFactor*.8,ie.contact=Math.min(1,Math.max(this.wR.shockFactor,this.wR.shockFactor)*4),this.wheelSoundFactor*=ie.contact,ie.surface=this.wR.groundState.s,this.wheelSurface!=ie.surface&&(a.skid[this.wheelSurface].setVolumeStoppable(0),a.roll[this.wheelSurface].setVolumeStoppable(0),this.wheelSurface=ie.surface),a.roll[ie.surface].isPlaying||(a.roll[ie.surface].play(),a.skid[ie.surface].play()),ie.contact==0?a.roll[ie.surface].setVolume(.01):a.roll[ie.surface].setVolume(s),a.skid[ie.surface].setVolume(dc*this.wheelSoundFactor*Me.skid);let t=Math.max(Math.abs(this.wR.shockVel),Math.abs(this.wF.shockVel));if(t<.5)ie.sus*=.8;else{let r=Math.min(1,(t-.5)*2);r>ie.sus&&(ie.sus=ie.sus*.5+.5*r)}a.sus.setVolume(ie.sus*lc*this.interiorVol*Me.roll)}updateBoost(){if(this.boostV=0,!n.isAirborne&&n.hasAccel&&n.hasBoost){let e=1-this.vc.accelLerp;this.boostV=.3+e*.7,this.boostT=this.boostT*.9+.1*e,e=1+(1-e)/2,this.sounds.boost.setPlaybackRate(1+e*5)}else this.boostT*=.95;this.boostV=this.boostV*nc*this.accelPower*this.interiorVol*Me.engine,this.boostV>1&&(this.boostV=1),this.sounds.boost.setVolumeStoppable(this.boostV)}updateBrakes(){if(!this.vc.braking||n.isAirborne||this.vc.softBraking){this.sounds.brake.setVolumeStoppable(0);return}this.brakeT=this.brakeT*.9+.1*Math.min(1,Math.max(0,(n.speed-30)/40)),this.sounds.brake.setPlaybackRate(1),this.sounds.brake.setVolumeStoppable(this.brakeT*rc*this.vc.brakeLerp*this.interiorVol*Me.brakes)}loadWheelSounds(e,s,a){var g,f,x,w;let t=this.loadIndex,r=this.exteriorSounds.wheels[0]??{},c=this.interiorSounds.wheels[0]??{};for(let S=0;S<hs.length;S++){let D=hs[S];this.loadStatus.count++,De.getPositionalAudio(s.roll[D].ext,C=>{t===this.loadIndex&&this.onWheelSoundLoaded(C,r,"roll",S,e)},(g=r.roll)==null?void 0:g[S],a+"_roll_ext_"+D),this.loadStatus.count++,De.getPositionalAudio(s.roll[D].int,C=>{t===this.loadIndex&&this.onWheelSoundLoaded(C,c,"roll",S,e)},(f=c.roll)==null?void 0:f[S],a+"_roll_int_"+D),this.loadStatus.count++,De.getPositionalAudio(s.skid[D].ext,C=>{t===this.loadIndex&&this.onWheelSoundLoaded(C,r,"skid",S,e)},(x=r.roll)==null?void 0:x[S],a+"_skid_ext_"+D),this.loadStatus.count++,De.getPositionalAudio(s.skid[D].int,C=>{t===this.loadIndex&&this.onWheelSoundLoaded(C,c,"skid",S,e)},(w=c.roll)==null?void 0:w[S],a+"_skid_int_"+D)}this.loadStatus.count++,De.getPositionalAudio(s.sus,S=>{t===this.loadIndex&&(r.sus&&(r.sus.stop(),r.sus.removeFromParent(),delete r.sus),r.sus=S,c.sus=S,S.setLoop(!0),S.setLoopStart(.1),S.setLoopEnd(S.buffer.duration-.1),S.setRefDistance(.5),S.setRolloffFactor(oc),S.setVolumeStoppable(0),S.detune=Math.random()*-400,S.name="sus",S.position.x=e.x,S.position.z=e.z,this.container.add(S),this.onSoundLoaded())},r.sus,a),this.exteriorSounds.wheels[0]=r,this.interiorSounds.wheels[0]=c}}const M={vecA:new m,vecB:new m,axleFPos:new m,axleFDir:new m,axleRPos:new m,axleRDir:new m,chassisDir:new m,time:0};new m(0,1,0);const gc=2,ri=Math.PI*2;class Fi extends Ke{constructor(){super();o(this,"name","bike");o(this,"metaConfig",{});o(this,"metrics",{wheelBase:1.9,frontWheelWidth:.1,rearWheelWidth:.14,wheelRadius:.32,maxLean:1.05,frontWheelTilt:.35,rearWheelTilt:.2,wheelMass:40,wheelContactWidth:.05,collisionMargin:.3,boxWidth:1,boxLength:2});o(this,"audio",{motor:zt,boost:zt});o(this,"tuning",{accel:10,accelEaseSpeed:240/3.6,accelEaseFactor:.75,boostFactor:.5,topSpeed:240/3.6,reverse:2,brake:5,jerk:64,brakeResponse:.5,speedFactor:1,corneringFactor:.75,corneringCaution:-1.5,targetDistFactor:1.4,steerAccel:12,steerSpeed:1.57,steerInterval:1,maxSteer:.68,shockTravel:.1,shockTravelFront:.1,shockTravelRear:.1,shockForce:8,damping:16,rockFactorFront:.25,rockFactorRear:.5,aeroFactor:.001,drag:.002,rollResistance:.25,tyreFriction:1,kineticFrictionFactor:.75,lonFrictionFactor:.5,cautionFactor:.75});o(this,"layout",{headlightPos:{x:2.1,y:.5,z:.1},headlightTarget:{x:3.1,y:.45,z:.1}});o(this,"frontWheelObj");o(this,"rearWheelObj");o(this,"forward",new m);o(this,"up",new m);o(this,"down",new m);o(this,"groundUp",new m);o(this,"groundDown",new m);o(this,"contactUp",new m);o(this,"contactDown",new m);o(this,"dHeading",0);o(this,"dSteer",0);o(this,"pSteer",0);o(this,"groundAngle",0);o(this,"groundOrientation",new Z(0,0,0,"YZX"));o(this,"collidingWall",!1);o(this,"collidingWallSide",0);o(this,"collidingGround",0);o(this,"collidingGroundBounce",1);o(this,"boostFactor",0);o(this,"inputs",{accel:0,steer:0,gamepadSteer:0,brake:0,handbrake:0,stiffSteer:0});o(this,"autodriver");o(this,"drive",0);o(this,"steer",0);o(this,"pSteer",0);o(this,"steerDifferential",1);o(this,"slip",0);o(this,"speed",0);o(this,"tiltX",0);o(this,"tiltZ",0);o(this,"speedLerp",0);o(this,"powerLerp",1);o(this,"downforce",0);o(this,"holdHandbrake",!1);o(this,"pdT",.0167);o(this,"orientation",new Z(0,0,0,"YZX"));o(this,"orientationFlat",new Z(0,0,"YZX"));o(this,"steerOrientation",new Z(0,0,0,"YZX"));o(this,"steerOrientationFlat",new Z(0,0,"YZX"));o(this,"chassisAccel",new m(0,0,0));o(this,"collisionSide",0);o(this,"collisionsDisabled",!1);o(this,"wheelsInside",{});o(this,"collisionPos",new m);o(this,"collisionStrength",0);o(this,"braking",!1);o(this,"brakeLerp",0);o(this,"brakeForce",0);o(this,"rockLonTarget",0);o(this,"rockLon",0);o(this,"prevDriveDir",1);o(this,"isDriven",!1);o(this,"wheels",[]);o(this,"wheelF");o(this,"wheelR");o(this,"elementsToLoad",0);o(this,"ready",!1);o(this,"poses",0);o(this,"frameCount",2);o(this,"live",!1);o(this,"wasLive",!1);o(this,"update",this.updateLoad);o(this,"autoSteer",0);o(this,"manualSteer",0);o(this,"fly",{up:0,right:0,back:0});this.prepMetrics(),this.audioController=new cc(this),this.autodriver=new $a(()=>this.reset(),this)}prepMetrics(){this.metrics.wheelCircumference=this.metrics.wheelRadius*2*Math.PI,this.layout.wheels=[{x:this.metrics.wheelBase,z:0},{x:0,z:0}],this.metrics.shadowMapSize=this.metrics.wheelBase*1.5,n.shadowMapSize=this.metrics.shadowMapSize,n.lights.left.light.position.copy(this.layout.headlightPos),n.lights.left.target.position.copy(this.layout.headlightTarget),n.lights.right.light.position.copy(this.layout.headlightPos),n.lights.right.light.position.z*=-1,n.lights.right.target.position.copy(this.layout.headlightTarget),n.lights.right.target.position.z*=-1}init(){this.update=this.updateLoad,this.elementsToLoad=0,this.frontWheelObj=new we,this.rearWheelObj=new we,this.ready=!1,this.onInit()}onInit(){Ya.addJob(this.load.bind(this),-1,"vehicle","vehicle",!0)}load(){return this.elementsToLoad?!1:(this.onReady(),!0)}onElementLoaded(){this.elementsToLoad--}onReady(){this.ready=!0,this.elementsToLoad=0,this.initWheels(),this.reset(),this.update=this.updateStationed,this.audioController.init(),this.setAutodrive(n.inAutodrive),n.onReady()}initWheels(){let e=this.prepWheel(this.frontWheelObj);e.i=0,e.front=!0,e.relPos.set(this.metrics.wheelBase,0,0),e.axlePos.set(this.metrics.wheelBase,this.metrics.wheelRadius,0),e.position.copy(e.axlePos),e.hasDrive=!1,e.travel=this.tuning.shockTravelFront,this.wheels.push(e),this.updateWheelWorldPos(e),n.container.add(e),this.wheelF=e,e=this.prepWheel(this.rearWheelObj),e.i=1,e.front=!1,e.relPos.set(0,0,0),e.axlePos.set(0,this.metrics.wheelRadius,0),e.position.copy(e.axlePos),e.hasDrive=!0,e.travel=this.tuning.shockTravelRear,this.wheels.push(e),this.updateWheelWorldPos(e),n.container.add(e),this.wheelR=e}prepWheel(e){let s=e;return s.worldPos=new m,s.pWorldPos=new m,s.relPos=new m,s.axlePos=new m,s.contactPoint=new m,s.groundPoint=new m,s.flatRight=new m,s.euler=new Z(0,0,0,"YXZ"),s.baseRotation=new Z(0,0,0,"YXZ"),s.groundOrientation=new Z(0,0,0,"YZX"),s.tPos=new m,s.velocity=new m,s.velocityDir=new m,s.accel=new m,s.groundNorm=new m,s.groundState={n:new m,f:1,b:1},s.radius=this.metrics.wheelRadius,s.travel=this.tuning.shockTravel,s.latGroundAngle=0,s.lonGroundAngle=0,s.cosLonGroundAngle=1,s.shockFactor=.25,s.shockExcess=0,s.groundHeight=0,s.pGroundHeight=0,s.groundHeightLateral=0,s.height=0,s.speed=0,s.lonDirDot=0,s.latDirDot=0,s.collisionFactor=0,s.direction=1,s.wd=0,s.friction=1,s.onRoad=!0,s.shockCompression=s.shockFactor*s.travel,s.pShockCompression=s.shockCompression,s.traction=1,s.downforce=.95,s.dS=0,s.insideWall=!0,s.collisionFactor=0,s.wd=0,s}resetWheelState(e){e.velocity.set(0,0,0),e.velocityDir.set(0,0,0),e.accel.set(0,0,0),e.dS=0,e.insideWall=!0,e.onRoad=!0,e.collisionFactor=0,e.wd=0,e.rotation.copy(e.baseRotation),e.euler.copy(e.baseRotation),e.slip=0,e.latForce=0,e.shockFactor=.25,e.shockExcess=0,e.shockCompression=e.shockFactor*e.travel,e.pShockCompression=e.shockCompression,e.shockForce=1,e.lonDirDot=1,e.latDirDot=0,e.direction=1,e.speed=0}setPose(e,s,a,t){t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),this.orientation.x=0,this.orientation.y=-t,this.orientation.z=0,s=ce.getRoadsideHeight(e,a,v.vehicleNode),M.vecA.set(e+Math.cos(t)*this.metrics.wheelBase,s,a+Math.sin(t)*this.metrics.wheelBase);let r=ce.getRoadsideHeight(M.vecA.x,M.vecA.z,v.vehicleNode);r||(r=s),this.orientation.z=Math.tan((r-s)/this.metrics.wheelBase),this.up.set(0,1,0).applyEuler(this.orientation),this.down.copy(this.up).negate(),this.forward.set(1,0,0).applyEuler(this.orientation),this.orientationFlat.copy(this.orientation),this.steerOrientationFlat.copy(this.orientation),this.wheelR.flatRight.set(0,0,1).applyEuler(this.orientationFlat),this.wheelF.flatRight.set(0,0,1).applyEuler(this.steerOrientationFlat),this.resetWheelState(this.wheelR),this.wheelR.contactPoint.set(e,s,a),this.wheelR.groundPoint.copy(this.wheelR.contactPoint),this.wheelR.groundHeight=this.wheelR.groundPoint.y,this.wheelR.pGroundHeight=this.wheelR.groundHeight,this.wheelR.groundHeightLateral=this.wheelR.groundHeight,this.resetWheelState(this.wheelF),this.wheelF.contactPoint.copy(this.forward).multiplyScalar(this.metrics.wheelBase).add(this.wheelR.contactPoint),this.wheelF.groundPoint.copy(this.wheelF.contactPoint),this.wheelF.groundHeight=this.wheelF.groundPoint.y,this.wheelF.pGroundHeight=this.wheelF.groundHeight,this.wheelF.groundHeightLateral=this.wheelF.groundHeight,this.groundAngle=Math.asin((this.wheelF.groundPoint.y-this.wheelR.groundPoint.y)/this.wheelF.groundPoint.distanceTo(this.wheelR.groundPoint)),this.groundOrientation.x=0,this.groundOrientation.y=this.orientation.y,this.groundOrientation.z=this.groundAngle,this.groundUp.set(0,1,0).applyEuler(this.groundOrientation),this.groundDown.copy(this.groundUp).negate(),this.contactUp.copy(this.groundUp).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),this.wheelR.worldPos.copy(this.down).multiplyScalar(this.wheelR.shockCompression).add(this.wheelR.contactPoint),this.wheelR.pWorldPos.copy(this.wheelR.worldPos),this.wheelF.worldPos.copy(this.down).multiplyScalar(this.wheelF.shockCompression).add(this.wheelF.contactPoint),this.wheelF.pWorldPos.copy(this.wheelF.worldPos),this.orientation.z=Math.tan((this.wheelF.worldPos.y-this.wheelR.worldPos.y)/this.metrics.wheelBase),this.tiltZ=this.orientation.z,n.pitch=this.tiltZ,this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),this.tiltX=this.orientation.x,n.roll=this.tiltX,this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),this.wheelR.latGroundAngle=0,this.wheelR.lonGroundAngle=this.tiltZ,this.wheelR.cosLonGroundAngle=Math.cos(this.wheelR.lonGroundAngle),this.wheelF.latGroundAngle=0,this.wheelF.lonGroundAngle=this.tiltZ,this.wheelF.cosLonGroundAngle=Math.cos(this.wheelF.lonGroundAngle),n.position.copy(this.wheelR.worldPos),n.pPosition.copy(n.position),n.heading=this.orientation.y,n.motionHeading=n.heading,n.setRotationFromEuler(this.orientation),n.updateMatrix(),n.updateMatrixWorld(!0),this.updateWheelWorldPos(this.wheelR),this.updateWheelWorldPos(this.wheelF),this.poses++}reset(){let e=v.vehicleNode;this.setPose(e.p.x+e.n.x*n.driveLaneOffset,e.p.y,e.p.z+e.n.z*n.driveLaneOffset,e.next.a),this.chassisAccel.set(0,0,0),this.steerOrientation.copy(this.orientation),this.collisionSide=0,this.collisionsDisabled=!1,this.inputs.accel=0,this.inputs.steer=0,this.inputs.brake=0,this.inputs.handbrake=0,this.inputs.stickySteer=0,this.softSteerTimeFactor=1,this.steer=0,this.pSteer=0,this.dSteer=0,this.speed=0,this.drive=0,this.brakeForce=0,this.brakeLerp=0,this.braking=!1,this.autodriver.reset(),this.audioController.reset(),this.update=this.updateStationed,n.hasBoost=!1,n.onReset()}destroy(){this.audioController.destroy(),this.autodriver.destroy()}updateStationed(e){if(I.signal.Handbrake=1,n.hasHandbrake=!0,this.handleInput(e),!Je.isCinecam&&I.signal.Backward+I.signal.Forward>0||this.autodrive||I.signal.Autodrive||n.hasCruiseTarget){n.hasHandbrake=!1,this.holdHandbrake=!n.hasCruiseTarget&&!this.autodrive,this.update=this.updateLive;return}this.updatePhysics(e),this.updateAudio(e),this.updateVisuals(e),this.pdT=e}updateLive(e){this.handleInput(e);let s=e;for(;s>.012;)this.updatePhysics(.01),s-=.01,this.pdT=.01;this.updatePhysics(s),this.updateAudio(e),this.updateVisuals(e),this.pdT=s}updatePhysics(e){this.updateKinematics(e),this.updateWheelsPost(e),this.updateChassisState(e)}updateKinematics(e){this.steerOrientation.copy(this.orientation),this.steerOrientation.y+=this.steer;for(let t of this.wheels)t.velocity.subVectors(t.worldPos,t.pWorldPos).divideScalar(this.pdT),t.pWorldPos.copy(t.worldPos),t.velocityDir.copy(t.velocity).normalize(),t.speed=t.velocity.length(),t.dS=t.speed*e*Math.abs(t.lonDirDot),t.shockFactor<.1?t.tDownforce=t.shockFactor/.1*.95:t.tDownforce=.95+(t.shockFactor-.1)/.9*.05,t.dDownforce=t.tDownforce-t.downforce,t.dDownforce<0&&(t.dDownforce=Math.max(t.dDownforce/e,-gc)*e),t.downforce+=t.dDownforce,t.gforce=t.shockForce*Math.cos(t.latGroundAngle-this.tiltX),M.latForce=0,t.accel.set(0,0,0),t.front?(M.vecA.set(1,0,0).applyEuler(this.steerOrientation),t.lonDirDot=t.velocityDir.dot(M.vecA),t.direction=t.lonDirDot<0?-1:1,t.latDirDot=t.velocityDir.dot(t.flatRight)):(M.vecA.set(1,0,0).applyEuler(this.orientation),t.lonDirDot=t.velocityDir.dot(M.vecA),t.direction=t.lonDirDot<0?-1:1,t.latDirDot=t.velocityDir.dot(t.flatRight)),t.traction=t.downforce*Math.min(1,t.groundState.f*this.tuning.tyreFriction)*t.cosLonGroundAngle,t.locked=!t.front&&n.hasHandbrake,t.locked?(M.maxLon=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction*this.tuning.lonFrictionFactor,M.lon=t.lonDirDot*t.speed/e,M.lonAbs=Math.abs(M.lon),t.lonSlip=0,M.lonAbs>M.maxLon&&(M.maxLon=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*this.tuning.kineticFrictionFactor*this.tuning.lonFrictionFactor,M.lon<0?M.lon=Math.max(M.lon,-M.maxLon):M.lon=Math.min(M.lon,M.maxLon),t.lonSlip=Math.abs(t.lonDirDot)),t.static=t.lonSlip==0,t.accel.x-=M.lon):(t.static=!1,t.accel.x-=Math.min(this.tuning.rollResistance,t.speed/e)*t.traction*t.lonDirDot),M.lat=t.latDirDot*t.speed/e*t.downforce,M.maxLat=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction,M.latAbs=Math.abs(M.lat),M.latAbs>M.maxLat?(M.maxLat=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*this.tuning.kineticFrictionFactor,t.slip=Math.abs(t.latDirDot)*t.downforce,M.lat<0?M.lat=Math.max(M.lat,-M.maxLat):M.lat=Math.min(M.lat,M.maxLat)):t.slip=0,t.latForce=-M.lat,t.traction*=1-t.slip,this.braking&&(t.accel.x=-t.lonDirDot*this.brakeForce*t.traction);this.inputs.handbrake&&(this.drive=0),this.wheelR.accel.x+=this.drive*this.wheelR.traction,this.wheelR.accel.y-=this.wheelR.shockForce*xe,this.wheelR.shockVel=(this.wheelR.shockCompression-this.wheelR.pShockCompression)/this.pdT,this.wheelR.pShockCompression=this.wheelR.shockCompression,this.wheelR.accel.y+=this.tuning.damping*this.wheelR.shockVel,this.wheelR.accel.y-=this.chassisAccel.x/e*(this.chassisAccel.x>0?this.tuning.rockFactorRear*this.wheelR.traction:this.tuning.rockFactorFront*this.wheelF.traction),this.wheelR.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ,this.wheelR.accel.applyEuler(this.orientation),M.vecA.copy(this.wheelR.flatRight).multiplyScalar(this.wheelR.latForce),this.wheelR.accel.add(M.vecA),this.wheelR.accel.y+=xe,M.vecA.copy(this.wheelR.velocityDir).negate().multiplyScalar(this.tuning.drag*this.wheelR.speed*this.wheelR.speed),this.wheelR.contactPoint.y<ce.seaLevel-.05&&M.vecA.multiplyScalar(.5/this.tuning.drag),this.wheelR.accel.add(M.vecA),this.wheelR.accel.multiplyScalar(e),this.wheelR.velocity.add(this.wheelR.accel),this.wheelR.static&&(this.wheelR.velocity.x=0,this.wheelR.velocity.z=0),this.wheelR.worldPos.copy(this.wheelR.velocity).multiplyScalar(e).add(this.wheelR.pWorldPos),this.wheelR.tPos.copy(this.up).multiplyScalar(this.metrics.wheelRadius+this.wheelR.shockCompression).add(this.wheelR.worldPos),this.drive>0||n.direction<0?this.wheelF.accel.x+=this.drive*this.wheelR.traction:this.wheelF.accel.x+=this.drive*this.wheelF.traction,this.wheelF.accel.y-=this.wheelF.shockForce*xe,this.wheelF.shockVel=(this.wheelF.shockCompression-this.wheelF.pShockCompression)/this.pdT,this.wheelF.pShockCompression=this.wheelF.shockCompression,this.wheelF.accel.y+=this.tuning.damping*this.wheelF.shockVel,this.wheelF.accel.y+=this.chassisAccel.x/e*(this.chassisAccel.x>0?this.tuning.rockFactorFront*this.wheelR.traction:this.tuning.rockFactorRear*this.wheelF.traction),this.wheelF.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ,this.wheelF.accel.y>0&&this.wheelF.downforce<.2&&this.wheelR.downforce>.5&&this.wheelR.direction>0&&this.drive>0&&(this.wheelF.accel.y-=xe*this.speed*Math.abs(this.wheelR.lonDirDot)*.001*this.drive*this.wheelR.traction),this.wheelF.accel.applyEuler(this.steerOrientation),this.wheelF.accel.y+=xe,M.vecA.copy(this.wheelF.velocityDir).negate().multiplyScalar(this.tuning.drag*this.wheelF.speed*this.wheelF.speed),this.wheelF.contactPoint.y<ce.seaLevel-.05&&M.vecA.multiplyScalar(.5/this.tuning.drag),this.wheelF.accel.add(M.vecA),M.vecA.copy(this.wheelF.flatRight).multiplyScalar(this.wheelF.latForce),this.wheelF.accel.add(M.vecA),this.wheelF.accel.multiplyScalar(e),this.wheelF.velocity.add(this.wheelF.accel),this.wheelR.static&&(this.wheelF.velocity.x=0,this.wheelF.velocity.z=0),this.wheelF.worldPos.copy(this.wheelF.velocity).multiplyScalar(e).add(this.wheelF.pWorldPos),this.wheelF.tPos.copy(this.up).multiplyScalar(this.metrics.wheelRadius+this.wheelF.shockCompression).add(this.wheelF.worldPos),M.collDenom=this.wheelR.traction+this.wheelR.collisionFactor+this.wheelF.traction+this.wheelF.collisionFactor,M.frontAuthority=0,M.collDenom>0&&(M.frontAuthority=(this.wheelF.traction+this.wheelF.collisionFactor)/M.collDenom),this.wheelR.traction+this.wheelF.traction==0&&(M.frontAuthority=.5),this.wheelR.collisionFactor==0&&this.wheelF.collisionFactor==0&&(M.frontAuthority=.4+.2*M.frontAuthority),this.wheelR.static&&(M.frontAuthority=0),M.vecA.copy(this.wheelF.worldPos).sub(this.wheelR.worldPos),M.d=M.vecA.length(),M.offset=M.d-this.metrics.wheelBase,M.vecB.copy(M.vecA).normalize().multiplyScalar(M.offset*M.frontAuthority),this.wheelR.worldPos.add(M.vecB),M.vecA.normalize().multiplyScalar(this.metrics.wheelBase),this.wheelF.worldPos.copy(M.vecA).add(this.wheelR.worldPos),M.heading=Math.atan2(this.wheelR.worldPos.z-this.wheelF.worldPos.z,this.wheelF.worldPos.x-this.wheelR.worldPos.x),this.dHeading=M.heading-this.orientation.y,this.dHeading<-Math.PI?(this.dHeading+=ri,this.orientation.y-=ri):this.dHeading>Math.PI&&(this.dHeading-=ri,this.orientation.y+=ri),this.orientation.y=this.orientation.y+this.dHeading,n.heading=this.orientation.y,this.speed=n.speed;let s=0;if(this.dHeading!==0){M.speed=this.steerSpeed;let t=this.metrics.wheelBase/Math.tan(this.steer);t!==0&&(s=Math.atan(M.speed**2/(t*xe)))}this.targetLean=s;let a=1-Math.exp(-e/((1-Math.max(.01,this.speedLerp))*.15));this.tiltX=this.tiltX*(1-a)+this.targetLean*a,this.orientation.x=this.tiltX*.8,n.roll=this.orientation.x,this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),M.tiltZ=Math.asin((this.wheelF.worldPos.y-this.wheelR.worldPos.y)/M.d),M.dTiltZ=M.tiltZ-this.tiltZ,M.tiltZ>this.tiltZ&&this.tiltZ>1?M.dTiltZ*=1-(this.tiltZ-1)/.5:M.tiltZ<this.tiltZ&&this.tiltZ<-1&&(M.dTiltZ*=(1+this.tiltZ)/-.5),this.tiltZ+=M.dTiltZ,this.tiltZ=Math.min(Math.max(-1.5,this.tiltZ),1.5),this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),n.pitch=this.tiltZ,this.orientation.z=this.tiltZ,this.up.set(0,1,0).applyEuler(this.orientation),this.down.copy(this.up).negate(),this.forward.set(1,0,0).applyEuler(this.orientation),this.orientationFlat.set(this.wheelR.latGroundAngle,this.orientation.y,this.orientation.z),this.steerOrientationFlat.set(this.wheelF.latGroundAngle,this.steerOrientation.y,this.steerOrientation.z),this.wheelR.flatRight.set(0,0,1).applyEuler(this.orientationFlat),this.wheelF.flatRight.set(0,0,1).applyEuler(this.steerOrientationFlat),this.wheelR.worldPos.y+=this.fly.up,this.fly.up=0,this.wheelR.worldPos.x+=this.wheelR.flatRight.x*this.fly.right,this.wheelR.worldPos.z+=this.wheelR.flatRight.z*this.fly.right,this.fly.right=0,n.direction=Math.sign(this.wheelR.velocityDir.dot(this.forward))||1,n.position.copy(this.wheelR.worldPos),n.forwardPosition.copy(this.wheelF.worldPos),n.forwardDir.copy(this.forward),n.midPosition.set((n.position.x+n.forwardPosition.x)/2,(n.position.y+n.forwardPosition.y)/2,(n.position.z+n.forwardPosition.z)/2),n.cockPosition.copy(n.midPosition).lerp(n.forwardPosition,.4),n.setRotationFromEuler(this.orientation);try{n.updateMatrix(),n.updateMatrixWorld()}catch{this.reset();return}this.updateWheelWorldPos(this.wheelR),this.updateWheelWorldPos(this.wheelF),this.straddlingWall=this.wheelR.insideWall==!1&&this.wheelF.insideWall==!0||this.wheelR.insideWall==!0&&this.wheelF.insideWall==!1,this.collisionsDisabled=this.collisionsDisabled&&(this.collidingWall||this.straddlingWall),this.collidingWall=!1,n.isAirborne=!0,this.collidingGround=0,this.collidingGroundBounce=0,this.updateWheelContact(this.wheelR,e),this.updateWheelContact(this.wheelF,e),n.onRoad=this.wheelR.onRoad||this.wheelF.onRoad,this.groundAngle=Math.asin((this.wheelF.groundPoint.y-this.wheelR.groundPoint.y)/this.wheelF.groundPoint.distanceTo(this.wheelR.groundPoint)),this.groundOrientation.x=this.orientation.x,this.groundOrientation.y=this.orientation.y,this.groundOrientation.z=this.groundAngle,this.groundUp.set(0,1,0).applyEuler(this.groundOrientation),this.groundDown.copy(this.groundUp).negate(),this.contactUp.copy(this.groundUp).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),(isNaN(n.position.x)||isNaN(this.orientation.z))&&this.reset()}updateWheelContact(e,s){e.contactPoint.copy(this.up).multiplyScalar(e.shockCompression+this.metrics.wheelRadius).add(this.contactDown).add(e.worldPos),ce.getGroundState(e.contactPoint.x,e.contactPoint.z,v.vehicleNode,e.groundState,!0),M.ground=e.groundState,e.pGroundHeight=e.groundHeight,e.groundHeight=M.ground.h,e.groundPoint.copy(e.contactPoint),e.groundPoint.y=M.ground.h,e.onRoad=M.ground.r,e.groundHeightLateral=ce.getRoadsideHeight(e.contactPoint.x+this.metrics.wheelContactWidth*e.flatRight.x,e.contactPoint.z+this.metrics.wheelContactWidth*e.flatRight.z,v.vehicleNode),e.onRoad&&v.vehicleNode.bridge&&e.groundHeightLateral<e.groundHeight-.1&&(e.groundHeightLateral=e.groundHeight),e.latGroundAngle=Math.atan((e.groundHeight-e.groundHeightLateral)/this.metrics.wheelContactWidth),e.sinLatGroundAngle=Math.sin(e.latGroundAngle),e.cosLatGroundAngle=Math.cos(e.latGroundAngle),M.vecA.copy(this.forward),M.vecA.y=0,M.vecA.normalize(),e.groundHeightLongitudinal=ce.getRoadsideHeight(e.contactPoint.x+this.metrics.wheelContactWidth*M.vecA.x,e.contactPoint.z+this.metrics.wheelContactWidth*M.vecA.z,v.vehicleNode),e.onRoad&&v.vehicleNode.bridge&&e.groundHeightLongitudinal<e.groundHeight-.1&&(e.groundHeightLongitudinal=e.groundHeight),e.lonGroundAngle=Math.atan((e.groundHeightLongitudinal-e.groundHeight)/this.metrics.wheelContactWidth),e.cosLonGroundAngle=Math.cos(e.lonGroundAngle),e.groundOrientation.x=e.latGroundAngle,e.groundOrientation.y=this.orientation.y,e.groundOrientation.z=e.lonGroundAngle,e.groundNorm.set(0,1,0).applyEuler(e.groundOrientation),M.deltaCompression=e.groundPoint.y-e.contactPoint.y,e.shockCompression+=M.deltaCompression,e.shockExcess=0,e.collisionFactor=0,e.shockCompression<0?e.shockCompression=0:e.shockCompression>e.travel&&(e.shockExcess=e.shockCompression-e.travel,e.shockCompression=e.travel,this.collidingGround++,this.collidingGroundBounce+=e.groundState.b,e.collisionFactor=1,M.vecA.copy(e.groundNorm).multiplyScalar(e.shockExcess*e.groundNorm.dot(this.up)),this.shockExcess<e.travel&&M.vecA.multiplyScalar(e.groundState.b),e.worldPos.add(M.vecA)),e.contactPoint.y>e.groundHeight+1&&(this.collisionsDisabled=!0),n.isAirborne=n.isAirborne&&e.contactPoint.y>e.groundHeight+.1,e.shockFactor=e.shockCompression/e.travel,e.shockForce=e.shockFactor**2*this.tuning.shockForce,M.ground.w?(e.wd=M.ground.wd,e.wn=M.ground.wn,e.ws=M.ground.ws,(e.wi==null||e.wi!==M.ground.wi||e.collidingWallEnd)&&(Math.abs(e.wd)<this.metrics.collisionMargin||e.wd>0&&e.insideWall)?this.collideWallEnd(e):e.insideWall!==null&&!e.collidingWallEnd?e.insideWall?(e.wcd=e.wd+this.metrics.collisionMargin,e.wcd>0&&(this.collidingWall=!0,this.collidingWallSide=e.ws,this.collideWallEdge(e))):(e.wcd=e.wd-this.metrics.collisionMargin,e.wcd<0&&(this.collidingWall=!0,this.collidingWallSide=-e.ws,this.collideWallEdge(e))):e.collidingWallEnd=!1,e.wi=M.ground.wi,e.insideWall=e.wd<0):(e.wi=null,e.insideWall=null,e.collidingWallEnd=!1),e.position.y=e.axlePos.y+e.shockCompression,e.front?e.position.x=e.axlePos.x-e.shockCompression*this.metrics.frontWheelTilt:e.position.x=e.axlePos.x+e.shockCompression*this.metrics.rearWheelTilt}updateVisuals(e){}updateLoad(){}updateWheelsPost(e){M.wheelCirc=this.metrics.wheelCircumference,M.r=0,M.r=this.wheelF.dS/M.wheelCirc*ri*this.wheelF.direction,this.wheelF.euler.z-=M.r,this.wheelF.euler.y=this.steer*Math.cos(this.tiltX),this.wheelF.setRotationFromEuler(this.wheelF.euler),M.r=this.wheelR.dS/M.wheelCirc*ri*this.wheelR.direction,this.inputs.handbrake||(this.wheelR.rotation.z=this.wheelR.rotation.z-M.r)}updateChassisState(e){this.chassisAccel.copy(this.wheelR.accel).multiply(this.forward)}updateAudio(e){this.audioController.update(e),this.collisionStrength*=.9,this.didCollide=!1}updateWheelWorldPos(e){e.position.y=e.axlePos.y+e.shockCompression,e.worldPos.copy(e.relPos),e.worldPos.applyMatrix4(n.matrixWorld)}handleInput(e){n.hasBoost=n.hasBoost&&(n.hasAccel||n.hasCruiseTarget)&&!this.autodrive,this.inputs.accel=0,this.inputs.drive=0,this.isDriven=this.autodrive&&L.autodriveMode!==q.STEER,this.allowDrive=!this.autodrive||L.autodriveMode!=q.FULL,this.hasManualAccel=!1,this.hasManualBrake=!1,this.steer=0,Je.isCinecam?(this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake):(n.hasBoost=!1,I.signal.Forward&&this.allowDrive&&(n.hasBoost=!!I.signal.Boost,this.isDriven=!0,this.hasManualAccel=!0,n.hasAccel=!0,!n.hasBoost&&n.direction<0&&n.speed>1&&!I.hasScreenAccel?(this.setBrake(!0,I.signal.Forward),this.hasManualBrake=!0,this.inputs.accel=I.signal.Forward*this.tuning.brake):(this.inputs.accel=I.signal.Forward*this.tuning.accel,this.accelLerp=Math.min(1,this.speed/this.tuning.accelEaseSpeed),this.inputs.accel=this.inputs.accel*this.tuning.accelEaseFactor+this.inputs.accel*this.accelLerp*(1-this.tuning.accelEaseFactor),this.setBrake(!1),this.prevDriveDir=1),this.holdHandbrake=!1),I.signal.Backward&&this.allowDrive&&(n.hasAccel=!1,this.isDriven=!0,n.direction>0&&n.speed>.25?(this.setBrake(!0,I.signal.Backward),this.hasManualBrake=!0,this.inputs.accel=-I.signal.Backward*this.tuning.brake):(this.setBrake(!1),this.inputs.accel=I.signal.Backward*-this.tuning.reverse,this.prevDriveDir=-1),this.holdHandbrake=!1),this.isDriven?this.softBraking&&this.setSoftBrake(!1):(n.hasAccel=!1,this.setBrake(!1),this.setSoftBrake(n.speed>.01)),this.inputs.stickySteer=I.signal.StickySteer>0?1:0,this.inputs.stickySteer&&I.signal.Handbrake&&!this.inputs.handbrake&&(this.holdHandbrake=!0),this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake,this.speedLerp=Math.min(1,this.speed/this.tuning.topSpeed),n.speedLerp=this.speedLerp,n.hasBoost&&(this.boostFactor=Math.max(0,1-this.speedLerp),this.inputs.accel+=this.tuning.accel*this.tuning.boostFactor*this.boostFactor),this.inputs.accel>0&&(this.inputs.accel*=Math.min(1,L.speedFactor)),this.manualSteer=I.filtered.steer,I.hasGamepadInput&&te.directSteer&&(this.manualSteer=Math.min(Math.max(-1,this.manualSteer*5),1))),this.autodrive&&(this.autodriver.update(e),L.autodriveMode!=q.SPEED&&(this.autoSteer=this.autodriver.inputs.steer),L.autodriveMode!=q.STEER&&!this.hasManualAccel&&!this.hasManualBrake&&(this.inputs.accel=this.autodriver.inputs.accel,this.isDriven=!0,n.hasBoost?this.inputs.accel+=this.tuning.accel*Math.max(0,1-this.speedLerp):this.inputs.accel>0&&n.speedLerp<.5&&(this.inputs.accel+=this.tuning.accel*Math.max(0,(1-this.speedLerp*2)*.5)),this.prevDriveDir=1,this.autodriver.inputs.brake>0?this.setBrake(!0,this.autodriver.inputs.brake):this.setBrake(!1))),n.hasCruiseTarget&&!this.braking&&!n.hasHandbrake&&(!this.hasManualAccel||this.useMouse)&&(this.prevDriveDir=1,this.inputs.accel=Math.min(this.tuning.accel,Math.max(-this.tuning.reverse,(n.speedControlTarget-n.direction*n.speed)/e)),this.useMouse&&this.hasBoost&&(this.inputs.accel=this.tuning.accel)),n.hasSpeedLimit&&(this.hasAccel=this.inputs.accel>0,this.inputs.accel=Math.max(-this.tuning.reverse,Math.min(this.inputs.accel,(n.speedControlTarget-n.speed)/e))),!n.hasCruiseTarget&&(!this.autodrive||L.autodriveMode==q.STEER)&&!this.isDriven&&n.direction!=this.prevDriveDir&&n.speed<.1&&(this.holdHandbrake=!0),this.updateSteerState(e),this.updateAccelState(e)}setSoftBrake(e){if(L.softBrakeForce==0){this.softBraking=!1;return}this.softBraking=e,e&&(this.braking=!0)}setBrake(e,s=0){e?(this.braking||(this.brakeLerp=0),this.braking=!0):this.braking=!1,this.brakeForce=0,this.inputs.brake=s}setAutodrive(e){this.autodrive=e,e&&(this.autodriver.initialise(),this.holdHandbrake=!1,n.hasHandbrake=!1)}collideWallEnd(e){this.collisionsDisabled||(this.didCollide=!0,M.vecA.copy(e.worldPos),e.worldPos.copy(e.pWorldPos),e.collidingWallEnd=!0,this.collisionPos.copy(e.axlePos),e.collisionFactor=1+n.speed/2,this.collisionStrength=Math.min(1,Math.max(this.collisionStrength,n.speed/30)))}collideWallEdge(e){if(this.collisionsDisabled)return;this.didCollide=!0,M.vecA.set(e.wn.x,.01,e.wn.z),e.worldPos.add(M.vecA.multiplyScalar(e.wcd*e.ws)),this.collisionPos.copy(e.axlePos),this.collisionPos.z+=this.metrics.collisionMargin*(e.insideWall?-e.ws:e.ws);let s=e.velocityDir.x*e.wn.z+e.velocityDir.z*-e.wn.x;M.collTemp=(e.velocityDir.x*-e.wn.z+e.velocityDir.z*e.wn.x)*Math.abs(e.wcd)*.75,M.vecA.set(-e.wn.z,0,e.wn.x).multiplyScalar(M.collTemp),e.worldPos.sub(M.vecA),e.collisionFactor=1+n.speed/4,this.collisionStrength=Math.min(1,Math.max(this.collisionStrength,.1+Math.min(1,(1-Math.abs(s))*5*(n.speed/30))))}updateSteerState(e){this.inputs.steer=this.manualSteer,this.steerSpeed=this.wheelR.speed*Math.abs(this.wheelR.lonDirDot)*.8;let s=this.steerSpeed**2/(Math.tan(this.metrics.maxLean)*-xe),a=.5;this.tiltX!=0&&(a=Math.atan(this.metrics.wheelBase/s)),this.steerSpeed<16&&(this.steerSpeed<8?a*=.5:a*=this.steerSpeed/16),a*=this.wheelF.downforce,a*=1-this.wheelR.slip,a=Math.min(a,this.tuning.maxSteer);let t=this.inputs.steer;this.wheelF.latGroundAngle<0?t=Math.max(t,-1-this.wheelF.latGroundAngle*2):t=Math.min(t,1-this.wheelF.latGroundAngle*2),this.wheelR.latDirDot>0?t=Math.min(1,Math.max(-1+this.wheelR.latDirDot*4,t)):t=Math.max(-1,Math.min(1+this.wheelR.latDirDot*4,t));let r=t*a;this.autodrive&&L.autodriveMode!==q.SPEED&&(r+=this.autoSteer),this.collidingWall&&(this.collidingWallSide<0?r=Math.max(r,-.05):r=Math.min(r,.05));let c=.1;a>0&&(c=.1+Math.abs(this.pSteer-r)/a*.4);let g=1-Math.exp(-e/c);this.steer=this.pSteer*(1-g)+r*g,this.pSteer=this.steer,M.sa=Math.sin(this.steer),M.ca=Math.cos(this.steer)*this.metrics.wheelBase*2,this.steerDifferential=this.metrics.wheelBase/Math.sin(this.steer)/(this.metrics.wheelBase/Math.tan(this.steer))||1}updateAccelState(e){this.inputs.accel>0?this.drive<this.inputs.accel?(this.drive+=this.tuning.jerk*e,this.drive>this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel:this.drive>this.inputs.accel?(this.drive-=this.tuning.jerk*e,this.drive<this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel,this.braking&&(this.brakeLerp+=e/this.tuning.brakeResponse,this.brakeLerp>1&&(this.brakeLerp=1),this.inputs.brake==0&&this.softBraking&&(this.inputs.brake=L.softBrakeForce),this.brakeForce=this.inputs.brake*this.tuning.brake*this.brakeLerp),this.powerLerp=Math.min(1,n.speed/this.tuning.topSpeed)}halfLerp(e){return e=e/2+.5,((3-e*2)*e*e-.5)*2}}o(Fi,"key","bike"),o(Fi,"name","Bike"),o(Fi,"icon","/img/ico_veh_ebike.svg"),o(Fi,"cameras",{...J,FirstPerson:{...J.FirstPerson,posOffset:[1.25,1.12,0],yOffset:{near:0,far:0},yawLimit:.5,minPitch:-.4,maxPitch:.2,rollFactor:.4,smoothFactor:1,pitch:{near:.065,far:.065}},Bonnet:{...J.Bonnet,posOffset:[2.2,.7,0],yOffset:{near:.4,far:.4},hideVehicle:!0,rollFactor:.4,fovFactor:0},Bumper:{...J.Bumper,posOffset:[2.2,.3,0],yOffset:{near:.4,far:.4},hideVehicle:!0,rollFactor:.4},Chase:{...J.Chase,pitch:{near:.28,far:.15},posOffset:[.9,.4,0],yOffset:{near:.6,far:1},range:{min:-1,near:3,far:4,max:21}},ChaseFar:{...J.ChaseFar,pitch:{near:.3,far:.2},posOffset:[.9,.3,0],yOffset:{near:1,far:2},range:{min:-3,near:6,far:9,max:16}}});new m,new m;new m,new m,new m;const $e={vecA:new m},ni={steerAssist:.8,counterSteerAssist:0,rearStability:.6,tyreFriction:1.6,kineticFrictionFactor:.8,tyreStiffness:.9,lockDiff:!1,shockTravel:.16,shockForce:2.6,damping:12,weightFactor:.1,wheelMassFactor:.4},Nt=class Nt extends Oi{constructor(){super();o(this,"trailUpdateTimer",0);o(this,"trailUpdateInterval",.01);Nt.tuningConfig.addListener("any",e=>{this.tuning={...this.tuning,...e};for(let s of this.wheels)s.travel=this.tuning.shockTravel,s.children[2].scale.set(s.travel,s.travel,s.travel)}),this.prepMetrics()}init(){let e=new $t({fog:!1});n.container.add(new Qe(new gt().setFromPoints([new m(this.metrics.wheelBase,0,this.metrics.axleWidth/2-.1),new m(this.metrics.wheelBase,0,this.metrics.axleWidth/2),new m(this.metrics.wheelBase,this.metrics.wheelRadius+this.tuning.shockTravel,this.metrics.axleWidth/2),new m(this.metrics.wheelBase,this.metrics.wheelRadius+this.tuning.shockTravel,-this.metrics.axleWidth/2),new m(this.metrics.wheelBase,0,-this.metrics.axleWidth/2),new m(this.metrics.wheelBase,0,-this.metrics.axleWidth/2+.1)]),e)),n.container.add(new Qe(new gt().setFromPoints([new m(0,0,this.metrics.axleWidth/2-.1),new m(0,0,this.metrics.axleWidth/2),new m(0,this.metrics.wheelRadius+this.tuning.shockTravel,this.metrics.axleWidth/2),new m(0,this.metrics.wheelRadius+this.tuning.shockTravel,-this.metrics.axleWidth/2),new m(0,0,-this.metrics.axleWidth/2),new m(0,0,-this.metrics.axleWidth/2+.1)]),e)),n.container.add(new Qe(new gt().setFromPoints([new m(0,this.metrics.wheelRadius+this.tuning.shockTravel,0),new m(0,this.metrics.wheelRadius+this.tuning.shockTravel+.1,0),new m(this.metrics.wheelBase,this.metrics.wheelRadius+this.tuning.shockTravel+.1,0),new m(this.metrics.wheelBase,this.metrics.wheelRadius+this.tuning.shockTravel,0)]),e)),this.wheelObj=new we;let s=new No(this.metrics.wheelRadius,this.metrics.wheelRadius,this.metrics.wheelWidth,11),a=new Qe(new Ns(s),e);a.rotation.x=Math.PI/2,a.position.z+=this.metrics.wheelWidth/2,this.wheelObj.add(a);let t=new No(this.metrics.wheelRadius,this.metrics.wheelRadius,.2),r=new ei(t,z.shadow);r.rotation.x=Math.PI/2,r.position.z+=this.metrics.wheelWidth/2,r.castShadow=!0,this.wheelObj.add(r);let c=new Oo(1,16);this.wheelObj.add(new Qe(new Ns(c),e));let g=new Oo(.01,8);this.wheelObj.add(new Qe(new Ns(g),e));for(let f of this.wheels)f.children[2].scale.set(f.travel,f.travel,f.travel);this.initDebug(),this.update=this.updateLoad,this.elementsToLoad=0,this.onInit()}onReady(){super.onReady();for(let e of this.wheels)e.travel=this.tuning.shockTravel,e.children[2].scale.set(e.travel,e.travel,e.travel)}initDebug(){let e=new $t({color:65535,fog:!1}),s=new $t({color:16776960,fog:!1}),a=new Te({wireframe:!0,fog:!1,color:16720418}),t=new Te({wireframe:!0,fog:!1,color:65535}),r=new $t({color:16777215,fog:!1,transparent:!0,opacity:1,vertexColors:!0});this.debugContainer=new we,lt.add(this.debugContainer),this.debugUp=new Qe(new gt().setFromPoints([new m(0,0,0),new m(0,1,0)]),new $t({color:255,fog:!1})),this.debugUp.scale.set(.25,.25,.25),this.debugContainer.add(this.debugUp),this.debugUpPositions=this.debugUp.geometry.attributes.position,this.debugContact=new Qe(new gt().setFromPoints([new m(0,0,0),new m(0,1,0)]),new $t({color:65280,fog:!1})),this.debugContact.scale.set(.5,.5,.5),this.debugContainer.add(this.debugContact),this.debugContactPositions=this.debugContact.geometry.attributes.position,this.debugWheels=[];for(let c=0;c<4;c++){let g={vel:new Qe(new gt().setFromPoints([new m(0,0,0),new m(0,1,0)]),e),accel:new Qe(new gt().setFromPoints([new m(0,0,0),new m(0,1,0)]),s),contact:new ei(new ss(.05,8,4),a),tPos:new ei(new ss(.05,8,4),t),trail:new Qe(new gt,r),trailIndex:0};lt.add(g.vel),g.velPositions=g.vel.geometry.attributes.position,g.vel.frustumCulled=!1,lt.add(g.accel),g.accelPositions=g.accel.geometry.attributes.position,g.accel.frustumCulled=!1,lt.add(g.trail),g.trailPositions=new Ye(new Float32Array(18e3),3),g.trail.geometry.setAttribute("position",g.trailPositions),g.trailColors=new Ye(new Float32Array(18e3),3),g.trail.geometry.setAttribute("color",g.trailColors),g.trail.frustumCulled=!1,lt.add(g.contact),lt.add(g.tPos),lt.frustumCulled=!1,this.debugWheels.push(g)}this.targetPosShape=new ei(new ss(.5,32,16),new Te({color:16711935})),lt.add(this.targetPosShape)}destroy(){super.destroy(),lt.clear(),this.debugContainer.clear(),delete this.debugWheels}updateVisuals(e){this.debugUpPositions.array[3]=this.up.x,this.debugUpPositions.array[4]=this.up.y,this.debugUpPositions.array[5]=this.up.z,this.debugUpPositions.needsUpdate=!0,this.debugContactPositions.array[3]=this.contactDown.x,this.debugContactPositions.array[4]=this.contactDown.y,this.debugContactPositions.array[5]=this.contactDown.z,this.debugContactPositions.needsUpdate=!0,this.trailUpdateTimer+=e;for(let s=0;s<4;s++){let a=this.debugWheels[s],t=this.wheels[s];$e.vecA.copy(this.wheels[s].groundNorm).normalize(),a.velPositions.array[0]=this.wheels[s].worldPos.x,a.velPositions.array[1]=this.wheels[s].worldPos.y+this.metrics.wheelRadius,a.velPositions.array[2]=this.wheels[s].worldPos.z,a.velPositions.array[3]=this.wheels[s].worldPos.x+$e.vecA.x,a.velPositions.array[4]=this.wheels[s].worldPos.y+$e.vecA.y+this.metrics.wheelRadius,a.velPositions.array[5]=this.wheels[s].worldPos.z+$e.vecA.z,a.velPositions.needsUpdate=!0,$e.vecA.copy(this.wheels[s].velocity).normalize(),a.accelPositions.array[0]=this.wheels[s].worldPos.x,a.accelPositions.array[1]=this.wheels[s].worldPos.y+this.metrics.wheelRadius,a.accelPositions.array[2]=this.wheels[s].worldPos.z,a.accelPositions.array[3]=this.wheels[s].worldPos.x+$e.vecA.x,a.accelPositions.array[4]=this.wheels[s].worldPos.y+$e.vecA.y+this.metrics.wheelRadius,a.accelPositions.array[5]=this.wheels[s].worldPos.z+$e.vecA.z,a.accelPositions.needsUpdate=!0,this.trailUpdateTimer>this.trailUpdateInterval&&this.wheels[s].speed>.5&&($e.a=.5+.5*(-this.wheels[s].latForce/e)/1e3,a.trailColors.array[a.trailIndex]=$e.a,a.trailPositions.array[a.trailIndex++]=this.wheels[s].worldPos.x,a.trailColors.array[a.trailIndex]=1-$e.a,a.trailPositions.array[a.trailIndex++]=this.wheels[s].worldPos.y+this.metrics.wheelRadius+Math.floor(s/2)*.25,a.trailColors.array[a.trailIndex]=0,a.trailPositions.array[a.trailIndex++]=this.wheels[s].worldPos.z,a.trailPositions.needsUpdate=!0,a.trailColors.needsUpdate=!0,a.trail.geometry.setDrawRange(0,a.trailIndex/3)),a.tPos.position.copy(t.worldPos),a.contact.position.copy(t.contactPoint)}this.trailUpdateTimer>this.trailUpdateInterval&&(this.trailUpdateTimer=0),this.autodrive&&this.targetPosShape.position.copy(this.autodriver.targetPos),this.debugContainer.position.copy(n.position),this.debugContainer.position.y+=1}};o(Nt,"key","debug"),o(Nt,"name","Debug"),o(Nt,"tuningConfigMeta",{steerAssist:{key:"steerAssist",readable:"Steer assist",label:"Steer assist",type:E.Range,default:ni.steerAssist,min:0,max:1,precision:1},counterSteerAssist:{key:"counterSteerAssist",readable:"Counter-steer assist",label:"Counter-steer assist",type:E.Range,default:ni.counterSteerAssist,min:0,max:1,precision:1},rearStability:{key:"rearStability",readable:"Rear stability",label:"Rear stability",type:E.Range,default:ni.rearStability,min:0,max:1,precision:1},tyreFriction:{key:"tyreFriction",readable:"Tyre Grip",label:"Tyre Grip",type:E.Range,default:1.1,min:.2,max:4,precision:1},kineticFrictionFactor:{key:"kineticFrictionFactor",readable:"Tyre Slip Factor",label:"Tyre Slip Factor",type:E.Range,default:.8,min:.1,max:1,precision:1},tyreStiffness:{key:"tyreStiffness",readable:"Tyre Stiffness",label:"Tyre Stiffness",type:E.Range,default:.5,min:.1,max:1,precision:1},damping:{key:"damping",readable:"Shock damping",label:"Shock damping",type:E.Range,default:8,min:2,max:24,precision:0},shockTravel:{key:"shockTravel",readable:"Shock travel",label:"Shock travel",type:E.Range,default:.12,min:.05,max:.4,precision:2},shockForce:{key:"shockForce",readable:"Shock force",label:"Shock force",type:E.Range,default:ni.shockForce,min:2,max:20,precision:0},lockDiff:{key:"lockDiff",readable:"Locked diff",label:"Locked diff",type:E.Boolean,default:!0},weightFactor:{key:"weightFactor",readable:"Inertia factor",label:"Inertia factor",type:E.Range,default:ni.weightFactor,min:0,max:1,precision:2},wheelMassFactor:{key:"wheelMassFactor",readable:"Wheel mass factor",label:"Wheel mass factor",type:E.Range,default:1,min:.1,max:10,precision:1}}),o(Nt,"tuningConfig",new Ve("Debug",ni)),o(Nt,"cameras",{...J,Chase:{...J.Chase,posOffset:[1.38,0,0]},ChaseFar:{...J.ChaseFar,posOffset:[1.38,0,0]}});let ga=Nt;const uc=""+new URL("../assets/bike_wheel.7f70e3e5.glb",import.meta.url).href,fc=""+new URL("../assets/bike_main.4646b282.glb",import.meta.url).href,pc=""+new URL("../assets/bike_interior.2d798407.glb",import.meta.url).href,Ac=""+new URL("../assets/bike_interior_bars.a17b1ae7.glb",import.meta.url).href,mc=""+new URL("../assets/bike_window.5cc59586.webp",import.meta.url).href,vc=""+new URL("../assets/bike_interior_map.a5657c67.webp",import.meta.url).href;new m,new m;const Ce={},_e={},Oe={};function Kt(l){return new Promise((i,e)=>{const s=new Image;s.onload=()=>i(s),s.onerror=e,s.src=l})}async function wc(){Oe.boost=await Kt(Ba),Oe.boostLine=await Kt(Ua),Oe.lock=await Kt(Ha),Oe.autodrive=await Kt(za),Oe.steerLock=await Kt(Wa),Oe.park=await Kt(Ga),Oe.lights=await Kt(Va)}const xc=Math.PI*.75,Ks=Math.PI,cr=Math.PI*1.25,ct=100,_t=126,qt=386,Sc=10,qs=55-Sc/2,Js=116,Xi=ct+54,Yi=56,gr=.65,ur="#f4f2ed66",yi="#f4f2ed",bc="#f4f2ed33";class di extends Fi{constructor(){super();o(this,"name","bike");o(this,"geometry",{body:fc,wheel:uc,interior:pc,steer:Ac});o(this,"maps",{windscreen:mc,interior:vc});o(this,"metrics",{wheelBase:1.9,frontWheelWidth:.1,rearWheelWidth:.14,wheelRadius:.32,maxLean:1.05,frontWheelTilt:.35,rearWheelTilt:.2,wheelMass:40,wheelContactWidth:.05,collisionMargin:.3,boxWidth:1,boxLength:2});o(this,"tuning",{accel:10,accelEaseSpeed:240/3.6,accelEaseFactor:.75,boostFactor:.5,topSpeed:240/3.6,reverse:2,brake:8,jerk:64,brakeResponse:.5,speedFactor:1,corneringFactor:.6,corneringCaution:0,targetDistFactor:1.3,steerAccel:12,steerSpeed:1.57,steerInterval:1,maxSteer:.68,shockTravel:.1,shockTravelFront:.1,shockTravelRear:.1,shockForce:8,dampening:.05,damping:16,rockFactorFront:.5,rockFactorRear:1,frontWeightFactor:14,rearWeightFactor:10,shockExponent:2.2,aeroFactor:.001,drag:.002,rollResistance:.25,slipBase:.2,slipMod:.1,tyreFriction:1,kineticFrictionFactor:.75,lonFrictionFactor:.5,cautionFactor:.68,minCautionFactor:.32});o(this,"layout",{headlightPos:{x:2.1,y:.5,z:.1},headlightTarget:{x:3.1,y:.45,z:.1},steeringWheelPos:{x:1.65,y:.74,z:0},steeringWheelAngle:-.3});o(this,"interiorObjects",{});o(this,"exteriorObjects",{});o(this,"dashCanvas");o(this,"dashCanvasCtx");o(this,"dashCanvasMat");o(this,"dashCanvasTex");o(this,"onTuningConfig",e=>{this.tuning={...this.tuning,...e};for(let s of this.wheels)s.travel=this.tuning.shockTravel});o(this,"speedConversion",1);o(this,"distConversion",1);o(this,"onUnitsChanged",()=>{this.speedConversion=Pa[L.units],this.distConversion=vi[L.units],this.speedLabel=L.units==0?"KPH":"MPH",this.distLabel=L.units==0?"KM":"MILES",this.handleSpeedControl()});o(this,"scActive",!0);o(this,"scMode",0);o(this,"scTarget",20);o(this,"scTargetProp",.5);o(this,"handleSpeedControl",()=>{this.scActive=V.speedControl,this.scActive&&(this.scMode=V.speedControlMode==ys.Cruise?"CRUISE":"LIMIT",this.scTargetProp=V.speedControlTargetMS/(n.tuning.topSpeed*1.1))});o(this,"autodriveLabel","DRIVE");o(this,"onAutodriveMode",e=>{e==q.FULL?this.autodriveLabel="AUTODRIVE":e==q.SPEED?this.autodriveLabel="AUTOSPEED":e==q.STEER&&(this.autodriveLabel="AUTOSTEER")});o(this,"hasAutodrive",!1);o(this,"onAutodrive",e=>{this.hasAutodrive=e});o(this,"seenIndex",-10);o(this,"wormPoints",[]);o(this,"wormPointsRight",[]);o(this,"wormHorizon",14);o(this,"wormScale",.4);o(this,"wormTargetAngle",null);o(this,"doUpdateScreen",!0);o(this,"dashPower",0);o(this,"seenDist",0);o(this,"seenDistZeroes","");o(this,"seenDistSpaces","");L.addListener("units",this.onUnitsChanged),V.addListener("speedControl",this.handleSpeedControl),V.addListener("speedControlMode",this.handleSpeedControl),V.addListener("speedControlTargetMS",this.handleSpeedControl),pi.addListener(this.onAutodrive),L.addListener("autodriveMode",this.onAutodriveMode),this.prepMetrics()}destroy(){super.destroy(),L.removeListener("units",this.onUnitsChanged),V.removeListener("speedControl",this.handleSpeedControl),V.removeListener("speedControlMode",this.handleSpeedControl),V.removeListener("speedControlTargetMS",this.handleSpeedControl),pi.removeListener(this.onAutodrive),L.removeListener("autodriveMode",this.onAutodriveMode)}async init(){this.ready=!1,this.elementsToLoad>0&&se.add("VEHICLE: Attempting to load new vehicle before prev initialisation has completed");for(let s in this.maps)z.setMapForMaterial(s,this.maps[s]);z.windscreen.color.setHex(5596791),z.metal.color.setHex(16777215),z.metal.specular.setHex(16777215);const e=new Oa;Ce.body?(n.container.add(Ce.body),this.exteriorObjects.body=Ce.body):(this.elementsToLoad++,e.load(this.geometry.body,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0))}),this.exteriorObjects.body=a,a.frustumCulled=!1,n.container.add(a),Ce.body=a,this.onElementLoaded()})),Ce.wheel?(this.frontWheelObj=Ce.wheel,this.rearWheelObj=this.frontWheelObj.clone(),this.exteriorObjects.frontWheel=this.frontWheelObj,this.exteriorObjects.rearWheel=this.rearWheelObj):(this.elementsToLoad++,e.load(this.geometry.wheel,s=>{let a=s.scene;a.traverse(t=>{t.isMesh&&(t.material=z.getMaterialByName(t.name),t.material.shouldCastShadow&&(t.castShadow=!0),t.position.z-=.084,t.scale.set(this.metrics.wheelRadius,this.metrics.wheelRadius,this.metrics.wheelRadius))}),a.frustumCulled=!1,this.frontWheelObj=a,this.rearWheelObj=a.clone(),this.exteriorObjects.frontWheel=this.frontWheelObj,this.exteriorObjects.rearWheel=this.rearWheelObj,Ce.wheel=a,this.onElementLoaded()})),Ce.interior?(n.container.add(Ce.interior),this.interiorObjects.interior=Ce.interior,this.dashCanvasMat=_e.mat,this.dashCanvas=_e.canvas,this.dashCanvasCtx=_e.ctx,this.dashCanvasTex=_e.tex,this.wormGradient=_e.wormGradient,this.speedGradient=_e.speedGradient,this.powerGradient=_e.powerGradient):(this.elementsToLoad++,e.load(this.geometry.interior,s=>{let a=s.scene;z.setOnObject(a),a.traverse(t=>{if(t.name=="bike-dashboard-screen"){let r=document.createElement("canvas"),c=r.getContext("2d");r.width=512,r.height=512;let g=new Ea(r);g.colorSpace=Bt,g.flipY=!1,g.minFilter=Ut,g.magFilter=Ut,g.generateMipmaps=!1,c.fontVariantNumeric="slashed-zero",this.wormGradient=c.createLinearGradient(0,88,0,16),this.wormGradient.addColorStop(.2,"#f4f2edff"),this.wormGradient.addColorStop(1,"#f4f2ed00"),this.speedGradient=c.createConicGradient(xc-.01,_t,ct),this.speedGradient.addColorStop(0,"rgb(10, 105, 164)"),this.speedGradient.addColorStop(.3,"rgb(55, 192, 255)"),this.speedGradient.addColorStop(.5,"rgb(230, 205, 107)"),this.speedGradient.addColorStop(.6,"rgb(225, 120, 45)"),this.powerGradient=c.createConicGradient(Ks-.01,qt,ct),this.powerGradient.addColorStop(0,"rgb(23, 161, 60)"),this.powerGradient.addColorStop(.25,"rgb(90, 197, 88)"),this.powerGradient.addColorStop(.5,"rgb(245, 207, 55)"),this.powerGradient.addColorStop(.6,"rgb(225, 51, 45)");let f=new K({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:1,transparent:!0});f.needsCameraPosition=!0,this.dashCanvasMat=f,this.dashCanvas=r,this.dashCanvasCtx=c,this.dashCanvasTex=g,t.material=f,_e.canvas=r,_e.mat=f,_e.tex=g,_e.ctx=c,_e.wormGradient=this.wormGradient,_e.speedGradient=this.speedGradient,_e.powerGradient=this.powerGradient}}),n.container.add(a),this.interiorObjects.interior=a,a.frustumCulled=!1,Ce.interior=a,this.onElementLoaded()})),Ce.steer?(n.container.add(Ce.steer),this.interiorObjects.steeringWheel=Ce.steer):(this.elementsToLoad++,e.load(this.geometry.steer,s=>{let a=s.scene;z.setOnObject(a),a.rotation.order="ZYX",a.rotation.z=-this.layout.steeringWheelAngle,a.position.copy(this.layout.steeringWheelPos),this.interiorObjects.steeringWheel=a,a.frustumCulled=!1,n.container.add(a),Ce.steer=a,this.onElementLoaded()})),await wc(),this.onInit()}onReady(){this.elementsToLoad=0,this.ready=!0,this.initWheels(),this.reset(),this.update=this.updateStationed,this.audioController.init(),this.setAutodrive(n.inAutodrive),n.onReady(),this.handleSpeedControl(),this.updateInteriorVisibility()}setInterior(){this.updateInteriorVisibility()}setShowWheel(e){this.updateInteriorVisibility()}updateInteriorVisibility(){if(this.ready){for(let e in this.interiorObjects)this.interiorObjects[e].visible=n.isInterior;this.interiorObjects.steeringWheel.visible=this.interiorObjects.steeringWheel.visible&&L.showWheel;for(let e in this.exteriorObjects)this.exteriorObjects[e].visible=!n.isInterior}}updateVisuals(e){this.ready&&(n.isInterior&&this.updateDashScreen(),z.setBrakeLights(this.braking,this.softBraking),n.inAutodrive?this.interiorObjects.steeringWheel.rotation.y=this.interiorObjects.steeringWheel.rotation.y*.8+.6*this.steer/this.tuning.maxSteer*.2:this.interiorObjects.steeringWheel.rotation.y=.6*this.steer/this.tuning.maxSteer)}updateWormPoints(){let e=ja(n.position.x,n.position.z,v.vehicleNode),s=v.vehicleNode.next,a=s.next.p.x-s.p.x,t=s.next.p.z-s.p.z,r={x:s.p.x+a*e,z:s.p.z+t*e},c={x:256,y:80},g=s.i+this.wormHorizon;this.wormPoints.length=0,this.wormPointsRight.length=0;let f=s.a-s.da*e;if(this.wormTargetAngle==null)this.wormTargetAngle=-(f+Math.HALFPI);else{let S=-(s.a+Math.HALFPI);S-this.wormTargetAngle<-Math.PI?this.wormTargetAngle-=Math.TAU:S-this.wormTargetAngle>Math.PI&&(this.wormTargetAngle+=Math.TAU),this.wormTargetAngle=this.wormTargetAngle*.9+.1*-(f+Math.HALFPI)}let x=Math.cos(this.wormTargetAngle),w=Math.sin(this.wormTargetAngle);for(;s.i!==g;){let S=s.next.p.x-s.p.x,D=s.next.p.z-s.p.z,C=s.p.x+S*e-r.x,k=s.p.z+D*e-r.z;C*=this.wormScale,k*=this.wormScale;let T=C*x-k*w,P=C*w+k*x,B=40+-P/90*30;if(Math.abs(T)>B||P<-66)break;this.wormPoints.push([T+c.x,P+c.y]),s=s.next}this.seenIndex=v.vehicleIndex}updateDashScreen(){if(this.doUpdateScreen=!this.doUpdateScreen,!this.doUpdateScreen)return;let e=this.dashCanvasCtx;if(e.clearRect(0,0,512,200),this.updateWormPoints(),this.wormPoints.length){e.strokeStyle=this.wormGradient,e.globalAlpha=1,e.lineCap="round",e.lineWidth=6,e.beginPath(),e.moveTo(this.wormPoints[0][0],this.wormPoints[0][1]);for(let N of this.wormPoints)e.lineTo(N[0],N[1]);e.stroke(),e.globalAlphaa=1,e.lineCap="butt"}e.beginPath(),e.lineWidth=8;let s=Math.PI*.75,a=Math.max(0,Math.min(1,n.speed/(n.tuning.topSpeed*1.1)));a<.01&&(a=0),e.strokeStyle=a==1?"rgb(249, 63, 56)":this.speedGradient,e.arc(_t,ct,qs,s,s+a*cr),e.stroke(),e.font="36px Sono",e.fillStyle="#f4f2ed",e.textAlign="center",e.textBaseline="middle",e.fillText(Math.round(n.speed*this.speedConversion),_t,ct),e.font="12px Sono",e.fillStyle=ur,e.textAlign="center",e.textBaseline="middle",e.fillText(this.speedLabel,_t,ct+24),e.beginPath(),e.lineWidth=8;let t=this.autodrive&&L.autodriveMode!==q.STEER?this.autodriver.inputs.accel/n.tuning.accel:0,r=0;n.direction>0?r=Math.max(0,I.signal.Forward-I.signal.Backward):r=Math.max(0,I.signal.Backward-I.signal.Forward)*.33;let c=0;n.hasCruiseTarget&&(c=this.inputs.accel/this.tuning.accel);let g=Math.min(1,Math.max(t,r,c));if(I.signal.Forward>this.dashPower?this.dashPower=this.dashPower*.8+.2*g:this.dashPower=this.dashPower*.9+.1*g,this.dashPower<.01&&(this.dashPower=0),e.arc(qt,ct,qs,Ks,Ks+this.dashPower*cr),e.strokeStyle=n.hasBoost?"rgb(225, 51, 45)":this.powerGradient,e.stroke(),n.hasBoost?e.drawImage(Oe.boost,qt-18,ct-18,36,36):e.drawImage(Oe.boostLine,qt-18,ct-18,36,36),this.scActive){e.globalAlpha=gr,e.font="12px Sono",e.fillStyle=yi,e.textAlign="center",e.textBaseline="middle",e.fillText(this.scMode,_t+Yi,Xi),e.drawImage(Oe.lock,_t+Yi-13,Xi-26,26,26),e.globalAlpha=1,e.beginPath(),e.lineWidth=18;let N=s+this.scTargetProp*Math.PI*1.25;e.arc(_t,ct,qs,N-.025,N+.025),e.strokeStyle=yi,e.stroke()}this.hasAutodrive&&(e.globalAlpha=gr,e.font="12px Sono",e.fillStyle=yi,e.textAlign="center",e.textBaseline="middle",e.fillText(this.autodriveLabel,qt-Yi,Xi),e.drawImage(Oe.autodrive,qt-Yi-13,Xi-26,26,26),e.globalAlpha=1);let f=Math.floor(vt(eo)*this.distConversion)%1e5;if(f!==this.seenDist){let N="",j="";f<1e4&&(N+="0",j+=" ",f<1e3&&(N+="0",j+=" ",f<100&&(N+="0",j+=" ",f<10&&(N+="0",j+=" ")))),N+=" ",f>=10&&(N+=" ",f>=100&&(N+=" ",f>=1e3&&(N+=" "))),this.seenDist=f,this.seenDistZeroes=N,this.seenDistSpaces=j}e.font="22px Sono",e.fillStyle=bc,e.textAlign="center",e.textBaseline="middle",e.fillText(this.seenDistZeroes,256,Js),e.fillStyle=yi,e.fillText(this.seenDistSpaces+this.seenDist,256,Js),e.font="12px Sono",e.fillStyle=ur,e.textAlign="center",e.textBaseline="middle",e.fillText(this.distLabel,256,Js+18);let x=new Date,w=x.getHours();w<10&&(w="0"+w);let S=x.getMinutes();S<10&&(S="0"+S);let D=w+":"+S;e.font="12px Sono",e.fillStyle=yi,e.textAlign="center",e.textBaseline="middle",e.fillText(D,256,173);const C=.65;e.globalAlpha=C;const k=162,T=20,P=T/2,B=_t-58-P,O=qt+58-P,W=T+18;vt(to)&&e.drawImage(Oe.park,B,k-P,T,T),vt(io)&&e.drawImage(Oe.steerLock,B+W,k-P,T,T),n.headlights&&e.drawImage(Oe.lights,O,k-P,T,T),e.globalAlpha=1,this.dashCanvasTex.needsUpdate=!0}}o(di,"key","bike"),o(di,"name","Bike"),o(di,"icon","/img/ico_veh_ebike.svg"),o(di,"tuningConfig",null),o(di,"tuningConfigMeta",{});const yc=""+new URL("../assets/coupe_wheel.c6147816.obj",import.meta.url).href,Dc=""+new URL("../assets/drift_coupe_main.e5ad1282.obj",import.meta.url).href,Mc=""+new URL("../assets/coupe_interior.09a042a6.obj",import.meta.url).href,Lc=""+new URL("../assets/coupe_dash.c2d78df2.obj",import.meta.url).href,Rc=""+new URL("../assets/coupe_steering.4443a960.obj",import.meta.url).href,Cc=""+new URL("../assets/coupe_map.a8b5765d.webp",import.meta.url).href,Tc=""+new URL("../assets/coupe_wheel.9c1b070c.webp",import.meta.url).href,Ic=""+new URL("../assets/coupe_window.c8de7db5.webp",import.meta.url).href,h={vecA:new m,vecB:new m,vecC:new m,axleFPos:new m,axleFDir:new m,axleRPos:new m,axleRDir:new m,chassisDir:new m,fRightAuthorityS:.5,rRightAuthorityS:.5,frontAuthorityS:.5,maxSteer:.68,weightStability:1},$s=new m(0,1,0),Ze=Math.PI*2;class ua extends Ke{constructor(){super();o(this,"name","driftmas");o(this,"metrics",{axleWidth:1.54,wheelBase:2.75,wheelWidth:.16,wheelRadius:.342665,wheelMass:20,collisionMargin:.16,comHeight:.5,boxWidth:1.42,boxLength:2.75});o(this,"audio",{motor:zt,boost:zt});o(this,"tuning",{accel:8,topSpeed:40,reverse:5,brake:7,jerk:200,brakeResponse:.3,boostFactor:1,speedFactor:1,rearStability:.5,corneringFactor:.35,corneringCaution:0,targetDistFactor:1.1,peakSlipAngle:.1,steerInterval:1.1,maxSteer:.72,engineRateFactor:1.2,engineBoostFactor:1.4,engineVolFactor:1,shockTravel:.12,shockForce:10,damping:10,rockInertia:.05,wheelMassFactor:.1,weightFactor:.2,maxLinearAccel:50,maxRotAccel:3,rockFactorFront:.5,rockFactorRear:1,aeroFactor:.003,drag:.0018,rollResistance:.25,tyreFriction:1.6,kineticFrictionFactor:.8,lonFrictionFactor:.5,tyreStiffness:.8,lockDiff:!0,lockDiffOnlyRear:!0,cautionFactor:1,minCautionFactor:.2,steerAssist:1,counterSteerAssist:0});o(this,"layout",{headlightPos:{x:3.1,y:.7,z:.64},headlightTarget:{x:4.1,y:.55,z:.74},steeringPos:{x:1.75,y:.92,z:.32},steeringWheelAngle:.3});o(this,"wheelObj");o(this,"meshes",{});o(this,"forward",new m);o(this,"up",new m);o(this,"down",new m);o(this,"right",new m);o(this,"comPos",new m);o(this,"comPosLerped",new m);o(this,"groundAngle",0);o(this,"groundOrientation",new Z(0,0,0,"YZX"));o(this,"groundUp",new m);o(this,"groundDown",new m);o(this,"contactUp",new m);o(this,"contactDown",new m);o(this,"boostFactor",0);o(this,"collisionStrength",0);o(this,"collisionPoint",new m);o(this,"collidingGround",0);o(this,"collidingGroundBounce",1);o(this,"chassisPComPos",new m);o(this,"chassisPRot",new Z(0,0,0,"YZX"));o(this,"chassisVel",new m);o(this,"chassisRotVel",new m);o(this,"chassisPRotVel",new m);o(this,"chassisCandidatePos",new m);o(this,"chassisCandidateComPos",new m);o(this,"chassisCandidateRot",new Z(0,0,0,"YZX"));o(this,"wheelsCandidatePos",new m);o(this,"wheelsCandidateRot",new Z(0,0,0,"YZX"));o(this,"peakSlipAngle",.1);o(this,"inputs",{accel:0,steer:0,gamepadSteer:0,brake:0,handbrake:0,stiffSteer:0});o(this,"fly",{up:0,right:0,back:0});o(this,"autodriver");o(this,"drive",0);o(this,"steer",0);o(this,"effectiveSteer",0);o(this,"effectiveSteerL",0);o(this,"effectiveSteerR",0);o(this,"steerL",0);o(this,"steerR",0);o(this,"steerDifferential",1);o(this,"rearSteerDifferential",1);o(this,"slip",0);o(this,"frontSlip",0);o(this,"spin",0);o(this,"speedLerp",0);o(this,"powerLerp",0);o(this,"downforce",0);o(this,"holdHandbrake",!1);o(this,"pdT",.0167);o(this,"orientation",new Z(0,0,0,"YZX"));o(this,"orientationFlat",new Z(0,0,"YZX"));o(this,"steerOrientation",new Z(0,0,0,"YZX"));o(this,"steerOrientationFlat",new Z(0,0,"YZX"));o(this,"chassisAccel",new m(0,0,0));o(this,"wheelDown",new m);o(this,"didCollide",!1);o(this,"didCollidePoint",!1);o(this,"fCollision",!1);o(this,"collisionSide",0);o(this,"collisionsDisabled",!1);o(this,"wheelsInside",{});o(this,"collisionPos",new m);o(this,"braking",!1);o(this,"brakeLerp",0);o(this,"brakeForce",0);o(this,"rockLatTarget",0);o(this,"rockLat",0);o(this,"rockLonTarget",0);o(this,"rockLon",0);o(this,"prevDriveDir",1);o(this,"driveMode",0);o(this,"driveModeFactor",.5);o(this,"isDriven",!1);o(this,"slipBase",.2);o(this,"slipMod",.1);o(this,"wheels",[]);o(this,"wheelFL");o(this,"wheelFR");o(this,"wheelRL");o(this,"wheelRR");o(this,"elementsToLoad",0);o(this,"ready",!1);o(this,"live",!1);o(this,"wasLive",!1);o(this,"processTime",0);o(this,"processSecs",0);o(this,"update",this.updateLoad);o(this,"vecs",{p:new m,pw:new m,pl:new m,wUp:new m,wLat:new m,wLon:new m,wLatNorm:new m,wLonNorm:new m,cumPos:new m,cumRot:new m,cPos:new m,cRot:new m});o(this,"chassisAccelA",new m);o(this,"reboundVec",new m);o(this,"reboundDir",new m);o(this,"comVec",new m);o(this,"posVec",new m);o(this,"comDir",new m);o(this,"velDir",new m);o(this,"velDirOrth",new m);o(this,"posDir",new m);o(this,"rotVec",new m);o(this,"comOrth",new m);o(this,"preColA",new m);o(this,"preColB",new m);o(this,"preVec",new m);o(this,"postVec",new m);o(this,"preVecDir",new m);o(this,"postVecDir",new m);o(this,"comVel",new m);o(this,"comAcc",new m);o(this,"autoSteer",0);this.prepMetrics(),this.audioController=new Xa(this),this.autodriver=new $a(()=>this.reset(),this),this.autodriver.hasSnow=!0}prepMetrics(){this.metrics.wheelCircumference=this.metrics.wheelRadius*2*Math.PI,this.layout.wheels=[{x:this.metrics.wheelBase,z:-this.metrics.axleWidth/2},{x:this.metrics.wheelBase,z:this.metrics.axleWidth/2},{x:0,z:-this.metrics.axleWidth/2},{x:0,z:this.metrics.axleWidth/2}],this.metrics.shadowMapSize=this.metrics.wheelBase*1.5,n.shadowMapSize=this.metrics.shadowMapSize,n.lights.left.light.position.copy(this.layout.headlightPos),n.lights.left.target.position.copy(this.layout.headlightTarget),n.lights.right.light.position.copy(this.layout.headlightPos),n.lights.right.light.position.z*=-1,n.lights.right.target.position.copy(this.layout.headlightTarget),n.lights.right.target.position.z*=-1}init(){this.ready=!1,this.update=this.updateLoad,this.elementsToLoad=0,this.wheelObj=new we,this.onInit()}onInit(){Ya.addJob(this.load.bind(this),-1,"vehicle","vehicle",!0)}load(){return this.elementsToLoad?!1:(this.onReady(),!0)}onElementLoaded(){this.elementsToLoad--}onReady(){this.ready=!0,this.elementsToLoad=0,this.initWheels(),this.setDriveMode(V.mode),this.setDriverSide(L.driverSide),this.updatePeakSlipAngle(),this.reset(),this.update=this.updateStationed,this.audioController.init(),this.setAutodrive(n.inAutodrive),n.onReady()}initWheels(){let e=Math.PI,s=0,a=this.metrics.comHeight/(this.metrics.wheelBase/2),t=this.metrics.comHeight/(this.metrics.axleWidth/2)*.75,r=this.prepWheel();r.i=0,r.front=!0,r.relPos.set(this.metrics.wheelBase,0,-this.metrics.axleWidth/2),r.comPos.set(this.metrics.wheelBase/2,0,-this.metrics.axleWidth/2),r.comFactor.set(a,0,-t),r.axlePos.set(this.metrics.wheelBase,this.metrics.wheelRadius,-this.metrics.axleWidth/2),r.steerOrientation=new Z(0,0,0,"YZX"),r.position.copy(r.axlePos),r.euler.y=e,r.baseRotation.y=e,r.rotation.y=e,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelFL=r,r=this.prepWheel(),r.i=1,r.front=!0,r.relPos.set(this.metrics.wheelBase,0,this.metrics.axleWidth/2),r.comPos.set(this.metrics.wheelBase/2,0,this.metrics.axleWidth/2),r.comFactor.set(a,0,t),r.axlePos.set(this.metrics.wheelBase,this.metrics.wheelRadius,this.metrics.axleWidth/2),r.steerOrientation=new Z(0,0,0,"YZX"),r.position.copy(r.axlePos),r.baseRotation.y=s,r.euler.y=s,r.rotation.y=s,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelFR=r,r=this.prepWheel(),r.i=2,r.relPos.set(0,0,-this.metrics.axleWidth/2),r.comPos.set(-this.metrics.wheelBase/2,0,-this.metrics.axleWidth/2),r.comFactor.set(-a,0,-t),r.axlePos.set(0,this.metrics.wheelRadius,-this.metrics.axleWidth/2),r.position.copy(r.axlePos),r.euler.y=e,r.baseRotation.y=e,r.rotation.y=e,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelRL=r,r=this.prepWheel(),r.i=3,r.relPos.set(0,0,this.metrics.axleWidth/2),r.comPos.set(-this.metrics.wheelBase/2,0,this.metrics.axleWidth/2),r.comFactor.set(-a,0,t),r.axlePos.set(0,this.metrics.wheelRadius,this.metrics.axleWidth/2),r.position.copy(r.axlePos),r.euler.y=s,r.baseRotation.y=s,r.rotation.y=s,this.wheels.push(r),this.updateWheelWorldPos(r),r.pWorldPos.copy(r.worldPos),n.container.add(r),this.wheelRR=r}prepWheel(){let e=this.wheelObj.clone();return e.worldPos=new m,e.pWorldPos=new m,e.relPos=new m,e.comPos=new m,e.comFactor=new m,e.axlePos=new m,e.tPos=new m,e.collisionVector=new m,e.contactPoint=new m,e.groundPoint=new m,e.euler=new Z(0,0,0,"YXZ"),e.baseRotation=new Z(0,0,0,"YXZ"),e.groundOrientation=new Z(0,0,0,"YXZ"),e.accel=new m,e.accelDir=new m,e.velocity=new m,e.velocityDir=new m,e.groundNorm=new m,e.groundState={n:new m,f:1,s:0,b:1},e.radius=this.metrics.wheelRadius,e.travel=this.tuning.shockTravel,e.hasDrive=!0,this.resetWheelState(e),e}resetWheelState(e){e.speed=0,e.lonDirDot=1,e.latDirDot=0,e.direction=1,e.traction=1,e.downforce=.95,e.dS=0,e.onRoad=!0,e.latForce=0,e.pLat=0,e.maxLat=0,e.slip=0,e.drive=0,e.driveModeFactor=.5,e.kineticBlend=0,e.rollVelocity=0,e.snowFactor=1,e.snowDrag=1,e.snowDepth=0,e.collisionFactor=0,e.insideWall=!0,e.wd=0,e.shockFactor=.25,e.shockForce=1,e.shockExcess=0,e.shockVel=0,e.pShockVel=0,e.shockAcc=0,e.shockCompression=e.shockFactor*e.travel,e.pShockCompresion=e.shockCompression,e.height=0,e.groundHeight=0,e.pGroundHeight=0,e.groundHeightLateral=0,e.lonGroundAngle=0,e.latGroundAngle=0,e.cosLonGroundAngle=1,e.cosLatGroundAngle=1,e.sinLonGroundAngle=0,e.sinLatGroundAngle=0,e.velocity.set(0,0,0),e.velocityDir.set(0,0,0),e.accel.set(0,0,0),e.tPos.set(0,0,0),e.rotation.copy(e.baseRotation),e.euler.copy(e.baseRotation)}initWheelState(e){}setPose(e,s,a,t){t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),this.orientation.x=0,this.orientation.y=-t,this.orientation.z=0,s=ce.getRoadsideHeight(e,a,v.vehicleNode),h.vecA.set(e+Math.cos(t)*this.metrics.wheelBase,s,a+Math.sin(t)*this.metrics.wheelBase);let r=ce.getRoadsideHeight(h.vecA.x,h.vecA.z,v.vehicleNode);r||(r=s),this.orientation.z=Math.tan((r-s)/this.metrics.wheelBase),this.tiltZ=this.orientation.z,n.pitch=this.tiltZ,this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),this.tiltX=this.orientation.x,n.roll=this.tiltX,this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),this.up.set(0,1,0).applyEuler(this.orientation),this.down.copy(this.up).negate(),this.forward.set(1,0,0).applyEuler(this.orientation),n.forwardDir.copy(this.forward),this.orientationFlat.copy(this.orientation),this.steerOrientationFlat.copy(this.orientation),h.vecA.set(e,s,a);for(let c of this.wheels)this.resetWheelState(c),c.contactPoint.copy(c.relPos).add(h.vecA),c.groundPoint.copy(c.contactPoint),c.groundHeight=c.groundPoint.y,c.pGroundHeight=c.groundHeight,c.latGroundAngle=0,c.lonGroundAngle=this.tiltZ,c.cosLonGroundAngle=Math.cos(this.tiltZ);h.frontGroundHeight=(this.wheelFL.groundHeight+this.wheelFR.groundHeight)/2,h.rearGroundHeight=(this.wheelRL.groundHeight+this.wheelRR.groundHeight)/2,this.groundAngle=Math.asin((h.frontGroundHeight-h.rearGroundHeight)/this.wheelFL.groundPoint.distanceTo(this.wheelRL.groundPoint)),this.groundOrientation.x=0,this.groundOrientation.y=this.orientation.y,this.groundOrientation.z=this.groundAngle,this.groundUp.set(0,1,0).applyEuler(this.groundOrientation),this.groundDown.copy(this.groundUp).negate(),this.contactUp.copy(this.groundUp).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),n.position.set(e,s,a),n.pPosition.copy(n.position),n.heading=this.orientation.y,n.motionHeading=n.heading,n.setRotationFromEuler(this.orientation),n.updateMatrix(),n.updateMatrixWorld(!0),n.com.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase/2).add(n.position),h.vecA.copy(this.up).multiplyScalar(this.metrics.comHeight),n.com.add(h.vecA),this.comPosLerped.copy(n.com),this.comVel.set(0,0,0),this.comAcc.set(0,0,0);for(let c of this.wheels)this.updateWheelWorldPos(c),c.pWorldPos.copy(c.worldPos);this.chassisPComPos.copy(n.com),this.chassisPRot.copy(this.orientation)}reset(){let e=v.vehicleNode;this.setPose(e.p.x+e.n.x*n.driveLaneOffset,e.p.y,e.p.z+e.n.z*n.driveLaneOffset,e.next.a),this.chassisAccel.set(0,0,0),this.chassisVel.set(0,0,0),this.chassisRotVel.set(0,0,0),this.chassisPRotVel.copy(this.chassisRotVel),this.steerOrientation.copy(this.orientation),this.didCollide=!1,this.didCollidePoint=!1,this.fCollision=!1,this.collisionSide=0,this.collisionsDisabled=!1,this.inputs.accel=0,this.inputs.steer=0,this.inputs.brake=0,this.inputs.handbrake=0,this.inputs.stickySteer=0,this.autodriver.reset(),this.audioController.reset(),this.update=this.updateStationed,this.processTime=0,this.processSecs=0,n.hasBoost=!1,n.onReset()}destroy(){this.audioController.destroy(),this.autodriver.destroy()}updateStationed(e){if(I.signal.Handbrake=1,n.hasHandbrake=!0,h.debugObj={},this.handleInput(e),!Je.isCinecam&&I.signal.Backward+I.signal.Forward>0||this.autodrive||I.signal.Autodrive||n.hasCruiseTarget){n.hasHandbrake=!1,this.holdHandbrake=!n.hasCruiseTarget&&!this.autodrive,this.update=this.updateLive;return}this.updatePhysics(e),this.updateAudio(e),this.updateVisuals(e),this.pdT=e}updateLive(e){h.debugObj={},this.handleInput(e);let s=e;for(;!mt.stepping&&s>.042;)this.updatePhysics(.04),this.pdT=.04,s-=.04;this.updatePhysics(s),this.updateAudio(e),this.updateVisuals(e),this.pdT=s}updatePhysics(e){this.updateNew(e),this.updateChassisState(e),this.updateWheelsPost(e)}updateVisuals(e){}updateLoad(){}updateNew(e){this.steerOrientation.copy(this.orientation),this.steerOrientation.y+=this.effectiveSteer,h.frontSlip=(this.wheelFL.slip+this.wheelFR.slip)/2,h.rearSlip=(this.wheelRL.slip+this.wheelRR.slip)/2,h.frontRearSlipRatio=0,h.stabilityFactor=1,h.frontSlip>0&&h.rearSlip>h.frontSlip&&(h.frontRearSlipRatio=Math.min(h.rearSlip,Math.min(2,h.rearSlip/h.frontSlip)-1),h.stabilityFactor=1+h.frontRearSlipRatio*this.tuning.rearStability),h.vecA.set(n.direction,0,0).applyEuler(this.steerOrientation),h.driftAlignment=Math.abs(n.motionDir.dot(h.vecA));for(let t of this.wheels){t.velocity.subVectors(t.worldPos,t.pWorldPos).divideScalar(this.pdT),t.velocityDir.copy(t.velocity).normalize();let r=t.velocity.length();r>t.speed&&(r-t.speed)/e>25&&t.velocity.copy(t.velocityDir).multiplyScalar(25*e+t.speed),t.pWorldPos.copy(t.worldPos),t.speed=t.velocity.length(),t.dS=t.speed*e*Math.abs(t.lonDirDot),t.accel.set(0,0,0),t.shockForce<=1?t.downforce=t.shockForce*.9:t.downforce=.9+.1*Math.sqrt((t.shockForce-1)/(this.tuning.shockForce-1)),t.groundTraction=(Math.max(0,t.groundNorm.dot($s)-.5)*2)**2,t.groundTraction*=t.groundNorm.dot(this.up)**2,t.groundImpact=-t.groundNorm.dot(n.motionDir)*t.downforce,(t.groundImpact<0||t.velocityDir.y<0)&&(t.groundImpact=0),t.groundImpactFactor=1+t.groundImpact,t.traction=t.downforce*Math.min(1,t.groundState.f*this.tuning.tyreFriction*t.groundTraction),t.front?(t.steerOrientation.copy(this.orientation),t.i==0?t.steerOrientation.y+=this.effectiveSteerL:t.steerOrientation.y+=this.effectiveSteerR,h.vecA.set(1,0,0).applyEuler(t.steerOrientation),t.lonDirDot=t.velocityDir.dot(h.vecA),t.direction=t.lonDirDot<0?-1:1,h.vecA.set(0,0,1).applyEuler(t.steerOrientation),t.latDirDot=t.velocityDir.dot(h.vecA)):(h.vecA.set(1,0,0).applyEuler(this.orientation),t.lonDirDot=t.velocityDir.dot(h.vecA),t.direction=t.lonDirDot<0?-1:1,h.vecA.set(0,0,1).applyEuler(this.orientation),t.latDirDot=t.velocityDir.dot(h.vecA)),t.locked=!t.front&&n.hasHandbrake,t.locked?(h.maxLon=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction*t.cosLonGroundAngle,h.lon=t.lonDirDot*t.speed/e,h.lonAbs=Math.abs(h.lon),t.lonSlip=0,h.lonAbs>h.maxLon&&(h.maxLon=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*this.tuning.kineticFrictionFactor*t.cosLonGroundAngle*.75,h.lon<0?h.lon=Math.max(h.lon,-h.maxLon):h.lon=Math.min(h.lon,h.maxLon),t.lonSlip=Math.abs(t.lonDirDot)),t.static=t.speed<.2,t.accel.x-=h.lon):n.hasHandbrake&&t.speed<.1?t.static=!0:(t.static=!1,t.accel.x-=Math.min(this.tuning.rollResistance,t.speed/e)*t.shockForce*t.lonDirDot),h.lat=t.latDirDot*t.speed/e,t.pLat=h.lat,t.slipAngle=Math.acos(t.lonDirDot),t.slipAngleFactor=0,h.slipAngleLerp=Math.max(0,t.slipAngle/(this.peakSlipAngle/t.groundState.f)),h.slipAngleLerp<=1?t.slipAngleFactor=-((h.slipAngleLerp-1)**2)+1:h.slipAngleLerp>10?t.slipAngleFactor=.75:t.slipAngleFactor=1+(1-h.slipAngleLerp)*.025,h.wl=1,t.groundImpact<=0?h.wl=t.cosLatGroundAngle**3:h.wl=t.groundImpactFactor,L.gripFactor<1?h.wl*=.8+L.gripFactor*.2:h.wl*=L.gripFactor,h.maxLat=this.metrics.wheelMass*t.downforce*t.groundState.f*this.tuning.tyreFriction*t.slipAngleFactor*h.wl,t.front||(h.maxLat*=h.stabilityFactor),h.latAbs=Math.abs(h.lat),t.kineticBlend=0,h.latAbs>h.maxLat?(t.kineticBlend=1,h.kineticForceLimit=t.groundState.f*50,h.latAbs<h.kineticForceLimit&&(t.kineticBlend=this.smoothLerp(h.latAbs/h.kineticForceLimit)),h.frictionFactor=1-t.kineticBlend+t.kineticBlend*this.tuning.kineticFrictionFactor,h.maxLat=this.metrics.wheelMass*t.downforce*(t.groundState.f*this.tuning.tyreFriction)*h.frictionFactor*t.slipAngleFactor*h.wl,t.front||(h.maxLat*=h.stabilityFactor),t.drive>0&&(this.driveMode==qe.RWD?h.maxLat*=1-t.drive*.08*t.kineticBlend:h.maxLat*=1-t.drive*.04*t.kineticBlend),t.locked&&(h.maxLat*=.7),h.lat<-h.maxLat?(t.slip=Math.min(1,-(h.lat-h.maxLat)/(h.maxLat*50)),h.lat=Math.max(h.lat,-h.maxLat)):h.lat>h.maxLat&&(t.slip=Math.min(1,(h.lat-h.maxLat)/(h.maxLat*50)),h.lat=h.maxLat)):t.slip=0,t.maxLat=h.maxLat,t.latForce=h.lat,t.accel.z-=t.latForce,this.braking&&!t.locked&&(t.accel.x=-t.lonDirDot*this.brakeForce*t.traction),t.drive=0,t.hasDrive&&!t.locked&&(h.drive=this.drive*t.driveModeFactor*t.traction,t.drive=this.drive/this.tuning.accel*this.driveModeFactor,t.i==0?(h.drive*=this.steerDifferential,t.drive*=this.steerDifferential):t.i==1?(h.drive/=this.steerDifferential,t.drive/=this.steerDifferential):t.i==2?(h.drive*=this.rearSteerDifferential,t.drive*=this.rearSteerDifferential):(h.drive/=this.rearSteerDifferential,t.drive/=this.rearSteerDifferential),t.accel.x+=h.drive),t.accel.y-=t.shockForce*xe,t.shockVel=(t.shockCompression-t.pShockCompresion)/e,t.pShockCompresion=t.shockCompression,t.accel.y+=this.tuning.damping*t.shockVel,t.accel.y+=t.downforce*(this.sinTiltZ*-t.comFactor.x*xe+this.sinTiltX*t.comFactor.z*xe),t.accel.y+=t.downforce*(this.chassisAccel.x*t.comFactor.x+this.chassisAccel.z*t.comFactor.z),L.gripFactor>1?t.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ:t.accel.y-=n.speed**2*this.tuning.aeroFactor*this.cosTiltZ*L.gripFactor,t.front?t.accel.applyEuler(t.steerOrientation):t.accel.applyEuler(this.orientation),t.accel.y+=xe,this.collisionStrength>.01&&(t.snowDrag+=2e3*this.collisionStrength**2*(Math.min(28,n.speed)/28)**2),h.vecA.copy(t.velocityDir).negate().multiplyScalar(this.tuning.drag*t.speed*t.speed*t.snowDrag),t.contactPoint.y<ce.seaLevel&&(h.s=ce.seaLevel-this.metrics.wheelRadius,t.contactPoint.y<h.s?h.vecA.multiplyScalar(100):h.vecA.multiplyScalar((1-(t.contactPoint.y-h.s)/this.metrics.wheelRadius)*100)),t.accel.add(h.vecA),t.wheelImpact=-t.groundNorm.dot(t.velocityDir)*t.downforce,(t.wheelImpact<0||t.velocityDir.y<0)&&(t.wheelImpact=0),t.wheelImpact>.01&&(h.vecA.normalize().multiplyScalar(t.wheelImpact*(t.speed/e)*.05*Math.max(Math.abs(t.lonDirDot/4),Math.abs(t.latDirDot))),t.accel.add(h.vecA),h.vecA.copy(t.groundNorm),h.vecA.y*=0,h.vecA.multiplyScalar(t.speed/e*t.wheelImpact*.003),h.vecA.divideScalar(e),t.accel.add(h.vecA)),t.accel.multiplyScalar(e),t.velocity.add(t.accel),t.accelDir.copy(t.accel).normalize(),t.static&&(t.velocity.x=0,t.velocity.z=0),t.worldPos.copy(t.velocity).multiplyScalar(e).add(t.pWorldPos)}this.resolveChassisTransformNew(e),this.applyChassisUpdate(e);let s=(this.wheelFR.slip+this.wheelFL.slip)/2,a=(this.wheelRR.slip+this.wheelRL.slip)/2;this.slip=a,this.frontSlip=s,this.spin=Math.abs(a-s),this.collisionsDisabled=this.collisionsDisabled&&this.collidingWall,this.collidingWall=!1,n.isAirborne=!0,this.contactUp.copy(this.up).multiplyScalar(this.metrics.wheelRadius),this.contactDown.copy(this.contactUp).negate(),this.wheelsInside={},n.onRoad=!1,this.fCollision=!1,this.didCollidePoint=!1,this.collidingGround=0,this.collidingGroundBounce=0,this.collidingWheels=[],n.roadSide=this.wheels[0].roadSide;for(let t of this.wheels)this.updateWheelWorldPos(t),this.updateWheelContact(t,e),n.onRoad=n.onRoad||t.onRoad,n.roadSide!==t.roadSide&&(n.roadSide=0);if(this.fCollision)this.resolveCollisions(e)&&(this.chassisVel.copy(n.com).sub(this.chassisPComPos).divideScalar(e),this.chassisVel.multiplyScalar(.98),h.vecA.copy(this.orientation).sub(this.chassisPRot),h.vecA.y>Math.PI?h.vecA.y-=Math.TAU:h.vecA.y<-Math.PI&&(h.vecA.y+=Math.TAU),h.vecA.divideScalar(e),Math.abs(h.vecA.x)>this.tuning.maxRotAccel&&(h.vecA.x=Math.sign(h.vecA.x)*this.tuning.maxRotAccel),Math.abs(h.vecA.z)>this.tuning.maxRotAccel&&(h.vecA.z=Math.sign(h.vecA.z)*this.tuning.maxRotAccel),Math.abs(h.vecA.y)>this.tuning.maxRotAccel&&(h.vecA.y=Math.sign(h.vecA.y)*this.tuning.maxRotAccel),this.chassisRotVel.lerp(h.vecA,1-this.tuning.weightFactor));else if(this.collidingGround>0){h.vecA.copy(n.com).sub(this.chassisPComPos).divideScalar(e),h.vecB.copy(h.vecA).normalize(),h.vecC.copy(this.chassisVel).normalize();let t=h.vecB.dot(h.vecC),r=this.collidingGroundBounce/this.collidingGround;h.vecA.multiplyScalar(this.chassisVel.length()/h.vecA.length()),this.chassisVel.lerp(h.vecA,this.collidingGround/4*r),this.chassisVel.multiplyScalar(Math.max(0,t)),h.vecA.copy(this.orientation).sub(this.chassisPRot),h.vecA.y>Math.PI?h.vecA.y-=Math.TAU:h.vecA.y<-Math.PI&&(h.vecA.y+=Math.TAU),h.vecA.divideScalar(this.pdT),Math.abs(h.vecA.x)>this.tuning.maxRotAccel&&(h.vecA.x=Math.sign(h.vecA.x)*this.tuning.maxRotAccel),Math.abs(h.vecA.z)>this.tuning.maxRotAccel&&(h.vecA.z=Math.sign(h.vecA.z)*this.tuning.maxRotAccel),Math.abs(h.vecA.y)>this.tuning.maxRotAccel&&(h.vecA.y=Math.sign(h.vecA.y)*this.tuning.maxRotAccel),this.chassisRotVel.lerp(h.vecA,(1-this.tuning.weightFactor)*(this.collidingGround/4)*r)}(isNaN(n.position.x)||isNaN(this.orientation.z))&&this.reset()}resolveChassisTransformNew(e){let s,a=this.vecs.p,t=this.vecs.pw,r=this.vecs.pl,c=this.vecs.wUp,g=this.vecs.wLat,f=this.vecs.wLon,x=this.vecs.wLatNorm,w=this.vecs.wLonNorm,S,D,C,k,T,P=0,B=this.vecs.cumPos,O=this.vecs.cumRot,W=0,N=0,j=this.vecs.cPos,G=this.vecs.cRot;B.set(0,0,0),O.set(0,0,0),j.set(0,0,0),G.set(0,0,0);let Be=null;for(let Ue=0;Ue<4;Ue++)s=this.wheels[Ue],a.copy(s.worldPos),Ue==0?(t.copy(this.wheelFR.worldPos),r.copy(this.wheelRL.worldPos),g.subVectors(t,a),f.subVectors(a,r)):Ue==1?(t.copy(this.wheelFL.worldPos),r.copy(this.wheelRR.worldPos),g.subVectors(a,t),f.subVectors(a,r)):Ue==2?(t.copy(this.wheelRR.worldPos),r.copy(this.wheelFL.worldPos),g.subVectors(t,a),f.subVectors(r,a)):(t.copy(this.wheelRL.worldPos),r.copy(this.wheelFR.worldPos),g.subVectors(a,t),f.subVectors(r,a)),c.crossVectors(g,f).normalize(),x.copy(g).normalize(),w.copy(f).normalize(),S=x.dot(w),D=Math.acos(S)-Math.PI/2,C=g.length(),k=f.length(),T=C/(k+C),f.applyAxisAngle(c,-D*T),g.applyAxisAngle(c,D*(1-T)),f.normalize(),g.normalize(),G.y=-Math.atan2(f.z,f.x),s.i==0?Be=G.y:G.y-Be<-Math.PI?G.y+=Ze:G.y-Be>Math.PI&&(G.y-=Ze),G.z=Math.asin(f.y),G.x=-Math.asin(g.y/Math.cos(G.z)),f.multiplyScalar(-s.relPos.x),g.multiplyScalar(-s.relPos.z),j.copy(a).add(f).add(g),W=this.tuning.wheelMassFactor+s.downforce,N+=s.shockFactor,j.multiplyScalar(W),G.multiplyScalar(W),B.add(j),O.add(G),P+=W;B.divideScalar(P),O.divideScalar(P),O.x=Math.min(Math.max(-1.4,O.x),1.4),O.z=Math.min(Math.max(-1.4,O.z),1.4),O.y>Math.PI?O.y-=Ze:O.y<-Math.PI&&(O.y+=Ze),h.vecA.copy(n.com).sub(this.chassisPComPos).divideScalar(this.pdT),h.vecB.copy(h.vecA).sub(this.chassisVel).divideScalar(e),N>0&&h.vecB.length()>this.tuning.maxLinearAccel&&h.vecB.normalize().multiplyScalar(this.tuning.maxLinearAccel),h.vecB.multiplyScalar(e),this.chassisVel.add(h.vecB),h.vecA.copy(this.orientation).sub(this.chassisPRot),h.vecA.y>Math.PI?h.vecA.y-=Math.TAU:h.vecA.y<-Math.PI&&(h.vecA.y+=Math.TAU),h.vecA.divideScalar(this.pdT),N>0&&(Math.abs(h.vecA.x)>this.tuning.maxRotAccel&&(h.vecA.x=Math.sign(h.vecA.x)*this.tuning.maxRotAccel),Math.abs(h.vecA.z)>this.tuning.maxRotAccel&&(h.vecA.z=Math.sign(h.vecA.z)*this.tuning.maxRotAccel),Math.abs(h.vecA.y)>this.tuning.maxRotAccel&&(h.vecA.y=Math.sign(h.vecA.y)*this.tuning.maxRotAccel)),h.vecB.copy(h.vecA).sub(this.chassisRotVel),this.chassisRotVel.add(h.vecB),this.chassisRotVel.y<-Math.PI?this.chassisRotVel.y+=Ze:this.chassisRotVel.y>Math.PI&&(this.chassisRotVel.y-=Ze),this.chassisPComPos.copy(n.com),this.chassisPRot.copy(this.orientation);let ue=N/4*this.tuning.shockForce,Vt=1-Math.min(1,ue),$=.25*e;this.chassisRotVel.x>$?this.chassisRotVel.x-=$:this.chassisRotVel.x<-$&&(this.chassisRotVel.x+=$),this.chassisRotVel.z>$?this.chassisRotVel.z-=$:this.chassisRotVel.z<-$&&(this.chassisRotVel.z+=$),$=.2*e,this.chassisRotVel.y>$?this.chassisRotVel.y-=$:this.chassisRotVel.y<-$&&(this.chassisRotVel.y+=$),this.chassisCandidateRot.copy(this.orientation),this.chassisCandidateRot.x+=this.chassisRotVel.x*e,this.chassisCandidateRot.y+=this.chassisRotVel.y*e,this.chassisCandidateRot.z+=this.chassisRotVel.z*e;let wi=this.chassisCandidateRot.y-O.y;wi<-Math.PI?this.chassisCandidateRot.y+=Ze:wi>Math.PI&&(this.chassisCandidateRot.y-=Ze),this.chassisCandidateComPos.copy(this.chassisVel).multiplyScalar(e).add(n.com),h.vecA.set(-this.metrics.wheelBase/2,-this.metrics.comHeight,0).applyEuler(this.chassisCandidateRot),this.chassisCandidatePos.copy(this.chassisCandidateComPos).add(h.vecA),this.chassisCandidatePos.y+=xe*e*e*Vt,this.chassisCandidatePos.y+=this.fly.up,this.chassisCandidatePos.x+=this.right.x*this.fly.right,this.chassisCandidatePos.z+=this.right.z*this.fly.right,h.vecA.copy(this.chassisVel).multiplyScalar(-this.fly.back),this.chassisCandidatePos.add(h.vecA),this.fly.up=0,this.fly.right=0,this.fly.back=0;let ne=.5;ne=this.tuning.weightFactor,ue>1?ne*=Math.max(1-this.tuning.weightFactor,2-ue):(ue==0&&(ne=1),ne=this.tuning.weightFactor+(1-ue)*(1-this.tuning.weightFactor)),this.orientation.x=O.x*(1-ne)+ne*this.chassisCandidateRot.x,this.orientation.y=O.y*(1-ne)+ne*this.chassisCandidateRot.y,this.orientation.z=O.z*(1-ne)+ne*this.chassisCandidateRot.z,this.orientation.x=Math.min(Math.max(-1.2,this.orientation.x),1.2),this.orientation.z=Math.min(Math.max(-1.2,this.orientation.z),1.2),B.lerp(this.chassisCandidatePos,ne),this.tiltZ=this.orientation.z,this.cosTiltZ=Math.cos(this.tiltZ),this.sinTiltZ=Math.sin(this.tiltZ),n.pitch=this.tiltZ,this.tiltX=this.orientation.x,this.cosTiltX=Math.cos(this.tiltX),this.sinTiltX=Math.sin(this.tiltX),n.roll=this.tiltX,n.heading=this.orientation.y,n.position.copy(B),n.direction=Math.min(this.wheelRL.direction,this.wheelRR.direction),n.forwardDir.set(1,0,0).applyEuler(this.orientation),n.right.set(0,0,1).applyEuler(this.orientation),n.up.set(0,1,0).applyEuler(this.orientation),n.forwardPosition.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase).add(n.position),n.midPosition.set((n.position.x+n.forwardPosition.x)/2,(n.position.y+n.forwardPosition.y)/2,(n.position.z+n.forwardPosition.z)/2),n.cockPosition.copy(n.midPosition).lerp(n.forwardPosition,.4)}resolveChassisTransform(){h.inertia=0,h.authMin=.2,h.authRange=(.5-h.authMin)*2,h.fCollDenom=this.wheelFL.downforce+this.wheelFL.collisionFactor+this.wheelFR.downforce+this.wheelFR.collisionFactor,h.fCollDenom>0?h.fRightAuthority=(this.wheelFR.downforce+this.wheelFR.collisionFactor)/h.fCollDenom:h.fRightAuthority=.5,h.fCollisionFactor=this.wheelFL.collisionFactor+this.wheelFR.collisionFactor,h.fCollisionFactor==0&&(h.fRightAuthority=h.authMin+h.authRange*h.fRightAuthority),h.fRightAuthorityS=h.fRightAuthorityS*h.inertia+(1-h.inertia)*h.fRightAuthority,h.vecA.copy(this.wheelFR.worldPos).sub(this.wheelFL.worldPos),h.offset=h.vecA.length()-this.metrics.axleWidth,h.vecB.copy(h.vecA).normalize().multiplyScalar(h.offset*h.fRightAuthorityS),this.wheelFL.worldPos.add(h.vecB),h.vecA.normalize().multiplyScalar(this.metrics.axleWidth),this.wheelFR.worldPos.copy(h.vecA).add(this.wheelFL.worldPos),h.rCollDenom=this.wheelRL.downforce+this.wheelRL.collisionFactor+this.wheelRR.downforce+this.wheelRR.collisionFactor,h.rCollDenom>0?h.rRightAuthority=(this.wheelRR.downforce+this.wheelRR.collisionFactor)/h.rCollDenom:h.rRightAuthority=.5,h.rCollisionFactor=this.wheelRL.collisionFactor+this.wheelRR.collisionFactor,h.rCollisionFactor==0&&(h.rRightAuthority=h.authMin+h.authRange*h.rRightAuthority),h.rRightAuthorityS=h.rRightAuthorityS*h.inertia+(1-h.inertia)*h.rRightAuthority,h.vecA.copy(this.wheelRR.worldPos).sub(this.wheelRL.worldPos),h.offset=h.vecA.length()-this.metrics.axleWidth,h.vecB.copy(h.vecA).normalize().multiplyScalar(h.offset*h.rRightAuthorityS),this.wheelRL.worldPos.add(h.vecB),h.vecA.normalize().multiplyScalar(this.metrics.axleWidth),this.wheelRR.worldPos.copy(h.vecA).add(this.wheelRL.worldPos),h.axleFPos.addVectors(this.wheelFL.worldPos,this.wheelFR.worldPos).multiplyScalar(.5),h.axleRPos.addVectors(this.wheelRL.worldPos,this.wheelRR.worldPos).multiplyScalar(.5),h.collDenom=h.fCollDenom+h.rCollDenom,h.collDenom>0?h.frontAuthority=h.fCollDenom/h.collDenom:h.frontAuthority=.5,h.fCollisionFactor==0&&h.rCollisionFactor==0&&(h.frontAuthority=h.authMin+h.authRange*h.frontAuthority),h.frontAuthorityS=h.frontAuthorityS*h.inertia+(1-h.inertia)*h.frontAuthority,h.vecA.copy(h.axleFPos).sub(h.axleRPos),h.offset=h.vecA.length()-this.metrics.wheelBase,h.vecB.copy(h.vecA).normalize().multiplyScalar(h.offset*h.frontAuthorityS),h.axleRPos.add(h.vecB),h.vecA.normalize().multiplyScalar(this.metrics.wheelBase),h.axleFPos.copy(h.axleRPos).add(h.vecA),n.position.copy(h.axleRPos),n.forwardPosition.copy(h.axleFPos),n.midPosition.set((n.position.x+n.forwardPosition.x)/2,(n.position.y+n.forwardPosition.y)/2,(n.position.z+n.forwardPosition.z)/2),h.vecA.normalize(),this.orientation.y=-Math.atan2(h.vecA.z,h.vecA.x),this.orientation.y>Math.PI?this.orientation.y-=Math.TAU:this.orientation.y<-Math.PI&&(this.orientation.y+=Math.TAU),n.heading=this.orientation.y,n.direction=Math.min(this.wheelRL.direction,this.wheelRR.direction),this.wheelRR.speed+this.wheelRL.speed<.1&&(n.direction=0),h.d1=this.wheelFL.worldPos.distanceTo(this.wheelRL.worldPos),h.d2=this.wheelFR.worldPos.distanceTo(this.wheelRR.worldPos),h.r1=Math.asin((this.wheelFL.worldPos.y-this.wheelRL.worldPos.y)/h.d1),h.r2=Math.asin((this.wheelFR.worldPos.y-this.wheelRR.worldPos.y)/h.d2),h.tiltLerpDenom=this.wheelFL.downforce+this.wheelRL.downforce+this.wheelFR.downforce+this.wheelRR.downforce,h.tiltLerpDenom>0?h.tiltLerp=(this.wheelFL.downforce+this.wheelRL.downforce)/h.tiltLerpDenom:h.tiltLerp=.5,h.tiltZ=h.r1*h.tiltLerp+h.r2*(1-h.tiltLerp),isNaN(h.tiltZ)&&(h.tiltZ=0),h.dTiltZ=h.tiltZ-this.tiltZ,h.tiltZ>this.tiltZ&&this.tiltZ>1?h.dTiltZ*=1-(this.tiltZ-1)/.4:h.tiltZ<this.tiltZ&&this.tiltZ<-1&&(h.dTiltZ*=(1+this.tiltZ)/-.4),this.tiltZ+=h.dTiltZ,this.tiltZ=Math.min(Math.max(-1.4,this.tiltZ),1.4),this.sinTiltZ=Math.sin(this.tiltZ),this.cosTiltZ=Math.cos(this.tiltZ),n.pitch=this.tiltZ,this.orientation.z=this.tiltZ,h.d2=this.wheelFR.worldPos.distanceTo(this.wheelFL.worldPos)*this.cosTiltZ,h.d1=this.wheelFL.worldPos.y-this.wheelFR.worldPos.y,h.r1=Math.asin(h.d1/h.d2),h.d2=this.wheelRR.worldPos.distanceTo(this.wheelRL.worldPos)*this.cosTiltZ,h.d1=this.wheelRL.worldPos.y-this.wheelRR.worldPos.y,h.r2=Math.asin(h.d1/h.d2),h.tiltLerpDenom>0?h.tiltLerp=(this.wheelFL.downforce+this.wheelFR.downforce)/h.tiltLerpDenom:h.tiltLerp=.5,h.tiltX=h.r1*h.tiltLerp+h.r2*(1-h.tiltLerp),h.dTiltX=h.tiltX-this.tiltX,h.tiltX>this.tiltX&&this.tiltX>1?h.dTiltX*=1-(this.tiltX-1)/.4:h.tiltX<this.tiltX&&this.tiltX<-1&&(h.dTiltX*=(1+this.tiltX)/-.4),this.tiltX+=h.dTiltX,this.tiltX=Math.min(Math.max(-1.4,this.tiltX),1.4),this.sinTiltX=Math.sin(this.tiltX),this.cosTiltX=Math.cos(this.tiltX),this.orientation.x=this.tiltX,n.roll=this.tiltX}updateWheelsPost(e){h.wheelCirc=this.metrics.wheelCircumference,h.r=0,this.wheelFL.shockFactor==0?(this.wheelFL.rollVelocity*=.995,h.r=this.wheelFL.rollVelocity*e):(h.r=this.wheelFL.dS/h.wheelCirc*Ze*this.wheelFL.direction,this.wheelFL.rollVelocity=h.r/e),this.wheelFL.euler.z+=h.r,this.wheelFL.euler.y=this.steerL+Math.PI,this.wheelFL.setRotationFromEuler(this.wheelFL.euler),this.wheelFR.shockFactor==0?(this.wheelFR.rollVelocity*=.995,h.r=this.wheelFR.rollVelocity*e):(h.r=this.wheelFR.dS/h.wheelCirc*Ze*this.wheelFR.direction,this.wheelFR.rollVelocity=h.r/e),this.wheelFR.euler.z-=h.r,this.wheelFR.euler.y=this.steerR,this.wheelFR.setRotationFromEuler(this.wheelFR.euler),n.hasHandbrake||(this.wheelRL.shockFactor==0?(this.wheelRL.rollVelocity*=.995,h.r=this.wheelRL.rollVelocity*e):(h.r=this.wheelRL.dS/h.wheelCirc*Ze*this.wheelRL.direction,this.wheelRL.rollVelocity=h.r/e),this.wheelRL.rotation.z=this.wheelRL.rotation.z+h.r,this.wheelRR.shockFactor==0?(this.wheelRR.rollVelocity*=.995,h.r=this.wheelRR.rollVelocity*e):(h.r=this.wheelRR.dS/h.wheelCirc*Ze*this.wheelRR.direction,this.wheelRR.rollVelocity=h.r/e),this.wheelRR.rotation.z=this.wheelRR.rotation.z-h.r)}updateChassisState(e){h.vecA.copy(n.accel),h.vecA.applyAxisAngle($s,-this.orientation.y);let s=e*2e3;h.vecA.x=Math.min(Math.max(-s,h.vecA.x),s),h.vecA.z=Math.min(Math.max(-s,h.vecA.z),s),this.chassisAccel.copy(h.vecA),L.speedFactor>1?this.speedLerp=Math.min(1,n.speed/(this.tuning.topSpeed*Math.sqrt(L.speedFactor))):this.speedLerp=Math.min(1,n.speed/this.tuning.topSpeed),n.speedLerp=this.speedLerp}updateAudio(e){this.audioController.update(e),this.collisionStrength*=.9,this.didCollide=!1}updateWheelWorldPos(e){e.position.y=e.axlePos.y+e.shockCompression,e.worldPos.copy(e.relPos),e.worldPos.applyMatrix4(n.matrixWorld),e.height=e.worldPos.y}updateWheelContact(e){e.contactPoint.copy(this.up).multiplyScalar(e.shockCompression+this.metrics.wheelRadius).add(this.contactDown).add(e.worldPos),ce.getGroundState(e.contactPoint.x,e.contactPoint.z,v.vehicleNode,e.groundState,!0),h.ground=e.groundState,e.snowFactor=h.ground.sf??1,e.snowDrag=(1-e.snowFactor)**2*220,e.snowDepth=h.ground.sd??0,h.ground.sd<1&&(e.snowDrag*=h.ground.sd**2),e.snowDrag+=1,e.pGroundHeight=e.groundHeight,e.groundHeight=h.ground.h,e.groundPoint.copy(e.contactPoint),e.groundPoint.y=h.ground.h,e.onRoad=h.ground.r,e.roadSide=h.ground.rs,h.vecA.copy(this.right),h.sideFactor=1,e.i%2==0&&(h.vecA.negate(),h.sideFactor=-1);let s=Math.max(0,h.vecA.dot(e.velocityDir));h.vecA.y=0,h.vecA.normalize(),e.groundHeightLateral=ce.getGroundState(e.contactPoint.x+this.metrics.wheelWidth*h.vecA.x,e.contactPoint.z+this.metrics.wheelWidth*h.vecA.z,v.vehicleNode,{n:{}},!1,!0,1+s*1).h,e.latGroundAngle=Math.atan((e.groundHeight-e.groundHeightLateral)/this.metrics.wheelWidth),e.latGroundAngle*=h.sideFactor,e.sinLatGroundAngle=Math.sin(e.latGroundAngle),e.cosLatGroundAngle=Math.cos(e.latGroundAngle),h.vecA.copy(this.forward);let a=Math.max(0,h.vecA.dot(e.velocityDir));h.vecA.y=0,h.vecA.normalize(),e.groundHeightLongitudinal=ce.getGroundState(e.contactPoint.x+this.metrics.wheelWidth*h.vecA.x,e.contactPoint.z+this.metrics.wheelWidth*h.vecA.z,v.vehicleNode,{n:{}},!1,!0).h,e.lonGroundAngle=Math.atan((e.groundHeightLongitudinal-e.groundHeight)/this.metrics.wheelWidth),e.lonGroundAngle>.5&&a>0&&(e.snowDrag+=(e.lonGroundAngle-.5)*500),e.cosLonGroundAngle=Math.cos(e.lonGroundAngle),e.sinLonGroundAngle=Math.sin(e.lonGroundAngle),e.groundOrientation.x=e.latGroundAngle,e.groundOrientation.y=this.orientation.y,e.groundOrientation.z=e.lonGroundAngle,e.groundNorm.set(0,1,0).applyEuler(e.groundOrientation),h.deltaCompression=e.groundPoint.y-e.contactPoint.y,e.shockCompression+=h.deltaCompression,e.shockExcess>0,e.shockExcess=0,e.collisionFactor=0,e.shockCompression<0?e.shockCompression=0:e.shockCompression>e.travel&&(e.shockExcess=e.shockCompression-e.travel,e.shockCompression=e.travel,this.collidingGround++,this.collidingGroundBounce+=e.groundState.b,h.vecA.copy(e.groundNorm).multiplyScalar(e.shockExcess*e.groundNorm.dot(this.up)),e.shockExcess<e.travel&&h.vecA.multiplyScalar(e.groundState.b),e.worldPos.add(h.vecA)),e.contactPoint.y+e.snowDepth>e.groundHeight+1&&(this.collisionsDisabled=!0),n.isAirborne=n.isAirborne&&e.contactPoint.y>e.groundHeight+.1,e.shockFactor=e.shockCompression/e.travel,e.shockForce=e.shockFactor*this.tuning.shockForce,h.ground.w?(e.wd=h.ground.wd,e.wn=h.ground.wn,e.ws=h.ground.ws,e.wasInsideWall=e.insideWall,e.insideWall=e.wd<0,this.collisionsDisabled&&(e.wasInsideWall=e.insideWall),e.wi==null||e.wi!==h.ground.wi||e.collidingWallEnd?(e.wi=h.ground.wi,e.mayCollide=!0,this.wheelsInside[h.ground.wi]==null&&(this.wheelsInside[h.ground.wi]=e.insideWall),this.wheelsInside[e.wi]!==e.insideWall||e.wd>-this.metrics.collisionMargin&&e.wd<this.metrics.collisionMargin?this.collideWallEnd(e):e.collidingWallEnd=!1):(this.wheelsInside[h.ground.wi]==null&&(this.wheelsInside[h.ground.wi]=e.insideWall),e.collidingWallEnd=!1,this.wheelsInside[e.wi]!==e.insideWall&&(this.collidingWall=!0,this.collideWallEnd(e)),e.collidingWallEnd||(e.wasInsideWall==!1?e.insideWall=e.wd-this.metrics.collisionMargin<0:e.insideWall=e.wd+this.metrics.collisionMargin<0,e.insideWall!==e.wasInsideWall&&(this.collisionsDisabled||(e.insideWall=e.wasInsideWall),e.insideWall?(e.wcd=e.wd+this.metrics.collisionMargin,e.wcd>0&&(this.collidingWall=!0,this.collidingWallSide=e.ws,this.collideWallEdge(e))):(e.wcd=e.wd-this.metrics.collisionMargin,e.wcd<0&&(this.collidingWall=!0,this.collidingWallSide=-e.ws,this.collideWallEdge(e))))),e.collidingWallEnd=!1,e.insideWall=e.wasInsideWall),e.wi=h.ground.wi):(e.wi=null,e.insideWall=null,e.collidingWallEnd=!1)}resolveCollisions(e){if(this.didCollidePoint){let s,a;for(let f of this.wheels)if(f.wi&&f.wi==this.didCollidePointIndex){if(s){if(f.insideWall!==s.insideWall){a=f;break}continue}s=f}if(!a)return!1;let t=Math.abs(s.wd/(Math.abs(s.wd)+Math.abs(a.wd)));if(this.collisionPos.copy(s.pWorldPos).lerp(a.pWorldPos,t),h.vecA.copy(s.worldPos).lerp(a.worldPos,t),this.reboundVec.copy(this.collisionPos).sub(h.vecA),this.reboundDir.copy(this.reboundVec).normalize(),this.reboundDir.dot(n.motionDir)>0)return!1;this.comVec.copy(n.midPosition).sub(this.collisionPos),this.posVec.copy(n.position).sub(this.collisionPos),this.comDir.copy(this.comVec).normalize(),this.posDir.copy(this.posVec).normalize(),this.velDirOrth.copy(n.motionDir),this.velDirOrth.x=-n.motionDir.z,this.velDirOrth.z=n.motionDir.x;let r=Math.sign(this.comDir.dot(this.velDirOrth))*-1,c=this.comDir.dot(n.motionDir),g=Math.acos(c)*r*e*this.speedLerp;this.posDir.applyAxisAngle($s,-g),this.reboundVec.multiplyScalar(1.5-this.speedLerp*.5),this.reboundVec.length()<e&&this.reboundVec.copy(this.reboundDir).multiplyScalar(e),n.position.copy(this.posDir).multiplyScalar(this.posVec.length()).add(this.collisionPos).add(this.reboundVec),this.orientation.y-=g,this.collisionPos.copy(s.relPos).lerp(a.relPos,t),this.applyChassisUpdate(e);for(let f of this.wheels)this.updateWheelWorldPos(f);return!0}if(this.collidingWheels.length==1){let s=this.collidingWheels[0];this.comVec.copy(s.worldPos).sub(s.collisionVector).sub(n.com).normalize(),this.rotVec.copy(s.worldPos).sub(n.com).normalize(),this.collisionPos.copy(s.relPos);let a=Math.acos(this.comVec.dot(this.rotVec));a*=.5,this.comOrth.set(-this.comVec.z,this.comVec.y,this.comVec.x);let t=Math.sign(this.comOrth.dot(s.collisionVector));this.orientation.y-=t*a,n.position.copy(s.relPos).negate().applyEuler(this.orientation).add(s.worldPos),this.applyChassisUpdate(e);for(let r of this.wheels)this.updateWheelWorldPos(r);return!0}else if(this.collidingWheels.length==2){let s=this.collidingWheels[0],a=this.collidingWheels[1];this.preColA.copy(s.worldPos).sub(s.collisionVector),this.preColB.copy(a.worldPos).sub(a.collisionVector),this.preVec.copy(this.preColA).sub(this.preColB),this.postVec.copy(s.worldPos).sub(a.worldPos),this.preVecDir.copy(this.preVec).normalize(),this.postVecDir.copy(this.postVec).normalize();let t=this.preVecDir.dot(this.postVecDir),r=Math.acos(t),c=1;s.comPos.z<0&&a.comPos.z<0?c*=-1:s.comPos.z>0&&a.comPos.z>0||s.comPos.x<0&&a.comPos.x<0&&(c*=-1);let g=(.5+s.downforce)/(1+s.downforce+a.downforce),f=(this.preVec.length()-this.postVec.length())*g;this.postVecDir.multiplyScalar(f),s.worldPos.sub(this.postVecDir),this.orientation.y-=c*r,n.position.copy(s.relPos).negate().applyEuler(this.orientation).add(s.worldPos),this.collisionPos.copy(s.relPos),this.applyChassisUpdate(e);for(let x of this.wheels)this.updateWheelWorldPos(x);return!0}else return console.warn(this.collidingWheels.length+" colliding wheels"),this.reset(),!1}applyChassisUpdate(e){n.setRotationFromEuler(this.orientation);try{n.updateMatrix(),n.updateMatrixWorld(),this.didCrash=!1}catch(s){if(this.didCrash)throw s.cause="vehicle_matrix",s;se.add("VEHICLE: Experienced update error"),this.reset(),this.didCrash=!0}this.up.set(0,1,0).applyEuler(this.orientation),this.forward.set(1,0,0).applyEuler(this.orientation),this.right.set(0,0,1).applyEuler(this.orientation),n.forwardDir.copy(this.forward),n.com.copy(n.forwardDir).multiplyScalar(this.metrics.wheelBase/2).add(n.position),h.vecA.copy(this.up).multiplyScalar(this.metrics.comHeight),n.com.add(h.vecA)}handleInput(e){if(n.hasBoost=n.hasBoost&&(n.hasAccel||n.hasCruiseTarget)&&!this.autodrive,this.inputs.accel=0,this.inputs.drive=0,this.isDriven=this.autodrive&&L.autodriveMode!==q.STEER||n.hasCruiseTarget,this.hasManualAccel=!1,this.hasManualBrake=!1,this.steer=0,Je.isCinecam)this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake;else{if(n.hasBoost=!1,I.signal.Forward?(n.hasBoost=!!I.signal.Boost,this.isDriven=!0,this.hasManualAccel=!0,n.direction>=0&&(this.hasForwardDrive=!0),n.hasAccel=!0,!n.hasBoost&&n.direction<0&&!this.hasForwardDrive&&!I.hasScreenAccel?(this.setBrake(!0,I.signal.Forward),this.hasManualBrake=!0):(this.inputs.accel=I.signal.Forward*this.tuning.accel,this.setBrake(!1),this.prevDriveDir=1),this.holdHandbrake=!1):this.hasForwardDrive=!1,I.signal.Backward?(n.hasAccel=!1,n.direction<=0&&!this.braking&&(this.hasRearDrive=!0),this.isDriven=!0,(n.direction>0||this.braking&&n.speed>1)&&!this.hasRearDrive?(this.setBrake(!0,I.signal.Backward),this.hasManualBrake=!0):(this.setBrake(!1),this.inputs.accel=I.signal.Backward*-this.tuning.accel,this.prevDriveDir=-1),this.holdHandbrake=!1):this.hasRearDrive=!1,this.isDriven?this.softBraking&&this.setSoftBrake(!1):(n.hasAccel=!1,this.setBrake(!1),this.setSoftBrake(!0)),this.inputs.stickySteer=I.signal.StickySteer>0?1:0,this.inputs.stickySteer&&I.signal.Handbrake&&!this.inputs.handbrake&&(this.holdHandbrake=!0),this.inputs.handbrake=I.signal.Handbrake>0,n.hasHandbrake=this.inputs.handbrake||this.holdHandbrake,n.hasBoost?(this.boostFactor=Math.max(0,1-this.speedLerp)*2,this.inputs.accel+=this.tuning.accel*this.tuning.boostFactor*this.boostFactor):this.inputs.accel>0&&this.speedLerp<.5&&(this.inputs.accel+=this.tuning.accel*Math.max(0,1-this.speedLerp*2)),h.vecA.set(n.direction,0,0).applyEuler(this.orientation),h.motionDot=n.motionDir.dot(h.vecA),h.motionDot>1&&(h.motionDot=1),h.slipAngle=Math.acos(h.motionDot),n.speed<1?h.slipAngle*=0:n.speed<2&&(h.slipAngle*=n.speed-1),!te.directSteer||!I.hasGamepadInput){h.sl=this.speedLerp*Math.sqrt(L.steerAssist);let s=this.slip**2*Math.abs(I.signal.Left-I.signal.Right)*L.steerAssist,a=Math.max(this.tuning.peakSlipAngle,this.tuning.maxSteer*(1-h.sl)*(1+s));h.maxSteer=h.maxSteer*.5+.5*a,h.counterSteerFactor=0,L.steerAssist>.8&&(h.counterSteerFactor=Math.min(1,Math.abs(h.slipAngle)/this.peakSlipAngle)*((L.steerAssist-.8)/.2)*(.5+this.spin*.5)),h.steerFactor=1,h.vecB.set(0,0,1).applyEuler(this.orientation),h.steer=h.steerFactor*I.filtered.steer*h.maxSteer-h.slipAngle*Math.sign(n.motionDir.dot(h.vecB))*h.counterSteerFactor,I.hasScreenSteer&&(h.steer*=.5),this.inputs.steer=Math.min(Math.max(-this.tuning.maxSteer,h.steer),this.tuning.maxSteer)}else this.inputs.steer=I.filtered.steer*this.tuning.maxSteer;this.inputs.accel>0&&!bs&&(this.inputs.accel*=L.speedFactor)}this.autoSteer=0,this.autodrive&&(this.autodriver.update(e),L.autodriveMode!=q.SPEED&&(this.autoSteer=this.autodriver.inputs.steer),L.autodriveMode!=q.STEER&&!this.hasManualAccel&&!this.hasManualBrake&&(this.inputs.accel=this.autodriver.inputs.accel,this.inputs.boost=this.autodriver.inputs.boost,this.isDriven=!0,n.hasBoost=!!this.autodriver.hasBoost,n.hasBoost?this.inputs.accel+=this.tuning.accel*Math.max(0,(1-this.speedLerp)*2):this.inputs.accel>0&&n.speedLerp<.5&&(this.inputs.accel+=this.tuning.accel*Math.max(0,(1-this.speedLerp*2)*2)),this.prevDriveDir=1,this.autodriver.inputs.brake>0?this.setBrake(!0,this.autodriver.inputs.brake):this.setBrake(!1))),n.hasCruiseTarget&&I.signal.Backward==0&&n.direction>0&&!n.hasHandbrake&&(!this.hasManualAccel||this.useMouse)&&(this.prevDriveDir=1,this.inputs.accel=Math.min(this.tuning.accel,Math.max(-this.tuning.reverse,(n.speedControlTarget-n.speed)/e)),this.useMouse&&this.hasBoost&&(this.inputs.accel=this.tuning.accel),this.holdHandbrake=!1),n.hasSpeedLimit&&(this.hasAccel=this.inputs.accel>0,this.inputs.accel=Math.max(-this.tuning.reverse,Math.min(this.inputs.accel,(n.speedControlTarget-n.speed)/e))),!n.hasCruiseTarget&&(!this.autodrive||L.autodriveMode==q.STEER)&&!this.isDriven&&n.direction!=this.prevDriveDir&&n.speed<.1&&(this.holdHandbrake=!0),this.updateSteerState(e),this.updateAccelState(e)}setSoftBrake(e){if(L.softBrakeForce==0){this.softBraking=!1;return}this.softBraking=e,e&&(this.braking=!0)}setBrake(e,s=0){e?(this.braking||(this.brakeLerp=0),this.braking=!0):this.braking=!1,this.inputs.brake=s}setGripFactor(e){this.updatePeakSlipAngle()}updatePeakSlipAngle(){L.gripFactor<0?this.peakSlipAngle=this.tuning.peakSlipAngle/L.gripFactor**2:this.peakSlipAngle=this.tuning.peakSlipAngle/L.gripFactor}setDriveMode(e){switch(this.driveModeFactor=.5,this.wheels[0].hasDrive=!0,this.wheels[1].hasDrive=!0,this.wheels[2].hasDrive=!0,this.wheels[3].hasDrive=!0,this.wheels[0].driveModeFactor=.5,this.wheels[1].driveModeFactor=.5,this.wheels[2].driveModeFactor=.5,this.wheels[3].driveModeFactor=.5,this.driveMode=e,e){case qe.FWD:this.driveModeFactor=1,this.wheels[2].driveModeFactor=0,this.wheels[3].driveModeFactor=0,this.wheels[2].hasDrive=!1,this.wheels[3].hasDrive=!1;break;case qe.RWD:this.driveModeFactor=1,this.wheels[0].driveModeFactor=0,this.wheels[1].driveModeFactor=0,this.wheels[0].hasDrive=!1,this.wheels[1].hasDrive=!1;break}}setDriverSide(e){}setAutodrive(e){this.autodrive=e,e&&(this.autodriver.initialise(),this.holdHandbrake=!1,n.hasHandbrake=!1)}collideWallEnd(e){this.collisionsDisabled||(this.didCollide=!0,this.fCollision=!0,e.collidingWallEnd=!0,e.collisionFactor=1+n.speed/2,this.collisionStrength=Math.max(this.collisionStrength,n.speed/10),this.didCollidePoint=!0,this.didCollidePointIndex=e.wi)}collideWallEdge(e){if(this.collisionsDisabled)return;this.didCollide=!0,this.fCollision=!0,e.collisionVector.copy(e.worldPos),h.vecA.set(e.wn.x,0,e.wn.z),e.worldPos.add(h.vecA.multiplyScalar(e.wcd*e.ws)),h.collDot=e.velocityDir.x*e.wn.z+e.velocityDir.z*-e.wn.x;let s=Math.acos(h.collDot),a=e.wcd/Math.tan(s);a*=.02*this.speedLerp,h.vecA.set(e.wn.z,0,-e.wn.x).multiplyScalar(a),e.worldPos.sub(h.vecA),e.collisionFactor=5+n.speed*5,this.collisionStrength=Math.min(1,Math.max(this.collisionStrength,Math.min(1,(1-Math.abs(h.collDot))*5)*e.collisionFactor/50)),this.collidingWheels.push(e),e.collisionVector.sub(e.worldPos).negate()}updateSteerState(e){if(this.steer=this.inputs.steer+this.autoSteer,this.steer=Math.min(Math.max(-n.tuning.maxSteer,this.steer),n.tuning.maxSteer),h.ts=Math.exp(-e/.1)*(1-this.tuning.tyreStiffness),this.effectiveSteer=this.effectiveSteer*h.ts+this.steer*(1-h.ts),h.sa=Math.sin(this.steer),h.ca=Math.cos(this.steer)*this.metrics.wheelBase*2,h.tl=this.metrics.wheelBase*2*h.sa/(h.ca-this.metrics.axleWidth*h.sa),h.tr=this.metrics.wheelBase*2*h.sa/(h.ca+this.metrics.axleWidth*h.sa),this.steerL=Math.atan(h.tl),this.steerR=Math.atan(h.tr),h.sa=Math.sin(this.effectiveSteer),h.ca=Math.cos(this.effectiveSteer)*this.metrics.wheelBase*2,h.tl=this.metrics.wheelBase*2*h.sa/(h.ca-this.metrics.axleWidth*h.sa),h.tr=this.metrics.wheelBase*2*h.sa/(h.ca+this.metrics.axleWidth*h.sa),h.steerL=Math.atan(h.tl),h.steerR=Math.atan(h.tr),this.effectiveSteerL=this.effectiveSteerL*h.ts+h.steerL*(1-h.ts),this.effectiveSteerR=this.effectiveSteerR*h.ts+h.steerR*(1-h.ts),this.steerDifferential=this.metrics.wheelBase/Math.sin(this.effectiveSteerL)/(this.metrics.wheelBase/Math.sin(this.effectiveSteerR))||1,this.rearSteerDifferential=this.metrics.wheelBase/h.tl/(this.metrics.wheelBase/h.tr)||1,this.tuning.lockDiff&&this.slip>0)if(this.slip>.2)this.lockDiffOnlyRear||(this.steerDifferential=1),this.rearSteerDifferential=1;else{let s=this.smoothLerp(this.slip/.2);this.lockDiffOnlyRear||(this.steerDifferential=this.steerDifferential*(1-s)+s),this.rearSteerDifferential=this.rearSteerDifferential*(1-s)+s}}updateAccelState(e){this.inputs.accel>0?this.drive<this.inputs.accel?(this.drive+=this.tuning.jerk*e,this.drive>this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel:this.drive>this.inputs.accel?(this.drive-=this.tuning.jerk*e*2,this.drive<this.inputs.accel&&(this.drive=this.inputs.accel)):this.drive=this.inputs.accel,this.braking&&(this.brakeLerp+=e/this.tuning.brakeResponse,this.brakeLerp>1&&(this.brakeLerp=1),this.inputs.brake==0&&this.softBraking&&(this.inputs.brake=L.softBrakeForce),this.brakeForce=this.inputs.brake*this.tuning.brake*this.brakeLerp),this.powerLerp=Math.min(1,n.speed/(this.tuning.topSpeed*L.speedFactor))}halfLerp(e){return e=e/2+.5,((3-e*2)*e*e-.5)*2}smoothLerp(e){return(3-e*2)*e*e}}o(ua,"key","driftmas"),o(ua,"name","Driftmas");const me={},Ki={steerAssist:.8,counterSteerAssist:0,rearStability:.5,tyreFriction:1.4,kineticFrictionFactor:.9,tyreStiffness:1,lockDiff:!1,shockTravel:.16,shockForce:3.2,damping:10,weightFactor:.1,wheelMassFactor:.2},ft=class ft extends ua{constructor(){super();o(this,"name","DriftCoupe");o(this,"geometry",{body:Dc,wheel:yc,interior:Mc,dash:Lc,steer:Rc});o(this,"maps",{map:Cc,tiremap:Tc,windscreen:Ic});o(this,"layout",{headlightPos:{x:3.1,y:.75,z:.64},headlightTarget:{x:4.1,y:.6,z:.74},steeringPos:{x:1.75,y:.92,z:.32},steeringWheelAngle:.3});o(this,"interiorObjects",{});o(this,"exteriorObjects",{});o(this,"onTuningConfig",e=>{this.tuning={...this.tuning,...e};for(let s of this.wheels)s.travel=this.tuning.shockTravel});ft.tuningConfig.addListener("any",this.onTuningConfig),this.prepMetrics()}destroy(){super.destroy(),ft.tuningConfig.removeListener("any",this.onTuningConfig)}init(){this.elementsToLoad>0&&se.add("VEHICLE: Attempting to load new vehicle before prev initialisation has completed");for(let s in this.maps)z.setMapForMaterial(s,this.maps[s],!0);z.windscreen.color.setHex(15658734),z.metal.color.setHex(3881787),z.metal.specular.setHex(5592405),z.map.specular.setHex(4473924);const e=new kr;me.body?(n.container.add(me.body),this.exteriorObjects.body=me.body):(this.elementsToLoad++,e.load(this.geometry.body,s=>{s.traverse(a=>{a.isMesh&&(a.material=z.getMaterialByName(a.name),a.material.shouldCastShadow&&(a.castShadow=!0,this.exteriorObjects.shadow=a))}),this.exteriorObjects.body=s,s.frustumCulled=!1,s.position.y+=.02,n.container.add(s),me.body=s,this.onElementLoaded()})),me.wheel?this.wheelObj=me.wheel:(this.elementsToLoad++,e.load(this.geometry.wheel,s=>{s.traverse(a=>{a.isMesh&&(a.material=z.getMaterialByName(a.name),a.material.shouldCastShadow&&(a.castShadow=!0),a.position.z-=this.metrics.wheelWidth/2,a.scale.set(this.metrics.wheelRadius,this.metrics.wheelRadius,this.metrics.wheelRadius))}),this.wheelObj=s,s.frustumCulled=!1,me.wheel=s,this.onElementLoaded()})),me.interior?(n.container.add(me.interior),this.interiorObjects.interior=me.interior):(this.elementsToLoad++,e.load(this.geometry.interior,s=>{z.setOnObject(s),n.container.add(s),this.interiorObjects.interior=s,s.frustumCulled=!1,me.interior=s,this.onElementLoaded()})),me.dash?(n.container.add(me.dash),this.interiorObjects.dash=me.dash):(this.elementsToLoad++,e.load(this.geometry.dash,s=>{z.setOnObject(s),s.position.copy(this.layout.steeringPos),this.interiorObjects.dash=s,s.frustumCulled=!1,n.container.add(s),me.dash=s,this.onElementLoaded()})),me.steer?(n.container.add(me.steer),this.interiorObjects.steeringWheel=me.steer):(this.elementsToLoad++,e.load(this.geometry.steer,s=>{z.setOnObject(s),s.rotation.order="YZX",s.rotation.z=-this.layout.steeringWheelAngle,s.position.copy(this.layout.steeringPos),this.interiorObjects.steeringWheel=s,s.frustumCulled=!1,n.container.add(s),me.steer=s,this.onElementLoaded()})),this.onInit()}onReady(){super.onReady(),this.updateInteriorVisibility()}setShowWheel(e){this.updateInteriorVisibility()}setInterior(){this.updateInteriorVisibility()}setDriverSide(e){this.ready&&(e==Na.LEFT?(this.interiorObjects.interior.scale.z=-1,this.interiorObjects.steeringWheel.position.z=-this.layout.steeringPos.z,this.interiorObjects.dash.position.z=-this.layout.steeringPos.z):(this.interiorObjects.interior.scale.z=1,this.interiorObjects.steeringWheel.position.z=this.layout.steeringPos.z,this.interiorObjects.dash.position.z=this.layout.steeringPos.z))}updateInteriorVisibility(){if(this.ready){for(let e in this.interiorObjects)this.interiorObjects[e].visible=n.isInterior;this.interiorObjects.steeringWheel.visible=this.interiorObjects.steeringWheel.visible&&n.showSteeringWheel;for(let e in this.exteriorObjects)this.exteriorObjects[e].visible=!n.isInterior}}updateVisuals(){this.ready&&(n.inAutodrive?this.interiorObjects.steeringWheel.rotation.x=this.interiorObjects.steeringWheel.rotation.x*.8+L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer)*.2:this.interiorObjects.steeringWheel.rotation.x=L.wheelRotation/2*Math.D2R*(-this.steer/this.tuning.maxSteer),z.setBrakeLights(this.braking,this.softBraking))}};o(ft,"key","drift"),o(ft,"name","DriftCoupe"),o(ft,"icon","/img/ico_veh_drift.svg"),o(ft,"tuningConfigMeta",{steerAssist:{key:"steerAssist",label:"Steer assist",desc:"Narrows steering range as speed increases",type:E.Range,default:.5,min:0,max:1,precision:1},counterSteerAssist:{key:"counterSteerAssist",readable:"Counter-steer assist",label:"Counter-steer assist",desc:"Attempts to correct for spins",type:E.Range,default:Ki.counterSteerAssist,min:0,max:1,precision:1},weightFactor:{key:"weightFactor",readable:"Inertia factor",label:"Inertia factor",desc:"Inertia of chassis",type:E.Range,default:Ki.weightFactor,min:0,max:.9,precision:2},wheelMassFactor:{key:"wheelMassFactor",readable:"Wheel mass factor",label:"Wheel mass factor",type:E.Range,default:1,min:.1,max:10,precision:1},rearStability:{key:"rearStability",readable:"Rear stability",label:"Rear stability",desc:"Reduces tendency for rear to slip out",type:E.Range,default:Ki.rearStability,min:0,max:1,precision:2},tyreFriction:{key:"tyreFriction",readable:"Tyre Grip",label:"Tyre Grip",desc:"Tyre grip",type:E.Range,default:1.1,min:.2,max:4,precision:2},kineticFrictionFactor:{key:"kineticFrictionFactor",readable:"Slip Factor",label:"Tyre Slip Factor",desc:"Multiplier which reduces tyre grip when slipping",type:E.Range,default:.8,min:.1,max:1,precision:2},tyreStiffness:{key:"tyreStiffness",readable:"Tyre Stiffness",label:"Tyre Stiffness",desc:"Responsiveness of tyres to steering input",type:E.Range,default:.5,min:.1,max:1,precision:1},damping:{key:"damping",readable:"Shock damping",label:"Shock damping",type:E.Range,default:8,min:2,max:24,precision:0},shockTravel:{key:"shockTravel",readable:"Shock travel",label:"Shock travel",type:E.Range,default:.12,min:.05,max:.4,precision:2},shockForce:{key:"shockForce",readable:"Shock force",label:"Shock force",type:E.Range,default:4,min:2,max:20,precision:0},lockDiff:{key:"lockDiff",readable:"Locked diff",label:"Locked diff",desc:"Locks rear differential when slipping",type:E.Boolean,default:!0}}),o(ft,"tuningConfig",new Ve("DriftCoupe",Ki)),o(ft,"cameras",{...J,Chase:{...J.Chase,posOffset:[1.4,0,0]},ChaseFar:{...J.ChaseFar,posOffset:[1.4,0,0]},FirstPerson:{...J.FirstPerson,posOffset:[1.38,1.16,.32]},Bonnet:{...J.Bonnet,posOffset:[3.2,.6,0]},Bumper:{...J.Bumper,posOffset:[3.4,.25,0]}});let ui=ft;const fa={vehicle:Ke,coupe:ca,coach:da,bike:di,drift:ui,debug:ga},rn={coupe:0,coach:1,bike:2},Bi=[];for(let l in rn){let i=fa[l];Bi.push({key:i.key,readable:i.name,icon:i.icon})}ad.type.options=Bi;Ja.subscribe(l=>{l&&(rn.drift=3,Bi.push({key:ui.key,readable:ui.name,icon:ui.icon}))});const qi={Reset:"reset",ModelChanged:"modelChanged",Headlights:"headlights",Ready:"ready"},Fc=80,_c=.4,kc=.75,Pc=1.1;class Ec extends we{constructor(){super();o(this,"container",new we);o(this,"loader",new kr);o(this,"cameras",J);o(this,"forwardPosition",new m);o(this,"cockPosition",new m);o(this,"midPosition",new m);o(this,"orientation",new Z(0,0,0,"YZX"));o(this,"forwardDir",new m);o(this,"right",new m(0,0,1));o(this,"up",new m(0,1,0));o(this,"motionDir",new m);o(this,"heading",0);o(this,"motionHeading",0);o(this,"pitch",0);o(this,"roll",0);o(this,"pPosition",new m);o(this,"velocity",new m);o(this,"pVelocity",new m);o(this,"accel",new m);o(this,"speed",0);o(this,"dS",0);o(this,"com",new m);o(this,"type","vehicle");o(this,"typeClass",Ke);o(this,"direction",0);o(this,"isAirborne",!1);o(this,"onRoad",!0);o(this,"roadSide",0);o(this,"isLoading",!1);o(this,"hasInit",!1);o(this,"wrongWay",!1);o(this,"isRogue",!1);o(this,"hasHandbrake",!1);o(this,"inAutodrive",!1);o(this,"driveLaneOffset",0);o(this,"driverSide",1);o(this,"showSteeringWheel",!0);o(this,"speedLerp",0);o(this,"hasSpeedControl",!1);o(this,"hasCruiseTarget",!1);o(this,"hasSpeedLimit",!1);o(this,"speedControlTarget",0);o(this,"tuning",{topSpeed:40,steerInterval:1,boxWidth:1.5,boxLength:4});o(this,"metrics",{boxWidth:1.5,boxLength:4});o(this,"controller",null);o(this,"headlights",!1);o(this,"headlightsManual",!1);o(this,"headlightsIntensity",50);o(this,"headlightsIntensityFactor",1);o(this,"lightsObj",new we);o(this,"lights",{});o(this,"audioObj",new we);o(this,"listeners",{});o(this,"onCameraInteriorChangedBound",this.onCameraInteriorChanged.bind(this));this.matrixAutoUpdate=!1,this.frustumCulled=!1,this.rotation.order="YZX",this.container=new we,this.container.matrixAutoUpdate=!1,this.add(this.container),this.lights.left={light:new Dr(16777215,10,Fc,_c,kc,Pc),target:new we},this.lights.left.light.target=this.lights.left.target,this.lightsObj.add(this.lights.left.light),this.lightsObj.add(this.lights.left.target),this.lights.right={light:this.lights.left.light.clone(),target:new we},this.lights.right.light.target=this.lights.right.target,this.lightsObj.add(this.lights.right.light),this.lightsObj.add(this.lights.right.target),this.lightsObj.frustumCulled=!1,this.add(this.lightsObj),this.add(this.audioObj),this.controller=new Ke,this.cameras=Ke.cameras}onCameraInteriorChanged(){this.isInterior=Je.isInterior&&!Je.isCinecam,kd.set(this.isInterior),this.controller.setInterior(this.isInterior)}reset(){this.controller.reset()}setVehicle(e){(e<0||e>=Bi.length)&&(console.warn("VEHICLE: Unrecognised vehicle index",e),e=0,V.set("type",0));let s=Bi[e].key;if(Le.scene==2&&(s="drift"),s==this.type)return;if(!(s in fa)){console.warn("VEHICLE: Failed to load unrecognised vehicle type ",s);return}this.controller&&this.controller.destroy(),this.container.clear(),this.audioObj.clear(),this.hasInit=!1,this.isLoading=!0,delete this.controller,this.type=s;let a=fa[s];this.typeClass=a,se.add("VEHICLE: Setting vehicle type "+a.name),this.controller=new a,this.controller.init(),this.cameras=a.cameras,this.tuning=this.controller.tuning,this.metrics=this.controller.metrics,this.fireEvent(qi.ModelChanged),V.set("speedControlTarget",Math.min(V.speedControlTarget,this.tuning.topSpeed*3.6)),V.setMany({tuningConfig:a.tuningConfig,tuningConfigMeta:a.tuningConfigMeta})}setHeadlights(e,s){!e&&!s&&this.headlights&&this.headlightsManual||(this.headlightsManual=(this.headlightsManual||s)&&e,this.headlights=e,this.headlightsIntensityFactor=e?1:0,this.setHeadlightIntensity(this.headlightsIntensity),this.fireEvent(qi.Headlights))}setHeadlightColour(e){e===void 0&&(e=16777205),this.headlightColour=e,this.lights.left.light.color.setHex(e),this.lights.right.light.color.setHex(e)}setHeadlightIntensity(e){this.headlightsIntensity=e,this.lights.right.light.intensity=e*this.headlightsIntensityFactor,this.lights.left.light.intensity=e*this.headlightsIntensityFactor,z.headlight.emissiveIntensity=this.headlightsIntensityFactor,z.rearlight.emissiveIntensity=this.headlightsIntensityFactor,this.controller.setHeadlightIntensity(e)}setDriveMode(e){this.controller.setDriveMode(e)}setDriverSide(e){this.driverSide=e,this.controller.setDriverSide(e)}setShowWheel(e){this.showSteeringWheel=e,this.controller.setShowWheel(e)}setDriveLane(e){this.controller.setDriveLane(e)}setShadow(e){z.setShadow(e),this.controller.setShadow(e)}setAutodrive(e){this.inAutodrive=e,this.controller.setAutodrive(e)}setGripFactor(e){this.controller.setGripFactor(e)}setSpeedFactor(e){this.controller.setSpeedFactor(e)}onReset(){this.onRoad=!0,this.roadSide=0,this.isRogue=!1,this.direction=0,this.speed=0,this.speedLerp=0,this.fireEvent(qi.Reset)}onReady(){this.hasInit=!0,this.isLoading=!1,this.fireEvent(qi.Ready)}update(e,s){this.controller.update(e,s),this.speedLerp=this.controller.speedLerp}fireEvent(e,s=null){e in this.listeners&&this.listeners[e].map(a=>a(s))}addListener(e,s){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(s)}removeListener(e,s){if(!(e in this.listeners))return;let a=this.listeners[e].indexOf(s);a>=0&&this.listeners[e].splice(a,1)}}const n=new Ec,so=""+new URL("../assets/grass.15f2422c.webp",import.meta.url).href,ao=""+new URL("../assets/summer_grasses.7ddf683f.webp",import.meta.url).href,Nc=""+new URL("../assets/spring_bushes.2db1f4bc.webp",import.meta.url).href,Oc=""+new URL("../assets/forest_spring.a81cef17.webp",import.meta.url).href,Bc=""+new URL("../assets/gravel_02.8367ed2c.webp",import.meta.url).href,oo=""+new URL("../assets/sand.43e5b6fc.webp",import.meta.url).href,Uc=""+new URL("../assets/spring_rock.d1f6769c.webp",import.meta.url).href,Ms=""+new URL("../assets/rock_bump.8f8c68ad.webp",import.meta.url).href,nn=""+new URL("../assets/summer_heather_05.5f56558d.webp",import.meta.url).href,ro=""+new URL("../assets/ground_detail_near.9099b9d5.webp",import.meta.url).href,no=""+new URL("../assets/ground_detail_far.a63b212a.webp",import.meta.url).href,Ls=""+new URL("../assets/grass_variation.209068de.webp",import.meta.url).href,lo=""+new URL("../assets/road_base.40d53c3c.webp",import.meta.url).href,ho=""+new URL("../assets/road_paint_dashed.246907ab.webp",import.meta.url).href,co=""+new URL("../assets/road_paint_dashed_long.58ab8a61.webp",import.meta.url).href,go=""+new URL("../assets/road_paint_solid.5d853556.webp",import.meta.url).href,uo=""+new URL("../assets/road_paint_solid_left.68b665c9.webp",import.meta.url).href,fo=""+new URL("../assets/road_paint_solid_right.3f96bedd.webp",import.meta.url).href,po=""+new URL("../assets/road_paint_merge_left.27a677e8.webp",import.meta.url).href,Ao=""+new URL("../assets/road_paint_merge_right.5c821b1d.webp",import.meta.url).href,Hc=""+new URL("../assets/road_single_base_spring.2a1a3159.webp",import.meta.url).href,zc=""+new URL("../assets/road_overlay_spring.10938687.webp",import.meta.url).href,Wc=""+new URL("../assets/road_single_overlay_spring.a23e0db5.webp",import.meta.url).href,Gc=""+new URL("../assets/spring_imposters_0_d.2e67db77.webp",import.meta.url).href,Vc=""+new URL("../assets/spring_imposters_0_n.1d5afe54.webp",import.meta.url).href,jc=""+new URL("../assets/spring_imposters_1_d.05133c03.webp",import.meta.url).href,Zc=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,Qc=""+new URL("../assets/spring_trees_0.aee94219.webp",import.meta.url).href,Xc=""+new URL("../assets/spring_trees_0_n.8e3ce8fa.webp",import.meta.url).href,Yc=""+new URL("../assets/spring_trees_1_m.29ae06f6.webp",import.meta.url).href,Kc=""+new URL("../assets/spring_trees_1_a.e8f53ceb.webp",import.meta.url).href,mo=""+new URL("../assets/wall_barrier.63193046.webp",import.meta.url).href,Rs="data:image/webp;base64,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",vo=""+new URL("../assets/wall_concrete.d56426dc.webp",import.meta.url).href,qc=""+new URL("../assets/spring_wall_barrier_wood.29edf0af.webp",import.meta.url).href,Cs="data:image/webp;base64,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",Jc=""+new URL("../assets/spring_wall_drystone.6c714f68.webp",import.meta.url).href,$c=""+new URL("../assets/ambiance_spring_01.7b64f1e2.mp3",import.meta.url).href,Ot=""+new URL("../assets/ambiance_cloudy_01.9c19be76.mp3",import.meta.url).href,Ge=""+new URL("../assets/wind_01.95bb0ace.mp3",import.meta.url).href,Ts=""+new URL("../assets/bridge.7eaed52d.webp",import.meta.url).href,Is=""+new URL("../assets/clouds_01.700a3fdb.webp",import.meta.url).href,ln=""+new URL("../assets/road_single_base.d5dbc374.webp",import.meta.url).href,hn=""+new URL("../assets/gravel.0ee4475c.webp",import.meta.url).href,dn=""+new URL("../assets/summer_rock.674f8c5a.webp",import.meta.url).href,eg=""+new URL("../assets/summer_bushes.943c4258.webp",import.meta.url).href,tg=""+new URL("../assets/forest_01.b82a9e7e.webp",import.meta.url).href,ig=""+new URL("../assets/summer_imposters_0_d.6a3261f4.webp",import.meta.url).href,sg=""+new URL("../assets/summer_imposters_0_n.99abbc99.webp",import.meta.url).href,ag=""+new URL("../assets/summer_imposters_1_d.a1e60bf5.webp",import.meta.url).href,og=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,rg=""+new URL("../assets/summer_trees_0.d5cc9742.webp",import.meta.url).href,ng=""+new URL("../assets/summer_trees_0_n.011e666e.webp",import.meta.url).href,lg=""+new URL("../assets/summer_trees_1_m.866c5db4.webp",import.meta.url).href,hg=""+new URL("../assets/summer_trees_1_a.c88ed1f2.webp",import.meta.url).href,cn=""+new URL("../assets/wall_barrier_wood.a34ab34c.webp",import.meta.url).href,gn=""+new URL("../assets/wall_drystone.c5584f29.webp",import.meta.url).href,os=""+new URL("../assets/ambiance_summer_low_01.6d623f8c.mp3",import.meta.url).href,dg={grass:so,bushes:eg,forest:tg,heather:nn,gravel:hn,detailNear:ro,detailFar:no,grassVariation:Ls,road:{base:lo,paintDashed:ho,paintDashedLong:co,paintSolid:go,paintSolidLeft:uo,paintSolidRight:fo,paintMergeLeft:po,paintMergeRight:Ao},roadSingle:{base:ln,stretch:2},sand:oo,rock:dn,rockBump:Ms,imposterMap:ig,imposterMapB:ag,imposterNorm:sg,imposterNormB:og,grassSprites:ao,clouds:Is,bridge:Ts,walls:{barrier:mo,barrierNorm:Rs,seaWall:vo,fence:cn,fenceNorm:Cs,drystone:gn},trees:[{d:rg,n:ng},{d:lg,n:hg}]},cg={road:6249562,clear:12316415},re={road:1,grass:.8,gravel:.7},gg={common:{maps:dg,colours:cg,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:6918489,grassColB:11513188,peakColA:13878423,peakColB:14059356,fieldDiscolouration:3016965},surfaces:{road:Ht.Tarmac,offroad:Ht.Gravel},effects:{shadowFactor:.9,treeDiscolouration:.9},lights:{fresnelFactor:.6,radiance:0}},morning:{clear:{lights:{headlights:{on:!1,intensity:100},sun:{col:13554905,intensity:.7},ambient:{col:5328425,intensity:1.3},fresnelFactor:1.8,radiance:4},fog:{colA:16770462,colB:5940671,colC:16767672,near:.2,far:1,hazeHeight:64,hazeIntensity:.15},water:{base:3555135,body:4344914,highlight:12826258,underwater:8675400},clouds:{hasClouds:!0,highlight:15971155,lowlight:7294626,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:4,skyScale1:8,mode:4},friction:{...re},audio:{ambiance:{src:os,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:13613497,intensity:.5},ambient:{col:9079434,intensity:.9},fresnelFactor:.63,radiance:1.6},fog:{colA:11244423,colB:7431003,colC:5392706,near:-.2,far:1,hazeHeight:-140,hazeIntensity:.41},water:{base:855309,body:7168858,highlight:9996673,underwater:4600875},clouds:{hasClouds:!0,highlight:9607067,lowlight:5002847,shelfHeight0:500,shelfHeight1:800,skyScale0:14.5,skyScale1:35.5,mode:0},friction:{...re},audio:{ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16776677,intensity:3.4},ambient:{col:6256262,intensity:1.7},fresnelFactor:1.5,radiance:3},fog:{colA:11393279,colB:1735167,colC:8829182,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2635587,body:5993365,highlight:10142974,underwater:5730446},clouds:{hasClouds:!0,highlight:16777215,lowlight:14404812,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:5,skyScale1:24.5,mode:0},friction:{...re},audio:{ambiance:{src:os,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:15463423,intensity:1.3},ambient:{col:8224125,intensity:1.3},fresnelFactor:.65,radiance:2},fog:{colA:13228270,colB:13358321,colC:8625098,near:.85,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1315606,body:6644840,highlight:13486808,underwater:4212042},clouds:{hasClouds:!0,highlight:9213857,lowlight:7568770,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:3,skyScale1:18.5,mode:0},friction:{...re},audio:{ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}}},evening:{clear:{lights:{headlights:{on:!1,intensity:40},sun:{col:16705495,intensity:.6},ambient:{col:4926225,intensity:1.2},fresnelFactor:1.26,radiance:4},fog:{colA:16751964,colB:6071233,colC:16749645,near:.2,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2768198,body:6710886,highlight:13933940,underwater:8605729},clouds:{hasClouds:!0,highlight:15581074,lowlight:13873047,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:30.5,skyScale1:12,mode:2},friction:{...re},audio:{ambiance:{src:os,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:20},sun:{col:15983832,intensity:.4},ambient:{col:9667942,intensity:.8},fresnelFactor:.5,radiance:3},fog:{colA:11050905,colB:8420207,colC:6052956,near:-.1,far:1,hazeHeight:-120,hazeIntensity:.15},water:{base:1776152,body:5591630,highlight:9867405,underwater:3881011},clouds:{hasClouds:!0,highlight:7895160,lowlight:855309,shelfHeight0:500,shelfHeight1:600,skyScale0:7,skyScale1:19.5,mode:0},friction:{...re},audio:{ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}}},night:{clear:{lights:{headlights:{on:!0,intensity:250},sun:{col:16187134,intensity:.2},ambient:{col:2566725,intensity:.12},fresnelFactor:.25,radiance:1},fog:{colA:2105393,colB:0,colC:0,near:.8,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1052689,body:657186,highlight:2368548,underwater:394758},clouds:{hasClouds:!1,highlight:0,lowlight:6381921,shelfHeight0:900,shelfHeight1:1100,skyScale0:6,skyScale1:15.5,mode:0},stars:{density:2,horizonOffset:0,horizonScale:4,horizonOpacity:0},friction:{...re},audio:{ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!0,intensity:300},sun:{col:15133426,intensity:.05},ambient:{col:15133426,intensity:.1},fresnelFactor:0,radiance:8},fog:{colA:855309,colB:1513239,colC:0,near:.72,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2697513,highlight:2368548,underwater:0},clouds:{hasClouds:!0,highlight:0,lowlight:6710886,shelfHeight0:800,shelfHeight1:1e3,skyScale0:6,skyScale1:24.5,mode:0},friction:{...re},audio:{ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}}}}},ug={grass:so,bushes:Nc,forest:Oc,heather:nn,gravel:Bc,detailNear:ro,detailFar:no,grassVariation:Ls,sand:oo,rock:Uc,rockBump:Ms,imposterMap:Gc,imposterMapB:jc,imposterNorm:Vc,imposterNormB:Zc,grassSprites:ao,clouds:Is,bridge:Ts,road:{base:lo,paintDashed:ho,paintDashedLong:co,paintSolid:go,paintSolidLeft:uo,paintSolidRight:fo,paintMergeLeft:po,paintMergeRight:Ao,overlay:zc},roadSingle:{base:Hc,overlay:Wc,stretch:2},walls:{barrier:mo,barrierNorm:Rs,seaWall:vo,fence:qc,fenceNorm:Cs,drystone:Jc},trees:[{d:Qc,n:Xc},{d:Yc,n:Kc}]},fg={road:6513248,clear:12316415},li={ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}},fr={ambiance:{src:$c,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}},pg={common:{maps:ug,colours:fg,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:5214528,grassColB:9743443,peakColA:12042380,peakColB:12945246,fieldDiscolouration:1575948},effects:{shadowFactor:.8,treeDiscolouration:1.5},surfaces:{road:Ht.Tarmac,offroad:Ht.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16764126,intensity:1},ambient:{col:5779826,intensity:.8},fresnelFactor:2,radiance:2.1},fog:{colA:14980781,colB:9746416,colC:7039851,near:-.2,far:1,hazeHeight:80,hazeIntensity:.25},water:{base:4074802,body:9461869,highlight:12219272,underwater:5730446},clouds:{hasClouds:!0,highlight:13539268,lowlight:10724259,shelfHeight0:1700,shelfHeight1:2100,skyScale0:6,skyScale1:24.5,mode:0},friction:{...re},audio:{...fr}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:16449520,intensity:.3},ambient:{col:5714056,intensity:.6},fresnelFactor:1.32,radiance:2.1},fog:{colA:9143431,colB:6248797,colC:6249811,near:-.2,far:1,hazeHeight:-160,hazeIntensity:.11},water:{base:3026222,body:6249053,highlight:7895160,underwater:2959914},clouds:{hasClouds:!0,highlight:7039851,lowlight:7039851,shelfHeight0:1700,shelfHeight1:2100,skyScale0:6,skyScale1:24.5,mode:0},friction:{...re},audio:{...li}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16710892,intensity:4},ambient:{col:7241810,intensity:1.4},fresnelFactor:1.8,radiance:2},fog:{colA:12835822,colB:6202340,colC:11588850,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2369837,body:6322826,highlight:9351122,underwater:5730446},clouds:{hasClouds:!0,highlight:16777215,lowlight:14411775,shelfHeight0:1900,shelfHeight1:2200,skyScale0:7,skyScale1:31.5,mode:0},friction:{...re},audio:{...fr}},overcast:{lights:{headlights:{on:!1,intensity:10},sun:{col:14668735,intensity:1.8},ambient:{col:0,intensity:1.6},fresnelFactor:1,radiance:1},fog:{colA:16119285,colB:11382189,colC:11382189,near:0,far:1,hazeHeight:-140,hazeIntensity:.11},water:{base:3946809,body:7698554,highlight:14146526,underwater:3751751},clouds:{hasClouds:!0,highlight:15132390,lowlight:14408667,shelfHeight0:1900,shelfHeight1:2200,skyScale0:6,skyScale1:22.5,mode:0},friction:{...re},audio:{...li}}},evening:{clear:{lights:{headlights:{on:!0,intensity:100},sun:{col:7702435,intensity:.7},ambient:{col:4531986,intensity:1.2},fresnelFactor:.75,radiance:1},fog:{colA:14980455,colB:5331036,colC:7634566,near:.6,far:1,hazeHeight:100,hazeIntensity:.3},water:{base:3814705,body:9991517,highlight:13146244,underwater:6834743},clouds:{hasClouds:!0,highlight:14589555,lowlight:16677633,shelfHeight0:3e3,shelfHeight1:4500,skyScale0:11,skyScale1:24.5,mode:0},friction:{...re},audio:{...li}},overcast:{lights:{headlights:{on:!0,intensity:50},sun:{col:16769750,intensity:.25},ambient:{col:409414,intensity:.6},fresnelFactor:.6,radiance:1},fog:{colA:8878451,colB:8878451,colC:4733491,near:0,far:1,hazeHeight:-140,hazeIntensity:.4},water:{base:2763048,body:5788240,highlight:7826278,underwater:2368291},clouds:{hasClouds:!0,highlight:6710886,lowlight:4342338,shelfHeight0:3e3,shelfHeight1:4500,skyScale0:11,skyScale1:24.5,mode:0},friction:{...re},audio:{...li}}},night:{clear:{lights:{headlights:{on:!0,intensity:100},sun:{col:4088436,intensity:1},ambient:{col:5251591,intensity:1.5},fresnelFactor:.5,radiance:1},fog:{colA:8604453,colB:531510,colC:5783085,near:.8,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1052689,body:2106413,highlight:4338734,underwater:394758},clouds:{hasClouds:!1,highlight:0,lowlight:6381921,shelfHeight0:900,shelfHeight1:1100,skyScale0:6,skyScale1:15.5,mode:0},stars:{density:1,horizonOffset:1,horizonScale:8,horizonOpacity:0},friction:{...re},audio:{...li}},overcast:{lights:{headlights:{on:!0,intensity:100},sun:{col:9737364,intensity:.2},ambient:{col:9737364,intensity:.3},fresnelFactor:.25,radiance:1},fog:{colA:2368548,colB:1184274,colC:0,near:-.2,far:1,hazeHeight:0,hazeIntensity:0},water:{base:855309,body:2500134,highlight:3026478,underwater:394758},clouds:{hasClouds:!0,highlight:8882055,lowlight:9737364,shelfHeight0:1200,shelfHeight1:1500,skyScale0:37.5,skyScale1:20.5,mode:0},friction:{...re},audio:{...li}}}},Ag=""+new URL("../assets/autumn_bushes.b82ca395.webp",import.meta.url).href,mg=""+new URL("../assets/forest_autumn.55ca08bd.webp",import.meta.url).href,vg=""+new URL("../assets/autumn_heather.d890b430.webp",import.meta.url).href,wg=""+new URL("../assets/road_overlay_autumn.68f523cb.webp",import.meta.url).href,xg=""+new URL("../assets/road_single_overlay_autumn.59ecdb8e.webp",import.meta.url).href,Sg=""+new URL("../assets/autumn_imposters_0_d.4c4b38fd.webp",import.meta.url).href,bg=""+new URL("../assets/autumn_imposters_0_n.d10ccd46.webp",import.meta.url).href,yg=""+new URL("../assets/autumn_imposters_1_d.0160320a.webp",import.meta.url).href,Dg=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,Mg=""+new URL("../assets/autumn_trees_0.2fe560b0.webp",import.meta.url).href,Lg=""+new URL("../assets/autumn_trees_0_n.a664e3e1.webp",import.meta.url).href,Rg=""+new URL("../assets/autumn_trees_1_m.2cd39e32.webp",import.meta.url).href,Cg=""+new URL("../assets/autumn_trees_1_a.2aa926cb.webp",import.meta.url).href,Tg={grass:so,bushes:Ag,forest:mg,heather:vg,gravel:hn,detailNear:ro,detailFar:no,grassVariation:Ls,sand:oo,rock:dn,rockBump:Ms,imposterMap:Sg,imposterMapB:yg,imposterNorm:bg,imposterNormB:Dg,grassSprites:ao,clouds:Is,bridge:Ts,road:{base:lo,paintDashed:ho,paintDashedLong:co,paintSolid:go,paintSolidLeft:uo,paintSolidRight:fo,paintMergeLeft:po,paintMergeRight:Ao,overlay:wg},roadSingle:{base:ln,overlay:xg,stretch:2},walls:{barrier:mo,barrierNorm:Rs,seaWall:vo,fence:cn,fenceNorm:Cs,drystone:gn},trees:[{d:Mg,n:Lg},{d:Rg,n:Cg}]},Ig={road:6513248,clear:12316415},Jt={ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}},Fg={ambiance:{src:os,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}},_g={common:{maps:Tg,colours:Ig,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:4881741,grassColB:12496761,peakColA:14925472,peakColB:10649893,fieldDiscolouration:2301205},effects:{shadowFactor:.8,treeDiscolouration:1.2},surfaces:{road:Ht.Tarmac,offroad:Ht.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:20},sun:{col:15464447,intensity:1.2},ambient:{col:467510,intensity:1},fresnelFactor:1.5,radiance:2},fog:{colA:14868181,colB:9163518,colC:12773631,near:0,far:1,hazeHeight:80,hazeIntensity:.5},water:{base:3159350,body:5469055,highlight:12377308,underwater:5730446},clouds:{hasClouds:!1,highlight:14132156,lowlight:12546950,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:13,mode:5},friction:{...re},audio:{...Jt}},overcast:{lights:{headlights:{on:!0,intensity:90},sun:{col:11835314,intensity:1.3},ambient:{col:1312546,intensity:1.9},fresnelFactor:1,radiance:1},fog:{colA:10651308,colB:6051673,colC:8219296,near:0,far:1,hazeHeight:-60,hazeIntensity:.1},water:{base:1907484,body:6051673,highlight:10060194,underwater:6051673},clouds:{hasClouds:!0,highlight:9733259,lowlight:8882055,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:13,mode:0},friction:{...re},audio:{...Jt}}},day:{clear:{lights:{headlights:{on:!1,intensity:40},sun:{col:16776944,intensity:3},ambient:{col:994637,intensity:1},fresnelFactor:1.6,radiance:1.1},fog:{colA:10274024,colB:2651589,colC:8366034,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1447960,body:5466495,highlight:10864353,underwater:5730446},clouds:{hasClouds:!0,highlight:16777215,lowlight:16777215,shelfHeight0:1600,shelfHeight1:1300,skyScale0:2,skyScale1:42,mode:0},friction:{...re},audio:{...Fg}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:16775152,intensity:1.6},ambient:{col:866664,intensity:1},fresnelFactor:.5,radiance:.5},fog:{colA:11579568,colB:3552822,colC:6184542,near:0,far:1,hazeHeight:-120,hazeIntensity:.4},water:{base:2697513,body:6710886,highlight:11053224,underwater:2368548},clouds:{hasClouds:!0,highlight:13619151,lowlight:8224125,shelfHeight0:1600,shelfHeight1:1300,skyScale0:3,skyScale1:23.5,mode:0},friction:{...re},audio:{...Jt}}},evening:{clear:{lights:{headlights:{on:!1,intensity:80},sun:{col:11186363,intensity:1.4},ambient:{col:0,intensity:2},fresnelFactor:1.25,radiance:1.5},fog:{colA:15185783,colB:9017254,colC:7234651,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2106151,body:5986898,highlight:13348228,underwater:4215400},clouds:{hasClouds:!0,highlight:7106933,lowlight:6841956,shelfHeight0:1100,shelfHeight1:1300,skyScale0:4,skyScale1:16.5,mode:0},friction:{...re},audio:{...Jt}},overcast:{lights:{headlights:{on:!0,intensity:80},sun:{col:9272992,intensity:1},ambient:{col:3351113,intensity:2},fresnelFactor:1,radiance:.1},fog:{colA:9008547,colB:4797286,colC:3877457,near:0,far:1,hazeHeight:-140,hazeIntensity:.25},water:{base:1973282,body:5787237,highlight:8811168,underwater:2431793},clouds:{hasClouds:!0,highlight:3813955,lowlight:4788371,shelfHeight0:1600,shelfHeight1:1300,skyScale0:6,skyScale1:42,mode:0},friction:{...re},audio:{...Jt}}},night:{clear:{lights:{headlights:{on:!0,intensity:160},sun:{col:4541022,intensity:.4},ambient:{col:5984360,intensity:.5},fresnelFactor:0,radiance:0},fog:{colA:2564401,colB:525833,colC:2564401,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2697003,highlight:3289142,underwater:2697003},clouds:{hasClouds:!0,highlight:0,lowlight:0,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:0,skyScale1:11,mode:0},stars:{density:2,horizonOffset:0,horizonScale:4,horizonOpacity:0},friction:{...re},audio:{...Jt}},overcast:{lights:{headlights:{on:!0,intensity:190},sun:{col:4541022,intensity:.8},ambient:{col:4340299,intensity:.8},fresnelFactor:0,radiance:0},fog:{colA:1381139,colB:2630949,colC:2564401,near:0,far:1,hazeHeight:-60,hazeIntensity:.2},water:{base:0,body:2959914,highlight:2565413,underwater:0},clouds:{hasClouds:!0,highlight:5855577,lowlight:5261641,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:3,skyScale1:21.5,mode:0},friction:{...re},audio:{...Jt}}}},pr=""+new URL("../assets/winter_grass.2126ead2.webp",import.meta.url).href,kg=""+new URL("../assets/winter_grasses.fbb53d0d.webp",import.meta.url).href,Pg=""+new URL("../assets/winter_bushes.8e9f3165.webp",import.meta.url).href,Eg=""+new URL("../assets/forest_winter.0710a850.webp",import.meta.url).href,Ng=""+new URL("../assets/winter_rock.674a5de1.webp",import.meta.url).href,Ar=""+new URL("../assets/winter_gravel.03b9e4e9.webp",import.meta.url).href,Og=""+new URL("../assets/winter_heather.b9aeb76f.webp",import.meta.url).href,Bg=""+new URL("../assets/ground_detail_far_winter.003963d8.webp",import.meta.url).href,Ug=""+new URL("../assets/winter_road.e19b36b8.webp",import.meta.url).href,Hg=""+new URL("../assets/winter_road_single.7e3852c1.webp",import.meta.url).href,zg=""+new URL("../assets/winter_imposters_0_d.ce1a9b7d.webp",import.meta.url).href,Wg=""+new URL("../assets/winter_imposters_0_n.8293f6b6.webp",import.meta.url).href,Gg=""+new URL("../assets/winter_imposters_1_d.2882c5c9.webp",import.meta.url).href,Vg=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,jg=""+new URL("../assets/winter_trees_0.99189e5d.webp",import.meta.url).href,Zg=""+new URL("../assets/winter_trees_0_n.24c5f705.webp",import.meta.url).href,Qg=""+new URL("../assets/winter_trees_1_m.7ee3e863.webp",import.meta.url).href,Xg=""+new URL("../assets/winter_trees_1_a.142fe383.webp",import.meta.url).href,Yg=""+new URL("../assets/winter_wall_barrier.2f3faaf6.webp",import.meta.url).href,Kg=""+new URL("../assets/winter_wall_concrete.edcd548c.webp",import.meta.url).href,qg=""+new URL("../assets/winter_wall_barrier_wood.058b9fbc.webp",import.meta.url).href,Jg=""+new URL("../assets/winter_wall_drystone.ef024453.webp",import.meta.url).href,$g={grass:pr,bushes:Pg,forest:Eg,heather:Og,gravel:Ar,detailNear:pr,detailFar:Bg,grassVariation:Ls,sand:Ar,rock:Ng,rockBump:Ms,imposterMap:zg,imposterMapB:Gg,imposterNorm:Wg,imposterNormB:Vg,grassSprites:kg,clouds:Is,bridge:Ts,road:{base:Ug},roadSingle:{base:Hg},walls:{barrier:Yg,barrierNorm:Rs,seaWall:Kg,fence:qg,fenceNorm:Cs,drystone:Jg},trees:[{d:jg,n:Zg},{d:Qg,n:Xg}]},eu={road:9802899,clear:12316415},kt={road:.85,grass:.5,gravel:.6},Pt={ambiance:{src:Ot,loopStart:.1,loopEnd:.1},wind:{src:Ge,loopStart:.07,loopEnd:.07}},tu={common:{maps:$g,colours:eu,foliage:{grassAlphaTest:.2,bushAlphaTest:.3,imposterAlphaTest:.5},ground:{grassColA:16777215,grassColB:14409185,peakColA:14409185,peakColB:12172742,fieldDiscolouration:6381921},effects:{frozenWater:!0,shadowFactor:.75,treeDiscolouration:.2,hasSnow:!0},surfaces:{road:Ht.Ice,offroad:Ht.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:20},sun:{col:8295876,intensity:1.9},ambient:{col:4803147,intensity:1.9},fresnelFactor:1.25,radiance:1.08},fog:{colA:16634011,colB:5666463,colC:8882839,near:0,far:1,hazeHeight:0,hazeIntensity:0},water:{base:4011839,body:12359828,highlight:12692106,underwater:5730446},clouds:{hasClouds:!0,highlight:16742190,lowlight:11024058,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:15,mode:0},friction:{...kt},audio:{...Pt}},overcast:{lights:{headlights:{on:!0,intensity:40},sun:{col:2718601,intensity:.5},ambient:{col:5073519,intensity:.8},fresnelFactor:1,radiance:1.93},fog:{colA:879229,colB:541519,colC:879229,near:0,far:.71,hazeHeight:240,hazeIntensity:.66},water:{base:1185303,body:1913141,highlight:4487811,underwater:13750737},clouds:{hasClouds:!0,highlight:5086636,lowlight:4563637,shelfHeight0:1800,shelfHeight1:2200,skyScale0:8,skyScale1:26.5,mode:0},snow:{density:.5,col:3692380,speed:1.75},friction:{...kt},audio:{...Pt}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:14479358,intensity:1.5},ambient:{col:10656918,intensity:1.5},fresnelFactor:3,radiance:1},fog:{colA:16186366,colB:3514851,colC:12763842,near:0,far:1,hazeHeight:100,hazeIntensity:.3},water:{base:2303012,body:8755613,highlight:10860741,underwater:7039851},clouds:{hasClouds:!0,highlight:16777215,lowlight:14535884,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:5,mode:4},snow:{density:0,col:16777215,speed:1.8},friction:{...kt},audio:{...Pt}},overcast:{lights:{headlights:{on:!1,intensity:50},sun:{col:12699622,intensity:1.2},ambient:{col:8095379,intensity:1},fresnelFactor:.5,radiance:2},fog:{colA:12567775,colB:8948901,colC:12567775,near:-.2,far:.8,hazeHeight:120,hazeIntensity:.42},water:{base:789517,body:1973791,highlight:8158595,underwater:12567775},clouds:{hasClouds:!0,highlight:11053491,lowlight:12764108,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:12,skyScale1:24.5,mode:0},snow:{density:1,col:11646409,speed:1.75},friction:{...kt},audio:{...Pt}}},evening:{clear:{lights:{headlights:{on:!0,intensity:80},sun:{col:8296900,intensity:.7},ambient:{col:6118257,intensity:.5},fresnelFactor:.75,radiance:0},fog:{colA:11561352,colB:13680046,colC:9371698,near:-.2,far:1,hazeHeight:80,hazeIntensity:0},water:{base:2039583,body:5919574,highlight:10840443,underwater:5730446},clouds:{hasClouds:!1,highlight:11037586,lowlight:7416466,shelfHeight0:1500,shelfHeight1:1400,skyScale0:16,skyScale1:36,mode:5},friction:{...kt},audio:{...Pt}},overcast:{lights:{headlights:{on:!0,intensity:50},sun:{col:10724259,intensity:.5},ambient:{col:7237230,intensity:.7},fresnelFactor:1,radiance:2.5},fog:{colA:7634049,colB:4079681,colC:8224125,near:0,far:1,hazeHeight:-100,hazeIntensity:.73},water:{base:2433571,body:7896189,highlight:8424078,underwater:5730446},clouds:{hasClouds:!0,highlight:7039851,lowlight:16777215,shelfHeight0:1800,shelfHeight1:2200,skyScale0:4,skyScale1:37.5,mode:0},snow:{density:.5,col:7895160,speed:1.8},friction:{...kt},audio:{...Pt}}},night:{clear:{lights:{headlights:{on:!0,intensity:70},sun:{col:16777215,intensity:.04},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1779767,colB:264208,colC:1779767,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2239285,highlight:2699064,underwater:1776669},clouds:{hasClouds:!1,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:500,skyScale0:88,skyScale1:92,mode:0},stars:{density:2,horizonOffset:0,horizonScale:2,horizonOpacity:0},friction:{...kt},audio:{...Pt}},overcast:{lights:{headlights:{on:!0,intensity:70},sun:{col:14083839,intensity:.06},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1907739,colB:6052956,colC:1907739,near:-.2,far:1,hazeHeight:-60,hazeIntensity:.5},water:{base:0,body:2368547,highlight:2565670,underwater:1907739},clouds:{hasClouds:!0,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:10,skyScale1:36.5,mode:0},snow:{density:1,col:4210752,speed:2},friction:{...kt},audio:{...Pt}}}},_i=[3.2,1.8,3.2,4],mr=["spring","summer","autumn","winter"],xA=["morning","day","evening","night"],SA=["clear","overcast"],mi={styleMeta:{presets:["todo"],season:{key:"season",readable:"SEASON",type:E.Selection,default:1,options:[{key:"spring",readable:"Spring",icon:"/img/ico_scene_spring.svg"},{key:"summer",readable:"Summer",icon:"/img/ico_scene_summer.svg"},{key:"autumn",readable:"Autumn",icon:"/img/ico_scene_autumn.svg"},{key:"winter",readable:"Winter",icon:"/img/ico_scene_winter.svg"}]},time:{key:"time",readable:"TIME",type:E.Selection,default:1,options:[{key:"morning",readable:"Morning",icon:"/img/ico_time_morning.svg"},{key:"day",readable:"Day",icon:"/img/ico_time_day.svg"},{key:"evening",readable:"Evening",icon:"/img/ico_time_evening.svg"},{key:"night",readable:"Night",icon:"/img/ico_time_night.svg"}]},weather:{key:"weather",readable:"WEATHER",type:E.Selection,default:0,options:[{key:"clear",readable:"Clear",icon:"/img/ico_weather_clear.svg"},{key:"overcast",readable:"Overcast",icon:"/img/ico_weather_overcast.svg"}]}},style:{spring:pg,summer:gg,autumn:_g,winter:tu},roadStyle:[{midline:{isStraight:!0,smoothWindow:9,maxGrad:.2,genRadius:100,genMinRadius:100,minStartElev:10,maxStartElev:1e3,curvatureHeightFactor:50,minFineSegs:4,solidLineThreshold:.1,solidLineCrestThreshold:-.02,markingsMargin:12},heightmap:{scale:80,offset:90,layerResolutions:[3,21,17,31],squared:!0,depthHeightFactor:.7,temper:!0,temperBase:50,temperBelow:400,temperMin:0,spiralise:!1,tileScaleRandom:.3},treemap:{scale:3,offset:1.7,layerResolutions:[21,9,31],squared:!0,depthHeightFactor:1.2,temper:!1,tileScaleRandom:.3},road:{width:_i[Ci.NARROW]}},{midline:{isStraight:!1,smoothWindow:9,maxGrad:.16,feelDist:30,smoothFactor:.5,maxTurnDelta:.1,minFineSegs:3,solidLineThreshold:.08,solidLineCrestThreshold:-.3,markingsMargin:8},heightmap:{scale:110,offset:110,layerResolutions:[3,9,17],squared:!0,depthHeightFactor:.8,temper:!0,temperBase:50,temperBelow:400,temperMin:.2,tileScaleRandom:.35},treemap:{scale:.6,offset:2.2,layerResolutions:[3,13,29],squared:!1,depthHeightFactor:2.2,temper:!1,tileScaleRandom:.35},road:{width:_i[Ci.WIDE]}},{midline:{isStraight:!1,smoothWindow:7,maxGrad:.14,feelDist:10,smoothFactor:.7,maxTurnDelta:.25,minFineSegs:2,solidLineThreshold:.08,solidLineCrestThreshold:-.5,markingsMargin:6},heightmap:{scale:15,offset:120,layerResolutions:[19,29,39,3,5],squared:!0,depthHeightFactor:2,temper:!0,temperBase:50,temperBelow:800,temperMin:.25,tileScaleRandom:.5,scale:75,offset:105,layerResolutions:[3,11,5,27],squared:!0,depthHeightFactor:1,temper:!0,temperBase:50,temperBelow:250,temperMin:.7,tileScaleRandom:.5},treemap:{scale:.5,offset:3,layerResolutions:[19,29,39,3,5,4,23,9,39],squared:!0,depthHeightFactor:1.5,temper:!1,tileScaleRandom:1,scale:.5,offset:2.6,layerResolutions:[3,11,5,17,29],squared:!0,depthHeightFactor:2,temper:!1,tileScaleRandom:.5},road:{width:_i[Ci.REGULAR]}},{midline:{isStraight:!1,smoothWindow:7,maxGrad:.12,roadSink:.4,smoothFactor:.75,maxTurnDelta:.2,solidLineThreshold:.18,solidLineCrestThreshold:-.5,markingsMargin:5},heightmap:{scale:60,offset:100,layerResolutions:[3,9,13,27,31],squared:!0,depthHeightFactor:1.25,temper:!0,temperBase:50,temperBelow:500,temperMin:.5,tileScaleRandom:.25},treemap:{scale:.75,offset:2.75,layerResolutions:[3,9,11,29],squared:!1,depthHeightFactor:1.8,temper:!1,tileScaleRandom:.25},road:{width:_i[Ci.NARROW]}},{midline:{isStraight:!0,smoothWindow:7,maxGrad:.15,roadSink:.4,smoothFactor:.9,maxTurnDelta:.4,maxStartElev:1e3},heightmap:{scale:0,offset:150,layerResolutions:[2,3,5],squared:!0,depthHeightFactor:1.1,temper:!0,temperBase:50,temperBelow:250,temperMin:.75,tileScaleRandom:.25},treemap:{scale:0,offset:2.75,layerResolutions:[2,7,17,29],squared:!1,depthHeightFactor:1.8,temper:!1,tileScaleRandom:.25},road:{width:20}}],treemap:{},graphics:{viewDistance:[{tileSize:240,roadNodes:20,lod0Horizon:50,lod1Horizon:13,imposterDissolveStart:32,objectDespawnHorizon:5,bridgeLookahead:50,cloudAltitude:300,fieldMapScale:700,midlineIndexMargin:140,midlineFineHorizon:200,maxWallLength:20,heightmapMaxCached:12,imposterInstanceSize:400,treeInstanceSize:400},{tileSize:480,roadNodes:25,lod0Horizon:80,lod1Horizon:16,imposterDissolveStart:48,objectDespawnHorizon:10,bridgeLookahead:90,cloudAltitude:300,fieldMapScale:800,midlineIndexMargin:160,midlineFineHorizon:300,maxWallLength:25,heightmapMaxCached:16,imposterInstanceSize:1600,treeInstanceSize:450},{tileSize:840,roadNodes:30,lod0Horizon:100,lod1Horizon:19,imposterDissolveStart:64,objectDespawnHorizon:15,bridgeLookahead:160,cloudAltitude:400,fieldMapScale:1e3,midlineIndexMargin:180,midlineFineHorizon:400,maxWallLength:30,heightmapMaxCached:20,imposterInstanceSize:4e3,treeInstanceSize:475},{tileSize:1500,roadNodes:35,lod0Horizon:120,lod1Horizon:22,imposterDissolveStart:96,objectDespawnHorizon:15,bridgeLookahead:200,cloudAltitude:500,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:500,maxWallLength:30,heightmapMaxCached:28,imposterInstanceSize:7500,treeInstanceSize:500},{tileSize:2e3,roadNodes:40,lod0Horizon:140,lod1Horizon:25,imposterDissolveStart:128,objectDespawnHorizon:15,bridgeLookahead:300,cloudAltitude:600,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:600,maxWallLength:30,heightmapMaxCached:40,imposterInstanceSize:16e3,treeInstanceSize:525}],detail:[{shadowRes:256,cellRes:10,sea:{res:.2,depth:!1,waves:!1},trees:{has3D:!1,typeCount:2},bridges:{genArches:!1,segments:4},grass:{margin:0,density:0},fields:{render:!1,treeDensity:0,col:!1,boundary:!1}},{shadowRes:512,cellRes:16,sea:{res:.3,depth:!1,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:4},grass:{margin:16,density:.5},fields:{render:!0,treeDensity:.7,col:!1,boundary:!1}},{shadowRes:1024,cellRes:20,sea:{res:.4,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:20,density:.65},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:20,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:24,density:.75},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:20,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:28,density:.85},fields:{render:!0,treeDensity:1,col:!0,boundary:!0}}]}},iu=`
#ifdef USE_FOG

	varying float vFogDepth;
    varying vec3 vFogPos;
	varying float vFogBlend;
	varying float vHaze;

    #ifdef FOG_EXP2
		uniform float fogDensity;
    #endif

	uniform float fogNear;
	uniform float fogFar;

    uniform float hazeHeight;
    uniform float hazeIntensity;

float noise(vec2 p, float freq ){
	float unit = 1024./freq;
	vec2 ij = floor(p/unit);
	vec2 xy = mod(p,unit)/unit;
	//xy = 3.*xy*xy-2.*xy*xy*xy;
	xy = .5*(1.-cos(PI*xy));
	float a = rand((ij+vec2(0.,0.)));
	float b = rand((ij+vec2(1.,0.)));
	float c = rand((ij+vec2(0.,1.)));
	float d = rand((ij+vec2(1.,1.)));
	float x1 = mix(a, b, xy.x);
	float x2 = mix(c, d, xy.x);
	return mix(x1, x2, xy.y);
}

float pNoise(vec2 p, int res){
	float persistance = .5;
	float n = 0.;
	float normK = 0.;
	float f = 4.;
	float amp = 1.;
	int iCount = 0;
	for (int i = 0; i<50; i++){
		n+=amp*noise(p, f);
		f*=2.;
		normK+=amp;
		amp*=persistance;
		if (iCount == res) break;
		iCount++;
	}
	float nf = n/normK;
	return nf*nf*nf*nf;
}


#endif
`,su=`
#ifdef USE_FOG

    vFogPos = (modelMatrix * vec4(position, 1.0)).xyz;
    #ifdef USE_INSTANCING
        vFogPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
    #endif


	//// FOG DEPTH

	// FLAT - can I do this if cheap?
	// float fogDepth = -mvPosition.z;

	// CYLINDRICAL
	// If cylindrical, have to pass in camera position to everything using fog. Do this in a module patch?
	float fogDepth = distance(vFogPos, cameraPosition);

	vHaze = fogDepth / fogFar;// * 0.5;
	// vHaze *= vHaze;
	vHaze *= 1.0 + min(0.0, hazeIntensity);	

	#ifdef FOG_EXP2
		vFogDepth = max(0.0, (fogDepth - fogNear) * (fogFar / (fogFar - fogNear)));
		vFogDepth = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else

		vFogDepth = smoothstep( fogNear, fogFar, fogDepth );
	#endif

	//// NOISE VARIATION
	float fogHeight = vFogPos.y;
	#ifdef FOG_EXP2
	    if(fogDepth < 1000.0) {
			fogHeight += pNoise(vFogPos.xz*2.0, 3) * hazeHeight * (fogDepth / 1000.0);
		} else {
			fogHeight += pNoise(vFogPos.xz*2.0, 3) * hazeHeight;
		}
	#endif

    //// HAZE
    if(hazeHeight > 0.0 && fogHeight < hazeHeight) {

		float haze = (1.0 - (fogHeight / hazeHeight)) * hazeIntensity;

		if(fogDepth < 50.0) {
			float fff = 1.0 - (fogDepth / 50.0);
			haze *= 1.0 - fff*fff;
		}

		if(haze < 0.0) {
			haze = 0.0;
		}

		vFogDepth += haze;

    } else if(hazeHeight < 0.0 && fogHeight > -hazeHeight) {

		float haze = min(1.0, (fogHeight / -hazeHeight) - 1.0) * hazeIntensity;

		if(fogDepth < 50.0) {
			float fff = 1.0 - (fogDepth / 50.0);
			haze *= 1.0 - fff*fff;
		}

		vFogDepth += haze;
    }


	float fogAvg = (fogFar + fogNear) / 2.0;
	vFogBlend = 1.0;
	if(fogAvg < 500.0) {
		if(fogAvg <  50.0) {
			vFogBlend = 0.0;
		} else {
			vFogBlend = (fogAvg-50.0) / 450.0;
		}
	}

	if(hazeHeight < 0.0) {
	    vFogBlend *= (1.0 - hazeIntensity);
	}

	//// LIMIT
	vFogDepth = min(1.0, vFogDepth);

#endif
`,au=`
#ifdef USE_FOG

	uniform vec3 fogColorA;
    uniform vec3 fogColorB;
	uniform vec3 fogColorC;
	varying float vFogDepth;
    varying vec3 vFogPos;
	varying float vFogBlend;
	varying float vHaze;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else


	#endif

	uniform float fogNear;
	uniform float fogFar;

    uniform float hazeHeight;
    uniform float hazeIntensity;

#endif
`,ou=`
#ifdef USE_FOG

	// Cylindrical
	//float fogDepth = distance(vFogPos, cameraPosition);

	float fogBlend = max(((vFogPos.y - cameraPosition.y) * 2.0) / distance(vFogPos, cameraPosition), 0.0) * vFogBlend;

	//// DESATURATION EFFECT
	gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColorC, vHaze);

	gl_FragColor.rgb = mix( gl_FragColor.rgb, mix(fogColorA, fogColorB, fogBlend), vFogDepth );

#endif
`,ru=`
    uniform float time;
    uniform vec3 camPos;
    uniform float shelfHeight0;
    uniform float shelfHeight1;
    uniform float skyScale0;
    uniform float skyScale1;
    uniform float altitude;

    varying vec4 wPos;
    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;

    varying float dist;

`,nu=`
    wPos = modelMatrix * vec4( position, 1.0 );

    // Distance (height) from camera to virtual plane
    // Big hmm here, these values may intersect with road on rare occasions, could min them
    float h0 = shelfHeight0 - camPos.y;

    // Distance from camera to image plane
    float h1 = shelfHeight1 - camPos.y;

    vUv = uv;

    // First shelf...
    vUUv.x = wPos.x + time;
    vUUv.y = wPos.z + time;
    vUUv /= skyScale0 * altitude;

    float scale1 = skyScale1 * altitude;
    float lowerScale = scale1 * h1 / h0;
    float motionScale = (h1 - h0) / h0;

    // Second shelf
    vUUUv.x = ((wPos.x + camPos.x * motionScale ) / lowerScale) + time / scale1;
    vUUUv.y = ((wPos.z + camPos.z * motionScale ) / lowerScale) + time / scale1;


    // Offset copy of second shelf used for shading?
    vUUUUv.x = vUUUv.x + 0.001;
    vUUUUv.y = vUUUv.y - 0.001;


    //// EXPERIMENT
    // float h2 = ((shelfHeight0 + shelfHeight1) / 2.0) - camPos.y;
    // float scale2 = ((skyScale0 + skyScale1) / 2.0) * altitude;
    // float midScale = scale2 * h2 / h0;
    // float motionScale2 = (h2 - h0) / h0;
    // vUUUUv.x = ((wPos.x + camPos.x * motionScale2 ) / midScale);// + (time) / scale1;
    // vUUUUv.y = ((wPos.z + camPos.z * motionScale2 ) / midScale);// + (time) / scale1;


    // Mid-point experimentation
    // vUUUUv.x = (vUUUv.x + vUUv.x) / 2.0;
    // vUUUUv.y = (vUUUv.y + vUUv.y) / 2.0);


    // Use UVs to  look up  distance from camera...
    float vX = (uv.x - 0.5) * 2.0;
    float vY = (uv.y - 0.5) * 2.0;
    dist = max(0.0, 1.0 - sqrt((vX * vX) + (vY * vY)));
`,lu=`

    transformed.z += (1.0 - dist)*(1.0 - dist) * altitude;

    vec4 mvPosition = vec4( transformed, 1.0 );

    #ifdef USE_BATCHING

        mvPosition = batchingMatrix * mvPosition;

    #endif

    #ifdef USE_INSTANCING

        mvPosition = instanceMatrix * mvPosition;

    #endif

    mvPosition = modelViewMatrix * mvPosition;

    gl_Position = projectionMatrix * mvPosition;
`,hu=`
#ifdef USE_FOG

	varying float vFogDepth;
    varying float vFogBlend;
    varying vec3 vFogPos;
    uniform float fogFar;
    varying float vHaze;

    #ifdef FOG_EXP2
        uniform float fogDensity;
    #endif

    uniform float fogNear;
    uniform float hazeHeight;
    uniform float hazeIntensity;

#endif
`,du=`
    #ifdef USE_FOG

        vFogDepth = fogFar;

        vFogPos = (modelMatrix * vec4(transformed, 1.0)).xyz;

        vHaze = 0.0;

        vFogBlend = 1.0;
        float fogAvg = (fogFar + fogNear) / 2.0;
        if(fogAvg < 500.0) {
            if(fogAvg <  50.0) {
                vFogBlend = 0.0;
            } else {
                vFogBlend = (fogAvg-50.0) / 450.0;
            }
        }
        if(hazeHeight < 0.0) {
            vFogBlend *= (1.0 - hazeIntensity);
        }

        #ifdef FOG_EXP2
            vFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));
        #endif

        #ifdef FOG_EXP2

            vFogDepth = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

        #else

            vFogDepth = smoothstep( fogNear, fogFar, vFogDepth );

        #endif

    #endif
`,cu=`
    uniform vec3 highlight;
    uniform vec3 lowlight;
    uniform float mode;

    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;
    varying float dist;

    highp float random(vec2 coords) {
        return (fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.2) - 0.1;
    }

    float remap(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }
`,gu=`

    vec4 c1 = texture2D(map, vUUv);
    vec4 c2 = texture2D(map, vUUUv);

    vec4 cloudCol = c1;

    //////////////////////////// BLEND MODES ///////////////////////////

    //// MAX

    // vec4 cloudCol = max(c1, c2);

    //// MIN

    // vec4 cloudCol = min(c1, c2);

    //// MULTIPLY

    // vec4 cloudCol = c1 * c2;

    /// ADD

    // vec4 cloudCol = c1 + c2;

    //// AVERAGE

    // vec4 cloudCol = (c1 + c2) / 2.0;

    //// SCREEN

    // vec4 ic1 = vec4(1.0) - c1;
    // vec4 ic2 = vec4(1.0) - c2;
    // cloudCol = vec4(1.0) - (ic1 * ic2);

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * (1.0-fogDepth));

    ///////////////////// ITERATIONS /////////////////////////

    if(mode == 0.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        // Remapping makes them a little sharper
        // c1.a = remap(c1.a, 0.0, 0.9, 0.0, 1.0);
        // c1.a = min(1.0, max(c1.a, 0.0));
        // c1.a = sqrt(c1.a);
        // c2.a = remap(c2.a, 0.0, 0.9, 0.0, 1.0);
        // c2.a = min(1.0, max(c2.a, 0.0));
        // c2.a = sqrt(c2.a);

        // Testing density

        // Density works like this kind of - might need to transition lowlight into highlighy as density lowers though
        // Also should use this to affect the blend between fog/cloud colour. At -1 density, should be full cloud.
        // float density = -0.5;

        // if(density > 0.0) {
        //     c1.a = remap(c1.a, density, 1.0, 0.0, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, density, 1.0, 0.0, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, density, 1.0, 0.0, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // } else {
        //     c1.a = remap(c1.a, 0.0, 1.0, -density, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, 0.0, 1.0, -density, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, 0.0, 1.0, -density, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // }


        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        float ic = 1.0 - ic1 * ic2;

        // ic *= c1.a * c3.a;// * c2.a;
        ic *= c3.a;

        cloudCol = vec4(lowlight, ic);

        cloudCol.rgb = mix(cloudCol.rgb, highlight, c3.a * ic);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 1.0)  {

        vec4 c3 = texture2D(map, vUUUUv);

        cloudCol.rgb = lowlight;

        // Screen alpha
        cloudCol.a = 1.0 - (1.0 - c1.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight,  c1.a * cloudCol.a * c3.a);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);

    } else if(mode == 2.0) {
        vec4 c3 = texture2D(map, vUUUUv);

        // Two-tone

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.25, 1.0);
        c3.a = remap(c3.a, 0.0, 1.0, 0.0, 0.5);

        c2.a *= c1.a;
        c3.a *= c1.a;

        cloudCol.rgb = lowlight;

        // Screen blend the initial alpha
        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        cloudCol.a = 1.0 - (ic1 * ic2);

        cloudCol.rgb = mix(cloudCol.rgb, highlight*1.5, c3.a * (dist * 2.0)); // More pink above


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 3.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        float c23 = 1.0 - (1.0 - c3.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight, min(c2.a, c3.a));

        cloudCol.a = max(c2.a, c1.a * c3.a);


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);
    } else if(mode == 4.0) {


    }



    //// FAR HIGHLIGHT THING SUNSET

    /*

        vec4 highlight = vec4(1.0,0.7,0.4,1.0);

        c1 *= highlight;
        c2 *= highlight;

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.0, 1.0);

        vec4 cloudCol = (c1 + c2) / 2.0;

        if(cloudCol.a > 0.25) {
            cloudCol = mix(cloudCol, highlight*8.0, (cloudCol.a - 0.25) * (0.5 - (dist*dist)));
            cloudCol.a = min(1.0, cloudCol.a);
        }

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist);

    */

    //// CIRRUS/MIN

    // c1 = remap(c1, 0.0, 1.0, 0.0, 1.0);
    // c2 = remap(c2, 0.0, 1.0, 0.0, 1.0);

    // cloudCol = max(vec4(c1), vec4(c2));
    // cloudCol /= 2;

    // cloudCol2.a = cloudCol.a;
    // if(cloudCol.a > 0.75) {
    //     // cloudCol = mix(cloudCol, cloudCol2, (cloudCol.a - 0.75) * 4.0);
    // }

    // vec4 cloudCol = texture2D( map, vUUv ) * texture2D(map, vUUUv); // MULTIPLY
    // vec4 cloudCol = (texture2D(map, vUUv) + texture2D( map, vUUUv )) / 2.0; // AVERAGE

    // Apply colour if we have it?

    /////////////////////// FINAL COLOUR APPLICATION //////////////////////////////////

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb * vec3(1.0,0.7,0.4) * 1.0 * cloudCol.a, cloudCol.a * dist);


    // diffuseColor = vec4(0.5,0.6,0.8,);

`,uu=`

attribute float roadProximity;
attribute float treeMask;
attribute float overlap;
attribute float fieldCol;

varying float height;
varying float steepness;
varying float roadProx;
varying float hasRoadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vField;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;

float wuvSize = 500.0;

uniform sampler2D displacementMap;
uniform sampler2D fadeFine;
uniform float sinkDist;
uniform float vehicleIndex;
uniform float shadowFactor;
uniform int seasonIndex;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

float distSquared( vec3 A, vec3 B ) {
    vec3 C = A - B;
    return dot( C, C );
}

vec3 upvec = vec3(0.0,1.0,0.0);

`,fu=`

vec4 wPos = modelMatrix * vec4( position, 1.0 );

vFresnelPos = wPos.xyz;
vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

height = wPos.y;

// Set UVs from world pos
vUv.x = wPos.x / 10.0;
vUv.y = wPos.z / 10.0;

vUUv.x = vUv.x / 10.0;
vUUv.y = vUv.y / 10.0;

// 0 is perfectly flat, 1 is 90 degrees
steepness = 0.98 - dot(normal, upvec);
steepness = clamp(steepness * 1.4, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;

// Reduce  vWWv for more utility in the fragment shader
vWWv *= 2.0;

//// HEATHER

vHeather = smoothstep(0.4, 1.0, ((height + fade1 * 350.0) - 60.0) / 500.0);

vHeather *= screen(fade1, fade0);

vHeather = smoothstep(0.3, 0.6, vHeather);


//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (30.0 + fade1 * 40.0))/150.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
if(roadProximity > 0.0 && roadProximity < 0.5 + fade0) {

  vHeather *= roadProximity / (0.5 + fade0);

  if(seasonIndex < 3) {
    vLightGrass *= roadProximity / (0.5 + fade0);
  }
}  

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

vField = fieldCol;

//// ROAD PROX

roadProx = roadProximity;
// Not safe but sets a flag for the frag shader to exit road-relative shading
hasRoadProx = step(0.00001, abs(roadProximity));

// Prevent rocks forming below the road, e.g. at bridges.
float underRoadFactor = 1.0 - step(0.000001, -roadProx);
steepness *= underRoadFactor;
vHeather *= underRoadFactor;

// if(roadProx < 0.0) {
//   steepness = 0.0;
//   vHeather = 0.0;
// }


//// SHADOW

vShadow = min(1.0, treeMask * min(1.0, max(0.0, height / 4.0)));


//// TREE MASK

vTreeMask = vShadow;

if(vTreeMask > 0.1) {
  vTreeMask = max(0.2, vTreeMask);
} else {
  vTreeMask = 0.0;
}

// Road-dependent factors
if(hasRoadProx > 0.5) {

  vTreeMask *= clamp(roadProx / 2.0, 0.0, 1.0);

  float intensity = clamp((16.0 - roadProx) / 6.0, 0.0, 1.0);

  intensity *= 0.8; // Scale it a bit

  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vUUv ).x - 0.4) * min(1.0, steepness * 3.0) ) * intensity;

}

//// MV POSITION

vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

//// OVERLAP SINK

// TODO Use actual distance probably?

//// Curvature
// float ddist = -mvPosition.z;
// float ssink = ddist / 1000.0;
// ssink *= ssink;
// transformed.y -= ssink * 50.0;
// // Recalc mvPosition
//   mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

if(overlap > 0.0) {

    float overlapDist = overlap - vehicleIndex;

    if(overlapDist > 0.0) {

      if(overlapDist < sinkDist) {

          float halfSinkDist = sinkDist * 0.75;

          if(overlapDist < halfSinkDist) {
            transformed.y -= 20.0;
          } else {
            transformed.y -= 20.0 * (sinkDist - overlapDist) / (sinkDist - halfSinkDist);
          }
      }

    } else {

      float fSinkDist = -sinkDist/2.0;

      if(overlapDist > fSinkDist) {

        float halfSinkDist = fSinkDist / 2.0;

        if(overlapDist > halfSinkDist) {
          transformed.y -= 20.0;
        } else {
          transformed.y -= 20.0 * (fSinkDist - overlapDist) / halfSinkDist;
        }

      }

    }

    // Recalc mvPosition
    mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
}

gl_Position = projectionMatrix * mvPosition;

vCamDepth = -mvPosition.z;

// vLightGrass = 0.0;
// vDarkGrass = 0.0;

vShadow *= shadowFactor;

`,pu=`

varying float height;
varying float steepness;
varying float roadProx;
varying float hasRoadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vField;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D heatherMap;

uniform sampler2D detailNearMap;
uniform sampler2D detailFarMap;
uniform sampler2D grassVariationMap;

uniform sampler2D fadeFine;

uniform vec3 roadCol;

uniform vec3 grassColA;
uniform vec3 grassColB;
uniform vec3 peakColA;
uniform vec3 peakColB;

uniform vec3 fieldDiscolouration;

uniform float radiance;

vec4 rockTex;

vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {

  // Perform the blending

  float ma = max(tx1.a + w1, tx2.a + w2) - depth;
  float b1 = max(tx1.a + w1 - ma, 0.0);
  float b2 = max(tx2.a + w2 - ma, 0.0);

  return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);
}

// the ws are the height of that texture; biggest w wins
// The depth is the transition between them? maybe?

// The height goes in the alpha channel of the textures 1 and 2
// the w is the weight? the weight should be the transition?
// depth is.. I don't know, a weird offset? No idea tbh

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

`,Au=`

float fade0 = texture2D(fadeFine, vUv).r;
float fade1 = texture2D(fadeFine, vUUv).r;
float fade2 = texture2D(fadeFine, vWv).r;

//// PREP MAP

vec4 texelColor = texture2D( grassMap, vUv );
//// DETAIL TEXTURING

float blendVal  = (1.0 - texture2D( detailFarMap, vWWv ).r);
float blendValB = (1.0 - texture2D( detailFarMap, vWv ).r);
float blendValC = (1.0 - texture2D( detailFarMap, vUUv).r);


blendValB = screen(blendValC, blendValB);
blendValB *= min(1.0, blendVal * 10.0);

// Reduce on winter?
if(seasonIndex == 3) {
  blendValB *= 0.7;
}

// Elevation alteration to large-scale blend
blendVal *= (0.6 + 0.4 * vLightGrass);

// Enhance the distant intensity relative to medium/close range
blendVal *= 2.0;

// Blend from large-scale to medium-scale
float depthLerpFar = saturate(vCamDepth / 800.0);
blendVal = blendVal * depthLerpFar + (1.0 - depthLerpFar) * blendValB;

// Large-scale texture toned down for fields
float fieldFactor = ceil(abs(vField));
// blendVal *= 1.0 - fieldFactor * 0.25;

// Depth for far
blendVal *= saturate(0.4 + 0.6 * (vCamDepth / 300.0));

// Dotty noisy...
blendVal += (1.0 - texture2D( detailNearMap, vUUv ).r ) * (0.7 + vLightGrass * 0.3);

//// GRASS COLOUR MIX

// Blend them into two colours

float variationVal = texture2D(grassVariationMap, vWWv).r - 0.5;
float closeVariation = ((1.0 - texture2D(grassVariationMap, vWv).r) - 0.5);

float grassBlend = (screen(fade1, fade0) + vDarkGrass) / 2.0;

// Square for more effect?
grassBlend = grassBlend * grassBlend;

grassBlend = saturate(grassBlend + variationVal + closeVariation);

float lightGrassFactor = saturate(vLightGrass + variationVal - closeVariation);

// Colour the grass tips versus base
lightGrassFactor = saturate(lightGrassFactor * 2.0 * texelColor.r);

vec3 grassCol = mix(
  mix(grassColA, grassColB, grassBlend),
  mix(peakColA, peakColB, grassBlend),
  lightGrassFactor
);

//// APPLY GRASS COLOUR

texelColor.rgb *= grassCol;

//// FIELDS

if(vField != 0.0) {

  // Rough lines using noise
  // Note that we step on vField for simplicity - should consider a separate varying for field mow dir though
  float fadeField = texture2D(
    fadeFine,
    vec2(
      vWv.x * 2.0 * step(0.001, vField),
      vWv.y * 2.0 * (1.0 - step(0.001, vField))
    )
  ).r;

  texelColor.rgb += vField * fieldDiscolouration * fadeField;

}

//// HEATHER


if(vHeather > 0.0) {

  vec4 heatherCol = texture2D(heatherMap, vUv);

  float depthLerp = 0.25 + 0.75 * min(1.0, vCamDepth / 400.0);
  heatherCol = mix(heatherCol, texture2D( heatherMap, vWv ), depthLerp);
  
  heatherCol = mix(texelColor, heatherCol, min(1.0, vHeather));
  heatherCol.a = heatherCol.r;
  texelColor.a = texelColor.g;
  texelColor = terrainBlend(
      texelColor,
      1.0 - vHeather,
      heatherCol,
      vHeather,
      0.1
  );
  
}
  
// Apply detail texture
texelColor *= 1.0 - blendVal;


//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv);
forestCol.a = forestCol.r * 2.0 * fade2;

float fTreeMask = min(1.0, vTreeMask);

if(fTreeMask > 0.0) {

  texelColor = terrainBlend(
    texelColor,
    1.0-fTreeMask,
    forestCol,
    fTreeMask,
    0.1 + (1.0 - fTreeMask) * fade0 * 0.9
  );

  texelColor.a = 1.0;
}


//// SAND BLEND

float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

if(vHeight < 4.0 && seasonIndex < 3) {

  float dark = 1.0;

  if(vHeight < 0.0) {
    texelColor = texture2D(sandMap, vUv) * 0.75;
  } else {

    if(vHeight < 2.0) {

      // Darken toward water
      dark = min(dark, 1.0 - (2.0 - vHeight) / 4.0);

    } else if(vHeight > 2.5) {

      // Darken into the grass
      dark = 1.0 - (vHeight-2.5) / 2.0;

    }

    // Lerp from grass to thingy
    float lerp = max(0.0, (vHeight - 1.0) / 3.0);

    vec4 sandCol = texture2D(sandMap, vUv);

    texelColor.a = texelColor.r;

    sandCol.a = sandCol.r;

    // Apply shading based on water/grass proximity
    sandCol.rgb *= dark;

    texelColor = terrainBlend(
      texelColor,
      lerp,
      sandCol,
      1.0 - lerp,
      0.05
    );

    // texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);

    // texelColor = terrainBlend(
    //   texture2D(sandMap, vUv) * dark,
    //   dark,
    //   texelColor,
    //   texelColor.g,
    //   height / 4.0
    // );
  }
}

//// ROADSIDE GRAVEL

if(seasonIndex < 3 && hasRoadProx > 0.5) {

  if(roadProx < -0.2 && (vCamDepth > 100.0 || seasonIndex == 1)) {

    texelColor.rgb = roadCol;

  } else if(roadProx + fade2 * 0.1 < 0.5 * fade0) {

    float rp = saturate(1.0 - (roadProx + fade2 * 0.1) / (0.5 * fade0));

    // Mix into forest colour if we're under trees
    if(seasonIndex != 1 && vShadow > 0.0) {

      float gravelBrightness = 1.3;
      if(seasonIndex == 2) {
        gravelBrightness = 1.8;
      }

      texelColor = mix(

        mix(
          texture2D(
            gravelMap,
            vUv*2.0
          ),
          forestCol * gravelBrightness,
          min(1.0, vShadow * 2.0)
        ),

        texelColor,

        smoothstep(
          0.0, 
          rp,
          texelColor.g / rp
        )
      );

    } else {

      texelColor = mix(
        texture2D(gravelMap, vUv*2.0) * (0.75 + rp * rp * 0.75),
        texelColor,
        smoothstep(
          0.0, 
          rp,
          texelColor.g / rp
        )
      );      
    }

  }

}

//// STEEPNESS CLIFF

// Note we do a branch here since cliffs take up such a small portion of the space; worthwhile
if(steepness > 0.1) {

  float steepBlend = 1.0 - steepness;
  rockTex = mix(
    texture2D(rockMap, vUv),
    texture2D(rockMap, vUUv),
    saturate((vCamDepth - 20.0) / 130.0) // Blend by proximity
  );
  
  // Gradual distance-based blend
  rockTex.a = texture2D(rockMapBump, vUv).r * texture2D(rockMapBump, vUUv).r;
  
  // Blend according to steepness etc.
  texelColor.a = 0.2 + fade2 * 0.2;
  
  // Lower steep blend is more snow?
  // float steepBlend = 1.0 - steepness; // Reduce steepess factor to reduce rockiness
  // Reduce the depth value to increase sharp transition from snow to rock
  texelColor = terrainBlend(texelColor, steepBlend, rockTex, (1.0 - steepBlend), 0.08);
  texelColor.a = 1.0;
}

//// PREVENT GLITTERING PIXELS

texelColor.r = saturate(texelColor.r);
texelColor.g = saturate(texelColor.g);
texelColor.b = saturate(texelColor.b);

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?

totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor = vec4(vHeather, vCurvature, 0.0, 1.0);
// diffuseColor.rgb = vNormal.rgb;
// diffuseColor = vec4(vec3(vLightGrass), 1.0);

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort


`,mu=`

    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );

    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0 * (1.0 - blendVal * 0.5);
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= fresnelIntensity;
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`,vu=`

    #ifdef WATER_DEPTH

        attribute float depth;
        // attribute vec3 shoreness;

    #endif

    #ifdef WATER_WAVES

        uniform float time;

        varying vec2 vUw;
        varying vec2 vUUw;
        varying vec2 vUUUw;

    #endif

    varying vec4 wPos;

    #ifdef WATER_DEPTH

        varying float vDepth;
        // varying vec3 vShoreness;

    #endif

`,wu=`

    wPos = modelMatrix * vec4( position, 1.0 );

    #ifdef WATER_WAVES

    // 50 and 200 for normal map

        vUw.x = (time + wPos.x) / 200.0;
        vUw.y = (time + wPos.z) / 200.0;

        vUUw.x = (wPos.x - time) / 800.0;
        vUUw.y = (wPos.z - time) / 800.0;

        vUUUw.x = (wPos.x - time) / 300.0;
        vUUUw.y = (wPos.z - time) / 300.0;

    #endif

    #ifdef WATER_DEPTH
        vDepth = depth;
        // vShoreness = shoreness;
    #endif

`,xu=`

    uniform vec3 camPos;
    uniform vec3 body;
    uniform vec3 highlight;

    #ifdef WATER_WAVES
        uniform sampler2D waves;

        varying vec2 vUw;
        varying vec2 vUUw;
        varying vec2 vUUUw;

    #endif

    varying vec4 wPos;

    #ifdef WATER_DEPTH
        varying float vDepth;
        // varying vec3 vShoreness;
    #endif

    vec3 upvec = vec3(0.0,1.0,0.0);

`,Su=`

    #ifdef WATER_DEPTH
        // Abandon water rendering if it's well under ground
        if(vDepth > 10.0) {
            discard;
        }

        float vDepthFactor;
    #endif

    vec3 camNorm = normalize(vec3(
        camPos.x - wPos.x,
        camPos.y - wPos.y,
        camPos.z - wPos.z
    ));

    float seaDot = dot(camNorm, upvec);

    #if defined(WATER_WAVES) || defined(WATER_DEPTH)

        // Add lightness
        float wave1 = texture2D(waves, vUw).r + 0.1;
        float wave2 = texture2D(waves, vUUw).r + 0.1;

        // Add darkness?
        float wave4 = (texture2D(waves, vUUUw).r + 0.1);
        float wave5 = (texture2D(waves, vUUw - vUw).r + 0.1);

        //// WAVE RIPPLES

        float darkReflect = 0.0;

        #ifdef WATER_DEPTH

            // Disable specular highlights close to shore

            // if(vDepth > -2.0) {
            //     if(vDepth > -1.0) {
            //         darkReflect = 1.0;
            //     } else {
            //         darkReflect = (2.0 + vDepth);
            //     }
            // }

        #endif

        // Extra dark ripples by sea edge
        seaDot += wave4 * wave5 * (0.5 + darkReflect / 4.0);
        // No ripples by sea edge
        seaDot -= wave1 * wave2 * (1.0 - darkReflect);

        //// EDGE HIGHLIGHT

        #ifdef WATER_DEPTH

            // Make it darker closer to the shore for some reason
            // if(vDepth > -5.0) {
            //     vDepthFactor = min(5.0, (5.0 + vDepth)) * 0.1 * (1.0 - wave2);
            //     seaDot += vDepthFactor;
            // }

        #endif

        //// CLAMP SEADOT

        seaDot = min(max(0.0, seaDot), 1.0);

        //// BLEND SKY WITH DARK BY SEADOT

        float seaDotMix = 1.0 - seaDot;
        diffuseColor.rgb = mix(diffuseColor.rgb, body, seaDotMix * seaDotMix);

        //// DARKEN DEPTHS

        #ifdef WATER_DEPTH

        if(vDepth < 0.0) {
            diffuseColor *= 1.0 - min(1.0, vDepth / -15.0) * 0.3;
        }

        #endif

        //// HIGHLIGHTS ON SHALLOW ANGLES

        float sunDotMix = 0.0;

        #ifdef WATER_DEPTH

            // Undo the depth factor so it doesn't mess up the highlights
            if(vDepth > -5.0) {

                seaDot *= 0.7 + 0.3 * (vDepth / -5.0); //0.01;//1.0 - seaDot;//-= 0.1;//(vDepth / -5.0);// * 0.2;

                // seaDot *= max(0.0, (vDepth / -5.0)  * 0.25);
                // seaDot -= vDepthFactor * (1.0 + (max(0.0, (5.0 + vDepth)) / 40.0));
            }



            //// TESTING REFLECTIONS
            /*

            float shoreness = dot(vShoreness, camNorm);// - max(0.0, length(vShoreness) - 1.0);

            if(shoreness < 0.0) {
                diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.15, 0.03), min(0.95, -shoreness * 50.0));
                seaDot += -shoreness;
            }

            */
            ////


        #endif

        if(seaDot < 0.125) {
            sunDotMix = 1.0 - seaDot * 8.0;
        }

        // Mocking up the transition to dark reflection at the horizon
        // if(sunDotMix > 0.8) {
        //     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.11, 0.1), sunDotMix * sunDotMix);
        // } else {
        // }
        diffuseColor.rgb = mix(diffuseColor.rgb, highlight, sunDotMix * sunDotMix);


    #else
        float seaDotMix = 1.0 - seaDot;
        diffuseColor.rgb = mix(diffuseColor.rgb, body, seaDotMix * seaDotMix);
    #endif

    //// FINALISE

    // Transparency stuff

    #if defined(WATER_DEPTH)

    // if(vDepth < -20.0) {
    //     diffuseColor.a = 0.8;
    // } else {
    //     diffuseColor.a = 0.5 + (vDepth / -20.0) * 0.3;
    // }

    #endif

`,bu=`

    attribute float density;

    uniform sampler2D noiseMap;
    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float shadowFactor;
    uniform float discolourationFactor;
    uniform float alphaTest;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;
    varying float vRadianceBlend;
    varying float vLeafBrightness;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,un=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;
`,yu=`
    // Get the direction to the center, in a pill shape to preserve the trunk normals?

    #if defined(USE_INSTANCING)

        // INSTANCED VERSION USED FOR LIVE

        if(vMapUv.y > 0.25) {
            vCenterNormal =  normalMatrix * mat3(modelMatrix * instanceMatrix) * normalize(position - vec3(0.0, min(position.y, 5.0), 0.0));
        } else {
            vCenterNormal = normalMatrix * mat3(instanceMatrix) * normalize(position - vec3(0.0, 7.0, 0.0));
        }

    #else

        // NON-INSTANCE VERSION USED FOR IMPOSTER GENERATION

        if(vMapUv.y > 0.25) {
            vCenterNormal = normalMatrix * normalize(vec3(0.0, 5.0, 0.0) - position);
        } else {
            // Trunk - test against leaf center
        }

    #endif

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);


`,Du=`

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    vShadow = 0.0;
    // What if we say all trees are 10m tall by default? center at 5.0?

    // Fake shadow by testing against direction to center..?
    // Works nicely but not great for directional light and normal light

    // If we want density-based lightness reduction it's here?t
    float densityFactor = density * shadowFactor;
    float distToCenter = distanceSq(position, vec3(0.0, min(position.y, 5.0 + densityFactor), 0.0));

    if(distToCenter < 36.0) {
        if(distToCenter < 8.0) {
            vShadow = 1.0;
        } else {
            // distToCenter = sqrt(distToCenter);
            // vShadow = 1.0 - (distToCenter - 3.0) / 3.0;
            vShadow = 1.0 - (distToCenter - 8.0) / 28.0;
        }
    }
    
    // What do esthis do.. prioritises darkness at lower levels
    vShadow = max(vShadow, 1.0 - saturate(position.y/8.0));


`+yu+`
`+un+`


    // if(uv.y > 0.25) {
    //     vec4 wPos2 = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    //     float angleToCamera = atan(wPos2.x - cameraPosition.x, wPos2.z - cameraPosition.z);
    //     transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));
    // }

    // ANIMATION TESTING
    // vec4 wPos2 = modelMatrix * instanceMatrix * vec4(position, 1.0);
    // float tt = time * 0.01;
    // vec2 blowUV = vec2(wPos2.x / 20.0 + tt, wPos2.z / 80.0 + tt / 4.0);
    // if(uv.y > 0.26) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += sin(blow) * 2.0 * uv.x;//sin(blow) * 0.2;
    //     transformed.y += sin(blow) * 2.0;
    //     transformed.z += cos(blow) * 2.0 * (1.0 - uv.x);//cos(blow) * 0.2;
    // }

    // Need to get mvPosition here
    #include <project_vertex>


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 0.0;
    } else {

        if(-mvPosition.z > dissolveFar) {
            vDissolve = 1.0;
        } else {
            vDissolve = (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // Dynamic alpha test... just testing for now? can't decide if it's worthwhile
    vAlphaTest = alphaTest;
    if(dissolveFar > 200.0) {
        if(-mvPosition.z < dissolveFar) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (dissolveFar + dissolveInterval)));
        }
    } else {
        if(-mvPosition.z < 200.00) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (300.0)));
        }
    }

    vRadianceBlend = 1.0 - saturate((-mvPosition.z - 50.0) / 200.0) * 0.33;

    vLeafBrightness = 1.0 - densityFactor * saturate((10.0 - position.y) / 3.0);

    vShadow *= shadowFactor;



`,Mu=`

    uniform sampler2D noiseMap;
    uniform float radiance;
    uniform bool hasSnow;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;
    varying float vRadianceBlend;
    varying float vLeafBrightness;


`,Lu=`

    if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
        discard;
    }

    float leafEffect = step(diffuseColor.b * 1.5, diffuseColor.g) * vLeafBrightness;

    diffuseColor.rg *= 1.0 - (1.0 - discolouration) * leafEffect;

    totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance * leafEffect * vRadianceBlend;
    diffuseColor.rgb *= vRadianceBlend;

`,Ru=`
    if(diffuseColor.a < vAlphaTest) discard;
`,Cu=`

    // Use the normal to blend with snow colours

    // ONLY DO THIS ON SNOW VIBES
    if(hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        if(dotUp > 0.1) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(min(1.0, 0.5 + dotUp)), min(1.0, (dotUp - 0.1) * 8.0));
        }
    }


`,Tu=`

    if(vType < 0.5) {
        // We have a leaf
        // if(diffuseColor.g > diffuseColor.b * 1.5) { // For some reason it looks better if it's darker than regular tree?
            diffuseColor.rg *= discolouration;
            // Emissive... unclear why this needs to be different to the regular tree emissive. Suspicious. Just a shadowmap diff?
            totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance * vRadianceBlend * vLeafBrightness;
        // }
        diffuseColor.rgb *= vRadianceBlend;
    } else {
        `+ih+`
    }
`,Iu=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

    geometry.normal = normalize((normal));// + vCenterNormal) / 2.0);

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        // if(vShadow > 0.5) {
            directLight.color *= vShadow;
        // }

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

    geometry.normal = normal;

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        if(vMapUv.y > 0.25) {
            directLight.color *= 1.0 - vShadow * 0.5;
        }

        // Normal dot comparison

        //// Even normal (bit weak)
        // directLight.color *= max(0.0, 1.0-((dot(directLight.direction, vCenterNormal) + 1.0) / 2.0));

        //// 1.2x normal (about right?)
        // float dotDirLightFactor = min(1.0, max(0.0, -dot(directLight.direction, vCenterNormal) + 0.2));
        // directLight.color *= min(1.0, dotDirLightFactor + 0.0);


        //// Cross vecs - idea is to mix to tangent by dot factor
        // vec3 cross1 = cross(vCenterNormal, geometry.normal);
        // vec3 cross2 = cross(cross1, vCenterNormal);
        // geometry.normal = mix(geometry.normal, cross2, min(1.0, max(0.0, ddot * -2.0)));



        //// WORKING SQUASH - ONLY IF DOT < 0
        // When the dot is 1, it's in shadow
        // When the dot is -1, it's in full light
        // So when the dot is > 0.0 we want to reduce the amount of light by dot * 2.0
        // which means multiplying by 1.0 - dot * 2.0
        // Oh -- If we use the cylinder test for centernormal, with overhead light, the dot here will never be > 0


        directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * 2.0));


        // Direct normal (bit severe)
        // directLight.color *= max(0.0, -dot(directLight.direction, vCenterNormal));

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif


		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

    //// SHADOW EFFECT ON AMBIENT
	if(vShadow > 0.5) {
		irradiance *= 1.5 - vShadow;
	}
	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Fu=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

    // Scale and square to keep the txture and detail in the leaves in headlights

    float dotty = (max(-0.5, -0.5 + dot( geometry.normal, directLight.direction )));// / 2.0 ) + 0.25;
	float dotNL = saturate( dotty );
    dotNL = max(0.1, dotNL);
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,_u=`

    precision highp float;

    uniform sampler2D noiseMap;
    uniform float shadowFactor;

    attribute float variant;
    attribute float type;
    attribute float orientation;
    attribute float dissolve;

    varying vec2 vUv;
    varying vec2 vUvBlend;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    varying float vRadianceBlend;
    varying float vLeafBrightness;

    varying float discolouration;

    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float discolourationFactor;

    vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
        return vec2(
            cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
            cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
        );
    }
`,ku=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Pu=`

    vUv = uv;

    // Sample blend texture here - note we transform the imposter atlas UVs to the full square range
    // 21.32 here is 5.33 * 4.0
    vUvBlend = vec2(uv.x * 21.32, uv.y * 4.0);

    vType = type;

`+un,Eu=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,Nu=`


    // Rotate the vertices to face the camera
    transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));

    // Crop around the trees depending on the type; conifers = 70%, deci = 80%
    float cropX = 0.8 - vType * 0.1;

    // Taper the conifers (type 1) a bit
    // * 4 here is because there are 4 conifer types; vUv.y goes to 0.25
    float cropTaper = 1.0 - (step(0.5, vType)) * vUv.y * 4.0 * 0.6;
    cropX *= cropTaper;
    transformed.xz *= cropX;


    // Offset UVs
    // * 16 here is because there are 16 orientations; vUv.x goes to 0.0625
    vUv.x = ((vUv.x * 16.0 * cropX) + ((1.0 - cropX) / 2.0)) / 16.0;        

    // Account for rotational offset in model
    angleToCamera -= orientation;

    // Normalise to inverval [-PI, PI]
    if(angleToCamera > PI) {
        angleToCamera -= PI*2.0;
    } else if(angleToCamera < -PI) {
        angleToCamera += PI*2.0;
    }

    // Choose tile from texture based on angle
    float tileIndex = (angleToCamera + PI) / (PI * 2.0 / 16.0);

    // Should be 0 when angle is exactly face-on, 1 when exactly betwen tiles
    // Note that this should be scaled to the alphaTest value?



    vUvOffset.x = (1.0 / 16.0) * floor(tileIndex);

    // Set vertical offset by variant type
    vUvOffset.y = variant / 4.0;

    // Need to get mvPosition here
    // #include <project_vertex>

    // Get mvPosition at instance origin
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);


    vAngleBlend = (tileIndex - floor(tileIndex));

    // Prevent angle blend complexity beyond 400m
    vAngleBlend *= step(-mvPosition.z, 400.0);

    // Scale with distance maybe, and sink a bit...
    // Helps to cover gaps
    // May want to make this detail-dependent
    float imposterCamDist = saturate((-mvPosition.z - 200.0) / 800.0);
    transformed *= 1.0 + imposterCamDist * 0.3;
    transformed.y -= imposterCamDist * 4.0;

    // vDist = min(0.75, max(0.4, 1.0 - -mvPosition.z / 1000.0));
    vRadianceBlend = 1.0 - saturate((-mvPosition.z - 50.0) / 200.0) * 0.33;

    // Perform dissolve checks
    vDissolve = 1.0 - saturate((-mvPosition.z - dissolveNear) / dissolveInterval);
    vDissolve *= dissolve;

    // if vDissolve very high just shrink to 0
    transformed *= 1.0 - step(0.999, vDissolve);

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);

    // Finally proper projection?

    mvPosition = modelViewMatrix * instanceMatrix * vec4( transformed, 1.0 );

    float densityFactor = 0.25 * shadowFactor;
    vLeafBrightness = 1.0 - densityFactor * saturate((0.25 - uv.y) / 0.08);
    // Fake darkness from density
    vRadianceBlend *= max(0.5, vLeafBrightness);

    gl_Position = projectionMatrix * mvPosition;

    
`,Ou=`

    precision highp float;

    varying vec2 vUv;
    varying vec2 vUvBlend;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    varying float vRadianceBlend;
    varying float vLeafBrightness;

    varying float discolouration;

    uniform sampler2D noiseMap;
    uniform sampler2D mapB;
    uniform sampler2D normalMapB;
    uniform float radiance;
    uniform bool hasSnow;
`,Bu=`

    // Early discard
    if(vDissolve > 0.999) {
        discard;
    }

    vec4 texelColor;

    if(vType < 0.5) {
        texelColor = texture2D( map, vUv + vUvOffset );
    } else {
        // Map B
        texelColor = texture2D( mapB, vUv + vUvOffset );
    }

    // Transform uvs to square to  sample from noise texture

    float blendNoise = 0.0;
    if(vAngleBlend > 0.0) {

        blendNoise = texture2D(noiseMap, vUvBlend).r;

        //// DIRECT APPROACH
        vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);
        if(blendUV.x > 1.0) {
            blendUV.x -= 1.0;
        }
        if(vType < 0.5) {
            texelColor = mix(texelColor, texture2D( map, blendUV ), step(blendNoise, vAngleBlend));
        } else {
            texelColor = mix(texelColor, texture2D( mapB, blendUV ), step(blendNoise, vAngleBlend));
        }

        //// GRADIENT APPROACH
        // Blend to next texture by angle offset?
        // if(blendNoise < vAngleBlend) {

        //     vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);

        //     if(blendUV.x > 1.0) {
        //         blendUV.x -= 1.0;
        //     }
    
        //     if(vType < 0.5) {
        //         texelColor = textureGrad(map, blendUV, dFdx(blendUV), dFdy(blendUV));
        //     } else {
        //         texelColor = textureGrad(mapB, blendUV, dFdx(blendUV), dFdy(blendUV));
        //     }

        // }

        // Dissolve on approach
        texelColor.a *= step(vDissolve, blendNoise);
    }


    diffuseColor *= texelColor;

`+Tu,Uu=`
    vec2 vNormalMapUvOffset = vUv + vUvOffset;

    #ifdef USE_NORMALMAP_OBJECTSPACE

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }

        // vNormalMapUvOffset.x = min(max(vNormalMapUvOffset.x, 0.0), 1.0);

        // normal = texture2D( normalMap, vNormalMapUvOffset ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

        if(vType < 0.5) {
            normal = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            normal = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif

        normal = normalize( normal );

        diffuseColor.rgb = vec3(normal.x);

    #elif defined( USE_NORMALMAP_TANGENTSPACE )

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }


        vec3 mapN;
        if(vType < 0.5) {
            mapN = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            mapN = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        mapN.xy *= normalScale;

        normal = normalize( tbn * mapN );

    #elif defined( USE_BUMPMAP )

        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

    #endif

    // SNOW
    if(vType < 0.5 && hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        // Note that we use different parameters to the regular trees
        if(dotUp > 0.0) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), min(1.0, dotUp * 8.0));
        }
    }
`,Hu=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

        reflectedLight.directSpecular = reflectedLight.directDiffuse;

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        //// SR EDIT - FAKE DIM SPOTLIGHTS ON IMPOSTERS
        directLight.color *= 0.2;
        ////

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,zu=`
    // attribute float variant;
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;
    uniform int seasonIndex;
    uniform vec3 vehiclePos;
    uniform bool flatten;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float cameraDist;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    // Must match the ground shader
    float wuvSize = 500.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Wu=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);
    vec4 iPos = modelMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);

    vFresnelPos = wPos.xyz;
    vFresnelPos.y -= 1.0; // Subtract the sprite midpoint to get the ground position?

    vFresnelNorm = groundNormal;

    // Grass colouration UVs
    vGv.x = iPos.x / 10.0;
    vGv.y = iPos.z / 10.0;

    vGGv.x = vGv.x / 16.0;
    vGGv.y = vGv.y / 16.0;

    vWv.x = iPos.x / wuvSize;
    vWv.y = iPos.z / wuvSize;

    vWWv.x = vWv.x / 8.0;
    vWWv.y = vWv.y / 8.0;

    //// GET FADES

    float fade0 = texture2D(noiseMap, vWv).r;
    float fade1 = texture2D(noiseMap, vWWv).r;

    // REduce vWWv to match ground shader
    vWWv *= 2.0;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vRoadProx = roadProx;

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    // Get uvLookup  from variant
    /* Indexed into the texture as such:

        2 | 3
        - + -
        0 | 1

    */

    //// VARIANT SELECTION


    float v = texture2D(noiseMap, vGGv).r;

    float variant = 1.0;

    // CHECK HEATHER - has to match the ground function
    // Might want to find something cheaper to do here?
    float heather = smoothstep(0.4, 1.0, ((iPos.y + fade1 * 350.0) - 60.0) / 500.0);
    heather *= screen(fade1, fade0);
    // heather = smoothstep(0.3, 0.6, heather);
    if(vShadow < 0.1 && heather > 0.38 + v / 6.0 ) {
        variant = 3.0;

        if(roadProx > 1.0) {
            transformed.y -= v * 0.2;
        } else {
            transformed.y -= v * 0.2 * roadProx;
        }
    }


    if(vRoadProx < v * 2.0 + 0.2) {
        // Little grass
        variant = 0.0;
    } else if(variant < 3.0 && ( iPos.y > 100.0 && v + fade0 > 1.75 - (iPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

       // big grass

        variant = 2.0;
    } else if(variant == 3.0) {
        transformed.xyz *= 0.5 + fade0 * 1.5;
    }



    doDiscard = 0.0;
    doColor = 0.0;
    if(variant < 3.0) {
        doColor = 1.0;

        // SET UP GRASS COLOURATION PARAMS


        float heightVal = min(1.0, max(0.0, (iPos.y - (30.0 + fade1 * 40.0))/150.0));

        vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

        vDarkGrass =  min( max( 0.0, (fade1 - 0.25) * 2.0), 1.0);

        if(vRoadProx < 0.5 + fade1) {
            vLightGrass *= max(0.5, vRoadProx / (0.5 + fade1));
        }
    }

    vUvOffset.x = variant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition




    // Limit darkness by thingy
    // darkness = min(0.5, -tPos.z / sproutNear);

    //// MODIFY MV POSITION

    float dist = (iPos.x - cameraPosition.x)*(iPos.x - cameraPosition.x) + (iPos.z - cameraPosition.z)*(iPos.z - cameraPosition.z);

    cameraDist = dist;

    // Sink with distance
    transformed.y -= saturate((dist - sproutNear) / (sproutFar - sproutNear)) * 0.5;

    // And with proximity to the car?
    if(flatten) {
        float vehDist = (iPos.x - vehiclePos.x)*(iPos.x - vehiclePos.x) + (iPos.z - vehiclePos.z)*(iPos.z - vehiclePos.z);
        float vehFlatten = 1.0 - saturate((vehiclePos.y - 0.5) - iPos.y);
        // transformed.y -= (1.0 - saturate(vehDist / 2.0)) * vehFlatten * 0.5;
        transformed.y *= 1.0 - (1.0 - saturate(vehDist / 2.0)) * vehFlatten;
    }

    // Scale to 0 if no longer visible to save fragments?
    transformed *= 1.0 - step(sproutFar, dist);

    // Crop depending on variant and season

    if(seasonIndex < 3) {

        // First two variants and last variant halved
        float cropY = 1.0 - 0.5 * step(0.5, abs(variant - 2.0));
        transformed.y *= cropY;
        vUv.y *= cropY;

    } else {

        // Winter, first two options are crushed to 0

        float vStep = step(1.5, variant);
        transformed.xz *= vStep;
        transformed.y *= vStep * 0.5;
        vUv.y *= vStep * 0.5;

    }
    
    // if(variant < 2.0) {
    //     transformed.y *= 0.5;
    //     vUv.y *= 0.5;
    // }

    #include <project_vertex>


    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }

    vShadow *= shadowFactor;

`,Gu=`

    uniform sampler2D noiseMap;
    uniform sampler2D grassVariationMap;
    uniform sampler2D detailFarMap;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    uniform vec3 grassColA;
    uniform vec3 grassColB;
    uniform vec3 peakColA;
    uniform vec3 peakColB;
    
    varying float cameraDist;

    uniform float radiance;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Vu=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,ju=`

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    // Make opaque for debug
    // texelColor.a = 1.0;

    // Limit darkness by distance?
    // texelColor.rgb = vec3(max(texelColor.r, darkness));

    if(doColor > 0.5) {

        // Shared with ground.glsl - TODO share a chunk instead?

        float fade0 = texture2D(noiseMap, vGv).r;
        float fade1 = texture2D(noiseMap, vGGv).r;        

        float variationVal = texture2D(grassVariationMap, vWWv).r - 0.5;
        float closeVariation = ((1.0 - texture2D(grassVariationMap, vWv).r) - 0.5);

        float grassBlend = (screen(fade0, fade1) + vDarkGrass) / 2.0;
        grassBlend = grassBlend * grassBlend;

        grassBlend = saturate(grassBlend + variationVal + closeVariation);

        float lightGrassFactor = saturate(vLightGrass + variationVal - closeVariation);

        lightGrassFactor = saturate(lightGrassFactor * 2.0 * texelColor.r);

        vec3 grassCol = mix(
            mix(grassColA, grassColB, grassBlend),
            mix(peakColA, peakColB, grassBlend),
            lightGrassFactor
        );

        // Detail noise
        float detailNoise = 1.0 - (1.0 - texture2D( detailFarMap, vWv ).r) * 0.7;

        texelColor.rgb *= grassCol * detailNoise;

    } else {
        if(texelColor.a < 0.98) {
            // Lazy fix for heather white pixels
            discard;
        }

        // Dappled brightness
        texelColor.rgb *= 1.0 + (texture2D(noiseMap, vGv).r - 0.6);        
    }



    diffuseColor *= texelColor;


    //// PREP EMISSIVE?

    // NOTE this must match the ground. Ideally share a chunk?
    totalEmissiveRadiance = texelColor.rgb * radiance;


`,Zu=`

    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );

    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0 * clamp((vUv.y * 3.0), 0.7, 0.9); // Bias fresnel brightness toward the top
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= min(1.0, cameraDist / 100.0); // reduce with camera prox
    lightFresnel *= fresnelIntensity;
    lightFresnel *= max(doColor, 0.5);
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel *= 0.5; // Reduce intensity for grass
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`,Qu=`
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float variant;
    // attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform float sproutMargin;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;
    uniform vec3 vehiclePos;
    uniform bool flatten;

    varying vec2 vUv;
    varying vec2 vWv;


    varying float vAlphaTest;
    varying float vShadow;
    varying float doDiscard;

    varying float vAO;

    varying vec2 vUvOffset;

    float wuvSize = 512.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Xu=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);
    vec4 iPos = modelMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    vAO = max(0.0, min(0.5, position.y)) * 2.0;

    // Get uvLookup  from variant

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;

    // The fade is normally distributed; look up the variant from type thingy whatsit
    float vVariant = variant;

    // If variant is unset in the buffer, set it procedurally
    if(vVariant == 0.0) {
        if(vShadow > 0.1) {
            // Higher chance of fern
            if(fade0 > 0.41) {
                if(fade0 > 0.52) {
                    vVariant = 2.0;
                } else {
                    vVariant = 1.0;
                }
            }
        } else {
            // Lower chance for ferns
            if(fade0 > 0.46) {
                if(fade0 > 0.54) {
                    vVariant = 1.0;
                } else {
                    vVariant = 2.0;
                }
            }

            // Also check for gorse
            // if(wPos.y > 150.0) {
            //     if(wPos.y > 200.0) {
            //         if(wPos.y > 230.0) {
            //             vVariant = 3.0;
            //         } else {
            //             // Really high up, bushes must be gorse or generic?
            //             if(vVariant < 2.0) {
            //                 vVariant = 0.0;
            //             } else {
            //                 vVariant = 3.0;
            //             }
            //         }
            //     } else if(vVariant == 2.0) {
            //         vVariant = 3.0;
            //     }
            // }
        }
    }

    vShadow *= shadowFactor;

    // Thinking about rules...
    //  - Gorse higher up
    //  - Soft things alongside the road regardless of elevation
    //  - Ferns only close to trees

    // Should I add more variants?
    //  - nettles and brambles
    //  - cow parsley and generic
    //  - ferns
    //  - two types of gorse
    //  - dock
    //  - ..?

    // Could do variant-specific things here like flattening ferns?
    if(vVariant == 2.0) {
        transformed.y -= 0.1;
    }

    vUvOffset.x = vVariant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition

    //// MODIFY MV POSITION

    doDiscard = 0.0;

    // TODO can this be done once somewhere?
    float dist = (iPos.x - cameraPosition.x)*(iPos.x - cameraPosition.x) + (iPos.z - cameraPosition.z)*(iPos.z - cameraPosition.z);
    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / sproutMargin;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }

    if(flatten) {
        float vehDist = (iPos.x - vehiclePos.x)*(iPos.x - vehiclePos.x) + (iPos.z - vehiclePos.z)*(iPos.z - vehiclePos.z);

        if(vehDist < 4.0) {
            vehDist = sqrt(vehDist);
            float vehFlatten = 1.0 - saturate((vehiclePos.y) - iPos.y);
            transformed.y *= 1.0 - (1.0 - saturate(vehDist / 2.0)) * vehFlatten * 2.0;
        }
    }


    #include <project_vertex>

    // Keeping this here as a maybe.
    if(-mvPosition.z < 10.0) {
        vAlphaTest = 0.5;
    } else {
        vAlphaTest = max(0.2, 0.5 - (-mvPosition.z-10.0) / 110.0);
    }

    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }


`,Yu=`

    uniform sampler2D noiseMap;
    uniform float radiance;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vAlphaTest;

    varying float vShadow;
    varying float vAO;
    varying float doDiscard;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Ku=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,qu=`

    // Don't draw beyond view dist?
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    if(texelColor.a < vAlphaTest) {
        discard;
    }

    diffuseColor *= texelColor;

    //// PREP EMISSIVE?

    totalEmissiveRadiance = texelColor.rgb * radiance * vAO;//texelColor.rgb * 2.0; // * (1.0 - vLightGrass * 0.8);

`,fn=`
    attribute float shadow;
    varying float vShadow;
	uniform float shadowFactor;
`,pn=`
    vShadow = shadow * shadowFactor;
`,An=`
    varying float vShadow;
`,Mt={value:.5};function Fs(l){return i=>{i.uniforms.shadowFactor=Mt,i.vertexShader=i.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+fn),i.vertexShader=i.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+pn),i.fragmentShader=i.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
`+An),i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>")}}const Ju=`

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // TODO - might be best to change the underlying fragment for the scene?

        directLight.color *= 1.0 - min(1.0, vShadow);

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

	//// SHADOW EFFECT ON AMBIENT
	
	irradiance *= 1.75 - min(1.0, max(0.75, vShadow));

	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;Ti.lights_fragment_begin_shadow=Ju;const wo=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,$u=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,xo=`

    uniform float fresnelIntensity;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,ef=`

    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );
    
    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0;
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= fresnelIntensity;
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`;let tf=0,wt,nt=7,xt=0,Ji,vr=.02;const R={normVec:new m,vecA:new m},Pe=class Pe{constructor(i){o(this,"mesh");o(this,"geo");o(this,"mat");o(this,"node");o(this,"o",new m);o(this,"headIndex");o(this,"tailIndex");o(this,"genIndex0",[]);o(this,"genIndex1",[]);o(this,"genNodeCount",0);o(this,"vertCount",0);o(this,"index0",[]);o(this,"index1",[]);o(this,"bounds",{maxX:0,minX:0,maxY:0,minY:0,maxZ:0,minZ:0});o(this,"curLod",0);o(this,"genIndex",0);o(this,"indexArr");o(this,"posArr");o(this,"normArr");o(this,"uvA");o(this,"uvB");o(this,"id");o(this,"index0Size",0);o(this,"index1Size",0);this.id=tf++,wt=i,this.mat=this.getMaterial(),nt=this.getRoadWidth(),Ji=10/(nt*2),Pe.uvStep=Ji,xt=0,this.geo=new gt,this.mesh=new ei(this.geo,this.mat),this.mesh.matrixAutoUpdate=!1,this.mesh.receiveShadow=!0,this.vertCount=(wt*10+1)*2,this.geo.setAttribute("position",new Ye(new Float32Array(this.vertCount*3),3)),this.geo.attributes.position.setUsage(At),this.geo.setAttribute("normal",new Ye(new Float32Array(this.vertCount*3),3)),this.geo.attributes.normal.setUsage(At),this.geo.computeVertexNormals=()=>{},this.geo.setAttribute("uv",new Ye(new Float32Array(this.vertCount*2),2)),this.geo.attributes.uv.setUsage(At),this.geo.boundingSphere=new Cr;let e=(wt-1)*2*3,s=(wt*10+1)*2*3;if(this.lod1IndexStart=e+6,Pe.indexTemplateNodeCount!==wt){Pe.indexTemplate=[],Pe.indexTemplate.length=e+s,Pe.indexTemplateNodeCount=wt,Pe.uv0=[];for(let a=0;a<=wt;a++)Pe.uv0.push(a,0,a,1)}this.geo.setIndex(Pe.indexTemplate),this.indexArr=this.geo.index.array,this.lod0LiveIndex=0,this.lod0IndexIndex=0,this.lod1LiveIndex=0,this.lod1IndexIndex=this.lod1IndexStart,this.posArr=this.geo.attributes.position.array,this.normArr=this.geo.attributes.normal.array,this.uvArr=this.geo.attributes.uv.array}static reset(){console.log("Hitting the road segment reset"),delete Pe.indexTemplate}getMaterial(){return new K}getRoadWidth(){return 3.2}destroy(){this.geo.dispose(),delete this.headNode}initGeneration(i){this.headNode=i,this.node=i,this.headIndex=i.i,this.tailIndex=i.i+wt,this.mesh.position.copy(this.node.p),this.mesh.position.y=0,this.o.copy(this.mesh.position),this.lod0IndexIndex=0,this.lod1IndexIndex=this.lod1IndexStart,this.genIndex=0,this.uvIndex=0,this.genIndex0=[],this.genIndex1=[],this.genNodeCount=0,xt%=10,R.na=this.node,R.normVec.copy(R.na.nextFine.p).sub(R.na.p).normalize(),R.vecA.copy(R.normVec),R.vecA.set(-R.na.n.x,0,-R.na.n.z),R.normVec.cross(R.vecA);let e=vr;this.posArr[this.genIndex]=this.node.p.x-this.node.n.x*nt-this.o.x,this.normArr[this.genIndex++]=R.normVec.x,this.posArr[this.genIndex]=this.node.p.y+e,this.normArr[this.genIndex++]=R.normVec.y,this.posArr[this.genIndex]=this.node.p.z-this.node.n.z*nt-this.o.z,this.normArr[this.genIndex++]=R.normVec.z,this.posArr[this.genIndex]=this.node.p.x+this.node.n.x*nt-this.o.x,this.normArr[this.genIndex++]=R.normVec.x,this.posArr[this.genIndex]=this.node.p.y+e,this.normArr[this.genIndex++]=R.normVec.y,this.posArr[this.genIndex]=this.node.p.z+this.node.n.z*nt-this.o.z,this.normArr[this.genIndex++]=R.normVec.z,this.uvArr[this.uvIndex++]=0,this.uvArr[this.uvIndex++]=xt,this.uvArr[this.uvIndex++]=1,this.uvArr[this.uvIndex++]=xt,this.bounds.minX=this.node.p.x,this.bounds.maxX=this.bounds.minX,this.bounds.minY=this.node.p.y,this.bounds.maxY=this.bounds.minY,this.bounds.minZ=this.node.p.z,this.bounds.maxZ=this.bounds.minZ}genNext(){for(R.na=this.node,R.nb=this.node.next,R.ba=this.node.bridge?1:0,R.bb=this.node.next.bridge?1:0,R.genNodeCountA=this.genNodeCount,R.roadNodeCount=0;R.na.nextFine&&R.na.i!==R.nb.i&&(R.na=R.na.nextFine,!!R.na.nextFine);){R.a=this.genNodeCount*2,R.b=R.a+1,R.c=R.a+2,R.d=R.a+3,this.indexArr[this.lod1IndexIndex++]=R.a,this.indexArr[this.lod1IndexIndex++]=R.b,this.indexArr[this.lod1IndexIndex++]=R.c,this.indexArr[this.lod1IndexIndex++]=R.b,this.indexArr[this.lod1IndexIndex++]=R.d,this.indexArr[this.lod1IndexIndex++]=R.c,R.normVec.copy(R.na.nextFine.p).sub(R.na.p).normalize(),R.vecA.copy(R.normVec),R.vecA.set(-R.na.n.x,0,-R.na.n.z),R.normVec.cross(R.vecA);let e=vr;this.posArr[this.genIndex]=R.na.p.x-R.na.n.x*nt-this.o.x,this.normArr[this.genIndex++]=R.normVec.x,this.posArr[this.genIndex]=R.na.p.y+e,this.normArr[this.genIndex++]=R.normVec.y,this.posArr[this.genIndex]=R.na.p.z-R.na.n.z*nt-this.o.z,this.normArr[this.genIndex++]=R.normVec.z,this.posArr[this.genIndex]=R.na.p.x+R.na.n.x*nt-this.o.x,this.normArr[this.genIndex++]=R.normVec.x,this.posArr[this.genIndex]=R.na.p.y+e,this.normArr[this.genIndex++]=R.normVec.y,this.posArr[this.genIndex]=R.na.p.z+R.na.n.z*nt-this.o.z,this.normArr[this.genIndex++]=R.normVec.z,this.customGenNext(R.na),this.genNodeCount++,R.roadNodeCount++}R.uvDist=Ji/R.roadNodeCount;let i=xt;for(R.i=0;R.i<R.roadNodeCount;R.i++)xt+=R.uvDist,this.uvArr[this.uvIndex++]=0,this.uvArr[this.uvIndex++]=xt,this.uvArr[this.uvIndex++]=1,this.uvArr[this.uvIndex++]=xt,this.customGenFine(this.node,this.node.next,i,i+Ji,R.i/R.roadNodeCount,(R.i+1)/R.roadNodeCount);return this.curUV=xt,R.a=R.genNodeCountA*2,R.b=R.a+1,R.c=this.genNodeCount*2,R.d=R.c+1,this.indexArr[this.lod0IndexIndex++]=R.a,this.indexArr[this.lod0IndexIndex++]=R.b,this.indexArr[this.lod0IndexIndex++]=R.c,this.indexArr[this.lod0IndexIndex++]=R.b,this.indexArr[this.lod0IndexIndex++]=R.d,this.indexArr[this.lod0IndexIndex++]=R.c,this.node=this.node.next,this.node.p.x<this.bounds.minX?this.bounds.minX=this.node.p.x:this.node.p.x>this.bounds.maxX&&(this.bounds.maxX=this.node.p.x),this.node.p.y<this.bounds.minY?this.bounds.minY=this.node.p.y:this.node.p.y>this.bounds.maxY&&(this.bounds.maxY=this.node.p.y),this.node.p.z<this.bounds.minZ?this.bounds.minZ=this.node.p.z:this.node.p.z>this.bounds.maxZ&&(this.bounds.maxZ=this.node.p.z),this.node.nextFine&&this.node.i>=this.tailIndex}finalise(){this.curLod=0,this.lod0LiveIndex=this.lod0IndexIndex,this.lod1LiveIndex=this.lod1IndexIndex,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.index.needsUpdate=!0,this.geo.boundingSphere.center.set((this.bounds.maxX+this.bounds.minX)/2-this.mesh.position.x,(this.bounds.maxY+this.bounds.minY)/2-this.mesh.position.y,(this.bounds.maxZ+this.bounds.minZ)/2-this.mesh.position.z),this.geo.boundingSphere.radius=Math.sqrt((this.bounds.maxX-this.bounds.minX)*(this.bounds.maxX-this.bounds.minX)+(this.bounds.maxY-this.bounds.minY)*(this.bounds.maxY-this.bounds.minY)+(this.bounds.maxZ-this.bounds.minZ)*(this.bounds.maxZ-this.bounds.minZ))/2+5,this.mesh.updateMatrix(),v.vehicleIndex>=this.headIndex-wt/2?this.upgrade():this.geo.setDrawRange(0,this.lod0LiveIndex)}upgrade(){this.curLod!=1&&(this.curLod=1,this.geo.setDrawRange(this.lod1IndexStart,this.lod1LiveIndex-this.lod1IndexStart))}downgrade(){this.curLod!=0&&(this.curLod=0,this.geo.setDrawRange(0,this.lod0LiveIndex))}};o(Pe,"indexTemplate",null),o(Pe,"indexTemplateNodeCount",0),o(Pe,"uvStep",10);let gs=Pe;const $i={pars_vert:`
        attribute float bridge;
        attribute float paintSolid;
        attribute float paintSolidLeft;
        attribute float paintSolidRight;
        attribute float paintMergeLeft;
        attribute float paintMergeRight;

        uniform float textureStretch;

        varying float vBridge;
        varying float vSolid;
        varying float vSolidLeft;
        varying float vSolidRight;
        varying float vMergeLeft;
        varying float vMergeRight;
        varying float vOverlayFactor;

        varying vec2 vRoadUv;

    `,vert:`
        vBridge = bridge;
        vSolid = paintSolid;
        vSolidLeft = paintSolidLeft;
        vSolidRight = paintSolidRight;
        vMergeLeft = paintMergeLeft;
        vMergeRight = paintMergeRight;

        // Use shadow to inform overlay
        vOverlayFactor = saturate(vShadow * 3.0);
        
        vRoadUv = vMapUv;
        vRoadUv.y /= textureStretch;

    `,pars_frag:`
        uniform sampler2D overlayMap;
        uniform bool hasOverlay;

        uniform bool hasPaint;

        uniform sampler2D dashedMap;
        // uniform sampler2D dashedLongMap;
        uniform sampler2D solidMap;
        uniform sampler2D solidLeftMap;
        uniform sampler2D solidRightMap;
        uniform sampler2D mergeLeftMap;
        uniform sampler2D mergeRightMap;

        varying float vBridge;
        varying float vSolid;
        varying float vSolidLeft;
        varying float vSolidRight;
        varying float vMergeLeft;
        varying float vMergeRight;
        varying float vOverlayFactor;

        varying vec2 vRoadUv;
    `,frag:`
        #ifdef USE_MAP

            //// BASE            

            vec4 texelColor = texture2D( map, vRoadUv );

            // Bridge has solid alpha
            texelColor.a = max(vBridge, texelColor.a);

            // TODO do we even want radiance here? seems strange for the road specifically
            // Especially if it's done on paint lines
            totalEmissiveRadiance = texelColor.rgb * radiance;

            //// PAINT

            if(hasPaint) {

                vec4 paintCol = texture( dashedMap, vMapUv, -0.3 );

                float wSolid = smoothstep(0.49, 0.51, vSolid);

                float wSolidLeft = smoothstep(0.49, 0.51, vSolidLeft);
                float wSolidRight = smoothstep(0.49, 0.51, vSolidRight);
            
                float wMergeLeft = smoothstep(0.49, 0.51, vMergeLeft)  * (1.0 - ceil(max(wSolidLeft, wSolidRight)));
                float wMergeRight = smoothstep(0.49, 0.51, vMergeRight)  * (1.0 - ceil(max(wSolidLeft, wSolidRight)));
                
                if(wMergeLeft + wMergeRight > 0.0) {
                    paintCol = mix(paintCol, texture( mergeLeftMap, vMapUv, -0.3 ), wMergeLeft);
                    paintCol = mix(paintCol, texture( mergeRightMap, vMapUv, -0.3 ), wMergeRight);
                }
                if(wSolidRight + wSolidLeft > 0.0) {
                    paintCol = mix(paintCol, texture( solidRightMap, vMapUv, -0.3 ), wSolidRight);
                    paintCol = mix(paintCol, texture( solidLeftMap, vMapUv, -0.3 ), wSolidLeft);
                    paintCol = mix(paintCol, texture( solidMap, vMapUv, -0.3 ), wSolid);
                }

                texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                
                // if(vSolid > 0.499) {
                //     vec4 paintCol = texture2D( solidMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vSolidLeft > 0.499) {
                //     vec4 paintCol = texture2D( solidLeftMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vSolidRight > 0.499) {
                //     vec4 paintCol = texture2D( solidRightMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vMergeLeft > 0.499) {
                //     vec4 paintCol = texture2D( mergeLeftMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);                
                // } else if(vMergeRight > 0.499) {
                //     vec4 paintCol = texture2D( mergeRightMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);                
                // } else {
                //     // Dash
                //     vec4 dashColor = texture2D( dashedMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, dashColor.rgb, dashColor.a);
                // }
                
            }

            //// OVERLAY

            if(hasOverlay && vOverlayFactor > 0.0) {
                vec4 overlayCol = texture2D(overlayMap, vRoadUv);
                texelColor.rgb = mix(texelColor.rgb, overlayCol.rgb, vOverlayFactor * overlayCol.a);
            }

            diffuseColor *= texelColor;

        #endif
    `};class bA extends gs{constructor(...e){super(...e);o(this,"bridgeIndex");o(this,"bridgeArr");o(this,"shadowIndex");o(this,"shadowArr");o(this,"lerpConstraints",{paintSolid:null,paintSolidLeft:null,paintSolidRight:null,paintMergeLeft:null,paintMergeRight:null});o(this,"nextSolidLerp",null);this.geo.setAttribute("bridge",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.bridge.setUsage(At),this.bridgeArr=this.geo.attributes.bridge.array,this.geo.setAttribute("shadow",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.shadow.setUsage(At),this.shadowArr=this.geo.attributes.shadow.array,this.geo.setAttribute("paintSolid",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolid.setUsage(At),this.solidArr=this.geo.attributes.paintSolid.array,this.geo.setAttribute("paintSolidLeft",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolidLeft.setUsage(At),this.solidLeftArr=this.geo.attributes.paintSolidLeft.array,this.geo.setAttribute("paintSolidRight",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolidRight.setUsage(At),this.solidRightArr=this.geo.attributes.paintSolidRight.array,this.geo.setAttribute("paintMergeLeft",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.paintMergeLeft.setUsage(At),this.mergeLeftArr=this.geo.attributes.paintMergeLeft.array,this.geo.setAttribute("paintMergeRight",new Ye(new Float32Array(this.vertCount),1)),this.geo.attributes.paintMergeRight.setUsage(At),this.mergeRightArr=this.geo.attributes.paintMergeRight.array}getMaterial(){return Y}getRoadWidth(){return it}initGeneration(...e){super.initGeneration(...e),this.bridgeIndex=0,this.bridgeArr[this.bridgeIndex++]=this.node.bridge?1:0,this.bridgeArr[this.bridgeIndex++]=this.node.bridge?1:0,this.shadowIndex=0,this.shadowArr[this.shadowIndex++]=this.node.shadowLeft??0,this.shadowArr[this.shadowIndex++]=this.node.shadowRight??0,this.solidIndex=0,this.solidLeftIndex=0,this.solidRightIndex=0,this.mergeLeftIndex=0,this.mergeRightIndex=0;let s=this.headNode;for(;s.i<this.tailIndex;)s=s.next;s.paintMergeLeft=0,s.paintMergeRight=0;let a=s.next;s.paintSolidLeftWeight=a.paintSolidLeftWeight,s.paintSolidRightWeight=a.paintSolidRightWeight}customGenNext(e){this.shadowArr[this.shadowIndex++]=e.shadowLeft??0,this.shadowArr[this.shadowIndex++]=e.shadowRight??0}getPaintWeight(e,s,a,t,r,c,g,f=!1){let x=this.lerpConstraints[e],w;if(s==a)x!==null?(w=x,this.lerpConstraints[e]=null):w=s?1:0;else{let S=Math.ceil(t),D=Math.ceil(r);if(S==D)w=s?1:0;else{let C=r-t,k=(S-t)/C;if(f&&a&&D-S>=2&&(k+=(D-S-1)/C),w=x,this.lerpConstraints[e]=null,w==null&&(w=c<k?s?1:0:a?1:0),c<k&&g>k){let T=(k-c)/(g-c);this.lerpConstraints[e]=w+(.5-w)/T}}}return w}customGenFine(e,s,a,t,r,c){let g=s.bridge?1:0,f=s.bridge?1:0;this.bridgeArr[this.bridgeIndex++]=g*(1-r)+f*r,this.bridgeArr[this.bridgeIndex++]=g*(1-r)+f*r,e.paintSolid=e.paintSolidLeftWeight>.5&&e.paintSolidRightWeight>.5,s.paintSolid=s.paintSolidLeftWeight>.5&&s.paintSolidRightWeight>.5;let x=this.getPaintWeight("paintSolid",e.paintSolid,s.paintSolid,a,t,r,c);this.solidArr[this.solidIndex++]=x,this.solidArr[this.solidIndex++]=x,e.paintSolidLeft=e.paintSolidLeftWeight>.5,s.paintSolidLeft=s.paintSolidLeftWeight>.5;let w=this.getPaintWeight("paintSolidLeft",e.paintSolidLeft,s.paintSolidLeft,a,t,r,c);this.solidLeftArr[this.solidLeftIndex++]=w,this.solidLeftArr[this.solidLeftIndex++]=w,e.paintSolidRight=e.paintSolidRightWeight>.5,s.paintSolidRight=s.paintSolidRightWeight>.5,w=this.getPaintWeight("paintSolidRight",e.paintSolidRight,s.paintSolidRight,a,t,r,c),this.solidRightArr[this.solidRightIndex++]=w,this.solidRightArr[this.solidRightIndex++]=w,w=this.getPaintWeight("paintMergeLeft",!!e.paintMergeLeft,!!s.paintMergeLeft,a,t,r,c,!0),this.mergeLeftArr[this.mergeLeftIndex++]=w,this.mergeLeftArr[this.mergeLeftIndex++]=w,w=this.getPaintWeight("paintMergeRight",!!e.paintMergeRight,!!s.paintMergeRight,a,t,r,c,!0),this.mergeRightArr[this.mergeRightIndex++]=w,this.mergeRightArr[this.mergeRightIndex++]=w}finalise(){super.finalise(),this.customGenFine(this.node,this.node.next,this.curUV,this.curUV+gs.uvStep,0,1),this.geo.attributes.bridge.needsUpdate=!0,this.geo.attributes.shadow.needsUpdate=!0,this.geo.attributes.paintSolid.needsUpdate=!0,this.geo.attributes.paintSolidLeft.needsUpdate=!0,this.geo.attributes.paintSolidRight.needsUpdate=!0,this.geo.attributes.paintMergeLeft.needsUpdate=!0,this.geo.attributes.paintMergeRight.needsUpdate=!0}regenerateShadows(){for(this.shadowIndex=0,this.node=this.headNode;this.node.next.prev.i<=this.tailIndex;)this.shadowArr[this.shadowIndex++]=this.node.shadowLeft??0,this.shadowArr[this.shadowIndex++]=this.node.shadowRight??0,this.node=this.node.nextFine;this.geo.attributes.shadow.needsUpdate=!0}}const mn=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight, float blend ) {

	// Might be something more intelligent I could do here?

	//saturate( (0.1 - abs(dot( geometry.normal, directLight.direction )) * 0.1 ) * blend );

	float dotNL = 0.1 + (1.0 - abs(dot( geometry.normal, directLight.direction ))) * 0.1;
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_Direct_Spot          RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,vn=`

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

		// Could darken it at the bottom...
		// directLight.color *= vUv.y*2.0;

		// Could also pass this in so we know what to do with the normal?

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// - max(0.0, (1.0 - vRoadProx)) * (1.0 - vUv.y)
		RE_Direct_Spot( directLight, geometry, material, reflectedLight, 1.0);

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

		getDirectionalLightInfo( directionalLight, geometry, directLight );

        //// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // TODO - might be best to change the underlying fragment for the scene?

        directLight.color *= 1.0 - vShadow;

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,sf=""+new URL("../assets/noise_fine.592be1a0.webp",import.meta.url).href,af=""+new URL("../assets/noise_finer.98c1753c.webp",import.meta.url).href,Wt="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",of=""+new URL("../assets/sea_waves.63ff8729.webp",import.meta.url).href,wr=""+new URL("../assets/signs.c90afd62.webp",import.meta.url).href,rf="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",nf=`

uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

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

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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
`,de=U(Wt),Ui=U(sf,4,void 0,We),lf=U(af,4,void 0,We),yA=U(rf,1);function DA(){Ti.fog_pars_vertex=iu,Ti.fog_vertex=su,Ti.fog_pars_fragment=au,Ti.fog_fragment=ou}function hf(l,i){var t;mr.length==2&&l=="winter"?F.userData.seasonIndex.value=3:F.userData.seasonIndex.value=mr.indexOf(l),F.userData.grassMap.value=U(i.maps.grass,4,void 0,void 0),F.userData.forestMap.value=U(i.maps.forest),F.userData.heatherMap.value=U(i.maps.heather),F.userData.gravelMap.value=U(i.maps.gravel),F.userData.sandMap.value=U(i.maps.sand),F.userData.rockMap.value=U(i.maps.rock),F.userData.rockMapBump.value=U(i.maps.rockBump,4,et,We),F.userData.detailNearMap.value=U(i.maps.detailNear,4,et,We),F.userData.detailFarMap.value=U(i.maps.detailFar,4,et,We),F.userData.grassVariationMap.value=U(i.maps.grassVariation,4,et,We),F.userData.grassColA.value=xi(i.ground.grassColA),F.userData.grassColB.value=xi(i.ground.grassColB),F.userData.peakColA.value=xi(i.ground.peakColA),F.userData.peakColB.value=xi(i.ground.peakColB),F.userData.fieldDiscolouration.value=ch(i.ground.fieldDiscolouration),F.userData.radiance.value=i.lights.radiance??0,F.displacementMap=F.userData.rockMapBump.value,F.userData.roadCol.value=xi(i.colours.road),F.userData.fresnelIntensity.value=i.lights.fresnelFactor??1,ge.map=U(i.maps.grassSprites,4,pt),Re.map=U(i.maps.bushes,2,pt);let e=ms?i.maps.roadSingle:i.maps.road,s=!!e.paintDashed;Y.userData.hasPaint.value=s,Y.map=U(e.base,s?4:16),Y.userData.dashedMap.value=s?U(e.paintDashed,16):void 0,Y.userData.mergeLeftMap.value=s?U(e.paintMergeLeft,16):void 0,Y.userData.mergeRightMap.value=s?U(e.paintMergeRight,16):void 0,Y.userData.solidMap.value=s?U(e.paintSolid,16):void 0,Y.userData.solidLeftMap.value=s?U(e.paintSolidLeft,16):void 0,Y.userData.solidRightMap.value=s?U(e.paintSolidRight,16):void 0;let a=!!e.overlay;Y.userData.hasOverlay.value=a,Y.userData.overlayMap.value=a?U(e.overlay,4):void 0,Y.userData.textureStretch.value=e.stretch??1,oe.radiance.value=i.lights.radiance?i.lights.radiance/2:0,oe.discolourationFactor.value=i.effects.treeDiscolouration?i.effects.treeDiscolouration:1,oe.hasSnow.value=!!i.effects.hasSnow,ae.map=U(i.maps.imposterMap,0,pt),ae.userData.mapB.value=U(i.maps.imposterMapB,0,pt),ae.normalMap=U(i.maps.imposterNorm,0,pt,We),ae.userData.normalMapB.value=U(i.maps.imposterNormB,1,pt,We),ae.uniformsNeedUpdate=!0,ae.alphaTest=i.foliage.imposterAlphaTest;for(let r=0;r<2;r++){let c=r==0?pt:et;ea[r].map=U(i.maps.trees[r].d,4,c),r==0?ea[r].normalMap=U(i.maps.trees[r].n,4,c,We):ea[r].alphaMap=U(i.maps.trees[r].n,4,c)}ge.alphaTest=i.foliage.grassAlphaTest,Re.alphaTest=i.foliage.bushAlphaTest,ve.color.setHex(i.water.base),ve.userData.body.value.setHex(i.water.body),ve.userData.highlight.value.setHex(i.water.highlight),X.map=U(i.maps.clouds,4,void 0,We),X.userData.highlight.value.setHex(i.clouds.highlight),X.userData.lowlight.value.setHex(i.clouds.lowlight),X.userData.shelfHeight0.value=i.clouds.shelfHeight0,X.userData.shelfHeight1.value=i.clouds.shelfHeight1,X.userData.skyScale0.value=i.clouds.skyScale0,X.userData.skyScale1.value=i.clouds.skyScale1,X.userData.mode.value=i.clouds.mode,us.map=U(i.maps.walls.barrier,8,et),us.normalMap=U(i.maps.walls.barrierNorm,8,void 0,We),So.map=U(i.maps.walls.seaWall,8,aa),fs.map=U(i.maps.walls.fence,8,et),fs.normalMap=U(i.maps.walls.fenceNorm,8,void 0,We),ps.map=U(i.maps.walls.drystone,8,et),wn.map=ps.map,xn.map=U(i.maps.bridge,0,aa),bo.emissiveIntensity=Math.min(i.lights.sun.intensity/20,.5),Mt.value=((t=i.effects)==null?void 0:t.shadowFactor)??1}function df(l){uf(l.sea.depth,l.sea.waves)}function cf(l){oe.dissolveFar.value=l.lod1Horizon*10,oe.dissolveInterval.value=Math.floor(l.lod1Horizon*10*.3),oe.dissolveNear.value=oe.dissolveFar.value-oe.dissolveInterval.value,ae.userData.dissolveFar.value=oe.dissolveNear.value+oe.dissolveInterval.value*.6,ae.userData.dissolveInterval.value=oe.dissolveInterval.value,ae.userData.dissolveNear.value=ae.userData.dissolveFar.value-ae.userData.dissolveInterval.value,ge.userData.sproutFar.value=(l.lod1Horizon*12.5)**2,ge.userData.sproutNear.value=(l.lod1Horizon*12.5*.5)**2,Re.userData.sproutFar.value=ge.userData.sproutFar.value,Re.userData.sproutNear.value=ge.userData.sproutNear.value,X.userData.altitude.value=l.cloudAltitude,F.userData.sinkDist.value=l.lod0Horizon}const F=new K({map:U(Wt),displacementMap:U(Wt),fog:!0});F.needsCameraPosition=!0;F.userData.grassMap={value:null};F.userData.sandMap={value:null};F.userData.rockMap={value:null};F.userData.rockMapBump={value:null};F.userData.gravelMap={value:null};F.userData.heatherMap={value:null};F.userData.forestMap={value:null};F.userData.detailNearMap={value:null};F.userData.detailFarMap={value:null};F.userData.grassVariationMap={value:null};F.userData.fadeFine={value:Ui};F.userData.roadCol={value:[]};F.userData.fresnelIntensity={value:.5};F.userData.radiance={value:0};F.userData.grassColA={value:[]};F.userData.grassColB={value:[]};F.userData.peakColA={value:[]};F.userData.peakColB={value:[]};F.userData.fieldDiscolouration={value:[]};F.userData.vehicleIndex={value:0};F.userData.sinkDist={value:400};F.userData.seasonIndex={value:1};F.onBeforeCompile=l=>(l.uniforms.grassMap=F.userData.grassMap,l.uniforms.sandMap=F.userData.sandMap,l.uniforms.rockMap=F.userData.rockMap,l.uniforms.rockMapBump=F.userData.rockMapBump,l.uniforms.gravelMap=F.userData.gravelMap,l.uniforms.heatherMap=F.userData.heatherMap,l.uniforms.forestMap=F.userData.forestMap,l.uniforms.detailNearMap=F.userData.detailNearMap,l.uniforms.detailFarMap=F.userData.detailFarMap,l.uniforms.grassVariationMap=F.userData.grassVariationMap,l.uniforms.fadeFine=F.userData.fadeFine,l.uniforms.grassColA=F.userData.grassColA,l.uniforms.grassColB=F.userData.grassColB,l.uniforms.peakColA=F.userData.peakColA,l.uniforms.peakColB=F.userData.peakColB,l.uniforms.fieldDiscolouration=F.userData.fieldDiscolouration,l.uniforms.roadCol=F.userData.roadCol,l.uniforms.fresnelIntensity=F.userData.fresnelIntensity,l.uniforms.radiance=F.userData.radiance,l.uniforms.sinkDist=F.userData.sinkDist,l.uniforms.vehicleIndex=F.userData.vehicleIndex,l.uniforms.shadowFactor=Mt,l.uniforms.seasonIndex=F.userData.seasonIndex,l.vertexShader=l.vertexShader.replace("#include <displacementmap_pars_vertex>",uu+wo),l.vertexShader=l.vertexShader.replace("#include <displacementmap_vertex>",fu),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",""),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),l.fragmentShader=l.fragmentShader.replace("#include <map_pars_fragment>",pu+xo),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",Au+mu),l.fragmentShader=l.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),l);const Y=new K({map:U(Wt),alphaTest:.75});Y.needsCameraPosition=!0;Y.userData.hasPaint={value:!0};Y.userData.dashedMap={value:de};Y.userData.solidMap={value:de};Y.userData.solidLeftMap={value:de};Y.userData.solidRightMap={value:de};Y.userData.mergeLeftMap={value:de};Y.userData.mergeRightMap={value:de};Y.userData.textureStretch={value:1};Y.userData.overlayMap={value:de};Y.userData.hasOverlay={value:!1};Y.onBeforeCompile=l=>(l.uniforms.fresnelIntensity=F.userData.fresnelIntensity,l.uniforms.radiance=F.userData.radiance,l.uniforms.overlayMap=Y.userData.overlayMap,l.uniforms.hasOverlay=Y.userData.hasOverlay,l.uniforms.textureStretch=Y.userData.textureStretch,l.uniforms.hasPaint=Y.userData.hasPaint,l.uniforms.dashedMap=Y.userData.dashedMap,l.uniforms.mergeLeftMap=Y.userData.mergeLeftMap,l.uniforms.mergeRightMap=Y.userData.mergeRightMap,l.uniforms.solidMap=Y.userData.solidMap,l.uniforms.solidLeftMap=Y.userData.solidLeftMap,l.uniforms.solidRightMap=Y.userData.solidRightMap,l.uniforms.shadowFactor=Mt,l.vertexShader=l.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+$i.pars_vert+fn+wo),l.vertexShader=l.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+pn+$i.vert+$u),l.fragmentShader=l.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+$i.pars_frag+An+xo),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",$i.frag+ef),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),l.fragmentShader=l.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),l);const gf=new Te({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0});gf.needsCameraPosition=!0;const X=new Te({depthTest:!1,fog:!0,map:de,toneMapped:!0,side:Lt});X.needsCameraPosition=!0;X.userData.highlight={value:new st(16777215)};X.userData.lowlight={value:new st(15658734)};X.userData.hasClouds={value:!0};X.userData.camPos={value:new m};X.userData.time={value:0};X.userData.shelfHeight0={value:1e3};X.userData.shelfHeight1={value:1200};X.userData.skyScale0={value:6e3};X.userData.skyScale1={value:3e3};X.userData.mode={value:0};X.userData.altitude={value:200};X.customProgramCacheKey=()=>"clouds";X.onBeforeCompile=l=>(l.uniforms.highlight=X.userData.highlight,l.uniforms.lowlight=X.userData.lowlight,l.uniforms.hasClouds=X.userData.hasClouds,l.uniforms.camPos=X.userData.camPos,l.uniforms.time=X.userData.time,l.uniforms.shelfHeight0=X.userData.shelfHeight0,l.uniforms.shelfHeight1=X.userData.shelfHeight1,l.uniforms.skyScale0=X.userData.skyScale0,l.uniforms.skyScale1=X.userData.skyScale1,l.uniforms.mode=X.userData.mode,l.uniforms.altitude=X.userData.altitude,l.vertexShader=l.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+ru),l.vertexShader=l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+nu),l.vertexShader=l.vertexShader.replace("#include <fog_pars_vertex>",hu),l.vertexShader=l.vertexShader.replace("#include <fog_vertex>",du),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",lu),l.fragmentShader=l.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+cu),l.fragmentShader=l.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+gu),l);let ve=new Te({});ve.userData.camPos={value:new m};ve.userData.waves={value:U(of,4,void 0,sh)};ve.userData.body={value:new st};ve.userData.highlight={value:new st};ve.userData.time={value:0};function uf(l=!1,i=!1){ve.defines={},l&&(ve.defines.WATER_DEPTH=""),i&&(ve.defines.WATER_WAVES=""),ve.onBeforeCompile=e=>(e.uniforms.body=ve.userData.body,e.uniforms.highlight=ve.userData.highlight,e.uniforms.waves=ve.userData.waves,e.uniforms.time=ve.userData.time,e.uniforms.camPos=ve.userData.camPos,e.vertexShader=e.vertexShader.replace("#include <color_pars_vertex>",`#include <color_pars_vertex>
`+vu),e.vertexShader=e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
`+wu),e.fragmentShader=e.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
`+xu),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+Su),e)}ve.needsCameraPosition=!0;const oe={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function xr(l=!1){let i=new K({map:de,normalMap:l?null:de,alphaMap:l?de:null,alphaTest:l?.4:.5,side:Lt,normalMapType:l?null:Ss,forceSinglePass:!0,customProgramCacheKey:()=>"tree"});return i.needsCameraPosition=!0,l?i.onBeforeCompile=e=>(e.uniforms.noiseMap={value:Ui},e.uniforms.dissolveNear=oe.dissolveNear,e.uniforms.dissolveFar=oe.dissolveFar,e.uniforms.dissolveInterval=oe.dissolveInterval,e.uniforms.discolourationFactor=oe.discolourationFactor,e.uniforms.shadowFactor=Mt,e.vertexShader=e.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+ah),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",oh),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",rh),e.fragmentShader=e.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+nh),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+lh),e.fragmentShader=e.fragmentShader.replace("#include <lights_lambert_pars_fragment>",hh),e.fragmentShader=e.fragmentShader.replace("#include <lights_fragment_begin>",dh),e.fragmentShader=e.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),e):i.onBeforeCompile=e=>(e.uniforms.noiseMap={value:Ui},e.uniforms.dissolveNear=oe.dissolveNear,e.uniforms.dissolveFar=oe.dissolveFar,e.uniforms.dissolveInterval=oe.dissolveInterval,e.uniforms.radiance=oe.radiance,e.uniforms.discolourationFactor=oe.discolourationFactor,e.uniforms.shadowFactor=Mt,e.uniforms.hasSnow=oe.hasSnow,e.vertexShader=e.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+bu),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",Du),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",Pr),e.fragmentShader=e.fragmentShader.replace("#include <alphatest_fragment>",Ru),e.fragmentShader=e.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Mu),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+Lu),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+Cu),e.fragmentShader=e.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Fu),e.fragmentShader=e.fragmentShader.replace("#include <lights_fragment_begin>",Iu),e.fragmentShader=e.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),e),i}let ea=[xr(),xr(!0)];new K({map:de,alphaTest:.25,side:Lt,forceSinglePass:!0});new K({color:110832});const ae=new K({map:U(Wt,0,pt),normalMap:U(Wt,0,void 0,We),normalMapType:Ss,alphaTest:.5});ae.needsCameraPosition=!0;ae.userData.noiseMap={value:Ui};ae.userData.mapB={value:U(Wt)};ae.userData.normalMapB={value:U(Wt)};ae.userData.dissolveNear={value:100};ae.userData.dissolveFar={value:200};ae.userData.dissolveInterval={value:100};ae.onBeforeCompile=l=>{l.uniforms.noiseMap=ae.userData.noiseMap,l.uniforms.mapB=ae.userData.mapB,l.uniforms.normalMapB=ae.userData.normalMapB,l.uniforms.dissolveNear=ae.userData.dissolveNear,l.uniforms.dissolveFar=ae.userData.dissolveFar,l.uniforms.dissolveInterval=ae.userData.dissolveInterval,l.uniforms.radiance=oe.radiance,l.uniforms.discolourationFactor=oe.discolourationFactor,l.uniforms.hasSnow=oe.hasSnow,l.uniforms.shadowFactor=Mt,l.vertexShader=l.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+_u),l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Pu),l.vertexShader=l.vertexShader.replace("#include <beginnormal_vertex>",ku+`
`+Eu),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",Nu),l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",Pr),l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_maps>",Uu),l.fragmentShader=l.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Ou),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",Bu),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",Hu),l.fragmentShader=l.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let ff=.25;const ge=new K({map:de,alphaTest:ff,side:Lt});ge.needsCameraPosition=!0;ge.userData.noiseMap={value:Ui};ge.userData.sproutNear={value:100*100};ge.userData.sproutFar={value:200*200};ge.userData.vehiclePos={value:new m};ge.userData.flatten={value:!1};ge.customProgramCacheKey=()=>"grass";ge.onBeforeCompile=l=>{l.uniforms.noiseMap=ge.userData.noiseMap,l.uniforms.sproutNear=ge.userData.sproutNear,l.uniforms.sproutFar=ge.userData.sproutFar,l.uniforms.vehiclePos=ge.userData.vehiclePos,l.uniforms.flatten=ge.userData.flatten,l.uniforms.grassColA=F.userData.grassColA,l.uniforms.grassColB=F.userData.grassColB,l.uniforms.peakColA=F.userData.peakColA,l.uniforms.peakColB=F.userData.peakColB,l.uniforms.grassVariationMap=F.userData.grassVariationMap,l.uniforms.detailFarMap=F.userData.detailFarMap,l.uniforms.fresnelIntensity=F.userData.fresnelIntensity,l.uniforms.radiance=F.userData.radiance,l.uniforms.shadowFactor=Mt,l.uniforms.seasonIndex=F.userData.seasonIndex,l.vertexShader=l.vertexShader.replace("#include <common>","#include <common>"+zu+wo),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",""+Wu),l.fragmentShader=l.fragmentShader.replace("#include <common>","#include <common>"+Gu+xo),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",ju+`
`+Zu),l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",Vu),l.fragmentShader=l.fragmentShader.replace("#include <lights_lambert_pars_fragment>",mn),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",vn),l.fragmentShader=l.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let pf=.5;const Re=new K({map:de,alphaTest:pf,side:Lt,forceSinglePass:!0});Re.needsCameraPosition=!0;Re.userData.noiseMap={value:lf};Re.userData.sproutNear={value:100*100};Re.userData.sproutFar={value:200*200};Re.userData.sproutMargin={value:Re.userData.sproutFar.value-Re.userData.sproutNear.value};Re.onBeforeCompile=l=>{l.uniforms.noiseMap=Re.userData.noiseMap,l.uniforms.sproutNear=Re.userData.sproutNear,l.uniforms.sproutFar=Re.userData.sproutFar,l.uniforms.sproutMargin=Re.userData.sproutMargin,l.uniforms.radiance=F.userData.radiance,l.uniforms.shadowFactor=Mt,l.uniforms.vehiclePos=ge.userData.vehiclePos,l.uniforms.flatten=ge.userData.flatten,l.vertexShader=l.vertexShader.replace("#include <common>","#include <common>"+Qu),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",""+Xu),l.fragmentShader=l.fragmentShader.replace("#include <common>","#include <common>"+Yu),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",qu),l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",Ku),l.fragmentShader=l.fragmentShader.replace("#include <lights_lambert_pars_fragment>",mn),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",vn),l.fragmentShader=l.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const us=new K({map:de,normalMap:de,alphaTest:.5,side:Lt,normalMapType:Ss,forceSinglePass:!0,customProgramCacheKey:()=>"barrier"});us.onBeforeCompile=Fs();us.needsCameraPosition=!0;const So=new K({map:de,flatShading:!0});So.onBeforeCompile=Fs();So.needsCameraPosition=!0;const fs=new K({map:de,normalMap:de,flatShading:!0,alphaTest:.25,side:Lt,normalMapType:Ss,forceSinglePass:!0,customProgramCacheKey:()=>"fence"});fs.onBeforeCompile=Fs();fs.needsCameraPosition=!0;const ps=new K({map:de,flatShading:!0});ps.onBeforeCompile=Fs();ps.needsCameraPosition=!0;const wn=new K({map:de,flatShading:!0,side:Lt});wn.needsCameraPosition=!0;const _s={white:new K({color:16777215,emissive:16777215,emissiveIntensity:.2}),black:new K({color:3355443,flatShading:!0}),reflect:new K({color:16720418,emissive:16720418,emissiveIntensity:.2})};_s.white.needsCameraPosition=!0;_s.black.needsCameraPosition=!0;_s.reflect.needsCameraPosition=!0;const bo=new K({map:U(wr,4,pt),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:U(wr,4),emissiveIntensity:0});bo.onBeforeCompile=l=>(l.fragmentShader=l.fragmentShader.replace("#include <lights_pars_begin>",nf),l);bo.needsCameraPosition=!0;const xn=new K({map:de,color:12303291,flatShading:!0});xn.needsCameraPosition=!0;const Af=new Te({color:0,transparent:!0,opacity:.4});Af.needsCameraPosition=!0;const mf=""+new URL("../assets/tree_01.49d91079.obj",import.meta.url).href,vf=""+new URL("../assets/tree_02.52e8a31e.obj",import.meta.url).href,wf=""+new URL("../assets/tree_03.2a55062c.obj",import.meta.url).href,xf=""+new URL("../assets/tree_04.53747223.obj",import.meta.url).href,Sf=""+new URL("../assets/tree_05.d68751e5.obj",import.meta.url).href,bf=""+new URL("../assets/tree_06.693be0d9.obj",import.meta.url).href,yf=""+new URL("../assets/tree_07.1fef5d95.obj",import.meta.url).href,Df=""+new URL("../assets/tree_08.b8bd204c.obj",import.meta.url).href,Mf="data:model/obj;base64,IyBCbGVuZGVyIHYyLjkyLjAgT0JKIEZpbGU6ICcnCiMgd3d3LmJsZW5kZXIub3JnCm10bGxpYiB2ZXJnZW1hcmtlci5tdGwKbyB2ZXJnZW1hcmtlcl9ibGFjawp2IDAuMDU0OTMyIDAuNzY1NzEyIC0wLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjc2NTcxMiAtMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC43NjU3MTIgMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjc2NTcxMiAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjUzMzY4NyAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjUzMzY4NyAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjUzMzY4NyAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjUzMzY4NyAwLjAyMDY0MAp2IDAuMDU0OTMyIC0wLjE3NDk0NiAwLjAyMDY0MAp2IDAuMDU0OTMyIDAuMjUxMTc1IDAuMDIwNjQwCnYgLTAuMDU0OTMyIDAuMjUxMTc1IDAuMDIwNjQwCnYgLTAuMDU0OTMyIC0wLjE3NDk0NiAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjI1MTE3NSAtMC4wMjA2NDAKdiAtMC4wNTQ5MzIgLTAuMTc0OTQ2IC0wLjAyMDY0MAp2IDAuMDU0OTMyIC0wLjE3NDk0NiAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjI1MTE3NSAtMC4wMjA2NDAKdiAwLjAzODA5NiAwLjc0ODg3NSAwLjAyMDY0MAp2IDAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnZ0IDAuNjI1MDAwIDAuNTAwMDAwCnZ0IDAuODc1MDAwIDAuNTAwMDAwCnZ0IDAuODc1MDAwIDAuNzUwMDAwCnZ0IDAuNjI1MDAwIDAuNzUwMDAwCnZ0IDAuNTUyMjI0IDAuMDAwMDAwCnZ0IDAuNjI1MDAwIDAuMDAwMDAwCnZ0IDAuNjI1MDAwIDAuMjUwMDAwCnZ0IDAuNTUyMjI0IDAuMjUwMDAwCnZ0IDAuNTUyMjI0IDAuNTAwMDAwCnZ0IDAuNTUyMjI0IDAuNzUwMDAwCnZ0IDAuMzc1MDAwIDAuNzUwMDAwCnZ0IDAuNDYzNjEyIDAuNzUwMDAwCnZ0IDAuNDYzNjEyIDEuMDAwMDAwCnZ0IDAuMzc1MDAwIDEuMDAwMDAwCnZ0IDAuMzc1MDAwIDAuMDAwMDAwCnZ0IDAuNDYzNjEyIDAuMDAwMDAwCnZ0IDAuNDYzNjEyIDAuMjUwMDAwCnZ0IDAuMzc1MDAwIDAuMjUwMDAwCnZ0IDAuMzc1MDAwIDAuNTAwMDAwCnZ0IDAuNDYzNjEyIDAuNTAwMDAwCnZ0IDAuNjE5NzE5IDAuNzg4MzEyCnZ0IDAuNTU3NTA1IDAuNzg4MzEyCnZ0IDAuNTU3NTA1IDAuOTYxNjg4CnZ0IDAuNTUyMjI0IDEuMDAwMDAwCnZ0IDAuNjE5NzE5IDAuOTYxNjg4CnZ0IDAuNjI1MDAwIDEuMDAwMDAwCnZuIDAuNTc3NCAwLjU3NzQgLTAuNTc3NAp2biAtMC41Nzc0IDAuNTc3NCAtMC41Nzc0CnZuIC0wLjU3NzQgMC41Nzc0IDAuNTc3NAp2biAwLjU3NzQgMC41Nzc0IDAuNTc3NAp2biAtMC43MDcxIC0wLjAwMDAgMC43MDcxCnZuIC0wLjcwNzEgMC4wMDAwIC0wLjcwNzEKdm4gMC43MDcxIDAuMDAwMCAtMC43MDcxCnZuIDAuNzA3MSAtMC4wMDAwIDAuNzA3MQp2biAwLjAwMDAgLTAuMDAwMCAxLjAwMDAKdXNlbXRsIERlZmF1bHRfT0JKCnMgMQpmIDEvMS8xIDIvMi8yIDMvMy8zIDQvNC80CmYgNS81LzUgMy82LzMgMi83LzIgNi84LzYKZiA3LzkvNyAxLzEvMSA0LzQvNCA4LzEwLzgKZiA2LzgvNiAyLzcvMiAxLzEvMSA3LzkvNwpmIDkvMTEvOCAxMC8xMi84IDExLzEzLzUgMTIvMTQvNQpmIDEyLzE1LzUgMTEvMTYvNSAxMy8xNy82IDE0LzE4LzYKZiAxNS8xOS83IDE2LzIwLzcgMTAvMTIvOCA5LzExLzgKZiAxNC8xOC82IDEzLzE3LzYgMTYvMjAvNyAxNS8xOS83CmYgMTcvMjEvOSAxOC8yMi85IDgvMTAvOCA0LzQvNApmIDE4LzIyLzkgMTkvMjMvOSA1LzI0LzUgOC8xMC84CmYgMjAvMjUvOSAxNy8yMS85IDQvNC80IDMvMjYvMwpmIDE5LzIzLzkgMjAvMjUvOSAzLzI2LzMgNS8yNC81Cm8gdmVyZ2VtYXJrZXJfd2hpdGVfYm9sbGFyZC4wMDEKdiAtMC4wNTQ5MzIgMC4yNTExNzUgLTAuMDIwNjQwCnYgLTAuMDU0OTMyIDAuNTMzNjg3IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuNTMzNjg3IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuMjUxMTc1IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuNTMzNjg3IDAuMDIwNjQwCnYgMC4wNTQ5MzIgMC4yNTExNzUgMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC4yNTExNzUgMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC41MzM2ODcgMC4wMjA2NDAKdnQgMC40NjM2MTIgMC4yNTAwMDAKdnQgMC41NTIyMjQgMC4yNTAwMDAKdnQgMC41NTIyMjQgMC41MDAwMDAKdnQgMC40NjM2MTIgMC41MDAwMDAKdnQgMC41NTIyMjQgMC43NTAwMDAKdnQgMC40NjM2MTIgMC43NTAwMDAKdnQgMC40NjM2MTIgMC4wMDAwMDAKdnQgMC41NTIyMjQgMC4wMDAwMDAKdnQgMC41NTIyMjQgMS4wMDAwMDAKdnQgMC40NjM2MTIgMS4wMDAwMDAKdm4gMC4wMDAwIDAuMDAwMCAtMS4wMDAwCnZuIDEuMDAwMCAtMC4wMDAwIDAuMDAwMAp2biAtMS4wMDAwIDAuMDAwMCAwLjAwMDAKdm4gMC4wMDAwIC0wLjAwMDAgMS4wMDAwCnVzZW10bCBEZWZhdWx0X09CSgpzIDEKZiAyMS8yNy8xMCAyMi8yOC8xMCAyMy8yOS8xMCAyNC8zMC8xMApmIDI0LzMwLzExIDIzLzI5LzExIDI1LzMxLzExIDI2LzMyLzExCmYgMjcvMzMvMTIgMjgvMzQvMTIgMjIvMjgvMTIgMjEvMjcvMTIKZiAyNi8zMi8xMyAyNS8zMS8xMyAyOC8zNS8xMyAyNy8zNi8xMwpvIHZlcmdlbWFya2VyX3JlZmxlY3QKdiAwLjAzODA5NiAwLjU1MDUyMyAwLjAyMDY0MAp2IDAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnZ0IDAuNTU3NTA1IDAuNzg4MzEyCnZ0IDAuNjE5NzE5IDAuNzg4MzEyCnZ0IDAuNjE5NzE5IDAuOTYxNjg4CnZ0IDAuNTU3NTA1IDAuOTYxNjg4CnZuIDAuMDAwMCAtMC4wMDAwIDEuMDAwMAp1c2VtdGwgRGVmYXVsdF9PQkoKcyAxCmYgMjkvMzcvMTQgMzAvMzgvMTQgMzEvMzkvMTQgMzIvNDAvMTQK",H={},Di=100,Lf={maxCached:32,spiralise:!0};class Rf{constructor(i={}){o(this,"cache",{});o(this,"cacheAccess",{});o(this,"cacheLayer",{});o(this,"cacheCount",0);o(this,"tileSize",3e3);o(this,"curLayer",[0,0]);o(this,"config",{maxCached:32,spiralise:!0});this.config={...Lf,...i}}destroy(){delete this.cache,delete this.cacheAccess,delete this.cacheLayer}getXZ(i,e){return 0}getXZLayer(i,e,s){return 0}getCurvature(i,e){return H.hAvg=0,H.hAvg+=this.getXZ(i+5,e,1),H.hAvg+=this.getXZ(i-5,e,1),H.hAvg+=this.getXZ(i,e+5,1),H.hAvg+=this.getXZ(i,e-5,1),H.hAvg=H.hAvg/4-this.getXZ(i,e),H.hAvg*.005}generateTile(i,e){return[]}getTile(i,e){return H.bx=i+Di,H.bz=e+Di,this.cache[H.bx]&&this.cache[H.bx][H.bz]?this.cacheAccess[H.bx][H.bz]=2:this.cacheTile(i,e),this.cache[H.bx][H.bz]}cacheTile(i,e){this.cacheCount++,this.pruneCache();let s=this.generateTile(i,e);H.bx=i+Di,H.bz=e+Di,H.bx in this.cache||(this.cache[H.bx]={},this.cacheLayer[H.bx]={},this.cacheAccess[H.bx]={}),this.cache[H.bx][H.bz]=s,this.cacheLayer[H.bx][H.bz]=this.curLayer[i<0?0:1],this.cacheAccess[H.bx][H.bz]=2}customPruneTile(i,e){}pruneCache(i=!1){if(!(!i&&this.cacheCount<=this.config.maxCached))for(H.ox in this.cache){for(H.oz in this.cache[H.ox])if(this.cacheAccess[H.ox][H.oz]<0||this.cacheLayer[H.ox][H.oz]!==this.curLayer[H.ox<Di?0:1]){if(delete this.cache[H.ox][H.oz],delete this.cacheAccess[H.ox][H.oz],delete this.cacheLayer[H.ox][H.oz],this.customPruneTile(H.ox,H.oz),this.cacheCount--,!i&&this.cacheCount<=this.config.maxCached)break}else this.cacheAccess[H.ox][H.oz]-=1;if(Object.keys(this.cache[H.ox]).length==0&&(delete this.cache[H.ox],delete this.cacheAccess[H.ox],delete this.cacheLayer[H.ox]),!i&&this.cacheCount<=this.config.maxCached)break}}incrementLayer(i,e=!1){!this.config.spiralise&&!e||(this.curLayer[i]++,this.pruneCache(!0))}setLayers(i,e=!1){!this.config.spiralise&&!e||(this.curLayer[0]=i[0],this.curLayer[1]=i[1],this.pruneCache(!0))}cosLerp(i){return Math.cos(i*3.1415)+1}sharpLerp(i){return 1-i}smoothLerp(i){return-1*(3-i*2)*i*i+1}smootherLerp(i){return-1*((i*(i*6-15)+10)*i*i*i)+1}sharpLerpAB(i,e,s){return(e-i)*s+i}smootherLerpAB(i,e,s){return(e-i)*((s*(s*6-15)+10)*s*s*s)+i}}var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Sn={exports:{}};(function(l,i){(function(e,s){l.exports=s()})(Cf,function(){return e.importState=function(a){var t=new e;return t.importState(a),t},e;function e(){return function(a){var t=0,r=0,c=0,g=1;a.length==0&&(a=[+new Date]);var f=s();t=f(" "),r=f(" "),c=f(" ");for(var x=0;x<a.length;x++)t-=f(a[x]),t<0&&(t+=1),r-=f(a[x]),r<0&&(r+=1),c-=f(a[x]),c<0&&(c+=1);f=null;var w=function(){var S=2091639*t+g*23283064365386963e-26;return t=r,r=c,c=S-(g=S|0)};return w.next=w,w.uint32=function(){return w()*4294967296},w.fract53=function(){return w()+(w()*2097152|0)*11102230246251565e-32},w.version="Alea 0.9",w.args=a,w.exportState=function(){return[t,r,c,g]},w.importState=function(S){t=+S[0]||0,r=+S[1]||0,c=+S[2]||0,g=+S[3]||0},w}(Array.prototype.slice.call(arguments))}function s(){var a=4022871197,t=function(r){r=r.toString();for(var c=0;c<r.length;c++){a+=r.charCodeAt(c);var g=.02519603282416938*a;a=g>>>0,g-=a,g*=a,a=g>>>0,g-=a,a+=g*4294967296}return(a>>>0)*23283064365386963e-26};return t.version="Mash 0.9",t}})})(Sn);var If=Sn.exports;const Ff=Tf(If),_f=Math.PI*2,y={};class bn extends Rf{constructor(e={}){super(e);o(this,"config",{seed:"a",scale:1,resolution:5,depth:3,upscale:3,offset:0,maxCached:32,tileSize:3e3});o(this,"protoTile",null);this.config={...this.config,...e},this.tileSize=this.config.tileSize}getXZ(e,s,a=null){y.tx=e/this.tileSize,y.tz=s/this.tileSize,y.ox=Math.floor(y.tx),y.oz=Math.floor(y.tz),y.px=y.tx-y.ox,y.pz=y.tz-y.oz,y.tile=this.getTile(y.ox,y.oz),a=a||this.config.depth,y.depth=0,y.d=0,y.h=0,y.sq=this.config.resolution,y.sqb=y.sq-1,y.heightFactor=1;for(y.layer of y.tile){if(y.depth==a)break;y.sx=y.px*y.sq,y.sz=y.pz*y.sq,y.ix=Math.floor(y.sx),y.ix1=y.ix+1,y.iz=Math.floor(y.sz),y.iz1=y.iz+1,y.qx=y.sx-y.ix,y.qz=y.sz-y.iz,y.n0=this.dotGridGradient(y.layer,y.ix,y.iz,y.sx,y.sz),y.ix1<y.sq?y.n1=this.dotGridGradient(y.layer,y.ix1,y.iz,y.sx,y.sz):y.n1=this.dotGridGradient(this.getTile(y.ox+1,y.oz)[y.depth],0,y.iz,y.sx-y.sq,y.sz),y.int0=this.smootherLerp(y.n0,y.n1,y.qx),y.iz1<y.sq?(y.n0=this.dotGridGradient(y.layer,y.ix,y.iz1,y.sx,y.sz),y.ix1<y.sq?y.n1=this.dotGridGradient(y.layer,y.ix1,y.iz1,y.sx,y.sz):y.n1=this.dotGridGradient(this.getTile(y.ox+1,y.oz)[y.depth],0,y.iz1,y.sx-y.sq,y.sz)):(y.n0=this.dotGridGradient(this.getTile(y.ox,y.oz+1)[y.depth],y.ix,0,y.sx,y.sz-y.sq),y.ix1<y.sq?y.n1=this.dotGridGradient(this.getTile(y.ox,y.oz+1)[y.depth],y.ix1,0,y.sx,y.sz-y.sq):y.n1=this.dotGridGradient(this.getTile(y.ox+1,y.oz+1)[y.depth],0,0,y.sx-y.sq,y.sz-y.sq)),y.int1=this.smootherLerp(y.n0,y.n1,y.qx),y.heightFactor=this.config.resolution/y.sq,y.h+=this.smootherLerp(y.int0,y.int1,y.qz)*y.heightFactor,y.sq=this.getNextDepthResolution(y.sq,y.depth),y.depth++}return y.h*this.config.scale+this.config.offset}smootherLerp(e,s,a){return(s-e)*((a*(a*6-15)+10)*a*a*a)+e}generateTile(e,s){if(this.config.repeated&&this.protoTile)return this.protoTile;let a,t,r,c,g;this.config.repeated?g=new window.alea(this.config.seed):g=new window.alea(this.config.seed+"#"+this.curLayer[e<0?0:1]+"#"+e+"#"+s);let f=this.config.resolution,x=[];for(a=0;a<this.config.depth;a++){let w=[];for(t=0;t<f;t++)for(w.push([]),r=0;r<f;r++)c=g()*_f,w[t].push({x:Math.cos(c),y:Math.sin(c)});x.push(w),f=this.getNextDepthResolution(f,a)}return this.config.repeated&&(this.protoTile=x),x}getNextDepthResolution(e){return Math.round(e*this.config.upscale)}dotGridGradient(e,s,a,t,r){return y.grad=e[s][a],(t-s)*y.grad.x+(r-a)*y.grad.y}}let Dt=1e3,yn={},Dn=30,pa={},yo=400,Mn,it,Do,As,Mo=16,Aa=.4,ms=!1,ma=!0,va,kf=20,rs,Pf,Ef,Ln,ki,wa,Rn,Cn=.5,Tn=.8,In=1,Nf=.5,Of=.4,Bf=.8,Uf=1,Hf=1,Fn=0,_n=1,kn,Pn,En,fi,vs,Lo,ti,ws,Ro,Nn,On,Bn,Un,Hn,zn,Wn={},zf=30,Wf=.75,Gn=256,Vn={},jn=5e3,Gf=-.3,Vf=11,jf=4,Zf=2,Qf=1.8,Xf=.7,Yf=.7,Zn=!0,Qn=2,Xn=5e3;const Kf=[[mf,vf,wf,xf],[Sf,bf,yf,Df]];let qf=!1,xa=1e4,Jf=.8,$f=1.5,ep=.7,Sa=20,tp=40,ba=1,Yn=!1,Kn=4e3,ip=.65,sp=1,qn=!0,xs=30,ap=3,Co=4,Jn=xs/2-Co;const op={BridgeWall:0,SeaWall:1,Barrier:2,Fence:3,Drystone:4};let To=2,$n=it+To;const rp=2,el=.16,np=.38,lp=.2,hp=1.1,dp=el*2,tl=.475,cp=(1-tl)*2,gp=5;let ya=2,Da=1.5,Ma=.4,La=.2,Ra=.4,Ca=.8,up=4,il=10;const fp={VergeMarker:{src:Mf,materials:_s,retireMargin:10}};let sl=25,al=10,ol=100,pp=35,Ap=3,mp=.75,rl=!1,Ta=4,nl=[];const vp=[1,.25,0,.25,1],wp=[1,.565,.25,.0625,0,.0625,.25,.565,1];let Ia=200,Fa=1600,ll=20,hl=!1,dl=!1,cl=!1,gl=!1,ul=!1,fl=1e3,pl=150,Al=!0,ml=1,vl=!0,wl=!1;const xp=15,xl=220,Sp=xl/2,bp=.5,yp=.15,Dp=.7,Mp=(l,i)=>{let e=mi.graphics.viewDistance[l],s=mi.graphics.detail[i];Dn=e.heightmapMaxCached,Dt=e.tileSize*2,ws=i>2,Lo=Dt*fi,ti=Dt*vs,Ro=Math.sqrt(5/(ti*ti)),Mn=e.roadNodes,va=e.tileSize,rs=s.cellRes,Ln=e.lod0Horizon,ki=e.lod1Horizon,sl=ki*2,al=ki/2,Gn=s.shadowRes,wa=Math.max(1,Math.floor(s.sea.res*(va/20))),Rn=wa+1,Zn=s.trees.has3D,Qn=s.trees.typeCount,jn=e.imposterInstanceSize,Xn=e.treeInstanceSize,xs=e.maxWallLength,Jn=xs/2-Co,il=e.objectDespawnHorizon,ol=e.bridgeLookahead,rl=s.bridges.genArches,Ta=s.bridges.segments,nl=Ta==4?vp:wp,Ia=e.cloudAltitude,Fa=Math.max(Dt*2,Ia*12),ll=Math.max(20,Fa/400),Sa=s.grass.margin,ba=s.grass.density,xa=rs*rs*ba*ki*(1+Sa/12),Kn=xa*.2,Yn=i==0,fl=e.fieldMapScale,pl=e.midlineIndexMargin,yo=e.midlineFineHorizon,Al=s.fields.render,vl=s.fields.col,wl=s.fields.boundary,ml=s.fields.treeDensity,df(s),cf(e)},Lp=(l,i=null)=>{let e=mi.roadStyle[l];i?As=i:As=e.road.width,yn=e.heightmap,Vn=e.treemap,pa=e.midline,pa.fineHorizon=yo},Rp=l=>{l==Ci.AUTO?it=As:it=_i[l],ms=it<2.25,$n=To+it,Do=it/2,Mo=20-it,ms?(ya=4,Da=2.5,Ma=1,La=.5,Ra=.8,Ca=1.2,ma=!1):(ya=2,Da=1.5,Ma=.4,La=.2,Ra=.4,Ca=.8,ma=!0)},Cp=l=>{var e;let i={...mi.style[l.season].common,...mi.style[l.season][l.time][l.weather]};In=i.friction.road,Cn=i.friction.grass,Tn=i.friction.gravel,kn=i.fog.colA,Pn=i.fog.colB,En=i.fog.colC??i.fog.colB,Bn=i.water.underwater,Un=i.water.body,qn=!((e=i.effects)!=null&&e.frozenWater),fi=i.fog.near,vs=i.fog.far,Lo=Dt*fi,ti=Dt*vs,Ro=Math.sqrt(5/(ti*ti)),Nn=i.fog.hazeHeight??0,On=i.fog.hazeIntensity??0,Hn=i.colours.clear,dl=!!i.stars,cl=i.stars,gl=!!i.snow,ul=i.snow,zn=i.lights,Fn=i.surfaces.road,_n=i.surfaces.offroad,hl=i.clouds.hasClouds!==!1,Wn=i.audio,hf(l.season,i)};let Tp=mi.styleMeta.presets;const Ip=new bn({scale:5,offset:0,resolution:5,depth:2,upscale:2,tileSize:200,spiralise:!1,repeated:!0}),Fp=new bn({scale:8,offset:1,resolution:7,depth:2,upscale:3,tileSize:100,spiralise:!1,repeated:!0}),he={},_p=(l,i,e,s)=>{var t,r;he.h=0,i.h=i.n.h+i.t*(i.n.next.h-i.n.h),i.gfa=i.n.gfa+i.t*(i.n.next.gfa-i.n.gfa),i.s==Math.sign(i.g)?i.ga=Math.max(0,Math.abs(i.g)-1)/3:i.ga=0,i.w=it+Aa+.25+i.ga,i.y-=.01+.01*i.gfa,i.ga=Math.min(1,Math.max(0,i.ga))**2,i.blend=i.n.blend+i.t*(i.n.next.blend-i.n.blend),he.rm=Mo*(.4+.6*i.blend);let a=(i.d-i.w)/16;return a<0&&(a=0),a>1&&(a=1),a=(1-a)**2,a>0&&(l+=a*Ip.getXZ(e,s),i.ga>0&&(l+=Fp.getXZ(e,s)*a*i.ga)),i.d<i.w+he.rm?i.d<Do&&!i.n.bridge?i.y:(he.lt=Math.max(0,Math.min(1,(i.d-i.w)/he.rm)),he.lt=Sl(he.lt),he.h=l,he.rd=i.d-i.w,i.n.bridge&&((t=i.n.next)!=null&&t.bridge)&&(i.n.next.next.bridge?(r=i.n.prev)!=null&&r.bridge?he.lt=1:he.lt=Math.max(i.t,he.lt):he.lt=Math.max(1-i.t,he.lt),i.d<it+Aa+1&&he.h>i.y&&(he.h=i.y)),he.h*he.lt+i.y*(1-he.lt)):l},Sl=l=>l>.3333?(he.lerp=1-(l-.3333)/.6667,1-he.lerp*he.lerp*.5):l*1.5,MA=Object.freeze(Object.defineProperty({__proto__:null,get ANIMATE_WATER(){return qn},get AUDIO(){return Wn},AUDIO_WIND_SPEED:zf,AUDIO_WIND_VOL:Wf,get BARRIER_DIST(){return Ra},get BARRIER_GRADIENT_MAINT(){return Da},get BARRIER_GRADIENT_THRESHOLD(){return ya},get BARRIER_TURN_MAINT(){return La},get BARRIER_TURN_THRESHOLD(){return Ma},get BRIDGE_GEN_ARCHES(){return rl},get BRIDGE_HEIGHTS(){return nl},get BRIDGE_LOOKAHEAD(){return ol},BRIDGE_MAX_NODES:pp,BRIDGE_MIN_NODES:Ap,get BRIDGE_SEGMENTS(){return Ta},BRIDGE_WALL_HEIGHT:mp,get BUSH_INSTANCE_SIZE(){return Kn},BUSH_SPRITE_DENSITY:sp,BUSH_SPRITE_MIN_FLATNESS:ip,get CELL_RES(){return rs},CELL_SIZE:kf,get CLEAR_COL(){return Hn},get CLOUD_ALTITUDE(){return Ia},get CLOUD_RES(){return ll},get CLOUD_SCALE(){return Fa},get DRYSTONE_DIST(){return $n},DRYSTONE_GRADIENT_THRESHOLD:rp,DRYSTONE_HEIGHT:hp,DRYSTONE_MARGIN:To,DRYSTONE_SINK:lp,DRYSTONE_UV_HEIGHT:tl,DRYSTONE_UV_SCALE:gp,DRYSTONE_UV_WIDTH:cp,DRYSTONE_WIDTH:dp,DRYSTONE_WIDTH_BOTTOM:np,DRYSTONE_WIDTH_TOP:el,get FIELD_HAS_BOUNDARY(){return wl},get FIELD_HAS_COL(){return vl},get FIELD_HAS_RENDER(){return Al},get FIELD_MAP_SCALE(){return fl},FIELD_MAX_GRADE:Dp,FIELD_MAX_HEIGHT:xl,FIELD_MAX_HEIGHT_HALF:Sp,FIELD_MAX_TREE_DENSITY:yp,FIELD_MIN_HEIGHT:xp,FIELD_PROBABILITY_THRESHOLD:bp,get FIELD_TREE_DENSITY(){return ml},get FOG_COL_A(){return kn},get FOG_COL_B(){return Pn},get FOG_COL_C(){return En},get FOG_DENSITY(){return Ro},get FOG_EXP2(){return ws},get FOG_FAR(){return ti},get FOG_FAR_FACTOR(){return vs},get FOG_HAZE_HEIGHT(){return Nn},get FOG_HAZE_INTENSITY(){return On},get FOG_NEAR(){return Lo},get FOG_NEAR_FACTOR(){return fi},FOLIAGE_SPRITE_MIN_FLATNESS:ep,get FWD_VIEW_DISTANCE(){return Dt},GRASS_BOUNCE:Of,get GRASS_FRICTION(){return Cn},get GRASS_SPRITE_DENSITY(){return ba},get GRASS_SPRITE_INSTANCE_SIZE(){return xa},get GRASS_SPRITE_MARGIN(){return Sa},GRASS_SPRITE_MIN_ELEVATION:$f,GRASS_SPRITE_SCALE:Jf,GRASS_SPRITE_SINK_FACTOR:tp,GRAVEL_BOUNCE:Bf,get GRAVEL_FRICTION(){return Tn},get HAS_CLOUDS(){return hl},get HAS_SNOW(){return gl},get HAS_STARS(){return dl},get HEIGHTMAP(){return yn},get HEIGHTMAP_MAX_CACHED(){return Dn},ICE_BOUNCE:Hf,ICE_FRICTION:Nf,get LIGHTS(){return zn},get LOD_0_HORIZON(){return Ln},get LOD_1_HORIZON(){return ki},get MAX_WALL_LENGTH(){return xs},get MIDLINE(){return pa},get MIDLINE_FINE_HORIZON(){return yo},get MIDLINE_INDEX_MARGIN(){return pl},MIN_WALL_GAP:Co,MIN_WALL_LENGTH:ap,get OBJECT_DESPAWN_MARGIN(){return il},OBJECT_LIBRARY:fp,get OFFROAD_SURFACE(){return _n},PRESETS:Tp,ROAD_BOUNCE:Uf,get ROAD_FRICTION(){return In},get ROAD_IS_SINGLE_TRACK(){return ms},get ROAD_MARGIN(){return Mo},get ROAD_NODES(){return Mn},ROAD_SIDING:Aa,get ROAD_SURFACE(){return Fn},get ROAD_WIDTH(){return it},get ROAD_WIDTH_AUTO(){return As},get ROAD_WIDTH_HALF(){return Do},get SEAWALL_DIST(){return Ca},SEAWALL_ELEV:up,get SEA_RES(){return wa},get SEA_RES_1(){return Rn},get SHADOW_RES(){return Gn},get SHOW_CATS_EYES(){return ma},SHOW_GRASS:qf,get SIGN_LOOKAHEAD(){return sl},get SIGN_RETIRE_HORIZON(){return al},get SKIP_FOLIAGE(){return Yn},get SNOW_CONFIG(){return ul},get STAR_CONFIG(){return cl},TILE_LOOKAHEAD_HORIZON:Pf,get TILE_SIZE(){return va},TILE_STAGE_HORIZON:Ef,get TREEMAP(){return Vn},get TREE_HAS_3D(){return Zn},TREE_MIN_ELEV:Zf,TREE_MIN_FLATNESS:Xf,TREE_MIN_FLATNESS_FAR:Yf,get TREE_MODEL_INSTANCE_SIZE(){return Xn},TREE_OBJECTS:Kf,TREE_ROAD_MARGIN:Qf,get TREE_SPRITE_INSTANCE_SIZE(){return jn},TREE_SPRITE_OFFSET:Gf,TREE_SPRITE_SCALE:Vf,get TREE_TYPE_COUNT(){return Qn},TREE_VARIANT_COUNT:jf,get UNDERWATER_COL(){return Bn},get UNDERWATER_COL_SURFACE(){return Un},get WALL_LENGTH_BACKFILL(){return Jn},WallType:op,getRoadBlendedHeight:_p,loadAestheticSettings:Cp,loadGraphicsSettings:Mp,loadRoadWidth:Rp,loadWorldSettings:Lp,roadLerp:Sl},Symbol.toStringTag,{value:"Module"}));new Te({color:110832,fog:!1,depthTest:!1});const kp=0,hi=500,es=2500,Mi=1900,Pp=20,bt=7,Ep=150,ts=Math.floor(bt/2),Np=40;let Li,ta;const Op=100,is=new m(1,5,1),_a={seed:1,feelDist:10,feelAng:.463,maxTurnDelta:.7,nodeSpacing:10,panicDist:10,distRange:0,testDist:20,minElev:2,maxGrad:.18,isStraight:!1,maxBridgeNodes:35,minBridgeNodes:3,minStartElev:10,maxStartElev:180,genRadius:9e3,genRadiusMargin:4e3,genMinRadius:5e3,curvatureHeightFactor:3,minFineSegs:1,roadSink:.2,squared:!1,smoothFactor:1,fineHorizon:400,restartMargin:200,direction:null,hasSmoothing:!0,smoothingStrength:1};let _={..._a};const A={vecA:new m,vecB:new m,vecC:new m},p={vecA:new m,vecB:new m,trackerDir:new m,bridgeMid:new m,bridgeTest:new m,bridgeDir:new m},Pi=[new m,new m,new m,new m],Bp=new gh(Pi,!1),Sr=1/3,Up=8;class LA{constructor(i={},e={},s,a){o(this,"E",p);o(this,"T",A);o(this,"heightmap");o(this,"rand");o(this,"prevTargetSide",0);o(this,"targetOverflow",0);o(this,"inOverflow",!1);o(this,"antiTarget",new m);o(this,"antiTargetRevert",Np);o(this,"antiTargetRange",0);o(this,"antiTargetTriggerPoint",new m);o(this,"antiTargetTriggerCount",0);o(this,"antiWeight",0);o(this,"lastResetIndex",0);o(this,"maxRetractIndex",0);o(this,"totalDA",0);o(this,"bridging",!1);o(this,"antiBridgePoint",new m);o(this,"bridge",{landing:new m,distance:0,spawnNode:null,quality:0,optionA:new m,optionB:new m,optionC:new m});o(this,"turnTrackers",[{i:0,m:15,r:15,n:null,a:3.3,da:0,o:0,toleranceFactor:1,tolerance:0,daThreshold:3.3},{i:1,m:30,r:10,n:null,a:3.3,da:0,o:.5,toleranceFactor:1,tolerance:0,daThreshold:3.3,gThreshold:20},{i:2,m:60,r:15,n:null,a:3.4,da:0,o:.75,toleranceFactor:1,tolerance:0,daThreshold:3.3,gThreshold:25},{i:3,m:120,r:20,n:null,a:3.6,da:0,o:.8,toleranceFactor:1,tolerance:0,daThreshold:3.3}]);o(this,"revertTrackerIndex",null);o(this,"accumulatedOverflow",0);o(this,"vehicleDebug",null);o(this,"antiDir",new m);o(this,"targetDir",new m(1,0,0));o(this,"midlineDir",new m);o(this,"midlineOrth",new m);o(this,"hasInitGeneration",!1);o(this,"generationResets",0);o(this,"hasInitSmoothing",!1);o(this,"hasInitDiscretisation",!1);o(this,"loaderIteration",0);o(this,"startNode",0);o(this,"loadCheckTime");o(this,"loadCheckProgress");o(this,"loadCheckCounter");o(this,"loadCheckLog",0);o(this,"generationCount",0);o(this,"headHeightmap",{prevSide:1,curSide:1,nextLayerSwitch:1,layers:[0,0]});o(this,"tailHeightmap",{prevSide:1,curSide:1,nextLayerSwitch:1,layers:[0,0]});o(this,"tVec",new m);o(this,"h1",0);o(this,"h2",0);o(this,"feelDir",new m(1,0,.5));o(this,"prevT",0);o(this,"byWater",!1);o(this,"waterFactor",0);o(this,"closestApproach",0);o(this,"trackRevertCount",0);o(this,"allowEmergencyBridge",!1);o(this,"landing",new m);o(this,"smoothWindowHead",null);o(this,"smoothMidlineHeadH",0);o(this,"doUpdate",0);o(this,"didExtend",!1);o(this,"extending",!1);o(this,"extendCount",0);if(this.E=p,this.T=A,_={..._a,...i},this.config={..._a,...i},"spiralise"in i?_.spiralise=i.spiralise:_.spiralise=!_.direction&&!_.isStraight,i.turnTrackers)for(let t=0;t<this.turnTrackers.length;t++){let r=this.turnTrackers[t],c=i.turnTrackers[t];c&&(this.turnTrackers[t]={...r,...c})}if(i.turnbackLimits)for(let t=0;t<this.turnTrackers.length&&i.turnbackLimits[t];t++)this.turnTrackers[t].a=i.turnbackLimits[t];Li=_.maxBridgeNodes*10,ta=_.minBridgeNodes*10,is.y=_.curvatureHeightFactor,e.maxCached=Up,this.heightmap=new s(e),this.heightmapLayerState=a,this.container=new we}initialise(i,e){this.deleteState(),se.add("MIDLINE: Initialising at node "+e),this.seed=i,this.startNode=e,this.targetRadius=_.genRadius,this.targetMargin=_.genRadius-_.genMinRadius,this.targetRadiusMin=this.targetRadius-this.targetMargin,this.targetRadiusMax=this.targetRadius+this.targetMargin,this.restartCount=0,this.generationResets=0,this.hasInitGeneration=!1,this.hasInitSmoothing=!1,this.hasInitDiscretisation=!1,this.loaderIteration=0,this.maxResets=kp/30+50,this.rand=new window.alea(i),this.makeHeadNode(),this.loadCheckTime=Date.now(),this.loadCheckProgress=0,this.loadCheckCounter=3,v.vehicleNode=v.tail,v.vehicleIndex=v.vehicleNode.i}load(){if(Date.now()-this.loadCheckTime>2e3){if(v.tail.i-this.loadCheckProgress<50&&(this.loadCheckCounter--,se.add(" - Midline failing to progress; tail at "+v.tail.i+", last check "+this.loadCheckProgress),this.loadCheckCounter<=0)){let e=ir();throw Le.set("seed",Ka(),!0),location.hash=ir(),new Error("Failed to generate road "+e+" - please refresh to try a different seed.")}this.loadCheckTime=Date.now(),this.loadCheckProgress=v.tail.i}if(v.tail.i<this.startNode+es)return this.update(),v.tail.i>this.loadCheckLog&&v.tail.i%500==0&&(this.loadCheckLog=v.tail.i,console.log("Midline loaded to "+v.tail.i/100+"km")),v.vehicleNode.i<this.startNode&&v.tail.i-v.vehicleNode.i>Mi&&(v.vehicleNode=v.vehicleNode.next,v.vehicleIndex=v.vehicleNode.i),!1;for(;v.vehicleNode.i<this.startNode;)v.vehicleNode=v.vehicleNode.next;return v.vehicleIndex=v.vehicleNode.i,!0}restartGeneration(){this.restartCount++,this.accumulatedOverflow=0,this.targetOverflow=0,this.antiTargetRange=0,this.inOverflow=!1,this.generationCount++,this.makeHeadNode()}makeHeadNode(){this.deleteState();let i=this.getNextStartingPose();v.head?(v.head.i=-5,v.head.p.copy(i.position),v.head.n.x=-i.vector.z,v.head.n.z=i.vector.x,v.head.a=i.heading,v.head.da=0,v.head.t=0,v.head.g=0,v.head.gfa=0,v.head.h=0,v.head.next=null,v.head.prev=null,delete v.head.dswl,delete v.head.dswr,delete v.head.lWallDist,delete v.head.rWallDist):v.head={i:-5,p:new m().copy(i.position),n:{x:-i.vector.z,z:i.vector.x},a:i.heading,da:0,t:0,g:0,gf:0,gfa:0,h:0,next:null,prev:null},v.tail=v.head,v.fineTail=v.head,v.vehicleNode=v.head,v.vehicleIndex=v.head.i,_.spiralise?(this.targetDir.copy(v.head.p).negate().normalize(),this.targetDir.set(-this.targetDir.z,0,this.targetDir.x).normalize()):_.direction?(this.targetDir.x=_.direction.x,this.targetDir.z=_.direction.z,this.targetDir.normalize()):(console.log("MIDLINE: No target direction given; aiming for origin"),this.targetDir.x=-v.head.p.x,this.targetDir.z=-v.head.p.z,this.targetDir.normalize()),this.midlineDir.set(Math.cos(v.tail.a),0,Math.sin(v.tail.a)),this.midlineOrth.set(-this.midlineDir.z,0,this.midlineDir.x),this.prevTargetSide=Math.sign(this.midlineOrth.dot(this.targetDir)*-1),this.smoothWindowHead=v.head;for(A.tracker of this.turnTrackers)A.tracker.n=v.head,A.tracker.da=0}checkUpdateHeadHeightmap(){_.spiralise&&this.headHeightmap.prevSide!==Math.sign(v.head.p.z)&&this.headHeightmap.nextLayerSwitch===Math.sign(v.head.p.x)&&(this.headHeightmap.prevSide=Math.sign(v.head.p.z),this.headHeightmap.nextLayerSwitch=Math.sign(v.head.p.x)*-1,this.headHeightmap.curSide=(this.headHeightmap.curSide+1)%2,this.headHeightmap.layers[this.headHeightmap.curSide]++,this.heightmapLayerState.set([...this.headHeightmap.layers]),se.add("MIDLINE: Incrementing head heightmap: "+this.headHeightmap.layers[0]+", "+this.headHeightmap.layers[1]+" @ node "+v.head.i+"(x "+v.head.p.x+")"))}checkUpdateTailHeightmap(){_.spiralise&&this.tailHeightmap.prevSide!==Math.sign(v.tail.p.z)&&this.tailHeightmap.nextLayerSwitch===Math.sign(v.tail.p.x)&&(this.tailHeightmap.prevSide=Math.sign(v.tail.p.z),this.tailHeightmap.nextLayerSwitch=Math.sign(v.tail.p.x)*-1,this.tailHeightmap.curSide=(this.tailHeightmap.curSide+1)%2,this.tailHeightmap.layers[this.tailHeightmap.curSide]++,this.heightmap.setLayers(this.tailHeightmap.layers))}getNextStartingPose(){let i=0,e,s,a;const t=new Ff(_.seed+""+this.generationCount);let r=!1;for(_.startPos&&this.restartCount>2&&console.log("FAILED TO GENERATE FROM START POS");;){if(_.startPos&&this.restartCount<3)console.log("Loading dedicated start pos"),console.log(_.startPos),e=_.startPos.x,a=_.startPos.z,r=!0;else if(_.spiralise){if(this.restartCount>20){console.warn("Bad starting seed; incrementing heightmap layers"),this.tailHeightmap.layers[0]++,this.tailHeightmap.layers[1]++,this.heightmap.setLayers(this.tailHeightmap.layers,!0),se.add("MIDLINE: Incrementing tail heightmap layers: "+this.tailHeightmap.layers[0]+", "+this.tailHeightmap.layers[1]),this.headHeightmap.layers[0]++,this.headHeightmap.layers[1]++,this.heightmapLayerState.set([...this.headHeightmap.layers]),se.add("MIDLINE: Incrementing head heightmap layers: "+this.headHeightmap.layers[0]+", "+this.headHeightmap.layers[1]),this.restartCount=0,i=0;continue}else this.restartCount>0&&(this.restartCount%2==1?i=_.restartMargin*Math.ceil(this.restartCount/2):i=_.restartMargin*-(this.restartCount/2));e=0,a=this.targetRadius+i}else{this.restartCount>20?(i+=t.next()*_.restartMargin,this.restartCount=0):i=t.next()*_.restartMargin;let x=t.next()*Math.PI*2;e=Math.cos(x)*i,a=Math.sin(x)*i}if(s=this.heightmap.getXZ(e,a),!r&&(s<_.minStartElev||s>_.maxStartElev)){this.restartCount++;continue}let c=this.heightmap.getXZ(e,a-10),g=this.heightmap.getXZ(e+10,a),f=this.heightmap.getXZ(e,a+10);if(_.startHeading&&this.restartCount<3)console.log("Start heading given",_.startHeading),this.tVec.set(_.startHeading.x,0,_.startHeading.z),this.tVec.normalize();else if(g-c==0||f-g==0)this.tVec.set(.99,0,.01);else{let x=(s-c)/(g-c),w=(s-g)/(f-g);if(x>=0&&x<=1)this.tVec.set(x,0,(1-x)*-1).normalize();else if(w>=0&&w<=1)this.tVec.set(1-w,0,w).normalize();else{this.restartCount++,console.log("Starting angle issue ",x,w);continue}}return this.restartCount&&se.add("MIDLINE: Start-pose attempts: "+this.restartCount),{position:{x:e,y:s,z:a},vector:{x:this.tVec.x,z:this.tVec.z},heading:Math.atan2(this.tVec.z,this.tVec.x)}}}destroy(){this.deleteState()}deleteState(){v.head&&delete v.head.next,delete v.tail,delete v.fineTail,delete v.vehicleNode,v.generation++,delete this.smoothWindowHead,this.onBridgeApproach=!1,this.bridging=!1,delete this.bridge.spawnNode,this.bridge.quality=0;for(A.t of this.turnTrackers)A.t.n=null}rebuildFine(i){for(_.fineHorizon=i,v.fineTail=v.head;v.fineTail.i<v.vehicleIndex+_.fineHorizon&&v.fineTail.i<v.tail.i-Mi;)this.extendFine()}reset(i,e){this.deleteState(),this.rand=new window.alea(i),v.head={i:-5,p:new m().copy(e.position),n:{x:-e.vector.z,z:e.vector.x},a:e.heading,da:0,t:0,c:new m,g:0,gf:0,gfa:0,h:0,ps:null,ns:null,next:null,prev:null},v.tail=v.head,v.vehicleNode=v.head,v.vehicleIndex=v.head.i,v.vehicleIndexDidChange=!0,_.spiralise?(this.targetDir.copy(v.head.p).negate().normalize(),this.targetDir.set(-this.targetDir.z,0,this.targetDir.x).normalize()):_.direction?(this.targetDir.x=_.direction.x,this.targetDir.z=_.direction.z,this.targetDir.normalize()):(console.log("MIDLINE: No target direction given; aiming for origin"),this.targetDir.x=-v.head.p.x,this.targetDir.z=-v.head.p.z,this.targetDir.normalize()),this.smoothWindowHead=v.head;for(A.tracker of this.turnTrackers)A.tracker.n=v.head,A.tracker.da=0}extendFine(){for(A.n=v.fineTail,Pi[0].copy(A.n.prev?A.n.prev.p:A.n.p),Pi[1].copy(A.n.p),Pi[2].copy(A.n.next.p),Pi[3].copy(A.n.next.next.p),A.vecA.copy(A.n.next.p).sub(A.n.p).multiply(is).normalize(),A.vecC.copy(A.n.next.next.p).sub(A.n.next.p).multiply(is).normalize(),A.n.prev?(A.vecB.copy(A.n.p).sub(A.n.prev.p).multiply(is).normalize(),A.minDot=Math.min(A.vecA.dot(A.vecB),A.vecA.dot(A.vecC)),A.minDot>1&&(A.minDot=1),A.segs=Math.ceil(1-A.vecA.dot(A.vecB))*10):A.minDot=A.vecA.dot(A.vecC),A.minDot=(1-Math.max(A.minDot,.99))*100,A.minDot=Math.sqrt(A.minDot),A.segs=Math.floor(A.minDot*10),A.segs>10&&(A.segs=10),A.segs<_.minFineSegs&&(A.segs=_.minFineSegs),A.prevFine=A.n,A.n.fs=A.segs,A.i=1;A.i<=A.segs;A.i++)A.i<A.segs?(A.nextFine={next:A.n.next,prev:A.n,nextFine:null,prevFine:A.prevFine,p:new m,n:{x:1,z:0}},A.t=A.i/A.segs,Bp.getPoint(Sr+Sr*A.t,A.nextFine.p)):(A.nextFine=v.fineTail.next,A.nextFine.prevFine=A.prevFine),A.prevFine.nextFine=A.nextFine,A.prevFine.prevFine&&(A.pdx=A.nextFine.p.x-A.prevFine.prevFine.p.x,A.pdz=A.nextFine.p.z-A.prevFine.prevFine.p.z,A.pdxz=Math.sqrt(A.pdx*A.pdx+A.pdz*A.pdz),A.prevFine.n.x=-A.pdz/A.pdxz,A.prevFine.n.z=A.pdx/A.pdxz),A.prevFine=A.nextFine;v.fineTail=v.fineTail.next}extendMidline(){var e,s;this.didExtend=!0,v.tail.i>es&&v.tail.i-v.vehicleIndex<Mi&&!this.allowEmergencyBridge&&!this.bridging&&(this.allowEmergencyBridge=!0),A.feelDist=_.feelDist*(1+this.waterFactor),A.feelL=this.heightmap.getMidlineXZ(Math.cos(v.tail.a-_.feelAng)*A.feelDist+v.tail.p.x,Math.sin(v.tail.a-_.feelAng)*A.feelDist+v.tail.p.z,this.heightmap.midlineDepth),A.feelR=this.heightmap.getMidlineXZ(Math.cos(v.tail.a+_.feelAng)*A.feelDist+v.tail.p.x,Math.sin(v.tail.a+_.feelAng)*A.feelDist+v.tail.p.z,this.heightmap.midlineDepth),A.feelA=this.heightmap.getMidlineXZ(v.tail.p.x,v.tail.p.z,this.heightmap.midlineDepth),A.feelA=Math.max(A.feelA,_.minElev),this.waterFactor=0,this.byWater=!1,A.feelR<_.minElev*2?this.byWater=!0:A.feelL<_.minElev*2&&(this.byWater=!0),A.feelAvg=(A.feelR+A.feelL)/2,A.feelAvg<_.minElev*3&&(A.feelAvg>_.minElev?this.waterFactor=1-(A.feelAvg-_.minElev)/(_.minElev*2):this.waterFactor=1),A.feelDif=(A.feelR-A.feelL)/2,A.gradLat=(A.feelL-A.feelR)/A.feelDist,A.gradLat/=_.maxGrad,A.gradLon=(A.feelAvg-A.feelA)/A.feelDist,A.gradLon/=_.maxGrad,A.bT=0,A.feelDif!==0&&(A.bT=(A.feelAvg-A.feelA)/A.feelDif),A.bT=Math.max(Math.min(A.bT,1),-1),this.midlineDir.set(Math.cos(v.tail.a),0,Math.sin(v.tail.a)),this.midlineOrth.set(-this.midlineDir.z,0,this.midlineDir.x),p.targetDot=Math.max(Math.min(1,this.midlineDir.dot(this.targetDir)),-1),p.targetSide=Math.sign(this.midlineOrth.dot(this.targetDir)*-1)||this.prevTargetSide,p.targetSide==this.prevTargetSide&&this.targetOverflow>1.5&&(p.targetSide==1?p.targetSide=-2:p.targetSide=2),p.targetSide!=this.prevTargetSide?(p.targetSide>this.prevTargetSide?this.prevT<0?(this.targetOverflow+=this.prevT,this.inOverflow&&this.targetOverflow<=0&&(this.targetOverflow=.01),this.targetOverflow>0?(p.targetSide=this.prevTargetSide,p.targetDot=-1):this.targetOverflow=0):(this.targetOverflow+=this.prevT,p.targetSide=this.prevTargetSide,p.targetDot=-1):this.prevT>0?(this.targetOverflow-=this.prevT,this.inOverflow&&this.targetOverflow<=0&&(this.targetOverflow=.01),this.targetOverflow>0?(p.targetSide=this.prevTargetSide,p.targetDot=-1):this.targetOverflow=0):(this.targetOverflow-=this.prevT,p.targetSide=this.prevTargetSide,p.targetDot=-1),this.accumulatedOverflow+=this.targetOverflow):(this.targetOverflow=0,this.accumulatedOverflow>0&&(this.accumulatedOverflow-=3,this.accumulatedOverflow<0&&(this.accumulatedOverflow=0))),this.inOverflow=this.targetOverflow>0,this.prevTargetSide=p.targetSide,p.targetAng=Math.acos(p.targetDot),A.gradLeft=(A.feelL-A.feelA)/A.feelDist/_.maxGrad,A.gradRight=(A.feelR-A.feelA)/A.feelDist/_.maxGrad,A.maxT=1,A.minT=-1,A.gradLeftAbs=Math.abs(A.gradLeft),A.gradRightAbs=Math.abs(A.gradRight),(A.gradLeftAbs>1||A.gradRightAbs>1)&&(A.gradDif=(A.gradLeft-A.gradRight)/2,A.gradAvg=(A.gradLeft+A.gradRight)/2,A.gradLeft>1&&A.gradRight>1||A.gradLeft<-1&&A.gradRight<-1?A.gradLeftAbs<A.gradRightAbs?(A.maxT=1,A.minT=1):(A.maxT=-1,A.minT=-1):(A.gradLeftAbs>1&&(A.gradLeft<0?A.maxT=(1+A.gradAvg)/Math.abs(A.gradDif):A.maxT=(1-A.gradAvg)/Math.abs(A.gradDif)),A.gradRightAbs>1&&(A.gradRight<0?A.minT=(1+A.gradAvg)/Math.abs(A.gradDif):A.minT=(1-A.gradAvg)/Math.abs(A.gradDif),A.minT*=-1))),A.gradAvg=(Math.abs(A.gradLat)+Math.abs(A.gradLon))/2,A.maxDif=_.maxTurnDelta+Math.abs(A.gradAvg)*.5,A.maxT>this.prevT?A.maxT=Math.min(A.maxT,this.prevT+A.maxDif):A.maxT=Math.max(A.maxT,this.prevT-A.maxDif),A.minT<this.prevT?A.minT=Math.max(A.minT,this.prevT-A.maxDif):A.minT=Math.min(A.minT,this.prevT+A.maxDif),this.byWater&&(A.gradLat<0?A.maxT>0&&(A.maxT*=1-this.waterFactor):A.minT<0&&(A.minT*=1-this.waterFactor)),A.bT=Math.max(Math.min(A.maxT,A.bT),A.minT),!this.bridging&&this.byWater&&(this.tVec.set(0,0,0),this.targetOverflow<=0&&A.gradLon<-.3&&Math.abs(A.gradLat)<.5?(this.tVec.x=this.midlineDir.x,this.tVec.z=this.midlineDir.z,this.tVec.normalize(),this.testForBridge(v.tail.prev,1,this.tVec),this.bridge.optionA.copy(this.landing)):this.bridge.optionA.set(0,0,0),p.bridgeSide=Math.sign(A.gradLat),p.bridgeTargetSide=1,p.bridgeSide==p.targetSide&&(p.bridgeTargetSide=-1),this.tVec.x=v.tail.prev.n.x*p.bridgeSide,this.tVec.z=v.tail.prev.n.z*p.bridgeSide,this.tVec.normalize(),p.targetDot+1*p.bridgeTargetSide>-1?(this.testForBridge(v.tail.prev,1,this.tVec),this.bridge.optionB.copy(this.landing)):this.bridge.optionB.set(0,0,0),p.targetDot+.7071*p.bridgeTargetSide>-1?(this.tVec.x+=this.midlineDir.x,this.tVec.z+=this.midlineDir.z,this.tVec.normalize(),this.testForBridge(v.tail.prev,1,this.tVec),this.bridge.optionC.copy(this.landing)):this.bridge.optionC.set(0,0,0)),A.gradLon2=A.gradLon*A.gradLon,A.gradLon2<=1?(!this.byWater||A.gradLon>0)&&(A.bT*=A.gradLon2):A.bT<0?A.bT=A.minT:A.bT=A.maxT,A.bT=Math.max(Math.min(A.maxT,A.bT),A.minT),this.antiWeight=0,this.antiTargetRange>0&&(p.d=v.tail.p.x-this.antiTarget.x,p.d=p.d*p.d+(v.tail.p.z-this.antiTarget.z)*(v.tail.p.z-this.antiTarget.z),this.antiDir.set(this.antiTarget.x-v.tail.p.x,0,this.antiTarget.z-v.tail.p.z),this.antiDir.normalize(),p.antiDot=this.midlineDir.dot(this.antiDir),p.d<this.antiTargetRange?(this.antiWeight=1-p.d/this.antiTargetRange,p.antiSide=this.midlineOrth.dot(this.antiDir),p.antiRedirect=_.feelAng*2*p.antiSide,p.antiAdjust=(p.antiDot+1)/2,this.antiWeight*=p.antiAdjust,p.antiRedirect=Math.max(Math.min(A.maxT,p.antiRedirect),A.minT),A.bT=this.antiWeight*p.antiRedirect+(1-this.antiWeight)*A.bT):p.antiDot<-.707&&(this.antiTargetRange=0,this.revertTrackerIndex=null,this.trackRevertCount=0,this.antiTargetTriggerCount=0,this.allowEmergencyBridge=!1)),p.targetAdjust=(1-(p.targetDot+1)/2)*(1-this.waterFactor*this.waterFactor),p.targetAdjust*=1-this.antiWeight,p.targetRedirect=p.targetAng*p.targetSide/_.feelAng,p.targetRedirect=Math.max(Math.min(A.maxT,p.targetRedirect),A.minT),A.bT=p.targetAdjust*p.targetRedirect+(1-p.targetAdjust)*A.bT,p.violatedOverflow=(this.accumulatedOverflow>Ep||this.targetOverflow>3)&&!this.bridging,p.shouldBridge=!1,!this.bridging&&this.bridge.spawnNode&&(p.bridgeRevertNodes=v.tail.i-this.bridge.spawnNode.i,p.bridgeRevertNodes>hi&&this.resetBridgeState(),p.bridgeQualityThreshold=p.targetDot<0?.5+p.targetDot/2:.5+p.targetDot*.25,p.bridgeQualityThreshold-=this.antiTargetTriggerCount*.1,this.targetOverflow>0&&(p.bridgeQualityThreshold=0),p.bridgeRevertMinNodes=(1-this.bridge.quality)*20,p.bridgeRevertMaxNodes=(1-p.bridgeQualityThreshold)*150,p.shouldBridge=!this.bridging&&this.bridge.quality>=p.bridgeQualityThreshold&&p.bridgeRevertNodes>=p.bridgeRevertMinNodes&&p.bridgeRevertNodes<=p.bridgeRevertMaxNodes),p.violatedTurnback=!1;for(p.tracker of this.turnTrackers)if(p.tracker.da+=v.tail.da,p.tracker.n.i<=v.tail.i-p.tracker.m&&(p.tracker.da-=p.tracker.n.da,p.tracker.n=p.tracker.n.next),p.tracker.daThreshold=p.tracker.a,Math.abs(p.tracker.da)>p.tracker.daThreshold&&(p.trackerDir.copy(v.tail.p).sub(p.tracker.n.p).normalize(),p.tracker.targetDot=p.trackerDir.dot(this.targetDir),p.tracker.daThreshold=p.tracker.a,p.tracker.tolerance=(p.tracker.targetDot+p.targetDot)/2,((p.targetDot<0||p.tracker.targetDot<0)&&this.byWater||this.targetOverflow>0)&&(p.tracker.tolerance=0),p.tracker.tolerance>0&&(p.tracker.daThreshold=p.tracker.a+p.tracker.tolerance*p.tracker.toleranceFactor)),Math.abs(p.tracker.da)>p.tracker.daThreshold||p.shouldBridge||p.tracker.gThreshold&&Math.abs(v.tail.g)>p.tracker.gThreshold||Math.abs(A.gradLon)>5){this.trackerViolation=p.tracker.i+": "+(Math.abs(p.tracker.da)/p.tracker.a*100).toFixed(1)+"%, "+(p.targetDot.toFixed(1)+" vs "+p.tracker.o),p.violatedTurnback=!0;break}if(!_.isStraight&&(p.violatedTurnback||p.shouldBridge||p.violatedOverflow)){if(this.bridging&&(p.shouldBridge=!1,this.bridging=!1,this.antiBridgePoint.copy(this.bridge.landing),this.resetBridgeState()),p.revertDistance=0,p.violatedTurnbackMulti=!1,this.didExtend=!1,p.violatedTurnback?this.lastResetIndex>0&&Math.abs(this.lastResetIndex-v.tail.i)<p.tracker.m*2||this.revertTrackerIndex==p.tracker.i&&this.antiWeight>0?(p.violatedTurnbackMulti=!0,p.revertDistance=Math.max(p.tracker.m,this.antiTargetRevert+p.tracker.r*(this.antiTargetTriggerCount+1)),v.tail.i-p.revertDistance<this.maxRetractIndex&&(p.revertDistance=v.tail.i-this.maxRetractIndex+(this.antiTargetTriggerCount+1))):p.revertDistance=p.tracker.m:p.violatedOverflow&&(p.revertDistance=this.antiTargetRevert+25,p.revertDistance>hi&&(p.revertDistance=hi),p.revertDistance=Math.max(50,p.revertDistance)),p.shouldBridge||!this.bridging&&this.bridge.spawnNode&&this.bridge.quality>0&&p.bridgeRevertNodes<p.revertDistance?(this.bridging=!0,this.onBridgeApproach=!0,this.bridgeApproachFactor=1,this.onBridgeDismount=!1,this.improveBridgeStartNode(),this.bridge.landing.y=this.bridge.spawnNode.p.y,this.bridge.height=this.bridge.landing.y,this.revertTrackerIndex=null,this.antiTargetRange=0,this.antiTargetTrigger=v.tail.i,p.revertDistance=v.tail.i-this.bridge.spawnNode.i,p.maxRevert=!1):p.violatedOverflow?(this.antiTargetRevert+=25,this.antiTargetRevert>hi&&(p.maxRetract=!0,this.antiTargetRevert=hi),p.revertDistance=Math.max(50,this.antiTargetRevert),this.antiTarget.lerp(v.tail.p,1/(this.antiTargetTriggerCount+1)),this.allowEmergencyBridge=!0):(this.antiTargetTriggerPoint.copy(v.tail.p),p.violatedTurnbackMulti?(this.antiTargetTriggerCount++,this.antiTargetRevert=Math.max(p.tracker.m,this.antiTargetRevert+p.tracker.r*this.antiTargetTriggerCount),v.tail.i-this.antiTargetRevert<this.maxRetractIndex?(this.antiTarget.lerp(v.tail.p,this.rand()),this.antiTargetRevert=v.tail.i-this.maxRetractIndex+this.antiTargetTriggerCount,this.allowEmergencyBridge=!0,p.maxRevert=!0):this.antiTarget.lerp(v.tail.p,1/(this.antiTargetTriggerCount+1)),p.revertDistance=this.antiTargetRevert):(this.revertTrackerIndex=p.tracker.i,this.antiTarget.copy(v.tail.p).add(p.tracker.n.p).multiplyScalar(.5),this.antiTargetRevert=p.tracker.m,this.antiTargetTriggerPoint.copy(this.antiTarget),this.antiTargetTriggerCount=0,p.revertDistance=this.antiTargetRevert,p.maxRevert=!1)),p.resetIndex=v.tail.i-p.revertDistance,p.resetIndex<v.head.i+bt)return this.restartGeneration(),!1;for(;v.tail.i>p.resetIndex;){if(!v.tail.bridge&&((e=v.tail.prev)!=null&&e.bridge)){for(p.bn=v.tail.prev;(s=p.bn)!=null&&s.bridge;)p.bn=p.bn.prev;if(p.bn.i<p.resetIndex)break;this.antiBridgePoint.copy(v.tail.p)}if(v.tail.prev==null||v.tail.i-v.head.i<bt||v.tail.d>0&&v.tail.gfa<.1&&Math.abs(v.tail.g)<.1&&Math.abs(v.tail.i-this.lastResetIndex)>this.antiTargetRevert/4)break;v.tail.o&&(v.tail.o<0?this.accumulatedOverflow+=v.tail.o:this.accumulatedOverflow-=v.tail.o),this.totalDA-=Math.abs(v.tail.da),v.tail=v.tail.prev,delete v.tail.next,v.tail.next=null}if(this.smoothWindowHead.i>v.tail.i-bt)for(p.startI=0,this.smoothWindowHead.i<=v.tail.i?p.startI=Math.max(0,v.tail.i-this.smoothWindowHead.i):(this.smoothWindowHead=v.tail,this.smoothWindowHead.p.y+=this.smoothWindowHead.h),p.i=p.startI;p.i<=bt;p.i++)this.smoothWindowHead.prev&&(this.smoothWindowHead=this.smoothWindowHead.prev,this.smoothWindowHead.p.y+=this.smoothWindowHead.h);if(this.bridging||(this.antiTargetRange=this.antiTarget.distanceToSquared(v.tail.p)*4,this.lastResetIndex=v.tail.i),!this.bridging&&this.bridge.spawnNode&&this.bridge.spawnNode.i>v.tail.i&&this.resetBridgeState(),v.vehicleIndex>v.tail.i)return console.error("Midline has somehow reverted behind car?"),console.error("Vehicle index, tail index:",v.vehicleIndex,v.tail.i),v.vehicleIndex=v.tail.i,v.vehicleNode=v.tail,this.restartGeneration(),!1;this.hasInitGeneration&&v.tail.i-Mi+100<v.vehicleIndex;for(p.tracker2 of this.turnTrackers)for(p.tracker2.n=v.tail,p.tracker2.da=v.tail.da,p.i=0;p.i<p.tracker2.m&&p.tracker2.n.prev;p.i++)p.tracker2.n=p.tracker2.n.prev,p.tracker2.da+=p.tracker2.n.da;return this.prevT=v.tail.t,this.waterFactor=Math.max(Math.min(1,1-(v.tail.p.y-_.minElev)/(_.minElev*2)),0),"o"in v.tail?v.tail.o<0?(this.prevTargetSide=-1,this.targetOverflow=-v.tail.o):(this.prevTargetSide=1,this.targetOverflow=v.tail.o):(this.midlineDir.set(Math.cos(v.tail.a),0,Math.sin(v.tail.a)),this.midlineOrth.set(-this.midlineDir.z,0,this.midlineDir.x),p.targetDot=this.midlineDir.dot(this.targetDir),p.targetSide=this.midlineOrth.dot(this.targetDir)*-1,p.targetSide!=0&&(p.targetSide/=Math.abs(p.targetSide)),this.prevTargetSide=p.targetSide,this.targetOverflow=0,this.accumulatedOverflow=0,this.inOverflow=!1),!1}if(this.bridging)if(this.onBridgeApproach){p.vecA.set(this.bridge.landing.x-this.bridge.spawnNode.p.x,0,this.bridge.landing.z-this.bridge.spawnNode.p.z).normalize();let a=Math.atan2(p.vecA.z,p.vecA.x),t=v.tail.a-a;t<-Math.PI?t+=Math.PI*2:t>Math.PI&&(t-=Math.PI*2);let r=t/_.feelAng;A.bT=Math.min(Math.max(-this.bridgeApproachFactor,r),this.bridgeApproachFactor),this.bridgeApproachFactor<1.4&&(this.bridgeApproachFactor=1.4),Math.abs(A.bT)<.25&&(A.bT=0)}else A.bT=0;_.isStraight&&(A.bT=0),this.bridging||(A.bT*=_.smoothFactor),_.squared&&A.bT<1&&A.bT>-1&&(A.bT<0?A.bT=A.bT*A.bT*-1:A.bT*=A.bT),this.prevT=A.bT,A.bDir=v.tail.a-A.bT*_.feelAng,A.bDir<-Math.PI?A.bDir+=Math.TAU:A.bDir>Math.PI&&(A.bDir-=Math.TAU),p.roadSinkFactor=_.roadSink,A.feelAvg<10?p.roadSinkFactor=0:A.feelAvg<20&&(p.roadSinkFacotr*=(A.feelAvg-10)/10),p.x=Math.cos(A.bDir)*_.nodeSpacing+v.tail.p.x,p.z=Math.sin(A.bDir)*_.nodeSpacing+v.tail.p.z,p.nx=p.x-v.tail.p.x,p.nz=p.z-v.tail.p.z,p.nxz=Math.sqrt(p.nx*p.nx+p.nz*p.nz),v.tail.n={x:-p.nz/p.nxz,z:p.nx/p.nxz};let i={i:v.tail.i+1,p:new m(p.x,Math.max(this.heightmap.getXZ(p.x,p.z,this.heightmap.midlineDepth),_.minElev)-p.roadSinkFactor,p.z),a:A.bDir,d:p.targetDot,da:A.bT*_.feelAng,h:0,t:A.bT,n:{x:0,z:1},g:A.gradLat,gf:A.gradLon,gfa:Math.abs(A.gradLon),next:null,prev:v.tail};return this.totalDA+=Math.abs(i.da),this.bridging&&(this.onBridgeApproach?(i.p.y<=this.bridge.height&&A.bT==0&&(v.tail.bridge=!0,this.onBridgeApproach=!1),i.p.y>this.bridge.height?i.p.y=(this.bridge.height+i.p.y)/2:i.p.y=Math.max(i.p.y,this.bridge.height)):i.p.y>_.minElev&&i.p.y>this.bridge.height-1?(this.onBridgeDismount=!1,this.bridging=!1,this.allowEmergencyBridge=!1,this.resetBridgeState(),i.p.y=(i.p.y+this.bridge.height)/2):i.p.y=Math.max(i.p.y,this.bridge.height)),(this.bridging&&!this.onBridgeApproach&&!this.onBridgeDismount||_.isStraight&&i.p.y<=2)&&(i.bridge=!0),this.targetOverflow>0&&(i.o=this.targetOverflow*p.targetSide),v.tail.next=i,isNaN(p.x)?(se.add("MIDLINE: NaN at index "+i.i),console.log("NAN x AT INDEX "+i.i),console.log("bT ",A.bT),console.log("bDir ",A.bDir),console.log("E.targetDot ",p.targetDot),console.log("originAdjust ",p.targetAdjust),console.log("TargetRedirect ",p.targetRedirect),console.log("TargetSide ",p.targetSide),console.log("originAng ",p.targetAng),console.log("Targetdir ",this.targetDir),console.log("Min max ",A.minT,A.maxT),console.log("Gradlat, lon ",A.gradLat,A.gradLon),console.log("gradAVg ",A.gradAvg),console.log("antiWeight ",this.antiWeight),console.log("feelL, feelR ",A.feelL,A.feelR),console.log("feelAvg ",A.feelAvg),console.log("feelDif ",A.feelDif),console.log("waterFactor ",this.waterFactor),console.log("maxDif ",A.maxDif),!1):(v.tail=i,this.maxRetractIndex=Math.max(this.maxRetractIndex,v.tail.i-hi),_.spiralise&&(this.tVec.copy(v.tail.p).negate().normalize(),this.targetDir.set(-this.tVec.z,0,this.tVec.x).normalize(),p.factor=0,_.isStraight||(p.rad=v.tail.p.length(),p.rad<this.targetRadius?(p.rad<this.targetRadiusMin?p.factor=1:p.factor=1-(p.rad-this.targetRadiusMin)/this.targetMargin,p.factor*=p.factor,this.targetDir.lerp(this.tVec.negate(),p.factor).normalize()):(p.rad>this.targetRadiusMax?p.factor=1:p.factor=(p.rad-this.targetRadius)/this.targetMargin,p.factor*=p.factor,this.targetDir.lerp(this.tVec,p.factor).normalize()))),this.smoothWindowHead.i<v.tail.i-bt&&(this.smoothHeight(),this.smoothCurves()),_.spiralise&&this.checkUpdateTailHeightmap(),!0)}resetBridgeState(){this.bridge.spawnNode=null,this.bridge.distance=0,this.bridge.quality=0,this.bridge.landing.set(0,0,0)}improveBridgeStartNode(){let i,e,s=this.bridge.spawnNode,a=this.bridge.spawnNode.p.distanceToSquared(this.bridge.landing),t=a+225,r=new ns,c=new ns;c.x=s.p.x-s.prev.p.x,c.y=s.p.z-s.prev.p.z,c.normalize(),r.set(this.bridge.landing.x-s.p.x,this.bridge.landing.z-s.p.z).normalize(),e=c.dot(r);let g=c.dot(r);if(s=s.prev,!!s)for(let f=0;f<10&&!(!s.prev||s.p.y>this.bridge.landing.y+4);f++)i=s.p.distanceToSquared(this.bridge.landing),c.x=s.p.x-s.prev.p.x,c.y=s.p.z-s.prev.p.z,c.normalize(),r.set(this.bridge.landing.x-s.p.x,this.bridge.landing.z-s.p.z).normalize(),e=c.dot(r),i<a&&(a=i,this.bridge.spawnNode=s),e>g&&(e>.707||i<t)&&(g=e,this.bridge.spawnNode=s),e<.707&&(this.bridge.spawnNode=s),s=s.prev}testForBridge(i,e,s){let a=0,t=Li,r=5,c=t/2,g=!1;if(this.landing.x=i.p.x+s.x*t*e,this.landing.z=i.p.z+s.z*t*e,this.landing.y=this.heightmap.getXZ(this.landing.x,this.landing.z,this.heightmap.midlineDepth),this.landing.y<2&&(this.landing.y=0,a=Li,g=!0),this.allowEmergencyBridge&&p.targetDot<0&&!bs){g=!1;do this.landing.x=i.p.x+s.x*t*e,this.landing.z=i.p.z+s.z*t*e,this.landing.y=this.heightmap.getXZ(this.landing.x,this.landing.z,this.heightmap.midlineDepth),t+=Li/2,r+=.51;while(this.landing.y<2)}for(let x=0;x<r;x++){if(this.landing.x=i.p.x+s.x*c*e,this.landing.z=i.p.z+s.z*c*e,this.landing.y=this.heightmap.getXZ(this.landing.x,this.landing.z,this.heightmap.midlineDepth),this.landing.y<2){if(g)return;a=c,c=a*.5+t*.5}else t=c,c=a*.5+t*.5;g=!1}if(c<ta||this.landing.distanceTo(this.antiBridgePoint)<Op)return;let f=this.checkBridgeQuality(i.p,this.landing,c);f>0&&(f>this.bridge.quality||this.bridge.spawnNode&&this.bridge.spawnNode.i<v.tail.i-50)&&(this.bridge.quality=f,this.bridge.spawnNode=i,this.bridge.distance=c,this.bridge.landing.copy(this.landing))}checkBridgeQuality(i,e,s){p.bridgeMid.copy(i).add(e).multiplyScalar(.5);let a=1-(s-ta)/Li,t=1-Math.min(1,Math.abs(i.y-e.y)/4),r=this.heightmap.getXZ(p.bridgeMid.x,p.bridgeMid.z,this.heightmap.midlineDepth);if(r>0)return-1;r>-2?r=r/-2:r=1,p.bridgeDir.copy(e).sub(i),p.bridgeDir.y=0,p.bridgeDir.normalize();let c=(p.bridgeDir.dot(this.targetDir)+1)/2;if(p.bridgeDir.y=p.bridgeDir.x,p.bridgeDir.x=-p.bridgeDir.z,p.bridgeDir.z=p.bridgeDir.y,p.bridgeDir.y=0,p.bridgeTest.copy(p.bridgeDir).multiplyScalar(s).add(p.bridgeMid),p.bridgeCheckRight=this.heightmap.getXZ(p.bridgeTest.x,p.bridgeTest.z,this.heightmap.midlineDepth),p.bridgeCheckRight>0||(p.bridgeCheckRight>-4?p.bridgeCheckRight=p.bridgeCheckRight/-4:p.bridgeCheckRight=1,p.bridgeTest.copy(p.bridgeDir).multiplyScalar(-s).add(p.bridgeMid),p.bridgeCheckLeft=this.heightmap.getXZ(p.bridgeTest.x,p.bridgeTest.z,this.heightmap.midlineDepth),p.bridgeCheckLeft>0))return-1;p.bridgeCheckLeft>-4?p.bridgeCheckLeft=p.bridgeCheckLeft/-4:p.bridgeCheckLeft=1;let g=(p.bridgeCheckLeft+p.bridgeCheckRight)/2;return p.bridgeTest.copy(p.bridgeDir).multiplyScalar(s/2).add(p.bridgeMid),p.bridgeCheckRight=this.heightmap.getXZ(p.bridgeTest.x,p.bridgeTest.z,this.heightmap.midlineDepth),p.bridgeCheckRight>0||(p.bridgeTest.copy(p.bridgeDir).multiplyScalar(-s/2).add(p.bridgeMid),p.bridgeCheckLeft=this.heightmap.getXZ(p.bridgeTest.x,p.bridgeTest.z,this.heightmap.midlineDepth),p.bridgeCheckLeft>0)?-1:(a+t+r+c+g)/5}smoothCurves(){if(this.config.smoothingStrength==0)return;this.smoothCurvesD();let i=this.smoothWindowHead;if(!i.prev)return;let e=i.prev,s=Math.atan2(i.p.z-e.p.z,i.p.x-e.p.x);i.a=s;let a=e.a-i.a;a>Math.PI?a-=Math.TAU:a<-Math.PI&&(a+=Math.TAU),i.da=a}smoothCurvesA(){let i=this.smoothWindowHead;if(!i.prev)return;let e=i.prev,s=i.next,a=Math.sign(e.da),t=Math.sign(i.da),r=Math.sign(s.da),c=e.da+i.da+s.da,g=e.da*a+i.da*t+s.da*r,f=1-Math.abs(c)/g,x=i.n.x,w=i.n.z,S=10*Math.sin(e.da/2)*f*.5;this.smoothWindowHead.p.x+=x*S,this.smoothWindowHead.p.z+=w*S}smoothCurvesB(){let i=this.smoothWindowHead;if(!i.prev)return;let e=i.prev,s=i.next,a=(e.p.x+s.p.x)/2,t=(e.p.z+s.p.z)/2,r=Math.max(.25,Math.min(1,Math.abs(e.da-s.da)/1.2));i.p.x=i.p.x*(1-r)+a*r,i.p.z=i.p.z*(1-r)+t*r}smoothCurvesD(){let i=this.smoothWindowHead;if(!i.prev)return;let e=i.prev,s=i.next,a=(e.p.x+s.p.x)/2,t=(e.p.z+s.p.z)/2,r=(e.da+i.da+s.da)/3,c=1-Math.max(.25,Math.min(1,Math.abs(r)/.4));c*=this.config.smoothingStrength,i.p.x=i.p.x*(1-c)+a*c,i.p.z=i.p.z*(1-c)+t*c}smoothCurvesC(){let i=this.smoothWindowHead;if(!i.prev)return;let e=i.prev,s=i.next,a=(e.da+s.da)/2,t=i.da-a,r=Math.abs(t)/(Math.abs(e.da)+Math.abs(s.da)/2),c=10*Math.sin(e.da/2)*r,g=i.n.x,f=i.n.z;this.smoothWindowHead.p.x+=g*c,this.smoothWindowHead.p.z+=f*c}smoothHeight(){for(p.avg=0,p.n=this.smoothWindowHead,p.windowHasBridge=!1,p.bridgeLerp=1,p.i=0;p.i<bt;p.i++)p.n.bridge&&(p.windowHasBridge=!0,p.bridgeLerp=Math.min(p.bridgeLerp,Math.abs(p.i-ts)/ts)),p.avg+=p.n.p.y,p.n=p.n.next,p.i<=ts&&(p.s=p.n);p.avg/=bt,p.r=p.s.prev,p.q=p.r.prev,p.s.h=p.s.p.y-p.avg,p.windowHasBridge,this.smoothWindowHead.i<=v.head.i+ts&&(this.smoothWindowHead.i==v.head.i&&(this.smoothMidlineHeadH=p.s.h),this.smoothWindowHead.h=this.smoothMidlineHeadH),this.smoothWindowHead.p.y-=this.smoothWindowHead.h,this.smoothWindowHead=this.smoothWindowHead.next}update(){return this.didExtend=!1,v.tail.i<v.vehicleIndex+es&&(this.didExtend=this.extendMidline(),this.smoothWindowHead.i<v.tail.i-bt&&this.smoothHeight()),this.didExtend&&v.tail.i-v.head.i>es+Pp&&(A.n=v.head.next,delete v.head,v.head=A.n,v.head.prev=null,delete v.head.prevFine,this.checkUpdateHeadHeightmap()),v.fineTail.i<v.vehicleIndex+_.fineHorizon&&v.fineTail.i<v.tail.i-Mi&&this.extendFine(),this.didExtend}}export{dd as $,Ff as A,Td as B,Je as C,lt as D,ce as E,lA as F,I as G,Rf as H,bs as I,hA as J,ds as K,zi as L,v as M,$p as N,sA as O,Kp as P,Jp as Q,ze as R,ys as S,Ds as T,Ld as U,n as V,Le as W,tA as X,rd as Y,nd as Z,hd as _,qi as a,Yf as a$,ld as a0,cd as a1,ad as a2,uA as a3,Ja as a4,Ka as a5,$o as a6,fA as a7,pA as a8,Jo as a9,Qn as aA,Al as aB,vl as aC,ps as aD,wn as aE,yp as aF,xp as aG,xl as aH,Dp as aI,bp as aJ,$n as aK,rp as aL,it as aM,el as aN,gp as aO,np as aP,lp as aQ,hp as aR,tl as aS,jn as aT,ae as aU,Vf as aV,jf as aW,Gf as aX,wa as aY,Rn as aZ,ve as a_,ha as aa,Od as ab,ye as ac,Za as ad,te as ae,ke as af,Qa as ag,Cd as ah,iA as ai,ot as aj,at as ak,ja as al,eA as am,kd as an,Ws as ao,_ as ap,Go as aq,MA as ar,Vo as as,oA as at,rA as au,jp as av,Ud as aw,va as ax,mA as ay,AA as az,V as b,En as b$,Zf as b0,xa as b1,ge as b2,Jf as b3,Kn as b4,Re as b5,Zn as b6,Qf as b7,Xf as b8,Yn as b9,xn as bA,Af as bB,mp as bC,Ta as bD,nl as bE,mr as bF,xA as bG,SA as bH,mi as bI,Mp as bJ,Gn as bK,hl as bL,Fa as bM,Kf as bN,ea as bO,Xn as bP,sp as bQ,fl as bR,Dt as bS,Cp as bT,Wn as bU,dl as bV,gl as bW,zn as bX,In as bY,kn as bZ,Pn as b_,$f as ba,ep as bb,Zp as bc,ba as bd,Sa as be,bo as bf,sl as bg,al as bh,LA as bi,us as bj,op as bk,Jn as bl,Co as bm,xs as bn,ap as bo,Ra as bp,up as bq,ya as br,Ma as bs,Da as bt,La as bu,So as bv,Ca as bw,fs as bx,ol as by,rl as bz,Yp as c,fi as c0,Lo as c1,ti as c2,Ro as c3,Nn as c4,On as c5,Lp as c6,Rp as c7,gf as c8,ll as c9,Bf as cA,Ia as cB,Bn as cC,Un as cD,zf as cE,Wf as cF,ul as cG,ws as cH,ms as cI,Ln as cJ,qn as cK,Nf as cL,Hf as cM,DA as cN,iu as cO,su as cP,au as cQ,ou as cR,Ht as cS,Di as cT,dA as cU,cA as cV,ir as cW,X as ca,yA as cb,lf as cc,cl as cd,yn as ce,Dn as cf,Vn as cg,pa as ch,pl as ci,ma as cj,fp as ck,F as cl,Mn as cm,bA as cn,kf as co,rs as cp,ki as cq,_p as cr,yo as cs,Cn as ct,Of as cu,Uf as cv,Fn as cw,_n as cx,Aa as cy,Tn as cz,Xp as d,Vp as e,eo as f,wA as g,to as h,Qp as i,io as j,Mt as k,An as l,Fs as m,bn as n,yd as o,fn as p,nA as q,ud as r,vA as s,Ya as t,gA as u,pn as v,aA as w,Pd as x,an as y,qp as z};
