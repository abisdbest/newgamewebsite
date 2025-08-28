class PlaysaurusSdk {
    lastNewsCheckTime = 0;
    timeBetweenNewsChecks = 12 * 3600000; // 12 hours

    endpointRoot = "https://app.playsaurus.com";
    apiEndpoint = this.endpointRoot + "/api";
    profileUrl = this.endpointRoot + "/profile";

    errorHandler = null;

    cloudSaveId = -1;

    userAtomicId = null;
    eventSessionIds = {};

    generalPriceLocalizationId = null;
    bundlePriceLocalizationId = null;

    constructor() {
        window.addEventListener("load", async () => {
            try {
                this.errorHandler = new PlaysaurusErrorHandler();
                this.initSdk();
                this.initEventListeners();
                this.initAuthFrame();
                if (isWeb()) {
                    await localizePurchasePackPrices();
                    if (typeof (platform) != "undefined" && platform.initPurchases) {
                        platform.initPurchases();
                    }
                }
                else if (isSteam()) {
                    platform.getUserLocationData(
                        localizePurchasePackPrices.bind(this),
                        localizePurchasePackPrices.bind(this)
                    );
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }

    initSdk() {
        var config = {
            gameSlug: "mr-mine",
            endpoint: this.apiEndpoint,
            gameStorefront: this.getStorefrontName(),
            gameVersion: version + buildLetter + "." + revisionNumber,
            userUid: platform.getUserId() + "",
            locale: getLanguageCode(languageOverride),
            analytics: { enabled: true }
        };
        if (isMobile() && platform.isActualDevice) {
            config.dataCollector = new Playsaurus.CordovaDataCollector();
        }
        else {
            config.dataCollector = new Playsaurus.BrowserDataCollector();
        }
        config.gamePlatform = platformName();
        if (config.gamePlatform == "steam") {
            config.gamePlatform = "desktop";
            config.analytics.steamId = platform.getUserId();
        }
        try {
            Playsaurus.initialize(config);
        }
        catch (e) {
            this.handleError(e);
        }
    }

    initEventListeners() {
        if (isSteam()) {
            const { ipcRenderer } = require('electron');
            const maxExecutionTimeBeforeClose = 3000;
            ipcRenderer.on("before-close", async (event) => {
                // Force the window to close if endSession() takes too long
                var timeout = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, maxExecutionTimeBeforeClose);
                });
                await Promise.race([timeout, Playsaurus.analytics.endSession()]);
                ipcRenderer.send('before-close-done');
            });
        }
        else if (isMobile()) {
            document.addEventListener("pause", async function () {
                if (typeof (adManager) == "undefined" || !adManager.isWatchingAd()) {
                    await this.endSession();
                }
            }.bind(this));
            document.addEventListener("resume", function () {
                if (Playsaurus.analytics._session == null) {
                    this.initSdk();
                }
                this.lastNewsCheckTime = 0;
                this.fetchAnnouncementsIfDue();
            }.bind(this));
        }
        else {
            window.addEventListener("beforeunload", this.endSession);
        }
    }

    // AUTHENTICATION

    initAuthFrame() {
        try {
            this.authFrame = Playsaurus.auth.createAuthFrame({
                container: '#authFrameContainer',
                action: Playsaurus.AuthFrameAction.Default,
            });
        }
        catch (e) {
            this.handleError(e);
        }

        this.authFrame.returned.add((args) => {
            if (args.success) {
                console.log('Authentication successful!');
                console.log('Method:', args.method);
            } else {
                console.log('Authentication cancelled or failed');
            }
            this.hideAuthFrame();
        });

        this.authFrame.loaded.add(() => {
            const loadingIndicator = document.querySelector('#authLoadingOverlay');
            loadingIndicator.style.display = 'none';
        });

        this.authFrame.closed.add(() => {
            console.log('Authentication frame has been closed');
            const popup = document.querySelector('#authPopup');
            popup.style.display = 'none';
        });

        this.authFrame.failed.add(() => {
            window.alert('Oops! Something went wrong. Please try again later.');
            this.authFrame.close();
        });
    }

    openAuthFrame() {
        if (this.authFrame) {
            const popup = document.querySelector('#authPopup');
            popup.style.display = 'block';

            const loadingIndicator = document.querySelector('#authLoadingOverlay');
            loadingIndicator.style.display = 'block';

            this.authFrame.open();
        }
    }

    hideAuthFrame() {
        if (this.authFrame) {
            const popup = document.querySelector('#authPopup');
            popup.style.display = 'none';
            this.authFrame.close();
        }
    }

    isLoggedIn() {
        return Playsaurus.auth.isLoggedIn;
    }

    async logout() {
        showPurchaseLoadingOverlay();
        try {
            try {
                await Playsaurus.auth.logout();
            }
            catch (e) {
                this.handleError(e);
            }
            this.handleLogout();
        }
        catch (error) {
            console.error(error);
        }
        hidePurchaseLoadingOverlay();
    }

    handleLogout() {
        // nothing
    }

    async getUserProfile() {
        try {
            const user = await Playsaurus.auth.getProfile();
            return user;
        } catch (error) {
            this.handleError(error);
        }
        return null;
    }

    editUserProfile() {
        openExternalLinkInDefaultBrowser(this.profileUrl);
    }

    // CLOUD SAVE

    buildSaveInfo() {
        const saveName = sids[chosen];
        const saveData = exportgametext();
        const compressedSaveData = this.compressSaveData(saveData);
        return {
            playTime: playtime,
            fileName: saveName + '.dat',
            file: new Blob([compressedSaveData], { type: 'application/octet-stream' }),
            metadata: {
                depth: depth,
                money: "$" + beautifynum(money),
                encoding: "gzip"
            },
        };
    }

    compressSaveData(saveData) {
        return window.pako.gzip(saveData);
    }

    async decompressSaveData(saveBlob) {
        const arrayBuffer = await saveBlob.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const decompressedSaveData = pako.ungzip(uint8Array, { to: 'string' });
        return decompressedSaveData;
    }

    async saveToCloud() {
        const saveInfo = this.buildSaveInfo();
        let cloudSave = null;
        try {
            if (this.cloudSaveId === -1) {
                cloudSave = await Playsaurus.cloudSaves.create(saveInfo);
                console.log('Save created:', cloudSave);
            }
            else {
                cloudSave = await Playsaurus.cloudSaves.updateOrCreate(this.cloudSaveId, saveInfo);
                if (cloudSave.id === this.cloudSaveId) {
                    console.log('Save updated:', cloudSave);
                } else {
                    console.log('Save created:', cloudSave);
                }
            }
        }
        catch (error) {
            console.error('Failed to update or create save:', error);
            this.handleError(error);
        }
        if (cloudSave) {
            this.cloudSaveId = cloudSave.id;
        }
        return cloudSave;
    }

    async loadCloudSave(saveId, targetSlot = null) {
        try {
            const fileBlob = await Playsaurus.cloudSaves.download(saveId);
            const saveData = await this.decompressSaveData(fileBlob);
            console.log(saveData);
        } catch (error) {
            console.error('Failed to download save:', error);
            this.handleError(error);
        }
    }

    // ANALYTICS

    async endSession() {
        console.log("ENDING SESSION");
        try {
            await Playsaurus.analytics.endSession();
        } catch (error) {
            this.handleError(error);
        }
        console.log("SESSION ENDED");
        return true;
    }

    updateLocale(newLanguageCode) {
        Playsaurus.locale = newLanguageCode;
    }

    async localizePrices(prices, isBundle = false) {
        var args = {
            prices: []
        };
        for (var i = 0; i < prices.length; ++i) {
            args.prices[i] = new Playsaurus.Money(prices[i], "USD");
        }
        var expectedCountry = platform.getUserCountryCode();
        if (expectedCountry) {
            args.expectedCountry = expectedCountry;
        }
        var expectedCurrency = platform.getUserCurrencyCode();
        if (expectedCurrency) {
            args.expectedCurrency = expectedCurrency;
        }
        args.productType = isBundle ? "bundle" : "general";
        try {
            var result = await Playsaurus.prices.localizeMany(args);
        } catch (error) {
            this.handleError(error);
        }
        if (result && result[0]) {
            if (!isBundle) {
                this.generalPriceLocalizationId = result[0].priceLocalizationId
            }
            else {
                this.bundlePriceLocalizationId = result[0].priceLocalizationId
            }
            return result;
        }
        return null;
    }

    async logPurchase(data) {
        try {
            let localizationId = data.productType == "bundle" ? this.bundlePriceLocalizationId : this.generalPriceLocalizationId;
            const purchase = await Playsaurus.purchases.store({
                sku: data.sku,
                price: new Playsaurus.Money("" + data.amount, data.currency),
                currency: data.currency,
                transactionId: data.transactionId,
                productType: data.productType,
                priceLocalizationId: localizationId,
                paymentGateway: data.paymentGateway
            });

            console.log('Purchase logged successfully:', purchase);
        } catch (error) {
            console.error('Failed to log purchase:', error);
            this.handleError(error);
        }
    }

    getStorefrontName() {
        switch (platformName()) {
            case "ios":
                return "app_store";
            case "android":
                return "google_play";
            case "steam":
                return "steam";
            case "web":
                switch (platform.domain) {
                    case "armorgames":
                        return "armor_games";
                    case "crazygames":
                        return "crazy_games";
                    default:
                        return "playsaurus_web";
                }
        }
        return null;
    }

    getUserAtomicId() {
        return Playsaurus.getAtomicId();
    }

    setEventSessionId(eventSessionKey, id = null) {
        if (id == null) {
            id = crypto.randomUUID();
        }
        this.eventSessionIds[eventSessionKey] = id;
        return id;
    }

    getEventSessionId(eventSessionKey) {
        return this.eventSessionIds[eventSessionKey] || this.setEventSessionId("eventSessionKey");
    }

    clearEventSessionId(eventSessionKey) {
        this.eventSessionIds[eventSessionKey] = null;
    }

    // ANNOUNCEMENTS

    fetchAnnouncementsIfDue(openUiIfNew = true) {
        if (this.isDueForAnnouncements()) {
            try {
                return Playsaurus.announcements.fetch().then((result) => {
                    this.lastNewsCheckTime = Date.now();
                    if (openUiIfNew && result) {
                        openUiWithoutClosing(AnnouncementPopup, null, result);
                    }
                });

            }
            catch (e) {
                this.handleError(e);
            }
        }
    }

    isDueForAnnouncements() {
        return isGameLoaded
            && Date.now() > this.lastNewsCheckTime + this.timeBetweenNewsChecks
            && numGameLaunches > 1;
    }

    // EVENT LOGGING

    logEvent(eventName, eventData) {
        if (!isSimulating) {
            try {
                eventData = this.appendCommonEventData(eventData);
                Playsaurus.analytics.sendEvent(eventName, eventData);
            }
            catch (e) {
                this.handleError(e);
            }
        }
    }

    appendCommonEventData(eventData) {
        eventData.current_depth = depth;
        eventData.playtime = playtime;
        return eventData;
    }

    logPremiumCurrencySpent(ticketPrice, category, subtype) {
        this.logEvent(
            "premium_currency_spent",
            {
                ticket_price: ticketPrice,
                category: category,
                subtype: subtype
            }
        )
    }

    logPremiumCurrencyGained(addedTickets, source) {
        this.logEvent(
            "premium_currency_gained",
            {
                amount: addedTickets,
                from: source
            }
        )
    }

    logInAppPurchase(sku, amount, currency, usdAmount = 0) {
        this.logEvent(
            "in_app_purchase_completed",
            {
                sku: sku,
                usd_amount: usdAmount,
                amount: amount,
                currency: currency,
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
    }

    logPurchaseWindowViewed() {
        this.setEventSessionId("purchase");
        this.logEvent(
            "purchase_window_opened",
            {
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
    }

    logStartedPurchase(sku) {
        this.logEvent(
            "purchase_started",
            {
                sku: sku,
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
    }

    logCanceledPurchase(sku) {
        this.logEvent(
            "purchase_canceled",
            {
                sku: sku,
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
        this.clearEventSessionId("purchase");
    }

    logViewedOffer(sku) {
        this.setEventSessionId("purchase");
        this.logEvent(
            "offer_viewed",
            {
                sku: sku,
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
    }

    logFirstPurchase(sku, amount, currency, usdAmount) {
        this.logEvent(
            "first_purchase_completed",
            {
                sku: sku,
                usd_amount: usdAmount,
                amount: amount,
                currency: currency,
                purchase_session_id: this.getEventSessionId("purchase")
            }
        )
    }

    logDepthReached(newDepth) {
        this.logEvent(
            "depth_reached",
            {
                depth: newDepth
            }
        )
    }

    logBlackChestOpened(superMinerId, superMinerRarity, superMinerSoulsAmount) {
        this.logEvent(
            "black_chest_opened",
            {
                super_miner_id: superMinerId,
                super_miner_rarity: superMinerRarity,
                super_miner_souls_amount: superMinerSoulsAmount,
            }
        )
    }

    logOrangeFishCollected(atDepth) {
        this.logEvent(
            "orange_fish_found",
            {
                depth: atDepth
            }
        )
    }

    logDrillUpgrade(upgradedPartIndex, newPartLevel, wattagePercentChange, cargoPercentChange) {
        this.logEvent(
            "drill_upgraded",
            {
                upgraded_part_index: upgradedPartIndex,
                new_part_level: newPartLevel,
                wattage_percent_change: wattagePercentChange,
                cargo_percent_change: cargoPercentChange
            }
        )
    }

    logMinerPurchase(world, newCount, newLevel) {
        this.logEvent(
            "miner_upgrade_purchased",
            {
                world: world,
                new_miner_count: newCount,
                new_miner_level: newLevel
            }
        )
    }

    logStructureUpgrade(structureId, newLevel) {
        this.logEvent(
            "structure_upgraded",
            {
                structure_id: structureId,
                new_level: newLevel
            }
        )
    }

    logExcavationStarted(scientistRarity, scientistLevel, deathChance, rewardId, duration) {
        this.logEvent(
            "excavation_started",
            {
                scientist_rarity: scientistRarity,
                scientist_level: scientistLevel,
                death_chance: deathChance,
                reward_id: rewardId,
                duration: duration
            }
        )
    }

    logCaveStarted(caveDepth) {
        this.logEvent(
            "cave_started",
            {
                cave_depth: caveDepth,
                total_caves_explored: numberOfCavesExplored
            }
        )
    }

    logQuestCompleted(questId) {
        this.logEvent(
            "quest_completed",
            {
                quest_id: questId
            }
        )
    }

    logRedeemedCode(code) {
        this.logEvent(
            "code_redeemed",
            {
                code: code
            }
        )
    }

    logAdLoaded(loadDuration, networkName, revenue, trackingDisabled) {
        this.setEventSessionId("ad");
        this.logEvent(
            "ad_loaded",
            {
                load_duration: loadDuration,
                ad_session_id: this.getEventSessionId("ad"),
                network: networkName,
                revenue: revenue,
                tracking_disabled: trackingDisabled
            }
        )
    }

    logAdStarted(networkName, revenue, trackingDisabled, placementId) {
        this.logEvent(
            "ad_started",
            {
                ad_session_id: this.getEventSessionId("ad"),
                network: networkName,
                revenue: revenue,
                tracking_disabled: trackingDisabled,
                placement: placementId
            }
        )
    }

    logAdCompleted(watchDuration, networkName, revenue, trackingDisabled, placementId) {
        this.logEvent(
            "ad_completed",
            {
                completion_duration: watchDuration,
                ad_session_id: this.getEventSessionId("ad"),
                network: networkName,
                revenue: revenue,
                tracking_disabled: trackingDisabled,
                placement: placementId
            }
        );
        this.clearEventSessionId("ad");
    }

    logAdError(errorCode, networkName, revenue, trackingDisabled, placementId = null) {
        this.logEvent(
            "ad_failed",
            {
                error_code: errorCode,
                ad_session_id: this.getEventSessionId("ad"),
                network: networkName,
                revenue: revenue,
                tracking_disabled: trackingDisabled,
                placement: placementId
            }
        )
        this.clearEventSessionId("ad");
    }

    logClickedCommunityButton() {
        this.logEvent(
            "community_button_clicked",
            {}
        )
    }

    logImportedSaveFile() {
        this.logEvent(
            "game_imported",
            {}
        )
    }

    logExportedSaveFile() {
        this.logEvent(
            "game_exported",
            {}
        )
    }

    logSaveLoadError(errorType, message, initiator) {
        this.logEvent(
            "save_load_failed",
            {
                error_type: errorType,
                error_message: message,
                save_load_initiator: initiator,
                time_since_last_play: timeSinceLastPlay()
            }
        )
    }

    handleError(error) {
        if (error instanceof Playsaurus.PlaysaurusNetworkError) {
            this.errorHandler.handle(error);
        }
        else {
            throw error;
        }
    }
}

const playsaurusSdk = new PlaysaurusSdk();