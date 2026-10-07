var Ga=Object.defineProperty;var Ba=(a,t,e)=>t in a?Ga(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var N=(a,t,e)=>(Ba(a,typeof t!="symbol"?t+"":t,e),e);import{L as Rt,a2 as Ne,aY as ae,l as v,f as E,g as _e,h as Q,C as Le,V as Ke,i as we,n as yt,j as G,N as Wa,k as B,aW as $,aV as ee,b1 as ja,b2 as vt,aX as fe,G as Ee}from"./conifers.26f84295.js";import{cS as mt,k as Z,p as Va,v as Xa,l as Qa,m as xe,cO as Ya,cP as Za,cQ as Ka,cR as qa,n as se,H as Ja,A as ie,bi as $a,M as U}from"./DevMidlineGenerator.cabe26a1.js";import{t as ei,a as ti,b as ai,c as ii,d as ri,e as oi}from"./tree_08.839552e8.js";import"./IsStaticRoute.ed7acde0.js";import{w as ni}from"./index.205d685d.js";const ut=new ni([]);class si{constructor(t="a",e=101,r=1,n=0){N(this,"rand");N(this,"rands",[]);N(this,"index",0);N(this,"count");this.rand=new window.alea(t);for(let d=0;d<e;d++)this.rands.push(this.rand()*r-n);this.count=e,this.index=0}next(){return this.index>=this.count&&(this.index=0),this.rands[this.index++]}}class bt{constructor(t="a",e=101,r=3){N(this,"rand");N(this,"rands",[]);N(this,"index",0);N(this,"count");this.rand=new window.alea(t);for(let n=0;n<e;n++)this.rands.push(Math.floor(this.rand()*r));this.count=e,this.index=0}next(){return this.index>=this.count&&(this.index=0),this.rands[this.index++]}}const Fn=new Rt([0,0]),li=""+new URL("../assets/winter_grass.2126ead2.webp",import.meta.url).href,di=""+new URL("../assets/winter_grasses.2a7ac4ed.webp",import.meta.url).href,ci=""+new URL("../assets/winter_bushes.8e9f3165.webp",import.meta.url).href,fi=""+new URL("../assets/winter_gravel.5e963e1a.webp",import.meta.url).href,gi=""+new URL("../assets/winter_rock.674a5de1.webp",import.meta.url).href,hi=""+new URL("../assets/winter_rock_02_bump.10230ce7.webp",import.meta.url).href,vi=""+new URL("../assets/winter_road_ice.433893a9.webp",import.meta.url).href,mi=""+new URL("../assets/slush_02.8b1ef4ab.webp",import.meta.url).href,ui=""+new URL("../assets/winter_heather.b9aeb76f.webp",import.meta.url).href,pi=""+new URL("../assets/winter_road_02.fa9d0357.webp",import.meta.url).href,Ai=""+new URL("../assets/winter_road_bridge.43e1a074.webp",import.meta.url).href,Di=""+new URL("../assets/winter_road_single.9deb67a4.webp",import.meta.url).href,Si=""+new URL("../assets/winter_road_single_bridge.ff0f85b5.webp",import.meta.url).href,z="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",Mi=""+new URL("../assets/winter_imposters_1_d.953e58cc.webp",import.meta.url).href,_i=""+new URL("../assets/winter_imposters_1_n.cf446578.webp",import.meta.url).href,Li=""+new URL("../assets/winter_wall_barrier.2f3faaf6.webp",import.meta.url).href,wi="data:image/webp;base64,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",xi=""+new URL("../assets/winter_wall_concrete.edcd548c.webp",import.meta.url).href,Ci=""+new URL("../assets/winter_wall_barrier_wood.058b9fbc.webp",import.meta.url).href,Ii="data:image/webp;base64,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",Ti=""+new URL("../assets/winter_wall_drystone.3694f7ac.webp",import.meta.url).href,Ni=""+new URL("../assets/ambiance_cloudy_01.9c19be76.mp3",import.meta.url).href,Ei=""+new URL("../assets/wind_01.95bb0ace.mp3",import.meta.url).href,Ri=""+new URL("../assets/bridge.7eaed52d.webp",import.meta.url).href,yi=""+new URL("../assets/clouds_01.700a3fdb.webp",import.meta.url).href,bi={grass:li,bushes:ci,forest:fi,heather:ui,gravel:mi,road:pi,roadBridge:Ai,roadSingle:Di,roadSingleBridge:Si,sand:vi,rock:gi,rockBump:hi,imposterMap:z,imposterMapB:Mi,imposterNorm:z,imposterNormB:_i,grassSprites:di,clouds:yi,bridge:Ri,walls:{barrier:Li,barrierNorm:wi,seaWall:xi,fence:Ci,fenceNorm:Ii,drystone:Ti},trees:[{d:z,n:z},{d:ei,n:ti}]},Oi={road:9802899,clear:12316415},j={road:.8,grass:.6,gravel:.6},V={ambiance:{src:Ni,loopStart:.1,loopEnd:.1},wind:{src:Ei,loopStart:.07,loopEnd:.07}},Ui={common:{maps:bi,colours:Oi,foliage:{grassAlphaTest:.2,bushAlphaTest:.3,imposterAlphaTest:.5},ground:{grassColA:16777215,grassColB:14540253,peakColA:16777215,peakColB:14540253,fieldDiscolouration:6381921},effects:{frozenWater:!0,shadowFactor:.5,treeDiscolouration:.2,hasSnow:!0},surfaces:{road:mt.Ice,offroad:mt.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:20},sun:{col:8295876,intensity:1.9},ambient:{col:4803147,intensity:1.9},fresnelFactor:1.25,radiance:1.08},fog:{colA:16639161,colB:5666463,colC:13222064,near:0,far:1,hazeHeight:0,hazeIntensity:0},water:{base:4011839,body:12359828,highlight:12692106,underwater:5730446},clouds:{hasClouds:!1,highlight:16742190,lowlight:11024058,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:15,mode:0},snow:{density:0,col:8031416,speed:1.75},friction:{...j},audio:{...V}},overcast:{ground:{grassColA:16777215,grassColB:9868690,peakColA:16777215,peakColB:12237498,fieldDiscolouration:6381921},lights:{headlights:{on:!0,intensity:40},sun:{col:2718601,intensity:.5},ambient:{col:5073519,intensity:.8},fresnelFactor:1,radiance:1.93},fog:{colA:879229,colB:541519,colC:879229,near:0,far:.71,hazeHeight:240,hazeIntensity:.66},water:{base:1185303,body:1913141,highlight:4487811,underwater:13750737},clouds:{hasClouds:!1,highlight:5086636,lowlight:4563637,shelfHeight0:1800,shelfHeight1:2200,skyScale0:8,skyScale1:26.5,mode:0},snow:{density:.5,col:2312269,speed:1.75},friction:{...j},audio:{...V}}},day:{clear:{ground:{grassColA:16777215,grassColB:9868690,peakColA:16777215,peakColB:12237498,fieldDiscolouration:6381921},lights:{headlights:{on:!1,intensity:10},sun:{col:16776176,intensity:3},ambient:{col:4609138,intensity:.5},fresnelFactor:2,radiance:1},fog:{colA:14742527,colB:5094399,colC:7375780,near:-.1,far:1,hazeHeight:100,hazeIntensity:.3},water:{base:2303012,body:8755613,highlight:10860741,underwater:7039851},clouds:{hasClouds:!1,highlight:16777215,lowlight:14535884,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:5,mode:4},snow:{density:0,col:14539994,speed:1.8},friction:{...j},audio:{...V}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:15328994,intensity:.5},ambient:{col:4275513,intensity:1.2},fresnelFactor:.5,radiance:2},fog:{colA:13948116,colB:11315104,colC:14999768,near:-.1,far:.8,hazeHeight:120,hazeIntensity:.42},water:{base:789517,body:1973791,highlight:8158595,underwater:12567775},clouds:{hasClouds:!1,highlight:11053491,lowlight:12764108,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:12,skyScale1:24.5,mode:0},snow:{density:1,col:13224393,speed:1.75},friction:{...j},audio:{...V}}},evening:{clear:{lights:{headlights:{on:!0,intensity:80},sun:{col:8296900,intensity:.7},ambient:{col:6118257,intensity:.5},fresnelFactor:.75,radiance:0},fog:{colA:11561352,colB:13680046,colC:9371698,near:-.2,far:1,hazeHeight:80,hazeIntensity:0},water:{base:2039583,body:5919574,highlight:10840443,underwater:5730446},clouds:{hasClouds:!1,highlight:11037586,lowlight:7416466,shelfHeight0:1500,shelfHeight1:1400,skyScale0:16,skyScale1:36,mode:5},snow:{density:0,col:4476516,speed:1.75},friction:{...j},audio:{...V}},overcast:{lights:{headlights:{on:!0,intensity:50},sun:{col:10724259,intensity:.25},ambient:{col:7237230,intensity:.5},fresnelFactor:.7,radiance:2.5},fog:{colA:7634049,colB:4079681,colC:8224125,near:0,far:1,hazeHeight:-250,hazeIntensity:.5},water:{base:2433571,body:7896189,highlight:8424078,underwater:5730446},clouds:{hasClouds:!1,highlight:7039851,lowlight:16777215,shelfHeight0:1800,shelfHeight1:2200,skyScale0:4,skyScale1:37.5,mode:0},snow:{density:.5,col:6513507,speed:1.8},friction:{...j},audio:{...V}}},night:{clear:{lights:{headlights:{on:!0,intensity:70},sun:{col:16777215,intensity:.04},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1779767,colB:264208,colC:1779767,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2239285,highlight:2699064,underwater:1776669},clouds:{hasClouds:!1,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:500,skyScale0:88,skyScale1:92,mode:0},stars:{density:2,horizonOffset:0,horizonScale:2,horizonOpacity:0},snow:{density:0,col:3881787,speed:1.8},friction:{...j},audio:{...V}},overcast:{lights:{headlights:{on:!0,intensity:70},sun:{col:14083839,intensity:.06},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1907739,colB:6052956,colC:1907739,near:-.2,far:1,hazeHeight:-60,hazeIntensity:.5},water:{base:0,body:2368547,highlight:2565670,underwater:1907739},clouds:{hasClouds:!1,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:10,skyScale1:36.5,mode:0},snow:{density:1,col:3684925,speed:2},friction:{...j},audio:{...V}}}},re=[3.9,3.9,3.9,3.9],pt=["winter"],kn=["morning","day","evening","night"],zn=["clear","overcast"],K={styleMeta:{presets:["todo"],season:{key:"season",readable:"SEASON",type:Ne.Selection,default:1,options:[{key:"winter",readable:"Winter",icon:"/img/ico_scene_winter.svg"}]},time:{key:"time",readable:"TIME",type:Ne.Selection,default:1,options:[{key:"morning",readable:"Morning",icon:"/img/ico_time_morning.svg"},{key:"day",readable:"Day",icon:"/img/ico_time_day.svg"},{key:"evening",readable:"Evening",icon:"/img/ico_time_evening.svg"},{key:"night",readable:"Night",icon:"/img/ico_time_night.svg"}]},weather:{key:"weather",readable:"WEATHER",type:Ne.Selection,default:0,options:[{key:"clear",readable:"Clear",icon:"/img/ico_weather_clear.svg"},{key:"overcast",readable:"Overcast",icon:"/img/ico_weather_overcast.svg"}]}},style:{winter:Ui},roadStyle:[{midline:{isStraight:!0,smoothWindow:9,maxGrad:.2,genRadius:100,genMinRadius:100,minStartElev:10,maxStartElev:1e3,curvatureHeightFactor:50,minFineSegs:4},heightmap:{scale:80,offset:90,layerResolutions:[3,21,17,31],squared:!0,depthHeightFactor:.7,temper:!0,temperBase:50,temperBelow:400,temperMin:0,spiralise:!1,tileScaleRandom:.3},treemap:{scale:3,offset:1.7,layerResolutions:[21,9,31],squared:!0,depthHeightFactor:1.2,temper:!1,tileScaleRandom:.3},road:{width:re[ae.NARROW]}},{midline:{isStraight:!1,smoothWindow:9,maxGrad:.16,feelDist:30,smoothFactor:.5,maxTurnDelta:.1},heightmap:{scale:110,offset:110,layerResolutions:[3,9,17],squared:!0,depthHeightFactor:.8,temper:!0,temperBase:50,temperBelow:400,temperMin:.2,tileScaleRandom:.35},treemap:{scale:.6,offset:2.2,layerResolutions:[3,13,29],squared:!1,depthHeightFactor:2.2,temper:!1,tileScaleRandom:.35},road:{width:re[ae.WIDE]}},{midline:{isStraight:!1,smoothWindow:7,maxGrad:.14,feelDist:10,smoothFactor:.7,maxTurnDelta:.25},heightmap:{scale:15,offset:120,layerResolutions:[19,29,39,3,5],squared:!0,depthHeightFactor:2,temper:!0,temperBase:50,temperBelow:800,temperMin:.25,tileScaleRandom:.5,scale:75,offset:105,layerResolutions:[3,11,5,27],squared:!0,depthHeightFactor:1,temper:!0,temperBase:50,temperBelow:250,temperMin:.7,tileScaleRandom:.5},treemap:{scale:.5,offset:3,layerResolutions:[19,29,39,3,5,4,23,9,39],squared:!0,depthHeightFactor:1.5,temper:!1,tileScaleRandom:1,scale:.5,offset:2.6,layerResolutions:[3,11,5,17,29],squared:!0,depthHeightFactor:2,temper:!1,tileScaleRandom:.5},road:{width:re[ae.REGULAR]}},{midline:{isStraight:!1,smoothWindow:7,smoothingStrength:1,feelAng:.463,maxGrad:.13,roadSink:.4,smoothFactor:.75,maxTurnDelta:.5,squared:!0},heightmap:{scale:120,offset:60,layerResolutions:[1,2,3,4],squared:!1,depthHeightFactor:1.2,temper:!1,tileScaleRandom:0,blendElev:250,blendMin:.5,blendSq:!1,depth:3,peakAdditive:!0,peakCount:7,peakScale:1.5,peakSpacingFactor:.6,peakDistortDepth:4,peakDistortFactor:1,peakDistortRes:3,peakDistortUpscale:3,peakHeightRatioMargin:.15,peakHeightRatioMin:.15,peakNegativeChance:.15,peakNegativeFactor:.2,peakOffset:0,peakRadiusMargin:400,peakRadiusMin:1e3,resolution:6,upscale:2},treemap:{layerResolutions:[1,2,3,4],scale:100,offset:50,squared:!0,resolution:6,depth:3,upscale:3,treeElevScale:32,depthHeightFactor:2,temper:!1,tileScaleRandom:.25},road:{width:re[ae.NARROW]}},{midline:{isStraight:!0,smoothWindow:7,maxGrad:.15,roadSink:.4,smoothFactor:.9,maxTurnDelta:.4,maxStartElev:1e3},heightmap:{scale:0,offset:150,layerResolutions:[2,3,5],squared:!0,depthHeightFactor:1.1,temper:!0,temperBase:50,temperBelow:250,temperMin:.75,tileScaleRandom:.25},treemap:{scale:0,offset:2.75,layerResolutions:[2,7,17,29],squared:!1,depthHeightFactor:1.8,temper:!1,tileScaleRandom:.25},road:{width:20}}],treemap:{},graphics:{viewDistance:[{tileSize:240,roadNodes:20,lod0Horizon:50,lod1Horizon:13,imposterDissolveStart:32,objectDespawnHorizon:5,bridgeLookahead:50,cloudAltitude:300,fieldMapScale:700,midlineIndexMargin:140,midlineFineHorizon:200,maxWallLength:20,heightmapMaxCached:12,imposterInstanceSize:800,treeInstanceSize:400},{tileSize:480,roadNodes:25,lod0Horizon:80,lod1Horizon:16,imposterDissolveStart:48,objectDespawnHorizon:10,bridgeLookahead:90,cloudAltitude:300,fieldMapScale:800,midlineIndexMargin:160,midlineFineHorizon:300,maxWallLength:25,heightmapMaxCached:16,imposterInstanceSize:2500,treeInstanceSize:450},{tileSize:840,roadNodes:30,lod0Horizon:100,lod1Horizon:19,imposterDissolveStart:64,objectDespawnHorizon:15,bridgeLookahead:160,cloudAltitude:400,fieldMapScale:1e3,midlineIndexMargin:180,midlineFineHorizon:400,maxWallLength:30,heightmapMaxCached:20,imposterInstanceSize:5e3,treeInstanceSize:475},{tileSize:1500,roadNodes:35,lod0Horizon:120,lod1Horizon:22,imposterDissolveStart:96,objectDespawnHorizon:15,bridgeLookahead:200,cloudAltitude:500,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:500,maxWallLength:30,heightmapMaxCached:28,imposterInstanceSize:16e3,treeInstanceSize:500},{tileSize:2e3,roadNodes:40,lod0Horizon:140,lod1Horizon:25,imposterDissolveStart:128,objectDespawnHorizon:15,bridgeLookahead:300,cloudAltitude:600,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:600,maxWallLength:30,heightmapMaxCached:40,imposterInstanceSize:25e3,treeInstanceSize:525}],detail:[{shadowRes:256,cellRes:24,sea:{res:.2,depth:!1,waves:!1},trees:{has3D:!1,typeCount:2},bridges:{genArches:!1,segments:4},grass:{margin:0,density:0},fields:{render:!1,treeDensity:0,col:!1,boundary:!1}},{shadowRes:512,cellRes:24,sea:{res:.3,depth:!1,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:4},grass:{margin:16,density:.2},fields:{render:!0,treeDensity:.7,col:!1,boundary:!1}},{shadowRes:1024,cellRes:24,sea:{res:.4,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:20,density:.3},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:24,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:24,density:.4},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:24,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:28,density:.4},fields:{render:!0,treeDensity:1,col:!0,boundary:!0}}]}},Pi=`
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

`,Hi=`
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
`,Fi=`

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
`,ki=`
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
`,zi=`
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
`,Gi=`
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
`,Bi=`

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

`,Wi=`

attribute float roadProximity;
attribute float treeMask;
attribute vec2 roadUv;
attribute float overlap;
attribute float snowDepth;

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;
varying vec2 vRoadUv;
varying float vSnowDepth;

float wuvSize = 800.0;

uniform sampler2D displacementMap;
uniform sampler2D fadeFine;
uniform float sinkDist;
uniform float vehicleIndex;
uniform float shadowFactor;

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

`,ji=`

vec4 wPos = modelMatrix * vec4( position, 1.0 );

vFresnelPos = wPos.xyz;
vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

height = wPos.y;

// Set UVs from world pos
vUv.x = wPos.x / 10.0;
vUv.y = wPos.z / 10.0;

vUUv.x = vUv.x / 8.0;
vUUv.y = vUv.y / 8.0;

// 0 is perfectly flat, 1 is 90 degrees
steepness = 1.0 - dot(normal, upvec);
steepness = clamp(steepness * 1.8, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

vRoadUv = roadUv;

vSnowDepth = snowDepth;


//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;



//// HEATHER

// vHeather = smoothstep(0.4, 1.0, ((height + fade1 * 350.0) - 60.0) / 500.0);

// vHeather *= screen(fade1, fade0);

// vHeather = smoothstep(0.3, 0.6, vHeather);




//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (20.0 + fade1 * 40.0))/160.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
// if(roadProximity > 0.0 && roadProximity < 0.5 + fade1) {
  // vLightGrass *= roadProximity / (0.5 + fade1);
  // vHeather *= roadProximity / (0.5 + fade1);
// }

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

// Variable heather tex?
// if(vHeather > 0.2) {
//   vDarkGrass = min(1.0, (vHeather - 0.2) * 2.0) * fade1;
//   vLightGrass = 1.0 - vDarkGrass;
// }


//// ROAD PROX

roadProx = roadProximity;

// Prevent rocks forming below the road, e.g. at bridges.
// Not perfect...
if(roadProx < 0.0) {
  steepness = 0.0;
  // vHeather = 0.0;
}



//// SHADOW

vShadow = min(1.0, treeMask * min(1.0, max(0.0, height / 4.0)));


//// TREE MASK

vTreeMask = vShadow;

if(vTreeMask > 0.1) {
  vTreeMask = max(0.2, vTreeMask);
} else {
  vTreeMask = 0.0;
}

if(roadProx > 0.0 && roadProx < 2.0) {
  vTreeMask *= roadProx / 2.0;
} else if(roadProx < 0.0) {
  vTreeMask = 0.0;
}

// Experimenting with displacement map
if(roadProx > 1.0 && roadProx < 13.0) {

  float inn = abs(roadProx - 7.0) / 6.0;
  float intensity = 1.0 - inn * inn;

  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vWv ).x - 0.6) * steepness * 3.0 ) * intensity;
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

//  // Fake sun angle in ground only
//  vNormal += vec3(1.0,0.0,0.0);
//  vNormal = normalize(vNormal);

`,Vi=`

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;
varying vec2 vRoadUv;
varying float vSnowDepth;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D heatherMap;

uniform sampler2D fadeFine;

uniform vec3 roadCol;

uniform vec3 grassColA;
uniform vec3 grassColB;
uniform vec3 peakColA;
uniform vec3 peakColB;

uniform vec3 fieldDiscolouration;

uniform float radiance;

vec4 rockTex;

// Depth is like how hard the transition is
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

`,Xi=`

// if(vFresnelPos.y < 0.0) {
//   discard;
// }

// TODO Pack multiple resolutions into one to prevent this nonsense
float fade0 = texture2D(fadeFine, vUv).r;
float fade1 = texture2D(fadeFine, vUUv).r;
float fade2 = texture2D(fadeFine, vWv).r;

//// PREP MAP

vec4 texelColor = texture2D( grassMap, vUv );

//// SCALED TEXTURE

float blendVal = fade2 * texture2D( heatherMap, vWv*2.0 ).r * (0.5 + vLightGrass);

float depthLerp = 0.0;
if(vCamDepth > 500.0) {
  depthLerp = 1.0;
} else {
  depthLerp = 0.5 + (vCamDepth / 2.0) / 500.0;
}

texelColor *= 1.0 - (blendVal * depthLerp);

//// GRASS BASE

// Blend them into two colours

float grassBlend = (screen(fade1, fade0) + vDarkGrass) / 2.0;

vec3 grassCol = mix(
  mix(grassColA, grassColB, grassBlend),
  mix(peakColA, peakColB, grassBlend),
  vLightGrass
);

//// APPLY GRASS COLOUR

texelColor.rgb *= grassCol;


//// LIMIT TO AVOID PIXELLY NONSENSE

texelColor.r = max(0.0, min(1.0, texelColor.r));
texelColor.g = max(0.0, min(1.0, texelColor.g));
texelColor.b = max(0.0, min(1.0, texelColor.b));

//// HEATHER


// if(vHeather > 0.0) {

//   vec4 heatherCol = texture2D(heatherMap, vUv);

//   if(vCamDepth > 0.0) {
//     float depthLerp = 0.0;
//     if(vCamDepth > 500.0) {
//       depthLerp = 1.0;
//     } else {
//       depthLerp = (vCamDepth - 0.0) / 500.0;
//     }
//     heatherCol = mix(heatherCol, texture2D( heatherMap, vWv ), depthLerp * 0.5);
//   }

//   heatherCol = mix(texelColor, heatherCol, min(1.0, vHeather));

//   heatherCol.a = heatherCol.r;
//   texelColor.a = texelColor.g;
//   texelColor = terrainBlend(
//       texelColor,
//       1.0 - vHeather,
//       heatherCol,
//       vHeather,
//       0.5
//   );

// }


//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv);
forestCol.a = forestCol.r * 2.0 * fade2;
forestCol.rgb *= grassCol;

float fTreeMask = min(1.0, vTreeMask);

if(fTreeMask > 0.0) {
  // texelColor.a = texelColor.g - 0.2;
  texelColor = terrainBlend(
    texelColor,
    1.0-fTreeMask,
    forestCol,
    fTreeMask,
    0.1 + (1.0 - fTreeMask) * fade0 * 0.9
  );
  // texelColor = mix(texelColor, forestCol, fTreeMask);

  texelColor.a = 1.0;
}


//// SAND BLEND

// float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

// if(vHeight < 4.0) {

//   float dark = 1.0;

//   if(vHeight < 0.0) {
//     texelColor = texture2D(sandMap, vUv) * 0.75;
//   } else {

//     if(vHeight < 2.0) {

//       // Darken toward water
//       dark = min(dark, 1.0 - (2.0 - vHeight) / 8.0);

//     } else if(vHeight > 2.5) {

//       // Darken into the grass
//       dark = 1.0 - (vHeight-2.5) / 2.0;

//     }

//     // Lerp from grass to thingy
//     float lerp = max(0.0, (vHeight - 1.0) / 3.0);

//     vec4 sandCol = texture2D(sandMap, vUv);

//     texelColor.a = texelColor.r;

//     sandCol.a = sandCol.r;

//     // Apply shading based on water/grass proximity
//     sandCol.rgb *= dark;

//     texelColor = terrainBlend(
//       texelColor,
//       lerp,
//       sandCol,
//       1.0 - lerp,
//       0.05
//     );


//     // texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);

//     // texelColor = terrainBlend(
//     //   texture2D(sandMap, vUv) * dark,
//     //   dark,
//     //   texelColor,
//     //   texelColor.g,
//     //   height / 4.0
//     // );
//   }
// }

//// ROADSIDE GRAVEL/SURFACE

//// ROAD SURFACE?

if(roadProx < -1.0) {

    // Note, abusing gravelMap for this purpose
    // Will have to be a one-off for Driftmas

    vec4 roadSurface = texture2D(gravelMap, vRoadUv);

    // Colourise it like grass
    roadSurface.rgb *= grassCol;

    texelColor = mix(
      texelColor,
      roadSurface,
      min(1.0, -(roadProx+1.))
    );
}

// Blend into slush texture with snow height?
if(roadProx < 0.0 && vSnowDepth < 0.1) {
  float slushFactor = 1.0 - vSnowDepth / 0.1;

  vec4 slushColour = texture2D(sandMap, vRoadUv);

  texelColor = mix(
    texelColor,
    slushColour,
    slushFactor
  );
  // texelColor.rgb = vec3(slushFactor);
}

// if(seasonIndex < 3) {

//   if(roadProx < -0.2 && (vCamDepth > 100.0 || seasonIndex != 2)) {

//     texelColor.rgb = roadCol;

//   } else if(roadProx != 0.0 && roadProx < 0.3 * fade0) {

//     float rp = roadProx / (0.3 * fade0);

//     // Mix into forest colour if we're under trees
//     if(seasonIndex == 2 && vShadow > 0.0) {

//       texelColor = mix(

//         mix(texture2D(gravelMap, vUv*2.0), forestCol, min(1.0, vShadow * 2.0)),

//         texelColor,
//         smoothstep(
//           rp + 0.35,
//           rp - 0.35,
//           1.0 - texelColor.g
//         )
//       );

//     } else {
//       texelColor = mix(
//         texture2D(gravelMap, vUv*2.0),
//         texelColor,
//         smoothstep(
//           rp + 0.35,
//           rp - 0.35,
//           1.0 - texelColor.g
//         )
//       );
//     }

//   }

// }


//// STEEPNESS CLIFF

vec4 nearRockTex = texture2D(rockMap, vUv);
vec4 midRockTex = texture2D(rockMap, vUUv);
vec4 farRockTex = texture2D(rockMap, vWv);

float nearRockA = texture2D(rockMapBump, vUv).r;
float nearRockB = texture2D(rockMapBump, vUUv).r;
float nearRockC = texture2D(rockMapBump, vWv).r;

float nearBlend = min(max((vCamDepth - 30.0) / 120.0, 0.0), 1.0);
float farBlend = min(max((vCamDepth - 150.0) / 400.0, 0.0), 1.0);

float nearRockAlpha = nearRockA * (1.0 - nearBlend) + nearBlend * nearRockB;
nearRockAlpha = nearRockAlpha * (1.0 - farBlend) + farBlend * nearRockC;

// Failed blend tests
// float nearRockAlpha = min(nearRockA, min(nearRockB, nearRockC));
// float nearRockAlpha = (1.0 - nearRockA) * (1.0 - nearRockB) * (1.0 - nearRockC);

rockTex = mix(
  mix(
    nearRockTex,
    midRockTex,
    nearBlend
  ),
  farRockTex,
  farBlend
);

// Gradual distance-based blend
rockTex.a = nearRockAlpha;

// Simpler blend
// if(roadProx == 0.0) {
// } else {
//   float rockTexMix = min(max(0.0, (roadProx - 8.0) / 8.0), 1.0);  
//   rockTex.a = texture2D(rockMapBump, vUv).r * (1.0 - rockTexMix) + texture2D(rockMapBump, vWv).r * rockTexMix;
// }

// Blend according to steepness etc.
texelColor.a = 0.2 + fade2 * 0.2;

// Lower steep blend is more snow?
float steepBlend = 1.0 - clamp(steepness * 0.35, 0.0, 0.35); // Reduce steepess factor to reduce rockiness
// Reduce the depth value to increase sharp transition from snow to rock
texelColor = terrainBlend(texelColor, steepBlend, rockTex, (1.0 - steepBlend), 0.08);
texelColor.a = 1.0;

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?


totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor = vec4(vHeather, vCurvature, 0.0, 1.0);
// diffuseColor.rgb = vNormal.rgb;

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort

// diffuseColor.r = min(max(0.0, diffuseColor.r), 1.0);
// diffuseColor.g = min(max(0.0, diffuseColor.g), 1.0);
// diffuseColor.b = min(max(0.0, diffuseColor.b), 1.0);

// diffuseColor.rgb = vec3(fTreeMask);


`,Qi=`

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

`,Yi=`

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

`,Zi=`

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

`,Ki=`

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

`,qi=`
    uniform sampler2D noiseMap;
	uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
	uniform float shadowFactor;
	uniform float discolourationFactor;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    float distanceSqFlat(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,Ji=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;

	// SPECIAL HANDLING FOR CYPRESS TO AVOID IT BEING TOO DARK
	if(vMapUv.x > 0.76) {
	  discolouration = (discolouration / 2.0) + 0.5;
	}
`,$i=`

	// Cone effect on the shadow
	// TODO - set up different parameters for different trees, they have different coniness.

	// Heightlerp controls how high up the effect takes hold
	float shadowRadius = 3.2 - max(0.2,heightLerp*1.4) * 1.8;
	vShadow = shadowRadius - centerDist;

	// Assume trunk sunk, handle it specially
	if(heightLerp < 0.0 && centerDist < 0.5) {
		vShadow = 0.5;
	}

	// vShadow *= shadowFactor;
`,er=`

	// Note - can use instance matrix 1, 1 for scale proxy?

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    // Assumes trees are 10m tall
    // float heightLerp = min(1.0, (position.y - instanceMatrix[1][1]) / 10.0);
	float heightLerp = position.y / 10.0;

    float centerDist = sqrt(position.x*position.x + position.z*position.z);

	// Angled upwards in a constant cone
	if(centerDist < 0.0001) {
		// Trunk
		vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, 1.0, position.z));
	} else {
	    if(position.y < 0.0) {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x,0.0, position.z));
		} else {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, max(0.5, heightLerp*1.5)*centerDist, position.z));
		}
	}

	if(heightLerp > 1.0) { heightLerp = 1.0; }

	// Straight up
	// vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0,1.0,0.0));


`+$i+`



`+Ji+`

    // IF WEIGHED DOWN BY SNOW UNCOMMENT THIS!?
	// if(centerDist > 0.1) {
	// 	transformed.y -= centerDist / 2.0 + heightLerp * 1.0;
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

`,tr=`

    uniform sampler2D noiseMap;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;

    float fShadow;

`,ar=`

if(vMapUv.x > 0.125) {
	diffuseColor.g *= discolouration;
	// if(diffuseColor.g > diffuseColor.r) {
}

`,ir=`

	diffuseColor.g *= discolouration;

`,rr=`

	if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
		discard;
	}

    fShadow = max(0.0, min(1.0, vShadow));

	fShadow = sqrt(fShadow) * 0.65;


`+ar+`

	diffuseColor.rgb *= 1.0 - fShadow;
	// totalEmissiveRadiance = vec3(0.5, diffuseColor.gb * 8.0);//diffuseColor.rgb;

`,or=`
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

		// spot lights shine through the shadow
		directLight.color *= 1.0 + fShadow;

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

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

        // if(fShadow > 0.5) {
            // directLight.color *= 1.0 - fShadow;
        // }

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

        // Problem is we still want it lit up to like -0.1 dot

        // directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * -2.0));

        // directLight.color *= max(0.0, min(1.0, dot(directLight.direction, vCenterNormal) + 0.25));


        // Direct normal (bit severe)
        directLight.color *= max(0.0, dot(directLight.direction, vCenterNormal));

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

	if(fShadow > 0.25) {
		// irradiance *= 1.25 - fShadow;
	}

	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nr=`

float faceDirection = gl_FrontFacing ? 1.0 :  1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vCenterNormal );

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

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;
`,sr=`
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

	float dotNL = saturate( min(1.0, dot( geometry.normal, directLight.direction ) + 0.25) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,lr=`
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

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,Ot=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;
`,dr=`
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


`,cr=`

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    vShadow = 0.0;
    // What if we say all trees are 10m tall by default? center at 5.0?

    // Fake shadow by testing against direction to center..?
    // Works nicely but not great for directional light and normal light

    float distToCenter = distanceSq(position, vec3(0.0, 5.0, 0.0));//min(position.y, 5.0), 0.0));

    if(distToCenter < 36.0) {
        if(distToCenter < 8.0) {
            vShadow = 1.0;
        } else {
            // distToCenter = sqrt(distToCenter);
            // vShadow = 1.0 - (distToCenter - 3.0) / 3.0;
            vShadow = 1.0 - (distToCenter - 8.0) / 28.0;
        }
    }
    if(position.y < 1.0) {
        vShadow = min(1.0, 1.0 - position.y);
    }


`+dr+`
`+Ot+`


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


    float vShadowFade = 0.0;

    if(-mvPosition.z < 25.0) {
        vShadowFade = 1.0;
    } else {
        vShadowFade = 1.0 - (-mvPosition.z - 25.0) / 125.0;
    }

    vShadow *= vShadowFade * shadowFactor;



`,fr=`

    uniform sampler2D noiseMap;
    uniform float radiance;
    uniform bool hasSnow;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;


`,gr=`

    if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
        discard;
    }

    if(diffuseColor.g > diffuseColor.b * 1.5) {
        // We have a leaf? Not very reliable.. might need a leafmap eventually

        // Recolour...
        diffuseColor.rg *= discolouration;

        // Emissive...
        totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
    }
`,hr=`
    if(diffuseColor.a < vAlphaTest) discard;
`,vr=`

    // Use the normal to blend with snow colours

    // ONLY DO THIS ON SNOW VIBES
    if(hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        if(dotUp > 0.1) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(min(1.0, 0.5 + dotUp)), min(1.0, (dotUp - 0.1) * 8.0));
        }
    }


`,mr=`

    if(vType < 0.5) {
        // We have a leaf
        // if(diffuseColor.g > diffuseColor.b * 1.5) { // For some reason it looks better if it's darker than regular tree?
            diffuseColor.rg *= discolouration;
            // Emissive... unclear why this needs to be different to the regular tree emissive. Suspicious. Just a shadowmap diff?
            totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
        // }
    } else {
        `+ir+`
    }
`,ur=`
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
`,pr=`
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

`,Ar=`

    uniform sampler2D noiseMap;

    attribute float variant;
    attribute float type;
    attribute float orientation;
    attribute float dissolve;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

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
`,Dr=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Sr=`

    vUv = uv;

    vType = type;

`+Ot,Mr=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,_r=`


    // Rotate the vertices to face the camera
    transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));

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
    #include <project_vertex>

    if(-mvPosition.z > 500.0) {
        vAngleBlend = 0.0;
    } else {
        vAngleBlend = (tileIndex - floor(tileIndex));
    }


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 1.0;
    } else {
        if(-mvPosition.z > dissolveFar) {
            vDissolve = 0.0;
        } else {
            vDissolve = 1.0 - (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // vDist = min(0.75, max(0.4, 1.0 - -mvPosition.z / 1000.0));

    vDissolve *= dissolve;

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);
`,Lr=`

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

    varying float discolouration;

    uniform sampler2D noiseMap;
    uniform sampler2D mapB;
    uniform sampler2D normalMapB;
    uniform float radiance;
    uniform bool hasSnow;
`,wr=`


    vec4 texelColor;

    if(vType < 0.5) {
        texelColor = texture2D( map, vUv + vUvOffset );
    } else {
        // Map B
        texelColor = texture2D( mapB, vUv + vUvOffset );
    }

    // Transform uvs to square to  sample from noise texture
    float blendNoise = texture2D(noiseMap, vec2(vUv.x*5.33*4.0, vUv.y*4.0)).r;

    // Blend to next texture by angle offset?
    if(blendNoise < vAngleBlend) {
        vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);
        if(blendUV.x > 1.0) {
            blendUV.x -= 1.0;
        }

        if(vType < 0.5) {
            texelColor = textureGrad(map, blendUV, dFdx(vUv), dFdy(vUv));
        } else {
            texelColor = textureGrad(mapB, blendUV, dFdx(vUv), dFdy(vUv));
        }
    }

    if(blendNoise < vDissolve) {
        texelColor.a = 0.0;
    }

    diffuseColor *= texelColor;

`+mr,xr=`
    vec2 vNormalMapUvOffset = vNormalMapUv + vUvOffset;

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
`,Cr=`
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
`,Ir=`
    // attribute float variant;
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;

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

    // Must match the ground shader
    float wuvSize = 800.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Tr=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

    vFresnelPos = wPos.xyz;
    vFresnelPos.y -= 1.5; // Subtract the sprite midpoint to get the ground position?

    vFresnelNorm = groundNormal;

    // Grass colouration UVs
    vGv.x = wPos.x / 10.0;
    vGv.y = wPos.z / 10.0;

    vGGv.x = vGv.x / 16.0;
    vGGv.y = vGv.y / 16.0;

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    vWWv.x = vWv.x / 8.0;
    vWWv.y = vWv.y / 8.0;



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

    float fade0 = texture2D(noiseMap, vWv).r;
    float fade1 = texture2D(noiseMap, vWWv).r;
    float v = texture2D(noiseMap, vGGv).r;

    float variant = 2.0;

    // // CHECK HEATHER - has to match the ground function
    // // Might want to find something cheaper to do here?
    // float heather = smoothstep(0.4, 1.0, ((wPos.y + fade1 * 350.0) - 60.0) / 500.0);
    // heather *= screen(fade1, fade0);
    // // heather = smoothstep(0.3, 0.6, heather);
    // if(vShadow < 0.1 && heather > 0.4 + v / 5.0 ) {
    //     variant = 3.0;

    //     if(roadProx > 1.0) {
    //         transformed.y -= v * 0.2;
    //     } else {
    //         transformed.y -= v * 0.2 * roadProx;
    //     }
    // }

    // if(vRoadProx < v * 2.0 + 0.2) {
    //     // Little grass
    //     variant = 0.0;
    // } else if(variant < 3.0 && ( wPos.y > 100.0 && v + fade0 > 1.75 - (wPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

    //    // big grass

    //     variant = 2.0;
    // } else if(variant == 3.0) {
    //     transformed.xyz *= 0.5 + fade0 * 1.5;
    // }



    doDiscard = 0.0;
    doColor = 0.0;
    if(variant < 3.0) {
        doColor = 1.0;

        // SET UP GRASS COLOURATION PARAMS


        float heightVal = min(1.0, max(0.0, (wPos.y - (20.0 + fade1 * 40.0))/160.0));

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

    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);

    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / (sproutFar - sproutNear) * 0.5;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }

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

`,Nr=`

    uniform sampler2D noiseMap;

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

    uniform float radiance;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Er=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Rr=`

    // Don't draw grass beyond view dist
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    // Limit darkness by distance?
    // texelColor.rgb = vec3(max(texelColor.r, darkness));

    if(doColor > 0.5) {

        // Shared with ground.glsl - TODO share a chunk instead?

        float grassBlend = (screen(texture2D(noiseMap, vGv).r, texture2D(noiseMap, vGGv).r) + vDarkGrass) / 2.0;

        vec3 grassCol = mix(
            mix(grassColA, grassColB, grassBlend),
            mix(peakColA, peakColB, grassBlend),
            vLightGrass
        );

        texelColor.rgb *= grassCol;

    } else if(texelColor.a < 0.98) {
        // Lazy fix for heather white pixels
        discard;
        // texelColor.rgb = vec3(0.05, 0.04, 0.03);
    }

    diffuseColor *= texelColor;


    //// PREP EMISSIVE?

    // NOTE this must match the ground. Ideally share a chunk?
    totalEmissiveRadiance = texelColor.rgb * radiance;


`,yr=`
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
`,br=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

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

        if(fade0 > 0.5) {
            vVariant = 1.0;
        }
            
        //         if(fade0 > 0.54) {
        //             vVariant = 1.0;
        //         } else {
        //             vVariant = 2.0;
        //         }
        //     }

        // if(vShadow > 0.1) {
        //     // Higher chance of fern
        //     if(fade0 > 0.41) {
        //         if(fade0 > 0.52) {
        //             vVariant = 2.0;
        //         } else {
        //             vVariant = 1.0;
        //         }
        //     }
        // } else {
        //     // Lower chance for ferns
        //     if(fade0 > 0.46) {
        //         if(fade0 > 0.54) {
        //             vVariant = 1.0;
        //         } else {
        //             vVariant = 2.0;
        //         }
        //     }

        //     // Also check for gorse
        //     // if(wPos.y > 150.0) {
        //     //     if(wPos.y > 200.0) {
        //     //         if(wPos.y > 230.0) {
        //     //             vVariant = 3.0;
        //     //         } else {
        //     //             // Really high up, bushes must be gorse or generic?
        //     //             if(vVariant < 2.0) {
        //     //                 vVariant = 0.0;
        //     //             } else {
        //     //                 vVariant = 3.0;
        //     //             }
        //     //         }
        //     //     } else if(vVariant == 2.0) {
        //     //         vVariant = 3.0;
        //     //     }
        //     // }
        // }
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
    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);
    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / sproutMargin;

        if(dist > sproutFar) {
            doDiscard = 1.0;
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


`,Or=`

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


`,Ur=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Pr=`

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

`,qe=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,Hr=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,Je=`

    uniform float fresnelIntensity;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,$e=`
    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );

    if(fresnel > 0.75) {

        // Highlights

        fresnel = (fresnel - 0.75) * 4.0;
        fresnel *= fresnel * fresnel;

        diffuseColor.rgb *= 1.0 + fresnel * fresnelIntensity * (1.0 - vShadow);

    } else {

        // Lowlights

        // fresnel = 1.0 - max(0.0, (fresnel - 0.25) * 2.0);

        fresnel = 1.0 - fresnel * 1.3333;

        // fresnel *= fresnel;

        fresnel *= min(1.0, fresnelIntensity); // TODODM Limit the dark fresnel effect assuming snow
        

        if(fresnel > 0.25) {
            fresnel = 0.25 + (fresnel - 0.25) * 0.5;
            if(fresnel > 0.5) {
                fresnel = 0.5;
            }
        }

        diffuseColor.rgb *= 1.0 - fresnel;

    }
`,Fr=`
    attribute float bridge;
    varying float vBridge;
`,kr=`
    vBridge = bridge;
`,zr=`
    uniform sampler2D shadowMap;
    uniform bool useShadowBlend;
    uniform sampler2D bridgeMap;
    uniform bool useBridgeBlend;

    varying float vBridge;
`,Gr=`

#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vMapUv );

    if(useBridgeBlend && vBridge > 0.0) {
        texelColor = mix(texelColor, texture2D( bridgeMap, vMapUv), vBridge);
    }

    if(useShadowBlend && vShadow > 0.0) {
        texelColor = mix(texelColor, texture2D(shadowMap, vMapUv), vShadow);
    }

    totalEmissiveRadiance = texelColor.rgb * radiance;

	diffuseColor *= texelColor;

#endif
`,Ut=`
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
`,Pt=`

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
`,Br=""+new URL("../assets/noise_fine.9cdaf478.webp",import.meta.url).href,Wr=""+new URL("../assets/noise_finer.56c77b62.webp",import.meta.url).href,jr=""+new URL("../assets/sea_waves.63ff8729.webp",import.meta.url).href,At=""+new URL("../assets/signs.19335281.webp",import.meta.url).href,Vr="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",Xr="data:image/webp;base64,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",Qr=`

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
`,b=v(z),le=v(Br,4,void 0,G),Yr=v(Wr,4,void 0,G),Gn=v(Vr,1);function Bn(){fe.fog_pars_vertex=Ya,fe.fog_vertex=Za,fe.fog_pars_fragment=Ka,fe.fog_fragment=qa}function Zr(a,t){var e;pt.length==2&&a=="winter"?l.userData.seasonIndex.value=3:l.userData.seasonIndex.value=pt.indexOf(a),l.userData.grassMap.value=v(t.maps.grass,4,void 0,void 0),l.userData.forestMap.value=v(t.maps.forest),l.userData.heatherMap.value=v(t.maps.heather),l.userData.gravelMap.value=v(t.maps.gravel),l.userData.sandMap.value=v(t.maps.sand),l.userData.rockMap.value=v(t.maps.rock),l.userData.rockMapBump.value=v(t.maps.rockBump,4,$,G),l.userData.grassColA.value=ee(t.ground.grassColA),l.userData.grassColB.value=ee(t.ground.grassColB),l.userData.peakColA.value=ee(t.ground.peakColA),l.userData.peakColB.value=ee(t.ground.peakColB),l.userData.fieldDiscolouration.value=ja(t.ground.fieldDiscolouration),l.userData.radiance.value=t.lights.radiance??0,l.displacementMap=l.userData.rockMapBump.value,l.userData.roadCol.value=ee(t.colours.road),l.userData.fresnelIntensity.value=t.lights.fresnelFactor??1,l.uniformsNeedUpdate=!0,H.map=v(t.maps.grassSprites,4,B),P.map=v(t.maps.bushes,2,B),Ae?(I.map=v(t.maps.roadSingle,8),I.userData.useShadowBlend.value=!!t.maps.roadSingleShadow,I.userData.shadowMap.value=t.maps.roadSingleShadow?v(t.maps.roadSingleShadow,8):void 0,I.userData.useBridgeBlend.value=!!t.maps.roadSingleBridge,I.userData.bridgeMap.value=t.maps.roadSingleBridge?v(t.maps.roadSingleBridge,8):void 0):(I.map=v(t.maps.road,16),I.userData.useShadowBlend.value=!!t.maps.roadShadow,I.userData.shadowMap.value=t.maps.roadShadow?v(t.maps.roadShadow,8):void 0,I.userData.useBridgeBlend.value=!!t.maps.roadBridge,I.userData.bridgeMap.value=t.maps.roadBridge?v(t.maps.roadBridge,8):void 0),w.radiance.value=t.lights.radiance?t.lights.radiance/2:0,w.discolourationFactor.value=t.effects.treeDiscolouration?t.effects.treeDiscolouration:1,w.hasSnow.value=!!t.effects.hasSnow,L.map=v(t.maps.imposterMap,0,B),L.userData.mapB.value=v(t.maps.imposterMapB,0,B),L.normalMap=v(t.maps.imposterNorm,0,B,G),L.userData.normalMapB.value=v(t.maps.imposterNormB,1,B,G),L.uniformsNeedUpdate=!0,L.alphaTest=t.foliage.imposterAlphaTest;for(let r=0;r<2;r++){let n=r==0?B:$;Re[r].map=v(t.maps.trees[r].d,4,n),r==0?Re[r].normalMap=v(t.maps.trees[r].n,4,n,G):Re[r].alphaMap=v(t.maps.trees[r].n,4,n)}H.alphaTest=t.foliage.grassAlphaTest,P.alphaTest=t.foliage.bushAlphaTest,y.color.setHex(t.water.base),y.userData.body.value.setHex(t.water.body),y.userData.highlight.value.setHex(t.water.highlight),p.map=v(t.maps.clouds,4,void 0,G),p.userData.highlight.value.setHex(t.clouds.highlight),p.userData.lowlight.value.setHex(t.clouds.lowlight),p.userData.shelfHeight0.value=t.clouds.shelfHeight0,p.userData.shelfHeight1.value=t.clouds.shelfHeight1,p.userData.skyScale0.value=t.clouds.skyScale0,p.userData.skyScale1.value=t.clouds.skyScale1,p.userData.mode.value=t.clouds.mode,ve.map=v(t.maps.walls.barrier,8,$),ve.normalMap=v(t.maps.walls.barrierNorm,8,void 0,G),et.map=v(t.maps.walls.seaWall,8,vt),me.map=v(t.maps.walls.fence,8,$),me.normalMap=v(t.maps.walls.fenceNorm,8,void 0,G),ue.map=v(t.maps.walls.drystone,8,$),Ht.map=ue.map,kt.map=v(t.maps.bridge,0,vt),tt.emissiveIntensity=Math.min(t.lights.sun.intensity/20,.5),Z.value=((e=t.effects)==null?void 0:e.shadowFactor)??1}function Kr(a){$r(a.sea.depth,a.sea.waves)}function qr(a){w.dissolveFar.value=a.lod1Horizon*10,w.dissolveInterval.value=Math.floor(a.lod1Horizon*10*.3),w.dissolveNear.value=w.dissolveFar.value-w.dissolveInterval.value,L.userData.dissolveFar.value=w.dissolveNear.value+w.dissolveInterval.value*.6,L.userData.dissolveInterval.value=w.dissolveInterval.value,L.userData.dissolveNear.value=L.userData.dissolveFar.value-L.userData.dissolveInterval.value,H.userData.sproutFar.value=(a.lod1Horizon*12.5)**2,H.userData.sproutNear.value=(a.lod1Horizon*12.5*.5)**2,P.userData.sproutFar.value=H.userData.sproutFar.value,P.userData.sproutNear.value=H.userData.sproutNear.value,p.userData.altitude.value=a.cloudAltitude,l.userData.sinkDist.value=a.lod0Horizon}const l=new E({map:v(z),displacementMap:v(z),fog:!0});l.needsCameraPosition=!0;l.userData.grassMap={value:null};l.userData.sandMap={value:null};l.userData.rockMap={value:null};l.userData.rockMapBump={value:null};l.userData.gravelMap={value:null};l.userData.heatherMap={value:null};l.userData.forestMap={value:null};l.userData.fadeFine={value:le};l.userData.roadCol={value:[]};l.userData.fresnelIntensity={value:.5};l.userData.radiance={value:0};l.userData.grassColA={value:[]};l.userData.grassColB={value:[]};l.userData.peakColA={value:[]};l.userData.peakColB={value:[]};l.userData.fieldDiscolouration={value:[]};l.userData.vehicleIndex={value:0};l.userData.sinkDist={value:400};l.userData.seasonIndex={value:1};l.onBeforeCompile=a=>(a.uniforms.grassMap=l.userData.grassMap,a.uniforms.sandMap=l.userData.sandMap,a.uniforms.rockMap=l.userData.rockMap,a.uniforms.rockMapBump=l.userData.rockMapBump,a.uniforms.gravelMap=l.userData.gravelMap,a.uniforms.heatherMap=l.userData.heatherMap,a.uniforms.forestMap=l.userData.forestMap,a.uniforms.fadeFine=l.userData.fadeFine,a.uniforms.grassColA=l.userData.grassColA,a.uniforms.grassColB=l.userData.grassColB,a.uniforms.peakColA=l.userData.peakColA,a.uniforms.peakColB=l.userData.peakColB,a.uniforms.fieldDiscolouration=l.userData.fieldDiscolouration,a.uniforms.roadCol=l.userData.roadCol,a.uniforms.fresnelIntensity=l.userData.fresnelIntensity,a.uniforms.radiance=l.userData.radiance,a.uniforms.sinkDist=l.userData.sinkDist,a.uniforms.vehicleIndex=l.userData.vehicleIndex,a.uniforms.shadowFactor=Z,a.uniforms.seasonIndex=l.userData.seasonIndex,a.vertexShader=a.vertexShader.replace("#include <displacementmap_pars_vertex>",Wi+qe),a.vertexShader=a.vertexShader.replace("#include <displacementmap_vertex>",ji),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",""),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),a.fragmentShader=a.fragmentShader.replace("#include <map_pars_fragment>",Vi+Je),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Xi+$e),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),a);const I=new E({map:v(z),alphaTest:.75});I.needsCameraPosition=!0;I.userData.shadowMap={value:b};I.userData.bridgeMap={value:b};I.userData.useShadowBlend={value:!1};I.userData.useBridgeBlend={value:!1};I.onBeforeCompile=a=>(a.uniforms.fresnelIntensity=l.userData.fresnelIntensity,a.uniforms.radiance=l.userData.radiance,a.uniforms.shadowMap=I.userData.shadowMap,a.uniforms.useShadowBlend=I.userData.useShadowBlend,a.uniforms.bridgeMap=I.userData.bridgeMap,a.uniforms.useBridgeBlend=I.userData.useBridgeBlend,a.uniforms.shadowFactor=Z,a.vertexShader=a.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+Fr+Va+qe),a.vertexShader=a.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+kr+Xa+Hr),a.fragmentShader=a.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+zr+Qa+Je),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Gr+$e),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),a);const Jr=new _e({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0});Jr.needsCameraPosition=!0;const p=new _e({depthTest:!1,fog:!0,map:b,toneMapped:!0,side:Q});p.needsCameraPosition=!0;p.userData.highlight={value:new Le(16777215)};p.userData.lowlight={value:new Le(15658734)};p.userData.hasClouds={value:!0};p.userData.camPos={value:new Ke};p.userData.time={value:0};p.userData.shelfHeight0={value:1e3};p.userData.shelfHeight1={value:1200};p.userData.skyScale0={value:6e3};p.userData.skyScale1={value:3e3};p.userData.mode={value:0};p.userData.altitude={value:200};p.customProgramCacheKey=()=>"clouds";p.onBeforeCompile=a=>(a.uniforms.highlight=p.userData.highlight,a.uniforms.lowlight=p.userData.lowlight,a.uniforms.hasClouds=p.userData.hasClouds,a.uniforms.camPos=p.userData.camPos,a.uniforms.time=p.userData.time,a.uniforms.shelfHeight0=p.userData.shelfHeight0,a.uniforms.shelfHeight1=p.userData.shelfHeight1,a.uniforms.skyScale0=p.userData.skyScale0,a.uniforms.skyScale1=p.userData.skyScale1,a.uniforms.mode=p.userData.mode,a.uniforms.altitude=p.userData.altitude,a.vertexShader=a.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+Pi),a.vertexShader=a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+Hi),a.vertexShader=a.vertexShader.replace("#include <fog_pars_vertex>",ki),a.vertexShader=a.vertexShader.replace("#include <fog_vertex>",zi),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",Fi),a.fragmentShader=a.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Gi),a.fragmentShader=a.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+Bi),a);let y=new _e({});y.userData.camPos={value:new Ke};y.userData.waves={value:v(jr,4,void 0,Wa)};y.userData.body={value:new Le};y.userData.highlight={value:new Le};y.userData.time={value:0};function $r(a=!1,t=!1){y.defines={},a&&(y.defines.WATER_DEPTH=""),t&&(y.defines.WATER_WAVES=""),y.onBeforeCompile=e=>(e.uniforms.body=y.userData.body,e.uniforms.highlight=y.userData.highlight,e.uniforms.waves=y.userData.waves,e.uniforms.time=y.userData.time,e.uniforms.camPos=y.userData.camPos,e.vertexShader=e.vertexShader.replace("#include <color_pars_vertex>",`#include <color_pars_vertex>
`+Qi),e.vertexShader=e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
`+Yi),e.fragmentShader=e.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
`+Zi),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+Ki),e)}y.needsCameraPosition=!0;const w={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function Dt(a=!1){let t=new E({map:b,normalMap:a?null:b,alphaMap:a?b:null,alphaTest:a?.4:.5,side:Q,normalMapType:a?null:we,forceSinglePass:!0,customProgramCacheKey:()=>"tree"});return t.needsCameraPosition=!0,a?t.onBeforeCompile=e=>(e.uniforms.noiseMap={value:le},e.uniforms.dissolveNear=w.dissolveNear,e.uniforms.dissolveFar=w.dissolveFar,e.uniforms.dissolveInterval=w.dissolveInterval,e.uniforms.discolourationFactor=w.discolourationFactor,e.uniforms.shadowFactor=Z,e.vertexShader=e.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+qi),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",er),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",nr),e.fragmentShader=e.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+tr),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+rr),e.fragmentShader=e.fragmentShader.replace("#include <lights_lambert_pars_fragment>",sr),e.fragmentShader=e.fragmentShader.replace("#include <lights_fragment_begin>",or),e.fragmentShader=e.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),e):t.onBeforeCompile=e=>(e.uniforms.noiseMap={value:le},e.uniforms.dissolveNear=w.dissolveNear,e.uniforms.dissolveFar=w.dissolveFar,e.uniforms.dissolveInterval=w.dissolveInterval,e.uniforms.radiance=w.radiance,e.uniforms.discolourationFactor=w.discolourationFactor,e.uniforms.shadowFactor=Z,e.uniforms.hasSnow=w.hasSnow,e.vertexShader=e.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+lr),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",cr),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",yt),e.fragmentShader=e.fragmentShader.replace("#include <alphatest_fragment>",hr),e.fragmentShader=e.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+fr),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+gr),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+vr),e.fragmentShader=e.fragmentShader.replace("#include <lights_lambert_pars_fragment>",pr),e.fragmentShader=e.fragmentShader.replace("#include <lights_fragment_begin>",ur),e.fragmentShader=e.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),e),t}let Re=[Dt(),Dt(!0)];new E({map:b,alphaTest:.25,side:Q,forceSinglePass:!0});new E({color:110832});const L=new E({map:v(z,0,B),normalMap:v(z,0,void 0,G),normalMapType:we,alphaTest:.5,forceSinglePass:!0});L.needsCameraPosition=!0;L.userData.noiseMap={value:le};L.userData.mapB={value:v(z)};L.userData.normalMapB={value:v(z)};L.userData.dissolveNear={value:100};L.userData.dissolveFar={value:200};L.userData.dissolveInterval={value:100};L.onBeforeCompile=a=>{a.uniforms.noiseMap=L.userData.noiseMap,a.uniforms.mapB=L.userData.mapB,a.uniforms.normalMapB=L.userData.normalMapB,a.uniforms.dissolveNear=L.userData.dissolveNear,a.uniforms.dissolveFar=L.userData.dissolveFar,a.uniforms.dissolveInterval=L.userData.dissolveInterval,a.uniforms.radiance=w.radiance,a.uniforms.discolourationFactor=w.discolourationFactor,a.uniforms.hasSnow=w.hasSnow,a.vertexShader=a.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+Ar),a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Sr),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",Dr+`
`+Mr),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",_r),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",yt),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_maps>",xr),a.fragmentShader=a.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Lr),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",wr),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>",Cr),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let eo=.25;const H=new E({map:b,alphaTest:eo,side:Q,forceSinglePass:!0});H.needsCameraPosition=!0;H.userData.noiseMap={value:le};H.userData.sproutNear={value:100*100};H.userData.sproutFar={value:200*200};H.customProgramCacheKey=()=>"grassDM";H.onBeforeCompile=a=>{a.uniforms.noiseMap=H.userData.noiseMap,a.uniforms.sproutNear=H.userData.sproutNear,a.uniforms.sproutFar=H.userData.sproutFar,a.uniforms.grassColA=l.userData.grassColA,a.uniforms.grassColB=l.userData.grassColB,a.uniforms.peakColA=l.userData.peakColA,a.uniforms.peakColB=l.userData.peakColB,a.uniforms.fresnelIntensity=l.userData.fresnelIntensity,a.uniforms.radiance=l.userData.radiance,a.uniforms.shadowFactor=Z,a.vertexShader=a.vertexShader.replace("#include <common>","#include <common>"+Ir+qe),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",""+Tr),a.fragmentShader=a.fragmentShader.replace("#include <common>","#include <common>"+Nr+Je),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Rr+`
`+$e),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",Er),a.fragmentShader=a.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Ut),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>",Pt),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let to=.5;const P=new E({map:b,alphaTest:to,side:Q,forceSinglePass:!0});P.needsCameraPosition=!0;P.userData.noiseMap={value:Yr};P.userData.sproutNear={value:100*100};P.userData.sproutFar={value:200*200};P.userData.sproutMargin={value:P.userData.sproutFar.value-P.userData.sproutNear.value};P.onBeforeCompile=a=>{a.uniforms.noiseMap=P.userData.noiseMap,a.uniforms.sproutNear=P.userData.sproutNear,a.uniforms.sproutFar=P.userData.sproutFar,a.uniforms.sproutMargin=P.userData.sproutMargin,a.uniforms.radiance=l.userData.radiance,a.uniforms.shadowFactor=Z,a.vertexShader=a.vertexShader.replace("#include <common>","#include <common>"+yr),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",""+br),a.fragmentShader=a.fragmentShader.replace("#include <common>","#include <common>"+Or),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Pr),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",Ur),a.fragmentShader=a.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Ut),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>",Pt),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const ve=new E({map:b,normalMap:b,alphaTest:.5,side:Q,normalMapType:we,forceSinglePass:!0,customProgramCacheKey:()=>"barrier"});ve.onBeforeCompile=xe();ve.needsCameraPosition=!0;const et=new E({map:b,flatShading:!0});et.onBeforeCompile=xe();et.needsCameraPosition=!0;const me=new E({map:b,normalMap:b,flatShading:!0,alphaTest:.25,side:Q,normalMapType:we,forceSinglePass:!0,customProgramCacheKey:()=>"fence"});me.onBeforeCompile=xe();me.needsCameraPosition=!0;const ue=new E({map:b,flatShading:!0});ue.onBeforeCompile=xe();ue.needsCameraPosition=!0;const Ht=new E({map:b,flatShading:!0,side:Q});Ht.needsCameraPosition=!0;const Ce={white:new E({color:15658734}),black:new E({color:3355443,flatShading:!0}),reflect:new E({color:15658734})};Ce.white.needsCameraPosition=!0;Ce.black.needsCameraPosition=!0;Ce.reflect.needsCameraPosition=!0;const Ft={default:new E({map:v(Xr)})};Ft.default.needsCameraPosition=!0;const tt=new E({map:v(At,4,B),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:v(At,4),emissiveIntensity:0});tt.onBeforeCompile=a=>(a.fragmentShader=a.fragmentShader.replace("#include <lights_pars_begin>",Qr),a);tt.needsCameraPosition=!0;const kt=new E({map:b,color:12303291,flatShading:!0});kt.needsCameraPosition=!0;const ao=new _e({color:0,transparent:!0,opacity:.4});ao.needsCameraPosition=!0;const io=""+new URL("../assets/tree_01.c448cb73.obj",import.meta.url).href,ro=""+new URL("../assets/tree_02.83a1aa7f.obj",import.meta.url).href,oo=""+new URL("../assets/tree_03.0cff4c97.obj",import.meta.url).href,no=""+new URL("../assets/tree_04.62eddda2.obj",import.meta.url).href,so="data:model/obj;base64,IyBCbGVuZGVyIDQuNS4wCiMgd3d3LmJsZW5kZXIub3JnCm8gdmVyZ2VtYXJrZXJfd2hpdGUKdiAtMC4wNTU1NjkgLTAuMTc0OTQ2IDAuMDM2Mjg5CnYgLTAuMDU1NTY5IDEuMDA0Mjc5IDAuMDM2Mjg4CnYgMC4wNTQyOTUgMC45NDcwMjMgMC4wMTgwMTQKdiAwLjA1NDI5NSAtMC4yMzIyMDIgMC4wMTgwMTQKdiAwLjA1NDI5NSAwLjk0NzAyMyAtMC4wMTgwMTQKdiAwLjA1NDI5NSAtMC4yMzIyMDIgLTAuMDE4MDE0CnYgLTAuMDU1NTY5IC0wLjE3NDk0NiAtMC4wMzYyODkKdiAtMC4wNTU1NjkgMS4wMDQyNzkgLTAuMDM2Mjg5CnYgLTAuMDU1NTY5IDAuODQ5MjQwIDAuMDM2Mjg5CnYgMC4wNTQyOTUgMC43OTE5ODQgMC4wMTgwMTQKdiAwLjA1NDI5NSAwLjc5MTk4NCAtMC4wMTgwMTQKdiAtMC4wNTU1NjkgMC44NDkyNDAgLTAuMDM2Mjg5CnYgMC4wNTQyOTUgMC41NzY3MjMgMC4wMTgwMTQKdiAwLjA1NDI5NSAwLjU3NjcyMyAtMC4wMTgwMTQKdiAtMC4wNTU1NjkgMC42MzM5NzkgMC4wMzYyODkKdiAtMC4wNTU1NjkgMC42MzM5NzkgLTAuMDM2Mjg5CnZuIDAuMTY0MSAtMC4wMDAwIDAuOTg2NAp2biAxLjAwMDAgLTAuMDAwMCAtMC4wMDAwCnZuIC0xLjAwMDAgLTAuMDAwMCAtMC4wMDAwCnZuIDAuMTY0MSAtMC4wMDAwIC0wLjk4NjQKdm4gMC40NjIyIDAuODg2OCAtMC4wMDAwCnZ0IDAuNDUxMDU0IDAuNzUwMDAwCnZ0IDAuNDUxMDU0IDEuMDAwMDAwCnZ0IDAuNDYzNjEyIDEuMDAwMDAwCnZ0IDAuNDYzNjEyIDAuNzUwMDAwCnZ0IDAuNDUxMDU0IDAuMDAwMDAwCnZ0IDAuNDUxMDU0IDAuMjUwMDAwCnZ0IDAuNDYzNjEyIDAuMjUwMDAwCnZ0IDAuNDYzNjEyIDAuMDAwMDAwCnZ0IDAuNDUxMDU0IDAuNTAwMDAwCnZ0IDAuNDYzNjEyIDAuNTAwMDAwCnZ0IDAuMzc1MDAwIDAuNzUwMDAwCnZ0IDAuMzc1MDAwIDEuMDAwMDAwCnZ0IDAuNDMzNjE4IDEuMDAwMDAwCnZ0IDAuNDMzNjE4IDAuNzUwMDAwCnZ0IDAuMzc1MDAwIDAuMDAwMDAwCnZ0IDAuMzc1MDAwIDAuMjUwMDAwCnZ0IDAuNDMzNjE4IDAuMjUwMDAwCnZ0IDAuNDMzNjE4IDAuMDAwMDAwCnZ0IDAuMzc1MDAwIDAuNTAwMDAwCnZ0IDAuNDMzNjE4IDAuNTAwMDAwCnMgMApmIDkvMS8xIDEwLzIvMSAzLzMvMSAyLzQvMQpmIDEwLzUvMiAxMS82LzIgNS83LzIgMy84LzIKZiAxMi85LzMgOS8xLzMgMi80LzMgOC8xMC8zCmYgMTEvNi80IDEyLzkvNCA4LzEwLzQgNS83LzQKZiAxLzExLzEgNC8xMi8xIDEzLzEzLzEgMTUvMTQvMQpmIDQvMTUvMiA2LzE2LzIgMTQvMTcvMiAxMy8xOC8yCmYgNy8xOS8zIDEvMTEvMyAxNS8xNC8zIDE2LzIwLzMKZiA2LzE2LzQgNy8xOS80IDE2LzIwLzQgMTQvMTcvNApmIDIvNC81IDMvOC81IDUvNy81IDgvMTAvNQpvIHZlcmdlbWFya2VyX2JsYWNrCnYgLTAuMDU1NTY5IDAuODQ5MjQwIDAuMDM2Mjg5CnYgMC4wNTQyOTUgMC43OTE5ODQgMC4wMTgwMTQKdiAwLjA1NDI5NSAwLjc5MTk4NCAtMC4wMTgwMTQKdiAtMC4wNTU1NjkgMC44NDkyNDAgLTAuMDM2Mjg5CnYgMC4wNTQyOTUgMC41NzY3MjMgMC4wMTgwMTQKdiAwLjA1NDI5NSAwLjU3NjcyMyAtMC4wMTgwMTQKdiAtMC4wNTU1NjkgMC42MzM5NzkgMC4wMzYyODkKdiAtMC4wNTU1NjkgMC42MzM5NzkgLTAuMDM2Mjg5CnZuIDAuMTY0MSAtMC4wMDAwIC0wLjk4NjQKdm4gLTEuMDAwMCAtMC4wMDAwIC0wLjAwMDAKdm4gMS4wMDAwIC0wLjAwMDAgLTAuMDAwMAp2biAwLjE2NDEgLTAuMDAwMCAwLjk4NjQKdnQgMC40MzM2MTggMC4yNTAwMDAKdnQgMC40MzM2MTggMC41MDAwMDAKdnQgMC40NTEwNTQgMC41MDAwMDAKdnQgMC40NTEwNTQgMC4yNTAwMDAKdnQgMC40MzM2MTggMC43NTAwMDAKdnQgMC40NTEwNTQgMC43NTAwMDAKdnQgMC40MzM2MTggMC4wMDAwMDAKdnQgMC40NTEwNTQgMC4wMDAwMDAKdnQgMC40MzM2MTggMS4wMDAwMDAKdnQgMC40NTEwNTQgMS4wMDAwMDAKcyAwCmYgMjIvMjEvNiAyNC8yMi82IDIwLzIzLzYgMTkvMjQvNgpmIDI0LzIyLzcgMjMvMjUvNyAxNy8yNi83IDIwLzIzLzcKZiAyMS8yNy84IDIyLzIxLzggMTkvMjQvOCAxOC8yOC84CmYgMjMvMjUvOSAyMS8yOS85IDE4LzMwLzkgMTcvMjYvOQpvIHZlcmdlbWFya2VyX3JlZmxlY3QKdiAtMC4wMjIwNTQgMC43OTYwNTIgMC4wMzUxMjEKdiAwLjAyMzI3MSAwLjc5NjA1MiAwLjAyNzU4MQp2IDAuMDIzMjcxIDAuNjI5OTExIDAuMDI3NTgxCnYgLTAuMDIyMDU0IDAuNjI5OTExIDAuMDM1MTIxCnYgLTAuMDIyMDU0IDAuNzk2MDUyIC0wLjAzNTA1NAp2IDAuMDIzMjcxIDAuNzk2MDUyIC0wLjAyNzUxNQp2IDAuMDIzMjcxIDAuNjI5OTExIC0wLjAyNzUxNQp2IC0wLjAyMjA1NCAwLjYyOTkxMSAtMC4wMzUwNTQKdm4gMC4xNjQxIC0wLjAwMDAgMC45ODY0CnZuIDAuMTY0MSAtMC4wMDAwIC0wLjk4NjQKdnQgMC40MzM2MTggMC44MjYyNjUKdnQgMC40MzM2MTggMC45Mjk0MDQKdnQgMC40NTEwNTQgMC45Mjk0MDQKdnQgMC40NTEwNTQgMC44MjYyNjUKdnQgMC40MzM2MTggMC44MjYyNjUKdnQgMC40NTEwNTQgMC44MjYyNjUKdnQgMC40NTEwNTQgMC45Mjk0MDQKdnQgMC40MzM2MTggMC45Mjk0MDQKcyAwCmYgMjgvMzEvMTAgMjcvMzIvMTAgMjYvMzMvMTAgMjUvMzQvMTAKZiAzMi8zNS8xMSAyOS8zNi8xMSAzMC8zNy8xMSAzMS8zOC8xMQo=",lo="data:model/obj;base64,IyBCbGVuZGVyIDQuNS4wCiMgd3d3LmJsZW5kZXIub3JnCm8gQ3lsaW5kZXIKdiAtMC4wMDU1NDcgMC4wMDA0NzMgLTAuMDcxMDI3CnYgLTAuMDA1NTQ3IDAuOTg2OTA4IC0wLjA3MTAyNwp2IDAuMDU3NDUyIDAuMDAwNDczIDAuMDM1NTEzCnYgMC4wNTc0NTIgMS4wMjMxNzMgMC4wMzU1MTMKdiAtMC4wNjg1NDYgMC4wMDA0NzMgMC4wMzU1MTMKdiAtMC4wNjg1NDYgMS4wMjMxNzMgMC4wMzU1MTMKdm4gLTAuMDAwMCAtMC4wMDAwIC0xLjAwMDAKdm4gLTAuMDAxNSAwLjQwMjIgLTAuOTE1NQp2biAwLjY5MDggMC42MjgxIDAuMzU4Mgp2biAwLjg2ODYgLTAuMDAwMCAwLjQ5NTUKdm4gMC42OTMxIDAuNjIzMiAwLjM2MjIKdm4gLTAuNjkzMiAwLjYyMzEgMC4zNjIyCnZuIC0wLjg2ODYgLTAuMDAwMCAwLjQ5NTUKdm4gLTAuNjkwOCAwLjYyODIgMC4zNTgxCnZuIDAuMDAxNSAwLjQwMjIgLTAuOTE1Ngp2biAwLjY5MjQgMC42MzAwIDAuMzUxNwp2biAtMC4wMDAxIDAuMzkxNCAtMC45MjAyCnZuIC0wLjY5MjUgMC42MzAwIDAuMzUxNwp2dCAwLjExNTU1MiAwLjAwNDMzMwp2dCAwLjExNTU1MiAwLjk5OTkwMwp2dCAwLjAwMzkyNCAwLjk5OTkwMwp2dCAwLjAwMzkyNCAwLjAwNDMzMwp2dCAwLjM0MDYyMiAwLjAwNDMzMwp2dCAwLjM0MDYyMiAwLjk5OTkwMwp2dCAwLjIyODk5MyAwLjk5OTkwMwp2dCAwLjIyODk5MyAwLjAwNDMzMwp2dCAwLjIyNzIxMiAwLjAwNDMzMwp2dCAwLjIyNzIxMiAwLjk5OTkwMwp2dCAwLjExNTU4NCAwLjk5OTkwMwp2dCAwLjExNTU4NCAwLjAwNDMzMwp2dCAwLjM4OTk1NCAwLjA0OTE0OQpzIDAKZiAxLzEvMSAyLzIvMiA0LzMvMyAzLzQvNApmIDMvNS80IDQvNi81IDYvNy82IDUvOC83CmYgNS85LzcgNi8xMC84IDIvMTEvOSAxLzEyLzEKZiA0LzEzLzEwIDIvMTMvMTEgNi8xMy8xMgo=";let W=1e3,zt={},Gt=30,be={},at=400,Bt,x,it,pe,q=16,de=.5,Ae=!1,Oe=!0,Ue,co=20,he,fo,go,Wt,oe,Pe,jt,Vt=.25,Xt=.8,Qt=1,ho=.5,vo=.9,mo=.9,uo=1,po=1,Yt=0,Zt=1,Kt,qt,Jt,J,De,rt,Y,Se,ot,$t,ea,ta,aa,ia,ra,oa={},Ao=30,Do=.75,na=256,sa={},la=5e3,So=-.3,Mo=10,_o=4,Lo=2,wo=1,xo=.7,Co=.7,da=!0,nt=2,Io=2,ca=5e3;const To=[[io,ro,oo,no],[ai,ii,ri,oi]];let No=!1,He=1e4,Eo=.8,Ro=1.5,yo=.7,Fe=20,bo=40,ke=1,fa=!1,ga=4e3,Oo=.65,Uo=.5,ha=!0,Me=30,Po=3,st=4,va=Me/2-st;const Ho={BridgeWall:0,SeaWall:1,Barrier:2,Fence:3,Drystone:4};let lt=2,ma=x+lt;const Fo=2,ua=.16,ko=.38,zo=.2,Go=1.1,Bo=ua*2,pa=.475,Wo=(1-pa)*2,jo=5;let ze=2,Ge=1.5,Be=.4,We=.2,je=.8,Ve=.8,Vo=4,Aa=10;const Xo={VergeMarker:{src:so,materials:Ce,retireMargin:10},DriftmasMarker:{src:lo,materials:Ft,retireMargin:10}};let Da=25,Sa=10,Ma=100,Qo=35,Yo=3,Zo=.75,_a=!1,Xe=4,La=[];const Ko=[1,.25,0,.25,1],qo=[1,.565,.25,.0625,0,.0625,.25,.565,1];let Qe=200,Ye=1600,wa=20,xa=!1,Ca=!1,Ia=!1,Ta=!1,Na=!1,Ea=1e3,Ra=150,ya=!0,ba=1,Oa=!0,Ua=!1;const Jo=15,Pa=250,$o=Pa/2,en=.5,tn=.15,an=.7,rn=(a,t)=>{let e=K.graphics.viewDistance[a],r=K.graphics.detail[t];Gt=e.heightmapMaxCached,W=e.tileSize*2,Se=t>2,rt=W*J,Y=W*De,ot=Math.sqrt(5/(Y*Y)),Bt=e.roadNodes,Ue=e.tileSize,he=r.cellRes,Wt=e.lod0Horizon,oe=e.lod1Horizon,Da=oe*2,Sa=oe/2,na=r.shadowRes,Pe=Math.max(1,Math.floor(r.sea.res*(Ue/20))),jt=Pe+1,da=r.trees.has3D,nt=r.trees.typeCount,la=e.imposterInstanceSize,ca=e.treeInstanceSize,Me=e.maxWallLength,va=Me/2-st,Aa=e.objectDespawnHorizon,Ma=e.bridgeLookahead,_a=r.bridges.genArches,Xe=r.bridges.segments,La=Xe==4?Ko:qo,Qe=e.cloudAltitude,Ye=Math.max(W*2,Qe*12),wa=Math.max(20,Ye/400),Fe=r.grass.margin,ke=r.grass.density,He=he*he*ke*oe*(1+Fe/12),ga=He*.2,fa=t==0,Ea=e.fieldMapScale,Ra=e.midlineIndexMargin,at=e.midlineFineHorizon,ya=r.fields.render,Oa=r.fields.col,Ua=r.fields.boundary,ba=r.fields.treeDensity,Kr(r),qr(e)};let Ze=null,Ha=null,dt=100,ct=100;const Fa={midline:{isStraight:!1,smoothWindow:7,maxGrad:.12,roadSink:.4,smoothFactor:1,maxTurnDelta:.7,fineHorizon:600,feelDist:5,feelAng:.6,minStartElev:5,maxStartElev:150,genRadius:0,genRadiusMargin:0,genMinRadius:-2,curvatureHeightFactor:5,squared:!0,direction:null,turnbackLimits:[3,3.5,4,5],seed:62,restartmargin:500,restartMargin:5e3,spiralise:!1,smoothingStrength:1,startPos:null,startHeading:null},heightmap:{scale:120,offset:60,layerResolutions:[3,31],squared:!1,depthHeightFactor:1.2,temper:!1,temperBase:0,temperBelow:150,temperMin:.25,tileScaleRandom:0,peakScale:2,peakOffset:0,peakDistortFactor:1,peakDistortRes:3,peakDistortDepth:4,peakDistortUpscale:3,peakCount:7,peakRadiusMin:1e3,peakRadiusMargin:400,peakHeightRatioMin:.15,peakHeightRatioMargin:.15,peakNegativeChange:.1,peakNegativeFactor:.21,peakAdditive:!0,peakNegativeChance:.15,peakTileScale:4e3,resolution:6,upscale:2,depth:3,blendElev:250,blendMin:.75,blendSq:!1,peakSpacingFactor:.6},treemap:{scale:100,offset:50,layerResolutions:[1,2,3,4,5],squared:!0,depthHeightFactor:2,temper:!1,tileScaleRandom:0,resolution:6,depth:3,upscale:2,treeElevScale:50},road:{width:1.8},seed:26,snowOffset:50,snowMargin:40},on=(a,t=null)=>{let e=K.roadStyle[a];console.log("CONFIG: Loading from localStorage"),e=Fa,e||(e=K.roadStyle[a]),t=3.9,dt=e.snowOffset??100,ct=e.snowMargin??100,t?pe=t:pe=e.road.width,zt=e.heightmap,sa={...e.heightmap,...e.treemap},be=e.midline,be.fineHorizon=at,Ze=new se({scale:.8,offset:0,resolution:5,depth:3,upscale:3,tileSize:80,spiralise:!1,repeated:!0}),Ha=new se({scale:.2,offset:0,resolution:5,depth:2,upscale:3,tileSize:800,spiralise:!1,repeated:!0})},nn=a=>{a==ae.AUTO?x=pe:x=re[a],Ae=x<3.2,ma=lt+x,it=x/2,q=24-x,Ae?(ze=4,Ge=2.5,Be=1,We=.5,je=.8,Ve=1.2,Oe=!1):(ze=2,Ge=1.5,Be=.4,We=.2,je=.8,Ve=1,Oe=!0)},sn=a=>{var e;let t={...K.style[a.season].common,...K.style[a.season][a.time][a.weather]};Qt=t.friction.road,Vt=t.friction.grass,Xt=t.friction.gravel,Kt=t.fog.colA,qt=t.fog.colB,Jt=t.fog.colC??t.fog.colB,ta=t.water.underwater,aa=t.water.body,ha=!((e=t.effects)!=null&&e.frozenWater),J=t.fog.near,De=t.fog.far,rt=W*J,Y=W*De,ot=Math.sqrt(5/(Y*Y)),$t=t.fog.hazeHeight??0,ea=t.fog.hazeIntensity??0,ia=t.colours.clear,Ca=!!t.stars,Ia=t.stars,Ta=!!t.snow,Na=t.snow,ra=t.lights,Yt=t.surfaces.road,Zt=t.surfaces.offroad,xa=t.clouds.hasClouds!==!1,oa=t.audio,Zr(a.season,t)};let ln=K.styleMeta.presets;const ka=(a,t,e,r,n=!1)=>{n||(t.s==Math.sign(t.g)?t.ga=.5+Math.abs(t.g/2):t.ga=.5,t.w=x+de*(1+Math.min(3,t.ga/2)),D.rm=q);let d=q*.75,f=Math.max(0,Math.min(1,1-(t.d-t.w)/d));if(f==0)return 0;let c=0;if(D.l=1,D.la=1,t.d<t.w&&(D.l=t.d/t.w,D.la=(Math.cos(t.d/t.w*Math.PI*2)+1)/2,D.l<.5&&(D.la*=.3),c-=(1-D.la)*.2),D.l*=t.s,e===void 0)return 0;c+=Ze.getXZ(e,r);let m=Ze.getXZ(e,r),h=.5,A=Ha.getXZ(e,r)+m*.2,_=(a-dt)/ct;m+=.4*(1-Math.min(Math.max(0,_*2),1)),_=Math.min(Math.max(-.5,_),.25),_<0&&(f*=1+_),A+=_;let u=1,S=0,M=x*.5,O=0,T=Math.max(-1,Math.min(1,t.g*t.s)),C=Math.max(0,t.s*(t.n.bank*(1-t.t)+t.n.next.bank*t.t))*.25;if(T=Math.max(T,C),T>0&&(M+=T*2),h+=T*.8,t.d<t.w){if(h*=t.d/t.w,t.d<t.w-M){let F=1-t.d/(t.w-M);u=St(F)*O}else{let F=1-(t.w-t.d)/M;u=Math.sqrt(St(F))}u=S+(1-S)*u}return u*=f,c=(m+h)*u+A*f,u>.25&&(c=Math.max(c,u-.25)),c=Math.max(0,c),c},D={},dn=(a,t,e,r,n=1,d=!1)=>{var c,m;D.h=0,t.h=t.n.h+t.t*(t.n.next.h-t.n.h),t.gfa=t.n.gfa+t.t*(t.n.next.gfa-t.n.gfa),t.s==Math.sign(t.g)?t.ga=.5+Math.abs(t.g/2):t.ga=.5,t.w=x+de*(1+Math.min(3,t.ga/2)),t.ga=1-t.ga*t.ga,D.rm=q;let f=ka(a,t,e,r,!0)*n;return t.d<t.w+D.rm?t.d<it&&!t.n.bridge?t.y+Math.max(0,f):(D.lt=Math.max(0,Math.min(1,2*(t.d-t.w)/D.rm)),D.lt=za(D.lt),D.h=a,D.rd=t.d-t.w,t.n.bridge&&((c=t.n.next)!=null&&c.bridge)&&(t.n.next.next.bridge?(m=t.n.prev)!=null&&m.bridge?D.lt=1:D.lt=Math.max(t.t,D.lt):D.lt=Math.max(1-t.t,D.lt),t.d<x+de+1&&D.h>t.y&&(D.h=t.y)),D.h*D.lt+t.y*(1-D.lt)+f):a},St=a=>(a*(a*6-15)+10)*a*a*a,za=a=>a>.3333?(D.lerp=1-(a-.3333)/.6667,1-D.lerp*D.lerp*.5):a*1.5,Wn=Object.freeze(Object.defineProperty({__proto__:null,get ANIMATE_WATER(){return ha},get AUDIO(){return oa},AUDIO_WIND_SPEED:Ao,AUDIO_WIND_VOL:Do,get BARRIER_DIST(){return je},get BARRIER_GRADIENT_MAINT(){return Ge},get BARRIER_GRADIENT_THRESHOLD(){return ze},get BARRIER_TURN_MAINT(){return We},get BARRIER_TURN_THRESHOLD(){return Be},get BRIDGE_GEN_ARCHES(){return _a},get BRIDGE_HEIGHTS(){return La},get BRIDGE_LOOKAHEAD(){return Ma},BRIDGE_MAX_NODES:Qo,BRIDGE_MIN_NODES:Yo,get BRIDGE_SEGMENTS(){return Xe},BRIDGE_WALL_HEIGHT:Zo,get BUSH_INSTANCE_SIZE(){return ga},BUSH_SPRITE_DENSITY:Uo,BUSH_SPRITE_MIN_FLATNESS:Oo,get CELL_RES(){return he},CELL_SIZE:co,get CLEAR_COL(){return ia},get CLOUD_ALTITUDE(){return Qe},get CLOUD_RES(){return wa},get CLOUD_SCALE(){return Ye},get DRYSTONE_DIST(){return ma},DRYSTONE_GRADIENT_THRESHOLD:Fo,DRYSTONE_HEIGHT:Go,DRYSTONE_MARGIN:lt,DRYSTONE_SINK:zo,DRYSTONE_UV_HEIGHT:pa,DRYSTONE_UV_SCALE:jo,DRYSTONE_UV_WIDTH:Wo,DRYSTONE_WIDTH:Bo,DRYSTONE_WIDTH_BOTTOM:ko,DRYSTONE_WIDTH_TOP:ua,get FIELD_HAS_BOUNDARY(){return Ua},get FIELD_HAS_COL(){return Oa},get FIELD_HAS_RENDER(){return ya},get FIELD_MAP_SCALE(){return Ea},FIELD_MAX_GRADE:an,FIELD_MAX_HEIGHT:Pa,FIELD_MAX_HEIGHT_HALF:$o,FIELD_MAX_TREE_DENSITY:tn,FIELD_MIN_HEIGHT:Jo,FIELD_PROBABILITY_THRESHOLD:en,get FIELD_TREE_DENSITY(){return ba},get FOG_COL_A(){return Kt},get FOG_COL_B(){return qt},get FOG_COL_C(){return Jt},get FOG_DENSITY(){return ot},get FOG_EXP2(){return Se},get FOG_FAR(){return Y},get FOG_FAR_FACTOR(){return De},get FOG_HAZE_HEIGHT(){return $t},get FOG_HAZE_INTENSITY(){return ea},get FOG_NEAR(){return rt},get FOG_NEAR_FACTOR(){return J},FOLIAGE_SPRITE_MIN_FLATNESS:yo,get FWD_VIEW_DISTANCE(){return W},GRASS_BOUNCE:vo,get GRASS_FRICTION(){return Vt},get GRASS_SPRITE_DENSITY(){return ke},get GRASS_SPRITE_INSTANCE_SIZE(){return He},get GRASS_SPRITE_MARGIN(){return Fe},GRASS_SPRITE_MIN_ELEVATION:Ro,GRASS_SPRITE_SCALE:Eo,GRASS_SPRITE_SINK_FACTOR:bo,GRAVEL_BOUNCE:mo,get GRAVEL_FRICTION(){return Xt},get HAS_CLOUDS(){return xa},get HAS_SNOW(){return Ta},get HAS_STARS(){return Ca},get HEIGHTMAP(){return zt},get HEIGHTMAP_MAX_CACHED(){return Gt},ICE_BOUNCE:po,ICE_FRICTION:ho,get LIGHTS(){return ra},get LOD_0_HORIZON(){return Wt},get LOD_1_HORIZON(){return oe},get MAX_WALL_LENGTH(){return Me},get MIDLINE(){return be},get MIDLINE_FINE_HORIZON(){return at},get MIDLINE_INDEX_MARGIN(){return Ra},MIN_WALL_GAP:st,MIN_WALL_LENGTH:Po,get OBJECT_DESPAWN_MARGIN(){return Aa},OBJECT_LIBRARY:Xo,get OFFROAD_SURFACE(){return Zt},PRESETS:ln,ROAD_BOUNCE:uo,get ROAD_FRICTION(){return Qt},get ROAD_IS_SINGLE_TRACK(){return Ae},get ROAD_MARGIN(){return q},get ROAD_NODES(){return Bt},ROAD_SIDING:de,get ROAD_SURFACE(){return Yt},get ROAD_WIDTH(){return x},get ROAD_WIDTH_AUTO(){return pe},get ROAD_WIDTH_HALF(){return it},get SEAWALL_DIST(){return Ve},SEAWALL_ELEV:Vo,get SEA_RES(){return Pe},get SEA_RES_1(){return jt},get SHADOW_RES(){return na},get SHOW_CATS_EYES(){return Oe},SHOW_GRASS:No,get SIGN_LOOKAHEAD(){return Da},get SIGN_RETIRE_HORIZON(){return Sa},get SKIP_FOLIAGE(){return fa},get SNOW_CONFIG(){return Na},get SNOW_MARGIN(){return ct},get SNOW_OFFSET(){return dt},get STAR_CONFIG(){return Ia},STATIC_CONFIG:Fa,TILE_LOOKAHEAD_HORIZON:fo,get TILE_SIZE(){return Ue},TILE_STAGE_HORIZON:go,get TREEMAP(){return sa},get TREE_HAS_3D(){return da},TREE_MIN_ELEV:Lo,TREE_MIN_FLATNESS:xo,TREE_MIN_FLATNESS_FAR:Co,get TREE_MODEL_INSTANCE_SIZE(){return ca},TREE_OBJECTS:To,TREE_ROAD_MARGIN:wo,TREE_SINK:Io,get TREE_SPRITE_INSTANCE_SIZE(){return la},TREE_SPRITE_OFFSET:So,TREE_SPRITE_SCALE:Mo,get TREE_TYPE_COUNT(){return nt},TREE_VARIANT_COUNT:_o,get UNDERWATER_COL(){return ta},get UNDERWATER_COL_SURFACE(){return aa},get WALL_LENGTH_BACKFILL(){return va},WallType:Ho,getRoadBlendedHeight:dn,getSnowDepth:ka,loadAestheticSettings:sn,loadGraphicsSettings:rn,loadRoadWidth:nn,loadWorldSettings:on,roadLerp:za},Symbol.toStringTag,{value:"Module"})),i={id:0},R={},k=[],te={};class cn extends Ja{constructor(e={}){super(e);N(this,"debug",!0);N(this,"config",{seed:"a",scale:1,offset:0,resolution:5,upresFactor:2,depth:3,upscale:4,depthHeightFactor:1,layerResolutions:[],squared:!1,temper:!1,temperBelow:100,temperMin:.25,spiralise:!0,maxCached:32,tileScaleRandom:0,peakTileScale:4e3,peakScale:1,peakOffset:10,peakDistortFactor:1,peakDistortRes:2,peakDistortDepth:2,peakDistortUpscale:3,peakCount:50,peakRadiusMin:1e3,peakRadiusMargin:2e3,peakHeightRatioMin:.1,peakHeightRatioMargin:.4,peakNegativeChance:0,peakNegativeFactor:.5,peakSpacingFactor:.8,peakAdditive:!0,blendElev:400,blendMin:0,blendSq:!0,treeElevScale:1,treePeakFactor:.2,midlinePeakFactor:.9});N(this,"distortMap");N(this,"ridgeX");N(this,"allPeaksCache",{});this.config={...this.config,...e},k.length=0,this.tileSize=this.config.peakTileScale,this.distortMap=new se({resolution:this.config.peakDistortRes,depth:this.config.peakDistortDepth,upscale:this.config.peakDistortUpscale}),this.perlinMap=new se({scale:this.config.scale,offset:this.config.offset,resolution:this.config.resolution,depth:this.config.depth,upscale:this.config.upscale}),this.config.layerResolutions.length?this.config.depth=this.config.layerResolutions.length:this.generateLayerResolutions()}generatePeaks(){k.length=0;const e=new ie(this.config.seed);let r=this.config.peakHeightRatioMin+this.config.peakHeightRatioMargin;for(let n=0;n<this.config.peakCount;n++){let d=e.next()*this.tileSize,f=e.next()*this.tileSize,c=this.config.peakRadiusMin+e.next()*this.config.peakRadiusMargin,m=c*(r-e.next()*this.config.peakHeightRatioMargin);e.next()<this.config.peakNegativeChance&&(m*=-this.config.peakNegativeFactor),k.push([d,f,c,m])}ut.set(k)}generatePeaksPoisson(){k.length=0;const e=new ie(this.config.seed);let r=this.config.peakHeightRatioMin+this.config.peakHeightRatioMargin,n=Math.ceil(Math.sqrt(this.config.peakCount)),f=(this.tileSize/n)**2;for(let c=0;c<this.config.peakCount;c++){let m,h,A=f;do{m=(e.next()-.5)*this.tileSize,h=(e.next()-.5)*this.tileSize,A=f;for(let S of k){let M=(m-S[0])**2+(h-S[1])**2;if(M<f){A=M;break}}}while(A<f);let _=this.config.peakRadiusMin+.5+this.config.peakRadiusMargin+.5*e.next()*this.config.peakRadiusMargin,u=_*(r-e.next()*this.config.peakHeightRatioMargin);e.next()<this.config.peakNegativeChance&&(u*=-this.config.peakNegativeFactor),k.push([m,h,_,u])}ut.set(k)}generatePeakClusters(){k.length=0;const e=new ie(this.config.seed);let r=this.config.peakHeightRatioMin+this.config.peakHeightRatioMargin,n=Math.ceil(Math.sqrt(this.config.peakCount)),f=(this.config.peakTileScale/n*3)**2,c=[];for(let m=0;m<n;m++){let h,A,_=f;do{h=(e.next()-.5)*this.config.peakTileScale,A=(e.next()-.5)*this.config.peakTileScale,_=f;for(let M of k){let O=(h-M[0])**2+(A-M[1])**2;if(O<f){_=O;break}}}while(_<f);let u=this.config.peakRadiusMin+.5+this.config.peakRadiusMargin+.5*e.next()*this.config.peakRadiusMargin,S=u*(r-e.next()*this.config.peakHeightRatioMargin);e.next()<this.config.peakNegativeChance&&(S*=-this.config.peakNegativeFactor),k.push([h,A,u,S]),c.push([h,A,u,S])}for(let m=0;m<n;m++)for(let h of c){let A=e.next()*Math.PI*2,_=h[0]+Math.cos(A)*h[2]*e.next()*.33,u=h[1]+Math.sin(A)*h[2]*e.next()*.33,S=h[2]*.5+e.next()*h[2]*.5,M=S*(r-e.next()*this.config.peakHeightRatioMargin);e.next()<this.config.peakNegativeChance&&(M*=-this.config.peakNegativeFactor),k.push([_,u,S,M])}peaks.set(k)}generateLayerResolutions(){let e=this.config.resolution;for(let r=0;r<this.config.depth;r++)this.layerResolutions.push(e),e=e+this.config.upresFactor*(r+1)}generateTile(e,r,n=!1){if(e in te){if(r in te[e])return te[e][r]}else te[e]={};let d=new ie(this.config.seed+"#"+this.curLayer[e<0?0:1]+"#"+e+"#"+r),f=this.config.peakHeightRatioMin+this.config.peakHeightRatioMargin,c=this.config.peakCount*(1+this.config.tileScaleRandom*(d()-.5)),m=Math.max(0,Math.sqrt(c))+1,h=this.tileSize/m*this.config.peakSpacingFactor,A=h**2,u=h/2/this.tileSize,S=1-u*2,M=[],O=e*this.tileSize,T=r*this.tileSize;for(let C=0;C<c;C++){let F,Ie,Te=A;do{F=O+(u+S*d.next())*this.tileSize,Ie=T+(u+S*d.next())*this.tileSize,Te=A;for(let gt of M){let ht=(F-gt[0])**2+(Ie-gt[1])**2;if(ht<A){Te=ht;break}}}while(Te<A);let ce=this.config.peakRadiusMin+d.next()*this.config.peakRadiusMargin,ft=ce*(f-d.next()*this.config.peakHeightRatioMargin);d.next()<this.config.peakNegativeChance&&(ft*=-this.config.peakNegativeFactor),M.push([F,Ie,ce,ft,ce*ce])}return te[e][r]=M,M}getRoadBlendedXZ(e,r,n){return R.h=0,n.h=n.n.h+n.t*(n.n.next.h-n.n.h),n.gfa=n.n.gfa+n.t*(n.n.next.gfa-n.n.gfa),n.ga=Math.max(Math.abs(n.g),Math.abs(n.h))/3.6,n.w=x+de+n.ga,n.y-=.01+.01*n.gfa,n.ga=1-n.ga*n.ga,R.rm=q*.25+q*Math.min(.75,Math.max(.4,n.ga)),n.d<n.w+i.rm?n.d<x&&!n.n.bridge?n.y:(R.lt=Math.max(0,Math.min(1,2*(n.d-n.w)/i.rm)),R.lt=this.roadLerp(R.lt),R.h=this.getXZ(e,r),n.n.bridge&&R.h<0&&(R.h>-n.y?R.lt=Math.max(R.lt,R.h/-n.y):R.lt=1),R.h*R.lt+n.y*(1-R.lt)):this.getXZ(e,r)}roadLerp(e){return e>.3333?(R.lerp=1-(e-.3333)/.6667,1-R.lerp*R.lerp*.5):e*1.5}getCurvature(e,r){return 0}getTreeXZ(e,r){return this.getXZ(e,r,this.config.treePeakFactor)/this.config.treeElevScale}getMidlineXZ(e,r){return this.getXZ(e,r,this.config.midlinePeakFactor,!0)}getXZInverted(e,r,n=1){let d=this.getPeakXZ(e,r),f=1,c=this.config.blendElev;return d<c&&(d>0?f=d/c:f=0),this.config.blendSq&&(f*=f),f=1-f*(1-this.config.blendMin),n*d+this.getPerlinXZ(e,r)*f}getXZ(e,r,n=1,d=!1){let f=this.getPeakXZ(e,r),c=1,m=this.config.blendElev;if(f<m&&(f>0?c=f/m:c=0),this.config.blendSq&&(c*=c),c=Math.max(this.config.blendMin,c),d&&f<10){let h=f/10;n=n*h+(1-h)}return n*f+this.getPerlinXZ(e,r)*c}getDistortedXZ(e,r,n=1){let d=this.distortMap.getXZ(e,r)*2*Math.PI,f=Math.sin(d),c=Math.cos(d);return e+=f*200*n,r+=c*200*n,{wx:e,wz:r}}getPerlinXZ(e,r){return this.perlinMap.getXZ(e,r)}customPruneTile(e,r){e in this.allPeaksCache&&(delete this.allPeaksCache[e][r],Object.keys(this.allPeaksCache[e]).length==0&&delete this.allPeaksCache[e])}getPeakXZ(e,r){let n=this.getDistortedXZ(e,r,this.config.peakDistortFactor);e=n.wx,r=n.wz;let d=0,f=Math.floor(e/this.tileSize),c=Math.floor(r/this.tileSize),m=[];if(f in this.allPeaksCache&&c in this.allPeaksCache[f])m=this.allPeaksCache[f][c];else{f in this.allPeaksCache||(this.allPeaksCache[f]={});let h=(f+.5)*this.tileSize,A=(c+.5)*this.tileSize,_,u,S,M,O;for(let T=-1;T<2;T++)for(let C=-1;C<2;C++)if(T==0&&C==0)m.push(...this.getTile(f+T,c+C));else{_=this.getTile(f+T,c+C);for(M of _)O=this.tileSize/2+M[2],u=M[0]-h,u<0&&(u*=-1),S=M[1]-A,S<0&&(S*=-1),u<O&&u>-O&&S<O&&S>-O&&m.push(M)}this.allPeaksCache[f][c]=m}for(let h of m){let A=e-h[0],_=r-h[1],u=A*A+_*_;if(u>h[4])continue;u=Math.sqrt(u);let S=1-u/h[2];S*=S,this.config.peakAdditive?d+=S*h[3]:h[3]>0&&d>0?d=Math.max(d,S*h[3]):h[3]<0&&d<0?d=Math.min(d,S*h[3]):d+=S*h[3]}return d*this.config.peakScale+this.config.peakOffset}getRidgeXZ(e,r,n=null){const d=[250,200,220,150,160,180,140,100,110,80,50,40,20,10,0],f=100;let c=0;const m=500,h=Math.abs(r),A=Math.abs(e);h<m&&(c=1-h/m,c*=c);let _=0;if(c>0){let T=A/f,C=Math.floor(T),F=T-C;C<d.length-1&&(_=d[C]*(1-F)+F*d[C+1]),_*=c}const u=[250,200,220,150,160,180,140,100,110,80,50,40,20,10,0],S=100;let M=0;h<m&&(M=1-A/m,M*=M);let O=0;if(M>0){let T=h/S,C=Math.floor(T),F=T-C;C<u.length-1&&(O=u[C]*(1-F)+F*u[C+1]),O*=M}return _+O}getXZLayer(e,r,n,d=this.config.depth){i.d=0,i.h=0,i.heightFactor=1,i.sq=this.config.layerResolutions[0],i.sqb=i.sq-1,i.wx=e/this.tileSize,i.wz=r/this.tileSize,i.ox=Math.floor(i.wx),i.oz=Math.floor(i.wz),i.px=i.wx-i.ox,i.pz=i.wz-i.oz,i.tile=this.getTile(i.ox,i.oz),d=d||this.config.depth,i.depth=0,i.i=0;for(i.layer of i.tile){if(i.depth==d)break;if(i.i++!==n){i.depth++,i.sq=this.config.layerResolutions[i.depth],i.sqb=i.sq-1;continue}i.ix=Math.floor(i.px*i.sq-.5),i.iz=Math.floor(i.pz*i.sq-.5),i.th=0,i.ix>=0?(i.iz>=0?i.th+=this.lerpHeight(i.d,i.px,i.pz,i.layer[i.ix][i.iz]):i.th+=this.lerpHeight(i.d,i.px,i.pz+1,this.getTile(i.ox,i.oz-1)[i.depth][i.ix][i.sqb]),i.iz<i.sqb?i.th+=this.lerpHeight(i.d,i.px,i.pz,i.layer[i.ix][i.iz+1]):i.th+=this.lerpHeight(i.d,i.px,i.pz-1,this.getTile(i.ox,i.oz+1)[i.depth][i.ix][0])):(i.iz>=0?i.th+=this.lerpHeight(i.d,i.px+1,i.pz,this.getTile(i.ox-1,i.oz)[i.depth][i.sqb][i.iz]):i.th+=this.lerpHeight(i.d,i.px+1,i.pz+1,this.getTile(i.ox-1,i.oz-1)[i.depth][i.sqb][i.sqb]),i.iz<i.sqb?i.th+=this.lerpHeight(i.d,i.px+1,i.pz,this.getTile(i.ox-1,i.oz)[i.depth][i.sqb][i.iz+1]):i.th+=this.lerpHeight(i.d,i.px+1,i.pz-1,this.getTile(i.ox-1,i.oz+1)[i.depth][i.sqb][0])),i.ix<i.sqb?(i.iz>=0?i.th+=this.lerpHeight(i.d,i.px,i.pz,i.layer[i.ix+1][i.iz]):i.th+=this.lerpHeight(i.d,i.px,i.pz+1,this.getTile(i.ox,i.oz-1)[i.depth][i.ix+1][i.sqb]),i.iz<i.sqb?i.th+=this.lerpHeight(i.d,i.px,i.pz,i.layer[i.ix+1][i.iz+1]):i.th+=this.lerpHeight(i.d,i.px,i.pz-1,this.getTile(i.ox,i.oz+1)[i.depth][i.ix+1][0])):(i.iz>=0?i.th+=this.lerpHeight(i.d,i.px-1,i.pz,this.getTile(i.ox+1,i.oz)[i.depth][0][i.iz]):i.th+=this.lerpHeight(i.d,i.px-1,i.pz+1,this.getTile(i.ox+1,i.oz-1)[i.depth][0][i.sqb]),i.iz<i.sqb?i.th+=this.lerpHeight(i.d,i.px-1,i.pz,this.getTile(i.ox+1,i.oz)[i.depth][0][i.iz+1]):i.th+=this.lerpHeight(i.d,i.px-1,i.pz-1,this.getTile(i.ox+1,i.oz+1)[i.depth][0][0])),i.h+=i.th*i.temper;break}return i.h+this.config.offset}lerpHeight(e,r,n,d){return e=(d.x-r)*(d.x-r)+(d.z-n)*(d.z-n),e<d.r2?this.smootherLerp(e/d.r2)*d.y:0}smoothLerp(e){return e=Math.min(1,e),-1*(3-e*2)*e*e+1}}const fn=3,gn=20,hn=Math.PI*2,Mt=2,s={};class vn{constructor(t=fn,e=gn,r="perlin"){N(this,"layers",[]);N(this,"amplitudeFactor",1);this.depth=t,this.res=e;let n=new ie(r);for(let c=0;c<t;c++){let m=[];for(let h=0;h<e;h++){let A=[];for(let _=0;_<e;_++){let u=n.next()*hn;A.push({x:Math.cos(u),y:Math.sin(u)})}A.push({...A[0]}),m.push(A)}m.push([...m[0]]),this.layers.push(m),e*=Mt}let d=0,f=1;for(let c=0;c<t;c++)d+=f,f/=2;this.amplitudeFactor=1/d,this.amplitudeFactor=.5+this.amplitudeFactor*.5}get(t,e){s.x=t-Math.floor(t),s.z=e-Math.floor(e),s.res=this.res,s.v=0,s.a=this.amplitudeFactor;for(s.l of this.layers)s.sx=s.x*s.res,s.sz=s.z*s.res,s.ix=Math.floor(s.sx),s.ix1=s.ix+1,s.iz=Math.floor(s.sz),s.iz1=s.iz+1,s.qx=s.sx-s.ix,s.qz=s.sz-s.iz,s.n0=this.dotGridGradient(s.l[s.ix][s.iz],s.ix,s.iz,s.sx,s.sz),s.n1=this.dotGridGradient(s.l[s.ix1][s.iz],s.ix1,s.iz,s.sx,s.sz),s.int0=this.smoothLerp(s.n0,s.n1,s.qx),s.n2=this.dotGridGradient(s.l[s.ix][s.iz1],s.ix,s.iz1,s.sx,s.sz),s.n3=this.dotGridGradient(s.l[s.ix1][s.iz1],s.ix1,s.iz1,s.sx,s.sz),s.int1=this.smoothLerp(s.n2,s.n3,s.qx),s.v+=this.smoothLerp(s.int0,s.int1,s.qz)*s.a,s.a/=2,s.res*=Mt;return s.v+.5}dotGridGradient(t,e,r,n,d){return(n-e)*t.x+(d-r)*t.y}smootherLerp(t,e,r){return(e-t)*((r*(r*6-15)+10)*r*r*r)+t}smoothLerp(t,e,r){return t+(e-t)*(r*r*(3-2*r))}}const _t=new Rt([0,0]);let Lt=[[[5.28,8.81],[4.07,4.7],[8.36,8.29],[.73,6.62]],[[4.81,3.69],[2.11,6.46],[8.58,2.78],[7.66,8.88]],[[2.04,2.85],[5.76,7.39],[6.07,2.44],[3.46,5.57]],[[3.91,7.36],[3.93,2.11],[7.27,9.11],[7.9,4.54]],[[4.81,7.08],[1.42,8.06],[1.36,4.91],[8.31,7.76]],[[4.77,4.89],[1.14,2.74],[7.4,2.45],[7.49,9.23]],[[1.64,8.36],[5.85,2.37],[6.85,7.86],[2.42,2.18]],[[7.25,6.91],[3.67,4.08],[7.77,2.79],[2.88,6.94]]],wt=[[[.97,1.21],[4.37,1.4],[3.03,1.17],[.33,1.77]],[[1.91,1.11],[5.23,1.17],[5.35,1.08],[2.88,1.51]],[[4.78,1.12],[5.24,1.27],[.42,1.48],[1.46,1.51]],[[3.26,1.16],[1.42,1.3],[6.06,1.34],[.08,1.48]]],xt=[[1,3,0,0],[0,2,1,0],[2,3,1,2],[3,1,3,2],[2,0,3,0],[3,3,0,1]];const mn=[[[0,0,1,0],[0,3,0,0],[0,0,0,0],[0,0,2,0]],[[1,3,1,1],[1,3,1,0],[3,1,0,1],[0,1,1,1]],[[2,2,0,2],[1,2,2,2],[2,3,2,2],[2,2,2,2]],[[3,1,3,3],[0,3,3,3],[3,0,2,3],[1,3,3,3]]];let un=[[[2,2,2,1],[2,0,2,2],[2,2,2,2],[0,2,2,2]],[[3,0,3,3],[3,3,3,0],[1,3,3,3],[3,3,3,3]],[[0,0,1,0],[1,0,0,0],[2,0,0,0],[0,0,0,0]],[[1,0,1,0],[0,1,3,1],[1,1,3,1],[1,1,1,1]]],pn=.46,An=.58,Dn=.7,Sn=.46,Mn=.58,_n=.7,Ln=4;const ne=[];for(let a=0;a<nt;a++){let t=[];for(let e=0;e<Lt.length;e++)for(let r=0;r<wt.length;r++)for(let n=0;n<xt.length;n++)t.push({t:Lt[e],p:wt[r],v:xt[n]});ne.push(t)}const Ct=ne[0].length,It=new vn(4,4),Tt=new bt("slowroads",Ct*3,Ct),Nt=new bt("slowroads",31,Ln),wn=new si("slowroads",101),g={get:{i:0,a:[],c:0,t:0},vs:[0,0,0,0]};class xn{constructor(){N(this,"map");N(this,"onHeightmapLayersChangedBound",this.onHeightmapLayersChanged.bind(this));_t.addListener(this.onHeightmapLayersChangedBound)}onHeightmapLayersChanged(t){this.map&&this.map.setLayers(t)}init(t,e){this.map=new cn({seed:t,...e}),this.map.setLayers(_t.value),this.typeMap=new se({seed:t,scale:1,resolution:11,depth:4,upscale:2,offset:.45})}getDensityAt(t,e){return 1-Math.max(Math.min(1,this.map.getTreeXZ(t,e)),0)}getShadowDensityAt(t,e){return g.d=1-Math.max(Math.min(1,this.map.getTreeXZ(t,e)),0),g.d>.05?Math.min(1,g.d*1.5+.3):0}getTypeAt(t,e){return 1}getTreesAt(t,e){return g.get.d=this.getDensityAt(t,e),g.dd=(g.get.d-.001)*4,g.ddd=g.dd%1,g.dd*=.8,g.dd=Math.floor(g.dd),wn.next()<g.ddd&&g.dd++,g.get.c=g.dd,g.get.c<=0?(g.get.c=0,g.get):(Ee.detail<1&&g.get.c>1?g.get.c=1:Ee.detail<2&&g.get.c>2?g.get.c=2:g.get.c>3&&(g.get.c=3),g.get.i=Tt.next(),g.get.y=this.getTypeAt(t,e),g.get.a=ne[g.get.y][g.get.i],g.get.y==0?(g.pn=It.get(t/1e3,e/1e3),g.vn=0,g.pn>pn&&(g.pn<An?g.vn=1:g.pn<Dn?g.vn=2:g.vn=3),g.get.v=mn[g.vn][Nt.next()]):(g.pn=It.get(t/2e3,e/2e3),g.get.c<2&&Ee.detail>0&&(g.get.c=2),g.vn=0,g.pn>Sn&&(g.pn<Mn?g.vn=1:g.pn<_n?g.vn=2:g.vn=3),g.get.v=un[g.vn][Nt.next()]),g.get.t=0,g.get)}getArrangementIndex(t,e){return 0}getArrangement(t,e=0){return ne[e][t]}getTreesForDensity(t,e=0){return t<.2?[]:ne[e][Tt.next()]}addExtraTree(t,e,r,n,d,f,c){return-1}removeExtraTree(t,e,r){}}const ge=new xn;let o={},Et=2500,Cn=1900;const In=20,ye=5,X=2,Tn=11,Nn=1;let En=[],Rn=5;class jn extends $a{constructor(...e){super(...e);N(this,"tmn");this.E,o=this.T}load(){return super.load()}rehydrateNode(e){let r=En[e+Rn];return{i:r.i,a:r.a/1e3,d:null,da:r.da/1e3,g:r.g/1e3,gfa:r.gfa/1e3,h:0,n:{x:r.n.x/1e3,z:r.n.z/1e3},p:new Ke(r.p.x/100,r.p.y/100,r.p.z/100),t:r.t/1e3,s:r.s??0,bank:r.bank/100,next:null,prev:null,ps:null,ns:null}}makeHeadNode(){return super.makeHeadNode()}extendMidline(){return super.extendMidline()}smoothHeight(){super.smoothHeight();let e=this.smoothWindowHead.prev;e.prev?(o.da=e.next.a-e.prev.a,o.da>Math.PI?o.da-=Math.PI*2:o.da<-Math.PI&&(o.da+=Math.PI*2),e.bank=o.da*Nn):e.bank=0}update(){return this.didExtend=!1,U.tail.i<U.vehicleIndex+Et&&(this.didExtend=this.extendMidline(),this.smoothWindowHead.i<U.tail.i-Tn&&this.smoothHeight()),this.didExtend&&U.tail.i-U.head.i>Et+In&&(o.n=U.head.next,delete U.head,U.head=o.n,U.head.prev=null,delete U.head.prevFine,this.checkUpdateHeadHeightmap()),U.fineTail.i<U.vehicleIndex+this.config.fineHorizon&&U.fineTail.i<U.tail.i-Cn&&this.extendFine(),this.didExtend}extendFine(){if(super.extendFine(),!!U.fineTail.prev&&(o.n=U.fineTail.prev,o.n.shadowLeft?o.n.shadowLeft=Math.max(o.n.shadowLeft,ge.getShadowDensityAt(o.n.p.x-o.n.n.x*x,o.n.p.z-o.n.n.z*x)):o.n.shadowLeft=ge.getShadowDensityAt(o.n.p.x-o.n.n.x*x,o.n.p.z-o.n.n.z*x),o.n.shadowRight?o.n.shadowRight=Math.max(o.n.shadowRight,ge.getShadowDensityAt(o.n.p.x+o.n.n.x*x,o.n.p.z+o.n.n.z*x)):o.n.shadowRight=ge.getShadowDensityAt(o.n.p.x+o.n.n.x*x,o.n.p.z+o.n.n.z*x),o.th=o.n.p.y-o.n.h,o.th<ye?(o.tgLeft=1,o.tgRight=1,o.n.g<0?o.tgLeft=Math.max(0,1-o.n.g/-X):o.tgRight=Math.max(0,1-o.n.g/X),o.n.shadowLeft*=Math.min(o.th/ye,o.tgLeft),o.n.shadowRight*=Math.min(o.th/ye,o.tgRight)):o.g<-X?o.n.shadowLeft*=Math.max(0,(o.g+X)/X):o.g>X&&(o.n.shadowRight*=Math.max(0,(o.g-X)/X)),o.n.bridge&&(o.n.shadowLeft*=0,o.n.shadowRight*=0),o.n.prev&&o.n.prev.fs>0))for(o.nn=o.n.prev.nextFine,o.fs=o.n.prev.fs+1,o.i=1;o.i<o.fs;o.i++)o.l=o.i/o.fs,o.nn.shadowLeft=o.n.shadowLeft*o.l+o.n.prev.shadowLeft*(1-o.l),o.nn.shadowRight=o.n.shadowRight*o.l+o.n.prev.shadowRight*(1-o.l),o.nn=o.nn.nextFine}}export{Ve as $,Fe as A,ga as B,tt as C,cn as D,Da as E,yo as F,He as G,Fn as H,Sa as I,Ho as J,va as K,Me as L,st as M,Po as N,je as O,vn as P,bt as Q,x as R,Pe as S,la as T,Vo as U,ze as V,y as W,Be as X,Ge as Y,We as Z,et as _,si as a,oe as a$,ue as a0,pa as a1,zo as a2,Go as a3,ua as a4,ko as a5,me as a6,Ma as a7,_a as a8,kt as a9,Y as aA,ot as aB,$t as aC,ea as aD,on as aE,nn as aF,Jr as aG,wa as aH,p as aI,Gn as aJ,Yr as aK,Ia as aL,zt as aM,Gt as aN,_t as aO,sa as aP,be as aQ,dt as aR,ct as aS,Ra as aT,Oe as aU,Xo as aV,l as aW,Bt as aX,I as aY,co as aZ,he as a_,ao as aa,Zo as ab,Xe as ac,La as ad,pt as ae,kn as af,zn as ag,rn as ah,na as ai,xa as aj,Ye as ak,To as al,Re as am,ca as an,W as ao,sn as ap,oa as aq,Ca as ar,Ta as as,ra as at,Qt as au,Kt as av,qt as aw,Jt as ax,J as ay,rt as az,jn as b,dn as b0,at as b1,Vt as b2,vo as b3,Zt as b4,uo as b5,Yt as b6,de as b7,Xt as b8,mo as b9,ta as ba,aa as bb,Ao as bc,Do as bd,nt as be,Na as bf,Se as bg,Wt as bh,Ae as bi,ha as bj,ho as bk,po as bl,Bn as bm,Wn as c,K as d,L as e,Mo as f,_o as g,So as h,Ue as i,jt as j,Co as k,ge as l,Lo as m,H as n,Eo as o,ut as p,P as q,ka as r,da as s,wo as t,xo as u,Io as v,fa as w,Ro as x,Uo as y,ke as z};
