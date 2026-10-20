const fs = require('fs');

const file = 'source/retro bowl/html5game/RetroBowl.js';
let js = fs.readFileSync(file, 'utf8');

// 3. Patch _Kz5 unhandledrejection
const targetKz5 = 'function _Kz5(error){\r\nvar _Mu="Unhandled Rejection - "+error.message;_yR2(_Mu);_QG(-2);debugger;return false}';
console.log('Has targetKz5 with CRLF?', js.includes(targetKz5));
if (js.includes(targetKz5)) {
  const replacementKz5 = 'function _Kz5(error){\r\nvar _m=(error&&(error.reason?(error.reason.message||String(error.reason)):error.message))||String(error);\r\nif(typeof _m==="string"&&(_m.includes("DataCloneError")||_m.includes("decode")||_m.includes("ArrayBuffer")||_m.includes("Illegal file handle"))){console.warn("Suppressed GM rejection: "+_m);return true;}\r\nvar _Mu="Unhandled Rejection - "+_m;_yR2(_Mu);_QG(-2);debugger;return false}';
  js = js.replace(targetKz5, replacementKz5);
}

// 4. Patch _Iz5 unhandled error
const idxIz5 = js.indexOf('function _Iz5(event){');
if (idxIz5 !== -1) {
  const endIz5 = js.indexOf('debugger;return false}', idxIz5) + 'debugger;return false}'.length;
  const chunk = js.substring(idxIz5, endIz5);
  console.log('Found chunk _Iz5:', chunk);
  const replacementIz5 = 'function _Iz5(event){\r\nvar _m=(event&&(event.message||(event.error&&event.error.message)))||"";\r\nif(typeof _m==="string"&&(_m.includes("DataCloneError")||_m.includes("decode")||_m.includes("ArrayBuffer")||_m.includes("Illegal file handle"))){console.warn("Suppressed GM exception: "+_m);return true;}\r\n' + chunk.substring('function _Iz5(event){'.length);
  js = js.replace(chunk, replacementIz5);
}

fs.writeFileSync(file, js, 'utf8');
console.log('CRLF Patch completed!');
