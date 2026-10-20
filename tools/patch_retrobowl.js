const fs = require('fs');

const file = 'source/retro bowl/html5game/RetroBowl.js';
let js = fs.readFileSync(file, 'utf8');

// 1. Patch _dM so it never returns -1 on missing files
const targetDM = 'if(_nT2==null)return -1;';
console.log('targetDM found?', js.includes(targetDM));
if (js.includes(targetDM)) {
  js = js.replace(targetDM, 'if(_nT2==null)_nT2="";');
  console.log('Patched _dM to prevent illegal file handle!');
}

// 2. Patch _2w fallback for college name
const target2w = 'return _YH1[_yt(_Tv(yyfminus(_mj(_eI),\n1)),_YH1)];';
const target2wClean = 'return _YH1[_yt(_Tv(yyfminus(_mj(_eI),';
console.log('target2w found?', js.includes(target2wClean));
if (js.includes(target2wClean)) {
  const idx = js.indexOf(target2wClean);
  const endIdx = js.indexOf(';', idx) + 1;
  const oldCode = js.substring(idx, endIdx);
  const newCode = 'if(!_eI)return "Ohio State"; ' + oldCode;
  js = js.replace(oldCode, newCode);
  console.log('Patched _2w fallback college name!');
}

fs.writeFileSync(file, js, 'utf8');
console.log('RetroBowl.js successfully updated!');
