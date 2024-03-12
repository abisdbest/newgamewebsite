/*****************************************
*                                       *
* Windows 96 - b12839.88efa922          *
* Copyright (c) SYSTEM 36 2023.         *
*                                       *
* All external licenses apply           *
*                                       *
*****************************************/
!function(){const JWK={kty:"EC",crv:"P-256",key_ops:["verify"],ext:!0,x:"tlsbA1P_AGkrA_L_XEGlW2G2g2eYxkD2bsDVUboZIxs",y:"XOCxlduuXKEomeS174YxRS5ox0OhKq9u-W9IANtYVmU"},DEV=!1,KERNEL_URL=location+"/system/libraries/kernel/sys-base/kernel.js",alg={name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}},$loadKernel=async function(){delete window.$loadKernel,console.group("[ kload ]"),console.log("checking for installed kernel..."),console.log("No KLoader config found - will resume remote boot.");try{kutil.sysrom.exists("KINJECT.js")&&eval(kutil.sysrom.read("KINJECT.js"))}catch(e){return void console.error("Critical stop in boot process: ",e)}const scriptEl=document.createElement("script"),kernelReq=await fetch(KERNEL_URL),kernText=await kernelReq.text();scriptEl.textContent=kernText;try{kutil.sysrom.write("KERNEL.js",kernText)}catch(e){console.error("Kernel caching failed",e)}return document.head.appendChild(scriptEl),console.groupEnd(),0};window.$loadKernel=$loadKernel,window.$96={isSigned:!0}}();