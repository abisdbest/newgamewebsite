(() => {
  window.PokiSDK = {
    init: function() {
      console.log('[PokiSDK] Offline stub initialized');
      return Promise.resolve();
    },
    initWithVideoHB: function() {
      return Promise.resolve();
    },
    customEvent: function() {},
    commercialBreak: function() {
      console.log('[PokiSDK] commercialBreak requested');
      return new Promise(function(resolve) {
        setTimeout(function() {
          console.log('[PokiSDK] commercialBreak finished');
          resolve();
        }, 50);
      });
    },
    rewardedBreak: function() {
      console.log('[PokiSDK] rewardedBreak requested');
      return new Promise(function(resolve) {
        setTimeout(function() {
          console.log('[PokiSDK] rewardedBreak finished');
          resolve(true);
        }, 50);
      });
    },
    displayAd: function() {},
    destroyAd: function() {},
    getLeaderboard: function() { return Promise.resolve([]); },
    getSharableURL: function() { return Promise.resolve(window.location.href); },
    getURLParam: function(n) { return ""; },
    gameLoadingStart: function() { console.log('[PokiSDK] gameLoadingStart'); },
    gameLoadingFinished: function() { console.log('[PokiSDK] gameLoadingFinished'); },
    gameLoadingProgress: function() {},
    gameplayStart: function() { console.log('[PokiSDK] gameplayStart'); },
    gameplayStop: function() { console.log('[PokiSDK] gameplayStop'); },
    happyTime: function() {},
    roundStart: function() {},
    roundEnd: function() {},
    muteAd: function() {},
    setDebug: function() {},
    setPlayerAge: function() {},
    togglePlayerAdvertisingConsent: function() {},
    logError: function() {},
    sendHighscore: function() {},
    setDebugTouchOverlayController: function() {},
    disableProgrammatic: function() {}
  };
})();