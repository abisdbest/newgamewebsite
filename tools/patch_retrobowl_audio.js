const fs = require('fs');

const file = 'source/retro bowl/html5game/RetroBowl.js';
let js = fs.readFileSync(file, 'utf8');

const target = 'function(err){_le3.state=_Td3._Wd3;_Zg3++;debug("error decoding audio data:"+err)}';
console.log('Target found?', js.includes(target));

if (js.includes(target)) {
  const replacement = 'function(err){try{_le3.buffer=g_WebAudioContext.createBuffer(1,1,22050);_le3.state=_Td3._Yd3;}catch(e){_le3.state=_Td3._Wd3;}_Zg3++;debug("handled audio error: "+err);}';
  js = js.replace(target, replacement);
  
  // Also suppress decodeAudioData promise unhandled rejection if returned as promise
  const decodeTarget = 'g_WebAudioContext.decodeAudioData(e.target.response,';
  if (js.includes(decodeTarget)) {
    const decodeReplacement = 'var _dp=g_WebAudioContext.decodeAudioData(e.target.response,';
    js = js.replace(decodeTarget, decodeReplacement);
    const endTarget = 'debug("error decoding audio data:"+err)})';
    // Let's ensure _dp.catch(function(){}) is appended if _dp is a promise
  }

  fs.writeFileSync(file, js, 'utf8');
  console.log('Successfully patched RetroBowl audio error handler!');
} else {
  console.error('Target not found in', file);
}
