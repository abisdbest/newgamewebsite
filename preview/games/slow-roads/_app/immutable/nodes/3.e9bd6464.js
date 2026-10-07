var Hn=Object.defineProperty;var zn=(s,e,t)=>e in s?Hn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var F=(s,e,t)=>(zn(s,typeof e!="symbol"?e+"":e,t),t);import{f as _r,s as Xe,n as me,h as pt,i as ea,r as nt,c as Ie,o as ct,b as yt,j as Fn,k as Ji,l as Gn}from"../chunks/scheduler.05185c5f.js";import{S as Qe,i as Ze,g as p,s as k,e as Le,h as _,j as C,f as v,c as I,y as G,k as h,l as le,a as P,x as d,z as B,A as _t,m as J,n as $,B as R,o as _e,H as ta,C as ia,d as Y,t as se,r as xe,u as Re,v as Ue,w as Ve,p as Ge,b as Be,D as br,E as Xo,F as _i,G as cr,I as hr,J as sa,K as ra}from"../chunks/index.2e86b85f.js";import{V as Bi,E as Bn,O as Vs,G as je,a as ne,A as Us,I as Ce,M as ot,L as Qo,T as tt,b as Yt,S as qr,D as qn,c as Ls,d as Qi,e as Wn,l as Kt,f as Et,g as rr,h as us,C as ar,i as Lr,n as Zo,j as aa,N as jn,k as Yn,m as Kn,o as la,p as Wi,q as Jt,r as Jo,B as oa,F as Cs,s as Xn,t as $o,P as Qn,R as Ma,u as Zn,v as Jn,W as $n,w as ed,x as pi,y as na,z as en,H as tn,J as sn,K as td,Q as Wr,U as da,X as rn,Y as an,Z as ln,_ as on,$ as nn,a0 as ca,a1 as jr,a2 as Zi,a3 as wr,a4 as Ys,a5 as id,a6 as sd,a7 as rd,a8 as ad,a9 as ld,aa as od,ab as dn,ac as cn,ad as hn,ae as nd,af as dd,ag as cd,ah as Ea,ai as hd}from"../chunks/conifers.26f84295.js";import{C as Ae,P as cs,u as Aa,F as rt,I as fd,N as ud,R as fn,a as un,T as Ta,H as vd,O as md,D as gd,b as Pa,c as ls,S as fr,d as ws,e as rs,f as pd}from"../chunks/SettingsManager.9bc436e8.js";import{V as H,a as Qs,C as Ai,G as pe,L as Ti,c as vn,E as Na,M as Ee,I as mn,b as Ye,R as ur,S as Yr,i as ha,d as fa,e as Vr,s as Kr,f as Xr,P as qe,W as He,g as gn,h as pn,j as _n,u as Zs,k as Os,p as _d,v as bd,l as wd,m as Cr,H as yd,A as Sd,n as Dd,o as Ld,D as Cd,q as Ks,r as Fi,U as xa,t as as,w as lr,x as kd,y as Id,z as ua,B as hs,F as Gi,J as Ns,K as li,N as Ra,O as bi,Q as yr,T as bn,X as Md,Y as Sr,Z as wn,_ as Qr,$ as yn,a0 as Ua,a1 as Va,a2 as st,a3 as gr,a4 as Or,a5 as Ed,a6 as Js,a7 as Ad,a8 as Td,a9 as Zr,aa as Jr,ab as Pd,ac as gi,ad as Nd,ae as gt,af as ds,ag as xd,ah as Oa,ai as ys,aj as Rd,ak as Ud,al as Vd,am as Od,an as Sn,ao as Ha}from"../chunks/DevMidlineGenerator.cabe26a1.js";import{Q as Dn,a as ks}from"../chunks/DriftmasMidlineGenerator.0753c8fe.js";import"../chunks/IsStaticRoute.ed7acde0.js";import{w as Hd}from"../chunks/index.205d685d.js";import{e as Oe}from"../chunks/each.e59479a4.js";const za=["Chase","ChaseFar","FirstPerson","Bonnet","Bumper"],Fa={pitch:{near:.25,far:.15},yOffset:{near:1,far:2},posOffset:new Bi(0,0,0),range:{min:2,near:7,far:10,max:50},hasCollisions:!1,farSpeed:45,smoothFactor:1.25,nearPlane:.35,yawLimit:0,minPitch:0,maxPitch:1.57,invertDrag:!1,firstPerson:!1},zd=new Bi(-4,3,0),Fd=68;let os=.95,Ss=1-os,Xs=Ss/4,Hr=1-Xs;const Ga=()=>{};class Gd{constructor(e){F(this,"container");F(this,"cameraWrapper");F(this,"seatPosition",0);F(this,"seatHeight",0);F(this,"orientation",new Bn(0,0,0,"YXZ"));F(this,"vCenter",new Bi);F(this,"camFwd",new Bi);F(this,"uLerpA",0);F(this,"uLerpB",0);F(this,"uDist",0);F(this,"uSmoothA",0);F(this,"uSmoothB",0);F(this,"uH",0);F(this,"w",1);F(this,"h",1);F(this,"driverSide",1);F(this,"mode",Fa);F(this,"minGroundPitch",0);F(this,"groundPitchUpdateTimer",0);F(this,"vehicleYaw",0);F(this,"vehiclePitch",0);F(this,"vehicleTargets",{x:0,y:0,z:0});F(this,"userYaw",0);F(this,"userYawTarget",0);F(this,"userPitch",0);F(this,"userPitchTarget",0);F(this,"userSmooth",.8);F(this,"userSmoothA",1-this.userSmooth);F(this,"userZoom",0);F(this,"userZoomTarget",0);F(this,"groundPitch",0);F(this,"dragSense",2.5);F(this,"tppDragSense",2);F(this,"fppDragSense",.8);F(this,"yawSense",3);F(this,"pitchSense",2);F(this,"isCinecam",!1);F(this,"cinecam",{targetPos:new Bi,targetRot:new Bi,uiWasHidden:!1,baseSpeed:120,boostFactor:2,speed:20,verticalSpeed:20,smoothMode:!1,sense:.001,zoomSense:4,targetZoom:1,curZoom:1,maxZoom:Math.sqrt(8),minZoom:Math.sqrt(.75)});F(this,"profileGeneration",0);F(this,"tHeading");F(this,"tDif");F(this,"smoothSpeed",0);F(this,"isRotated",!1);F(this,"fovTarget",0);F(this,"fovLerped",0);F(this,"lockChangeAlertBound",this.lockChangeAlert.bind(this));F(this,"onMouseMoveBound",this.onMouseMove.bind(this));F(this,"onDriverSideBound",this.onDriverSide.bind(this));F(this,"onNextCameraModeBound",this.onNextCameraMode.bind(this));this.cameraWrapper=new Vs,this.camera=Ae,this.cameraWrapper.add(this.camera),this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.rotation.y=Math.PI,this.container=new Vs,this.container.add(this.cameraWrapper),this.container.rotation.order="ZYX",Ae.rotation.order="ZYX",e.requestPointerLock=e.requestPointerLock||e.mozRequestPointerLock,document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||Ga,this.cinecam.canvas=e,H.addListener(Qs.Reset,this.reset.bind(this)),H.addListener(Qs.Ready,this.refreshSettings.bind(this)),H.addListener(Qs.ModelChanged,this.onVehicleChanged.bind(this)),je.addListener("verticalFov",this.setFov.bind(this)),je.addListener("fovEffectStrength",this.setFovEffectStrength.bind(this)),ne.addListener("cameraMode",this.onCameraModeChanged.bind(this)),ne.addListener("hideUI",()=>this.onToggleUI()),ne.addListener("touchscreen",()=>this.setSize(this.w,this.h)),ne.addListener("seatPosition",this.onSeatPosChanged.bind(this)),ne.addListener("seatHeight",this.onSeatPosChanged.bind(this)),ne.addListener("driverSide",this.onDriverSideBound),cs.addListener(this.refreshSettings.bind(this)),Ai.set("isCinecam",!1),pe.addListener("CameraMode",this.onNextCameraModeBound),pe.addListener("ToggleCinecam",this.onCinecamChanged.bind(this)),Ti.addListener(t=>{t==1&&this.refreshSettings(!0)}),vn.subscribe(t=>{t>0&&this.onNextCameraMode()})}init(){this.reset(),Us.hasInit?this.initAudio():Us.addInitListener(this.initAudio.bind(this))}initAudio(){this.camera.add(Us.listener)}refreshSettings(e=!1){!e&&this.profileGeneration==cs.value||(this.profileGeneration=cs.value,this.setFov(je.verticalFov),this.setFovEffectStrength(je.verticalFov),this.onCameraModeChanged(ne.cameraMode),this.onToggleUI(ne.hideUI),this.setSize(this.w,this.h),this.onSeatPosChanged(),this.onDriverSide(ne.driverSide),this.isCinecam&&this.onCinecamChanged())}reset(){let e=0;isNaN(this.vehicleYaw+this.vehicleTargets.y)||(e=this.vehicleTargets.y-this.vehicleYaw),e%=Math.TAU,this.smoothSpeed=H.speed,this.uLerpA=this.smoothLerp(H.speed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x,this.vehicleTargets.y=H.heading+Math.HALFPI,this.vehicleYaw=this.vehicleTargets.y,this.vehicleTargets.y-=e,this.vehicleTargets.z=0,this.mode.rollFactor&&(this.vehicleTargets.z=H.roll*this.mode.rollFactor),this.orientation.x=this.vehiclePitch,this.orientation.y=this.vehicleYaw,this.orientation.z=this.vehicleTargets.z,this.updateVehicleVisibility(),this.updateFov(!0),this.updateNear(),Ti.value>=1&&this.update(.1),this.orientation.x-=this.groundPitch,this.groundPitch=0,this.camera.updateProjectionMatrix()}updateVehicleVisibility(){H.container.visible=!this.mode.hideVehicle||Ai.isCinecam}handleInput(e){(pe.signal.CameraLeft>0||pe.signal.CameraRight>0)&&(this.mode.isInterior?this.userYawTarget+=(pe.signal.CameraLeft-pe.signal.CameraRight)*this.yawSense*e*.5:this.userYawTarget+=(pe.signal.CameraLeft-pe.signal.CameraRight)*this.yawSense*e),(pe.signal.CameraUp>0||pe.signal.CameraDown>0)&&(this.mode.isInterior?this.userPitchTarget+=(pe.signal.CameraDown-pe.signal.CameraUp)*this.pitchSense*e*.3:this.userPitchTarget+=(pe.signal.CameraDown-pe.signal.CameraUp)*this.pitchSense*e,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Ce.drag.x!=0&&(this.userYawTarget!==0||Math.abs(Ce.drag.x)>.003)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userYawTarget+=Ce.drag.x*this.yawSense*this.dragSense:this.userYawTarget-=Ce.drag.x*this.yawSense*this.dragSense),this.userYawTarget<-Math.PI?(this.userYawTarget+=Math.TAU,this.userYaw+=Math.TAU):this.userYawTarget>Math.PI&&(this.userYawTarget-=Math.TAU,this.userYaw-=Math.TAU),Ce.drag.y!=0&&(this.userPitchTarget!==0||Math.abs(Ce.drag.y)>.005)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userPitchTarget-=Ce.drag.y*this.pitchSense*this.dragSense:this.userPitchTarget+=Ce.drag.y*this.pitchSense*this.dragSense,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Ce.mouseEnabled&&Ce.scroll!==0&&Ce.scrollLock=="cam"&&(this.userZoomTarget+=Ce.scrollDelta*Math.max(.1,Math.sqrt((this.userZoomTarget-this.mode.range.min)/(this.mode.range.max-this.mode.range.min))*3),this.userZoomTarget=Math.min(Math.max(this.mode.range.min,this.userZoomTarget),this.mode.range.max)),this.mode.yawLimit>=0&&(this.userYawTarget=Math.min(Math.max(-this.mode.yawLimit,this.userYawTarget),this.mode.yawLimit)),this.userYaw=this.userYaw*this.userSmooth+this.userYawTarget*this.userSmoothA,this.userPitch=this.userPitch*this.userSmooth+this.userPitchTarget*this.userSmoothA,this.userZoom=this.userZoom*this.userSmooth+this.userZoomTarget*this.userSmoothA}update(e){if(Ti.value<1)return;if(Ai.isCinecam)return this.updateCinecam(e);if(ot.useMouse||this.handleInput(e),this.mode.isInterior)return this.updateFirstPerson(e);this.smoothSpeed=this.smoothSpeed*.9+H.speed*.1,this.uLerpA=this.smoothLerp(this.smoothSpeed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.uSmoothA=Math.min(e/(je.cameraSmoothing*this.mode.smoothFactor),1),this.uSmoothC=this.uSmoothA/2,this.uSmoothB=1-this.uSmoothA,this.uSmoothD=1-this.uSmoothC,this.vCenter.set(this.mode.posOffset.x,this.mode.posOffset.y,this.mode.posOffset.z*this.driverSide).applyQuaternion(H.quaternion).add(H.position),this.vCenter.y+=this.mode.yOffset.near*this.uLerpA+this.mode.yOffset.far*this.uLerpB,this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tHeading>Math.PI&&(this.tHeading-=Math.TAU),this.mHeading=Math.atan2(H.motionDir.z,-H.motionDir.x)-Math.HALFPI,this.mHeading<-Math.PI&&(this.mHeading+=Math.TAU);let t=this.mHeading-this.tHeading;if(t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),H.speed<2){if(H.speed>1){let i=(H.speed-1)*je.motionDirBlend;this.tHeading=this.mHeading*i+(1-i)*this.tHeading,this.tHeading-=t*je.steerDirBlend*(H.speed-1)}}else this.tHeading-=t*je.steerDirBlend,this.tHeading=this.tHeading*(1-je.motionDirBlend)+je.motionDirBlend*this.mHeading;if(this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleYaw=this.vehicleTargets.y*this.uSmoothA+this.vehicleYaw*this.uSmoothB,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x*this.uSmoothC+this.vehiclePitch*this.uSmoothD,this.vehicleTargets.z=H.roll*this.mode.rollFactor,this.orientation.z=this.vehicleTargets.z*this.uSmoothA+this.orientation.z*this.uSmoothB,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.uDist=this.mode.range.near*this.uLerpA+this.mode.range.far*this.uLerpB+this.userZoom,this.mode.hasCollisions){let r=Na.getXZ(Ae.worldPos.x,Ae.worldPos.z,Ee.vehicleNode)-this.vCenter.y+1+this.uDist/10;this.minGroundPitch=Math.atan(r/this.uDist),this.groundContact=!1,this.orientation.x<this.minGroundPitch?(this.groundContact=!0,this.groundPitch=this.groundPitch*.9+.1*(this.minGroundPitch-this.orientation.x)):this.groundPitch*=.9,this.orientation.x+=this.groundPitch}this.updateWrapperState(),this.cameraWrapper.position.add(this.camFwd.multiplyScalar(-this.uDist)),this.cameraWrapper.getWorldDirection(this.camFwd),!this.isCinecam&&je.fovEffectStrength>0&&this.updateFov(),this.updateCamState()}updateCinecam(e){this.cinecam.dx=Math.cos(-Ae.rotation.y-Math.PI/2),this.cinecam.dz=Math.sin(-Ae.rotation.y-Math.PI/2),this.cinecam.useVehicleHeading&&(this.cinecam.dx=Math.cos(-H.rotation.y),this.cinecam.dz=Math.sin(-H.rotation.y));let t=Na.getXZ(Ae.worldPos.x,Ae.worldPos.z),r=(Ae.worldPos.y-t)/100;r<.01&&(r=.01),r>1&&(r=1),Ce.key.Digit1?(this.cinecam.baseSpeed/=2,Ce.key.Digit1=!1,this.cinecam.useVehicleSpeed=!1):Ce.key.Digit3?(this.cinecam.baseSpeed*=2,Ce.key.Digit3=!1,this.cinecam.useVehicleSpeed=!1):Ce.key.CapsLock?(Ce.key.CapsLock=!1,this.cinecam.useVehicleSpeed=!this.cinecam.useVehicleSpeed):Ce.key.Tab&&(Ce.key.Tab=!1,this.cinecam.smoothMode=!this.cinecam.smoothMode,this.cinecam.smoothMode?os=.95:os=.8,Ss=1-os,Xs=Ss/2,Hr=1-Xs),this.cinecam.useVehicleSpeed?(this.cinecam.baseSpeed=H.speed,this.cinecam.speed=this.cinecam.baseSpeed):this.cinecam.speed=Math.max(.1,r)*this.cinecam.baseSpeed,this.cinecam.smoothMode?this.cinecam.verticalSpeed=this.cinecam.speed/2:this.cinecam.verticalSpeed=this.cinecam.speed,pe.signal.Boost&&(this.cinecam.speed*=this.cinecam.boostFactor);let l=0,a=0;pe.signal.Forward&&(l=this.cinecam.dx,a=this.cinecam.dz),pe.signal.Backward&&(l-=this.cinecam.dx,a-=this.cinecam.dz),pe.signal.Left&&(this.cinecam.useVehicleHeading?(l+=this.cinecam.dz*.4,a-=this.cinecam.dx*.4):(l+=this.cinecam.dz,a-=this.cinecam.dx)),pe.signal.Right&&(this.cinecam.useVehicleHeading?(l-=this.cinecam.dz*.4,a+=this.cinecam.dx*.4):(l-=this.cinecam.dz,a+=this.cinecam.dx));let n=Math.sqrt(l*l+a*a);n>0&&(l=l/n,a=a/n,this.cinecam.targetPos.x+=l*e*this.cinecam.speed,this.cinecam.targetPos.z+=a*e*this.cinecam.speed),pe.signal.CinecamUp&&(this.cinecam.targetPos.y+=e*this.cinecam.verticalSpeed),pe.signal.CinecamDown&&(this.cinecam.targetPos.y-=e*this.cinecam.verticalSpeed),Ae.rotation.x=Ae.rotation.x*os+this.cinecam.targetRot.x*Ss,Ae.rotation.y=Ae.rotation.y*os+this.cinecam.targetRot.y*Ss,pe.signal.CameraZoom!=0&&(this.cinecam.targetZoom-=this.cinecam.zoomSense*e*pe.signal.CinecamZoom,this.cinecam.targetZoom=Math.max(Math.min(this.cinecam.maxZoom,this.cinecam.targetZoom),this.cinecam.minZoom)),this.cinecam.curZoom=this.cinecam.curZoom*.95+this.cinecam.targetZoom*.05,this.cinecam.curZoom!=Ae.zoom&&(Ae.zoom=this.cinecam.curZoom*this.cinecam.curZoom,Ae.near=.1+(Ae.zoom-.75),Ae.updateProjectionMatrix()),Ae.position.x=Ae.position.x*os+this.cinecam.targetPos.x*Ss,this.cinecam.useVehicleHeading?Ae.position.y=Ae.position.y*Hr+(H.position.y+this.cinecam.targetPos.y)*Xs:Ae.position.y=Ae.position.y*Hr+this.cinecam.targetPos.y*Xs,Ae.position.z=Ae.position.z*os+this.cinecam.targetPos.z*Ss,this.updateWrapperState(),this.updateCamState()}updateFirstPerson(e){this.vCenter.set(this.mode.posOffset.x+this.seatPosition,this.mode.posOffset.y+this.seatHeight,this.mode.posOffset.z*this.driverSide-H.roll*this.mode.rollFactor*.5).applyQuaternion(H.quaternion).add(H.position),this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleTargets.x=-H.pitch+this.mode.pitch.near,this.vehicleYaw=this.vehicleTargets.y*.2+this.vehicleYaw*.8,this.vehiclePitch=this.vehicleTargets.x*.1+this.vehiclePitch*.9,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.orientation.z=this.orientation.z*.9+H.roll*this.mode.rollFactor*.1,this.updateWrapperState(),this.updateCamState()}updateWrapperState(){this.cameraWrapper.setRotationFromEuler(this.orientation),this.cameraWrapper.getWorldDirection(this.camFwd)}updateCamState(){Ae.fwd.copy(this.camFwd).normalize().negate(),Ae.speed=H.speed,Ae.updateMatrixWorld(),Ae.worldPos.setFromMatrixPosition(Ae.matrixWorld)}setSize(e,t){this.w=e,this.h=t,e<t&&ne.touchscreen?(this.camera.rotation.z=-Math.PI/2,this.isRotated=!0):(this.isRotated=!1,this.camera.rotation.z=0),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setFovEffectStrength(e){e==0&&this.setFov(je.verticalFov)}updateFov(e=!1){je.fovEffectStrength==0||mn?this.fovLerped=0:(this.fovTarget=(1-this.smoothLerp(H.speedLerp))*H.tuning.topSpeed*this.mode.fovFactor,e?this.fovLerped=this.fovTarget:this.fovLerped=this.fovLerped*.95+this.fovTarget*.05),this.setFov(je.verticalFov+this.fovLerped*je.fovEffectStrength)}setFov(e){this.camera.aspect<1?(e*=Math.D2R,e=2*Math.atan(Math.tan(e/2)/this.camera.aspect),e*=Math.R2D,Aa(e,this.camera.far,1/this.camera.aspect)):Aa(e,this.camera.far,this.camera.aspect),this.camera.fov=e,this.updateNear(),this.camera.updateProjectionMatrix()}updateNear(){this.mode.isInterior?this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/1e3:this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/200}onToggleUI(){this.isCinecam&&!ne.hideUI&&document.exitPointerLock(),ne.hideUI&&this.isCinecam&&this.cinecam.canvas.requestPointerLock()}onCinecamChanged(){this.isCinecam=!this.isCinecam,Ai.set("isCinecam",this.isCinecam),Ae.isCinecam=this.isCinecam,this.isCinecam?(this.hadMouseControl=ot.useMouse,ot.set("useMouse",!1)):this.hadMouseControl&&ot.set("useMouse",!0),this.isCinecam?(this.setFov(Fd),this.cameraWrapper.remove(Ae),this.container.add(Ae),this.cinecam.uiWasHidden=ne.hideUI,ne.set("hideUI",!0),this.cinecam.curZoom=1,this.cinecam.targetZoom=1,this.cinecam.targetPos.copy(zd).applyQuaternion(H.quaternion).add(H.position),this.cinecam.targetRot.x=-.25,this.cinecam.targetRot.y=H.heading-1.57,this.cinecam.useVehicleSpeed=!1,this.cinecam.useVehicleHeading=!1,Ae.position.copy(this.cinecam.targetPos),Ae.rotation.x=this.cinecam.targetRot.x,Ae.rotation.y=this.cinecam.targetRot.y,this.cinecam.canvas.onclick=e=>{e.target.id=="ui-fixed"&&this.cinecam.canvas.requestPointerLock()},document.addEventListener("pointerlockchange",this.lockChangeAlertBound,!1)):(this.setFov(je.verticalFov),this.cinecam.uiWasHidden||ne.set("hideUI",!1),document.exitPointerLock(),this.cinecam.canvas.onclick=Ga,document.removeEventListener("pointerlockchange",this.lockChangeAlertBound),document.removeEventListener("mousemove",this.onMouseMoveBound),this.container.remove(Ae),this.cameraWrapper.add(Ae),this.camera.zoom=1,this.camera.updateProjectionMatrix(),Ae.position.set(0,0,0),Ae.rotation.set(0,Math.PI,0),this.reset()),this.updateVehicleVisibility()}lockChangeAlert(){document.pointerLockElement===this.cinecam.canvas||document.mozPointerLockElement===this.cinecam.canvas?document.addEventListener("mousemove",this.onMouseMoveBound,!1):document.removeEventListener("mousemove",this.onMouseMoveBound,!1)}onMouseMove(e){this.cinecam.targetRot.y-=e.movementX*this.cinecam.sense/this.cinecam.curZoom,this.cinecam.targetRot.x-=e.movementY*this.cinecam.sense*Ae.aspect/this.cinecam.curZoom}onCameraModeChanged(){let e=H.cameras[za[ne.cameraMode]];e?this.mode={...e}:this.mode={...Fa},this.mode.posOffset=new Bi().fromArray(this.mode.posOffset),this.mode.isInterior?(Ai.set("isInterior",!0),this.dragSense=this.fppDragSense):(Ai.set("isInterior",!1),this.dragSense=this.tppDragSense),this.mode.firstPerson&&(this.dragSense=this.fppDragSense),this.mode.invertDrag&&(this.dragSense*=-1),this.mode.range.max?Ce.lockScroll("cam"):Ce.unlockScroll("cam"),this.updateFov(),this.updateNear(),this.camera.updateProjectionMatrix(),this.reset()}onVehicleChanged(){this.onCameraModeChanged()}onSeatPosChanged(){this.seatHeight=(ne.seatHeight-.5)*.1,this.seatPosition=(ne.seatPosition-.5)*.2}onDriverSide(){this.driverSide=ne.driverSide*2-1}onNextCameraMode(){if(!Ai.isCinecam){if(this.userPitchTarget!==0||this.userYawTarget!==0||this.userZoomTarget!==0){this.userPitchTarget=0,this.userYawTarget=0,this.userZoomTarget=0;return}ne.set("cameraMode",(ne.cameraMode+1)%za.length)}}smoothLerp(e){return e=Math.min(1,e),-1*(3-e*2)*e*e+1}}const Pe={None:0,Intro:1,Reset:2,Boost:3,UTurn:4,Onward:5};let pr=!!localStorage.getItem("skip-controls");localStorage.setItem("skip-controls",!1);const it=new Qo(pr?Pe.None:Pe.Intro);function Ln(s,e=5e3){setTimeout(()=>{it.value==s&&it.set(Pe.None)},e)}pr||Ti.addListener(s=>{!pr&&s==1&&(it.set(Pe.Intro),Ln(Pe.Intro,7e3),pr=!0)});const Bd=20*20,qd=120*120,vt={};class Wd{constructor(){F(this,"targetVehicleNodeIndex",0);F(this,"wrongWay",!1);F(this,"isRogue",!1);F(this,"hasAutodrive",!1);F(this,"prompts",{reset:{timerStarted:!1,didPrompt:!1,startTime:null},boost:{didPrompt:!1}});F(this,"profileGeneration",0);F(this,"hasInit",!1);F(this,"sceneReady",!1);F(this,"maxPhysDT",.05);F(this,"minPhysDT",.001);F(this,"physDT",0);F(this,"canDisableAutodrive",!0);F(this,"nodeCheckFrame",0);F(this,"reversingTooFar",!1);F(this,"update",this.updatePending);tt.addSlowListener(this.updateUI.bind(this)),H.addListener(Qs.Reset,this.onReset.bind(this)),H.addListener(Qs.Ready,this.onVehicleReady.bind(this)),Ye.addListener("mode",H.setDriveMode.bind(H),!0),Ye.addListener("speedControl",this.updateSpeedControl.bind(this)),Ye.addListener("speedControlTarget",this.updateSpeedControl.bind(this)),Ye.addListener("speedControlMode",this.updateSpeedControl.bind(this)),Yt.addListener(this.onAutodrive.bind(this)),Ai.addListener("isInterior",H.onCameraInteriorChangedBound),Ai.addListener("isCinecam",H.onCameraInteriorChangedBound),ne.addListener("touchscreen",this.updateSpeedControl.bind(this)),ne.addListener("units",this.updateSpeedControl.bind(this)),ne.addListener("showWheel",H.setShowWheel.bind(H)),ne.addListener("driverSide",H.setDriverSide.bind(H)),ne.addListener("gripFactor",this.updateGripFactor.bind(this)),ne.addListener("speedFactor",this.updateSpeedFactor.bind(this)),ne.addListener("driveLane",this.updateDriveLane.bind(this)),ur.addListener("lanes",this.updateDriveLane.bind(this))}applySettings(){this.profileGeneration!=cs.value&&(this.profileGeneration=cs.value,H.setDriveMode(Ye.mode),this.updateSpeedControl(),H.onCameraInteriorChanged(),H.setShowWheel(ne.showWheel),H.setDriverSide(ne.driverSide),console.log("Apply settings",ne.driverSide),this.updateGripFactor(ne.gripFactor),this.updateSpeedFactor(ne.speedFactor),this.updateDriveLane())}updateGripFactor(e){H.setGripFactor(e)}updateSpeedFactor(e){H.setSpeedFactor(e)}updateSpeedControl(){H.hasSpeedControl=Ye.speedControl&&!ne.touchscreen,H.hasCruiseTarget=H.hasSpeedControl&&Ye.speedControlMode==Yr.Cruise,H.hasSpeedLimit=H.hasSpeedControl&&Ye.speedControlMode==Yr.Max,H.speedControlTarget=Ye.speedControlTarget/3.6,H.speedControlTarget*=qr[ne.units],H.speedControlTarget/=5,H.speedControlTarget=Math.round(H.speedControlTarget),H.speedControlTarget*=5,H.speedControlTarget/=qr[ne.units],Ye.set("speedControlTargetMS",H.speedControlTarget)}updateDriveLane(){ur.lanes<=1||ne.driveLane==qn.CENTER?H.driveLaneOffset=0:H.driveLaneOffset=(ne.driveLane*2-1)*ur.width/2,ur.lanes>1&&H.inAutodrive&&Ee.vehicleNode&&this.reset()}onAutodrive(e){this.hasAutodrive=e,H.setAutodrive(this.hasAutodrive)}init(){this.targetVehicleNodeIndex=Ee.vehicleIndex,this.hasInit?(this.applySettings(),this.reset()):(Ye.addListener("type",H.setVehicle.bind(H)),this.sceneReady=!0,this.hasInit=!0)}onSceneLoading(){this.sceneReady=!1,this.update=this.updatePending}onSceneReady(){this.sceneReady=!0,H.setVehicle(Ye.type)}onVehicleReady(){this.applySettings()}updatePending(e,t){H.hasInit&&this.sceneReady&&(this.update=this.updateLive,this.update(e,t))}updateLive(e,t){pe.signal.Reset&&(rt.hasUsedReset||(rt.set("hasUsedReset",!0),it.value==Pe.Reset&&it.set(Pe.None)),this.reset()),pe.signal.Headlights&&H.setHeadlights(!H.headlights,!0),pe.signal.Autodrive?Ce.key.ShiftLeft||Ce.key.ShiftRight?ne.set("autodriveMode",(ne.autodriveMode+1)%3):(Yt.set(!this.hasAutodrive),this.canDisableAutodrive=!1):this.hasAutodrive&&(!pe.hasScreenInput&&!Ai.isCinecam&&(ne.autodriveMode==Ls.STEER&&(pe.signal.Left||pe.signal.Right)||ne.autodriveMode==Ls.FULL&&(pe.gamepadSignal.Forward||pe.gamepadSignal.Backward||pe.signal.Forward||pe.signal.Backward||pe.signal.Left||pe.signal.Right))?this.canDisableAutodrive&&(this.hasAutodrive=!1,Yt.set(this.hasAutodrive),H.setAutodrive(this.hasAutodrive)):this.canDisableAutodrive||(this.canDisableAutodrive=!0)),pe.signal.ToggleSpeedControl&&Ye.set("speedControl",!Ye.speedControl),H.hasSpeedControl&&Ce.scrollDelta!=0&&Ce.scrollLock==null&&(Ce.scrollDelta<0?ha():fa(),Ce.scrollDelta=0),!rt.hasUsedReset&&!H.onRoad?this.prompts.reset.timerStarted?!this.prompts.reset.didPrompt&&tt.appTime-this.prompts.reset.startTime>3&&(this.prompts.reset.didPrompt=!0,it.set(Pe.Reset)):(this.prompts.reset.timerStarted=!0,this.prompts.reset.startTime=tt.appTime):this.prompts.reset.timerStarted&&(this.prompts.reset.timerStarted=!1,this.prompts.reset.didPrompt=!1),it.value==Pe.None?!H.inAutodrive&&!rt.hasUsedBoost&&H.pitch>.12&&H.onRoad&&H.speed>5&&!this.prompts.boost.didPrompt&&(this.prompts.boost.didPrompt=!0,it.set(Pe.Boost),Ln(Pe.Boost,3e3)):it.value==Pe.Reset&&H.onRoad&&H.onRoad&&it.set(Pe.None),H.update(e,t),this.updateProgress(),this.updateVehicleState(e),this.updateUI()}updateProgress(){if(Ee.vehicleNodeDidChange=!1,Ee.vehicleNode.i<this.targetVehicleNodeIndex){this.wrongWay=!1,Ee.vehicleNode=Ee.vehicleNode.next,Ee.vehicleIndex=Ee.vehicleNode.i,Ee.vehicleNodeDidChange=!0;return}vt.d1=H.position.distanceToSquared(Ee.vehicleNode.p),vt.d2=H.position.distanceToSquared(Ee.vehicleNode.next.next.p),H.isRogue=!1,vt.d2>qd?(H.isRogue=!0,this.nodeCheckFrame--,this.nodeCheckFrame<=0&&(this.nodeCheckFrame=60,vt.closest=Vr(H.position.x,H.position.z,Ee.vehicleNode),vt.closest.n.i>Ee.vehicleNode.i&&vt.closest.n.i<Ee.vehicleNode.i+100&&(this.targetVehicleNodeIndex!==vt.closest.n.i&&Qi.add("VEHICLE: Leaping ahead to node "+vt.closest.n.i),this.targetVehicleNodeIndex=vt.closest.n.i))):vt.d2<vt.d1?(this.wrongWay=!1,(it.value==Pe.UTurn||it.value==Pe.Onward)&&it.set(Pe.None),Ee.vehicleNode=Ee.vehicleNode.next,Ee.vehicleIndex=Ee.vehicleNode.i,Ee.vehicleNodeDidChange=!0):vt.d1>Bd&&H.onRoad?(H.isRogue=!0,vt.closest=Vr(H.position.x,H.position.z,Ee.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),this.wrongWay?vt.alignment<.5&&(this.wrongWay=!1,it.value==Pe.UTurn&&it.set(Pe.None)):vt.alignment>1.8&&(this.wrongWay=!0,it.set(Pe.UTurn)),!this.wrongWay&&vt.alignment<1&&H.direction<0&&H.speed>5&&(this.reversingTooFar=!0,it.set(Pe.Onward)),this.reversingTooFar&&H.direction>0&&(this.reversingTooFar=!1,it.set(Pe.None))):this.wrongWay?(vt.closest=Vr(H.position.x,H.position.z,Ee.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),vt.alignment<1?(this.wrongWay=!1,it.value==Pe.UTurn&&it.set(Pe.None)):H.isRogue=!0):this.reversingTooFar&&(this.reversingTooFar=!1,it.value==Pe.Onward&&it.set(Pe.None))}updateVehicleState(e){H.dS=Math.sqrt((H.pPosition.x-H.position.x)**2+(H.pPosition.z-H.position.z)**2),H.speed=H.dS/e,H.speedLerp=Math.min(H.speed/H.tuning.topSpeed),H.velocity.subVectors(H.position,H.pPosition).multiplyScalar(1/e),H.accel.subVectors(H.velocity,H.pVelocity).multiplyScalar(1/e),H.motionDir.copy(H.velocity).normalize(),H.motionHeading=Math.atan2(H.motionDir.z,H.motionDir.x),H.pitch=H.rotation.z,H.roll=H.rotation.x,H.pPosition.copy(H.position),H.pVelocity.copy(H.velocity)}updateUI(){H.hasSpeedControl&&Math.abs(H.speed-H.speedControlTarget)<Math.max(.1,H.speed*.004)?Kr.set(H.speedControlTarget):Kr.set(H.speed),ne.odomMode==Wn.TOTAL?Xr.set((qe.totalDist+qe.sr1Distance)/1e3):Xr.set((Ee.vehicleNode.i-Ee.initIndex)/100+He.accumulatedDistance),gn.set(H.hasBoost),!rt.hasUsedBoost&&H.hasBoost&&(rt.set("hasUsedBoost",!0),it.value==Pe.Boost&&it.set(Pe.None)),pn.set(pe.toggled.Handbrake),_n.set(pe.toggled.StickySteer),Ee.vehicleNodeDidChange&&Zs(Ee.vehicleNode.i),ot.useMouse&&ot.set("currentSteer",pe.gamepadSignal.Left-pe.gamepadSignal.Right)}onCrash(){}reset(){H.reset()}onReset(){this.wrongWay=!1,it.set(Pe.None),Zs(Ee.vehicleNode.i,!0),this.updateVehicleState(1)}}var $s=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(f){f.preventDefault(),i(++s%e.children.length)},!1);function t(f){return e.appendChild(f.dom),f}function i(f){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===f?"block":"none";s=f}var r=(performance||Date).now(),l=r,a=0,n=t(new $s.Panel("FPS","#0ff","#002")),o=t(new $s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new $s.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){a++;var f=(performance||Date).now();if(o.update(f-r,200),f>=l+1e3&&(n.update(a*1e3/(f-l),100),l=f,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return f},update:function(){r=this.end()},domElement:e,setMode:i}};$s.Panel=function(s,e,t){var i=1/0,r=0,l=Math.round,a=l(window.devicePixelRatio||1),n=80*a,o=48*a,c=3*a,f=2*a,u=3*a,g=15*a,b=74*a,m=30*a,w=document.createElement("canvas");w.width=n,w.height=o,w.style.cssText="width:80px;height:48px";var y=w.getContext("2d");return y.font="bold "+9*a+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,n,o),y.fillStyle=e,y.fillText(s,c,f),y.fillRect(u,g,b,m),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(u,g,b,m),{dom:w,update:function(D,L){i=Math.min(i,D),r=Math.max(r,D),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,n,g),y.fillStyle=e,y.fillText(l(D)+" "+s+" ("+l(i)+"-"+l(r)+")",c,f),y.drawImage(w,u+a,g,b-a,m,u,g,b-a,m),y.fillRect(u+b-a,g,a,m),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(u+b-a,g,a,l((1-D/L)*m))}}};const jd=$s,Yd=`
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

`,Kd=`
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
`,Xd=`

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
`,Qd=`
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
`,Zd=`
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
`,Jd=`
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
`,$d=`

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

`,ec=`

attribute float roadProximity;
attribute float treeMask;
attribute vec2 roadUv;
attribute float overlap;

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

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

`,tc=`

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
steepness = clamp(steepness * 1.25, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

rUv = roadUv;


//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;



//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (20.0 + fade1 * 40.0))/160.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
if(roadProximity > 0.0 && roadProximity < 0.5 + fade1) {
  vLightGrass *= roadProximity / (0.5 + fade1);
}

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

//// ROAD PROX

roadProx = roadProximity;

// Prevent rocks forming below the road, e.g. at bridges.
// Not perfect...
if(roadProx < 0.0) {
  steepness = 0.0;
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

// if(roadProx > 0.0 && roadProx < 2.0) {
//   vTreeMask *= roadProx / 2.0;
// } else if(roadProx < 0.0) {
//   vTreeMask = 0.0;
// }

// Experimenting with displacement map
if(roadProx > 0.0 && roadProx < 20.0) {
  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vUv ).x - 0.3) * steepness * 3.0 );
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


`,ic=`

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D roadMap;

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

`,sc=`

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

float blendVal = fade2 * (0.5 + vLightGrass);

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

texelColor.r = max(0.0, min(1.0, texelColor.r));
texelColor.g = max(0.0, min(1.0, texelColor.g));
texelColor.b = max(0.0, min(1.0, texelColor.b));

//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv);
forestCol.a = forestCol.r * 2.0 * fade2;

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

float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

if(vHeight < 4.0) {

  float dark = 1.0;

  if(vHeight < 0.0) {
    texelColor = texture2D(sandMap, vUv) * 0.75;
  } else {

    if(vHeight < 2.0) {

      // Darken toward water
      dark = min(dark, 1.0 - (2.0 - vHeight) / 8.0);

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

//// ROAD GRAVEL

if(seasonIndex < 3) {

  if(roadProx != 0.0 && roadProx < 0.25 + fade0 * 2.0) {

    float rp = roadProx / (0.25 + fade0 * 2.0);

    // Mix into forest colour if we're under trees
    if(seasonIndex == 2 && vShadow > 0.0) {

      texelColor = mix(

        mix(texture2D(gravelMap, vUv*2.0), forestCol, min(1.0, vShadow * 2.0)),

        texelColor,
        smoothstep(
          rp + 0.35,
          rp - 0.35,
          1.0 - texelColor.g
        )
      );

    } else {

      texelColor = mix(
        texture2D(gravelMap, vUv*2.0),
        texelColor,
        smoothstep(
          0.0,
          1.0,
          rp
        )
      );

    }

  }

}

//// ROAD SURFACE?

if(roadProx < 0.0) {

  vec4 roadSurface = texture2D(roadMap, rUv);

  if(roadProx < -1.0) {
    texelColor = mix(texelColor, roadSurface, roadSurface.a);
  } else {
    texelColor = mix(texelColor, roadSurface, roadSurface.a * abs(roadProx));//roadSurface.a * (abs(roadProx)); / -0.5));
  }
}

//// STEEPNESS CLIFF


// Oh here's where I do the distance thing?
if(roadProx == 0.0) {
  rockTex = texture2D(rockMap, vWv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = (1.0 - texture2D(rockMapBump, vWv).r) * 0.95;
} else {
  rockTex = texture2D(rockMap, vUv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = texture2D(rockMapBump, vUv).r;
}


  texelColor.a = 0.2 + fade2 * 0.2;
texelColor = terrainBlend(texelColor,0.6, rockTex, steepness, 0.05);
texelColor.a = 1.0;

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?


totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor.rgb = vNormal.rgb;

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort

// diffuseColor.r = min(max(0.0, diffuseColor.r), 1.0);
// diffuseColor.g = min(max(0.0, diffuseColor.g), 1.0);
// diffuseColor.b = min(max(0.0, diffuseColor.b), 1.0);



`,rc=`
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

`,ac=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;

	// SPECIAL HANDLING FOR CYPRESS TO AVOID IT BEING TOO DARK
	if(vMapUv.x > 0.76) {
	  discolouration = (discolouration / 2.0) + 0.5;
	}
`,lc=`

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
`,oc=`

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


`+lc+`



`+ac+`

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

`,nc=`

    uniform sampler2D noiseMap;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;

    float fShadow;

`,dc=`

if(vMapUv.x > 0.125) {
	diffuseColor.g *= discolouration;
	// if(diffuseColor.g > diffuseColor.r) {
}

`,cc=`

	diffuseColor.g *= discolouration;

`,hc=`

	if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
		discard;
	}

    fShadow = max(0.0, min(1.0, vShadow));

	fShadow = sqrt(fShadow) * 0.65;


`+dc+`

	diffuseColor.rgb *= 1.0 - fShadow;
	// totalEmissiveRadiance = vec3(0.5, diffuseColor.gb * 8.0);//diffuseColor.rgb;

`,fc=`
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
`,uc=`

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
`,vc=`
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

`,mc=`
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

`,Cn=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;
`,gc=`
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


`,pc=`

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


`+gc+`
`+Cn+`


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



`,_c=`

    uniform sampler2D noiseMap;
    uniform float radiance;
    uniform bool hasSnow;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;


`,bc=`

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
`,wc=`
    if(diffuseColor.a < vAlphaTest) discard;
`,yc=`

    // Use the normal to blend with snow colours

    // ONLY DO THIS ON SNOW VIBES
    if(hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        if(dotUp > 0.1) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(min(1.0, 0.5 + dotUp)), min(1.0, (dotUp - 0.1) * 8.0));
        }
    }


`,Sc=`

    if(vType < 0.5) {
        // We have a leaf
        // if(diffuseColor.g > diffuseColor.b * 1.5) { // For some reason it looks better if it's darker than regular tree?
            diffuseColor.rg *= discolouration;
            // Emissive... unclear why this needs to be different to the regular tree emissive. Suspicious. Just a shadowmap diff?
            totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
        // }
    } else {
        `+cc+`
    }
`,Dc=`
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
`,Lc=`
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

`,Cc=`

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
`,kc=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Ic=`

    vUv = uv;

    vType = type;

`+Cn,Mc=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,Ec=`


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
`,Ac=`

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
`,Tc=`


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

`+Sc,Pc=`
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
`,Nc=`
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
`,xc=`
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
`,Rc=`

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

    float variant = 1.0;

    // CHECK HEATHER - has to match the ground function
    // Might want to find something cheaper to do here?
    float heather = smoothstep(0.4, 1.0, ((wPos.y + fade1 * 350.0) - 60.0) / 500.0);
    heather *= screen(fade1, fade0);
    // heather = smoothstep(0.3, 0.6, heather);
    if(vShadow < 0.1 && heather > 0.4 + v / 5.0 ) {
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
    } else if(variant < 3.0 && ( wPos.y > 100.0 && v + fade0 > 1.75 - (wPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

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

`,Uc=`

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


`,Vc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Oc=`

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


`,Hc=`
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
`,zc=`

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


`,Fc=`

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


`,Gc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Bc=`

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

`,va=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,qc=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,ma=`

    uniform float fresnelIntensity;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,ga=`
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

        fresnel *= fresnelIntensity;

        if(fresnel > 0.25) {
            fresnel = 0.25 + (fresnel - 0.25) * 0.5;
            if(fresnel > 0.5) {
                fresnel = 0.5;
            }
        }

        diffuseColor.rgb *= 1.0 - fresnel;

    }
`,Wc=`
    attribute float bridge;
    varying float vBridge;
`,jc=`
    vBridge = bridge;
`,Yc=`
    uniform sampler2D shadowMap;
    uniform bool useShadowBlend;
    uniform sampler2D bridgeMap;
    uniform bool useBridgeBlend;

    varying float vBridge;
`,Kc=`

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
`,kn=`
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
`,In=`

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
`,Xc=""+new URL("../assets/noise_fine.9cdaf478.webp",import.meta.url).href,Qc=""+new URL("../assets/noise_finer.56c77b62.webp",import.meta.url).href,fs="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",Zc=""+new URL("../assets/sea_waves.63ff8729.webp",import.meta.url).href,Ba=""+new URL("../assets/signs.c90afd62.webp",import.meta.url).href,Jc="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",$c=`

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
`,Vt=Kt(fs),sr=Kt(Xc,4,void 0,aa),eh=Kt(Qc,4,void 0,aa);Kt(Jc,1);const Me=new Et({map:Kt(fs),displacementMap:Kt(fs),fog:!0});Me.needsCameraPosition=!0;Me.userData.grassMap={value:null};Me.userData.sandMap={value:null};Me.userData.rockMap={value:null};Me.userData.rockMapBump={value:null};Me.userData.gravelMap={value:null};Me.userData.roadMap={value:null};Me.userData.forestMap={value:null};Me.userData.fadeFine={value:sr};Me.userData.roadCol={value:[]};Me.userData.fresnelIntensity={value:.5};Me.userData.radiance={value:0};Me.userData.grassColA={value:[]};Me.userData.grassColB={value:[]};Me.userData.peakColA={value:[]};Me.userData.peakColB={value:[]};Me.userData.vehicleIndex={value:0};Me.userData.sinkDist={value:400};Me.userData.seasonIndex={value:1};Me.onBeforeCompile=s=>(s.uniforms.grassMap=Me.userData.grassMap,s.uniforms.sandMap=Me.userData.sandMap,s.uniforms.rockMap=Me.userData.rockMap,s.uniforms.rockMapBump=Me.userData.rockMapBump,s.uniforms.gravelMap=Me.userData.gravelMap,s.uniforms.roadMap=Me.userData.roadMap,s.uniforms.forestMap=Me.userData.forestMap,s.uniforms.fadeFine=Me.userData.fadeFine,s.uniforms.grassColA=Me.userData.grassColA,s.uniforms.grassColB=Me.userData.grassColB,s.uniforms.peakColA=Me.userData.peakColA,s.uniforms.peakColB=Me.userData.peakColB,s.uniforms.roadCol=Me.userData.roadCol,s.uniforms.fresnelIntensity=Me.userData.fresnelIntensity,s.uniforms.radiance=Me.userData.radiance,s.uniforms.sinkDist=Me.userData.sinkDist,s.uniforms.vehicleIndex=Me.userData.vehicleIndex,s.uniforms.shadowFactor=Os,s.uniforms.seasonIndex=Me.userData.seasonIndex,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",ec+va),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",tc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",ic+ma),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",sc+ga),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const qi=new Et({map:Kt(fs),alphaTest:.75});qi.needsCameraPosition=!0;qi.userData.shadowMap={value:Vt};qi.userData.bridgeMap={value:Vt};qi.userData.useShadowBlend={value:!1};qi.userData.useBridgeBlend={value:!1};qi.onBeforeCompile=s=>(s.uniforms.fresnelIntensity=Me.userData.fresnelIntensity,s.uniforms.radiance=Me.userData.radiance,s.uniforms.shadowMap=qi.userData.shadowMap,s.uniforms.useShadowBlend=qi.userData.useShadowBlend,s.uniforms.bridgeMap=qi.userData.bridgeMap,s.uniforms.useBridgeBlend=qi.userData.useBridgeBlend,s.uniforms.shadowFactor=Os,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+Wc+_d+va),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+jc+bd+qc),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+Yc+wd+ma),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Kc+ga),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const th=new rr({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0});th.needsCameraPosition=!0;const dt=new rr({depthTest:!1,fog:!0,map:Vt,toneMapped:!0,side:us});dt.needsCameraPosition=!0;dt.userData.highlight={value:new ar(16777215)};dt.userData.lowlight={value:new ar(15658734)};dt.userData.hasClouds={value:!0};dt.userData.camPos={value:new Bi};dt.userData.time={value:0};dt.userData.shelfHeight0={value:1e3};dt.userData.shelfHeight1={value:1200};dt.userData.skyScale0={value:6e3};dt.userData.skyScale1={value:3e3};dt.userData.mode={value:0};dt.userData.altitude={value:200};dt.customProgramCacheKey=()=>"clouds";dt.onBeforeCompile=s=>(s.uniforms.highlight=dt.userData.highlight,s.uniforms.lowlight=dt.userData.lowlight,s.uniforms.hasClouds=dt.userData.hasClouds,s.uniforms.camPos=dt.userData.camPos,s.uniforms.time=dt.userData.time,s.uniforms.shelfHeight0=dt.userData.shelfHeight0,s.uniforms.shelfHeight1=dt.userData.shelfHeight1,s.uniforms.skyScale0=dt.userData.skyScale0,s.uniforms.skyScale1=dt.userData.skyScale1,s.uniforms.mode=dt.userData.mode,s.uniforms.altitude=dt.userData.altitude,s.vertexShader=s.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+Yd),s.vertexShader=s.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+Kd),s.vertexShader=s.vertexShader.replace("#include <fog_pars_vertex>",Qd),s.vertexShader=s.vertexShader.replace("#include <fog_vertex>",Zd),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",Xd),s.fragmentShader=s.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Jd),s.fragmentShader=s.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+$d),s);let zs=new rr({});zs.userData.camPos={value:new Bi};zs.userData.waves={value:Kt(Zc,4,void 0,jn)};zs.userData.body={value:new ar};zs.userData.highlight={value:new ar};zs.userData.time={value:0};zs.needsCameraPosition=!0;const ri={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function qa(s=!1){let e=new Et({map:Vt,normalMap:s?null:Vt,alphaMap:s?Vt:null,alphaTest:s?.4:.5,side:us,normalMapType:s?null:Lr,forceSinglePass:!0,customProgramCacheKey:()=>"tree"});return e.needsCameraPosition=!0,s?e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:sr},t.uniforms.dissolveNear=ri.dissolveNear,t.uniforms.dissolveFar=ri.dissolveFar,t.uniforms.dissolveInterval=ri.dissolveInterval,t.uniforms.discolourationFactor=ri.discolourationFactor,t.uniforms.shadowFactor=Os,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+rc),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",oc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",uc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+nc),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+hc),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",vc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",fc),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t):e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:sr},t.uniforms.dissolveNear=ri.dissolveNear,t.uniforms.dissolveFar=ri.dissolveFar,t.uniforms.dissolveInterval=ri.dissolveInterval,t.uniforms.radiance=ri.radiance,t.uniforms.discolourationFactor=ri.discolourationFactor,t.uniforms.shadowFactor=Os,t.uniforms.hasSnow=ri.hasSnow,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+mc),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",pc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",Zo),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_fragment>",wc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+_c),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+bc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+yc),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Lc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",Dc),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t),e}qa(),qa(!0);new Et({map:Vt,alphaTest:.25,side:us,forceSinglePass:!0});new Et({color:110832});const jt=new Et({map:Kt(fs,0,Yn),normalMap:Kt(fs,0,void 0,aa),normalMapType:Lr,alphaTest:.5,forceSinglePass:!0});jt.needsCameraPosition=!0;jt.userData.noiseMap={value:sr};jt.userData.mapB={value:Kt(fs)};jt.userData.normalMapB={value:Kt(fs)};jt.userData.dissolveNear={value:100};jt.userData.dissolveFar={value:200};jt.userData.dissolveInterval={value:100};jt.onBeforeCompile=s=>{s.uniforms.noiseMap=jt.userData.noiseMap,s.uniforms.mapB=jt.userData.mapB,s.uniforms.normalMapB=jt.userData.normalMapB,s.uniforms.dissolveNear=jt.userData.dissolveNear,s.uniforms.dissolveFar=jt.userData.dissolveFar,s.uniforms.dissolveInterval=jt.userData.dissolveInterval,s.uniforms.radiance=ri.radiance,s.uniforms.discolourationFactor=ri.discolourationFactor,s.uniforms.hasSnow=ri.hasSnow,s.vertexShader=s.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+Cc),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Ic),s.vertexShader=s.vertexShader.replace("#include <beginnormal_vertex>",kc+`
`+Mc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",Ec),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Zo),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_maps>",Pc),s.fragmentShader=s.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Ac),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Tc),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Nc),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let ih=.25;const ji=new Et({map:Vt,alphaTest:ih,side:us,forceSinglePass:!0});ji.needsCameraPosition=!0;ji.userData.noiseMap={value:sr};ji.userData.sproutNear={value:100*100};ji.userData.sproutFar={value:200*200};ji.customProgramCacheKey=()=>"grass";ji.onBeforeCompile=s=>{s.uniforms.noiseMap=ji.userData.noiseMap,s.uniforms.sproutNear=ji.userData.sproutNear,s.uniforms.sproutFar=ji.userData.sproutFar,s.uniforms.grassColA=Me.userData.grassColA,s.uniforms.grassColB=Me.userData.grassColB,s.uniforms.peakColA=Me.userData.peakColA,s.uniforms.peakColB=Me.userData.peakColB,s.uniforms.fresnelIntensity=Me.userData.fresnelIntensity,s.uniforms.radiance=Me.userData.radiance,s.uniforms.shadowFactor=Os,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+xc+va),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+Rc),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Uc+ma),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Oc+`
`+ga),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Vc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",kn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",In),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let sh=.5;const ai=new Et({map:Vt,alphaTest:sh,side:us,forceSinglePass:!0});ai.needsCameraPosition=!0;ai.userData.noiseMap={value:eh};ai.userData.sproutNear={value:100*100};ai.userData.sproutFar={value:200*200};ai.userData.sproutMargin={value:ai.userData.sproutFar.value-ai.userData.sproutNear.value};ai.onBeforeCompile=s=>{s.uniforms.noiseMap=ai.userData.noiseMap,s.uniforms.sproutNear=ai.userData.sproutNear,s.uniforms.sproutFar=ai.userData.sproutFar,s.uniforms.sproutMargin=ai.userData.sproutMargin,s.uniforms.radiance=Me.userData.radiance,s.uniforms.shadowFactor=Os,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+Hc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+zc),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Fc),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Bc),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Gc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",kn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",In),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const Mn=new Et({map:Vt,normalMap:Vt,alphaTest:.5,side:us,normalMapType:Lr,forceSinglePass:!0,customProgramCacheKey:()=>"barrier"});Mn.onBeforeCompile=Cr();Mn.needsCameraPosition=!0;const En=new Et({map:Vt,flatShading:!0});En.onBeforeCompile=Cr();En.needsCameraPosition=!0;const An=new Et({map:Vt,normalMap:Vt,flatShading:!0,alphaTest:.25,side:us,normalMapType:Lr,forceSinglePass:!0,customProgramCacheKey:()=>"fence"});An.onBeforeCompile=Cr();An.needsCameraPosition=!0;const Tn=new Et({map:Vt,flatShading:!0});Tn.onBeforeCompile=Cr();Tn.needsCameraPosition=!0;const rh=new Et({map:Vt,flatShading:!0,side:us});rh.needsCameraPosition=!0;const pa={white:new Et({color:16777215,emissive:16777215,emissiveIntensity:.2}),black:new Et({color:3355443,flatShading:!0}),reflect:new Et({color:16720418,emissive:16720418,emissiveIntensity:.2})};pa.white.needsCameraPosition=!0;pa.black.needsCameraPosition=!0;pa.reflect.needsCameraPosition=!0;const _a=new Et({map:Kt(Ba,4),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:Kt(Ba,4),emissiveIntensity:0});_a.onBeforeCompile=s=>(s.fragmentShader=s.fragmentShader.replace("#include <lights_pars_begin>",$c),s);_a.needsCameraPosition=!0;const ah=new Et({map:Vt,color:12303291,flatShading:!0});ah.needsCameraPosition=!0;const lh=new rr({color:0,transparent:!0,opacity:.4});lh.needsCameraPosition=!0;let Wa,ja=16,oh=0,bs=5e3,zr=11,Ya=4,nh=2,Ws=1e4,Fr=.8,js=4e3;const S={id:0},Lt={},Ct={};class dh extends yd{constructor(t={}){super(t);F(this,"debug",!0);F(this,"config",{seed:"a",scale:1,offset:0,resolution:5,upresFactor:2,depth:3,depthHeightFactor:1,layerResolutions:[],squared:!1,temper:!1,temperBelow:100,temperMin:.25,spiralise:!0,maxCached:32,tileScaleRandom:0,tileSize:3e3,repeated:!1});F(this,"distortMap");this.config={...this.config,...t},this.config.layerResolutions.length?this.config.depth=this.config.layerResolutions.length:this.generateLayerResolutions()}generateLayerResolutions(){let t=this.config.resolution;for(let i=0;i<this.config.depth;i++)this.layerResolutions.push(t),t=t+this.config.upresFactor*(i+1)}generateTile(t,i){let r=[],l=new window.alea(this.config.seed+"#"+this.curLayer[t<0?0:1]+"#"+t+"#"+i),a=1+l()*this.config.tileScaleRandom-this.config.tileScaleRandom/2,n,o,c,f=this.config.depthHeightFactor;for(n=0;n<this.config.depth;n++){o=this.config.layerResolutions[n],c=this.config.resolution/o*f,f*=this.config.depthHeightFactor;let u=[],g=1/o,b;for(Lt.i=0;Lt.i<o;Lt.i++){for(b=[],Lt.j=0;Lt.j<o;Lt.j++)Lt.h=l()*2-1,this.config.squared&&(Lt.h<0?Lt.h*=-(Lt.h*(1+Lt.h))*4:Lt.h*=Lt.h*(1-Lt.h)*4),Lt.h*=c,b.push({x:(Lt.i+.5)/o,y:Lt.h*this.config.scale*a,z:(Lt.j+.5)/o,r:g,r2:g*g});u.push(b)}r.push(u)}return r}getRoadBlendedXZ(t,i,r){return Ct.h=0,r.h=r.n.h+r.t*(r.n.next.h-r.n.h),r.gfa=r.n.gfa+r.t*(r.n.next.gfa-r.n.gfa),r.ga=Math.max(Math.abs(r.g),Math.abs(r.h))/3.6,r.w=Wa+oh+r.ga,r.y-=.01+.01*r.gfa,r.ga=1-r.ga*r.ga,Ct.rm=ja*.25+ja*Math.min(.75,Math.max(.4,r.ga)),r.d<r.w+S.rm?r.d<Wa&&!r.n.bridge?r.y:(Ct.lt=Math.max(0,Math.min(1,2*(r.d-r.w)/S.rm)),Ct.lt=this.roadLerp(Ct.lt),Ct.h=this.getXZ(t,i),r.n.bridge&&Ct.h<0&&(Ct.h>-r.y?Ct.lt=Math.max(Ct.lt,Ct.h/-r.y):Ct.lt=1),Ct.h*Ct.lt+r.y*(1-Ct.lt)):this.getXZ(t,i)}roadLerp(t){return t>.3333?(Ct.lerp=1-(t-.3333)/.6667,1-Ct.lerp*Ct.lerp*.5):t*1.5}getCurvature(t,i){return 0}getTile(t,i){return this.config.repeated?super.getTile(0,0):super.getTile(t,i)}getXZ(t,i,r=null,l=!1){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),r=r||this.config.depth,S.depth=0;for(S.layer of S.tile){if(S.depth==r)break;S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.temper=1,this.config.temper&&S.depth>0&&(S.temper=Math.min(Math.max(this.config.temperMin,(S.h+this.config.offset+this.config.temperBase)/this.config.temperBelow),1)),S.h+=S.th*S.temper,S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1}return S.h+this.config.offset}getXZLayer(t,i,r,l=this.config.depth){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),l=l||this.config.depth,S.depth=0,S.i=0;for(S.layer of S.tile){if(S.depth==l)break;if(S.i++!==r){S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1;continue}S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.h+=S.th*S.temper;break}return S.h+this.config.offset}lerpHeight(t,i,r,l){return t=(l.x-i)*(l.x-i)+(l.z-r)*(l.z-r),t<l.r2?this.smootherLerp(t/l.r2)*l.y:0}}const zi=new Kn,tr=class tr extends fd{constructor(t){super(t);F(this,"container",new Vs);F(this,"treeMesh");F(this,"instanceVariant");F(this,"instanceOrientation");F(this,"instanceDissolve");F(this,"maxCount",bs);F(this,"curIndex",0);F(this,"isFull",!1);this.treeMesh=new la(tr.protoGeo.clone(),jt,bs),this.treeMesh.renderOrder=20,this.treeMesh.geometry.setAttribute("variant",new Wi(new Float32Array(bs),1)),this.treeMesh.geometry.setAttribute("orientation",new Wi(new Float32Array(bs),1)),this.treeMesh.geometry.setAttribute("dissolve",new Wi(new Float32Array(bs),1)),this.treeMesh.geometry.setAttribute("type",new Wi(new Float32Array(bs),1)),this.instanceVariant=this.treeMesh.geometry.attributes.variant,this.instanceVariant.setUsage(Jt),this.instanceOrientation=this.treeMesh.geometry.attributes.orientation,this.instanceOrientation.setUsage(Jt),this.instanceDissolve=this.treeMesh.geometry.attributes.dissolve,this.instanceDissolve.setUsage(Jt),this.instanceType=this.treeMesh.geometry.attributes.type,this.instanceType.setUsage(Jt),this.instanceMatrix=this.treeMesh.instanceMatrix,this.treeMesh.instanceMatrix.setUsage(Jt),this.treeMesh.boundingSphere=new Jo,this.treeMesh.computeBoundingSphere=()=>{},this.treeMesh.geometry.computeBoundingSphere=()=>{},this.container.add(this.treeMesh)}reset(){this.curIndex=0,this.treeMesh.count=0,this.isFull=!1}retire(){super.retire(),this.reset()}destroy(){super.destroy(),this.treeMesh.geometry.dispose(),delete this.instanceVariant,delete this.instanceOrientation,delete this.instanceDissolve,delete this.instanceType,delete this.instanceMatrix}setBoundingSphere(t){this.treeMesh.boundingSphere.center.copy(t.center),this.treeMesh.boundingSphere.radius=t.radius}addInstance(t,i,r,l=0,a=0){this.isFull||(this.treeMesh.setMatrixAt(this.curIndex,t),this.instanceVariant.array[this.curIndex]=i,this.instanceOrientation.array[this.curIndex]=r,this.instanceType.array[this.curIndex]=l,this.instanceDissolve.array[this.curIndex]=a,this.curIndex++,this.isFull=this.curIndex>=bs)}hideInstance(t){this.treeMesh.getMatrixAt(t,zi),zi.setPosition(zi.elements[12],-1e5,zi.elements[14]),this.treeMesh.setMatrixAt(t,zi),this.instanceMatrix.needsUpdate=!0}prepCellInstance(t,i,r){this.treeMesh.getMatrixAt(t,zi),zi.setPosition(zi.elements[12],i,zi.elements[14]),this.treeMesh.setMatrixAt(t,zi),r?this.instanceDissolve.array[t]=1:this.instanceDissolve.array[t]=0}finalise(){this.instanceMatrix.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.instanceOrientation.needsUpdate=!0,this.instanceType.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0,this.treeMesh.count=Math.min(this.maxCount,Math.max(0,this.curIndex)),this.treeMesh.count==0?this.treeMesh.visible=!1:this.treeMesh.visible=!0}finaliseChunk(){this.instanceMatrix.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0}static makeProtoGeo(){let t=new oa,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0]);t.setAttribute("position",new Cs(i,3));let r=new Float32Array([.0625,0,.0625,1/Ya-.002,0,1/Ya-.002,0,0]);t.setAttribute("uv",new Cs(r,2));let l=[0,1,2,0,2,3];return t.setIndex(l),t.scale(zr,zr,zr),t}};F(tr,"protoGeo",tr.makeProtoGeo());let Ka=tr;const ch=3,hh=20,fh=Math.PI*2,Xa=2,ue={};class uh{constructor(e=ch,t=hh,i="perlin"){F(this,"layers",[]);F(this,"amplitudeFactor",1);this.depth=e,this.res=t;let r=new Sd(i);for(let n=0;n<e;n++){let o=[];for(let c=0;c<t;c++){let f=[];for(let u=0;u<t;u++){let g=r.next()*fh;f.push({x:Math.cos(g),y:Math.sin(g)})}f.push({...f[0]}),o.push(f)}o.push([...o[0]]),this.layers.push(o),t*=Xa}let l=0,a=1;for(let n=0;n<e;n++)l+=a,a/=2;this.amplitudeFactor=1/l,this.amplitudeFactor=.5+this.amplitudeFactor*.5}get(e,t){ue.x=e-Math.floor(e),ue.z=t-Math.floor(t),ue.res=this.res,ue.v=0,ue.a=this.amplitudeFactor;for(ue.l of this.layers)ue.sx=ue.x*ue.res,ue.sz=ue.z*ue.res,ue.ix=Math.floor(ue.sx),ue.ix1=ue.ix+1,ue.iz=Math.floor(ue.sz),ue.iz1=ue.iz+1,ue.qx=ue.sx-ue.ix,ue.qz=ue.sz-ue.iz,ue.n0=this.dotGridGradient(ue.l[ue.ix][ue.iz],ue.ix,ue.iz,ue.sx,ue.sz),ue.n1=this.dotGridGradient(ue.l[ue.ix1][ue.iz],ue.ix1,ue.iz,ue.sx,ue.sz),ue.int0=this.smoothLerp(ue.n0,ue.n1,ue.qx),ue.n2=this.dotGridGradient(ue.l[ue.ix][ue.iz1],ue.ix,ue.iz1,ue.sx,ue.sz),ue.n3=this.dotGridGradient(ue.l[ue.ix1][ue.iz1],ue.ix1,ue.iz1,ue.sx,ue.sz),ue.int1=this.smoothLerp(ue.n2,ue.n3,ue.qx),ue.v+=this.smoothLerp(ue.int0,ue.int1,ue.qz)*ue.a,ue.a/=2,ue.res*=Xa;return ue.v+.5}dotGridGradient(e,t,i,r,l){return(r-t)*e.x+(l-i)*e.y}smootherLerp(e,t,i){return(t-e)*((i*(i*6-15)+10)*i*i*i)+e}smoothLerp(e,t,i){return e+(t-e)*(i*i*(3-2*i))}}const Qa=new Qo([0,0]);let Za=[[[5.28,8.81],[4.07,4.7],[8.36,8.29],[.73,6.62]],[[4.81,3.69],[2.11,6.46],[8.58,2.78],[7.66,8.88]],[[2.04,2.85],[5.76,7.39],[6.07,2.44],[3.46,5.57]],[[3.91,7.36],[3.93,2.11],[7.27,9.11],[7.9,4.54]],[[4.81,7.08],[1.42,8.06],[1.36,4.91],[8.31,7.76]],[[4.77,4.89],[1.14,2.74],[7.4,2.45],[7.49,9.23]],[[1.64,8.36],[5.85,2.37],[6.85,7.86],[2.42,2.18]],[[7.25,6.91],[3.67,4.08],[7.77,2.79],[2.88,6.94]]],Ja=[[[.97,1.21],[4.37,1.4],[3.03,1.17],[.33,1.77]],[[1.91,1.11],[5.23,1.17],[5.35,1.08],[2.88,1.51]],[[4.78,1.12],[5.24,1.27],[.42,1.48],[1.46,1.51]],[[3.26,1.16],[1.42,1.3],[6.06,1.34],[.08,1.48]]],$a=[[1,3,0,0],[0,2,1,0],[2,3,1,2],[3,1,3,2],[2,0,3,0],[3,3,0,1]];const vh=[[[0,0,1,0],[0,3,0,0],[0,0,0,0],[0,0,2,0]],[[1,3,1,1],[1,3,1,0],[3,1,0,1],[0,1,1,1]],[[2,2,0,2],[1,2,2,2],[2,3,2,2],[2,2,2,2]],[[3,1,3,3],[0,3,3,3],[3,0,2,3],[1,3,3,3]]];let mh=[[[2,2,2,1],[2,0,2,2],[2,2,2,2],[0,2,2,2]],[[3,0,3,3],[3,3,3,0],[1,3,3,3],[3,3,3,3]],[[0,0,1,0],[1,0,0,0],[2,0,0,0],[0,0,0,0]],[[1,0,1,0],[0,1,3,1],[1,1,3,1],[1,1,1,1]]],gh=.46,ph=.58,_h=.7,bh=.46,wh=.58,yh=.7,Sh=4;const er=[];for(let s=0;s<nh;s++){let e=[];for(let t=0;t<Za.length;t++)for(let i=0;i<Ja.length;i++)for(let r=0;r<$a.length;r++)e.push({t:Za[t],p:Ja[i],v:$a[r]});er.push(e)}const el=er[0].length,tl=new uh(4,4),il=new Dn("slowroads",el*3,el),sl=new Dn("slowroads",31,Sh),Dh=new ks("slowroads",101),De={get:{i:0,a:[],c:0,t:0},vs:[0,0,0,0]};class Lh{constructor(){F(this,"map");F(this,"onHeightmapLayersChangedBound",this.onHeightmapLayersChanged.bind(this));Qa.addListener(this.onHeightmapLayersChangedBound)}onHeightmapLayersChanged(e){this.map&&this.map.setLayers(e)}init(e,t){this.map=new dh({seed:e,...t}),this.map.setLayers(Qa.value),this.typeMap=new Dd({seed:e,scale:1,resolution:11,depth:4,upscale:2,offset:.45})}getDensityAt(e,t){return 1-Math.max(Math.min(1,this.map.getXZ(e,t)),0)}getShadowDensityAt(e,t){return De.d=1-Math.max(Math.min(1,this.map.getXZ(e,t)),0),De.d>.05?Math.min(1,De.d*1.5+.3):0}getTypeAt(e,t){return Math.max(Math.min(1,Math.round(this.typeMap.getXZ(e,t))),0)}getTreesAt(e,t){return De.get.d=this.getDensityAt(e,t),De.dd=(De.get.d-.001)*4,De.ddd=De.dd%1,De.dd*=.8,De.dd=Math.floor(De.dd),Dh.next()<De.ddd&&De.dd++,De.get.c=De.dd,De.get.c<=0?(De.get.c=0,De.get):(je.detail<2&&De.get.c>2?De.get.c=2:De.get.c>3&&(De.get.c=3),De.get.i=il.next(),De.get.y=this.getTypeAt(e,t),De.get.a=er[De.get.y][De.get.i],De.get.y==0?(De.pn=tl.get(e/1e3,t/1e3),De.vn=0,De.pn>gh&&(De.pn<ph?De.vn=1:De.pn<_h?De.vn=2:De.vn=3),De.get.v=vh[De.vn][sl.next()]):(De.pn=tl.get(e/2e3,t/2e3),De.get.c<2&&je.detail>0&&(De.get.c=2),De.vn=0,De.pn>bh&&(De.pn<wh?De.vn=1:De.pn<yh?De.vn=2:De.vn=3),De.get.v=mh[De.vn][sl.next()]),De.get.t=0,De.get)}getArrangementIndex(e,t){return 0}getArrangement(e,t=0){return er[t][e]}getTreesForDensity(e,t=0){return e<.2?[]:er[t][il.next()]}addExtraTree(e,t,i,r,l,a,n){return-1}removeExtraTree(e,t,i){}}new Lh;new ks("slowroads",119,Math.PI*2);new ks("slowroads",97,.4,-.8);new ud;const ns=new Vs;ns.rotation.order="XZY";const Ds=class Ds extends fn{constructor(){super(...arguments);F(this,"matrixNeedsUpdate",!1)}init(t){this.maxCount=Ws,this.mesh=new la(Ds.protoGeo.clone(),ji,Ws),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("groundNormal",new Wi(new Float32Array(Ws*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Jt),this.mesh.geometry.setAttribute("shadow",new Wi(new Float32Array(Ws*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Jt),this.mesh.geometry.setAttribute("roadProx",new Wi(new Float32Array(Ws*1),1)),this.instanceRoadProx=this.mesh.geometry.attributes.roadProx,this.instanceRoadProx.setUsage(Jt),this.mesh.instanceMatrix.setUsage(Jt),this.mesh.receiveShadow=!0,t.add(this.mesh),this.reset(),this.postInit()}addGrass(t,i,r,l,a,n,o,c,f,u,g){this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=r),g>this.retireIndex&&(this.retireIndex=g),ns.position.set(t-this.ox,i,r-this.oz),this.instanceNormal.array[this.curIndex*3]=l,this.instanceNormal.array[this.curIndex*3+1]=a,this.instanceNormal.array[this.curIndex*3+2]=n,this.instanceShadow.array[this.curIndex]=f,this.instanceRoadProx.array[this.curIndex]=u,ns.rotation.y=o,ns.rotation.z=-Math.asin(l),ns.rotation.x=Math.asin(n),ns.scale.set(c,c,c),ns.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,ns.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,r-this.oz)}update(){super.update(),this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceRoadProx.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix())}static makeProtoGeo(){let t=new oa,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0,0,0,.5,0,1,.5,0,1,-.5,0,0,-.5]);t.setAttribute("position",new Cs(i,3));let r=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);t.setAttribute("normal",new Cs(r,3));let l=new Float32Array([.01,0,.01,.99,.24,.99,.24,0,.01,0,.01,.99,.24,.99,.24,0]);t.setAttribute("uv",new Cs(l,2));let a=[0,1,2,0,2,3,4,5,6,4,6,7];return t.setIndex(a),t.scale(Fr,Fr,Fr),t.computeBoundingSphere=()=>{},t.boundingSphere=new Jo,t}destroy(){Ds.protoGeo&&Ds.protoGeo.dispose(),this.mesh.geometry.dispose()}};F(Ds,"protoGeo",Ds.makeProtoGeo());let $r=Ds;class Ch extends un{addGrass(e,t,i,r,l,a,n,o,c,f,u){this.curInstance.addGrass(e,t,i,r,l,a,n,o,c,f,u),this.checkCycleInstances()}}new Ch($r,3,"grass");const kh="data:model/obj;base64,IyBCbGVuZGVyIDMuNi4yCiMgd3d3LmJsZW5kZXIub3JnCm8gQ3ViZQp2IDAuMDAwMDAwIC0wLjI1OTQ1MiAtMC4wMDQwNjcKdiAtMC41MDY4ODcgMS4wNzIzOTIgLTAuNzE5MTk1CnYgMC41MDkzMDMgMS4yMTM2NTYgMC43MTU5ODYKdiAwLjAwMDAwMCAtMC4yMzE4ODggLTAuMDA0MDY4CnYgLTAuNjg5MjEyIDEuMDY4NjAxIDAuNTc1ODA0CnYgMC42ODkyMTIgMS4wNjg2MDAgLTAuNTgzOTM5CnYgMC40ODU3MDggMS4wMzYzNDQgMC40MDA5MDIKdiAtMC4wNDY2MTkgMC44OTM1ODMgLTAuNjMxODEzCnYgMC4wNzgwMjAgLTAuMjg5ODA3IC0wLjEwMzM5Nwp2IC0wLjUzNjYzOCAwLjg4MzQ0OSAwLjI1MTQwNwp2IDAuMDUwMTA0IDAuODc2MDc5IC0wLjYyODgwNgp2IC0wLjEzMjYxNCAtMC4yMjQ3NjkgLTAuMDIxODc5CnYgLTAuNjc5MDg2IDAuOTI3NDgwIDAuMjg0ODUzCnYgMC42Njc2MTYgMS4wNTI2NDEgMC4yODU3NjcKdiAwLjA0NDc4MyAtMC4zNzk2MTQgMC4wNTkyODkKdm4gLTAuODE2MSAtMC4wMDAzIDAuNTc3OQp2biAwLjY0MzggLTAuMDAwMCAwLjc2NTIKdm4gMC44ODk4IC0wLjEwNDYgLTAuNDQ0Mgp2biAwLjgyMTMgMC4xNjQ4IDAuNTQ2MQp2biAwLjAxNDQgLTAuMTYyMyAwLjk4NjYKdnQgMC4wMzIzOTggMC44NzA2NjkKdnQgMC4wMDAxMTQgMC4wMDE1NTYKdnQgMC4yMTc3NjUgMC4xMjkyODUKdnQgMC4wNjg5NjQgMC43MjQwNjkKdnQgMC4xODA2NDQgMC4yNzQ4NTgKdnQgMC4yNTEzNjQgMS4wMDI3MDEKcyAwCmYgMi8xLzEgMS8yLzEgMy8zLzEKZiA1LzEvMiA0LzIvMiA2LzMvMgpmIDgvNC8zIDcvNS8zIDkvNi8zCmYgMTEvNC80IDEwLzUvNCAxMi82LzQKZiAxNC80LzUgMTMvNS81IDE1LzYvNQo=",xs=new Vs;xs.rotation.order="XZY";const Ih=new Xn;let Mh=0;const Ei=class Ei extends fn{constructor(){super();F(this,"matrixNeedsUpdate",!1);F(this,"parent");F(this,"hasInit",!1);this.id=Mh++,Ei.protoGeo===void 0&&Ei.makeProtoGeo()}init(t){this.parent=t,this.hasInit&&(this.maxCount=js,this.mesh=new la(Ei.protoGeo.clone(),ai,js),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("variant",new Wi(new Float32Array(js),1)),this.instanceVariant=this.mesh.geometry.attributes.variant,this.instanceVariant.setUsage(Jt),this.mesh.geometry.setAttribute("groundNormal",new Wi(new Float32Array(js*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Jt),this.mesh.geometry.setAttribute("shadow",new Wi(new Float32Array(js*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Jt),this.mesh.instanceMatrix.setUsage(Jt),t.add(this.mesh),this.reset(),this.postInit())}addBush(t,i,r,l,a,n,o,c,f,u,g=0){this.hasInit||(this.hasInit=!0,this.init(this.parent)),this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=r),u>this.retireIndex&&(this.retireIndex=u),xs.position.set(t-this.ox,i,r-this.oz),this.instanceNormal.array[this.curIndex*3]=l,this.instanceNormal.array[this.curIndex*3+1]=a,this.instanceNormal.array[this.curIndex*3+2]=n,this.instanceShadow.array[this.curIndex]=f,this.instanceVariant.array[this.curIndex]=g,xs.rotation.y=o,xs.scale.set(c,c,c),xs.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,xs.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,r-this.oz)}update(){this.hasInit&&(this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix()),super.update())}static makeProtoGeo(){Ei.protoGeo===void 0&&(Ei.protoGeo=null,Ih.load(kh,t=>{let i=t.children[0].geometry;i.computeBoundingSphere(),Ei.protoGeo=i}))}destroy(){Ei.protoGeo&&Ei.protoGeo.dispose(),this.mesh&&this.mesh.geometry.dispose()}};F(Ei,"protoGeo");let Dr=Ei;class Eh extends un{constructor(){super(...arguments);F(this,"bushesAwaiting",[]);F(this,"addBush",this.addBushLoading)}addBushLoading(...t){if(this.bushesAwaiting.push(t),Dr.protoGeo){this.addBush=this.addBushLive;for(let i of this.bushesAwaiting)this.addBush(...i);delete this.bushesAwaiting}}addBushLive(t,i,r,l,a,n,o,c,f,u,g){this.curInstance.addBush(t,i,r,l,a,n,o,c,f,u,g),this.checkCycleInstances()}}new Eh(Dr,3,"bush");new ks(He.seed,251);new ks;const rl={Left:0,Right:1,LeftDouble:2,RightDouble:3,Uphill15:4,Uphill20:5,Downhill15:6,Downhill20:7,ChevronLeft:8,ChevronRight:9},Zt=1/6,kt=1/2,vr=.7,ki=.7/2,Gr=-.2,Ii=1.8,It=.04,ir=class ir{constructor(){F(this,"mesh");this.geo=ir.protoGeo.clone(),this.uvs=this.geo.attributes.uv.array,this.mesh=new $o(this.geo,_a),this.curVariant=null}static makeProtoGeo(){let e=[-ki,Ii+vr,It,ki,Ii+vr,It,-ki,Ii,It,ki,Ii,It,ki,Ii+vr,It,-ki,Ii+vr,It,ki,Ii,It,-ki,Ii,It,It,Ii+ki,It-.01,-It,Ii+ki,It-.01,0,Ii+ki,-It,It,Gr,It-.01,-It,Gr,It-.01,0,Gr,-It],t=[Zt,kt*2,Zt*2,kt*2,Zt,kt,Zt*2,kt,0,kt*2,Zt,kt*2,0,kt,Zt,kt,.06,.48,.08,.48,.1,.48,.06,0,.08,0,.1,0],i=[0,2,1,1,2,3,4,6,5,5,6,7,8,9,11,11,9,12,9,10,12,12,10,13,10,8,13,13,8,11],r=new oa;return r.setAttribute("position",new Cs(e,3)),r.setAttribute("uv",new Cs(t,2)),r.attributes.uv.setUsage(Jt),r.setIndex(i),r}setVariant(e){if(e==this.curVariant)return;let t,i;e%2==0?i=1:i=0,t=1+Math.floor(e/2),this.uvs[0]=Zt*t,this.uvs[1]=kt*(i+1),this.uvs[2]=Zt*(t+1),this.uvs[3]=kt*(i+1),this.uvs[4]=Zt*t,this.uvs[5]=kt*i,this.uvs[6]=Zt*(t+1),this.uvs[7]=kt*i,e==rl.ChevronLeft||e==rl.ChevronRight?(this.uvs[8]=0,this.uvs[9]=kt,this.uvs[10]=Zt,this.uvs[11]=kt,this.uvs[12]=0,this.uvs[13]=0,this.uvs[14]=Zt,this.uvs[15]=0):(this.uvs[8]=0,this.uvs[9]=kt*2,this.uvs[10]=Zt,this.uvs[11]=kt*2,this.uvs[12]=0,this.uvs[13]=kt,this.uvs[14]=Zt,this.uvs[15]=kt),this.curVariant=e,this.geo.attributes.uv.needsUpdate=!0}};F(ir,"protoGeo",ir.makeProtoGeo());let al=ir;new ks;new ks("wall",31,.2,.1);new Bi;new ar(0);const Pn=new Hd,Ah=""+new URL("../assets/noentry.71ff3d6f.webp",import.meta.url).href;class Th extends Vs{constructor(){super();F(this,"d");F(this,"opacity",0);Ai.addListener("isCinecam",()=>{})}init(){this.matrixAutoUpdate=!1,this.mesh=new $o(new Qn(2.4,2.4,1,1),new rr({map:Kt(Ah),transparent:!0,opacity:0})),this.mesh.material.needsCameraPosition=!0,this.mesh.position.y=1.3,this.add(this.mesh),this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix()}update(){this.position.copy(Ee.head.p),this.rotation.y=-Ee.head.a+Math.PI/2,this.updateMatrix()}updateVisibility(){this.visible&&(this.d=this.position.distanceToSquared(H.position),this.d<1e4?this.d<2500?(this.mesh.material.opacity=1,this.opacity=1):(this.mesh.material.opacity=Math.max(0,1-(Math.sqrt(this.d)-50)/50),this.opacity=this.mesh.material.opacity):this.mesh.material.opacity!=this.opacity&&(this.mesh.material.opacity=0,this.opacity=0))}}const mr=new Th,Rs=new Ld({fps:!1,hwa:!1});function Nn(){return(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))!=-1?"Opera":navigator.userAgent.indexOf("Edg")!=-1?"Edge":navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Safari")!=-1?"Safari":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":navigator.userAgent.indexOf("MSIE")!=-1||document.documentMode?"IE":"Unknown"}const ll=[vd,md,gd];class Ph{constructor(){F(this,"canvas");F(this,"dom");F(this,"renderScene");F(this,"renderer");F(this,"debug",!1);F(this,"scene");F(this,"curSettings",{});F(this,"subs",[]);F(this,"stats");F(this,"hasInit",!1);F(this,"confirmHWA",!1);F(this,"updatePixelRatio",()=>{je.useNativeRenderScale?(this.renderer.setPixelRatio(window.devicePixelRatio),Qi.add("Setting device pixel ratio "+window.devicePixelRatio)):(this.renderer.setPixelRatio(Ma[je.renderScale]),Qi.add("Setting device pixel ratio "+Ma[je.renderScale]))});F(this,"updateMaxFramerate",()=>{je.maxFramerate>0&&(this.targetFrameTime=1e3/Zn[je.maxFramerate])});F(this,"pausedInterval",null);F(this,"onTickerStateBound",this.onTickerState.bind(this));F(this,"onWorldSettingsChangedBound",this.onWorldSettingsChanged.bind(this));F(this,"frameCounter",0);F(this,"targetFrameTime",1e3/60);F(this,"updateBound",this.rawUpdate.bind(this));F(this,"update",()=>{});F(this,"maxPhysDT",.05);F(this,"minPhysDT",.001);F(this,"physDT",0);F(this,"debugUpdateTimer",.1);F(this,"debugFrameTimer",1);F(this,"debugFrame",0);F(this,"lastTimeCheck",Date.now());F(this,"lastVehicleIndexCheck",0);F(this,"driveTimer",0);F(this,"driveStartIndex",0);F(this,"onSceneInit");F(this,"profileGeneration",0);Math.TAU=Math.PI*2,Math.HALFPI=Math.PI/2,Math.D2R=Math.PI/180,Math.R2D=180/Math.PI,Math.getHeading=(e,t)=>{}}onMount(e,t,i){var r,l;this.canvas=e,this.dom=t,this.uiDom=i,this.renderScene=new Jn,this.renderScene.add(Cd),this.cameraController=new Gd(t),this.camera=Ae,this.renderScene.add(this.cameraController.container),this.vehicleManager=new Wd,this.renderScene.add(H),this.stats=new jd,this.stats.dom.style.left="282px",this.stats.dom.style.zIndex="9999",document.body.appendChild(this.stats.dom),ne.addListener("showDebug",a=>{this.stats&&(this.stats.dom.style.display=a?"block":"none")}),ne.addListener("roadWidth",a=>{var n;if(this.initLoad(),_r(Ks)){this.setScene(He.scene);return}(n=this.scene)==null||n.onRoadWidthChanged(),this.vehicleManager.reset()},!0),ne.addListener("fullscreen",a=>{a?t.requestFullscreen&&t.requestFullscreen():document.fullscreenElement&&document.exitFullscreen()},!0),ne.set("fullscreen",!1),this.renderer=new $n({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!1}),this.renderer.setClearColor(4473924),this.toneMapped=!0,this.renderer.toneMapping=ed,this.renderer.shadowMap.enabled=!0,je.addListener("renderScale",this.updatePixelRatio),je.addListener("useNativeRenderScale",this.updatePixelRatio),je.addListener("viewDistance",this.onGraphicsSettingsChanged.bind(this),!0),je.addListener("detail",this.onGraphicsSettingsChanged.bind(this),!0),je.addListener("maxFramerate",this.updateMaxFramerate),tt.init(),tt.addListener(this.updateBound),Ce.init(t,e,i),pe.initialise(),pe.addListener(Fi.NextScene,()=>{var a;(a=this.scene)==null||a.nextStyle()}),pe.addListener(Fi.PrevScene,()=>{var a;(a=this.scene)==null||a.prevStyle()}),pe.addListener(Fi.ToggleUI,()=>{ne.set("hideUI",!ne.hideUI)}),pe.addListener(Fi.Pause,()=>{tt.toggle()}),pe.addListener(Fi.IncSpeedControl,()=>ha()),pe.addListener(Fi.DecSpeedControl,()=>fa()),pe.addListener(Fi.ToggleSpeedControlMode,()=>{Ye.set("speedControlMode",(Ye.speedControlMode+1)%2)}),pe.addListener(Fi.AutodriveMode,()=>{ne.set("autodriveMode",(ne.autodriveMode+1)%3)}),tt.addStateListener(this.onTickerStateBound),xa.onMount(),xa.registerAction(this.onBeforeUnload.bind(this)),Ti.addListener(a=>{a<1?Ce.lockKeys("load"):(Ce.unlockKeys("load"),this.vehicleManager.onSceneReady(),this.prevRender=performance.now(),this.update=this.updateLive,this.render=this.renderLive,Ks.set(!1))}),as.onInitialiseFinished=()=>{this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera),!pi&&!rt.hasSeenHWAWarning&&(this.confirmHWA=!0,this.confirmHWATime=performance.now(),this.confirmHWACount=5),rt.hasSeenSettings||this.initFPSCheck(),as.addJob(()=>tt.initSample(),0,"Ticket.initSample")},He.addListener("any",this.onWorldSettingsChangedBound),Zs(He.startNode),mr.init(),this.renderScene.add(mr),setInterval(this.onMinutePassed.bind(this),6e4),this.hasInit=!0,lr.set(!0),Qi.add("HW: Browser is "+Nn()),Qi.add("HW: Screen res is "+((r=window.screen)==null?void 0:r.width)+" x "+((l=window.screen)==null?void 0:l.height))}initComp(){this.initLoad(),this.setScene(kd.Driftmas)}initFPSCheck(){clearTimeout(this.fpsTimeout),this.fpsTimeout=setTimeout(()=>{tt.paused||tt.blurred||rt.hasSeenSettings||this.fps*tt.speedFactor<40&&Rs.set("fps",!0)},1e4)}onTickerState(e){clearInterval(this.pausedInterval),e&&(this.pausedInterval=setInterval(()=>{pe.update(.01)},10)),this.fpsTimeout&&(clearTimeout(this.fpsTimeout),this.initFPSCheck())}onWorldSettingsChanged(e){this.hasInit&&this.onCheckJourney(),this.initLoad(),Ks.set(!0),this.curSettings.scene!=e.scene?this.setScene(He.scene):this.curSettings.roadStyle!=e.roadStyle||this.curSettings.seed!=e.seed?this.setScene(He.scene):this.curSettings.startNode!=e.startNode&&this.setScene(He.scene),this.curSettings={...e}}onGraphicsSettingsChanged(){var e;if(this.initLoad(),_r(Ks)){this.setScene(He.scene);return}(e=this.scene)==null||e.onGraphicsSettingsChanged()}initLoad(){this.update=this.updateLoad,this.render=this.renderLoad,as.reset(),clearTimeout(this.fpsTimeout)}setScene(e){if(e>=ll.length){console.error("Attempting to load unknown scene ",e);return}let t=ll[e];this.scene&&(this.scene.destroy(),Id(this.scene.container),this.renderScene.remove(this.scene.container),delete this.scene),this.scene=new t(this.renderer,this.renderScene),this.renderScene.add(this.scene.container),this.scene.initialise(this.onMidlineReady.bind(this),this.onSceneReady.bind(this)),this.vehicleManager.onSceneLoading(),Zs(He.startNode)}render(){}renderLive(){if(je.maxFramerate>0){if(this.renderDT=performance.now()-this.prevRender,this.frameCounter+this.renderDT<this.targetFrameTime)return;this.frameCounter=this.frameCounter+this.renderDT-this.targetFrameTime,this.frameCounter%=this.targetFrameTime}this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera)}renderLoad(){}rawUpdate(e){this.update(tt.smoothDT),ne.showDebug&&this.stats.update()}updateLoad(e){try{as.update(e*1e3),this.scene.updateLoad(e)}catch(t){this.onCrash("SCENE LOAD",t)}}updateScene(e){this.scene.update(e)}onCrash(e,t){this.update=()=>{},tt.destroy(),this.vehicleManager.onCrash(),console.error(e),console.error(t),console.log(Qi.get()),Pn.set({type:e,msg:t.message,log:Qi.get()})}updateLive(e,t){if(this.confirmHWA){let i=performance.now()-this.confirmHWATime;i>100?(this.confirmHWACount++,i>250&&this.confirmHWACount++):(this.confirmHWACount--,i<30&&this.confirmHWACount--),this.confirmHWACount<0?(this.confirmHWA=!1,rt.set("hasSeenHWAWarning",!0)):this.confirmHWACount>10&&(this.confirmHWA=!1,rt.set("hasSeenHWAWarning",!0),Rs.set("hwa",!0),tt.lock()),this.confirmHWATime=performance.now()}pe.update(e);try{this.vehicleManager.update(e,t)}catch(i){this.onCrash("VEHICLE UPDATE",i);return}try{this.cameraController.update(e)}catch(i){this.onCrash("CAMERA UPDATE",i);return}try{this.updateScene(e)}catch(i){this.onCrash("SCENE UPDATE",i);return}if(this.render(),this.debugFrameTimer-=e,this.debugFrameTimer<0&&(this.fps=this.renderer.info.render.frame-this.debugFrame,this.vehicleManager.fps=this.fps,na.set(this.renderer.info.render.frame-this.debugFrame),this.debugFrame=this.renderer.info.render.frame,this.debugFrameTimer+=1),this.debugUpdateTimer-=e,this.debugUpdateTimer<0){en.set(this.renderer.info.render.calls),tn.set(Math.floor(this.renderer.info.render.triangles)),sn.set(this.renderer.info.memory.geometries),td.set(this.renderer.info.memory.textures),Wr.set(as.priority.length),da.set(Ee.vehicleNode),rn.set(Ee.tail),an.set(Ee.head),ln.set(H.position.x.toFixed(1)+", "+H.position.y.toFixed(1)+", "+H.position.z.toFixed(1));let i=H.position.x/Ta,r=Math.floor(i),l=Math.floor((i-r)*Pa),a=H.position.z/Ta,n=Math.floor(a),o=Math.floor((a-n)*Pa);on.set(r+", "+n),nn.set(l+", "+o),ca.set(as.queue.length),Wr.set(as.priority.length),this.debugUpdateTimer=.1}try{as.update(e*1e3)}catch(i){this.onCrash("SCENE LOAD",i)}this.postUpdate()}postUpdate(){Ce.resetState(),Ee.vehicleNodeDidChange&&this.onVehicleNodeChanged(),(!H.onRoad||H.isRogue)&&mr.updateVisibility(),Ee.vehicleNodeDidChange=!1}onMinutePassed(){let e=Math.min(61e4,Date.now()-this.lastTimeCheck);H.speed>0&&(Yt.value?qe.set("autodriveTime",qe.autodriveTime+e):qe.set("manualTime",qe.manualTime+e),qe.set("totalTime",qe.autodriveTime+qe.manualTime),this.driveTimer+=e),this.lastTimeCheck=Date.now()}onVehicleNodeChanged(){Yt.value?qe.set("autodriveDist",qe.autodriveDist+(Ee.vehicleNode.i-this.lastVehicleIndexCheck)*10):qe.set("manualDist",qe.manualDist+(Ee.vehicleNode.i-this.lastVehicleIndexCheck)*10),qe.set("totalDist",qe.manualDist+qe.autodriveDist),this.onCheckJourney(),Zs(Ee.vehicleNode.i),mr.update(),this.lastVehicleIndexCheck=Ee.vehicleNode.i}onCheckJourney(){let e=this.driveTimer,t=(this.lastVehicleIndexCheck-this.driveStartIndex)*10;e>qe.longestDrive&&qe.set("longestDrive",e),t>qe.furthestDrive&&qe.set("furthestDrive",t)}onBeforeUnload(){this.onCheckJourney()}onMidlineReady(){return Qi.add("Midline ready"),!0}onSceneReady(){return this.vehicleManager.init(),this.cameraController.init(),this.update=this.updateLive,localStorage.removeItem("loading-flag"),this.profileGeneration!==cs.value&&(this.updatePixelRatio(),this.updateMaxFramerate(),this.profileGeneration=cs.value),this.driveStartTime=Date.now(),this.driveStartIndex=He.startNode,this.driveTimer=0,this.lastVehicleIndexCheck=He.startNode,!0}setSize(e,t){this.cameraController.setSize(e,t),this.renderer.setSize(e,t),Ce.setSize(e,t),this.render()}onDestroy(){for(;this.renderScene.children.length;)this.renderScene.remove(this.renderScene.children[this.renderScene.children.length-1]);for(this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());this.subs.length;)this.subs.pop()();tt.destroy(),Ce.destroy()}}function Nh(s,e,t){const i=s.slice();return i[3]=e[t],i[5]=t,i}function xh(s,e,t){const i=s.slice();return i[6]=e[t],i}function Rh(s){let e=s[3].version+"",t;return{c(){t=J(e)},l(i){t=$(i,e)},m(i,r){P(i,t,r)},d(i){i&&v(t)}}}function Uh(s){let e,t=s[3].version+"",i;return{c(){e=p("a"),i=J(t),this.h()},l(r){e=_(r,"A",{class:!0,href:!0});var l=C(e);i=$(l,t),l.forEach(v),this.h()},h(){h(e,"class","changelog-version-number-link svelte-bsztam"),h(e,"href",s[3].permalink)},m(r,l){P(r,e,l),d(e,i)},d(r){r&&v(e)}}}function Vh(s){let e,t,i="-",r,l,a,n;return{c(){e=p("div"),t=p("span"),t.textContent=i,r=k(),l=p("span"),a=J(s[6]),n=k(),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);t=_(c,"SPAN",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-zrnetw"&&(t.textContent=i),r=I(c),l=_(c,"SPAN",{});var f=C(l);a=$(f,s[6]),f.forEach(v),n=I(c),c.forEach(v),this.h()},h(){h(t,"class","list-dot svelte-bsztam"),h(e,"class","changelog-list-item svelte-bsztam")},m(o,c){P(o,e,c),d(e,t),d(e,r),d(e,l),d(l,a),d(e,n)},p:me,d(o){o&&v(e)}}}function Oh(s){let e,t,i,r,l,a=s[3].date+"",n,o,c,f;function u(y,D){return y[3].permalink&&!jr?Uh:Rh}let b=u(s)(s),m=Oe(s[3].changes),w=[];for(let y=0;y<m.length;y+=1)w[y]=Vh(xh(s,m,y));return{c(){e=p("div"),t=p("div"),i=p("div"),b.c(),r=k(),l=p("div"),n=J(a),o=k(),c=p("div");for(let y=0;y<w.length;y+=1)w[y].c();f=k(),this.h()},l(y){e=_(y,"DIV",{class:!0});var D=C(e);t=_(D,"DIV",{class:!0});var L=C(t);i=_(L,"DIV",{class:!0});var A=C(i);b.l(A),A.forEach(v),r=I(L),l=_(L,"DIV",{class:!0});var E=C(l);n=$(E,a),E.forEach(v),L.forEach(v),o=I(D),c=_(D,"DIV",{class:!0});var T=C(c);for(let x=0;x<w.length;x+=1)w[x].l(T);T.forEach(v),f=I(D),D.forEach(v),this.h()},h(){h(i,"class","changelog-version-number svelte-bsztam"),R(i,"changelog-version-new",hs&&s[5]==0),h(l,"class","changelog-date svelte-bsztam"),h(t,"class","changelog-title svelte-bsztam"),h(c,"class","changelog-list svelte-bsztam"),h(e,"class","changelog "+(hs&&s[5]==0?"new-version":"")+" svelte-bsztam")},m(y,D){P(y,e,D),d(e,t),d(t,i),b.m(i,null),d(t,r),d(t,l),d(l,n),d(e,o),d(e,c);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(c,null);d(e,f)},p:me,d(y){y&&v(e),b.d(),_t(w,y)}}}function ol(s){let e,t,i;return{c(){e=p("div"),this.h()},l(r){e=_(r,"DIV",{class:!0}),C(e).forEach(v),this.h()},h(){h(e,"class","splash-changelog-close svelte-bsztam")},m(r,l){P(r,e,l),t||(i=B(e,"mousedown",s[1]),t=!0)},p:me,d(r){r&&v(e),t=!1,i()}}}function Hh(s){let e,t,i,r,l="Close",a,n,o,c,f=Oe(ua),u=[];for(let b=0;b<f.length;b+=1)u[b]=Oh(Nh(s,f,b));let g=s[0]&&ol(s);return{c(){e=p("div"),t=p("div");for(let b=0;b<u.length;b+=1)u[b].c();i=k(),r=p("div"),r.textContent=l,a=k(),g&&g.c(),n=Le(),this.h()},l(b){e=_(b,"DIV",{id:!0,style:!0,class:!0});var m=C(e);t=_(m,"DIV",{class:!0});var w=C(t);for(let y=0;y<u.length;y+=1)u[y].l(w);w.forEach(v),i=I(m),r=_(m,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-1la5l1i"&&(r.textContent=l),m.forEach(v),a=I(b),g&&g.l(b),n=Le(),this.h()},h(){h(t,"class","changelog-scrollable svelte-bsztam"),h(r,"class","changelog-close svelte-bsztam"),h(e,"id","splash-changelog"),le(e,"transform","translateX("+(s[0]?0:100)+"%)"),h(e,"class","svelte-bsztam")},m(b,m){P(b,e,m),d(e,t);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(t,null);d(e,i),d(e,r),P(b,a,m),g&&g.m(b,m),P(b,n,m),o||(c=B(r,"click",s[1]),o=!0)},p(b,[m]){m&1&&le(e,"transform","translateX("+(b[0]?0:100)+"%)"),b[0]?g?g.p(b,m):(g=ol(b),g.c(),g.m(n.parentNode,n)):g&&(g.d(1),g=null)},i:me,o:me,d(b){b&&(v(e),v(a),v(n)),_t(u,b),g&&g.d(b),o=!1,c()}}}function zh(s,e,t){let{showChangelog:i=!1}=e,{onShowChangelog:r=()=>{}}=e;function l(){t(0,i=!1),r(!1)}return s.$$set=a=>{"showChangelog"in a&&t(0,i=a.showChangelog),"onShowChangelog"in a&&t(2,r=a.onShowChangelog)},[i,l,r]}class xn extends Qe{constructor(e){super(),Ze(this,e,zh,Hh,Xe,{showChangelog:0,onShowChangelog:2})}}function Fh(s){let e;return{c(){e=J("-")},l(t){e=$(t,"-")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function Gh(s){let e,t="+";return{c(){e=p("span"),e.textContent=t,this.h()},l(i){e=_(i,"SPAN",{style:!0,"data-svelte-h":!0}),G(e)!=="svelte-1y249x7"&&(e.textContent=t),this.h()},h(){le(e,"transform","rotate(45deg)")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function nl(s){let e,t;return{c(){e=p("div"),t=new ta(!1),this.h()},l(i){e=_(i,"DIV",{class:!0});var r=C(e);t=ia(r,!1),r.forEach(v),this.h()},h(){t.a=null,h(e,"class","faq-a svelte-1ka7nal")},m(i,r){P(i,e,r),t.m(s[1],e)},p(i,r){r&2&&t.p(i[1])},d(i){i&&v(e)}}}function Bh(s){let e,t,i,r,l,a,n;function o(g,b){return g[2]?Gh:Fh}let c=o(s),f=c(s),u=!s[2]&&nl(s);return{c(){e=p("div"),t=p("div"),i=J(s[0]),r=p("div"),f.c(),l=k(),u&&u.c(),this.h()},l(g){e=_(g,"DIV",{class:!0});var b=C(e);t=_(b,"DIV",{class:!0});var m=C(t);i=$(m,s[0]),r=_(m,"DIV",{class:!0});var w=C(r);f.l(w),w.forEach(v),m.forEach(v),l=I(b),u&&u.l(b),b.forEach(v),this.h()},h(){h(r,"class","faq-expand svelte-1ka7nal"),h(t,"class","faq-q svelte-1ka7nal"),h(e,"class","faq-qa svelte-1ka7nal")},m(g,b){P(g,e,b),d(e,t),d(t,i),d(t,r),f.m(r,null),d(e,l),u&&u.m(e,null),a||(n=B(t,"mousedown",s[3]),a=!0)},p(g,[b]){b&1&&_e(i,g[0]),c!==(c=o(g))&&(f.d(1),f=c(g),f&&(f.c(),f.m(r,null))),g[2]?u&&(u.d(1),u=null):u?u.p(g,b):(u=nl(g),u.c(),u.m(e,null))},i:me,o:me,d(g){g&&v(e),f.d(),u&&u.d(),a=!1,n()}}}function qh(s,e,t){let{q:i="Question?"}=e,{a:r="Answer"}=e,l=!0;const a=()=>t(2,l=!l);return s.$$set=n=>{"q"in n&&t(0,i=n.q),"a"in n&&t(1,r=n.a)},[i,r,l,a]}class Wh extends Qe{constructor(e){super(),Ze(this,e,qh,Bh,Xe,{q:0,a:1})}}const jh=[{q:"Why do I get such a poor performance?",a:"Make sure you have hardware acceleration enabled in your browser, and in your OS settings if necessary. If you're on a laptop, check power settings to make sure your browser performance isn't being throttled."},{q:"Will the web version remain available and receive updates?",a:"Yes! The Steam version will have extra features and higher-quality assets, but the web version will remain freely available and continue to get the same core updates."},{q:"Can I transfer my progress from the web version to the Steam version?",a:"Not currently, but I'm hoping to work out a convenient way to do this in future."},{q:"Is there an offline version of the web game that I can play without an internet connection?",a:"Yes, it's called Slow Roads: Web Edition and is available on itch.io for a small price. Find it on the <a style='color: #418fa4' href='https://topographinteractive.itch.io/slow-roads'>Slow Roads itch.io page</a>"},{q:"What's the background on the game's development?",a:"I wanted a simple, relaxing driving game to play while listening to podcasts or music, but the existing options were too serious and ended too soon. At the time I had been working on a vehicle physics engine in a separate project, and at some point became interested in the idea of procedurally-generated environments. I realised I could combine the two, and within a week I had a basic version of Slow Roads working."},{q:"Who's the developer?",a:"Hi, I'm Anslo, a creative generalist developer interested in graphics programming, procedural generation, and 3D design. Slow Roads began as one of my hobby projects, and I'm developing it solo. You can find some details on my other projects at anslo.dev. The Slow Roads property is owned by my independent, solo-owned company, Topograph Interactive Ltd, for the purpose of publishing via Steam."},{q:"How and why is the web version free, and without ads?",a:"Slow Roads is a game about escapism and peace, letting you take a break from the stress of the modern world, and intrusive ads don't belong in this context. In general I think web advertising has spiralled into something of a capitalist hellscape which makes everyone's experience online worse, all in the name of greed. It's unfortunate that so many talented creators depend on these broken systems to earn revenue for their work, and I think there's a lot of room for reform in online advertising. I want to use this small platform to remind people that there is a better way - it can be a choice, and there can be a simpler, more human-centric approach. If you'd like to support me, aside from wishlisting/purchasing the Steam version you can also pay an optional price for the Web Edition on itch.io"},{q:"Have you thought about adding a competitive or rally mode?",a:"Yes, I've run multiple community rally events over the past few winters - check out driftmas.slowroads.io. I may bring more competitive modes in future, especially to the Steam version."},{q:"Why can I drive through trees, or glitch into the sky by going backwards?",a:"The game engine only really works on the assumption that you stay on the road and follow it in the correct direction. Making that assumption allows for critical performance savings for rendering, environment generation, and physics calculations. I decided it would be no fun to force-reset people for driving offroad, though; sometimes glitches are the best part of a game."},{q:"Why are all the cars electric?",a:"They're a lot more peaceful and simple to drive, which suits the context of the game. That said, combustion engines are a highly-requested feature, so are available as an option in the Steam version."},{q:"Can you add a radio or music player, or connect to Spotify etc.?",a:"The Steam version has a player for local files and radio streams, and I can likely support radio streams in the web version eventually too - but I can't estimate when. Integrations with services like Spotify are tricky, but may be possible in the future."},{q:"I have a great idea for a feature, how can I tell you?",a:"It's probably already on the list - I have a lot of things I want to work on already, so it's unlikely I'll be adding new things to the list now, sorry. If you think it's something I truly haven't thought of, you can mention it in the Discord and I'm sure someone will let you know."},{q:"Can I contribute to the development of the game?",a:"This is still mostly a hobby project for me, so I'm not looking for contributors at this stage. In the future I might be looking for certain specialists, so make sure you follow on social media for updates there."},{q:"Can I have permission to host the game on my own site, make an app of the game with a web-view, or otherwise distribute the game myself?",a:"No, sorry. Unfortunately many are abusing the BY-NC-ND license and I now prefer people not to rehost the game in any context. However, if you would like to purchase a commercial license, please email hello@topograph.io"},{q:"Will you make it open-source?",a:"There are no plans at this stage to open-source the game, but I may look into supporting mods for the Steam version in future."},{q:"Which tech/language was used to make Slow Roads?",a:"The whole thing is written in plain JavaScript, using Three.js as a rendering library and SvelteKit as an SPA framework. It all runs client-side, in a WebGL canvas. The core engine is custom-written to be optimised for efficient environment generation, realistic road generation, and minimal physics computation. As for why - I think the browser is underrated as a platform for interactive 3D apps, and I wanted to make a point of that with Slow Roads. Plus JS dev is super accessible and flexible, and that suits my style."},{q:"How does the environment generation algorithm work?",a:"It uses a modified noise generator, similar to Perlin Noise, and then traces a road in 10m increments by testing gradients and choosing the best direction to go at each step. That decision is weighted by a lot of factors, like curvature, gradient, progress, water avoidance, self-intersection avoidance, and so on. There's a lot more complexity to it, but that's the gist - one day I'll get around to writing some proper devlogs!"},{q:"I miss the old slow roads - is there a way to still play it?",a:"Yes, it's still live at old.slowroads.io"},{q:"I miss a specific previous version - is there a way to still play it?",a:"Yes, click the version number in the lower-right of the main splash page to open the changelog, then click the version number for the version you wish to play. It will link to the specific version on slowroads-io.pages.dev. You may receive a warning from your browser about navigating to this page, but it is safe to do so."},{q:"Will there ever be an SR3?",a:"Right now I don't plan to make any significant changes to the underlying engine, so updates for the foreseeable future will simple be expansions of version 2."}];function Yh(s,e,t){const i=s.slice();return i[18]=e[t],i}function dl(s,e,t){const i=s.slice();return i[21]=e[t],i}function Kh(s){let e;return{c(){e=J("endless driving zen")},l(t){e=$(t,"endless driving zen")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function Xh(s){let e,t="Available now on Steam";return{c(){e=p("span"),e.textContent=t,this.h()},l(i){e=_(i,"SPAN",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1gjzt3k"&&(e.textContent=t),this.h()},h(){h(e,"class","steam-highlight svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Qh(s){let e,t="Coming to Steam this Wednesday";return{c(){e=p("span"),e.textContent=t,this.h()},l(i){e=_(i,"SPAN",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1y5l6j8"&&(e.textContent=t),this.h()},h(){h(e,"class","steam-highlight svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function cl(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=p("div"),e.textContent=t,this.h()},l(i){e=_(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),G(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){h(e,"id","splash-error"),h(e,"class","svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Zh(s){let e,t,i,r,l,a,n,o,c,f,u="See full details",g,b,m=Oe(s[3]),w=[];for(let y=0;y<m.length;y+=1)w[y]=hl(dl(s,m,y));return{c(){e=p("div"),t=J("New version - "),i=J(li),r=k(),l=p("hr"),a=k();for(let y=0;y<w.length;y+=1)w[y].c();n=k(),o=p("hr"),c=k(),f=p("div"),f.textContent=u,this.h()},l(y){e=_(y,"DIV",{class:!0});var D=C(e);t=$(D,"New version - "),i=$(D,li),r=I(D),l=_(D,"HR",{class:!0}),a=I(D);for(let L=0;L<w.length;L+=1)w[L].l(D);n=I(D),o=_(D,"HR",{class:!0}),c=I(D),f=_(D,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-5v1n0f"&&(f.textContent=u),D.forEach(v),this.h()},h(){h(l,"class","svelte-7rt10b"),h(o,"class","svelte-7rt10b"),h(f,"class","splash-version-see-more svelte-7rt10b"),h(e,"class","splash-new-version svelte-7rt10b")},m(y,D){P(y,e,D),d(e,t),d(e,i),d(e,r),d(e,l),d(e,a);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(e,null);d(e,n),d(e,o),d(e,c),d(e,f),g||(b=B(f,"click",s[9]),g=!0)},p(y,D){if(D&8){m=Oe(y[3]);let L;for(L=0;L<m.length;L+=1){const A=dl(y,m,L);w[L]?w[L].p(A,D):(w[L]=hl(A),w[L].c(),w[L].m(e,n))}for(;L<w.length;L+=1)w[L].d(1);w.length=m.length}},d(y){y&&v(e),_t(w,y),g=!1,b()}}}function hl(s){let e,t=s[21]+"",i;return{c(){e=p("div"),i=J(t),this.h()},l(r){e=_(r,"DIV",{class:!0});var l=C(e);i=$(l,t),l.forEach(v),this.h()},h(){h(e,"class","splash-version-change svelte-7rt10b")},m(r,l){P(r,e,l),d(e,i)},p(r,l){l&8&&t!==(t=r[21]+"")&&_e(i,t)},d(r){r&&v(e)}}}function fl(s){let e,t='<div class="splash-steam-promo-title svelte-7rt10b">Steam Features</div> <div class="splash-steam-promo-bullet svelte-7rt10b" style="margin-top: 1rem">- New <span style="color: var(--sr-white); font-weight: 400;">California location</span></div> <div class="splash-steam-promo-bullet svelte-7rt10b">- New <span style="color: var(--sr-white); font-weight: 400;">vehicles</span></div> <div class="splash-steam-promo-bullet svelte-7rt10b">- <span style="color: var(--sr-white); font-weight: 400;">Combustion engines</span> and <span style="color: var(--sr-white); font-weight: 400;">manual gears</span></div> <div class="splash-steam-promo-bullet svelte-7rt10b">- In-game <span style="color: var(--sr-white); font-weight: 400;">music/radio player</span></div> <div class="splash-steam-promo-bullet svelte-7rt10b">- Configurable <span style="color: var(--sr-white); font-weight: 400;">traffic</span></div> <div class="splash-steam-promo-bullet svelte-7rt10b" style="margin-bottom: 1rem"><span style="color: var(--sr-white); font-weight: 400;">...and more</span></div> <a class="splash-steam-promo-visit svelte-7rt10b" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/" alt=""><img src="/img/icon_steam_white.svg" alt="" class="splash-steam-promo-visit-icon svelte-7rt10b"/>Visit the Steam page</a>';return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-6slgjg"&&(e.innerHTML=t),this.h()},h(){h(e,"class","splash-steam-promo svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Jh(s){let e,t;return e=new xn({props:{showChangelog:s[2],onShowChangelog:s[10]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&4&&(l.showChangelog=i[2]),r&4&&(l.onShowChangelog=i[10]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function $h(s){let e,t='<span style="font-size: 1.2rem; color: var(--sr-primary)">Prefer the old version?</span> <br/> <span style="font-size: 0.9rem">Find it at <a class="splash-smallprint-link svelte-7rt10b" href="https://old.slowroads.io">old.slowroads.io</a></span>',i,r;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(l){e=_(l,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-fgyrc"&&(e.innerHTML=t),this.h()},h(){h(e,"class","splash-old svelte-7rt10b")},m(l,a){P(l,e,a),i||(r=B(e,"mouseover",s[11]),i=!0)},p:me,d(l){l&&v(e),i=!1,r()}}}function ef(s){let e,t,i=`<img src="/img/icon_discord_white.svg" alt="" class="splash-main-button-icon svelte-7rt10b"/> <br/>
                    Join the Discord`,r,l,a='<span style="font-size: 1.5rem">About</span> <br/> <span style="font-size: 2rem">▾</span>',n,o,c,f,u,g,b,m=Gi?"Wishlist on Steam":"Available now on Steam",w;return{c(){e=p("div"),t=p("a"),t.innerHTML=i,r=k(),l=p("a"),l.innerHTML=a,n=k(),o=p("a"),c=p("img"),u=k(),g=p("br"),b=k(),w=J(m),this.h()},l(y){e=_(y,"DIV",{class:!0,style:!0});var D=C(e);t=_(D,"A",{target:!0,rel:!0,href:!0,alt:!0,class:!0,"data-svelte-h":!0}),G(t)!=="svelte-n3njxv"&&(t.innerHTML=i),r=I(D),l=_(D,"A",{href:!0,class:!0,style:!0,"data-svelte-h":!0}),G(l)!=="svelte-16do8f5"&&(l.innerHTML=a),n=I(D),o=_(D,"A",{target:!0,rel:!0,href:!0,alt:!0,class:!0});var L=C(o);c=_(L,"IMG",{src:!0,alt:!0,class:!0}),u=I(L),g=_(L,"BR",{}),b=I(L),w=$(L,m),L.forEach(v),D.forEach(v),this.h()},h(){h(t,"target","_blank"),h(t,"rel","noopener noreferrer"),h(t,"href","https://discord.gg/TNf9bBrZmR"),h(t,"alt",""),h(t,"class","splash-main-button svelte-7rt10b"),h(l,"href","#about"),h(l,"class","splash-main-button svelte-7rt10b"),le(l,"padding-top","2rem"),pt(c.src,f="/img/icon_steam_white.svg")||h(c,"src",f),h(c,"alt",""),h(c,"class","splash-main-button-icon svelte-7rt10b"),h(o,"target","_blank"),h(o,"rel","noopener noreferrer"),h(o,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),h(o,"alt",""),h(o,"class","splash-main-button svelte-7rt10b"),h(e,"class","splash-main-buttons svelte-7rt10b"),le(e,"opacity","0.75")},m(y,D){P(y,e,D),d(e,t),d(e,r),d(e,l),d(e,n),d(e,o),d(o,c),d(o,u),d(o,g),d(o,b),d(o,w)},d(y){y&&v(e)}}}function tf(s){let e,t="The first release is now live! Please consider purchasing if you'd like to support the project and enjoy the bonus features. I'll be continuing with content updates for both versions into the future, though it may take time to get back up to speed after the busy release period. The main focus for the coming months will be adding weather effects and a new location. Join the Discord for the latest news and updates.";return{c(){e=p("div"),e.textContent=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-16dieys"&&(e.textContent=t),this.h()},h(){h(e,"class","splash-body-text svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function sf(s){let e,t="This first release is coming on <strong>Wednesday 23rd September</strong>, with developing continuning into the future and a lot of content updates planned. Price is yet to be determined, but will be less than $10, will have regional pricing, and will launch with a 10% discount. Wishlist the game to stay notified!";return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-ekdql8"&&(e.innerHTML=t),this.h()},h(){h(e,"class","splash-body-text svelte-7rt10b")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function rf(s){let e,t;return e=new Wh({props:{q:s[18].q,a:s[18].a}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function ul(s){let e,t,i;return{c(){e=p("div"),t=k(),i=p("div"),this.h()},l(r){e=_(r,"DIV",{id:!0,class:!0}),C(e).forEach(v),t=I(r),i=_(r,"DIV",{id:!0,style:!0,class:!0});var l=C(i);l.forEach(v),this.h()},h(){h(e,"id","splash-bg-overlay"),h(e,"class","svelte-7rt10b"),h(i,"id","splash-bg"),le(i,"background-image","url("+s[6]+")"),h(i,"class","svelte-7rt10b")},m(r,l){P(r,e,l),P(r,t,l),P(r,i,l)},p:me,d(r){r&&(v(e),v(t),v(i))}}}function af(s){let e,t,i,r,l,a,n,o,c,f,u=s[5]?"continue":"begin",g,b,m,w,y,D,L,A,E,T,x="CC BY-NC-ND 4.0 International License",j,X,V,ee,Z,U,W=`from <a class="splash-smallprint-link svelte-7rt10b" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2026 	
                <span style="margin: 0 0.5rem;">·</span> <a class="splash-smallprint-link svelte-7rt10b" href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> <span style="margin: 0 0.5rem;">·</span> <a class="splash-smallprint-link svelte-7rt10b" href="https://topograph.io/slowroads" target="_blank" rel="noopener noreferrer">press kit</a>`,O,z,M,N,q='<div class="splash-body-wrapper svelte-7rt10b" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-7rt10b"></div> <div class="splash-blurb-corner-tr svelte-7rt10b"></div> <div class="splash-blurb svelte-7rt10b"><strong>Slow Roads</strong> is a casual driving game designed for long, cathartic journeys on quiet, scenic roads. Simply chase the horizon through endless, procedurally-generated landscapes, with no ads, distractions, or goals. Set the weather to suit your mood, throw on some music, and <strong>just drive.</strong></div> <div class="splash-blurb-corner-bl svelte-7rt10b"></div> <div class="splash-blurb-corner-br svelte-7rt10b"></div></div>',re,oe,te,ve,Se=Gi?"Coming soon to Steam":"Available now on Steam",ge,Q,ae,he=`<img src="/img/icon_steam_white.svg" class="splash-body-steam-icon svelte-7rt10b" alt=""/>
                            Visit store page`,K,de,ie,be,ke,Fe,ze=Gi?"coming to":"now available on",ft,Je,ht,$e,Pi=`Steam-exclusive features:
                        <a class="splash-try-demo svelte-7rt10b" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/"><img src="/img/icon_steam_white.svg" class="splash-body-steam-icon svelte-7rt10b" alt=""/>
                            Try the demo</a>`,Ft,ye,at='<div class="splash-body-bullet svelte-7rt10b">More locations, starting with the new California Coast</div> <div class="splash-body-bullet svelte-7rt10b">More road styles, including off-road trails and multi-lane highways</div> <div class="splash-body-bullet svelte-7rt10b">More vehicles, starting with a sports car and rally hatchback</div> <video src="/img/letterbox-vehicles.mp4" autoplay="" muted="" loop="" class="steam-banner svelte-7rt10b"></video> <div class="splash-body-bullet svelte-7rt10b">Combustion engines and manual transmission for all vehicles</div> <div class="splash-body-bullet svelte-7rt10b">Vehicle tuning</div> <div class="splash-body-bullet svelte-7rt10b">Vehicle customisation</div> <video src="/img/letterbox-customisation.mp4" autoplay="" muted="" loop="" class="steam-banner svelte-7rt10b"></video> <div class="splash-body-bullet svelte-7rt10b">A music interface for playing local tracks or public radio streams</div> <div class="splash-body-bullet svelte-7rt10b">Improved graphics options and detail</div> <div class="splash-body-bullet svelte-7rt10b">Configurable traffic modes</div> <video src="/img/letterbox-cockpit.mp4" autoplay="" muted="" loop="" class="steam-banner svelte-7rt10b"></video> <div class="splash-body-bullet svelte-7rt10b">Achievements and profile stats</div> <div class="splash-body-bullet svelte-7rt10b">High definition assets</div> <div class="splash-body-bullet svelte-7rt10b">...and more to be added in future updates</div>',Tt,Pt,Ot,oi="Visit the store page for full details",wi,Gt,ni="Targets for upcoming updates",Xt,di,ci='<div class="splash-body-bullet svelte-7rt10b">Force feedback support for controllers</div> <div class="splash-body-bullet svelte-7rt10b">Rain and dynamic weather effects</div> <div class="splash-body-bullet svelte-7rt10b">Day-night cycle and time sync features</div> <div class="splash-body-bullet svelte-7rt10b">New locations, e.g. a mountainous Alps location (see WIP below)</div> <div class="splash-body-bullet svelte-7rt10b">A world config tool giving control over procedural generation parameters</div> <div class="splash-body-bullet svelte-7rt10b">...and more</div>',Ni,hi,$i,$t,Nt,vs='If this sounds good to you, please support the project&#39;s future development by <a class="splash-body-link svelte-7rt10b" href="https://store.steampowered.com/app/3431300/Slow_Roads/" target="_blank" rel="noopener noreferrer">purchasing Slow Roads on Steam!</a>',fi,bt,es=`Slow Roads: Web Edition
                        <a class="splash-visit-steam svelte-7rt10b" style="top:-0.5rem;" target="_blank" rel="noopener noreferrer" href="https://topographinteractive.itch.io/slow-roads"><img src="/img/icon_itch_white.svg" class="splash-body-steam-icon svelte-7rt10b" style="width: 1.5rem; margin-left: 0.5rem;" alt=""/>
                            Purchase here</a>`,ei,xt,ms=`If you only want to play the web version offline without the extra expense, you can find the downloadable Slow Roads: Web Edition available for a small price on the <a class="splash-body-link svelte-7rt10b" href="https://topographinteractive.itch.io/slow-roads" target="_blank" rel="noopener noreferrer">Slow Roads page on itch.io</a>. This version won&#39;t receive the Steam-exclusive features, but does include the high-resolution textures unavailable on the web. Available for Windows, Linux, and MacOS.
                        <br/> <br/>
                        Note that if you want to transfer your progress and settings from slowroads.io to the Web Edition, you can download your save file from the Profile settings and upload that in the app.`,ui,Bt,ts='<div class="splash-body-wrapper svelte-7rt10b"><div class="splash-body-header svelte-7rt10b">Background</div> <div class="splash-body-text svelte-7rt10b">Hey, I&#39;m <a class="splash-body-link svelte-7rt10b" href="https://anslo.dev">Anslo</a>, a creative generalist interested in 3D graphics and procedural generation. Slow Roads began as my hobby project to generate endless scenic landscapes, packaged as a chill driving game. I made it partly as an experiment in procedural generation, partly to show how capable browsers can be with 3D, and partly to scratch a very specific itch to mindlessly drive forever, as a kind of active meditation.</div> <div class="splash-body-text svelte-7rt10b">I started the project in July 2021, released a rough version 1.0 in October 2022, rewrote the whole engine over the next two years, and am now busy developing all sorts of new features. The original goal has always been to support dozens of different locations, I expect to keep working on the game until I fulfil that. But, ultimately, my hope is that those in need of a simple escape will find it here.</div> <div class="splash-body-text svelte-7rt10b">You can read a few more details on the <a href="https://topograph.io/slowroads" target="_blank" rel="noopener noreferrer" class="splash-body-link svelte-7rt10b">press kit page here</a></div></div>',ti,St,fe='<div class="splash-body-wrapper svelte-7rt10b"><div class="splash-body-header svelte-7rt10b">Development Roadmap</div> <div class="splash-body-text svelte-7rt10b">Slow Roads is a living project under continuous development. Here&#39;s a look at where the focus will be for the next little while. As a solo developer, it&#39;s impossible to estimate when or whether these features will be finished, but know that I&#39;m now working on the game full-time. I post regular updates to the #dev-log channel in the <a class="splash-body-link svelte-7rt10b" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Discord server</a>, so check there for the latest.</div> <div class="splash-body-subheader svelte-7rt10b">Near-term goals:</div> <div class="splash-body-bullets svelte-7rt10b"><div class="splash-body-bullet svelte-7rt10b">Post-release support and updates for the Steam version</div> <div class="splash-body-bullet svelte-7rt10b">Rain and dynamic weather (Steam feature)</div> <div class="splash-body-bullet svelte-7rt10b">Time-of-day cycle controls (Steam feature)</div> <div class="splash-body-bullet svelte-7rt10b">Web version 2.5 upgrades, e.g. new UI and improved graphics (will not include Steam-exclusive features)</div> <div class="splash-body-bullet svelte-7rt10b">Driftmas 2026</div></div> <div class="splash-body-subheader svelte-7rt10b">Future goals:</div> <div class="splash-body-bullets svelte-7rt10b"><div class="splash-body-bullet svelte-7rt10b">New locations, including mountains, tunnels, forests, and more</div> <div class="splash-body-bullet svelte-7rt10b">Improved environmental detail with wildlife, structures, etc.</div> <div class="splash-body-bullet svelte-7rt10b">Development of new vehicles</div> <div class="splash-body-bullet svelte-7rt10b">Regular community events</div> <div class="splash-body-bullet svelte-7rt10b">Gradual development of both the Steam and Web version in parallel</div></div> <div class="splash-body-text svelte-7rt10b"><a class="splash-body-link svelte-7rt10b" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the Discord</a> or <a class="splash-body-link svelte-7rt10b" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">follow slowroads.io on Bluesky</a> to keep updated and share feedback!</div></div>',lt,vi,mi,qt,xi="FAQ",Ms,Ri,ii,Es=`<div class="splash-body-wrapper svelte-7rt10b"><div class="splash-body-header svelte-7rt10b">Contact</div> <div class="splash-body-text svelte-7rt10b" style="text-align:center; user-select: default;">Email
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white); user-select: all;">hello@slowroads.io</span> <br/> <br/>
                        Discord
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-7rt10b" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the server here</a></span> <br/> <br/>
                        Bluesky
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-7rt10b" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">Follow slowroads.io here</a></span></div></div>`,yi,Si,As=`<div class="splash-body-wrapper svelte-7rt10b"><div class="splash-body-header svelte-7rt10b">Attributions</div> <div class="splash-body-text svelte-7rt10b" style="text-align: center">Rendering library - <a class="splash-body-link svelte-7rt10b" href="https://threejs.org/">three.js</a> <br/>
                        Brand design - <a class="splash-body-link svelte-7rt10b" href="https://benj-design.com">benj-design.com</a> <br/>
                        Off-world textures - <a class="splash-body-link svelte-7rt10b" href="https://mars.nasa.gov/mars2020/multimedia/raw-images/">Nasa Perseverance</a> <br/>
                        Brake audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/WavJunction.com/sounds/456764/">WavJunction.com on freesound.org</a> <br/>
                        Ambient audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/InspectorJ/sounds/401543/">InspectorJ on freesound.org</a> <br/>
                        Tyre audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/fractanimal/sounds/614627/">fractanimal on freesound.org</a> <br/>
                        Gravel audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/seth-m/sounds/341069/">seth-m on freesound.org</a> <br/>
                        Boost audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/YleArkisto/sounds/342892/">YleArkisto on freesound.org</a> <br/>
                        Suspension audio - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/ingudios/sounds/119468/">ingudios on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/jakobthiesen/sounds/174836/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/jakobthiesen/sounds/174837/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/SubwaySandwitch420/sounds/538947/">SubwaySandwitch420 on freesound.org</a> <br/>
                        Barrier scrape sound - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/eyenorth/sounds/464846/">eyenorth on freesound.org</a> <br/>
                        Misc sound effects - <a class="splash-body-link svelte-7rt10b" href="https://freesound.org/people/HECKFRICKER/sounds/625312/">HECKFRICKER on freesound.org</a> <br/></div></div>`,Di,Ht,Fs='<div class="splash-body-wrapper svelte-7rt10b"><div class="splash-body-header svelte-7rt10b" style="font-size: 1rem">Thank you for playing</div></div>',Ui,Yi,Vi,Li,Oi;function or(Ne,et){return Gi?Qh:Ns?Xh:Kh}let Ki=or()(s),wt=s[1]&&cl(),Rt=!Gi&&!Ns&&!pi&&hs&&Zh(s),Dt=!s[4]&&(Gi||Ns)&&fl(),Wt=!pi&&Jh(s),Qt=Ra&&$h(s),zt=!pi&&ef();function nr(Ne,et){return Gi?sf:tf}let Xi=nr()(s),si=Oe(jh),Ut=[];for(let Ne=0;Ne<si.length;Ne+=1)Ut[Ne]=rf(Yh(s,si,Ne));let ut=!s[5]&&ul(s);return{c(){e=p("div"),t=p("div"),i=p("div"),r=p("div"),l=p("img"),n=k(),o=p("div"),Ki.c(),c=k(),f=p("div"),g=J(u),b=k(),wt&&wt.c(),m=k(),w=p("div"),y=p("span"),D=J(li),L=k(),A=p("br"),E=J(`\r
                This work is licensed under a `),T=p("a"),T.textContent=x,j=k(),Rt&&Rt.c(),X=k(),Dt&&Dt.c(),V=k(),Wt&&Wt.c(),ee=k(),Qt&&Qt.c(),Z=k(),U=p("div"),U.innerHTML=W,O=k(),zt&&zt.c(),z=k(),M=p("div"),N=p("div"),N.innerHTML=q,re=k(),oe=p("div"),te=p("div"),ve=p("div"),ge=J(Se),Q=k(),ae=p("a"),ae.innerHTML=he,K=k(),de=p("video"),be=k(),ke=p("div"),Fe=J("For those who want a little more from the web version, Slow Roads is "),ft=J(ze),Je=J(" Steam - there you'll find dozens of new features and improved quality, with all the elements that have been most highly-requested over the years. The web version will remain freely available, and will continue to get small updates, but will stay as a more minimal representation of the game. Sales on Steam will help to fund ongoing development and keep the web version free and ad-free for all. Read on to find out more."),ht=k(),$e=p("div"),$e.innerHTML=Pi,Ft=k(),ye=p("div"),ye.innerHTML=at,Tt=k(),Xi.c(),Pt=k(),Ot=p("a"),Ot.textContent=oi,wi=k(),Gt=p("div"),Gt.textContent=ni,Xt=k(),di=p("div"),di.innerHTML=ci,Ni=k(),hi=p("img"),$t=k(),Nt=p("div"),Nt.innerHTML=vs,fi=k(),bt=p("div"),bt.innerHTML=es,ei=k(),xt=p("div"),xt.innerHTML=ms,ui=k(),Bt=p("div"),Bt.innerHTML=ts,ti=k(),St=p("div"),St.innerHTML=fe,lt=k(),vi=p("div"),mi=p("div"),qt=p("div"),qt.textContent=xi,Ms=k();for(let Ne=0;Ne<Ut.length;Ne+=1)Ut[Ne].c();Ri=k(),ii=p("div"),ii.innerHTML=Es,yi=k(),Si=p("div"),Si.innerHTML=As,Di=k(),Ht=p("div"),Ht.innerHTML=Fs,Ui=k(),ut&&ut.c(),this.h()},l(Ne){e=_(Ne,"DIV",{id:!0,class:!0});var et=C(e);t=_(et,"DIV",{id:!0,class:!0});var Ke=C(t);i=_(Ke,"DIV",{id:!0,class:!0});var we=C(i);r=_(we,"DIV",{id:!0,class:!0});var ce=C(r);l=_(ce,"IMG",{class:!0,src:!0,alt:!0}),n=I(ce),o=_(ce,"DIV",{class:!0});var Te=C(o);Ki.l(Te),Te.forEach(v),c=I(ce),f=_(ce,"DIV",{id:!0,class:!0});var Ci=C(f);g=$(Ci,u),Ci.forEach(v),b=I(ce),wt&&wt.l(ce),ce.forEach(v),m=I(we),w=_(we,"DIV",{class:!0});var Hi=C(w);y=_(Hi,"SPAN",{class:!0});var Gs=C(y);D=$(Gs,li),Gs.forEach(v),L=I(Hi),A=_(Hi,"BR",{}),E=$(Hi,`\r
                This work is licensed under a `),T=_(Hi,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),G(T)!=="svelte-u8p6bq"&&(T.textContent=x),Hi.forEach(v),j=I(we),Rt&&Rt.l(we),X=I(we),Dt&&Dt.l(we),V=I(we),Wt&&Wt.l(we),ee=I(we),Qt&&Qt.l(we),Z=I(we),U=_(we,"DIV",{class:!0,"data-svelte-h":!0}),G(U)!=="svelte-1os97po"&&(U.innerHTML=W),O=I(we),zt&&zt.l(we),we.forEach(v),z=I(Ke),M=_(Ke,"DIV",{id:!0,class:!0});var mt=C(M);N=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(N)!=="svelte-pdwk63"&&(N.innerHTML=q),re=I(mt),oe=_(mt,"DIV",{class:!0});var Bs=C(oe);te=_(Bs,"DIV",{class:!0,style:!0});var We=C(te);ve=_(We,"DIV",{class:!0,style:!0});var ps=C(ve);ge=$(ps,Se),Q=I(ps),ae=_(ps,"A",{class:!0,target:!0,rel:!0,href:!0,"data-svelte-h":!0}),G(ae)!=="svelte-x3dfxm"&&(ae.innerHTML=he),ps.forEach(v),K=I(We),de=_(We,"VIDEO",{src:!0,class:!0}),C(de).forEach(v),be=I(We),ke=_(We,"DIV",{class:!0});var is=C(ke);Fe=$(is,"For those who want a little more from the web version, Slow Roads is "),ft=$(is,ze),Je=$(is," Steam - there you'll find dozens of new features and improved quality, with all the elements that have been most highly-requested over the years. The web version will remain freely available, and will continue to get small updates, but will stay as a more minimal representation of the game. Sales on Steam will help to fund ongoing development and keep the web version free and ad-free for all. Read on to find out more."),is.forEach(v),ht=I(We),$e=_(We,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G($e)!=="svelte-1qvuqlg"&&($e.innerHTML=Pi),Ft=I(We),ye=_(We,"DIV",{class:!0,"data-svelte-h":!0}),G(ye)!=="svelte-1myslcu"&&(ye.innerHTML=at),Tt=I(We),Xi.l(We),Pt=I(We),Ot=_(We,"A",{class:!0,target:!0,rel:!0,href:!0,"data-svelte-h":!0}),G(Ot)!=="svelte-1xw9kma"&&(Ot.textContent=oi),wi=I(We),Gt=_(We,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(Gt)!=="svelte-2lsi8c"&&(Gt.textContent=ni),Xt=I(We),di=_(We,"DIV",{class:!0,"data-svelte-h":!0}),G(di)!=="svelte-dh3ydp"&&(di.innerHTML=ci),Ni=I(We),hi=_(We,"IMG",{src:!0,class:!0}),$t=I(We),Nt=_(We,"DIV",{class:!0,"data-svelte-h":!0}),G(Nt)!=="svelte-wn5eaw"&&(Nt.innerHTML=vs),fi=I(We),bt=_(We,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(bt)!=="svelte-sncz1w"&&(bt.innerHTML=es),ei=I(We),xt=_(We,"DIV",{class:!0,"data-svelte-h":!0}),G(xt)!=="svelte-g1t8kp"&&(xt.innerHTML=ms),We.forEach(v),Bs.forEach(v),ui=I(mt),Bt=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(Bt)!=="svelte-vhfs9x"&&(Bt.innerHTML=ts),ti=I(mt),St=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(St)!=="svelte-1c5onoy"&&(St.innerHTML=fe),lt=I(mt),vi=_(mt,"DIV",{class:!0,style:!0});var qs=C(vi);mi=_(qs,"DIV",{class:!0});var ss=C(mi);qt=_(ss,"DIV",{class:!0,"data-svelte-h":!0}),G(qt)!=="svelte-1oguvct"&&(qt.textContent=xi),Ms=I(ss);for(let Ts=0;Ts<Ut.length;Ts+=1)Ut[Ts].l(ss);ss.forEach(v),qs.forEach(v),Ri=I(mt),ii=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(ii)!=="svelte-164ar8c"&&(ii.innerHTML=Es),yi=I(mt),Si=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(Si)!=="svelte-1krubna"&&(Si.innerHTML=As),Di=I(mt),Ht=_(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(Ht)!=="svelte-omq68c"&&(Ht.innerHTML=Fs),mt.forEach(v),Ui=I(Ke),ut&&ut.l(Ke),Ke.forEach(v),et.forEach(v),this.h()},h(){h(l,"class","splash-logo svelte-7rt10b"),pt(l.src,a="/img/logo-stacked-white.svg")||h(l,"src",a),h(l,"alt",""),h(o,"class","splash-subtitle svelte-7rt10b"),h(f,"id","splash-begin"),h(f,"class","svelte-7rt10b"),h(r,"id","splash-title"),h(r,"class","svelte-7rt10b"),h(y,"class","splash-smallprint-link svelte-7rt10b"),h(T,"rel","license noopener noreferrer"),h(T,"class","splash-smallprint-link svelte-7rt10b"),h(T,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),h(T,"target","_blank"),h(w,"class","splash-smallprint splash-lr svelte-7rt10b"),h(U,"class","splash-smallprint splash-ll svelte-7rt10b"),h(i,"id","splash-main"),h(i,"class","svelte-7rt10b"),h(N,"class","splash-body-section svelte-7rt10b"),le(N,"background","var(--sr-black)"),h(ae,"class","splash-visit-steam svelte-7rt10b"),h(ae,"target","_blank"),h(ae,"rel","noopener noreferrer"),h(ae,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),h(ve,"class","splash-body-header svelte-7rt10b"),le(ve,"color","#6dcff6"),le(ve,"text-shadow","0 0 1rem #6dcff688"),pt(de.src,ie="/img/letterbox-general.mp4")||h(de,"src",ie),h(de,"class","steam-banner svelte-7rt10b"),de.autoplay=!0,de.muted=!0,de.loop=!0,h(ke,"class","splash-body-text svelte-7rt10b"),h($e,"class","splash-body-subheader svelte-7rt10b"),le($e,"color","#6dcff6"),le($e,"position","relative"),h(ye,"class","splash-body-bullets svelte-7rt10b"),h(Ot,"class","splash-visit-store svelte-7rt10b"),h(Ot,"target","_blank"),h(Ot,"rel","noopener noreferrer"),h(Ot,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),h(Gt,"class","splash-body-subheader svelte-7rt10b"),le(Gt,"color","#6dcff6"),h(di,"class","splash-body-bullets svelte-7rt10b"),pt(hi.src,$i="/img/about_dev_04.jpg")||h(hi,"src",$i),h(hi,"class","steam-banner svelte-7rt10b"),h(Nt,"class","splash-body-text svelte-7rt10b"),h(bt,"class","splash-body-header svelte-7rt10b"),le(bt,"text-align","left"),le(bt,"position","relative"),le(bt,"color","#6dcff6"),le(bt,"margin-top","2rem"),le(bt,"text-shadow","0 0 1rem #6dcff688"),h(xt,"class","splash-body-text svelte-7rt10b"),h(te,"class","splash-body-wrapper svelte-7rt10b"),le(te,"color","var(--sr-secondary)"),h(oe,"class","splash-body-section splash-steam-bg svelte-7rt10b"),h(Bt,"class","splash-body-section svelte-7rt10b"),le(Bt,"background","none"),h(St,"class","splash-body-section svelte-7rt10b"),le(St,"background","var(--sr-black)"),h(qt,"class","splash-body-header svelte-7rt10b"),h(mi,"class","splash-body-wrapper svelte-7rt10b"),h(vi,"class","splash-body-section svelte-7rt10b"),le(vi,"background","none"),h(ii,"class","splash-body-section svelte-7rt10b"),le(ii,"background","var(--sr-black)"),h(Si,"class","splash-body-section svelte-7rt10b"),le(Si,"background","none"),h(Ht,"class","splash-body-section svelte-7rt10b"),le(Ht,"background","var(--sr-black)"),h(M,"id","about"),h(M,"class","svelte-7rt10b"),h(t,"id",Yi=s[4]?"splash-dynamic":"splash-fixed"),h(t,"class","svelte-7rt10b"),h(e,"id","splash"),h(e,"class","svelte-7rt10b")},m(Ne,et){P(Ne,e,et),d(e,t),d(t,i),d(i,r),d(r,l),d(r,n),d(r,o),Ki.m(o,null),d(r,c),d(r,f),d(f,g),d(r,b),wt&&wt.m(r,null),d(i,m),d(i,w),d(w,y),d(y,D),d(w,L),d(w,A),d(w,E),d(w,T),d(i,j),Rt&&Rt.m(i,null),d(i,X),Dt&&Dt.m(i,null),d(i,V),Wt&&Wt.m(i,null),d(i,ee),Qt&&Qt.m(i,null),d(i,Z),d(i,U),d(i,O),zt&&zt.m(i,null),d(t,z),d(t,M),d(M,N),d(M,re),d(M,oe),d(oe,te),d(te,ve),d(ve,ge),d(ve,Q),d(ve,ae),d(te,K),d(te,de),d(te,be),d(te,ke),d(ke,Fe),d(ke,ft),d(ke,Je),d(te,ht),d(te,$e),d(te,Ft),d(te,ye),d(te,Tt),Xi.m(te,null),d(te,Pt),d(te,Ot),d(te,wi),d(te,Gt),d(te,Xt),d(te,di),d(te,Ni),d(te,hi),d(te,$t),d(te,Nt),d(te,fi),d(te,bt),d(te,ei),d(te,xt),d(M,ui),d(M,Bt),d(M,ti),d(M,St),d(M,lt),d(M,vi),d(vi,mi),d(mi,qt),d(mi,Ms);for(let Ke=0;Ke<Ut.length;Ke+=1)Ut[Ke]&&Ut[Ke].m(mi,null);d(M,Ri),d(M,ii),d(M,yi),d(M,Si),d(M,Di),d(M,Ht),d(t,Ui),ut&&ut.m(t,null),Vi=!0,Li||(Oi=[B(f,"touchstart",s[7],{passive:!0}),B(f,"click",function(){ea(s[0])&&s[0].apply(this,arguments)}),B(y,"click",s[8])],Li=!0)},p(Ne,[et]){s=Ne,(!Vi||et&32)&&u!==(u=s[5]?"continue":"begin")&&_e(g,u),s[1]?wt||(wt=cl(),wt.c(),wt.m(r,null)):wt&&(wt.d(1),wt=null),!Gi&&!Ns&&!pi&&hs&&Rt.p(s,et),!s[4]&&(Gi||Ns)?Dt||(Dt=fl(),Dt.c(),Dt.m(i,V)):Dt&&(Dt.d(1),Dt=null),pi||Wt.p(s,et),Ra&&Qt.p(s,et),s[5]?ut&&(ut.d(1),ut=null):ut?ut.p(s,et):(ut=ul(s),ut.c(),ut.m(t,null)),(!Vi||et&16&&Yi!==(Yi=s[4]?"splash-dynamic":"splash-fixed"))&&h(t,"id",Yi)},i(Ne){if(!Vi){Y(Wt);for(let et=0;et<si.length;et+=1)Y(Ut[et]);Vi=!0}},o(Ne){se(Wt),Ut=Ut.filter(Boolean);for(let et=0;et<Ut.length;et+=1)se(Ut[et]);Vi=!1},d(Ne){Ne&&v(e),Ki.d(),wt&&wt.d(),Rt&&Rt.d(),Dt&&Dt.d(),Wt&&Wt.d(),Qt&&Qt.d(),zt&&zt.d(),Xi.d(),_t(Ut,Ne),ut&&ut.d(),Li=!1,nt(Oi)}}}function lf(s,e,t){let i,r;Ie(s,bi,E=>t(4,i=E)),Ie(s,lr,E=>t(5,r=E));let{toggleSplash:l=()=>{}}=e,{webglError:a=!1}=e,n=!1,o=[],c=hs&&yr[2]==li[2];for(let E of ua)if(bn(E.version,yr)>0)E.quickChanges&&(E.version[4]==0||c)&&o.push(...E.quickChanges);else break;o.length>12&&(o=o.slice(0,12));const f=["/img/about_zen_01.jpg","/img/about_road.jpg","/img/about_veh_05.jpg","/img/about_traffic.jpg","/img/about_dev_04.jpg"],u=["/img/steam_00.webp","/img/steam_01.webp","/img/steam_02.webp","/img/steam_03.webp","/img/steam_04.webp","/img/steam_05.webp"];let g=Math.floor(Math.random()*f.length);f[g];let b=!Gi&&!Ns||Md?0:Math.floor(Math.random()*u.length),m=u[b];setInterval(()=>{g=(g+1)%f.length,f[g]},2e3);const w=()=>{ne.set("touchscreen",!0)},y=()=>t(2,n=!n),D=()=>t(2,n=!n),L=E=>t(2,n=E),A=()=>{localStorage.setItem("hasSeenOld",!0)};return s.$$set=E=>{"toggleSplash"in E&&t(0,l=E.toggleSplash),"webglError"in E&&t(1,a=E.webglError)},[l,a,n,o,i,r,m,w,y,D,L,A]}class of extends Qe{constructor(e){super(),Ze(this,e,lf,af,Xe,{toggleSplash:0,webglError:1})}}function nf(s){let e,t,i,r,l,a,n,o,c,f,u,g,b,m,w,y="RESET",D,L;return{c(){e=p("div"),t=p("div"),i=k(),r=p("div"),l=k(),a=p("div"),n=k(),o=p("div"),c=p("div"),f=k(),u=p("div"),g=k(),b=p("div"),m=k(),w=p("div"),w.textContent=y,this.h()},l(A){e=_(A,"DIV",{class:!0});var E=C(e);t=_(E,"DIV",{class:!0,style:!0});var T=C(t);T.forEach(v),i=I(E),r=_(E,"DIV",{class:!0}),C(r).forEach(v),l=I(E),a=_(E,"DIV",{class:!0,style:!0}),C(a).forEach(v),E.forEach(v),n=I(A),o=_(A,"DIV",{class:!0});var x=C(o);c=_(x,"DIV",{class:!0,style:!0});var j=C(c);j.forEach(v),f=I(x),u=_(x,"DIV",{class:!0}),C(u).forEach(v),g=I(x),b=_(x,"DIV",{class:!0,style:!0}),C(b).forEach(v),x.forEach(v),m=I(A),w=_(A,"DIV",{class:!0,"data-svelte-h":!0}),G(w)!=="svelte-jv83gf"&&(w.textContent=y),this.h()},h(){h(t,"class","steer-slider-thumb svelte-1fln1t4"),le(t,"top",s[0]*100+"%"),R(t,"steer-dragging",s[4]),h(r,"class","steer-slider-track svelte-1fln1t4"),h(a,"class","steer-slider-zero svelte-1fln1t4"),le(a,"top",Mt*100+"%"),h(e,"class","steer-slider left-steer svelte-1fln1t4"),h(c,"class","steer-slider-thumb svelte-1fln1t4"),le(c,"top",s[1]*100+"%"),R(c,"steer-dragging",s[5]),h(u,"class","steer-slider-track svelte-1fln1t4"),h(b,"class","steer-slider-zero svelte-1fln1t4"),le(b,"top",Mt*100+"%"),h(o,"class","steer-slider right-steer svelte-1fln1t4"),h(w,"class","touch-reset svelte-1fln1t4")},m(A,E){P(A,e,E),d(e,t),d(e,i),d(e,r),d(e,l),d(e,a),s[12](e),P(A,n,E),P(A,o,E),d(o,c),d(o,f),d(o,u),d(o,g),d(o,b),s[15](o),P(A,m,E),P(A,w,E),D||(L=[B(e,"mousedown",s[13]),B(e,"touchstart",s[14]),B(o,"mousedown",s[16]),B(o,"touchstart",s[17]),B(w,"click",s[18])],D=!0)},p(A,E){E[0]&1&&le(t,"top",A[0]*100+"%"),E[0]&16&&R(t,"steer-dragging",A[4]),E[0]&2&&le(c,"top",A[1]*100+"%"),E[0]&32&&R(c,"steer-dragging",A[5])},i:me,o:me,d(A){A&&(v(e),v(n),v(o),v(m),v(w)),s[12](null),s[15](null),D=!1,nt(L)}}}const Mt=.9;function vl(s=[],e){for(let t of s)if(t.target==e)return t;return null}function df(s,e,t){let{enabled:i=!0}=e,r=null,l=null,a=0,n=0,o=!1,c=!1,f=Mt,u=Mt,g,b,m=window.innerWidth<window.innerHeight;function w(){m=window.innerWidth<window.innerHeight}function y(O){vl(O.changedTouches,r)&&(t(4,o=!0),g=r.getBoundingClientRect(),E(O))}function D(O){vl(O.changedTouches,l)&&(t(5,c=!0),b=l.getBoundingClientRect(),E(O))}function L(O,z){}function A(O){t(4,o=!1),f>Mt&&t(0,f=Mt),t(5,c=!1),u>Mt&&t(1,u=Mt)}function E(O){if(i){for(let z of O.changedTouches)o&&z.target==r&&(m?t(0,f=Math.max(Math.min(1,(g.right-z.clientX)/g.width),0)):t(0,f=Math.max(Math.min(1,(z.clientY-g.top)/g.height),0))),c&&z.target==l&&(m?t(1,u=Math.max(Math.min(1,(b.right-z.clientX)/b.width),0)):t(1,u=Math.max(Math.min(1,(z.clientY-b.top)/b.height),0)));O.preventDefault(),O.stopImmediatePropagation()}}function T(O){for(let z of O.changedTouches)o&&z.target==r&&(t(4,o=!1),f>Mt&&t(0,f=Mt)),c&&z.target==l&&(t(5,c=!1),u>Mt&&t(1,u=Mt))}function x(O){o?t(0,f=Math.max(Math.min(1,(O.clientY-g.top)/g.height),0)):c&&t(1,u=Math.max(Math.min(1,(O.clientY-b.top)/b.height),0))}ct(()=>(window.addEventListener("mousemove",x),window.addEventListener("mouseup",A),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",T),window.addEventListener("resize",w),Sr.set(!0),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",A),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",T),window.removeEventListener("resize",w),Sr.set(!1)}));function j(O){yt[O?"unshift":"push"](()=>{r=O,t(2,r)})}const X=O=>{},V=O=>{y(O)};function ee(O){yt[O?"unshift":"push"](()=>{l=O,t(3,l)})}const Z=O=>{},U=O=>{D(O)},W=()=>{t(0,f=Mt),t(1,u=Mt),yn.update(O=>O+1)};return s.$$set=O=>{"enabled"in O&&t(9,i=O.enabled)},s.$$.update=()=>{s.$$.dirty[0]&3075&&(t(10,a=(Mt-f)/Mt),t(11,n=(Mt-u)/Mt),wn.set((a+n)/2),Qr.set(a-n))},[f,u,r,l,o,c,y,D,L,i,a,n,j,X,V,ee,Z,U,W]}class cf extends Qe{constructor(e){super(),Ze(this,e,df,nf,Xe,{enabled:9},null,[-1,-1])}}function hf(s){let e,t,i,r,l,a,n,o,c,f,u,g='<div class="steer-thumb svelte-if0uoq"></div>',b,m,w="",y,D,L="RESET",A,E,T="BRAKE",x,j,X="BOOST",V,ee,Z="CAM",U,W;return{c(){e=p("div"),t=p("div"),i=p("div"),r=k(),l=p("div"),a=k(),n=p("div"),o=k(),c=p("div"),f=p("div"),u=p("div"),u.innerHTML=g,b=k(),m=p("div"),m.innerHTML=w,y=k(),D=p("div"),D.textContent=L,A=k(),E=p("div"),E.textContent=T,x=k(),j=p("div"),j.textContent=X,V=k(),ee=p("div"),ee.textContent=Z,this.h()},l(O){e=_(O,"DIV",{class:!0});var z=C(e);t=_(z,"DIV",{class:!0});var M=C(t);i=_(M,"DIV",{class:!0,style:!0});var N=C(i);N.forEach(v),r=I(M),l=_(M,"DIV",{class:!0}),C(l).forEach(v),a=I(M),n=_(M,"DIV",{class:!0,style:!0}),C(n).forEach(v),M.forEach(v),o=I(z),c=_(z,"DIV",{class:!0});var q=C(c);f=_(q,"DIV",{class:!0});var re=C(f);u=_(re,"DIV",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-htckc0"&&(u.innerHTML=g),b=I(re),m=_(re,"DIV",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-1npfju5"&&(m.innerHTML=w),re.forEach(v),q.forEach(v),y=I(z),D=_(z,"DIV",{class:!0,"data-svelte-h":!0}),G(D)!=="svelte-leux23"&&(D.textContent=L),A=I(z),E=_(z,"DIV",{class:!0,"data-svelte-h":!0}),G(E)!=="svelte-10pe3fz"&&(E.textContent=T),x=I(z),j=_(z,"DIV",{class:!0,"data-svelte-h":!0}),G(j)!=="svelte-6q7fx7"&&(j.textContent=X),V=I(z),ee=_(z,"DIV",{class:!0,"data-svelte-h":!0}),G(ee)!=="svelte-cjqwr0"&&(ee.textContent=Z),z.forEach(v),this.h()},h(){h(i,"class","slider-thumb svelte-if0uoq"),le(i,"top",s[0]*100+"%"),R(i,"slider-dragging",s[4]),h(l,"class","accel-slider-track svelte-if0uoq"),h(n,"class","accel-slider-zero svelte-if0uoq"),le(n,"top",Mi*100+"%"),h(t,"class","accel-slider svelte-if0uoq"),h(u,"class","steer-thumb-container svelte-if0uoq"),h(m,"class","steer-bar-zero svelte-if0uoq"),h(f,"class","steer-bar svelte-if0uoq"),h(c,"class","steer svelte-if0uoq"),h(D,"class","touch-btn touch-reset svelte-if0uoq"),h(E,"class","touch-btn touch-brake svelte-if0uoq"),h(j,"class","touch-btn touch-boost svelte-if0uoq"),h(ee,"class","touch-btn touch-cam svelte-if0uoq"),h(e,"class","touch-visible svelte-if0uoq"),R(e,"touch-hidden",s[5])},m(O,z){P(O,e,z),d(e,t),d(t,i),d(t,r),d(t,l),d(t,a),d(t,n),s[13](t),d(e,o),d(e,c),d(c,f),d(f,u),s[16](u),d(f,b),d(f,m),s[17](c),d(e,y),d(e,D),d(e,A),d(e,E),d(e,x),d(e,j),d(e,V),d(e,ee),U||(W=[B(t,"mousedown",s[14]),B(t,"touchstart",s[15]),B(c,"mousedown",s[18]),B(c,"touchstart",s[19]),B(D,"click",s[20]),B(E,"touchstart",s[21],{passive:!0}),B(E,"touchend",s[22],{passive:!0}),B(j,"touchstart",s[23],{passive:!0}),B(j,"touchend",s[24],{passive:!0}),B(ee,"click",s[25])],U=!0)},p(O,z){z[0]&1&&le(i,"top",O[0]*100+"%"),z[0]&16&&R(i,"slider-dragging",O[4]),z[0]&32&&R(e,"touch-hidden",O[5])},i:me,o:me,d(O){O&&v(e),s[13](null),s[16](null),s[17](null),U=!1,nt(W)}}}const Mi=.9;function ml(s=[],e){for(let t of s)if(t.target==e)return t;return null}function ff(s,e,t){let{enabled:i=!0}=e;const r=Math.PI/4,l=Math.PI/2;let a=null,n=null,o=null,c=0,f=0,u=!1,g=!1,b=Mi,m,w,y=window.innerWidth<window.innerHeight;function D(){y=window.innerWidth<window.innerHeight}function L(Q){V(),ml(Q.changedTouches,a)&&(t(4,u=!0),m=a.getBoundingClientRect(),x(Q))}function A(Q){V(),ml(Q.changedTouches,n)&&(g=!0,w=n.getBoundingClientRect(),x(Q))}function E(Q,ae){}function T(Q){t(4,u=!1),b>Mi&&t(0,b=Mi),g=!1,ls.sticky||(t(12,f=0),t(3,o.style.transform="rotate(-"+r+"rad)",o))}function x(Q){if(i){for(let ae of Q.changedTouches)if(u&&ae.target==a&&(y?t(0,b=Math.max(Math.min(1,(m.right-ae.clientX)/m.width),0)):t(0,b=Math.max(Math.min(1,(ae.clientY-m.top)/m.height),0))),g&&ae.target==n){let he,K;y?(he=(w.bottom-ae.clientY)/w.width,K=(ae.clientX-w.left)/w.width):(he=(w.right-ae.clientX)/w.height,K=1-(ae.clientY-w.top)/w.height);let de=Math.atan2(K,he);de=Math.min(Math.max(0,de),l),t(12,f=(de-r)/r),t(3,o.style.transform="rotate(-"+(l-de)+"rad)",o)}Q.preventDefault(),Q.stopImmediatePropagation()}}function j(Q){for(let ae of Q.changedTouches)u&&ae.target==a&&(t(4,u=!1),b>Mi&&t(0,b=Mi)),g&&ae.target==n&&(g=!1,ls.sticky||(t(12,f=0),t(3,o.style.transform="rotate(-"+r+"rad)",o)))}function X(Q){u&&t(0,b=Math.max(Math.min(1,(Q.clientY-m.top)/m.height),0))}function V(){Us.hasInit||Us.init()}let ee=!1;function Z(Q){t(5,ee=Yt.value&&ne.autodriveMode==Ls.FULL),Yt.value&&ne.autodriveMode!=Ls.STEER&&t(0,b=Mi)}ct(()=>(window.addEventListener("mousemove",X),window.addEventListener("mouseup",T),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("resize",D),Yt.addListener(Z),ne.addListener("autodriveMode",Z),Sr.set(!0),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",T),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",j),window.removeEventListener("resize",D),Yt.removeListener(Z),ne.removeListener("autodriveMode",Z),Sr.set(!1)}));function U(Q){yt[Q?"unshift":"push"](()=>{a=Q,t(1,a)})}const W=Q=>{},O=Q=>{L(Q)};function z(Q){yt[Q?"unshift":"push"](()=>{o=Q,t(3,o)})}function M(Q){yt[Q?"unshift":"push"](()=>{n=Q,t(2,n)})}const N=Q=>{},q=Q=>{A(Q)},re=()=>{V(),ls.resetMaintainsAccel||t(0,b=Mi),yn.update(Q=>Q+1)},oe=()=>{V(),Ua.set(1)},te=()=>Ua.set(0),ve=()=>{V(),Va.set(1)},Se=()=>Va.set(0),ge=()=>{V(),vn.update(Q=>Q+1)};return s.$$set=Q=>{"enabled"in Q&&t(10,i=Q.enabled)},s.$$.update=()=>{s.$$.dirty[0]&2049&&(t(11,c=(Mi-b)/Mi),c<0?t(11,c*=Mi*10):t(11,c=c*c),wn.set(c)),s.$$.dirty[0]&4096&&(f<0?Qr.set(f*f*-(1-ls.linearity)+f*ls.linearity):Qr.set(f*f*(1-ls.linearity)+f*ls.linearity))},[b,a,n,o,u,ee,L,A,E,V,i,c,f,U,W,O,z,M,N,q,re,oe,te,ve,Se,ge]}class uf extends Qe{constructor(e){super(),Ze(this,e,ff,hf,Xe,{enabled:10},null,[-1,-1])}}function gl(s,e,t){const i=s.slice();return i[5]=e[t],i}function pl(s){let e,t,i,r,l,a;function n(){return s[3](s[5])}return{c(){e=p("div"),t=p("img"),r=k(),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);t=_(c,"IMG",{class:!0,src:!0}),r=I(c),c.forEach(v),this.h()},h(){h(t,"class","option-icon svelte-lk6ame"),pt(t.src,i=s[5].icon)||h(t,"src",i),R(t,"option-icon-selected",s[2]==s[5].key),h(e,"class","style-selection-option svelte-lk6ame"),R(e,"style-selection-option-selected",s[2]==s[5].key)},m(o,c){P(o,e,c),d(e,t),d(e,r),l||(a=B(e,"mousedown",n),l=!0)},p(o,c){s=o,c&1&&!pt(t.src,i=s[5].icon)&&h(t,"src",i),c&5&&R(t,"option-icon-selected",s[2]==s[5].key),c&5&&R(e,"style-selection-option-selected",s[2]==s[5].key)},d(o){o&&v(e),l=!1,a()}}}function vf(s){let e,t=Oe(s[0].options),i=[];for(let r=0;r<t.length;r+=1)i[r]=pl(gl(s,t,r));return{c(){e=p("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var l=C(e);for(let a=0;a<i.length;a+=1)i[a].l(l);l.forEach(v),this.h()},h(){h(e,"class","style-selection svelte-lk6ame")},m(r,l){P(r,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,[l]){if(l&7){t=Oe(r[0].options);let a;for(a=0;a<t.length;a+=1){const n=gl(r,t,a);i[a]?i[a].p(n,l):(i[a]=pl(n),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},i:me,o:me,d(r){r&&v(e),_t(i,r)}}}function mf(s,e,t){let{meta:i}=e,{live:r}=e,l="";function a(o){t(2,l=o)}ct(()=>(t(2,l=r[i.key]),r.addListener(i.key,a),()=>{r.removeListener(i.key,a)}));const n=o=>r.set(i.key,o.key);return s.$$set=o=>{"meta"in o&&t(0,i=o.meta),"live"in o&&t(1,r=o.live)},[i,r,l,n]}class gf extends Qe{constructor(e){super(),Ze(this,e,mf,vf,Xe,{meta:0,live:1})}}function _l(s,e,t){const i=s.slice();return i[5]=e[t],i}function pf(s){let e,t,i=s[5].type+"",r;return{c(){e=p("div"),t=J("Unrecognised type "),r=J(i)},l(l){e=_(l,"DIV",{});var a=C(e);t=$(a,"Unrecognised type "),r=$(a,i),a.forEach(v)},m(l,a){P(l,e,a),d(e,t),d(e,r)},p(l,a){a&1&&i!==(i=l[5].type+"")&&_e(r,i)},i:me,o:me,d(l){l&&v(e)}}}function _f(s){let e,t;return e=new gf({props:{meta:s[5],live:s[1]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.meta=i[5]),r&2&&(l.live=i[1]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function bl(s){let e,t,i=s[5].readable+"",r,l,a,n,o,c;const f=[_f,pf],u=[];function g(b,m){return b[5].type==Zi.Selection?0:1}return a=g(s),n=u[a]=f[a](s),{c(){e=p("div"),t=p("div"),r=J(i),l=k(),n.c(),o=k(),this.h()},l(b){e=_(b,"DIV",{class:!0});var m=C(e);t=_(m,"DIV",{class:!0});var w=C(t);r=$(w,i),w.forEach(v),l=I(m),n.l(m),o=I(m),m.forEach(v),this.h()},h(){h(t,"class","style-subtitle svelte-p9ui73"),h(e,"class","style-group svelte-p9ui73")},m(b,m){P(b,e,m),d(e,t),d(t,r),d(e,l),u[a].m(e,null),d(e,o),c=!0},p(b,m){(!c||m&1)&&i!==(i=b[5].readable+"")&&_e(r,i);let w=a;a=g(b),a===w?u[a].p(b,m):(Ge(),se(u[w],1,1,()=>{u[w]=null}),Be(),n=u[a],n?n.p(b,m):(n=u[a]=f[a](b),n.c()),Y(n,1),n.m(e,o))},i(b){c||(Y(n),c=!0)},o(b){se(n),c=!1},d(b){b&&v(e),u[a].d()}}}function bf(s){let e,t,i=Oe(s[0]),r=[];for(let a=0;a<i.length;a+=1)r[a]=bl(_l(s,i,a));const l=a=>se(r[a],1,1,()=>{r[a]=null});return{c(){e=p("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var n=C(e);for(let o=0;o<r.length;o+=1)r[o].l(n);n.forEach(v),this.h()},h(){h(e,"class","style-main svelte-p9ui73")},m(a,n){P(a,e,n);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(a,[n]){if(n&3){i=Oe(a[0]);let o;for(o=0;o<i.length;o+=1){const c=_l(a,i,o);r[o]?(r[o].p(c,n),Y(r[o],1)):(r[o]=bl(c),r[o].c(),Y(r[o],1),r[o].m(e,null))}for(Ge(),o=i.length;o<r.length;o+=1)l(o);Be()}},i(a){if(!t){for(let n=0;n<i.length;n+=1)Y(r[n]);t=!0}},o(a){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)se(r[n]);t=!1},d(a){a&&v(e),_t(r,a)}}}function wf(s,e,t){let i=[],r;function l(n){let o=[];for(let c in n)c!="presets"&&o.push(n[c]);t(0,i=o)}function a(n){t(1,r=n)}return ct(()=>(fr.addListener("metaConfig",l),fr.addListener("liveConfig",a),()=>{fr.removeListener("metaConfig",l),fr.removeListener("liveConfig",a)})),[i,r]}class yf extends Qe{constructor(e){super(),Ze(this,e,wf,bf,Xe,{})}}function wl(s,e,t){const i=s.slice();return i[9]=e[t],i[11]=t,i}function Sf(s){let e=s[9].label+"",t;return{c(){t=J(e)},l(i){t=$(i,e)},m(i,r){P(i,t,r)},p(i,r){r&1&&e!==(e=i[9].label+"")&&_e(t,e)},d(i){i&&v(t)}}}function Df(s){let e,t;return{c(){e=p("img"),this.h()},l(i){e=_(i,"IMG",{class:!0,src:!0}),this.h()},h(){h(e,"class","enum-option-icon svelte-1ey7984"),pt(e.src,t=s[9].icon)||h(e,"src",t),R(e,"icon-selected",s[2]==s[11]&&!s[1])},m(i,r){P(i,e,r)},p(i,r){r&1&&!pt(e.src,t=i[9].icon)&&h(e,"src",t),r&6&&R(e,"icon-selected",i[2]==i[11]&&!i[1])},d(i){i&&v(e)}}}function yl(s){let e,t,i,r;function l(c,f){return c[9].icon?Df:Sf}let a=l(s),n=a(s);function o(){return s[7](s[11])}return{c(){e=p("div"),n.c(),t=k(),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);n.l(f),t=I(f),f.forEach(v),this.h()},h(){h(e,"class","enum-option svelte-1ey7984"),R(e,"selected",s[2]==s[11]&&!s[1])},m(c,f){P(c,e,f),n.m(e,null),d(e,t),i||(r=B(e,"click",o),i=!0)},p(c,f){s=c,a===(a=l(s))&&n?n.p(s,f):(n.d(1),n=a(s),n&&(n.c(),n.m(e,t))),f&6&&R(e,"selected",s[2]==s[11]&&!s[1])},d(c){c&&v(e),n.d(),i=!1,r()}}}function Lf(s){let e,t=Oe(s[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=yl(wl(s,t,r));return{c(){e=p("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var l=C(e);for(let a=0;a<i.length;a+=1)i[a].l(l);l.forEach(v),this.h()},h(){h(e,"class","enum-container svelte-1ey7984")},m(r,l){P(r,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,[l]){if(l&15){t=Oe(r[0]);let a;for(a=0;a<t.length;a+=1){const n=wl(r,t,a);i[a]?i[a].p(n,l):(i[a]=yl(n),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},i:me,o:me,d(r){r&&v(e),_t(i,r)}}}function Cf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:l}=e,{options:a}=e,{disabled:n=!1}=e,o=i[r];const c=g=>{t(2,o=g)},f=g=>{i.set(r,g)};ct(()=>(i.addListener(r,c),()=>{i.removeListener(r,c)}));const u=g=>{f(g)};return s.$$set=g=>{"liveSetting"in g&&t(4,i=g.liveSetting),"settingKey"in g&&t(5,r=g.settingKey),"settingLabel"in g&&t(6,l=g.settingLabel),"options"in g&&t(0,a=g.options),"disabled"in g&&t(1,n=g.disabled)},[a,n,o,f,i,r,l,u]}class kf extends Qe{constructor(e){super(),Ze(this,e,Cf,Lf,Xe,{liveSetting:4,settingKey:5,settingLabel:6,options:0,disabled:1})}}function If(s){let e,t,i="▲",r,l,a=(s[3]?"1.0":s[4].toFixed(s[2]))+"",n,o,c,f,u="▼",g,b;return{c(){e=p("div"),t=p("div"),t.textContent=i,r=k(),l=p("div"),n=J(a),o=J("x"),c=k(),f=p("div"),f.textContent=u,this.h()},l(m){e=_(m,"DIV",{class:!0});var w=C(e);t=_(w,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-iy1368"&&(t.textContent=i),r=I(w),l=_(w,"DIV",{class:!0});var y=C(l);n=$(y,a),o=$(y,"x"),y.forEach(v),c=I(w),f=_(w,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-cd1zbb"&&(f.textContent=u),w.forEach(v),this.h()},h(){h(t,"class","range-arrow svelte-zwoxeg"),h(l,"class","range-value svelte-zwoxeg"),h(f,"class","range-arrow svelte-zwoxeg"),h(e,"class","range-container svelte-zwoxeg")},m(m,w){P(m,e,w),d(e,t),d(e,r),d(e,l),d(l,n),d(l,o),d(e,c),d(e,f),g||(b=[B(t,"mousedown",s[8]),B(f,"mousedown",s[9])],g=!0)},p(m,[w]){w&28&&a!==(a=(m[3]?"1.0":m[4].toFixed(m[2]))+"")&&_e(n,a)},i:me,o:me,d(m){m&&v(e),g=!1,nt(b)}}}function Mf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:l}=e,{min:a=0}=e,{max:n=1}=e,{precision:o=1}=e,{disabled:c=!1}=e,f=i[r];const u=m=>{t(4,f=m)};ct(()=>(i.addListener(r,u),()=>{i.removeListener(r,u)}));const g=()=>i.set(r,f+1/Math.pow(10,o)),b=()=>i.set(r,f-1/Math.pow(10,o));return s.$$set=m=>{"liveSetting"in m&&t(0,i=m.liveSetting),"settingKey"in m&&t(1,r=m.settingKey),"settingLabel"in m&&t(5,l=m.settingLabel),"min"in m&&t(6,a=m.min),"max"in m&&t(7,n=m.max),"precision"in m&&t(2,o=m.precision),"disabled"in m&&t(3,c=m.disabled)},[i,r,o,c,f,l,a,n,g,b]}class Ef extends Qe{constructor(e){super(),Ze(this,e,Mf,If,Xe,{liveSetting:0,settingKey:1,settingLabel:5,min:6,max:7,precision:2,disabled:3})}}function Sl(s,e,t){const i=s.slice();return i[3]=e[t],i}function Af(s){let e,t,i=st[s[3]].label+"",r,l,a,n,o;return a=new Ef({props:{liveSetting:Ye,settingKey:s[3],settingLabel:st[s[3]].label,min:st[s[3]].min,max:st[s[3]].max,precision:st[s[3]].precision,disabled:st[s[3]].disabledForBike&&s[1]==2}}),{c(){e=p("div"),t=p("div"),r=J(i),l=k(),xe(a.$$.fragment),n=k(),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);t=_(f,"DIV",{class:!0});var u=C(t);r=$(u,i),u.forEach(v),l=I(f),Re(a.$$.fragment,f),n=I(f),f.forEach(v),this.h()},h(){h(t,"class","config-group-title svelte-yoqhax"),h(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",st[s[3]].disabledForBike&&s[1]==2)},m(c,f){P(c,e,f),d(e,t),d(t,r),d(e,l),Ue(a,e,null),d(e,n),o=!0},p(c,f){(!o||f&1)&&i!==(i=st[c[3]].label+"")&&_e(r,i);const u={};f&1&&(u.settingKey=c[3]),f&1&&(u.settingLabel=st[c[3]].label),f&1&&(u.min=st[c[3]].min),f&1&&(u.max=st[c[3]].max),f&1&&(u.precision=st[c[3]].precision),f&3&&(u.disabled=st[c[3]].disabledForBike&&c[1]==2),a.$set(u),(!o||f&3)&&R(e,"config-group-disabled",st[c[3]].disabledForBike&&c[1]==2)},i(c){o||(Y(a.$$.fragment,c),o=!0)},o(c){se(a.$$.fragment,c),o=!1},d(c){c&&v(e),Ve(a)}}}function Tf(s){let e,t,i=st[s[3]].label+"",r,l,a,n,o;return a=new kf({props:{liveSetting:Ye,settingKey:s[3],settingLabel:st[s[3]].label,options:st[s[3]].options,disabled:st[s[3]].disabledForBike&&s[1]==2}}),{c(){e=p("div"),t=p("div"),r=J(i),l=k(),xe(a.$$.fragment),n=k(),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);t=_(f,"DIV",{class:!0});var u=C(t);r=$(u,i),u.forEach(v),l=I(f),Re(a.$$.fragment,f),n=I(f),f.forEach(v),this.h()},h(){h(t,"class","config-group-title svelte-yoqhax"),h(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",st[s[3]].disabledForBike&&s[1]==2)},m(c,f){P(c,e,f),d(e,t),d(t,r),d(e,l),Ue(a,e,null),d(e,n),o=!0},p(c,f){(!o||f&1)&&i!==(i=st[c[3]].label+"")&&_e(r,i);const u={};f&1&&(u.settingKey=c[3]),f&1&&(u.settingLabel=st[c[3]].label),f&1&&(u.options=st[c[3]].options),f&3&&(u.disabled=st[c[3]].disabledForBike&&c[1]==2),a.$set(u),(!o||f&3)&&R(e,"config-group-disabled",st[c[3]].disabledForBike&&c[1]==2)},i(c){o||(Y(a.$$.fragment,c),o=!0)},o(c){se(a.$$.fragment,c),o=!1},d(c){c&&v(e),Ve(a)}}}function Dl(s){let e,t,i,r;const l=[Tf,Af],a=[];function n(o,c){return st[o[3]].type==Zi.Enum?0:st[o[3]].type==Zi.Range?1:-1}return~(e=n(s))&&(t=a[e]=l[e](s)),{c(){t&&t.c(),i=Le()},l(o){t&&t.l(o),i=Le()},m(o,c){~e&&a[e].m(o,c),P(o,i,c),r=!0},p(o,c){let f=e;e=n(o),e===f?~e&&a[e].p(o,c):(t&&(Ge(),se(a[f],1,1,()=>{a[f]=null}),Be()),~e?(t=a[e],t?t.p(o,c):(t=a[e]=l[e](o),t.c()),Y(t,1),t.m(i.parentNode,i)):t=null)},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),~e&&a[e].d(o)}}}function Pf(s){let e,t,i=Oe(s[0]),r=[];for(let a=0;a<i.length;a+=1)r[a]=Dl(Sl(s,i,a));const l=a=>se(r[a],1,1,()=>{r[a]=null});return{c(){e=p("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var n=C(e);for(let o=0;o<r.length;o+=1)r[o].l(n);n.forEach(v),this.h()},h(){h(e,"class","config-main svelte-yoqhax")},m(a,n){P(a,e,n);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(a,[n]){if(n&3){i=Oe(a[0]);let o;for(o=0;o<i.length;o+=1){const c=Sl(a,i,o);r[o]?(r[o].p(c,n),Y(r[o],1)):(r[o]=Dl(c),r[o].c(),Y(r[o],1),r[o].m(e,null))}for(Ge(),o=i.length;o<r.length;o+=1)l(o);Be()}},i(a){if(!t){for(let n=0;n<i.length;n+=1)Y(r[n]);t=!0}},o(a){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)se(r[n]);t=!1},d(a){a&&v(e),_t(r,a)}}}function Nf(s,e,t){let i=[],r=0;return ct(()=>{t(0,i=Object.keys(st));const l=a=>{t(1,r=a)};return Ye.addListener("type",l),()=>{Ye.removeListener("type",l)}}),[i,r]}class xf extends Qe{constructor(e){super(),Ze(this,e,Nf,Pf,Xe,{})}}function Ll(s){let e,t,i;return{c(){e=p("div"),this.h()},l(r){e=_(r,"DIV",{class:!0}),C(e).forEach(v),this.h()},h(){h(e,"class","conf-mouseover svelte-101otrq")},m(r,l){P(r,e,l),t||(i=[B(e,"mouseenter",s[30]),B(e,"mouseleave",s[31])],t=!0)},p:me,d(r){r&&v(e),t=!1,nt(i)}}}function Rf(s){let e,t;return e=new xf({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Uf(s){let e,t;return e=new yf({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Vf(s){let e,t,i,r,l="LOCATION",a,n,o,c,f="◂",u,g,b="▸",m,w=Zr[s[2]]+"",y,D,L,A,E="ROAD STYLE",T,x,j,X,V="◂",ee,Z,U="▸",W,O=Jr[s[3]]+"",z,M,N,q,re,oe,te,ve="GENERATE",Se,ge,Q=s[6]&&Cl(s),ae=s[19]==!1&&kl(s);return{c(){e=p("div"),t=p("div"),i=p("div"),r=p("div"),r.textContent=l,a=k(),n=p("div"),o=p("div"),c=p("div"),c.textContent=f,u=k(),g=p("div"),g.textContent=b,m=k(),y=J(w),D=k(),L=p("div"),A=p("div"),A.textContent=E,T=k(),x=p("div"),j=p("div"),X=p("div"),X.textContent=V,ee=k(),Z=p("div"),Z.textContent=U,W=k(),z=J(O),M=k(),Q&&Q.c(),N=k(),q=p("div"),re=p("div"),ae&&ae.c(),oe=k(),te=p("div"),te.textContent=ve,this.h()},l(he){e=_(he,"DIV",{class:!0});var K=C(e);t=_(K,"DIV",{class:!0});var de=C(t);i=_(de,"DIV",{class:!0});var ie=C(i);r=_(ie,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-1qs4nti"&&(r.textContent=l),a=I(ie),n=_(ie,"DIV",{class:!0});var be=C(n);o=_(be,"DIV",{class:!0});var ke=C(o);c=_(ke,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(c)!=="svelte-hdk0bx"&&(c.textContent=f),u=I(ke),g=_(ke,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(g)!=="svelte-smravs"&&(g.textContent=b),ke.forEach(v),m=I(be),y=$(be,w),be.forEach(v),ie.forEach(v),D=I(de),L=_(de,"DIV",{class:!0});var Fe=C(L);A=_(Fe,"DIV",{class:!0,"data-svelte-h":!0}),G(A)!=="svelte-19ddluq"&&(A.textContent=E),T=I(Fe),x=_(Fe,"DIV",{class:!0});var ze=C(x);j=_(ze,"DIV",{class:!0});var ft=C(j);X=_(ft,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(X)!=="svelte-zkw8xm"&&(X.textContent=V),ee=I(ft),Z=_(ft,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(Z)!=="svelte-1bfzabd"&&(Z.textContent=U),ft.forEach(v),W=I(ze),z=$(ze,O),ze.forEach(v),Fe.forEach(v),M=I(de),Q&&Q.l(de),de.forEach(v),N=I(K),q=_(K,"DIV",{class:!0});var Je=C(q);re=_(Je,"DIV",{class:!0});var ht=C(re);ae&&ae.l(ht),ht.forEach(v),oe=I(Je),te=_(Je,"DIV",{class:!0,"data-svelte-h":!0}),G(te)!=="svelte-1usevhp"&&(te.textContent=ve),Je.forEach(v),K.forEach(v),this.h()},h(){h(r,"class","wld-option-label svelte-101otrq"),h(c,"class","wld-option-arrow svelte-101otrq"),le(c,"text-align","left"),h(g,"class","wld-option-arrow svelte-101otrq"),le(g,"text-align","right"),h(o,"class","wld-option-arrows svelte-101otrq"),h(n,"class","wld-option-tile svelte-101otrq"),R(n,"wld-option-tile-changed",s[14]),h(i,"class","wld-option svelte-101otrq"),h(A,"class","wld-option-label svelte-101otrq"),h(X,"class","wld-option-arrow svelte-101otrq"),le(X,"text-align","left"),h(Z,"class","wld-option-arrow svelte-101otrq"),le(Z,"text-align","right"),h(j,"class","wld-option-arrows svelte-101otrq"),h(x,"class","wld-option-tile svelte-101otrq"),R(x,"wld-option-tile-changed",s[13]),h(L,"class","wld-option svelte-101otrq"),h(t,"class","wld-options svelte-101otrq"),h(re,"class","wld-hash-box svelte-101otrq"),h(te,"class","ui-btn"),R(te,"ui-btn-active",s[11]),h(q,"class","wld-generate svelte-101otrq"),h(e,"class","wld-main svelte-101otrq")},m(he,K){P(he,e,K),d(e,t),d(t,i),d(i,r),d(i,a),d(i,n),d(n,o),d(o,c),d(o,u),d(o,g),d(n,m),d(n,y),d(t,D),d(t,L),d(L,A),d(L,T),d(L,x),d(x,j),d(j,X),d(j,ee),d(j,Z),d(x,W),d(x,z),d(t,M),Q&&Q.m(t,null),d(e,N),d(e,q),d(q,re),ae&&ae.m(re,null),d(q,oe),d(q,te),Se||(ge=[B(c,"click",s[43]),B(g,"click",s[44]),B(X,"click",s[45]),B(Z,"click",s[46]),B(te,"click",s[28])],Se=!0)},p(he,K){K[0]&4&&w!==(w=Zr[he[2]]+"")&&_e(y,w),K[0]&16384&&R(n,"wld-option-tile-changed",he[14]),K[0]&8&&O!==(O=Jr[he[3]]+"")&&_e(z,O),K[0]&8192&&R(x,"wld-option-tile-changed",he[13]),he[6]?Q?Q.p(he,K):(Q=Cl(he),Q.c(),Q.m(t,null)):Q&&(Q.d(1),Q=null),he[19]==!1?ae?ae.p(he,K):(ae=kl(he),ae.c(),ae.m(re,null)):ae&&(ae.d(1),ae=null),K[0]&2048&&R(te,"ui-btn-active",he[11])},i:me,o:me,d(he){he&&v(e),Q&&Q.d(),ae&&ae.d(),Se=!1,nt(ge)}}}function Cl(s){let e,t,i,r,l="randomise",a,n,o,c,f=s[5]?"Invalid seed":"",u,g,b;return{c(){e=p("div"),t=p("div"),i=J("SEED"),r=p("span"),r.textContent=l,a=k(),n=p("input"),o=k(),c=p("div"),u=J(f),this.h()},l(m){e=_(m,"DIV",{class:!0});var w=C(e);t=_(w,"DIV",{class:!0});var y=C(t);i=$(y,"SEED"),r=_(y,"SPAN",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-nkzfel"&&(r.textContent=l),y.forEach(v),a=I(w),n=_(w,"INPUT",{type:!0,maxlength:!0,onkeydown:!0,class:!0}),o=I(w),c=_(w,"DIV",{class:!0});var D=C(c);u=$(D,f),D.forEach(v),w.forEach(v),this.h()},h(){h(r,"class","wld-option-label-btn svelte-101otrq"),h(t,"class","wld-option-label svelte-101otrq"),h(n,"type","text"),h(n,"maxlength","16"),h(n,"onkeydown","return /[a-z]|[0-9]/i.test(event.key)"),h(n,"class","wld-option-tile wld-option-seed svelte-101otrq"),n.value=s[4],R(n,"wld-option-tile-changed",s[12]),h(c,"class","seed-warn svelte-101otrq"),h(e,"class","wld-option svelte-101otrq")},m(m,w){P(m,e,w),d(e,t),d(t,i),d(t,r),d(e,a),d(e,n),d(e,o),d(e,c),d(c,u),g||(b=[B(r,"click",s[22]),B(n,"input",s[23]),B(n,"focus",s[26]),B(n,"blur",s[27])],g=!0)},p(m,w){w[0]&16&&n.value!==m[4]&&(n.value=m[4]),w[0]&4096&&R(n,"wld-option-tile-changed",m[12]),w[0]&32&&f!==(f=m[5]?"Invalid seed":"")&&_e(u,f)},d(m){m&&v(e),g=!1,nt(b)}}}function kl(s){let e,t,i,r,l="COPY",a,n,o,c,f=s[10]&&Il();return{c(){e=J(`CODE:\r
                        `),t=p("input"),i=k(),r=p("div"),r.textContent=l,a=k(),f&&f.c(),n=Le(),this.h()},l(u){e=$(u,`CODE:\r
                        `),t=_(u,"INPUT",{type:!0,disable:!0,maxlength:!0,class:!0,id:!0,key:!0}),i=I(u),r=_(u,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-1fyfy5j"&&(r.textContent=l),a=I(u),f&&f.l(u),n=Le(),this.h()},h(){h(t,"type","text"),h(t,"disable",s[19]),h(t,"maxlength","26"),h(t,"class","wld-hash svelte-101otrq"),h(t,"id",s[7]),h(t,"key",s[7]),t.value=s[7],R(t,"wld-hash-invalid",s[8]),R(t,"wld-hash-changed",s[9]&&!s[8]),h(r,"class","wld-hash-copy svelte-101otrq")},m(u,g){P(u,e,g),P(u,t,g),P(u,i,g),P(u,r,g),P(u,a,g),f&&f.m(u,g),P(u,n,g),o||(c=[B(t,"keydown",s[32]),B(t,"input",s[24]),B(t,"focus",s[26]),B(t,"blur",s[27]),B(r,"click",s[25])],o=!0)},p(u,g){g[0]&524288&&h(t,"disable",u[19]),g[0]&128&&h(t,"id",u[7]),g[0]&128&&h(t,"key",u[7]),g[0]&128&&t.value!==u[7]&&(t.value=u[7]),g[0]&256&&R(t,"wld-hash-invalid",u[8]),g[0]&768&&R(t,"wld-hash-changed",u[9]&&!u[8]),u[10]?f||(f=Il(),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null)},d(u){u&&(v(e),v(t),v(i),v(r),v(a),v(n)),f&&f.d(u),o=!1,nt(c)}}}function Il(s){let e,t="copied";return{c(){e=p("div"),e.textContent=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1y72z4c"&&(e.textContent=t),this.h()},h(){h(e,"class","wld-hash-copied svelte-101otrq")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Of(s){let e,t,i,r,l,a,n="-",o,c,f="-",u,g,b,m,w,y,D="-",L,A,E="-",T,x,j,X,V,ee,Z="-",U,W,O="-",z,M,N,q,re,oe,te,ve,Se,ge=s[19]==!1&&Ll(s);const Q=[Vf,Uf,Rf],ae=[];function he(K,de){return K[1]==0?0:K[1]==1?1:K[1]==2?2:-1}return~(re=he(s))&&(oe=ae[re]=Q[re](s)),{c(){ge&&ge.c(),e=k(),t=p("div"),i=p("div"),r=p("div"),l=p("div"),a=p("span"),a.textContent=n,o=J(" WORLD "),c=p("span"),c.textContent=f,u=k(),g=p("div"),b=k(),m=p("div"),w=p("div"),y=p("span"),y.textContent=D,L=J(" STYLE "),A=p("span"),A.textContent=E,T=k(),x=p("div"),j=k(),X=p("div"),V=p("div"),ee=p("span"),ee.textContent=Z,U=J(" VEHICLE "),W=p("span"),W.textContent=O,z=k(),M=p("div"),N=k(),q=p("div"),oe&&oe.c(),this.h()},l(K){ge&&ge.l(K),e=I(K),t=_(K,"DIV",{class:!0});var de=C(t);i=_(de,"DIV",{class:!0});var ie=C(i);r=_(ie,"DIV",{class:!0});var be=C(r);l=_(be,"DIV",{class:!0,style:!0});var ke=C(l);a=_(ke,"SPAN",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-1rdtb9c"&&(a.textContent=n),o=$(ke," WORLD "),c=_(ke,"SPAN",{class:!0,"data-svelte-h":!0}),G(c)!=="svelte-1rdtb9c"&&(c.textContent=f),ke.forEach(v),u=I(be),g=_(be,"DIV",{class:!0}),C(g).forEach(v),be.forEach(v),b=I(ie),m=_(ie,"DIV",{class:!0});var Fe=C(m);w=_(Fe,"DIV",{class:!0,style:!0});var ze=C(w);y=_(ze,"SPAN",{class:!0,"data-svelte-h":!0}),G(y)!=="svelte-1krg1xv"&&(y.textContent=D),L=$(ze," STYLE "),A=_(ze,"SPAN",{class:!0,"data-svelte-h":!0}),G(A)!=="svelte-1krg1xv"&&(A.textContent=E),ze.forEach(v),T=I(Fe),x=_(Fe,"DIV",{class:!0}),C(x).forEach(v),Fe.forEach(v),j=I(ie),X=_(ie,"DIV",{class:!0});var ft=C(X);V=_(ft,"DIV",{class:!0,style:!0});var Je=C(V);ee=_(Je,"SPAN",{class:!0,"data-svelte-h":!0}),G(ee)!=="svelte-1n9h5xc"&&(ee.textContent=Z),U=$(Je," VEHICLE "),W=_(Je,"SPAN",{class:!0,"data-svelte-h":!0}),G(W)!=="svelte-1n9h5xc"&&(W.textContent=O),Je.forEach(v),z=I(ft),M=_(ft,"DIV",{class:!0}),C(M).forEach(v),ft.forEach(v),ie.forEach(v),N=I(de),q=_(de,"DIV",{class:!0});var ht=C(q);oe&&oe.l(ht),ht.forEach(v),de.forEach(v),this.h()},h(){h(a,"class","svelte-101otrq"),R(a,"invisible",!s[17]),h(c,"class","svelte-101otrq"),R(c,"invisible",!s[17]),h(l,"class","conf-tab-header-label svelte-101otrq"),le(l,"opacity",s[18]?"1":"0"),h(g,"class","conf-tab-pip svelte-101otrq"),R(g,"pip-selected",s[17]),h(r,"class","conf-tab-header svelte-101otrq"),R(r,"tab-selected",s[17]),h(y,"class","svelte-101otrq"),R(y,"invisible",!s[16]),h(A,"class","svelte-101otrq"),R(A,"invisible",!s[16]),h(w,"class","conf-tab-header-label svelte-101otrq"),le(w,"opacity",s[18]?"1":"0"),h(x,"class","conf-tab-pip svelte-101otrq"),R(x,"pip-selected",s[16]),h(m,"class","conf-tab-header svelte-101otrq"),R(m,"tab-selected",s[16]),h(ee,"class","svelte-101otrq"),R(ee,"invisible",!s[15]),h(W,"class","svelte-101otrq"),R(W,"invisible",!s[15]),h(V,"class","conf-tab-header-label svelte-101otrq"),le(V,"opacity",s[18]?"1":"0"),h(M,"class","conf-tab-pip svelte-101otrq"),R(M,"pip-selected",s[15]),h(X,"class","conf-tab-header svelte-101otrq"),R(X,"tab-selected",s[15]),h(i,"class","conf-header svelte-101otrq"),R(i,"conf-header-visible",s[0]),h(q,"class","conf-body svelte-101otrq"),R(q,"conf-body-open",s[0]),h(t,"class","conf-main svelte-101otrq"),R(t,"conf-main-active",s[0])},m(K,de){ge&&ge.m(K,de),P(K,e,de),P(K,t,de),d(t,i),d(i,r),d(r,l),d(l,a),d(l,o),d(l,c),d(r,u),d(r,g),d(i,b),d(i,m),d(m,w),d(w,y),d(w,L),d(w,A),d(m,T),d(m,x),d(i,j),d(i,X),d(X,V),d(V,ee),d(V,U),d(V,W),d(X,z),d(X,M),d(t,N),d(t,q),~re&&ae[re].m(q,null),te=!0,ve||(Se=[B(r,"mousedown",s[40]),B(m,"mousedown",s[41]),B(X,"mousedown",s[42]),B(t,"mouseenter",s[30]),B(t,"mouseleave",s[31])],ve=!0)},p(K,de){K[19]==!1?ge?ge.p(K,de):(ge=Ll(K),ge.c(),ge.m(e.parentNode,e)):ge&&(ge.d(1),ge=null),(!te||de[0]&131072)&&R(a,"invisible",!K[17]),(!te||de[0]&131072)&&R(c,"invisible",!K[17]),(!te||de[0]&262144)&&le(l,"opacity",K[18]?"1":"0"),(!te||de[0]&131072)&&R(g,"pip-selected",K[17]),(!te||de[0]&131072)&&R(r,"tab-selected",K[17]),(!te||de[0]&65536)&&R(y,"invisible",!K[16]),(!te||de[0]&65536)&&R(A,"invisible",!K[16]),(!te||de[0]&262144)&&le(w,"opacity",K[18]?"1":"0"),(!te||de[0]&65536)&&R(x,"pip-selected",K[16]),(!te||de[0]&65536)&&R(m,"tab-selected",K[16]),(!te||de[0]&32768)&&R(ee,"invisible",!K[15]),(!te||de[0]&32768)&&R(W,"invisible",!K[15]),(!te||de[0]&262144)&&le(V,"opacity",K[18]?"1":"0"),(!te||de[0]&32768)&&R(M,"pip-selected",K[15]),(!te||de[0]&32768)&&R(X,"tab-selected",K[15]),(!te||de[0]&1)&&R(i,"conf-header-visible",K[0]);let ie=re;re=he(K),re===ie?~re&&ae[re].p(K,de):(oe&&(Ge(),se(ae[ie],1,1,()=>{ae[ie]=null}),Be()),~re?(oe=ae[re],oe?oe.p(K,de):(oe=ae[re]=Q[re](K),oe.c()),Y(oe,1),oe.m(q,null)):oe=null),(!te||de[0]&1)&&R(q,"conf-body-open",K[0]),(!te||de[0]&1)&&R(t,"conf-main-active",K[0])},i(K){te||(Y(oe),te=!0)},o(K){se(oe),te=!1},d(K){K&&(v(e),v(t)),ge&&ge.d(K),~re&&ae[re].d(),ve=!1,nt(Se)}}}function Hf(s,e,t){let i,r,l,a,n,o,c,f,u;Ie(s,bi,ye=>t(19,u=ye));let{showConfig:g}=e,{openConfig:b}=e,{closeConfig:m}=e,w=!0,y=!1,D=wr.value,L=0,A=He.scene;function E(ye){_r(Or)||(A+ye>1?t(2,A=-1):A+ye<0&&t(2,A=2)),t(2,A=He._sanitise("scene",A+ye)),z()}let T=He.roadStyle;function x(ye){t(3,T=He._sanitise("roadStyle",T+ye)),z()}let j=He.seed,X=j,V=!1,ee=!1,Z=He.startNode,U=He.startNode==0?-1:He.startNode,W=!1;function O(){t(4,j=Ed()),X=j,t(5,V=!1),z()}function z(){var ye,at,Tt,Pt;(at=(ye=Js.history[A])==null?void 0:ye[T])!=null&&at[j]?(t(38,Z=(Pt=(Tt=Js.history[A])==null?void 0:Tt[T])==null?void 0:Pt[j].startNode),U=Z):(t(38,Z=0),U=-1),t(7,q=gr(A,T,j,U)),t(8,oe=!1),t(9,te=!1),t(10,Se=!1)}function M(ye){N(ye.target.value)}function N(ye){let at=He._sanitise("seed",ye);if(!_r(Or)&&at.toLowerCase()=="unlockdriftmas"){Or.set(!0),console.log("Enabling driftmas scene and vehicle");return}if(!He._validate("seed",at)){t(5,V=!0),t(4,j=X),z();return}t(5,V=!1),t(4,j=at),X=j,z()}let q=gr(A,T,j,Ee.vehicleIndex),re="",oe=!1,te=!1,ve=!1,Se=!1;function ge(ye){let at=Pd(ye);if(!at){t(8,oe=!0);return}t(2,A=at.scene),t(3,T=at.roadStyle),t(4,j=at.seed),t(38,Z=at.startNode)}function Q(ye){let at=Ad(ye.target.value);t(8,oe=!at),!oe&&(ge(ye.target.value),re=ye.target.value,t(9,te=re!==q))}function ae(ye){q&&(navigator.clipboard.writeText(q),t(10,Se=!0))}function he(){Ce.lockKeys("config")}function K(){Ce.unlockKeys("config")}function de(){V||W||(m(),Td(),He.setMany({...He._value,scene:A,seed:j,startNode:Z,roadStyle:T}),pe.unlockMouse(!0))}function ie(ye){if(rt.set("hasSeenConfig",!0),ye==L&&g){m();return}rt.set("hasSeenConfig",!0),t(35,w=!1),b(),t(1,L=ye)}ct(()=>{He.addListener("any",ye=>{t(4,j=He.seed),t(11,f=!1),t(5,V=!1)}),Ti.addListener(ye=>{W=ye<1}),ne.addListener("touchscreen",ye=>{t(6,ee=!ye)}),wr.addListener(ye=>{t(37,D=ye)}),setTimeout(()=>{rt.hasSeenConfig&&t(35,w=!1)},1e4)});const be=()=>{t(36,y=!0),pe.lockMouse()},ke=()=>{t(36,y=!1),pe.unlockMouse(!1)},Fe=ye=>{(ye.code=="Enter"||ye.code=="NumpadEnter")&&de()},ze=()=>{ie(0)},ft=()=>{ie(1)},Je=()=>{ie(2)},ht=()=>{E(-1)},$e=()=>{E(1)},Pi=()=>{x(-1)},Ft=()=>{x(1)};return s.$$set=ye=>{"showConfig"in ye&&t(0,g=ye.showConfig),"openConfig"in ye&&t(33,b=ye.openConfig),"closeConfig"in ye&&t(34,m=ye.closeConfig)},s.$$.update=()=>{s.$$.dirty[0]&1&&(g||K()),s.$$.dirty[0]&1|s.$$.dirty[1]&112&&t(18,i=w||y||g||D),s.$$.dirty[0]&3&&t(17,r=L==0&&g),s.$$.dirty[0]&3&&t(16,l=L==1&&g),s.$$.dirty[0]&3&&t(15,a=L==2&&g),s.$$.dirty[0]&1&&g==!1&&(t(4,j=He.seed),t(2,A=He.scene),t(3,T=He.roadStyle),t(5,V=!1)),s.$$.dirty[0]&4&&t(14,n=A!=He.scene),s.$$.dirty[0]&8&&t(13,o=T!=He.roadStyle),s.$$.dirty[0]&48&&t(12,c=j!=He.seed&&!V),s.$$.dirty[0]&60|s.$$.dirty[1]&128&&t(11,f=A!=He.scene||j!=He.seed&&!V||T!=He.roadStyle||Z!==He.startNode),s.$$.dirty[0]&29|s.$$.dirty[1]&256&&g&&(ve&&(t(7,q=gr(A,T,j,Ee.vehicleIndex)),t(8,oe=!1),t(9,te=!1)),t(39,ve=!1)),s.$$.dirty[0]&1&&(g||t(39,ve=!0))},[g,L,A,T,j,V,ee,q,oe,te,Se,f,c,o,n,a,l,r,i,u,E,x,O,M,Q,ae,he,K,de,ie,be,ke,Fe,b,m,w,y,D,Z,ve,ze,ft,Je,ht,$e,Pi,Ft]}class zf extends Qe{constructor(e){super(),Ze(this,e,Hf,Of,Xe,{showConfig:0,openConfig:33,closeConfig:34},null,[-1,-1])}}function At(s,{delay:e=0,duration:t=400,easing:i=Fn}={}){const r=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:i,css:l=>`opacity: ${l*r}`}}function Ff(s){let e,t,i,r,l,a,n,o="",c,f;return{c(){e=p("div"),t=p("div"),i=J(s[2]),r=k(),l=p("div"),a=p("div"),n=p("div"),n.innerHTML=o,this.h()},l(u){e=_(u,"DIV",{class:!0});var g=C(e);t=_(g,"DIV",{class:!0,title:!0});var b=C(t);i=$(b,s[2]),b.forEach(v),r=I(g),l=_(g,"DIV",{class:!0});var m=C(l);a=_(m,"DIV",{class:!0});var w=C(a);n=_(w,"DIV",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1h4l4io"&&(n.innerHTML=o),w.forEach(v),m.forEach(v),g.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(t,"title",s[3]),R(t,"setting-help",!!s[3]),h(n,"class","bool-fill svelte-1ik2n8h"),R(n,"bool-filled",s[5]),h(a,"class","bool-box svelte-1ik2n8h"),h(l,"class","setting-element"),h(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(u,g){P(u,e,g),d(e,t),d(t,i),d(e,r),d(e,l),d(l,a),d(a,n),c||(f=B(a,"click",s[6]),c=!0)},p(u,[g]){g&4&&_e(i,u[2]),g&8&&h(t,"title",u[3]),g&8&&R(t,"setting-help",!!u[3]),g&32&&R(n,"bool-filled",u[5]),g&16&&R(e,"setting-disabled",u[4])},i:me,o:me,d(u){u&&v(e),c=!1,f()}}}function Gf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:l}=e,{settingDesc:a=""}=e,{disabled:n=!1}=e,o=i[r];const c=u=>{t(5,o=u)};ct(()=>(i.addListener(r,c),()=>{i.removeListener(r,c)}));const f=()=>i.set(r,!o);return s.$$set=u=>{"liveSetting"in u&&t(0,i=u.liveSetting),"settingKey"in u&&t(1,r=u.settingKey),"settingLabel"in u&&t(2,l=u.settingLabel),"settingDesc"in u&&t(3,a=u.settingDesc),"disabled"in u&&t(4,n=u.disabled)},[i,r,l,a,n,o,f]}class Rn extends Qe{constructor(e){super(),Ze(this,e,Gf,Ff,Xe,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4})}}function Bf(s){let e,t,i,r,l,a,n,o,c,f,u,g,b,m=s[6][s[7]]+"",w,y,D;return{c(){e=p("div"),t=p("div"),i=J(s[2]),r=k(),l=p("div"),a=p("div"),n=p("div"),o=p("div"),c=J("◂"),f=k(),u=p("div"),g=J("▸"),b=k(),w=J(m),this.h()},l(L){e=_(L,"DIV",{class:!0});var A=C(e);t=_(A,"DIV",{class:!0,title:!0});var E=C(t);i=$(E,s[2]),E.forEach(v),r=I(A),l=_(A,"DIV",{class:!0});var T=C(l);a=_(T,"DIV",{class:!0});var x=C(a);n=_(x,"DIV",{class:!0});var j=C(n);o=_(j,"DIV",{class:!0,style:!0});var X=C(o);c=$(X,"◂"),X.forEach(v),f=I(j),u=_(j,"DIV",{class:!0,style:!0});var V=C(u);g=$(V,"▸"),V.forEach(v),j.forEach(v),b=I(x),w=$(x,m),x.forEach(v),T.forEach(v),A.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(t,"title",s[3]),R(t,"setting-help",!!s[3]),h(o,"class","enum-arrow svelte-71g5t7"),le(o,"text-align","left"),le(o,"opacity",!s[5]&&s[7]==0?"0":"1"),h(u,"class","enum-arrow svelte-71g5t7"),le(u,"text-align","right"),le(u,"opacity",!s[5]&&s[7]==s[6].length-1?"0":"1"),h(n,"class","enum-arrows svelte-71g5t7"),h(a,"class","enum-container svelte-71g5t7"),h(l,"class","setting-element"),h(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(L,A){P(L,e,A),d(e,t),d(t,i),d(e,r),d(e,l),d(l,a),d(a,n),d(n,o),d(o,c),d(n,f),d(n,u),d(u,g),d(a,b),d(a,w),y||(D=[B(o,"click",s[8]),B(u,"click",s[9])],y=!0)},p(L,[A]){A&4&&_e(i,L[2]),A&8&&h(t,"title",L[3]),A&8&&R(t,"setting-help",!!L[3]),A&160&&le(o,"opacity",!L[5]&&L[7]==0?"0":"1"),A&224&&le(u,"opacity",!L[5]&&L[7]==L[6].length-1?"0":"1"),A&192&&m!==(m=L[6][L[7]]+"")&&_e(w,m),A&16&&R(e,"setting-disabled",L[4])},i:me,o:me,d(L){L&&v(e),y=!1,nt(D)}}}function qf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:l}=e,{settingDesc:a=""}=e,{disabled:n=!1}=e,{wraparound:o=!0}=e,{labels:c}=e,f=i[r];const u=m=>{t(7,f=m)};ct(()=>(i.addListener(r,u),()=>{i.removeListener(r,u)}));const g=()=>{o?i.set(r,f-1<0?c.length-1:f-1):f>0&&i.set(r,f-1)},b=()=>{o?i.set(r,(f+1)%c.length):f<c.length-1&&i.set(r,f+1)};return s.$$set=m=>{"liveSetting"in m&&t(0,i=m.liveSetting),"settingKey"in m&&t(1,r=m.settingKey),"settingLabel"in m&&t(2,l=m.settingLabel),"settingDesc"in m&&t(3,a=m.settingDesc),"disabled"in m&&t(4,n=m.disabled),"wraparound"in m&&t(5,o=m.wraparound),"labels"in m&&t(6,c=m.labels)},[i,r,l,a,n,o,c,f,g,b]}class Un extends Qe{constructor(e){super(),Ze(this,e,qf,Bf,Xe,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4,wraparound:5,labels:6})}}function Wf(s){let e,t,i,r,l,a,n,o,c,f,u,g,b,m,w,y;return{c(){e=p("div"),t=p("div"),i=J(s[0]),r=k(),l=p("div"),a=p("div"),n=p("input"),o=k(),c=p("div"),f=p("div"),u=k(),g=p("div"),b=k(),m=p("div"),this.h()},l(D){e=_(D,"DIV",{class:!0});var L=C(e);t=_(L,"DIV",{class:!0,title:!0});var A=C(t);i=$(A,s[0]),A.forEach(v),r=I(L),l=_(L,"DIV",{class:!0});var E=C(l);a=_(E,"DIV",{class:!0});var T=C(a);n=_(T,"INPUT",{class:!0,type:!0}),o=I(T),c=_(T,"DIV",{class:!0});var x=C(c);f=_(x,"DIV",{class:!0,style:!0}),C(f).forEach(v),u=I(x),g=_(x,"DIV",{class:!0}),C(g).forEach(v),b=I(x),m=_(x,"DIV",{class:!0,style:!0}),C(m).forEach(v),x.forEach(v),T.forEach(v),E.forEach(v),L.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(t,"title",s[1]),R(t,"setting-help",!!s[1]),n.disabled=s[6],h(n,"class","slider-val svelte-9omzwl"),h(n,"type","number"),h(f,"class","slider-left svelte-9omzwl"),le(f,"flex-basis",s[5]+"%"),le(f,"margin-right",s[5]==0?"0":"4px"),R(f,"touch-track",s[6]),h(g,"class","slider-handle svelte-9omzwl"),R(g,"touch-track",s[6]),h(m,"class","slider-right svelte-9omzwl"),le(m,"flex-basis",100-s[5]+"%"),le(m,"margin-left",s[5]==100?"0":"4px"),R(m,"touch-track",s[6]),h(c,"class","slider-track svelte-9omzwl"),R(c,"touch-track",s[6]),h(a,"class","slider-cont svelte-9omzwl"),h(l,"class","setting-element"),h(e,"class","setting-row"),R(e,"setting-disabled",s[2])},m(D,L){P(D,e,L),d(e,t),d(t,i),d(e,r),d(e,l),d(l,a),d(a,n),br(n,s[3]),d(a,o),d(a,c),d(c,f),d(c,u),d(c,g),d(c,b),d(c,m),s[17](c),w||(y=[B(n,"input",s[16]),B(n,"change",s[10]),B(c,"mousedown",s[7]),B(c,"touchstart",s[8]),B(c,"touchmove",s[9])],w=!0)},p(D,[L]){L&1&&_e(i,D[0]),L&2&&h(t,"title",D[1]),L&2&&R(t,"setting-help",!!D[1]),L&64&&(n.disabled=D[6]),L&8&&Xo(n.value)!==D[3]&&br(n,D[3]),L&32&&le(f,"flex-basis",D[5]+"%"),L&32&&le(f,"margin-right",D[5]==0?"0":"4px"),L&64&&R(f,"touch-track",D[6]),L&64&&R(g,"touch-track",D[6]),L&32&&le(m,"flex-basis",100-D[5]+"%"),L&32&&le(m,"margin-left",D[5]==100?"0":"4px"),L&64&&R(m,"touch-track",D[6]),L&64&&R(c,"touch-track",D[6]),L&4&&R(e,"setting-disabled",D[2])},i:me,o:me,d(D){D&&v(e),s[17](null),w=!1,nt(y)}}}function jf(s,e,t){let i,r;Ie(s,bi,N=>t(6,r=N));let{liveSetting:l}=e,{settingKey:a}=e,{settingLabel:n}=e,{settingDesc:o=""}=e,{disabled:c=!1}=e,{min:f=0}=e,{max:u=100}=e,{precision:g=1}=e,b=u-f,m=l[a];m.toFixed&&(m=m.toFixed(g));let w,y,D,L,A;const E=N=>{t(3,m=N)};let T=!1;const x=N=>{T=N};ct(()=>{l.addListener(a,E),window.addEventListener("touchend",U);let N=bi.subscribe(x);return()=>{l.removeListener(a,E),window.removeEventListener("mousemove",X),window.removeEventListener("touchmove",X),window.removeEventListener("touchend",U),N()}});let j;const X=N=>{let q;!T||window.innerWidth>window.innerHeight?q=Math.max(Math.min(1,(N.clientX-y)/D),0):q=Math.max(Math.min(1,(N.clientY-L)/A),0),q=q*b+f,q=Math.round(q*10**g)/10**g,l.set(a,q)},V=N=>{window.removeEventListener("mousemove",X)},ee=N=>{j=w.getBoundingClientRect(),y=j.left,D=j.width-10,L=j.top,A=j.height-10,X(N),window.addEventListener("mousemove",X),window.addEventListener("mouseup",V,{once:!0})},Z=N=>{window.addEventListener("touchmove",W,{passive:!1}),window.addEventListener("touchend",U),j=w.getBoundingClientRect(),y=j.left,D=j.width-10,L=j.top,A=j.height-10,W(N)},U=N=>{window.removeEventListener("touchmove",W),window.removeEventListener("touchend",U)},W=N=>{N.changedTouches.length&&(N.clientX=N.changedTouches[0].clientX,N.clientY=N.changedTouches[0].clientY,N.preventDefault(),N.stopPropagation(),X(N))},O=N=>{let q=N.target.value;q=Math.round(q*10**g)/10**g,q=Math.min(Math.max(f,q),u),q=""+q,q=parseFloat(q.replace(",",".")),l._validate(a,q)?l.set(a,q):N.target.value=Math.min(Math.max(f,m),u)};function z(){m=Xo(this.value),t(3,m)}function M(N){yt[N?"unshift":"push"](()=>{w=N,t(4,w)})}return s.$$set=N=>{"liveSetting"in N&&t(11,l=N.liveSetting),"settingKey"in N&&t(12,a=N.settingKey),"settingLabel"in N&&t(0,n=N.settingLabel),"settingDesc"in N&&t(1,o=N.settingDesc),"disabled"in N&&t(2,c=N.disabled),"min"in N&&t(13,f=N.min),"max"in N&&t(14,u=N.max),"precision"in N&&t(15,g=N.precision)},s.$$.update=()=>{s.$$.dirty&24584&&t(5,i=Math.max(Math.min(100,(m-f)/(u-f)*100),0))},[n,o,c,m,w,i,r,ee,Z,W,O,l,a,f,u,g,z,M]}class Vn extends Qe{constructor(e){super(),Ze(this,e,jf,Wf,Xe,{liveSetting:11,settingKey:12,settingLabel:0,settingDesc:1,disabled:2,min:13,max:14,precision:15})}}function Ml(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function El(s,e,t){const i=s.slice();return i[7]=e[t][0],i[8]=e[t][1],i}function Al(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Yf(s){let e,t,i=Oe(Object.entries(s[1])),r=[];for(let a=0;a<i.length;a+=1)r[a]=Pl(Ml(s,i,a));const l=a=>se(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=Le()},l(a){for(let n=0;n<r.length;n+=1)r[n].l(a);e=Le()},m(a,n){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(a,n);P(a,e,n),t=!0},p(a,n){if(n&23){i=Oe(Object.entries(a[1]));let o;for(o=0;o<i.length;o+=1){const c=Ml(a,i,o);r[o]?(r[o].p(c,n),Y(r[o],1)):(r[o]=Pl(c),r[o].c(),Y(r[o],1),r[o].m(e.parentNode,e))}for(Ge(),o=i.length;o<r.length;o+=1)l(o);Be()}},i(a){if(!t){for(let n=0;n<i.length;n+=1)Y(r[n]);t=!0}},o(a){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)se(r[n]);t=!1},d(a){a&&v(e),_t(r,a)}}}function Kf(s){let e,t,i=Oe(Object.entries(s[1])),r=[];for(let a=0;a<i.length;a+=1)r[a]=Ul(El(s,i,a));const l=a=>se(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=Le()},l(a){for(let n=0;n<r.length;n+=1)r[n].l(a);e=Le()},m(a,n){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(a,n);P(a,e,n),t=!0},p(a,n){if(n&63){i=Oe(Object.entries(a[1]));let o;for(o=0;o<i.length;o+=1){const c=El(a,i,o);r[o]?(r[o].p(c,n),Y(r[o],1)):(r[o]=Ul(c),r[o].c(),Y(r[o],1),r[o].m(e.parentNode,e))}for(Ge(),o=i.length;o<r.length;o+=1)l(o);Be()}},i(a){if(!t){for(let n=0;n<i.length;n+=1)Y(r[n]);t=!0}},o(a){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)se(r[n]);t=!1},d(a){a&&v(e),_t(r,a)}}}function Tl(s){let e,t,i,r;const l=[Zf,Qf,Xf],a=[];function n(o,c){return o[12].type==Zi.Boolean?0:o[12].type==Zi.Enum?1:o[12].type==Zi.Range?2:-1}return~(e=n(s))&&(t=a[e]=l[e](s)),{c(){t&&t.c(),i=Le()},l(o){t&&t.l(o),i=Le()},m(o,c){~e&&a[e].m(o,c),P(o,i,c),r=!0},p(o,c){let f=e;e=n(o),e===f?~e&&a[e].p(o,c):(t&&(Ge(),se(a[f],1,1,()=>{a[f]=null}),Be()),~e?(t=a[e],t?t.p(o,c):(t=a[e]=l[e](o),t.c()),Y(t,1),t.m(i.parentNode,i)):t=null)},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),~e&&a[e].d(o)}}}function Xf(s){let e,t;return e=new Vn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&2&&(l.min=i[12].min),r&2&&(l.max=i[12].max),r&2&&(l.precision=i[12].precision),r&6&&(l.disabled=i[2].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Qf(s){let e,t;return e=new Un({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&2&&(l.labels=i[12].labels),r&2&&(l.wraparound=i[12].wraparound),r&6&&(l.disabled=i[2].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Zf(s){let e,t;return e=new Rn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&6&&(l.disabled=i[2].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Pl(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&Tl(s);return{c(){i&&i.c(),e=Le()},l(r){i&&i.l(r),e=Le()},m(r,l){i&&i.m(r,l),P(r,e,l),t=!0},p(r,l){!r[4]||!r[12].hideForTouchscreen?i?(i.p(r,l),l&18&&Y(i,1)):(i=Tl(r),i.c(),Y(i,1),i.m(e.parentNode,e)):i&&(Ge(),se(i,1,1,()=>{i=null}),Be())},i(r){t||(Y(i),t=!0)},o(r){se(i),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Nl(s){let e,t=s[7]+"",i,r,l,a="reset",n,o,c,f,u;function g(){return s[6](s[7])}let b=Oe(Object.entries(s[8])),m=[];for(let y=0;y<b.length;y+=1)m[y]=Rl(Al(s,b,y));const w=y=>se(m[y],1,1,()=>{m[y]=null});return{c(){e=p("div"),i=J(t),r=k(),l=p("div"),l.textContent=a,n=k();for(let y=0;y<m.length;y+=1)m[y].c();o=Le(),this.h()},l(y){e=_(y,"DIV",{class:!0});var D=C(e);i=$(D,t),r=I(D),l=_(D,"DIV",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-1buwq7v"&&(l.textContent=a),D.forEach(v),n=I(y);for(let L=0;L<m.length;L+=1)m[L].l(y);o=Le(),this.h()},h(){h(l,"class","setting-section-header-reset"),h(e,"class","setting-section-header")},m(y,D){P(y,e,D),d(e,i),d(e,r),d(e,l),P(y,n,D);for(let L=0;L<m.length;L+=1)m[L]&&m[L].m(y,D);P(y,o,D),c=!0,f||(u=B(l,"click",g),f=!0)},p(y,D){if(s=y,(!c||D&2)&&t!==(t=s[7]+"")&&_e(i,t),D&31){b=Oe(Object.entries(s[8]));let L;for(L=0;L<b.length;L+=1){const A=Al(s,b,L);m[L]?(m[L].p(A,D),Y(m[L],1)):(m[L]=Rl(A),m[L].c(),Y(m[L],1),m[L].m(o.parentNode,o))}for(Ge(),L=b.length;L<m.length;L+=1)w(L);Be()}},i(y){if(!c){for(let D=0;D<b.length;D+=1)Y(m[D]);c=!0}},o(y){m=m.filter(Boolean);for(let D=0;D<m.length;D+=1)se(m[D]);c=!1},d(y){y&&(v(e),v(n),v(o)),_t(m,y),f=!1,u()}}}function xl(s){let e,t,i,r;const l=[eu,$f,Jf],a=[];function n(o,c){return o[12].type==Zi.Boolean?0:o[12].type==Zi.Enum?1:o[12].type==Zi.Range?2:-1}return~(e=n(s))&&(t=a[e]=l[e](s)),{c(){t&&t.c(),i=Le()},l(o){t&&t.l(o),i=Le()},m(o,c){~e&&a[e].m(o,c),P(o,i,c),r=!0},p(o,c){let f=e;e=n(o),e===f?~e&&a[e].p(o,c):(t&&(Ge(),se(a[f],1,1,()=>{a[f]=null}),Be()),~e?(t=a[e],t?t.p(o,c):(t=a[e]=l[e](o),t.c()),Y(t,1),t.m(i.parentNode,i)):t=null)},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),~e&&a[e].d(o)}}}function Jf(s){let e,t;return e=new Vn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&2&&(l.min=i[12].min),r&2&&(l.max=i[12].max),r&2&&(l.precision=i[12].precision),r&14&&(l.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function $f(s){let e,t;return e=new Un({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&2&&(l.labels=i[12].labels),r&2&&(l.wraparound=i[12].wraparound),r&14&&(l.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function eu(s){let e,t;return e=new Rn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&1&&(l.liveSetting=i[0]),r&2&&(l.settingKey=i[11]),r&2&&(l.settingLabel=i[12].readable),r&2&&(l.settingDesc=i[12].desc),r&14&&(l.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Rl(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&xl(s);return{c(){i&&i.c(),e=Le()},l(r){i&&i.l(r),e=Le()},m(r,l){i&&i.m(r,l),P(r,e,l),t=!0},p(r,l){!r[4]||!r[12].hideForTouchscreen?i?(i.p(r,l),l&18&&Y(i,1)):(i=xl(r),i.c(),Y(i,1),i.m(e.parentNode,e)):i&&(Ge(),se(i,1,1,()=>{i=null}),Be())},i(r){t||(Y(i),t=!0)},o(r){se(i),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Ul(s){let e,t,i=(!s[4]||!s[8].hideForTouchscreen)&&Nl(s);return{c(){i&&i.c(),e=Le()},l(r){i&&i.l(r),e=Le()},m(r,l){i&&i.m(r,l),P(r,e,l),t=!0},p(r,l){!r[4]||!r[8].hideForTouchscreen?i?(i.p(r,l),l&18&&Y(i,1)):(i=Nl(r),i.c(),Y(i,1),i.m(e.parentNode,e)):i&&(Ge(),se(i,1,1,()=>{i=null}),Be())},i(r){t||(Y(i),t=!0)},o(r){se(i),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function tu(s){let e,t,i,r;const l=[Kf,Yf],a=[];function n(o,c){return o[1].oneSection?1:0}return t=n(s),i=a[t]=l[t](s),{c(){e=p("div"),i.c(),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);i.l(c),c.forEach(v),this.h()},h(){h(e,"class","settings-list")},m(o,c){P(o,e,c),a[t].m(e,null),r=!0},p(o,[c]){let f=t;t=n(o),t===f?a[t].p(o,c):(Ge(),se(a[f],1,1,()=>{a[f]=null}),Be(),i=a[t],i?i.p(o,c):(i=a[t]=l[t](o),i.c()),Y(i,1),i.m(e,null))},i(o){r||(Y(i),r=!0)},o(o){se(i),r=!1},d(o){o&&v(e),a[t].d()}}}function iu(s,e,t){let i;Ie(s,bi,f=>t(4,i=f));let{liveSetting:r}=e,{settingsMeta:l}=e,a=[],n=[];ct(()=>{let f=[],u=[];for(let g in l)for(let b in l[g]){if(l[g][b].overrides){let m=w=>{t(2,a=w?l[g][b].overrides:[])};f.push([b,m]),r.addListener(b,m)}if(l[g][b].enables){let m=w=>{t(3,n=w?[]:l[g][b].enables)};u.push([b,m]),r.addListener(b,m)}}return()=>{for(let g of f)r.removeListener(g[0],g[1]);f.length=0;for(let g of u)r.removeListener(g[0],g[1]);u.length=0}});function o(f){if(!(f in l)){console.warn("Cannot reset unknown section to default: "+f);return}for(let u in l[f])u!="hideForTouchscreen"&&r.set(u)}const c=f=>o(f);return s.$$set=f=>{"liveSetting"in f&&t(0,r=f.liveSetting),"settingsMeta"in f&&t(1,l=f.settingsMeta)},[r,l,a,n,i,o,c]}class Is extends Qe{constructor(e){super(),Ze(this,e,iu,tu,Xe,{liveSetting:0,settingsMeta:1})}}function Vl(s){let e,t,i,r,l,a;return{c(){e=p("div"),t=p("div"),i=k(),r=p("div"),this.h()},l(n){e=_(n,"DIV",{class:!0});var o=C(e);t=_(o,"DIV",{class:!0,style:!0}),C(t).forEach(v),i=I(o),r=_(o,"DIV",{class:!0}),C(r).forEach(v),o.forEach(v),this.h()},h(){h(t,"class","audio-slider-handle svelte-1hs4ew6"),le(t,"right",(100-s[4]*100)*.8+"%"),h(r,"class","audio-slider-track svelte-1hs4ew6"),h(e,"class","audio-slider svelte-1hs4ew6")},m(n,o){P(n,e,o),d(e,t),d(e,i),d(e,r),s[10](e),l||(a=[B(e,"mousedown",s[8]),B(e,"touchstart",s[8]),B(e,"touchmove",s[9])],l=!0)},p(n,o){o&16&&le(t,"right",(100-n[4]*100)*.8+"%")},d(n){n&&v(e),s[10](null),l=!1,nt(a)}}}function su(s){let e,t,i,r,l,a,n=s[1]&&Vl(s);return{c(){e=p("div"),t=p("img"),r=k(),n&&n.c(),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);t=_(c,"IMG",{class:!0,src:!0}),r=I(c),n&&n.l(c),c.forEach(v),this.h()},h(){h(t,"class","ui-settings-bar-icon"),pt(t.src,i="/img/ico_volume_"+(s[3]?"off":"on")+".svg")||h(t,"src",i),h(e,"class","audio-control svelte-1hs4ew6")},m(o,c){P(o,e,c),d(e,t),d(e,r),n&&n.m(e,null),l||(a=[B(t,"click",s[7]),B(e,"mouseenter",s[11]),B(e,"mouseleave",s[12])],l=!0)},p(o,[c]){c&8&&!pt(t.src,i="/img/ico_volume_"+(o[3]?"off":"on")+".svg")&&h(t,"src",i),o[1]?n?n.p(o,c):(n=Vl(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:me,o:me,d(o){o&&v(e),n&&n.d(),l=!1,nt(a)}}}function ru(s,e,t){let i=!1,r=!1,l=!1,a=.5,n=.5,o=!1,c,f,u=!1;const g=x=>{u=x};let{onHasFocus:b=()=>{}}=e;ct(()=>{Ys.addListener("master",j=>{t(3,l=j==0),t(4,n=j)}),pe.addListener(Fi.Mute,m);let x=bi.subscribe(g);return()=>{pe.removeListener(Fi.Mute,m),x()}});const m=()=>{l?Ys.set("master",a):(a=n,Ys.set("master",0))},w=x=>{f=c.getBoundingClientRect(),t(5,o=!0),y(x),window.addEventListener("mousemove",L),window.addEventListener("mouseup",D,{once:!0})},y=x=>{var j;(j=x.changedTouches)!=null&&j.length&&(x.clientX=x.changedTouches[0].clientX,x.clientY=x.changedTouches[0].clientY),x.preventDefault(),x.stopPropagation(),L(x)},D=x=>{t(5,o=!1),r||t(1,i=!1),b(i),window.removeEventListener("mousemove",L)},L=x=>{let j;!u||window.innerWidth>window.innerHeight?j=(x.clientX-f.left-f.width*.2)/(f.width*.8):j=(x.clientY-f.top-f.height*.2)/(f.height*.8),Ys.set("master",j)};function A(x){yt[x?"unshift":"push"](()=>{c=x,t(6,c)})}const E=()=>{b(!0),t(2,r=!0),t(1,i=!0)},T=()=>{t(2,r=!1),t(1,i=o),b(i)};return s.$$set=x=>{"onHasFocus"in x&&t(0,b=x.onHasFocus)},[b,i,r,l,n,o,c,m,w,y,A,E,T]}class au extends Qe{constructor(e){super(),Ze(this,e,ru,su,Xe,{onHasFocus:0})}}const Hs={Forward:"Forwards",Backward:"Backwards",Left:"Left",Right:"Right",Boost:"Boost",Handbrake:"Handbrake",ToggleHandbrake:"Toggle handbrake",Autodrive:"Toggle autodrive",AutodriveMode:"Toggle autodrive mode",Reset:"Reset",Headlights:"Toggle headlights",StickySteer:"Locked steering",NextScene:"Next scene",PrevScene:"Prev scene",CameraMode:"Change camera",Mute:"Mute",Pause:"Pause",ToggleUI:"Toggle UI",ToggleCinecam:"Toggle cinecam",ToggleDebug:"Toggle debug overlay",ToggleSpeedControl:"Toggle cruise control",ToggleSpeedControlMode:"Toggle cruise control mode",IncSpeedControl:"Cruise control increase",DecSpeedControl:"Cruise control decrease",CameraLeft:"Camera left",CameraRight:"Camera right",CameraUp:"Camera up",CameraDown:"Camera down"};function Ol(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function lu(s){let e;return{c(){e=J("reset")},l(t){e=$(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function ou(s){let e;return{c(){e=J("confirm")},l(t){e=$(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function Hl(s){let e,t="+",i,r;function l(...a){return s[7](s[11],...a)}return{c(){e=p("div"),e.textContent=t,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){h(e,"class","map-element-delete")},m(a,n){P(a,e,n),i||(r=B(e,"click",l),i=!0)},p(a,n){s=a},d(a){a&&v(e),i=!1,r()}}}function zl(s){let e=(s[11]==s[0]?"Press a key":s[12].replace("Key",""))+"",t;return{c(){t=J(e)},l(i){t=$(i,e)},m(i,r){P(i,t,r)},p(i,r){r&5&&e!==(e=(i[11]==i[0]?"Press a key":i[12].replace("Key",""))+"")&&_e(t,e)},d(i){i&&v(t)}}}function Fl(s){let e,t,i=Hs[s[11]]+"",r,l,a,n,o,c,f,u,g=s[12]&&s[0]!=s[11]&&Hl(s),b=(s[12]||s[0]==s[11])&&zl(s);function m(){return s[8](s[11])}return{c(){e=p("div"),t=p("div"),r=J(i),l=k(),a=p("div"),n=p("div"),g&&g.c(),o=k(),b&&b.c(),c=k(),this.h()},l(w){e=_(w,"DIV",{class:!0});var y=C(e);t=_(y,"DIV",{class:!0});var D=C(t);r=$(D,i),D.forEach(v),l=I(y),a=_(y,"DIV",{class:!0});var L=C(a);n=_(L,"DIV",{class:!0});var A=C(n);g&&g.l(A),o=I(A),b&&b.l(A),A.forEach(v),L.forEach(v),c=I(y),y.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(n,"class","map-element"),R(n,"map-element-mapping",s[11]==s[0]),h(a,"class","setting-element"),h(e,"class","setting-row")},m(w,y){P(w,e,y),d(e,t),d(t,r),d(e,l),d(e,a),d(a,n),g&&g.m(n,null),d(n,o),b&&b.m(n,null),d(e,c),f||(u=B(a,"click",m),f=!0)},p(w,y){s=w,y&4&&i!==(i=Hs[s[11]]+"")&&_e(r,i),s[12]&&s[0]!=s[11]?g?g.p(s,y):(g=Hl(s),g.c(),g.m(n,o)):g&&(g.d(1),g=null),s[12]||s[0]==s[11]?b?b.p(s,y):(b=zl(s),b.c(),b.m(n,null)):b&&(b.d(1),b=null),y&5&&R(n,"map-element-mapping",s[11]==s[0])},d(w){w&&v(e),g&&g.d(),b&&b.d(),f=!1,u()}}}function nu(s){let e,t,i,r,l,a,n;function o(b,m){return b[1]?ou:lu}let c=o(s),f=c(s),u=Oe(Object.entries(s[2])),g=[];for(let b=0;b<u.length;b+=1)g[b]=Fl(Ol(s,u,b));return{c(){e=p("div"),t=p("div"),i=J(`Mapping\r
        `),r=p("div"),f.c(),l=k();for(let b=0;b<g.length;b+=1)g[b].c();this.h()},l(b){e=_(b,"DIV",{class:!0,style:!0});var m=C(e);t=_(m,"DIV",{class:!0});var w=C(t);i=$(w,`Mapping\r
        `),r=_(w,"DIV",{class:!0});var y=C(r);f.l(y),y.forEach(v),w.forEach(v),l=I(m);for(let D=0;D<g.length;D+=1)g[D].l(m);m.forEach(v),this.h()},h(){h(r,"class","setting-section-header-reset"),h(t,"class","setting-section-header"),h(e,"class","settings-list"),le(e,"padding-top","1rem")},m(b,m){P(b,e,m),d(e,t),d(t,i),d(t,r),f.m(r,null),d(e,l);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(e,null);a||(n=B(r,"click",s[6]),a=!0)},p(b,[m]){if(c!==(c=o(b))&&(f.d(1),f=c(b),f&&(f.c(),f.m(r,null))),m&29){u=Oe(Object.entries(b[2]));let w;for(w=0;w<u.length;w+=1){const y=Ol(b,u,w);g[w]?g[w].p(y,m):(g[w]=Fl(y),g[w].c(),g[w].m(e,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=u.length}},i:me,o:me,d(b){b&&v(e),f.d(),_t(g,b),a=!1,n()}}}function du(s,e,t){let i=null;function r(b){if(i!=null){for(let m in gi.mapping)gi.mapping[m]==b.code&&(gi.mapping[m]=null);gi.set("mapping",{...gi.mapping,[i]:b.code}),t(0,i=null),Ce.unlockKeys("keymap")}}function l(b){if(i==b){t(0,i=null),window.removeEventListener("keydown",r),Ce.unlockKeys("keymap");return}i==null&&(window.addEventListener("keydown",r,{once:!0}),Ce.lockKeys("keymap")),t(0,i=b)}function a(b){gi.set("mapping",{...gi.mapping,[b]:null})}let n=!1;function o(){n?(gi.set("mapping",{...Nd}),t(1,n=!1)):t(1,n=!0)}let c=gi.mapping;return ct(()=>(gi.addListener("mapping",b=>{t(2,c=b)}),()=>{window.removeEventListener("keydown",r),Ce.unlockKeys("keymap")})),[i,n,c,l,a,o,()=>o(),(b,m)=>{a(b),m.stopPropagation()},b=>l(b)]}class cu extends Qe{constructor(e){super(),Ze(this,e,du,nu,Xe,{})}}function Gl(s,e,t){const i=s.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function hu(s){let e;return{c(){e=J("reset")},l(t){e=$(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function fu(s){let e;return{c(){e=J("confirm")},l(t){e=$(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function uu(s){let e,t=Oe(Object.entries(s[3])),i=[];for(let r=0;r<t.length;r+=1)i[r]=jl(Gl(s,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Le()},l(r){for(let l=0;l<i.length;l+=1)i[l].l(r);e=Le()},m(r,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,l);P(r,e,l)},p(r,l){if(l&32462){t=Oe(Object.entries(r[3]));let a;for(a=0;a<t.length;a+=1){const n=Gl(r,t,a);i[a]?i[a].p(n,l):(i[a]=jl(n),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(r){r&&v(e),_t(i,r)}}}function vu(s){let e,t,i=s[4]+1+"",r,l;return{c(){e=p("div"),t=J("Controller "),r=J(i),l=J(" not detected"),this.h()},l(a){e=_(a,"DIV",{style:!0});var n=C(e);t=$(n,"Controller "),r=$(n,i),l=$(n," not detected"),n.forEach(v),this.h()},h(){le(e,"font-weight","600"),le(e,"text-align","center"),le(e,"font-style","italic")},m(a,n){P(a,e,n),d(e,t),d(e,r),d(e,l)},p(a,n){n&16&&i!==(i=a[4]+1+"")&&_e(r,i)},d(a){a&&v(e)}}}function Bl(s){let e,t="+",i,r,l,a;function n(...c){return s[16](s[25],...c)}let o=s[26].type==ds.Axis&&ql(s);return{c(){e=p("div"),e.textContent=t,i=k(),o&&o.c(),r=Le(),this.h()},l(c){e=_(c,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-14ayu74"&&(e.textContent=t),i=I(c),o&&o.l(c),r=Le(),this.h()},h(){h(e,"class","map-element-delete")},m(c,f){P(c,e,f),P(c,i,f),o&&o.m(c,f),P(c,r,f),l||(a=B(e,"click",n),l=!0)},p(c,f){s=c,s[26].type==ds.Axis?o?o.p(s,f):(o=ql(s),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(c){c&&(v(e),v(i),v(r)),o&&o.d(c),l=!1,a()}}}function ql(s){let e,t,i,r;function l(c,f){return c[26].sign<0?gu:mu}let a=l(s),n=a(s);function o(...c){return s[17](s[26],...c)}return{c(){e=p("div"),n.c(),this.h()},l(c){e=_(c,"DIV",{class:!0,title:!0});var f=C(e);n.l(f),f.forEach(v),this.h()},h(){h(e,"class","axis-mode-toggle svelte-6wmc2y"),h(e,"title",t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])},m(c,f){P(c,e,f),n.m(e,null),i||(r=B(e,"click",o),i=!0)},p(c,f){s=c,a===(a=l(s))&&n?n.p(s,f):(n.d(1),n=a(s),n&&(n.c(),n.m(e,null))),f&8&&t!==(t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])&&h(e,"title",t)},d(c){c&&v(e),n.d(),i=!1,r()}}}function mu(s){let e,t=s[11][s[26].mode??0]+"",i;return{c(){e=new ta(!1),i=Le(),this.h()},l(r){e=ia(r,!1),i=Le(),this.h()},h(){e.a=i},m(r,l){e.m(t,r,l),P(r,i,l)},p(r,l){l&8&&t!==(t=r[11][r[26].mode??0]+"")&&e.p(t)},d(r){r&&(v(i),e.d())}}}function gu(s){let e,t=s[12][s[26].mode??0]+"",i;return{c(){e=new ta(!1),i=Le(),this.h()},l(r){e=ia(r,!1),i=Le(),this.h()},h(){e.a=i},m(r,l){e.m(t,r,l),P(r,i,l)},p(r,l){l&8&&t!==(t=r[12][r[26].mode??0]+"")&&e.p(t)},d(r){r&&(v(i),e.d())}}}function Wl(s){let e=(s[25]==s[1]?"Press an input":s[9](s[26]))+"",t;return{c(){t=J(e)},l(i){t=$(i,e)},m(i,r){P(i,t,r)},p(i,r){r&10&&e!==(e=(i[25]==i[1]?"Press an input":i[9](i[26]))+"")&&_e(t,e)},d(i){i&&v(t)}}}function jl(s){let e,t,i=Hs[s[25]]+"",r,l,a,n,o,c,f,u,g,b,m=s[26]&&s[1]!=s[25]&&Bl(s),w=(s[26]||s[1]==s[25])&&Wl(s);function y(){return s[18](s[25])}return{c(){e=p("div"),t=p("div"),r=J(i),l=k(),a=p("div"),n=p("div"),m&&m.c(),o=k(),w&&w.c(),c=k(),f=p("div"),u=k(),this.h()},l(D){e=_(D,"DIV",{class:!0});var L=C(e);t=_(L,"DIV",{class:!0});var A=C(t);r=$(A,i),A.forEach(v),l=I(L),a=_(L,"DIV",{class:!0});var E=C(a);n=_(E,"DIV",{class:!0});var T=C(n);m&&m.l(T),o=I(T),w&&w.l(T),c=I(T),f=_(T,"DIV",{class:!0,style:!0}),C(f).forEach(v),T.forEach(v),E.forEach(v),u=I(L),L.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(f,"class","gamepad-value svelte-6wmc2y"),le(f,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),h(n,"class","map-element"),R(n,"map-element-mapping",s[25]==s[1]),h(a,"class","setting-element"),h(e,"class","setting-row")},m(D,L){P(D,e,L),d(e,t),d(t,r),d(e,l),d(e,a),d(a,n),m&&m.m(n,null),d(n,o),w&&w.m(n,null),d(n,c),d(n,f),d(e,u),g||(b=B(a,"click",y),g=!0)},p(D,L){s=D,L&8&&i!==(i=Hs[s[25]]+"")&&_e(r,i),s[26]&&s[1]!=s[25]?m?m.p(s,L):(m=Bl(s),m.c(),m.m(n,o)):m&&(m.d(1),m=null),s[26]||s[1]==s[25]?w?w.p(s,L):(w=Wl(s),w.c(),w.m(n,c)):w&&(w.d(1),w=null),L&12&&le(f,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),L&10&&R(n,"map-element-mapping",s[25]==s[1])},d(D){D&&v(e),m&&m.d(),w&&w.d(),g=!1,b()}}}function pu(s){let e,t,i,r,l,a,n;function o(m,w){return m[5]?fu:hu}let c=o(s),f=c(s);function u(m,w){return m[0]==null?vu:uu}let g=u(s),b=g(s);return{c(){e=p("div"),t=p("div"),i=J(`Mapping\r
        `),r=p("div"),f.c(),l=k(),b.c(),this.h()},l(m){e=_(m,"DIV",{class:!0,style:!0});var w=C(e);t=_(w,"DIV",{class:!0});var y=C(t);i=$(y,`Mapping\r
        `),r=_(y,"DIV",{class:!0});var D=C(r);f.l(D),D.forEach(v),y.forEach(v),l=I(w),b.l(w),w.forEach(v),this.h()},h(){h(r,"class","setting-section-header-reset"),h(t,"class","setting-section-header"),h(e,"class","settings-list"),le(e,"padding-top","1rem")},m(m,w){P(m,e,w),d(e,t),d(t,i),d(t,r),f.m(r,null),d(e,l),b.m(e,null),a||(n=B(r,"click",s[15]),a=!0)},p(m,[w]){c!==(c=o(m))&&(f.d(1),f=c(m),f&&(f.c(),f.m(r,null))),g===(g=u(m))&&b?b.p(m,w):(b.d(1),b=g(m),b&&(b.c(),b.m(e,null)))},i:me,o:me,d(m){m&&v(e),f.d(),b.d(),a=!1,n()}}}function _u(s,e,t){let i=[],r=null,l=null,a;function n(U){if(l==U){t(1,l=null);return}t(1,l=U),a={axes:[...r.axes],buttons:r.buttons.map(W=>({pressed:W.pressed,value:W.value}))}}function o(U){gt.set("mapping",{...gt.mapping,[U]:null})}let c={},f=gt.mapping;function u(U,W=!1){t(3,f=U)}let g=gt.controllerIndex;function b(U){t(4,g=U)}let m=!1;function w(){var U;if(i=((U=navigator.getGamepads)==null?void 0:U.call(navigator))||[],!m&&i.length){if(i[g])m=!0;else for(let W=0;W<i.length;W++)if(i[W]){m=!0,gt.controllerIndexWasSet||gt.set("controllerIndex",W);break}}if(t(0,r=i[gt.controllerIndex]),!r){t(1,l=!1);return}if(l){let W;for(W=0;W<r.axes.length;W++)if(a.axes[W]-r.axes[W]>.15){let O=0;a.axes[W]>.5&&(O=2),gt.set("mapping",{...gt.mapping,[l]:{type:ds.Axis,index:W,sign:-1,max:1,mode:O}}),t(1,l=null);break}else if(a.axes[W]-r.axes[W]<-.15){let O=0;a.axes[W]<-.5&&(O=2),gt.set("mapping",{...gt.mapping,[l]:{type:ds.Axis,index:W,sign:1,max:1,mode:O}}),t(1,l=null);break}if(l){for(W=0;W<r.buttons.length;W++)if(a.buttons[W].pressed!=r.buttons[W].pressed||Math.abs(a.buttons[W].value-r.buttons[W].value)>.2){gt.set("mapping",{...gt.mapping,[l]:{type:ds.Button,index:W}}),t(1,l=null);break}}}else{let W={},O,z;for(O in f)if(z=f[O],z)if(z.type==ds.Axis){let M=r.axes[z.index];z.sign<0?z.mode==2?M=1-Math.max(0,M):z.mode==1?M=1-(M+1)/2:M=Math.min(1,Math.max(0,-M)):z.mode==2?M=Math.max(0,-M):z.mode==1?M=(M+1)/2:M=Math.max(0,Math.min(1,M)),W[O]=M}else z.type==ds.Button&&(W[O]=r.buttons[z.index].value);else W[O]=0;t(2,c=W)}}ct(()=>{gt.addListener("mapping",u),gt.addListener("controllerIndex",b),pe.lockGamepad();let U=setInterval(w,25);return()=>{clearInterval(U),gt.removeListener("mapping",u),gt.removeListener("controllerIndex",b),pe.unlockGamepad()}});let y=!1;function D(){y?(gt.set("mapping",{...xd}),t(5,y=!1)):t(5,y=!0)}function L(U){return U.type==ds.Axis?"Axis "+U.index+(U.sign<0?" [-]":" [+]"):"Button "+U.index}function A(U){U.mode?U.mode=(U.mode+1)%3:U.mode=1,gt.set("mapping",f,!1,!0)}return[r,l,c,f,g,y,n,o,D,L,A,["0 &#9698; 1","-1 &#9698; 1","-1 &#9698; 0"],["0 &#9698; -1","1 &#9698; -1","1 &#9698; 0"],["Axis range begins at 0 and ends at 1","Axis range begins at -1 and ends at 1","Axis range begins at -1 and ends at 0"],["Axis range begins at 0 and ends at -1","Axis range begins at 1 and ends at -1","Axis range begins at 1 and ends at 0"],()=>D(),(U,W)=>{o(U),W.stopPropagation()},(U,W)=>{A(U),W.stopPropagation()},U=>n(U)]}class bu extends Qe{constructor(e){super(),Ze(this,e,_u,pu,Xe,{})}}function Yl(s,e,t){const i=s.slice();return i[46]=e[t],i}function Kl(s,e,t){const i=s.slice();return i[49]=e[t][0],i[50]=e[t][1],i}function Xl(s,e,t){const i=s.slice();return i[53]=e[t],i}function Ql(s){let e,t,i,r="+ New profile",l,a,n=Oe(s[1]),o=[];for(let c=0;c<n.length;c+=1)o[c]=Zl(Xl(s,n,c));return{c(){e=p("div");for(let c=0;c<o.length;c+=1)o[c].c();t=k(),i=p("div"),i.textContent=r,this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);for(let u=0;u<o.length;u+=1)o[u].l(f);t=I(f),i=_(f,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(i)!=="svelte-1c7vjvm"&&(i.textContent=r),f.forEach(v),this.h()},h(){h(i,"class","profile-select-list-item svelte-iyvwtm"),le(i,"font-style","italic"),le(i,"color","var(--sr-primary-75)"),h(e,"class","profile-select-list svelte-iyvwtm")},m(c,f){P(c,e,f);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);d(e,t),d(e,i),l||(a=B(i,"click",s[29]),l=!0)},p(c,f){if(f[0]&262146){n=Oe(c[1]);let u;for(u=0;u<n.length;u+=1){const g=Xl(c,n,u);o[u]?o[u].p(g,f):(o[u]=Zl(g),o[u].c(),o[u].m(e,t))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}},d(c){c&&v(e),_t(o,c),l=!1,a()}}}function Zl(s){let e,t=s[53]+"",i,r,l;function a(...n){return s[28](s[53],...n)}return{c(){e=p("div"),i=J(t),this.h()},l(n){e=_(n,"DIV",{class:!0});var o=C(e);i=$(o,t),o.forEach(v),this.h()},h(){h(e,"class","profile-select-list-item svelte-iyvwtm")},m(n,o){P(n,e,o),d(e,i),r||(l=B(e,"click",a),r=!0)},p(n,o){s=n,o[0]&2&&t!==(t=s[53]+"")&&_e(i,t)},d(n){n&&v(e),r=!1,l()}}}function wu(s){let e,t,i="Error: Please load a valid .roads file",r,l,a="DISMISS",n,o;return{c(){e=p("div"),t=p("div"),t.textContent=i,r=k(),l=p("div"),l.textContent=a,this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);t=_(f,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-fngkdw"&&(t.textContent=i),r=I(f),l=_(f,"DIV",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-jftli3"&&(l.textContent=a),f.forEach(v),this.h()},h(){h(t,"class","profile-msg-msg svelte-iyvwtm"),h(l,"class","profile-msg-action svelte-iyvwtm"),h(e,"class","profile-msg svelte-iyvwtm")},m(c,f){P(c,e,f),d(e,t),d(e,r),d(e,l),n||(o=B(l,"click",s[25]),n=!0)},p:me,d(c){c&&v(e),n=!1,o()}}}function yu(s){let e,t,i,r,l,a,n,o,c="OVERWRITE",f,u,g="CANCEL",b,m;return{c(){e=p("div"),t=p("div"),i=J("Overwrite existing profile "),r=p("span"),l=J(s[8]),a=J("?"),n=k(),o=p("div"),o.textContent=c,f=k(),u=p("div"),u.textContent=g,this.h()},l(w){e=_(w,"DIV",{class:!0});var y=C(e);t=_(y,"DIV",{class:!0});var D=C(t);i=$(D,"Overwrite existing profile "),r=_(D,"SPAN",{style:!0});var L=C(r);l=$(L,s[8]),L.forEach(v),a=$(D,"?"),D.forEach(v),n=I(y),o=_(y,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-ayc6iv"&&(o.textContent=c),f=I(y),u=_(y,"DIV",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1hop0aj"&&(u.textContent=g),y.forEach(v),this.h()},h(){le(r,"font-weight","1000"),h(t,"class","profile-msg-msg svelte-iyvwtm"),h(o,"class","profile-msg-action svelte-iyvwtm"),h(u,"class","profile-msg-action svelte-iyvwtm"),h(e,"class","profile-msg svelte-iyvwtm")},m(w,y){P(w,e,y),d(e,t),d(t,i),d(t,r),d(r,l),d(t,a),d(e,n),d(e,o),d(e,f),d(e,u),b||(m=[B(o,"click",s[24]),B(u,"click",s[25])],b=!0)},p(w,y){y[0]&256&&_e(l,w[8])},d(w){w&&v(e),b=!1,nt(m)}}}function Jl(s){let e,t,i=s[50].readable+"",r,l,a,n=s[50].convert(s[2][s[49]])+"",o;return{c(){e=p("div"),t=p("div"),r=J(i),l=k(),a=p("div"),o=J(n),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);t=_(f,"DIV",{class:!0});var u=C(t);r=$(u,i),u.forEach(v),l=I(f),a=_(f,"DIV",{class:!0,style:!0});var g=C(a);o=$(g,n),g.forEach(v),f.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(a,"class","setting-value"),le(a,"font-family","Sono"),h(e,"class","setting-row")},m(c,f){P(c,e,f),d(e,t),d(t,r),d(e,l),d(e,a),d(a,o)},p(c,f){f[0]&4&&n!==(n=c[50].convert(c[2][c[49]])+"")&&_e(o,n)},d(c){c&&v(e)}}}function $l(s){let e,t="Worlds",i,r;function l(o,c){return o[10].length?Du:Su}let a=l(s),n=a(s);return{c(){e=p("div"),e.textContent=t,i=k(),n.c(),r=Le(),this.h()},l(o){e=_(o,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1ak7xmu"&&(e.textContent=t),i=I(o),n.l(o),r=Le(),this.h()},h(){h(e,"class","setting-section-header")},m(o,c){P(o,e,c),P(o,i,c),n.m(o,c),P(o,r,c)},p(o,c){a===(a=l(o))&&n?n.p(o,c):(n.d(1),n=a(o),n&&(n.c(),n.m(r.parentNode,r)))},d(o){o&&(v(e),v(i),v(r)),n.d(o)}}}function Su(s){let e,t="No worlds yet driven";return{c(){e=p("div"),e.textContent=t,this.h()},l(i){e=_(i,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(e)!=="svelte-viu36h"&&(e.textContent=t),this.h()},h(){h(e,"class","setting-row"),le(e,"text-align","center"),le(e,"font-style","italic")},m(i,r){P(i,e,r)},p:me,d(i){i&&v(e)}}}function Du(s){let e,t=Oe(s[10]),i=[];for(let r=0;r<t.length;r+=1)i[r]=eo(Yl(s,t,r));return{c(){e=p("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var l=C(e);for(let a=0;a<i.length;a+=1)i[a].l(l);l.forEach(v),this.h()},h(){h(e,"class","worlds svelte-iyvwtm")},m(r,l){P(r,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,l){if(l[0]&4203520){t=Oe(r[10]);let a;for(a=0;a<t.length;a+=1){const n=Yl(r,t,a);i[a]?i[a].p(n,l):(i[a]=eo(n),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(r){r&&v(e),_t(i,r)}}}function eo(s){let e,t,i=s[46].key+"",r,l,a=s[46].dist+"",n,o,c,f,u=s[46].hash+"",g,b,m,w;function y(...D){return s[35](s[46],...D)}return{c(){e=p("div"),t=p("div"),r=J(i),l=J(" ("),n=J(a),o=J(")"),c=k(),f=p("div"),g=J(u),b=k(),this.h()},l(D){e=_(D,"DIV",{class:!0});var L=C(e);t=_(L,"DIV",{class:!0});var A=C(t);r=$(A,i),l=$(A," ("),n=$(A,a),o=$(A,")"),A.forEach(v),c=I(L),f=_(L,"DIV",{class:!0,style:!0});var E=C(f);g=$(E,u),E.forEach(v),b=I(L),L.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(f,"class","setting-value"),le(f,"font-family","Sono"),h(e,"class","setting-row copiable svelte-iyvwtm"),R(e,"copied",s[46].i==s[13])},m(D,L){P(D,e,L),d(e,t),d(t,r),d(t,l),d(t,n),d(t,o),d(e,c),d(e,f),d(f,g),d(e,b),m||(w=B(e,"click",y),m=!0)},p(D,L){s=D,L[0]&1024&&i!==(i=s[46].key+"")&&_e(r,i),L[0]&1024&&a!==(a=s[46].dist+"")&&_e(n,a),L[0]&1024&&u!==(u=s[46].hash+"")&&_e(g,u),L[0]&9216&&R(e,"copied",s[46].i==s[13])},d(D){D&&v(e),m=!1,w()}}}function Lu(s){let e,t,i,r,l,a,n="≡",o,c,f,u,g,b,m,w,y,D,L,A,E="Overview",T,x,j,X,V=s[11]&&Ql(s);function ee(M,N){if(M[7])return yu;if(M[9])return wu}let Z=ee(s),U=Z&&Z(s),W=Oe(Object.entries(Oa)),O=[];for(let M=0;M<W.length;M+=1)O[M]=Jl(Kl(s,W,M));let z=s[14]==!1&&$l(s);return{c(){e=p("div"),t=p("div"),i=p("input"),r=k(),l=p("div"),a=p("div"),a.textContent=n,o=k(),V&&V.c(),c=k(),f=p("div"),u=J(`Export\r
            `),g=p("a"),b=k(),m=p("div"),w=J(`Load\r
            `),y=p("input"),D=k(),U&&U.c(),L=k(),A=p("div"),A.textContent=E,T=k();for(let M=0;M<O.length;M+=1)O[M].c();x=k(),z&&z.c(),this.h()},l(M){e=_(M,"DIV",{class:!0});var N=C(e);t=_(N,"DIV",{class:!0});var q=C(t);i=_(q,"INPUT",{class:!0,placeholder:!0}),r=I(q),l=_(q,"DIV",{class:!0});var re=C(l);a=_(re,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(a)!=="svelte-edkqep"&&(a.textContent=n),o=I(re),V&&V.l(re),re.forEach(v),c=I(q),f=_(q,"DIV",{class:!0,title:!0});var oe=C(f);u=$(oe,`Export\r
            `),g=_(oe,"A",{download:!0,target:!0,rel:!0,style:!0}),C(g).forEach(v),oe.forEach(v),b=I(q),m=_(q,"DIV",{class:!0,title:!0});var te=C(m);w=$(te,`Load\r
            `),y=_(te,"INPUT",{style:!0,type:!0,accept:!0}),te.forEach(v),q.forEach(v),D=I(N),U&&U.l(N),L=I(N),A=_(N,"DIV",{class:!0,"data-svelte-h":!0}),G(A)!=="svelte-jc27zg"&&(A.textContent=E),T=I(N);for(let ve=0;ve<O.length;ve+=1)O[ve].l(N);x=I(N),z&&z.l(N),N.forEach(v),this.h()},h(){h(i,"class","profile-name profile-name-input svelte-iyvwtm"),h(i,"placeholder","Name your profile"),R(i,"profile-name-invalid",s[3]),h(a,"class","profile-btn-symbol svelte-iyvwtm"),le(a,"font-size","1.8rem"),h(l,"class","profile-btn profile-select svelte-iyvwtm"),R(l,"profile-select-active",s[11]),h(g,"download",""),h(g,"target","_blank"),h(g,"rel","noopener noreferrer"),le(g,"display","none"),h(f,"class","profile-btn profile-export svelte-iyvwtm"),h(f,"title","Export profile file to disk"),le(y,"display","none"),h(y,"type","file"),h(y,"accept",".roads"),h(m,"class","profile-btn profile-export svelte-iyvwtm"),h(m,"title","Load profile file from disk"),h(t,"class","profile-selection svelte-iyvwtm"),h(A,"class","setting-section-header"),h(e,"class","settings-list")},m(M,N){P(M,e,N),d(e,t),d(t,i),br(i,s[0]),d(t,r),d(t,l),d(l,a),d(l,o),V&&V.m(l,null),s[32](l),d(t,c),d(t,f),d(f,u),d(f,g),s[33](g),d(t,b),d(t,m),d(m,w),d(m,y),s[34](y),d(e,D),U&&U.m(e,null),d(e,L),d(e,A),d(e,T);for(let q=0;q<O.length;q+=1)O[q]&&O[q].m(e,null);d(e,x),z&&z.m(e,null),j||(X=[B(i,"focus",s[23]),B(i,"blur",s[16]),B(i,"keydown",Cu),B(i,"input",s[15]),B(i,"input",s[27]),B(l,"click",s[17]),B(l,"mouseenter",s[30]),B(l,"mouseleave",s[31]),B(f,"click",s[19]),B(y,"change",s[21]),B(m,"click",s[20])],j=!0)},p(M,N){if(N[0]&1&&i.value!==M[0]&&br(i,M[0]),N[0]&8&&R(i,"profile-name-invalid",M[3]),M[11]?V?V.p(M,N):(V=Ql(M),V.c(),V.m(l,null)):V&&(V.d(1),V=null),N[0]&2048&&R(l,"profile-select-active",M[11]),Z===(Z=ee(M))&&U?U.p(M,N):(U&&U.d(1),U=Z&&Z(M),U&&(U.c(),U.m(e,L))),N[0]&4){W=Oe(Object.entries(Oa));let q;for(q=0;q<W.length;q+=1){const re=Kl(M,W,q);O[q]?O[q].p(re,N):(O[q]=Jl(re),O[q].c(),O[q].m(e,x))}for(;q<O.length;q+=1)O[q].d(1);O.length=W.length}M[14]==!1?z?z.p(M,N):(z=$l(M),z.c(),z.m(e,null)):z&&(z.d(1),z=null)},i:me,o:me,d(M){M&&v(e),V&&V.d(),s[32](null),s[33](null),s[34](null),U&&U.d(),_t(O,M),z&&z.d(),j=!1,nt(X)}}}const Cu=s=>{s.code=="Enter"&&s.target.blur()};function ku(s,e,t){let i;Ie(s,bi,ie=>t(14,i=ie));let r=[],l={};const a=()=>{let ie=[qe.name];for(let be in rs)ie.push(be);t(1,r=ie)};let n=qe.name,o=!1,c,f,u=null,g=qe.name,b=!1,m="What",w=null,y=!1;ct(()=>{const ie=be=>{t(2,l=qe.getCopy()),be!==n&&(t(0,n=be),g=be)};return ws.saveCurrentProgress(),a(),qe.addListener("name",ie),Js.addListener("any",L),window.addEventListener("mouseup",ee),()=>{qe.removeListener("name",ie),Js.removeListener("any",L),window.removeEventListener("mouseup",ee)}});let D=[];function L(){let ie=Js.history,be=[],ke=Object.keys(ie),Fe=0;for(let ze of ke){let ft=Object.keys(ie[ze]);for(let Je of ft){let ht=Object.keys(ie[ze][Je]);for(let $e of ht)be.push({i:Fe++,key:Zr[ze]+" - "+Jr[Je]+" - "+$e,dist:id(ie[ze][Je][$e].startNode*10),hash:gr(ze,Je,$e,ie[ze][Je][$e].startNode)})}}t(10,D=be)}const A=()=>(t(3,o=n.length<=0||n in rs),o),E=()=>{A()?qe.set("name",g,!1,!0):qe.set("name",n),a(),q()};let T=!1;const x=()=>{t(11,T=!T)},j=(ie,be)=>{ie.stopPropagation(),ie.preventDefault(),X(be)},X=ie=>{t(11,T=!1);let be=ie===void 0;if(ie!=qe.name){if(ws.storeCurrentProfile(),be){let ke=r.length+1;do ie="Profile "+ke,ke++;while(r.indexOf(ie)>=0)}ws.loadStoredProfile(ie),a()}};let V=!1;const ee=ie=>{V||t(11,T=!1)};function Z(ie){{let be="data:text/json;charset=utf-8,"+encodeURIComponent(ws.getSaveFile());c.setAttribute("href",be),c.setAttribute("download",n+".roads"),c.click()}}function U(){f.click()}function W(ie){let be=ie.target.files[0],ke=new FileReader;ke.onload=Fe=>{try{O(JSON.parse(Fe.target.result))}catch(ze){console.error("Failed to load profile"),console.error(ze),t(9,y=!0)}},ke.readAsText(be)}function O(ie){if(!ie.profile||!ie.profile.name||!ie.settings||!ie.version)throw new Error("Invalid file structure");let be=ie.profile.name;r.indexOf(be)>=0?(t(8,m=be),t(7,b=!0),w=ie):(t(26,rs[be]=ie,rs),X(be))}let z=-1;function M(ie,be,ke){t(13,z=be),navigator.clipboard.writeText(ke)}function N(){Ce.lockKeys("profile")}function q(){Ce.unlockKeys("profile")}function re(){if(!b)return;let ie=w.profile.name;t(26,rs[ie]=w,rs),ie!==qe.name&&ws.storeCurrentProfile(),ws.loadStoredProfile(ie),a(),oe()}function oe(){t(7,b=!1),t(8,m=null),w=null,t(9,y=!1)}function te(){n=this.value,t(0,n)}const ve=(ie,be)=>j(be,ie),Se=ie=>j(ie,void 0),ge=()=>t(12,V=!0),Q=()=>t(12,V=!1);function ae(ie){yt[ie?"unshift":"push"](()=>{u=ie,t(6,u)})}function he(ie){yt[ie?"unshift":"push"](()=>{c=ie,t(4,c)})}function K(ie){yt[ie?"unshift":"push"](()=>{f=ie,t(5,f)})}const de=(ie,be)=>M(be,ie.i,ie.hash);return s.$$.update=()=>{s.$$.dirty[0]&67108865&&t(3,o=n.length<=0||n in rs)},[n,r,l,o,c,f,u,b,m,y,D,T,V,z,i,A,E,x,j,Z,U,W,M,N,re,oe,rs,te,ve,Se,ge,Q,ae,he,K,de]}class Iu extends Qe{constructor(e){super(),Ze(this,e,ku,Lu,Xe,{},null,[-1,-1])}}function to(s,e,t){const i=s.slice();return i[14]=e[t][0],i[15]=e[t][1],i}function Mu(s){let e;return{c(){e=J("reset")},l(t){e=$(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function Eu(s){let e;return{c(){e=J("confirm")},l(t){e=$(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function io(s){let e,t="+",i,r;function l(...a){return s[8](s[14],...a)}return{c(){e=p("div"),e.textContent=t,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){h(e,"class","map-element-delete")},m(a,n){P(a,e,n),i||(r=B(e,"click",l),i=!0)},p(a,n){s=a},d(a){a&&v(e),i=!1,r()}}}function so(s){let e=(s[14]==s[0]?"Click a mouse button":ao(s[15]))+"",t;return{c(){t=J(e)},l(i){t=$(i,e)},m(i,r){P(i,t,r)},p(i,r){r&5&&e!==(e=(i[14]==i[0]?"Click a mouse button":ao(i[15]))+"")&&_e(t,e)},d(i){i&&v(t)}}}function ro(s){let e,t,i=Hs[s[14]]+"",r,l,a,n,o,c,f,u,g=s[15]!==null&&s[0]!=s[14]&&io(s),b=(s[15]!==null||s[0]==s[14])&&so(s);function m(){return s[9](s[14])}function w(){return s[10](s[14])}return{c(){e=p("div"),t=p("div"),r=J(i),l=k(),a=p("div"),n=p("div"),g&&g.c(),o=k(),b&&b.c(),c=k(),this.h()},l(y){e=_(y,"DIV",{class:!0});var D=C(e);t=_(D,"DIV",{class:!0});var L=C(t);r=$(L,i),L.forEach(v),l=I(D),a=_(D,"DIV",{class:!0});var A=C(a);n=_(A,"DIV",{class:!0});var E=C(n);g&&g.l(E),o=I(E),b&&b.l(E),E.forEach(v),A.forEach(v),c=I(D),D.forEach(v),this.h()},h(){h(t,"class","setting-label"),h(n,"class","map-element"),R(n,"map-element-mapping",s[14]==s[0]),h(a,"class","setting-element"),h(e,"class","setting-row")},m(y,D){P(y,e,D),d(e,t),d(t,r),d(e,l),d(e,a),d(a,n),g&&g.m(n,null),d(n,o),b&&b.m(n,null),d(e,c),f||(u=[B(a,"mousedown",m),B(a,"click",w)],f=!0)},p(y,D){s=y,D&4&&i!==(i=Hs[s[14]]+"")&&_e(r,i),s[15]!==null&&s[0]!=s[14]?g?g.p(s,D):(g=io(s),g.c(),g.m(n,o)):g&&(g.d(1),g=null),s[15]!==null||s[0]==s[14]?b?b.p(s,D):(b=so(s),b.c(),b.m(n,null)):b&&(b.d(1),b=null),D&5&&R(n,"map-element-mapping",s[14]==s[0])},d(y){y&&v(e),g&&g.d(),b&&b.d(),f=!1,nt(u)}}}function Au(s){let e,t,i,r,l,a,n;function o(b,m){return b[1]?Eu:Mu}let c=o(s),f=c(s),u=Oe(Object.entries(s[2])),g=[];for(let b=0;b<u.length;b+=1)g[b]=ro(to(s,u,b));return{c(){e=p("div"),t=p("div"),i=J(`Mapping\r
        `),r=p("div"),f.c(),l=k();for(let b=0;b<g.length;b+=1)g[b].c();this.h()},l(b){e=_(b,"DIV",{class:!0,style:!0});var m=C(e);t=_(m,"DIV",{class:!0});var w=C(t);i=$(w,`Mapping\r
        `),r=_(w,"DIV",{class:!0});var y=C(r);f.l(y),y.forEach(v),w.forEach(v),l=I(m);for(let D=0;D<g.length;D+=1)g[D].l(m);m.forEach(v),this.h()},h(){h(r,"class","setting-section-header-reset"),h(t,"class","setting-section-header"),h(e,"class","settings-list"),le(e,"padding-top","1rem")},m(b,m){P(b,e,m),d(e,t),d(t,i),d(t,r),f.m(r,null),d(e,l);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(e,null);a||(n=B(r,"click",s[7]),a=!0)},p(b,[m]){if(c!==(c=o(b))&&(f.d(1),f=c(b),f&&(f.c(),f.m(r,null))),m&61){u=Oe(Object.entries(b[2]));let w;for(w=0;w<u.length;w+=1){const y=to(b,u,w);g[w]?g[w].p(y,m):(g[w]=ro(y),g[w].c(),g[w].m(e,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=u.length}},i:me,o:me,d(b){b&&v(e),f.d(),_t(g,b),a=!1,n()}}}function ao(s){return s===null?null:s==0?"Left click":s==1?"Middle click":s==2?"Right click":"Button "+s}function Tu(s,e,t){let i=null;function r(y){if(i!=null){for(let D in ot.mapping)ot.mapping[D]==y.button&&(ot.mapping[D]=null);ot.set("mapping",{...ot.mapping,[i]:y.button}),t(0,i=null),y.preventDefault(),y.stopPropagation()}}let l=!1;function a(y){i!=null?l=!0:l=!1}function n(y){if(!l){if(i==y){t(0,i=null),window.removeEventListener("mousedown",r);return}i==null&&window.addEventListener("mousedown",r,{once:!0}),t(0,i=y)}}function o(y){ot.set("mapping",{...ot.mapping,[y]:null})}let c=!1;function f(){c?(ot.set("mapping",{...sd}),t(1,c=!1)):t(1,c=!0)}let u=ot.mapping;return ct(()=>(ot.addListener("mapping",y=>{t(2,u=y)}),()=>{window.removeEventListener("mousedown",r)})),[i,c,u,a,n,o,f,()=>f(),(y,D)=>{o(y),D.stopPropagation()},y=>a(),y=>n(y)]}class Pu extends Qe{constructor(e){super(),Ze(this,e,Tu,Au,Xe,{})}}function lo(s){let e,t,i,r="HOME",l,a,n,o="GAMEPLAY",c,f,u="GRAPHICS",g,b,m="CONTROLS",w,y,D="AUDIO",L,A,E="PROFILE",T,x,j,X,V,ee,Z,U,W="COPY DEBUG LOG",O,z,M,N="CLOSE",q,re,oe,te;const ve=[Vu,Uu,Ru,xu,Nu],Se=[];function ge(Q,ae){return Q[7]==0?0:Q[7]==1?1:Q[7]==2?2:Q[7]==3?3:Q[7]==4?4:-1}return~(X=ge(s))&&(V=Se[X]=ve[X](s)),{c(){e=p("div"),t=p("div"),i=p("div"),l=J(r),a=k(),n=p("div"),n.textContent=o,c=k(),f=p("div"),f.textContent=u,g=k(),b=p("div"),b.textContent=m,w=k(),y=p("div"),y.textContent=D,L=k(),A=p("div"),A.textContent=E,T=k(),x=p("div"),j=p("div"),V&&V.c(),ee=k(),Z=p("div"),U=p("div"),U.textContent=W,O=k(),z=k(),M=p("div"),M.textContent=N,this.h()},l(Q){e=_(Q,"DIV",{id:!0,class:!0});var ae=C(e);t=_(ae,"DIV",{id:!0,class:!0});var he=C(t);i=_(he,"DIV",{class:!0,style:!0});var K=C(i);l=$(K,r),K.forEach(v),a=I(he),n=_(he,"DIV",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-d9155r"&&(n.textContent=o),c=I(he),f=_(he,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-1gh8wl0"&&(f.textContent=u),g=I(he),b=_(he,"DIV",{class:!0,"data-svelte-h":!0}),G(b)!=="svelte-1t0y255"&&(b.textContent=m),w=I(he),y=_(he,"DIV",{class:!0,"data-svelte-h":!0}),G(y)!=="svelte-95vled"&&(y.textContent=D),L=I(he),A=_(he,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(A)!=="svelte-1i1kut5"&&(A.textContent=E),he.forEach(v),T=I(ae),x=_(ae,"DIV",{id:!0,class:!0});var de=C(x);j=_(de,"DIV",{id:!0,class:!0});var ie=C(j);V&&V.l(ie),ie.forEach(v),de.forEach(v),ee=I(ae),Z=_(ae,"DIV",{id:!0,class:!0});var be=C(Z);U=_(be,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(U)!=="svelte-19upzay"&&(U.textContent=W),O=I(be),z=I(be),M=_(be,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(M)!=="svelte-172h0kq"&&(M.textContent=N),be.forEach(v),ae.forEach(v),this.h()},h(){h(i,"class","settings-header svelte-1vatkls"),le(i,"flex-basis","20%"),h(n,"class","settings-header svelte-1vatkls"),R(n,"settings-selected",s[7]==0),h(f,"class","settings-header svelte-1vatkls"),R(f,"settings-selected",s[7]==1),h(b,"class","settings-header svelte-1vatkls"),R(b,"settings-selected",s[7]==2),h(y,"class","settings-header svelte-1vatkls"),R(y,"settings-selected",s[7]==3),h(A,"class","settings-header svelte-1vatkls"),le(A,"flex-basis","20%"),le(A,"text-align","right"),R(A,"settings-selected",s[7]==4),h(t,"id","ui-settings-header"),h(t,"class","svelte-1vatkls"),R(t,"ui-settings-hidden",s[12]),h(j,"id","ui-settings-body-content"),h(j,"class","svelte-1vatkls"),h(x,"id","ui-settings-body"),h(x,"class","svelte-1vatkls"),R(x,"ui-settings-hidden",s[12]),h(U,"class","ui-btn ui-btn-active"),le(U,"background","none"),le(U,"border-color","var(--sr-primary-50)"),le(U,"color","var(--sr-primary)"),le(U,"line-height","1rem"),le(U,"font-size","0.8rem"),h(M,"class","ui-btn ui-btn-active"),le(M,"line-height","1rem"),le(M,"font-size","0.8rem"),h(Z,"id","ui-settings-footer"),h(Z,"class","svelte-1vatkls"),R(Z,"ui-settings-hidden",s[12]),h(e,"id","ui-settings"),h(e,"class","svelte-1vatkls")},m(Q,ae){P(Q,e,ae),d(e,t),d(t,i),d(i,l),d(t,a),d(t,n),d(t,c),d(t,f),d(t,g),d(t,b),d(t,w),d(t,y),d(t,L),d(t,A),d(e,T),d(e,x),d(x,j),~X&&Se[X].m(j,null),s[28](x),d(e,ee),d(e,Z),d(Z,U),d(Z,O),d(Z,z),d(Z,M),re=!0,oe||(te=[B(i,"click",s[19]),B(n,"click",s[20]),B(f,"click",s[21]),B(b,"click",s[22]),B(y,"click",s[23]),B(A,"click",s[24]),B(x,"scrollend",s[15]),B(U,"click",s[16]),B(M,"click",function(){ea(s[2])&&s[2].apply(this,arguments)}),B(e,"mouseenter",s[29]),B(e,"mouseleave",s[30])],oe=!0)},p(Q,ae){s=Q,(!re||ae[0]&128)&&R(n,"settings-selected",s[7]==0),(!re||ae[0]&128)&&R(f,"settings-selected",s[7]==1),(!re||ae[0]&128)&&R(b,"settings-selected",s[7]==2),(!re||ae[0]&128)&&R(y,"settings-selected",s[7]==3),(!re||ae[0]&128)&&R(A,"settings-selected",s[7]==4),(!re||ae[0]&4096)&&R(t,"ui-settings-hidden",s[12]);let he=X;X=ge(s),X===he?~X&&Se[X].p(s,ae):(V&&(Ge(),se(Se[he],1,1,()=>{Se[he]=null}),Be()),~X?(V=Se[X],V?V.p(s,ae):(V=Se[X]=ve[X](s),V.c()),Y(V,1),V.m(j,null)):V=null),(!re||ae[0]&4096)&&R(x,"ui-settings-hidden",s[12]),(!re||ae[0]&4096)&&R(Z,"ui-settings-hidden",s[12])},i(Q){re||(Y(V),Q&&Ji(()=>{re&&(q||(q=_i(e,At,{duration:100},!0)),q.run(1))}),re=!0)},o(Q){se(V),Q&&(q||(q=_i(e,At,{duration:100},!1)),q.run(0)),re=!1},d(Q){Q&&v(e),~X&&Se[X].d(),s[28](null),Q&&q&&q.end(),oe=!1,nt(te)}}}function Nu(s){let e,t;return e=new Iu({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function xu(s){let e,t;return e=new Is({props:{liveSetting:Ys,settingsMeta:rd}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Ru(s){let e,t,i,r;const l=[Hu,Ou],a=[];function n(o,c){return o[13]?0:1}return e=n(s),t=a[e]=l[e](s),{c(){t.c(),i=Le()},l(o){t.l(o),i=Le()},m(o,c){a[e].m(o,c),P(o,i,c),r=!0},p(o,c){let f=e;e=n(o),e===f?a[e].p(o,c):(Ge(),se(a[f],1,1,()=>{a[f]=null}),Be(),t=a[e],t?t.p(o,c):(t=a[e]=l[e](o),t.c()),Y(t,1),t.m(i.parentNode,i))},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),a[e].d(o)}}}function Uu(s){let e,t,i,r;function l(o,c){return Bu}let n=l()(s);return i=new Is({props:{liveSetting:je,settingsMeta:ad}}),{c(){e=p("div"),n.c(),t=k(),xe(i.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);n.l(c),c.forEach(v),t=I(o),Re(i.$$.fragment,o),this.h()},h(){h(e,"class","settings-blurb svelte-1vatkls")},m(o,c){P(o,e,c),n.m(e,null),P(o,t,c),Ue(i,o,c),r=!0},p:me,i(o){r||(Y(i.$$.fragment,o),r=!0)},o(o){se(i.$$.fragment,o),r=!1},d(o){o&&(v(e),v(t)),n.d(),Ve(i,o)}}}function Vu(s){let e,t;return e=new Is({props:{liveSetting:ne,settingsMeta:ld}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Ou(s){let e,t,i="Keyboard",r,l,a="Mouse",n,o,c="Controller",f,u,g,b,m,w,y;const D=[Gu,Fu,zu],L=[];function A(E,T){return E[8]==0?0:E[8]==1?1:2}return u=A(s),g=L[u]=D[u](s),{c(){e=p("div"),t=p("div"),t.textContent=i,r=k(),l=p("div"),l.textContent=a,n=k(),o=p("div"),o.textContent=c,f=k(),g.c(),b=Le(),this.h()},l(E){e=_(E,"DIV",{class:!0});var T=C(e);t=_(T,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-ugcogi"&&(t.textContent=i),r=I(T),l=_(T,"DIV",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-1c4vzu2"&&(l.textContent=a),n=I(T),o=_(T,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-14igtfd"&&(o.textContent=c),T.forEach(v),f=I(E),g.l(E),b=Le(),this.h()},h(){h(t,"class","settings-tab svelte-1vatkls"),R(t,"tab-selected",s[8]==0),h(l,"class","settings-tab svelte-1vatkls"),R(l,"tab-selected",s[8]==1),h(o,"class","settings-tab svelte-1vatkls"),R(o,"tab-selected",s[8]==2),h(e,"class","settings-tabs svelte-1vatkls")},m(E,T){P(E,e,T),d(e,t),d(e,r),d(e,l),d(e,n),d(e,o),P(E,f,T),L[u].m(E,T),P(E,b,T),m=!0,w||(y=[B(t,"click",s[25]),B(l,"click",s[26]),B(o,"click",s[27])],w=!0)},p(E,T){(!m||T[0]&256)&&R(t,"tab-selected",E[8]==0),(!m||T[0]&256)&&R(l,"tab-selected",E[8]==1),(!m||T[0]&256)&&R(o,"tab-selected",E[8]==2);let x=u;u=A(E),u!==x&&(Ge(),se(L[x],1,1,()=>{L[x]=null}),Be(),g=L[u],g||(g=L[u]=D[u](E),g.c()),Y(g,1),g.m(b.parentNode,b))},i(E){m||(Y(g),m=!0)},o(E){se(g),m=!1},d(E){E&&(v(e),v(f),v(b)),L[u].d(E),w=!1,nt(y)}}}function Hu(s){let e,t;return e=new Is({props:{liveSetting:ls,settingsMeta:pd}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function zu(s){let e,t,i,r;return e=new Is({props:{liveSetting:gt,settingsMeta:Rd}}),i=new bu({}),{c(){xe(e.$$.fragment),t=k(),xe(i.$$.fragment)},l(l){Re(e.$$.fragment,l),t=I(l),Re(i.$$.fragment,l)},m(l,a){Ue(e,l,a),P(l,t,a),Ue(i,l,a),r=!0},i(l){r||(Y(e.$$.fragment,l),Y(i.$$.fragment,l),r=!0)},o(l){se(e.$$.fragment,l),se(i.$$.fragment,l),r=!1},d(l){l&&v(t),Ve(e,l),Ve(i,l)}}}function Fu(s){let e,t,i,r;return e=new Is({props:{liveSetting:ot,settingsMeta:od}}),i=new Pu({}),{c(){xe(e.$$.fragment),t=k(),xe(i.$$.fragment)},l(l){Re(e.$$.fragment,l),t=I(l),Re(i.$$.fragment,l)},m(l,a){Ue(e,l,a),P(l,t,a),Ue(i,l,a),r=!0},i(l){r||(Y(e.$$.fragment,l),Y(i.$$.fragment,l),r=!0)},o(l){se(e.$$.fragment,l),se(i.$$.fragment,l),r=!1},d(l){l&&v(t),Ve(e,l),Ve(i,l)}}}function Gu(s){let e,t,i,r;return e=new Is({props:{liveSetting:gi,settingsMeta:Ud}}),i=new cu({}),{c(){xe(e.$$.fragment),t=k(),xe(i.$$.fragment)},l(l){Re(e.$$.fragment,l),t=I(l),Re(i.$$.fragment,l)},m(l,a){Ue(e,l,a),P(l,t,a),Ue(i,l,a),r=!0},i(l){r||(Y(e.$$.fragment,l),Y(i.$$.fragment,l),r=!0)},o(l){se(e.$$.fragment,l),se(i.$$.fragment,l),r=!1},d(l){l&&v(t),Ve(e,l),Ve(i,l)}}}function Bu(s){let e;return{c(){e=J("For good performance, ensure that your browser has hardware acceleration enabled")},l(t){e=$(t,"For good performance, ensure that your browser has hardware acceleration enabled")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function oo(s){let e,t,i,r,l,a,n,o,c,f,u=s[0]&&no(s),g=!s[9]&&!s[13]&&!jr&&co(s);return r=new au({props:{onHasFocus:s[36]}}),{c(){u&&u.c(),e=k(),t=p("div"),g&&g.c(),i=k(),xe(r.$$.fragment),l=k(),a=p("img"),this.h()},l(b){u&&u.l(b),e=I(b),t=_(b,"DIV",{id:!0,class:!0});var m=C(t);g&&g.l(m),i=I(m),Re(r.$$.fragment,m),l=I(m),a=_(m,"IMG",{class:!0,src:!0}),m.forEach(v),this.h()},h(){h(a,"class","ui-settings-bar-icon svelte-1vatkls"),pt(a.src,n="/img/ico_settings.svg")||h(a,"src",n),R(a,"ui-settings-bar-icon-prompt",s[0]),h(t,"id","ui-settings-bar"),h(t,"class","svelte-1vatkls")},m(b,m){u&&u.m(b,m),P(b,e,m),P(b,t,m),g&&g.m(t,null),d(t,i),Ue(r,t,null),d(t,l),d(t,a),o=!0,c||(f=[B(a,"click",s[37]),B(t,"mouseenter",s[38]),B(t,"mouseleave",s[39])],c=!0)},p(b,m){b[0]?u?(u.p(b,m),m[0]&1&&Y(u,1)):(u=no(b),u.c(),Y(u,1),u.m(e.parentNode,e)):u&&(Ge(),se(u,1,1,()=>{u=null}),Be()),!b[9]&&!b[13]&&!jr?g?g.p(b,m):(g=co(b),g.c(),g.m(t,i)):g&&(g.d(1),g=null);const w={};m[0]&512&&(w.onHasFocus=b[36]),r.$set(w),(!o||m[0]&1)&&R(a,"ui-settings-bar-icon-prompt",b[0])},i(b){o||(Y(u),Y(r.$$.fragment,b),o=!0)},o(b){se(u),se(r.$$.fragment,b),o=!1},d(b){b&&(v(e),v(t)),u&&u.d(b),g&&g.d(),Ve(r),c=!1,nt(f)}}}function no(s){let e,t='<span style="font-weight: 600">Low framerate?</span> <br/> <span style="font-size: 0.9rem">Adjust graphics settings here</span>',i,r,l,a;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(n){e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-e8bk2z"&&(e.innerHTML=t),this.h()},h(){h(e,"class","ui-settings-bar-prompt svelte-1vatkls")},m(n,o){P(n,e,o),r=!0,l||(a=B(e,"click",s[31]),l=!0)},p:me,i(n){r||(n&&Ji(()=>{r&&(i||(i=_i(e,At,{delay:0,duration:500},!0)),i.run(1))}),r=!0)},o(n){n&&(i||(i=_i(e,At,{delay:0,duration:500},!1)),i.run(0)),r=!1},d(n){n&&v(e),n&&i&&i.end(),l=!1,a()}}}function co(s){let e,t,i,r,l,a,n,o=s[17]&&s[11]&&ho(s),c=!s[11]&&uo();return{c(){o&&o.c(),e=k(),t=p("a"),c&&c.c(),i=k(),r=p("img"),this.h()},l(f){o&&o.l(f),e=I(f),t=_(f,"A",{id:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var u=C(t);c&&c.l(u),i=I(u),r=_(u,"IMG",{id:!0,src:!0,alt:!0,class:!0}),u.forEach(v),this.h()},h(){h(r,"id","ui-settings-steam-icon"),pt(r.src,l="/img/icon_steam_white.svg")||h(r,"src",l),h(r,"alt",""),h(r,"class","svelte-1vatkls"),h(t,"id","ui-settings-steam"),h(t,"target","_blank"),h(t,"rel","noopener noreferrer"),h(t,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),h(t,"alt",""),h(t,"class","svelte-1vatkls")},m(f,u){o&&o.m(f,u),P(f,e,u),P(f,t,u),c&&c.m(t,null),d(t,i),d(t,r),a||(n=B(t,"mouseup",s[35]),a=!0)},p(f,u){f[17]&&f[11]?o?o.p(f,u):(o=ho(f),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),f[11]?c&&(c.d(1),c=null):c||(c=uo(),c.c(),c.m(t,i))},d(f){f&&(v(e),v(t)),o&&o.d(f),c&&c.d(),a=!1,n()}}}function ho(s){let e,t,i,r,l,a,n=!s[10]&&fo();return{c(){e=p("a"),n&&n.c(),t=k(),i=p("img"),this.h()},l(o){e=_(o,"A",{id:!0,style:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var c=C(e);n&&n.l(c),t=I(c),i=_(c,"IMG",{id:!0,src:!0,alt:!0,class:!0}),c.forEach(v),this.h()},h(){h(i,"id","ui-settings-steam-icon"),pt(i.src,r="/img/icon_itch_white.svg")||h(i,"src",r),h(i,"alt",""),h(i,"class","svelte-1vatkls"),h(e,"id","ui-settings-steam"),le(e,"margin-right","1rem"),h(e,"target","_blank"),h(e,"rel","noopener noreferrer"),h(e,"href","https://topographinteractive.itch.io/slow-roads"),h(e,"alt",""),h(e,"class","svelte-1vatkls")},m(o,c){P(o,e,c),n&&n.m(e,null),d(e,t),d(e,i),l||(a=[B(e,"mouseenter",s[32]),B(e,"mouseleave",s[33]),B(e,"mouseup",s[34])],l=!0)},p(o,c){o[10]?n&&(n.d(1),n=null):n||(n=fo(),n.c(),n.m(e,t))},d(o){o&&v(e),n&&n.d(),l=!1,nt(a)}}}function fo(s){let e;return{c(){e=J("WEB EDITION")},l(t){e=$(t,"WEB EDITION")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function uo(s){let e;return{c(){e=J("STEAM VERSION")},l(t){e=$(t,"STEAM VERSION")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function qu(s){let e,t,i,r=s[1]&&lo(s),l=s[5]&&!s[14]&&oo(s);return{c(){r&&r.c(),e=k(),l&&l.c(),t=Le()},l(a){r&&r.l(a),e=I(a),l&&l.l(a),t=Le()},m(a,n){r&&r.m(a,n),P(a,e,n),l&&l.m(a,n),P(a,t,n),i=!0},p(a,n){a[1]?r?(r.p(a,n),n[0]&2&&Y(r,1)):(r=lo(a),r.c(),Y(r,1),r.m(e.parentNode,e)):r&&(Ge(),se(r,1,1,()=>{r=null}),Be()),a[5]&&!a[14]?l?(l.p(a,n),n[0]&16416&&Y(l,1)):(l=oo(a),l.c(),Y(l,1),l.m(t.parentNode,t)):l&&(Ge(),se(l,1,1,()=>{l=null}),Be())},i(a){i||(Y(r),Y(l),i=!0)},o(a){se(r),se(l),i=!1},d(a){a&&(v(e),v(t)),r&&r.d(a),l&&l.d(a)}}}function Wu(s,e,t){let i,r,l;Ie(s,ys,K=>t(12,i=K)),Ie(s,bi,K=>t(13,r=K)),Ie(s,Ks,K=>t(14,l=K));let{showSettings:a=!1}=e,{showPrompt:n=!1}=e,{closeSettings:o=()=>{}}=e,{openSettings:c=()=>{}}=e,{onShowSplash:f=K=>{}}=e,{showBar:u=!0}=e,g,b=0;function m(K){t(18,b=K.target.scrollTop)}let w=0,y=pe.hasGamepadInput?2:ot.useMouse?1:0,D=!1;const L=()=>{navigator.clipboard.writeText("```\n"+Qi.get()+"\n```"),console.log("Copied log to clipboard - paste & send in discord!")};let A=qe.totalVisits>10,E=!1,T=!1;const x=()=>{t(10,E=rt.hasSeenItch),rt.hasSeenSteam,t(11,T=rt.hasSeenSteam2),rt.hasSeenDemo};ct(()=>(rt.addListener("any",x),()=>{rt.removeListener("any",x)}));const j=K=>{f(K)},X=()=>{t(7,w=0)},V=()=>{t(7,w=1)},ee=()=>{t(7,w=2)},Z=()=>{t(7,w=3)},U=()=>{t(7,w=4)},W=()=>{t(8,y=0)},O=()=>{t(8,y=1)},z=()=>{t(8,y=2)};function M(K){yt[K?"unshift":"push"](()=>{g=K,t(6,g),t(18,b)})}const N=()=>{pe.lockMouse(),Ce.lockScroll("settings")},q=()=>{pe.unlockMouse(!1),Ce.unlockScroll("settings")},re=()=>{t(0,n=!1),t(7,w=0)},oe=()=>{t(10,E=!1)},te=()=>{t(10,E=rt.hasSeenItch)},ve=()=>{rt.set("hasSeenItch",!0)},Se=()=>{rt.set("hasSeenSteam2",!0)},ge=K=>{t(9,D=K)},Q=()=>{a?o():c()},ae=()=>pe.lockMouse(),he=()=>pe.unlockMouse(!1);return s.$$set=K=>{"showSettings"in K&&t(1,a=K.showSettings),"showPrompt"in K&&t(0,n=K.showPrompt),"closeSettings"in K&&t(2,o=K.closeSettings),"openSettings"in K&&t(3,c=K.openSettings),"onShowSplash"in K&&t(4,f=K.onShowSplash),"showBar"in K&&t(5,u=K.showBar)},s.$$.update=()=>{s.$$.dirty[0]&262208&&g&&t(6,g.scrollTop=b,g),s.$$.dirty[0]&1&&n==!0&&t(7,w=1)},[n,a,o,c,f,u,g,w,y,D,E,T,i,r,l,m,L,A,b,j,X,V,ee,Z,U,W,O,z,M,N,q,re,oe,te,ve,Se,ge,Q,ae,he]}class ju extends Qe{constructor(e){super(),Ze(this,e,Wu,qu,Xe,{showSettings:1,showPrompt:0,closeSettings:2,openSettings:3,onShowSplash:4,showBar:5},null,[-1,-1])}}function vo(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function mo(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function go(s){let e,t,i=s[18]+"",r,l,a=s[19]+"",n;return{c(){e=p("div"),t=p("div"),r=J(i),l=p("div"),n=J(a),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);t=_(c,"DIV",{class:!0});var f=C(t);r=$(f,i),f.forEach(v),l=_(c,"DIV",{class:!0});var u=C(l);n=$(u,a),u.forEach(v),c.forEach(v),this.h()},h(){h(t,"class","debug-label svelte-1yramsp"),h(l,"class","debug-val svelte-1yramsp"),h(e,"class","debug-row svelte-1yramsp")},m(o,c){P(o,e,c),d(e,t),d(t,r),d(e,l),d(l,n)},p(o,c){c&65536&&i!==(i=o[18]+"")&&_e(r,i),c&65536&&a!==(a=o[19]+"")&&_e(n,a)},d(o){o&&v(e)}}}function po(s){let e,t,i=s[18]+"",r,l,a=(s[19].toFixed?s[19].toFixed(2):s[19])+"",n;return{c(){e=p("div"),t=p("div"),r=J(i),l=p("div"),n=J(a),this.h()},l(o){e=_(o,"DIV",{class:!0});var c=C(e);t=_(c,"DIV",{class:!0});var f=C(t);r=$(f,i),f.forEach(v),l=_(c,"DIV",{class:!0});var u=C(l);n=$(u,a),u.forEach(v),c.forEach(v),this.h()},h(){h(t,"class","debug-label svelte-1yramsp"),h(l,"class","debug-val svelte-1yramsp"),h(e,"class","debug-row svelte-1yramsp")},m(o,c){P(o,e,c),d(e,t),d(t,r),d(e,l),d(l,n)},p(o,c){c&131072&&i!==(i=o[18]+"")&&_e(r,i),c&131072&&a!==(a=(o[19].toFixed?o[19].toFixed(2):o[19])+"")&&_e(n,a)},d(o){o&&v(e)}}}function Yu(s){let e,t,i,r="hash",l,a,n,o,c,f="pos",u,g,b,m,w,y="tile",D,L,A,E,T,x="cell",j,X,V,ee,Z="midline",U,W,O,z="vehicle index",M,N=s[4].i+"",q,re,oe,te,ve="head",Se,ge=s[5].i+"",Q,ae,he,K,de="tail",ie,be=s[6].i+"",ke,Fe,ze,ft="performance",Je,ht,$e,Pi="view dist",Ft,ye,at,Tt,Pt,Ot="detail",oi,wi,Gt,ni,Xt,di="sim speed",ci,Ni,hi,$i,$t,Nt,vs="fps",fi,bt,es,ei,xt,ms="draw calls",ui,Bt,ts,ti,St,fe="triangles",lt,vi,mi,qt,xi,Ms="geometries",Ri,ii,Es,yi,Si="queue",As,Di,Ht,Fs="jobs",Ui,Yi,Vi,Li,Oi,or="priority jobs",gs,Ki,wt,Rt,Dt="scene",Wt,Qt,zt,nr="vehicle",dr,Xi,si,Ut="Press F4 to hide this panel",ut=Oe(Object.entries(s[16])),Ne=[];for(let we=0;we<ut.length;we+=1)Ne[we]=go(mo(s,ut,we));let et=Oe(Object.entries(s[17])),Ke=[];for(let we=0;we<et.length;we+=1)Ke[we]=po(vo(s,et,we));return{c(){e=p("div"),t=p("div"),i=p("div"),i.textContent=r,l=p("div"),a=J(s[0]),n=k(),o=p("div"),c=p("div"),c.textContent=f,u=p("div"),g=J(s[1]),b=k(),m=p("div"),w=p("div"),w.textContent=y,D=p("div"),L=J(s[2]),A=k(),E=p("div"),T=p("div"),T.textContent=x,j=p("div"),X=J(s[3]),V=k(),ee=p("div"),ee.textContent=Z,U=k(),W=p("div"),O=p("div"),O.textContent=z,M=p("div"),q=J(N),re=k(),oe=p("div"),te=p("div"),te.textContent=ve,Se=p("div"),Q=J(ge),ae=k(),he=p("div"),K=p("div"),K.textContent=de,ie=p("div"),ke=J(be),Fe=k(),ze=p("div"),ze.textContent=ft,Je=k(),ht=p("div"),$e=p("div"),$e.textContent=Pi,Ft=p("div"),ye=J(s[7]),at=k(),Tt=p("div"),Pt=p("div"),Pt.textContent=Ot,oi=p("div"),wi=J(s[8]),Gt=k(),ni=p("div"),Xt=p("div"),Xt.textContent=di,ci=p("div"),Ni=J(s[9]),hi=J("x"),$i=k(),$t=p("div"),Nt=p("div"),Nt.textContent=vs,fi=p("div"),bt=J(s[10]),es=k(),ei=p("div"),xt=p("div"),xt.textContent=ms,ui=p("div"),Bt=J(s[11]),ts=k(),ti=p("div"),St=p("div"),St.textContent=fe,lt=p("div"),vi=J(s[12]),mi=k(),qt=p("div"),xi=p("div"),xi.textContent=Ms,Ri=p("div"),ii=J(s[13]),Es=k(),yi=p("div"),yi.textContent=Si,As=k(),Di=p("div"),Ht=p("div"),Ht.textContent=Fs,Ui=p("div"),Yi=J(s[14]),Vi=k(),Li=p("div"),Oi=p("div"),Oi.textContent=or,gs=p("div"),Ki=J(s[15]),wt=k(),Rt=p("div"),Rt.textContent=Dt,Wt=k();for(let we=0;we<Ne.length;we+=1)Ne[we].c();Qt=k(),zt=p("div"),zt.textContent=nr,dr=k();for(let we=0;we<Ke.length;we+=1)Ke[we].c();Xi=k(),si=p("div"),si.textContent=Ut,this.h()},l(we){e=_(we,"DIV",{class:!0});var ce=C(e);t=_(ce,"DIV",{class:!0});var Te=C(t);i=_(Te,"DIV",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1wk88r1"&&(i.textContent=r),l=_(Te,"DIV",{class:!0});var Ci=C(l);a=$(Ci,s[0]),Ci.forEach(v),Te.forEach(v),n=I(ce),o=_(ce,"DIV",{class:!0});var Hi=C(o);c=_(Hi,"DIV",{class:!0,"data-svelte-h":!0}),G(c)!=="svelte-1g3ewex"&&(c.textContent=f),u=_(Hi,"DIV",{class:!0});var Gs=C(u);g=$(Gs,s[1]),Gs.forEach(v),Hi.forEach(v),b=I(ce),m=_(ce,"DIV",{class:!0});var mt=C(m);w=_(mt,"DIV",{class:!0,"data-svelte-h":!0}),G(w)!=="svelte-1jksrql"&&(w.textContent=y),D=_(mt,"DIV",{class:!0});var Bs=C(D);L=$(Bs,s[2]),Bs.forEach(v),mt.forEach(v),A=I(ce),E=_(ce,"DIV",{class:!0});var We=C(E);T=_(We,"DIV",{class:!0,"data-svelte-h":!0}),G(T)!=="svelte-l9fhq9"&&(T.textContent=x),j=_(We,"DIV",{class:!0});var ps=C(j);X=$(ps,s[3]),ps.forEach(v),We.forEach(v),V=I(ce),ee=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),G(ee)!=="svelte-1fe9op8"&&(ee.textContent=Z),U=I(ce),W=_(ce,"DIV",{class:!0});var is=C(W);O=_(is,"DIV",{class:!0,"data-svelte-h":!0}),G(O)!=="svelte-nhrrjr"&&(O.textContent=z),M=_(is,"DIV",{class:!0});var qs=C(M);q=$(qs,N),qs.forEach(v),is.forEach(v),re=I(ce),oe=_(ce,"DIV",{class:!0});var ss=C(oe);te=_(ss,"DIV",{class:!0,"data-svelte-h":!0}),G(te)!=="svelte-19s95zn"&&(te.textContent=ve),Se=_(ss,"DIV",{class:!0});var Ts=C(Se);Q=$(Ts,ge),Ts.forEach(v),ss.forEach(v),ae=I(ce),he=_(ce,"DIV",{class:!0});var kr=C(he);K=_(kr,"DIV",{class:!0,"data-svelte-h":!0}),G(K)!=="svelte-145fhfv"&&(K.textContent=de),ie=_(kr,"DIV",{class:!0});var ba=C(ie);ke=$(ba,be),ba.forEach(v),kr.forEach(v),Fe=I(ce),ze=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),G(ze)!=="svelte-m5yv1e"&&(ze.textContent=ft),Je=I(ce),ht=_(ce,"DIV",{class:!0});var Ir=C(ht);$e=_(Ir,"DIV",{class:!0,"data-svelte-h":!0}),G($e)!=="svelte-pok5e0"&&($e.textContent=Pi),Ft=_(Ir,"DIV",{class:!0});var wa=C(Ft);ye=$(wa,s[7]),wa.forEach(v),Ir.forEach(v),at=I(ce),Tt=_(ce,"DIV",{class:!0});var Mr=C(Tt);Pt=_(Mr,"DIV",{class:!0,"data-svelte-h":!0}),G(Pt)!=="svelte-1e1xn7y"&&(Pt.textContent=Ot),oi=_(Mr,"DIV",{class:!0});var ya=C(oi);wi=$(ya,s[8]),ya.forEach(v),Mr.forEach(v),Gt=I(ce),ni=_(ce,"DIV",{class:!0});var Er=C(ni);Xt=_(Er,"DIV",{class:!0,"data-svelte-h":!0}),G(Xt)!=="svelte-zjyrxb"&&(Xt.textContent=di),ci=_(Er,"DIV",{class:!0});var Ar=C(ci);Ni=$(Ar,s[9]),hi=$(Ar,"x"),Ar.forEach(v),Er.forEach(v),$i=I(ce),$t=_(ce,"DIV",{class:!0});var Tr=C($t);Nt=_(Tr,"DIV",{class:!0,"data-svelte-h":!0}),G(Nt)!=="svelte-1r6mdog"&&(Nt.textContent=vs),fi=_(Tr,"DIV",{class:!0});var Sa=C(fi);bt=$(Sa,s[10]),Sa.forEach(v),Tr.forEach(v),es=I(ce),ei=_(ce,"DIV",{class:!0});var Pr=C(ei);xt=_(Pr,"DIV",{class:!0,"data-svelte-h":!0}),G(xt)!=="svelte-1a9hcos"&&(xt.textContent=ms),ui=_(Pr,"DIV",{class:!0});var Da=C(ui);Bt=$(Da,s[11]),Da.forEach(v),Pr.forEach(v),ts=I(ce),ti=_(ce,"DIV",{class:!0});var Nr=C(ti);St=_(Nr,"DIV",{class:!0,"data-svelte-h":!0}),G(St)!=="svelte-1l1j0g6"&&(St.textContent=fe),lt=_(Nr,"DIV",{class:!0});var La=C(lt);vi=$(La,s[12]),La.forEach(v),Nr.forEach(v),mi=I(ce),qt=_(ce,"DIV",{class:!0});var xr=C(qt);xi=_(xr,"DIV",{class:!0,"data-svelte-h":!0}),G(xi)!=="svelte-13w33n5"&&(xi.textContent=Ms),Ri=_(xr,"DIV",{class:!0});var Ca=C(Ri);ii=$(Ca,s[13]),Ca.forEach(v),xr.forEach(v),Es=I(ce),yi=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),G(yi)!=="svelte-1gkc7zn"&&(yi.textContent=Si),As=I(ce),Di=_(ce,"DIV",{class:!0});var Rr=C(Di);Ht=_(Rr,"DIV",{class:!0,"data-svelte-h":!0}),G(Ht)!=="svelte-veharl"&&(Ht.textContent=Fs),Ui=_(Rr,"DIV",{class:!0});var ka=C(Ui);Yi=$(ka,s[14]),ka.forEach(v),Rr.forEach(v),Vi=I(ce),Li=_(ce,"DIV",{class:!0});var Ur=C(Li);Oi=_(Ur,"DIV",{class:!0,"data-svelte-h":!0}),G(Oi)!=="svelte-1fnad0n"&&(Oi.textContent=or),gs=_(Ur,"DIV",{class:!0});var Ia=C(gs);Ki=$(Ia,s[15]),Ia.forEach(v),Ur.forEach(v),wt=I(ce),Rt=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),G(Rt)!=="svelte-7gmbxc"&&(Rt.textContent=Dt),Wt=I(ce);for(let _s=0;_s<Ne.length;_s+=1)Ne[_s].l(ce);Qt=I(ce),zt=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),G(zt)!=="svelte-zzbumo"&&(zt.textContent=nr),dr=I(ce);for(let _s=0;_s<Ke.length;_s+=1)Ke[_s].l(ce);Xi=I(ce),si=_(ce,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(si)!=="svelte-19369qr"&&(si.textContent=Ut),ce.forEach(v),this.h()},h(){h(i,"class","debug-label svelte-1yramsp"),h(l,"class","debug-val svelte-1yramsp"),h(t,"class","debug-row svelte-1yramsp"),h(c,"class","debug-label svelte-1yramsp"),h(u,"class","debug-val svelte-1yramsp"),h(o,"class","debug-row svelte-1yramsp"),h(w,"class","debug-label svelte-1yramsp"),h(D,"class","debug-val svelte-1yramsp"),h(m,"class","debug-row svelte-1yramsp"),h(T,"class","debug-label svelte-1yramsp"),h(j,"class","debug-val svelte-1yramsp"),h(E,"class","debug-row svelte-1yramsp"),h(ee,"class","debug-section svelte-1yramsp"),h(O,"class","debug-label svelte-1yramsp"),h(M,"class","debug-val svelte-1yramsp"),h(W,"class","debug-row svelte-1yramsp"),h(te,"class","debug-label svelte-1yramsp"),h(Se,"class","debug-val svelte-1yramsp"),h(oe,"class","debug-row svelte-1yramsp"),h(K,"class","debug-label svelte-1yramsp"),h(ie,"class","debug-val svelte-1yramsp"),h(he,"class","debug-row svelte-1yramsp"),h(ze,"class","debug-section svelte-1yramsp"),h($e,"class","debug-label svelte-1yramsp"),h(Ft,"class","debug-val svelte-1yramsp"),h(ht,"class","debug-row svelte-1yramsp"),h(Pt,"class","debug-label svelte-1yramsp"),h(oi,"class","debug-val svelte-1yramsp"),h(Tt,"class","debug-row svelte-1yramsp"),h(Xt,"class","debug-label svelte-1yramsp"),h(ci,"class","debug-val svelte-1yramsp"),h(ni,"class","debug-row svelte-1yramsp"),h(Nt,"class","debug-label svelte-1yramsp"),h(fi,"class","debug-val svelte-1yramsp"),h($t,"class","debug-row svelte-1yramsp"),h(xt,"class","debug-label svelte-1yramsp"),h(ui,"class","debug-val svelte-1yramsp"),h(ei,"class","debug-row svelte-1yramsp"),h(St,"class","debug-label svelte-1yramsp"),h(lt,"class","debug-val svelte-1yramsp"),h(ti,"class","debug-row svelte-1yramsp"),h(xi,"class","debug-label svelte-1yramsp"),h(Ri,"class","debug-val svelte-1yramsp"),h(qt,"class","debug-row svelte-1yramsp"),h(yi,"class","debug-section svelte-1yramsp"),h(Ht,"class","debug-label svelte-1yramsp"),h(Ui,"class","debug-val svelte-1yramsp"),h(Di,"class","debug-row svelte-1yramsp"),h(Oi,"class","debug-label svelte-1yramsp"),h(gs,"class","debug-val svelte-1yramsp"),h(Li,"class","debug-row svelte-1yramsp"),h(Rt,"class","debug-section svelte-1yramsp"),h(zt,"class","debug-section svelte-1yramsp"),h(si,"class","debug-row debug-label svelte-1yramsp"),le(si,"font-style","italic"),le(si,"margin-top","1rem"),h(e,"class","debug-cont svelte-1yramsp")},m(we,ce){P(we,e,ce),d(e,t),d(t,i),d(t,l),d(l,a),d(e,n),d(e,o),d(o,c),d(o,u),d(u,g),d(e,b),d(e,m),d(m,w),d(m,D),d(D,L),d(e,A),d(e,E),d(E,T),d(E,j),d(j,X),d(e,V),d(e,ee),d(e,U),d(e,W),d(W,O),d(W,M),d(M,q),d(e,re),d(e,oe),d(oe,te),d(oe,Se),d(Se,Q),d(e,ae),d(e,he),d(he,K),d(he,ie),d(ie,ke),d(e,Fe),d(e,ze),d(e,Je),d(e,ht),d(ht,$e),d(ht,Ft),d(Ft,ye),d(e,at),d(e,Tt),d(Tt,Pt),d(Tt,oi),d(oi,wi),d(e,Gt),d(e,ni),d(ni,Xt),d(ni,ci),d(ci,Ni),d(ci,hi),d(e,$i),d(e,$t),d($t,Nt),d($t,fi),d(fi,bt),d(e,es),d(e,ei),d(ei,xt),d(ei,ui),d(ui,Bt),d(e,ts),d(e,ti),d(ti,St),d(ti,lt),d(lt,vi),d(e,mi),d(e,qt),d(qt,xi),d(qt,Ri),d(Ri,ii),d(e,Es),d(e,yi),d(e,As),d(e,Di),d(Di,Ht),d(Di,Ui),d(Ui,Yi),d(e,Vi),d(e,Li),d(Li,Oi),d(Li,gs),d(gs,Ki),d(e,wt),d(e,Rt),d(e,Wt);for(let Te=0;Te<Ne.length;Te+=1)Ne[Te]&&Ne[Te].m(e,null);d(e,Qt),d(e,zt),d(e,dr);for(let Te=0;Te<Ke.length;Te+=1)Ke[Te]&&Ke[Te].m(e,null);d(e,Xi),d(e,si)},p(we,[ce]){if(ce&1&&_e(a,we[0]),ce&2&&_e(g,we[1]),ce&4&&_e(L,we[2]),ce&8&&_e(X,we[3]),ce&16&&N!==(N=we[4].i+"")&&_e(q,N),ce&32&&ge!==(ge=we[5].i+"")&&_e(Q,ge),ce&64&&be!==(be=we[6].i+"")&&_e(ke,be),ce&128&&_e(ye,we[7]),ce&256&&_e(wi,we[8]),ce&512&&_e(Ni,we[9]),ce&1024&&_e(bt,we[10]),ce&2048&&_e(Bt,we[11]),ce&4096&&_e(vi,we[12]),ce&8192&&_e(ii,we[13]),ce&16384&&_e(Yi,we[14]),ce&32768&&_e(Ki,we[15]),ce&65536){ut=Oe(Object.entries(we[16]));let Te;for(Te=0;Te<ut.length;Te+=1){const Ci=mo(we,ut,Te);Ne[Te]?Ne[Te].p(Ci,ce):(Ne[Te]=go(Ci),Ne[Te].c(),Ne[Te].m(e,Qt))}for(;Te<Ne.length;Te+=1)Ne[Te].d(1);Ne.length=ut.length}if(ce&131072){et=Oe(Object.entries(we[17]));let Te;for(Te=0;Te<et.length;Te+=1){const Ci=vo(we,et,Te);Ke[Te]?Ke[Te].p(Ci,ce):(Ke[Te]=po(Ci),Ke[Te].c(),Ke[Te].m(e,Xi))}for(;Te<Ke.length;Te+=1)Ke[Te].d(1);Ke.length=et.length}},i:me,o:me,d(we){we&&v(e),_t(Ne,we),_t(Ke,we)}}}function Ku(s,e,t){let i,r,l,a,n,o,c,f,u,g,b,m,w,y,D,L,A,E;return Ie(s,dn,T=>t(0,i=T)),Ie(s,ln,T=>t(1,r=T)),Ie(s,on,T=>t(2,l=T)),Ie(s,nn,T=>t(3,a=T)),Ie(s,da,T=>t(4,n=T)),Ie(s,an,T=>t(5,o=T)),Ie(s,rn,T=>t(6,c=T)),Ie(s,cn,T=>t(7,f=T)),Ie(s,hn,T=>t(8,u=T)),Ie(s,nd,T=>t(9,g=T)),Ie(s,na,T=>t(10,b=T)),Ie(s,en,T=>t(11,m=T)),Ie(s,tn,T=>t(12,w=T)),Ie(s,sn,T=>t(13,y=T)),Ie(s,ca,T=>t(14,D=T)),Ie(s,Wr,T=>t(15,L=T)),Ie(s,dd,T=>t(16,A=T)),Ie(s,cd,T=>t(17,E=T)),[i,r,l,a,n,o,c,f,u,g,b,m,w,y,D,L,A,E]}class Xu extends Qe{constructor(e){super(),Ze(this,e,Ku,Yu,Xe,{})}}function Qu(s){let e,t,i,r,l;return{c(){e=p("div"),t=cr("svg"),i=cr("g"),r=cr("polyline"),l=cr("circle"),this.h()},l(a){e=_(a,"DIV",{id:!0,style:!0,class:!0});var n=C(e);t=hr(n,"svg",{viewBox:!0,width:!0,height:!0});var o=C(t);i=hr(o,"g",{transform:!0});var c=C(i);r=hr(c,"polyline",{style:!0,points:!0,transform:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,fill:!0}),C(r).forEach(v),l=hr(c,"circle",{fill:!0,r:!0}),C(l).forEach(v),c.forEach(v),o.forEach(v),n.forEach(v),this.h()},h(){le(r,"filter","drop-shadow( 0px 0px 6px var(--sr-white) )"),h(r,"points",""),h(r,"transform","translate(0 0)"),h(r,"stroke","var(--sr-white)"),h(r,"stroke-width",10),h(r,"stroke-linecap","round"),h(r,"fill","none"),h(l,"fill","var(--sr-primary)"),h(l,"r","2"),h(i,"transform","translate(80 96) scale(-0.5 -0.5)"),h(t,"viewBox","0 0 160 160"),h(t,"width","100%"),h(t,"height","100%"),h(e,"id","upcoming-container"),le(e,"opacity",s[1]?"1":"0"),h(e,"class","svelte-1wl5x4o"),R(e,"upcoming-top",s[0]==1),R(e,"upcoming-bottom",s[0]==0)},m(a,n){P(a,e,n),d(e,t),d(t,i),d(i,r),s[5](r),d(i,l),s[6](l),s[7](t)},p(a,[n]){n&2&&le(e,"opacity",a[1]?"1":"0"),n&1&&R(e,"upcoming-top",a[0]==1),n&1&&R(e,"upcoming-bottom",a[0]==0)},i:me,o:me,d(a){a&&v(e),s[5](null),s[6](null),s[7](null)}}}const Br=16,Ps=16;function Zu(s,e,t){let{position:i=1}=e,r=!0,l,a,n,o;const c=1/Ps;class f{constructor(D,L,A,E){F(this,"svg");F(this,"lineDOM");F(this,"underlineDOM");F(this,"points");F(this,"origin",{x:0,z:0});F(this,"seenIndex",0);F(this,"loadedNode",null);F(this,"baseA");F(this,"subNode",0);F(this,"angles",[]);F(this,"pos",{x:0,y:0});F(this,"ticking",!1);F(this,"onLoadProgressBound",this.onLoadProgress.bind(this));F(this,"lerp");F(this,"i");F(this,"l");F(this,"l1");F(this,"p");F(this,"pA");F(this,"tA");F(this,"transform");F(this,"progressCounter",0);F(this,"tickTimer",0);F(this,"onTickBound",this.tick.bind(this));this.svg=D,this.underlineDOM=L,this.lineDOM=A,this.points=this.lineDOM.points,this.circleDOM=E,this.loadedNode=Ee.vehicleNode,this.seenIndex=Ee.vehicleNode.i,this.baseA=Ee.vehicleNode.a,this.angles.push(this.baseA),this.pA=this.baseA,this.pos.x=this.loadedNode.p.x,this.pos.y=this.loadedNode.p.z,Ti.addListener(this.onLoadProgressBound),this.onLoadProgress(Ti.value)}onLoadProgress(D){D<1&&this.ticking?(tt.removeSlowListener(this.onTickBound),this.ticking=!1):this.ticking||(tt.addSlowListener(this.onTickBound),this.ticking=!0)}makePoint(D,L){let A=this.svg.createSVGPoint();return A.x=D,A.y=L,A}destroy(){tt.removeSlowListener(this.onTickBound),Ti.removeListener(this.onLoadProgressBound)}tick(){if(this.lerp=Math.floor(Vd(H.position.x,H.position.z,Ee.vehicleNode)*Ps),!(this.loadedNode.i==Ee.vehicleNode.i+Br&&this.lerp<=this.subNode)){for(;this.loadedNode.i<Ee.vehicleNode.i+Br;){for(this.i=this.subNode;this.i<Ps;this.i++)this.l=this.i/Ps,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*c,this.angles.push(this.baseA);this.loadedNode=this.loadedNode.next,this.progressCounter++,this.progressCounter>100&&Math.abs(this.loadedNode.a-this.baseA)<.1&&(this.baseA=this.loadedNode.a,this.progressCounter=0),this.subNode=0}for(this.i=this.subNode;this.i<this.lerp;this.i++)this.l=this.i/Ps,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*c,this.angles.push(this.baseA);for(this.subNode=this.lerp;this.points.length>Br*Ps;)this.points.removeItem(0),this.angles.shift(),this.pos=this.points.getItem(0)}this.pA=this.pA*.95+this.angles[0]*.05,this.transform="rotate("+(90-this.pA*180/Math.PI)+")",this.transform+=" translate("+this.pos.x*-1+" "+this.pos.y*-1+")",this.lineDOM.setAttribute("transform",this.transform),this.circleDOM.setAttribute("cx",this.pos.x),this.circleDOM.setAttribute("cy",this.pos.y),this.circleDOM.setAttribute("transform",this.transform)}}function u(){t(1,r=ne.showUpcomingRoad==Ea.ALWAYS||ne.showUpcomingRoad==Ea.MANUAL&&!Yt.value)}let g=null;ct(()=>(g||(g=new f(l,a,n,o)),ne.addListener("showUpcomingRoad",u),Yt.addListener(u),()=>{g&&g.destroy(),ne.removeListener("showUpcomingRoad",u),Yt.addListener(u)}));function b(y){yt[y?"unshift":"push"](()=>{n=y,t(3,n)})}function m(y){yt[y?"unshift":"push"](()=>{o=y,t(4,o)})}function w(y){yt[y?"unshift":"push"](()=>{l=y,t(2,l)})}return s.$$set=y=>{"position"in y&&t(0,i=y.position)},[i,r,l,n,o,b,m,w]}class Ju extends Qe{constructor(e){super(),Ze(this,e,Zu,Qu,Xe,{position:0})}}function _o(s){let e,t,i,r,l,a=s[1]==!1&&bo(s),n=s[0]==Pe.UTurn&&Do(),o=s[0]==Pe.Onward&&Lo();return{c(){e=p("div"),a&&a.c(),t=k(),n&&n.c(),i=k(),o&&o.c(),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);a&&a.l(f),t=I(f),n&&n.l(f),i=I(f),o&&o.l(f),f.forEach(v),this.h()},h(){h(e,"class","prompt-main svelte-1bwut3z")},m(c,f){P(c,e,f),a&&a.m(e,null),d(e,t),n&&n.m(e,null),d(e,i),o&&o.m(e,null),l=!0},p(c,f){c[1]==!1?a?a.p(c,f):(a=bo(c),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c[0]==Pe.UTurn?n||(n=Do(),n.c(),n.m(e,i)):n&&(n.d(1),n=null),c[0]==Pe.Onward?o||(o=Lo(),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i(c){l||(c&&Ji(()=>{l&&(r||(r=_i(e,At,{duration:500},!0)),r.run(1))}),l=!0)},o(c){c&&(r||(r=_i(e,At,{duration:500},!1)),r.run(0)),l=!1},d(c){c&&v(e),a&&a.d(),n&&n.d(),o&&o.d(),c&&r&&r.end()}}}function bo(s){let e,t,i,r=s[0]==Pe.Intro&&wo(s),l=s[0]==Pe.Reset&&yo(),a=s[0]==Pe.Boost&&So();return{c(){r&&r.c(),e=k(),l&&l.c(),t=k(),a&&a.c(),i=Le()},l(n){r&&r.l(n),e=I(n),l&&l.l(n),t=I(n),a&&a.l(n),i=Le()},m(n,o){r&&r.m(n,o),P(n,e,o),l&&l.m(n,o),P(n,t,o),a&&a.m(n,o),P(n,i,o)},p(n,o){n[0]==Pe.Intro?r||(r=wo(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),n[0]==Pe.Reset?l||(l=yo(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),n[0]==Pe.Boost?a||(a=So(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},d(n){n&&(v(e),v(t),v(i)),r&&r.d(n),l&&l.d(n),a&&a.d(n)}}}function wo(s){let e,t,i='<div class="prompt-intro-key-group svelte-1bwut3z" style="margin-top: -5.5rem; margin-bottom: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">W</div></div> <div class="prompt-intro-key-group svelte-1bwut3z" style="gap: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">A</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">S</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">D</div></div> <div class="prompt-label svelte-1bwut3z">Drive</div>',r,l,a,n='<div class="prompt-intro-key-group svelte-1bwut3z"><div class="prompt-indicator prompt-key svelte-1bwut3z">Q</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">E</div></div> <div class="prompt-label svelte-1bwut3z">Change scene</div>';function o(u,g){return $u}let f=o()(s);return{c(){e=p("div"),t=p("div"),t.innerHTML=i,r=k(),f.c(),l=k(),a=p("div"),a.innerHTML=n,this.h()},l(u){e=_(u,"DIV",{class:!0});var g=C(e);t=_(g,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1bhx1mg"&&(t.innerHTML=i),r=I(g),f.l(g),l=I(g),a=_(g,"DIV",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-ipq03a"&&(a.innerHTML=n),g.forEach(v),this.h()},h(){h(t,"class","prompt-intro-group svelte-1bwut3z"),h(a,"class","prompt-intro-group svelte-1bwut3z"),h(e,"class","prompt-intro svelte-1bwut3z")},m(u,g){P(u,e,g),d(e,t),d(e,r),f.m(e,null),d(e,l),d(e,a)},d(u){u&&v(e),f.d()}}}function $u(s){let e,t='<div class="prompt-indicator prompt-key svelte-1bwut3z">F</div> <div class="prompt-label svelte-1bwut3z">Autodrive</div>';return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-14wluom"&&(e.innerHTML=t),this.h()},h(){h(e,"class","prompt-intro-group svelte-1bwut3z")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function yo(s){let e,t="R",i,r,l="Return to the road";return{c(){e=p("div"),e.textContent=t,i=k(),r=p("div"),r.textContent=l,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-10ltmgr"&&(e.textContent=t),i=I(a),r=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-191j6e8"&&(r.textContent=l),this.h()},h(){h(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),h(r,"class","prompt-label svelte-1bwut3z")},m(a,n){P(a,e,n),P(a,i,n),P(a,r,n)},d(a){a&&(v(e),v(i),v(r))}}}function So(s){let e,t="Shift",i,r,l="Hold to boost";return{c(){e=p("div"),e.textContent=t,i=k(),r=p("div"),r.textContent=l,this.h()},l(a){e=_(a,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(e)!=="svelte-1io7xvc"&&(e.textContent=t),i=I(a),r=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-x75hd1"&&(r.textContent=l),this.h()},h(){h(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),le(e,"max-width","100%"),h(r,"class","prompt-label svelte-1bwut3z")},m(a,n){P(a,e,n),P(a,i,n),P(a,r,n)},d(a){a&&(v(e),v(i),v(r))}}}function Do(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="/img/ico_uturn.svg"/>',i,r,l="Turn back";return{c(){e=p("div"),e.innerHTML=t,i=k(),r=p("div"),r.textContent=l,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1d3i2xq"&&(e.innerHTML=t),i=I(a),r=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-138exdi"&&(r.textContent=l),this.h()},h(){h(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),h(r,"class","prompt-label svelte-1bwut3z")},m(a,n){P(a,e,n),P(a,i,n),P(a,r,n)},d(a){a&&(v(e),v(i),v(r))}}}function Lo(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="/img/ico_onwards.svg"/>',i,r,l="Ever onward";return{c(){e=p("div"),e.innerHTML=t,i=k(),r=p("div"),r.textContent=l,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1jx2teq"&&(e.innerHTML=t),i=I(a),r=_(a,"DIV",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-miq92b"&&(r.textContent=l),this.h()},h(){h(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),h(r,"class","prompt-label svelte-1bwut3z")},m(a,n){P(a,e,n),P(a,i,n),P(a,r,n)},d(a){a&&(v(e),v(i),v(r))}}}function ev(s){let e,t=s[0]>Pe.None&&_o(s);return{c(){t&&t.c(),e=Le()},l(i){t&&t.l(i),e=Le()},m(i,r){t&&t.m(i,r),P(i,e,r)},p(i,[r]){i[0]>Pe.None?t?(t.p(i,r),r&1&&Y(t,1)):(t=_o(i),t.c(),Y(t,1),t.m(e.parentNode,e)):t&&(Ge(),se(t,1,1,()=>{t=null}),Be())},i(i){Y(t)},o(i){se(t)},d(i){i&&v(e),t&&t.d(i)}}}function tv(s,e,t){let i;Ie(s,bi,l=>t(1,i=l));let r=Pe.None;return ct(()=>{function l(a){t(0,r=a)}return it.addListener(l),()=>{it.removeListener(l)}}),[r,i]}class iv extends Qe{constructor(e){super(),Ze(this,e,tv,ev,Xe,{})}}function sv(s){let e,t=`<br class="svelte-nq8k2y"/>
                        The live event has now ended and leaderboards are disabled.<br class="svelte-nq8k2y"/><br class="svelte-nq8k2y"/>
                        Join the Discord server to be notified of the next one!`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1r85705"&&(e.innerHTML=t),this.h()},h(){h(e,"class","splash-minititle svelte-nq8k2y")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Co(s){let e,t,i;return{c(){e=p("div"),t=k(),i=p("div"),this.h()},l(r){e=_(r,"DIV",{id:!0,class:!0}),C(e).forEach(v),t=I(r),i=_(r,"DIV",{id:!0,class:!0}),C(i).forEach(v),this.h()},h(){h(e,"id","splash-bg-overlay"),h(e,"class","svelte-nq8k2y"),h(i,"id","splash-bg"),h(i,"class","svelte-nq8k2y")},m(r,l){P(r,e,l),P(r,t,l),P(r,i,l)},d(r){r&&(v(e),v(t),v(i))}}}function rv(s){let e,t,i,r,l,a,n,o,c,f,u="Driftmas 2025",g,b,m,w=s[6]?"continue":"begin",y,D,L,A,E,T,x,j,X,V,ee="CC BY-NC-ND 4.0 International License",Z,U,W='from <a class="splash-smallprint-link svelte-nq8k2y" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2025',O,z,M=`<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TNf9bBrZmR" alt="" class="splash-main-button svelte-nq8k2y"><img src="/img/icon_discord_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Join the Discord</a> <a href="#about" class="splash-main-button svelte-nq8k2y" style="padding-top: 2rem;"><span style="font-size: 1.5rem" class="svelte-nq8k2y">Rules &amp; Prizes</span> <br class="svelte-nq8k2y"/> <span style="font-size: 2rem" class="svelte-nq8k2y">▾</span></a> <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/" alt="" class="splash-main-button svelte-nq8k2y"><img src="/img/icon_steam_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Wishlist on Steam</a>`,N,q,re=`<div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black);"><div class="splash-body-wrapper svelte-nq8k2y" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-nq8k2y"></div> <div class="splash-blurb-corner-tr svelte-nq8k2y"></div> <div class="splash-blurb svelte-nq8k2y"><strong class="svelte-nq8k2y">Driftmas</strong> is the annual Slow Roads winter rally event. Compete to set the fastest time on the extra-slippery 5km track for a chance to win prizes and immortalisation in the game!</div> <div class="splash-blurb-corner-bl svelte-nq8k2y"></div> <div class="splash-blurb-corner-br svelte-nq8k2y"></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">The event is now over!</div> <div class="splash-body-text svelte-nq8k2y">Congratulations to the winners! This year&#39;s event was by far the biggest, with <strong class="svelte-nq8k2y">over 3,800</strong> taking part, completing <strong class="svelte-nq8k2y">over 8,500</strong> runs, and making <strong class="svelte-nq8k2y">over 75,000</strong> attempts. Thanks to all for taking part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        The server will remain active for the rest of January, at which point this page will be retired to an offline version.
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        More community events are planned for the future - make sure you join the Discord server to be notified and take part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        You can try the previous events here:
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas24.slowroads.io">Driftmas 2024</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas23.slowroads.io">Driftmas 2023</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas22.slowroads.io">Driftmas 2022</a><br class="svelte-nq8k2y"/></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black)"><div class="splash-body-wrapper svelte-nq8k2y" style="text-align: center; font-size: 1.1rem;"><div class="splash-body-header svelte-nq8k2y">Champions</div> <div class="splash-two-cols svelte-nq8k2y"><div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">GAMEPAD</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">NIIOH</span><br class="svelte-nq8k2y"/>03:23:946</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">meehdrescherstudios</span><br class="svelte-nq8k2y"/>03:25:640</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">mattsg</span><br class="svelte-nq8k2y"/>03:27:633</span></div></div> <div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">KEYBOARD + MOUSE</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">drift__</span><br class="svelte-nq8k2y"/>03:25:274</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">AccountableMenace</span><br class="svelte-nq8k2y"/>03:27:321</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">Ena</span><br class="svelte-nq8k2y"/>03:28:909</span></div></div></div> <br class="svelte-nq8k2y"/> <div class="splash-body-text svelte-nq8k2y" style="font-style: italic; font-size: 0.9rem;">Champions receive Discord Nitro and the top 20 receive keys for the Steam release of Slow Roads!</div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">Tips &amp; Tricks</div> <div class="splash-body-bullets svelte-nq8k2y"><div class="splash-body-bullet svelte-nq8k2y">Deep snow will drag your wheels - try to stay central in the road and avoid berms</div> <div class="splash-body-bullet svelte-nq8k2y">Try to drive slowly and steadily to minimise crashes</div> <div class="splash-body-bullet svelte-nq8k2y">Avoid braking while turning - brake early and accelerate through the corner</div> <div class="splash-body-bullet svelte-nq8k2y">Tap the handbrake to kick the rear out into a turn</div> <div class="splash-body-bullet svelte-nq8k2y">Combine the handbrake with regular braking to slow more quickly</div> <div class="splash-body-bullet svelte-nq8k2y">Braking early and steering around a corner is usually faster than skidding</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget you can tweak control settings to your liking</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget there is a boost button</div> <div class="splash-body-bullet svelte-nq8k2y">If you make a mistake, complete the run anyway; the best practice is through repetition of the whole route</div> <div class="splash-body-bullet svelte-nq8k2y">If you keep crashing, focus on completing entire runs slowly and carefully before gradually increasing speed</div> <div class="splash-body-bullet svelte-nq8k2y">Different camera angles or settings may feel easier to control - try a few alternatives</div> <div class="splash-body-bullet svelte-nq8k2y">Different weathers do not have different physics conditions but can affect visibility - see which you prefer (use Q and E to switch)</div> <div class="splash-body-bullet svelte-nq8k2y">Bored of the normal route? Add #samtfird to the end of the URL and refresh the page for an inverted route. You can also try #nosnow or #allsnow.</div></div></div></div>`,oe,te,ve,Se,ge=sv(),Q=!s[6]&&Co();return{c(){e=p("div"),t=p("div"),i=p("div"),r=p("canvas"),l=k(),a=p("div"),n=p("img"),c=k(),f=p("div"),f.textContent=u,g=k(),b=k(),m=p("div"),y=J(w),D=k(),ge&&ge.c(),L=k(),A=p("div"),E=p("span"),T=J(li),x=k(),j=p("br"),X=J(`\r
                This work is licensed under a `),V=p("a"),V.textContent=ee,Z=k(),U=p("div"),U.innerHTML=W,O=k(),z=p("div"),z.innerHTML=M,N=k(),q=p("div"),q.innerHTML=re,oe=k(),Q&&Q.c(),this.h()},l(ae){e=_(ae,"DIV",{id:!0,class:!0});var he=C(e);t=_(he,"DIV",{id:!0,class:!0});var K=C(t);i=_(K,"DIV",{id:!0,class:!0});var de=C(i);r=_(de,"CANVAS",{id:!0,class:!0}),C(r).forEach(v),l=I(de),a=_(de,"DIV",{id:!0,class:!0});var ie=C(a);n=_(ie,"IMG",{class:!0,src:!0,alt:!0}),c=I(ie),f=_(ie,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-fudtz6"&&(f.textContent=u),g=I(ie),b=I(ie),m=_(ie,"DIV",{id:!0,class:!0});var be=C(m);y=$(be,w),be.forEach(v),D=I(ie),ge&&ge.l(ie),ie.forEach(v),L=I(de),A=_(de,"DIV",{class:!0});var ke=C(A);E=_(ke,"SPAN",{class:!0});var Fe=C(E);T=$(Fe,li),Fe.forEach(v),x=I(ke),j=_(ke,"BR",{class:!0}),X=$(ke,`\r
                This work is licensed under a `),V=_(ke,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),G(V)!=="svelte-u8p6bq"&&(V.textContent=ee),ke.forEach(v),Z=I(de),U=_(de,"DIV",{class:!0,"data-svelte-h":!0}),G(U)!=="svelte-1078k7q"&&(U.innerHTML=W),O=I(de),z=_(de,"DIV",{class:!0,"data-svelte-h":!0}),G(z)!=="svelte-k9wub"&&(z.innerHTML=M),de.forEach(v),N=I(K),q=_(K,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),G(q)!=="svelte-1cn4vpt"&&(q.innerHTML=re),oe=I(K),Q&&Q.l(K),K.forEach(v),he.forEach(v),this.h()},h(){h(r,"id","splash-canvas"),h(r,"class","svelte-nq8k2y"),h(n,"class","splash-logo svelte-nq8k2y"),pt(n.src,o="/img/logo-stacked-white.svg")||h(n,"src",o),h(n,"alt",""),h(f,"class","splash-subtitle svelte-nq8k2y"),h(m,"id","splash-begin"),h(m,"class","svelte-nq8k2y"),R(m,"dm-disabled",!s[4]),h(a,"id","splash-title"),h(a,"class","svelte-nq8k2y"),h(E,"class","splash-smallprint-link svelte-nq8k2y"),h(j,"class","svelte-nq8k2y"),h(V,"rel","license noopener noreferrer"),h(V,"class","splash-smallprint-link svelte-nq8k2y"),h(V,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),h(V,"target","_blank"),h(A,"class","splash-smallprint splash-lr svelte-nq8k2y"),h(U,"class","splash-smallprint splash-ll svelte-nq8k2y"),h(z,"class","splash-main-buttons svelte-nq8k2y"),h(i,"id","splash-main"),h(i,"class","svelte-nq8k2y"),h(q,"id","about"),h(q,"class","svelte-nq8k2y"),h(t,"id",te=s[5]?"splash-dynamic":"splash-fixed"),h(t,"class","svelte-nq8k2y"),h(e,"id","splash"),h(e,"class","svelte-nq8k2y")},m(ae,he){P(ae,e,he),d(e,t),d(t,i),d(i,r),s[7](r),d(i,l),d(i,a),d(a,n),d(a,c),d(a,f),d(a,g),d(a,b),d(a,m),d(m,y),s[9](m),d(a,D),ge&&ge.m(a,null),d(i,L),d(i,A),d(A,E),d(E,T),d(A,x),d(A,j),d(A,X),d(A,V),d(i,Z),d(i,U),d(i,O),d(i,z),d(t,N),d(t,q),d(t,oe),Q&&Q.m(t,null),ve||(Se=[B(m,"touchstart",s[10],{passive:!0}),B(m,"click",s[11])],ve=!0)},p(ae,[he]){he&64&&w!==(w=ae[6]?"continue":"begin")&&_e(y,w),he&16&&R(m,"dm-disabled",!ae[4]),ae[6]?Q&&(Q.d(1),Q=null):Q||(Q=Co(),Q.c(),Q.m(t,null)),he&32&&te!==(te=ae[5]?"splash-dynamic":"splash-fixed")&&h(t,"id",te)},i:me,o:me,d(ae){ae&&v(e),s[7](null),s[9](null),ge&&ge.d(),Q&&Q.d(),ve=!1,nt(Se)}}}function av(s,e,t){let i,r;Ie(s,bi,D=>t(5,i=D)),Ie(s,lr,D=>t(6,r=D));let{toggleSplash:l=()=>{}}=e,a,n="Player",o,c=!0;function f(D){D.code=="Enter"&&a.click()}let u;ct(()=>{window.addEventListener("keydown",f),t(3,o.width=window.innerWidth,o),t(3,o.height=window.innerHeight,o);let D=window.innerWidth,L=window.innerHeight;u=o.getContext("2d"),u.globalAlpha=.8,u.globalCompositeOperation="lighter",u.fillStyle="white";const A=()=>{t(3,o.width=window.innerWidth,o),t(3,o.height=window.innerHeight,o),D=window.innerWidth,L=window.innerHeight};window.addEventListener("resize",A);let E=[],T=.5,x=.04+T*.06,j=.1+T*.3;for(let Z=0;Z<20+T*230;Z++)E.push({x:Math.random()*D,y:Math.random()*L,s:.5+Math.random()*4,t:Math.random()*Math.PI});let X=Date.now(),V;const ee=()=>{if(!o)return;V=requestAnimationFrame(()=>ee());let Z=Date.now()-X;X=Date.now(),u.clearRect(0,0,o.width,o.height);for(let U of E)U.y+=Z*U.s*x,U.x+=Z*U.s*Math.sin(U.t*U.s)*(j/10)+Z*j,U.t+=Z*.001,U.y>o.height&&(U.y-=o.height),U.x>o.width&&(U.x-=o.width),u.fillStyle="#fffb",u.beginPath(),u.arc(U.x,U.y,U.s,0,Math.PI*2),u.fill()};return ee(),()=>{window.removeEventListener("keydown",f),cancelAnimationFrame(V),window.removeEventListener("resize",A)}});function g(D){yt[D?"unshift":"push"](()=>{o=D,t(3,o)})}function b(){n=this.value,t(1,n)}function m(D){yt[D?"unshift":"push"](()=>{a=D,t(2,a)})}const w=()=>{ne.set("touchscreen",!0)},y=()=>{c&&l()};return s.$$set=D=>{"toggleSplash"in D&&t(0,l=D.toggleSplash)},s.$$.update=()=>{s.$$.dirty&2&&(t(4,c=(n==null?void 0:n.length)>1),Od.set("username",n),localStorage.setItem("username",n))},[l,n,a,o,c,i,r,g,b,m,w,y]}class lv extends Qe{constructor(e){super(),Ze(this,e,av,rv,Xe,{toggleSplash:0})}}function ko(s,e,t){const i=s.slice();return i[13]=e[t],i}function Io(s){let e,t="Progress is saved automatically";return{c(){e=p("span"),e.textContent=t,this.h()},l(i){e=_(i,"SPAN",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-f6s17h"&&(e.textContent=t),this.h()},h(){h(e,"class","splash-quit-msg svelte-bt03iy")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Mo(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=p("div"),e.textContent=t,this.h()},l(i){e=_(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),G(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){h(e,"id","splash-error"),h(e,"class","svelte-bt03iy")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function ov(s){let e,t,i,r,l,a,n,o,c,f,u="See full details",g,b,m=Oe(s[3]),w=[];for(let y=0;y<m.length;y+=1)w[y]=Eo(ko(s,m,y));return{c(){e=p("div"),t=J("New version - "),i=J(li),r=k(),l=p("hr"),a=k();for(let y=0;y<w.length;y+=1)w[y].c();n=k(),o=p("hr"),c=k(),f=p("div"),f.textContent=u,this.h()},l(y){e=_(y,"DIV",{class:!0});var D=C(e);t=$(D,"New version - "),i=$(D,li),r=I(D),l=_(D,"HR",{class:!0}),a=I(D);for(let L=0;L<w.length;L+=1)w[L].l(D);n=I(D),o=_(D,"HR",{class:!0}),c=I(D),f=_(D,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-5v1n0f"&&(f.textContent=u),D.forEach(v),this.h()},h(){h(l,"class","svelte-bt03iy"),h(o,"class","svelte-bt03iy"),h(f,"class","splash-version-see-more svelte-bt03iy"),h(e,"class","splash-new-version svelte-bt03iy")},m(y,D){P(y,e,D),d(e,t),d(e,i),d(e,r),d(e,l),d(e,a);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(e,null);d(e,n),d(e,o),d(e,c),d(e,f),g||(b=B(f,"click",s[8]),g=!0)},p(y,D){if(D&8){m=Oe(y[3]);let L;for(L=0;L<m.length;L+=1){const A=ko(y,m,L);w[L]?w[L].p(A,D):(w[L]=Eo(A),w[L].c(),w[L].m(e,n))}for(;L<w.length;L+=1)w[L].d(1);w.length=m.length}},d(y){y&&v(e),_t(w,y),g=!1,b()}}}function Eo(s){let e,t=s[13]+"",i;return{c(){e=p("div"),i=J(t),this.h()},l(r){e=_(r,"DIV",{class:!0});var l=C(e);i=$(l,t),l.forEach(v),this.h()},h(){h(e,"class","splash-version-change svelte-bt03iy")},m(r,l){P(r,e,l),d(e,i)},p(r,l){l&8&&t!==(t=r[13]+"")&&_e(i,t)},d(r){r&&v(e)}}}function nv(s){let e,t;return e=new xn({props:{showChangelog:s[2],onShowChangelog:s[9]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r&4&&(l.showChangelog=i[2]),r&4&&(l.onShowChangelog=i[9]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function dv(s){let e,t,i=`<img src="/img/icon_discord.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Join the Discord`,r,l,a=`<img src="/img/icon_steam.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Wishlist the Steam edition`,n,o;return{c(){e=p("div"),t=p("div"),t.innerHTML=i,r=k(),l=p("div"),l.innerHTML=a,this.h()},l(c){e=_(c,"DIV",{class:!0});var f=C(e);t=_(f,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-x64jut"&&(t.innerHTML=i),r=I(f),l=_(f,"DIV",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-3mnzb7"&&(l.innerHTML=a),f.forEach(v),this.h()},h(){h(t,"class","splash-main-button svelte-bt03iy"),h(l,"class","splash-main-button svelte-bt03iy"),h(e,"class","splash-main-buttons svelte-bt03iy")},m(c,f){P(c,e,f),d(e,t),d(e,r),d(e,l),n||(o=[B(t,"click",s[10]),B(l,"click",s[11])],n=!0)},p:me,d(c){c&&v(e),n=!1,nt(o)}}}function Ao(s){let e,t,i;return{c(){e=p("div"),t=k(),i=p("div"),this.h()},l(r){e=_(r,"DIV",{id:!0,class:!0}),C(e).forEach(v),t=I(r),i=_(r,"DIV",{id:!0,class:!0}),C(i).forEach(v),this.h()},h(){h(e,"id","splash-bg-overlay"),h(e,"class","svelte-bt03iy"),h(i,"id","splash-bg"),h(i,"class","svelte-bt03iy")},m(r,l){P(r,e,l),P(r,t,l),P(r,i,l)},d(r){r&&(v(e),v(t),v(i))}}}function cv(s){let e,t,i,r,l,a,n,o,c="web edition",f,u,g,b=s[4]?"continue":"begin",m,w,y,D="quit",L,A,E,T,x,j,X,V,ee,Z,U,W=`from <strong>topograph.io</strong> © 2026 	
                <span style="margin: 0 0.5rem;">·</span>
                All rights reserved`,O,z,M,N,q,re=s[4]&&Io(),oe=s[1]&&Mo(),te=!pi&&hs&&ov(s),ve=!pi&&nv(s),Se=!pi&&dv(s),ge=!s[4]&&Ao();return{c(){e=p("div"),t=p("div"),i=p("div"),r=p("div"),l=p("img"),n=k(),o=p("div"),o.textContent=c,f=k(),u=p("div"),g=p("div"),m=J(b),w=k(),y=p("div"),y.textContent=D,L=k(),re&&re.c(),A=k(),oe&&oe.c(),E=k(),T=p("div"),x=p("span"),j=J("Version "),X=J(li),V=k(),te&&te.c(),ee=k(),ve&&ve.c(),Z=k(),U=p("div"),U.innerHTML=W,O=k(),Se&&Se.c(),z=k(),ge&&ge.c(),this.h()},l(Q){e=_(Q,"DIV",{id:!0,class:!0});var ae=C(e);t=_(ae,"DIV",{id:!0,class:!0});var he=C(t);i=_(he,"DIV",{id:!0,class:!0});var K=C(i);r=_(K,"DIV",{id:!0,class:!0});var de=C(r);l=_(de,"IMG",{class:!0,src:!0,alt:!0}),n=I(de),o=_(de,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-szn3l"&&(o.textContent=c),f=I(de),u=_(de,"DIV",{class:!0});var ie=C(u);g=_(ie,"DIV",{class:!0});var be=C(g);m=$(be,b),be.forEach(v),w=I(ie),y=_(ie,"DIV",{class:!0,"data-svelte-h":!0}),G(y)!=="svelte-1i9wxa8"&&(y.textContent=D),L=I(ie),re&&re.l(ie),A=I(ie),oe&&oe.l(ie),ie.forEach(v),de.forEach(v),E=I(K),T=_(K,"DIV",{class:!0});var ke=C(T);x=_(ke,"SPAN",{class:!0,tabindex:!0});var Fe=C(x);j=$(Fe,"Version "),X=$(Fe,li),Fe.forEach(v),ke.forEach(v),V=I(K),te&&te.l(K),ee=I(K),ve&&ve.l(K),Z=I(K),U=_(K,"DIV",{class:!0,"data-svelte-h":!0}),G(U)!=="svelte-1p526yl"&&(U.innerHTML=W),O=I(K),Se&&Se.l(K),K.forEach(v),z=I(he),ge&&ge.l(he),he.forEach(v),ae.forEach(v),this.h()},h(){h(l,"class","splash-logo svelte-bt03iy"),pt(l.src,a="/img/logo-stacked.svg")||h(l,"src",a),h(l,"alt",""),h(o,"class","splash-subtitle svelte-bt03iy"),h(g,"class","splash-btn svelte-bt03iy"),h(y,"class","splash-btn splash-btn-outline svelte-bt03iy"),h(u,"class","splash-btns svelte-bt03iy"),h(r,"id","splash-title"),h(r,"class","svelte-bt03iy"),h(x,"class","splash-smallprint-link svelte-bt03iy"),h(x,"tabindex",-1),h(T,"class","splash-smallprint splash-lr svelte-bt03iy"),h(U,"class","splash-smallprint splash-ll svelte-bt03iy"),h(i,"id","splash-main"),h(i,"class","svelte-bt03iy"),h(t,"id","splash-fixed"),h(t,"class","svelte-bt03iy"),h(e,"id","splash"),h(e,"class","svelte-bt03iy")},m(Q,ae){P(Q,e,ae),d(e,t),d(t,i),d(i,r),d(r,l),d(r,n),d(r,o),d(r,f),d(r,u),d(u,g),d(g,m),d(u,w),d(u,y),d(u,L),re&&re.m(u,null),d(u,A),oe&&oe.m(u,null),d(i,E),d(i,T),d(T,x),d(x,j),d(x,X),d(i,V),te&&te.m(i,null),d(i,ee),ve&&ve.m(i,null),d(i,Z),d(i,U),d(i,O),Se&&Se.m(i,null),d(t,z),ge&&ge.m(t,null),M=!0,N||(q=[B(g,"click",function(){ea(s[0])&&s[0].apply(this,arguments)}),B(y,"click",s[5]),B(x,"click",s[7])],N=!0)},p(Q,[ae]){s=Q,(!M||ae&16)&&b!==(b=s[4]?"continue":"begin")&&_e(m,b),s[4]?re||(re=Io(),re.c(),re.m(u,A)):re&&(re.d(1),re=null),s[1]?oe||(oe=Mo(),oe.c(),oe.m(u,null)):oe&&(oe.d(1),oe=null),!pi&&hs&&te.p(s,ae),pi||ve.p(s,ae),pi||Se.p(s,ae),s[4]?ge&&(ge.d(1),ge=null):ge||(ge=Ao(),ge.c(),ge.m(t,null))},i(Q){M||(Y(ve),M=!0)},o(Q){se(ve),M=!1},d(Q){Q&&v(e),re&&re.d(),oe&&oe.d(),te&&te.d(),ve&&ve.d(),Se&&Se.d(),ge&&ge.d(),N=!1,nt(q)}}}function hv(s,e,t){let i;Ie(s,lr,y=>t(4,i=y));let{toggleSplash:r=()=>{}}=e,{webglError:l=!1}=e;const a=()=>{window.api?(console.log("Quitting"),window.api.quit()):console.log("No API to quit! Please press Ctrl+W to exit")};let n=!1,o=[],c=hs&&yr[2]==li[2];for(let y of ua)if(bn(y.version,yr)>0)y.quickChanges&&(li[4]==0||c)&&o.push(...y.quickChanges);else break;o.length>12&&(o=o.slice(0,12)),ct(()=>{const y=D=>{D.code=="Enter"&&r()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}});const f=y=>{window.api&&window.api.openExternal(y)},u=()=>t(2,n=!n),g=()=>t(2,n=!n),b=y=>t(2,n=y),m=()=>f("https://discord.gg/TNf9bBrZmR"),w=()=>f("https://store.steampowered.com/app/3431300/Slow_Roads/");return s.$$set=y=>{"toggleSplash"in y&&t(0,r=y.toggleSplash),"webglError"in y&&t(1,l=y.webglError)},[r,l,n,o,i,a,f,u,g,b,m,w]}class fv extends Qe{constructor(e){super(),Ze(this,e,hv,cv,Xe,{toggleSplash:0,webglError:1})}}function To(s){let e,t,i,r,l;return{c(){e=p("div"),t=p("div"),i=p("div"),r=k(),l=p("div"),this.h()},l(a){e=_(a,"DIV",{class:!0,style:!0});var n=C(e);t=_(n,"DIV",{class:!0,style:!0});var o=C(t);i=_(o,"DIV",{class:!0}),C(i).forEach(v),o.forEach(v),r=I(n),l=_(n,"DIV",{class:!0}),C(l).forEach(v),n.forEach(v),this.h()},h(){h(i,"class","ui-mouse-marker svelte-1mw879"),h(t,"class","ui-mouse-marker-container svelte-1mw879"),le(t,"transform","translateX("+s[1]+"%)"),h(l,"class","ui-mouse-center svelte-1mw879"),h(e,"class","ui-mouse svelte-1mw879"),le(e,"width",s[0]*100+"%")},m(a,n){P(a,e,n),d(e,t),d(t,i),d(e,r),d(e,l)},p(a,n){n&2&&le(t,"transform","translateX("+a[1]+"%)"),n&1&&le(e,"width",a[0]*100+"%")},d(a){a&&v(e)}}}function uv(s){let e,t,i="RESET",r,l,a=s[2]&&!s[3]&&To(s);return{c(){a&&a.c(),e=k(),t=p("div"),t.textContent=i,this.h()},l(n){a&&a.l(n),e=I(n),t=_(n,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-xx5os6"&&(t.textContent=i),this.h()},h(){h(t,"class","ui-mouse-reset svelte-1mw879"),R(t,"ui-mouse-reset-interior",s[3])},m(n,o){a&&a.m(n,o),P(n,e,o),P(n,t,o),r||(l=B(t,"click",s[4]),r=!0)},p(n,[o]){n[2]&&!n[3]?a?a.p(n,o):(a=To(n),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),o&8&&R(t,"ui-mouse-reset-interior",n[3])},i:me,o:me,d(n){n&&(v(e),v(t)),a&&a.d(n),r=!1,l()}}}function vv(s,e,t){let i;Ie(s,Sn,u=>t(3,i=u));let r=0;function l(u){t(0,r=u)}let a=0;function n(u){t(1,a=100-(u+1)/2*100)}let o=!1;function c(u){t(2,o=u)}return ct(()=>(ot.addListener("steerBarWidth",l),ot.addListener("currentSteer",n),ot.addListener("showSteerIndicator",c),()=>{ot.removeListener("steerBarWidth",l),ot.removeListener("currentSteer",n),ot.removeListener("showSteerIndicator",c)})),[r,a,o,i,()=>pe.resetByMouse()]}class mv extends Qe{constructor(e){super(),Ze(this,e,vv,uv,Xe,{})}}function Po(s){let e,t="<",i,r;return{c(){e=p("div"),e.textContent=t,this.h()},l(l){e=_(l,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(e)!=="svelte-140lecd"&&(e.textContent=t),this.h()},h(){h(e,"class","dash-autodrive-mode-arrow svelte-itei5"),le(e,"left","-0.5rem")},m(l,a){P(l,e,a),i||(r=B(e,"click",s[6]),i=!0)},p:me,d(l){l&&v(e),i=!1,r()}}}function No(s){let e,t=">",i,r;return{c(){e=p("div"),e.textContent=t,this.h()},l(l){e=_(l,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(e)!=="svelte-1dqn5zw"&&(e.textContent=t),this.h()},h(){h(e,"class","dash-autodrive-mode-arrow svelte-itei5"),le(e,"right","-0.5rem")},m(l,a){P(l,e,a),i||(r=B(e,"click",s[7]),i=!0)},p:me,d(l){l&&v(e),i=!1,r()}}}function gv(s){let e,t,i,r,l,a,n,o,c,f,u,g=s[2]&&s[0]&&Po(s),b=s[2]&&s[0]&&No(s);return{c(){e=p("div"),g&&g.c(),t=k(),i=p("div"),r=k(),l=p("div"),a=J(s[1]),n=k(),o=p("div"),c=k(),b&&b.c(),this.h()},l(m){e=_(m,"DIV",{id:!0,class:!0});var w=C(e);g&&g.l(w),t=I(w),i=_(w,"DIV",{class:!0,style:!0}),C(i).forEach(v),r=I(w),l=_(w,"DIV",{class:!0});var y=C(l);a=$(y,s[1]),y.forEach(v),n=I(w),o=_(w,"DIV",{class:!0,style:!0}),C(o).forEach(v),c=I(w),b&&b.l(w),w.forEach(v),this.h()},h(){h(i,"class","dash-autodrive-bracket svelte-itei5"),le(i,"border-right","none"),R(i,"dash-autodrive-bracket-active",s[0]),h(l,"class","dash-autodrive-text svelte-itei5"),h(o,"class","dash-autodrive-bracket svelte-itei5"),le(o,"border-left","none"),R(o,"dash-autodrive-bracket-active",s[0]),h(e,"id","dash-autodrive"),h(e,"class","svelte-itei5"),R(e,"dash-autodrive-active",s[0])},m(m,w){P(m,e,w),g&&g.m(e,null),d(e,t),d(e,i),d(e,r),d(e,l),d(l,a),d(e,n),d(e,o),d(e,c),b&&b.m(e,null),f||(u=[B(e,"click",s[8]),B(e,"mouseenter",s[3]),B(e,"mouseleave",s[4])],f=!0)},p(m,[w]){m[2]&&m[0]?g?g.p(m,w):(g=Po(m),g.c(),g.m(e,t)):g&&(g.d(1),g=null),w&1&&R(i,"dash-autodrive-bracket-active",m[0]),w&2&&_e(a,m[1]),w&1&&R(o,"dash-autodrive-bracket-active",m[0]),m[2]&&m[0]?b?b.p(m,w):(b=No(m),b.c(),b.m(e,null)):b&&(b.d(1),b=null),w&1&&R(e,"dash-autodrive-active",m[0])},i:me,o:me,d(m){m&&v(e),g&&g.d(),b&&b.d(),f=!1,nt(u)}}}function pv(s,e,t){let i=!1,r="AUTODRIVE",l=!1;function a(m){t(0,i=m)}function n(m){m==Ls.FULL?t(1,r="AUTODRIVE"):m==Ls.SPEED?t(1,r="AUTOSPEED"):m==Ls.STEER&&t(1,r="AUTOSTEER")}function o(){t(2,l=!0)}function c(){t(2,l=!1)}function f(m){let y=ne.autodriveMode+m;y<0?y=2:y>2&&(y=0),ne.set("autodriveMode",y)}return ct(()=>(Yt.addListener(a),ne.addListener("autodriveMode",n),()=>{Yt.removeListener(a),ne.removeListener("autodriveMode",n)})),[i,r,l,o,c,f,m=>{m.preventDefault(),m.stopPropagation(),f(-1)},m=>{m.preventDefault(),m.stopPropagation(),f(1)},()=>Yt.set(!i)]}class On extends Qe{constructor(e){super(),Ze(this,e,pv,gv,Xe,{})}}function xo(s){let e,t,i,r;const l=[wv,bv,_v],a=[];function n(o,c){return 2}return e=n(),t=a[e]=l[e](s),{c(){t.c(),i=Le()},l(o){t.l(o),i=Le()},m(o,c){a[e].m(o,c),P(o,i,c),r=!0},p(o,c){t.p(o,c)},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),a[e].d(o)}}}function _v(s){let e,t;return e=new of({props:{toggleSplash:s[53],webglError:s[5]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&32785&&(l.toggleSplash=i[53]),r[0]&32&&(l.webglError=i[5]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function bv(s){let e,t;return e=new lv({props:{toggleSplash:s[52]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&1&&(l.toggleSplash=i[52]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function wv(s){let e,t;return e=new fv({props:{toggleSplash:s[51],webglError:s[5]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&32785&&(l.toggleSplash=i[51]),r[0]&32&&(l.webglError=i[5]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Ro(s){let e,t,i,r="Low Performance Detected",l,a,n,o="Dismiss",c,f;function u(m,w){return yv}let b=u()(s);return{c(){e=p("div"),t=p("div"),i=p("div"),i.textContent=r,l=k(),b.c(),a=k(),n=p("div"),n.textContent=o,this.h()},l(m){e=_(m,"DIV",{class:!0});var w=C(e);t=_(w,"DIV",{class:!0});var y=C(t);i=_(y,"DIV",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-13a2ixe"&&(i.textContent=r),l=I(y),b.l(y),a=I(y),n=_(y,"DIV",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-6a9fjy"&&(n.textContent=o),y.forEach(v),w.forEach(v),this.h()},h(){h(i,"class","hwa-title svelte-bgj4yc"),h(n,"class","hwa-dismiss svelte-bgj4yc"),h(t,"class","hwa-main svelte-bgj4yc"),h(e,"class","hwa-container svelte-bgj4yc")},m(m,w){P(m,e,w),d(e,t),d(t,i),d(t,l),b.m(t,null),d(t,a),d(t,n),c||(f=B(n,"click",s[47]),c=!0)},p:me,d(m){m&&v(e),b.d(),c=!1,f()}}}function yv(s){let e,t='Make sure you have <span style="font-weight: 600">hardware acceleration</span> enabled in your browser and OS settings, then restart your browser.';return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1tdhr9z"&&(e.innerHTML=t),this.h()},h(){h(e,"class","hwa-body svelte-bgj4yc")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function Sv(s){let e,t="PAUSED",i,r;return{c(){e=p("div"),e.textContent=t,this.h()},l(l){e=_(l,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-fhlkwc"&&(e.textContent=t),this.h()},h(){h(e,"class","paused svelte-bgj4yc")},m(l,a){P(l,e,a),r=!0},p:me,i(l){r||(l&&Ji(()=>{r&&(i||(i=_i(e,At,{duration:100},!0)),i.run(1))}),r=!0)},o(l){l&&(i||(i=_i(e,At,{duration:100},!1)),i.run(0)),r=!1},d(l){l&&v(e),l&&i&&i.end()}}}function Dv(s){let e,t,i="Error",r,l,a,n=s[28].type+"",o,c,f,u=s[28].msg+"",g,b,m,w,y,D="Reload",L,A,E,T,x,j="COPY LOG",X,V;function ee(O,z){return Lv}let U=ee()(s),W=s[29]==!1&&Uo(s);return{c(){e=p("div"),t=p("div"),t.textContent=i,r=k(),l=p("div"),a=p("div"),o=J(n),c=k(),f=p("div"),g=J(u),b=k(),m=p("div"),w=J(`Sorry, something went wrong - please try reloading.
                    
                    
                    `),y=p("div"),y.textContent=D,L=k(),U.c(),A=k(),E=p("div"),W&&W.c(),T=k(),x=p("div"),x.textContent=j,this.h()},l(O){e=_(O,"DIV",{class:!0});var z=C(e);t=_(z,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-et9hky"&&(t.textContent=i),r=I(z),l=_(z,"DIV",{class:!0});var M=C(l);a=_(M,"DIV",{class:!0});var N=C(a);o=$(N,n),N.forEach(v),c=I(M),f=_(M,"DIV",{class:!0});var q=C(f);g=$(q,u),q.forEach(v),M.forEach(v),b=I(z),m=_(z,"DIV",{class:!0});var re=C(m);w=$(re,`Sorry, something went wrong - please try reloading.
                    
                    
                    `),y=_(re,"DIV",{class:!0,"data-svelte-h":!0}),G(y)!=="svelte-tpxv7y"&&(y.textContent=D),L=I(re),U.l(re),re.forEach(v),A=I(z),E=_(z,"DIV",{class:!0});var oe=C(E);W&&W.l(oe),T=I(oe),x=_(oe,"DIV",{class:!0,"data-svelte-h":!0}),G(x)!=="svelte-131fhbm"&&(x.textContent=j),oe.forEach(v),z.forEach(v),this.h()},h(){h(t,"class","error-title svelte-bgj4yc"),h(a,"class","error-type svelte-bgj4yc"),h(f,"class","error-msg svelte-bgj4yc"),h(l,"class","error-display svelte-bgj4yc"),h(y,"class","ui-btn ui-btn-active error-reload svelte-bgj4yc"),h(m,"class","error-watdo svelte-bgj4yc"),h(x,"class","error-log-copy svelte-bgj4yc"),h(E,"class","error-log svelte-bgj4yc"),h(e,"class","error svelte-bgj4yc"),R(e,"error-touch",s[29])},m(O,z){P(O,e,z),d(e,t),d(e,r),d(e,l),d(l,a),d(a,o),d(l,c),d(l,f),d(f,g),d(e,b),d(e,m),d(m,w),d(m,y),d(m,L),U.m(m,null),d(e,A),d(e,E),W&&W.m(E,null),d(E,T),d(E,x),X||(V=[B(y,"click",s[48]),B(x,"click",s[55])],X=!0)},p(O,z){z[0]&268435456&&n!==(n=O[28].type+"")&&_e(o,n),z[0]&268435456&&u!==(u=O[28].msg+"")&&_e(g,u),U.p(O,z),O[29]==!1?W?W.p(O,z):(W=Uo(O),W.c(),W.m(E,T)):W&&(W.d(1),W=null),z[0]&536870912&&R(e,"error-touch",O[29])},i:me,o:me,d(O){O&&v(e),U.d(),W&&W.d(),X=!1,nt(V)}}}function Lv(s){let e,t,i="click here",r,l,a;return{c(){e=J("If this keeps happening, "),t=p("a"),t.textContent=i,r=J(" to try a different seed."),this.h()},l(n){e=$(n,"If this keeps happening, "),t=_(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),G(t)!=="svelte-9g2e47"&&(t.textContent=i),r=$(n," to try a different seed."),this.h()},h(){h(t,"href","#"),h(t,"class","ui-link svelte-bgj4yc")},m(n,o){P(n,e,o),P(n,t,o),P(n,r,o),l||(a=B(t,"click",s[54]),l=!0)},p:me,d(n){n&&(v(e),v(t),v(r)),l=!1,a()}}}function Uo(s){let e,t=s[28].log+"",i;return{c(){e=p("pre"),i=J(t),this.h()},l(r){e=_(r,"PRE",{id:!0,class:!0});var l=C(e);i=$(l,t),l.forEach(v),this.h()},h(){h(e,"id","error-log-content"),h(e,"class","svelte-bgj4yc")},m(r,l){P(r,e,l),d(e,i)},p(r,l){l[0]&268435456&&t!==(t=r[28].log+"")&&_e(i,t)},d(r){r&&v(e)}}}function Vo(s){let e,t;return e=new Xu({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Cv(s){let e,t=`<span style="font-size: 1.25rem">UNLICENSED EMBED</span> <br/>
                Play the original ad-free on <a class="ui-mb-a svelte-bgj4yc" href="https://slowroads.io">slowroads.io</a>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-hmosml"&&(e.innerHTML=t),this.h()},h(){h(e,"class","ui-mb svelte-bgj4yc")},m(i,r){P(i,e,r)},d(i){i&&v(e)}}}function kv(s){let e,t,i,r,l,a,n,o,c,f,u;e=new iv({});let g=s[26]&&Oo(),b=Mv(s),m=s[9]&&zo(s),w=s[15]&&Fo(s);const y=[Pv,Tv],D=[];function L(E,T){return E[37]==!1||E[27]?0:E[29]==!0?1:-1}~(n=L(s))&&(o=D[n]=y[n](s));let A=(s[29]||s[8]==1)&&Yo();return{c(){xe(e.$$.fragment),t=k(),g&&g.c(),i=k(),b&&b.c(),r=k(),m&&m.c(),l=k(),w&&w.c(),a=k(),o&&o.c(),c=k(),A&&A.c(),f=Le()},l(E){Re(e.$$.fragment,E),t=I(E),g&&g.l(E),i=I(E),b&&b.l(E),r=I(E),m&&m.l(E),l=I(E),w&&w.l(E),a=I(E),o&&o.l(E),c=I(E),A&&A.l(E),f=Le()},m(E,T){Ue(e,E,T),P(E,t,T),g&&g.m(E,T),P(E,i,T),b&&b.m(E,T),P(E,r,T),m&&m.m(E,T),P(E,l,T),w&&w.m(E,T),P(E,a,T),~n&&D[n].m(E,T),P(E,c,T),A&&A.m(E,T),P(E,f,T),u=!0},p(E,T){E[26]?g?T[0]&67108864&&Y(g,1):(g=Oo(),g.c(),Y(g,1),g.m(i.parentNode,i)):g&&(Ge(),se(g,1,1,()=>{g=null}),Be()),b.p(E,T),E[9]?m?m.p(E,T):(m=zo(E),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),E[15]?w?(w.p(E,T),T[0]&32768&&Y(w,1)):(w=Fo(E),w.c(),Y(w,1),w.m(a.parentNode,a)):w&&(Ge(),se(w,1,1,()=>{w=null}),Be());let x=n;n=L(E),n===x?~n&&D[n].p(E,T):(o&&(Ge(),se(D[x],1,1,()=>{D[x]=null}),Be()),~n?(o=D[n],o?o.p(E,T):(o=D[n]=y[n](E),o.c()),Y(o,1),o.m(c.parentNode,c)):o=null),E[29]||E[8]==1?A||(A=Yo(),A.c(),A.m(f.parentNode,f)):A&&(A.d(1),A=null)},i(E){u||(Y(e.$$.fragment,E),Y(g),Y(b),Y(w),Y(o),u=!0)},o(E){se(e.$$.fragment,E),se(g),se(b),se(w),se(o),u=!1},d(E){E&&(v(t),v(i),v(r),v(l),v(a),v(c),v(f)),Ve(e,E),g&&g.d(E),b&&b.d(E),m&&m.d(E),w&&w.d(E),~n&&D[n].d(E),A&&A.d(E)}}}function Iv(s){let e,t,i,r,l=s[30]&&Ko(s);return{c(){e=p("div"),l&&l.c(),this.h()},l(a){e=_(a,"DIV",{class:!0});var n=C(e);l&&l.l(n),n.forEach(v),this.h()},h(){h(e,"class","load-bar svelte-bgj4yc"),R(e,"load-bar-init",s[7])},m(a,n){P(a,e,n),l&&l.m(e,null),r=!0},p(a,n){a[30]?l?l.p(a,n):(l=Ko(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null),(!r||n[0]&128)&&R(e,"load-bar-init",a[7])},i(a){r||(a&&Ji(()=>{r&&(i&&i.end(1),t=sa(e,At,{duration:100}),t.start())}),r=!0)},o(a){t&&t.invalidate(),a&&(i=ra(e,At,{delay:100,duration:300})),r=!1},d(a){a&&v(e),l&&l.d(),a&&i&&i.end()}}}function Oo(s){let e,t;return e=new mv({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Mv(s){let e,t,i=s[13]==1&&Ho(s);return{c(){i&&i.c(),e=Le()},l(r){i&&i.l(r),e=Le()},m(r,l){i&&i.m(r,l),P(r,e,l),t=!0},p(r,l){r[13]==1?i?(i.p(r,l),l[0]&8192&&Y(i,1)):(i=Ho(r),i.c(),Y(i,1),i.m(e.parentNode,e)):i&&(Ge(),se(i,1,1,()=>{i=null}),Be())},i(r){t||(Y(i),t=!0)},o(r){se(i),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Ho(s){let e,t,i,r,l,a;return t=new zf({props:{showConfig:s[9],openConfig:s[60],closeConfig:s[61]}}),{c(){e=p("div"),xe(t.$$.fragment),r=k(),l=Le()},l(n){e=_(n,"DIV",{});var o=C(e);Re(t.$$.fragment,o),o.forEach(v),r=I(n),l=Le()},m(n,o){P(n,e,o),Ue(t,e,null),P(n,r,o),P(n,l,o),a=!0},p(n,o){const c={};o[0]&512&&(c.showConfig=n[9]),o[0]&512&&(c.openConfig=n[60]),o[0]&512&&(c.closeConfig=n[61]),t.$set(c)},i(n){a||(Y(t.$$.fragment,n),n&&Ji(()=>{a&&(i||(i=_i(e,At,{duration:100},!0)),i.run(1))}),a=!0)},o(n){se(t.$$.fragment,n),n&&(i||(i=_i(e,At,{duration:100},!1)),i.run(0)),a=!1},d(n){n&&(v(e),v(r),v(l)),Ve(t),n&&i&&i.end()}}}function zo(s){let e,t,i;return{c(){e=p("div"),this.h()},l(r){e=_(r,"DIV",{id:!0,class:!0}),C(e).forEach(v),this.h()},h(){h(e,"id","config-close"),h(e,"class","svelte-bgj4yc")},m(r,l){P(r,e,l),t||(i=B(e,"click",s[62]),t=!0)},p:me,d(r){r&&v(e),t=!1,i()}}}function Fo(s){let e,t,i,r;const l=[Av,Ev],a=[];function n(o,c){return 0}return e=n(),t=a[e]=l[e](s),{c(){t.c(),i=Le()},l(o){t.l(o),i=Le()},m(o,c){a[e].m(o,c),P(o,i,c),r=!0},p(o,c){t.p(o,c)},i(o){r||(Y(t),r=!0)},o(o){se(t),r=!1},d(o){o&&v(i),a[e].d(o)}}}function Ev(s){let e,t;return e=new cf({props:{enabled:!s[9]&&!s[1]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&514&&(l.enabled=!i[9]&&!i[1]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Av(s){let e,t;return e=new uf({props:{enabled:!s[9]&&!s[1]}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&514&&(l.enabled=!i[9]&&!i[1]),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Tv(s){let e,t;return e=new On({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p:me,i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Pv(s){let e,t,i,r,l,a,n,o,c,f=(s[41]*s[21]).toFixed(1)+"",u,g,b,m,w,y,D,L=(s[42]*s[22]).toFixed(1)+"",A,E,T,x,j,X,V,ee=s[38]&&Go(),Z=s[39]&&Bo(),U=s[37]==!1&&qo(s),W=Nv(),O=s[29]==!1&&Wo(s),z=s[40]&&!s[29]&&jo();return{c(){e=p("div"),ee&&ee.c(),t=k(),Z&&Z.c(),i=k(),U&&U.c(),r=k(),W&&W.c(),l=k(),a=p("div"),O&&O.c(),n=k(),o=p("div"),z&&z.c(),c=k(),u=J(f),g=k(),b=p("div"),m=J(s[23]),w=k(),y=p("div"),D=p("div"),A=J(L),E=k(),T=p("div"),x=J(s[24]),j=k(),X=p("div"),this.h()},l(M){e=_(M,"DIV",{class:!0});var N=C(e);ee&&ee.l(N),t=I(N),Z&&Z.l(N),N.forEach(v),i=I(M),U&&U.l(M),r=I(M),W&&W.l(M),l=I(M),a=_(M,"DIV",{class:!0});var q=C(a);O&&O.l(q),n=I(q),o=_(q,"DIV",{class:!0});var re=C(o);z&&z.l(re),c=I(re),u=$(re,f),re.forEach(v),g=I(q),b=_(q,"DIV",{class:!0});var oe=C(b);m=$(oe,s[23]),oe.forEach(v),q.forEach(v),w=I(M),y=_(M,"DIV",{class:!0});var te=C(y);D=_(te,"DIV",{class:!0});var ve=C(D);A=$(ve,L),ve.forEach(v),E=I(te),T=_(te,"DIV",{class:!0});var Se=C(T);x=$(Se,s[24]),Se.forEach(v),te.forEach(v),j=I(M),X=_(M,"DIV",{class:!0}),C(X).forEach(v),this.h()},h(){h(e,"class","dash-icons svelte-bgj4yc"),R(e,"dash-icons-bottom",s[8]!=1),R(e,"dash-icons-top",s[29]||s[8]==1),h(o,"class","stat-value svelte-bgj4yc"),h(b,"class","stat-unit svelte-bgj4yc"),h(a,"class","stat speed svelte-bgj4yc"),R(a,"speed-touch",s[29]),R(a,"stat-bottom",s[8]!=1),R(a,"stat-top",s[29]||s[8]==1),h(D,"class","stat-value svelte-bgj4yc"),h(T,"class","stat-unit svelte-bgj4yc"),h(y,"class","stat distance svelte-bgj4yc"),R(y,"distance-touch",s[29]),R(y,"stat-bottom",s[8]==0),R(y,"stat-top",s[29]),h(X,"class","stat-underlay svelte-bgj4yc"),R(X,"underlay-top",s[29]||s[8]==1)},m(M,N){P(M,e,N),ee&&ee.m(e,null),d(e,t),Z&&Z.m(e,null),P(M,i,N),U&&U.m(M,N),P(M,r,N),W&&W.m(M,N),P(M,l,N),P(M,a,N),O&&O.m(a,null),d(a,n),d(a,o),z&&z.m(o,null),d(o,c),d(o,u),d(a,g),d(a,b),d(b,m),P(M,w,N),P(M,y,N),d(y,D),d(D,A),d(y,E),d(y,T),d(T,x),P(M,j,N),P(M,X,N),V=!0},p(M,N){M[38]?ee?N[1]&128&&Y(ee,1):(ee=Go(),ee.c(),Y(ee,1),ee.m(e,t)):ee&&(Ge(),se(ee,1,1,()=>{ee=null}),Be()),M[39]?Z?N[1]&256&&Y(Z,1):(Z=Bo(),Z.c(),Y(Z,1),Z.m(e,null)):Z&&(Ge(),se(Z,1,1,()=>{Z=null}),Be()),(!V||N[0]&256)&&R(e,"dash-icons-bottom",M[8]!=1),(!V||N[0]&536871168)&&R(e,"dash-icons-top",M[29]||M[8]==1),M[37]==!1?U?(U.p(M,N),N[1]&64&&Y(U,1)):(U=qo(M),U.c(),Y(U,1),U.m(r.parentNode,r)):U&&(Ge(),se(U,1,1,()=>{U=null}),Be()),M[29]==!1?O?O.p(M,N):(O=Wo(M),O.c(),O.m(a,n)):O&&(O.d(1),O=null),M[40]&&!M[29]?z?N[0]&536870912|N[1]&512&&Y(z,1):(z=jo(),z.c(),Y(z,1),z.m(o,c)):z&&(Ge(),se(z,1,1,()=>{z=null}),Be()),(!V||N[0]&2097152|N[1]&1024)&&f!==(f=(M[41]*M[21]).toFixed(1)+"")&&_e(u,f),(!V||N[0]&8388608)&&_e(m,M[23]),(!V||N[0]&536870912)&&R(a,"speed-touch",M[29]),(!V||N[0]&256)&&R(a,"stat-bottom",M[8]!=1),(!V||N[0]&536871168)&&R(a,"stat-top",M[29]||M[8]==1),(!V||N[0]&4194304|N[1]&2048)&&L!==(L=(M[42]*M[22]).toFixed(1)+"")&&_e(A,L),(!V||N[0]&16777216)&&_e(x,M[24]),(!V||N[0]&536870912)&&R(y,"distance-touch",M[29]),(!V||N[0]&256)&&R(y,"stat-bottom",M[8]==0),(!V||N[0]&536870912)&&R(y,"stat-top",M[29]),(!V||N[0]&536871168)&&R(X,"underlay-top",M[29]||M[8]==1)},i(M){V||(Y(ee),Y(Z),Y(U),Y(W),Y(z),V=!0)},o(M){se(ee),se(Z),se(U),se(W),se(z),V=!1},d(M){M&&(v(e),v(i),v(r),v(l),v(a),v(w),v(y),v(j),v(X)),ee&&ee.d(),Z&&Z.d(),U&&U.d(M),W&&W.d(M),O&&O.d(),z&&z.d()}}}function Go(s){let e,t,i,r,l;return{c(){e=p("img"),this.h()},l(a){e=_(a,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){h(e,"class","dash-icon svelte-bgj4yc"),le(e,"right","3rem"),pt(e.src,t="/img/ico_steer_lock.svg")||h(e,"src",t)},m(a,n){P(a,e,n),l=!0},i(a){l||(a&&Ji(()=>{l&&(r&&r.end(1),i=sa(e,At,{duration:100}),i.start())}),l=!0)},o(a){i&&i.invalidate(),a&&(r=ra(e,At,{duration:400})),l=!1},d(a){a&&v(e),a&&r&&r.end()}}}function Bo(s){let e,t,i,r;return{c(){e=p("img"),this.h()},l(l){e=_(l,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){h(e,"class","dash-icon svelte-bgj4yc"),le(e,"right","0rem"),pt(e.src,t="/img/ico_brake.svg")||h(e,"src",t)},m(l,a){P(l,e,a),r=!0},i(l){r||(l&&Ji(()=>{r&&(i||(i=_i(e,At,{duration:200},!0)),i.run(1))}),r=!0)},o(l){l&&(i||(i=_i(e,At,{duration:200},!1)),i.run(0)),r=!1},d(l){l&&v(e),l&&i&&i.end()}}}function qo(s){let e,t;return e=new Ju({props:{position:s[29]?1:0}}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},p(i,r){const l={};r[0]&536870912&&(l.position=i[29]?1:0),e.$set(l)},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Nv(s){let e,t;return e=new On({}),{c(){xe(e.$$.fragment)},l(i){Re(e.$$.fragment,i)},m(i,r){Ue(e,i,r),t=!0},i(i){t||(Y(e.$$.fragment,i),t=!0)},o(i){se(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function Wo(s){let e,t,i,r,l,a,n="▲",o,c,f,u,g="▼",b,m,w,y="▲",D,L,A,E,T="▼",x,j;return{c(){e=p("div"),t=p("img"),r=k(),l=p("div"),a=p("div"),a.textContent=n,o=k(),c=J(s[19]),f=k(),u=p("div"),u.textContent=g,b=k(),m=p("div"),w=p("div"),w.textContent=y,D=k(),L=J(s[18]),A=k(),E=p("div"),E.textContent=T,this.h()},l(X){e=_(X,"DIV",{class:!0});var V=C(e);t=_(V,"IMG",{class:!0,alt:!0,src:!0}),r=I(V),l=_(V,"DIV",{class:!0});var ee=C(l);a=_(ee,"DIV",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-178mwg7"&&(a.textContent=n),o=I(ee),c=$(ee,s[19]),f=I(ee),u=_(ee,"DIV",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1kexe0n"&&(u.textContent=g),ee.forEach(v),b=I(V),m=_(V,"DIV",{class:!0});var Z=C(m);w=_(Z,"DIV",{class:!0,"data-svelte-h":!0}),G(w)!=="svelte-1nsidbo"&&(w.textContent=y),D=I(Z),L=$(Z,s[18]),A=I(Z),E=_(Z,"DIV",{class:!0,"data-svelte-h":!0}),G(E)!=="svelte-uwpd61"&&(E.textContent=T),Z.forEach(v),V.forEach(v),this.h()},h(){h(t,"class","sc-icon svelte-bgj4yc"),h(t,"alt",""),pt(t.src,i=s[17]?"/img/ico_lock_closed.svg":"/img/ico_lock_open.svg")||h(t,"src",i),R(t,"sc-icon-active",s[17]),h(a,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),R(a,"sc-hidden",!s[20]),h(u,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),R(u,"sc-hidden",!s[20]),h(l,"class","sc-val svelte-bgj4yc"),R(l,"sc-hidden",!s[17]),h(w,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),h(E,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),h(m,"class","sc-label svelte-bgj4yc"),R(m,"sc-hidden",!s[20]||!s[17]),h(e,"class","sc-main svelte-bgj4yc")},m(X,V){P(X,e,V),d(e,t),d(e,r),d(e,l),d(l,a),d(l,o),d(l,c),d(l,f),d(l,u),d(e,b),d(e,m),d(m,w),d(m,D),d(m,L),d(m,A),d(m,E),x||(j=[B(t,"click",s[45]),B(a,"click",ha),B(u,"click",fa),B(w,"click",s[63]),B(E,"click",s[64]),B(e,"mouseenter",s[65]),B(e,"mouseleave",s[66])],x=!0)},p(X,V){V[0]&131072&&!pt(t.src,i=X[17]?"/img/ico_lock_closed.svg":"/img/ico_lock_open.svg")&&h(t,"src",i),V[0]&131072&&R(t,"sc-icon-active",X[17]),V[0]&1048576&&R(a,"sc-hidden",!X[20]),V[0]&524288&&_e(c,X[19]),V[0]&1048576&&R(u,"sc-hidden",!X[20]),V[0]&131072&&R(l,"sc-hidden",!X[17]),V[0]&262144&&_e(L,X[18]),V[0]&1179648&&R(m,"sc-hidden",!X[20]||!X[17])},d(X){X&&v(e),x=!1,nt(j)}}}function jo(s){let e,t,i,r,l;return{c(){e=p("img"),this.h()},l(a){e=_(a,"IMG",{class:!0,src:!0}),this.h()},h(){h(e,"class","stat-icon svelte-bgj4yc"),pt(e.src,t="/img/ico_boost.svg")||h(e,"src",t)},m(a,n){P(a,e,n),l=!0},i(a){l||(a&&Ji(()=>{l&&(r&&r.end(1),i=sa(e,At,{duration:100}),i.start())}),l=!0)},o(a){i&&i.invalidate(),a&&(r=ra(e,At,{duration:400})),l=!1},d(a){a&&v(e),a&&r&&r.end()}}}function Yo(s){let e;return{c(){e=p("div"),this.h()},l(t){e=_(t,"DIV",{class:!0}),C(e).forEach(v),this.h()},h(){h(e,"class","menu-underlay svelte-bgj4yc")},m(t,i){P(t,e,i)},d(t){t&&v(e)}}}function Ko(s){let e,t,i="LOADING",r,l,a,n,o,c=(s[14]??"")+"",f;return{c(){e=p("div"),t=p("div"),t.textContent=i,r=k(),l=p("div"),a=p("div"),n=k(),o=p("div"),f=J(c),this.h()},l(u){e=_(u,"DIV",{class:!0});var g=C(e);t=_(g,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1mn9znm"&&(t.textContent=i),r=I(g),l=_(g,"DIV",{class:!0});var b=C(l);a=_(b,"DIV",{class:!0,style:!0}),C(a).forEach(v),b.forEach(v),n=I(g),o=_(g,"DIV",{class:!0});var m=C(o);f=$(m,c),m.forEach(v),g.forEach(v),this.h()},h(){h(t,"class","load-bar-prog svelte-bgj4yc"),h(a,"class","load-bar-bar-fill svelte-bgj4yc"),le(a,"width",s[13]*100+"%"),h(l,"class","load-bar-bar svelte-bgj4yc"),h(o,"class","load-bar-stage svelte-bgj4yc"),h(e,"class","load-bar-main svelte-bgj4yc")},m(u,g){P(u,e,g),d(e,t),d(e,r),d(e,l),d(l,a),d(e,n),d(e,o),d(o,f)},p(u,g){g[0]&8192&&le(a,"width",u[13]*100+"%"),g[0]&16384&&c!==(c=(u[14]??"")+"")&&_e(f,c)},d(u){u&&v(e)}}}function xv(s){let e,t,i,r,l,a,n,o,c,f,u,g,b,m,w,y,D,L,A,E,T=s[0]&&xo(s),x=s[11]&&Ro(s);const j=[Dv,Sv],X=[];function V(M,N){return M[28]?0:M[25]&&!M[1]?1:-1}~(l=V(s))&&(a=X[l]=j[l](s));let ee=s[12]&&Vo(),Z=s[44]&&Cv();f=new ju({props:{showSettings:s[1],showPrompt:s[10],openSettings:s[56],closeSettings:s[57],showBar:s[6],onShowSplash:s[58]}});let U=mn;const W=[Iv,kv],O=[];function z(M,N){return M[13]<1?0:M[6]&&!M[25]&&!M[1]&&!M[2]?1:-1}return~(b=z(s))&&(m=O[b]=W[b](s)),{c(){T&&T.c(),e=k(),x&&x.c(),t=k(),i=p("div"),r=p("div"),a&&a.c(),n=k(),ee&&ee.c(),o=k(),Z&&Z.c(),c=k(),xe(f.$$.fragment),u=k(),g=k(),m&&m.c(),y=k(),D=p("canvas"),this.h()},l(M){T&&T.l(M),e=I(M),x&&x.l(M),t=I(M),i=_(M,"DIV",{id:!0,tabindex:!0,autofocus:!0,class:!0});var N=C(i);r=_(N,"DIV",{id:!0,class:!0});var q=C(r);a&&a.l(q),n=I(q),ee&&ee.l(q),o=I(q),Z&&Z.l(q),c=I(q),Re(f.$$.fragment,q),u=I(q),g=I(q),m&&m.l(q),q.forEach(v),y=I(N),D=_(N,"CANVAS",{class:!0}),C(D).forEach(v),N.forEach(v),this.h()},h(){h(r,"id",w=s[15]?"ui-dynamic":"ui-fixed"),h(r,"class","svelte-bgj4yc"),h(D,"class","svelte-bgj4yc"),R(D,"canvas-paused",s[25]||s[1]||s[2]),h(i,"id","main"),h(i,"tabindex",-1),h(i,"autofocus",""),h(i,"class","svelte-bgj4yc")},m(M,N){T&&T.m(M,N),P(M,e,N),x&&x.m(M,N),P(M,t,N),P(M,i,N),d(i,r),~l&&X[l].m(r,null),d(r,n),ee&&ee.m(r,null),d(r,o),Z&&Z.m(r,null),d(r,c),Ue(f,r,null),d(r,u),d(r,g),~b&&O[b].m(r,null),s[67](r),d(i,y),d(i,D),s[68](D),s[69](i),L=!0,i.focus(),A||(E=B(i,"contextmenu",Rv),A=!0)},p(M,N){M[0]?T?(T.p(M,N),N[0]&1&&Y(T,1)):(T=xo(M),T.c(),Y(T,1),T.m(e.parentNode,e)):T&&(Ge(),se(T,1,1,()=>{T=null}),Be()),M[11]?x?x.p(M,N):(x=Ro(M),x.c(),x.m(t.parentNode,t)):x&&(x.d(1),x=null);let q=l;l=V(M),l===q?~l&&X[l].p(M,N):(a&&(Ge(),se(X[q],1,1,()=>{X[q]=null}),Be()),~l?(a=X[l],a?a.p(M,N):(a=X[l]=j[l](M),a.c()),Y(a,1),a.m(r,n)):a=null),M[12]?ee?N[0]&4096&&Y(ee,1):(ee=Vo(),ee.c(),Y(ee,1),ee.m(r,o)):ee&&(Ge(),se(ee,1,1,()=>{ee=null}),Be());const re={};N[0]&2&&(re.showSettings=M[1]),N[0]&1024&&(re.showPrompt=M[10]),N[0]&2&&(re.openSettings=M[56]),N[0]&2&&(re.closeSettings=M[57]),N[0]&64&&(re.showBar=M[6]),f.$set(re);let oe=b;b=z(M),b===oe?~b&&O[b].p(M,N):(m&&(Ge(),se(O[oe],1,1,()=>{O[oe]=null}),Be()),~b?(m=O[b],m?m.p(M,N):(m=O[b]=W[b](M),m.c()),Y(m,1),m.m(r,null)):m=null),(!L||N[0]&32768&&w!==(w=M[15]?"ui-dynamic":"ui-fixed"))&&h(r,"id",w),(!L||N[0]&33554438)&&R(D,"canvas-paused",M[25]||M[1]||M[2])},i(M){L||(Y(T),Y(a),Y(ee),Y(f.$$.fragment,M),Y(U),Y(m),L=!0)},o(M){se(T),se(a),se(ee),se(f.$$.fragment,M),se(U),se(m),L=!1},d(M){M&&(v(e),v(t),v(i)),T&&T.d(M),x&&x.d(M),~l&&X[l].d(),ee&&ee.d(),Z&&Z.d(),Ve(f),~b&&O[b].d(),s[67](null),s[68](null),s[69](null),A=!1,E()}}}const Rv=s=>{s.stopPropagation(),s.preventDefault()};function Uv(s,e,t){let i,r,l,a,n,o,c,f,u,g,b,m,w,y,D,L;Ie(s,ys,fe=>t(50,i=fe)),Ie(s,Pn,fe=>t(28,r=fe)),Ie(s,bi,fe=>t(29,l=fe)),Ie(s,lr,fe=>t(30,a=fe)),Ie(s,dn,fe=>t(31,n=fe)),Ie(s,cn,fe=>t(32,o=fe)),Ie(s,hn,fe=>t(33,c=fe)),Ie(s,da,fe=>t(34,f=fe)),Ie(s,ca,fe=>t(35,u=fe)),Ie(s,na,fe=>t(36,g=fe)),Ie(s,Sn,fe=>t(37,b=fe)),Ie(s,_n,fe=>t(38,m=fe)),Ie(s,pn,fe=>t(39,w=fe)),Ie(s,gn,fe=>t(40,y=fe)),Ie(s,Kr,fe=>t(41,D=fe)),Ie(s,Xr,fe=>t(42,L=fe));const A=["KILOMETERS PER HOUR","MILES PER HOUR"],E=["KILOMETERS","MILES"],T=Nn(),x=window.self!==window.top;let j=!1,X=!0,V=i,ee=!0,Z=ne.hudPosition,U=!1,W=!1,O=!1,z=!1,M=!1,N=ne.showDebug,q=0,re="",oe=wr.value,te,ve,Se,ge,Q=null,ae=!0,he="CRUISE",K=80,de=!1;function ie(){t(17,ae=Ye.speedControl),ae&&(t(18,he=Ye.speedControlMode==Yr.Cruise?"CRUISE":"MAX"),t(19,K=Math.round(Math.round(Ye.speedControlTarget*$e/5)*5)))}function be(){Ye.set("speedControl",!Ye.speedControl)}function ke(fe){Ye.set("speedControlMode",(Ye.speedControlMode+fe+2)%2)}let Fe=0,ze=()=>{Q.onMount(te,ve,Se),ve.focus(),ge=new ResizeObserver(lt=>{Q.setSize(ve.offsetWidth,ve.offsetHeight)}),ge.observe(ve),Ce.addListener("Escape",()=>{M?(t(2,M=!1),tt.resume()):V&&at?ys.set(!V):!W&&at?tt.resume():t(1,W=!W)}),Ce.addListener(gi.mapping.ToggleDebug,()=>{ne.set("showDebug",!ne.showDebug)});const fe=lt=>{bi.set(lt)};ne.addListener("touchscreen",fe),ne.addListener("showDebug",lt=>{t(12,N=lt)}),ne.addListener("hideUI",lt=>{t(6,X=!lt)}),ne.addListener("hudPosition",lt=>{t(8,Z=lt)}),Ye.addListener("speedControl",ie),Ye.addListener("speedControlMode",ie),Ye.addListener("speedControlTarget",ie),cs.addListener(lt=>{lt!=Fe&&(ie(),fe(ne.touchscreen),t(12,N=ne.showDebug),t(6,X=!ne.hideUI),t(8,Z=ne.hudPosition),Fe=lt)}),rt.hasSeenSettings||(Rs.addListener("fps",lt=>{lt&&!rt.hasSeenSettings&&t(10,O=!0)}),Rs.addListener("hwa",lt=>{lt&&!rt.hasSeenHWAWarning&&t(11,z=!0)}))};function ft(fe){t(13,q=fe),fe>=1&&t(7,ee=!1)}function Je(fe){t(14,re=fe)}let ht=1,$e=1,Pi=A[0],Ft=E[0];function ye(fe){t(21,ht=qr[ne.units]),t(22,$e=hd[ne.units]),t(23,Pi=A[ne.units]),t(24,Ft=E[ne.units]),ie()}let at=!1;function Tt(fe){t(25,at=fe)}let Pt=!1;function Ot(fe){t(26,Pt=fe)}function oi(fe){fe&&t(11,z=!0)}let wi=!1;function Gt(fe){t(27,wi=fe)}ct(()=>(Q&&ze(),Ti.addListener(ft),Ha.addListener(Je),ne.addListener("units",ye),ne.addListener("showInteriorHud",Gt),tt.addStateListener(Tt),ot.addListener("useMouse",Ot),wr.addListener(fe=>t(15,oe=fe)),Rs.addListener("hwa",oi),()=>{Ti.removeListener(ft),Ha.removeListener(Je),ne.removeListener("units",ye),ne.removeListener("showInteriorHud",Gt),ot.removeListener("useMouse",Ot),Rs.removeListener("hwa",oi),tt.removeStateListener(Tt),tt.destroy()})),Gn(()=>{Q&&(Q.onDestroy(),ge.disconnect())});function ni(){t(11,z=!1),tt.unlock()}function Xt(){location.reload()}const di=fe=>{V&&oe&&ve.requestFullscreen&&ve.requestFullscreen(),ys.set(!V)},ci=fe=>{Us.init(),ys.set(!V)},Ni=fe=>{V&&oe&&ve.requestFullscreen&&ve.requestFullscreen(),ys.set(!V)},hi=()=>{ws.forceNewSeed(),Xt()},$i=fe=>{navigator.clipboard.writeText("```\n"+document.getElementById("error-log-content").innerHTML+"\n```")},$t=()=>t(1,W=!0),Nt=()=>t(1,W=!1),vs=fe=>{ys.set(!0),document.fullscreenElement&&document.exitFullscreen()},fi=fe=>t(2,M=fe),bt=()=>t(9,U=!0),es=()=>t(9,U=!1),ei=()=>t(9,U=!1),xt=()=>ke(1),ms=()=>ke(-1),ui=()=>{t(20,de=!0)},Bt=()=>{t(20,de=!1)};function ts(fe){yt[fe?"unshift":"push"](()=>{Se=fe,t(16,Se)})}function ti(fe){yt[fe?"unshift":"push"](()=>{te=fe,t(3,te)})}function St(fe){yt[fe?"unshift":"push"](()=>{ve=fe,t(4,ve)})}return s.$$.update=()=>{if(s.$$.dirty[1]&524288&&t(0,V=i),s.$$.dirty[0]&2&&W&&(rt.set("hasSeenSettings",!0),t(10,O=!1),tt.pause(),Ce.setMouseEnabled(!1)),s.$$.dirty[0]&2&&(W||(tt.resume(),Ce.setMouseEnabled(!0))),s.$$.dirty[0]&4&&M&&(tt.pause(),Ce.setMouseEnabled(!1)),s.$$.dirty[0]&4&&(M||(tt.resume(),Ce.setMouseEnabled(!0))),s.$$.dirty[0]&25|s.$$.dirty[1]&262144&&!V&&!Q)try{t(49,Q=new Ph),te&&ve&&ze()}catch{console.log("Failed to initialise game"),t(5,j=!0),t(0,V=!0)}},[V,W,M,te,ve,j,X,ee,Z,U,O,z,N,q,re,oe,Se,ae,he,K,de,ht,$e,Pi,Ft,at,Pt,wi,r,l,a,n,o,c,f,u,g,b,m,w,y,D,L,T,x,be,ke,ni,Xt,Q,i,di,ci,Ni,hi,$i,$t,Nt,vs,fi,bt,es,ei,xt,ms,ui,Bt,ts,ti,St]}class Yv extends Qe{constructor(e){super(),Ze(this,e,Uv,xv,Xe,{},null,[-1,-1,-1])}}export{Yv as component};
