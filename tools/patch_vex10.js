const fs = require('fs');
const path = require('path');

// 1. Patch vex10.js
const vex10Targets = [
  path.join(__dirname, '../source/vex 10/vex10.js'),
  path.join(__dirname, '../preview/games/vex-10/vex10.js')
];

const startMarker = 'class r{static init(t,e){';
const endMarker = 'e.AzerionSDK=r';
const newBlock = 'class r{static init(t,e){return i(this,arguments,void 0,function*(t,e,s=!0){!0===s&&(window.addEventListener("keydown",function(t){t.preventDefault()}),window.addEventListener("keyup",function(t){t.preventDefault()})),a.Constants.DISABLE_BLOOD=!1,a.Constants.REWARD_EXCEPTION_PUBLISHER=!1,n.PauseHandler.getInstance(t),r.addListeners(),o.LoaderHelper.hide(),e()})}static onLoadProgress(t){}static onLoadComplete(t){return i(this,void 0,void 0,function*(){o.LoaderHelper.hide(),t()})}static addListeners(){}static showInterstitialAd(){return Promise.resolve()}static showRewardedAd(t,e,s){return i(this,void 0,void 0,function*(){o.LoaderHelper.hide(),e(!0)})}static isAdPlaying(){return!1}static preloadAd(t){}static onGameStart(){return Promise.resolve()}static onGameEnd(t){return Promise.resolve()}}e.AzerionSDK=r';

vex10Targets.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker, startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx + endMarker.length);
    content = before + newBlock + after;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched vex10.js at:', filePath);
  }
});

// 2. Patch main.min.js to prevent any redirect
const mainMinTargets = [
  path.join(__dirname, '../source/vex 10/main.min.js'),
  path.join(__dirname, '../preview/games/vex-10/main.min.js')
];

mainMinTargets.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  // Neutralize blocked redirect
  content = content.replace(/window\.location\.href\s*=\s*["']https:\/\/html5\.api\.gamedistribution\.com\/blocked\.html\?/g, 'console.warn("Blocked redirect prevented: ",');
  // Neutralize check blocking
  content = content.replace(/this\._redirectToBlocking\(!1,!n\)/g, 'console.log("Domain check bypassed")');
  content = content.replace(/this\._redirectToBlocking\(!0\)/g, 'console.log("Token check bypassed")');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Patched main.min.js at:', filePath);
});

// 3. Patch azerion-libs.js to not point to gamedistribution
const azerionLibsTargets = [
  path.join(__dirname, '../source/vex 10/azerion-libs.js'),
  path.join(__dirname, '../preview/games/vex-10/azerion-libs.js')
];

azerionLibsTargets.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.split('//html5.api.gamedistribution.com/main.min.js').join('data:application/javascript,');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Patched azerion-libs.js at:', filePath);
});

// 4. Update index.html in both locations
const indexTargets = [
  path.join(__dirname, '../source/vex 10/index.html'),
  path.join(__dirname, '../preview/games/vex-10/index.html')
];

const mockScript = `
    <style>
        #adblocker-overlay, .adblocker-container, [id*="adblock"], [class*="adblock"], #AzerionAdBlocker, .azerion-adblocker {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
        }
    </style>
    <script>
        window.GD_BLCK_RMV = {
            AdBlockerPage: function() {
                this.add = function() {};
                this.show = function() {};
                this.hide = function() {};
                this.remove = function() {};
            }
        };
        window._azerionIntegrationSDK = {
            init: function() { return Promise.resolve(); },
            onLoadStart: function() { return Promise.resolve(); },
            onLoadProgress: function() {},
            isAdProviderLoaded: function() { return true; },
            onAdProviderLoaded: function() { return Promise.resolve(); },
            onLoadComplete: function() { return Promise.resolve(); },
            preloadAd: function() {},
            showInterstitialAd: function() { return Promise.resolve(); },
            addListeners: function() {},
            showRewardedAd: function() { return Promise.resolve({ rewarded: true }); },
            isAdPlaying: function() { return false; },
            onGameStart: function() { return Promise.resolve(); },
            onGameEnd: function() { return Promise.resolve(); }
        };
        window._azerionIntegration = { playBtn: false, bd: 0 };
        window.h5branding = window.h5branding || {
            Hosts: {
                isBloodFree: function() { return false; },
                isSpecificPartner: function() { return false; },
                isSocialMediaBlockedPublisher: function() { return false; }
            },
            Utils: {
                isOnDevice: function() { return false; }
            }
        };
    </script>
`;

indexTargets.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove existing styles/GD_BLCK_RMV if present
  content = content.replace(/<style>[\s\S]*?#adblocker-overlay[\s\S]*?<\/style>/g, '');
  content = content.replace(/<script>[\s\S]*?window\.GD_BLCK_RMV[\s\S]*?<\/script>/g, '');

  // Remove azerion-integration-sdk.js and azerion-libs.js script tags
  content = content.replace(/<script src="azerion-integration-sdk\.js".*?<\/script>\s*/g, '');
  content = content.replace(/<script src="azerion-libs\.js".*?<\/script>\s*/g, '');

  // Insert mockScript right before msstart or h5-azerion-branding
  if (content.includes('<script src="msstart-v1.0.0-rc.20.min.js">')) {
    content = content.replace('<script src="msstart-v1.0.0-rc.20.min.js">', mockScript.trim() + '\n<script src="msstart-v1.0.0-rc.20.min.js">');
  } else {
    content = content.replace('</head>', mockScript.trim() + '\n</head>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated index.html at:', filePath);
});
